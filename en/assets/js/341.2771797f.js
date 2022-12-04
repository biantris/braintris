"use strict";
exports.id = 341;
exports.ids = [341];
exports.modules = {

/***/ 44020:
/***/ ((module) => {


var token = '%[a-f0-9]{2}';
var singleMatcher = new RegExp('(' + token + ')|([^%]+?)', 'gi');
var multiMatcher = new RegExp('(' + token + ')+', 'gi');

function decodeComponents(components, split) {
	try {
		// Try to decode the entire string first
		return [decodeURIComponent(components.join(''))];
	} catch (err) {
		// Do nothing
	}

	if (components.length === 1) {
		return components;
	}

	split = split || 1;

	// Split the array in 2 parts
	var left = components.slice(0, split);
	var right = components.slice(split);

	return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}

function decode(input) {
	try {
		return decodeURIComponent(input);
	} catch (err) {
		var tokens = input.match(singleMatcher) || [];

		for (var i = 1; i < tokens.length; i++) {
			input = decodeComponents(tokens, i).join('');

			tokens = input.match(singleMatcher) || [];
		}

		return input;
	}
}

function customDecodeURIComponent(input) {
	// Keep track of all the replacements and prefill the map with the `BOM`
	var replaceMap = {
		'%FE%FF': '\uFFFD\uFFFD',
		'%FF%FE': '\uFFFD\uFFFD'
	};

	var match = multiMatcher.exec(input);
	while (match) {
		try {
			// Decode as big chunks as possible
			replaceMap[match[0]] = decodeURIComponent(match[0]);
		} catch (err) {
			var result = decode(match[0]);

			if (result !== match[0]) {
				replaceMap[match[0]] = result;
			}
		}

		match = multiMatcher.exec(input);
	}

	// Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
	replaceMap['%C2'] = '\uFFFD';

	var entries = Object.keys(replaceMap);

	for (var i = 0; i < entries.length; i++) {
		// Replace all decoded components
		var key = entries[i];
		input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
	}

	return input;
}

module.exports = function (encodedURI) {
	if (typeof encodedURI !== 'string') {
		throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
	}

	try {
		encodedURI = encodedURI.replace(/\+/g, ' ');

		// Try the built in decoder first
		return decodeURIComponent(encodedURI);
	} catch (err) {
		// Fallback to a more advanced decoder
		return customDecodeURIComponent(encodedURI);
	}
};


/***/ }),

/***/ 27418:
/***/ ((module) => {

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ 17563:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;

var strictUriEncode = __webpack_require__(70610);
var objectAssign = __webpack_require__(27418);
var decodeComponent = __webpack_require__(44020);

function encoderForArrayFormat(opts) {
	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, index) {
				return value === null ? [
					encode(key, opts),
					'[',
					index,
					']'
				].join('') : [
					encode(key, opts),
					'[',
					encode(index, opts),
					']=',
					encode(value, opts)
				].join('');
			};

		case 'bracket':
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'[]=',
					encode(value, opts)
				].join('');
			};

		default:
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'=',
					encode(value, opts)
				].join('');
			};
	}
}

