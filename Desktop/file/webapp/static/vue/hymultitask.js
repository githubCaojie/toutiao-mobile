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

	var _indexSingle = __webpack_require__(382);

	var _indexSingle2 = _interopRequireDefault(_indexSingle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var install = function install(Vue) {
	  if (install.installed) return;

	  Vue.component(_indexSingle2.default.name, _indexSingle2.default);
	};

	if (typeof window !== 'undefined' && window.Vue) {
	  install(window.Vue);
	};

	module.exports = {
	  version: '1.0.0-rc.5',
	  Multitask: _indexSingle2.default
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

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _vue = __webpack_require__(238);

	var _vue2 = _interopRequireDefault(_vue);

	var _en = __webpack_require__(383);

	var _en2 = _interopRequireDefault(_en);

	var _zhCN = __webpack_require__(272);

	var _zhCN2 = _interopRequireDefault(_zhCN);

	var _zhTW = __webpack_require__(384);

	var _zhTW2 = _interopRequireDefault(_zhTW);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ElMultitask = __webpack_require__(385);


	ElMultitask.install = function (Vue) {
	  Vue.component(ElMultitask.name, ElMultitask);
	};

	_vue2.default.config.lang = localStorage.locale;
	_vue2.default.locale('zh_CN', _zhCN2.default);
	_vue2.default.locale('en_US', _en2.default);
	_vue2.default.locale('zh_TW', _zhTW2.default);

	module.exports = ElMultitask;

/***/ }),

/***/ 383:
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  el: {
	    datepicker: {
	      now: 'Now',
	      today: 'Today',
	      cancel: 'Cancel',
	      clear: 'Clear',
	      confirm: 'OK',
	      selectDate: 'Select date',
	      selectTime: 'Select time',
	      startDate: 'Start Date',
	      startTime: 'Start Time',
	      endDate: 'End Date',
	      endTime: 'End Time',
	      year: '',
	      month1: 'Jan',
	      month2: 'Feb',
	      month3: 'Mar',
	      month4: 'Apr',
	      month5: 'May',
	      month6: 'Jun',
	      month7: 'Jul',
	      month8: 'Aug',
	      month9: 'Sep',
	      month10: 'Oct',
	      month11: 'Nov',
	      month12: 'Dec',

	      weeks: {
	        sun: 'Sun',
	        mon: 'Mon',
	        tue: 'Tue',
	        wed: 'Wed',
	        thu: 'Thu',
	        fri: 'Fri',
	        sat: 'Sat'
	      },
	      months: {
	        jan: 'Jan',
	        feb: 'Feb',
	        mar: 'Mar',
	        apr: 'Apr',
	        may: 'May',
	        jun: 'Jun',
	        jul: 'Jul',
	        aug: 'Aug',
	        sep: 'Sep',
	        oct: 'Oct',
	        nov: 'Nov',
	        dec: 'Dec'
	      }
	    },
	    select: {
	      loading: 'Loading',
	      noMatch: 'No matching data',
	      noData: 'No data',
	      placeholder: 'Select'
	    },
	    cascader: {
	      noMatch: 'No matching data',
	      placeholder: 'Select'
	    },
	    pagination: {
	      goto: 'Go to',
	      pagesize: '/page',
	      total: 'Total {total}',
	      pageClassifier: ''
	    },
	    messagebox: {
	      title: 'Message',
	      confirm: 'OK',
	      cancel: 'Cancel',
	      error: 'Illegal input'
	    },
	    upload: {
	      delete: 'Delete',
	      preview: 'Preview',
	      continue: 'Continue'
	    },
	    table: {
	      emptyText: 'No Data',
	      confirmFilter: 'Confirm',
	      resetFilter: 'Reset',
	      clearFilter: 'All',
	      total: 'Total {total}',
	      excel: "export excel",
	      allexcel: "all export excell",
	      pdf: "export pdf",
	      allpdf: "all export pdf",
	      tip: "tips",
	      number: "Number {Number} ",
	      personalization: "personalization",
	      permissionSettings: "permissionSettings",
	      titleSetting: "titleSetting",
	      pageTip: "The modified data in the current page has not been saved. Are you sure you want to turn the page?",
	      set: "Advanced settings",
	      sumText: 'sumText'
	    },
	    tree: {
	      emptyText: 'No Data'
	    },
	    multitask: {
	      firstpage: 'home page',
	      closeothers: 'close others',
	      closeall: 'close all',
	      max: 'max',
	      mix: 'mix',
	      help: 'view online help',
	      commonfunc: 'add custom functionality',
	      refresh: 'refresh'
	    },
	    validate: {
	      enter: "please enter ",
	      email: "legal email ",
	      mixValue: "The minimum value cannot be less than ",
	      maxValue: "Maximum cannot be greater than ",
	      mixLength: "The minimum length can not be less than ",
	      maxLength: "Maximum length cannot be greater than ",
	      enterValue: "Please enter value between ",
	      yu: "and",
	      between: "between"
	    },
	    lang: {
	      okBtnTxt: 'ok',
	      cancelBtnTxt: 'Cancel',
	      calendar: {
	        loadPrevMonth: 'LoadPrevMonth',
	        noMoreMonth: 'NoMoreMonth~',
	        start: 'Start',
	        end: 'End',
	        title: 'ChooseDate',
	        week: 'Sun,Mon,Tue,Wed,Thu,Fri,Sat',
	        monthTitle: '{year}/{month}'
	      },
	      menu: {
	        resetBtnTxt: 'Reset'
	      },
	      searchbar: {
	        placeText: 'Please enter the content...',
	        textInfo: 'Search'
	      },
	      shortpassword: {
	        tip1: 'Enter a digital password',
	        tip2: 'Forget password'
	      },
	      steps: {
	        step: 'Step',
	        stepDesc: 'Step description'
	      },
	      uploader: {
	        xmlError: 'Sorry, your browser does not support this component!',
	        typeError: 'This type of file is not supported',
	        limitError: 'File size exceeded the limit'
	      }
	    },
	    image: {
	      error: 'Load Fail'
	    },
	    colorpicker: {
	      clear: "Clear",
	      confirm: "Ok"
	    },
	    transfer: {
	      noMatch: 'No matching data',
	      noData: 'No data',
	      titles: ['List 1', 'List 2'],
	      filterPlaceholder: 'Enter keyword',
	      noCheckedFormat: '{total} items',
	      hasCheckedFormat: '{checked}/{total} checked' }
	  }
	};

