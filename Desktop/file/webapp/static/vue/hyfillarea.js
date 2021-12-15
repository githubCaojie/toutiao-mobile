(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("vuecomponent", [], factory);
	else if(typeof exports === 'object')
		exports["vuecomponent"] = factory();
	else
		root["vuecomponent"] = factory();
})(this, function() {
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

	var _index = __webpack_require__(312);

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
	  Fillarea: _index2.default
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

/***/ 8:
/***/ function(module, exports) {

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

/***/ },

/***/ 312:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Fillarea = __webpack_require__(313);

	Fillarea.install = function (Vue) {
	  Vue.component(Fillarea.name, Fillarea);
	};

	module.exports = Fillarea;

/***/ },

/***/ 313:
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(314),
	  /* template */
	  __webpack_require__(316),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)

	module.exports = Component.exports


/***/ },

/***/ 314:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _emitter = __webpack_require__(8);

	var _emitter2 = _interopRequireDefault(_emitter);

	var _attr = __webpack_require__(315);

	var _attr2 = _interopRequireDefault(_attr);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'hy-fillarea',
	  mixins: [_emitter2.default],
	  componentName: 'fillarea',
	  directives: { attr: _attr2.default },
	  props: {
	    align: {
	      type: String,
	      default: ''
	    },
	    collapse: {
	      type: Boolean,
	      default: false
	    },
	    titlecollapse: {
	      type: Boolean,
	      default: false
	    },
	    contentclass: {
	      type: String,
	      default: ''
	    },

	    display: {
	      type: String,
	      default: 'block'
	    },
	    href: {
	      type: String,
	      default: ''
	    },
	    lazy: {
	      type: Boolean,
	      default: false
	    },

	    title: {
	      type: String,
	      default: ''
	    },
	    titleclass: {
	      type: String,
	      default: ''
	    },
	    titleheight: {
	      type: Number,
	      default: 35
	    },
	    id: {
	      type: String,
	      default: ''
	    },
	    parentId: {
	      type: String,
	      default: ''
	    },
	    scrolling: {
	      type: String,
	      default: 'yes'
	    },
	    expand: {
	      type: Boolean,
	      default: true
	    }
	  },

	  data: function data() {
	    return {
	      collapseDirection: 'left',
	      areaStyle: {},
	      classStyle: [],
	      dragDirection: 'layout-drag-v-cursor',
	      layoutType: 'row',
	      initWidth: '',
	      initHeight: '',
	      width: '',
	      height: '',
	      left: '',
	      right: '',
	      collapseDiv: false,
	      top: '',
	      bottom: '',
	      isLastColumn: false,
	      afterPercent: false,
	      titleContentClass: [],
	      titleContentStyle: {},
	      paddingContentClass: [],
	      paddingTitleClass: [],
	      src: this.lazy ? "" : this.href,
	      areaId: this.id,
	      areaIframeId: "",
	      areaIdContent: this.id + "_content",
	      position: -1,
	      collapseArrow: "icon-up",
	      isPC: $isPC
	    };
	  },
	  created: function created() {

	    if (this.areaId == "") {
	      var layoutIndex = $$filllayoutId++;
	      this.areaId = 'fillarea' + layoutIndex;
	      this.areaIdContent = this.areaId + "_content";
	    }
	    this.areaIframeId = this.areaId + "_iframe";
	    if (this.isPC) {
	      this.$on('areaLayout', this.setAreaLayout);
	    } else {
	      this.$on('areaLayout', this.setMobileAreaLayout);
	    }
	  },
	  destroyed: function destroyed() {

	    this.$el.outerHTML = "";
	  },
	  mounted: function mounted() {
	    var _this = this;

	    this.$nextTick(function () {
	      if (_this.titlecollapse && !_this.expand) {
	        _this.collapseContent();
	      }
	    });
	  },

	  computed: {
	    contentStyle: function contentStyle() {
	      var style = {
	        width: '100%',
	        height: '100%'
	      };
	      if (this.scrolling == 'no') {
	        style.overflow = 'hidden';
	      }
	      if (this.title == "") {
	        style.paddingTop = '2px';
	        style.paddingLeft = '2px';
	      }
	      var tempHeight = this.height + "";
	      if (tempHeight.indexOf('%') !== -1 && this.title != "") {
	        style.paddingTop = this.titleheight + 'px';
	      }
	      return style;
	    }
	  },
	  watch: {
	    display: function display(val) {
	      this.$parent.setLayout();
	    },

	    href: function href(val) {
	      this.src = val;
	    }
	  },
	  methods: {
	    areaScroll: function areaScroll() {
	      $componentEvent.$emit('areascroll');
	    },
	    collapseContent: function collapseContent() {
	      if (this.collapseArrow == 'icon-up') {
	        this.$parent.collapseTitleContent(this.position, 0);
	        this.collapseArrow = 'icon-down';
	      } else if (this.collapseArrow == 'icon-down') {
	        this.$parent.collapseTitleContent(this.position, this.initHeight);
	        this.collapseArrow = 'icon-up';
	      }
	    },
	    setAreaLayout: function setAreaLayout() {
	      if (this.display == "block") {
	        this.areaStyle.display = "block";
	      } else if (this.display == "none") {
	        this.areaStyle.display = "none";
	      }
	      if (this.width != "") {
	        this.areaStyle.width = this.width;
	      }
	      if (this.height != "") {
	        this.areaStyle.height = this.height;
	      }

	      if (this.left != "") {
	        this.areaStyle.left = this.left;
	      }
	      if (this.right != "") {
	        this.areaStyle.right = this.right;
	      }
	      if (this.top != "") {
	        this.areaStyle.top = this.top;
	      }
	      if (this.bottom != "") {
	        this.areaStyle.bottom = this.bottom;
	      }

	      if (this.contentclass != "") {
	        if (this.classStyle.indexOf(this.contentclass) == -1) {
	          this.classStyle.push(this.contentclass);
	        }
	      }
	      if (this.titleclass != "") {
	        if (this.titleContentClass.indexOf(this.titleclass) == -1) {
	          this.titleContentClass.push(this.titleclass);
	        }
	      }
	      if (this.title != "") {
	        this.titleContentStyle.height = this.titleheight + 'px';
	        var tempHeight = this.areaStyle.height + "";
	        if (tempHeight.indexOf('%') == -1) {
	          this.areaStyle.paddingTop = this.titleheight + 'px';
	        }
	      }

	      if (this.afterPercent) {
	        this.$el.setAttribute('afterpercent', "true");
	      }
	      if (this.$parent.showpadding) {

	        if (this.$parent.rows != "") {
	          this.classStyle.push("filllayout-row-padding");
	          this.titleContentClass.push("filllayout-row-title-padding");
	        } else {
	          if (this.classStyle.indexOf("filllayout-column-padding") == -1) {
	            this.classStyle.push("filllayout-column-padding");
	          }
	          if (this.titleContentClass.indexOf("filllayout-column-title-padding") == -1) {
	            this.titleContentClass.push("filllayout-column-title-padding");
	          }

	          if (this.isLastColumn) {
	            if (this.titleContentClass.indexOf("filllayout-column-right-padding") == -1) {
	              this.titleContentClass.push("filllayout-column-right-padding");
	            }
	            if (this.classStyle.indexOf("filllayout-column-right-padding") == -1) {
	              this.classStyle.push("filllayout-column-right-padding");
	            }
	          }
	        }
	        if (this.paddingContentClass.indexOf("filllayout-padding-content") == -1) {
	          this.paddingContentClass.push("filllayout-padding-content");
	        }
	      } else {
	        if (this.titleContentClass.indexOf("layout-background") == -1) {
	          this.titleContentClass.push("layout-background");
	        }
	      }

	      if (this.paddingTitleClass.indexOf("filllayout-padding-title") == -1) {
	        this.paddingTitleClass.push("filllayout-padding-title");
	      }

	      this.$forceUpdate();
	    },
	    setMobileAreaLayout: function setMobileAreaLayout() {
	      if (this.height != "") {
	        this.areaStyle.height = this.height;
	      }
	      if (this.width != "") {
	        this.areaStyle.width = this.width;
	        this.areaStyle.style = "float:left";
	      }

	      this.$forceUpdate();
	    }
	  }
	};

