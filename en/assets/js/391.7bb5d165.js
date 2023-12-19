exports.id = 391;
exports.ids = [391];
exports.modules = {

/***/ 64063:
/***/ ((module) => {

"use strict";


// do not edit .js files directly - edit src/index.jst



module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};


/***/ }),

/***/ 1049:
/***/ ((module) => {

"use strict";


var keyList = Object.keys;
var native_stringify = JSON.stringify;

function stringify(val, allowUndefined) {
    var i, max, str, keys, key, propVal, tipeof;

    tipeof = typeof val;

    if (tipeof === 'string') return native_stringify(val);
    if (val === true) return 'true';
    if (val === false) return 'false';
    if (val === null) return 'null';

    if (val instanceof Array) {
        str = '[';
        max = val.length - 1;
        for(i = 0; i < max; i++)
            str += stringify(val[i], false) + ',';
        if (max > -1) {
            str += stringify(val[i], false);
        }

        return str + ']';
    }

    if (val instanceof Object) {
        if (typeof val.toJSON === 'function')
            return stringify(val.toJSON(), allowUndefined);

        // only object is left
        keys = keyList(val).sort();
        max = keys.length;
        str = '';
        i = 0;
        while (i < max) {
            key = keys[i];
            propVal = stringify(val[key], true);
            if (propVal !== undefined) {
                if (i && str !== '') { //if the string is empty, don't add comma to avoid the json to become invalid.
                    str += ',';
                }
                str += native_stringify(key) + ':' + propVal;
            }
            i++;
        }
        return '{' + str + '}';
    }

    switch (tipeof) {
    case 'function':
    case 'undefined':
        return allowUndefined ? undefined : null;
    default:
        return isFinite(val) ? val : null;
    }
}

module.exports = function(obj) { return '' + stringify(obj, false); };


/***/ }),

/***/ 49090:
/***/ ((module) => {


module.exports = function load (src, opts, cb) {
  var head = document.head || document.getElementsByTagName('head')[0]
  var script = document.createElement('script')

  if (typeof opts === 'function') {
    cb = opts
    opts = {}
  }

  opts = opts || {}
  cb = cb || function() {}

  script.type = opts.type || 'text/javascript'
  script.charset = opts.charset || 'utf8';
  script.async = 'async' in opts ? !!opts.async : true
  script.src = src

  if (opts.attrs) {
    setAttributes(script, opts.attrs)
  }

  if (opts.text) {
    script.text = '' + opts.text
  }

  var onend = 'onload' in script ? stdOnEnd : ieOnEnd
  onend(script, cb)

  // some good legacy browsers (firefox) fail the 'in' detection above
  // so as a fallback we always set onload
  // old IE will ignore this and new IE will set onload
  if (!script.onload) {
    stdOnEnd(script, cb);
  }

  head.appendChild(script)
}

function setAttributes(script, attrs) {
  for (var attr in attrs) {
    script.setAttribute(attr, attrs[attr]);
  }
}

function stdOnEnd (script, cb) {
  script.onload = function () {
    this.onerror = this.onload = null
    cb(null, script)
  }
  script.onerror = function () {
    // this.onload = null here is necessary
    // because even IE9 works not like others
    this.onerror = this.onload = null
    cb(new Error('Failed to load ' + this.src), script)
  }
}

function ieOnEnd (script, cb) {
  script.onreadystatechange = function () {
    if (this.readyState != 'complete' && this.readyState != 'loaded') return
    this.onreadystatechange = null
    cb(null, script) // there is no way to catch loading errors in IE8
  }
}


/***/ }),

/***/ 58293:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.addon = function (renderer) {
    if (false) {}

    renderer.put('', {
        '@keyframes fadeIn': {
            from: {
                opacity: 0,
            },
            to: {
                opacity: 1,
            }
        },

        '.fadeIn': {
            animation: 'fadeIn .4s linear',
        }
    });
};


/***/ }),

/***/ 47567:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.addon = function (renderer) {
    if (false) {}

    renderer.put('', {
        '@keyframes fadeInDown': {
            from: {
                opacity: 0,
                transform: 'translate3d(0, -10%, 0)'
            },

            to: {
                opacity: 1,
                transform: 'translate3d(0, 0, 0)',
            }
        },

        '.fadeInDown': {
            animation: 'fadeInDown .3s',
        }
    });
};


/***/ }),

/***/ 36302:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.addon = function (renderer) {
    if (false) {}

    renderer.put('', {
        '@keyframes fadeInScale': {
            from: {
                opacity: 0,
                transform: 'scale(.95)'
            },

            to: {
                opacity: 1,
                transform: 'scale(1)',
            }
        },

        '.fadeInScale': {
            animation: 'fadeInScale .3s',
        }
    });
};


/***/ }),

/***/ 89599:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


var atoms = exports.atoms = {
    d:      'display',

    mar:    'margin',
    mart:   'margin-top',
    marr:   'margin-right',
    marb:   'margin-bottom',
    marl:   'margin-left',
    pad:    'padding',
    padt:   'padding-top',
    padr:   'padding-right',
    padb:   'padding-bottom',
    padl:   'padding-left',

    bd:     'border',
    bdt:    'border-top',
    bdr:    'border-right',
    bdb:    'border-bottom',
    bdl:    'border-left',
    bdrad:  'border-radius',

    col:    'color',
    op:     'opacity',
    bg:     'background',
    bgc:    'background-color',

    fz:     'font-size',
    fs:     'font-style',
    fw:     'font-weight',
    ff:     'font-family',

    lh:     'line-height',
    bxz:    'box-sizing',
    cur:    'cursor',
    ov:     'overflow',
    pos:    'position',
    ls:     'list-style',
    ta:     'text-align',
    td:     'text-decoration',
    fl:     'float',
    w:      'width',
    minW:   'min-width',
    maxW:   'max-width',
    minH:   'min-height',
    maxH:   'max-height',
    h:      'height',
    trs:    'transition',
    out:    'outline',
    vis:    'visibility',
    ww:     'word-wrap',
    con:    'content',
    z:      'z-index',
    tr:     'transform',
};

exports.addon = function (renderer) {
    var originalDecl = renderer.decl;
    renderer.decl = function (key, value) {
        return originalDecl(atoms[key] || key, value);
    };
};


/***/ }),

/***/ 37760:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.addon = function (renderer) {
    var cache = {};

    renderer.cache = function (css) {
        if (!css) return '';

        var key = renderer.hash(css);

        if (!cache[key]) {
            cache[key] = renderer.rule(css, key);
        }

        return cache[key];
    };
};


