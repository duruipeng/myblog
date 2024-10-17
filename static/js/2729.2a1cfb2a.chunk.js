"use strict";
(self["webpackChunknews"] = self["webpackChunknews"] || []).push([[2729],{

/***/ 22729:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ blueprint_BPCanvas)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(37995);
// EXTERNAL MODULE: ./src/pages/Charts/designer/blueprint/drag/BPMovable.tsx
var BPMovable = __webpack_require__(82960);
// EXTERNAL MODULE: ./src/pages/Charts/designer/blueprint/manager/BluePrintManager.ts
var BluePrintManager = __webpack_require__(78099);
// EXTERNAL MODULE: ./src/pages/Charts/designer/blueprint/util/CanvasUtil.ts
var CanvasUtil = __webpack_require__(68720);
// EXTERNAL MODULE: ./src/pages/Charts/json-schema/ui/loading/Loading.tsx
var Loading = __webpack_require__(96206);
// EXTERNAL MODULE: ./src/pages/Charts/designer/blueprint/node/core/AbstractBPNodeController.ts
var AbstractBPNodeController = __webpack_require__(95154);
// EXTERNAL MODULE: ./src/pages/Charts/utils/IdGenerate.ts + 2 modules
var IdGenerate = __webpack_require__(21255);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(12955);
;// ./src/pages/Charts/designer/blueprint/line/LineLayer.tsx
class LineLayer extends react.Component{constructor(){super(...arguments);//上层
this.upLayer=null;//下层
this.downLayer=null;this.currentLine={color:"#c0c0c0",lineWidth:1,lineDash:[10,10],startPoint:{x:0,y:0},endPoint:{x:0,y:0},firstCP:{x:0,y:0},secondCP:{x:0,y:0}};//鼠标是否按下
this.keyDown=false;//是否移动
this.keyMove=false;this.bpMouseDown=e=>{const{target}=e;if(!target||!target.classList.contains('ap-circle'))return;const pointDom=e.target;const pointInfoArr=pointDom.id.split(":");if(pointInfoArr&&pointInfoArr.length===3&&pointInfoArr[2]===AbstractBPNodeController.AnchorPointType.INPUT.toString())return;const{canvasOffset}=BluePrintManager["default"];//设置起始点坐标
const{x,y,width,height}=pointDom.getBoundingClientRect();// console.log("x:",x);
// console.log("y:",y);
// console.log("width:",width);
// console.log("height:",height);
// console.log("canvasOffset:",canvasOffset);
this.currentLine.startPoint={x:x+width/2-canvasOffset.x,y:y+height/2-canvasOffset.y};this.currentLine.startAnchorId=pointDom.id;this.keyDown=true;};this.bpMouseUp=e=>{var _endElem$id,_e$target;const{nodeContainerRef,upCtx}=BluePrintManager["default"];const{width:canvasW,height:canvasH}=nodeContainerRef===null||nodeContainerRef===void 0?void 0:nodeContainerRef.getBoundingClientRect();const endElem=e.target;if(!this.keyMove||!endElem||!endElem.classList.contains('ap-circle')||((_endElem$id=endElem.id)===null||_endElem$id===void 0?void 0:_endElem$id.split(":")[2])!==AbstractBPNodeController.AnchorPointType.INPUT.toString()){//清空画布
upCtx===null||upCtx===void 0?void 0:upCtx.clearRect(0,0,canvasW+10,canvasH+10);this.keyDown=false;return;}const{canvasOffset}=BluePrintManager["default"];this.keyMove=false;this.keyDown=false;BluePrintManager["default"].upCtx.clearRect(0,0,canvasW+10,canvasH+10);//在下层绘制当前操作的线条
this.currentLine.id=IdGenerate["default"].generateId();this.currentLine.lineDash=[];this.currentLine.lineWidth=1;this.currentLine.color="#a2a2a2";this.currentLine.endAnchorId=e.target.id;const{x,y,width:apw,height:aph}=(_e$target=e.target)===null||_e$target===void 0?void 0:_e$target.getBoundingClientRect();this.currentLine.endPoint={x:x+apw/2-canvasOffset.x,y:y+aph/2-canvasOffset.y};CanvasUtil["default"].drawBezierCurves(BluePrintManager["default"].downCtx,[this.currentLine]);//计算线条的采样点，用于计算线条是否被选中
const{id,startPoint,endPoint,firstCP,secondCP,lineDash,startAnchorId,endAnchorId,color,lineWidth}=this.currentLine;const samplePointArr=CanvasUtil["default"].sampleBezierCurve(startPoint,firstCP,secondCP,endPoint,20);const{addAPMap,addLine,addAPLineMap}=BluePrintManager["default"];addLine({id:id,color:color,lineWidth:lineWidth,lineDash:lineDash,startPoint:{...startPoint},endPoint:{...endPoint},firstCP:{...firstCP},secondCP:{...secondCP},samplePoints:samplePointArr,startAnchorId:startAnchorId,endAnchorId:endAnchorId});addAPMap(this.currentLine.startAnchorId,this.currentLine.endAnchorId);//添加锚点与线条的关联关系
addAPLineMap(this.currentLine.startAnchorId,this.currentLine.id);addAPLineMap(this.currentLine.endAnchorId,this.currentLine.id);};this.bpMouseMove=e=>{if(!this.keyDown)return;this.keyMove=true;const{startPoint,endPoint}=this.currentLine;const{nodeContainerRef,canvasOffset}=BluePrintManager["default"];const{width:canvasW,height:canvasH}=nodeContainerRef===null||nodeContainerRef===void 0?void 0:nodeContainerRef.getBoundingClientRect();//设置鼠标坐标
this.currentLine.endPoint={x:e.clientX-canvasOffset.x,y:e.clientY-canvasOffset.y};const contPoi=CanvasUtil["default"].calculateControlPoint(startPoint,endPoint);this.currentLine.firstCP=contPoi.firstCP;this.currentLine.secondCP=contPoi.secondCP;//清空画布
BluePrintManager["default"].upCtx.clearRect(0,0,canvasW+10,canvasH+10);CanvasUtil["default"].drawBezierCurves(BluePrintManager["default"].upCtx,[{color:"#c0c0c0",lineWidth:1,lineDash:[10,10],startPoint:this.currentLine.startPoint,endPoint:this.currentLine.endPoint,firstCP:this.currentLine.firstCP,secondCP:this.currentLine.secondCP}]);};}componentDidMount(){const{setUpCtx,setDownCtx}=BluePrintManager["default"];setUpCtx(this.upLayer.getContext('2d'));setDownCtx(this.downLayer.getContext('2d'));document.addEventListener('mousedown',this.bpMouseDown);document.addEventListener('mouseup',this.bpMouseUp);document.addEventListener('mousemove',this.bpMouseMove);}componentWillUnmount(){document.removeEventListener('mousedown',this.bpMouseDown);document.removeEventListener('mouseup',this.bpMouseUp);document.removeEventListener('mousemove',this.bpMouseMove);}render(){const width=window.innerWidth-670,height=window.innerHeight-85;const _canvasStyle={position:"inherit",top:0,left:0};return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{position:"absolute"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("canvas",{style:_canvasStyle,width:width,height:height,ref:ref=>this.downLayer=ref}),/*#__PURE__*/(0,jsx_runtime.jsx)("canvas",{style:_canvasStyle,width:width,height:height,ref:ref=>this.upLayer=ref})]});}}/* harmony default export */ const line_LineLayer = (LineLayer);
// EXTERNAL MODULE: ./node_modules/react-selecto/dist/selecto.esm.js + 2 modules
var selecto_esm = __webpack_require__(99287);
;// ./src/pages/Charts/designer/blueprint/drag/BPSelectable.tsx
const BPSelectable=props=>{const{children}=props;const selectorRef=/*#__PURE__*/react.createRef();(0,react.useEffect)(()=>{const{setBpSelectRef}=BluePrintManager["default"];setBpSelectRef(selectorRef.current);});const onDragStart=e=>{const{bpMovableRef,selectedNodes}=BluePrintManager["default"];const target=e.inputEvent.target;if(bpMovableRef.isMoveableElement(target)||selectedNodes.some(t=>t===target||t.contains(target))){e.stop();}};const onSelectEnd=e=>{let{selected}=e;const{bpMovableRef,setSelectedNodes}=BluePrintManager["default"];selected=selected.filter(item=>item.classList.contains('bp-node-container'));//更新选中的组件
setSelectedNodes(selected);if(selected.length===0)return;//如果为拖拽，则将当前的整个dom事件传递给movable，确保选中元素后可以立马拖拽
if(e.isDragStart){e.inputEvent.preventDefault();const tempTimer=setTimeout(()=>{bpMovableRef.dragStart(e.inputEvent);clearTimeout(tempTimer);});}};return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[children,/*#__PURE__*/(0,jsx_runtime.jsx)(selecto_esm["default"],{ref:selectorRef,dragContainer:".blue-print-canvas",selectableTargets:[".bp-node-container"],hitRate:0,ratio:0,selectByClick:true,selectFromInside:false,toggleContinueSelect:["ctrl"],onDragStart:onDragStart,onSelectEnd:onSelectEnd})]});};
// EXTERNAL MODULE: ./node_modules/mobx-react/dist/mobxreact.esm.js + 14 modules
var mobxreact_esm = __webpack_require__(96499);
// EXTERNAL MODULE: ./src/pages/Charts/framework/drag-scale/DragScaleProvider.tsx + 1 modules
var DragScaleProvider = __webpack_require__(39019);
;// ./src/pages/Charts/designer/blueprint/node/BPDragScaleContainer.tsx
const BPDragScaleContainer=props=>{const{children}=props;const containerRef=react.useRef(null);const contentRef=react.useRef(null);(0,react.useEffect)(()=>{const{setCanvasTranslate,setCanvasScale,setBpDragContentRef}=BluePrintManager["default"];const container=containerRef.current;const content=contentRef.current;setBpDragContentRef(content);if(container&&content){const dragScaleProvider=new DragScaleProvider["default"]({container,content,dragCallback:dsData=>{const{position}=dsData;setCanvasTranslate(position);(0,BPMovable.reRenderAllLine)();},dragEndCallback:()=>{CanvasUtil["default"].updSegmentSamplingPoint();},scaleCallback:dsData=>{const{position,scale}=dsData;setCanvasScale(scale);setCanvasTranslate(position);(0,BPMovable.reRenderAllLine)();CanvasUtil["default"].updSegmentSamplingPoint();}});return()=>{dragScaleProvider.destroy();};}return()=>{// 清理函数
//这个错误提示表示在你的 useEffect 钩子中，某些代码路径没有返回值。useEffect 本身不需要返回值，但如果你在 useEffect 中使用了一个清理函数（cleanup function），就需要确保所有的代码路径都正确返回。
};},[]);return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:'bp-ds-container',id:'bp-ds-container',ref:containerRef,style:{overflow:"hidden",width:'100%',height:'100%'},children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{ref:contentRef,style:{width:0,height:0},children:children})});};
// EXTERNAL MODULE: ./src/pages/Charts/designer/blueprint/node/core/impl/BPNodeControllerMap.ts + 1 modules
var BPNodeControllerMap = __webpack_require__(21767);
// EXTERNAL MODULE: ./src/pages/Charts/designer/blueprint/right/BPRightStore.ts
var BPRightStore = __webpack_require__(56687);
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[2]!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[3]!./src/pages/Charts/designer/blueprint/node/core/node-container/BPNodeContainer.less
var BPNodeContainer = __webpack_require__(45503);
;// ./src/pages/Charts/designer/blueprint/node/core/node-container/BPNodeContainer.less

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(BPNodeContainer["default"], options);




       /* harmony default export */ const node_container_BPNodeContainer = (BPNodeContainer["default"] && BPNodeContainer["default"].locals ? BPNodeContainer["default"].locals : undefined);

