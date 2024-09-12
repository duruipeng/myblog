"use strict";
(self["webpackChunknews"] = self["webpackChunknews"] || []).push([[43],{

/***/ 60043:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BaseImageConvert)
/* harmony export */ });
/* harmony import */ var _framework_convert_AbstractConvert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32845);
/* harmony import */ var _framework_cache_ImageSourceCache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92187);
/**
 * 图片转换器，用于将图片资源地址转换为唯一id，图片资源使用blob存入indexDB
 */class BaseImageConvert extends _framework_convert_AbstractConvert__WEBPACK_IMPORTED_MODULE_1__["default"]{getKey(){return"BaseImage";}convert(data){// 将本地上传的图片数据以blob形式存入indexDB，并替换localUrl属性为blobId
// const {hashCode, localUrl} = data.style!;
// if (this.savedImgHash.includes(hashCode!)) return;
// if (hashCode && localUrl) {
//     ImgUtil.saveImgToLocal(localUrl, hashCode).then(() => this.savedImgHash.push(hashCode));
// }
}async convertBack(data){const{hash,type}=data.style;if(type==='local'){const imageInfo=await _framework_cache_ImageSourceCache__WEBPACK_IMPORTED_MODULE_0__["default"].getCache(hash);if(!imageInfo)return;data.style.localUrl=imageInfo.url;}}}

/***/ })

}]);