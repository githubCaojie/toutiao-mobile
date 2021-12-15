(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"), require("jQuery"));
	else if(typeof define === 'function' && define.amd)
		define("vuecomponent", ["vue", "jQuery"], factory);
	else if(typeof exports === 'object')
		exports["vuecomponent"] = factory(require("vue"), require("jQuery"));
	else
		root["vuecomponent"] = factory(root["Vue"], root["jQuery"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_238__, __WEBPACK_EXTERNAL_MODULE_283__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _index = __webpack_require__(430);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var install = function install(Vue) {
	  if (install.installed) return;
	  Vue.component(_index2.default.name, _index2.default);
	};

	if (typeof window !== 'undefined' && window.Vue) {
	  install(window.Vue);
	};

	module.exports = {
	  version: '1.0.0-rc.5',
	  Slider: _index2.default
	};

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function normalizeComponent (
	  rawScriptExports,
	  compiledTemplate,
	  scopeId,
	  cssModules
	) {
	  var esModule
	  var scriptExports = rawScriptExports = rawScriptExports || {}

	  // ES6 modules interop
	  var type = typeof rawScriptExports.default
	  if (type === 'object' || type === 'function') {
	    esModule = rawScriptExports
	    scriptExports = rawScriptExports.default
	  }

	  // Vue.extend constructor export interop
	  var options = typeof scriptExports === 'function'
	    ? scriptExports.options
	    : scriptExports

	  // render functions
	  if (compiledTemplate) {
	    options.render = compiledTemplate.render
	    options.staticRenderFns = compiledTemplate.staticRenderFns
	  }

	  // scopedId
	  if (scopeId) {
	    options._scopeId = scopeId
	  }

	  // inject cssModules
	  if (cssModules) {
	    var computed = options.computed || (options.computed = {})
	    Object.keys(cssModules).forEach(function (key) {
	      var module = cssModules[key]
	      computed[key] = function () { return module }
	    })
	  }

	  return {
	    esModule: esModule,
	    exports: scriptExports,
	    options: options
	  }
	}


/***/ }),

/***/ 13:
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if (media) {
			styleElement.setAttribute("media", media);
		}

		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.isInContainer = exports.isScroll = exports.getScrollContainer = exports.getStyle = exports.once = exports.off = exports.on = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.hasClass = hasClass;
	exports.addClass = addClass;
	exports.removeClass = removeClass;
	exports.setStyle = setStyle;

	var _vue = __webpack_require__(238);

	var _vue2 = _interopRequireDefault(_vue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var isServer = _vue2.default.prototype.$isServer;
	var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
	var MOZ_HACK_REGEXP = /^moz([A-Z])/;
	var ieVersion = isServer ? 0 : Number(document.documentMode);

	var trim = function trim(string) {
	  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
	};

	var camelCase = function camelCase(name) {
	  return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
	    return offset ? letter.toUpperCase() : letter;
	  }).replace(MOZ_HACK_REGEXP, 'Moz$1');
	};

	var on = exports.on = function () {
	  if (!isServer && document.addEventListener) {
	    return function (element, event, handler) {
	      if (element && event && handler) {
	        element.addEventListener(event, handler, false);
	      }
	    };
	  } else {
	    return function (element, event, handler) {
	      if (element && event && handler) {
	        element.attachEvent('on' + event, handler);
	      }
	    };
	  }
	}();

	var off = exports.off = function () {
	  if (!isServer && document.removeEventListener) {
	    return function (element, event, handler) {
	      if (element && event) {
	        element.removeEventListener(event, handler, false);
	      }
	    };
	  } else {
	    return function (element, event, handler) {
	      if (element && event) {
	        element.detachEvent('on' + event, handler);
	      }
	    };
	  }
	}();

	var once = exports.once = function once(el, event, fn) {
	  var listener = function listener() {
	    if (fn) {
	      fn.apply(this, arguments);
	    }
	    off(el, event, listener);
	  };
	  on(el, event, listener);
	};

	function hasClass(el, cls) {
	  if (!el || !cls) return false;
	  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
	  if (el.classList) {
	    return el.classList.contains(cls);
	  } else {
	    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
	  }
	};

	function addClass(el, cls) {
	  if (!el) return;
	  var curClass = el.className;
	  var classes = (cls || '').split(' ');

	  for (var i = 0, j = classes.length; i < j; i++) {
	    var clsName = classes[i];
	    if (!clsName) continue;

	    if (el.classList) {
	      el.classList.add(clsName);
	    } else {
	      if (!hasClass(el, clsName)) {
	        curClass += ' ' + clsName;
	      }
	    }
	  }
	  if (!el.classList) {
	    el.className = curClass;
	  }
	};

	function removeClass(el, cls) {
	  if (!el || !cls) return;
	  var classes = cls.split(' ');
	  var curClass = ' ' + el.className + ' ';

	  for (var i = 0, j = classes.length; i < j; i++) {
	    var clsName = classes[i];
	    if (!clsName) continue;

	    if (el.classList) {
	      el.classList.remove(clsName);
	    } else {
	      if (hasClass(el, clsName)) {
	        curClass = curClass.replace(' ' + clsName + ' ', ' ');
	      }
	    }
	  }
	  if (!el.classList) {
	    el.className = trim(curClass);
	  }
	};

	var getStyle = exports.getStyle = ieVersion < 9 ? function (element, styleName) {
	  if (isServer) return;
	  if (!element || !styleName) return null;
	  styleName = camelCase(styleName);
	  if (styleName === 'float') {
	    styleName = 'styleFloat';
	  }
	  try {
	    switch (styleName) {
	      case 'opacity':
	        try {
	          return element.filters.item('alpha').opacity / 100;
	        } catch (e) {
	          return 1.0;
	        }
	      default:
	        return element.style[styleName] || element.currentStyle ? element.currentStyle[styleName] : null;
	    }
	  } catch (e) {
	    return element.style[styleName];
	  }
	} : function (element, styleName) {
	  if (isServer) return;
	  if (!element || !styleName) return null;
	  styleName = camelCase(styleName);
	  if (styleName === 'float') {
	    styleName = 'cssFloat';
	  }
	  try {
	    var computed = document.defaultView.getComputedStyle(element, '');
	    return element.style[styleName] || computed ? computed[styleName] : null;
	  } catch (e) {
	    return element.style[styleName];
	  }
	};

	function setStyle(element, styleName, value) {
	  if (!element || !styleName) return;

	  if ((typeof styleName === 'undefined' ? 'undefined' : _typeof(styleName)) === 'object') {
	    for (var prop in styleName) {
	      if (styleName.hasOwnProperty(prop)) {
	        setStyle(element, prop, styleName[prop]);
	      }
	    }
	  } else {
	    styleName = camelCase(styleName);
	    if (styleName === 'opacity' && ieVersion < 9) {
	      element.style.filter = isNaN(value) ? '' : 'alpha(opacity=' + value * 100 + ')';
	    } else {
	      element.style[styleName] = value;
	    }
	  }
	};

	var getScrollContainer = exports.getScrollContainer = function getScrollContainer(el, vertical) {
	  if (isServer) return;

	  var parent = el;
	  while (parent) {
	    if ([window, document, document.documentElement].includes(parent)) {
	      return window;
	    }
	    if (isScroll(parent, vertical)) {
	      return parent;
	    }
	    parent = parent.parentNode;
	  }

	  return parent;
	};

	var isScroll = exports.isScroll = function isScroll(el, vertical) {
	  if (isServer) return;

	  var determinedDirection = vertical !== null || vertical !== undefined;
	  var overflow = determinedDirection ? vertical ? getStyle(el, 'overflow-y') : getStyle(el, 'overflow-x') : getStyle(el, 'overflow');

	  return overflow.match(/(scroll|auto)/);
	};

	var isInContainer = exports.isInContainer = function isInContainer(el, container) {
	  if (isServer || !el || !container) return false;

	  var elRect = el.getBoundingClientRect();
	  var containerRect = void 0;

	  if ([window, document, document.documentElement, null, undefined].includes(container)) {
	    containerRect = {
	      top: 0,
	      right: window.innerWidth,
	      bottom: window.innerHeight,
	      left: 0
	    };
	  } else {
	    containerRect = container.getBoundingClientRect();
	  }

	  return elRect.top < containerRect.bottom && elRect.bottom > containerRect.top && elRect.right > containerRect.left && elRect.left < containerRect.right;
	};

/***/ }),

/***/ 238:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_238__;

/***/ }),

/***/ 239:
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function _broadcast(componentName, eventName, params) {
	  this.$children.forEach(function (child) {
	    var name = child.$options.componentName;
	    if (name === componentName) {
	      child.$emit.apply(child, [eventName].concat(params));
	    } else {
	      _broadcast.apply(child, [componentName, eventName].concat(params));
	    }
	  });
	}
	exports.default = {
	  methods: {
	    dispatch: function dispatch(componentName, eventName, params) {
	      var parent = this.$parent;
	      if (parent == undefined) {
	        return;
	      }
	      var name = parent.$options.componentName;

	      while (parent && (!name || name !== componentName)) {
	        parent = parent.$parent;

	        if (parent) {
	          name = parent.$options.componentName;
	        }
	      }
	      if (parent) {
	        parent.$emit.apply(parent, [eventName].concat(params));
	      }
	    },
	    broadcast: function broadcast(componentName, eventName, params) {
	      _broadcast.call(this, componentName, eventName, params);
	    }
	  }
	};

/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vue = __webpack_require__(238);

	var _vue2 = _interopRequireDefault(_vue);

	var _popup = __webpack_require__(261);

	var _timers = __webpack_require__(265);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PopperJS = _vue2.default.prototype.$isServer ? function () {} : __webpack_require__(268);
	var stop = function stop(e) {
	  return e.stopPropagation();
	};

	exports.default = {
	  props: {
	    placement: {
	      type: String,
	      default: 'bottom'
	    },
	    boundariesPadding: {
	      type: Number,
	      default: 5
	    },
	    reference: {},
	    popper: {},
	    offset: {
	      default: 0
	    },
	    diff: {
	      default: 0
	    },
	    value: Boolean,
	    visiblearrow: Boolean,
	    transition: String,
	    appendToBody: {
	      type: Boolean,
	      default: true
	    },
	    popperOptions: {
	      type: Object,
	      default: function _default() {
	        return {
	          gpuAcceleration: false
	        };
	      }
	    }
	  },

	  data: function data() {
	    return {
	      showPopper: false,
	      currentPlacement: ''
	    };
	  },


	  watch: {
	    value: {
	      immediate: true,
	      handler: function handler(val) {
	        this.showPopper = val;
	        this.$emit('input', val);
	      }
	    },

	    showPopper: function showPopper(val) {
	      val ? this.updatePopper() : this.destroyPopper();
	      this.$emit('input', val);
	    }
	  },

	  methods: {
	    createPopper: function createPopper() {
	      var _this = this;

	      if (this.$isServer) return;
	      this.currentPlacement = this.currentPlacement || this.placement;
	      if (!/^(top|bottom|left|right)(-start|-end)?$/g.test(this.currentPlacement)) {
	        return;
	      }

	      var options = this.popperOptions;
	      var popper = this.popperElm = this.popperElm || this.popper || this.$refs.popper;
	      var reference = this.referenceElm = this.referenceElm || this.reference || this.$refs.reference;

	      if (!reference && this.$slots.reference && this.$slots.reference[0]) {
	        reference = this.referenceElm = this.$slots.reference[0].elm;
	      }

	      if (!popper || !reference) return;
	      if (this.visiblearrow) this.appendArrow(popper);

	      document.body.appendChild(this.popperElm);
	      if (this.popperJS && this.popperJS.destroy) {
	        this.popperJS.destroy();
	      }

	      options.placement = this.currentPlacement;
	      options.offset = this.offset;
	      options.diff = this.diff;
	      if (!this.visiblearrow && this.placement == 'bottom') {
	        options.topOffset = 8;
	      }
	      this.popperJS = new PopperJS(reference, popper, options);
	      this.popperJS.onCreate(function (_) {
	        _this.$emit('created', _this);
	        _this.resetTransformOrigin();
	        _this.$nextTick(_this.updatePopper);
	      });
	      this.popperJS._popper.style.zIndex = _popup.PopupManager.nextZIndex();
	      this.popperElm.addEventListener('click', stop);
	    },
	    updatePopper: function updatePopper() {

	      if (this.popperJS) {
	        this.popperJS._popper.style.zIndex = _popup.PopupManager.nextZIndex();
	      }
	      this.popperJS ? this.popperJS.update() : this.createPopper();
	    },
	    doDestroy: function doDestroy() {
	      if (this.showPopper || !this.popperJS) return;
	      this.popperJS.destroy();
	      this.popperJS = null;
	    },
	    destroyPopper: function destroyPopper() {
	      if (this.popperJS) {
	        this.resetTransformOrigin();
	      }
	    },
	    resetTransformOrigin: function resetTransformOrigin() {
	      var placementMap = {
	        top: 'bottom',
	        bottom: 'top',
	        left: 'right',
	        right: 'left'
	      };
	      var placement = this.popperJS._popper.getAttribute('x-placement').split('-')[0];
	      var origin = placementMap[placement];
	      this.popperJS._popper.style.transformOrigin = ['top', 'bottom'].indexOf(placement) > -1 ? 'center ' + origin : origin + ' center';
	    },
	    appendArrow: function appendArrow(element) {
	      var hash = void 0;
	      if (this.appended) {
	        return;
	      }

	      this.appended = true;

	      for (var item in element.attributes) {
	        if (/^_v-/.test(element.attributes[item].name)) {
	          hash = element.attributes[item].name;
	          break;
	        }
	      }

	      var arrow = document.createElement('div');

	      if (hash) {
	        arrow.setAttribute(hash, '');
	      }
	      arrow.setAttribute('x-arrow', '');
	      arrow.className = 'popper__arrow';
	      element.appendChild(arrow);
	    }
	  },

	  beforeDestroy: function beforeDestroy() {
	    this.doDestroy();
	    if (this.popperElm && this.popperElm.parentNode === document.body) {
	      this.popperElm.removeEventListener('click', stop);
	      document.body.removeChild(this.popperElm);
	    }
	  },
	  deactivated: function deactivated() {
	    this.$options.beforeDestroy[0].call(this);
	  }
	};

