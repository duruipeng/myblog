"use strict";
(self["webpackChunknews"] = self["webpackChunknews"] || []).push([[8121,4817,9901,9141],{

/***/ 29901:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AntdBaseDesignerController: () => (/* binding */ AntdBaseDesignerController)
/* harmony export */ });
/* harmony import */ var _framework_core_AbstractDesignerController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50171);
/* harmony import */ var _utils_ObjectUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61178);
/* harmony import */ var _designer_blueprint_core_BPExecutor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19002);
class AntdBaseDesignerController extends _framework_core_AbstractDesignerController__WEBPACK_IMPORTED_MODULE_0__["default"]{constructor(){super(...arguments);this.interval=null;//上一次数据连接状态 true：成功 false：失败
this.lastReqState=true;//是否为断开后重新连接
this.reConnect=false;}changeData(data){var _this$config,_this$config$style,_this$instance;if((_this$config=this.config)!==null&&_this$config!==void 0&&(_this$config$style=_this$config.style)!==null&&_this$config$style!==void 0&&_this$config$style.data)this.config.style.data=data;(_this$instance=this.instance)===null||_this$instance===void 0?void 0:_this$instance.changeData(data);}registerEvent(){var _this$config2,_this$config2$base,_this$instance2,_this$instance3,_this$instance4,_this$instance5,_this$instance6;const nodeId=(_this$config2=this.config)===null||_this$config2===void 0?void 0:(_this$config2$base=_this$config2.base)===null||_this$config2$base===void 0?void 0:_this$config2$base.id;(_this$instance2=this.instance)===null||_this$instance2===void 0?void 0:_this$instance2.on('plot:click',function(){_designer_blueprint_core_BPExecutor__WEBPACK_IMPORTED_MODULE_1__["default"].triggerComponentEvent(nodeId,"globalClick",{msg:'这是测试参数'});});(_this$instance3=this.instance)===null||_this$instance3===void 0?void 0:_this$instance3.on('element:click',function(){_designer_blueprint_core_BPExecutor__WEBPACK_IMPORTED_MODULE_1__["default"].triggerComponentEvent(nodeId,"elementClick",{msg:'这是测试参数'});});// 图例添加点击事件
(_this$instance4=this.instance)===null||_this$instance4===void 0?void 0:_this$instance4.on('legend-item:click',function(){_designer_blueprint_core_BPExecutor__WEBPACK_IMPORTED_MODULE_1__["default"].triggerComponentEvent(nodeId,"legendClick",{msg:'这是测试参数'});});// 图例名称添加点击事件
(_this$instance5=this.instance)===null||_this$instance5===void 0?void 0:_this$instance5.on('legend-item-name:click',function(){_designer_blueprint_core_BPExecutor__WEBPACK_IMPORTED_MODULE_1__["default"].triggerComponentEvent(nodeId,"elementNameClick",{msg:'这是测试参数'});});// axis-label 添加点击事件
(_this$instance6=this.instance)===null||_this$instance6===void 0?void 0:_this$instance6.on('axis-label:click',function(){_designer_blueprint_core_BPExecutor__WEBPACK_IMPORTED_MODULE_1__["default"].triggerComponentEvent(nodeId,"axisLabelClick",{msg:'这是测试参数'});});}commonCreate(container,Clazz,config){var _this$config3,_this$instance7;this.config=config;this.container=container;this.instance=new Clazz(container,(_this$config3=this.config)===null||_this$config3===void 0?void 0:_this$config3.style);(_this$instance7=this.instance)===null||_this$instance7===void 0?void 0:_this$instance7.render();this.registerEvent();}commonUpdate(config,Clazz,upOp){var _this$instance8,_this$config4;this.config=_utils_ObjectUtil__WEBPACK_IMPORTED_MODULE_2__["default"].merge(this.config,config);upOp=upOp||{reRender:true};if(upOp.reRender)(_this$instance8=this.instance)===null||_this$instance8===void 0?void 0:_this$instance8.update((_this$config4=this.config)===null||_this$config4===void 0?void 0:_this$config4.style);}}

