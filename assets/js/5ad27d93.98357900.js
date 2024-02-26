"use strict";(self.webpackChunkbraintris=self.webpackChunkbraintris||[]).push([[9883],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),i=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=i(r),b=n,d=u["".concat(l,".").concat(b)]||u[b]||m[b]||o;return r?a.createElement(d,c(c({ref:t},p),{},{components:r})):a.createElement(d,c({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var i=2;i<o;i++)c[i]=r[i];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7165:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>b,frontMatter:()=>s,metadata:()=>i,toc:()=>m});var a=r(7462),n=r(3366),o=(r(7294),r(4137)),c=["components"],s={id:"scope-block-statement",title:"Scope, Block Statement",tags:["scope-block-statement","javascript","content","notes","pt-BR"],slug:"scope-block-statement",group:"javascript/"},l=void 0,i={unversionedId:"javascript/scope-block-statement",id:"javascript/scope-block-statement",title:"Scope, Block Statement",description:"Scope: Escopo determina a visibilidade de alguma vari\xe1vel no javaScript",source:"@site/docs/javascript/scope-block-statement.md",sourceDirName:"javascript",slug:"/javascript/scope-block-statement",permalink:"/braintris/docs/javascript/scope-block-statement",draft:!1,tags:[{label:"scope-block-statement",permalink:"/braintris/docs/tags/scope-block-statement"},{label:"javascript",permalink:"/braintris/docs/tags/javascript"},{label:"content",permalink:"/braintris/docs/tags/content"},{label:"notes",permalink:"/braintris/docs/tags/notes"},{label:"pt-BR",permalink:"/braintris/docs/tags/pt-br"}],version:"current",lastUpdatedBy:"biantris",lastUpdatedAt:1708962283,formattedLastUpdatedAt:"26 de fev. de 2024",frontMatter:{id:"scope-block-statement",title:"Scope, Block Statement",tags:["scope-block-statement","javascript","content","notes","pt-BR"],slug:"scope-block-statement",group:"javascript/"},sidebar:"tutorialSidebar",previous:{title:"Fun\xe7\xf5es p\xfablicas x privadas em JavaScript",permalink:"/braintris/docs/javascript/public-vs-private-functions-js"},next:{title:"setTimeout",permalink:"/braintris/docs/javascript/set-timeout"}},p={},m=[],u={toc:m};function b(e){var t=e.components,r=(0,n.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Scope"),": Escopo determina a visibilidade de alguma vari\xe1vel no javaScript"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Block Statement:")," Declara\xe7\xe3o de bloco"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// vamos iniciar um bloco\n{\n    // aqui dentro \xe9 um bloco e posso colocar qualquer c\xf3digo\n} // aqui fechamos o bloco\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"O bloco tamb\xe9m criar\xe1 um novo ",(0,o.kt)("strong",{parentName:"li"},"escopo")," . Chamamos de ",(0,o.kt)("strong",{parentName:"li"},"block scoped"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"var:")," var \xe9 global e poder\xe1 funcionar fora de um escopo de bloco"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"var \xe9 global e tamb\xe9m local"),(0,o.kt)("li",{parentName:"ul"},"hoisting")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Scope let e const:")," const e let s\xe3o locais e s\xf3 funcionam no escopo onde foi criado"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{ \n    let y = 0; // escopo local ( dentro das chaves )\n    console.log(y)\n}\n")))}b.isMDXComponent=!0}}]);