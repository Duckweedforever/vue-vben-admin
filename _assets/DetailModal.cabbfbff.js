import{a as t,u as s,i as e,o as i,j as o,w as r,k as a,J as m}from"./index.5a06cc5a.js";import"./xlsx.a48e520c.js";import"./omit.dc68979e.js";import"./_baseSlice.1123a25b.js";import"./colors.fef6a1d3.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.3c41385f.js";import"./index.78155a1f.js";import"./index.813fa6f2.js";import"./CloseOutlined.56ba74fc.js";import"./FullscreenOutlined.d1c71cb2.js";import"./RightOutlined.18857b33.js";import"./useTimeout.f9167c02.js";import"./tsxHelper.7d018852.js";import"./index.1b9ab3b5.js";import"./domUtils.a8aece5c.js";import"./index.2d373899.js";import"./animation.91509674.js";import"./useScrollTo.06e85a9e.js";import{u as n}from"./useDescription.e1a8f997.js";import{D as p}from"./index.dab6baae.js";import"./useAttrs.00256126.js";import{s as c}from"./index.de6754de.js";import"./useWindowSizeFn.a6dea72f.js";import{getDescSchema as d}from"./data.b3acc525.js";var l=t({name:"ErrorLogDetailModal",components:{BasicModal:c,Description:p},props:{info:{type:Object,default:null}},setup(){const{t:t}=s(),[e]=n({column:2,schema:d()});return{register:e,useI18n:s,t:t}}});l.render=function(t,s,n,p,c,d){const l=e("Description"),j=e("BasicModal");return i(),o(j,m({width:800,title:t.t("sys.errorLog.tableActionDesc")},t.$attrs),{default:r((()=>[a(l,{data:t.info,onRegister:t.register},null,8,["data","onRegister"])])),_:1},16,["title"])};export default l;