import{d as fe,c8 as Ft,z as Ie,c9 as an,ca as sn,c as W,r as I,ay as De,aG as st,h,K as cn,V as bt,aF as Le,n as ht,aV as dn,cb as pt,B as Pt,p as zt,aw as Re,M as un,J as Mt,e as H,i as G,g as ee,a as ie,aB as ke,G as It,q as pe,t as re,cc as fn,w as Oe,S as ct,x as Ge,D as dt,aI as hn,am as vn,C as gn,v as te,cd as et,E as bn,ce as pn,av as Z,o as Bt,P as mn,at as yn,k as wn,ad as de,y as mt,cf as Cn,A as xn,cg as kn,ax as Sn,a8 as Tn,I as Rn,ab as On,ak as Fn,ac as yt,ch as Pn,aa as zn,ci as Mn}from"./index-80ccf138.js";import{u as wt}from"./use-merged-state-1afed38d.js";import{N as In,u as Bn}from"./Suffix-5627fb1d.js";import{c as _t,a as He,u as _n}from"./cssr-0b985cfa.js";import{i as vt,d as An,_ as $n,c as En,u as ut,V as Nn,a as Ln,b as Kn}from"./Popover-2c0b0f1e.js";import{b as Dn}from"./next-frame-once-7035a838.js";function We(e,n){let{target:t}=e;for(;t;){if(t.dataset&&t.dataset[n]!==void 0)return!0;t=t.parentElement}return!1}function Hn(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function tt(e){const n=e.filter(t=>t!==void 0);if(n.length!==0)return n.length===1?n[0]:t=>{e.forEach(o=>{o&&o(t)})}}function Ct(e){return e&-e}class Wn{constructor(n,t){this.l=n,this.min=t;const o=new Array(n+1);for(let r=0;r<n+1;++r)o[r]=0;this.ft=o}add(n,t){if(t===0)return;const{l:o,ft:r}=this;for(n+=1;n<=o;)r[n]+=t,n+=Ct(n)}get(n){return this.sum(n+1)-this.sum(n)}sum(n){if(n===void 0&&(n=this.l),n<=0)return 0;const{ft:t,min:o,l:r}=this;if(n>r)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let s=n*o;for(;n>0;)s+=t[n],n-=Ct(n);return s}getBound(n){let t=0,o=this.l;for(;o>t;){const r=Math.floor((t+o)/2),s=this.sum(r);if(s>n){o=r;continue}else if(s<n){if(t===r)return this.sum(t+1)<=n?t+1:r;t=r}else return r}return t}}let Ke;function Vn(){return Ke===void 0&&("matchMedia"in window?Ke=window.matchMedia("(pointer:coarse)").matches:Ke=!1),Ke}let nt;function xt(){return nt===void 0&&(nt="chrome"in window?window.devicePixelRatio:1),nt}const jn=He(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[He("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[He("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),Gn=fe({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const n=Ft();jn.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:_t,ssr:n}),Ie(()=>{const{defaultScrollIndex:g,defaultScrollKey:C}=e;g!=null?d({index:g}):C!=null&&d({key:C})});let t=!1,o=!1;an(()=>{if(t=!1,!o){o=!0;return}d({top:b.value,left:m})}),sn(()=>{t=!0,o||(o=!0)});const r=W(()=>{const g=new Map,{keyField:C}=e;return e.items.forEach((B,q)=>{g.set(B[C],q)}),g}),s=I(null),a=I(void 0),l=new Map,v=W(()=>{const{items:g,itemSize:C,keyField:B}=e,q=new Wn(g.length,C);return g.forEach((Y,U)=>{const K=Y[B],J=l.get(K);J!==void 0&&q.add(U,J)}),q}),u=I(0);let m=0;const b=I(0),F=De(()=>Math.max(v.value.getBound(b.value-st(e.paddingTop))-1,0)),k=W(()=>{const{value:g}=a;if(g===void 0)return[];const{items:C,itemSize:B}=e,q=F.value,Y=Math.min(q+Math.ceil(g/B+1),C.length-1),U=[];for(let K=q;K<=Y;++K)U.push(C[K]);return U}),d=(g,C)=>{if(typeof g=="number"){R(g,C,"auto");return}const{left:B,top:q,index:Y,key:U,position:K,behavior:J,debounce:c=!0}=g;if(B!==void 0||q!==void 0)R(B,q,J);else if(Y!==void 0)T(Y,J,c);else if(U!==void 0){const y=r.value.get(U);y!==void 0&&T(y,J,c)}else K==="bottom"?R(0,Number.MAX_SAFE_INTEGER,J):K==="top"&&R(0,0,J)};let O,M=null;function T(g,C,B){const{value:q}=v,Y=q.sum(g)+st(e.paddingTop);if(!B)s.value.scrollTo({left:0,top:Y,behavior:C});else{O=g,M!==null&&window.clearTimeout(M),M=window.setTimeout(()=>{O=void 0,M=null},16);const{scrollTop:U,offsetHeight:K}=s.value;if(Y>U){const J=q.get(g);Y+J<=U+K||s.value.scrollTo({left:0,top:Y+J-K,behavior:C})}else s.value.scrollTo({left:0,top:Y,behavior:C})}}function R(g,C,B){s.value.scrollTo({left:g,top:C,behavior:B})}function _(g,C){var B,q,Y;if(t||e.ignoreItemResize||A(C.target))return;const{value:U}=v,K=r.value.get(g),J=U.get(K),c=(Y=(q=(B=C.borderBoxSize)===null||B===void 0?void 0:B[0])===null||q===void 0?void 0:q.blockSize)!==null&&Y!==void 0?Y:C.contentRect.height;if(c===J)return;c-e.itemSize===0?l.delete(g):l.set(g,c-e.itemSize);const j=c-J;if(j===0)return;U.add(K,j);const ne=s.value;if(ne!=null){if(O===void 0){const ae=U.sum(K);ne.scrollTop>ae&&ne.scrollBy(0,j)}else if(K<O)ne.scrollBy(0,j);else if(K===O){const ae=U.sum(K);c+ae>ne.scrollTop+ne.offsetHeight&&ne.scrollBy(0,j)}X()}u.value++}const w=!Vn();let x=!1;function P(g){var C;(C=e.onScroll)===null||C===void 0||C.call(e,g),(!w||!x)&&X()}function N(g){var C;if((C=e.onWheel)===null||C===void 0||C.call(e,g),w){const B=s.value;if(B!=null){if(g.deltaX===0&&(B.scrollTop===0&&g.deltaY<=0||B.scrollTop+B.offsetHeight>=B.scrollHeight&&g.deltaY>=0))return;g.preventDefault(),B.scrollTop+=g.deltaY/xt(),B.scrollLeft+=g.deltaX/xt(),X(),x=!0,Dn(()=>{x=!1})}}}function V(g){if(t||A(g.target)||g.contentRect.height===a.value)return;a.value=g.contentRect.height;const{onResize:C}=e;C!==void 0&&C(g)}function X(){const{value:g}=s;g!=null&&(b.value=g.scrollTop,m=g.scrollLeft)}function A(g){let C=g;for(;C!==null;){if(C.style.display==="none")return!0;C=C.parentElement}return!1}return{listHeight:a,listStyle:{overflow:"auto"},keyToIndex:r,itemsStyle:W(()=>{const{itemResizable:g}=e,C=Le(v.value.sum());return u.value,[e.itemsStyle,{boxSizing:"content-box",height:g?"":C,minHeight:g?C:"",paddingTop:Le(e.paddingTop),paddingBottom:Le(e.paddingBottom)}]}),visibleItemsStyle:W(()=>(u.value,{transform:`translateY(${Le(v.value.sum(F.value))})`})),viewportItems:k,listElRef:s,itemsElRef:I(null),scrollTo:d,handleListResize:V,handleListScroll:P,handleListWheel:N,handleItemResize:_}},render(){const{itemResizable:e,keyField:n,keyToIndex:t,visibleItemsTag:o}=this;return h(bt,{onResize:this.handleListResize},{default:()=>{var r,s;return h("div",cn(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?h("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[h(o,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>this.viewportItems.map(a=>{const l=a[n],v=t.get(l),u=this.$slots.default({item:a,index:v})[0];return e?h(bt,{key:l,onResize:m=>this.handleItemResize(l,m)},{default:()=>u}):(u.key=l,u)})})]):(s=(r=this.$slots).empty)===null||s===void 0?void 0:s.call(r)])}})}}),xe="v-hidden",Un=He("[v-hidden]",{display:"none!important"}),kt=fe({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateOverflow:Function},setup(e,{slots:n}){const t=I(null),o=I(null);function r(){const{value:a}=t,{getCounter:l,getTail:v}=e;let u;if(l!==void 0?u=l():u=o.value,!a||!u)return;u.hasAttribute(xe)&&u.removeAttribute(xe);const{children:m}=a,b=a.offsetWidth,F=[],k=n.tail?v==null?void 0:v():null;let d=k?k.offsetWidth:0,O=!1;const M=a.children.length-(n.tail?1:0);for(let R=0;R<M-1;++R){if(R<0)continue;const _=m[R];if(O){_.hasAttribute(xe)||_.setAttribute(xe,"");continue}else _.hasAttribute(xe)&&_.removeAttribute(xe);const w=_.offsetWidth;if(d+=w,F[R]=w,d>b){const{updateCounter:x}=e;for(let P=R;P>=0;--P){const N=M-1-P;x!==void 0?x(N):u.textContent=`${N}`;const V=u.offsetWidth;if(d-=F[P],d+V<=b||P===0){O=!0,R=P-1,k&&(R===-1?(k.style.maxWidth=`${b-V}px`,k.style.boxSizing="border-box"):k.style.maxWidth="");break}}}}const{onUpdateOverflow:T}=e;O?T!==void 0&&T(!0):(T!==void 0&&T(!1),u.setAttribute(xe,""))}const s=Ft();return Un.mount({id:"vueuc/overflow",head:!0,anchorMetaName:_t,ssr:s}),Ie(r),{selfRef:t,counterRef:o,sync:r}},render(){const{$slots:e}=this;return ht(this.sync),h("div",{class:"v-overflow",ref:"selfRef"},[dn(e,"default"),e.counter?e.counter():h("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});function At(e,n){n&&(Ie(()=>{const{value:t}=e;t&&pt.registerHandler(t,n)}),Pt(()=>{const{value:t}=e;t&&pt.unregisterHandler(t)}))}const qn=fe({name:"Checkmark",render(){return h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},h("g",{fill:"none"},h("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),Yn=fe({props:{onFocus:Function,onBlur:Function},setup(e){return()=>h("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}});function St(e){return Array.isArray(e)?e:[e]}const ft={STOP:"STOP"};function $t(e,n){const t=n(e);e.children!==void 0&&t!==ft.STOP&&e.children.forEach(o=>$t(o,n))}function Xn(e,n={}){const{preserveGroup:t=!1}=n,o=[],r=t?a=>{a.isLeaf||(o.push(a.key),s(a.children))}:a=>{a.isLeaf||(a.isGroup||o.push(a.key),s(a.children))};function s(a){a.forEach(r)}return s(e),o}function Jn(e,n){const{isLeaf:t}=e;return t!==void 0?t:!n(e)}function Zn(e){return e.children}function Qn(e){return e.key}function eo(){return!1}function to(e,n){const{isLeaf:t}=e;return!(t===!1&&!Array.isArray(n(e)))}function no(e){return e.disabled===!0}function oo(e,n){return e.isLeaf===!1&&!Array.isArray(n(e))}function ot(e){var n;return e==null?[]:Array.isArray(e)?e:(n=e.checkedKeys)!==null&&n!==void 0?n:[]}function rt(e){var n;return e==null||Array.isArray(e)?[]:(n=e.indeterminateKeys)!==null&&n!==void 0?n:[]}function ro(e,n){const t=new Set(e);return n.forEach(o=>{t.has(o)||t.add(o)}),Array.from(t)}function lo(e,n){const t=new Set(e);return n.forEach(o=>{t.has(o)&&t.delete(o)}),Array.from(t)}function io(e){return(e==null?void 0:e.type)==="group"}function ao(e){const n=new Map;return e.forEach((t,o)=>{n.set(t.key,o)}),t=>{var o;return(o=n.get(t))!==null&&o!==void 0?o:null}}class so extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function co(e,n,t,o){return Ve(n.concat(e),t,o,!1)}function uo(e,n){const t=new Set;return e.forEach(o=>{const r=n.treeNodeMap.get(o);if(r!==void 0){let s=r.parent;for(;s!==null&&!(s.disabled||t.has(s.key));)t.add(s.key),s=s.parent}}),t}function fo(e,n,t,o){const r=Ve(n,t,o,!1),s=Ve(e,t,o,!0),a=uo(e,t),l=[];return r.forEach(v=>{(s.has(v)||a.has(v))&&l.push(v)}),l.forEach(v=>r.delete(v)),r}function lt(e,n){const{checkedKeys:t,keysToCheck:o,keysToUncheck:r,indeterminateKeys:s,cascade:a,leafOnly:l,checkStrategy:v,allowNotLoaded:u}=e;if(!a)return o!==void 0?{checkedKeys:ro(t,o),indeterminateKeys:Array.from(s)}:r!==void 0?{checkedKeys:lo(t,r),indeterminateKeys:Array.from(s)}:{checkedKeys:Array.from(t),indeterminateKeys:Array.from(s)};const{levelTreeNodeMap:m}=n;let b;r!==void 0?b=fo(r,t,n,u):o!==void 0?b=co(o,t,n,u):b=Ve(t,n,u,!1);const F=v==="parent",k=v==="child"||l,d=b,O=new Set,M=Math.max.apply(null,Array.from(m.keys()));for(let T=M;T>=0;T-=1){const R=T===0,_=m.get(T);for(const w of _){if(w.isLeaf)continue;const{key:x,shallowLoaded:P}=w;if(k&&P&&w.children.forEach(A=>{!A.disabled&&!A.isLeaf&&A.shallowLoaded&&d.has(A.key)&&d.delete(A.key)}),w.disabled||!P)continue;let N=!0,V=!1,X=!0;for(const A of w.children){const g=A.key;if(!A.disabled){if(X&&(X=!1),d.has(g))V=!0;else if(O.has(g)){V=!0,N=!1;break}else if(N=!1,V)break}}N&&!X?(F&&w.children.forEach(A=>{!A.disabled&&d.has(A.key)&&d.delete(A.key)}),d.add(x)):V&&O.add(x),R&&k&&d.has(x)&&d.delete(x)}}return{checkedKeys:Array.from(d),indeterminateKeys:Array.from(O)}}function Ve(e,n,t,o){const{treeNodeMap:r,getChildren:s}=n,a=new Set,l=new Set(e);return e.forEach(v=>{const u=r.get(v);u!==void 0&&$t(u,m=>{if(m.disabled)return ft.STOP;const{key:b}=m;if(!a.has(b)&&(a.add(b),l.add(b),oo(m.rawNode,s))){if(o)return ft.STOP;if(!t)throw new so}})}),l}function ho(e,{includeGroup:n=!1,includeSelf:t=!0},o){var r;const s=o.treeNodeMap;let a=e==null?null:(r=s.get(e))!==null&&r!==void 0?r:null;const l={keyPath:[],treeNodePath:[],treeNode:a};if(a!=null&&a.ignored)return l.treeNode=null,l;for(;a;)!a.ignored&&(n||!a.isGroup)&&l.treeNodePath.push(a),a=a.parent;return l.treeNodePath.reverse(),t||l.treeNodePath.pop(),l.keyPath=l.treeNodePath.map(v=>v.key),l}function vo(e){if(e.length===0)return null;const n=e[0];return n.isGroup||n.ignored||n.disabled?n.getNext():n}function go(e,n){const t=e.siblings,o=t.length,{index:r}=e;return n?t[(r+1)%o]:r===t.length-1?null:t[r+1]}function Tt(e,n,{loop:t=!1,includeDisabled:o=!1}={}){const r=n==="prev"?bo:go,s={reverse:n==="prev"};let a=!1,l=null;function v(u){if(u!==null){if(u===e){if(!a)a=!0;else if(!e.disabled&&!e.isGroup){l=e;return}}else if((!u.disabled||o)&&!u.ignored&&!u.isGroup){l=u;return}if(u.isGroup){const m=gt(u,s);m!==null?l=m:v(r(u,t))}else{const m=r(u,!1);if(m!==null)v(m);else{const b=po(u);b!=null&&b.isGroup?v(r(b,t)):t&&v(r(u,!0))}}}}return v(e),l}function bo(e,n){const t=e.siblings,o=t.length,{index:r}=e;return n?t[(r-1+o)%o]:r===0?null:t[r-1]}function po(e){return e.parent}function gt(e,n={}){const{reverse:t=!1}=n,{children:o}=e;if(o){const{length:r}=o,s=t?r-1:0,a=t?-1:r,l=t?-1:1;for(let v=s;v!==a;v+=l){const u=o[v];if(!u.disabled&&!u.ignored)if(u.isGroup){const m=gt(u,n);if(m!==null)return m}else return u}}return null}const mo={getChild(){return this.ignored?null:gt(this)},getParent(){const{parent:e}=this;return e!=null&&e.isGroup?e.getParent():e},getNext(e={}){return Tt(this,"next",e)},getPrev(e={}){return Tt(this,"prev",e)}};function yo(e,n){const t=n?new Set(n):void 0,o=[];function r(s){s.forEach(a=>{o.push(a),!(a.isLeaf||!a.children||a.ignored)&&(a.isGroup||t===void 0||t.has(a.key))&&r(a.children)})}return r(e),o}function wo(e,n){const t=e.key;for(;n;){if(n.key===t)return!0;n=n.parent}return!1}function Et(e,n,t,o,r,s=null,a=0){const l=[];return e.forEach((v,u)=>{var m;const b=Object.create(o);if(b.rawNode=v,b.siblings=l,b.level=a,b.index=u,b.isFirstChild=u===0,b.isLastChild=u+1===e.length,b.parent=s,!b.ignored){const F=r(v);Array.isArray(F)&&(b.children=Et(F,n,t,o,r,b,a+1))}l.push(b),n.set(b.key,b),t.has(a)||t.set(a,[]),(m=t.get(a))===null||m===void 0||m.push(b)}),l}function Co(e,n={}){var t;const o=new Map,r=new Map,{getDisabled:s=no,getIgnored:a=eo,getIsGroup:l=io,getKey:v=Qn}=n,u=(t=n.getChildren)!==null&&t!==void 0?t:Zn,m=n.ignoreEmptyChildren?w=>{const x=u(w);return Array.isArray(x)?x.length?x:null:x}:u,b=Object.assign({get key(){return v(this.rawNode)},get disabled(){return s(this.rawNode)},get isGroup(){return l(this.rawNode)},get isLeaf(){return Jn(this.rawNode,m)},get shallowLoaded(){return to(this.rawNode,m)},get ignored(){return a(this.rawNode)},contains(w){return wo(this,w)}},mo),F=Et(e,o,r,b,m);function k(w){if(w==null)return null;const x=o.get(w);return x&&!x.isGroup&&!x.ignored?x:null}function d(w){if(w==null)return null;const x=o.get(w);return x&&!x.ignored?x:null}function O(w,x){const P=d(w);return P?P.getPrev(x):null}function M(w,x){const P=d(w);return P?P.getNext(x):null}function T(w){const x=d(w);return x?x.getParent():null}function R(w){const x=d(w);return x?x.getChild():null}const _={treeNodes:F,treeNodeMap:o,levelTreeNodeMap:r,maxLevel:Math.max(...r.keys()),getChildren:m,getFlattenedNodes(w){return yo(F,w)},getNode:k,getPrev:O,getNext:M,getParent:T,getChild:R,getFirstAvailableNode(){return vo(F)},getPath(w,x={}){return ho(w,x,_)},getCheckedKeys(w,x={}){const{cascade:P=!0,leafOnly:N=!1,checkStrategy:V="all",allowNotLoaded:X=!1}=x;return lt({checkedKeys:ot(w),indeterminateKeys:rt(w),cascade:P,leafOnly:N,checkStrategy:V,allowNotLoaded:X},_)},check(w,x,P={}){const{cascade:N=!0,leafOnly:V=!1,checkStrategy:X="all",allowNotLoaded:A=!1}=P;return lt({checkedKeys:ot(x),indeterminateKeys:rt(x),keysToCheck:w==null?[]:St(w),cascade:N,leafOnly:V,checkStrategy:X,allowNotLoaded:A},_)},uncheck(w,x,P={}){const{cascade:N=!0,leafOnly:V=!1,checkStrategy:X="all",allowNotLoaded:A=!1}=P;return lt({checkedKeys:ot(x),indeterminateKeys:rt(x),keysToUncheck:w==null?[]:St(w),cascade:N,leafOnly:V,checkStrategy:X,allowNotLoaded:A},_)},getNonLeafKeys(w={}){return Xn(F,w)}};return _}function xo(e,n){return h(Mt,{name:"fade-in-scale-up-transition"},{default:()=>e?h(un,{clsPrefix:n,class:`${n}-base-select-option__check`},{default:()=>h(qn)}):null})}const Rt=fe({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:n,pendingTmNodeRef:t,multipleRef:o,valueSetRef:r,renderLabelRef:s,renderOptionRef:a,labelFieldRef:l,valueFieldRef:v,showCheckmarkRef:u,nodePropsRef:m,handleOptionClick:b,handleOptionMouseEnter:F}=zt(vt),k=De(()=>{const{value:T}=t;return T?e.tmNode.key===T.key:!1});function d(T){const{tmNode:R}=e;R.disabled||b(T,R)}function O(T){const{tmNode:R}=e;R.disabled||F(T,R)}function M(T){const{tmNode:R}=e,{value:_}=k;R.disabled||_||F(T,R)}return{multiple:o,isGrouped:De(()=>{const{tmNode:T}=e,{parent:R}=T;return R&&R.rawNode.type==="group"}),showCheckmark:u,nodeProps:m,isPending:k,isSelected:De(()=>{const{value:T}=n,{value:R}=o;if(T===null)return!1;const _=e.tmNode.rawNode[v.value];if(R){const{value:w}=r;return w.has(_)}else return T===_}),labelField:l,renderLabel:s,renderOption:a,handleMouseMove:M,handleMouseEnter:O,handleClick:d}},render(){const{clsPrefix:e,tmNode:{rawNode:n},isSelected:t,isPending:o,isGrouped:r,showCheckmark:s,nodeProps:a,renderOption:l,renderLabel:v,handleClick:u,handleMouseEnter:m,handleMouseMove:b}=this,F=xo(t,e),k=v?[v(n,t),s&&F]:[Re(n[this.labelField],n,t),s&&F],d=a==null?void 0:a(n),O=h("div",Object.assign({},d,{class:[`${e}-base-select-option`,n.class,d==null?void 0:d.class,{[`${e}-base-select-option--disabled`]:n.disabled,[`${e}-base-select-option--selected`]:t,[`${e}-base-select-option--grouped`]:r,[`${e}-base-select-option--pending`]:o,[`${e}-base-select-option--show-checkmark`]:s}],style:[(d==null?void 0:d.style)||"",n.style||""],onClick:tt([u,d==null?void 0:d.onClick]),onMouseenter:tt([m,d==null?void 0:d.onMouseenter]),onMousemove:tt([b,d==null?void 0:d.onMousemove])}),h("div",{class:`${e}-base-select-option__content`},k));return n.render?n.render({node:O,option:n,selected:t}):l?l({node:O,option:n,selected:t}):O}}),Ot=fe({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:n,labelFieldRef:t,nodePropsRef:o}=zt(vt);return{labelField:t,nodeProps:o,renderLabel:e,renderOption:n}},render(){const{clsPrefix:e,renderLabel:n,renderOption:t,nodeProps:o,tmNode:{rawNode:r}}=this,s=o==null?void 0:o(r),a=n?n(r,!1):Re(r[this.labelField],r,!1),l=h("div",Object.assign({},s,{class:[`${e}-base-select-group-header`,s==null?void 0:s.class]}),a);return r.render?r.render({node:l,option:r}):t?t({node:l,option:r,selected:!1}):l}}),ko=H("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[H("scrollbar",`
 max-height: var(--n-height);
 `),H("virtual-list",`
 max-height: var(--n-height);
 `),H("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[G("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),H("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),H("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),G("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),G("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),G("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),H("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),H("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[ee("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),ie("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),ie("&:active",`
 color: var(--n-option-text-color-pressed);
 `),ee("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),ee("pending",[ie("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),ee("selected",`
 color: var(--n-option-text-color-active);
 `,[ie("&::before",`
 background-color: var(--n-option-color-active);
 `),ee("pending",[ie("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),ee("disabled",`
 cursor: not-allowed;
 `,[ke("selected",`
 color: var(--n-option-text-color-disabled);
 `),ee("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),G("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[It({enterScale:"0.5"})])])]),So=fe({name:"InternalSelectMenu",props:Object.assign(Object.assign({},pe.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const n=pe("InternalSelectMenu","-internal-select-menu",ko,fn,e,re(e,"clsPrefix")),t=I(null),o=I(null),r=I(null),s=W(()=>e.treeMate.getFlattenedNodes()),a=W(()=>ao(s.value)),l=I(null);function v(){const{treeMate:c}=e;let y=null;const{value:j}=e;j===null?y=c.getFirstAvailableNode():(e.multiple?y=c.getNode((j||[])[(j||[]).length-1]):y=c.getNode(j),(!y||y.disabled)&&(y=c.getFirstAvailableNode())),g(y||null)}function u(){const{value:c}=l;c&&!e.treeMate.getNode(c.key)&&(l.value=null)}let m;Oe(()=>e.show,c=>{c?m=Oe(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?v():u(),ht(C)):u()},{immediate:!0}):m==null||m()},{immediate:!0}),Pt(()=>{m==null||m()});const b=W(()=>st(n.value.self[te("optionHeight",e.size)])),F=W(()=>et(n.value.self[te("padding",e.size)])),k=W(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),d=W(()=>{const c=s.value;return c&&c.length===0});function O(c){const{onToggle:y}=e;y&&y(c)}function M(c){const{onScroll:y}=e;y&&y(c)}function T(c){var y;(y=r.value)===null||y===void 0||y.sync(),M(c)}function R(){var c;(c=r.value)===null||c===void 0||c.sync()}function _(){const{value:c}=l;return c||null}function w(c,y){y.disabled||g(y,!1)}function x(c,y){y.disabled||O(y)}function P(c){var y;We(c,"action")||(y=e.onKeyup)===null||y===void 0||y.call(e,c)}function N(c){var y;We(c,"action")||(y=e.onKeydown)===null||y===void 0||y.call(e,c)}function V(c){var y;(y=e.onMousedown)===null||y===void 0||y.call(e,c),!e.focusable&&c.preventDefault()}function X(){const{value:c}=l;c&&g(c.getNext({loop:!0}),!0)}function A(){const{value:c}=l;c&&g(c.getPrev({loop:!0}),!0)}function g(c,y=!1){l.value=c,y&&C()}function C(){var c,y;const j=l.value;if(!j)return;const ne=a.value(j.key);ne!==null&&(e.virtualScroll?(c=o.value)===null||c===void 0||c.scrollTo({index:ne}):(y=r.value)===null||y===void 0||y.scrollTo({index:ne,elSize:b.value}))}function B(c){var y,j;!((y=t.value)===null||y===void 0)&&y.contains(c.target)&&((j=e.onFocus)===null||j===void 0||j.call(e,c))}function q(c){var y,j;!((y=t.value)===null||y===void 0)&&y.contains(c.relatedTarget)||(j=e.onBlur)===null||j===void 0||j.call(e,c)}ct(vt,{handleOptionMouseEnter:w,handleOptionClick:x,valueSetRef:k,pendingTmNodeRef:l,nodePropsRef:re(e,"nodeProps"),showCheckmarkRef:re(e,"showCheckmark"),multipleRef:re(e,"multiple"),valueRef:re(e,"value"),renderLabelRef:re(e,"renderLabel"),renderOptionRef:re(e,"renderOption"),labelFieldRef:re(e,"labelField"),valueFieldRef:re(e,"valueField")}),ct(An,t),Ie(()=>{const{value:c}=r;c&&c.sync()});const Y=W(()=>{const{size:c}=e,{common:{cubicBezierEaseInOut:y},self:{height:j,borderRadius:ne,color:ae,groupHeaderTextColor:me,actionDividerColor:ye,optionTextColorPressed:ve,optionTextColor:he,optionTextColorDisabled:ce,optionTextColorActive:le,optionOpacityDisabled:ge,optionCheckColor:ue,actionTextColor:Fe,optionColorPending:we,optionColorActive:Ce,loadingColor:Pe,loadingSize:ze,optionColorActivePending:Me,[te("optionFontSize",c)]:Se,[te("optionHeight",c)]:Te,[te("optionPadding",c)]:se}}=n.value;return{"--n-height":j,"--n-action-divider-color":ye,"--n-action-text-color":Fe,"--n-bezier":y,"--n-border-radius":ne,"--n-color":ae,"--n-option-font-size":Se,"--n-group-header-text-color":me,"--n-option-check-color":ue,"--n-option-color-pending":we,"--n-option-color-active":Ce,"--n-option-color-active-pending":Me,"--n-option-height":Te,"--n-option-opacity-disabled":ge,"--n-option-text-color":he,"--n-option-text-color-active":le,"--n-option-text-color-disabled":ce,"--n-option-text-color-pressed":ve,"--n-option-padding":se,"--n-option-padding-left":et(se,"left"),"--n-option-padding-right":et(se,"right"),"--n-loading-color":Pe,"--n-loading-size":ze}}),{inlineThemeDisabled:U}=e,K=U?Ge("internal-select-menu",W(()=>e.size[0]),Y,e):void 0,J={selfRef:t,next:X,prev:A,getPendingTmNode:_};return At(t,e.onResize),Object.assign({mergedTheme:n,virtualListRef:o,scrollbarRef:r,itemSize:b,padding:F,flattenedNodes:s,empty:d,virtualListContainer(){const{value:c}=o;return c==null?void 0:c.listElRef},virtualListContent(){const{value:c}=o;return c==null?void 0:c.itemsElRef},doScroll:M,handleFocusin:B,handleFocusout:q,handleKeyUp:P,handleKeyDown:N,handleMouseDown:V,handleVirtualListResize:R,handleVirtualListScroll:T,cssVars:U?void 0:Y,themeClass:K==null?void 0:K.themeClass,onRender:K==null?void 0:K.onRender},J)},render(){const{$slots:e,virtualScroll:n,clsPrefix:t,mergedTheme:o,themeClass:r,onRender:s}=this;return s==null||s(),h("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${t}-base-select-menu`,r,this.multiple&&`${t}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},this.loading?h("div",{class:`${t}-base-select-menu__loading`},h(hn,{clsPrefix:t,strokeWidth:20})):this.empty?h("div",{class:`${t}-base-select-menu__empty`,"data-empty":!0},gn(e.empty,()=>[h($n,{theme:o.peers.Empty,themeOverrides:o.peerOverrides.Empty})])):h(vn,{ref:"scrollbarRef",theme:o.peers.Scrollbar,themeOverrides:o.peerOverrides.Scrollbar,scrollable:this.scrollable,container:n?this.virtualListContainer:void 0,content:n?this.virtualListContent:void 0,onScroll:n?void 0:this.doScroll},{default:()=>n?h(Gn,{ref:"virtualListRef",class:`${t}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:a})=>a.isGroup?h(Ot,{key:a.key,clsPrefix:t,tmNode:a}):a.ignored?null:h(Rt,{clsPrefix:t,key:a.key,tmNode:a})}):h("div",{class:`${t}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(a=>a.isGroup?h(Ot,{key:a.key,clsPrefix:t,tmNode:a}):h(Rt,{clsPrefix:t,key:a.key,tmNode:a})))}),dt(e.action,a=>a&&[h("div",{class:`${t}-base-select-menu__action`,"data-action":!0,key:"action"},a),h(Yn,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),To=e=>{const{textColor2:n,primaryColorHover:t,primaryColorPressed:o,primaryColor:r,infoColor:s,successColor:a,warningColor:l,errorColor:v,baseColor:u,borderColor:m,opacityDisabled:b,tagColor:F,closeIconColor:k,closeIconColorHover:d,closeIconColorPressed:O,borderRadiusSmall:M,fontSizeMini:T,fontSizeTiny:R,fontSizeSmall:_,fontSizeMedium:w,heightMini:x,heightTiny:P,heightSmall:N,heightMedium:V,closeColorHover:X,closeColorPressed:A,buttonColor2Hover:g,buttonColor2Pressed:C,fontWeightStrong:B}=e;return Object.assign(Object.assign({},pn),{closeBorderRadius:M,heightTiny:x,heightSmall:P,heightMedium:N,heightLarge:V,borderRadius:M,opacityDisabled:b,fontSizeTiny:T,fontSizeSmall:R,fontSizeMedium:_,fontSizeLarge:w,fontWeightStrong:B,textColorCheckable:n,textColorHoverCheckable:n,textColorPressedCheckable:n,textColorChecked:u,colorCheckable:"#0000",colorHoverCheckable:g,colorPressedCheckable:C,colorChecked:r,colorCheckedHover:t,colorCheckedPressed:o,border:`1px solid ${m}`,textColor:n,color:F,colorBordered:"rgb(250, 250, 252)",closeIconColor:k,closeIconColorHover:d,closeIconColorPressed:O,closeColorHover:X,closeColorPressed:A,borderPrimary:`1px solid ${Z(r,{alpha:.3})}`,textColorPrimary:r,colorPrimary:Z(r,{alpha:.12}),colorBorderedPrimary:Z(r,{alpha:.1}),closeIconColorPrimary:r,closeIconColorHoverPrimary:r,closeIconColorPressedPrimary:r,closeColorHoverPrimary:Z(r,{alpha:.12}),closeColorPressedPrimary:Z(r,{alpha:.18}),borderInfo:`1px solid ${Z(s,{alpha:.3})}`,textColorInfo:s,colorInfo:Z(s,{alpha:.12}),colorBorderedInfo:Z(s,{alpha:.1}),closeIconColorInfo:s,closeIconColorHoverInfo:s,closeIconColorPressedInfo:s,closeColorHoverInfo:Z(s,{alpha:.12}),closeColorPressedInfo:Z(s,{alpha:.18}),borderSuccess:`1px solid ${Z(a,{alpha:.3})}`,textColorSuccess:a,colorSuccess:Z(a,{alpha:.12}),colorBorderedSuccess:Z(a,{alpha:.1}),closeIconColorSuccess:a,closeIconColorHoverSuccess:a,closeIconColorPressedSuccess:a,closeColorHoverSuccess:Z(a,{alpha:.12}),closeColorPressedSuccess:Z(a,{alpha:.18}),borderWarning:`1px solid ${Z(l,{alpha:.35})}`,textColorWarning:l,colorWarning:Z(l,{alpha:.15}),colorBorderedWarning:Z(l,{alpha:.12}),closeIconColorWarning:l,closeIconColorHoverWarning:l,closeIconColorPressedWarning:l,closeColorHoverWarning:Z(l,{alpha:.12}),closeColorPressedWarning:Z(l,{alpha:.18}),borderError:`1px solid ${Z(v,{alpha:.23})}`,textColorError:v,colorError:Z(v,{alpha:.1}),colorBorderedError:Z(v,{alpha:.08}),closeIconColorError:v,closeIconColorHoverError:v,closeIconColorPressedError:v,closeColorHoverError:Z(v,{alpha:.12}),closeColorPressedError:Z(v,{alpha:.18})})},Ro={name:"Tag",common:bn,self:To},Oo=Ro,Fo={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},Po=H("tag",`
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[ee("strong",`
 font-weight: var(--n-font-weight-strong);
 `),G("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),G("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),G("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),G("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),ee("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[G("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),G("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),ee("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),ee("icon, avatar",[ee("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),ee("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),ee("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[ke("disabled",[ie("&:hover","background-color: var(--n-color-hover-checkable);",[ke("checked","color: var(--n-text-color-hover-checkable);")]),ie("&:active","background-color: var(--n-color-pressed-checkable);",[ke("checked","color: var(--n-text-color-pressed-checkable);")])]),ee("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[ke("disabled",[ie("&:hover","background-color: var(--n-color-checked-hover);"),ie("&:active","background-color: var(--n-color-checked-pressed);")])])])]),zo=Object.assign(Object.assign(Object.assign({},pe.props),Fo),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),Mo=wn("n-tag"),it=fe({name:"Tag",props:zo,setup(e){const n=I(null),{mergedBorderedRef:t,mergedClsPrefixRef:o,inlineThemeDisabled:r,mergedRtlRef:s}=Bt(e),a=pe("Tag","-tag",Po,Oo,e,o);ct(Mo,{roundRef:re(e,"round")});function l(k){if(!e.disabled&&e.checkable){const{checked:d,onCheckedChange:O,onUpdateChecked:M,"onUpdate:checked":T}=e;M&&M(!d),T&&T(!d),O&&O(!d)}}function v(k){if(e.triggerClickOnClose||k.stopPropagation(),!e.disabled){const{onClose:d}=e;d&&de(d,k)}}const u={setTextContent(k){const{value:d}=n;d&&(d.textContent=k)}},m=mn("Tag",s,o),b=W(()=>{const{type:k,size:d,color:{color:O,textColor:M}={}}=e,{common:{cubicBezierEaseInOut:T},self:{padding:R,closeMargin:_,closeMarginRtl:w,borderRadius:x,opacityDisabled:P,textColorCheckable:N,textColorHoverCheckable:V,textColorPressedCheckable:X,textColorChecked:A,colorCheckable:g,colorHoverCheckable:C,colorPressedCheckable:B,colorChecked:q,colorCheckedHover:Y,colorCheckedPressed:U,closeBorderRadius:K,fontWeightStrong:J,[te("colorBordered",k)]:c,[te("closeSize",d)]:y,[te("closeIconSize",d)]:j,[te("fontSize",d)]:ne,[te("height",d)]:ae,[te("color",k)]:me,[te("textColor",k)]:ye,[te("border",k)]:ve,[te("closeIconColor",k)]:he,[te("closeIconColorHover",k)]:ce,[te("closeIconColorPressed",k)]:le,[te("closeColorHover",k)]:ge,[te("closeColorPressed",k)]:ue}}=a.value;return{"--n-font-weight-strong":J,"--n-avatar-size-override":`calc(${ae} - 8px)`,"--n-bezier":T,"--n-border-radius":x,"--n-border":ve,"--n-close-icon-size":j,"--n-close-color-pressed":ue,"--n-close-color-hover":ge,"--n-close-border-radius":K,"--n-close-icon-color":he,"--n-close-icon-color-hover":ce,"--n-close-icon-color-pressed":le,"--n-close-icon-color-disabled":he,"--n-close-margin":_,"--n-close-margin-rtl":w,"--n-close-size":y,"--n-color":O||(t.value?c:me),"--n-color-checkable":g,"--n-color-checked":q,"--n-color-checked-hover":Y,"--n-color-checked-pressed":U,"--n-color-hover-checkable":C,"--n-color-pressed-checkable":B,"--n-font-size":ne,"--n-height":ae,"--n-opacity-disabled":P,"--n-padding":R,"--n-text-color":M||ye,"--n-text-color-checkable":N,"--n-text-color-checked":A,"--n-text-color-hover-checkable":V,"--n-text-color-pressed-checkable":X}}),F=r?Ge("tag",W(()=>{let k="";const{type:d,size:O,color:{color:M,textColor:T}={}}=e;return k+=d[0],k+=O[0],M&&(k+=`a${mt(M)}`),T&&(k+=`b${mt(T)}`),t.value&&(k+="c"),k}),b,e):void 0;return Object.assign(Object.assign({},u),{rtlEnabled:m,mergedClsPrefix:o,contentRef:n,mergedBordered:t,handleClick:l,handleCloseClick:v,cssVars:r?void 0:b,themeClass:F==null?void 0:F.themeClass,onRender:F==null?void 0:F.onRender})},render(){var e,n;const{mergedClsPrefix:t,rtlEnabled:o,closable:r,color:{borderColor:s}={},round:a,onRender:l,$slots:v}=this;l==null||l();const u=dt(v.avatar,b=>b&&h("div",{class:`${t}-tag__avatar`},b)),m=dt(v.icon,b=>b&&h("div",{class:`${t}-tag__icon`},b));return h("div",{class:[`${t}-tag`,this.themeClass,{[`${t}-tag--rtl`]:o,[`${t}-tag--strong`]:this.strong,[`${t}-tag--disabled`]:this.disabled,[`${t}-tag--checkable`]:this.checkable,[`${t}-tag--checked`]:this.checkable&&this.checked,[`${t}-tag--round`]:a,[`${t}-tag--avatar`]:u,[`${t}-tag--icon`]:m,[`${t}-tag--closable`]:r}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},m||u,h("span",{class:`${t}-tag__content`,ref:"contentRef"},(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e)),!this.checkable&&r?h(yn,{clsPrefix:t,class:`${t}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:a,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?h("div",{class:`${t}-tag__border`,style:{borderColor:s}}):null)}}),Io=ie([H("base-selection",`
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
 `,[H("base-loading",`
 color: var(--n-loading-color);
 `),H("base-selection-tags","min-height: var(--n-height);"),G("border, state-border",`
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
 `),G("state-border",`
 z-index: 1;
 border-color: #0000;
 `),H("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[G("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),H("base-selection-overlay",`
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
 `,[G("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),H("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[G("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),H("base-selection-tags",`
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
 `),H("base-selection-label",`
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
 `,[H("base-selection-input",`
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
 `,[G("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),G("render-label",`
 color: var(--n-text-color);
 `)]),ke("disabled",[ie("&:hover",[G("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),ee("focus",[G("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),ee("active",[G("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),H("base-selection-label","background-color: var(--n-color-active);"),H("base-selection-tags","background-color: var(--n-color-active);")])]),ee("disabled","cursor: not-allowed;",[G("arrow",`
 color: var(--n-arrow-color-disabled);
 `),H("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[H("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),G("render-label",`
 color: var(--n-text-color-disabled);
 `)]),H("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),H("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),H("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[G("input",`
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
 `),G("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>ee(`${e}-status`,[G("state-border",`border: var(--n-border-${e});`),ke("disabled",[ie("&:hover",[G("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),ee("active",[G("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),H("base-selection-label",`background-color: var(--n-color-active-${e});`),H("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),ee("focus",[G("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),H("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),H("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[ie("&:last-child","padding-right: 0;"),H("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[G("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),Bo=fe({name:"InternalSelection",props:Object.assign(Object.assign({},pe.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const n=I(null),t=I(null),o=I(null),r=I(null),s=I(null),a=I(null),l=I(null),v=I(null),u=I(null),m=I(null),b=I(!1),F=I(!1),k=I(!1),d=pe("InternalSelection","-internal-selection",Io,Cn,e,re(e,"clsPrefix")),O=W(()=>e.clearable&&!e.disabled&&(k.value||e.active)),M=W(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):Re(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),T=W(()=>{const f=e.selectedOption;if(f)return f[e.labelField]}),R=W(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function _(){var f;const{value:S}=n;if(S){const{value:Q}=t;Q&&(Q.style.width=`${S.offsetWidth}px`,e.maxTagCount!=="responsive"&&((f=u.value)===null||f===void 0||f.sync()))}}function w(){const{value:f}=m;f&&(f.style.display="none")}function x(){const{value:f}=m;f&&(f.style.display="inline-block")}Oe(re(e,"active"),f=>{f||w()}),Oe(re(e,"pattern"),()=>{e.multiple&&ht(_)});function P(f){const{onFocus:S}=e;S&&S(f)}function N(f){const{onBlur:S}=e;S&&S(f)}function V(f){const{onDeleteOption:S}=e;S&&S(f)}function X(f){const{onClear:S}=e;S&&S(f)}function A(f){const{onPatternInput:S}=e;S&&S(f)}function g(f){var S;(!f.relatedTarget||!(!((S=o.value)===null||S===void 0)&&S.contains(f.relatedTarget)))&&P(f)}function C(f){var S;!((S=o.value)===null||S===void 0)&&S.contains(f.relatedTarget)||N(f)}function B(f){X(f)}function q(){k.value=!0}function Y(){k.value=!1}function U(f){!e.active||!e.filterable||f.target!==t.value&&f.preventDefault()}function K(f){V(f)}function J(f){if(f.key==="Backspace"&&!c.value&&!e.pattern.length){const{selectedOptions:S}=e;S!=null&&S.length&&K(S[S.length-1])}}const c=I(!1);let y=null;function j(f){const{value:S}=n;if(S){const Q=f.target.value;S.textContent=Q,_()}e.ignoreComposition&&c.value?y=f:A(f)}function ne(){c.value=!0}function ae(){c.value=!1,e.ignoreComposition&&A(y),y=null}function me(f){var S;F.value=!0,(S=e.onPatternFocus)===null||S===void 0||S.call(e,f)}function ye(f){var S;F.value=!1,(S=e.onPatternBlur)===null||S===void 0||S.call(e,f)}function ve(){var f,S;if(e.filterable)F.value=!1,(f=a.value)===null||f===void 0||f.blur(),(S=t.value)===null||S===void 0||S.blur();else if(e.multiple){const{value:Q}=r;Q==null||Q.blur()}else{const{value:Q}=s;Q==null||Q.blur()}}function he(){var f,S,Q;e.filterable?(F.value=!1,(f=a.value)===null||f===void 0||f.focus()):e.multiple?(S=r.value)===null||S===void 0||S.focus():(Q=s.value)===null||Q===void 0||Q.focus()}function ce(){const{value:f}=t;f&&(x(),f.focus())}function le(){const{value:f}=t;f&&f.blur()}function ge(f){const{value:S}=l;S&&S.setTextContent(`+${f}`)}function ue(){const{value:f}=v;return f}function Fe(){return t.value}let we=null;function Ce(){we!==null&&window.clearTimeout(we)}function Pe(){e.disabled||e.active||(Ce(),we=window.setTimeout(()=>{R.value&&(b.value=!0)},100))}function ze(){Ce()}function Me(f){f||(Ce(),b.value=!1)}Oe(R,f=>{f||(b.value=!1)}),Ie(()=>{xn(()=>{const f=a.value;f&&(f.tabIndex=e.disabled||F.value?-1:0)})}),At(o,e.onResize);const{inlineThemeDisabled:Se}=e,Te=W(()=>{const{size:f}=e,{common:{cubicBezierEaseInOut:S},self:{borderRadius:Q,color:Be,placeholderColor:Ue,textColor:qe,paddingSingle:Ye,paddingMultiple:Xe,caretColor:_e,colorDisabled:Ae,textColorDisabled:$e,placeholderColorDisabled:Je,colorActive:Ze,boxShadowFocus:Ee,boxShadowActive:be,boxShadowHover:i,border:p,borderFocus:z,borderHover:D,borderActive:$,arrowColor:L,arrowColorDisabled:E,loadingColor:oe,colorActiveWarning:Ne,boxShadowFocusWarning:Qe,boxShadowActiveWarning:Lt,boxShadowHoverWarning:Kt,borderWarning:Dt,borderFocusWarning:Ht,borderHoverWarning:Wt,borderActiveWarning:Vt,colorActiveError:jt,boxShadowFocusError:Gt,boxShadowActiveError:Ut,boxShadowHoverError:qt,borderError:Yt,borderFocusError:Xt,borderHoverError:Jt,borderActiveError:Zt,clearColor:Qt,clearColorHover:en,clearColorPressed:tn,clearSize:nn,arrowSize:on,[te("height",f)]:rn,[te("fontSize",f)]:ln}}=d.value;return{"--n-bezier":S,"--n-border":p,"--n-border-active":$,"--n-border-focus":z,"--n-border-hover":D,"--n-border-radius":Q,"--n-box-shadow-active":be,"--n-box-shadow-focus":Ee,"--n-box-shadow-hover":i,"--n-caret-color":_e,"--n-color":Be,"--n-color-active":Ze,"--n-color-disabled":Ae,"--n-font-size":ln,"--n-height":rn,"--n-padding-single":Ye,"--n-padding-multiple":Xe,"--n-placeholder-color":Ue,"--n-placeholder-color-disabled":Je,"--n-text-color":qe,"--n-text-color-disabled":$e,"--n-arrow-color":L,"--n-arrow-color-disabled":E,"--n-loading-color":oe,"--n-color-active-warning":Ne,"--n-box-shadow-focus-warning":Qe,"--n-box-shadow-active-warning":Lt,"--n-box-shadow-hover-warning":Kt,"--n-border-warning":Dt,"--n-border-focus-warning":Ht,"--n-border-hover-warning":Wt,"--n-border-active-warning":Vt,"--n-color-active-error":jt,"--n-box-shadow-focus-error":Gt,"--n-box-shadow-active-error":Ut,"--n-box-shadow-hover-error":qt,"--n-border-error":Yt,"--n-border-focus-error":Xt,"--n-border-hover-error":Jt,"--n-border-active-error":Zt,"--n-clear-size":nn,"--n-clear-color":Qt,"--n-clear-color-hover":en,"--n-clear-color-pressed":tn,"--n-arrow-size":on}}),se=Se?Ge("internal-selection",W(()=>e.size[0]),Te,e):void 0;return{mergedTheme:d,mergedClearable:O,patternInputFocused:F,filterablePlaceholder:M,label:T,selected:R,showTagsPanel:b,isComposing:c,counterRef:l,counterWrapperRef:v,patternInputMirrorRef:n,patternInputRef:t,selfRef:o,multipleElRef:r,singleElRef:s,patternInputWrapperRef:a,overflowRef:u,inputTagElRef:m,handleMouseDown:U,handleFocusin:g,handleClear:B,handleMouseEnter:q,handleMouseLeave:Y,handleDeleteOption:K,handlePatternKeyDown:J,handlePatternInputInput:j,handlePatternInputBlur:ye,handlePatternInputFocus:me,handleMouseEnterCounter:Pe,handleMouseLeaveCounter:ze,handleFocusout:C,handleCompositionEnd:ae,handleCompositionStart:ne,onPopoverUpdateShow:Me,focus:he,focusInput:ce,blur:ve,blurInput:le,updateCounter:ge,getCounter:ue,getTail:Fe,renderLabel:e.renderLabel,cssVars:Se?void 0:Te,themeClass:se==null?void 0:se.themeClass,onRender:se==null?void 0:se.onRender}},render(){const{status:e,multiple:n,size:t,disabled:o,filterable:r,maxTagCount:s,bordered:a,clsPrefix:l,onRender:v,renderTag:u,renderLabel:m}=this;v==null||v();const b=s==="responsive",F=typeof s=="number",k=b||F,d=h(kn,null,{default:()=>h(In,{clsPrefix:l,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var M,T;return(T=(M=this.$slots).arrow)===null||T===void 0?void 0:T.call(M)}})});let O;if(n){const{labelField:M}=this,T=C=>h("div",{class:`${l}-base-selection-tag-wrapper`,key:C.value},u?u({option:C,handleClose:()=>{this.handleDeleteOption(C)}}):h(it,{size:t,closable:!C.disabled,disabled:o,onClose:()=>{this.handleDeleteOption(C)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>m?m(C,!0):Re(C[M],C,!0)})),R=()=>(F?this.selectedOptions.slice(0,s):this.selectedOptions).map(T),_=r?h("div",{class:`${l}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},h("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:o,value:this.pattern,autofocus:this.autofocus,class:`${l}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),h("span",{ref:"patternInputMirrorRef",class:`${l}-base-selection-input-tag__mirror`},this.pattern)):null,w=b?()=>h("div",{class:`${l}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},h(it,{size:t,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:o})):void 0;let x;if(F){const C=this.selectedOptions.length-s;C>0&&(x=h("div",{class:`${l}-base-selection-tag-wrapper`,key:"__counter__"},h(it,{size:t,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:o},{default:()=>`+${C}`})))}const P=b?r?h(kt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:R,counter:w,tail:()=>_}):h(kt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:R,counter:w}):F?R().concat(x):R(),N=k?()=>h("div",{class:`${l}-base-selection-popover`},b?R():this.selectedOptions.map(T)):void 0,V=k?{show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover}:null,A=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?h("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`},h("div",{class:`${l}-base-selection-placeholder__inner`},this.placeholder)):null,g=r?h("div",{ref:"patternInputWrapperRef",class:`${l}-base-selection-tags`},P,b?null:_,d):h("div",{ref:"multipleElRef",class:`${l}-base-selection-tags`,tabindex:o?void 0:0},P,d);O=h(Sn,null,k?h(En,Object.assign({},V,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>g,default:N}):g,A)}else if(r){const M=this.pattern||this.isComposing,T=this.active?!M:!this.selected,R=this.active?!1:this.selected;O=h("div",{ref:"patternInputWrapperRef",class:`${l}-base-selection-label`},h("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${l}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:o,disabled:o,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),R?h("div",{class:`${l}-base-selection-label__render-label ${l}-base-selection-overlay`,key:"input"},h("div",{class:`${l}-base-selection-overlay__wrapper`},u?u({option:this.selectedOption,handleClose:()=>{}}):m?m(this.selectedOption,!0):Re(this.label,this.selectedOption,!0))):null,T?h("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`,key:"placeholder"},h("div",{class:`${l}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,d)}else O=h("div",{ref:"singleElRef",class:`${l}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?h("div",{class:`${l}-base-selection-input`,title:Hn(this.label),key:"input"},h("div",{class:`${l}-base-selection-input__content`},u?u({option:this.selectedOption,handleClose:()=>{}}):m?m(this.selectedOption,!0):Re(this.label,this.selectedOption,!0))):h("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`,key:"placeholder"},h("div",{class:`${l}-base-selection-placeholder__inner`},this.placeholder)),d);return h("div",{ref:"selfRef",class:[`${l}-base-selection`,this.themeClass,e&&`${l}-base-selection--${e}-status`,{[`${l}-base-selection--active`]:this.active,[`${l}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${l}-base-selection--disabled`]:this.disabled,[`${l}-base-selection--multiple`]:this.multiple,[`${l}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},O,a?h("div",{class:`${l}-base-selection__border`}):null,a?h("div",{class:`${l}-base-selection__state-border`}):null)}});function je(e){return e.type==="group"}function Nt(e){return e.type==="ignored"}function at(e,n){try{return!!(1+n.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function _o(e,n){return{getIsGroup:je,getIgnored:Nt,getKey(o){return je(o)?o.name||o.key||"key-required":o[e]},getChildren(o){return o[n]}}}function Ao(e,n,t,o){if(!n)return e;function r(s){if(!Array.isArray(s))return[];const a=[];for(const l of s)if(je(l)){const v=r(l[o]);v.length&&a.push(Object.assign({},l,{[o]:v}))}else{if(Nt(l))continue;n(t,l)&&a.push(l)}return a}return r(e)}function $o(e,n,t){const o=new Map;return e.forEach(r=>{je(r)?r[t].forEach(s=>{o.set(s[n],s)}):o.set(r[n],r)}),o}const Eo=ie([H("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),H("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[It({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),No=Object.assign(Object.assign({},pe.props),{to:ut.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),jo=fe({name:"Select",props:No,setup(e){const{mergedClsPrefixRef:n,mergedBorderedRef:t,namespaceRef:o,inlineThemeDisabled:r}=Bt(e),s=pe("Select","-select",Eo,Pn,e,n),a=I(e.defaultValue),l=re(e,"value"),v=wt(l,a),u=I(!1),m=I(""),b=W(()=>{const{valueField:i,childrenField:p}=e,z=_o(i,p);return Co(C.value,z)}),F=W(()=>$o(A.value,e.valueField,e.childrenField)),k=I(!1),d=wt(re(e,"show"),k),O=I(null),M=I(null),T=I(null),{localeRef:R}=Bn("Select"),_=W(()=>{var i;return(i=e.placeholder)!==null&&i!==void 0?i:R.value.placeholder}),w=_n(e,["items","options"]),x=[],P=I([]),N=I([]),V=I(new Map),X=W(()=>{const{fallbackOption:i}=e;if(i===void 0){const{labelField:p,valueField:z}=e;return D=>({[p]:String(D),[z]:D})}return i===!1?!1:p=>Object.assign(i(p),{value:p})}),A=W(()=>N.value.concat(P.value).concat(w.value)),g=W(()=>{const{filter:i}=e;if(i)return i;const{labelField:p,valueField:z}=e;return(D,$)=>{if(!$)return!1;const L=$[p];if(typeof L=="string")return at(D,L);const E=$[z];return typeof E=="string"?at(D,E):typeof E=="number"?at(D,String(E)):!1}}),C=W(()=>{if(e.remote)return w.value;{const{value:i}=A,{value:p}=m;return!p.length||!e.filterable?i:Ao(i,g.value,p,e.childrenField)}});function B(i){const p=e.remote,{value:z}=V,{value:D}=F,{value:$}=X,L=[];return i.forEach(E=>{if(D.has(E))L.push(D.get(E));else if(p&&z.has(E))L.push(z.get(E));else if($){const oe=$(E);oe&&L.push(oe)}}),L}const q=W(()=>{if(e.multiple){const{value:i}=v;return Array.isArray(i)?B(i):[]}return null}),Y=W(()=>{const{value:i}=v;return!e.multiple&&!Array.isArray(i)?i===null?null:B([i])[0]||null:null}),U=Tn(e),{mergedSizeRef:K,mergedDisabledRef:J,mergedStatusRef:c}=U;function y(i,p){const{onChange:z,"onUpdate:value":D,onUpdateValue:$}=e,{nTriggerFormChange:L,nTriggerFormInput:E}=U;z&&de(z,i,p),$&&de($,i,p),D&&de(D,i,p),a.value=i,L(),E()}function j(i){const{onBlur:p}=e,{nTriggerFormBlur:z}=U;p&&de(p,i),z()}function ne(){const{onClear:i}=e;i&&de(i)}function ae(i){const{onFocus:p,showOnFocus:z}=e,{nTriggerFormFocus:D}=U;p&&de(p,i),D(),z&&ce()}function me(i){const{onSearch:p}=e;p&&de(p,i)}function ye(i){const{onScroll:p}=e;p&&de(p,i)}function ve(){var i;const{remote:p,multiple:z}=e;if(p){const{value:D}=V;if(z){const{valueField:$}=e;(i=q.value)===null||i===void 0||i.forEach(L=>{D.set(L[$],L)})}else{const $=Y.value;$&&D.set($[e.valueField],$)}}}function he(i){const{onUpdateShow:p,"onUpdate:show":z}=e;p&&de(p,i),z&&de(z,i),k.value=i}function ce(){J.value||(he(!0),k.value=!0,e.filterable&&$e())}function le(){he(!1)}function ge(){m.value="",N.value=x}const ue=I(!1);function Fe(){e.filterable&&(ue.value=!0)}function we(){e.filterable&&(ue.value=!1,d.value||ge())}function Ce(){J.value||(d.value?e.filterable?$e():le():ce())}function Pe(i){var p,z;!((z=(p=T.value)===null||p===void 0?void 0:p.selfRef)===null||z===void 0)&&z.contains(i.relatedTarget)||(u.value=!1,j(i),le())}function ze(i){ae(i),u.value=!0}function Me(i){u.value=!0}function Se(i){var p;!((p=O.value)===null||p===void 0)&&p.$el.contains(i.relatedTarget)||(u.value=!1,j(i),le())}function Te(){var i;(i=O.value)===null||i===void 0||i.focus(),le()}function se(i){var p;d.value&&(!((p=O.value)===null||p===void 0)&&p.$el.contains(zn(i))||le())}function f(i){if(!Array.isArray(i))return[];if(X.value)return Array.from(i);{const{remote:p}=e,{value:z}=F;if(p){const{value:D}=V;return i.filter($=>z.has($)||D.has($))}else return i.filter(D=>z.has(D))}}function S(i){Q(i.rawNode)}function Q(i){if(J.value)return;const{tag:p,remote:z,clearFilterAfterSelect:D,valueField:$}=e;if(p&&!z){const{value:L}=N,E=L[0]||null;if(E){const oe=P.value;oe.length?oe.push(E):P.value=[E],N.value=x}}if(z&&V.value.set(i[$],i),e.multiple){const L=f(v.value),E=L.findIndex(oe=>oe===i[$]);if(~E){if(L.splice(E,1),p&&!z){const oe=Be(i[$]);~oe&&(P.value.splice(oe,1),D&&(m.value=""))}}else L.push(i[$]),D&&(m.value="");y(L,B(L))}else{if(p&&!z){const L=Be(i[$]);~L?P.value=[P.value[L]]:P.value=x}Ae(),le(),y(i[$],i)}}function Be(i){return P.value.findIndex(z=>z[e.valueField]===i)}function Ue(i){d.value||ce();const{value:p}=i.target;m.value=p;const{tag:z,remote:D}=e;if(me(p),z&&!D){if(!p){N.value=x;return}const{onCreate:$}=e,L=$?$(p):{[e.labelField]:p,[e.valueField]:p},{valueField:E}=e;w.value.some(oe=>oe[E]===L[E])||P.value.some(oe=>oe[E]===L[E])?N.value=x:N.value=[L]}}function qe(i){i.stopPropagation();const{multiple:p}=e;!p&&e.filterable&&le(),ne(),p?y([],[]):y(null,null)}function Ye(i){!We(i,"action")&&!We(i,"empty")&&i.preventDefault()}function Xe(i){ye(i)}function _e(i){var p,z,D,$,L;if(!e.keyboard){i.preventDefault();return}switch(i.key){case" ":if(e.filterable)break;i.preventDefault();case"Enter":if(!(!((p=O.value)===null||p===void 0)&&p.isComposing)){if(d.value){const E=(z=T.value)===null||z===void 0?void 0:z.getPendingTmNode();E?S(E):e.filterable||(le(),Ae())}else if(ce(),e.tag&&ue.value){const E=N.value[0];if(E){const oe=E[e.valueField],{value:Ne}=v;e.multiple&&Array.isArray(Ne)&&Ne.some(Qe=>Qe===oe)||Q(E)}}}i.preventDefault();break;case"ArrowUp":if(i.preventDefault(),e.loading)return;d.value&&((D=T.value)===null||D===void 0||D.prev());break;case"ArrowDown":if(i.preventDefault(),e.loading)return;d.value?($=T.value)===null||$===void 0||$.next():ce();break;case"Escape":d.value&&(Mn(i),le()),(L=O.value)===null||L===void 0||L.focus();break}}function Ae(){var i;(i=O.value)===null||i===void 0||i.focus()}function $e(){var i;(i=O.value)===null||i===void 0||i.focusInput()}function Je(){var i;d.value&&((i=M.value)===null||i===void 0||i.syncPosition())}ve(),Oe(re(e,"options"),ve);const Ze={focus:()=>{var i;(i=O.value)===null||i===void 0||i.focus()},blur:()=>{var i;(i=O.value)===null||i===void 0||i.blur()}},Ee=W(()=>{const{self:{menuBoxShadow:i}}=s.value;return{"--n-menu-box-shadow":i}}),be=r?Ge("select",void 0,Ee,e):void 0;return Object.assign(Object.assign({},Ze),{mergedStatus:c,mergedClsPrefix:n,mergedBordered:t,namespace:o,treeMate:b,isMounted:Rn(),triggerRef:O,menuRef:T,pattern:m,uncontrolledShow:k,mergedShow:d,adjustedTo:ut(e),uncontrolledValue:a,mergedValue:v,followerRef:M,localizedPlaceholder:_,selectedOption:Y,selectedOptions:q,mergedSize:K,mergedDisabled:J,focused:u,activeWithoutMenuOpen:ue,inlineThemeDisabled:r,onTriggerInputFocus:Fe,onTriggerInputBlur:we,handleTriggerOrMenuResize:Je,handleMenuFocus:Me,handleMenuBlur:Se,handleMenuTabOut:Te,handleTriggerClick:Ce,handleToggle:S,handleDeleteOption:Q,handlePatternInput:Ue,handleClear:qe,handleTriggerBlur:Pe,handleTriggerFocus:ze,handleKeydown:_e,handleMenuAfterLeave:ge,handleMenuClickOutside:se,handleMenuScroll:Xe,handleMenuKeydown:_e,handleMenuMousedown:Ye,mergedTheme:s,cssVars:r?void 0:Ee,themeClass:be==null?void 0:be.themeClass,onRender:be==null?void 0:be.onRender})},render(){return h("div",{class:`${this.mergedClsPrefix}-select`},h(Nn,null,{default:()=>[h(Ln,null,{default:()=>h(Bo,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,n;return[(n=(e=this.$slots).arrow)===null||n===void 0?void 0:n.call(e)]}})}),h(Kn,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===ut.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>h(Mt,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,n,t;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),On(h(So,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(n=this.menuProps)===null||n===void 0?void 0:n.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(t=this.menuProps)===null||t===void 0?void 0:t.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var o,r;return[(r=(o=this.$slots).empty)===null||r===void 0?void 0:r.call(o)]},action:()=>{var o,r;return[(r=(o=this.$slots).action)===null||r===void 0?void 0:r.call(o)]}}),this.displayDirective==="show"?[[Fn,this.mergedShow],[yt,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[yt,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});export{it as N,Gn as V,jo as _,So as a,_o as b,Co as c,Hn as g,We as h,tt as m,Mo as t};
