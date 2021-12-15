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

	var _index = __webpack_require__(508);

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
	  Widget: _index2.default
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

/***/ 283:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_283__;

/***/ }),

/***/ 480:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(481);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js!../../node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"extract\":true,\"remove\":true}!../../node_modules/style-loader/index.js!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js?sourceMap!./checkbox.less", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js!../../node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"extract\":true,\"remove\":true}!../../node_modules/style-loader/index.js!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js?sourceMap!./checkbox.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 481:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ }),

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var HyWidget = __webpack_require__(509);

	HyWidget.install = function (Vue) {
	  Vue.component(HyWidget.name, HyWidget);
	};

	exports.default = HyWidget;

/***/ }),

/***/ 509:
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(510)

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(512),
	  /* template */
	  __webpack_require__(522),
	  /* scopeId */
	  "data-v-04c0ce41",
	  /* cssModules */
	  null
	)

	module.exports = Component.exports


/***/ }),

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(511);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-04c0ce41&scoped=true!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./widget.vue", function() {
				var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-04c0ce41&scoped=true!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./widget.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

	// exports


/***/ }),

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _checkbox = __webpack_require__(513);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(520);

	var showList = [];
	exports.default = {
	  name: 'HyWidget',
	  componentName: 'HyWidget',
	  components: {
	    HyCheckbox: _checkbox2.default
	  },
	  props: {
	    height: {
	      type: [String, Number],
	      default: '300'
	    },
	    width: {
	      type: [String, Number],
	      default: '492'
	    },
	    margin: {
	      type: [String, Number],
	      default: '20'
	    },
	    dataArr: {
	      type: [Array],
	      default: function _default() {
	        return [{
	          'width': 267,
	          'height': 300,
	          'margin': 20,
	          'isShow': true,
	          'url': 'http://172.20.32.61:8080/UEP-PUB/pubclient/index.jsp',
	          'title': "一个标题"
	        }];
	      }
	    }
	  },
	  data: function data() {
	    return {
	      dataArr2: this.dataArr,
	      control: true,
	      maxStyleObj: {
	        'width': 100 + '%',
	        'height': 100 + '%',
	        'margin-right': 0 + 'px',
	        'margin-bottom': 0 + 'px',
	        'z-index': 10,
	        'position': 'absolute'
	      },
	      addPanelImg: "../../../../static/img/addPanel.png",
	      rebackImg: "../../../../static/img/reback.png",
	      closePanelImg: "../../../../static/img/closePanel.png"

	    };
	  },
	  created: function created() {
	    this.initData();
	  },
	  mounted: function mounted() {
	    if (this.dataArr.length > 0) {
	      showList = JSON.parse(JSON.stringify(this.dataArr2));
	    }
	  },

	  computed: {},
	  methods: {
	    initData: function initData() {
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = this.dataArr2[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var item = _step.value;

	          var styleObj = {
	            'width': item.width ? item.width + 'px' : 300 + 'px',
	            'height': item.height ? item.height + 'px' : 492 + 'px',
	            'margin-right': item.margin ? item.margin + 'px' : 20 + 'px'
	          };
	          item["styleShow"] = styleObj;
	          item["styleMax"] = this.maxStyleObj;
	          item["isMax"] = false;
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
	    },
	    closePanel: function closePanel(index, item) {
	      item.isShow = false;
	    },
	    maxPanel: function maxPanel(index, item) {
	      var obj = JSON.parse(JSON.stringify(item));
	      obj["isMax"] = !item.isMax;

	      this.$set(this.dataArr2, index, obj);
	    },
	    chooseItem: function chooseItem(data) {
	      data.isShow = !data.isShow;
	    },
	    resetData: function resetData() {
	      this.dataArr2 = JSON.parse(JSON.stringify(showList));
	      this.initData();
	    }
	  }
	};

/***/ }),

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _checkbox = __webpack_require__(514);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_checkbox2.default.install = function (Vue) {
	  Vue.component(_checkbox2.default.name, _checkbox2.default);
	};

	exports.default = _checkbox2.default;

