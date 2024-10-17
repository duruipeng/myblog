"use strict";
(self["webpackChunknews"] = self["webpackChunknews"] || []).push([[9631],{

/***/ 19631:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ui_control_group_ControlGroup)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[2]!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[3]!./src/pages/Charts/json-schema/ui/control-group/ControlGroup.less
var ControlGroup = __webpack_require__(29136);
;// ./src/pages/Charts/json-schema/ui/control-group/ControlGroup.less

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(ControlGroup["default"], options);




       /* harmony default export */ const control_group_ControlGroup = (ControlGroup["default"] && ControlGroup["default"].locals ? ControlGroup["default"].locals : undefined);

// EXTERNAL MODULE: ./src/pages/Charts/json-schema/LCGUI.tsx
var LCGUI = __webpack_require__(40058);
// EXTERNAL MODULE: ./src/pages/Charts/json-schema/ui/loading/Loading.tsx
var Loading = __webpack_require__(96206);
// EXTERNAL MODULE: ./src/pages/Charts/json-schema/LCGUIUtil.ts
var LCGUIUtil = __webpack_require__(41858);
// EXTERNAL MODULE: ./src/pages/Charts/utils/ObjectUtil.ts
var ObjectUtil = __webpack_require__(69946);
// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(33576);
// EXTERNAL MODULE: ./node_modules/@icon-park/react/es/runtime/index.js
var runtime = __webpack_require__(70030);
;// ./node_modules/@icon-park/react/es/icons/DeleteFive.js


/* harmony default export */ const DeleteFive = ((0,runtime.IconWrapper)('delete-five', false, function (props) {
  return /*#__PURE__*/react.createElement("svg", {
    width: props.size,
    height: props.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M8 11L40 11",
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap,
    strokeLinejoin: props.strokeLinejoin
  }), /*#__PURE__*/react.createElement("path", {
    d: "M18 5L30 5",
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap,
    strokeLinejoin: props.strokeLinejoin
  }), /*#__PURE__*/react.createElement("path", {
    d: "M12 17H36V40C36 41.6569 34.6569 43 33 43H15C13.3431 43 12 41.6569 12 40V17Z",
    fill: props.colors[1],
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinejoin: props.strokeLinejoin
  }), /*#__PURE__*/react.createElement("path", {
    d: "M20 25L28 33",
    stroke: props.colors[2],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap,
    strokeLinejoin: props.strokeLinejoin
  }), /*#__PURE__*/react.createElement("path", {
    d: "M28 25L20 33",
    stroke: props.colors[2],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap,
    strokeLinejoin: props.strokeLinejoin
  }));
}));
;// ./node_modules/@icon-park/react/es/icons/AddOne.js


/* harmony default export */ const AddOne = ((0,runtime.IconWrapper)('add-one', false, function (props) {
  return /*#__PURE__*/react.createElement("svg", {
    width: props.size,
    height: props.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",
    fill: props.colors[1],
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinejoin: props.strokeLinejoin
  }), /*#__PURE__*/react.createElement("path", {
    d: "M24 16V32",
    stroke: props.colors[2],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap,
    strokeLinejoin: props.strokeLinejoin
  }), /*#__PURE__*/react.createElement("path", {
    d: "M16 24L32 24",
    stroke: props.colors[2],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap,
    strokeLinejoin: props.strokeLinejoin
  }));
}));
// EXTERNAL MODULE: ./node_modules/@icon-park/react/es/icons/Down.js
var Down = __webpack_require__(92570);
// EXTERNAL MODULE: ./node_modules/@icon-park/react/es/icons/Right.js
var Right = __webpack_require__(61978);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(12955);
;// ./src/pages/Charts/json-schema/ui/control-group/ControlGroup.tsx
const ControlGroup_ControlGroup=props=>{const{label,defaultValue=[],template,itemName}=props;const[toggle,setToggle]=react.useState(false);const templateData=LCGUIUtil["default"].parseSchemaData(template);const initSchema={children:[]};defaultValue.forEach((data,index)=>{var _initSchema$children;(_initSchema$children=initSchema.children)===null||_initSchema$children===void 0?void 0:_initSchema$children.push({type:'accordion',key:index+'',label:(itemName||'系列')+(index+1),children:[{...LCGUIUtil["default"].schemaStructureAssignment(data,(0,lodash.cloneDeep)(template))}]});});const dataRef=(0,react.useRef)(defaultValue);const[schema,setSchema]=react.useState(initSchema);const addNewGroup=()=>{var _schema$children;const{template}=props;if(!template)return;(_schema$children=schema.children)===null||_schema$children===void 0?void 0:_schema$children.push({type:'accordion',key:dataRef.current.length+'',label:(itemName||'系列')+(dataRef.current.length+1),children:[template]});setSchema({...schema});dataRef.current=[...dataRef.current,{...templateData}];const{onChange}=props;onChange&&onChange(dataRef.current);};const delGroup=()=>{var _schema$children2;(_schema$children2=schema.children)===null||_schema$children2===void 0?void 0:_schema$children2.pop();setSchema({...schema});dataRef.current.pop();const{onChange}=props;onChange&&onChange(dataRef.current);};const onFieldChange=fieldChangeData=>{const{dataFragment}=fieldChangeData;const index=Number(Object.keys(dataFragment)[0]);dataRef.current[index]=ObjectUtil["default"].merge(dataRef.current[index],dataFragment[index]);const{onChange}=props;onChange&&onChange(dataRef.current);};return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"control-group",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:'control-group-header',children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:'cgh-label',children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:label})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:'cgh-operate',children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:'operate-icon',onClick:delGroup,children:/*#__PURE__*/(0,jsx_runtime.jsx)(DeleteFive,{})}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:'operate-icon',onClick:addNewGroup,children:/*#__PURE__*/(0,jsx_runtime.jsx)(AddOne,{})}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:'operate-icon toggle-icon',onClick:()=>setToggle(!toggle),children:toggle?/*#__PURE__*/(0,jsx_runtime.jsx)(Down["default"],{size:16}):/*#__PURE__*/(0,jsx_runtime.jsx)(Right["default"],{size:16})})]})]}),toggle&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:'control-group-body',style:{display:toggle?'block':'none'},children:/*#__PURE__*/(0,jsx_runtime.jsx)(react.Suspense,{fallback:/*#__PURE__*/(0,jsx_runtime.jsx)(Loading["default"],{}),children:/*#__PURE__*/(0,jsx_runtime.jsx)(LCGUI.LCGUI,{schema:schema,onFieldChange:onFieldChange})})})]});};/* harmony default export */ const ui_control_group_ControlGroup = (ControlGroup_ControlGroup);