/***/ }),

/***/ 384:
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  el: {
	    datepicker: {
	      now: '現在',
	      today: '今天',
	      cancel: '取消',
	      clear: '清空',
	      confirm: '確認',
	      selectDate: '選擇日期',
	      selectTime: '選擇時間',
	      startDate: '開始日期',
	      startTime: '開始時間',
	      endDate: '結束日期',
	      endTime: '結束時間',
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
	      loading: '加載中',
	      noMatch: '無匹配資料',
	      noData: '無資料',
	      placeholder: '請選擇'
	    },
	    cascader: {
	      noMatch: '無匹配資料',
	      placeholder: '請選擇'
	    },
	    pagination: {
	      goto: '前往',
	      pagesize: '項/頁',
	      total: '共 {total} 項',
	      pageClassifier: '頁'
	    },
	    messagebox: {
	      title: '提示',
	      confirm: '確定',
	      cancel: '取消',
	      error: '輸入的資料不符規定!'
	    },
	    upload: {
	      delete: '刪除',
	      preview: '查看圖片',
	      continue: '繼續上傳'
	    },
	    table: {
	      emptyText: '暫無數據',
	      confirmFilter: '篩選',
	      resetFilter: '重置',
	      clearFilter: '全部',
	      total: '共 {total} 項',
	      excel: "導出excel",
	      allexcel: "全部導出excel",
	      pdf: "導出pdf",
	      allpdf: "全部導出pdf",
	      tip: "提示",
	      number: "第 {Number} 行",
	      personalization: "個性化設置",
	      permissionSettings: "權限設置",
	      titleSetting: "標題設置",
	      pageTip: "當前頁中有修改的數據沒有保存，確定要翻頁嗎?",
	      set: "高級設置",
	      sumText: '合計'
	    },
	    tree: {
	      emptyText: '暫無資料'
	    },
	    multitask: {
	      firstpage: '首頁',
	      closeothers: '關閉其它',
	      closeall: '關閉所有',
	      max: '最大化',
	      mix: '最小化',
	      help: '查看聯機幫助',
	      commonfunc: '添加自定義功能',
	      refresh: '刷新'
	    },
	    validate: {
	      enter: "請輸入",
	      email: "合法的郵箱",
	      mixValue: "最小值不能小於",
	      maxValue: "最大值不能大於",
	      mixLength: "最小長度不能小於",
	      maxLength: "最大長度不能大於",
	      enterValue: "輸入值需要在",
	      yu: "與",
	      between: "之間"
	    },
	    lang: {
	      okBtnTxt: '確 定',
	      cancelBtnTxt: '取 消',
	      calendar: {
	        loadPrevMonth: '加載上一個月',
	        noMoreMonth: '沒有更早的月份~',
	        start: '開始',
	        end: '結束',
	        title: '選擇日期',
	        week: '日,一,二,三,四,五,六',
	        monthTitle: '{year}年{month}月'
	      },
	      menu: {
	        resetBtnTxt: '重置'
	      },
	      searchbar: {
	        placeText: '請輸入內容...',
	        textInfo: '搜索'
	      },
	      shortpassword: {
	        tip1: '輸入數字密碼',
	        tip2: '忘記密碼'
	      },
	      steps: {
	        step: '步驟',
	        stepDesc: '步驟描述'
	      },
	      uploader: {
	        xmlError: '對不起，您的瀏覽器不支持本組件！',
	        typeError: '不支持上傳該類型文件',
	        limitError: '文件大小超過限制'
	      }
	    },
	    image: {
	      error: '加載失敗'
	    },
	    colorpicker: {
	      clear: "清除",
	      confirm: "確定"
	    },
	    transfer: {
	      noMatch: '無匹配資料',
	      noData: '無資料',
	      titles: ['List 1', 'List 2'],
	      filterPlaceholder: 'Enter keyword',
	      noCheckedFormat: '{total} items',
	      hasCheckedFormat: '{checked}/{total} checked' }
	  }
	};

