"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[71],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,g=u["".concat(c,".").concat(m)]||u[m]||p[m]||l;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2657:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={id:"installing",title:"Installing NodeCG",sidebar_label:"Installing"},c=void 0,s={unversionedId:"installing",id:"installing",title:"Installing NodeCG",description:"Install",source:"@site/docs/installing.md",sourceDirName:".",slug:"/installing",permalink:"/docs/installing",draft:!1,editUrl:"https://github.com/nodecg/docs/edit/master/docs/installing.md",tags:[],version:"current",lastUpdatedBy:"Alex Van Camp",lastUpdatedAt:1668037147,formattedLastUpdatedAt:"Nov 9, 2022",frontMatter:{id:"installing",title:"Installing NodeCG",sidebar_label:"Installing"},sidebar:"mainSidebar",previous:{title:"NodeCG",permalink:"/docs/what-is-nodecg"},next:{title:"Creating Bundles",permalink:"/docs/creating-bundles"}},d={},p=[{value:"Install",id:"install",level:2},{value:"Start",id:"start",level:2},{value:"Installing bundles",id:"installing-bundles",level:2},{value:"GitHub",id:"github",level:3},{value:"BitBucket",id:"bitbucket",level:3},{value:"Other Providers",id:"other-providers",level:3}],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"install"},"Install"),(0,l.kt)("p",null,"There are two methods to install NodeCG: cloning from GitHub or using the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/nodecg/nodecg-cli"},"nodecg-cli"),"."),(0,l.kt)("p",null,"Install ",(0,l.kt)("a",{parentName:"p",href:"http://nodejs.org/"},"Node.js (version 8.3 or greater) & npm (version 2 or greater)"),".  "),(0,l.kt)("p",null,"Using ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/nodecg/nodecg-cli"},"nodecg-cli"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --global nodecg-cli\nmkdir nodecg\ncd nodecg\nnodecg setup\n")),(0,l.kt)("p",null,"Cloning from GitHub:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone --depth 1 --branch legacy-1.x https://github.com/nodecg/nodecg.git\ncd nodecg\nnpm install --production\n")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Ensure to specify a branch when cloning, as the master branch is in an unstable state while v2.0 is being developed.")),(0,l.kt)("h2",{id:"start"},"Start"),(0,l.kt)("p",null,"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"node index.js")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"nodecg start")," in the root nodecg folder."),(0,l.kt)("p",null,"Open the dashboard (",(0,l.kt)("inlineCode",{parentName:"p"},"http://localhost:9090")," by default)."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"When running NodeCG in production, ",(0,l.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker")," or ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Unitech/pm2"},"pm2")," are recommended.")),(0,l.kt)("h2",{id:"installing-bundles"},"Installing bundles"),(0,l.kt)("p",null,"NodeCG's individual graphics packages are called ",(0,l.kt)("em",{parentName:"p"},"bundles"),". They can be installed either from the command-line\n(via ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/nodecg-cli"},(0,l.kt)("em",{parentName:"a"},"nodecg-cli")),"), or by simply placing the folder into the ",(0,l.kt)("inlineCode",{parentName:"p"},"./bundles")," directory."),(0,l.kt)("p",null,"The easiest way to install bundles is via the command-line using ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/nodecg-cli"},"nodecg-cli"),".\nYou will need to install ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/nodecg-cli"},"nodecg-cli")," before you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"nodecg"),"\nterminal commands."),(0,l.kt)("h3",{id:"github"},"GitHub"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"nodecg install lange/lange-notify\n")),(0,l.kt)("h3",{id:"bitbucket"},"BitBucket"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"nodecg install bitbucket:username/repo-name\n")),(0,l.kt)("h3",{id:"other-providers"},"Other Providers"),(0,l.kt)("p",null,"Enter the git URL."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"nodecg install https://gitlab.com/username/repo-name.git\n")),(0,l.kt)("p",null,"Bundles are just directories inside the ",(0,l.kt)("inlineCode",{parentName:"p"},"./bundles")," folder.\nThey can always be added and removed by simply moving them into or out of that folder.\nAvoid installing or uninstalling bundles while NodeCG is running."))}m.isMDXComponent=!0}}]);