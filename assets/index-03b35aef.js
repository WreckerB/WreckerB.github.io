import{d as T,h as d,r as L,c as y,w as ue,n as nt,t as be,a as w,b as wt,e as R,f as $n,g as j,i as z,u as zn,N as Io,T as Sn,j as Fo,k as Ze,l as Rn,m as Mn,o as Fe,p as ve,q as de,s as Bn,v as we,x as Ue,y as Ao,z as st,A as Ye,B as oo,C as Dt,D as Te,V as In,E as no,F as Fn,G as Pt,H as An,I as ro,L as Po,J as Ct,K as Et,M as To,O as Ft,P as Do,Q as Pn,R as Tn,S as Ce,U as Eo,W as Ee,X as Me,Y as He,Z as qe,_ as Ie,$ as tt,a0 as Xe,a1 as rt,a2 as at,a3 as xt,a4 as Wt,a5 as qt,a6 as Xt,a7 as Dn,a8 as Ho,a9 as En,aa as Hn,ab as lt,ac as Lo,ad as oe,ae as Be,af as ao,ag as Ln,ah as Un,ai as Vn,aj as Nn,ak as Yt,al as On,am as lo,an as jn,ao as Kn,ap as Wn,aq as qn,ar as Xn,as as Yn,at as Zn,au as Gn,av as Jn,aw as ot,ax as Z,ay as Zt,az as Ut,aA as io,aB as et,aC as Qn,aD as er,aE as Co,aF as Vt,aG as Re,aH as tr,aI as or,aJ as ge,aK as X,aL as nr,aM as rr,aN as p,aO as N,aP as M,aQ as H,aR as b,aS as l,aT as le,aU as Y,aV as it,aW as u,aX as se,aY as K,aZ as $e,a_ as ce,a$ as Uo,b0 as Vo,b1 as ke,b2 as No,b3 as kt,b4 as ar,b5 as Oo,b6 as lr,b7 as ir,b8 as so,b9 as sr,ba as ct,bb as cr,bc as dr,bd as Rt,be as ur,bf as jo,bg as Ge,bh as $t,bi as Gt,bj as co,bk as hr,bl as mr,bm as Ko,bn as pr,bo as vr,bp as ko,bq as $o,br as uo,bs as fr,bt as br,bu as gr,bv as _r,bw as Wo,bx as xr,by as yr,bz as wr}from"./index-e68db7c1.js";import{_ as qo,a as Cr,b as kr}from"./refresh-0304c3be.js";import{_ as dt,a as $r,b as zr,c as Sr}from"./dark-mode-switch.vue_vue_type_script_setup_true_lang-8d04995e.js";import{u as Le}from"./use-merged-state-cb779f60.js";import{_ as ut}from"./Space-0c554f5f.js";import{C as Rr,B as Mr,_ as Br}from"./index.vue_vue_type_script_setup_true_lang-21a24e59.js";import{_ as zt,a as ho,b as Ir}from"./Dropdown-59b4f8ac.js";import{_ as Ve}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as Fr}from"./GradientText-5f09fe2d.js";import{_ as Xo,a as Yo}from"./Grid-ab41e8c0.js";import{_ as Zo,a as Go}from"./Tabs-b402519f.js";import{_ as Jo}from"./Input-7f17d384.js";import{_ as Qo}from"./InputGroup-5f9a1e55.js";import{u as Ar}from"./Suffix-c4064a6c.js";import{u as Jt,V as Pr,a as Tr,b as Dr,_ as Er,c as Hr}from"./Popover-33a13581.js";import{g as Lr,c as Ur,_ as en}from"./Select-65357622.js";import{f as Tt}from"./format-length-c9d165c6.js";import{u as Vr}from"./use-compitable-bf6ea2eb.js";/* empty css                                                         */import{_ as Nr,a as Or,b as jr,c as Kr}from"./avatar-dd9a776c.js";import{_ as Wr}from"./loading-empty-wrapper.vue_vue_type_script_setup_true_lang-4c7560b0.js";import{t as qr,N as Xr}from"./Tag-4502335f.js";import{u as Yr}from"./use-loading-d72b73c2.js";import"./Add-ae2e1dac.js";import"./use-houdini-3e8a8971.js";import"./next-frame-once-7035a838.js";import"./cssr-275d075d.js";import"./get-cc89556c.js";function Zr(e){return e.nodeType===9?null:e.parentNode}function tn(e){if(e===null)return null;const t=Zr(e);if(t===null)return null;if(t.nodeType===9)return document.documentElement;if(t.nodeType===1){const{overflow:o,overflowX:n,overflowY:r}=getComputedStyle(t);if(/(auto|scroll|overlay)/.test(o+r+n))return t}return tn(t)}function Gr(e){return typeof e=="string"?document.querySelector(e):typeof e=="function"?e():e}function on(e,t,o){t/=100,o/=100;const n=t*Math.min(o,1-o)+o;return[e,n?(2-2*o/n)*100:0,n*100]}function At(e,t,o){t/=100,o/=100;const n=o-o*t/2,r=Math.min(n,1-n);return[e,r?(o-n)/r*100:0,n*100]}function De(e,t,o){t/=100,o/=100;let n=(r,a=(r+e/60)%6)=>o-o*t*Math.max(Math.min(a,4-a,1),0);return[n(5)*255,n(3)*255,n(1)*255]}function Qt(e,t,o){e/=255,t/=255,o/=255;let n=Math.max(e,t,o),r=n-Math.min(e,t,o),a=r&&(n==e?(t-o)/r:n==t?2+(o-e)/r:4+(e-t)/r);return[60*(a<0?a+6:a),n&&r/n*100,n*100]}function eo(e,t,o){e/=255,t/=255,o/=255;let n=Math.max(e,t,o),r=n-Math.min(e,t,o),a=1-Math.abs(n+n-r-1),i=r&&(n==e?(t-o)/r:n==t?2+(o-e)/r:4+(e-t)/r);return[60*(i<0?i+6:i),a?r/a*100:0,(n+n-r)*50]}function to(e,t,o){t/=100,o/=100;let n=t*Math.min(o,1-o),r=(a,i=(a+e/30)%12)=>o-n*Math.max(Math.min(i-3,9-i,1),-1);return[r(0)*255,r(8)*255,r(4)*255]}function zo(e){return e.nodeName==="#document"}const Jr=T({name:"ChevronDownFilled",render(){return d("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),So=T({name:"SlotMachineNumber",props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],required:!0},oldOriginalNumber:{type:Number,default:void 0},newOriginalNumber:{type:Number,default:void 0}},setup(e){const t=L(null),o=L(e.value),n=L(e.value),r=L("up"),a=L(!1),i=y(()=>a.value?`${e.clsPrefix}-base-slot-machine-current-number--${r.value}-scroll`:null),s=y(()=>a.value?`${e.clsPrefix}-base-slot-machine-old-number--${r.value}-scroll`:null);ue(be(e,"value"),(f,m)=>{o.value=m,n.value=f,nt(c)});function c(){const f=e.newOriginalNumber,m=e.oldOriginalNumber;m===void 0||f===void 0||(f>m?v("up"):m>f&&v("down"))}function v(f){r.value=f,a.value=!1,nt(()=>{var m;(m=t.value)===null||m===void 0||m.offsetWidth,a.value=!0})}return()=>{const{clsPrefix:f}=e;return d("span",{ref:t,class:`${f}-base-slot-machine-number`},o.value!==null?d("span",{class:[`${f}-base-slot-machine-old-number ${f}-base-slot-machine-old-number--top`,s.value]},o.value):null,d("span",{class:[`${f}-base-slot-machine-current-number`,i.value]},d("span",{ref:"numberWrapper",class:[`${f}-base-slot-machine-current-number__inner`,typeof e.value!="number"&&`${f}-base-slot-machine-current-number__inner--not-number`]},n.value)),o.value!==null?d("span",{class:[`${f}-base-slot-machine-old-number ${f}-base-slot-machine-old-number--bottom`,s.value]},o.value):null)}}}),{cubicBezierEaseOut:Je}=wt;function Qr({duration:e=".2s"}={}){return[w("&.fade-up-width-expand-transition-leave-active",{transition:`
 opacity ${e} ${Je},
 max-width ${e} ${Je},
 transform ${e} ${Je}
 `}),w("&.fade-up-width-expand-transition-enter-active",{transition:`
 opacity ${e} ${Je},
 max-width ${e} ${Je},
 transform ${e} ${Je}
 `}),w("&.fade-up-width-expand-transition-enter-to",{opacity:1,transform:"translateX(0) translateY(0)"}),w("&.fade-up-width-expand-transition-enter-from",{maxWidth:"0 !important",opacity:0,transform:"translateY(60%)"}),w("&.fade-up-width-expand-transition-leave-from",{opacity:1,transform:"translateY(0)"}),w("&.fade-up-width-expand-transition-leave-to",{maxWidth:"0 !important",opacity:0,transform:"translateY(60%)"})]}const ea=w([w("@keyframes n-base-slot-machine-fade-up-in",`
 from {
 transform: translateY(60%);
 opacity: 0;
 }
 to {
 transform: translateY(0);
 opacity: 1;
 }
 `),w("@keyframes n-base-slot-machine-fade-down-in",`
 from {
 transform: translateY(-60%);
 opacity: 0;
 }
 to {
 transform: translateY(0);
 opacity: 1;
 }
 `),w("@keyframes n-base-slot-machine-fade-up-out",`
 from {
 transform: translateY(0%);
 opacity: 1;
 }
 to {
 transform: translateY(-60%);
 opacity: 0;
 }
 `),w("@keyframes n-base-slot-machine-fade-down-out",`
 from {
 transform: translateY(0%);
 opacity: 1;
 }
 to {
 transform: translateY(60%);
 opacity: 0;
 }
 `),R("base-slot-machine",`
 overflow: hidden;
 white-space: nowrap;
 display: inline-block;
 height: 18px;
 line-height: 18px;
 `,[R("base-slot-machine-number",`
 display: inline-block;
 position: relative;
 height: 18px;
 width: .6em;
 max-width: .6em;
 `,[Qr({duration:".2s"}),$n({duration:".2s",delay:"0s"}),R("base-slot-machine-old-number",`
 display: inline-block;
 opacity: 0;
 position: absolute;
 left: 0;
 right: 0;
 `,[j("top",{transform:"translateY(-100%)"}),j("bottom",{transform:"translateY(100%)"}),j("down-scroll",{animation:"n-base-slot-machine-fade-down-out .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),j("up-scroll",{animation:"n-base-slot-machine-fade-up-out .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1})]),R("base-slot-machine-current-number",`
 display: inline-block;
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 1;
 transform: translateY(0);
 width: .6em;
 `,[j("down-scroll",{animation:"n-base-slot-machine-fade-down-in .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),j("up-scroll",{animation:"n-base-slot-machine-fade-up-in .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),z("inner",`
 display: inline-block;
 position: absolute;
 right: 0;
 top: 0;
 width: .6em;
 `,[j("not-number",`
 right: unset;
 left: 0;
 `)])])])])]),ta=T({name:"BaseSlotMachine",props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],default:0},max:{type:Number,default:void 0},appeared:{type:Boolean,required:!0}},setup(e){zn("-base-slot-machine",ea,be(e,"clsPrefix"));const t=L(),o=L(),n=y(()=>{if(typeof e.value=="string")return[];if(e.value<1)return[0];const r=[];let a=e.value;for(e.max!==void 0&&(a=Math.min(e.max,a));a>=1;)r.push(a%10),a/=10,a=Math.floor(a);return r.reverse(),r});return ue(be(e,"value"),(r,a)=>{typeof r=="string"?(o.value=void 0,t.value=void 0):typeof a=="string"?(o.value=r,t.value=void 0):(o.value=r,t.value=a)}),()=>{const{value:r,clsPrefix:a}=e;return typeof r=="number"?d("span",{class:`${a}-base-slot-machine`},d(Sn,{name:"fade-up-width-expand-transition",tag:"span"},{default:()=>n.value.map((i,s)=>d(So,{clsPrefix:a,key:n.value.length-s-1,oldOriginalNumber:t.value,newOriginalNumber:o.value,value:i}))}),d(Io,{key:"+",width:!0},{default:()=>e.max!==void 0&&e.max<r?d(So,{clsPrefix:a,value:"+"}):null})):d("span",{class:`${a}-base-slot-machine`},r)}}}),Nt=Fo&&"loading"in document.createElement("img"),oa=(e={})=>{var t;const{root:o=null}=e;return{hash:`${e.rootMargin||"0px 0px 0px 0px"}-${Array.isArray(e.threshold)?e.threshold.join(","):(t=e.threshold)!==null&&t!==void 0?t:"0"}`,options:Object.assign(Object.assign({},e),{root:(typeof o=="string"?document.querySelector(o):o)||document.documentElement})}},Ot=new WeakMap,jt=new WeakMap,Kt=new WeakMap,na=(e,t,o)=>{if(!e)return()=>{};const n=oa(t),{root:r}=n.options;let a;const i=Ot.get(r);i?a=i:(a=new Map,Ot.set(r,a));let s,c;a.has(n.hash)?(c=a.get(n.hash),c[1].has(e)||(s=c[0],c[1].add(e),s.observe(e))):(s=new IntersectionObserver(m=>{m.forEach(h=>{if(h.isIntersecting){const _=jt.get(h.target),C=Kt.get(h.target);_&&_(),C&&(C.value=!0)}})},n.options),s.observe(e),c=[s,new Set([e])],a.set(n.hash,c));let v=!1;const f=()=>{v||(jt.delete(e),Kt.delete(e),v=!0,c[1].has(e)&&(c[0].unobserve(e),c[1].delete(e)),c[1].size<=0&&a.delete(n.hash),a.size||Ot.delete(r))};return jt.set(e,f),Kt.set(e,o),f},ra=Ze("n-avatar-group"),aa=R("avatar",`
 width: var(--n-merged-size);
 height: var(--n-merged-size);
 color: #FFF;
 font-size: var(--n-font-size);
 display: inline-flex;
 position: relative;
 overflow: hidden;
 text-align: center;
 border: var(--n-border);
 border-radius: var(--n-border-radius);
 --n-merged-color: var(--n-color);
 background-color: var(--n-merged-color);
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[Rn(w("&","--n-merged-color: var(--n-color-modal);")),Mn(w("&","--n-merged-color: var(--n-color-popover);")),w("img",`
 width: 100%;
 height: 100%;
 `),z("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),R("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),z("text","line-height: 1.25")]),la=Object.assign(Object.assign({},de.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,onLoad:Function,renderPlaceholder:Function,renderFallback:Function,imgProps:Object,color:String}),ia=T({name:"Avatar",props:la,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Fe(e),n=L(!1);let r=null;const a=L(null),i=L(null),s=()=>{const{value:x}=a;if(x&&(r===null||r!==x.innerHTML)){r=x.innerHTML;const{value:P}=i;if(P){const{offsetWidth:D,offsetHeight:A}=P,{offsetWidth:U,offsetHeight:k}=x,V=.9,g=Math.min(D/U*V,A/k*V,1);x.style.transform=`translateX(-50%) translateY(-50%) scale(${g})`}}},c=ve(ra,null),v=y(()=>{const{size:x}=e;if(x)return x;const{size:P}=c||{};return P||"medium"}),f=de("Avatar","-avatar",aa,Bn,e,t),m=ve(qr,null),h=y(()=>{if(c)return!0;const{round:x,circle:P}=e;return x!==void 0||P!==void 0?x||P:m?m.roundRef.value:!1}),_=y(()=>c?!0:e.bordered||!1),C=x=>{var P;if(!I.value)return;n.value=!0;const{onError:D,imgProps:A}=e;(P=A==null?void 0:A.onError)===null||P===void 0||P.call(A,x),D&&D(x)};ue(()=>e.src,()=>n.value=!1);const F=y(()=>{const x=v.value,P=h.value,D=_.value,{color:A}=e,{self:{borderRadius:U,fontSize:k,color:V,border:g,colorModal:O,colorPopover:W},common:{cubicBezierEaseInOut:ne}}=f.value;let re;return typeof x=="number"?re=`${x}px`:re=f.value.self[we("height",x)],{"--n-font-size":k,"--n-border":D?g:"none","--n-border-radius":P?"50%":U,"--n-color":A||V,"--n-color-modal":A||O,"--n-color-popover":A||W,"--n-bezier":ne,"--n-merged-size":`var(--n-avatar-size-override, ${re})`}}),B=o?Ue("avatar",y(()=>{const x=v.value,P=h.value,D=_.value,{color:A}=e;let U="";return x&&(typeof x=="number"?U+=`a${x}`:U+=x[0]),P&&(U+="b"),D&&(U+="c"),A&&(U+=Ao(A)),U}),F,e):void 0,I=L(!e.lazy);st(()=>{if(Nt)return;let x;const P=Ye(()=>{x==null||x(),x=void 0,e.lazy&&(x=na(i.value,e.intersectionObserverOptions,I))});oo(()=>{P(),x==null||x()})});const E=L(!e.lazy);return{textRef:a,selfRef:i,mergedRoundRef:h,mergedClsPrefix:t,fitTextTransform:s,cssVars:o?void 0:F,themeClass:B==null?void 0:B.themeClass,onRender:B==null?void 0:B.onRender,hasLoadError:n,handleError:C,shouldStartLoading:I,loaded:E,mergedOnLoad:x=>{var P;const{onLoad:D,imgProps:A}=e;D==null||D(x),(P=A==null?void 0:A.onLoad)===null||P===void 0||P.call(A,x),E.value=!0}}},render(){var e,t;const{$slots:o,src:n,mergedClsPrefix:r,lazy:a,onRender:i,mergedOnLoad:s,shouldStartLoading:c,loaded:v,hasLoadError:f}=this;i==null||i();let m;const h=!v&&!f&&(this.renderPlaceholder?this.renderPlaceholder():(t=(e=this.$slots).placeholder)===null||t===void 0?void 0:t.call(e));return this.hasLoadError?m=this.renderFallback?this.renderFallback():Dt(o.fallback,()=>[d("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}})]):m=Te(o.default,_=>{if(_)return d(In,{onResize:this.fitTextTransform},{default:()=>d("span",{ref:"textRef",class:`${r}-avatar__text`},_)});if(n){const{imgProps:C}=this;return d("img",Object.assign(Object.assign({},C),{loading:Nt&&!this.intersectionObserverOptions&&a?"lazy":"eager",src:Nt||c||v?n:void 0,onLoad:s,"data-image-src":n,onError:this.handleError,style:[C==null?void 0:C.style,{objectFit:this.objectFit},h?{height:"0",width:"0",visibility:"hidden",position:"absolute"}:""]}))}}),d("span",{ref:"selfRef",class:[`${r}-avatar`,this.themeClass],style:this.cssVars},m,a&&h)}}),sa=e=>{const{popoverColor:t,textColor2:o,primaryColorHover:n,primaryColorPressed:r}=e;return Object.assign(Object.assign({},Fn),{color:t,textColor:o,iconColor:o,iconColorHover:n,iconColorPressed:r,boxShadow:"0 2px 8px 0px rgba(0, 0, 0, .12)",boxShadowHover:"0 2px 12px 0px rgba(0, 0, 0, .18)",boxShadowPressed:"0 2px 12px 0px rgba(0, 0, 0, .18)"})},ca={name:"BackTop",common:no,self:sa},da=ca,ua=d("svg",{viewBox:"0 0 24 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xlinkHref:"http://www.w3.org/1999/xlink"},d("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},d("g",{transform:"translate(-139.000000, -4423.000000)","fill-rule":"nonzero"},d("g",{transform:"translate(120.000000, 4285.000000)"},d("g",{transform:"translate(7.000000, 126.000000)"},d("g",{transform:"translate(24.000000, 24.000000) scale(1, -1) translate(-24.000000, -24.000000) translate(12.000000, 12.000000)"},d("g",{transform:"translate(4.000000, 2.000000)"},d("path",{d:"M8,0 C8.51283584,0 8.93550716,0.38604019 8.99327227,0.883378875 L9,1 L9,10.584 L12.2928932,7.29289322 C12.6834175,6.90236893 13.3165825,6.90236893 13.7071068,7.29289322 C14.0675907,7.65337718 14.0953203,8.22060824 13.7902954,8.61289944 L13.7071068,8.70710678 L8.70710678,13.7071068 L8.62544899,13.7803112 L8.618,13.784 L8.59530661,13.8036654 L8.4840621,13.8753288 L8.37133602,13.9287745 L8.22929083,13.9735893 L8.14346259,13.9897165 L8.03324678,13.9994506 L7.9137692,13.9962979 L7.77070917,13.9735893 L7.6583843,13.9401293 L7.57677845,13.9063266 L7.47929125,13.8540045 L7.4048407,13.8036865 L7.38131006,13.7856883 C7.35030318,13.7612383 7.32077858,13.7349921 7.29289322,13.7071068 L2.29289322,8.70710678 L2.20970461,8.61289944 C1.90467972,8.22060824 1.93240926,7.65337718 2.29289322,7.29289322 C2.65337718,6.93240926 3.22060824,6.90467972 3.61289944,7.20970461 L3.70710678,7.29289322 L7,10.585 L7,1 L7.00672773,0.883378875 C7.06449284,0.38604019 7.48716416,0 8,0 Z"}),d("path",{d:"M14.9333333,15.9994506 C15.5224371,15.9994506 16,16.4471659 16,16.9994506 C16,17.5122865 15.5882238,17.9349578 15.0577292,17.9927229 L14.9333333,17.9994506 L1.06666667,17.9994506 C0.477562934,17.9994506 0,17.5517354 0,16.9994506 C0,16.4866148 0.411776203,16.0639435 0.9422708,16.0061783 L1.06666667,15.9994506 L14.9333333,15.9994506 Z"})))))))),ha=R("back-top",`
 position: fixed;
 right: 40px;
 bottom: 40px;
 cursor: pointer;
 display: flex;
 align-items: center;
 justify-content: center;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 height: var(--n-height);
 min-width: var(--n-width);
 box-shadow: var(--n-box-shadow);
 background-color: var(--n-color);
`,[Pt(),j("transition-disabled",{transition:"none !important"}),R("base-icon",`
 font-size: var(--n-icon-size);
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),w("svg",{pointerEvents:"none"}),w("&:hover",{boxShadow:"var(--n-box-shadow-hover)"},[R("base-icon",{color:"var(--n-icon-color-hover)"})]),w("&:active",{boxShadow:"var(--n-box-shadow-pressed)"},[R("base-icon",{color:"var(--n-icon-color-pressed)"})])]),ma=Object.assign(Object.assign({},de.props),{show:{type:Boolean,default:void 0},right:{type:[Number,String],default:40},bottom:{type:[Number,String],default:40},to:{type:[String,Object],default:"body"},visibilityHeight:{type:Number,default:180},listenTo:[String,Object,Function],"onUpdate:show":{type:Function,default:()=>{}},target:Function,onShow:Function,onHide:Function}),pa=T({name:"BackTop",inheritAttrs:!1,props:ma,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Fe(e),n=L(null),r=L(!1);Ye(()=>{const{value:P}=n;if(P===null){r.value=!1;return}r.value=P>=e.visibilityHeight});const a=L(!1);ue(r,P=>{var D;a.value&&((D=e["onUpdate:show"])===null||D===void 0||D.call(e,P))});const i=be(e,"show"),s=Le(i,r),c=L(!0),v=L(null),f=y(()=>({right:`calc(${Tt(e.right)} + ${An.value})`,bottom:Tt(e.bottom)}));let m,h;ue(s,P=>{var D,A;a.value&&(P&&((D=e.onShow)===null||D===void 0||D.call(e)),(A=e.onHide)===null||A===void 0||A.call(e))});const _=de("BackTop","-back-top",ha,da,e,t);function C(){var P;if(h)return;h=!0;const D=((P=e.target)===null||P===void 0?void 0:P.call(e))||Gr(e.listenTo)||tn(v.value);if(!D)return;m=D===document.documentElement?document:D;const{to:A}=e;typeof A=="string"&&document.querySelector(A),m.addEventListener("scroll",B),B()}function F(){(zo(m)?document.documentElement:m).scrollTo({top:0,behavior:"smooth"})}function B(){n.value=(zo(m)?document.documentElement:m).scrollTop,a.value||nt(()=>{a.value=!0})}function I(){c.value=!1}st(()=>{C(),c.value=s.value}),oo(()=>{m&&m.removeEventListener("scroll",B)});const E=y(()=>{const{self:{color:P,boxShadow:D,boxShadowHover:A,boxShadowPressed:U,iconColor:k,iconColorHover:V,iconColorPressed:g,width:O,height:W,iconSize:ne,borderRadius:re,textColor:ae},common:{cubicBezierEaseInOut:$}}=_.value;return{"--n-bezier":$,"--n-border-radius":re,"--n-height":W,"--n-width":O,"--n-box-shadow":D,"--n-box-shadow-hover":A,"--n-box-shadow-pressed":U,"--n-color":P,"--n-icon-size":ne,"--n-icon-color":k,"--n-icon-color-hover":V,"--n-icon-color-pressed":g,"--n-text-color":ae}}),x=o?Ue("back-top",void 0,E,e):void 0;return{placeholderRef:v,style:f,mergedShow:s,isMounted:ro(),scrollElement:L(null),scrollTop:n,DomInfoReady:a,transitionDisabled:c,mergedClsPrefix:t,handleAfterEnter:I,handleScroll:B,handleClick:F,cssVars:o?void 0:E,themeClass:x==null?void 0:x.themeClass,onRender:x==null?void 0:x.onRender}},render(){const{mergedClsPrefix:e}=this;return d("div",{ref:"placeholderRef",class:`${e}-back-top-placeholder`,style:"display: none","aria-hidden":!0},d(Po,{to:this.to,show:this.mergedShow},{default:()=>d(Ct,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterEnter:this.handleAfterEnter},{default:()=>{var t;return(t=this.onRender)===null||t===void 0||t.call(this),this.mergedShow?d("div",Et(this.$attrs,{class:[`${e}-back-top`,this.themeClass,this.transitionDisabled&&`${e}-back-top--transition-disabled`],style:[this.style,this.cssVars],onClick:this.handleClick}),Dt(this.$slots.default,()=>[d(To,{clsPrefix:e},{default:()=>ua})])):null}})}))}}),va=e=>{const{errorColor:t,infoColor:o,successColor:n,warningColor:r,fontFamily:a}=e;return{color:t,colorInfo:o,colorSuccess:n,colorError:t,colorWarning:r,fontSize:"12px",fontFamily:a}},fa={name:"Badge",common:no,self:va},ba=fa,ga=w([w("@keyframes badge-wave-spread",{from:{boxShadow:"0 0 0.5px 0px var(--n-ripple-color)",opacity:.6},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)",opacity:0}}),R("badge",`
 display: inline-flex;
 position: relative;
 vertical-align: middle;
 color: var(--n-color);
 font-family: var(--n-font-family);
 `,[j("as-is",[R("badge-sup",{position:"static",transform:"translateX(0)"},[Pt({transformOrigin:"left bottom",originalTransform:"translateX(0)"})])]),j("dot",[R("badge-sup",`
 height: 8px;
 width: 8px;
 padding: 0;
 min-width: 8px;
 left: 100%;
 bottom: calc(100% - 4px);
 `,[w("::before","border-radius: 4px;")])]),R("badge-sup",`
 background: var(--n-color);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: #FFF;
 position: absolute;
 height: 18px;
 line-height: 18px;
 border-radius: 9px;
 padding: 0 6px;
 text-align: center;
 font-size: var(--n-font-size);
 transform: translateX(-50%);
 left: 100%;
 bottom: calc(100% - 9px);
 font-variant-numeric: tabular-nums;
 z-index: 1;
 display: flex;
 align-items: center;
 `,[Pt({transformOrigin:"left bottom",originalTransform:"translateX(-50%)"}),R("base-wave",{zIndex:1,animationDuration:"2s",animationIterationCount:"infinite",animationDelay:"1s",animationTimingFunction:"var(--n-ripple-bezier)",animationName:"badge-wave-spread"}),w("&::before",`
 opacity: 0;
 transform: scale(1);
 border-radius: 9px;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)])])]),_a=Object.assign(Object.assign({},de.props),{value:[String,Number],max:Number,dot:Boolean,type:{type:String,default:"default"},show:{type:Boolean,default:!0},showZero:Boolean,processing:Boolean,color:String,offset:Array}),xa=T({name:"Badge",props:_a,setup(e,{slots:t}){const{mergedClsPrefixRef:o,inlineThemeDisabled:n,mergedRtlRef:r}=Fe(e),a=de("Badge","-badge",ga,ba,e,o),i=L(!1),s=()=>{i.value=!0},c=()=>{i.value=!1},v=y(()=>e.show&&(e.dot||e.value!==void 0&&!(!e.showZero&&Number(e.value)<=0)||!Ft(t.value)));st(()=>{v.value&&(i.value=!0)});const f=Do("Badge",r,o),m=y(()=>{const{type:C,color:F}=e,{common:{cubicBezierEaseInOut:B,cubicBezierEaseOut:I},self:{[we("color",C)]:E,fontFamily:x,fontSize:P}}=a.value;return{"--n-font-size":P,"--n-font-family":x,"--n-color":F||E,"--n-ripple-color":F||E,"--n-bezier":B,"--n-ripple-bezier":I}}),h=n?Ue("badge",y(()=>{let C="";const{type:F,color:B}=e;return F&&(C+=F[0]),B&&(C+=Ao(B)),C}),m,e):void 0,_=y(()=>{const{offset:C}=e;if(!C)return;const[F,B]=C,I=typeof F=="number"?`${F}px`:F,E=typeof B=="number"?`${B}px`:B;return{transform:`translate(calc(${f!=null&&f.value?"50%":"-50%"} + ${I}), ${E})`}});return{rtlEnabled:f,mergedClsPrefix:o,appeared:i,showBadge:v,handleAfterEnter:s,handleAfterLeave:c,cssVars:n?void 0:m,themeClass:h==null?void 0:h.themeClass,onRender:h==null?void 0:h.onRender,offsetStyle:_}},render(){var e;const{mergedClsPrefix:t,onRender:o,themeClass:n,$slots:r}=this;o==null||o();const a=(e=r.default)===null||e===void 0?void 0:e.call(r);return d("div",{class:[`${t}-badge`,this.rtlEnabled&&`${t}-badge--rtl`,n,{[`${t}-badge--dot`]:this.dot,[`${t}-badge--as-is`]:!a}],style:this.cssVars},a,d(Ct,{name:"fade-in-scale-up-transition",onAfterEnter:this.handleAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>this.showBadge?d("sup",{class:`${t}-badge-sup`,title:Lr(this.value),style:this.offsetStyle},Dt(r.value,()=>[this.dot?null:d(ta,{clsPrefix:t,appeared:this.appeared,max:this.max,value:this.value})]),this.processing?d(Pn,{clsPrefix:t}):null):null}))}}),ya=R("breadcrumb",`
 white-space: nowrap;
 cursor: default;
 line-height: var(--n-item-line-height);
`,[w("ul",`
 list-style: none;
 padding: 0;
 margin: 0;
 `),w("a",`
 color: inherit;
 text-decoration: inherit;
 `),R("breadcrumb-item",`
 font-size: var(--n-font-size);
 transition: color .3s var(--n-bezier);
 display: inline-flex;
 align-items: center;
 `,[R("icon",`
 font-size: 18px;
 vertical-align: -.2em;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `),w("&:not(:last-child)",[j("clickable",[z("link",`
 cursor: pointer;
 `,[w("&:hover",`
 background-color: var(--n-item-color-hover);
 `),w("&:active",`
 background-color: var(--n-item-color-pressed); 
 `)])])]),z("link",`
 padding: 4px;
 border-radius: var(--n-item-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 position: relative;
 `,[w("&:hover",`
 color: var(--n-item-text-color-hover);
 `,[R("icon",`
 color: var(--n-item-text-color-hover);
 `)]),w("&:active",`
 color: var(--n-item-text-color-pressed);
 `,[R("icon",`
 color: var(--n-item-text-color-pressed);
 `)])]),z("separator",`
 margin: 0 8px;
 color: var(--n-separator-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 `),w("&:last-child",[z("link",`
 font-weight: var(--n-font-weight-active);
 cursor: unset;
 color: var(--n-item-text-color-active);
 `,[R("icon",`
 color: var(--n-item-text-color-active);
 `)]),z("separator",`
 display: none;
 `)])])]),nn=Ze("n-breadcrumb"),wa=Object.assign(Object.assign({},de.props),{separator:{type:String,default:"/"}}),Ca=T({name:"Breadcrumb",props:wa,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Fe(e),n=de("Breadcrumb","-breadcrumb",ya,Tn,e,t);Ce(nn,{separatorRef:be(e,"separator"),mergedClsPrefixRef:t});const r=y(()=>{const{common:{cubicBezierEaseInOut:i},self:{separatorColor:s,itemTextColor:c,itemTextColorHover:v,itemTextColorPressed:f,itemTextColorActive:m,fontSize:h,fontWeightActive:_,itemBorderRadius:C,itemColorHover:F,itemColorPressed:B,itemLineHeight:I}}=n.value;return{"--n-font-size":h,"--n-bezier":i,"--n-item-text-color":c,"--n-item-text-color-hover":v,"--n-item-text-color-pressed":f,"--n-item-text-color-active":m,"--n-separator-color":s,"--n-item-color-hover":F,"--n-item-color-pressed":B,"--n-item-border-radius":C,"--n-font-weight-active":_,"--n-item-line-height":I}}),a=o?Ue("breadcrumb",void 0,r,e):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:r,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),d("nav",{class:[`${this.mergedClsPrefix}-breadcrumb`,this.themeClass],style:this.cssVars,"aria-label":"Breadcrumb"},d("ul",null,this.$slots))}}),ka=(e=Fo?window:null)=>{const t=()=>{const{hash:r,host:a,hostname:i,href:s,origin:c,pathname:v,port:f,protocol:m,search:h}=(e==null?void 0:e.location)||{};return{hash:r,host:a,hostname:i,href:s,origin:c,pathname:v,port:f,protocol:m,search:h}},o=()=>{n.value=t()},n=L(t());return st(()=>{e&&(e.addEventListener("popstate",o),e.addEventListener("hashchange",o))}),Eo(()=>{e&&(e.removeEventListener("popstate",o),e.removeEventListener("hashchange",o))}),n},$a={separator:String,href:String,clickable:{type:Boolean,default:!0},onClick:Function},za=T({name:"BreadcrumbItem",props:$a,setup(e,{slots:t}){const o=ve(nn,null);if(!o)return()=>null;const{separatorRef:n,mergedClsPrefixRef:r}=o,a=ka(),i=y(()=>e.href?"a":"span"),s=y(()=>a.value.href===e.href?"location":null);return()=>{const{value:c}=r;return d("li",{class:[`${c}-breadcrumb-item`,e.clickable&&`${c}-breadcrumb-item--clickable`]},d(i.value,{class:`${c}-breadcrumb-item__link`,"aria-current":s.value,href:e.href,onClick:e.onClick},t),d("span",{class:`${c}-breadcrumb-item__separator`,"aria-hidden":"true"},Dt(t.separator,()=>{var v;return[(v=e.separator)!==null&&v!==void 0?v:n.value]})))}}});function Sa(e,t){switch(e[0]){case"hex":return t?"#000000FF":"#000000";case"rgb":return t?"rgba(0, 0, 0, 1)":"rgb(0, 0, 0)";case"hsl":return t?"hsla(0, 0%, 0%, 1)":"hsl(0, 0%, 0%)";case"hsv":return t?"hsva(0, 0%, 0%, 1)":"hsv(0, 0%, 0%)"}return"#000000"}function yt(e){return e===null?null:/^ *#/.test(e)?"hex":e.includes("rgb")?"rgb":e.includes("hsl")?"hsl":e.includes("hsv")?"hsv":null}function Ra(e){return e=Math.round(e),e>=360?359:e<0?0:e}function Ma(e){return e=Math.round(e*100)/100,e>1?1:e<0?0:e}const Ba={rgb:{hex(e){return Ee(Me(e))},hsl(e){const[t,o,n,r]=Me(e);return He([...eo(t,o,n),r])},hsv(e){const[t,o,n,r]=Me(e);return qe([...Qt(t,o,n),r])}},hex:{rgb(e){return Ie(Me(e))},hsl(e){const[t,o,n,r]=Me(e);return He([...eo(t,o,n),r])},hsv(e){const[t,o,n,r]=Me(e);return qe([...Qt(t,o,n),r])}},hsl:{hex(e){const[t,o,n,r]=tt(e);return Ee([...to(t,o,n),r])},rgb(e){const[t,o,n,r]=tt(e);return Ie([...to(t,o,n),r])},hsv(e){const[t,o,n,r]=tt(e);return qe([...on(t,o,n),r])}},hsv:{hex(e){const[t,o,n,r]=Xe(e);return Ee([...De(t,o,n),r])},rgb(e){const[t,o,n,r]=Xe(e);return Ie([...De(t,o,n),r])},hsl(e){const[t,o,n,r]=Xe(e);return He([...At(t,o,n),r])}}};function rn(e,t,o){return o=o||yt(e),o?o===t?e:Ba[o][t](e):null}const Qe="12px",Ia=12,je="6px",Fa=6,Aa="linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)",Pa=T({name:"HueSlider",props:{clsPrefix:{type:String,required:!0},hue:{type:Number,required:!0},onUpdateHue:{type:Function,required:!0},onComplete:Function},setup(e){const t=L(null);function o(a){t.value&&(rt("mousemove",document,n),rt("mouseup",document,r),n(a))}function n(a){const{value:i}=t;if(!i)return;const{width:s,left:c}=i.getBoundingClientRect(),v=Ra((a.clientX-c-Fa)/(s-Ia)*360);e.onUpdateHue(v)}function r(){var a;at("mousemove",document,n),at("mouseup",document,r),(a=e.onComplete)===null||a===void 0||a.call(e)}return{railRef:t,handleMouseDown:o}},render(){const{clsPrefix:e}=this;return d("div",{class:`${e}-color-picker-slider`,style:{height:Qe,borderRadius:je}},d("div",{ref:"railRef",style:{boxShadow:"inset 0 0 2px 0 rgba(0, 0, 0, .24)",boxSizing:"border-box",backgroundImage:Aa,height:Qe,borderRadius:je,position:"relative"},onMousedown:this.handleMouseDown},d("div",{style:{position:"absolute",left:je,right:je,top:0,bottom:0}},d("div",{class:`${e}-color-picker-handle`,style:{left:`calc((${this.hue}%) / 359 * 100 - ${je})`,borderRadius:je,width:Qe,height:Qe}},d("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:`hsl(${this.hue}, 100%, 50%)`,borderRadius:je,width:Qe,height:Qe}})))))}}),gt="12px",Ta=12,Ke="6px",Da=T({name:"AlphaSlider",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},alpha:{type:Number,default:0},onUpdateAlpha:{type:Function,required:!0},onComplete:Function},setup(e){const t=L(null);function o(a){!t.value||!e.rgba||(rt("mousemove",document,n),rt("mouseup",document,r),n(a))}function n(a){const{value:i}=t;if(!i)return;const{width:s,left:c}=i.getBoundingClientRect(),v=(a.clientX-c)/(s-Ta);e.onUpdateAlpha(Ma(v))}function r(){var a;at("mousemove",document,n),at("mouseup",document,r),(a=e.onComplete)===null||a===void 0||a.call(e)}return{railRef:t,railBackgroundImage:y(()=>{const{rgba:a}=e;return a?`linear-gradient(to right, rgba(${a[0]}, ${a[1]}, ${a[2]}, 0) 0%, rgba(${a[0]}, ${a[1]}, ${a[2]}, 1) 100%)`:""}),handleMouseDown:o}},render(){const{clsPrefix:e}=this;return d("div",{class:`${e}-color-picker-slider`,ref:"railRef",style:{height:gt,borderRadius:Ke},onMousedown:this.handleMouseDown},d("div",{style:{borderRadius:Ke,position:"absolute",left:0,right:0,top:0,bottom:0,overflow:"hidden"}},d("div",{class:`${e}-color-picker-checkboard`}),d("div",{class:`${e}-color-picker-slider__image`,style:{backgroundImage:this.railBackgroundImage}})),this.rgba&&d("div",{style:{position:"absolute",left:Ke,right:Ke,top:0,bottom:0}},d("div",{class:`${e}-color-picker-handle`,style:{left:`calc(${this.alpha*100}% - ${Ke})`,borderRadius:Ke,width:gt,height:gt}},d("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:Ie(this.rgba),borderRadius:Ke,width:gt,height:gt}}))))}}),Mt="12px",Bt="6px",Ea=T({name:"Pallete",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},displayedHue:{type:Number,required:!0},displayedSv:{type:Array,required:!0},onUpdateSV:{type:Function,required:!0},onComplete:Function},setup(e){const t=L(null);function o(a){t.value&&(rt("mousemove",document,n),rt("mouseup",document,r),n(a))}function n(a){const{value:i}=t;if(!i)return;const{width:s,height:c,left:v,bottom:f}=i.getBoundingClientRect(),m=(f-a.clientY)/c,h=(a.clientX-v)/s,_=100*(h>1?1:h<0?0:h),C=100*(m>1?1:m<0?0:m);e.onUpdateSV(_,C)}function r(){var a;at("mousemove",document,n),at("mouseup",document,r),(a=e.onComplete)===null||a===void 0||a.call(e)}return{palleteRef:t,handleColor:y(()=>{const{rgba:a}=e;return a?`rgb(${a[0]}, ${a[1]}, ${a[2]})`:""}),handleMouseDown:o}},render(){const{clsPrefix:e}=this;return d("div",{class:`${e}-color-picker-pallete`,onMousedown:this.handleMouseDown,ref:"palleteRef"},d("div",{class:`${e}-color-picker-pallete__layer`,style:{backgroundImage:`linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`}}),d("div",{class:`${e}-color-picker-pallete__layer ${e}-color-picker-pallete__layer--shadowed`,style:{backgroundImage:"linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))"}}),this.rgba&&d("div",{class:`${e}-color-picker-handle`,style:{width:Mt,height:Mt,borderRadius:Bt,left:`calc(${this.displayedSv[0]}% - ${Bt})`,bottom:`calc(${this.displayedSv[1]}% - ${Bt})`}},d("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:this.handleColor,borderRadius:Bt,width:Mt,height:Mt}})))}}),mo=Ze("n-color-picker");function Ha(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),255)):!1}function La(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),360)):!1}function Ua(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),100)):!1}function Va(e){const t=e.trim();return/^#[0-9a-fA-F]+$/.test(t)?[4,5,7,9].includes(t.length):!1}function Na(e){return/^\d{1,3}\.?\d*%$/.test(e.trim())?Math.max(0,Math.min(parseInt(e)/100,100)):!1}const Oa={paddingSmall:"0 4px"},Ro=T({name:"ColorInputUnit",props:{label:{type:String,required:!0},value:{type:[Number,String],default:null},showAlpha:Boolean,onUpdateValue:{type:Function,required:!0}},setup(e){const t=L(""),{themeRef:o}=ve(mo,null);Ye(()=>{t.value=n()});function n(){const{value:i}=e;if(i===null)return"";const{label:s}=e;return s==="HEX"?i:s==="A"?`${Math.floor(i*100)}%`:String(Math.floor(i))}function r(i){t.value=i}function a(i){let s,c;switch(e.label){case"HEX":c=Va(i),c&&e.onUpdateValue(i),t.value=n();break;case"H":s=La(i),s===!1?t.value=n():e.onUpdateValue(s);break;case"S":case"L":case"V":s=Ua(i),s===!1?t.value=n():e.onUpdateValue(s);break;case"A":s=Na(i),s===!1?t.value=n():e.onUpdateValue(s);break;case"R":case"G":case"B":s=Ha(i),s===!1?t.value=n():e.onUpdateValue(s);break}}return{mergedTheme:o,inputValue:t,handleInputChange:a,handleInputUpdateValue:r}},render(){const{mergedTheme:e}=this;return d(Jo,{size:"small",placeholder:this.label,theme:e.peers.Input,themeOverrides:e.peerOverrides.Input,builtinThemeOverrides:Oa,value:this.inputValue,onUpdateValue:this.handleInputUpdateValue,onChange:this.handleInputChange,style:this.label==="A"?"flex-grow: 1.25;":""})}}),ja=T({name:"ColorInput",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},modes:{type:Array,required:!0},showAlpha:{type:Boolean,required:!0},value:{type:String,default:null},valueArr:{type:Array,default:null},onUpdateValue:{type:Function,required:!0},onUpdateMode:{type:Function,required:!0}},setup(e){return{handleUnitUpdateValue(t,o){const{showAlpha:n}=e;if(e.mode==="hex"){e.onUpdateValue((n?Ee:xt)(o));return}let r;switch(e.valueArr===null?r=[0,0,0,0]:r=Array.from(e.valueArr),e.mode){case"hsv":r[t]=o,e.onUpdateValue((n?qe:Xt)(r));break;case"rgb":r[t]=o,e.onUpdateValue((n?Ie:qt)(r));break;case"hsl":r[t]=o,e.onUpdateValue((n?He:Wt)(r));break}}}},render(){const{clsPrefix:e,modes:t}=this;return d("div",{class:`${e}-color-picker-input`},d("div",{class:`${e}-color-picker-input__mode`,onClick:this.onUpdateMode,style:{cursor:t.length===1?"":"pointer"}},this.mode.toUpperCase()+(this.showAlpha?"A":"")),d(Qo,null,{default:()=>{const{mode:o,valueArr:n,showAlpha:r}=this;if(o==="hex"){let a=null;try{a=n===null?null:(r?Ee:xt)(n)}catch{}return d(Ro,{label:"HEX",showAlpha:r,value:a,onUpdateValue:i=>{this.handleUnitUpdateValue(0,i)}})}return(o+(r?"a":"")).split("").map((a,i)=>d(Ro,{label:a.toUpperCase(),value:n===null?null:n[i],onUpdateValue:s=>{this.handleUnitUpdateValue(i,s)}}))}}))}}),Ka=T({name:"ColorPickerTrigger",props:{clsPrefix:{type:String,required:!0},value:{type:String,default:null},hsla:{type:Array,default:null},disabled:Boolean,onClick:Function},setup(e){const{colorPickerSlots:t,renderLabelRef:o}=ve(mo,null);return()=>{const{hsla:n,value:r,clsPrefix:a,onClick:i,disabled:s}=e,c=t.label||o.value;return d("div",{class:[`${a}-color-picker-trigger`,s&&`${a}-color-picker-trigger--disabled`],onClick:s?void 0:i},d("div",{class:`${a}-color-picker-trigger__fill`},d("div",{class:`${a}-color-picker-checkboard`}),d("div",{style:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:n?He(n):""}}),r&&n?d("div",{class:`${a}-color-picker-trigger__value`,style:{color:n[2]>50||n[3]<.5?"black":"white"}},c?c(r):r):null))}}});function Wa(e,t){if(t==="hsv"){const[o,n,r,a]=Xe(e);return Ie([...De(o,n,r),a])}return e}function qa(e){const t=document.createElement("canvas").getContext("2d");return t.fillStyle=e,t.fillStyle}const Xa=T({name:"ColorPickerSwatches",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},swatches:{type:Array,required:!0},onUpdateColor:{type:Function,required:!0}},setup(e){const t=y(()=>e.swatches.map(a=>{const i=yt(a);return{value:a,mode:i,legalValue:Wa(a,i)}}));function o(a){const{mode:i}=e;let{value:s,mode:c}=a;return c||(c="hex",/^[a-zA-Z]+$/.test(s)?s=qa(s):(Dn("color-picker",`color ${s} in swatches is invalid.`),s="#000000")),c===i?s:rn(s,i,c)}function n(a){e.onUpdateColor(o(a))}function r(a,i){a.key==="Enter"&&n(i)}return{parsedSwatchesRef:t,handleSwatchSelect:n,handleSwatchKeyDown:r}},render(){const{clsPrefix:e}=this;return d("div",{class:`${e}-color-picker-swatches`},this.parsedSwatchesRef.map(t=>d("div",{class:`${e}-color-picker-swatch`,tabindex:0,onClick:()=>{this.handleSwatchSelect(t)},onKeydown:o=>{this.handleSwatchKeyDown(o,t)}},d("div",{class:`${e}-color-picker-swatch__fill`,style:{background:t.legalValue}}))))}}),Ya=T({name:"ColorPreview",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},color:{type:String,default:null,validator:e=>{const t=yt(e);return!!(!e||t&&t!=="hsv")}},onUpdateColor:{type:Function,required:!0}},setup(e){function t(o){var n;const r=o.target.value;(n=e.onUpdateColor)===null||n===void 0||n.call(e,rn(r.toUpperCase(),e.mode,"hex")),o.stopPropagation()}return{handleChange:t}},render(){const{clsPrefix:e}=this;return d("div",{class:`${e}-color-picker-preview__preview`},d("span",{class:`${e}-color-picker-preview__fill`,style:{background:this.color||"#000000"}}),d("input",{class:`${e}-color-picker-preview__input`,type:"color",value:this.color,onChange:this.handleChange}))}}),Za=w([R("color-picker",`
 display: inline-block;
 box-sizing: border-box;
 height: var(--n-height);
 font-size: var(--n-font-size);
 width: 100%;
 position: relative;
 `),R("color-picker-panel",`
 margin: 4px 0;
 width: 240px;
 font-size: var(--n-panel-font-size);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 `,[Pt(),R("input",`
 text-align: center;
 `)]),R("color-picker-checkboard",`
 background: white; 
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[w("&::after",`
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 12px 12px;
 background-position: 0 0, 0 6px, 6px -6px, -6px 0px;
 background-repeat: repeat;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),R("color-picker-slider",`
 margin-bottom: 8px;
 position: relative;
 box-sizing: border-box;
 `,[z("image",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `),w("&::after",`
 content: "";
 position: absolute;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 pointer-events: none;
 `)]),R("color-picker-handle",`
 z-index: 1;
 box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);
 position: absolute;
 background-color: white;
 overflow: hidden;
 `,[z("fill",`
 box-sizing: border-box;
 border: 2px solid white;
 `)]),R("color-picker-pallete",`
 height: 180px;
 position: relative;
 margin-bottom: 8px;
 cursor: crosshair;
 `,[z("layer",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[j("shadowed",`
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]),R("color-picker-preview",`
 display: flex;
 `,[z("sliders",`
 flex: 1 0 auto;
 `),z("preview",`
 position: relative;
 height: 30px;
 width: 30px;
 margin: 0 0 8px 6px;
 border-radius: 50%;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 overflow: hidden;
 `),z("fill",`
 display: block;
 width: 30px;
 height: 30px;
 `),z("input",`
 position: absolute;
 top: 0;
 left: 0;
 width: 30px;
 height: 30px;
 opacity: 0;
 z-index: 1;
 `)]),R("color-picker-input",`
 display: flex;
 align-items: center;
 `,[R("input",`
 flex-grow: 1;
 flex-basis: 0;
 `),z("mode",`
 width: 72px;
 text-align: center;
 `)]),R("color-picker-control",`
 padding: 12px;
 `),R("color-picker-action",`
 display: flex;
 margin-top: -4px;
 border-top: 1px solid var(--n-divider-color);
 padding: 8px 12px;
 justify-content: flex-end;
 `,[R("button","margin-left: 8px;")]),R("color-picker-trigger",`
 border: var(--n-border);
 height: 100%;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 cursor: pointer;
 `,[z("value",`
 white-space: nowrap;
 position: relative;
 `),z("fill",`
 border-radius: var(--n-border-radius);
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 4px;
 right: 4px;
 top: 4px;
 bottom: 4px;
 `),j("disabled","cursor: not-allowed"),R("color-picker-checkboard",`
 border-radius: var(--n-border-radius);
 `,[w("&::after",`
 --n-block-size: calc((var(--n-height) - 8px) / 3);
 background-size: calc(var(--n-block-size) * 2) calc(var(--n-block-size) * 2);
 background-position: 0 0, 0 var(--n-block-size), var(--n-block-size) calc(-1 * var(--n-block-size)), calc(-1 * var(--n-block-size)) 0px; 
 `)])]),R("color-picker-swatches",`
 display: grid;
 grid-gap: 8px;
 flex-wrap: wrap;
 position: relative;
 grid-template-columns: repeat(auto-fill, 18px);
 margin-top: 10px;
 `,[R("color-picker-swatch",`
 width: 18px;
 height: 18px;
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 8px 8px;
 background-position: 0px 0, 0px 4px, 4px -4px, -4px 0px;
 background-repeat: repeat;
 `,[z("fill",`
 position: relative;
 width: 100%;
 height: 100%;
 border-radius: 3px;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 cursor: pointer;
 `),w("&:focus",`
 outline: none;
 `,[z("fill",[w("&::after",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]),Ga=Object.assign(Object.assign({},de.props),{value:String,show:{type:Boolean,default:void 0},defaultShow:Boolean,defaultValue:String,modes:{type:Array,default:()=>["rgb","hex","hsl"]},placement:{type:String,default:"bottom-start"},to:Jt.propTo,showAlpha:{type:Boolean,default:!0},showPreview:Boolean,swatches:Array,disabled:{type:Boolean,default:void 0},actions:{type:Array,default:null},internalActions:Array,size:String,renderLabel:Function,onComplete:Function,onConfirm:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),Ja=T({name:"ColorPicker",props:Ga,setup(e,{slots:t}){const o=L(null);let n=null;const r=Ho(e),{mergedSizeRef:a,mergedDisabledRef:i}=r,{localeRef:s}=Ar("global"),{mergedClsPrefixRef:c,namespaceRef:v,inlineThemeDisabled:f}=Fe(e),m=de("ColorPicker","-color-picker",Za,En,e,c);Ce(mo,{themeRef:m,renderLabelRef:be(e,"renderLabel"),colorPickerSlots:t});const h=L(e.defaultShow),_=Le(be(e,"show"),h);function C(S){const{onUpdateShow:q,"onUpdate:show":ee}=e;q&&oe(q,S),ee&&oe(ee,S),h.value=S}const{defaultValue:F}=e,B=L(F===void 0?Sa(e.modes,e.showAlpha):F),I=Le(be(e,"value"),B),E=L([I.value]),x=L(0),P=y(()=>yt(I.value)),{modes:D}=e,A=L(yt(I.value)||D[0]||"rgb");function U(){const{modes:S}=e,{value:q}=A,ee=S.findIndex(te=>te===q);~ee?A.value=S[(ee+1)%S.length]:A.value="rgb"}let k,V,g,O,W,ne,re,ae;const $=y(()=>{const{value:S}=I;if(!S)return null;switch(P.value){case"hsv":return Xe(S);case"hsl":return[k,V,g,ae]=tt(S),[...on(k,V,g),ae];case"rgb":case"hex":return[W,ne,re,ae]=Me(S),[...Qt(W,ne,re),ae]}}),xe=y(()=>{const{value:S}=I;if(!S)return null;switch(P.value){case"rgb":case"hex":return Me(S);case"hsv":return[k,V,O,ae]=Xe(S),[...De(k,V,O),ae];case"hsl":return[k,V,g,ae]=tt(S),[...to(k,V,g),ae]}}),me=y(()=>{const{value:S}=I;if(!S)return null;switch(P.value){case"hsl":return tt(S);case"hsv":return[k,V,O,ae]=Xe(S),[...At(k,V,O),ae];case"rgb":case"hex":return[W,ne,re,ae]=Me(S),[...eo(W,ne,re),ae]}}),pt=y(()=>{switch(A.value){case"rgb":case"hex":return xe.value;case"hsv":return $.value;case"hsl":return me.value}}),Pe=L(0),pe=L(1),ye=L([0,0]);function vt(S,q){const{value:ee}=$,te=Pe.value,ie=ee?ee[3]:1;ye.value=[S,q];const{showAlpha:J}=e;switch(A.value){case"hsv":G((J?qe:Xt)([te,S,q,ie]),"cursor");break;case"hsl":G((J?He:Wt)([...At(te,S,q),ie]),"cursor");break;case"rgb":G((J?Ie:qt)([...De(te,S,q),ie]),"cursor");break;case"hex":G((J?Ee:xt)([...De(te,S,q),ie]),"cursor");break}}function ft(S){Pe.value=S;const{value:q}=$;if(!q)return;const[,ee,te,ie]=q,{showAlpha:J}=e;switch(A.value){case"hsv":G((J?qe:Xt)([S,ee,te,ie]),"cursor");break;case"rgb":G((J?Ie:qt)([...De(S,ee,te),ie]),"cursor");break;case"hex":G((J?Ee:xt)([...De(S,ee,te),ie]),"cursor");break;case"hsl":G((J?He:Wt)([...At(S,ee,te),ie]),"cursor");break}}function bt(S){switch(A.value){case"hsv":[k,V,O]=$.value,G(qe([k,V,O,S]),"cursor");break;case"rgb":[W,ne,re]=xe.value,G(Ie([W,ne,re,S]),"cursor");break;case"hex":[W,ne,re]=xe.value,G(Ee([W,ne,re,S]),"cursor");break;case"hsl":[k,V,g]=me.value,G(He([k,V,g,S]),"cursor");break}pe.value=S}function G(S,q){q==="cursor"?n=S:n=null;const{nTriggerFormChange:ee,nTriggerFormInput:te}=r,{onUpdateValue:ie,"onUpdate:value":J}=e;ie&&oe(ie,S),J&&oe(J,S),ee(),te(),B.value=S}function Ne(S){G(S,"input"),nt(_e)}function _e(S=!0){const{value:q}=I;if(q){const{nTriggerFormChange:ee,nTriggerFormInput:te}=r,{onComplete:ie}=e;ie&&ie(q);const{value:J}=E,{value:fe}=x;S&&(J.splice(fe+1,J.length,q),x.value=fe+1),ee(),te()}}function fn(){const{value:S}=x;S-1<0||(G(E.value[S-1],"input"),_e(!1),x.value=S-1)}function bn(){const{value:S}=x;S<0||S+1>=E.value.length||(G(E.value[S+1],"input"),_e(!1),x.value=S+1)}function gn(){G(null,"input"),C(!1)}function _n(){const{value:S}=I,{onConfirm:q}=e;q&&q(S),C(!1)}const xn=y(()=>x.value>=1),yn=y(()=>{const{value:S}=E;return S.length>1&&x.value<S.length-1});ue(_,S=>{S||(E.value=[I.value],x.value=0)}),Ye(()=>{if(!(n&&n===I.value)){const{value:S}=$;S&&(Pe.value=S[0],pe.value=S[3],ye.value=[S[1],S[2]])}n=null});const Lt=y(()=>{const{value:S}=a,{common:{cubicBezierEaseInOut:q},self:{textColor:ee,color:te,panelFontSize:ie,boxShadow:J,border:fe,borderRadius:he,dividerColor:Oe,[we("height",S)]:Cn,[we("fontSize",S)]:kn}}=m.value;return{"--n-bezier":q,"--n-text-color":ee,"--n-color":te,"--n-panel-font-size":ie,"--n-font-size":kn,"--n-box-shadow":J,"--n-border":fe,"--n-border-radius":he,"--n-height":Cn,"--n-divider-color":Oe}}),Se=f?Ue("color-picker",y(()=>a.value[0]),Lt,e):void 0;function wn(){var S;const{value:q}=xe,{value:ee}=Pe,{internalActions:te,modes:ie,actions:J}=e,{value:fe}=m,{value:he}=c;return d("div",{class:[`${he}-color-picker-panel`,Se==null?void 0:Se.themeClass.value],onDragstart:Oe=>{Oe.preventDefault()},style:f?void 0:Lt.value},d("div",{class:`${he}-color-picker-control`},d(Ea,{clsPrefix:he,rgba:q,displayedHue:ee,displayedSv:ye.value,onUpdateSV:vt,onComplete:_e}),d("div",{class:`${he}-color-picker-preview`},d("div",{class:`${he}-color-picker-preview__sliders`},d(Pa,{clsPrefix:he,hue:ee,onUpdateHue:ft,onComplete:_e}),e.showAlpha?d(Da,{clsPrefix:he,rgba:q,alpha:pe.value,onUpdateAlpha:bt,onComplete:_e}):null),e.showPreview?d(Ya,{clsPrefix:he,mode:A.value,color:xe.value&&xt(xe.value),onUpdateColor:Oe=>{G(Oe,"input")}}):null),d(ja,{clsPrefix:he,showAlpha:e.showAlpha,mode:A.value,modes:ie,onUpdateMode:U,value:I.value,valueArr:pt.value,onUpdateValue:Ne}),((S=e.swatches)===null||S===void 0?void 0:S.length)&&d(Xa,{clsPrefix:he,mode:A.value,swatches:e.swatches,onUpdateColor:Oe=>{G(Oe,"input")}})),J!=null&&J.length?d("div",{class:`${he}-color-picker-action`},J.includes("confirm")&&d(Be,{size:"small",onClick:_n,theme:fe.peers.Button,themeOverrides:fe.peerOverrides.Button},{default:()=>s.value.confirm}),J.includes("clear")&&d(Be,{size:"small",onClick:gn,disabled:!I.value,theme:fe.peers.Button,themeOverrides:fe.peerOverrides.Button},{default:()=>s.value.clear})):null,t.action?d("div",{class:`${he}-color-picker-action`},{default:t.action}):te?d("div",{class:`${he}-color-picker-action`},te.includes("undo")&&d(Be,{size:"small",onClick:fn,disabled:!xn.value,theme:fe.peers.Button,themeOverrides:fe.peerOverrides.Button},{default:()=>s.value.undo}),te.includes("redo")&&d(Be,{size:"small",onClick:bn,disabled:!yn.value,theme:fe.peers.Button,themeOverrides:fe.peerOverrides.Button},{default:()=>s.value.redo})):null)}return{mergedClsPrefix:c,namespace:v,selfRef:o,hsla:me,rgba:xe,mergedShow:_,mergedDisabled:i,isMounted:ro(),adjustedTo:Jt(e),mergedValue:I,handleTriggerClick(){C(!0)},handleClickOutside(S){var q;!((q=o.value)===null||q===void 0)&&q.contains(Hn(S))||C(!1)},renderPanel:wn,cssVars:f?void 0:Lt,themeClass:Se==null?void 0:Se.themeClass,onRender:Se==null?void 0:Se.onRender}},render(){const{$slots:e,mergedClsPrefix:t,onRender:o}=this;return o==null||o(),d("div",{class:[this.themeClass,`${t}-color-picker`],ref:"selfRef",style:this.cssVars},d(Pr,null,{default:()=>[d(Tr,null,{default:()=>d(Ka,{clsPrefix:t,value:this.mergedValue,hsla:this.hsla,disabled:this.mergedDisabled,onClick:this.handleTriggerClick},{label:e.label})}),d(Dr,{placement:this.placement,show:this.mergedShow,containerClass:this.namespace,teleportDisabled:this.adjustedTo===Jt.tdkey,to:this.adjustedTo},{default:()=>d(Ct,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>this.mergedShow?lt(this.renderPanel(),[[Lo,this.handleClickOutside,void 0,{capture:!0}]]):null})})]}))}}),Qa=T({name:"NDrawerContent",inheritAttrs:!1,props:{blockScroll:Boolean,show:{type:Boolean,default:void 0},displayDirective:{type:String,required:!0},placement:{type:String,required:!0},contentStyle:[Object,String],nativeScrollbar:{type:Boolean,required:!0},scrollbarProps:Object,trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},showMask:{type:[Boolean,String],required:!0},resizable:Boolean,onClickoutside:Function,onAfterLeave:Function,onAfterEnter:Function,onEsc:Function},setup(e){const t=L(!!e.show),o=L(null),n=ve(ao);let r=0,a="",i=null;const s=L(!1),c=L(!1),v=y(()=>e.placement==="top"||e.placement==="bottom"),{mergedClsPrefixRef:f,mergedRtlRef:m}=Fe(e),h=Do("Drawer",m,f),_=U=>{c.value=!0,r=v.value?U.clientY:U.clientX,a=document.body.style.cursor,document.body.style.cursor=v.value?"ns-resize":"ew-resize",document.body.addEventListener("mousemove",E),document.body.addEventListener("mouseleave",P),document.body.addEventListener("mouseup",x)},C=()=>{i!==null&&(window.clearTimeout(i),i=null),c.value?s.value=!0:i=window.setTimeout(()=>{s.value=!0},300)},F=()=>{i!==null&&(window.clearTimeout(i),i=null),s.value=!1},{doUpdateHeight:B,doUpdateWidth:I}=n,E=U=>{var k,V;if(c.value)if(v.value){let g=((k=o.value)===null||k===void 0?void 0:k.offsetHeight)||0;const O=r-U.clientY;g+=e.placement==="bottom"?O:-O,B(g),r=U.clientY}else{let g=((V=o.value)===null||V===void 0?void 0:V.offsetWidth)||0;const O=r-U.clientX;g+=e.placement==="right"?O:-O,I(g),r=U.clientX}},x=()=>{c.value&&(r=0,c.value=!1,document.body.style.cursor=a,document.body.removeEventListener("mousemove",E),document.body.removeEventListener("mouseup",x),document.body.removeEventListener("mouseleave",P))},P=x;Ye(()=>{e.show&&(t.value=!0)}),ue(()=>e.show,U=>{U||x()}),oo(()=>{x()});const D=y(()=>{const{show:U}=e,k=[[Yt,U]];return e.showMask||k.push([Lo,e.onClickoutside,void 0,{capture:!0}]),k});function A(){var U;t.value=!1,(U=e.onAfterLeave)===null||U===void 0||U.call(e)}return Ln(y(()=>e.blockScroll&&t.value)),Ce(Un,o),Ce(Vn,null),Ce(Nn,null),{bodyRef:o,rtlEnabled:h,mergedClsPrefix:n.mergedClsPrefixRef,isMounted:n.isMountedRef,mergedTheme:n.mergedThemeRef,displayed:t,transitionName:y(()=>({right:"slide-in-from-right-transition",left:"slide-in-from-left-transition",top:"slide-in-from-top-transition",bottom:"slide-in-from-bottom-transition"})[e.placement]),handleAfterLeave:A,bodyDirectives:D,handleMousedownResizeTrigger:_,handleMouseenterResizeTrigger:C,handleMouseleaveResizeTrigger:F,isDragging:c,isHoverOnResizeTrigger:s}},render(){const{$slots:e,mergedClsPrefix:t}=this;return this.displayDirective==="show"||this.displayed||this.show?lt(d("div",{role:"none"},d(On,{disabled:!this.showMask||!this.trapFocus,active:this.show,autoFocus:this.autoFocus,onEsc:this.onEsc},{default:()=>d(Ct,{name:this.transitionName,appear:this.isMounted,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>lt(d("div",Et(this.$attrs,{role:"dialog",ref:"bodyRef","aria-modal":"true",class:[`${t}-drawer`,this.rtlEnabled&&`${t}-drawer--rtl`,`${t}-drawer--${this.placement}-placement`,this.isDragging&&`${t}-drawer--unselectable`,this.nativeScrollbar&&`${t}-drawer--native-scrollbar`]}),[this.resizable?d("div",{class:[`${t}-drawer__resize-trigger`,(this.isDragging||this.isHoverOnResizeTrigger)&&`${t}-drawer__resize-trigger--hover`],onMouseenter:this.handleMouseenterResizeTrigger,onMouseleave:this.handleMouseleaveResizeTrigger,onMousedown:this.handleMousedownResizeTrigger}):null,this.nativeScrollbar?d("div",{class:`${t}-drawer-content-wrapper`,style:this.contentStyle,role:"none"},e):d(lo,Object.assign({},this.scrollbarProps,{contentStyle:this.contentStyle,contentClass:`${t}-drawer-content-wrapper`,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar}),e)]),this.bodyDirectives)})})),[[Yt,this.displayDirective==="if"||this.displayed||this.show]]):null}}),{cubicBezierEaseIn:el,cubicBezierEaseOut:tl}=wt;function ol({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-right"}={}){return[w(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${el}`}),w(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${tl}`}),w(`&.${o}-transition-enter-to`,{transform:"translateX(0)"}),w(`&.${o}-transition-enter-from`,{transform:"translateX(100%)"}),w(`&.${o}-transition-leave-from`,{transform:"translateX(0)"}),w(`&.${o}-transition-leave-to`,{transform:"translateX(100%)"})]}const{cubicBezierEaseIn:nl,cubicBezierEaseOut:rl}=wt;function al({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-left"}={}){return[w(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${nl}`}),w(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${rl}`}),w(`&.${o}-transition-enter-to`,{transform:"translateX(0)"}),w(`&.${o}-transition-enter-from`,{transform:"translateX(-100%)"}),w(`&.${o}-transition-leave-from`,{transform:"translateX(0)"}),w(`&.${o}-transition-leave-to`,{transform:"translateX(-100%)"})]}const{cubicBezierEaseIn:ll,cubicBezierEaseOut:il}=wt;function sl({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-top"}={}){return[w(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${ll}`}),w(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${il}`}),w(`&.${o}-transition-enter-to`,{transform:"translateY(0)"}),w(`&.${o}-transition-enter-from`,{transform:"translateY(-100%)"}),w(`&.${o}-transition-leave-from`,{transform:"translateY(0)"}),w(`&.${o}-transition-leave-to`,{transform:"translateY(-100%)"})]}const{cubicBezierEaseIn:cl,cubicBezierEaseOut:dl}=wt;function ul({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-bottom"}={}){return[w(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${cl}`}),w(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${dl}`}),w(`&.${o}-transition-enter-to`,{transform:"translateY(0)"}),w(`&.${o}-transition-enter-from`,{transform:"translateY(100%)"}),w(`&.${o}-transition-leave-from`,{transform:"translateY(0)"}),w(`&.${o}-transition-leave-to`,{transform:"translateY(100%)"})]}const hl=w([R("drawer",`
 word-break: break-word;
 line-height: var(--n-line-height);
 position: absolute;
 pointer-events: all;
 box-shadow: var(--n-box-shadow);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background-color: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 `,[ol(),al(),sl(),ul(),j("unselectable",`
 user-select: none; 
 -webkit-user-select: none;
 `),j("native-scrollbar",[R("drawer-content-wrapper",`
 overflow: auto;
 height: 100%;
 `)]),z("resize-trigger",`
 position: absolute;
 background-color: #0000;
 transition: background-color .3s var(--n-bezier);
 `,[j("hover",`
 background-color: var(--n-resize-trigger-color-hover);
 `)]),R("drawer-content-wrapper",`
 box-sizing: border-box;
 `),R("drawer-content",`
 height: 100%;
 display: flex;
 flex-direction: column;
 `,[j("native-scrollbar",[R("drawer-body-content-wrapper",`
 height: 100%;
 overflow: auto;
 `)]),R("drawer-body",`
 flex: 1 0 0;
 overflow: hidden;
 `),R("drawer-body-content-wrapper",`
 box-sizing: border-box;
 padding: var(--n-body-padding);
 `),R("drawer-header",`
 font-weight: var(--n-title-font-weight);
 line-height: 1;
 font-size: var(--n-title-font-size);
 color: var(--n-title-text-color);
 padding: var(--n-header-padding);
 transition: border .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-divider-color);
 border-bottom: var(--n-header-border-bottom);
 display: flex;
 justify-content: space-between;
 align-items: center;
 `,[z("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),R("drawer-footer",`
 display: flex;
 justify-content: flex-end;
 border-top: var(--n-footer-border-top);
 transition: border .3s var(--n-bezier);
 padding: var(--n-footer-padding);
 `)]),j("right-placement",`
 top: 0;
 bottom: 0;
 right: 0;
 `,[z("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 left: 0;
 transform: translateX(-1.5px);
 cursor: ew-resize;
 `)]),j("left-placement",`
 top: 0;
 bottom: 0;
 left: 0;
 `,[z("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 right: 0;
 transform: translateX(1.5px);
 cursor: ew-resize;
 `)]),j("top-placement",`
 top: 0;
 left: 0;
 right: 0;
 `,[z("resize-trigger",`
 width: 100%;
 height: 3px;
 bottom: 0;
 left: 0;
 transform: translateY(1.5px);
 cursor: ns-resize;
 `)]),j("bottom-placement",`
 left: 0;
 bottom: 0;
 right: 0;
 `,[z("resize-trigger",`
 width: 100%;
 height: 3px;
 top: 0;
 left: 0;
 transform: translateY(-1.5px);
 cursor: ns-resize;
 `)])]),w("body",[w(">",[R("drawer-container",{position:"fixed"})])]),R("drawer-container",`
 position: relative;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 `,[w("> *",{pointerEvents:"all"})]),R("drawer-mask",`
 background-color: rgba(0, 0, 0, .3);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[j("invisible",`
 background-color: rgba(0, 0, 0, 0)
 `),jn({enterDuration:"0.2s",leaveDuration:"0.2s",enterCubicBezier:"var(--n-bezier-in)",leaveCubicBezier:"var(--n-bezier-out)"})])]),ml=Object.assign(Object.assign({},de.props),{show:Boolean,width:[Number,String],height:[Number,String],placement:{type:String,default:"right"},maskClosable:{type:Boolean,default:!0},showMask:{type:[Boolean,String],default:!0},to:[String,Object],displayDirective:{type:String,default:"if"},nativeScrollbar:{type:Boolean,default:!0},zIndex:Number,onMaskClick:Function,scrollbarProps:Object,contentStyle:[Object,String],trapFocus:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0},resizable:Boolean,defaultWidth:{type:[Number,String],default:251},defaultHeight:{type:[Number,String],default:251},onUpdateWidth:[Function,Array],onUpdateHeight:[Function,Array],"onUpdate:width":[Function,Array],"onUpdate:height":[Function,Array],"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,drawerStyle:[String,Object],drawerClass:String,target:null,onShow:Function,onHide:Function}),pl=T({name:"Drawer",inheritAttrs:!1,props:ml,setup(e){const{mergedClsPrefixRef:t,namespaceRef:o,inlineThemeDisabled:n}=Fe(e),r=ro(),a=de("Drawer","-drawer",hl,Kn,e,t),i=L(e.defaultWidth),s=L(e.defaultHeight),c=Le(be(e,"width"),i),v=Le(be(e,"height"),s),f=y(()=>{const{placement:D}=e;return D==="top"||D==="bottom"?"":Tt(c.value)}),m=y(()=>{const{placement:D}=e;return D==="left"||D==="right"?"":Tt(v.value)}),h=D=>{const{onUpdateWidth:A,"onUpdate:width":U}=e;A&&oe(A,D),U&&oe(U,D),i.value=D},_=D=>{const{onUpdateHeight:A,"onUpdate:width":U}=e;A&&oe(A,D),U&&oe(U,D),s.value=D},C=y(()=>[{width:f.value,height:m.value},e.drawerStyle||""]);function F(D){const{onMaskClick:A,maskClosable:U}=e;U&&E(!1),A&&A(D)}const B=Wn();function I(D){var A;(A=e.onEsc)===null||A===void 0||A.call(e),e.show&&e.closeOnEsc&&Xn(D)&&!B.value&&E(!1)}function E(D){const{onHide:A,onUpdateShow:U,"onUpdate:show":k}=e;U&&oe(U,D),k&&oe(k,D),A&&!D&&oe(A,D)}Ce(ao,{isMountedRef:r,mergedThemeRef:a,mergedClsPrefixRef:t,doUpdateShow:E,doUpdateHeight:_,doUpdateWidth:h});const x=y(()=>{const{common:{cubicBezierEaseInOut:D,cubicBezierEaseIn:A,cubicBezierEaseOut:U},self:{color:k,textColor:V,boxShadow:g,lineHeight:O,headerPadding:W,footerPadding:ne,bodyPadding:re,titleFontSize:ae,titleTextColor:$,titleFontWeight:xe,headerBorderBottom:me,footerBorderTop:pt,closeIconColor:Pe,closeIconColorHover:pe,closeIconColorPressed:ye,closeColorHover:vt,closeColorPressed:ft,closeIconSize:bt,closeSize:G,closeBorderRadius:Ne,resizableTriggerColorHover:_e}}=a.value;return{"--n-line-height":O,"--n-color":k,"--n-text-color":V,"--n-box-shadow":g,"--n-bezier":D,"--n-bezier-out":U,"--n-bezier-in":A,"--n-header-padding":W,"--n-body-padding":re,"--n-footer-padding":ne,"--n-title-text-color":$,"--n-title-font-size":ae,"--n-title-font-weight":xe,"--n-header-border-bottom":me,"--n-footer-border-top":pt,"--n-close-icon-color":Pe,"--n-close-icon-color-hover":pe,"--n-close-icon-color-pressed":ye,"--n-close-size":G,"--n-close-color-hover":vt,"--n-close-color-pressed":ft,"--n-close-icon-size":bt,"--n-close-border-radius":Ne,"--n-resize-trigger-color-hover":_e}}),P=n?Ue("drawer",void 0,x,e):void 0;return{mergedClsPrefix:t,namespace:o,mergedBodyStyle:C,handleMaskClick:F,handleEsc:I,mergedTheme:a,cssVars:n?void 0:x,themeClass:P==null?void 0:P.themeClass,onRender:P==null?void 0:P.onRender,isMounted:r}},render(){const{mergedClsPrefix:e}=this;return d(Po,{to:this.to,show:this.show},{default:()=>{var t;return(t=this.onRender)===null||t===void 0||t.call(this),lt(d("div",{class:[`${e}-drawer-container`,this.namespace,this.themeClass],style:this.cssVars,role:"none"},this.showMask?d(Ct,{name:"fade-in-transition",appear:this.isMounted},{default:()=>this.show?d("div",{"aria-hidden":!0,class:[`${e}-drawer-mask`,this.showMask==="transparent"&&`${e}-drawer-mask--invisible`],onClick:this.handleMaskClick}):null}):null,d(Qa,Object.assign({},this.$attrs,{class:[this.drawerClass,this.$attrs.class],style:[this.mergedBodyStyle,this.$attrs.style],blockScroll:this.blockScroll,contentStyle:this.contentStyle,placement:this.placement,scrollbarProps:this.scrollbarProps,show:this.show,displayDirective:this.displayDirective,nativeScrollbar:this.nativeScrollbar,onAfterEnter:this.onAfterEnter,onAfterLeave:this.onAfterLeave,trapFocus:this.trapFocus,autoFocus:this.autoFocus,resizable:this.resizable,showMask:this.showMask,onEsc:this.handleEsc,onClickoutside:this.handleMaskClick}),this.$slots)),[[qn,{zIndex:this.zIndex,enabled:this.show}]])}})}}),vl={title:{type:String},headerStyle:[Object,String],footerStyle:[Object,String],bodyStyle:[Object,String],bodyContentStyle:[Object,String],nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,closable:Boolean},fl=T({name:"DrawerContent",props:vl,setup(){const e=ve(ao,null);e||Yn("drawer-content","`n-drawer-content` must be placed inside `n-drawer`.");const{doUpdateShow:t}=e;function o(){t(!1)}return{handleCloseClick:o,mergedTheme:e.mergedThemeRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{title:e,mergedClsPrefix:t,nativeScrollbar:o,mergedTheme:n,bodyStyle:r,bodyContentStyle:a,headerStyle:i,footerStyle:s,scrollbarProps:c,closable:v,$slots:f}=this;return d("div",{role:"none",class:[`${t}-drawer-content`,o&&`${t}-drawer-content--native-scrollbar`]},f.header||e||v?d("div",{class:`${t}-drawer-header`,style:i,role:"none"},d("div",{class:`${t}-drawer-header__main`,role:"heading","aria-level":"1"},f.header!==void 0?f.header():e),v&&d(Zn,{onClick:this.handleCloseClick,clsPrefix:t,class:`${t}-drawer-header__close`,absolute:!0})):null,o?d("div",{class:`${t}-drawer-body`,style:r,role:"none"},d("div",{class:`${t}-drawer-body-content-wrapper`,style:a,role:"none"},f)):d(lo,Object.assign({themeOverrides:n.peerOverrides.Scrollbar,theme:n.peers.Scrollbar},c,{class:`${t}-drawer-body`,contentClass:`${t}-drawer-body-content-wrapper`,contentStyle:a}),f),f.footer?d("div",{class:`${t}-drawer-footer`,style:s,role:"none"},f.footer()):null)}}),bl=e=>{const{primaryColor:t,opacityDisabled:o,borderRadius:n,textColor3:r}=e,a="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},Gn),{iconColor:r,textColor:"white",loadingColor:t,opacityDisabled:o,railColor:a,railColorActive:t,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:n,railBorderRadiusMedium:n,railBorderRadiusLarge:n,buttonBorderRadiusSmall:n,buttonBorderRadiusMedium:n,buttonBorderRadiusLarge:n,boxShadowFocus:`0 0 0 2px ${Jn(t,{alpha:.2})}`})},gl={name:"Switch",common:no,self:bl},_l=gl,xl=Ze("n-layout-sider"),St=Ze("n-menu"),po=Ze("n-submenu"),vo=Ze("n-menu-item-group"),It=8;function fo(e){const t=ve(St),{props:o,mergedCollapsedRef:n}=t,r=ve(po,null),a=ve(vo,null),i=y(()=>o.mode==="horizontal"),s=y(()=>i.value?o.dropdownPlacement:"tmNodes"in e?"right-start":"right"),c=y(()=>{var h;return Math.max((h=o.collapsedIconSize)!==null&&h!==void 0?h:o.iconSize,o.iconSize)}),v=y(()=>{var h;return!i.value&&e.root&&n.value&&(h=o.collapsedIconSize)!==null&&h!==void 0?h:o.iconSize}),f=y(()=>{if(i.value)return;const{collapsedWidth:h,indent:_,rootIndent:C}=o,{root:F,isGroup:B}=e,I=C===void 0?_:C;if(F)return n.value?h/2-c.value/2:I;if(a)return _/2+a.paddingLeftRef.value;if(r)return(B?_/2:_)+r.paddingLeftRef.value}),m=y(()=>{const{collapsedWidth:h,indent:_,rootIndent:C}=o,{value:F}=c,{root:B}=e;return i.value||!B||!n.value?It:(C===void 0?_:C)+F+It-(h+F)/2});return{dropdownPlacement:s,activeIconSize:v,maxIconSize:c,paddingLeft:f,iconMarginRight:m,NMenu:t,NSubmenu:r}}const bo={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},an=Object.assign(Object.assign({},bo),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),yl=T({name:"MenuOptionGroup",props:an,setup(e){Ce(po,null);const t=fo(e);Ce(vo,{paddingLeftRef:t.paddingLeft});const{mergedClsPrefixRef:o,props:n}=ve(St);return function(){const{value:r}=o,a=t.paddingLeft.value,{nodeProps:i}=n,s=i==null?void 0:i(e.tmNode.rawNode);return d("div",{class:`${r}-menu-item-group`,role:"group"},d("div",Object.assign({},s,{class:[`${r}-menu-item-group-title`,s==null?void 0:s.class],style:[(s==null?void 0:s.style)||"",a!==void 0?`padding-left: ${a}px;`:""]}),ot(e.title),e.extra?d(Z,null," ",ot(e.extra)):null),d("div",null,e.tmNodes.map(c=>go(c,n))))}}}),ln=T({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:t}=ve(St);return{menuProps:t,style:y(()=>{const{paddingLeft:o}=e;return{paddingLeft:o&&`${o}px`}}),iconStyle:y(()=>{const{maxIconSize:o,activeIconSize:n,iconMarginRight:r}=e;return{width:`${o}px`,height:`${o}px`,fontSize:`${n}px`,marginRight:`${r}px`}})}},render(){const{clsPrefix:e,tmNode:t,menuProps:{renderIcon:o,renderLabel:n,renderExtra:r,expandIcon:a}}=this,i=o?o(t.rawNode):ot(this.icon);return d("div",{onClick:s=>{var c;(c=this.onClick)===null||c===void 0||c.call(this,s)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},i&&d("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[i]),d("div",{class:`${e}-menu-item-content-header`,role:"none"},n?n(t.rawNode):ot(this.title),this.extra||r?d("span",{class:`${e}-menu-item-content-header__extra`}," ",r?r(t.rawNode):ot(this.extra)):null),this.showArrow?d(To,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>a?a(t.rawNode):d(Jr,null)}):null)}}),sn=Object.assign(Object.assign({},bo),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),wl=T({name:"Submenu",props:sn,setup(e){const t=fo(e),{NMenu:o,NSubmenu:n}=t,{props:r,mergedCollapsedRef:a,mergedThemeRef:i}=o,s=y(()=>{const{disabled:h}=e;return n!=null&&n.mergedDisabledRef.value||r.disabled?!0:h}),c=L(!1);Ce(po,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:s}),Ce(vo,null);function v(){const{onClick:h}=e;h&&h()}function f(){s.value||(a.value||o.toggleExpand(e.internalKey),v())}function m(h){c.value=h}return{menuProps:r,mergedTheme:i,doSelect:o.doSelect,inverted:o.invertedRef,isHorizontal:o.isHorizontalRef,mergedClsPrefix:o.mergedClsPrefixRef,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,iconMarginRight:t.iconMarginRight,dropdownPlacement:t.dropdownPlacement,dropdownShow:c,paddingLeft:t.paddingLeft,mergedDisabled:s,mergedValue:o.mergedValueRef,childActive:Zt(()=>o.activePathRef.value.includes(e.internalKey)),collapsed:y(()=>r.mode==="horizontal"?!1:a.value?!0:!o.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:y(()=>!s.value&&(r.mode==="horizontal"||a.value)),handlePopoverShowChange:m,handleClick:f}},render(){var e;const{mergedClsPrefix:t,menuProps:{renderIcon:o,renderLabel:n}}=this,r=()=>{const{isHorizontal:i,paddingLeft:s,collapsed:c,mergedDisabled:v,maxIconSize:f,activeIconSize:m,title:h,childActive:_,icon:C,handleClick:F,menuProps:{nodeProps:B},dropdownShow:I,iconMarginRight:E,tmNode:x,mergedClsPrefix:P}=this,D=B==null?void 0:B(x.rawNode);return d("div",Object.assign({},D,{class:[`${P}-menu-item`,D==null?void 0:D.class],role:"menuitem"}),d(ln,{tmNode:x,paddingLeft:s,collapsed:c,disabled:v,iconMarginRight:E,maxIconSize:f,activeIconSize:m,title:h,extra:this.extra,showArrow:!i,childActive:_,clsPrefix:P,icon:C,hover:I,onClick:F}))},a=()=>d(Io,null,{default:()=>{const{tmNodes:i,collapsed:s}=this;return s?null:d("div",{class:`${t}-submenu-children`,role:"menu"},i.map(c=>go(c,this.menuProps)))}});return this.root?d(zt,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:o,renderLabel:n}),{default:()=>d("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},r(),this.isHorizontal?null:a())}):d("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},r(),a())}}),cn=Object.assign(Object.assign({},bo),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),Cl=T({name:"MenuOption",props:cn,setup(e){const t=fo(e),{NSubmenu:o,NMenu:n}=t,{props:r,mergedClsPrefixRef:a,mergedCollapsedRef:i}=n,s=o?o.mergedDisabledRef:{value:!1},c=y(()=>s.value||e.disabled);function v(m){const{onClick:h}=e;h&&h(m)}function f(m){c.value||(n.doSelect(e.internalKey,e.tmNode.rawNode),v(m))}return{mergedClsPrefix:a,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:n.mergedThemeRef,menuProps:r,dropdownEnabled:Zt(()=>e.root&&i.value&&r.mode!=="horizontal"&&!c.value),selected:Zt(()=>n.mergedValueRef.value===e.internalKey),mergedDisabled:c,handleClick:f}},render(){const{mergedClsPrefix:e,mergedTheme:t,tmNode:o,menuProps:{renderLabel:n,nodeProps:r}}=this,a=r==null?void 0:r(o.rawNode);return d("div",Object.assign({},a,{role:"menuitem",class:[`${e}-menu-item`,a==null?void 0:a.class]}),d(ho,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>n?n(o.rawNode):ot(this.title),trigger:()=>d(ln,{tmNode:o,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),kl=T({name:"MenuDivider",setup(){const e=ve(St),{mergedClsPrefixRef:t,isHorizontalRef:o}=e;return()=>o.value?null:d("div",{class:`${t.value}-menu-divider`})}}),$l=io(an),zl=io(cn),Sl=io(sn);function dn(e){return e.type==="divider"||e.type==="render"}function Rl(e){return e.type==="divider"}function go(e,t){const{rawNode:o}=e,{show:n}=o;if(n===!1)return null;if(dn(o))return Rl(o)?d(kl,Object.assign({key:e.key},o.props)):null;const{labelField:r}=t,{key:a,level:i,isGroup:s}=e,c=Object.assign(Object.assign({},o),{title:o.title||o[r],extra:o.titleExtra||o.extra,key:a,internalKey:a,level:i,root:i===0,isGroup:s});return e.children?e.isGroup?d(yl,Ut(c,$l,{tmNode:e,tmNodes:e.children,key:a})):d(wl,Ut(c,Sl,{key:a,rawNodes:o[t.childrenField],tmNodes:e.children,tmNode:e})):d(Cl,Ut(c,zl,{key:a,tmNode:e}))}const Mo=[w("&::before","background-color: var(--n-item-color-hover);"),z("arrow",`
 color: var(--n-arrow-color-hover);
 `),z("icon",`
 color: var(--n-item-icon-color-hover);
 `),R("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[w("a",`
 color: var(--n-item-text-color-hover);
 `),z("extra",`
 color: var(--n-item-text-color-hover);
 `)])],Bo=[z("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),R("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[w("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),z("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],Ml=w([R("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[j("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[R("submenu","margin: 0;"),R("menu-item","margin: 0;"),R("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[w("&::before","display: none;"),j("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),R("menu-item-content",[j("selected",[z("icon","color: var(--n-item-icon-color-active-horizontal);"),R("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[w("a","color: var(--n-item-text-color-active-horizontal);"),z("extra","color: var(--n-item-text-color-active-horizontal);")])]),j("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[R("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[w("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),z("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),z("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),et("disabled",[et("selected, child-active",[w("&:focus-within",Bo)]),j("selected",[We(null,[z("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),R("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[w("a","color: var(--n-item-text-color-active-hover-horizontal);"),z("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),j("child-active",[We(null,[z("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),R("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[w("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),z("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),We("border-bottom: 2px solid var(--n-border-color-horizontal);",Bo)]),R("menu-item-content-header",[w("a","color: var(--n-item-text-color-horizontal);")])])]),j("collapsed",[R("menu-item-content",[j("selected",[w("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),R("menu-item-content-header","opacity: 0;"),z("arrow","opacity: 0;"),z("icon","color: var(--n-item-icon-color-collapsed);")])]),R("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),R("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[w("> *","z-index: 1;"),w("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),j("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),j("collapsed",[z("arrow","transform: rotate(0);")]),j("selected",[w("&::before","background-color: var(--n-item-color-active);"),z("arrow","color: var(--n-arrow-color-active);"),z("icon","color: var(--n-item-icon-color-active);"),R("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[w("a","color: var(--n-item-text-color-active);"),z("extra","color: var(--n-item-text-color-active);")])]),j("child-active",[R("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[w("a",`
 color: var(--n-item-text-color-child-active);
 `),z("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),z("arrow",`
 color: var(--n-arrow-color-child-active);
 `),z("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),et("disabled",[et("selected, child-active",[w("&:focus-within",Mo)]),j("selected",[We(null,[z("arrow","color: var(--n-arrow-color-active-hover);"),z("icon","color: var(--n-item-icon-color-active-hover);"),R("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[w("a","color: var(--n-item-text-color-active-hover);"),z("extra","color: var(--n-item-text-color-active-hover);")])])]),j("child-active",[We(null,[z("arrow","color: var(--n-arrow-color-child-active-hover);"),z("icon","color: var(--n-item-icon-color-child-active-hover);"),R("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[w("a","color: var(--n-item-text-color-child-active-hover);"),z("extra","color: var(--n-item-text-color-child-active-hover);")])])]),j("selected",[We(null,[w("&::before","background-color: var(--n-item-color-active-hover);")])]),We(null,Mo)]),z("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),z("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),R("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `,[w("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[w("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),z("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),R("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[R("menu-item-content",`
 height: var(--n-item-height);
 `),R("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[Qn({duration:".2s"})])]),R("menu-item-group",[R("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),R("menu-tooltip",[w("a",`
 color: inherit;
 text-decoration: none;
 `)]),R("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function We(e,t){return[j("hover",e,t),w("&:hover",e,t)]}const Bl=Object.assign(Object.assign({},de.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}}),_o=T({name:"Menu",props:Bl,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Fe(e),n=de("Menu","-menu",Ml,er,e,t),r=ve(xl,null),a=y(()=>{var k;const{collapsed:V}=e;if(V!==void 0)return V;if(r){const{collapseModeRef:g,collapsedRef:O}=r;if(g.value==="width")return(k=O.value)!==null&&k!==void 0?k:!1}return!1}),i=y(()=>{const{keyField:k,childrenField:V,disabledField:g}=e;return Ur(e.items||e.options,{getIgnored(O){return dn(O)},getChildren(O){return O[V]},getDisabled(O){return O[g]},getKey(O){var W;return(W=O[k])!==null&&W!==void 0?W:O.name}})}),s=y(()=>new Set(i.value.treeNodes.map(k=>k.key))),{watchProps:c}=e,v=L(null);c!=null&&c.includes("defaultValue")?Ye(()=>{v.value=e.defaultValue}):v.value=e.defaultValue;const f=be(e,"value"),m=Le(f,v),h=L([]),_=()=>{h.value=e.defaultExpandAll?i.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||i.value.getPath(m.value,{includeSelf:!1}).keyPath};c!=null&&c.includes("defaultExpandedKeys")?Ye(_):_();const C=Vr(e,["expandedNames","expandedKeys"]),F=Le(C,h),B=y(()=>i.value.treeNodes),I=y(()=>i.value.getPath(m.value).keyPath);Ce(St,{props:e,mergedCollapsedRef:a,mergedThemeRef:n,mergedValueRef:m,mergedExpandedKeysRef:F,activePathRef:I,mergedClsPrefixRef:t,isHorizontalRef:y(()=>e.mode==="horizontal"),invertedRef:be(e,"inverted"),doSelect:E,toggleExpand:P});function E(k,V){const{"onUpdate:value":g,onUpdateValue:O,onSelect:W}=e;O&&oe(O,k,V),g&&oe(g,k,V),W&&oe(W,k,V),v.value=k}function x(k){const{"onUpdate:expandedKeys":V,onUpdateExpandedKeys:g,onExpandedNamesChange:O,onOpenNamesChange:W}=e;V&&oe(V,k),g&&oe(g,k),O&&oe(O,k),W&&oe(W,k),h.value=k}function P(k){const V=Array.from(F.value),g=V.findIndex(O=>O===k);if(~g)V.splice(g,1);else{if(e.accordion&&s.value.has(k)){const O=V.findIndex(W=>s.value.has(W));O>-1&&V.splice(O,1)}V.push(k)}x(V)}const D=k=>{const V=i.value.getPath(k??m.value,{includeSelf:!1}).keyPath;if(!V.length)return;const g=Array.from(F.value),O=new Set([...g,...V]);e.accordion&&s.value.forEach(W=>{O.has(W)&&!V.includes(W)&&O.delete(W)}),x(Array.from(O))},A=y(()=>{const{inverted:k}=e,{common:{cubicBezierEaseInOut:V},self:g}=n.value,{borderRadius:O,borderColorHorizontal:W,fontSize:ne,itemHeight:re,dividerColor:ae}=g,$={"--n-divider-color":ae,"--n-bezier":V,"--n-font-size":ne,"--n-border-color-horizontal":W,"--n-border-radius":O,"--n-item-height":re};return k?($["--n-group-text-color"]=g.groupTextColorInverted,$["--n-color"]=g.colorInverted,$["--n-item-text-color"]=g.itemTextColorInverted,$["--n-item-text-color-hover"]=g.itemTextColorHoverInverted,$["--n-item-text-color-active"]=g.itemTextColorActiveInverted,$["--n-item-text-color-child-active"]=g.itemTextColorChildActiveInverted,$["--n-item-text-color-child-active-hover"]=g.itemTextColorChildActiveInverted,$["--n-item-text-color-active-hover"]=g.itemTextColorActiveHoverInverted,$["--n-item-icon-color"]=g.itemIconColorInverted,$["--n-item-icon-color-hover"]=g.itemIconColorHoverInverted,$["--n-item-icon-color-active"]=g.itemIconColorActiveInverted,$["--n-item-icon-color-active-hover"]=g.itemIconColorActiveHoverInverted,$["--n-item-icon-color-child-active"]=g.itemIconColorChildActiveInverted,$["--n-item-icon-color-child-active-hover"]=g.itemIconColorChildActiveHoverInverted,$["--n-item-icon-color-collapsed"]=g.itemIconColorCollapsedInverted,$["--n-item-text-color-horizontal"]=g.itemTextColorHorizontalInverted,$["--n-item-text-color-hover-horizontal"]=g.itemTextColorHoverHorizontalInverted,$["--n-item-text-color-active-horizontal"]=g.itemTextColorActiveHorizontalInverted,$["--n-item-text-color-child-active-horizontal"]=g.itemTextColorChildActiveHorizontalInverted,$["--n-item-text-color-child-active-hover-horizontal"]=g.itemTextColorChildActiveHoverHorizontalInverted,$["--n-item-text-color-active-hover-horizontal"]=g.itemTextColorActiveHoverHorizontalInverted,$["--n-item-icon-color-horizontal"]=g.itemIconColorHorizontalInverted,$["--n-item-icon-color-hover-horizontal"]=g.itemIconColorHoverHorizontalInverted,$["--n-item-icon-color-active-horizontal"]=g.itemIconColorActiveHorizontalInverted,$["--n-item-icon-color-active-hover-horizontal"]=g.itemIconColorActiveHoverHorizontalInverted,$["--n-item-icon-color-child-active-horizontal"]=g.itemIconColorChildActiveHorizontalInverted,$["--n-item-icon-color-child-active-hover-horizontal"]=g.itemIconColorChildActiveHoverHorizontalInverted,$["--n-arrow-color"]=g.arrowColorInverted,$["--n-arrow-color-hover"]=g.arrowColorHoverInverted,$["--n-arrow-color-active"]=g.arrowColorActiveInverted,$["--n-arrow-color-active-hover"]=g.arrowColorActiveHoverInverted,$["--n-arrow-color-child-active"]=g.arrowColorChildActiveInverted,$["--n-arrow-color-child-active-hover"]=g.arrowColorChildActiveHoverInverted,$["--n-item-color-hover"]=g.itemColorHoverInverted,$["--n-item-color-active"]=g.itemColorActiveInverted,$["--n-item-color-active-hover"]=g.itemColorActiveHoverInverted,$["--n-item-color-active-collapsed"]=g.itemColorActiveCollapsedInverted):($["--n-group-text-color"]=g.groupTextColor,$["--n-color"]=g.color,$["--n-item-text-color"]=g.itemTextColor,$["--n-item-text-color-hover"]=g.itemTextColorHover,$["--n-item-text-color-active"]=g.itemTextColorActive,$["--n-item-text-color-child-active"]=g.itemTextColorChildActive,$["--n-item-text-color-child-active-hover"]=g.itemTextColorChildActiveHover,$["--n-item-text-color-active-hover"]=g.itemTextColorActiveHover,$["--n-item-icon-color"]=g.itemIconColor,$["--n-item-icon-color-hover"]=g.itemIconColorHover,$["--n-item-icon-color-active"]=g.itemIconColorActive,$["--n-item-icon-color-active-hover"]=g.itemIconColorActiveHover,$["--n-item-icon-color-child-active"]=g.itemIconColorChildActive,$["--n-item-icon-color-child-active-hover"]=g.itemIconColorChildActiveHover,$["--n-item-icon-color-collapsed"]=g.itemIconColorCollapsed,$["--n-item-text-color-horizontal"]=g.itemTextColorHorizontal,$["--n-item-text-color-hover-horizontal"]=g.itemTextColorHoverHorizontal,$["--n-item-text-color-active-horizontal"]=g.itemTextColorActiveHorizontal,$["--n-item-text-color-child-active-horizontal"]=g.itemTextColorChildActiveHorizontal,$["--n-item-text-color-child-active-hover-horizontal"]=g.itemTextColorChildActiveHoverHorizontal,$["--n-item-text-color-active-hover-horizontal"]=g.itemTextColorActiveHoverHorizontal,$["--n-item-icon-color-horizontal"]=g.itemIconColorHorizontal,$["--n-item-icon-color-hover-horizontal"]=g.itemIconColorHoverHorizontal,$["--n-item-icon-color-active-horizontal"]=g.itemIconColorActiveHorizontal,$["--n-item-icon-color-active-hover-horizontal"]=g.itemIconColorActiveHoverHorizontal,$["--n-item-icon-color-child-active-horizontal"]=g.itemIconColorChildActiveHorizontal,$["--n-item-icon-color-child-active-hover-horizontal"]=g.itemIconColorChildActiveHoverHorizontal,$["--n-arrow-color"]=g.arrowColor,$["--n-arrow-color-hover"]=g.arrowColorHover,$["--n-arrow-color-active"]=g.arrowColorActive,$["--n-arrow-color-active-hover"]=g.arrowColorActiveHover,$["--n-arrow-color-child-active"]=g.arrowColorChildActive,$["--n-arrow-color-child-active-hover"]=g.arrowColorChildActiveHover,$["--n-item-color-hover"]=g.itemColorHover,$["--n-item-color-active"]=g.itemColorActive,$["--n-item-color-active-hover"]=g.itemColorActiveHover,$["--n-item-color-active-collapsed"]=g.itemColorActiveCollapsed),$}),U=o?Ue("menu",y(()=>e.inverted?"a":"b"),A,e):void 0;return{mergedClsPrefix:t,controlledExpandedKeys:C,uncontrolledExpanededKeys:h,mergedExpandedKeys:F,uncontrolledValue:v,mergedValue:m,activePath:I,tmNodes:B,mergedTheme:n,mergedCollapsed:a,cssVars:o?void 0:A,themeClass:U==null?void 0:U.themeClass,onRender:U==null?void 0:U.onRender,showOption:D}},render(){const{mergedClsPrefix:e,mode:t,themeClass:o,onRender:n}=this;return n==null||n(),d("div",{role:t==="horizontal"?"menubar":"menu",class:[`${e}-menu`,o,`${e}-menu--${t}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(r=>go(r,this.$props)))}}),Il=Object.assign(Object.assign({},de.props),{trigger:String,xScrollable:Boolean,onScroll:Function,size:Number}),Fl=T({name:"Scrollbar",props:Il,setup(){const e=L(null);return Object.assign(Object.assign({},{scrollTo:(...o)=>{var n;(n=e.value)===null||n===void 0||n.scrollTo(o[0],o[1])},scrollBy:(...o)=>{var n;(n=e.value)===null||n===void 0||n.scrollBy(o[0],o[1])}}),{scrollbarInstRef:e})},render(){return d(lo,Object.assign({ref:"scrollbarInstRef"},this.$props),this.$slots)}}),ht=Fl,Al=R("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[z("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),z("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),z("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),R("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[Co({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),z("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),z("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),z("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),w("&:focus",[z("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),j("round",[z("rail","border-radius: calc(var(--n-rail-height) / 2);",[z("button","border-radius: calc(var(--n-button-height) / 2);")])]),et("disabled",[et("icon",[j("rubber-band",[j("pressed",[z("rail",[z("button","max-width: var(--n-button-width-pressed);")])]),z("rail",[w("&:active",[z("button","max-width: var(--n-button-width-pressed);")])]),j("active",[j("pressed",[z("rail",[z("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),z("rail",[w("&:active",[z("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),j("active",[z("rail",[z("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),z("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[z("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[Co()]),z("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),j("active",[z("rail","background-color: var(--n-rail-color-active);")]),j("loading",[z("rail",`
 cursor: wait;
 `)]),j("disabled",[z("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),Pl=Object.assign(Object.assign({},de.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let _t;const xo=T({name:"Switch",props:Pl,setup(e){_t===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?_t=CSS.supports("width","max(1px)"):_t=!1:_t=!0);const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Fe(e),n=de("Switch","-switch",Al,_l,e,t),r=Ho(e),{mergedSizeRef:a,mergedDisabledRef:i}=r,s=L(e.defaultValue),c=be(e,"value"),v=Le(c,s),f=y(()=>v.value===e.checkedValue),m=L(!1),h=L(!1),_=y(()=>{const{railStyle:k}=e;if(k)return k({focused:h.value,checked:f.value})});function C(k){const{"onUpdate:value":V,onChange:g,onUpdateValue:O}=e,{nTriggerFormInput:W,nTriggerFormChange:ne}=r;V&&oe(V,k),O&&oe(O,k),g&&oe(g,k),s.value=k,W(),ne()}function F(){const{nTriggerFormFocus:k}=r;k()}function B(){const{nTriggerFormBlur:k}=r;k()}function I(){e.loading||i.value||(v.value!==e.checkedValue?C(e.checkedValue):C(e.uncheckedValue))}function E(){h.value=!0,F()}function x(){h.value=!1,B(),m.value=!1}function P(k){e.loading||i.value||k.key===" "&&(v.value!==e.checkedValue?C(e.checkedValue):C(e.uncheckedValue),m.value=!1)}function D(k){e.loading||i.value||k.key===" "&&(k.preventDefault(),m.value=!0)}const A=y(()=>{const{value:k}=a,{self:{opacityDisabled:V,railColor:g,railColorActive:O,buttonBoxShadow:W,buttonColor:ne,boxShadowFocus:re,loadingColor:ae,textColor:$,iconColor:xe,[we("buttonHeight",k)]:me,[we("buttonWidth",k)]:pt,[we("buttonWidthPressed",k)]:Pe,[we("railHeight",k)]:pe,[we("railWidth",k)]:ye,[we("railBorderRadius",k)]:vt,[we("buttonBorderRadius",k)]:ft},common:{cubicBezierEaseInOut:bt}}=n.value;let G,Ne,_e;return _t?(G=`calc((${pe} - ${me}) / 2)`,Ne=`max(${pe}, ${me})`,_e=`max(${ye}, calc(${ye} + ${me} - ${pe}))`):(G=Vt((Re(pe)-Re(me))/2),Ne=Vt(Math.max(Re(pe),Re(me))),_e=Re(pe)>Re(me)?ye:Vt(Re(ye)+Re(me)-Re(pe))),{"--n-bezier":bt,"--n-button-border-radius":ft,"--n-button-box-shadow":W,"--n-button-color":ne,"--n-button-width":pt,"--n-button-width-pressed":Pe,"--n-button-height":me,"--n-height":Ne,"--n-offset":G,"--n-opacity-disabled":V,"--n-rail-border-radius":vt,"--n-rail-color":g,"--n-rail-color-active":O,"--n-rail-height":pe,"--n-rail-width":ye,"--n-width":_e,"--n-box-shadow-focus":re,"--n-loading-color":ae,"--n-text-color":$,"--n-icon-color":xe}}),U=o?Ue("switch",y(()=>a.value[0]),A,e):void 0;return{handleClick:I,handleBlur:x,handleFocus:E,handleKeyup:P,handleKeydown:D,mergedRailStyle:_,pressed:m,mergedClsPrefix:t,mergedValue:v,checked:f,mergedDisabled:i,cssVars:o?void 0:A,themeClass:U==null?void 0:U.themeClass,onRender:U==null?void 0:U.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:t,checked:o,mergedRailStyle:n,onRender:r,$slots:a}=this;r==null||r();const{checked:i,unchecked:s,icon:c,"checked-icon":v,"unchecked-icon":f}=a,m=!(Ft(c)&&Ft(v)&&Ft(f));return d("div",{role:"switch","aria-checked":o,class:[`${e}-switch`,this.themeClass,m&&`${e}-switch--icon`,o&&`${e}-switch--active`,t&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},d("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:n},Te(i,h=>Te(s,_=>h||_?d("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},d("div",{class:`${e}-switch__rail-placeholder`},d("div",{class:`${e}-switch__button-placeholder`}),h),d("div",{class:`${e}-switch__rail-placeholder`},d("div",{class:`${e}-switch__button-placeholder`}),_)):null)),d("div",{class:`${e}-switch__button`},Te(c,h=>Te(v,_=>Te(f,C=>d(tr,null,{default:()=>this.loading?d(or,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(_||h)?d("div",{class:`${e}-switch__button-icon`,key:_?"checked-icon":"icon"},_||h):!this.checked&&(C||h)?d("div",{class:`${e}-switch__button-icon`,key:C?"unchecked-icon":"icon"},C||h):null})))),Te(i,h=>h&&d("div",{key:"checked",class:`${e}-switch__checked`},h)),Te(s,h=>h&&d("div",{key:"unchecked",class:`${e}-switch__unchecked`},h)))))}});function Ht(){const e=ge(),t=X(),o=nr(rr),n=y(()=>{const f="vertical",m="horizontal";return t.layout.mode.includes(f)?f:m}),r=o.smaller("sm"),a={vertical:{showLogo:!1,showHeaderMenu:!1,showMenuCollapse:!0},"vertical-mix":{showLogo:!1,showHeaderMenu:!1,showMenuCollapse:!1},horizontal:{showLogo:!0,showHeaderMenu:!0,showMenuCollapse:!1},"horizontal-mix":{showLogo:!0,showHeaderMenu:!1,showMenuCollapse:!0}},i=y(()=>a[t.layout.mode]),s=y(()=>t.layout.mode!=="horizontal"),c=y(()=>{const{width:f,mixWidth:m,mixChildMenuWidth:h}=t.sider,_=t.layout.mode==="vertical-mix";let C=_?m:f;return _&&e.mixSiderFixed&&(C+=h),C}),v=y(()=>{const{collapsedWidth:f,mixCollapsedWidth:m,mixChildMenuWidth:h}=t.sider,_=t.layout.mode==="vertical-mix";let C=_?m:f;return _&&e.mixSiderFixed&&(C+=h),C});return ue(r,f=>{f&&e.setSiderCollapse(!0)},{immediate:!0}),{mode:n,isMobile:r,headerProps:i,siderVisible:s,siderWidth:c,siderCollapsedWidth:v}}function Tl(e,t,o){return Dl(e,t).map(a=>hn(a,o))}function Dl(e,t){const o=[];return t.some(n=>{const r=e.includes(n.routeName);return r&&o.push(...un(e,n)),r}),o}function un(e,t){const o=[];return e===t.routeName&&o.push(t),e.includes(t.routeName)&&t.children&&t.children.length&&(o.push(t),o.push(...t.children.map(n=>un(e,n)).flat(1))),o}function hn(e,t){var r;const o=!!(e.children&&e.children.length),n={key:e.routeName,label:e.label,routeName:e.routeName,disabled:e.routePath===t,hasChildren:o,i18nTitle:e.i18nTitle};return e.icon&&(n.icon=e.icon),o&&(n.options=(r=e.children)==null?void 0:r.map(a=>hn(a,t))),n}const El=[{label:"红色系",data:[{label:"绾",color:"#A98175"},{label:"檀",color:"#B36D61"},{label:"栗色",color:"#60281E"},{label:"玄",color:"#622A1D"},{label:"胭脂",color:"#9D2933"},{label:"殷红",color:"#BE002F"},{label:"枣红",color:"#C32136"},{label:"赤",color:"#C3272B"},{label:"绯红",color:"#C83C23"},{label:"赫赤",color:"#C91F37"},{label:"樱桃红",color:"#C93756"},{label:"茜色",color:"#CB3A56"},{label:"海棠红",color:"#DB5A6B"},{label:"酡红",color:"#DC3023"},{label:"妃色",color:"#ED5736"},{label:"嫣红",color:"#EF7A82"},{label:"品红",color:"#F00056"},{label:"石榴红",color:"#F20C00"},{label:"银红",color:"#F05654"},{label:"彤",color:"#F35336"},{label:"桃红",color:"#F47983"},{label:"酡颜",color:"#F9906F"},{label:"洋红",color:"#FF0097"},{label:"大红",color:"#FF2121"},{label:"火红",color:"#FF2D51"},{label:"炎",color:"#FF3300"},{label:"朱红",color:"#FF4C00"},{label:"丹",color:"#FF4E20"},{label:"粉红",color:"#FFB3A7"},{label:"藕荷",color:"#E4C6D0"},{label:"藕",color:"#EDD1D8"},{label:"水红",color:"#F3D3E7"},{label:"鱼肚白",color:"#FCEFE8"}]},{label:"橙色系",data:[{label:"褐色",color:"#6E511E"},{label:"棕黑",color:"#7C4B00"},{label:"赭色",color:"#955539"},{label:"棕红",color:"#9B4400"},{label:"赭",color:"#9C5333"},{label:"驼色",color:"#A88462"},{label:"棕色",color:"#B25D25"},{label:"茶色",color:"#B35C44"},{label:"琥珀",color:"#CA6924"},{label:"黄栌",color:"#E29C45"},{label:"橙色",color:"#FA8C35"},{label:"橘红",color:"#FF7500"},{label:"橘黄",color:"#FF8936"},{label:"杏红",color:"#FF8C31"},{label:"橙黄",color:"#FFA400"},{label:"杏黄",color:"#FFA631"},{label:"姜黄",color:"#FFC773"}]},{label:"黄色系",data:[{label:"黧",color:"#5D513C"},{label:"黎",color:"#75664D"},{label:"棕绿",color:"#827100"},{label:"秋色",color:"#896C39"},{label:"苍黄",color:"#A29B7C"},{label:"乌金",color:"#A78E44"},{label:"棕黄",color:"#AE7000"},{label:"昏黄",color:"#C89B40"},{label:"枯黄",color:"#D3B17D"},{label:"秋香色",color:"#D9B611"},{label:"金",color:"#EACD76"},{label:"牙",color:"#EEDEB0"},{label:"缃色",color:"#F0C239"},{label:"赤金",color:"#F2BE45"},{label:"鸭黄",color:"#FAFF72"},{label:"鹅黄",color:"#FFF143"},{label:"缟",color:"#F2ECDE"},{label:"象牙白",color:"#FFFBF0"}]},{label:"绿色系",data:[{label:"竹青",color:"#789262"},{label:"黯",color:"#41555D"},{label:"黛绿",color:"#426666"},{label:"松花绿",color:"#057748"},{label:"绿沈",color:"#0C8918"},{label:"深绿",color:"#009900"},{label:"青葱",color:"#0AA344"},{label:"铜绿",color:"#549688"},{label:"苍翠",color:"#519A73"},{label:"松柏绿",color:"#21A675"},{label:"葱青",color:"#0EB83A"},{label:"油绿",color:"#00BC12"},{label:"绿",color:"#00E500"},{label:"草绿",color:"#40DE5A"},{label:"豆青",color:"#96CE54"},{label:"豆绿",color:"#9ED048"},{label:"葱绿",color:"#9ED900"},{label:"葱黄",color:"#A3D900"},{label:"柳绿",color:"#AFDD22"},{label:"嫩绿",color:"#BDDD22"},{label:"柳黄",color:"#C9DD22"},{label:"松花",color:"#BCE672"},{label:"樱草色",color:"#EAFF56"}]},{label:"青色系",data:[{label:"水",color:"#88ADA6"},{label:"青碧",color:"#48C0A3"},{label:"碧",color:"#1BD1A5"},{label:"石青",color:"#7BCFA6"},{label:"青翠",color:"#00E079"},{label:"青",color:"#00E09E"},{label:"碧绿",color:"#2ADD9C"},{label:"玉",color:"#2EDFA3"},{label:"翡翠",color:"#3DE1AD"},{label:"缥",color:"#7FECAD"},{label:"碧蓝",color:"#3EEDE7"},{label:"湖绿",color:"#25F8CD"},{label:"艾绿",color:"#A4E2C6"},{label:"青白",color:"#C0EBD7"},{label:"水绿",color:"#D4F2E7"},{label:"鸭卵青",color:"#E0EEE8"},{label:"素",color:"#E0F0E9"},{label:"荼白",color:"#F3F9F1"}]},{label:"蓝色系",data:[{label:"藏蓝",color:"#3B2E7E"},{label:"宝蓝",color:"#4B5CC4"},{label:"绀青",color:"#003371"},{label:"藏青",color:"#2E4E7E"},{label:"靛蓝",color:"#065279"},{label:"靛青",color:"#177CB0"},{label:"群青",color:"#4C8DAE"},{label:"蓝",color:"#44CEF6"},{label:"湖蓝",color:"#30DFF3"},{label:"蔚蓝",color:"#70F3FF"},{label:"月白",color:"#D6ECF0"},{label:"水蓝",color:"#D2F0F4"},{label:"莹白",color:"#E3F9FD"},{label:"雪白",color:"#F0FCFF"}]},{label:"紫色系",data:[{label:"黛",color:"#4A4266"},{label:"紫檀",color:"#4C211B"},{label:"紫棠",color:"#56004F"},{label:"黛紫",color:"#574266"},{label:"绛紫",color:"#8C4356"},{label:"紫酱",color:"#815463"},{label:"酱紫",color:"#815476"},{label:"黝",color:"#6B6882"},{label:"青莲",color:"#801DAE"},{label:"紫",color:"#8D4BBB"},{label:"雪青",color:"#B0A4E3"},{label:"丁香",color:"#CCA4E3"}]},{label:"灰色系",data:[{label:"黑",color:"#000000"},{label:"漆黑",color:"#161823"},{label:"象牙黑",color:"#312520"},{label:"乌黑",color:"#392F41"},{label:"玄青",color:"#3D3B4F"},{label:"缁",color:"#493131"},{label:"黝黑",color:"#665757"},{label:"鸦青",color:"#424C50"},{label:"黛蓝",color:"#425066"},{label:"苍黑",color:"#395260"},{label:"墨",color:"#50616D"},{label:"灰",color:"#808080"},{label:"苍",color:"#75878A"},{label:"墨灰",color:"#758A99"},{label:"苍青",color:"#7397AB"},{label:"蓝灰",color:"#A1AFC9"},{label:"老银",color:"#BACAC6"},{label:"蟹壳青",color:"#BBCDC5"},{label:"苍白",color:"#D1D9E0"},{label:"淡青",color:"#D3E0F3"},{label:"银白",color:"#E9E7EF"},{label:"霜",color:"#E9F1F6"},{label:"铅白",color:"#F0F0F4"},{label:"精白",color:"#FFFFFF"}]}],mn=El;function Hl(e){return mn.some(t=>t.data.some(n=>n.color===e))}const Ll={class:"inline-block",viewBox:"0 0 1024 1024",width:"1em",height:"1em"},Ul=M("path",{fill:"currentColor","fill-rule":"evenodd",d:"M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926L224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512L166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"},null,-1),Vl=[Ul];function Nl(e,t){return p(),N("svg",Ll,Vl)}const Ol={name:"ant-design-close-outlined",render:Nl},jl=T({name:"DrawerButton",__name:"index",setup(e){const t=ge();return(o,n)=>{const r=Ol,a=qo,i=Be;return p(),H(i,{type:"primary",class:le([[{"!right-330px":l(t).settingDrawerVisible},l(t).settingDrawerVisible?"ease-out":"ease-in"],"fixed top-360px right-14px z-10000 w-42px h-42px !p-0 transition-all duration-300"]),onClick:l(t).toggleSettingDrawerVisible},{default:b(()=>[l(t).settingDrawerVisible?(p(),H(r,{key:0,class:"text-24px"})):(p(),H(a,{key:1,class:"text-24px"}))]),_:1},8,["class","onClick"])}}}),Kl={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},Wl=M("path",{fill:"currentColor",d:"M12.04 8.04h-.09l-1.6 4.55h3.29z"},null,-1),ql=M("path",{fill:"currentColor",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm3 14.41l-.78-2.22H9.78l-.79 2.22c-.12.35-.46.59-.83.59a.887.887 0 0 1-.83-1.2l3.34-8.88a1.42 1.42 0 0 1 2.66 0l3.34 8.88c.22.58-.21 1.2-.83 1.2c-.38 0-.72-.24-.84-.59z"},null,-1),Xl=[Wl,ql];function Yl(e,t){return p(),N("svg",Kl,Xl)}const Zl={name:"ic-round-hdr-auto",render:Yl},Gl={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},Jl=M("path",{fill:"currentColor",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8c0-1.85.63-3.55 1.69-4.9L16.9 18.31A7.902 7.902 0 0 1 12 20zm6.31-3.1L7.1 5.69A7.902 7.902 0 0 1 12 4c4.42 0 8 3.58 8 8c0 1.85-.63 3.55-1.69 4.9z"},null,-1),Ql=[Jl];function ei(e,t){return p(),N("svg",Gl,Ql)}const ti={name:"ic-baseline-do-not-disturb",render:ei},oi={class:"flex-y-center justify-between"},Q=T({name:"SettingMenu",__name:"index",props:{label:{}},setup(e){return(t,o)=>(p(),N("div",oi,[M("span",null,Y(t.label),1),it(t.$slots,"default")]))}}),ni=T({name:"DarkMode",__name:"index",setup(e){const t=X();return(o,n)=>{const r=dt,a=$r,i=zr,s=xo,c=ti,v=Zl,f=ut;return p(),N(Z,null,[u(r,{"title-placement":"center"},{default:b(()=>[se(Y(l(K)("layout.settingDrawer.themeModeTitle")),1)]),_:1}),u(f,{vertical:"",size:"large"},{default:b(()=>[u(Q,{label:l(K)("layout.settingDrawer.darkMode")},{default:b(()=>[u(s,{value:l(t).darkMode,"onUpdate:value":l(t).setDarkMode},{checked:b(()=>[u(a,{class:"text-14px text-white"})]),unchecked:b(()=>[u(i,{class:"text-14px text-white"})]),_:1},8,["value","onUpdate:value"])]),_:1},8,["label"]),u(Q,{label:l(K)("layout.settingDrawer.followSystemTheme")},{default:b(()=>[u(s,{value:l(t).followSystemTheme,"onUpdate:value":l(t).setFollowSystemTheme},{checked:b(()=>[u(c,{class:"text-14px text-white"})]),unchecked:b(()=>[u(v,{class:"text-14px text-white"})]),_:1},8,["value","onUpdate:value"])]),_:1},8,["label"]),u(Q,{label:l(K)("layout.settingDrawer.isCustomizeDarkModeTransition")},{default:b(()=>[u(s,{value:l(t).isCustomizeDarkModeTransition,"onUpdate:value":l(t).setIsCustomizeDarkModeTransition},{checked:b(()=>[u(c,{class:"text-14px text-white"})]),unchecked:b(()=>[u(v,{class:"text-14px text-white"})]),_:1},8,["value","onUpdate:value"])]),_:1},8,["label"]),u(Q,{label:l(K)("layout.settingDrawer.sider.inverted")},{default:b(()=>[u(s,{value:l(t).sider.inverted,"onUpdate:value":l(t).setSiderInverted},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),u(Q,{label:l(K)("layout.settingDrawer.header.inverted")},{default:b(()=>[u(s,{value:l(t).header.inverted,"onUpdate:value":l(t).setHeaderInverted},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),u(Q,{label:l(K)("layout.settingDrawer.footer.inverted")},{default:b(()=>[u(s,{value:l(t).footer.inverted,"onUpdate:value":l(t).setFooterInverted},null,8,["value","onUpdate:value"])]),_:1},8,["label"])]),_:1})],64)}}}),ri=T({name:"LayoutCard",__name:"layout-card",props:{mode:{},label:{},checked:{type:Boolean}},setup(e){const t=e,o={vertical:{placement:"bottom-start",headerClass:"",menuClass:"w-1/3 h-full",mainClass:"w-2/3 h-3/4"},"vertical-mix":{placement:"bottom",headerClass:"",menuClass:"w-1/4 h-full",mainClass:"w-2/3 h-3/4"},horizontal:{placement:"bottom",headerClass:"",menuClass:"w-full h-1/4",mainClass:"w-full h-3/4"},"horizontal-mix":{placement:"bottom-end",headerClass:"",menuClass:"w-full h-1/4",mainClass:"w-2/3 h-3/4"}},n=y(()=>o[t.mode]);return(r,a)=>{const i=ho;return p(),N("div",{class:le(["border-2px rounded-6px cursor-pointer hover:border-primary",[r.checked?"border-primary":"border-transparent"]])},[u(i,{placement:n.value.placement,trigger:"hover"},{trigger:b(()=>[M("div",{class:le(["layout-card__shadow gap-6px w-96px h-64px p-6px rd-4px",[r.mode.includes("vertical")?"flex":"flex-col"]])},[it(r.$slots,"default",{},void 0,!0)],2)]),default:b(()=>[M("span",null,Y(r.label),1)]),_:3},8,["placement"])],2)}}}),ai=Ve(ri,[["__scopeId","data-v-e2b400d3"]]),Ae=e=>(Uo("data-v-3f56b2fa"),e=e(),Vo(),e),li=Ae(()=>M("div",{class:"w-18px h-full bg-primary:50 rd-4px"},null,-1)),ii=Ae(()=>M("div",{class:"flex-1 flex-col gap-6px"},[M("div",{class:"h-16px bg-primary rd-4px"}),M("div",{class:"flex-1 bg-primary:25 rd-4px"})],-1)),si=Ae(()=>M("div",{class:"w-8px h-full bg-primary:50 rd-4px"},null,-1)),ci=Ae(()=>M("div",{class:"w-16px h-full bg-primary:50 rd-4px"},null,-1)),di=Ae(()=>M("div",{class:"flex-1 flex-col gap-6px"},[M("div",{class:"h-16px bg-primary rd-4px"}),M("div",{class:"flex-1 bg-primary:25 rd-4px"})],-1)),ui=Ae(()=>M("div",{class:"h-16px bg-primary rd-4px"},null,-1)),hi=Ae(()=>M("div",{class:"flex-1 flex gap-6px"},[M("div",{class:"flex-1 bg-primary:25 rd-4px"})],-1)),mi=Ae(()=>M("div",{class:"h-16px bg-primary rd-4px"},null,-1)),pi=Ae(()=>M("div",{class:"flex-1 flex gap-6px"},[M("div",{class:"w-18px bg-primary:50 rd-4px"}),M("div",{class:"flex-1 bg-primary:25 rd-4px"})],-1)),vi=T({name:"LayoutMode",__name:"index",setup(e){const t=X();return(o,n)=>{const r=dt,a=ut;return p(),N(Z,null,[u(r,{"title-placement":"center"},{default:b(()=>[se(Y(l(K)("layout.settingDrawer.layoutModelTitle")),1)]),_:1}),u(a,{justify:"space-around",wrap:!0,size:24,class:"px-12px"},{default:b(()=>[(p(!0),N(Z,null,$e(l(t).layout.modeList,i=>(p(),H(l(ai),{key:i.value,mode:i.value,label:i.label,checked:i.value===l(t).layout.mode,onClick:s=>l(t).setLayoutMode(i.value)},{default:b(()=>[i.value==="vertical"?(p(),N(Z,{key:0},[li,ii],64)):ce("",!0),i.value==="vertical-mix"?(p(),N(Z,{key:1},[si,ci,di],64)):ce("",!0),i.value==="horizontal"?(p(),N(Z,{key:2},[ui,hi],64)):ce("",!0),i.value==="horizontal-mix"?(p(),N(Z,{key:3},[mi,pi],64)):ce("",!0)]),_:2},1032,["mode","label","checked","onClick"]))),128))]),_:1})],64)}}}),fi=Ve(vi,[["__scopeId","data-v-3f56b2fa"]]),bi={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},gi=M("path",{fill:"currentColor",d:"M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41L9 16.17z"},null,-1),_i=[gi];function xi(e,t){return p(),N("svg",bi,_i)}const yi={name:"ic-outline-check",render:xi},pn=T({name:"ColorCheckbox",__name:"color-checkbox",props:{color:{},checked:{type:Boolean},iconClass:{default:"text-14px"}},setup(e){const t=e,o=["#ffffff","#fff","rgb(255,255,255)"],n=y(()=>o.includes(t.color));return(r,a)=>{const i=yi;return p(),N("div",{class:"flex-center w-20px h-20px rounded-2px shadow cursor-pointer",style:ke({backgroundColor:r.color})},[r.checked?(p(),H(i,{key:0,class:le([r.iconClass,n.value?"text-gray-700":"text-white"])},null,8,["class"])):ce("",!0)],4)}}}),wi={class:"flex-x-center"},Ci={class:"text-center"},ki=T({name:"ColorModal",__name:"color-modal",props:{visible:{type:Boolean}},emits:["close"],setup(e,{emit:t}){const o=X();function n(){t("close")}return(r,a)=>{const i=Fr,s=Xo,c=Yo,v=Zo,f=Go,m=No;return p(),H(m,{show:r.visible,preset:"card",class:"w-640px h-480px","z-index":10001,onClose:n},{default:b(()=>[M("div",wi,[u(i,{type:"primary",size:24},{default:b(()=>[se("中国传统颜色")]),_:1})]),u(f,null,{default:b(()=>[(p(!0),N(Z,null,$e(l(mn),h=>(p(),H(v,{key:h.label,name:h.label,tab:h.label},{default:b(()=>[u(c,{cols:8,"x-gap":16,"y-gap":8},{default:b(()=>[(p(!0),N(Z,null,$e(h.data,_=>(p(),H(s,{key:_.label},{default:b(()=>[u(pn,{class:"!w-full !h-36px !rounded-4px",color:_.color,checked:_.color===l(o).themeColor,"icon-class":"text-20px",onClick:C=>l(o).setThemeColor(_.color)},null,8,["color","checked","onClick"]),M("p",Ci,Y(_.label),1)]),_:2},1024))),128))]),_:2},1024)]),_:2},1032,["name","tab"]))),128))]),_:1})]),_:1},8,["show"])}}}),$i=T({name:"ThemeColorSelect",__name:"index",setup(e){const t=X(),{bool:o,setTrue:n,setFalse:r}=kt(),a=y(()=>Hl(t.themeColor)),i=y(()=>a.value?"primary":"default");return(s,c)=>{const v=dt,f=Xo,m=Yo,h=Ja,_=Be,C=ut;return p(),N(Z,null,[u(v,{"title-placement":"center"},{default:b(()=>[se(Y(l(K)("layout.settingDrawer.systemThemeTitle")),1)]),_:1}),u(m,{cols:8,"x-gap":8,"y-gap":12},{default:b(()=>[(p(!0),N(Z,null,$e(l(t).themeColorList,F=>(p(),H(f,{key:F,class:"flex-x-center"},{default:b(()=>[u(l(pn),{color:F,checked:F===l(t).themeColor,onClick:B=>l(t).setThemeColor(F)},null,8,["color","checked","onClick"])]),_:2},1024))),128))]),_:1}),u(C,{vertical:!0,class:"pt-12px"},{default:b(()=>[u(h,{value:l(t).themeColor,"show-alpha":!1,onUpdateValue:l(t).setThemeColor},null,8,["value","onUpdateValue"]),u(_,{block:!0,type:i.value,onClick:l(n)},{default:b(()=>[se(Y(l(K)("layout.settingDrawer.systemTheme.moreColors")),1)]),_:1},8,["type","onClick"])]),_:1}),u(l(ki),{visible:l(o),onClose:l(r)},null,8,["visible","onClose"])],64)}}}),zi=T({name:"PageFunc",__name:"index",setup(e){const t=X();return(o,n)=>{const r=dt,a=en,i=xo,s=Cr,c=ut;return p(),N(Z,null,[u(r,{"title-placement":"center"},{default:b(()=>[se(Y(l(K)("layout.settingDrawer.pageFunctionsTitle")),1)]),_:1}),u(c,{vertical:"",size:"large"},{default:b(()=>[u(Q,{label:l(K)("layout.settingDrawer.scrollMode")},{default:b(()=>[u(a,{class:"w-120px",size:"small",value:l(t).scrollMode,options:l(t).scrollModeList,"onUpdate:value":l(t).setScrollMode},null,8,["value","options","onUpdate:value"])]),_:1},8,["label"]),u(Q,{label:l(K)("layout.settingDrawer.fixedHeaderAndTab")},{default:b(()=>[u(i,{value:l(t).fixedHeaderAndTab,"onUpdate:value":l(t).setIsFixedHeaderAndTab},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),u(Q,{label:l(K)("layout.settingDrawer.menu.horizontalPosition")},{default:b(()=>[u(a,{class:"w-120px",size:"small",value:l(t).menu.horizontalPosition,options:l(t).menu.horizontalPositionList,"onUpdate:value":l(t).setHorizontalMenuPosition},null,8,["value","options","onUpdate:value"])]),_:1},8,["label"]),u(Q,{label:l(K)("layout.settingDrawer.header.height")},{default:b(()=>[u(s,{class:"w-120px",size:"small",value:l(t).header.height,step:1,"onUpdate:value":l(t).setHeaderHeight},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),u(Q,{label:l(K)("layout.settingDrawer.tab.height")},{default:b(()=>[u(s,{class:"w-120px",size:"small",value:l(t).tab.height,step:1,"onUpdate:value":l(t).setTabHeight},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),u(Q,{label:l(K)("layout.settingDrawer.tab.isCache")},{default:b(()=>[u(i,{value:l(t).tab.isCache,"onUpdate:value":l(t).setTabIsCache},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),u(Q,{label:l(K)("layout.settingDrawer.sider.width")},{default:b(()=>[u(s,{class:"w-120px",size:"small",value:l(t).sider.width,step:10,"onUpdate:value":l(t).setSiderWidth},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),u(Q,{label:l(K)("layout.settingDrawer.sider.mixWidth")},{default:b(()=>[u(s,{class:"w-120px",size:"small",value:l(t).sider.mixWidth,step:5,"onUpdate:value":l(t).setMixSiderWidth},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),u(Q,{label:l(K)("layout.settingDrawer.footer.visible")},{default:b(()=>[u(i,{value:l(t).footer.visible,"onUpdate:value":l(t).setFooterVisible},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),u(Q,{label:l(K)("layout.settingDrawer.footer.fixed")},{default:b(()=>[u(i,{value:l(t).footer.fixed,"onUpdate:value":l(t).setFooterIsFixed},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),u(Q,{label:l(K)("layout.settingDrawer.footer.right")},{default:b(()=>[u(i,{value:l(t).footer.right,"onUpdate:value":l(t).setFooterIsRight},null,8,["value","onUpdate:value"])]),_:1},8,["label"])]),_:1})],64)}}}),Si=T({name:"PageView",__name:"index",setup(e){const t=X();return(o,n)=>{const r=dt,a=xo,i=en,s=ut;return p(),N(Z,null,[u(r,{"title-placement":"center"},{default:b(()=>[se(Y(l(K)("layout.settingDrawer.pageViewTitle")),1)]),_:1}),u(s,{vertical:"",size:"large"},{default:b(()=>[u(Q,{label:l(K)("layout.settingDrawer.header.crumb.visible")},{default:b(()=>[u(a,{value:l(t).header.crumb.visible,"onUpdate:value":l(t).setHeaderCrumbVisible},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),u(Q,{label:l(K)("layout.settingDrawer.header.crumb.icon")},{default:b(()=>[u(a,{value:l(t).header.crumb.showIcon,"onUpdate:value":l(t).setHeaderCrumbIconVisible},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),u(Q,{label:l(K)("layout.settingDrawer.tab.visible")},{default:b(()=>[u(a,{value:l(t).tab.visible,"onUpdate:value":l(t).setTabVisible},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),u(Q,{label:l(K)("layout.settingDrawer.tab.modeList.mode")},{default:b(()=>[u(i,{class:"w-120px",size:"small",value:l(t).tab.mode,options:l(t).tab.modeList,"onUpdate:value":l(t).setTabMode},null,8,["value","options","onUpdate:value"])]),_:1},8,["label"]),u(Q,{label:l(K)("layout.settingDrawer.page.animate")},{default:b(()=>[u(a,{value:l(t).page.animate,"onUpdate:value":l(t).setPageIsAnimate},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),u(Q,{label:l(K)("layout.settingDrawer.page.animateMode")},{default:b(()=>[u(i,{class:"w-120px",size:"small",value:l(t).page.animateMode,options:l(t).page.animateModeList,"onUpdate:value":l(t).setPageAnimateMode},null,8,["value","options","onUpdate:value"])]),_:1},8,["label"])]),_:1})],64)}}}),Ri=T({name:"ThemeConfig",__name:"index",setup(e){const t=X(),o=L(),n=L(r());function r(){return JSON.stringify(t.$state)}function a(){var c;t.resetThemeStore(),(c=window.$message)==null||c.success(K("layout.settingDrawer.themeConfiguration.resetSuccess"))}function i(){if(!o.value)return;new Rr(o.value).on("success",()=>{var v;(v=window.$dialog)==null||v.success({title:K("layout.settingDrawer.themeConfiguration.operateSuccess"),content:K("layout.settingDrawer.themeConfiguration.copySuccess"),positiveText:K("layout.settingDrawer.themeConfiguration.confirmCopy")})})}const s=ue(()=>t.$state,()=>{n.value=r()},{deep:!0});return st(()=>{i()}),Eo(()=>{s()}),(c,v)=>{const f=dt,m=Be,h=ut;return p(),N(Z,null,[u(f,{"title-placement":"center"},{default:b(()=>[se(Y(l(K)("layout.settingDrawer.themeConfiguration.title")),1)]),_:1}),lt(M("textarea",{id:"themeConfigCopyTarget","onUpdate:modelValue":v[0]||(v[0]=_=>n.value=_),class:"absolute opacity-0"},null,512),[[ar,n.value]]),u(h,{vertical:""},{default:b(()=>[M("div",{ref_key:"copyRef",ref:o,"data-clipboard-target":"#themeConfigCopyTarget"},[u(m,{type:"primary",block:!0},{default:b(()=>[se(Y(l(K)("layout.settingDrawer.themeConfiguration.copy")),1)]),_:1})],512),u(m,{type:"warning",block:!0,onClick:a},{default:b(()=>[se(Y(l(K)("layout.settingDrawer.themeConfiguration.reset")),1)]),_:1})]),_:1})],64)}}}),Mi=T({name:"SettingDrawer",__name:"index",setup(e){const t=ge(),o={}.VITE_VERCEL==="Y";return(n,r)=>{const a=fl,i=pl;return p(),N(Z,null,[u(i,{show:l(t).settingDrawerVisible,"display-directive":"show",width:330,onMaskClick:l(t).closeSettingDrawer},{default:b(()=>[u(a,{title:l(K)("layout.settingDrawer.title"),"native-scrollbar":!1},{default:b(()=>[u(l(ni)),u(l(fi)),u(l($i)),u(l(zi)),u(l(Si)),u(l(Ri))]),_:1},8,["title"])]),_:1},8,["show","onMaskClick"]),l(o)?(p(),H(l(jl),{key:0})):ce("",!0)],64)}}}),mt=T({name:"DarkModeContainer",__name:"dark-mode-container",props:{inverted:{type:Boolean,default:!1}},setup(e){return(t,o)=>(p(),N("div",{class:le(["dark:bg-dark dark:text-white dark:text-opacity-82 transition-all",t.inverted?"bg-#001428 text-white":"bg-white text-#333639"])},[it(t.$slots,"default")],2))}}),yo=T({name:"GlobalLogo",__name:"index",props:{showTitle:{type:Boolean}},setup(e){const t=Oo("root");return(o,n)=>{const r=ir,a=lr("router-link");return p(),H(a,{to:l(t),class:"flex-center w-full nowrap-hidden"},{default:b(()=>[u(r,{class:"text-32px text-primary"}),lt(M("h2",{class:"pl-8px text-16px font-bold text-primary transition duration-300 ease-in-out"},Y(l(K)("system.title")),513),[[Yt,o.showTitle]])]),_:1},8,["to"])}}}),Bi={key:0},ze=T({name:"HoverContainer",__name:"hover-container",props:{tooltipContent:{default:""},placement:{default:"bottom"},contentClass:{default:""},inverted:{type:Boolean,default:!1}},setup(e){const t=e,o=y(()=>!!t.tooltipContent),n=y(()=>`${t.contentClass} ${t.inverted?"hover:bg-primary":"hover:bg-#f6f6f6"}`);return(r,a)=>{const i=ho;return o.value?(p(),N("div",Bi,[u(i,{placement:r.placement,trigger:"hover"},{trigger:b(()=>[M("div",{class:le(["flex-center h-full cursor-pointer dark:hover:bg-#333",n.value])},[it(r.$slots,"default")],2)]),default:b(()=>[se(" "+Y(r.tooltipContent),1)]),_:3},8,["placement"])])):(p(),N("div",{key:1,class:le(["flex-center cursor-pointer dark:hover:bg-#333",n.value])},[it(r.$slots,"default")],2))}}}),Ii={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},Fi=M("path",{fill:"currentColor",d:"M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z"},null,-1),Ai=[Fi];function Pi(e,t){return p(),N("svg",Ii,Ai)}const vn={name:"uil-search",render:Pi},Ti={class:"inline-block",viewBox:"0 0 1024 1024",width:"1em",height:"1em"},Di=M("path",{fill:"currentColor",d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 0 0 0 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"},null,-1),Ei=[Di];function Hi(e,t){return p(),N("svg",Ti,Ei)}const Li={name:"ant-design-enter-outlined",render:Hi},Ui={class:"pb-12px"},Vi=["onMouseenter"],Ni={class:"flex-1 ml-5px"},Oi=T({name:"SearchResult",__name:"search-result",props:{value:{},options:{}},emits:["update:value","enter"],setup(e,{emit:t}){const o=e,n=X(),r=y({get(){return o.value},set(s){t("update:value",s)}});async function a(s){r.value=s.path}function i(){t("enter")}return(s,c)=>{const v=so,f=Li,m=ht;return p(),H(m,null,{default:b(()=>[M("div",Ui,[(p(!0),N(Z,null,$e(s.options,h=>{var _;return p(),N("div",{key:h.path,class:"bg-#e5e7eb dark:bg-dark h-56px mt-8px px-14px rounded-4px cursor-pointer flex-y-center justify-between",style:ke({background:h.path===r.value?l(n).themeColor:"",color:h.path===r.value?"#fff":""}),onClick:i,onMouseenter:C=>a(h)},[u(v,{icon:h.meta.icon,"local-icon":h.meta.localIcon},null,8,["icon","local-icon"]),M("span",Ni,Y((_=h.meta)==null?void 0:_.title),1),u(f,{class:"icon text-20px p-2px mr-3px"})],44,Vi)}),128))])]),_:1})}}}),ji={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},Ki=M("path",{fill:"currentColor",d:"M1 7h6v2H3v2h4v2H3v2h4v2H1V7m10 0h4v2h-4v2h2a2 2 0 0 1 2 2v2c0 1.11-.89 2-2 2H9v-2h4v-2h-2a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2m8 0h2a2 2 0 0 1 2 2v1h-2V9h-2v6h2v-1h2v1c0 1.11-.89 2-2 2h-2a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2Z"},null,-1),Wi=[Ki];function qi(e,t){return p(),N("svg",ji,Wi)}const Xi={name:"mdi-keyboard-esc",render:qi},Yi={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},Zi=M("path",{fill:"currentColor",d:"M7.03 13.92h4V5l2.01-.03v8.95h3.99l-5 5Z"},null,-1),Gi=[Zi];function Ji(e,t){return p(),N("svg",Yi,Gi)}const Qi={name:"mdi-arrow-down-thin",render:Ji},es={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},ts=M("path",{fill:"currentColor",d:"M7.03 9.97h4v8.92l2.01.03V9.97h3.99l-5-5Z"},null,-1),os=[ts];function ns(e,t){return p(),N("svg",es,os)}const rs={name:"mdi-arrow-up-thin",render:ns},as={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},ls=M("path",{fill:"currentColor",d:"M19 7v4H5.83l3.58-3.59L8 6l-6 6l6 6l1.41-1.42L5.83 13H21V7h-2Z"},null,-1),is=[ls];function ss(e,t){return p(),N("svg",as,is)}const cs={name:"mdi-keyboard-return",render:ss},wo=e=>(Uo("data-v-2cb6cc30"),e=e(),Vo(),e),ds={class:"px-24px h-44px flex-y-center"},us={class:"mr-14px flex-y-center"},hs=wo(()=>M("span",null,"确认",-1)),ms={class:"mr-14px flex-y-center"},ps=wo(()=>M("span",null,"切换",-1)),vs={class:"flex-y-center"},fs=wo(()=>M("span",null,"关闭",-1)),bs=T({name:"SearchFooter",__name:"search-footer",setup(e){return(t,o)=>{const n=cs,r=rs,a=Qi,i=Xi;return p(),N("div",ds,[M("span",us,[u(n,{class:"icon text-20px p-2px mr-6px"}),hs]),M("span",ms,[u(r,{class:"icon text-20px p-2px mr-5px"}),u(a,{class:"icon text-20px p-2px mr-6px"}),ps]),M("span",vs,[u(i,{class:"icon text-20px p-2px mr-6px"}),fs])])}}}),gs=Ve(bs,[["__scopeId","data-v-2cb6cc30"]]),_s={class:"mt-20px"},xs=T({name:"SearchModal",__name:"search-modal",props:{value:{type:Boolean}},emits:["update:value"],setup(e,{emit:t}){const o=e,{isMobile:n}=Ht(),r=sr(),a=ct(),i=L(""),s=L(""),c=cr([]),v=L(),f=dr(h,300),m=y({get(){return o.value},set(I){t("update:value",I)}});ue(m,async I=>{var E;I&&(await nt(),(E=v.value)==null||E.focus())});function h(){var I;c.value=a.searchMenus.filter(E=>{var x;return i.value&&((x=E.meta)==null?void 0:x.title.toLocaleLowerCase().includes(i.value.toLocaleLowerCase().trim()))}),((I=c.value)==null?void 0:I.length)>0?s.value=c.value[0].path:s.value=""}function _(){m.value=!1,setTimeout(()=>{c.value=[],i.value=""},200)}function C(){const{length:I}=c.value;if(I===0)return;const E=c.value.findIndex(x=>x.path===s.value);E===0?s.value=c.value[I-1].path:s.value=c.value[E-1].path}function F(){const{length:I}=c.value;if(I===0)return;const E=c.value.findIndex(x=>x.path===s.value);E+1===I?s.value=c.value[0].path:s.value=c.value[E+1].path}function B(){var x;const{length:I}=c.value;if(I===0||s.value==="")return;const E=c.value.find(P=>P.path===s.value);(x=E==null?void 0:E.meta)!=null&&x.href?window.open(s.value,"__blank"):(r.push(s.value),_())}return Rt("Escape",_),Rt("Enter",B),Rt("ArrowUp",C),Rt("ArrowDown",F),(I,E)=>{const x=vn,P=Jo,D=Be,A=Qo,U=Er,k=No;return p(),H(k,{show:m.value,"onUpdate:show":E[2]||(E[2]=V=>m.value=V),segmented:{footer:"soft"},closable:!1,preset:"card","footer-style":"padding: 0; margin: 0",class:le(["fixed left-0 right-0",[l(n)?"wh-full top-0px rounded-0":"w-630px top-50px"]]),onAfterLeave:_},{footer:b(()=>[l(n)?ce("",!0):(p(),H(gs,{key:0}))]),default:b(()=>[u(A,null,{default:b(()=>[u(P,{ref_key:"inputRef",ref:v,value:i.value,"onUpdate:value":E[0]||(E[0]=V=>i.value=V),clearable:"",placeholder:"请输入关键词搜索",onInput:l(f)},{prefix:b(()=>[u(x,{class:"text-15px text-#c2c2c2"})]),_:1},8,["value","onInput"]),l(n)?(p(),H(D,{key:0,type:"primary",ghost:"",onClick:_},{default:b(()=>[se("取消")]),_:1})):ce("",!0)]),_:1}),M("div",_s,[c.value.length===0?(p(),H(U,{key:0,description:"暂无搜索结果"})):(p(),H(Oi,{key:1,value:s.value,"onUpdate:value":E[1]||(E[1]=V=>s.value=V),options:c.value,onEnter:B},null,8,["value","options"]))])]),_:1},8,["show","class"])}}}),ys=T({name:"GlobalSearch",__name:"index",setup(e){const{bool:t,toggle:o}=kt(),n=X();function r(){o()}return(a,i)=>{const s=vn,c=ze;return p(),N("div",null,[u(c,{class:"w-40px h-full","tooltip-content":"搜索",inverted:l(n).header.inverted,onClick:r},{default:b(()=>[u(s,{class:"text-20px"})]),_:1},8,["inverted"]),u(l(xs),{value:l(t),"onUpdate:value":i[0]||(i[0]=v=>ur(t)?t.value=v:null)},null,8,["value"])])}}}),ws={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},Cs=jo('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="10" stroke-dashoffset="10" d="M7 9L4 12L7 15"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="10;0"></animate></path><path stroke-dasharray="16" stroke-dashoffset="16" d="M19 5H5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="16;0"></animate></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M19 12H10"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="12;0"></animate></path><path stroke-dasharray="16" stroke-dashoffset="16" d="M19 19H5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="16;0"></animate></path></g>',1),ks=[Cs];function $s(e,t){return p(),N("svg",ws,ks)}const zs={name:"line-md-menu-fold-left",render:$s},Ss={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},Rs=jo('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="10" stroke-dashoffset="10" d="M21 9L18 12L21 15"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="10;0"></animate></path><path stroke-dasharray="16" stroke-dashoffset="16" d="M19 5H5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="16;0"></animate></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M14 12H5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="12;0"></animate></path><path stroke-dasharray="16" stroke-dashoffset="16" d="M19 19H5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="16;0"></animate></path></g>',1),Ms=[Rs];function Bs(e,t){return p(),N("svg",Ss,Ms)}const Is={name:"line-md-menu-unfold-left",render:Bs},Fs=T({name:"MenuCollapse",__name:"menu-collapse",setup(e){const t=ge(),o=X();return(n,r)=>{const a=Is,i=zs,s=ze;return p(),H(s,{class:"w-40px h-full",inverted:l(o).header.inverted,onClick:l(t).toggleSiderCollapse},{default:b(()=>[l(t).siderCollapse?(p(),H(a,{key:0,class:"text-16px"})):(p(),H(i,{key:1,class:"text-16px"}))]),_:1},8,["inverted","onClick"])}}}),As=T({name:"GlobalBreadcrumb",__name:"global-breadcrumb",setup(e){const t=Ge(),o=X(),n=ct(),{routerPush:r}=$t(),a=y(()=>Tl(t.name,n.menus,Oo("root")).map(s=>{var c;return{...s,label:s.i18nTitle?K(s.i18nTitle):s.label,options:(c=s.options)==null?void 0:c.map(v=>({...v,label:v.i18nTitle?K(v.i18nTitle):v.label}))}}));function i(s){r({name:s})}return(s,c)=>{const v=zt,f=za,m=Ca;return p(),H(m,{class:"px-12px"},{default:b(()=>[(p(!0),N(Z,null,$e(a.value,h=>(p(),H(f,{key:h.key},{default:b(()=>[h.hasChildren?(p(),H(v,{key:0,options:h.options,onSelect:i},{default:b(()=>[M("span",null,[l(o).header.crumb.showIcon?(p(),H(Gt(h.icon),{key:0,class:"inline-block align-text-bottom mr-4px text-16px"})):ce("",!0),M("span",null,Y(h.label),1)])]),_:2},1032,["options"])):(p(),N(Z,{key:1},[l(o).header.crumb.showIcon?(p(),H(Gt(h.icon),{key:0,class:le(["inline-block align-text-bottom mr-4px text-16px",{"text-#BBBBBB":l(o).header.inverted}])},null,8,["class"])):ce("",!0),M("span",{class:le({"text-#BBBBBB":l(o).header.inverted})},Y(h.label),3)],64))]),_:2},1024))),128))]),_:1})}}}),Ps={class:"flex-1-hidden h-full px-10px"},Ts=T({name:"HeaderMenu",__name:"header-menu",setup(e){const t=Ge(),o=ct(),n=X(),{routerPush:r}=$t(),a=y(()=>co(o.menus)),i=y(()=>{var c;return(c=t.meta)!=null&&c.activeMenu?t.meta.activeMenu:t.name});function s(c,v){r(v.routePath)}return(c,v)=>{const f=_o,m=ht;return p(),N("div",Ps,[u(m,{"x-scrollable":!0,class:"flex-1-hidden h-full","content-class":"h-full"},{default:b(()=>[M("div",{class:"flex-y-center h-full",style:ke({justifyContent:l(n).menu.horizontalPosition})},[u(f,{value:i.value,mode:"horizontal",options:a.value,inverted:l(n).header.inverted,"onUpdate:value":s},null,8,["value","options","inverted"])],4)]),_:1})])}}}),Ds=Ve(Ts,[["__scopeId","data-v-bd84ad3a"]]),Es={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},Hs=M("path",{fill:"currentColor",d:"M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"},null,-1),Ls=[Hs];function Us(e,t){return p(),N("svg",Es,Ls)}const Vs={name:"mdi-github",render:Us},Ns=T({name:"GithubSite",__name:"github-site",setup(e){const t=X();function o(){window.open("https://github.com/honghuangdc/soybean-admin","_blank")}return(n,r)=>{const a=Vs,i=ze;return p(),H(i,{"tooltip-content":"github",class:"w-40px h-full",inverted:l(t).header.inverted,onClick:o},{default:b(()=>[u(a,{class:"text-20px"})]),_:1},8,["inverted"])}}}),Os={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},js=M("path",{fill:"currentColor",d:"M21 3v6h-2V6.41l-3.29 3.3l-1.42-1.42L17.59 5H15V3zM3 3v6h2V6.41l3.29 3.3l1.42-1.42L6.41 5H9V3zm18 18v-6h-2v2.59l-3.29-3.29l-1.41 1.41L17.59 19H15v2zM9 21v-2H6.41l3.29-3.29l-1.41-1.42L5 17.59V15H3v6z"},null,-1),Ks=[js];function Ws(e,t){return p(),N("svg",Os,Ks)}const qs={name:"gridicons-fullscreen",render:Ws},Xs={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},Ys=M("path",{fill:"currentColor",d:"M14 10V4h2v2.59l3.29-3.29l1.41 1.41L17.41 8H20v2zM4 10V8h2.59l-3.3-3.29l1.42-1.42L8 6.59V4h2v6zm16 4v2h-2.59l3.29 3.29l-1.41 1.41L16 17.41V20h-2v-6zm-10 0v6H8v-2.59l-3.29 3.3l-1.42-1.42L6.59 16H4v-2z"},null,-1),Zs=[Ys];function Gs(e,t){return p(),N("svg",Xs,Zs)}const Js={name:"gridicons-fullscreen-exit",render:Gs},Qs=T({name:"FullScreen",__name:"full-screen",setup(e){const{isFullscreen:t,toggle:o}=hr(),n=X();return(r,a)=>{const i=Js,s=qs,c=ze;return p(),H(c,{class:"w-40px h-full","tooltip-content":"全屏",inverted:l(n).header.inverted,onClick:l(o)},{default:b(()=>[l(t)?(p(),H(i,{key:0,class:"text-18px"})):(p(),H(s,{key:1,class:"text-18px"}))]),_:1},8,["inverted","onClick"])}}}),ec=T({name:"ThemeMode",__name:"theme-mode",setup(e){const t=X();return(o,n)=>{const r=Sr,a=ze;return p(),H(a,{class:"w-40px",inverted:l(t).header.inverted,"tooltip-content":"主题模式"},{default:b(()=>[u(r,{dark:l(t).darkMode,"customize-transition":l(t).isCustomizeDarkModeTransition,class:"wh-full","onUpdate:dark":l(t).setDarkMode},null,8,["dark","customize-transition","onUpdate:dark"])]),_:1},8,["inverted"])}}}),tc={class:"pl-8px text-16px font-medium"},oc=T({name:"UserAvatar",__name:"user-avatar",setup(e){const t=mr(),o=X(),{iconRender:n}=Ko(),r=[{label:"用户中心",key:"user-center",icon:n({icon:"carbon:user-avatar"})},{type:"divider",key:"divider"},{label:"退出登录",key:"logout",icon:n({icon:"carbon:logout"})}];function a(i){var c;i==="logout"&&((c=window.$dialog)==null||c.info({title:"提示",content:"您确定要退出登录吗？",positiveText:"确定",negativeText:"取消",onPositiveClick:()=>{t.resetAuthStore()}}))}return(i,s)=>{const c=Nr,v=ze,f=zt;return p(),H(f,{options:r,onSelect:a},{default:b(()=>[u(v,{class:"px-12px",inverted:l(o).header.inverted},{default:b(()=>[u(c,{class:"text-32px"}),M("span",tc,Y(l(t).userInfo.userName),1)]),_:1},8,["inverted"])]),_:1})}}}),nc={viewBox:"0 0 36 36",width:"1em",height:"1em"},rc=M("path",{fill:"currentColor",d:"M32.51 27.83A14.4 14.4 0 0 1 30 24.9a12.63 12.63 0 0 1-1.35-4.81v-4.94A10.81 10.81 0 0 0 19.21 4.4V3.11a1.33 1.33 0 1 0-2.67 0v1.31a10.81 10.81 0 0 0-9.33 10.73v4.94a12.63 12.63 0 0 1-1.35 4.81a14.4 14.4 0 0 1-2.47 2.93a1 1 0 0 0-.34.75v1.36a1 1 0 0 0 1 1h27.8a1 1 0 0 0 1-1v-1.36a1 1 0 0 0-.34-.75ZM5.13 28.94a16.17 16.17 0 0 0 2.44-3a14.24 14.24 0 0 0 1.65-5.85v-4.94a8.74 8.74 0 1 1 17.47 0v4.94a14.24 14.24 0 0 0 1.65 5.85a16.17 16.17 0 0 0 2.44 3Z",class:"clr-i-outline clr-i-outline-path-1"},null,-1),ac=M("path",{fill:"currentColor",d:"M18 34.28A2.67 2.67 0 0 0 20.58 32h-5.26A2.67 2.67 0 0 0 18 34.28Z",class:"clr-i-outline clr-i-outline-path-2"},null,-1),lc=M("path",{fill:"none",d:"M0 0h36v36H0z"},null,-1),ic=[rc,ac,lc];function sc(e,t){return p(),N("svg",nc,ic)}const cc={name:"clarity-notification-line",render:sc},dc=T({name:"MessageList",__name:"message-list",props:{list:{default:()=>[]}},emits:["read"],setup(e,{emit:t}){function o(n){t("read",n)}return(n,r)=>{const a=ia,i=so,s=Ir,c=Xr,v=Or,f=jr,m=Kr,h=ht;return p(),H(h,{class:"max-h-360px"},{default:b(()=>[u(m,null,{default:b(()=>[(p(!0),N(Z,null,$e(n.list,(_,C)=>(p(),H(f,{key:_.id,class:"hover:bg-#f6f6f6 dark:hover:bg-dark cursor-pointer",onClick:F=>o(C)},{default:b(()=>[u(v,{class:le(["px-15px",{"opacity-30":_.isRead}])},pr({avatar:b(()=>[_.avatar?(p(),H(a,{key:0,src:_.avatar},null,8,["src"])):(p(),H(i,{key:1,class:"text-34px text-primary",icon:_.icon,"local-icon":_.svgIcon},null,8,["icon","local-icon"]))]),header:b(()=>[u(s,{"line-clamp":1},{tooltip:b(()=>[se(Y(_.title),1)]),default:b(()=>[se(Y(_.title)+" ",1)]),_:2},1024)]),description:b(()=>[_.description?(p(),H(s,{key:0,"line-clamp":2},{default:b(()=>[se(Y(_.description),1)]),_:2},1024)):ce("",!0),M("p",null,Y(_.date),1)]),_:2},[_.tagTitle?{name:"header-extra",fn:b(()=>[u(c,Et(_.tagProps,{size:"small"}),{default:b(()=>[se(Y(_.tagTitle),1)]),_:2},1040)]),key:"0"}:void 0]),1032,["class"])]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1})}}}),uc={class:"mr-5px"},hc={key:0,class:"flex border-t border-$n-divider-color cursor-pointer"},mc=T({name:"SystemMessage",__name:"system-message",setup(e){const t=X(),{isMobile:o}=Ht(),{bool:n,setBool:r}=kt(),a=L(0),i=L([{key:1,name:"通知",badgeProps:{type:"warning"},list:[{id:1,icon:"ri:message-3-line",title:"你收到了5条新消息",date:"2022-06-17"},{id:4,icon:"ri:message-3-line",title:"Soybean Admin 1.0.0 版本正在筹备中",date:"2022-06-17"},{id:2,icon:"ri:message-3-line",title:"Soybean Admin 0.9.6 版本发布了",date:"2022-06-16"},{id:3,icon:"ri:message-3-line",title:"Soybean Admin 0.9.5 版本发布了",date:"2022-06-07"},{id:5,icon:"ri:message-3-line",title:"测试超长标题测试超长标题测试超长标题测试超长标题测试超长标题测试超长标题测试超长标题测试超长标题",date:"2022-06-17"}]},{key:2,name:"消息",badgeProps:{type:"error"},list:[{id:1,title:"项目动态",svgIcon:"avatar",description:"Soybean 刚才把工作台页面随便写了一些，凑合能看了！",date:"2021-11-07 22:45:32"},{id:2,title:"项目动态",svgIcon:"avatar",description:"Soybean 正在忙于为soybean-admin写项目说明文档！",date:"2021-11-03 20:33:31"},{id:3,title:"项目动态",svgIcon:"avatar",description:"Soybean 准备为soybean-admin 1.0的发布做充分的准备工作！",date:"2021-10-31 22:43:12"},{id:4,title:"项目动态",svgIcon:"avatar",description:"@yanbowe 向soybean-admin提交了一个bug，多标签栏不会自适应。",date:"2021-10-27 10:24:54"},{id:5,title:"项目动态",svgIcon:"avatar",description:"Soybean 在2021年5月28日创建了开源项目soybean-admin！",date:"2021-05-28 22:22:22"}]},{key:3,name:"待办",badgeProps:{type:"info"},list:[{id:1,icon:"ri:calendar-todo-line",title:"缓存主题配置",description:"任务正在计划中",date:"2022-06-17",tagTitle:"未开始",tagProps:{type:"default"}},{id:2,icon:"ri:calendar-todo-line",title:"添加锁屏组件、全局Iframe组件",description:"任务正在计划中",date:"2022-06-17",tagTitle:"未开始",tagProps:{type:"default"}},{id:3,icon:"ri:calendar-todo-line",title:"示例页面完善",description:"任务正在计划中",date:"2022-06-17",tagTitle:"未开始",tagProps:{type:"default"}},{id:4,icon:"ri:calendar-todo-line",title:"表单、表格示例",description:"任务正在计划中",date:"2022-06-17",tagTitle:"未开始",tagProps:{type:"default"}},{id:5,icon:"ri:calendar-todo-line",title:"性能优化(优化递归函数)",description:"任务正在计划中",date:"2022-06-17",tagTitle:"未开始",tagProps:{type:"default"}},{id:6,icon:"ri:calendar-todo-line",title:"精简版(新分支thin)",description:"任务正在计划中",date:"2022-06-17",tagTitle:"未开始",tagProps:{type:"default"}}]}]),s=y(()=>i.value.reduce((_,C)=>_+C.list.filter(F=>!F.isRead).length,0)),c=y(()=>i.value[a.value].list.length>0);function v(_){i.value[a.value].list[_].isRead=!0}function f(){i.value[a.value].list.forEach(_=>Object.assign(_,{isRead:!0}))}function m(){i.value[a.value].list=[]}function h(){const{list:_}=i.value[a.value];r(!0),setTimeout(()=>{_.push(...i.value[a.value].list),r(!1)},1e3)}return(_,C)=>{const F=cc,B=xa,I=ze,E=Wr,x=Zo,P=Go,D=Hr;return p(),H(D,{class:"!p-0",trigger:"click",placement:"bottom"},{trigger:b(()=>[u(I,{"tooltip-content":"消息通知",inverted:l(t).header.inverted,class:"relative w-40px h-full"},{default:b(()=>[u(F,{class:"text-18px"}),u(B,{value:s.value,max:99,class:le([[s.value<10?"-right-2px":"-right-10px"],"absolute top-10px"])},null,8,["value","class"])]),_:1},8,["inverted"])]),default:b(()=>[u(P,{value:a.value,"onUpdate:value":C[0]||(C[0]=A=>a.value=A),class:le([l(o)?"w-276px":"w-360px"]),type:"line","justify-content":"space-evenly"},{default:b(()=>[(p(!0),N(Z,null,$e(i.value,(A,U)=>(p(),H(x,{key:A.key,name:U},{tab:b(()=>[M("div",{class:le(["flex-x-center items-center",[l(o)?"w-92px":"w-120px"]])},[M("span",uc,Y(A.name),1),u(B,Et(A.badgeProps,{value:A.list.filter(k=>!k.isRead).length,max:99,"show-zero":""}),null,16,["value"])],2)]),default:b(()=>[u(E,{class:"h-360px",loading:l(n),empty:A.list.length===0,"placeholder-class":"bg-$n-color transition-background-color duration-300 ease-in-out"},{default:b(()=>[u(dc,{list:A.list,onRead:v},null,8,["list"])]),_:2},1032,["loading","empty"])]),_:2},1032,["name"]))),128))]),_:1},8,["value","class"]),c.value?(p(),N("div",hc,[M("div",{class:"flex-1 text-center py-10px",onClick:m},"清空"),M("div",{class:"flex-1 text-center py-10px border-l border-$n-divider-color",onClick:f},"全部已读"),M("div",{class:"flex-1 text-center py-10px border-l border-$n-divider-color",onClick:h},"查看更多")])):ce("",!0)]),_:1})}}}),pc=T({name:"SettingButton",__name:"setting-button",setup(e){const t=ge(),o=X();return(n,r)=>{const a=qo,i=ze;return p(),H(i,{class:"w-40px h-full","tooltip-content":"主题配置",inverted:l(o).header.inverted,onClick:l(t).toggleSettingDrawerVisible},{default:b(()=>[u(a,{class:"text-20px"})]),_:1},8,["inverted","onClick"])}}}),vc={class:"inline-block",viewBox:"0 0 512 512",width:"1em",height:"1em"},fc=M("path",{fill:"currentColor",d:"M320 24H16v304h176v168h304V192H320ZM148.305 96L98.093 239.3H132l8.166-23.3H192v80H48V56h240v136h-66.668L187.7 96Zm36.317 88h-33.244L168 136.562ZM464 224v240H224V224Z"},null,-1),bc=M("path",{fill:"currentColor",d:"M317.432 368.48a136.761 136.761 0 0 0 10.089 14.12q-17.4 9.384-39.521 9.4v32c24.141 0 45.71-6.408 64-18.824C370.29 417.592 391.859 424 416 424v-32q-22.075 0-39.52-9.407a136.574 136.574 0 0 0 10.088-14.113A166.212 166.212 0 0 0 406.662 320H424v-32h-56v-24h-32v24h-56v32h17.338a166.212 166.212 0 0 0 20.094 48.48ZM373.53 320a133.013 133.013 0 0 1-14.1 31.52a104.39 104.39 0 0 1-7.43 10.448a103.546 103.546 0 0 1-6.93-9.651A132.384 132.384 0 0 1 330.466 320Z"},null,-1),gc=[fc,bc];function _c(e,t){return p(),N("svg",vc,gc)}const xc={name:"cil-language",render:_c},yc=T({__name:"toggle-lang",setup(e){const t=X(),{locale:o}=vr(),n=L(ko.get("lang")||"zh-CN"),r=[{label:"中文",key:"zh-CN"},{label:"English",key:"en"},{label:"ភាសាខ្មែរ",key:"km-KH"}],a=i=>{n.value=i,o.value=i,ko.set("lang",i)};return(i,s)=>{const c=xc,v=zt,f=ze;return p(),H(f,{class:"w-40px h-full",inverted:l(t).header.inverted},{default:b(()=>[u(v,{options:r,trigger:"hover",value:n.value,onSelect:a},{default:b(()=>[u(c,{class:"text-18px outline-transparent"})]),_:1},8,["value"])]),_:1},8,["inverted"])}}}),wc={key:1,class:"flex-1-hidden flex-y-center h-full"},Cc={class:"flex justify-end h-full"},kc=T({name:"GlobalHeader",__name:"index",props:{showLogo:{},showHeaderMenu:{},showMenuCollapse:{}},setup(e){const t=X(),{isMobile:o}=Ht(),n={}.VITE_VERCEL!=="Y";return(r,a)=>{const i=mt;return p(),H(i,{class:"global-header flex-y-center h-full",inverted:l(t).header.inverted},{default:b(()=>[r.showLogo?(p(),H(yo,{key:0,"show-title":!0,class:"h-full",style:ke({width:l(t).sider.width+"px"})},null,8,["style"])):ce("",!0),r.showHeaderMenu?(p(),H(l(Ds),{key:2})):(p(),N("div",wc,[r.showMenuCollapse||l(o)?(p(),H(l(Fs),{key:0})):ce("",!0),l(t).header.crumb.visible&&!l(o)?(p(),H(l(As),{key:1})):ce("",!0)])),M("div",Cc,[u(ys),u(l(Ns)),u(l(Qs)),u(l(ec)),u(l(yc)),u(l(mc)),l(n)?(p(),H(l(pc),{key:0})):ce("",!0),u(l(oc))])]),_:1},8,["inverted"])}}}),$c=Ve(kc,[["__scopeId","data-v-0c3d17d1"]]),zc=T({name:"BetterScroll",__name:"better-scroll",props:{options:{}},setup(e,{expose:t}){const o=e,n=L(),r=L(),a=L(),i=y(()=>!!o.options.scrollY);function s(){n.value&&(r.value=new Mr(n.value,o.options))}const{width:c}=$o(n),{width:v,height:f}=$o(a);return ue([()=>c.value,()=>v.value,()=>f.value],()=>{r.value&&r.value.refresh()}),st(()=>{s()}),t({instance:r}),(m,h)=>(p(),N("div",{ref_key:"bsWrap",ref:n,class:"h-full text-left"},[M("div",{ref_key:"bsContent",ref:a,class:le(["inline-block",{"h-full":!i.value}])},[it(m.$slots,"default")],2)],512))}}),Sc=T({name:"ContextMenu",__name:"context-menu",props:{visible:{type:Boolean,default:!1},currentPath:{default:""},affix:{type:Boolean},x:{},y:{}},emits:["update:visible"],setup(e,{emit:t}){const o=e,n=ge(),r=uo(),{iconRender:a}=Ko(),i=y({get(){return o.visible},set(m){t("update:visible",m)}});function s(){i.value=!1}const c=y(()=>[{label:"内容全屏",key:"full-content",icon:a({icon:"gridicons-fullscreen"})},{label:"重新加载",key:"reload-current",disabled:o.currentPath!==r.activeTab,icon:a({icon:"ant-design:reload-outlined"})},{label:"关闭",key:"close-current",disabled:o.currentPath===r.homeTab.fullPath||!!o.affix,icon:a({icon:"ant-design:close-outlined"})},{label:"关闭其他",key:"close-other",icon:a({icon:"ant-design:column-width-outlined"})},{label:"关闭左侧",key:"close-left",icon:a({icon:"mdi:format-horizontal-align-left"})},{label:"关闭右侧",key:"close-right",icon:a({icon:"mdi:format-horizontal-align-right"})},{label:"关闭所有",key:"close-all",icon:a({icon:"ant-design:line-outlined"})}]),v=new Map([["full-content",()=>{n.setContentFull(!0)}],["reload-current",()=>{n.reloadPage()}],["close-current",()=>{r.removeTab(o.currentPath)}],["close-other",()=>{r.clearTab([o.currentPath])}],["close-left",()=>{r.clearLeftTab(o.currentPath)}],["close-right",()=>{r.clearRightTab(o.currentPath)}],["close-all",()=>{r.clearAllTab()}]]);function f(m){const h=m,_=v.get(h);_&&_(),s()}return(m,h)=>{const _=zt;return p(),H(_,{show:i.value,options:c.value,placement:"bottom-start",x:m.x,y:m.y,onClickoutside:s,onSelect:f},null,8,["show","options","x","y"])}}}),Rc=T({name:"TabDetail",__name:"index",emits:["scroll"],setup(e,{emit:t}){const o=X(),n=uo(),r=y(()=>o.tab.mode==="chrome"),a=L();async function i(){if(await nt(),a.value&&a.value.children.length&&a.value.children[n.activeTabIndex]){const h=a.value.children[n.activeTabIndex],{x:_,width:C}=h.getBoundingClientRect(),F=_+C/2;setTimeout(()=>{t("scroll",F)},50)}}const s=fr({visible:!1,affix:!1,x:0,y:0,currentPath:""});function c(h){Object.assign(s,h)}let v=!1;function f(h){v||c({visible:h})}async function m(h,_,C){h.preventDefault();const{clientX:F,clientY:B}=h;v=!0;const I=s.visible?150:0;c({visible:!1}),setTimeout(()=>{c({visible:!0,x:F,y:B,currentPath:_,affix:C}),v=!1},I)}return ue(()=>n.activeTabIndex,()=>{i()},{immediate:!0}),(h,_)=>{const C=so;return p(),N(Z,null,[M("div",{ref_key:"tabRef",ref:a,class:le(["flex h-full pr-18px",[r.value?"items-end":"items-center gap-12px"]])},[(p(!0),N(Z,null,$e(l(n).tabs,F=>(p(),H(l(br),{key:F.fullPath,mode:l(o).tab.mode,"dark-mode":l(o).darkMode,active:l(n).activeTab===F.fullPath,"active-color":l(o).themeColor,closable:!(F.name===l(n).homeTab.name||F.meta.affix),onClick:B=>l(n).handleClickTab(F.fullPath),onClose:B=>l(n).removeTab(F.fullPath),onContextmenu:B=>m(B,F.fullPath,F.meta.affix)},{prefix:b(()=>[u(C,{icon:F.meta.icon,"local-icon":F.meta.localIcon,class:"inline-block align-text-bottom text-16px"},null,8,["icon","local-icon"])]),default:b(()=>[se(" "+Y(F.meta.i18nTitle?l(K)(F.meta.i18nTitle):F.meta.title),1)]),_:2},1032,["mode","dark-mode","active","active-color","closable","onClick","onClose","onContextmenu"]))),128))],2),u(l(Sc),{visible:s.visible,"current-path":s.currentPath,affix:s.affix,x:s.x,y:s.y,"onUpdate:visible":f},null,8,["visible","current-path","affix","x","y"])],64)}}}),Mc=T({name:"ReloadButton",__name:"index",setup(e){const t=ge(),o=ct(),n=Ge(),{loading:r,startLoading:a,endLoading:i}=Yr();function s(){const c=o.cacheRoutes.includes(String(n.name));c&&o.removeCacheRoute(n.name),a(),t.reloadPage(),setTimeout(()=>{c&&o.addCacheRoute(n.name),i()},1e3)}return(c,v)=>{const f=kr,m=ze;return p(),H(m,{class:"w-64px h-full","tooltip-content":"重新加载",placement:"bottom-end",onClick:s},{default:b(()=>[u(f,{class:le(["text-22px",{"animate-spin":l(r)}])},null,8,["class"])]),_:1})}}}),Bc=T({name:"GlobalTab",__name:"index",setup(e){const t=Ge(),o=X(),n=uo(),r=gr(),a=L(),{width:i,left:s}=_r(a),c=L(),v=!!r.device.type;function f(h){var F;const C=h-s.value-i.value/2;if(c.value){const{maxScrollX:B,x:I}=c.value.instance,E=B-I,x=C>0?Math.max(-C,E):Math.min(-C,-I);(F=c.value)==null||F.instance.scrollBy(x,0,300)}}function m(){n.iniTabStore(t)}return ue(()=>t.fullPath,()=>{n.addTab(t),n.setActiveTab(t.fullPath)}),m(),(h,_)=>{const C=zc,F=mt;return p(),H(F,{class:"global-tab flex-y-center w-full pl-16px",style:ke({height:l(o).tab.height+"px"})},{default:b(()=>[M("div",{ref_key:"bsWrapper",ref:a,class:"flex-1-hidden h-full"},[u(C,{ref_key:"bsScroll",ref:c,options:{scrollX:!0,scrollY:!1,click:l(v)}},{default:b(()=>[u(l(Rc),{onScroll:f})]),_:1},8,["options"])],512),u(l(Mc))]),_:1},8,["style"])}}}),Ic=Ve(Bc,[["__scopeId","data-v-2aed69b2"]]),Fc=T({name:"VerticalMenu",__name:"vertical-menu",setup(e){const t=Ge(),o=ge(),n=X(),r=ct(),{routerPush:a}=$t(),i=y(()=>co(r.menus)),s=y(()=>{var m;return(m=t.meta)!=null&&m.activeMenu?t.meta.activeMenu:t.name}),c=L([]);function v(m,h){a(h.routePath)}function f(m){c.value=m}return ue(()=>t.name,()=>{c.value=Wo(s.value,i.value)},{immediate:!0}),(m,h)=>{const _=_o,C=ht;return p(),H(C,{class:"flex-1-hidden"},{default:b(()=>[u(_,{value:s.value,collapsed:l(o).siderCollapse,"collapsed-width":l(n).sider.collapsedWidth,"collapsed-icon-size":22,options:i.value,"expanded-keys":c.value,indent:18,inverted:!l(n).darkMode&&l(n).sider.inverted,"onUpdate:value":v,"onUpdate:expandedKeys":f},null,8,["value","collapsed","collapsed-width","options","expanded-keys","inverted"])]),_:1})}}}),Ac=T({name:"VerticalSider",__name:"index",setup(e){const t=ge(),o=X(),n=y(()=>o.layout.mode==="horizontal-mix"),r=y(()=>!t.siderCollapse&&o.layout.mode!=="vertical-mix");return(a,i)=>{const s=mt;return p(),H(s,{class:"flex-col-stretch h-full",inverted:l(o).sider.inverted},{default:b(()=>[n.value?ce("",!0):(p(),H(l(yo),{key:0,"show-title":r.value,style:ke({height:l(o).header.height+"px"})},null,8,["show-title","style"])),u(l(Fc))]),_:1},8,["inverted"])}}}),Pc=T({name:"MixMenuDetail",__name:"mix-menu-detail",props:{routeName:{},label:{},activeRouteName:{},icon:{type:[Object,Function],default:void 0},isMini:{type:Boolean,default:!1}},setup(e){const t=e,{bool:o,setTrue:n,setFalse:r}=kt(),a=y(()=>t.routeName===t.activeRouteName);return(i,s)=>(p(),N("div",{class:"mb-6px px-4px cursor-pointer",onMouseenter:s[0]||(s[0]=(...c)=>l(n)&&l(n)(...c)),onMouseleave:s[1]||(s[1]=(...c)=>l(r)&&l(r)(...c))},[M("div",{class:le(["flex-center flex-col py-12px rounded-2px bg-transparent transition-colors duration-300 ease-in-out",{"text-primary !bg-primary_active":a.value,"text-primary":l(o)}])},[(p(),H(Gt(i.icon),{class:le([i.isMini?"text-16px":"text-20px"])},null,8,["class"])),M("p",{class:le(["w-full text-center ellipsis-text text-12px transition-height duration-300 ease-in-out",[i.isMini?"h-0 pt-0":"h-24px pt-4px"]])},Y(i.label),3)],2)],32))}}),Tc={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},Dc=M("path",{fill:"currentColor",d:"M16 12V4h1V2H7v2h1v8l-2 2v2h5.2v6h1.6v-6H18v-2l-2-2Z"},null,-1),Ec=[Dc];function Hc(e,t){return p(),N("svg",Tc,Ec)}const Lc={name:"mdi-pin",render:Hc},Uc={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},Vc=M("path",{fill:"currentColor",d:"M2 5.27L3.28 4L20 20.72L18.73 22l-5.93-5.93V22h-1.6v-6H6v-2l2-2v-.73l-6-6M16 12l2 2v2h-.18L8 6.18V4H7V2h10v2h-1v8Z"},null,-1),Nc=[Vc];function Oc(e,t){return p(),N("svg",Uc,Nc)}const jc={name:"mdi-pin-off",render:Oc},Kc={class:"text-primary pl-8px text-16px font-bold"},Wc=T({name:"MixMenuDrawer",__name:"mix-menu-drawer",props:{visible:{type:Boolean},menus:{}},setup(e){const t=e,o=Ge(),n=ge(),r=X(),{routerPush:a}=$t(),i=y(()=>t.visible&&t.menus.length||n.mixSiderFixed),s=y(()=>{var m;return(m=o.meta)!=null&&m.activeMenu?o.meta.activeMenu:o.name}),c=L([]);function v(m,h){a(h.routePath)}function f(m){c.value=m}return ue(()=>o.name,()=>{c.value=Wo(s.value,t.menus)},{immediate:!0}),(m,h)=>{const _=jc,C=Lc,F=_o,B=ht,I=mt;return p(),N("div",{class:"relative h-full transition-width duration-300 ease-in-out",style:ke({width:l(n).mixSiderFixed?l(r).sider.mixChildMenuWidth+"px":"0px"})},[u(I,{class:"drawer-shadow absolute-lt flex-col-stretch h-full nowrap-hidden",inverted:l(r).sider.inverted,style:ke({width:i.value?l(r).sider.mixChildMenuWidth+"px":"0px"})},{default:b(()=>[M("header",{class:"header-height flex-y-center justify-between",style:ke({height:l(r).header.height+"px"})},[M("h2",Kc,Y(l(K)("system.title")),1),M("div",{class:"px-8px text-16px text-gray-600 cursor-pointer",onClick:h[0]||(h[0]=(...E)=>l(n).toggleMixSiderFixed&&l(n).toggleMixSiderFixed(...E))},[l(n).mixSiderFixed?(p(),H(_,{key:0})):(p(),H(C,{key:1}))])],4),u(B,{class:"flex-1-hidden"},{default:b(()=>[u(F,{value:s.value,options:m.menus,"expanded-keys":c.value,indent:18,inverted:!l(r).darkMode&&l(r).sider.inverted,"onUpdate:value":v,"onUpdate:expandedKeys":f},null,8,["value","options","expanded-keys","inverted"])]),_:1})]),_:1},8,["inverted","style"])],4)}}}),qc=Ve(Wc,[["__scopeId","data-v-5c7ea91b"]]),Xc={class:"inline-block",viewBox:"0 0 256 256",width:"1em",height:"1em"},Yc=M("path",{fill:"currentColor",d:"M208.49 199.51a12 12 0 0 1-17 17l-80-80a12 12 0 0 1 0-17l80-80a12 12 0 0 1 17 17L137 128ZM57 128l71.52-71.51a12 12 0 0 0-17-17l-80 80a12 12 0 0 0 0 17l80 80a12 12 0 0 0 17-17Z"},null,-1),Zc=[Yc];function Gc(e,t){return p(),N("svg",Xc,Zc)}const Jc={name:"ph-caret-double-left-bold",render:Gc},Qc={class:"inline-block",viewBox:"0 0 256 256",width:"1em",height:"1em"},ed=M("path",{fill:"currentColor",d:"m144.49 136.49l-80 80a12 12 0 0 1-17-17L119 128L47.51 56.49a12 12 0 0 1 17-17l80 80a12 12 0 0 1-.02 17Zm80-17l-80-80a12 12 0 1 0-17 17L199 128l-71.52 71.51a12 12 0 0 0 17 17l80-80a12 12 0 0 0 .01-17Z"},null,-1),td=[ed];function od(e,t){return p(),N("svg",Qc,td)}const nd={name:"ph-caret-double-right-bold",render:od},rd=T({name:"MixMenuCollapse",__name:"mix-menu-collapse",setup(e){const t=ge();return(o,n)=>{const r=nd,a=Jc,i=Be;return p(),H(i,{text:!0,class:"h-36px",onClick:l(t).toggleSiderCollapse},{default:b(()=>[l(t).siderCollapse?(p(),H(r,{key:0,class:"text-16px"})):(p(),H(a,{key:1,class:"text-16px"}))]),_:1},8,["onClick"])}}}),ad={class:"flex-1-hidden flex-col-stretch h-full"},ld=T({name:"VerticalMixSider",__name:"index",setup(e){const t=Ge(),o=ge(),n=X(),r=ct(),{routerPush:a}=$t(),{bool:i,setTrue:s,setFalse:c}=kt(),v=L("");function f(B){v.value=B}const m=y(()=>r.menus.map(B=>{const{routeName:I,label:E,i18nTitle:x}=B,P=B==null?void 0:B.icon,D=!!(B.children&&B.children.length);return{routeName:I,label:x?K(x):E,icon:P,hasChildren:D}}));function h(){m.value.some(B=>{var x;const I=(x=t.meta)!=null&&x.activeMenu?t.meta.activeMenu:t.name,E=I==null?void 0:I.includes(B.routeName);return E&&f(B.routeName),E})}function _(B,I){f(B),I?s():a({name:B})}function C(){h(),c()}const F=y(()=>{const B=[];return r.menus.some(I=>{var x;const E=I.routeName===v.value&&!!((x=I.children)!=null&&x.length);return E&&B.push(...co(I.children||[])),E}),B});return ue(()=>t.name,()=>{h()},{immediate:!0}),(B,I)=>{const E=ht,x=mt;return p(),H(x,{class:"flex h-full",inverted:l(n).sider.inverted,onMouseleave:C},{default:b(()=>[M("div",ad,[u(l(yo),{"show-title":!1,style:ke({height:l(n).header.height+"px"})},null,8,["style"]),u(E,{class:"flex-1-hidden"},{default:b(()=>[(p(!0),N(Z,null,$e(m.value,P=>(p(),H(l(Pc),{key:P.routeName,"route-name":P.routeName,"active-route-name":v.value,label:P.label,icon:P.icon,"is-mini":l(o).siderCollapse,onClick:D=>_(P.routeName,P.hasChildren)},null,8,["route-name","active-route-name","label","icon","is-mini","onClick"]))),128))]),_:1}),u(l(rd))]),u(l(qc),{visible:l(i),menus:F.value},null,8,["visible","menus"])]),_:1},8,["inverted"])}}}),id=T({name:"GlobalSider",__name:"index",setup(e){const t=X(),o=y(()=>t.layout.mode==="vertical-mix");return(n,r)=>o.value?(p(),H(l(ld),{key:0,class:"global-sider"})):(p(),H(l(Ac),{key:1,class:"global-sider"}))}}),sd=Ve(id,[["__scopeId","data-v-afe6955b"]]),cd=M("span",null,"Copyright ©2021 Soybean Admin",-1),dd=T({name:"GlobalFooter",__name:"index",setup(e){const t=X();return(o,n)=>{const r=mt;return p(),H(r,{class:"flex-center h-full",inverted:l(t).footer.inverted},{default:b(()=>[cd]),_:1},8,["inverted"])}}}),Ld=T({name:"BasicLayout",__name:"index",setup(e){const t=ge(),o=X(),{mode:n,isMobile:r,headerProps:a,siderVisible:i,siderWidth:s,siderCollapsedWidth:c}=Ht();return(v,f)=>{const m=pa;return p(),N(Z,null,[u(l(wr),{mode:l(n),"is-mobile":l(r),"scroll-mode":l(o).scrollMode,"scroll-el-id":l(t).scrollElId,"full-content":l(t).contentFull,"fixed-top":l(o).fixedHeaderAndTab,"header-height":l(o).header.height,"tab-visible":l(o).tab.visible,"tab-height":l(o).tab.height,"content-class":l(t).disableMainXScroll?"overflow-x-hidden":"","sider-visible":l(i),"sider-collapse":l(t).siderCollapse,"sider-width":l(s),"sider-collapsed-width":l(c),"footer-visible":l(o).footer.visible,"fixed-footer":l(o).footer.fixed,"right-footer":l(o).footer.right,onClickMobileSiderMask:f[0]||(f[0]=h=>l(t).setSiderCollapse(!0))},{header:b(()=>[u(l($c),xr(yr(l(a))),null,16)]),tab:b(()=>[u(l(Ic))]),sider:b(()=>[u(l(sd))]),footer:b(()=>[u(l(dd))]),default:b(()=>[u(l(Br))]),_:1},8,["mode","is-mobile","scroll-mode","scroll-el-id","full-content","fixed-top","header-height","tab-visible","tab-height","content-class","sider-visible","sider-collapse","sider-width","sider-collapsed-width","footer-visible","fixed-footer","right-footer"]),(p(),H(m,{key:l(o).scrollMode,"listen-to":`#${l(t).scrollElId}`,class:"z-100"},null,8,["listen-to"])),u(l(Mi))],64)}}});export{Ld as default};