/***/ }),

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(515),
	  /* template */
	  __webpack_require__(519),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)

	module.exports = Component.exports


/***/ }),

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _emitter = __webpack_require__(239);

	var _emitter2 = _interopRequireDefault(_emitter);

	var _innercheckbox = __webpack_require__(516);

	var _innercheckbox2 = _interopRequireDefault(_innercheckbox);

	var _jquery = __webpack_require__(283);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _util = __webpack_require__(278);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'HyCheckbox',
	  componentName: 'HyCheckbox',
	  mixins: [_emitter2.default],
	  components: {
	    ElCheckbox: _innercheckbox2.default
	  },
	  props: {
	    value: {},
	    items: {
	      type: [Array],
	      default: function _default() {
	        return [];
	      }
	    },
	    list: {
	      type: String,
	      default: ""
	    },
	    upload: {
	      type: Boolean,
	      default: false
	    },
	    name: {
	      type: String,
	      default: ""
	    },
	    dataprovider: {
	      type: String,
	      default: ""
	    },
	    visible: {
	      type: Boolean,
	      default: true
	    },
	    indeterminate: Boolean,
	    readonly: Boolean,
	    checkboxvalue: {
	      type: [String, Number],
	      default: "true"
	    },
	    checkboxlabel: {
	      type: [String, Number],
	      default: " "
	    },
	    service: {
	      type: String,
	      default: ""
	    },
	    id: {
	      type: String,
	      default: ''
	    },
	    formid: {
	      type: String,
	      default: ''
	    },
	    vertical: {
	      type: Boolean,
	      default: false
	    },
	    onchange: {
	      type: String,
	      default: ""
	    }
	  },
	  computed: {
	    _value: {
	      get: function get() {
	        if (this.isSetVModel) {
	          return this.value;
	        } else {
	          return this.checkboxgroupvalue;
	        }
	      },
	      set: function set(newValue) {
	        this.$emit('input', newValue);
	      }
	    },
	    checkboxItems: function checkboxItems() {
	      return this.items.filter(function (item) {
	        return true;
	      });
	    }
	  },
	  data: function data() {
	    return {
	      isSetVModel: true,
	      checkboxgroupvalue: "",

	      checkboxVisible: this.visible,
	      checkboxReadonly: this.readonly
	    };
	  },
	  created: function created() {
	    var checkboxStr = this.checkboxvalue.toString();
	    if (this.value == undefined && checkboxStr.indexOf(";") == -1) {
	      this.isSetVModel = false;
	    }
	    if (this.dataprovider != "") {
	      this.getCheckboxItems(this.dataprovider);
	    }
	    if (this.id != "") {
	      window[this.id] = this;
	    }
	  },

	  methods: {
	    setReadonly: function setReadonly(val) {
	      this.checkboxReadonly = val;
	    },
	    setVisible: function setVisible(val) {
	      this.checkboxVisible = val;
	    },
	    getSelectedValue: function getSelectedValue() {
	      return this._value;
	    },
	    getSelectedLabel: function getSelectedLabel() {
	      var label = "";
	      var value = this._value;
	      value = value + "";
	      var arr = value.split(";");
	      for (var i = 0; i < arr.length; i++) {
	        for (var j = 0; j < this.checkboxItems.length; j++) {
	          if (arr[i] == this.checkboxItems[j].value) {
	            label += this.checkboxItems[j].label;
	            break;
	          }
	        }
	        if (i < arr.length - 1) {
	          label += ";";
	        }
	      }
	      return label;
	    },
	    getCheckboxItems: function getCheckboxItems(dataprovider) {
	      var me = this;
	      var urlPath = "";
	      if (typeof $$pageContextPath != "undefined") {
	        urlPath = $$pageContextPath;
	      } else {
	        urlPath = $$ContextPath.webContext;
	      }
	      _jquery2.default.ajax({
	        type: "post",
	        url: urlPath + "framework/dropData.do",
	        data: {
	          dropName: dataprovider,
	          service: me.service
	        },
	        error: function error() {
	          alert("进行连接信息传递出错\n");
	        },
	        async: false,
	        success: function success(data) {
	          var dataObj = null;
	          if (typeof data == 'string') {
	            dataObj = eval("(" + data + ")");
	          } else {
	            dataObj = data;
	          }
	          me.checkboxItems = dataObj;
	        },
	        complete: function complete(XHR, TS) {
	          XHR = null;
	        }
	      });
	    }
	  },
	  watch: {
	    value: function value(newValue, oldValue) {
	      var _this = this;

	      setTimeout(function () {
	        if (_this.onchange !== "") {
	          (0, _util.runGlobalCallback)(_this.onchange, newValue, oldValue);
	        } else {
	          _this.$emit('change', newValue, oldValue);
	        }
	      }, 0);
	      this.dispatch('form-item', 'el.form.change', [newValue]);
	    },
	    checkboxgroupvalue: function checkboxgroupvalue(newValue, oldValue) {
	      var _this2 = this;

	      setTimeout(function () {
	        if (_this2.onchange !== "") {
	          (0, _util.runGlobalCallback)(_this2.onchange, newValue, oldValue);
	        } else {
	          _this2.$emit('change', newValue, oldValue);
	        }
	      }, 0);
	    },
	    visible: function visible(newValue, oldValue) {
	      this.checkboxVisible = newValue;
	    },
	    readonly: function readonly(newValue, oldValue) {
	      this.checkboxReadonly = newValue;
	    }
	  }
	};

