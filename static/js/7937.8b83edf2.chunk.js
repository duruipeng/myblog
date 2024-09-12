"use strict";
(self["webpackChunknews"] = self["webpackChunknews"] || []).push([[7937,8306],{

/***/ 80855:
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
___CSS_LOADER_EXPORT___.push([module.id, `.antd-carousel div,
.antd-carousel img {
  width: 100%;
  height: 100%;
  pointer-events: none !important;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 88306:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ lc_carousel_CarouselComponent)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(48331);
// EXTERNAL MODULE: ./node_modules/antd/es/carousel/index.js + 11 modules
var carousel = __webpack_require__(18492);
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[2]!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[3]!./src/pages/Charts/comps/lc/carousel/CarouselComponent.less
var CarouselComponent = __webpack_require__(80855);
;// CONCATENATED MODULE: ./src/pages/Charts/comps/lc/carousel/CarouselComponent.less

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(CarouselComponent["default"], options);




       /* harmony default export */ const carousel_CarouselComponent = (CarouselComponent["default"] && CarouselComponent["default"].locals ? CarouselComponent["default"].locals : undefined);

// EXTERNAL MODULE: ./src/pages/Charts/comps/lc/carousel/carousel.png
var carousel_carousel = __webpack_require__(30959);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7579);
;// CONCATENATED MODULE: ./src/pages/Charts/comps/lc/carousel/CarouselComponent.tsx
const CarouselComponent_CarouselComponent=/*#__PURE__*/react.forwardRef((props,ref)=>{var _config$data;const[config,setConfig]=(0,react.useState)({...props});const eventHandlerMap=(0,react.useRef)({});(0,react.useImperativeHandle)(ref,()=>({updateConfig:newConfig=>setConfig({...newConfig}),setEventHandler:eventMap=>eventHandlerMap.current=eventMap}));// const onClick = () => {
//     if ('click' in eventHandlerMap.current) {
//         eventHandlerMap.current['click']();
//     }
// }
const data=(config===null||config===void 0?void 0:(_config$data=config.data)===null||_config$data===void 0?void 0:_config$data.staticData)||[carousel_carousel,carousel_carousel];return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{width:'100%',height:'100%',overflow:'hidden'},className:'antd-carousel',children:/*#__PURE__*/(0,jsx_runtime.jsx)(carousel["default"],{...config.style,children:data.map((src,index)=>{return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)("img",{alt:'轮播图'+index,src:src})},index);})})});});/* harmony default export */ const lc_carousel_CarouselComponent = (CarouselComponent_CarouselComponent);

/***/ }),

/***/ 57937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CarouselController: () => (/* binding */ CarouselController)
/* harmony export */ });
/* harmony import */ var _framework_core_AbstractDesignerController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50171);
/* harmony import */ var _utils_ComponentUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53090);
/* harmony import */ var _CarouselComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88306);
/* harmony import */ var _utils_ObjectUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61178);
/* harmony import */ var _designer_blueprint_core_BPExecutor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19002);
class CarouselController extends _framework_core_AbstractDesignerController__WEBPACK_IMPORTED_MODULE_0__["default"]{async create(container,config){this.config=config;this.container=container;this.instance=await _utils_ComponentUtil__WEBPACK_IMPORTED_MODULE_1__["default"].createAndRender(container,_CarouselComponent__WEBPACK_IMPORTED_MODULE_2__["default"],config);}destroy(){this.instance=null;this.config=null;}getConfig(){return this.config;}changeData(data){var _this$instance;this.config.data.staticData=data;(_this$instance=this.instance)===null||_this$instance===void 0?void 0:_this$instance.updateConfig(this.config);}update(config,upOp){var _this$instance2;this.config=_utils_ObjectUtil__WEBPACK_IMPORTED_MODULE_4__["default"].merge(this.config,config);upOp=upOp||{reRender:true};if(upOp.reRender)(_this$instance2=this.instance)===null||_this$instance2===void 0?void 0:_this$instance2.updateConfig(this.config);}updateTheme(newTheme){}registerEvent(){var _this$config,_this$config$base,_this$instance3;const nodeId=(_this$config=this.config)===null||_this$config===void 0?void 0:(_this$config$base=_this$config.base)===null||_this$config$base===void 0?void 0:_this$config$base.id;(_this$instance3=this.instance)===null||_this$instance3===void 0?void 0:_this$instance3.setEventHandler({click:()=>_designer_blueprint_core_BPExecutor__WEBPACK_IMPORTED_MODULE_3__["default"].triggerComponentEvent(nodeId,"click",this.config)});}}

/***/ }),

/***/ 30959:
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALkAAAB0CAIAAABWuQRhAAACEUlEQVR4Xu3Su0lDYQCA0VsqNheygBJSOJOCjx0MARGboAgJOISkso2II7iUtn/xjXDgjHCm+ebp9OWL0WJzOL/fr662jKazx8P0/cdofv9dPnxebo6MXAmuJFeCK8mV4EpyJbiSXAmuJFeCK8mV4EpyJbiSXAmuJFeCK8mV4EpyJbiSXAmuJFeCK8mV4EpyJbiSXAmuJFeCK8mV4EpyJbiSXAmuJFeCK8mV4EpyJbiSXAmuJFeCK8mV4EpyJbiSXAmuJFeCK8mV4EpyJbiSXAmuJFeCK8mV4EpyJbiSXAmuJFeCK8mV4EpyJbiSXAmuJFeCK8mV4EpyJbiSXAmuJFeCK8mV4EpyJbiSXAmuJFeCK8mV4EpyJbiSXAmuJFeCK8mV4EpyJbiSXAmuJFeCK8mV4EpyJbiSXAmuJFeCK8mV4EpyJbiSXAmuJFeCK8mV4EpyJbiSXAmuJFeCK8mV4EpyJbiSXAmuJFeCK8mV4EpyJbiSXAmuJFeCK8mV4EpyJbiSXAmuJFeCK8mV4EpyJbiSXAmuJFeCK8mV4EpyJbiSXAmuJFeCK8mV4EpyJbiSXAmuJFeCK8mV4EpyJbiSXAmuJFeCK8mV4EpyJbiSXAmuJFeCK8mV4EpyJbiSXAmuJFeCK8mV4EpyJbiSXAmuJFeCK8mV4EpyJbiSXAmupGm+fT55+2G0WH9c3O1W16+M/gF8lQkeh5ge1AAAAABJRU5ErkJggg==";

/***/ })

}]);