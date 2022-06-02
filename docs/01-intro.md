---
sidebar_position: 1
---

# Velkommen til Saga

## Hva er Saga?

Statens vegvesen har enorme mengder data fordelt på en rekke systemer som for eksempel NVDB, Vegvær, Trafikkdata og Vegloggen/HBT.

I dag er det ikke trivielt for en dataanalytiker, dataingeniør eller andre å utføre analyse på disse dataene av ulike grunner:

- Dataene ligger i mange ulike systemer.
- Det kan være vanskelig eller tidkrevende å få tilgang til dataene.
- Du må beherske ulike teknologier.
- Det er krevende å analysere store datamengder.
- Det kreves teknisk kompetanse for å hente dataene og behandle dataene.

Med dataplattformen Saga ønsker vi å samle mest mulig relevant data og tilgjengeliggjøre disse på et standardisert og kompatibelt format. Dette skal gjøre det bedre å utføre analyser og sammenstillinger uten å måtte bruke mye tid på oppsett, leting etter data og bestillinger.

Dette er mulig gjennom bruk av moderne sky-teknologi i Google Cloud Platform (GCP). I tillegg kan en rekke verktøy og dokumentasjon legge til rette for at dataanalytikere, dataingeniører og andre fagdisipliner kan komme i gang med analyser på en smertefri måte.

![Visualisering av hva Saga ønsker å oppnå med ny plattform](/img/saga-goal.png)

## Når bør du velge Saga som analyseplattform?

Saga tilbyr en rekke tjenester som er nyttige for deg som er dataanalytiker, dataingeniør eller et domeneteam i Statens vegvesen. Tjenestene er spesielt verdifulle for å skaffe seg innsikt i - og sammenstille data fra - forskjellige kilder når datamengdene blir store.

Datasettene du finner i plattformens [Datakatalog](https://saga-datacatalog-prod-lszg.ew.r.appspot.com/) inneholder data som er tilgjengeliggjort fra mange forskjellige kilder, blant annet Vegloggen/HBT, Trafikkdata og Vegvær. Innholdet i disse datasettene er standardisert slik at du kan sammenstille data på tvers av ulike kilder. Dette er gjort ved at felter som er ofte brukt (eksempelvis tidsstempler, lokasjoner og geografier) har samme form i alle datasettene, slik at de kan brukes til å avdekke sammenfallende rader.

De fleste datasettene på plattformen er tilgjengeliggjort i sin standardiserte form i [BigQuery](bigquery). Her kan du dra nytte av eksisterende SQL-kunnskap for å gjøre avanserte analyser på store mengder data, med bruk av kraftige analytiske funksjoner og god [GIS-funksjonalitet](https://cloud.google.com/bigquery/docs/geospatial-data). Resultat av analyser kan enkelt deles med andre for samarbeid eller videre bruk på plattformen. Resultatene kan også eksporteres til andre verktøy som [Google Data Studio](https://datastudio.google.com/) eller [Power BI](https://powerbi.microsoft.com/) for mer visuelle og interaktive rapporter.

Det er også mulig å eksportere de resulterende dataene/tabellene fra analyser i BigQuery til fil-lageret Google Cloud Storage (GCS). Da kan du ta vare på eller tilgjengeliggjøre store mengder data for tredjeparts verktøy. GCS er også godt egnet for import av store mengder filer til GCP, da disse kan dras nytte av fra BigQuery eller andre verktøy til bruk i videre analyser.

All rådata som ligger til grunn for de standardiserte dataene i Saga ligger også lagret i GCS. På denne måten er de tilgjengelige om du ønsker å reprossesere data, enten for å rette feil eller for at du trenger å utlede annen informasjon enn det som allerede er standardisert.

Siden datasettene på Saga ligger i BigQuery, kan de også sammenstilles med eksisterende offentlige datasett, som de som ligger i [Google Cloud Public Dataset Program](https://cloud.google.com/bigquery/public-data). Her finnes flere hundre åpne datasett med eksempelvis COVID-19 data, OpenStreetMap og globale værvarsel.

## Når bør du _ikke_ velge Saga?

I tilfeller der dataene du ønsker å behandle eller dele inneholder person-sensitiv informasjon kan du ikke bruke Saga, på grunn av personvern-hensyn (GDPR).

Saga er heller ikke ment til bruk for transaksjonell og operasjonell data, som vil si datalager som brukes som primærlagring for et gitt system.
