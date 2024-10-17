"use strict";
(self["webpackChunknews"] = self["webpackChunknews"] || []).push([[1580,3174,3788,7794],{

/***/ 43174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ lc_text_scroller_TextScrollerComponent)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(37995);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(97825);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(77659);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(55056);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(10540);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(41113);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[2]!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[3]!./src/pages/Charts/comps/lc/text-scroller/TextScrollerComponent.less
var TextScrollerComponent = __webpack_require__(36820);
;// ./src/pages/Charts/comps/lc/text-scroller/TextScrollerComponent.less

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(TextScrollerComponent["default"], options);




       /* harmony default export */ const text_scroller_TextScrollerComponent = (TextScrollerComponent["default"] && TextScrollerComponent["default"].locals ? TextScrollerComponent["default"].locals : undefined);

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(33576);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(12955);
;// ./src/pages/Charts/comps/lc/text-scroller/TextScrollerComponent.tsx
const TextScrollerComponent_TextScrollerComponent=/*#__PURE__*/react.forwardRef((props,ref)=>{var _config$data;const[config,setConfig]=(0,react.useState)({...props});const{speed,...rest}=config.style;const eventHandlerMap=(0,react.useRef)({});const textScrollerRef=(0,react.useRef)(null);const textContainerRef=(0,react.useRef)(null);const resizeObserverRef=(0,react.useRef)(null);(0,react.useImperativeHandle)(ref,()=>({updateConfig:newConfig=>setConfig({...newConfig}),setEventHandler:eventMap=>eventHandlerMap.current=eventMap}));(0,react.useEffect)(()=>{if(textContainerRef.current){resizeObserverRef.current=new ResizeObserver((0,lodash.debounce)(entries=>{for(const entry of entries){const{width}=entry.contentRect;textContainerRef.current.style.setProperty('--container-width',`${width}px`);}},100));// 开始观察
resizeObserverRef.current.observe(textContainerRef.current);}},[]);(0,react.useEffect)(()=>{var _textContainerRef$cur;(_textContainerRef$cur=textContainerRef.current)===null||_textContainerRef$cur===void 0?void 0:_textContainerRef$cur.style.setProperty('--speed',`${speed||5}s`);},[config]);return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"text-scroller-container",ref:textContainerRef,children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"text-scroller",style:{...rest},ref:textScrollerRef,children:config===null||config===void 0?void 0:(_config$data=config.data)===null||_config$data===void 0?void 0:_config$data.staticData})});});/* harmony default export */ const lc_text_scroller_TextScrollerComponent = (TextScrollerComponent_TextScrollerComponent);

/***/ }),

/***/ 93788:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextScrollerConfig: () => (/* binding */ TextScrollerConfig)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37995);
/* harmony import */ var _json_schema_LCGUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40058);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12955);
const TextScrollerConfig=_ref=>{var _controller$getConfig;let{controller}=_ref;const config=(_controller$getConfig=controller.getConfig())===null||_controller$getConfig===void 0?void 0:_controller$getConfig.style;const onFieldChange=fieldChangeData=>{const{dataFragment}=fieldChangeData;controller.update(dataFragment);};const schema={key:'style',type:'grid',config:{columns:2},children:[{key:'speed',type:'number-input',label:'速度',value:config.speed,config:{min:1}},{key:'fontSize',type:'number-input',label:'字号',value:config.fontSize,config:{min:1,max:100}},{key:'fontWeight',type:'number-input',label:'加粗',value:config.fontWeight,config:{min:100,max:900,step:100}},{key:'color',type:'color-picker',label:'颜色',value:config===null||config===void 0?void 0:config.color,config:{showText:true}},{key:'fontFamily',type:'select',label:'字体',value:config.fontFamily,config:{options:[{label:'钉钉进步体',value:'DingTalk JinBuTi'},{label:'抖音美好体',value:'DouyinSansBold'},{label:'优设标题黑',value:'优设标题黑'},{label:'庞门正道标题',value:'庞门正道标题体免费版'}]}}]};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_json_schema_LCGUI__WEBPACK_IMPORTED_MODULE_1__.LCGUI,{schema:schema,onFieldChange:onFieldChange});};

/***/ }),

