import{s as v,a as x}from"./vue-virtual-scroller.esm-Jn0ICJnQ.js";import{d as w,a as d,p as y,e as m,f as g,k as z,g as i,h as I,i as o,w as p,u,s as V,t as C,_ as k}from"./index-D1gdKAt7.js";const b={class:"dynamic-scroller-demo"},B={class:"flex-ac mb-4 shadow-2xl"},N={class:"text-center"},S=w({__name:"horizontal",setup($){const l=d([]),a=d("");for(let e=0;e<800;e++)l.value.push({id:e});const _=y(()=>{if(!a.value)return l.value;const e=a.value;return l.value.filter(s=>s.id==e)});return(e,s)=>{const h=m("el-input"),f=m("IconifyIconOnline");return g(),z("div",b,[i("div",B,[I(" 水平模式 horizontal "),o(h,{modelValue:a.value,"onUpdate:modelValue":s[0]||(s[0]=t=>a.value=t),class:"mr-2 !w-[1/1.5]",clearable:"",placeholder:"Filter...",style:{width:"300px"}},null,8,["modelValue"])]),o(u(x),{items:_.value,"min-item-size":54,direction:"horizontal",class:"scroller"},{default:p(({item:t,index:n,active:c})=>{var r;return[o(u(v),{item:t,active:c,"size-dependencies":[t.id],"data-index":n,"data-active":c,title:`Click to change message ${n}`,style:V({width:`${Math.max(130,Math.round(((r=t.id)==null?void 0:r.length)/20*20))}px`}),class:"message"},{default:p(()=>[i("div",null,[o(f,{icon:"openmoji:beaming-face-with-smiling-eyes",width:"40"}),i("p",N,C(t.id),1)])]),_:2},1032,["item","active","size-dependencies","data-index","data-active","title","style"])]}),_:1},8,["items"])])}}}),j=k(S,[["__scopeId","data-v-d46e8f01"]]);export{j as default};
