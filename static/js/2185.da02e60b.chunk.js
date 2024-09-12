"use strict";
(self["webpackChunknews"] = self["webpackChunknews"] || []).push([[2185],{

/***/ 68259:
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
___CSS_LOADER_EXPORT___.push([module.id, `.react-screen-box {
  background-size: 100% 100%;
  background-color: #545454;
  width: 100vw;
  height: 100vh;
}
.react-screen-box .screen-wrapper {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  position: relative;
  transform-origin: left top;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 2185:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ScreenFit_ScreenFit)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(48331);
// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(85640);
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[2]!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[3]!./src/pages/Charts/framework/screen-fit/ScreenFit.less
var ScreenFit = __webpack_require__(68259);
;// CONCATENATED MODULE: ./src/pages/Charts/framework/screen-fit/ScreenFit.less

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(ScreenFit["default"], options);




       /* harmony default export */ const screen_fit_ScreenFit = (ScreenFit["default"] && ScreenFit["default"].locals ? ScreenFit["default"].locals : undefined);

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7579);
;// CONCATENATED MODULE: ./src/pages/Charts/framework/screen-fit/ScreenFit.tsx
const screenFitStyleMap={'scale':{overflow:'hidden'},'full-screen':{overflow:'hidden'},'full-x':{overflow:'hidden scroll'},'full-y':{overflow:'scroll hidden'}};function ScreenFit_ScreenFit(props){const{width,height,bodyOverflowHidden=true,delay=500,scaleChange}=props;let bodyOverflow;const elRef=(0,react.useRef)(null);const[size,setSize]=(0,react.useState)({width,height,originalHeight:0,originalWidth:0});let observer;function updateSize(){if(size.width&&size.height){elRef.current.style.width=`${size.width}px`;elRef.current.style.height=`${size.height}px`;}else{elRef.current.style.width=`${size.originalWidth}px`;elRef.current.style.height=`${size.originalHeight}px`;}}function updateScale(){// 获取真实视口尺寸
const currentWidth=document.body.clientWidth;const currentHeight=document.body.clientHeight;// 获取大屏最终的宽高
const realWidth=size.width||size.originalWidth;const realHeight=size.height||size.originalHeight;// 计算缩放比例
const widthScale=currentWidth/+realWidth;const heightScale=currentHeight/+realHeight;switch(props.mode){case'full-screen':// 若要铺满全屏，则按照各自比例缩放
elRef.current.style.transform=`scale(${widthScale},${heightScale})`;scaleChange&&scaleChange(widthScale,heightScale);break;case'full-x':elRef.current.style.transform=`scale(${widthScale},${widthScale})`;scaleChange&&scaleChange(widthScale,widthScale);break;case'full-y':elRef.current.style.transform=`scale(${heightScale},${heightScale})`;scaleChange&&scaleChange(heightScale,heightScale);break;default:// 按照宽高最小比例进行缩放
const scale=Math.min(widthScale,heightScale);elRef.current.style.transform=`scale(${scale},${scale})`;const domWidth=elRef.current.clientWidth;const domHeight=elRef.current.clientHeight;const mx=Math.max((currentWidth-domWidth*scale)/2,0);const my=Math.max((currentHeight-domHeight*scale)/2,0);elRef.current.style.margin=`${my}px ${mx}px`;scaleChange&&scaleChange(scale,scale);break;}}const onResize=(0,lodash.debounce)(()=>{if(!elRef.current)return;updateSize();updateScale();},delay);function initState(){if(bodyOverflowHidden){bodyOverflow=document.body.style.overflow;document.body.style.overflow='hidden';}observer=new MutationObserver(()=>onResize());observer.observe(elRef.current,{attributes:true,attributeFilter:['style'],attributeOldValue:true});setSize({...size,originalWidth:window.screen.width,originalHeight:window.screen.height});updateSize();updateScale();window.addEventListener('resize',onResize);}(0,react.useEffect)(()=>{initState();return()=>{observer.disconnect();window.removeEventListener('resize',onResize);if(bodyOverflowHidden)document.body.style.overflow=bodyOverflow;};},[]);const scrollStyle=screenFitStyleMap[props.mode||'scale'];return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{...scrollStyle},className:'react-screen-box',children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:'screen-wrapper',ref:elRef,children:props.children})});}

/***/ })

}]);