/***/ }),

/***/ 62913:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var transformComponentStatic = __webpack_require__(19134);
var transformComponentDynamic = __webpack_require__(77343);

exports.addon = function (renderer) {
    if (false) {}

    renderer.css = function (a, b) {
        var isComponent = a && a.prototype && a.prototype.render;

        // Static class decorator.
        if (isComponent) {
            if (a.css) transformComponentStatic(renderer, a.prototype, a.css);

            var componentWillMount_ = a.prototype.componentWillMount;

            a.prototype.componentWillMount = function () {
                if (this.css) transformComponentDynamic(renderer, a, this.css.bind(this));
                if (componentWillMount_) componentWillMount_.apply(this);
            };

            return a;
        }

        return function (instanceOrComp, key, descriptor) {
            if (typeof key === 'string') {
                // .render() method decorator
                var Comp = instanceOrComp.constructor;

                transformComponentDynamic(renderer, Comp, a);
                descriptor.value = Comp.prototype.render;

                return descriptor;
            }

            // Class decorator
            transformComponentStatic(renderer, instanceOrComp.prototype, a, b);
        };
    };
};


/***/ }),

/***/ 68588:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.addon = function (renderer) {
    if (false) {}

    renderer.drule = function (styles, block) {
        var className = renderer.rule(styles, block);

        var closure = function (dynamicStyles) {
            if (!dynamicStyles) {
                return className;
            }

            var dynamicClassName = renderer.cache(dynamicStyles);

            return className + dynamicClassName;
        };

        closure.toString = function () {
            return className;
        };

        return closure;
    };
};


/***/ }),

/***/ 54481:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.addon = function (renderer) {
    if (false) {}

    renderer.dsheet = function (map, block) {
        var styles = renderer.sheet(map, block);
        var closures = {};

        var createClosure = function (elementModifier) {
            var closure = function (dynamicStyles) {
                if (!dynamicStyles) {
                    return styles[elementModifier];
                }

                var dynamicClassName = renderer.cache(dynamicStyles);

                return styles[elementModifier] + dynamicClassName;
            };

            closure.toString = function () {
                return styles[elementModifier];
            };

            return closure;
        };

        for (var elementModifier in map) {
            closures[elementModifier] = createClosure(elementModifier);
        }

        return closures;
    };
};


/***/ }),

/***/ 86808:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


function createUrl (font, weights, subsets) {
    var params = '?family=' + encodeURIComponent(font);

    if (weights) {
        if (!(weights instanceof Array))
            weights = [weights];

        params += ':' + weights.join(',');
    }

    if (subsets) {
        if (!(subsets instanceof Array))
            subsets = [subsets];

        params += '&subset=' + subsets.join(',');
    }

    return 'https://fonts.googleapis.com/css' + params;
}

exports.addon = function (renderer) {
    if (false) {}

    if (renderer.client) {
        renderer.googleFont = function (font, weights, subsets) {
            var el = document.createElement('link');

            el.href = createUrl(font, weights, subsets);
            el.rel = 'stylesheet';
            el.type = 'text/css';

            document.head.appendChild(el);
        };
    } else {
        renderer.googleFont = function (font, weights, subsets) {
            renderer.putRaw("@import url('" + createUrl(font, weights, subsets) + "');");
        };
    }
};


/***/ }),

/***/ 46416:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var addonCache = (__webpack_require__(37760).addon);

exports.addon = function (renderer) {
    if (!renderer.cache) {
        addonCache(renderer);
    }

    if (false) {}

    renderer.jsx = function (fn, styles, block) {
        var className;
        var isElement = typeof fn === 'string';

        // In dev mode emit CSS immediately so correct sourcemaps can be generated.
        if (false) {}

        var Component = function (props) {
            if (!className) {
                className = renderer.rule(styles, block);
            }

            var copy = props;
            var $as = copy.$as;
            var $ref = copy.$ref;

            if (false) {}

            var dynamicClassName = renderer.cache(props.css);
            delete copy.css;
            delete copy.$as;

            if (isElement || $as) {
                delete copy.$ref;
                copy.ref = $ref;
            }

            copy.className = (props.className || '') + className + dynamicClassName;

            return (isElement || $as)
                ? renderer.h($as || fn, copy)
                : fn(copy);
        };

        if (false) {}

        return Component;
    };
};


/***/ }),

/***/ 5180:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.addon = function (renderer, config) {
    if (false) {}

    config = renderer.assign({
        prefixes: ['-webkit-', '-moz-', '-o-', ''],
    }, config || {});

    var prefixes = config.prefixes;

    if (renderer.client) {
        // Craete @keyframe Stylesheet `ksh`.
        document.head.appendChild(renderer.ksh = document.createElement('style'));
    }

    var putAt = renderer.putAt;

    renderer.putAt = function (__, keyframes, prelude) {
        // @keyframes
        if (prelude[1] === 'k') {
            var str = '';

            for (var keyframe in keyframes) {
                var decls = keyframes[keyframe];
                var strDecls = '';

                for (var prop in decls)
                    strDecls += renderer.decl(prop, decls[prop]);

                str += keyframe + '{' + strDecls + '}';
            }

            for (var i = 0; i < prefixes.length; i++) {
                var prefix = prefixes[i];
                var rawKeyframes = prelude.replace('@keyframes', '@' + prefix + 'keyframes') + '{' + str + '}';

                if (renderer.client) {
                    renderer.ksh.appendChild(document.createTextNode(rawKeyframes));
                } else {
                    renderer.putRaw(rawKeyframes);
                }
            }

            return;
        }

        putAt(__, keyframes, prelude);
    };

    renderer.keyframes = function (keyframes, block) {
        if (!block) block = renderer.hash(keyframes);
        block = renderer.pfx + block;

        renderer.putAt('', keyframes, '@keyframes ' + block);

        return block;
    };
};


/***/ }),

/***/ 73047:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.addon = function (renderer) {
    renderer.selector = function (parentSelectors, selector) {
        var parents = parentSelectors.split(',');
        var result = [];
        var selectors = selector.split(',');
        var len1 = parents.length;
        var len2 = selectors.length;
        var i, j, sel, pos, parent, replacedSelector;

        for (i = 0; i < len2; i++) {
            sel = selectors[i];
            pos = sel.indexOf('&');

            if (pos > -1) {
                for (j = 0; j < len1; j++) {
                    parent = parents[j];
                    replacedSelector = sel.replace(/&/g, parent);
                    result.push(replacedSelector);
                }
            } else {
                for (j = 0; j < len1; j++) {
                    parent = parents[j];

                    if (parent) {
                        result.push(parent + ' ' + sel);
                    } else {
                        result.push(sel);
                    }
                }
            }
        }

        return result.join(',');
    };
};


