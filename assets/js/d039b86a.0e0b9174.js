"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5313],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6833:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return d}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={id:"using-bundlers",title:"Using Bundlers",sidebar_label:"Bundlers"},s=void 0,u={unversionedId:"frameworks/using-bundlers",id:"frameworks/using-bundlers",title:"Using Bundlers",description:"If you don't know why you should use bundlers, read up",source:"@site/docs/frameworks/using-bundlers.md",sourceDirName:"frameworks",slug:"/frameworks/using-bundlers",permalink:"/docs/frameworks/using-bundlers",draft:!1,editUrl:"https://github.com/nodecg/docs/edit/master/docs/frameworks/using-bundlers.md",tags:[],version:"current",lastUpdatedBy:"Alex Van Camp",lastUpdatedAt:1668037147,formattedLastUpdatedAt:"Nov 9, 2022",frontMatter:{id:"using-bundlers",title:"Using Bundlers",sidebar_label:"Bundlers"},sidebar:"mainSidebar",previous:{title:"Docker",permalink:"/docs/docker"},next:{title:"TypeScript",permalink:"/docs/frameworks/typescript"}},p={},d=[{value:"Directory Structure",id:"directory-structure",level:2},{value:"Setup",id:"setup",level:2},{value:"Add parcel to your bundle",id:"add-parcel-to-your-bundle",level:3},{value:"Locally",id:"locally",level:4},{value:"Globally",id:"globally",level:4},{value:"Make an entrypoint",id:"make-an-entrypoint",level:3},{value:"Run the command",id:"run-the-command",level:3},{value:"Recommended Configuration",id:"recommended-configuration",level:3},{value:"browserslist",id:"browserslist",level:4},{value:"Going further",id:"going-further",level:3}],c={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"If you don't know why you should use bundlers, read up\n",(0,l.kt)("a",{parentName:"p",href:"https://webpack.js.org/concepts/why-webpack/"},"Why webpack"),"."),(0,l.kt)("p",null,"There are currently three JavaScript bundlers."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/webpack/webpack"},"webpack"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"By far the most used bundler with a lot of community made extensions"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/rollup/rollup"},"rollup"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Primarily used by libraries like React, Vue"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/parcel-bundler/parcel"},"parcel"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"New bundler famous for zero-config, and super fast building process")))),(0,l.kt)("p",null,"These bundlers allows you to"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"write modular, organised source code"),(0,l.kt)("li",{parentName:"ul"},"treat CSS, images, or any sort of files like JavaScript module"),(0,l.kt)("li",{parentName:"ul"},"use npm packages for front-end (dashboard/graphics)"),(0,l.kt)("li",{parentName:"ul"},"use JSX/TSX, Vue single file component"),(0,l.kt)("li",{parentName:"ul"},"write in other languages like TypeScript"),(0,l.kt)("li",{parentName:"ul"},"and many more")),(0,l.kt)("p",null,"This tutorial goes through the setup using parcel."),(0,l.kt)("h2",{id:"directory-structure"},"Directory Structure"),(0,l.kt)("p",null,"Basically you will have parcel to output the whole ",(0,l.kt)("inlineCode",{parentName:"p"},"dashboard")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"graphics"),"\ndirectory. Your project would look like this"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-folders"},"foo-layouts\n|- extension\n|- schemas\n|- src\n|- package.json\n")),(0,l.kt)("p",null,"When you run parcel, it will make ",(0,l.kt)("inlineCode",{parentName:"p"},"dashboard")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"graphics")," directory and\noutput bundle result into them."),(0,l.kt)("p",null,"(After running parcel)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-folders"},"foo-layouts\n|- extension\n|- schemas\n|- src\n|- package.json\n|- dashboard (built)\n  |- index.html\n  |- styles.8jx17sx.css\n  |- main.7x2hdjs.js\n|- graphics (built)\n  |- ds1.html\n  |- sd1.html\n  |- styles.03nsh2s.css\n  |- ds1.rssiahs.js\n  |- sd1.4jc71nx.js\n  |- background.d8frsis.png\n")),(0,l.kt)("p",null,"The random string for each generated files are automatically generated to\nrefresh cache when the files change."),(0,l.kt)("h2",{id:"setup"},"Setup"),(0,l.kt)("p",null,"As I said, parcel is (literally) zero-configuration required. It even installs\nmissing packages for you if there is any."),(0,l.kt)("h3",{id:"add-parcel-to-your-bundle"},"Add parcel to your bundle"),(0,l.kt)("h4",{id:"locally"},"Locally"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save-dev parcel-bundler\n# or\nyarn add -D parcel-bundler\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"parcel")," command will be available locally. You can run it either adding\nnpm scripts, or ",(0,l.kt)("inlineCode",{parentName:"p"},"npx parcel"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"yarn parcel"),"."),(0,l.kt)("h4",{id:"globally"},"Globally"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g parcel-bundler\n# or\nyarn global add parcel-bundler\n")),(0,l.kt)("p",null,"With this, ",(0,l.kt)("inlineCode",{parentName:"p"},"parcel")," command should be available globally. Just run ",(0,l.kt)("inlineCode",{parentName:"p"},"parcel")," to\nrun the bundler."),(0,l.kt)("h3",{id:"make-an-entrypoint"},"Make an entrypoint"),(0,l.kt)("p",null,"When building front-end, HTML file is usually used as entrypoint. You can just\nuse your HTML file with your scripts and stylesheets imported."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8" />\n    <link rel="stylesheet" href="./styles.css">\n  </head>\n\n  <body>\n    <div id="tech"></div>\n    \x3c!-- Or a lot of pre-defined elements --\x3e\n    <script src="./index.js"><\/script>\n  </body>\n</html>\n')),(0,l.kt)("p",null,"The entrypoint HTML file will also be compiled in the bundler. So you can have many\nkind of files in the ",(0,l.kt)("inlineCode",{parentName:"p"},"script")," tag. Parcel will automatically detect file format\nand use an appropriate library/compiler to bundle the file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<script src="./main.coffee"><\/script>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<script src="./app.tsx"><\/script>\n')),(0,l.kt)("p",null,"Or the entrypoint doesn't even have to be an HTML file. For example, you can use\n",(0,l.kt)("a",{parentName:"p",href:"https://pugjs.org/api/getting-started.html"},"Pug")," to have common parts of HTML file into one file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-pug"},'doctype html\nhtml\n  head\n    title graphics-ds\n    include lib/common.pug\n  body\n    div(id="ds")\n    script(src="./views/ds.ts")\n')),(0,l.kt)("h3",{id:"run-the-command"},"Run the command"),(0,l.kt)("p",null,"For development, with file change detection and hot-reloading:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"parcel watch src/dashboard/index.html --out-dir dashboard --public-url ./\n")),(0,l.kt)("p",null,"For production build, with optimized output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"parcel build src/dashboard/index.html --out-dir dashboard --public-url ./\n")),(0,l.kt)("p",null,"(Replace ",(0,l.kt)("inlineCode",{parentName:"p"},"src/dashboard/index.html")," with your entrypoint files.)"),(0,l.kt)("p",null,"You can use a glob pattern to use multiple entrypoints, if you have multiple pages\nto compile"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"parcel build src/dashboard/*.html --out-dir dashboard --public-url ./\n")),(0,l.kt)("p",null,"Details described in ",(0,l.kt)("a",{parentName:"p",href:"https://parceljs.org/cli.html"},"the reference"),"."),(0,l.kt)("h3",{id:"recommended-configuration"},"Recommended Configuration"),(0,l.kt)("p",null,"Even though it already works for most cases (!), a bit of configuration might be\nrecommended/required."),(0,l.kt)("h4",{id:"browserslist"},"browserslist"),(0,l.kt)("p",null,"Parcel uses ",(0,l.kt)("a",{parentName:"p",href:"https://babeljs.io/"},"babel")," out of box, and the default supported\nbrowsers are ",(0,l.kt)("inlineCode",{parentName:"p"},">0.25%")," which includes old browsers like IE."),(0,l.kt)("p",null,"Considering how NodeCG is used, it's the best to target only modern browsers or\njust Chrome. To do so, add ",(0,l.kt)("inlineCode",{parentName:"p"},"browserslist")," property to ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,l.kt)("p",null,"For example,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  // ...\n  "browserslist": "last 2 chrome versions",\n  "nodecg": //...\n}\n')),(0,l.kt)("p",null,"Refer to ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/browserslist/browserslist#full-list"},"this page")," for\ndetailed ",(0,l.kt)("inlineCode",{parentName:"p"},"browserslist")," syntax."),(0,l.kt)("h3",{id:"going-further"},"Going further"),(0,l.kt)("p",null,"Due to the huge amount of features parcel offers out of box, at this point you\nalready have a lot more options for your front-end development. For example:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"React development with JSX/TSX"),(0,l.kt)("li",{parentName:"ul"},"Vue single file component"),(0,l.kt)("li",{parentName:"ul"},"TypeScript or other alternative languages")),(0,l.kt)("p",null,"Also, if your project becomes too advanced for parcel to handle, you can switch\nto webpack. It produces a bit more optimized code, and has a lot more features\nsupported."))}m.isMDXComponent=!0}}]);