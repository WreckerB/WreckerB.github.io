import{c as X,bI as Z,b as l,e as $,g as w,x as f,d as v,u as G,k as H,z as ee,h as _,A as te,D as ne,ag as oe,j as N,n as ie,ax as I,s as M,X as S,r as P,bJ as A,i as ae,w as re,o as se,aE as x,aF as L,aL as K,bK as le,bL as ce,bM as J,aH as R,aI as s,aN as a,aG as g,aO as de,a0 as me,bp as j,aM as pe,aU as ue,aQ as Y,aJ as B,al as q,be as fe,q as _e}from"./index-cf92b53d.js";import{_ as D,a as F}from"./Grid-0b50a916.js";import{f as ge}from"./format-length-c9d165c6.js";import{u as he}from"./use-houdini-d5e4c79e.js";import{N as xe}from"./Tag-8a10139b.js";import{_ as ve}from"./DataTable-dd4d47d0.js";import{_ as be}from"./Space-5e0634ec.js";import"./get-slot-1efb97e5.js";import"./next-frame-once-7035a838.js";import"./Checkbox-30aa42cf.js";import"./use-merged-state-80a4cbe8.js";import"./Popover-bc7d3b05.js";import"./Suffix-06b061d4.js";import"./get-33a6e6ca.js";import"./cssr-57728736.js";import"./use-compitable-083e28bf.js";import"./Dropdown-529ba1cf.js";import"./Select-bfdb0c3d.js";import"./Input-eb57e327.js";const ye=t=>{const{textColor3:o,infoColor:e,errorColor:i,successColor:n,warningColor:c,textColor1:d,textColor2:m,railColor:p,fontWeightStrong:r,fontSize:u}=t;return Object.assign(Object.assign({},Z),{contentFontSize:u,titleFontWeight:r,circleBorder:`2px solid ${o}`,circleBorderInfo:`2px solid ${e}`,circleBorderError:`2px solid ${i}`,circleBorderSuccess:`2px solid ${n}`,circleBorderWarning:`2px solid ${c}`,iconColor:o,iconColorInfo:e,iconColorError:i,iconColorSuccess:n,iconColorWarning:c,titleTextColor:d,contentTextColor:m,metaTextColor:o,lineColor:p})},ze={name:"Timeline",common:X,self:ye},ke=ze,W=1.25,Ce=l("timeline",`
 position: relative;
 width: 100%;
 display: flex;
 flex-direction: column;
 line-height: ${W};
`,[$("horizontal",`
 flex-direction: row;
 `,[w(">",[l("timeline-item",`
 flex-shrink: 0;
 padding-right: 40px;
 `,[$("dashed-line-type",[w(">",[l("timeline-item-timeline",[f("line",`
 background-image: linear-gradient(90deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 10px 1px;
 `)])])]),w(">",[l("timeline-item-content",`
 margin-top: calc(var(--n-icon-size) + 12px);
 `,[w(">",[f("meta",`
 margin-top: 6px;
 margin-bottom: unset;
 `)])]),l("timeline-item-timeline",`
 width: 100%;
 height: calc(var(--n-icon-size) + 12px);
 `,[f("line",`
 left: var(--n-icon-size);
 top: calc(var(--n-icon-size) / 2 - 1px);
 right: 0px;
 width: unset;
 height: 2px;
 `)])])])])]),$("right-placement",[l("timeline-item",[l("timeline-item-content",`
 text-align: right;
 margin-right: calc(var(--n-icon-size) + 12px);
 `),l("timeline-item-timeline",`
 width: var(--n-icon-size);
 right: 0;
 `)])]),$("left-placement",[l("timeline-item",[l("timeline-item-content",`
 margin-left: calc(var(--n-icon-size) + 12px);
 `),l("timeline-item-timeline",`
 left: 0;
 `)])]),l("timeline-item",`
 position: relative;
 `,[w("&:last-child",[l("timeline-item-timeline",[f("line",`
 display: none;
 `)]),l("timeline-item-content",[f("meta",`
 margin-bottom: 0;
 `)])]),l("timeline-item-content",[f("title",`
 margin: var(--n-title-margin);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),f("content",`
 transition: color .3s var(--n-bezier);
 font-size: var(--n-content-font-size);
 color: var(--n-content-text-color);
 `),f("meta",`
 transition: color .3s var(--n-bezier);
 font-size: 12px;
 margin-top: 6px;
 margin-bottom: 20px;
 color: var(--n-meta-text-color);
 `)]),$("dashed-line-type",[l("timeline-item-timeline",[f("line",`
 --n-color-start: var(--n-line-color);
 transition: --n-color-start .3s var(--n-bezier);
 background-color: transparent;
 background-image: linear-gradient(180deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 1px 10px;
 `)])]),l("timeline-item-timeline",`
 width: calc(var(--n-icon-size) + 12px);
 position: absolute;
 top: calc(var(--n-title-font-size) * ${W} / 2 - var(--n-icon-size) / 2);
 height: 100%;
 `,[f("circle",`
 border: var(--n-circle-border);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 border-radius: var(--n-icon-size);
 box-sizing: border-box;
 `),f("icon",`
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 display: flex;
 align-items: center;
 justify-content: center;
 `),f("line",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 top: var(--n-icon-size);
 left: calc(var(--n-icon-size) / 2 - 1px);
 bottom: 0px;
 width: 2px;
 background-color: var(--n-line-color);
 `)])])]),$e=Object.assign(Object.assign({},H.props),{horizontal:Boolean,itemPlacement:{type:String,default:"left"},size:{type:String,default:"medium"},iconSize:Number}),Q=te("n-timeline"),we=v({name:"Timeline",props:$e,setup(t,{slots:o}){const{mergedClsPrefixRef:e}=G(t),i=H("Timeline","-timeline",Ce,ke,t,e);return ee(Q,{props:t,mergedThemeRef:i,mergedClsPrefixRef:e}),()=>{const{value:n}=e;return _("div",{class:[`${n}-timeline`,t.horizontal&&`${n}-timeline--horizontal`,`${n}-timeline--${t.size}-size`,!t.horizontal&&`${n}-timeline--${t.itemPlacement}-placement`]},o)}}}),Se={time:[String,Number],title:String,content:String,color:String,lineType:{type:String,default:"default"},type:{type:String,default:"default"}},Te=v({name:"TimelineItem",props:Se,setup(t){const o=ne(Q);o||oe("timeline-item","`n-timeline-item` must be placed inside `n-timeline`."),he();const{inlineThemeDisabled:e}=G(),i=N(()=>{const{props:{size:c,iconSize:d},mergedThemeRef:m}=o,{type:p}=t,{self:{titleTextColor:r,contentTextColor:u,metaTextColor:h,lineColor:b,titleFontWeight:z,contentFontSize:V,[S("iconSize",c)]:E,[S("titleMargin",c)]:k,[S("titleFontSize",c)]:C,[S("circleBorder",p)]:y,[S("iconColor",p)]:O},common:{cubicBezierEaseInOut:T}}=m.value;return{"--n-bezier":T,"--n-circle-border":y,"--n-icon-color":O,"--n-content-font-size":V,"--n-content-text-color":u,"--n-line-color":b,"--n-meta-text-color":h,"--n-title-font-size":C,"--n-title-font-weight":z,"--n-title-margin":k,"--n-title-text-color":r,"--n-icon-size":ge(d)||E}}),n=e?ie("timeline-item",N(()=>{const{props:{size:c,iconSize:d}}=o,{type:m}=t;return`${c[0]}${d||"a"}${m[0]}`}),i,o.props):void 0;return{mergedClsPrefix:o.mergedClsPrefixRef,cssVars:e?void 0:i,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){const{mergedClsPrefix:t,color:o,onRender:e,$slots:i}=this;return e==null||e(),_("div",{class:[`${t}-timeline-item`,this.themeClass,`${t}-timeline-item--${this.type}-type`,`${t}-timeline-item--${this.lineType}-line-type`],style:this.cssVars},_("div",{class:`${t}-timeline-item-timeline`},_("div",{class:`${t}-timeline-item-timeline__line`}),I(i.icon,n=>n?_("div",{class:`${t}-timeline-item-timeline__icon`,style:{color:o}},n):_("div",{class:`${t}-timeline-item-timeline__circle`,style:{borderColor:o}}))),_("div",{class:`${t}-timeline-item-content`},I(i.header,n=>n||this.title?_("div",{class:`${t}-timeline-item-content__title`},n||this.title):null),_("div",{class:`${t}-timeline-item-content__content`},M(i.default,()=>[this.content])),_("div",{class:`${t}-timeline-item-content__meta`},M(i.footer,()=>[this.time]))))}}),U=v({name:"CountTo",__name:"count-to",props:{startValue:{default:0},endValue:{default:2021},duration:{default:1500},autoplay:{type:Boolean,default:!0},decimals:{default:0},prefix:{default:""},suffix:{default:""},separator:{default:","},decimal:{default:"."},useEasing:{type:Boolean,default:!0},transition:{default:"linear"}},emits:["on-started","on-finished"],setup(t,{emit:o}){const e=t,i=P(e.startValue);let n=A(i);const c=N(()=>r(n.value)),d=P(!1);function m(){n=A(i,{disabled:d,duration:e.duration,onStarted:()=>o("on-started"),onFinished:()=>o("on-finished"),...e.useEasing?{transition:ce[e.transition]}:{}})}function p(){m(),i.value=e.endValue}function r(u){if(u!==0&&!u)return"";const{decimals:h,decimal:b,separator:z,suffix:V,prefix:E}=e;let k=Number(u).toFixed(h);k=String(k);const C=k.split(".");let y=C[0];const O=C.length>1?b+C[1]:"",T=/(\d+)(\d{3})/;if(z&&!le(z))for(;T.test(y);)y=y.replace(T,`$1${z}$2`);return E+y+O+V}return ae([()=>e.startValue,()=>e.endValue],()=>{e.autoplay&&p()}),re(()=>{i.value=e.startValue}),se(()=>{e.autoplay&&p()}),(u,h)=>(x(),L("span",null,K(c.value),1))}}),Be={class:"w-full h-360px py-12px"},Ne=g("h3",{class:"text-16px font-bold"},"Dashboard",-1),Pe=g("p",{class:"text-#aaa"},"Overview Of Lasted Month",-1),Le={class:"pt-32px text-24px font-bold"},Re=g("p",{class:"text-#aaa"},"Current Month Earnings",-1),Ve={class:"pt-32px text-24px font-bold"},Ee=g("p",{class:"text-#aaa"},"Current Month Sales",-1),Oe=v({name:"DashboardAnalysisTopCard",__name:"index",setup(t){const o=P({tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:["下载量","注册数"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:["06:00","08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00","24:00"]}],yAxis:[{type:"value"}],series:[{color:"#8e9dff",name:"下载量",type:"line",smooth:!0,stack:"Total",areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:.25,color:"#8e9dff"},{offset:1,color:"#fff"}]}},emphasis:{focus:"series"},data:[4623,6145,6268,6411,1890,4251,2978,3880,3606,4311]},{color:"#26deca",name:"注册数",type:"line",smooth:!0,stack:"Total",areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:.25,color:"#26deca"},{offset:1,color:"#fff"}]}},emphasis:{focus:"series"},data:[2208,2016,2916,4512,8281,2008,1963,2367,2956,678]}]}),{domRef:e}=J(o),i=P({tooltip:{trigger:"item"},legend:{bottom:"1%",left:"center",itemStyle:{borderWidth:0}},series:[{color:["#5da8ff","#8e9dff","#fedc69","#26deca"],name:"时间安排",type:"pie",radius:["45%","75%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:1},label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:"12"}},labelLine:{show:!1},data:[{value:20,name:"学习"},{value:10,name:"娱乐"},{value:30,name:"工作"},{value:40,name:"休息"}]}]}),{domRef:n}=J(i);return(c,d)=>{const m=U,p=me,r=j,u=D,h=F;return x(),R(h,{"x-gap":16,"y-gap":16,"item-responsive":!0},{default:s(()=>[a(u,{span:"0:24 640:24 1024:6"},{default:s(()=>[a(r,{bordered:!1,class:"rounded-8px shadow-sm"},{default:s(()=>[g("div",Be,[Ne,Pe,g("h3",Le,[a(m,{prefix:"$","start-value":0,"end-value":7754})]),Re,g("h3",Ve,[a(m,{"start-value":0,"end-value":1234})]),Ee,a(p,{class:"mt-24px whitespace-pre-wrap",type:"primary"},{default:s(()=>[de("Last Month Summary")]),_:1})])]),_:1})]),_:1}),a(u,{span:"0:24 640:24 1024:10"},{default:s(()=>[a(r,{bordered:!1,class:"rounded-8px shadow-sm"},{default:s(()=>[g("div",{ref_key:"lineRef",ref:e,class:"w-full h-360px"},null,512)]),_:1})]),_:1}),a(u,{span:"0:24 640:24 1024:8"},{default:s(()=>[a(r,{bordered:!1,class:"rounded-8px shadow-sm"},{default:s(()=>[g("div",{ref_key:"pieRef",ref:n,class:"w-full h-360px"},null,512)]),_:1})]),_:1})]),_:1})}}}),je=v({__name:"gradient-bg",props:{startColor:{default:"#56cdf3"},endColor:{default:"#719de3"}},setup(t){const o=t,e=N(()=>`linear-gradient(to bottom right, ${o.startColor}, ${o.endColor})`);return(i,n)=>(x(),L("div",{class:"p-16px rounded-8px text-white",style:ue({backgroundImage:e.value})},[pe(i.$slots,"default")],4))}}),De={class:"text-16px"},Fe={class:"flex justify-between pt-12px"},Ie=v({name:"DashboardAnalysisDataCard",__name:"index",setup(t){const o=[{id:"visit",title:"访问量",value:1e6,unit:"",colors:["#ec4786","#b955a4"],icon:"ant-design:bar-chart-outlined"},{id:"amount",title:"成交额",value:234567.89,unit:"$",colors:["#865ec0","#5144b4"],icon:"ant-design:money-collect-outlined"},{id:"download",title:"下载数",value:666666,unit:"",colors:["#56cdf3","#719de3"],icon:"carbon:document-download"},{id:"trade",title:"成交数",value:999999,unit:"",colors:["#fcbc25","#f68057"],icon:"ant-design:trademark-circle-outlined"}];return(e,i)=>{const n=fe,c=U,d=D,m=F,p=j;return x(),R(p,{bordered:!1,class:"h-full rounded-8px shadow-sm"},{default:s(()=>[a(m,{cols:"s:1 m:2 l:4",responsive:"screen","x-gap":16,"y-gap":16},{default:s(()=>[(x(),L(q,null,Y(o,r=>a(d,{key:r.id},{default:s(()=>[a(B(je),{class:"h-100px","start-color":r.colors[0],"end-color":r.colors[1]},{default:s(()=>[g("h3",De,K(r.title),1),g("div",Fe,[a(n,{icon:r.icon,class:"text-32px"},null,8,["icon"]),a(c,{prefix:r.unit,"start-value":1,"end-value":r.value,class:"text-30px text-white dark:text-dark"},null,8,["prefix","end-value"])])]),_:2},1032,["start-color","end-color"])]),_:2},1024)),64))]),_:1})]),_:1})}}}),Me=v({name:"DashboardAnalysisBottomPart",__name:"index",setup(t){const o=[{type:"default",title:"啊",content:"",time:"2021-10-10 20:46"},{type:"success",title:"成功",content:"哪里成功",time:"2021-10-10 20:46"},{type:"error",title:"错误",content:"哪里错误",time:"2021-10-10 20:46"},{type:"warning",title:"警告",content:"哪里警告",time:"2021-10-10 20:46"},{type:"info",title:"信息",content:"是的",time:"2021-10-10 20:46"}],e=[{title:"Name",key:"name"},{title:"Age",key:"age"},{title:"Address",key:"address"},{title:"Tags",key:"tags",render(n){return n.tags.map(d=>_(xe,{style:{marginRight:"6px"},type:"info"},{default:()=>d}))}}],i=[{key:0,name:"John Brown",age:32,address:"New York No. 1 Lake Park",tags:["nice","developer"]},{key:1,name:"Jim Green",age:42,address:"London No. 1 Lake Park",tags:["wow"]},{key:2,name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park",tags:["cool","teacher"]},{key:3,name:"Soybean",age:25,address:"China Shenzhen",tags:["handsome","programmer"]},{key:4,name:"John Brown",age:32,address:"New York No. 1 Lake Park",tags:["nice","developer"]},{key:5,name:"Jim Green",age:42,address:"London No. 1 Lake Park",tags:["wow"]},{key:6,name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park",tags:["cool","teacher"]}];return(n,c)=>{const d=Te,m=we,p=j,r=D,u=ve,h=F;return x(),R(h,{"x-gap":16,"y-gap":16,"item-responsive":!0},{default:s(()=>[a(r,{span:"0:24 640:24 1024:8"},{default:s(()=>[a(p,{title:"时间线",bordered:!1,class:"h-full rounded-8px shadow-sm"},{default:s(()=>[a(m,null,{default:s(()=>[(x(),L(q,null,Y(o,b=>a(d,_e({key:b.type},b),null,16)),64))]),_:1})]),_:1})]),_:1}),a(r,{span:"0:24 640:24 1024:16"},{default:s(()=>[a(p,{title:"表格",bordered:!1,class:"h-full rounded-8px shadow-sm"},{default:s(()=>[a(u,{size:"small",columns:e,data:i})]),_:1})]),_:1})]),_:1})}}}),st=v({__name:"index",setup(t){return(o,e)=>{const i=be;return x(),R(i,{vertical:!0,size:16},{default:s(()=>[a(B(Oe)),a(B(Ie)),a(B(Me))]),_:1})}}});export{st as default};
