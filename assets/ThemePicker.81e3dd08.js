import{d as e,aQ as i,h as t,o as s,i as r,aR as o,aS as n,j as a}from"./index.0fe5b4aa.js";import{b as d}from"./index.50939f91.js";import{C as c}from"./CheckOutlined.9a1027dc.js";import"./index.38c23a97.js";import"./index.77bc81e1.js";import"./index.66f91fe7.js";import"./index.78d3227f.js";import"./index.31dd779b.js";import"./domUtils.38af2ce7.js";import"./_stringToArray.ec312786.js";import"./RightOutlined.51c6a3b9.js";import"./index.8d91dadc.js";import"./useTimeout.7518e08e.js";import"./useScrollTo.da2c7ca7.js";import"./animation.40f56c40.js";import"./useAttrs.47c04b5d.js";import"./isEqual.68d23930.js";import"./useHeaderSetting.4dec64a8.js";import"./SettingOutlined.443c9015.js";var p=e({name:"ThemePicker",components:{CheckOutlined:c},props:{colorList:{type:Array,defualt:[]},event:{type:Number,default:()=>{}},def:{type:String}},setup(e){const{prefixCls:t}=i("setting-theme-picker");return{prefixCls:t,handleClick:function(i){e.event&&d(e.event,i)}}}});p.render=function(e,i,d,c,p,m){const l=t("CheckOutlined");return s(),r("div",{class:e.prefixCls},[(s(!0),r(o,null,n(e.colorList||[],(i=>(s(),r("span",{key:i,onClick:t=>e.handleClick(i),class:[`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===i}],style:{background:i}},[a(l)],14,["onClick"])))),128))],2)};export default p;