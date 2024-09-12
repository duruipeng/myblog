"use strict";
(self["webpackChunknews"] = self["webpackChunknews"] || []).push([[360],{

/***/ 24190:
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
___CSS_LOADER_EXPORT___.push([module.id, `.list-search {
  padding: 5px;
}
.list-search input {
  background-color: #363636;
  transition: background-color 0.5s;
}
.list-search input:hover {
  background-color: #2a2a2a;
  transition-duration: 0.3s;
}
.list-search input::placeholder {
  color: #818181;
  transition-duration: 0.3s;
}
.list-items {
  padding: 0 5px;
  overflow-y: auto;
  height: calc(100% - 39px);
}
.list-items .list-item {
  width: 100%;
  height: 120px;
  cursor: pointer;
  margin-bottom: 10px;
  background-color: #363636;
}
.list-items .list-item .item-header {
  height: 25px;
  line-height: 25px;
  background-color: #363636;
  display: flex;
  justify-content: space-between;
  padding: 0 5px;
  color: #8d8d8d;
  font-size: 10px;
}
.list-items .list-item .item-content {
  box-sizing: content-box;
  padding: 5px 10px 10px 10px;
}
.list-items .list-item .item-content img {
  width: 100%;
}
@keyframes lcFadeInUp1 {
  0% {
    opacity: 0;
    transform: translateX(20px);
  }
  50% {
    opacity: 1;
    transform: translateX(20px);
  }
  55% {
    opacity: 1;
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 90360:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ compoent_lib_list_CompList)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(48331);
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[2]!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[3]!./src/pages/Charts/designer/left/compoent-lib/list/CompList.less
var CompList = __webpack_require__(24190);
;// CONCATENATED MODULE: ./src/pages/Charts/designer/left/compoent-lib/list/CompList.less

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(CompList["default"], options);




       /* harmony default export */ const list_CompList = (CompList["default"] && CompList["default"].locals ? CompList["default"].locals : undefined);

// EXTERNAL MODULE: ./node_modules/mobx-react/dist/mobxreact.esm.js + 14 modules
var mobxreact_esm = __webpack_require__(81015);
// EXTERNAL MODULE: ./src/pages/Charts/designer/operate-provider/EventOperateStore.ts
var EventOperateStore = __webpack_require__(20357);
// EXTERNAL MODULE: ./src/pages/Charts/json-schema/ui/input/Input.tsx + 1 modules
var Input = __webpack_require__(18548);
// EXTERNAL MODULE: ./src/pages/Charts/utils/IdGenerate.ts + 2 modules
var IdGenerate = __webpack_require__(34544);
// EXTERNAL MODULE: ./src/pages/Charts/designer/loader/EditorDesignerLoader.ts
var EditorDesignerLoader = __webpack_require__(70274);
// EXTERNAL MODULE: ./src/pages/Charts/designer/left/compoent-lib/ComponentListStore.ts
var ComponentListStore = __webpack_require__(79231);
// EXTERNAL MODULE: ./src/pages/Charts/framework/drag-scale/DragAddProvider.ts
var DragAddProvider = __webpack_require__(58780);
// EXTERNAL MODULE: ./src/pages/Charts/designer/operate-provider/undo-redo/HistoryRecordOperateProxy.ts
var HistoryRecordOperateProxy = __webpack_require__(77899);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7579);
;// CONCATENATED MODULE: ./src/pages/Charts/designer/left/compoent-lib/list/CompList.tsx
class CompList_CompList extends react.Component{constructor(props){super(props);this.dragAddProvider=null;//拖拽开始
this.dragStart=event=>{// 设置拖拽数据
if(event.target.classList.contains('droppable-element')){var _event$dataTransfer;const element=event.target;(_event$dataTransfer=event.dataTransfer)===null||_event$dataTransfer===void 0?void 0:_event$dataTransfer.setData('type',element.getAttribute('data-type'));}};//拖拽覆盖
this.dragover=event=>{event.preventDefault();// 阻止默认行为以允许拖放
};//释放拖拽元素
this.drop=event=>{var _event$dataTransfer2;event.preventDefault();const type=(_event$dataTransfer2=event.dataTransfer)===null||_event$dataTransfer2===void 0?void 0:_event$dataTransfer2.getData('type');if(!type)return;//获取鼠标位置,添加元素
const{scale,dsContentRef}=EventOperateStore["default"];const contentPos=dsContentRef===null||dsContentRef===void 0?void 0:dsContentRef.getBoundingClientRect();const x=(event.clientX-((contentPos===null||contentPos===void 0?void 0:contentPos.x)||0))/scale;const y=(event.clientY-((contentPos===null||contentPos===void 0?void 0:contentPos.y)||0))/scale;this.addItem(type,[x,y]);};this.addItem=function(compKey){var _definitionMap$compKe;let position=arguments.length>1&&arguments[1]!==undefined?arguments[1]:[0,0];let{setAddRecordCompId}=EventOperateStore["default"];const{definitionMap}=EditorDesignerLoader["default"];const{compName,width=320,height=200}=((_definitionMap$compKe=definitionMap[compKey])===null||_definitionMap$compKe===void 0?void 0:_definitionMap$compKe.getBaseInfo())||{};const movableItem={name:compName,type:compKey,x:Math.round(position[0]),y:Math.round(position[1]),id:IdGenerate["default"].generateId(),lock:false,hide:false,width,height};//标识本次操作为手动添加组件，与回滚撤销区分开
setAddRecordCompId(movableItem.id);HistoryRecordOperateProxy["default"].doAdd(movableItem);};this.getChartDom=()=>{const chartDom=[];let{compInfoArr,search,categories,subCategories}=ComponentListStore["default"];// console.log("componentListStore",componentListStore);
// console.log("compInfoArr",compInfoArr);
if(categories!=="all"){compInfoArr=compInfoArr.filter(item=>{return item.categorize===categories;});}if(subCategories!=="all"){compInfoArr=compInfoArr.filter(item=>{return item.subCategorize===subCategories;});}if(search!==''){compInfoArr=compInfoArr.filter(item=>{return item.compName.indexOf(search)>=0;});}for(let i=0;i<compInfoArr.length;i++){const compInfo=compInfoArr[i];const{compName,compKey}=compInfo;const definition=EditorDesignerLoader["default"].definitionMap[compKey];const chartImg=definition.getChartImg();chartDom.push(/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:'list-item droppable-element',draggable:true,onDoubleClick:()=>this.addItem(compKey),"data-type":compKey,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{pointerEvents:'none'},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:'item-header',ref:'drag-target',children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:'item-name',children:compName})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:'item-content',children:/*#__PURE__*/(0,jsx_runtime.jsx)("img",{src:chartImg,alt:compName})})]})},i+''));}return chartDom;};this.searchChart=data=>{const{setSearch}=ComponentListStore["default"];setSearch&&setSearch(data);};const{doInit}=ComponentListStore["default"];doInit&&doInit();}componentDidMount(){let count=0;const interval=setInterval(()=>{const cdc=document.getElementById("component-drag-container");const ddc=document.getElementById("designer-ds-content");if(cdc&&ddc){clearInterval(interval);//处理拖拽元素到画布中
this.dragAddProvider=new DragAddProvider["default"](document.getElementById("component-drag-container"),document.getElementById("designer-ds-content"),this.dragStart,this.dragover,this.drop);}//尝试挂载拖拽组件100次后放弃
if(++count>100){clearInterval(interval);console.warn("组件列表与画布拖拽关联失败，无法通过拖拽添加组件。");}},100);}componentWillUnmount(){var _this$dragAddProvider;(_this$dragAddProvider=this.dragAddProvider)===null||_this$dragAddProvider===void 0?void 0:_this$dragAddProvider.destroy();}render(){return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:'list-search',children:/*#__PURE__*/(0,jsx_runtime.jsx)(Input["default"],{placeholder:"\u641C\u7D22\u7EC4\u4EF6",onChange:this.searchChart})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:'list-items',id:'component-drag-container',children:this.getChartDom()})]});}}/* harmony default export */ const compoent_lib_list_CompList = ((0,mobxreact_esm.observer)(CompList_CompList));

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