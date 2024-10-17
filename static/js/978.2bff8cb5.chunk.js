"use strict";
(self["webpackChunknews"] = self["webpackChunknews"] || []).push([[978],{

/***/ 20978:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ canvas_context_menu_CanvasContextMenu)
});

// EXTERNAL MODULE: ./node_modules/mobx-react/dist/mobxreact.esm.js + 14 modules
var mobxreact_esm = __webpack_require__(96499);
// EXTERNAL MODULE: ./src/pages/Charts/designer/operate-provider/canvas-context-menu/CanvasContextMenuStore.ts
var CanvasContextMenuStore = __webpack_require__(66956);
// EXTERNAL MODULE: ./src/pages/Charts/designer/operate-provider/hot-key/HotKeyImpl.ts + 11 modules
var HotKeyImpl = __webpack_require__(62587);
// EXTERNAL MODULE: ./src/pages/Charts/designer/operate-provider/EventOperateStore.ts
var EventOperateStore = __webpack_require__(50469);
// EXTERNAL MODULE: ./src/pages/Charts/designer/left/layer-list/util/LayerUtil.ts
var LayerUtil = __webpack_require__(86736);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(37995);
// EXTERNAL MODULE: ./node_modules/@icon-park/react/es/runtime/index.js
var runtime = __webpack_require__(70030);
;// ./node_modules/@icon-park/react/es/icons/CopyOne.js


/* harmony default export */ const CopyOne = ((0,runtime.IconWrapper)('copy-one', true, function (props) {
  return /*#__PURE__*/react.createElement("svg", {
    width: props.size,
    height: props.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M13 38H41V16H30V4H13V38Z",
    fill: props.colors[1],
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap,
    strokeLinejoin: props.strokeLinejoin
  }), /*#__PURE__*/react.createElement("path", {
    d: "M30 4L41 16",
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap,
    strokeLinejoin: props.strokeLinejoin
  }), /*#__PURE__*/react.createElement("path", {
    d: "M7 20V44H28",
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap,
    strokeLinejoin: props.strokeLinejoin
  }), /*#__PURE__*/react.createElement("path", {
    d: "M19 20H23",
    stroke: props.colors[2],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap
  }), /*#__PURE__*/react.createElement("path", {
    d: "M19 28H31",
    stroke: props.colors[2],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap
  }));
}));
;// ./node_modules/@icon-park/react/es/icons/Up.js


/* harmony default export */ const Up = ((0,runtime.IconWrapper)('up', false, function (props) {
  return /*#__PURE__*/react.createElement("svg", {
    width: props.size,
    height: props.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M13 30L25 18L37 30",
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap,
    strokeLinejoin: props.strokeLinejoin
  }));
}));
// EXTERNAL MODULE: ./node_modules/@icon-park/react/es/icons/Down.js
var Down = __webpack_require__(92570);
;// ./node_modules/@icon-park/react/es/icons/ToTopOne.js


/* harmony default export */ const ToTopOne = ((0,runtime.IconWrapper)('to-top-one', false, function (props) {
  return /*#__PURE__*/react.createElement("svg", {
    width: props.size,
    height: props.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M12 33L24 21L36 33",
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap,
    strokeLinejoin: props.strokeLinejoin
  }), /*#__PURE__*/react.createElement("path", {
    d: "M12 13H36",
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap,
    strokeLinejoin: props.strokeLinejoin
  }));
}));
;// ./node_modules/@icon-park/react/es/icons/ToBottomOne.js


/* harmony default export */ const ToBottomOne = ((0,runtime.IconWrapper)('to-bottom-one', false, function (props) {
  return /*#__PURE__*/react.createElement("svg", {
    width: props.size,
    height: props.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M36 14L24 26L12 14",
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap,
    strokeLinejoin: props.strokeLinejoin
  }), /*#__PURE__*/react.createElement("path", {
    d: "M12 34H36",
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap,
    strokeLinejoin: props.strokeLinejoin
  }));
}));
;// ./node_modules/@icon-park/react/es/icons/DeleteOne.js


/* harmony default export */ const DeleteOne = ((0,runtime.IconWrapper)('delete-one', false, function (props) {
  return /*#__PURE__*/react.createElement("svg", {
    width: props.size,
    height: props.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M15 12L16.2 5H31.8L33 12",
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinejoin: props.strokeLinejoin
  }), /*#__PURE__*/react.createElement("path", {
    d: "M6 12H42",
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap
  }), /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M37 12L35 43H13L11 12H37Z",
    fill: props.colors[1],
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap,
    strokeLinejoin: props.strokeLinejoin
  }), /*#__PURE__*/react.createElement("path", {
    d: "M19 35H29",
    stroke: props.colors[2],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap
  }));
}));
// EXTERNAL MODULE: ./node_modules/@icon-park/react/es/icons/PreviewClose.js
var PreviewClose = __webpack_require__(24642);
// EXTERNAL MODULE: ./node_modules/@icon-park/react/es/icons/Unlock.js
var Unlock = __webpack_require__(56730);
// EXTERNAL MODULE: ./node_modules/@icon-park/react/es/icons/Lock.js
var Lock = __webpack_require__(1753);
;// ./node_modules/@icon-park/react/es/icons/GraphicStitchingThree.js