/***/ }),

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(517),
	  /* template */
	  __webpack_require__(518),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)

	module.exports = Component.exports


/***/ }),

/***/ 517:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _emitter = __webpack_require__(239);

	var _emitter2 = _interopRequireDefault(_emitter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(480);
	exports.default = {
	  name: 'HyCheckbox',
	  mixins: [_emitter2.default],
	  props: {
	    value: {},
	    indeterminate: Boolean,
	    disabled: Boolean,
	    checked: Boolean,
	    checkboxValue: {
	      type: [String, Number],
	      default: "true"
	    },
	    checkboxLabel: {
	      type: [String, Number, Boolean],
	      default: " "
	    }
	  },

	  computed: {
	    isChecked: function isChecked() {

	      if (this.$parent.isSetVModel) {
	        if (this.$parent._value == "") {
	          this.selected = false;
	        } else {
	          if (this.$parent._value === true) {
	            this.selected = true;
	          } else if (this.$parent._value === false) {
	            this.selected = false;
	          } else {
	            var _value = this.$parent._value + "";
	            var parentValue = _value.split(";");
	            var isInParentValue = false;
	            for (var i = 0; i < parentValue.length; i++) {
	              if (this.checkedValue == parentValue[i]) {
	                this.selected = true;
	                isInParentValue = true;
	                break;
	              }
	            }
	            if (!isInParentValue) {
	              this.selected = false;
	            }
	          }
	        }
	      }

	      return this.selected;
	    }
	  },
	  data: function data() {
	    return {
	      focus: false,
	      selected: false,
	      checkedValue: "",
	      unCheckedValue: "",
	      wrapInGroup: this.$parent.$options.componentName === 'HyCheckbox'
	    };
	  },
	  created: function created() {
	    var checkboxStr = this.checkboxValue.toString();
	    if (checkboxStr.indexOf(";") > -1) {
	      var arr = this.checkboxValue.split(";");
	      this.checkedValue = arr[0];
	      this.unCheckedValue = arr[1];
	    } else {
	      this.checkedValue = this.checkboxValue;
	    }
	  },

	  methods: {
	    setSelected: function setSelected() {
	      if (this.disabled) {
	        return;
	      }
	      var selectedValue = "";
	      if (this.$parent.isSetVModel) {
	        selectedValue = this.$parent._value + "";
	      } else {
	        selectedValue = this.$parent.checkboxgroupvalue + "";
	      }

	      if (!this.selected) {
	        if (this.$parent.isSetVModel && this.$parent.checkboxvalue.toString().indexOf(";") > -1) {
	          selectedValue = this.checkedValue;
	        } else {
	          if (this.$parent._value == "" || this.$parent._value == this.unCheckedValue) {
	            selectedValue = this.checkedValue;
	          } else {
	            selectedValue = selectedValue + ";" + this.checkboxValue;
	          }
	        }
	      } else {
	        var parentSelectedValue = selectedValue.split(";");
	        for (var i = 0; i < parentSelectedValue.length; i++) {
	          if (parentSelectedValue[i] == this.checkedValue) {
	            parentSelectedValue.splice(i, 1);
	            break;
	          }
	        }
	        if (parentSelectedValue.length == 0) {
	          selectedValue = this.unCheckedValue;
	        } else {
	          selectedValue = parentSelectedValue.join(";");
	        }
	      }

	      if (this.$parent.isSetVModel) {
	        this.$parent._value = selectedValue;
	      } else {
	        this.$parent.checkboxgroupvalue = selectedValue;
	        this.selected = !this.selected;
	      }
	    }
	  }
	};

/***/ }),