/***/ }),

/***/ 69141:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AntdCommonDefinition: () => (/* binding */ AntdCommonDefinition)
/* harmony export */ });
/* harmony import */ var _framework_core_AbstractDefinition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36839);
class AntdCommonDefinition extends _framework_core_AbstractDefinition__WEBPACK_IMPORTED_MODULE_0__.AbstractDefinition{getEventList(){const eventList=super.getEventList();eventList.push(...[{id:"dataChange",name:"数据变更时"},{id:"globalClick",name:"点击整个组件时"},{id:"elementClick",name:"点击图形元素时"},{id:"legendClick",name:"点击图例时"},{id:"elementNameClick",name:"点击图例名称时"},{id:"axisLabelClick",name:"点击坐标文字时"}]);return eventList;}getActionList(){return super.getActionList();}}

/***/ }),

/***/ 64817:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AntdRingProgressController)
/* harmony export */ });
/* harmony import */ var _antv_g2plot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51948);
/* harmony import */ var _antd_common_AntdBaseDesignerController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29901);
class AntdRingProgressController extends _antd_common_AntdBaseDesignerController__WEBPACK_IMPORTED_MODULE_1__.AntdBaseDesignerController{async create(container,config){super.commonCreate(container,_antv_g2plot__WEBPACK_IMPORTED_MODULE_0__.RingProgress,config);}destroy(){this.instance.destroy();this.instance=null;this.config=null;this.interval&&clearInterval(this.interval);}getConfig(){return this.config;}update(config,upOp){super.commonUpdate(config,_antv_g2plot__WEBPACK_IMPORTED_MODULE_0__.RingProgress,upOp);// console.log(this.config?.style)
}updateTheme(newTheme){var _this$config,_styleConfig$statisti,_styleConfig$statisti2;if(!newTheme)return;const styleConfig=(_this$config=this.config)===null||_this$config===void 0?void 0:_this$config.style;const{colors:{main,mainText,supplementFirst,subText}}=newTheme;//图形
if(styleConfig!==null&&styleConfig!==void 0&&styleConfig.color){styleConfig.color=[main,supplementFirst];}//标题
if(styleConfig!==null&&styleConfig!==void 0&&styleConfig.statistic&&styleConfig!==null&&styleConfig!==void 0&&(_styleConfig$statisti=styleConfig.statistic)!==null&&_styleConfig$statisti!==void 0&&_styleConfig$statisti.title&&styleConfig.statistic.title.style)styleConfig.statistic.title.style.color=mainText;//内容
if(styleConfig!==null&&styleConfig!==void 0&&styleConfig.statistic&&styleConfig!==null&&styleConfig!==void 0&&(_styleConfig$statisti2=styleConfig.statistic)!==null&&_styleConfig$statisti2!==void 0&&_styleConfig$statisti2.content&&styleConfig.statistic.content.style)styleConfig.statistic.content.style.color=subText;//重新渲染
this.update({style:styleConfig},{reRender:true});}}

/***/ }),

