import{a as t,B as n,v as e,x as r,k as o,S as s,V as i,ae as a,G as u,P as c,O as l,C as f,ap as h,U as p,an as d,ao as m,ac as y,aq as b,q as g}from"./index.5a06cc5a.js";import{P as v}from"./colors.fef6a1d3.js";function C(){return(C=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function S(t){return"function"==typeof t||"[object Object]"===Object.prototype.toString.call(t)&&!i(t)}function N(t){return t?t.toString().split("").reverse().map((function(t){var n=Number(t);return isNaN(n)?t:n})):[]}var x=t({name:"ScrollNumber",mixins:[n],inheritAttrs:!1,props:{prefixCls:c.string,count:c.any,component:c.string,title:c.oneOfType([c.number,c.string,null]),displayComponent:c.any,onAnimated:c.func},emits:["animated"],setup:function(){return{configProvider:e("configProvider",r),lastCount:void 0,timeout:void 0}},data:function(){return{animateStarted:!0,sCount:this.count}},watch:{count:function(){this.lastCount=this.sCount,this.setState({animateStarted:!0})}},updated:function(){var t=this,n=this.animateStarted,e=this.count;n&&(this.clearTimeout(),this.timeout=setTimeout((function(){t.setState({animateStarted:!1,sCount:e},t.handleAnimated)})))},beforeUnmount:function(){this.clearTimeout()},methods:{clearTimeout:function(t){function n(){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(){this.timeout&&(clearTimeout(this.timeout),this.timeout=void 0)})),getPositionByNum:function(t,n){var e=this.sCount,r=Math.abs(Number(e)),o=Math.abs(Number(this.lastCount)),s=Math.abs(N(e)[n]),i=Math.abs(N(this.lastCount)[n]);return this.animateStarted?10+t:r>o?s>=i?10+t:20+t:s<=i?10+t:t},handleAnimated:function(){this.$emit("animated")},renderNumberList:function(t,n){for(var e=[],r=0;r<30;r++)e.push(o("p",{key:r.toString(),class:s(n,{current:t===r})},[r%10]));return e},renderCurrentNumber:function(t,n,e){if("number"==typeof n){var r=this.getPositionByNum(n,e),s={transition:this.animateStarted||void 0===N(this.lastCount)[e]?"none":void 0,msTransform:"translateY(".concat(100*-r,"%)"),WebkitTransform:"translateY(".concat(100*-r,"%)"),transform:"translateY(".concat(100*-r,"%)")};return o("span",{class:"".concat(t,"-only"),style:s,key:e},[this.renderNumberList(r,"".concat(t,"-only-unit"))])}return o("span",{key:"symbol",class:"".concat(t,"-symbol")},S(n)?n:{default:function(){return[n]}})},renderNumberElement:function(t){var n=this,e=this.sCount;return e&&Number(e)%1==0?N(e).map((function(e,r){return n.renderCurrentNumber(t,e,r)})).reverse():e}},render:function(){var t,n=this.prefixCls,e=this.title,r=this.component,i=void 0===r?"sup":r,c=this.displayComponent,l=(0,this.configProvider.getPrefixCls)("scroll-number",n),f=this.$attrs,h=f.class,p=f.style,d=void 0===p?{}:p;if(c)return a(c,{class:s("".concat(l,"-custom-component"),c.props&&c.props.class)});var m=u(C(C({},this.$props),this.$attrs),["count","onAnimated","component","prefixCls","displayComponent"]),y=C({},d),b=C(C({},m),{title:e,style:y,class:s(l,h)});return d&&d.borderColor&&(b.style.boxShadow="0 0 0 1px ".concat(d.borderColor," inset")),o(i,b,S(t=this.renderNumberElement(l))?t:{default:function(){return[t]}})}}),O=function(t){return!isNaN(parseFloat(t))&&isFinite(t)};function P(t){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function w(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function j(){return(j=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function T(t){return"function"==typeof t||"[object Object]"===Object.prototype.toString.call(t)&&!i(t)}function B(t){return-1!==v.indexOf(t)}var D=g(t({name:"ABadge",props:l({count:c.VNodeChild,showZero:c.looseBool,overflowCount:c.number,dot:c.looseBool,prefixCls:c.string,scrollNumberPrefixCls:c.string,status:c.oneOf(y("success","processing","default","error","warning")),color:c.string,text:c.VNodeChild,offset:c.arrayOf(c.oneOfType([String,Number])),numberStyle:c.style,title:c.string},{showZero:!1,dot:!1,overflowCount:99}),setup:function(){return{configProvider:e("configProvider",r),badgeCount:void 0}},methods:{getNumberedDispayCount:function(){var t=this.$props.overflowCount,n=this.badgeCount;return n>t?"".concat(t,"+"):n},getDispayCount:function(){return this.isDot()?"":this.getNumberedDispayCount()},getScrollNumberTitle:function(){var t=this.$props.title,n=this.badgeCount;return t||("string"==typeof n||"number"==typeof n?n:void 0)},getStyleWithOffset:function(){var t=this.$props,n=t.offset,e=t.numberStyle;return j(n?{right:"".concat(-parseInt(n[0],10),"px"),marginTop:O(n[1])?"".concat(n[1],"px"):n[1]}:{},e)},getBadgeClassName:function(t,n){var e,r=this.hasStatus();return s(t,(w(e={},"".concat(t,"-status"),r),w(e,"".concat(t,"-dot-status"),r&&this.dot&&!this.isZero()),w(e,"".concat(t,"-not-a-wrapper"),!n.length),e))},hasStatus:function(){var t=this.$props,n=t.status,e=t.color;return!!n||!!e},isZero:function(){var t=this.getNumberedDispayCount();return"0"===t||0===t},isDot:function(){var t=this.$props.dot,n=this.isZero();return t&&!n||this.hasStatus()},isHidden:function(){var t=this.$props.showZero,n=this.getDispayCount(),e=this.isZero(),r=this.isDot();return(null==n||""===n||e&&!t)&&!r},renderStatusText:function(t){var n=f(this,"text");return this.isHidden()||!n?null:o("span",{class:"".concat(t,"-status-text")},T(n)?n:{default:function(){return[n]}})},renderDispayComponent:function(){var t=this.badgeCount;if(t&&"object"===P(t))return a(t,{style:this.getStyleWithOffset()},!1)},renderBadgeNumber:function(t,n){var e,r=this.$props,s=r.status,i=r.color,a=this.badgeCount,u=this.getDispayCount(),c=this.isDot(),l=this.isHidden(),f=(w(e={},"".concat(t,"-dot"),c),w(e,"".concat(t,"-count"),!c),w(e,"".concat(t,"-multiple-words"),!c&&a&&a.toString&&a.toString().length>1),w(e,"".concat(t,"-status-").concat(s),!!s),w(e,"".concat(t,"-status-").concat(i),B(i)),e),p=this.getStyleWithOffset();return i&&!B(i)&&((p=p||{}).background=i),l?null:h(o(x,{prefixCls:n,"data-show":!l,class:f,count:u,displayComponent:this.renderDispayComponent(),title:this.getScrollNumberTitle(),style:p,key:"scrollNumber"},null),[[b,!l]])}},render:function(){var t,n=this.prefixCls,e=this.scrollNumberPrefixCls,r=this.status,i=this.color,a=f(this,"text"),u=this.configProvider.getPrefixCls,c=u("badge",n),l=u("scroll-number",e),h=p(this),y=f(this,"count");Array.isArray(y)&&(y=y[0]),this.badgeCount=y;var b=this.renderBadgeNumber(c,l),g=this.renderStatusText(c),v=s((w(t={},"".concat(c,"-status-dot"),this.hasStatus()),w(t,"".concat(c,"-status-").concat(r),!!r),w(t,"".concat(c,"-status-").concat(i),B(i)),t)),C={};if(i&&!B(i)&&(C.background=i),!h.length&&this.hasStatus()){var S=this.getStyleWithOffset(),N=S&&S.color;return o("span",{class:this.getBadgeClassName(c,h),style:S},[o("span",{class:v,style:C},null),o("span",{style:{color:N},class:"".concat(c,"-status-text")},T(a)?a:{default:function(){return[a]}})])}var x=d(h.length?"".concat(c,"-zoom"):"");return o("span",{class:this.getBadgeClassName(c,h)},[h,o(m,x,T(b)?b:{default:function(){return[b]}}),g])}}));export{D as B,O as i};