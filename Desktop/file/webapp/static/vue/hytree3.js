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

	var _index = __webpack_require__(485);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var install = function install(Vue) {
	  if (install.installed) return;
	  Vue.component('hy-tree3', _index2.default);
	};

	if (typeof window !== 'undefined' && window.Vue) {
	  install(window.Vue);
	};

	module.exports = {
	  version: '1.0.0-rc.5',
	  HyTree3: _index2.default
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

/***/ 485:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _tree = __webpack_require__(486);

	var _tree2 = _interopRequireDefault(_tree);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_tree2.default.install = function (Vue) {
	  Vue.component(_tree2.default.name, _tree2.default);
	};

	exports.default = _tree2.default;

/***/ }),

/***/ 486:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(487),
	  /* template */
	  __webpack_require__(498),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)

	module.exports = Component.exports


/***/ }),

/***/ 487:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _treeStore = __webpack_require__(488);

	var _treeStore2 = _interopRequireDefault(_treeStore);

	var _util = __webpack_require__(490);

	var _treeNode = __webpack_require__(491);

	var _treeNode2 = _interopRequireDefault(_treeNode);

	var _locale = __webpack_require__(270);

	var _locale2 = _interopRequireDefault(_locale);

	var _emitter = __webpack_require__(239);

	var _emitter2 = _interopRequireDefault(_emitter);

	var _class = __webpack_require__(269);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(496);
	exports.default = {
	  name: 'hy-tree3',
	  mixins: [_locale2.default, _emitter2.default],
	  components: {
	    ElTreeNode: _treeNode2.default
	  },
	  data: function data() {
	    return {
	      store: null,
	      root: null,
	      currentNode: null,
	      treeItems: null,
	      checkboxItems: [],
	      dragState: {
	        showDropIndicator: false,
	        draggingNode: null,
	        dropNode: null,
	        allowDrop: true
	      }
	    };
	  },

	  props: {
	    data: {
	      type: Array
	    },
	    emptyText: {
	      type: String,
	      default: function _default() {
	        return "";
	      }
	    },
	    renderAfterExpand: {
	      type: Boolean,
	      default: true
	    },
	    nodeKey: String,
	    checkStrictly: Boolean,
	    defaultExpandAll: Boolean,
	    expandOnClickNode: {
	      type: Boolean,
	      default: true
	    },
	    checkOnClickNode: Boolean,
	    checkDescendants: {
	      type: Boolean,
	      default: false
	    },
	    autoExpandParent: {
	      type: Boolean,
	      default: true
	    },
	    defaultCheckedKeys: Array,
	    defaultExpandedKeys: Array,
	    currentNodeKey: [String, Number],
	    renderContent: Function,
	    showCheckbox: {
	      type: Boolean,
	      default: false
	    },
	    draggable: {
	      type: Boolean,
	      default: false
	    },
	    allowDrag: Function,
	    allowDrop: Function,
	    props: {
	      default: function _default() {
	        return {
	          children: 'children',
	          label: 'label',
	          disabled: 'disabled'
	        };
	      }
	    },
	    lazy: {
	      type: Boolean,
	      default: false
	    },
	    highlightCurrent: Boolean,
	    load: Function,
	    filterNodeMethod: Function,
	    accordion: Boolean,
	    indent: {
	      type: Number,
	      default: 18
	    },
	    iconClass: String
	  },
	  computed: {
	    children: {
	      set: function set(value) {
	        this.data = value;
	      },
	      get: function get() {
	        return this.data;
	      }
	    },
	    treeItemArray: function treeItemArray() {
	      return Array.prototype.slice.call(this.treeItems);
	    },
	    isEmpty: function isEmpty() {
	      var childNodes = this.root.childNodes;

	      return !childNodes || childNodes.length === 0 || childNodes.every(function (_ref) {
	        var visible = _ref.visible;
	        return !visible;
	      });
	    }
	  },
	  watch: {
	    defaultCheckedKeys: function defaultCheckedKeys(newVal) {
	      this.store.setDefaultCheckedKey(newVal);
	    },
	    defaultExpandedKeys: function defaultExpandedKeys(newVal) {
	      this.store.defaultExpandedKeys = newVal;
	      this.store.setDefaultExpandedKeys(newVal);
	    },
	    data: function data(newVal) {
	      this.store.setData(newVal);
	    },
	    checkboxItems: function checkboxItems(val) {
	      Array.prototype.forEach.call(val, function (checkbox) {
	        checkbox.setAttribute('tabindex', -1);
	      });
	    },
	    checkStrictly: function checkStrictly(newVal) {
	      this.store.checkStrictly = newVal;
	    }
	  },
	  methods: {
	    filter: function filter(value) {
	      if (!this.filterNodeMethod) throw new Error('[Tree] filterNodeMethod is required when filter');
	      this.store.filter(value);
	    },
	    getNodeKey: function getNodeKey(node) {
	      return (0, _util.getNodeKey)(this.nodeKey, node.data);
	    },
	    getNodePath: function getNodePath(data) {
	      if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in getNodePath');
	      var node = this.store.getNode(data);
	      if (!node) return [];
	      var path = [node.data];
	      var parent = node.parent;
	      while (parent && parent !== this.root) {
	        path.push(parent.data);
	        parent = parent.parent;
	      }
	      return path.reverse();
	    },
	    getCheckedNodes: function getCheckedNodes(leafOnly, includeHalfChecked) {
	      return this.store.getCheckedNodes(leafOnly, includeHalfChecked);
	    },
	    getCheckedKeys: function getCheckedKeys(leafOnly) {
	      return this.store.getCheckedKeys(leafOnly);
	    },
	    getCurrentNode: function getCurrentNode() {
	      var currentNode = this.store.getCurrentNode();
	      return currentNode ? currentNode.data : null;
	    },
	    getCurrentKey: function getCurrentKey() {
	      if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in getCurrentKey');
	      var currentNode = this.getCurrentNode();
	      return currentNode ? currentNode[this.nodeKey] : null;
	    },
	    setCheckedNodes: function setCheckedNodes(nodes, leafOnly) {
	      if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in setCheckedNodes');
	      this.store.setCheckedNodes(nodes, leafOnly);
	    },
	    setCheckedKeys: function setCheckedKeys(keys, leafOnly) {
	      if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in setCheckedKeys');
	      this.store.setCheckedKeys(keys, leafOnly);
	    },
	    setChecked: function setChecked(data, checked, deep) {
	      this.store.setChecked(data, checked, deep);
	    },
	    getHalfCheckedNodes: function getHalfCheckedNodes() {
	      return this.store.getHalfCheckedNodes();
	    },
	    getHalfCheckedKeys: function getHalfCheckedKeys() {
	      return this.store.getHalfCheckedKeys();
	    },
	    setCurrentNode: function setCurrentNode(node) {
	      if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in setCurrentNode');
	      this.store.setUserCurrentNode(node);
	    },
	    setCurrentKey: function setCurrentKey(key) {
	      if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in setCurrentKey');
	      this.store.setCurrentNodeKey(key);
	    },
	    getNode: function getNode(data) {
	      return this.store.getNode(data);
	    },
	    remove: function remove(data) {
	      this.store.remove(data);
	    },
	    append: function append(data, parentNode) {
	      this.store.append(data, parentNode);
	    },
	    insertBefore: function insertBefore(data, refNode) {
	      this.store.insertBefore(data, refNode);
	    },
	    insertAfter: function insertAfter(data, refNode) {
	      this.store.insertAfter(data, refNode);
	    },
	    handleNodeExpand: function handleNodeExpand(nodeData, node, instance) {
	      this.broadcast('ElTreeNode', 'tree-node-expand', node);
	      this.$emit('node-expand', nodeData, node, instance);
	    },
	    updateKeyChildren: function updateKeyChildren(key, data) {
	      if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in updateKeyChild');
	      this.store.updateChildren(key, data);
	    },
	    initTabIndex: function initTabIndex() {
	      this.treeItems = this.$el.querySelectorAll('.is-focusable[role=treeitem]');
	      this.checkboxItems = this.$el.querySelectorAll('input[type=checkbox]');
	      var checkedItem = this.$el.querySelectorAll('.is-checked[role=treeitem]');
	      if (checkedItem.length) {
	        checkedItem[0].setAttribute('tabindex', 0);
	        return;
	      }
	      this.treeItems[0] && this.treeItems[0].setAttribute('tabindex', 0);
	    },
	    handleKeydown: function handleKeydown(ev) {
	      var currentItem = ev.target;
	      if (currentItem.className.indexOf('el-tree-node') === -1) return;
	      var keyCode = ev.keyCode;
	      this.treeItems = this.$el.querySelectorAll('.is-focusable[role=treeitem]');
	      var currentIndex = this.treeItemArray.indexOf(currentItem);
	      var nextIndex = void 0;
	      if ([38, 40].indexOf(keyCode) > -1) {
	        ev.preventDefault();
	        if (keyCode === 38) {
	          nextIndex = currentIndex !== 0 ? currentIndex - 1 : 0;
	        } else {
	          nextIndex = currentIndex < this.treeItemArray.length - 1 ? currentIndex + 1 : 0;
	        }
	        this.treeItemArray[nextIndex].focus();
	      }
	      if ([37, 39].indexOf(keyCode) > -1) {
	        ev.preventDefault();
	        currentItem.click();
	      }
	      var hasInput = currentItem.querySelector('[type="checkbox"]');
	      if ([13, 32].indexOf(keyCode) > -1 && hasInput) {
	        ev.preventDefault();
	        hasInput.click();
	      }
	    }
	  },
	  created: function created() {
	    var _this = this;

	    this.isTree = true;
	    this.store = new _treeStore2.default({
	      key: this.nodeKey,
	      data: this.data,
	      lazy: this.lazy,
	      props: this.props,
	      load: this.load,
	      currentNodeKey: this.currentNodeKey,
	      checkStrictly: this.checkStrictly,
	      checkDescendants: this.checkDescendants,
	      defaultCheckedKeys: this.defaultCheckedKeys,
	      defaultExpandedKeys: this.defaultExpandedKeys,
	      autoExpandParent: this.autoExpandParent,
	      defaultExpandAll: this.defaultExpandAll,
	      filterNodeMethod: this.filterNodeMethod
	    });
	    this.root = this.store.root;
	    var dragState = this.dragState;
	    this.$on('tree-node-drag-start', function (event, treeNode) {
	      if (typeof _this.allowDrag === 'function' && !_this.allowDrag(treeNode.node)) {
	        event.preventDefault();
	        return false;
	      }
	      event.dataTransfer.effectAllowed = 'move';

	      try {
	        event.dataTransfer.setData('text/plain', '');
	      } catch (e) {}
	      dragState.draggingNode = treeNode;
	      _this.$emit('node-drag-start', treeNode.node, event);
	    });
	    this.$on('tree-node-drag-over', function (event, treeNode) {
	      var dropNode = (0, _util.findNearestComponent)(event.target, 'ElTreeNode');
	      var oldDropNode = dragState.dropNode;
	      if (oldDropNode && oldDropNode !== dropNode) {
	        (0, _class.removeClass)(oldDropNode.$el, 'is-drop-inner');
	      }
	      var draggingNode = dragState.draggingNode;
	      if (!draggingNode || !dropNode) return;
	      var dropPrev = true;
	      var dropInner = true;
	      var dropNext = true;
	      var userAllowDropInner = true;
	      if (typeof _this.allowDrop === 'function') {
	        dropPrev = _this.allowDrop(draggingNode.node, dropNode.node, 'prev');
	        userAllowDropInner = dropInner = _this.allowDrop(draggingNode.node, dropNode.node, 'inner');
	        dropNext = _this.allowDrop(draggingNode.node, dropNode.node, 'next');
	      }
	      event.dataTransfer.dropEffect = dropInner ? 'move' : 'none';
	      if ((dropPrev || dropInner || dropNext) && oldDropNode !== dropNode) {
	        if (oldDropNode) {
	          _this.$emit('node-drag-leave', draggingNode.node, oldDropNode.node, event);
	        }
	        _this.$emit('node-drag-enter', draggingNode.node, dropNode.node, event);
	      }
	      if (dropPrev || dropInner || dropNext) {
	        dragState.dropNode = dropNode;
	      }
	      if (dropNode.node.nextSibling === draggingNode.node) {
	        dropNext = false;
	      }
	      if (dropNode.node.previousSibling === draggingNode.node) {
	        dropPrev = false;
	      }
	      if (dropNode.node.contains(draggingNode.node, false)) {
	        dropInner = false;
	      }
	      if (draggingNode.node === dropNode.node || draggingNode.node.contains(dropNode.node)) {
	        dropPrev = false;
	        dropInner = false;
	        dropNext = false;
	      }
	      var targetPosition = dropNode.$el.getBoundingClientRect();
	      var treePosition = _this.$el.getBoundingClientRect();
	      var dropType = void 0;
	      var prevPercent = dropPrev ? dropInner ? 0.25 : dropNext ? 0.45 : 1 : -1;
	      var nextPercent = dropNext ? dropInner ? 0.75 : dropPrev ? 0.55 : 0 : 1;
	      var indicatorTop = -9999;
	      var distance = event.clientY - targetPosition.top;
	      if (distance < targetPosition.height * prevPercent) {
	        dropType = 'before';
	      } else if (distance > targetPosition.height * nextPercent) {
	        dropType = 'after';
	      } else if (dropInner) {
	        dropType = 'inner';
	      } else {
	        dropType = 'none';
	      }
	      var iconPosition = dropNode.$el.querySelector('.el-tree3-node__expand-icon').getBoundingClientRect();
	      var dropIndicator = _this.$refs.dropIndicator;
	      if (dropType === 'before') {
	        indicatorTop = iconPosition.top - treePosition.top;
	      } else if (dropType === 'after') {
	        indicatorTop = iconPosition.bottom - treePosition.top;
	      }
	      dropIndicator.style.top = indicatorTop + 'px';
	      dropIndicator.style.left = iconPosition.right - treePosition.left + 'px';
	      if (dropType === 'inner') {
	        (0, _class.addClass)(dropNode.$el, 'is-drop-inner');
	      } else {
	        (0, _class.removeClass)(dropNode.$el, 'is-drop-inner');
	      }
	      dragState.showDropIndicator = dropType === 'before' || dropType === 'after';
	      dragState.allowDrop = dragState.showDropIndicator || userAllowDropInner;
	      dragState.dropType = dropType;
	      _this.$emit('node-drag-over', draggingNode.node, dropNode.node, event);
	    });
	    this.$on('tree-node-drag-end', function (event) {
	      var draggingNode = dragState.draggingNode,
	          dropType = dragState.dropType,
	          dropNode = dragState.dropNode;

	      event.preventDefault();
	      event.dataTransfer.dropEffect = 'move';
	      if (draggingNode && dropNode) {
	        var draggingNodeCopy = { data: draggingNode.node.data };
	        if (dropType !== 'none') {
	          draggingNode.node.remove();
	        }
	        if (dropType === 'before') {
	          dropNode.node.parent.insertBefore(draggingNodeCopy, dropNode.node);
	        } else if (dropType === 'after') {
	          dropNode.node.parent.insertAfter(draggingNodeCopy, dropNode.node);
	        } else if (dropType === 'inner') {
	          dropNode.node.insertChild(draggingNodeCopy);
	        }
	        if (dropType !== 'none') {
	          _this.store.registerNode(draggingNodeCopy);
	        }
	        (0, _class.removeClass)(dropNode.$el, 'is-drop-inner');
	        _this.$emit('node-drag-end', draggingNode.node, dropNode.node, dropType, event);
	        if (dropType !== 'none') {
	          _this.$emit('node-drop', draggingNode.node, dropNode.node, dropType, event);
	        }
	      }
	      if (draggingNode && !dropNode) {
	        _this.$emit('node-drag-end', draggingNode.node, null, dropType, event);
	      }
	      dragState.showDropIndicator = false;
	      dragState.draggingNode = null;
	      dragState.dropNode = null;
	      dragState.allowDrop = true;
	    });
	  },
	  mounted: function mounted() {
	    this.initTabIndex();
	    this.$el.addEventListener('keydown', this.handleKeydown);
	  },
	  updated: function updated() {
	    this.treeItems = this.$el.querySelectorAll('[role=treeitem]');
	    this.checkboxItems = this.$el.querySelectorAll('input[type=checkbox]');
	  }
	};