/***/ 518:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('span', {
	    staticClass: "el-checkbox",
	    on: {
	      "click": _vm.setSelected
	    }
	  }, [_c('span', {
	    staticClass: "el-checkbox__input"
	  }, [_c('span', {
	    staticClass: "el-checkbox__inner",
	    class: {
	      'is-disabled': _vm.disabled,
	      'is-checked': _vm.isChecked,
	      'is-indeterminate': _vm.indeterminate,
	      'is-focus': _vm.focus
	    }
	  })]), _vm._v(" "), _c('span', {
	    staticClass: "el-checkbox__label",
	    class: {
	      'is-label-checked': _vm.isChecked
	    }
	  }, [_vm._t("default"), _vm._v("\n   " + _vm._s(_vm.checkboxLabel) + "\n  ")], 2)])
	},staticRenderFns: []}

/***/ }),

/***/ 519:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.checkboxVisible),
	      expression: "checkboxVisible"
	    }],
	    staticClass: "el-checkbox-group",
	    class: [{
	      'el-checkbox-group-vertical': _vm.vertical
	    }],
	    attrs: {
	      "id": _vm.id || _vm.formid
	    }
	  }, [(_vm.checkboxItems.length > 0) ? _vm._l((_vm.checkboxItems), function(item) {
	    return _c('el-checkbox', {
	      key: item.value,
	      attrs: {
	        "checkbox-label": item.label,
	        "disabled": _vm.checkboxReadonly || item.readonly,
	        "checkbox-value": item.value
	      },
	      model: {
	        value: (_vm._value),
	        callback: function($$v) {
	          _vm._value = $$v
	        },
	        expression: "_value"
	      }
	    }, [_vm._t("default")], 2)
	  }) : [_c('el-checkbox', {
	    attrs: {
	      "checkbox-label": _vm.checkboxlabel,
	      "disabled": _vm.checkboxReadonly,
	      "indeterminate": _vm.indeterminate,
	      "checkbox-value": _vm.checkboxvalue
	    },
	    model: {
	      value: (_vm._value),
	      callback: function($$v) {
	        _vm._value = $$v
	      },
	      expression: "_value"
	    }
	  }, [_vm._t("default")], 2)], _vm._v(" "), (_vm.upload) ? _c('input', {
	    attrs: {
	      "type": "hidden",
	      "name": _vm.name,
	      "upload": "true"
	    },
	    domProps: {
	      "value": _vm._value
	    }
	  }) : _c('input', {
	    attrs: {
	      "type": "hidden",
	      "name": _vm.name
	    },
	    domProps: {
	      "value": _vm._value
	    }
	  })], 2)
	},staticRenderFns: []}

