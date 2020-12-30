import{a as e,h as s,i,o,j as t,k as a,w as r,p as l}from"./index.5a06cc5a.js";import"./xlsx.a48e520c.js";import"./index.285e765e.js";import"./Trigger.99f55fa6.js";import"./omit.dc68979e.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.43ac9423.js";import"./CheckOutlined.a9c880f1.js";import{s as n}from"./index.27a16a8f.js";import"./colors.fef6a1d3.js";import"./RightOutlined.177f594b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.3c41385f.js";import"./index.2d99723f.js";import"./index.a172b251.js";import"./index.39112e54.js";import"./index.d758c27b.js";import"./UpOutlined.93565ff1.js";import"./index.4befb70e.js";import"./index.78155a1f.js";import"./index.5d3cdfa6.js";import"./index.f07c31d6.js";import"./index.6da2e83a.js";import{a as c}from"./index.813fa6f2.js";import"./LoadingOutlined.91523ad2.js";import"./RightOutlined.18857b33.js";import"./useTimeout.f9167c02.js";import"./tsxHelper.7d018852.js";import"./index.1b9ab3b5.js";import"./domUtils.a8aece5c.js";import"./index.2d373899.js";import"./animation.91509674.js";import"./useScrollTo.06e85a9e.js";import"./useAttrs.00256126.js";import"./index.f0b16be7.js";import{u as d}from"./useForm.5208afd5.js";const p=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},required:!0},{field:"field2",component:"Input",label:"字段2",colProps:{span:8},required:!0},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8},required:!0},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]},rules:[{required:!0,message:"请输入aa"}]},{field:"field44",component:"Input",label:"自定义校验",colProps:{span:8},rules:[{required:!0,validator:async(e,s)=>s?"1"===s?Promise.reject("值不能为1"):Promise.resolve():Promise.reject("值不能为空"),trigger:"change"}]},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},rules:[{required:!0}]},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},rules:[{required:!0,message:"覆盖默认生成的校验信息"}]}];var m=e({components:{BasicForm:n,CollapseContainer:c},setup(){const{createMessage:e}=s(),[i,{validateFields:o,clearValidate:t,getFieldsValue:a,setFieldsValue:r}]=d({labelWidth:120,schemas:p,actionColOptions:{span:24}});return{register:i,schemas:p,handleSubmit:s=>{e.success("click search,values:"+JSON.stringify(s))},getFormValues:function(){const s=a();e.success("values:"+JSON.stringify(s))},setFormValues:function(){r({field1:1111,field5:["1"],field7:"1"})},validateForm:async function(){try{await o()}catch(e){}},resetValidate:async function(){t()}}}});const u={class:"m-4"},f={class:"mb-4"},j=l("手动校验表单"),b=l("清空校验信息"),g=l("获取表单值"),x=l("设置表单值");m.render=function(e,s,l,n,c,d){const p=i("a-button"),m=i("BasicForm"),v=i("CollapseContainer");return o(),t("div",u,[a("div",f,[a(p,{onClick:e.validateForm,class:"mr-2"},{default:r((()=>[j])),_:1},8,["onClick"]),a(p,{onClick:e.resetValidate,class:"mr-2"},{default:r((()=>[b])),_:1},8,["onClick"]),a(p,{onClick:e.getFormValues,class:"mr-2"},{default:r((()=>[g])),_:1},8,["onClick"]),a(p,{onClick:e.setFormValues,class:"mr-2"},{default:r((()=>[x])),_:1},8,["onClick"])]),a(v,{title:"表单校验"},{default:r((()=>[a(m,{onRegister:e.register,onSubmit:e.handleSubmit},null,8,["onRegister","onSubmit"])])),_:1})])};export default m;