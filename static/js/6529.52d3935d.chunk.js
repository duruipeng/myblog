"use strict";
(self["webpackChunknews"] = self["webpackChunknews"] || []).push([[6529,611],{

/***/ 6529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ColorMode_ColorMode)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[2]!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[3]!./src/pages/Charts/json-schema/ui/color-mode/ColorMode.less
var ColorMode = __webpack_require__(22318);
;// ./src/pages/Charts/json-schema/ui/color-mode/ColorMode.less

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(ColorMode["default"], options);




       /* harmony default export */ const color_mode_ColorMode = (ColorMode["default"] && ColorMode["default"].locals ? ColorMode["default"].locals : undefined);

// EXTERNAL MODULE: ./src/pages/Charts/json-schema/ui/color-picker/ColorPicker.tsx + 67 modules
var ColorPicker = __webpack_require__(45175);
// EXTERNAL MODULE: ./src/pages/Charts/json-schema/ui/select/Select.tsx + 1 modules
var Select = __webpack_require__(87261);
// EXTERNAL MODULE: ./src/pages/Charts/json-schema/ui/colors-picker/ColorsPicker.tsx + 1 modules
var ColorsPicker = __webpack_require__(30611);
// EXTERNAL MODULE: ./src/pages/Charts/json-schema/ui/ui-container/UIContainer.tsx + 1 modules
var UIContainer = __webpack_require__(28232);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(12955);
;// ./src/pages/Charts/json-schema/ui/color-mode/ColorMode.tsx
function ColorMode_ColorMode(props){const{value,defaultValue,onChange,...containerProps}=props;const controlled=value!==undefined&&defaultValue===undefined;const[stateValue,setStateValue]=(0,react.useState)(controlled?value:defaultValue);const[mode,setMode]=(0,react.useState)(Array.isArray(controlled?value:defaultValue)?'multi':'single');const finalValue=controlled?value:stateValue;const _singleValueRef=(0,react.useRef)('#252525');const _multiValueRef=(0,react.useRef)(['#252525']);const modeChange=_mode=>{let tempValue='#252525';if(_mode==='multi')tempValue=_multiValueRef.current;if(_mode==='single')tempValue=_singleValueRef.current;onChange&&onChange(tempValue);if(!controlled){setStateValue(tempValue);setMode(_mode);}};const colorChange=value=>{onChange&&onChange(value);if(!controlled)setStateValue(value);};return/*#__PURE__*/(0,jsx_runtime.jsx)(UIContainer.UIContainer,{...containerProps,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"lc-color-mode",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:'mode-select',style:{width:80},children:/*#__PURE__*/(0,jsx_runtime.jsx)(Select["default"],{value:mode,onChange:mode=>modeChange(mode),options:[{value:'single',label:'单色'},{value:'multi',label:'多色'}]})}),mode==='single'&&/*#__PURE__*/(0,jsx_runtime.jsx)(ColorPicker["default"],{value:finalValue,onChange:colorChange,showText:true}),mode==='multi'&&/*#__PURE__*/(0,jsx_runtime.jsx)(ColorsPicker["default"],{onChange:colorChange,canAdd:true,value:finalValue||['#a9a9a9']})]})});}// class ColorMode extends Component<ColorModeProps> {
//
//     _generalValue: string = '#252525';
//     _multiValue: string[] = ['#252525'];
//     controlled: boolean = false;
//     state: { value: string | string[] } = {value: '#252525'}
//
//     constructor(props: ColorModeProps) {
//         super(props);
//         const {value, defaultValue} = props!;
//         this.controlled = !!value && !defaultValue;
//         const _value = value || defaultValue || '#000000';
//         this.state = {value: _value}
//     }
//
//     modeChange = (_mode: string) => {
//         let {value} = this.state;
//         switch (_mode) {
//             case 'general':
//                 value = this._generalValue;
//                 break;
//             case 'multi':
//                 value = this._multiValue;
//                 break;
//         }
//         const {onChange} = this.props;
//         onChange && onChange(value);
//         if (!this.controlled) {
//             this.setState({value});
//         }
//     }
//
//     colorChange = (value: string | string[]) => {
//         const {onChange} = this.props;
//         onChange && onChange(value);
//         if (!this.controlled) {
//             this.setState({value});
//         }
//     }
//
//     buildColorModeValue = (color: string | string[]) => {
//         if (Array.isArray(color))
//             return {color, mode: 'multi'};
//         else
//             return {color, mode: 'general'};
//     }
//
//     render() {
//         const {value: stateValue} = this.state;
//         const {padding, margin, tip, label, value: propValue, gridColumn} = this.props;
//         const {color, mode} = this.buildColorModeValue(this.controlled ? propValue! : stateValue);
//         return (
//             <UIContainer tip={tip} label={label} margin={margin} padding={padding} gridColumn={gridColumn}>
//                 <div className={"lc-color-mode"}>
//                     <div className={'mode-select'} style={{width: 80}}>
//                         <Select value={mode || 'general'}
//                                 onChange={(mode: string) => this.modeChange(mode as ColorModeType)}
//                                 options={[
//                                     {value: 'general', label: '单色'},
//                                     {value: 'multi', label: '多色'},
//                                 ]}/>
//                     </div>
//                     {
//                         mode === 'general' &&
//                         <ColorPicker
//                             value={color as string}
//                             onChange={this.colorChange}
//                             width={100}
//                             height={16}
//                             showText={true}/>
//                     }
//                     {mode === 'multi' &&
//                     <ColorsPicker onChange={this.colorChange} canAdd={true}
//                                   value={(color as string[]) || ['#a9a9a9']}/>}
//                 </div>
//             </UIContainer>
//         );
//     }
// }
//
// export default ColorMode;

