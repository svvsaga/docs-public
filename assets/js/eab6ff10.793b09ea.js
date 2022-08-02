"use strict";(self.webpackChunksaga_docs=self.webpackChunksaga_docs||[]).push([[687],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>c});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var g=o.createContext({}),d=function(e){var t=o.useContext(g),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=d(e.components);return o.createElement(g.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,g=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(r),c=n,m=u["".concat(g,".").concat(c)]||u[c]||p[c]||l;return r?o.createElement(m,a(a({ref:t},s),{},{components:r})):o.createElement(m,a({ref:t},s))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,a=new Array(l);a[0]=u;var i={};for(var g in t)hasOwnProperty.call(t,g)&&(i[g]=t[g]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var d=2;d<l;d++)a[d]=r[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},146:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var o=r(7462),n=(r(7294),r(3905));const l={},a="Starte med Google Cloud",i={unversionedId:"google-cloud-platform/starte-med-google-cloud",id:"google-cloud-platform/starte-med-google-cloud",title:"Starte med Google Cloud",description:"F\xf8r du kan begynne \xe5 utforske datasettene m\xe5 du logge inn i GCP og velge ditt personlige prosjekt. Dersom du har gjort dette tidligere kan du hoppe over stegene under.",source:"@site/docs/02-google-cloud-platform/01-starte-med-google-cloud.md",sourceDirName:"02-google-cloud-platform",slug:"/google-cloud-platform/starte-med-google-cloud",permalink:"/docs-public/google-cloud-platform/starte-med-google-cloud",draft:!1,editUrl:"https://github.com/svvsaga/docs-public/edit/main/docs/02-google-cloud-platform/01-starte-med-google-cloud.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Kom i gang",permalink:"/docs-public/google-cloud-platform/"},next:{title:"Sette opp Google Cloud SDK",permalink:"/docs-public/google-cloud-platform/installere-gcloud"}},g={},d=[{value:"Tilgang og innlogging",id:"tilgang-og-innlogging",level:2},{value:"Finn og velg ditt prosjekt",id:"finn-og-velg-ditt-prosjekt",level:2}],s={toc:d};function p(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,o.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"starte-med-google-cloud"},"Starte med Google Cloud"),(0,n.kt)("p",null,"F\xf8r du kan begynne \xe5 utforske datasettene m\xe5 du logge inn i GCP og velge ditt personlige prosjekt. Dersom du har gjort dette tidligere kan du hoppe over stegene under."),(0,n.kt)("h2",{id:"tilgang-og-innlogging"},"Tilgang og innlogging"),(0,n.kt)("p",null,"F\xf8rst skal du logge inn i Google Cloud Platform (GCP). G\xe5 til ",(0,n.kt)("a",{parentName:"p",href:"https://console.cloud.google.com"},"https://console.cloud.google.com")," og logg inn med din SVV-bruker. Dersom du fra f\xf8r har logget inn med en personlig google-bruker b\xf8r du bruke en annen nettleser eller lage en egen profil for dette. ",(0,n.kt)("a",{parentName:"p",href:"https://support.microsoft.com/en-us/topic/sign-in-and-create-multiple-profiles-in-microsoft-edge-df94e622-2061-49ae-ad1d-6f0e43ce6435"},"Her kan du lese om hvordan egne profiler opprettes for Edge.")),(0,n.kt)("p",null,"Etter f\xf8rste innlogging vil du bli spurt om \xe5 godkjenne vilk\xe5r for bruk av GCP \u2013 kryss av for dette. Du trenger ikke \xe5 krysse av for \xe5 motta e-poster fra Google."),(0,n.kt)("h2",{id:"finn-og-velg-ditt-prosjekt"},"Finn og velg ditt prosjekt"),(0,n.kt)("p",null,"Du har f\xe5tt et prosjekt p\xe5 GCP. Et prosjekt i GCP er et arbeidsomr\xe5de hvor du kan opprette ressurser som trengs i ditt analysearbeid, kj\xf8re SQL-sp\xf8rringer i datavarehuset BigQuery og lignende."),(0,n.kt)("p",null,"N\xe5r du jobber i GCP skal du alltid ha valgt dette prosjektet. Dette kan du gj\xf8re med \xe9n gang. Du kan velge ditt prosjekt ved \xe5 trykke p\xe5 prosjektvelgeren \xf8verst p\xe5 siden, slik som i bildet under."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Skjermbilde av valg av organisasjon i Google Cloud Platform",src:r(6893).Z,width:"1100",height:"408"})),(0,n.kt)("p",null,"Velg s\xe5 fanen \xabAll\xbb. Klikk deretter p\xe5 ditt prosjekt, som har et navn p\xe5 formatet ",(0,n.kt)("inlineCode",{parentName:"p"},"saga-<brukernavn>-playground-<suffix>"),". Du skal da kunne se navnet p\xe5 ditt prosjekt \xf8verst p\xe5 siden."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Skjermbilde av valg av fanen &quot;all&quot;.",src:r(4081).Z,width:"779",height:"327"})))}p.isMDXComponent=!0},6893:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/onboarding-1-0ae59b931e77009526d8310296319953.png"},4081:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/onboarding-2-ade3af42c6eab8accceaa0d29fa8438a.png"}}]);