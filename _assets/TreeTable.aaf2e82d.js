import{a as i,i as e,o as t,j as s,k as o}from"./index.5a06cc5a.js";import"./xlsx.a48e520c.js";import"./useSortable.daa299b8.js";import"./index.285e765e.js";import"./Trigger.99f55fa6.js";import"./omit.dc68979e.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.43ac9423.js";import"./CheckOutlined.a9c880f1.js";import"./index.27a16a8f.js";import"./colors.fef6a1d3.js";import"./index.c61a7dc8.js";import"./RightOutlined.177f594b.js";import"./index.a77047a8.js";import"./types.0e8929fe.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.3c41385f.js";import"./_baseFor.f4e5f03f.js";import"./index.2d99723f.js";import"./index.a172b251.js";import"./index.39112e54.js";import"./index.d758c27b.js";import"./UpOutlined.93565ff1.js";import"./LeftOutlined.87d99e02.js";import"./index.4befb70e.js";import"./index.78155a1f.js";import"./index.cd6c8c97.js";import"./index.5d3cdfa6.js";import"./index.aa5d2aff.js";import"./zh_CN.0242bd16.js";import"./index.f07c31d6.js";import"./index.6da2e83a.js";import"./CaretDownFilled.1bd696db.js";import"./index.813fa6f2.js";import"./CheckOutlined.bbf42930.js";import"./CloseOutlined.56ba74fc.js";import{s as r}from"./index.52e67173.js";import"./FullscreenOutlined.d1c71cb2.js";import"./LeftOutlined.9cd85d98.js";import"./LoadingOutlined.91523ad2.js";import"./TableAction.359b5d7f.js";import"./RightOutlined.18857b33.js";import"./SettingOutlined.1c8ea48f.js";import"./useTimeout.f9167c02.js";import"./tsxHelper.7d018852.js";import"./index.1b9ab3b5.js";import"./domUtils.a8aece5c.js";import"./index.2d373899.js";import"./animation.91509674.js";import"./useScrollTo.06e85a9e.js";import"./useAttrs.00256126.js";import"./index.f0b16be7.js";import"./useForm.5208afd5.js";import"./index.de6754de.js";import"./useWindowSizeFn.a6dea72f.js";import"./uuid.40269c00.js";import"./useExpose.42b399ac.js";import"./index.1cdf9edd.js";import{getBasicColumns as d,getTreeTableData as m}from"./tableData.58f3c549.js";var p=i({components:{BasicTable:r},setup:()=>({columns:d(),data:m()})});const a={class:"p-4"};p.render=function(i,r,d,m,p,n){const j=e("BasicTable");return t(),s("div",a,[o(j,{rowSelection:{type:"checkbox"},title:"树形表格",titleHelpMessage:"树形组件不能和序列号列同时存在",columns:i.columns,dataSource:i.data,rowKey:"id",indentSize:20},null,8,["columns","dataSource"])])};export default p;