"use strict";
(self["webpackChunknews"] = self["webpackChunknews"] || []).push([[5884,2053,9960,6478],{

/***/ 72053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37995);
/* harmony import */ var flv_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53218);
/* harmony import */ var flv_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flv_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12955);
const FlvPlayerComponent=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props,ref)=>{const[config,setConfig]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({...props});const eventHandlerMap=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});const videoRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);const playerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);const{url}=config.style;const destroy=()=>{if(playerRef.current){playerRef.current.pause();playerRef.current.unload();playerRef.current.detachMediaElement();playerRef.current.destroy();playerRef.current=null;}};(0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref,()=>({updateConfig:newConfig=>setConfig({...newConfig}),setEventHandler:eventMap=>eventHandlerMap.current=eventMap,destroy:()=>destroy()}));(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(flv_js__WEBPACK_IMPORTED_MODULE_1___default().isSupported()){const player=flv_js__WEBPACK_IMPORTED_MODULE_1___default().createPlayer({type:'flv',url:url});player.attachMediaElement(videoRef.current);player.load();player.play();playerRef.current=player;}return()=>destroy();},[url]);const onClick=()=>{if('click'in eventHandlerMap.current){var _eventHandlerMap$curr,_eventHandlerMap$curr2;(_eventHandlerMap$curr=(_eventHandlerMap$curr2=eventHandlerMap.current)['click'])===null||_eventHandlerMap$curr===void 0?void 0:_eventHandlerMap$curr.call(_eventHandlerMap$curr2);}};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("video",{style:{height:'100%',width:'100%'},ref:videoRef,controls:true,onClick:onClick});});/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FlvPlayerComponent);

/***/ }),

/***/ 59960:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlvPlayerConfig: () => (/* binding */ FlvPlayerConfig)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37995);
/* harmony import */ var _json_schema_LCGUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40058);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12955);
const FlvPlayerConfig=_ref=>{var _controller$getConfig;let{controller}=_ref;const config=(_controller$getConfig=controller.getConfig())===null||_controller$getConfig===void 0?void 0:_controller$getConfig.style;const onFieldChange=fieldChangeData=>{const{dataFragment}=fieldChangeData;controller.update(dataFragment);};const schema={type:'grid',key:'style',children:[{type:'input',label:'视频流地址',key:'url',value:config===null||config===void 0?void 0:config.url}]};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_json_schema_LCGUI__WEBPACK_IMPORTED_MODULE_1__.LCGUI,{schema:schema,onFieldChange:onFieldChange});};

/***/ }),

/***/ 6478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlvPlayerController: () => (/* binding */ FlvPlayerController)
/* harmony export */ });
/* harmony import */ var _framework_core_AbstractDesignerController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56571);
/* harmony import */ var _utils_ComponentUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42850);
/* harmony import */ var _FlvPlayerComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72053);
/* harmony import */ var _utils_ObjectUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69946);
/* harmony import */ var _designer_blueprint_core_BPExecutor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17498);
class FlvPlayerController extends _framework_core_AbstractDesignerController__WEBPACK_IMPORTED_MODULE_0__["default"]{async create(container,config){this.config=config;this.container=container;this.instance=await _utils_ComponentUtil__WEBPACK_IMPORTED_MODULE_1__["default"].createAndRender(container,_FlvPlayerComponent__WEBPACK_IMPORTED_MODULE_2__["default"],config);}destroy(){var _this$instance;(_this$instance=this.instance)===null||_this$instance===void 0?void 0:_this$instance.destroy();this.instance=null;this.config=null;}getConfig(){return this.config;}update(config,upOp){var _this$instance2;this.config=_utils_ObjectUtil__WEBPACK_IMPORTED_MODULE_4__["default"].merge(this.config,config);upOp=upOp||{reRender:true};if(upOp.reRender)(_this$instance2=this.instance)===null||_this$instance2===void 0?void 0:_this$instance2.updateConfig(this.config);}registerEvent(){var _this$config,_this$config$base,_this$instance3;const nodeId=(_this$config=this.config)===null||_this$config===void 0?void 0:(_this$config$base=_this$config.base)===null||_this$config$base===void 0?void 0:_this$config$base.id;(_this$instance3=this.instance)===null||_this$instance3===void 0?void 0:_this$instance3.setEventHandler({click:()=>_designer_blueprint_core_BPExecutor__WEBPACK_IMPORTED_MODULE_3__["default"].triggerComponentEvent(nodeId,"click",this.config)});}}

