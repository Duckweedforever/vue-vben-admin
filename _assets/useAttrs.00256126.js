import{df as s,b as t,aN as e,cD as a}from"./index.5a06cc5a.js";const c=["class","style"],n=/^on[A-Z]/;function r(r={}){const o=a();if(!o)return{};const{excludeListeners:u=!1,excludeKeys:d=[]}=r,i=s({}),l=d.concat(c);return o.attrs=t(o.attrs),e((()=>{const s=(t=o.attrs,Object.keys(t).map((s=>[s,t[s]]))).reduce(((s,[t,e])=>(l.includes(t)||u&&n.test(t)||(s[t]=e),s)),{});var t;i.value=s})),i}export{r as u};