/***/ 57794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextScrollerController: () => (/* binding */ TextScrollerController)
/* harmony export */ });
/* harmony import */ var _framework_core_AbstractDesignerController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56571);
/* harmony import */ var _utils_ComponentUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42850);
/* harmony import */ var _TextScrollerComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43174);
/* harmony import */ var _utils_ObjectUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69946);
/* harmony import */ var _designer_blueprint_core_BPExecutor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17498);
class TextScrollerController extends _framework_core_AbstractDesignerController__WEBPACK_IMPORTED_MODULE_0__["default"]{async create(container,config){this.config=config;this.container=container;this.instance=await _utils_ComponentUtil__WEBPACK_IMPORTED_MODULE_1__["default"].createAndRender(container,_TextScrollerComponent__WEBPACK_IMPORTED_MODULE_2__["default"],config);}destroy(){this.instance=null;this.config=null;}getConfig(){return this.config;}changeData(data){var _this$instance;this.config.data.staticData=data;(_this$instance=this.instance)===null||_this$instance===void 0?void 0:_this$instance.updateConfig(this.config);}update(config,upOp){var _this$instance2;this.config=_utils_ObjectUtil__WEBPACK_IMPORTED_MODULE_4__["default"].merge(this.config,config);upOp=upOp||{reRender:true};if(upOp.reRender)(_this$instance2=this.instance)===null||_this$instance2===void 0?void 0:_this$instance2.updateConfig(this.config);}updateTheme(newTheme){}registerEvent(){var _this$config,_this$config$base,_this$instance3;const nodeId=(_this$config=this.config)===null||_this$config===void 0?void 0:(_this$config$base=_this$config.base)===null||_this$config$base===void 0?void 0:_this$config$base.id;(_this$instance3=this.instance)===null||_this$instance3===void 0?void 0:_this$instance3.setEventHandler({click:()=>_designer_blueprint_core_BPExecutor__WEBPACK_IMPORTED_MODULE_3__["default"].triggerComponentEvent(nodeId,"click",this.config)});}}

/***/ }),

/***/ 31580:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ TextScrollerDefinition)
});

;// ./src/pages/Charts/comps/lc/text-scroller/text-scroller.png
const text_scroller_namespaceObject = "data:image/png;base64,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";
// EXTERNAL MODULE: ./src/pages/Charts/comps/lc/text-scroller/TextScrollerController.ts
var TextScrollerController = __webpack_require__(57794);
// EXTERNAL MODULE: ./src/pages/Charts/comps/lc/text-scroller/TextScrollerConfig.tsx
var TextScrollerConfig = __webpack_require__(93788);
// EXTERNAL MODULE: ./src/pages/Charts/framework/core/AbstractDesignerDefinition.ts
var AbstractDesignerDefinition = __webpack_require__(64069);
;// ./src/pages/Charts/comps/lc/text-scroller/TextScrollerDefinition.ts
class TextScrollerDefinition extends AbstractDesignerDefinition["default"]{getBaseInfo(){return{compName:"文字弹幕",compKey:"TextScroller",categorize:"info",subCategorize:"text",width:320,height:26};}getChartImg(){return text_scroller_namespaceObject;}getController(){return TextScrollerController.TextScrollerController;}getInitConfig(){return{base:{id:"",name:'文字弹幕',type:'TextScroller'},style:{speed:10,fontSize:16,fontWeight:500,color:'#fff',fontFamily:'Arial'},filter:{enable:false,blur:0,brightness:1,contrast:1,opacity:1,saturate:1,hueRotate:0},data:{sourceType:'static',staticData:'文字弹幕'}};}getMenuList(){return super.getMenuList().filter(item=>item.key!=='theme');}getMenuToConfigContentMap(){const menuMapping=super.getMenuToConfigContentMap();menuMapping['style']=TextScrollerConfig.TextScrollerConfig;return menuMapping;}getEventList(){const events=super.getEventList();return events.concat([{id:"click",name:"点击时"}]);}}

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

/***/ }),

/***/ 36820:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40300);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99029);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.text-scroller-container {
  --speed: 10s;
  --container-width: 320px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
}
.text-scroller-container .text-scroller {
  height: inherit;
  position: absolute;
  animation: scrollText var(--speed) linear infinite;
  animation-name: none;
  color: white;
  display: flex;
  align-items: center;
}
@keyframes scrollText {
  0% {
    transform: translateX(var(--container-width));
  }
  100% {
    transform: translateX(-100%);
  }
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);