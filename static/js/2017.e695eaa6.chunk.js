"use strict";
(self["webpackChunknews"] = self["webpackChunknews"] || []).push([[2017],{

/***/ 4398:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ FilterConfig_FilterConfig)
});

// EXTERNAL MODULE: ./src/pages/Charts/json-schema/LCGUI.tsx
var LCGUI = __webpack_require__(40058);
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[2]!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[3]!./src/pages/Charts/comps/common-component/filter-config/FilterConfig.less
var FilterConfig = __webpack_require__(58341);
;// ./src/pages/Charts/comps/common-component/filter-config/FilterConfig.less

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(FilterConfig["default"], options);




       /* harmony default export */ const filter_config_FilterConfig = (FilterConfig["default"] && FilterConfig["default"].locals ? FilterConfig["default"].locals : undefined);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(37995);
// EXTERNAL MODULE: ./src/pages/Charts/utils/ObjectUtil.ts
var ObjectUtil = __webpack_require__(69946);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(12955);
;// ./src/pages/Charts/comps/common-component/filter-config/FilterConfig.tsx
const defaultConfig={enable:false,blur:0,brightness:1,contrast:1,opacity:1,saturate:1,hueRotate:0};function FilterConfig_FilterConfig(props){var _controller$getConfig,_configRef$current,_configRef$current2,_configRef$current3,_configRef$current4,_configRef$current5,_configRef$current6,_configRef$current7;const{controller}=props;const config=(_controller$getConfig=controller.getConfig())===null||_controller$getConfig===void 0?void 0:_controller$getConfig.filter;const configRef=(0,react.useRef)(config||defaultConfig);const schema={type:'grid',config:{columns:2,gridGap:'20px'},children:[{type:'switch',label:'开启',key:'enable',value:(_configRef$current=configRef.current)===null||_configRef$current===void 0?void 0:_configRef$current.enable},{type:'slider',label:'模糊',key:'blur',value:(_configRef$current2=configRef.current)===null||_configRef$current2===void 0?void 0:_configRef$current2.blur,config:{containerStyle:{gridColumn:'1/3'},min:0,max:100,step:0.01}},{type:'slider',label:'亮度',key:'brightness',value:(_configRef$current3=configRef.current)===null||_configRef$current3===void 0?void 0:_configRef$current3.brightness,config:{containerStyle:{gridColumn:'1/3'},min:0,max:2,step:0.01}},{type:'slider',label:'对比度',key:'contrast',value:(_configRef$current4=configRef.current)===null||_configRef$current4===void 0?void 0:_configRef$current4.contrast,config:{containerStyle:{gridColumn:'1/3'},min:0,max:2,step:0.01}},{type:'slider',label:'透明度',key:'opacity',value:(_configRef$current5=configRef.current)===null||_configRef$current5===void 0?void 0:_configRef$current5.opacity,config:{containerStyle:{gridColumn:'1/3'},step:0.01,max:1,min:0}},{type:'slider',label:'饱和度',key:'saturate',value:(_configRef$current6=configRef.current)===null||_configRef$current6===void 0?void 0:_configRef$current6.saturate,config:{containerStyle:{gridColumn:'1/3'},min:0,max:2,step:0.01}},{type:'slider',label:'色调',key:'hueRotate',value:(_configRef$current7=configRef.current)===null||_configRef$current7===void 0?void 0:_configRef$current7.hueRotate,config:{containerStyle:{gridColumn:'1/3'},min:0,max:360}}// {
//     type: 'slider',
//     label: '混合模式',
//     value: 50,
//     config: {
//         containerStyle: {
//             gridColumn: '1/3'
//         }
//     }
// },
]};const onFieldChange=fieldChangeData=>{const{dataFragment}=fieldChangeData;configRef.current=ObjectUtil["default"].merge(configRef.current,dataFragment);controller.updateFilter(configRef.current);};return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:'filter-config',children:/*#__PURE__*/(0,jsx_runtime.jsx)(LCGUI.LCGUI,{schema:schema,onFieldChange:onFieldChange})});}

/***/ }),

/***/ 58341:
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
___CSS_LOADER_EXPORT___.push([module.id, `.filter-config .ui-container .ui-container-label {
  min-width: 55px;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);