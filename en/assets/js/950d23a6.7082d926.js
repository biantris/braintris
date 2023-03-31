"use strict";(self.webpackChunkbraintris=self.webpackChunkbraintris||[]).push([[7261],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),l=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),u=n,b=m["".concat(i,".").concat(u)]||m[u]||f[u]||o;return r?a.createElement(b,c(c({ref:t},p),{},{components:r})):a.createElement(b,c({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var l=2;l<o;l++)c[l]=r[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3432:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>f});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),c=["components"],s={id:"peformance-react",title:"Peformance in React",tags:["peformance","react","javascript","content","notes","en"],slug:"performance-react",group:"/"},i=void 0,l={unversionedId:"peformance-react",id:"peformance-react",title:"Peformance in React",description:"- lifecycle of reactive effects//beta.reactjs.org/learn/lifecycle-of-reactive-effects",source:"@site/docs/performance-react.md",sourceDirName:".",slug:"/performance-react",permalink:"/braintris/en/docs/performance-react",draft:!1,tags:[{label:"peformance",permalink:"/braintris/en/docs/tags/peformance"},{label:"react",permalink:"/braintris/en/docs/tags/react"},{label:"javascript",permalink:"/braintris/en/docs/tags/javascript"},{label:"content",permalink:"/braintris/en/docs/tags/content"},{label:"notes",permalink:"/braintris/en/docs/tags/notes"},{label:"en",permalink:"/braintris/en/docs/tags/en"}],version:"current",frontMatter:{id:"peformance-react",title:"Peformance in React",tags:["peformance","react","javascript","content","notes","en"],slug:"performance-react",group:"/"},sidebar:"tutorialSidebar",previous:{title:"Objetos Mock",permalink:"/braintris/en/docs/objetos-mock"},next:{title:"Podcasts",permalink:"/braintris/en/docs/podcasts"}},p={},f=[],m={toc:f};function u(e){var t=e.components,r=(0,n.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"lifecycle of reactive effects: ",(0,o.kt)("a",{parentName:"li",href:"https://beta.reactjs.org/learn/lifecycle-of-reactive-effects"},"https://beta.reactjs.org/learn/lifecycle-of-reactive-effects")),(0,o.kt)("li",{parentName:"ul"},"if has many rerenders -> this is certainly because effect or state hooks are being used incorrectly or unnecessarily"),(0,o.kt)("li",{parentName:"ul"},"use react context fast : ",(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=ZKlXqrcBx88&t=656s&ab_channel=JackHerrington"},"https://www.youtube.com/watch?v=ZKlXqrcBx88&t=656s&ab_channel=JackHerrington")),(0,o.kt)("li",{parentName:"ul"},"use memoization with react memo : ",(0,o.kt)("a",{parentName:"li",href:"https://beta.reactjs.org/apis/react/useMemo"},"https://beta.reactjs.org/apis/react/useMemo")),(0,o.kt)("li",{parentName:"ul"},"use react ref : ",(0,o.kt)("a",{parentName:"li",href:"https://beta.reactjs.org/apis/react/useRef"},"https://beta.reactjs.org/apis/react/useRef")," / ",(0,o.kt)("a",{parentName:"li",href:"https://beta.reactjs.org/learn/manipulating-the-dom-with-refs"},"https://beta.reactjs.org/learn/manipulating-the-dom-with-refs")),(0,o.kt)("li",{parentName:"ul"},"share state between components : ",(0,o.kt)("a",{parentName:"li",href:"https://beta.reactjs.org/learn/sharing-state-between-components"},"https://beta.reactjs.org/learn/sharing-state-between-components")),(0,o.kt)("li",{parentName:"ul"},"passing Data Deeply with Context: ",(0,o.kt)("a",{parentName:"li",href:"https://beta.reactjs.org/learn/passing-data-deeply-with-context"},"https://beta.reactjs.org/learn/passing-data-deeply-with-context")),(0,o.kt)("li",{parentName:"ul"},"use less ifs to conditional rendering: ",(0,o.kt)("a",{parentName:"li",href:"https://beta.reactjs.org/learn#conditional-rendering"},"https://beta.reactjs.org/learn#conditional-rendering"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"the principal"),": ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-rules.html"},"https://reactjs.org/docs/hooks-rules.html")),(0,o.kt)("p",null,"questions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://twitter.com/biantris_/status/1597900536296374274"},"https://twitter.com/biantris_/status/1597900536296374274")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://twitter.com/biantris_/status/1597900901590585346"},"https://twitter.com/biantris_/status/1597900901590585346"))))}u.isMDXComponent=!0}}]);