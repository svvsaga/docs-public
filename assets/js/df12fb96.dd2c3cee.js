"use strict";(self.webpackChunksaga_docs=self.webpackChunksaga_docs||[]).push([[829],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),g=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=g(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=g(r),m=n,c=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return r?o.createElement(c,l(l({ref:t},u),{},{components:r})):o.createElement(c,l({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var g=2;g<a;g++)l[g]=r[g];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8734:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return g},toc:function(){return p}});var o=r(7462),n=r(3366),a=(r(7294),r(3905)),l=["components"],i={title:"Kom i gang"},s="Kom i gang",g={unversionedId:"google-cloud-platform/README",id:"google-cloud-platform/README",title:"Kom i gang",description:"Statens vegvesen har valgt Google Cloud Platform (GCP) som skyplattform for Saga. Dette er Google sin skyplattform, og er tilsvarende Azure hos Microsoft eller AWS fra Amazon.",source:"@site/docs/02-google-cloud-platform/README.md",sourceDirName:"02-google-cloud-platform",slug:"/google-cloud-platform/",permalink:"/docs-public/google-cloud-platform/",draft:!1,editUrl:"https://github.com/svvsaga/docs-public/edit/main/docs/02-google-cloud-platform/README.md",tags:[],version:"current",frontMatter:{title:"Kom i gang"},sidebar:"tutorialSidebar",previous:{title:"Velkommen til Saga",permalink:"/docs-public/intro"},next:{title:"Starte med Google Cloud",permalink:"/docs-public/google-cloud-platform/starte-med-google-cloud"}},u={},p=[{value:"Struktur i Google Cloud Platform",id:"struktur-i-google-cloud-platform",level:2},{value:"Identity and Access Management",id:"identity-and-access-management",level:2},{value:"Vanlige tjenester",id:"vanlige-tjenester",level:2},{value:"Google Cloud Storage (GCS)",id:"google-cloud-storage-gcs",level:3},{value:"BigQuery (BQ)",id:"bigquery-bq",level:3},{value:"Google Colab",id:"google-colab",level:3},{value:"Google Data Studio",id:"google-data-studio",level:3}],d={toc:p};function m(e){var t=e.components,i=(0,n.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kom-i-gang"},"Kom i gang"),(0,a.kt)("p",null,"Statens vegvesen har valgt ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/"},"Google Cloud Platform (GCP)")," som skyplattform for Saga. Dette er Google sin skyplattform, og er tilsvarende Azure hos Microsoft eller AWS fra Amazon."),(0,a.kt)("p",null,"Valget ble tatt fordi plattformen tilbyr sv\xe6rt gode muligheter for innsamling, prosessering, sammenstilling og analyse av data fra ulike kilder, og er relativt brukervennlig."),(0,a.kt)("h2",{id:"struktur-i-google-cloud-platform"},"Struktur i Google Cloud Platform"),(0,a.kt)("p",null,"Du bruker og administrerer vanligvis GCP i nettleseren, og du m\xe5 ha konto i GCP for \xe5 f\xe5 tilgang. ",(0,a.kt)("a",{parentName:"p",href:"google-cloud-platform/starte-med-google-cloud"},'Mer om tilganger finner du i "Starte med Google Cloud"'),"."),(0,a.kt)("p",null,"Det finnes tre administrasjonsniv\xe5er i GCP: ",(0,a.kt)("strong",{parentName:"p"},"Organization, Folder")," og ",(0,a.kt)("strong",{parentName:"p"},"Project"),"."),(0,a.kt)("figure",null,(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Skjermbilde av Google cloud platform sin struktur",src:r(2250).Z,width:"754",height:"601"})),(0,a.kt)("figcaption",null,"Prosjekt-velger i GCP Cloud Console")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Organization:")," Alt vi gj\xf8r p\xe5 GCP ligger under organisasjonen \u201cvegvesen.no\u201d. Dette inkluderer Saga og andre initiativ som bruker GCP."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Folder:")," Mapper kan brukes b\xe5de for \xe5 organisere prosjekter som h\xf8rer sammen, og for \xe5 gi rettigheter p\xe5 mappeniv\xe5. Merk at du trenger egne rettigheter for \xe5 se mappene; har du ikke disse vil det se ut som prosjektene ligger i en flat struktur."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Project:")," Alle ressurser som opprettes m\xe5 tilh\xf8re et prosjekt. N\xe5r du har f\xe5tt en rolle i Saga har du automatisk f\xe5tt opprettet et eget prosjekt, p\xe5 formen ",(0,a.kt)("inlineCode",{parentName:"p"},"saga-<brukernavn>-playground-<suffix>"),". Brukernavnet her finnes ved \xe5 ta f\xf8rste tre bokstaver av fornavn og etternavn, og vil i de fleste tilfeller v\xe6re likt SVV-brukernavnet ditt. Suffix er n\xf8dvendig for \xe5 s\xf8rge for at prosjekt-navnet er globalt unikt."),(0,a.kt)("p",null,"Se gjerne ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/docs/overview"},"Googles egen dokumentasjon for mer informasjon.")),(0,a.kt)("h2",{id:"identity-and-access-management"},"Identity and Access Management"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Identity and Access Management (IAM)")," er tilgangsstyringen i GCP. For \xe5 gj\xf8re noe som helst i GCP m\xe5 du ha f\xe5tt tildelt riktige tilganger. Tilganger best\xe5r av to konsepter: ",(0,a.kt)("strong",{parentName:"p"},"roles")," og ",(0,a.kt)("strong",{parentName:"p"},"permissions.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Roles:")," En rolle har formen ",(0,a.kt)("inlineCode",{parentName:"p"},"roles/bigquery.dataViewer"),", og er det som tildeles brukere. Alle datavitere har rollen ",(0,a.kt)("inlineCode",{parentName:"p"},"roles/owner")," i sine playground-prosjekt, som betyr at du st\xe5r fritt til \xe5 opprette alle ressurser du \xf8nsker."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Permissions:")," Enhver rolle best\xe5r av et sett med tilganger. Disse har navn p\xe5 formen ",(0,a.kt)("inlineCode",{parentName:"p"},"bigquery.datasets.get"),", og er det som sjekkes n\xe5r du fors\xf8ker gj\xf8re operasjoner mot ressurser i GCP."),(0,a.kt)("p",null,"Siden ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/understanding-roles"},"Understanding Roles")," har en oversikt over samtlige roller i GCP og kan v\xe6re nyttig for \xe5 se hvilke tilganger de forskjellige rollene inneb\xe6rer."),(0,a.kt)("h2",{id:"vanlige-tjenester"},"Vanlige tjenester"),(0,a.kt)("p",null,"Her f\xf8lger noen av de vanligste GCP-tjenestene du kan ha bruk for, samt noen andre nyttige tjenester Google tilbyr, med lenker til dokumentasjon."),(0,a.kt)("h3",{id:"google-cloud-storage-gcs"},"Google Cloud Storage (GCS)"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/introduction"},"GCS")," er f\xf8rstevalget for \xe5 lagre filer i ethvert format p\xe5 GCP. Filer lagres i \u201cbuckets\u201d med unike URLer p\xe5 ",(0,a.kt)("inlineCode",{parentName:"p"},"gs://"),"-format, eksempelvis ",(0,a.kt)("inlineCode",{parentName:"p"},"gs://saga-veglogg-prod-wznf-processed-publications"),", og kan organiseres i mapper."),(0,a.kt)("p",null,"Du kan laste opp filer til GCS ved \xe5 bruke ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/uploading-objects"},"cloud console, ",(0,a.kt)("inlineCode",{parentName:"a"},"gsutil")," eller ",(0,a.kt)("inlineCode",{parentName:"a"},"gcloud alpha storage")),". I tillegg kan du bruke ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage-transfer/docs/overview"},"Storage Transfer Service")," for \xe5 kopiere eller flytte store mengder filer mellom b\xf8tter, eller mellom on-premise og GCS."),(0,a.kt)("p",null,"Det er ogs\xe5 gode muligheter for \xe5 ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv"},"importere data rett fra en GCS-b\xf8tte til BigQuery"),"."),(0,a.kt)("h3",{id:"bigquery-bq"},"BigQuery (BQ)"),(0,a.kt)("p",null,"BigQuery er Google sin SQL-kompatible, kolonne-baserte database som h\xe5ndterer datamengder p\xe5 petabyte-niv\xe5."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.notion.so/Analyse-av-store-datamengder-i-BigQuery-ca9b88f9084d4339b31c108abc06eb28"},"Les mer om bruk av BigQuery til analyseform\xe5l"),"."),(0,a.kt)("h3",{id:"google-colab"},"Google Colab"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://colab.research.google.com/"},"Colab")," er ikke en del av GCP, men kan likevel brukes for \xe5 kj\xf8re ",(0,a.kt)("a",{parentName:"p",href:"https://jupyter.org/"},"Jupyter Notebooks")," i skyen. Du kan hente data fra BigQuery og gj\xf8re sp\xf8rringer og analyser mot disse."),(0,a.kt)("h3",{id:"google-data-studio"},"Google Data Studio"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://datastudio.google.com/"},"Data Studio")," er heller ikke del av GCP, men er likevel tett knyttet slik at mulighetene for integrasjon med andre tjenester hos GCP er veldig gode. Du kan med et par klikk \xe5pne et gitt resultatsett fra BigQuery i Data Studio for en mer visuell framstilling av dataene."))}m.isMDXComponent=!0},2250:function(e,t,r){t.Z=r.p+"assets/images/gcp-struktur-b65a07ad579764a67e2e76bfcd22d458.png"}}]);