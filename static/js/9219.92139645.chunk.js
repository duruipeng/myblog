"use strict";
(self["webpackChunknews"] = self["webpackChunknews"] || []).push([[9219,3875,1063,9901,7556],{

/***/ 29901:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AntdBaseDesignerController: () => (/* binding */ AntdBaseDesignerController)
/* harmony export */ });
/* harmony import */ var _framework_core_AbstractDesignerController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50171);
/* harmony import */ var _utils_ObjectUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61178);
/* harmony import */ var _designer_blueprint_core_BPExecutor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19002);
class AntdBaseDesignerController extends _framework_core_AbstractDesignerController__WEBPACK_IMPORTED_MODULE_0__["default"]{constructor(){super(...arguments);this.interval=null;//上一次数据连接状态 true：成功 false：失败
this.lastReqState=true;//是否为断开后重新连接
this.reConnect=false;}changeData(data){var _this$config,_this$config$style,_this$instance;if((_this$config=this.config)!==null&&_this$config!==void 0&&(_this$config$style=_this$config.style)!==null&&_this$config$style!==void 0&&_this$config$style.data)this.config.style.data=data;(_this$instance=this.instance)===null||_this$instance===void 0?void 0:_this$instance.changeData(data);}registerEvent(){var _this$config2,_this$config2$base,_this$instance2,_this$instance3,_this$instance4,_this$instance5,_this$instance6;const nodeId=(_this$config2=this.config)===null||_this$config2===void 0?void 0:(_this$config2$base=_this$config2.base)===null||_this$config2$base===void 0?void 0:_this$config2$base.id;(_this$instance2=this.instance)===null||_this$instance2===void 0?void 0:_this$instance2.on('plot:click',function(){_designer_blueprint_core_BPExecutor__WEBPACK_IMPORTED_MODULE_1__["default"].triggerComponentEvent(nodeId,"globalClick",{msg:'这是测试参数'});});(_this$instance3=this.instance)===null||_this$instance3===void 0?void 0:_this$instance3.on('element:click',function(){_designer_blueprint_core_BPExecutor__WEBPACK_IMPORTED_MODULE_1__["default"].triggerComponentEvent(nodeId,"elementClick",{msg:'这是测试参数'});});// 图例添加点击事件
(_this$instance4=this.instance)===null||_this$instance4===void 0?void 0:_this$instance4.on('legend-item:click',function(){_designer_blueprint_core_BPExecutor__WEBPACK_IMPORTED_MODULE_1__["default"].triggerComponentEvent(nodeId,"legendClick",{msg:'这是测试参数'});});// 图例名称添加点击事件
(_this$instance5=this.instance)===null||_this$instance5===void 0?void 0:_this$instance5.on('legend-item-name:click',function(){_designer_blueprint_core_BPExecutor__WEBPACK_IMPORTED_MODULE_1__["default"].triggerComponentEvent(nodeId,"elementNameClick",{msg:'这是测试参数'});});// axis-label 添加点击事件
(_this$instance6=this.instance)===null||_this$instance6===void 0?void 0:_this$instance6.on('axis-label:click',function(){_designer_blueprint_core_BPExecutor__WEBPACK_IMPORTED_MODULE_1__["default"].triggerComponentEvent(nodeId,"axisLabelClick",{msg:'这是测试参数'});});}commonCreate(container,Clazz,config){var _this$config3,_this$instance7;this.config=config;this.container=container;this.instance=new Clazz(container,(_this$config3=this.config)===null||_this$config3===void 0?void 0:_this$config3.style);(_this$instance7=this.instance)===null||_this$instance7===void 0?void 0:_this$instance7.render();this.registerEvent();}commonUpdate(config,Clazz,upOp){var _this$instance8,_this$config4;this.config=_utils_ObjectUtil__WEBPACK_IMPORTED_MODULE_2__["default"].merge(this.config,config);upOp=upOp||{reRender:true};if(upOp.reRender)(_this$instance8=this.instance)===null||_this$instance8===void 0?void 0:_this$instance8.update((_this$config4=this.config)===null||_this$config4===void 0?void 0:_this$config4.style);}}

/***/ }),

