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

	var _index = __webpack_require__(464);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var install = function install(Vue) {
	  if (install.installed) return;
	  Vue.component('hy-tree2', _index2.default);
	};

	if (typeof window !== 'undefined' && window.Vue) {
	  install(window.Vue);
	};

	module.exports = {
	  version: '1.0.0-rc.5',
	  HyTree: _index2.default
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

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _locale = __webpack_require__(271);

	exports.default = {
	  methods: {
	    t: function t() {
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return _locale.t.apply(this, args);
	    }
	  }
	};

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.i18n = exports.use = exports.t = undefined;

	var _zhCN = __webpack_require__(272);

	var _zhCN2 = _interopRequireDefault(_zhCN);

	var _vue = __webpack_require__(238);

	var _vue2 = _interopRequireDefault(_vue);

	var _deepmerge = __webpack_require__(273);

	var _deepmerge2 = _interopRequireDefault(_deepmerge);

	var _format = __webpack_require__(274);

	var _format2 = _interopRequireDefault(_format);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var format = (0, _format2.default)(_vue2.default);
	var lang = _zhCN2.default;
	var merged = false;
	var i18nHandler = function i18nHandler() {
	  var vuei18n = Object.getPrototypeOf(this || _vue2.default).$t;
	  if (typeof vuei18n === 'function') {
	    if (!merged) {
	      merged = true;
	      _vue2.default.locale(_vue2.default.config.lang, (0, _deepmerge2.default)(lang, _vue2.default.locale(_vue2.default.config.lang) || {}, { clone: true }));
	    }
	    return vuei18n.apply(this, arguments);
	  }
	};

	var t = exports.t = function t(path, options) {
	  var value = i18nHandler.apply(this, arguments);
	  if (value !== null && value !== undefined) return value;

	  var array = path.split('.');
	  var current = lang;

	  for (var i = 0, j = array.length; i < j; i++) {
	    var property = array[i];
	    value = current[property];
	    if (i === j - 1) return format(value, options);
	    if (!value) return '';
	    current = value;
	  }
	  return '';
	};

	var use = exports.use = function use(l) {
	  lang = l || lang;
	};

	var i18n = exports.i18n = function i18n(fn) {
	  i18nHandler = fn || i18nHandler;
	};

	exports.default = { use: use, t: t, i18n: i18n };

/***/ }),

/***/ 272:
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  el: {
	    datepicker: {
	      now: '此刻',
	      today: '今天',
	      cancel: '取消',
	      clear: '清空',
	      confirm: '确定',
	      selectDate: '选择日期',
	      selectTime: '选择时间',
	      startDate: '开始日期',
	      startTime: '开始时间',
	      endDate: '结束日期',
	      endTime: '结束时间',
	      year: '年',
	      month1: '1 月',
	      month2: '2 月',
	      month3: '3 月',
	      month4: '4 月',
	      month5: '5 月',
	      month6: '6 月',
	      month7: '7 月',
	      month8: '8 月',
	      month9: '9 月',
	      month10: '10 月',
	      month11: '11 月',
	      month12: '12 月',

	      weeks: {
	        sun: '日',
	        mon: '一',
	        tue: '二',
	        wed: '三',
	        thu: '四',
	        fri: '五',
	        sat: '六'
	      },
	      months: {
	        jan: '一月',
	        feb: '二月',
	        mar: '三月',
	        apr: '四月',
	        may: '五月',
	        jun: '六月',
	        jul: '七月',
	        aug: '八月',
	        sep: '九月',
	        oct: '十月',
	        nov: '十一月',
	        dec: '十二月'
	      }
	    },
	    select: {
	      loading: '加载中',
	      noMatch: '无匹配数据',
	      noData: '无数据',
	      placeholder: '请选择'
	    },
	    cascader: {
	      noMatch: '无匹配数据',
	      placeholder: '请选择'
	    },
	    pagination: {
	      goto: '前往',
	      pagesize: '条/页',
	      total: '共 {total} 条',
	      pageClassifier: '页'
	    },
	    messagebox: {
	      title: '提示',
	      confirm: '确定',
	      cancel: '取消',
	      error: '输入的数据不合法!'
	    },
	    upload: {
	      delete: '删除',
	      preview: '查看图片',
	      continue: '继续上传'
	    },
	    table: {
	      emptyText: '暂无数据',
	      confirmFilter: '筛选',
	      resetFilter: '重置',
	      clearFilter: '全部',
	      total: '共 {total} 条',
	      excel: "导出excel",
	      allexcel: "全部导出excel",
	      pdf: "导出pdf",
	      allpdf: "全部导出pdf",
	      tip: "提示",
	      number: "第 {Number} 行",
	      personalization: "个性化设置",
	      permissionSettings: "权限设置",
	      titleSetting: "标题设置",
	      pageTip: "当前页中有修改的数据没有保存，确定要翻页吗?",
	      set: "高级设置",
	      sumText: '合计'
	    },
	    tree: {
	      emptyText: '暂无数据'
	    },
	    multitask: {
	      firstpage: '首页',
	      closeothers: '关闭其它',
	      closeall: '关闭所有',
	      max: '最大化',
	      mix: '最小化',
	      help: '查看联机帮助',
	      commonfunc: '添加自定义功能',
	      refresh: '刷新'
	    },
	    validate: {
	      enter: "请输入 ",
	      email: "合法的邮箱",
	      mixValue: "最小值不能小于",
	      maxValue: "最大值不能大于",
	      mixLength: "最小长度不能小于",
	      maxLength: "最大长度不能大于",
	      enterValue: "输入值需要在",
	      yu: "与",
	      between: "之间"
	    },
	    lang: {
	      okBtnTxt: '确 定',
	      cancelBtnTxt: '取 消',
	      calendar: {
	        loadPrevMonth: '加载上一个月',
	        noMoreMonth: '没有更早月份~',
	        start: '开始',
	        end: '结束',
	        title: '选择日期',
	        week: '日,一,二,三,四,五,六',
	        monthTitle: '{year}年{month}月'
	      },
	      menu: {
	        resetBtnTxt: '重置'
	      },
	      searchbar: {
	        placeText: '请输入内容...',
	        textInfo: '搜索'
	      },
	      shortpassword: {
	        tip1: '输入数字密码',
	        tip2: '忘记密码'
	      },
	      steps: {
	        step: '步骤',
	        stepDesc: '步骤描述'
	      },
	      uploader: {
	        xmlError: '对不起，您的浏览器不支持本组件！',
	        typeError: '不支持上传该类型文件',
	        limitError: '文件大小超过限制'
	      }
	    },
	    image: {
	      error: '加载失败'
	    },
	    colorpicker: {
	      clear: "清除",
	      confirm: "确定"
	    },
	    transfer: {
	      noMatch: '无匹配数据',
	      noData: '无数据',
	      titles: ['列表 1', '列表 2'],
	      filterPlaceholder: '请输入搜索内容',
	      noCheckedFormat: '共 {total} 项',
	      hasCheckedFormat: '已选 {checked}/{total} 项'
	    }
	  }
	};

/***/ }),

/***/ 273:
/***/ (function(module, exports) {

	'use strict';

	var isMergeableObject = function isMergeableObject(value) {
		return isNonNullObject(value)
			&& !isSpecial(value)
	};

	function isNonNullObject(value) {
		return !!value && typeof value === 'object'
	}

	function isSpecial(value) {
		var stringValue = Object.prototype.toString.call(value);

		return stringValue === '[object RegExp]'
			|| stringValue === '[object Date]'
			|| isReactElement(value)
	}

	// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
	var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

	function isReactElement(value) {
		return value.$$typeof === REACT_ELEMENT_TYPE
	}

	function emptyTarget(val) {
	    return Array.isArray(val) ? [] : {}
	}

	function cloneIfNecessary(value, optionsArgument) {
	    var clone = optionsArgument && optionsArgument.clone === true;
	    return (clone && isMergeableObject(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value
	}

	function defaultArrayMerge(target, source, optionsArgument) {
	    var destination = target.slice();
	    source.forEach(function(e, i) {
	        if (typeof destination[i] === 'undefined') {
	            destination[i] = cloneIfNecessary(e, optionsArgument);
	        } else if (isMergeableObject(e)) {
	            destination[i] = deepmerge(target[i], e, optionsArgument);
	        } else if (target.indexOf(e) === -1) {
	            destination.push(cloneIfNecessary(e, optionsArgument));
	        }
	    });
	    return destination
	}

	function mergeObject(target, source, optionsArgument) {
	    var destination = {};
	    if (isMergeableObject(target)) {
	        Object.keys(target).forEach(function(key) {
	            destination[key] = cloneIfNecessary(target[key], optionsArgument);
	        });
	    }
	    Object.keys(source).forEach(function(key) {
	        if (!isMergeableObject(source[key]) || !target[key]) {
	            destination[key] = cloneIfNecessary(source[key], optionsArgument);
	        } else {
	            destination[key] = deepmerge(target[key], source[key], optionsArgument);
	        }
	    });
	    return destination
	}

	function deepmerge(target, source, optionsArgument) {
	    var sourceIsArray = Array.isArray(source);
	    var targetIsArray = Array.isArray(target);
	    var options = optionsArgument || { arrayMerge: defaultArrayMerge };
	    var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	    if (!sourceAndTargetTypesMatch) {
	        return cloneIfNecessary(source, optionsArgument)
	    } else if (sourceIsArray) {
	        var arrayMerge = options.arrayMerge || defaultArrayMerge;
	        return arrayMerge(target, source, optionsArgument)
	    } else {
	        return mergeObject(target, source, optionsArgument)
	    }
	}

	deepmerge.all = function deepmergeAll(array, optionsArgument) {
	    if (!Array.isArray(array) || array.length < 2) {
	        throw new Error('first argument should be an array with at least two elements')
	    }

	    // we are sure there are at least 2 values, so it is safe to have no initial value
	    return array.reduce(function(prev, next) {
	        return deepmerge(prev, next, optionsArgument)
	    })
	};

	var deepmerge_1 = deepmerge;

	module.exports = deepmerge_1;


/***/ }),

/***/ 274:
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = function (Vue) {

	  function template(string) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    if (args.length === 1 && _typeof(args[0]) === 'object') {
	      args = args[0];
	    }

	    if (!args || !args.hasOwnProperty) {
	      args = {};
	    }

	    return string.replace(RE_NARGS, function (match, prefix, i, index) {
	      var result = void 0;

	      if (string[index - 1] === '{' && string[index + match.length] === '}') {
	        return i;
	      } else {
	        result = hasOwn(args, i) ? args[i] : null;
	        if (result === null || result === undefined) {
	          return '';
	        }

	        return result;
	      }
	    });
	  }

	  return template;
	};

	var RE_NARGS = /(%|)\{([0-9a-zA-Z_]+)\}/g;
	var hasOwnProperty = Object.prototype.hasOwnProperty;

	function hasOwn(obj, key) {
	  return hasOwnProperty.call(obj, key);
	};

/***/ }),

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Tree = __webpack_require__(465);

	Tree.install = function (Vue) {
	  Vue.component(Tree.name, Tree);
	};

	module.exports = Tree;

