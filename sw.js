if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const a=s=>l(s,r),t={module:{uri:r},exports:u,require:a};e[r]=Promise.all(i.map((s=>t[s]||a(s)))).then((s=>(n(...s),u)))}}define(["./workbox-56a10583"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_plugin-vue_export-helper-c27b6911.js",revision:null},{url:"assets/Add-d011b50b.js",revision:null},{url:"assets/avatar-9fdc6612.js",revision:null},{url:"assets/Checkbox-c9233cdd.js",revision:null},{url:"assets/cssr-086af65e.js",revision:null},{url:"assets/dark-mode-switch-c6f0e353.css",revision:null},{url:"assets/dark-mode-switch.vue_vue_type_script_setup_true_lang-8f4a94a4.js",revision:null},{url:"assets/DataTable-58f27117.js",revision:null},{url:"assets/Dropdown-76b348f0.js",revision:null},{url:"assets/exception-base.vue_vue_type_script_setup_true_lang-f892fa86.js",revision:null},{url:"assets/format-length-c9d165c6.js",revision:null},{url:"assets/get-26a16e98.js",revision:null},{url:"assets/github-link.vue_vue_type_script_setup_true_lang-93c9f7fd.js",revision:null},{url:"assets/GradientText-cf07173c.js",revision:null},{url:"assets/Grid-7b9f114b.js",revision:null},{url:"assets/index-00942509.js",revision:null},{url:"assets/index-02159ce9.js",revision:null},{url:"assets/index-02b200ea.css",revision:null},{url:"assets/index-10fd899b.js",revision:null},{url:"assets/index-11d6c627.js",revision:null},{url:"assets/index-128ecf03.js",revision:null},{url:"assets/index-12bd83b3.js",revision:null},{url:"assets/index-132609fe.js",revision:null},{url:"assets/index-16872094.css",revision:null},{url:"assets/index-1f59b73c.js",revision:null},{url:"assets/index-23a391e4.js",revision:null},{url:"assets/index-28c25f2a.js",revision:null},{url:"assets/index-2d2b3041.js",revision:null},{url:"assets/index-364af74a.js",revision:null},{url:"assets/index-396b6cc3.js",revision:null},{url:"assets/index-3a901f50.js",revision:null},{url:"assets/index-3fcfa78b.js",revision:null},{url:"assets/index-411692be.js",revision:null},{url:"assets/index-42a46323.js",revision:null},{url:"assets/index-45f99b6c.css",revision:null},{url:"assets/index-493fb005.js",revision:null},{url:"assets/index-4acadba2.js",revision:null},{url:"assets/index-4bbfab95.css",revision:null},{url:"assets/index-55496532.js",revision:null},{url:"assets/index-55ca48ef.js",revision:null},{url:"assets/index-584c10df.js",revision:null},{url:"assets/index-5d383116.js",revision:null},{url:"assets/index-5e875a41.js",revision:null},{url:"assets/index-5f2e6bac.js",revision:null},{url:"assets/index-679f0b9d.js",revision:null},{url:"assets/index-78f13339.js",revision:null},{url:"assets/index-7b70ed59.js",revision:null},{url:"assets/index-7b9f9acd.css",revision:null},{url:"assets/index-84aa8c3c.js",revision:null},{url:"assets/index-84d626bd.js",revision:null},{url:"assets/index-87598706.js",revision:null},{url:"assets/index-8b4c962c.js",revision:null},{url:"assets/index-8d63c30c.js",revision:null},{url:"assets/index-96102335.js",revision:null},{url:"assets/index-9bae5929.js",revision:null},{url:"assets/index-9c2553e8.js",revision:null},{url:"assets/index-a30648d3.js",revision:null},{url:"assets/index-a50be758.js",revision:null},{url:"assets/index-c01814a6.js",revision:null},{url:"assets/index-c64f4130.css",revision:null},{url:"assets/index-c81ffeb1.js",revision:null},{url:"assets/index-cce454bd.js",revision:null},{url:"assets/index-cf886583.js",revision:null},{url:"assets/index-d5b1de00.js",revision:null},{url:"assets/index-e157b757.css",revision:null},{url:"assets/index-e1e2dc5c.js",revision:null},{url:"assets/index-e273e5bf.css",revision:null},{url:"assets/index-e457b805.css",revision:null},{url:"assets/index-f3a306dd.css",revision:null},{url:"assets/index-f5d140a8.js",revision:null},{url:"assets/index-fda187be.js",revision:null},{url:"assets/index-fdba07d4.js",revision:null},{url:"assets/index-ff1afe47.js",revision:null},{url:"assets/index.vue_vue_type_script_setup_true_lang-55be0a1a.js",revision:null},{url:"assets/Input-6a1398c3.js",revision:null},{url:"assets/InputGroup-8e6b117a.js",revision:null},{url:"assets/loading-empty-wrapper.vue_vue_type_script_setup_true_lang-f6250944.js",revision:null},{url:"assets/next-frame-once-7035a838.js",revision:null},{url:"assets/Popconfirm-555116d2.js",revision:null},{url:"assets/Popover-5685c6cd.js",revision:null},{url:"assets/refresh-fe0221a8.js",revision:null},{url:"assets/rule-c8ff5fe7.js",revision:null},{url:"assets/Select-79792178.js",revision:null},{url:"assets/Space-ffcc384a.js",revision:null},{url:"assets/Suffix-b190ba40.js",revision:null},{url:"assets/Tabs-cbadc5e5.js",revision:null},{url:"assets/Tag-304ddb4e.js",revision:null},{url:"assets/use-compitable-10aafdd3.js",revision:null},{url:"assets/use-houdini-44716984.js",revision:null},{url:"assets/use-loading-7ff43736.js",revision:null},{url:"assets/use-merged-state-ecfc8bb7.js",revision:null},{url:"assets/web-site-link.vue_vue_type_script_setup_true_lang-5152c922.js",revision:null},{url:"index.html",revision:"979dbf32c814cf8546a9977781d17eff"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"logo.png",revision:"f6a36c14afc2f6451d5e0ccb9a45a108"},{url:"manifest.webmanifest",revision:"cf96aecde77f66dade83873ea1c780b9"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
