import{d as t,r as e,a as i,a1 as r,e as s,dK as a,aZ as n,q as l,E as h,cG as m,j as o,bW as c}from"./index.0fe5b4aa.js";var u=t({name:"VirtualScroll",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String],bench:{type:[Number,String],default:0},itemHeight:{type:[Number,String],required:!0},items:{type:Array,default:()=>[]}},setup(t,{slots:u}){const g=e(null),d=i({first:0,last:0,scrollTop:0}),f=r((()=>parseInt(t.bench,10))),p=r((()=>parseInt(t.itemHeight,10))),b=r((()=>Math.max(0,d.first-s(f)))),x=r((()=>Math.min((t.items||[]).length,d.last+s(f)))),H=r((()=>({height:a((t.items||[]).length*s(p))}))),S=r((()=>{const e={},i=a(t.height),r=a(t.minHeight),s=a(t.minWidth),n=a(t.maxHeight),l=a(t.maxWidth),h=a(t.width);return i&&(e.height=i),r&&(e.minHeight=r),s&&(e.minWidth=s),n&&(e.maxHeight=n),l&&(e.maxWidth=l),h&&(e.width=h),e}));function y(e){const i=s(g);if(!i)return 0;const r=parseInt(t.height||0,10)||i.clientHeight;return e+Math.ceil(r/s(p))}function N(){const t=s(g);t&&(d.scrollTop=t.scrollTop,d.first=Math.floor(d.scrollTop/s(p)),d.last=y(d.first))}function v(){const{items:e=[]}=t;return e.slice(s(b),s(x)).map(W)}function W(t,e){e+=s(b);const i=a(e*s(p));return o("div",{class:"virtual-scroll__item",style:{top:i},key:e},[c(u,"default",{index:e,item:t})])}return n([()=>t.itemHeight,()=>t.height],(()=>{N()})),l((()=>{d.last=y(0),h((()=>{const t=s(g);t&&m({el:t,name:"scroll",listener:N,wait:0})}))})),()=>o("div",{class:"virtual-scroll",style:s(S),ref:g},[o("div",{class:"virtual-scroll__container",style:s(H)},[v()])])}});export default u;