import{s as n}from"./index-D_-uy2JS.js";import{B as p,z as c,o,f as s,r as m,a as i,m as r,w as u,u as v,b as g}from"./app-CjkOLGii.js";var f=function(a){var t=a.dt;return`
.p-overlaybadge {
    position: relative;
}

.p-overlaybadge .p-badge {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
    outline-width: `.concat(t("overlaybadge.outline.width"),`;
    outline-style: solid;
    outline-color: `).concat(t("overlaybadge.outline.color"),`;
}
`)},y={root:"p-overlaybadge"},h=p.extend({name:"overlaybadge",theme:f,classes:y}),B={name:"OverlayBadge",extends:n,style:h,provide:function(){return{$pcOverlayBadge:this,$parentInstance:this}}},l={name:"OverlayBadge",extends:B,inheritAttrs:!1,components:{Badge:n}};function _(e,a,t,w,x,O){var d=c("Badge");return o(),s("div",r({class:e.cx("root")},e.ptmi("root")),[m(e.$slots,"default"),i(d,r(e.$props,{pt:e.ptm("pcBadge")}),null,16,["pt"])],16)}l.render=_;const b={class:"hover:bg-gray-200 w-8 h-8 rounded-md flex items-center justify-center transition"},$=g("i",{class:"pi pi-bell",style:{"font-size":"1rem"}},null,-1),k={__name:"Notifications",setup(e){return(a,t)=>(o(),s("div",b,[i(v(l),{severity:"danger"},{default:u(()=>[$]),_:1})]))}};export{k as default};