/***/ }),

/***/ 465:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(466),
	  /* template */
	  __webpack_require__(484),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)

	module.exports = Component.exports


/***/ }),

/***/ 466:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _tree = __webpack_require__(467);

	var _tree2 = _interopRequireDefault(_tree);

	var _map = __webpack_require__(471);

	var _storagetree = __webpack_require__(470);

	var _storagetree2 = _interopRequireDefault(_storagetree);

	var _framework = __webpack_require__(472);

	var _locale = __webpack_require__(270);

	var _locale2 = _interopRequireDefault(_locale);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(473);
	exports.default = {
	  name: 'hy-tree2',
	  mixins: [_locale2.default],
	  componentName: 'hyTree',
	  props: {
	    data: {
	      type: Array
	    },
	    emptyText: {
	      type: String,
	      default: function _default() {
	        return "空";
	      }
	    },
	    value: {
	      type: [String, Number],
	      default: ''
	    },
	    valueprovider: {
	      type: String,
	      default: ''
	    },

	    id: {
	      type: String,
	      default: ''
	    },
	    dynamic: {
	      type: Boolean,
	      default: false
	    },
	    rootvisible: {
	      type: Boolean,
	      default: true
	    },
	    nodeKey: {
	      type: String,
	      default: 'code'
	    },
	    checkstrictly: Boolean,
	    defaultexpandall: {
	      type: Boolean,
	      default: true
	    },

	    dataprovider: {
	      type: String,
	      default: ''
	    },
	    rightfilter: {
	      type: Boolean,
	      default: false
	    },
	    expandlevel: {
	      type: Number,
	      default: 3
	    },
	    rootcode: {
	      type: String,
	      default: ''
	    },
	    autoexpandparent: {
	      type: Boolean,
	      default: true
	    },
	    defaultCheckedKeys: Array,
	    defaultExpandedKeys: Array,
	    rendercontent: Function,
	    multiple: {
	      type: Boolean,
	      default: false
	    },
	    props: {
	      default: function _default() {
	        return {
	          children: 'children',
	          label: 'label',
	          code: 'code',
	          assist: 'assist',
	          icon: 'icon'
	        };
	      }
	    },
	    onlyselectleaf: {
	      type: Boolean,
	      default: false
	    },
	    lazy: {
	      type: Boolean,
	      default: false
	    },
	    highlightcurrent: {
	      type: Boolean,
	      default: true
	    },
	    load: Function,
	    visible: {
	      type: Boolean,
	      default: true
	    },
	    filternodemethod: Function
	  },

	  created: function created() {
	    this.treeChildrenMap = new _map.HyMap();
	    this.treeMap = new _map.HyMap();

	    var me = this;
	    if (this.id != "") {
	      this.treeId = this.id;
	      window[this.treeId] = this;
	    } else {
	      this.treeId = "tree" + _storagetree2.default.getTreeCount();
	    }

	    if (this.treeData == undefined) {
	      var me = this;
	      var urlPath = "";
	      if (typeof $$pageContextPath != "undefined") {
	        urlPath = $$pageContextPath;
	      } else {
	        urlPath = $$ContextPath.webContext;
	      }
	      $.ajax({
	        type: "post",
	        url: urlPath + "framework/treeview.do?dateValue=" + new Date().getTime(),
	        data: {
	          rightfilter: this.rightfilter,
	          expandLevel: this.expandlevel,
	          rootcode: this.rootcode,
	          rootCode: this.rootcode,
	          retriever: this.valueprovider,
	          dynamic: this.dynamic,
	          rootVisible: this.rootvisible,
	          dataProvider: this.dataprovider
	        },
	        error: function error() {
	          $.alert("进行连接信息传递出错\n");
	        },
	        async: false,
	        success: function success(data) {

	          data = data.replace('<?xml version="1.0" encoding="utf-8"?>', "");
	          var s = (0, _framework.toXmlDom)(data);
	          var initJsonData = (0, _framework.xmlToJson)(s);
	          me.treeData = [initJsonData];
	        },
	        complete: function complete(XHR, TS) {
	          XHR = null;
	        }
	      });
	    }

	    if (!this.rootvisible) {
	      var tempTreeData = [];
	      tempTreeData = this.treeData[0].children;
	      if (!(tempTreeData instanceof Array)) {
	        tempTreeData = [tempTreeData];
	      }
	      this.treeData = tempTreeData;
	    }

	    this.getTreeMap(this.treeData, 1);

	    _storagetree2.default.setTreeMap(this.treeId, this.treeMap);
	    _storagetree2.default.setTreeChildrenMap(this.treeId, this.treeChildrenMap);

	    this.$isTree = true;
	    this.tree = new _tree2.default({
	      key: this.nodeKey,
	      data: this.treeData,
	      lazy: this.lazy,
	      props: this.props,
	      onlyselectleaf: this.onlyselectleaf,
	      treeId: this.treeId,
	      load: this.load,
	      checkstrictly: this.checkstrictly,
	      defaultCheckedKeys: this.defaultCheckedKeys,
	      defaultExpandedKeys: this.defaultExpandedKeys,
	      autoExpandParent: this.autoexpandparent,
	      defaultExpandAll: this.defaultexpandall,
	      expandLevel: this.expandlevel,
	      dynamic: this.dynamic,
	      filterNodeMethod: this.filternodemethod
	    });
	  },
	  data: function data() {
	    return {
	      tree: {},
	      currentNode: null,
	      treeData: this.data,
	      selectedNode: this.value,
	      treeId: ""
	    };
	  },


	  components: {
	    ElTreeNode: __webpack_require__(475)
	  },

	  computed: {
	    children: {
	      set: function set(value) {
	        this.treeData = value;
	      },
	      get: function get() {
	        return this.treeData;
	      }
	    }
	  },

	  watch: {
	    data: function data(newVal) {
	      this.tree.setData(newVal);
	    },
	    defaultCheckedKeys: function defaultCheckedKeys(newVal) {
	      this.tree.setDefaultCheckedKey(newVal);
	    },
	    value: function value(val) {
	      var _this = this;

	      var treeNode = this.treeMap.get(val);
	      setTimeout(function () {
	        _this.$emit('change', treeNode);
	      }, 0);
	      this.selectedNode = treeNode;
	    },
	    rootcode: function rootcode(val) {
	      this.refreshRootNode(val);
	    }
	  },
	  mounted: function mounted() {
	    var _this2 = this;

	    this.$nextTick(function () {
	      if (_this2.value !== "") {
	        _this2.selectedNode = _this2.treeMap.get(_this2.value);
	      }
	    });
	  },

	  methods: {
	    getPrimaryNode: function getPrimaryNode(node) {
	      if (node == null) {
	        return null;
	      }
	      var result = {};
	      Object.keys(node).forEach(function (key) {
	        if (key != 'level' && key != 'leaf' && key != 'index') {
	          result[key] = node[key];
	        }
	      });
	      return result;
	    },
	    getTreeMap: function getTreeMap(data, level) {
	      for (var i = 0; i < data.length; i++) {

	        if (data[i].children != undefined && data[i].children.length > 0) {
	          var x = level + 1;
	          var obj = {};
	          obj.level = level;
	          obj.leaf = false;

	          for (var attr in data[i]) {
	            if (attr != 'children') {
	              obj[attr] = data[i][attr];
	            }
	          }

	          obj.index = i;
	          obj.parent = data[i].parent;
	          this.treeMap.set(data[i].code, obj);
	          for (var j = 0; j < data[i].children.length; j++) {
	            data[i].children[j].parent = data[i].code;
	          }

	          this.treeChildrenMap.set(data[i].code, data[i].children);
	          this.getTreeMap(data[i].children, x);
	        } else {
	          if (data[i].children != undefined && data[i].children.length == undefined) {
	            var x = level + 1;
	            var obj = {};
	            obj.level = level;
	            obj.leaf = false;

	            for (var attr in data[i]) {
	              if (attr != 'children') {
	                obj[attr] = data[i][attr];
	              }
	            }

	            obj.index = i;
	            obj.parent = data[i].parent;
	            this.treeMap.set(data[i].code, obj);
	            var childrenArr = [data[i].children];
	            for (var j = 0; j < childrenArr.length; j++) {
	              childrenArr[j].parent = data[i].code;
	            }

	            this.treeChildrenMap.set(data[i].code, childrenArr);
	            data[i].children = [data[i].children];

	            this.getTreeMap(childrenArr, x);
	          } else {

	            this.treeChildrenMap.set(data[i].code, []);
	            var obj = {};
	            obj.level = level;
	            obj.leaf = true;
	            for (var attr in data[i]) {
	              if (attr != 'children') {
	                obj[attr] = data[i][attr];
	              }
	            }

	            obj.parent = data[i].parent;
	            obj.index = i;
	            this.treeMap.set(data[i].code, obj);
	          }
	        }
	      }
	    },
	    filter: function filter(value) {
	      if (!this.filternodemethod) throw new Error('[Tree] filterNodeMethod is required when filter');
	      this.tree.filter(value);
	    },
	    getNodeByCode: function getNodeByCode(code) {
	      return this.treeMap.get(code);
	    },
	    getCheckedNodes: function getCheckedNodes(leafOnly) {
	      var _this3 = this;

	      var checkedNodes = this.tree.getCheckedNodes(leafOnly);
	      var primaryNodes = [];
	      checkedNodes.forEach(function (item) {
	        var node = _this3.treeMap.get(item.code);

	        primaryNodes.push(_this3.getPrimaryNode(node));
	      });
	      return primaryNodes;
	    },
	    expandNode: function expandNode(code) {
	      this.tree.expandNode(code, true);
	    },
	    collapseNode: function collapseNode(code) {
	      this.tree.expandNode(code, false);
	    },

	    getRootCode: function getRootCode() {
	      var rootCode = this.treeData[0].code;
	      return rootCode;
	    },
	    getRootBean: function getRootBean() {
	      var rootCode = this.getRootCode();
	      var rootBean = this.findNodeByCode(rootCode);
	      return rootBean;
	    },
	    refreshRootNode: function refreshRootNode(rootCode) {

	      var isRefreshRootCode = true;
	      var myData = {
	        rightfilter: this.rightfilter,
	        expandLevel: this.expandlevel,
	        rootcode: rootCode,
	        rootCode: rootCode,
	        retriever: this.valueprovider,
	        dynamic: this.dynamic,
	        rootVisible: this.rootvisible,
	        dataProvider: this.dataprovider,
	        initData: false
	      };

	      if (rootCode == undefined) {
	        rootCode = this.rootcode;
	      } else {
	        isRefreshRootCode = false;
	        if (rootCode instanceof Object) {
	          var hasBeanInfo = "code,label,type,openIcon,closeIcon,location,checkenable,id,hasChild,isEnd";
	          for (var attr in rootCode) {

	            if ($isCloudService) {
	              if (hasBeanInfo.indexOf(attr) < 0) {
	                myData["extProp[" + attr + "]"] = rootCode[attr];
	              } else if (attr != "id" && attr != "haschild" && attr != "isEnd") {
	                myData[attr + ""] = rootCode[attr];
	              }
	            } else {

	              if (hasBeanInfo.indexOf(attr) < 0) {
	                myData["treeBean.extProp." + attr + ""] = rootCode[attr];
	              } else if (attr != "id" && attr != "haschild" && attr != "isEnd") {
	                myData["treeBean." + attr + ""] = rootCode[attr];
	              }
	            }
	          }
	          rootCode = rootCode.code;
	        }
	      }

	      myData.rootcode = rootCode;
	      myData.rootCode = rootCode;

	      var me = this;
	      var urlPath2 = "";
	      if (typeof $$pageContextPath != "undefined") {
	        urlPath2 = $$pageContextPath;
	      } else {
	        urlPath2 = $$ContextPath.webContext;
	      }
	      $.ajax({
	        type: "post",
	        url: urlPath2 + "framework/treeview.do?dateValue=" + new Date().getTime(),
	        data: myData,
	        error: function error() {
	          $.alert("进行连接信息传递出错\n");
	        },
	        async: false,
	        success: function success(data) {

	          data = data.replace('<?xml version="1.0" encoding="utf-8"?>', "");
	          var s = (0, _framework.toXmlDom)(data);
	          var initJsonData = (0, _framework.xmlToJson)(s);

	          if (!isRefreshRootCode) {
	            var children = me.getChildren(rootCode);
	            for (var i = 0; i < children.length; i++) {
	              me.deleteNodeByCode(children[i].code);
	            }

	            me.dynamicAddNode(rootCode, initJsonData.children);
	          } else {
	            me.treeData = [initJsonData];
	          }
	        },
	        complete: function complete(XHR, TS) {
	          XHR = null;
	        }
	      });

	      if (isRefreshRootCode) {
	        this.treeMap.clear();
	        this.treeChildrenMap.clear();

	        if (!this.rootvisible) {
	          var tempTreeData = [];
	          tempTreeData = this.treeData[0].children;
	          if (!(tempTreeData instanceof Array)) {
	            tempTreeData = [tempTreeData];
	          }
	          this.treeData = tempTreeData;
	        }

	        this.getTreeMap(this.treeData, 1);
	        this.tree = new _tree2.default({
	          key: this.nodeKey,
	          data: this.treeData,
	          lazy: this.lazy,
	          props: this.props,
	          onlyselectleaf: this.onlyselectleaf,
	          treeId: this.treeId,
	          load: this.load,
	          checkstrictly: this.checkstrictly,
	          defaultCheckedKeys: this.defaultCheckedKeys,
	          defaultExpandedKeys: this.defaultExpandedKeys,
	          autoExpandParent: this.autoexpandparent,
	          defaultExpandAll: this.defaultexpandall,
	          expandLevel: this.expandlevel,
	          dynamic: this.dynamic,
	          filterNodeMethod: this.filternodemethod
	        });
	      }
	    },
	    setCheckedNodes: function setCheckedNodes(nodes) {
	      this.tree.setCheckedNodes(nodes);
	    },
	    cancelCheckedNodes: function cancelCheckedNodes(nodes) {
	      this.tree.cancelCheckedNodes(nodes);
	    },
	    getSelectedNode: function getSelectedNode() {
	      if (this.selectedNode != undefined) {
	        return this.getPrimaryNode(this.treeMap.get(this.selectedNode.code));
	      } else {
	        return undefined;
	      }
	    },
	    getParent: function getParent(code) {
	      var node = this.treeMap.get(code);
	      if (node != undefined) {
	        var parentNode = this.treeMap.get(node.parent);
	        if (parentNode != undefined) {
	          return this.getPrimaryNode(parentNode);
	        } else {
	          return null;
	        }
	      } else {
	        return null;
	      }
	    },
	    editNodeLabel: function editNodeLabel(code, label) {
	      var node = this.findTreeDataNodeByCode(code);

	      node.label = label;
	      this.$forceUpdate();
	    },
	    deleteNodeByCode: function deleteNodeByCode(code) {
	      var deleteNode = this.getSelfNodeAndChildrenNode(code);
	      var parentNode = this.getParent(code);
	      if (parentNode != null) {
	        var children = this.treeChildrenMap.get(parentNode.code);
	        for (var i = 0; i < children.length; i++) {
	          if (children[i].code == code) {
	            children.splice(i, 1);
	            break;
	          }
	        }
	      }

	      for (var i = 0; i < deleteNode.length; i++) {
	        this.treeMap.remove(deleteNode[i].code);
	        this.treeChildrenMap.remove(deleteNode[i].code);
	      }

	      var codeParent = null;
	      var index = -1;

	      var isGo = true;
	      var traverse = function traverse(node) {
	        if (!isGo) {
	          return;
	        }
	        var childNodes = node.children;
	        if (childNodes != undefined) {
	          for (var i = 0; i < childNodes.length; i++) {

	            if (childNodes[i].code == code) {
	              codeParent = childNodes;
	              index = i;
	              isGo = false;
	            } else {
	              traverse(childNodes[i]);
	            }
	          }
	        }
	      };

	      for (var i = 0; i < this.treeData.length; i++) {
	        if (this.treeData[i].code == code) {
	          codeParent = this.treeData;
	          index = i;
	          break;
	        } else {
	          traverse(this.treeData[i]);
	        }
	      }

	      if (index != -1) {
	        codeParent.splice(index, 1);
	      }
	    },
	    getSelfNodeAndChildrenNode: function getSelfNodeAndChildrenNode(code) {
	      var _this4 = this;

	      var nodeArr = [];
	      nodeArr.push(this.treeMap.get(code));
	      var cascadeChildren = this.getChildrenCascade(code);
	      nodeArr = nodeArr.concat(cascadeChildren);
	      var results = [];
	      nodeArr.forEach(function (item) {
	        results.push(_this4.getPrimaryNode(item));
	      });
	      return results;
	    },
	    findTreeDataNodeByCode: function findTreeDataNodeByCode(code) {

	      var currentNode = null;

	      var isGo = true;
	      var traverse = function traverse(node) {
	        if (!isGo) {
	          return;
	        }
	        var childNodes = node.children;
	        if (childNodes != undefined) {
	          for (var i = 0; i < childNodes.length; i++) {

	            if (childNodes[i].code == code) {
	              currentNode = childNodes[i];
	              isGo = false;
	            } else {
	              traverse(childNodes[i]);
	            }
	          }
	        }
	      };

	      for (var i = 0; i < this.treeData.length; i++) {
	        if (this.treeData[i].code == code) {
	          currentNode = this.treeData[i];
	          break;
	        } else {
	          traverse(this.treeData[i]);
	        }
	      }
	      return currentNode;
	    },
	    dynamicAddNode: function dynamicAddNode() {
	      var addNodes = arguments.length <= 1 ? undefined : arguments[1];
	      if (!(addNodes instanceof Array)) {
	        addNodes = [addNodes];
	      }
	      this.getTreeMap(addNodes);
	      for (var i = 0; i < addNodes.length; i++) {
	        this.treeMap.get(addNodes[i].code).parent = arguments.length <= 0 ? undefined : arguments[0];
	      }

	      var children = this.treeChildrenMap.get(arguments.length <= 0 ? undefined : arguments[0]);
	      if (arguments.length == 2) {
	        if (children == undefined || children == "") {
	          children = [];
	        }
	        children = children.concat(addNodes);
	      }

	      this.treeChildrenMap.overwrite(arguments.length <= 0 ? undefined : arguments[0], children);
	      var parentNode = this.findTreeDataNodeByCode(arguments.length <= 0 ? undefined : arguments[0]);

	      for (var i = 0; i < addNodes.length; i++) {
	        parentNode.children.push(addNodes[i]);
	      }
	    },
	    addNode: function addNode() {
	      var addNodes = arguments.length <= 1 ? undefined : arguments[1];
	      this.getTreeMap(addNodes);

	      if (!isNaN(arguments.length <= 0 ? undefined : arguments[0])) {
	        for (var i = addNodes.length - 1; i >= 0; i--) {
	          this.treeData.splice(arguments.length <= 0 ? undefined : arguments[0], 0, addNodes[i]);
	        }
	      } else {
	        if (this.treeMap.get(arguments.length <= 0 ? undefined : arguments[0]) == undefined) {
	          console.log("请指定正确的code");
	          return;
	        }

	        for (var i = 0; i < addNodes.length; i++) {
	          this.treeMap.get(addNodes[i].code).parent = arguments.length <= 0 ? undefined : arguments[0];
	        }

	        var children = this.treeChildrenMap.get(arguments.length <= 0 ? undefined : arguments[0]);
	        if (arguments.length == 2) {
	          if (children == undefined || children == "") {
	            children = [];
	          }
	          children = children.concat(addNodes);
	        } else {
	          for (var i = addNodes.length - 1; i >= 0; i--) {
	            children.splice(arguments.length <= 2 ? undefined : arguments[2], 0, addNodes[i]);
	          }
	        }

	        this.treeChildrenMap.overwrite(arguments.length <= 0 ? undefined : arguments[0], children);
	        var parentNode = this.findTreeDataNodeByCode(arguments.length <= 0 ? undefined : arguments[0]);
	        if (arguments.length == 2) {
	          for (var i = 0; i < addNodes.length; i++) {
	            if (parentNode.children == undefined) {
	              console.log(请在初始数据中指定children数据);
	            }
	            parentNode.children.push(addNodes[i]);
	          }
	        }
	      }
	    },
	    getNodeLevel: function getNodeLevel(code) {
	      var level = -1;
	      var node = this.treeMap.get(code);
	      if (node != undefined) {
	        level = node.level;
	      }
	      return level;
	    },
	    hasChildren: function hasChildren(code) {
	      var children = this.getChildren(code);
	      if (children == "") {
	        return false;
	      } else {
	        return true;
	      }
	    },
	    getChildren: function getChildren(code) {
	      var _this5 = this;

	      var children = this.treeChildrenMap.get(code);
	      var results = [];
	      children.forEach(function (item) {
	        results.push(_this5.getPrimaryNode(item));
	      });
	      return results;
	    },
	    getChildrenCascade: function getChildrenCascade(code) {
	      var _this6 = this;

	      var childrenTreeBeanArr = [];

	      var childrenNodeArr = [];
	      var childrenNodes = this.treeChildrenMap.get(code);

	      if (childrenNodes != null && childrenNodes.length > 0) {
	        for (var i = 0; i < childrenNodes.length; i++) {
	          childrenNodeArr.push(childrenNodes[i]);
	        }
	        while (childrenNodeArr.length > 0) {
	          var firstChildNode = childrenNodeArr.shift();
	          childrenTreeBeanArr.push(firstChildNode);

	          var childrenArr = this.treeChildrenMap.get(firstChildNode.code);
	          if (childrenArr != null && childrenArr.length > 0) {
	            for (var i = childrenArr.length - 1; i >= 0; i--) {
	              childrenNodeArr.unshift(childrenArr[i]);
	            }
	          }
	        }
	      } else {}
	      var results = [];
	      childrenTreeBeanArr.forEach(function (item) {
	        results.push(_this6.getPrimaryNode(item));
	      });
	      return results;
	    },
	    getParentCascade: function getParentCascade(code) {
	      var parents = [];
	      var node = this.treeMap.get(code);

	      var parentNode = this.treeMap.get(node.parent);
	      while (parentNode != undefined) {
	        parents.push(this.getPrimaryNode(parentNode));
	        parentNode = this.treeMap.get(parentNode.parent);
	      }
	      return parents;
	    },
	    findNodeByCode: function findNodeByCode(code) {
	      return this.getPrimaryNode(this.treeMap.get(code));
	    },
	    isExpanded: function isExpanded(code) {
	      return this.tree.getNodeExpandInfo(code);
	    },
	    isChecked: function isChecked(code) {
	      var checkedNodes = this.getCheckedNodes();
	      var checked = false;
	      for (var i = 0; i < checkedNodes.length; i++) {
	        if (checkedNodes[i].code == code) {
	          checked = true;
	          break;
	        }
	      }
	      return checked;
	    }
	  }
	};

