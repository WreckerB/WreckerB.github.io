import{_ as N}from"./loading-empty-wrapper.vue_vue_type_script_setup_true_lang-51264715.js";import{b3 as h,d as b,r as C,z as L,aN as S,aO as A,aW as e,aR as o,aS as r,ae as u,aX as c,bE as B}from"./index-26b48c19.js";import{N as D}from"./Popconfirm-763fbf76.js";import{_ as T}from"./DataTable-09da02b7.js";import{_}from"./Space-2adcac89.js";import"./use-compitable-575d9740.js";import"./Popover-b21f89fd.js";import"./Suffix-bac39295.js";import"./get-da190c42.js";import"./cssr-279e3d11.js";import"./format-length-c9d165c6.js";import"./use-merged-state-6f779b6e.js";import"./next-frame-once-7035a838.js";import"./Checkbox-be173c66.js";import"./Dropdown-e30ba6e8.js";import"./Select-f4478342.js";import"./Tag-61c02488.js";import"./Input-181d24bb.js";function w(s,t=0){const n=s-t;return Math.floor(Math.random()*n+t)}function z(s=!1,t=!1){const{bool:n,setTrue:l,setFalse:d}=h(s),{bool:m,setBool:p}=h(t);return{loading:n,startLoading:l,endLoading:d,empty:m,setEmpty:p}}const F={class:"h-full overflow-hidden"},te=b({__name:"index",setup(s){const{loading:t,startLoading:n,endLoading:l,empty:d,setEmpty:m}=z(),p=[{title:"Name",key:"name",align:"center"},{title:"Age",key:"age",align:"center"},{title:"Address",key:"address",align:"center"},{key:"action",title:"Action",align:"center",render:a=>e(_,{justify:"center"},{default:()=>[e(u,{size:"small",onClick:()=>{a.name}},{default:()=>[c("编辑")]}),e(D,{onPositiveClick:()=>{a.name}},{default:()=>"确认删除",trigger:()=>e(u,{size:"small"},{default:()=>[c("删除")]})})]})}],i=C([]);function y(){return Array(100).fill(1).map((a,g)=>({name:`Name${g}`,age:w(30,20),address:"中国"}))}function f(){n(),setTimeout(()=>{i.value=y(),l(),m(!i.value.length)},1e3)}function k(){n(),setTimeout(()=>{i.value=[],l(),m(!i.value.length)},1e3)}function M(a){}function $(a){}return L(()=>{f()}),(a,g)=>{const v=T,x=N,E=B;return S(),A("div",F,[e(E,{title:"表格",bordered:!1,class:"h-full rounded-8px shadow-sm"},{default:o(()=>[e(r(_),{vertical:!0},{default:o(()=>[e(r(_),null,{default:o(()=>[e(r(u),{onClick:f},{default:o(()=>[c("有数据")]),_:1}),e(r(u),{onClick:k},{default:o(()=>[c("空数据")]),_:1})]),_:1}),e(x,{class:"h-480px",loading:r(t),empty:r(d)},{default:o(()=>[e(v,{columns:p,data:i.value,"flex-height":!0,class:"h-480px"},null,8,["data"])]),_:1},8,["loading","empty"])]),_:1})]),_:1})])}}});export{te as default};