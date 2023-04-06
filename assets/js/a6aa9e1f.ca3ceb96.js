"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3089,2139],{3643:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var n=a(7378),l=a(353),r=a(4884),o=a(3179),s=a(4142),i=a(1787);const c=function(e){const{metadata:t}=e,{previousPage:a,nextPage:l}=t;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,i.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(s.Z,{className:"pagination-nav__link",to:a},n.createElement("div",{className:"pagination-nav__label"},"\xab"," ",n.createElement(i.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},l&&n.createElement(s.Z,{className:"pagination-nav__link",to:l},n.createElement("div",{className:"pagination-nav__label"},n.createElement(i.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))};var m=a(5013);const u=function(e){const{metadata:t,items:a,sidebar:s}=e,{siteConfig:{title:i}}=(0,l.Z)(),{blogDescription:u,blogTitle:h,permalink:p}=t,g="/"===p?i:h;return n.createElement(r.Z,{title:g,description:u,wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"},sidebar:s},a.map((e=>{let{content:t}=e;return n.createElement(o.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},n.createElement(t,null))})),n.createElement(c,{metadata:t}))}},6459:(e,t,a)=>{a.d(t,{Z:()=>b});var n=a(5773),l=a(7378),r=a(4142),o=a(8948),s=a(8374),i=a(5423),c=a(5565),m=a(5519),u=a(7645),h=a(9861);const p={container:"container_MP5Z",linksRow:"linksRow_iwpv",linksCol:"linksCol_a1ec",copyright:"copyright_ZfFh"},g={links:[{title:"ASF",items:[{label:"Foundation",to:"https://www.apache.org/"},{label:"License",to:"https://www.apache.org/licenses/"},{label:"Events",to:"https://www.apache.org/events/"},{label:"Security",to:"https://www.apache.org/security/"},{label:"Sponsorship",to:"https://www.apache.org/foundation/sponsorship.html"},{label:"Thanks",to:"https://www.apache.org/foundation/thanks.html"}]},{title:"Community",items:[{icon:i.Z,label:"GitHub",to:"https://github.com/apache/apisix/issues"},{icon:m.Z,label:"Slack",to:"/docs/general/join"},{icon:c.Z,label:"Twitter",to:"https://twitter.com/ApacheAPISIX"},{icon:u.Z,label:"YouTube",to:"https://www.youtube.com/channel/UCgPD18cMhOg5rmPVnQhAC8g"}]},{title:"More",items:[{label:"Blog",to:"/blog/",target:"_parent"},{label:"Showcase",to:"/showcase",target:"_parent"},{label:"Plugin Hub",to:"/plugins",target:"_parent"}]}],logo:{alt:"Apache Software Foundation",src:"https://static.apiseven.com/202202/asf_logo_wide_small.png",href:"https://www.apache.org/"},copyright:"Copyright \xa9 2019-"+(new Date).getFullYear()+" The Apache Software Foundation. Apache APISIX, APISIX\xae, Apache, the Apache feather logo, and the Apache APISIX project logo are either registered trademarks or trademarks of the Apache Software Foundation."},d=e=>{let{to:t,icon:a,href:i,label:c,prependBaseUrlToHref:m,...u}=e;const h=(0,o.Z)(t),p=(0,o.Z)(i,{forcePrependBaseUrl:!0}),g=i?{href:m?p:i}:{to:h};return l.createElement(r.Z,(0,n.Z)({},g,u),l.createElement(s.JO,{icon:a}),l.createElement("span",null,c))},b=()=>{const{copyright:e,links:t,logo:a}=g;return g?l.createElement("footer",{className:p.container},t&&t.length>0&&l.createElement("div",{className:p.linksRow},t.map((e=>{let{title:t,items:a}=e;return l.createElement("div",{key:t,className:p.linksCol},l.createElement("div",null,t),l.createElement("ul",null,a.map((e=>l.createElement("li",{key:e.to,className:"footer__item"},l.createElement(d,e))))))}))),l.createElement("div",{className:p.copyright},l.createElement(r.Z,{href:a.href},l.createElement(h.LazyLoadImage,{alt:a.alt,src:a.src,height:"40px",width:"231.25px"})),l.createElement("div",{className:p.text},e))):null}},4867:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(5773),l=a(7378),r=a(3727),o=a(6281),s=a(353),i=a(5013),c=a(9635),m=a(4142);const u="iconLanguage_zID8",h="localizedBlogLink_cE-3",p=e=>{const{mobile:t,dropdownItemsBefore:a,dropdownItemsAfter:p,...g}=e,{i18n:{currentLocale:d,locales:b,localeConfigs:f}}=(0,s.Z)(),w=(0,i.l5)(),{pathname:E}=(0,c.TH)();if(E.startsWith("/zh/blog"))return l.createElement(m.Z,{className:h,isNavLink:!0,autoAddBaseUrl:!1,to:"pathname:///blog",target:"_self"},"English Blog");if(E.startsWith("/blog"))return l.createElement(m.Z,{className:h,isNavLink:!0,autoAddBaseUrl:!1,to:"pathname:///zh/blog",target:"_self"},"\u4e2d\u6587\u535a\u5ba2");function v(e){return f[e].label}const k=[...a,...b.map((e=>{const t="pathname://"+w.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:v(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===d?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),...p],_=t?"Languages":v(d);return l.createElement(r.Z,(0,n.Z)({},g,{href:"#",mobile:t,label:l.createElement("span",null,l.createElement(o.Z,{className:u}),l.createElement("span",null,_)),items:k}))}},5403:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(5773),l=a(7378),r=a(1542),o=a(353),s=a(8948),i=a(4142),c=a(5361),m=a(9033),u=a(9495),h=a(2492),p=a(7489),g=a(1787);const d="searchBox_fBfG";let b=null;function f(e){let{hit:t,children:a}=e;return l.createElement("a",{href:t.url,target:"_parent"},a)}function w(e){let{state:t,onClose:a}=e;const{generateSearchPageLink:n}=(0,m.Z)();return l.createElement(i.Z,{to:n(t.query),onClick:a,target:"_blank"},"See all ",t.context.nbHits," results")}function E(e){var t,i;let{contextualSearch:m,...E}=e;const{siteMetadata:v}=(0,o.Z)(),k=(0,p.Z)(),_=null!=(t=null==(i=E.searchParameters)?void 0:i.facetFilters)?t:[],Z=m?[...k,..._]:_,C={...E.searchParameters,facetFilters:Z},{withBaseUrl:A}=(0,s.C)(),N=(0,l.useRef)(null),S=(0,l.useRef)(null),[y,P]=(0,l.useState)(!1),[I,B]=(0,l.useState)(null),L=(0,l.useCallback)((()=>b?Promise.resolve():Promise.all([a.e(6295).then(a.bind(a,6295)),Promise.all([a.e(532),a.e(9127)]).then(a.bind(a,9127)),Promise.all([a.e(532),a.e(160)]).then(a.bind(a,160))]).then((e=>{let[{DocSearchModal:t}]=e;b=t}))),[]),T=(0,l.useCallback)((()=>{L().then((()=>{N.current=document.createElement("div"),document.body.insertBefore(N.current,document.body.firstChild),P(!0)}))}),[L,P]),x=(0,l.useCallback)((()=>{P(!1),N.current.remove()}),[P]),F=(0,l.useCallback)((e=>{L().then((()=>{P(!0),B(e.key)}))}),[L,P,B]),M=(0,l.useRef)({navigate(e){let{itemUrl:t}=e;location.assign(t)}}).current,R=(0,l.useRef)((e=>e.map((e=>{const t=document.createElement("a");return t.href=e.url,{...e,url:A(""+t.pathname+t.hash)}})))).current,U=(0,l.useMemo)((()=>e=>l.createElement(w,(0,n.Z)({},e,{onClose:x}))),[x]),O=(0,l.useCallback)((e=>(e.addAlgoliaAgent("docusaurus",v.docusaurusVersion),e)),[v.docusaurusVersion]);(0,u.D)({isOpen:y,onOpen:T,onClose:x,onInput:F,searchButtonRef:S});const z=(0,g.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return l.createElement(l.Fragment,null,l.createElement(c.Z,null,l.createElement("link",{rel:"preconnect",href:"https://"+E.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),l.createElement("div",{className:d},l.createElement(h.a,{onTouchStart:L,onFocus:L,onMouseOver:L,onClick:T,ref:S,translations:{buttonText:z,buttonAriaLabel:z}})),y&&(0,r.createPortal)(l.createElement(b,(0,n.Z)({onClose:x,initialScrollY:window.scrollY,initialQuery:I,navigator:M,transformItems:R,hitComponent:f,resultsFooterComponent:U,transformSearchClient:O},E,{searchParameters:C})),N.current))}const v=function(){const{siteConfig:e}=(0,o.Z)();return l.createElement(E,e.themeConfig.algolia)}}}]);