/***/ }),

/***/ 467:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _node = __webpack_require__(468);

	var _node2 = _interopRequireDefault(_node);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Tree = function () {
	  function Tree(options) {
	    var _this = this;

	    _classCallCheck(this, Tree);

	    for (var option in options) {
	      if (options.hasOwnProperty(option)) {
	        this[option] = options[option];
	      }
	    }
	    this.nodesMap = {};

	    this.root = new _node2.default({
	      data: this.data,
	      _tree: this,
	      treeId: this.treeId
	    });

	    if (this.lazy && this.load) {
	      var loadFn = this.load;
	      loadFn(this.root, function (data) {
	        _this.root.doCreateChildren(data);
	        _this._initDefaultCheckedNodes();
	      });
	    } else {
	      this._initDefaultCheckedNodes();
	    }
	  }

	  _createClass(Tree, [{
	    key: "filter",
	    value: function filter(value) {
	      var filterNodeMethod = this.filterNodeMethod;
	      var traverse = function traverse(node) {
	        var childNodes = node.root ? node.root.childNodes : node.childNodes;

	        childNodes.forEach(function (child) {
	          child.visible = filterNodeMethod.call(child, value, child.data, child);
	          if (child.visible) {

	            if (value != "") {
	              var retVal = isInNode(value, child);
	              child.showSearchStyle = retVal;
	            } else {
	              child.showSearchStyle = false;
	            }
	          }
	          traverse(child);
	        });

	        if (!node.visible && childNodes.length) {
	          var allHidden = true;

	          childNodes.forEach(function (child) {
	            if (child.visible) allHidden = false;
	          });

	          if (node.root) {
	            node.root.visible = allHidden === false;
	            if (node.root.visible) {
	              var retVal = isInNode(value, node.root);
	              node.root.showSearchStyle = retVal;
	            }
	          } else {
	            node.visible = allHidden === false;
	            if (node.visible) {
	              var retVal = isInNode(value, node);
	              node.showSearchStyle = retVal;
	            }
	          }
	        }

	        if (node.visible && !node.isLeaf) node.expand();
	      };
	      var isInNode = function isInNode(value, nodeValue) {
	        value = value.toUpperCase();
	        var flag = false;
	        if (nodeValue.data.assist != undefined) {
	          flag = nodeValue.data.assist.toUpperCase().indexOf(value) !== -1;
	        }
	        if (!flag) {
	          if (nodeValue.data.label != undefined) {
	            flag = nodeValue.data.label.toUpperCase().indexOf(value) !== -1;
	          }
	        }
	        if (!flag) {
	          if (nodeValue.data.code != undefined) {
	            flag = nodeValue.data.code.toUpperCase().indexOf(value) !== -1;
	          }
	        }

	        return flag;
	      };
	      traverse(this);
	    }
	  }, {
	    key: "setData",
	    value: function setData(newVal) {
	      var instanceChanged = newVal !== this.root.data;
	      this.root.setData(newVal);
	      if (instanceChanged) {
	        this._initDefaultCheckedNodes();
	      }
	    }
	  }, {
	    key: "_initDefaultCheckedNodes",
	    value: function _initDefaultCheckedNodes() {
	      var _this2 = this;

	      var defaultCheckedKeys = this.defaultCheckedKeys || [];
	      var nodesMap = this.nodesMap;

	      defaultCheckedKeys.forEach(function (checkedKey) {
	        var node = nodesMap[checkedKey];

	        if (node) {
	          node.setChecked(true, !_this2.checkStrictly);
	        }
	      });
	    }
	  }, {
	    key: "_initDefaultCheckedNode",
	    value: function _initDefaultCheckedNode(node) {
	      var defaultCheckedKeys = this.defaultCheckedKeys || [];

	      if (defaultCheckedKeys.indexOf(node.key) !== -1) {
	        node.setChecked(true, !this.checkStrictly);
	      }
	    }
	  }, {
	    key: "setDefaultCheckedKey",
	    value: function setDefaultCheckedKey(newVal) {
	      if (newVal !== this.defaultCheckedKeys) {
	        this.defaultCheckedKeys = newVal;
	        this._initDefaultCheckedNodes();
	      }
	    }
	  }, {
	    key: "registerNode",
	    value: function registerNode(node) {
	      var key = this.key;
	      if (!key || !node || !node.data) return;

	      this.nodesMap[node.key] = node;
	    }
	  }, {
	    key: "deregisterNode",
	    value: function deregisterNode(node) {
	      var key = this.key;
	      if (!key || !node || !node.data) return;

	      delete this.nodesMap[node.key];
	    }
	  }, {
	    key: "expandNode",
	    value: function expandNode(code, isExpand) {
	      var isGo = true;
	      var checkedNodes = [];
	      var traverse = function traverse(node) {
	        if (!isGo) {
	          return;
	        }
	        var childNodes = node.root ? node.root.childNodes : node.childNodes;
	        childNodes.forEach(function (child) {

	          if (child.data.code == code) {
	            if (isExpand) {
	              child.expand();
	            } else {
	              child.collapse();
	            }

	            isGo = false;
	          } else {
	            traverse(child);
	          }
	        });
	      };

	      traverse(this);
	    }
	  }, {
	    key: "getNodeExpandInfo",
	    value: function getNodeExpandInfo(code) {
	      var expanded = false;
	      var isGo = true;
	      var traverse = function traverse(node) {
	        if (!isGo) {
	          return;
	        }
	        var childNodes = node.root ? node.root.childNodes : node.childNodes;
	        childNodes.forEach(function (child) {

	          if (child.data.code == code) {
	            expanded = child.expanded;
	            isGo = false;
	          } else {
	            traverse(child);
	          }
	        });
	      };

	      traverse(this);
	      return expanded;
	    }
	  }, {
	    key: "getCheckedNodes",
	    value: function getCheckedNodes(leafOnly) {
	      var checkedNodes = [];
	      var traverse = function traverse(node) {
	        var childNodes = node.root ? node.root.childNodes : node.childNodes;

	        childNodes.forEach(function (child) {
	          if (!leafOnly && child.checked || leafOnly && child.isLeaf && child.checked) {
	            checkedNodes.push(child.data);
	          }

	          traverse(child);
	        });
	      };

	      traverse(this);

	      return checkedNodes;
	    }
	  }, {
	    key: "setCheckedNodes",
	    value: function setCheckedNodes(array, isChecked) {
	      var _this3 = this;

	      var lastChecked = this.getCheckedNodes();
	      var lastCheckedNodes = [];
	      lastChecked.forEach(function (item) {
	        lastCheckedNodes.push(_this3.nodesMap[item.code]);
	      });
	      lastCheckedNodes.forEach(function (node) {
	        node.setChecked(false, !_this3.checkStrictly);
	      });

	      var flag = true;
	      if (isChecked == false) {
	        flag = isChecked;
	      }
	      var allSelectedNodes = [];
	      array.forEach(function (item) {
	        if (_this3.nodesMap[item] != undefined) {
	          allSelectedNodes.push(_this3.nodesMap[item]);
	        }
	      });

	      allSelectedNodes.forEach(function (node) {
	        node.setChecked(flag, !_this3.checkStrictly);
	      });
	    }
	  }, {
	    key: "cancelCheckedNodes",
	    value: function cancelCheckedNodes(array) {
	      this.setCheckedNodes(array, false);
	    }
	  }]);

	  return Tree;
	}();

	exports.default = Tree;
	;