/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PopupManager = undefined;

	var _vue = __webpack_require__(238);

	var _vue2 = _interopRequireDefault(_vue);

	var _merge = __webpack_require__(262);

	var _merge2 = _interopRequireDefault(_merge);

	var _popupManager = __webpack_require__(263);

	var _popupManager2 = _interopRequireDefault(_popupManager);

	var _scrollbarWidth = __webpack_require__(264);

	var _scrollbarWidth2 = _interopRequireDefault(_scrollbarWidth);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var idSeed = 1;
	var transitions = [];

	var hookTransition = function hookTransition(transition) {
	  if (transitions.indexOf(transition) !== -1) return;

	  var getVueInstance = function getVueInstance(element) {
	    var instance = element.__vue__;
	    if (!instance) {
	      var textNode = element.previousSibling;
	      if (textNode.__vue__) {
	        instance = textNode.__vue__;
	      }
	    }
	    return instance;
	  };

	  _vue2.default.transition(transition, {
	    afterEnter: function afterEnter(el) {
	      var instance = getVueInstance(el);

	      if (instance) {
	        instance.doAfterOpen && instance.doAfterOpen();
	      }
	    },
	    afterLeave: function afterLeave(el) {
	      var instance = getVueInstance(el);

	      if (instance) {
	        instance.doAfterClose && instance.doAfterClose();
	      }
	    }
	  });
	};

	var scrollBarWidth = void 0;

	var getDOM = function getDOM(dom) {
	  if (dom.nodeType === 3) {
	    dom = dom.nextElementSibling || dom.nextSibling;
	    getDOM(dom);
	  }
	  return dom;
	};

	exports.default = {
	  props: {
	    value: {
	      type: Boolean,
	      default: false
	    },
	    transition: {
	      type: String,
	      default: ''
	    },
	    openDelay: {},
	    closeDelay: {},
	    zIndex: {},
	    modal: {
	      type: Boolean,
	      default: false
	    },
	    modalFade: {
	      type: Boolean,
	      default: true
	    },
	    modalClass: {},
	    modalAppendToBody: {
	      type: Boolean,
	      default: false
	    },
	    lockScroll: {
	      type: Boolean,
	      default: true
	    },
	    closeOnPressEscape: {
	      type: Boolean,
	      default: false
	    },
	    closeOnClickModal: {
	      type: Boolean,
	      default: false
	    }
	  },

	  created: function created() {
	    if (this.transition) {
	      hookTransition(this.transition);
	    }
	  },
	  beforeMount: function beforeMount() {
	    this._popupId = 'popup-' + idSeed++;
	    _popupManager2.default.register(this._popupId, this);
	  },
	  beforeDestroy: function beforeDestroy() {
	    _popupManager2.default.deregister(this._popupId);
	    _popupManager2.default.closeModal(this._popupId);
	    if (this.modal && this.bodyOverflow !== null && this.bodyOverflow !== 'hidden') {
	      document.body.style.overflow = this.bodyOverflow;
	      document.body.style.paddingRight = this.bodyPaddingRight;
	    }
	    this.bodyOverflow = null;
	    this.bodyPaddingRight = null;
	  },
	  data: function data() {
	    return {
	      opened: false,
	      bodyOverflow: null,
	      bodyPaddingRight: null,
	      rendered: false
	    };
	  },


	  watch: {
	    value: function value(val) {
	      var _this = this;

	      if (val) {
	        if (this._opening) return;
	        if (!this.rendered) {
	          this.rendered = true;
	          _vue2.default.nextTick(function () {
	            _this.open();
	          });
	        } else {
	          this.open();
	        }
	      } else {
	        this.close();
	      }
	    }
	  },

	  methods: {
	    open: function open(options) {
	      var _this2 = this;

	      if (!this.rendered) {
	        this.rendered = true;
	        this.$emit('input', true);
	      }

	      var props = (0, _merge2.default)({}, this, options);
	      if (props.modal == undefined) {
	        props.modal = this.modal;
	      }

	      if (this._closeTimer) {
	        clearTimeout(this._closeTimer);
	        this._closeTimer = null;
	      }
	      clearTimeout(this._openTimer);

	      var openDelay = Number(props.openDelay);
	      if (openDelay > 0) {
	        this._openTimer = setTimeout(function () {
	          _this2._openTimer = null;
	          _this2.doOpen(props);
	        }, openDelay);
	      } else {
	        this.doOpen(props);
	      }
	    },
	    doOpen: function doOpen(props) {
	      if (this.$isServer) return;
	      if (this.willOpen && !this.willOpen()) return;
	      if (this.opened) return;

	      this._opening = true;

	      this.visible = true;
	      this.$emit('input', true);

	      var dom = getDOM(this.$el);

	      var modal = props.modal;

	      var zIndex = props.zIndex;
	      if (zIndex) {
	        _popupManager2.default.zIndex = zIndex;
	      }

	      if (modal) {
	        if (this._closing) {
	          _popupManager2.default.closeModal(this._popupId);
	          this._closing = false;
	        }
	        _popupManager2.default.openModal(this._popupId, _popupManager2.default.nextZIndex(), this.modalAppendToBody ? undefined : dom, props.modalClass, props.modalFade);
	        if (props.lockScroll) {
	          if (!this.bodyOverflow) {
	            this.bodyPaddingRight = document.body.style.paddingRight;
	            this.bodyOverflow = document.body.style.overflow;
	          }
	          scrollBarWidth = (0, _scrollbarWidth2.default)();
	          var bodyHasOverflow = document.documentElement.clientHeight < document.body.scrollHeight;
	          if (scrollBarWidth > 0 && bodyHasOverflow) {
	            document.body.style.paddingRight = scrollBarWidth + 'px';
	          }
	          document.body.style.overflow = 'hidden';
	        }
	      }

	      if (getComputedStyle(dom).position === 'static') {
	        dom.style.position = 'absolute';
	      }

	      dom.style.zIndex = _popupManager2.default.nextZIndex();
	      this.opened = true;

	      this.onOpen && this.onOpen();

	      if (!this.transition) {
	        this.doAfterOpen();
	      }
	    },
	    doAfterOpen: function doAfterOpen() {
	      this._opening = false;
	    },
	    close: function close() {
	      var _this3 = this;

	      if (this.willClose && !this.willClose()) return;

	      if (this._openTimer !== null) {
	        clearTimeout(this._openTimer);
	        this._openTimer = null;
	      }
	      clearTimeout(this._closeTimer);

	      var closeDelay = Number(this.closeDelay);

	      if (closeDelay > 0) {
	        this._closeTimer = setTimeout(function () {
	          _this3._closeTimer = null;
	          _this3.doClose();
	        }, closeDelay);
	      } else {
	        this.doClose();
	      }
	    },
	    doClose: function doClose() {
	      var _this4 = this;

	      this.visible = false;
	      this.$emit('input', false);
	      this._closing = true;

	      this.onClose && this.onClose();

	      if (this.lockScroll) {
	        setTimeout(function () {
	          if (_this4.modal && _this4.bodyOverflow !== 'hidden') {
	            document.body.style.overflow = _this4.bodyOverflow;
	            document.body.style.paddingRight = _this4.bodyPaddingRight;
	          }
	          _this4.bodyOverflow = null;
	          _this4.bodyPaddingRight = null;
	        }, 200);
	      }

	      this.opened = false;

	      if (!this.transition) {
	        this.doAfterClose();
	      }
	    },
	    doAfterClose: function doAfterClose() {
	      _popupManager2.default.closeModal(this._popupId);
	      this._closing = false;
	    }
	  }
	};
	exports.PopupManager = _popupManager2.default;

/***/ }),

/***/ 262:
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (target) {
	  for (var i = 1, j = arguments.length; i < j; i++) {
	    var source = arguments[i] || {};
	    for (var prop in source) {
	      if (source.hasOwnProperty(prop)) {
	        var value = source[prop];
	        if (value !== undefined) {
	          target[prop] = value;
	        }
	      }
	    }
	  }

	  return target;
	};

	;

/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vue = __webpack_require__(238);

	var _vue2 = _interopRequireDefault(_vue);

	var _dom = __webpack_require__(237);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var hasModal = false;

	var getModal = function getModal() {
	  if (_vue2.default.prototype.$isServer) return;
	  var modalDom = PopupManager.modalDom;
	  if (modalDom) {
	    hasModal = true;
	  } else {
	    hasModal = false;
	    modalDom = document.createElement('div');
	    PopupManager.modalDom = modalDom;

	    modalDom.addEventListener('touchmove', function (event) {
	      event.preventDefault();
	      event.stopPropagation();
	    });

	    modalDom.addEventListener('click', function () {
	      PopupManager.doOnModalClick && PopupManager.doOnModalClick();
	    });
	  }

	  return modalDom;
	};

	var instances = {};

	var PopupManager = {
	  zIndex: 2000,

	  modalFade: true,

	  getInstance: function getInstance(id) {
	    return instances[id];
	  },

	  register: function register(id, instance) {
	    if (id && instance) {
	      instances[id] = instance;
	    }
	  },

	  deregister: function deregister(id) {
	    if (id) {
	      instances[id] = null;
	      delete instances[id];
	    }
	  },

	  nextZIndex: function nextZIndex() {
	    return PopupManager.zIndex++;
	  },

	  modalStack: [],

	  doOnModalClick: function doOnModalClick() {
	    var topItem = PopupManager.modalStack[PopupManager.modalStack.length - 1];
	    if (!topItem) return;

	    var instance = PopupManager.getInstance(topItem.id);
	    if (instance && instance.closeOnClickModal) {
	      instance.close();
	    }
	  },

	  openModal: function openModal(id, zIndex, dom, modalClass, modalFade) {
	    if (_vue2.default.prototype.$isServer) return;
	    if (!id || zIndex === undefined) return;
	    this.modalFade = modalFade;

	    var modalStack = this.modalStack;

	    for (var i = 0, j = modalStack.length; i < j; i++) {
	      var item = modalStack[i];
	      if (item.id === id) {
	        return;
	      }
	    }

	    var modalDom = getModal();

	    (0, _dom.addClass)(modalDom, 'v-modal');
	    if (this.modalFade && !hasModal) {
	      (0, _dom.addClass)(modalDom, 'v-modal-enter');
	    }
	    if (modalClass) {
	      var classArr = modalClass.trim().split(/\s+/);
	      classArr.forEach(function (item) {
	        return (0, _dom.addClass)(modalDom, item);
	      });
	    }
	    setTimeout(function () {
	      (0, _dom.removeClass)(modalDom, 'v-modal-enter');
	    }, 200);

	    if (dom && dom.parentNode && dom.parentNode.nodeType !== 11) {
	      dom.parentNode.appendChild(modalDom);
	    } else {
	      document.body.appendChild(modalDom);
	    }

	    if (zIndex) {
	      modalDom.style.zIndex = zIndex;
	    }
	    modalDom.style.display = '';

	    this.modalStack.push({ id: id, zIndex: zIndex, modalClass: modalClass });
	  },

	  closeModal: function closeModal(id) {
	    var modalStack = this.modalStack;
	    var modalDom = getModal();

	    if (modalStack.length > 0) {
	      var topItem = modalStack[modalStack.length - 1];
	      if (topItem.id === id) {
	        if (topItem.modalClass) {
	          var classArr = topItem.modalClass.trim().split(/\s+/);
	          classArr.forEach(function (item) {
	            return (0, _dom.removeClass)(modalDom, item);
	          });
	        }

	        modalStack.pop();
	        if (modalStack.length > 0) {
	          modalDom.style.zIndex = modalStack[modalStack.length - 1].zIndex;
	        }
	      } else {
	        for (var i = modalStack.length - 1; i >= 0; i--) {
	          if (modalStack[i].id === id) {
	            modalStack.splice(i, 1);
	            break;
	          }
	        }
	      }
	    }

	    if (modalStack.length === 0) {
	      if (this.modalFade) {
	        (0, _dom.addClass)(modalDom, 'v-modal-leave');
	      }
	      setTimeout(function () {
	        if (modalStack.length === 0) {
	          if (modalDom.parentNode) modalDom.parentNode.removeChild(modalDom);
	          modalDom.style.display = 'none';
	          PopupManager.modalDom = undefined;
	        }
	        (0, _dom.removeClass)(modalDom, 'v-modal-leave');
	      }, 200);
	    }
	  }
	};
	!_vue2.default.prototype.$isServer && window.addEventListener('keydown', function (event) {
	  if (event.keyCode === 27) {
	    if (PopupManager.modalStack.length > 0) {
	      var topItem = PopupManager.modalStack[PopupManager.modalStack.length - 1];
	      if (!topItem) return;
	      var instance = PopupManager.getInstance(topItem.id);
	      if (instance.closeOnPressEscape) {
	        instance.close();
	      }
	    }
	  }
	});

	exports.default = PopupManager;

