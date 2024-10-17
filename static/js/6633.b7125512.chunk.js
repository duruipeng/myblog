"use strict";
(self["webpackChunknews"] = self["webpackChunknews"] || []).push([[6633,9469,197,2930,9879],{

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

/***/ 92930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37995);
/* harmony import */ var _designer_right_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62718);
/* harmony import */ var _AntdCommonLineController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59879);
/* harmony import */ var _AntdCommonDefinition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10197);
const AnimationConfig=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 62).then(__webpack_require__.bind(__webpack_require__, 80062)));const AntdLineCommonStyleConfig=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 5867).then(__webpack_require__.bind(__webpack_require__, 65867)).then(module=>({default:module.AntdLineCommonStyleConfig})));const AntdLineCommonFieldMapping=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 5867).then(__webpack_require__.bind(__webpack_require__, 65867)).then(module=>({default:module.AntdLineCommonFieldMapping})));const ThemeConfig=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 8458).then(__webpack_require__.bind(__webpack_require__, 28458)));const BaseInfo=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 6676).then(__webpack_require__.bind(__webpack_require__, 76676)));const DataConfig=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 3439).then(__webpack_require__.bind(__webpack_require__, 13439)));class AbstractLineDefinition extends _AntdCommonDefinition__WEBPACK_IMPORTED_MODULE_2__.AntdCommonDefinition{getController(){return _AntdCommonLineController__WEBPACK_IMPORTED_MODULE_1__["default"];}getMenuList(){return (0,_designer_right_util__WEBPACK_IMPORTED_MODULE_3__.getDefaultMenuList)();}getMenuToConfigContentMap(){return{base:BaseInfo,data:DataConfig,style:AntdLineCommonStyleConfig,animation:AnimationConfig,theme:ThemeConfig,mapping:AntdLineCommonFieldMapping};}}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AbstractLineDefinition);

/***/ }),

