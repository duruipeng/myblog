"use strict";
(self["webpackChunknews"] = self["webpackChunknews"] || []).push([[1092,9469,197,6466,5207],{

/***/ 39469:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AntdBaseDesignerController: () => (/* binding */ AntdBaseDesignerController)
/* harmony export */ });
/* harmony import */ var _framework_core_AbstractDesignerController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56571);
/* harmony import */ var _utils_ObjectUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69946);
/* harmony import */ var _designer_blueprint_core_BPExecutor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17498);
class AntdBaseDesignerController extends _framework_core_AbstractDesignerController__WEBPACK_IMPORTED_MODULE_0__["default"]{constructor(){super(...arguments);this.interval=null;//上一次数据连接状态 true：成功 false：失败
this.lastReqState=true;//是否为断开后重新连接
this.reConnect=false;}changeData(data){var _this$config,_this$config$style,_this$instance;if((_this$config=this.config)!==null&&_this$config!==void 0&&(_this$config$style=_this$config.style)!==null&&_this$config$style!==void 0&&_this$config$style.data)this.config.style.data=data;(_this$instance=this.instance)===null||_this$instance===void 0?void 0:_this$instance.changeData(data);}registerEvent(){var _this$config2,_this$config2$base,_this$instance2,_this$instance3,_this$instance4,_this$instance5,_this$instance6;const nodeId=(_this$config2=this.config)===null||_this$config2===void 0?void 0:(_this$config2$base=_this$config2.base)===null||_this$config2$base===void 0?void 0:_this$config2$base.id;(_this$instance2=this.instance)===null||_this$instance2===void 0?void 0:_this$instance2.on('plot:click',function(){_designer_blueprint_core_BPExecutor__WEBPACK_IMPORTED_MODULE_1__["default"].triggerComponentEvent(nodeId,"globalClick",{msg:'这是测试参数'});});(_this$instance3=this.instance)===null||_this$instance3===void 0?void 0:_this$instance3.on('element:click',function(){_designer_blueprint_core_BPExecutor__WEBPACK_IMPORTED_MODULE_1__["default"].triggerComponentEvent(nodeId,"elementClick",{msg:'这是测试参数'});});// 图例添加点击事件
(_this$instance4=this.instance)===null||_this$instance4===void 0?void 0:_this$instance4.on('legend-item:click',function(){_designer_blueprint_core_BPExecutor__WEBPACK_IMPORTED_MODULE_1__["default"].triggerComponentEvent(nodeId,"legendClick",{msg:'这是测试参数'});});// 图例名称添加点击事件
(_this$instance5=this.instance)===null||_this$instance5===void 0?void 0:_this$instance5.on('legend-item-name:click',function(){_designer_blueprint_core_BPExecutor__WEBPACK_IMPORTED_MODULE_1__["default"].triggerComponentEvent(nodeId,"elementNameClick",{msg:'这是测试参数'});});// axis-label 添加点击事件
(_this$instance6=this.instance)===null||_this$instance6===void 0?void 0:_this$instance6.on('axis-label:click',function(){_designer_blueprint_core_BPExecutor__WEBPACK_IMPORTED_MODULE_1__["default"].triggerComponentEvent(nodeId,"axisLabelClick",{msg:'这是测试参数'});});}commonCreate(container,Clazz,config){var _this$config3,_this$instance7;this.config=config;this.container=container;this.instance=new Clazz(container,(_this$config3=this.config)===null||_this$config3===void 0?void 0:_this$config3.style);(_this$instance7=this.instance)===null||_this$instance7===void 0?void 0:_this$instance7.render();this.registerEvent();}commonUpdate(config,Clazz,upOp){var _this$instance8,_this$config4;this.config=_utils_ObjectUtil__WEBPACK_IMPORTED_MODULE_2__["default"].merge(this.config,config);upOp=upOp||{reRender:true};if(upOp.reRender)(_this$instance8=this.instance)===null||_this$instance8===void 0?void 0:_this$instance8.update((_this$config4=this.config)===null||_this$config4===void 0?void 0:_this$config4.style);}}

/***/ }),

