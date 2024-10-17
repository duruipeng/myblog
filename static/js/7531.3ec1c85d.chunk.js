"use strict";
(self["webpackChunknews"] = self["webpackChunknews"] || []).push([[7531,6030,9469,197],{

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

/***/ 86030:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ G2PlotCustomController)
/* harmony export */ });
/* harmony import */ var _antv_g2plot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32467);
/* harmony import */ var _antd_common_AntdBaseDesignerController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39469);
/* harmony import */ var _utils_ObjectUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69946);
class G2PlotCustomController extends _antd_common_AntdBaseDesignerController__WEBPACK_IMPORTED_MODULE_1__.AntdBaseDesignerController{async create(container,config){var _config$style,_config$data;this.container=container;this.config=config;const customCode=(_config$style=config.style)===null||_config$style===void 0?void 0:_config$style.customCode;if(!customCode||customCode==="")return;const func=eval(`(${customCode})`);if(typeof func!=='function')return;this.instance=func(container,_antv_g2plot__WEBPACK_IMPORTED_MODULE_0__,(_config$data=config.data)===null||_config$data===void 0?void 0:_config$data.staticData);//注册蓝图-暂不处理
// this.registerEvent();
}destroy(){this.instance.destroy();this.instance=null;this.config=null;this.interval&&clearInterval(this.interval);}getConfig(){return this.config;}changeData(data){var _this$instance;(_this$instance=this.instance)===null||_this$instance===void 0?void 0:_this$instance.changeData(data);}update(config,upOp){//合并最新的配置
this.config=_utils_ObjectUtil__WEBPACK_IMPORTED_MODULE_2__["default"].merge(this.config,config);upOp=upOp||{reRender:true};if(upOp.reRender){var _config$style2,_this$config,_this$config$data;//销毁之前的图表实例
try{var _this$instance2;(_this$instance2=this.instance)===null||_this$instance2===void 0?void 0:_this$instance2.destroy();}catch(e){while((_this$container=this.container)!==null&&_this$container!==void 0&&_this$container.firstChild){var _this$container;this.container.removeChild(this.container.firstChild);}}const customCode=(_config$style2=config.style)===null||_config$style2===void 0?void 0:_config$style2.customCode;if(!customCode||customCode==="")return;const func=eval(`(${customCode})`);if(typeof func!=='function')return;this.instance=func(this.container,_antv_g2plot__WEBPACK_IMPORTED_MODULE_0__,(_this$config=this.config)===null||_this$config===void 0?void 0:(_this$config$data=_this$config.data)===null||_this$config$data===void 0?void 0:_this$config$data.staticData);}}}

/***/ }),

