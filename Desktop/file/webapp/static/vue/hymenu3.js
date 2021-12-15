(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define("vuecomponent", ["vue"], factory);
	else if(typeof exports === 'object')
		exports["vuecomponent"] = factory(require("vue"));
	else
		root["vuecomponent"] = factory(root["Vue"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_238__) {
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

	var _index = __webpack_require__(372);

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
	  Menu3: _index2.default
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

/***/ 5:
/***/ (function(module, exports) {

	/* eslint-disable no-undefined,no-param-reassign,no-shadow */

	/**
	 * Throttle execution of a function. Especially useful for rate limiting
	 * execution of handlers on events like resize and scroll.
	 *
	 * @param  {Number}    delay          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
	 * @param  {Boolean}   [noTrailing]   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
	 *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
	 *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
	 *                                    the internal counter is reset)
	 * @param  {Function}  callback       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
	 *                                    to `callback` when the throttled-function is executed.
	 * @param  {Boolean}   [debounceMode] If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
	 *                                    schedule `callback` to execute after `delay` ms.
	 *
	 * @return {Function}  A new, throttled, function.
	 */
	module.exports = function ( delay, noTrailing, callback, debounceMode ) {

		// After wrapper has stopped being called, this timeout ensures that
		// `callback` is executed at the proper times in `throttle` and `end`
		// debounce modes.
		var timeoutID;

		// Keep track of the last time `callback` was executed.
		var lastExec = 0;

		// `noTrailing` defaults to falsy.
		if ( typeof noTrailing !== 'boolean' ) {
			debounceMode = callback;
			callback = noTrailing;
			noTrailing = undefined;
		}

		// The `wrapper` function encapsulates all of the throttling / debouncing
		// functionality and when executed will limit the rate at which `callback`
		// is executed.
		function wrapper () {

			var self = this;
			var elapsed = Number(new Date()) - lastExec;
			var args = arguments;

			// Execute `callback` and update the `lastExec` timestamp.
			function exec () {
				lastExec = Number(new Date());
				callback.apply(self, args);
			}

			// If `debounceMode` is true (at begin) this is used to clear the flag
			// to allow future `callback` executions.
			function clear () {
				timeoutID = undefined;
			}

			if ( debounceMode && !timeoutID ) {
				// Since `wrapper` is being called for the first time and
				// `debounceMode` is true (at begin), execute `callback`.
				exec();
			}

			// Clear any existing timeout.
			if ( timeoutID ) {
				clearTimeout(timeoutID);
			}

			if ( debounceMode === undefined && elapsed > delay ) {
				// In throttle mode, if `delay` time has been exceeded, execute
				// `callback`.
				exec();

			} else if ( noTrailing !== true ) {
				// In trailing throttle mode, since `delay` time has not been
				// exceeded, schedule `callback` to execute `delay` ms after most
				// recent execution.
				//
				// If `debounceMode` is true (at begin), schedule `clear` to execute
				// after `delay` ms.
				//
				// If `debounceMode` is false (at end), schedule `callback` to
				// execute after `delay` ms.
				timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
			}

		}

		// Return the wrapper function.
		return wrapper;

	};


/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

	/* eslint-disable no-undefined */

	var throttle = __webpack_require__(5);

	/**
	 * Debounce execution of a function. Debouncing, unlike throttling,
	 * guarantees that a function is only executed a single time, either at the
	 * very beginning of a series of calls, or at the very end.
	 *
	 * @param  {Number}   delay         A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
	 * @param  {Boolean}  [atBegin]     Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
	 *                                  after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
	 *                                  (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
	 * @param  {Function} callback      A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
	 *                                  to `callback` when the debounced-function is executed.
	 *
	 * @return {Function} A new, debounced function.
	 */
	module.exports = function ( delay, atBegin, callback ) {
		return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
	};


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

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var Menu3 = __webpack_require__(373);

	Menu3.install = function (Vue) {
	  Vue.component(Menu3.name, Menu3);
	};

	exports.default = Menu3;

/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(374)

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(376),
	  /* template */
	  __webpack_require__(412),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)

	module.exports = Component.exports


/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(375);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-0a8aca24!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./menu.vue", function() {
				var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-0a8aca24!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./menu.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n \n/* .el-menu-vertical-demo:not(.el-menu--collapse) {\n  width: 200px;\n  min-height: 880px;\n}   */\n", ""]);

	// exports


/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _MenuItem = __webpack_require__(377);

	var _MenuItem2 = _interopRequireDefault(_MenuItem);

	var _subMenu = __webpack_require__(389);

	var _subMenu2 = _interopRequireDefault(_subMenu);

	var _MenuGroup = __webpack_require__(391);

	var _MenuGroup2 = _interopRequireDefault(_MenuGroup);

	var _elmenu = __webpack_require__(403);

	var _elmenu2 = _interopRequireDefault(_elmenu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(410);
	exports.default = {
	  name: 'HyMenu3',
	  components: { MenuItem: _MenuItem2.default, SubMenu: _subMenu2.default, MenuGroup: _MenuGroup2.default, ElMenu: _elmenu2.default },
	  data: function data() {
	    return {};
	  },

	  props: {
	    menudata: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    collapse: {
	      type: Boolean,
	      default: false
	    },
	    uniqueOpened: {
	      type: Boolean,
	      default: false
	    },
	    defaultOpeneds: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    router: {
	      type: Boolean,
	      default: true
	    },
	    collapseTransition: {
	      type: Boolean,
	      default: true
	    },
	    mode: {
	      type: String,
	      default: 'vertical'
	    },
	    backgroundColor: {
	      type: String,

	      default: '#F5F7FA'
	    },
	    hoverBackground: {
	      type: String,
	      default: '#EBEDF0'
	    },
	    textColor: {
	      type: String,
	      default: '#333333'
	    },
	    activeTextColor: {
	      type: String,
	      default: '#489CFF'
	    },
	    defaultActive: {
	      type: String,
	      default: ''
	    },
	    menuTrigger: {
	      type: String,
	      default: 'hover'
	    }
	  },

	  methods: {
	    handleOpen: function handleOpen(key) {
	      this.$emit('open', key);
	    },
	    handleClose: function handleClose(key) {
	      this.$emit('close', key);
	    },
	    handleSelect: function handleSelect(key, keyPath, route) {
	      this.$emit('select', key, keyPath, route);
	    }
	  },
	  mounted: function mounted() {
	    window['myMenuTimeout'] = null;
	    window['menuMouseEnterLeave'] = false;
	  },

	  watch: {
	    collapse: function collapse(newV, oldV) {}
	  }
	};

/***/ }),

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(378),
	  /* template */
	  __webpack_require__(388),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)

	module.exports = Component.exports


/***/ }),

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _elmenuitem = __webpack_require__(379);

	var _elmenuitem2 = _interopRequireDefault(_elmenuitem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'MenuItem',
	  components: {
	    ElMenuItem: _elmenuitem2.default
	  },
	  props: {
	    menu: {
	      type: Object
	    }
	  },
	  data: function data() {
	    return {};
	  },
	  mounted: function mounted() {}
	};

/***/ }),

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(380),
	  /* template */
	  __webpack_require__(387),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)

	module.exports = Component.exports


