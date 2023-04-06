"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[88643],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=a.createContext({}),d=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=d(t),m=l,k=u["".concat(o,".").concat(m)]||u[m]||s[m]||r;return t?a.createElement(k,i(i({ref:n},c),{},{components:t})):a.createElement(k,i({ref:n},c))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=u;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var d=2;d<r;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},88335:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var a=t(87462),l=(t(67294),t(3905));const r={title:"authz-casbin",keywords:["APISIX","Plugin","Authz Casbin","authz-casbin"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e Apache APISIX `authz-casbin` \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002"},i=void 0,p={unversionedId:"plugins/authz-casbin",id:"version-3.0/plugins/authz-casbin",isDocsHomePage:!1,title:"authz-casbin",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e Apache APISIX `authz-casbin` \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.0/plugins/authz-casbin.md",sourceDirName:"plugins",slug:"/plugins/authz-casbin",permalink:"/zh/docs/apisix/3.0/plugins/authz-casbin",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.0/docs/zh/latest/plugins/authz-casbin.md",tags:[],version:"3.0",frontMatter:{title:"authz-casbin",keywords:["APISIX","Plugin","Authz Casbin","authz-casbin"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e Apache APISIX `authz-casbin` \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002"},sidebar:"version-3.0/docs",previous:{title:"hmac-auth",permalink:"/zh/docs/apisix/3.0/plugins/hmac-auth"},next:{title:"ldap-auth",permalink:"/zh/docs/apisix/3.0/plugins/ldap-auth"}},o=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u5143\u6570\u636e",id:"\u5143\u6570\u636e",children:[]},{value:"\u542f\u7528\u63d2\u4ef6",id:"\u542f\u7528\u63d2\u4ef6",children:[{value:"\u901a\u8fc7 model/policy \u6587\u4ef6\u8def\u5f84\u542f\u7528\u63d2\u4ef6",id:"\u901a\u8fc7-modelpolicy-\u6587\u4ef6\u8def\u5f84\u542f\u7528\u63d2\u4ef6",children:[]},{value:"\u901a\u8fc7 model/policy \u6587\u672c\u914d\u7f6e\u542f\u7528\u63d2\u4ef6",id:"\u901a\u8fc7-modelpolicy-\u6587\u672c\u914d\u7f6e\u542f\u7528\u63d2\u4ef6",children:[]},{value:"\u901a\u8fc7 plugin metadata \u914d\u7f6e\u6a21\u578b/\u7b56\u7565",id:"\u901a\u8fc7-plugin-metadata-\u914d\u7f6e\u6a21\u578b\u7b56\u7565",children:[]}]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}],d={toc:o};function c(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"authz-casbin")," \u63d2\u4ef6\u662f\u4e00\u4e2a\u57fa\u4e8e ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/lua-casbin/"},"Lua Casbin")," \u7684\u8bbf\u95ee\u63a7\u5236\u63d2\u4ef6\uff0c\u8be5\u63d2\u4ef6\u652f\u6301\u5404\u79cd ",(0,l.kt)("a",{parentName:"p",href:"https://casbin.org/docs/en/supported-models"},"access control models")," \u7684\u5f3a\u5927\u6388\u6743\u573a\u666f\u3002"),(0,l.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"model_path"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin \u9274\u6743\u6a21\u578b\u914d\u7f6e\u6587\u4ef6\u8def\u5f84\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"policy_path"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin \u9274\u6743\u7b56\u7565\u914d\u7f6e\u6587\u4ef6\u8def\u5f84\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"model"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin \u9274\u6743\u6a21\u578b\u7684\u6587\u672c\u5b9a\u4e49\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"policy"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin \u9274\u6743\u7b56\u7565\u7684\u6587\u672c\u5b9a\u4e49\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"username"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63cf\u8ff0\u8bf7\u6c42\u4e2d\u6709\u53ef\u4ee5\u901a\u8fc7\u8bbf\u95ee\u63a7\u5236\u7684\u7528\u6237\u540d\u3002")))),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u4f60\u5fc5\u987b\u5728\u63d2\u4ef6\u914d\u7f6e\u4e2d\u6307\u5b9a ",(0,l.kt)("inlineCode",{parentName:"p"},"model_path"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"policy_path")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"username")," \u6216\u8005\u6307\u5b9a ",(0,l.kt)("inlineCode",{parentName:"p"},"model"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"policy")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"username")," \u624d\u80fd\u4f7f\u63d2\u4ef6\u751f\u6548\u3002"),(0,l.kt)("p",{parentName:"div"},"\u5982\u679c\u4f60\u60f3\u8981\u4f7f\u6240\u6709\u7684 Route \u5171\u4eab Casbin \u914d\u7f6e\uff0c\u4f60\u53ef\u4ee5\u5148\u5728\u63d2\u4ef6\u5143\u6570\u636e\u4e2d\u6307\u5b9a ",(0,l.kt)("inlineCode",{parentName:"p"},"model")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"policy"),"\uff0c\u5728\u63d2\u4ef6\u914d\u7f6e\u4e2d\u4ec5\u6307\u5b9a ",(0,l.kt)("inlineCode",{parentName:"p"},"username"),"\uff0c\u8fd9\u6837\u6240\u6709 Route \u90fd\u53ef\u4ee5\u4f7f\u7528 Casbin \u63d2\u4ef6\u914d\u7f6e\u3002"))),(0,l.kt)("h2",{id:"\u5143\u6570\u636e"},"\u5143\u6570\u636e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"model"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin \u9274\u6743\u6a21\u578b\u7684\u6587\u672c\u5b9a\u4e49\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"policy"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin \u9274\u6743\u7b56\u7565\u7684\u6587\u672c\u5b9a\u4e49\u3002")))),(0,l.kt)("h2",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 model/policy \u6587\u4ef6\u8def\u5f84\u6216\u4f7f\u7528\u63d2\u4ef6 configuration/metadata \u4e2d\u7684 model/policy \u6587\u672c\u914d\u7f6e\u5728 Route \u4e0a\u542f\u7528\u63d2\u4ef6\u3002"),(0,l.kt)("h3",{id:"\u901a\u8fc7-modelpolicy-\u6587\u4ef6\u8def\u5f84\u542f\u7528\u63d2\u4ef6"},"\u901a\u8fc7 model/policy \u6587\u4ef6\u8def\u5f84\u542f\u7528\u63d2\u4ef6"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u5c55\u793a\u4e86\u901a\u8fc7 model/policy \u914d\u7f6e\u6587\u4ef6\u6765\u8bbe\u7f6e Casbin \u8eab\u4efd\u9a8c\u8bc1\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "authz-casbin": {\n            "model_path": "/path/to/model.conf",\n            "policy_path": "/path/to/policy.csv",\n            "username": "user"\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1980": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/*"\n}\'\n')),(0,l.kt)("h3",{id:"\u901a\u8fc7-modelpolicy-\u6587\u672c\u914d\u7f6e\u542f\u7528\u63d2\u4ef6"},"\u901a\u8fc7 model/policy \u6587\u672c\u914d\u7f6e\u542f\u7528\u63d2\u4ef6"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u5c55\u793a\u4e86\u901a\u8fc7\u4f60\u7684 model/policy \u6587\u672c\u6765\u8bbe\u7f6e Casbin \u8eab\u4efd\u9a8c\u8bc1\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "authz-casbin": {\n            "model": "[request_definition]\n            r = sub, obj, act\n\n            [policy_definition]\n            p = sub, obj, act\n\n            [role_definition]\n            g = _, _\n\n            [policy_effect]\n            e = some(where (p.eft == allow))\n\n            [matchers]\n            m = (g(r.sub, p.sub) || keyMatch(r.sub, p.sub)) && keyMatch(r.obj, p.obj) && keyMatch(r.act, p.act)",\n\n            "policy": "p, *, /, GET\n            p, admin, *, *\n            g, alice, admin",\n\n            "username": "user"\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1980": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/*"\n}\'\n')),(0,l.kt)("h3",{id:"\u901a\u8fc7-plugin-metadata-\u914d\u7f6e\u6a21\u578b\u7b56\u7565"},"\u901a\u8fc7 plugin metadata \u914d\u7f6e\u6a21\u578b/\u7b56\u7565"),(0,l.kt)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u9700\u8981\u4f7f\u7528 Admin API \u53d1\u9001\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"PUT")," \u8bf7\u6c42\uff0c\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"model")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"policy")," \u7684\u914d\u7f6e\u6dfb\u52a0\u5230\u63d2\u4ef6\u7684\u5143\u6570\u636e\u4e2d\u3002"),(0,l.kt)("p",null,"\u6240\u6709\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\u521b\u5efa\u7684 Route \u90fd\u4f1a\u5e26\u6709\u4e00\u4e2a\u5e26\u63d2\u4ef6\u5143\u6570\u636e\u914d\u7f6e\u7684 Casbin enforcer\u3002\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528\u8fd9\u79cd\u65b9\u5f0f\u66f4\u65b0 model/policy\uff0c\u8be5\u63d2\u4ef6\u5c06\u4f1a\u81ea\u52a8\u540c\u6b65\u6700\u65b0\u7684\u914d\u7f6e\u4fe1\u606f\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/plugin_metadata/authz-casbin \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -i -X PUT -d \'\n{\n"model": "[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[role_definition]\ng = _, _\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = (g(r.sub, p.sub) || keyMatch(r.sub, p.sub)) && keyMatch(r.obj, p.obj) && keyMatch(r.act, p.act)",\n\n"policy": "p, *, /, GET\np, admin, *, *\ng, alice, admin"\n}\'\n')),(0,l.kt)("p",null,"\u66f4\u65b0\u63d2\u4ef6\u5143\u6570\u636e\u540e\uff0c\u53ef\u4ee5\u5c06\u63d2\u4ef6\u6dfb\u52a0\u5230\u6307\u5b9a Route \u4e2d\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "authz-casbin": {\n            "username": "user"\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1980": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/*"\n}\'\n')),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u63d2\u4ef6\u8def\u7531\u7684\u914d\u7f6e\u6bd4\u63d2\u4ef6\u5143\u6570\u636e\u7684\u914d\u7f6e\u6709\u66f4\u9ad8\u7684\u4f18\u5148\u7ea7\u3002\u56e0\u6b64\uff0c\u5982\u679c\u63d2\u4ef6\u8def\u7531\u7684\u914d\u7f6e\u4e2d\u5b58\u5728 model/policy \u914d\u7f6e\uff0c\u63d2\u4ef6\u5c06\u4f18\u5148\u4f7f\u7528\u63d2\u4ef6\u8def\u7531\u7684\u914d\u7f6e\u800c\u4e0d\u662f\u63d2\u4ef6\u5143\u6570\u636e\u4e2d\u7684\u914d\u7f6e\u3002"))),(0,l.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,l.kt)("p",null,"\u9996\u5148\u5b9a\u4e49\u6d4b\u8bd5\u9274\u6743\u6a21\u578b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-conf"},"[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[role_definition]\ng = _, _\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = (g(r.sub, p.sub) || keyMatch(r.sub, p.sub)) && keyMatch(r.obj, p.obj) && keyMatch(r.act, p.act)\n")),(0,l.kt)("p",null,"\u7136\u540e\u6dfb\u52a0\u6d4b\u8bd5\u9274\u6743\u7b56\u7565\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-conf"},"p, *, /, GET\np, admin, *, *\ng, alice, admin\n")),(0,l.kt)("p",null,"\u5982\u679c\u60f3\u8981\u4e86\u89e3\u66f4\u591a\u5173\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"policy")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"model")," \u7684\u914d\u7f6e\uff0c\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/lua-casbin/tree/master/examples"},"examples"),"\u3002"),(0,l.kt)("p",null,"\u4e0a\u8ff0\u914d\u7f6e\u5c06\u5141\u8bb8\u6240\u6709\u4eba\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"GET")," \u8bf7\u6c42\u8bbf\u95ee\u4e3b\u9875\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"/"),"\uff09\uff0c\u800c\u53ea\u6709\u5177\u6709\u7ba1\u7406\u5458\u6743\u9650\u7684\u7528\u6237\u624d\u53ef\u4ee5\u8bbf\u95ee\u5176\u4ed6\u9875\u9762\u5e76\u4f7f\u7528\u5176\u4ed6\u8bf7\u6c42\u65b9\u6cd5\u3002"),(0,l.kt)("p",null,"\u7b80\u5355\u4e3e\u4f8b\u6765\u8bf4\uff0c\u5047\u8bbe\u6211\u4eec\u5411\u4e3b\u9875\u53d1\u51fa ",(0,l.kt)("inlineCode",{parentName:"p"},"GET")," \u8bf7\u6c42\uff0c\u901a\u5e38\u90fd\u53ef\u4ee5\u8fd4\u56de\u6b63\u5e38\u7ed3\u679c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/ -X GET\n")),(0,l.kt)("p",null,"\u4f46\u5982\u679c\u662f\u4e00\u4e2a\u672a\u7ecf\u6388\u6743\u7684\u666e\u901a\u7528\u6237\uff08\u4f8b\u5982\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"bob"),"\uff09\u8bbf\u95ee\u9664 ",(0,l.kt)("inlineCode",{parentName:"p"},"/")," \u4ee5\u5916\u7684\u5176\u4ed6\u9875\u9762\uff0c\u5c06\u5f97\u5230\u4e00\u4e2a 403 \u9519\u8bef\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/res -H 'user: bob' -X GET\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"HTTP/1.1 403 Forbidden\n")),(0,l.kt)("p",null,"\u800c\u62e5\u6709\u7ba1\u7406\u6743\u9650\u7684\u7528\u6237\uff08\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"alice"),"\uff09\u5219\u53ef\u4ee5\u8bbf\u95ee\u5176\u5b83\u9875\u9762\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/res -H 'user: alice' -X GET\n")),(0,l.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,l.kt)("p",null,"\u5f53\u4f60\u9700\u8981\u7981\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"authz-casbin")," \u63d2\u4ef6\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5220\u9664\u76f8\u5e94\u7684 JSON \u914d\u7f6e\uff0cAPISIX \u5c06\u4f1a\u81ea\u52a8\u91cd\u65b0\u52a0\u8f7d\u76f8\u5173\u914d\u7f6e\uff0c\u65e0\u9700\u91cd\u542f\u670d\u52a1\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1  \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/*",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}c.isMDXComponent=!0}}]);