/***/ 97556:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AntdCommonUtil)
/* harmony export */ });
class AntdCommonUtil{static getDataFieldOptions(controller){var _config$data;const config=controller.getConfig();const data=config===null||config===void 0?void 0:(_config$data=config.data)===null||_config$data===void 0?void 0:_config$data.staticData;const options=[];if(data&&data.length>=1){const dataObj=data[0];Object.keys(dataObj).forEach(key=>options.push({label:key,value:key}));}return options;}}

/***/ }),

/***/ 13875:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AntdWordCloudFieldMapping: () => (/* binding */ AntdWordCloudFieldMapping),
/* harmony export */   AntdWordCloudStyle: () => (/* binding */ AntdWordCloudStyle)
/* harmony export */ });
/* harmony import */ var _antd_common_AntdCommonUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97556);
/* harmony import */ var _json_schema_LCGUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45818);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7579);
const AntdWordCloudStyle=props=>{var _style$wordStyle,_style$wordStyle2,_style$wordStyle3,_style$wordStyle4;const{controller}=props;const{style}=controller.getConfig();const schema={type:'grid',key:'style',config:{columns:2},children:[{type:'input',label:'遮罩',key:'imageMask',value:style===null||style===void 0?void 0:style.imageMask,config:{containerStyle:{gridColumn:'1/3',marginBottom:'10px'}}},{type:'color-mode',key:'color',label:'颜色',value:style===null||style===void 0?void 0:style.color,config:{containerStyle:{gridColumn:'1/3'}}},{id:'randomPosition',type:'switch',key:'random',label:'随机',tip:'开启后词云图每次更新数据，词语位置随机展示',value:typeof(style===null||style===void 0?void 0:style.random)!=='number'},{key:'spiral',type:'select',label:'形状',value:style===null||style===void 0?void 0:style.spiral,config:{options:[{label:'椭圆',value:'archimedean'},{label:'矩形',value:'rectangular'}]}},{key:'wordStyle',children:[{type:'select',key:'fontFamily',label:'字体',value:style===null||style===void 0?void 0:(_style$wordStyle=style.wordStyle)===null||_style$wordStyle===void 0?void 0:_style$wordStyle.fontFamily,config:{options:[{label:'钉钉进步体',value:'DingTalk JinBuTi'},{label:'抖音美好体',value:'DouyinSansBold'},{label:'优设标题黑',value:'优设标题黑'},{label:'庞门正道标题',value:'庞门正道标题体免费版'}]}},{key:'fontWeight',type:'number-input',label:'粗细',value:(style===null||style===void 0?void 0:(_style$wordStyle2=style.wordStyle)===null||_style$wordStyle2===void 0?void 0:_style$wordStyle2.fontWeight)||500,config:{min:100,max:900,step:100}},{key:'fontSize',type:'range-slider',label:'字号',value:style===null||style===void 0?void 0:(_style$wordStyle3=style.wordStyle)===null||_style$wordStyle3===void 0?void 0:_style$wordStyle3.fontSize,config:{min:0}},{key:'padding',type:'number-input',label:'间距',value:style===null||style===void 0?void 0:(_style$wordStyle4=style.wordStyle)===null||_style$wordStyle4===void 0?void 0:_style$wordStyle4.padding,config:{min:0}}]}]};const onFieldChange=fieldChangeData=>{const{dataFragment,data,id}=fieldChangeData;if(id==='randomPosition'){const random=data?undefined:0.5;controller.update({style:{random}});}else{controller.update(dataFragment);}};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_json_schema_LCGUI__WEBPACK_IMPORTED_MODULE_0__.LCGUI,{schema:schema,onFieldChange:onFieldChange});};const AntdWordCloudFieldMapping=props=>{const{controller}=props;const options=_antd_common_AntdCommonUtil__WEBPACK_IMPORTED_MODULE_2__["default"].getDataFieldOptions(controller);const{style}=controller.getConfig();const schema={type:'grid',key:"style",config:{columns:2},children:[{type:'select',label:'颜色字段',key:'colorField',value:style===null||style===void 0?void 0:style.colorField,config:{options}},{type:'select',label:'权重字段',key:'weightField',value:style===null||style===void 0?void 0:style.weightField,config:{options}},{type:'select',label:'内容字段',key:'wordField',value:style===null||style===void 0?void 0:style.wordField,config:{options}}]};const onFieldChange=fieldChangeData=>{const{dataFragment}=fieldChangeData;controller.update(dataFragment);};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_json_schema_LCGUI__WEBPACK_IMPORTED_MODULE_0__.LCGUI,{schema:schema,onFieldChange:onFieldChange});};