/***/ }),

/***/ 27861:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.addon = function (renderer) {
    if (false) {}

    renderer.put('', {
        'html, body': {
            fontFamily: '"Trebuchet MS","Lucida Grande","Lucida Sans Unicode","Lucida Sans",sans-serif',
            fontWeight: 400,
            fontSize: '16px',

            '-moz-text-size-adjust': '100%',
            '-ms-text-size-adjust': '100%',
            '-webkit-text-size-adjust': '100%',
            'text-size-adjust': '100%',

            // Makes fonts more smooth/prettier.
            '-webkit-font-smoothing': 'antialiased',
            '-moz-osx-font-smoothing': 'grayscale',
        },
    });
};


/***/ }),

/***/ 12931:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.addon = function (renderer) {
    if (false) {}

    // Adopted from https://raw.githubusercontent.com/necolas/normalize.css/master/normalize.css
    var css = {
        html: {
            lineHeight: 1.15,
            '-webkit-text-size-adjust': '100%',
        },
        body: {
            margin: 0,
        },
        h1: {
            fontSize: '2em',
            margin: '0.67em 0',
        },
        hr: {
            boxSizing: 'content-box',
            height: 0,
            overflow: 'visible',
        },
        pre: {
            fontFamily: 'monospace, monospace',
            fontSize: '1em',
        },
        'b,strong': {
            fontWeight: 'bolder',
        },
        'code,kbd,samp': {
            fontFamily: 'monospace, monospace',
            fontSize: '1em',
        },
        'small': {
            fontSize: '80%',
        },
        'sub,sup': {
            fontSize: '75%',
            lineHeight: 0,
            position: 'relative',
            verticalAlign: 'baseline',
        },
        sub: {
            bottom: '-0.25em',
        },
        sup: {
            top: '-0.5em',
        },
        'button,input,optgroup,select,textarea': {
            fontFamily: 'inherit',
            fontSize: '100%',
            lineHeight: 1.15,
            margin: 0,
        },
        'button,input': {
            overflow: 'visible',
        },
        'button,select': {
            textTransform: 'none',
        },
        fieldset: {
            padding: '0.35em 0.75em 0.625em',
        },
        legend: {
            boxSizing: 'border-box',
            display: 'table',
            maxWidth: '100%',
            padding: 0,
            whiteSpace: 'normal',
        },
        progress: {
            verticalAlign: 'baseline',
        },
        summary: {
            display: 'list-item',
        },
    };

    renderer.put('', css);
};


/***/ }),

/***/ 96947:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.addon = function (renderer) {
    if (false) {}

    var blocks;

    if (false) {}

    renderer.rule = function (css, block) {
        // Warn user if CSS selectors clash.
        if (false) {}

        block = block || renderer.hash(css);
        block = renderer.pfx + block;
        renderer.put('.' + block, css);

        return ' ' + block;
    };
};


/***/ }),

/***/ 70524:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.addon = function (renderer) {
    if (false) {}

    renderer.sheet = function (map, block) {
        var result = {};

        if (!block) {
            block = renderer.hash(map);
        }

        var onElementModifier = function (elementModifier) {
            var styles = map[elementModifier];

            if (false) {} else {
                Object.defineProperty(result, elementModifier, {
                    configurable: true,
                    enumerable: true,
                    get: function () {
                        var classNames = renderer.rule(styles, block + '-' + elementModifier);

                        Object.defineProperty(result, elementModifier, {
                            value: classNames,
                            enumerable: true
                        });

                        return classNames;
                    },
                });
            }
        };

        for (var elementModifier in map) {
            onElementModifier(elementModifier);
        }

        return result;
    };
};


/***/ }),

/***/ 55028:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var stringify = __webpack_require__(1049);

exports.addon = function (renderer) {
    renderer.stringify = stringify;
};


/***/ }),

/***/ 41669:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.addon = function (renderer) {
    if (false) {}

    renderer.useStyles = function (map, fn, block) {
        block = block || fn.displayName || fn.name;

        var styles = renderer.sheet(map, block);
        var Component = function (props) {
            return fn(props, styles);
        };

        if (false) {}

        return Component;
    };
};


/***/ }),

/***/ 77343:
/***/ ((module) => {

"use strict";


module.exports = function (renderer, Comp, dynamicTemplate) {
    if (false) { var what; }

    var prototype = Comp.prototype;
    var render_ = prototype.render;

    prototype.render = function () {
        var element = render_.apply(this, arguments);
        var props = element.props;
        var dynamicClassName = '';

        if (dynamicTemplate) {
            var dynamicStyles = dynamicTemplate(this.props);

            if (dynamicStyles) {
                dynamicClassName = renderer.cache(dynamicStyles);
            }
        }

        if (!dynamicClassName) {
            return element;
        }

        var className = (props.className || '') + dynamicClassName;

        if (false) {}

        props.className = className;

        return element;
    };
};


/***/ }),

/***/ 19134:
/***/ ((module) => {

"use strict";


module.exports = function (renderer, prototype, styles, block) {
    var render_ = prototype.render;
    var className = '';

    prototype.render = function () {
        var element = render_.call(this);

        if (element) {
            if (!className) {
                className = renderer.rule(styles, block);
            }

            if (true) {
                element.props.className = (element.props.className || '') + className;
            } else {}
        }

        return element;
    };
};


/***/ }),

/***/ 40818:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


var KEBAB_REGEX = /[A-Z]/g;

var hash = function (str) {
    var h = 5381, i = str.length;

    while (i) h = (h * 33) ^ str.charCodeAt(--i);

    return '_' + (h >>> 0).toString(36);
};

