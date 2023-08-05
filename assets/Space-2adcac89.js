import{c4 as B,j as C,d as G,o as R,q as b,P as j,c as E,bN as P,h as x,v as _,c5 as I,aG as v}from"./index-26b48c19.js";function L(e,a="default",i=[]){const s=e.$slots[a];return s===void 0?i:s()}const M=()=>B,T={name:"Space",self:M},A=T;let h;const O=()=>{if(!C)return!0;if(h===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const a=e.scrollHeight===1;return document.body.removeChild(e),h=a}return h},W=Object.assign(Object.assign({},b.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),F=G({name:"Space",props:W,setup(e){const{mergedClsPrefixRef:a,mergedRtlRef:i}=R(e),n=b("Space","-space",void 0,A,e,a),s=j("Space",i,a);return{useGap:O(),rtlEnabled:s,mergedClsPrefix:a,margin:E(()=>{const{size:t}=e;if(Array.isArray(t))return{horizontal:t[0],vertical:t[1]};if(typeof t=="number")return{horizontal:t,vertical:t};const{self:{[_("gap",t)]:g}}=n.value,{row:p,col:d}=I(g);return{horizontal:v(d),vertical:v(p)}})}},render(){const{vertical:e,align:a,inline:i,justify:n,itemStyle:s,margin:t,wrap:g,mergedClsPrefix:p,rtlEnabled:d,useGap:l,wrapItem:w,internalUseGap:S}=this,u=P(L(this));if(!u.length)return null;const y=`${t.horizontal}px`,m=`${t.horizontal/2}px`,$=`${t.vertical}px`,o=`${t.vertical/2}px`,c=u.length-1,f=n.startsWith("space-");return x("div",{role:"none",class:[`${p}-space`,d&&`${p}-space--rtl`],style:{display:i?"inline-flex":"flex",flexDirection:e?"column":"row",justifyContent:["start","end"].includes(n)?"flex-"+n:n,flexWrap:!g||e?"nowrap":"wrap",marginTop:l||e?"":`-${o}`,marginBottom:l||e?"":`-${o}`,alignItems:a,gap:l?`${t.vertical}px ${t.horizontal}px`:""}},!w&&(l||S)?u:u.map((z,r)=>x("div",{role:"none",style:[s,{maxWidth:"100%"},l?"":e?{marginBottom:r!==c?$:""}:d?{marginLeft:f?n==="space-between"&&r===c?"":m:r!==c?y:"",marginRight:f?n==="space-between"&&r===0?"":m:"",paddingTop:o,paddingBottom:o}:{marginRight:f?n==="space-between"&&r===c?"":m:r!==c?y:"",marginLeft:f?n==="space-between"&&r===0?"":m:"",paddingTop:o,paddingBottom:o}]},z)))}});export{F as _,L as g};