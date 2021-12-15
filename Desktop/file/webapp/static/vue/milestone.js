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

	var _index = __webpack_require__(532);

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
	  Milestone: _index2.default
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

/***/ 532:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _milestone = __webpack_require__(533);

	var _milestone2 = _interopRequireDefault(_milestone);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_milestone2.default.install = function (Vue) {
	  Vue.component(_milestone2.default.name, _milestone2.default);
	};

	module.exports = _milestone2.default;

/***/ },

/***/ 533:
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(534),
	  /* template */
	  __webpack_require__(535),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)

	module.exports = Component.exports


/***/ },

/***/ 534:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _props;

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	exports.default = {
	  name: "JtMilestone",

	  props: (_props = {
	    placeholder: {
	      type: String,
	      default: ""
	    }

	  }, _defineProperty(_props, "placeholder", {
	    type: String,
	    default: ""
	  }), _defineProperty(_props, "name", {
	    type: String,
	    default: ""
	  }), _defineProperty(_props, "value", {
	    type: Number
	  }), _defineProperty(_props, "readonly", Boolean), _props),
	  data: function data() {
	    return {
	      valueShowName: this.name + "_v",
	      valueShow: this.value,
	      valueData: this.value
	    };
	  },

	  methods: {
	    fieldToMilestone: function fieldToMilestone() {
	      if (this.valueShow == "") {
	        this.valueData = null;
	      } else {
	        this.valueData = parseFloat(this.valueShow).toFixed(3);
	      }
	      this.valueShow = this.toMilestone(this.valueData);
	    },
	    fieldToNumber: function fieldToNumber() {
	      this.valueShow = this.valueData;
	    },
	    toMilestone: function toMilestone(milestoneNum) {
	      var valueRela = milestoneNum;
	      if (valueRela == "" || valueRela == null || valueRela == "null") return "";
	      valueRela = valueRela.toString().trim();
	      if (!isNaN(valueRela)) {
	        return "K" + parseFloat(valueRela).toFixed(3).replace(".", "+");
	      } else {
	        return "";
	      }
	    }
	  },
	  mounted: function mounted() {
	    this.valueData = this.value;
	    this.valueShow = this.toMilestone(this.valueData);
	  }
	};

/***/ },

/***/ 535:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.valueShow),
	      expression: "valueShow"
	    }],
	    staticClass: "el-input__inner",
	    attrs: {
	      "placeholder": _vm.placeholder,
	      "name": _vm.valueShowName
	    },
	    domProps: {
	      "value": _vm._s(_vm.valueShow)
	    },
	    on: {
	      "focus": _vm.fieldToNumber,
	      "blur": _vm.fieldToMilestone,
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.valueShow = $event.target.value
	      }
	    }
	  }), _vm._v(" "), _c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.valueData),
	      expression: "valueData"
	    }],
	    attrs: {
	      "type": "hidden",
	      "name": _vm.name,
	      "upload": "true"
	    },
	    domProps: {
	      "value": _vm._s(_vm.valueData)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.valueData = $event.target.value
	      }
	    }
	  })])
	},staticRenderFns: []}

/***/ }

/******/ })
});
;