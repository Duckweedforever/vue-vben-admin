import{a as e}from"./index.78d3227f.js";import{r as t,e as r,s as a,b3 as o,d as n,h as s,o as i,i as l,w as d,j as m,m as c}from"./index.0fe5b4aa.js";import{_ as p}from"./index.65a34c2d.js";import"./index.31dd779b.js";import"./domUtils.38af2ce7.js";import"./_stringToArray.ec312786.js";import"./RightOutlined.51c6a3b9.js";import"./index.8d91dadc.js";import"./useTimeout.7518e08e.js";import"./useScrollTo.da2c7ca7.js";import"./animation.40f56c40.js";import"./index.5e23d9bb.js";import"./index.db17a88d.js";import"./RightOutlined.41d2778b.js";import"./types.6e0f3d6a.js";import"./isEqual.68d23930.js";import"./toInteger.44429000.js";import"./DownOutlined.18f1db32.js";import"./index.323d7b75.js";import"./usePageContext.26b49328.js";import"./transButton.4dcaf1a5.js";const u=Symbol("watermark-dom");var f=n({components:{CollapseContainer:e,PageWrapper:p},setup(){const e=t(null),{setWatermark:n,clear:s}=function(e=t(document.body)){let n=()=>{};const s=u.toString(),i=()=>{const t=document.getElementById(s);if(t){const a=r(e);a&&a.removeChild(t)}window.removeEventListener("resize",n)},l=t=>{i();const a=document.createElement("canvas");a.width=300,a.height=240;const o=a.getContext("2d");o&&(o.rotate(-20*Math.PI/120),o.font="15px Vedana",o.fillStyle="rgba(0, 0, 0, 0.15)",o.textAlign="left",o.textBaseline="middle",o.fillText(t,a.width/20,a.height));const n=document.createElement("div");n.id=s,n.style.pointerEvents="none",n.style.top="3px",n.style.left="0px",n.style.position="absolute",n.style.zIndex="100000",n.style.width=document.documentElement.clientWidth+"px",n.style.height=document.documentElement.clientHeight+"px",n.style.background="url("+a.toDataURL("image/png")+") left top repeat";const l=r(e);return l&&l.appendChild(n),s};return{setWatermark:function(e){l(e),n=()=>{l(e)},window.addEventListener("resize",n),o()&&a((()=>{i()}))},clear:i}}();return{setWatermark:n,clear:s,areaRef:e}}});const j=c(" Create "),g=c("Clear"),x=c(" Reset ");f.render=function(e,t,r,a,o,n){const c=s("a-button"),p=s("CollapseContainer"),u=s("PageWrapper");return i(),l(u,{title:"水印示例"},{default:d((()=>[m(p,{class:"px-20 bg-white w-full h-32 rounded-md",title:"Global WaterMark"},{default:d((()=>[m(c,{type:"primary",class:"mr-2",onClick:t[1]||(t[1]=t=>e.setWatermark("WaterMark Info"))},{default:d((()=>[j])),_:1}),m(c,{color:"error",class:"mr-2",onClick:e.clear},{default:d((()=>[g])),_:1},8,["onClick"]),m(c,{color:"warning",class:"mr-2",onClick:t[2]||(t[2]=t=>e.setWatermark("WaterMark Info New"))},{default:d((()=>[x])),_:1})])),_:1})])),_:1})};export default f;