/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  if (_vue2.default.prototype.$isServer) return 0;
	  if (scrollBarWidth !== undefined) return scrollBarWidth;

	  var outer = document.createElement('div');
	  outer.className = 'el-scrollbar__wrap';
	  outer.style.visibility = 'hidden';
	  outer.style.width = '100px';
	  outer.style.position = 'absolute';
	  outer.style.top = '-9999px';
	  document.body.appendChild(outer);

	  var widthNoScroll = outer.offsetWidth;
	  outer.style.overflow = 'scroll';

	  var inner = document.createElement('div');
	  inner.style.width = '100%';
	  outer.appendChild(inner);

	  var widthWithScroll = inner.offsetWidth;
	  outer.parentNode.removeChild(outer);
	  scrollBarWidth = widthNoScroll - widthWithScroll;

	  return scrollBarWidth;
	};

	var _vue = __webpack_require__(238);

	var _vue2 = _interopRequireDefault(_vue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var scrollBarWidth = void 0;

	;

/***/ }),

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
	            (typeof self !== "undefined" && self) ||
	            window;
	var apply = Function.prototype.apply;

	// DOM APIs, for completeness

	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) {
	  if (timeout) {
	    timeout.close();
	  }
	};

	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(scope, this._id);
	};

	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};

	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};

	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);

	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};

	// setimmediate attaches itself to the global object
	__webpack_require__(266);
	// On some exotic environments, it's not clear which object `setimmediate` was
	// able to install onto.  Search each possibility in the same order as the
	// `setimmediate` library.
	exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
	                       (typeof global !== "undefined" && global.setImmediate) ||
	                       (this && this.setImmediate);
	exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
	                         (typeof global !== "undefined" && global.clearImmediate) ||
	                         (this && this.clearImmediate);

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
	    "use strict";

	    if (global.setImmediate) {
	        return;
	    }

	    var nextHandle = 1; // Spec says greater than zero
	    var tasksByHandle = {};
	    var currentlyRunningATask = false;
	    var doc = global.document;
	    var registerImmediate;

	    function setImmediate(callback) {
	      // Callback can either be a function or a string
	      if (typeof callback !== "function") {
	        callback = new Function("" + callback);
	      }
	      // Copy function arguments
	      var args = new Array(arguments.length - 1);
	      for (var i = 0; i < args.length; i++) {
	          args[i] = arguments[i + 1];
	      }
	      // Store and register the task
	      var task = { callback: callback, args: args };
	      tasksByHandle[nextHandle] = task;
	      registerImmediate(nextHandle);
	      return nextHandle++;
	    }

	    function clearImmediate(handle) {
	        delete tasksByHandle[handle];
	    }

	    function run(task) {
	        var callback = task.callback;
	        var args = task.args;
	        switch (args.length) {
	        case 0:
	            callback();
	            break;
	        case 1:
	            callback(args[0]);
	            break;
	        case 2:
	            callback(args[0], args[1]);
	            break;
	        case 3:
	            callback(args[0], args[1], args[2]);
	            break;
	        default:
	            callback.apply(undefined, args);
	            break;
	        }
	    }

	    function runIfPresent(handle) {
	        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
	        // So if we're currently running a task, we'll need to delay this invocation.
	        if (currentlyRunningATask) {
	            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
	            // "too much recursion" error.
	            setTimeout(runIfPresent, 0, handle);
	        } else {
	            var task = tasksByHandle[handle];
	            if (task) {
	                currentlyRunningATask = true;
	                try {
	                    run(task);
	                } finally {
	                    clearImmediate(handle);
	                    currentlyRunningATask = false;
	                }
	            }
	        }
	    }

	    function installNextTickImplementation() {
	        registerImmediate = function(handle) {
	            process.nextTick(function () { runIfPresent(handle); });
	        };
	    }

	    function canUsePostMessage() {
	        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
	        // where `global.postMessage` means something completely different and can't be used for this purpose.
	        if (global.postMessage && !global.importScripts) {
	            var postMessageIsAsynchronous = true;
	            var oldOnMessage = global.onmessage;
	            global.onmessage = function() {
	                postMessageIsAsynchronous = false;
	            };
	            global.postMessage("", "*");
	            global.onmessage = oldOnMessage;
	            return postMessageIsAsynchronous;
	        }
	    }

	    function installPostMessageImplementation() {
	        // Installs an event handler on `global` for the `message` event: see
	        // * https://developer.mozilla.org/en/DOM/window.postMessage
	        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

	        var messagePrefix = "setImmediate$" + Math.random() + "$";
	        var onGlobalMessage = function(event) {
	            if (event.source === global &&
	                typeof event.data === "string" &&
	                event.data.indexOf(messagePrefix) === 0) {
	                runIfPresent(+event.data.slice(messagePrefix.length));
	            }
	        };

	        if (global.addEventListener) {
	            global.addEventListener("message", onGlobalMessage, false);
	        } else {
	            global.attachEvent("onmessage", onGlobalMessage);
	        }

	        registerImmediate = function(handle) {
	            global.postMessage(messagePrefix + handle, "*");
	        };
	    }

	    function installMessageChannelImplementation() {
	        var channel = new MessageChannel();
	        channel.port1.onmessage = function(event) {
	            var handle = event.data;
	            runIfPresent(handle);
	        };

	        registerImmediate = function(handle) {
	            channel.port2.postMessage(handle);
	        };
	    }

	    function installReadyStateChangeImplementation() {
	        var html = doc.documentElement;
	        registerImmediate = function(handle) {
	            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
	            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
	            var script = doc.createElement("script");
	            script.onreadystatechange = function () {
	                runIfPresent(handle);
	                script.onreadystatechange = null;
	                html.removeChild(script);
	                script = null;
	            };
	            html.appendChild(script);
	        };
	    }

	    function installSetTimeoutImplementation() {
	        registerImmediate = function(handle) {
	            setTimeout(runIfPresent, 0, handle);
	        };
	    }

	    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
	    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
	    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

	    // Don't get fooled by e.g. browserify environments.
	    if ({}.toString.call(global.process) === "[object process]") {
	        // For Node.js before 0.9
	        installNextTickImplementation();

	    } else if (canUsePostMessage()) {
	        // For non-IE10 modern browsers
	        installPostMessageImplementation();

	    } else if (global.MessageChannel) {
	        // For web workers, where supported
	        installMessageChannelImplementation();

	    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
	        // For IE 6–8
	        installReadyStateChangeImplementation();

	    } else {
	        // For older browsers
	        installSetTimeoutImplementation();
	    }

	    attachTo.setImmediate = setImmediate;
	    attachTo.clearImmediate = clearImmediate;
	}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(267)))

/***/ }),