/***/ }),

/***/ 85884:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ FlvPlayerDefinition)
});

;// ./src/pages/Charts/comps/lc/flv-player/flv-player.png
const flv_player_namespaceObject = "data:image/png;base64,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";
// EXTERNAL MODULE: ./src/pages/Charts/comps/lc/flv-player/FlvPlayerController.ts
var FlvPlayerController = __webpack_require__(6478);
// EXTERNAL MODULE: ./src/pages/Charts/comps/lc/flv-player/FlvPlayerConfig.tsx
var FlvPlayerConfig = __webpack_require__(59960);
// EXTERNAL MODULE: ./src/pages/Charts/framework/core/AbstractDesignerDefinition.ts
var AbstractDesignerDefinition = __webpack_require__(64069);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(37995);
;// ./src/pages/Charts/comps/lc/flv-player/FlvPlayerDefinition.ts
const BaseInfo=/*#__PURE__*/(0,react.lazy)(()=>__webpack_require__.e(/* import() */ 4295).then(__webpack_require__.bind(__webpack_require__, 76676)));const AnimationConfig=/*#__PURE__*/(0,react.lazy)(()=>__webpack_require__.e(/* import() */ 62).then(__webpack_require__.bind(__webpack_require__, 80062)));const FilterConfig=/*#__PURE__*/(0,react.lazy)(()=>__webpack_require__.e(/* import() */ 2017).then(__webpack_require__.bind(__webpack_require__, 4398)));class FlvPlayerDefinition extends AbstractDesignerDefinition["default"]{getBaseInfo(){return{compName:"FLV视频流",compKey:"FlvPlayer",categorize:"media"};}getChartImg(){return flv_player_namespaceObject;}getController(){return FlvPlayerController.FlvPlayerController;}getInitConfig(){return{base:{id:"",name:'FLV视频流',type:'FlvPlayer'},style:{url:''},filter:{enable:false,blur:0,brightness:1,contrast:1,opacity:1,saturate:1,hueRotate:0}};}getMenuList(){return super.getMenuList().filter(item=>item.key!=='theme'&&item.key!=='data'&&item.key!=='mapping');}getMenuToConfigContentMap(){return{base:BaseInfo,style:FlvPlayerConfig.FlvPlayerConfig,animation:AnimationConfig,filter:FilterConfig};}getEventList(){const events=super.getEventList();return events.concat([{id:"click",name:"点击时"}]);}}

/***/ }),

/***/ 64069:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AbstractDesignerDefinition)
/* harmony export */ });
/* harmony import */ var _AbstractDefinition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41159);
/* harmony import */ var _icon_park_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20470);
/* harmony import */ var _icon_park_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35341);
/* harmony import */ var _icon_park_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94058);
/* harmony import */ var _icon_park_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(68529);
/* harmony import */ var _icon_park_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(64009);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37995);
const AnimationConfig=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(()=>__webpack_require__.e(/* import() */ 62).then(__webpack_require__.bind(__webpack_require__, 80062)));const ThemeConfig=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(()=>__webpack_require__.e(/* import() */ 8458).then(__webpack_require__.bind(__webpack_require__, 28458)));const BaseInfo=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(()=>__webpack_require__.e(/* import() */ 6676).then(__webpack_require__.bind(__webpack_require__, 76676)));const DataConfig=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(()=>__webpack_require__.e(/* import() */ 3439).then(__webpack_require__.bind(__webpack_require__, 13439)));const FilterConfig=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(()=>__webpack_require__.e(/* import() */ 4398).then(__webpack_require__.bind(__webpack_require__, 4398)));class AbstractDesignerDefinition extends _AbstractDefinition__WEBPACK_IMPORTED_MODULE_1__.AbstractDefinition{getMenuList(){return[{icon:_icon_park_react__WEBPACK_IMPORTED_MODULE_2__["default"],name:'基础',key:'base'},{icon:_icon_park_react__WEBPACK_IMPORTED_MODULE_3__["default"],name:'样式',key:'style'},{icon:_icon_park_react__WEBPACK_IMPORTED_MODULE_4__["default"],name:'数据',key:'data'},{icon:_icon_park_react__WEBPACK_IMPORTED_MODULE_5__["default"],name:'滤镜',key:'filter'},// {
//     icon: VideoCameraFilled,
//     name: '动画',
//     key: 'animation',
// },
{icon:_icon_park_react__WEBPACK_IMPORTED_MODULE_6__["default"],name:'主题',key:'theme'}];}getMenuToConfigContentMap(){return{base:BaseInfo,data:DataConfig,animation:AnimationConfig,theme:ThemeConfig,filter:FilterConfig};}}

