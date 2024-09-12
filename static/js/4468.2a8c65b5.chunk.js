"use strict";
(self["webpackChunknews"] = self["webpackChunknews"] || []).push([[4468],{

/***/ 70411:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48331);
/* harmony import */ var countup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74216);
/* harmony import */ var odometer_countup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60098);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7579);
const DigitalFlipperComponent=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props,ref)=>{const[config,setConfig]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({...props});const eventHandlerMap=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});const countUpRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);let countUpAnim;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{var _config$data,_config$style;countUpAnim=new countup_js__WEBPACK_IMPORTED_MODULE_1__.CountUp(countUpRef.current,(_config$data=config.data)===null||_config$data===void 0?void 0:_config$data.staticData,{plugin:((_config$style=config.style)===null||_config$style===void 0?void 0:_config$style.type)==='slide'?new odometer_countup__WEBPACK_IMPORTED_MODULE_2__.Odometer({duration:1,lastDigitDelay:0}):undefined,duration:1});if(!countUpAnim.error){countUpAnim.start();}else{console.error(countUpAnim.error);}},[]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref,()=>({updateConfig:newConfig=>setConfig({...newConfig}),changeData:newData=>countUpAnim.update(newData),setEventHandler:eventMap=>eventHandlerMap.current=eventMap}));const onClick=()=>{if('click'in eventHandlerMap.current){var _eventHandlerMap$curr,_eventHandlerMap$curr2;(_eventHandlerMap$curr=(_eventHandlerMap$curr2=eventHandlerMap.current)['click'])===null||_eventHandlerMap$curr===void 0?void 0:_eventHandlerMap$curr.call(_eventHandlerMap$curr2);}};const{style}=config;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{ref:countUpRef,style:{display:'flex',alignItems:'center',justifyContent:'center',height:'100%',...style},onClick:onClick});});/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DigitalFlipperComponent);

/***/ }),

