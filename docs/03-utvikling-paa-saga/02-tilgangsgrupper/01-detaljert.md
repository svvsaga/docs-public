# Detaljert om tilganger

Her følger informasjon som kan være interessant for avanserte scenarier, som begrensning av rettigheter, deling av andre datalagere, etc.

## Roller i GCP

Tilgangsgruppene på prosjekt- eller datasonenivå er delt inn i **Reader** og **Observer**. Disse gruppene gir følgende tilganger:

### Reader

Dette er tilganger som gis til gruppene på nederste nivå i _reader_-hierarkiet, altså gruppene som opprettes per datasone.

- **BigQuery:**
  `roles/bigquery.dataViewer` per BQ-datasett (konsument må betale for spørringer i eget prosjekt)

- **GCS:**
  `roles/storage.objectViewer` på bøttenivå

- **Cloud SQL/Postgres:**
  Må lage en "federated data source connection" og gi gruppen `bigquery.connection.user` på denne. Andre datalagere legges til her ved behov

### Observer

Dette er tilganger som gis til gruppene på nederste nivå i _observer_-hierarkiet, altså gruppene som opprettes per prosjekt.

- **For BigQuery:** `roles/bigquery.metadataViewer` per BQ-datasett (konsument må betale for spørringer i eget prosjekt)

- **For alle andre typer datasett:** Må ha lesetilgang til datakatalogen (`roles/datacatalog.viewer`), hvor datasettet må være registrert med metadata.

### IAM-bindings for datasett-grupper

Siden selve tilgangsstyringen mot ressurser gjøres på datasone-nivå, er det en del IAM-bindings som må på plass for at brukere skal kunne finne fram til prosjekt-ressursene de har tilgang til. Dette varierer også noe basert på hva slags ressurs det er snakk om.

#### Overordnet

Alle tilgangsgruper på datasone-nivå må ha rollen `roles/browser` for å i det hele tatt kunne velge prosjektet i GCP-console.

#### Google Cloud Storage

Alle tilgangsgrupper som skal gjelde for en GCS-bøtte må ha rettigheten `storage.buckets.list` for å kunne se hvilke bøtter som finnes. Dessverre er det ingen innebygde roller i dag som gir denne rettigheten uten også å gi leserettighet til objektene i samtlige bøtter; vi har derfor definert en Custom Role `roles/storage.browser` for å støtte visning av bøtter. Denne blir automatisk opprettet ved prosjektopprettelse.

Tilgangsgrupper må også ha rollen `roles/storage.objectViewer` på de spesifikke bøttene de skal ha tilgang til.

#### BigQuery

Alle tilgangsgrupper som skal gjelde for et BQ-datasett må ha rollen `roles/bigquery.dataViewer` på gjeldende datasett for å kunne se datasettet og tabeller.
