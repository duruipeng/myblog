"use strict";
(self["webpackChunknews"] = self["webpackChunknews"] || []).push([[3916,5221],{

/***/ 49338:
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
___CSS_LOADER_EXPORT___.push([module.id, `.date-time-component {
  width: 100%;
  height: 100%;
  display: flex;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 75221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  FormatType: () => (/* binding */ FormatType),
  "default": () => (/* binding */ lc_date_time_DateTimeComponent)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[2]!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[3]!./src/pages/Charts/comps/lc/date-time/DateTimeComponent.less
var DateTimeComponent = __webpack_require__(49338);
;// CONCATENATED MODULE: ./src/pages/Charts/comps/lc/date-time/DateTimeComponent.less

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(DateTimeComponent["default"], options);




       /* harmony default export */ const date_time_DateTimeComponent = (DateTimeComponent["default"] && DateTimeComponent["default"].locals ? DateTimeComponent["default"].locals : undefined);

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7579);
;// CONCATENATED MODULE: ./src/pages/Charts/comps/lc/date-time/DateTimeComponent.tsx
let FormatType=/*#__PURE__*/function(FormatType){FormatType["DASH"]="0";FormatType["SLASH"]="1";FormatType["CN"]="2";return FormatType;}({});// 2021年01月01日 12时00分00秒
function formatDateTime(format){const current=new Date();// 获取年、月、日
const year=current.getFullYear();const month=(current.getMonth()+1).toString().padStart(2,'0');const day=current.getDate().toString().padStart(2,'0');// 获取小时、分钟、秒
const hours=current.getHours().toString().padStart(2,'0');const minutes=current.getMinutes().toString().padStart(2,'0');const seconds=current.getSeconds().toString().padStart(2,'0');switch(format){case FormatType.SLASH:return`${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;case FormatType.CN:return`${year}年${month}月${day}日 ${hours}时${minutes}分${seconds}秒`;default:return`${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;}}const DateTimeComponent_DateTimeComponent=/*#__PURE__*/react.forwardRef((props,ref)=>{const[config,setConfig]=(0,react.useState)({...props});const{formatType=FormatType.CN,...style}=config===null||config===void 0?void 0:config.style;const[datetime,setDateTime]=(0,react.useState)(formatDateTime(formatType));const timeRef=(0,react.useRef)(null);const eventHandlerMap=(0,react.useRef)({});(0,react.useEffect)(()=>{timeRef.current=setInterval(()=>{setDateTime(()=>{var _config$style;return formatDateTime((_config$style=config.style)===null||_config$style===void 0?void 0:_config$style.formatType);});},1000);},[]);(0,react.useImperativeHandle)(ref,()=>({updateConfig:newConfig=>setConfig({...newConfig}),setEventHandler:eventMap=>eventHandlerMap.current=eventMap,destroy:()=>{timeRef.current&&clearInterval(timeRef.current);timeRef.current=null;}}));return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"date-time-component",style:{...style},children:datetime});});/* harmony default export */ const lc_date_time_DateTimeComponent = (DateTimeComponent_DateTimeComponent);

/***/ }),

/***/ 33916:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateTimeController: () => (/* binding */ DateTimeController)
/* harmony export */ });
/* harmony import */ var _framework_core_AbstractDesignerController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50171);
/* harmony import */ var _utils_ComponentUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53090);
/* harmony import */ var _DateTimeComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75221);
/* harmony import */ var _utils_ObjectUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61178);
/* harmony import */ var _designer_blueprint_core_BPExecutor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19002);
class DateTimeController extends _framework_core_AbstractDesignerController__WEBPACK_IMPORTED_MODULE_0__["default"]{async create(container,config){this.config=config;this.container=container;this.instance=await _utils_ComponentUtil__WEBPACK_IMPORTED_MODULE_1__["default"].createAndRender(container,_DateTimeComponent__WEBPACK_IMPORTED_MODULE_2__["default"],config);}destroy(){var _this$instance;(_this$instance=this.instance)===null||_this$instance===void 0?void 0:_this$instance.destroy();this.instance=null;this.config=null;}getConfig(){return this.config;}update(config,upOp){var _this$instance2;this.config=_utils_ObjectUtil__WEBPACK_IMPORTED_MODULE_4__["default"].merge(this.config,config);upOp=upOp||{reRender:true};if(upOp.reRender)(_this$instance2=this.instance)===null||_this$instance2===void 0?void 0:_this$instance2.updateConfig(this.config);}updateTheme(newTheme){}registerEvent(){var _this$config,_this$config$base,_this$instance3;const nodeId=(_this$config=this.config)===null||_this$config===void 0?void 0:(_this$config$base=_this$config.base)===null||_this$config$base===void 0?void 0:_this$config$base.id;(_this$instance3=this.instance)===null||_this$instance3===void 0?void 0:_this$instance3.setEventHandler({click:()=>_designer_blueprint_core_BPExecutor__WEBPACK_IMPORTED_MODULE_3__["default"].triggerComponentEvent(nodeId,"click",this.config)});}}

/***/ })

}]);