/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(386),
	  /* template */
	  __webpack_require__(395),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)

	module.exports = Component.exports


/***/ }),

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _multitaskBody = __webpack_require__(387);

	var _multitaskBody2 = _interopRequireDefault(_multitaskBody);

	var _multitaskTitle = __webpack_require__(390);

	var _multitaskTitle2 = _interopRequireDefault(_multitaskTitle);

	var _locale = __webpack_require__(270);

	var _locale2 = _interopRequireDefault(_locale);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(393);
	exports.default = {
	  name: 'hy-multitask',
	  mixins: [_locale2.default],
	  props: {
	    id: {
	      type: String,
	      default: "SYS_MAINPAGEPANEL"
	    },
	    type: {
	      type: String,
	      default: "card"
	    },
	    multitasktype: {
	      type: String,
	      default: "multitask_3"
	    },
	    titleposition: {
	      type: String,
	      default: "top"
	    },
	    maxtabnum: {
	      type: Number,
	      default: 4
	    },
	    taskDirectClosable: {
	      type: Boolean,
	      default: false
	    },
	    showMainPage: {
	      type: Boolean,
	      default: true
	    },
	    operatorName: {
	      type: String,
	      default: ""
	    },
	    deptName: {
	      type: String,
	      default: ""
	    },
	    mainpageurl: {
	      type: String,
	      default: ""
	    }
	  },
	  components: {
	    MultitaskBody: _multitaskBody2.default,
	    MultitaskTitle: _multitaskTitle2.default
	  },
	  mounted: function mounted() {
	    multiTaskInit(this.titleposition, 'haiyisoft3');
	  },
	  created: function created() {},
	  data: function data() {
	    return {
	      tabNumId: this.id + "-tab-num",
	      taskDirectClosableId: this.id + "-taskDirectClosable",
	      mainDivId: this.id + "_mainDiv",

	      maxNew: (typeof $$pageContextPath == 'undefined' ? $$ContextPath.frontContext + "static/" : $$pageContextPath) + "images/multitask/max_new.png",
	      minNew: (typeof $$pageContextPath == 'undefined' ? $$ContextPath.frontContext + "static/" : $$pageContextPath) + "images/multitask/min_new.png",
	      helpNew: (typeof $$pageContextPath == 'undefined' ? $$ContextPath.frontContext + "static/" : $$pageContextPath) + "images/multitask/help_new.png",
	      addNew: (typeof $$pageContextPath == 'undefined' ? $$ContextPath.frontContext + "static/" : $$pageContextPath) + "images/multitask/addmenu_new.png"
	    };
	  },

	  computed: {
	    multitaskTypeClass: function multitaskTypeClass() {
	      var classValue = [];
	      if (this.multitasktype != "") {
	        classValue.push(this.multitasktype);
	      }
	      return classValue;
	    }
	  },
	  methods: {}
	};

