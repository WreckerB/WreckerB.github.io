import{a as g,e as t,aB as oe,g as j,i as q,l as ne,m as re,d as y,o as se,q as Q,c as W,x as ie,bN as ae,h as p,bO as le,v as U,aN as h,aQ as f,aR as c,aP as M,bE as A,aW as b,aX as P,aU as N,aS as v,aO as X,aZ as Z,ax as ee}from"./index-f157eabb.js";import{u as ce}from"./use-compitable-10aafdd3.js";import{g as de,_ as pe}from"./Space-ffcc384a.js";import{N as be}from"./Tag-304ddb4e.js";function J(e,i="default",s=[]){const{children:a}=e;if(a!==null&&typeof a=="object"&&!Array.isArray(a)){const u=a[i];if(typeof u=="function")return u()}return s}const te="DESCRIPTION_ITEM_FLAG";function ue(e){return typeof e=="object"&&e&&!Array.isArray(e)?e.type&&e.type[te]:!1}const me=g([t("descriptions",{fontSize:"var(--n-font-size)"},[t("descriptions-separator",`
 display: inline-block;
 margin: 0 8px 0 2px;
 `),t("descriptions-table-wrapper",[t("descriptions-table",[t("descriptions-table-row",[t("descriptions-table-header",{padding:"var(--n-th-padding)"}),t("descriptions-table-content",{padding:"var(--n-td-padding)"})])])]),oe("bordered",[t("descriptions-table-wrapper",[t("descriptions-table",[t("descriptions-table-row",[g("&:last-child",[t("descriptions-table-content",{paddingBottom:0})])])])])]),j("left-label-placement",[t("descriptions-table-content",[g("> *",{verticalAlign:"top"})])]),j("left-label-align",[g("th",{textAlign:"left"})]),j("center-label-align",[g("th",{textAlign:"center"})]),j("right-label-align",[g("th",{textAlign:"right"})]),j("bordered",[t("descriptions-table-wrapper",`
 border-radius: var(--n-border-radius);
 overflow: hidden;
 background: var(--n-merged-td-color);
 border: 1px solid var(--n-merged-border-color);
 `,[t("descriptions-table",[t("descriptions-table-row",[g("&:not(:last-child)",[t("descriptions-table-content",{borderBottom:"1px solid var(--n-merged-border-color)"}),t("descriptions-table-header",{borderBottom:"1px solid var(--n-merged-border-color)"})]),t("descriptions-table-header",`
 font-weight: 400;
 background-clip: padding-box;
 background-color: var(--n-merged-th-color);
 `,[g("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})]),t("descriptions-table-content",[g("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})])])])])]),t("descriptions-header",`
 font-weight: var(--n-th-font-weight);
 font-size: 18px;
 transition: color .3s var(--n-bezier);
 line-height: var(--n-line-height);
 margin-bottom: 16px;
 color: var(--n-title-text-color);
 `),t("descriptions-table-wrapper",`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[t("descriptions-table",`
 width: 100%;
 border-collapse: separate;
 border-spacing: 0;
 box-sizing: border-box;
 `,[t("descriptions-table-row",`
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[t("descriptions-table-header",`
 font-weight: var(--n-th-font-weight);
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-th-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),t("descriptions-table-content",`
 vertical-align: top;
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-td-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[q("content",`
 transition: color .3s var(--n-bezier);
 display: inline-block;
 color: var(--n-td-text-color);
 `)]),q("label",`
 font-weight: var(--n-th-font-weight);
 transition: color .3s var(--n-bezier);
 display: inline-block;
 margin-right: 14px;
 color: var(--n-th-text-color);
 `)])])])]),t("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color);
 --n-merged-td-color: var(--n-td-color);
 --n-merged-border-color: var(--n-border-color);
 `),ne(t("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-modal);
 --n-merged-td-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),re(t("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-popover);
 --n-merged-td-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),ge=Object.assign(Object.assign({},Q.props),{title:String,column:{type:Number,default:3},columns:Number,labelPlacement:{type:String,default:"top"},labelAlign:{type:String,default:"left"},separator:{type:String,default:":"},size:{type:String,default:"medium"},bordered:Boolean,labelStyle:[Object,String],contentStyle:[Object,String]}),H=y({name:"Descriptions",props:ge,setup(e){const{mergedClsPrefixRef:i,inlineThemeDisabled:s}=se(e),a=Q("Descriptions","-descriptions",me,le,e,i),u=W(()=>{const{size:n,bordered:l}=e,{common:{cubicBezierEaseInOut:_},self:{titleTextColor:r,thColor:T,thColorModal:w,thColorPopover:$,thTextColor:D,thFontWeight:G,tdTextColor:O,tdColor:o,tdColorModal:C,tdColorPopover:B,borderColor:m,borderColorModal:x,borderColorPopover:E,borderRadius:V,lineHeight:S,[U("fontSize",n)]:k,[U(l?"thPaddingBordered":"thPadding",n)]:z,[U(l?"tdPaddingBordered":"tdPadding",n)]:I}}=a.value;return{"--n-title-text-color":r,"--n-th-padding":z,"--n-td-padding":I,"--n-font-size":k,"--n-bezier":_,"--n-th-font-weight":G,"--n-line-height":S,"--n-th-text-color":D,"--n-td-text-color":O,"--n-th-color":T,"--n-th-color-modal":w,"--n-th-color-popover":$,"--n-td-color":o,"--n-td-color-modal":C,"--n-td-color-popover":B,"--n-border-radius":V,"--n-border-color":m,"--n-border-color-modal":x,"--n-border-color-popover":E}}),d=s?ie("descriptions",W(()=>{let n="";const{size:l,bordered:_}=e;return _&&(n+="a"),n+=l[0],n}),u,e):void 0;return{mergedClsPrefix:i,cssVars:s?void 0:u,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender,compitableColumn:ce(e,["columns","column"]),inlineThemeDisabled:s}},render(){const e=this.$slots.default,i=e?ae(e()):[];i.length;const{compitableColumn:s,labelPlacement:a,labelAlign:u,size:d,bordered:n,title:l,cssVars:_,mergedClsPrefix:r,separator:T,onRender:w}=this;w==null||w();const $=i.filter(o=>ue(o)),D={span:0,row:[],secondRow:[],rows:[]},O=$.reduce((o,C,B)=>{const m=C.props||{},x=$.length-1===B,E=["label"in m?m.label:J(C,"label")],V=[J(C)],S=m.span||1,k=o.span;o.span+=S;const z=m.labelStyle||m["label-style"]||this.labelStyle,I=m.contentStyle||m["content-style"]||this.contentStyle;if(a==="left")n?o.row.push(p("th",{class:`${r}-descriptions-table-header`,colspan:1,style:z},E),p("td",{class:`${r}-descriptions-table-content`,colspan:x?(s-k)*2+1:S*2-1,style:I},V)):o.row.push(p("td",{class:`${r}-descriptions-table-content`,colspan:x?(s-k)*2:S*2},p("span",{class:`${r}-descriptions-table-content__label`,style:z},[...E,T&&p("span",{class:`${r}-descriptions-separator`},T)]),p("span",{class:`${r}-descriptions-table-content__content`,style:I},V)));else{const Y=x?(s-k)*2:S*2;o.row.push(p("th",{class:`${r}-descriptions-table-header`,colspan:Y,style:z},E)),o.secondRow.push(p("td",{class:`${r}-descriptions-table-content`,colspan:Y,style:I},V))}return(o.span>=s||x)&&(o.span=0,o.row.length&&(o.rows.push(o.row),o.row=[]),a!=="left"&&o.secondRow.length&&(o.rows.push(o.secondRow),o.secondRow=[])),o},D).rows.map(o=>p("tr",{class:`${r}-descriptions-table-row`},o));return p("div",{style:_,class:[`${r}-descriptions`,this.themeClass,`${r}-descriptions--${a}-label-placement`,`${r}-descriptions--${u}-label-align`,`${r}-descriptions--${d}-size`,n&&`${r}-descriptions--bordered`]},l||this.$slots.header?p("div",{class:`${r}-descriptions-header`},l||de(this,"header")):null,p("div",{class:`${r}-descriptions-table-wrapper`},p("table",{class:`${r}-descriptions-table`},p("tbody",null,O))))}}),he={label:String,span:{type:Number,default:1},labelStyle:[Object,String],contentStyle:[Object,String]},L=y({name:"DescriptionsItem",[te]:!0,props:he,render(){return null}}),ve=M("p",{class:"leading-24px"}," Soybean Admin 是一个基于 Vue3、Vite、Naive UI、TypeScript 的中后台解决方案，它使用了最新的前端技术栈，并提炼了典型的业务模型，页面，包括二次封装组件、动态菜单、权限校验、粒子化权限控制等功能，它可以帮助你快速搭建企业级中后台项目，相信不管是从新技术使用还是其他方面，都能帮助到你。 ",-1),_e=y({name:"ProjectIntroduction",__name:"project-introduction",setup(e){return(i,s)=>{const a=A;return h(),f(a,{title:"关于",bordered:!1,size:"large",class:"rounded-8px shadow-sm"},{default:c(()=>[ve]),_:1})}}}),fe="soybean-admin",ye="0.10.3",xe="A fresh and elegant admin template, based on Vue3、Vite3、TypeScript、NaiveUI and UnoCSS. 一个基于Vue3、Vite3、TypeScript、NaiveUI and UnoCSS的清新优雅的中后台模版。",Se={name:"Soybean",email:"soybeanjs@outlook.com",url:"https://github.com/soybeanjs"},we="MIT",Ce="https://github.com/honghuangdc/soybean-admin",Ee={url:"https://github.com/honghuangdc/soybean-admin.git"},Ve={url:"https://github.com/honghuangdc/soybean-admin/issues"},ke=["Vue","Vue3","admin","admin-template","vue-admin","vue-admin-template","Vite3","Vite","vite-admin","TypeScript","TS","NaiveUI","naive-ui","naive-admin","NaiveUI-Admin","naive-ui-admin","UnoCSS"],ze={dev:"cross-env VITE_HASH_ROUTE=Y VITE_SERVICE_ENV=dev vite","dev:test":"cross-env VITE_SERVICE_ENV=test vite","dev:prod":"cross-env VITE_SERVICE_ENV=prod vite",build:"npm run typecheck && cross-env VITE_HASH_ROUTE=Y VITE_SERVICE_ENV=prod vite build","build:dev":"npm run typecheck && cross-env VITE_SERVICE_ENV=dev vite build","build:test":"npm run typecheck && cross-env VITE_SERVICE_ENV=test vite build","build:vercel":"cross-env VITE_HASH_ROUTE=Y VITE_VERCEL=Y vite build",preview:"vite preview",typecheck:"vue-tsc --noEmit --skipLibCheck",lint:"eslint . --fix",format:"soy prettier-write",commit:"soy git-commit",cleanup:"soy cleanup","update-pkg":"soy ncu",release:"soy release",tsx:"tsx",logo:"tsx ./scripts/logo.ts",prepare:"soy init-simple-git-hooks"},Ie={"@antv/data-set":"0.11.8","@antv/g2":"4.2.10","@better-scroll/core":"2.5.1","@soybeanjs/vue-materials":"0.2.0","@vueuse/core":"10.3.0",axios:"1.4.0",clipboard:"2.0.11",colord:"2.9.3","crypto-js":"4.1.1",dayjs:"1.11.9",echarts:"5.4.3","form-data":"4.0.0","lodash-es":"4.17.21","naive-ui":"2.34.4",pinia:"2.1.6","print-js":"1.6.0",qs:"6.11.2","socket.io-client":"4.7.2",swiper:"10.1.0","ua-parser-js":"1.0.35",vditor:"3.9.4",vue:"3.3.4","vue-i18n":"9.2.2","vue-router":"4.2.4",vuedraggable:"4.1.0",wangeditor:"4.7.15",xgplayer:"3.0.7"},je={"@amap/amap-jsapi-types":"0.0.13","@iconify/json":"2.2.97","@iconify/vue":"4.1.1","@soybeanjs/cli":"0.6.6","@soybeanjs/vite-plugin-vue-page-route":"0.0.7","@types/bmapgl":"0.0.7","@types/crypto-js":"4.1.1","@types/node":"20.4.6","@types/qs":"6.9.7","@types/ua-parser-js":"0.7.36","@unocss/preset-uno":"0.54.1","@unocss/transformer-directives":"0.54.1","@unocss/vite":"0.54.1","@vitejs/plugin-vue":"4.2.3","@vitejs/plugin-vue-jsx":"3.0.1","cross-env":"7.0.3",eslint:"8.46.0","eslint-config-soybeanjs":"0.5.4",mockjs:"1.1.0","rollup-plugin-visualizer":"5.9.2",sass:"1.64.2","simple-git-hooks":"2.9.0",tsx:"3.12.7",typescript:"5.1.6","unplugin-icons":"0.16.5","unplugin-vue-components":"0.25.1",vite:"4.4.8","vite-plugin-compression":"0.5.1","vite-plugin-mock":"2.9.8","vite-plugin-progress":"0.0.7","vite-plugin-pwa":"0.16.4","vite-plugin-svg-icons":"2.0.1","vite-plugin-vue-devtools":"0.5.1","vue-tsc":"1.8.8"},Te={patchedDependencies:{"mockjs@1.1.0":"patches/mockjs@1.1.0.patch"}},$e={useSoybeanToken:!0},Re={name:fe,version:ye,description:xe,author:Se,license:we,homepage:Ce,repository:Ee,bugs:Ve,keywords:ke,scripts:ze,dependencies:Ie,devDependencies:je,pnpm:Te,"simple-git-hooks":{"commit-msg":"pnpm soy git-commit-verify","pre-commit":"pnpm typecheck && pnpm soy lint-staged"},soybean:$e},R=Re;function K(e){const[i,s]=e;return{name:i,version:s}}const F={name:R.name,version:R.version,dependencies:Object.entries(R.dependencies).map(e=>K(e)),devDependencies:Object.entries(R.devDependencies).map(e=>K(e))},Pe=M("a",{class:"text-primary",href:"https://github.com/honghuangdc/soybean-admin",target:"_blank"},"Github地址",-1),Ne=M("a",{class:"text-primary",href:"https://soybean.pro",target:"_blank"},"预览地址",-1),Ae=y({name:"ProjectInfo",__name:"project-info",setup(e){const{version:i}=F,s="2023-08-06 12:16:32";return(a,u)=>{const d=be,n=L,l=H,_=A;return h(),f(_,{title:"项目信息",bordered:!1,size:"small",class:"rounded-8px shadow-sm"},{default:c(()=>[b(l,{"label-placement":"left",bordered:"",size:"small",column:2},{default:c(()=>[b(n,{label:"版本"},{default:c(()=>[b(d,{type:"primary"},{default:c(()=>[P(N(v(i)),1)]),_:1})]),_:1}),b(n,{label:"最后编译时间"},{default:c(()=>[b(d,{type:"primary"},{default:c(()=>[P(N(v(s)),1)]),_:1})]),_:1}),b(n,{label:"Github地址"},{default:c(()=>[Pe]),_:1}),b(n,{label:"预览地址"},{default:c(()=>[Ne]),_:1})]),_:1})]),_:1})}}}),De=y({name:"ProDependency",__name:"pro-dependency",setup(e){const{dependencies:i}=F;return(s,a)=>{const u=L,d=H,n=A;return h(),f(n,{title:"生产环境依赖",bordered:!1,size:"small",class:"rounded-8px shadow-sm"},{default:c(()=>[b(d,{"label-placement":"left",bordered:"",size:"small"},{default:c(()=>[(h(!0),X(ee,null,Z(v(i),l=>(h(),f(u,{key:l.name,label:l.name},{default:c(()=>[P(N(l.version),1)]),_:2},1032,["label"]))),128))]),_:1})]),_:1})}}}),Oe=y({name:"DevDependency",__name:"dev-dependency",setup(e){const{devDependencies:i}=F;return(s,a)=>{const u=L,d=H,n=A;return h(),f(n,{title:"开发环境依赖",bordered:!1,size:"small",class:"rounded-8px shadow-sm"},{default:c(()=>[b(d,{"label-placement":"left",bordered:"",size:"small"},{default:c(()=>[(h(!0),X(ee,null,Z(v(i),l=>(h(),f(u,{key:l.name,label:l.name},{default:c(()=>[P(N(l.version),1)]),_:2},1032,["label"]))),128))]),_:1})]),_:1})}}}),Le=y({__name:"index",setup(e){return(i,s)=>{const a=pe;return h(),f(a,{vertical:!0,size:16},{default:c(()=>[b(v(_e)),b(v(Ae)),b(v(De)),b(v(Oe))]),_:1})}}});export{Le as default};