/***/ }),

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _computed;

	var _menuMixin = __webpack_require__(381);

	var _menuMixin2 = _interopRequireDefault(_menuMixin);

	var _eltooltip = __webpack_require__(382);

	var _eltooltip2 = _interopRequireDefault(_eltooltip);

	var _emitter = __webpack_require__(386);

	var _emitter2 = _interopRequireDefault(_emitter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	exports.default = {
	  name: 'ElMenuItem',

	  data: function data() {
	    return {
	      isHover: false
	    };
	  },


	  componentName: 'ElMenuItem',

	  mixins: [_menuMixin2.default, _emitter2.default],

	  components: { ElTooltip: _eltooltip2.default },

	  props: {
	    index: {
	      default: null,
	      validator: function validator(val) {
	        return typeof val === 'string' || val === null;
	      }
	    },
	    route: [String, Object],
	    disabled: Boolean,
	    lable: String
	  },
	  computed: (_computed = {
	    active: function active() {
	      return this.index === this.rootMenu.activeIndex;
	    },
	    hoverBackground: function hoverBackground() {
	      return this.rootMenu.hoverBackground;
	    },
	    backgroundColor: function backgroundColor() {
	      return this.active ? this.hoverBackground : this.rootMenu.backgroundColor;
	    }
	  }, _defineProperty(_computed, 'hoverBackground', function hoverBackground() {
	    return this.rootMenu.hoverBackground || '';
	  }), _defineProperty(_computed, 'activeTextColor', function activeTextColor() {
	    return this.rootMenu.activeTextColor || '';
	  }), _defineProperty(_computed, 'textColor', function textColor() {
	    return this.rootMenu.textColor || '';
	  }), _defineProperty(_computed, 'mode', function mode() {
	    return this.rootMenu.mode;
	  }), _defineProperty(_computed, 'itemStyle', function itemStyle() {
	    var style = {
	      color: this.active ? this.activeTextColor : this.textColor
	    };
	    if (this.mode === 'horizontal' && !this.isNested) {
	      style.borderBottomColor = this.active ? this.rootMenu.activeTextColor ? this.activeTextColor : '' : 'transparent';
	    }
	    return style;
	  }), _defineProperty(_computed, 'itemHoverStyle', function itemHoverStyle() {
	    var style = {
	      color: this.isHover ? this.activeTextColor : this.active ? this.activeTextColor : this.textColor
	    };
	    return style;
	  }), _defineProperty(_computed, 'isNested', function isNested() {
	    return this.parentMenu !== this.rootMenu;
	  }), _computed),
	  methods: {
	    onMouseEnter: function onMouseEnter() {
	      menuMouseEnterLeave = true;

	      if (myMenuTimeout != null) {
	        clearTimeout(myMenuTimeout);
	      }
	      if (this.mode === 'horizontal' && !this.rootMenu.backgroundColor) return;
	      this.$el.style.backgroundColor = this.hoverBackground;
	      this.isHover = true;
	    },
	    onMouseLeave: function onMouseLeave() {
	      menuMouseEnterLeave = false;
	      if (this.mode === 'horizontal' && !this.rootMenu.backgroundColor) return;
	      this.$el.style.backgroundColor = this.backgroundColor;
	      this.isHover = false;
	    },
	    handleClick: function handleClick() {
	      if (!this.disabled) {
	        this.dispatch('ElMenu', 'item-click', this);
	        this.$emit('click', this);
	      }
	    }
	  },
	  mounted: function mounted() {
	    this.parentMenu.addItem(this);
	    this.rootMenu.addItem(this);
	  },
	  beforeDestroy: function beforeDestroy() {
	    this.parentMenu.removeItem(this);
	    this.rootMenu.removeItem(this);
	  }
	};

/***/ }),

/***/ 381:
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  inject: ['rootMenu'],
	  computed: {
	    indexPath: function indexPath() {
	      var path = [this.index];
	      var parent = this.$parent;
	      while (parent.$options.componentName !== 'ElMenu') {
	        if (parent.index) {
	          path.unshift(parent.index);
	        }
	        parent = parent.$parent;
	      }
	      return path;
	    },
	    parentMenu: function parentMenu() {
	      var parent = this.$parent;
	      while (parent && ['ElMenu', 'ElSubmenu'].indexOf(parent.$options.componentName) === -1) {
	        parent = parent.$parent;
	      }
	      return parent;
	    },
	    paddingStyle: function paddingStyle() {
	      if (this.rootMenu.mode !== 'vertical') return {};

	      var padding = 20;
	      var parent = this.$parent;

	      if (this.rootMenu.collapse) {
	        padding = 20;
	      } else {
	        while (parent && parent.$options.componentName !== 'ElMenu') {
	          if (parent.$options.componentName === 'ElSubmenu') {
	            padding += 20;
	          }
	          parent = parent.$parent;
	        }
	      }
	      return { paddingLeft: padding + 'px' };
	    }
	  }
	};

/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(383),
	  /* template */
	  null,
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)

	module.exports = Component.exports