/***/ 267:
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) { return [] }

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _class = __webpack_require__(269);

	/**
	 * @fileOverview Kickass library to create and place poppers near their reference elements.
	 * @version {{version}}
	 * @license
	 * Copyright (c) 2016 Federico Zivolo and contributors
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in all
	 * copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	 * SOFTWARE.
	 */

	;(function (root, factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && module.exports) {
	        module.exports = factory();
	    } else {
	        root.Popper = factory();
	    }
	})(undefined, function () {

	    'use strict';

	    var root = window;

	    var DEFAULTS = {
	        placement: 'bottom',

	        gpuAcceleration: true,

	        offset: 0,

	        diff: 0,

	        boundariesElement: 'viewport',

	        boundariesPadding: 5,

	        preventOverflowOrder: ['left', 'right', 'top', 'bottom'],

	        flipBehavior: 'flip',

	        arrowElement: '[x-arrow]',

	        modifiers: ['shift', 'offset', 'preventOverflow', 'keepTogether', 'arrow', 'flip', 'applyStyle'],

	        modifiersIgnored: [],

	        forceAbsolute: false
	    };

	    function Popper(reference, popper, options) {
	        this._reference = reference.jquery ? reference[0] : reference;
	        this.state = {};

	        if (options.topOffset != undefined) {
	            this.topOffset = options.topOffset;
	        }
	        this.changeHorizontal = false;

	        if (options.diff == undefined) {
	            this.diff = 0;
	        } else {
	            this.diff = parseInt(options.diff);
	        }

	        var isNotDefined = typeof popper === 'undefined' || popper === null;
	        var isConfig = popper && Object.prototype.toString.call(popper) === '[object Object]';
	        if (isNotDefined || isConfig) {
	            this._popper = this.parse(isConfig ? popper : {});
	        } else {
	                this._popper = popper.jquery ? popper[0] : popper;
	            }

	        this._options = Object.assign({}, DEFAULTS, options);

	        this._options.modifiers = this._options.modifiers.map(function (modifier) {
	            if (this._options.modifiersIgnored.indexOf(modifier) !== -1) return;

	            if (modifier === 'applyStyle') {
	                this._popper.setAttribute('x-placement', this._options.placement);
	            }

	            return this.modifiers[modifier] || modifier;
	        }.bind(this));

	        this.state.position = this._getPosition(this._popper, this._reference);
	        setStyle(this._popper, { position: this.state.position }, { diff: this.diff, changeHorizontal: this.changeHorizontal });

	        this.update();

	        this._setupEventListeners();
	        return this;
	    }

	    Popper.prototype.destroy = function () {
	        this._popper.removeAttribute('x-placement');
	        this._popper.style.left = '';
	        this._popper.style.position = '';
	        this._popper.style.top = '';
	        this._popper.style[getSupportedPropertyName('transform')] = '';
	        this._removeEventListeners();

	        if (this._options.removeOnDestroy) {
	            this._popper.remove();
	        }
	        return this;
	    };

	    Popper.prototype.update = function () {
	        var data = { instance: this, styles: {} };

	        data.placement = this._options.placement;
	        data._originalPlacement = this._options.placement;

	        data.offsets = this._getOffsets(this._popper, this._reference, data.placement);

	        data.boundaries = this._getBoundaries(data, this._options.boundariesPadding, this._options.boundariesElement);

	        data = this.runModifiers(data, this._options.modifiers);

	        if (typeof this.state.updateCallback === 'function') {
	            this.state.updateCallback(data);
	        }
	    };

	    Popper.prototype.onCreate = function (callback) {
	        callback(this);
	        return this;
	    };

	    Popper.prototype.onUpdate = function (callback) {
	        this.state.updateCallback = callback;
	        return this;
	    };

	    Popper.prototype.parse = function (config) {
	        var defaultConfig = {
	            tagName: 'div',
	            classNames: ['popper'],
	            attributes: [],
	            parent: root.document.body,
	            content: '',
	            contentType: 'text',
	            arrowTagName: 'div',
	            arrowClassNames: ['popper__arrow'],
	            arrowAttributes: ['x-arrow']
	        };
	        config = Object.assign({}, defaultConfig, config);

	        var d = root.document;

	        var popper = d.createElement(config.tagName);
	        addClassNames(popper, config.classNames);
	        addAttributes(popper, config.attributes);
	        if (config.contentType === 'node') {
	            popper.appendChild(config.content.jquery ? config.content[0] : config.content);
	        } else if (config.contentType === 'html') {
	            popper.innerHTML = config.content;
	        } else {
	            popper.textContent = config.content;
	        }

	        if (config.arrowTagName) {
	            var arrow = d.createElement(config.arrowTagName);
	            addClassNames(arrow, config.arrowClassNames);
	            addAttributes(arrow, config.arrowAttributes);
	            popper.appendChild(arrow);
	        }

	        var parent = config.parent.jquery ? config.parent[0] : config.parent;

	        if (typeof parent === 'string') {
	            parent = d.querySelectorAll(config.parent);
	            if (parent.length > 1) {
	                console.warn('WARNING: the given `parent` query(' + config.parent + ') matched more than one element, the first one will be used');
	            }
	            if (parent.length === 0) {
	                throw 'ERROR: the given `parent` doesn\'t exists!';
	            }
	            parent = parent[0];
	        }

	        if (parent.length > 1 && parent instanceof Element === false) {
	            console.warn('WARNING: you have passed as parent a list of elements, the first one will be used');
	            parent = parent[0];
	        }

	        parent.appendChild(popper);

	        return popper;

	        function addClassNames(element, classNames) {
	            classNames.forEach(function (className) {
	                element.classList.add(className);
	            });
	        }

	        function addAttributes(element, attributes) {
	            attributes.forEach(function (attribute) {
	                element.setAttribute(attribute.split(':')[0], attribute.split(':')[1] || '');
	            });
	        }
	    };

	    Popper.prototype._getPosition = function (popper, reference) {
	        var container = getOffsetParent(reference);
	        if (this._options.forceAbsolute) {
	            return 'absolute';
	        }

	        var isParentFixed = isFixed(reference, container);
	        return isParentFixed ? 'fixed' : 'absolute';
	    };

	    Popper.prototype._getOffsets = function (popper, reference, placement) {
	        placement = placement.split('-')[0];
	        var popperOffsets = {};

	        popperOffsets.position = this.state.position;
	        var isParentFixed = popperOffsets.position === 'fixed';

	        var referenceOffsets = getOffsetRectRelativeToCustomParent(reference, getOffsetParent(popper), isParentFixed);

	        var popperRect = getOuterSizes(popper);

	        if (['right', 'left'].indexOf(placement) !== -1) {
	            popperOffsets.top = referenceOffsets.top + referenceOffsets.height / 2 - popperRect.height / 2;
	            if (placement === 'left') {
	                popperOffsets.left = referenceOffsets.left - popperRect.width;
	            } else {
	                popperOffsets.left = referenceOffsets.right;
	            }
	        } else {
	            popperOffsets.left = referenceOffsets.left + referenceOffsets.width / 2 - popperRect.width / 2;
	            if (placement === 'top') {
	                popperOffsets.top = referenceOffsets.top - popperRect.height;
	            } else {
	                popperOffsets.top = referenceOffsets.bottom;
	            }
	        }

	        popperOffsets.width = popperRect.width;
	        popperOffsets.height = popperRect.height;

	        return {
	            popper: popperOffsets,
	            reference: referenceOffsets
	        };
	    };

	    Popper.prototype._setupEventListeners = function () {
	        this.state.updateBound = this.update.bind(this);
	        root.addEventListener('resize', this.state.updateBound);

	        if (this._options.boundariesElement !== 'window') {
	            var target = getScrollParent(this._reference);

	            if (target === root.document.body || target === root.document.documentElement) {
	                target = root;
	            }
	            target.addEventListener('scroll', this.state.updateBound);
	        }
	    };

	    Popper.prototype._removeEventListeners = function () {
	        root.removeEventListener('resize', this.state.updateBound);
	        if (this._options.boundariesElement !== 'window') {
	            var target = getScrollParent(this._reference);

	            if (target === root.document.body || target === root.document.documentElement) {
	                target = root;
	            }
	            target.removeEventListener('scroll', this.state.updateBound);
	        }
	        this.state.updateBound = null;
	    };

	    Popper.prototype._getBoundaries = function (data, padding, boundariesElement) {
	        var boundaries = {};
	        var width, height;
	        if (boundariesElement === 'window') {
	            var body = root.document.body,
	                html = root.document.documentElement;

	            height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
	            width = Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);

	            boundaries = {
	                top: 0,
	                right: width,
	                bottom: height,
	                left: 0
	            };
	        } else if (boundariesElement === 'viewport') {
	            var offsetParent = getOffsetParent(this._popper);
	            var scrollParent = getScrollParent(this._popper);
	            var offsetParentRect = getOffsetRect(offsetParent);

	            var scrollTop = data.offsets.popper.position === 'fixed' ? 0 : scrollParent.scrollTop;
	            var scrollLeft = data.offsets.popper.position === 'fixed' ? 0 : scrollParent.scrollLeft;

	            boundaries = {
	                top: 0 - (offsetParentRect.top - scrollTop),
	                right: root.document.documentElement.clientWidth - (offsetParentRect.left - scrollLeft),
	                bottom: root.document.documentElement.clientHeight - (offsetParentRect.top - scrollTop),
	                left: 0 - (offsetParentRect.left - scrollLeft)
	            };
	        } else {
	            if (getOffsetParent(this._popper) === boundariesElement) {
	                boundaries = {
	                    top: 0,
	                    left: 0,
	                    right: boundariesElement.clientWidth,
	                    bottom: boundariesElement.clientHeight
	                };
	            } else {
	                boundaries = getOffsetRect(boundariesElement);
	            }
	        }
	        boundaries.left += padding;
	        boundaries.right -= padding;
	        boundaries.top = boundaries.top + padding;
	        boundaries.bottom = boundaries.bottom - padding;
	        return boundaries;
	    };

	    Popper.prototype.runModifiers = function (data, modifiers, ends) {
	        var modifiersToRun = modifiers.slice();
	        if (ends !== undefined) {
	            modifiersToRun = this._options.modifiers.slice(0, getArrayKeyIndex(this._options.modifiers, ends));
	        }

	        modifiersToRun.forEach(function (modifier) {
	            if (isFunction(modifier)) {
	                data = modifier.call(this, data);
	            }
	        }.bind(this));

	        return data;
	    };

	    Popper.prototype.isModifierRequired = function (requesting, requested) {
	        var index = getArrayKeyIndex(this._options.modifiers, requesting);
	        return !!this._options.modifiers.slice(0, index).filter(function (modifier) {
	            return modifier === requested;
	        }).length;
	    };

	    Popper.prototype.modifiers = {};

	    Popper.prototype.modifiers.applyStyle = function (data) {
	        var styles = {
	            position: data.offsets.popper.position
	        };

	        var left = Math.round(data.offsets.popper.left);
	        var top = Math.round(data.offsets.popper.top);

	        var prefixedProperty;
	        if (this._options.gpuAcceleration && (prefixedProperty = getSupportedPropertyName('transform'))) {
	            styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
	            styles.top = 0;
	            styles.left = 0;
	        } else {
	                styles.left = left;
	                styles.top = top;
	            }

	        Object.assign(styles, data.styles);

	        setStyle(this._popper, styles, { diff: this.diff, changeHorizontal: this.changeHorizontal });

	        this._popper.setAttribute('x-placement', data.placement);

	        if (this.isModifierRequired(this.modifiers.applyStyle, this.modifiers.arrow) && data.offsets.arrow) {
	            setStyle(data.arrowElement, data.offsets.arrow, { diff: this.diff, changeHorizontal: this.changeHorizontal });
	        }

	        return data;
	    };

	    Popper.prototype.modifiers.shift = function (data) {
	        var placement = data.placement;
	        var basePlacement = placement.split('-')[0];
	        var shiftVariation = placement.split('-')[1];

	        if (shiftVariation) {
	            var reference = data.offsets.reference;
	            var popper = getPopperClientRect(data.offsets.popper);

	            var shiftOffsets = {
	                y: {
	                    start: { top: reference.top },
	                    end: { top: reference.top + reference.height - popper.height }
	                },
	                x: {
	                    start: { left: reference.left },
	                    end: { left: reference.left + reference.width - popper.width }
	                }
	            };

	            var axis = ['bottom', 'top'].indexOf(basePlacement) !== -1 ? 'x' : 'y';

	            data.offsets.popper = Object.assign(popper, shiftOffsets[axis][shiftVariation]);
	        }

	        return data;
	    };

	    Popper.prototype.modifiers.preventOverflow = function (data) {
	        var order = this._options.preventOverflowOrder;
	        var popper = getPopperClientRect(data.offsets.popper);
	        var me = this;
	        var check = {
	            left: function left() {
	                var left = popper.left;
	                if (popper.left < data.boundaries.left) {
	                    left = Math.max(popper.left, data.boundaries.left);
	                }
	                return { left: left };
	            },
	            right: function right() {
	                var left = popper.left;
	                if (popper.right > data.boundaries.right) {
	                    me.changeHorizontal = true;
	                    left = Math.min(popper.left, data.boundaries.right - popper.width);
	                }
	                return { left: left };
	            },
	            top: function top() {
	                var top = popper.top;
	                if (popper.top < data.boundaries.top) {
	                    top = Math.max(popper.top, data.boundaries.top);
	                }
	                return { top: top };
	            },
	            bottom: function bottom() {
	                var top = popper.top;
	                if (popper.bottom > data.boundaries.bottom) {
	                    top = Math.min(popper.top, data.boundaries.bottom - popper.height);
	                }
	                return { top: top };
	            }
	        };

	        order.forEach(function (direction) {
	            data.offsets.popper = Object.assign(popper, check[direction]());
	        });

	        return data;
	    };

	    Popper.prototype.modifiers.keepTogether = function (data) {
	        var popper = getPopperClientRect(data.offsets.popper);
	        var reference = data.offsets.reference;
	        var f = Math.floor;

	        if (popper.right < f(reference.left)) {
	            data.offsets.popper.left = f(reference.left) - popper.width;
	        }
	        if (popper.left > f(reference.right)) {
	            data.offsets.popper.left = f(reference.right);
	        }
	        if (popper.bottom < f(reference.top)) {
	            data.offsets.popper.top = f(reference.top) - popper.height;
	        }
	        if (popper.top > f(reference.bottom)) {
	            data.offsets.popper.top = f(reference.bottom);
	        }

	        return data;
	    };

	    Popper.prototype.modifiers.flip = function (data) {

	        if (!this.isModifierRequired(this.modifiers.flip, this.modifiers.preventOverflow)) {
	            console.warn('WARNING: preventOverflow modifier is required by flip modifier in order to work, be sure to include it before flip!');
	            return data;
	        }

	        if (data.flipped && data.placement === data._originalPlacement) {
	            return data;
	        }

	        var placement = data.placement.split('-')[0];
	        var placementOpposite = getOppositePlacement(placement);
	        var variation = data.placement.split('-')[1] || '';

	        var flipOrder = [];
	        if (this._options.flipBehavior === 'flip') {
	            flipOrder = [placement, placementOpposite];
	        } else {
	            flipOrder = this._options.flipBehavior;
	        }

	        flipOrder.forEach(function (step, index) {
	            if (placement !== step || flipOrder.length === index + 1) {
	                return;
	            }

	            placement = data.placement.split('-')[0];
	            placementOpposite = getOppositePlacement(placement);

	            var popperOffsets = getPopperClientRect(data.offsets.popper);

	            var a = ['right', 'bottom'].indexOf(placement) !== -1;

	            if (a && Math.floor(data.offsets.reference[placement]) > Math.floor(popperOffsets[placementOpposite]) || !a && Math.floor(data.offsets.reference[placement]) < Math.floor(popperOffsets[placementOpposite])) {
	                if (this.topOffset != undefined) {
	                    return;
	                }
	                data.flipped = true;
	                data.placement = flipOrder[index + 1];
	                if (variation) {
	                    data.placement += '-' + variation;
	                }
	                data.offsets.popper = this._getOffsets(this._popper, this._reference, data.placement).popper;

	                data = this.runModifiers(data, this._options.modifiers, this._flip);
	            }
	        }.bind(this));
	        return data;
	    };

	    Popper.prototype.modifiers.offset = function (data) {
	        var offset = this._options.offset;
	        var popper = data.offsets.popper;

	        if (data.placement.indexOf('left') !== -1) {
	            popper.top -= offset;
	        } else if (data.placement.indexOf('right') !== -1) {
	            popper.top += offset;
	        } else if (data.placement.indexOf('top') !== -1) {
	            popper.left -= offset;
	        } else if (data.placement.indexOf('bottom') !== -1) {
	            popper.left += offset;
	        }
	        if (this.topOffset != undefined) {
	            popper.top -= this.topOffset;
	        }
	        return data;
	    };

	    Popper.prototype.modifiers.arrow = function (data) {
	        var arrow = this._options.arrowElement;

	        if (typeof arrow === 'string') {
	            arrow = this._popper.querySelector(arrow);
	        }

	        if (!arrow) {
	            return data;
	        }

	        if (!this._popper.contains(arrow)) {
	            console.warn('WARNING: `arrowElement` must be child of its popper element!');
	            return data;
	        }

	        if (!this.isModifierRequired(this.modifiers.arrow, this.modifiers.keepTogether)) {
	            console.warn('WARNING: keepTogether modifier is required by arrow modifier in order to work, be sure to include it before arrow!');
	            return data;
	        }

	        var arrowStyle = {};
	        var placement = data.placement.split('-')[0];
	        var popper = getPopperClientRect(data.offsets.popper);
	        var reference = data.offsets.reference;
	        var isVertical = ['left', 'right'].indexOf(placement) !== -1;

	        var len = isVertical ? 'height' : 'width';
	        var side = isVertical ? 'top' : 'left';
	        var altSide = isVertical ? 'left' : 'top';
	        var opSide = isVertical ? 'bottom' : 'right';
	        var arrowSize = getOuterSizes(arrow)[len];

	        if (reference[opSide] - arrowSize < popper[side]) {
	            data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowSize);
	        }

	        if (reference[side] + arrowSize > popper[opSide]) {
	            data.offsets.popper[side] += reference[side] + arrowSize - popper[opSide];
	        }

	        var center = reference[side] + reference[len] / 2 - arrowSize / 2;

	        var sideValue = center - popper[side];

	        sideValue = Math.max(Math.min(popper[len] - arrowSize, sideValue), 0);
	        arrowStyle[side] = sideValue;
	        arrowStyle[altSide] = '';

	        data.offsets.arrow = arrowStyle;
	        data.arrowElement = arrow;

	        return data;
	    };

	    function getOuterSizes(element) {
	        var _display = element.style.display,
	            _visibility = element.style.visibility;
	        element.style.display = 'block';element.style.visibility = 'hidden';
	        var calcWidthToForceRepaint = element.offsetWidth;

	        var styles = root.getComputedStyle(element);
	        var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
	        var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
	        var result = { width: element.offsetWidth + y, height: element.offsetHeight + x };

	        element.style.display = _display;element.style.visibility = _visibility;
	        return result;
	    }

	    function getOppositePlacement(placement) {
	        var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
	        return placement.replace(/left|right|bottom|top/g, function (matched) {
	            return hash[matched];
	        });
	    }

	    function getPopperClientRect(popperOffsets) {
	        var offsets = Object.assign({}, popperOffsets);
	        offsets.right = offsets.left + offsets.width;
	        offsets.bottom = offsets.top + offsets.height;
	        return offsets;
	    }

	    function getArrayKeyIndex(arr, keyToFind) {
	        var i = 0,
	            key;
	        for (key in arr) {
	            if (arr[key] === keyToFind) {
	                return i;
	            }
	            i++;
	        }
	        return null;
	    }

	    function getStyleComputedProperty(element, property) {
	        var css = root.getComputedStyle(element, null);
	        return css[property];
	    }

	    function getOffsetParent(element) {
	        var offsetParent = element.offsetParent;
	        return offsetParent === root.document.body || !offsetParent ? root.document.documentElement : offsetParent;
	    }

	    function getScrollParent(element) {
	        if (element === root.document) {
	            if (root.document.body.scrollTop) {
	                return root.document.body;
	            } else {
	                return root.document.documentElement;
	            }
	        }

	        if (['scroll', 'auto'].indexOf(getStyleComputedProperty(element, 'overflow')) !== -1 || ['scroll', 'auto'].indexOf(getStyleComputedProperty(element, 'overflow-x')) !== -1 || ['scroll', 'auto'].indexOf(getStyleComputedProperty(element, 'overflow-y')) !== -1) {
	            return element === root.document.body ? getScrollParent(element.parentNode) : element;
	        }
	        return element.parentNode ? getScrollParent(element.parentNode) : element;
	    }

	    function isFixed(element) {
	        if (element === root.document.body) {
	            return false;
	        }
	        if (getStyleComputedProperty(element, 'position') === 'fixed') {
	            return true;
	        }
	        return element.parentNode ? isFixed(element.parentNode) : element;
	    }

	    function setStyle(element, styles, obj) {

	        function is_numeric(n) {
	            return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
	        }
	        var me = obj;
	        Object.keys(styles).forEach(function (prop) {
	            var unit = '';

	            if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && is_numeric(styles[prop])) {
	                unit = 'px';
	            }

	            if (me.diff != 0 && !(0, _class.hasClass)(element, 'popper__arrow')) {
	                if (prop == 'left') {
	                    if (me.changeHorizontal == true) {
	                        styles[prop] = styles[prop] + me.diff;
	                    } else {
	                        styles[prop] = styles[prop] - me.diff;
	                    }
	                }
	            }
	            element.style[prop] = styles[prop] + unit;
	        });
	    }

	    function isFunction(functionToCheck) {
	        var getType = {};
	        return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
	    }

	    function getOffsetRect(element) {
	        var elementRect = {
	            width: element.offsetWidth,
	            height: element.offsetHeight,
	            left: element.offsetLeft,
	            top: element.offsetTop
	        };

	        elementRect.right = elementRect.left + elementRect.width;
	        elementRect.bottom = elementRect.top + elementRect.height;

	        return elementRect;
	    }

	    function getBoundingClientRect(element) {
	        var rect = element.getBoundingClientRect();

	        var isIE = navigator.userAgent.indexOf("MSIE") != -1;

	        var rectTop = isIE && element.tagName === 'HTML' ? -element.scrollTop : rect.top;

	        var rect = element.getBoundingClientRect();
	        return {
	            left: rect.left,
	            top: rectTop,
	            right: rect.right,
	            bottom: rect.bottom,
	            width: rect.right - rect.left,
	            height: rect.bottom - rectTop
	        };
	    }

	    function getOffsetRectRelativeToCustomParent(element, parent, fixed) {
	        var elementRect = getBoundingClientRect(element);
	        var parentRect = getBoundingClientRect(parent);

	        if (fixed) {
	            var scrollParent = getScrollParent(parent);
	            parentRect.top += scrollParent.scrollTop;
	            parentRect.bottom += scrollParent.scrollTop;
	            parentRect.left += scrollParent.scrollLeft;
	            parentRect.right += scrollParent.scrollLeft;
	        }

	        var rect = {
	            top: elementRect.top - parentRect.top,
	            left: elementRect.left - parentRect.left,
	            bottom: elementRect.top - parentRect.top + elementRect.height,
	            right: elementRect.left - parentRect.left + elementRect.width,
	            width: elementRect.width,
	            height: elementRect.height
	        };
	        return rect;
	    }

	    function getSupportedPropertyName(property) {
	        var prefixes = ['', 'ms', 'webkit', 'moz', 'o'];

	        for (var i = 0; i < prefixes.length; i++) {
	            var toCheck = prefixes[i] ? prefixes[i] + property.charAt(0).toUpperCase() + property.slice(1) : property;
	            if (typeof root.document.body.style[toCheck] !== 'undefined') {
	                return toCheck;
	            }
	        }
	        return null;
	    }

	    if (!Object.assign) {
	        Object.defineProperty(Object, 'assign', {
	            enumerable: false,
	            configurable: true,
	            writable: true,
	            value: function value(target) {
	                if (target === undefined || target === null) {
	                    throw new TypeError('Cannot convert first argument to object');
	                }

	                var to = Object(target);
	                for (var i = 1; i < arguments.length; i++) {
	                    var nextSource = arguments[i];
	                    if (nextSource === undefined || nextSource === null) {
	                        continue;
	                    }
	                    nextSource = Object(nextSource);

	                    var keysArray = Object.keys(nextSource);
	                    for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
	                        var nextKey = keysArray[nextIndex];
	                        var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
	                        if (desc !== undefined && desc.enumerable) {
	                            to[nextKey] = nextSource[nextKey];
	                        }
	                    }
	                }
	                return to;
	            }
	        });
	    }

	    return Popper;
	});

