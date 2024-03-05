"use strict";
exports.id = 512;
exports.ids = [512];
exports.modules = {

/***/ 25512:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31635);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);


var blockStyle = {
    width: 350,
    overflow: 'hidden',
    borderRadius: '6px',
    display: 'block',
};
var iframeStyle = {
    width: '100%',
    display: 'block',
    overflow: 'hidden',
    borderRadius: '8px',
};
var Imgur = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(Imgur, _super);
    function Imgur() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            height: 0,
        };
        _this.mounted = false;
        _this.onMessage = function (_a) {
            var data = _a.data;
            if (!_this.mounted)
                return;
            if (typeof data !== 'string')
                return;
            try {
                var json = JSON.parse(data);
                if (json.message !== 'resize_imgur')
                    return;
                if (typeof json.href !== 'string')
                    return;
                if (json.href !== _this.src())
                    return;
                if (typeof json.height !== 'number')
                    return;
                _this.setState({ height: json.height });
            }
            catch (_b) { }
        };
        return _this;
    }
    Imgur.prototype.componentDidMount = function () {
        this.mounted = true;
        window.addEventListener('message', this.onMessage);
    };
    Imgur.prototype.componentWillUnmount = function () {
        this.mounted = false;
        window.removeEventListener('message', this.onMessage);
    };
    Imgur.prototype.src = function () {
        return "https://imgur.com/a/".concat(this.props.id, "/embed?pub=true&w=340");
    };
    Imgur.prototype.render = function () {
        var state = this.state;
        var height = state.height || 0;
        return this.props.renderWrap(react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, blockStyle), { border: height ? '1px solid #E5E9F2' : '' }) },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("iframe", { scrolling: "no", frameBorder: "0", src: this.src(), style: (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, iframeStyle), { height: height }) })));
    };
    return Imgur;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Imgur);
//# sourceMappingURL=index.js.map

/***/ })

};
;