/* harmony default export */ const GraphicStitchingThree = ((0,runtime.IconWrapper)('graphic-stitching-three', false, function (props) {
  return /*#__PURE__*/react.createElement("svg", {
    width: props.size,
    height: props.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M24 14C26.7614 14 29 11.7614 29 9C29 6.23858 26.7614 4 24 4C21.2386 4 19 6.23858 19 9C19 11.7614 21.2386 14 24 14Z",
    fill: props.colors[1],
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap,
    strokeLinejoin: props.strokeLinejoin
  }), /*#__PURE__*/react.createElement("path", {
    d: "M24 44C26.7614 44 29 41.7614 29 39C29 36.2386 26.7614 34 24 34C21.2386 34 19 36.2386 19 39C19 41.7614 21.2386 44 24 44Z",
    fill: props.colors[1],
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap,
    strokeLinejoin: props.strokeLinejoin
  }), /*#__PURE__*/react.createElement("path", {
    d: "M14 19H4V29H14V19Z",
    fill: props.colors[1],
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap,
    strokeLinejoin: props.strokeLinejoin
  }), /*#__PURE__*/react.createElement("path", {
    d: "M44 19H34V29H44V19Z",
    fill: props.colors[1],
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap,
    strokeLinejoin: props.strokeLinejoin
  }), /*#__PURE__*/react.createElement("path", {
    d: "M19 9H9V19",
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap,
    strokeLinejoin: props.strokeLinejoin
  }), /*#__PURE__*/react.createElement("path", {
    d: "M19 39H9V29",
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap,
    strokeLinejoin: props.strokeLinejoin
  }), /*#__PURE__*/react.createElement("path", {
    d: "M29 9H40V19",
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap,
    strokeLinejoin: props.strokeLinejoin
  }), /*#__PURE__*/react.createElement("path", {
    d: "M29 39H39V29",
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap,
    strokeLinejoin: props.strokeLinejoin
  }));
}));
;// ./node_modules/@icon-park/react/es/icons/ApplicationTwo.js


