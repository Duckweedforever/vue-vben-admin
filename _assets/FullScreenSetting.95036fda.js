import{a as e,u as l,i as n,o as t,j as i,w as s,k as r,n as o}from"./index.5a06cc5a.js";import"./xlsx.a48e520c.js";import"./Trigger.99f55fa6.js";import"./omit.dc68979e.js";import"./_baseSlice.1123a25b.js";import"./index.c61a7dc8.js";import"./RightOutlined.177f594b.js";import"./index.a77047a8.js";import"./types.0e8929fe.js";import"./index.a172b251.js";import{T as c}from"./index.39112e54.js";import"./index.cd6c8c97.js";import"./index.f07c31d6.js";import{F as a,a as u}from"./FullscreenOutlined.d1c71cb2.js";import{u as p}from"./TableAction.359b5d7f.js";import"./tsxHelper.7d018852.js";import"./index.f0b16be7.js";import{u as d}from"./useFullScreen.0267fe9d.js";var m=e({name:"FullScreenSetting",components:{FullscreenExitOutlined:a,FullscreenOutlined:u,Tooltip:c},setup(){const e=p(),{t:n}=l(),{toggleFullscreen:t,isFullscreenRef:i}=d(e.wrapRef);return{handleFullScreen:function(){t()},isFullscreenRef:i,t:n}}});m.render=function(e,l,c,a,u,p){const d=n("FullscreenOutlined"),m=n("FullscreenExitOutlined"),f=n("Tooltip");return t(),i(f,{placement:"top"},{title:s((()=>[r("span",null,o(e.t("component.table.settingFullScreen")),1)])),default:s((()=>[e.isFullscreenRef?(t(),i(m,{key:1,onClick:e.handleFullScreen},null,8,["onClick"])):(t(),i(d,{key:0,onClick:e.handleFullScreen},null,8,["onClick"]))])),_:1})};export default m;