/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(388),
	  /* template */
	  __webpack_require__(389),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)

	module.exports = Component.exports


/***/ }),

/***/ 388:
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    maxnum: {
	      type: Number,
	      default: 4
	    },
	    showMainPage: {
	      type: Boolean,
	      default: true
	    },
	    id: {
	      type: String,
	      default: ""
	    },
	    mainpageurl: {
	      type: String,
	      default: ""
	    }
	  },
	  created: function created() {
	    for (var i = 0; i < this.maxnum; i++) {
	      var obj = {};
	      obj.bodyDiv = i + "_bodyDiv";
	      obj.bodyFrame = i + "_bodyFrame";
	      obj.tipDiv = "ccs" + i + "_tipDiv";
	      obj.contentDiv = "ccs" + i + "_contentDiv";
	      this.tabList.push(obj);
	    }
	    if (this.mainpageurl != "") {
	      this.mainPageSrc = this.mainpageurl;
	    }
	  },
	  data: function data() {
	    var urlPath = "";
	    if (typeof $$pageContextPath == 'undefined') {
	      urlPath = $$ContextPath.frontContext + "views/framework/mainpage.html";
	    } else {
	      urlPath = $$pageContextPath + "mainpage";
	    }
	    return {
	      tabList: [],
	      mainPageSrc: urlPath
	    };
	  },

	  computed: {},
	  methods: {}
	};

/***/ }),

/***/ 389:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('table', {
	    staticClass: "fill-layout-relative",
	    attrs: {
	      "cellspacing": "0",
	      "cellpadding": "0",
	      "border": "0",
	      "width": "100%",
	      "height": "100%"
	    }
	  }, [_c('tr', [_c('td', {
	    staticStyle: {
	      "height": "100%"
	    }
	  }, [_vm._l((_vm.tabList), function(item, index) {
	    return [(index === 0) ? [(_vm.showMainPage) ? [_c('div', {
	      staticClass: "tab-page-bodyDiv",
	      staticStyle: {
	        "width": "100%",
	        "height": "100%",
	        "overflow": "hidden"
	      },
	      attrs: {
	        "id": item.bodyDiv,
	        "multitask": "true"
	      }
	    }, [_c('iframe', {
	      staticStyle: {
	        "padding-top": "-2px",
	        "margin-top": "1px",
	        "background": "rgb(244,246,249)"
	      },
	      attrs: {
	        "id": item.bodyFrame,
	        "name": item.bodyFrame,
	        "src": _vm.mainPageSrc,
	        "scrolling": "auto",
	        "width": "100%",
	        "height": "100%",
	        "marginwidth": "0",
	        "marginheight": "1",
	        "border": "0",
	        "frameborder": "0"
	      }
	    })])] : _vm._e()] : [_c('div', {
	      staticClass: "tab-page-bodyDiv",
	      staticStyle: {
	        "box-sizing": "border-box",
	        "position": "absolute",
	        "top": "-9999px",
	        "width": "100%",
	        "height": "100%",
	        "overflow": "hidden"
	      },
	      attrs: {
	        "id": item.bodyDiv,
	        "multitask": "true"
	      }
	    })]]
	  })], 2)])])
	},staticRenderFns: []}

/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(391),
	  /* template */
	  __webpack_require__(392),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)

	module.exports = Component.exports


/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _locale = __webpack_require__(270);

	var _locale2 = _interopRequireDefault(_locale);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  mixins: [_locale2.default],
	  props: {
	    showMainPage: {
	      type: Boolean,
	      default: true
	    },
	    operatorName: {
	      type: String,
	      default: ""
	    },
	    deptName: {
	      type: String,
	      default: ""
	    }
	  },
	  created: function created() {},
	  data: function data() {
	    return {};
	  },

	  computed: {},
	  methods: {}
	};

