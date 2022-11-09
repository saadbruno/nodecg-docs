"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7143],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(i,".").concat(f)]||d[f]||u[f]||c;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<c;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9287:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(7462),o=n(3366),c=(n(7294),n(3905)),a=["components"],s={id:"socket",title:"socket",sidebar_label:"socket"},i=void 0,l={unversionedId:"classes/socket",id:"classes/socket",title:"socket",description:"This can only be used in code which runs in Dashboards and Graphics.",source:"@site/docs/classes/socket.md",sourceDirName:"classes",slug:"/classes/socket",permalink:"/docs/classes/socket",draft:!1,editUrl:"https://github.com/nodecg/docs/edit/master/docs/classes/socket.md",tags:[],version:"current",lastUpdatedBy:"Alex Van Camp",lastUpdatedAt:1668037147,formattedLastUpdatedAt:"Nov 9, 2022",frontMatter:{id:"socket",title:"socket",sidebar_label:"socket"},sidebar:"mainSidebar",previous:{title:"stopSound",permalink:"/docs/classes/stopSound"}},p={},u=[{value:"Example",id:"example",level:3}],d={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("admonition",{title:"Browser Only",type:"important"},(0,c.kt)("p",{parentName:"admonition"},"This can only be used in code which runs in Dashboards and Graphics.")),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"socket")),(0,c.kt)("p",null,"Provides a reference to the Socket.IO client socket instances."),(0,c.kt)("p",null,"See the ",(0,c.kt)("a",{parentName:"p",href:"https://socket.io/docs/v3/client-api"},"Socket.IO docs")," for full usage details."),(0,c.kt)("h3",{id:"example"},"Example"),(0,c.kt)("p",null,"Listening for socket disconnect events:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},'nodecg.socket.on("disconnect", () => {\n  console.log("Socket disconnected!");\n});\n')))}f.isMDXComponent=!0}}]);