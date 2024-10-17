"use strict";
(self["webpackChunknews"] = self["webpackChunknews"] || []).push([[2301,9469,197,8776,8805],{

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

/***/ 38776:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37995);
/* harmony import */ var _designer_right_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62718);
/* harmony import */ var _AntdCommonRoseController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38805);
/* harmony import */ var _AntdCommonDefinition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10197);
const AnimationConfig=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 62).then(__webpack_require__.bind(__webpack_require__, 80062)));const AntdRoseCommonStyleConfig=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 8965).then(__webpack_require__.bind(__webpack_require__, 88965)));const AntdRoseFieldMapping=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 8965).then(__webpack_require__.bind(__webpack_require__, 88965)).then(module=>({default:module.AntdRoseFieldMapping})));const ThemeConfig=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 8458).then(__webpack_require__.bind(__webpack_require__, 28458)));const BaseInfo=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 6676).then(__webpack_require__.bind(__webpack_require__, 76676)));const DataConfig=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 3439).then(__webpack_require__.bind(__webpack_require__, 13439)));class AbstractRoseDefinition extends _AntdCommonDefinition__WEBPACK_IMPORTED_MODULE_2__.AntdCommonDefinition{getController(){return _AntdCommonRoseController__WEBPACK_IMPORTED_MODULE_1__["default"];}getMenuList(){return (0,_designer_right_util__WEBPACK_IMPORTED_MODULE_3__.getDefaultMenuList)();}getMenuToConfigContentMap(){return{base:BaseInfo,data:DataConfig,style:AntdRoseCommonStyleConfig,animation:AnimationConfig,theme:ThemeConfig,mapping:AntdRoseFieldMapping};}}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AbstractRoseDefinition);

/***/ }),

/***/ 38805:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AntdCommonRoseController)
/* harmony export */ });
/* harmony import */ var _antv_g2plot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32467);
/* harmony import */ var _AntdBaseDesignerController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39469);
class AntdCommonRoseController extends _AntdBaseDesignerController__WEBPACK_IMPORTED_MODULE_1__.AntdBaseDesignerController{async create(container,config){super.commonCreate(container,_antv_g2plot__WEBPACK_IMPORTED_MODULE_0__.Rose,config);}destroy(){this.instance.destroy();this.instance=null;this.config=null;this.interval&&clearInterval(this.interval);}getConfig(){return this.config;}update(config,upOp){super.commonUpdate(config,_antv_g2plot__WEBPACK_IMPORTED_MODULE_0__.Rose,upOp);}updateTheme(newTheme){var _this$config,_styleConfig$legend$i,_styleConfig$legend$i2,_styleConfig$label;if(!newTheme)return;const styleConfig=(_this$config=this.config)===null||_this$config===void 0?void 0:_this$config.style;const{colors:{main,mainText,supplementSecond,background,supplementFirst,subText}}=newTheme;//图形
if(styleConfig!==null&&styleConfig!==void 0&&styleConfig.color){styleConfig.color=[main,mainText,subText,supplementFirst,supplementSecond];}//图例
if(styleConfig.legend&&(_styleConfig$legend$i=styleConfig.legend.itemName)!==null&&_styleConfig$legend$i!==void 0&&(_styleConfig$legend$i2=_styleConfig$legend$i.style)!==null&&_styleConfig$legend$i2!==void 0&&_styleConfig$legend$i2.fill)styleConfig.legend.itemName.style.fill=mainText;//描边
if(styleConfig!==null&&styleConfig!==void 0&&styleConfig.sectorStyle&&styleConfig!==null&&styleConfig!==void 0&&styleConfig.sectorStyle)styleConfig.sectorStyle.stroke=background;//标签
if(styleConfig!==null&&styleConfig!==void 0&&styleConfig.label&&styleConfig!==null&&styleConfig!==void 0&&(_styleConfig$label=styleConfig.label)!==null&&_styleConfig$label!==void 0&&_styleConfig$label.style)styleConfig.label.style.fill=mainText;//重新渲染
this.update({style:styleConfig},{reRender:true});}}

/***/ }),

/***/ 22301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ rose_base_AntdBaseRoseDefinition)
});

;// ./src/pages/Charts/comps/antd/rose-base/base-rose.png
const base_rose_namespaceObject = "data:image/png;base64,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";
// EXTERNAL MODULE: ./src/pages/Charts/comps/antd-common/rose/AbstractRoseDefinition.ts
var AbstractRoseDefinition = __webpack_require__(38776);
;// ./src/pages/Charts/comps/antd/rose-base/AntdBaseRoseDefinition.ts
class AntdBaseRoseDefinition extends AbstractRoseDefinition["default"]{getBaseInfo(){return{compName:"Antd基础玫瑰图",compKey:"AntdBaseRose",categorize:"chart",subCategorize:"rose"};}getChartImg(){return base_rose_namespaceObject;}getInitConfig(){const data=[{type:'sort1',value:27},{type:'sort2',value:25},{type:'sort3',value:18},{type:'sort4',value:15}];return{base:{id:"",name:'Antd基础玫瑰图',type:'AntdBaseRose'},style:{data:data,xField:"type",yField:"value",seriesField:"type",radius:0.8,innerRadius:0,padding:[50,0,0,0],supportCSSTransform:true,sectorStyle:{stroke:"#fff",lineWidth:0},label:{style:{fill:"#b5b5b5ff",fontSize:13},autoRotate:true},legend:{position:"top",layout:"horizontal",itemName:{style:{fill:"#a6a6a6ff",fontSize:12}}},animation:{appear:{animation:"grow-in-xy",duration:3000}},color:["#0091ffff","#68beffff","#b4e0ffff","#408ec9ff"]},data:{sourceType:'static',staticData:data}};}}/* harmony default export */ const rose_base_AntdBaseRoseDefinition = (AntdBaseRoseDefinition);

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