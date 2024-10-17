"use strict";
(self["webpackChunknews"] = self["webpackChunknews"] || []).push([[8458],{

/***/ 28458:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37995);
/* harmony import */ var _json_schema_ui_dialog_Dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13476);
/* harmony import */ var _theme_editor_ThemeEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40793);
/* harmony import */ var _theme_list_ThemeList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69213);
/* harmony import */ var _designer_right_RightStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52129);
/* harmony import */ var _designer_manager_LayerManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99113);
/* harmony import */ var _json_schema_ui_button_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57747);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12955);
class ThemeConfig extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments);this.state={editTheme:false};this.openThemeEditor=()=>this.setState({editTheme:true});this.closeEditor=()=>this.setState({editTheme:false});this.themeChange=theme=>{if(!theme)return;const{activeElem:{id}}=_designer_right_RightStore__WEBPACK_IMPORTED_MODULE_4__["default"];const{compController}=_designer_manager_LayerManager__WEBPACK_IMPORTED_MODULE_5__["default"];const instance=compController[id+''];instance&&instance.updateTheme(theme);};}render(){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div",{className:'lc-theme-config',children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:'lc-theme-custom',children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_json_schema_ui_button_Button__WEBPACK_IMPORTED_MODULE_6__["default"],{onClick:this.openThemeEditor,style:{width:'100%'},children:"+ \u81EA\u5B9A\u4E49\u4E3B\u9898"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("br",{}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_theme_list_ThemeList__WEBPACK_IMPORTED_MODULE_3__["default"],{onSelected:this.themeChange})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_json_schema_ui_dialog_Dialog__WEBPACK_IMPORTED_MODULE_1__["default"],{onClose:this.closeEditor,title:'编辑主题',visible:this.state.editTheme,width:860,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_theme_editor_ThemeEditor__WEBPACK_IMPORTED_MODULE_2__["default"],{})})]});}}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeConfig);

/***/ })

}]);