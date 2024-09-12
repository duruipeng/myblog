"use strict";
(self["webpackChunknews"] = self["webpackChunknews"] || []).push([[4430,2049,9192],{

/***/ 97921:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71884);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7509);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.base-info-config .version-info {
  font-size: 12px;
  color: #b6b8bb;
  padding: 8px;
  margin-bottom: 10px;
  border-left: 3px solid #626262;
  background-color: #313131;
}
.base-info-config .lc-input-prefix {
  width: 18px;
}
.base-info-config .group-button img {
  width: 15px;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 34430:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ common_component_base_info_BaseInfo)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(48331);
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[2]!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[3]!./src/pages/Charts/comps/common-component/base-info/BaseInfo.less
var BaseInfo = __webpack_require__(97921);
;// CONCATENATED MODULE: ./src/pages/Charts/comps/common-component/base-info/BaseInfo.less

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(BaseInfo["default"], options);




       /* harmony default export */ const base_info_BaseInfo = (BaseInfo["default"] && BaseInfo["default"].locals ? BaseInfo["default"].locals : undefined);

// EXTERNAL MODULE: ./src/pages/Charts/designer/manager/LayerManager.ts
var LayerManager = __webpack_require__(40457);
// EXTERNAL MODULE: ./src/pages/Charts/json-schema/LCGUI.tsx
var LCGUI = __webpack_require__(45818);
// EXTERNAL MODULE: ./src/pages/Charts/designer/operate-provider/EventOperateStore.ts
var EventOperateStore = __webpack_require__(20357);
// EXTERNAL MODULE: ./src/pages/Charts/comps/common-component/base-info/BaseInfoStore.ts
var BaseInfoStore = __webpack_require__(40987);
// EXTERNAL MODULE: ./src/pages/Charts/designer/right/RightStore.ts
var RightStore = __webpack_require__(56833);
// EXTERNAL MODULE: ./src/pages/Charts/designer/loader/EditorDesignerLoader.ts
var EditorDesignerLoader = __webpack_require__(70274);
// EXTERNAL MODULE: ./src/pages/Charts/designer/left/layer-list/LayerListStore.ts
var LayerListStore = __webpack_require__(63828);
// EXTERNAL MODULE: ./src/pages/Charts/designer/left/layer-list/util/LayerUtil.ts
var LayerUtil = __webpack_require__(464);
// EXTERNAL MODULE: ./src/pages/Charts/designer/header/items/canvas/CanvasManager.ts
var CanvasManager = __webpack_require__(31218);
// EXTERNAL MODULE: ./node_modules/@icon-park/react/es/icons/AlignLeftTwo.js
var AlignLeftTwo = __webpack_require__(93436);
// EXTERNAL MODULE: ./node_modules/@icon-park/react/es/icons/AlignHorizontalCenterTwo.js
var AlignHorizontalCenterTwo = __webpack_require__(28880);
// EXTERNAL MODULE: ./node_modules/@icon-park/react/es/icons/AlignRightTwo.js
var AlignRightTwo = __webpack_require__(80173);
// EXTERNAL MODULE: ./node_modules/@icon-park/react/es/icons/AlignTopTwo.js
var AlignTopTwo = __webpack_require__(10738);
// EXTERNAL MODULE: ./node_modules/@icon-park/react/es/icons/AlignVerticalCenterTwo.js
var AlignVerticalCenterTwo = __webpack_require__(7550);
// EXTERNAL MODULE: ./node_modules/@icon-park/react/es/icons/AlignBottomTwo.js
var AlignBottomTwo = __webpack_require__(92822);
// EXTERNAL MODULE: ./node_modules/@icon-park/react/es/icons/Info.js
var Info = __webpack_require__(36858);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7579);
;// CONCATENATED MODULE: ./src/pages/Charts/comps/common-component/base-info/BaseInfo.tsx
/**
 * lc组件基础信息
 */class BaseInfo_BaseInfo extends react.Component{constructor(props){super(props);this.init=()=>{const{activeElem}=RightStore["default"];const{layerConfigs}=LayerManager["default"];const layer=layerConfigs[activeElem.id];if(!layer)return;if(layer.type==='group'){//分组图层
const childLayerIds=LayerUtil["default"].findAllChildLayer([layer.id]).filter(id=>{var _layerConfigs$id;return((_layerConfigs$id=layerConfigs[id])===null||_layerConfigs$id===void 0?void 0:_layerConfigs$id.type)!=='group';});const rect=this.calculateGroupRect(childLayerIds);this.state={...layer,...rect};}else{var _editorDesignerLoader;//普通组件
const baseInfo=(_editorDesignerLoader=EditorDesignerLoader["default"].definitionMap[layer.type])===null||_editorDesignerLoader===void 0?void 0:_editorDesignerLoader.getBaseInfo();this.state={...layer,version:baseInfo===null||baseInfo===void 0?void 0:baseInfo.version};}};this.calculateGroupRect=childLayerIds=>{const{layerConfigs}=LayerManager["default"];let minX=+Infinity,minY=+Infinity,maxX=-Infinity,maxY=-Infinity;childLayerIds.forEach(layerId=>{const{x=0,y=0,width=0,height=0}=layerConfigs[layerId];minX=Math.min(minX,x);minY=Math.min(minY,y);maxX=Math.max(maxX,x+width);maxY=Math.max(maxY,y+height);});return{x:minX,y:minY,width:maxX-minX,height:maxY-minY};};this.changeName=value=>{const{controller}=this.props;controller.update({base:{name:value}},{reRender:false});const{updateLayer}=LayerManager["default"];updateLayer&&updateLayer([{id:this.state.id,name:value}]);//如果显示图层,则更新图层名称
const{layerInstances}=LayerListStore["default"];const layerInstance=layerInstances[this.state.id];layerInstance&&layerInstance.setState({name:value});};this.handleMap={"name":this.changeName,"width":value=>{var _eventOperateStore$mo;return(_eventOperateStore$mo=EventOperateStore["default"].movableRef)===null||_eventOperateStore$mo===void 0?void 0:_eventOperateStore$mo.request("resizable",{offsetWidth:value,direction:[1,1]},true);},"height":value=>{var _eventOperateStore$mo2;return(_eventOperateStore$mo2=EventOperateStore["default"].movableRef)===null||_eventOperateStore$mo2===void 0?void 0:_eventOperateStore$mo2.request("resizable",{offsetHeight:value,direction:[1,1]},true);},"posX":value=>{var _eventOperateStore$mo3;return(_eventOperateStore$mo3=EventOperateStore["default"].movableRef)===null||_eventOperateStore$mo3===void 0?void 0:_eventOperateStore$mo3.request("draggable",{x:value},true);},"posY":value=>{var _eventOperateStore$mo4;return(_eventOperateStore$mo4=EventOperateStore["default"].movableRef)===null||_eventOperateStore$mo4===void 0?void 0:_eventOperateStore$mo4.request("draggable",{y:value},true);},"align":align=>{var _this$handleMap$align,_this$handleMap;return(_this$handleMap$align=(_this$handleMap=this.handleMap)[align])===null||_this$handleMap$align===void 0?void 0:_this$handleMap$align.call(_this$handleMap);},"left":()=>{var _eventOperateStore$mo5;return(_eventOperateStore$mo5=EventOperateStore["default"].movableRef)===null||_eventOperateStore$mo5===void 0?void 0:_eventOperateStore$mo5.request("draggable",{x:0},true);},"horizontally":()=>{var _eventOperateStore$mo6;return(_eventOperateStore$mo6=EventOperateStore["default"].movableRef)===null||_eventOperateStore$mo6===void 0?void 0:_eventOperateStore$mo6.request("draggable",{x:CanvasManager["default"].canvasConfig.width/2-this.state.width/2},true);},"right":()=>{var _eventOperateStore$mo7;return(_eventOperateStore$mo7=EventOperateStore["default"].movableRef)===null||_eventOperateStore$mo7===void 0?void 0:_eventOperateStore$mo7.request("draggable",{x:CanvasManager["default"].canvasConfig.width-this.state.width},true);},"top":()=>{var _eventOperateStore$mo8;return(_eventOperateStore$mo8=EventOperateStore["default"].movableRef)===null||_eventOperateStore$mo8===void 0?void 0:_eventOperateStore$mo8.request("draggable",{y:0},true);},"vertically":()=>{var _eventOperateStore$mo9;return(_eventOperateStore$mo9=EventOperateStore["default"].movableRef)===null||_eventOperateStore$mo9===void 0?void 0:_eventOperateStore$mo9.request("draggable",{y:CanvasManager["default"].canvasConfig.height/2-this.state.height/2},true);},"bottom":()=>{var _eventOperateStore$mo10;return(_eventOperateStore$mo10=EventOperateStore["default"].movableRef)===null||_eventOperateStore$mo10===void 0?void 0:_eventOperateStore$mo10.request("draggable",{y:CanvasManager["default"].canvasConfig.height-this.state.height},true);}};this.onFieldChange=fieldChangeData=>{const{id:key,data}=fieldChangeData;const{targetIds,setTargetIds}=EventOperateStore["default"];if(!targetIds.includes(this.state.id)){const{type}=this.state;if(type==='group'){const{layerConfigs}=LayerManager["default"];const childIds=LayerUtil["default"].findAllChildLayer([this.state.id]).filter(id=>{var _layerConfigs$id2;return((_layerConfigs$id2=layerConfigs[id])===null||_layerConfigs$id2===void 0?void 0:_layerConfigs$id2.type)!=='group';});setTargetIds(childIds);}else{setTargetIds([this.state.id]);}}const layerTimer=setTimeout(()=>{var _this$handleMap2,_this$handleMap3;(_this$handleMap2=(_this$handleMap3=this.handleMap)[key])===null||_this$handleMap2===void 0?void 0:_this$handleMap2.call(_this$handleMap3,data);clearTimeout(layerTimer);},1);};this.buildSchema=()=>{const{name,width,height,x,y}=this.state;return{type:'grid',config:{columns:2},children:[{id:"name",key:"name",label:"名称",type:"input",value:name,config:{containerStyle:{gridColumn:'1/3'}}},{type:'grid',label:'尺寸',config:{columns:2,containerStyle:{gridColumn:'1/3'}},children:[{id:"width",key:"width",type:"number-input",label:"宽度",value:width,reRender:true},{id:"height",key:"height",type:"number-input",label:"高度",value:height,reRender:true}]},{type:'grid',label:'位置',config:{columns:2,containerStyle:{gridColumn:'1/3'}},children:[{id:"posX",key:"posX",type:"number-input",label:"X轴",reRender:true,value:x},{id:"posY",key:"posY",type:"number-input",label:"Y轴",reRender:true,value:y}]},{id:'align',label:'对齐',type:'group-button',config:{containerStyle:{gridColumn:'1/3'},items:[{value:'left',content:/*#__PURE__*/(0,jsx_runtime.jsx)(AlignLeftTwo["default"],{theme:"filled",size:"16",strokeWidth:2,strokeLinecap:"square"})},{value:'horizontally',content:/*#__PURE__*/(0,jsx_runtime.jsx)(AlignHorizontalCenterTwo["default"],{theme:"filled",size:"16",strokeWidth:2,strokeLinecap:"square"})},{value:'right',content:/*#__PURE__*/(0,jsx_runtime.jsx)(AlignRightTwo["default"],{theme:"filled",size:"16",strokeWidth:2,strokeLinecap:"square"})},{value:'top',content:/*#__PURE__*/(0,jsx_runtime.jsx)(AlignTopTwo["default"],{theme:"filled",size:"16",strokeWidth:2,strokeLinecap:"square"})},{value:'vertically',content:/*#__PURE__*/(0,jsx_runtime.jsx)(AlignVerticalCenterTwo["default"],{theme:"filled",size:"16",strokeWidth:2,strokeLinecap:"square"})},{value:'bottom',content:/*#__PURE__*/(0,jsx_runtime.jsx)(AlignBottomTwo["default"],{theme:"filled",size:"16",strokeWidth:2,strokeLinecap:"square"})}]}}]};};this.init();}componentDidMount(){const{setBaseConfigRef}=BaseInfoStore["default"];setBaseConfigRef&&setBaseConfigRef(this);}componentWillUnmount(){const{setBaseConfigRef}=BaseInfoStore["default"];setBaseConfigRef&&setBaseConfigRef(null);}render(){const{type,version}=this.state;const schema=this.buildSchema();return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:'base-info-config',children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:'version-info',children:/*#__PURE__*/(0,jsx_runtime.jsxs)("span",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Info["default"],{})," ",type," | ",version?`版本: ${version}`:'无版本信息']})}),/*#__PURE__*/(0,jsx_runtime.jsx)(LCGUI.LCGUI,{schema:schema,onFieldChange:this.onFieldChange})]});}}/* harmony default export */ const common_component_base_info_BaseInfo = (BaseInfo_BaseInfo);

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