exports.create = function (config) {
    config = config || {};
    var assign = config.assign || Object.assign;
    var client = typeof window === 'object';

    // Check if we are really in browser environment.
    if (false) {}

    var renderer = assign({
        raw: '',
        pfx: '_',
        client: client,
        assign: assign,
        stringify: JSON.stringify,
        kebab: function (prop) {
            return prop.replace(KEBAB_REGEX, '-$&').toLowerCase();
        },
        decl: function (key, value) {
            key = renderer.kebab(key);
            return key + ':' + value + ';';
        },
        hash: function (obj) {
            return hash(renderer.stringify(obj));
        },
        selector: function (parent, selector) {
            return parent + (selector[0] === ':' ? ''  : ' ') + selector;
        },
        putRaw: function (rawCssRule) {
            renderer.raw += rawCssRule;
        }
    }, config);

    if (renderer.client) {
        if (!renderer.sh)
            document.head.appendChild(renderer.sh = document.createElement('style'));

        if (false) {}

        renderer.putRaw = function (rawCssRule) {
            // .insertRule() is faster than .appendChild(), that's why we use it in PROD.
            // But CSS injected using .insertRule() is not displayed in Chrome Devtools,
            // that's why we use .appendChild in DEV.
            if (true) {
                var sheet = renderer.sh.sheet;

                // Unknown pseudo-selectors will throw, this try/catch swallows all errors.
                try {
                    sheet.insertRule(rawCssRule, sheet.cssRules.length);
                // eslint-disable-next-line no-empty
                } catch (error) {}
            } else {}
        };
    }

    renderer.put = function (selector, decls, atrule) {
        var str = '';
        var prop, value;
        var postponed = [];

        for (prop in decls) {
            value = decls[prop];

            if ((value instanceof Object) && !(value instanceof Array)) {
                postponed.push(prop);
            } else {
                if (false) {} else {
                    str += renderer.decl(prop, value, selector, atrule);
                }
            }
        }

        if (str) {
            if (false) {} else {
                str = selector + '{' + str + '}';
            }
            renderer.putRaw(atrule ? atrule + '{' + str + '}' : str);
        }

        for (var i = 0; i < postponed.length; i++) {
            prop = postponed[i];

            if (prop[0] === '@' && prop !== '@font-face') {
                renderer.putAt(selector, decls[prop], prop);
            } else {
                renderer.put(renderer.selector(selector, prop), decls[prop], atrule);
            }
        }
    };

    renderer.putAt = renderer.put;

    return renderer;
};


/***/ }),

/***/ 96595:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(70655);
const react_1 = __webpack_require__(67294);
const nano_css_1 = __webpack_require__(40818);
const cache_1 = __webpack_require__(37760);
const stable_1 = __webpack_require__(55028);
const nesting_1 = __webpack_require__(73047);
const atoms_1 = __webpack_require__(89599);
const rule_1 = __webpack_require__(96947);
const drule_1 = __webpack_require__(68588);
const sheet_1 = __webpack_require__(70524);
const dsheet_1 = __webpack_require__(54481);
const useStyles_1 = __webpack_require__(41669);
const jsx_1 = __webpack_require__(46416);
const decorator_1 = __webpack_require__(62913);
const keyframes_1 = __webpack_require__(5180);
const fadeIn_1 = __webpack_require__(58293);
const fadeInDown_1 = __webpack_require__(47567);
const fadeInScale_1 = __webpack_require__(36302);
const Normalize_1 = __webpack_require__(12931);
const reset_font_1 = __webpack_require__(27861);
const googleFont_1 = __webpack_require__(86808);
tslib_1.__exportStar(__webpack_require__(40818), exports);
const nano = nano_css_1.create({
    pfx: 'p4-',
    h: react_1.createElement,
});
exports.nano = nano;
cache_1.addon(nano);
stable_1.addon(nano);
nesting_1.addon(nano);
atoms_1.addon(nano);
rule_1.addon(nano);
drule_1.addon(nano);
sheet_1.addon(nano);
dsheet_1.addon(nano);
useStyles_1.addon(nano);
jsx_1.addon(nano);
decorator_1.addon(nano);
keyframes_1.addon(nano);
fadeIn_1.addon(nano);
fadeInDown_1.addon(nano);
fadeInScale_1.addon(nano);
googleFont_1.addon(nano);
exports.globalCss = () => {
    Normalize_1.addon(nano);
    reset_font_1.addon(nano);
};
exports.put = nano.put;
exports.rule = nano.rule;
exports.drule = nano.drule;
exports.sheet = nano.sheet;
exports.keyframes = nano.keyframes;
exports.css = nano.css;
const { dsheet, useStyles, jsx, googleFont } = nano;
exports.dsheet = dsheet;
exports.useStyles = useStyles;
exports.jsx = jsx;
exports.googleFont = googleFont;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 28391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ youtube)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-youtube/node_modules/prop-types/index.js
var prop_types = __webpack_require__(76853);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/fast-deep-equal/index.js
var fast_deep_equal = __webpack_require__(64063);
var fast_deep_equal_default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal);
// EXTERNAL MODULE: ./node_modules/youtube-player/dist/index.js
var dist = __webpack_require__(11062);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
;// CONCATENATED MODULE: ./node_modules/react-youtube/dist/index.esm.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/**
 * Check whether a `props` change should result in the video being updated.
 *
 * @param {Object} prevProps
 * @param {Object} props
 */

function shouldUpdateVideo(prevProps, props) {
  // A changing video should always trigger an update
  if (prevProps.videoId !== props.videoId) {
    return true;
  } // Otherwise, a change in the start/end time playerVars also requires a player
  // update.


  var prevVars = prevProps.opts.playerVars || {};
  var vars = props.opts.playerVars || {};
  return prevVars.start !== vars.start || prevVars.end !== vars.end;
}
/**
 * Neutralize API options that only require a video update, leaving only options
 * that require a player reset. The results can then be compared to see if a
 * player reset is necessary.
 *
 * @param {Object} opts
 */


function filterResetOptions(opts) {
  return _objectSpread(_objectSpread({}, opts), {}, {
    height: 0,
    width: 0,
    playerVars: _objectSpread(_objectSpread({}, opts.playerVars), {}, {
      autoplay: 0,
      start: 0,
      end: 0
    })
  });
}
/**
 * Check whether a `props` change should result in the player being reset.
 * The player is reset when the `props.opts` change, except if the only change
 * is in the `start` and `end` playerVars, because a video update can deal with
 * those.
 *
 * @param {Object} prevProps
 * @param {Object} props
 */


function shouldResetPlayer(prevProps, props) {
  return prevProps.videoId !== props.videoId || !fast_deep_equal_default()(filterResetOptions(prevProps.opts), filterResetOptions(props.opts));
}
/**
 * Check whether a props change should result in an id or className update.
 *
 * @param {Object} prevProps
 * @param {Object} props
 */


function shouldUpdatePlayer(prevProps, props) {
  return prevProps.id !== props.id || prevProps.className !== props.className || prevProps.opts.width !== props.opts.width || prevProps.opts.height !== props.opts.height || prevProps.title !== props.title;
}

