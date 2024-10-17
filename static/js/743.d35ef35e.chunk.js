"use strict";
(self["webpackChunknews"] = self["webpackChunknews"] || []).push([[743,7380,900,3902,7598],{

/***/ 7380:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AntdCommonUtil)
/* harmony export */ });
class AntdCommonUtil{static getDataFieldOptions(controller){var _config$data;const config=controller.getConfig();const data=config===null||config===void 0?void 0:(_config$data=config.data)===null||_config$data===void 0?void 0:_config$data.staticData;const options=[];if(data&&data.length>=1){const dataObj=data[0];Object.keys(dataObj).forEach(key=>options.push({label:key,value:key}));}return options;}}

/***/ }),

/***/ 30900:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AntdCartesianCoordinateSys: () => (/* binding */ AntdCartesianCoordinateSys)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37995);
/* harmony import */ var _axis_AxisConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53902);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12955);
const AntdCartesianCoordinateSys=_ref=>{let{config,onChange}=_ref;const xAxisChange=data=>{onChange({xAxis:data});};const yAxisChange=data=>{onChange({yAxis:data});};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_axis_AxisConfig__WEBPACK_IMPORTED_MODULE_1__["default"],{title:'X轴',config:config===null||config===void 0?void 0:config.xAxis,onChange:xAxisChange}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_axis_AxisConfig__WEBPACK_IMPORTED_MODULE_1__["default"],{title:'Y轴',config:config===null||config===void 0?void 0:config.yAxis,onChange:yAxisChange})]});};

/***/ }),