function parserForArrayFormat(opts) {
	var result;

	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, accumulator) {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return function (key, value, accumulator) {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				} else if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		default:
			return function (key, value, accumulator) {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function encode(value, opts) {
	if (opts.encode) {
		return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	} else if (typeof input === 'object') {
		return keysSorter(Object.keys(input)).sort(function (a, b) {
			return Number(a) - Number(b);
		}).map(function (key) {
			return input[key];
		});
	}

	return input;
}

function extract(str) {
	var queryStart = str.indexOf('?');
	if (queryStart === -1) {
		return '';
	}
	return str.slice(queryStart + 1);
}

function parse(str, opts) {
	opts = objectAssign({arrayFormat: 'none'}, opts);

	var formatter = parserForArrayFormat(opts);

	// Create an object with no prototype
	// https://github.com/sindresorhus/query-string/issues/47
	var ret = Object.create(null);

	if (typeof str !== 'string') {
		return ret;
	}

	str = str.trim().replace(/^[?#&]/, '');

	if (!str) {
		return ret;
	}

	str.split('&').forEach(function (param) {
		var parts = param.replace(/\+/g, ' ').split('=');
		// Firefox (pre 40) decodes `%3D` to `=`
		// https://github.com/sindresorhus/query-string/pull/37
		var key = parts.shift();
		var val = parts.length > 0 ? parts.join('=') : undefined;

		// missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		val = val === undefined ? null : decodeComponent(val);

		formatter(decodeComponent(key), val, ret);
	});

	return Object.keys(ret).sort().reduce(function (result, key) {
		var val = ret[key];
		if (Boolean(val) && typeof val === 'object' && !Array.isArray(val)) {
			// Sort object keys, not values
			result[key] = keysSorter(val);
		} else {
			result[key] = val;
		}

		return result;
	}, Object.create(null));
}

__webpack_unused_export__ = extract;
__webpack_unused_export__ = parse;

exports.Pz = function (obj, opts) {
	var defaults = {
		encode: true,
		strict: true,
		arrayFormat: 'none'
	};

	opts = objectAssign(defaults, opts);

	if (opts.sort === false) {
		opts.sort = function () {};
	}

	var formatter = encoderForArrayFormat(opts);

	return obj ? Object.keys(obj).sort(opts.sort).map(function (key) {
		var val = obj[key];

		if (val === undefined) {
			return '';
		}

		if (val === null) {
			return encode(key, opts);
		}

		if (Array.isArray(val)) {
			var result = [];

			val.slice().forEach(function (val2) {
				if (val2 === undefined) {
					return;
				}

				result.push(formatter(key, val2, result.length));
			});

			return result.join('&');
		}

		return encode(key, opts) + '=' + encode(val, opts);
	}).filter(function (x) {
		return x.length > 0;
	}).join('&') : '';
};

__webpack_unused_export__ = function (str, opts) {
	return {
		url: str.split('?')[0] || '',
		query: parse(extract(str), opts)
	};
};


/***/ }),

/***/ 5341:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ instagram)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/query-string/index.js
var query_string = __webpack_require__(17563);
;// CONCATENATED MODULE: ./node_modules/react-instagram-embed/es/index.js
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};


