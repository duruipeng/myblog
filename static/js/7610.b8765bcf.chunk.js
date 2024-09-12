"use strict";
(self["webpackChunknews"] = self["webpackChunknews"] || []).push([[7610],{

/***/ 5345:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71884);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7509);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.lc-accordion {
  color: #e4f4ff;
  background-color: rgba(0, 0, 0, 0);
}
.lc-accordion .accordion-header {
  font-size: 14px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #e4f4ff;
  cursor: pointer;
  padding: 10px 0;
  width: 100%;
  text-align: left;
  border-bottom: none;
  outline: none;
  transition: 0.4s;
}
.lc-accordion .accordion-header .title-switch .accordion-icon {
  display: inline-block;
  transition: transform 0.2s;
  transform: rotate(0deg);
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.lc-accordion .accordion-active,
.lc-accordion .accordion-header:hover {
  background-color: rgba(0, 0, 0, 0);
}
.lc-accordion .accordion-active .title-switch .accordion-icon {
  transition: transform 0.2s;
  transform: rotate(90deg);
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.lc-accordion .lc-accordion-body {
  padding: 0 5px;
  background-color: rgba(0, 0, 0, 0);
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 67610:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Accordion_Accordion)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(48331);
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[2]!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[3]!./src/pages/Charts/json-schema/ui/accordion/Accordion.less
var Accordion = __webpack_require__(5345);
;// CONCATENATED MODULE: ./src/pages/Charts/json-schema/ui/accordion/Accordion.less

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Accordion["default"], options);




       /* harmony default export */ const accordion_Accordion = (Accordion["default"] && Accordion["default"].locals ? Accordion["default"].locals : undefined);

// EXTERNAL MODULE: ./src/pages/Charts/json-schema/ui/switch/Switch.tsx + 1 modules
var Switch = __webpack_require__(30825);
// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/index.js + 6 modules
var tooltip = __webpack_require__(85107);
// EXTERNAL MODULE: ./node_modules/@icon-park/react/es/icons/Help.js
var Help = __webpack_require__(37281);
// EXTERNAL MODULE: ./node_modules/@icon-park/react/es/icons/Right.js
var Right = __webpack_require__(84218);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7579);
;// CONCATENATED MODULE: ./src/pages/Charts/json-schema/ui/accordion/Accordion.tsx
/**
 * 手风琴组件
 * 说明:该组件的。 Title属性show switch属性。 都是非受控的属性。 也就是说只能在创建这个组件的时候就确定这两个属性的值，
 * 后续是无法改变的。 除非销毁这个组件之后重新创建组件。 Value属性和defaultValue属性。 两者任选其一。 如果你使用value属性。
 * 则这个组件的值是受控的。 可以通过外部控制来更新这个组件的状态值。 如果你使用的是defaultValue属性，则这个组件的值是非受控的。
 * 操作这个组件的时候。 组件值，由本组件自身维护，不受外部控制。
 */function Accordion_Accordion(props){const{label,tip,showSwitch,value,defaultValue,titleStyle,bodyStyle,onChange,children}=props;const accordionBodyRef=(0,react.useRef)(null);const headerRef=(0,react.useRef)(null);const controlled=value!==undefined&&defaultValue===undefined;const[stateValue,setStateValue]=(0,react.useState)(controlled?!!value:!!defaultValue);const finalValue=controlled?value:stateValue;const titleClickMode=()=>{var _headerRef$current;calculateFold(!(headerRef!==null&&headerRef!==void 0&&(_headerRef$current=headerRef.current)!==null&&_headerRef$current!==void 0&&_headerRef$current.classList.contains("accordion-active")));};const calculateFold=_value=>{var _headerRef$current2;if(!headerRef.current||!accordionBodyRef.current)return;if(!showSwitch)headerRef===null||headerRef===void 0?void 0:(_headerRef$current2=headerRef.current)===null||_headerRef$current2===void 0?void 0:_headerRef$current2.classList.toggle("accordion-active");if(_value)accordionBodyRef.current.style.display='block';else accordionBodyRef.current.style.display='none';};const switchChange=_value=>{calculateFold(_value);onChange&&onChange(_value);if(!controlled)setStateValue(_value);};(0,react.useEffect)(()=>{if(!showSwitch){var _headerRef$current3;//普通模式
headerRef===null||headerRef===void 0?void 0:(_headerRef$current3=headerRef.current)===null||_headerRef$current3===void 0?void 0:_headerRef$current3.addEventListener("click",titleClickMode);accordionBodyRef.current.style.display='none';}if(showSwitch&&finalValue)accordionBodyRef.current.style.display='block';//开关模式处于开启
else accordionBodyRef.current.style.display='none';//开关模式处于关闭
return()=>{var _headerRef$current4;return headerRef===null||headerRef===void 0?void 0:(_headerRef$current4=headerRef.current)===null||_headerRef$current4===void 0?void 0:_headerRef$current4.removeEventListener("click",titleClickMode);};},[]);return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:'lc-accordion',children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"accordion-header",ref:headerRef,style:{...titleStyle},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:'title-content',children:[label," \xA0",tip&&/*#__PURE__*/(0,jsx_runtime.jsxs)(tooltip["default"],{title:tip,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Help["default"],{}),"\xA0\xA0"]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:'title-switch',children:showSwitch?/*#__PURE__*/(0,jsx_runtime.jsx)(Switch["default"],{value:finalValue,onChange:switchChange}):/*#__PURE__*/(0,jsx_runtime.jsx)(Right["default"],{size:16,className:'accordion-icon'})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"lc-accordion-body",style:{...bodyStyle},ref:accordionBodyRef,children:children})]});}

/***/ }),

/***/ 84218:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48331);
/* harmony import */ var _runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88718);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_runtime__WEBPACK_IMPORTED_MODULE_1__.IconWrapper)('right', true, function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    width: props.size,
    height: props.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M19 12L31 24L19 36",
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap,
    strokeLinejoin: props.strokeLinejoin
  }));
}));

/***/ })

}]);