"use strict";
(self["webpackChunknews"] = self["webpackChunknews"] || []).push([[3198,33,2132,6090],{

/***/ 80033:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48331);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7579);
const BaseVideoComponent=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props,ref)=>{var _config$style,_config$style2,_config$style3,_config$style4;const[config,setConfig]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({...props});const eventHandlerMap=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});(0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref,()=>({updateConfig:newConfig=>setConfig({...newConfig}),setEventHandler:eventMap=>eventHandlerMap.current=eventMap}));return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{width:'100%',height:'100%'},children:!(config!==null&&config!==void 0&&(_config$style=config.style)!==null&&_config$style!==void 0&&_config$style.src)?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{color:'#9a9a9a',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:"\u8BF7\u914D\u7F6E\u89C6\u9891\u8FDE\u63A5..."})}):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("video",{width:"100%",height:"100%",controls:true,autoPlay:true,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("source",{src:config===null||config===void 0?void 0:(_config$style2=config.style)===null||_config$style2===void 0?void 0:_config$style2.src,type:"video/mp4"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("source",{src:config===null||config===void 0?void 0:(_config$style3=config.style)===null||_config$style3===void 0?void 0:_config$style3.src,type:"video/webm"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("source",{src:config===null||config===void 0?void 0:(_config$style4=config.style)===null||_config$style4===void 0?void 0:_config$style4.src,type:"video/ogg"}),"\u60A8\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 video \u6807\u7B7E\u3002"]})});});/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseVideoComponent);

/***/ }),

/***/ 12132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseVideoStyleConfig: () => (/* binding */ BaseVideoStyleConfig)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48331);
/* harmony import */ var _json_schema_LCGUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45818);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7579);
const BaseVideoStyleConfig=_ref=>{var _controller$getConfig;let{controller}=_ref;const config=(_controller$getConfig=controller.getConfig())===null||_controller$getConfig===void 0?void 0:_controller$getConfig.style;const onFieldChange=fieldChangeData=>{const{dataFragment}=fieldChangeData;controller.update(dataFragment);};const schema={type:'grid',key:'style',children:[{type:'input',label:'视频地址',key:'src',value:config===null||config===void 0?void 0:config.src}]};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_json_schema_LCGUI__WEBPACK_IMPORTED_MODULE_1__.LCGUI,{schema:schema,onFieldChange:onFieldChange});};

/***/ }),

/***/ 66090:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BaseVideoController)
/* harmony export */ });
/* harmony import */ var _framework_core_AbstractDesignerController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50171);
/* harmony import */ var _BaseVideoComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80033);
/* harmony import */ var _utils_ComponentUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53090);
/* harmony import */ var _utils_ObjectUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61178);
/* harmony import */ var _designer_blueprint_core_BPExecutor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19002);
class BaseVideoController extends _framework_core_AbstractDesignerController__WEBPACK_IMPORTED_MODULE_0__["default"]{async create(container,config){this.config=config;this.container=container;this.instance=await _utils_ComponentUtil__WEBPACK_IMPORTED_MODULE_2__["default"].createAndRender(container,_BaseVideoComponent__WEBPACK_IMPORTED_MODULE_1__["default"],config);}destroy(){this.instance=null;this.config=null;}getConfig(){return this.config;}update(config,upOp){this.config=_utils_ObjectUtil__WEBPACK_IMPORTED_MODULE_4__["default"].merge(this.config,config);upOp=upOp||{reRender:true};if(upOp.reRender){var _this$instance;(_this$instance=this.instance)===null||_this$instance===void 0?void 0:_this$instance.updateConfig(this.config);}}updateTheme(newTheme){}registerEvent(){if(this.instance){var _this$config,_this$config$base;const nodeId=(_this$config=this.config)===null||_this$config===void 0?void 0:(_this$config$base=_this$config.base)===null||_this$config$base===void 0?void 0:_this$config$base.id;this.instance.setEventHandler({click:()=>_designer_blueprint_core_BPExecutor__WEBPACK_IMPORTED_MODULE_3__["default"].triggerComponentEvent(nodeId,"click",this.config)});}}}

/***/ }),

/***/ 63198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ BaseVideoDefinition)
});

// EXTERNAL MODULE: ./src/pages/Charts/comps/lc/base-video/BaseVideoController.ts
var BaseVideoController = __webpack_require__(66090);
;// CONCATENATED MODULE: ./src/pages/Charts/comps/lc/base-video/baseVideo.png
const baseVideo_namespaceObject = "data:image/png;base64,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";
// EXTERNAL MODULE: ./src/pages/Charts/comps/lc/base-video/BaseVideoConfig.tsx
var BaseVideoConfig = __webpack_require__(12132);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(48331);
// EXTERNAL MODULE: ./src/pages/Charts/framework/core/AbstractDesignerDefinition.ts
var AbstractDesignerDefinition = __webpack_require__(96690);
;// CONCATENATED MODULE: ./src/pages/Charts/comps/lc/base-video/BaseVideoDefinition.ts
const BaseInfo=/*#__PURE__*/react.lazy(()=>__webpack_require__.e(/* import() */ 2049).then(__webpack_require__.bind(__webpack_require__, 34430)));const FilterConfig=/*#__PURE__*/react.lazy(()=>__webpack_require__.e(/* import() */ 9057).then(__webpack_require__.bind(__webpack_require__, 31438)));class BaseVideoDefinition extends AbstractDesignerDefinition["default"]{getBaseInfo(){return{compName:"视频",compKey:"BaseVideo",categorize:"media"};}getChartImg(){return baseVideo_namespaceObject;}getController(){return BaseVideoController["default"];}getInitConfig(){return{base:{id:"",name:'视频',type:'BaseVideo'},style:{src:undefined},filter:{enable:false,blur:0,brightness:1,contrast:1,opacity:1,saturate:1,hueRotate:0}};}getMenuList(){return super.getMenuList().filter(item=>item.key!=='theme'&&item.key!=='data');}getMenuToConfigContentMap(){return{base:BaseInfo,style:BaseVideoConfig.BaseVideoStyleConfig,filter:FilterConfig};}getEventList(){const events=super.getEventList();return events.concat([{id:"click",name:"点击时"}]);}}

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