/***/ }),

/***/ 392:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "multitask-center"
	  }, [_c('table', {
	    attrs: {
	      "id": "multitaskMenuTitleTable",
	      "width": "100%",
	      "height": "100%",
	      "border": "0",
	      "cellspacing": "0",
	      "cellpadding": "0"
	    }
	  }, [_c('tr', {
	    staticStyle: {
	      "vertical-align": "bottom"
	    },
	    attrs: {
	      "id": "multitaskMenuTitleTr",
	      "height": "100%"
	    }
	  }, [(_vm.showMainPage) ? [_c('td', {
	    staticStyle: {
	      "cursor": "pointer"
	    },
	    attrs: {
	      "valign": "top",
	      "align": "left",
	      "flag": "firstpage",
	      "width": "105px",
	      "id": "multitaskMenuTitleTd_0",
	      "onclick": "MultitaskPanelManager.showPage('SYS_MAINPAGEPANEL','0')"
	    }
	  }, [_c('span', {
	    staticClass: "multitask-item-separate",
	    staticStyle: {
	      "display": "block"
	    }
	  }, [_c('div', {
	    staticClass: "multitask-firtpage multitask-selected"
	  }, [_vm._v("\n                " + _vm._s(_vm.t('el.multitask.firstpage')) + "\n              ")])])])] : _vm._e(), _vm._v(" "), _vm._m(0)], 2)]), _vm._v(" "), _c('input', {
	    attrs: {
	      "type": "hidden",
	      "id": "operatorName"
	    },
	    domProps: {
	      "value": _vm.operatorName
	    }
	  }), _vm._v(" "), _c('input', {
	    attrs: {
	      "type": "hidden",
	      "id": "deptName"
	    },
	    domProps: {
	      "value": _vm.deptName
	    }
	  })])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('td', {
	    staticStyle: {
	      "vertical-align": "top"
	    },
	    attrs: {
	      "id": "multitaskMenuTitleLastTd"
	    }
	  }, [_c('div', {
	    staticClass: "empty_task"
	  }, [_vm._v(" ")])])
	}]}

/***/ }),

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(394);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js!../../node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"extract\":true,\"remove\":true}!../../node_modules/style-loader/index.js!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js?sourceMap!./multitask.less", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js!../../node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"extract\":true,\"remove\":true}!../../node_modules/style-loader/index.js!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js?sourceMap!./multitask.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ }),

