import{d as x,a as v,e as c,f as o,k as l,F as k,l as w,g as t,t as i,i as n,w as C,h as g,v as V,u as y,a0 as I,L as S,C as B,D as N,_ as P}from"./index-D1gdKAt7.js";const D=s=>(B("data-v-429391e8"),s=s(),N(),s),F=D(()=>t("h3",{class:"my-8"},"偏好设置",-1)),L={class:"flex items-center"},U={class:"flex-1"},z={class:"wp-4"},E=x({name:"Preferences",__name:"Preferences",setup(s){const d=v([{title:"账户密码",illustrate:"其他用户的消息将以站内信的形式通知",checked:!0},{title:"系统消息",illustrate:"系统消息将以站内信的形式通知",checked:!0},{title:"待办任务",illustrate:"待办任务将以站内信的形式通知",checked:!0}]);function _(p,r){S(`${r.title}设置成功`,{type:"success"})}return(p,r)=>{const u=c("el-text"),m=c("el-switch"),h=c("el-divider");return o(),l("div",{class:V(["min-w-[180px]",y(I)()?"max-w-[100%]":"max-w-[70%]"])},[F,(o(!0),l(k,null,w(d.value,(e,f)=>(o(),l("div",{key:f},[t("div",L,[t("div",U,[t("p",null,i(e.title),1),t("p",z,[n(u,{class:"mx-1",type:"info"},{default:C(()=>[g(i(e.illustrate),1)]),_:2},1024)])]),n(m,{modelValue:e.checked,"onUpdate:modelValue":a=>e.checked=a,"inline-prompt":"","active-text":"是","inactive-text":"否",onChange:a=>_(a,e)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),n(h)]))),128))],2)}}}),$=P(E,[["__scopeId","data-v-429391e8"]]);export{$ as default};