/***/ 49202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DigitalFlipperConfig: () => (/* binding */ DigitalFlipperConfig)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48331);
/* harmony import */ var _json_schema_LCGUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45818);
/* harmony import */ var _icon_park_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93436);
/* harmony import */ var _icon_park_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28880);
/* harmony import */ var _icon_park_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80173);
/* harmony import */ var _icon_park_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10738);
/* harmony import */ var _icon_park_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7550);
/* harmony import */ var _icon_park_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(92822);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7579);
const DigitalFlipperConfig=_ref=>{var _config$style,_config$style2,_config$style3,_config$style4,_config$style5,_config$style6,_config$style7;let{controller}=_ref;const config=controller.getConfig();const onFieldChange=fieldChangeData=>{const{dataFragment}=fieldChangeData;controller.update(dataFragment);};const schema={type:'grid',key:'style',config:{columns:2},children:[{key:'fontSize',type:'number-input',label:'字号',value:config===null||config===void 0?void 0:(_config$style=config.style)===null||_config$style===void 0?void 0:_config$style.fontSize,config:{min:0}},{key:'fontWeight',type:'number-input',label:'粗细',value:config===null||config===void 0?void 0:(_config$style2=config.style)===null||_config$style2===void 0?void 0:_config$style2.fontWeight,config:{min:0,max:900,step:100}},{key:'color',type:'color-picker',label:'颜色',value:config===null||config===void 0?void 0:(_config$style3=config.style)===null||_config$style3===void 0?void 0:_config$style3.color,config:{showText:true}},{key:'type',type:'select',label:'类型',tip:'该设置项效果请刷新预览界面查看',value:config===null||config===void 0?void 0:(_config$style4=config.style)===null||_config$style4===void 0?void 0:_config$style4.type,config:{options:[{label:'滑动',value:'slide'},{label:'跳动',value:'caper'}]}},{key:'fontFamily',type:'select',label:'字体',value:config===null||config===void 0?void 0:(_config$style5=config.style)===null||_config$style5===void 0?void 0:_config$style5.fontFamily,config:{options:[{label:'钉钉进步体',value:'DingTalk JinBuTi'},{label:'抖音美好体',value:'DouyinSansBold'},{label:'优设标题黑',value:'优设标题黑'},{label:'庞门正道标题',value:'庞门正道标题体免费版'}]}},{type:"grid",label:"对齐",config:{columns:2,containerStyle:{gridColumn:'1/3'}},children:[{type:'group-button',key:'justifyContent',value:config===null||config===void 0?void 0:(_config$style6=config.style)===null||_config$style6===void 0?void 0:_config$style6.justifyContent,config:{items:[{value:'flex-start',content:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_icon_park_react__WEBPACK_IMPORTED_MODULE_3__["default"],{theme:"filled",size:"16",strokeWidth:2,strokeLinecap:"square"})},{value:'center',content:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_icon_park_react__WEBPACK_IMPORTED_MODULE_4__["default"],{theme:"filled",size:"16",strokeWidth:2,strokeLinecap:"square"})},{value:'flex-end',content:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_icon_park_react__WEBPACK_IMPORTED_MODULE_5__["default"],{theme:"filled",size:"16",strokeWidth:2,strokeLinecap:"square"})}]}},{type:'group-button',key:'alignItems',value:config===null||config===void 0?void 0:(_config$style7=config.style)===null||_config$style7===void 0?void 0:_config$style7.alignItems,config:{items:[{value:'flex-start',content:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_icon_park_react__WEBPACK_IMPORTED_MODULE_6__["default"],{theme:"filled",size:"16",strokeWidth:2,strokeLinecap:"square"})},{value:'center',content:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_icon_park_react__WEBPACK_IMPORTED_MODULE_7__["default"],{theme:"filled",size:"16",strokeWidth:2,strokeLinecap:"square"})},{value:'flex-end',content:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_icon_park_react__WEBPACK_IMPORTED_MODULE_8__["default"],{theme:"filled",size:"16",strokeWidth:2,strokeLinecap:"square"})}]}}]}]};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_json_schema_LCGUI__WEBPACK_IMPORTED_MODULE_1__.LCGUI,{schema:schema,onFieldChange:onFieldChange});};

/***/ }),

/***/ 61912:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DigitalFlipperController: () => (/* binding */ DigitalFlipperController)
/* harmony export */ });
/* harmony import */ var _framework_core_AbstractDesignerController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50171);
/* harmony import */ var _utils_ComponentUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53090);
/* harmony import */ var _utils_ObjectUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61178);
/* harmony import */ var _designer_blueprint_core_BPExecutor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19002);
/* harmony import */ var _DigitalFlipperComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70411);
class DigitalFlipperController extends _framework_core_AbstractDesignerController__WEBPACK_IMPORTED_MODULE_0__["default"]{async create(container,config){this.config=config;this.container=container;this.instance=await _utils_ComponentUtil__WEBPACK_IMPORTED_MODULE_1__["default"].createAndRender(container,_DigitalFlipperComponent__WEBPACK_IMPORTED_MODULE_3__["default"],config);}destroy(){this.instance=null;this.config=null;}getConfig(){return this.config;}changeData(data){var _this$instance,_this$config,_this$config$base;this.config.data.staticData=data;(_this$instance=this.instance)===null||_this$instance===void 0?void 0:_this$instance.changeData(data);//数据变化是触发蓝图事件
const nodeId=(_this$config=this.config)===null||_this$config===void 0?void 0:(_this$config$base=_this$config.base)===null||_this$config$base===void 0?void 0:_this$config$base.id;_designer_blueprint_core_BPExecutor__WEBPACK_IMPORTED_MODULE_2__["default"].triggerComponentEvent(nodeId,"dataChange",data);}update(config,upOp){var _this$instance2;this.config=_utils_ObjectUtil__WEBPACK_IMPORTED_MODULE_4__["default"].merge(this.config,config);upOp=upOp||{reRender:true};if(upOp.reRender)(_this$instance2=this.instance)===null||_this$instance2===void 0?void 0:_this$instance2.updateConfig(this.config);}updateTheme(newTheme){}registerEvent(){var _this$config2,_this$config2$base,_this$instance3;const nodeId=(_this$config2=this.config)===null||_this$config2===void 0?void 0:(_this$config2$base=_this$config2.base)===null||_this$config2$base===void 0?void 0:_this$config2$base.id;(_this$instance3=this.instance)===null||_this$instance3===void 0?void 0:_this$instance3.setEventHandler({click:()=>_designer_blueprint_core_BPExecutor__WEBPACK_IMPORTED_MODULE_2__["default"].triggerComponentEvent(nodeId,"click",this.config)});}}