/***/ 10197:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AntdCommonDefinition: () => (/* binding */ AntdCommonDefinition)
/* harmony export */ });
/* harmony import */ var _framework_core_AbstractDefinition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41159);
class AntdCommonDefinition extends _framework_core_AbstractDefinition__WEBPACK_IMPORTED_MODULE_0__.AbstractDefinition{getEventList(){const eventList=super.getEventList();eventList.push(...[{id:"dataChange",name:"数据变更时"},{id:"globalClick",name:"点击整个组件时"},{id:"elementClick",name:"点击图形元素时"},{id:"legendClick",name:"点击图例时"},{id:"elementNameClick",name:"点击图例名称时"},{id:"axisLabelClick",name:"点击坐标文字时"}]);return eventList;}getActionList(){return super.getActionList();}}

/***/ }),

/***/ 26466:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37995);
/* harmony import */ var _designer_right_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62718);
/* harmony import */ var _AntdCommonColumnController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35207);
/* harmony import */ var _AntdCommonDefinition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10197);
const AnimationConfig=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 62).then(__webpack_require__.bind(__webpack_require__, 80062)));const AntdColumnCommonStyleConfig=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 3419).then(__webpack_require__.bind(__webpack_require__, 33419)).then(module=>({default:module.AntdColumnCommonStyleConfig})));const AntdColumnCommonFieldMapping=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 3419).then(__webpack_require__.bind(__webpack_require__, 33419)).then(module=>({default:module.AntdColumnCommonFieldMapping})));const ThemeConfig=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 8458).then(__webpack_require__.bind(__webpack_require__, 28458)));const BaseInfo=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 6676).then(__webpack_require__.bind(__webpack_require__, 76676)));const DataConfig=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 3439).then(__webpack_require__.bind(__webpack_require__, 13439)));class AbstractColumnDefinition extends _AntdCommonDefinition__WEBPACK_IMPORTED_MODULE_2__.AntdCommonDefinition{getController(){return _AntdCommonColumnController__WEBPACK_IMPORTED_MODULE_1__["default"];}getMenuList(){return (0,_designer_right_util__WEBPACK_IMPORTED_MODULE_3__.getDefaultMenuList)();}getMenuToConfigContentMap(){return{base:BaseInfo,data:DataConfig,style:AntdColumnCommonStyleConfig,animation:AnimationConfig,theme:ThemeConfig,mapping:AntdColumnCommonFieldMapping};}}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AbstractColumnDefinition);

/***/ }),