var InstagramEmbed = /** @class */ (function (_super) {
    __extends(InstagramEmbed, _super);
    function InstagramEmbed(props) {
        var _this = _super.call(this, props) || this;
        _this.request = null;
        // Public
        _this.cancel = function () {
            if (_this.request) {
                _this.request.cancel();
            }
        };
        _this.handleFetchSuccess = function (response) {
            if (_this.props.onSuccess) {
                _this.props.onSuccess(response);
            }
            _this.setState({ html: response.html }, function () {
                window.instgrm.Embeds.process();
                if (_this.props.onAfterRender) {
                    _this.props.onAfterRender();
                }
            });
        };
        _this.handleFetchFailure = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            clearTimeout(_this.timer);
            if (_this.props.onFailure) {
                _this.props.onFailure(args);
            }
        };
        _this.createRequestPromise = function (url) {
            var request = {};
            request.promise = new Promise(function (resolve, reject) {
                var promise = fetch(url)
                    .then(function (response) { return response.json(); })
                    .then(function (json) { return resolve(json); })
                    .catch(function (err) { return reject(err); });
                request.cancel = function () { return reject(new Error('Cancelled')); };
                return promise;
            });
            return request;
        };
        _this.state = { html: null };
        return _this;
    }
    InstagramEmbed.prototype.componentDidMount = function () {
        var _this = this;
        if (window.instgrm) {
            this.fetchEmbed(this.getQueryParams(this.props));
        }
        else {
            if (this.props.injectScript && !document.getElementById('react-instagram-embed-script')) {
                this.injectScript();
            }
            this.checkAPI().then(function () {
                _this.fetchEmbed(_this.getQueryParams(_this.props));
            });
        }
    };
    InstagramEmbed.prototype.componentDidUpdate = function (prevProps) {
        var _a = this.props, url = _a.url, hideCaption = _a.hideCaption, maxWidth = _a.maxWidth, containerTagName = _a.containerTagName;
        if (prevProps.url !== url ||
            prevProps.hideCaption !== hideCaption ||
            prevProps.maxWidth !== maxWidth ||
            prevProps.containerTagName !== containerTagName) {
            this.request.cancel();
            this.fetchEmbed(this.getQueryParams(this.props));
        }
    };
    InstagramEmbed.prototype.componentWillUnmount = function () {
        this.cancel();
    };
    InstagramEmbed.prototype.render = function () {
        var Tag = this.props.containerTagName;
        return react.createElement(Tag, __assign({}, this.omitComponentProps(), { dangerouslySetInnerHTML: { __html: this.state.html || '' } }));
    };
    InstagramEmbed.prototype.fetchEmbed = function (queryParams) {
        this.request = this.createRequestPromise("https://api.instagram.com/oembed/?" + queryParams);
        if (this.props.onLoading) {
            this.props.onLoading();
        }
        this.request.promise.then(this.handleFetchSuccess).catch(this.handleFetchFailure);
    };
    InstagramEmbed.prototype.omitComponentProps = function () {
        var _a = this.props, url = _a.url, hideCaption = _a.hideCaption, maxWidth = _a.maxWidth, containerTagName = _a.containerTagName, onLoading = _a.onLoading, onSuccess = _a.onSuccess, onAfterRender = _a.onAfterRender, onFailure = _a.onFailure, protocol = _a.protocol, injectScript = _a.injectScript, rest = __rest(_a, ["url", "hideCaption", "maxWidth", "containerTagName", "onLoading", "onSuccess", "onAfterRender", "onFailure", "protocol", "injectScript"]);
        return rest;
    };
    InstagramEmbed.prototype.injectScript = function () {
        var protocolToUse = window.location.protocol.indexOf('file') === 0 ? this.props.protocol : '';
        var s = document.createElement('script');
        s.async = s.defer = true;
        s.src = protocolToUse + "//platform.instagram.com/en_US/embeds.js";
        s.id = 'react-instagram-embed-script';
        var body = document.body;
        if (body) {
            body.appendChild(s);
        }
    };
    InstagramEmbed.prototype.checkAPI = function () {
        var _this = this;
        return new Promise(function (resolve) {
            (function checkAPI(self) {
                self.timer = window.setTimeout(function () {
                    if (window.instgrm) {
                        clearTimeout(self.timer);
                        resolve();
                    }
                    else {
                        checkAPI(self);
                    }
                }, 20);
            })(_this);
        });
    };
    InstagramEmbed.prototype.getQueryParams = function (_a) {
        var url = _a.url, hideCaption = _a.hideCaption, maxWidth = _a.maxWidth;
        return query_string/* stringify */.Pz({
            url: url,
            hidecaption: hideCaption,
            maxwidth: typeof maxWidth === 'number' && maxWidth >= 320 ? maxWidth : undefined,
            omitscript: true
        });
    };
    InstagramEmbed.defaultProps = {
        hideCaption: false,
        containerTagName: 'div',
        protocol: 'https:',
        injectScript: true
    };
    return InstagramEmbed;
}(react.PureComponent));
/* harmony default export */ const es = (InstagramEmbed);

;// CONCATENATED MODULE: ./node_modules/react-embed/esm/blocks/instagram/index.js


var Instagram = function (_a) {
    var url = _a.url, renderWrap = _a.renderWrap;
    var C = es;
    return renderWrap(react.createElement(C, { url: url, maxWidth: 320, hideCaption: false, containerTagName: "div", protocol: "", injectScript: true, onLoading: function () { }, onSuccess: function () { }, onAfterRender: function () { }, onFailure: function () { } }));
};
/* harmony default export */ const instagram = (Instagram);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 70610:
/***/ ((module) => {


module.exports = function (str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
		return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	});
};


/***/ })

};
;