/***/ }),

/***/ 24468:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DigitalFlipperDefinition)
});

;// CONCATENATED MODULE: ./src/pages/Charts/comps/lc/digital-flipper/digital-flipper.png
const digital_flipper_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAABeCAIAAABdDzqYAAAGWElEQVR4Xu2Y20uVWRTA+0OOmdLFW2pFF6MysybpBtmp9CHtbmXRQw9dICMqu5CFFUUEURZlQZC+iCIV2c1yEmsI7EJpZUWOXayjVCPzm2/j7vPLbBiYc3Sxfk/HdfbZ57R/a629vvr5FKH08wYUKahasahasahasahasahasahasahasahasahasahasahasahasahasahasahasahasahasahasahasahasahasahasahasahasahasahasahasahasahasahasahasahasahasahasahasahasahasahasahasahasYRM7fz582/fvl1WVmYjCxYsqK+v//z5c3t7+4MHD+bOnUswNjb2ypUrnz59Ivj27dtt27b179//+y4/Yffu3a9fv/b7/ebPs2fP/tlJQ0NDVFSUiU+ZMuXOnTtszpc+e/YsJibm+xYuoqOjHz58aHcw5Obm8tbixYvZMBAIfPz48eLFi2bnAQMGHD16tKWlpa2trba2dsaMGd4dg0Jo1GKL0+SAysvLbXDPnj1bt27lXMaMGXP37t1Hjx4NHjwYtZs2bRo4cCDxkydPcoJxcXGunbphxIgRz58/JxUyMzNNpLq6urS09DeHyZMnh4eHExw5cmRjY+OlS5d4weZz5syJiIjoslEnJNOkSZPMx2Hv3r388tGjRw8fPvzVq1fkzZAhQ0gjvnHNmjVsfvjw4Q8fPmRkZPDj/3CIjIz0bvr/Exq1BQUFiYmJV69edat1s2XLlnfv3g0dOtQdXLRoEXWQkJDgDnpAUmVl5c2bN9+/f2/V3rt3j+PuuvCfymYNP8MT7xnygH5AFvJ64sSJra2tycnJPqeyyacjR47worm5mSw06ylZ1mRnZ7s3CQ6hUQtkdw9qi4uLOSnbOW2Qtkkpu4MeqBuOcu3atVYtsh8/frxr166pU6e6V16/fp0fQBFv3749KyvL/VYP7Ny5s6mpCX+8HjRo0I0bN6h7/ly6dOmXL1+mT5/Ob6a1HDx40KynXsnRDRs2dNklKPRGtbRlxGzcuNH8uXDhQsqOHoih2bNnd13bhdTUVEqKD9I2rVr689OnT0mUVoeioiLTeLkj79+/zyWKHuKY9mTSj9BgmQZoAGFhYSbCV3CzfP369du3b1VVVaQdmcT9zU+lpvFaWFjIu9wpXTYKCr1LLR341KlTpDlFZoNcrrS1vLw8LuCXL1+OGjXKnqwbzh1JFRUVmHOrdbNv3z5qa9myZVyfXLQvXrwwN3dOTk5HR8e8efM86z2sX7+eUS4pKcn8iTwK9Pz58/Hx8UuWLOF+pcmjlmuYyv7LgTZDf7ZpGkx6kdphw4Y9efKEwZIjcy38ztixYzlK7mmOz/uez3fhwgUK6HeHuro6FFLr5lK08BWU9YkTJ9iBQz937pyJM7gxBPUsgHziCid1bIROjjY71lGg9AaahM9Jx1QHk2QM//ZTQaMXqT1z5gzt0RxNt6CWYzKV4X3PeZLJ7ITyosfu2LEjJSXFvcbUGfclO/DcxSMW9yVxllFhjGnuxR4odE/95efn83vsWHfs2DHUkj12AdnApUvn98yDwaEXqaWMbt26ldfJ5s2bzXhy+vRpGuaKFSuQ8ebNm/Hjx9uGfOjQIXcZWdwNOS0t7fjx4+ywatUqrkOqlimXHZhambcPHDjAW4xCtFA7LSOeul+5cqV7z+XLl9MVZs2aZSM8EdGES0pKeLplPuDd/fv381nmtfT0dEp29erVBPmHuLYJHqFUy7VKptvI5cuXzVOggXaKg5kzZ9bU1DQ4MOngya7nEOm92LURy4QJE8gSo4GKrK2tNTuQTGSGXYY8xiLi165dc3cLxGB63LhxNuJzhjsyw/OwNG3aNIYmdmBu4smH52+CVDajE5d3IBBYt26de30wCZnafw8VFuHgmZ4YRynBX84+PqeXdruDz8kP4p7/4eI6pxn8uLhbzM/z3BExMTE0amM6VPQBtT+D06Rd//KJ5T/g9/tp6d5oX6MPq1V6RtWKRdWKRdWKRdWKRdWKRdWKRdWKRdWKRdWKRdWKRdWKRdWKRdWKRdWKRdWKRdWKRdWKRdWKRdWKRdWKRdWKRdWKRdWKRdWKRdWKRdWKRdWKRdWKRdWKRdWKRdWKRdWKRdWKRdWKRdWKRdWKRdWKRdWKRdWK5W/9sJBzPMhZ0gAAAABJRU5ErkJggg==";
// EXTERNAL MODULE: ./src/pages/Charts/comps/lc/digital-flipper/DigitalFlipperController.ts
var DigitalFlipperController = __webpack_require__(61912);
// EXTERNAL MODULE: ./src/pages/Charts/comps/lc/digital-flipper/DigitalFlipperConfig.tsx
var DigitalFlipperConfig = __webpack_require__(49202);
// EXTERNAL MODULE: ./src/pages/Charts/framework/core/AbstractDesignerDefinition.ts
var AbstractDesignerDefinition = __webpack_require__(96690);
;// CONCATENATED MODULE: ./src/pages/Charts/comps/lc/digital-flipper/DigitalFlipperDefinition.ts
class DigitalFlipperDefinition extends AbstractDesignerDefinition["default"]{getBaseInfo(){return{compName:"数字翻牌器",compKey:"DigitalFlipper",categorize:"info",width:200,height:50};}getChartImg(){return digital_flipper_namespaceObject;}getController(){return DigitalFlipperController.DigitalFlipperController;}getInitConfig(){return{base:{id:"",name:'数字翻牌器',type:'DigitalFlipper'},style:{fontSize:20,fontWeight:500,fontFamily:'Microsoft YaHei',color:'#ffffff',type:'caper',justifyContent:'center',alignItems:'center'},filter:{enable:false,blur:0,brightness:1,contrast:1,opacity:1,saturate:1,hueRotate:0},data:{sourceType:'static',staticData:123456789}};}getMenuList(){return super.getMenuList().filter(item=>item.key!=='theme');}getMenuToConfigContentMap(){const menuMapping=super.getMenuToConfigContentMap();menuMapping['style']=DigitalFlipperConfig.DigitalFlipperConfig;return menuMapping;}getEventList(){const events=super.getEventList();return events.concat([{id:"click",name:"点击时"},{id:"dataChange",name:"数据变化时"}]);}}