/***/ 87531:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ g2plot_custom_G2PlotCustomDefinition)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(37995);
;// ./src/pages/Charts/comps/antd/g2plot-custom/g2-plot-custom.png
const g2_plot_custom_namespaceObject = "data:image/png;base64,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";
// EXTERNAL MODULE: ./src/pages/Charts/comps/antd/g2plot-custom/G2PlotCustomController.ts
var G2PlotCustomController = __webpack_require__(86030);
// EXTERNAL MODULE: ./src/pages/Charts/comps/antd-common/AntdCommonDefinition.ts
var AntdCommonDefinition = __webpack_require__(10197);
// EXTERNAL MODULE: ./node_modules/@icon-park/react/es/icons/SettingOne.js
var SettingOne = __webpack_require__(20470);
// EXTERNAL MODULE: ./node_modules/@icon-park/react/es/icons/Optimize.js
var Optimize = __webpack_require__(35341);
// EXTERNAL MODULE: ./node_modules/@icon-park/react/es/icons/Data.js
var Data = __webpack_require__(94058);
;// ./src/pages/Charts/comps/antd/g2plot-custom/G2PlotCustomDefinition.ts
const G2PlotCustomConfig=/*#__PURE__*/react.lazy(()=>__webpack_require__.e(/* import() */ 3624).then(__webpack_require__.bind(__webpack_require__, 13624)));const BaseInfo=/*#__PURE__*/react.lazy(()=>__webpack_require__.e(/* import() */ 6676).then(__webpack_require__.bind(__webpack_require__, 76676)));const DataConfig=/*#__PURE__*/react.lazy(()=>__webpack_require__.e(/* import() */ 3439).then(__webpack_require__.bind(__webpack_require__, 13439)));class G2PlotCustomDefinition extends AntdCommonDefinition.AntdCommonDefinition{getController(){return G2PlotCustomController["default"];}getMenuList(){return[{icon:SettingOne["default"],name:'基础',key:'base'},{icon:Optimize["default"],name:'自定义',key:'custom'},{icon:Data["default"],name:'数据',key:'data'}];}getMenuToConfigContentMap(){return{base:BaseInfo,data:DataConfig,custom:G2PlotCustomConfig};}getBaseInfo(){return{compName:"G2Plot自定义图表",compKey:"G2PlotCustom",categorize:"other"};}getChartImg(){return g2_plot_custom_namespaceObject;}getInitConfig(){return{base:{id:"",name:'G2Plot自定义图表',type:'G2PlotCustom'},style:{customCode:"function renderG2Plot(container, G2Plot, data) {\n"+"    const g2plot = new G2Plot.BidirectionalBar(container, {\n"+"        data: data,\n"+"        layout: 'vertical',\n"+"        xField: 'country',\n"+"        yField: ['2016年耕地总面积', '2016年转基因种植面积'],\n"+"        legend: false,\n"+"        appendPadding: [20, 0],\n"+"        barStyle: {\n"+"            lineWidth: 4\n"+"        },\n"+"        yAxis: {\n"+"            '2016年耕地总面积': {\n"+"                grid: null,\n"+"                label: {\n"+"                    style: {\n"+"                        fill: \"#fff\",\n"+"                        fontSize: 10,\n"+"                    },\n"+"                },\n"+"\n"+"            },\n"+"            '2016年转基因种植面积': {\n"+"                grid: null,\n"+"                label: {\n"+"                    style: {\n"+"                        fill: \"#fff\",\n"+"                        fontSize: 10,\n"+"                    },\n"+"                },\n"+"            },\n"+"        },\n"+"        xAxis: {\n"+"            grid: null,\n"+"            label: {\n"+"                style: {\n"+"                    fill: \"#fff\",\n"+"                    fontSize: 10,\n"+"                },\n"+"            },\n"+"            line: {\n"+"                style: {\n"+"                    stroke: \"#6f6f6f91\",\n"+"                    lineWidth: 1,\n"+"                },\n"+"            },\n"+"            tickLine: null,\n"+"            subTickLine: null,\n"+"            title: null,\n"+"        },\n"+"        label: {\n"+"            position: 'top',\n"+"            style: {\n"+"                fill: '#fff'\n"+"            }\n"+"        },\n"+"    });\n"+"    g2plot.render();\n"+"    return g2plot;\n"+"}"},data:{sourceType:'static',staticData:[{country:'乌拉圭','2016年耕地总面积':13.4,'2016年转基因种植面积':12.3},{country:'巴拉圭','2016年耕地总面积':14.4,'2016年转基因种植面积':6.3},{country:'南非','2016年耕地总面积':18.4,'2016年转基因种植面积':8.3},{country:'巴基斯坦','2016年耕地总面积':34.4,'2016年转基因种植面积':13.8},{country:'阿根廷','2016年耕地总面积':44.4,'2016年转基因种植面积':19.5},{country:'巴西','2016年耕地总面积':24.4,'2016年转基因种植面积':18.8},{country:'加拿大','2016年耕地总面积':54.4,'2016年转基因种植面积':24.7},{country:'中国','2016年耕地总面积':104.4,'2016年转基因种植面积':5.3},{country:'美国','2016年耕地总面积':165.2,'2016年转基因种植面积':72.9}]}};}}/* harmony default export */ const g2plot_custom_G2PlotCustomDefinition = (G2PlotCustomDefinition);

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