/***/ }),

/***/ 488:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _node = __webpack_require__(489);

	var _node2 = _interopRequireDefault(_node);

	var _util = __webpack_require__(490);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var TreeStore = function () {
	  function TreeStore(options) {
	    var _this = this;

	    _classCallCheck(this, TreeStore);

	    this.currentNode = null;
	    this.currentNodeKey = null;

	    for (var option in options) {
	      if (options.hasOwnProperty(option)) {
	        this[option] = options[option];
	      }
	    }

	    this.nodesMap = {};

	    this.root = new _node2.default({
	      data: this.data,
	      store: this
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

	  _createClass(TreeStore, [{
	    key: 'filter',
	    value: function filter(value) {
	      var filterNodeMethod = this.filterNodeMethod;
	      var lazy = this.lazy;
	      var traverse = function traverse(node) {
	        var childNodes = node.root ? node.root.childNodes : node.childNodes;

	        childNodes.forEach(function (child) {
	          child.visible = filterNodeMethod.call(child, value, child.data, child);

	          traverse(child);
	        });

	        if (!node.visible && childNodes.length) {
	          var allHidden = true;
	          allHidden = !childNodes.some(function (child) {
	            return child.visible;
	          });

	          if (node.root) {
	            node.root.visible = allHidden === false;
	          } else {
	            node.visible = allHidden === false;
	          }
	        }
	        if (!value) return;

	        if (node.visible && !node.isLeaf && !lazy) node.expand();
	      };

	      traverse(this);
	    }
	  }, {
	    key: 'setData',
	    value: function setData(newVal) {
	      var instanceChanged = newVal !== this.root.data;
	      if (instanceChanged) {
	        this.root.setData(newVal);
	        this._initDefaultCheckedNodes();
	      } else {
	        this.root.updateChildren();
	      }
	    }
	  }, {
	    key: 'getNode',
	    value: function getNode(data) {
	      if (data instanceof _node2.default) return data;
	      var key = (typeof data === 'undefined' ? 'undefined' : _typeof(data)) !== 'object' ? data : (0, _util.getNodeKey)(this.key, data);
	      return this.nodesMap[key] || null;
	    }
	  }, {
	    key: 'insertBefore',
	    value: function insertBefore(data, refData) {
	      var refNode = this.getNode(refData);
	      refNode.parent.insertBefore({ data: data }, refNode);
	    }
	  }, {
	    key: 'insertAfter',
	    value: function insertAfter(data, refData) {
	      var refNode = this.getNode(refData);
	      refNode.parent.insertAfter({ data: data }, refNode);
	    }
	  }, {
	    key: 'remove',
	    value: function remove(data) {
	      var node = this.getNode(data);

	      if (node && node.parent) {
	        if (node === this.currentNode) {
	          this.currentNode = null;
	        }
	        node.parent.removeChild(node);
	      }
	    }
	  }, {
	    key: 'append',
	    value: function append(data, parentData) {
	      var parentNode = parentData ? this.getNode(parentData) : this.root;

	      if (parentNode) {
	        parentNode.insertChild({ data: data });
	      }
	    }
	  }, {
	    key: '_initDefaultCheckedNodes',
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
	    key: '_initDefaultCheckedNode',
	    value: function _initDefaultCheckedNode(node) {
	      var defaultCheckedKeys = this.defaultCheckedKeys || [];

	      if (defaultCheckedKeys.indexOf(node.key) !== -1) {
	        node.setChecked(true, !this.checkStrictly);
	      }
	    }
	  }, {
	    key: 'setDefaultCheckedKey',
	    value: function setDefaultCheckedKey(newVal) {
	      if (newVal !== this.defaultCheckedKeys) {
	        this.defaultCheckedKeys = newVal;
	        this._initDefaultCheckedNodes();
	      }
	    }
	  }, {
	    key: 'registerNode',
	    value: function registerNode(node) {
	      var key = this.key;
	      if (!key || !node || !node.data) return;

	      var nodeKey = node.key;
	      if (nodeKey !== undefined) this.nodesMap[node.key] = node;
	    }
	  }, {
	    key: 'deregisterNode',
	    value: function deregisterNode(node) {
	      var _this3 = this;

	      var key = this.key;
	      if (!key || !node || !node.data) return;

	      node.childNodes.forEach(function (child) {
	        _this3.deregisterNode(child);
	      });

	      delete this.nodesMap[node.key];
	    }
	  }, {
	    key: 'getCheckedNodes',
	    value: function getCheckedNodes() {
	      var leafOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	      var includeHalfChecked = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	      var checkedNodes = [];
	      var traverse = function traverse(node) {
	        var childNodes = node.root ? node.root.childNodes : node.childNodes;

	        childNodes.forEach(function (child) {
	          if ((child.checked || includeHalfChecked && child.indeterminate) && (!leafOnly || leafOnly && child.isLeaf)) {
	            checkedNodes.push(child.data);
	          }

	          traverse(child);
	        });
	      };

	      traverse(this);

	      return checkedNodes;
	    }
	  }, {
	    key: 'getCheckedKeys',
	    value: function getCheckedKeys() {
	      var _this4 = this;

	      var leafOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	      return this.getCheckedNodes(leafOnly).map(function (data) {
	        return (data || {})[_this4.key];
	      });
	    }
	  }, {
	    key: 'getHalfCheckedNodes',
	    value: function getHalfCheckedNodes() {
	      var nodes = [];
	      var traverse = function traverse(node) {
	        var childNodes = node.root ? node.root.childNodes : node.childNodes;

	        childNodes.forEach(function (child) {
	          if (child.indeterminate) {
	            nodes.push(child.data);
	          }

	          traverse(child);
	        });
	      };

	      traverse(this);

	      return nodes;
	    }
	  }, {
	    key: 'getHalfCheckedKeys',
	    value: function getHalfCheckedKeys() {
	      var _this5 = this;

	      return this.getHalfCheckedNodes().map(function (data) {
	        return (data || {})[_this5.key];
	      });
	    }
	  }, {
	    key: '_getAllNodes',
	    value: function _getAllNodes() {
	      var allNodes = [];
	      var nodesMap = this.nodesMap;
	      for (var nodeKey in nodesMap) {
	        if (nodesMap.hasOwnProperty(nodeKey)) {
	          allNodes.push(nodesMap[nodeKey]);
	        }
	      }

	      return allNodes;
	    }
	  }, {
	    key: 'updateChildren',
	    value: function updateChildren(key, data) {
	      var node = this.nodesMap[key];
	      if (!node) return;
	      var childNodes = node.childNodes;
	      for (var i = childNodes.length - 1; i >= 0; i--) {
	        var child = childNodes[i];
	        this.remove(child.data);
	      }
	      for (var _i = 0, j = data.length; _i < j; _i++) {
	        var _child = data[_i];
	        this.append(_child, node.data);
	      }
	    }
	  }, {
	    key: '_setCheckedKeys',
	    value: function _setCheckedKeys(key) {
	      var leafOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	      var checkedKeys = arguments[2];

	      var allNodes = this._getAllNodes().sort(function (a, b) {
	        return b.level - a.level;
	      });
	      var cache = Object.create(null);
	      var keys = Object.keys(checkedKeys);
	      allNodes.forEach(function (node) {
	        return node.setChecked(false, false);
	      });
	      for (var i = 0, j = allNodes.length; i < j; i++) {
	        var node = allNodes[i];
	        var nodeKey = node.data[key].toString();
	        var checked = keys.indexOf(nodeKey) > -1;
	        if (!checked) {
	          if (node.checked && !cache[nodeKey]) {
	            node.setChecked(false, false);
	          }
	          continue;
	        }

	        var parent = node.parent;
	        while (parent && parent.level > 0) {
	          cache[parent.data[key]] = true;
	          parent = parent.parent;
	        }

	        if (node.isLeaf || this.checkStrictly) {
	          node.setChecked(true, false);
	          continue;
	        }
	        node.setChecked(true, true);

	        if (leafOnly) {
	          (function () {
	            node.setChecked(false, false);
	            var traverse = function traverse(node) {
	              var childNodes = node.childNodes;
	              childNodes.forEach(function (child) {
	                if (!child.isLeaf) {
	                  child.setChecked(false, false);
	                }
	                traverse(child);
	              });
	            };
	            traverse(node);
	          })();
	        }
	      }
	    }
	  }, {
	    key: 'setCheckedNodes',
	    value: function setCheckedNodes(array) {
	      var leafOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	      var key = this.key;
	      var checkedKeys = {};
	      array.forEach(function (item) {
	        checkedKeys[(item || {})[key]] = true;
	      });

	      this._setCheckedKeys(key, leafOnly, checkedKeys);
	    }
	  }, {
	    key: 'setCheckedKeys',
	    value: function setCheckedKeys(keys) {
	      var leafOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	      this.defaultCheckedKeys = keys;
	      var key = this.key;
	      var checkedKeys = {};
	      keys.forEach(function (key) {
	        checkedKeys[key] = true;
	      });

	      this._setCheckedKeys(key, leafOnly, checkedKeys);
	    }
	  }, {
	    key: 'setDefaultExpandedKeys',
	    value: function setDefaultExpandedKeys(keys) {
	      var _this6 = this;

	      keys = keys || [];
	      this.defaultExpandedKeys = keys;

	      keys.forEach(function (key) {
	        var node = _this6.getNode(key);
	        if (node) node.expand(null, _this6.autoExpandParent);
	      });
	    }
	  }, {
	    key: 'setChecked',
	    value: function setChecked(data, checked, deep) {
	      var node = this.getNode(data);

	      if (node) {
	        node.setChecked(!!checked, deep);
	      }
	    }
	  }, {
	    key: 'getCurrentNode',
	    value: function getCurrentNode() {
	      return this.currentNode;
	    }
	  }, {
	    key: 'setCurrentNode',
	    value: function setCurrentNode(currentNode) {
	      var prevCurrentNode = this.currentNode;
	      if (prevCurrentNode) {
	        prevCurrentNode.isCurrent = false;
	      }
	      this.currentNode = currentNode;
	      this.currentNode.isCurrent = true;
	    }
	  }, {
	    key: 'setUserCurrentNode',
	    value: function setUserCurrentNode(node) {
	      var key = node[this.key];
	      var currNode = this.nodesMap[key];
	      this.setCurrentNode(currNode);
	    }
	  }, {
	    key: 'setCurrentNodeKey',
	    value: function setCurrentNodeKey(key) {
	      if (key === null || key === undefined) {
	        this.currentNode && (this.currentNode.isCurrent = false);
	        this.currentNode = null;
	        return;
	      }
	      var node = this.getNode(key);
	      if (node) {
	        this.setCurrentNode(node);
	      }
	    }
	  }]);

	  return TreeStore;
	}();

	exports.default = TreeStore;
	;

/***/ }),

/***/ 489:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getChildState = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _objectAssign = __webpack_require__(469);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _util = __webpack_require__(490);

	var _util2 = __webpack_require__(278);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var getChildState = exports.getChildState = function getChildState(node) {
	  var all = true;
	  var none = true;
	  var allWithoutDisable = true;
	  for (var i = 0, j = node.length; i < j; i++) {
	    var n = node[i];
	    if (n.checked !== true || n.indeterminate) {
	      all = false;
	      if (!n.disabled) {
	        allWithoutDisable = false;
	      }
	    }
	    if (n.checked !== false || n.indeterminate) {
	      none = false;
	    }
	  }

	  return { all: all, none: none, allWithoutDisable: allWithoutDisable, half: !all && !none };
	};

	var reInitChecked = function reInitChecked(node) {
	  if (node.childNodes.length === 0) return;

	  var _getChildState = getChildState(node.childNodes),
	      all = _getChildState.all,
	      none = _getChildState.none,
	      half = _getChildState.half;

	  if (all) {
	    node.checked = true;
	    node.indeterminate = false;
	  } else if (half) {
	    node.checked = false;
	    node.indeterminate = true;
	  } else if (none) {
	    node.checked = false;
	    node.indeterminate = false;
	  }

	  var parent = node.parent;
	  if (!parent || parent.level === 0) return;

	  if (!node.store.checkStrictly) {
	    reInitChecked(parent);
	  }
	};

	var getPropertyFromData = function getPropertyFromData(node, prop) {
	  var props = node.store.props;
	  var data = node.data || {};
	  var config = props[prop];

	  if (typeof config === 'function') {
	    return config(data, node);
	  } else if (typeof config === 'string') {
	    return data[config];
	  } else if (typeof config === 'undefined') {
	    var dataProp = data[prop];
	    return dataProp === undefined ? '' : dataProp;
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
	    this.visible = true;
	    this.isCurrent = false;

	    for (var name in options) {
	      if (options.hasOwnProperty(name)) {
	        this[name] = options[name];
	      }
	    }

	    this.level = 0;
	    this.loaded = false;
	    this.childNodes = [];
	    this.loading = false;

	    if (this.parent) {
	      this.level = this.parent.level + 1;
	    }

	    var store = this.store;
	    if (!store) {
	      throw new Error('[Node]store is required!');
	    }
	    store.registerNode(this);

	    var props = store.props;
	    if (props && typeof props.isLeaf !== 'undefined') {
	      var isLeaf = getPropertyFromData(this, 'isLeaf');
	      if (typeof isLeaf === 'boolean') {
	        this.isLeafByUser = isLeaf;
	      }
	    }

	    if (store.lazy !== true && this.data) {
	      this.setData(this.data);

	      if (store.defaultExpandAll) {
	        this.expanded = true;
	      }
	    } else if (this.level > 0 && store.lazy && store.defaultExpandAll) {
	      this.expand();
	    }
	    if (!Array.isArray(this.data)) {
	      (0, _util.markNodeData)(this, this.data);
	    }
	    if (!this.data) return;
	    var defaultExpandedKeys = store.defaultExpandedKeys;
	    var key = store.key;
	    if (key && defaultExpandedKeys && defaultExpandedKeys.indexOf(this.key) !== -1) {
	      this.expand(null, store.autoExpandParent);
	    }

	    if (key && store.currentNodeKey !== undefined && this.key === store.currentNodeKey) {
	      store.currentNode = this;
	      store.currentNode.isCurrent = true;
	    }

	    if (store.lazy) {
	      store._initDefaultCheckedNode(this);
	    }

	    this.updateLeafState();
	  }

	  _createClass(Node, [{
	    key: 'setData',
	    value: function setData(data) {
	      if (!Array.isArray(data)) {
	        (0, _util.markNodeData)(this, data);
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
	    key: 'contains',
	    value: function contains(target) {
	      var deep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

	      var walk = function walk(parent) {
	        var children = parent.childNodes || [];
	        var result = false;
	        for (var i = 0, j = children.length; i < j; i++) {
	          var child = children[i];
	          if (child === target || deep && walk(child)) {
	            result = true;
	            break;
	          }
	        }
	        return result;
	      };

	      return walk(this);
	    }
	  }, {
	    key: 'remove',
	    value: function remove() {
	      var parent = this.parent;
	      if (parent) {
	        parent.removeChild(this);
	      }
	    }
	  }, {
	    key: 'insertChild',
	    value: function insertChild(child, index, batch) {
	      if (!child) throw new Error('insertChild error: child is required.');

	      if (!(child instanceof Node)) {
	        if (!batch) {
	          var children = this.getChildren(true);
	          if (children.indexOf(child.data) === -1) {
	            if (typeof index === 'undefined' || index < 0) {
	              children.push(child.data);
	            } else {
	              children.splice(index, 0, child.data);
	            }
	          }
	        }
	        (0, _objectAssign2.default)(child, {
	          parent: this,
	          store: this.store
	        });
	        child = new Node(child);
	      }

	      child.level = this.level + 1;

	      if (typeof index === 'undefined' || index < 0) {
	        this.childNodes.push(child);
	      } else {
	        this.childNodes.splice(index, 0, child);
	      }

	      this.updateLeafState();
	    }
	  }, {
	    key: 'insertBefore',
	    value: function insertBefore(child, ref) {
	      var index = void 0;
	      if (ref) {
	        index = this.childNodes.indexOf(ref);
	      }
	      this.insertChild(child, index);
	    }
	  }, {
	    key: 'insertAfter',
	    value: function insertAfter(child, ref) {
	      var index = void 0;
	      if (ref) {
	        index = this.childNodes.indexOf(ref);
	        if (index !== -1) index += 1;
	      }
	      this.insertChild(child, index);
	    }
	  }, {
	    key: 'removeChild',
	    value: function removeChild(child) {
	      var children = this.getChildren() || [];
	      var dataIndex = children.indexOf(child.data);
	      if (dataIndex > -1) {
	        children.splice(dataIndex, 1);
	      }

	      var index = this.childNodes.indexOf(child);

	      if (index > -1) {
	        this.store && this.store.deregisterNode(child);
	        child.parent = null;
	        this.childNodes.splice(index, 1);
	      }

	      this.updateLeafState();
	    }
	  }, {
	    key: 'removeChildByData',
	    value: function removeChildByData(data) {
	      var targetNode = null;

	      for (var i = 0; i < this.childNodes.length; i++) {
	        if (this.childNodes[i].data === data) {
	          targetNode = this.childNodes[i];
	          break;
	        }
	      }

	      if (targetNode) {
	        this.removeChild(targetNode);
	      }
	    }
	  }, {
	    key: 'expand',
	    value: function expand(callback, expandParent) {
	      var _this = this;

	      var done = function done() {
	        if (expandParent) {
	          var parent = _this.parent;
	          while (parent.level > 0) {
	            parent.expanded = true;
	            parent = parent.parent;
	          }
	        }
	        _this.expanded = true;
	        if (callback) callback();
	      };

	      if (this.shouldLoadData()) {
	        this.loadData(function (data) {
	          if (data instanceof Array) {
	            if (_this.checked) {
	              _this.setChecked(true, true);
	            } else if (!_this.store.checkStrictly) {
	              reInitChecked(_this);
	            }
	            done();
	          }
	        });
	      } else {
	        done();
	      }
	    }
	  }, {
	    key: 'doCreateChildren',
	    value: function doCreateChildren(array) {
	      var _this2 = this;

	      var defaultProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      array.forEach(function (item) {
	        _this2.insertChild((0, _objectAssign2.default)({ data: item }, defaultProps), undefined, true);
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
	      return this.store.lazy === true && this.store.load && !this.loaded;
	    }
	  }, {
	    key: 'updateLeafState',
	    value: function updateLeafState() {
	      if (this.store.lazy === true && this.loaded !== true && typeof this.isLeafByUser !== 'undefined') {
	        this.isLeaf = this.isLeafByUser;
	        return;
	      }
	      var childNodes = this.childNodes;
	      if (!this.store.lazy || this.store.lazy === true && this.loaded === true) {
	        this.isLeaf = !childNodes || childNodes.length === 0;
	        return;
	      }
	      this.isLeaf = false;
	    }
	  }, {
	    key: 'setChecked',
	    value: function setChecked(value, deep, recursion, passValue) {
	      var _this3 = this;

	      this.indeterminate = value === 'half';
	      this.checked = value === true;

	      if (this.store.checkStrictly) return;

	      if (!(this.shouldLoadData() && !this.store.checkDescendants)) {
	        var _getChildState2 = getChildState(this.childNodes),
	            all = _getChildState2.all,
	            allWithoutDisable = _getChildState2.allWithoutDisable;

	        if (!this.isLeaf && !all && allWithoutDisable) {
	          this.checked = false;
	          value = false;
	        }

	        var handleDescendants = function handleDescendants() {
	          if (deep) {
	            var childNodes = _this3.childNodes;
	            for (var i = 0, j = childNodes.length; i < j; i++) {
	              var child = childNodes[i];
	              passValue = passValue || value !== false;
	              var isCheck = child.disabled ? child.checked : passValue;
	              child.setChecked(isCheck, deep, true, passValue);
	            }

	            var _getChildState3 = getChildState(childNodes),
	                half = _getChildState3.half,
	                _all = _getChildState3.all;

	            if (!_all) {
	              _this3.checked = _all;
	              _this3.indeterminate = half;
	            }
	          }
	        };

	        if (this.shouldLoadData()) {
	          this.loadData(function () {
	            handleDescendants();
	            reInitChecked(_this3);
	          }, {
	            checked: value !== false
	          });
	          return;
	        } else {
	          handleDescendants();
	        }
	      }

	      var parent = this.parent;
	      if (!parent || parent.level === 0) return;

	      if (!recursion) {
	        reInitChecked(parent);
	      }
	    }
	  }, {
	    key: 'getChildren',
	    value: function getChildren() {
	      var forceInit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	      if (this.level === 0) return this.data;
	      var data = this.data;
	      if (!data) return null;

	      var props = this.store.props;
	      var children = 'children';
	      if (props) {
	        children = props.children || 'children';
	      }

	      if (data[children] === undefined) {
	        data[children] = null;
	      }

	      if (forceInit && !data[children]) {
	        data[children] = [];
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
	        var key = item[_util.NODE_KEY];
	        var isNodeExists = !!key && (0, _util2.arrayFindIndex)(oldData, function (data) {
	          return data[_util.NODE_KEY] === key;
	        }) >= 0;
	        if (isNodeExists) {
	          newDataMap[key] = { index: index, data: item };
	        } else {
	          newNodes.push({ index: index, data: item });
	        }
	      });

	      if (!this.store.lazy) {
	        oldData.forEach(function (item) {
	          if (!newDataMap[item[_util.NODE_KEY]]) _this4.removeChildByData(item);
	        });
	      }

	      newNodes.forEach(function (_ref) {
	        var index = _ref.index,
	            data = _ref.data;

	        _this4.insertChild({ data: data }, index);
	      });

	      this.updateLeafState();
	    }
	  }, {
	    key: 'loadData',
	    value: function loadData(callback) {
	      var _this5 = this;

	      var defaultProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      if (this.store.lazy === true && this.store.load && !this.loaded && (!this.loading || Object.keys(defaultProps).length)) {
	        this.loading = true;

	        var resolve = function resolve(children) {
	          _this5.loaded = true;
	          _this5.loading = false;
	          _this5.childNodes = [];

	          _this5.doCreateChildren(children, defaultProps);

	          _this5.updateLeafState();
	          if (callback) {
	            callback.call(_this5, children);
	          }
	        };

	        this.store.load(this, resolve);
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
	    key: 'key',
	    get: function get() {
	      var nodeKey = this.store.key;
	      if (this.data) return this.data[nodeKey];
	      return null;
	    }
	  }, {
	    key: 'disabled',
	    get: function get() {
	      return getPropertyFromData(this, 'disabled');
	    }
	  }, {
	    key: 'nextSibling',
	    get: function get() {
	      var parent = this.parent;
	      if (parent) {
	        var index = parent.childNodes.indexOf(this);
	        if (index > -1) {
	          return parent.childNodes[index + 1];
	        }
	      }
	      return null;
	    }
	  }, {
	    key: 'previousSibling',
	    get: function get() {
	      var parent = this.parent;
	      if (parent) {
	        var index = parent.childNodes.indexOf(this);
	        if (index > -1) {
	          return index > 0 ? parent.childNodes[index - 1] : null;
	        }
	      }
	      return null;
	    }
	  }]);

	  return Node;
	}();

	exports.default = Node;

/***/ }),

/***/ 490:
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var NODE_KEY = exports.NODE_KEY = '$treeNodeId';

	var markNodeData = exports.markNodeData = function markNodeData(node, data) {
	  if (!data || data[NODE_KEY]) return;
	  Object.defineProperty(data, NODE_KEY, {
	    value: node.id,
	    enumerable: false,
	    configurable: false,
	    writable: false
	  });
	};

	var getNodeKey = exports.getNodeKey = function getNodeKey(key, data) {
	  if (!key) return data[NODE_KEY];
	  return data[key];
	};

	var findNearestComponent = exports.findNearestComponent = function findNearestComponent(element, componentName) {
	  var target = element;
	  while (target && target.tagName !== 'BODY') {
	    if (target.__vue__ && target.__vue__.$options.name === componentName) {
	      return target.__vue__;
	    }
	    target = target.parentNode;
	  }
	  return null;
	};

/***/ }),

/***/ 491:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(492),
	  /* template */
	  __webpack_require__(495),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)

	module.exports = Component.exports


/***/ }),