/***/ }),

/***/ 468:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _objectAssign = __webpack_require__(469);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _storagetree = __webpack_require__(470);

	var _storagetree2 = _interopRequireDefault(_storagetree);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var reInitChecked = function reInitChecked(node) {
	  var siblings = node.childNodes;
	  var all = true;
	  var none = true;

	  for (var i = 0, j = siblings.length; i < j; i++) {
	    var sibling = siblings[i];
	    if (sibling.checked !== true || sibling.indeterminate) {
	      all = false;
	    }
	    if (sibling.checked !== false || sibling.indeterminate) {
	      none = false;
	    }
	  }

	  if (all) {
	    node.setChecked(true);
	  } else if (!all && !none) {
	    node.setChecked('half');
	  } else if (none) {
	    node.setChecked(false);
	  }
	};

	var getPropertyFromData = function getPropertyFromData(node, prop) {
	  var props = node._tree.props;
	  var data = node.data || {};
	  var config = props[prop];

	  if (typeof config === 'function') {
	    return config(data, node);
	  } else if (typeof config === 'string') {
	    return data[config];
	  } else if (typeof config === 'undefined') {
	    return '';
	  }
	};

	var nodeIdSeed = 0;

	var Node = function () {
	  function Node(options) {
	    _classCallCheck(this, Node);

	    this.id = nodeIdSeed++;
	    this.text = null;
	    this.checked = false;
	    this.indeterminate = false;
	    this.data = null;
	    this.expanded = false;
	    this.parent = null;

	    for (var name in options) {
	      if (options.hasOwnProperty(name)) {
	        this[name] = options[name];
	      }
	    }
	    this.level = 0;
	    this.loaded = false;
	    this.childNodes = [];
	    this.loading = false;

	    this.isEnd = false;
	    this.visible = true;
	    this.showSearchStyle = false;
	    this.superNodes = [];
	    if (this.parent) {
	      this.level = this.parent.level + 1;
	    }

	    var tree = this._tree;
	    if (!tree) {
	      throw new Error('[Node]_tree is required!');
	    }
	    tree.registerNode(this);

	    if (tree.lazy !== true && this.data) {
	      this.setData(this.data);

	      if (tree.defaultExpandAll && this.level < tree.expandLevel) {
	        this.expanded = true;
	      }
	    } else if (this.level > 0 && tree.lazy && tree.defaultExpandAll) {
	      this.expand();
	    }

	    if (!this.data) return;
	    var defaultExpandedKeys = tree.defaultExpandedKeys;
	    var key = tree.key;
	    if (key && defaultExpandedKeys && defaultExpandedKeys.indexOf(this.key) !== -1) {
	      if (tree.autoExpandParent) {
	        var parent = this.parent;
	        while (parent.level > 0) {
	          parent.expanded = true;
	          parent = parent.parent;
	        }
	      }

	      this.expand();
	    }

	    if (tree.lazy) {
	      tree._initDefaultCheckedNode(this);
	    }

	    this.creatSuperParent();
	    this.setIsEnd();
	  }

	  _createClass(Node, [{
	    key: 'creatSuperParent',
	    value: function creatSuperParent() {
	      var parent = this.parent;
	      if (!parent || parent.level === 0) {
	        return;
	      }
	      while (parent.level > 0) {
	        this.superNodes.push(parent);
	        parent = parent.parent;
	      }
	      var newArray = [];
	      for (var i = this.superNodes.length - 1; i >= 0; i--) {
	        newArray.push(this.superNodes[i]);
	      };
	      this.superNodes = newArray;
	    }
	  }, {
	    key: 'setIsEnd',
	    value: function setIsEnd() {
	      var parent = this.parent;
	      if (!parent) {
	        return;
	      }

	      var node = _storagetree2.default.getTreeMap(this.treeId).get(this.data.code);
	      if (node == undefined) {
	        return;
	      }
	      var parentCode = node.parent;

	      if (parentCode != undefined) {
	        var siblings = _storagetree2.default.getTreeChildrenMap(this.treeId).get(parentCode);


	        for (var i = 0, j = siblings.length; i < j; i++) {
	          var sibling = siblings[i];
	          if (sibling.code === this.data.code && i === j - 1) {
	            this.isEnd = true;
	          }
	        }
	      }
	    }
	  }, {
	    key: 'setData',
	    value: function setData(data) {
	      if (!Array.isArray(data) && !data.$treeNodeId) {
	        Object.defineProperty(data, '$treeNodeId', {
	          value: this.id,
	          enumerable: false,
	          configurable: false,
	          writable: false
	        });
	      }

	      this.data = data;
	      this.childNodes = [];
	      var children = void 0;
	      if (this.level === 0 && this.data instanceof Array) {
	        children = this.data;
	      } else {
	        children = getPropertyFromData(this, 'children') || [];
	      }

	      for (var i = 0, j = children.length; i < j; i++) {
	        this.insertChild({ data: children[i] });
	      }
	    }
	  }, {
	    key: 'insertChild',
	    value: function insertChild(child, index) {
	      if (!child) throw new Error('insertChild error: child is required.');

	      if (!(child instanceof Node)) {
	        (0, _objectAssign2.default)(child, {
	          parent: this,
	          treeId: this.treeId,
	          _tree: this._tree
	        });
	        child = new Node(child);
	      }

	      child.level = this.level + 1;

	      if (typeof index === 'undefined') {
	        this.childNodes.push(child);
	      } else {
	        this.childNodes.splice(index, 0, child);
	      }

	      for (var i = 0; i < this.childNodes.length; i++) {
	        if (i == this.childNodes.length - 1) {
	          this.childNodes[i].isEnd = true;
	        } else {
	          this.childNodes[i].isEnd = false;
	        }
	      }
	    }
	  }, {
	    key: 'removeChild',
	    value: function removeChild(child) {
	      var index = this.childNodes.indexOf(child);

	      if (index > -1) {
	        this._tree && this._tree.deregisterNode(child);
	        child.parent = null;
	        this.childNodes.splice(index, 1);
	      }
	    }
	  }, {
	    key: 'removeChildByData',
	    value: function removeChildByData(data) {
	      var targetNode = null;
	      this.childNodes.forEach(function (node) {
	        if (node.data === data) {
	          targetNode = node;
	        }
	      });

	      if (targetNode) {
	        this.removeChild(targetNode);
	      }
	    }
	  }, {
	    key: 'expand',
	    value: function expand(callback) {
	      var _this = this;

	      if (this.shouldLoadData()) {
	        this.loadData(function (data) {
	          if (data instanceof Array) {
	            _this.expanded = true;
	            if (callback) callback();
	          }
	        });
	      } else {
	        this.expanded = true;
	        if (callback) callback();
	      }
	    }
	  }, {
	    key: 'doCreateChildren',
	    value: function doCreateChildren(array) {
	      var _this2 = this;

	      var defaultProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      array.forEach(function (item) {
	        _this2.insertChild((0, _objectAssign2.default)({ data: item }, defaultProps));
	      });
	    }
	  }, {
	    key: 'collapse',
	    value: function collapse() {
	      this.expanded = false;
	    }
	  }, {
	    key: 'shouldLoadData',
	    value: function shouldLoadData() {
	      return this._tree.lazy === true && this._tree.load && !this.loaded;
	    }
	  }, {
	    key: 'hasChild',
	    value: function hasChild() {

	      var childNodes = this.childNodes;
	      var flag = false;
	      if (!this._tree.lazy || this._tree.lazy === true && this.loaded === true) {
	        flag = childNodes && childNodes.length > 0;
	      }
	      if (!flag) {
	        if (this.data.isleaf != undefined && !this.data.isleaf) {
	          flag = true;
	        } else if (this._tree.dynamic && this.data.haschild == '1') {
	          flag = true;
	        }
	      }

	      return flag;
	    }
	  }, {
	    key: 'setChecked',
	    value: function setChecked(value, deep) {
	      var _this3 = this;

	      this.indeterminate = value === 'half';
	      this.checked = value === true;

	      var handleDescendants = function handleDescendants() {
	        if (deep) {
	          var childNodes = _this3.childNodes;
	          for (var i = 0, j = childNodes.length; i < j; i++) {
	            var child = childNodes[i];
	            child.setChecked(value !== false, deep);
	          }
	        }
	      };

	      if (!this._tree.checkstrictly && this.shouldLoadData()) {
	        this.loadData(function () {
	          handleDescendants();
	        }, {
	          checked: value !== false
	        });
	      } else {
	        handleDescendants();
	      }

	      var parent = this.parent;
	      if (!parent || parent.level === 0) return;

	      if (!this._tree.checkstrictly) {
	        reInitChecked(parent);
	      }
	    }
	  }, {
	    key: 'getChildren',
	    value: function getChildren() {
	      var data = this.data;
	      if (!data) return null;

	      var props = this._tree.props;
	      var children = 'children';
	      if (props) {
	        children = props.children || 'children';
	      }

	      if (data[children] === undefined) {
	        data[children] = null;
	      }

	      return data[children];
	    }
	  }, {
	    key: 'updateChildren',
	    value: function updateChildren() {
	      var _this4 = this;

	      var newData = this.getChildren() || [];
	      var oldData = this.childNodes.map(function (node) {
	        return node.data;
	      });

	      var newDataMap = {};
	      var newNodes = [];

	      newData.forEach(function (item, index) {
	        if (item.$treeNodeId) {
	          newDataMap[item.$treeNodeId] = { index: index, data: item };
	        } else {
	          newNodes.push({ index: index, data: item });
	        }
	      });

	      oldData.forEach(function (item) {
	        if (!newDataMap[item.$treeNodeId]) {
	          _this4.removeChildByData(item);
	        }
	      });
	      newNodes.forEach(function (_ref) {
	        var index = _ref.index,
	            data = _ref.data;
	        return _this4.insertChild({ data: data }, index);
	      });
	    }
	  }, {
	    key: 'loadData',
	    value: function loadData(callback) {
	      var _this5 = this;

	      var defaultProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      if (this._tree.lazy === true && this._tree.load && !this.loaded && !this.loading) {
	        this.loading = true;

	        var resolve = function resolve(children) {
	          _this5.loaded = true;
	          _this5.loading = false;
	          _this5.childNodes = [];

	          _this5.doCreateChildren(children, defaultProps);

	          if (callback) {
	            callback.call(_this5, children);
	          }
	        };

	        this._tree.load(this, resolve);
	      } else {
	        if (callback) {
	          callback.call(this);
	        }
	      }
	    }
	  }, {
	    key: 'label',
	    get: function get() {
	      return getPropertyFromData(this, 'label');
	    }
	  }, {
	    key: 'icon',
	    get: function get() {
	      return getPropertyFromData(this, 'icon');
	    }
	  }, {
	    key: 'key',
	    get: function get() {
	      var nodeKey = this._tree.key;
	      if (this.data) return this.data[nodeKey];
	      return null;
	    }
	  }, {
	    key: 'isLeaf',
	    get: function get() {
	      return !this.hasChild();
	    }
	  }, {
	    key: 'dynamicLoad',
	    get: function get() {
	      var flag = false;
	      var childNodes = this.childNodes;
	      if (childNodes.length == 0 && this._tree.dynamic && this.data.haschild == '1') {
	        flag = true;
	      }
	      return flag;
	    }
	  }]);

	  return Node;
	}();

	exports.default = Node;

