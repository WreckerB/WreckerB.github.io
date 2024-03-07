import{d as ve,p as de,V as _e,a as Ce,b as Oe,r as Ie}from"./Popover-01aebeb4.js";import{r as j,i as se,bc as Ke,cQ as $e,cR as ze,m as Te,O as W,cS as je,M as X,d as N,h as s,u as ae,k as U,cT as De,j as w,b as k,e as R,g as T,cU as Ae,n as me,U as be,q as le,A as ce,D as M,a5 as we,z as H,am as Z,T as Fe,ak as Q,al as Me,a6 as Be,a4 as Le,cL as Ee,f as He,aq as pe,x as z,t as O,cV as Ue,$ as re,X as F,ao as Ve}from"./index-fff8dcc5.js";import{f as qe}from"./format-length-c9d165c6.js";import{h as fe,c as Ge}from"./Select-e380fc25.js";import{u as We}from"./use-merged-state-ff1fee23.js";function Xe(e){return n=>{n?e.value=n.$el:e.value=null}}function Ze(e,n,i){if(!n)return e;const t=j(e.value);let r=null;return se(e,o=>{r!==null&&window.clearTimeout(r),o===!0?i&&!i.value?t.value=!0:r=window.setTimeout(()=>{t.value=!0},n):t.value=!1}),t}function Qe(e={},n){const i=Ke({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:t,keyup:r}=e,o=d=>{switch(d.key){case"Control":i.ctrl=!0;break;case"Meta":i.command=!0,i.win=!0;break;case"Shift":i.shift=!0;break;case"Tab":i.tab=!0;break}t!==void 0&&Object.keys(t).forEach(y=>{if(y!==d.key)return;const h=t[y];if(typeof h=="function")h(d);else{const{stop:g=!1,prevent:S=!1}=h;g&&d.stopPropagation(),S&&d.preventDefault(),h.handler(d)}})},l=d=>{switch(d.key){case"Control":i.ctrl=!1;break;case"Meta":i.command=!1,i.win=!1;break;case"Shift":i.shift=!1;break;case"Tab":i.tab=!1;break}r!==void 0&&Object.keys(r).forEach(y=>{if(y!==d.key)return;const h=r[y];if(typeof h=="function")h(d);else{const{stop:g=!1,prevent:S=!1}=h;g&&d.stopPropagation(),S&&d.preventDefault(),h.handler(d)}})},u=()=>{(n===void 0||n.value)&&(X("keydown",document,o),X("keyup",document,l)),n!==void 0&&se(n,d=>{d?(X("keydown",document,o),X("keyup",document,l)):(W("keydown",document,o),W("keyup",document,l))})};return $e()?(ze(u),Te(()=>{(n===void 0||n.value)&&(W("keydown",document,o),W("keyup",document,l))})):u(),je(i)}const Je=N({name:"ChevronRight",render(){return s("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),Ye=Object.assign(Object.assign({},de),U.props),wo=N({name:"Tooltip",props:Ye,__popover__:!0,setup(e){const{mergedClsPrefixRef:n}=ae(e),i=U("Tooltip","-tooltip",void 0,De,e,n),t=j(null);return Object.assign(Object.assign({},{syncPosition(){t.value.syncPosition()},setShow(o){t.value.setShow(o)}}),{popoverRef:t,mergedTheme:i,popoverThemeOverrides:w(()=>i.value.self)})},render(){const{mergedTheme:e,internalExtraClass:n}=this;return s(ve,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:n.concat("tooltip"),ref:"popoverRef"}),this.$slots)}}),ye=N({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return s("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),eo=k("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[R("color-transition",{transition:"color .3s var(--n-bezier)"}),R("depth",{color:"var(--n-color)"},[T("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),T("svg",{height:"1em",width:"1em"})]),oo=Object.assign(Object.assign({},U.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),no=N({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:oo,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:i}=ae(e),t=U("Icon","-icon",eo,Ae,e,n),r=w(()=>{const{depth:l}=e,{common:{cubicBezierEaseInOut:u},self:d}=t.value;if(l!==void 0){const{color:y,[`opacity${l}Depth`]:h}=d;return{"--n-bezier":u,"--n-color":y,"--n-opacity":h}}return{"--n-bezier":u,"--n-color":"","--n-opacity":""}}),o=i?me("icon",w(()=>`${e.depth||"d"}`),r,e):void 0;return{mergedClsPrefix:n,mergedStyle:w(()=>{const{size:l,color:u}=e;return{fontSize:qe(l),color:u}}),cssVars:i?void 0:r,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var e;const{$parent:n,depth:i,mergedClsPrefix:t,component:r,onRender:o,themeClass:l}=this;return!((e=n==null?void 0:n.$options)===null||e===void 0)&&e._n_icon__&&be("icon","don't wrap `n-icon` inside `n-icon`"),o==null||o(),s("i",le(this.$attrs,{role:"img",class:[`${t}-icon`,l,{[`${t}-icon--depth`]:i,[`${t}-icon--color-transition`]:i!==void 0}],style:[this.cssVars,this.mergedStyle]}),r?s(r):this.$slots)}}),ue=ce("n-dropdown-menu"),J=ce("n-dropdown"),he=ce("n-dropdown-option");function ie(e,n){return e.type==="submenu"||e.type===void 0&&e[n]!==void 0}function to(e){return e.type==="group"}function ge(e){return e.type==="divider"}function ro(e){return e.type==="render"}const xe=N({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const n=M(J),{hoverKeyRef:i,keyboardKeyRef:t,lastToggledSubmenuKeyRef:r,pendingKeyPathRef:o,activeKeyPathRef:l,animatedRef:u,mergedShowRef:d,renderLabelRef:y,renderIconRef:h,labelFieldRef:g,childrenFieldRef:S,renderOptionRef:_,nodePropsRef:I,menuPropsRef:B}=n,x=M(he,null),K=M(ue),V=M(we),Y=w(()=>e.tmNode.rawNode),q=w(()=>{const{value:c}=S;return ie(e.tmNode.rawNode,c)}),ee=w(()=>{const{disabled:c}=e.tmNode;return c}),oe=w(()=>{if(!q.value)return!1;const{key:c,disabled:b}=e.tmNode;if(b)return!1;const{value:C}=i,{value:D}=t,{value:te}=r,{value:A}=o;return C!==null?A.includes(c):D!==null?A.includes(c)&&A[A.length-1]!==c:te!==null?A.includes(c):!1}),ne=w(()=>t.value===null&&!u.value),G=Ze(oe,300,ne),L=w(()=>!!(x!=null&&x.enteringSubmenuRef.value)),E=j(!1);H(he,{enteringSubmenuRef:E});function $(){E.value=!0}function a(){E.value=!1}function m(){const{parentKey:c,tmNode:b}=e;b.disabled||d.value&&(r.value=c,t.value=null,i.value=b.key)}function f(){const{tmNode:c}=e;c.disabled||d.value&&i.value!==c.key&&m()}function p(c){if(e.tmNode.disabled||!d.value)return;const{relatedTarget:b}=c;b&&!fe({target:b},"dropdownOption")&&!fe({target:b},"scrollbarRail")&&(i.value=null)}function P(){const{value:c}=q,{tmNode:b}=e;d.value&&!c&&!b.disabled&&(n.doSelect(b.key,b.rawNode),n.doUpdateShow(!1))}return{labelField:g,renderLabel:y,renderIcon:h,siblingHasIcon:K.showIconRef,siblingHasSubmenu:K.hasSubmenuRef,menuProps:B,popoverBody:V,animated:u,mergedShowSubmenu:w(()=>G.value&&!L.value),rawNode:Y,hasSubmenu:q,pending:Z(()=>{const{value:c}=o,{key:b}=e.tmNode;return c.includes(b)}),childActive:Z(()=>{const{value:c}=l,{key:b}=e.tmNode,C=c.findIndex(D=>b===D);return C===-1?!1:C<c.length-1}),active:Z(()=>{const{value:c}=l,{key:b}=e.tmNode,C=c.findIndex(D=>b===D);return C===-1?!1:C===c.length-1}),mergedDisabled:ee,renderOption:_,nodeProps:I,handleClick:P,handleMouseMove:f,handleMouseEnter:m,handleMouseLeave:p,handleSubmenuBeforeEnter:$,handleSubmenuAfterEnter:a}},render(){var e,n;const{animated:i,rawNode:t,mergedShowSubmenu:r,clsPrefix:o,siblingHasIcon:l,siblingHasSubmenu:u,renderLabel:d,renderIcon:y,renderOption:h,nodeProps:g,props:S,scrollable:_}=this;let I=null;if(r){const V=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,t,t.children);I=s(Se,Object.assign({},V,{clsPrefix:o,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const B={class:[`${o}-dropdown-option-body`,this.pending&&`${o}-dropdown-option-body--pending`,this.active&&`${o}-dropdown-option-body--active`,this.childActive&&`${o}-dropdown-option-body--child-active`,this.mergedDisabled&&`${o}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},x=g==null?void 0:g(t),K=s("div",Object.assign({class:[`${o}-dropdown-option`,x==null?void 0:x.class],"data-dropdown-option":!0},x),s("div",le(B,S),[s("div",{class:[`${o}-dropdown-option-body__prefix`,l&&`${o}-dropdown-option-body__prefix--show-icon`]},[y?y(t):Q(t.icon)]),s("div",{"data-dropdown-option":!0,class:`${o}-dropdown-option-body__label`},d?d(t):Q((n=t[this.labelField])!==null&&n!==void 0?n:t.title)),s("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__suffix`,u&&`${o}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?s(no,null,{default:()=>s(Je,null)}):null)]),this.hasSubmenu?s(_e,null,{default:()=>[s(Ce,null,{default:()=>s("div",{class:`${o}-dropdown-offset-container`},s(Oe,{show:this.mergedShowSubmenu,placement:this.placement,to:_&&this.popoverBody||void 0,teleportDisabled:!_},{default:()=>s("div",{class:`${o}-dropdown-menu-wrapper`},i?s(Fe,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>I}):I)}))})]}):null);return h?h({node:K,option:t}):K}}),io=N({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:n}=M(ue),{renderLabelRef:i,labelFieldRef:t,nodePropsRef:r,renderOptionRef:o}=M(J);return{labelField:t,showIcon:e,hasSubmenu:n,renderLabel:i,nodeProps:r,renderOption:o}},render(){var e;const{clsPrefix:n,hasSubmenu:i,showIcon:t,nodeProps:r,renderLabel:o,renderOption:l}=this,{rawNode:u}=this.tmNode,d=s("div",Object.assign({class:`${n}-dropdown-option`},r==null?void 0:r(u)),s("div",{class:`${n}-dropdown-option-body ${n}-dropdown-option-body--group`},s("div",{"data-dropdown-option":!0,class:[`${n}-dropdown-option-body__prefix`,t&&`${n}-dropdown-option-body__prefix--show-icon`]},Q(u.icon)),s("div",{class:`${n}-dropdown-option-body__label`,"data-dropdown-option":!0},o?o(u):Q((e=u.title)!==null&&e!==void 0?e:u[this.labelField])),s("div",{class:[`${n}-dropdown-option-body__suffix`,i&&`${n}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return l?l({node:d,option:u}):d}}),so=N({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:n,clsPrefix:i}=this,{children:t}=e;return s(Me,null,s(io,{clsPrefix:i,tmNode:e,key:e.key}),t==null?void 0:t.map(r=>{const{rawNode:o}=r;return o.show===!1?null:ge(o)?s(ye,{clsPrefix:i,key:r.key}):r.isGroup?(be("dropdown","`group` node is not allowed to be put in `group` node."),null):s(xe,{clsPrefix:i,tmNode:r,parentKey:n,key:r.key})}))}}),ao=N({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:n}}=this.tmNode;return s("div",n,[e==null?void 0:e()])}}),Se=N({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:n,childrenFieldRef:i}=M(J);H(ue,{showIconRef:w(()=>{const r=n.value;return e.tmNodes.some(o=>{var l;if(o.isGroup)return(l=o.children)===null||l===void 0?void 0:l.some(({rawNode:d})=>r?r(d):d.icon);const{rawNode:u}=o;return r?r(u):u.icon})}),hasSubmenuRef:w(()=>{const{value:r}=i;return e.tmNodes.some(o=>{var l;if(o.isGroup)return(l=o.children)===null||l===void 0?void 0:l.some(({rawNode:d})=>ie(d,r));const{rawNode:u}=o;return ie(u,r)})})});const t=j(null);return H(Be,null),H(Le,null),H(we,t),{bodyRef:t}},render(){const{parentKey:e,clsPrefix:n,scrollable:i}=this,t=this.tmNodes.map(r=>{const{rawNode:o}=r;return o.show===!1?null:ro(o)?s(ao,{tmNode:r,key:r.key}):ge(o)?s(ye,{clsPrefix:n,key:r.key}):to(o)?s(so,{clsPrefix:n,tmNode:r,parentKey:e,key:r.key}):s(xe,{clsPrefix:n,tmNode:r,parentKey:e,key:r.key,props:o.props,scrollable:i})});return s("div",{class:[`${n}-dropdown-menu`,i&&`${n}-dropdown-menu--scrollable`],ref:"bodyRef"},i?s(Ee,{contentClass:`${n}-dropdown-menu__content`},{default:()=>t}):t,this.showArrow?Ie({clsPrefix:n,arrowStyle:this.arrowStyle}):null)}}),lo=k("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[He(),k("dropdown-option",`
 position: relative;
 `,[T("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[T("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),k("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[T("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),pe("disabled",[R("pending",`
 color: var(--n-option-text-color-hover);
 `,[z("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),T("&::before","background-color: var(--n-option-color-hover);")]),R("active",`
 color: var(--n-option-text-color-active);
 `,[z("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),T("&::before","background-color: var(--n-option-color-active);")]),R("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[z("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),R("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),R("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[z("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[R("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),z("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[R("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),k("icon",`
 font-size: var(--n-option-icon-size);
 `)]),z("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),z("suffix",`
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
 `,[R("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),k("icon",`
 font-size: var(--n-option-icon-size);
 `)]),k("dropdown-menu","pointer-events: all;")]),k("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),k("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),k("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),T(">",[k("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),pe("scrollable",`
 padding: var(--n-padding);
 `),R("scrollable",[z("content",`
 padding: var(--n-padding);
 `)])]),co={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},uo=Object.keys(de),po=Object.assign(Object.assign(Object.assign({},de),co),U.props),yo=N({name:"Dropdown",inheritAttrs:!1,props:po,setup(e){const n=j(!1),i=We(O(e,"show"),n),t=w(()=>{const{keyField:a,childrenField:m}=e;return Ge(e.options,{getKey(f){return f[a]},getDisabled(f){return f.disabled===!0},getIgnored(f){return f.type==="divider"||f.type==="render"},getChildren(f){return f[m]}})}),r=w(()=>t.value.treeNodes),o=j(null),l=j(null),u=j(null),d=w(()=>{var a,m,f;return(f=(m=(a=o.value)!==null&&a!==void 0?a:l.value)!==null&&m!==void 0?m:u.value)!==null&&f!==void 0?f:null}),y=w(()=>t.value.getPath(d.value).keyPath),h=w(()=>t.value.getPath(e.value).keyPath),g=Z(()=>e.keyboard&&i.value);Qe({keydown:{ArrowUp:{prevent:!0,handler:ee},ArrowRight:{prevent:!0,handler:q},ArrowDown:{prevent:!0,handler:oe},ArrowLeft:{prevent:!0,handler:Y},Enter:{prevent:!0,handler:ne},Escape:V}},g);const{mergedClsPrefixRef:S,inlineThemeDisabled:_}=ae(e),I=U("Dropdown","-dropdown",lo,Ue,e,S);H(J,{labelFieldRef:O(e,"labelField"),childrenFieldRef:O(e,"childrenField"),renderLabelRef:O(e,"renderLabel"),renderIconRef:O(e,"renderIcon"),hoverKeyRef:o,keyboardKeyRef:l,lastToggledSubmenuKeyRef:u,pendingKeyPathRef:y,activeKeyPathRef:h,animatedRef:O(e,"animated"),mergedShowRef:i,nodePropsRef:O(e,"nodeProps"),renderOptionRef:O(e,"renderOption"),menuPropsRef:O(e,"menuProps"),doSelect:B,doUpdateShow:x}),se(i,a=>{!e.animated&&!a&&K()});function B(a,m){const{onSelect:f}=e;f&&re(f,a,m)}function x(a){const{"onUpdate:show":m,onUpdateShow:f}=e;m&&re(m,a),f&&re(f,a),n.value=a}function K(){o.value=null,l.value=null,u.value=null}function V(){x(!1)}function Y(){L("left")}function q(){L("right")}function ee(){L("up")}function oe(){L("down")}function ne(){const a=G();a!=null&&a.isLeaf&&i.value&&(B(a.key,a.rawNode),x(!1))}function G(){var a;const{value:m}=t,{value:f}=d;return!m||f===null?null:(a=m.getNode(f))!==null&&a!==void 0?a:null}function L(a){const{value:m}=d,{value:{getFirstAvailableNode:f}}=t;let p=null;if(m===null){const P=f();P!==null&&(p=P.key)}else{const P=G();if(P){let c;switch(a){case"down":c=P.getNext();break;case"up":c=P.getPrev();break;case"right":c=P.getChild();break;case"left":c=P.getParent();break}c&&(p=c.key)}}p!==null&&(o.value=null,l.value=p)}const E=w(()=>{const{size:a,inverted:m}=e,{common:{cubicBezierEaseInOut:f},self:p}=I.value,{padding:P,dividerColor:c,borderRadius:b,optionOpacityDisabled:C,[F("optionIconSuffixWidth",a)]:D,[F("optionSuffixWidth",a)]:te,[F("optionIconPrefixWidth",a)]:A,[F("optionPrefixWidth",a)]:Pe,[F("fontSize",a)]:ke,[F("optionHeight",a)]:Re,[F("optionIconSize",a)]:Ne}=p,v={"--n-bezier":f,"--n-font-size":ke,"--n-padding":P,"--n-border-radius":b,"--n-option-height":Re,"--n-option-prefix-width":Pe,"--n-option-icon-prefix-width":A,"--n-option-suffix-width":te,"--n-option-icon-suffix-width":D,"--n-option-icon-size":Ne,"--n-divider-color":c,"--n-option-opacity-disabled":C};return m?(v["--n-color"]=p.colorInverted,v["--n-option-color-hover"]=p.optionColorHoverInverted,v["--n-option-color-active"]=p.optionColorActiveInverted,v["--n-option-text-color"]=p.optionTextColorInverted,v["--n-option-text-color-hover"]=p.optionTextColorHoverInverted,v["--n-option-text-color-active"]=p.optionTextColorActiveInverted,v["--n-option-text-color-child-active"]=p.optionTextColorChildActiveInverted,v["--n-prefix-color"]=p.prefixColorInverted,v["--n-suffix-color"]=p.suffixColorInverted,v["--n-group-header-text-color"]=p.groupHeaderTextColorInverted):(v["--n-color"]=p.color,v["--n-option-color-hover"]=p.optionColorHover,v["--n-option-color-active"]=p.optionColorActive,v["--n-option-text-color"]=p.optionTextColor,v["--n-option-text-color-hover"]=p.optionTextColorHover,v["--n-option-text-color-active"]=p.optionTextColorActive,v["--n-option-text-color-child-active"]=p.optionTextColorChildActive,v["--n-prefix-color"]=p.prefixColor,v["--n-suffix-color"]=p.suffixColor,v["--n-group-header-text-color"]=p.groupHeaderTextColor),v}),$=_?me("dropdown",w(()=>`${e.size[0]}${e.inverted?"i":""}`),E,e):void 0;return{mergedClsPrefix:S,mergedTheme:I,tmNodes:r,mergedShow:i,handleAfterLeave:()=>{e.animated&&K()},doUpdateShow:x,cssVars:_?void 0:E,themeClass:$==null?void 0:$.themeClass,onRender:$==null?void 0:$.onRender}},render(){const e=(t,r,o,l,u)=>{var d;const{mergedClsPrefix:y,menuProps:h}=this;(d=this.onRender)===null||d===void 0||d.call(this);const g=(h==null?void 0:h(void 0,this.tmNodes.map(_=>_.rawNode)))||{},S={ref:Xe(r),class:[t,`${y}-dropdown`,this.themeClass],clsPrefix:y,tmNodes:this.tmNodes,style:[o,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:l,onMouseleave:u};return s(Se,le(this.$attrs,S,g))},{mergedTheme:n}=this,i={show:this.mergedShow,theme:n.peers.Popover,themeOverrides:n.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return s(ve,Object.assign({},Ve(this.$props,uo),i),{trigger:()=>{var t,r;return(r=(t=this.$slots).default)===null||r===void 0?void 0:r.call(t)}})}});export{Je as C,yo as _,wo as a,Xe as c};
