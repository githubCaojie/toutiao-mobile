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

	var _index = __webpack_require__(319);

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
	  InfiniteScroll: _index2.default
	};

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

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _infiniteScroll = __webpack_require__(320);

	var _infiniteScroll2 = _interopRequireDefault(_infiniteScroll);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_infiniteScroll2.default.install = function (Vue) {
	  Vue.directive(_infiniteScroll2.default.name, _infiniteScroll2.default);
	};

	exports.default = _infiniteScroll2.default;

/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _throttle = __webpack_require__(5);

	var _throttle2 = _interopRequireDefault(_throttle);

	var _types = __webpack_require__(321);

	var _dom = __webpack_require__(237);

	var _vueInfiniteScroll = __webpack_require__(322);

	var _vueInfiniteScroll2 = _interopRequireDefault(_vueInfiniteScroll);

	var _vue = __webpack_require__(238);

	var _vue2 = _interopRequireDefault(_vue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(323);

	_vue2.default.use(_vueInfiniteScroll2.default);

	var getStyleComputedProperty = function getStyleComputedProperty(element, property) {
	  if (element === window) {
	    element = document.documentElement;
	  }

	  if (element.nodeType !== 1) {
	    return [];
	  }

	  var css = window.getComputedStyle(element, null);
	  return property ? css[property] : css;
	};

	var entries = function entries(obj) {
	  return Object.keys(obj || {}).map(function (key) {
	    return [key, obj[key]];
	  });
	};

	var getPositionSize = function getPositionSize(el, prop) {
	  return el === window || el === document ? document.documentElement[prop] : el[prop];
	};

	var getOffsetHeight = function getOffsetHeight(el) {
	  return getPositionSize(el, 'offsetHeight');
	};

	var getClientHeight = function getClientHeight(el) {
	  return getPositionSize(el, 'clientHeight');
	};

	var scope = 'ElInfiniteScroll';
	var attributes = {
	  delay: {
	    type: Number,
	    default: 200
	  },
	  distance: {
	    type: Number,
	    default: 0
	  },
	  disabled: {
	    type: Boolean,
	    default: false
	  },
	  immediate: {
	    type: Boolean,
	    default: true
	  }
	};

	var getScrollOptions = function getScrollOptions(el, vm) {
	  if (!(0, _types.isHtmlElement)(el)) return {};

	  return entries(attributes).reduce(function (map, _ref) {
	    var _ref2 = _slicedToArray(_ref, 2),
	        key = _ref2[0],
	        option = _ref2[1];

	    var type = option.type,
	        defaultValue = option.default;

	    var value = el.getAttribute('infinite-scroll-' + key);
	    value = (0, _types.isUndefined)(vm[value]) ? value : vm[value];
	    switch (type) {
	      case Number:
	        value = Number(value);
	        value = Number.isNaN(value) ? defaultValue : value;
	        break;
	      case Boolean:
	        value = (0, _types.isDefined)(value) ? value === 'false' ? false : Boolean(value) : defaultValue;
	        break;
	      default:
	        value = type(value);
	    }
	    map[key] = value;
	    return map;
	  }, {});
	};

	var getElementTop = function getElementTop(el) {
	  return el.getBoundingClientRect().top;
	};

	var handleScroll = function handleScroll(cb) {
	  var _scope = this[scope],
	      el = _scope.el,
	      vm = _scope.vm,
	      container = _scope.container,
	      observer = _scope.observer;

	  var _getScrollOptions = getScrollOptions(el, vm),
	      distance = _getScrollOptions.distance,
	      disabled = _getScrollOptions.disabled;

	  if (disabled) return;

	  var containerInfo = container.getBoundingClientRect();
	  if (!containerInfo.width && !containerInfo.height) return;

	  var shouldTrigger = false;

	  if (container === el) {
	    var scrollBottom = container.scrollTop + getClientHeight(container);
	    shouldTrigger = container.scrollHeight - scrollBottom <= distance;
	  } else {
	    var heightBelowTop = getOffsetHeight(el) + getElementTop(el) - getElementTop(container);
	    var offsetHeight = getOffsetHeight(container);
	    var borderBottom = Number.parseFloat(getStyleComputedProperty(container, 'borderBottomWidth'));
	    shouldTrigger = heightBelowTop - offsetHeight + borderBottom <= distance;
	  }

	  if (shouldTrigger && (0, _types.isFunction)(cb)) {
	    cb.call(vm);
	  } else if (observer) {
	    observer.disconnect();
	    this[scope].observer = null;
	  }
	};

	exports.default = {
	  name: 'InfiniteScroll',
	  inserted: function inserted(el, binding, vnode) {
	    var cb = binding.value;

	    var vm = vnode.context;

	    var container = (0, _dom.getScrollContainer)(el, true);

	    var _getScrollOptions2 = getScrollOptions(el, vm),
	        delay = _getScrollOptions2.delay,
	        immediate = _getScrollOptions2.immediate;

	    var onScroll = (0, _throttle2.default)(delay, handleScroll.bind(el, cb));

	    el[scope] = { el: el, vm: vm, container: container, onScroll: onScroll };

	    if (container) {
	      container.addEventListener('scroll', onScroll);

	      if (immediate) {
	        var observer = el[scope].observer = new MutationObserver(onScroll);
	        observer.observe(container, { childList: true, subtree: true });
	        onScroll();
	      }
	    }
	  },
	  unbind: function unbind(el) {
	    var _el$scope = el[scope],
	        container = _el$scope.container,
	        onScroll = _el$scope.onScroll;

	    if (container) {
	      container.removeEventListener('scroll', onScroll);
	    }
	  }
	};

/***/ }),

