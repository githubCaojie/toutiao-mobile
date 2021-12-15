(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define("vuecomponent", ["vue"], factory);
	else if(typeof exports === 'object')
		exports["vuecomponent"] = factory(require("vue"));
	else
		root["vuecomponent"] = factory(root["Vue"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_13__) {
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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _index = __webpack_require__(451);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(458);

	var _index4 = _interopRequireDefault(_index3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var install = function install(Vue) {
	  if (install.installed) return;
	  Vue.component('my-tab', _index2.default);
	  Vue.component('my-tabpane', _index4.default);
	};

	if (typeof window !== 'undefined' && window.Vue) {
	  install(window.Vue);
	};

	module.exports = {
	  version: '1.0.0-rc.5',
	  Tabs: _index2.default,
	  TabPane: _index4.default
	};

/***/ },

/***/ 3:
/***/ function(module, exports) {

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


/***/ },

/***/ 13:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ },

/***/ 27:
/***/ function(module, exports) {

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


/***/ },

/***/ 28:
/***/ function(module, exports, __webpack_require__) {

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


/***/ },

/***/ 40:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var isServer = typeof window === 'undefined';

	var requestFrame = function () {
	  if (isServer) return;
	  var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (fn) {
	    return window.setTimeout(fn, 20);
	  };
	  return function (fn) {
	    return raf(fn);
	  };
	}();

	var cancelFrame = function () {
	  if (isServer) return;
	  var cancel = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.clearTimeout;
	  return function (id) {
	    return cancel(id);
	  };
	}();

	var resetTrigger = function resetTrigger(element) {
	  var trigger = element.__resizeTrigger__;
	  var expand = trigger.firstElementChild;
	  var contract = trigger.lastElementChild;
	  var expandChild = expand.firstElementChild;

	  contract.scrollLeft = contract.scrollWidth;
	  contract.scrollTop = contract.scrollHeight;
	  expandChild.style.width = expand.offsetWidth + 1 + 'px';
	  expandChild.style.height = expand.offsetHeight + 1 + 'px';
	  expand.scrollLeft = expand.scrollWidth;
	  expand.scrollTop = expand.scrollHeight;
	};

	var checkTriggers = function checkTriggers(element) {
	  return element.offsetWidth !== element.__resizeLast__.width || element.offsetHeight !== element.__resizeLast__.height;
	};

	var scrollListener = function scrollListener(event) {
	  var _this = this;

	  resetTrigger(this);
	  if (this.__resizeRAF__) cancelFrame(this.__resizeRAF__);
	  this.__resizeRAF__ = requestFrame(function () {
	    if (checkTriggers(_this)) {
	      _this.__resizeLast__.width = _this.offsetWidth;
	      _this.__resizeLast__.height = _this.offsetHeight;
	      _this.__resizeListeners__.forEach(function (fn) {
	        fn.call(_this, event);
	      });
	    }
	  });
	};

	var attachEvent = isServer ? {} : document.attachEvent;
	var DOM_PREFIXES = 'Webkit Moz O ms'.split(' ');
	var START_EVENTS = 'webkitAnimationStart animationstart oAnimationStart MSAnimationStart'.split(' ');
	var RESIZE_ANIMATION_NAME = 'resizeanim';
	var animation = false;
	var keyFramePrefix = '';
	var animationStartEvent = 'animationstart';

	if (!attachEvent && !isServer) {
	  var testElement = document.createElement('fakeelement');
	  if (testElement.style.animationName !== undefined) {
	    animation = true;
	  }

	  if (animation === false) {
	    var prefix = '';
	    for (var i = 0; i < DOM_PREFIXES.length; i++) {
	      if (testElement.style[DOM_PREFIXES[i] + 'AnimationName'] !== undefined) {
	        prefix = DOM_PREFIXES[i];
	        keyFramePrefix = '-' + prefix.toLowerCase() + '-';
	        animationStartEvent = START_EVENTS[i];
	        animation = true;
	        break;
	      }
	    }
	  }
	}

	var stylesCreated = false;

	var createStyles = function createStyles() {
	  if (!stylesCreated && !isServer) {
	    var animationKeyframes = '@' + keyFramePrefix + 'keyframes ' + RESIZE_ANIMATION_NAME + ' { from { opacity: 0; } to { opacity: 0; } } ';
	    var animationStyle = keyFramePrefix + 'animation: 1ms ' + RESIZE_ANIMATION_NAME + ';';

	    var css = animationKeyframes + '\n      .resize-triggers { ' + animationStyle + ' visibility: hidden; opacity: 0; }\n      .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; }\n      .resize-triggers > div { background: #eee; overflow: auto; }\n      .contract-trigger:before { width: 200%; height: 200%; }';

	    var head = document.head || document.getElementsByTagName('head')[0];
	    var style = document.createElement('style');

	    style.type = 'text/css';
	    if (style.styleSheet) {
	      style.styleSheet.cssText = css;
	    } else {
	      style.appendChild(document.createTextNode(css));
	    }

	    head.appendChild(style);
	    stylesCreated = true;
	  }
	};

	var addResizeListener = exports.addResizeListener = function addResizeListener(element, fn) {
	  if (isServer) return;
	  if (attachEvent) {
	    element.attachEvent('onresize', fn);
	  } else {
	    if (!element.__resizeTrigger__) {
	      if (getComputedStyle(element).position === 'static') {
	        element.style.position = 'relative';
	      }
	      createStyles();
	      element.__resizeLast__ = {};
	      element.__resizeListeners__ = [];

	      var resizeTrigger = element.__resizeTrigger__ = document.createElement('div');
	      resizeTrigger.className = 'resize-triggers';
	      resizeTrigger.innerHTML = '<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>';
	      element.appendChild(resizeTrigger);

	      resetTrigger(element);
	      element.addEventListener('scroll', scrollListener, true);

	      if (animationStartEvent) {
	        resizeTrigger.addEventListener(animationStartEvent, function (event) {
	          if (event.animationName === RESIZE_ANIMATION_NAME) {
	            resetTrigger(element);
	          }
	        });
	      }
	    }
	    element.__resizeListeners__.push(fn);
	  }
	};

	var removeResizeListener = exports.removeResizeListener = function removeResizeListener(element, fn) {
	  if (attachEvent) {
	    element.detachEvent('onresize', fn);
	  } else {
	    element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
	    if (!element.__resizeListeners__.length) {
	      element.removeEventListener('scroll', scrollListener);
	      element.__resizeTrigger__ = !element.removeChild(element.__resizeTrigger__);
	    }
	  }
	};

/***/ },

/***/ 65:
/***/ function(module, exports) {

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

/***/ },

/***/ 66:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.toXmlDom = toXmlDom;
	exports.xmlToJson = xmlToJson;
	exports.convertTreeDataToMap = convertTreeDataToMap;
	exports.getStrCharLength = getStrCharLength;
	exports.setQueryComponentValue = setQueryComponentValue;

	var _map = __webpack_require__(65);

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

/***/ },

