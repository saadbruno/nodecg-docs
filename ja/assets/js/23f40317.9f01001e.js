"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4401],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=d(n),c=r,h=m["".concat(s,".").concat(c)]||m[c]||p[c]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4936:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"migrating-0.8-to-0.9",title:"Migrating from 0.8 to 0.9",sidebar_label:"0.8 \u2192 0.9"},s=void 0,d={unversionedId:"migrating/migrating-0.8-to-0.9",id:"migrating/migrating-0.8-to-0.9",title:"Migrating from 0.8 to 0.9",description:"Breaking Changes",source:"@site/docs/migrating/migrating-0.8-to-0.9.md",sourceDirName:"migrating",slug:"/migrating/migrating-0.8-to-0.9",permalink:"/ja/docs/migrating/migrating-0.8-to-0.9",draft:!1,editUrl:"https://github.com/nodecg/docs/edit/master/docs/migrating/migrating-0.8-to-0.9.md",tags:[],version:"current",lastUpdatedBy:"Alex Van Camp",lastUpdatedAt:1686533684,formattedLastUpdatedAt:"2023\u5e746\u670812\u65e5",frontMatter:{id:"migrating-0.8-to-0.9",title:"Migrating from 0.8 to 0.9",sidebar_label:"0.8 \u2192 0.9"},sidebar:"mainSidebar",previous:{title:"0.7 \u2192 0.8",permalink:"/ja/docs/migrating/migrating-0.7-to-0.8"},next:{title:"0.9 \u2192 1.0",permalink:"/ja/docs/migrating/migrating-0.9-to-1.0"}},u={},p=[{value:"Breaking Changes",id:"breaking-changes",level:2},{value:"Routing Changes",id:"routing-changes",level:3},{value:"Removed Default Styles",id:"removed-default-styles",level:3},{value:"sendMessage acknowledgement Errors",id:"sendmessage-acknowledgement-errors",level:3},{value:"No Auto-Installation of Dependencies",id:"no-auto-installation-of-dependencies",level:3},{value:"Removed Rollbar integration, replaced it with Sentry",id:"removed-rollbar-integration-replaced-it-with-sentry",level:3}],m={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"breaking-changes"},"Breaking Changes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#breaking-changes"},"Breaking Changes"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#routing-changes"},"Routing Changes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#removed-default-styles"},"Removed Default Styles")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#sendmessage-acknowledgement-errors"},"sendMessage acknowledgement Errors")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#no-auto-installation-of-dependencies"},"No Auto-Installation of Dependencies")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#removed-rollbar-integration-replaced-it-with-sentry"},"Removed Rollbar integration, replaced it with Sentry"))))),(0,o.kt)("h3",{id:"routing-changes"},"Routing Changes"),(0,o.kt)("p",null,"NodeCG's routing has always been a little arbitrary and confusing. It did not match the structure of the filesystem, and there wasn't really a good reason for this. This arbitrary routing structure was hard to remember and prevented bundle authors from taking advantage of their IDE's autocomplete functionality. It also made using filesystem-aware tools like the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Polymer/polymer-bundler"},(0,o.kt)("inlineCode",{parentName:"a"},"polymer-bundler"))," (formerly called ",(0,o.kt)("inlineCode",{parentName:"p"},"vulcanize"),") needlessly difficult."),(0,o.kt)("p",null,"The new routing structure matches the structure of the filesystem, making routes easier to work with and avoiding certain bugs relating to the de-duplication of HTML Imports (and soon, ES Modules)."),(0,o.kt)("p",null,"Old (don't use these anymore!):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"/panels/my-bundle/panel.html\n/graphics/my-bundle/graphic.html\n\n# Two different routes to the same file! This breaks the de-duplication of HTML Imports and causes errors.\n/panels/my-bundle/components/polymer/polymer.html\n/graphics/my-bundle/components/polymer/polymer.html\n")),(0,o.kt)("p",null,"New:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"/bundles/my-bundle/dashboard/panel.html\n/bundles/my-bundle/graphics/graphic.html\n\n# Now, there is only one single route to any given file.\n/bundles/my-bundle/bower_components/polymer/polymer.html\n")),(0,o.kt)("h3",{id:"removed-default-styles"},"Removed Default Styles"),(0,o.kt)("p",null,"Up until now, NodeCG has injected some default styles and helper classes into each and every panel. The idea was to provide a set of base styles that every bundle author could use to try to create a cohesive NodeCG panel design across all bundles."),(0,o.kt)("p",null,"However, this set of styles was far too small and limited to achieve that, and upon further reflection we decided that NodeCG core was not the place to attempt to accomplish this. Additionally, it's possible for these injected styles to cause frustrating conflicts."),(0,o.kt)("p",null,"NodeCG ",(0,o.kt)("em",{parentName:"p"},"does")," still inject a few default styles, but the number of styles has been dramatically reduced to just a few necessary things, such as the background color for panels. And, as always, this value can be easily overridden in your panel's CSS."),(0,o.kt)("p",null,"If your panels relied on any of these default styles or helper classes such as ",(0,o.kt)("inlineCode",{parentName:"p"},"nodecg-configure"),", you will need to manually specify new styles instead."),(0,o.kt)("h3",{id:"sendmessage-acknowledgement-errors"},"sendMessage acknowledgement Errors"),(0,o.kt)("p",null,"In the past, if you tried to reply to a ",(0,o.kt)("inlineCode",{parentName:"p"},"sendMessage")," with an ",(0,o.kt)("inlineCode",{parentName:"p"},"Error"),", you'd end up with just an empty Object at the other end (",(0,o.kt)("inlineCode",{parentName:"p"},"{}"),"). This is because by default, JavaScript ",(0,o.kt)("inlineCode",{parentName:"p"},"Error"),"s are serialized as an empty Object by ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON.stringify"),"."),(0,o.kt)("p",null,"Now, if the first argument to a ",(0,o.kt)("a",{parentName:"p",href:"/docs/classes/sendMessage"},(0,o.kt)("inlineCode",{parentName:"a"},"sendMessage"))," acknowledgement is an error, it will be properly serialized and sent across the wire. As part of this, we are now strongly encouraging that all ",(0,o.kt)("a",{parentName:"p",href:"/docs/classes/sendMessage"},(0,o.kt)("inlineCode",{parentName:"a"},"sendMessage"))," acknowledgements always be treated as standard error-first Node.js-style callbacks."),(0,o.kt)("p",null,"In addition, client-side ",(0,o.kt)("a",{parentName:"p",href:"/docs/classes/sendMessage"},(0,o.kt)("inlineCode",{parentName:"a"},"sendMessage"))," now also returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),", so that you may use ",(0,o.kt)("inlineCode",{parentName:"p"},".then"),"/",(0,o.kt)("inlineCode",{parentName:"p"},".catch")," instead of a callback function. See the updated ",(0,o.kt)("a",{parentName:"p",href:"/docs/classes/sendMessage"},(0,o.kt)("inlineCode",{parentName:"a"},"sendMessage"))," documentation for more information."),(0,o.kt)("p",null,"Please note that if you do not specify a callback to your ",(0,o.kt)("inlineCode",{parentName:"p"},"sendMessage"),", then it will always return a Promise. Additionally, the first argument sent back in your acknowledgement is always assumed to be either an ",(0,o.kt)("inlineCode",{parentName:"p"},"Error")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),". If this value is truthy, then it will be used to ",(0,o.kt)("inlineCode",{parentName:"p"},"reject")," the Promise. For this reason, it is strongly encouraged that all ",(0,o.kt)("inlineCode",{parentName:"p"},"sendMessage")," acknowledgements strictly adhere to the error-first style of callbacks."),(0,o.kt)("h3",{id:"no-auto-installation-of-dependencies"},"No Auto-Installation of Dependencies"),(0,o.kt)("p",null,"Since the earliest versions of NodeCG, it has attempted to be helpful by automatically running both ",(0,o.kt)("inlineCode",{parentName:"p"},"npm install --production")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"bower install")," on every installed bundle, every time you started up NodeCG. While some users may have found this helpful, over time we've come to realize that this was a misguided decision, and that installation of each bundle's dependencies should really be left to the user."),(0,o.kt)("p",null,"The main rationale for the removal of this feature is that there's a lot more package managers out there than just ",(0,o.kt)("inlineCode",{parentName:"p"},"npm")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"bower"),", and it's not reasonable for NodeCG to know about every single one of them and to be able to properly invoke them. The auto-dependency installation system made a lot of assumptions, and it's going to become more and more frequent that these assumptions just aren't valid. For example, if a bundle doesn't have a ",(0,o.kt)("inlineCode",{parentName:"p"},"bower.json"),", then running ",(0,o.kt)("inlineCode",{parentName:"p"},"bower install")," on it would actually have unintended side-effects. This is just one example that is easy to fix on its own, but there are many such examples of odd side-effects and unintended consequences of this automatic installation behavior. Together, they paint a clear picture that this feature was misguided, and should be removed."),(0,o.kt)("p",null,"Going forward, users will always need to manually run whatever dependency installation steps are required by the bundle in question. For most bundles, this still means just running ",(0,o.kt)("inlineCode",{parentName:"p"},"npm install --production && bower install"),", but this will not always be the case. Each bundle will need to add their dependency installation steps to their READMEs, and make sure that users are educated in the fact that pulling down new updates to a bundle means that they may need to also install updated dependencies."),(0,o.kt)("h3",{id:"removed-rollbar-integration-replaced-it-with-sentry"},"Removed Rollbar integration, replaced it with Sentry"),(0,o.kt)("p",null,"In NodeCG v0.8, we introduced a first-class integration with the Rollbar error tracking service. This was very helpful and made NodeCG safer to use in production, but we were unhappy with the level of service and features that Rollbar provided. In NodeCG v0.9, we have removed the Rollbar integration and replaced it with a Sentry integration. See the ",(0,o.kt)("a",{parentName:"p",href:"/docs/sentry"},"Sentry tutorial")," for more info on how to set up Sentry in your NodeCG deployment."))}c.isMDXComponent=!0}}]);