"use strict";
(self["webpackChunknews"] = self["webpackChunknews"] || []).push([[1829],{

/***/ 31829:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37995);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12955);
class BaseIframeComponent extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(props){super(props);this.eventHandlerMap={};this.onLoad=()=>{var _this$eventHandlerMap,_this$eventHandlerMap2;if('load'in this.eventHandlerMap)(_this$eventHandlerMap=(_this$eventHandlerMap2=this.eventHandlerMap)['load'])===null||_this$eventHandlerMap===void 0?void 0:_this$eventHandlerMap.call(_this$eventHandlerMap2);};this.state={...props};}render(){const{src}=this.state.style;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:src===""?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{color:'#9a9a9a',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:"\u8BF7\u8BBE\u7F6Eiframe\u5730\u5740"})}):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{height:'100%',display:'flex'},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("iframe",{title:'lc标准iframe组件',src:src,onLoad:this.onLoad,style:{width:'100%',height:'100%',border:'none'}})})});}}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseIframeComponent);

/***/ })

}]);