/***/ }),

/***/ 469:
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
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

/***/ 470:
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var treeMap = {};
	var treeChildrenMap = {};
	var treeCount = 0;
	exports.default = {
	  setTreeMap: function setTreeMap(treeId, treeMapInfo) {
	    treeMap[treeId] = treeMapInfo;
	  },
	  setTreeChildrenMap: function setTreeChildrenMap(treeId, treeMapInfo) {
	    treeChildrenMap[treeId] = treeMapInfo;
	  },
	  getTreeMap: function getTreeMap(treeId) {
	    return treeMap[treeId];
	  },
	  getTreeChildrenMap: function getTreeChildrenMap(treeId) {
	    return treeChildrenMap[treeId];
	  },
	  getTreeCount: function getTreeCount() {
	    return ++treeCount;
	  }
	};

/***/ }),

/***/ 471:
/***/ (function(module, exports) {

	"use strict";

	function Map() {
	  this.elements = new Array();

	  this.size = function () {
	    return this.elements.length;
	  };

	  this.isEmpty = function () {
	    return this.elements.length < 1;
	  };

	  this.clear = function () {
	    this.elements = new Array();
	  };

	  this.put = function (_key, _value) {
	    this.elements.push({ key: _key, value: _value });
	  };

	  this.remove = function (_key) {
	    var bln = false;
	    try {
	      for (var i = 0; i < this.elements.length; i++) {
	        if (this.elements[i].key == _key) {
	          this.elements.splice(i, 1);
	          return true;
	        }
	      }
	    } catch (e) {
	      bln = false;
	    }
	    return bln;
	  };

	  this.get = function (_key) {
	    try {
	      for (var i = 0; i < this.elements.length; i++) {
	        if (this.elements[i].key == _key) {
	          return this.elements[i].value;
	        }
	      }
	    } catch (e) {
	      return null;
	    }
	  };

	  this.set = function (_key, _attr, _val) {
	    if (arguments.length == 2) {
	      this.put(arguments[0], arguments[1]);
	    } else {
	      try {
	        for (var i = 0; i < this.elements.length; i++) {
	          if (this.elements[i].key == _key) {
	            this.elements[i].value[_attr] = _val;
	          }
	        }
	      } catch (e) {}
	    }
	  };
	  this.arrayAddElm = function (_key, _attr, _val) {
	    try {
	      for (var i = 0; i < this.elements.length; i++) {
	        if (this.elements[i].key == _key) {
	          this.elements[i].value.attr[_attr].push(_val);
	        }
	      }
	    } catch (e) {}
	  };
	  this.arrayDelElm = function (_key, _attr, _val) {
	    try {
	      for (var i = 0; i < this.elements.length; i++) {
	        if (this.elements[i].key == _key) {
	          for (var index = 0; index < this.elements[i].value.attr[_attr].length; index++) {
	            if (this.elements[i].value.attr[_attr][index] == _val) {
	              this.elements[i].value.attr[_attr].splice(index, 1);
	            }
	          }
	        }
	      }
	    } catch (e) {}
	  };

	  this.overwrite = function (_key, _val) {
	    try {
	      var flag = false;
	      for (var i = 0; i < this.elements.length; i++) {
	        if (this.elements[i].key == _key) {
	          this.elements[i].value = _val;
	          flag = true;
	        }
	      }
	      if (!flag) {
	        this.put(_key, _val);
	      }
	    } catch (e) {}
	  };

	  this.element = function (_index) {
	    if (_index < 0 || _index >= this.elements.length) {
	      return null;
	    }
	    return this.elements[_index];
	  };

	  this.containsKey = function (_key) {
	    var bln = false;
	    try {
	      for (var i = 0; i < this.elements.length; i++) {
	        if (this.elements[i].key == _key) {
	          bln = true;
	        }
	      }
	    } catch (e) {
	      bln = false;
	    }
	    return bln;
	  };

	  this.containsValue = function (_value) {
	    var bln = false;
	    try {
	      for (var i = 0; i < this.elements.length; i++) {
	        if (this.elements[i].value == _value) {
	          bln = true;
	        }
	      }
	    } catch (e) {
	      bln = false;
	    }
	    return bln;
	  };

	  this.values = function () {
	    var arr = new Array();
	    for (var i = 0; i < this.elements.length; i++) {
	      arr.push(this.elements[i].value);
	    }
	    return arr;
	  };

	  this.keys = function () {
	    var arr = new Array();
	    for (var i = 0; i < this.elements.length; i++) {
	      arr.push(this.elements[i].key);
	    }
	    return arr;
	  };
	}

	module.exports = {
	  HyMap: Map
	};

/***/ }),

