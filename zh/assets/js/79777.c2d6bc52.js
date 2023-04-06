(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[79777],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,y=m["".concat(c,".").concat(d)]||m[d]||p[d]||l;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44401:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(67294),o=n(86010),l=n(5977),i=n(77898);const a="backToTopButton_i9tI",c="backToTopButtonShow_wCmF";function s(){const e=(0,r.useRef)(null);return{smoothScrollTop:function(){e.current=function(){let e=null;return function t(){const n=document.documentElement.scrollTop;n>0&&(e=requestAnimationFrame(t),window.scrollTo(0,Math.floor(.85*n)))}(),()=>e&&cancelAnimationFrame(e)}()},cancelScrollToTop:()=>null==e.current?void 0:e.current()}}const u=function(){const e=(0,l.TH)(),{smoothScrollTop:t,cancelScrollToTop:n}=s(),[u,p]=(0,r.useState)(!1);return(0,i.Z)(((e,t)=>{let{scrollY:r}=e;if(!t)return;const o=r<t.scrollY;if(o||n(),r<300)p(!1);else if(o){const e=document.documentElement.scrollHeight;r+window.innerHeight<e&&p(!0)}else p(!1)}),[e]),r.createElement("button",{className:(0,o.Z)("clean-btn",a,{[c]:u}),type:"button",onClick:()=>t()},r.createElement("svg",{viewBox:"0 0 24 24",width:"28"},r.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",fill:"currentColor"})))}},12296:(e,t,n)=>{"use strict";n.d(t,{O:()=>m});var r=n(87462),o=n(67294),l=n(86010),i=n(941),a=n(36742),c=n(13919),s=n(18617);const u="menuLinkText_OKON",p=(e,t)=>"link"===e.type?(0,i.Mg)(e.href,t):"category"===e.type&&e.items.some((e=>p(e,t))),m=(0,o.memo)((function(e){let{items:t,...n}=e;return o.createElement(o.Fragment,null,t.map(((e,t)=>o.createElement(d,(0,r.Z)({key:t,item:e},n)))))}));function d(e){let{item:t,...n}=e;return"category"===t.type?0===t.items.length?null:o.createElement(y,(0,r.Z)({item:t},n)):o.createElement(f,(0,r.Z)({item:t},n))}function y(e){let{item:t,onItemClick:n,activePath:a,...c}=e;const{items:s,label:d,collapsible:y}=t,f=p(t,a),{collapsed:h,setCollapsed:v,toggleCollapsed:g}=(0,i.uR)({initialState:()=>!!y&&(!f&&t.collapsed)});return function(e){let{isActive:t,collapsed:n,setCollapsed:r}=e;const l=(0,i.D9)(t);(0,o.useEffect)((()=>{t&&!l&&n&&r(!1)}),[t,l,n])}({isActive:f,collapsed:h,setCollapsed:v}),o.createElement("li",{className:(0,l.Z)(i.kM.docs.docSidebarItemCategory,"menu__list-item",{"menu__list-item--collapsed":h})},o.createElement("a",(0,r.Z)({className:(0,l.Z)("menu__link",{"menu__link--sublist":y,"menu__link--active":y&&f,[u]:!y}),onClick:y?e=>{e.preventDefault(),g()}:void 0,href:y?"#":void 0},c),d),o.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:h},o.createElement(m,{items:s,tabIndex:h?-1:0,onItemClick:n,activePath:a})))}function f(e){let{item:t,onItemClick:n,activePath:u,...m}=e;const{href:d,label:y}=t,f=p(t,u);return o.createElement("li",{className:(0,l.Z)(i.kM.docs.docSidebarItemLink,"menu__list-item"),key:y},o.createElement(a.Z,(0,r.Z)({className:(0,l.Z)("menu__link",{"menu__link--active":f}),"aria-current":f?"page":void 0,to:d},(0,c.Z)(d)&&{onClick:n},m),(0,c.Z)(d)?y:o.createElement("span",null,y,o.createElement(s.Z,null))))}},28408:(e,t,n)=>{"use strict";n.d(t,{N:()=>u,Z:()=>p});var r=n(87462),o=n(67294),l=n(86010),i=n(24973),a=n(941);const c="anchorWithStickyNavbar_y2LR",s="anchorWithHideOnScrollNavbar_3ly5",u=function(e){let{...t}=e;return o.createElement("header",null,o.createElement("h1",(0,r.Z)({},t,{id:void 0}),t.children))},p=e=>{return"h1"===e?u:(t=e,function(e){let{id:n,...r}=e;const{navbar:{hideOnScroll:u}}=(0,a.LU)();return n?o.createElement(t,r,o.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,l.Z)("anchor","anchor__"+t,{[s]:u,[c]:!u}),id:n}),r.children,o.createElement("a",{className:"hash-link",href:"#"+n,title:(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):o.createElement(t,r)});var t}},34096:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(87462),o=n(67294);const l=e=>o.createElement("svg",(0,r.Z)({width:"20",height:"20","aria-hidden":"true"},e),o.createElement("g",{fill:"#7a7a7a"},o.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),o.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},82238:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var r=n(87462),o=n(67294),l=n(99105),i=n(36742),a=n(64787),c=n(28408),s=n(86010),u=n(941);const p="details_h+cY";function m(e){let{...t}=e;return o.createElement(u.PO,(0,r.Z)({},t,{className:(0,s.Z)("alert alert--info",p,t.className)}))}const d={head:e=>{const t=o.Children.map(e.children,(e=>function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){const{mdxType:t,originalType:n,...r}=e.props;return o.createElement(e.props.originalType,r)}return e}(e)));return o.createElement(l.Z,e,t)},code:e=>{const{children:t}=e;return(0,o.isValidElement)(t)?t:t.includes("\n")?o.createElement(a.Z,e):o.createElement("code",e)},a:e=>o.createElement(i.Z,e),pre:e=>{var t;const{children:n}=e;return(0,o.isValidElement)(n)&&(0,o.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?n.props.children:o.createElement(a.Z,(0,o.isValidElement)(n)?null==n?void 0:n.props:{...e})},details:e=>{const t=o.Children.toArray(e.children),n=t.find((e=>{var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),l=o.createElement(o.Fragment,null,t.filter((e=>e!==n)));return o.createElement(m,(0,r.Z)({},e,{summary:n}),l)},h1:(0,c.Z)("h1"),h2:(0,c.Z)("h2"),h3:(0,c.Z)("h3"),h4:(0,c.Z)("h4"),h5:(0,c.Z)("h5"),h6:(0,c.Z)("h6")}},83583:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});const r={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]};var o=n(85350),l=n(941);const i=()=>{const{prism:e}=(0,l.LU)(),{isDarkTheme:t}=(0,o.Z)(),n=e.theme||r,i=e.darkTheme||n;return t?i:n}},87594:(e,t)=>{function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,l]=t;if(r&&l){r=parseInt(r),l=parseInt(l);const e=r<l?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(l+=e);for(let t=r;t!==l;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},24544:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>y,lG:()=>i});var r=n(87410);const o={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var l=n(67294),i={Prism:r.default,theme:o};function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}var s=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},m=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=c({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=c({},n,{backgroundColor:null}),o};function d(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}const y=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),a(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?m(e.theme,e.language):void 0;return t.themeDict=n})),a(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,l=c({},d(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(l.style=i.plain),void 0!==o&&(l.style=void 0!==l.style?c({},l.style,o):o),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),a(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return l[n[0]];var i=r?{display:"inline-block"}:{},a=n.map((function(e){return l[e]}));return Object.assign.apply(Object,[i].concat(a))}})),a(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,l=e.token,i=c({},d(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==o&&(i.style=void 0!==i.style?c({},i.style,o):o),void 0!==n&&(i.key=n),r&&(i.className+=" "+r),i})),a(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var l=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,l=this.getThemeDict(this.props),i=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],l=0,i=0,a=[],c=[a];i>-1;){for(;(l=r[i]++)<o[i];){var m=void 0,d=t[i],y=n[i][l];if("string"==typeof y?(d=i>0?d:["plain"],m=y):(d=p(d,y.type),y.alias&&(d=p(d,y.alias)),m=y.content),"string"==typeof m){var f=m.split(s),h=f.length;a.push({types:d,content:f[0]});for(var v=1;v<h;v++)u(a),c.push(a=[]),a.push({types:d,content:f[v]})}else i++,t.push(d),n.push(m),r.push(0),o.push(m.length)}i--,t.pop(),n.pop(),r.pop(),o.pop()}return u(a),c}(void 0!==i?this.tokenize(t,r,i,n):[r]),className:"prism-code language-"+n,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(l.Component)},98055:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=function(e){if(e){var t=function(e){return[].slice.call(e)},n=3,r=[],o=null,l="requestAnimationFrame"in e?function(){e.cancelAnimationFrame(o),o=e.requestAnimationFrame((function(){return a(r.filter((function(e){return e.dirty&&e.active})))}))}:function(){},i=function(e){return function(){r.forEach((function(t){return t.dirty=e})),l()}},a=function(e){e.filter((function(e){return!e.styleComputed})).forEach((function(e){e.styleComputed=p(e)})),e.filter(m).forEach(d);var t=e.filter(u);t.forEach(s),t.forEach((function(e){d(e),c(e)})),t.forEach(y)},c=function(e){return e.dirty=0},s=function(e){e.availableWidth=e.element.parentNode.clientWidth,e.currentWidth=e.element.scrollWidth,e.previousFontSize=e.currentFontSize,e.currentFontSize=Math.min(Math.max(e.minSize,e.availableWidth/e.currentWidth*e.previousFontSize),e.maxSize),e.whiteSpace=e.multiLine&&e.currentFontSize===e.minSize?"normal":"nowrap"},u=function(e){return 2!==e.dirty||2===e.dirty&&e.element.parentNode.clientWidth!==e.availableWidth},p=function(t){var n=e.getComputedStyle(t.element,null);return t.currentFontSize=parseFloat(n.getPropertyValue("font-size")),t.display=n.getPropertyValue("display"),t.whiteSpace=n.getPropertyValue("white-space"),!0},m=function(e){var t=!1;return!e.preStyleTestCompleted&&(/inline-/.test(e.display)||(t=!0,e.display="inline-block"),"nowrap"!==e.whiteSpace&&(t=!0,e.whiteSpace="nowrap"),e.preStyleTestCompleted=!0,t)},d=function(e){e.element.style.whiteSpace=e.whiteSpace,e.element.style.display=e.display,e.element.style.fontSize=e.currentFontSize+"px"},y=function(e){e.element.dispatchEvent(new CustomEvent("fit",{detail:{oldValue:e.previousFontSize,newValue:e.currentFontSize,scaleFactor:e.currentFontSize/e.previousFontSize}}))},f=function(e,t){return function(){e.dirty=t,e.active&&l()}},h=function(e){return function(){r=r.filter((function(t){return t.element!==e.element})),e.observeMutations&&e.observer.disconnect(),e.element.style.whiteSpace=e.originalStyle.whiteSpace,e.element.style.display=e.originalStyle.display,e.element.style.fontSize=e.originalStyle.fontSize}},v=function(e){return function(){e.active||(e.active=!0,l())}},g=function(e){return function(){return e.active=!1}},b=function(e){e.observeMutations&&(e.observer=new MutationObserver(f(e,1)),e.observer.observe(e.element,e.observeMutations))},k={minSize:16,maxSize:512,multiLine:!0,observeMutations:"MutationObserver"in e&&{subtree:!0,childList:!0,characterData:!0}},E=null,S=function(){e.clearTimeout(E),E=e.setTimeout(i(2),T.observeWindowDelay)},w=["resize","orientationchange"];return Object.defineProperty(T,"observeWindow",{set:function(t){var n="".concat(t?"add":"remove","EventListener");w.forEach((function(t){e[n](t,S)}))}}),T.observeWindow=!0,T.observeWindowDelay=100,T.fitAll=i(n),T}function O(e,t){var o=Object.assign({},k,t),i=e.map((function(e){var t=Object.assign({},o,{element:e,active:!0});return function(e){e.originalStyle={whiteSpace:e.element.style.whiteSpace,display:e.element.style.display,fontSize:e.element.style.fontSize},b(e),e.newbie=!0,e.dirty=!0,r.push(e)}(t),{element:e,fit:f(t,n),unfreeze:v(t),freeze:g(t),unsubscribe:h(t)}}));return l(),i}function T(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"==typeof e?O(t(document.querySelectorAll(e)),n):O([e],n)[0]}}("undefined"==typeof window?null:window)},10195:(e,t,n)=>{"use strict";function r(e,t){let{target:n=document.body}=void 0===t?{}:t;const r=document.createElement("textarea"),o=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";const l=document.getSelection();let i=!1;l.rangeCount>0&&(i=l.getRangeAt(0)),n.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;let a=!1;try{a=document.execCommand("copy")}catch{}return r.remove(),i&&(l.removeAllRanges(),l.addRange(i)),o&&o.focus(),a}n.d(t,{Z:()=>r})}}]);