/***/ }),

/***/ 92570:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37995);
/* harmony import */ var _runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70030);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_runtime__WEBPACK_IMPORTED_MODULE_1__.IconWrapper)('down', false, function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    width: props.size,
    height: props.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M36 18L24 30L12 18",
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap,
    strokeLinejoin: props.strokeLinejoin
  }));
}));

/***/ }),

/***/ 61978:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37995);
/* harmony import */ var _runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70030);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_runtime__WEBPACK_IMPORTED_MODULE_1__.IconWrapper)('right', true, function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    width: props.size,
    height: props.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M19 12L31 24L19 36",
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap,
    strokeLinejoin: props.strokeLinejoin
  }));
}));

/***/ }),

/***/ 29136:
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
___CSS_LOADER_EXPORT___.push([module.id, `.control-group {
  width: 100%;
  padding: 10px 0;
}
.control-group .control-group-header {
  color: #e4f4ff;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.control-group .control-group-header .cgh-operate .operate-icon {
  cursor: pointer;
  padding: 3px;
  position: relative;
  top: 1px;
}
.control-group .control-group-header .cgh-operate .toggle-icon {
  top: 2px;
}
.control-group .control-group-body {
  padding: 5px;
}
.control-group .control-group-body .lc-accordion .accordion-header {
  color: #c6c6c6;
  font-size: 12px;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);