/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vuePopper = __webpack_require__(260);

	var _vuePopper2 = _interopRequireDefault(_vuePopper);

	var _debounce = __webpack_require__(6);

	var _debounce2 = _interopRequireDefault(_debounce);

	var _dom = __webpack_require__(237);

	var _util = __webpack_require__(278);

	var _vue = __webpack_require__(238);

	var _vue2 = _interopRequireDefault(_vue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(384);

	exports.default = {
	  name: 'ElTooltip',

	  mixins: [_vuePopper2.default],

	  props: {
	    openDelay: {
	      type: Number,
	      default: 0
	    },
	    disabled: Boolean,
	    manual: Boolean,
	    effect: {
	      type: String,
	      default: 'dark'
	    },
	    arrowOffset: {
	      type: Number,
	      default: 0
	    },
	    popperClass: String,
	    content: String,
	    visibleArrow: {
	      default: true
	    },
	    transition: {
	      type: String,
	      default: 'el-fade-in-linear'
	    },
	    popperOptions: {
	      default: function _default() {
	        return {
	          boundariesPadding: 10,
	          gpuAcceleration: false
	        };
	      }
	    },
	    enterable: {
	      type: Boolean,
	      default: true
	    },
	    hideAfter: {
	      type: Number,
	      default: 0
	    },
	    tabindex: {
	      type: Number,
	      default: 0
	    }
	  },

	  data: function data() {
	    return {
	      tooltipId: 'el-tooltip-' + (0, _util.generateId)(),
	      timeoutPending: null,
	      focusing: false
	    };
	  },
	  beforeCreate: function beforeCreate() {
	    var _this = this;

	    if (this.$isServer) return;

	    this.popperVM = new _vue2.default({
	      data: { node: '' },
	      render: function render(h) {
	        return this.node;
	      }
	    }).$mount();

	    this.debounceClose = (0, _debounce2.default)(200, function () {
	      return _this.handleClosePopper();
	    });
	  },
	  render: function render(h) {
	    var _this2 = this;

	    if (this.popperVM) {
	      this.popperVM.node = h(
	        'transition',
	        {
	          attrs: {
	            name: this.transition
	          },
	          on: {
	            'afterLeave': this.doDestroy
	          }
	        },
	        [h(
	          'div',
	          {
	            on: {
	              'mouseleave': function mouseleave() {
	                _this2.setExpectedState(false);_this2.debounceClose();
	              },
	              'mouseenter': function mouseenter() {
	                _this2.setExpectedState(true);
	              }
	            },

	            ref: 'popper',
	            attrs: { role: 'tooltip',
	              id: this.tooltipId,
	              'aria-hidden': this.disabled || !this.showPopper ? 'true' : 'false'
	            },
	            directives: [{
	              name: 'show',
	              value: !this.disabled && this.showPopper
	            }],

	            'class': ['el-tooltip__popper', 'is-' + this.effect, this.popperClass] },
	          [this.$slots.content || this.content]
	        )]
	      );
	    }

	    var firstElement = this.getFirstElement();
	    if (!firstElement) return null;

	    var data = firstElement.data = firstElement.data || {};
	    data.staticClass = this.addTooltipClass(data.staticClass);

	    return firstElement;
	  },
	  mounted: function mounted() {
	    var _this3 = this;

	    this.referenceElm = this.$el;
	    if (this.$el.nodeType === 1) {
	      this.$el.setAttribute('aria-describedby', this.tooltipId);
	      this.$el.setAttribute('tabindex', this.tabindex);
	      (0, _dom.on)(this.referenceElm, 'mouseenter', this.show);
	      (0, _dom.on)(this.referenceElm, 'mouseleave', this.hide);
	      (0, _dom.on)(this.referenceElm, 'focus', function () {
	        if (!_this3.$slots.default || !_this3.$slots.default.length) {
	          _this3.handleFocus();
	          return;
	        }
	        var instance = _this3.$slots.default[0].componentInstance;
	        if (instance && instance.focus) {
	          instance.focus();
	        } else {
	          _this3.handleFocus();
	        }
	      });
	      (0, _dom.on)(this.referenceElm, 'blur', this.handleBlur);
	      (0, _dom.on)(this.referenceElm, 'click', this.removeFocusing);
	    }

	    if (this.value && this.popperVM) {
	      this.popperVM.$nextTick(function () {
	        if (_this3.value) {
	          _this3.updatePopper();
	        }
	      });
	    }
	  },

	  watch: {
	    focusing: function focusing(val) {
	      if (val) {
	        (0, _dom.addClass)(this.referenceElm, 'focusing');
	      } else {
	        (0, _dom.removeClass)(this.referenceElm, 'focusing');
	      }
	    }
	  },
	  methods: {
	    show: function show() {
	      this.setExpectedState(true);
	      this.handleShowPopper();
	    },
	    hide: function hide() {
	      this.setExpectedState(false);
	      this.debounceClose();
	    },
	    handleFocus: function handleFocus() {
	      this.focusing = true;
	      this.show();
	    },
	    handleBlur: function handleBlur() {
	      this.focusing = false;
	      this.hide();
	    },
	    removeFocusing: function removeFocusing() {
	      this.focusing = false;
	    },
	    addTooltipClass: function addTooltipClass(prev) {
	      if (!prev) {
	        return 'el-tooltip';
	      } else {
	        return 'el-tooltip ' + prev.replace('el-tooltip', '');
	      }
	    },
	    handleShowPopper: function handleShowPopper() {
	      var _this4 = this;

	      if (!this.expectedState || this.manual) return;
	      clearTimeout(this.timeout);
	      this.timeout = setTimeout(function () {
	        _this4.showPopper = true;
	      }, this.openDelay);

	      if (this.hideAfter > 0) {
	        this.timeoutPending = setTimeout(function () {
	          _this4.showPopper = false;
	        }, this.hideAfter);
	      }
	    },
	    handleClosePopper: function handleClosePopper() {
	      if (this.enterable && this.expectedState || this.manual) return;
	      clearTimeout(this.timeout);

	      if (this.timeoutPending) {
	        clearTimeout(this.timeoutPending);
	      }
	      this.showPopper = false;

	      if (this.disabled) {
	        this.doDestroy();
	      }
	    },
	    setExpectedState: function setExpectedState(expectedState) {
	      if (expectedState === false) {
	        clearTimeout(this.timeoutPending);
	      }
	      this.expectedState = expectedState;
	    },
	    getFirstElement: function getFirstElement() {
	      var slots = this.$slots.default;
	      if (!Array.isArray(slots)) return null;
	      var element = null;
	      for (var index = 0; index < slots.length; index++) {
	        if (slots[index] && slots[index].tag) {
	          element = slots[index];
	        };
	      }
	      return element;
	    }
	  },

	  beforeDestroy: function beforeDestroy() {
	    this.popperVM && this.popperVM.$destroy();
	  },
	  destroyed: function destroyed() {
	    var reference = this.referenceElm;
	    if (reference.nodeType === 1) {
	      (0, _dom.off)(reference, 'mouseenter', this.show);
	      (0, _dom.off)(reference, 'mouseleave', this.hide);
	      (0, _dom.off)(reference, 'focus', this.handleFocus);
	      (0, _dom.off)(reference, 'blur', this.handleBlur);
	      (0, _dom.off)(reference, 'click', this.removeFocusing);
	    }
	  }
	};

/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(385);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js!../../node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"extract\":true,\"remove\":true}!../../node_modules/style-loader/index.js!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js?sourceMap!./tooltip.less", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js!../../node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"extract\":true,\"remove\":true}!../../node_modules/style-loader/index.js!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js?sourceMap!./tooltip.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ }),

/***/ 386:
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

/***/ 387:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('li', {
	    staticClass: "el-menu-item",
	    class: {
	      'is-active': _vm.active,
	      'is-disabled': _vm.disabled
	    },
	    style: ([_vm.paddingStyle, _vm.itemStyle, _vm.itemHoverStyle, {
	      backgroundColor: _vm.backgroundColor
	    }]),
	    attrs: {
	      "role": "menuitem",
	      "tabindex": "-1"
	    },
	    on: {
	      "click": _vm.handleClick,
	      "mouseenter": _vm.onMouseEnter,
	      "focus": _vm.onMouseEnter,
	      "blur": _vm.onMouseLeave,
	      "mouseleave": _vm.onMouseLeave
	    }
	  }, [(_vm.parentMenu.$options.componentName === 'ElMenu' && _vm.rootMenu.collapse && _vm.$slots.title) ? _c('el-tooltip', {
	    attrs: {
	      "effect": "dark",
	      "placement": "right"
	    }
	  }, [_c('div', {
	    attrs: {
	      "slot": "content"
	    },
	    slot: "content"
	  }, [_vm._t("title")], 2), _vm._v(" "), _c('div', {
	    staticStyle: {
	      "position": "absolute",
	      "left": "0",
	      "top": "0",
	      "height": "100%",
	      "width": "100%",
	      "display": "inline-block",
	      "box-sizing": "border-box",
	      "padding": "0 20px",
	      "text-align": "center"
	    }
	  }, [_vm._t("default")], 2)]) : [_vm._t("default"), _vm._v(" "), _vm._t("title")]], 2)
	},staticRenderFns: []}

/***/ }),

/***/ 388:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('el-menu-item', {
	    attrs: {
	      "index": _vm.menu.index,
	      "lable": _vm.menu.lable,
	      "route": _vm.menu.route.path,
	      "disabled": _vm.menu.disabled
	    }
	  }, [
	    [(_vm.menu.icon) ? _c('i', {
	      class: _vm.menu.icon
	    }) : (_vm.menu.img) ? _c('img', {
	      staticStyle: {
	        "max-width": "25px",
	        "max-height": "25px"
	      },
	      attrs: {
	        "src": _vm.menu.img
	      }
	    }) : _c('span', {
	      staticClass: "el-menu-circle"
	    }), _vm._v(" "), _c('span', {
	      staticClass: "menu-lable",
	      attrs: {
	        "slot": "title"
	      },
	      slot: "title"
	    }, [_vm._v(_vm._s(_vm.menu.lable))])]
	  ], 2)
	},staticRenderFns: []}

/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(390),
	  /* template */
	  __webpack_require__(402),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)

	module.exports = Component.exports


/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _MenuItem = __webpack_require__(377);

	var _MenuItem2 = _interopRequireDefault(_MenuItem);

	var _MenuGroup = __webpack_require__(391);

	var _MenuGroup2 = _interopRequireDefault(_MenuGroup);

	var _elsubmenu = __webpack_require__(397);

	var _elsubmenu2 = _interopRequireDefault(_elsubmenu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: "subMenu",
	  props: {
	    menu: {
	      type: Object
	    }
	  },
	  components: { MenuItem: _MenuItem2.default, MenuGroup: _MenuGroup2.default, ElSubmenu: _elsubmenu2.default },
	  data: function data() {
	    return {};
	  }
	};

/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(392),
	  /* template */
	  __webpack_require__(396),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)

	module.exports = Component.exports


/***/ }),

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _MenuItem = __webpack_require__(377);

	var _MenuItem2 = _interopRequireDefault(_MenuItem);

	var _subMenu = __webpack_require__(389);

	var _subMenu2 = _interopRequireDefault(_subMenu);

	var _elmenugroup = __webpack_require__(393);

	var _elmenugroup2 = _interopRequireDefault(_elmenugroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'MenuGroup',
	  components: { MenuItem: _MenuItem2.default, SubMenu: _subMenu2.default, ElMenuItemGroup: _elmenugroup2.default },
	  props: {
	    menu: {
	      type: Object
	    }
	  },
	  data: function data() {
	    return {};
	  }
	};

/***/ }),

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(394),
	  /* template */
	  __webpack_require__(395),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)

	module.exports = Component.exports


/***/ }),

/***/ 394:
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    name: 'ElMenuItemGroup',
	    componentName: 'ElMenuItemGroup',
	    inject: ['rootMenu'],
	    props: {
	        title: {
	            type: String
	        }
	    },
	    data: function data() {
	        return {
	            paddingLeft: 20
	        };
	    },

	    computed: {
	        levelPadding: function levelPadding() {
	            var padding = 20;
	            var parent = this.$parent;
	            if (this.rootMenu.collapse) return 20;
	            while (parent && parent.$options.componentName !== 'ElMenu') {
	                if (parent.$options.componentName === 'ElSubmenu') {
	                    padding += 20;
	                }
	                parent = parent.$parent;
	            }
	            return padding;
	        }
	    }
	};