/***/ 393:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.noop = noop;
	exports.hasOwn = hasOwn;
	exports.toObject = toObject;
	exports.getPropByPath = getPropByPath;
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

/***/ },

/***/ 451:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _tabs = __webpack_require__(452);

	var _tabs2 = _interopRequireDefault(_tabs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_tabs2.default.install = function (Vue) {
	  Vue.component(_tabs2.default.name, _tabs2.default);
	};

	exports.default = _tabs2.default;

/***/ },

/***/ 452:
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(453),
	  /* template */
	  __webpack_require__(464),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)

	module.exports = Component.exports


/***/ },

/***/ 453:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _tab = __webpack_require__(454);

	var _tab2 = _interopRequireDefault(_tab);

	var _tabPane = __webpack_require__(458);

	var _tabPane2 = _interopRequireDefault(_tabPane);

	var _framework = __webpack_require__(66);

	var _vue = __webpack_require__(13);

	var _vue2 = _interopRequireDefault(_vue);

	var _resizeEvent = __webpack_require__(40);

	var _util = __webpack_require__(393);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(462);

	var firstUpperCase = function firstUpperCase(str) {
	  return str.toLowerCase().replace(/( |^)[a-z]/g, function (L) {
	    return L.toUpperCase();
	  });
	};
	exports.default = {
	  name: 'hy-tabs',

	  components: {
	    ElTab: _tab2.default
	  },

	  props: {
	    type: {
	      type: String,
	      default: 'card'
	    },
	    tabPosition: {
	      type: String,
	      default: 'top'
	    },
	    value: {},
	    closable: false,
	    readonly: false,
	    tabWidth: 0,
	    height: {
	      type: [String, Number],
	      default: '100%'
	    },
	    width: {
	      type: [String, Number],
	      default: '100%'
	    },
	    visible: {
	      type: Boolean,
	      default: true
	    },
	    id: {
	      type: String,
	      default: ""
	    },
	    customremove: {
	      type: Boolean,
	      default: false
	    },
	    showtabbar: {
	      type: Boolean,
	      default: true
	    },
	    stretch: {
	      type: Boolean,
	      default: false
	    }

	  },
	  computed: {
	    tabStyle: function tabStyle() {
	      var style = {};
	      if (this.height != "") {
	        style.height = this.height + "";
	        if (style.height.indexOf("px") == -1 && style.height.indexOf('%') == -1) {
	          style.height = this.height + "px";
	        }
	      }

	      if (this.width != "") {
	        style.width = this.width;
	        if (style.width.indexOf("px") == -1 && style.width.indexOf('%') == -1) {
	          style.width = this.width + "px";
	        }
	      }

	      return style;
	    },
	    navStyle: function navStyle() {
	      var dir = ['top', 'bottom'].indexOf(this.tabPosition) !== -1 ? 'X' : 'Y';
	      return {
	        transform: 'translate' + dir + '(-' + this.navOffset + 'px)'
	      };
	    },
	    sizeName: function sizeName() {
	      return ['top', 'bottom'].indexOf(this.tabPosition) !== -1 ? 'width' : 'height';
	    },


	    barStyle: {
	      get: function get() {
	        var _this = this;

	        if (this.type || !this.$refs.panes) return {};

	        var style = {};
	        var offset = 0;
	        var tabSize = 0;
	        var sizeName = ['top', 'bottom'].indexOf(this.tabPosition) !== -1 ? 'width' : 'height';
	        var sizeDir = sizeName === 'width' ? 'x' : 'y';
	        var firstUpperCase = function firstUpperCase(str) {
	          return str.toLowerCase().replace(/( |^)[a-z]/g, function (L) {
	            return L.toUpperCase();
	          });
	        };
	        this.panes.every(function (tab, index) {
	          var $el = (0, _util.arrayFind)(_this.panes || [], function (t) {
	            return t.id.replace('tab-', '') === tab.paneName;
	          });
	          if (!$el) {
	            return false;
	          }

	          if (!tab.active) {
	            offset += $el['client' + firstUpperCase(sizeName)];
	            return true;
	          } else {
	            tabSize = $el['client' + firstUpperCase(sizeName)];
	            var tabStyles = window.getComputedStyle($el);
	            if (sizeName === 'width' && _this.panes.length > 1) {
	              tabSize -= parseFloat(tabStyles.paddingLeft) + parseFloat(tabStyles.paddingRight);
	            }
	            if (sizeName === 'width') {
	              offset += parseFloat(tabStyles.paddingLeft);
	            }
	            return false;
	          }
	        });

	        var transform = 'translate' + firstUpperCase(sizeDir) + '(' + offset + 'px)';
	        style[sizeName] = tabSize + 'px';
	        style.transform = transform;
	        style.msTransform = transform;
	        style.webkitTransform = transform;

	        console.log("****style****");
	        console.log(style);
	        return style;
	      }
	    }
	  },
	  created: function created() {
	    if (this.id != "") {
	      window[this.id] = this;
	    }
	    ++$tabCount;
	    if (this.value === undefined) {
	      this.currentName = 0;
	    } else {
	      this.currentName = this.value;
	    }
	    this.$on('tab-nav-update', this.calcPaneInstances.bind(null, true));
	  },
	  destroyed: function destroyed() {
	    if (this.id != "") {
	      window[this.id] = null;
	      delete window[this.id];
	    }
	  },
	  data: function data() {
	    return {
	      tabs: [],
	      children: null,
	      activeTab: null,
	      currentName: 0,

	      showSlot: false,
	      scrollable: false,
	      navOffset: 0,
	      panes: []
	    };
	  },


	  watch: {
	    value: {
	      handler: function handler(val) {
	        this.currentName = val;
	      }
	    },

	    'currentName': function currentName() {
	      var _this2 = this;

	      this.$emit("input", this.currentName);
	      if (this.$refs.nav) {
	        this.$nextTick(function (_) {
	          _this2.scrollToActiveTab();
	        });
	      }
	    }
	  },

	  methods: {
	    getActiveTab: function getActiveTab() {
	      return this.currentName;
	    },
	    addTab: function addTab(tabName, tabTitle, iframeSrc) {
	      var Panel = _vue2.default.extend(_tabPane2.default);
	      var TabPane = new Panel({
	        propsData: {
	          name: tabName,
	          title: tabTitle,
	          href: iframeSrc
	        }
	      });
	      this.tabs.push(TabPane);
	      this.$forceUpdate();
	      this.$nextTick(function () {});
	    },
	    deleteTab: function deleteTab(name) {
	      var tab = null;
	      if (isNaN(parseInt(name))) {
	        for (var i = 0; i < this.tabs.length; i++) {
	          if (this.tabs[i].name == name) {
	            tab = this.tabs[i];
	          }
	        }
	      } else {
	        tab = this.tabs[name];
	      }
	      if (tab != null) {
	        this.handleTabRemove(tab);
	      }
	    },
	    handleTabRemove: function handleTabRemove(tab, ev) {
	      var index = this.tabs.indexOf(tab);

	      if (index !== -1) {
	        this.tabs.splice(index, 1);
	      }

	      if (ev != undefined) {
	        ev.stopPropagation();
	      }
	      tab.$destroy(true);

	      if (tab.key === this.currentName) {
	        var nextChild = this.tabs[index];
	        var prevChild = this.tabs[index - 1];

	        this.currentName = nextChild ? nextChild.key : prevChild ? prevChild.key : '-1';
	      }


	      this.$emit('tabremove', tab.key);
	    },
	    handleTabClick: function handleTabClick(tab, event) {

	      if (tab.readonly == true || this.readonly == true || this.readonly == "true" || tab.readonly == "true") {
	        return;
	      }
	      if (tab.href != "" && tab.lazy) {
	        tab.src = tab.href;
	      }
	      this.currentName = tab.key;
	      this.$emit('tabclick', tab.key, event);
	    },
	    calcBarStyle: function calcBarStyle(firstRendering) {
	      var _this3 = this;

	      if (this.type || !this.$refs.tabs) return {};
	      var style = {};
	      var offset = 0;
	      var tabWidth = 0;
	      this.tabs.every(function (tab, index) {
	        var $el = _this3.$refs.tabs[index].$el;
	        if (tab.key != _this3.currentName) {
	          offset += $el.clientWidth;
	          return true;
	        } else {
	          tabWidth = $el.clientWidth;
	          return false;
	        }
	      });

	      style.width = tabWidth + 'px';
	      style.transform = 'translateX(' + offset + 'px)';

	      style.transition = 'transform .3s cubic-bezier(.645,.045,.355,1), -webkit-transform .3s cubic-bezier(.645,.045,.355,1)';
	    },
	    getTabs: function getTabs() {
	      return this.$children.filter(function (item) {
	        return item.$options.name === 'hy-tab-pane';
	      });
	    },
	    scrollPrev: function scrollPrev() {
	      var containerSize = this.$refs.navScroll['offset' + firstUpperCase(this.sizeName)];
	      var currentOffset = this.navOffset;

	      if (!currentOffset) return;

	      var newOffset = currentOffset > containerSize ? currentOffset - containerSize : 0;

	      this.navOffset = newOffset;
	    },
	    scrollNext: function scrollNext() {
	      var navSize = this.$refs.nav['offset' + firstUpperCase(this.sizeName)];
	      var containerSize = this.$refs.navScroll['offset' + firstUpperCase(this.sizeName)];
	      var currentOffset = this.navOffset;

	      if (navSize - currentOffset <= containerSize) return;

	      var newOffset = navSize - currentOffset > containerSize * 2 ? currentOffset + containerSize : navSize - containerSize;

	      this.navOffset = newOffset;
	    },
	    scrollToActiveTab: function scrollToActiveTab() {
	      if (!this.scrollable) return;
	      var nav = this.$refs.nav;
	      var activeTab = this.$el.querySelector('.is-active');
	      if (!activeTab) return;
	      var navScroll = this.$refs.navScroll;
	      var isHorizontal = ['top', 'bottom'].indexOf(this.tabPosition) !== -1;
	      var activeTabBounding = activeTab.getBoundingClientRect();
	      var navScrollBounding = navScroll.getBoundingClientRect();

	      var maxOffset = isHorizontal ? nav.offsetWidth - navScrollBounding.width : nav.offsetHeight - navScrollBounding.height;
	      var currentOffset = this.navOffset;
	      var newOffset = currentOffset;

	      if (isHorizontal) {
	        if (activeTabBounding.left < navScrollBounding.left) {
	          newOffset = currentOffset - (navScrollBounding.left - activeTabBounding.left);
	        }
	        if (activeTabBounding.right > navScrollBounding.right) {
	          newOffset = currentOffset + activeTabBounding.right - navScrollBounding.right;
	        }
	      } else {
	        if (activeTabBounding.top < navScrollBounding.top) {
	          newOffset = currentOffset - (navScrollBounding.top - activeTabBounding.top);
	        }
	        if (activeTabBounding.bottom > navScrollBounding.bottom) {
	          newOffset = currentOffset + (activeTabBounding.bottom - navScrollBounding.bottom);
	        }
	      }
	      newOffset = Math.max(newOffset, 0);
	      this.navOffset = Math.max(newOffset, maxOffset);
	    },
	    update: function update() {
	      var _this4 = this;

	      if (!this.$refs.nav) return;
	      var sizeName = this.sizeName;
	      var navSize = this.$refs.nav['offset' + firstUpperCase(sizeName)];
	      var containerSize = this.$refs.navScroll['offset' + firstUpperCase(sizeName)];
	      var currentOffset = this.navOffset;

	      if (containerSize < navSize) {
	        var _currentOffset = this.navOffset;
	        this.scrollable = this.scrollable || {};
	        this.scrollable.prev = _currentOffset;
	        this.scrollable.next = _currentOffset + containerSize < navSize;
	        if (navSize - _currentOffset < containerSize) {
	          this.navOffset = navSize - containerSize;
	        }
	      } else {
	        this.scrollable = false;
	        if (currentOffset > 0) {
	          this.navOffset = 0;

	          this.$nextTick(function () {
	            _this4.$forceUpdate();
	          });
	        }
	      }
	    },
	    calcPaneInstances: function calcPaneInstances() {
	      var _this5 = this;

	      var isForceUpdate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	      if (this.$slots.default) {
	        var paneSlots = this.$slots.default.filter(function (vnode) {
	          return vnode.tag && vnode.componentOptions && vnode.componentOptions.Ctor.options.name === 'hy-tab-pane';
	        });

	        var panes = paneSlots.map(function (_ref) {
	          var componentInstance = _ref.componentInstance;
	          return componentInstance;
	        });
	        var panesChanged = !(panes.length === this.panes.length && panes.every(function (pane, index) {
	          return pane === _this5.panes[index];
	        }));
	        if (isForceUpdate || panesChanged) {
	          this.panes = panes;
	        }
	      } else if (this.panes.length !== 0) {
	        this.panes = [];
	      }
	    }
	  },
	  updated: function updated() {
	    this.update();
	    this.calcPaneInstances();
	  },
	  mounted: function mounted() {
	    (0, _resizeEvent.addResizeListener)(this.$el, this.update);
	    this.calcPaneInstances();

	    this.tabs = this.getTabs();

	    this.$nextTick(function () {
	      if ($filllayoutCount == 0 && $row == 0) {
	        ++$isLayoutTabCount;
	        if ($tabCount == $isLayoutTabCount) {
	          if (typeof $vueEl != 'undefined') {
	            var elementId = $vueEl;
	            if ($vueEl.indexOf("#") != -1) {
	              elementId = $vueEl.substring(1, $vueEl.length);
	            }
	            var appContainer = document.getElementById(elementId);
	            if (appContainer != undefined) {
	              appContainer.style.display = "block";
	              (0, _framework.setQueryComponentValue)();
	            }
	          }
	        }
	      }
	    });
	    this.showSlot = this.$slots.extra !== undefined;
	  }
	};