/***/ }),

/***/ 30611:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ColorsPicker_ColorsPicker)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[2]!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[0].use[3]!./src/pages/Charts/json-schema/ui/colors-picker/ColorsPicker.less
var ColorsPicker = __webpack_require__(856);
;// ./src/pages/Charts/json-schema/ui/colors-picker/ColorsPicker.less

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(ColorsPicker["default"], options);




       /* harmony default export */ const colors_picker_ColorsPicker = (ColorsPicker["default"] && ColorsPicker["default"].locals ? ColorsPicker["default"].locals : undefined);

// EXTERNAL MODULE: ./src/pages/Charts/json-schema/ui/color-picker/ColorPicker.tsx + 67 modules
var ColorPicker = __webpack_require__(45175);
// EXTERNAL MODULE: ./src/pages/Charts/json-schema/ui/ui-container/UIContainer.tsx + 1 modules
var UIContainer = __webpack_require__(28232);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(12955);
;// ./src/pages/Charts/json-schema/ui/colors-picker/ColorsPicker.tsx
function ColorsPicker_ColorsPicker(props){const{value,defaultValue,canAdd,onChange,...containerProps}=props;const controlled=value!==undefined&&defaultValue===undefined;const[stateValue,setStateValue]=(0,react.useState)(controlled?value:defaultValue);const[stateCanAdd,setStateCanAdd]=(0,react.useState)(!!canAdd);const finalValue=controlled?value:stateValue;const maxRef=(0,react.useRef)(5);const _onChange=(color,id)=>{const tempValue=[...finalValue];tempValue[id]=color;onChange&&onChange(tempValue);if(!controlled)setStateValue(tempValue);};const addColor=()=>{const tempValue=[...finalValue];if((tempValue===null||tempValue===void 0?void 0:tempValue.length)>=maxRef.current)return;tempValue.push('#a9a9a9');if(tempValue.length===maxRef.current)setStateCanAdd(false);setStateValue(tempValue);onChange&&onChange(tempValue);};const delColor=id=>{const tempValue=[...finalValue];tempValue.splice(id,1);if(tempValue.length<maxRef.current)setStateCanAdd(true);setStateValue(tempValue);onChange&&onChange(tempValue);};return/*#__PURE__*/(0,jsx_runtime.jsx)(UIContainer.UIContainer,{...containerProps,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:'colors-picker',children:[finalValue===null||finalValue===void 0?void 0:finalValue.map((item,i)=>{return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"colors-item",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(ColorPicker["default"],{value:item,onChange:color=>_onChange(color,i)}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{onClick:()=>delColor(i),children:/*#__PURE__*/(0,jsx_runtime.jsx)("label",{children:"\xD7"})})]},i+'');}),stateCanAdd&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{onClick:addColor,className:'colors-pick-add-btn',children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:"+"})})]})});}

/***/ }),

/***/ 22318:
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
___CSS_LOADER_EXPORT___.push([module.id, `.lc-color-mode {
  display: flex;
  align-items: center;
}
.lc-color-mode .mode-select {
  width: 75px;
  margin-right: 6px;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 856:
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
___CSS_LOADER_EXPORT___.push([module.id, `.colors-picker {
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.colors-picker .colors-item {
  position: relative;
  margin-right: 3px;
}
.colors-picker .colors-item span {
  position: absolute;
  top: 0;
  left: 18px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  text-align: center;
  background-color: #525252;
}
.colors-picker .colors-item span label {
  cursor: pointer;
  color: #d6d6d6;
  position: relative;
  top: -3.3px;
}
.colors-picker .colors-pick-add-btn {
  border: 2px solid #007984;
  width: 21px;
  height: 21px;
  text-align: center;
  border-radius: 15px;
  font-size: 20px;
}
.colors-picker .colors-pick-add-btn span {
  color: #007984;
  position: relative;
  top: -5px;
}
.colors-picker .colors-pick-add-btn:hover {
  cursor: pointer;
  border-color: #00cde3;
}
.colors-picker .colors-pick-add-btn:hover span {
  color: #00cde3;
}
.colors-picker .colors-pick-add-btn:active {
  cursor: pointer;
  border-color: #bef3ff;
}
.colors-picker .colors-pick-add-btn:active span {
  color: #bef3ff;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);