import{a as e,P as o,v as n,x as c,S as l,k as t,r as a,aN as i,V as r,aM as s,bZ as u,bE as d}from"./index.5a06cc5a.js";import{P as f,a as v}from"./colors.fef6a1d3.js";function p(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}var b=e({name:"ACheckableTag",props:{prefixCls:o.string,checked:o.looseBool,onChange:{type:Function},onClick:{type:Function}},emits:["update:checked","change","click"],setup:function(e,o){var a=o.slots,i=o.emit,r=n("configProvider",c).getPrefixCls,s=function(o){var n=e.checked;i("update:checked",!n),i("change",!n),i("click",o)};return function(){var o,n,c=e.checked,i=e.prefixCls,u=r("tag",i),d=l(u,(p(o={},"".concat(u,"-checkable"),!0),p(o,"".concat(u,"-checkable-checked"),c),o));return t("span",{class:d,onClick:s},[null===(n=a.default)||void 0===n?void 0:n.call(a)])}}});function g(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function k(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!r(e)}var C=new RegExp("^(".concat(f.join("|"),")(-inverse)?$")),h=new RegExp("^(".concat(v.join("|"),")$")),m={prefixCls:o.string,color:{type:String},closable:o.looseBool.def(!1),closeIcon:o.VNodeChild,visible:o.looseBool,onClose:{type:Function},icon:o.VNodeChild},x=e({name:"ATag",emits:["update:visible","close"],setup:function(e,o){var r=o.slots,f=o.emit,v=o.attrs,p=n("configProvider",c).getPrefixCls,b=a(!0);i((function(){void 0!==e.visible&&(b.value=e.visible)}));var m=function(o){o.stopPropagation(),f("update:visible",!1),f("close",o),o.defaultPrevented||void 0===e.visible&&(b.value=!1)},x=function(){var o=e.color;return!!o&&(C.test(o)||h.test(o))};return function(){var o,n,c,a,i=e.prefixCls,f=e.icon,C=void 0===f?null===(n=r.icon)||void 0===n?void 0:n.call(r):f,h=e.color,P=e.closeIcon,j=void 0===P?null===(c=r.closeIcon)||void 0===c?void 0:c.call(r):P,y=e.closable,w=void 0!==y&&y,O=x(),T=p("tag",i),B={backgroundColor:h&&!x()?h:void 0},E=l(T,(g(o={},"".concat(T,"-").concat(h),O),g(o,"".concat(T,"-has-color"),h&&!O),g(o,"".concat(T,"-hidden"),!b.value),o)),F=C||null,I=null===(a=r.default)||void 0===a?void 0:a.call(r),N=F?t(s,null,[F,t("span",null,k(I)?I:{default:function(){return[I]}})]):I,S="onClick"in v,V=t("span",{class:E,style:B},[N,w?j?t("div",{class:"".concat(T,"-close-icon"),onClick:m},k(j)?j:{default:function(){return[j]}}):t(d,{class:"".concat(T,"-close-icon"),onClick:m},null):null]);return S?t(u,null,k(V)?V:{default:function(){return[V]}}):V}}});x.props=m,x.CheckableTag=b,x.install=function(e){return e.component(x.name,x),e.component(b.name,b),e};export{x as T};