/***/ 53902:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AxisGridLine: () => (/* binding */ AxisGridLine),
/* harmony export */   AxisLine: () => (/* binding */ AxisLine),
/* harmony export */   AxisSubTickLine: () => (/* binding */ AxisSubTickLine),
/* harmony export */   AxisText: () => (/* binding */ AxisText),
/* harmony export */   AxisTickLine: () => (/* binding */ AxisTickLine),
/* harmony export */   AxisTitle: () => (/* binding */ AxisTitle),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37995);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33576);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _json_schema_LCGUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40058);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12955);
const Accordion=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(()=>__webpack_require__.e(/* import() */ 403).then(__webpack_require__.bind(__webpack_require__, 403)));const Radio=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 95470)));/**
 * 轴线配置项
 */class AxisConfig extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(props){super(props);this.defaultData={label:{style:{fill:"#00FFEAFF"}},line:{style:{stroke:"#00dbffff",lineWidth:1}}};this.oldData=undefined;this.emptyData={grid:null,line:null,title:null,label:null,tickLine:null,subTickLine:null};this.oldData={...(props===null||props===void 0?void 0:props.config)}||null;}render(){const{config,title='坐标轴',onChange}=this.props;const{grid,line,label,title:_title,tickLine,subTickLine}=config||{};const enable=!!(grid||line||label||_title||tickLine||subTickLine);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(Accordion,{label:title,showSwitch:true,defaultValue:enable,onChange:value=>{onChange(value?(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEqual)(this.oldData,this.emptyData)?this.defaultData:this.oldData:this.emptyData);},children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Radio,{label:'位置',defaultValue:(config===null||config===void 0?void 0:config.position)||'right',containerStyle:{marginBottom:10},onChange:value=>onChange({position:value}),options:[{label:'上',value:'top'},{label:'下',value:'bottom'},{label:'左',value:'left'},{label:'右',value:'right'}]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(AxisText,{config:config===null||config===void 0?void 0:config.label,onChange:data=>onChange({label:data})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(AxisTitle,{config:config===null||config===void 0?void 0:config.title,onChange:data=>onChange({title:data})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(AxisLine,{config:config===null||config===void 0?void 0:config.line,onChange:data=>onChange({line:data})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(AxisGridLine,{config:config===null||config===void 0?void 0:config.grid,onChange:data=>onChange({grid:data})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(AxisTickLine,{config:config===null||config===void 0?void 0:config.tickLine,onChange:data=>onChange({tickLine:data})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(AxisSubTickLine,{config:config===null||config===void 0?void 0:config.subTickLine,onChange:data=>onChange({subTickLine:data})})]});}}const AxisSubTickLine=_ref=>{var _config$style,_config$style2;let{config,onChange}=_ref;const[_config,setConfig]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(config);const onFieldChange=fieldChangeData=>{const{id,data}=fieldChangeData;if(id==='subTickLineSwitch'){//处理开关
if(data){const defaultConfig={count:5,length:1,style:{stroke:'#6e6e6e',lineWidth:1}};onChange(defaultConfig);setConfig(defaultConfig);}else{onChange(null);setConfig(null);}}else{onChange(fieldChangeData.dataFragment);}};const schema={type:'card-panel',label:'子刻度',children:[{type:'grid',config:{columns:2},children:[{key:'subTickLineSwitch',id:'subTickLineSwitch',type:'switch',label:'开启',value:!!_config},{rules:"{subTickLineSwitch}==='true'",key:'count',type:'number-input',label:'数量',value:_config===null||_config===void 0?void 0:_config.count,config:{min:0,max:100}},{rules:"{subTickLineSwitch}==='true'",key:'length',type:'number-input',label:'长度',value:_config===null||_config===void 0?void 0:_config.length,config:{min:0,max:10}},{rules:"{subTickLineSwitch}==='true'",key:'style',children:[{key:'lineWidth',type:'number-input',label:'宽度',value:_config===null||_config===void 0?void 0:(_config$style=_config.style)===null||_config$style===void 0?void 0:_config$style.lineWidth,config:{min:0,max:10}},{key:'stroke',type:'color-picker',label:'颜色',value:_config===null||_config===void 0?void 0:(_config$style2=_config.style)===null||_config$style2===void 0?void 0:_config$style2.stroke,config:{showText:true}}]}]}]};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_json_schema_LCGUI__WEBPACK_IMPORTED_MODULE_2__.LCGUI,{schema:schema,onFieldChange:onFieldChange});};const AxisTickLine=_ref2=>{var _config$style3,_config$style4;let{config,onChange}=_ref2;const[_config,setConfig]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(config);const onFieldChange=fieldChangeData=>{const{id,data}=fieldChangeData;if(id==='tickLineSwitch'){//处理开关
if(data){const defaultConfig={alignTick:true,length:1,style:{stroke:'#6e6e6e',lineWidth:1}};onChange(defaultConfig);setConfig(defaultConfig);}else{onChange(null);setConfig(null);}}else{onChange(fieldChangeData.dataFragment);}};const schema={type:'card-panel',label:'刻度线',children:[{type:'grid',config:{columns:2},children:[{key:'tickLineSwitch',id:'tickLineSwitch',type:'switch',label:'开启',value:!!_config},{key:'alignTick',rules:"{tickLineSwitch}==='true'",type:'switch',label:'对齐',value:_config===null||_config===void 0?void 0:_config.alignTick},{key:'length',rules:"{tickLineSwitch}==='true'",type:'number-input',label:'长度',value:_config===null||_config===void 0?void 0:_config.length,config:{min:0,max:10}},{key:'style',rules:"{tickLineSwitch}==='true'",children:[{key:'lineWidth',type:'number-input',label:'宽度',value:_config===null||_config===void 0?void 0:(_config$style3=_config.style)===null||_config$style3===void 0?void 0:_config$style3.lineWidth,config:{min:0,max:10}},{key:'stroke',type:'color-picker',label:'颜色',value:_config===null||_config===void 0?void 0:(_config$style4=_config.style)===null||_config$style4===void 0?void 0:_config$style4.stroke,config:{showText:true}}]}]}]};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_json_schema_LCGUI__WEBPACK_IMPORTED_MODULE_2__.LCGUI,{schema:schema,onFieldChange:onFieldChange});};const AxisGridLine=_ref3=>{var _config$line,_config$line$style,_config$line2,_config$line2$style;let{config,onChange}=_ref3;const[_config,setConfig]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(config);const onFieldChange=fieldChangeData=>{const{id,data}=fieldChangeData;if(id==='gridLineSwitch'){//处理开关
if(data){const defaultConfig={alignTick:true,line:{style:{stroke:'#5c5c5c',lineWidth:1},type:'line'}};onChange(defaultConfig);setConfig(defaultConfig);}else{onChange(null);setConfig(null);}}else{onChange(fieldChangeData.dataFragment);}};const schema={type:'card-panel',label:'网格线',children:[{type:'grid',config:{columns:2},children:[{key:'gridLineSwitch',id:'gridLineSwitch',type:'switch',label:'开启',value:!!_config},{rules:"{gridLineSwitch} === 'true'",key:'alignTick',type:'switch',label:'对齐',value:_config===null||_config===void 0?void 0:_config.alignTick},{rules:"{gridLineSwitch} === 'true'",key:'line',children:[{key:'style',children:[{key:'lineWidth',type:'number-input',label:'宽度',value:_config===null||_config===void 0?void 0:(_config$line=_config.line)===null||_config$line===void 0?void 0:(_config$line$style=_config$line.style)===null||_config$line$style===void 0?void 0:_config$line$style.lineWidth,config:{min:0,max:10}},{key:'stroke',type:'color-picker',label:'颜色',value:_config===null||_config===void 0?void 0:(_config$line2=_config.line)===null||_config$line2===void 0?void 0:(_config$line2$style=_config$line2.style)===null||_config$line2$style===void 0?void 0:_config$line2$style.stroke,config:{showText:true}}]}]}]}]};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_json_schema_LCGUI__WEBPACK_IMPORTED_MODULE_2__.LCGUI,{schema:schema,onFieldChange:onFieldChange});};const AxisLine=_ref4=>{var _config$style5,_config$style6;let{config,onChange}=_ref4;const[_config,setConfig]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(config);const onFieldChange=fieldChangeData=>{const{id,data}=fieldChangeData;if(id==='lineSwitch'){//处理开关
if(data){onChange({style:{stroke:'#595959',lineWidth:1}});setConfig({style:{stroke:'#595959',lineWidth:1}});}else{onChange(null);setConfig(null);}}else{onChange(fieldChangeData.dataFragment);}};const schema={type:'card-panel',label:'轴线',children:[{type:'grid',config:{columns:2},children:[{key:'lineSwitch',id:'lineSwitch',type:'switch',label:'开启',value:!!_config},{key:'style',rules:"{lineSwitch} === 'true'",children:[{key:'lineWidth',type:'number-input',label:'宽度',value:(_config===null||_config===void 0?void 0:(_config$style5=_config.style)===null||_config$style5===void 0?void 0:_config$style5.lineWidth)||1,config:{min:0,max:10}},{key:'stroke',type:'color-picker',label:'颜色',value:(_config===null||_config===void 0?void 0:(_config$style6=_config.style)===null||_config$style6===void 0?void 0:_config$style6.stroke)||'#595959',config:{showText:true}}]}]}]};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_json_schema_LCGUI__WEBPACK_IMPORTED_MODULE_2__.LCGUI,{schema:schema,onFieldChange:onFieldChange});};const AxisTitle=_ref5=>{let{config,onChange}=_ref5;const[_config,setConfig]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(config);const onFieldChange=fieldChangeData=>{const{id,data}=fieldChangeData;if(id==='titleSwitch'){//处理开关
if(data){onChange({text:'标题',offset:0,style:{fill:'#d2d2d2',fontSize:12}});setConfig({text:'标题',offset:0,style:{fill:'#d2d2d2',fontSize:12}});}else{onChange(null);setConfig(null);}}else{onChange(fieldChangeData.dataFragment);}};const schema={type:'card-panel',label:'标题',children:[{type:'grid',config:{columns:2},children:[{key:'titleSwitch',id:'titleSwitch',type:'switch',label:'开启',reRender:true,value:!!_config},{rules:"{titleSwitch} === 'true'",children:[{key:'position',type:'select',label:'位置',value:(_config===null||_config===void 0?void 0:_config.position)||'center',config:{options:[{value:'start',label:'前'},{value:'center',label:'中'},{value:'end',label:'后'}]}},{key:'text',type:'input',label:'内容',value:(_config===null||_config===void 0?void 0:_config.text)||'标题'},{key:'offset',type:'number-input',label:'偏移',value:(_config===null||_config===void 0?void 0:_config.offset)||0},{key:'style',children:[{key:'fontSize',type:'number-input',label:'字号',value:12,config:{min:1,max:50}},{key:'fill',type:'color-picker',label:'颜色',value:'#1c1c1c',config:{showText:true}}]}]}]}]};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_json_schema_LCGUI__WEBPACK_IMPORTED_MODULE_2__.LCGUI,{schema:schema,onFieldChange:onFieldChange});};const AxisText=_ref6=>{let{config,onChange}=_ref6;const{offset,style,rotate}=config||{};const onFieldChange=fieldChangeData=>{onChange(fieldChangeData.dataFragment);};const schema={type:'card-panel',label:'文本',children:[{type:'grid',config:{columns:2},children:[{key:'rotate',type:'number-input',label:'角度',value:rotate||0,config:{min:0,step:0.1,max:360}},{key:'offset',type:'number-input',label:'偏移',value:offset||0},{key:'style',children:[{key:'fontSize',type:'number-input',label:'字号',value:(style===null||style===void 0?void 0:style.fontSize)||12,config:{min:1,max:50}},{key:'fill',type:'color-picker',label:'颜色',value:(style===null||style===void 0?void 0:style.fill)||'#1c1c1c',config:{showText:true}}]}]}]};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_json_schema_LCGUI__WEBPACK_IMPORTED_MODULE_2__.LCGUI,{schema:schema,onFieldChange:onFieldChange});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AxisConfig);

/***/ }),

/***/ 97598:
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
;// ./src/pages/Charts/comps/antd-common/config/legend/Legend.less

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Legend["default"], options);




       /* harmony default export */ const legend_Legend = (Legend["default"] && Legend["default"].locals ? Legend["default"].locals : undefined);

