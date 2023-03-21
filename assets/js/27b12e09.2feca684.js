"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[71],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,g=u["".concat(c,".").concat(m)]||u[m]||p[m]||l;return t?r.createElement(g,i(i({ref:n},d),{},{components:t})):r.createElement(g,i({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=u;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2657:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var r=t(7462),a=t(3366),l=(t(7294),t(3905)),i=["components"],o={id:"installing",title:"Installing NodeCG",sidebar_label:"Installing"},c=void 0,s={unversionedId:"installing",id:"installing",title:"Installing NodeCG",description:"Install",source:"@site/docs/installing.md",sourceDirName:".",slug:"/installing",permalink:"/docs/installing",draft:!1,editUrl:"https://github.com/nodecg/docs/edit/master/docs/installing.md",tags:[],version:"current",lastUpdatedBy:"Alex Van Camp",lastUpdatedAt:1679423521,formattedLastUpdatedAt:"Mar 21, 2023",frontMatter:{id:"installing",title:"Installing NodeCG",sidebar_label:"Installing"},sidebar:"mainSidebar",previous:{title:"NodeCG",permalink:"/docs/what-is-nodecg"},next:{title:"Creating Bundles",permalink:"/docs/creating-bundles"}},d={},p=[{value:"Install",id:"install",level:2},{value:"Start",id:"start",level:2},{value:"Installing bundles",id:"installing-bundles",level:2},{value:"GitHub",id:"github",level:3},{value:"BitBucket",id:"bitbucket",level:3},{value:"Other Providers",id:"other-providers",level:3}],u={toc:p};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"install"},"Install"),(0,l.kt)("p",null,"There are two methods to install NodeCG: cloning from GitHub or using the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/nodecg/nodecg-cli"},"nodecg-cli"),"."),(0,l.kt)("p",null,"Install ",(0,l.kt)("a",{parentName:"p",href:"http://nodejs.org/"},"Node.js (version 18)"),".  "),(0,l.kt)("p",null,"Using ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/nodecg/nodecg-cli"},"nodecg-cli"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --global nodecg-cli\nmkdir nodecg\ncd nodecg\nnodecg setup\n")),(0,l.kt)("p",null,"Cloning from GitHub:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Be sure to clone a specific release's tag name.\ngit clone --depth 1 --branch v2.0.0 https://github.com/nodecg/nodecg.git\ncd nodecg\nnpm install\nnpm run build\n")),(0,l.kt)("h2",{id:"start"},"Start"),(0,l.kt)("p",null,"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"node index.js")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"nodecg start")," in the root nodecg folder."),(0,l.kt)("p",null,"Open the dashboard (",(0,l.kt)("inlineCode",{parentName:"p"},"http://localhost:9090")," by default)."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"When running NodeCG in production, ",(0,l.kt)("a",{parentName:"p",href:"docker"},"Docker")," or ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Unitech/pm2"},"pm2")," are recommended.")),(0,l.kt)("h2",{id:"installing-bundles"},"Installing bundles"),(0,l.kt)("p",null,"NodeCG's individual graphics packages are called ",(0,l.kt)("em",{parentName:"p"},"bundles"),". They can be installed either from the command-line\n(via ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/nodecg-cli"},(0,l.kt)("em",{parentName:"a"},"nodecg-cli")),"), or by simply placing the folder into the ",(0,l.kt)("inlineCode",{parentName:"p"},"./bundles")," directory."),(0,l.kt)("p",null,"The easiest way to install bundles is via the command-line using ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/nodecg-cli"},"nodecg-cli"),".\nYou will need to install ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/nodecg-cli"},"nodecg-cli")," before you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"nodecg"),"\nterminal commands."),(0,l.kt)("h3",{id:"github"},"GitHub"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"nodecg install lange/lange-notify\n")),(0,l.kt)("h3",{id:"bitbucket"},"BitBucket"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"nodecg install bitbucket:username/repo-name\n")),(0,l.kt)("h3",{id:"other-providers"},"Other Providers"),(0,l.kt)("p",null,"Enter the git URL."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"nodecg install https://gitlab.com/username/repo-name.git\n")),(0,l.kt)("p",null,"Bundles are just directories inside the ",(0,l.kt)("inlineCode",{parentName:"p"},"./bundles")," folder.\nThey can always be added and removed by simply moving them into or out of that folder.\nAvoid installing or uninstalling bundles while NodeCG is running."))}m.isMDXComponent=!0}}]);