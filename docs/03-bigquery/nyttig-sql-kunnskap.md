# Nyttig SQL-kunnskap

Denne siden samler nyttig informasjon og queries som kan være kjekke å vite om når man gjør analyser med BigQuery.

## Tablesample

Noen ganger ønsker man å få et overblikk over innholdet i en tabell. Kanskje inneholder tabellen veldig store mengder data som gjør det unødvendig dyrt å eksperimentere med queries mot den, eller man trenger bare å gjøre seg opp en formening om spørringen kommer til å fungere eller ikke i forkant av at man kjører den mot hele datasettet.

I disse tilfellene kan `TABLESAMPLE` brukes for å kjøre spørringen mot et randomisert utvalg samples av de underliggende radene i tabellen. Under vises en eksempelspørring der 1% av innholdet i tabellen som inneholder situasjoner fra Vegloggen/HBT. Denne spørringen henter i overkant av 100MB isteden for de ~17GB tabellen inneholder per dags dato.

```sql
SELECT
  *
FROM
  `saga-veglogg-prod-wznf.internal.situations_v2`
TABLESAMPLE SYSTEM
  (1 PERCENT)
```


## Partisjonering

For tabeller med store mengder data kan partisjonering benyttes for å samlokalisere data basert på et utvalg kolonner. Dette kan både ha en positivt effekt på pris og effektiviteten på spørringene da bare trenger å operere på deler av dataene.

Eksempelet under viser hvordan den partisjonerte tabellen `internal.timetrafikk` bare trenger å hente et subsett av dataene, selv om man bruker `SELECT *`, da tabellen er partisjonert på feltet `from`. Filteret i `WHERE` delen av spørringen gjør her at vi bare henter rader for inneværende døgn. At vi her tar i bruk et filter på den partisjonerte kolonnen gjør at mengden data som må hentes går fra ~600GB til ~800MB.

```sql
SELECT
  *
FROM
  `saga-trafikkdata-prod-pz8l.internal.timetrafikk`
WHERE
  `from` > TIMESTAMP_TRUNC(CURRENT_TIMESTAMP(), DAY)
```


## Gruppering og aggregering

Ved å begnytte seg av nøkkelordene `GROUP BY` kan radene i utvalget grupperes på gitte kolonner. Slik kan man enkelt gjennomføre aggregeringer over flere rader, ved å dra nytte av [BigQuery sine aggregat-funksjoner](https://cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_analytic_functions).

Eksempelet under viser hvordan man ved å gruppere målestasjoner og deres målinger fra 1. januar 22 kan regne ut gjennomsnittlig lufttemperatur for denne dagen med funksjonen `AVG`.

```sql
SELECT
  navn,
  DATE(md.maaletidspunkt, "Europe/Oslo") dato,
  ROUND(AVG(lufttemperaturCelsius), 1) gjennomsnittLufttemperaturCelsius,
FROM
    `saga-vegvar-prod-znny.standardized.maaledata` md
JOIN
  `saga-vegvar-prod-znny.standardized.maalestasjoner` ms
  ON ms.id = md.maalestasjonId
  AND ms.versjon = md.maalestasjonVersjon
WHERE
  DATE(md.maaletidspunkt, "Europe/Oslo") = "2022-01-01"
GROUP BY
  navn, dato
```

## Repeterende rader

Bigquery støtter at felter kan være repeterende innad i en rad. Denne type data kan man spørre ut ved å "krysse" radene fra den opprinnelige tabellen mot resultatet av operasjonen `UNNEST()`.

Eksempelet under viser hvordan den opprinnelige radens `trpId` og `dato` blir krysset med hver oppføring i det repeterende feltet `byLane`, og man ender med å få vist trafikk per felt per time for det valgte trafikktellepunktet den gitte dagen..

```sql
SELECT
  trpId,
  DATETIME(`from`, "Europe/Oslo") AS dato,
  lanes.lane.laneNumber as felt,
  lanes.total.volumeNumbers.volume as feltVolum
FROM
  `saga-trafikkdata-prod-pz8l.standardized.timetrafikk` timetrafikk,
  UNNEST(byLane) lanes
WHERE
  DATE(`from`, "Europe/Oslo") = "2021-09-15"
  AND trpId = "16219V72812"
ORDER BY
  `from`, felt
```

## Testdata for utforming av spørringer

Om man ønsker å eksperimentere med funksjonalitet i BigQuery eller forstå hvordan noen av de tilgjengelige SQL-operasjonene fungerer, kan det være kjekt å generere test data som del av selve spørringen. Dette kan f.eks. gjøres med en kombinasjon av `SELECT` og `UNNEST()` av en liste med `STRUCT`s.

```sql
SELECT
  TIMESTAMP_TRUNC(instant, HOUR) as hour,
  MAX(value) as maxValue
FROM
  UNNEST([
    STRUCT(41 as value, TIMESTAMP("2022-04-08 10:51:42 UTC") as instant),
    (43, TIMESTAMP("2022-04-08 11:52:31 UTC")),
    (42, TIMESTAMP("2022-04-08 11:55:42 UTC")),
    (43, TIMESTAMP("2022-04-08 12:51:22 UTC")),
    (44, TIMESTAMP("2022-04-08 12:55:52 UTC"))])
GROUP BY
  hour
```

En annen variant av dette kan være å bruke `UNION ALL`.

```sql
SELECT
  TIMESTAMP_TRUNC(instant, HOUR) as hour,
  MAX(value) as maxValue
FROM
  (SELECT 41 as value, TIMESTAMP("2022-04-08 10:51:42 UTC") as instant
   UNION ALL SELECT 43, TIMESTAMP("2022-04-08 11:52:31 UTC")
   UNION ALL SELECT 42, TIMESTAMP("2022-04-08 11:55:42 UTC")
   UNION ALL SELECT 43, TIMESTAMP("2022-04-08 12:51:22 UTC")
   UNION ALL SELECT 44, TIMESTAMP("2022-04-08 12:55:52 UTC"))
GROUP BY
  hour
```

## Deduplisering

Ofte inneholder datasett og deres tabeller duplikate rader som det er ønskelig å bli kvitt før videre analyser gjennomføres, for å unngå feil i beregninger eller forenkle spørringene som må gjøres. Ett slikt eksempel der dette kan være nyttig er i datasettet Målestasjoner, der målestasjoner kan opptre flere ganger i forskjellig versjon, f.eks. om de har endret navn. BigQuery har flere måter å fjerne disse duplikate radene på.

Eksempelet under viser hvordan man kan bruke nøkkelordene `PARTITION BY` til å partisjonere utvalget rader på feltet `id`, og sortere innad i hver av disse partisjonene basert på `versjon`, vha. nøkkelordene `ORDER BY`. Slik vil de nyeste versjonene av målestasjonene komme først i partisjonen. Hver av radene i partisjonen blir så tildelt et radnummer med funksjonen `ROW_NUMBER()` før en ytre `SELECT` igjen bare tar vare på radene med `rowNumber = 1`, for å sikre at man ender med én rad per målestasjon. Dette vil være den utgaven av målestasjonen som har det høyeste versjonsnummeret.

```sql
SELECT
  * EXCEPT (rowNumber)
FROM
  (SELECT
     id,
     versjon,
     navn,
     ROW_NUMBER() OVER (
        PARTITION BY id
        ORDER BY CAST(versjon AS INT) DESC) rowNumber
    FROM `saga-vegvar-prod-znny.standardized.maalestasjoner`)
WHERE
  rowNumber = 1
```