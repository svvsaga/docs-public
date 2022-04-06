---
sidebar_position: 1
---

# Velkommen til Saga

## Hva er Saga?

Statens vegvesen har enorme mengder data, fordelt på en rekke systemer, som NVDB, Vegvær, Trafikkdata, m.m..

I dag er det ikke trivielt for en dataviter å utføre analyse på disse dataene, av ulike grunner:

- Kompleks tilgangsstyring
- Ulike teknologier
- Krever teknisk kompetanse

Med dataplattformen Saga ønsker vi å samle mest mulig relevant data, og tilgjengeliggjøre disse på et standardisert og kompatibelt format som gjør det enkelt å utføre analyser og sammenstillinger, uten å måtte bruke mye tid på oppsett og byråkrati.

Dette er mulig gjennom bruk av moderne skyteknologi i Google Cloud Platform, samt en rekke verktøy og dokumentasjon som legger til rette for at datavitere og andre kan komme i gang med analyser på en enkel og smertefri måte.

## Når bør man velge Saga som analyseplattform?

Saga tilbyr en rekke tjenester som er nyttige for deg som er dataanalytiker, dataviter eller dataingeniør i Statens vegvesen, spesielt når det kommer til det å skaffe seg innsikt i - og sammenstille data fra - forskjellige kilder når datamengdene blir store.

Datasettene du finner i plattformens [Datakatalog](https://saga-datacatalog-prod-lszg.ew.r.appspot.com/) inneholder data som er tilgjengeliggjort fra mange forskjellige kilder, bl.a. Vegloggen/HBT, Trafikkdata og Vegvær. Innholdet i disse datasettene er standardisert slik at det er enkelt å sammenstille data på tvers av kildene. Dette er gjort ved at ofte brukte felter som tidsstempler, lokasjoner og geografier har samme form i alle datasettene, slik at de kan brukes til å avdekke sammenfallende rader.

De fleste datasettene på plattformen er tilgjengeliggjort i sin standardiserte form i [BigQuery](https://www.notion.so/TODO-Analyse-av-store-datamengder-i-BigQuery-ca9b88f9084d4339b31c108abc06eb28). Her kan man dra nytte av eksisterende SQL-kunnskap for å raskt gjøre avanserte analyser på store mengder data, med bruk av kraftige analytiske funksjoner og god [GIS-funksjonalitet](https://cloud.google.com/bigquery/docs/geospatial-data). Resultat av analyser kan enkelt deles med andre for samarbeid eller videre bruk på plattformen. De kan også eksporteres til andre verktøy som [Google Data Studio](https://datastudio.google.com/) eller [Power BI](https://powerbi.microsoft.com/) for mer visuelle og interaktive rapporter.

Det er også mulig å eksportere de resulterende dataene/tabellene fra analyser i BigQuery til fillageret Google Cloud Storage, for å ta vare på eller tilgjengeliggjøre store mengder data for tredjeparts verktøy. GCS er også godt egnet for import av store mengder filer til GCP, da disse kan igjen enkelt dras nytte av fra BigQuery eller andre verktøy til bruk i videre analyser.

All rådata som ligger til grunn for de standardiserte dataene i Saga ligger også lagret i GCS. På denne måten er de tilgjengelige om man ønsker å reprossesere data, om det være seg for å rette feil eller at man trenger å utlede annen informasjon enn det som allerede er standardisert. 

Siden datasettene på Saga ligger i BigQuery, kan de også sammenstilles med eksisterende offentlige datasett, som de som ligger i [Google Cloud Public Dataset Program](https://cloud.google.com/bigquery/public-data). Her finnes flere hundre åpne datasett med f.eks. COVID-19 data, OpenStreetMap, globale værvarsel og mye mer.

## Når bør man -ikke- velge Saga?

I tilfeller der dataene man ønsker å behandle eller dele inneholder personsensitiv informasjon kan man ikke bruke Saga, dette pga hensynet til GDPR.

Saga er heller ikke ment til bruk for transaksjonell/operasjonell data, dvs. datalager som brukes som primærlagring for et gitt system.
