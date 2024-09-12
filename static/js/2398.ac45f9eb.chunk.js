"use strict";
(self["webpackChunknews"] = self["webpackChunknews"] || []).push([[2398,1221],{

/***/ 31221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48331);
/* harmony import */ var flv_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64450);
/* harmony import */ var flv_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flv_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7579);
const FlvPlayerComponent=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props,ref)=>{const[config,setConfig]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({...props});const eventHandlerMap=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});const videoRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);const playerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);const{url}=config.style;const destroy=()=>{if(playerRef.current){playerRef.current.pause();playerRef.current.unload();playerRef.current.detachMediaElement();playerRef.current.destroy();playerRef.current=null;}};(0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref,()=>({updateConfig:newConfig=>setConfig({...newConfig}),setEventHandler:eventMap=>eventHandlerMap.current=eventMap,destroy:()=>destroy()}));(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(flv_js__WEBPACK_IMPORTED_MODULE_1___default().isSupported()){const player=flv_js__WEBPACK_IMPORTED_MODULE_1___default().createPlayer({type:'flv',url:url});player.attachMediaElement(videoRef.current);player.load();player.play();playerRef.current=player;}return()=>destroy();},[url]);const onClick=()=>{if('click'in eventHandlerMap.current){var _eventHandlerMap$curr,_eventHandlerMap$curr2;(_eventHandlerMap$curr=(_eventHandlerMap$curr2=eventHandlerMap.current)['click'])===null||_eventHandlerMap$curr===void 0?void 0:_eventHandlerMap$curr.call(_eventHandlerMap$curr2);}};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("video",{style:{height:'100%',width:'100%'},ref:videoRef,controls:true,onClick:onClick});});/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FlvPlayerComponent);

/***/ }),

/***/ 12398:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlvPlayerController: () => (/* binding */ FlvPlayerController)
/* harmony export */ });
/* harmony import */ var _framework_core_AbstractDesignerController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50171);
/* harmony import */ var _utils_ComponentUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53090);
/* harmony import */ var _FlvPlayerComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31221);
/* harmony import */ var _utils_ObjectUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61178);
/* harmony import */ var _designer_blueprint_core_BPExecutor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19002);
class FlvPlayerController extends _framework_core_AbstractDesignerController__WEBPACK_IMPORTED_MODULE_0__["default"]{async create(container,config){this.config=config;this.container=container;this.instance=await _utils_ComponentUtil__WEBPACK_IMPORTED_MODULE_1__["default"].createAndRender(container,_FlvPlayerComponent__WEBPACK_IMPORTED_MODULE_2__["default"],config);}destroy(){var _this$instance;(_this$instance=this.instance)===null||_this$instance===void 0?void 0:_this$instance.destroy();this.instance=null;this.config=null;}getConfig(){return this.config;}update(config,upOp){var _this$instance2;this.config=_utils_ObjectUtil__WEBPACK_IMPORTED_MODULE_4__["default"].merge(this.config,config);upOp=upOp||{reRender:true};if(upOp.reRender)(_this$instance2=this.instance)===null||_this$instance2===void 0?void 0:_this$instance2.updateConfig(this.config);}registerEvent(){var _this$config,_this$config$base,_this$instance3;const nodeId=(_this$config=this.config)===null||_this$config===void 0?void 0:(_this$config$base=_this$config.base)===null||_this$config$base===void 0?void 0:_this$config$base.id;(_this$instance3=this.instance)===null||_this$instance3===void 0?void 0:_this$instance3.setEventHandler({click:()=>_designer_blueprint_core_BPExecutor__WEBPACK_IMPORTED_MODULE_3__["default"].triggerComponentEvent(nodeId,"click",this.config)});}}

/***/ })

}]);