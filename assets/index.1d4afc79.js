import{B as e}from"./index.de8d07a1.js";import{d as s,r as t,g as l,cr as c,cs as a,h as n,o as i,i as r,j as d,bz as u,m as o}from"./index.0fe5b4aa.js";import{_ as m}from"./index.65a34c2d.js";import{B as p}from"./BugOutlined.91caaf63.js";import{R as f}from"./RightOutlined.51c6a3b9.js";import"./index.5e23d9bb.js";import"./index.db17a88d.js";import"./RightOutlined.41d2778b.js";import"./types.6e0f3d6a.js";import"./isEqual.68d23930.js";import"./toInteger.44429000.js";import"./DownOutlined.18f1db32.js";import"./index.8d91dadc.js";import"./index.323d7b75.js";import"./usePageContext.26b49328.js";import"./transButton.4dcaf1a5.js";var b=s({components:{BasicDragVerify:e,BugOutlined:p,RightOutlined:f,PageWrapper:m},setup(){const{createMessage:e}=l();return{handleSuccess:function(s){const{time:t}=s;e.success(`校验成功,耗时${t}秒`)},el1:t(null),el2:t(null),el3:t(null),el4:t(null),el5:t(null),handleBtnClick:function(e){e&&e.resume()}}}});const y=u("data-v-5ebbb404");c("data-v-5ebbb404");const g={class:"flex justify-center p-4 items-center bg-gray-700"},j=o("还原"),h={class:"flex justify-center p-4 items-center bg-gray-700"},x=o("还原"),S={class:"flex justify-center p-4 items-center bg-gray-700"},k=o("还原"),B={class:"flex justify-center p-4 items-center bg-gray-700"},C=o("还原"),v={class:"flex justify-center p-4 items-center bg-gray-700"},_={key:0},O=o(" 成功 "),R={key:1},D=o(" 拖动 "),I=o("还原");a();const P=y(((e,s,t,l,c,a)=>{const u=n("BasicDragVerify"),o=n("a-button"),m=n("BugOutlined"),p=n("RightOutlined"),f=n("PageWrapper");return i(),r(f,{title:"拖动校验示例"},{default:y((()=>[d("div",g,[d(u,{ref:"el1",onSuccess:e.handleSuccess},null,8,["onSuccess"]),d(o,{type:"primary",class:"ml-2",onClick:s[1]||(s[1]=s=>e.handleBtnClick(e.el1))},{default:y((()=>[j])),_:1})]),d("div",h,[d(u,{ref:"el2",onSuccess:e.handleSuccess,circle:""},null,8,["onSuccess"]),d(o,{type:"primary",class:"ml-2",onClick:s[2]||(s[2]=s=>e.handleBtnClick(e.el2))},{default:y((()=>[x])),_:1})]),d("div",S,[d(u,{ref:"el3",onSuccess:e.handleSuccess,text:"拖动以进行校验",successText:"校验成功",barStyle:{background:"#018ffb"}},null,8,["onSuccess"]),d(o,{type:"primary",class:"ml-2",onClick:s[3]||(s[3]=s=>e.handleBtnClick(e.el3))},{default:y((()=>[k])),_:1})]),d("div",B,[d(u,{ref:"el4",onSuccess:e.handleSuccess},{actionIcon:y((e=>[e?(i(),r(m,{key:0})):(i(),r(p,{key:1}))])),_:1},8,["onSuccess"]),d(o,{type:"primary",class:"ml-2",onClick:s[4]||(s[4]=s=>e.handleBtnClick(e.el4))},{default:y((()=>[C])),_:1})]),d("div",v,[d(u,{ref:"el5",onSuccess:e.handleSuccess},{text:y((e=>[e?(i(),r("div",_,[d(m),O])):(i(),r("div",R,[D,d(p)]))])),_:1},8,["onSuccess"]),d(o,{type:"primary",class:"ml-2",onClick:s[5]||(s[5]=s=>e.handleBtnClick(e.el5))},{default:y((()=>[I])),_:1})])])),_:1})}));b.render=P,b.__scopeId="data-v-5ebbb404";export default b;