// EXTERNAL MODULE: ./src/pages/Charts/json-schema/LCGUI.tsx
var LCGUI = __webpack_require__(40058);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(12955);
;// ./src/pages/Charts/comps/antd-common/config/legend/AntdLegend.tsx
const AntdLegend=props=>{const{controller}=props;const{legend}=controller.getConfig().style;const onFieldChange=fieldChangeData=>{const{id,data,dataFragment}=fieldChangeData;if(id==='legendSwitch'){if(data)controller.update({style:{legend}});else controller.update({style:{legend:false}});}else{controller.update(dataFragment);}};const schema={key:'style',id:'legendSwitch',type:'accordion',label:'图例',config:{showSwitch:true},value:!!legend,children:[{key:'legend',type:'grid',config:{columns:2},children:[{key:'position',type:'select',label:'位置',value:'left-top',config:{options:[{value:'left-top',label:'左上'},{value:'left',label:'正左'},{value:'left-bottom',label:'左下'},{value:'top-left',label:'上左'},{value:'top',label:'正上'},{value:'top-right',label:'上右'},{value:'right-top',label:'右上'},{value:'right',label:'正右'},{value:'right-bottom',label:'右下'},{value:'bottom-left',label:'下左'},{value:'bottom',label:'正下'},{value:'bottom-right',label:'下右'}]}},{key:'layout',type:'select',label:'方向',value:'horizontal',config:{options:[{value:'horizontal',label:'水平'},{value:'vertical',label:'垂直'}]}},{key:'itemName',children:[{key:'style',children:[{key:'fontSize',type:'number-input',label:'字号',value:12,config:{min:0,max:100}},{key:'fill',type:'color-picker',label:'颜色',value:'#1c1c1c',config:{showText:true}}]}]}]}]};return/*#__PURE__*/(0,jsx_runtime.jsx)(LCGUI.LCGUI,{schema:schema,onFieldChange:onFieldChange});};

