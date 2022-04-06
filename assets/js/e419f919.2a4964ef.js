"use strict";(self.webpackChunksaga_docs=self.webpackChunksaga_docs||[]).push([[345],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return c}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(r),c=a,g=m["".concat(l,".").concat(c)]||m[c]||d[c]||o;return r?n.createElement(g,s(s({ref:t},u),{},{components:r})):n.createElement(g,s({ref:t},u))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4384:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),s=["components"],i={},l="Laste ned datasett og resultater",p={unversionedId:"bigquery/laste-ned-datasett",id:"bigquery/laste-ned-datasett",title:"Laste ned datasett og resultater",description:"Det finnes mange m\xe5ter \xe5 hente data ut fra BigQuery p\xe5. Her f\xf8lger en forklaring p\xe5 hvordan data kan eksporteres som JSON.",source:"@site/docs/03-bigquery/01-laste-ned-datasett.md",sourceDirName:"03-bigquery",slug:"/bigquery/laste-ned-datasett",permalink:"/bigquery/laste-ned-datasett",editUrl:"https://github.com/svvsaga/docs-public/edit/docs/03-bigquery/01-laste-ned-datasett.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Analyse i BigQuery",permalink:"/bigquery/"},next:{title:"Eksempler",permalink:"/eksempler/"}},u={},d=[],m={toc:d};function c(e){var t=e.components,i=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"laste-ned-datasett-og-resultater"},"Laste ned datasett og resultater"),(0,o.kt)("p",null,"Det finnes mange m\xe5ter \xe5 hente data ut fra BigQuery p\xe5. Her f\xf8lger en forklaring p\xe5 hvordan data kan eksporteres som JSON."),(0,o.kt)("p",null,"For \xe5 kunne eksportere data m\xe5 du f\xf8rst ha opprettet en GCP-bruker og et prosjekt"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"G\xe5 til ",(0,o.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/bigquery?p=saga-vegvar-prod-znny&d=standardized&t=maalestasjoner&page=table"},"M\xe5lestasjoner-datasettet i BigQuery"),"."),(0,o.kt)("p",{parentName:"li"},"Prosjektet i prosjektvelgeren skal v\xe6re satt til ditt personlige prosjekt. Det gj\xf8r at du f\xe5r lov \xe5 kj\xf8re sp\xf8rringer mot BigQuery.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Legg inn f\xf8lgende sp\xf8rring:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT\n  ANY_VALUE(navn) navn,\n  ANY_VALUE(lokasjon) lokasjon,\n  MIN(lufttemperaturCelsius) minTemperatur,\n  MAX(lufttemperaturCelsius) maksTemperatur,\n  DATE(maaletidspunkt, "Europe/Oslo") dato\nFROM `saga-vegvar-prod-znny.standardized.maaledata` md\nJOIN `saga-vegvar-prod-znny.standardized.maalestasjoner` ms\n  ON md.maalestasjonId = ms.id AND md.maalestasjonVersjon = ms.versjon\nWHERE DATE(maaletidspunkt, "Europe/Oslo") BETWEEN "2022-01-01" AND "2022-01-07"\nGROUP BY ms.id, ms.versjon, dato\nORDER BY dato, navn\n')),(0,o.kt)("p",{parentName:"li"},"Denne sp\xf8rringen vil hente ut alle minimums- og maksimumstemperaturer mellom 1. og 7. januar 2022.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Kj\xf8r sp\xf8rringen, og velg s\xe5 ",(0,o.kt)("strong",{parentName:"p"},"SAVE RESULTS.")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Lagre resultater i BigQuery console",src:r(2227).Z,width:"1272",height:"785"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Du vil f\xe5 sp\xf8rsm\xe5l om ulike lagringsmuligheter. Velg f.eks. ",(0,o.kt)("strong",{parentName:"p"},"JSON (local file).")," Denne nedlastingen st\xf8tter opp til 16 000 rader."),(0,o.kt)("p",{parentName:"li"},"Deretter kan du \xe5pne JSON-filen i et tekstredigeringsprogram, som f.eks. ",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"Visual Studio Code"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Vise JSON-data i VS Code",src:r(5170).Z,width:"1279",height:"685"})),(0,o.kt)("p",{parentName:"li"},"Denne dataen kan prosesseres videre offline, f.eks. ved hjelp av verkt\xf8y som ",(0,o.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/"},"jq"),", eller lastes inn i et annet analyseprogram, som Excel, ",(0,o.kt)("a",{parentName:"p",href:"https://datastudio.google.com/"},"Data Studio")," eller ",(0,o.kt)("a",{parentName:"p",href:"https://powerbi.microsoft.com/"},"Power BI"),"."))))}c.isMDXComponent=!0},2227:function(e,t,r){t.Z=r.p+"assets/images/laste-ned-datasett-1-e2207a1e02e7793e8ff2d80ae2227b90.webp"},5170:function(e,t,r){t.Z=r.p+"assets/images/laste-ned-datasett-2-cd4b2f3414e0a5822a87df301913e65d.webp"}}]);