"use strict";
(self["webpackChunknews"] = self["webpackChunknews"] || []).push([[5305],{

/***/ 75305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  RangeSlider: () => (/* binding */ RangeSlider),
  Slider: () => (/* binding */ Slider_Slider)
});

// EXTERNAL MODULE: ./node_modules/antd/es/slider/index.js + 3 modules
var slider = __webpack_require__(99973);
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[2]!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[3]!./src/pages/Charts/json-schema/ui/slider/Slider.less
var Slider = __webpack_require__(86854);
;// ./src/pages/Charts/json-schema/ui/slider/Slider.less

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Slider["default"], options);




       /* harmony default export */ const slider_Slider = (Slider["default"] && Slider["default"].locals ? Slider["default"].locals : undefined);

// EXTERNAL MODULE: ./src/pages/Charts/json-schema/ui/ui-container/UIContainer.tsx + 1 modules
var UIContainer = __webpack_require__(28232);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(12955);
;// ./src/pages/Charts/json-schema/ui/slider/Slider.tsx
const Slider_Slider=props=>{const{value,defaultValue,max,min,step,onChange,...containerProps}=props;return/*#__PURE__*/(0,jsx_runtime.jsx)(UIContainer.UIContainer,{...containerProps,className:'lc-slider',children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:'lc-slider-body',children:/*#__PURE__*/(0,jsx_runtime.jsx)(slider["default"],{max:max,min:min,step:step,defaultValue:defaultValue,value:value,onChange:onChange})})});};const RangeSlider=props=>{const{value,defaultValue,max,min,step,onChange,...containerProps}=props;return/*#__PURE__*/(0,jsx_runtime.jsx)(UIContainer.UIContainer,{...containerProps,className:'lc-slider',children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:'lc-slider-body',children:/*#__PURE__*/(0,jsx_runtime.jsx)(slider["default"],{max:max,min:min,step:step,defaultValue:defaultValue,value:value,range:true,onChange:onChange})})});};

/***/ }),

/***/ 86854:
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
___CSS_LOADER_EXPORT___.push([module.id, `.lc-slider {
  display: flex;
}
.lc-slider .lc-slider-body {
  padding: 0 3px;
}
.lc-slider .lc-slider-body .ant-slider {
  margin: 0;
  padding: 0;
  height: 0;
}
.lc-slider .lc-slider-body .ant-slider .ant-slider-rail,
.lc-slider .lc-slider-body .ant-slider .ant-slider-track {
  height: 2px;
  background-color: #b7b7b7;
}
.lc-slider .lc-slider-body .ant-slider .ant-slider-rail {
  background-color: #5e5e5e;
}
.lc-slider .lc-slider-body .ant-slider .ant-slider-handle {
  width: 14px;
  height: 14px;
  margin-top: -5.5px;
  background-color: #81818100;
  border: none;
}
.lc-slider .lc-slider-body .ant-slider .ant-slider-handle:after {
  background-color: #818181;
  box-shadow: 0 0 0 2px #818181;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);