"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3095],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),f=o,b=p["".concat(c,".").concat(f)]||p[f]||u[f]||a;return n?r.createElement(b,i(i({ref:t},s),{},{components:n})):r.createElement(b,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},16:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={id:"portable-nodecg",title:"Portable NodeCG",sidebar_label:"Portable NodeCG"},c=void 0,d={unversionedId:"portable-nodecg",id:"portable-nodecg",title:"Portable NodeCG",description:"By bundling the main Node.js executable (node.exe) with a NodeCG instance, NodeCG can run from any folder without",source:"@site/docs/portable-nodecg.md",sourceDirName:".",slug:"/portable-nodecg",permalink:"/docs/portable-nodecg",draft:!1,editUrl:"https://github.com/nodecg/docs/edit/master/docs/portable-nodecg.md",tags:[],version:"current",lastUpdatedBy:"Alex Van Camp",lastUpdatedAt:1668037147,formattedLastUpdatedAt:"Nov 9, 2022",frontMatter:{id:"portable-nodecg",title:"Portable NodeCG",sidebar_label:"Portable NodeCG"},sidebar:"mainSidebar",previous:{title:"Making Dashboard Dialogs",permalink:"/docs/making-dialogs"},next:{title:"Mount folders as endpoints",permalink:"/docs/mounts"}},s={},u=[],p={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"By bundling the main Node.js executable (",(0,a.kt)("inlineCode",{parentName:"p"},"node.exe"),") with a NodeCG instance, NodeCG can run from any folder without\nrequiring an installation process."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"To start, your NodeCG instance must be fully installed and configured. This means that all dependencies\nfor both NodeCG and all bundles should be installed. Run the instance once and make sure everything works before continuing."),(0,a.kt)("li",{parentName:"ol"},"Once you have verified that the instance works and that all dependencies are installed, copy ",(0,a.kt)("inlineCode",{parentName:"li"},"node.exe")," from your Node.js\ninstallation into the root of your NodeCG instance."),(0,a.kt)("li",{parentName:"ol"},"In the same directory, create a batch file or shell script with the following content:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"node index.js\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Double-click that batch file/shell script to run NodeCG.")),(0,a.kt)("p",null,"With the above procedure, it is possibly to fully configure a NodeCG instance and put it on a USB stick that can be\nrun on any PC. This is good for preparing for broadcasts ahead of time where the broadcast PC might not have Node.js,\ngit, and a compiler chain installed."))}f.isMDXComponent=!0}}]);