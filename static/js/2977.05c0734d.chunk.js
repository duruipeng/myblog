"use strict";
(self["webpackChunknews"] = self["webpackChunknews"] || []).push([[2977,6374,564,2202],{

/***/ 31892:
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
___CSS_LOADER_EXPORT___.push([module.id, `.base-table {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.base-table table {
  width: 100%;
  height: 100%;
  text-align: center;
}
.base-table table thead {
  position: relative;
  z-index: 1;
}
.base-table table .scroll-body {
  overflow: hidden;
  animation: scroll 10s linear infinite;
}
.base-table table .scroll-body td {
  height: 0px;
}
@keyframes scroll {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 96374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ lc_base_table_BaseTableComponent)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[2]!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[3]!./src/pages/Charts/comps/lc/base-table/BaseTableComponent.less
var BaseTableComponent = __webpack_require__(31892);
;// CONCATENATED MODULE: ./src/pages/Charts/comps/lc/base-table/BaseTableComponent.less

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(BaseTableComponent["default"], options);




       /* harmony default export */ const base_table_BaseTableComponent = (BaseTableComponent["default"] && BaseTableComponent["default"].locals ? BaseTableComponent["default"].locals : undefined);

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(85640);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7579);
;// CONCATENATED MODULE: ./src/pages/Charts/comps/lc/base-table/BaseTableComponent.tsx
const BaseTableComponent_BaseTableComponent=/*#__PURE__*/(0,react.forwardRef)((props,ref)=>{const[config,setConfig]=(0,react.useState)({...props});const tableRef=(0,react.useRef)(null);const theadRef=(0,react.useRef)(null);const tbodyRef1=(0,react.useRef)(null);const tbodyRef2=(0,react.useRef)(null);const resizeObserverRef=(0,react.useRef)(null);const eventHandlerMap=(0,react.useRef)({});const contentHeightRef=(0,react.useRef)(0);(0,react.useImperativeHandle)(ref,()=>({updateConfig:newConfig=>setConfig({...newConfig}),setEventHandler:eventMap=>eventHandlerMap.current=eventMap,destroy:destroy}));const onClick=()=>{if('click'in eventHandlerMap.current){var _eventHandlerMap$curr,_eventHandlerMap$curr2;(_eventHandlerMap$curr=(_eventHandlerMap$curr2=eventHandlerMap.current)['click'])===null||_eventHandlerMap$curr===void 0?void 0:_eventHandlerMap$curr.call(_eventHandlerMap$curr2);}};const destroy=()=>{var _resizeObserverRef$cu;tableRef&&(tableRef.current=null);theadRef&&(theadRef.current=null);tbodyRef1&&(tbodyRef1.current=null);tbodyRef2&&(tbodyRef2.current=null);resizeObserverRef&&((_resizeObserverRef$cu=resizeObserverRef.current)===null||_resizeObserverRef$cu===void 0?void 0:_resizeObserverRef$cu.disconnect());resizeObserverRef.current=null;};const changeTableTrHeight=()=>{const{pageSize=0}=config.style.body;if(pageSize){var _tableRef$current;const tableBodyTds=((_tableRef$current=tableRef.current)===null||_tableRef$current===void 0?void 0:_tableRef$current.getElementsByClassName('base-table-tr'))||[];const tdHeight=contentHeightRef.current/pageSize;for(let i=0;i<tableBodyTds.length;i++){tableBodyTds[i].style.height=`${tdHeight}px`;}}};(0,react.useEffect)(()=>{if(tableRef.current){contentHeightRef.current=tableRef.current.clientHeight-theadRef.current.clientHeight;resizeObserverRef.current=new ResizeObserver((0,lodash.debounce)(entries=>{for(const entry of entries){const{height}=entry.contentRect;contentHeightRef.current=height-theadRef.current.clientHeight;tbodyRef1.current&&(tbodyRef1.current.style.height=`${contentHeightRef.current}px`);tbodyRef2.current&&(tbodyRef2.current.style.height=`${contentHeightRef.current}px`);}changeTableTrHeight();},100));// 开始观察
resizeObserverRef.current.observe(tableRef.current);changeTableTrHeight();}},[]);const{columns,data,header,body}=config.style;const{enableCarousel,carouselSpeed=3,pageSize,...bodyStyle}=body;const carouselStyle=enableCarousel?`scroll ${carouselSpeed}s linear infinite`:`none`;if(pageSize)changeTableTrHeight();return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:'base-table',ref:tableRef,onClick:onClick,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("table",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("thead",{style:{...header},ref:theadRef,children:/*#__PURE__*/(0,jsx_runtime.jsx)("tr",{children:columns&&columns.map((column,index)=>{return/*#__PURE__*/(0,jsx_runtime.jsx)("th",{style:{width:column.width,fontWeight:header===null||header===void 0?void 0:header.fontWeight,textAlign:column.textAlign},children:column.label},index);})})}),/*#__PURE__*/(0,jsx_runtime.jsx)("tbody",{style:{...bodyStyle,animation:carouselStyle},className:"scroll-body",ref:tbodyRef1,children:data&&data.map((item,index)=>{return/*#__PURE__*/(0,jsx_runtime.jsx)("tr",{className:'base-table-tr',children:columns&&columns.map((column,i)=>{return/*#__PURE__*/(0,jsx_runtime.jsx)("td",{style:{textAlign:column.textAlign},children:item[column.key]},i);})},index);})}),/*#__PURE__*/(0,jsx_runtime.jsx)("tbody",{style:{...bodyStyle,animation:carouselStyle},className:"scroll-body",ref:tbodyRef2,children:data&&data.map((item,index)=>{return/*#__PURE__*/(0,jsx_runtime.jsx)("tr",{className:'base-table-tr',children:columns&&columns.map((column,i)=>{return/*#__PURE__*/(0,jsx_runtime.jsx)("td",{style:{textAlign:column.textAlign},children:item[column.key]},i);})},index);})})]})});});/* harmony default export */ const lc_base_table_BaseTableComponent = (BaseTableComponent_BaseTableComponent);

/***/ }),

/***/ 60564:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseTableStyleConfig: () => (/* binding */ BaseTableStyleConfig)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48331);
/* harmony import */ var _json_schema_LCGUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45818);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7579);
const BaseTableStyleConfig=_ref=>{var _controller$getConfig;let{controller}=_ref;const{columns,header,body}=((_controller$getConfig=controller.getConfig())===null||_controller$getConfig===void 0?void 0:_controller$getConfig.style)||{};const[,setCount]=react__WEBPACK_IMPORTED_MODULE_0__.useState(0);const schema={key:'style',children:[{key:'header',type:'accordion',label:'表头',children:[{type:'grid',config:{columns:2},children:[{key:'height',type:'number-input',label:'高度',value:header===null||header===void 0?void 0:header.height,config:{min:0}},{key:'background',type:'color-picker',label:'背景',value:header===null||header===void 0?void 0:header.background,config:{showText:true}},{key:'color',type:'color-picker',label:'字色',value:header===null||header===void 0?void 0:header.color,config:{showText:true}},{key:'fontSize',type:'number-input',label:'字号',value:header===null||header===void 0?void 0:header.fontSize,config:{min:0}},{key:'fontWeight',type:'number-input',label:'加粗',value:header===null||header===void 0?void 0:header.fontWeight,config:{min:0,max:900,step:100}}]}]},{key:'body',type:'accordion',label:'表体',children:[{type:'grid',config:{columns:2},children:[{key:'background',type:'color-picker',label:'背景',value:body===null||body===void 0?void 0:body.background,config:{showText:true}},{key:'color',type:'color-picker',label:'字色',value:body===null||body===void 0?void 0:body.color,config:{showText:true}},{key:'fontSize',type:'number-input',label:'字号',value:body===null||body===void 0?void 0:body.fontSize,config:{min:0}},{key:'fontWeight',type:'number-input',label:'加粗',value:body===null||body===void 0?void 0:body.fontWeight,config:{min:0,max:900,step:100}},{type:'switch',label:'轮播',key:'enableCarousel',reRender:true,value:body===null||body===void 0?void 0:body.enableCarousel},{rules:"{enableCarousel}==='true'",type:'number-input',label:'速度',key:'carouselSpeed',value:body===null||body===void 0?void 0:body.carouselSpeed,config:{min:0,max:100,step:0.1}},{type:'number-input',label:'页行数',key:'pageSize',value:body===null||body===void 0?void 0:body.pageSize,config:{min:0,max:100}}]}]},{key:'columns',type:'control-group',label:'表格列',value:columns,config:{itemName:'列',template:{type:'grid',config:{columns:2},children:[{key:'key',type:'input',label:'列字段名',value:'newColumn'},{key:'width',type:'number-input',label:'列宽',config:{min:0}},{key:'label',type:'input',label:'列显示名',value:'新建字段'},{key:'textAlign',type:'select',label:'对齐',value:'center',config:{options:[{label:'左对齐',value:'left'},{label:'居中',value:'center'},{label:'右对齐',value:'right'}]}}]}}}]};const onFieldChange=fieldChangeData=>{const{dataFragment,reRender}=fieldChangeData;controller.update(dataFragment);if(reRender)setCount(count=>count+1);};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_json_schema_LCGUI__WEBPACK_IMPORTED_MODULE_1__.LCGUI,{schema:schema,onFieldChange:onFieldChange});};

/***/ }),

/***/ 22202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseTableController: () => (/* binding */ BaseTableController)
/* harmony export */ });
/* harmony import */ var _framework_core_AbstractDesignerController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50171);
/* harmony import */ var _utils_ComponentUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53090);
/* harmony import */ var _BaseTableComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96374);
/* harmony import */ var _utils_ObjectUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61178);
class BaseTableController extends _framework_core_AbstractDesignerController__WEBPACK_IMPORTED_MODULE_0__["default"]{async create(container,config){this.config=config;this.container=container;this.instance=await _utils_ComponentUtil__WEBPACK_IMPORTED_MODULE_1__["default"].createAndRender(container,_BaseTableComponent__WEBPACK_IMPORTED_MODULE_2__["default"],config);}destroy(){var _this$instance;(_this$instance=this.instance)===null||_this$instance===void 0?void 0:_this$instance.destroy();this.instance=null;this.config=null;}getConfig(){return this.config;}changeData(data){var _this$instance2;this.config=_utils_ObjectUtil__WEBPACK_IMPORTED_MODULE_3__["default"].merge(this.config,{style:{data},data:{staticData:data}});(_this$instance2=this.instance)===null||_this$instance2===void 0?void 0:_this$instance2.updateConfig(this.config);}update(config,upOp){var _this$instance3;this.config=_utils_ObjectUtil__WEBPACK_IMPORTED_MODULE_3__["default"].merge(this.config,config);upOp=upOp||{reRender:true};if(upOp.reRender)(_this$instance3=this.instance)===null||_this$instance3===void 0?void 0:_this$instance3.updateConfig(this.config);}}

/***/ }),

/***/ 42977:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ BaseTableDefinition)
});

;// CONCATENATED MODULE: ./src/pages/Charts/comps/lc/base-table/base-table.png
const base_table_namespaceObject = "data:image/png;base64,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";
// EXTERNAL MODULE: ./src/pages/Charts/comps/lc/base-table/BaseTableController.ts
var BaseTableController = __webpack_require__(22202);
// EXTERNAL MODULE: ./src/pages/Charts/comps/lc/base-table/BaseTableConfig.tsx
var BaseTableConfig = __webpack_require__(60564);
// EXTERNAL MODULE: ./src/pages/Charts/framework/core/AbstractDesignerDefinition.ts
var AbstractDesignerDefinition = __webpack_require__(96690);
;// CONCATENATED MODULE: ./src/pages/Charts/comps/lc/base-table/BaseTableDefinition.ts
class BaseTableDefinition extends AbstractDesignerDefinition["default"]{getBaseInfo(){return{compName:"基础表格",compKey:"LcBaseTable",categorize:"web"};}getChartImg(){return base_table_namespaceObject;}getController(){return BaseTableController.BaseTableController;}getInitConfig(){const data=[{name:'张三',age:18,sex:'男'},{name:'李四',age:20,sex:'女'},{name:'王五',age:22,sex:'男'}];return{base:{id:"",name:'基础表格',type:'LcBaseTable'},style:{columns:[{key:'name',label:'姓名',width:undefined,textAlign:'center'},{key:'age',label:'年龄',width:undefined,textAlign:'center'},{key:'sex',label:'性别',width:undefined,textAlign:'center'}],data,header:{height:40,background:'#0080be',color:'#fff',fontSize:14,fontWeight:900},body:{background:'#141414',color:'#acacac',fontSize:14,fontWeight:500,enableCarousel:false,carouselSpeed:3}},filter:{enable:false,blur:0,brightness:1,contrast:1,opacity:1,saturate:1,hueRotate:0},data:{sourceType:'static',staticData:data}};}getMenuList(){return super.getMenuList().filter(item=>item.key!=='theme');}getMenuToConfigContentMap(){const menuMapping=super.getMenuToConfigContentMap();menuMapping['style']=BaseTableConfig.BaseTableStyleConfig;return menuMapping;}getEventList(){const eventList=super.getEventList();eventList.push(...[{id:"dataChange",name:"数据变更时"}]);return eventList;}}

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