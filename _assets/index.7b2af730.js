import{P as t,q as e,a as i,B as o,v as n,x as r,R as s,ak as a,S as c,k as l,an as d,V as p,ao as u,aR as f,b2 as m,i as g,o as h,j as v,m as j,aM as b}from"./index.5a06cc5a.js";import"./xlsx.a48e520c.js";import{s as x,g as k}from"./useSortable.daa299b8.js";import"./index.285e765e.js";import"./Trigger.99f55fa6.js";import"./omit.dc68979e.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.43ac9423.js";import"./CheckOutlined.a9c880f1.js";import"./colors.fef6a1d3.js";import"./index.c61a7dc8.js";import"./RightOutlined.177f594b.js";import"./index.a77047a8.js";import"./types.0e8929fe.js";import"./_baseFor.f4e5f03f.js";import"./index.2d99723f.js";import"./index.a172b251.js";import"./index.39112e54.js";import"./index.d758c27b.js";import"./LeftOutlined.87d99e02.js";import"./index.78155a1f.js";import"./index.aa5d2aff.js";import"./zh_CN.0242bd16.js";import"./CaretDownFilled.1bd696db.js";import"./index.f0b16be7.js";function S(){return(S=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t}).apply(this,arguments)}function T(){return window}var y=i({name:"ABackTop",mixins:[o],inheritAttrs:!1,props:S(S({},{visibilityHeight:t.number,target:t.func,prefixCls:t.string,onClick:t.func}),{visibilityHeight:t.number.def(400)}),emits:["click"],setup:function(){return{configProvider:n("configProvider",r)}},data:function(){return{visible:!1,scrollEvent:null}},mounted:function(){var t=this;s((function(){var e=t.target||T;t.scrollEvent=a(e(),"scroll",t.handleScroll),t.handleScroll()}))},beforeUnmount:function(){this.scrollEvent&&this.scrollEvent.remove()},methods:{getCurrentScrollTop:function(){var t=(this.target||T)();return t===window?window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop:t.scrollTop},scrollToTop:function(t){var e=this.target;x(0,{getContainer:void 0===e?T:e}),this.$emit("click",t)},handleScroll:function(){var t=this.visibilityHeight,e=this.target,i=k((void 0===e?T:e)(),!0);this.setState({visible:i>t})}},render:function(){var t,e,i=this.prefixCls,o=this.$slots,n=(0,this.configProvider.getPrefixCls)("back-top",i),r=c(n,this.$attrs.class),s=l("div",{class:"".concat(n,"-content")},[l("div",{class:"".concat(n,"-icon")},null)]),a=S(S({},this.$attrs),{onClick:this.scrollToTop,class:r}),f=this.visible?l("div",a,[(null===(t=o.default)||void 0===t?void 0:t.call(o))||s]):null,m=d("fade");return l(u,m,"function"==typeof(e=f)||"[object Object]"===Object.prototype.toString.call(e)&&!p(e)?f:{default:function(){return[f]}})}}),w=i({name:"LayoutFeatures",components:{BackTop:e(y),LayoutLockPage:f((()=>import("./index.1fda8bd2.js"))),SettingDrawer:f((()=>import("./index.84f68a36.js").then((function(t){return t.i}))))},setup(){const{getUseOpenBackTop:t,getShowSettingButton:e}=m();return{getTarget:()=>document.body,getUseOpenBackTop:t,getShowSettingButton:e}}});w.render=function(t,e,i,o,n,r){const s=g("LayoutLockPage"),a=g("BackTop"),c=g("SettingDrawer");return h(),v(b,null,[l(s),t.getUseOpenBackTop?(h(),v(a,{key:0,target:t.getTarget},null,8,["target"])):j("v-if",!0),t.getShowSettingButton?(h(),v(c,{key:1})):j("v-if",!0)],64)};export default w;