/***/ 472:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.toXmlDom = toXmlDom;
	exports.xmlToJson = xmlToJson;
	exports.convertTreeDataToMap = convertTreeDataToMap;
	exports.getStrCharLength = getStrCharLength;
	exports.setQueryComponentValue = setQueryComponentValue;

	var _map = __webpack_require__(471);

	function toXmlDom(source) {
	  var xmlDoc = null;
	  if (window.ActiveXObject) {
	    var ARR_ACTIVEX = ["MSXML4.DOMDocument", "MSXML3.DOMDocument", "MSXML2.DOMDocument", "MSXML.DOMDocument", "Microsoft.XmlDom"];
	    var XmlDomflag = false;
	    for (var i = 0; i < ARR_ACTIVEX.length && !XmlDomflag; i++) {
	      try {
	        var objXML = new ActiveXObject(ARR_ACTIVEX[i]);
	        xmlDoc = objXML;
	        XmlDomflag = true;
	      } catch (e) {}
	    }
	    if (xmlDoc) {
	      xmlDoc.async = false;
	      xmlDoc.loadXML(source);
	    }
	  } else {
	    var parser = new DOMParser();
	    var xmlDoc = parser.parseFromString(source, "text/xml");
	  }
	  return xmlDoc;
	}
	function xmlToJson(xml) {
	  var obj = {};
	  obj.selected = false;
	  if (xml.nodeType == 1) {
	    if (xml.attributes.length > 0) {
	      for (var j = 0; j < xml.attributes.length; j++) {
	        var attribute = xml.attributes.item(j);
	        obj[attribute.nodeName] = attribute.nodeValue;
	      }
	    }
	  } else if (xml.nodeType == 3) {
	    obj = xml.nodeValue;
	  }

	  if (xml.hasChildNodes()) {
	    for (var i = 0; i < xml.childNodes.length; i++) {
	      var item = xml.childNodes.item(i);
	      var nodeName = "children";
	      if (typeof obj[nodeName] == "undefined") {
	        obj[nodeName] = xmlToJson(item);
	      } else {
	        if (typeof obj[nodeName].length == "undefined") {
	          var old = obj[nodeName];
	          obj[nodeName] = [];
	          obj[nodeName].push(old);
	        }
	        obj[nodeName].push(xmlToJson(item));
	      }
	    }
	  } else {
	    obj.children = [];
	  }
	  if (xml.nodeType == 9) obj = obj.children;
	  return obj;
	};

	function convertTreeDataToMap(treedata) {
	  var data = treedata.replace('<?xml version="1.0" encoding="utf-8"?>', "");
	  var s = toXmlDom(data);
	  var initJsonData = xmlToJson(s);
	  var treeMap = new _map.HyMap();
	  function getTreeMap(data) {
	    for (var i = 0; i < data.length; i++) {
	      if (data[i].children != undefined && data[i].children.length > 0) {

	        var obj = {};
	        obj.leaf = false;

	        for (var attr in data[i]) {
	          if (attr != 'children') {
	            obj[attr] = data[i][attr];
	          }
	        }
	        treeMap.put(data[i].code, obj);

	        getTreeMap(data[i].children);
	      } else if (data[i].children != undefined && data[i].children.length == undefined) {
	        var obj = {};
	        obj.leaf = false;

	        for (var attr in data[i]) {
	          if (attr != 'children') {
	            obj[attr] = data[i][attr];
	          }
	        }
	        treeMap.put(data[i].code, obj);

	        getTreeMap([data[i].children]);
	      } else {

	        var obj = {};
	        obj.leaf = true;
	        for (var attr in data[i]) {
	          if (attr != 'children') {
	            obj[attr] = data[i][attr];
	          }
	        }
	        treeMap.put(data[i].code, obj);
	      }
	    }
	  }
	  getTreeMap([initJsonData]);
	  return treeMap;
	}

	function getStrCharLength(str) {
	  var length = 0;
	  var re = /[\u4e00-\u9fa5]/;
	  for (var i = 0; i < str.length; i++) {
	    if (re.test(str.charAt(i))) {
	      length = length + 12;
	    } else {
	      length = length + 7;
	    }
	  }
	  return length;
	}

	function setQueryComponentValue() {
	  if (typeof response == 'undefined') {
	    return;
	  }
	  var dataWraps = response.dataWraps;
	  for (var dataWrap in dataWraps) {
	    if (JSON.stringify(dataWraps[dataWrap].query.data) != "{}") {
	      var queryParam = dataWraps[dataWrap].query.data;
	      for (var param in queryParam) {
	        var paramName = dataWrap + ".query." + param;
	        for (var i = 0; i < HyUploadComponents.length; i++) {
	          if (HyUploadComponents[i].name.indexOf(paramName) != -1) {
	            HyUploadComponents[i].setValue(queryParam[param]);
	            break;
	          }
	        }
	      }
	    }
	  }
	}

/***/ }),

/***/ 473:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(474);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js!../../node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"extract\":true,\"remove\":true}!../../node_modules/style-loader/index.js!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js?sourceMap!./tree.less", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js!../../node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"extract\":true,\"remove\":true}!../../node_modules/style-loader/index.js!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js?sourceMap!./tree.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 474:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ }),

/***/ 475:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(476),
	  /* template */
	  __webpack_require__(483),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)

	module.exports = Component.exports


/***/ }),

