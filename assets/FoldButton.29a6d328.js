import{d as e,b5 as n,aN as o,aQ as t,a1 as s,e as a,aV as d,h as i,o as r,i as l,j as c}from"./index.0fe5b4aa.js";import"./index.8d91dadc.js";import{d as u}from"./useHeaderSetting.4dec64a8.js";import{R as f}from"./RedoOutlined.fd624382.js";var p=e({name:"FoldButton",components:{RedoOutlined:f,Tooltip:n,Icon:o},setup(){const{prefixCls:e}=t("multiple-tabs-content"),{getShowMenu:n,setMenuSetting:o}=d(),{getShowHeader:i,setHeaderSetting:r}=u(),l=s((()=>!a(n)&&!a(i)));return{prefixCls:e,getIcon:s((()=>a(l)?"codicon:screen-normal":"codicon:screen-full")),handleFold:function(){const e=!a(n)&&!a(i);o({show:e,hidden:!e}),r({show:e})}}}});p.render=function(e,n,o,t,s,a){const d=i("Icon");return r(),l("span",{class:`${e.prefixCls}__extra-fold`,onClick:n[1]||(n[1]=(...n)=>e.handleFold&&e.handleFold(...n))},[c(d,{icon:e.getIcon},null,8,["icon"])],2)};export default p;