;// ./src/pages/Charts/designer/blueprint/node/core/node-container/BPNodeContainer.tsx
const BPNodeContainer_BPNodeContainer=/*#__PURE__*/react.memo(_ref=>{let{layout}=_ref;const ref=(0,react.useRef)(null);const activeNodeConfig=id=>{const{setActiveNode}=BPRightStore["default"];setActiveNode(id);};(0,react.useEffect)(()=>{const NodeController=BPNodeControllerMap["default"].get(layout.type);if(!NodeController)return;const ncIns=new NodeController();if(!ncIns)return;const{bpNodeControllerInsMap,bpNodeConfigMap}=BluePrintManager["default"];//获取节点配置，优先从bpStore.bpNodeConfigMap中获取【已经保存的配置】，没有的，则调用controller的getNodeConfig方法获取【默认配置】
let nodeInfo=bpNodeConfigMap[layout.id];if(!nodeInfo)nodeInfo=ncIns.getNodeInfo(layout.id);ncIns.create(ref.current,nodeInfo);bpNodeControllerInsMap[layout.id]=ncIns;},[layout.id,layout.type]);const{position,id}=layout;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{ref:ref,className:'bp-node-container',id:`bpnode:${id}`,onDoubleClick:()=>activeNodeConfig(id),style:{transform:'translate('+position.x+'px,'+position.y+'px)'}});});
;// ./src/pages/Charts/designer/blueprint/node/NodeLayer.tsx
const NodeLayer=(0,mobxreact_esm.observer)(()=>{const{bpNodeLayoutMap}=BluePrintManager["default"];const _npNodeConRef=(0,react.useRef)(null);(0,react.useEffect)(()=>{const{setNodeContainerRef}=BluePrintManager["default"];setNodeContainerRef(_npNodeConRef.current);},[]);return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{id:'bp-node-container',style:{position:'relative',width:'100%',height:'100%'},ref:_npNodeConRef,children:/*#__PURE__*/(0,jsx_runtime.jsx)(BPSelectable,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(BPDragScaleContainer,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(BPMovable.BPMovable,{children:Object.values(bpNodeLayoutMap).map(layout=>{return/*#__PURE__*/(0,jsx_runtime.jsx)(BPNodeContainer_BPNodeContainer,{layout:layout},layout.id);})})})})});});/* harmony default export */ const node_NodeLayer = (NodeLayer);
;// ./src/pages/Charts/designer/blueprint/BPCanvas.tsx
/**
 * todo 该方法要做性能优化，考虑防抖避免频繁采样和线段重复绘制，用算法做好碰撞检测
 * 蓝图画布点击事件，监控鼠标是否命中线段
 * @param event
 */const lineSegmentCollisions=event=>{const{clientX,clientY,shiftKey}=event;const{selectedLines,setSelectedLines,downCtx}=BluePrintManager["default"];//清除之前的选中线
if(selectedLines.length>0){selectedLines.forEach(line=>{line.lineWidth=1;line.color='#a2a2a2';(0,BPMovable.reRenderAllLine)();CanvasUtil["default"].updSegmentSamplingPoint();});setSelectedLines([]);}if(!shiftKey)return;const{bpLines,canvasOffset}=BluePrintManager["default"];const targetLines=[];const mousePoint={x:clientX-canvasOffset.x,y:clientY-canvasOffset.y};Object.values(bpLines).forEach(line=>{CanvasUtil["default"].isMouseInRectangle(mousePoint,line.startPoint,line.endPoint)&&targetLines.push(line);});if(targetLines.length===0)return;//遍历有效范围内的线条是否命中
const hitLines=[];for(let i=0;i<targetLines.length;i++){const targetLine=targetLines[i];const{samplePoints}=targetLine;if(CanvasUtil["default"].isMouseOnLine(mousePoint,samplePoints,5)){targetLine.lineWidth=2;targetLine.color='#d9d9d9';hitLines.push(targetLine);CanvasUtil["default"].drawBezierCurves(downCtx,[targetLine]);CanvasUtil["default"].updSegmentSamplingPoint();break;}}setSelectedLines(hitLines);};const BPCanvas=()=>{(0,react.useEffect)(()=>{//加载完毕后绘制链接线（由于节点组件的创建与渲染都是异步的，需要等节点的锚点都渲染完毕后才能确定连线的位置，因此暂时使用异步延时连线的渲染时机）
// todo  要调整为更精确的时机
const renderLineTimer=setTimeout(()=>{(0,BPMovable.reRenderAllLine)();CanvasUtil["default"].updSegmentSamplingPoint();clearTimeout(renderLineTimer);},50);const{nodeContainerRef}=BluePrintManager["default"];nodeContainerRef===null||nodeContainerRef===void 0?void 0:nodeContainerRef.addEventListener('click',lineSegmentCollisions);return()=>nodeContainerRef===null||nodeContainerRef===void 0?void 0:nodeContainerRef.removeEventListener('click',lineSegmentCollisions);},[]);return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:'blue-print-canvas',style:{overflow:"hidden",width:'100%',height:'100%'},children:/*#__PURE__*/(0,jsx_runtime.jsxs)(react.Suspense,{fallback:/*#__PURE__*/(0,jsx_runtime.jsx)(Loading["default"],{}),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(line_LineLayer,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(node_NodeLayer,{})]})});};/* harmony default export */ const blueprint_BPCanvas = (BPCanvas);