/***/ 476:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _transition = __webpack_require__(477);

	var _transition2 = _interopRequireDefault(_transition);

	var _elemcheckbox = __webpack_require__(478);

	var _elemcheckbox2 = _interopRequireDefault(_elemcheckbox);

	var _emitter = __webpack_require__(239);

	var _emitter2 = _interopRequireDefault(_emitter);

	var _storagetree = __webpack_require__(470);

	var _storagetree2 = _interopRequireDefault(_storagetree);

	var _framework = __webpack_require__(472);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'el-tree-node',
	  mixins: [_emitter2.default],
	  props: {
	    node: {
	      default: function _default() {
	        return {};
	      }
	    },
	    valueprovider: {
	      type: String,
	      default: ""
	    },
	    rightfilter: {
	      type: Boolean,
	      default: false
	    },
	    props: {},
	    renderContent: Function
	  },

	  components: {
	    CollapseTransition: _transition2.default,
	    ElCheckbox: _elemcheckbox2.default,
	    NodeContent: {
	      props: {
	        node: {
	          required: true
	        }
	      },
	      render: function render(h) {
	        var _this = this;

	        var parent = this.$parent;
	        if (parent.renderContent) {
	          if (parent.$isTree) {
	            var treeId = parent.treeId;
	          } else {
	            var treeId = parent.$tree.treeId;
	          }

	          var innerNode = _storagetree2.default.getTreeMap(treeId).get(this.node.data.code);
	          return parent.renderContent.call(parent._renderProxy, h, { _self: parent.$parent.$vnode.context, node: innerNode });
	        } else if (this.node.isLeaf) {
	          return h(
	            'span',
	            {
	              on: {
	                'click': function click(_) {
	                  return _this.nodeTextClick(_this.node);
	                }
	              },
	              'class': 'el-tree-node__label' },
	            [h('span', { 'class': 'el-tree-node_icon is-leaf' }), ' ', h(
	              'span',
	              { 'class': 'el-tree-node_text' },
	              [' ', this.node.label, ' ']
	            )]
	          );
	        } else {
	          return h(
	            'span',
	            {
	              on: {
	                'click': function click(_) {
	                  return _this.nodeTextClick(_this.node);
	                }
	              },
	              'class': 'el-tree-node__label' },
	            [h('span', { 'class': 'el-tree-node_icon  ' + (parent.expanded ? 'is-open' : 'is-close') }), '  ', h(
	              'span',
	              { 'class': 'el-tree-node_text' },
	              [' ', this.node.label, ' ']
	            )]
	          );
	        }
	      },

	      methods: {
	        nodeTextClick: function nodeTextClick(node) {}
	      }
	    }
	  },

	  data: function data() {
	    return {
	      $tree: null,
	      expanded: false,
	      childNodeRendered: false,
	      multiple: false,
	      oldChecked: null,
	      oldIndeterminate: null,
	      parent: this.$parent
	    };
	  },

	  computed: {
	    nodeselected: function nodeselected() {
	      var code = this.node.data.code;
	      if (this.node.data.code == this.$tree.value) {
	        return true;
	      } else {
	        return false;
	      }
	    },
	    spanStyle: function spanStyle() {

	      var style = { 'display': 'none' };
	      if (this.node.level > 1) {
	        style = {};
	      }
	      return style;
	    },
	    nodeStyle: function nodeStyle() {
	      var labelLength = this.node.label.length;
	      var width = labelLength * 28;

	      if (this.multiple) {
	        width = width + 80;
	      }
	      var style = { 'padding-left': 5 + 'px' };

	      return style;
	    }
	  },
	  watch: {
	    'node.indeterminate': function nodeIndeterminate(val) {
	      this.handleSelectChange(this.node.checked, val);
	    },
	    'node.checked': function nodeChecked(val) {
	      this.handleSelectChange(val, this.node.indeterminate);
	    },
	    'node.expanded': function nodeExpanded(val) {
	      this.expanded = val;
	      if (val) {
	        this.childNodeRendered = true;
	      }
	    }
	  },

	  methods: {
	    getNodeKey: function getNodeKey(node, index) {
	      var nodeKey = this.$tree.nodeKey;
	      if (nodeKey && node) {
	        return node.data[nodeKey];
	      }
	      return index;
	    },
	    handleSelectChange: function handleSelectChange(checked, indeterminate) {
	      if (this.oldChecked !== checked && this.oldIndeterminate !== indeterminate) {
	        var treeBean = _storagetree2.default.getTreeMap(this.$tree.treeId).get(this.node.data.code);
	        this.$tree.$emit('checkchange', treeBean, checked, indeterminate);
	        this.dispatch('HyDroptree', 'checkchange', [treeBean, checked, indeterminate]);
	      }
	      this.oldChecked = checked;
	      this.indeterminate = indeterminate;
	    },
	    handleClick: function handleClick(e) {
	      var _this2 = this;

	      if (e.target.className === 'el-tree-node_text') {
	        if (this.$tree.onlyselectleaf) {
	          if (!this.node.isLeaf) {
	            return;
	          }
	        }

	        this.$tree.$emit('input', this.node.data.code);
	        this.$nextTick(function () {
	          _this2.$tree.currentNode = _this2;
	          var treeBean = _storagetree2.default.getTreeMap(_this2.$tree.treeId).get(_this2.node.data.code);
	          _this2.dispatch('HyDroptree', 'treeClick', treeBean);

	          _this2.$tree.$emit('nodeclick', treeBean);
	        });
	      }
	    },
	    handledblClick: function handledblClick(e) {
	      var _this3 = this;

	      if (e.target.className === 'el-tree-node_text') {
	        if (this.$tree.onlyselectleaf) {
	          if (!this.node.isLeaf) {
	            return;
	          }
	        }

	        this.dispatch('HyDroptree', 'treedblClick');
	        this.$tree.$emit('input', this.node.data.code);
	        this.$nextTick(function () {
	          _this3.$tree.currentNode = _this3;
	          var treeBean = _storagetree2.default.getTreeMap(_this3.$tree.treeId).get(_this3.node.data.code);

	          _this3.$tree.$emit('nodedblclick', treeBean);
	        });
	      }
	    },
	    handleExpandIconClick: function handleExpandIconClick(event) {

	      if (this.node.dynamicLoad) {
	        if (this.node.needLoad == undefined || this.node.needLoad) {
	          this.node.needLoad = false;

	          var data = {
	            expandLevel: 1,
	            initData: false,
	            retriever: this.valueprovider,
	            rightfilter: this.rightfilter,
	            dynamic: true
	          };

	          var hasBeanInfo = "code,label,type,openIcon,closeIcon,location,checkenable,id,hasChild,isEnd";
	          for (var attr in this.node.data) {
	            if ($isCloudService) {
	              if (hasBeanInfo.indexOf(attr) < 0) {
	                data["extProp[" + attr + "]"] = this.node.data[attr];
	              } else if (attr != "id" && attr != "haschild" && attr != "isEnd") {
	                data[attr + ""] = this.node.data[attr];
	              }
	            } else {
	              if (hasBeanInfo.indexOf(attr) < 0) {
	                data["treeBean.extProp." + attr + ""] = this.node.data[attr];
	              } else if (attr != "id" && attr != "haschild" && attr != "isEnd") {
	                data["treeBean." + attr + ""] = this.node.data[attr];
	              }
	            }
	          }

	          var me = this;
	          var urlPath = "";
	          if (typeof $$pageContextPath != "undefined") {
	            urlPath = $$pageContextPath;
	          } else {
	            urlPath = $$ContextPath.webContext;
	          }
	          $.ajax({
	            url: urlPath + "framework/treeview.do?dateValue=" + new Date().getTime(),
	            async: false,
	            data: data,
	            type: "post",
	            success: function success(data) {

	              data = data.replace('<?xml version="1.0" encoding="utf-8"?>', "");
	              var s = (0, _framework.toXmlDom)(data);
	              var initJsonData = (0, _framework.xmlToJson)(s);
	              if (initJsonData.children.length != 0) {
	                me.$tree.dynamicAddNode(me.node.data.code, initJsonData.children);
	              }
	            }
	          });
	        }
	      }
	      var treeBean = _storagetree2.default.getTreeMap(this.$tree.treeId).get(this.node.data.code);
	      if (this.expanded) {
	        this.$tree.$emit('nodecollapse', treeBean);
	        this.dispatch('HyDroptree', 'nodecollapse', treeBean);
	        this.node.collapse();
	      } else {
	        this.$tree.$emit('nodeexpanded', treeBean);
	        this.dispatch('HyDroptree', 'nodeexpanded', treeBean);
	        this.node.expand();
	      }
	    },
	    handleUserClick: function handleUserClick() {
	      if (this.node.indeterminate) {
	        this.node.setChecked(this.node.checked, !this.$tree.checkstrictly);
	      }
	    },
	    handleCheckChange: function handleCheckChange(ev) {
	      if (!this.node.indeterminate) {
	        this.node.setChecked(ev.target.checked, !this.$tree.checkstrictly);
	      }
	    }
	  },

	  created: function created() {
	    var _this4 = this;

	    var parent = this.$parent;

	    if (parent.$isTree) {
	      this.$tree = parent;
	    } else {
	      this.$tree = parent.$tree;
	    }

	    var tree = this.$tree;
	    var props = this.props || {};
	    var childrenKey = props['children'] || 'children';
	    this.$watch('node.data.' + childrenKey, function () {
	      _this4.node.updateChildren();
	    });

	    if (!tree) {
	      console.warn('Can not find node\'s tree.');
	    }

	    this.multiple = tree.multiple;

	    if (this.node.expanded) {
	      this.expanded = true;
	      this.childNodeRendered = true;
	    }
	  }
	};

/***/ }),

/***/ 477:
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Transition = function () {
	  function Transition() {
	    _classCallCheck(this, Transition);
	  }

	  _createClass(Transition, [{
	    key: 'beforeEnter',
	    value: function beforeEnter(el) {
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

	      el.style.display = 'block';
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
	      el.style.display = '';
	      el.style.height = '';
	      el.style.overflow = el.dataset.oldOverflow;
	    }
	  }, {
	    key: 'beforeLeave',
	    value: function beforeLeave(el) {
	      el.dataset.oldPaddingTop = el.style.paddingTop;
	      el.dataset.oldPaddingBottom = el.style.paddingBottom;
	      el.dataset.oldOverflow = el.style.overflow;

	      el.style.display = 'block';
	      if (el.scrollHeight !== 0) {
	        el.style.height = el.scrollHeight + 'px';
	      }
	      el.style.overflow = 'hidden';
	    }
	  }, {
	    key: 'leave',
	    value: function leave(el) {
	      if (el.scrollHeight !== 0) {
	        setTimeout(function () {
	          el.style.height = 0;
	          el.style.paddingTop = 0;
	          el.style.paddingBottom = 0;
	        });
	      }
	    }
	  }, {
	    key: 'afterLeave',
	    value: function afterLeave(el) {
	      el.style.display = el.style.height = '';
	      el.style.overflow = el.dataset.oldOverflow;
	      el.style.paddingTop = el.dataset.oldPaddingTop;
	      el.style.paddingBottom = el.dataset.oldPaddingBottom;
	    }
	  }]);

	  return Transition;
	}();

	exports.default = {
	  functional: true,
	  render: function render(h, _ref) {
	    var children = _ref.children;

	    var data = {
	      on: new Transition()
	    };

	    children = children.map(function (item) {
	      item.data.class = ['collapse-transition'];
	      return item;
	    });

	    return h('transition', data, children);
	  }
	};

