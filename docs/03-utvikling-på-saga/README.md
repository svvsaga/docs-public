
# Utvikling på Saga

Disse sidene er hovedsaklig for utviklere som skal lage ingest- eller analysepipelines på Saga. Her vil vi gi informasjon som gjør det lettere for domeneteams o.l. å komme i gang med sitt arbeid.

## Utdeling av prosjekt(er)

Når nye teams skal i gang med utvikling på Saga er typisk det første som må skje at teamet får opprettet brukere og GCP-prosjekter som de kan jobbe i. Ta kontakt med oss slik at vi kan gjøre dette for deg.

Ved opprettelse av GCP-prosjekter er det ganske mange ressurser som blir laget for dere:

- Et delt GCP-prosjekt på formen `saga-<teamnavn>-shared[-<suffix>]`
- For domenenet/problemområdet dere skal jobbe med blir det opprettet tre GCP-prosjekter, ett for hvert miljø (STM, ATM, PROD) på formen: `saga-<domene>-<miljø>[-<suffix>]`. Eksempel: `saga-nvdb-prod-vlmh`
- For hvert av prosjektene over blir det opprettet et [budsjett](https://cloud.google.com/billing/docs/how-to/budgets) og en "vakthund" som sletter prosjektene dersom de bruker mer enn dobbelt av budsjettet. Hovedformålet med dette er å unngå en enorm kostnad dersom uvedkommende får tak i private nøkler og bruker disse til å lage ressurser.
  - Som standard har delte "shared"-prosjekt et budsjett på 300 USD per måned
  - Som standard har domeneprosjekter et budsjett på 1000 USD per måned
- Hver utvikler får et "Sandbox"-prosjekt. Det er et prosjekt hvor utvikleren selv bestemmer over, og kan brukes til å teste ut nye GCP-tjenester o.l. får de taes i bruk i domene-prosjektene. Disse prosjektene har formen `saga-<kortversjon av utviklerens navn>-sandbox-<suffix>`. Eksempel: `saga-pedlan-sandbox-a1b2`
  - Disse prosjektene har et budsjett på 500 USD per måned. Det er likevel ønskelig at hver utvikler passer på å rydde og stoppe ressurser som ikke er i bruk.
- Tilgangsgrupper:
  - Gruppen `saga-developers` finnes fra før, og teamets utviklere blir lagt til i denne. Det gir tilgang til å se de fleste Saga-prosjekter i alle miljøer (uten å kunne redigere de).
  - Gruppen `saga-<teamnavn>-developers` gir utviklere mulighet til å lage og slette alle ressurser i STM. Alle utviklere på et team blir lagt til i denne gruppen.
  - Gruppen `saga-<teamnavn>-devops` gir utvalgte DevOps-utviklere mulighet til å lage og slette ressurser i ATM og PROD. 
  - En eller flere personer blir utnevnt til administrator av de to sistnevnte gruppene, og kan administrere dem på [Google Groups](https://groups.google.com).

<!--- TODO: Kva er formålet med shared-prosjekt, og kva blir oppretta der --->
<!--- TODO: Kva er det som blir oppretta inn i kvart domeneprosjekt --->
<!--- TODO: Korleis har vi tenkt at dei skal utføre typiske flytar --->
<!--- TODO: Anbefaling av terraform --->
<!--- TODO: Anbefaling av GitHub + våre actions --->