/***/ }),

/***/ 269:
/***/ (function(module, exports) {

	var trim = function (string) {
	  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
	};

	var hasClass = function (el, cls) {
	  if (!el || !cls) return false;
	  if (cls.indexOf(' ') != -1) throw new Error('className should not contain space.');
	  if (el.classList) {
	    return el.classList.contains(cls);
	  } else {
	    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
	  }
	};

	var addClass = function (el, cls) {
	  if (!el) return;
	  var curClass = el.className;
	  var classes = (cls || '').split(' ');

	  for (var i = 0, j = classes.length; i < j; i++) {
	    var clsName = classes[i];
	    if (!clsName) continue;

	    if (el.classList) {
	      el.classList.add(clsName);
	    } else {
	      if (!hasClass(el, clsName)) {
	        curClass += ' ' + clsName;
	      }
	    }
	  }
	  if (!el.classList) {
	    el.className = curClass;
	  }
	};

	var removeClass = function (el, cls) {
	  if (!el || !cls) return;
	  var classes = cls.split(' ');
	  var curClass = ' ' + el.className + ' ';

	  for (var i = 0, j = classes.length; i < j; i++) {
	    var clsName = classes[i];
	    if (!clsName) continue;

	    if (el.classList) {
	      el.classList.remove(clsName);
	    } else {
	      if (hasClass(el, clsName)) {
	        curClass = curClass.replace(' ' + clsName + ' ', ' ');
	      }
	    }
	  }
	  if (!el.classList) {
	    el.className = trim(curClass);
	  }
	};

	module.exports = {
	  hasClass: hasClass,
	  addClass: addClass,
	  removeClass: removeClass
	};

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _input = __webpack_require__(276);

	var _input2 = _interopRequireDefault(_input);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_input2.default.install = function (Vue) {
	  Vue.component(_input2.default.name, _input2.default);
	};

	exports.default = _input2.default;

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(277),
	  /* template */
	  __webpack_require__(286),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)

	module.exports = Component.exports


/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _util = __webpack_require__(278);

	var _emitter = __webpack_require__(239);

	var _emitter2 = _interopRequireDefault(_emitter);

	var _calcTextareaHeight = __webpack_require__(279);

	var _calcTextareaHeight2 = _interopRequireDefault(_calcTextareaHeight);

	var _inputDropdown = __webpack_require__(280);

	var _inputDropdown2 = _interopRequireDefault(_inputDropdown);

	var _class = __webpack_require__(269);

	var _jquery = __webpack_require__(283);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(284);

	exports.default = {
	  name: 'HyInput',
	  componentName: 'hy-input',
	  mixins: [_emitter2.default],

	  components: {
	    ElInputMenu: _inputDropdown2.default
	  },

	  props: {
	    value: [String, Number],
	    placeholder: {
	      type: String,
	      default: ''
	    },
	    contentalign: {
	      type: String,
	      default: 'left'
	    },
	    id: {
	      type: String,
	      default: ""
	    },
	    formid: {
	      type: String,
	      default: ""
	    },
	    visible: {
	      type: Boolean,
	      default: true
	    },
	    icontype: {
	      type: String,
	      default: ""
	    },
	    size: {
	      type: String,
	      default: ''
	    },
	    funcreadonly: {
	      type: Boolean,
	      default: false
	    },
	    readonly: {
	      type: Boolean,
	      default: false
	    },
	    showtipvalidate: {
	      type: Boolean,
	      default: false
	    },
	    width: {
	      type: [String, Number],
	      default: 0
	    },
	    lazy: {
	      type: Boolean,
	      default: true
	    },
	    icon: {
	      type: String,
	      default: ''
	    },
	    iconSpace: {
	      type: Number,
	      default: 0
	    },
	    type: {
	      type: String,
	      default: 'text'
	    },
	    upload: {
	      type: Boolean,
	      default: false
	    },
	    name: {
	      type: String,
	      default: ''
	    },
	    number: {
	      type: Boolean,
	      default: false
	    },
	    dispatchFocus: {
	      type: Boolean,
	      default: true
	    },
	    autosize: {
	      type: [Boolean, Object],
	      default: false
	    },
	    rowspan: {
	      type: [Number, String],
	      default: 2
	    },
	    autocomplete: {
	      type: String,
	      default: 'off'
	    },
	    forminput: {
	      type: Boolean,
	      default: false
	    },
	    height: {
	      type: Number,
	      default: -1
	    },

	    showhistory: {
	      type: Boolean,
	      default: false
	    },


	    triggervalidate: {
	      type: Boolean,
	      default: true
	    },
	    status: {
	      type: Boolean,
	      default: false
	    },
	    ismobile: {
	      type: Boolean,
	      default: false
	    },
	    maxlength: Number,
	    minlength: Number,
	    onIconClick: Function,
	    onchange: {
	      type: String,
	      default: ''
	    }
	  },

	  methods: {
	    changeInputWidth: function changeInputWidth(width) {
	      this.$refs.input.style.width = width + "px";
	    },
	    focus: function focus() {
	      var _this = this;

	      setTimeout(function () {
	        var className = '.el-input__inner';
	        if (_this.type == 'textarea') {
	          className = '.el-textarea__inner';
	        }
	        var element = _this.$el.querySelector(className);
	        if (element != undefined) {
	          element.value = "";
	          element.focus();
	          element.value = _this.currentValue;
	        }
	      }, 0);
	    },
	    getComponentInput: function getComponentInput() {
	      var className = '.el-input__inner';
	      if (this.type == 'textarea') {
	        className = '.el-textarea__inner';
	      }
	      var element = this.$el.querySelector(className);
	      return element;
	    },
	    enterHandler: function enterHandler() {
	      this.isMouseEnter = true;
	      if (this.showtipvalidate) {
	        this.dispatch('form-item', 'el.form.mouseover');
	      }
	    },
	    leaveHandler: function leaveHandler() {
	      this.isMouseEnter = false;
	      if (this.showtipvalidate) {
	        this.dispatch('form-item', 'el.form.mouseout');
	      }
	    },
	    handleBlur: function handleBlur(event) {
	      var that = this;
	      setTimeout(function () {
	        that.$emit('blur', that.currentValue);
	        if (that.triggervalidate) {
	          that.dispatch('form-item', 'el.form.blur', [that.currentValue]);
	        }
	      }, 0);
	    },
	    inputSelect: function inputSelect() {
	      this.$refs.input.focus();
	    },
	    handleFocus: function handleFocus(ev) {

	      this.$emit('focus', this.currentValue);

	      if (this.dispatchFocus) {
	        this.dispatch('form-item', 'el.form.focus');
	      }
	    },
	    handleKeydown: function handleKeydown(ev) {
	      this.$emit('keydown', ev.target.value, ev);
	    },
	    handleKeyup: function handleKeyup(ev) {

	      this.$emit('keyup', ev.target.value, ev);
	    },
	    navigateOptions: function navigateOptions(direction) {
	      var item = this.$refs.li;
	      var liLength = this.$refs.li.length;
	      (0, _class.removeClass)(item[liLength - 1], "hover");
	      (0, _class.removeClass)(item[this.hoverIndex], "hover");

	      if (direction === 'next') {
	        this.hoverIndex++;

	        if (this.hoverIndex == liLength) {
	          this.hoverIndex = 0;
	        }
	        (0, _class.addClass)(item[this.hoverIndex], "hover");

	        if (this.hoverIndex == liLength - 1) {
	          this.hoverIndex = -1;
	        }

	        this.resetScrollTop();
	      }

	      if (direction === 'prev') {

	        if (this.hoverIndex == -1) {
	          this.hoverIndex = liLength;
	        }
	        if (this.hoverIndex == 0) {
	          this.hoverIndex = liLength;
	        }
	        this.hoverIndex--;
	        (0, _class.addClass)(item[this.hoverIndex], "hover");

	        this.resetScrollTop();
	      }
	    },
	    selectOption: function selectOption() {
	      var length = this.searchList.length;

	      if (this.hoverIndex == -1) {
	        if (this.searchList[length - 1] == undefined) {
	          return;
	        }
	        this.currentValue = this.searchList[length - 1].trim();
	      } else {
	        this.currentValue = this.searchList[this.hoverIndex].trim();
	      }
	      this.hoverIndex = -1;
	      this.searchList = [];
	    },
	    resetScrollTop: function resetScrollTop() {

	      var maxShowCount = this.$refs.ul.clientHeight / this.itemHeight;
	      var diff = this.hoverIndex - maxShowCount;
	      this.$refs.ul.scrollTop = diff * this.itemHeight + 80;
	      if (this.hoverIndex == -1) {
	        this.$refs.ul.scrollTop = -diff * this.itemHeight + 80;
	      }
	    },
	    handleInput: function handleInput(ev) {
	      this.currentValue = ev.target.value;
	    },
	    handleIconClick: function handleIconClick(ev) {
	      if (this.onIconClick) {
	        this.onIconClick(ev);
	      }
	      this.$emit('iconclick', ev);
	    },
	    setValue: function setValue(val) {
	      if (val == undefined) {
	        val = "";
	      }
	      this.currentValue = val;
	    },
	    getSelectedValue: function getSelectedValue() {
	      return this.currentValue;
	    },
	    getSelectedLabel: function getSelectedLabel() {
	      return this.currentValue;
	    },
	    changeData: function changeData(data) {
	      this.currentValue = data;
	      this.searchList = [];
	    },
	    deleteItem: function deleteItem(item, index) {
	      this.searchList.splice(index, 1);
	      var localData = JSON.parse(this.localStorage.getItem(this.name));
	      for (var i = 0; i < localData.length; i++) {
	        if (localData[i] === item) {
	          localData.splice(i, 1);
	          break;
	        }
	      }

	      this.localStorage.setItem(this.name, JSON.stringify(localData));
	    },
	    runCurrentValueChange: function runCurrentValueChange(val) {
	      var _this2 = this;

	      if (this.forminput) {
	        this.dispatch('form', 'setRecordValue', [this.name, this.currentValue]);
	      }
	      this.$emit('input', val);
	      setTimeout(function () {
	        if (_this2.onchange !== "") {
	          (0, _util.runGlobalCallback)(_this2.onchange, val);
	        } else {
	          _this2.$emit('change', val);
	        }
	      }, 0);
	      if (this.triggervalidate) {
	        this.dispatch('form-item', 'el.form.change', [val]);
	      }
	    }
	  },

	  data: function data() {
	    return {
	      currentValue: this.value,
	      isMouseEnter: false,

	      localStorage: window.localStorage,
	      searchList: [],
	      hoverIndex: -1,
	      keyHover: false,
	      ishistory: this.type == 'password' ? false : this.showhistory,
	      itemHeight: 30,
	      disabled: false,
	      valueChangeFlag: false };
	  },
	  created: function created() {
	    if (this.ismobile) {
	      this.disabled = true;
	    }
	    if (this.id != "") {
	      window[this.id] = this;
	    }
	    if (this.upload) {
	      HyUploadComponents.push(this);
	    }
	    this.$on('inputSelect', this.inputSelect);
	  },
	  destroyed: function destroyed() {
	    if (this.id != "") {
	      window[this.id] = null;
	      delete window[this.id];
	    }
	  },
	  mounted: function mounted() {

	    if (this.currentValue !== "") {
	      this.dispatch('form-item', 'el.form.change', [this.currentValue]);
	    }
	  },


	  computed: {
	    containerSize: function containerSize() {
	      var style = {};
	      if (this.width !== 0) {
	        var width = this.width + "";
	        if (width.indexOf("%") == -1) {
	          width = width + "px";
	        }
	        style.width = width;
	      }
	      return style;
	    },
	    validating: function validating() {
	      return this.$parent.validating;
	    },
	    iconStyle: function iconStyle() {
	      var style = {};
	      if (this.iconSpace !== 0) {
	        style.right = this.iconSpace + "px";
	      }
	      return style;
	    },
	    textareaStyle: function textareaStyle() {
	      var style = {};
	      var textareaHeight = 36;

	      var rows = parseInt(this.rowspan);
	      if (this.size == 'large') {
	        textareaHeight = 42;
	      } else if (this.size == 'small') {
	        textareaHeight = 30;
	      } else if (this.size == 'mini') {
	        textareaHeight = 22;
	      }
	      textareaHeight = textareaHeight * rows + 10 * (rows - 1);
	      style.height = textareaHeight + 'px';
	      if (this.height !== -1) {
	        style.height = this.height + 'px';
	      }
	      return style;
	    },
	    inputreadonly: function inputreadonly() {
	      if (this.readonly || this.funcreadonly) {
	        this.ishistory = false;
	        return true;
	      } else {
	        this.ishistory = this.type == 'password' ? false : this.showhistory;
	        return false;
	      }
	    }
	  },

	  watch: {
	    'value': function value(val, oldValue) {
	      this.currentValue = val;
	    },
	    'currentValue': function currentValue(val) {
	      if (this.ishistory) {
	        this.valueChangeFlag = true;
	      } else {
	        this.runCurrentValueChange(val);
	      }
	    }
	  }
	};

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.isFirefox = exports.runGlobalCallback = exports.changeUrlTabtime = exports.changeURLArg = exports.arrayFind = exports.arrayFindIndex = exports.valueEquals = exports.generateId = exports.getValueByPath = undefined;
	exports.noop = noop;
	exports.hasOwn = hasOwn;
	exports.toObject = toObject;
	exports.getPropByPath = getPropByPath;
	exports.rafThrottle = rafThrottle;

	var _vue = __webpack_require__(238);

	var _vue2 = _interopRequireDefault(_vue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var hasOwnProperty = Object.prototype.hasOwnProperty;
	function noop() {};

	function hasOwn(obj, key) {
	  return hasOwnProperty.call(obj, key);
	};

	function extend(to, _from) {
	  for (var key in _from) {
	    to[key] = _from[key];
	  }
	  return to;
	};

	function toObject(arr) {
	  var res = {};
	  for (var i = 0; i < arr.length; i++) {
	    if (arr[i]) {
	      extend(res, arr[i]);
	    }
	  }
	  return res;
	};

	var getValueByPath = exports.getValueByPath = function getValueByPath(object, prop) {
	  prop = prop || '';
	  var paths = prop.split('.');
	  var current = object;
	  var result = null;
	  for (var i = 0, j = paths.length; i < j; i++) {
	    var path = paths[i];
	    if (!current) break;

	    if (i === j - 1) {
	      result = current[path];
	      break;
	    }
	    current = current[path];
	  }
	  return result;
	};

	function getPropByPath(obj, path, strict) {
	  var tempObj = obj;
	  path = path.replace(/\[(\w+)\]/g, '.$1');
	  path = path.replace(/^\./, '');

	  var keyArr = path.split('.');
	  var i = 0;
	  for (var len = keyArr.length; i < len - 1; ++i) {
	    if (!tempObj && !strict) break;
	    var key = keyArr[i];
	    if (key in tempObj) {
	      tempObj = tempObj[key];
	    } else {
	      if (strict) {
	        throw new Error('please transfer a valid prop path to form item!');
	      }
	      break;
	    }
	  }
	  return {
	    o: tempObj,
	    k: keyArr[i],
	    v: tempObj ? tempObj[keyArr[i]] : null
	  };
	};

	var generateId = exports.generateId = function generateId() {
	  return Math.floor(Math.random() * 10000);
	};

	var valueEquals = exports.valueEquals = function valueEquals(a, b) {
	  if (a === b) return true;
	  if (!(a instanceof Array)) return false;
	  if (!(b instanceof Array)) return false;
	  if (a.length !== b.length) return false;
	  for (var i = 0; i !== a.length; ++i) {
	    if (a[i] !== b[i]) return false;
	  }
	  return true;
	};

	var arrayFindIndex = exports.arrayFindIndex = function arrayFindIndex(arr, pred) {
	  for (var i = 0; i !== arr.length; ++i) {
	    if (pred(arr[i])) {
	      return i;
	    }
	  }
	  return -1;
	};
	var arrayFind = exports.arrayFind = function arrayFind(arr, pred) {
	  var idx = arrayFindIndex(arr, pred);
	  return idx !== -1 ? arr[idx] : undefined;
	};

	var changeURLArg = exports.changeURLArg = function changeURLArg(url, arg, arg_val) {
	  var pattern = arg + '=([^&]*)';
	  var replaceText = arg + '=' + arg_val;
	  if (url.match(pattern)) {
	    var tmp = '/(' + arg + '=)([^&]*)/gi';
	    tmp = url.replace(eval(tmp), replaceText);
	    return tmp;
	  } else {
	    if (url.match('[\?]')) {
	      return url + '&' + replaceText;
	    } else {
	      return url + '?' + replaceText;
	    }
	  }
	  return url + '\n' + arg + '\n' + arg_val;
	};

	var changeUrlTabtime = exports.changeUrlTabtime = function changeUrlTabtime(url) {
	  if (url.indexOf('?') == -1) {
	    url = url + "?tabTime=" + new Date().getTime();
	  } else {
	    if (url.indexOf('tabTime') == -1) {
	      url = url + "&tabTime=" + new Date().getTime();
	    } else {
	      url = changeURLArg(url, 'tabTime', new Date().getTime());
	    }
	  }
	  return url;
	};

	var runGlobalCallback = exports.runGlobalCallback = function runGlobalCallback(_runGlobalCallback, value1, value2) {
	  var isRunGlobalCallback = _runGlobalCallback;
	  if (_runGlobalCallback.indexOf("(") != -1) {
	    isRunGlobalCallback = _runGlobalCallback.substring(0, _runGlobalCallback.indexOf("("));
	  }
	  if (typeof window[isRunGlobalCallback] === 'undefined') {
	    HyMessageBox.alert(isRunGlobalCallback + '\u65B9\u6CD5\u6CA1\u6709\u5B9A\u4E49\uFF0C\u8BF7\u5728\u5168\u5C40\u4E0A\u5B9A\u4E49');
	    return;
	  }

	  var initRunGlobalCallback = _runGlobalCallback;
	  if (_runGlobalCallback.indexOf("(") != -1) {
	    _runGlobalCallback = _runGlobalCallback.substring(0, _runGlobalCallback.indexOf("("));
	    var params = initRunGlobalCallback.substring(initRunGlobalCallback.indexOf("(") + 1, initRunGlobalCallback.length - 1);
	    if (params != "") {
	      var paramsArr = params.split(",");
	      if (value1 != undefined) {
	        paramsArr.push(value1);
	      }
	      if (value2 != undefined) {
	        paramsArr.push(value2);
	      }
	      window[_runGlobalCallback].apply(window, paramsArr);
	    } else {
	      window[_runGlobalCallback].call(window, value1, value2);
	    }
	  } else {
	    window[_runGlobalCallback].call(window, value1, value2);
	  }
	};

	var isFirefox = exports.isFirefox = function isFirefox() {
	  return !_vue2.default.prototype.$isServer && !!window.navigator.userAgent.match(/firefox/i);
	};

	function rafThrottle(fn) {
	  var locked = false;
	  return function () {
	    var _this = this;

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    if (locked) return;
	    locked = true;
	    window.requestAnimationFrame(function (_) {
	      fn.apply(_this, args);
	      locked = false;
	    });
	  };
	}

/***/ }),