/* harmony default export */ const ApplicationTwo = ((0,runtime.IconWrapper)('application-two', false, function (props) {
  return /*#__PURE__*/react.createElement("svg", {
    width: props.size,
    height: props.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, /*#__PURE__*/react.createElement("circle", {
    cx: "34.5",
    cy: "13.5",
    r: "6.5",
    fill: props.colors[1],
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth
  }), /*#__PURE__*/react.createElement("circle", {
    cx: "34.5",
    cy: "34.5",
    r: "6.5",
    fill: props.colors[1],
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth
  }), /*#__PURE__*/react.createElement("circle", {
    cx: "13.5",
    cy: "13.5",
    r: "6.5",
    fill: props.colors[1],
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth
  }), /*#__PURE__*/react.createElement("circle", {
    cx: "13.5",
    cy: "34.5",
    r: "6.5",
    fill: props.colors[1],
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth
  }));
}));
;// ./node_modules/@icon-park/react/es/icons/LinkRight.js


/* harmony default export */ const LinkRight = ((0,runtime.IconWrapper)('link-right', true, function (props) {
  return /*#__PURE__*/react.createElement("svg", {
    width: props.size,
    height: props.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M8 12V4H24V12",
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap,
    strokeLinejoin: props.strokeLinejoin
  }), /*#__PURE__*/react.createElement("path", {
    d: "M24 36V44H8V36",
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap,
    strokeLinejoin: props.strokeLinejoin
  }), /*#__PURE__*/react.createElement("path", {
    d: "M44 24L24 24",
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap,
    strokeLinejoin: props.strokeLinejoin
  }), /*#__PURE__*/react.createElement("path", {
    d: "M16 34V14",
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap,
    strokeLinejoin: props.strokeLinejoin
  }), /*#__PURE__*/react.createElement("path", {
    d: "M36 16L44 24L36 32",
    stroke: props.colors[0],
    strokeWidth: props.strokeWidth,
    strokeLinecap: props.strokeLinecap,
    strokeLinejoin: props.strokeLinejoin
  }));
}));
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[2]!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[3]!./src/pages/Charts/framework/context-menu/ContextMenu.less
var ContextMenu = __webpack_require__(78255);
;// ./src/pages/Charts/framework/context-menu/ContextMenu.less

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(ContextMenu["default"], options);




       /* harmony default export */ const context_menu_ContextMenu = (ContextMenu["default"] && ContextMenu["default"].locals ? ContextMenu["default"].locals : undefined);

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(12955);
;// ./src/pages/Charts/framework/context-menu/ContextMenu.tsx
function ContextMenu_ContextMenu(props){const{menus,visible,position}=props;const calculateMenuSize=menuCount=>{const menuHeight=33;return[130,menuCount*menuHeight];};const buildMenuList=()=>{const menuListDom=[];for(let i=0;i<menus.length;i++){const menuItem=menus[i];const Icon=menuItem===null||menuItem===void 0?void 0:menuItem.icon;menuListDom.push(/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:'menu-item',onClick:menuItem===null||menuItem===void 0?void 0:menuItem.onClick,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("label",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Icon,{})}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:menuItem===null||menuItem===void 0?void 0:menuItem.name})]},i+''));}return menuListDom;};const calculatePosition=(offsetW,offsetY)=>{const[x,y]=position;const{innerWidth,innerHeight}=window;let left=x;let top=y;if(x+offsetW>innerWidth)left=innerWidth-offsetW;if(y+offsetY>innerHeight)top=innerHeight-offsetY;return[left,top];};const[offsetW,offsetH]=calculateMenuSize(menus.length);const _position=calculatePosition(offsetW,offsetH);return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:visible&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:'context-menu',style:{position:'fixed',top:_position[1],left:_position[0]},children:buildMenuList()})});}
// EXTERNAL MODULE: ./src/pages/Charts/designer/manager/LayerManager.ts
var LayerManager = __webpack_require__(99113);
;// ./src/pages/Charts/designer/operate-provider/canvas-context-menu/CanvasContextMenu.tsx
const defaultDesignerMenus=[{name:'复制',icon:CopyOne,onClick:HotKeyImpl.doCopy},{name:'上移',icon:Up,onClick:HotKeyImpl.layerMoveUp},{name:'下移',icon:Down["default"],onClick:HotKeyImpl.layerMoveDown},{name:'置顶',icon:ToTopOne,onClick:HotKeyImpl.layerToTop},{name:'置底',icon:ToBottomOne,onClick:HotKeyImpl.layerToBottom},{name:'删除',icon:DeleteOne,onClick:HotKeyImpl.doDelete},{name:'隐藏',icon:PreviewClose["default"],onClick:HotKeyImpl.doHide}];const CanvasContextMenu=()=>{const calculateMenus=()=>{var _layerConfigs;const menus=[...defaultDesignerMenus];const{targetIds}=EventOperateStore["default"];if(targetIds.length===0)return menus;const{layerConfigs}=LayerManager["default"];const lockState=!!((_layerConfigs=layerConfigs[targetIds[0]])!==null&&_layerConfigs!==void 0&&_layerConfigs.lock);if(lockState){menus.push({name:'解锁',icon:Unlock["default"],onClick:HotKeyImpl.doUnLock});}else{menus.push({name:'锁定',icon:Lock["default"],onClick:HotKeyImpl.doLock});}if(targetIds.length>1&&!LayerUtil["default"].hasSameGroup(targetIds)){menus.push({name:'编组',icon:GraphicStitchingThree,onClick:HotKeyImpl.doGrouping});}let groupIds=LayerUtil["default"].findTopGroupLayer(targetIds,true);//过滤掉其中分组等于自身的图层（即非分组图层）
groupIds=groupIds.filter(id=>{var _layerConfigs$id;return((_layerConfigs$id=layerConfigs[id])===null||_layerConfigs$id===void 0?void 0:_layerConfigs$id.type)==='group';});if(groupIds.length>0){menus.push({name:'解组',icon:ApplicationTwo,onClick:HotKeyImpl.doUnGrouping});}const noGroup=targetIds.some(id=>{var _layerConfigs$id2;return!((_layerConfigs$id2=layerConfigs[id])!==null&&_layerConfigs$id2!==void 0&&_layerConfigs$id2.pid);});if(!noGroup)menus.push({name:'移出分组',icon:LinkRight,onClick:HotKeyImpl.removeFromGroup});return menus;};const{visible,position}=CanvasContextMenuStore["default"];const menus=calculateMenus();return/*#__PURE__*/(0,jsx_runtime.jsx)(ContextMenu_ContextMenu,{menus:menus,visible:visible,position:position});};/* harmony default export */ const canvas_context_menu_CanvasContextMenu = ((0,mobxreact_esm.observer)(CanvasContextMenu));

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

/***/ 78255:
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
___CSS_LOADER_EXPORT___.push([module.id, `.context-menu {
  background-color: #1b1e23;
  padding: 5px;
  width: 130px;
  min-height: 150px;
  transition: opacity 250ms ease !important;
  z-index: 2;
}
.context-menu .menu-item {
  display: flex;
  color: rgba(206, 206, 206, 0.86);
  font-size: 13px;
  padding: 9px 8px;
  cursor: pointer;
}
.context-menu .menu-item label {
  margin-right: 10px;
}
.context-menu .menu-item label,
.context-menu .menu-item span {
  pointer-events: none;
}
.context-menu .menu-item:hover {
  transition: background-color 0.3s ease;
  background-color: rgba(107, 107, 107, 0.44);
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);