/***/ 35207:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AntdCommonColumnController)
/* harmony export */ });
/* harmony import */ var _antv_g2plot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32467);
/* harmony import */ var _AntdBaseDesignerController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39469);
class AntdCommonColumnController extends _AntdBaseDesignerController__WEBPACK_IMPORTED_MODULE_1__.AntdBaseDesignerController{async create(container,config){super.commonCreate(container,_antv_g2plot__WEBPACK_IMPORTED_MODULE_0__.Column,config);}destroy(){this.instance.destroy();this.instance=null;this.config=null;this.interval&&clearInterval(this.interval);}getConfig(){return this.config;}update(config,upOp){super.commonUpdate(config,_antv_g2plot__WEBPACK_IMPORTED_MODULE_0__.Column,upOp);}updateTheme(newTheme){var _this$config,_styleConfig$legend$i,_styleConfig$xAxis,_styleConfig$xAxis$la,_styleConfig$xAxis$la2,_styleConfig$xAxis2,_styleConfig$xAxis3,_styleConfig$xAxis3$l,_styleConfig$xAxis4,_styleConfig$xAxis4$g,_styleConfig$xAxis4$g2,_styleConfig$xAxis5,_styleConfig$xAxis5$t,_styleConfig$xAxis6,_styleConfig$xAxis6$s,_styleConfig$yAxis,_styleConfig$yAxis$la,_styleConfig$yAxis2,_styleConfig$yAxis3,_styleConfig$yAxis3$l,_styleConfig$yAxis4,_styleConfig$yAxis4$g,_styleConfig$yAxis4$g2,_styleConfig$yAxis5,_styleConfig$yAxis5$t,_styleConfig$yAxis6,_styleConfig$yAxis6$s;if(!newTheme)return;const styleConfig=(_this$config=this.config)===null||_this$config===void 0?void 0:_this$config.style;const{colors:{main,mainText,supplementSecond,supplementFirst,/*background,*/subText}}=newTheme;//图形
if(styleConfig!==null&&styleConfig!==void 0&&styleConfig.color){styleConfig.columnStyle={fill:undefined};styleConfig.color=[main,supplementFirst,supplementSecond];}//图例
if(styleConfig.legend&&(_styleConfig$legend$i=styleConfig.legend.itemName)!==null&&_styleConfig$legend$i!==void 0&&_styleConfig$legend$i.style)styleConfig.legend.itemName.style.fill=mainText;//x轴-文本
if(styleConfig!==null&&styleConfig!==void 0&&styleConfig.xAxis&&styleConfig!==null&&styleConfig!==void 0&&(_styleConfig$xAxis=styleConfig.xAxis)!==null&&_styleConfig$xAxis!==void 0&&(_styleConfig$xAxis$la=_styleConfig$xAxis.label)!==null&&_styleConfig$xAxis$la!==void 0&&(_styleConfig$xAxis$la2=_styleConfig$xAxis$la.style)!==null&&_styleConfig$xAxis$la2!==void 0&&_styleConfig$xAxis$la2.fill)styleConfig.xAxis.label.style.fill=subText;//x轴-标题
if(styleConfig!==null&&styleConfig!==void 0&&styleConfig.xAxis&&styleConfig!==null&&styleConfig!==void 0&&(_styleConfig$xAxis2=styleConfig.xAxis)!==null&&_styleConfig$xAxis2!==void 0&&_styleConfig$xAxis2.title)styleConfig.xAxis.title.style.fill=mainText;//x轴-轴线
if(styleConfig!==null&&styleConfig!==void 0&&styleConfig.xAxis&&styleConfig!==null&&styleConfig!==void 0&&(_styleConfig$xAxis3=styleConfig.xAxis)!==null&&_styleConfig$xAxis3!==void 0&&(_styleConfig$xAxis3$l=_styleConfig$xAxis3.line)!==null&&_styleConfig$xAxis3$l!==void 0&&_styleConfig$xAxis3$l.style)styleConfig.xAxis.line.style.stroke=supplementFirst;//x轴-网格线
if(styleConfig!==null&&styleConfig!==void 0&&styleConfig.xAxis&&styleConfig!==null&&styleConfig!==void 0&&(_styleConfig$xAxis4=styleConfig.xAxis)!==null&&_styleConfig$xAxis4!==void 0&&(_styleConfig$xAxis4$g=_styleConfig$xAxis4.grid)!==null&&_styleConfig$xAxis4$g!==void 0&&(_styleConfig$xAxis4$g2=_styleConfig$xAxis4$g.line)!==null&&_styleConfig$xAxis4$g2!==void 0&&_styleConfig$xAxis4$g2.style)styleConfig.xAxis.grid.line.style.stroke=supplementFirst;//x轴-刻度线
if(styleConfig!==null&&styleConfig!==void 0&&styleConfig.xAxis&&styleConfig!==null&&styleConfig!==void 0&&(_styleConfig$xAxis5=styleConfig.xAxis)!==null&&_styleConfig$xAxis5!==void 0&&(_styleConfig$xAxis5$t=_styleConfig$xAxis5.tickLine)!==null&&_styleConfig$xAxis5$t!==void 0&&_styleConfig$xAxis5$t.style)styleConfig.xAxis.tickLine.style.stroke=supplementFirst;//x轴-子刻度线
if(styleConfig!==null&&styleConfig!==void 0&&styleConfig.xAxis&&styleConfig!==null&&styleConfig!==void 0&&(_styleConfig$xAxis6=styleConfig.xAxis)!==null&&_styleConfig$xAxis6!==void 0&&(_styleConfig$xAxis6$s=_styleConfig$xAxis6.subTickLine)!==null&&_styleConfig$xAxis6$s!==void 0&&_styleConfig$xAxis6$s.style)styleConfig.xAxis.subTickLine.style.stroke=supplementSecond;//y轴-文本
if(styleConfig!==null&&styleConfig!==void 0&&styleConfig.yAxis&&styleConfig!==null&&styleConfig!==void 0&&(_styleConfig$yAxis=styleConfig.yAxis)!==null&&_styleConfig$yAxis!==void 0&&(_styleConfig$yAxis$la=_styleConfig$yAxis.label)!==null&&_styleConfig$yAxis$la!==void 0&&_styleConfig$yAxis$la.style)styleConfig.yAxis.label.style.fill=mainText;//y轴-标题
if(styleConfig!==null&&styleConfig!==void 0&&styleConfig.yAxis&&styleConfig!==null&&styleConfig!==void 0&&(_styleConfig$yAxis2=styleConfig.yAxis)!==null&&_styleConfig$yAxis2!==void 0&&_styleConfig$yAxis2.title)styleConfig.yAxis.title.style.fill=mainText;//y轴-轴线
if(styleConfig!==null&&styleConfig!==void 0&&styleConfig.yAxis&&styleConfig!==null&&styleConfig!==void 0&&(_styleConfig$yAxis3=styleConfig.yAxis)!==null&&_styleConfig$yAxis3!==void 0&&(_styleConfig$yAxis3$l=_styleConfig$yAxis3.line)!==null&&_styleConfig$yAxis3$l!==void 0&&_styleConfig$yAxis3$l.style)styleConfig.yAxis.line.style.stroke=supplementFirst;//y轴-网格线
if(styleConfig!==null&&styleConfig!==void 0&&styleConfig.yAxis&&styleConfig!==null&&styleConfig!==void 0&&(_styleConfig$yAxis4=styleConfig.yAxis)!==null&&_styleConfig$yAxis4!==void 0&&(_styleConfig$yAxis4$g=_styleConfig$yAxis4.grid)!==null&&_styleConfig$yAxis4$g!==void 0&&(_styleConfig$yAxis4$g2=_styleConfig$yAxis4$g.line)!==null&&_styleConfig$yAxis4$g2!==void 0&&_styleConfig$yAxis4$g2.style)styleConfig.yAxis.grid.line.style.stroke=supplementFirst;//y轴-刻度线
if(styleConfig!==null&&styleConfig!==void 0&&styleConfig.yAxis&&styleConfig!==null&&styleConfig!==void 0&&(_styleConfig$yAxis5=styleConfig.yAxis)!==null&&_styleConfig$yAxis5!==void 0&&(_styleConfig$yAxis5$t=_styleConfig$yAxis5.tickLine)!==null&&_styleConfig$yAxis5$t!==void 0&&_styleConfig$yAxis5$t.style)styleConfig.yAxis.tickLine.style.stroke=supplementFirst;//y轴-子刻度线
if(styleConfig!==null&&styleConfig!==void 0&&styleConfig.yAxis&&styleConfig!==null&&styleConfig!==void 0&&(_styleConfig$yAxis6=styleConfig.yAxis)!==null&&_styleConfig$yAxis6!==void 0&&(_styleConfig$yAxis6$s=_styleConfig$yAxis6.subTickLine)!==null&&_styleConfig$yAxis6$s!==void 0&&_styleConfig$yAxis6$s.style)styleConfig.yAxis.subTickLine.style.stroke=supplementSecond;//重新渲染
this.update({style:styleConfig},{reRender:true});}}

