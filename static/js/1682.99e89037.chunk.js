"use strict";
(self["webpackChunknews"] = self["webpackChunknews"] || []).push([[1682],{

/***/ 81682:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AMapScaleObserver)
});

;// CONCATENATED MODULE: ./src/pages/Charts/framework/core/AbstractScaleObserver.ts
class AbstractScaleObserver{}
// EXTERNAL MODULE: ./src/pages/Charts/framework/core/ScaleAction.ts
var ScaleAction = __webpack_require__(88538);
;// CONCATENATED MODULE: ./src/pages/Charts/comps/map/AMapScaleObserver.ts
class AMapScaleObserver extends AbstractScaleObserver{constructor(mapDom){super();this.mapDom=null;this.observer=null;this.mapDom=mapDom;this.mapDom.style.transformOrigin='0 0';ScaleAction["default"].add(this);}doScale(xScale,yScale){this.mapDom.style.transform=`scale(${1/xScale},${1/yScale})`;this.observer=new ResizeObserver((entries,observer)=>{entries.forEach(entry=>{const{width,height}=entry.contentRect;this.mapDom.style.width=width*xScale+'px';this.mapDom.style.height=height*yScale+'px';});});this.observer.observe(this.mapDom.parentElement);}destroy(){if(this.observer){this.observer.disconnect();}}}

/***/ })

}]);