/***/ }),

/***/ 478:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(479),
	  /* template */
	  __webpack_require__(482),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)

	module.exports = Component.exports


/***/ }),

/***/ 479:
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
	  name: 'ElCheckbox',

	  mixins: [_emitter2.default],

	  data: function data() {
	    return {
	      selfModel: false,
	      focus: false
	    };
	  },


	  computed: {
	    model: {
	      get: function get() {
	        return this.isGroup ? this.store : this.value !== undefined ? this.value : this.selfModel;
	      },
	      set: function set(val) {
	        if (this.isGroup) {
	          this.dispatch('ElCheckboxGroup', 'input', [val]);
	        } else if (this.value !== undefined) {
	          this.$emit('input', val);
	        } else {
	          this.selfModel = val;
	        }
	      }
	    },

	    isChecked: function isChecked() {
	      if ({}.toString.call(this.model) === '[object Boolean]') {
	        return this.model;
	      } else if (Array.isArray(this.model)) {
	        return this.model.indexOf(this.label) > -1;
	      } else if (this.model !== null && this.model !== undefined) {
	        return this.model === this.trueLabel;
	      }
	    },
	    isGroup: function isGroup() {
	      var parent = this.$parent;
	      while (parent) {
	        if (parent.$options.componentName !== 'ElCheckboxGroup') {
	          parent = parent.$parent;
	        } else {
	          this._checkboxGroup = parent;
	          return true;
	        }
	      }
	      return false;
	    },
	    store: function store() {
	      return this._checkboxGroup ? this._checkboxGroup.value : this.value;
	    }
	  },

	  props: {
	    value: {},
	    label: {},
	    indeterminate: Boolean,
	    disabled: Boolean,
	    checked: Boolean,
	    name: String,
	    trueLabel: [String, Number],
	    falseLabel: [String, Number]
	  },

	  methods: {
	    addToStore: function addToStore() {
	      if (Array.isArray(this.model) && this.model.indexOf(this.label) === -1) {
	        this.model.push(this.label);
	      } else {
	        this.model = this.trueLabel || true;
	      }
	    },
	    handleChange: function handleChange(ev) {
	      var _this = this;

	      setTimeout(function () {
	        _this.$emit('change', ev);
	      }, 0);
	      if (this.isGroup) {
	        this.$nextTick(function (_) {
	          _this.dispatch('ElCheckboxGroup', 'change', [_this._checkboxGroup.value]);
	        });
	      }
	    }
	  },

	  created: function created() {
	    this.checked && this.addToStore();
	  }
	};

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

/***/ 482:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('label', {
	    staticClass: "el-checkbox"
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
	  }), _vm._v(" "), (_vm.trueLabel || _vm.falseLabel) ? _c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.model),
	      expression: "model"
	    }],
	    staticClass: "el-checkbox__original",
	    attrs: {
	      "type": "checkbox",
	      "name": _vm.name,
	      "disabled": _vm.disabled,
	      "true-value": _vm.trueLabel,
	      "false-value": _vm.falseLabel
	    },
	    domProps: {
	      "checked": Array.isArray(_vm.model) ? _vm._i(_vm.model, null) > -1 : _vm._q(_vm.model, _vm.trueLabel)
	    },
	    on: {
	      "change": [function($event) {
	        var $$a = _vm.model,
	          $$el = $event.target,
	          $$c = $$el.checked ? (_vm.trueLabel) : (_vm.falseLabel);
	        if (Array.isArray($$a)) {
	          var $$v = null,
	            $$i = _vm._i($$a, $$v);
	          if ($$el.checked) {
	            $$i < 0 && (_vm.model = $$a.concat([$$v]))
	          } else {
	            $$i > -1 && (_vm.model = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
	          }
	        } else {
	          _vm.model = $$c
	        }
	      }, _vm.handleChange],
	      "focus": function($event) {
	        _vm.focus = true
	      },
	      "blur": function($event) {
	        _vm.focus = false
	      }
	    }
	  }) : _c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.model),
	      expression: "model"
	    }],
	    staticClass: "el-checkbox__original",
	    attrs: {
	      "type": "checkbox",
	      "disabled": _vm.disabled,
	      "name": _vm.name
	    },
	    domProps: {
	      "value": _vm.label,
	      "checked": Array.isArray(_vm.model) ? _vm._i(_vm.model, _vm.label) > -1 : (_vm.model)
	    },
	    on: {
	      "change": [function($event) {
	        var $$a = _vm.model,
	          $$el = $event.target,
	          $$c = $$el.checked ? (true) : (false);
	        if (Array.isArray($$a)) {
	          var $$v = _vm.label,
	            $$i = _vm._i($$a, $$v);
	          if ($$el.checked) {
	            $$i < 0 && (_vm.model = $$a.concat([$$v]))
	          } else {
	            $$i > -1 && (_vm.model = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
	          }
	        } else {
	          _vm.model = $$c
	        }
	      }, _vm.handleChange],
	      "focus": function($event) {
	        _vm.focus = true
	      },
	      "blur": function($event) {
	        _vm.focus = false
	      }
	    }
	  })]), _vm._v(" "), (_vm.$slots.default || _vm.label) ? _c('span', {
	    staticClass: "el-checkbox__label"
	  }, [_vm._t("default"), _vm._v(" "), (!_vm.$slots.default) ? [_vm._v(_vm._s(_vm.label))] : _vm._e()], 2) : _vm._e()])
	},staticRenderFns: []}

/***/ }),

/***/ 483:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.node.visible),
	      expression: "node.visible"
	    }],
	    staticClass: "el-tree-node",
	    class: {
	      'is-expanded': _vm.childNodeRendered && _vm.expanded, 'is-current': _vm.nodeselected, 'is-hidden': !_vm.node.visible, 'is-showsearch': _vm.node.showSearchStyle
	    },
	    on: {
	      "click": function($event) {
	        $event.stopPropagation();
	        return _vm.handleClick($event)
	      },
	      "dblclick": function($event) {
	        $event.stopPropagation();
	        return _vm.handledblClick($event)
	      }
	    }
	  }, [_c('div', {
	    staticClass: "el-tree-node__content",
	    style: (_vm.nodeStyle)
	  }, [_vm._l((_vm.node.superNodes), function(nodeItem) {
	    return [(nodeItem.level == 1) ? _c('span', {
	      staticClass: "el-tree-node__expand-icon-span-blank",
	      attrs: {
	        "flag": "1"
	      }
	    }) : _vm._e(), _vm._v(" "), (nodeItem.level != 1 && nodeItem.isEnd == true) ? _c('span', {
	      staticClass: "el-tree-node__expand-icon-span-blank",
	      attrs: {
	        "flag": "2"
	      }
	    }) : _vm._e(), _vm._v(" "), (nodeItem.level != 1 && nodeItem.isEnd == false) ? _c('span', {
	      staticClass: "el-tree-node__expand-icon-span",
	      attrs: {
	        "flag": "3"
	      }
	    }) : _vm._e()]
	  }), _vm._v(" "), _c('span', {
	    staticClass: "el-tree-node__expand-icon",
	    class: {
	      'is-leaf': _vm.node.isLeaf, expanded: !_vm.node.isLeaf && _vm.expanded, 'el-tree-node-lastline': _vm.node.isEnd && _vm.node.isLeaf, 'el-tree-node-line': !_vm.node.isEnd && _vm.node.isLeaf
	    },
	    on: {
	      "click": _vm.handleExpandIconClick
	    }
	  }), _vm._v(" "), (_vm.multiple) ? _c('el-checkbox', {
	    attrs: {
	      "indeterminate": _vm.node.indeterminate
	    },
	    on: {
	      "change": _vm.handleCheckChange
	    },
	    nativeOn: {
	      "click": function($event) {
	        $event.stopPropagation();
	        return _vm.handleUserClick($event)
	      }
	    },
	    model: {
	      value: (_vm.node.checked),
	      callback: function($$v) {
	        _vm.$set(_vm.node, "checked", $$v)
	      },
	      expression: "node.checked"
	    }
	  }) : _vm._e(), _vm._v(" "), (_vm.node.loading) ? _c('span', {
	    staticClass: "el-tree-node__loading-icon el-icon-loading"
	  }) : _vm._e(), _vm._v(" "), _c('node-content', {
	    attrs: {
	      "node": _vm.node
	    }
	  })], 2), _vm._v(" "), _c('collapse-transition', [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.expanded),
	      expression: "expanded"
	    }],
	    staticClass: "el-tree-node__children"
	  }, _vm._l((_vm.node.childNodes), function(child) {
	    return _c('el-tree-node', {
	      key: _vm.getNodeKey(child),
	      attrs: {
	        "render-content": _vm.renderContent,
	        "valueprovider": _vm.valueprovider,
	        "rightfilter": _vm.rightfilter,
	        "node": child
	      }
	    })
	  }), 1)])], 1)
	},staticRenderFns: []}

/***/ }),

/***/ 484:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.visible),
	      expression: "visible"
	    }],
	    staticClass: "el-tree",
	    class: {
	      'el-tree--highlight-current': _vm.highlightcurrent
	    },
	    attrs: {
	      "id": _vm.id
	    }
	  }, [_vm._l((_vm.tree.root.childNodes), function(child) {
	    return _c('el-tree-node', {
	      attrs: {
	        "node": child,
	        "props": _vm.props,
	        "valueprovider": _vm.valueprovider,
	        "dataprovider": _vm.dataprovider,
	        "rightfilter": _vm.rightfilter,
	        "render-content": _vm.rendercontent
	      }
	    })
	  }), _vm._v(" "), (!_vm.tree.root.childNodes || _vm.tree.root.childNodes.length === 0) ? _c('div', {
	    staticClass: "el-tree__empty-block"
	  }, [_c('span', {
	    staticClass: "el-tree__empty-text"
	  }, [_vm._v(_vm._s(_vm.t('el.tree.emptyText')))])]) : _vm._e()], 2)
	},staticRenderFns: []}

/***/ })

/******/ })
});
;