"use strict";
(self["webpackChunknews"] = self["webpackChunknews"] || []).push([[745],{

/***/ 60745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37995);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12955);
class BaseImageComponent extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(props){super(props);this.eventHandlerMap={};this.onClick=()=>{var _this$eventHandlerMap,_this$eventHandlerMap2;if('click'in this.eventHandlerMap)(_this$eventHandlerMap=(_this$eventHandlerMap2=this.eventHandlerMap)['click'])===null||_this$eventHandlerMap===void 0?void 0:_this$eventHandlerMap.call(_this$eventHandlerMap2);};this.state={...props};}render(){const{type,onLineUrl,localUrl,opacity}=this.state;const src=type==='online'?onLineUrl:localUrl;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{width:'100%',height:'100%'},onClick:this.onClick,children:!src?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{color:'#9a9a9a',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:"\u8BF7\u914D\u7F6E\u56FE\u7247\u8FDE\u63A5\u6216\u4E0A\u4F20\u56FE\u7247"})}):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img",{alt:'图片组件',style:{opacity},width:'100%',height:'100%',src:src})});}}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseImageComponent);

/***/ })

}]);