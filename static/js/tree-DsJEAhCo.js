var K=Object.defineProperty,Q=Object.defineProperties;var W=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var I=(o,t,l)=>t in o?K(o,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):o[t]=l,g=(o,t)=>{for(var l in t||(t={}))X.call(t,l)&&I(o,l,t[l]);if($)for(var l of $(t))Y.call(t,l)&&I(o,l,t[l]);return o},x=(o,t)=>Q(o,W(t));import{f as w,k as y,g as m,d as Z,a as _,$ as ee,p as te,n as oe,e as s,A as le,B as M,i as a,w as d,a3 as ne,v as B,u,h as O,t as N,s as ae,_ as re}from"./index-D1gdKAt7.js";import{u as ie}from"./hooks-_5EI3FOc.js";import{d as se}from"./git-branch-line-BhusJOme.js";import{d as ce}from"./more-2-fill-iTOisMwj.js";const de={width:1024,height:1024,body:'<path fill="currentColor" d="M192 128v704h384V128H192zm-32-64h448a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"/><path fill="currentColor" d="M256 256h256v64H256v-64zm0 192h256v64H256v-64zm0 192h256v64H256v-64zm384-128h128v64H640v-64zm0 128h128v64H640v-64zM64 832h896v64H64v-64z"/><path fill="currentColor" d="M640 384v448h192V384H640zm-32-64h256a32 32 0 0 1 32 32v512a32 32 0 0 1-32 32H608a32 32 0 0 1-32-32V352a32 32 0 0 1 32-32z"/>'},he=de,ue={width:1024,height:1024,body:'<path fill="currentColor" d="M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"/><path fill="currentColor" d="M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"/><path fill="currentColor" d="M544 384h96a32 32 0 1 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96v-96a32 32 0 0 1 64 0v96z"/>'},pe=ue,fe={width:"32",height:"32",viewBox:"0 0 24 24"},ve=m("path",{fill:"currentColor",d:"M22 4V2H2v2h9v14.17l-5.5-5.5-1.42 1.41L12 22l7.92-7.92-1.42-1.41-5.5 5.5V4z"},null,-1),_e=[ve];function me(o,t){return w(),y("svg",fe,[..._e])}const ge={render:me},xe={width:"32",height:"32",viewBox:"0 0 24 24"},we=m("path",{fill:"currentColor",d:"M4 2H2v20h2v-9h14.17l-5.5 5.5 1.41 1.42L22 12l-7.92-7.92-1.41 1.42 5.5 5.5H4z"},null,-1),ye=[we];function ze(o,t){return w(),y("svg",xe,[...ye])}const Ce={render:ze},be={class:"h-full bg-bg_color overflow-auto",style:{minHeight:"calc(100vh - 141px)"}},ke={class:"flex items-center h-[34px]"},He=Z({__name:"tree",props:{treeLoading:Boolean,treeData:Array},emits:["tree-select"],setup(o,{expose:t,emit:l}){const E=l,z=_(),p=_(!0),h=_(""),r=_({}),{proxy:R}=ee(),j={children:"children",label:"name"},D=te(()=>["!h-[20px]","!text-sm","reset-margin","!text-[var(--el-text-color-regular)]","dark:!text-white","dark:hover:!text-primary"]),L=(n,e)=>n?e.name.includes(n):!0;function A(n){var i,f;const e=n.$treeNodeId;r.value[e]=(i=r.value[e])!=null&&i.highlight?Object.assign({id:e},r.value[e],{highlight:!1}):Object.assign({id:e},r.value[e],{highlight:!0}),Object.values(r.value).forEach(v=>{v.id!==e&&(v.highlight=!1)}),E("tree-select",(f=r.value[e])!=null&&f.highlight?Object.assign(x(g({},n),{selected:!0})):Object.assign(x(g({},n),{selected:!1})))}function C(n){p.value=n;const e=R.$refs.treeRef.store._getAllNodes();for(let i=0;i<e.length;i++)e[i].expanded=n}function S(){r.value={},h.value="",C(!0)}return oe(h,n=>{z.value.filter(n)}),t({onTreeReset:S}),(n,e)=>{const i=s("IconifyIconOffline"),f=s("el-icon"),v=s("el-input"),q=s("el-button"),T=s("el-dropdown-item"),U=s("el-dropdown-menu"),P=s("el-dropdown"),F=s("el-divider"),G=s("el-tree"),J=le("loading");return M((w(),y("div",be,[m("div",ke,[a(v,{modelValue:h.value,"onUpdate:modelValue":e[0]||(e[0]=c=>h.value=c),class:"ml-2",size:"small",placeholder:"请输入部门名称",clearable:""},{suffix:d(()=>[a(f,{class:"el-input__icon"},{default:d(()=>[M(a(i,{icon:"ri:search-line"},null,512),[[ne,h.value.length===0]])]),_:1})]),_:1},8,["modelValue"]),a(P,{"hide-on-click":!1},{dropdown:d(()=>[a(U,null,{default:d(()=>[a(T,null,{default:d(()=>[a(q,{class:B(D.value),link:"",type:"primary",icon:u(ie)(p.value?u(ge):u(Ce)),onClick:e[1]||(e[1]=c=>C(!p.value))},{default:d(()=>[O(N(p.value?"折叠全部":"展开全部"),1)]),_:1},8,["class","icon"])]),_:1})]),_:1})]),default:d(()=>[a(i,{class:"w-[28px] cursor-pointer",width:"18px",icon:u(ce)},null,8,["icon"])]),_:1})]),a(F),a(G,{ref_key:"treeRef",ref:z,data:o.treeData,"node-key":"id",size:"small",props:j,"default-expand-all":"","expand-on-click-node":!1,"filter-node-method":L,onNodeClick:A},{default:d(({node:c,data:b})=>{var k,H,V;return[m("span",{class:B(["pl-1","pr-1","rounded","flex","items-center","select-none","hover:text-primary",h.value.trim().length>0&&c.label.includes(h.value)&&"text-red-500",(k=r.value[c.id])!=null&&k.highlight?"dark:text-primary":""]),style:ae({color:(H=r.value[c.id])!=null&&H.highlight?"var(--el-color-primary)":"",background:(V=r.value[c.id])!=null&&V.highlight?"var(--el-color-primary-light-7)":"transparent"})},[a(i,{icon:b.type===1?u(he):b.type===2?u(pe):u(se)},null,8,["icon"]),O(" "+N(c.label),1)],6)]}),_:1},8,["data"])])),[[J,o.treeLoading]])}}}),Oe=re(He,[["__scopeId","data-v-f63f1ecd"]]);export{Oe as default};
