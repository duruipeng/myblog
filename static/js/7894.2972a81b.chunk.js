"use strict";
(self["webpackChunknews"] = self["webpackChunknews"] || []).push([[7894],{

/***/ 87894:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ui_checkbox_CheckBox)
});

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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[2]!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[3]!./src/pages/Charts/json-schema/ui/checkbox/CheckBox.less
var CheckBox = __webpack_require__(51305);
;// ./src/pages/Charts/json-schema/ui/checkbox/CheckBox.less

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(CheckBox["default"], options);




       /* harmony default export */ const checkbox_CheckBox = (CheckBox["default"] && CheckBox["default"].locals ? CheckBox["default"].locals : undefined);

// EXTERNAL MODULE: ./src/pages/Charts/json-schema/ui/ui-container/UIContainer.tsx + 1 modules
var UIContainer = __webpack_require__(28232);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(37995);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(12955);
;// ./src/pages/Charts/json-schema/ui/checkbox/CheckBox.tsx
const CheckBox_CheckBox=props=>{const{value,defaultValue,disabled,onChange,...containerProps}=props;const controlled=value!==undefined&&defaultValue===undefined;const[stateValue,setStateValue]=(0,react.useState)(controlled?value:defaultValue);const _onChange=event=>{const checked=event.target.checked;if(!controlled)setStateValue(checked);onChange&&onChange(checked);};return/*#__PURE__*/(0,jsx_runtime.jsx)(UIContainer.UIContainer,{className:'lc-checkbox',...containerProps,children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{width:18},children:/*#__PURE__*/(0,jsx_runtime.jsxs)("label",{className:"lc-checkbox-container",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("input",{onChange:_onChange,checked:controlled?value:stateValue,disabled:disabled,type:"checkbox"}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"checkmark"})]})})});};/* harmony default export */ const ui_checkbox_CheckBox = (CheckBox_CheckBox);

/***/ }),

/***/ 51305:
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
___CSS_LOADER_EXPORT___.push([module.id, `.lc-checkbox .lc-checkbox-container {
  position: relative;
  cursor: pointer;
  font-size: 12px;
  width: 18px;
  -webkit-user-select: none;
          user-select: none;
}
.lc-checkbox .lc-checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.lc-checkbox .lc-checkbox-container .checkmark {
  position: relative;
  top: 0;
  left: 0;
  height: 13px;
  width: 13px;
  background: #606062;
  border-radius: 3px;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.3), 0 1px 1px rgba(0, 5);
}
.lc-checkbox .lc-checkbox-container .checkmark:after {
  content: "";
  position: absolute;
  display: none;
  left: 0.45em;
  top: 0.2em;
  width: 0.24em;
  height: 0.6em;
  border: solid white;
  border-width: 0 0.15em 0.15em 0;
  transform: rotate(45deg);
}
.lc-checkbox .lc-checkbox-container input:checked ~ .checkmark {
  background-image: linear-gradient(#255CD2, #1D52C1);
}
.lc-checkbox .lc-checkbox-container input:checked ~ .checkmark:after {
  display: block;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);