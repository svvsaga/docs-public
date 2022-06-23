# Terraform

Å sette opp infrastruktur manuelt i GCP er tidkrevende og vanskelig å reprodusere, spesielt på tvers av flere miljøer. For å automatisere oppsett av infrastruktur bruker vi derfor [Terraform fra HashiCorp](https://www.terraform.io/), et verktøy for "Infrastructure as Code". Alle ressurser blir definert i Terraform-filer (.tf), sjekkes inn i Git, og kan parameteriseres med ulike variabler per miljø.

Terraform brukes av Google selv, og det finnes mange gode ressurser for å lære seg Terraform:

- [GCPs egen Terraform-doc](https://cloud.google.com/docs/terraform/get-started-with-terraform)
- [Terraform med GCP fra hashicorp.com](https://learn.hashicorp.com/collections/terraform/gcp-get-started)
- [Language reference for Terraform HCL](https://www.terraform.io/language)
- [Terraform provider for Google Cloud](https://registry.terraform.io/providers/hashicorp/google/latest/docs)

Fordeler med Terraform:

- Infrastruktur blir reprodusertbart på tvers av miljøer
- Man får bedre oversikt over hvilke endringer som utføres på infrastruktur
- Man kan ta i bruk ferdige moduler for sett med ressurser som ofte hører sammen, eller som alltid konfigureres på et gitt vis. Se f.eks. [repoet 'terraform-modules' (krever innlogging)](https://github.com/svvsaga/terraform-modules).

## Terragrunt

Når man har mange ulike Terraform-moduler kan det bli mye boilerplate. Det er også ønskelig å kunne enkelt skifte mellom ulike miljøer. [Terragrunt](https://terragrunt.gruntwork.io/) er et lite verktøy som wrapper Terraform med støtte for genererte filer, miljøvariabler og felles oppsett.

## saga-team-template

Vi har laget et mal-repo, [saga-team-template](https://github.com/svvsaga/saga-team-template), som benytter Terraform for å sette opp en enkel ingest-pipeline. Her benyttes også Terragrunt, for å hente ut og samle felles oppsett.

Det anbefales å se på repoet for bruk av Terraform og Terragrunt, og gjerne prøv å sette opp pipelinen selv for ditt prosjekt.

## Import av eksisterende infrastruktur til Terraform

Det er mulig å importere enkeltressurser som har blitt opprettet utenfor Terraform. Dette gjøres ved å først skrive Terraform-koden som vanlig, deretter kjøre [`terraform import` eller `terragrunt import`](https://www.terraform.io/cli/import).

Dersom man er usikker på hvordan Terraform-koden skal skrives, eller har et mer omfattende oppsett med mange ressurser man ønsker å få inn i Terraform, kan man benytte [`terraformer`](https://github.com/GoogleCloudPlatform/terraformer) fra Google: et CLI som lar deg spesifisere prosjekt og hvilke ressurstyper som skal importeres, og genererer Terraform-kode for disse.

## Alternativer til Terraform

Terraform kan virke avskrekkende og av og til overkill. Når trenger man -ikke- Terraform?

- I en utforskingsperiode kan det være bedre å lage ressurser direkte i GCP Console. Dette har man tilganger til å gjøre i teamets egne STM-prosjekt, samt i ditt personlige utvikler-sandbox-prosjekt. Bare husk at disse må ryddes opp manuelt også.
- Av og til har man behov for å opprette ressurser dynamisk/programmatisk, f.eks. en ingest-pipeline som lager nye midlertidige BigQuery-tabeller. I disse tilfellene gjøres endringene av Service Account'en som pipelinen bruker, og denne må ha fått tildelt tilganger til å opprette ressurser.
- Ved andre behov, [kontakt plattformteamet Yggdrasil på #saga-support](https://vegvesen.slack.com/archives/C03LGD7TM5Z).

Dersom man ønsker å beskrive infrastruktur i et kjent kodespråk som TypeScript, Java eller Python, heller enn Terraforms deklarative HCL-syntaks, finnes det to muligheter for dette:

- **[Cloud Development Kit for Terraform (CDKTF)](https://www.terraform.io/cdktf)** - HashiCorps egen løsning for å kunne skrive kode som genererer Terraform-oppsett. Fremdeles i preview, men virker lovende.
- **[Pulumi](https://www.pulumi.com/)** - Konkurrerende verktøy for Infrastructure as Code, med støtte for en rekke kodespråk. Vi har ingen erfaring med Pulumi, men tar gjerne imot synspunkter og erfaringer.
