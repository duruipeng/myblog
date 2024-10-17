"use strict";
(self["webpackChunknews"] = self["webpackChunknews"] || []).push([[5664],{

/***/ 55664:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  TextArea: () => (/* binding */ TextArea_TextArea),
  "default": () => (/* binding */ ui_text_area_TextArea)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(37995);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(97825);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(77659);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(55056);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(10540);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(41113);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[2]!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[3]!./src/pages/Charts/json-schema/ui/text-area/TextArea.less
var TextArea = __webpack_require__(40102);
;// ./src/pages/Charts/json-schema/ui/text-area/TextArea.less

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(TextArea["default"], options);




       /* harmony default export */ const text_area_TextArea = (TextArea["default"] && TextArea["default"].locals ? TextArea["default"].locals : undefined);

// EXTERNAL MODULE: ./src/pages/Charts/json-schema/ui/ui-container/UIContainer.tsx + 1 modules
var UIContainer = __webpack_require__(28232);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(12955);
;// ./src/pages/Charts/json-schema/ui/text-area/TextArea.tsx
/**
 * 下滑线输入框
 */const TextArea_TextArea=props=>{const{value,defaultValue,...rest}=props;const control=!!value&&!defaultValue;const[text,setText]=(0,react.useState)(defaultValue);const onChange=event=>{event.stopPropagation();const{onChange}=props;onChange&&onChange(event.target.value);if(!control)setText(event.target.value);};return/*#__PURE__*/(0,jsx_runtime.jsx)(UIContainer.UIContainer,{...rest,children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:'lc-text-area-container',children:/*#__PURE__*/(0,jsx_runtime.jsx)("textarea",{value:control?value:text,onChange:onChange,className:'lc-text-area'})})});};/* harmony default export */ const ui_text_area_TextArea = (TextArea_TextArea);

/***/ }),

/***/ 40102:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40300);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99029);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.lc-text-area-container {
  flex-grow: 1;
}
.lc-text-area-container .lc-text-area {
  font-size: inherit;
  background-color: #39393a;
  box-shadow: 0 0 5px #0000007F, 0 0 0 3px transparent;
  border-radius: 3px;
  border: none;
  outline: none;
  padding: 2px 5px;
  width: 100%;
  min-height: 80px;
  max-height: 400px;
  transition: box-shadow 0.4s;
}
.lc-text-area-container .lc-text-area:focus {
  box-shadow: 0 0 0 1px #787878;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);