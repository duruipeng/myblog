(self["webpackChunknews"] = self["webpackChunknews"] || []).push([[2946,2537,8290,7652],{

/***/ 12537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37995);
/* harmony import */ var _amap_amap_jsapi_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33203);
/* harmony import */ var _amap_amap_jsapi_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_amap_amap_jsapi_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AMapComponent_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46405);
/* harmony import */ var _AMapScaleObserver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68290);
/* harmony import */ var _framework_message_GlobalMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52182);
/* harmony import */ var _MapLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97652);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12955);
const AMapComponent=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props,ref)=>{var _config$style2,_config$style3;const[config,setConfig]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({...props});const mapContainerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);const mapRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();const eventHandlerMap=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});(0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref,()=>({updateConfig:newConfig=>setConfig({...newConfig}),setEventHandler:eventMap=>eventHandlerMap.current=eventMap,map:mapRef}));(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{new _AMapScaleObserver__WEBPACK_IMPORTED_MODULE_3__["default"](mapContainerRef.current);},[]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{const{key,securityJsCode}=config.style;_MapLoader__WEBPACK_IMPORTED_MODULE_5__["default"].load(key,securityJsCode).then(AMap=>{var _config$style;if(!AMap)return;const code=(_config$style=config.style)===null||_config$style===void 0?void 0:_config$style.customCode;const fun=eval(`(${code})`);if(typeof fun==='function'){mapRef.current=fun(mapContainerRef.current,AMap,eventHandlerMap);}else{var _globalMessage$messag;(_globalMessage$messag=_framework_message_GlobalMessage__WEBPACK_IMPORTED_MODULE_4__.globalMessage.messageApi)===null||_globalMessage$messag===void 0?void 0:_globalMessage$messag.error('自定义代码错误,请检查');}});},[config]);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{className:'a-map',ref:mapContainerRef,children:(_config$style2=config.style)!==null&&_config$style2!==void 0&&_config$style2.key&&(_config$style3=config.style)!==null&&_config$style3!==void 0&&_config$style3.securityJsCode?undefined:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{className:'no-key-message',style:{display:'flex',alignItems:'center'},children:"\u8BF7\u914D\u7F6EKey\u548C\u5BC6\u94A5"})});});/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AMapComponent);

/***/ }),

/***/ 92946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AMapController: () => (/* binding */ AMapController)
/* harmony export */ });
/* harmony import */ var _AMapComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12537);
/* harmony import */ var _framework_core_AbstractDesignerController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56571);
/* harmony import */ var _utils_ComponentUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42850);
/* harmony import */ var _utils_ObjectUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69946);
/* harmony import */ var _designer_blueprint_core_BPExecutor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17498);
class AMapController extends _framework_core_AbstractDesignerController__WEBPACK_IMPORTED_MODULE_1__["default"]{async create(container,config){this.config=config;this.container=container;this.instance=await _utils_ComponentUtil__WEBPACK_IMPORTED_MODULE_2__["default"].createAndRender(container,_AMapComponent__WEBPACK_IMPORTED_MODULE_0__["default"],config);this.registerEvent();if(window.AMap){if(window.AMap_Key)this.config.style.key=window.AMap_Key;if(window.AMap_securityJsCode)this.config.style.securityJsCode=window.AMap_securityJsCode;}}destroy(){this.instance=null;this.config=null;}getConfig(){return this.config;}update(config,upOp){var _this$instance;this.config=_utils_ObjectUtil__WEBPACK_IMPORTED_MODULE_4__["default"].merge(this.config,config);upOp=upOp||{reRender:true};if(upOp.reRender)(_this$instance=this.instance)===null||_this$instance===void 0?void 0:_this$instance.updateConfig(this.config);}registerEvent(){var _this$config,_this$config$base,_this$instance2;const nodeId=(_this$config=this.config)===null||_this$config===void 0?void 0:(_this$config$base=_this$config.base)===null||_this$config$base===void 0?void 0:_this$config$base.id;(_this$instance2=this.instance)===null||_this$instance2===void 0?void 0:_this$instance2.setEventHandler({click:()=>_designer_blueprint_core_BPExecutor__WEBPACK_IMPORTED_MODULE_3__["default"].triggerComponentEvent(nodeId,"click",this.config)});}}