/***/ },

/***/ 454:
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(455),
	  /* template */
	  __webpack_require__(457),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)

	module.exports = Component.exports


/***/ },

/***/ 455:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _render = __webpack_require__(456);

	var _render2 = _interopRequireDefault(_render);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'hy-tab',

	  props: {
	    tab: {
	      type: Object,
	      required: true

	    },
	    readonly: false,

	    closable: Boolean,

	    tabPosition: {
	      type: String,
	      default: 'top'
	    }
	  },
	  components: { Render: _render2.default },
	  watch: {
	    '$parent.tabs': function $parentTabs(newValue, oldValue) {
	      if (this.closable && newValue.length > 1) {
	        this.iscloseable = true;
	      } else {
	        this.iscloseable = false;
	      }
	    }
	  },
	  computed: {
	    disabledFlag: function disabledFlag() {
	      if (this.readonly == true || this.readonly == "true" || this.tab.readonly || this.tab.readonly == "true") {
	        return true;
	      } else {
	        return false;
	      }
	    }
	  },
	  mounted: function mounted() {
	    if (this.closable && this.$parent.tabs.length > 1) {
	      this.iscloseable = true;
	    }
	  },
	  data: function data() {
	    return {
	      iscloseable: false
	    };
	  }
	};

/***/ },

