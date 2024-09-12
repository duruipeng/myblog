"use strict";
(self["webpackChunknews"] = self["webpackChunknews"] || []).push([[3854],{

/***/ 36820:
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
___CSS_LOADER_EXPORT___.push([module.id, `.text-scroller-container {
  --speed: 10s;
  --container-width: 320px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
}
.text-scroller-container .text-scroller {
  height: inherit;
  position: absolute;
  animation: scrollText var(--speed) linear infinite;
  animation-name: none;
  color: white;
  display: flex;
  align-items: center;
}
@keyframes scrollText {
  0% {
    transform: translateX(var(--container-width));
  }
  100% {
    transform: translateX(-100%);
  }
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 63854:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ lc_text_scroller_TextScrollerComponent)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[2]!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[3]!./src/pages/Charts/comps/lc/text-scroller/TextScrollerComponent.less
var TextScrollerComponent = __webpack_require__(36820);
;// CONCATENATED MODULE: ./src/pages/Charts/comps/lc/text-scroller/TextScrollerComponent.less

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(TextScrollerComponent["default"], options);




       /* harmony default export */ const text_scroller_TextScrollerComponent = (TextScrollerComponent["default"] && TextScrollerComponent["default"].locals ? TextScrollerComponent["default"].locals : undefined);

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(85640);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7579);
;// CONCATENATED MODULE: ./src/pages/Charts/comps/lc/text-scroller/TextScrollerComponent.tsx
const TextScrollerComponent_TextScrollerComponent=/*#__PURE__*/react.forwardRef((props,ref)=>{var _config$data;const[config,setConfig]=(0,react.useState)({...props});const{speed,...rest}=config.style;const eventHandlerMap=(0,react.useRef)({});const textScrollerRef=(0,react.useRef)(null);const textContainerRef=(0,react.useRef)(null);const resizeObserverRef=(0,react.useRef)(null);(0,react.useImperativeHandle)(ref,()=>({updateConfig:newConfig=>setConfig({...newConfig}),setEventHandler:eventMap=>eventHandlerMap.current=eventMap}));(0,react.useEffect)(()=>{if(textContainerRef.current){resizeObserverRef.current=new ResizeObserver((0,lodash.debounce)(entries=>{for(const entry of entries){const{width}=entry.contentRect;textContainerRef.current.style.setProperty('--container-width',`${width}px`);}},100));// 开始观察
resizeObserverRef.current.observe(textContainerRef.current);}},[]);(0,react.useEffect)(()=>{var _textContainerRef$cur;(_textContainerRef$cur=textContainerRef.current)===null||_textContainerRef$cur===void 0?void 0:_textContainerRef$cur.style.setProperty('--speed',`${speed||5}s`);},[config]);return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"text-scroller-container",ref:textContainerRef,children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"text-scroller",style:{...rest},ref:textScrollerRef,children:config===null||config===void 0?void 0:(_config$data=config.data)===null||_config$data===void 0?void 0:_config$data.staticData})});});/* harmony default export */ const lc_text_scroller_TextScrollerComponent = (TextScrollerComponent_TextScrollerComponent);

/***/ })

}]);