/***/ },

/***/ 315:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  bind: function bind(el, vm) {
	    for (var attr in vm.value) {
	      el.setAttribute(attr, vm.value[attr]);
	    }
	  }
	};

/***/ },

/***/ 316:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return (_vm.isPC) ? _c('div', {
	    directives: [{
	      name: "attr",
	      rawName: "v-attr",
	      value: ({
	        afterpercent: _vm.afterPercent,
	        id: _vm.areaId,
	        layouttype: _vm.layoutType
	      }),
	      expression: "{afterpercent:afterPercent,id:areaId,layouttype:layoutType}"
	    }],
	    class: _vm.classStyle,
	    style: (_vm.areaStyle)
	  }, [_c('div', {
	    directives: [{
	      name: "attr",
	      rawName: "v-attr",
	      value: ({
	        id: _vm.areaIdContent
	      }),
	      expression: "{id:areaIdContent}"
	    }],
	    staticClass: "fill-layout-div",
	    class: _vm.paddingContentClass,
	    style: (_vm.contentStyle),
	    on: {
	      "scroll": _vm.areaScroll
	    }
	  }, [(this.title != '') ? [_c('div', {
	    staticClass: "fill-layout-div ",
	    class: _vm.titleContentClass,
	    staticStyle: {
	      "width": "100%",
	      "position": "absolute",
	      "top": "0px",
	      "left": "0px",
	      "overflow": "hidden"
	    },
	    style: (_vm.titleContentStyle)
	  }, [_c('div', {
	    staticClass: "fill-layout-div",
	    class: _vm.paddingTitleClass,
	    staticStyle: {
	      "width": "100%",
	      "height": "100%",
	      "overflow": "hidden"
	    }
	  }, [_c('table', {
	    staticStyle: {
	      "word-wrap": "break-word"
	    },
	    attrs: {
	      "width": "100%",
	      "height": "100%",
	      "border": "0",
	      "cellpadding": "0px",
	      "cellspacing": "0px"
	    }
	  }, [_c('tr', {
	    staticStyle: {
	      "height": "100%"
	    },
	    attrs: {
	      "width": "100%"
	    }
	  }, [_vm._m(0), _vm._v(" "), _c('td', {
	    staticClass: "filllayout-title",
	    staticStyle: {
	      "line-height": "{titleheight}px"
	    },
	    attrs: {
	      "align": "left",
	      "nowrap": ""
	    }
	  }, [_vm._t("extraIcon"), _vm._v(" " + _vm._s(_vm.title) + " ")], 2), _vm._v(" "), _c('td', {
	    attrs: {
	      "width": "100%",
	      "align": "center",
	      "valign": "middle"
	    }
	  }, [_vm._t("extra"), _vm._v(" "), (_vm.titlecollapse) ? _c('span', {
	    staticStyle: {
	      "float": "right",
	      "margin-right": "20px",
	      "cursor": "pointer"
	    }
	  }, [_c('hy-icon', {
	    attrs: {
	      "name": _vm.collapseArrow,
	      "size": 15
	    },
	    on: {
	      "click": _vm.collapseContent
	    }
	  })], 1) : _vm._e()], 2)])])])])] : _vm._e(), _vm._v(" "), (_vm.href != '' || _vm.lazy) ? _c('iframe', {
	    staticClass: "tab-page-bodyIframe",
	    attrs: {
	      "frameborder": "0",
	      "width": "100%",
	      "height": "100%",
	      "id": _vm.areaIframeId,
	      "src": _vm.src
	    }
	  }) : _vm._e(), _vm._v(" "), _vm._t("default")], 2)]) : _c('div', {
	    directives: [{
	      name: "attr",
	      rawName: "v-attr",
	      value: ({
	        id: _vm.areaIdContent
	      }),
	      expression: "{id:areaIdContent}"
	    }],
	    staticClass: "fill-layout-div",
	    style: (_vm.areaStyle),
	    on: {
	      "scroll": _vm.areaScroll
	    }
	  }, [(this.title != '') ? [_c('div', {
	    staticClass: "fill-layout-div ",
	    staticStyle: {
	      "width": "100%",
	      "overflow": "hidden"
	    }
	  }, [_c('div', {
	    staticClass: "fill-layout-div",
	    staticStyle: {
	      "width": "100%",
	      "height": "100%",
	      "overflow": "hidden"
	    }
	  }, [_c('table', {
	    staticStyle: {
	      "word-wrap": "break-word"
	    },
	    attrs: {
	      "width": "100%",
	      "height": "100%",
	      "border": "0",
	      "cellpadding": "0px",
	      "cellspacing": "0px"
	    }
	  }, [_c('tr', {
	    staticStyle: {
	      "height": "100%"
	    },
	    attrs: {
	      "width": "100%"
	    }
	  }, [_c('td', {
	    staticClass: "fillayout-separate"
	  }, [_c('div', {
	    staticClass: "filllayout-separate-div",
	    staticStyle: {
	      "height": "{titleheight}px"
	    }
	  }, [_vm._v(" ")])]), _vm._v(" "), _c('td', {
	    staticClass: "filllayout-title",
	    staticStyle: {
	      "line-height": "{titleheight}px"
	    },
	    attrs: {
	      "align": "left",
	      "nowrap": ""
	    }
	  }, [_vm._t("extraIcon"), _vm._v(" " + _vm._s(_vm.title) + " ")], 2), _vm._v(" "), _c('td', {
	    attrs: {
	      "width": "100%",
	      "align": "center",
	      "valign": "middle"
	    }
	  }, [_vm._t("extra")], 2)])])])])] : _vm._e(), _vm._v(" "), (_vm.href != '' || _vm.lazy) ? _c('iframe', {
	    staticClass: "tab-page-bodyIframe",
	    attrs: {
	      "frameborder": "0",
	      "width": "100%",
	      "height": "100%",
	      "id": _vm.areaIframeId,
	      "src": _vm.src
	    }
	  }) : _vm._e(), _vm._v(" "), _vm._t("default")], 2)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('td', {
	    staticClass: "fillayout-separate"
	  }, [_c('div', {
	    staticClass: "filllayout-separate-div",
	    staticStyle: {
	      "height": "{titleheight}px"
	    }
	  }, [_vm._v(" ")])])
	}]}

/***/ }

/******/ })
});
;