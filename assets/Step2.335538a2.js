import{d as t,cr as e,cs as i,h as s,o,i as r,j as a,bz as d,m as n}from"./index.0fe5b4aa.js";import{D as m}from"./index.a726157a.js";import{D as p}from"./index.38c23a97.js";import{A as c}from"./index.d639cb97.js";import{_ as j}from"./index.02b6349c.js";import{step2Schemas as l}from"./data.2505cb7f.js";import{u}from"./useForm.93a8670c.js";import"./responsiveObserve.c545f1cc.js";import"./index.00ebb736.js";import"./index.eba2a025.js";import"./findIndex.9d450757.js";import"./isEqual.68d23930.js";import"./_baseProperty.74f89655.js";import"./toInteger.44429000.js";import"./index.8eca1466.js";import"./index.b727e5d5.js";import"./SearchOutlined.bb6cb6d1.js";import"./DownOutlined.18f1db32.js";import"./CheckOutlined.46767306.js";import"./index.cc18ea0c.js";import"./index.086a754e.js";import"./UpOutlined.1d909d7c.js";import"./index.eb0e0f34.js";import"./EyeOutlined.8230c2e2.js";import"./index.10b50b58.js";import"./colors.fc0812f0.js";import"./RightOutlined.41d2778b.js";import"./index.db17a88d.js";import"./types.6e0f3d6a.js";import"./Tree.250abd7f.js";import"./util.0e07cdc5.js";import"./useAttrs.47c04b5d.js";import"./index.8d91dadc.js";import"./uuid.91c49fda.js";import"./index.cfbbf76c.js";import"./index.a593d1c4.js";import"./useTimeout.7518e08e.js";import"./useWindowSizeFn.d1a35182.js";import"./index.78d3227f.js";import"./index.31dd779b.js";import"./domUtils.38af2ce7.js";import"./_stringToArray.ec312786.js";import"./RightOutlined.51c6a3b9.js";import"./useScrollTo.da2c7ca7.js";import"./animation.40f56c40.js";import"./FullscreenOutlined.23d5b3f8.js";import"./index.509d0e58.js";import"./index.e0e15a7a.js";import"./LeftOutlined.fc8fb06d.js";import"./download.7d04639a.js";var f=t({components:{BasicForm:j,[c.name]:c,[p.name]:p,[m.name]:m,[m.Item.name]:m.Item},emits:["next","prev"],setup(t,{emit:e}){const[i,{validate:s,setProps:o}]=u({labelWidth:80,schemas:l,actionColOptions:{span:14},resetButtonOptions:{text:"上一步"},submitButtonOptions:{text:"提交"},resetFunc:async function(){e("prev")},submitFunc:async function(){try{const t=await s();o({submitButtonOptions:{loading:!0}}),setTimeout((()=>{o({submitButtonOptions:{loading:!1}}),e("next",t)}),1500)}catch(t){}}});return{register:i}}});const b=d("data-v-01481d2f");e("data-v-01481d2f");const x={class:"step2"},O=n(" ant-design@alipay.com "),g=n(" test@example.com "),v=n(" Vben "),_=n(" 500元 ");i();const h=b(((t,e,i,d,n,m)=>{const p=s("a-alert"),c=s("a-descriptions-item"),j=s("a-descriptions"),l=s("a-divider"),u=s("BasicForm");return o(),r("div",x,[a(p,{message:"确认转账后，资金将直接打入对方账户，无法退回。","show-icon":""}),a(j,{column:1,class:"mt-5"},{default:b((()=>[a(c,{label:"付款账户"},{default:b((()=>[O])),_:1}),a(c,{label:"收款账户"},{default:b((()=>[g])),_:1}),a(c,{label:"收款人姓名"},{default:b((()=>[v])),_:1}),a(c,{label:"转账金额"},{default:b((()=>[_])),_:1})])),_:1}),a(l),a(u,{onRegister:t.register},null,8,["onRegister"])])}));f.render=h,f.__scopeId="data-v-01481d2f";export default f;