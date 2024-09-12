"use strict";
(self["webpackChunknews"] = self["webpackChunknews"] || []).push([[3630,8101],{

/***/ 78101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48331);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7579);
class BaseIframeComponent extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(props){super(props);this.eventHandlerMap={};this.onLoad=()=>{var _this$eventHandlerMap,_this$eventHandlerMap2;if('load'in this.eventHandlerMap)(_this$eventHandlerMap=(_this$eventHandlerMap2=this.eventHandlerMap)['load'])===null||_this$eventHandlerMap===void 0?void 0:_this$eventHandlerMap.call(_this$eventHandlerMap2);};this.state={...props};}render(){const{src}=this.state.style;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:src===""?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{color:'#9a9a9a',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:"\u8BF7\u8BBE\u7F6Eiframe\u5730\u5740"})}):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{height:'100%',display:'flex'},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("iframe",{title:'lc标准iframe组件',src:src,onLoad:this.onLoad,style:{width:'100%',height:'100%',border:'none'}})})});}}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseIframeComponent);

/***/ }),

/***/ 63630:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseIframeController: () => (/* binding */ BaseIframeController)
/* harmony export */ });
/* harmony import */ var _framework_core_AbstractDesignerController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50171);
/* harmony import */ var _utils_ComponentUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53090);
/* harmony import */ var _BaseIframeComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78101);
/* harmony import */ var _utils_ObjectUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61178);
/* harmony import */ var _designer_blueprint_core_BPExecutor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19002);
class BaseIframeController extends _framework_core_AbstractDesignerController__WEBPACK_IMPORTED_MODULE_0__["default"]{async create(container,config){this.config=config;this.container=container;this.instance=await _utils_ComponentUtil__WEBPACK_IMPORTED_MODULE_1__["default"].createAndRender(container,_BaseIframeComponent__WEBPACK_IMPORTED_MODULE_2__["default"],config);}destroy(){this.instance=null;this.config=null;}getConfig(){return this.config;}update(config,upOp){var _this$instance;this.config=_utils_ObjectUtil__WEBPACK_IMPORTED_MODULE_4__["default"].merge(this.config,config);upOp=upOp||{reRender:true};if(upOp.reRender)(_this$instance=this.instance)===null||_this$instance===void 0?void 0:_this$instance.setState(this.config);}registerEvent(){if(this.instance){var _this$config,_this$config$base;const nodeId=(_this$config=this.config)===null||_this$config===void 0?void 0:(_this$config$base=_this$config.base)===null||_this$config$base===void 0?void 0:_this$config$base.id;this.instance.eventHandlerMap={load:()=>_designer_blueprint_core_BPExecutor__WEBPACK_IMPORTED_MODULE_3__["default"].triggerComponentEvent(nodeId,"load",this.config)};}}}

/***/ })

}]);