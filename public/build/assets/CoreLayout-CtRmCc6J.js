import n from"./Sidebar-BcZRmOcQ.js";import m from"./Header-xxCLmLUu.js";import{x as _,Q as d,y as r,o as p,f,a as e,b as i,r as u,z as b}from"./app-CjkOLGii.js";const g={class:"flex min-h-screen bg-gray-50"},x={class:"basis-4/5 2xl:basis-5/6 flex flex-col"},y={class:"flex-grow"},k={__name:"CoreLayout",props:{title:String},setup(c){const t=_(),o=d();return r(()=>o.props.flash,s=>{s.message&&t.add({severity:s.status,summary:s.status,detail:s.message,life:3e3})}),r(()=>o.props.errors,s=>{s&&Object.keys(s).forEach(a=>{t.add({severity:"error",summary:"Error",detail:s[a],life:3e3})})}),(s,a)=>{const l=b("Toast");return p(),f("div",g,[e(n,{class:"basis-1/5 2xl:basis-1/6"}),i("div",x,[e(m,{title:c.title},null,8,["title"]),i("div",y,[u(s.$slots,"default")])]),e(l,{position:"bottom-right"})])}}};export{k as _};
