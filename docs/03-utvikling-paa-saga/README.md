# Utvikling på Saga

Her finner du informasjon som er relevant hvis du som utvikler eller team skal lage ingest- eller analysepipelines på Saga.

## Utdeling av prosjekter

Hvis du skal i gang med utvikling på Saga er det vanlig at ditt team får tildelt brukere og GCP-prosjekter som du eller dere kan jobbe i. [Ta kontakt med oss på Slack](https://svv-saga.slack.com/archives/C03LGD7TM5Z) eller via [vår e-post hvis du ikke bruker Slack](mailto:saga.admin@vegvesen.no), så kan vi bistå deg.

Når du får opprettet et GCP-prosjekt, er det flere ressurser som blir laget klar for deg:

### Prosjekter

- Et delt GCP-prosjekt med formatet `saga-<teamnavn>-shared[-<suffix>]`
- For domenenet/problemområdet du skal jobbe med blir det opprettet tre GCP-prosjekter, ett for hvert miljø (STM, ATM, PROD), på formen: `saga-<domene>-<miljø>[-<suffix>]`. Eksempel: `saga-nvdb-prod-vlmh`

### Budsjetter i prosjektene

- For hvert av prosjektene over blir det opprettet et [budsjett](https://cloud.google.com/billing/docs/how-to/budgets) og en "vakthund" som sletter prosjektene dersom de bruker mer enn dobbelt av budsjettet. Hovedformålet med dette er å unngå en enorm kostnadsoverskridelse dersom uvedkommende får tak i private nøkler og bruker disse til å lage ressurser.
  - Standarden er at delte "shared"-prosjekter har budsjett på 300 USD per måned
  - Standarden for domeneprosjekter er budsjett på 1000 USD per måned
- Hver utvikler får et "Sandbox"-prosjekt. Det er et prosjekt som utvikleren selv bestemmer over, som eksempelvis kan brukes til å teste ut nye GCP-tjenester før de tas i bruk i domene-prosjekter. Disse prosjektene har formen `saga-<kortversjon av utviklerens navn>-sandbox-<suffix>`. Eksempel: `saga-pedlan-sandbox-a1b2`

  - Disse prosjektene har et budsjett på 500 USD per måned. Det er likevel ønskelig at hver utvikler passer på å rydde og stoppe ressurser som ikke er i bruk.

### Tilgangsgrupper

- Gruppen `saga-developers` finnes fra før, og teamets utviklere blir lagt til i denne. Det gir tilgang til å se de fleste Saga-prosjekter i alle miljøer uten å kunne redigere dem.
- Gruppen `saga-<teamnavn>-developers` gir utviklere mulighet til å lage og slette alle ressurser i STM. Alle utviklere på et team blir lagt til i denne gruppen.
- Gruppen `saga-<teamnavn>-devops` gir utvalgte DevOps-utviklere mulighet til å lage og slette ressurser i ATM og PROD.
- En eller flere personer blir utnevnt til administrator av de to sistnevnte gruppene, og kan administrere dem på [Google Groups](https://groups.google.com).

<!--- TODO: Kva er formålet med shared-prosjekt, og kva blir oppretta der --->
<!--- TODO: Kva er det som blir oppretta inn i kvart domeneprosjekt --->
<!--- TODO: Korleis har vi tenkt at dei skal utføre typiske flytar --->
<!--- TODO: Anbefaling av terraform --->
<!--- TODO: Anbefaling av GitHub + våre actions --->
