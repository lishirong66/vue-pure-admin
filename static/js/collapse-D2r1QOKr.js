import{d as z,a as i,b as r,w as e,e as o,A as B,f as m,g as f,i as l,B as I,h as a}from"./index-D1gdKAt7.js";const O={class:"card-header"},D=f("p",{class:"mb-2"},"基础用法",-1),j=z({name:"Collapse",__name:"collapse",setup(R){const s=i(),v=i(),t=i(["1","2","3","4","5"]),_=i(!0);function h(){_.value?t.value=[]:s.value==="accordion"?t.value=["5"]:t.value=["1","2","3","4","5"],_.value=!_.value}const b=g=>{};return(g,c)=>{const u=o("el-link"),w=o("el-space"),p=o("el-radio"),V=o("el-radio-group"),k=o("el-button"),n=o("el-collapse-item"),C=o("IconifyIconOnline"),x=o("el-collapse"),y=o("el-card"),N=B("tippy");return m(),r(y,{shadow:"never"},{header:e(()=>[f("div",O,[l(w,{wrap:"",size:40},{default:e(()=>[I((m(),r(u,{href:"https://element-plus.org/zh-CN/component/collapse.html",target:"_blank",style:{"font-size":"16px","font-weight":"800"}},{default:e(()=>[a(" 折叠面板 ")]),_:1})),[[N,{content:"点击查看详细文档"}]])]),_:1})]),l(u,{class:"mt-2",href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/components/collapse.vue",target:"_blank"},{default:e(()=>[a(" 代码位置 src/views/components/collapse.vue ")]),_:1})]),default:e(()=>[D,l(V,{modelValue:s.value,"onUpdate:modelValue":c[0]||(c[0]=d=>s.value=d),class:"mb-3"},{default:e(()=>[l(p,{value:""},{default:e(()=>[a("可同时展开多个面板")]),_:1}),l(p,{value:"accordion"},{default:e(()=>[a("每次只能展开一个面板")]),_:1})]),_:1},8,["modelValue"]),l(k,{size:"small",text:"",bg:"",class:"ml-8 mb-1",onClick:h},{default:e(()=>[a(" 外部触发打开、关闭 ")]),_:1}),l(x,{ref_key:"collapseRef",ref:v,modelValue:t.value,"onUpdate:modelValue":c[1]||(c[1]=d=>t.value=d),class:"w-[360px]",accordion:s.value==="accordion",onChange:b},{default:e(()=>[l(n,{title:"周一",name:"1"},{default:e(()=>[a(" 周一启航，新的篇章 ")]),_:1}),l(n,{title:"周二",name:"2"},{default:e(()=>[a(" 周二律动，携手共进 ")]),_:1}),l(n,{title:"周三",name:"3"},{default:e(()=>[a(" 周三昂扬，激情不减 ")]),_:1}),l(n,{title:"周四",name:"4"},{default:e(()=>[a(" 周四精进，事半功倍 ")]),_:1}),l(n,{name:"5"},{title:e(()=>[a(" 周五 "),l(C,{icon:"streamline-emojis:beaming-face-with-smiling-eyes",class:"ml-1",width:"30"})]),default:e(()=>[a(" 周五喜悦，收尾归档 ")]),_:1})]),_:1},8,["modelValue","accordion"])]),_:1})}}});export{j as default};