/***/ 92822:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48331);
/* harmony import */ var _runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88718);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_runtime__WEBPACK_IMPORTED_MODULE_1__.IconWrapper)('align-bottom-two', true, function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    width: props.size,
    height: props.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
    x: "7",
    y: "16",
    width: "6",
    height: "24",
    fill: props.colors[1],
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap,
    strokeLinejoin: props.strokeLinejoin
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
    x: "21",
    y: "8",
    width: "6",
    height: "32",
    fill: props.colors[1],
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap,
    strokeLinejoin: props.strokeLinejoin
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
    x: "35",
    y: "22",
    width: "6",
    height: "18",
    fill: props.colors[1],
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap,
    strokeLinejoin: props.strokeLinejoin
  }));
}));

/***/ }),

/***/ 28880:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48331);
/* harmony import */ var _runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88718);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_runtime__WEBPACK_IMPORTED_MODULE_1__.IconWrapper)('align-horizontal-center-two', true, function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    width: props.size,
    height: props.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
    x: "7",
    y: "12",
    width: "6",
    height: "24",
    fill: props.colors[1],
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap,
    strokeLinejoin: props.strokeLinejoin
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
    x: "21",
    y: "8",
    width: "6",
    height: "32",
    fill: props.colors[1],
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap,
    strokeLinejoin: props.strokeLinejoin
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
    x: "35",
    y: "15",
    width: "6",
    height: "18",
    fill: props.colors[1],
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap,
    strokeLinejoin: props.strokeLinejoin
  }));
}));