/***/ }),

/***/ 395:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('li', {
	    staticClass: "el-menu-item-group"
	  }, [_c('div', {
	    staticClass: "el-menu-item-group__title",
	    style: ({
	      paddingLeft: _vm.levelPadding + 'px'
	    })
	  }, [(!_vm.$slots.title) ? [_vm._v(_vm._s(_vm.title))] : _vm._t("title")], 2), _vm._v(" "), _c('ul', [_vm._t("default")], 2)])
	},staticRenderFns: []}

/***/ }),

/***/ 396:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('el-menu-item-group', [(_vm.menu.lable !== null) ? _c('template', {
	    slot: "title"
	  }, [(_vm.menu.icon) ? _c('i', {
	    class: _vm.menu.icon
	  }) : (_vm.menu.img) ? _c('img', {
	    staticStyle: {
	      "max-width": "25px",
	      "max-height": "25px"
	    },
	    attrs: {
	      "src": _vm.menu.img
	    }
	  }) : _c('span', {
	    staticClass: "el-menu-circle"
	  }), _vm._v(" "), _c('span', {
	    staticClass: "menu-lable",
	    attrs: {
	      "slot": "title"
	    },
	    slot: "title"
	  }, [_vm._v(_vm._s(_vm.menu.lable))])]) : _vm._e(), _vm._v(" "), (_vm.menu.childs !== null) ? [_vm._l((_vm.menu.childs), function(menuItem) {
	    return [(menuItem.type === 'item') ? [_c('menu-item', {
	      key: menuItem.id,
	      attrs: {
	        "menu": menuItem
	      }
	    })] : _vm._e(), _vm._v(" "), (menuItem.type === 'submenu') ? [_c('sub-menu', {
	      key: menuItem.id,
	      attrs: {
	        "menu": menuItem
	      }
	    })] : _vm._e()]
	  })] : _vm._e()], 2)
	},staticRenderFns: []}

/***/ }),

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(398)

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(400),
	  /* template */
	  null,
	  /* scopeId */
	  "data-v-f78fe844",
	  /* cssModules */
	  null
	)

	module.exports = Component.exports


/***/ }),

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(399);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-f78fe844&scoped=true!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./elsubmenu.vue", function() {
				var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-f78fe844&scoped=true!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./elsubmenu.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*滚动条样式*/\n.popupbox[data-v-f78fe844]::-webkit-scrollbar{/*滚动条整体样式*/\n  width: 4px;     /*高宽分别对应横竖滚动条的尺寸*/\n  height: 4px;\n}\n.popupbox[data-v-f78fe844]::-webkit-scrollbar-thumb{/*滚动条里面小方块*/\n  border-radius: 5px;\n  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\n  background: rgba(0,0,0,0.1);\n}\n.popupbox[data-v-f78fe844]::-webkit-scrollbar-track{/*滚动条里面轨道*/\n  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\n  border-radius: 0;\n  background: rgba(0,0,0,0.1);\n}  \n", ""]);

	// exports


