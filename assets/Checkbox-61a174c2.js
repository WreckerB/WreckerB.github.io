import{h as d,A as se,d as N,u as j,V as E,r as U,j as B,z as ue,t as P,$ as l,g as b,b as r,x as C,e as A,at as be,by as he,bz as fe,D as ke,am as ve,k as H,a2 as me,n as ge,cZ as xe,ay as pe,M as ye,c$ as Ce,X as K}from"./index-03963baa.js";import{u as V}from"./use-merged-state-224a29bb.js";const we=d("svg",{viewBox:"0 0 64 64",class:"check-icon"},d("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),Re=d("svg",{viewBox:"0 0 100 100",class:"line-icon"},d("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"})),G=se("n-checkbox-group"),ze={min:Number,max:Number,size:String,value:Array,defaultValue:{type:Array,default:null},disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]},Ae=N({name:"CheckboxGroup",props:ze,setup(o){const{mergedClsPrefixRef:g}=j(o),x=E(o),{mergedSizeRef:w,mergedDisabledRef:S}=x,s=U(o.defaultValue),R=B(()=>o.value),u=V(R,s),c=B(()=>{var h;return((h=u.value)===null||h===void 0?void 0:h.length)||0}),a=B(()=>Array.isArray(u.value)?new Set(u.value):new Set);function M(h,n){const{nTriggerFormInput:p,nTriggerFormChange:y}=x,{onChange:f,"onUpdate:value":k,onUpdateValue:v}=o;if(Array.isArray(u.value)){const i=Array.from(u.value),_=i.findIndex(I=>I===n);h?~_||(i.push(n),v&&l(v,i,{actionType:"check",value:n}),k&&l(k,i,{actionType:"check",value:n}),p(),y(),s.value=i,f&&l(f,i)):~_&&(i.splice(_,1),v&&l(v,i,{actionType:"uncheck",value:n}),k&&l(k,i,{actionType:"uncheck",value:n}),f&&l(f,i),s.value=i,p(),y())}else h?(v&&l(v,[n],{actionType:"check",value:n}),k&&l(k,[n],{actionType:"check",value:n}),f&&l(f,[n]),s.value=[n],p(),y()):(v&&l(v,[],{actionType:"uncheck",value:n}),k&&l(k,[],{actionType:"uncheck",value:n}),f&&l(f,[]),s.value=[],p(),y())}return ue(G,{checkedCountRef:c,maxRef:P(o,"max"),minRef:P(o,"min"),valueSetRef:a,disabledRef:S,mergedSizeRef:w,toggleCheckbox:M}),{mergedClsPrefix:g}},render(){return d("div",{class:`${this.mergedClsPrefix}-checkbox-group`,role:"group"},this.$slots)}}),Se=b([r("checkbox",`
 line-height: var(--n-label-line-height);
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 --n-merged-color-table: var(--n-color-table);
 `,[b("&:hover",[r("checkbox-box",[C("border",{border:"var(--n-border-checked)"})])]),b("&:focus:not(:active)",[r("checkbox-box",[C("border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),A("inside-table",[r("checkbox-box",`
 background-color: var(--n-merged-color-table);
 `)]),A("checked",[r("checkbox-box",`
 background-color: var(--n-color-checked);
 `,[r("checkbox-icon",[b(".check-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),A("indeterminate",[r("checkbox-box",[r("checkbox-icon",[b(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),b(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),A("checked, indeterminate",[b("&:focus:not(:active)",[r("checkbox-box",[C("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),r("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[C("border",{border:"var(--n-border-checked)"})])]),A("disabled",{cursor:"not-allowed"},[A("checked",[r("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[C("border",{border:"var(--n-border-disabled-checked)"}),r("checkbox-icon",[b(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),r("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[C("border",{border:"var(--n-border-disabled)"}),r("checkbox-icon",[b(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled)"})])]),C("label",{color:"var(--n-text-color-disabled)"})]),r("checkbox-box-wrapper",`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `),r("checkbox-box",`
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color 0.3s var(--n-bezier);
 `,[C("border",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `),r("checkbox-icon",`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[b(".check-icon, .line-icon",`
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `),be({left:"1px",top:"1px"})])]),C("label",`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `,[b("&:empty",{display:"none"})])]),he(r("checkbox",`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),fe(r("checkbox",`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]),Te=Object.assign(Object.assign({},H.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]}),Me=N({name:"Checkbox",props:Te,setup(o){const g=U(null),{mergedClsPrefixRef:x,inlineThemeDisabled:w,mergedRtlRef:S}=j(o),s=E(o,{mergedSize(e){const{size:m}=o;if(m!==void 0)return m;if(c){const{value:t}=c.mergedSizeRef;if(t!==void 0)return t}if(e){const{mergedSize:t}=e;if(t!==void 0)return t.value}return"medium"},mergedDisabled(e){const{disabled:m}=o;if(m!==void 0)return m;if(c){if(c.disabledRef.value)return!0;const{maxRef:{value:t},checkedCountRef:z}=c;if(t!==void 0&&z.value>=t&&!n.value)return!0;const{minRef:{value:D}}=c;if(D!==void 0&&z.value<=D&&n.value)return!0}return e?e.disabled.value:!1}}),{mergedDisabledRef:R,mergedSizeRef:u}=s,c=ke(G,null),a=U(o.defaultChecked),M=P(o,"checked"),h=V(M,a),n=ve(()=>{if(c){const e=c.valueSetRef.value;return e&&o.value!==void 0?e.has(o.value):!1}else return h.value===o.checkedValue}),p=H("Checkbox","-checkbox",Se,Ce,o,x);function y(e){if(c&&o.value!==void 0)c.toggleCheckbox(!n.value,o.value);else{const{onChange:m,"onUpdate:checked":t,onUpdateChecked:z}=o,{nTriggerFormInput:D,nTriggerFormChange:F}=s,$=n.value?o.uncheckedValue:o.checkedValue;t&&l(t,$,e),z&&l(z,$,e),m&&l(m,$,e),D(),F(),a.value=$}}function f(e){R.value||y(e)}function k(e){if(!R.value)switch(e.key){case" ":case"Enter":y(e)}}function v(e){switch(e.key){case" ":e.preventDefault()}}const i={focus:()=>{var e;(e=g.value)===null||e===void 0||e.focus()},blur:()=>{var e;(e=g.value)===null||e===void 0||e.blur()}},_=me("Checkbox",S,x),I=B(()=>{const{value:e}=u,{common:{cubicBezierEaseInOut:m},self:{borderRadius:t,color:z,colorChecked:D,colorDisabled:F,colorTableHeader:$,colorTableHeaderModal:L,colorTableHeaderPopover:O,checkMarkColor:W,checkMarkColorDisabled:X,border:Y,borderFocus:Z,borderDisabled:q,borderChecked:J,boxShadowFocus:Q,textColor:ee,textColorDisabled:oe,checkMarkColorDisabledChecked:ne,colorDisabledChecked:re,borderDisabledChecked:ae,labelPadding:ce,labelLineHeight:le,labelFontWeight:ie,[K("fontSize",e)]:te,[K("size",e)]:de}}=p.value;return{"--n-label-line-height":le,"--n-label-font-weight":ie,"--n-size":de,"--n-bezier":m,"--n-border-radius":t,"--n-border":Y,"--n-border-checked":J,"--n-border-focus":Z,"--n-border-disabled":q,"--n-border-disabled-checked":ae,"--n-box-shadow-focus":Q,"--n-color":z,"--n-color-checked":D,"--n-color-table":$,"--n-color-table-modal":L,"--n-color-table-popover":O,"--n-color-disabled":F,"--n-color-disabled-checked":re,"--n-text-color":ee,"--n-text-color-disabled":oe,"--n-check-mark-color":W,"--n-check-mark-color-disabled":X,"--n-check-mark-color-disabled-checked":ne,"--n-font-size":te,"--n-label-padding":ce}}),T=w?ge("checkbox",B(()=>u.value[0]),I,o):void 0;return Object.assign(s,i,{rtlEnabled:_,selfRef:g,mergedClsPrefix:x,mergedDisabled:R,renderedChecked:n,mergedTheme:p,labelId:xe(),handleClick:f,handleKeyUp:k,handleKeyDown:v,cssVars:w?void 0:I,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender})},render(){var o;const{$slots:g,renderedChecked:x,mergedDisabled:w,indeterminate:S,privateInsideTable:s,cssVars:R,labelId:u,label:c,mergedClsPrefix:a,focusable:M,handleKeyUp:h,handleKeyDown:n,handleClick:p}=this;return(o=this.onRender)===null||o===void 0||o.call(this),d("div",{ref:"selfRef",class:[`${a}-checkbox`,this.themeClass,this.rtlEnabled&&`${a}-checkbox--rtl`,x&&`${a}-checkbox--checked`,w&&`${a}-checkbox--disabled`,S&&`${a}-checkbox--indeterminate`,s&&`${a}-checkbox--inside-table`],tabindex:w||!M?void 0:0,role:"checkbox","aria-checked":S?"mixed":x,"aria-labelledby":u,style:R,onKeyup:h,onKeydown:n,onClick:p,onMousedown:()=>{ye("selectstart",window,y=>{y.preventDefault()},{once:!0})}},d("div",{class:`${a}-checkbox-box-wrapper`}," ",d("div",{class:`${a}-checkbox-box`},d(pe,null,{default:()=>this.indeterminate?d("div",{key:"indeterminate",class:`${a}-checkbox-icon`},Re):d("div",{key:"check",class:`${a}-checkbox-icon`},we)}),d("div",{class:`${a}-checkbox-box__border`}))),c!==null||g.default?d("span",{class:`${a}-checkbox__label`,id:u},g.default?g.default():c):null)}});export{Ae as N,Me as _};
