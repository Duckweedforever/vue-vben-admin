import{_ as s}from"./index.a593d1c4.js";import{D as t}from"./index.97c7cf2a.js";import{u as i}from"./useDescription.9ca0bb13.js";import{d as o,u as r,h as e,o as a,i as n,w as d,j as m,aH as c}from"./index.0fe5b4aa.js";import{getDescSchema as p}from"./data.43412fb3.js";import"./useTimeout.7518e08e.js";import"./useAttrs.47c04b5d.js";import"./useWindowSizeFn.d1a35182.js";import"./index.78d3227f.js";import"./index.31dd779b.js";import"./domUtils.38af2ce7.js";import"./_stringToArray.ec312786.js";import"./RightOutlined.51c6a3b9.js";import"./index.8d91dadc.js";import"./useScrollTo.da2c7ca7.js";import"./animation.40f56c40.js";import"./FullscreenOutlined.23d5b3f8.js";import"./isEqual.68d23930.js";import"./index.a726157a.js";import"./responsiveObserve.c545f1cc.js";import"./index.10b50b58.js";import"./colors.fc0812f0.js";var j=o({name:"ErrorLogDetailModal",components:{BasicModal:s,Description:t},props:{info:{type:Object,default:null}},setup(){const{t:s}=r(),[t]=i({column:2,schema:p()});return{register:t,useI18n:r,t:s}}});j.render=function(s,t,i,o,r,p){const j=e("Description"),l=e("BasicModal");return a(),n(l,c({width:800,title:s.t("sys.errorLog.tableActionDesc")},s.$attrs),{default:d((()=>[m(j,{data:s.info,onRegister:s.register},null,8,["data","onRegister"])])),_:1},16,["title"])};export default j;