/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _computed;

	var _collapseTransition = __webpack_require__(401);

	var _collapseTransition2 = _interopRequireDefault(_collapseTransition);

	var _menuMixin = __webpack_require__(381);

	var _menuMixin2 = _interopRequireDefault(_menuMixin);

	var _emitter = __webpack_require__(386);

	var _emitter2 = _interopRequireDefault(_emitter);

	var _vuePopper = __webpack_require__(260);

	var _vuePopper2 = _interopRequireDefault(_vuePopper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var poperMixins = {
	  props: {
	    transformOrigin: {
	      type: [Boolean, String],
	      default: false
	    },
	    offset: _vuePopper2.default.props.offset,
	    boundariesPadding: _vuePopper2.default.props.boundariesPadding,
	    popperOptions: _vuePopper2.default.props.popperOptions
	  },
	  data: _vuePopper2.default.data,
	  methods: _vuePopper2.default.methods,
	  beforeDestroy: _vuePopper2.default.beforeDestroy,
	  deactivated: _vuePopper2.default.deactivated
	};

	exports.default = {
	  name: 'ElSubmenu',

	  componentName: 'ElSubmenu',

	  mixins: [_menuMixin2.default, _emitter2.default, poperMixins],

	  components: { ElCollapseTransition: _collapseTransition2.default },

	  props: {
	    index: {
	      type: String,
	      required: true
	    },
	    showTimeout: {
	      type: Number,
	      default: 300
	    },
	    hideTimeout: {
	      type: Number,
	      default: 300
	    },
	    popperClass: String,
	    disabled: Boolean,
	    popperAppendToBody: {
	      type: Boolean,
	      default: undefined
	    }
	  },

	  data: function data() {
	    return {
	      popperJS: null,
	      timeout: null,
	      items: {},
	      submenus: {},
	      mouseInChild: false,
	      isHover: false
	    };
	  },

	  watch: {
	    opened: function opened(val) {
	      var _this = this;

	      if (this.isMenuPopup) {
	        this.$nextTick(function (_) {
	          _this.updatePopper();
	        });
	      }
	    }
	  },
	  computed: (_computed = {
	    appendToBody: function appendToBody() {
	      return this.popperAppendToBody === undefined ? this.isFirstLevel : this.popperAppendToBody;
	    },
	    menuTransitionName: function menuTransitionName() {
	      return this.rootMenu.collapse ? 'el-zoom-in-left' : 'el-zoom-in-top';
	    },
	    opened: function opened() {
	      return this.rootMenu.openedMenus.indexOf(this.index) > -1;
	    },
	    active: function active() {
	      var isActive = false;
	      var submenus = this.submenus;
	      var items = this.items;

	      Object.keys(items).forEach(function (index) {
	        if (items[index].active) {
	          isActive = true;
	        }
	      });

	      Object.keys(submenus).forEach(function (index) {
	        if (submenus[index].active) {
	          isActive = true;
	        }
	      });

	      return isActive;
	    },
	    hoverBackground: function hoverBackground() {
	      return this.rootMenu.hoverBackground;
	    },
	    backgroundColor: function backgroundColor() {
	      return this.rootMenu.backgroundColor || '';
	    }
	  }, _defineProperty(_computed, 'hoverBackground', function hoverBackground() {
	    return this.rootMenu.hoverBackground || '';
	  }), _defineProperty(_computed, 'activeTextColor', function activeTextColor() {
	    return this.rootMenu.activeTextColor || '';
	  }), _defineProperty(_computed, 'textColor', function textColor() {
	    return this.rootMenu.textColor || '';
	  }), _defineProperty(_computed, 'mode', function mode() {
	    return this.rootMenu.mode;
	  }), _defineProperty(_computed, 'isMenuPopup', function isMenuPopup() {
	    return this.rootMenu.isMenuPopup;
	  }), _defineProperty(_computed, 'titleStyle', function titleStyle() {
	    if (this.mode !== 'horizontal') {
	      return {
	        color: this.textColor
	      };
	    }
	    return {
	      borderBottomColor: this.active ? this.rootMenu.activeTextColor ? this.activeTextColor : '' : 'transparent',
	      color: this.active ? this.activeTextColor : this.textColor,
	      backgroundColor: this.active ? this.hoverBackground : this.backgroundColor
	    };
	  }), _defineProperty(_computed, 'titleHoverStyle', function titleHoverStyle() {
	    var style = {
	      color: this.isHover ? this.activeTextColor : this.textColor
	    };
	    return style;
	  }), _defineProperty(_computed, 'isFirstLevel', function isFirstLevel() {
	    var isFirstLevel = true;
	    var parent = this.$parent;
	    while (parent && parent !== this.rootMenu) {
	      if (['ElSubmenu', 'ElMenuItemGroup'].indexOf(parent.$options.componentName) > -1) {
	        isFirstLevel = false;
	        break;
	      } else {
	        parent = parent.$parent;
	      }
	    }
	    return isFirstLevel;
	  }), _computed),
	  methods: {
	    handleCollapseToggle: function handleCollapseToggle(value) {
	      if (value) {
	        this.initPopper();
	      } else {
	        this.doDestroy();
	      }
	    },
	    addItem: function addItem(item) {
	      this.$set(this.items, item.index, item);
	    },
	    removeItem: function removeItem(item) {
	      delete this.items[item.index];
	    },
	    addSubmenu: function addSubmenu(item) {
	      this.$set(this.submenus, item.index, item);
	    },
	    removeSubmenu: function removeSubmenu(item) {
	      delete this.submenus[item.index];
	    },
	    handleClick: function handleClick() {
	      var rootMenu = this.rootMenu,
	          disabled = this.disabled;

	      if (rootMenu.menuTrigger === 'hover' && rootMenu.mode === 'horizontal' || rootMenu.collapse && rootMenu.mode === 'vertical' || disabled) {
	        return;
	      }
	      this.dispatch('ElMenu', 'submenu-click', this);
	    },
	    handleMouseenter: function handleMouseenter(event) {
	      var _this2 = this;

	      var showTimeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.showTimeout;

	      menuMouseEnterLeave = true;
	      if (myMenuTimeout != null) {
	        clearTimeout(myMenuTimeout);
	      }
	      if (!('ActiveXObject' in window) && event.type === 'focus' && !event.relatedTarget) {
	        return;
	      }
	      var rootMenu = this.rootMenu,
	          disabled = this.disabled;

	      if (rootMenu.menuTrigger === 'click' && rootMenu.mode === 'horizontal' || !rootMenu.collapse && rootMenu.mode === 'vertical' || disabled) {
	        return;
	      }
	      this.dispatch('ElSubmenu', 'mouse-enter-child');
	      clearTimeout(this.timeout);

	      this.timeout = setTimeout(function () {
	        _this2.rootMenu.openMenu(_this2.index, _this2.indexPath);
	      }, showTimeout);

	      if (this.appendToBody) {}
	    },
	    handleMouseleave: function handleMouseleave() {
	      var _this3 = this;

	      var deepDispatch = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	      menuMouseEnterLeave = false;
	      myMenuTimeout = setTimeout(function () {
	        if (!menuMouseEnterLeave) {

	          if (_this3.rootMenu.collapse) {
	            _this3.rootMenu.openedMenus = [];
	          }
	        }
	      }, this.hideTimeout);

	      var rootMenu = this.rootMenu;

	      if (rootMenu.menuTrigger === 'click' && rootMenu.mode === 'horizontal' || !rootMenu.collapse && rootMenu.mode === 'vertical') {
	        return;
	      }
	      this.dispatch('ElSubmenu', 'mouse-leave-child');
	      clearTimeout(this.timeout);
	      this.timeout = setTimeout(function () {

	        !_this3.mouseInChild && _this3.rootMenu.closeMenu(_this3.index);
	      }, this.hideTimeout);

	      if (this.appendToBody && deepDispatch) {
	        if (this.$parent.$options.name === 'ElSubmenu') {
	          this.$parent.handleMouseleave(true);
	        }
	      }
	    },
	    handleTitleMouseenter: function handleTitleMouseenter() {
	      menuMouseEnterLeave = true;
	      if (myMenuTimeout != null) {
	        clearTimeout(myMenuTimeout);
	      }
	      if (this.mode === 'horizontal' && !this.rootMenu.backgroundColor) return;
	      var title = this.$refs['submenu-title'];
	      title && (title.style.backgroundColor = this.rootMenu.hoverBackground, this.isHover = true);
	    },
	    handleTitleMouseleave: function handleTitleMouseleave() {
	      menuMouseEnterLeave = false;
	      if (this.mode === 'horizontal' && !this.rootMenu.backgroundColor) return;
	      var title = this.$refs['submenu-title'];
	      title && (title.style.backgroundColor = this.rootMenu.backgroundColor || '', this.isHover = false);
	    },
	    updatePlacement: function updatePlacement() {
	      this.currentPlacement = this.mode === 'horizontal' && this.isFirstLevel ? 'bottom-start' : 'right-start';
	    },
	    initPopper: function initPopper() {
	      this.referenceElm = this.$el;
	      this.popperElm = this.$refs.menu;
	      this.updatePlacement();
	    }
	  },
	  created: function created() {
	    var _this4 = this;

	    this.$on('toggle-collapse', this.handleCollapseToggle);
	    this.$on('mouse-enter-child', function () {
	      _this4.mouseInChild = true;
	      clearTimeout(_this4.timeout);
	    });
	    this.$on('mouse-leave-child', function () {
	      _this4.mouseInChild = false;
	      clearTimeout(_this4.timeout);
	    });
	  },
	  mounted: function mounted() {
	    this.parentMenu.addSubmenu(this);
	    this.rootMenu.addSubmenu(this);
	    this.initPopper();
	  },
	  beforeDestroy: function beforeDestroy() {
	    this.parentMenu.removeSubmenu(this);
	    this.rootMenu.removeSubmenu(this);
	  },
	  render: function render(h) {
	    var _this5 = this;

	    var active = this.active,
	        opened = this.opened,
	        paddingStyle = this.paddingStyle,
	        titleStyle = this.titleStyle,
	        titleHoverStyle = this.titleHoverStyle,
	        backgroundColor = this.backgroundColor,
	        hoverBackground = this.hoverBackground,
	        rootMenu = this.rootMenu,
	        currentPlacement = this.currentPlacement,
	        menuTransitionName = this.menuTransitionName,
	        mode = this.mode,
	        disabled = this.disabled,
	        popperClass = this.popperClass,
	        $slots = this.$slots,
	        isFirstLevel = this.isFirstLevel;


	    var popupMenu = h(
	      'transition',
	      {
	        attrs: { name: menuTransitionName }
	      },
	      [h(
	        'div',
	        {
	          ref: 'menu',
	          directives: [{
	            name: 'show',
	            value: opened
	          }],

	          style: 'maxHeight:100%;overflow:auto;',
	          'class': ['el-menu--' + mode, popperClass, 'popupbox', 'el-menu--popupbox'],
	          on: {
	            'mouseenter': function mouseenter($event) {
	              return _this5.handleMouseenter($event, 100);
	            },
	            'mouseleave': function mouseleave() {
	              return _this5.handleMouseleave(true);
	            },
	            'focus': function focus($event) {
	              return _this5.handleMouseenter($event, 100);
	            }
	          }
	        },
	        [h(
	          'ul',
	          {
	            attrs: {
	              role: 'menu'
	            },
	            'class': ['el-menu el-menu--popup', 'el-menu--popup-' + currentPlacement],
	            style: { backgroundColor: rootMenu.backgroundColor || '' } },
	          [$slots.default]
	        )]
	      )]
	    );

	    var inlineMenu = h('el-collapse-transition', [h(
	      'ul',
	      {
	        attrs: {
	          role: 'menu'
	        },
	        'class': 'el-menu el-menu--inline',
	        directives: [{
	          name: 'show',
	          value: opened
	        }],

	        style: { backgroundColor: rootMenu.backgroundColor || '' } },
	      [$slots.default]
	    )]);

	    var submenuTitleIcon = rootMenu.mode === 'horizontal' && isFirstLevel || rootMenu.mode === 'vertical' && !rootMenu.collapse ? 'el-icon-arrow-down' : 'el-icon-arrow-right';

	    return h(
	      'li',
	      {
	        'class': {
	          'el-submenu': true,
	          'is-active': active,
	          'is-opened': opened,
	          'is-disabled': disabled
	        },
	        attrs: { role: 'menuitem',
	          'aria-haspopup': 'true',
	          'aria-expanded': opened
	        },
	        on: {
	          'mouseenter': this.handleMouseenter,
	          'mouseleave': function mouseleave() {
	            return _this5.handleMouseleave(false);
	          },
	          'focus': this.handleMouseenter
	        }
	      },
	      [h(
	        'div',
	        {
	          'class': 'el-submenu__title',
	          ref: 'submenu-title',
	          on: {
	            'click': this.handleClick,
	            'mouseenter': this.handleTitleMouseenter,
	            'mouseleave': this.handleTitleMouseleave
	          },

	          style: [paddingStyle, titleStyle, titleHoverStyle, { backgroundColor: backgroundColor }]
	        },
	        [$slots.title, h('i', { 'class': ['el-submenu__icon-arrow', submenuTitleIcon] })]
	      ), this.isMenuPopup ? popupMenu : inlineMenu]
	    );
	  }
	};

/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dom = __webpack_require__(237);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Transition = function () {
	  function Transition() {
	    _classCallCheck(this, Transition);
	  }

	  _createClass(Transition, [{
	    key: 'beforeEnter',
	    value: function beforeEnter(el) {
	      (0, _dom.addClass)(el, 'collapse-transition');
	      if (!el.dataset) el.dataset = {};

	      el.dataset.oldPaddingTop = el.style.paddingTop;
	      el.dataset.oldPaddingBottom = el.style.paddingBottom;

	      el.style.height = '0';
	      el.style.paddingTop = 0;
	      el.style.paddingBottom = 0;
	    }
	  }, {
	    key: 'enter',
	    value: function enter(el) {
	      el.dataset.oldOverflow = el.style.overflow;
	      if (el.scrollHeight !== 0) {
	        el.style.height = el.scrollHeight + 'px';
	        el.style.paddingTop = el.dataset.oldPaddingTop;
	        el.style.paddingBottom = el.dataset.oldPaddingBottom;
	      } else {
	        el.style.height = '';
	        el.style.paddingTop = el.dataset.oldPaddingTop;
	        el.style.paddingBottom = el.dataset.oldPaddingBottom;
	      }
	      el.style.overflow = 'hidden';
	    }
	  }, {
	    key: 'afterEnter',
	    value: function afterEnter(el) {
	      (0, _dom.removeClass)(el, 'collapse-transition');
	      el.style.height = '';
	      el.style.overflow = el.dataset.oldOverflow;
	    }
	  }, {
	    key: 'beforeLeave',
	    value: function beforeLeave(el) {
	      if (!el.dataset) el.dataset = {};
	      el.dataset.oldPaddingTop = el.style.paddingTop;
	      el.dataset.oldPaddingBottom = el.style.paddingBottom;
	      el.dataset.oldOverflow = el.style.overflow;

	      el.style.height = el.scrollHeight + 'px';
	      el.style.overflow = 'hidden';
	    }
	  }, {
	    key: 'leave',
	    value: function leave(el) {
	      if (el.scrollHeight !== 0) {
	        (0, _dom.addClass)(el, 'collapse-transition');
	        el.style.height = 0;
	        el.style.paddingTop = 0;
	        el.style.paddingBottom = 0;
	      }
	    }
	  }, {
	    key: 'afterLeave',
	    value: function afterLeave(el) {
	      (0, _dom.removeClass)(el, 'collapse-transition');
	      el.style.height = '';
	      el.style.overflow = el.dataset.oldOverflow;
	      el.style.paddingTop = el.dataset.oldPaddingTop;
	      el.style.paddingBottom = el.dataset.oldPaddingBottom;
	    }
	  }]);

	  return Transition;
	}();

	exports.default = {
	  name: 'ElCollapseTransition',
	  functional: true,
	  render: function render(h, _ref) {
	    var children = _ref.children;

	    var data = {
	      on: new Transition()
	    };

	    return h('transition', data, children);
	  }
	};

/***/ }),