/***/ 456:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    name: 'RenderCell',
	    functional: true,
	    props: {
	        render: Function
	    },
	    render: function render(h, ctx) {
	        return ctx.props.render(h);
	    }
	};

/***/ },

/***/ 457:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.tab.visible),
	      expression: "tab.visible"
	    }],
	    staticClass: "el-tabs__item",
	    class: ( _obj = {
	      'is-active': _vm.$parent.currentName == _vm.tab.key,
	      'is-disabled': this.disabledFlag,
	      'is-closable': _vm.iscloseable,
	    }, _obj[("is-" + (this.tabPosition))] = true, _obj )
	  }, [(_vm.tab.icon != '') ? _c('i', {
	    staticClass: "iconfont",
	    class: _vm.tab.icon
	  }) : _vm._e(), _vm._v(" "), (typeof _vm.tab.title === 'function') ? _c('Render', {
	    attrs: {
	      "render": _vm.tab.title
	    }
	  }) : [_vm._v(" " + _vm._s(_vm.tab.title))], _vm._v(" "), (_vm.iscloseable) ? _c('span', {
	    staticClass: "iconfont icon-close",
	    on: {
	      "click": function($event) {
	        _vm.$emit('remove', _vm.tab, $event)
	      }
	    }
	  }) : _vm._e()], 2)
	  var _obj;
	},staticRenderFns: []}