/***/ 59879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AntdCommonLineController)
/* harmony export */ });
/* harmony import */ var _antv_g2plot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32467);
/* harmony import */ var _AntdBaseDesignerController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39469);
class AntdCommonLineController extends _AntdBaseDesignerController__WEBPACK_IMPORTED_MODULE_1__.AntdBaseDesignerController{async create(container,config){super.commonCreate(container,_antv_g2plot__WEBPACK_IMPORTED_MODULE_0__.Line,config);}destroy(){this.instance.destroy();this.instance=null;this.config=null;this.interval&&clearInterval(this.interval);}getConfig(){return this.config;}update(config,upOp){super.commonUpdate(config,_antv_g2plot__WEBPACK_IMPORTED_MODULE_0__.Line,upOp);}updateTheme(newTheme){var _this$config,_this$config2,_styleConfig$point,_styleConfig$legend$i,_styleConfig$legend$i2,_styleConfig$xAxis,_styleConfig$xAxis$la,_styleConfig$xAxis$la2,_styleConfig$xAxis2,_styleConfig$xAxis2$t,_styleConfig$xAxis3,_styleConfig$xAxis3$l,_styleConfig$xAxis3$l2,_styleConfig$xAxis4,_styleConfig$xAxis4$g,_styleConfig$xAxis4$g2,_styleConfig$xAxis4$g3,_styleConfig$xAxis5,_styleConfig$xAxis5$t,_styleConfig$xAxis5$t2,_styleConfig$xAxis6,_styleConfig$xAxis6$s,_styleConfig$xAxis6$s2,_styleConfig$yAxis,_styleConfig$yAxis$la,_styleConfig$yAxis$la2,_styleConfig$yAxis2,_styleConfig$yAxis2$t,_styleConfig$yAxis3,_styleConfig$yAxis3$l,_styleConfig$yAxis3$l2,_styleConfig$yAxis4,_styleConfig$yAxis4$g,_styleConfig$yAxis4$g2,_styleConfig$yAxis4$g3,_styleConfig$yAxis5,_styleConfig$yAxis5$t,_styleConfig$yAxis5$t2,_styleConfig$yAxis6,_styleConfig$yAxis6$s,_styleConfig$yAxis6$s2;if(!newTheme)return;const{type}=(_this$config=this.config)===null||_this$config===void 0?void 0:_this$config.base;const styleConfig=(_this$config2=this.config)===null||_this$config2===void 0?void 0:_this$config2.style;const{colors:{main,mainText,supplementSecond,supplementFirst,subText}}=newTheme;//图形
if(styleConfig!==null&&styleConfig!==void 0&&styleConfig.color){if(type==='AntdMultiLine')styleConfig.color=[main,supplementFirst,supplementSecond];else styleConfig.color=main;}//点
if(styleConfig!==null&&styleConfig!==void 0&&styleConfig.point&&styleConfig!==null&&styleConfig!==void 0&&(_styleConfig$point=styleConfig.point)!==null&&_styleConfig$point!==void 0&&_styleConfig$point.style)styleConfig.point.style.fill=undefined;//图例
if(styleConfig.legend&&(_styleConfig$legend$i=styleConfig.legend.itemName)!==null&&_styleConfig$legend$i!==void 0&&(_styleConfig$legend$i2=_styleConfig$legend$i.style)!==null&&_styleConfig$legend$i2!==void 0&&_styleConfig$legend$i2.fill)styleConfig.legend.itemName.style.fill=mainText;//x轴-文本
if(styleConfig!==null&&styleConfig!==void 0&&styleConfig.xAxis&&styleConfig!==null&&styleConfig!==void 0&&(_styleConfig$xAxis=styleConfig.xAxis)!==null&&_styleConfig$xAxis!==void 0&&(_styleConfig$xAxis$la=_styleConfig$xAxis.label)!==null&&_styleConfig$xAxis$la!==void 0&&(_styleConfig$xAxis$la2=_styleConfig$xAxis$la.style)!==null&&_styleConfig$xAxis$la2!==void 0&&_styleConfig$xAxis$la2.fill)styleConfig.xAxis.label.style.fill=mainText;//x轴-标题
if(styleConfig!==null&&styleConfig!==void 0&&styleConfig.xAxis&&styleConfig!==null&&styleConfig!==void 0&&(_styleConfig$xAxis2=styleConfig.xAxis)!==null&&_styleConfig$xAxis2!==void 0&&(_styleConfig$xAxis2$t=_styleConfig$xAxis2.title)!==null&&_styleConfig$xAxis2$t!==void 0&&_styleConfig$xAxis2$t.fill)styleConfig.xAxis.title.style.fill=mainText;//x轴-轴线
if(styleConfig!==null&&styleConfig!==void 0&&styleConfig.xAxis&&styleConfig!==null&&styleConfig!==void 0&&(_styleConfig$xAxis3=styleConfig.xAxis)!==null&&_styleConfig$xAxis3!==void 0&&(_styleConfig$xAxis3$l=_styleConfig$xAxis3.line)!==null&&_styleConfig$xAxis3$l!==void 0&&(_styleConfig$xAxis3$l2=_styleConfig$xAxis3$l.style)!==null&&_styleConfig$xAxis3$l2!==void 0&&_styleConfig$xAxis3$l2.stroke)styleConfig.xAxis.line.style.stroke=supplementSecond;//x轴-网格线
if(styleConfig!==null&&styleConfig!==void 0&&styleConfig.xAxis&&styleConfig!==null&&styleConfig!==void 0&&(_styleConfig$xAxis4=styleConfig.xAxis)!==null&&_styleConfig$xAxis4!==void 0&&(_styleConfig$xAxis4$g=_styleConfig$xAxis4.grid)!==null&&_styleConfig$xAxis4$g!==void 0&&(_styleConfig$xAxis4$g2=_styleConfig$xAxis4$g.line)!==null&&_styleConfig$xAxis4$g2!==void 0&&(_styleConfig$xAxis4$g3=_styleConfig$xAxis4$g2.style)!==null&&_styleConfig$xAxis4$g3!==void 0&&_styleConfig$xAxis4$g3.stroke)styleConfig.xAxis.grid.line.style.stroke=subText;//x轴-刻度线
if(styleConfig!==null&&styleConfig!==void 0&&styleConfig.xAxis&&styleConfig!==null&&styleConfig!==void 0&&(_styleConfig$xAxis5=styleConfig.xAxis)!==null&&_styleConfig$xAxis5!==void 0&&(_styleConfig$xAxis5$t=_styleConfig$xAxis5.tickLine)!==null&&_styleConfig$xAxis5$t!==void 0&&(_styleConfig$xAxis5$t2=_styleConfig$xAxis5$t.style)!==null&&_styleConfig$xAxis5$t2!==void 0&&_styleConfig$xAxis5$t2.stroke)styleConfig.xAxis.tickLine.style.stroke=supplementFirst;//x轴-子刻度线
if(styleConfig!==null&&styleConfig!==void 0&&styleConfig.xAxis&&styleConfig!==null&&styleConfig!==void 0&&(_styleConfig$xAxis6=styleConfig.xAxis)!==null&&_styleConfig$xAxis6!==void 0&&(_styleConfig$xAxis6$s=_styleConfig$xAxis6.subTickLine)!==null&&_styleConfig$xAxis6$s!==void 0&&(_styleConfig$xAxis6$s2=_styleConfig$xAxis6$s.style)!==null&&_styleConfig$xAxis6$s2!==void 0&&_styleConfig$xAxis6$s2.stroke)styleConfig.xAxis.subTickLine.style.stroke=subText;//y轴-文本
if(styleConfig!==null&&styleConfig!==void 0&&styleConfig.yAxis&&styleConfig!==null&&styleConfig!==void 0&&(_styleConfig$yAxis=styleConfig.yAxis)!==null&&_styleConfig$yAxis!==void 0&&(_styleConfig$yAxis$la=_styleConfig$yAxis.label)!==null&&_styleConfig$yAxis$la!==void 0&&(_styleConfig$yAxis$la2=_styleConfig$yAxis$la.style)!==null&&_styleConfig$yAxis$la2!==void 0&&_styleConfig$yAxis$la2.fill)styleConfig.yAxis.label.style.fill=mainText;//y轴-标题
if(styleConfig!==null&&styleConfig!==void 0&&styleConfig.yAxis&&styleConfig!==null&&styleConfig!==void 0&&(_styleConfig$yAxis2=styleConfig.yAxis)!==null&&_styleConfig$yAxis2!==void 0&&(_styleConfig$yAxis2$t=_styleConfig$yAxis2.title)!==null&&_styleConfig$yAxis2$t!==void 0&&_styleConfig$yAxis2$t.fill)styleConfig.yAxis.title.style.fill=mainText;//y轴-轴线
if(styleConfig!==null&&styleConfig!==void 0&&styleConfig.yAxis&&styleConfig!==null&&styleConfig!==void 0&&(_styleConfig$yAxis3=styleConfig.yAxis)!==null&&_styleConfig$yAxis3!==void 0&&(_styleConfig$yAxis3$l=_styleConfig$yAxis3.line)!==null&&_styleConfig$yAxis3$l!==void 0&&(_styleConfig$yAxis3$l2=_styleConfig$yAxis3$l.style)!==null&&_styleConfig$yAxis3$l2!==void 0&&_styleConfig$yAxis3$l2.stroke)styleConfig.yAxis.line.style.stroke=supplementSecond;//y轴-网格线
if(styleConfig!==null&&styleConfig!==void 0&&styleConfig.yAxis&&styleConfig!==null&&styleConfig!==void 0&&(_styleConfig$yAxis4=styleConfig.yAxis)!==null&&_styleConfig$yAxis4!==void 0&&(_styleConfig$yAxis4$g=_styleConfig$yAxis4.grid)!==null&&_styleConfig$yAxis4$g!==void 0&&(_styleConfig$yAxis4$g2=_styleConfig$yAxis4$g.line)!==null&&_styleConfig$yAxis4$g2!==void 0&&(_styleConfig$yAxis4$g3=_styleConfig$yAxis4$g2.style)!==null&&_styleConfig$yAxis4$g3!==void 0&&_styleConfig$yAxis4$g3.stroke)styleConfig.yAxis.grid.line.style.stroke=subText;//y轴-刻度线
if(styleConfig!==null&&styleConfig!==void 0&&styleConfig.yAxis&&styleConfig!==null&&styleConfig!==void 0&&(_styleConfig$yAxis5=styleConfig.yAxis)!==null&&_styleConfig$yAxis5!==void 0&&(_styleConfig$yAxis5$t=_styleConfig$yAxis5.tickLine)!==null&&_styleConfig$yAxis5$t!==void 0&&(_styleConfig$yAxis5$t2=_styleConfig$yAxis5$t.style)!==null&&_styleConfig$yAxis5$t2!==void 0&&_styleConfig$yAxis5$t2.stroke)styleConfig.yAxis.tickLine.style.stroke=supplementFirst;//y轴-子刻度线
if(styleConfig!==null&&styleConfig!==void 0&&styleConfig.yAxis&&styleConfig!==null&&styleConfig!==void 0&&(_styleConfig$yAxis6=styleConfig.yAxis)!==null&&_styleConfig$yAxis6!==void 0&&(_styleConfig$yAxis6$s=_styleConfig$yAxis6.subTickLine)!==null&&_styleConfig$yAxis6$s!==void 0&&(_styleConfig$yAxis6$s2=_styleConfig$yAxis6$s.style)!==null&&_styleConfig$yAxis6$s2!==void 0&&_styleConfig$yAxis6$s2.stroke)styleConfig.yAxis.subTickLine.style.stroke=subText;//重新渲染
this.update({style:styleConfig},{reRender:true});}}