/***/ 402:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return (_vm.menu.type === 'submenu') ? _c('el-submenu', {
	    attrs: {
	      "index": _vm.menu.index,
	      "disabled": _vm.menu.disabled
	    }
	  }, [(_vm.menu.lable !== null) ? _c('template', {
	    slot: "title"
	  }, [(_vm.menu.icon) ? _c('i', {
	    class: _vm.menu.icon
	  }) : (_vm.menu.img) ? _c('img', {
	    staticStyle: {
	      "max-width": "25px",
	      "max-height": "25px"
	    },
	    attrs: {
	      "src": _vm.menu.img
	    }
	  }) : _c('span', {
	    staticClass: "el-menu-circle"
	  }), _vm._v(" "), _c('span', {
	    staticClass: "menu-lable",
	    attrs: {
	      "slot": "title"
	    },
	    slot: "title"
	  }, [_vm._v(_vm._s(_vm.menu.lable))])]) : _vm._e(), _vm._v(" "), (_vm.menu.childs !== null) ? [_vm._l((_vm.menu.childs), function(menuItem) {
	    return [(menuItem.type === 'item') ? [_c('menu-item', {
	      key: menuItem.id,
	      attrs: {
	        "menu": menuItem
	      }
	    })] : _vm._e(), _vm._v(" "), (menuItem.type === 'submenu') ? [_c('sub-menu', {
	      key: menuItem.id,
	      attrs: {
	        "menu": menuItem
	      }
	    })] : _vm._e(), _vm._v(" "), (menuItem.type === 'group') ? [_c('menu-group', {
	      key: menuItem.id,
	      attrs: {
	        "menu": menuItem
	      }
	    })] : _vm._e()]
	  })] : _vm._e()], 2) : _vm._e()
	},staticRenderFns: []}

/***/ }),

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(404),
	  /* template */
	  null,
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)

	module.exports = Component.exports


