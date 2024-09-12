"use strict";
(self["webpackChunknews"] = self["webpackChunknews"] || []).push([[55],{

/***/ 60055:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48331);
/* harmony import */ var hls_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33412);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7579);
const HlsPlayerComponent=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props,ref)=>{const[config,setConfig]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({...props});const eventHandlerMap=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});const videoRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);const playerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);const{url}=config.style;const destroy=()=>{if(playerRef.current){var _playerRef$current;(_playerRef$current=playerRef.current)===null||_playerRef$current===void 0?void 0:_playerRef$current.destroy();playerRef.current=null;}};(0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref,()=>({updateConfig:newConfig=>setConfig({...newConfig}),setEventHandler:eventMap=>eventHandlerMap.current=eventMap,destroy:()=>destroy()}));(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(hls_js__WEBPACK_IMPORTED_MODULE_1__["default"].isSupported()){const hls=new hls_js__WEBPACK_IMPORTED_MODULE_1__["default"]();hls.loadSource(url);hls.attachMedia(videoRef.current);hls.on(hls_js__WEBPACK_IMPORTED_MODULE_1__["default"].Events.MANIFEST_PARSED,()=>{videoRef.current.play();});playerRef.current=hls;}else if(videoRef.current.canPlayType('application/vnd.apple.mpegurl')){videoRef.current.src=url;videoRef.current.addEventListener('loadedmetadata',()=>{videoRef.current.play();});}return()=>destroy();},[url]);const onClick=()=>{if('click'in eventHandlerMap.current){var _eventHandlerMap$curr,_eventHandlerMap$curr2;(_eventHandlerMap$curr=(_eventHandlerMap$curr2=eventHandlerMap.current)['click'])===null||_eventHandlerMap$curr===void 0?void 0:_eventHandlerMap$curr.call(_eventHandlerMap$curr2);}};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("video",{style:{height:'100%',width:'100%'},ref:videoRef,controls:true,onClick:onClick});});/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HlsPlayerComponent);

/***/ })

}]);