import{d as e,b5 as l,u as t,a1 as s,e as n,h as r,o as u,i as o,w as a,j as i}from"./index.0fe5b4aa.js";import"./index.8d91dadc.js";import{u as c}from"./useFullScreen.1085181f.js";import{F as d,a as F}from"./FullscreenOutlined.23d5b3f8.js";var m=e({name:"FullScreen",components:{FullscreenExitOutlined:d,FullscreenOutlined:F,Tooltip:l},setup(){const{t:e}=t(),{toggleFullscreen:l,isFullscreenRef:r}=c();return{getTitle:s((()=>n(r)?e("layout.header.tooltipExitFull"):e("layout.header.tooltipEntryFull"))),isFullscreen:r,toggleFullscreen:l}}});m.render=function(e,l,t,s,n,c){const d=r("FullscreenOutlined"),F=r("FullscreenExitOutlined"),m=r("Tooltip");return u(),o(m,{title:e.getTitle,placement:"bottom",mouseEnterDelay:.5},{default:a((()=>[i("span",{onClick:l[1]||(l[1]=(...l)=>e.toggleFullscreen&&e.toggleFullscreen(...l))},[e.isFullscreen?(u(),o(F,{key:1})):(u(),o(d,{key:0}))])])),_:1},8,["title","mouseEnterDelay"])};export default m;