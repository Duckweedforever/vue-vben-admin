import{_ as r,a as e}from"./index.77bc81e1.js";import{d as t,h as s,o as i,i as a,w as o,j as n,aH as d,m as c}from"./index.0fe5b4aa.js";import"./index.66f91fe7.js";import"./index.78d3227f.js";import"./index.31dd779b.js";import"./domUtils.38af2ce7.js";import"./_stringToArray.ec312786.js";import"./RightOutlined.51c6a3b9.js";import"./index.8d91dadc.js";import"./useTimeout.7518e08e.js";import"./useScrollTo.da2c7ca7.js";import"./animation.40f56c40.js";import"./useAttrs.47c04b5d.js";import"./isEqual.68d23930.js";var m=t({components:{BasicDrawer:r},setup(){const[r,{closeDrawer:t}]=e();return{register:r,closeDrawer:t}}});const p=c(" Drawer Info. "),j=c("内部关闭drawer");m.render=function(r,e,t,c,m,l){const u=s("a-button"),f=s("BasicDrawer");return i(),a(f,d(r.$attrs,{onRegister:r.register,title:"Drawer Title",width:"50%"}),{default:o((()=>[p,n(u,{type:"primary",onClick:r.closeDrawer},{default:o((()=>[j])),_:1},8,["onClick"])])),_:1},16,["onRegister"])};export default m;