import{a as r,i as e,o as i,j as o,k as s,w as a,p as t}from"./index.5a06cc5a.js";import"./xlsx.a48e520c.js";import"./index.285e765e.js";import"./Trigger.99f55fa6.js";import"./omit.dc68979e.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.43ac9423.js";import"./CheckOutlined.a9c880f1.js";import"./index.27a16a8f.js";import{A as n}from"./index.0f62caa7.js";import"./colors.fef6a1d3.js";import"./RightOutlined.177f594b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.3c41385f.js";import"./index.2d99723f.js";import"./index.a172b251.js";import"./index.39112e54.js";import"./index.d758c27b.js";import"./UpOutlined.93565ff1.js";import"./index.4befb70e.js";import"./index.78155a1f.js";import"./index.5d3cdfa6.js";import"./index.f07c31d6.js";import"./index.6da2e83a.js";import"./index.8afcc759.js";import"./index.813fa6f2.js";import{u as p}from"./index.c0c0fbcb.js";import"./LoadingOutlined.91523ad2.js";import"./RightOutlined.18857b33.js";import"./useTimeout.f9167c02.js";import"./tsxHelper.7d018852.js";import"./index.1b9ab3b5.js";import"./domUtils.a8aece5c.js";import"./index.2d373899.js";import"./animation.91509674.js";import"./useScrollTo.06e85a9e.js";import"./useAttrs.00256126.js";import m from"./Drawer1.7cc84aab.js";import d from"./Drawer2.7d4bbfc3.js";import c from"./Drawer3.fe701d6f.js";import"./index.f0b16be7.js";import"./useForm.5208afd5.js";import f from"./Drawer4.c5a053bf.js";import l from"./Drawer5.349933ea.js";var j=r({components:{Alert:n,Drawer1:m,Drawer2:d,Drawer3:c,Drawer4:f,Drawer5:l},setup(){const[r,{openDrawer:e,setDrawerProps:i}]=p(),[o,{openDrawer:s}]=p(),[a,{openDrawer:t}]=p(),[n,{openDrawer:m}]=p(),[d,{openDrawer:c}]=p();return{register1:r,openDrawer1:e,register2:o,openDrawer2:s,register3:a,openDrawer3:t,register4:n,register5:d,openDrawer5:c,send:function(){m(!0,{data:"content",info:"Info"})},openDrawerLoading:function(){e(),i({loading:!0}),setTimeout((()=>{i({loading:!1})}),2e3)}}}});const w={class:"px-10 py-4"},D=t("打开Drawer"),g=t("打开Drawer"),u=t("打开Drawer"),x=t("打开Drawer并传递数据"),b=t("打开详情Drawer");j.render=function(r,t,n,p,m,d){const c=e("Alert"),f=e("a-button"),l=e("Drawer1"),j=e("Drawer2"),y=e("Drawer3"),R=e("Drawer4"),k=e("Drawer5");return i(),o("div",w,[s(c,{message:"使用 useDrawer 进行抽屉操作","show-icon":""}),s(f,{type:"primary",class:"my-4",onClick:r.openDrawerLoading},{default:a((()=>[D])),_:1},8,["onClick"]),s(c,{message:"内外同时控制显示隐藏","show-icon":""}),s(f,{type:"primary",class:"my-4",onClick:t[1]||(t[1]=e=>r.openDrawer2(!0))},{default:a((()=>[g])),_:1}),s(c,{message:"自适应高度/显示footer","show-icon":""}),s(f,{type:"primary",class:"my-4",onClick:t[2]||(t[2]=e=>r.openDrawer3(!0))},{default:a((()=>[u])),_:1}),s(c,{message:"内外数据交互,外部通过 transferModalData 发送，内部通过 receiveDrawerDataRef 接收。该数据具有响应式","show-icon":""}),s(f,{type:"primary",class:"my-4",onClick:r.send},{default:a((()=>[x])),_:1},8,["onClick"]),s(c,{message:"详情页模式","show-icon":""}),s(f,{type:"primary",class:"my-4",onClick:t[3]||(t[3]=e=>r.openDrawer5(!0))},{default:a((()=>[b])),_:1}),s(l,{onRegister:r.register1},null,8,["onRegister"]),s(j,{onRegister:r.register2},null,8,["onRegister"]),s(y,{onRegister:r.register3},null,8,["onRegister"]),s(R,{onRegister:r.register4},null,8,["onRegister"]),s(k,{onRegister:r.register5},null,8,["onRegister"])])};export default j;