/***/ }),

/***/ 96690:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AbstractDesignerDefinition)
/* harmony export */ });
/* harmony import */ var _AbstractDefinition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36839);
/* harmony import */ var _icon_park_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90934);
/* harmony import */ var _icon_park_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64077);
/* harmony import */ var _icon_park_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14442);
/* harmony import */ var _icon_park_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77201);
/* harmony import */ var _icon_park_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34409);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48331);
const AnimationConfig=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(()=>__webpack_require__.e(/* import() */ 4153).then(__webpack_require__.bind(__webpack_require__, 94153)));const ThemeConfig=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(()=>__webpack_require__.e(/* import() */ 1306).then(__webpack_require__.bind(__webpack_require__, 11306)));const BaseInfo=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(()=>__webpack_require__.e(/* import() */ 4430).then(__webpack_require__.bind(__webpack_require__, 34430)));const DataConfig=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(()=>__webpack_require__.e(/* import() */ 9885).then(__webpack_require__.bind(__webpack_require__, 29885)));const FilterConfig=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(()=>__webpack_require__.e(/* import() */ 1438).then(__webpack_require__.bind(__webpack_require__, 31438)));class AbstractDesignerDefinition extends _AbstractDefinition__WEBPACK_IMPORTED_MODULE_1__.AbstractDefinition{getMenuList(){return[{icon:_icon_park_react__WEBPACK_IMPORTED_MODULE_2__["default"],name:'基础',key:'base'},{icon:_icon_park_react__WEBPACK_IMPORTED_MODULE_3__["default"],name:'样式',key:'style'},{icon:_icon_park_react__WEBPACK_IMPORTED_MODULE_4__["default"],name:'数据',key:'data'},{icon:_icon_park_react__WEBPACK_IMPORTED_MODULE_5__["default"],name:'滤镜',key:'filter'},// {
//     icon: VideoCameraFilled,
//     name: '动画',
//     key: 'animation',
// },
{icon:_icon_park_react__WEBPACK_IMPORTED_MODULE_6__["default"],name:'主题',key:'theme'}];}getMenuToConfigContentMap(){return{base:BaseInfo,data:DataConfig,animation:AnimationConfig,theme:ThemeConfig,filter:FilterConfig};}}