/***/ 395:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      "height": "100%"
	    }
	  }, [_c('input', {
	    attrs: {
	      "type": "hidden",
	      "id": _vm.tabNumId
	    },
	    domProps: {
	      "value": _vm.maxtabnum
	    }
	  }), _vm._v(" "), _c('input', {
	    attrs: {
	      "type": "hidden",
	      "id": _vm.taskDirectClosableId
	    },
	    domProps: {
	      "value": _vm.taskDirectClosable
	    }
	  }), _vm._v(" "), (_vm.titleposition === 'top') ? [_c('div', {
	    staticClass: " fill-layout-relative fill-layout-div fill-layout-full",
	    class: _vm.multitaskTypeClass,
	    attrs: {
	      "id": _vm.mainDivId
	    }
	  }, [_c('div', {
	    staticClass: "multitask-banner"
	  }, [_c('multitask-title')], 1), _vm._v(" "), _c('div', {
	    staticClass: "multitask-top-content fill-layout-div"
	  }, [_c('div', {
	    staticClass: "multitask-center fill-layout-div"
	  }, [_c('multitask-body', {
	    attrs: {
	      "maxnum": _vm.maxtabnum,
	      "mainpageurl": _vm.mainpageurl
	    }
	  })], 1)])])] : void 0, _vm._v(" "), _c('div', {
	    staticClass: "contextmenuDiv",
	    staticStyle: {
	      "display": "none",
	      "position": "absolute",
	      "border": "0px",
	      "z-index": "999",
	      "height": "110px",
	      "background-color": "#ffffff",
	      "width": "130px"
	    },
	    attrs: {
	      "id": "SYS_MAINPAGEPANEL-oncontextmenu",
	      "onmouseover": "clearsetTime()",
	      "onmouseout": "closeThiscontextMenu(event,this)"
	    }
	  }, [_c('table', {
	    staticClass: "contextmenuDiv",
	    attrs: {
	      "width": "100%",
	      "height": "100%",
	      "cellspacing": "0",
	      "cellpadding": "0",
	      "border": "0"
	    }
	  }, [_c('tr', {
	    attrs: {
	      "width": "100%",
	      "height": "25px",
	      "bgcolor": "#f5f6f7",
	      "onmouseover": "MultitaskContentMenu.multitaskmaxbuttonmouseover(this,'max')",
	      "onmouseout": "MultitaskContentMenu.multitaskmaxbuttonmouseout(this,'max')",
	      "onclick": "MultitaskContentMenu.closeOtherPage()"
	    }
	  }, [_c('td', {
	    attrs: {
	      "width": "30",
	      "height": "25",
	      "align": "center"
	    }
	  }), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.t('el.multitask.closeothers')))])]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('tr', {
	    attrs: {
	      "width": "100%",
	      "height": "25px",
	      "bgcolor": "#f5f6f7",
	      "onmouseover": "MultitaskContentMenu.multitaskmaxbuttonmouseover(this,'max')",
	      "onmouseout": "MultitaskContentMenu.multitaskmaxbuttonmouseout(this,'max')",
	      "onclick": "MultitaskContentMenu.closeAllPage()"
	    }
	  }, [_c('td', {
	    attrs: {
	      "width": "30",
	      "height": "25",
	      "align": "center"
	    }
	  }), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.t('el.multitask.closeall')))])]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('tr', {
	    attrs: {
	      "width": "100%",
	      "height": "25px",
	      "bgcolor": "#f5f6f7",
	      "onmouseover": "MultitaskContentMenu.multitaskmaxbuttonmouseover(this,'max')",
	      "onmouseout": "MultitaskContentMenu.multitaskmaxbuttonmouseout(this,'max')",
	      "onclick": "MultitaskContentMenu.maxMenuPage('SYS_MAINPAGEPANEL')"
	    }
	  }, [_c('td', {
	    attrs: {
	      "width": "30",
	      "height": "25",
	      "align": "center"
	    }
	  }, [_c('img', {
	    staticStyle: {
	      "width": "15px",
	      "height": "15px",
	      "vertical-align": "sub"
	    },
	    attrs: {
	      "id": "SYS_MAINPAGEPANEL-maxContMenu",
	      "src": _vm.maxNew
	    }
	  })]), _vm._v(" "), _c('td', [_vm._v("\t" + _vm._s(_vm.t('el.multitask.max')))])]), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('tr', {
	    attrs: {
	      "width": "100%",
	      "height": "25px",
	      "bgcolor": "#f5f6f7",
	      "onmouseover": "MultitaskContentMenu.multitaskmaxbuttonmouseover(this,'min')",
	      "onmouseout": "MultitaskContentMenu.multitaskmaxbuttonmouseout(this,'min')",
	      "onclick": "MultitaskContentMenu.minMenuPage('SYS_MAINPAGEPANEL')"
	    }
	  }, [_c('td', {
	    attrs: {
	      "width": "30",
	      "height": "25",
	      "align": "center"
	    }
	  }, [_c('img', {
	    staticStyle: {
	      "width": "15px",
	      "height": "15px",
	      "vertical-align": "sub"
	    },
	    attrs: {
	      "id": "SYS_MAINPAGEPANEL-minContMenu",
	      "src": _vm.minNew
	    }
	  })]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.t('el.multitask.mix')))])]), _vm._v(" "), _vm._m(3), _vm._v(" "), _c('tr', {
	    attrs: {
	      "width": "100%",
	      "height": "25px",
	      "bgcolor": "#f5f6f7",
	      "onmouseover": "MultitaskContentMenu.multitaskmaxbuttonmouseover(this,'help')",
	      "onmouseout": "MultitaskContentMenu.multitaskmaxbuttonmouseout(this,'help')",
	      "onclick": "openHelpPage()"
	    }
	  }, [_c('td', {
	    attrs: {
	      "width": "30",
	      "height": "25",
	      "align": "center"
	    }
	  }, [_c('img', {
	    staticStyle: {
	      "width": "15px",
	      "height": "15px",
	      "vertical-align": "sub"
	    },
	    attrs: {
	      "id": "SYS_MAINPAGEPANEL-addContMenu",
	      "src": _vm.helpNew
	    }
	  })]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.t('el.multitask.help')))])]), _vm._v(" "), _vm._m(4), _vm._v(" "), _c('tr', {
	    attrs: {
	      "width": "100%",
	      "height": "25px",
	      "bgcolor": "#f5f6f7",
	      "onmouseover": "MultitaskContentMenu.multitaskmaxbuttonmouseover(this,'addCont')",
	      "onmouseout": "MultitaskContentMenu.multitaskmaxbuttonmouseout(this,'addCont')",
	      "onclick": "MultitaskContentMenu.addShotcutMenu('SYS_MAINPAGEPANEL')"
	    }
	  }, [_c('td', {
	    attrs: {
	      "width": "30",
	      "height": "25",
	      "align": "center"
	    }
	  }, [_c('img', {
	    staticStyle: {
	      "width": "15px",
	      "height": "15px",
	      "vertical-align": "sub"
	    },
	    attrs: {
	      "id": "SYS_MAINPAGEPANEL-helpContMenu",
	      "src": _vm.addNew
	    }
	  })]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.t('el.multitask.commonfunc')))])])])]), _vm._v(" "), _c('iframe', {
	    staticStyle: {
	      "position": "absolute",
	      "display": "none",
	      "border": "0px",
	      "z-index": "998",
	      "height": "82px",
	      "background": "rgb(244,246,249)",
	      "width": "94"
	    },
	    attrs: {
	      "id": "SYS_MAINPAGEPANEL-oncontextmenu-iframe"
	    }
	  }), _vm._v(" "), _c('input', {
	    attrs: {
	      "type": "hidden",
	      "id": "SYS_MAINPAGEPANEL-menuNum",
	      "value": ""
	    }
	  })], 2)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('tr', {
	    attrs: {
	      "height": "2"
	    }
	  }, [_c('td', {
	    attrs: {
	      "width": "30",
	      "height": "2",
	      "bgcolor": "#e8ecf0"
	    }
	  }), _vm._v(" "), _c('td', {
	    attrs: {
	      "colspan": "2",
	      "height": "2",
	      "bgcolor": "#e8ecf0"
	    }
	  })])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('tr', {
	    attrs: {
	      "height": "2"
	    }
	  }, [_c('td', {
	    attrs: {
	      "width": "30",
	      "height": "2",
	      "bgcolor": "#e8ecf0"
	    }
	  }), _vm._v(" "), _c('td', {
	    attrs: {
	      "colspan": "2",
	      "height": "2",
	      "bgcolor": "#e8ecf0"
	    }
	  })])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('tr', {
	    attrs: {
	      "height": "2"
	    }
	  }, [_c('td', {
	    attrs: {
	      "width": "30",
	      "height": "2",
	      "bgcolor": "#e8ecf0"
	    }
	  }), _vm._v(" "), _c('td', {
	    attrs: {
	      "colspan": "2",
	      "height": "2",
	      "bgcolor": "#e8ecf0"
	    }
	  })])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('tr', {
	    attrs: {
	      "height": "2"
	    }
	  }, [_c('td', {
	    attrs: {
	      "width": "30",
	      "height": "2",
	      "bgcolor": "#e8ecf0"
	    }
	  }), _vm._v(" "), _c('td', {
	    attrs: {
	      "colspan": "2",
	      "height": "2",
	      "bgcolor": "#e8ecf0"
	    }
	  })])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('tr', {
	    attrs: {
	      "height": "2"
	    }
	  }, [_c('td', {
	    attrs: {
	      "width": "30",
	      "height": "2",
	      "bgcolor": "#e8ecf0"
	    }
	  }), _vm._v(" "), _c('td', {
	    attrs: {
	      "colspan": "2",
	      "height": "2",
	      "bgcolor": "#e8ecf0"
	    }
	  })])
	}]}

/***/ })

/******/ })
});
;