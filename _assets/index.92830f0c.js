let e=document.createElement("style");e.innerHTML=".box[data-v-49e309b4]{width:150px;height:150px;margin-top:20px;background:pink}",document.head.appendChild(e);import{a,r as s,d0 as t,d1 as i,i as o,o as r,j as l,k as n,cL as c,ap as d,aq as p,bi as u,p as m}from"./index.5a06cc5a.js";import"./xlsx.a48e520c.js";import{S as v}from"./index.285e765e.js";import"./Trigger.99f55fa6.js";import"./omit.dc68979e.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.43ac9423.js";import"./CheckOutlined.a9c880f1.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.3c41385f.js";import"./tsxHelper.7d018852.js";import{F as S,S as x,a as T,b,c as j,d as f,e as h,f as R,g as X,h as Y,i as g,E as k,j as y}from"./index.1b9ab3b5.js";import"./domUtils.a8aece5c.js";const E=["Fade","Scale","SlideY","ScrollY","SlideYReverse","ScrollYReverse","SlideX","ScrollX","SlideXReverse","ScrollXReverse","ScaleRotate","ExpandX","Expand"].map((e=>({label:e,value:e,key:e})));var _=a({components:{Select:v,FadeTransition:S,ScaleTransition:x,SlideYTransition:T,ScrollYTransition:b,SlideYReverseTransition:j,ScrollYReverseTransition:f,SlideXTransition:h,ScrollXTransition:R,SlideXReverseTransition:X,ScrollXReverseTransition:Y,ScaleRotateTransition:g,ExpandXTransition:k,ExpandTransition:y},setup(){const e=s("Fade"),a=s(!0);return{options:E,value:e,start:function(){a.value=!1,setTimeout((()=>{a.value=!0}),300)},show:a}}});const w=u("data-v-49e309b4");t("data-v-49e309b4");const F={class:"p-4"},C={class:"flex"},H=m(" start "),L={class:"box"};i();const O=w(((e,a,s,t,i,u)=>{const m=o("Select"),v=o("a-button");return r(),l("div",F,[n("div",C,[n(m,{options:e.options,value:e.value,"onUpdate:value":a[1]||(a[1]=a=>e.value=a),placeholder:"选择动画",style:{width:"150px"}},null,8,["options","value"]),n(v,{type:"primary",class:"ml-4",onClick:e.start},{default:w((()=>[H])),_:1},8,["onClick"])]),(r(),l(c(`${e.value}Transition`),null,{default:w((()=>[d(n("div",L,null,512),[[p,e.show]])])),_:1}))])}));_.render=O,_.__scopeId="data-v-49e309b4";export default _;