/***/ }),

/***/ 81092:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ column_base_AntdBaseColumnDefinition)
});

;// ./src/pages/Charts/comps/antd/column-base/base-column.png
const base_column_namespaceObject = "data:image/png;base64,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";
// EXTERNAL MODULE: ./src/pages/Charts/comps/antd-common/column/AbstractColumnDefinition.ts
var AbstractColumnDefinition = __webpack_require__(26466);
;// ./src/pages/Charts/comps/antd/column-base/AntdBaseColumnDefinition.ts
class AntdBaseColumnDefinition extends AbstractColumnDefinition["default"]{getBaseInfo(){return{compName:"Antd基础柱状图",compKey:"AntdBaseColumn",categorize:"chart",subCategorize:"column"};}getChartImg(){return base_column_namespaceObject;}getInitConfig(){const data=[{name:"1951 年",value:48},{name:"1952 年",value:52},{name:"1956 年",value:22}];return{base:{id:"",name:'基础条形图',type:'AntdBaseBar'},style:{data:data,xField:"name",yField:"value",seriesField:"name",maxColumnWidth:8,supportCSSTransform:true,color:["#00dbffff"],columnStyle:{fill:undefined,radius:0},xAxis:{grid:null,label:{style:{fill:"#afafafff",fontSize:10}},line:null,tickLine:null,subTickLine:null,position:"left",title:null},yAxis:{grid:null,label:{style:{fill:"#a8a8a8ff",fontSize:10}},line:{style:{stroke:"#9898987a",lineWidth:1}},tickLine:null,subTickLine:null,position:"bottom",title:null},legend:{position:"top",layout:"horizontal",itemName:{style:{fill:"#a6a6a6ff",fontSize:10}}},animation:{appear:{animation:"scale-in-y",duration:3000}}},data:{sourceType:'static',staticData:data}};}}/* harmony default export */ const column_base_AntdBaseColumnDefinition = (AntdBaseColumnDefinition);

