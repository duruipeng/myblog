"use strict";
(self["webpackChunknews"] = self["webpackChunknews"] || []).push([[9987],{

/***/ 19987:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ImageUpload: () => (/* binding */ ImageUpload_ImageUpload)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(37995);
// EXTERNAL MODULE: ./node_modules/antd/es/upload/index.js + 42 modules
var upload = __webpack_require__(40923);
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[2]!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[3]!./src/pages/Charts/json-schema/ui/imag-upload/ImageUpload.less
var ImageUpload = __webpack_require__(88213);
;// ./src/pages/Charts/json-schema/ui/imag-upload/ImageUpload.less

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(ImageUpload["default"], options);




       /* harmony default export */ const imag_upload_ImageUpload = (ImageUpload["default"] && ImageUpload["default"].locals ? ImageUpload["default"].locals : undefined);

// EXTERNAL MODULE: ./src/pages/Charts/json-schema/ui/ui-container/UIContainer.tsx + 1 modules
var UIContainer = __webpack_require__(28232);
// EXTERNAL MODULE: ./src/pages/Charts/framework/operate/index.ts + 3 modules
var operate = __webpack_require__(11407);
// EXTERNAL MODULE: ./src/pages/Charts/utils/URLUtil.ts
var URLUtil = __webpack_require__(64500);
// EXTERNAL MODULE: ./src/pages/Charts/framework/message/GlobalMessage.tsx
var GlobalMessage = __webpack_require__(52182);
// EXTERNAL MODULE: ./node_modules/@icon-park/react/es/icons/Plus.js
var Plus = __webpack_require__(43338);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(12955);
;// ./src/pages/Charts/json-schema/ui/imag-upload/ImageUpload.tsx
const ImageUpload_ImageUpload=props=>{const{onChange,defaultValue,accept,size,...uiProp}=props;const fileInfo={uid:'-1',name:'image.png',status:'done'};const[fileList,setFileList]=(0,react.useState)(defaultValue?[{...fileInfo,url:defaultValue}]:[]);const beforeUpload=file=>{if(size&&file.size>size*1024*1024){var _globalMessage$messag;(_globalMessage$messag=GlobalMessage.globalMessage.messageApi)===null||_globalMessage$messag===void 0?void 0:_globalMessage$messag.warning(`文件大小不能超过${size}M`);return false;}const{saveType}=URLUtil["default"].parseUrlParams();operate["default"][saveType].uploadImage(file).then(data=>{if(!data){var _globalMessage$messag2;(_globalMessage$messag2=GlobalMessage.globalMessage.messageApi)===null||_globalMessage$messag2===void 0?void 0:_globalMessage$messag2.error('上传失败');}else{const{url,hash}=data;onChange&&onChange({url,hash});setFileList([{...fileInfo,url}]);}});//阻止默认上传
return false;};return/*#__PURE__*/(0,jsx_runtime.jsx)(UIContainer.UIContainer,{...uiProp,className:'image-upload',children:/*#__PURE__*/(0,jsx_runtime.jsx)(upload["default"],{name:'file',beforeUpload:beforeUpload,listType:'picture-card',fileList:fileList,accept:accept,onRemove:()=>{setFileList([]);onChange&&onChange({url:'',hash:''});},onPreview:()=>{var _fileList$;return window.open((_fileList$=fileList[0])===null||_fileList$===void 0?void 0:_fileList$.url);},children:fileList.length>0?null:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:'upload-btn',children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Plus["default"],{}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{marginTop:8},children:"Upload"})]})})});};

/***/ }),

/***/ 88213:
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
___CSS_LOADER_EXPORT___.push([module.id, `.image-upload .ant-upload.ant-upload-select-picture-card {
  background-color: #00000000;
  border: 2px solid #525252;
}
.image-upload .ant-upload.ant-upload-select-picture-card .upload-btn {
  color: #b5b5b5;
}
.image-upload .ant-upload-list-picture-card .ant-upload-list-item,
.image-upload .ant-upload-list-picture .ant-upload-list-item {
  border: 2px solid #525252;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);