/***/ 91984:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ring_progress_AntdRingProgressDefinition)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(48331);
// EXTERNAL MODULE: ./src/pages/Charts/designer/right/util.ts
var util = __webpack_require__(46782);
// EXTERNAL MODULE: ./src/pages/Charts/comps/antd/ring-progress/AntdRingProgressController.ts
var AntdRingProgressController = __webpack_require__(64817);
;// CONCATENATED MODULE: ./src/pages/Charts/comps/antd/ring-progress/ring-progress.png
const ring_progress_namespaceObject = __webpack_require__.p + "static/media/ring-progress.7f7889898d6d5e96c0ad.png";
// EXTERNAL MODULE: ./src/pages/Charts/comps/antd-common/AntdCommonDefinition.ts
var AntdCommonDefinition = __webpack_require__(69141);
;// CONCATENATED MODULE: ./src/pages/Charts/comps/antd/ring-progress/AntdRingProgressDefinition.ts
const AnimationConfig=/*#__PURE__*/react.lazy(()=>__webpack_require__.e(/* import() */ 4153).then(__webpack_require__.bind(__webpack_require__, 94153)));const DataConfig=/*#__PURE__*/react.lazy(()=>__webpack_require__.e(/* import() */ 9885).then(__webpack_require__.bind(__webpack_require__, 29885)));const AntdRingProgressStyleConfig=/*#__PURE__*/react.lazy(()=>__webpack_require__.e(/* import() */ 2277).then(__webpack_require__.bind(__webpack_require__, 52277)).then(module=>({default:module.AntdRingProgressStyleConfig})));const ThemeConfig=/*#__PURE__*/react.lazy(()=>__webpack_require__.e(/* import() */ 1306).then(__webpack_require__.bind(__webpack_require__, 11306)));const BaseInfo=/*#__PURE__*/react.lazy(()=>__webpack_require__.e(/* import() */ 4430).then(__webpack_require__.bind(__webpack_require__, 34430)));class AntdRingProgressDefinition extends AntdCommonDefinition.AntdCommonDefinition{getController(){return AntdRingProgressController["default"];}getMenuList(){return (0,util.getDefaultMenuList)().filter(menuInfo=>menuInfo.key!=="mapping");}getMenuToConfigContentMap(){return{base:BaseInfo,data:DataConfig,style:AntdRingProgressStyleConfig,animation:AnimationConfig,theme:ThemeConfig};}getBaseInfo(){return{compName:"Antd迷你环图",compKey:"AntdRingProgress",categorize:"chart",subCategorize:"progress"};}getChartImg(){return ring_progress_namespaceObject;}getInitConfig(){return{base:{id:"",name:'Antd迷你环图',type:'AntdRingProgress'},style:{percent:0.7,color:["#3cc2f8bd","#66d2ff3e"],statistic:{content:{style:{fill:"#fff",fontSize:'24',fontWeight:900,color:"#57c6ff"},offsetY:7,offsetX:0},title:{style:{fontSize:'21',fontWeight:900,color:"#6ad1ff"},content:"指标1",offsetY:-11}},animation:{appear:{animation:"wave-in",duration:3000}},progressStyle:{}},data:{sourceType:'static',staticData:0.7}};}}/* harmony default export */ const ring_progress_AntdRingProgressDefinition = (AntdRingProgressDefinition);

/***/ }),

/***/ 46782:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultMenuList: () => (/* binding */ getDefaultMenuList)
/* harmony export */ });
/* harmony import */ var _icon_park_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90934);
/* harmony import */ var _icon_park_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64077);
/* harmony import */ var _icon_park_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14442);
/* harmony import */ var _icon_park_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56156);
/* harmony import */ var _icon_park_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77201);
/* harmony import */ var _icon_park_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34409);
const getDefaultMenuList=()=>{return[{icon:_icon_park_react__WEBPACK_IMPORTED_MODULE_0__["default"],name:'基础',key:'base'},{icon:_icon_park_react__WEBPACK_IMPORTED_MODULE_1__["default"],name:'样式',key:'style'},{icon:_icon_park_react__WEBPACK_IMPORTED_MODULE_2__["default"],name:'数据',key:'data'},{icon:_icon_park_react__WEBPACK_IMPORTED_MODULE_3__["default"],name:'映射',key:'mapping'},{icon:_icon_park_react__WEBPACK_IMPORTED_MODULE_4__["default"],name:'滤镜',key:'filter'},// {
//     icon: VideoCameraFilled,
//     name: '动画',
//     key: 'animation',
// },
{icon:_icon_park_react__WEBPACK_IMPORTED_MODULE_5__["default"],name:'主题',key:'theme'}];};

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

/***/ 56156:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48331);
/* harmony import */ var _runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88718);


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