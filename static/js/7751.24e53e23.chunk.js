"use strict";
(self["webpackChunknews"] = self["webpackChunknews"] || []).push([[7751,7556,3702],{

/***/ 63:
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
___CSS_LOADER_EXPORT___.push([module.id, `.lc-legend-config {
  display: flex;
  padding: 10px 0;
  justify-content: space-between;
}
.lc-legend-config .legend-position {
  font-size: 6px;
  width: 50%;
}
.lc-legend-config .legend-position .pos-row {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.lc-legend-config .legend-position .pos-row .pos-item {
  width: calc(100% / 3);
  text-align: center;
  line-height: 38px;
}
.lc-legend-config .legend-config-right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.lc-legend-config .legend-config-right .legend-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.lc-legend-config .legend-config-right .legend-layout .legend-layout-value {
  margin-bottom: 5px;
}
.lc-legend-config .legend-config-right .legend-color {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.lc-legend-config .legend-config-right .legend-color .legend-label-color {
  margin-bottom: 5px;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 97556:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AntdCommonUtil)
/* harmony export */ });
class AntdCommonUtil{static getDataFieldOptions(controller){var _config$data;const config=controller.getConfig();const data=config===null||config===void 0?void 0:(_config$data=config.data)===null||_config$data===void 0?void 0:_config$data.staticData;const options=[];if(data&&data.length>=1){const dataObj=data[0];Object.keys(dataObj).forEach(key=>options.push({label:key,value:key}));}return options;}}

/***/ }),

/***/ 93702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  AntdLegend: () => (/* binding */ AntdLegend)
});

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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[2]!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[3]!./src/pages/Charts/comps/antd-common/config/legend/Legend.less
var Legend = __webpack_require__(63);
;// CONCATENATED MODULE: ./src/pages/Charts/comps/antd-common/config/legend/Legend.less

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Legend["default"], options);




       /* harmony default export */ const legend_Legend = (Legend["default"] && Legend["default"].locals ? Legend["default"].locals : undefined);

// EXTERNAL MODULE: ./src/pages/Charts/json-schema/LCGUI.tsx
var LCGUI = __webpack_require__(45818);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7579);
;// CONCATENATED MODULE: ./src/pages/Charts/comps/antd-common/config/legend/AntdLegend.tsx
const AntdLegend=props=>{const{controller}=props;const{legend}=controller.getConfig().style;const onFieldChange=fieldChangeData=>{const{id,data,dataFragment}=fieldChangeData;if(id==='legendSwitch'){if(data)controller.update({style:{legend}});else controller.update({style:{legend:false}});}else{controller.update(dataFragment);}};const schema={key:'style',id:'legendSwitch',type:'accordion',label:'图例',config:{showSwitch:true},value:!!legend,children:[{key:'legend',type:'grid',config:{columns:2},children:[{key:'position',type:'select',label:'位置',value:'left-top',config:{options:[{value:'left-top',label:'左上'},{value:'left',label:'正左'},{value:'left-bottom',label:'左下'},{value:'top-left',label:'上左'},{value:'top',label:'正上'},{value:'top-right',label:'上右'},{value:'right-top',label:'右上'},{value:'right',label:'正右'},{value:'right-bottom',label:'右下'},{value:'bottom-left',label:'下左'},{value:'bottom',label:'正下'},{value:'bottom-right',label:'下右'}]}},{key:'layout',type:'select',label:'方向',value:'horizontal',config:{options:[{value:'horizontal',label:'水平'},{value:'vertical',label:'垂直'}]}},{key:'itemName',children:[{key:'style',children:[{key:'fontSize',type:'number-input',label:'字号',value:12,config:{min:0,max:100}},{key:'fill',type:'color-picker',label:'颜色',value:'#1c1c1c',config:{showText:true}}]}]}]}]};return/*#__PURE__*/(0,jsx_runtime.jsx)(LCGUI.LCGUI,{schema:schema,onFieldChange:onFieldChange});};

/***/ }),

/***/ 87751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AntdPieFieldMapping: () => (/* binding */ AntdPieFieldMapping),
/* harmony export */   AntdPieGraphicsConfig: () => (/* binding */ AntdPieGraphicsConfig),
/* harmony export */   "default": () => (/* binding */ AntdPieStyleConfig)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48331);
/* harmony import */ var _json_schema_LCGUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45818);
/* harmony import */ var _antd_common_AntdCommonUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97556);
/* harmony import */ var _antd_common_config_legend_AntdLegend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93702);
/* harmony import */ var _json_schema_LCGUIUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84226);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7579);
class AntdPieStyleConfig extends react__WEBPACK_IMPORTED_MODULE_0__.Component{render(){const controller=this.props.controller;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(AntdPieGraphicsConfig,{controller:controller}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_antd_common_config_legend_AntdLegend__WEBPACK_IMPORTED_MODULE_2__.AntdLegend,{controller:controller})]});}}const AntdPieGraphicsConfig=props=>{var _config$statistic,_config$statistic2,_config$statistic2$ti,_config$statistic3,_config$statistic3$ti,_config$statistic3$ti2,_config$statistic4,_config$statistic4$ti,_config$statistic4$ti2,_config$statistic5,_config$statistic5$ti,_config$statistic5$ti2,_config$statistic6,_config$statistic6$ti,_config$statistic7,_config$statistic7$ti,_config$statistic8,_config$statistic9,_config$statistic9$co,_config$statistic10,_config$statistic10$c,_config$statistic10$c2,_config$statistic11,_config$statistic11$c,_config$statistic11$c2,_config$statistic12,_config$statistic12$c,_config$statistic12$c2,_config$statistic13,_config$statistic13$c,_config$statistic14,_config$statistic14$c,_config$label,_config$label2,_config$label3,_config$label3$style,_config$label4,_config$label4$style,_config$label5,_config$label5$style,_config$label6,_config$label7;const{controller}=props;const config=controller.getConfig().style;const[count,setCount]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);const onFieldChange=fieldChangeData=>{let{id,data,dataKeyPath,dataFragment,reRender}=fieldChangeData;if(id==='startAngle'||id==='endAngle'){data=data/180*Math.PI;controller.update(_json_schema_LCGUIUtil__WEBPACK_IMPORTED_MODULE_4__["default"].createObjectFromArray(dataKeyPath,data));}else if(id==="titleSwitch"){if(data){controller.update({style:{statistic:{title:{style:{fontSize:'12px',color:'#fff'},content:'text'}}}});}else{controller.update({style:{statistic:{content:false}}});}}else if(id==="contentSwitch"){if(data){controller.update({style:{statistic:{content:{style:{fontSize:'12px',color:'#fff'},content:'content'}}}});}else{controller.update({style:{statistic:{content:false}}});}}else if(id==="labelRotate"){controller.update({style:{label:{rotate:data*Math.PI}}});}else{controller.update(dataFragment);}if(reRender)setCount(count+1);};const schema={key:'style',children:[{type:'accordion',label:'图形',children:[{type:'grid',config:{columns:2},children:[{key:'radius',type:'number-input',label:'外径',value:config.radius,config:{min:0,max:1,step:0.01}},{id:'startAngle',key:'startAngle',type:'number-input',label:'起始角',value:(config.startAngle||0)/Math.PI*180,config:{suffix:'°'}},{key:'innerRadius',type:'number-input',label:'内径',value:config.innerRadius,config:{min:0,max:1,step:0.01}},{id:'endAngle',key:'endAngle',type:'number-input',label:'结束角',value:(config.endAngle||2*Math.PI)/Math.PI*180,config:{suffix:'°'}},{key:'pieStyle',children:[{key:'stroke',type:'color-picker',label:'描边色',value:'#1c1c1c',config:{showText:true}},{key:'lineWidth',type:'number-input',label:'描边宽',value:0,config:{min:0,max:30}}]},{key:'color',type:'color-mode',label:'颜色',value:'#1c1c1c',config:{containerStyle:{gridColumn:'1 / 3'}}}]}]},{key:'statistic',type:'accordion',label:'标题',children:[{key:'title',type:'grid',config:{columns:2},children:[{id:'titleSwitch',key:'titleSwitch',type:'switch',label:'开启',value:!!((_config$statistic=config.statistic)!==null&&_config$statistic!==void 0&&_config$statistic.title)},{rules:"{titleSwitch} === 'true'",children:[{key:'content',type:'input',label:'内容',value:(_config$statistic2=config.statistic)===null||_config$statistic2===void 0?void 0:(_config$statistic2$ti=_config$statistic2.title)===null||_config$statistic2$ti===void 0?void 0:_config$statistic2$ti.content},{key:'style',children:[{key:'fontSize',type:'number-input',label:'字号',value:parseInt(((_config$statistic3=config.statistic)===null||_config$statistic3===void 0?void 0:(_config$statistic3$ti=_config$statistic3.title)===null||_config$statistic3$ti===void 0?void 0:(_config$statistic3$ti2=_config$statistic3$ti.style)===null||_config$statistic3$ti2===void 0?void 0:_config$statistic3$ti2.fontSize)+''),config:{min:0,max:100}},{key:'fontWeight',type:'number-input',label:'加粗',value:((_config$statistic4=config.statistic)===null||_config$statistic4===void 0?void 0:(_config$statistic4$ti=_config$statistic4.title)===null||_config$statistic4$ti===void 0?void 0:(_config$statistic4$ti2=_config$statistic4$ti.style)===null||_config$statistic4$ti2===void 0?void 0:_config$statistic4$ti2.fontWeight)||500,config:{min:100,max:900,step:100}},{key:'color',type:'color-picker',label:'颜色',value:(_config$statistic5=config.statistic)===null||_config$statistic5===void 0?void 0:(_config$statistic5$ti=_config$statistic5.title)===null||_config$statistic5$ti===void 0?void 0:(_config$statistic5$ti2=_config$statistic5$ti.style)===null||_config$statistic5$ti2===void 0?void 0:_config$statistic5$ti2.color,config:{showText:true}}]},{key:'offsetX',type:'number-input',label:'x偏移',value:((_config$statistic6=config.statistic)===null||_config$statistic6===void 0?void 0:(_config$statistic6$ti=_config$statistic6.title)===null||_config$statistic6$ti===void 0?void 0:_config$statistic6$ti.offsetX)||0},{key:'offsetY',type:'number-input',label:'y偏移',value:((_config$statistic7=config.statistic)===null||_config$statistic7===void 0?void 0:(_config$statistic7$ti=_config$statistic7.title)===null||_config$statistic7$ti===void 0?void 0:_config$statistic7$ti.offsetY)||0}]}]}]},{key:'statistic',type:'accordion',label:'内容',children:[{key:'content',type:'grid',config:{columns:2},children:[{id:'contentSwitch',key:'contentSwitch',type:'switch',label:'开启',value:!!((_config$statistic8=config.statistic)!==null&&_config$statistic8!==void 0&&_config$statistic8.content)},{rules:"{contentSwitch} === 'true'",children:[{key:'content',type:'input',label:'内容',value:(_config$statistic9=config.statistic)===null||_config$statistic9===void 0?void 0:(_config$statistic9$co=_config$statistic9.content)===null||_config$statistic9$co===void 0?void 0:_config$statistic9$co.content},{key:'style',children:[{key:'fontSize',type:'number-input',label:'字号',value:parseInt(((_config$statistic10=config.statistic)===null||_config$statistic10===void 0?void 0:(_config$statistic10$c=_config$statistic10.content)===null||_config$statistic10$c===void 0?void 0:(_config$statistic10$c2=_config$statistic10$c.style)===null||_config$statistic10$c2===void 0?void 0:_config$statistic10$c2.fontSize)+''),config:{min:0,max:100}},{key:'fontWeight',type:'number-input',label:'加粗',value:((_config$statistic11=config.statistic)===null||_config$statistic11===void 0?void 0:(_config$statistic11$c=_config$statistic11.content)===null||_config$statistic11$c===void 0?void 0:(_config$statistic11$c2=_config$statistic11$c.style)===null||_config$statistic11$c2===void 0?void 0:_config$statistic11$c2.fontWeight)||500,config:{min:100,max:900,step:100}},{key:'color',type:'color-picker',label:'颜色',value:(_config$statistic12=config.statistic)===null||_config$statistic12===void 0?void 0:(_config$statistic12$c=_config$statistic12.content)===null||_config$statistic12$c===void 0?void 0:(_config$statistic12$c2=_config$statistic12$c.style)===null||_config$statistic12$c2===void 0?void 0:_config$statistic12$c2.color,config:{showText:true}}]},{key:'offsetX',type:'number-input',label:'x偏移',value:((_config$statistic13=config.statistic)===null||_config$statistic13===void 0?void 0:(_config$statistic13$c=_config$statistic13.content)===null||_config$statistic13$c===void 0?void 0:_config$statistic13$c.offsetX)||0},{key:'offsetY',type:'number-input',label:'y偏移',value:((_config$statistic14=config.statistic)===null||_config$statistic14===void 0?void 0:(_config$statistic14$c=_config$statistic14.content)===null||_config$statistic14$c===void 0?void 0:_config$statistic14$c.offsetY)||0}]}]}]},{type:'accordion',label:'标签',children:[{key:'label',type:'grid',config:{columns:2},children:[{key:'type',type:'select',label:'位置',value:((_config$label=config.label)===null||_config$label===void 0?void 0:_config$label.type)||'inner',config:{options:[{value:'inner',label:'内测'},{value:'outer',label:'外侧'}]}},{key:'offset',type:'number-input',label:'偏移',value:((_config$label2=config.label)===null||_config$label2===void 0?void 0:_config$label2.offset)||0,config:{min:0,max:100}},{key:'style',children:[{key:'fontSize',type:'number-input',label:'字号',value:parseInt(((_config$label3=config.label)===null||_config$label3===void 0?void 0:(_config$label3$style=_config$label3.style)===null||_config$label3$style===void 0?void 0:_config$label3$style.fontSize)+''),config:{min:0,max:100}},{key:'fontWeight',type:'number-input',label:'加粗',value:((_config$label4=config.label)===null||_config$label4===void 0?void 0:(_config$label4$style=_config$label4.style)===null||_config$label4$style===void 0?void 0:_config$label4$style.fontWeight)||500,config:{min:100,max:900,step:100}},{key:'fill',type:'color-picker',label:'颜色',value:(_config$label5=config.label)===null||_config$label5===void 0?void 0:(_config$label5$style=_config$label5.style)===null||_config$label5$style===void 0?void 0:_config$label5$style.fill,config:{showText:true}}]},{key:'autoRotate',type:'switch',label:'自动旋转',reRender:true,value:(_config$label6=config.label)===null||_config$label6===void 0?void 0:_config$label6.autoRotate},{id:'labelRotate',key:'rotate',type:'number-input',label:'旋转角度',rules:"{autoRotate} === 'false'",value:((_config$label7=config.label)===null||_config$label7===void 0?void 0:_config$label7.rotate)||0,config:{min:0,max:2,step:0.01}}]}]}]};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_json_schema_LCGUI__WEBPACK_IMPORTED_MODULE_1__.LCGUI,{schema:schema,onFieldChange:onFieldChange});};const AntdPieFieldMapping=_ref=>{var _controller$config;let{controller}=_ref;const config=(_controller$config=controller.config)===null||_controller$config===void 0?void 0:_controller$config.style;const options=_antd_common_AntdCommonUtil__WEBPACK_IMPORTED_MODULE_5__["default"].getDataFieldOptions(controller);const schema={type:'grid',key:'style',config:{columns:2},children:[{type:'select',key:'angleField',label:'角度字段',value:config===null||config===void 0?void 0:config.angleField,config:{options}},{type:'select',key:'colorField',label:'颜色字段',value:config===null||config===void 0?void 0:config.colorField,config:{options}}]};const onFieldChange=fieldChangeData=>{controller.update(fieldChangeData.dataFragment);};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_json_schema_LCGUI__WEBPACK_IMPORTED_MODULE_1__.LCGUI,{schema:schema,onFieldChange:onFieldChange});};

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