var YouTube = /*#__PURE__*/function (_React$Component) {
  _inherits(YouTube, _React$Component);

  var _super = _createSuper(YouTube);

  /**
   * Expose PlayerState constants for convenience. These constants can also be
   * accessed through the global YT object after the YouTube IFrame API is instantiated.
   * https://developers.google.com/youtube/iframe_api_reference#onStateChange
   */
  function YouTube(props) {
    var _this;

    _classCallCheck(this, YouTube);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onPlayerReady", function (event) {
      return _this.props.onReady(event);
    });

    _defineProperty(_assertThisInitialized(_this), "onPlayerError", function (event) {
      return _this.props.onError(event);
    });

    _defineProperty(_assertThisInitialized(_this), "onPlayerStateChange", function (event) {
      _this.props.onStateChange(event);

      switch (event.data) {
        case YouTube.PlayerState.ENDED:
          _this.props.onEnd(event);

          break;

        case YouTube.PlayerState.PLAYING:
          _this.props.onPlay(event);

          break;

        case YouTube.PlayerState.PAUSED:
          _this.props.onPause(event);

          break;

        default:
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onPlayerPlaybackRateChange", function (event) {
      return _this.props.onPlaybackRateChange(event);
    });

    _defineProperty(_assertThisInitialized(_this), "onPlayerPlaybackQualityChange", function (event) {
      return _this.props.onPlaybackQualityChange(event);
    });

    _defineProperty(_assertThisInitialized(_this), "createPlayer", function () {
      // do not attempt to create a player server-side, it won't work
      if (typeof document === 'undefined') return; // create player

      var playerOpts = _objectSpread(_objectSpread({}, _this.props.opts), {}, {
        // preload the `videoId` video if one is already given
        videoId: _this.props.videoId
      });

      _this.internalPlayer = dist_default()(_this.container, playerOpts); // attach event handlers

      _this.internalPlayer.on('ready', _this.onPlayerReady);

      _this.internalPlayer.on('error', _this.onPlayerError);

      _this.internalPlayer.on('stateChange', _this.onPlayerStateChange);

      _this.internalPlayer.on('playbackRateChange', _this.onPlayerPlaybackRateChange);

      _this.internalPlayer.on('playbackQualityChange', _this.onPlayerPlaybackQualityChange);
    });

    _defineProperty(_assertThisInitialized(_this), "resetPlayer", function () {
      return _this.internalPlayer.destroy().then(_this.createPlayer);
    });

    _defineProperty(_assertThisInitialized(_this), "updatePlayer", function () {
      _this.internalPlayer.getIframe().then(function (iframe) {
        if (_this.props.id) iframe.setAttribute('id', _this.props.id);else iframe.removeAttribute('id');
        if (_this.props.className) iframe.setAttribute('class', _this.props.className);else iframe.removeAttribute('class');
        if (_this.props.opts && _this.props.opts.width) iframe.setAttribute('width', _this.props.opts.width);else iframe.removeAttribute('width');
        if (_this.props.opts && _this.props.opts.height) iframe.setAttribute('height', _this.props.opts.height);else iframe.removeAttribute('height');
        if (typeof _this.props.title === 'string') iframe.setAttribute('title', _this.props.title);else iframe.setAttribute('title', 'YouTube video player');
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getInternalPlayer", function () {
      return _this.internalPlayer;
    });

    _defineProperty(_assertThisInitialized(_this), "updateVideo", function () {
      if (typeof _this.props.videoId === 'undefined' || _this.props.videoId === null) {
        _this.internalPlayer.stopVideo();

        return;
      } // set queueing options


      var autoplay = false;
      var opts = {
        videoId: _this.props.videoId
      };

      if ('playerVars' in _this.props.opts) {
        autoplay = _this.props.opts.playerVars.autoplay === 1;

        if ('start' in _this.props.opts.playerVars) {
          opts.startSeconds = _this.props.opts.playerVars.start;
        }

        if ('end' in _this.props.opts.playerVars) {
          opts.endSeconds = _this.props.opts.playerVars.end;
        }
      } // if autoplay is enabled loadVideoById


      if (autoplay) {
        _this.internalPlayer.loadVideoById(opts);

        return;
      } // default behaviour just cues the video


      _this.internalPlayer.cueVideoById(opts);
    });

    _defineProperty(_assertThisInitialized(_this), "refContainer", function (container) {
      _this.container = container;
    });

    _this.container = null;
    _this.internalPlayer = null;
    return _this;
  }

  _createClass(YouTube, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.createPlayer();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (shouldUpdatePlayer(prevProps, this.props)) {
        this.updatePlayer();
      }

      if (shouldResetPlayer(prevProps, this.props)) {
        this.resetPlayer();
      }

      if (shouldUpdateVideo(prevProps, this.props)) {
        this.updateVideo();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      /**
       * Note: The `youtube-player` package that is used promisifies all YouTube
       * Player API calls, which introduces a delay of a tick before it actually
       * gets destroyed. Since React attempts to remove the element instantly
       * this method isn't quick enough to reset the container element.
       */
      this.internalPlayer.destroy();
    }
    /**
     * https://developers.google.com/youtube/iframe_api_reference#onReady
     *
     * @param {Object} event
     *   @param {Object} target - player object
     */

  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react.createElement("div", {
        className: this.props.containerClassName
      }, /*#__PURE__*/react.createElement("div", {
        id: this.props.id,
        className: this.props.className,
        ref: this.refContainer,
        loading: this.props.loading
      }));
    }
  }]);

  return YouTube;
}(react.Component);

_defineProperty(YouTube, "PlayerState", {
  UNSTARTED: -1,
  ENDED: 0,
  PLAYING: 1,
  PAUSED: 2,
  BUFFERING: 3,
  CUED: 5
});

YouTube.propTypes = {
  videoId: (prop_types_default()).string,
  // custom ID for player element
  id: (prop_types_default()).string,
  // custom class name for player element
  className: (prop_types_default()).string,
  // custom class name for player container element
  containerClassName: (prop_types_default()).string,
  // custom title for the iFrame, see https://www.w3.org/TR/WCAG20-TECHS/H64.html
  title: (prop_types_default()).string,
  // custom loading for player element
  loading: prop_types_default().oneOf(['lazy', 'eager', 'auto']),
  // https://developers.google.com/youtube/iframe_api_reference#Loading_a_Video_Player
  opts: prop_types_default().objectOf((prop_types_default()).any),
  // event subscriptions
  onReady: (prop_types_default()).func,
  onError: (prop_types_default()).func,
  onPlay: (prop_types_default()).func,
  onPause: (prop_types_default()).func,
  onEnd: (prop_types_default()).func,
  onStateChange: (prop_types_default()).func,
  onPlaybackRateChange: (prop_types_default()).func,
  onPlaybackQualityChange: (prop_types_default()).func
};
YouTube.defaultProps = {
  videoId: null,
  id: null,
  className: null,
  loading: null,
  opts: {},
  containerClassName: '',
  onReady: function onReady() {},
  onError: function onError() {},
  onPlay: function onPlay() {},
  onPause: function onPause() {},
  onEnd: function onEnd() {},
  onStateChange: function onStateChange() {},
  onPlaybackRateChange: function onPlaybackRateChange() {},
  onPlaybackQualityChange: function onPlaybackQualityChange() {},
  title: null
};
/* harmony default export */ const index_esm = (YouTube);

