import{d as y,aA as b,b6 as g,bC as k,i as R,bD as w,aE as t,aF as N,aN as n,aI as e,aG as p,aO as s,aL as z,aJ as o,Z as m,aH as r,aR as c,bE as B,a0 as C,bp as D}from"./index-6eb1e305.js";import{_ as I}from"./GradientText-3f79272d.js";import{_ as P}from"./Select-5a1e35ac.js";import{_ as V}from"./Space-56246c0e.js";import"./use-houdini-025997d2.js";import"./format-length-c9d165c6.js";import"./use-merged-state-e86510c2.js";import"./Suffix-bc77589f.js";import"./use-compitable-a1b9336a.js";import"./Tag-c487f4c0.js";import"./cssr-8ea18ec9.js";import"./Popover-85f0caab.js";import"./get-eb2a7093.js";import"./next-frame-once-7035a838.js";const A={class:"h-full"},E={class:"pb-12px"},S={class:"py-12px"},U={class:"py-12px"},ee=y({__name:"index",setup(O){const d=b(),i=g(),{hasPermission:_}=k(),f=B;return R(()=>i.userInfo.userRole,async()=>{d.reloadPage()}),($,F)=>{const u=I,h=P,a=C,v=V,x=D,l=w("permission");return t(),N("div",A,[n(x,{title:"权限切换",bordered:!1,class:"h-full rounded-8px shadow-sm"},{default:e(()=>[p("div",E,[n(u,{type:"primary",size:20},{default:e(()=>[s("当前用户的权限："+z(o(i).userInfo.userRole),1)]),_:1})]),n(h,{value:o(i).userInfo.userRole,class:"w-120px",size:"small",options:o(f),"onUpdate:value":o(i).updateUserRole},null,8,["value","options","onUpdate:value"]),p("div",S,[n(u,{type:"primary",size:20},{default:e(()=>[s("权限指令 v-permission")]),_:1})]),p("div",null,[m((t(),r(a,{class:"mr-12px"},{default:e(()=>[s("super可见")]),_:1})),[[l,"super"]]),m((t(),r(a,{class:"mr-12px"},{default:e(()=>[s("admin可见")]),_:1})),[[l,"admin"]]),m((t(),r(a,null,{default:e(()=>[s("admin和test可见")]),_:1})),[[l,["admin","user"]]])]),p("div",U,[n(u,{type:"primary",size:20},{default:e(()=>[s("权限函数 hasPermission")]),_:1})]),n(v,null,{default:e(()=>[o(_)("super")?(t(),r(a,{key:0},{default:e(()=>[s("super可见")]),_:1})):c("",!0),o(_)("admin")?(t(),r(a,{key:1},{default:e(()=>[s("admin可见")]),_:1})):c("",!0),o(_)(["admin","user"])?(t(),r(a,{key:2},{default:e(()=>[s("admin和user可见")]),_:1})):c("",!0)]),_:1})]),_:1})])}}});export{ee as default};
