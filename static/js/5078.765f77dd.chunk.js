"use strict";
(self["webpackChunknews"] = self["webpackChunknews"] || []).push([[5078],{

/***/ 85078:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48331);
/* harmony import */ var _framework_drag_scale_DragScaleProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65312);
/* harmony import */ var _operate_provider_EventOperateStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20357);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81015);
/* harmony import */ var _framework_core_ScaleAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88538);
/* harmony import */ var _header_items_canvas_CanvasManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31218);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7579);
const DesignerDragScaleContainer=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)((0,mobx_react__WEBPACK_IMPORTED_MODULE_6__.observer)(props=>{const{children,onDoubleClick}=props;const containerRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);const contentRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);const{canvasConfig}=_header_items_canvas_CanvasManager__WEBPACK_IMPORTED_MODULE_4__["default"];(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{const container=containerRef.current;const content=contentRef.current;if(container&&content){const{setDsContentRef}=_operate_provider_EventOperateStore__WEBPACK_IMPORTED_MODULE_2__["default"];setDsContentRef(content);const dragScaleProvider=new _framework_drag_scale_DragScaleProvider__WEBPACK_IMPORTED_MODULE_1__["default"]({container,content,scaleCallback:dsData=>{const{scale,ratio}=dsData;const{setScale,setRatio,rulerRef}=_operate_provider_EventOperateStore__WEBPACK_IMPORTED_MODULE_2__["default"];setScale(scale);setRatio(ratio);rulerRef===null||rulerRef===void 0?void 0:rulerRef.ruleWheel();_framework_core_ScaleAction__WEBPACK_IMPORTED_MODULE_3__["default"].doScale(dsData.scale,dsData.scale);},dragCallback:()=>{const{rulerRef}=_operate_provider_EventOperateStore__WEBPACK_IMPORTED_MODULE_2__["default"];rulerRef===null||rulerRef===void 0?void 0:rulerRef.ruleDrag();}});return()=>{dragScaleProvider.destroy();};}return()=>{// 清理函数
//这个错误提示表示在你的 useEffect 钩子中，某些代码路径没有返回值。useEffect 本身不需要返回值，但如果你在 useEffect 中使用了一个清理函数（cleanup function），就需要确保所有的代码路径都正确返回。
};},[]);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:'designer-ds-container',ref:containerRef,style:{overflow:"hidden",height:window.innerHeight-110,width:window.innerWidth-115,backgroundColor:'#434343',position:'relative'},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:'designer-ds-content lc-drag-scale-provider',id:'designer-ds-content',ref:contentRef,onDoubleClick:onDoubleClick,style:{width:canvasConfig===null||canvasConfig===void 0?void 0:canvasConfig.width,height:canvasConfig===null||canvasConfig===void 0?void 0:canvasConfig.height,background:'#1c1c1c',position:'absolute'},children:children})});}));/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DesignerDragScaleContainer);

/***/ }),

/***/ 65312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DragScaleProvider)
});

