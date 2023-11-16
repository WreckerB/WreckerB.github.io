import{d as J,r as _,c0 as ct,h as b,ca as bt,cb as K,cc as ft,A as pt,D as Re,ag as ut,j as Y,q as vt,al as ht,N as gt,ak as mt,ah as xt,cd as yt,b as n,e as i,g as C,x as A,aq as wt,u as St,k as Te,bA as ee,i as te,z as Ct,t as H,w as Rt,n as Tt,ax as ve,bS as he,ce as zt,$ as G,v as ae,X as j,c5 as q,Z as $t,a7 as Pt,cf as _t,b$ as Wt}from"./index-f7a5b109.js";import{A as At}from"./Add-746ec1fe.js";import{u as ge}from"./use-compitable-83daf836.js";import{u as Lt}from"./use-merged-state-f08e5b82.js";import{c as Bt,a as me,o as Et}from"./cssr-191bc6ba.js";const kt=me(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[me("&::-webkit-scrollbar",{width:0,height:0})]),jt=J({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=_(null);function r(l){!(l.currentTarget.offsetWidth<l.currentTarget.scrollWidth)||l.deltaY===0||(l.currentTarget.scrollLeft+=l.deltaY+l.deltaX,l.preventDefault())}const d=ct();return kt.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:Bt,ssr:d}),Object.assign({selfRef:e,handleWheel:r},{scrollTo(...l){var h;(h=e.value)===null||h===void 0||h.scrollTo(...l)}})},render(){return b("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});var It=/\s/;function Ot(e){for(var r=e.length;r--&&It.test(e.charAt(r)););return r}var Ft=/^\s+/;function Ht(e){return e&&e.slice(0,Ot(e)+1).replace(Ft,"")}var xe=0/0,Dt=/^[-+]0x[0-9a-f]+$/i,Mt=/^0b[01]+$/i,Nt=/^0o[0-7]+$/i,Vt=parseInt;function ye(e){if(typeof e=="number")return e;if(bt(e))return xe;if(K(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=K(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=Ht(e);var d=Mt.test(e);return d||Nt.test(e)?Vt(e.slice(2),d?2:8):Dt.test(e)?xe:+e}var Xt=function(){return ft.Date.now()};const re=Xt;var Ut="Expected a function",Gt=Math.max,qt=Math.min;function Yt(e,r,d){var u,l,h,v,f,g,m=0,y=!1,w=!1,x=!0;if(typeof e!="function")throw new TypeError(Ut);r=ye(r)||0,K(d)&&(y=!!d.leading,w="maxWait"in d,h=w?Gt(ye(d.maxWait)||0,r):h,x="trailing"in d?!!d.trailing:x);function S(c){var z=u,I=l;return u=l=void 0,m=c,v=e.apply(I,z),v}function R(c){return m=c,f=setTimeout(L,r),y?S(c):v}function W(c){var z=c-g,I=c-m,F=r-z;return w?qt(F,h-I):F}function $(c){var z=c-g,I=c-m;return g===void 0||z>=r||z<0||w&&I>=h}function L(){var c=re();if($(c))return T(c);f=setTimeout(L,W(c))}function T(c){return f=void 0,x&&u?S(c):(u=l=void 0,v)}function B(){f!==void 0&&clearTimeout(f),m=0,u=g=l=f=void 0}function k(){return f===void 0?v:T(re())}function p(){var c=re(),z=$(c);if(u=arguments,l=this,g=c,z){if(f===void 0)return R(g);if(w)return clearTimeout(f),f=setTimeout(L,r),S(g)}return f===void 0&&(f=setTimeout(L,r)),v}return p.cancel=B,p.flush=k,p}var Kt="Expected a function";function ne(e,r,d){var u=!0,l=!0;if(typeof e!="function")throw new TypeError(Kt);return K(d)&&(u="leading"in d?!!d.leading:u,l="trailing"in d?!!d.trailing:l),Yt(e,r,{leading:u,maxWait:r,trailing:l})}const se=pt("n-tabs"),ze={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},oa=J({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:ze,setup(e){const r=Re(se,null);return r||ut("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:r.paneStyleRef,class:r.paneClassRef,mergedClsPrefix:r.mergedClsPrefixRef}},render(){return b("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),Jt=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},yt(ze,["displayDirective"])),ie=J({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:Jt,setup(e){const{mergedClsPrefixRef:r,valueRef:d,typeRef:u,closableRef:l,tabStyleRef:h,tabChangeIdRef:v,onBeforeLeaveRef:f,triggerRef:g,handleAdd:m,activateTab:y,handleClose:w}=Re(se);return{trigger:g,mergedClosable:Y(()=>{if(e.internalAddable)return!1;const{closable:x}=e;return x===void 0?l.value:x}),style:h,clsPrefix:r,value:d,type:u,handleClose(x){x.stopPropagation(),!e.disabled&&w(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){m();return}const{name:x}=e,S=++v.id;if(x!==d.value){const{value:R}=f;R?Promise.resolve(R(e.name,d.value)).then(W=>{W&&v.id===S&&y(x)}):y(x)}}}},render(){const{internalAddable:e,clsPrefix:r,name:d,disabled:u,label:l,tab:h,value:v,mergedClosable:f,style:g,trigger:m,$slots:{default:y}}=this,w=l??h;return b("div",{class:`${r}-tabs-tab-wrapper`},this.internalLeftPadded?b("div",{class:`${r}-tabs-tab-pad`}):null,b("div",Object.assign({key:d,"data-name":d,"data-disabled":u?!0:void 0},vt({class:[`${r}-tabs-tab`,v===d&&`${r}-tabs-tab--active`,u&&`${r}-tabs-tab--disabled`,f&&`${r}-tabs-tab--closable`,e&&`${r}-tabs-tab--addable`],onClick:m==="click"?this.activateTab:void 0,onMouseenter:m==="hover"?this.activateTab:void 0,style:e?void 0:g},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),b("span",{class:`${r}-tabs-tab__label`},e?b(ht,null,b("div",{class:`${r}-tabs-tab__height-placeholder`}," "),b(gt,{clsPrefix:r},{default:()=>b(At,null)})):y?y():typeof w=="object"?w:mt(w??d)),f&&this.type==="card"?b(xt,{clsPrefix:r,class:`${r}-tabs-tab__close`,onClick:this.handleClose,disabled:u}):null))}}),Zt=n("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[i("segment-type",[n("tabs-rail",[C("&.transition-disabled","color: red;",[n("tabs-tab",`
 transition: none;
 `)])])]),i("top",[n("tab-pane",`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),i("left",[n("tab-pane",`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),i("left, right",`
 flex-direction: row;
 `,[n("tabs-bar",`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),n("tabs-tab",`
 padding: var(--n-tab-padding-vertical); 
 `)]),i("right",`
 flex-direction: row-reverse;
 `,[n("tab-pane",`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),n("tabs-bar",`
 left: 0;
 `)]),i("bottom",`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[n("tab-pane",`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),n("tabs-bar",`
 top: 0;
 `)]),n("tabs-rail",`
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[n("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[n("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[i("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 `),C("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),i("flex",[n("tabs-nav",{width:"100%"},[n("tabs-wrapper",{width:"100%"},[n("tabs-tab",{marginRight:0})])])]),n("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[A("prefix, suffix",`
 display: flex;
 align-items: center;
 `),A("prefix","padding-right: 16px;"),A("suffix","padding-left: 16px;")]),i("top, bottom",[n("tabs-nav-scroll-wrapper",[C("&::before",`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),C("&::after",`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),i("shadow-start",[C("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),i("shadow-end",[C("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])]),i("left, right",[n("tabs-nav-scroll-wrapper",[C("&::before",`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),C("&::after",`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),i("shadow-start",[C("&::before",`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),i("shadow-end",[C("&::after",`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])]),n("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[n("tabs-nav-y-scroll",`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[C("&::-webkit-scrollbar",`
 width: 0;
 height: 0;
 `)]),C("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),n("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),n("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),n("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),n("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[i("disabled",{cursor:"not-allowed"}),A("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),A("label",`
 display: flex;
 align-items: center;
 `)]),n("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[C("&.transition-disabled",`
 transition: none;
 `),i("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),n("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),n("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[C("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),C("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),C("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),C("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),C("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),n("tabs-tab-pad",`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),i("line-type, bar-type",[n("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[C("&:hover",{color:"var(--n-tab-text-color-hover)"}),i("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),i("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),n("tabs-nav",[i("line-type",[i("top",[A("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),n("tabs-nav-scroll-content",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),n("tabs-bar",`
 bottom: -1px;
 `)]),i("left",[A("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),n("tabs-nav-scroll-content",`
 border-right: 1px solid var(--n-tab-border-color);
 `),n("tabs-bar",`
 right: -1px;
 `)]),i("right",[A("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),n("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `),n("tabs-bar",`
 left: -1px;
 `)]),i("bottom",[A("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),n("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 `),n("tabs-bar",`
 top: -1px;
 `)]),A("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),n("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 `),n("tabs-bar",`
 border-radius: 0;
 `)]),i("card-type",[A("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),n("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),n("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 `),n("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[i("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `,[A("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),wt("disabled",[C("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),i("closable","padding-right: 8px;"),i("active",`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),i("disabled","color: var(--n-tab-text-color-disabled);")]),n("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")]),i("left, right",[n("tabs-wrapper",`
 flex-direction: column;
 `,[n("tabs-tab-wrapper",`
 flex-direction: column;
 `,[n("tabs-tab-pad",`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])])]),i("top",[i("card-type",[n("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[i("active",`
 border-bottom: 1px solid #0000;
 `)]),n("tabs-tab-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),i("left",[i("card-type",[n("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[i("active",`
 border-right: 1px solid #0000;
 `)]),n("tabs-tab-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),i("right",[i("card-type",[n("tabs-tab",`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[i("active",`
 border-left: 1px solid #0000;
 `)]),n("tabs-tab-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),i("bottom",[i("card-type",[n("tabs-tab",`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[i("active",`
 border-top: 1px solid #0000;
 `)]),n("tabs-tab-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),Qt=Object.assign(Object.assign({},Te.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),ia=J({name:"Tabs",props:Qt,setup(e,{slots:r}){var d,u,l,h;const{mergedClsPrefixRef:v,inlineThemeDisabled:f}=St(e),g=Te("Tabs","-tabs",Zt,zt,e,v),m=_(null),y=_(null),w=_(null),x=_(null),S=_(null),R=_(!0),W=_(!0),$=ge(e,["labelSize","size"]),L=ge(e,["activeName","value"]),T=_((u=(d=L.value)!==null&&d!==void 0?d:e.defaultValue)!==null&&u!==void 0?u:r.default?(h=(l=ee(r.default())[0])===null||l===void 0?void 0:l.props)===null||h===void 0?void 0:h.name:null),B=Lt(L,T),k={id:0},p=Y(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});te(B,()=>{k.id=0,F(),le()});function c(){var t;const{value:a}=B;return a===null?null:(t=m.value)===null||t===void 0?void 0:t.querySelector(`[data-name="${a}"]`)}function z(t){if(e.type==="card")return;const{value:a}=y;if(a&&t){const o=`${v.value}-tabs-bar--disabled`,{barWidth:s,placement:P}=e;if(t.dataset.disabled==="true"?a.classList.add(o):a.classList.remove(o),["top","bottom"].includes(P)){if(I(["top","maxHeight","height"]),typeof s=="number"&&t.offsetWidth>=s){const E=Math.floor((t.offsetWidth-s)/2)+t.offsetLeft;a.style.left=`${E}px`,a.style.maxWidth=`${s}px`}else a.style.left=`${t.offsetLeft}px`,a.style.maxWidth=`${t.offsetWidth}px`;a.style.width="8192px",a.offsetWidth}else{if(I(["left","maxWidth","width"]),typeof s=="number"&&t.offsetHeight>=s){const E=Math.floor((t.offsetHeight-s)/2)+t.offsetTop;a.style.top=`${E}px`,a.style.maxHeight=`${s}px`}else a.style.top=`${t.offsetTop}px`,a.style.maxHeight=`${t.offsetHeight}px`;a.style.height="8192px",a.offsetHeight}}}function I(t){const{value:a}=y;if(a)for(const o of t)a.style[o]=""}function F(){if(e.type==="card")return;const t=c();t&&z(t)}function le(t){var a;const o=(a=S.value)===null||a===void 0?void 0:a.$el;if(!o)return;const s=c();if(!s)return;const{scrollLeft:P,offsetWidth:E}=o,{offsetLeft:M,offsetWidth:X}=s;P>M?o.scrollTo({top:0,left:M,behavior:"smooth"}):M+X>P+E&&o.scrollTo({top:0,left:M+X-E,behavior:"smooth"})}const N=_(null);let Z=0,O=null;function $e(t){const a=N.value;if(a){Z=t.getBoundingClientRect().height;const o=`${Z}px`,s=()=>{a.style.height=o,a.style.maxHeight=o};O?(s(),O(),O=null):O=s}}function Pe(t){const a=N.value;if(a){const o=t.getBoundingClientRect().height,s=()=>{document.body.offsetHeight,a.style.maxHeight=`${o}px`,a.style.height=`${Math.max(Z,o)}px`};O?(O(),O=null,s()):O=s}}function _e(){const t=N.value;t&&(t.style.maxHeight="",t.style.height="")}const de={value:[]},ce=_("next");function We(t){const a=B.value;let o="next";for(const s of de.value){if(s===a)break;if(s===t){o="prev";break}}ce.value=o,Ae(t)}function Ae(t){const{onActiveNameChange:a,onUpdateValue:o,"onUpdate:value":s}=e;a&&G(a,t),o&&G(o,t),s&&G(s,t),T.value=t}function Le(t){const{onClose:a}=e;a&&G(a,t)}function be(){const{value:t}=y;if(!t)return;const a="transition-disabled";t.classList.add(a),F(),t.classList.remove(a)}let fe=0;function Be(t){var a;if(t.contentRect.width===0&&t.contentRect.height===0||fe===t.contentRect.width)return;fe=t.contentRect.width;const{type:o}=e;(o==="line"||o==="bar")&&be(),o!=="segment"&&Q((a=S.value)===null||a===void 0?void 0:a.$el)}const Ee=ne(Be,64);te([()=>e.justifyContent,()=>e.size],()=>{ae(()=>{const{type:t}=e;(t==="line"||t==="bar")&&be()})});const V=_(!1);function ke(t){var a;const{target:o,contentRect:{width:s}}=t,P=o.parentElement.offsetWidth;if(!V.value)P<s&&(V.value=!0);else{const{value:E}=x;if(!E)return;P-s>E.$el.offsetWidth&&(V.value=!1)}Q((a=S.value)===null||a===void 0?void 0:a.$el)}const je=ne(ke,64);function Ie(){const{onAdd:t}=e;t&&t(),ae(()=>{const a=c(),{value:o}=S;!a||!o||o.scrollTo({left:a.offsetLeft,top:0,behavior:"smooth"})})}function Q(t){if(!t)return;const{placement:a}=e;if(a==="top"||a==="bottom"){const{scrollLeft:o,scrollWidth:s,offsetWidth:P}=t;R.value=o<=0,W.value=o+P>=s}else{const{scrollTop:o,scrollHeight:s,offsetHeight:P}=t;R.value=o<=0,W.value=o+P>=s}}const Oe=ne(t=>{Q(t.target)},64);Ct(se,{triggerRef:H(e,"trigger"),tabStyleRef:H(e,"tabStyle"),paneClassRef:H(e,"paneClass"),paneStyleRef:H(e,"paneStyle"),mergedClsPrefixRef:v,typeRef:H(e,"type"),closableRef:H(e,"closable"),valueRef:B,tabChangeIdRef:k,onBeforeLeaveRef:H(e,"onBeforeLeave"),activateTab:We,handleClose:Le,handleAdd:Ie}),Et(()=>{F(),le()}),Rt(()=>{const{value:t}=w;if(!t)return;const{value:a}=v,o=`${a}-tabs-nav-scroll-wrapper--shadow-start`,s=`${a}-tabs-nav-scroll-wrapper--shadow-end`;R.value?t.classList.remove(o):t.classList.add(o),W.value?t.classList.remove(s):t.classList.add(s)});const pe=_(null);te(B,()=>{if(e.type==="segment"){const t=pe.value;t&&ae(()=>{t.classList.add("transition-disabled"),t.offsetWidth,t.classList.remove("transition-disabled")})}});const Fe={syncBarPosition:()=>{F()}},ue=Y(()=>{const{value:t}=$,{type:a}=e,o={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[a],s=`${t}${o}`,{self:{barColor:P,closeIconColor:E,closeIconColorHover:M,closeIconColorPressed:X,tabColor:He,tabBorderColor:De,paneTextColor:Me,tabFontWeight:Ne,tabBorderRadius:Ve,tabFontWeightActive:Xe,colorSegment:Ue,fontWeightStrong:Ge,tabColorSegment:qe,closeSize:Ye,closeIconSize:Ke,closeColorHover:Je,closeColorPressed:Ze,closeBorderRadius:Qe,[j("panePadding",t)]:U,[j("tabPadding",s)]:et,[j("tabPaddingVertical",s)]:tt,[j("tabGap",s)]:at,[j("tabGap",`${s}Vertical`)]:rt,[j("tabTextColor",a)]:nt,[j("tabTextColorActive",a)]:ot,[j("tabTextColorHover",a)]:it,[j("tabTextColorDisabled",a)]:st,[j("tabFontSize",t)]:lt},common:{cubicBezierEaseInOut:dt}}=g.value;return{"--n-bezier":dt,"--n-color-segment":Ue,"--n-bar-color":P,"--n-tab-font-size":lt,"--n-tab-text-color":nt,"--n-tab-text-color-active":ot,"--n-tab-text-color-disabled":st,"--n-tab-text-color-hover":it,"--n-pane-text-color":Me,"--n-tab-border-color":De,"--n-tab-border-radius":Ve,"--n-close-size":Ye,"--n-close-icon-size":Ke,"--n-close-color-hover":Je,"--n-close-color-pressed":Ze,"--n-close-border-radius":Qe,"--n-close-icon-color":E,"--n-close-icon-color-hover":M,"--n-close-icon-color-pressed":X,"--n-tab-color":He,"--n-tab-font-weight":Ne,"--n-tab-font-weight-active":Xe,"--n-tab-padding":et,"--n-tab-padding-vertical":tt,"--n-tab-gap":at,"--n-tab-gap-vertical":rt,"--n-pane-padding-left":q(U,"left"),"--n-pane-padding-right":q(U,"right"),"--n-pane-padding-top":q(U,"top"),"--n-pane-padding-bottom":q(U,"bottom"),"--n-font-weight-strong":Ge,"--n-tab-color-segment":qe}}),D=f?Tt("tabs",Y(()=>`${$.value[0]}${e.type[0]}`),ue,e):void 0;return Object.assign({mergedClsPrefix:v,mergedValue:B,renderedNames:new Set,tabsRailElRef:pe,tabsPaneWrapperRef:N,tabsElRef:m,barElRef:y,addTabInstRef:x,xScrollInstRef:S,scrollWrapperElRef:w,addTabFixed:V,tabWrapperStyle:p,handleNavResize:Ee,mergedSize:$,handleScroll:Oe,handleTabsResize:je,cssVars:f?void 0:ue,themeClass:D==null?void 0:D.themeClass,animationDirection:ce,renderNameListRef:de,onAnimationBeforeLeave:$e,onAnimationEnter:Pe,onAnimationAfterEnter:_e,onRender:D==null?void 0:D.onRender},Fe)},render(){const{mergedClsPrefix:e,type:r,placement:d,addTabFixed:u,addable:l,mergedSize:h,renderNameListRef:v,onRender:f,paneWrapperClass:g,paneWrapperStyle:m,$slots:{default:y,prefix:w,suffix:x}}=this;f==null||f();const S=y?ee(y()).filter(p=>p.type.__TAB_PANE__===!0):[],R=y?ee(y()).filter(p=>p.type.__TAB__===!0):[],W=!R.length,$=r==="card",L=r==="segment",T=!$&&!L&&this.justifyContent;v.value=[];const B=()=>{const p=b("div",{style:this.tabWrapperStyle,class:[`${e}-tabs-wrapper`]},T?null:b("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),W?S.map((c,z)=>(v.value.push(c.props.name),oe(b(ie,Object.assign({},c.props,{internalCreatedByPane:!0,internalLeftPadded:z!==0&&(!T||T==="center"||T==="start"||T==="end")}),c.children?{default:c.children.tab}:void 0)))):R.map((c,z)=>(v.value.push(c.props.name),oe(z!==0&&!T?Ce(c):c))),!u&&l&&$?Se(l,(W?S.length:R.length)!==0):null,T?null:b("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return b("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},$&&l?b(he,{onResize:this.handleTabsResize},{default:()=>p}):p,$?b("div",{class:`${e}-tabs-pad`}):null,$?null:b("div",{ref:"barElRef",class:`${e}-tabs-bar`}))},k=L?"top":d;return b("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${r}-type`,`${e}-tabs--${h}-size`,T&&`${e}-tabs--flex`,`${e}-tabs--${k}`],style:this.cssVars},b("div",{class:[`${e}-tabs-nav--${r}-type`,`${e}-tabs-nav--${k}`,`${e}-tabs-nav`]},ve(w,p=>p&&b("div",{class:`${e}-tabs-nav__prefix`},p)),L?b("div",{class:`${e}-tabs-rail`,ref:"tabsRailElRef"},W?S.map((p,c)=>(v.value.push(p.props.name),b(ie,Object.assign({},p.props,{internalCreatedByPane:!0,internalLeftPadded:c!==0}),p.children?{default:p.children.tab}:void 0))):R.map((p,c)=>(v.value.push(p.props.name),c===0?p:Ce(p)))):b(he,{onResize:this.handleNavResize},{default:()=>b("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(k)?b(jt,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:B}):b("div",{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll},B()))}),u&&l&&$?Se(l,!0):null,ve(x,p=>p&&b("div",{class:`${e}-tabs-nav__suffix`},p))),W&&(this.animated&&(k==="top"||k==="bottom")?b("div",{ref:"tabsPaneWrapperRef",style:m,class:[`${e}-tabs-pane-wrapper`,g]},we(S,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):we(S,this.mergedValue,this.renderedNames)))}});function we(e,r,d,u,l,h,v){const f=[];return e.forEach(g=>{const{name:m,displayDirective:y,"display-directive":w}=g.props,x=R=>y===R||w===R,S=r===m;if(g.key!==void 0&&(g.key=m),S||x("show")||x("show:lazy")&&d.has(m)){d.has(m)||d.add(m);const R=!x("if");f.push(R?$t(g,[[Pt,S]]):g)}}),v?b(_t,{name:`${v}-transition`,onBeforeLeave:u,onEnter:l,onAfterEnter:h},{default:()=>f}):f}function Se(e,r){return b(ie,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:r,disabled:typeof e=="object"&&e.disabled})}function Ce(e){const r=Wt(e);return r.props?r.props.internalLeftPadded=!0:r.props={internalLeftPadded:!0},r}function oe(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}export{oa as _,ia as a};
