"use strict";
(self["webpackChunknews"] = self["webpackChunknews"] || []).push([[5968,6162],{

/***/ 86162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ four_angle_glow_border_FourAngleGlowBorder)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[2]!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[3]!./src/pages/Charts/comps/lc/four-angle-glow-border/FourAngleGloeBorder.less
var FourAngleGloeBorder = __webpack_require__(3279);
;// ./src/pages/Charts/comps/lc/four-angle-glow-border/FourAngleGloeBorder.less

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(FourAngleGloeBorder["default"], options);




       /* harmony default export */ const four_angle_glow_border_FourAngleGloeBorder = (FourAngleGloeBorder["default"] && FourAngleGloeBorder["default"].locals ? FourAngleGloeBorder["default"].locals : undefined);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(37995);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(12955);
;// ./src/pages/Charts/comps/lc/four-angle-glow-border/FourAngleGlowBorder.tsx
const FourAngleGlowBorder=/*#__PURE__*/(0,react.forwardRef)((props,ref)=>{const[config]=(0,react.useState)({...props});const fourAngleGlowRef=(0,react.useRef)(null);const eventHandlerMap=(0,react.useRef)({});const updateStyle=config=>{var _fourAngleGlowRef$cur,_fourAngleGlowRef$cur2,_fourAngleGlowRef$cur3,_fourAngleGlowRef$cur4;(_fourAngleGlowRef$cur=fourAngleGlowRef.current)===null||_fourAngleGlowRef$cur===void 0?void 0:_fourAngleGlowRef$cur.style.setProperty('--fagb-length',`${config===null||config===void 0?void 0:config.length}px`);(_fourAngleGlowRef$cur2=fourAngleGlowRef.current)===null||_fourAngleGlowRef$cur2===void 0?void 0:_fourAngleGlowRef$cur2.style.setProperty('--fagb-color',config.color);(_fourAngleGlowRef$cur3=fourAngleGlowRef.current)===null||_fourAngleGlowRef$cur3===void 0?void 0:_fourAngleGlowRef$cur3.style.setProperty('--fagb-radius',`${config===null||config===void 0?void 0:config.radius}px`);(_fourAngleGlowRef$cur4=fourAngleGlowRef.current)===null||_fourAngleGlowRef$cur4===void 0?void 0:_fourAngleGlowRef$cur4.style.setProperty('--fagb-width',`${config===null||config===void 0?void 0:config.width}px`);};(0,react.useImperativeHandle)(ref,()=>({updateConfig:newConfig=>updateStyle({...newConfig}),setEventHandler:eventMap=>eventHandlerMap.current=eventMap}));(0,react.useEffect)(()=>{updateStyle(config.style);});return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"four-angle-glow",ref:fourAngleGlowRef,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:"angle angle-tl"}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:"angle angle-tr"}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:"angle angle-bl"}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:"angle angle-br"})]});});/* harmony default export */ const four_angle_glow_border_FourAngleGlowBorder = (FourAngleGlowBorder);

/***/ }),

/***/ 15968:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FourAngleGlowBorderController: () => (/* binding */ FourAngleGlowBorderController)
/* harmony export */ });
/* harmony import */ var _framework_core_AbstractDesignerController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56571);
/* harmony import */ var _utils_ComponentUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42850);
/* harmony import */ var _utils_ObjectUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69946);
/* harmony import */ var _designer_blueprint_core_BPExecutor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17498);
/* harmony import */ var _FourAngleGlowBorder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86162);
class FourAngleGlowBorderController extends _framework_core_AbstractDesignerController__WEBPACK_IMPORTED_MODULE_0__["default"]{async create(container,config){this.config=config;this.container=container;this.instance=await _utils_ComponentUtil__WEBPACK_IMPORTED_MODULE_1__["default"].createAndRender(container,_FourAngleGlowBorder__WEBPACK_IMPORTED_MODULE_3__["default"],config);}destroy(){this.instance=null;this.config=null;}getConfig(){return this.config;}update(config,upOp){var _this$instance;this.config=_utils_ObjectUtil__WEBPACK_IMPORTED_MODULE_4__["default"].merge(this.config,config);upOp=upOp||{reRender:true};if(upOp.reRender)(_this$instance=this.instance)===null||_this$instance===void 0?void 0:_this$instance.updateConfig(this.config.style);}updateTheme(newTheme){}registerEvent(){var _this$config,_this$config$base,_this$instance2;const nodeId=(_this$config=this.config)===null||_this$config===void 0?void 0:(_this$config$base=_this$config.base)===null||_this$config$base===void 0?void 0:_this$config$base.id;(_this$instance2=this.instance)===null||_this$instance2===void 0?void 0:_this$instance2.setEventHandler({click:()=>_designer_blueprint_core_BPExecutor__WEBPACK_IMPORTED_MODULE_2__["default"].triggerComponentEvent(nodeId,"click",this.config)});}}

/***/ }),

/***/ 3279:
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
___CSS_LOADER_EXPORT___.push([module.id, `.four-angle-glow {
  --fagb-color: #00ebff;
  --fagb-width: 2px;
  --fagb-length: 8px;
  --fagb-radius: 3px;
  width: 100%;
  height: 100%;
  position: relative;
}
.four-angle-glow .angle {
  position: absolute;
  border: var(--fagb-width) solid var(--fagb-color);
  width: var(--fagb-length);
  height: var(--fagb-length);
}
.four-angle-glow .angle-tl {
  margin: -1px 0 0 -1px;
  border-right: 0;
  border-bottom: 0;
  border-top-left-radius: var(--fagb-radius);
}
.four-angle-glow .angle-tr {
  top: 0;
  right: 0;
  border-left: 0;
  border-bottom: 0;
  margin: -1px -1px 0 0;
  border-top-right-radius: var(--fagb-radius);
}
.four-angle-glow .angle-bl {
  bottom: 0;
  left: 0;
  border-top: 0;
  border-right: 0;
  margin: 0 0 -1px -1px;
  border-bottom-left-radius: var(--fagb-radius);
}
.four-angle-glow .angle-br {
  bottom: 0;
  right: 0;
  border-left: 0;
  border-top: 0;
  margin: 0 -1px -1px 0;
  border-bottom-right-radius: var(--fagb-radius);
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);