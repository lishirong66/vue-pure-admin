import{d as o,as as r,p as n,a as i,at as l,f as c,k as d}from"./index-D1gdKAt7.js";const x=o({__name:"ChartRound",setup(f){const{isDark:t}=r(),a=n(()=>t.value?"dark":"light"),e=i(),{setOptions:s}=l(e,{theme:a,renderer:"svg"});return s({container:".line-card",title:{text:"100%",left:"47%",top:"30%",textAlign:"center",textStyle:{fontSize:"16",fontWeight:600}},polar:{radius:["100%","90%"],center:["50%","50%"]},angleAxis:{max:100,show:!1},radiusAxis:{type:"category",show:!0,axisLabel:{show:!1},axisLine:{show:!1},axisTick:{show:!1}},series:[{type:"bar",roundCap:!0,barWidth:2,showBackground:!0,backgroundStyle:{color:"#dfe7ef"},data:[100],coordinateSystem:"polar",color:"#7846e5",itemStyle:{shadowBlur:2,shadowColor:"#7846e5",shadowOffsetX:0,shadowOffsetY:0}}]}),(h,p)=>(c(),d("div",{ref_key:"chartRef",ref:e,style:{width:"100%",height:"60px"}},null,512))}});export{x as _};
