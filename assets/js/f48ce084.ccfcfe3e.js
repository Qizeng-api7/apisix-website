"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[33274],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15714:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={title:"server-info",keywords:["APISIX","Plugin","Server info","server-info"],description:"This document contains information about the Apache APISIX server-info Plugin."},o=void 0,l={unversionedId:"plugins/server-info",id:"version-3.2/plugins/server-info",isDocsHomePage:!1,title:"server-info",description:"This document contains information about the Apache APISIX server-info Plugin.",source:"@site/docs-apisix_versioned_docs/version-3.2/plugins/server-info.md",sourceDirName:"plugins",slug:"/plugins/server-info",permalink:"/docs/apisix/plugins/server-info",editUrl:"/edit#https://github.com/apache/apisix/edit/release/3.2/docs/en/latest/plugins/server-info.md",tags:[],version:"3.2",frontMatter:{title:"server-info",keywords:["APISIX","Plugin","Server info","server-info"],description:"This document contains information about the Apache APISIX server-info Plugin."},sidebar:"version-3.2/docs",previous:{title:"real-ip",permalink:"/docs/apisix/plugins/real-ip"},next:{title:"ext-plugin-pre-req",permalink:"/docs/apisix/plugins/ext-plugin-pre-req"}},p=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"API",id:"api",children:[]},{value:"Enabling the Plugin",id:"enabling-the-plugin",children:[]},{value:"Customizing server info report configuration",id:"customizing-server-info-report-configuration",children:[]},{value:"Example usage",id:"example-usage",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"server-info")," Plugin periodically reports basic server information to etcd."),(0,i.kt)("p",null,"The information reported by the Plugin is explained below:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"boot_time"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"Bootstrap time (UNIX timestamp) of the APISIX instance. Resets when hot updating but not when APISIX is just reloaded.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"id"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"APISIX instance ID.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"etcd_version"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Version of the etcd cluster used by APISIX. Will be ",(0,i.kt)("inlineCode",{parentName:"td"},"unknown")," if the network to etcd is partitioned.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"version"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Version of APISIX instance.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"hostname"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Hostname of the machine/pod APISIX is deployed to.")))),(0,i.kt)("h2",{id:"attributes"},"Attributes"),(0,i.kt)("p",null,"None."),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("p",null,"This Plugin exposes the endpoint ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/server_info")," to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/control-api"},"Control API")),(0,i.kt)("h2",{id:"enabling-the-plugin"},"Enabling the Plugin"),(0,i.kt)("p",null,"Add ",(0,i.kt)("inlineCode",{parentName:"p"},"server-info")," to the Plugin list in your configuration file (",(0,i.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config.yaml"',title:'"conf/config.yaml"'},"plugins:\n  - ...\n  - server-info\n")),(0,i.kt)("h2",{id:"customizing-server-info-report-configuration"},"Customizing server info report configuration"),(0,i.kt)("p",null,"We can change the report configurations in the ",(0,i.kt)("inlineCode",{parentName:"p"},"plugin_attr")," section of ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),"."),(0,i.kt)("p",null,"The following configurations of the server info report can be customized:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"report_ttl"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"36"),(0,i.kt)("td",{parentName:"tr",align:null},"Time in seconds after which the report is deleted from etcd (maximum: 86400, minimum: 3).")))),(0,i.kt)("p",null,"To customize, you can modify the ",(0,i.kt)("inlineCode",{parentName:"p"},"plugin_attr")," attribute in your configuration file (",(0,i.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config.yaml"',title:'"conf/config.yaml"'},"plugin_attr:\n  server-info:\n    report_ttl: 60\n")),(0,i.kt)("h2",{id:"example-usage"},"Example usage"),(0,i.kt)("p",null,"After you enable the Plugin as mentioned above, you can access the server info report through the Control API:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9090/v1/server_info -s | jq .\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "etcd_version": "3.5.0",\n  "id": "b7ce1c5c-b1aa-4df7-888a-cbe403f3e948",\n  "hostname": "fedora32",\n  "version": "2.1",\n  "boot_time": 1608522102\n}\n')),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can also view the server info report through the ",(0,i.kt)("a",{parentName:"p",href:"/docs/dashboard/USER_GUIDE"},"APISIX Dashboard"),"."))),(0,i.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,i.kt)("p",null,"To disable the Plugin, you can remove ",(0,i.kt)("inlineCode",{parentName:"p"},"server-info")," from the list of Plugins in your configuration file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config.yaml"',title:'"conf/config.yaml"'},"plugins:\n  - ...\n")))}u.isMDXComponent=!0}}]);