// EXTERNAL MODULE: ./node_modules/p4-css/lib/index.js
var lib = __webpack_require__(96595);
;// CONCATENATED MODULE: ./node_modules/react-embed/esm/blocks/youtube/index.js



var blockClass = (0,lib.rule)({
    w: '100%',
});
var iframeClass = (0,lib.rule)({
    d: 'block',
    maxW: '100%',
    w: '100%',
});
var Y = index_esm;
var YouTubeWrapper = function (_a) {
    var id = _a.id, renderWrap = _a.renderWrap;
    return renderWrap(react.createElement(Y, { videoId: id, containerClassName: blockClass, className: iframeClass }));
};
/* harmony default export */ const youtube = (YouTubeWrapper);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 24320:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(56627);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 76853:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(24320)();
}


/***/ }),

/***/ 56627:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ 33988:
/***/ ((module) => {

"use strict";


var Sister;

/**
* @link https://github.com/gajus/sister for the canonical source repository
* @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
*/
Sister = function () {
    var sister = {},
        events = {};

    /**
     * @name handler
     * @function
     * @param {Object} data Event data.
     */

    /**
     * @param {String} name Event name.
     * @param {handler} handler
     * @return {listener}
     */
    sister.on = function (name, handler) {
        var listener = {name: name, handler: handler};
        events[name] = events[name] || [];
        events[name].unshift(listener);
        return listener;
    };

    /**
     * @param {listener}
     */
    sister.off = function (listener) {
        var index = events[listener.name].indexOf(listener);

        if (index !== -1) {
            events[listener.name].splice(index, 1);
        }
    };

    /**
     * @param {String} name Event name.
     * @param {Object} data Event data.
     */
    sister.trigger = function (name, data) {
        var listeners = events[name],
            i;

        if (listeners) {
            i = listeners.length;
            while (i--) {
                listeners[i].handler(data);
            }
        }
    };

    return sister;
};

module.exports = Sister;


/***/ }),

/***/ 66006:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _PlayerStates = __webpack_require__(22275);

var _PlayerStates2 = _interopRequireDefault(_PlayerStates);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports["default"] = {
  pauseVideo: {
    acceptableStates: [_PlayerStates2.default.ENDED, _PlayerStates2.default.PAUSED],
    stateChangeRequired: false
  },
  playVideo: {
    acceptableStates: [_PlayerStates2.default.ENDED, _PlayerStates2.default.PLAYING],
    stateChangeRequired: false
  },
  seekTo: {
    acceptableStates: [_PlayerStates2.default.ENDED, _PlayerStates2.default.PLAYING, _PlayerStates2.default.PAUSED],
    stateChangeRequired: true,

    // TRICKY: `seekTo` may not cause a state change if no buffering is
    // required.
    timeout: 3000
  }
};
module.exports = exports['default'];

/***/ }),

/***/ 89125:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _debug = __webpack_require__(25373);

var _debug2 = _interopRequireDefault(_debug);

var _functionNames = __webpack_require__(28255);

var _functionNames2 = _interopRequireDefault(_functionNames);

var _eventNames = __webpack_require__(65279);

var _eventNames2 = _interopRequireDefault(_eventNames);

var _FunctionStateMap = __webpack_require__(66006);

var _FunctionStateMap2 = _interopRequireDefault(_FunctionStateMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable promise/prefer-await-to-then */

var debug = (0, _debug2.default)('youtube-player');

var YouTubePlayer = {};

/**
 * Construct an object that defines an event handler for all of the YouTube
 * player events. Proxy captured events through an event emitter.
 *
 * @todo Capture event parameters.
 * @see https://developers.google.com/youtube/iframe_api_reference#Events
 */
YouTubePlayer.proxyEvents = function (emitter) {
  var events = {};

  var _loop = function _loop(eventName) {
    var onEventName = 'on' + eventName.slice(0, 1).toUpperCase() + eventName.slice(1);

    events[onEventName] = function (event) {
      debug('event "%s"', onEventName, event);

      emitter.trigger(eventName, event);
    };
  };

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _eventNames2.default[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var eventName = _step.value;

      _loop(eventName);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return events;
};

/**
 * Delays player API method execution until player state is ready.
 *
 * @todo Proxy all of the methods using Object.keys.
 * @todo See TRICKY below.
 * @param playerAPIReady Promise that resolves when player is ready.
 * @param strictState A flag designating whether or not to wait for
 * an acceptable state when calling supported functions.
 * @returns {Object}
 */
YouTubePlayer.promisifyPlayer = function (playerAPIReady) {
  var strictState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var functions = {};

  var _loop2 = function _loop2(functionName) {
    if (strictState && _FunctionStateMap2.default[functionName]) {
      functions[functionName] = function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return playerAPIReady.then(function (player) {
          var stateInfo = _FunctionStateMap2.default[functionName];
          var playerState = player.getPlayerState();

          // eslint-disable-next-line no-warning-comments
          // TODO: Just spread the args into the function once Babel is fixed:
          // https://github.com/babel/babel/issues/4270
          //
          // eslint-disable-next-line prefer-spread
          var value = player[functionName].apply(player, args);

          // TRICKY: For functions like `seekTo`, a change in state must be
          // triggered given that the resulting state could match the initial
          // state.
          if (stateInfo.stateChangeRequired ||

          // eslint-disable-next-line no-extra-parens
          Array.isArray(stateInfo.acceptableStates) && stateInfo.acceptableStates.indexOf(playerState) === -1) {
            return new Promise(function (resolve) {
              var onPlayerStateChange = function onPlayerStateChange() {
                var playerStateAfterChange = player.getPlayerState();

                var timeout = void 0;

                if (typeof stateInfo.timeout === 'number') {
                  timeout = setTimeout(function () {
                    player.removeEventListener('onStateChange', onPlayerStateChange);

                    resolve();
                  }, stateInfo.timeout);
                }

                if (Array.isArray(stateInfo.acceptableStates) && stateInfo.acceptableStates.indexOf(playerStateAfterChange) !== -1) {
                  player.removeEventListener('onStateChange', onPlayerStateChange);

                  clearTimeout(timeout);

                  resolve();
                }
              };

              player.addEventListener('onStateChange', onPlayerStateChange);
            }).then(function () {
              return value;
            });
          }

          return value;
        });
      };
    } else {
      functions[functionName] = function () {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        return playerAPIReady.then(function (player) {
          // eslint-disable-next-line no-warning-comments
          // TODO: Just spread the args into the function once Babel is fixed:
          // https://github.com/babel/babel/issues/4270
          //
          // eslint-disable-next-line prefer-spread
          return player[functionName].apply(player, args);
        });
      };
    }
  };

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = _functionNames2.default[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var functionName = _step2.value;

      _loop2(functionName);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return functions;
};

exports["default"] = YouTubePlayer;
module.exports = exports['default'];

/***/ }),