/***/ }),

/***/ 45818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LCGUI: () => (/* binding */ LCGUI),
/* harmony export */   SchemaPathNode: () => (/* binding */ SchemaPathNode)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48331);
/* harmony import */ var _LCGUIUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84226);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14157);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7579);
class SchemaPathNode{constructor(key,index){this.key='';this.index=0;this.key=key;this.index=index;}}/**
 * 特殊场景的操作全交给使用方，向外提供Util方法更新schema结构
 */class LCGUI extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments);this.onControlChange=(data,schemaKeyPath,dataKeyPath,reRender,id)=>{const{onFieldChange}=this.props;const dataFragment=_LCGUIUtil__WEBPACK_IMPORTED_MODULE_3__["default"].createObjectFromArray(dataKeyPath,data);onFieldChange&&onFieldChange({id,data,reRender,schemaKeyPath:[...schemaKeyPath],dataKeyPath,dataFragment});};/**
     * 解析rules规则，判断是否满足
     * @param rules
     * @param control
     */this.analyzeRules=(rules,control)=>{const regex=/{([^}]+)}/g;const variable=[];let match;//解析rule中设置的变量
while((match=regex.exec(rules))!==null){variable.push(match[1]);}//从control本层级开始逐级向上匹配，直到所有变量都匹配结束
const analyze=(control,variable,rules)=>{if(variable.length===0)return rules;const{parent}=control;if(parent&&"children"in parent){//解析parent的所有子节点control(与当前control同级)
const{children}=parent;for(let i=0;i<children.length;i++){if(variable.length===0)break;const child=children[i];const matchIndex=variable.indexOf(child.key);if(child.key&&matchIndex!==-1){rules=rules.replaceAll(`{${child.key}}`,`'${child.value}'`);variable.splice(matchIndex,1);}}}if(variable.length>0&&parent){//解析parent层级的key是否匹配
const matchIndex=variable.indexOf(parent.key);if(parent.key&&parent.value&&matchIndex!==-1){//parent层级在同时匹配上key，同时value属性有值，同时variable中有匹配项时，才进行替换
rules=rules.replace(`{${parent.key}}`,`'${parent.value}'`);variable.splice(matchIndex,1);}if(variable.length>0){return analyze(parent,variable,rules);}}return rules;};// eslint-disable-next-line
return eval(analyze(control,variable,rules));};this.buildConfigUI=(control,schemaKeyPath,dataKeyPath,childIndex)=>{const nodes=[];if(!control)return nodes;if("children"in control){//有子节点，递归解析
const tempNodes=[];const{children}=control;const childLevel=new SchemaPathNode("children");const{type,rules}=control;//判断是否满足rules规则，不满足则不继续递归渲染
if(rules&&!this.analyzeRules(rules,control))return nodes;schemaKeyPath.push(childLevel);control.key&&dataKeyPath.push(control.key);children&&children.forEach((child,index)=>{childLevel.index=index;child.parent=control;tempNodes.push(this.buildConfigUI(child,JSON.parse(JSON.stringify(schemaKeyPath)),[...dataKeyPath],index));});//构建本级schema路径下的ReactNode
if(!type){//本层没有控件，直接返回子节点
nodes.push([...tempNodes]);}else{const{type,config,value,id,reRender,label,tip}=control;const Component=_ui__WEBPACK_IMPORTED_MODULE_1__["default"].get(type);schemaKeyPath.pop();schemaKeyPath.push({key:"value"});//非叶子节点不解析label
const controlVal=reRender?{value}:{defaultValue:value};const _props={...config,...controlVal,label,tip,onChange:data=>this.onControlChange(data,schemaKeyPath,dataKeyPath,reRender,id)};nodes.push(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component,{..._props,children:tempNodes},childIndex));}}else{//解析叶子节点
const{label,type,tip,config,value,rules,id,reRender}=control;if(!type)return[];if(rules&&!this.analyzeRules(rules,control))return nodes;//设置schemaKeyPath和dataKeyPath
schemaKeyPath.push({key:"value"});dataKeyPath.push(control.key);const controlVal=reRender?{value}:{defaultValue:value};const _props={...config,...controlVal,label,tip,onChange:data=>this.onControlChange(data,schemaKeyPath,dataKeyPath,reRender,id)};const Component=_ui__WEBPACK_IMPORTED_MODULE_1__["default"].get(type);if(!Component)return[];nodes.push(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component,{..._props},childIndex));}return nodes;};this.init=()=>{const nodes=[];let{schema}=this.props;schema=Array.isArray(schema)?schema:[schema];schema.forEach(control=>{nodes.push(this.buildConfigUI(control,[],[],0));});return nodes;};}render(){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:this.init()});}}

