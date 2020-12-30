import{k as t,J as e,cO as r,a,M as n,i,o,j as s,w as l}from"./index.5a06cc5a.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.3c41385f.js";import{a as c}from"./index.813fa6f2.js";import"./RightOutlined.18857b33.js";import"./useTimeout.f9167c02.js";import"./tsxHelper.7d018852.js";import"./index.1b9ab3b5.js";import"./domUtils.a8aece5c.js";import"./index.2d373899.js";import"./animation.91509674.js";import"./useScrollTo.06e85a9e.js";import{B as u,t as f}from"./data.c5f2ef8a.js";var p={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"};function m(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var b=function(a,n){var i=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?Object(arguments[e]):{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),a.forEach((function(e){m(t,e,r[e])}))}return t}({},a,n.attrs);return t(r,e(i,{icon:p}),null)};b.displayName="DeleteOutlined",b.inheritAttrs=!1;var d={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"};function h(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var v=function(a,n){var i=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?Object(arguments[e]):{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),a.forEach((function(e){h(t,e,r[e])}))}return t}({},a,n.attrs);return t(r,e(i,{icon:d}),null)};v.displayName="PlusOutlined",v.inheritAttrs=!1;var j=a({components:{BasicTree:u,CollapseContainer:c},setup:()=>({treeData:f,actionList:[{render:t=>n(v,{class:"ml-2",onClick:()=>{}})},{render:()=>n(b)}],getRightMenuList:function(t){return[{label:"新增",handler:()=>{},icon:"bi:plus"},{label:"删除",handler:()=>{},icon:"bx:bxs-folder-open"}]}})});const g={class:"flex p-4"};j.render=function(e,r,a,n,c,u){const f=i("BasicTree"),p=i("CollapseContainer");return o(),s("div",g,[t(p,{title:"右侧操作按钮",class:"mr-4",style:{width:"33%"}},{default:l((()=>[t(f,{treeData:e.treeData,actionList:e.actionList},null,8,["treeData","actionList"])])),_:1}),t(p,{title:"右键菜单",class:"mr-4",style:{width:"33%"}},{default:l((()=>[t(f,{treeData:e.treeData,beforeRightClick:e.getRightMenuList},null,8,["treeData","beforeRightClick"])])),_:1})])};export default j;