/***/ }),

/***/ 40058:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LCGUI: () => (/* binding */ LCGUI),
/* harmony export */   SchemaPathNode: () => (/* binding */ SchemaPathNode)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37995);
/* harmony import */ var _LCGUIUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41858);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52845);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12955);
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

/***/ 41858:
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

/***/ 52845:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37995);
const Accordion=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 403).then(__webpack_require__.bind(__webpack_require__, 403)));const Button=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 57747)));const MonacoEditor=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 75842)));const ColorPicker=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 45175)));const ColorsPicker=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 611).then(__webpack_require__.bind(__webpack_require__, 30611)));const Grid=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 51821)).then(_ref=>{let{Grid}=_ref;return{default:Grid};}));const Input=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 7652)));const Radio=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 95470)));const Select=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 87261)));const Switch=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 21104)));const Slider=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(9973), __webpack_require__.e(5305)]).then(__webpack_require__.bind(__webpack_require__, 75305)).then(_ref2=>{let{Slider}=_ref2;return{default:Slider};}));const RangeSlider=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(9973), __webpack_require__.e(5305)]).then(__webpack_require__.bind(__webpack_require__, 75305)).then(_ref3=>{let{RangeSlider}=_ref3;return{default:RangeSlider};}));const ImageUpload=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 9987).then(__webpack_require__.bind(__webpack_require__, 19987)).then(_ref4=>{let{ImageUpload}=_ref4;return{default:ImageUpload};}));const ColorMode=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 6529).then(__webpack_require__.bind(__webpack_require__, 6529)));const TextOnly=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 2227).then(__webpack_require__.bind(__webpack_require__, 12227)).then(_ref5=>{let{TextOnly}=_ref5;return{default:TextOnly};}));const TextArea=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 5664).then(__webpack_require__.bind(__webpack_require__, 55664)));const GroupButton=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 3346).then(__webpack_require__.bind(__webpack_require__, 13346)).then(_ref6=>{let{GroupButton}=_ref6;return{default:GroupButton};}));const CardPanel=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 89180)).then(_ref7=>{let{CardPanel}=_ref7;return{default:CardPanel};}));const NumberInput=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 92905)));const ControlGroup=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 9631).then(__webpack_require__.bind(__webpack_require__, 19631)));const CheckBox=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 7894).then(__webpack_require__.bind(__webpack_require__, 87894)));const UIMap=new Map();UIMap.set('accordion',Accordion);UIMap.set('button',Button);UIMap.set('grid',Grid);UIMap.set('input',Input);UIMap.set('radio',Radio);UIMap.set('select',Select);UIMap.set('switch',Switch);UIMap.set('code-editor',MonacoEditor);UIMap.set('color-picker',ColorPicker);UIMap.set('colors-picker',ColorsPicker);UIMap.set('color-mode',ColorMode);UIMap.set('card-panel',CardPanel);UIMap.set('slider',Slider);UIMap.set('range-slider',RangeSlider);UIMap.set('image-upload',ImageUpload);UIMap.set('text-only',TextOnly);UIMap.set('text-area',TextArea);UIMap.set('group-button',GroupButton);UIMap.set('control-group',ControlGroup);UIMap.set('number-input',NumberInput);UIMap.set('checkbox',CheckBox);/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UIMap);

/***/ }),

/***/ 68529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37995);
/* harmony import */ var _runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70030);


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

/***/ 35341:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37995);
/* harmony import */ var _runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70030);


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

/***/ 20470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37995);
/* harmony import */ var _runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70030);


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