/***/ }),

/***/ 56687:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27876);
class BPRightStore{constructor(){this.activeNode=null;this.setActiveNode=node=>{this.activeNode=node;};(0,mobx__WEBPACK_IMPORTED_MODULE_0__.makeObservable)(this,{activeNode:mobx__WEBPACK_IMPORTED_MODULE_0__.observable,setActiveNode:mobx__WEBPACK_IMPORTED_MODULE_0__.action});}}const bpRightStore=new BPRightStore();/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bpRightStore);

/***/ }),

/***/ 39019:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DragScaleProvider)
});

;// ./src/pages/Charts/designer/operate-provider/scale/ScaleCore.ts
/**
 * 缩放参数计算核心类
 */class ScaleCore{constructor(){this.max=3;this.min=0.05;this.scale=1;this.ratio=1;this.compute=type=>{let _ratio=1.2;// 缩小
if(type===0)_ratio=1/1.2;// 限制缩放倍数
let _scale=this.scale*_ratio;if(_scale>this.max){_ratio=this.max/this.scale;_scale=this.max;}else if(_scale<this.min){_ratio=this.min/this.scale;_scale=this.min;}this.scale=_scale;this.ratio=_ratio;};}}const scaleCore=new ScaleCore();/* harmony default export */ const scale_ScaleCore = (scaleCore);
;// ./src/pages/Charts/framework/drag-scale/DragScaleProvider.tsx
/**
 * 拖拽缩放容器，独立提供拖拽与缩放功能。
 * 1.拖拽画布统一操作方式为长按鼠标右键
 * 2.缩放画布统一操作方式alt+鼠标滚轮
 * 上述两种操作的相关事件均在此组件内部完成（除缩放逻辑外，缩放逻辑调用外部方法获取scale比例）
 *
 * 主编辑器、蓝图编辑器均使用该类提供拖拽缩放功能
 */class DragScaleProvider{constructor(params){this.container=null;this.content=null;this.position={x:0,y:0};this.dragCallback=void 0;this.scaleCallback=void 0;this.dragStartCallback=void 0;this.dragEndCallback=void 0;this.scaleCore=new ScaleCore();this.contextMenu=e=>e.preventDefault();this.onDragStart=()=>{var _this$container;return(_this$container=this.container)===null||_this$container===void 0?void 0:_this$container.addEventListener('pointerdown',this.pointerDown);};this.onDragMove=e=>{if(e.buttons===2){this.position.x+=e.movementX;this.position.y+=e.movementY;this.content.style.transform='translate3d('+this.position.x+'px, '+this.position.y+'px, 0) scale('+this.scaleCore.scale+')';if(this.dragCallback){const{scale,ratio}=this.scaleCore;this.dragCallback({scale,ratio,position:this.position},e);}}};this.onDragEnd=()=>{var _this$container2;return(_this$container2=this.container)===null||_this$container2===void 0?void 0:_this$container2.addEventListener('pointerup',this.pointerUp);};this.pointerDown=e=>{if(e.button===2){var _this$container3,_this$container4;//设置鼠标捕获，当鼠标移出视口外时，仍然能够监听到鼠标移动事件
(_this$container3=this.container)===null||_this$container3===void 0?void 0:_this$container3.setPointerCapture(e.pointerId);//监听拖拽移动
(_this$container4=this.container)===null||_this$container4===void 0?void 0:_this$container4.addEventListener('pointermove',this.onDragMove);if(this.dragStartCallback){const{scale,ratio}=this.scaleCore;this.dragStartCallback({scale,ratio,position:this.position},e);}}};this.pointerUp=e=>{if(e.button===2){var _this$container5,_this$container6;(_this$container5=this.container)===null||_this$container5===void 0?void 0:_this$container5.releasePointerCapture(e.pointerId);//取消拖拽移动监听
(_this$container6=this.container)===null||_this$container6===void 0?void 0:_this$container6.removeEventListener('pointermove',this.onDragMove);if(this.dragEndCallback){const{scale,ratio}=this.scaleCore;this.dragEndCallback({scale,ratio,position:this.position},e);}}};/************************注册缩放事件************************/this.registerScale=()=>{var _this$container7;return(_this$container7=this.container)===null||_this$container7===void 0?void 0:_this$container7.addEventListener('wheel',this.doWheel);};this.doWheel=e=>{if(e.altKey&&e.buttons!==2){var _this$content;//计算缩放比例
this.scaleCore.compute(e.deltaY>0?0:1);const{x:offSetX,y:offSetY}=this.container.getBoundingClientRect();//执行缩放
const{width,height}=(_this$content=this.content)===null||_this$content===void 0?void 0:_this$content.style;this.position.x=this.position.x-(this.scaleCore.ratio-1)*(e.clientX-offSetX-this.position.x-parseFloat(width)*0.5);this.position.y=this.position.y-(this.scaleCore.ratio-1)*(e.clientY-offSetY-this.position.y-parseFloat(height)*0.5);this.content.style.transform='translate3d('+this.position.x+'px, '+this.position.y+'px, 0) scale('+this.scaleCore.scale+')';//执行回调
if(this.scaleCallback){const{scale,ratio}=this.scaleCore;this.scaleCallback({scale,ratio,position:this.position},e);}}};const{container,content,position,dragCallback,scaleCallback,dragStartCallback,dragEndCallback}=params;this.container=container;this.content=content;if(position)this.position=position;if(dragCallback)this.dragCallback=dragCallback;if(scaleCallback)this.scaleCallback=scaleCallback;if(dragStartCallback)this.dragStartCallback=dragStartCallback;if(dragEndCallback)this.dragEndCallback=dragEndCallback;//注册拖拽
this.registerDrag();//注册缩放
this.registerScale();}/************************事件、变量销毁************************/destroy(){var _this$container8,_this$container9,_this$container10,_this$container11;(_this$container8=this.container)===null||_this$container8===void 0?void 0:_this$container8.removeEventListener('pointerdown',this.pointerDown);(_this$container9=this.container)===null||_this$container9===void 0?void 0:_this$container9.removeEventListener('pointerup',this.pointerUp);(_this$container10=this.container)===null||_this$container10===void 0?void 0:_this$container10.removeEventListener('wheel',this.doWheel);(_this$container11=this.container)===null||_this$container11===void 0?void 0:_this$container11.removeEventListener('contextmenu',this.contextMenu);this.container=null;this.content=null;}/************************注册拖拽事件************************/registerDrag(){var _this$container12;//初始化被拖拽对象位置
this.content.style.transform='translate3d('+this.position.x+'px, '+this.position.y+'px, 0) scale('+this.scaleCore.scale+')';//阻止系统右键菜单显示
(_this$container12=this.container)===null||_this$container12===void 0?void 0:_this$container12.addEventListener("contextmenu",this.contextMenu);//监听拖拽开始
this.onDragStart();//监听拖拽结束
this.onDragEnd();}}

/***/ }),

/***/ 45503:
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
___CSS_LOADER_EXPORT___.push([module.id, `.bp-node-container:hover {
  border: 1px solid rgba(88, 161, 185, 0.82);
}
.bp-node-container {
  position: absolute;
  border: 1px solid #55555570;
  border-radius: 6px;
  transition: border 0.3s ease;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);