/***/ }),

/***/ 61063:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AntdWordCloudController)
/* harmony export */ });
/* harmony import */ var _antv_g2plot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51948);
/* harmony import */ var _antd_common_AntdBaseDesignerController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29901);
class AntdWordCloudController extends _antd_common_AntdBaseDesignerController__WEBPACK_IMPORTED_MODULE_1__.AntdBaseDesignerController{async create(container,config){super.commonCreate(container,_antv_g2plot__WEBPACK_IMPORTED_MODULE_0__.WordCloud,config);}destroy(){this.instance.destroy();this.instance=null;this.config=null;this.interval&&clearInterval(this.interval);}getConfig(){return this.config;}update(config,upOp){super.commonUpdate(config,_antv_g2plot__WEBPACK_IMPORTED_MODULE_0__.WordCloud,upOp);}updateTheme(newTheme){var _this$config,_styleConfig$legend$i,_styleConfig$legend$i2,_styleConfig$label;if(!newTheme)return;const styleConfig=(_this$config=this.config)===null||_this$config===void 0?void 0:_this$config.style;const{colors:{main,mainText,supplementSecond,supplementFirst,subText}}=newTheme;//图形
if(styleConfig!==null&&styleConfig!==void 0&&styleConfig.color){styleConfig.color=[main,mainText,subText,supplementFirst,supplementSecond];}//图例
if(styleConfig.legend&&(_styleConfig$legend$i=styleConfig.legend.itemName)!==null&&_styleConfig$legend$i!==void 0&&(_styleConfig$legend$i2=_styleConfig$legend$i.style)!==null&&_styleConfig$legend$i2!==void 0&&_styleConfig$legend$i2.fill)styleConfig.legend.itemName.style.fill=mainText;if(styleConfig!==null&&styleConfig!==void 0&&styleConfig.label&&styleConfig!==null&&styleConfig!==void 0&&(_styleConfig$label=styleConfig.label)!==null&&_styleConfig$label!==void 0&&_styleConfig$label.style)styleConfig.label.style.fill=mainText;//重新渲染
this.update({style:styleConfig},{reRender:true});}}

/***/ }),

/***/ 11247:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ word_cloud_AntdWordCloudDefinition)
});

;// CONCATENATED MODULE: ./src/pages/Charts/comps/antd/word-cloud/word-cloud.png
const word_cloud_namespaceObject = __webpack_require__.p + "static/media/word-cloud.e73cbad2608e106707b0.png";
// EXTERNAL MODULE: ./src/pages/Charts/comps/antd/word-cloud/AntdWordCloudController.ts
var AntdWordCloudController = __webpack_require__(61063);
// EXTERNAL MODULE: ./src/pages/Charts/comps/antd/word-cloud/AntdWordCloudConfig.tsx
var AntdWordCloudConfig = __webpack_require__(13875);
// EXTERNAL MODULE: ./src/pages/Charts/framework/core/AbstractDesignerDefinition.ts
var AbstractDesignerDefinition = __webpack_require__(96690);
// EXTERNAL MODULE: ./node_modules/@icon-park/react/es/icons/Deeplink.js
var Deeplink = __webpack_require__(56156);
;// CONCATENATED MODULE: ./src/pages/Charts/comps/antd/word-cloud/AntdWordCloudDefinition.ts
class AntdWordCloudDefinition extends AbstractDesignerDefinition["default"]{getBaseInfo(){return{compName:"Antd词云图",compKey:"AntdWordCloud",categorize:"chart",subCategorize:"wordCloud"};}getController(){return AntdWordCloudController["default"];}getMenuList(){const menus=super.getMenuList();menus.splice(3,0,{icon:Deeplink["default"],name:'映射',key:'mapping'});return menus;}getChartImg(){return word_cloud_namespaceObject;}getMenuToConfigContentMap(){const menuMapping=super.getMenuToConfigContentMap();menuMapping['style']=AntdWordCloudConfig.AntdWordCloudStyle;menuMapping['mapping']=AntdWordCloudConfig.AntdWordCloudFieldMapping;return menuMapping;}getInitConfig(){const data=[{"value":9,"name":"AntV"},{"value":8,"name":"F2"},{"value":8,"name":"G2"},{"value":8,"name":"G6"},{"value":8,"name":"DataSet"},{"value":8,"name":"墨者学院"},{"value":6,"name":"Analysis"},{"value":6,"name":"Data Mining"},{"value":6,"name":"Data Vis"},{"value":6,"name":"Design"},{"value":6,"name":"Grammar"},{"value":6,"name":"Graphics"},{"value":6,"name":"Graph"},{"value":6,"name":"Hierarchy"},{"value":6,"name":"Labeling"},{"value":6,"name":"Layout"},{"value":6,"name":"Quantitative"}];return{base:{id:"",name:'基础面积图',type:'AntdBaseWordCloud'},style:{data,wordField:'name',weightField:'value',colorField:'name',supportCSSTransform:true,spiral:'rectangular',wordStyle:{fontFamily:'优设标题黑',fontWeight:500,fontSize:[8,32],rotation:0,padding:1}},filter:{enable:false,blur:0,brightness:1,contrast:1,opacity:1,saturate:1,hueRotate:0},data:{sourceType:'static',staticData:data}};}}/* harmony default export */ const word_cloud_AntdWordCloudDefinition = (AntdWordCloudDefinition);

