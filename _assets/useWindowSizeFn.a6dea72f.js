import{bg as e,cR as n,cP as t}from"./index.5a06cc5a.js";function i(i,s=150,r){let o=()=>{i()};const[a,c]=e(o,s,r);o=a;const d=()=>{r&&r.immediate&&o(),window.addEventListener("resize",o)},m=()=>{window.removeEventListener("resize",o),c()};return n((()=>{d()})),t((()=>{m()})),[d,m]}export{i as u};