/***/ }),

/***/ 20743:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AntdCommonScatterGraphics: () => (/* binding */ AntdCommonScatterGraphics),
/* harmony export */   AntdScatterCommonStyleConfig: () => (/* binding */ AntdScatterCommonStyleConfig),
/* harmony export */   AntdScatterFieldMapping: () => (/* binding */ AntdScatterFieldMapping)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37995);
/* harmony import */ var _config_AntdFragment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30900);
/* harmony import */ var _json_schema_LCGUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40058);
/* harmony import */ var _AntdCommonUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7380);
/* harmony import */ var _config_legend_AntdLegend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97598);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12955);
class AntdScatterCommonStyleConfig extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments);this.scatterCoordinateSysChange=config=>{const controller=this.props.controller;controller.update({style:config});};this.scatterGraphicsChange=config=>{const controller=this.props.controller;controller.update({style:config});};}render(){const{controller}=this.props;const config=controller.getConfig().style;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(AntdCommonScatterGraphics,{config:config,onChange:this.scatterGraphicsChange}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_config_legend_AntdLegend__WEBPACK_IMPORTED_MODULE_3__.AntdLegend,{controller:controller}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_config_AntdFragment__WEBPACK_IMPORTED_MODULE_1__.AntdCartesianCoordinateSys,{onChange:this.scatterCoordinateSysChange,config:config})]});}}const AntdCommonScatterGraphics=_ref=>{var _config$pointStyle,_config$pointStyle2;let{config,onChange}=_ref;const onFieldChange=fieldChangeData=>{onChange(fieldChangeData.dataFragment);};const schema={type:'accordion',label:'图形',children:[{type:'grid',config:{columns:2},children:[{key:'size',type:'number-input',label:'尺寸',value:config===null||config===void 0?void 0:config.size,config:{min:0,max:100}},{key:'shape',type:'select',label:'形状',value:config===null||config===void 0?void 0:config.shape,config:{options:[{value:'circle',label:'圈形'},{value:'square',label:'方形'},{value:'bowtie',label:'领结'},{value:'diamond',label:'钻石'},{value:'hexagon',label:'六角形'},{value:'triangle',label:'三角形'}]}},{key:'pointStyle',children:[{key:'lineWidth',type:'number-input',label:'线宽',value:config===null||config===void 0?void 0:(_config$pointStyle=config.pointStyle)===null||_config$pointStyle===void 0?void 0:_config$pointStyle.lineWidth,config:{min:0,max:10}},{key:'stroke',type:'color-picker',label:'描边色',value:config===null||config===void 0?void 0:(_config$pointStyle2=config.pointStyle)===null||_config$pointStyle2===void 0?void 0:_config$pointStyle2.stroke,config:{showText:true}}]},{key:'color',type:'color-mode',label:'颜色',value:config===null||config===void 0?void 0:config.color,config:{containerStyle:{gridColumn:'1 / 3'}}}]}]};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_json_schema_LCGUI__WEBPACK_IMPORTED_MODULE_2__.LCGUI,{schema:schema,onFieldChange:onFieldChange});};const AntdScatterFieldMapping=_ref2=>{var _controller$getConfig;let{controller}=_ref2;const config=(_controller$getConfig=controller.getConfig())===null||_controller$getConfig===void 0?void 0:_controller$getConfig.style;const options=_AntdCommonUtil__WEBPACK_IMPORTED_MODULE_5__["default"].getDataFieldOptions(controller);const schema={type:'grid',key:'style',config:{columns:2},children:[{key:'xField',type:'select',label:'X字段',value:config===null||config===void 0?void 0:config.xField,config:{options}},{key:'colorField',type:'select',label:'颜色字段',value:config===null||config===void 0?void 0:config.colorField,config:{options}},{key:'yField',type:'select',label:'Y字段',value:config===null||config===void 0?void 0:config.yField,config:{options}},{key:'sizeField',type:'select',label:'尺寸字段',value:config===null||config===void 0?void 0:config.sizeField,config:{options}}]};const onFieldChange=fieldChangeData=>{controller.update(fieldChangeData.dataFragment);};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_json_schema_LCGUI__WEBPACK_IMPORTED_MODULE_2__.LCGUI,{schema:schema,onFieldChange:onFieldChange});};

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

/***/ 63:
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


/***/ })

}]);