/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(521);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js!../../node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"extract\":true,\"remove\":true}!../../node_modules/style-loader/index.js!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js?sourceMap!./widget.less", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js!../../node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"extract\":true,\"remove\":true}!../../node_modules/style-loader/index.js!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js?sourceMap!./widget.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ }),

/***/ 522:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "el-widget"
	  }, [_vm._l((_vm.dataArr2), function(item, index) {
	    return [(item.isShow) ? _c('div', {
	      key: index,
	      staticClass: "el-widget-border",
	      style: (item.isMax ? item.styleMax : item.styleShow)
	    }, [_c('div', {
	      staticClass: "el-widget-position"
	    }, [_c('span', {
	      staticClass: "el-widget-max",
	      on: {
	        "click": function($event) {
	          return _vm.maxPanel(index, item)
	        }
	      }
	    }, [(!item.isMax) ? _c('hy-icon', {
	      attrs: {
	        "name": "icon-arrowsalt",
	        "color": "black",
	        "size": 20
	      }
	    }) : _c('hy-icon', {
	      attrs: {
	        "name": "icon-shrink",
	        "color": "black",
	        "size": 20
	      }
	    })], 1), _vm._v(" "), _c('span', {
	      staticClass: "el-widget-close",
	      on: {
	        "click": function($event) {
	          return _vm.closePanel(index, item)
	        }
	      }
	    }, [_c('i', {
	      staticClass: "el-icon el-icon-close"
	    })]), _vm._v(" "), _c('iframe', {
	      attrs: {
	        "frameborder": "0",
	        "width": "100%",
	        "height": "100%",
	        "marginheight": "0",
	        "marginwidth": "0",
	        "scrolling": "no",
	        "src": item.url
	      }
	    })])]) : _vm._e()]
	  }), _vm._v(" "), _c('div', {
	    staticClass: "el-widget-border1",
	    style: ({
	      width: _vm.width + 'px',
	      'height': _vm.height + 'px',
	      'margin-right': _vm.margin + 'px'
	    })
	  }, [_c('div', {
	    staticClass: "el-widget-position",
	    staticStyle: {
	      "background-color": "#fff"
	    }
	  }, [_c('img', {
	    staticClass: "el-widget-addItem",
	    attrs: {
	      "src": _vm.addPanelImg
	    },
	    on: {
	      "click": function($event) {
	        _vm.control = true
	      }
	    }
	  }), _vm._v(" "), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.control),
	      expression: "control"
	    }],
	    staticClass: "el-widget-msg-panel",
	    staticStyle: {
	      "top": "170px",
	      "right": "25px"
	    }
	  }, [_c('div', {
	    staticClass: "el-widget-title"
	  }, [_vm._v("管理我的桌面")]), _vm._v(" "), _c('ul', {
	    staticClass: "el-widget-ul"
	  }, _vm._l((_vm.dataArr2), function(data, index) {
	    return _c('li', {
	      key: index
	    }, [_c('hy-checkbox', {
	      staticClass: "el-widget-check",
	      on: {
	        "click": function($event) {
	          return _vm.chooseItem(data)
	        }
	      },
	      model: {
	        value: (data.isShow),
	        callback: function($$v) {
	          _vm.$set(data, "isShow", $$v)
	        },
	        expression: "data.isShow"
	      }
	    }, [_vm._v(_vm._s(data.title))])], 1)
	  }), 0), _vm._v(" "), _c('div', {
	    staticClass: "el-widget-reback",
	    on: {
	      "click": _vm.resetData
	    }
	  }, [_c('img', {
	    staticStyle: {
	      "vertical-align": "middle",
	      "margin-right": "10px"
	    },
	    attrs: {
	      "src": _vm.rebackImg
	    }
	  }), _vm._v("恢复默认设置\n        ")]), _vm._v(" "), _c('img', {
	    staticClass: "el-widget-closePanel",
	    attrs: {
	      "src": _vm.closePanelImg
	    },
	    on: {
	      "click": function($event) {
	        _vm.control = false
	      }
	    }
	  })])])])], 2)
	},staticRenderFns: []}

/***/ })

/******/ })
});
;