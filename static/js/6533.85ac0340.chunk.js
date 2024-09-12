"use strict";
(self["webpackChunknews"] = self["webpackChunknews"] || []).push([[6533],{

/***/ 56533:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CarouselConfig: () => (/* binding */ CarouselConfig)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48331);
/* harmony import */ var _json_schema_LCGUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45818);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7579);
const CarouselConfig=_ref=>{var _controller$getConfig;let{controller}=_ref;const config=(_controller$getConfig=controller.getConfig())===null||_controller$getConfig===void 0?void 0:_controller$getConfig.style;const onFieldChange=fieldChangeData=>{const{dataFragment}=fieldChangeData;controller.update(dataFragment);};const schema={key:'style',type:'grid',config:{columns:2},children:[{type:'switch',key:'autoplay',label:'自动播放',value:config.autoplay},{type:'number-input',key:'autoplaySpeed',label:'播放速度',value:config.autoplaySpeed},{type:'switch',key:'dots',label:'显示按钮',value:config.dots},{type:'switch',key:'fade',label:'淡入淡出',value:config.fade},{type:'number-input',key:'speed',label:'动效速度',value:config.speed}]};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_json_schema_LCGUI__WEBPACK_IMPORTED_MODULE_1__.LCGUI,{schema:schema,onFieldChange:onFieldChange});};

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

/***/ })

}]);