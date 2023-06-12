"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5313],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},6833:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var n=r(7462),a=r(3366),l=(r(7294),r(3905)),o=["components"],i={id:"using-bundlers",title:"Bundlers & Developer Setup",sidebar_label:"Bundlers & Dev Environments"},s=void 0,p={unversionedId:"frameworks/using-bundlers",id:"frameworks/using-bundlers",title:"Bundlers & Developer Setup",description:"Bundlers are one option for serving dev servers & are a wonderful tool for releasing code into production. However, there are now many alternatives that are helpful for speedy local development. Speed comparisons vary depending on what metrics are being used, and like any other framework, there are tradeoffs across any tooling choices.",source:"@site/docs/frameworks/using-bundlers.md",sourceDirName:"frameworks",slug:"/frameworks/using-bundlers",permalink:"/ja/docs/frameworks/using-bundlers",draft:!1,editUrl:"https://github.com/nodecg/docs/edit/master/docs/frameworks/using-bundlers.md",tags:[],version:"current",lastUpdatedBy:"Alex Van Camp",lastUpdatedAt:1686533684,formattedLastUpdatedAt:"2023\u5e746\u670812\u65e5",frontMatter:{id:"using-bundlers",title:"Bundlers & Developer Setup",sidebar_label:"Bundlers & Dev Environments"},sidebar:"mainSidebar",previous:{title:"Manually editing the database",permalink:"/ja/docs/editing-the-database"},next:{title:"TypeScript",permalink:"/ja/docs/frameworks/typescript"}},u={},d=[{value:"Bundlers",id:"bundlers",level:2},{value:"Tutorial: Using Parcel",id:"parcel",level:2},{value:"Directory Structure",id:"parcel-structure",level:3},{value:"Setup",id:"parcel-setup",level:3},{value:"Add parcel to your bundle",id:"parcel-add",level:4},{value:"Locally",id:"parcel-add-local",level:5},{value:"Globally",id:"parcel-add-global",level:5},{value:"Make an entrypoint",id:"parcel-entrypoint",level:4},{value:"Run the command",id:"parcel-run",level:4},{value:"Recommended Configuration",id:"parcel-recommended",level:4},{value:"browserslist",id:"parcel-browserslist",level:5},{value:"Going further",id:"parcel-further",level:4}],c={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{title:"December 2022 Update",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Bundlers are one option for serving dev servers & are a wonderful tool for releasing code into production. However, there are now many alternatives that are helpful for speedy local development. Speed comparisons vary depending on what metrics are being used, and like any other framework, there are tradeoffs across any tooling choices."),(0,l.kt)("p",{parentName:"admonition"},"Vite is currently the leading project for an unbundled development environment. Vite provides a ",(0,l.kt)("a",{parentName:"p",href:"https://vitejs.dev/guide/why.html"},"comparison writeup")," that may be worth checking out when starting a new NodeCG project. The Vue Mastery team also provides a ",(0,l.kt)("a",{parentName:"p",href:"https://www.vuemastery.com/blog/vite-vs-webpack/"},"comparison between Vite and Webpack")," that may be helpful in making your bundling / module choices. "),(0,l.kt)("p",{parentName:"admonition"},"NodeCG usage is currently not limited to any of these options! Make your choice(s) as you will for what you are comfortable with.")),(0,l.kt)("h2",{id:"bundlers"},"Bundlers"),(0,l.kt)("p",null,"Webpack, the most used bundler, has some good documentation for ",(0,l.kt)("a",{parentName:"p",href:"https://webpack.js.org/concepts/why-webpack"},"why to use Webpack"),"."),(0,l.kt)("p",null,"There are several JavaScript bundlers."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/webpack/webpack"},"webpack"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"By far the most used bundler with a lot of community made extensions."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/rollup/rollup"},"rollup"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Primarily used by libraries like React, Vue - utilizes ES Modules for splitting code"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/parcel-bundler/parcel"},"parcel"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Bundler famous for zero-config and super fast building process"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://esbuild.github.io/"},"esbuild"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Extremely fast bundler written in Go, however currently the maintainers state that it is ",(0,l.kt)("a",{parentName:"li",href:"https://esbuild.github.io/faq/#production-readiness"},"unstable for production usage"),". ")))),(0,l.kt)("p",null,"These bundlers allows you to"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"write modular, organised source code"),(0,l.kt)("li",{parentName:"ul"},"treat CSS, images, or any sort of files like JavaScript module"),(0,l.kt)("li",{parentName:"ul"},"use npm packages for front-end (dashboard/graphics)"),(0,l.kt)("li",{parentName:"ul"},"use JSX/TSX, Vue single file component"),(0,l.kt)("li",{parentName:"ul"},"write in other languages like TypeScript"),(0,l.kt)("li",{parentName:"ul"},"and many more")),(0,l.kt)("h2",{id:"parcel"},"Tutorial: Using Parcel"),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"The below tutorial focuses ",(0,l.kt)("strong",{parentName:"p"},"solely")," on bundler tooling with NodeCG and was last updated in ",(0,l.kt)("strong",{parentName:"p"},"November 2020"),"; functionality may be limited due to updates in underlying tools, particularly Parcel. If you run into issues, feel free to put in a pull request.")),(0,l.kt)("h3",{id:"parcel-structure"},"Directory Structure"),(0,l.kt)("p",null,"Basically you will have parcel to output the whole ",(0,l.kt)("inlineCode",{parentName:"p"},"dashboard")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"graphics"),"\ndirectory. Your project would look like this"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-folders"},"foo-layouts\n|- extension\n|- schemas\n|- src\n|- package.json\n")),(0,l.kt)("p",null,"When you run parcel, it will make ",(0,l.kt)("inlineCode",{parentName:"p"},"dashboard")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"graphics")," directory and\noutput bundle result into them."),(0,l.kt)("p",null,"(After running parcel)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-folders"},"foo-layouts\n|- extension\n|- schemas\n|- src\n|- package.json\n|- dashboard (built)\n  |- index.html\n  |- styles.8jx17sx.css\n  |- main.7x2hdjs.js\n|- graphics (built)\n  |- ds1.html\n  |- sd1.html\n  |- styles.03nsh2s.css\n  |- ds1.rssiahs.js\n  |- sd1.4jc71nx.js\n  |- background.d8frsis.png\n")),(0,l.kt)("p",null,"The random string for each generated files are automatically generated to\nrefresh cache when the files change."),(0,l.kt)("h3",{id:"parcel-setup"},"Setup"),(0,l.kt)("p",null,"As I said, parcel is (literally) zero-configuration required. It even installs\nmissing packages for you if there is any."),(0,l.kt)("h4",{id:"parcel-add"},"Add parcel to your bundle"),(0,l.kt)("h5",{id:"parcel-add-local"},"Locally"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev parcel-bundler\n# or\nyarn add -D parcel-bundler\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"parcel")," command will be available locally. You can run it either adding\nnpm scripts, or ",(0,l.kt)("inlineCode",{parentName:"p"},"npx parcel"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"yarn parcel"),"."),(0,l.kt)("h5",{id:"parcel-add-global"},"Globally"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g parcel-bundler\n# or\nyarn global add parcel-bundler\n")),(0,l.kt)("p",null,"With this, ",(0,l.kt)("inlineCode",{parentName:"p"},"parcel")," command should be available globally. Just run ",(0,l.kt)("inlineCode",{parentName:"p"},"parcel")," to\nrun the bundler."),(0,l.kt)("h4",{id:"parcel-entrypoint"},"Make an entrypoint"),(0,l.kt)("p",null,"When building front-end, HTML file is usually used as entrypoint. You can just\nuse your HTML file with your scripts and stylesheets imported."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8" />\n    <link rel="stylesheet" href="./styles.css">\n  </head>\n\n  <body>\n    <div id="tech"></div>\n    \x3c!-- Or a lot of pre-defined elements --\x3e\n    <script src="./index.js"><\/script>\n  </body>\n</html>\n')),(0,l.kt)("p",null,"The entrypoint HTML file will also be compiled in the bundler. So you can have many\nkind of files in the ",(0,l.kt)("inlineCode",{parentName:"p"},"script")," tag. Parcel will automatically detect file format\nand use an appropriate library/compiler to bundle the file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<script src="./main.coffee"><\/script>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<script src="./app.tsx"><\/script>\n')),(0,l.kt)("p",null,"Or the entrypoint doesn't even have to be an HTML file. For example, you can use\n",(0,l.kt)("a",{parentName:"p",href:"https://pugjs.org/api/getting-started.html"},"Pug")," to have common parts of HTML file into one file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-pug"},'doctype html\nhtml\n  head\n    title graphics-ds\n    include lib/common.pug\n  body\n    div(id="ds")\n    script(src="./views/ds.ts")\n')),(0,l.kt)("h4",{id:"parcel-run"},"Run the command"),(0,l.kt)("p",null,"For development, with file change detection and hot-reloading:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"parcel watch src/dashboard/index.html --out-dir dashboard --public-url ./\n")),(0,l.kt)("p",null,"For production build, with optimized output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"parcel build src/dashboard/index.html --out-dir dashboard --public-url ./\n")),(0,l.kt)("p",null,"(Replace ",(0,l.kt)("inlineCode",{parentName:"p"},"src/dashboard/index.html")," with your entrypoint files.)"),(0,l.kt)("p",null,"You can use a glob pattern to use multiple entrypoints, if you have multiple pages\nto compile"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"parcel build src/dashboard/*.html --out-dir dashboard --public-url ./\n")),(0,l.kt)("p",null,"A detailed reference can be found in ",(0,l.kt)("a",{parentName:"p",href:"https://parceljs.org/features/cli"},"the Parcel CLI reference documentation"),"."),(0,l.kt)("h4",{id:"parcel-recommended"},"Recommended Configuration"),(0,l.kt)("p",null,"Even though it already works for most cases (!), a bit of configuration might be\nrecommended/required."),(0,l.kt)("h5",{id:"parcel-browserslist"},"browserslist"),(0,l.kt)("p",null,"Parcel uses ",(0,l.kt)("a",{parentName:"p",href:"https://babeljs.io/"},"babel")," out of box, and the default supported\nbrowsers are ",(0,l.kt)("inlineCode",{parentName:"p"},">0.25%")," which includes old browsers like IE."),(0,l.kt)("p",null,"Considering how NodeCG is used, it's the best to target only modern browsers or\njust Chrome. To do so, add ",(0,l.kt)("inlineCode",{parentName:"p"},"browserslist")," property to ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,l.kt)("p",null,"For example,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  // ...\n  "browserslist": "last 2 chrome versions",\n  "nodecg": //...\n}\n')),(0,l.kt)("p",null,"Refer to ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/browserslist/browserslist#full-list"},"this page")," for\ndetailed ",(0,l.kt)("inlineCode",{parentName:"p"},"browserslist")," syntax."),(0,l.kt)("h4",{id:"parcel-further"},"Going further"),(0,l.kt)("p",null,"Due to the huge amount of features parcel offers out of box, at this point you\nalready have a lot more options for your front-end development. For example:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"React development with JSX/TSX"),(0,l.kt)("li",{parentName:"ul"},"Vue single file component"),(0,l.kt)("li",{parentName:"ul"},"TypeScript or other alternative languages")),(0,l.kt)("p",null,"Also, if your project becomes too advanced for parcel to handle, you can switch\nto webpack - there are tools that can do this configuration conversion, to either Webpack or other tools like Vite, WMR, or Turbopack."))}m.isMDXComponent=!0}}]);