import{_ as l,r as K,o as c,c as h,a as t,b as a,w as s,d as F,e as A}from"./index.760f92d5.js";const u="/assets/yahoo.co.jp_logo.22f0f84a.svg",g="/assets/YouTube_logo.54e6d9a4.svg",M="/assets/Twitter_logo.94072975.svg",d="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAAAZCAMAAADHYnYIAAAA2FBMVEUAAAAFKoMFKoMFKoMFKoMFKoMFKoMFKoMFKoMFKoMFKoMFKoMFKoMFKoMFKoMFKoMFKoMFKoMFKoMFKoP/X5YFKoMFKoMFKoMFKoMFKoMFKoMFKoP/X5YFKoMFKoMFKoMFKoMFKoMFKoMFKoMFKoMFKoMFKoP/X5YFKoMFKoMFKoP8yAD8yAD8yAD8yAD/X5b8yAD8yAD8yAD8yAD8yAD8yAAFKoP/X5b//v7/2+X/k7X/bZ78yAD/9vj/vtH/h67/0t//yNj/e6b/7fL/tMv/n73/5Oz/qsSHJs9uAAAANnRSTlMAMPFgoJDg0U78mQjmwSkiD7WwAu7svDT22cWkkYND1Gs8G4l4WBcGzKh8ZOe2r4mDSdDGmgrbyT6PAAADC0lEQVRIx7XW2XaiQBAG4AoqiiiLuCZR45o9k8zStDC4Z+b932i6C9kbY3Kc/8JUihP46FSDQDCtel+DIBfYgty8vTw/AossSZIM5wgJUx+dhnj7zcIVEiFEOicCU1VPQbxwxI//hiCXxgmIZ474fn5EpFA/RjxyxGuA0PX5mRD9ai34jxxDDKqX/Pjr09PPX4jA1MGPOiveyT3zQf8i4gKsmUwwo1zEuM26DYBRkWWWRlg3NXLI/fiLCADDxLKdh9BrxEcU+M9SCqE2SJTWAKLcXjftY2le30YIUO+w1sUItUyOINQ2iUeJKa7tj/IthoAR1jdixJSIEZJksnJC/HQVgpGiwWh+iGjGEdDj9ZUQYbXwDqudNAJ4NAUFfR2sTpHwmBDE5nn3KKULh5d7b4mdtbfbrHxFAnGFqytEdLBXARAiqjgJ7CzhcdJJIBYUs7K3rFqwhkO9zZp6bhZR4nVZiCj4i5RBSOEyoTAilVIIx3Y3dMOKP4hY07+2vaH7LKKYvxIPvFXIQWi8MxyUD5Hx1wzCdtjlt45zQLzb9lKEKOfPRAnvNYmoBYgBPuYqyQ0iXgmk8JGg3nJJ6TaD0I7sjmIKUWWFHCDw8pMkgghnIkS4O8qyy87EPdaaENHGp2mEKMYR+AftJELKIHB3IAIbu/1+h2UcYfWxvAQRwuiiLweh8qNK5yIeLYVwFnRth4gtbgzXo9sEQjcJpiJCWLh5FTWJ6IWwBvINwFT8dU0jth59DxH4ge0IMZ0Gj10TAkThEIDOZBgsUgKBsuE4mEzSq1gA877S0kUIe8/uPkC4OB8rSt0QEaU2R0Q8uDMwsxTCH4Ju/Z4vBUYq9xR+Fl2A4B/LcCaWbEQWFBtJBD708hEmpBDWHcHIAEYveS9GCrGmKz4CO1aucDZcpmAGN4sYapCPKBtpBGitAAHjMonlASD5AnPxLbHFa678K7uO44YvsDDdvgr5CNOADALGjQAB6kQJ16EC8NlXOUY2b/AqYkStUQFIIzCdqqzIgJlP6xJRam080ae+1PwD78daMioVYcYAAAAASUVORK5CYII=",m={name:"index",methods:{search(){const i=document.getElementById("getInputText").value,o="https://search.yahoo.co.jp/search?p="+i;i.replace(/(^\s*)|(\s*$)/g,"")!==""&&window.open(o)}}},p=t("a",{href:"https://www.yahoo.co.jp",target:"_blank"},[t("img",{alt:"Yahoo! JAPAN",src:u,width:"213",height:"54"})],-1),D=t("br",null,null,-1),w=t("input",{type:"text",value:"",id:"getInputText",placeholder:"\u5FEB\u6377\u641C\u7D22",autocomplete:"off",required:""},null,-1),_=F('<br><br><a href="https://www.youtube.com/" target="_blank"><img alt="YouTube" src="'+g+'" width="256" height="57"></a><br><br><a href="https://twitter.com/" target="_blank"><img alt="Twitter" src="'+M+'" width="64" height="52.625"></a><br><br><a href="https://www.dlsite.com/maniax/" target="_blank"><img alt="DLsite R18" src="'+d+'" width="132" height="25"></a><br><br>',11);function b(i,o,I,x,Y,n){const e=K("router-link");return c(),h("div",null,[p,D,t("form",null,[w,t("input",{type:"submit",value:"\u641C\u7D22",onClick:o[0]||(o[0]=(...r)=>n.search&&n.search(...r))})]),_,t("button",null,[a(e,{to:"/game_shop_original"},{default:s(()=>[A("\u672C\u4F53\u539F\u7AD9")]),_:1})]),t("button",null,[a(e,{to:"/game_shop_tool"},{default:s(()=>[A("\u672C\u4F53\u5DE5\u5177\u7AD9")]),_:1})]),t("button",null,[a(e,{to:"/game_information"},{default:s(()=>[A("\u672C\u4F53\u5DE5\u5177\u7AD9")]),_:1})]),t("button",null,[a(e,{to:"/pillow_information"},{default:s(()=>[A("\u62B1\u6795\u8D44\u6599\u7AD9")]),_:1})])])}const y=l(m,[["render",b]]);export{y as default};