/***/ 492:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _transition = __webpack_require__(493);

	var _transition2 = _interopRequireDefault(_transition);

	var _elemcheckbox = __webpack_require__(478);

	var _elemcheckbox2 = _interopRequireDefault(_elemcheckbox);

	var _emitter = __webpack_require__(494);

	var _emitter2 = _interopRequireDefault(_emitter);

	var _util = __webpack_require__(490);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'ElTreeNode',

	  componentName: 'ElTreeNode',

	  mixins: [_emitter2.default],

	  props: {
	    node: {
	      default: function _default() {
	        return {};
	      }
	    },
	    props: {},
	    renderContent: Function,
	    renderAfterExpand: {
	      type: Boolean,
	      default: true
	    },
	    showCheckbox: {
	      type: Boolean,
	      default: false
	    }
	  },

	  components: {
	    ElCollapseTransition: _transition2.default,
	    ElCheckbox: _elemcheckbox2.default,
	    NodeContent: {
	      props: {
	        node: {
	          required: true
	        }
	      },
	      render: function render(h) {
	        var parent = this.$parent;
	        var tree = parent.tree;
	        var node = this.node;
	        var data = node.data,
	            store = node.store;

	        return parent.renderContent ? parent.renderContent.call(parent._renderProxy, h, { _self: tree.$vnode.context, node: node, data: data, store: store }) : tree.$scopedSlots.default ? tree.$scopedSlots.default({ node: node, data: data }) : h(
	          'span',
	          { 'class': 'el-tree-node__label' },
	          [node.label]
	        );
	      }
	    }
	  },

	  data: function data() {
	    return {
	      tree: null,
	      expanded: false,
	      childNodeRendered: false,
	      oldChecked: null,
	      oldIndeterminate: null
	    };
	  },


	  watch: {
	    'node.indeterminate': function nodeIndeterminate(val) {
	      this.handleSelectChange(this.node.checked, val);
	    },
	    'node.checked': function nodeChecked(val) {
	      this.handleSelectChange(val, this.node.indeterminate);
	    },
	    'node.expanded': function nodeExpanded(val) {
	      var _this = this;

	      this.$nextTick(function () {
	        return _this.expanded = val;
	      });
	      if (val) {
	        this.childNodeRendered = true;
	      }
	    }
	  },

	  methods: {
	    getNodeKey: function getNodeKey(node) {
	      return (0, _util.getNodeKey)(this.tree.nodeKey, node.data);
	    },
	    handleSelectChange: function handleSelectChange(checked, indeterminate) {
	      if (this.oldChecked !== checked && this.oldIndeterminate !== indeterminate) {
	        this.tree.$emit('check-change', this.node.data, checked, indeterminate);
	      }
	      this.oldChecked = checked;
	      this.indeterminate = indeterminate;
	    },
	    handleClick: function handleClick() {
	      var store = this.tree.store;
	      store.setCurrentNode(this.node);
	      this.tree.$emit('current-change', store.currentNode ? store.currentNode.data : null, store.currentNode);
	      this.tree.currentNode = this;
	      if (this.tree.expandOnClickNode) {
	        this.handleExpandIconClick();
	      }
	      if (this.tree.checkOnClickNode && !this.node.disabled) {
	        this.handleCheckChange(null, {
	          target: { checked: !this.node.checked }
	        });
	      }
	      this.tree.$emit('node-click', this.node.data, this.node, this);
	    },
	    handleContextMenu: function handleContextMenu(event) {
	      if (this.tree._events['node-contextmenu'] && this.tree._events['node-contextmenu'].length > 0) {
	        event.stopPropagation();
	        event.preventDefault();
	      }
	      this.tree.$emit('node-contextmenu', event, this.node.data, this.node, this);
	    },
	    handleExpandIconClick: function handleExpandIconClick() {
	      if (this.node.isLeaf) return;
	      if (this.expanded) {
	        this.tree.$emit('node-collapse', this.node.data, this.node, this);
	        this.node.collapse();
	      } else {
	        this.node.expand();
	        this.$emit('node-expand', this.node.data, this.node, this);
	      }
	    },
	    handleCheckChange: function handleCheckChange(value, ev) {
	      var _this2 = this;

	      this.node.setChecked(ev.target.checked, !this.tree.checkStrictly);
	      this.$nextTick(function () {
	        var store = _this2.tree.store;
	        _this2.tree.$emit('check', _this2.node.data, {
	          checkedNodes: store.getCheckedNodes(),
	          checkedKeys: store.getCheckedKeys(),
	          halfCheckedNodes: store.getHalfCheckedNodes(),
	          halfCheckedKeys: store.getHalfCheckedKeys()
	        });
	      });
	    },
	    handleChildNodeExpand: function handleChildNodeExpand(nodeData, node, instance) {
	      this.broadcast('ElTreeNode', 'tree-node-expand', node);
	      this.tree.$emit('node-expand', nodeData, node, instance);
	    },
	    handleDragStart: function handleDragStart(event) {
	      if (!this.tree.draggable) return;
	      this.tree.$emit('tree-node-drag-start', event, this);
	    },
	    handleDragOver: function handleDragOver(event) {
	      if (!this.tree.draggable) return;
	      this.tree.$emit('tree-node-drag-over', event, this);
	      event.preventDefault();
	    },
	    handleDrop: function handleDrop(event) {
	      event.preventDefault();
	    },
	    handleDragEnd: function handleDragEnd(event) {
	      if (!this.tree.draggable) return;
	      this.tree.$emit('tree-node-drag-end', event, this);
	    }
	  },

	  created: function created() {
	    var _this3 = this;

	    var parent = this.$parent;

	    if (parent.isTree) {
	      this.tree = parent;
	    } else {
	      this.tree = parent.tree;
	    }

	    var tree = this.tree;
	    if (!tree) {
	      console.warn('Can not find node\'s tree.');
	    }

	    var props = tree.props || {};
	    var childrenKey = props['children'] || 'children';

	    this.$watch('node.data.' + childrenKey, function () {
	      _this3.node.updateChildren();
	    });

	    if (this.node.expanded) {
	      this.expanded = true;
	      this.childNodeRendered = true;
	    }

	    if (this.tree.accordion) {
	      this.$on('tree-node-expand', function (node) {
	        if (_this3.node !== node) {
	          _this3.node.collapse();
	        }
	      });
	    }
	  }
	};

