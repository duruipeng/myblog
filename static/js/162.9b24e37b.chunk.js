"use strict";
(self["webpackChunknews"] = self["webpackChunknews"] || []).push([[162],{

/***/ 80162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48331);
/* harmony import */ var _EventOperateStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20357);
/* harmony import */ var _HotKeyType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79878);
//需要屏蔽浏览器默认快捷键效果的快捷键列表
const shieldKeyList=['control + s','alt','control + l','control + shift + l','control + h','control + f','control + k','control + 1','control + 2','control + 3','control + 4','control + 5','control + g','control + shift + g'];class HotKey extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(props){super(props);this.handlerMapping={};this.currHotKey=[];this.existHandlerKey="";this.specialDomCache={};this.getSpecialDomCache=classSelector=>{//先从缓存中获取dom元素，如果没有则从document中获取并缓存
const specialDom=this.specialDomCache[classSelector];if(specialDom)return specialDom;else{const specialDom=document.querySelector(classSelector);if(!specialDom)return null;this.specialDomCache[classSelector]=specialDom;return specialDom;}};/**
     * 从快捷键配置管理映射表中匹配对应的快捷键处理函数并执行。
     * @param e 鼠标事件对象
     * @param hotKey 当前按下的快捷键
     */this.doHandler=(e,hotKey)=>{const{handler,triggerType=_HotKeyType__WEBPACK_IMPORTED_MODULE_2__.HotKeyTriggerType.SINGLE,range}=this.handlerMapping[hotKey]||{};if(handler){if(triggerType===_HotKeyType__WEBPACK_IMPORTED_MODULE_2__.HotKeyTriggerType.SINGLE&&this.existHandlerKey!==hotKey||triggerType===_HotKeyType__WEBPACK_IMPORTED_MODULE_2__.HotKeyTriggerType.COILED){const{pointerTarget}=_EventOperateStore__WEBPACK_IMPORTED_MODULE_1__["default"];//如果设定了指定范围并且不在范围内则不执行
if(range){//先从缓存中获取dom元素，如果没有则从document中获取并缓存
const targetDom=this.getSpecialDomCache(range);if(!targetDom||!targetDom.contains(pointerTarget))return;}//其余情况均执行快捷键，如果是数组则遍历执行，反之直接执行
if(Array.isArray(handler))handler.forEach(func=>func(e));else handler(e);this.existHandlerKey=hotKey;}}};this.keyDown=e=>{const key=e.key.toLowerCase();if(!this.currHotKey.some(item=>item===key))this.currHotKey.push(key);const hotKey=this.currHotKey.join(' + ');if(shieldKeyList.some(item=>item===hotKey))e.preventDefault();this.doHandler(e,hotKey);};this.keyUp=e=>{const key=e.key.toLowerCase();if(this.currHotKey.some(item=>item===key)){this.currHotKey=this.currHotKey.filter(item=>item!==key);this.existHandlerKey='';}};/**
     * 失去焦点时清空当前热键（一般是切换屏幕）
     */this.onBlur=()=>{this.currHotKey=[];this.existHandlerKey='';};this.handlerMapping=props.handlerMapping;}componentDidMount(){document.addEventListener('keydown',this.keyDown);document.addEventListener('keyup',this.keyUp);window.onblur=this.onBlur;}componentWillUnmount(){document.removeEventListener('keydown',this.keyDown);document.removeEventListener('keyup',this.keyUp);window.onblur=null;}render(){return null;}}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HotKey);

/***/ })

}]);