/***/ }),

/***/ 6633:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ line_base_AntdBaseLineDefinition)
});

;// ./src/pages/Charts/comps/antd/line-base/base-line.png
const base_line_namespaceObject = "data:image/png;base64,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";
// EXTERNAL MODULE: ./src/pages/Charts/comps/antd-common/line/AbstractLineDefinition.ts
var AbstractLineDefinition = __webpack_require__(92930);
;// ./src/pages/Charts/comps/antd/line-base/AntdBaseLineDefinition.ts
class AntdBaseLineDefinition extends AbstractLineDefinition["default"]{getBaseInfo(){return{compName:"Antd基础折线图",compKey:"AntdBaseLine",categorize:"chart",subCategorize:"line"};}getChartImg(){return base_line_namespaceObject;}getInitConfig(){const data=[{"name":"1990","value":525},{"name":"1991","value":459},{"name":"1992","value":357},{"name":"1993","value":414},{"name":"1994","value":234},{"name":"1995","value":250},{"name":"1996","value":156}];return{base:{id:"",name:'基础折线图',type:'AntdBaseLine'},style:{data:data,xField:"name",yField:"value",smooth:false,supportCSSTransform:true,color:"#00d7ff",point:{size:4,color:"#00d7ff",shape:"circle",style:{lineWidth:0,stroke:"#00d7ff"}},lineStyle:{lineWidth:2},xAxis:{grid:null,label:{style:{fill:"#969696ff",fontSize:10}},line:null,tickLine:null,subTickLine:null,position:"bottom",title:null},yAxis:{grid:null,label:{style:{fill:"#b1b1b1ff",fontSize:9}},line:{style:{stroke:"#9e9e9e7d",lineWidth:1}},tickLine:null,subTickLine:null,position:"left",title:null},animation:{appear:{animation:"wave-in",duration:3000}}},data:{sourceType:'static',staticData:data}};}}/* harmony default export */ const line_base_AntdBaseLineDefinition = (AntdBaseLineDefinition);

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