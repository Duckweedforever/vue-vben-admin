let t=document.createElement("style");t.innerHTML=".step2[data-v-3e6a7e30]{width:450px;margin:0 auto}",document.head.appendChild(t);import{a as e,d0 as s,d1 as i,i as a,o,j as r,k as n,bi as d,p as m}from"./index.5a06cc5a.js";import"./xlsx.a48e520c.js";import"./index.285e765e.js";import"./Trigger.99f55fa6.js";import"./omit.dc68979e.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.43ac9423.js";import"./CheckOutlined.a9c880f1.js";import{s as p}from"./index.27a16a8f.js";import"./colors.fef6a1d3.js";import"./RightOutlined.177f594b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.3c41385f.js";import"./index.2d99723f.js";import"./index.a172b251.js";import"./index.39112e54.js";import"./index.d758c27b.js";import"./UpOutlined.93565ff1.js";import"./index.4befb70e.js";import"./index.78155a1f.js";import"./index.5d3cdfa6.js";import"./index.f07c31d6.js";import"./index.6da2e83a.js";import"./LoadingOutlined.91523ad2.js";import"./RightOutlined.18857b33.js";import"./tsxHelper.7d018852.js";import"./index.2d373899.js";import"./useAttrs.00256126.js";import"./index.f0b16be7.js";import{u as c}from"./useForm.5208afd5.js";import{step2Schemas as l}from"./data.938b6aa7.js";var u=e({components:{BasicForm:p},emits:["next","prev"],setup(t,{emit:e}){const[s,{validate:i,setProps:a}]=c({labelWidth:80,schemas:l,actionColOptions:{span:14},resetButtonOptions:{text:"上一步"},submitButtonOptions:{text:"提交"},resetFunc:async function(){e("prev")},submitFunc:async function(){try{const t=await i();a({submitButtonOptions:{loading:!0}}),setTimeout((()=>{a({submitButtonOptions:{loading:!1}}),e("next",t)}),1500)}catch(t){}}});return{register:s}}});const j=d("data-v-3e6a7e30");s("data-v-3e6a7e30");const f={class:"step2"},x=m(" ant-design@alipay.com "),b=m(" test@example.com "),g=m(" Vben "),O=m(" 500元 ");i();const h=j(((t,e,s,i,d,m)=>{const p=a("a-alert"),c=a("a-descriptions-item"),l=a("a-descriptions"),u=a("a-divider"),h=a("BasicForm");return o(),r("div",f,[n(p,{message:"确认转账后，资金将直接打入对方账户，无法退回。","show-icon":""}),n(l,{column:1,class:"mt-5"},{default:j((()=>[n(c,{label:"付款账户"},{default:j((()=>[x])),_:1}),n(c,{label:"收款账户"},{default:j((()=>[b])),_:1}),n(c,{label:"收款人姓名"},{default:j((()=>[g])),_:1}),n(c,{label:"转账金额"},{default:j((()=>[O])),_:1})])),_:1}),n(u),n(h,{onRegister:t.register},null,8,["onRegister"])])}));u.render=h,u.__scopeId="data-v-3e6a7e30";export default u;