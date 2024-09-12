"use strict";
(self["webpackChunknews"] = self["webpackChunknews"] || []).push([[9937,55,8590,5012],{

/***/ 60055:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48331);
/* harmony import */ var hls_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33412);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7579);
const HlsPlayerComponent=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props,ref)=>{const[config,setConfig]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({...props});const eventHandlerMap=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});const videoRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);const playerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);const{url}=config.style;const destroy=()=>{if(playerRef.current){var _playerRef$current;(_playerRef$current=playerRef.current)===null||_playerRef$current===void 0?void 0:_playerRef$current.destroy();playerRef.current=null;}};(0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref,()=>({updateConfig:newConfig=>setConfig({...newConfig}),setEventHandler:eventMap=>eventHandlerMap.current=eventMap,destroy:()=>destroy()}));(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(hls_js__WEBPACK_IMPORTED_MODULE_1__["default"].isSupported()){const hls=new hls_js__WEBPACK_IMPORTED_MODULE_1__["default"]();hls.loadSource(url);hls.attachMedia(videoRef.current);hls.on(hls_js__WEBPACK_IMPORTED_MODULE_1__["default"].Events.MANIFEST_PARSED,()=>{videoRef.current.play();});playerRef.current=hls;}else if(videoRef.current.canPlayType('application/vnd.apple.mpegurl')){videoRef.current.src=url;videoRef.current.addEventListener('loadedmetadata',()=>{videoRef.current.play();});}return()=>destroy();},[url]);const onClick=()=>{if('click'in eventHandlerMap.current){var _eventHandlerMap$curr,_eventHandlerMap$curr2;(_eventHandlerMap$curr=(_eventHandlerMap$curr2=eventHandlerMap.current)['click'])===null||_eventHandlerMap$curr===void 0?void 0:_eventHandlerMap$curr.call(_eventHandlerMap$curr2);}};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("video",{style:{height:'100%',width:'100%'},ref:videoRef,controls:true,onClick:onClick});});/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HlsPlayerComponent);

/***/ }),

/***/ 48590:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HlsPlayerConfig: () => (/* binding */ HlsPlayerConfig)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48331);
/* harmony import */ var _json_schema_LCGUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45818);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7579);
const HlsPlayerConfig=_ref=>{var _controller$getConfig;let{controller}=_ref;const config=(_controller$getConfig=controller.getConfig())===null||_controller$getConfig===void 0?void 0:_controller$getConfig.style;const onFieldChange=fieldChangeData=>{const{dataFragment}=fieldChangeData;controller.update(dataFragment);};const schema={type:'grid',key:'style',children:[{type:'input',label:'视频流地址',key:'url',value:config===null||config===void 0?void 0:config.url}]};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_json_schema_LCGUI__WEBPACK_IMPORTED_MODULE_1__.LCGUI,{schema:schema,onFieldChange:onFieldChange});};

/***/ }),

/***/ 52631:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HlsPlayerController: () => (/* binding */ HlsPlayerController)
/* harmony export */ });
/* harmony import */ var _framework_core_AbstractDesignerController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50171);
/* harmony import */ var _utils_ComponentUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53090);
/* harmony import */ var _HlsPlayerComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60055);
/* harmony import */ var _utils_ObjectUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61178);
/* harmony import */ var _designer_blueprint_core_BPExecutor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19002);
class HlsPlayerController extends _framework_core_AbstractDesignerController__WEBPACK_IMPORTED_MODULE_0__["default"]{async create(container,config){this.config=config;this.container=container;this.instance=await _utils_ComponentUtil__WEBPACK_IMPORTED_MODULE_1__["default"].createAndRender(container,_HlsPlayerComponent__WEBPACK_IMPORTED_MODULE_2__["default"],config);}destroy(){var _this$instance;(_this$instance=this.instance)===null||_this$instance===void 0?void 0:_this$instance.destroy();this.instance=null;this.config=null;}getConfig(){return this.config;}update(config,upOp){var _this$instance2;this.config=_utils_ObjectUtil__WEBPACK_IMPORTED_MODULE_4__["default"].merge(this.config,config);upOp=upOp||{reRender:true};if(upOp.reRender)(_this$instance2=this.instance)===null||_this$instance2===void 0?void 0:_this$instance2.updateConfig(this.config);}registerEvent(){var _this$config,_this$config$base,_this$instance3;const nodeId=(_this$config=this.config)===null||_this$config===void 0?void 0:(_this$config$base=_this$config.base)===null||_this$config$base===void 0?void 0:_this$config$base.id;(_this$instance3=this.instance)===null||_this$instance3===void 0?void 0:_this$instance3.setEventHandler({click:()=>_designer_blueprint_core_BPExecutor__WEBPACK_IMPORTED_MODULE_3__["default"].triggerComponentEvent(nodeId,"click",this.config)});}}

/***/ }),

/***/ 99937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ HlsPlayerDefinition)
});

;// CONCATENATED MODULE: ./src/pages/Charts/comps/lc/hls-player/hls-player.png
const hls_player_namespaceObject = "data:image/png;base64,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";
// EXTERNAL MODULE: ./src/pages/Charts/comps/lc/hls-player/HlsPlayerController.ts
var HlsPlayerController = __webpack_require__(52631);
// EXTERNAL MODULE: ./src/pages/Charts/comps/lc/hls-player/HlsPlayerConfig.tsx
var HlsPlayerConfig = __webpack_require__(48590);
// EXTERNAL MODULE: ./src/pages/Charts/framework/core/AbstractDesignerDefinition.ts
var AbstractDesignerDefinition = __webpack_require__(96690);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(48331);
;// CONCATENATED MODULE: ./src/pages/Charts/comps/lc/hls-player/HlsPlayerDefinition.ts
const BaseInfo=/*#__PURE__*/(0,react.lazy)(()=>__webpack_require__.e(/* import() */ 2049).then(__webpack_require__.bind(__webpack_require__, 34430)));const AnimationConfig=/*#__PURE__*/(0,react.lazy)(()=>__webpack_require__.e(/* import() */ 4153).then(__webpack_require__.bind(__webpack_require__, 94153)));const FilterConfig=/*#__PURE__*/(0,react.lazy)(()=>__webpack_require__.e(/* import() */ 9057).then(__webpack_require__.bind(__webpack_require__, 31438)));class HlsPlayerDefinition extends AbstractDesignerDefinition["default"]{getBaseInfo(){return{compName:"HLS视频流",compKey:"HlsPlayer",categorize:"media"};}getChartImg(){return hls_player_namespaceObject;}getController(){return HlsPlayerController.HlsPlayerController;}getInitConfig(){return{base:{id:"",name:'HLS视频流',type:'HlsPlayer'},style:{url:'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8'},filter:{enable:false,blur:0,brightness:1,contrast:1,opacity:1,saturate:1,hueRotate:0}};}getMenuList(){return super.getMenuList().filter(item=>item.key!=='theme'&&item.key!=='data'&&item.key!=='mapping');}getMenuToConfigContentMap(){return{base:BaseInfo,style:HlsPlayerConfig.HlsPlayerConfig,animation:AnimationConfig,filter:FilterConfig};}getEventList(){const events=super.getEventList();return events.concat([{id:"click",name:"点击时"}]);}}

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