/***/ }),

/***/ 96690:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AbstractDesignerDefinition)
/* harmony export */ });
/* harmony import */ var _AbstractDefinition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36839);
/* harmony import */ var _icon_park_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90934);
/* harmony import */ var _icon_park_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64077);
/* harmony import */ var _icon_park_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14442);
/* harmony import */ var _icon_park_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77201);
/* harmony import */ var _icon_park_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34409);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48331);
const AnimationConfig=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(()=>__webpack_require__.e(/* import() */ 4153).then(__webpack_require__.bind(__webpack_require__, 94153)));const ThemeConfig=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(()=>__webpack_require__.e(/* import() */ 1306).then(__webpack_require__.bind(__webpack_require__, 11306)));const BaseInfo=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(()=>__webpack_require__.e(/* import() */ 4430).then(__webpack_require__.bind(__webpack_require__, 34430)));const DataConfig=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(()=>__webpack_require__.e(/* import() */ 9885).then(__webpack_require__.bind(__webpack_require__, 29885)));const FilterConfig=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(()=>__webpack_require__.e(/* import() */ 1438).then(__webpack_require__.bind(__webpack_require__, 31438)));class AbstractDesignerDefinition extends _AbstractDefinition__WEBPACK_IMPORTED_MODULE_1__.AbstractDefinition{getMenuList(){return[{icon:_icon_park_react__WEBPACK_IMPORTED_MODULE_2__["default"],name:'基础',key:'base'},{icon:_icon_park_react__WEBPACK_IMPORTED_MODULE_3__["default"],name:'样式',key:'style'},{icon:_icon_park_react__WEBPACK_IMPORTED_MODULE_4__["default"],name:'数据',key:'data'},{icon:_icon_park_react__WEBPACK_IMPORTED_MODULE_5__["default"],name:'滤镜',key:'filter'},// {
//     icon: VideoCameraFilled,
//     name: '动画',
//     key: 'animation',
// },
{icon:_icon_park_react__WEBPACK_IMPORTED_MODULE_6__["default"],name:'主题',key:'theme'}];}getMenuToConfigContentMap(){return{base:BaseInfo,data:DataConfig,animation:AnimationConfig,theme:ThemeConfig,filter:FilterConfig};}}

/***/ }),

/***/ 45818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LCGUI: () => (/* binding */ LCGUI),
/* harmony export */   SchemaPathNode: () => (/* binding */ SchemaPathNode)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48331);
/* harmony import */ var _LCGUIUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84226);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14157);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7579);
class SchemaPathNode{constructor(key,index){this.key='';this.index=0;this.key=key;this.index=index;}}/**
 * 特殊场景的操作全交给使用方，向外提供Util方法更新schema结构
 */class LCGUI extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments);this.onControlChange=(data,schemaKeyPath,dataKeyPath,reRender,id)=>{const{onFieldChange}=this.props;const dataFragment=_LCGUIUtil__WEBPACK_IMPORTED_MODULE_3__["default"].createObjectFromArray(dataKeyPath,data);onFieldChange&&onFieldChange({id,data,reRender,schemaKeyPath:[...schemaKeyPath],dataKeyPath,dataFragment});};/**
     * 解析rules规则，判断是否满足
     * @param rules
     * @param control
     */this.analyzeRules=(rules,control)=>{const regex=/{([^}]+)}/g;const variable=[];let match;//解析rule中设置的变量
