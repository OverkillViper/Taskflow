import{k,Q as w,T as x,o as p,f as u,a as i,w as o,u as l,b as a,t as m,e as V}from"./app-CjkOLGii.js";import{s as h}from"./index-DKL4b50C.js";import{_ as c}from"./Button-CvWjfPce.js";import{s as C}from"./index-Apsg4YZL.js";import{b as D,c as $}from"./index-LB_Bmhku.js";import"./index-D_-uy2JS.js";import"./index-BLMopepL.js";import"./index-DBEHcVIn.js";const T=a("div",{class:"inline-flex items-center justify-center gap-2"},[a("i",{class:"pi pi-plus",style:{"font-size":"0.8rem"}}),a("span",{class:"font-semibold whitespace-nowrap"},"Modify Task")],-1),M={class:"flex items-center mt-4 gap-x-4 font-medium"},U=["onClick"],F={key:0,class:"flex items-center text-gray-800"},B={key:1},S={class:"flex items-center"},q={__name:"EditTaskDialog",props:{task:Object},setup(v){const n=k(!1),_=w().props.taskGroups,d=v,s=x({title:d.task.title,deadline:d.task.deadline,task_group_id:d.task.task_group});let f=new Date,g=f.getMonth(),b=f.getFullYear();const r=k(new Date);r.value.setMonth(g),r.value.setFullYear(b);const y=()=>{s.task_group_id=s.task_group_id.id,s.put(route("tasks.update",d.task.id),{onFinish:()=>{s.task_group_id=d.task.task_group,n.value=!1}})};return(z,t)=>(p(),u("div",null,[i(c,{label:"Modify",icon:"pencil",onClick:t[0]||(t[0]=e=>n.value=!0)}),i(l(h),{visible:n.value,"onUpdate:visible":t[6]||(t[6]=e=>n.value=e),modal:"",header:"Modify Task",style:{width:"35rem"}},{header:o(()=>[T]),footer:o(()=>[i(c,{label:"Cancel",icon:"times",outline:"",text:"",onClick:t[5]||(t[5]=e=>n.value=!1)}),i(c,{label:"Update",icon:"save",onClick:y})]),default:o(()=>[a("form",{onSubmit:t[4]||(t[4]=V(()=>{},["prevent"]))},[a("div",null,[i(l(C),{type:"text",modelValue:l(s).title,"onUpdate:modelValue":t[1]||(t[1]=e=>l(s).title=e),variant:"filled",size:"small",class:"w-full",placeholder:"Task title"},null,8,["modelValue"])]),a("div",M,[i(l(D),{minDate:r.value,modelValue:l(s).deadline,"onUpdate:modelValue":t[2]||(t[2]=e=>l(s).deadline=e),showIcon:"",fluid:"",iconDisplay:"input",placeholder:"Task deadline",variant:"filled",class:"basis-1/2"},{inputicon:o(e=>[a("i",{class:"pi pi-calendar",onClick:e.clickCallback},null,8,U)]),_:1},8,["minDate","modelValue"]),i(l($),{showClear:"",modelValue:l(s).task_group_id,"onUpdate:modelValue":t[3]||(t[3]=e=>l(s).task_group_id=e),options:l(_),optionLabel:"title",filter:"",placeholder:"Select a group",class:"w-full basis-1/2",variant:"filled"},{value:o(e=>[e.value?(p(),u("div",F,[a("div",null,m(l(s).task_group_id.title),1)])):(p(),u("span",B,m(e.placeholder),1))]),option:o(e=>[a("div",S,[a("div",null,m(e.option.title),1)])]),_:1},8,["modelValue","options"])])],32)]),_:1},8,["visible"])]))}};export{q as default};
