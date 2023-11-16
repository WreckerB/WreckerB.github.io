import{aW as ee,r as U,j as N,bq as oe,br as ne,o as te,d as z,aE as x,aF as T,aG as g,aN as e,aJ as t,bs as q,aH as B,aI as l,aO as C,aL as y,aP as v,al as le,aQ as ae,bt as Z,a0 as G,b6 as J,b2 as j,bc as O,bu as I,i as Q,bv as X,aB as se,T as re,b3 as ce,aU as de,a_ as ie,bp as ue,bw as pe}from"./index-f7a5b109.js";import{_ as me,c as _e}from"./dark-mode-switch.vuevuetypescriptsetuptruelang-7bd10a28.js";/* empty css                                                   */import{R as fe,f as R,_ as V,a as A,g as ge,b as K}from"./rule-f4e10b1f.js";import{_ as E}from"./Space-debe452c.js";import{_ as D}from"./Input-7f4f8377.js";import{_ as Y}from"./Checkbox-f693b4bc.js";import{u as he}from"./use-loading-9266ff6c.js";import{_ as ve}from"./GradientText-882f0111.js";import"./format-length-c9d165c6.js";import"./get-8955027e.js";import"./get-slot-1efb97e5.js";import"./Suffix-6ffffac0.js";import"./use-merged-state-f08e5b82.js";import"./use-houdini-9af1bdf0.js";function we(_){if(_<=0&&_%1!==0)throw new Error("倒计时的时间应该为一个正整数！");const{bool:a,setTrue:s,setFalse:p}=ee(!1),i=U(0),n=N(()=>!!i.value);let d;function o(h=_){i.value||(p(),i.value=h,d=setInterval(()=>{i.value-=1,i.value<=0&&(clearInterval(d),s())},1e3))}function u(){d=clearInterval(d),i.value=0}return oe(u),{counts:i,isCounting:n,start:o,stop:u,isComplete:a}}function H(){const{loading:_,startLoading:a,endLoading:s}=he(),{counts:p,start:i,isCounting:n}=we(60),d="获取验证码",o=c=>`${c}秒后重新获取`,u=N(()=>{let c=d;return _.value&&(c=""),n.value&&(c=o(p.value)),c});function h(c){var m,f;let r=!0;return c.trim()===""?((m=window.$message)==null||m.error("手机号码不能为空！"),r=!1):fe.test(c)||((f=window.$message)==null||f.error("手机号码格式错误！"),r=!1),r}async function w(c){var f;if(!h(c)||_.value)return;a();const{data:m}=await ne(c);m&&((f=window.$message)==null||f.success("验证码发送成功！"),i()),s()}return{label:u,start:i,isCounting:n,getSmsCode:w,loading:_}}function be(_=152,a=40){const s=U(),p=U("");function i(d){p.value=d}function n(){s.value&&(p.value=Ce(s.value,_,a))}return te(()=>{n()}),{domRef:s,imgCode:p,setImgCode:i,getImgCode:n}}function S(_,a){return Math.floor(Math.random()*(a-_)+_)}function F(_,a){const s=S(_,a),p=S(_,a),i=S(_,a);return`rgb(${s},${p},${i})`}function Ce(_,a,s){let p="";const i="0123456789",n=_.getContext("2d");if(!n)return p;n.fillStyle=F(180,230),n.fillRect(0,0,a,s);for(let d=0;d<4;d+=1){const o=i[S(0,i.length)];p+=o;const u=S(18,41),h=S(-30,30);n.font=`${u}px Simhei`,n.textBaseline="top",n.fillStyle=F(80,150),n.save(),n.translate(30*d+23,15),n.rotate(h*Math.PI/180),n.fillText(o,-15+5,-15),n.restore()}for(let d=0;d<5;d+=1)n.beginPath(),n.moveTo(S(0,a),S(0,s)),n.lineTo(S(0,a),S(0,s)),n.strokeStyle=F(180,230),n.closePath(),n.stroke();for(let d=0;d<41;d+=1)n.beginPath(),n.arc(S(0,a),S(0,s),1,0,2*Math.PI),n.closePath(),n.fillStyle=F(150,200),n.fill();return p}const ke={height:"1337",width:"1337"},ye=g("path",{id:"path-1",opacity:"1","fill-rule":"evenodd",d:"M1337,668.5 C1337,1037.455193874239 1037.455193874239,1337 668.5,1337 C523.6725684305388,1337 337,1236 370.50000000000006,1094 C434.03835568300906,824.6732385973953 6.906089672974592e-14,892.6277623047779 0,668.5000000000001 C0,299.5448061257611 299.5448061257609,1.1368683772161603e-13 668.4999999999999,0 C1037.455193874239,0 1337,299.544806125761 1337,668.5Z"},null,-1),xe={id:"linearGradient-2",x1:"0.79",y1:"0.62",x2:"0.21",y2:"0.86"},$e=["stop-color"],Pe=["stop-color"],Se=g("g",{opacity:"1"},[g("use",{"xlink:href":"#path-1",fill:"url(#linearGradient-2)","fill-opacity":"1"})],-1),ze=z({__name:"corner-top",props:{startColor:{default:"#28aff0"},endColor:{default:"#120fc4"}},setup(_){return(a,s)=>(x(),T("svg",ke,[g("defs",null,[ye,g("linearGradient",xe,[g("stop",{offset:"0","stop-color":a.startColor,"stop-opacity":"1"},null,8,$e),g("stop",{offset:"1","stop-color":a.endColor,"stop-opacity":"1"},null,8,Pe)])]),Se]))}}),Le={version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",height:"896",width:"967.8852157128662"},Re=g("path",{id:"path-2",opacity:"1","fill-rule":"evenodd",d:"M896,448 C1142.6325445712241,465.5747656464056 695.2579309733121,896 448,896 C200.74206902668806,896 5.684341886080802e-14,695.2579309733121 0,448.0000000000001 C0,200.74206902668806 200.74206902668791,5.684341886080802e-14 447.99999999999994,0 C695.2579309733121,0 475,418 896,448Z"},null,-1),Ue={id:"linearGradient-3",x1:"0.5",y1:"0",x2:"0.5",y2:"1"},Me=["stop-color"],Ne=["stop-color"],Ie=g("g",{opacity:"1"},[g("use",{"xlink:href":"#path-2",fill:"url(#linearGradient-3)","fill-opacity":"1"})],-1),Te=z({__name:"corner-bottom",props:{startColor:{default:"#28aff0"},endColor:{default:"#120fc4"}},setup(_){return(a,s)=>(x(),T("svg",Le,[g("defs",null,[Re,g("linearGradient",Ue,[g("stop",{offset:"0","stop-color":a.startColor,"stop-opacity":"1"},null,8,Me),g("stop",{offset:"1","stop-color":a.endColor,"stop-opacity":"1"},null,8,Ne)])]),Ie]))}}),Be={class:"absolute-lt z-1 wh-full overflow-hidden"},Ge={class:"absolute -right-300px -top-900px <sm:(-right-100px -top-1170px)"},Ee={class:"absolute -left-200px -bottom-400px <sm:(-left-100px -bottom-760px)"},je=z({__name:"index",props:{themeColor:{}},setup(_){const a=_,s=N(()=>q(a.themeColor,3)),p=N(()=>q(a.themeColor,6));return(i,n)=>(x(),T("div",Be,[g("div",Ge,[e(t(ze),{"start-color":s.value,"end-color":p.value},null,8,["start-color","end-color"])]),g("div",Ee,[e(t(Te),{"start-color":p.value,"end-color":s.value},null,8,["start-color","end-color"])])]))}}),Oe=z({__name:"other-account",emits:["login"],setup(_,{emit:a}){const s=[{key:"super",label:Z.super,userName:"Super",password:"super123"},{key:"admin",label:Z.admin,userName:"Admin",password:"admin123"},{key:"user",label:Z.user,userName:"User01",password:"user01123"}];function p(i,n){a("login",{userName:i,password:n})}return(i,n)=>{const d=me,o=G,u=E;return x(),B(u,{vertical:!0},{default:l(()=>[e(d,{class:"!mb-0 text-14px text-#666"},{default:l(()=>[C(y(t(v)("page.login.pwdLogin.otherAccountLogin")),1)]),_:1}),e(u,{justify:"center"},{default:l(()=>[(x(),T(le,null,ae(s,h=>e(o,{key:h.userName,type:"primary",onClick:w=>p(h.userName,h.password)},{default:l(()=>[C(y(h.label),1)]),_:2},1032,["onClick"])),64))]),_:1})]),_:1})}}}),Ve={class:"flex-y-center justify-between"},Ae={class:"flex-y-center justify-between"},De=g("div",{class:"w-12px"},null,-1),Fe=z({__name:"index",setup(_){const a=J(),{login:s}=J(),{toLoginModule:p}=j(),i=U(),n=O({userName:"Soybean",password:"soybean123"}),d={password:R.pwd},o=U(!1);async function u(){var r;await((r=i.value)==null?void 0:r.validate());const{userName:w,password:c}=n;s(w,c)}function h(w){const{userName:c,password:r}=w;s(c,r)}return(w,c)=>{const r=D,m=V,f=Y,k=G,$=E,L=A;return x(),B(L,{ref_key:"formRef",ref:i,model:n,rules:d,size:"large","show-label":!1},{default:l(()=>[e(m,{path:"userName"},{default:l(()=>[e(r,{value:n.userName,"onUpdate:value":c[0]||(c[0]=b=>n.userName=b),placeholder:w.$t("page.login.common.userNamePlaceholder")},null,8,["value","placeholder"])]),_:1}),e(m,{path:"password"},{default:l(()=>[e(r,{value:n.password,"onUpdate:value":c[1]||(c[1]=b=>n.password=b),type:"password","show-password-on":"click",placeholder:w.$t("page.login.common.passwordPlaceholder")},null,8,["value","placeholder"])]),_:1}),e($,{vertical:!0,size:24},{default:l(()=>[g("div",Ve,[e(f,{checked:o.value,"onUpdate:checked":c[2]||(c[2]=b=>o.value=b)},{default:l(()=>[C(y(w.$t("page.login.pwdLogin.rememberMe")),1)]),_:1},8,["checked"]),e(k,{text:!0,onClick:c[3]||(c[3]=b=>t(p)("reset-pwd"))},{default:l(()=>[C(y(w.$t("page.login.pwdLogin.forgetPassword")),1)]),_:1})]),e(k,{type:"primary",size:"large",block:!0,round:!0,loading:t(a).loginLoading,onClick:u},{default:l(()=>[C(y(w.$t("page.login.common.confirm")),1)]),_:1},8,["loading"]),g("div",Ae,[e(k,{class:"flex-1",block:!0,onClick:c[4]||(c[4]=b=>t(p)("code-login"))},{default:l(()=>[C(y(t(I)["code-login"]),1)]),_:1}),De,e(k,{class:"flex-1",block:!0,onClick:c[5]||(c[5]=b=>t(p)("register"))},{default:l(()=>[C(y(t(I).register),1)]),_:1})])]),_:1}),e(t(Oe),{onLogin:h})]),_:1},8,["model"])}}}),He=z({name:"ImageVerify",__name:"image-verify",props:{code:{default:""}},emits:["update:code"],setup(_,{expose:a,emit:s}){const p=_,{domRef:i,imgCode:n,setImgCode:d,getImgCode:o}=be();return Q(()=>p.code,u=>{d(u)}),Q(n,u=>{s("update:code",u)}),a({getImgCode:o}),(u,h)=>(x(),T("div",null,[g("canvas",{ref_key:"domRef",ref:i,width:"152",height:"40",class:"cursor-pointer",onClick:h[0]||(h[0]=(...w)=>t(o)&&t(o)(...w))},null,512)]))}}),We={class:"flex-y-center w-full"},Ze=g("div",{class:"w-18px"},null,-1),qe={class:"pl-8px"},Je=z({__name:"index",setup(_){const a=J(),{toLoginModule:s}=j(),{label:p,isCounting:i,loading:n,getSmsCode:d}=H(),o=U(),u=O({phone:"",code:"",imgCode:""}),h=U(""),w={phone:R.phone,code:R.code,imgCode:ge(h)};function c(){d(u.phone)}async function r(){var m,f;await((m=o.value)==null?void 0:m.validate()),(f=window.$message)==null||f.success(v("page.login.common.validateSuccess"))}return(m,f)=>{const k=D,$=V,L=G,b=He,W=E,P=A;return x(),B(P,{ref_key:"formRef",ref:o,model:u,rules:w,size:"large","show-label":!1},{default:l(()=>[e($,{path:"phone"},{default:l(()=>[e(k,{value:u.phone,"onUpdate:value":f[0]||(f[0]=M=>u.phone=M),placeholder:t(v)("page.login.common.phonePlaceholder")},null,8,["value","placeholder"])]),_:1}),e($,{path:"code"},{default:l(()=>[g("div",We,[e(k,{value:u.code,"onUpdate:value":f[1]||(f[1]=M=>u.code=M),placeholder:t(v)("page.login.common.codePlaceholder")},null,8,["value","placeholder"]),Ze,e(L,{size:"large",disabled:t(i),loading:t(n),onClick:c},{default:l(()=>[C(y(t(p)),1)]),_:1},8,["disabled","loading"])])]),_:1}),e($,{path:"imgCode"},{default:l(()=>[e(k,{value:u.imgCode,"onUpdate:value":f[2]||(f[2]=M=>u.imgCode=M),placeholder:t(v)("page.login.codeLogin.imageCodePlaceholder")},null,8,["value","placeholder"]),g("div",qe,[e(b,{code:h.value,"onUpdate:code":f[3]||(f[3]=M=>h.value=M)},null,8,["code"])])]),_:1}),e(W,{vertical:!0,size:18},{default:l(()=>[e(L,{type:"primary",size:"large",block:!0,round:!0,loading:t(a).loginLoading,onClick:r},{default:l(()=>[C(y(t(v)("page.login.common.confirm")),1)]),_:1},8,["loading"]),e(L,{size:"large",block:!0,round:!0,onClick:f[4]||(f[4]=M=>t(s)("pwd-login"))},{default:l(()=>[C(y(t(v)("page.login.common.back")),1)]),_:1})]),_:1})]),_:1},8,["model"])}}}),Qe={class:"w-full text-14px"},Xe=z({name:"LoginAgreement",__name:"login-agreement",props:{value:{type:Boolean,default:!0}},emits:["update:value","click-protocol","click-policy"],setup(_,{emit:a}){const s=_,p=N({get(){return s.value},set(d){a("update:value",d)}});function i(){a("click-protocol")}function n(){a("click-policy")}return(d,o)=>{const u=Y,h=G;return x(),T("div",Qe,[e(u,{checked:p.value,"onUpdate:checked":o[0]||(o[0]=w=>p.value=w)},{default:l(()=>[C("我已经仔细阅读并接受")]),_:1},8,["checked"]),e(h,{text:!0,type:"primary",onClick:i},{default:l(()=>[C("《用户协议》")]),_:1}),e(h,{text:!0,type:"primary",onClick:n},{default:l(()=>[C("《隐私权政策》")]),_:1})])}}}),Ke={class:"flex-y-center w-full"},Ye=g("div",{class:"w-18px"},null,-1),eo=z({__name:"index",setup(_){const{toLoginModule:a}=j(),{label:s,isCounting:p,loading:i,start:n}=H(),d=U(),o=O({phone:"",code:"",pwd:"",confirmPwd:""}),u={phone:R.phone,code:R.code,pwd:R.pwd,confirmPwd:K(X(o).pwd)},h=U(!1);function w(){n()}async function c(){var r,m;await((r=d.value)==null?void 0:r.validate()),(m=window.$message)==null||m.success(v("page.login.common.validateSuccess"))}return(r,m)=>{const f=D,k=V,$=G,L=Xe,b=E,W=A;return x(),B(W,{ref_key:"formRef",ref:d,model:o,rules:u,size:"large","show-label":!1},{default:l(()=>[e(k,{path:"phone"},{default:l(()=>[e(f,{value:o.phone,"onUpdate:value":m[0]||(m[0]=P=>o.phone=P),placeholder:t(v)("page.login.common.phonePlaceholder")},null,8,["value","placeholder"])]),_:1}),e(k,{path:"code"},{default:l(()=>[g("div",Ke,[e(f,{value:o.code,"onUpdate:value":m[1]||(m[1]=P=>o.code=P),placeholder:t(v)("page.login.common.codePlaceholder")},null,8,["value","placeholder"]),Ye,e($,{size:"large",disabled:t(p),loading:t(i),onClick:w},{default:l(()=>[C(y(t(s)),1)]),_:1},8,["disabled","loading"])])]),_:1}),e(k,{path:"pwd"},{default:l(()=>[e(f,{value:o.pwd,"onUpdate:value":m[2]||(m[2]=P=>o.pwd=P),type:"password","show-password-on":"click",placeholder:t(v)("page.login.common.passwordPlaceholder")},null,8,["value","placeholder"])]),_:1}),e(k,{path:"confirmPwd"},{default:l(()=>[e(f,{value:o.confirmPwd,"onUpdate:value":m[3]||(m[3]=P=>o.confirmPwd=P),type:"password","show-password-on":"click",placeholder:t(v)("page.login.common.confirmPasswordPlaceholder")},null,8,["value","placeholder"])]),_:1}),e(b,{vertical:!0,size:18},{default:l(()=>[e(L,{value:h.value,"onUpdate:value":m[4]||(m[4]=P=>h.value=P)},null,8,["value"]),e($,{type:"primary",size:"large",block:!0,round:!0,onClick:c},{default:l(()=>[C(y(t(v)("page.login.common.confirm")),1)]),_:1}),e($,{size:"large",block:!0,round:!0,onClick:m[5]||(m[5]=P=>t(a)("pwd-login"))},{default:l(()=>[C(y(t(v)("page.login.common.back")),1)]),_:1})]),_:1})]),_:1},8,["model"])}}}),oo={class:"flex-y-center w-full"},no=g("div",{class:"w-18px"},null,-1),to=z({__name:"index",setup(_){const{toLoginModule:a}=j(),{label:s,isCounting:p,loading:i,start:n}=H(),d=U(),o=O({phone:"",code:"",pwd:"",confirmPwd:""}),u={phone:R.phone,code:R.code,pwd:R.pwd,confirmPwd:K(X(o).pwd)};function h(){n()}async function w(){var c,r;await((c=d.value)==null?void 0:c.validate()),(r=window.$message)==null||r.success(v("page.login.common.validateSuccess"))}return(c,r)=>{const m=D,f=V,k=G,$=E,L=A;return x(),B(L,{ref_key:"formRef",ref:d,model:o,rules:u,size:"large","show-label":!1},{default:l(()=>[e(f,{path:"phone"},{default:l(()=>[e(m,{value:o.phone,"onUpdate:value":r[0]||(r[0]=b=>o.phone=b),placeholder:t(v)("page.login.common.phonePlaceholder")},null,8,["value","placeholder"])]),_:1}),e(f,{path:"code"},{default:l(()=>[g("div",oo,[e(m,{value:o.code,"onUpdate:value":r[1]||(r[1]=b=>o.code=b),placeholder:t(v)("page.login.common.codePlaceholder")},null,8,["value","placeholder"]),no,e(k,{size:"large",disabled:t(p),loading:t(i),onClick:h},{default:l(()=>[C(y(t(s)),1)]),_:1},8,["disabled","loading"])])]),_:1}),e(f,{path:"pwd"},{default:l(()=>[e(m,{value:o.pwd,"onUpdate:value":r[2]||(r[2]=b=>o.pwd=b),type:"password","show-password-on":"click",placeholder:t(v)("page.login.common.passwordPlaceholder")},null,8,["value","placeholder"])]),_:1}),e(f,{path:"confirmPwd"},{default:l(()=>[e(m,{value:o.confirmPwd,"onUpdate:value":r[3]||(r[3]=b=>o.confirmPwd=b),type:"password","show-password-on":"click",placeholder:t(v)("page.login.common.confirmPasswordPlaceholder")},null,8,["value","placeholder"])]),_:1}),e($,{vertical:!0,size:"large"},{default:l(()=>[e(k,{type:"primary",size:"large",block:!0,round:!0,onClick:w},{default:l(()=>[C(y(t(v)("page.login.common.confirm")),1)]),_:1}),e(k,{size:"large",block:!0,round:!0,onClick:r[4]||(r[4]=b=>t(a)("pwd-login"))},{default:l(()=>[C(y(t(v)("page.login.common.back")),1)]),_:1})]),_:1})]),_:1},8,["model"])}}}),lo={class:"flex-y-center w-full"},ao=g("div",{class:"w-18px"},null,-1),so=z({__name:"index",setup(_){const{toLoginModule:a}=j(),{label:s,isCounting:p,loading:i,getSmsCode:n}=H(),d=U(),o=O({phone:"",code:"",imgCode:""}),u={phone:R.phone,code:R.code};function h(){n(o.phone)}async function w(){var c,r;await((c=d.value)==null?void 0:c.validate()),(r=window.$message)==null||r.success(v("page.login.common.validateSuccess"))}return(c,r)=>{const m=D,f=V,k=G,$=E,L=A;return x(),B(L,{ref_key:"formRef",ref:d,model:o,rules:u,size:"large","show-label":!1},{default:l(()=>[e(f,{path:"phone"},{default:l(()=>[e(m,{value:o.phone,"onUpdate:value":r[0]||(r[0]=b=>o.phone=b),placeholder:t(v)("page.login.common.phonePlaceholder")},null,8,["value","placeholder"])]),_:1}),e(f,{path:"code"},{default:l(()=>[g("div",lo,[e(m,{value:o.code,"onUpdate:value":r[1]||(r[1]=b=>o.code=b),placeholder:t(v)("page.login.common.codePlaceholder")},null,8,["value","placeholder"]),ao,e(k,{size:"large",disabled:t(p),loading:t(i),onClick:h},{default:l(()=>[C(y(t(s)),1)]),_:1},8,["disabled","loading"])])]),_:1}),e($,{vertical:!0,size:"large"},{default:l(()=>[e(k,{type:"primary",size:"large",block:!0,round:!0,onClick:w},{default:l(()=>[C(y(t(v)("page.login.common.confirm")),1)]),_:1}),e(k,{size:"large",block:!0,round:!0,onClick:r[2]||(r[2]=b=>t(a)("pwd-login"))},{default:l(()=>[C(y(t(v)("page.login.common.back")),1)]),_:1})]),_:1})]),_:1},8,["model"])}}}),ro={class:"w-300px sm:w-360px"},co={class:"flex-y-center justify-between"},io={class:"pt-24px"},uo={class:"text-18px text-primary font-medium"},po={class:"pt-24px"},zo=z({__name:"index",props:{module:{}},setup(_){const a=_,s=se(),p=[{key:"pwd-login",label:I["pwd-login"],component:Fe},{key:"code-login",label:I["code-login"],component:Je},{key:"register",label:I.register,component:eo},{key:"reset-pwd",label:I["reset-pwd"],component:to},{key:"bind-wechat",label:I["bind-wechat"],component:so}],i=N(()=>{const o={...p[0]},u=p.find(h=>h.key===a.module);return u&&Object.assign(o,u),o}),n=N(()=>s.darkMode?q(s.themeColor,7):s.themeColor),d=N(()=>{const o="#ffffff",u=s.darkMode?.5:.2;return pe(o,s.themeColor,u)});return(o,u)=>{const h=_e,w=ie,c=ve,r=ue;return x(),T("div",{class:"relative flex-center wh-full",style:de({backgroundColor:d.value})},[e(h,{dark:t(s).darkMode,class:"absolute left-48px top-24px z-3 text-20px","onUpdate:dark":t(s).setDarkMode},null,8,["dark","onUpdate:dark"]),e(r,{bordered:!1,size:"large",class:"z-4 !w-auto rounded-20px shadow-sm"},{default:l(()=>[g("div",ro,[g("header",co,[e(w,{class:"text-64px text-primary"}),e(c,{type:"primary",size:28},{default:l(()=>[C(y(t(v)("system.title")),1)]),_:1})]),g("main",io,[g("h3",uo,y(i.value.label),1),g("div",po,[e(re,{name:"fade-slide",mode:"out-in",appear:""},{default:l(()=>[(x(),B(ce(i.value.component)))]),_:1})])])])]),_:1}),e(t(je),{"theme-color":n.value},null,8,["theme-color"])],4)}}});export{zo as default};
