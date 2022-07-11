---
title: Kom i gang
---

# Kom i gang

Statens vegvesen har valgt [Google Cloud Platform (GCP)](https://cloud.google.com/) som skyplattform for Saga. Dette er Google sin skyplattform, og er tilsvarende Azure hos Microsoft eller AWS fra Amazon.

Valget ble tatt fordi plattformen tilbyr svært gode muligheter for innsamling, prosessering, sammenstilling og analyse av data fra ulike kilder, og er relativt brukervennlig.

## Struktur i Google Cloud Platform

Du bruker og administrerer vanligvis GCP i nettleseren, og du må ha konto i GCP for å få tilgang. [Mer om tilganger finner du i "Starte med Google Cloud"](google-cloud-platform/starte-med-google-cloud).

Det finnes tre administrasjonsnivåer i GCP: **Organization, Folder** og **Project**.

<figure>

![Skjermbilde av Google cloud platform sin struktur](img/gcp-struktur.png)

<figcaption>Prosjekt-velger i GCP Cloud Console</figcaption>
</figure>

**Organization:** Alt vi gjør på GCP ligger under organisasjonen “vegvesen.no”. Dette inkluderer Saga og andre initiativ som bruker GCP.

**Folder:** Mapper kan brukes både for å organisere prosjekter som hører sammen, og for å gi rettigheter på mappenivå. Merk at du trenger egne rettigheter for å se mappene; har du ikke disse vil det se ut som prosjektene ligger i en flat struktur.

**Project:** Alle ressurser som opprettes må tilhøre et prosjekt. Når du har fått en rolle i Saga har du automatisk fått opprettet et eget prosjekt, på formen `saga-<brukernavn>-playground-<suffix>`. Brukernavnet her finnes ved å ta første tre bokstaver av fornavn og etternavn, og vil i de fleste tilfeller være likt SVV-brukernavnet ditt. Suffix er nødvendig for å sørge for at prosjekt-navnet er globalt unikt.

Se gjerne [Googles egen dokumentasjon for mer informasjon.](https://cloud.google.com/docs/overview)

## Identity and Access Management

**Identity and Access Management (IAM)** er tilgangsstyringen i GCP. For å gjøre noe som helst i GCP må du ha fått tildelt riktige tilganger. Tilganger består av to konsepter: **roles** og **permissions.**

**Roles:** En rolle har formen `roles/bigquery.dataViewer`, og er det som tildeles brukere. Alle datavitere har rollen `roles/owner` i sine playground-prosjekt, som betyr at du står fritt til å opprette alle ressurser du ønsker.

**Permissions:** Enhver rolle består av et sett med tilganger. Disse har navn på formen `bigquery.datasets.get`, og er det som sjekkes når du forsøker gjøre operasjoner mot ressurser i GCP.

Siden [Understanding Roles](https://cloud.google.com/iam/docs/understanding-roles) har en oversikt over samtlige roller i GCP og kan være nyttig for å se hvilke tilganger de forskjellige rollene innebærer.

## Vanlige tjenester

Her følger noen av de vanligste GCP-tjenestene du kan ha bruk for, samt noen andre nyttige tjenester Google tilbyr, med lenker til dokumentasjon.

### Google Cloud Storage (GCS)

[GCS](https://cloud.google.com/storage/docs/introduction) er førstevalget for å lagre filer i ethvert format på GCP. Filer lagres i “buckets” med unike URLer på `gs://`-format, eksempelvis `gs://saga-veglogg-prod-wznf-processed-publications`, og kan organiseres i mapper.

Du kan laste opp filer til GCS ved å bruke [cloud console, `gsutil` eller `gcloud alpha storage`](https://cloud.google.com/storage/docs/uploading-objects). I tillegg kan du bruke [Storage Transfer Service](https://cloud.google.com/storage-transfer/docs/overview) for å kopiere eller flytte store mengder filer mellom bøtter, eller mellom on-premise og GCS.

Det er også gode muligheter for å [importere data rett fra en GCS-bøtte til BigQuery](https://cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv).

### BigQuery (BQ)

BigQuery er Google sin SQL-kompatible, kolonne-baserte database som håndterer datamengder på petabyte-nivå.

[Les mer om bruk av BigQuery til analyseformål](https://svvsaga.github.io/docs-public/bigquery).

### Google Colab

[Colab](https://colab.research.google.com/) er ikke en del av GCP, men kan likevel brukes for å kjøre [Jupyter Notebooks](https://jupyter.org/) i skyen. Du kan hente data fra BigQuery og gjøre spørringer og analyser mot disse.

### Google Data Studio

[Data Studio](https://datastudio.google.com/) er heller ikke del av GCP, men er likevel tett knyttet slik at mulighetene for integrasjon med andre tjenester hos GCP er veldig gode. Du kan med et par klikk åpne et gitt resultatsett fra BigQuery i Data Studio for en mer visuell framstilling av dataene.