/***/ }),

/***/ 493:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class = __webpack_require__(269);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Transition = function () {
	  function Transition() {
	    _classCallCheck(this, Transition);
	  }

	  _createClass(Transition, [{
	    key: 'beforeEnter',
	    value: function beforeEnter(el) {
	      (0, _class.addClass)(el, 'collapse-transition');
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
	      (0, _class.removeClass)(el, 'collapse-transition');
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
	        (0, _class.addClass)(el, 'collapse-transition');
	        el.style.height = 0;
	        el.style.paddingTop = 0;
	        el.style.paddingBottom = 0;
	      }
	    }
	  }, {
	    key: 'afterLeave',
	    value: function afterLeave(el) {
	      (0, _class.removeClass)(el, 'collapse-transition');
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

/***/ 494:
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

/***/ 495:
/***/ (function(module, exports) {

	module.exports={render:function (){
	var this$1 = this;
	var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.node.visible),
	      expression: "node.visible"
	    }],
	    ref: "node",
	    staticClass: "el-tree3-node",
	    class: {
	      'is-expanded': _vm.expanded,
	      'is-current': _vm.node.isCurrent,
	        'is-hidden': !_vm.node.visible,
	        'is-focusable': !_vm.node.disabled,
	        'is-checked': !_vm.node.disabled && _vm.node.checked
	    },
	    attrs: {
	      "role": "treeitem",
	      "tabindex": "-1",
	      "aria-expanded": _vm.expanded,
	      "aria-disabled": _vm.node.disabled,
	      "aria-checked": _vm.node.checked,
	      "draggable": _vm.tree.draggable
	    },
	    on: {
	      "click": function($event) {
	        $event.stopPropagation();
	        return _vm.handleClick($event)
	      },
	      "contextmenu": function ($event) { return this$1.handleContextMenu($event); },
	      "dragstart": function($event) {
	        $event.stopPropagation();
	        return _vm.handleDragStart($event)
	      },
	      "dragover": function($event) {
	        $event.stopPropagation();
	        return _vm.handleDragOver($event)
	      },
	      "dragend": function($event) {
	        $event.stopPropagation();
	        return _vm.handleDragEnd($event)
	      },
	      "drop": function($event) {
	        $event.stopPropagation();
	        return _vm.handleDrop($event)
	      }
	    }
	  }, [_c('div', {
	    staticClass: "el-tree3-node__content",
	    style: ({
	      'padding-left': (_vm.node.level - 1) * _vm.tree.indent + 'px'
	    })
	  }, [_c('span', {
	    class: [{
	        'i-k-tree-icon-parentopen': !_vm.node.isLeaf,
	        'i-k-tree-icon-childnode': _vm.node.isLeaf
	      },
	      'el-tree3-node__expand-icon'
	    ],
	    on: {
	      "click": function($event) {
	        $event.stopPropagation();
	        return _vm.handleExpandIconClick($event)
	      }
	    }
	  }), _vm._v(" "), (_vm.showCheckbox) ? _c('el-checkbox', {
	    attrs: {
	      "indeterminate": _vm.node.indeterminate,
	      "disabled": !!_vm.node.disabled
	    },
	    on: {
	      "change": _vm.handleCheckChange
	    },
	    nativeOn: {
	      "click": function($event) {
	        $event.stopPropagation();
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
	    staticClass: "el-tree3-node__loading-icon el-icon-loading"
	  }) : _vm._e(), _vm._v(" "), _c('node-content', {
	    attrs: {
	      "node": _vm.node
	    }
	  })], 1), _vm._v(" "), _c('el-collapse-transition', [(!_vm.renderAfterExpand || _vm.childNodeRendered) ? _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.expanded),
	      expression: "expanded"
	    }],
	    staticClass: "el-tree3-node__children",
	    attrs: {
	      "role": "group",
	      "aria-expanded": _vm.expanded
	    }
	  }, _vm._l((_vm.node.childNodes), function(child) {
	    return _c('el-tree-node', {
	      key: _vm.getNodeKey(child),
	      attrs: {
	        "render-content": _vm.renderContent,
	        "render-after-expand": _vm.renderAfterExpand,
	        "show-checkbox": _vm.showCheckbox,
	        "node": child
	      },
	      on: {
	        "node-expand": _vm.handleChildNodeExpand
	      }
	    })
	  }), 1) : _vm._e()])], 1)
	},staticRenderFns: []}

