(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9984],{53052:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/tailwindcss-1-6",function(){return c(22)}])},22:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSG":function(){return o},"default":function(){return p}}),c(67294);var d=c(3905);c(41664);var e,f=c(59533),g=c(5679),h=c(85225),i=c(37831),j=c(47190),k={title:"Tailwind CSS v1.6.0",description:"Tailwind CSS v1.6.0 is now available, with animations and more!",date:"2020-07-28T16:58:33.714Z",authors:[i.Oq],image:j.Z},l=(e="Footer",function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,d.kt)("div",Object.assign({},a))}),m={meta:k,slug:"tailwindcss-1-6",tableOfContents:[{title:"New Features",slug:"new-features",children:[{title:"Animation support",slug:"animation-support",children:[]},{title:"New  variants",slug:"new-variants",children:[]},{title:"New  utilities",slug:"new-utilities",children:[]},{title:"Generate your CSS without an input file",slug:"generate-your-css-without-an-input-file",children:[]}]}]},n=h.B,o=!0;function p(a){var b=a.components,c=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["components"]);return(0,d.kt)(n,Object.assign({},m,c,{components:b,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"It’s like Tailwind CSS v1.5 except now there’s animation support, overscroll utilities, and more!"),(0,d.kt)("p",null,"There aren’t supposed to be any breaking changes here, but I thought that ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://github.com/tailwindlabs/tailwindcss/releases/tag/v1.5.0"}),"last time")," too. If I ",(0,d.kt)("em",{parentName:"p"},"did")," break something, first person to report it gets a Tailwind shirt."),(0,d.kt)(g.X,{level:2,id:"new-features",nextElement:{type:"heading",depth:3}},"New Features"),(0,d.kt)(g.X,{level:3,id:"animation-support",nextElement:{type:"paragraph"}},"Animation support"),(0,d.kt)("p",null,"Tailwind CSS v1.6 adds a brand new ",(0,d.kt)("inlineCode",{parentName:"p"},"animation")," core plugin, with 4 general purpose animations included out of the box:"),(0,d.kt)("ul",Object.assign({},{role:"list"}),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("inlineCode",{parentName:"li"},"animate-spin")),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("inlineCode",{parentName:"li"},"animate-ping")),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("inlineCode",{parentName:"li"},"animate-pulse")),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("inlineCode",{parentName:"li"},"animate-bounce"))),(0,d.kt)("pre",Object.assign({},{className:"language-html"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"button")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"type"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"button",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""))," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"bg-indigo-600 ...",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""))," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"disabled"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"svg")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"animate-spin h-5 w-5 mr-3 ...",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""))," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"viewBox"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"0 0 24 24",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n    ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"svg"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  Processing\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"button"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,d.kt)("p",null,"These are completely customizable as always, using the ",(0,d.kt)("inlineCode",{parentName:"p"},"animation")," and ",(0,d.kt)("inlineCode",{parentName:"p"},"keyframes")," sections of your ",(0,d.kt)("inlineCode",{parentName:"p"},"tailwind.config.js")," theme:"),(0,d.kt)(f.M,{filename:"tailwind.config.js"},(0,d.kt)("pre",Object.assign({},{className:"language-js"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"module",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token property-access"}),"exports")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  theme",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n    extend",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n      animation",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n        wiggle",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'wiggle 1s ease-in-out infinite'"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n      ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n      keyframes",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n        wiggle",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n          ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'0%, 100%'"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{")," transform",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'rotate(-3deg)'")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n          ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'50%'"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{")," transform",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'rotate(3deg)'")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n        ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n      ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n    ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")))),(0,d.kt)("p",null,"For more information and a live demo, ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://tailwindcss.com/docs/animation"}),"read the new animation documentation"),". For behind the scenes details about the design rationale, ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://github.com/tailwindlabs/tailwindcss/pull/2068"}),"check out the pull request"),"."),(0,d.kt)(g.X,{level:3,id:"new-variants",nextElement:{type:"paragraph"}},"New prefers-reduced-motion variants"),(0,d.kt)("p",null,"To go along with the new animation features, we’ve also added new ",(0,d.kt)("inlineCode",{parentName:"p"},"motion-safe")," and ",(0,d.kt)("inlineCode",{parentName:"p"},"motion-reduce")," variants that allow you to conditionally apply CSS based on the ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion"}),(0,d.kt)("inlineCode",{parentName:"a"},"prefers-reduced-motion")," media feature"),"."),(0,d.kt)("p",null,"These can be useful in conjunction with transition and animation utilities to disable problematic motion for users who are sensitive to it:"),(0,d.kt)("pre",Object.assign({},{className:"language-html"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"... transition duration-150 ease-in-out motion-reduce:transition-none ...",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,d.kt)("p",null,"…or to explicitly opt-in to motion to make sure it’s only being shown to users who haven’t opted out:"),(0,d.kt)("pre",Object.assign({},{className:"language-html"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"... motion-safe:transition duration-150 ease-in-out ...",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,d.kt)("p",null,"These can be combined with responsive variants and pseudo-class variants as well:"),(0,d.kt)("pre",Object.assign({},{className:"language-html"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- With responsive variants -->"),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"sm:motion-reduce:translate-y-0",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- With pseudo-class variants -->"),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"motion-reduce:hover:translate-y-0",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- With responsive and pseudo-class variants -->"),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"sm:motion-reduce:hover:translate-y-0",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,d.kt)("p",null,"These are currently not enabled for any utilities by default, but you can enabled them as needed in the ",(0,d.kt)("inlineCode",{parentName:"p"},"variants")," section of your ",(0,d.kt)("inlineCode",{parentName:"p"},"tailwind.config.js")," file:"),(0,d.kt)(f.M,{filename:"tailwind.config.js"},(0,d.kt)("pre",Object.assign({},{className:"language-js"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"module",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token property-access"}),"exports")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// ..."),"\n  variants",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n    translate",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'responsive'"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'hover'"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'focus'"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'motion-safe'"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'motion-reduce'"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")))),(0,d.kt)("p",null,"For more details, check out ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://tailwindcss.com/docs/pseudo-class-variants"}),"the updated variants documentation"),"."),(0,d.kt)(g.X,{level:3,id:"new-utilities",nextElement:{type:"paragraph"}},"New overscroll-behavior utilities"),(0,d.kt)("p",null,"We’ve also added new utilities for the ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior"}),(0,d.kt)("inlineCode",{parentName:"a"},"overscroll-behavior"))," property."),(0,d.kt)("p",null,"You can use these utilities to control how “scroll chaining” works in your sites, and avoid scrolling the whole page when you reach the top or bottom of an embedded scrollable area."),(0,d.kt)("pre",Object.assign({},{className:"language-html"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"overscroll-y-contain ...",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"button"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,d.kt)("p",null,"Note that this is currently ",(0,d.kt)("strong",{parentName:"p"},"not supported in Safari"),", but in my opinion it’s not a huge deal to treat this as a progressive enhancement anyways, since it falls back fairly gracefully."),(0,d.kt)("p",null,"This plugin can be configured in your ",(0,d.kt)("inlineCode",{parentName:"p"},"tailwind.config.js")," file as ",(0,d.kt)("inlineCode",{parentName:"p"},"overscrollBehavior"),":"),(0,d.kt)(f.M,{filename:"tailwind.config.js"},(0,d.kt)("pre",Object.assign({},{className:"language-js"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"module",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token property-access"}),"exports")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// ..."),"\n\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// Disabling the plugin"),"\n  corePlugins",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n    overscrollBehavior",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token boolean"}),"false"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// Customizing the enabled variants"),"\n  variants",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n    overscrollBehavior",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'responsive'"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'hover'"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")))),(0,d.kt)(g.X,{level:3,id:"generate-your-css-without-an-input-file",nextElement:{type:"paragraph"}},"Generate your CSS without an input file"),(0,d.kt)("p",null,"If you never write any custom CSS and you’re sick of creating this file all the time…"),(0,d.kt)("pre",Object.assign({},{className:"language-css"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-css"}),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token atrule"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token rule"}),"@tailwind")," base",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),";")),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token atrule"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token rule"}),"@tailwind")," components",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),";")),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token atrule"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token rule"}),"@tailwind")," utilities",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),";")))),(0,d.kt)("p",null,"…then I’ve got news for you baby — if you’re using our ",(0,d.kt)("inlineCode",{parentName:"p"},"tailwindcss")," CLI tool you can start depositing those 58 characters into your savings account instead of wasting them on a pointless CSS file."),(0,d.kt)("p",null,"The input file argument is now optional in the CLI tool, so if you don’t actually ",(0,d.kt)("em",{parentName:"p"},"need")," a custom CSS file, you can just write this:"),(0,d.kt)("pre",Object.assign({},{className:"language-bash"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"npx tailwindcss build -o compiled.css")),(0,d.kt)("p",null,"Your kids are going to be so grateful for the extra time you get to spend together."),(0,d.kt)(l,{mdxType:"Footer"},"Want to talk about this post? ",(0,d.kt)("a",{href:"https://github.com/tailwindcss/tailwindcss/discussions/2088"},"Discuss this on GitHub →")))}p.isMDXComponent=!0,p.layoutProps=m}},function(a){a.O(0,[3430,6401,4756,6259,6852,2474,3942,5225,9774,2888,179],function(){return a(a.s=53052)}),_N_E=a.O()}])