/***/ },

/***/ 458:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var TabPane = __webpack_require__(459);

	TabPane.install = function (Vue) {
	  Vue.component(TabPane.name, TabPane);
	};

	module.exports = TabPane;

/***/ },

/***/ 459:
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(460),
	  /* template */
	  __webpack_require__(461),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)

	module.exports = Component.exports


/***/ },

/***/ 460:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'hy-tab-pane',

	  props: {
	    title: {
	      type: [String, Function],
	      default: '',
	      required: true
	    },
	    readonly: {
	      type: Boolean,
	      default: false
	    },

	    href: {
	      type: String,
	      default: ""
	    },
	    lazy: {
	      type: Boolean,
	      default: false
	    },
	    icon: {
	      type: String,
	      default: ''
	    },
	    id: {
	      type: String,
	      default: ''
	    },

	    visible: {
	      type: Boolean,
	      default: true
	    },
	    name: String
	  },

	  data: function data() {
	    return {
	      counter: 0,
	      transition: '',
	      key: '',
	      src: this.lazy ? "" : this.href,
	      tabpanelId: this.id
	    };
	  },
	  created: function created() {
	    if (!this.key) {
	      this.key = this.$parent.$children.indexOf(this) + 0 + '';
	      if (this.id == "") {
	        $tabPanelCount++;
	        this.tabpanelId = "tabPanel" + $tabPanelCount;
	      }
	    }
	    this.$parent.$emit('tab-nav-update');
	  },


	  computed: {
	    show: function show() {
	      return this.$parent.currentName == this.key;
	    },
	    paneStyle: function paneStyle() {
	      var style = {};
	      if (this.$parent.height != "") {

	        style.top = '-9999px';
	        style.left = 0;

	        if (this.$parent.currentName == this.key) {
	          style.top = "0px";
	        }
	      } else {

	        if (this.$parent.currentName == this.key) {
	          style.display = "block";
	        } else {
	          style.display = "none";
	        }
	      }

	      return style;
	    }
	  },

	  destroyed: function destroyed() {},
	  mounted: function mounted() {},

	  watch: {
	    name: {
	      immediate: true,
	      handler: function handler(val) {
	        this.key = val;
	      }
	    },
	    '$parent.currentName': function $parentCurrentName(newValue, oldValue) {
	      if (this.key == newValue) {
	        this.transition = newValue > oldValue ? 'slideInRight' : 'slideInLeft';
	      }
	      if (this.key == oldValue) {
	        this.transition = oldValue > newValue ? 'slideInRight' : 'slideInLeft';
	      }
	    },
	    href: function href(val) {
	      this.src = val;
	    }
	  }
	};