/***/ }),

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _emitter = __webpack_require__(386);

	var _emitter2 = _interopRequireDefault(_emitter);

	var _migrating = __webpack_require__(405);

	var _migrating2 = _interopRequireDefault(_migrating);

	var _ariaMenubar = __webpack_require__(406);

	var _ariaMenubar2 = _interopRequireDefault(_ariaMenubar);

	var _dom = __webpack_require__(237);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'ElMenu',

	  render: function render(h) {
	    var component = h(
	      'ul',
	      {
	        attrs: {
	          role: 'menubar'
	        },
	        key: +this.collapse,
	        style: { backgroundColor: this.backgroundColor || '' },
	        'class': {
	          'el-menu--horizontal': this.mode === 'horizontal',
	          'el-menu--collapse': this.collapse,
	          "el-menu": true
	        }
	      },
	      [this.$slots.default]
	    );

	    if (this.collapseTransition) {
	      return h('el-menu-collapse-transition', [component]);
	    } else {
	      return component;
	    }
	  },


	  componentName: 'ElMenu',

	  mixins: [_emitter2.default, _migrating2.default],

	  provide: function provide() {
	    return {
	      rootMenu: this
	    };
	  },


	  components: {
	    'el-menu-collapse-transition': {
	      functional: true,
	      render: function render(createElement, context) {
	        var data = {
	          props: {
	            mode: 'out-in'
	          },
	          on: {
	            beforeEnter: function beforeEnter(el) {
	              el.style.opacity = 0.2;
	            },
	            enter: function enter(el) {
	              (0, _dom.addClass)(el, 'el-opacity-transition');
	              el.style.opacity = 1;
	            },
	            afterEnter: function afterEnter(el) {
	              (0, _dom.removeClass)(el, 'el-opacity-transition');
	              el.style.opacity = '';
	            },
	            beforeLeave: function beforeLeave(el) {
	              if (!el.dataset) el.dataset = {};

	              if ((0, _dom.hasClass)(el, 'el-menu--collapse')) {
	                (0, _dom.removeClass)(el, 'el-menu--collapse');
	                el.dataset.oldOverflow = el.style.overflow;
	                el.dataset.scrollWidth = el.clientWidth;
	                (0, _dom.addClass)(el, 'el-menu--collapse');
	              } else {
	                (0, _dom.addClass)(el, 'el-menu--collapse');
	                el.dataset.oldOverflow = el.style.overflow;
	                el.dataset.scrollWidth = el.clientWidth;
	                (0, _dom.removeClass)(el, 'el-menu--collapse');
	              }

	              el.style.width = el.scrollWidth + 'px';
	              el.style.overflow = 'hidden';
	            },
	            leave: function leave(el) {
	              (0, _dom.addClass)(el, 'horizontal-collapse-transition');
	              el.style.width = el.dataset.scrollWidth + 'px';
	            }
	          }
	        };
	        return createElement('transition', data, context.children);
	      }
	    }
	  },

	  props: {
	    mode: {
	      type: String,
	      default: 'vertical'
	    },
	    defaultActive: {
	      type: String,
	      default: ''
	    },
	    defaultOpeneds: Array,
	    uniqueOpened: Boolean,
	    router: Boolean,
	    menuTrigger: {
	      type: String,
	      default: 'hover'
	    },
	    collapse: Boolean,
	    backgroundColor: String,
	    hoverBackground: String,
	    textColor: String,
	    activeTextColor: String,
	    collapseTransition: {
	      type: Boolean,
	      default: true
	    }
	  },
	  data: function data() {
	    return {
	      activeIndex: this.defaultActive,
	      openedMenus: this.defaultOpeneds && !this.collapse ? this.defaultOpeneds.slice(0) : [],
	      items: {},
	      submenus: {}
	    };
	  },

	  computed: {
	    isMenuPopup: function isMenuPopup() {
	      return this.mode === 'horizontal' || this.mode === 'vertical' && this.collapse;
	    }
	  },
	  watch: {
	    defaultActive: function defaultActive(value) {
	      if (!this.items[value]) {
	        this.activeIndex = null;
	      }
	      this.updateActiveIndex(value);
	    },
	    defaultOpeneds: function defaultOpeneds(value) {
	      if (!this.collapse) {
	        this.openedMenus = value;
	      }
	    },
	    collapse: function collapse(value) {
	      if (value) this.openedMenus = [];
	      this.broadcast('ElSubmenu', 'toggle-collapse', value);
	    }
	  },
	  methods: {
	    updateActiveIndex: function updateActiveIndex(val) {
	      var item = this.items[val] || this.items[this.activeIndex] || this.items[this.defaultActive];
	      if (item) {
	        this.activeIndex = item.index;
	        this.initOpenedMenu();
	      } else {
	        this.activeIndex = null;
	      }
	    },
	    getMigratingConfig: function getMigratingConfig() {
	      return {
	        props: {
	          'theme': 'theme is removed.'
	        },
	        events: {}
	      };
	    },
	    getColorChannels: function getColorChannels(color) {
	      color = color.replace('#', '');
	      if (/^[0-9a-fA-F]{3}$/.test(color)) {
	        color = color.split('');
	        for (var i = 2; i >= 0; i--) {
	          color.splice(i, 0, color[i]);
	        }
	        color = color.join('');
	      }
	      if (/^[0-9a-fA-F]{6}$/.test(color)) {
	        return {
	          red: parseInt(color.slice(0, 2), 16),
	          green: parseInt(color.slice(2, 4), 16),
	          blue: parseInt(color.slice(4, 6), 16)
	        };
	      } else {
	        return {
	          red: 255,
	          green: 255,
	          blue: 255
	        };
	      }
	    },
	    mixColor: function mixColor(color, percent) {
	      var _getColorChannels = this.getColorChannels(color),
	          red = _getColorChannels.red,
	          green = _getColorChannels.green,
	          blue = _getColorChannels.blue;

	      if (percent > 0) {
	        red *= 1 - percent;
	        green *= 1 - percent;
	        blue *= 1 - percent;
	      } else {
	        red += (255 - red) * percent;
	        green += (255 - green) * percent;
	        blue += (255 - blue) * percent;
	      }
	      return 'rgb(' + Math.round(red) + ', ' + Math.round(green) + ', ' + Math.round(blue) + ')';
	    },
	    addItem: function addItem(item) {
	      this.$set(this.items, item.index, item);
	    },
	    removeItem: function removeItem(item) {
	      delete this.items[item.index];
	    },
	    addSubmenu: function addSubmenu(item) {
	      this.$set(this.submenus, item.index, item);
	    },
	    removeSubmenu: function removeSubmenu(item) {
	      delete this.submenus[item.index];
	    },
	    openMenu: function openMenu(index, indexPath) {
	      var openedMenus = this.openedMenus;
	      if (openedMenus.indexOf(index) !== -1) return;

	      if (this.uniqueOpened) {
	        this.openedMenus = openedMenus.filter(function (index) {
	          return indexPath.indexOf(index) !== -1;
	        });
	      }
	      this.openedMenus.push(index);
	    },
	    closeMenu: function closeMenu(index) {
	      var i = this.openedMenus.indexOf(index);
	      if (i !== -1) {
	        this.openedMenus.splice(i, 1);
	      }
	    },
	    handleSubmenuClick: function handleSubmenuClick(submenu) {
	      var index = submenu.index,
	          indexPath = submenu.indexPath;

	      var isOpened = this.openedMenus.indexOf(index) !== -1;

	      if (isOpened) {
	        this.closeMenu(index);
	        this.$emit('close', index, indexPath);
	      } else {
	        this.openMenu(index, indexPath);
	        this.$emit('open', index, indexPath);
	      }
	    },
	    handleItemClick: function handleItemClick(item) {
	      var _this = this;

	      var index = item.index,
	          indexPath = item.indexPath,
	          route = item.route;

	      var oldActiveIndex = this.activeIndex;
	      var hasIndex = item.index !== null;

	      if (hasIndex) {
	        this.activeIndex = item.index;
	      }
	      route['label'] = item.lable;
	      this.$emit('select', index, indexPath, route);

	      if (this.mode === 'horizontal' || this.collapse) {
	        this.openedMenus = [];
	      }

	      if (this.router && hasIndex) {
	        this.routeToItem(item, function (error) {
	          _this.activeIndex = oldActiveIndex;
	          if (error) {
	            if (error.name === 'NavigationDuplicated') return;
	            console.error(error);
	          }
	        });
	      }
	    },
	    initOpenedMenu: function initOpenedMenu() {
	      var _this2 = this;

	      var index = this.activeIndex;
	      var activeItem = this.items[index];
	      if (!activeItem || this.mode === 'horizontal' || this.collapse) return;

	      var indexPath = activeItem.indexPath;

	      indexPath.forEach(function (index) {
	        var submenu = _this2.submenus[index];
	        submenu && _this2.openMenu(index, submenu.indexPath);
	      });
	    },
	    routeToItem: function routeToItem(item, onError) {
	      var route = item.route || item.index;
	      try {
	        this.$router.push(route, function () {}, onError);
	      } catch (e) {
	        console.error(e);
	      }
	    },
	    open: function open(index) {
	      var _this3 = this;

	      var indexPath = this.submenus[index.toString()].indexPath;

	      indexPath.forEach(function (i) {
	        return _this3.openMenu(i, indexPath);
	      });
	    },
	    close: function close(index) {
	      this.closeMenu(index);
	    }
	  },
	  mounted: function mounted() {
	    this.initOpenedMenu();
	    this.$on('item-click', this.handleItemClick);
	    this.$on('submenu-click', this.handleSubmenuClick);
	    if (this.mode === 'horizontal') {
	      new _ariaMenubar2.default(this.$el);
	    }
	    this.$watch('items', this.updateActiveIndex);
	  }
	};

/***/ }),

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  mounted: function mounted() {
	    if (false) return;
	    if (!this.$vnode) return;

	    var _getMigratingConfig = this.getMigratingConfig(),
	        props = _getMigratingConfig.props,
	        events = _getMigratingConfig.events;

	    var _$vnode = this.$vnode,
	        data = _$vnode.data,
	        componentOptions = _$vnode.componentOptions;

	    var definedProps = data.attrs || {};
	    var definedEvents = componentOptions.listeners || {};

	    for (var propName in definedProps) {
	      if (definedProps.hasOwnProperty(propName) && props[propName]) {
	        console.warn('[Element Migrating][Attribute]: ' + props[propName]);
	      }
	    }

	    for (var eventName in definedEvents) {
	      if (definedEvents.hasOwnProperty(eventName) && events[eventName]) {
	        console.warn('[Element Migrating][Event]: ' + events[eventName]);
	      }
	    }
	  },

	  methods: {
	    getMigratingConfig: function getMigratingConfig() {
	      return {
	        props: {},
	        events: {}
	      };
	    }
	  }
	};