while((match=regex.exec(rules))!==null){variable.push(match[1]);}//从control本层级开始逐级向上匹配，直到所有变量都匹配结束
const analyze=(control,variable,rules)=>{if(variable.length===0)return rules;const{parent}=control;if(parent&&"children"in parent){//解析parent的所有子节点control(与当前control同级)
const{children}=parent;for(let i=0;i<children.length;i++){if(variable.length===0)break;const child=children[i];const matchIndex=variable.indexOf(child.key);if(child.key&&matchIndex!==-1){rules=rules.replaceAll(`{${child.key}}`,`'${child.value}'`);variable.splice(matchIndex,1);}}}if(variable.length>0&&parent){//解析parent层级的key是否匹配
const matchIndex=variable.indexOf(parent.key);if(parent.key&&parent.value&&matchIndex!==-1){//parent层级在同时匹配上key，同时value属性有值，同时variable中有匹配项时，才进行替换
rules=rules.replace(`{${parent.key}}`,`'${parent.value}'`);variable.splice(matchIndex,1);}if(variable.length>0){return analyze(parent,variable,rules);}}return rules;};// eslint-disable-next-line
return eval(analyze(control,variable,rules));};this.buildConfigUI=(control,schemaKeyPath,dataKeyPath,childIndex)=>{const nodes=[];if(!control)return nodes;if("children"in control){//有子节点，递归解析
const tempNodes=[];const{children}=control;const childLevel=new SchemaPathNode("children");const{type,rules}=control;//判断是否满足rules规则，不满足则不继续递归渲染
if(rules&&!this.analyzeRules(rules,control))return nodes;schemaKeyPath.push(childLevel);control.key&&dataKeyPath.push(control.key);children&&children.forEach((child,index)=>{childLevel.index=index;child.parent=control;tempNodes.push(this.buildConfigUI(child,JSON.parse(JSON.stringify(schemaKeyPath)),[...dataKeyPath],index));});//构建本级schema路径下的ReactNode
if(!type){//本层没有控件，直接返回子节点
nodes.push([...tempNodes]);}else{const{type,config,value,id,reRender,label,tip}=control;const Component=_ui__WEBPACK_IMPORTED_MODULE_1__["default"].get(type);schemaKeyPath.pop();schemaKeyPath.push({key:"value"});//非叶子节点不解析label
const controlVal=reRender?{value}:{defaultValue:value};const _props={...config,...controlVal,label,tip,onChange:data=>this.onControlChange(data,schemaKeyPath,dataKeyPath,reRender,id)};nodes.push(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component,{..._props,children:tempNodes},childIndex));}}else{//解析叶子节点
const{label,type,tip,config,value,rules,id,reRender}=control;if(!type)return[];if(rules&&!this.analyzeRules(rules,control))return nodes;//设置schemaKeyPath和dataKeyPath
schemaKeyPath.push({key:"value"});dataKeyPath.push(control.key);const controlVal=reRender?{value}:{defaultValue:value};const _props={...config,...controlVal,label,tip,onChange:data=>this.onControlChange(data,schemaKeyPath,dataKeyPath,reRender,id)};const Component=_ui__WEBPACK_IMPORTED_MODULE_1__["default"].get(type);if(!Component)return[];nodes.push(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component,{..._props},childIndex));}return nodes;};this.init=()=>{const nodes=[];let{schema}=this.props;schema=Array.isArray(schema)?schema:[schema];schema.forEach(control=>{nodes.push(this.buildConfigUI(control,[],[],0));});return nodes;};}render(){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:this.init()});}}

/***/ }),

