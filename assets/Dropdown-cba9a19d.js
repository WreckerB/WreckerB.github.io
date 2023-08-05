import{r as _,w as ae,bs as Oe,cX as Ie,cY as $e,B as Ke,a2 as Z,cZ as Te,a1 as X,d as $,h as d,o as Q,q as F,c_ as je,c as b,e as N,aB as se,g as P,c$ as ze,cb as De,K as ee,a as L,d0 as Be,x as be,a7 as we,k as ce,p as U,ai as ge,S as G,ay as J,J as Ae,aw as Y,ax as Le,aj as Fe,ah as Me,cS as Ee,G as He,i as A,t as z,d1 as Ue,ad as le,v as H,az as Ve}from"./index-03c6cc05.js";import{c as ye,p as ue,V as qe,a as Ge,b as We,r as Ze}from"./Popover-3db0ba5f.js";import{f as Xe}from"./format-length-c9d165c6.js";import{h as fe,c as Je}from"./Select-6bf9f176.js";import{u as Ye}from"./use-merged-state-ea84db82.js";function Qe(e){return n=>{n?e.value=n.$el:e.value=null}}function en(e,n,i){if(!n)return e;const t=_(e.value);let r=null;return ae(e,o=>{r!==null&&window.clearTimeout(r),o===!0?i&&!i.value?t.value=!0:r=window.setTimeout(()=>{t.value=!0},n):t.value=!1}),t}function nn(e={},n){const i=Oe({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:t,keyup:r}=e,o=l=>{switch(l.key){case"Control":i.ctrl=!0;break;case"Meta":i.command=!0,i.win=!0;break;case"Shift":i.shift=!0;break;case"Tab":i.tab=!0;break}t!==void 0&&Object.keys(t).forEach(g=>{if(g!==l.key)return;const m=t[g];if(typeof m=="function")m(l);else{const{stop:k=!1,prevent:R=!1}=m;k&&l.stopPropagation(),R&&l.preventDefault(),m.handler(l)}})},a=l=>{switch(l.key){case"Control":i.ctrl=!1;break;case"Meta":i.command=!1,i.win=!1;break;case"Shift":i.shift=!1;break;case"Tab":i.tab=!1;break}r!==void 0&&Object.keys(r).forEach(g=>{if(g!==l.key)return;const m=r[g];if(typeof m=="function")m(l);else{const{stop:k=!1,prevent:R=!1}=m;k&&l.stopPropagation(),R&&l.preventDefault(),m.handler(l)}})},u=()=>{(n===void 0||n.value)&&(X("keydown",document,o),X("keyup",document,a)),n!==void 0&&ae(n,l=>{l?(X("keydown",document,o),X("keyup",document,a)):(Z("keydown",document,o),Z("keyup",document,a))})};return Ie()?($e(u),Ke(()=>{(n===void 0||n.value)&&(Z("keydown",document,o),Z("keyup",document,a))})):u(),Te(i)}const on=$({name:"ChevronRight",render(){return d("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),tn=Object.assign(Object.assign({},ue),F.props),rn=$({name:"Tooltip",props:tn,__popover__:!0,setup(e){const{mergedClsPrefixRef:n}=Q(e),i=F("Tooltip","-tooltip",void 0,je,e,n),t=_(null);return Object.assign(Object.assign({},{syncPosition(){t.value.syncPosition()},setShow(o){t.value.setShow(o)}}),{popoverRef:t,mergedTheme:i,popoverThemeOverrides:b(()=>i.value.self)})},render(){const{mergedTheme:e,internalExtraClass:n}=this;return d(ye,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:n.concat("tooltip"),ref:"popoverRef"}),this.$slots)}}),ln=N("ellipsis",{overflow:"hidden"},[se("line-clamp",`
 white-space: nowrap;
 display: inline-block;
 vertical-align: bottom;
 max-width: 100%;
 `),P("line-clamp",`
 display: -webkit-inline-box;
 -webkit-box-orient: vertical;
 `),P("cursor-pointer",`
 cursor: pointer;
 `)]);function he(e){return`${e}-ellipsis--line-clamp`}function ve(e,n){return`${e}-ellipsis--cursor-${n}`}const sn=Object.assign(Object.assign({},F.props),{expandTrigger:String,lineClamp:[Number,String],tooltip:{type:[Boolean,Object],default:!0}}),Pn=$({name:"Ellipsis",inheritAttrs:!1,props:sn,setup(e,{slots:n,attrs:i}){const{mergedClsPrefixRef:t}=Q(e),r=F("Ellipsis","-ellipsis",ln,ze,e,t),o=_(null),a=_(null),u=_(null),l=_(!1),g=b(()=>{const{lineClamp:s}=e,{value:h}=l;return s!==void 0?{textOverflow:"","-webkit-line-clamp":h?"":s}:{textOverflow:h?"":"ellipsis","-webkit-line-clamp":""}});function m(){let s=!1;const{value:h}=l;if(h)return!0;const{value:y}=o;if(y){const{lineClamp:T}=e;if(O(y),T!==void 0)s=y.scrollHeight<=y.offsetHeight;else{const{value:D}=a;D&&(s=D.getBoundingClientRect().width<=y.getBoundingClientRect().width)}K(y,s)}return s}const k=b(()=>e.expandTrigger==="click"?()=>{var s;const{value:h}=l;h&&((s=u.value)===null||s===void 0||s.setShow(!1)),l.value=!h}:void 0);De(()=>{var s;e.tooltip&&((s=u.value)===null||s===void 0||s.setShow(!1))});const R=()=>d("span",Object.assign({},ee(i,{class:[`${t.value}-ellipsis`,e.lineClamp!==void 0?he(t.value):void 0,e.expandTrigger==="click"?ve(t.value,"pointer"):void 0],style:g.value}),{ref:"triggerRef",onClick:k.value,onMouseenter:e.expandTrigger==="click"?m:void 0}),e.lineClamp?n:d("span",{ref:"triggerInnerRef"},n));function O(s){if(!s)return;const h=g.value,y=he(t.value);e.lineClamp!==void 0?I(s,y,"add"):I(s,y,"remove");for(const T in h)s.style[T]!==h[T]&&(s.style[T]=h[T])}function K(s,h){const y=ve(t.value,"pointer");e.expandTrigger==="click"&&!h?I(s,y,"add"):I(s,y,"remove")}function I(s,h,y){y==="add"?s.classList.contains(h)||s.classList.add(h):s.classList.contains(h)&&s.classList.remove(h)}return{mergedTheme:r,triggerRef:o,triggerInnerRef:a,tooltipRef:u,handleClick:k,renderTrigger:R,getTooltipDisabled:m}},render(){var e;const{tooltip:n,renderTrigger:i,$slots:t}=this;if(n){const{mergedTheme:r}=this;return d(rn,Object.assign({ref:"tooltipRef",placement:"top"},n,{getDisabled:this.getTooltipDisabled,theme:r.peers.Tooltip,themeOverrides:r.peerOverrides.Tooltip}),{trigger:i,default:(e=t.tooltip)!==null&&e!==void 0?e:t.default})}else return i()}}),xe=$({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return d("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),dn=N("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[P("color-transition",{transition:"color .3s var(--n-bezier)"}),P("depth",{color:"var(--n-color)"},[L("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),L("svg",{height:"1em",width:"1em"})]),an=Object.assign(Object.assign({},F.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),cn=$({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:an,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:i}=Q(e),t=F("Icon","-icon",dn,Be,e,n),r=b(()=>{const{depth:a}=e,{common:{cubicBezierEaseInOut:u},self:l}=t.value;if(a!==void 0){const{color:g,[`opacity${a}Depth`]:m}=l;return{"--n-bezier":u,"--n-color":g,"--n-opacity":m}}return{"--n-bezier":u,"--n-color":"","--n-opacity":""}}),o=i?be("icon",b(()=>`${e.depth||"d"}`),r,e):void 0;return{mergedClsPrefix:n,mergedStyle:b(()=>{const{size:a,color:u}=e;return{fontSize:Xe(a),color:u}}),cssVars:i?void 0:r,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var e;const{$parent:n,depth:i,mergedClsPrefix:t,component:r,onRender:o,themeClass:a}=this;return!((e=n==null?void 0:n.$options)===null||e===void 0)&&e._n_icon__&&we("icon","don't wrap `n-icon` inside `n-icon`"),o==null||o(),d("i",ee(this.$attrs,{role:"img",class:[`${t}-icon`,a,{[`${t}-icon--depth`]:i,[`${t}-icon--color-transition`]:i!==void 0}],style:[this.cssVars,this.mergedStyle]}),r?d(r):this.$slots)}}),pe=ce("n-dropdown-menu"),ne=ce("n-dropdown"),me=ce("n-dropdown-option");function de(e,n){return e.type==="submenu"||e.type===void 0&&e[n]!==void 0}function un(e){return e.type==="group"}function Se(e){return e.type==="divider"}function pn(e){return e.type==="render"}const ke=$({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const n=U(ne),{hoverKeyRef:i,keyboardKeyRef:t,lastToggledSubmenuKeyRef:r,pendingKeyPathRef:o,activeKeyPathRef:a,animatedRef:u,mergedShowRef:l,renderLabelRef:g,renderIconRef:m,labelFieldRef:k,childrenFieldRef:R,renderOptionRef:O,nodePropsRef:K,menuPropsRef:I}=n,s=U(me,null),h=U(pe),y=U(ge),T=b(()=>e.tmNode.rawNode),D=b(()=>{const{value:p}=R;return de(e.tmNode.rawNode,p)}),oe=b(()=>{const{disabled:p}=e.tmNode;return p}),te=b(()=>{if(!D.value)return!1;const{key:p,disabled:S}=e.tmNode;if(S)return!1;const{value:j}=i,{value:M}=t,{value:ie}=r,{value:E}=o;return j!==null?E.includes(p):M!==null?E.includes(p)&&E[E.length-1]!==p:ie!==null?E.includes(p):!1}),re=b(()=>t.value===null&&!u.value),W=en(te,300,re),V=b(()=>!!(s!=null&&s.enteringSubmenuRef.value)),q=_(!1);G(me,{enteringSubmenuRef:q});function B(){q.value=!0}function c(){q.value=!1}function x(){const{parentKey:p,tmNode:S}=e;S.disabled||l.value&&(r.value=p,t.value=null,i.value=S.key)}function v(){const{tmNode:p}=e;p.disabled||l.value&&i.value!==p.key&&x()}function f(p){if(e.tmNode.disabled||!l.value)return;const{relatedTarget:S}=p;S&&!fe({target:S},"dropdownOption")&&!fe({target:S},"scrollbarRail")&&(i.value=null)}function C(){const{value:p}=D,{tmNode:S}=e;l.value&&!p&&!S.disabled&&(n.doSelect(S.key,S.rawNode),n.doUpdateShow(!1))}return{labelField:k,renderLabel:g,renderIcon:m,siblingHasIcon:h.showIconRef,siblingHasSubmenu:h.hasSubmenuRef,menuProps:I,popoverBody:y,animated:u,mergedShowSubmenu:b(()=>W.value&&!V.value),rawNode:T,hasSubmenu:D,pending:J(()=>{const{value:p}=o,{key:S}=e.tmNode;return p.includes(S)}),childActive:J(()=>{const{value:p}=a,{key:S}=e.tmNode,j=p.findIndex(M=>S===M);return j===-1?!1:j<p.length-1}),active:J(()=>{const{value:p}=a,{key:S}=e.tmNode,j=p.findIndex(M=>S===M);return j===-1?!1:j===p.length-1}),mergedDisabled:oe,renderOption:O,nodeProps:K,handleClick:C,handleMouseMove:v,handleMouseEnter:x,handleMouseLeave:f,handleSubmenuBeforeEnter:B,handleSubmenuAfterEnter:c}},render(){var e,n;const{animated:i,rawNode:t,mergedShowSubmenu:r,clsPrefix:o,siblingHasIcon:a,siblingHasSubmenu:u,renderLabel:l,renderIcon:g,renderOption:m,nodeProps:k,props:R,scrollable:O}=this;let K=null;if(r){const y=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,t,t.children);K=d(Re,Object.assign({},y,{clsPrefix:o,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const I={class:[`${o}-dropdown-option-body`,this.pending&&`${o}-dropdown-option-body--pending`,this.active&&`${o}-dropdown-option-body--active`,this.childActive&&`${o}-dropdown-option-body--child-active`,this.mergedDisabled&&`${o}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},s=k==null?void 0:k(t),h=d("div",Object.assign({class:[`${o}-dropdown-option`,s==null?void 0:s.class],"data-dropdown-option":!0},s),d("div",ee(I,R),[d("div",{class:[`${o}-dropdown-option-body__prefix`,a&&`${o}-dropdown-option-body__prefix--show-icon`]},[g?g(t):Y(t.icon)]),d("div",{"data-dropdown-option":!0,class:`${o}-dropdown-option-body__label`},l?l(t):Y((n=t[this.labelField])!==null&&n!==void 0?n:t.title)),d("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__suffix`,u&&`${o}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?d(cn,null,{default:()=>d(on,null)}):null)]),this.hasSubmenu?d(qe,null,{default:()=>[d(Ge,null,{default:()=>d("div",{class:`${o}-dropdown-offset-container`},d(We,{show:this.mergedShowSubmenu,placement:this.placement,to:O&&this.popoverBody||void 0,teleportDisabled:!O},{default:()=>d("div",{class:`${o}-dropdown-menu-wrapper`},i?d(Ae,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>K}):K)}))})]}):null);return m?m({node:h,option:t}):h}}),fn=$({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:n}=U(pe),{renderLabelRef:i,labelFieldRef:t,nodePropsRef:r,renderOptionRef:o}=U(ne);return{labelField:t,showIcon:e,hasSubmenu:n,renderLabel:i,nodeProps:r,renderOption:o}},render(){var e;const{clsPrefix:n,hasSubmenu:i,showIcon:t,nodeProps:r,renderLabel:o,renderOption:a}=this,{rawNode:u}=this.tmNode,l=d("div",Object.assign({class:`${n}-dropdown-option`},r==null?void 0:r(u)),d("div",{class:`${n}-dropdown-option-body ${n}-dropdown-option-body--group`},d("div",{"data-dropdown-option":!0,class:[`${n}-dropdown-option-body__prefix`,t&&`${n}-dropdown-option-body__prefix--show-icon`]},Y(u.icon)),d("div",{class:`${n}-dropdown-option-body__label`,"data-dropdown-option":!0},o?o(u):Y((e=u.title)!==null&&e!==void 0?e:u[this.labelField])),d("div",{class:[`${n}-dropdown-option-body__suffix`,i&&`${n}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return a?a({node:l,option:u}):l}}),hn=$({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:n,clsPrefix:i}=this,{children:t}=e;return d(Le,null,d(fn,{clsPrefix:i,tmNode:e,key:e.key}),t==null?void 0:t.map(r=>{const{rawNode:o}=r;return o.show===!1?null:Se(o)?d(xe,{clsPrefix:i,key:r.key}):r.isGroup?(we("dropdown","`group` node is not allowed to be put in `group` node."),null):d(ke,{clsPrefix:i,tmNode:r,parentKey:n,key:r.key})}))}}),vn=$({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:n}}=this.tmNode;return d("div",n,[e==null?void 0:e()])}}),Re=$({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:n,childrenFieldRef:i}=U(ne);G(pe,{showIconRef:b(()=>{const r=n.value;return e.tmNodes.some(o=>{var a;if(o.isGroup)return(a=o.children)===null||a===void 0?void 0:a.some(({rawNode:l})=>r?r(l):l.icon);const{rawNode:u}=o;return r?r(u):u.icon})}),hasSubmenuRef:b(()=>{const{value:r}=i;return e.tmNodes.some(o=>{var a;if(o.isGroup)return(a=o.children)===null||a===void 0?void 0:a.some(({rawNode:l})=>de(l,r));const{rawNode:u}=o;return de(u,r)})})});const t=_(null);return G(Fe,null),G(Me,null),G(ge,t),{bodyRef:t}},render(){const{parentKey:e,clsPrefix:n,scrollable:i}=this,t=this.tmNodes.map(r=>{const{rawNode:o}=r;return o.show===!1?null:pn(o)?d(vn,{tmNode:r,key:r.key}):Se(o)?d(xe,{clsPrefix:n,key:r.key}):un(o)?d(hn,{clsPrefix:n,tmNode:r,parentKey:e,key:r.key}):d(ke,{clsPrefix:n,tmNode:r,parentKey:e,key:r.key,props:o.props,scrollable:i})});return d("div",{class:[`${n}-dropdown-menu`,i&&`${n}-dropdown-menu--scrollable`],ref:"bodyRef"},i?d(Ee,{contentClass:`${n}-dropdown-menu__content`},{default:()=>t}):t,this.showArrow?Ze({clsPrefix:n,arrowStyle:this.arrowStyle}):null)}}),mn=N("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[He(),N("dropdown-option",`
 position: relative;
 `,[L("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[L("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),N("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[L("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),se("disabled",[P("pending",`
 color: var(--n-option-text-color-hover);
 `,[A("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),L("&::before","background-color: var(--n-option-color-hover);")]),P("active",`
 color: var(--n-option-text-color-active);
 `,[A("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),L("&::before","background-color: var(--n-option-color-active);")]),P("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[A("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),P("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),P("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[A("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[P("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),A("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[P("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),N("icon",`
 font-size: var(--n-option-icon-size);
 `)]),A("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),A("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[P("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),N("icon",`
 font-size: var(--n-option-icon-size);
 `)]),N("dropdown-menu","pointer-events: all;")]),N("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),N("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),N("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),L(">",[N("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),se("scrollable",`
 padding: var(--n-padding);
 `),P("scrollable",[A("content",`
 padding: var(--n-padding);
 `)])]),bn={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},wn=Object.keys(ue),gn=Object.assign(Object.assign(Object.assign({},ue),bn),F.props),Cn=$({name:"Dropdown",inheritAttrs:!1,props:gn,setup(e){const n=_(!1),i=Ye(z(e,"show"),n),t=b(()=>{const{keyField:c,childrenField:x}=e;return Je(e.options,{getKey(v){return v[c]},getDisabled(v){return v.disabled===!0},getIgnored(v){return v.type==="divider"||v.type==="render"},getChildren(v){return v[x]}})}),r=b(()=>t.value.treeNodes),o=_(null),a=_(null),u=_(null),l=b(()=>{var c,x,v;return(v=(x=(c=o.value)!==null&&c!==void 0?c:a.value)!==null&&x!==void 0?x:u.value)!==null&&v!==void 0?v:null}),g=b(()=>t.value.getPath(l.value).keyPath),m=b(()=>t.value.getPath(e.value).keyPath),k=J(()=>e.keyboard&&i.value);nn({keydown:{ArrowUp:{prevent:!0,handler:oe},ArrowRight:{prevent:!0,handler:D},ArrowDown:{prevent:!0,handler:te},ArrowLeft:{prevent:!0,handler:T},Enter:{prevent:!0,handler:re},Escape:y}},k);const{mergedClsPrefixRef:R,inlineThemeDisabled:O}=Q(e),K=F("Dropdown","-dropdown",mn,Ue,e,R);G(ne,{labelFieldRef:z(e,"labelField"),childrenFieldRef:z(e,"childrenField"),renderLabelRef:z(e,"renderLabel"),renderIconRef:z(e,"renderIcon"),hoverKeyRef:o,keyboardKeyRef:a,lastToggledSubmenuKeyRef:u,pendingKeyPathRef:g,activeKeyPathRef:m,animatedRef:z(e,"animated"),mergedShowRef:i,nodePropsRef:z(e,"nodeProps"),renderOptionRef:z(e,"renderOption"),menuPropsRef:z(e,"menuProps"),doSelect:I,doUpdateShow:s}),ae(i,c=>{!e.animated&&!c&&h()});function I(c,x){const{onSelect:v}=e;v&&le(v,c,x)}function s(c){const{"onUpdate:show":x,onUpdateShow:v}=e;x&&le(x,c),v&&le(v,c),n.value=c}function h(){o.value=null,a.value=null,u.value=null}function y(){s(!1)}function T(){V("left")}function D(){V("right")}function oe(){V("up")}function te(){V("down")}function re(){const c=W();c!=null&&c.isLeaf&&i.value&&(I(c.key,c.rawNode),s(!1))}function W(){var c;const{value:x}=t,{value:v}=l;return!x||v===null?null:(c=x.getNode(v))!==null&&c!==void 0?c:null}function V(c){const{value:x}=l,{value:{getFirstAvailableNode:v}}=t;let f=null;if(x===null){const C=v();C!==null&&(f=C.key)}else{const C=W();if(C){let p;switch(c){case"down":p=C.getNext();break;case"up":p=C.getPrev();break;case"right":p=C.getChild();break;case"left":p=C.getParent();break}p&&(f=p.key)}}f!==null&&(o.value=null,a.value=f)}const q=b(()=>{const{size:c,inverted:x}=e,{common:{cubicBezierEaseInOut:v},self:f}=K.value,{padding:C,dividerColor:p,borderRadius:S,optionOpacityDisabled:j,[H("optionIconSuffixWidth",c)]:M,[H("optionSuffixWidth",c)]:ie,[H("optionIconPrefixWidth",c)]:E,[H("optionPrefixWidth",c)]:Pe,[H("fontSize",c)]:Ce,[H("optionHeight",c)]:Ne,[H("optionIconSize",c)]:_e}=f,w={"--n-bezier":v,"--n-font-size":Ce,"--n-padding":C,"--n-border-radius":S,"--n-option-height":Ne,"--n-option-prefix-width":Pe,"--n-option-icon-prefix-width":E,"--n-option-suffix-width":ie,"--n-option-icon-suffix-width":M,"--n-option-icon-size":_e,"--n-divider-color":p,"--n-option-opacity-disabled":j};return x?(w["--n-color"]=f.colorInverted,w["--n-option-color-hover"]=f.optionColorHoverInverted,w["--n-option-color-active"]=f.optionColorActiveInverted,w["--n-option-text-color"]=f.optionTextColorInverted,w["--n-option-text-color-hover"]=f.optionTextColorHoverInverted,w["--n-option-text-color-active"]=f.optionTextColorActiveInverted,w["--n-option-text-color-child-active"]=f.optionTextColorChildActiveInverted,w["--n-prefix-color"]=f.prefixColorInverted,w["--n-suffix-color"]=f.suffixColorInverted,w["--n-group-header-text-color"]=f.groupHeaderTextColorInverted):(w["--n-color"]=f.color,w["--n-option-color-hover"]=f.optionColorHover,w["--n-option-color-active"]=f.optionColorActive,w["--n-option-text-color"]=f.optionTextColor,w["--n-option-text-color-hover"]=f.optionTextColorHover,w["--n-option-text-color-active"]=f.optionTextColorActive,w["--n-option-text-color-child-active"]=f.optionTextColorChildActive,w["--n-prefix-color"]=f.prefixColor,w["--n-suffix-color"]=f.suffixColor,w["--n-group-header-text-color"]=f.groupHeaderTextColor),w}),B=O?be("dropdown",b(()=>`${e.size[0]}${e.inverted?"i":""}`),q,e):void 0;return{mergedClsPrefix:R,mergedTheme:K,tmNodes:r,mergedShow:i,handleAfterLeave:()=>{e.animated&&h()},doUpdateShow:s,cssVars:O?void 0:q,themeClass:B==null?void 0:B.themeClass,onRender:B==null?void 0:B.onRender}},render(){const e=(t,r,o,a,u)=>{var l;const{mergedClsPrefix:g,menuProps:m}=this;(l=this.onRender)===null||l===void 0||l.call(this);const k=(m==null?void 0:m(void 0,this.tmNodes.map(O=>O.rawNode)))||{},R={ref:Qe(r),class:[t,`${g}-dropdown`,this.themeClass],clsPrefix:g,tmNodes:this.tmNodes,style:[o,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:a,onMouseleave:u};return d(Re,ee(this.$attrs,R,k))},{mergedTheme:n}=this,i={show:this.mergedShow,theme:n.peers.Popover,themeOverrides:n.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return d(ye,Object.assign({},Ve(this.$props,wn),i),{trigger:()=>{var t,r;return(r=(t=this.$slots).default)===null||r===void 0?void 0:r.call(t)}})}});export{on as C,Cn as _,rn as a,Pn as b,Qe as c};
