"use strict";
exports.id = 409;
exports.ids = [409];
exports.modules = {

/***/ 56409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70655);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);


var script = document.createElement('script');
script.type = 'text/javascript';
script.id = 'dropboxjs';
var DROPBOX_APP_KEY = window.DROPBOX_APP_KEY;
if (DROPBOX_APP_KEY)
    script.setAttribute('data-app-key', DROPBOX_APP_KEY);
script.src = 'https://www.dropbox.com/static/api/2/dropins.js';
document.body.append(script);
var DropboxUi = function (_a) {
    var url = _a.url, renderWrap = _a.renderWrap;
    var ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(function () {
        if (!ref.current)
            return;
        var embed = Dropbox.embed({
            link: url,
            file: {
                zoom: "best"
            },
            folder: {
                view: "list",
                headerSize: "normal"
            }
        }, ref.current);
        return function () {
            Dropbox.unmount(embed);
        };
    }, []);
    return renderWrap(react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { ref: ref, style: { height: 500 } }));
};
var WithDropbox = function (props) {
    var _a = react__WEBPACK_IMPORTED_MODULE_0__.useState(false), ready = _a[0], setReady = _a[1];
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        var mounted = true;
        var wait = function () {
            if (!mounted)
                return;
            if (typeof Dropbox !== 'undefined') {
                setReady(true);
                return;
            }
            setTimeout(wait, 100);
        };
        wait();
        return function () {
            mounted = false;
        };
    }, []);
    if (!ready)
        return null;
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(DropboxUi, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, props));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WithDropbox);
//# sourceMappingURL=index.js.map

/***/ })

};
;