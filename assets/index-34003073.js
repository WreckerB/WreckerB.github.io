import{d as h,r as i,aN as f,aO as g,aW as e,aR as p,aX as d,bf as y,ae as k,a$ as x,b0 as w,aP as l}from"./index-65cd1dbd.js";import{_ as I}from"./Input-f2d35888.js";import{_ as V}from"./InputGroup-5b615c43.js";import{_ as N}from"./plugin-vueexport-helper-c27b6911.js";import"./Suffix-bf384742.js";import"./use-merged-state-475602c1.js";const B="/assets/buyee-logo-4af056cf.png",C="/assets/erocate-logo-620170d3.png",S="/assets/keepa-logo-08a583db.svg",b=o=>(x("data-v-3b7abe32"),o=o(),w(),o),j=b(()=>l("a",{href:"https://buyee.jp/",target:"_blank"},[l("img",{alt:"Buyee",src:B,width:"125",height:"36"})],-1)),T=b(()=>l("br",null,null,-1)),$=y('<br data-v-3b7abe32><br data-v-3b7abe32><a href="https://erocate.com" target="_blank" data-v-3b7abe32><img alt="erocate.com" src="'+C+'" width="176" height="21" data-v-3b7abe32></a><br data-v-3b7abe32><br data-v-3b7abe32><div class="keepa" data-v-3b7abe32><a href="https://keepa.com/#!" target="_blank" data-v-3b7abe32><img alt="keepa" src="'+S+'" width="195" height="56" data-v-3b7abe32></a></div>',6),U=h({__name:"index",setup(o){const a=i(""),t=i("");function m(){const n=`https://buyee.jp/item/search/query/${a.value}/category/2084006448?lang=ja`;a.value.trim()!==""&&(a.value="",window.open(n))}function v(){const n=`https://keepa.com/#!product/5-${t.value}`;t.value.trim()!==""&&(t.value="",window.open(n))}return(n,s)=>{const u=I,r=k,c=V;return f(),g("div",null,[j,T,e(c,null,{default:p(()=>[e(u,{value:a.value,"onUpdate:value":s[0]||(s[0]=_=>a.value=_),style:{width:"250px"}},null,8,["value"]),e(r,{type:"primary",onClick:m},{default:p(()=>[d("搜索")]),_:1})]),_:1}),$,e(c,null,{default:p(()=>[e(u,{value:t.value,"onUpdate:value":s[1]||(s[1]=_=>t.value=_),style:{width:"250px"}},null,8,["value"]),e(r,{type:"primary",onClick:v},{default:p(()=>[d("搜索")]),_:1})]),_:1})])}}});const X=N(U,[["__scopeId","data-v-3b7abe32"]]);export{X as default};