/***/ }),

/***/ 62718:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultMenuList: () => (/* binding */ getDefaultMenuList)
/* harmony export */ });
/* harmony import */ var _icon_park_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20470);
/* harmony import */ var _icon_park_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35341);
/* harmony import */ var _icon_park_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94058);
/* harmony import */ var _icon_park_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17564);
/* harmony import */ var _icon_park_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68529);
/* harmony import */ var _icon_park_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(64009);
const getDefaultMenuList=()=>{return[{icon:_icon_park_react__WEBPACK_IMPORTED_MODULE_0__["default"],name:'基础',key:'base'},{icon:_icon_park_react__WEBPACK_IMPORTED_MODULE_1__["default"],name:'样式',key:'style'},{icon:_icon_park_react__WEBPACK_IMPORTED_MODULE_2__["default"],name:'数据',key:'data'},{icon:_icon_park_react__WEBPACK_IMPORTED_MODULE_3__["default"],name:'映射',key:'mapping'},{icon:_icon_park_react__WEBPACK_IMPORTED_MODULE_4__["default"],name:'滤镜',key:'filter'},// {
//     icon: VideoCameraFilled,
//     name: '动画',
//     key: 'animation',
// },
{icon:_icon_park_react__WEBPACK_IMPORTED_MODULE_5__["default"],name:'主题',key:'theme'}];};

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

/***/ 17564:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37995);
/* harmony import */ var _runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70030);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_runtime__WEBPACK_IMPORTED_MODULE_1__.IconWrapper)('deeplink', true, function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    width: props.size,
    height: props.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M21 34.9929C21 35.8067 21 36.471 21 36.9857C21 37.8714 21 39.2 21 40.9714C21 41.5395 20.5772 42 20.0556 42H4.94444C4.42284 42 4 41.5395 4 40.9714V7.02857C4 6.46051 4.42284 6 4.94444 6H20.0556C20.5772 6 21 6.46051 21 7.02857C21 8.8 21 10.1286 21 11.0143C21 11.529 21 12.1933 21 13.0071",
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M27 13.0071C27 12.1933 27 11.529 27 11.0143C27 10.1286 27 8.8 27 7.02857C27 6.46051 27.4228 6 27.9444 6H43.0556C43.5772 6 44 6.46051 44 7.02857V40.9714C44 41.5395 43.5772 42 43.0556 42H27.9444C27.4228 42 27 41.5395 27 40.9714C27 39.2 27 37.8714 27 36.9857C27 36.471 27 35.8067 27 34.9929",
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M12.5 38C13.6046 38 14.5 37.1046 14.5 36C14.5 34.8954 13.6046 34 12.5 34C11.3954 34 10.5 34.8954 10.5 36C10.5 37.1046 11.3954 38 12.5 38Z",
    fill: props.colors[0]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M35.5 38C36.6046 38 37.5 37.1046 37.5 36C37.5 34.8954 36.6046 34 35.5 34C34.3954 34 33.5 34.8954 33.5 36C33.5 37.1046 34.3954 38 35.5 38Z",
    fill: props.colors[0]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M16 23.5H32",
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M27.2231 28.2729L28.8141 26.682L31.9961 23.5L28.8141 20.318L27.2231 18.727",
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap,
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