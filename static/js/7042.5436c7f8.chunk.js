"use strict";
(self["webpackChunknews"] = self["webpackChunknews"] || []).push([[7042,745],{

/***/ 60745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37995);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12955);
class BaseImageComponent extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(props){super(props);this.eventHandlerMap={};this.onClick=()=>{var _this$eventHandlerMap,_this$eventHandlerMap2;if('click'in this.eventHandlerMap)(_this$eventHandlerMap=(_this$eventHandlerMap2=this.eventHandlerMap)['click'])===null||_this$eventHandlerMap===void 0?void 0:_this$eventHandlerMap.call(_this$eventHandlerMap2);};this.state={...props};}render(){const{type,onLineUrl,localUrl,opacity}=this.state;const src=type==='online'?onLineUrl:localUrl;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{width:'100%',height:'100%'},onClick:this.onClick,children:!src?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{color:'#9a9a9a',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:"\u8BF7\u914D\u7F6E\u56FE\u7247\u8FDE\u63A5\u6216\u4E0A\u4F20\u56FE\u7247"})}):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img",{alt:'图片组件',style:{opacity},width:'100%',height:'100%',src:src})});}}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseImageComponent);

/***/ }),

/***/ 87042:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BaseImageController)
/* harmony export */ });
/* harmony import */ var _framework_core_AbstractDesignerController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56571);
/* harmony import */ var _BaseImageComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60745);
/* harmony import */ var _utils_ComponentUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42850);
/* harmony import */ var _utils_ObjectUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69946);
/* harmony import */ var _designer_blueprint_core_BPExecutor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17498);
class BaseImageController extends _framework_core_AbstractDesignerController__WEBPACK_IMPORTED_MODULE_0__["default"]{async create(container,config){this.config=config;this.container=container;this.instance=await _utils_ComponentUtil__WEBPACK_IMPORTED_MODULE_2__["default"].createAndRender(container,_BaseImageComponent__WEBPACK_IMPORTED_MODULE_1__["default"],config.style);}destroy(){this.instance=null;this.config=null;}getConfig(){return this.config;}update(config,upOp){this.config=_utils_ObjectUtil__WEBPACK_IMPORTED_MODULE_4__["default"].merge(this.config,config);upOp=upOp||{reRender:true};if(upOp.reRender){var _this$instance,_this$config;(_this$instance=this.instance)===null||_this$instance===void 0?void 0:_this$instance.setState((_this$config=this.config)===null||_this$config===void 0?void 0:_this$config.style);}}updateTheme(newTheme){}registerEvent(){if(this.instance){var _this$config2,_this$config2$base;const nodeId=(_this$config2=this.config)===null||_this$config2===void 0?void 0:(_this$config2$base=_this$config2.base)===null||_this$config2$base===void 0?void 0:_this$config2$base.id;this.instance.eventHandlerMap={click:()=>_designer_blueprint_core_BPExecutor__WEBPACK_IMPORTED_MODULE_3__["default"].triggerComponentEvent(nodeId,"click",this.config)};}}}

/***/ })

}]);