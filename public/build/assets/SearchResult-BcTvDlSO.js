import{_ as G}from"./CoreLayout-BRYKIU0j.js";import{B as m,U as K,s as y,o as i,f as c,r as h,m as l,I as $,J as V,K as q,L as T,M,N as J,R as z,O as _,h as A,c as o,P,g as v,b as w,S as k,V as Q,W as O,w as d,n as E,F as g,v as X,a as p,u,d as C,G as L}from"./app-CIvLCymv.js";import{s as Y,a as Z}from"./index-TyAznqa5.js";import tt from"./TaskCard-Dy2Nzxxe.js";import at from"./GroupCard-lhjxKsp3.js";import et from"./TagCard-ZrrfbzwD.js";import N from"./NoRecordMessage-BEnC2eg0.js";import{s as S}from"./index-5mnlzHN0.js";import"./Sidebar-C-1tNL6y.js";import"./CreateTaskDialog-CXRGQYjP.js";import"./index-DerHbtK6.js";import"./index-Db0TWXcE.js";import"./Button-Dzg27awM.js";import"./index-2Eug0zuj.js";import"./CreateGroupDialog-DkFXp3yV.js";import"./index-DKD77b8F.js";import"./index-DtHUOGeR.js";import"./CreateTagDialog-rQcVbjXM.js";import"./Header-CbUgNyKg.js";import"./index-B93N0HL1.js";import"./index-AQ1KFhP7.js";import"./differenceInCalendarDays-Bp0PEmVY.js";import"./DeleteTaskDialog-B4rHo80b.js";import"./DeleteGroupDialog-AiNY4b_6.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";var nt=function(t){var e=t.dt;return`
.p-tabs {
    display: flex;
    flex-direction: column;
}

.p-tablist {
    display: flex;
    position: relative;
}

.p-tabs-scrollable > .p-tablist {
    overflow: hidden;
}

.p-tablist-viewport {
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scrollbar-width: none;
    overscroll-behavior: contain auto;
}

.p-tablist-viewport::-webkit-scrollbar {
    display: none;
}

.p-tablist-tab-list {
    position: relative;
    display: flex;
    background: `.concat(e("tabs.tablist.background"),`;
    border-style: solid;
    border-color: `).concat(e("tabs.tablist.border.color"),`;
    border-width: `).concat(e("tabs.tablist.border.width"),`;
}

.p-tablist-content {
    flex-grow: 1;
}

.p-tablist-nav-button {
    all: unset;
    position: absolute !important;
    flex-shrink: 0;
    top: 0;
    z-index: 2;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: `).concat(e("tabs.nav.button.background"),`;
    color: `).concat(e("tabs.nav.button.color"),`;
    width: `).concat(e("tabs.nav.button.width"),`;
    transition: color `).concat(e("tabs.transition.duration"),", outline-color ").concat(e("tabs.transition.duration"),", box-shadow ").concat(e("tabs.transition.duration"),`;
    box-shadow: `).concat(e("tabs.nav.button.shadow"),`;
    outline-color: transparent;
    cursor: pointer;
}

.p-tablist-nav-button:focus-visible {
    z-index: 1;
    box-shadow: `).concat(e("tabs.nav.button.focus.ring.shadow"),`;
    outline: `).concat(e("tabs.nav.button.focus.ring.width")," ").concat(e("tabs.nav.button.focus.ring.style")," ").concat(e("tabs.nav.button.focus.ring.color"),`;
    outline-offset: `).concat(e("tabs.nav.button.focus.ring.offset"),`;
}

.p-tablist-nav-button:hover {
    color: `).concat(e("tabs.nav.button.hover.color"),`;
}

.p-tablist-prev-button {
    left: 0;
}

.p-tablist-next-button {
    right: 0;
}

.p-tab {
    flex-shrink: 0;
    cursor: pointer;
    user-select: none;
    position: relative;
    border-style: solid;
    white-space: nowrap;
    background: `).concat(e("tabs.tab.background"),`;
    border-width: `).concat(e("tabs.tab.border.width"),`;
    border-color: `).concat(e("tabs.tab.border.color"),`;
    color: `).concat(e("tabs.tab.color"),`;
    padding: `).concat(e("tabs.tab.padding"),`;
    font-weight: `).concat(e("tabs.tab.font.weight"),`;
    transition: background `).concat(e("tabs.transition.duration"),", border-color ").concat(e("tabs.transition.duration"),", color ").concat(e("tabs.transition.duration"),", outline-color ").concat(e("tabs.transition.duration"),", box-shadow ").concat(e("tabs.transition.duration"),`;
    margin: `).concat(e("tabs.tab.margin"),`;
    outline-color: transparent;
}

.p-tab:not(.p-disabled):focus-visible {
    z-index: 1;
    box-shadow: `).concat(e("tabs.tab.focus.ring.shadow"),`;
    outline: `).concat(e("tabs.tab.focus.ring.width")," ").concat(e("tabs.tab.focus.ring.style")," ").concat(e("tabs.tab.focus.ring.color"),`;
    outline-offset: `).concat(e("tabs.tab.focus.ring.offset"),`;
}

.p-tab:not(.p-tab-active):not(.p-disabled):hover {
    background: `).concat(e("tabs.tab.hover.background"),`;
    border-color: `).concat(e("tabs.tab.hover.border.color"),`;
    color: `).concat(e("tabs.tab.hover.color"),`;
}

.p-tab-active {
    background: `).concat(e("tabs.tab.active.background"),`;
    border-color: `).concat(e("tabs.tab.active.border.color"),`;
    color: `).concat(e("tabs.tab.active.color"),`;
}

.p-tabpanels {
    background: `).concat(e("tabs.tabpanel.background"),`;
    color: `).concat(e("tabs.tabpanel.color"),`;
    padding: `).concat(e("tabs.tabpanel.padding"),`;
    outline: 0 none;
}

.p-tabpanel:focus-visible {
    box-shadow: `).concat(e("tabs.tabpanel.focus.ring.shadow"),`;
    outline: `).concat(e("tabs.tabpanel.focus.ring.width")," ").concat(e("tabs.tabpanel.focus.ring.style")," ").concat(e("tabs.tabpanel.focus.ring.color"),`;
    outline-offset: `).concat(e("tabs.tabpanel.focus.ring.offset"),`;
}

.p-tablist-active-bar {
    z-index: 1;
    display: block;
    position: absolute;
    bottom: `).concat(e("tabs.active.bar.bottom"),`;
    height: `).concat(e("tabs.active.bar.height"),`;
    background: `).concat(e("tabs.active.bar.background"),`;
    transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
}
`)},st={root:function(t){var e=t.props;return["p-tabs p-component",{"p-tabs-scrollable":e.scrollable}]}},it=m.extend({name:"tabs",theme:nt,classes:st}),rt={name:"BaseTabs",extends:y,props:{value:{type:String,default:void 0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},showNavigators:{type:Boolean,default:!0},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1}},style:it,provide:function(){return{$pcTabs:this,$parentInstance:this}}},R={name:"Tabs",extends:rt,inheritAttrs:!1,emits:["update:value"],data:function(){return{id:this.$attrs.id,d_value:this.value}},watch:{"$attrs.id":function(t){this.id=t||K()},value:function(t){this.d_value=t}},mounted:function(){this.id=this.id||K()},methods:{updateValue:function(t){this.d_value!==t&&(this.d_value=t,this.$emit("update:value",t))},isVertical:function(){return this.orientation==="vertical"}}};function ot(a,t,e,n,r,s){return i(),c("div",l({class:a.cx("root")},a.ptmi("root")),[h(a.$slots,"default")],16)}R.render=ot;var lt={root:"p-tablist",content:function(t){var e=t.instance;return["p-tablist-content",{"p-tablist-viewport":e.$pcTabs.scrollable}]},tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},ct=m.extend({name:"tablist",classes:lt}),ut={name:"BaseTabList",extends:y,props:{},style:ct,provide:function(){return{$pcTabList:this,$parentInstance:this}}},F={name:"TabList",extends:ut,inheritAttrs:!1,inject:["$pcTabs"],data:function(){return{isPrevButtonEnabled:!1,isNextButtonEnabled:!0}},resizeObserver:void 0,watch:{showNavigators:function(t){t?this.bindResizeObserver():this.unbindResizeObserver()},activeValue:{flush:"post",handler:function(){this.updateInkBar()}}},mounted:function(){var t=this;this.$nextTick(function(){t.updateInkBar()}),this.showNavigators&&(this.updateButtonState(),this.bindResizeObserver())},updated:function(){this.showNavigators&&this.updateButtonState()},beforeUnmount:function(){this.unbindResizeObserver()},methods:{onScroll:function(t){this.showNavigators&&this.updateButtonState(),t.preventDefault()},onPrevButtonClick:function(){var t=this.$refs.content,e=$(t),n=t.scrollLeft-e;t.scrollLeft=n<=0?0:n},onNextButtonClick:function(){var t=this.$refs.content,e=$(t)-this.getVisibleButtonWidths(),n=t.scrollLeft+e,r=t.scrollWidth-e;t.scrollLeft=n>=r?r:n},bindResizeObserver:function(){var t=this;this.resizeObserver=new ResizeObserver(function(){return t.updateButtonState()}),this.resizeObserver.observe(this.$refs.list)},unbindResizeObserver:function(){var t;(t=this.resizeObserver)===null||t===void 0||t.unobserve(this.$refs.list),this.resizeObserver=void 0},updateInkBar:function(){var t=this.$refs,e=t.content,n=t.inkbar,r=t.tabs,s=V(e,'[data-pc-name="tab"][data-p-active="true"]');this.$pcTabs.isVertical()?(n.style.height=q(s)+"px",n.style.top=T(s).top-T(r).top+"px"):(n.style.width=M(s)+"px",n.style.left=T(s).left-T(r).left+"px")},updateButtonState:function(){var t=this.$refs,e=t.list,n=t.content,r=n.scrollLeft,s=n.scrollTop,b=n.scrollWidth,f=n.scrollHeight,H=n.offsetWidth,W=n.offsetHeight,I=[$(n),J(n)],U=I[0],j=I[1];this.$pcTabs.isVertical()?(this.isPrevButtonEnabled=s!==0,this.isNextButtonEnabled=e.offsetHeight>=W&&parseInt(s)!==f-j):(this.isPrevButtonEnabled=r!==0,this.isNextButtonEnabled=e.offsetWidth>=H&&parseInt(r)!==b-U)},getVisibleButtonWidths:function(){var t=this.$refs,e=t.prevBtn,n=t.nextBtn;return[e,n].reduce(function(r,s){return s?r+$(s):r},0)}},computed:{templates:function(){return this.$pcTabs.$slots},activeValue:function(){return this.$pcTabs.d_value},showNavigators:function(){return this.$pcTabs.scrollable&&this.$pcTabs.showNavigators},prevButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0}},components:{ChevronLeftIcon:Y,ChevronRightIcon:Z},directives:{ripple:z}},dt=["aria-label","tabindex"],bt=["aria-orientation"],pt=["aria-label","tabindex"];function ht(a,t,e,n,r,s){var b=_("ripple");return i(),c("div",l({ref:"list",class:a.cx("root")},a.ptmi("root")),[s.showNavigators&&r.isPrevButtonEnabled?A((i(),c("button",l({key:0,ref:"prevButton",class:a.cx("prevButton"),"aria-label":s.prevButtonAriaLabel,tabindex:s.$pcTabs.tabindex,onClick:t[0]||(t[0]=function(){return s.onPrevButtonClick&&s.onPrevButtonClick.apply(s,arguments)})},a.ptm("prevButton"),{"data-pc-group-section":"navigator"}),[(i(),o(P(s.templates.previcon||"ChevronLeftIcon"),l({"aria-hidden":"true"},a.ptm("prevIcon")),null,16))],16,dt)),[[b]]):v("",!0),w("div",l({ref:"content",class:a.cx("content"),onScroll:t[1]||(t[1]=function(){return s.onScroll&&s.onScroll.apply(s,arguments)})},a.ptm("content")),[w("div",l({ref:"tabs",class:a.cx("tabList"),role:"tablist","aria-orientation":s.$pcTabs.orientation||"horizontal"},a.ptm("tabList")),[h(a.$slots,"default"),w("span",l({ref:"inkbar",class:a.cx("activeBar"),role:"presentation","aria-hidden":"true"},a.ptm("activeBar")),null,16)],16,bt)],16),s.showNavigators&&r.isNextButtonEnabled?A((i(),c("button",l({key:1,ref:"nextButton",class:a.cx("nextButton"),"aria-label":s.nextButtonAriaLabel,tabindex:s.$pcTabs.tabindex,onClick:t[2]||(t[2]=function(){return s.onNextButtonClick&&s.onNextButtonClick.apply(s,arguments)})},a.ptm("nextButton"),{"data-pc-group-section":"navigator"}),[(i(),o(P(s.templates.nexticon||"ChevronRightIcon"),l({"aria-hidden":"true"},a.ptm("nextIcon")),null,16))],16,pt)),[[b]]):v("",!0)],16)}F.render=ht;var vt={root:function(t){var e=t.instance,n=t.props;return["p-tab",{"p-tab-active":e.active,"p-disabled":n.disabled}]}},ft=m.extend({name:"tab",classes:vt}),gt={name:"BaseTab",extends:y,props:{value:{type:String,default:void 0},disabled:{type:Boolean,default:!1},as:{type:String,default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:ft,provide:function(){return{$pcTab:this,$parentInstance:this}}},x={name:"Tab",extends:gt,inheritAttrs:!1,inject:["$pcTabs","$pcTabList"],methods:{onFocus:function(){this.$pcTabs.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(t){switch(t.code){case"ArrowRight":this.onArrowRightKey(t);break;case"ArrowLeft":this.onArrowLeftKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"PageDown":this.onPageDownKey(t);break;case"PageUp":this.onPageUpKey(t);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(t);break}},onArrowRightKey:function(t){var e=this.findNextTab(t.currentTarget);e?this.changeFocusedTab(t,e):this.onHomeKey(t),t.preventDefault()},onArrowLeftKey:function(t){var e=this.findPrevTab(t.currentTarget);e?this.changeFocusedTab(t,e):this.onEndKey(t),t.preventDefault()},onHomeKey:function(t){var e=this.findFirstTab();this.changeFocusedTab(t,e),t.preventDefault()},onEndKey:function(t){var e=this.findLastTab();this.changeFocusedTab(t,e),t.preventDefault()},onPageDownKey:function(t){this.scrollInView(this.findLastTab()),t.preventDefault()},onPageUpKey:function(t){this.scrollInView(this.findFirstTab()),t.preventDefault()},onEnterKey:function(t){this.changeActiveValue(),t.preventDefault()},findNextTab:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=e?t:t.nextElementSibling;return n?k(n,"data-p-disabled")||k(n,"data-pc-section")==="inkbar"?this.findNextTab(n):V(n,'[data-pc-name="tab"]'):null},findPrevTab:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=e?t:t.previousElementSibling;return n?k(n,"data-p-disabled")||k(n,"data-pc-section")==="inkbar"?this.findPrevTab(n):V(n,'[data-pc-name="tab"]'):null},findFirstTab:function(){return this.findNextTab(this.$pcTabList.$refs.content.firstElementChild,!0)},findLastTab:function(){return this.findPrevTab(this.$pcTabList.$refs.content.lastElementChild,!0)},changeActiveValue:function(){this.$pcTabs.updateValue(this.value)},changeFocusedTab:function(t,e){Q(e),this.scrollInView(e)},scrollInView:function(t){var e;t==null||(e=t.scrollIntoView)===null||e===void 0||e.call(t,{block:"nearest"})}},computed:{active:function(){var t;return O((t=this.$pcTabs)===null||t===void 0?void 0:t.d_value,this.value)},id:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.id,"_tab_").concat(this.value)},ariaControls:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.id,"_tabpanel_").concat(this.value)},attrs:function(){return l(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.active?this.$pcTabs.tabindex:-1,role:"tab","aria-selected":this.active,"aria-controls":this.ariaControls,"data-pc-name":"tab","data-p-disabled":this.disabled,"data-p-active":this.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.active}}}},directives:{ripple:z}};function mt(a,t,e,n,r,s){var b=_("ripple");return a.asChild?h(a.$slots,"default",{key:1,class:E(a.cx("root")),active:s.active,a11yAttrs:s.a11yAttrs,onClick:s.onClick}):A((i(),o(P(a.as),l({key:0,class:a.cx("root"),onClick:s.onClick},s.attrs),{default:d(function(){return[h(a.$slots,"default")]}),_:3},16,["class","onClick"])),[[b]])}x.render=mt;var yt={root:"p-tabpanels"},$t=m.extend({name:"tabpanels",classes:yt}),Tt={name:"BaseTabPanels",extends:y,props:{},style:$t,provide:function(){return{$pcTabPanels:this,$parentInstance:this}}},D={name:"TabPanels",extends:Tt,inheritAttrs:!1};function kt(a,t,e,n,r,s){return i(),c("div",l({class:a.cx("root"),role:"presentation"},a.ptmi("root")),[h(a.$slots,"default")],16)}D.render=kt;var wt={root:function(t){var e=t.instance;return["p-tabpanel",{"p-tabpanel-active":e.active}]}},xt=m.extend({name:"tabpanel",classes:wt}),Bt={name:"BaseTabPanel",extends:y,props:{value:{type:String,default:void 0},as:{type:String,default:"DIV"},asChild:{type:Boolean,default:!1},header:null,headerStyle:null,headerClass:null,headerProps:null,headerActionProps:null,contentStyle:null,contentClass:null,contentProps:null,disabled:Boolean},style:xt,provide:function(){return{$pcTabPanel:this,$parentInstance:this}}},B={name:"TabPanel",extends:Bt,inheritAttrs:!1,inject:["$pcTabs"],computed:{active:function(){var t;return O((t=this.$pcTabs)===null||t===void 0?void 0:t.d_value,this.value)},id:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.id,"_tabpanel_").concat(this.value)},ariaLabelledby:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.id,"_tab_").concat(this.value)},attrs:function(){return l(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){var t;return{id:this.id,tabindex:(t=this.$pcTabs)===null||t===void 0?void 0:t.tabindex,role:"tabpanel","aria-labelledby":this.ariaLabelledby,"data-pc-name":"tabpanel","data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function At(a,t,e,n,r,s){var b,f;return s.$pcTabs?(i(),c(g,{key:1},[a.asChild?h(a.$slots,"default",{key:1,class:E(a.cx("root")),active:s.active,a11yAttrs:s.a11yAttrs}):(i(),c(g,{key:0},[!((b=s.$pcTabs)!==null&&b!==void 0&&b.lazy)||s.active?A((i(),o(P(a.as),l({key:0,class:a.cx("root")},s.attrs),{default:d(function(){return[h(a.$slots,"default")]}),_:3},16,["class"])),[[X,(f=s.$pcTabs)!==null&&f!==void 0&&f.lazy?!0:s.active]]):v("",!0)],64))],64)):h(a.$slots,"default",{key:0})}B.render=At;const Pt={class:"w-2/3 mx-auto"},Ct={key:0},Lt={key:0,class:"grid grid-cols-2 2xl:grid-cols-3 gap-6"},Nt={key:0,class:"grid grid-cols-4 gap-4"},ea={__name:"SearchResult",props:{tasks:Object,groups:Array,tags:Array},setup(a){return(t,e)=>(i(),o(G,{title:"Search Results"},{default:d(()=>[w("div",Pt,[p(u(R),{value:"0"},{default:d(()=>[p(u(F),{class:"mx-auto bg-gray-50"},{default:d(()=>[p(u(x),{value:"0",as:"div",class:"font-semibold"},{default:d(()=>[C("Tasks "),a.tasks.total?(i(),o(u(S),{key:0,severity:"contrast",value:a.tasks.total,class:"ms-2"},null,8,["value"])):v("",!0)]),_:1}),p(u(x),{value:"1",as:"div",class:"font-semibold"},{default:d(()=>[C("Groups "),a.groups.length?(i(),o(u(S),{key:0,severity:"contrast",value:a.groups.length,class:"ms-2"},null,8,["value"])):v("",!0)]),_:1}),p(u(x),{value:"2",as:"div",class:"font-semibold"},{default:d(()=>[C("Tags "),a.tags.length?(i(),o(u(S),{key:0,severity:"contrast",value:a.tags.length,class:"ms-2"},null,8,["value"])):v("",!0)]),_:1})]),_:1}),p(u(D),{class:"mt-6"},{default:d(()=>[p(u(B),{value:"0"},{default:d(()=>[a.tasks.total?(i(),c("div",Ct,[(i(!0),c(g,null,L(a.tasks.data,n=>(i(),o(tt,{key:n.id,task:n,"show-status":"",taskGroup:n.task_group},null,8,["task","taskGroup"]))),128))])):(i(),o(N,{key:1}))]),_:1}),p(u(B),{value:"1"},{default:d(()=>[a.groups.length?(i(),c("div",Lt,[(i(!0),c(g,null,L(a.groups,n=>(i(),o(at,{key:n.id,group:n},null,8,["group"]))),128))])):(i(),o(N,{key:1}))]),_:1}),p(u(B),{value:"2"},{default:d(()=>[a.tags.length?(i(),c("div",Nt,[(i(!0),c(g,null,L(a.tags,n=>(i(),o(et,{key:n.id,tag:n},null,8,["tag"]))),128))])):(i(),o(N,{key:1}))]),_:1})]),_:1})]),_:1})])]),_:1}))}};export{ea as default};