/***/ 22275:
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = {
  BUFFERING: 3,
  ENDED: 0,
  PAUSED: 2,
  PLAYING: 1,
  UNSTARTED: -1,
  VIDEO_CUED: 5
};
module.exports = exports["default"];

/***/ }),

/***/ 65279:
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));


/**
 * @see https://developers.google.com/youtube/iframe_api_reference#Events
 * `volumeChange` is not officially supported but seems to work
 * it emits an object: `{volume: 82.6923076923077, muted: false}`
 */
exports["default"] = ['ready', 'stateChange', 'playbackQualityChange', 'playbackRateChange', 'error', 'apiChange', 'volumeChange'];
module.exports = exports['default'];

/***/ }),

/***/ 28255:
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));


/**
 * @see https://developers.google.com/youtube/iframe_api_reference#Functions
 */
exports["default"] = ['cueVideoById', 'loadVideoById', 'cueVideoByUrl', 'loadVideoByUrl', 'playVideo', 'pauseVideo', 'stopVideo', 'getVideoLoadedFraction', 'cuePlaylist', 'loadPlaylist', 'nextVideo', 'previousVideo', 'playVideoAt', 'setShuffle', 'setLoop', 'getPlaylist', 'getPlaylistIndex', 'setOption', 'mute', 'unMute', 'isMuted', 'setVolume', 'getVolume', 'seekTo', 'getPlayerState', 'getPlaybackRate', 'setPlaybackRate', 'getAvailablePlaybackRates', 'getPlaybackQuality', 'setPlaybackQuality', 'getAvailableQualityLevels', 'getCurrentTime', 'getDuration', 'removeEventListener', 'getVideoUrl', 'getVideoEmbedCode', 'getOptions', 'getOption', 'addEventListener', 'destroy', 'setSize', 'getIframe'];
module.exports = exports['default'];

/***/ }),

/***/ 11062:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _sister = __webpack_require__(33988);

var _sister2 = _interopRequireDefault(_sister);

var _loadYouTubeIframeApi = __webpack_require__(55900);

var _loadYouTubeIframeApi2 = _interopRequireDefault(_loadYouTubeIframeApi);

var _YouTubePlayer = __webpack_require__(89125);

var _YouTubePlayer2 = _interopRequireDefault(_YouTubePlayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @typedef YT.Player
 * @see https://developers.google.com/youtube/iframe_api_reference
 * */

/**
 * @see https://developers.google.com/youtube/iframe_api_reference#Loading_a_Video_Player
 */
var youtubeIframeAPI = void 0;

/**
 * A factory function used to produce an instance of YT.Player and queue function calls and proxy events of the resulting object.
 *
 * @param maybeElementId Either An existing YT.Player instance,
 * the DOM element or the id of the HTML element where the API will insert an <iframe>.
 * @param options See `options` (Ignored when using an existing YT.Player instance).
 * @param strictState A flag designating whether or not to wait for
 * an acceptable state when calling supported functions. Default: `false`.
 * See `FunctionStateMap.js` for supported functions and acceptable states.
 */

exports["default"] = function (maybeElementId) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var strictState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var emitter = (0, _sister2.default)();

  if (!youtubeIframeAPI) {
    youtubeIframeAPI = (0, _loadYouTubeIframeApi2.default)(emitter);
  }

  if (options.events) {
    throw new Error('Event handlers cannot be overwritten.');
  }

  if (typeof maybeElementId === 'string' && !document.getElementById(maybeElementId)) {
    throw new Error('Element "' + maybeElementId + '" does not exist.');
  }

  options.events = _YouTubePlayer2.default.proxyEvents(emitter);

  var playerAPIReady = new Promise(function (resolve) {
    if ((typeof maybeElementId === 'undefined' ? 'undefined' : _typeof(maybeElementId)) === 'object' && maybeElementId.playVideo instanceof Function) {
      var player = maybeElementId;

      resolve(player);
    } else {
      // asume maybeElementId can be rendered inside
      // eslint-disable-next-line promise/catch-or-return
      youtubeIframeAPI.then(function (YT) {
        // eslint-disable-line promise/prefer-await-to-then
        var player = new YT.Player(maybeElementId, options);

        emitter.on('ready', function () {
          resolve(player);
        });

        return null;
      });
    }
  });

  var playerApi = _YouTubePlayer2.default.promisifyPlayer(playerAPIReady, strictState);

  playerApi.on = emitter.on;
  playerApi.off = emitter.off;

  return playerApi;
};

module.exports = exports['default'];

/***/ }),

/***/ 55900:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _loadScript = __webpack_require__(49090);

var _loadScript2 = _interopRequireDefault(_loadScript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports["default"] = function (emitter) {
  /**
   * A promise that is resolved when window.onYouTubeIframeAPIReady is called.
   * The promise is resolved with a reference to window.YT object.
   */
  var iframeAPIReady = new Promise(function (resolve) {
    if (window.YT && window.YT.Player && window.YT.Player instanceof Function) {
      resolve(window.YT);

      return;
    } else {
      var protocol = window.location.protocol === 'http:' ? 'http:' : 'https:';

      (0, _loadScript2.default)(protocol + '//www.youtube.com/iframe_api', function (error) {
        if (error) {
          emitter.trigger('error', error);
        }
      });
    }

    var previous = window.onYouTubeIframeAPIReady;

    // The API will call this function when page has finished downloading
    // the JavaScript for the player API.
    window.onYouTubeIframeAPIReady = function () {
      if (previous) {
        previous();
      }

      resolve(window.YT);
    };
  });

  return iframeAPIReady;
};

module.exports = exports['default'];

/***/ }),