/***/ }),

/***/ 84226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LCGUIUtil)
/* harmony export */ });
class LCGUIUtil{static updateSchema(oldSchema,path,value){const currentNode=path.shift();const{key,index}=currentNode;if(key&&key in oldSchema){if(path.length===0){//赋值
oldSchema.value=value;}else if(index!==undefined){//取指定数据元素继续递归
this.updateSchema(oldSchema[key][index],path,value);}else{//普通属性继续递归
this.updateSchema(oldSchema[key],path,value);}}}static createObjectFromArray(keyPath,value){const result={};let current=result;for(let i=0;i<keyPath.length;i++){const key=keyPath[i];current[key]=i===keyPath.length-1?value:{};current=current[key];}return result;}/**
     * 根据schema模板，将数据结构赋值到模板中生成完整的schema
     * @param data 数据结构
     * @param template schema模板
     */static schemaStructureAssignment(data,template){if(typeof data!=='object')return{};Object.keys(data).forEach(key=>{//使用value对象的每一个key，去template中查找对应的key
if(typeof data[key]!=='object'){//在template当前层匹配
if(template.key===key){template.value=data[key];}else if(template.children){template.children.forEach(childTemp=>{LCGUIUtil.schemaStructureAssignment({[key]:data[key]},childTemp);});}}else{//在template的子层匹配
const childTemplate=LCGUIUtil.findChildSchemaByKey(key,template);if(childTemplate){LCGUIUtil.schemaStructureAssignment(data[key],childTemplate);}}});return template;}static findChildSchemaByKey(key,template){if(template.key===key)return template;if(template.children){for(let i=0;i<template.children.length;i++){const result=this.findChildSchemaByKey(key,template.children[i]);if(result)return result;}}return{};}static parseSchemaData(schema){const result={};if(schema.children){let tempRes={};schema.children.forEach(child=>{tempRes={...tempRes,...LCGUIUtil.parseSchemaData(child)};});if(schema.key){result[schema.key]=tempRes;return result;}else return tempRes;}else{if(schema.key){result[schema.key]=schema.value||undefined;return result;}else{return result;}}}}