/***/ 279:
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = calcTextareaHeight;
	var hiddenTextarea = void 0;

	var HIDDEN_STYLE = '\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important\n';

	var CONTEXT_STYLE = ['letter-spacing', 'line-height', 'padding-top', 'padding-bottom', 'font-family', 'font-weight', 'font-size', 'text-rendering', 'text-transform', 'width', 'text-indent', 'padding-left', 'padding-right', 'border-width', 'box-sizing'];

	function calculateNodeStyling(node) {
	  var style = window.getComputedStyle(node);

	  var boxSizing = style.getPropertyValue('box-sizing');

	  var paddingSize = parseFloat(style.getPropertyValue('padding-bottom')) + parseFloat(style.getPropertyValue('padding-top'));

	  var borderSize = parseFloat(style.getPropertyValue('border-bottom-width')) + parseFloat(style.getPropertyValue('border-top-width'));

	  var contextStyle = CONTEXT_STYLE.map(function (name) {
	    return name + ':' + style.getPropertyValue(name);
	  }).join(';');

	  return { contextStyle: contextStyle, paddingSize: paddingSize, borderSize: borderSize, boxSizing: boxSizing };
	}

	function calcTextareaHeight(targetNode) {
	  var minRows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	  var maxRows = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

	  if (!hiddenTextarea) {
	    hiddenTextarea = document.createElement('textarea');
	    document.body.appendChild(hiddenTextarea);
	  }

	  var _calculateNodeStyling = calculateNodeStyling(targetNode),
	      paddingSize = _calculateNodeStyling.paddingSize,
	      borderSize = _calculateNodeStyling.borderSize,
	      boxSizing = _calculateNodeStyling.boxSizing,
	      contextStyle = _calculateNodeStyling.contextStyle;

	  hiddenTextarea.setAttribute('style', contextStyle + ';' + HIDDEN_STYLE);
	  hiddenTextarea.value = targetNode.value || targetNode.placeholder || '';

	  var height = hiddenTextarea.scrollHeight;

	  if (boxSizing === 'border-box') {
	    height = height + borderSize;
	  } else if (boxSizing === 'content-box') {
	    height = height - paddingSize;
	  }

	  hiddenTextarea.value = '';
	  var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;

	  if (minRows !== null) {
	    var minHeight = singleRowHeight * minRows;
	    if (boxSizing === 'border-box') {
	      minHeight = minHeight + paddingSize + borderSize;
	    }
	    height = Math.max(minHeight, height);
	  }
	  if (maxRows !== null) {
	    var maxHeight = singleRowHeight * maxRows;
	    if (boxSizing === 'border-box') {
	      maxHeight = maxHeight + paddingSize + borderSize;
	    }
	    height = Math.min(maxHeight, height);
	  }

	  return { height: height + 'px' };
	};

/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(281),
	  /* template */
	  __webpack_require__(282),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)

	module.exports = Component.exports


/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vuePopper = __webpack_require__(260);

	var _vuePopper2 = _interopRequireDefault(_vuePopper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'hy-input-dropdown',

	  componentName: 'input-dropdown',

	  mixins: [_vuePopper2.default],

	  props: {
	    placement: {
	      default: 'bottom-start'
	    },

	    boundariesPadding: {
	      default: 0
	    },

	    options: {
	      default: function _default() {
	        return {
	          forceAbsolute: true,
	          gpuAcceleration: false
	        };
	      }
	    }
	  },

	  data: function data() {
	    return {
	      minWidth: ''
	    };
	  },

	  methods: {
	    enterHandler: function enterHandler() {},
	    leaveHandler: function leaveHandler() {}
	  },

	  watch: {},

	  mounted: function mounted() {
	    this.referenceElm = this.$parent.$refs.input;
	    this.minWidth = this.$parent.$el.getBoundingClientRect().width + 'px';
	    this.$parent.popperElm = this.popperElm = this.$el;
	    this.$on('updatePopper', this.updatePopper);
	    this.$on('destroyPopper', this.destroyPopper);
	  }
	};

/***/ }),

/***/ 282:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "el-input-history-container",
	    style: ({
	      minWidth: _vm.minWidth
	    }),
	    on: {
	      "mouseenter": _vm.enterHandler,
	      "mouseleave": _vm.leaveHandler
	    }
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}

/***/ }),

/***/ 283:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_283__;

/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(285);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js!../../node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"extract\":true,\"remove\":true}!../../node_modules/style-loader/index.js!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js?sourceMap!./input.less", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js!../../node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"extract\":true,\"remove\":true}!../../node_modules/style-loader/index.js!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js?sourceMap!./input.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ }),

/***/ 286:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.visible),
	      expression: "visible"
	    }],
	    class: [
	      _vm.type === 'textarea' ? 'el-textarea' : 'el-input',
	      _vm.size ? 'el-input-' + _vm.size : '',
	      _vm.contentalign ? 'el-input-' + _vm.contentalign : '',
	      {
	        'is-disabled': _vm.readonly,
	        'el-input-group': _vm.$slots.prepend || _vm.$slots.append
	      }
	    ],
	    style: ([_vm.containerSize]),
	    on: {
	      "mouseenter": _vm.enterHandler,
	      "mouseleave": _vm.leaveHandler
	    }
	  }, [(_vm.type !== 'textarea') ? [(_vm.$slots.prepend) ? _c('div', {
	    staticClass: "el-input-group__prepend"
	  }, [_vm._t("prepend")], 2) : _vm._e(), _vm._v(" "), _vm._t("icon", [(_vm.icon) ? _c('span', {
	    staticClass: "el-input__icon__container",
	    style: (_vm.iconStyle)
	  }, [_c('i', {
	    staticClass: "el-input__icon__select",
	    class: [
	      'el-icon-' + _vm.icon,
	      _vm.onIconClick ? 'is-clickable' : ''
	    ],
	    on: {
	      "click": _vm.handleIconClick
	    }
	  })]) : _vm._e()]), _vm._v(" "), (_vm.type == 'password') ? [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.currentValue),
	      expression: "currentValue"
	    }],
	    ref: "input",
	    staticClass: "el-input__inner",
	    attrs: {
	      "type": "password",
	      "placeholder": _vm.placeholder,
	      "readonly": _vm.inputreadonly,
	      "number": _vm.number,
	      "disabled": _vm.disabled,
	      "maxlength": _vm.maxlength,
	      "minlength": _vm.minlength,
	      "id": _vm.id || _vm.formid
	    },
	    domProps: {
	      "value": (_vm.currentValue)
	    },
	    on: {
	      "focus": _vm.handleFocus,
	      "blur": _vm.handleBlur,
	      "keyup": _vm.handleKeyup,
	      "keydown": _vm.handleKeydown,
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.currentValue = $event.target.value
	      }
	    }
	  })] : [(!_vm.lazy) ? _c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.currentValue),
	      expression: "currentValue"
	    }],
	    ref: "input",
	    staticClass: "el-input__inner",
	    attrs: {
	      "type": "text",
	      "placeholder": _vm.placeholder,
	      "readonly": _vm.inputreadonly,
	      "number": _vm.number,
	      "maxlength": _vm.maxlength,
	      "minlength": _vm.minlength,
	      "disabled": _vm.disabled,
	      "id": _vm.id || _vm.formid,
	      "autocomplete": _vm.autocomplete
	    },
	    domProps: {
	      "value": (_vm.currentValue)
	    },
	    on: {
	      "focus": _vm.handleFocus,
	      "blur": _vm.handleBlur,
	      "keyup": _vm.handleKeyup,
	      "keydown": _vm.handleKeydown,
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.currentValue = $event.target.value
	      }
	    }
	  }) : _c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model.lazy",
	      value: (_vm.currentValue),
	      expression: "currentValue",
	      modifiers: {
	        "lazy": true
	      }
	    }],
	    ref: "input",
	    staticClass: "el-input__inner",
	    attrs: {
	      "type": "text",
	      "placeholder": _vm.placeholder,
	      "readonly": _vm.inputreadonly,
	      "number": _vm.number,
	      "maxlength": _vm.maxlength,
	      "minlength": _vm.minlength,
	      "disabled": _vm.disabled,
	      "id": _vm.id || _vm.formid,
	      "autocomplete": _vm.autocomplete
	    },
	    domProps: {
	      "value": (_vm.currentValue)
	    },
	    on: {
	      "focus": _vm.handleFocus,
	      "blur": _vm.handleBlur,
	      "keyup": _vm.handleKeyup,
	      "keydown": [_vm.handleKeydown, function($event) {
	        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "down", 40, $event.key, ["Down", "ArrowDown"])) { return null; }
	        $event.preventDefault();
	        return _vm.navigateOptions('next')
	      }, function($event) {
	        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "up", 38, $event.key, ["Up", "ArrowUp"])) { return null; }
	        $event.preventDefault();
	        return _vm.navigateOptions('prev')
	      }, function($event) {
	        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) { return null; }
	        $event.preventDefault();
	        return _vm.selectOption($event)
	      }],
	      "change": function($event) {
	        _vm.currentValue = $event.target.value
	      }
	    }
	  })], _vm._v(" "), (_vm.$slots.append) ? _c('div', {
	    staticClass: "el-input-group__append"
	  }, [_vm._t("append")], 2) : _vm._e()] : _c('textarea', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.visible),
	      expression: "visible"
	    }, {
	      name: "model",
	      rawName: "v-model.lazy",
	      value: (_vm.currentValue),
	      expression: "currentValue",
	      modifiers: {
	        "lazy": true
	      }
	    }],
	    ref: "textarea",
	    staticClass: "el-textarea__inner",
	    style: (_vm.textareaStyle),
	    attrs: {
	      "placeholder": _vm.placeholder,
	      "readonly": _vm.readonly,
	      "maxlength": _vm.maxlength,
	      "minlength": _vm.minlength,
	      "id": _vm.id || _vm.formid
	    },
	    domProps: {
	      "value": (_vm.currentValue)
	    },
	    on: {
	      "focus": _vm.handleFocus,
	      "keyup": _vm.handleKeyup,
	      "keydown": _vm.handleKeydown,
	      "blur": _vm.handleBlur,
	      "change": function($event) {
	        _vm.currentValue = $event.target.value
	      }
	    }
	  }), _vm._v(" "), _vm._t("icontype", [(_vm.icontype) ? _c('i', {
	    staticClass: "iconfont input-icontype",
	    class: [
	      _vm.type === 'textarea' ? 'txt' : '',
	      _vm.icontype
	    ],
	    on: {
	      "click": _vm.handleIconClick
	    }
	  }) : _vm._e()]), _vm._v(" "), _c('transition', {
	    attrs: {
	      "name": "md-fade-bottom"
	    }
	  }, [(_vm.ishistory && _vm.searchList.length > 0) ? _c('el-input-menu', {
	    ref: "popper"
	  }, [_c('ul', {
	    ref: "ul",
	    staticClass: "his-list listItem",
	    staticStyle: {
	      "padding-bottom": "10px"
	    }
	  }, _vm._l((_vm.searchList), function(itme, index) {
	    return _c('li', {
	      key: index,
	      ref: "li",
	      refInFor: true,
	      on: {
	        "mousedown": function($event) {
	          return _vm.changeData(itme)
	        }
	      }
	    }, [_vm._v("\n            " + _vm._s(itme) + "\n            "), _c('i', {
	      staticClass: "el-icon-close close",
	      on: {
	        "mousedown": function($event) {
	          $event.stopPropagation();
	          return _vm.deleteItem(itme, index)
	        }
	      }
	    })])
	  }), 0)]) : _vm._e()], 1), _vm._v(" "), (_vm.upload) ? _c('input', {
	    attrs: {
	      "type": "hidden",
	      "upload": "true",
	      "name": _vm.name
	    },
	    domProps: {
	      "value": _vm.currentValue
	    }
	  }) : _vm._e(), _vm._v(" "), (_vm.status) ? _c('span', [_c('i', {
	    staticClass: "iconfont icon-appstoreo"
	  })]) : _vm._e()], 2)
	},staticRenderFns: []}