/***/ }),

/***/ 93436:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48331);
/* harmony import */ var _runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88718);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_runtime__WEBPACK_IMPORTED_MODULE_1__.IconWrapper)('align-left-two', true, function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    width: props.size,
    height: props.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
    x: "8",
    y: "7",
    width: "24",
    height: "6",
    fill: props.colors[1],
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap,
    strokeLinejoin: props.strokeLinejoin
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
    x: "8",
    y: "21",
    width: "32",
    height: "6",
    fill: props.colors[1],
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap,
    strokeLinejoin: props.strokeLinejoin
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
    x: "8",
    y: "35",
    width: "18",
    height: "6",
    fill: props.colors[1],
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap,
    strokeLinejoin: props.strokeLinejoin
  }));
}));

/***/ }),

/***/ 80173:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48331);
/* harmony import */ var _runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88718);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_runtime__WEBPACK_IMPORTED_MODULE_1__.IconWrapper)('align-right-two', true, function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    width: props.size,
    height: props.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
    x: "16",
    y: "7",
    width: "24",
    height: "6",
    fill: props.colors[1],
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap,
    strokeLinejoin: props.strokeLinejoin
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
    x: "8",
    y: "21",
    width: "32",
    height: "6",
    fill: props.colors[1],
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap,
    strokeLinejoin: props.strokeLinejoin
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
    x: "22",
    y: "35",
    width: "18",
    height: "6",
    fill: props.colors[1],
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap,
    strokeLinejoin: props.strokeLinejoin
  }));
}));

