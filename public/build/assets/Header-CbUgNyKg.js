import{B as S,s as x,o as s,f as i,r as _,m as d,t as y,c as k,n as B,P as C,g as z,Q as V,T as E,k as A,a as o,u as t,b as r,d as L,e as q,w as u,F as N,Z as T,i as b}from"./app-CIvLCymv.js";import{s as j}from"./index-2Eug0zuj.js";import{_ as D}from"./Button-Dzg27awM.js";import{s as F}from"./index-B93N0HL1.js";import"./index-Db0TWXcE.js";import"./index-DtHUOGeR.js";var P=function(n){var e=n.dt;return`
.p-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: `.concat(e("avatar.width"),`;
    height: `).concat(e("avatar.height"),`;
    font-size: `).concat(e("avatar.font.size"),`;
    background: `).concat(e("avatar.background"),`;
    border-radius: `).concat(e("avatar.border.radius"),`;
}

.p-avatar-image {
    background: transparent;
}

.p-avatar-circle {
    border-radius: 50%;
}

.p-avatar-circle img {
    border-radius: 50%;
}

.p-avatar-icon {
    font-size: `).concat(e("avatar.font.size"),`;
}

.p-avatar img {
    width: 100%;
    height: 100%;
}

.p-avatar-lg {
    width: `).concat(e("avatar.lg.width"),`;
    height: `).concat(e("avatar.lg.width"),`;
    font-size: `).concat(e("avatar.lg.font.size"),`;
}

.p-avatar-lg .p-avatar-icon {
    font-size: `).concat(e("avatar.lg.font.size"),`;
}

.p-avatar-xl {
    width: `).concat(e("avatar.xl.width"),`;
    height: `).concat(e("avatar.xl.width"),`;
    font-size: `).concat(e("avatar.xl.font.size"),`;
}

.p-avatar-xl .p-avatar-icon {
    font-size: `).concat(e("avatar.xl.font.size"),`;
}

.p-avatar-group {
    display: flex;
    align-items: center;
}

.p-avatar-group .p-avatar + .p-avatar {
    margin-left: `).concat(e("avatar.group.offset"),`;
}

.p-avatar-group .p-avatar {
    border: 2px solid `).concat(e("avatar.group.border.color"),`;
}
`)},G={root:function(n){var e=n.props;return["p-avatar p-component",{"p-avatar-image":e.image!=null,"p-avatar-circle":e.shape==="circle","p-avatar-lg":e.size==="large","p-avatar-xl":e.size==="xlarge"}]},label:"p-avatar-label",icon:"p-avatar-icon"},H=S.extend({name:"avatar",theme:P,classes:G}),I={name:"BaseAvatar",extends:x,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:H,provide:function(){return{$pcAvatar:this,$parentInstance:this}}},m={name:"Avatar",extends:I,inheritAttrs:!1,emits:["error"],methods:{onError:function(n){this.$emit("error",n)}}},M=["aria-labelledby","aria-label"],Q=["src","alt"];function U(a,n,e,f,c,l){return s(),i("div",d({class:a.cx("root"),"aria-labelledby":a.ariaLabelledby,"aria-label":a.ariaLabel},a.ptmi("root")),[_(a.$slots,"default",{},function(){return[a.label?(s(),i("span",d({key:0,class:a.cx("label")},a.ptm("label")),y(a.label),17)):a.$slots.icon?(s(),k(C(a.$slots.icon),{key:1,class:B(a.cx("icon"))},null,8,["class"])):a.icon?(s(),i("span",d({key:2,class:[a.cx("icon"),a.icon]},a.ptm("icon")),null,16)):a.image?(s(),i("img",d({key:3,src:a.image,alt:a.ariaLabel,onError:n[0]||(n[0]=function(){return l.onError&&l.onError.apply(l,arguments)})},a.ptm("image")),null,16,Q)):z("",!0)]})],16,M)}m.render=U;const Z={class:"flex py-4 px-6 justify-between items-center"},J={class:"flex items-center font-semibold text-lg basis-1/3 capitalize"},K=r("span",{class:"pi pi-angle-left"},null,-1),O=[K],R={class:"flex items-center basis-1/3 justify-end"},W={key:0},X={class:"flex flex-col w-[10rem] p-1"},Y=r("span",{class:"pi pi-user",style:{"font-size":"0.8rem"}},null,-1),aa=r("div",{class:"text-sm font-medium ms-2"},"Profile",-1),ea=r("span",{class:"pi pi-power-off",style:{"font-size":"0.8rem"}},null,-1),ta=r("div",{class:"text-sm font-medium ms-2"},"Sign out",-1),ca={__name:"Header",props:{title:String},setup(a){const e=V().props.auth.user,f=a,c=E({q:null});function l(){history.back()}const w=()=>{c.get(route("search"))},v=A(),g=p=>{v.value.toggle(p)};return(p,h)=>(s(),i(N,null,[o(t(T),{title:a.title},null,8,["title"]),r("div",Z,[r("div",J,[f.title!="Dashboard"?(s(),i("div",{key:0,class:"me-2",onClick:l},O)):z("",!0),L(" "+y(a.title),1)]),r("form",{onSubmit:q(w,["prevent"]),class:"flex items-center basis-1/3"},[o(t(j),{modelValue:t(c).q,"onUpdate:modelValue":h[0]||(h[0]=$=>t(c).q=$),text:"",size:"small",placeholder:"Seach for Task, Groups or Tags",class:"w-96"},null,8,["modelValue"]),o(D,{label:"Search",class:"ms-2",icon:"search",type:"submit"})],32),r("div",R,[t(e).avatar?(s(),i("div",W,[o(t(m),{image:`/storage/${t(e).avatar}`,onClick:g,class:"shadow-md border overflow-hidden"},null,8,["image"])])):(s(),k(t(m),{key:1,icon:"pi pi-user",class:"border border-transparent hover:border-gray-700 transition",onClick:g})),o(t(F),{ref_key:"pop",ref:v},{default:u(()=>[r("div",X,[o(t(b),{href:p.route("profile.edit"),class:"flex items-center hover:bg-gray-200 p-2 rounded-md transition"},{default:u(()=>[Y,aa]),_:1},8,["href"]),o(t(b),{href:p.route("logout"),method:"post",as:"button",class:"flex items-center hover:bg-gray-200 p-2 rounded-md transition"},{default:u(()=>[ea,ta]),_:1},8,["href"])])]),_:1},512)])])],64))}};export{ca as default};
