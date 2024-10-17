"use strict";
(self["webpackChunknews"] = self["webpackChunknews"] || []).push([[1914],{

/***/ 76676:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ common_component_base_info_BaseInfo)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[2]!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[3]!./src/pages/Charts/comps/common-component/base-info/BaseInfo.less
var BaseInfo = __webpack_require__(97921);
;// ./src/pages/Charts/comps/common-component/base-info/BaseInfo.less

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(BaseInfo["default"], options);




       /* harmony default export */ const base_info_BaseInfo = (BaseInfo["default"] && BaseInfo["default"].locals ? BaseInfo["default"].locals : undefined);

// EXTERNAL MODULE: ./src/pages/Charts/designer/manager/LayerManager.ts
var LayerManager = __webpack_require__(99113);
// EXTERNAL MODULE: ./src/pages/Charts/json-schema/LCGUI.tsx
var LCGUI = __webpack_require__(40058);
// EXTERNAL MODULE: ./src/pages/Charts/designer/operate-provider/EventOperateStore.ts
var EventOperateStore = __webpack_require__(50469);
// EXTERNAL MODULE: ./src/pages/Charts/comps/common-component/base-info/BaseInfoStore.ts
var BaseInfoStore = __webpack_require__(36219);
// EXTERNAL MODULE: ./src/pages/Charts/designer/right/RightStore.ts
var RightStore = __webpack_require__(52129);
// EXTERNAL MODULE: ./src/pages/Charts/designer/loader/EditorDesignerLoader.ts
var EditorDesignerLoader = __webpack_require__(63426);
// EXTERNAL MODULE: ./src/pages/Charts/designer/left/layer-list/LayerListStore.ts
var LayerListStore = __webpack_require__(50516);
// EXTERNAL MODULE: ./src/pages/Charts/designer/left/layer-list/util/LayerUtil.ts
var LayerUtil = __webpack_require__(86736);
// EXTERNAL MODULE: ./src/pages/Charts/designer/header/items/canvas/CanvasManager.ts
var CanvasManager = __webpack_require__(56178);
// EXTERNAL MODULE: ./node_modules/@icon-park/react/es/icons/AlignLeftTwo.js
var AlignLeftTwo = __webpack_require__(36476);
// EXTERNAL MODULE: ./node_modules/@icon-park/react/es/icons/AlignHorizontalCenterTwo.js
var AlignHorizontalCenterTwo = __webpack_require__(19376);
// EXTERNAL MODULE: ./node_modules/@icon-park/react/es/icons/AlignRightTwo.js
var AlignRightTwo = __webpack_require__(67181);
// EXTERNAL MODULE: ./node_modules/@icon-park/react/es/icons/AlignTopTwo.js
var AlignTopTwo = __webpack_require__(54098);
// EXTERNAL MODULE: ./node_modules/@icon-park/react/es/icons/AlignVerticalCenterTwo.js
var AlignVerticalCenterTwo = __webpack_require__(69854);
// EXTERNAL MODULE: ./node_modules/@icon-park/react/es/icons/AlignBottomTwo.js
var AlignBottomTwo = __webpack_require__(43222);
// EXTERNAL MODULE: ./node_modules/@icon-park/react/es/icons/Info.js
var Info = __webpack_require__(73946);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(12955);
;// ./src/pages/Charts/comps/common-component/base-info/BaseInfo.tsx
/**
 * lc组件基础信息
 */class BaseInfo_BaseInfo extends react.Component{constructor(props){super(props);this.init=()=>{const{activeElem}=RightStore["default"];const{layerConfigs}=LayerManager["default"];const layer=layerConfigs[activeElem.id];if(!layer)return;if(layer.type==='group'){//分组图层
const childLayerIds=LayerUtil["default"].findAllChildLayer([layer.id]).filter(id=>{var _layerConfigs$id;return((_layerConfigs$id=layerConfigs[id])===null||_layerConfigs$id===void 0?void 0:_layerConfigs$id.type)!=='group';});const rect=this.calculateGroupRect(childLayerIds);this.state={...layer,...rect};}else{var _editorDesignerLoader;//普通组件
const baseInfo=(_editorDesignerLoader=EditorDesignerLoader["default"].definitionMap[layer.type])===null||_editorDesignerLoader===void 0?void 0:_editorDesignerLoader.getBaseInfo();this.state={...layer,version:baseInfo===null||baseInfo===void 0?void 0:baseInfo.version};}};this.calculateGroupRect=childLayerIds=>{const{layerConfigs}=LayerManager["default"];let minX=+Infinity,minY=+Infinity,maxX=-Infinity,maxY=-Infinity;childLayerIds.forEach(layerId=>{const{x=0,y=0,width=0,height=0}=layerConfigs[layerId];minX=Math.min(minX,x);minY=Math.min(minY,y);maxX=Math.max(maxX,x+width);maxY=Math.max(maxY,y+height);});return{x:minX,y:minY,width:maxX-minX,height:maxY-minY};};this.changeName=value=>{const{controller}=this.props;controller.update({base:{name:value}},{reRender:false});const{updateLayer}=LayerManager["default"];updateLayer&&updateLayer([{id:this.state.id,name:value}]);//如果显示图层,则更新图层名称
const{layerInstances}=LayerListStore["default"];const layerInstance=layerInstances[this.state.id];layerInstance&&layerInstance.setState({name:value});};this.handleMap={"name":this.changeName,"width":value=>{var _eventOperateStore$mo;return(_eventOperateStore$mo=EventOperateStore["default"].movableRef)===null||_eventOperateStore$mo===void 0?void 0:_eventOperateStore$mo.request("resizable",{offsetWidth:value,direction:[1,1]},true);},"height":value=>{var _eventOperateStore$mo2;return(_eventOperateStore$mo2=EventOperateStore["default"].movableRef)===null||_eventOperateStore$mo2===void 0?void 0:_eventOperateStore$mo2.request("resizable",{offsetHeight:value,direction:[1,1]},true);},"posX":value=>{var _eventOperateStore$mo3;return(_eventOperateStore$mo3=EventOperateStore["default"].movableRef)===null||_eventOperateStore$mo3===void 0?void 0:_eventOperateStore$mo3.request("draggable",{x:value},true);},"posY":value=>{var _eventOperateStore$mo4;return(_eventOperateStore$mo4=EventOperateStore["default"].movableRef)===null||_eventOperateStore$mo4===void 0?void 0:_eventOperateStore$mo4.request("draggable",{y:value},true);},"align":align=>{var _this$handleMap$align,_this$handleMap;return(_this$handleMap$align=(_this$handleMap=this.handleMap)[align])===null||_this$handleMap$align===void 0?void 0:_this$handleMap$align.call(_this$handleMap);},"left":()=>{var _eventOperateStore$mo5;return(_eventOperateStore$mo5=EventOperateStore["default"].movableRef)===null||_eventOperateStore$mo5===void 0?void 0:_eventOperateStore$mo5.request("draggable",{x:0},true);},"horizontally":()=>{var _eventOperateStore$mo6;return(_eventOperateStore$mo6=EventOperateStore["default"].movableRef)===null||_eventOperateStore$mo6===void 0?void 0:_eventOperateStore$mo6.request("draggable",{x:CanvasManager["default"].canvasConfig.width/2-this.state.width/2},true);},"right":()=>{var _eventOperateStore$mo7;return(_eventOperateStore$mo7=EventOperateStore["default"].movableRef)===null||_eventOperateStore$mo7===void 0?void 0:_eventOperateStore$mo7.request("draggable",{x:CanvasManager["default"].canvasConfig.width-this.state.width},true);},"top":()=>{var _eventOperateStore$mo8;return(_eventOperateStore$mo8=EventOperateStore["default"].movableRef)===null||_eventOperateStore$mo8===void 0?void 0:_eventOperateStore$mo8.request("draggable",{y:0},true);},"vertically":()=>{var _eventOperateStore$mo9;return(_eventOperateStore$mo9=EventOperateStore["default"].movableRef)===null||_eventOperateStore$mo9===void 0?void 0:_eventOperateStore$mo9.request("draggable",{y:CanvasManager["default"].canvasConfig.height/2-this.state.height/2},true);},"bottom":()=>{var _eventOperateStore$mo10;return(_eventOperateStore$mo10=EventOperateStore["default"].movableRef)===null||_eventOperateStore$mo10===void 0?void 0:_eventOperateStore$mo10.request("draggable",{y:CanvasManager["default"].canvasConfig.height-this.state.height},true);}};this.onFieldChange=fieldChangeData=>{const{id:key,data}=fieldChangeData;const{targetIds,setTargetIds}=EventOperateStore["default"];if(!targetIds.includes(this.state.id)){const{type}=this.state;if(type==='group'){const{layerConfigs}=LayerManager["default"];const childIds=LayerUtil["default"].findAllChildLayer([this.state.id]).filter(id=>{var _layerConfigs$id2;return((_layerConfigs$id2=layerConfigs[id])===null||_layerConfigs$id2===void 0?void 0:_layerConfigs$id2.type)!=='group';});setTargetIds(childIds);}else{setTargetIds([this.state.id]);}}const layerTimer=setTimeout(()=>{var _this$handleMap2,_this$handleMap3;(_this$handleMap2=(_this$handleMap3=this.handleMap)[key])===null||_this$handleMap2===void 0?void 0:_this$handleMap2.call(_this$handleMap3,data);clearTimeout(layerTimer);},1);};this.buildSchema=()=>{const{name,width,height,x,y}=this.state;return{type:'grid',config:{columns:2},children:[{id:"name",key:"name",label:"名称",type:"input",value:name,config:{containerStyle:{gridColumn:'1/3'}}},{type:'grid',label:'尺寸',config:{columns:2,containerStyle:{gridColumn:'1/3'}},children:[{id:"width",key:"width",type:"number-input",label:"宽度",value:width,reRender:true},{id:"height",key:"height",type:"number-input",label:"高度",value:height,reRender:true}]},{type:'grid',label:'位置',config:{columns:2,containerStyle:{gridColumn:'1/3'}},children:[{id:"posX",key:"posX",type:"number-input",label:"X轴",reRender:true,value:x},{id:"posY",key:"posY",type:"number-input",label:"Y轴",reRender:true,value:y}]},{id:'align',label:'对齐',type:'group-button',config:{containerStyle:{gridColumn:'1/3'},items:[{value:'left',content:/*#__PURE__*/(0,jsx_runtime.jsx)(AlignLeftTwo["default"],{theme:"filled",size:"16",strokeWidth:2,strokeLinecap:"square"})},{value:'horizontally',content:/*#__PURE__*/(0,jsx_runtime.jsx)(AlignHorizontalCenterTwo["default"],{theme:"filled",size:"16",strokeWidth:2,strokeLinecap:"square"})},{value:'right',content:/*#__PURE__*/(0,jsx_runtime.jsx)(AlignRightTwo["default"],{theme:"filled",size:"16",strokeWidth:2,strokeLinecap:"square"})},{value:'top',content:/*#__PURE__*/(0,jsx_runtime.jsx)(AlignTopTwo["default"],{theme:"filled",size:"16",strokeWidth:2,strokeLinecap:"square"})},{value:'vertically',content:/*#__PURE__*/(0,jsx_runtime.jsx)(AlignVerticalCenterTwo["default"],{theme:"filled",size:"16",strokeWidth:2,strokeLinecap:"square"})},{value:'bottom',content:/*#__PURE__*/(0,jsx_runtime.jsx)(AlignBottomTwo["default"],{theme:"filled",size:"16",strokeWidth:2,strokeLinecap:"square"})}]}}]};};this.init();}componentDidMount(){const{setBaseConfigRef}=BaseInfoStore["default"];setBaseConfigRef&&setBaseConfigRef(this);}componentWillUnmount(){const{setBaseConfigRef}=BaseInfoStore["default"];setBaseConfigRef&&setBaseConfigRef(null);}render(){const{type,version}=this.state;const schema=this.buildSchema();return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:'base-info-config',children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:'version-info',children:/*#__PURE__*/(0,jsx_runtime.jsxs)("span",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Info["default"],{})," ",type," | ",version?`版本: ${version}`:'无版本信息']})}),/*#__PURE__*/(0,jsx_runtime.jsx)(LCGUI.LCGUI,{schema:schema,onFieldChange:this.onFieldChange})]});}}/* harmony default export */ const common_component_base_info_BaseInfo = (BaseInfo_BaseInfo);

/***/ }),

/***/ 97921:
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
___CSS_LOADER_EXPORT___.push([module.id, `.base-info-config .version-info {
  font-size: 12px;
  color: #b6b8bb;
  padding: 8px;
  margin-bottom: 10px;
  border-left: 3px solid #626262;
  background-color: #313131;
}
.base-info-config .lc-input-prefix {
  width: 18px;
}
.base-info-config .group-button img {
  width: 15px;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);