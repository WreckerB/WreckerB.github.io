import{_ as r,r as c,o as p,c as u,a as e,b as _,w as b,d,e as i,p as h,f as m}from"./index.86368fe2.js";const g="/assets/buyee_logo.4af056cf.png",v="/assets/erocate_logo.620170d3.png",f="/assets/keepa_logo.08a583db.svg";const y={name:"game_shop_tool",methods:{buyee_search(){const t=document.getElementById("getBuyeeInputText").value,a="https://buyee.jp/item/search/query/"+t+"/category/2084006448?lang=ja";t.replace(/(^\s*)|(\s*$)/g,"")!==""&&window.open(a)},keepa_search(){const t=document.getElementById("getKeepaInputText").value,a="https://keepa.com/#!product/5-"+t;t.replace(/(^\s*)|(\s*$)/g,"")!==""&&window.open(a)}}},o=t=>(h("data-v-b278b38b"),t=t(),m(),t),k=o(()=>e("br",null,null,-1)),x=o(()=>e("br",null,null,-1)),I=o(()=>e("a",{href:"https://buyee.jp/",target:"_blank"},[e("img",{alt:"Buyee",src:g,width:"125",height:"36"})],-1)),w=o(()=>e("br",null,null,-1)),T=o(()=>e("input",{type:"text",value:"",id:"getBuyeeInputText",placeholder:"\u6309\u540D\u79F0\u641C\u7D22",autocomplete:"off",required:""},null,-1)),B=d('<br data-v-b278b38b><br data-v-b278b38b><a href="https://erocate.com" target="_blank" data-v-b278b38b><img alt="erocate.com" src="'+v+'" width="176" height="21" data-v-b278b38b></a><br data-v-b278b38b><br data-v-b278b38b><div class="keepa" data-v-b278b38b><a href="https://keepa.com/#!" target="_blank" data-v-b278b38b><img alt="keepa" src="'+f+'" width="195" height="56" data-v-b278b38b></a></div>',6),N=o(()=>e("input",{type:"text",value:"",id:"getKeepaInputText",placeholder:"\u6309ASIN\u641C\u7D22",autocomplete:"off",required:""},null,-1));function S(t,a,C,V,j,s){const l=c("router-link");return p(),u("div",null,[e("button",null,[_(l,{to:"/"},{default:b(()=>[i("\u8FD4\u56DE\u4E3B\u9875")]),_:1})]),k,x,I,w,e("form",null,[T,e("input",{type:"submit",value:"\u641C\u7D22",onClick:a[0]||(a[0]=(...n)=>s.buyee_search&&s.buyee_search(...n))})]),B,e("form",null,[N,e("input",{type:"submit",value:"\u641C\u7D22",onClick:a[1]||(a[1]=(...n)=>s.keepa_search&&s.keepa_search(...n))})])])}const E=r(y,[["render",S],["__scopeId","data-v-b278b38b"]]);export{E as default};