/***/ }),

/***/ 10738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48331);
/* harmony import */ var _runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88718);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_runtime__WEBPACK_IMPORTED_MODULE_1__.IconWrapper)('align-top-two', true, function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    width: props.size,
    height: props.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
    x: "7",
    y: "8",
    width: "6",
    height: "24",
    fill: props.colors[1],
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap,
    strokeLinejoin: props.strokeLinejoin
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
    x: "21",
    y: "8",
    width: "6",
    height: "32",
    fill: props.colors[1],
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap,
    strokeLinejoin: props.strokeLinejoin
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
    x: "35",
    y: "8",
    width: "6",
    height: "18",
    fill: props.colors[1],
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap,
    strokeLinejoin: props.strokeLinejoin
  }));
}));

/***/ }),

/***/ 7550:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48331);
/* harmony import */ var _runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88718);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_runtime__WEBPACK_IMPORTED_MODULE_1__.IconWrapper)('align-vertical-center-two', true, function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    width: props.size,
    height: props.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
    x: "12",
    y: "7",
    width: "24",
    height: "6",
    fill: props.colors[1],
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap,
    strokeLinejoin: props.strokeLinejoin
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
    x: "8",
    y: "21",
    width: "32",
    height: "6",
    fill: props.colors[1],
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap,
    strokeLinejoin: props.strokeLinejoin
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
    x: "15",
    y: "35",
    width: "18",
    height: "6",
    fill: props.colors[1],
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap,
    strokeLinejoin: props.strokeLinejoin
  }));
}));

/***/ })

}]);