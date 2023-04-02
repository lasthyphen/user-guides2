(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[894],{57874:function(a,b){"use strict";b.Z="/_next/static/media/social-square.44d3de1f33eb31bb78c5d9aabe6c25e1.jpg"},11193:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/health",function(){return c(24533)}])},95463:function(a,b,c){"use strict";c.r(b),b.default={title:"Virtual Machine"}},65408:function(a,b,c){"use strict";c.r(b),b.default={title:"Admin API"}},24954:function(a,b,c){"use strict";c.r(b),b.default={}},64404:function(a,b,c){"use strict";c.r(b),b.default={}},55402:function(a,b,c){"use strict";c.r(b),b.default={}},701:function(a,b,c){"use strict";c.r(b),b.default={title:"Configuration"}},61824:function(a,b,c){"use strict";c.r(b),b.default={title:"Create Wallet"}},59033:function(a,b,c){"use strict";c.r(b),b.default={title:"Decentralised Applications"}},62325:function(a,b,c){"use strict";c.r(b),b.default={title:"Decypher - Getting Started"}},38833:function(a,b,c){"use strict";c.r(b),b.default={title:"How to Delegate using The Vault"}},80010:function(a,b,c){"use strict";c.r(b),b.default={title:"How to Delegate with Dijets Vault"}},93050:function(a,b,c){"use strict";c.r(b),b.default={title:"How to Delegate & Earn DJTX"}},77827:function(a,b,c){"use strict";c.r(b),b.default={title:"Accounts"}},42844:function(a,b,c){"use strict";c.r(b),b.default={title:"Dijets Consensus"}},57530:function(a,b,c){"use strict";c.r(b),b.default={title:"Dijets Council"}},36022:function(a,b,c){"use strict";c.r(b),b.default={title:"Dijets"}},27503:function(a,b,c){"use strict";c.r(b),b.default={title:"Mint a Fixed Cap Digital Asset"}},8412:function(a,b,c){"use strict";c.r(b),b.default={title:"Full Node"}},95581:function(a,b,c){"use strict";c.r(b),b.default={title:"Functions & Directives"}},75952:function(a,b,c){"use strict";c.r(b),b.default={}},24533:function(a,b,c){"use strict";c.r(b),c.d(b,{"default":function(){return j}}),c(67294);var d=c(3905);c(41664);var e=c(5679),f=c(53339),g=c(74296),h={Layout:f.L,meta:{sidebar_position:9,description:"This API can be used for measuring node health. Use Dijets docs as a reference when testing node health. Helpful examples provided."},slug:"health",tableOfContents:[{title:"Format",slug:"format",children:[]},{title:"Endpoint",slug:"endpoint",children:[]},{title:"Methods",slug:"methods",children:[{title:"health.health",slug:"health-health",children:[{title:"",slug:""},{title:"",slug:""},{title:"",slug:""}]}]}]},i=g.X_;function j(a){var b=a.components,c=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["components"]);return(0,d.kt)(i,Object.assign({},h,c,{components:b,mdxType:"MDXLayout"}),(0,d.kt)("h1",null,"Health API"),(0,d.kt)("p",null,"This API can be used for measuring node health."),(0,d.kt)("p",null,"To get an HTTP status code response that indicates the node’s health, make a ",(0,d.kt)("inlineCode",{parentName:"p"},"GET")," request to ",(0,d.kt)("inlineCode",{parentName:"p"},"/ext/health"),". If the node is healthy, it will return a ",(0,d.kt)("inlineCode",{parentName:"p"},"200")," status code. If you want more in-depth information about a node’s health, use the methods below."),(0,d.kt)("p",null,":::info"),(0,d.kt)("p",null,"This API set is for a specific node, it is unavailable on the ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"../public-api-server.md"}),"public server"),"."),(0,d.kt)("p",null,":::"),(0,d.kt)(e.X,{level:2,id:"format",nextElement:{type:"paragraph"}},"Format"),(0,d.kt)("p",null,"This API uses the ",(0,d.kt)("inlineCode",{parentName:"p"},"json 2.0")," RPC format. For more information on making JSON RPC calls, see ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"issuing-api-calls.md"}),"here"),"."),(0,d.kt)(e.X,{level:2,id:"endpoint",nextElement:{type:"code",lang:"text",meta:null}},"Endpoint"),(0,d.kt)("pre",Object.assign({},{className:"language-text"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-text"}),"/ext/health")),(0,d.kt)(e.X,{level:2,id:"methods",nextElement:{type:"heading",depth:3}},"Methods"),(0,d.kt)(e.X,{level:3,id:"health-health",nextElement:{type:"paragraph"}},"health.health"),(0,d.kt)("p",null,"The node runs a set of health checks every 30 seconds, including a health check for each chain. This method returns the last set of health check results."),(0,d.kt)(e.X,{level:4,id:"",nextElement:{type:"code",lang:"sh",meta:null}}),(0,d.kt)("pre",Object.assign({},{className:"language-sh"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-sh"}),"health.health() -> {\n    checks: []{\n        checkName: {\n            message: JSON,\n            error: JSON,\n            timestamp: string,\n            duration: int,\n            contiguousFailures: int,\n            timeOfFirstFailure: int\n        }\n    },\n    healthy: bool\n}")),(0,d.kt)("p",null,(0,d.kt)("inlineCode",{parentName:"p"},"healthy")," is true if the node if all health checks are passing."),(0,d.kt)("p",null,(0,d.kt)("inlineCode",{parentName:"p"},"checks")," is a list of health check responses."),(0,d.kt)("ul",Object.assign({},{role:"list"}),(0,d.kt)("li",{parentName:"ul"},"A check response may include a ",(0,d.kt)("inlineCode",{parentName:"li"},"message")," with additional context."),(0,d.kt)("li",{parentName:"ul"},"A check response may include an ",(0,d.kt)("inlineCode",{parentName:"li"},"error")," describing why the check failed."),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("inlineCode",{parentName:"li"},"timestamp")," is the timestamp of the last health check."),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("inlineCode",{parentName:"li"},"duration")," is the execution duration of the last health check, in nanoseconds."),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("inlineCode",{parentName:"li"},"contiguousFailures")," is the number of times in a row this check failed."),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("inlineCode",{parentName:"li"},"timeOfFirstFailure")," is the time this check first failed.")),(0,d.kt)("p",null,"More information on these measurements can be found in the documentation for the ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://github.com/AppsFlyer/go-sundheit"}),"go-sundheit")," library."),(0,d.kt)(e.X,{level:4,id:"",nextElement:{type:"code",lang:"sh",meta:null}}),(0,d.kt)("pre",Object.assign({},{className:"language-sh"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-sh"}),"curl -X POST --data '{\n    \"jsonrpc\":\"2.0\",\n    \"id\"     :1,\n    \"method\" :\"health.health\"\n}' -H 'content-type:application/json;' 127.0.0.1:9650/ext/health")),(0,d.kt)(e.X,{level:4,id:"",nextElement:{type:"paragraph"}}),(0,d.kt)("p",null,"In this example response, the Utility Chain’s health check is failing."),(0,d.kt)("pre",Object.assign({},{className:"language-json"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-json"}),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token property"}),"\"jsonrpc\""),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"\"2.0\""),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token property"}),"\"result\""),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token property"}),"\"checks\""),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n      ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token property"}),"\"C\""),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n        ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token property"}),"\"message\""),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token null keyword"}),"null"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n        ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token property"}),"\"error\""),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n          ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token property"}),"\"message\""),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"\"example error message\""),"\n        ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n        ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token property"}),"\"timestamp\""),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"\"2020-10-14T14:04:20.57759662Z\""),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n        ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token property"}),"\"duration\""),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token number"}),"465253"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n        ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token property"}),"\"contiguousFailures\""),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token number"}),"50"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n        ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token property"}),"\"timeOfFirstFailure\""),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"\"2020-10-14T13:16:10.576435413Z\""),"\n      ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n      ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token property"}),"\"P\""),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n        ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token property"}),"\"message\""),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n          ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token property"}),"\"percentConnected\""),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token number"}),"0.9967694992864075"),"\n        ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n        ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token property"}),"\"timestamp\""),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"\"2020-10-14T14:04:08.668743851Z\""),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n        ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token property"}),"\"duration\""),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token number"}),"433363830"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n        ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token property"}),"\"contiguousFailures\""),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token number"}),"0"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n        ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token property"}),"\"timeOfFirstFailure\""),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token null keyword"}),"null"),"\n      ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n      ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token property"}),"\"X\""),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n        ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token property"}),"\"timestamp\""),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"\"2020-10-14T14:04:20.3962705Z\""),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n        ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token property"}),"\"duration\""),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token number"}),"1853"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n        ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token property"}),"\"contiguousFailures\""),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token number"}),"0"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n        ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token property"}),"\"timeOfFirstFailure\""),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token null keyword"}),"null"),"\n      ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n      ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token property"}),"\"chains.default.bootstrapped\""),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n        ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token property"}),"\"timestamp\""),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"\"2020-10-14T14:04:04.238623814Z\""),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n        ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token property"}),"\"duration\""),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token number"}),"8075"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n        ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token property"}),"\"contiguousFailures\""),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token number"}),"0"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n        ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token property"}),"\"timeOfFirstFailure\""),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token null keyword"}),"null"),"\n      ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n      ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token property"}),"\"network.validators.heartbeat\""),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n        ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token property"}),"\"message\""),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n          ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token property"}),"\"heartbeat\""),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token number"}),"1602684245"),"\n        ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n        ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token property"}),"\"timestamp\""),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"\"2020-10-14T14:04:05.610007874Z\""),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n        ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token property"}),"\"duration\""),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token number"}),"6124"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n        ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token property"}),"\"contiguousFailures\""),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token number"}),"0"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n        ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token property"}),"\"timeOfFirstFailure\""),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token null keyword"}),"null"),"\n      ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n    ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n    ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token property"}),"\"healthy\""),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token boolean"}),"false"),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token property"}),"\"id\""),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token number"}),"1"),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"))))}j.isMDXComponent=!0,j.layoutProps=h},86715:function(a,b,c){"use strict";c.r(b),b.default={}},89997:function(a,b,c){"use strict";c.r(b),b.default={}},89978:function(a,b,c){"use strict";c.r(b),b.default={}},63765:function(a,b,c){"use strict";c.r(b),b.default={title:"Download and Install Decypher"}},48674:function(a,b,c){"use strict";c.r(b),b.default={title:"How to install Decypher"}},26440:function(a,b,c){"use strict";c.r(b),b.default={title:"Intra-Chain Transfer"}},19616:function(a,b,c){"use strict";c.r(b),b.default={title:"Access Wallet with Keystore"}},21514:function(a,b,c){"use strict";c.r(b),b.default={title:"How to open a Dijets Account"}},66012:function(a,b,c){"use strict";c.r(b),b.default={title:"How to open a Dijets Account"}},19062:function(a,b,c){"use strict";c.r(b),b.default={title:"Access Wallet with Mnemonic"}},36319:function(a,b,c){"use strict";c.r(b),b.default={title:"Order"}},30915:function(a,b,c){"use strict";c.r(b),b.default={title:"Encode Wallet with a Password"}},572:function(a,b,c){"use strict";c.r(b),b.default={title:"Access Wallet with Private Key"}},53940:function(a,b,c){"use strict";c.r(b),b.default={title:"Public API Server"}},73725:function(a,b,c){"use strict";c.r(b),b.default={title:"Query the Dijets Blockchain"}},3511:function(a,b,c){"use strict";c.r(b),b.default={title:"Read-Only Wallet"}},58891:function(a,b,c){"use strict";c.r(b),b.default={title:"Configure and Run Cacid"}},69310:function(a,b,c){"use strict";c.r(b),b.default={title:"Run a private network with Dijets"}},98118:function(a,b,c){"use strict";c.r(b),b.default={title:"Secret Phrase"}},61510:function(a,b,c){"use strict";c.r(b),b.default={title:"Send DJTX with Dijets Wallet"}},83204:function(a,b,c){"use strict";c.r(b),b.default={title:"Staking"}},29297:function(a,b,c){"use strict";c.r(b),b.default={title:"Stroke Width"}},38271:function(a,b,c){"use strict";c.r(b),b.default={title:"Stroke"}},20081:function(a,b,c){"use strict";c.r(b),b.default={title:"Tailwind CLI"}},57938:function(a,b,c){"use strict";c.r(b),b.default={title:"Ternary Chain Ledgers"}},21812:function(a,b,c){"use strict";c.r(b),b.default={title:"Text Decoration Thickness"}},99635:function(a,b,c){"use strict";c.r(b),b.default={title:"Text Decoration"}},53874:function(a,b,c){"use strict";c.r(b),b.default={title:"Text Indent"}},5707:function(a,b,c){"use strict";c.r(b),b.default={title:"Text Overflow"}},52434:function(a,b,c){"use strict";c.r(b),b.default={title:"Text Transform"}},84911:function(a,b,c){"use strict";c.r(b),b.default={title:"Text Underline Offset"}},9165:function(a,b,c){"use strict";c.r(b),b.default={title:"Theme Configuration",shortTitle:"Theme"}},59137:function(a,b,c){"use strict";c.r(b),b.default={title:"Top / Right / Bottom / Left"}},28032:function(a,b,c){"use strict";c.r(b),b.default={title:"Touch Action"}},64824:function(a,b,c){"use strict";c.r(b),b.default={title:"Transaction Fees"}},50825:function(a,b,c){"use strict";c.r(b),b.default={title:"Transactions and states"}},85015:function(a,b,c){"use strict";c.r(b),b.default={title:"Send DJTX"}},42785:function(a,b,c){"use strict";c.r(b),b.default={title:"Validator Nodes"}},43077:function(a,b,c){"use strict";c.r(b),b.default={title:"Vertical Alignment",shortTitle:"Vertical Align"}},55317:function(a,b,c){"use strict";c.r(b),b.default={title:"Visibility"}},53339:function(a,b,c){"use strict";c.d(b,{L:function(){return l}});var d=c(85893),e=c(21744),f=c(9008),g=c(11163),h=c(57874),i=c(68224),j=c(54713);function k(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function l(a){var b=(0,g.useRouter)();return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.D,{suffix:"/"===b.pathname?void 0:"Dijets User Guide",children:a.layoutProps.meta.metaTitle||a.layoutProps.meta.title}),(0,d.jsxs)(f.default,{children:[(0,d.jsx)("meta",{name:"twitter:card",content:"summary"},"twitter:card"),(0,d.jsx)("meta",{name:"twitter:image",content:"https://tailwindcss.com".concat(h.Z)},"twitter:image")]}),(0,d.jsx)(e.C,function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){k(a,b,c[b])})}return a}({nav:j.u},a))]})}l.nav=j.u},54713:function(a,b,c){"use strict";function d(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function e(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},e=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),e.forEach(function(b){d(a,b,c[b])})}return a}c.d(b,{u:function(){return i}});var f,g,h=(f="docs",(g=c(66708)).keys().map(function(a){return{fileName:a,module:g(a)}}).reduce(function(a,b){var c=b.fileName.substr(2).replace(/\.mdx$/,"");return e({},a,d({},c,e({},b.module.default,{href:"/".concat(f,"/").concat(c)})))},{})),i={"Getting Started":[{title:"Installation",href:"/docs/installation",match:/^\/docs\/installation/},h.dijets,h["ternary-chains"],h.VMs,h["dijets-consensus"],h.staking,],"Decypher Extension":[h["install-decypher"],h["installation-chrome"],h["decypher-getting-started"],h["secret-phrase"],h.dapps,],"Wallet Guides":[h["create-wallet"],h.mnemonic,h.privatekey,h.keystore,h.password,h["read-only"],h.transfer,h["intra-chain-transfer"],h["delegator-video"],]}},66708:function(a,b,c){var d={"./VMs.mdx":95463,"./admin.mdx":65408,"./api_admin.mdx":24954,"./api_auth.mdx":64404,"./api_avm_basetx.mdx":55402,"./configuration.mdx":701,"./create-wallet.mdx":61824,"./dapps.mdx":59033,"./decypher-getting-started.mdx":62325,"./delegation-english-temp.mdx":38833,"./delegation-urdu-temp.mdx":80010,"./delegator-video.mdx":93050,"./dijets-accounts.mdx":77827,"./dijets-consensus.mdx":42844,"./dijets-council.mdx":57530,"./dijets.mdx":36022,"./first-transaction.mdx":27503,"./full-public-nodes.mdx":8412,"./functions-and-directives.mdx":95581,"./generate-a-txid-using-dijetsjs.mdx":75952,"./health.mdx":86715,"./index-api.mdx":89997,"./info.mdx":89978,"./install-decypher.mdx":63765,"./installation-chrome.mdx":48674,"./intra-chain-transfer.mdx":26440,"./keystore.mdx":19616,"./makeaccount-english-temp.mdx":21514,"./makeaccount-urdu-temp.mdx":66012,"./mnemonic.mdx":19062,"./order.mdx":36319,"./password.mdx":30915,"./privatekey.mdx":572,"./public-api-server.mdx":53940,"./query-the-blockchain.mdx":73725,"./read-only.mdx":3511,"./run-fullnode-cacid.mdx":58891,"./run-local-network.mdx":69310,"./secret-phrase.mdx":98118,"./send.mdx":61510,"./staking.mdx":83204,"./stroke-width.mdx":29297,"./stroke.mdx":38271,"./tailwind-cli.mdx":20081,"./ternary-chains.mdx":57938,"./text-decoration-thickness.mdx":21812,"./text-decoration.mdx":99635,"./text-indent.mdx":53874,"./text-overflow.mdx":5707,"./text-transform.mdx":52434,"./text-underline-offset.mdx":84911,"./theme.mdx":9165,"./top-right-bottom-left.mdx":59137,"./touch-action.mdx":28032,"./transaction-fees.mdx":64824,"./transactions-and-states.mdx":50825,"./transfer.mdx":85015,"./validators.mdx":42785,"./vertical-align.mdx":43077,"./visibility.mdx":55317,"src/pages/docs/VMs.mdx":95463,"src/pages/docs/admin.mdx":65408,"src/pages/docs/api_admin.mdx":24954,"src/pages/docs/api_auth.mdx":64404,"src/pages/docs/api_avm_basetx.mdx":55402,"src/pages/docs/configuration.mdx":701,"src/pages/docs/create-wallet.mdx":61824,"src/pages/docs/dapps.mdx":59033,"src/pages/docs/decypher-getting-started.mdx":62325,"src/pages/docs/delegation-english-temp.mdx":38833,"src/pages/docs/delegation-urdu-temp.mdx":80010,"src/pages/docs/delegator-video.mdx":93050,"src/pages/docs/dijets-accounts.mdx":77827,"src/pages/docs/dijets-consensus.mdx":42844,"src/pages/docs/dijets-council.mdx":57530,"src/pages/docs/dijets.mdx":36022,"src/pages/docs/first-transaction.mdx":27503,"src/pages/docs/full-public-nodes.mdx":8412,"src/pages/docs/functions-and-directives.mdx":95581,"src/pages/docs/generate-a-txid-using-dijetsjs.mdx":75952,"src/pages/docs/health.mdx":86715,"src/pages/docs/index-api.mdx":89997,"src/pages/docs/info.mdx":89978,"src/pages/docs/install-decypher.mdx":63765,"src/pages/docs/installation-chrome.mdx":48674,"src/pages/docs/intra-chain-transfer.mdx":26440,"src/pages/docs/keystore.mdx":19616,"src/pages/docs/makeaccount-english-temp.mdx":21514,"src/pages/docs/makeaccount-urdu-temp.mdx":66012,"src/pages/docs/mnemonic.mdx":19062,"src/pages/docs/order.mdx":36319,"src/pages/docs/password.mdx":30915,"src/pages/docs/privatekey.mdx":572,"src/pages/docs/public-api-server.mdx":53940,"src/pages/docs/query-the-blockchain.mdx":73725,"src/pages/docs/read-only.mdx":3511,"src/pages/docs/run-fullnode-cacid.mdx":58891,"src/pages/docs/run-local-network.mdx":69310,"src/pages/docs/secret-phrase.mdx":98118,"src/pages/docs/send.mdx":61510,"src/pages/docs/staking.mdx":83204,"src/pages/docs/stroke-width.mdx":29297,"src/pages/docs/stroke.mdx":38271,"src/pages/docs/tailwind-cli.mdx":20081,"src/pages/docs/ternary-chains.mdx":57938,"src/pages/docs/text-decoration-thickness.mdx":21812,"src/pages/docs/text-decoration.mdx":99635,"src/pages/docs/text-indent.mdx":53874,"src/pages/docs/text-overflow.mdx":5707,"src/pages/docs/text-transform.mdx":52434,"src/pages/docs/text-underline-offset.mdx":84911,"src/pages/docs/theme.mdx":9165,"src/pages/docs/top-right-bottom-left.mdx":59137,"src/pages/docs/touch-action.mdx":28032,"src/pages/docs/transaction-fees.mdx":64824,"src/pages/docs/transactions-and-states.mdx":50825,"src/pages/docs/transfer.mdx":85015,"src/pages/docs/validators.mdx":42785,"src/pages/docs/vertical-align.mdx":43077,"src/pages/docs/visibility.mdx":55317};function e(a){return c(f(a))}function f(a){if(!c.o(d,a)){var b=new Error("Cannot find module '"+a+"'");throw b.code="MODULE_NOT_FOUND",b}return d[a]}e.keys=function(){return Object.keys(d)},e.resolve=f,a.exports=e,e.id=66708}},function(a){a.O(0,[6401,6852,2474,9774,2888,179],function(){return a(a.s=11193)}),_N_E=a.O()}])