/***/ }),

/***/ 14157:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48331);
const Accordion=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 7610).then(__webpack_require__.bind(__webpack_require__, 67610)));const Button=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 60665)));const MonacoEditor=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 17372)));const ColorPicker=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 14566)));const ColorsPicker=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 7034).then(__webpack_require__.bind(__webpack_require__, 27034)));const Grid=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 79931)).then(_ref=>{let{Grid}=_ref;return{default:Grid};}));const Input=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 18548)));const Radio=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 63879)));const Select=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 76109)));const Switch=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 30825)));const Slider=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 9873).then(__webpack_require__.bind(__webpack_require__, 2254)).then(_ref2=>{let{Slider}=_ref2;return{default:Slider};}));const RangeSlider=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 9873).then(__webpack_require__.bind(__webpack_require__, 2254)).then(_ref3=>{let{RangeSlider}=_ref3;return{default:RangeSlider};}));const ImageUpload=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 9397).then(__webpack_require__.bind(__webpack_require__, 59397)).then(_ref4=>{let{ImageUpload}=_ref4;return{default:ImageUpload};}));const ColorMode=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 254).then(__webpack_require__.bind(__webpack_require__, 20254)));const TextOnly=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 7091).then(__webpack_require__.bind(__webpack_require__, 57091)).then(_ref5=>{let{TextOnly}=_ref5;return{default:TextOnly};}));const TextArea=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 1084).then(__webpack_require__.bind(__webpack_require__, 31084)));const GroupButton=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 7625).then(__webpack_require__.bind(__webpack_require__, 67625)).then(_ref6=>{let{GroupButton}=_ref6;return{default:GroupButton};}));const CardPanel=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 91828)).then(_ref7=>{let{CardPanel}=_ref7;return{default:CardPanel};}));const NumberInput=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 20397)));const ControlGroup=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 3476).then(__webpack_require__.bind(__webpack_require__, 3476)));const CheckBox=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(()=>__webpack_require__.e(/* import() */ 627).then(__webpack_require__.bind(__webpack_require__, 50627)));const UIMap=new Map();UIMap.set('accordion',Accordion);UIMap.set('button',Button);UIMap.set('grid',Grid);UIMap.set('input',Input);UIMap.set('radio',Radio);UIMap.set('select',Select);UIMap.set('switch',Switch);UIMap.set('code-editor',MonacoEditor);UIMap.set('color-picker',ColorPicker);UIMap.set('colors-picker',ColorsPicker);UIMap.set('color-mode',ColorMode);UIMap.set('card-panel',CardPanel);UIMap.set('slider',Slider);UIMap.set('range-slider',RangeSlider);UIMap.set('image-upload',ImageUpload);UIMap.set('text-only',TextOnly);UIMap.set('text-area',TextArea);UIMap.set('group-button',GroupButton);UIMap.set('control-group',ControlGroup);UIMap.set('number-input',NumberInput);UIMap.set('checkbox',CheckBox);/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UIMap);

/***/ })

}]);