/***/ },

/***/ 461:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "el-tab-pane",
	    style: (_vm.paneStyle)
	  }, [(_vm.href != '') ? [_c('iframe', {
	    staticStyle: {
	      "width": "100%",
	      "height": "100%"
	    },
	    attrs: {
	      "src": _vm.src,
	      "frameborder": "0",
	      "id": _vm.tabpanelId
	    }
	  })] : _vm._e(), _vm._v(" "), _vm._t("default")], 2)
	},staticRenderFns: []}

/***/ },

/***/ 462:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(463);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(28)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./../../node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"extract\":true,\"remove\":true}!./../../node_modules/style-loader/index.js!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js?sourceMap!./tabs.less", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./../../node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"extract\":true,\"remove\":true}!./../../node_modules/style-loader/index.js!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js?sourceMap!./tabs.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 463:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(27)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },

/***/ 464:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.visible),
	      expression: "visible"
	    }],
	    staticClass: "el-tabs",
	    class: [_vm.type ? 'el-tabs--' + _vm.type : '', _vm.showtabbar ? '' : 'unshowbar', ("el-tabs--" + _vm.tabPosition)],
	    style: (_vm.tabStyle)
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.showtabbar),
	      expression: "showtabbar"
	    }],
	    ref: "tabHeader",
	    staticClass: "el-tabs__header",
	    class: ("is-" + _vm.tabPosition)
	  }, [_c('div', {
	    class: ['el-tabs__nav-wrap', _vm.scrollable ? 'is-scrollable' : '', ("is-" + _vm.tabPosition)]
	  }, [(_vm.scrollable) ? _c('span', {
	    class: ['el-tabs__nav-prev', _vm.scrollable.prev ? '' : 'is-disableds'],
	    on: {
	      "click": _vm.scrollPrev
	    }
	  }, [_c('i', {
	    staticClass: "el-icon-arrow-left"
	  })]) : _vm._e(), _vm._v(" "), (_vm.scrollable) ? _c('span', {
	    class: ['el-tabs__nav-next', _vm.scrollable.next ? '' : 'is-disableds'],
	    on: {
	      "click": _vm.scrollNext
	    }
	  }, [_c('i', {
	    staticClass: "el-icon-arrow-right"
	  })]) : _vm._e(), _vm._v(" "), _c('div', {
	    ref: "navScroll",
	    staticClass: "el-tabs__nav-scroll"
	  }, [_c('div', {
	    ref: "nav",
	    staticClass: "el-tabs__nav",
	    class: [("is-" + _vm.tabPosition), _vm.stretch && ['top', 'bottom'].indexOf(_vm.tabPosition) !== -1 ? 'is-stretch' : ''],
	    style: (_vm.navStyle)
	  }, [(!this.type && _vm.tabs.length > 0) ? _c('div', {
	    staticClass: "el-tabs__active-bar",
	    class: ("is-" + _vm.tabPosition),
	    style: (_vm.barStyle)
	  }) : _vm._e(), _vm._v(" "), _vm._l((_vm.tabs), function(tab) {
	    return _c('el-tab', {
	      key: tab.tabpanelId,
	      ref: "tabs",
	      refInFor: true,
	      attrs: {
	        "tab": tab,
	        "readonly": _vm.readonly,
	        "closable": _vm.closable,
	        "tabPosition": _vm.tabPosition
	      },
	      on: {
	        "remove": _vm.handleTabRemove
	      },
	      nativeOn: {
	        "click": function($event) {
	          _vm.handleTabClick(tab, $event)
	        }
	      }
	    })
	  }), _vm._v(" "), (_vm.showSlot) ? _c('div', {
	    staticStyle: {
	      "float": "right"
	    }
	  }, [_vm._t("extra")], 2) : _vm._e()], 2)])])]), _vm._v(" "), _c('div', {
	    ref: "tabContent",
	    staticClass: "el-tabs__content",
	    class: [_vm.height != '' ? 'fixed-height' : '', ("el-tabs-content-" + _vm.tabPosition)]
	  }, [_vm._t("default")], 2)])
	},staticRenderFns: []}

/***/ }

/******/ })
});
;