/***/ 84226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LCGUIUtil)
/* harmony export */ });
class LCGUIUtil{static updateSchema(oldSchema,path,value){const currentNode=path.shift();const{key,index}=currentNode;if(key&&key in oldSchema){if(path.length===0){//赋值
oldSchema.value=value;}else if(index!==undefined){//取指定数据元素继续递归
this.updateSchema(oldSchema[key][index],path,value);}else{//普通属性继续递归
this.updateSchema(oldSchema[key],path,value);}}}static createObjectFromArray(keyPath,value){const result={};let current=result;for(let i=0;i<keyPath.length;i++){const key=keyPath[i];current[key]=i===keyPath.length-1?value:{};current=current[key];}return result;}/**
     * 根据schema模板，将数据结构赋值到模板中生成完整的schema
     * @param data 数据结构
     * @param template schema模板
     */static schemaStructureAssignment(data,template){if(typeof data!=='object')return{};Object.keys(data).forEach(key=>{//使用value对象的每一个key，去template中查找对应的key
if(typeof data[key]!=='object'){//在template当前层匹配
if(template.key===key){template.value=data[key];}else if(template.children){template.children.forEach(childTemp=>{LCGUIUtil.schemaStructureAssignment({[key]:data[key]},childTemp);});}}else{//在template的子层匹配
const childTemplate=LCGUIUtil.findChildSchemaByKey(key,template);if(childTemplate){LCGUIUtil.schemaStructureAssignment(data[key],childTemplate);}}});return template;}static findChildSchemaByKey(key,template){if(template.key===key)return template;if(template.children){for(let i=0;i<template.children.length;i++){const result=this.findChildSchemaByKey(key,template.children[i]);if(result)return result;}}return{};}static parseSchemaData(schema){const result={};if(schema.children){let tempRes={};schema.children.forEach(child=>{tempRes={...tempRes,...LCGUIUtil.parseSchemaData(child)};});if(schema.key){result[schema.key]=tempRes;return result;}else return tempRes;}else{if(schema.key){result[schema.key]=schema.value||undefined;return result;}else{return result;}}}}

/***/ }),

/***/ 14157:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48331);
const Accordion=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 7610).then(__webpack_require__.bind(__webpack_require__, 67610)));const Button=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 60665)));const MonacoEditor=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 17372)));const ColorPicker=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 14566)));const ColorsPicker=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 7034).then(__webpack_require__.bind(__webpack_require__, 27034)));const Grid=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 79931)).then(_ref=>{let{Grid}=_ref;return{default:Grid};}));const Input=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 18548)));const Radio=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 63879)));const Select=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 76109)));const Switch=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 30825)));const Slider=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 9873).then(__webpack_require__.bind(__webpack_require__, 2254)).then(_ref2=>{let{Slider}=_ref2;return{default:Slider};}));const RangeSlider=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 9873).then(__webpack_require__.bind(__webpack_require__, 2254)).then(_ref3=>{let{RangeSlider}=_ref3;return{default:RangeSlider};}));const ImageUpload=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 9397).then(__webpack_require__.bind(__webpack_require__, 59397)).then(_ref4=>{let{ImageUpload}=_ref4;return{default:ImageUpload};}));const ColorMode=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 254).then(__webpack_require__.bind(__webpack_require__, 20254)));const TextOnly=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 7091).then(__webpack_require__.bind(__webpack_require__, 57091)).then(_ref5=>{let{TextOnly}=_ref5;return{default:TextOnly};}));const TextArea=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 1084).then(__webpack_require__.bind(__webpack_require__, 31084)));const GroupButton=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 7625).then(__webpack_require__.bind(__webpack_require__, 67625)).then(_ref6=>{let{GroupButton}=_ref6;return{default:GroupButton};}));const CardPanel=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 91828)).then(_ref7=>{let{CardPanel}=_ref7;return{default:CardPanel};}));const NumberInput=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 20397)));const ControlGroup=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 3476).then(__webpack_require__.bind(__webpack_require__, 3476)));const CheckBox=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 627).then(__webpack_require__.bind(__webpack_require__, 50627)));const UIMap=new Map();UIMap.set('accordion',Accordion);UIMap.set('button',Button);UIMap.set('grid',Grid);UIMap.set('input',Input);UIMap.set('radio',Radio);UIMap.set('select',Select);UIMap.set('switch',Switch);UIMap.set('code-editor',MonacoEditor);UIMap.set('color-picker',ColorPicker);UIMap.set('colors-picker',ColorsPicker);UIMap.set('color-mode',ColorMode);UIMap.set('card-panel',CardPanel);UIMap.set('slider',Slider);UIMap.set('range-slider',RangeSlider);UIMap.set('image-upload',ImageUpload);UIMap.set('text-only',TextOnly);UIMap.set('text-area',TextArea);UIMap.set('group-button',GroupButton);UIMap.set('control-group',ControlGroup);UIMap.set('number-input',NumberInput);UIMap.set('checkbox',CheckBox);/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UIMap);

/***/ }),

