"use strict";
(self["webpackChunknews"] = self["webpackChunknews"] || []).push([[3096,8101,6872,3630],{

/***/ 78101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48331);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7579);
class BaseIframeComponent extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(props){super(props);this.eventHandlerMap={};this.onLoad=()=>{var _this$eventHandlerMap,_this$eventHandlerMap2;if('load'in this.eventHandlerMap)(_this$eventHandlerMap=(_this$eventHandlerMap2=this.eventHandlerMap)['load'])===null||_this$eventHandlerMap===void 0?void 0:_this$eventHandlerMap.call(_this$eventHandlerMap2);};this.state={...props};}render(){const{src}=this.state.style;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:src===""?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{color:'#9a9a9a',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:"\u8BF7\u8BBE\u7F6Eiframe\u5730\u5740"})}):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{height:'100%',display:'flex'},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("iframe",{title:'lc标准iframe组件',src:src,onLoad:this.onLoad,style:{width:'100%',height:'100%',border:'none'}})})});}}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseIframeComponent);

/***/ }),

/***/ 46872:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseIframeStyleConfig: () => (/* binding */ BaseIframeStyleConfig)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48331);
/* harmony import */ var _json_schema_LCGUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45818);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7579);
const BaseIframeStyleConfig=_ref=>{var _getConfig;let{controller}=_ref;const{src}=(_getConfig=controller.getConfig())===null||_getConfig===void 0?void 0:_getConfig.style;const onFieldChange=fieldChangeData=>{const{dataFragment}=fieldChangeData;controller.update(dataFragment);};const schema={key:'style',type:'grid',children:[{key:'src',type:'input',label:'地址',value:src}]};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_json_schema_LCGUI__WEBPACK_IMPORTED_MODULE_1__.LCGUI,{schema:schema,onFieldChange:onFieldChange});};

/***/ }),

/***/ 63630:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseIframeController: () => (/* binding */ BaseIframeController)
/* harmony export */ });
/* harmony import */ var _framework_core_AbstractDesignerController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50171);
/* harmony import */ var _utils_ComponentUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53090);
/* harmony import */ var _BaseIframeComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78101);
/* harmony import */ var _utils_ObjectUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61178);
/* harmony import */ var _designer_blueprint_core_BPExecutor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19002);
class BaseIframeController extends _framework_core_AbstractDesignerController__WEBPACK_IMPORTED_MODULE_0__["default"]{async create(container,config){this.config=config;this.container=container;this.instance=await _utils_ComponentUtil__WEBPACK_IMPORTED_MODULE_1__["default"].createAndRender(container,_BaseIframeComponent__WEBPACK_IMPORTED_MODULE_2__["default"],config);}destroy(){this.instance=null;this.config=null;}getConfig(){return this.config;}update(config,upOp){var _this$instance;this.config=_utils_ObjectUtil__WEBPACK_IMPORTED_MODULE_4__["default"].merge(this.config,config);upOp=upOp||{reRender:true};if(upOp.reRender)(_this$instance=this.instance)===null||_this$instance===void 0?void 0:_this$instance.setState(this.config);}registerEvent(){if(this.instance){var _this$config,_this$config$base;const nodeId=(_this$config=this.config)===null||_this$config===void 0?void 0:(_this$config$base=_this$config.base)===null||_this$config$base===void 0?void 0:_this$config$base.id;this.instance.eventHandlerMap={load:()=>_designer_blueprint_core_BPExecutor__WEBPACK_IMPORTED_MODULE_3__["default"].triggerComponentEvent(nodeId,"load",this.config)};}}}

/***/ }),

/***/ 3096:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ BaseIframeDefinition)
});

