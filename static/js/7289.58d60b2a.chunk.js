"use strict";
(self["webpackChunknews"] = self["webpackChunknews"] || []).push([[7289],{

/***/ 78423:
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
___CSS_LOADER_EXPORT___.push([module.id, `.image-source {
  display: flex;
  flex-direction: column;
  padding: 5px;
  height: 100%;
}
.image-source .image-source-search {
  margin-bottom: 5px;
}
.image-source .image-source-list {
  overflow-y: scroll;
}
.image-source .image-source-list .image-source-item {
  width: 100%;
  height: 140px;
  cursor: pointer;
  margin-bottom: 10px;
  background-color: #363636;
}
.image-source .image-source-list .image-source-item .image-source-item-header {
  height: 25px;
  line-height: 25px;
  padding: 0 6px;
  color: #d4d4d4;
  font-size: 11px;
  display: flex;
  justify-content: space-between;
}
.image-source .image-source-list .image-source-item .image-source-item-header .isi-title {
  width: 130px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.image-source .image-source-list .image-source-item .image-source-item-header .isi-operate:hover {
  transition: color 0.3s ease-in-out;
  color: #30c5ff;
}
.image-source .image-source-list .image-source-item .image-source-item-body {
  height: 115px;
  padding: 5px 10px 10px;
}
.image-source .image-source-list .image-source-item .image-source-item-body .item-bg-image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 87289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ImageSource_ImageSource)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(48331);
// EXTERNAL MODULE: ./src/pages/Charts/utils/URLUtil.ts
var URLUtil = __webpack_require__(81300);
// EXTERNAL MODULE: ./src/pages/Charts/designer/DesignerType.ts
var DesignerType = __webpack_require__(57404);
// EXTERNAL MODULE: ./src/pages/Charts/framework/operate/index.ts + 3 modules
var operate = __webpack_require__(81611);
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[2]!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[3]!./src/pages/Charts/designer/left/source-list/image-source/ImageSource.less
var ImageSource = __webpack_require__(78423);
;// CONCATENATED MODULE: ./src/pages/Charts/designer/left/source-list/image-source/ImageSource.less

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(ImageSource["default"], options);




       /* harmony default export */ const image_source_ImageSource = (ImageSource["default"] && ImageSource["default"].locals ? ImageSource["default"].locals : undefined);

// EXTERNAL MODULE: ./src/pages/Charts/designer/operate-provider/EventOperateStore.ts
var EventOperateStore = __webpack_require__(20357);
// EXTERNAL MODULE: ./src/pages/Charts/designer/manager/LayerManager.ts
var LayerManager = __webpack_require__(40457);
// EXTERNAL MODULE: ./src/pages/Charts/designer/loader/EditorDesignerLoader.ts
var EditorDesignerLoader = __webpack_require__(70274);
// EXTERNAL MODULE: ./src/pages/Charts/utils/IdGenerate.ts + 2 modules
var IdGenerate = __webpack_require__(34544);
// EXTERNAL MODULE: ./src/pages/Charts/framework/drag-scale/DragAddProvider.ts
var DragAddProvider = __webpack_require__(58780);
// EXTERNAL MODULE: ./node_modules/antd/es/popconfirm/index.js + 2 modules
var popconfirm = __webpack_require__(22518);
// EXTERNAL MODULE: ./src/pages/Charts/designer/operate-provider/undo-redo/HistoryRecordOperateProxy.ts
var HistoryRecordOperateProxy = __webpack_require__(77899);
// EXTERNAL MODULE: ./node_modules/@icon-park/react/es/icons/Help.js
var Help = __webpack_require__(37281);
// EXTERNAL MODULE: ./node_modules/@icon-park/react/es/icons/Close.js
var Close = __webpack_require__(11276);
// EXTERNAL MODULE: ./src/pages/Charts/global/GlobalConstants.ts
var GlobalConstants = __webpack_require__(27639);
// EXTERNAL MODULE: ./node_modules/localforage/dist/localforage.js
var localforage = __webpack_require__(77663);
var localforage_default = /*#__PURE__*/__webpack_require__.n(localforage);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7579);
;// CONCATENATED MODULE: ./src/pages/Charts/designer/left/source-list/image-source/ImageSource.tsx
// import Input from "../../../../json-schema/ui/input/Input";
function ImageSource_ImageSource(){const[imageList,setImageList]=(0,react.useState)([]);const dragAddProvider=(0,react.useRef)(null);//拖拽开始
const dragStart=event=>{// 设置拖拽数据
if(event.target.classList.contains('droppable-element')){var _event$dataTransfer,_event$dataTransfer2;const element=event.target;(_event$dataTransfer=event.dataTransfer)===null||_event$dataTransfer===void 0?void 0:_event$dataTransfer.setData('imageUrl',element.getAttribute('data-url'));(_event$dataTransfer2=event.dataTransfer)===null||_event$dataTransfer2===void 0?void 0:_event$dataTransfer2.setData('imageHash',element.getAttribute('data-hash'));}};//拖拽覆盖
const dragover=event=>{event.preventDefault();// 阻止默认行为以允许拖放
};//释放拖拽元素
const drop=event=>{var _event$dataTransfer3,_event$dataTransfer4;event.preventDefault();const url=(_event$dataTransfer3=event.dataTransfer)===null||_event$dataTransfer3===void 0?void 0:_event$dataTransfer3.getData('imageUrl');const hash=(_event$dataTransfer4=event.dataTransfer)===null||_event$dataTransfer4===void 0?void 0:_event$dataTransfer4.getData('imageHash');if(!url)return;//获取鼠标位置,添加元素
const{scale,dsContentRef}=EventOperateStore["default"];const contentPos=dsContentRef===null||dsContentRef===void 0?void 0:dsContentRef.getBoundingClientRect();const x=(event.clientX-((contentPos===null||contentPos===void 0?void 0:contentPos.x)||0))/scale;const y=(event.clientY-((contentPos===null||contentPos===void 0?void 0:contentPos.y)||0))/scale;addItem("BaseImage",[x,y],url,hash);};const addItem=function(compKey){let position=arguments.length>1&&arguments[1]!==undefined?arguments[1]:[0,0];let url=arguments.length>2?arguments[2]:undefined;let hash=arguments.length>3?arguments[3]:undefined;const{elemConfigs}=LayerManager["default"];let{setAddRecordCompId}=EventOperateStore["default"];const{definitionMap}=EditorDesignerLoader["default"];const definition=definitionMap[compKey];const{compName,width=320,height=200}=definition.getBaseInfo();const id=IdGenerate["default"].generateId();const movableItem={name:compName,type:compKey,x:Math.round(position[0]),y:Math.round(position[1]),id,lock:false,hide:false,width,height};setAddRecordCompId(movableItem.id);HistoryRecordOperateProxy["default"].doAdd(movableItem);//图片资源拖拽要提前设置好图片地址
const initConfig=definition.getInitConfig();initConfig.style.type='local';initConfig.style.localUrl=url;initConfig.style.hash=hash;elemConfigs[id]=initConfig;};const getImageList=async()=>{var _list$;// const {saveType, id} = URLUtil.parseUrlParams();
const list=(await localforage_default().getItem(GlobalConstants.LIGHT_CHASER_PROJECT_LIST))||[];const id=(_list$=list[0])===null||_list$===void 0?void 0:_list$.id;const saveType=DesignerType.SaveType.LOCAL;operate["default"][saveType].getImageSourceList(id).then(data=>{setImageList(data);});};(0,react.useEffect)(()=>{getImageList();//处理拖拽元素到画布中
dragAddProvider.current=new DragAddProvider["default"](document.getElementById("image-source-list"),document.getElementById("designer-ds-content"),dragStart,dragover,drop);return()=>{var _dragAddProvider$curr;return(_dragAddProvider$curr=dragAddProvider.current)===null||_dragAddProvider$curr===void 0?void 0:_dragAddProvider$curr.destroy();};},[]);const confirmDel=imageId=>{const{saveType}=URLUtil["default"].parseUrlParams();operate["default"][saveType].delImageSource(imageId).then(data=>{if(data)getImageList();});};return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:'image-source',children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:'image-source-list',id:'image-source-list',children:imageList.map((item,index)=>{return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:'image-source-item droppable-element',draggable:true,"data-url":item.url,"data-hash":item.hash,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:'image-source-item-header',children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:'isi-title',children:item.name||'无名称信息'}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:'isi-operate',children:/*#__PURE__*/(0,jsx_runtime.jsx)(popconfirm["default"],{title:"\u786E\u8BA4\u5220\u9664\u5417?",icon:/*#__PURE__*/(0,jsx_runtime.jsx)(Help["default"],{style:{color:'red',position:'relative',top:3,marginRight:2}}),description:"\u53EF\u80FD\u4F1A\u5BFC\u81F4\u5DF2\u7ECF\u4F7F\u7528\u7684\u56FE\u7247\u7EC4\u4EF6\u5931\u6548!",onConfirm:()=>confirmDel(item.id),okText:"\u662F",cancelText:"\u5426",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Close["default"],{})})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:'image-source-item-body',children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:'item-bg-image',style:{backgroundImage:`url(${item.url})`}})})]},index);})})});}

/***/ }),

/***/ 58780:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DragAddProvider)
/* harmony export */ });
class DragAddProvider{constructor(dragSource,dragTarget,dragStart,dragOver,drop){this.dragSource=null;this.dragTarget=null;this.dragStart=void 0;this.dragOver=void 0;this.drop=void 0;if(!dragSource||!dragTarget)throw new Error("dragSource or dragTarget is null");this.dragSource=dragSource;this.dragTarget=dragTarget;this.dragStart=dragStart;this.dragOver=dragOver;this.drop=drop;// bind event
this.dragStart&&this.dragSource&&this.dragSource.addEventListener('dragstart',this.dragStart);this.dragOver&&this.dragTarget&&this.dragTarget.addEventListener('dragover',this.dragOver);this.drop&&this.dragTarget&&this.dragTarget.addEventListener('drop',this.drop);}destroy(){// unbind event
this.dragStart&&this.dragSource&&this.dragSource.removeEventListener('dragstart',this.dragStart);this.dragOver&&this.dragTarget&&this.dragTarget.removeEventListener('dragover',this.dragOver);this.drop&&this.dragTarget&&this.dragTarget.removeEventListener('drop',this.drop);}}

/***/ })

}]);