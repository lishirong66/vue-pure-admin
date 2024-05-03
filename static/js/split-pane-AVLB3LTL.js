import{d as g,p as I,i as l,u as s,a as u,B as A,a3 as H,F as U,r as L,b as W,w as a,e as S,f as X,g as r,h as Y,C as E,D as G,_ as J}from"./index-D1gdKAt7.js";const R=g({name:"Resizer",props:{split:{type:String,required:!0},className:{type:String,default:""}},setup(e){const n=I(()=>["splitter-pane-resizer",e.split,e.className].join(" "));return()=>l("div",{class:s(n)},null)}}),N=g({name:"SplitPane",components:{resizer:R},props:{splitSet:{type:Object,require:!0}},emits:["resize"],setup(e,n){var w,P,b,z,y;const i=u(!1),d=u(!1),o=u((w=e.splitSet)==null?void 0:w.defaultPercent),f=((P=e.splitSet)==null?void 0:P.split)==="vertical"?"width":"height",p=((b=e.splitSet)==null?void 0:b.split)==="vertical"?"left":"top",_=u(["splitter-pane splitter-paneL",(z=e.splitSet)==null?void 0:z.split]),x=u(["splitter-pane splitter-paneR",(y=e.splitSet)==null?void 0:y.split]),D=I(()=>{var t;return i.value?((t=e.splitSet)==null?void 0:t.split)==="vertical"?{cursor:"col-resize"}:{cursor:"row-resize"}:{cursor:"default"}}),V=()=>{d.value||(o.value=50,n.emit("resize",o.value))},j=()=>{i.value=!0,d.value=!1},q=()=>{i.value=!1},F=t=>{var C,M,k,T,B;if((t.buttons===0||t.which===0)&&(i.value=!1),i.value){let m=0,c=t.currentTarget;if(((C=e.splitSet)==null?void 0:C.split)==="vertical")for(;c;)m+=c.offsetLeft,c=c.offsetParent;else for(;c;)m+=c.offsetTop,c=c.offsetParent;const O=((M=e.splitSet)==null?void 0:M.split)==="vertical"?t.pageX:t.pageY,$=((k=e.splitSet)==null?void 0:k.split)==="vertical"?t.currentTarget.offsetWidth:t.currentTarget.offsetHeight,h=Math.floor((O-m)/$*1e4)/100;h>((T=e.splitSet)==null?void 0:T.minPercent)&&h<100-((B=e.splitSet)==null?void 0:B.minPercent)&&(o.value=h),n.emit("resize",o.value),d.value=!0}};return()=>{var t;return l(U,null,[l("div",{class:"vue-splitter-container clearfix",style:s(D),onMouseup:()=>q(),onMousemove:()=>F(event)},[l("div",{class:s(_),style:{[s(f)]:s(o)+"%"}},[n.slots.paneL()]),l(R,{style:`${s([p])}:${s(o)}%`,split:(t=e.splitSet)==null?void 0:t.split,onMousedown:()=>j(),onClick:()=>V()},null),l("div",{class:s(x),style:{[s(f)]:100-s(o)+"%"}},[n.slots.paneR()]),A(l("div",{class:"vue-splitter-container-mask"},null),[[H,s(i)]])])])}}}),v=e=>(E("data-v-57f6b178"),e=e(),G(),e),K={class:"card-header"},Q=v(()=>r("p",{class:"font-medium"},"切割面板",-1)),Z={class:"split-pane"},ee=v(()=>r("div",{class:"dv-a"},"A",-1)),te=v(()=>r("div",{class:"dv-b"},"B",-1)),se=v(()=>r("div",{class:"dv-c"},"C",-1)),le=g({name:"SplitPane",__name:"split-pane",setup(e){const n=L({minPercent:20,defaultPercent:40,split:"vertical"}),i=L({minPercent:20,defaultPercent:40,split:"horizontal"});return(d,o)=>{const f=S("el-link"),p=S("el-scrollbar"),_=S("el-card");return X(),W(_,{shadow:"never"},{header:a(()=>[r("div",K,[Q,l(f,{class:"mt-2",href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/components/split-pane.vue",target:"_blank"},{default:a(()=>[Y(" 代码位置 src/views/components/split-pane.vue ")]),_:1})])]),default:a(()=>[r("div",Z,[l(s(N),{splitSet:n},{paneL:a(()=>[l(p,null,{default:a(()=>[ee]),_:1})]),paneR:a(()=>[l(s(N),{splitSet:i},{paneL:a(()=>[l(p,null,{default:a(()=>[te]),_:1})]),paneR:a(()=>[l(p,null,{default:a(()=>[se]),_:1})]),_:1},8,["splitSet"])]),_:1},8,["splitSet"])])]),_:1})}}}),ne=J(le,[["__scopeId","data-v-57f6b178"]]);export{ne as default};
