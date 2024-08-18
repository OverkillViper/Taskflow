import{t as v,d as S,a as z,b as M}from"./differenceInCalendarDays-Bp0PEmVY.js";import{B as U,s as T,o as u,f as p,F as P,G as k,m as c,r as d,n as w,b as C,t as y,z as Y,a as D,g as b}from"./app-CjkOLGii.js";function oe(e,t){const r=v(e),n=v(t),o=N(r,n),a=Math.abs(S(r,n));r.setDate(r.getDate()-o*a);const l=+(N(r,n)===-o),i=o*(a-l);return i===0?0:i}function N(e,t){const r=e.getFullYear()-t.getFullYear()||e.getMonth()-t.getMonth()||e.getDate()-t.getDate()||e.getHours()-t.getHours()||e.getMinutes()-t.getMinutes()||e.getSeconds()-t.getSeconds()||e.getMilliseconds()-t.getMilliseconds();return r<0?-1:r>0?1:r}function le(e,t){const n=V(e);let o;if(n.date){const s=L(n.date,2);o=A(s.restDateString,s.year)}if(!o||isNaN(o.getTime()))return new Date(NaN);const a=o.getTime();let l=0,i;if(n.time&&(l=Z(n.time),isNaN(l)))return new Date(NaN);if(n.timezone){if(i=B(n.timezone),isNaN(i))return new Date(NaN)}else{const s=new Date(a+l),m=new Date(0);return m.setFullYear(s.getUTCFullYear(),s.getUTCMonth(),s.getUTCDate()),m.setHours(s.getUTCHours(),s.getUTCMinutes(),s.getUTCSeconds(),s.getUTCMilliseconds()),m}return new Date(a+l+i)}const f={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},$=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,F=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,G=/^([+-])(\d{2})(?::?(\d{2}))?$/;function V(e){const t={},r=e.split(f.dateTimeDelimiter);let n;if(r.length>2)return t;if(/:/.test(r[0])?n=r[0]:(t.date=r[0],n=r[1],f.timeZoneDelimiter.test(t.date)&&(t.date=e.split(f.timeZoneDelimiter)[0],n=e.substr(t.date.length,e.length))),n){const o=f.timezone.exec(n);o?(t.time=n.replace(o[1],""),t.timezone=o[1]):t.time=n}return t}function L(e,t){const r=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),n=e.match(r);if(!n)return{year:NaN,restDateString:""};const o=n[1]?parseInt(n[1]):null,a=n[2]?parseInt(n[2]):null;return{year:a===null?o:a*100,restDateString:e.slice((n[1]||n[2]).length)}}function A(e,t){if(t===null)return new Date(NaN);const r=e.match($);if(!r)return new Date(NaN);const n=!!r[4],o=g(r[1]),a=g(r[2])-1,l=g(r[3]),i=g(r[4]),s=g(r[5])-1;if(n)return J(t,i,s)?H(t,i,s):new Date(NaN);{const m=new Date(0);return!E(t,a,l)||!x(t,o)?new Date(NaN):(m.setUTCFullYear(t,a,Math.max(o,l)),m)}}function g(e){return e?parseInt(e):1}function Z(e){const t=e.match(F);if(!t)return NaN;const r=h(t[1]),n=h(t[2]),o=h(t[3]);return j(r,n,o)?r*z+n*M+o*1e3:NaN}function h(e){return e&&parseFloat(e.replace(",","."))||0}function B(e){if(e==="Z")return 0;const t=e.match(G);if(!t)return 0;const r=t[1]==="+"?-1:1,n=parseInt(t[2]),o=t[3]&&parseInt(t[3])||0;return q(n,o)?r*(n*z+o*M):NaN}function H(e,t,r){const n=new Date(0);n.setUTCFullYear(e,0,4);const o=n.getUTCDay()||7,a=(t-1)*7+r+1-o;return n.setUTCDate(n.getUTCDate()+a),n}const W=[31,null,31,30,31,30,31,31,30,31,30,31];function I(e){return e%400===0||e%4===0&&e%100!==0}function E(e,t,r){return t>=0&&t<=11&&r>=1&&r<=(W[t]||(I(e)?29:28))}function x(e,t){return t>=1&&t<=(I(e)?366:365)}function J(e,t,r){return t>=1&&t<=53&&r>=0&&r<=6}function j(e,t,r){return e===24?t===0&&r===0:r>=0&&r<60&&t>=0&&t<60&&e>=0&&e<25}function q(e,t){return t>=0&&t<=59}var K=function(t){var r=t.dt;return`
.p-metergroup {
    display: flex;
    gap: `.concat(r("metergroup.gap"),`;
}

.p-metergroup-meters {
    display: flex;
    background: `).concat(r("metergroup.meters.background"),`;
    border-radius: `).concat(r("metergroup.border.radius"),`;
}

.p-metergroup-label-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    list-style-type: none;
}

.p-metergroup-label {
    display: inline-flex;
    align-items: center;
    gap: `).concat(r("metergroup.label.gap"),`;
}

.p-metergroup-label-marker {
    display: inline-flex;
    width: `).concat(r("metergroup.label.marker.size"),`;
    height: `).concat(r("metergroup.label.marker.size"),`;
    border-radius: 100%;
}

.p-metergroup-label-icon {
    font-size: `).concat(r("metergroup.label.icon.size"),`;
    width: `).concat(r("metergroup.label.icon.size"),`;
    height: `).concat(r("metergroup.label.icon.size"),`;
}

.p-metergroup-horizontal {
    flex-direction: column;
}

.p-metergroup-label-list-horizontal {
    gap: `).concat(r("metergroup.label.list.horizontal.gap"),`;
}

.p-metergroup-horizontal .p-metergroup-meters {
    height: `).concat(r("metergroup.meters.size"),`;
}

.p-metergroup-horizontal .p-metergroup-meter:first-of-type {
    border-top-left-radius: `).concat(r("metergroup.border.radius"),`;
    border-bottom-left-radius: `).concat(r("metergroup.border.radius"),`;
}

.p-metergroup-horizontal .p-metergroup-meter:last-of-type {
    border-top-right-radius: `).concat(r("metergroup.border.radius"),`;
    border-bottom-right-radius: `).concat(r("metergroup.border.radius"),`;
}

.p-metergroup-vertical {
    flex-direction: row;
}

.p-metergroup-label-list-vertical {
    flex-direction: column;
    gap: `).concat(r("metergroup.label.list.vertical.gap"),`;
}

.p-metergroup-vertical .p-metergroup-meters {
    flex-direction: column;
    width: `).concat(r("metergroup.meters.size"),`;
    height: 100%;
}

.p-metergroup-vertical .p-metergroup-label-list {
    align-items: start;
}

.p-metergroup-vertical .p-metergroup-meter:first-of-type {
    border-top-left-radius: `).concat(r("metergroup.border.radius"),`;
    border-top-right-radius: `).concat(r("metergroup.border.radius"),`;
}
.p-metergroup-vertical .p-metergroup-meter:last-of-type {
    border-bottom-left-radius: `).concat(r("metergroup.border.radius"),`;
    border-bottom-right-radius: `).concat(r("metergroup.border.radius"),`;
}
`)},Q={root:function(t){var r=t.props;return["p-metergroup p-component",{"p-metergroup-horizontal":r.orientation==="horizontal","p-metergroup-vertical":r.orientation==="vertical"}]},meters:"p-metergroup-meters",meter:"p-metergroup-meter",labelList:function(t){var r=t.props;return["p-metergroup-label-list",{"p-metergroup-label-list-vertical":r.labelOrientation==="vertical","p-metergroup-label-list-horizontal":r.labelOrientation==="horizontal"}]},label:"p-metergroup-label",labelIcon:"p-metergroup-label-icon",labelMarker:"p-metergroup-label-marker",labelText:"p-metergroup-label-text"},R=U.extend({name:"metergroup",theme:K,classes:Q}),X={name:"MeterGroup",extends:T,props:{value:{type:Array,default:null},min:{type:Number,default:0},max:{type:Number,default:100},orientation:{type:String,default:"horizontal"},labelPosition:{type:String,default:"end"},labelOrientation:{type:String,default:"horizontal"}},style:R,provide:function(){return{$pcMeterGroup:this,$parentInstance:this}}},O={name:"MeterGroupLabel",hostName:"MeterGroup",extends:T,inheritAttrs:!1,props:{value:{type:Array,default:null},labelPosition:{type:String,default:"end"},labelOrientation:{type:String,default:"horizontal"}}};function _(e,t,r,n,o,a){return u(),p("ol",c({class:e.cx("labelList")},e.ptm("labelList")),[(u(!0),p(P,null,k(r.value,function(l,i){return u(),p("li",c({key:i+"_label",class:e.cx("label"),ref_for:!0},e.ptm("label")),[d(e.$slots,"icon",{value:l,class:w(e.cx("labelIcon"))},function(){return[l.icon?(u(),p("i",c({key:0,class:[l.icon,e.cx("labelIcon")],style:{color:l.color},ref_for:!0},e.ptm("labelIcon")),null,16)):(u(),p("span",c({key:1,class:e.cx("labelMarker"),style:{backgroundColor:l.color},ref_for:!0},e.ptm("labelMarker")),null,16))]}),C("span",c({class:e.cx("labelText"),ref_for:!0},e.ptm("labelText")),y(l.label)+" ("+y(e.$parentInstance.percentValue(l.value))+")",17)],16)}),128))],16)}O.render=_;var ee={name:"MeterGroup",extends:X,inheritAttrs:!1,methods:{getPTOptions:function(t,r,n){return this.ptm(t,{context:{value:r,index:n}})},percent:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,r=(t-this.min)/(this.max-this.min)*100;return Math.round(Math.max(0,Math.min(100,r)))},percentValue:function(t){return this.percent(t)+"%"},meterCalculatedStyles:function(t){return{backgroundColor:t.color,width:this.orientation==="horizontal"&&this.percentValue(t.value),height:this.orientation==="vertical"&&this.percentValue(t.value)}}},computed:{totalPercent:function(){return this.percent(this.value.reduce(function(t,r){return t+r.value},0))},percentages:function(){var t=0,r=[];return this.value.forEach(function(n){t+=n.value,r.push(t)}),r}},components:{MeterGroupLabel:O}},te=["aria-valuemin","aria-valuemax","aria-valuenow"];function re(e,t,r,n,o,a){var l=Y("MeterGroupLabel");return u(),p("div",c({class:e.cx("root"),role:"meter","aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":a.totalPercent},e.ptmi("root")),[e.labelPosition==="start"?d(e.$slots,"label",{key:0,value:e.value,totalPercent:a.totalPercent,percentages:a.percentages},function(){return[D(l,{value:e.value,labelPosition:e.labelPosition,labelOrientation:e.labelOrientation,unstyled:e.unstyled,pt:e.pt},null,8,["value","labelPosition","labelOrientation","unstyled","pt"])]}):b("",!0),d(e.$slots,"start",{value:e.value,totalPercent:a.totalPercent,percentages:a.percentages}),C("div",c({class:e.cx("meters")},e.ptm("meters")),[(u(!0),p(P,null,k(e.value,function(i,s){return d(e.$slots,"meter",{key:s,value:i,index:s,class:w(e.cx("meter")),orientation:e.orientation,size:a.percentValue(i.value),totalPercent:a.totalPercent},function(){return[a.percent(i.value)?(u(),p("span",c({key:0,class:e.cx("meter"),style:a.meterCalculatedStyles(i),ref_for:!0},a.getPTOptions("meter",i,s)),null,16)):b("",!0)]})}),128))],16),d(e.$slots,"end",{value:e.value,totalPercent:a.totalPercent,percentages:a.percentages}),e.labelPosition==="end"?d(e.$slots,"label",{key:1,value:e.value,totalPercent:a.totalPercent,percentages:a.percentages},function(){return[D(l,{value:e.value,labelPosition:e.labelPosition,labelOrientation:e.labelOrientation,unstyled:e.unstyled,pt:e.pt},null,8,["value","labelPosition","labelOrientation","unstyled","pt"])]}):b("",!0)],16,te)}ee.render=re;export{oe as d,le as p,ee as s};
