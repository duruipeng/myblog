"use strict";
(self["webpackChunknews"] = self["webpackChunknews"] || []).push([[8416,1122],{

/***/ 42054:
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
___CSS_LOADER_EXPORT___.push([module.id, `.base-text-component {
  --stroke-color: #000000;
  --stroke-width: 0;
  height: 100%;
  display: flex;
  -webkit-text-stroke-color: var(--stroke-color);
  -webkit-text-stroke-width: var(--stroke-width);
  stroke-color: var(--stroke-color);
  stroke-width: var(--stroke-width);
}
.base-text-component input {
  outline: none;
  width: 100%;
  background-color: rgba(255, 222, 173, 0);
  text-align: center;
  border: none;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 1122:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  BaseTextComponent: () => (/* binding */ BaseTextComponent_BaseTextComponent),
  "default": () => (/* binding */ lc_base_text_BaseTextComponent)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[2]!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[3]!./src/pages/Charts/comps/lc/base-text/BaseTextComponent.less
var BaseTextComponent = __webpack_require__(42054);
;// CONCATENATED MODULE: ./src/pages/Charts/comps/lc/base-text/BaseTextComponent.less

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(BaseTextComponent["default"], options);




       /* harmony default export */ const base_text_BaseTextComponent = (BaseTextComponent["default"] && BaseTextComponent["default"].locals ? BaseTextComponent["default"].locals : undefined);

// EXTERNAL MODULE: ./src/pages/Charts/designer/manager/LayerManager.ts
var LayerManager = __webpack_require__(40457);
// EXTERNAL MODULE: ./src/pages/Charts/designer/left/layer-list/LayerListStore.ts
var LayerListStore = __webpack_require__(63828);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7579);
;// CONCATENATED MODULE: ./src/pages/Charts/comps/lc/base-text/BaseTextComponent.tsx
const BaseTextComponent_BaseTextComponent=/*#__PURE__*/(0,react.forwardRef)((props,ref)=>{const[config,setConfig]=(0,react.useState)({...props});const{style,data}=config;const[edit,setEdit]=(0,react.useState)(false);const eventHandlerMap=(0,react.useRef)({});const textRef=(0,react.useRef)(null);(0,react.useImperativeHandle)(ref,()=>({updateConfig:newConfig=>setConfig({...newConfig}),setEventHandler:eventMap=>eventHandlerMap.current=eventMap}));const onClick=()=>{var _eventHandlerMap$curr,_eventHandlerMap$curr2;if('click'in eventHandlerMap.current)(_eventHandlerMap$curr=(_eventHandlerMap$curr2=eventHandlerMap.current)['click'])===null||_eventHandlerMap$curr===void 0?void 0:_eventHandlerMap$curr.call(_eventHandlerMap$curr2);};const strokeStyle={WebkitTextStrokeWidth:style===null||style===void 0?void 0:style.strokeWidth,WebkitTextStrokeColor:style===null||style===void 0?void 0:style.strokeColor};/**
     * 只在编辑模式下有效
     * @param e
     */const changeContent=e=>{var _config$base,_config$base2;data.staticData=e.target.value;// layerManager.layerConfigs[config.base?.id!].name = e.target.value;
const baseId=(_config$base=config.base)===null||_config$base===void 0?void 0:_config$base.id;if(baseId&&LayerManager["default"].layerConfigs[baseId]){const layerConfig=LayerManager["default"].layerConfigs[baseId];if(e.target&&e.target.value!==undefined){if(layerConfig&&layerConfig.name!==undefined){layerConfig.name=e.target.value;}}else{console.error("e.target or e.target.value is undefined");}}else{console.error("baseId or layerConfig is undefined");}const{layerInstances}=LayerListStore["default"];const layerInstance=layerInstances[(_config$base2=config.base)===null||_config$base2===void 0?void 0:_config$base2.id];layerInstance&&layerInstance.setState({name:e.target.value});};return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{onDoubleClick:()=>setEdit(true),ref:textRef,className:'base-text-component',style:{...style,...strokeStyle},onKeyDown:e=>e.stopPropagation(),onClick:onClick,children:edit?/*#__PURE__*/(0,jsx_runtime.jsx)("input",{ref:ref=>ref===null||ref===void 0?void 0:ref.select(),onChange:changeContent,onBlur:()=>setEdit(false),autoFocus:true,type:'text',defaultValue:data===null||data===void 0?void 0:data.staticData}):data===null||data===void 0?void 0:data.staticData});});/* harmony default export */ const lc_base_text_BaseTextComponent = (BaseTextComponent_BaseTextComponent);

/***/ }),

/***/ 78416:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseTextController: () => (/* binding */ BaseTextController)
/* harmony export */ });
/* harmony import */ var _designer_DesignerType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57404);
/* harmony import */ var _framework_core_AbstractDesignerController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50171);
/* harmony import */ var _utils_ComponentUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53090);
/* harmony import */ var _BaseTextComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1122);
/* harmony import */ var _utils_ObjectUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61178);
/* harmony import */ var _designer_blueprint_core_BPExecutor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19002);
/* harmony import */ var _utils_URLUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81300);
class BaseTextController extends _framework_core_AbstractDesignerController__WEBPACK_IMPORTED_MODULE_1__["default"]{async create(container,config){this.config=config;this.container=container;this.instance=await _utils_ComponentUtil__WEBPACK_IMPORTED_MODULE_2__["default"].createAndRender(container,_BaseTextComponent__WEBPACK_IMPORTED_MODULE_3__["default"],config);const{mode}=_utils_URLUtil__WEBPACK_IMPORTED_MODULE_5__["default"].parseUrlParams();//基础文本在编辑模式下放开事件，以实现双击直接进入编辑状态
if(mode===_designer_DesignerType__WEBPACK_IMPORTED_MODULE_0__.DesignerMode.EDIT)this.container.style.pointerEvents="auto";}destroy(){this.instance=null;this.config=null;}getConfig(){return this.config;}update(config,upOp){var _this$instance;this.config=_utils_ObjectUtil__WEBPACK_IMPORTED_MODULE_6__["default"].merge(this.config,config);upOp=upOp||{reRender:true};if(upOp.reRender)(_this$instance=this.instance)===null||_this$instance===void 0?void 0:_this$instance.updateConfig(this.config);}registerEvent(){if(this.instance){var _this$config,_this$config$base;const nodeId=(_this$config=this.config)===null||_this$config===void 0?void 0:(_this$config$base=_this$config.base)===null||_this$config$base===void 0?void 0:_this$config$base.id;this.instance.setEventHandler({click:()=>_designer_blueprint_core_BPExecutor__WEBPACK_IMPORTED_MODULE_4__["default"].triggerComponentEvent(nodeId,"click",this.config)});}}}

/***/ })

}]);