/***/ 321:
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.isString = isString;
	exports.isObject = isObject;
	exports.isHtmlElement = isHtmlElement;
	function isString(obj) {
	  return Object.prototype.toString.call(obj) === '[object String]';
	}

	function isObject(obj) {
	  return Object.prototype.toString.call(obj) === '[object Object]';
	}

	function isHtmlElement(node) {
	  return node && node.nodeType === Node.ELEMENT_NODE;
	}

	var isFunction = exports.isFunction = function isFunction(functionToCheck) {
	  var getType = {};
	  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
	};

	var isUndefined = exports.isUndefined = function isUndefined(val) {
	  return val === void 0;
	};

	var isDefined = exports.isDefined = function isDefined(val) {
	  return val !== undefined && val !== null;
	};

/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  (global.infiniteScroll = factory());
	}(this, function () { 'use strict';

	  var ctx = '@@InfiniteScroll';

	  var throttle = function throttle(fn, delay) {
	    var now, lastExec, timer, context, args; //eslint-disable-line

	    var execute = function execute() {
	      fn.apply(context, args);
	      lastExec = now;
	    };

	    return function () {
	      context = this;
	      args = arguments;

	      now = Date.now();

	      if (timer) {
	        clearTimeout(timer);
	        timer = null;
	      }

	      if (lastExec) {
	        var diff = delay - (now - lastExec);
	        if (diff < 0) {
	          execute();
	        } else {
	          timer = setTimeout(function () {
	            execute();
	          }, diff);
	        }
	      } else {
	        execute();
	      }
	    };
	  };

	  var getScrollTop = function getScrollTop(element) {
	    if (element === window) {
	      return Math.max(window.pageYOffset || 0, document.documentElement.scrollTop);
	    }

	    return element.scrollTop;
	  };

	  var getComputedStyle = document.defaultView.getComputedStyle;

	  var getScrollEventTarget = function getScrollEventTarget(element) {
	    var currentNode = element;
	    // bugfix, see http://w3help.org/zh-cn/causes/SD9013 and http://stackoverflow.com/questions/17016740/onscroll-function-is-not-working-for-chrome
	    while (currentNode && currentNode.tagName !== 'HTML' && currentNode.tagName !== 'BODY' && currentNode.nodeType === 1) {
	      var overflowY = getComputedStyle(currentNode).overflowY;
	      if (overflowY === 'scroll' || overflowY === 'auto') {
	        return currentNode;
	      }
	      currentNode = currentNode.parentNode;
	    }
	    return window;
	  };

	  var getVisibleHeight = function getVisibleHeight(element) {
	    if (element === window) {
	      return document.documentElement.clientHeight;
	    }

	    return element.clientHeight;
	  };

	  var getElementTop = function getElementTop(element) {
	    if (element === window) {
	      return getScrollTop(window);
	    }
	    return element.getBoundingClientRect().top + getScrollTop(window);
	  };

	  var isAttached = function isAttached(element) {
	    var currentNode = element.parentNode;
	    while (currentNode) {
	      if (currentNode.tagName === 'HTML') {
	        return true;
	      }
	      if (currentNode.nodeType === 11) {
	        return false;
	      }
	      currentNode = currentNode.parentNode;
	    }
	    return false;
	  };

	  var doBind = function doBind() {
	    if (this.binded) return; // eslint-disable-line
	    this.binded = true;

	    var directive = this;
	    var element = directive.el;

	    var throttleDelayExpr = element.getAttribute('infinite-scroll-throttle-delay');
	    var throttleDelay = 200;
	    if (throttleDelayExpr) {
	      throttleDelay = Number(directive.vm[throttleDelayExpr] || throttleDelayExpr);
	      if (isNaN(throttleDelay) || throttleDelay < 0) {
	        throttleDelay = 200;
	      }
	    }
	    directive.throttleDelay = throttleDelay;

	    directive.scrollEventTarget = getScrollEventTarget(element);
	    directive.scrollListener = throttle(doCheck.bind(directive), directive.throttleDelay);
	    directive.scrollEventTarget.addEventListener('scroll', directive.scrollListener);

	    this.vm.$on('hook:beforeDestroy', function () {
	      directive.scrollEventTarget.removeEventListener('scroll', directive.scrollListener);
	    });

	    var disabledExpr = element.getAttribute('infinite-scroll-disabled');
	    var disabled = false;

	    if (disabledExpr) {
	      this.vm.$watch(disabledExpr, function (value) {
	        directive.disabled = value;
	        if (!value && directive.immediateCheck) {
	          doCheck.call(directive);
	        }
	      });
	      disabled = Boolean(directive.vm[disabledExpr]);
	    }
	    directive.disabled = disabled;

	    var distanceExpr = element.getAttribute('infinite-scroll-distance');
	    var distance = 0;
	    if (distanceExpr) {
	      distance = Number(directive.vm[distanceExpr] || distanceExpr);
	      if (isNaN(distance)) {
	        distance = 0;
	      }
	    }
	    directive.distance = distance;

	    var immediateCheckExpr = element.getAttribute('infinite-scroll-immediate-check');
	    var immediateCheck = true;
	    if (immediateCheckExpr) {
	      immediateCheck = Boolean(directive.vm[immediateCheckExpr]);
	    }
	    directive.immediateCheck = immediateCheck;

	    if (immediateCheck) {
	      doCheck.call(directive);
	    }

	    var eventName = element.getAttribute('infinite-scroll-listen-for-event');
	    if (eventName) {
	      directive.vm.$on(eventName, function () {
	        doCheck.call(directive);
	      });
	    }
	  };

	  var doCheck = function doCheck(force) {
	    var scrollEventTarget = this.scrollEventTarget;
	    var element = this.el;
	    var distance = this.distance;

	    if (force !== true && this.disabled) return; //eslint-disable-line
	    var viewportScrollTop = getScrollTop(scrollEventTarget);
	    var viewportBottom = viewportScrollTop + getVisibleHeight(scrollEventTarget);

	    var shouldTrigger = false;

	    if (scrollEventTarget === element) {
	      shouldTrigger = scrollEventTarget.scrollHeight - viewportBottom <= distance;
	    } else {
	      var elementBottom = getElementTop(element) - getElementTop(scrollEventTarget) + element.offsetHeight + viewportScrollTop;

	      shouldTrigger = viewportBottom + distance >= elementBottom;
	    }

	    if (shouldTrigger && this.expression) {
	      this.expression();
	    }
	  };

	  var InfiniteScroll = {
	    bind: function bind(el, binding, vnode) {
	      el[ctx] = {
	        el: el,
	        vm: vnode.context,
	        expression: binding.value
	      };
	      var args = arguments;
	      el[ctx].vm.$on('hook:mounted', function () {
	        el[ctx].vm.$nextTick(function () {
	          if (isAttached(el)) {
	            doBind.call(el[ctx], args);
	          }

	          el[ctx].bindTryCount = 0;

	          var tryBind = function tryBind() {
	            if (el[ctx].bindTryCount > 10) return; //eslint-disable-line
	            el[ctx].bindTryCount++;
	            if (isAttached(el)) {
	              doBind.call(el[ctx], args);
	            } else {
	              setTimeout(tryBind, 50);
	            }
	          };

	          tryBind();
	        });
	      });
	    },
	    unbind: function unbind(el) {
	      if (el && el[ctx] && el[ctx].scrollEventTarget) el[ctx].scrollEventTarget.removeEventListener('scroll', el[ctx].scrollListener);
	    }
	  };

	  var install = function install(Vue) {
	    Vue.directive('InfiniteScroll', InfiniteScroll);
	  };

	  if (window.Vue) {
	    window.infiniteScroll = InfiniteScroll;
	    Vue.use(install); // eslint-disable-line
	  }

	  InfiniteScroll.install = install;

	  return InfiniteScroll;

	}));

/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(324);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js!../../node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"extract\":true,\"remove\":true}!../../node_modules/style-loader/index.js!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js?sourceMap!./infinite-scroll.less", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js!../../node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"extract\":true,\"remove\":true}!../../node_modules/style-loader/index.js!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js?sourceMap!./infinite-scroll.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ })

/******/ })
});
;