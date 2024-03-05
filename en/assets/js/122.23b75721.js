"use strict";
exports.id = 122;
exports.ids = [122];
exports.modules = {

/***/ 1811:
/***/ ((module) => {



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

/***/ 81311:
/***/ ((__unused_webpack_module, exports) => {



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

/***/ 2643:
/***/ ((__unused_webpack_module, exports) => {



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

/***/ 73341:
/***/ ((__unused_webpack_module, exports) => {



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

/***/ 96106:
/***/ ((__unused_webpack_module, exports) => {



var pos =    'position',
    t =      'top',
    r =      'right',
    b =      'bottom',
    l =      'left',
    w =      'width',
    h =      'height',
    ov =     'overflow',
    col =    'color',
    con =    'content',
    ovx =    ov + '-x',
    ovy =    ov + '-y',
    fl =     'flex',
    fld =    fl + '-direction',
    flg =    fl + '-grow',
    fls =    fl + '-shrink',
    flb =    fl + '-basis',
    flw =    fl + '-wrap',
    align =  'align',
    ai =     align + '-items',
    ac =     align + '-' + con,
    as =     align + '-self',
    mr  =    'margin',
    mrt =    mr + '-' + t,
    mrr =    mr + '-' + r,
    mrb =    mr + '-' + b,
    mrl =    mr + '-' + l,
    pd  =    'padding',
    pdt =    pd + '-' + t,
    pdr =    pd + '-' + r,
    pdb =    pd + '-' + b,
    pdl =    pd + '-' + l,
    bd =     'border',
    bdt =    bd + '-' + t,
    bdr =    bd + '-' + r,
    bdb =    bd + '-' + b,
    bdl =    bd + '-' + l,
    bdrad =  bd + '-radius',
    bg =     'background',
    bgc =    bg + '-' + col,
    bgi =    bg + '-image',
    bgr =    bg + '-repeat',
    bga =    bg + '-attachment',
    bgp =    bg + '-position',
    bgs =    bg + '-size',
    bgo =    bg + '-origin',
    bgcl =   bg + '-clip',
    style =  'style',
    f =      'font',
    fz =     f + '-size',
    fs =     f + '-' + style,
    fw =     f + '-weight',
    ff =     f + '-family',
    text =   'text',
    ta =     text + '-align',
    td =     text + '-decoration',
    tt =     text + '-transform',
    ts =     text + '-shadow',
    tov =    text + '-overflow',
    st =     'stroke',
    stw =    st + '-width',
    stl =    st + '-linecap',
    an =     'animation',
    ann =    an + '-name'
    ;

var atoms = exports.atoms = {
    // Positioning
    pos,
    t,
    r,
    b,
    l,
    z:      'z-index',

    // Layout (box model)
    d:      'display',
    vis:    'visibility',
    w,
    h,
    minW:   'min-' + w,
    maxW:   'max-' + w,
    minH:   'min-' + h,
    maxH:   'max-' + h,
    ov,
    ovx,
    ovy,
    bxz:    'box-sizing',
    cl:     'clip',
    clp:    'clip-path',
    clr:    'clear',
    tbl:    'table-layout',

    // Flexbox
    fl,
    fld,
    flg,
    fls,
    flb,
    flw,
    jc:     'justify-' + con,
    ai,
    ac,
    as,

    // Margins
    mr,
    mrt,
    mrr,
    mrb,
    mrl,
    mar:    mr,
    mart:   mrt,
    marr:   mrr,
    marb:   mrb,
    marl:   mrl,

    // Paddings
    pd,
    pdt,
    pdr,
    pdb,
    pdl,
    pad:    pd,
    padt:   pdt,
    padr:   pdr,
    padb:   pdb,
    padl:   pdl,

    // Borders
    bd,
    bdt,
    bdr,
    bdb,
    bdl,
    bdrad,
    bdc:    bd + '-' + col,
    bds:    bd + '-' + style,
    out:    'outline',
    bxsh:   'box-shadow',

    // Colors
    col,
    op:     'opacity',
    bg,
    bgc,
    bgi,
    bgr,
    bga,
    bgp,
    bgs,
    bgo,
    bgcl,
    bdfl:   'backdrop-filter',
    bfvis:  'backface-visibility',

    // Text
    f,
    fz,
    fs,
    fw,
    ff,
    ta,
    td,
    tt,
    ts,
    tov,
    ww:     'word-wrap',
    lts:    'letter-spacing',
    ws:     'white-space',
    lh:     'line-' + h,
    va:     'vertical-' + align,

    // Pointer
    cur:    'cursor',
    pe:     'pointer-events',
    us:     'user-select',

    // Animations
    an,
    ann,
    and:    an + '-duration',
    anf:    an + '-fill-mode',
    anit:   an + '-iteration-count',
    anp:    an + '-play-state',
    ant:    an + '-timing-function',
    trs:    'transition',
    tr:     'transform',

    // SVG
    st,
    stw,
    stl,

    // Other
    ls:     'list-' + style,
    con,
};

exports.addon = function (renderer) {
    var originalDecl = renderer.decl;
    renderer.decl = function (key, value) {
        return originalDecl(atoms[key] || key, value);
    };
};


/***/ }),

/***/ 25862:
/***/ ((__unused_webpack_module, exports) => {



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

/***/ 36153:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var transformComponentStatic = __webpack_require__(32596);
var transformComponentDynamic = __webpack_require__(53405);

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

/***/ 26774:
/***/ ((__unused_webpack_module, exports) => {



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

/***/ 76001:
/***/ ((__unused_webpack_module, exports) => {



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

/***/ 69860:
/***/ ((__unused_webpack_module, exports) => {



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

/***/ 54073:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var addonCache = (__webpack_require__(25862).addon);

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

/***/ 25617:
/***/ ((__unused_webpack_module, exports) => {



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

/***/ 9662:
/***/ ((__unused_webpack_module, exports) => {



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

/***/ 8313:
/***/ ((__unused_webpack_module, exports) => {



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

/***/ 53739:
/***/ ((__unused_webpack_module, exports) => {



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

/***/ 41488:
/***/ ((__unused_webpack_module, exports) => {



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

/***/ 2119:
/***/ ((__unused_webpack_module, exports) => {



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

/***/ 97673:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var stringify = __webpack_require__(1811);

exports.addon = function (renderer) {
    renderer.stringify = stringify;
};


/***/ }),

/***/ 12073:
/***/ ((__unused_webpack_module, exports) => {



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

/***/ 53405:
/***/ ((module) => {



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

/***/ 32596:
/***/ ((module) => {



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

/***/ 52365:
/***/ ((__unused_webpack_module, exports) => {



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

/***/ 43671:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(31635);
const react_1 = __webpack_require__(96540);
const nano_css_1 = __webpack_require__(52365);
const cache_1 = __webpack_require__(25862);
const stable_1 = __webpack_require__(97673);
const nesting_1 = __webpack_require__(9662);
const atoms_1 = __webpack_require__(96106);
const rule_1 = __webpack_require__(41488);
const drule_1 = __webpack_require__(26774);
const sheet_1 = __webpack_require__(2119);
const dsheet_1 = __webpack_require__(76001);
const useStyles_1 = __webpack_require__(12073);
const jsx_1 = __webpack_require__(54073);
const decorator_1 = __webpack_require__(36153);
const keyframes_1 = __webpack_require__(25617);
const fadeIn_1 = __webpack_require__(81311);
const fadeInDown_1 = __webpack_require__(2643);
const fadeInScale_1 = __webpack_require__(73341);
const Normalize_1 = __webpack_require__(53739);
const reset_font_1 = __webpack_require__(8313);
const googleFont_1 = __webpack_require__(69860);
tslib_1.__exportStar(__webpack_require__(52365), exports);
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

/***/ 87122:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_simple_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17265);
/* harmony import */ var react_simple_player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_simple_player__WEBPACK_IMPORTED_MODULE_1__);


var SimplePlayerWrapper = function (_a) {
    var url = _a.url, isDark = _a.isDark, width = _a.width, renderWrap = _a.renderWrap;
    return renderWrap(react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_simple_player__WEBPACK_IMPORTED_MODULE_1__.Player, { src: url, height: 50, hideVolume: width < 500, grey: isDark ? [20, 23, 26] : [240, 243, 246] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SimplePlayerWrapper);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 49246:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var createColorManager = function (grey, accent) {
    var r = grey[0], g = grey[1], b = grey[2];
    var avg = Math.round((r + g + b) / 3);
    var isLight = avg > 127;
    var contrast = isLight ? [0, 0, 0] : [255, 255, 255];
    return {
        isLight: isLight,
        avg: avg,
        grey: grey,
        accent: accent,
        shade: function (value) {
            var base = isLight ? '0' : '255';
            return "rgba(" + base + "," + base + "," + base + "," + value + ")";
        },
        shift: function (value, opacity) {
            if (opacity === void 0) { opacity = 1; }
            var r1 = Math.max(0, Math.min(255, r + (isLight ? value : -value)));
            var g1 = Math.max(0, Math.min(255, g + (isLight ? value : -value)));
            var b1 = Math.max(0, Math.min(255, b + (isLight ? value : -value)));
            return opacity === 1 ? "rgba(" + r1 + "," + g1 + "," + b1 + "," + opacity + ")" : "rgb(" + r1 + "," + g1 + "," + b1 + ")";
        },
        contrast: function (opacity) {
            if (opacity === void 0) { opacity = 1; }
            return "rgba(" + contrast[0] + "," + contrast[1] + "," + contrast[2] + "," + opacity + ")";
        },
    };
};
exports["default"] = createColorManager;


/***/ }),

/***/ 79178:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var formatTime = function (seconds) {
    var round = Math.round(seconds);
    var s = round % 60;
    var minutes = Math.round((round - s) / 60);
    var m = minutes % 60;
    var h = Math.round((minutes - m) / 60);
    return "" + (h ? h + ':' : '') + (m > 9 ? m : '0' + m) + ":" + (s > 9 ? s : '0' + s);
};
exports["default"] = formatTime;


/***/ }),

/***/ 69614:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(31635);
var React = tslib_1.__importStar(__webpack_require__(96540));
var p4_css_1 = __webpack_require__(43671);
var useAudio_1 = tslib_1.__importDefault(__webpack_require__(56595));
var useSlider_1 = tslib_1.__importDefault(__webpack_require__(22772));
var Play_1 = tslib_1.__importDefault(__webpack_require__(97355));
var Pause_1 = tslib_1.__importDefault(__webpack_require__(85353));
var Volume_1 = tslib_1.__importDefault(__webpack_require__(52255));
var Muted_1 = tslib_1.__importDefault(__webpack_require__(16388));
var Rail_1 = __webpack_require__(80631);
var RailWrap_1 = __webpack_require__(31871);
var Volume_2 = __webpack_require__(14781);
var createColorManager_1 = tslib_1.__importDefault(__webpack_require__(49246));
var formatTime_1 = tslib_1.__importDefault(__webpack_require__(79178));
var useRef = React.useRef, useEffect = React.useEffect, useState = React.useState, useMemo = React.useMemo;
var ff = '"Open Sans",Roboto,sans-serif';
exports.defaultHeight = 64;
var blockClass = p4_css_1.rule({
    d: 'flex',
    alignItems: 'center',
    bg: '#eee',
    h: exports.defaultHeight + 'px',
    bdrad: '4px',
    w: '100%',
});
var playButtonClass = p4_css_1.rule({
    d: 'flex',
    alignItems: 'center',
    h: '100%',
    pad: '0 16px',
    cur: 'pointer',
    mar: 0,
    bd: 0,
    bg: 'transparent',
    bdrad: '4px',
    '& svg': {
        w: '18px',
        h: '18px',
    },
});
var seekAreaClass = p4_css_1.rule({
    pos: 'relative',
    d: 'flex',
    flex: '1 1 100%',
    alignItems: 'center',
    h: '100%',
    cur: 'pointer',
    cursor: 'ew-resize',
});
var tooltipClass = p4_css_1.rule({
    pos: 'absolute',
    op: 0.9,
});
var tooltipInnerClass = p4_css_1.rule({
    d: 'inline-block',
    mar: '0 0 0 -50%',
    pad: '4px 8px',
    fz: '12px',
    ff: ff,
    bdrad: '3px',
    whiteSpace: 'nowrap',
});
var timeClass = p4_css_1.rule({
    whiteSpace: 'nowrap',
    userSelect: 'none',
    pad: '0 0 0 16px',
    ff: ff,
    fz: '12px',
});
var volumeButtonClass = p4_css_1.rule({
    d: 'flex',
    alignItems: 'center',
    h: '100%',
    pad: '0 16px',
    cur: 'pointer',
    mar: 0,
    bd: 0,
    bg: 'transparent',
    bdrad: '4px',
    '& svg': {
        w: '18px',
        h: '18px',
    },
});
exports.Player = function (_a) {
    var src = _a.src, _b = _a.height, height = _b === void 0 ? exports.defaultHeight : _b, _c = _a.grey, grey = _c === void 0 ? [246, 248, 250] : _c, _d = _a.accent, accent = _d === void 0 ? [255, 0, 0] : _d, autoPlay = _a.autoPlay, hideVolume = _a.hideVolume, controlsRef = _a.controls, stateRef = _a.state, audioRef = _a.audio, onState = _a.onState;
    var color = useMemo(function () { return createColorManager_1.default(grey, accent); }, tslib_1.__spreadArrays(grey, accent));
    var _e = useState(false), hovered = _e[0], setHovered = _e[1];
    var _f = useAudio_1.default({
        src: src,
        autoPlay: !!autoPlay,
    }), audio = _f[0], state = _f[1], controls = _f[2], ref = _f[3];
    var _g = React.useState(false), seekHover = _g[0], setSeekHover = _g[1];
    var buttonHoverClass = p4_css_1.nano.cache({
        svg: {
            fill: color.contrast(0.8),
        },
        '&:hover': {
            bg: color.contrast(0.02),
            svg: {
                fill: color.contrast(1),
            },
        },
        '&:active': {
            bg: color.contrast(0.04),
        },
    });
    var latestState = useRef(state);
    latestState.current = state;
    var latestControls = useRef(controls);
    latestControls.current = controls;
    var seekAreaRef = useRef(null);
    var seek = useSlider_1.default(seekAreaRef, {
        onScrubStop: function (value) {
            if (!latestState.current.duration)
                return;
            latestControls.current.seek(Math.round(latestState.current.duration * value));
        },
    });
    if (stateRef)
        stateRef.current = state;
    if (controlsRef)
        controlsRef.current = controls;
    if (audioRef)
        audioRef.current = ref.current;
    useEffect(function () {
        if (onState)
            onState(state);
    }, [state]);
    var style = {
        background: hovered ? color.shift(-6) : color.shift(0),
    };
    var playIconStyle = {
        fill: color.contrast(0.85),
    };
    if (height !== exports.defaultHeight) {
        style.height = height;
    }
    var mainButton = (React.createElement("button", { className: playButtonClass + buttonHoverClass, onClick: function () {
            if (state.paused)
                controls.play();
            else
                controls.pause();
        } }, state.paused ? React.createElement(Play_1.default, { style: playIconStyle }) : React.createElement(Pause_1.default, null)));
    var seekArea = (React.createElement("span", { ref: seekAreaRef, className: seekAreaClass, onMouseEnter: function () { return setSeekHover(true); }, onMouseLeave: function () { return setSeekHover(false); } },
        React.createElement(RailWrap_1.RailWrap, null,
            React.createElement(Rail_1.Rail, { value: 1, color: seekHover ? color.contrast(0.12) : color.contrast(0.08) }),
            !!state.duration &&
                !!state.buffered &&
                state.buffered.map(function (_a) {
                    var start = _a.start, end = _a.end;
                    return (React.createElement(Rail_1.Rail, { value: (end - start) / state.duration, skip: start / state.duration, color: color.contrast(0.08) }));
                }),
            !!state.duration && (React.createElement(Rail_1.Rail, { value: (state.time || 0) / state.duration, color: state.paused
                    ? color.shade(0.4)
                    : seek.isSliding
                        ? "rgba(" + accent[0] + "," + accent[1] + "," + accent[2] + ",.5)"
                        : "rgb(" + accent[0] + "," + accent[1] + "," + accent[2] + ")" })),
            !!seek.isSliding && React.createElement(Rail_1.Rail, { value: seek.value, color: "rgba(" + accent[0] + "," + accent[1] + "," + accent[2] + ",.6)" })),
        !!state.duration && seek.isSliding && (React.createElement("span", { className: tooltipClass, style: {
                top: -30 + height / 2 + 'px',
                left: seek.isSliding ? 100 * seek.value + "%" : (100 * state.time) / state.duration + "%",
            } },
            React.createElement("span", { className: tooltipInnerClass, style: { background: '#000', color: '#fff' } }, formatTime_1.default(seek.value * state.duration))))));
    var volumeButton = (React.createElement("button", { className: volumeButtonClass + buttonHoverClass, onClick: function () {
            if (state.muted)
                controls.unmute();
            else
                controls.mute();
        } }, state.muted || !state.volume ? (React.createElement(Muted_1.default, { style: { fill: color.contrast(0.85) } })) : (React.createElement(Volume_1.default, { style: { fill: color.contrast(0.85) } }))));
    return (React.createElement("span", { className: blockClass, style: style, onMouseEnter: function () { return setHovered(true); }, onMouseLeave: function () { return setHovered(false); } },
        audio,
        mainButton,
        seekArea,
        !!state.duration && (React.createElement("span", { className: timeClass, style: { color: color.contrast(0.85) } }, formatTime_1.default(state.time) + ' / ' + formatTime_1.default(state.duration))),
        volumeButton,
        !hideVolume && (React.createElement(Volume_2.Volume, { value: state.volume || 0, onChange: function (value) { return controls.volume(value); }, bg: color.contrast(0.06), rail: color.contrast(0.12), railHover: color.contrast(0.18) }))));
};


/***/ }),

/***/ 80631:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(31635);
var React = tslib_1.__importStar(__webpack_require__(96540));
var p4_css_1 = __webpack_require__(43671);
var blockClass = p4_css_1.rule({
    d: 'inline-block',
    pos: 'absolute',
    h: '100%',
    minH: '5px',
});
exports.Rail = function (_a) {
    var _b = _a.color, color = _b === void 0 ? 'red' : _b, value = _a.value, skip = _a.skip;
    var style = {
        background: color,
        width: value * 100 + "%",
    };
    if (skip) {
        style.marginLeft = skip + "%";
    }
    return React.createElement("span", { className: blockClass, style: style });
};


/***/ }),

/***/ 31871:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(31635);
var React = tslib_1.__importStar(__webpack_require__(96540));
var p4_css_1 = __webpack_require__(43671);
exports.railHeight = 8;
var railClass = p4_css_1.rule({
    d: 'flex',
    w: '100%',
    h: exports.railHeight + 'px',
    pos: 'relative',
    bdrad: '2px',
    ov: 'hidden',
});
exports.RailWrap = function (_a) {
    var children = _a.children;
    return React.createElement("span", { className: railClass }, children);
};


/***/ }),

/***/ 14781:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(31635);
var React = tslib_1.__importStar(__webpack_require__(96540));
var p4_css_1 = __webpack_require__(43671);
var useSlider_1 = tslib_1.__importDefault(__webpack_require__(22772));
var RailWrap_1 = __webpack_require__(31871);
var Rail_1 = __webpack_require__(80631);
var useRef = React.useRef;
var volumeSliderClass = p4_css_1.rule({
    d: 'flex',
    flex: '0 0 100px',
    w: '100px',
    h: '100%',
    alignItems: 'center',
    cur: 'pointer',
    marr: '16px',
    cursor: 'ew-resize',
});
exports.Volume = function (_a) {
    var value = _a.value, bg = _a.bg, rail = _a.rail, railHover = _a.railHover, onChange = _a.onChange;
    var volumeRef = useRef(null);
    var _b = React.useState(false), hover = _b[0], setHover = _b[1];
    useSlider_1.default(volumeRef, {
        onScrub: onChange,
    });
    return (React.createElement("span", { ref: volumeRef, className: volumeSliderClass, onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); } },
        React.createElement(RailWrap_1.RailWrap, null,
            React.createElement(Rail_1.Rail, { value: 1, color: bg }),
            !!value && React.createElement(Rail_1.Rail, { value: value, color: hover ? railHover : rail }))));
};


/***/ }),

/***/ 16388:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(31635);
var React = tslib_1.__importStar(__webpack_require__(96540));
var Muted = function (props) {
    return (React.createElement("svg", tslib_1.__assign({}, props, { viewBox: "0 0 18 18" }),
        React.createElement("polygon", { points: "12.4 12.5 14.5 10.4 16.6 12.5 18 11.1 15.9 9 18 6.9 16.6 5.5 14.5 7.6 12.4 5.5 11 6.9 13.1 9 11 11.1" }),
        React.createElement("path", { d: "M3.78571429,6.00820648 L0.714285714,6.00820648 C0.285714286,6.00820648 0,6.30901277 0,6.76022222 L0,11.2723167 C0,11.7235261 0.285714286,12.0243324 0.714285714,12.0243324 L3.78571429,12.0243324 L7.85714286,15.8819922 C8.35714286,16.1827985 9,15.8819922 9,15.2803796 L9,2.75215925 C9,2.15054666 8.35714286,1.77453879 7.85714286,2.15054666 L3.78571429,6.00820648 Z" })));
};
exports["default"] = Muted;


/***/ }),

/***/ 85353:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(31635);
var React = tslib_1.__importStar(__webpack_require__(96540));
var Pause = function (props) {
    return (React.createElement("svg", tslib_1.__assign({}, props, { viewBox: "0 0 18 18" }),
        React.createElement("path", { d: "M6,1 L3,1 C2.4,1 2,1.4 2,2 L2,16 C2,16.6 2.4,17 3,17 L6,17 C6.6,17 7,16.6 7,16 L7,2 C7,1.4 6.6,1 6,1 L6,1 Z" }),
        React.createElement("path", { d: "M12,1 C11.4,1 11,1.4 11,2 L11,16 C11,16.6 11.4,17 12,17 L15,17 C15.6,17 16,16.6 16,16 L16,2 C16,1.4 15.6,1 15,1 L12,1 Z" })));
};
exports["default"] = Pause;


/***/ }),

/***/ 97355:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(31635);
var React = tslib_1.__importStar(__webpack_require__(96540));
var Play = function (props) {
    return (React.createElement("svg", tslib_1.__assign({}, props, { viewBox: "0 0 18 18" }),
        React.createElement("path", { d: "M15.5615866,8.10002147 L3.87056367,0.225209313 C3.05219207,-0.33727727 2,0.225209313 2,1.12518784 L2,16.8748122 C2,17.7747907 3.05219207,18.3372773 3.87056367,17.7747907 L15.5615866,9.89997853 C16.1461378,9.44998927 16.1461378,8.55001073 15.5615866,8.10002147 L15.5615866,8.10002147 Z" })));
};
exports["default"] = Play;


/***/ }),

/***/ 52255:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(31635);
var React = tslib_1.__importStar(__webpack_require__(96540));
var Volume = function (props) {
    return (React.createElement("svg", tslib_1.__assign({}, props, { viewBox: "0 0 18 18" }),
        React.createElement("path", { d: "M15.5999996,3.3 C15.1999996,2.9 14.5999996,2.9 14.1999996,3.3 C13.7999996,3.7 13.7999996,4.3 14.1999996,4.7 C15.3999996,5.9 15.9999996,7.4 15.9999996,9 C15.9999996,10.6 15.3999996,12.1 14.1999996,13.3 C13.7999996,13.7 13.7999996,14.3 14.1999996,14.7 C14.3999996,14.9 14.6999996,15 14.8999996,15 C15.1999996,15 15.3999996,14.9 15.5999996,14.7 C17.0999996,13.2 17.9999996,11.2 17.9999996,9 C17.9999996,6.8 17.0999996,4.8 15.5999996,3.3 L15.5999996,3.3 Z" }),
        React.createElement("path", { d: "M11.2819745,5.28197449 C10.9060085,5.65794047 10.9060085,6.22188944 11.2819745,6.59785542 C12.0171538,7.33303477 12.2772954,8.05605449 12.2772954,9.00000021 C12.2772954,9.93588462 11.851678,10.9172014 11.2819745,11.4869049 C10.9060085,11.8628709 10.9060085,12.4268199 11.2819745,12.8027859 C11.4271642,12.9479755 11.9176724,13.0649528 12.2998149,12.9592565 C12.4124479,12.9281035 12.5156669,12.8776063 12.5978555,12.8027859 C13.773371,11.732654 14.1311161,10.1597914 14.1312523,9.00000021 C14.1312723,8.8299555 14.1286311,8.66015647 14.119665,8.4897429 C14.0674781,7.49784946 13.8010171,6.48513613 12.5978554,5.28197449 C12.2218894,4.9060085 11.6579405,4.9060085 11.2819745,5.28197449 Z" }),
        React.createElement("path", { d: "M3.78571429,6.00820648 L0.714285714,6.00820648 C0.285714286,6.00820648 0,6.30901277 0,6.76022222 L0,11.2723167 C0,11.7235261 0.285714286,12.0243324 0.714285714,12.0243324 L3.78571429,12.0243324 L7.85714286,15.8819922 C8.35714286,16.1827985 9,15.8819922 9,15.2803796 L9,2.75215925 C9,2.15054666 8.35714286,1.77453879 7.85714286,2.15054666 L3.78571429,6.00820648 Z" })));
};
exports["default"] = Volume;


/***/ }),

/***/ 17265:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(31635);
tslib_1.__exportStar(__webpack_require__(69614), exports);


/***/ }),

/***/ 12015:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(31635);
var React = tslib_1.__importStar(__webpack_require__(96540));
var react_1 = __webpack_require__(96540);
var useSetState_1 = tslib_1.__importDefault(__webpack_require__(72524));
var parseTimeRanges_1 = tslib_1.__importDefault(__webpack_require__(18639));
function createHTMLMediaHook(tag) {
    return function (elOrProps) {
        var element;
        var props;
        if (React.isValidElement(elOrProps)) {
            element = elOrProps;
            props = element.props;
        }
        else {
            props = elOrProps;
        }
        var _a = useSetState_1.default({
            buffered: [],
            time: 0,
            duration: 0,
            paused: true,
            muted: false,
            volume: 1,
            playing: false,
        }), state = _a[0], setState = _a[1];
        var ref = react_1.useRef(null);
        var wrapEvent = function (userEvent, proxyEvent) {
            return function (event) {
                try {
                    proxyEvent && proxyEvent(event);
                }
                finally {
                    userEvent && userEvent(event);
                }
            };
        };
        var onPlay = function () { return setState({ paused: false }); };
        var onPlaying = function () { return setState({ playing: true }); };
        var onWaiting = function () { return setState({ playing: false }); };
        var onPause = function () { return setState({ paused: true, playing: false }); };
        var onVolumeChange = function () {
            var el = ref.current;
            if (!el) {
                return;
            }
            setState({
                muted: el.muted,
                volume: el.volume,
            });
        };
        var onDurationChange = function () {
            var el = ref.current;
            if (!el) {
                return;
            }
            var duration = el.duration, buffered = el.buffered;
            setState({
                duration: duration,
                buffered: parseTimeRanges_1.default(buffered),
            });
        };
        var onTimeUpdate = function () {
            var el = ref.current;
            if (!el) {
                return;
            }
            setState({ time: el.currentTime });
        };
        var onProgress = function () {
            var el = ref.current;
            if (!el) {
                return;
            }
            setState({ buffered: parseTimeRanges_1.default(el.buffered) });
        };
        if (element) {
            element = React.cloneElement(element, tslib_1.__assign(tslib_1.__assign({ controls: false }, props), { ref: ref, onPlay: wrapEvent(props.onPlay, onPlay), onPlaying: wrapEvent(props.onPlaying, onPlaying), onWaiting: wrapEvent(props.onWaiting, onWaiting), onPause: wrapEvent(props.onPause, onPause), onVolumeChange: wrapEvent(props.onVolumeChange, onVolumeChange), onDurationChange: wrapEvent(props.onDurationChange, onDurationChange), onTimeUpdate: wrapEvent(props.onTimeUpdate, onTimeUpdate), onProgress: wrapEvent(props.onProgress, onProgress) }));
        }
        else {
            element = React.createElement(tag, tslib_1.__assign(tslib_1.__assign({ controls: false }, props), { ref: ref, onPlay: wrapEvent(props.onPlay, onPlay), onPlaying: wrapEvent(props.onPlaying, onPlaying), onWaiting: wrapEvent(props.onWaiting, onWaiting), onPause: wrapEvent(props.onPause, onPause), onVolumeChange: wrapEvent(props.onVolumeChange, onVolumeChange), onDurationChange: wrapEvent(props.onDurationChange, onDurationChange), onTimeUpdate: wrapEvent(props.onTimeUpdate, onTimeUpdate), onProgress: wrapEvent(props.onProgress, onProgress) })); // TODO: fix this typing.
        }
        // Some browsers return `Promise` on `.play()` and may throw errors
        // if one tries to execute another `.play()` or `.pause()` while that
        // promise is resolving. So we prevent that with this lock.
        // See: https://bugs.chromium.org/p/chromium/issues/detail?id=593273
        var lockPlay = false;
        var controls = {
            play: function () {
                var el = ref.current;
                if (!el) {
                    return undefined;
                }
                if (!lockPlay) {
                    var promise = el.play();
                    var isPromise = typeof promise === 'object';
                    if (isPromise) {
                        lockPlay = true;
                        var resetLock = function () {
                            lockPlay = false;
                        };
                        promise.then(resetLock, resetLock);
                    }
                    return promise;
                }
                return undefined;
            },
            pause: function () {
                var el = ref.current;
                if (el && !lockPlay) {
                    return el.pause();
                }
            },
            seek: function (time) {
                var el = ref.current;
                if (!el || state.duration === undefined) {
                    return;
                }
                time = Math.min(state.duration, Math.max(0, time));
                el.currentTime = time;
            },
            volume: function (volume) {
                var el = ref.current;
                if (!el) {
                    return;
                }
                volume = Math.min(1, Math.max(0, volume));
                el.volume = volume;
                setState({ volume: volume });
            },
            mute: function () {
                var el = ref.current;
                if (!el) {
                    return;
                }
                el.muted = true;
            },
            unmute: function () {
                var el = ref.current;
                if (!el) {
                    return;
                }
                el.muted = false;
            },
        };
        react_1.useEffect(function () {
            var el = ref.current;
            if (!el) {
                if (false) {}
                return;
            }
            setState({
                volume: el.volume,
                muted: el.muted,
                paused: el.paused,
            });
            // Start media, if autoPlay requested.
            if (props.autoPlay && el.paused) {
                controls.play();
            }
        }, [props.src]);
        return [element, state, controls, ref];
    };
}
exports["default"] = createHTMLMediaHook;


/***/ }),

/***/ 18639:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function parseTimeRanges(ranges) {
    var result = [];
    for (var i = 0; i < ranges.length; i++) {
        result.push({
            start: ranges.start(i),
            end: ranges.end(i),
        });
    }
    return result;
}
exports["default"] = parseTimeRanges;


/***/ }),

/***/ 66691:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isNavigator = exports.isBrowser = exports.off = exports.on = exports.noop = void 0;
var noop = function () { };
exports.noop = noop;
function on(obj) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (obj && obj.addEventListener) {
        obj.addEventListener.apply(obj, args);
    }
}
exports.on = on;
function off(obj) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (obj && obj.removeEventListener) {
        obj.removeEventListener.apply(obj, args);
    }
}
exports.off = off;
exports.isBrowser = typeof window !== 'undefined';
exports.isNavigator = typeof navigator !== 'undefined';


/***/ }),

/***/ 56595:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(31635);
var createHTMLMediaHook_1 = tslib_1.__importDefault(__webpack_require__(12015));
var useAudio = createHTMLMediaHook_1.default('audio');
exports["default"] = useAudio;


/***/ }),

/***/ 13876:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(96540);
function useMountedState() {
    var mountedRef = react_1.useRef(false);
    var get = react_1.useCallback(function () { return mountedRef.current; }, []);
    react_1.useEffect(function () {
        mountedRef.current = true;
        return function () {
            mountedRef.current = false;
        };
    }, []);
    return get;
}
exports["default"] = useMountedState;


/***/ }),

