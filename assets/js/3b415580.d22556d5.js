"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6026],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5854:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={id:"waitForReplicants",title:"waitForReplicants",sidebar_label:"waitForReplicants"},s=void 0,c={unversionedId:"classes/waitForReplicants",id:"classes/waitForReplicants",title:"waitForReplicants",description:"(static) waitForReplicants(replicants) \u2192 \\{Promise.&lt;any>\\}",source:"@site/docs/classes/waitForReplicants.md",sourceDirName:"classes",slug:"/classes/waitForReplicants",permalink:"/docs/classes/waitForReplicants",draft:!1,editUrl:"https://github.com/nodecg/docs/edit/master/docs/classes/waitForReplicants.md",tags:[],version:"current",lastUpdatedBy:"Alex Van Camp",lastUpdatedAt:1668037147,formattedLastUpdatedAt:"Nov 9, 2022",frontMatter:{id:"waitForReplicants",title:"waitForReplicants",sidebar_label:"waitForReplicants"},sidebar:"mainSidebar",previous:{title:"readReplicant",permalink:"/docs/classes/readReplicant"},next:{title:"sendMessage",permalink:"/docs/classes/sendMessage"}},p={},u=[{value:"Parameters",id:"parameters",level:3},{value:"Example",id:"example",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"(static)")," ",(0,i.kt)("inlineCode",{parentName:"p"},"waitForReplicants(replicants)")," ",(0,i.kt)("em",{parentName:"p"},"\u2192 ","{","Promise.","<","any>","}")),(0,i.kt)("p",null,"Lets you easily wait for a group of Replicants to finish declaring."),(0,i.kt)("p",null,"Returns a promise which is resolved once all provided Replicants have emitted a change event, which is indicates that they must have finished declaring."),(0,i.kt)("p",null,"This method is only useful in client-side code. Server-side code never has to wait for Replicants."),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"replicants"),(0,i.kt)("td",{parentName:"tr",align:null},"Replicant"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("p",null,"From a graphic or dashboard panel:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const rep1 = nodecg.Replicant('rep1');\nconst rep2 = nodecg.Replicant('rep2');\n\n// You can provide as many Replicant arguments as you want,\n// this example just uses two Replicants.\nNodeCG.waitForReplicants(rep1, rep2).then(() => {\n    console.log('rep1 and rep2 are fully declared and ready to use!');\n});\n")))}m.isMDXComponent=!0}}]);