---
title: Google Cloud Platform
---

# Google Cloud Platform

**[GCP](https://cloud.google.com/) er Googles skyplattform, tilsvarende Azure hos Microsoft eller AWS fra Amazon.**

Statens vegvesen har valgt GCP som skyplattform for Saga fordi plattformen tilbyr svært gode muligheter for innsamling, prosessering, sammenstilling og analyse av data fra ulike kilder, og er relativt brukervennlig.

## Struktur i GCP

Det finnes tre administrasjonsnivåer i GCP: **Organization, Folder** og **Project**.

<figure>

![gcp-struktur.png](img/gcp-struktur.png)

<figcaption>Prosjekt-velger i GCP Cloud Console</figcaption>
</figure>

**Organization:** Alt vi gjør på GCP ligger under organisasjonen “vegvesen.no”. Dette inkluderer Saga og andre initiativ som bruker GCP.

**Folder:** Mapper kan brukes både for å organisere prosjekter som hører sammen, og for å gi rettigheter på mappenivå. MERK: Man trenger egne rettigheter for å se mappene; har man ikke disse vil det se ut som prosjektene ligger i en flat struktur.

**Project:** Alle ressurser som opprettes må tilhøre et prosjekt. Når man er blitt dataviter på Saga har man automatisk fått opprettet et eget prosjekt, på formen `saga-<brukernavn>-playground-<suffix>`. Brukernavnet her finnes ved å ta første tre bokstaver av hhv. fornavn og etternavn, og vil i de fleste tilfeller matche SVV-brukernavnet. Suffix er nødvendig for å sørge for at prosjekt-navnet er globalt unikt.

Se gjerne [Googles egen dokumentasjon for mer informasjon.](https://cloud.google.com/docs/overview)

## IAM

**Identity and Access Management (IAM)** er tilgangsstyringen i GCP. For å gjøre noe som helst i GCP må man ha fått tildelt riktige tilganger. Tilganger består av to konsepter: **roles** og **permissions.**

**Roles:** En rolle har formen `roles/bigquery.dataViewer`, og er det som tildeles brukere. Alle datavitere har rollen `roles/owner` i sine playground-prosjekt, som betyr at man står fritt til å opprette alle ressurser man ønsker.

**Permissions:** Enhver rolle består av et sett med tilganger. Disse har navn på formen `bigquery.datasets.get`, og er det som sjekkes når man forsøker gjøre operasjoner mot ressurser i GCP.

Siden [Understanding Roles](https://cloud.google.com/iam/docs/understanding-roles) har en oversikt over samtlige roller i GCP og kan være nyttig for å se hvilke tilganger de forskjellige rollene innebærer.

## Vanlige tjenester

Her følger noen av de vanligste GCP-tjenestene man kan ha bruk for, samt noen andre nyttige tjenester Google tilbyr, med lenker til dokumentasjon.

### Google Cloud Storage (GCS)

[GCS](https://cloud.google.com/storage/docs/introduction) er førstevalget for å lagre filer i ethvert format på GCP. Filer lagres i “buckets” med unike URLer på `gs://`-format, f.eks. `gs://saga-veglogg-prod-wznf-processed-publications`, og kan organiseres i mapper.

Man kan laste opp filer til GCS ved å bruke [cloud console, `gsutil` eller `gcloud alpha storage`](https://cloud.google.com/storage/docs/uploading-objects). I tillegg kan man bruke [Storage Transfer Service](https://cloud.google.com/storage-transfer/docs/overview) for å kopiere eller flytte store mengder filer mellom bøtter, eller mellom on-premise og GCS.

Det er også gode muligheter for å [importere data rett fra en GCS-bøtte til BigQuery](https://cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv).

### BigQuery (BQ)

BigQuery er Googles SQL-kompatible, kolonne-baserte database, som håndterer datamengder på petabyte-nivå.

[Les mer om bruk av BigQuery til analyseformål](https://www.notion.so/Analyse-av-store-datamengder-i-BigQuery-ca9b88f9084d4339b31c108abc06eb28).

### Google Colab

[Colab](https://colab.research.google.com/) er ikke en del av GCP, men kan likevel brukes for å kjøre [Jupyter Notebooks](https://jupyter.org/) i skyen. Man kan enkelt hente data fra f.eks. BigQuery og gjøre spørringer og analyser mot disse.

### Google Data Studio

[Data Studio](https://datastudio.google.com/) er heller ikke del av GCP, men er likevel tett knyttet, slik at mulighetene for integrasjon med andre tjenester hos GCP er veldig gode. Man kan f.eks. med et par klikk åpne et gitt resultatsett fra BigQuery i Data Studio for en mer visuell framstilling av dataene.
