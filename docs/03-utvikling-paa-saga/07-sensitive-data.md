# Sensitive data

Som standard kan alle utviklere lese alle data på Saga. Dersom man har data man ikke ønsker skal være lesbare for andre, kan man feste [PII-tags på BigQuery datasets](https://cloud.google.com/bigquery/docs/tags).

Dette er foreløpig kun mulig via `gcloud`, ikke i web-grensesnittet.

For å markere et BQ dataset som f.eks. ikke-sensitiv PII kan man kjøre følgende kommando (krever innlogging og developer-tilgang):

```
export PROJECT=<ID til ditt prosjekt, f.eks. "saga-oppetid-prod-o6pj">
export DATASET=<ditt BQ dataset, f.eks. "standardized">
gcloud resource-manager tags bindings create --tag-value=429006794855/pii/ikke-sensitive --parent=//bigquery.googleapis.com/projects/$PROJECT/datasets/$DATASET --location=EU
```

For spørsmål, [ta kontakt via #saga-support på Slack](https://vegvesen.slack.com/archives/C03LGD7TM5Z).