/***/ 72524:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(96540);
var useSetState = function (initialState) {
    if (initialState === void 0) { initialState = {}; }
    var _a = react_1.useState(initialState), state = _a[0], set = _a[1];
    var setState = react_1.useCallback(function (patch) {
        set(function (prevState) {
            return Object.assign({}, prevState, patch instanceof Function ? patch(prevState) : patch);
        });
    }, []);
    return [state, setState];
};
exports["default"] = useSetState;


/***/ }),

/***/ 22772:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(31635);
var react_1 = __webpack_require__(96540);
var util_1 = __webpack_require__(66691);
var useMountedState_1 = tslib_1.__importDefault(__webpack_require__(13876));
var useSetState_1 = tslib_1.__importDefault(__webpack_require__(72524));
var useSlider = function (ref, options) {
    if (options === void 0) { options = {}; }
    var isMounted = useMountedState_1.default();
    var isSliding = react_1.useRef(false);
    var valueRef = react_1.useRef(0);
    var frame = react_1.useRef(0);
    var _a = useSetState_1.default({
        isSliding: false,
        value: 0,
    }), state = _a[0], setState = _a[1];
    valueRef.current = state.value;
    react_1.useEffect(function () {
        if (util_1.isBrowser) {
            var styles = options.styles === undefined ? true : options.styles;
            var reverse_1 = options.reverse === undefined ? false : options.reverse;
            if (ref.current && styles) {
                ref.current.style.userSelect = 'none';
            }
            var startScrubbing_1 = function () {
                if (!isSliding.current && isMounted()) {
                    (options.onScrubStart || util_1.noop)();
                    isSliding.current = true;
                    setState({ isSliding: true });
                    bindEvents_1();
                }
            };
            var stopScrubbing_1 = function () {
                if (isSliding.current && isMounted()) {
                    (options.onScrubStop || util_1.noop)(valueRef.current);
                    isSliding.current = false;
                    setState({ isSliding: false });
                    unbindEvents_1();
                }
            };
            var onMouseDown_1 = function (event) {
                startScrubbing_1();
                onMouseMove_1(event);
            };
            var onMouseMove_1 = options.vertical
                ? function (event) { return onScrub_1(event.clientY); }
                : function (event) { return onScrub_1(event.clientX); };
            var onTouchStart_1 = function (event) {
                startScrubbing_1();
                onTouchMove_1(event);
            };
            var onTouchMove_1 = options.vertical
                ? function (event) { return onScrub_1(event.changedTouches[0].clientY); }
                : function (event) { return onScrub_1(event.changedTouches[0].clientX); };
            var bindEvents_1 = function () {
                util_1.on(document, 'mousemove', onMouseMove_1);
                util_1.on(document, 'mouseup', stopScrubbing_1);
                util_1.on(document, 'touchmove', onTouchMove_1);
                util_1.on(document, 'touchend', stopScrubbing_1);
            };
            var unbindEvents_1 = function () {
                util_1.off(document, 'mousemove', onMouseMove_1);
                util_1.off(document, 'mouseup', stopScrubbing_1);
                util_1.off(document, 'touchmove', onTouchMove_1);
                util_1.off(document, 'touchend', stopScrubbing_1);
            };
            var onScrub_1 = function (clientXY) {
                cancelAnimationFrame(frame.current);
                frame.current = requestAnimationFrame(function () {
                    if (isMounted() && ref.current) {
                        var rect = ref.current.getBoundingClientRect();
                        var pos = options.vertical ? rect.top : rect.left;
                        var length_1 = options.vertical ? rect.height : rect.width;
                        // Prevent returning 0 when element is hidden by CSS
                        if (!length_1) {
                            return;
                        }
                        var value = (clientXY - pos) / length_1;
                        if (value > 1) {
                            value = 1;
                        }
                        else if (value < 0) {
                            value = 0;
                        }
                        if (reverse_1) {
                            value = 1 - value;
                        }
                        setState({
                            value: value,
                        });
                        (options.onScrub || util_1.noop)(value);
                    }
                });
            };
            util_1.on(ref.current, 'mousedown', onMouseDown_1);
            util_1.on(ref.current, 'touchstart', onTouchStart_1);
            return function () {
                util_1.off(ref.current, 'mousedown', onMouseDown_1);
                util_1.off(ref.current, 'touchstart', onTouchStart_1);
            };
        }
        else {
            return undefined;
        }
    }, [ref, options.vertical]);
    return state;
};
exports["default"] = useSlider;


/***/ })

};
;