/***/ }),

/***/ 68290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AMapScaleObserver)
});

;// ./src/pages/Charts/framework/core/AbstractScaleObserver.ts
class AbstractScaleObserver{}
// EXTERNAL MODULE: ./src/pages/Charts/framework/core/ScaleAction.ts
var ScaleAction = __webpack_require__(59162);
;// ./src/pages/Charts/comps/map/AMapScaleObserver.ts
class AMapScaleObserver extends AbstractScaleObserver{constructor(mapDom){super();this.mapDom=null;this.observer=null;this.mapDom=mapDom;this.mapDom.style.transformOrigin='0 0';ScaleAction["default"].add(this);}doScale(xScale,yScale){this.mapDom.style.transform=`scale(${1/xScale},${1/yScale})`;this.observer=new ResizeObserver((entries,observer)=>{entries.forEach(entry=>{const{width,height}=entry.contentRect;this.mapDom.style.width=width*xScale+'px';this.mapDom.style.height=height*yScale+'px';});});this.observer.observe(this.mapDom.parentElement);}destroy(){if(this.observer){this.observer.disconnect();}}}

/***/ }),

/***/ 97652:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _amap_amap_jsapi_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19066);
/* harmony import */ var _amap_amap_jsapi_loader__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_amap_amap_jsapi_loader__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _framework_message_GlobalMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52182);
class MapLoader{constructor(){this.loadPromise=null;}async load(key,securityJsCode,rollback){if(window.AMap){return window.AMap;}else{var _globalMessage$messag;if(!securityJsCode||securityJsCode==="")(_globalMessage$messag=_framework_message_GlobalMessage__WEBPACK_IMPORTED_MODULE_1__.globalMessage.messageApi)===null||_globalMessage$messag===void 0?void 0:_globalMessage$messag.info("缺少安全密钥");window._AMapSecurityConfig={securityJsCode:securityJsCode};if(this.loadPromise)return this.loadPromise;this.loadPromise=new Promise(resolve=>{_amap_amap_jsapi_loader__WEBPACK_IMPORTED_MODULE_0___default().load({key:key,version:"2.0",plugins:["AMap.Scale"],Loca:{"version":'2.0.0'}}).then(AMap=>{if(AMap){window.AMap=AMap;window.AMap_Key=key;window.AMap_securityJsCode=securityJsCode;resolve(AMap);}else{var _globalMessage$messag2;(_globalMessage$messag2=_framework_message_GlobalMessage__WEBPACK_IMPORTED_MODULE_1__.globalMessage.messageApi)===null||_globalMessage$messag2===void 0?void 0:_globalMessage$messag2.error("地图加载失败...");this.loadPromise=null;resolve(null);}}).catch(e=>{this.loadPromise=null;resolve(null);});});return this.loadPromise;}}}const mapLoader=new MapLoader();/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapLoader);

/***/ }),

