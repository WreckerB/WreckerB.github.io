import{C as T,A as V,b as O,by as q,g as M,bz as $,x as y,d as G,u as AA,r as j,D as R,j as P,k as J,i as eA,n as aA,o as oA,w as nA,m as tA,s as iA,ax as sA,h as D,bQ as rA,X as cA,bR as lA,bS as YA,aE as H,aF as S,aN as p,aI as C,al as dA,aQ as XA,aH as gA,aG as E,aU as N,aL as fA,be as ZA,a0 as uA,bp as hA}from"./index-fff8dcc5.js";import{_ as bA}from"./InputGroup-d13d2793.js";import{t as mA}from"./Tag-e5b50045.js";import{_ as wA}from"./Select-e380fc25.js";import{_ as pA}from"./Input-b7e53e96.js";import{_ as jA,a as CA}from"./Grid-51ac7819.js";import"./use-merged-state-ff1fee23.js";import"./Suffix-7ca0e45d.js";import"./use-compitable-2afa4fb7.js";import"./cssr-3f54b236.js";import"./Popover-01aebeb4.js";import"./get-6ab2e015.js";import"./format-length-c9d165c6.js";import"./next-frame-once-7035a838.js";import"./get-slot-1efb97e5.js";const z=T&&"loading"in document.createElement("img"),vA=(A={})=>{var Y;const{root:s=null}=A;return{hash:`${A.rootMargin||"0px 0px 0px 0px"}-${Array.isArray(A.threshold)?A.threshold.join(","):(Y=A.threshold)!==null&&Y!==void 0?Y:"0"}`,options:Object.assign(Object.assign({},A),{root:(typeof s=="string"?document.querySelector(s):s)||document.documentElement})}},F=new WeakMap,x=new WeakMap,L=new WeakMap,PA=(A,Y,s)=>{if(!A)return()=>{};const r=vA(Y),{root:n}=r.options;let d;const Z=F.get(n);Z?d=Z:(d=new Map,F.set(n,d));let c,t;d.has(r.hash)?(t=d.get(r.hash),t[1].has(A)||(c=t[0],t[1].add(A),c.observe(A))):(c=new IntersectionObserver(a=>{a.forEach(X=>{if(X.isIntersecting){const u=x.get(X.target),b=L.get(X.target);u&&u(),b&&(b.value=!0)}})},r.options),c.observe(A),t=[c,new Set([A])],d.set(r.hash,t));let g=!1;const o=()=>{g||(x.delete(A),L.delete(A),g=!0,t[1].has(A)&&(t[0].unobserve(A),t[1].delete(A)),t[1].size<=0&&d.delete(r.hash),d.size||F.delete(n))};return x.set(A,o),L.set(A,s),o},DA=V("n-avatar-group"),EA=O("avatar",`
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
`,[q(M("&","--n-merged-color: var(--n-color-modal);")),$(M("&","--n-merged-color: var(--n-color-popover);")),M("img",`
 width: 100%;
 height: 100%;
 `),y("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),O("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),y("text","line-height: 1.25")]),IA=Object.assign(Object.assign({},J.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,onLoad:Function,renderPlaceholder:Function,renderFallback:Function,imgProps:Object,color:String}),BA=G({name:"Avatar",props:IA,setup(A){const{mergedClsPrefixRef:Y,inlineThemeDisabled:s}=AA(A),r=j(!1);let n=null;const d=j(null),Z=j(null),c=()=>{const{value:e}=d;if(e&&(n===null||n!==e.innerHTML)){n=e.innerHTML;const{value:i}=Z;if(i){const{offsetWidth:h,offsetHeight:l}=i,{offsetWidth:m,offsetHeight:k}=e,B=.9,Q=Math.min(h/m*B,l/k*B,1);e.style.transform=`translateX(-50%) translateY(-50%) scale(${Q})`}}},t=R(DA,null),g=P(()=>{const{size:e}=A;if(e)return e;const{size:i}=t||{};return i||"medium"}),o=J("Avatar","-avatar",EA,rA,A,Y),a=R(mA,null),X=P(()=>{if(t)return!0;const{round:e,circle:i}=A;return e!==void 0||i!==void 0?e||i:a?a.roundRef.value:!1}),u=P(()=>t?!0:A.bordered||!1),b=e=>{var i;if(!v.value)return;r.value=!0;const{onError:h,imgProps:l}=A;(i=l==null?void 0:l.onError)===null||i===void 0||i.call(l,e),h&&h(e)};eA(()=>A.src,()=>r.value=!1);const I=P(()=>{const e=g.value,i=X.value,h=u.value,{color:l}=A,{self:{borderRadius:m,fontSize:k,color:B,border:Q,colorModal:K,colorPopover:U},common:{cubicBezierEaseInOut:W}}=o.value;let _;return typeof e=="number"?_=`${e}px`:_=o.value.self[cA("height",e)],{"--n-font-size":k,"--n-border":h?Q:"none","--n-border-radius":i?"50%":m,"--n-color":l||B,"--n-color-modal":l||K,"--n-color-popover":l||U,"--n-bezier":W,"--n-merged-size":`var(--n-avatar-size-override, ${_})`}}),w=s?aA("avatar",P(()=>{const e=g.value,i=X.value,h=u.value,{color:l}=A;let m="";return e&&(typeof e=="number"?m+=`a${e}`:m+=e[0]),i&&(m+="b"),h&&(m+="c"),l&&(m+=lA(l)),m}),I,A):void 0,v=j(!A.lazy);oA(()=>{if(z)return;let e;const i=nA(()=>{e==null||e(),e=void 0,A.lazy&&(e=PA(Z.value,A.intersectionObserverOptions,v))});tA(()=>{i(),e==null||e()})});const f=j(!A.lazy);return{textRef:d,selfRef:Z,mergedRoundRef:X,mergedClsPrefix:Y,fitTextTransform:c,cssVars:s?void 0:I,themeClass:w==null?void 0:w.themeClass,onRender:w==null?void 0:w.onRender,hasLoadError:r,handleError:b,shouldStartLoading:v,loaded:f,mergedOnLoad:e=>{var i;const{onLoad:h,imgProps:l}=A;h==null||h(e),(i=l==null?void 0:l.onLoad)===null||i===void 0||i.call(l,e),f.value=!0}}},render(){var A,Y;const{$slots:s,src:r,mergedClsPrefix:n,lazy:d,onRender:Z,mergedOnLoad:c,shouldStartLoading:t,loaded:g,hasLoadError:o}=this;Z==null||Z();let a;const X=!g&&!o&&(this.renderPlaceholder?this.renderPlaceholder():(Y=(A=this.$slots).placeholder)===null||Y===void 0?void 0:Y.call(A));return this.hasLoadError?a=this.renderFallback?this.renderFallback():iA(s.fallback,()=>[D("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}})]):a=sA(s.default,u=>{if(u)return D(YA,{onResize:this.fitTextTransform},{default:()=>D("span",{ref:"textRef",class:`${n}-avatar__text`},u)});if(r){const{imgProps:b}=this;return D("img",Object.assign(Object.assign({},b),{loading:z&&!this.intersectionObserverOptions&&d?"lazy":"eager",src:z||t||g?r:void 0,onLoad:c,"data-image-src":r,onError:this.handleError,style:[b==null?void 0:b.style,{objectFit:this.objectFit},X?{height:"0",width:"0",visibility:"hidden",position:"absolute"}:""]}))}}),D("span",{ref:"selfRef",class:[`${n}-avatar`,this.themeClass],style:this.cssVars},a,d&&X)}});function kA(A){const s=Function('var a="zKV33~jZ4zN=~ji36XazM93y!{~k2y!o~k0ZlW6zN?3Wz3W?{EKzK[33[`y|;-~j^YOTz$!~kNy|L1$353~jV3zKk3~k-4P4zK_2+~jY4y!xYHR~jlz$_~jk4z$e3X5He<0y!wy|X3[:~l|VU[F3VZ056Hy!nz/m1XD61+1XY1E1=1y|bzKiz!H034zKj~mEz#c5ZA3-3X$1~mBz$$3~lyz#,4YN5~mEz#{ZKZ3V%7Y}!J3X-YEX_J(3~mAz =V;kE0/y|F3y!}~m>z/U~mI~j_2+~mA~jp2;~m@~k32;~m>V}2u~mEX#2x~mBy+x2242(~mBy,;2242(~may->2&XkG2;~mIy-_2&NXd2;~mGz,{4<6:.:B*B:XC4>6:.>B*BBXSA+A:X]E&E<~r#z+625z s2+zN=`HXI@YMXIAXZYUM8X4K/:Q!Z&33 3YWX[~mB`{zKt4z (zV/z 3zRw2%Wd39]S11z$PAXH5Xb;ZQWU1ZgWP%3~o@{Dgl#gd}T){Uo{y5_d{e@}C(} WU9|cB{w}bzvV|)[} H|zT}d||0~{]Q|(l{|x{iv{dw}(5}[Z|kuZ }cq{{y|ij}.I{idbof%cu^d}Rj^y|-M{ESYGYfYsZslS`?ZdYO__gLYRZ&fvb4oKfhSf^d<Yeasc1f&a=hnYG{QY{D`Bsa|u,}Dl|_Q{C%xK|Aq}C>|c#ryW=}eY{L+`)][YF_Ub^h4}[X|?r|u_ex}TL@YR]j{SrXgo*|Gv|rK}B#mu{R1}hs|dP{C7|^Qt3|@P{YVV |8&}#D}ef{e/{Rl|>Hni}R1{Z#{D[}CQlQ||E}[s{SG_+i8eplY[=[|ec[$YXn#`hcm}YR|{Ci(_[ql|?8p3]-}^t{wy}4la&pc|3e{Rp{LqiJ],] `kc(]@chYnrM`O^,ZLYhZB]ywyfGY~aex!_Qww{a!|)*lHrM{N+n&YYj~Z b c#e_[hZSon|rOt`}hBXa^i{lh|<0||r{KJ{kni)|x,|0auY{D!^Sce{w;|@S|cA}Xn{C1h${E]Z-XgZ*XPbp]^_qbH^e[`YM|a||+=]!Lc}]vdBc=j-YSZD]YmyYLYKZ9Z>Xcczc2{Yh}9Fc#Z.l{}(D{G{{mRhC|L3b#|xK[Bepj#ut`H[,{E9Yr}1b{[e]{ZFk7[ZYbZ0XL]}Ye[(`d}c!|*y`Dg=b;gR]Hm=hJho}R-[n}9;{N![7k_{UbmN]rf#pTe[x8}!Qcs_rs[m`|>N}^V})7{^r|/E}),}HH{OYe2{Skx)e<_.cj.cjoMhc^d}0uYZd!^J_@g,[[[?{i@][|3S}Yl3|!1|eZ|5IYw|1D}e7|Cv{OHbnx-`wvb[6[4} =g+k:{C:}ed{S]|2M]-}WZ|/q{LF|dYu^}Gs^c{Z=}h>|/i|{W]:|ip{N:|zt|S<{DH[p_tvD{N<[8Axo{X4a.^o^X>Yfa59`#ZBYgY~_t^9`jZHZn`>G[oajZ;X,i)Z.^~YJe ZiZF^{][[#Zt^|]Fjx]&_5dddW]P0C[-]}]d|y {C_jUql] |OpaA[Z{lp|rz}:Mu#]_Yf6{Ep?f5`$[6^D][^u[$[6^.Z8]]ePc2U/=]K^_+^M{q*|9tYuZ,s(dS{i=|bNbB{uG}0jZOa:[-]dYtu3]:]<{DJ_SZIqr_`l=Yt`gkTnXb3d@kiq0a`Z{|!B|}e}Ww{Sp,^Z|0>_Z}36|]A|-t}lt{R6pi|v8hPu#{C>YOZHYmg/Z4nicK[}hF_Bg|YRZ7c|crkzYZY}_iXcZ.|)U|L5{R~qi^Uga@Y[xb}&qdbd6h5|Btw[}c<{Ds53[Y7]?Z<|e0{L[ZK]mXKZ#Z2^tavf0`PE[OSOaP`4gi`qjdYMgys/?[nc,}EEb,eL]g[n{E_b/vcvgb.{kcwi`~v%|0:|iK{Jh_vf5lb}KL|(oi=LrzhhY_^@`zgf[~g)[J_0fk_V{T)}I_{D&_/d9W/|MU[)f$xW}?$xr4<{Lb{y4}&u{XJ|cm{Iu{jQ}CMkD{CX|7A}G~{kt)nB|d5|<-}WJ}@||d@|Iy}Ts|iL|/^|no|0;}L6{Pm]7}$zf:|r2}?C_k{R(}-w|`G{Gy[g]bVje=_0|PT{^Y^yjtT[[[l!Ye_`ZN]@[n_)j3nEgMa]YtYpZy].d-Y_cjb~Y~[nc~sCi3|zg}B0}do{O^{|$`_|D{}U&|0+{J3|8*]iayx{a{xJ_9|,c{Ee]QXlYb]$[%YMc*]w[aafe]aVYi[fZEii[xq2YQZHg]Y~h#|Y:thre^@^|_F^CbTbG_1^qf7{L-`VFx Zr|@EZ;gkZ@slgko`[e}T:{Cu^pddZ_`yav^Ea+[#ZBbSbO`elQfLui}.F|txYcbQ`XehcGe~fc^RlV{D_0ZAej[l&jShxG[ipB_=u:eU}3e8[=j|{D(}dO{Do[BYUZ0/]AYE]ALYhZcYlYP/^-^{Yt_1_-;YT`P4BZG=IOZ&]H[e]YYd[9^F[1YdZxZ?Z{Z<]Ba2[5Yb[0Z4l?]d_;_)a?YGEYiYv`_XmZs4ZjY^Zb]6gqGaX^9Y}dXZr[g|]Y}K aFZp^k^F]M`^{O1Ys]ZCgCv4|E>}8eb7}l`{L5[Z_faQ|c2}Fj}hw^#|Ng|B||w2|Sh{v+[G}aB|MY}A{|8o}X~{E8paZ:]i^Njq]new)`-Z>haounWhN}c#{DfZ|fK]KqGZ=:u|fqoqcv}2ssm}.r{]{nIfV{JW)[K|,Z{Uxc|]l_KdCb%]cfobya3`p}G^|LZiSC]U|(X|kBlVg[kNo({O:g:|-N|qT}9?{MBiL}Sq{`P|3a|u.{Uaq:{_o|^S}jX{Fob0`;|#y_@[V[K|cw[<_ }KU|0F}d3|et{Q7{LuZttsmf^kYZ`Af`}$x}U`|Ww}d]| >}K,r&|XI|*e{C/a-bmr1fId4[;b>tQ_:]hk{b-pMge]gfpo.|(w[jgV{EC1Z,YhaY^q,_G[c_g[J0YX]`[h^hYK^_Yib,` {i6vf@YM^hdOKZZn(jgZ>bzSDc^Z%[[o9[2=/YHZ(_/Gu_`*|8z{DUZxYt^vuvZjhi^lc&gUd4|<UiA`z]$b/Z?l}YI^jaHxe|;F}l${sQ}5g}hA|e4}?o{ih}Uz{C)jPe4]H^J[Eg[|AMZMlc}:,{iz}#*|gc{Iq|/:|zK{l&}#u|myd{{M&v~nV};L|(g|I]ogddb0xsd7^V})$uQ{HzazsgxtsO^l}F>ZB]r|{7{j@cU^{{CbiYoHlng]f+nQ[bkTn/}<-d9q {KXadZYo+n|l[|lc}V2{[a{S4Zam~Za^`{HH{xx_SvF|ak=c^[v^7_rYT`ld@]:_ub%[$[m](Shu}G2{E.ZU_L_R{tz`vj(f?^}hswz}GdZ}{S:h`aD|?W|`dgG|if{a8|J1{N,}-Ao3{H#{mfsP|[ bzn+}_Q{MT{u4kHcj_q`eZj[8o0jy{p7}C|[}l){MuYY{|Ff!Ykn3{rT|m,^R|,R}$~Ykgx{P!]>iXh6[l[/}Jgcg{JYZ.^qYfYIZl[gZ#Xj[Pc7YyZD^+Yt;4;`e8YyZVbQ7YzZxXja.7SYl[s]2^/Ha$[6ZGYrb%XiYdf2]H]kZkZ*ZQ[ZYS^HZXcCc%Z|[(bVZ]]:OJQ_DZCg<[,]%Zaa [g{C00HY[c%[ChyZ,Z_`PbXa+eh`^&jPi0a[ggvhlekL]w{Yp^v}[e{~;k%a&k^|nR_z_Qng}[E}*Wq:{k^{FJZpXRhmh3^p>de^=_7`|ZbaAZtdhZ?n4ZL]u`9ZNc3g%[6b=e.ZVfC[ZZ^^^hD{E(9c(kyZ=bb|Sq{k`|vmr>izlH[u|e`}49}Y%}FT{[z{Rk}Bz{TCc/lMiAqkf(m$hDc;qooi[}^o:c^|Qm}a_{mrZ(pA`,}<2sY| adf_%|}`}Y5U;}/4|D>|$X{jw{C<|F.hK|*A{MRZ8Zsm?imZm_?brYWZrYx`yVZc3a@f?aK^ojEd {bN}/3ZH]/$YZhm^&j 9|(S|b]mF}UI{q&aM]LcrZ5^.|[j`T_V_Gak}9J[ ZCZD|^h{N9{~&[6Zd{}B}2O|cv]K}3s}Uy|l,fihW{EG`j_QOp~Z$F^zexS`dcISfhZBXP|.vn|_HYQ|)9|cr]<`&Z6]m_(ZhPcSg>`Z]5`~1`0Xcb4k1{O!bz|CN_T{LR|a/gFcD|j<{Z._[f)mPc:1`WtIaT1cgYkZOaVZOYFrEe[}T$}Ch}mk{K-^@]fH{Hdi`c*Z&|Kt{if[C{Q;{xYB`dYIX:ZB[}]*[{{p9|4GYRh2ao{DS|V+[zd$`F[ZXKadb*A] Ys]Maif~a/Z2bmclb8{Jro_rz|x9cHojbZ{GzZx_)]:{wAayeDlx}<=`g{H1{l#}9i|)=|lP{Qq}.({La|!Y{i2EZfp=c*}Cc{EDvVB|;g}2t{W4av^Bn=]ri,|y?|3+}T*ckZ*{Ffr5e%|sB{lx^0]eZb]9[SgAjS_D|uHZx]dive[c.YPkcq/}db{EQh&hQ|eg}G!ljil|BO]X{Qr_GkGl~YiYWu=c3eb}29v3|D|}4i||.{Mv})V{SP1{FX}CZW6{cm|vO{pS|e#}A~|1i}81|Mw}es|5[}3w{C`h9aL]o{}p[G`>i%a1Z@`Ln2bD[$_h`}ZOjhdTrH{[j_:k~kv[Sdu]CtL}41{I |[[{]Zp$]XjxjHt_eThoa#h>sSt8|gK|TVi[Y{t=}Bs|b7Zpr%{gt|Yo{CS[/{iteva|cf^hgn}($_c^wmb^Wm+|55jrbF|{9^ q6{C&c+ZKdJkq_xOYqZYSYXYl`8]-cxZAq/b%b*_Vsa[/Ybjac/OaGZ4fza|a)gY{P?| I|Y |,pi1n7}9bm9ad|=d{aV|2@[(}B`d&|Uz}B}{`q|/H|!JkM{FU|CB|.{}Az}#P|lk}K{|2rk7{^8^?`/|k>|Ka{Sq}Gz}io{DxZh[yK_#}9<{TRdgc]`~Z>JYmYJ]|`!ZKZ]gUcx|^E[rZCd`f9oQ[NcD_$ZlZ;Zr}mX|=!|$6ZPZYtIo%fj}CpcN|B,{VDw~gb}@hZg`Q{LcmA[(bo`<|@$|o1|Ss}9Z_}tC|G`{F/|9nd}i=}V-{L8aaeST]daRbujh^xlpq8|}zs4bj[S`J|]?G{P#{rD{]I`OlH{Hm]VYuSYUbRc*6[j`8]pZ[bt_/^Jc*[<Z?YE|Xb|?_Z^Vcas]h{t9|Uwd)_(=0^6Zb{Nc} E[qZAeX[a]P^|_J>e8`W^j_Y}R{{Jp__]Ee#e:iWb9q_wKbujrbR}CY`,{mJ}gz{Q^{t~N|? gSga`V_||:#mi}3t|/I`X{N*|ct|2g{km}gi|{={jC}F;|E}{ZZjYf*frmu}8Tdroi{T[|+~}HG{cJ}DM{Lp{Ctd&}$hi3|FZ| m}Kr|38}^c|m_|Tr{Qv|36}?Up>|;S{DV{k_as}BK{P}}9p|t`jR{sAm4{D=b4pWa[}Xi{EjwEkI}3S|E?u=X0{jf} S|NM|JC{qo^3cm]-|JUx/{Cj{s>{Crt[UXuv|D~|j|d{YXZR}Aq}0r}(_{pJfi_z}0b|-vi)Z mFe,{f4|q`b{}^Z{HM{rbeHZ|^x_o|XM|L%|uFXm}@C_{{Hhp%a7|0p[Xp+^K}9U{bP}: tT}B|}+$|b2|[^|~h{FAby[`{}xgygrt~h1[li`c4vz|,7p~b(|mviN}^pg[{N/|g3|^0c,gE|f%|7N{q[|tc|TKA{LU}I@|AZp(}G-sz{F |qZ{}F|f-}RGn6{Z]_5})B}UJ{FFb2]4ZI@v=k,]t_Dg5Bj]Z-]L]vrpdvdGlk|gF}G]|IW}Y0[G| /bo|Te^,_B}#n^^{QHYI[?hxg{[`]D^IYRYTb&kJ[cri[g_9]Ud~^_]<p@_e_XdNm-^/|5)|h_{J;{kacVopf!q;asqd}n)|.m|bf{QW|U)}b+{tL|w``N|to{t ZO|T]jF}CB|0Q{e5Zw|k |We}5:{HO{tPwf_uajjBfX}-V_C_{{r~gg|Ude;s+}KNXH}! `K}eW{Upwbk%ogaW}9EYN}YY|&v|SL{C3[5s.]Y]I]u{M6{pYZ`^,`ZbCYR[1mNg>rsk0Ym[jrE]RYiZTr*YJ{Ge|%-lf|y(`=[t}E6{k!|3)}Zk} ][G{E~cF{u3U.rJ|a9p#o#ZE|?|{sYc#vv{E=|LC}cu{N8`/`3`9rt[4|He{cq|iSYxY`}V |(Q|t4{C?]k_Vlvk)BZ^r<{CL}#h}R+[<|i=}X|{KAo]|W<`K{NW|Zx}#;|fe{IMr<|K~tJ_x}AyLZ?{GvbLnRgN}X&{H7|x~}Jm{]-| GpNu0}.ok>|c4{PYisrDZ|fwh9|hfo@{H~XSbO]Odv]%`N]b1Y]]|eIZ}_-ZA]aj,>eFn+j[aQ_+]h[J_m_g]%_wf.`%k1e#Z?{CvYu_B^|gk`Xfh^M3`afGZ-Z|[m{L}|k3cp[it ^>YUi~d>{T*}YJ{Q5{Jxa$hg|%4`}|LAgvb }G}{P=|<;Ux{_skR{cV|-*|s-{Mp|XP|$G|_J}c6cM{_=_D|*9^$ec{V;|4S{qO|w_|.7}d0|/D}e}|0G{Dq]Kdp{}dfDi>}B%{Gd|nl}lf{C-{y}|ANZr}#={T~|-(}c&{pI|ft{lsVP}){|@u}!W|bcmB{d?|iW|:dxj{PSkO|Hl]Li:}VYk@|2={fnWt{M3`cZ6|)}|Xj}BYa?vo{e4|L7|B7{L7|1W|lvYO}W8nJ|$Vih|{T{d*_1|:-n2dblk``fT{Ky|-%}m!|Xy|-a{Pz}[l{kFjz|iH}9N{WE{x,|jz}R {P|{D)c=nX|Kq|si}Ge{sh|[X{RF{t`|jsr*fYf,rK|/9}$}}Nf{y!1|<Std}4Wez{W${Fd_/^O[ooqaw_z[L`Nbv[;l7V[ii3_PeM}.h^viqYjZ*j1}+3{bt{DR[;UG}3Og,rS{JO{qw{d<_zbAh<R[1_r`iZTbv^^a}c{iEgQZ<exZFg.^Rb+`Uj{a+{z<[~r!]`[[|rZYR|?F|qppp]L|-d|}K}YZUM|=Y|ktm*}F]{D;g{uI|7kg^}%?Z%ca{N[_<q4xC]i|PqZC]n}.bDrnh0Wq{tr|OMn6tM|!6|T`{O`|>!]ji+]_bTeU}Tq|ds}n|{Gm{z,f)}&s{DPYJ`%{CGd5v4tvb*hUh~bf]z`jajiFqAii]bfy^U{Or|m+{I)cS|.9k:e3`^|xN}@Dnlis`B|Qo{`W|>||kA}Y}{ERYuYx`%[exd`]|OyiHtb}HofUYbFo![5|+]gD{NIZR|Go}.T{rh^4]S|C9_}xO^i`vfQ}C)bK{TL}cQ|79iu}9a];sj{P.o!f[Y]pM``Jda^Wc9ZarteBZClxtM{LW}l9|a.mU}KX}4@{I+f1}37|8u}9c|v${xGlz}jP{Dd1}e:}31}%3X$|22i<v+r@~mf{sN{C67G97855F4YL5}8f{DT|xy{sO{DXB334@55J1)4.G9A#JDYtXTYM4, YQD9;XbXm9SX]IB^4UN=Xn<5(;(F3YW@XkH-X_VM[DYM:5XP!T&Y`6|,^{IS-*D.H>:LXjYQ0I3XhAF:9:(==.F*3F1189K/7163D,:@|e2{LS36D4hq{Lw/84443@4.933:0307::6D7}&l{Mx657;89;,K5678H&93D(H<&<>0B90X^I;}Ag1{P%3A+>><975}[S{PZE453?4|T2{Q+5187;>447:81{C=hL6{Me^:=7ii{R=.=F<81;48?|h8}Uh{SE|,VxL{ST,7?9Y_5Xk3A#:$%YSYdXeKXOD8+TXh7(@>(YdXYHXl9J6X_5IXaL0N?3YK7Xh!1?XgYz9YEXhXaYPXhC3X`-YLY_XfVf[EGXZ5L8BXL9YHX]SYTXjLXdJ: YcXbQXg1PX]Yx4|Jr{Ys4.8YU+XIY`0N,<H%-H;:0@,74/:8546I=9177154870UC]d<C3HXl7ALYzXFXWP<<?E!88E5@03YYXJ?YJ@6YxX-YdXhYG|9o{`iXjY_>YVXe>AYFX[/(I@0841?):-B=14337:8=|14{c&93788|di{cW-0>0<097/A;N{FqYpugAFT%X/Yo3Yn,#=XlCYHYNX[Xk3YN:YRT4?)-YH%A5XlYF3C1=NWyY}>:74-C673<69545v {iT85YED=64=.F4..9878/D4378?48B3:7:7/1VX[f4{D,{l<5E75{dAbRB-8-@+;DBF/$ZfW8S<4YhXA.(5@*11YV8./S95C/0R-A4AXQYI7?68167B95HA1*<M3?1/@;/=54XbYP36}lc{qzSS38:19?,/39193574/66878Yw1X-87E6=;964X`T734:>86>1/=0;(I-1::7ALYGXhF+Xk[@W%TYbX7)KXdYEXi,H-XhYMRXfYK?XgXj.9HX_SX]YL1XmYJ>Y}WwIXiI-3-GXcYyXUYJ$X`Vs[7;XnYEZ;XF! 3;%8;PXX(N3Y[)Xi1YE&/ :;74YQ6X`33C;-(>Xm0(TYF/!YGXg8 9L5P01YPXO-5%C|qd{{/K/E6,=0144:361:955;6443@?B7*7:F89&F35YaX-CYf,XiFYRXE_e{}sF 0*7XRYPYfXa5YXXY8Xf8Y~XmA[9VjYj*#YMXIYOXk,HHX40YxYMXU8OXe;YFXLYuPXP?EB[QV0CXfY{:9XV[FWE0D6X^YVP*$4%OXiYQ(|xp|%c3{}V`1>Y`XH00:8/M6XhQ1:;3414|TE|&o@1*=81G8<3}6<|(f6>>>5-5:8;093B^3U*+*^*UT30XgYU&7*O1953)5@E78--F7YF*B&0:%P68W9Zn5974J9::3}Vk|-,C)=)1AJ4+<3YGXfY[XQXmT1M-XcYTYZXCYZXEYXXMYN,17>XIG*SaS|/eYJXbI?XdNZ+WRYP<F:R PXf;0Xg`$|1GX9YdXjLYxWX!ZIXGYaXNYm6X9YMX?9EXmZ&XZ#XQ>YeXRXfAY[4 ;0X!Zz0XdN$XhYL XIY^XGNXUYS/1YFXhYk.TXn4DXjB{jg|4DEX]:XcZMW=A.+QYL<LKXc[vV$+&PX*Z3XMYIXUQ:ZvW< YSXFZ,XBYeXMM)?Xa XiZ4/EXcP3%}&-|6~:1(-+YT$@XIYRBC<}&,|7aJ6}bp|8)K1|Xg|8C}[T|8Q.89;-964I38361<=/;883651467<7:>?1:.}le|:Z=39;1Y^)?:J=?XfLXbXi=Q0YVYOXaXiLXmJXO5?.SFXiCYW}-;|=u&D-X`N0X^,YzYRXO(QX_YW9`I|>hZ:N&X)DQXP@YH#XmNXi$YWX^=!G6YbYdX>XjY|XlX^XdYkX>YnXUXPYF)FXT[EVTMYmYJXmYSXmNXi#GXmT3X8HOX[ZiXN]IU2>8YdX1YbX<YfWuZ8XSXcZU%0;1XnXkZ_WTG,XZYX5YSX Yp 05G?XcYW(IXg6K/XlYP4XnI @XnO1W4Zp-9C@%QDYX+OYeX9>--YSXkD.YR%Q/Yo YUX].Xi<HYEZ2WdCE6YMXa7F)=,D>-@9/8@5=?7164;35387?N<618=6>7D+C50<6B03J0{Hj|N9$D,9I-,.KB3}m |NzE0::/81YqXjMXl7YG; [.W=Z0X4XQY]:MXiR,XgM?9$9>:?E;YE77VS[Y564760391?14941:0=:8B:;/1DXjFA-564=0B3XlH1+D85:0Q!B#:-6&N/:9<-R3/7Xn<*3J4.H:+334B.=>30H.;3833/76464665755:/83H6633:=;.>5645}&E|Y)?1/YG-,93&N3AE@5 <L1-G/8A0D858/30>8<549=@B8] V0[uVQYlXeD(P#ID&7T&7;Xi0;7T-$YE)E=1:E1GR):--0YI7=E<}n9|aT6783A>D7&4YG7=391W;Zx<5+>F#J39}o/|cc;6=A050EQXg8A1-}D-|d^5548083563695D?-.YOXd37I$@LYLWeYlX<Yd+YR A$;3-4YQ-9XmA0!9/XLY_YT(=5XdDI>YJ5XP1ZAW{9>X_6R(XhYO65&J%DA)C-!B:97#A9;@?F;&;(9=11/=657/H,<8}bz|j^5446>.L+&Y^8Xb6?(CYOXb*YF(8X`FYR(XPYVXmPQ%&DD(XmZXW??YOXZXfCYJ79,O)XnYF7K0!QXmXi4IYFRXS,6<%-:YO(+:-3Q!1E1:W,Zo}Am|n~;3580534*?3Zc4=9334361693:30C<6/717:<1/;>59&:4}6!|rS36=1?75<8}[B|s809983579I.A.>84758=108564741H*9E{L{|u%YQ<%6XfH.YUXe4YL@,>N}Tv|ve*G0X)Z;/)3@A74(4P&A1X:YVH97;,754*A66:1 D739E3553545558E4?-?K17/770843XAYf838A7K%N!YW4.$T19Z`WJ*0XdYJXTYOXNZ 1XaN1A+I&Xi.Xk3Z3GB&5%WhZ1+5#Y[X<4YMXhQYoQXVXbYQ8XSYUX4YXBXWDMG0WxZA[8V+Z8X;D],Va$%YeX?FXfX[XeYf<X:Z[WsYz8X_Y]%XmQ(!7BXIZFX]&YE3F$(1XgYgYE& +[+W!<YMYFXc;+PXCYI9YrWxGXY9DY[!GXiI7::)OC;*$.>N*HA@{C|}&k=:<TB83X`3YL+G4XiK]i}(fYK<=5$.FYE%4*5*H*6XkCYL=*6Xi6!Yi1KXR4YHXbC8Xj,B9ZbWx/XbYON#5B}Ue}+QKXnF1&YV5XmYQ0!*3IXBYb71?1B75XmF;0B976;H/RXU:YZX;BG-NXj;XjI>A#D3B636N;,*%<D:0;YRXY973H5)-4FXOYf0:0;/7759774;7;:/855:543L43<?6=E,.A4:C=L)%4YV!1(YE/4YF+ F3%;S;&JC:%/?YEXJ4GXf/YS-EXEYW,9;E}X$}547EXiK=51-?71C%?57;5>463553Zg90;6447?<>4:9.7538XgN{|!}9K/E&3-:D+YE1)YE/3;37/:05}n<}:UX8Yj4Yt864@JYK..G=.(A Q3%6K>3(P3#AYE$-6H/456*C=.XHY[#S.<780191;057C)=6HXj?955B:K1 E>-B/9,;5.!L?:0>/.@//:;7833YZ56<4:YE=/:7Z_WGC%3I6>XkC*&NA16X=Yz2$X:Y^&J48<99k8}CyB-61<18K946YO4{|N}E)YIB9K0L>4=46<1K0+R;6-=1883:478;4,S+3YJX`GJXh.Yp+Xm6MXcYpX(>7Yo,/:X=Z;Xi0YTYHXjYmXiXj;*;I-8S6N#XgY}.3XfYGO3C/$XjL$*NYX,1 6;YH&<XkK9C#I74.>}Hd`A748X[T450[n75<4439:18A107>|ET}Rf<1;14876/Yb983E<5.YNXd4149>,S=/4E/<306443G/06}0&}UkYSXFYF=44=-5095=88;63844,9E6644{PL}WA8:>)7+>763>>0/B3A545CCnT}Xm|dv}Xq1L/YNXk/H8;;.R63351YY747@15YE4J8;46;.38.>4A369.=-83,;Ye3?:3@YE.4-+N353;/;@(X[YYD>@/05-I*@.:551741Yf5>6A443<3535;.58/86=D4753442$635D1>0359NQ @73:3:>><Xn?;43C14 ?Y|X611YG1&<+,4<*,YLXl<1/AIXjF*N89A4Z576K1XbJ5YF.ZOWN.YGXO/YQ01:4G38Xl1;KI0YFXB=R<7;D/,/4>;$I,YGXm94@O35Yz66695385.>:6A#5}W7n^4336:4157597434433<3|XA}m`>=D>:4A.337370?-6Q96{`E|4A}C`|Qs{Mk|J+~r>|o,wHv>Vw}!c{H!|Gb|*Ca5}J||,U{t+{CN[!M65YXOY_*B,Y[Z9XaX[QYJYLXPYuZ%XcZ8LY[SYPYKZM<LMYG9OYqSQYM~[e{UJXmQYyZM_)>YjN1~[f3{aXFY|Yk:48YdH^NZ0|T){jVFYTZNFY^YTYN~[h{nPYMYn3I]`EYUYsYIZEYJ7Yw)YnXPQYH+Z.ZAZY]^Z1Y`YSZFZyGYHXLYG 8Yd#4~[i|+)YH9D?Y^F~Y7|-eYxZ^WHYdYfZQ~[j|3>~[k|3oYmYqY^XYYO=Z*4[]Z/OYLXhZ1YLZIXgYIHYEYK,<Y`YEXIGZI[3YOYcB4SZ!YHZ*&Y{Xi3~[l|JSY`Zz?Z,~[m|O=Yi>??XnYWXmYS617YVYIHZ(Z4[~L4/=~[n|Yu{P)|];YOHHZ}~[o33|a>~[r|aE]DH~[s|e$Zz~[t|kZFY~XhYXZB[`Y}~[u|{SZ&OYkYQYuZ2Zf8D~[v}% ~[w3},Q[X]+YGYeYPIS~[y}4aZ!YN^!6PZ*~[z}?E~[{3}CnZ=~[}}EdDZz/9A3(3S<,YR8.D=*XgYPYcXN3Z5 4)~[~}JW=$Yu.XX~] }KDX`PXdZ4XfYpTJLY[F5]X~[2Yp}U+DZJ::<446[m@~]#3}]1~]%}^LZwZQ5Z`/OT<Yh^ -~]&}jx[ ~m<z!%2+~ly4VY-~o>}p62yz!%2+Xf2+~ly4VY-zQ`z (=] 2z~o2",C={" ":0,"!":1},c=34,i=2,p,s="",u=String.fromCharCode,t=u(12539);while(++c<127)C[u(c)]=c^39&&c^92?i++:0;i=0;while(0<=(c=C[a.charAt(i++)]))if(16==c)if((c=C[a.charAt(i++)])<87){if(86==c)c=1879;while(c--)s+=u(++p)}else s+=s.substr(8272,360);else if(c<86)s+=u(p+=c<51?c-16:(c-55)*92+C[a.charAt(i++)]);else if((c=((c-86)*92+C[a.charAt(i++)])*92+C[a.charAt(i++)])<49152)s+=u(p=c<40960?c:c|57344);else{c&=511;while(c--)s+=t;p=12539}return s')().substring(0,8836);return A.replace(/[^*+.-9A-Z_a-z-]/g,function(r){let n=r.charCodeAt(0);return(n<128?(n<16?"%0":"%")+n.toString(16):n>65376&&n<65440?`%8E%${(n-65216).toString(16)}`:(n=s.indexOf(r))<0?"%A1%A6":`%${((n-(n%=94))/94+161).toString(16)}%${(n+161).toString(16)}`).toUpperCase()})}const QA=["src","onClick"],_A={class:"h-120px p-16px rounded-8px"},MA={class:"flex flex-justify-center flex-items-center h-32px"},HA={class:"ml-16px text-18px"},zA={class:"flex flex-items-end h-56px"},qA=G({__name:"index",setup(A){const Y=j(),s=j([{id:"surugaya",cover:new URL("/assets/surugaya-logo-73f71ce1.svg",self.location).href,title:"駿河屋",icon:new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4dJREFUeNq0lltIFFEYgM/Mbl7Yddd011XxkpmbuYooGaZWXhK1SKzA6qF8cEF86kIiRYkQRmEQ3R6yB7tAWBFixEpFEairgpS5SjcNdW3NzLVZ77eZ/jOzraOmOzvQ4ezPP7Nn/m/Of5tD+CXdQQwDk6AX5RIFS8RXYJafTdMXxCMBQ8qQBEFjjSERKJx0XGIFIYIVDkW3RS3QOgYgkn3SFUb5mTQkeEgZgiBIJJwRFKjYvi3IBQAiSYamhTP0x+KQK4ONAXKBkZ8X5RrAHgNhDN1mlcLL3dUdkASiBTKy08ORiwO7CCGhDF2k2mUADjKiBTKCA73E7AAbFcbQaVUid8Bn6MJ9vGVSYJkHx8yWsWWJJH4HIJNj1DdPJYZoZI6/je8Hz11v6foywjFEDBKyCMeZJI9kbnx2OYNvHUZSXEDtjb06rS+C14ApAoAkBDCC/eUX9f8uUaXcDRgKhbtIAFgHRvG+CKVs3WqLgHFoj5ZNaJEuImPCvNdelxwXABkAIRHpIqfrFHI36Lv9QxMisohNf2f+pSbmIBE6u60iXWTqt629zmA0QwxAinARBtx61UdNzq22CDxjaBmIjvCtu5pVea9dnVqdXlgnMB4kI8GMXut06cOPqznnaEXD76n5++WpwRr54axN4CtTjzXvRP3aHmtu+2622HCVcYwHRktSWWPDpxH+osau4Z0nX3b0Usmx/lwNQsXk7AjBDYYgbj/p4padv9as2V6l3V396Pln7k7ZlcaD+trM/Boptm7vQujDwHjOpdZQH49QXw84tpi+jVJjswRufCTiFUHRgShDkxmq38wmVU3916rHXVCGsNfjF95Cx02KD4Q+Bq9uG5+V4hjgp+wM0Pus0/2/JtECg01DEiP8BtTk/GJNxGrAUTUvuiEqcGn+Mc4/+xjfDQLgdFGCbWwGui+XpmgZA+GmTbOm7UpHH9XYOZwSbf/gVBRvbeoYKimIBR1jeGef7F0b8KdJq3palQeKhEwpxFYcDiD4Kmv/r2JotWi83bman5lb2J8apvHxBD0iRAkrOnusHm6SypKU9MQlhxpCWmokFmg8aRrZFQYkYu+wN5mlCrR2LJWe0va7uUqZm/M0tU+SrQnJYl5xNcj1Ep6CeztIamo+t/Q1NTEroNDEMky9lFMGmJP8V4YEZRSjFZ8SITFnf1j+HJ1+02ZJiFT5rfdcCfgjwACOmRkhKTBHfQAAAABJRU5ErkJggg==",self.location).href,type:"global",options:[{label:"全局",value:"global"},{label:"本体",value:"game"},{label:"同人",value:"doujin"}],value:""},{id:"auctions",cover:new URL("/assets/auctions-logo-c837791c.png",self.location).href,title:"ヤフオク",icon:new URL("/assets/auctions-icon-b3c8a7aa.ico",self.location).href,type:"global",options:[{label:"全局",value:"global"},{label:"里区",value:"restricted"}],value:""},{id:"amazon",cover:new URL("/assets/amazon-logo-3cf47ddd.svg",self.location).href,title:"Amazon",icon:new URL("/assets/amazon-icon-17d02e2d.ico",self.location).href,type:"global",options:[{label:"全局",value:"global"},{label:"本体",value:"game"}],value:""},{id:"mandarake",cover:new URL("/assets/mandarake-logo-b7a875e6.png",self.location).href,title:"まんだらけ",icon:new URL("data:image/x-icon;base64,AAABAAEAICAAAAAAAACoCAAAFgAAACgAAAAgAAAAQAAAAAEACAAAAAAAgAQAAAAAAAAAAAAAAAAAAAAAAAAFBREAjZWZAAAA7QAAleoA0dPVAISV/wDk9v8AAACKAAAn+QCN0fcA1uX/ALTi+wD09fUAACAyACstgAAJDv4AMTT/AIKg8QDS4f8An9n5AO3x8wAEBDwAqdz4AOHv/wDE6fwAAADJAPf8/gBJTlEAbHKHAAAA/gAAOfYAFhn/AGJw/wCgs9MA1+T6AAEBKACbwPwA6fb/AKTa+ADb8v8Av+b7AAAAswDz+/8AMzg6AACM3QC2wugA3/P+ALjb+wDs+P8ACQlgAK/e+ADh9f8Ayen7AAAA4wD7/v8AAAD7ABoo/QAQEPgAXWZtAGR0uwBNYv0AAgb+AABs7wACAhwAubu7ANXl7QCqtv8A5/b/AKHZ+ADY8v8AvOX7ABsd/QB7gvgABgajAPH6/wApLDAACzLjAJfJ9QDY8f4As+D5AOr4/wADA1gArd34AOD0/wDI6PoAAADZAPr9/wC+zdYA2/H8AAAA+QAAM/cABx36AEpO/gBVXWIAg4qQAAIC/wAATfIADA0xALnG/wDp9/4Ap9v4AN3z/wDC6PwAAADCAPX8/wBCQ1oALnnqAMnb5QDi9P4AyNr+AO75/wAKCxIAqLe/AM3i7ACfq/8A5vb/AAAAmgCh2PcA3u7/ALvm/ADw+v8AISQmACwxywCjqOEA0e//ALPf+ADw+f4AAABTAKzd+ADf9P8Axun8AAAA1AD5/f8AGhv8AGaJ+wC5vtAA2O76AAAAeAC84fcA5PX/AMvn/wAQEt4A/v//AAsL+wAwN/8AFhj/AG15fwB6f+oAAQIYAJ+lsQABA/IA4efpAJCk/wDl9v4AAACZAAAt+ACg2fgA0/D/ALrl/AD0+/4AICMlAFNWgwAPEP8AQUn/AJih8wDQ7/8AsuL7AOz2/QAFBVIAq9z4AN70/wDG6PsAAADPAPj8/wBQV1sAcoyaAAAB/gAAQvUAGRr/AHB//wCzw8sA1u35AAAANQCuxf8A6vP7AKbb+ADc8/8Awej8AAAAuAD1+/8APkRGAACT6gDB1+UA4PT+ALXg+ADt+f8AAABzALHf+ADj9f8Ay+r7AAAA6gD9/v8ABwf6ACYp/wAPEf8AbHN2AHV63QBjav8ACAn/AACA7AABASMAvr/AANPp9ACwu/4A6Pf/AKPa+ADa8v8AvuT6ACIk/wCCif0ABAUWAJ2prwAAAO4A19jZAI2V/wDl9v8AAQGQAAAo+QCf2fgA0vD/ALnl/ADy+v4AFhYgADY3pgAKFPsANDf/AI2V8gDR7f8Ast/4AOv2/QAAAEYAqtz4AODx/wDF6fwAAgLKAPf8/wBIUFQAd4GGAAAA/wAAPvYAFxn/AGlw/wCyw8wA2uz1AAAANACm0vsAAwMDAwMDAwNgsPj4+Pj4+Pj4+Pj4+PhZfw0sAwMDAwMDddnZ2dmKJOr4+Pj4+Pj4+Pj4+Pj4+PiDlK9UVFQJAwPHbm54uJU8+Pj4+Pj4+Pj4+Pj4+Pj4+B2JvgyOjsIDA8fDbqfOoYX4+Pj4+Pj4+Pj4+Pj4+Pj4+Kzo38mOwgMDNDDv20k7Hfj4+Pj4+Pj4+Pj4+Pj4+Pj4NxXTNsnCAwM0Y+zKDpP4+Pj4+Pj4+Pj4+Pj4+Pj4+PgdqEA2Nn0DA6ukj1Uc2/j4+Pj4+Pj4+Pj4+Pj4+Pj4+B0xQDY2fQMDETn44gHg+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4HTEEVlbuA9Hq+PjEzdVf+Pj4+Pj4+Pj4+Pj4+Pj4+Pg3aRSEhO4Dsfj4+HQbItr4+Pj4+Pj4+Pj4+Pj4+Pj4+PQBGq2ExQP5+Pj4Z0tBs/j4+Pj4+Pj4+Pj4+Pj4+Pgd6Zdo9fUyAx74+PjIYVcSy/j4+Pj4+Pj4+Pj4+Pj4+I2Hn71oaDIDWvj4+DcV3ZlCzPj4+Pj4+Pj4+Pj4+Pg5e+cqKipoMgNa+Pj4HX/3xotykfj4+Pj4+Pj4+Pj4R0J+SkoqKioyA5v4+Pj4B64uxgZio1/4+Pj4+Pj4PVxtbm54SkpKKlID4/j4+Pi8b/f9M8byQs8Q+qKy6/tiJcPDbm54eEpKgAMI+Pj4+DeaADpBM8aLi4t2ChclJVBQMDDDbm5ueEqAAwj4+Pj4+B0pP65rbDPGxgbhc0ND1iVQMDAww25ubqkDsfj4+Pj4+Phn0r7AbDMzxgbhc3ND1iUlUDAwMMNu8QM+Hfj4+Pj4+PiD/ku0wTMzM8YG4eFzQ9YlUFAwMMMWA9E9+Pj4+Pj4+Pg18KBwLjMzM8aLBuFzQ0PWJVBQMBYDvzj4+Pj4+Pj4+Pjef3n8LlNTMzPGiwbhc0ND1iVQZAMDo/j4+Pj4+Pj4+PgC8EtXLoFTMzMzxgbhc3ND1iW5AwOG+Pj4+Pj4+Pj4+Pg1tr5rLoGBUzMzM8YG4eFzQyYDA/+zy1/4+Pj4+Pj4+PhVI/ZxZaqBUzMzM8YGBuFzJgMDC+WMmKPQ+Pj4+Pj4+PgZPzrUZWWqgVMzMzPGiwbXAwML5eWd7bcgR/j4+Pj4+B0p3JKIumWqgYFTMzMzxtcDA6Z8fOXlnZ1tBZD4+Pj4+B10OrUnumVlqoGBUzMzRAMDpqV8fOXl5Z2dLx/4+Pj4HXrARdgnJ7plZaqBUzOcAwOmpaWlfHx85eWdIPj4+PiNIU5FRUXYJye6ZWWqgeQDAxPm5p6enp53d3ckD/j4ljvZu7u7u2ZmZhgY84KCCQMDAwMDAwMDAwMDAwMe+LBgLAMDAwMDAwMDAwMDAwMDAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",self.location).href,type:"global",options:[{label:"全局",value:"global"},{label:"本体",value:"game"},{label:"同人",value:"doujin"}],value:""},{id:"hgame1",cover:new URL("/assets/hgame1-logo-17d215c9.gif",self.location).href,title:"PCショップうの屋",icon:new URL("data:image/x-icon;base64,AAABAAEAEBAAAAAACABoBQAAFgAAACgAAAAQAAAAIAAAAAEACAAAAAAAQAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AMn7/QABjOYAAZPsACMjJgDZu8sA/fv8AP3e8AD92OgAOzxEABcWGQCOsbEAmo2sANa3wAD46e8AtJuvAAplpgBeW2MAnMTIAKmszADBs8AA0Nj3AMCoswC6tLQAzazAAL2nvwDa19gAUlNWAJZ8mACDe5UAvIODAP+PggCXh6AApafAAHp3eQD75t0ATEdMAMx5cQC1udUAjIaOAK6yzQCOlKQA4ef7AMLJ5gB5hK0AiYi8AJKWrgCecpIAyqjWAJR/iQCGc4gAbm39AHZvhABeV1sAmZOUALylqwD/8eQAnHfiAJV8qgA4NTkA+unhALmY4AD61dsAkyoEAJ0cNACNG2MA6cXMAEJDRwB8GxUA2MfMAFEILwAyKzIACwkNAHsoJAB5MCAABm63AL+7vgBZYmUAGClVAC8qZQAAm/sAJ1eTABVHdwAYJjkAGBhkAAcHUAAsY6YAO4njAAwYNQCoqK8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPWgAAAAAAAAAABwAAAAAAV1hZAAAAAAAAAFJTVAAAHFVWEgAAAAAAAChPUC8bAAAWClFRUQcAAAAHSEkiSgdES0w9TU4HAAAHRD0+NkUVRkc/OT88BwAAPD0+Oj9AQUJBQxYeEBAAAA83OAg5FToiOygWFhY8AAAxMgcHMxY0NDQsFhYWNTYHHBsHKissLS4vKxgVMAcFByQlCBQmICcWKCkWECEHAAAHCR0eHyAVIRYWFiIJIwAAAAgJDRgHEAkZBxobDwIcAAcTDwcNFBUHCBYJCRcCAgcLAgwJCQ0OCQ8QCQkEERIAAgMEBQYHCAkJCQkKAAAAAP8////fH///xh///4MD//+AA///AAP//wAD//8AA///AAD//wAA//8AA///AAP//4AB//8AAP//AAH//wAP//8=",self.location).href,type:"global",options:[{label:"全局",value:"global"}],value:""},{id:"chuko-tsuhan",cover:new URL("data:image/gif;base64,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",self.location).href,title:"秋葉原トレーダー",icon:new URL("data:image/x-icon;base64,AAABAAEAEBAQAAAAAAAoAQAAFgAAACgAAAAQAAAAIAAAAAEABAAAAAAAwAAAAAAAAAAAAAAAEAAAAAAAAAAtsrIAlgAAAAD//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIiIiIiIAACIiIiIiIiIAIiIiAAAiIgIiIiERECIiIiIiIREQIiIiIiIhERAiIiIiIiERECIiIiIiIREQIiIiIiIhERAAAiIiERERERECIiIREREREQIiIhERERERAiIiEREREREiICIiIiIiIiIAIiIiIiIiIgAAIiIiIiIADgB///gAH//4AB//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//gAH//4AB///gB///",self.location).href,type:"global",options:[{label:"全局",value:"global"}],value:""},{id:"lashinbang",cover:new URL("/assets/lashinbang-logo-7a5365ff.png",self.location).href,title:"らしんばん",icon:new URL("/assets/lashinbang-icon-d80c4c27.ico",self.location).href,type:"global",options:[{label:"全局",value:"global"},{label:"本体",value:"game"}],value:""},{id:"mercari",cover:new URL("/assets/mercari-logo-0114f8e9.svg",self.location).href,title:"メルカリ",icon:new URL("/assets/mercari-icon-077d769f.ico",self.location).href,type:"global",options:[{label:"全局",value:"global"}],value:""}]),r=c=>{switch(c){case"surugaya":window.open("https://www.suruga-ya.jp");break;case"auctions":window.open("https://auctions.yahoo.co.jp");break;case"amazon":window.open("https://www.amazon.co.jp");break;case"mandarake":window.open("https://order.mandarake.co.jp/order");break;case"hgame1":window.open("https://www.hgame1.com/top.html");break;case"chuko-tsuhan":window.open("http://www.chuko-tsuhan.com");break;case"lashinbang":window.open("https://shop.lashinbang.com");break;case"mercari":window.open("https://jp.mercari.com");break}},n=c=>{const t=s.value.findIndex(g=>g.id===c);Y.value=t},d=c=>{s.value[Y.value].type=c},Z=c=>{var X;const t=s.value.findIndex(u=>u.id===c),{id:g,type:o}=s.value[t],a=s.value[t].value.trim();if(!a)(X=window.$message)==null||X.warning("请输入要搜索的内容");else switch(g){case"surugaya":o==="global"?window.open(`https://www.suruga-ya.jp/search?search_word=${a}&inStock=On`):o==="game"?window.open(`https://www.suruga-ya.jp/search?category=652&search_word=${a}&inStock=On`):o==="doujin"&&window.open(`https://www.suruga-ya.jp/search?category=1101&search_word=${a}&inStock=On`);break;case"auctions":o==="global"?window.open(`https://auctions.yahoo.co.jp/search/search?p=${a}`):o==="restricted"&&window.open(`https://auctions.yahoo.co.jp/search/search?auccat=26146&p=${a}`);break;case"amazon":o==="global"?window.open(`https://www.amazon.co.jp/s?k=${a}`):o==="game"&&window.open(`https://www.amazon.co.jp/s?k=${a}&i=software`);break;case"mandarake":o==="global"?window.open(`https://order.mandarake.co.jp/order/listPage/list?keyword=${a}`):o==="game"?window.open(`https://order.mandarake.co.jp/order/listPage/list?categoryCode=030114&keyword=${a}`):o==="doujin"&&window.open(`https://order.mandarake.co.jp/order/listPage/list?categoryCode=03&keyword=${a}`);break;case"hgame1":o==="global"&&window.open(`https://www.hgame1.com/msearch/msearch.cgi?query=${a}`);break;case"chuko-tsuhan":o==="global"&&window.open(`http://www.chuko-tsuhan.com/shop/shopbrand.html?search=${kA(a)}`);break;case"lashinbang":o==="global"?window.open(`https://shop.lashinbang.com/products/list?keyword=${a}&stock=2`):o==="game"&&window.open(`https://shop.lashinbang.com/products/list?cat=ゲーム&keyword=${a}&subcat=PCゲーム&stock=2`);break;case"mercari":o==="global"&&window.open(`https://jp.mercari.com/search?keyword=${a}`);break}};return(c,t)=>{const g=BA,o=wA,a=pA,X=ZA,u=uA,b=bA,I=hA,w=jA,v=CA;return H(),S("div",null,[p(v,{cols:"s:1 m:2 l:3",responsive:"screen","x-gap":16,"y-gap":16},{default:C(()=>[(H(!0),S(dA,null,XA(s.value,f=>(H(),gA(w,{key:f.id},{default:C(()=>[p(I,{bordered:!1,hoverable:"",class:"h-full rounded-8px shadow-sm"},{cover:C(()=>[E("img",{src:f.cover,class:"h-100px object-contain cursor-pointer p-16px",onClick:e=>r(f.id)},null,8,QA)]),default:C(()=>[E("div",_A,[E("div",MA,[p(g,{size:24,src:f.icon,style:N({backgroundColor:"rgba(0,0,0,0)"})},null,8,["src","style"]),E("h3",HA,fA(f.title),1)]),E("div",zA,[p(b,null,{default:C(()=>[p(o,{class:"w-80px","default-value":f.options[0].label,options:f.options,onClick:e=>n(f.id),"onUpdate:value":d},null,8,["default-value","options","onClick"]),p(a,{value:f.value,"onUpdate:value":e=>f.value=e,style:N({width:"calc(100% - 130px)"}),clearable:""},null,8,["value","onUpdate:value","style"]),p(u,{class:"w-50px border-rd-lg",type:"primary",onClick:e=>Z(f.id)},{icon:C(()=>[p(X,{icon:"material-symbols:search-rounded"})]),_:2},1032,["onClick"])]),_:2},1024)])])]),_:2},1024)]),_:2},1024))),128))]),_:1})])}}});export{qA as default};