/***/ }),

/***/ 298:
/***/ (function(module, exports) {

	var bindEvent = (function() {
	  if(document.addEventListener) {
	    return function(element, event, handler) {
	      if (element && event && handler) {
	        element.addEventListener(event, handler, false);
	      }
	    };
	  } else {
	    return function(element, event, handler) {
	      if (element && event && handler) {
	        element.attachEvent('on' + event, handler);
	      }
	    };
	  }
	})();

	var unbindEvent = (function() {
	  if(document.removeEventListener) {
	    return function(element, event, handler) {
	      if (element && event) {
	        element.removeEventListener(event, handler, false);
	      }
	    };
	  } else {
	    return function(element, event, handler) {
	      if (element && event) {
	        element.detachEvent('on' + event, handler);
	      }
	    };
	  }
	})();

	var bindOnce = function(el, event, fn) {
	  var listener = function() {
	    if (fn) {
	      fn.apply(this, arguments);
	    }
	    unbindEvent(el, event, listener);
	  };
	  bindEvent(el, event, listener);
	};

	module.exports = {
	  on: bindEvent,
	  off: unbindEvent,
	  once: bindOnce
	};

/***/ }),

/***/ 430:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Slider = __webpack_require__(431);

	Slider.install = function (Vue) {
	  Vue.component(Slider.name, Slider);
	};

	module.exports = Slider;

/***/ }),

/***/ 431:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(432),
	  /* template */
	  __webpack_require__(442),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)

	module.exports = Component.exports


/***/ }),

/***/ 432:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _popper = __webpack_require__(268);

	var _popper2 = _interopRequireDefault(_popper);

	var _inputNumber = __webpack_require__(433);

	var _inputNumber2 = _interopRequireDefault(_inputNumber);

	var _style = __webpack_require__(439);

	var _util = __webpack_require__(278);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(440);
	exports.default = {
	  name: 'HySlider',
	  props: {
	    visible: {
	      type: Boolean,
	      default: true
	    },
	    min: {
	      type: Number,
	      default: 0
	    },
	    max: {
	      type: Number,
	      default: 100
	    },
	    step: {
	      type: Number,
	      default: 1
	    },
	    defaultValue: {
	      type: Number,
	      default: 0
	    },
	    value: {
	      type: Number,
	      default: 0
	    },
	    showinput: {
	      type: Boolean,
	      default: false
	    },
	    showstops: {
	      type: Boolean,
	      default: false
	    },
	    onchange: {
	      type: String,
	      default: ""
	    }
	  },
	  components: {
	    ElInputNumber: _inputNumber2.default
	  },
	  data: function data() {
	    return {
	      inputValue: null,
	      timeout: null,

	      hovering: false,
	      dragging: false,
	      popper: null,
	      newPos: null,
	      oldValue: this.value,
	      currentPosition: (this.value - this.min) / (this.max - this.min) * 100 + '%'
	    };
	  },

	  watch: {
	    inputValue: function inputValue(val) {
	      this.$emit('input', Number(val));
	    },
	    showTip: function showTip(val) {
	      var _this = this;

	      if (val) {
	        this.$nextTick(function () {
	          _this.updatePopper();
	        });
	      } else {
	        this.timeout = setTimeout(function () {
	          if (_this.popper) {
	            _this.popper.destroy();
	            _this.popper = null;
	          }
	        }, 300);
	      }
	    },
	    value: function value(val) {
	      var _this2 = this;

	      this.$nextTick(function () {
	        _this2.updatePopper();
	      });
	      if (val < this.min) {
	        this.$emit('input', this.min);
	        return;
	      }
	      if (val > this.max) {
	        this.$emit('input', this.max);
	        return;
	      }
	      this.inputValue = val;
	      this.setPosition((val - this.min) * 100 / (this.max - this.min));
	    }
	  },
	  methods: {
	    handlePopperStyle: function handlePopperStyle() {
	      var placementMap = { top: 'bottom', bottom: 'top' };
	      var placement = this.popper._popper.getAttribute('x-placement').split('-')[0];
	      var origin = placementMap[placement];
	      this.popper._popper.classList.add(placement);
	      this.popper._popper.classList.remove(placementMap[placement]);
	      this.popper._popper.style.transformOrigin = 'center ' + origin;
	    },
	    updatePopper: function updatePopper() {
	      var _this3 = this;

	      if (this.popper) {
	        clearTimeout(this.timeout);
	        this.popper.update();
	        this.handlePopperStyle();
	      } else {
	        this.popper = new _popper2.default(this.$refs.button, this.$refs.pop, { gpuAcceleration: false, placement: 'top' });
	        this.popper.onCreate(function () {
	          _this3.handlePopperStyle();
	        });
	        this.updatePopper();
	      }
	    },
	    setPosition: function setPosition(newPos) {
	      var _this4 = this;

	      if (newPos >= 0 && newPos <= 100) {
	        var lengthPerStep = 100 / ((this.max - this.min) / this.step);
	        var steps = Math.round(newPos / lengthPerStep);
	        this.$emit('input', Math.round(steps * lengthPerStep * (this.max - this.min) * 0.01 + this.min));
	        this.currentPosition = (this.value - this.min) / (this.max - this.min) * 100 + '%';
	        if (!this.dragging) {
	          if (this.value !== this.oldValue) {
	            setTimeout(function () {
	              if (_this4.onchange !== "") {
	                (0, _util.runGlobalCallback)(_this4.onchange, _this4.value);
	              } else {
	                _this4.$emit('change', _this4.value);
	              }
	            }, 0);
	            this.oldValue = this.value;
	          }
	        }
	      }
	    },
	    onSliderClick: function onSliderClick(event) {
	      var currentX = event.clientX;
	      var sliderOffsetLeft = this.$refs.slider.getBoundingClientRect().left;
	      var newPos = (currentX - sliderOffsetLeft) / this.$sliderWidth * 100;
	      this.setPosition(newPos);
	    },
	    onInputChange: function onInputChange() {
	      if (this.value === '') {
	        return;
	      }
	      if (!isNaN(this.value)) {
	        this.setPosition((this.value - this.min) * 100 / (this.max - this.min));
	      }
	    }
	  },
	  computed: {
	    $sliderWidth: function $sliderWidth() {
	      return parseInt((0, _style.getStyle)(this.$refs.slider, 'width'), 10);
	    },
	    showTip: function showTip() {
	      return this.dragging || this.hovering;
	    },
	    stops: function stops() {
	      var stopCount = (this.max - this.value) / this.step;
	      var result = [];
	      var currentLeft = parseFloat(this.currentPosition);
	      var stepWidth = 100 * this.step / (this.max - this.min);
	      for (var i = 1; i < stopCount; i++) {
	        result.push(currentLeft + i * stepWidth);
	      }
	      return result;
	    }
	  },
	  mounted: function mounted() {
	    var _this5 = this;

	    var startX = 0;
	    var currentX = 0;
	    var startPos = 0;
	    var onDragStart = function onDragStart(event) {
	      _this5.dragging = true;
	      startX = event.clientX;
	      startPos = parseInt(_this5.currentPosition, 10);
	    };
	    var onDragging = function onDragging(event) {
	      if (_this5.dragging) {
	        currentX = event.clientX;
	        var diff = (currentX - startX) / _this5.$sliderWidth * 100;
	        _this5.newPos = startPos + diff;
	        _this5.setPosition(_this5.newPos);
	      }
	    };
	    var onDragEnd = function onDragEnd() {
	      if (_this5.dragging) {
	        _this5.dragging = false;
	        _this5.setPosition(_this5.newPos);
	        window.removeEventListener('mousemove', onDragging);
	        window.removeEventListener('mouseup', onDragEnd);
	      }
	    };
	    this.$refs.button.addEventListener('mousedown', function (event) {
	      onDragStart(event);
	      window.addEventListener('mousemove', onDragging);
	      window.addEventListener('mouseup', onDragEnd);
	    });
	  },
	  created: function created() {
	    if (typeof this.value !== 'number' || this.value < this.min || this.value > this.max) {
	      this.$emit('input', this.min);
	    }
	    this.inputValue = this.inputValue || this.value;
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this.popper) {
	      this.popper.destroy();
	    }
	  }
	};

/***/ }),

/***/ 433:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var ElInputNumber = __webpack_require__(434);

	ElInputNumber.install = function (Vue) {
	  Vue.component(ElInputNumber.name, ElInputNumber);
	};

	module.exports = ElInputNumber;

/***/ }),

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(435),
	  /* template */
	  __webpack_require__(438),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)

	module.exports = Component.exports