/***/ 19066:
/***/ (function(module) {

"use strict";


(function (m, p) {
   true ? module.exports = p() : 0;
})(this, function () {
  function m(a) {
    var b = [];
    a.AMapUI && b.push(p(a.AMapUI));
    a.Loca && b.push(r(a.Loca));
    return Promise.all(b);
  }
  function p(a) {
    return new Promise(function (h, c) {
      var f = [];
      if (a.plugins) for (var e = 0; e < a.plugins.length; e += 1) -1 == d.AMapUI.plugins.indexOf(a.plugins[e]) && f.push(a.plugins[e]);
      if (g.AMapUI === b.failed) c("\u524d\u6b21\u8bf7\u6c42 AMapUI \u5931\u8d25");else if (g.AMapUI === b.notload) {
        g.AMapUI = b.loading;
        d.AMapUI.version = a.version || d.AMapUI.version;
        e = d.AMapUI.version;
        var l = document.body || document.head,
          k = document.createElement("script");
        k.type = "text/javascript";
        k.src = "https://webapi.amap.com/ui/" + e + "/main.js";
        k.onerror = function (a) {
          g.AMapUI = b.failed;
          c("\u8bf7\u6c42 AMapUI \u5931\u8d25");
        };
        k.onload = function () {
          g.AMapUI = b.loaded;
          if (f.length) window.AMapUI.loadUI(f, function () {
            for (var a = 0, b = f.length; a < b; a++) {
              var c = f[a].split("/").slice(-1)[0];
              window.AMapUI[c] = arguments[a];
            }
            for (h(); n.AMapUI.length;) n.AMapUI.splice(0, 1)[0]();
          });else for (h(); n.AMapUI.length;) n.AMapUI.splice(0, 1)[0]();
        };
        l.appendChild(k);
      } else g.AMapUI === b.loaded ? a.version && a.version !== d.AMapUI.version ? c("\u4e0d\u5141\u8bb8\u591a\u4e2a\u7248\u672c AMapUI \u6df7\u7528") : f.length ? window.AMapUI.loadUI(f, function () {
        for (var a = 0, b = f.length; a < b; a++) {
          var c = f[a].split("/").slice(-1)[0];
          window.AMapUI[c] = arguments[a];
        }
        h();
      }) : h() : a.version && a.version !== d.AMapUI.version ? c("\u4e0d\u5141\u8bb8\u591a\u4e2a\u7248\u672c AMapUI \u6df7\u7528") : n.AMapUI.push(function (a) {
        a ? c(a) : f.length ? window.AMapUI.loadUI(f, function () {
          for (var a = 0, b = f.length; a < b; a++) {
            var c = f[a].split("/").slice(-1)[0];
            window.AMapUI[c] = arguments[a];
          }
          h();
        }) : h();
      });
    });
  }
  function r(a) {
    return new Promise(function (h, c) {
      if (g.Loca === b.failed) c("\u524d\u6b21\u8bf7\u6c42 Loca \u5931\u8d25");else if (g.Loca === b.notload) {
        g.Loca = b.loading;
        d.Loca.version = a.version || d.Loca.version;
        var f = d.Loca.version,
          e = d.AMap.version.startsWith("2"),
          l = f.startsWith("2");
        if (e && !l || !e && l) c("JSAPI \u4e0e Loca \u7248\u672c\u4e0d\u5bf9\u5e94\uff01\uff01");else {
          e = d.key;
          l = document.body || document.head;
          var k = document.createElement("script");
          k.type = "text/javascript";
          k.src = "https://webapi.amap.com/loca?v=" + f + "&key=" + e;
          k.onerror = function (a) {
            g.Loca = b.failed;
            c("\u8bf7\u6c42 AMapUI \u5931\u8d25");
          };
          k.onload = function () {
            g.Loca = b.loaded;
            for (h(); n.Loca.length;) n.Loca.splice(0, 1)[0]();
          };
          l.appendChild(k);
        }
      } else g.Loca === b.loaded ? a.version && a.version !== d.Loca.version ? c("\u4e0d\u5141\u8bb8\u591a\u4e2a\u7248\u672c Loca \u6df7\u7528") : h() : a.version && a.version !== d.Loca.version ? c("\u4e0d\u5141\u8bb8\u591a\u4e2a\u7248\u672c Loca \u6df7\u7528") : n.Loca.push(function (a) {
        a ? c(a) : c();
      });
    });
  }
  if (!window) throw Error("AMap JSAPI can only be used in Browser.");
  var b;
  (function (a) {
    a.notload = "notload";
    a.loading = "loading";
    a.loaded = "loaded";
    a.failed = "failed";
  })(b || (b = {}));
  var d = {
      key: "",
      AMap: {
        version: "1.4.15",
        plugins: []
      },
      AMapUI: {
        version: "1.1",
        plugins: []
      },
      Loca: {
        version: "1.3.2"
      }
    },
    g = {
      AMap: b.notload,
      AMapUI: b.notload,
      Loca: b.notload
    },
    n = {
      AMap: [],
      AMapUI: [],
      Loca: []
    },
    q = [],
    t = function (a) {
      "function" == typeof a && (g.AMap === b.loaded ? a(window.AMap) : q.push(a));
    };
  return {
    load: function (a) {
      return new Promise(function (h, c) {
        if (g.AMap == b.failed) c("");else if (g.AMap == b.notload) {
          var f = a.key,
            e = a.version,
            l = a.plugins;
          f ? (window.AMap && "lbs.amap.com" !== location.host && c("\u7981\u6b62\u591a\u79cdAPI\u52a0\u8f7d\u65b9\u5f0f\u6df7\u7528"), d.key = f, d.AMap.version = e || d.AMap.version, d.AMap.plugins = l || d.AMap.plugins, g.AMap = b.loading, e = document.body || document.head, window.___onAPILoaded = function (d) {
            delete window.___onAPILoaded;
            if (d) g.AMap = b.failed, c(d);else for (g.AMap = b.loaded, m(a).then(function () {
              h(window.AMap);
            })["catch"](c); q.length;) q.splice(0, 1)[0]();
          }, l = document.createElement("script"), l.type = "text/javascript", l.src = "https://webapi.amap.com/maps?callback=___onAPILoaded&v=" + d.AMap.version + "&key=" + f + "&plugin=" + d.AMap.plugins.join(","), l.onerror = function (a) {
            g.AMap = b.failed;
            c(a);
          }, e.appendChild(l)) : c("\u8bf7\u586b\u5199key");
        } else if (g.AMap == b.loaded) {
          if (a.key && a.key !== d.key) c("\u591a\u4e2a\u4e0d\u4e00\u81f4\u7684 key");else if (a.version && a.version !== d.AMap.version) c("\u4e0d\u5141\u8bb8\u591a\u4e2a\u7248\u672c JSAPI \u6df7\u7528");else {
            f = [];
            if (a.plugins) for (e = 0; e < a.plugins.length; e += 1) -1 == d.AMap.plugins.indexOf(a.plugins[e]) && f.push(a.plugins[e]);
            if (f.length) window.AMap.plugin(f, function () {
              m(a).then(function () {
                h(window.AMap);
              })["catch"](c);
            });else m(a).then(function () {
              h(window.AMap);
            })["catch"](c);
          }
        } else if (a.key && a.key !== d.key) c("\u591a\u4e2a\u4e0d\u4e00\u81f4\u7684 key");else if (a.version && a.version !== d.AMap.version) c("\u4e0d\u5141\u8bb8\u591a\u4e2a\u7248\u672c JSAPI \u6df7\u7528");else {
          var k = [];
          if (a.plugins) for (e = 0; e < a.plugins.length; e += 1) -1 == d.AMap.plugins.indexOf(a.plugins[e]) && k.push(a.plugins[e]);
          t(function () {
            if (k.length) window.AMap.plugin(k, function () {
              m(a).then(function () {
                h(window.AMap);
              })["catch"](c);
            });else m(a).then(function () {
              h(window.AMap);
            })["catch"](c);
          });
        }
      });
    },
    reset: function () {
      delete window.AMap;
      delete window.AMapUI;
      delete window.Loca;
      d = {
        key: "",
        AMap: {
          version: "1.4.15",
          plugins: []
        },
        AMapUI: {
          version: "1.1",
          plugins: []
        },
        Loca: {
          version: "1.3.2"
        }
      };
      g = {
        AMap: b.notload,
        AMapUI: b.notload,
        Loca: b.notload
      };
      n = {
        AMap: [],
        AMapUI: [],
        Loca: []
      };
    }
  };
});

/***/ }),

/***/ 33203:
/***/ ((module) => {

module.exports = {};

/***/ }),

/***/ 77502:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, `.a-map {
  width: 100%;
  height: 100%;
}
.a-map .amap-logo,
.a-map .amap-copyright {
  display: none !important;
}
.a-map .no-key-message {
  height: 100%;
  color: #939393;
  display: flex;
  justify-content: center;
  align-items: center;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 46405:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85072);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97825);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77659);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55056);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10540);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41113);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_0_use_2_node_modules_less_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_0_use_3_AMapComponent_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(77502);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_0_use_2_node_modules_less_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_0_use_3_AMapComponent_less__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_0_use_2_node_modules_less_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_0_use_3_AMapComponent_less__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_0_use_2_node_modules_less_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_0_use_3_AMapComponent_less__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_0_use_2_node_modules_less_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_0_use_3_AMapComponent_less__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);