"use strict";
exports.id = 352;
exports.ids = [352];
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

/***/ 95352:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var p4_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43671);
/* harmony import */ var p4_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(p4_css__WEBPACK_IMPORTED_MODULE_1__);


var blockClass = (0,p4_css__WEBPACK_IMPORTED_MODULE_1__.rule)({
    d: 'block',
    ov: 'hidden',
    w: '100%',
    bd: '1px solid #E5E9F2',
    bdrad: '6px',
    '& iframe': {
        d: 'block',
        ov: 'hidden',
        bd: 0,
        w: '100%',
        h: '450px',
        bdrad: '8px',
    },
});
var Figma = function (_a) {
    var url = _a.url, renderWrap = _a.renderWrap;
    return renderWrap(react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: blockClass },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("iframe", { src: "https://www.figma.com/embed?embed_host=share&url=".concat(encodeURIComponent(url)), allowFullScreen: true })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Figma);
//# sourceMappingURL=index.js.map

/***/ })

};
;