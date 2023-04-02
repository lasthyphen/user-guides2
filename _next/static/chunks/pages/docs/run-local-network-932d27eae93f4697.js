(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4346],{57874:function(a,b){"use strict";b.Z="/_next/static/media/social-square.44d3de1f33eb31bb78c5d9aabe6c25e1.jpg"},30013:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/run-local-network",function(){return c(90107)}])},95463:function(a,b,c){"use strict";c.r(b),b.default={title:"Virtual Machine"}},65408:function(a,b,c){"use strict";c.r(b),b.default={title:"Admin API"}},24954:function(a,b,c){"use strict";c.r(b),b.default={}},64404:function(a,b,c){"use strict";c.r(b),b.default={}},55402:function(a,b,c){"use strict";c.r(b),b.default={}},701:function(a,b,c){"use strict";c.r(b),b.default={title:"Configuration"}},61824:function(a,b,c){"use strict";c.r(b),b.default={title:"Create Wallet"}},59033:function(a,b,c){"use strict";c.r(b),b.default={title:"Decentralised Applications"}},62325:function(a,b,c){"use strict";c.r(b),b.default={title:"Decypher - Getting Started"}},38833:function(a,b,c){"use strict";c.r(b),b.default={title:"How to Delegate using The Vault"}},80010:function(a,b,c){"use strict";c.r(b),b.default={title:"How to Delegate with Dijets Vault"}},93050:function(a,b,c){"use strict";c.r(b),b.default={title:"How to Delegate & Earn DJTX"}},77827:function(a,b,c){"use strict";c.r(b),b.default={title:"Accounts"}},42844:function(a,b,c){"use strict";c.r(b),b.default={title:"Dijets Consensus"}},57530:function(a,b,c){"use strict";c.r(b),b.default={title:"Dijets Council"}},36022:function(a,b,c){"use strict";c.r(b),b.default={title:"Dijets"}},27503:function(a,b,c){"use strict";c.r(b),b.default={title:"Mint a Fixed Cap Digital Asset"}},8412:function(a,b,c){"use strict";c.r(b),b.default={title:"Full Node"}},95581:function(a,b,c){"use strict";c.r(b),b.default={title:"Functions & Directives"}},75952:function(a,b,c){"use strict";c.r(b),b.default={}},86715:function(a,b,c){"use strict";c.r(b),b.default={}},89997:function(a,b,c){"use strict";c.r(b),b.default={}},89978:function(a,b,c){"use strict";c.r(b),b.default={}},63765:function(a,b,c){"use strict";c.r(b),b.default={title:"Download and Install Decypher"}},48674:function(a,b,c){"use strict";c.r(b),b.default={title:"How to install Decypher"}},26440:function(a,b,c){"use strict";c.r(b),b.default={title:"Intra-Chain Transfer"}},19616:function(a,b,c){"use strict";c.r(b),b.default={title:"Access Wallet with Keystore"}},21514:function(a,b,c){"use strict";c.r(b),b.default={title:"How to open a Dijets Account"}},66012:function(a,b,c){"use strict";c.r(b),b.default={title:"How to open a Dijets Account"}},19062:function(a,b,c){"use strict";c.r(b),b.default={title:"Access Wallet with Mnemonic"}},36319:function(a,b,c){"use strict";c.r(b),b.default={title:"Order"}},30915:function(a,b,c){"use strict";c.r(b),b.default={title:"Encode Wallet with a Password"}},572:function(a,b,c){"use strict";c.r(b),b.default={title:"Access Wallet with Private Key"}},53940:function(a,b,c){"use strict";c.r(b),b.default={title:"Public API Server"}},73725:function(a,b,c){"use strict";c.r(b),b.default={title:"Query the Dijets Blockchain"}},3511:function(a,b,c){"use strict";c.r(b),b.default={title:"Read-Only Wallet"}},58891:function(a,b,c){"use strict";c.r(b),b.default={title:"Configure and Run Cacid"}},90107:function(a,b,c){"use strict";c.r(b),c.d(b,{"default":function(){return j}}),c(67294);var d=c(3905);c(41664);var e=c(5679),f=c(53339),g=c(74296),h={Layout:f.L,meta:{id:"run-local-network",title:"Run a private network with Dijets"},slug:"run-local-network",tableOfContents:[{title:"Getting Started",slug:"getting-started",children:[{title:"Using Dijets Core source code",slug:"using-dijets-core-source-code",children:[]},{title:"Using Docker",slug:"using-docker",children:[]}]},{title:"Interacting with the local test validator network",slug:"interacting-with-the-local-test-validator-network",children:[]}]},i=g.X_;function j(a){var b=a.components,c=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["components"]);return(0,d.kt)(i,Object.assign({},h,c,{components:b,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"You can run a local test validator network to test and debug services you are developing for the Dijets Blockchain and to build and test Move method code changes. This local test network is not part of the Dijets Ecosystem and is only meant for testing and development purposes."),(0,d.kt)("p",null,"You can use the Dijets CLI command dev to compile, publish, and execute Move Intermediate Representation (IR) programs on your local test validator network."),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Note: Your local test network of validator nodes will not be connected to the testnet, and will not be using the actual validator nodes on the Dijets Blockchain.")),(0,d.kt)(e.X,{level:2,id:"getting-started",nextElement:{type:"paragraph"}},"Getting Started"),(0,d.kt)("p",null,"You can run a local test validator network in two ways: using the Dijets Core source code or Docker. The Dijets Core source code is useful when testing modifications to the Dijets Core code base. Docker is particularly useful when building services on top of the Dijets Blockchain as there is no build overhead and the ledger state persists across restarts of the network by default."),(0,d.kt)(e.X,{level:3,id:"using-dijets-core-source-code",nextElement:{type:"list",ordered:!0,start:1,spread:!1}},"Using Dijets Core source code"),(0,d.kt)("ol",Object.assign({},{role:"list"}),(0,d.kt)("li",{parentName:"ol"},(0,d.kt)("p",{parentName:"li"},"Download and clone the Dijets Core repository from GitHub and prepare your developer environment by running the following commands:"),(0,d.kt)("pre",{parentName:"li"},(0,d.kt)("code",Object.assign({parentName:"pre"},{}),"git clone https://github.com/dijets/dijets.git\ncd dijets\n./scripts/dev_setup.sh\nsource ~/.cargo/env\n"))),(0,d.kt)("li",{parentName:"ol"},(0,d.kt)("p",{parentName:"li"},"Run the process: ",(0,d.kt)("inlineCode",{parentName:"p"},"cargo run -p dijets-node -- --test"),". Note, after starting this process, the config path: ",(0,d.kt)("inlineCode",{parentName:"p"},"/distinct/tmp/path/0/node.yaml"),"."))),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"You can later restore the ledger state by running ",(0,d.kt)("inlineCode",{parentName:"p"},"dijets-node")," with a previously used configuration path: ",(0,d.kt)("inlineCode",{parentName:"p"},"cargo run -p dijets-node -- --test --config /distinct/tmp/path"),".")),(0,d.kt)(e.X,{level:3,id:"using-docker",nextElement:{type:"list",ordered:!0,start:1,spread:!1}},"Using Docker"),(0,d.kt)("ol",Object.assign({},{role:"list"}),(0,d.kt)("li",{parentName:"ol"},(0,d.kt)("p",{parentName:"li"},"Install Docker along with Docker-Compose.")),(0,d.kt)("li",{parentName:"ol"},(0,d.kt)("p",{parentName:"li"},"Create a directory for your local test validator network.")),(0,d.kt)("li",{parentName:"ol"},(0,d.kt)("p",{parentName:"li"},"Download the validator testnet docker compose.")),(0,d.kt)("li",{parentName:"ol"},(0,d.kt)("p",{parentName:"li"},"Create configuration files in the same directory so that the data can be exported out of the docker container:"),(0,d.kt)("pre",{parentName:"li"},(0,d.kt)("code",Object.assign({parentName:"pre"},{}),"# Linux / Mac\ntouch genesis.blob dijets_root_key waypoint.txt\n\n# Windows\nfsutil file createnew genesis.blob 0\nfsutil file createnew dijets_root_key 0\nfsutil file createnew waypoint.txt 0\nRun docker-compose: docker-compose up\n")))),(0,d.kt)(e.X,{level:2,id:"interacting-with-the-local-test-validator-network",nextElement:{type:"paragraph"}},"Interacting with the local test validator network"),(0,d.kt)("p",null,"After starting your local test validator network, the following will be output on your terminal:"),(0,d.kt)("pre",null,(0,d.kt)("code",Object.assign({parentName:"pre"},{}),"\nvalidator_1  | Entering test mode, this should never be used in production!\nvalidator_1  | Completed generating configuration:\nvalidator_1  |  Log file: \"/opt/dijets/var/validator.log\"\nvalidator_1  |  Config path: \"/opt/dijets/var/0/node.yaml\"\nvalidator_1  |  Dijets root key path: \"/opt/dijets/var/mint.key\"\nvalidator_1  |  Waypoint: 0:7ff525d33f685a5cf26a71b393fa5159874c8f0c2861c382905f49dcb6991cb6\nvalidator_1  |  JSON-RPC endpoint: 0.0.0.0:8080\nvalidator_1  |  FullNode network: /ip4/0.0.0.0/tcp/7180\nvalidator_1  |  ChainId: TESTING\n\n")),(0,d.kt)("p",null,"This will output a lot of information that will be required for starting the Dijets CLI tool:"),(0,d.kt)("ul",Object.assign({},{role:"list"}),(0,d.kt)("li",{parentName:"ul"},"ChainId - For testing"),(0,d.kt)("li",{parentName:"ul"},"Dijets root key path - Available in the docker compose folder under ",(0,d.kt)("inlineCode",{parentName:"li"},"dijets_root_key"),"."),(0,d.kt)("li",{parentName:"ul"},"Waypoint - Printed on screen and available in the docker compose folder under waypoint.txt"),(0,d.kt)("li",{parentName:"ul"},"JSON-RPC Endpoint - ",(0,d.kt)("inlineCode",{parentName:"li"},"http://127.0.0.1:8080"),".")),(0,d.kt)("p",null,"In another terminal, start a ",(0,d.kt)("inlineCode",{parentName:"p"},"dijets-client")," using data from the output above:"),(0,d.kt)("pre",null,(0,d.kt)("code",Object.assign({parentName:"pre"},{}),"$ cd ~/dijets\n$ cargo run -p cli -- -c $CHAIN_ID -m $ROOT_KEY -u http://127.0.0.1:8080 --waypoint $WAYPOINT\n")),(0,d.kt)("p",null,"At the end of this tutorial you will have:"),(0,d.kt)("ul",Object.assign({},{role:"list"}),(0,d.kt)("li",{parentName:"ul"},"A single local validator test network"),(0,d.kt)("li",{parentName:"ul"},"A Dijets CLI client connected to that network")),(0,d.kt)("p",null,"The configuration management of the validator network generates:"),(0,d.kt)("ul",Object.assign({},{role:"list"}),(0,d.kt)("li",{parentName:"ul"},"A genesis transaction."),(0,d.kt)("li",{parentName:"ul"},"A waypoint that serves as a verifiable checkpoint into the blockchain."),(0,d.kt)("li",{parentName:"ul"},"A chain id to uniquely distinguish this chain from other chains."),(0,d.kt)("li",{parentName:"ul"},"Dijets root key (also known as a mint or faucet key) for the account that’s allowed to perform the mint operation.")),(0,d.kt)("h6",null,"tags: ",(0,d.kt)("inlineCode",{parentName:"h6"},"core"),", ",(0,d.kt)("inlineCode",{parentName:"h6"},"node")))}j.isMDXComponent=!0,j.layoutProps=h},69310:function(a,b,c){"use strict";c.r(b),b.default={title:"Run a private network with Dijets"}},98118:function(a,b,c){"use strict";c.r(b),b.default={title:"Secret Phrase"}},61510:function(a,b,c){"use strict";c.r(b),b.default={title:"Send DJTX with Dijets Wallet"}},83204:function(a,b,c){"use strict";c.r(b),b.default={title:"Staking"}},29297:function(a,b,c){"use strict";c.r(b),b.default={title:"Stroke Width"}},38271:function(a,b,c){"use strict";c.r(b),b.default={title:"Stroke"}},20081:function(a,b,c){"use strict";c.r(b),b.default={title:"Tailwind CLI"}},57938:function(a,b,c){"use strict";c.r(b),b.default={title:"Ternary Chain Ledgers"}},21812:function(a,b,c){"use strict";c.r(b),b.default={title:"Text Decoration Thickness"}},99635:function(a,b,c){"use strict";c.r(b),b.default={title:"Text Decoration"}},53874:function(a,b,c){"use strict";c.r(b),b.default={title:"Text Indent"}},5707:function(a,b,c){"use strict";c.r(b),b.default={title:"Text Overflow"}},52434:function(a,b,c){"use strict";c.r(b),b.default={title:"Text Transform"}},84911:function(a,b,c){"use strict";c.r(b),b.default={title:"Text Underline Offset"}},9165:function(a,b,c){"use strict";c.r(b),b.default={title:"Theme Configuration",shortTitle:"Theme"}},59137:function(a,b,c){"use strict";c.r(b),b.default={title:"Top / Right / Bottom / Left"}},28032:function(a,b,c){"use strict";c.r(b),b.default={title:"Touch Action"}},64824:function(a,b,c){"use strict";c.r(b),b.default={title:"Transaction Fees"}},50825:function(a,b,c){"use strict";c.r(b),b.default={title:"Transactions and states"}},85015:function(a,b,c){"use strict";c.r(b),b.default={title:"Send DJTX"}},42785:function(a,b,c){"use strict";c.r(b),b.default={title:"Validator Nodes"}},43077:function(a,b,c){"use strict";c.r(b),b.default={title:"Vertical Alignment",shortTitle:"Vertical Align"}},55317:function(a,b,c){"use strict";c.r(b),b.default={title:"Visibility"}},53339:function(a,b,c){"use strict";c.d(b,{L:function(){return l}});var d=c(85893),e=c(21744),f=c(9008),g=c(11163),h=c(57874),i=c(68224),j=c(54713);function k(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function l(a){var b=(0,g.useRouter)();return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.D,{suffix:"/"===b.pathname?void 0:"Dijets User Guide",children:a.layoutProps.meta.metaTitle||a.layoutProps.meta.title}),(0,d.jsxs)(f.default,{children:[(0,d.jsx)("meta",{name:"twitter:card",content:"summary"},"twitter:card"),(0,d.jsx)("meta",{name:"twitter:image",content:"https://tailwindcss.com".concat(h.Z)},"twitter:image")]}),(0,d.jsx)(e.C,function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){k(a,b,c[b])})}return a}({nav:j.u},a))]})}l.nav=j.u},54713:function(a,b,c){"use strict";function d(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function e(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},e=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),e.forEach(function(b){d(a,b,c[b])})}return a}c.d(b,{u:function(){return i}});var f,g,h=(f="docs",(g=c(66708)).keys().map(function(a){return{fileName:a,module:g(a)}}).reduce(function(a,b){var c=b.fileName.substr(2).replace(/\.mdx$/,"");return e({},a,d({},c,e({},b.module.default,{href:"/".concat(f,"/").concat(c)})))},{})),i={"Getting Started":[{title:"Installation",href:"/docs/installation",match:/^\/docs\/installation/},h.dijets,h["ternary-chains"],h.VMs,h["dijets-consensus"],h.staking,],"Decypher Extension":[h["install-decypher"],h["installation-chrome"],h["decypher-getting-started"],h["secret-phrase"],h.dapps,],"Wallet Guides":[h["create-wallet"],h.mnemonic,h.privatekey,h.keystore,h.password,h["read-only"],h.transfer,h["intra-chain-transfer"],h["delegator-video"],]}},66708:function(a,b,c){var d={"./VMs.mdx":95463,"./admin.mdx":65408,"./api_admin.mdx":24954,"./api_auth.mdx":64404,"./api_avm_basetx.mdx":55402,"./configuration.mdx":701,"./create-wallet.mdx":61824,"./dapps.mdx":59033,"./decypher-getting-started.mdx":62325,"./delegation-english-temp.mdx":38833,"./delegation-urdu-temp.mdx":80010,"./delegator-video.mdx":93050,"./dijets-accounts.mdx":77827,"./dijets-consensus.mdx":42844,"./dijets-council.mdx":57530,"./dijets.mdx":36022,"./first-transaction.mdx":27503,"./full-public-nodes.mdx":8412,"./functions-and-directives.mdx":95581,"./generate-a-txid-using-dijetsjs.mdx":75952,"./health.mdx":86715,"./index-api.mdx":89997,"./info.mdx":89978,"./install-decypher.mdx":63765,"./installation-chrome.mdx":48674,"./intra-chain-transfer.mdx":26440,"./keystore.mdx":19616,"./makeaccount-english-temp.mdx":21514,"./makeaccount-urdu-temp.mdx":66012,"./mnemonic.mdx":19062,"./order.mdx":36319,"./password.mdx":30915,"./privatekey.mdx":572,"./public-api-server.mdx":53940,"./query-the-blockchain.mdx":73725,"./read-only.mdx":3511,"./run-fullnode-cacid.mdx":58891,"./run-local-network.mdx":69310,"./secret-phrase.mdx":98118,"./send.mdx":61510,"./staking.mdx":83204,"./stroke-width.mdx":29297,"./stroke.mdx":38271,"./tailwind-cli.mdx":20081,"./ternary-chains.mdx":57938,"./text-decoration-thickness.mdx":21812,"./text-decoration.mdx":99635,"./text-indent.mdx":53874,"./text-overflow.mdx":5707,"./text-transform.mdx":52434,"./text-underline-offset.mdx":84911,"./theme.mdx":9165,"./top-right-bottom-left.mdx":59137,"./touch-action.mdx":28032,"./transaction-fees.mdx":64824,"./transactions-and-states.mdx":50825,"./transfer.mdx":85015,"./validators.mdx":42785,"./vertical-align.mdx":43077,"./visibility.mdx":55317,"src/pages/docs/VMs.mdx":95463,"src/pages/docs/admin.mdx":65408,"src/pages/docs/api_admin.mdx":24954,"src/pages/docs/api_auth.mdx":64404,"src/pages/docs/api_avm_basetx.mdx":55402,"src/pages/docs/configuration.mdx":701,"src/pages/docs/create-wallet.mdx":61824,"src/pages/docs/dapps.mdx":59033,"src/pages/docs/decypher-getting-started.mdx":62325,"src/pages/docs/delegation-english-temp.mdx":38833,"src/pages/docs/delegation-urdu-temp.mdx":80010,"src/pages/docs/delegator-video.mdx":93050,"src/pages/docs/dijets-accounts.mdx":77827,"src/pages/docs/dijets-consensus.mdx":42844,"src/pages/docs/dijets-council.mdx":57530,"src/pages/docs/dijets.mdx":36022,"src/pages/docs/first-transaction.mdx":27503,"src/pages/docs/full-public-nodes.mdx":8412,"src/pages/docs/functions-and-directives.mdx":95581,"src/pages/docs/generate-a-txid-using-dijetsjs.mdx":75952,"src/pages/docs/health.mdx":86715,"src/pages/docs/index-api.mdx":89997,"src/pages/docs/info.mdx":89978,"src/pages/docs/install-decypher.mdx":63765,"src/pages/docs/installation-chrome.mdx":48674,"src/pages/docs/intra-chain-transfer.mdx":26440,"src/pages/docs/keystore.mdx":19616,"src/pages/docs/makeaccount-english-temp.mdx":21514,"src/pages/docs/makeaccount-urdu-temp.mdx":66012,"src/pages/docs/mnemonic.mdx":19062,"src/pages/docs/order.mdx":36319,"src/pages/docs/password.mdx":30915,"src/pages/docs/privatekey.mdx":572,"src/pages/docs/public-api-server.mdx":53940,"src/pages/docs/query-the-blockchain.mdx":73725,"src/pages/docs/read-only.mdx":3511,"src/pages/docs/run-fullnode-cacid.mdx":58891,"src/pages/docs/run-local-network.mdx":69310,"src/pages/docs/secret-phrase.mdx":98118,"src/pages/docs/send.mdx":61510,"src/pages/docs/staking.mdx":83204,"src/pages/docs/stroke-width.mdx":29297,"src/pages/docs/stroke.mdx":38271,"src/pages/docs/tailwind-cli.mdx":20081,"src/pages/docs/ternary-chains.mdx":57938,"src/pages/docs/text-decoration-thickness.mdx":21812,"src/pages/docs/text-decoration.mdx":99635,"src/pages/docs/text-indent.mdx":53874,"src/pages/docs/text-overflow.mdx":5707,"src/pages/docs/text-transform.mdx":52434,"src/pages/docs/text-underline-offset.mdx":84911,"src/pages/docs/theme.mdx":9165,"src/pages/docs/top-right-bottom-left.mdx":59137,"src/pages/docs/touch-action.mdx":28032,"src/pages/docs/transaction-fees.mdx":64824,"src/pages/docs/transactions-and-states.mdx":50825,"src/pages/docs/transfer.mdx":85015,"src/pages/docs/validators.mdx":42785,"src/pages/docs/vertical-align.mdx":43077,"src/pages/docs/visibility.mdx":55317};function e(a){return c(f(a))}function f(a){if(!c.o(d,a)){var b=new Error("Cannot find module '"+a+"'");throw b.code="MODULE_NOT_FOUND",b}return d[a]}e.keys=function(){return Object.keys(d)},e.resolve=f,a.exports=e,e.id=66708}},function(a){a.O(0,[6401,6852,2474,9774,2888,179],function(){return a(a.s=30013)}),_N_E=a.O()}])