/***/ 77201:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48331);
/* harmony import */ var _runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88718);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_runtime__WEBPACK_IMPORTED_MODULE_1__.IconWrapper)('color-filter', false, function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    width: props.size,
    height: props.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M24 40.9444C26.123 42.8446 28.9266 44 32 44C38.6274 44 44 38.6274 44 32C44 26.4085 40.1757 21.7102 35 20.3781",
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinejoin: props.strokeLinejoin
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M13 20.3781C7.82432 21.7102 4 26.4085 4 32C4 38.6274 9.37258 44 16 44C22.6274 44 28 38.6274 28 32C28 30.4506 27.7063 28.9697 27.1716 27.6101",
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinejoin: props.strokeLinejoin
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M24 28C30.6274 28 36 22.6274 36 16C36 9.37258 30.6274 4 24 4C17.3726 4 12 9.37258 12 16C12 22.6274 17.3726 28 24 28Z",
    fill: props.colors[1],
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinejoin: props.strokeLinejoin
  }));
}));

/***/ }),

/***/ 56156:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48331);
/* harmony import */ var _runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88718);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_runtime__WEBPACK_IMPORTED_MODULE_1__.IconWrapper)('deeplink', true, function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    width: props.size,
    height: props.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M21 34.9929C21 35.8067 21 36.471 21 36.9857C21 37.8714 21 39.2 21 40.9714C21 41.5395 20.5772 42 20.0556 42H4.94444C4.42284 42 4 41.5395 4 40.9714V7.02857C4 6.46051 4.42284 6 4.94444 6H20.0556C20.5772 6 21 6.46051 21 7.02857C21 8.8 21 10.1286 21 11.0143C21 11.529 21 12.1933 21 13.0071",
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M27 13.0071C27 12.1933 27 11.529 27 11.0143C27 10.1286 27 8.8 27 7.02857C27 6.46051 27.4228 6 27.9444 6H43.0556C43.5772 6 44 6.46051 44 7.02857V40.9714C44 41.5395 43.5772 42 43.0556 42H27.9444C27.4228 42 27 41.5395 27 40.9714C27 39.2 27 37.8714 27 36.9857C27 36.471 27 35.8067 27 34.9929",
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M12.5 38C13.6046 38 14.5 37.1046 14.5 36C14.5 34.8954 13.6046 34 12.5 34C11.3954 34 10.5 34.8954 10.5 36C10.5 37.1046 11.3954 38 12.5 38Z",
    fill: props.colors[0]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M35.5 38C36.6046 38 37.5 37.1046 37.5 36C37.5 34.8954 36.6046 34 35.5 34C34.3954 34 33.5 34.8954 33.5 36C33.5 37.1046 34.3954 38 35.5 38Z",
    fill: props.colors[0]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M16 23.5H32",
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M27.2231 28.2729L28.8141 26.682L31.9961 23.5L28.8141 20.318L27.2231 18.727",
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap,
    strokeLinejoin: props.strokeLinejoin
  }));
}));

/***/ }),

/***/ 64077:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48331);
/* harmony import */ var _runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88718);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_runtime__WEBPACK_IMPORTED_MODULE_1__.IconWrapper)('optimize', true, function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    width: props.size,
    height: props.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M19 7.99991L28 15.9999L38.0323 10.1097L33 20.9999L42 28.9999L30 27.9999L25.5 37.9999L23 26.9999L11.0004 25.9999L21.5082 19.6499L19 7.99991Z",
    fill: props.colors[1],
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap,
    strokeLinejoin: props.strokeLinejoin
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M8 42.0205L23 27",
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap
  }));
}));

/***/ }),

/***/ 90934:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48331);
/* harmony import */ var _runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88718);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_runtime__WEBPACK_IMPORTED_MODULE_1__.IconWrapper)('setting-one', false, function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    width: props.size,
    height: props.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M34.0003 41L44 24L34.0003 7H14.0002L4 24L14.0002 41H34.0003Z",
    fill: props.colors[1],
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinejoin: props.strokeLinejoin
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M24 29C26.7614 29 29 26.7614 29 24C29 21.2386 26.7614 19 24 19C21.2386 19 19 21.2386 19 24C19 26.7614 21.2386 29 24 29Z",
    fill: props.colors[3],
    stroke: props.colors[2],
    strokeWidth: props.strokeWidth,
    strokeLinejoin: props.strokeLinejoin
  }));
}));

/***/ })

}]);