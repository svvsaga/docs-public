# Sette opp Google Cloud SDK

Noen ganger er det ønskelig å kjøre kommandoer mot tjenester hos GCP fra lokal
maskin eller fra en VDI med WSL. Da kan det være kjekt å installere Google Cloud
SDK, og dra nytte av kommandolinjeverktøy som `gcloud`, `bq` og `gsutil`.

## Hvordan sette opp `gcloud`

I de fleste tilfeller kan [Googles egen oppskrift](https://cloud.google.com/sdk/docs/install) følges for å installere Google Cloud SDK.

## Hvordan sette opp `gcloud` med WSL i VDI

For å installere Google Cloud SDK med WSL på VDI kreves noen ekstra steg:

1. Åpne en WSL terminal med Ubuntu.

1. Installer avhengigheter nødvendig for å verifisere Googles public key.

    ```bash
    sudo apt-get install apt-transport-https ca-certificates gnupg
    ```

1. Legg til en `apt` kilde for Google Cloud SDK.

    ```bash
    echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] [https://packages.cloud.google.com/apt](https://packages.cloud.google.com/apt) cloud-sdk main"\
     | sudo tee -a /etc/apt/sources.list.d/google-cloud-sdk.list
    ```

1. Fortell `apt` at du stoler på Googles offentlige nøkkel.

    ```bash
    curl [https://packages.cloud.google.com/apt/doc/apt-key.gpg](https://packages.cloud.google.com/apt/doc/apt-key.gpg)\
     | sudo apt-key --keyring /usr/share/keyrings/cloud.google.gpg add -
    ```

1. Hent oppdaterte pakkedefinisjoner fra pakkebrønnen, slik at `apt` får med seg pakkene fra kilden du la til i steg 3., og installer Google Cloud SDK.

    ```bash
    sudo apt-get update && sudo apt-get install google-cloud-cli
    ```

1. Fortell `gcloud` kommandoen at du ønsker å bruke Edge-browseren fra din Windows-installasjon for innlogging i neste steg.

    ```bash
    export BROWSER=/mnt/c/Program\ Files\ \(x86\)/Microsoft/Edge/Application/msedge.exe
    ```

1. Logg inn med din vegvesen-bruker på GCP.

    ```bash
    gcloud auth login
    ```

1. Sett et prosjekt som blir valgt for kommandoer der du ikke spesifiserer prosjekt. Kommandoen under viser hvordan du velger `saga-veglogg-prod-wznf` som default prosjekt.

    ```bash
    gcloud config set project saga-veglogg-prod-wznf
    ```

Du er nå klar til å bruke `gcloud` verktøyet og resten av Google Cloud SDK fra din Ubuntu WSL terminal! ☑️

## Eksempel på bruk av Google Cloud SDK kommandolinjeverktøy

Et kjekt verktøy som følger med Google Cloud SDK er `gsutil`. Dette kan f.eks. brukes til å liste ut filer, samt laste de opp og ned fra GCS. Følgende kommando lister ut rådatafilene for Datex II 3.1 publikasjoner som Saga har prosessert fra Vegloggen/HBT.

```bash
gsutil ls gs://saga-veglogg-prod-wznf-processed-publications/datex3-situations/
```

```bash
# Output:
# gs://saga-veglogg-prod-wznf-processed-publications/datex3-situations/2019_10/
# gs://saga-veglogg-prod-wznf-processed-publications/datex3-situations/2020_01/
# gs://saga-veglogg-prod-wznf-processed-publications/datex3-situations/2020_03/
# gs://saga-veglogg-prod-wznf-processed-publications/datex3-situations/2020_04/
# gs://saga-veglogg-prod-wznf-processed-publications/datex3-situations/2022_03/
# gs://saga-veglogg-prod-wznf-processed-publications/datex3-situations/2022_04/
```