/***/ }),

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _util = __webpack_require__(278);

	var _input = __webpack_require__(275);

	var _input2 = _interopRequireDefault(_input);

	var _event = __webpack_require__(298);

	var _emitter = __webpack_require__(239);

	var _emitter2 = _interopRequireDefault(_emitter);

	var _class = __webpack_require__(269);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(436);
	exports.default = {
	  name: 'HyInputnumber',
	  mixins: [_emitter2.default],
	  props: {
	    value: {
	      default: 1
	    },
	    step: {
	      type: Number,
	      default: 1
	    },
	    isInGrid: {
	      type: Boolean,
	      default: false
	    },
	    clearable: {
	      type: Boolean,
	      default: true
	    },
	    max: {
	      type: Number,
	      default: Infinity
	    },
	    min: {
	      type: Number,
	      default: -Infinity
	    },
	    controls: {
	      type: Boolean,
	      default: true
	    },
	    readonly: Boolean,
	    name: String,
	    upload: {
	      type: Boolean,
	      default: false
	    },
	    width: {
	      type: [String, Number],
	      default: 0
	    },
	    size: {
	      type: String,
	      default: ''
	    },
	    visible: {
	      type: Boolean,
	      default: true
	    },
	    issymbol: {
	      type: Boolean,
	      default: true
	    },
	    id: {
	      type: String,
	      default: ""
	    },
	    formid: {
	      type: String,
	      default: ""
	    },
	    onchange: {
	      type: String,
	      default: ""
	    }
	  },
	  directives: {
	    repeatClick: {
	      bind: function bind(el, binding, vnode) {
	        var interval = null;
	        var startTime = void 0;

	        var handler = function handler() {
	          vnode.context[binding.expression]();
	        };

	        var clear = function clear() {
	          if (new Date() - startTime < 100) {
	            handler();
	          }
	          clearInterval(interval);
	          interval = null;
	        };

	        (0, _event.on)(el, 'mousedown', function () {
	          startTime = new Date();
	          (0, _event.once)(document, 'mouseup', clear);
	          interval = setInterval(function () {
	            handler();
	          }, 100);
	        });
	      }
	    }
	  },
	  components: {
	    ElInput: _input2.default
	  },
	  data: function data() {
	    return {
	      isMouseEnter: false,
	      currentValue: this.value,
	      inputActive: false,
	      iconSpace: 0,
	      showClose: false,
	      lineHeight: 0,
	      numVisible: this.visible,
	      numReadonly: this.readonly
	    };
	  },

	  watch: {
	    showClose: function showClose(val) {

	      if (val) {
	        this.$refs.reference.$el.querySelectorAll(".el-icon-circle-close")[0].style.display = "block";
	      } else {
	        this.$refs.reference.$el.querySelectorAll(".el-icon-circle-close")[0].style.display = "none";
	      }
	    },

	    value: {
	      immediate: true,
	      handler: function handler(value) {
	        if (value == undefined || value === "") {
	          return;
	        }
	        var newVal = Number(value);
	        if (isNaN(newVal)) return;
	        if (newVal >= this.max) newVal = this.max;
	        if (newVal <= this.min) newVal = this.min;
	        this.currentValue = newVal;
	        this.$emit('input', newVal);
	      }
	    },

	    currentValue: function currentValue(newVal, oldVal) {
	      var _this = this;

	      if (!isNaN(newVal) && newVal <= this.max && newVal >= this.min) {
	        setTimeout(function () {
	          if (_this.onchange !== "") {
	            (0, _util.runGlobalCallback)(_this.onchange, newVal);
	          } else {
	            _this.$emit('change', newVal);
	          }
	        }, 0);
	        this.$emit('input', newVal);
	      } else {
	        this.$nextTick(function () {
	          _this.currentValue = oldVal;
	        });
	      }
	    },
	    visible: function visible(newValue, oldValue) {
	      this.numVisible = newValue;
	    },
	    readonly: function readonly(newValue, oldValue) {
	      this.numReadonly = newValue;
	    }
	  },
	  computed: {
	    containerSize: function containerSize() {
	      var style = {};
	      if (this.width !== 0) {
	        var width = this.width + "";
	        if (width.indexOf("%") == -1) {
	          width = width + "px";
	        }
	        style.width = width;
	      }
	      return style;
	    },
	    iconStyle: function iconStyle() {
	      var style = {};
	      if (this.iconSpace !== 0) {
	        style.right = this.iconSpace + "px";
	      }

	      return style;
	    },
	    minDisabled: function minDisabled() {
	      return this.currentValue - this.step < this.min;
	    },
	    maxDisabled: function maxDisabled() {
	      return this.currentValue + this.step > this.max;
	    },
	    iconCloseStyle: function iconCloseStyle() {
	      var style = {};
	      if (this.iconSpace !== 0) {
	        style.right = this.iconSpace + 40 + "px";
	      }

	      return style;
	    }
	  },
	  created: function created() {
	    if (this.$slots.append != undefined) {
	      this.iconSpace = 30 + 10 * this.$slots.append[0].text.length;
	    }
	    if (this.upload) {
	      HyUploadComponents.push(this);
	    }
	    if (this.id != "") {
	      window[this.id] = this;
	    }
	  },
	  mounted: function mounted() {},

	  methods: {
	    setReadonly: function setReadonly(val) {
	      this.numReadonly = val;
	    },
	    setVisible: function setVisible(val) {
	      this.numVisible = val;
	    },
	    getValue: function getValue() {
	      return this.value;
	    },
	    changeInputWidth: function changeInputWidth(width) {
	      this.$refs.reference.$el.style.width = width + "px";
	    },
	    getComponentInput: function getComponentInput() {
	      var selectInput = this.$refs.reference.$el.querySelector(".el-input__inner");
	      return selectInput;
	    },
	    focus: function focus() {

	      var inputDom = this.getComponentInput();
	      setTimeout(function () {
	        inputDom.focus();
	      }, 0);
	    },
	    enterHandler: function enterHandler() {
	      this.isMouseEnter = true;
	    },
	    leaveHandler: function leaveHandler() {
	      this.isMouseEnter = false;
	    },
	    handleFocus: function handleFocus(val) {
	      this.dispatch('form-item', 'el.form.focus');
	    },
	    setValue: function setValue(val) {
	      this.currentValue = val;
	    },
	    getSelectedValue: function getSelectedValue() {
	      var val = parseInt(this.currentValue);
	      if (isNaN(val)) {
	        val = "";
	      }
	      return val;
	    },
	    handleBlur: function handleBlur() {},
	    handleMouseEnterIcon: function handleMouseEnterIcon() {
	      if (this.numReadonly) return;
	      if (this.currentValue != "" && this.clearable) {
	        this.showClose = true;
	      }
	    },
	    handleMouseLeave: function handleMouseLeave() {
	      this.showClose = false;
	    },
	    handleClear: function handleClear() {
	      this.currentValue = "";
	      if (this.isInGrid) {
	        this.focus();
	      }
	    },
	    accSub: function accSub(arg1, arg2) {

	      var r1, r2, m, n;
	      try {
	        r1 = arg1.toString().split('.')[1].length;
	      } catch (e) {
	        r1 = 0;
	      }
	      try {
	        r2 = arg2.toString().split('.')[1].length;
	      } catch (e) {
	        r2 = 0;
	      }
	      m = Math.pow(10, Math.max(r1, r2));
	      n = r1 >= r2 ? r1 : r2;
	      return parseFloat(((arg1 * m - arg2 * m) / m).toFixed(n));
	    },
	    accAdd: function accAdd(arg1, arg2) {
	      if (arg2 == null) {
	        arg2 = 0;
	      }
	      var r1, r2, m, c;
	      try {
	        r1 = arg1.toString().split('.')[1].length;
	      } catch (e) {
	        r1 = 0;
	      }
	      try {
	        r2 = arg2.toString().split('.')[1].length;
	      } catch (e) {
	        r2 = 0;
	      }
	      c = Math.abs(r1 - r2);
	      m = Math.pow(10, Math.max(r1, r2));
	      if (c > 0) {
	        var cm = Math.pow(10, c);
	        if (r1 > r2) {
	          arg1 = Number(arg1.toString().replace('.', ''));
	          arg2 = Number(arg2.toString().replace('.', '')) * cm;
	        } else {
	          arg1 = Number(arg1.toString().replace('.', '')) * cm;
	          arg2 = Number(arg2.toString().replace('.', ''));
	        }
	      } else {
	        arg1 = Number(arg1.toString().replace('.', ''));
	        arg2 = Number(arg2.toString().replace('.', ''));
	      }
	      return (arg1 + arg2) / m;
	    },
	    increase: function increase() {
	      if (this.isInGrid) {
	        this.focus();
	      }
	      if (this.currentValue + this.step > this.max || this.numReadonly) return;
	      this.currentValue = this.accAdd(this.step, this.currentValue);
	      if (this.maxDisabled) {}
	    },
	    decrease: function decrease() {
	      if (this.isInGrid) {
	        this.focus();
	      }
	      if (this.currentValue - this.step < this.min || this.numReadonly) return;
	      this.currentValue = this.accSub(this.currentValue, this.step);
	      if (this.minDisabled) {}
	    },
	    activeInput: function activeInput(readonly) {
	      if (!this.numReadonly && !readonly) {}
	    },
	    inactiveInput: function inactiveInput(readonly) {
	      if (!this.numReadonly && !readonly) {}
	    }
	  }
	};

/***/ }),

/***/ 436:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(437);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js!../../node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"extract\":true,\"remove\":true}!../../node_modules/style-loader/index.js!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js?sourceMap!./input-number.less", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js!../../node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"extract\":true,\"remove\":true}!../../node_modules/style-loader/index.js!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js?sourceMap!./input-number.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 437:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ }),

/***/ 438:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.numVisible),
	      expression: "numVisible"
	    }],
	    staticClass: "el-input-number",
	    class: [
	      _vm.size ? 'is-' + _vm.size : '',
	      {
	        'is-readonly': _vm.numReadonly
	      }
	    ],
	    style: ([_vm.containerSize]),
	    on: {
	      "mouseenter": _vm.enterHandler,
	      "mouseleave": _vm.leaveHandler
	    }
	  }, [_c('el-input', {
	    ref: "reference",
	    class: {
	      'is-active': _vm.inputActive
	    },
	    attrs: {
	      "readonly": _vm.numReadonly,
	      "size": _vm.size,
	      "number": true,
	      "formid": _vm.id || _vm.formid,
	      "showhistory": false,
	      "icon-space": _vm.iconSpace
	    },
	    on: {
	      "focus": _vm.handleFocus,
	      "blur": _vm.handleBlur
	    },
	    nativeOn: {
	      "mouseenter": function($event) {
	        return _vm.handleMouseEnterIcon($event)
	      },
	      "mouseleave": function($event) {
	        return _vm.handleMouseLeave($event)
	      }
	    },
	    model: {
	      value: (_vm.currentValue),
	      callback: function($$v) {
	        _vm.currentValue = $$v
	      },
	      expression: "currentValue"
	    }
	  }, [(_vm.$slots.prepend) ? _c('template', {
	    slot: "prepend"
	  }, [_vm._t("prepend")], 2) : _vm._e(), _vm._v(" "), (_vm.$slots.append) ? _c('template', {
	    slot: "append"
	  }, [_vm._t("append")], 2) : _vm._e(), _vm._v(" "), (_vm.controls) ? [_c('i', {
	    directives: [{
	      name: "repeat-click",
	      rawName: "v-repeat-click",
	      value: (_vm.increase),
	      expression: "increase"
	    }],
	    staticClass: "el-input-number__increase iconfont icon-up",
	    class: {
	      'is-readonly': _vm.maxDisabled, 'is-symbol-right  icon-plus': _vm.issymbol
	    },
	    style: (_vm.iconStyle),
	    attrs: {
	      "slot": "icon"
	    },
	    on: {
	      "mouseenter": function($event) {
	        return _vm.activeInput(_vm.maxDisabled)
	      },
	      "mouseleave": function($event) {
	        return _vm.inactiveInput(_vm.maxDisabled)
	      }
	    },
	    slot: "icon"
	  }), _vm._v(" "), _c('i', {
	    directives: [{
	      name: "repeat-click",
	      rawName: "v-repeat-click",
	      value: (_vm.decrease),
	      expression: "decrease"
	    }],
	    staticClass: "el-input-number__decrease iconfont icon-down",
	    class: {
	      'is-readonly': _vm.minDisabled, 'is-symbol-left  icon-minus': _vm.issymbol
	    },
	    style: (_vm.iconStyle),
	    attrs: {
	      "slot": "icon"
	    },
	    on: {
	      "mouseenter": function($event) {
	        return _vm.activeInput(_vm.minDisabled)
	      },
	      "mouseleave": function($event) {
	        return _vm.inactiveInput(_vm.minDisabled)
	      }
	    },
	    slot: "icon"
	  })] : _vm._e(), _vm._v(" "), _c('i', {
	    ref: "numbericon",
	    staticClass: "el-input__icon  el-icon-circle-close",
	    class: {
	      'el-icon-circle-close-uncontrol': !_vm.controls
	    },
	    staticStyle: {
	      "display": "none"
	    },
	    style: (_vm.iconCloseStyle),
	    attrs: {
	      "slot": "icon"
	    },
	    on: {
	      "click": _vm.handleClear
	    },
	    slot: "icon"
	  })], 2), _vm._v(" "), (_vm.upload) ? _c('input', {
	    attrs: {
	      "type": "hidden",
	      "upload": "true",
	      "name": _vm.name
	    },
	    domProps: {
	      "value": _vm.currentValue
	    }
	  }) : _vm._e()], 1)
	},staticRenderFns: []}

/***/ }),

/***/ 439:
/***/ (function(module, exports) {

	var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
	var MOZ_HACK_REGEXP = /^moz([A-Z])/;

	function camelCase(name) {
	  return name.
	    replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
	      return offset ? letter.toUpperCase() : letter;
	    }).
	    replace(MOZ_HACK_REGEXP, 'Moz$1');
	}

	var ieVersion = Number(document.documentMode);
	var getStyle = ieVersion < 9 ? function(element, styleName) {
	  if (!element || !styleName) return null;
	  styleName = camelCase(styleName);
	  if (styleName === 'float') {
	    styleName = 'styleFloat';
	  }
	  try {
	    switch (styleName) {
	      case 'opacity':
	        try {
	          return element.filters.item('alpha').opacity / 100;
	        }
	        catch (e) {
	          return 1.0;
	        }
	        break;
	      default:
	        return ( element.style[styleName] || element.currentStyle ? element.currentStyle[styleName] : null );
	    }
	  } catch(e) {
	    return element.style[styleName];
	  }
	} : function(element, styleName) {
	  if (!element || !styleName) return null;
	  styleName = camelCase(styleName);
	  if (styleName === 'float') {
	    styleName = 'cssFloat';
	  }
	  try {
	    var computed = document.defaultView.getComputedStyle(element, '');
	    return element.style[styleName] || computed ? computed[styleName] : null;
	  } catch(e) {
	    return element.style[styleName];
	  }
	};

	var setStyle = function(element, styleName, value) {
	  if (!element || !styleName) return;

	  if (typeof styleName === 'object') {
	    for (var prop in styleName) {
	      if (styleName.hasOwnProperty(prop)) {
	        setStyle(element, prop, styleName[prop]);
	      }
	    }
	  } else {
	    styleName = camelCase(styleName);
	    if (styleName === 'opacity' && ieVersion < 9) {
	      element.style.filter = isNaN(value) ? '' : 'alpha(opacity=' + value * 100 + ')';
	    } else {
	      element.style[styleName] = value;
	    }
	  }
	};

	module.exports = {
	  getStyle: getStyle,
	  setStyle: setStyle
	};

/***/ }),

/***/ 440:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(441);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js!../../node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"extract\":true,\"remove\":true}!../../node_modules/style-loader/index.js!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js?sourceMap!./slider.less", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js!../../node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"extract\":true,\"remove\":true}!../../node_modules/style-loader/index.js!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js?sourceMap!./slider.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 441:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ }),

/***/ 442:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.visible),
	      expression: "visible"
	    }],
	    staticClass: "el-slider"
	  }, [(_vm.showinput) ? _c('el-input-number', {
	    ref: "input",
	    staticClass: "el-slider__input",
	    attrs: {
	      "step": _vm.step,
	      "min": _vm.min,
	      "max": _vm.max
	    },
	    nativeOn: {
	      "keyup": function($event) {
	        return _vm.onInputChange()
	      }
	    },
	    model: {
	      value: (_vm.inputValue),
	      callback: function($$v) {
	        _vm.inputValue = $$v
	      },
	      expression: "inputValue"
	    }
	  }) : _vm._e(), _vm._v(" "), _c('div', {
	    ref: "slider",
	    staticClass: "el-slider__runway",
	    class: {
	      'show-input': _vm.showinput
	    },
	    on: {
	      "click": _vm.onSliderClick
	    }
	  }, [_c('div', {
	    staticClass: "el-slider__bar",
	    style: ({
	      width: _vm.currentPosition
	    })
	  }), _vm._v(" "), _c('div', {
	    ref: "button",
	    staticClass: "el-slider__button-wrapper",
	    style: ({
	      left: _vm.currentPosition
	    }),
	    on: {
	      "mouseenter": function($event) {
	        _vm.hovering = true
	      },
	      "mouseleave": function($event) {
	        _vm.hovering = false
	      }
	    }
	  }, [_c('div', {
	    staticClass: "el-slider__button",
	    class: {
	      'hover': _vm.hovering, 'dragging': _vm.dragging
	    }
	  })]), _vm._v(" "), _c('transition', {
	    attrs: {
	      "name": "popper-fade"
	    }
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.showTip),
	      expression: "showTip"
	    }],
	    ref: "pop",
	    staticClass: "el-slider__pop"
	  }, [_vm._v(_vm._s(_vm.value))])]), _vm._v(" "), _vm._l((_vm.stops), function(item) {
	    return (_vm.showstops) ? _c('div', {
	      staticClass: "el-slider__stop",
	      style: ({
	        'left': item + '%'
	      })
	    }) : _vm._e()
	  })], 2)], 1)
	},staticRenderFns: []}

/***/ })

/******/ })
});
;