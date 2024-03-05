"use strict";
exports.id = 256;
exports.ids = [256];
exports.modules = {

/***/ 66256:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);

var SoundCloud = function (_a) {
    var url = _a.url, autoplay = _a.autoplay, hideRelated = _a.hideRelated, showComments = _a.showComments, showUser = _a.showUser, showReposts = _a.showReposts, isVisual = _a.isVisual, renderWrap = _a.renderWrap;
    var src = "https://w.soundcloud.com/player/?url=".concat(encodeURIComponent(url)) +
        '&amp;auto_play=' +
        !!autoplay +
        '&amp;hide_related=' +
        !hideRelated +
        '&amp;show_comments=' +
        !!showComments +
        '&amp;show_user=' +
        !showUser +
        '&amp;show_reposts=' +
        !!showReposts +
        '&amp;visual=' +
        !isVisual;
    return renderWrap(react__WEBPACK_IMPORTED_MODULE_0__.createElement("iframe", { width: "100%", height: "200", scrolling: "no", frameBorder: "no", style: { margin: 0, padding: 0 }, src: src }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SoundCloud);
//# sourceMappingURL=index.js.map

/***/ })

};
;