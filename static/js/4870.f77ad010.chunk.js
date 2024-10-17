"use strict";
(self["webpackChunknews"] = self["webpackChunknews"] || []).push([[4870],{

/***/ 34870:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ lc_base_table_BaseTableComponent)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(37995);
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[2]!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[3]!./src/pages/Charts/comps/lc/base-table/BaseTableComponent.less
var BaseTableComponent = __webpack_require__(31892);
;// ./src/pages/Charts/comps/lc/base-table/BaseTableComponent.less

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(BaseTableComponent["default"], options);




       /* harmony default export */ const base_table_BaseTableComponent = (BaseTableComponent["default"] && BaseTableComponent["default"].locals ? BaseTableComponent["default"].locals : undefined);

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(33576);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(12955);
;// ./src/pages/Charts/comps/lc/base-table/BaseTableComponent.tsx
const BaseTableComponent_BaseTableComponent=/*#__PURE__*/(0,react.forwardRef)((props,ref)=>{const[config,setConfig]=(0,react.useState)({...props});const tableRef=(0,react.useRef)(null);const theadRef=(0,react.useRef)(null);const tbodyRef1=(0,react.useRef)(null);const tbodyRef2=(0,react.useRef)(null);const resizeObserverRef=(0,react.useRef)(null);const eventHandlerMap=(0,react.useRef)({});const contentHeightRef=(0,react.useRef)(0);(0,react.useImperativeHandle)(ref,()=>({updateConfig:newConfig=>setConfig({...newConfig}),setEventHandler:eventMap=>eventHandlerMap.current=eventMap,destroy:destroy}));const onClick=()=>{if('click'in eventHandlerMap.current){var _eventHandlerMap$curr,_eventHandlerMap$curr2;(_eventHandlerMap$curr=(_eventHandlerMap$curr2=eventHandlerMap.current)['click'])===null||_eventHandlerMap$curr===void 0?void 0:_eventHandlerMap$curr.call(_eventHandlerMap$curr2);}};const destroy=()=>{var _resizeObserverRef$cu;tableRef&&(tableRef.current=null);theadRef&&(theadRef.current=null);tbodyRef1&&(tbodyRef1.current=null);tbodyRef2&&(tbodyRef2.current=null);resizeObserverRef&&((_resizeObserverRef$cu=resizeObserverRef.current)===null||_resizeObserverRef$cu===void 0?void 0:_resizeObserverRef$cu.disconnect());resizeObserverRef.current=null;};const changeTableTrHeight=()=>{const{pageSize=0}=config.style.body;if(pageSize){var _tableRef$current;const tableBodyTds=((_tableRef$current=tableRef.current)===null||_tableRef$current===void 0?void 0:_tableRef$current.getElementsByClassName('base-table-tr'))||[];const tdHeight=contentHeightRef.current/pageSize;for(let i=0;i<tableBodyTds.length;i++){tableBodyTds[i].style.height=`${tdHeight}px`;}}};(0,react.useEffect)(()=>{if(tableRef.current){contentHeightRef.current=tableRef.current.clientHeight-theadRef.current.clientHeight;resizeObserverRef.current=new ResizeObserver((0,lodash.debounce)(entries=>{for(const entry of entries){const{height}=entry.contentRect;contentHeightRef.current=height-theadRef.current.clientHeight;tbodyRef1.current&&(tbodyRef1.current.style.height=`${contentHeightRef.current}px`);tbodyRef2.current&&(tbodyRef2.current.style.height=`${contentHeightRef.current}px`);}changeTableTrHeight();},100));// 开始观察
resizeObserverRef.current.observe(tableRef.current);changeTableTrHeight();}},[]);const{columns,data,header,body}=config.style;const{enableCarousel,carouselSpeed=3,pageSize,...bodyStyle}=body;const carouselStyle=enableCarousel?`scroll ${carouselSpeed}s linear infinite`:`none`;if(pageSize)changeTableTrHeight();return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:'base-table',ref:tableRef,onClick:onClick,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("table",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("thead",{style:{...header},ref:theadRef,children:/*#__PURE__*/(0,jsx_runtime.jsx)("tr",{children:columns&&columns.map((column,index)=>{return/*#__PURE__*/(0,jsx_runtime.jsx)("th",{style:{width:column.width,fontWeight:header===null||header===void 0?void 0:header.fontWeight,textAlign:column.textAlign},children:column.label},index);})})}),/*#__PURE__*/(0,jsx_runtime.jsx)("tbody",{style:{...bodyStyle,animation:carouselStyle},className:"scroll-body",ref:tbodyRef1,children:data&&data.map((item,index)=>{return/*#__PURE__*/(0,jsx_runtime.jsx)("tr",{className:'base-table-tr',children:columns&&columns.map((column,i)=>{return/*#__PURE__*/(0,jsx_runtime.jsx)("td",{style:{textAlign:column.textAlign},children:item[column.key]},i);})},index);})}),/*#__PURE__*/(0,jsx_runtime.jsx)("tbody",{style:{...bodyStyle,animation:carouselStyle},className:"scroll-body",ref:tbodyRef2,children:data&&data.map((item,index)=>{return/*#__PURE__*/(0,jsx_runtime.jsx)("tr",{className:'base-table-tr',children:columns&&columns.map((column,i)=>{return/*#__PURE__*/(0,jsx_runtime.jsx)("td",{style:{textAlign:column.textAlign},children:item[column.key]},i);})},index);})})]})});});/* harmony default export */ const lc_base_table_BaseTableComponent = (BaseTableComponent_BaseTableComponent);

/***/ }),

/***/ 31892:
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
___CSS_LOADER_EXPORT___.push([module.id, `.base-table {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.base-table table {
  width: 100%;
  height: 100%;
  text-align: center;
}
.base-table table thead {
  position: relative;
  z-index: 1;
}
.base-table table .scroll-body {
  overflow: hidden;
  animation: scroll 10s linear infinite;
}
.base-table table .scroll-body td {
  height: 0px;
}
@keyframes scroll {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);