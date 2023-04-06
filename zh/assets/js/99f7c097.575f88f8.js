"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[33204],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=i(n),u=a,k=c["".concat(s,".").concat(u)]||c[u]||d[u]||l;return n?r.createElement(k,o(o({ref:t},m),{},{components:n})):r.createElement(k,o({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var i=2;i<l;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},89341:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={title:"TCP/UDP \u52a8\u6001\u4ee3\u7406"},o=void 0,p={unversionedId:"stream-proxy",id:"version-2.15/stream-proxy",isDocsHomePage:!1,title:"TCP/UDP \u52a8\u6001\u4ee3\u7406",description:"\u4f17\u591a\u7684\u95fb\u540d\u7684\u5e94\u7528\u548c\u670d\u52a1\uff0c\u50cf LDAP\u3001 MYSQL \u548c RTMP \uff0c\u9009\u62e9 TCP \u4f5c\u4e3a\u901a\u4fe1\u534f\u8bae\u3002 \u4f46\u662f\u50cf DNS\u3001 syslog \u548c RADIUS \u8fd9\u7c7b\u975e\u4e8b\u52a1\u6027\u7684\u5e94\u7528\uff0c\u4ed6\u4eec\u9009\u62e9\u4e86 UDP \u534f\u8bae\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.15/stream-proxy.md",sourceDirName:".",slug:"/stream-proxy",permalink:"/zh/docs/apisix/2.15/stream-proxy",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/2.15/docs/zh/latest/stream-proxy.md",tags:[],version:"2.15",frontMatter:{title:"TCP/UDP \u52a8\u6001\u4ee3\u7406"},sidebar:"version-2.15/docs",previous:{title:"Stand-alone mode",permalink:"/zh/docs/apisix/2.15/stand-alone"},next:{title:"gRPC \u4ee3\u7406",permalink:"/zh/docs/apisix/2.15/grpc-proxy"}},s=[{value:"\u5982\u4f55\u5f00\u542f Stream \u4ee3\u7406",id:"\u5982\u4f55\u5f00\u542f-stream-\u4ee3\u7406",children:[]},{value:"\u5982\u4f55\u8bbe\u7f6e route",id:"\u5982\u4f55\u8bbe\u7f6e-route",children:[]},{value:"\u66f4\u591a route \u5339\u914d\u9009\u9879",id:"\u66f4\u591a-route-\u5339\u914d\u9009\u9879",children:[]},{value:"\u63a5\u6536 TLS over TCP \u8fde\u63a5",id:"\u63a5\u6536-tls-over-tcp-\u8fde\u63a5",children:[]},{value:"\u4ee3\u7406\u5230 TLS over TCP \u4e0a\u6e38",id:"\u4ee3\u7406\u5230-tls-over-tcp-\u4e0a\u6e38",children:[]}],i={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4f17\u591a\u7684\u95fb\u540d\u7684\u5e94\u7528\u548c\u670d\u52a1\uff0c\u50cf LDAP\u3001 MYSQL \u548c RTMP \uff0c\u9009\u62e9 TCP \u4f5c\u4e3a\u901a\u4fe1\u534f\u8bae\u3002 \u4f46\u662f\u50cf DNS\u3001 syslog \u548c RADIUS \u8fd9\u7c7b\u975e\u4e8b\u52a1\u6027\u7684\u5e94\u7528\uff0c\u4ed6\u4eec\u9009\u62e9\u4e86 UDP \u534f\u8bae\u3002"),(0,a.kt)("p",null,"APISIX \u53ef\u4ee5\u5bf9 TCP/UDP \u534f\u8bae\u8fdb\u884c\u4ee3\u7406\u5e76\u5b9e\u73b0\u52a8\u6001\u8d1f\u8f7d\u5747\u8861\u3002 \u5728 nginx \u4e16\u754c\uff0c\u79f0 TCP/UDP \u4ee3\u7406\u4e3a stream \u4ee3\u7406\uff0c\u5728 APISIX \u8fd9\u91cc\u6211\u4eec\u4e5f\u9075\u5faa\u4e86\u8fd9\u4e2a\u58f0\u660e\u3002"),(0,a.kt)("h2",{id:"\u5982\u4f55\u5f00\u542f-stream-\u4ee3\u7406"},"\u5982\u4f55\u5f00\u542f Stream \u4ee3\u7406"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," \u914d\u7f6e\u6587\u4ef6\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"stream_proxy")," \u9009\u9879\uff0c \u6307\u5b9a\u4e00\u7ec4\u9700\u8981\u8fdb\u884c\u52a8\u6001\u4ee3\u7406\u7684 IP \u5730\u5740\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0d\u5f00\u542f stream \u4ee3\u7406\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apisix:\n  stream_proxy: # TCP/UDP proxy\n    tcp: # TCP proxy address list\n      - 9100\n      - "127.0.0.1:9101"\n    udp: # UDP proxy address list\n      - 9200\n      - "127.0.0.1:9211"\n')),(0,a.kt)("p",null,"\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"p"},"apisix.enable_admin")," \u4e3a true\uff0c\u4e0a\u9762\u7684\u914d\u7f6e\u4f1a\u540c\u65f6\u542f\u7528 HTTP \u548c stream \u4ee3\u7406\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"enable_admin")," \u4e3a false\uff0c\u4e14\u9700\u8981\u540c\u65f6\u542f\u7528 HTTP \u548c stream \u4ee3\u7406\uff0c\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"only")," \u4e3a false\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apisix:\n  enable_admin: false\n  stream_proxy: # TCP/UDP proxy\n    only: false\n    tcp: # TCP proxy address list\n      - 9100\n")),(0,a.kt)("h2",{id:"\u5982\u4f55\u8bbe\u7f6e-route"},"\u5982\u4f55\u8bbe\u7f6e route"),(0,a.kt)("p",null,"\u7b80\u4f8b\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/stream_routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "remote_addr": "127.0.0.1",\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1995": 1\n        },\n        "type": "roundrobin"\n    }\n}\'\n')),(0,a.kt)("p",null,"\u4f8b\u5b50\u4e2d APISIX \u5bf9\u5ba2\u6237\u7aef IP \u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," \u7684\u8bf7\u6c42\u4ee3\u7406\u8f6c\u53d1\u5230\u4e0a\u6e38\u4e3b\u673a ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1:1995"),"\u3002\n\u66f4\u591a\u7528\u4f8b\uff0c\u8bf7\u53c2\u7167 ",(0,a.kt)("a",{parentName:"p",href:"../../../t/stream-node/sanity.t"},"test case"),"\u3002"),(0,a.kt)("h2",{id:"\u66f4\u591a-route-\u5339\u914d\u9009\u9879"},"\u66f4\u591a route \u5339\u914d\u9009\u9879"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u6dfb\u52a0\u66f4\u591a\u7684\u9009\u9879\u6765\u5339\u914d route\u3002\u76ee\u524d Stream Route \u914d\u7f6e\u652f\u6301 3 \u4e2a\u5b57\u6bb5\u8fdb\u884c\u8fc7\u6ee4\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"server_addr: \u63a5\u53d7 Stream Route \u8fde\u63a5\u7684 APISIX \u670d\u52a1\u5668\u7684\u5730\u5740\u3002"),(0,a.kt)("li",{parentName:"ul"},"server_port: \u63a5\u53d7 Stream Route \u8fde\u63a5\u7684 APISIX \u670d\u52a1\u5668\u7684\u7aef\u53e3\u3002"),(0,a.kt)("li",{parentName:"ul"},"remote_addr: \u53d1\u51fa\u8bf7\u6c42\u7684\u5ba2\u6237\u7aef\u5730\u5740\u3002")),(0,a.kt)("p",null,"\u4f8b\u5982"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/stream_routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "server_addr": "127.0.0.1",\n    "server_port": 2000,\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1995": 1\n        },\n        "type": "roundrobin"\n    }\n}\'\n')),(0,a.kt)("p",null,"\u4f8b\u5b50\u4e2d APISIX \u4f1a\u628a\u670d\u52a1\u5668\u5730\u5740\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),", \u7aef\u53e3\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"2000")," \u4ee3\u7406\u5230\u4e0a\u6e38\u5730\u5740 ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1:1995"),"\u3002"),(0,a.kt)("p",null,"\u8ba9\u6211\u4eec\u518d\u4e3e\u4e00\u4e2a\u5b9e\u9645\u573a\u666f\u7684\u4f8b\u5b50\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5c06\u6b64\u914d\u7f6e\u653e\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"config.yaml")," \u4e2d"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apisix:\n  stream_proxy: # TCP/UDP proxy\n    tcp: # TCP proxy address list\n      - 9100 # by default uses 0.0.0.0\n      - "127.0.0.10:9101"\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u73b0\u5728\u8fd0\u884c\u4e00\u4e2a mysql docker \u5bb9\u5668\u5e76\u5c06\u7aef\u53e3 3306 \u66b4\u9732\u7ed9\u4e3b\u673a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ docker run --name mysql -e MYSQL_ROOT_PASSWORD=toor -p 3306:3306 -d mysql\n# check it using a mysql client that it works\n$ mysql --host=127.0.0.1 --port=3306 -u root -p\nEnter password:\nWelcome to the MySQL monitor.  Commands end with ; or \\g.\nYour MySQL connection id is 25\n...\nmysql>\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u73b0\u5728\u6211\u4eec\u5c06\u521b\u5efa\u4e00\u4e2a\u5e26\u6709\u670d\u52a1\u5668\u8fc7\u6ee4\u7684 stream \u8def\u7531\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/stream_routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "server_addr": "127.0.0.10",\n    "server_port": 9101,\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:3306": 1\n        },\n        "type": "roundrobin"\n    }\n}\'\n')),(0,a.kt)("p",{parentName:"li"},"\u6bcf\u5f53 APISIX \u670d\u52a1\u5668 ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.10")," \u548c\u7aef\u53e3 ",(0,a.kt)("inlineCode",{parentName:"p"},"9101")," \u6536\u5230\u8fde\u63a5\u65f6\uff0c\u5b83\u53ea\u4f1a\u5c06\u8bf7\u6c42\u8f6c\u53d1\u5230 mysql \u4e0a\u6e38\u3002\u8ba9\u6211\u4eec\u6d4b\u8bd5\u4e00\u4e0b\uff1a")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5411 ",(0,a.kt)("inlineCode",{parentName:"p"},"9100")," \u53d1\u51fa\u8bf7\u6c42\uff08\u5728 config.yaml \u4e2d\u542f\u7528 stream \u4ee3\u7406\u7aef\u53e3\uff09\uff0c\u8fc7\u6ee4\u5668\u5339\u914d\u5931\u8d25\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ mysql --host=127.0.0.1 --port=9100 -u root -p\nEnter password:\nERROR 2013 (HY000): Lost connection to MySQL server at 'reading initial communication packet', system error: 2\n")),(0,a.kt)("p",{parentName:"li"},"\u4e0b\u9762\u7684\u8bf7\u6c42\u5339\u914d\u5230\u4e86 stream \u8def\u7531\uff0c\u6240\u4ee5\u5b83\u53ef\u4ee5\u6b63\u5e38\u4ee3\u7406\u5230 mysql\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"mysql --host=127.0.0.10 --port=9101 -u root -p\nEnter password:\nWelcome to the MySQL monitor.  Commands end with ; or \\g.\nYour MySQL connection id is 26\n...\nmysql>\n")))),(0,a.kt)("p",null,"\u5b8c\u6574\u7684\u5339\u914d\u9009\u9879\u5217\u8868\u53c2\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/apisix/2.15/admin-api#stream-route"},"Admin API \u7684 Stream Route"),"\u3002"),(0,a.kt)("h2",{id:"\u63a5\u6536-tls-over-tcp-\u8fde\u63a5"},"\u63a5\u6536 TLS over TCP \u8fde\u63a5"),(0,a.kt)("p",null,"APISIX \u652f\u6301\u63a5\u6536 TLS over TCP \u8fde\u63a5\u3002"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u9700\u8981\u7ed9\u5bf9\u5e94\u7684 TCP \u5730\u5740\u542f\u7528 TLS\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apisix:\n  stream_proxy: # TCP/UDP proxy\n    tcp: # TCP proxy address list\n      - addr: 9100\n        tls: true\n")),(0,a.kt)("p",null,"\u63a5\u7740\uff0c\u6211\u4eec\u9700\u8981\u4e3a\u7ed9\u5b9a\u7684 SNI \u914d\u7f6e\u8bc1\u4e66\u3002\n\u5177\u4f53\u6b65\u9aa4\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/apisix/2.15/admin-api#ssl"},"Admin API \u7684 SSL"),"\u3002\nmTLS \u4e5f\u662f\u652f\u6301\u7684\uff0c\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/apisix/2.15/mtls#%E4%BF%9D%E6%8A%A4%E8%B7%AF%E7%94%B1"},"\u4fdd\u62a4\u8def\u7531"),"\u3002"),(0,a.kt)("p",null,"\u7136\u540e\uff0c\u6211\u4eec\u9700\u8981\u914d\u7f6e\u4e00\u4e2a route\uff0c\u5339\u914d\u8fde\u63a5\u5e76\u4ee3\u7406\u5230\u4e0a\u6e38\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/stream_routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1995": 1\n        },\n        "type": "roundrobin"\n    }\n}\'\n')),(0,a.kt)("p",null,"\u5f53\u8fde\u63a5\u4e3a TLS over TCP \u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 SNI \u6765\u5339\u914d\u8def\u7531\uff0c\u6bd4\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/stream_routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "sni": "a.test.com",\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:5991": 1\n        },\n        "type": "roundrobin"\n    }\n}\'\n')),(0,a.kt)("p",null,"\u5728\u8fd9\u91cc\uff0c\u63e1\u624b\u65f6\u53d1\u9001 SNI ",(0,a.kt)("inlineCode",{parentName:"p"},"a.test.com")," \u7684\u8fde\u63a5\u4f1a\u88ab\u4ee3\u7406\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1:5991"),"\u3002"),(0,a.kt)("h2",{id:"\u4ee3\u7406\u5230-tls-over-tcp-\u4e0a\u6e38"},"\u4ee3\u7406\u5230 TLS over TCP \u4e0a\u6e38"),(0,a.kt)("p",null,"APISIX \u8fd8\u652f\u6301\u4ee3\u7406\u5230 TLS over TCP \u4e0a\u6e38\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/stream_routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "upstream": {\n        "scheme": "tls",\n        "nodes": {\n            "127.0.0.1:1995": 1\n        },\n        "type": "roundrobin"\n    }\n}\'\n')),(0,a.kt)("p",null,"\u901a\u8fc7\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"scheme")," \u4e3a tls\uff0cAPISIX \u5c06\u4e0e\u4e0a\u6e38\u8fdb\u884c TLS \u63e1\u624b\u3002"),(0,a.kt)("p",null,'\u5f53\u5ba2\u6237\u7aef\u4e5f\u4f7f\u7528 TLS over TCP\uff0c\u5ba2\u6237\u7aef\u53d1\u9001\u7684 SNI \u5c06\u4f20\u9012\u7ed9\u4e0a\u6e38\u3002\u5426\u5219\uff0c\u5c06\u4f7f\u7528\u4e00\u4e2a\u5047\u7684 SNI "apisix_backend"\u3002'))}m.isMDXComponent=!0}}]);