;// CONCATENATED MODULE: ./src/pages/Charts/comps/lc/base-iframe/base-iframe.png
const base_iframe_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPwAAACeCAIAAACZ9fBhAAAHQElEQVR4Xu3b72vaeADH8ftDfBDoYMjtZMhYB9mDHsi4spWjlrPggzA492BgjvrEHpajUB8YaPZAhqVIwYKF/ptnYn4ZbZvUbov7vF9PRk1M7HwnfvM1/eUlIOaXFy9elAAlRA85RA85RA85RA85RA85RA85RA85RA85RA85RA85RA85RA85RA85RA85RA85RA85RA85RA85RA85RA85RA85RA85RA85RA85RA85RA85RA85RA85RA85RA85RA85RA85RA85RA85RA85RA85RA85RA85RA85RA85RA85RA85RA85RA85RA85RA85RA85RA85RA85RA85RA85RA85RA85RA85RA85RA85RA85RA85RA85RA85RA85RA85RA85RA85RA85RA85RA85RJ+BUakdWtZhrWKkl2ATEf2DjPp/09u5c6ucXloy3jQ6g9EkWGU6/Gym10DBaEf/2h7dXXPItC+C5m8vO6miK83+JFw4Nz4i+qKTjr52PC92enpw38ClctAb39ze3ox7B5XFJXu96yh2t9u2WkeO0yb6ohOO3qifzsckV91aelk2bzvjIHn3nk8KFI1u9OWP7jzYUXs7vSyjKPqlYQ+KTDb6bfvr2idpot9Mmx298XzHOhud/pV+/GHvuuFwvn7fcN5nHgVtRxep0SNLnKa/QnOQ+NnYbp6N/JHUyA4PDuPVbuvYHV2Fsz6zV3I57H1amhVdPK4M0+p/DZ4yHbudP8PVt0zrZDieL7iZjgb23svVv5ZhJuea/J1a5upVV3pru+ed+qsczyigjY3ef5vn4Qah5RFewk6679KLlq0XfaU5iMIed976iw/64SNp00Fz4WI5Ef1e04k2FJrOtl/6relE19OR634j/Qlm1I6CyaoUb6cZMw5fz/ju46r4NjD6LbNx7MYThRO39Ta9ygOiS9ivdpbh/HL05Z2GNdN2gpcxcWzv55ndqr9CHP1psCtfGH3Tmf0wvfAmfBrvTfN9wz6ZfxR43I+JWqPop1NvhUun88myj11vNil43HG+eP+OB52WZXe/xEfj5Hjh+tz8Jyz+Ztxv12tVc9fqDsOjZfRPtgFatXF6Ge5gttOzVm0D09+o6Leq9SN3Er3fV273MM9Hcyi6hF3I627L0QfuHtNH0XsmTmvn2cLrPLC70cgkYOz+Gx7Ig2a8KJ4gur0d2tvhAuOPXvL7AfdTtLXEdi6iwVSp9PrzMHh01Pk9sef4cSex1/sZlXet/kU8LhudWTvPsz65CDYk+lTul469X33sf3N4CZtlOO9bL/rh59eLy+4SdZzcWhz9pPdHYuVSNao1PeUaHw/xuC/6FSYne6mDzf/U8fTzXRoZz3asRPqT4YllbqVXKqbCR29U9tpO/Gl+2W+9yzr+XC28hE19+t9jreiTp+1Fxq+1utXq/Nfvn48mV4lB0Oro01cu0S4m/+4uLCi3gg+y+Cnllj8E8g70/YV1S/f8dpl46feCa6tbb6x53Ch++kWPPr5kvHY+r5m7JxrOj+yMJ+B7ssgQffopPuNloxefI5esjD7HLqJzdxS92UkMxO+ytJ0cDLN5Gv1Gg/wTC99X0aMv73fj88h01P+0W13nRFK2grPgfTfbpK0Tffr8PFNu9KPJlqth/6hlHe6a1cqz31dtLcMu0q/qO0c/O9cfdpxo+zdj5+OjtvMdFT16n2Eedt2r6N2ZDR8fOWmw3Z7PYDxws03K00YfDcb96caEbxl9eM/cpLdfvUsl78Xoltk4cuJZJ++UtPQ9QyFtRPRzRnXfjs8oXvs9KzUr8oBad37k5LzZ5mmjjxa5fy982JT/DofiTx99Kbo7+vH3XCQYr+r2IK7dn0bL9078WBsU/Vzqysn7H884T28chMP5nG/8N4p+YSIl+QXTN4i+9KEXNDp1W2/WyLNcX7gaWWsa7YfZuOgDhtnongfpL4e1Stk6n6+e+2abp40+Mdc4HZ34X2q1/aP42v/6KbW1DLtIv6qV0ZeSXwxPR943WaF21xmOhxm/nApfz/Ri7Wm0H2dTo5/z7mDJeO9N+PcimWfnY08bfcnY6UR/lRK5dpofVm0twy7Sr2p19N5+w3vsVljayB28e2+6jcd8JVggmx19drlutkl54uhL/o1DZ+FdX9H9YSu3tvJBX+7oPYZ52HHCW9Y808nkq9tt14s/uf6ENKLPebMNfm4S0ee92QY/N4Xoc99sg5+bQvTAAqKHHKKHHKKHHKKHHKKHHKKHHKKHHKKHHKKHHKKHHKKHHKKHHKKHHKKHHKKHHKKHHKKHHKKHHKKHHKKHHKKHHKKHHKKHHKKHHKKHHKKHHKKHHKKHHKKHHKKHHKKHHKKHHKKHHKKHHKKHHKKHHKKHHKKHHKKHHKKHHKKHHKKHHKKHHKKHHKKHHKKHHKKHHKKHHKKHHKKHHKKHHKKHHKKHHKKHHKKHHKKHHKKHHKKHHKKHHKKHHKKHHKKHHKKHHKKHnP8B1pcLr7NqN7oAAAAASUVORK5CYII=";
// EXTERNAL MODULE: ./src/pages/Charts/comps/lc/base-iframe/BaseIframeController.ts
var BaseIframeController = __webpack_require__(63630);
// EXTERNAL MODULE: ./src/pages/Charts/comps/lc/base-iframe/BaseIframeConfig.tsx
var BaseIframeConfig = __webpack_require__(46872);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(48331);
// EXTERNAL MODULE: ./src/pages/Charts/framework/core/AbstractDesignerDefinition.ts
var AbstractDesignerDefinition = __webpack_require__(96690);
;// CONCATENATED MODULE: ./src/pages/Charts/comps/lc/base-iframe/BaseIframeDefinition.ts
const BaseInfo=/*#__PURE__*/react.lazy(()=>__webpack_require__.e(/* import() */ 2049).then(__webpack_require__.bind(__webpack_require__, 34430)));const FilterConfig=/*#__PURE__*/react.lazy(()=>__webpack_require__.e(/* import() */ 9057).then(__webpack_require__.bind(__webpack_require__, 31438)));class BaseIframeDefinition extends AbstractDesignerDefinition["default"]{getBaseInfo(){return{compName:"基础iframe",compKey:"BaseIframe",categorize:"web"};}getChartImg(){return base_iframe_namespaceObject;}getController(){return BaseIframeController.BaseIframeController;}getInitConfig(){return{base:{id:"",name:'基础iframe',type:'BaseIframe'},style:{src:''}};}getMenuList(){return super.getMenuList().filter(menu=>menu.key!=='data'&&menu.key!=='theme');}getMenuToConfigContentMap(){return{base:BaseInfo,style:BaseIframeConfig.BaseIframeStyleConfig,filter:FilterConfig};}getEventList(){const events=super.getEventList();return events.concat([{id:"load",name:"iframe加载完成时"}]);}}

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