/***/ }),

/***/ 496:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(497);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js!../../node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"extract\":true,\"remove\":true}!../../node_modules/style-loader/index.js!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js?sourceMap!./tree3.less", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js!../../node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"extract\":true,\"remove\":true}!../../node_modules/style-loader/index.js!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js?sourceMap!./tree3.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 497:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ }),

/***/ 498:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "el-tree3",
	    class: {
	      'el-tree3--highlight-current': _vm.highlightCurrent,
	      'is-dragging': !!_vm.dragState.draggingNode,
	        'is-drop-not-allow': !_vm.dragState.allowDrop,
	        'is-drop-inner': _vm.dragState.dropType === 'inner'
	    },
	    attrs: {
	      "role": "tree"
	    }
	  }, [_vm._l((_vm.root.childNodes), function(child) {
	    return _c('el-tree-node', {
	      key: _vm.getNodeKey(child),
	      attrs: {
	        "node": child,
	        "props": _vm.props,
	        "render-after-expand": _vm.renderAfterExpand,
	        "show-checkbox": _vm.showCheckbox,
	        "render-content": _vm.renderContent
	      },
	      on: {
	        "node-expand": _vm.handleNodeExpand
	      }
	    })
	  }), _vm._v(" "), (_vm.isEmpty) ? _c('div', {
	    staticClass: "el-tree3__empty-block"
	  }, [_c('span', {
	    staticClass: "el-tree3__empty-text"
	  }, [_vm._v(_vm._s(_vm.emptyText))])]) : _vm._e(), _vm._v(" "), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.dragState.showDropIndicator),
	      expression: "dragState.showDropIndicator"
	    }],
	    ref: "dropIndicator",
	    staticClass: "el-tree3__drop-indicator"
	  })], 2)
	},staticRenderFns: []}

/***/ })

/******/ })
});
;