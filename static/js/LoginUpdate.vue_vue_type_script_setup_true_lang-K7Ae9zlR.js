var U=(R,s,t)=>new Promise((r,i)=>{var V=n=>{try{m(t.next(n))}catch(c){i(c)}},_=n=>{try{m(t.throw(n))}catch(c){i(c)}},m=n=>n.done?r(n.value):Promise.resolve(n.value).then(V,_);m((t=t.apply(R,s)).next())});import{M as f}from"./motion-CTRxWgR3.js";import{d as D,V as E,a as k,r as I,e as w,f as N,b as T,w as a,i as o,u as e,g as $,h as C,t as x,ad as h,fC as P,L as z,fY as F}from"./index-D1gdKAt7.js";import{u as b,a as W}from"./verifyCode-sJP7GyzQ.js";import{u as y}from"./hooks-_5EI3FOc.js";import{d as S}from"./lock-fill-BZPnsoM7.js";import{d as G}from"./iphone-CgGaW-_Y.js";const L={class:"w-full flex justify-between"},K=D({__name:"LoginUpdate",setup(R){const{t:s}=E(),t=k(!1),r=I({phone:"",verifyCode:"",password:"",repeatPassword:""}),i=k(),{isDisabled:V,text:_}=b(),m=[{validator:(g,l,u)=>{l===""?u(new Error(h(P("login.purePassWordSureReg")))):r.password!==l?u(new Error(h(P("login.purePassWordDifferentReg")))):u()},trigger:"blur"}],n=g=>U(this,null,function*(){t.value=!0,g&&(yield g.validate(l=>{l?setTimeout(()=>{z(h(P("login.purePassWordUpdateReg")),{type:"success"}),t.value=!1},2e3):t.value=!1}))});function c(){b().end(),F().SET_CURRENTPAGE(0)}return(g,l)=>{const u=w("el-input"),p=w("el-form-item"),v=w("el-button"),B=w("el-form");return N(),T(B,{ref_key:"ruleFormRef",ref:i,model:r,rules:e(W),size:"large"},{default:a(()=>[o(e(f),null,{default:a(()=>[o(p,{prop:"phone"},{default:a(()=>[o(u,{modelValue:r.phone,"onUpdate:modelValue":l[0]||(l[0]=d=>r.phone=d),clearable:"",placeholder:e(s)("login.purePhone"),"prefix-icon":e(y)(e(G))},null,8,["modelValue","placeholder","prefix-icon"])]),_:1})]),_:1}),o(e(f),{delay:100},{default:a(()=>[o(p,{prop:"verifyCode"},{default:a(()=>[$("div",L,[o(u,{modelValue:r.verifyCode,"onUpdate:modelValue":l[1]||(l[1]=d=>r.verifyCode=d),clearable:"",placeholder:e(s)("login.pureSmsVerifyCode"),"prefix-icon":e(y)("ri:shield-keyhole-line")},null,8,["modelValue","placeholder","prefix-icon"]),o(v,{disabled:e(V),class:"ml-2",onClick:l[2]||(l[2]=d=>e(b)().start(i.value,"phone"))},{default:a(()=>[C(x(e(_).length>0?e(_)+e(s)("login.pureInfo"):e(s)("login.pureGetVerifyCode")),1)]),_:1},8,["disabled"])])]),_:1})]),_:1}),o(e(f),{delay:150},{default:a(()=>[o(p,{prop:"password"},{default:a(()=>[o(u,{modelValue:r.password,"onUpdate:modelValue":l[3]||(l[3]=d=>r.password=d),clearable:"","show-password":"",placeholder:e(s)("login.purePassword"),"prefix-icon":e(y)(e(S))},null,8,["modelValue","placeholder","prefix-icon"])]),_:1})]),_:1}),o(e(f),{delay:200},{default:a(()=>[o(p,{rules:m,prop:"repeatPassword"},{default:a(()=>[o(u,{modelValue:r.repeatPassword,"onUpdate:modelValue":l[4]||(l[4]=d=>r.repeatPassword=d),clearable:"","show-password":"",placeholder:e(s)("login.pureSure"),"prefix-icon":e(y)(e(S))},null,8,["modelValue","placeholder","prefix-icon"])]),_:1})]),_:1}),o(e(f),{delay:250},{default:a(()=>[o(p,null,{default:a(()=>[o(v,{class:"w-full",size:"default",type:"primary",loading:t.value,onClick:l[5]||(l[5]=d=>n(i.value))},{default:a(()=>[C(x(e(s)("login.pureDefinite")),1)]),_:1},8,["loading"])]),_:1})]),_:1}),o(e(f),{delay:300},{default:a(()=>[o(p,null,{default:a(()=>[o(v,{class:"w-full",size:"default",onClick:c},{default:a(()=>[C(x(e(s)("login.pureBack")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])}}});export{K as _};
