import{d as de,c0 as kt,o as Pe,c1 as nn,c2 as on,j as W,r as z,am as Le,av as lt,h as c,q as ln,bS as ht,au as Ee,v as ut,aM as rn,c3 as vt,m as Ot,D as Ft,ak as xe,N as an,T as Rt,b as L,x as X,e as oe,g as re,aq as rt,f as Mt,k as Ce,t as te,c4 as sn,i as Se,z as gt,n as dt,ax as un,az as dn,a9 as cn,s as fn,X as ge,c5 as Ze,c6 as hn,w as vn,c7 as gn,al as bn,u as pn,V as mn,p as yn,Z as wn,a7 as xn,_ as bt,c8 as Sn,Y as Cn,c9 as Tn,$ as le}from"./index-d0ac485a.js";import{u as pt}from"./use-merged-state-0ed2310a.js";import{N as kn,u as On}from"./Suffix-a096acb2.js";import{u as Fn}from"./use-compitable-d1be0f2c.js";import{N as Je}from"./Tag-e4c897bb.js";import{c as Pt,a as Ke}from"./cssr-4ac68fb3.js";import{i as ct,c as Rn,_ as Mn,d as Pn,u as at,V as zn,a as In,b as _n}from"./Popover-d87ccd9e.js";import{b as An}from"./next-frame-once-7035a838.js";function De(e,t){let{target:n}=e;for(;n;){if(n.dataset&&n.dataset[t]!==void 0)return!0;n=n.parentElement}return!1}function Bn(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function Qe(e){const t=e.filter(n=>n!==void 0);if(t.length!==0)return t.length===1?t[0]:n=>{e.forEach(o=>{o&&o(n)})}}function mt(e){return e&-e}class Nn{constructor(t,n){this.l=t,this.min=n;const o=new Array(t+1);for(let l=0;l<t+1;++l)o[l]=0;this.ft=o}add(t,n){if(n===0)return;const{l:o,ft:l}=this;for(t+=1;t<=o;)l[t]+=n,t+=mt(t)}get(t){return this.sum(t+1)-this.sum(t)}sum(t){if(t===void 0&&(t=this.l),t<=0)return 0;const{ft:n,min:o,l}=this;if(t>l)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let s=t*o;for(;t>0;)s+=n[t],t-=mt(t);return s}getBound(t){let n=0,o=this.l;for(;o>n;){const l=Math.floor((n+o)/2),s=this.sum(l);if(s>t){o=l;continue}else if(s<t){if(n===l)return this.sum(n+1)<=t?n+1:l;n=l}else return l}return n}}let $e;function En(){return typeof document>"u"?!1:($e===void 0&&("matchMedia"in window?$e=window.matchMedia("(pointer:coarse)").matches:$e=!1),$e)}let et;function yt(){return typeof document>"u"?1:(et===void 0&&(et="chrome"in window?window.devicePixelRatio:1),et)}const $n=Ke(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[Ke("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[Ke("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),Ln=de({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const t=kt();$n.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:Pt,ssr:t}),Pe(()=>{const{defaultScrollIndex:b,defaultScrollKey:w}=e;b!=null?g({index:b}):w!=null&&g({key:w})});let n=!1,o=!1;nn(()=>{if(n=!1,!o){o=!0;return}g({top:C.value,left:h})}),on(()=>{n=!0,o||(o=!0)});const l=W(()=>{const b=new Map,{keyField:w}=e;return e.items.forEach((E,q)=>{b.set(E[w],q)}),b}),s=z(null),a=z(void 0),r=new Map,y=W(()=>{const{items:b,itemSize:w,keyField:E}=e,q=new Nn(b.length,w);return b.forEach((Y,G)=>{const K=Y[E],Z=r.get(K);Z!==void 0&&q.add(G,Z)}),q}),v=z(0);let h=0;const C=z(0),R=Le(()=>Math.max(y.value.getBound(C.value-lt(e.paddingTop))-1,0)),D=W(()=>{const{value:b}=a;if(b===void 0)return[];const{items:w,itemSize:E}=e,q=R.value,Y=Math.min(q+Math.ceil(b/E+1),w.length-1),G=[];for(let K=q;K<=Y;++K)G.push(w[K]);return G}),g=(b,w)=>{if(typeof b=="number"){k(b,w,"auto");return}const{left:E,top:q,index:Y,key:G,position:K,behavior:Z,debounce:u=!0}=b;if(E!==void 0||q!==void 0)k(E,q,Z);else if(Y!==void 0)T(Y,Z,u);else if(G!==void 0){const m=l.value.get(G);m!==void 0&&T(m,Z,u)}else K==="bottom"?k(0,Number.MAX_SAFE_INTEGER,Z):K==="top"&&k(0,0,Z)};let O,V=null;function T(b,w,E){const{value:q}=y,Y=q.sum(b)+lt(e.paddingTop);if(!E)s.value.scrollTo({left:0,top:Y,behavior:w});else{O=b,V!==null&&window.clearTimeout(V),V=window.setTimeout(()=>{O=void 0,V=null},16);const{scrollTop:G,offsetHeight:K}=s.value;if(Y>G){const Z=q.get(b);Y+Z<=G+K||s.value.scrollTo({left:0,top:Y+Z-K,behavior:w})}else s.value.scrollTo({left:0,top:Y,behavior:w})}}function k(b,w,E){s.value.scrollTo({left:b,top:w,behavior:E})}function M(b,w){var E,q,Y;if(n||e.ignoreItemResize||B(w.target))return;const{value:G}=y,K=l.value.get(b),Z=G.get(K),u=(Y=(q=(E=w.borderBoxSize)===null||E===void 0?void 0:E[0])===null||q===void 0?void 0:q.blockSize)!==null&&Y!==void 0?Y:w.contentRect.height;if(u===Z)return;u-e.itemSize===0?r.delete(b):r.set(b,u-e.itemSize);const j=u-Z;if(j===0)return;G.add(K,j);const ee=s.value;if(ee!=null){if(O===void 0){const ae=G.sum(K);ee.scrollTop>ae&&ee.scrollBy(0,j)}else if(K<O)ee.scrollBy(0,j);else if(K===O){const ae=G.sum(K);u+ae>ee.scrollTop+ee.offsetHeight&&ee.scrollBy(0,j)}U()}v.value++}const p=!En();let x=!1;function P(b){var w;(w=e.onScroll)===null||w===void 0||w.call(e,b),(!p||!x)&&U()}function A(b){var w;if((w=e.onWheel)===null||w===void 0||w.call(e,b),p){const E=s.value;if(E!=null){if(b.deltaX===0&&(E.scrollTop===0&&b.deltaY<=0||E.scrollTop+E.offsetHeight>=E.scrollHeight&&b.deltaY>=0))return;b.preventDefault(),E.scrollTop+=b.deltaY/yt(),E.scrollLeft+=b.deltaX/yt(),U(),x=!0,An(()=>{x=!1})}}}function H(b){if(n||B(b.target)||b.contentRect.height===a.value)return;a.value=b.contentRect.height;const{onResize:w}=e;w!==void 0&&w(b)}function U(){const{value:b}=s;b!=null&&(C.value=b.scrollTop,h=b.scrollLeft)}function B(b){let w=b;for(;w!==null;){if(w.style.display==="none")return!0;w=w.parentElement}return!1}return{listHeight:a,listStyle:{overflow:"auto"},keyToIndex:l,itemsStyle:W(()=>{const{itemResizable:b}=e,w=Ee(y.value.sum());return v.value,[e.itemsStyle,{boxSizing:"content-box",height:b?"":w,minHeight:b?w:"",paddingTop:Ee(e.paddingTop),paddingBottom:Ee(e.paddingBottom)}]}),visibleItemsStyle:W(()=>(v.value,{transform:`translateY(${Ee(y.value.sum(R.value))})`})),viewportItems:D,listElRef:s,itemsElRef:z(null),scrollTo:g,handleListResize:H,handleListScroll:P,handleListWheel:A,handleItemResize:M}},render(){const{itemResizable:e,keyField:t,keyToIndex:n,visibleItemsTag:o}=this;return c(ht,{onResize:this.handleListResize},{default:()=>{var l,s;return c("div",ln(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?c("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[c(o,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>this.viewportItems.map(a=>{const r=a[t],y=n.get(r),v=this.$slots.default({item:a,index:y})[0];return e?c(ht,{key:r,onResize:h=>this.handleItemResize(r,h)},{default:()=>v}):(v.key=r,v)})})]):(s=(l=this.$slots).empty)===null||s===void 0?void 0:s.call(l)])}})}}),ue="v-hidden",Kn=Ke("[v-hidden]",{display:"none!important"}),wt=de({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(e,{slots:t}){const n=z(null),o=z(null);function l(a){const{value:r}=n,{getCounter:y,getTail:v}=e;let h;if(y!==void 0?h=y():h=o.value,!r||!h)return;h.hasAttribute(ue)&&h.removeAttribute(ue);const{children:C}=r;if(a.showAllItemsBeforeCalculate)for(const M of C)M.hasAttribute(ue)&&M.removeAttribute(ue);const R=r.offsetWidth,D=[],g=t.tail?v==null?void 0:v():null;let O=g?g.offsetWidth:0,V=!1;const T=r.children.length-(t.tail?1:0);for(let M=0;M<T-1;++M){if(M<0)continue;const p=C[M];if(V){p.hasAttribute(ue)||p.setAttribute(ue,"");continue}else p.hasAttribute(ue)&&p.removeAttribute(ue);const x=p.offsetWidth;if(O+=x,D[M]=x,O>R){const{updateCounter:P}=e;for(let A=M;A>=0;--A){const H=T-1-A;P!==void 0?P(H):h.textContent=`${H}`;const U=h.offsetWidth;if(O-=D[A],O+U<=R||A===0){V=!0,M=A-1,g&&(M===-1?(g.style.maxWidth=`${R-U}px`,g.style.boxSizing="border-box"):g.style.maxWidth="");const{onUpdateCount:B}=e;B&&B(H);break}}}}const{onUpdateOverflow:k}=e;V?k!==void 0&&k(!0):(k!==void 0&&k(!1),h.setAttribute(ue,""))}const s=kt();return Kn.mount({id:"vueuc/overflow",head:!0,anchorMetaName:Pt,ssr:s}),Pe(()=>l({showAllItemsBeforeCalculate:!1})),{selfRef:n,counterRef:o,sync:l}},render(){const{$slots:e}=this;return ut(()=>this.sync({showAllItemsBeforeCalculate:!1})),c("div",{class:"v-overflow",ref:"selfRef"},[rn(e,"default"),e.counter?e.counter():c("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});function zt(e,t){t&&(Pe(()=>{const{value:n}=e;n&&vt.registerHandler(n,t)}),Ot(()=>{const{value:n}=e;n&&vt.unregisterHandler(n)}))}const Dn=de({name:"Checkmark",render(){return c("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},c("g",{fill:"none"},c("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),Vn=de({props:{onFocus:Function,onBlur:Function},setup(e){return()=>c("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}});function xt(e){return Array.isArray(e)?e:[e]}const st={STOP:"STOP"};function It(e,t){const n=t(e);e.children!==void 0&&n!==st.STOP&&e.children.forEach(o=>It(o,t))}function Wn(e,t={}){const{preserveGroup:n=!1}=t,o=[],l=n?a=>{a.isLeaf||(o.push(a.key),s(a.children))}:a=>{a.isLeaf||(a.isGroup||o.push(a.key),s(a.children))};function s(a){a.forEach(l)}return s(e),o}function jn(e,t){const{isLeaf:n}=e;return n!==void 0?n:!t(e)}function Hn(e){return e.children}function Gn(e){return e.key}function Un(){return!1}function qn(e,t){const{isLeaf:n}=e;return!(n===!1&&!Array.isArray(t(e)))}function Yn(e){return e.disabled===!0}function Xn(e,t){return e.isLeaf===!1&&!Array.isArray(t(e))}function tt(e){var t;return e==null?[]:Array.isArray(e)?e:(t=e.checkedKeys)!==null&&t!==void 0?t:[]}function nt(e){var t;return e==null||Array.isArray(e)?[]:(t=e.indeterminateKeys)!==null&&t!==void 0?t:[]}function Zn(e,t){const n=new Set(e);return t.forEach(o=>{n.has(o)||n.add(o)}),Array.from(n)}function Jn(e,t){const n=new Set(e);return t.forEach(o=>{n.has(o)&&n.delete(o)}),Array.from(n)}function Qn(e){return(e==null?void 0:e.type)==="group"}function eo(e){const t=new Map;return e.forEach((n,o)=>{t.set(n.key,o)}),n=>{var o;return(o=t.get(n))!==null&&o!==void 0?o:null}}class to extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function no(e,t,n,o){return Ve(t.concat(e),n,o,!1)}function oo(e,t){const n=new Set;return e.forEach(o=>{const l=t.treeNodeMap.get(o);if(l!==void 0){let s=l.parent;for(;s!==null&&!(s.disabled||n.has(s.key));)n.add(s.key),s=s.parent}}),n}function io(e,t,n,o){const l=Ve(t,n,o,!1),s=Ve(e,n,o,!0),a=oo(e,n),r=[];return l.forEach(y=>{(s.has(y)||a.has(y))&&r.push(y)}),r.forEach(y=>l.delete(y)),l}function ot(e,t){const{checkedKeys:n,keysToCheck:o,keysToUncheck:l,indeterminateKeys:s,cascade:a,leafOnly:r,checkStrategy:y,allowNotLoaded:v}=e;if(!a)return o!==void 0?{checkedKeys:Zn(n,o),indeterminateKeys:Array.from(s)}:l!==void 0?{checkedKeys:Jn(n,l),indeterminateKeys:Array.from(s)}:{checkedKeys:Array.from(n),indeterminateKeys:Array.from(s)};const{levelTreeNodeMap:h}=t;let C;l!==void 0?C=io(l,n,t,v):o!==void 0?C=no(o,n,t,v):C=Ve(n,t,v,!1);const R=y==="parent",D=y==="child"||r,g=C,O=new Set,V=Math.max.apply(null,Array.from(h.keys()));for(let T=V;T>=0;T-=1){const k=T===0,M=h.get(T);for(const p of M){if(p.isLeaf)continue;const{key:x,shallowLoaded:P}=p;if(D&&P&&p.children.forEach(B=>{!B.disabled&&!B.isLeaf&&B.shallowLoaded&&g.has(B.key)&&g.delete(B.key)}),p.disabled||!P)continue;let A=!0,H=!1,U=!0;for(const B of p.children){const b=B.key;if(!B.disabled){if(U&&(U=!1),g.has(b))H=!0;else if(O.has(b)){H=!0,A=!1;break}else if(A=!1,H)break}}A&&!U?(R&&p.children.forEach(B=>{!B.disabled&&g.has(B.key)&&g.delete(B.key)}),g.add(x)):H&&O.add(x),k&&D&&g.has(x)&&g.delete(x)}}return{checkedKeys:Array.from(g),indeterminateKeys:Array.from(O)}}function Ve(e,t,n,o){const{treeNodeMap:l,getChildren:s}=t,a=new Set,r=new Set(e);return e.forEach(y=>{const v=l.get(y);v!==void 0&&It(v,h=>{if(h.disabled)return st.STOP;const{key:C}=h;if(!a.has(C)&&(a.add(C),r.add(C),Xn(h.rawNode,s))){if(o)return st.STOP;if(!n)throw new to}})}),r}function lo(e,{includeGroup:t=!1,includeSelf:n=!0},o){var l;const s=o.treeNodeMap;let a=e==null?null:(l=s.get(e))!==null&&l!==void 0?l:null;const r={keyPath:[],treeNodePath:[],treeNode:a};if(a!=null&&a.ignored)return r.treeNode=null,r;for(;a;)!a.ignored&&(t||!a.isGroup)&&r.treeNodePath.push(a),a=a.parent;return r.treeNodePath.reverse(),n||r.treeNodePath.pop(),r.keyPath=r.treeNodePath.map(y=>y.key),r}function ro(e){if(e.length===0)return null;const t=e[0];return t.isGroup||t.ignored||t.disabled?t.getNext():t}function ao(e,t){const n=e.siblings,o=n.length,{index:l}=e;return t?n[(l+1)%o]:l===n.length-1?null:n[l+1]}function St(e,t,{loop:n=!1,includeDisabled:o=!1}={}){const l=t==="prev"?so:ao,s={reverse:t==="prev"};let a=!1,r=null;function y(v){if(v!==null){if(v===e){if(!a)a=!0;else if(!e.disabled&&!e.isGroup){r=e;return}}else if((!v.disabled||o)&&!v.ignored&&!v.isGroup){r=v;return}if(v.isGroup){const h=ft(v,s);h!==null?r=h:y(l(v,n))}else{const h=l(v,!1);if(h!==null)y(h);else{const C=uo(v);C!=null&&C.isGroup?y(l(C,n)):n&&y(l(v,!0))}}}}return y(e),r}function so(e,t){const n=e.siblings,o=n.length,{index:l}=e;return t?n[(l-1+o)%o]:l===0?null:n[l-1]}function uo(e){return e.parent}function ft(e,t={}){const{reverse:n=!1}=t,{children:o}=e;if(o){const{length:l}=o,s=n?l-1:0,a=n?-1:l,r=n?-1:1;for(let y=s;y!==a;y+=r){const v=o[y];if(!v.disabled&&!v.ignored)if(v.isGroup){const h=ft(v,t);if(h!==null)return h}else return v}}return null}const co={getChild(){return this.ignored?null:ft(this)},getParent(){const{parent:e}=this;return e!=null&&e.isGroup?e.getParent():e},getNext(e={}){return St(this,"next",e)},getPrev(e={}){return St(this,"prev",e)}};function fo(e,t){const n=t?new Set(t):void 0,o=[];function l(s){s.forEach(a=>{o.push(a),!(a.isLeaf||!a.children||a.ignored)&&(a.isGroup||n===void 0||n.has(a.key))&&l(a.children)})}return l(e),o}function ho(e,t){const n=e.key;for(;t;){if(t.key===n)return!0;t=t.parent}return!1}function _t(e,t,n,o,l,s=null,a=0){const r=[];return e.forEach((y,v)=>{var h;const C=Object.create(o);if(C.rawNode=y,C.siblings=r,C.level=a,C.index=v,C.isFirstChild=v===0,C.isLastChild=v+1===e.length,C.parent=s,!C.ignored){const R=l(y);Array.isArray(R)&&(C.children=_t(R,t,n,o,l,C,a+1))}r.push(C),t.set(C.key,C),n.has(a)||n.set(a,[]),(h=n.get(a))===null||h===void 0||h.push(C)}),r}function vo(e,t={}){var n;const o=new Map,l=new Map,{getDisabled:s=Yn,getIgnored:a=Un,getIsGroup:r=Qn,getKey:y=Gn}=t,v=(n=t.getChildren)!==null&&n!==void 0?n:Hn,h=t.ignoreEmptyChildren?p=>{const x=v(p);return Array.isArray(x)?x.length?x:null:x}:v,C=Object.assign({get key(){return y(this.rawNode)},get disabled(){return s(this.rawNode)},get isGroup(){return r(this.rawNode)},get isLeaf(){return jn(this.rawNode,h)},get shallowLoaded(){return qn(this.rawNode,h)},get ignored(){return a(this.rawNode)},contains(p){return ho(this,p)}},co),R=_t(e,o,l,C,h);function D(p){if(p==null)return null;const x=o.get(p);return x&&!x.isGroup&&!x.ignored?x:null}function g(p){if(p==null)return null;const x=o.get(p);return x&&!x.ignored?x:null}function O(p,x){const P=g(p);return P?P.getPrev(x):null}function V(p,x){const P=g(p);return P?P.getNext(x):null}function T(p){const x=g(p);return x?x.getParent():null}function k(p){const x=g(p);return x?x.getChild():null}const M={treeNodes:R,treeNodeMap:o,levelTreeNodeMap:l,maxLevel:Math.max(...l.keys()),getChildren:h,getFlattenedNodes(p){return fo(R,p)},getNode:D,getPrev:O,getNext:V,getParent:T,getChild:k,getFirstAvailableNode(){return ro(R)},getPath(p,x={}){return lo(p,x,M)},getCheckedKeys(p,x={}){const{cascade:P=!0,leafOnly:A=!1,checkStrategy:H="all",allowNotLoaded:U=!1}=x;return ot({checkedKeys:tt(p),indeterminateKeys:nt(p),cascade:P,leafOnly:A,checkStrategy:H,allowNotLoaded:U},M)},check(p,x,P={}){const{cascade:A=!0,leafOnly:H=!1,checkStrategy:U="all",allowNotLoaded:B=!1}=P;return ot({checkedKeys:tt(x),indeterminateKeys:nt(x),keysToCheck:p==null?[]:xt(p),cascade:A,leafOnly:H,checkStrategy:U,allowNotLoaded:B},M)},uncheck(p,x,P={}){const{cascade:A=!0,leafOnly:H=!1,checkStrategy:U="all",allowNotLoaded:B=!1}=P;return ot({checkedKeys:tt(x),indeterminateKeys:nt(x),keysToUncheck:p==null?[]:xt(p),cascade:A,leafOnly:H,checkStrategy:U,allowNotLoaded:B},M)},getNonLeafKeys(p={}){return Wn(R,p)}};return M}function go(e,t){return c(Rt,{name:"fade-in-scale-up-transition"},{default:()=>e?c(an,{clsPrefix:t,class:`${t}-base-select-option__check`},{default:()=>c(Dn)}):null})}const Ct=de({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:t,pendingTmNodeRef:n,multipleRef:o,valueSetRef:l,renderLabelRef:s,renderOptionRef:a,labelFieldRef:r,valueFieldRef:y,showCheckmarkRef:v,nodePropsRef:h,handleOptionClick:C,handleOptionMouseEnter:R}=Ft(ct),D=Le(()=>{const{value:T}=n;return T?e.tmNode.key===T.key:!1});function g(T){const{tmNode:k}=e;k.disabled||C(T,k)}function O(T){const{tmNode:k}=e;k.disabled||R(T,k)}function V(T){const{tmNode:k}=e,{value:M}=D;k.disabled||M||R(T,k)}return{multiple:o,isGrouped:Le(()=>{const{tmNode:T}=e,{parent:k}=T;return k&&k.rawNode.type==="group"}),showCheckmark:v,nodeProps:h,isPending:D,isSelected:Le(()=>{const{value:T}=t,{value:k}=o;if(T===null)return!1;const M=e.tmNode.rawNode[y.value];if(k){const{value:p}=l;return p.has(M)}else return T===M}),labelField:r,renderLabel:s,renderOption:a,handleMouseMove:V,handleMouseEnter:O,handleClick:g}},render(){const{clsPrefix:e,tmNode:{rawNode:t},isSelected:n,isPending:o,isGrouped:l,showCheckmark:s,nodeProps:a,renderOption:r,renderLabel:y,handleClick:v,handleMouseEnter:h,handleMouseMove:C}=this,R=go(n,e),D=y?[y(t,n),s&&R]:[xe(t[this.labelField],t,n),s&&R],g=a==null?void 0:a(t),O=c("div",Object.assign({},g,{class:[`${e}-base-select-option`,t.class,g==null?void 0:g.class,{[`${e}-base-select-option--disabled`]:t.disabled,[`${e}-base-select-option--selected`]:n,[`${e}-base-select-option--grouped`]:l,[`${e}-base-select-option--pending`]:o,[`${e}-base-select-option--show-checkmark`]:s}],style:[(g==null?void 0:g.style)||"",t.style||""],onClick:Qe([v,g==null?void 0:g.onClick]),onMouseenter:Qe([h,g==null?void 0:g.onMouseenter]),onMousemove:Qe([C,g==null?void 0:g.onMousemove])}),c("div",{class:`${e}-base-select-option__content`},D));return t.render?t.render({node:O,option:t,selected:n}):r?r({node:O,option:t,selected:n}):O}}),Tt=de({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:t,labelFieldRef:n,nodePropsRef:o}=Ft(ct);return{labelField:n,nodeProps:o,renderLabel:e,renderOption:t}},render(){const{clsPrefix:e,renderLabel:t,renderOption:n,nodeProps:o,tmNode:{rawNode:l}}=this,s=o==null?void 0:o(l),a=t?t(l,!1):xe(l[this.labelField],l,!1),r=c("div",Object.assign({},s,{class:[`${e}-base-select-group-header`,s==null?void 0:s.class]}),a);return l.render?l.render({node:r,option:l}):n?n({node:r,option:l,selected:!1}):r}}),bo=L("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[L("scrollbar",`
 max-height: var(--n-height);
 `),L("virtual-list",`
 max-height: var(--n-height);
 `),L("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[X("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),L("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),L("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),X("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),X("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),X("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),L("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),L("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[oe("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),re("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),re("&:active",`
 color: var(--n-option-text-color-pressed);
 `),oe("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),oe("pending",[re("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),oe("selected",`
 color: var(--n-option-text-color-active);
 `,[re("&::before",`
 background-color: var(--n-option-color-active);
 `),oe("pending",[re("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),oe("disabled",`
 cursor: not-allowed;
 `,[rt("selected",`
 color: var(--n-option-text-color-disabled);
 `),oe("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),X("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[Mt({enterScale:"0.5"})])])]),po=de({name:"InternalSelectMenu",props:Object.assign(Object.assign({},Ce.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const t=Ce("InternalSelectMenu","-internal-select-menu",bo,sn,e,te(e,"clsPrefix")),n=z(null),o=z(null),l=z(null),s=W(()=>e.treeMate.getFlattenedNodes()),a=W(()=>eo(s.value)),r=z(null);function y(){const{treeMate:u}=e;let m=null;const{value:j}=e;j===null?m=u.getFirstAvailableNode():(e.multiple?m=u.getNode((j||[])[(j||[]).length-1]):m=u.getNode(j),(!m||m.disabled)&&(m=u.getFirstAvailableNode())),b(m||null)}function v(){const{value:u}=r;u&&!e.treeMate.getNode(u.key)&&(r.value=null)}let h;Se(()=>e.show,u=>{u?h=Se(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?y():v(),ut(w)):v()},{immediate:!0}):h==null||h()},{immediate:!0}),Ot(()=>{h==null||h()});const C=W(()=>lt(t.value.self[ge("optionHeight",e.size)])),R=W(()=>Ze(t.value.self[ge("padding",e.size)])),D=W(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),g=W(()=>{const u=s.value;return u&&u.length===0});function O(u){const{onToggle:m}=e;m&&m(u)}function V(u){const{onScroll:m}=e;m&&m(u)}function T(u){var m;(m=l.value)===null||m===void 0||m.sync(),V(u)}function k(){var u;(u=l.value)===null||u===void 0||u.sync()}function M(){const{value:u}=r;return u||null}function p(u,m){m.disabled||b(m,!1)}function x(u,m){m.disabled||O(m)}function P(u){var m;De(u,"action")||(m=e.onKeyup)===null||m===void 0||m.call(e,u)}function A(u){var m;De(u,"action")||(m=e.onKeydown)===null||m===void 0||m.call(e,u)}function H(u){var m;(m=e.onMousedown)===null||m===void 0||m.call(e,u),!e.focusable&&u.preventDefault()}function U(){const{value:u}=r;u&&b(u.getNext({loop:!0}),!0)}function B(){const{value:u}=r;u&&b(u.getPrev({loop:!0}),!0)}function b(u,m=!1){r.value=u,m&&w()}function w(){var u,m;const j=r.value;if(!j)return;const ee=a.value(j.key);ee!==null&&(e.virtualScroll?(u=o.value)===null||u===void 0||u.scrollTo({index:ee}):(m=l.value)===null||m===void 0||m.scrollTo({index:ee,elSize:C.value}))}function E(u){var m,j;!((m=n.value)===null||m===void 0)&&m.contains(u.target)&&((j=e.onFocus)===null||j===void 0||j.call(e,u))}function q(u){var m,j;!((m=n.value)===null||m===void 0)&&m.contains(u.relatedTarget)||(j=e.onBlur)===null||j===void 0||j.call(e,u)}gt(ct,{handleOptionMouseEnter:p,handleOptionClick:x,valueSetRef:D,pendingTmNodeRef:r,nodePropsRef:te(e,"nodeProps"),showCheckmarkRef:te(e,"showCheckmark"),multipleRef:te(e,"multiple"),valueRef:te(e,"value"),renderLabelRef:te(e,"renderLabel"),renderOptionRef:te(e,"renderOption"),labelFieldRef:te(e,"labelField"),valueFieldRef:te(e,"valueField")}),gt(Rn,n),Pe(()=>{const{value:u}=l;u&&u.sync()});const Y=W(()=>{const{size:u}=e,{common:{cubicBezierEaseInOut:m},self:{height:j,borderRadius:ee,color:ae,groupHeaderTextColor:Te,actionDividerColor:ke,optionTextColorPressed:be,optionTextColor:pe,optionTextColorDisabled:se,optionTextColorActive:ne,optionOpacityDisabled:me,optionCheckColor:ce,actionTextColor:Oe,optionColorPending:he,optionColorActive:ve,loadingColor:Fe,loadingSize:Re,optionColorActivePending:Me,[ge("optionFontSize",u)]:ye,[ge("optionHeight",u)]:we,[ge("optionPadding",u)]:ie}}=t.value;return{"--n-height":j,"--n-action-divider-color":ke,"--n-action-text-color":Oe,"--n-bezier":m,"--n-border-radius":ee,"--n-color":ae,"--n-option-font-size":ye,"--n-group-header-text-color":Te,"--n-option-check-color":ce,"--n-option-color-pending":he,"--n-option-color-active":ve,"--n-option-color-active-pending":Me,"--n-option-height":we,"--n-option-opacity-disabled":me,"--n-option-text-color":pe,"--n-option-text-color-active":ne,"--n-option-text-color-disabled":se,"--n-option-text-color-pressed":be,"--n-option-padding":ie,"--n-option-padding-left":Ze(ie,"left"),"--n-option-padding-right":Ze(ie,"right"),"--n-loading-color":Fe,"--n-loading-size":Re}}),{inlineThemeDisabled:G}=e,K=G?dt("internal-select-menu",W(()=>e.size[0]),Y,e):void 0,Z={selfRef:n,next:U,prev:B,getPendingTmNode:M};return zt(n,e.onResize),Object.assign({mergedTheme:t,virtualListRef:o,scrollbarRef:l,itemSize:C,padding:R,flattenedNodes:s,empty:g,virtualListContainer(){const{value:u}=o;return u==null?void 0:u.listElRef},virtualListContent(){const{value:u}=o;return u==null?void 0:u.itemsElRef},doScroll:V,handleFocusin:E,handleFocusout:q,handleKeyUp:P,handleKeyDown:A,handleMouseDown:H,handleVirtualListResize:k,handleVirtualListScroll:T,cssVars:G?void 0:Y,themeClass:K==null?void 0:K.themeClass,onRender:K==null?void 0:K.onRender},Z)},render(){const{$slots:e,virtualScroll:t,clsPrefix:n,mergedTheme:o,themeClass:l,onRender:s}=this;return s==null||s(),c("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${n}-base-select-menu`,l,this.multiple&&`${n}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},this.loading?c("div",{class:`${n}-base-select-menu__loading`},c(dn,{clsPrefix:n,strokeWidth:20})):this.empty?c("div",{class:`${n}-base-select-menu__empty`,"data-empty":!0},fn(e.empty,()=>[c(Mn,{theme:o.peers.Empty,themeOverrides:o.peerOverrides.Empty})])):c(cn,{ref:"scrollbarRef",theme:o.peers.Scrollbar,themeOverrides:o.peerOverrides.Scrollbar,scrollable:this.scrollable,container:t?this.virtualListContainer:void 0,content:t?this.virtualListContent:void 0,onScroll:t?void 0:this.doScroll},{default:()=>t?c(Ln,{ref:"virtualListRef",class:`${n}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:a})=>a.isGroup?c(Tt,{key:a.key,clsPrefix:n,tmNode:a}):a.ignored?null:c(Ct,{clsPrefix:n,key:a.key,tmNode:a})}):c("div",{class:`${n}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(a=>a.isGroup?c(Tt,{key:a.key,clsPrefix:n,tmNode:a}):c(Ct,{clsPrefix:n,key:a.key,tmNode:a})))}),un(e.action,a=>a&&[c("div",{class:`${n}-base-select-menu__action`,"data-action":!0,key:"action"},a),c(Vn,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),mo=re([L("base-selection",`
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[L("base-loading",`
 color: var(--n-loading-color);
 `),L("base-selection-tags","min-height: var(--n-height);"),X("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),X("state-border",`
 z-index: 1;
 border-color: #0000;
 `),L("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[X("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),L("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[X("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),L("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[X("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),L("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),L("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[L("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[X("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),X("render-label",`
 color: var(--n-text-color);
 `)]),rt("disabled",[re("&:hover",[X("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),oe("focus",[X("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),oe("active",[X("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),L("base-selection-label","background-color: var(--n-color-active);"),L("base-selection-tags","background-color: var(--n-color-active);")])]),oe("disabled","cursor: not-allowed;",[X("arrow",`
 color: var(--n-arrow-color-disabled);
 `),L("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[L("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),X("render-label",`
 color: var(--n-text-color-disabled);
 `)]),L("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),L("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),L("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[X("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),X("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>oe(`${e}-status`,[X("state-border",`border: var(--n-border-${e});`),rt("disabled",[re("&:hover",[X("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),oe("active",[X("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),L("base-selection-label",`background-color: var(--n-color-active-${e});`),L("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),oe("focus",[X("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),L("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),L("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[re("&:last-child","padding-right: 0;"),L("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[X("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),yo=de({name:"InternalSelection",props:Object.assign(Object.assign({},Ce.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const t=z(null),n=z(null),o=z(null),l=z(null),s=z(null),a=z(null),r=z(null),y=z(null),v=z(null),h=z(null),C=z(!1),R=z(!1),D=z(!1),g=Ce("InternalSelection","-internal-selection",mo,hn,e,te(e,"clsPrefix")),O=W(()=>e.clearable&&!e.disabled&&(D.value||e.active)),V=W(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):xe(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),T=W(()=>{const d=e.selectedOption;if(d)return d[e.labelField]}),k=W(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function M(){var d;const{value:S}=t;if(S){const{value:J}=n;J&&(J.style.width=`${S.offsetWidth}px`,e.maxTagCount!=="responsive"&&((d=v.value)===null||d===void 0||d.sync()))}}function p(){const{value:d}=h;d&&(d.style.display="none")}function x(){const{value:d}=h;d&&(d.style.display="inline-block")}Se(te(e,"active"),d=>{d||p()}),Se(te(e,"pattern"),()=>{e.multiple&&ut(M)});function P(d){const{onFocus:S}=e;S&&S(d)}function A(d){const{onBlur:S}=e;S&&S(d)}function H(d){const{onDeleteOption:S}=e;S&&S(d)}function U(d){const{onClear:S}=e;S&&S(d)}function B(d){const{onPatternInput:S}=e;S&&S(d)}function b(d){var S;(!d.relatedTarget||!(!((S=o.value)===null||S===void 0)&&S.contains(d.relatedTarget)))&&P(d)}function w(d){var S;!((S=o.value)===null||S===void 0)&&S.contains(d.relatedTarget)||A(d)}function E(d){U(d)}function q(){D.value=!0}function Y(){D.value=!1}function G(d){!e.active||!e.filterable||d.target!==n.value&&d.preventDefault()}function K(d){H(d)}function Z(d){if(d.key==="Backspace"&&!u.value&&!e.pattern.length){const{selectedOptions:S}=e;S!=null&&S.length&&K(S[S.length-1])}}const u=z(!1);let m=null;function j(d){const{value:S}=t;if(S){const J=d.target.value;S.textContent=J,M()}e.ignoreComposition&&u.value?m=d:B(d)}function ee(){u.value=!0}function ae(){u.value=!1,e.ignoreComposition&&B(m),m=null}function Te(d){var S;R.value=!0,(S=e.onPatternFocus)===null||S===void 0||S.call(e,d)}function ke(d){var S;R.value=!1,(S=e.onPatternBlur)===null||S===void 0||S.call(e,d)}function be(){var d,S;if(e.filterable)R.value=!1,(d=a.value)===null||d===void 0||d.blur(),(S=n.value)===null||S===void 0||S.blur();else if(e.multiple){const{value:J}=l;J==null||J.blur()}else{const{value:J}=s;J==null||J.blur()}}function pe(){var d,S,J;e.filterable?(R.value=!1,(d=a.value)===null||d===void 0||d.focus()):e.multiple?(S=l.value)===null||S===void 0||S.focus():(J=s.value)===null||J===void 0||J.focus()}function se(){const{value:d}=n;d&&(x(),d.focus())}function ne(){const{value:d}=n;d&&d.blur()}function me(d){const{value:S}=r;S&&S.setTextContent(`+${d}`)}function ce(){const{value:d}=y;return d}function Oe(){return n.value}let he=null;function ve(){he!==null&&window.clearTimeout(he)}function Fe(){e.disabled||e.active||(ve(),he=window.setTimeout(()=>{k.value&&(C.value=!0)},100))}function Re(){ve()}function Me(d){d||(ve(),C.value=!1)}Se(k,d=>{d||(C.value=!1)}),Pe(()=>{vn(()=>{const d=a.value;d&&(d.tabIndex=e.disabled||R.value?-1:0)})}),zt(o,e.onResize);const{inlineThemeDisabled:ye}=e,we=W(()=>{const{size:d}=e,{common:{cubicBezierEaseInOut:S},self:{borderRadius:J,color:ze,placeholderColor:je,textColor:He,paddingSingle:Ge,paddingMultiple:Ue,caretColor:Ie,colorDisabled:_e,textColorDisabled:Ae,placeholderColorDisabled:qe,colorActive:Ye,boxShadowFocus:Be,boxShadowActive:fe,boxShadowHover:i,border:f,borderFocus:F,borderHover:$,borderActive:I,arrowColor:N,arrowColorDisabled:_,loadingColor:Q,colorActiveWarning:Ne,boxShadowFocusWarning:Xe,boxShadowActiveWarning:Bt,boxShadowHoverWarning:Nt,borderWarning:Et,borderFocusWarning:$t,borderHoverWarning:Lt,borderActiveWarning:Kt,colorActiveError:Dt,boxShadowFocusError:Vt,boxShadowActiveError:Wt,boxShadowHoverError:jt,borderError:Ht,borderFocusError:Gt,borderHoverError:Ut,borderActiveError:qt,clearColor:Yt,clearColorHover:Xt,clearColorPressed:Zt,clearSize:Jt,arrowSize:Qt,[ge("height",d)]:en,[ge("fontSize",d)]:tn}}=g.value;return{"--n-bezier":S,"--n-border":f,"--n-border-active":I,"--n-border-focus":F,"--n-border-hover":$,"--n-border-radius":J,"--n-box-shadow-active":fe,"--n-box-shadow-focus":Be,"--n-box-shadow-hover":i,"--n-caret-color":Ie,"--n-color":ze,"--n-color-active":Ye,"--n-color-disabled":_e,"--n-font-size":tn,"--n-height":en,"--n-padding-single":Ge,"--n-padding-multiple":Ue,"--n-placeholder-color":je,"--n-placeholder-color-disabled":qe,"--n-text-color":He,"--n-text-color-disabled":Ae,"--n-arrow-color":N,"--n-arrow-color-disabled":_,"--n-loading-color":Q,"--n-color-active-warning":Ne,"--n-box-shadow-focus-warning":Xe,"--n-box-shadow-active-warning":Bt,"--n-box-shadow-hover-warning":Nt,"--n-border-warning":Et,"--n-border-focus-warning":$t,"--n-border-hover-warning":Lt,"--n-border-active-warning":Kt,"--n-color-active-error":Dt,"--n-box-shadow-focus-error":Vt,"--n-box-shadow-active-error":Wt,"--n-box-shadow-hover-error":jt,"--n-border-error":Ht,"--n-border-focus-error":Gt,"--n-border-hover-error":Ut,"--n-border-active-error":qt,"--n-clear-size":Jt,"--n-clear-color":Yt,"--n-clear-color-hover":Xt,"--n-clear-color-pressed":Zt,"--n-arrow-size":Qt}}),ie=ye?dt("internal-selection",W(()=>e.size[0]),we,e):void 0;return{mergedTheme:g,mergedClearable:O,patternInputFocused:R,filterablePlaceholder:V,label:T,selected:k,showTagsPanel:C,isComposing:u,counterRef:r,counterWrapperRef:y,patternInputMirrorRef:t,patternInputRef:n,selfRef:o,multipleElRef:l,singleElRef:s,patternInputWrapperRef:a,overflowRef:v,inputTagElRef:h,handleMouseDown:G,handleFocusin:b,handleClear:E,handleMouseEnter:q,handleMouseLeave:Y,handleDeleteOption:K,handlePatternKeyDown:Z,handlePatternInputInput:j,handlePatternInputBlur:ke,handlePatternInputFocus:Te,handleMouseEnterCounter:Fe,handleMouseLeaveCounter:Re,handleFocusout:w,handleCompositionEnd:ae,handleCompositionStart:ee,onPopoverUpdateShow:Me,focus:pe,focusInput:se,blur:be,blurInput:ne,updateCounter:me,getCounter:ce,getTail:Oe,renderLabel:e.renderLabel,cssVars:ye?void 0:we,themeClass:ie==null?void 0:ie.themeClass,onRender:ie==null?void 0:ie.onRender}},render(){const{status:e,multiple:t,size:n,disabled:o,filterable:l,maxTagCount:s,bordered:a,clsPrefix:r,onRender:y,renderTag:v,renderLabel:h}=this;y==null||y();const C=s==="responsive",R=typeof s=="number",D=C||R,g=c(gn,null,{default:()=>c(kn,{clsPrefix:r,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var V,T;return(T=(V=this.$slots).arrow)===null||T===void 0?void 0:T.call(V)}})});let O;if(t){const{labelField:V}=this,T=w=>c("div",{class:`${r}-base-selection-tag-wrapper`,key:w.value},v?v({option:w,handleClose:()=>{this.handleDeleteOption(w)}}):c(Je,{size:n,closable:!w.disabled,disabled:o,onClose:()=>{this.handleDeleteOption(w)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>h?h(w,!0):xe(w[V],w,!0)})),k=()=>(R?this.selectedOptions.slice(0,s):this.selectedOptions).map(T),M=l?c("div",{class:`${r}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},c("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:o,value:this.pattern,autofocus:this.autofocus,class:`${r}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),c("span",{ref:"patternInputMirrorRef",class:`${r}-base-selection-input-tag__mirror`},this.pattern)):null,p=C?()=>c("div",{class:`${r}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},c(Je,{size:n,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:o})):void 0;let x;if(R){const w=this.selectedOptions.length-s;w>0&&(x=c("div",{class:`${r}-base-selection-tag-wrapper`,key:"__counter__"},c(Je,{size:n,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:o},{default:()=>`+${w}`})))}const P=C?l?c(wt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:k,counter:p,tail:()=>M}):c(wt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:k,counter:p}):R?k().concat(x):k(),A=D?()=>c("div",{class:`${r}-base-selection-popover`},C?k():this.selectedOptions.map(T)):void 0,H=D?{show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover}:null,B=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?c("div",{class:`${r}-base-selection-placeholder ${r}-base-selection-overlay`},c("div",{class:`${r}-base-selection-placeholder__inner`},this.placeholder)):null,b=l?c("div",{ref:"patternInputWrapperRef",class:`${r}-base-selection-tags`},P,C?null:M,g):c("div",{ref:"multipleElRef",class:`${r}-base-selection-tags`,tabindex:o?void 0:0},P,g);O=c(bn,null,D?c(Pn,Object.assign({},H,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>b,default:A}):b,B)}else if(l){const V=this.pattern||this.isComposing,T=this.active?!V:!this.selected,k=this.active?!1:this.selected;O=c("div",{ref:"patternInputWrapperRef",class:`${r}-base-selection-label`},c("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${r}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:o,disabled:o,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),k?c("div",{class:`${r}-base-selection-label__render-label ${r}-base-selection-overlay`,key:"input"},c("div",{class:`${r}-base-selection-overlay__wrapper`},v?v({option:this.selectedOption,handleClose:()=>{}}):h?h(this.selectedOption,!0):xe(this.label,this.selectedOption,!0))):null,T?c("div",{class:`${r}-base-selection-placeholder ${r}-base-selection-overlay`,key:"placeholder"},c("div",{class:`${r}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,g)}else O=c("div",{ref:"singleElRef",class:`${r}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?c("div",{class:`${r}-base-selection-input`,title:Bn(this.label),key:"input"},c("div",{class:`${r}-base-selection-input__content`},v?v({option:this.selectedOption,handleClose:()=>{}}):h?h(this.selectedOption,!0):xe(this.label,this.selectedOption,!0))):c("div",{class:`${r}-base-selection-placeholder ${r}-base-selection-overlay`,key:"placeholder"},c("div",{class:`${r}-base-selection-placeholder__inner`},this.placeholder)),g);return c("div",{ref:"selfRef",class:[`${r}-base-selection`,this.themeClass,e&&`${r}-base-selection--${e}-status`,{[`${r}-base-selection--active`]:this.active,[`${r}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${r}-base-selection--disabled`]:this.disabled,[`${r}-base-selection--multiple`]:this.multiple,[`${r}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},O,a?c("div",{class:`${r}-base-selection__border`}):null,a?c("div",{class:`${r}-base-selection__state-border`}):null)}});function We(e){return e.type==="group"}function At(e){return e.type==="ignored"}function it(e,t){try{return!!(1+t.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function wo(e,t){return{getIsGroup:We,getIgnored:At,getKey(o){return We(o)?o.name||o.key||"key-required":o[e]},getChildren(o){return o[t]}}}function xo(e,t,n,o){if(!t)return e;function l(s){if(!Array.isArray(s))return[];const a=[];for(const r of s)if(We(r)){const y=l(r[o]);y.length&&a.push(Object.assign({},r,{[o]:y}))}else{if(At(r))continue;t(n,r)&&a.push(r)}return a}return l(e)}function So(e,t,n){const o=new Map;return e.forEach(l=>{We(l)?l[n].forEach(s=>{o.set(s[t],s)}):o.set(l[t],l)}),o}const Co=re([L("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),L("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[Mt({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),To=Object.assign(Object.assign({},Ce.props),{to:at.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),_o=de({name:"Select",props:To,setup(e){const{mergedClsPrefixRef:t,mergedBorderedRef:n,namespaceRef:o,inlineThemeDisabled:l}=pn(e),s=Ce("Select","-select",Co,Sn,e,t),a=z(e.defaultValue),r=te(e,"value"),y=pt(r,a),v=z(!1),h=z(""),C=W(()=>{const{valueField:i,childrenField:f}=e,F=wo(i,f);return vo(w.value,F)}),R=W(()=>So(B.value,e.valueField,e.childrenField)),D=z(!1),g=pt(te(e,"show"),D),O=z(null),V=z(null),T=z(null),{localeRef:k}=On("Select"),M=W(()=>{var i;return(i=e.placeholder)!==null&&i!==void 0?i:k.value.placeholder}),p=Fn(e,["items","options"]),x=[],P=z([]),A=z([]),H=z(new Map),U=W(()=>{const{fallbackOption:i}=e;if(i===void 0){const{labelField:f,valueField:F}=e;return $=>({[f]:String($),[F]:$})}return i===!1?!1:f=>Object.assign(i(f),{value:f})}),B=W(()=>A.value.concat(P.value).concat(p.value)),b=W(()=>{const{filter:i}=e;if(i)return i;const{labelField:f,valueField:F}=e;return($,I)=>{if(!I)return!1;const N=I[f];if(typeof N=="string")return it($,N);const _=I[F];return typeof _=="string"?it($,_):typeof _=="number"?it($,String(_)):!1}}),w=W(()=>{if(e.remote)return p.value;{const{value:i}=B,{value:f}=h;return!f.length||!e.filterable?i:xo(i,b.value,f,e.childrenField)}});function E(i){const f=e.remote,{value:F}=H,{value:$}=R,{value:I}=U,N=[];return i.forEach(_=>{if($.has(_))N.push($.get(_));else if(f&&F.has(_))N.push(F.get(_));else if(I){const Q=I(_);Q&&N.push(Q)}}),N}const q=W(()=>{if(e.multiple){const{value:i}=y;return Array.isArray(i)?E(i):[]}return null}),Y=W(()=>{const{value:i}=y;return!e.multiple&&!Array.isArray(i)?i===null?null:E([i])[0]||null:null}),G=mn(e),{mergedSizeRef:K,mergedDisabledRef:Z,mergedStatusRef:u}=G;function m(i,f){const{onChange:F,"onUpdate:value":$,onUpdateValue:I}=e,{nTriggerFormChange:N,nTriggerFormInput:_}=G;F&&le(F,i,f),I&&le(I,i,f),$&&le($,i,f),a.value=i,N(),_()}function j(i){const{onBlur:f}=e,{nTriggerFormBlur:F}=G;f&&le(f,i),F()}function ee(){const{onClear:i}=e;i&&le(i)}function ae(i){const{onFocus:f,showOnFocus:F}=e,{nTriggerFormFocus:$}=G;f&&le(f,i),$(),F&&se()}function Te(i){const{onSearch:f}=e;f&&le(f,i)}function ke(i){const{onScroll:f}=e;f&&le(f,i)}function be(){var i;const{remote:f,multiple:F}=e;if(f){const{value:$}=H;if(F){const{valueField:I}=e;(i=q.value)===null||i===void 0||i.forEach(N=>{$.set(N[I],N)})}else{const I=Y.value;I&&$.set(I[e.valueField],I)}}}function pe(i){const{onUpdateShow:f,"onUpdate:show":F}=e;f&&le(f,i),F&&le(F,i),D.value=i}function se(){Z.value||(pe(!0),D.value=!0,e.filterable&&Ae())}function ne(){pe(!1)}function me(){h.value="",A.value=x}const ce=z(!1);function Oe(){e.filterable&&(ce.value=!0)}function he(){e.filterable&&(ce.value=!1,g.value||me())}function ve(){Z.value||(g.value?e.filterable?Ae():ne():se())}function Fe(i){var f,F;!((F=(f=T.value)===null||f===void 0?void 0:f.selfRef)===null||F===void 0)&&F.contains(i.relatedTarget)||(v.value=!1,j(i),ne())}function Re(i){ae(i),v.value=!0}function Me(i){v.value=!0}function ye(i){var f;!((f=O.value)===null||f===void 0)&&f.$el.contains(i.relatedTarget)||(v.value=!1,j(i),ne())}function we(){var i;(i=O.value)===null||i===void 0||i.focus(),ne()}function ie(i){var f;g.value&&(!((f=O.value)===null||f===void 0)&&f.$el.contains(Cn(i))||ne())}function d(i){if(!Array.isArray(i))return[];if(U.value)return Array.from(i);{const{remote:f}=e,{value:F}=R;if(f){const{value:$}=H;return i.filter(I=>F.has(I)||$.has(I))}else return i.filter($=>F.has($))}}function S(i){J(i.rawNode)}function J(i){if(Z.value)return;const{tag:f,remote:F,clearFilterAfterSelect:$,valueField:I}=e;if(f&&!F){const{value:N}=A,_=N[0]||null;if(_){const Q=P.value;Q.length?Q.push(_):P.value=[_],A.value=x}}if(F&&H.value.set(i[I],i),e.multiple){const N=d(y.value),_=N.findIndex(Q=>Q===i[I]);if(~_){if(N.splice(_,1),f&&!F){const Q=ze(i[I]);~Q&&(P.value.splice(Q,1),$&&(h.value=""))}}else N.push(i[I]),$&&(h.value="");m(N,E(N))}else{if(f&&!F){const N=ze(i[I]);~N?P.value=[P.value[N]]:P.value=x}_e(),ne(),m(i[I],i)}}function ze(i){return P.value.findIndex(F=>F[e.valueField]===i)}function je(i){g.value||se();const{value:f}=i.target;h.value=f;const{tag:F,remote:$}=e;if(Te(f),F&&!$){if(!f){A.value=x;return}const{onCreate:I}=e,N=I?I(f):{[e.labelField]:f,[e.valueField]:f},{valueField:_}=e;p.value.some(Q=>Q[_]===N[_])||P.value.some(Q=>Q[_]===N[_])?A.value=x:A.value=[N]}}function He(i){i.stopPropagation();const{multiple:f}=e;!f&&e.filterable&&ne(),ee(),f?m([],[]):m(null,null)}function Ge(i){!De(i,"action")&&!De(i,"empty")&&i.preventDefault()}function Ue(i){ke(i)}function Ie(i){var f,F,$,I,N;if(!e.keyboard){i.preventDefault();return}switch(i.key){case" ":if(e.filterable)break;i.preventDefault();case"Enter":if(!(!((f=O.value)===null||f===void 0)&&f.isComposing)){if(g.value){const _=(F=T.value)===null||F===void 0?void 0:F.getPendingTmNode();_?S(_):e.filterable||(ne(),_e())}else if(se(),e.tag&&ce.value){const _=A.value[0];if(_){const Q=_[e.valueField],{value:Ne}=y;e.multiple&&Array.isArray(Ne)&&Ne.some(Xe=>Xe===Q)||J(_)}}}i.preventDefault();break;case"ArrowUp":if(i.preventDefault(),e.loading)return;g.value&&(($=T.value)===null||$===void 0||$.prev());break;case"ArrowDown":if(i.preventDefault(),e.loading)return;g.value?(I=T.value)===null||I===void 0||I.next():se();break;case"Escape":g.value&&(Tn(i),ne()),(N=O.value)===null||N===void 0||N.focus();break}}function _e(){var i;(i=O.value)===null||i===void 0||i.focus()}function Ae(){var i;(i=O.value)===null||i===void 0||i.focusInput()}function qe(){var i;g.value&&((i=V.value)===null||i===void 0||i.syncPosition())}be(),Se(te(e,"options"),be);const Ye={focus:()=>{var i;(i=O.value)===null||i===void 0||i.focus()},blur:()=>{var i;(i=O.value)===null||i===void 0||i.blur()}},Be=W(()=>{const{self:{menuBoxShadow:i}}=s.value;return{"--n-menu-box-shadow":i}}),fe=l?dt("select",void 0,Be,e):void 0;return Object.assign(Object.assign({},Ye),{mergedStatus:u,mergedClsPrefix:t,mergedBordered:n,namespace:o,treeMate:C,isMounted:yn(),triggerRef:O,menuRef:T,pattern:h,uncontrolledShow:D,mergedShow:g,adjustedTo:at(e),uncontrolledValue:a,mergedValue:y,followerRef:V,localizedPlaceholder:M,selectedOption:Y,selectedOptions:q,mergedSize:K,mergedDisabled:Z,focused:v,activeWithoutMenuOpen:ce,inlineThemeDisabled:l,onTriggerInputFocus:Oe,onTriggerInputBlur:he,handleTriggerOrMenuResize:qe,handleMenuFocus:Me,handleMenuBlur:ye,handleMenuTabOut:we,handleTriggerClick:ve,handleToggle:S,handleDeleteOption:J,handlePatternInput:je,handleClear:He,handleTriggerBlur:Fe,handleTriggerFocus:Re,handleKeydown:Ie,handleMenuAfterLeave:me,handleMenuClickOutside:ie,handleMenuScroll:Ue,handleMenuKeydown:Ie,handleMenuMousedown:Ge,mergedTheme:s,cssVars:l?void 0:Be,themeClass:fe==null?void 0:fe.themeClass,onRender:fe==null?void 0:fe.onRender})},render(){return c("div",{class:`${this.mergedClsPrefix}-select`},c(zn,null,{default:()=>[c(In,null,{default:()=>c(yo,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,t;return[(t=(e=this.$slots).arrow)===null||t===void 0?void 0:t.call(e)]}})}),c(_n,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===at.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>c(Rt,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,t,n;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),wn(c(po,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(t=this.menuProps)===null||t===void 0?void 0:t.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(n=this.menuProps)===null||n===void 0?void 0:n.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var o,l;return[(l=(o=this.$slots).empty)===null||l===void 0?void 0:l.call(o)]},action:()=>{var o,l;return[(l=(o=this.$slots).action)===null||l===void 0?void 0:l.call(o)]}}),this.displayDirective==="show"?[[xn,this.mergedShow],[bt,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[bt,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});export{po as N,Ln as V,_o as _,wo as a,vo as c,De as h,Qe as m};