/***/ }),

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ariaMenuitem = __webpack_require__(407);

	var _ariaMenuitem2 = _interopRequireDefault(_ariaMenuitem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Menu = function Menu(domNode) {
	  this.domNode = domNode;
	  this.init();
	};

	Menu.prototype.init = function () {
	  var menuChildren = this.domNode.childNodes;
	  [].filter.call(menuChildren, function (child) {
	    return child.nodeType === 1;
	  }).forEach(function (child) {
	    new _ariaMenuitem2.default(child);
	  });
	};
	exports.default = Menu;

/***/ }),

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ariaUtils = __webpack_require__(408);

	var _ariaUtils2 = _interopRequireDefault(_ariaUtils);

	var _ariaSubmenu = __webpack_require__(409);

	var _ariaSubmenu2 = _interopRequireDefault(_ariaSubmenu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var MenuItem = function MenuItem(domNode) {
	  this.domNode = domNode;
	  this.submenu = null;
	  this.init();
	};

	MenuItem.prototype.init = function () {
	  this.domNode.setAttribute('tabindex', '0');
	  var menuChild = this.domNode.querySelector('.el-menu');
	  if (menuChild) {
	    this.submenu = new _ariaSubmenu2.default(this, menuChild);
	  }
	  this.addListeners();
	};

	MenuItem.prototype.addListeners = function () {
	  var _this = this;

	  var keys = _ariaUtils2.default.keys;
	  this.domNode.addEventListener('keydown', function (event) {
	    var prevDef = false;
	    switch (event.keyCode) {
	      case keys.down:
	        _ariaUtils2.default.triggerEvent(event.currentTarget, 'mouseenter');
	        _this.submenu && _this.submenu.gotoSubIndex(0);
	        prevDef = true;
	        break;
	      case keys.up:
	        _ariaUtils2.default.triggerEvent(event.currentTarget, 'mouseenter');
	        _this.submenu && _this.submenu.gotoSubIndex(_this.submenu.subMenuItems.length - 1);
	        prevDef = true;
	        break;
	      case keys.tab:
	        _ariaUtils2.default.triggerEvent(event.currentTarget, 'mouseleave');
	        break;
	      case keys.enter:
	      case keys.space:
	        prevDef = true;
	        event.currentTarget.click();
	        break;
	    }
	    if (prevDef) {
	      event.preventDefault();
	    }
	  });
	};

	exports.default = MenuItem;

/***/ }),

/***/ 408:
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var aria = aria || {};

	aria.Utils = aria.Utils || {};

	aria.Utils.focusFirstDescendant = function (element) {
	  for (var i = 0; i < element.childNodes.length; i++) {
	    var child = element.childNodes[i];
	    if (aria.Utils.attemptFocus(child) || aria.Utils.focusFirstDescendant(child)) {
	      return true;
	    }
	  }
	  return false;
	};

	aria.Utils.focusLastDescendant = function (element) {
	  for (var i = element.childNodes.length - 1; i >= 0; i--) {
	    var child = element.childNodes[i];
	    if (aria.Utils.attemptFocus(child) || aria.Utils.focusLastDescendant(child)) {
	      return true;
	    }
	  }
	  return false;
	};

	aria.Utils.attemptFocus = function (element) {
	  if (!aria.Utils.isFocusable(element)) {
	    return false;
	  }
	  aria.Utils.IgnoreUtilFocusChanges = true;
	  try {
	    element.focus();
	  } catch (e) {}
	  aria.Utils.IgnoreUtilFocusChanges = false;
	  return document.activeElement === element;
	};

	aria.Utils.isFocusable = function (element) {
	  if (element.tabIndex > 0 || element.tabIndex === 0 && element.getAttribute('tabIndex') !== null) {
	    return true;
	  }

	  if (element.disabled) {
	    return false;
	  }

	  switch (element.nodeName) {
	    case 'A':
	      return !!element.href && element.rel !== 'ignore';
	    case 'INPUT':
	      return element.type !== 'hidden' && element.type !== 'file';
	    case 'BUTTON':
	    case 'SELECT':
	    case 'TEXTAREA':
	      return true;
	    default:
	      return false;
	  }
	};

	aria.Utils.triggerEvent = function (elm, name) {
	  var eventName = void 0;

	  if (/^mouse|click/.test(name)) {
	    eventName = 'MouseEvents';
	  } else if (/^key/.test(name)) {
	    eventName = 'KeyboardEvent';
	  } else {
	    eventName = 'HTMLEvents';
	  }
	  var evt = document.createEvent(eventName);

	  for (var _len = arguments.length, opts = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    opts[_key - 2] = arguments[_key];
	  }

	  evt.initEvent.apply(evt, [name].concat(opts));
	  elm.dispatchEvent ? elm.dispatchEvent(evt) : elm.fireEvent('on' + name, evt);

	  return elm;
	};

	aria.Utils.keys = {
	  tab: 9,
	  enter: 13,
	  space: 32,
	  left: 37,
	  up: 38,
	  right: 39,
	  down: 40,
	  esc: 27
	};

	exports.default = aria.Utils;

/***/ }),

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ariaUtils = __webpack_require__(408);

	var _ariaUtils2 = _interopRequireDefault(_ariaUtils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SubMenu = function SubMenu(parent, domNode) {
	  this.domNode = domNode;
	  this.parent = parent;
	  this.subMenuItems = [];
	  this.subIndex = 0;
	  this.init();
	};

	SubMenu.prototype.init = function () {
	  this.subMenuItems = this.domNode.querySelectorAll('li');
	  this.addListeners();
	};

	SubMenu.prototype.gotoSubIndex = function (idx) {
	  if (idx === this.subMenuItems.length) {
	    idx = 0;
	  } else if (idx < 0) {
	    idx = this.subMenuItems.length - 1;
	  }
	  this.subMenuItems[idx].focus();
	  this.subIndex = idx;
	};

	SubMenu.prototype.addListeners = function () {
	  var _this = this;

	  var keys = _ariaUtils2.default.keys;
	  var parentNode = this.parent.domNode;
	  Array.prototype.forEach.call(this.subMenuItems, function (el) {
	    el.addEventListener('keydown', function (event) {
	      var prevDef = false;
	      switch (event.keyCode) {
	        case keys.down:
	          _this.gotoSubIndex(_this.subIndex + 1);
	          prevDef = true;
	          break;
	        case keys.up:
	          _this.gotoSubIndex(_this.subIndex - 1);
	          prevDef = true;
	          break;
	        case keys.tab:
	          _ariaUtils2.default.triggerEvent(parentNode, 'mouseleave');
	          break;
	        case keys.enter:
	        case keys.space:
	          prevDef = true;
	          event.currentTarget.click();
	          break;
	      }
	      if (prevDef) {
	        event.preventDefault();
	        event.stopPropagation();
	      }
	      return false;
	    });
	  });
	};

	exports.default = SubMenu;

/***/ }),

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(411);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js!../../node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"extract\":true,\"remove\":true}!../../node_modules/style-loader/index.js!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js?sourceMap!./menu3.less", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js!../../node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"extract\":true,\"remove\":true}!../../node_modules/style-loader/index.js!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js?sourceMap!./menu3.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ }),

/***/ 412:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "el-menu-container"
	  }, [_c('el-menu', {
	    staticClass: "el-menu-vertical-demo",
	    attrs: {
	      "default-active": _vm.defaultActive,
	      "collapse": _vm.collapse,
	      "unique-opened": _vm.uniqueOpened,
	      "default-openeds": _vm.defaultOpeneds,
	      "router": _vm.router,
	      "hover-background": _vm.hoverBackground,
	      "background-color": _vm.backgroundColor,
	      "text-color": _vm.textColor,
	      "active-text-color": _vm.activeTextColor,
	      "mode": _vm.mode,
	      "collapse-transition": _vm.collapseTransition,
	      "menu-trigger": _vm.menuTrigger
	    },
	    on: {
	      "open": _vm.handleOpen,
	      "close": _vm.handleClose,
	      "select": _vm.handleSelect
	    }
	  }, [_vm._l((_vm.menudata), function(menuItem) {
	    return [(menuItem.type === 'item') ? [_c('menu-item', {
	      key: menuItem.id,
	      attrs: {
	        "menu": menuItem
	      }
	    })] : _vm._e(), _vm._v(" "), (menuItem.type === 'submenu') ? [_c('sub-menu', {
	      key: menuItem.id,
	      attrs: {
	        "menu": menuItem
	      }
	    })] : _vm._e(), _vm._v(" "), (menuItem.type === 'group') ? [_c('menu-group', {
	      key: menuItem.id,
	      attrs: {
	        "menu": menuItem
	      }
	    })] : _vm._e()]
	  })], 2)], 1)
	},staticRenderFns: []}

/***/ })

/******/ })
});
;