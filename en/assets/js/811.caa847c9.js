"use strict";
exports.id = 811;
exports.ids = [811];
exports.modules = {

/***/ 41811:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70655);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);


var fontSize = 12;
var idCnt = 0;
var Gist = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(Gist, _super);
    function Gist() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.iframeNode = null;
        _this.id = 'react-embed-gist-' + idCnt++;
        return _this;
    }
    Gist.prototype.componentDidMount = function () {
        this._updateIframeContent();
    };
    Gist.prototype.componentDidUpdate = function (prevProps, prevState) {
        this._updateIframeContent();
    };
    Gist.prototype._defineUrl = function () {
        var _a = this.props, id = _a.id, file = _a.file;
        var fileArg = file ? "?file=".concat(file) : '';
        return "https://gist.github.com/".concat(id, ".js").concat(fileArg);
    };
    Gist.prototype._updateIframeContent = function () {
        var iframe = this.iframeNode;
        var doc = iframe.document;
        if (iframe.contentDocument)
            doc = iframe.contentDocument;
        else if (iframe.contentWindow)
            doc = iframe.contentWindow.document;
        var gistLink = this._defineUrl();
        var gistScript = "<script type=\"text/javascript\" src=\"".concat(gistLink, "\"></script>");
        var styles = "<style>*{font-size:".concat(fontSize, "px;}</style>");
        var resizeScript = "onload=\"parent.document.getElementById('".concat(this.id, "').style.height=document.body.scrollHeight + 'px'\"");
        var iframeHtml = "<html><head><base target=\"_parent\">".concat(styles, "</head><body style=\"margin:0\" ").concat(resizeScript, ">").concat(gistScript, "</body></html>");
        doc.open();
        doc.writeln(iframeHtml);
        doc.close();
    };
    Gist.prototype.render = function () {
        var _this = this;
        var renderWrap = this.props.renderWrap;
        return renderWrap(react__WEBPACK_IMPORTED_MODULE_0__.createElement("iframe", { id: this.id, ref: function (n) {
                _this.iframeNode = n;
            }, width: "100%", frameBorder: 0, style: { margin: "0 0 -".concat(fontSize, "px") } }));
    };
    return Gist;
}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gist);
//# sourceMappingURL=index.js.map

/***/ })

};
;