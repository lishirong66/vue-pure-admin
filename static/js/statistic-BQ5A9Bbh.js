import{d as b,a as n,d9 as k,dc as C,k as I,i as e,w as t,e as s,A as B,f as d,g as i,B as V,b as H,h as o,u as a,t as N,_ as Y}from"./index-D1gdKAt7.js";import{R as l}from"./index-CisKdowJ.js";const O={class:"card-header"},z={style:{display:"inline-flex","align-items":"center"}},M={class:"mt-2"},R=b({name:"Statistic",__name:"statistic",setup(S){const p=n(Date.now()+252e5),u=n(Date.now()+1e3*60*60*24*2),r=n(k().add(1,"month").startOf("month")),_=n(0),v=C(_,{duration:1500});_.value=36e3;function f(){u.value=Date.now()+1e3*60*60*24*2}return(T,j)=>{const m=s("el-link"),h=s("el-statistic"),c=s("el-countdown"),w=s("el-button"),x=s("IconifyIconOnline"),y=s("el-row"),g=s("el-card"),D=B("tippy");return d(),I("div",null,[e(g,{shadow:"never"},{header:t(()=>[i("div",O,[V((d(),H(m,{href:"https://element-plus.org/zh-CN/component/statistic.html",target:"_blank",style:{"font-size":"16px","font-weight":"800"}},{default:t(()=>[o(" 统计组件 ")]),_:1})),[[D,{content:"点击查看详细文档"}]])]),e(m,{class:"mt-2",href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/components/statistic.vue",target:"_blank"},{default:t(()=>[o(" 代码位置 src/views/components/statistic.vue ")]),_:1})]),default:t(()=>[e(y,{gutter:24},{default:t(()=>[e(a(l),{value:6,xs:24,sm:24},{default:t(()=>[e(h,{title:"需求人数",value:a(v)},null,8,["value"])]),_:1}),e(a(l),{value:6,xs:24,sm:24},{default:t(()=>[e(c,{title:"距离答疑结束还剩",value:p.value},null,8,["value"])]),_:1}),e(a(l),{value:6,xs:24,sm:24},{default:t(()=>[e(c,{title:"VIP到期时间还剩",format:"HH:mm:ss",value:u.value},null,8,["value"]),e(w,{class:"mt-2",type:"primary",text:"",bg:"",onClick:f},{default:t(()=>[o(" 重置 ")]),_:1})]),_:1}),e(a(l),{value:6,xs:24,sm:24},{default:t(()=>[e(c,{format:"DD天 HH时 mm分 ss秒",value:r.value},{title:t(()=>[i("div",z,[e(x,{icon:"ep:calendar",class:"mr-2"}),o(" 距离下个月还剩 ")])]),_:1},8,["value"]),i("div",M,N(r.value.format("YYYY-MM-DD")),1)]),_:1})]),_:1})]),_:1})])}}}),P=Y(R,[["__scopeId","data-v-307c130d"]]);export{P as default};
