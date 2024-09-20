"use strict";
(self["webpackChunknews"] = self["webpackChunknews"] || []).push([[9885,7715,3251,3765],{

/***/ 12961:
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
___CSS_LOADER_EXPORT___.push([module.id, `.data-config .card-panel-label {
  color: #b6b8bb !important;
  font-size: 12px !important;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 29885:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ common_component_data_config_DataConfig)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[2]!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[3]!./src/pages/Charts/comps/common-component/data-config/DataConfig.less
var DataConfig = __webpack_require__(12961);
;// CONCATENATED MODULE: ./src/pages/Charts/comps/common-component/data-config/DataConfig.less

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(DataConfig["default"], options);




       /* harmony default export */ const data_config_DataConfig = (DataConfig["default"] && DataConfig["default"].locals ? DataConfig["default"].locals : undefined);

// EXTERNAL MODULE: ./src/pages/Charts/json-schema/LCGUI.tsx
var LCGUI = __webpack_require__(45818);
// EXTERNAL MODULE: ./src/pages/Charts/comps/common-component/data-config/static/StaticDataConfig.tsx
var StaticDataConfig = __webpack_require__(93765);
// EXTERNAL MODULE: ./src/pages/Charts/comps/common-component/data-config/api/ApiDataConfig.tsx
var ApiDataConfig = __webpack_require__(7715);
// EXTERNAL MODULE: ./src/pages/Charts/comps/common-component/data-config/database/DatabaseConfig.tsx
var DatabaseConfig = __webpack_require__(5632);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7579);
;// CONCATENATED MODULE: ./src/pages/Charts/comps/common-component/data-config/DataConfig.tsx
const DataConfig_DataConfig=props=>{var _controller$getConfig;const{controller}=props;const dataSource=(_controller$getConfig=controller.getConfig())===null||_controller$getConfig===void 0?void 0:_controller$getConfig.data;const[sourceType,setSourceType]=(0,react.useState)(dataSource.sourceType);const onFieldChange=fieldChangeData=>{const{data}=fieldChangeData;setSourceType(data);controller.update({data:{sourceType:data}},{reRender:false});};const schema={type:'grid',config:{gridGap:'10px'},children:[{key:'sourceType',label:'数据源',type:'select',reRender:true,value:sourceType||'static',config:{options:[{value:'static',label:'静态数据'},{value:'api',label:'接口(API)'},{value:'database',label:'数据库'}],containerStyle:{marginBottom:10}}}]};return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:'data-config',children:[/*#__PURE__*/(0,jsx_runtime.jsx)(LCGUI.LCGUI,{schema:schema,onFieldChange:onFieldChange}),sourceType==='static'&&/*#__PURE__*/(0,jsx_runtime.jsx)(StaticDataConfig.StaticDataConfig,{controller:controller,data:dataSource.staticData}),sourceType==='api'&&/*#__PURE__*/(0,jsx_runtime.jsx)(ApiDataConfig.ApiDataConfig,{controller:controller,data:dataSource.apiData}),sourceType==='database'&&/*#__PURE__*/(0,jsx_runtime.jsx)(DatabaseConfig.DatabaseDataConfig,{controller:controller,data:dataSource.database})]});};/* harmony default export */ const common_component_data_config_DataConfig = (DataConfig_DataConfig);

/***/ }),

/***/ 7715:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiDataConfig: () => (/* binding */ ApiDataConfig)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48331);
/* harmony import */ var _utils_ObjectUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61178);
/* harmony import */ var _framework_message_GlobalMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21910);
/* harmony import */ var _json_schema_LCGUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45818);
/* harmony import */ var _utils_FetchUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20421);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7579);
function ApiDataConfig(props){var _dataRef$current,_dataRef$current2,_dataRef$current3,_dataRef$current4,_dataRef$current5,_dataRef$current6,_dataRef$current7;const{data,controller}=props;const dataRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(_utils_ObjectUtil__WEBPACK_IMPORTED_MODULE_4__["default"].merge({url:'',method:'get',header:{},params:{},autoFlush:false,frequency:5,filter:undefined},data));const apiTestResRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)("");const[count,setCount]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);const schema={type:'grid',config:{gridGap:'10px'},children:[{key:'url',type:'input',label:'接口地址',value:((_dataRef$current=dataRef.current)===null||_dataRef$current===void 0?void 0:_dataRef$current.url)||''},{key:'method',label:'请求方式',type:'select',value:(_dataRef$current2=dataRef.current)===null||_dataRef$current2===void 0?void 0:_dataRef$current2.method,config:{options:[{value:'get',label:'GET'},{value:'post',label:'POST'}]}},{type:'grid',label:'自动更新',config:{columns:8},children:[{key:'autoFlush',type:'checkbox',value:!!((_dataRef$current3=dataRef.current)!==null&&_dataRef$current3!==void 0&&_dataRef$current3.autoFlush),config:{contentStyle:{marginLeft:4}}},{key:'frequency',type:'number-input',config:{prefix:'每',suffix:'秒',min:5,containerStyle:{gridColumn:'2/9'}},value:((_dataRef$current4=dataRef.current)===null||_dataRef$current4===void 0?void 0:_dataRef$current4.frequency)||5}]},{type:'card-panel',label:'请求头',tip:'请求头信息，json格式',config:{contentStyle:{padding:0}},children:[{id:'header',key:'header',type:'code-editor',config:{height:100},value:JSON.stringify((_dataRef$current5=dataRef.current)===null||_dataRef$current5===void 0?void 0:_dataRef$current5.header,null,2)||''}]},{type:'card-panel',tip:'请求参数，json格式',label:'请求参数',config:{contentStyle:{padding:0}},children:[{id:'params',key:'params',type:'code-editor',config:{height:100},value:JSON.stringify((_dataRef$current6=dataRef.current)===null||_dataRef$current6===void 0?void 0:_dataRef$current6.params,null,2)||''}]},{type:'card-panel',label:'过滤器',config:{contentStyle:{padding:0}},children:[{key:'filter',type:'code-editor',config:{height:200,language:'javascript'},value:((_dataRef$current7=dataRef.current)===null||_dataRef$current7===void 0?void 0:_dataRef$current7.filter)||"function filter(data){\n\n\n\treturn data\n}"}]},{type:'card-panel',label:'响应结果',config:{contentStyle:{padding:0}},children:[{id:'apiTestRes',type:'code-editor',config:{readonly:true,height:160},reRender:true,value:apiTestResRef.current}]},{type:'grid',children:[{id:'testAndSave',type:'button',config:{children:'测试接口并保存',style:{width:'100%'}}}]}]};const validate=()=>{var _dataRef$current8,_dataRef$current9;if(!((_dataRef$current8=dataRef.current)!==null&&_dataRef$current8!==void 0&&_dataRef$current8.url)){var _globalMessage$messag;(_globalMessage$messag=_framework_message_GlobalMessage__WEBPACK_IMPORTED_MODULE_1__.globalMessage.messageApi)===null||_globalMessage$messag===void 0?void 0:_globalMessage$messag.error('接口地址不能为空');return false;}if(!((_dataRef$current9=dataRef.current)!==null&&_dataRef$current9!==void 0&&_dataRef$current9.method)){var _globalMessage$messag2;(_globalMessage$messag2=_framework_message_GlobalMessage__WEBPACK_IMPORTED_MODULE_1__.globalMessage.messageApi)===null||_globalMessage$messag2===void 0?void 0:_globalMessage$messag2.error('请求方式不能为空');return false;}if(typeof dataRef.current.header==='string'){const header=_utils_ObjectUtil__WEBPACK_IMPORTED_MODULE_4__["default"].stringToJsObj(dataRef.current.header);if(!header){var _globalMessage$messag3;(_globalMessage$messag3=_framework_message_GlobalMessage__WEBPACK_IMPORTED_MODULE_1__.globalMessage.messageApi)===null||_globalMessage$messag3===void 0?void 0:_globalMessage$messag3.error('请求头不符合json格式');return false;}else dataRef.current.header=header;}if(typeof dataRef.current.params==='string'){const param=_utils_ObjectUtil__WEBPACK_IMPORTED_MODULE_4__["default"].stringToJsObj(dataRef.current.params);if(!param){var _globalMessage$messag4;(_globalMessage$messag4=_framework_message_GlobalMessage__WEBPACK_IMPORTED_MODULE_1__.globalMessage.messageApi)===null||_globalMessage$messag4===void 0?void 0:_globalMessage$messag4.error('请求参数不符合json格式');return false;}else dataRef.current.params=param;}return true;};const testAndSave=()=>{if(!validate())return;let{params,header,url,method,filter}=dataRef.current;_utils_FetchUtil__WEBPACK_IMPORTED_MODULE_5__["default"].doRequest(url,method,header,params).then(res=>{let{data,code}=res;if(code===200){if(filter&&filter!==''){const func=eval(`(${filter})`);data=typeof func==='function'?func(data):data;}apiTestResRef.current=JSON.stringify(data,null,2);controller.update({data:{apiData:dataRef.current,staticData:data}},{reRender:false});controller.changeData(data);}else{var _globalMessage$messag5;apiTestResRef.current=JSON.stringify({msg:'请求错误'},null,2);controller.update({data:{apiData:dataRef.current}},{reRender:false});(_globalMessage$messag5=_framework_message_GlobalMessage__WEBPACK_IMPORTED_MODULE_1__.globalMessage.messageApi)===null||_globalMessage$messag5===void 0?void 0:_globalMessage$messag5.warning('配置项已保存，但数据未成功刷新');}}).finally(()=>{setCount(count+1);});};const onFieldChange=fieldChangeData=>{const{reRender,id,dataFragment}=fieldChangeData;if(id==='testAndSave')testAndSave();else if(id==='apiTestRes')return;else{dataRef.current=_utils_ObjectUtil__WEBPACK_IMPORTED_MODULE_4__["default"].merge(dataRef.current,dataFragment);}if(reRender)setCount(count+1);};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_json_schema_LCGUI__WEBPACK_IMPORTED_MODULE_2__.LCGUI,{schema:schema,onFieldChange:onFieldChange});}

/***/ }),

/***/ 5632:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DatabaseDataConfig: () => (/* binding */ DatabaseDataConfig)
/* harmony export */ });
/* harmony import */ var _json_schema_LCGUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45818);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48331);
/* harmony import */ var _framework_message_GlobalMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21910);
/* harmony import */ var _utils_ObjectUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61178);
/* harmony import */ var _utils_FetchUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20421);
/* harmony import */ var _utils_Base64Util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69162);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7579);
function DatabaseDataConfig(props){var _dataRef$current,_dataRef$current2,_dataRef$current3,_dataRef$current4,_dataRef$current5;const{data,controller}=props;const dataRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(data);const[dataSourceList,setDataSourceList]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);const[testRes,setTestRes]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);const[count,setCount]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{_utils_FetchUtil__WEBPACK_IMPORTED_MODULE_4__["default"].get(`/api/datasource/list`).then(res=>{var _globalMessage$messag;if(res.code===200){const options=res.data.map(item=>{return{label:item.name,value:item.id};});setDataSourceList(options);}else(_globalMessage$messag=_framework_message_GlobalMessage__WEBPACK_IMPORTED_MODULE_2__.globalMessage.messageApi)===null||_globalMessage$messag===void 0?void 0:_globalMessage$messag.error(res.msg);});},[]);const validate=()=>{const{targetDb,sql}=dataRef.current;if(!targetDb){var _globalMessage$messag2;(_globalMessage$messag2=_framework_message_GlobalMessage__WEBPACK_IMPORTED_MODULE_2__.globalMessage.messageApi)===null||_globalMessage$messag2===void 0?void 0:_globalMessage$messag2.error('请选择数据库');return false;}if(!sql){var _globalMessage$messag3;(_globalMessage$messag3=_framework_message_GlobalMessage__WEBPACK_IMPORTED_MODULE_2__.globalMessage.messageApi)===null||_globalMessage$messag3===void 0?void 0:_globalMessage$messag3.error('请输入SQL语句');return false;}if(!sql.trim().startsWith('select')){var _globalMessage$messag4;(_globalMessage$messag4=_framework_message_GlobalMessage__WEBPACK_IMPORTED_MODULE_2__.globalMessage.messageApi)===null||_globalMessage$messag4===void 0?void 0:_globalMessage$messag4.error('SQL语句必须以select开头');return false;}return true;};const testAndSave=()=>{if(!validate())return;const{targetDb,sql,filter}=dataRef.current;if(!sql||sql==='')return;_utils_FetchUtil__WEBPACK_IMPORTED_MODULE_4__["default"].post(`/api/db/executor/execute`,{id:targetDb,sql:_utils_Base64Util__WEBPACK_IMPORTED_MODULE_5__["default"].toBase64(sql)}).then(res=>{let{data,code,msg}=res;if(code===200){if(filter&&filter!==''){const func=eval(`(${filter})`);data=typeof func==='function'?func(data):data;}setTestRes(JSON.stringify(data,null,2));controller.update({data:{database:dataRef.current,staticData:data}});controller.changeData(data);}else{var _globalMessage$messag5;setTestRes(JSON.stringify({msg},null,2));controller.update({data:{database:dataRef.current}},{reRender:false});(_globalMessage$messag5=_framework_message_GlobalMessage__WEBPACK_IMPORTED_MODULE_2__.globalMessage.messageApi)===null||_globalMessage$messag5===void 0?void 0:_globalMessage$messag5.warning('配置项已保存，但数据未成功刷新 '+msg);}});};const onFieldChange=fieldChangeData=>{const{reRender,id,dataFragment}=fieldChangeData;if(id==='testAndSave')testAndSave();else dataRef.current=_utils_ObjectUtil__WEBPACK_IMPORTED_MODULE_6__["default"].merge(dataRef.current,dataFragment);if(reRender)setCount(count+1);};const schema={type:'grid',config:{gridGap:'10px'},children:[{key:'targetDb',label:'数据库',type:'select',value:(_dataRef$current=dataRef.current)===null||_dataRef$current===void 0?void 0:_dataRef$current.targetDb,reRender:true,config:{options:dataSourceList}},{type:'grid',label:'自动更新',config:{columns:8},children:[{key:'autoFlush',type:'checkbox',value:!!((_dataRef$current2=dataRef.current)!==null&&_dataRef$current2!==void 0&&_dataRef$current2.autoFlush),config:{contentStyle:{marginLeft:4}}},{key:'frequency',type:'number-input',config:{prefix:'每',suffix:'秒',min:5,containerStyle:{gridColumn:'2/9'}},value:((_dataRef$current3=dataRef.current)===null||_dataRef$current3===void 0?void 0:_dataRef$current3.frequency)||5}]},{type:'card-panel',label:'SQL语句',config:{contentStyle:{padding:0}},children:[{key:'sql',type:'code-editor',config:{height:160,language:'sql'},value:(_dataRef$current4=dataRef.current)===null||_dataRef$current4===void 0?void 0:_dataRef$current4.sql}]},{type:'card-panel',label:'过滤器',config:{contentStyle:{padding:0}},children:[{key:'filter',type:'code-editor',config:{height:200,language:'javascript'},value:((_dataRef$current5=dataRef.current)===null||_dataRef$current5===void 0?void 0:_dataRef$current5.filter)||"function filter(data){\n\n\n\treturn data\n}"}]},{id:'databaseTestRes',type:'card-panel',label:'响应结果',config:{contentStyle:{padding:0}},children:[{id:'databaseTestRes',type:'code-editor',config:{height:200,language:'json'},reRender:true,value:testRes}]},{type:'grid',children:[{id:'testAndSave',type:'button',config:{children:'测试SQL并保存',style:{width:'100%'}}}]}]};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_json_schema_LCGUI__WEBPACK_IMPORTED_MODULE_0__.LCGUI,{schema:schema,onFieldChange:onFieldChange});}

/***/ }),

/***/ 93765:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StaticDataConfig: () => (/* binding */ StaticDataConfig)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48331);
/* harmony import */ var _utils_ObjectUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61178);
/* harmony import */ var _framework_message_GlobalMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21910);
/* harmony import */ var _json_schema_LCGUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45818);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7579);
function StaticDataConfig(props){const{data,controller}=props;const dataRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(data);const flashStaticData=()=>{if(typeof dataRef.current==='string'){var _globalMessage$messag;const finalData=_utils_ObjectUtil__WEBPACK_IMPORTED_MODULE_4__["default"].stringToJsObj(dataRef.current);if(!finalData)(_globalMessage$messag=_framework_message_GlobalMessage__WEBPACK_IMPORTED_MODULE_1__.globalMessage.messageApi)===null||_globalMessage$messag===void 0?void 0:_globalMessage$messag.error('格式错误，请检查');else{controller.update({data:{staticData:finalData}},{reRender:false});controller.changeData(finalData);}}};const schema={type:'grid',config:{gridGap:'10px'},children:[{type:'code-editor',config:{height:500},value:JSON.stringify(dataRef.current,null,2)||''},{id:'doStaticSave',type:'button',config:{children:'保存并刷新数据',style:{width:'100%'}}}]};const onFieldChange=fieldChangeData=>{const{id,data}=fieldChangeData;if(id==='doStaticSave')flashStaticData();else{dataRef.current=data;}};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_json_schema_LCGUI__WEBPACK_IMPORTED_MODULE_2__.LCGUI,{schema:schema,onFieldChange:onFieldChange});}

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