;// CONCATENATED MODULE: ./src/pages/Charts/designer/operate-provider/scale/ScaleCore.ts
/**
 * 缩放参数计算核心类
 */class ScaleCore{constructor(){this.max=3;this.min=0.05;this.scale=1;this.ratio=1;this.compute=type=>{let _ratio=1.2;// 缩小
if(type===0)_ratio=1/1.2;// 限制缩放倍数
let _scale=this.scale*_ratio;if(_scale>this.max){_ratio=this.max/this.scale;_scale=this.max;}else if(_scale<this.min){_ratio=this.min/this.scale;_scale=this.min;}this.scale=_scale;this.ratio=_ratio;};}}const scaleCore=new ScaleCore();/* harmony default export */ const scale_ScaleCore = (scaleCore);
;// CONCATENATED MODULE: ./src/pages/Charts/framework/drag-scale/DragScaleProvider.tsx
/**
 * 拖拽缩放容器，独立提供拖拽与缩放功能。
 * 1.拖拽画布统一操作方式为长按鼠标右键
 * 2.缩放画布统一操作方式alt+鼠标滚轮
 * 上述两种操作的相关事件均在此组件内部完成（除缩放逻辑外，缩放逻辑调用外部方法获取scale比例）
 *
 * 主编辑器、蓝图编辑器均使用该类提供拖拽缩放功能
 */class DragScaleProvider{constructor(params){this.container=null;this.content=null;this.position={x:0,y:0};this.dragCallback=void 0;this.scaleCallback=void 0;this.dragStartCallback=void 0;this.dragEndCallback=void 0;this.scaleCore=new ScaleCore();this.contextMenu=e=>e.preventDefault();this.onDragStart=()=>{var _this$container;return(_this$container=this.container)===null||_this$container===void 0?void 0:_this$container.addEventListener('pointerdown',this.pointerDown);};this.onDragMove=e=>{if(e.buttons===2){this.position.x+=e.movementX;this.position.y+=e.movementY;this.content.style.transform='translate3d('+this.position.x+'px, '+this.position.y+'px, 0) scale('+this.scaleCore.scale+')';if(this.dragCallback){const{scale,ratio}=this.scaleCore;this.dragCallback({scale,ratio,position:this.position},e);}}};this.onDragEnd=()=>{var _this$container2;return(_this$container2=this.container)===null||_this$container2===void 0?void 0:_this$container2.addEventListener('pointerup',this.pointerUp);};this.pointerDown=e=>{if(e.button===2){var _this$container3,_this$container4;//设置鼠标捕获，当鼠标移出视口外时，仍然能够监听到鼠标移动事件
(_this$container3=this.container)===null||_this$container3===void 0?void 0:_this$container3.setPointerCapture(e.pointerId);//监听拖拽移动
(_this$container4=this.container)===null||_this$container4===void 0?void 0:_this$container4.addEventListener('pointermove',this.onDragMove);if(this.dragStartCallback){const{scale,ratio}=this.scaleCore;this.dragStartCallback({scale,ratio,position:this.position},e);}}};this.pointerUp=e=>{if(e.button===2){var _this$container5,_this$container6;(_this$container5=this.container)===null||_this$container5===void 0?void 0:_this$container5.releasePointerCapture(e.pointerId);//取消拖拽移动监听
(_this$container6=this.container)===null||_this$container6===void 0?void 0:_this$container6.removeEventListener('pointermove',this.onDragMove);if(this.dragEndCallback){const{scale,ratio}=this.scaleCore;this.dragEndCallback({scale,ratio,position:this.position},e);}}};/************************注册缩放事件************************/this.registerScale=()=>{var _this$container7;return(_this$container7=this.container)===null||_this$container7===void 0?void 0:_this$container7.addEventListener('wheel',this.doWheel);};this.doWheel=e=>{if(e.altKey&&e.buttons!==2){var _this$content;//计算缩放比例
this.scaleCore.compute(e.deltaY>0?0:1);const{x:offSetX,y:offSetY}=this.container.getBoundingClientRect();//执行缩放
const{width,height}=(_this$content=this.content)===null||_this$content===void 0?void 0:_this$content.style;this.position.x=this.position.x-(this.scaleCore.ratio-1)*(e.clientX-offSetX-this.position.x-parseFloat(width)*0.5);this.position.y=this.position.y-(this.scaleCore.ratio-1)*(e.clientY-offSetY-this.position.y-parseFloat(height)*0.5);this.content.style.transform='translate3d('+this.position.x+'px, '+this.position.y+'px, 0) scale('+this.scaleCore.scale+')';//执行回调
if(this.scaleCallback){const{scale,ratio}=this.scaleCore;this.scaleCallback({scale,ratio,position:this.position},e);}}};const{container,content,position,dragCallback,scaleCallback,dragStartCallback,dragEndCallback}=params;this.container=container;this.content=content;if(position)this.position=position;if(dragCallback)this.dragCallback=dragCallback;if(scaleCallback)this.scaleCallback=scaleCallback;if(dragStartCallback)this.dragStartCallback=dragStartCallback;if(dragEndCallback)this.dragEndCallback=dragEndCallback;//注册拖拽
this.registerDrag();//注册缩放
this.registerScale();}/************************事件、变量销毁************************/destroy(){var _this$container8,_this$container9,_this$container10,_this$container11;(_this$container8=this.container)===null||_this$container8===void 0?void 0:_this$container8.removeEventListener('pointerdown',this.pointerDown);(_this$container9=this.container)===null||_this$container9===void 0?void 0:_this$container9.removeEventListener('pointerup',this.pointerUp);(_this$container10=this.container)===null||_this$container10===void 0?void 0:_this$container10.removeEventListener('wheel',this.doWheel);(_this$container11=this.container)===null||_this$container11===void 0?void 0:_this$container11.removeEventListener('contextmenu',this.contextMenu);this.container=null;this.content=null;}/************************注册拖拽事件************************/registerDrag(){var _this$container12;//初始化被拖拽对象位置
this.content.style.transform='translate3d('+this.position.x+'px, '+this.position.y+'px, 0) scale('+this.scaleCore.scale+')';//阻止系统右键菜单显示
(_this$container12=this.container)===null||_this$container12===void 0?void 0:_this$container12.addEventListener("contextmenu",this.contextMenu);//监听拖拽开始
this.onDragStart();//监听拖拽结束
this.onDragEnd();}}

/***/ })

}]);