var o=Object.assign;import{du as e,e as a,d as n,bw as t,r as i,a as s,aF as l,h as d,bD as p,H as r,o as u,i as m,w as c,j as g,m as f}from"./index.0fe5b4aa.js";import{A as b}from"./index.d639cb97.js";import{_ as y}from"./index.65a34c2d.js";import"./index.5e23d9bb.js";import"./index.db17a88d.js";import"./RightOutlined.41d2778b.js";import"./types.6e0f3d6a.js";import"./isEqual.68d23930.js";import"./toInteger.44429000.js";import"./DownOutlined.18f1db32.js";import"./index.8d91dadc.js";import"./index.323d7b75.js";import"./usePageContext.26b49328.js";import"./transButton.4dcaf1a5.js";function j(o){let n,t=document.body;if(Reflect.has(o,"target")||Reflect.has(o,"props")){const e=o;n=e.props||{},t=e.target||document.body}else n=o;const i=e(n);return[()=>{const o=a(t);o&&i.open(o)},()=>{i.close()}]}var L=n({components:{Loading:t,PageWrapper:y,[b.name]:b},setup(){const e=i(null),a=i(!1),n=s({absolute:!1,loading:!1,tip:"加载中..."}),[t,d]=j({tip:"加载中..."}),[p,r]=j({target:e,props:{tip:"加载中...",absolute:!0}});function u(o){n.absolute=o,n.loading=!0,setTimeout((()=>{n.loading=!1}),2e3)}return o({openCompFullLoading:function(){u(!1)},openFnFullLoading:function(){t(),setTimeout((()=>{d()}),2e3)},openFnWrapLoading:function(){p(),setTimeout((()=>{r()}),2e3)},openCompAbsolute:function(){u(!0)},wrapEl:e,loadingRef:a,openDirectiveLoading:function(){a.value=!0,setTimeout((()=>{a.value=!1}),2e3)}},l(n))}});const C=f("全屏 Loading"),k=f("容器内 Loading"),x=f("全屏 Loading"),F=f("容器内 Loading"),_=f(" 打开指令Loading ");L.render=function(o,e,a,n,t,i){const s=d("a-alert"),l=d("a-button"),f=d("Loading"),b=d("PageWrapper"),y=p("loading");return r((u(),m(b,{"loading-tip":"加载中...",title:"Loading组件示例"},{default:c((()=>[g(s,{message:"组件方式"}),g(l,{class:"my-4 mr-4",type:"primary",onClick:o.openCompFullLoading},{default:c((()=>[C])),_:1},8,["onClick"]),g(l,{class:"my-4",type:"primary",onClick:o.openCompAbsolute},{default:c((()=>[k])),_:1},8,["onClick"]),g(f,{loading:o.loading,absolute:o.absolute,tip:o.tip},null,8,["loading","absolute","tip"]),g(s,{message:"函数方式"}),g(l,{class:"my-4 mr-4",type:"primary",onClick:o.openFnFullLoading},{default:c((()=>[x])),_:1},8,["onClick"]),g(l,{class:"my-4",type:"primary",onClick:o.openFnWrapLoading},{default:c((()=>[F])),_:1},8,["onClick"]),g(s,{message:"指令方式"}),g(l,{class:"my-4 mr-4",type:"primary",onClick:o.openDirectiveLoading},{default:c((()=>[_])),_:1},8,["onClick"])])),_:1},512)),[[y,o.loadingRef]])};export default L;