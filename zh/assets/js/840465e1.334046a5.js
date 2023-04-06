(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[10926],{49200:e=>{e.exports={versions:["2.12","2.13","2.14","2.15","3.0","3.1","3.2"],LTSVersions:["2.15"],versionMap:{2.99:"3.0.0-beta"},archivedVersions:[{label:"2.11",href:"https://625a9090d04b9a6953165811--2-11-old-docs-apache-apisix.netlify.app/docs/apisix/getting-started/"},{label:"2.10",href:"https://625a9090d04b9a6953165811--2-11-old-docs-apache-apisix.netlify.app/docs/apisix/2.10/getting-started/"},{label:"2.9",href:"https://625a57e513f19e48ae3a4468--old-docs-apache-apisix.netlify.app/docs/apisix/getting-started/"},{label:"2.8",href:"https://625a57e513f19e48ae3a4468--old-docs-apache-apisix.netlify.app/docs/apisix/2.8/getting-started/"},{label:"2.7",href:"https://625a57e513f19e48ae3a4468--old-docs-apache-apisix.netlify.app/docs/apisix/2.7/getting-started/"},{label:"2.6",href:"https://625a57e513f19e48ae3a4468--old-docs-apache-apisix.netlify.app/docs/apisix/2.6/getting-started/"},{label:"2.5",href:"https://625a57e513f19e48ae3a4468--old-docs-apache-apisix.netlify.app/docs/apisix/2.5/getting-started/"},{label:"2.4",href:"https://625a57e513f19e48ae3a4468--old-docs-apache-apisix.netlify.app/docs/apisix/2.4/getting-started/"}]}},47409:(e,t,a)=>{"use strict";a.d(t,{Z:()=>g});var l=a(87462),n=a(67294),s=a(36742),r=a(44996),o=a(98374),i=a(5423),c=a(5565),p=a(45519),d=a(77645),h=a(39861);const u={container:"container_MP5Z",linksRow:"linksRow_iwpv",linksCol:"linksCol_a1ec",copyright:"copyright_ZfFh"},m={links:[{title:"ASF",items:[{label:"Foundation",to:"https://www.apache.org/"},{label:"License",to:"https://www.apache.org/licenses/"},{label:"Events",to:"https://www.apache.org/events/"},{label:"Security",to:"https://www.apache.org/security/"},{label:"Sponsorship",to:"https://www.apache.org/foundation/sponsorship.html"},{label:"Thanks",to:"https://www.apache.org/foundation/thanks.html"}]},{title:"Community",items:[{icon:i.Z,label:"GitHub",to:"https://github.com/apache/apisix/issues"},{icon:p.Z,label:"Slack",to:"/docs/general/join/#join-the-slack-channel",target:"_parent"},{icon:c.Z,label:"Twitter",to:"https://twitter.com/ApacheAPISIX"},{icon:d.Z,label:"YouTube",to:"https://www.youtube.com/channel/UCgPD18cMhOg5rmPVnQhAC8g"}]},{title:"More",items:[{label:"Blog",to:"/blog/",target:"_parent"},{label:"Showcase",to:"/showcase",target:"_parent"},{label:"Plugin Hub",to:"/plugins",target:"_parent"}]}],logo:{alt:"Apache Software Foundation",src:"https://static.apiseven.com/202202/asf_logo_wide_small.png",href:"https://www.apache.org/"},copyright:"Copyright \xa9 2019-"+(new Date).getFullYear()+" The Apache Software Foundation. Apache APISIX, APISIX\xae, Apache, the Apache feather logo, and the Apache APISIX project logo are either registered trademarks or trademarks of the Apache Software Foundation."},f=e=>{let{to:t,icon:a,href:i,label:c,prependBaseUrlToHref:p,...d}=e;const h=(0,r.Z)(t),u=(0,r.Z)(i,{forcePrependBaseUrl:!0}),m=i?{href:p?u:i}:{to:h};return n.createElement(s.Z,(0,l.Z)({},m,d),n.createElement(o.JO,{icon:a}),n.createElement("span",null,c))},g=()=>{const{copyright:e,links:t,logo:a}=m;return m?n.createElement("footer",{className:u.container},t&&t.length>0&&n.createElement("div",{className:u.linksRow},t.map((e=>{let{title:t,items:a}=e;return n.createElement("div",{key:t,className:u.linksCol},n.createElement("div",null,t),n.createElement("ul",null,a.map((e=>n.createElement("li",{key:e.to,className:"footer__item"},n.createElement(f,e))))))}))),n.createElement("div",{className:u.copyright},n.createElement(s.Z,{href:a.href},n.createElement(h.LazyLoadImage,{alt:a.alt,src:a.src,height:"40px",width:"231.25px"})),n.createElement("div",{className:u.text},e))):null}},19103:(e,t,a)=>{"use strict";a.d(t,{Z:()=>p});var l=a(87462),n=a(67294),s=a(36742),r=a(98465),o=a(44996),i=a(52263),c=a(941);const p=e=>{const{siteConfig:{title:t}}=(0,i.Z)(),{navbar:{title:a,logo:p={src:""}}}=(0,c.LU)(),{imageClassName:d,titleClassName:h,...u}=e,m=(0,o.Z)(p.href||"/"),f={light:(0,o.Z)(p.src),dark:(0,o.Z)(p.srcDark||p.src)};return n.createElement(s.Z,(0,l.Z)({target:"_parent",to:m},u),p.src&&n.createElement(r.Z,{className:d,sources:f,alt:p.alt||a||t}),null!=a&&n.createElement("b",{className:h},a))}},74653:(e,t,a)=>{"use strict";a.d(t,{Z:()=>v});var l=a(87462),n=a(67294),s=a(5525),r=a(23154),o=a(96730),i=a(941),c=a(24973),p=a(86010),d=a(49200);const h="badge_6FVu",u="LTS_DFZo",m="Latest_oyqS",f=e=>e.docs.find((t=>t.id===e.mainDocId)),g={LTS:n.createElement("div",{className:(0,p.Z)(h,u)},"LTS"),Latest:n.createElement("div",{className:(0,p.Z)(h,m)},"Latest")},b=e=>{const{version:t,isApisx:a}=e;return n.createElement("div",null,t.label,t.isLast&&g.Latest,a&&d.LTSVersions.includes(t.label)&&g.LTS)},v=e=>{var t,a;let{mobile:p,docsPluginId:d,dropdownActiveClassDisabled:h,dropdownItemsBefore:u,dropdownItemsAfter:m,...g}=e;const v=(0,o.useActiveDocContext)(d),w=(0,o.useVersions)(d),Z=(0,o.useLatestVersion)(d),E="docs-apisix"===d,{preferredVersion:k,savePreferredVersionName:C}=(0,i.J)(d);const y=function(){const e=w.map((e=>{const t=(null==v?void 0:v.alternateDocVersions[e.name])||f(e);return{isNavLink:!0,label:n.createElement(b,{version:e,isApisx:E}),to:t.path,isActive:()=>e===(null==v?void 0:v.activeVersion),onClick:()=>{C(e.name)}}}));return[...u,...e,...m]}(),A=null!=(t=null!=(a=v.activeVersion)?a:k)?t:Z,x=p&&y?(0,c.I)({id:"theme.navbar.mobileVersionsDropdown.label",message:"Versions",description:"The label for the navbar versions dropdown on mobile view"}):A.label,S=p&&y?void 0:f(A).path;return y.length<=1?n.createElement(s.Z,(0,l.Z)({},g,{mobile:p,label:x,to:S,isActive:h?()=>!1:void 0})):n.createElement(r.Z,(0,l.Z)({},g,{mobile:p,label:x,to:S,items:y,isActive:h?()=>!1:void 0}))}},29542:(e,t,a)=>{"use strict";a.d(t,{Z:()=>u});var l=a(87462),n=a(67294),s=a(23154),r=a(23264),o=a(52263),i=a(941),c=a(5977),p=a(36742);const d="iconLanguage_zID8",h="localizedBlogLink_cE-3",u=e=>{const{mobile:t,dropdownItemsBefore:a,dropdownItemsAfter:u,...m}=e,{i18n:{currentLocale:f,locales:g,localeConfigs:b}}=(0,o.Z)(),v=(0,i.l5)(),{pathname:w}=(0,c.TH)();if(w.startsWith("/zh/blog"))return n.createElement(p.Z,{className:h,isNavLink:!0,autoAddBaseUrl:!1,to:"pathname:///blog",target:"_self"},"English Blog");if(w.startsWith("/blog"))return n.createElement(p.Z,{className:h,isNavLink:!0,autoAddBaseUrl:!1,to:"pathname:///zh/blog",target:"_self"},"\u4e2d\u6587\u535a\u5ba2");function Z(e){return b[e].label}const E=[...a,...g.map((e=>{const t="pathname://"+v.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:Z(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===f?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),...u],k=t?"Languages":Z(f);return n.createElement(s.Z,(0,l.Z)({},m,{href:"#",mobile:t,label:n.createElement("span",null,n.createElement(r.Z,{className:d}),n.createElement("span",null,k)),items:E}))}},88749:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var l=a(67294),n=a(5525),s=a(23154),r=a(29542),o=a(51093);const i={default:()=>n.Z,localeDropdown:()=>r.Z,search:()=>o.Z,dropdown:()=>s.Z,docsVersion:()=>a(47250).Z,docsVersionDropdown:()=>a(74653).Z,doc:()=>a(76400).Z};const c=e=>{let{type:t,...a}=e;const n=function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==a.items),s=(e=>{const t=i[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()})(n);return l.createElement(s,a)}},13507:(e,t,a)=>{"use strict";a.d(t,{Z:()=>Z});var l=a(87462),n=a(67294),s=a(73935),r=a(52263),o=a(44996),i=a(36742),c=a(99105),p=a(6397),d=a(57052),h=a(16747),u=a(95613),m=a(24973);const f="searchBox_fBfG";let g=null;function b(e){let{hit:t,children:a}=e;return n.createElement("a",{href:t.url,target:"_parent"},a)}function v(e){let{state:t,onClose:a}=e;const{generateSearchPageLink:l}=(0,p.Z)();return n.createElement(i.Z,{to:l(t.query),onClick:a,target:"_blank"},"See all ",t.context.nbHits," results")}function w(e){var t,i;let{contextualSearch:p,...w}=e;const{siteMetadata:Z}=(0,r.Z)(),E=(0,u.Z)(),k=null!=(t=null==(i=w.searchParameters)?void 0:i.facetFilters)?t:[],C=p?[...E,...k]:k,y={...w.searchParameters,facetFilters:C},{withBaseUrl:A}=(0,o.C)(),x=(0,n.useRef)(null),S=(0,n.useRef)(null),[_,L]=(0,n.useState)(!1),[N,I]=(0,n.useState)(null),P=(0,n.useCallback)((()=>g?Promise.resolve():Promise.all([a.e(30477).then(a.bind(a,12431)),Promise.all([a.e(40532),a.e(46945)]).then(a.bind(a,46945)),Promise.all([a.e(40532),a.e(9846)]).then(a.bind(a,9846))]).then((e=>{let[{DocSearchModal:t}]=e;g=t}))),[]),V=(0,n.useCallback)((()=>{P().then((()=>{x.current=document.createElement("div"),document.body.insertBefore(x.current,document.body.firstChild),L(!0)}))}),[P,L]),T=(0,n.useCallback)((()=>{L(!1),x.current.remove()}),[L]),B=(0,n.useCallback)((e=>{P().then((()=>{L(!0),I(e.key)}))}),[P,L,I]),D=(0,n.useRef)({navigate(e){let{itemUrl:t}=e;location.assign(t)}}).current,F=(0,n.useRef)((e=>e.map((e=>{const t=document.createElement("a");return t.href=e.url,{...e,url:A(""+t.pathname+t.hash)}})))).current,U=(0,n.useMemo)((()=>e=>n.createElement(v,(0,l.Z)({},e,{onClose:T}))),[T]),R=(0,n.useCallback)((e=>(e.addAlgoliaAgent("docusaurus",Z.docusaurusVersion),e)),[Z.docusaurusVersion]);(0,d.D)({isOpen:_,onOpen:V,onClose:T,onInput:B,searchButtonRef:S});const M=(0,m.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return n.createElement(n.Fragment,null,n.createElement(c.Z,null,n.createElement("link",{rel:"preconnect",href:"https://"+w.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),n.createElement("div",{className:f},n.createElement(h.a,{onTouchStart:P,onFocus:P,onMouseOver:P,onClick:V,ref:S,translations:{buttonText:M,buttonAriaLabel:M}})),_&&(0,s.createPortal)(n.createElement(g,(0,l.Z)({onClose:T,initialScrollY:window.scrollY,initialQuery:N,navigator:D,transformItems:F,hitComponent:b,resultsFooterComponent:U,transformSearchClient:R},w,{searchParameters:y})),x.current))}const Z=function(){const{siteConfig:e}=(0,r.Z)();return n.createElement(w,e.themeConfig.algolia)}}}]);