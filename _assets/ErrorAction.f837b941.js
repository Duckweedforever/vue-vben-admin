import{a as t,u as o,aS as e,I as r,ax as a,dp as s,i as n,o as i,j as u,w as l,k as m}from"./index.5a06cc5a.js";import"./xlsx.a48e520c.js";import"./Trigger.99f55fa6.js";import{B as c}from"./index.39e2192c.js";import"./colors.fef6a1d3.js";import{T as d}from"./index.39112e54.js";import{B as f}from"./BugOutlined.c49a2343.js";var p=t({name:"ErrorAction",components:{BugOutlined:f,Tooltip:d,Badge:c},setup(){const{t:t}=o(),{push:n}=e();return{t:t,getCount:r((()=>s.getErrorListCountState)),handleToErrorList:function(){n(a.ERROR_LOG_PAGE).then((()=>{s.commitErrorListCountState(0)}))}}}});p.render=function(t,o,e,r,a,s){const c=n("BugOutlined"),d=n("Badge"),f=n("Tooltip");return i(),u(f,{title:t.t("layout.header.tooltipErrorLog"),placement:"bottom",mouseEnterDelay:.5,onClick:t.handleToErrorList},{default:l((()=>[m(d,{count:t.getCount,offset:[0,10],dot:"",overflowCount:99},{default:l((()=>[m(c)])),_:1},8,["count"])])),_:1},8,["title","mouseEnterDelay","onClick"])};export default p;