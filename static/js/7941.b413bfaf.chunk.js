"use strict";
(self["webpackChunknews"] = self["webpackChunknews"] || []).push([[7941,9901],{

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

/***/ 57941:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AntdCommonRoseController)
/* harmony export */ });
/* harmony import */ var _antv_g2plot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51948);
/* harmony import */ var _AntdBaseDesignerController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29901);
class AntdCommonRoseController extends _AntdBaseDesignerController__WEBPACK_IMPORTED_MODULE_1__.AntdBaseDesignerController{async create(container,config){super.commonCreate(container,_antv_g2plot__WEBPACK_IMPORTED_MODULE_0__.Rose,config);}destroy(){this.instance.destroy();this.instance=null;this.config=null;this.interval&&clearInterval(this.interval);}getConfig(){return this.config;}update(config,upOp){super.commonUpdate(config,_antv_g2plot__WEBPACK_IMPORTED_MODULE_0__.Rose,upOp);}updateTheme(newTheme){var _this$config,_styleConfig$legend$i,_styleConfig$legend$i2,_styleConfig$label;if(!newTheme)return;const styleConfig=(_this$config=this.config)===null||_this$config===void 0?void 0:_this$config.style;const{colors:{main,mainText,supplementSecond,background,supplementFirst,subText}}=newTheme;//图形
if(styleConfig!==null&&styleConfig!==void 0&&styleConfig.color){styleConfig.color=[main,mainText,subText,supplementFirst,supplementSecond];}//图例
if(styleConfig.legend&&(_styleConfig$legend$i=styleConfig.legend.itemName)!==null&&_styleConfig$legend$i!==void 0&&(_styleConfig$legend$i2=_styleConfig$legend$i.style)!==null&&_styleConfig$legend$i2!==void 0&&_styleConfig$legend$i2.fill)styleConfig.legend.itemName.style.fill=mainText;//描边
if(styleConfig!==null&&styleConfig!==void 0&&styleConfig.sectorStyle&&styleConfig!==null&&styleConfig!==void 0&&styleConfig.sectorStyle)styleConfig.sectorStyle.stroke=background;//标签
if(styleConfig!==null&&styleConfig!==void 0&&styleConfig.label&&styleConfig!==null&&styleConfig!==void 0&&(_styleConfig$label=styleConfig.label)!==null&&_styleConfig$label!==void 0&&_styleConfig$label.style)styleConfig.label.style.fill=mainText;//重新渲染
this.update({style:styleConfig},{reRender:true});}}

/***/ })

}]);