# Tilgang til data

Ulik data har behov for ulike nivåer av tilgjengelighet på grunn av innholdet i dataen. Derfor har vi tilgangskontroll, som styrer tilgang til data gjennom kombinasjonen av _identity-role-resource_. Ergo: Hvem (_identity_) har hvilken tilgang (_role_) til hvilken ressurs (_resource_).

## Type tilgang på dataplattformen

Vi bruker et gruppehierarki for å styre brukeres tilgang til ulike datasoner på dataplattformen. Dette gjør det enkelt å gi personer eller "service accounts" tilgang til en eller flere datasoner ved å legge de til i gitte tilgangsgrupper fremfor å lage IAM-bindings (Identity and Access Management-koblinger) for enkeltpersoner.

I hovedsak trenger vi to typer grupper:

- reader
- observer

En _reader_-gruppe er en gruppe som brukes for å få lesetilgang til en eller flere datasoner. En _observer_-gruppe gir på sin side bare tilgang til å få vite at datasett i en datasone eksisterer, og lese eventuelle metadata om datasettene.

Disse gruppene skal gi følgende tilganger:

### Reader

Dette er tilganger som må gis til gruppene på nederste nivå i _reader_-hierarkiet ([se figurer lengre nede](#hvilke-tilgangsgrupper-finnes)), altså gruppene som opprettes per datasone.

- **BigQuery:**
  `roles/bigquery.dataViewer` per BQ-datasett (konsument må betale for spørringer i eget prosjekt)

- **GCS:**
  `roles/storage.objectViewer` på bøttenivå

- **Cloud SQL/Postgres:**
  Må lage en "federated data source connection" og gi gruppen `bigquery.connection.user` på denne. Andre datalagere legges til her ved behov

### Observer

Dette er tilganger som må gis til gruppene på nederste nivå i observer-hierarkiet ([se figurer lengre nede](#hvilke-tilgangsgrupper-finnes)), altså gruppene som opprettes per prosjekt.

- **For BigQuery:** `roles/bigquery.metadataViewer` per BQ-datasett (konsument må betale for spørringer i eget prosjekt)
- **For alle andre typer datasett:** Må ha lesetilgang til datakatalogen (`roles/datacatalog.viewer`), hvor datasettet må være registrert med metadata.

## Hvilke tilgangsgrupper bruker vi?

På toppnivå i gruppehierarkiet finnes det en reader-gruppe for hver datasone. Unntaket er tilgangsgruppene for `raw` og `standardized`. Siden disse dataene i utgangspunktet er de samme, men med forskjellig format, har vi slått sammen disse tilgangsgruppene. I tillegg finnes det en `observer`-gruppe. Denne gruppa går på tvers av datasonene, siden alle som standard bør få lov å se hvilke datasett som finnes. Dermed får vi følgende grupper på toppnivå:

- `saga-consumer-readers`
- `saga-curated-readers`
- `saga-rawstandardized-readers`
- `saga-observers`

Hver av `readers`-gruppene nevnt over vil ha en undergruppe per prosjekt som skal dele data i den gitte datasonen. Merk at når vi sier at en gruppe har en undergruppe så betyr dette i praksis at gruppa (gruppe A på figuren under) er medlem av undergruppa (gruppe B), som vist her:

![A er medlem av B](img/Grupper_medlem_av.png)

Gruppehierarkiene som beskrevet over og eksemplifisert under utgjør kjernen av tilgangsfunksjonaliteten på dataplattformen. Merk at det kan opprettes ytterligere tilgangsgrupper i tillegg til disse, men disse vil ikke inngå i kjernen. Et eksempel kan være at du vil lage en tilgangsgruppe som gir reader-tilgang til alle datasett innad i en divisjon i Statens Vegvesen. For slike grupper har vi ikke enda bestemt hvor automatisk brukere skal bli plassert i disse gruppene, og hvor automatisk disse gruppene skal få bli medlem i andre grupper.

#### Saga Readers

I tillegg finnes det en gruppe `saga-readers` som ligger i hver enkelt av `<sone>-readers`-gruppene, for å enkelt gi tilgang til alle datasoner for hele Saga.

## Eksempelhierarki

### Consumer-readers

Her er et eksempel på hvordan gruppehierarkiet vil se ut for `consumer`-datasonen. Som standard vil de fleste brukere av dataplattformen bli lagt til i toppgruppen `saga-consumer-readers`. Vi har likevel undergrupper per prosjekt og datasone for å være enhetlig med de andre gruppehierarkiene, samt å kunne tilfredsstille fremtidige behov. Eksempelvis ser vi for oss at det kan bli behov for å gi personer utenfor vegvesenet tilgang til gitte datasett.

Merk også at figuren viser en IAM-binding mellom tilgangsgruppa `saga-oppetid-consumer-readers` og selve datasettet - i dette tilfellet en BigQuery-tabell. Dette illustrerer at det ikke skal lages IAM-bindings fra datasettet til gruppene lenger oppe i hierarkiet da disse gruppene uansett vil få denne tilgangen ved å "arve" tilgangen fra sine undergrupper. Tilsvarende gjelder for alle andre datasett også, selv om dette ikke er illustrert i figurene.

![Eksempelhierarki for consumer readers](img/Grupper_consumer_readers.png)

### Rawstandardized-readers

Her er tilsvarende eksempel for datasonene `raw` og `standardized`. Disse to datasonene deler tilgangsgrupper, som nevnt
over. Som standard vil brukere av dataplattformen ikke bli lagt til i toppgruppen, men må heller be om tilgang til
datasone. De må da legges til i passende tilgangsgruppe.

&nbsp;

![Eksempelhierarki for rawstandardized readers](img/Grupper_rawstandardized_readers.png)

### Observers

Her er et eksempel på hierarkiet for observers. Som standard vil brukere av dataplattformen legges til i
toppgruppen `saga-observers`:

&nbsp;

![Eksempelhierarki for observers](img/Grupper_observers.png)

## Hvordan skal gruppene opprettes?

Gruppene opprettes automatisk som del av prosjektopprettelse. Én eller flere personer på et gitt team vil bli lagt til som **duager** for tilgangsgruppene. Dette er typisk personar som jobber i prosjektet, som skal kunne legge til andre i disse tilgangsgruppene.IAM-bindings gjøres duge-til-én fra ressurser til nærmeste prosjekt-spesifikke datasone-gruppe, for eksempel `saga-veglogg-rawstandardized-readers`.

### Uegnede datalagere

Datalagere som dugler tilgangsstyring per datasett skal helst ikke brukes når du skal dele data på dataplattformen. For eksempel er det slik at dersom du gir noen lesetilgang til Cloud Datastore vil de få tilgang til alt som ligger der. Dette gjør at du for eksempel ikke kan skille mellom `consumer`-data, som alle skal ha tilgang til, og `raw`-data, som færre skal ha tilgang til.

### Tilgangsgrupper og utviklingsmiljøer

I dag blir GCP-prosjekter, og dermed også datasett, opprettet i tre ulike miljø: STM, ATM, og PROD. I starten av arbeidet med tilgangsgrupper ønsker vi å speile tilgangsgruppene i alle tre miljøer - hovedsaklig slik at vi kan teste opprettelsen av gruppene før det går i prod. I fremtiden kan det hende at vi går vekk fra dette og dermed bare har tilgangsgruppene i prod.

Miljønavnet skal være en del av gruppenavnene i STM og ATM. I prod skal miljønavnet ikke være med. Dermed viser eksemplene over gruppenavnene slik de vil være i prod. På toppnivå skal miljønavnet komme etter prefikset, for eksempel `saga-stm-consumer-readers`. På prosjektnivå skal miljønavnet komme etter prosjektnavnet, per vår navnestandard. Et eksempel på dette er `saga-oppetid-stm-readers`. Det blir tilsvarende for grupper som opprettes på datasonenivå. Se figuren under:

![Eksempelhierarki for consumer readers i STM-miljøet](img/Grupper_per_miljo.png)

### IAM-bindings for datasett-grupper

Siden selve tilgangsstyringen mot ressurser gjøres på datasone-nivå, er det en del IAM-bindings som må på plass for at brukere skal kunne finne fram til prosjekt-ressursene de har tilgang til. Dette varierer også noe basert på hva slags ressurs det er snakk om.

#### Overordnet

Alle tilgangsgruper på datasone-nivå må ha rollen `roles/browser` for å i det hele tatt kunne velge prosjektet i GCP-console.

#### Google Cloud Storage

Alle tilgangsgrupper som skal gjelde for en GCS-bøtte må ha rettigheten `storage.buckets.list` for å kunne se hvilke bøtter som finnes. Dessverre er det ingen innebygde roller i dag som gir denne rettigheten uten også å gi leserettighet til objektene i samtlige bøtter; vi har derfor definert en Custom Role `roles/storage.browser` for å støtte visning av bøtter. Denne blir automatisk opprettet ved prosjektopprettelse.

Tilgangsgrupper må også ha rollen `roles/storage.objectViewer` på de spesifikke bøttene de skal ha tilgang til.

#### BigQuery

Alle tilgangsgrupper som skal gjelde for et BQ-datasett må ha rollen `roles/bigquery.dataViewer` på gjeldende datasett for å kunne se datasettet og tabeller.

### Navngiving av grupper

Figurene over viser konkrete eksempler på hvordan gruppenavnene skal se ut. Mer formelt bygges de opp slik:

#### På toppnivå

Reader-grupper: `saga-<datasone>-readers`

- For STM og ATM: `saga-<miljø>-<datasone>-readers`

Observer-gruppe: `saga-observers`

- For STM og ATM: `saga-<miljø>-observers`

#### På prosjektnivå

Reader-grupper: `saga-<prosjekt>-<datasone>-readers`

- For STM og ATM: `saga-<prosjekt>-<miljø>-<datasone>-readers`

Observer-gruppe: `saga-<prosjekt>-observers`

- For STM og ATM: `saga-<prosjekt>-<miljø>-observers`

## Direkte tilgang til ressurser

Dersom det er behov for at brukere skal ha direkte tilgang til ressurser, og ikke datasoner, kan dette løses ved å opprette IAM-bindings direkte, eksempelvis i Terraform. Vi anser at dette sjelden vil være nødvendig.