/***/ 9215:
/***/ ((module, exports, __webpack_require__) => {

/* provided dependency */ var process = __webpack_require__(34155);
/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(55046);
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  'lightseagreen',
  'forestgreen',
  'goldenrod',
  'dodgerblue',
  'darkorchid',
  'crimson'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}


/***/ }),

/***/ 55046:
/***/ ((module, exports, __webpack_require__) => {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(14680);

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  return debug;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ }),

/***/ 25373:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var process = __webpack_require__(34155);
/**
 * Detect Electron renderer process, which is node, but we should
 * treat as a browser.
 */

if (typeof process !== 'undefined' && process.type === 'renderer') {
  module.exports = __webpack_require__(9215);
} else {
  module.exports = __webpack_require__(60633);
}


/***/ }),

/***/ 60633:
/***/ ((module, exports, __webpack_require__) => {

/* provided dependency */ var process = __webpack_require__(34155);
/**
 * Module dependencies.
 */

var tty = __webpack_require__(76224);
var util = __webpack_require__(73837);

/**
 * This is the Node.js implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(55046);
exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;

/**
 * Colors.
 */

exports.colors = [6, 2, 3, 4, 5, 1];

/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */

exports.inspectOpts = Object.keys(process.env).filter(function (key) {
  return /^debug_/i.test(key);
}).reduce(function (obj, key) {
  // camel-case
  var prop = key
    .substring(6)
    .toLowerCase()
    .replace(/_([a-z])/g, function (_, k) { return k.toUpperCase() });

  // coerce string value into JS value
  var val = process.env[key];
  if (/^(yes|on|true|enabled)$/i.test(val)) val = true;
  else if (/^(no|off|false|disabled)$/i.test(val)) val = false;
  else if (val === 'null') val = null;
  else val = Number(val);

  obj[prop] = val;
  return obj;
}, {});

/**
 * The file descriptor to write the `debug()` calls to.
 * Set the `DEBUG_FD` env variable to override with another value. i.e.:
 *
 *   $ DEBUG_FD=3 node script.js 3>debug.log
 */

var fd = parseInt(process.env.DEBUG_FD, 10) || 2;

if (1 !== fd && 2 !== fd) {
  util.deprecate(function(){}, 'except for stderr(2) and stdout(1), any other usage of DEBUG_FD is deprecated. Override debug.log if you want to use a different log function (https://git.io/debug_fd)')()
}

var stream = 1 === fd ? process.stdout :
             2 === fd ? process.stderr :
             createWritableStdioStream(fd);

/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */

function useColors() {
  return 'colors' in exports.inspectOpts
    ? Boolean(exports.inspectOpts.colors)
    : tty.isatty(fd);
}

/**
 * Map %o to `util.inspect()`, all on a single line.
 */

exports.formatters.o = function(v) {
  this.inspectOpts.colors = this.useColors;
  return util.inspect(v, this.inspectOpts)
    .split('\n').map(function(str) {
      return str.trim()
    }).join(' ');
};

/**
 * Map %o to `util.inspect()`, allowing multiple lines if needed.
 */

exports.formatters.O = function(v) {
  this.inspectOpts.colors = this.useColors;
  return util.inspect(v, this.inspectOpts);
};

/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var name = this.namespace;
  var useColors = this.useColors;

  if (useColors) {
    var c = this.color;
    var prefix = '  \u001b[3' + c + ';1m' + name + ' ' + '\u001b[0m';

    args[0] = prefix + args[0].split('\n').join('\n' + prefix);
    args.push('\u001b[3' + c + 'm+' + exports.humanize(this.diff) + '\u001b[0m');
  } else {
    args[0] = new Date().toUTCString()
      + ' ' + name + ' ' + args[0];
  }
}

/**
 * Invokes `util.format()` with the specified arguments and writes to `stream`.
 */

function log() {
  return stream.write(util.format.apply(util, arguments) + '\n');
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  if (null == namespaces) {
    // If you set a process.env field to null or undefined, it gets cast to the
    // string 'null' or 'undefined'. Just delete instead.
    delete process.env.DEBUG;
  } else {
    process.env.DEBUG = namespaces;
  }
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  return process.env.DEBUG;
}

/**
 * Copied from `node/src/node.js`.
 *
 * XXX: It's lame that node doesn't expose this API out-of-the-box. It also
 * relies on the undocumented `tty_wrap.guessHandleType()` which is also lame.
 */

function createWritableStdioStream (fd) {
  var stream;
  var tty_wrap = process.binding('tty_wrap');

  // Note stream._type is used for test-module-load-list.js

  switch (tty_wrap.guessHandleType(fd)) {
    case 'TTY':
      stream = new tty.WriteStream(fd);
      stream._type = 'tty';

      // Hack to have stream not keep the event loop alive.
      // See https://github.com/joyent/node/issues/1726
      if (stream._handle && stream._handle.unref) {
        stream._handle.unref();
      }
      break;

    case 'FILE':
      var fs = __webpack_require__(57147);
      stream = new fs.SyncWriteStream(fd, { autoClose: false });
      stream._type = 'fs';
      break;

    case 'PIPE':
    case 'TCP':
      var net = __webpack_require__(41808);
      stream = new net.Socket({
        fd: fd,
        readable: false,
        writable: true
      });

      // FIXME Should probably have an option in net.Socket to create a
      // stream from an existing fd which is writable only. But for now
      // we'll just add this hack and set the `readable` member to false.
      // Test: ./node test/fixtures/echo.js < /etc/passwd
      stream.readable = false;
      stream.read = null;
      stream._type = 'pipe';

      // FIXME Hack to have stream not keep the event loop alive.
      // See https://github.com/joyent/node/issues/1726
      if (stream._handle && stream._handle.unref) {
        stream._handle.unref();
      }
      break;

    default:
      // Probably an error on in uv_guess_handle()
      throw new Error('Implement me. Unknown stream file type!');
  }

  // For supporting legacy API we put the FD here.
  stream.fd = fd;

  stream._isStdio = true;

  return stream;
}

/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */

function init (debug) {
  debug.inspectOpts = {};

  var keys = Object.keys(exports.inspectOpts);
  for (var i = 0; i < keys.length; i++) {
    debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
  }
}

/**
 * Enable namespaces listed in `process.env.DEBUG` initially.
 */

exports.enable(load());


/***/ }),

/***/ 14680:
/***/ ((module) => {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}


/***/ })

};
;