(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"), require("jQuery"));
	else if(typeof define === 'function' && define.amd)
		define("vuecomponent", ["vue", "jQuery"], factory);
	else if(typeof exports === 'object')
		exports["vuecomponent"] = factory(require("vue"), require("jQuery"));
	else
		root["vuecomponent"] = factory(root["Vue"], root["jQuery"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_24__) {
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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _index = __webpack_require__(48);

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
	  Cascader: _index2.default
	};

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
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
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _input = __webpack_require__(6);

	var _input2 = _interopRequireDefault(_input);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_input2.default.install = function (Vue) {
	  Vue.component(_input2.default.name, _input2.default);
	};

	exports.default = _input2.default;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(7),
	  /* template */
	  __webpack_require__(29),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)

	module.exports = Component.exports


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _emitter = __webpack_require__(8);

	var _emitter2 = _interopRequireDefault(_emitter);

	var _calcTextareaHeight = __webpack_require__(9);

	var _calcTextareaHeight2 = _interopRequireDefault(_calcTextareaHeight);

	var _inputDropdown = __webpack_require__(10);

	var _inputDropdown2 = _interopRequireDefault(_inputDropdown);

	var _class = __webpack_require__(22);

	var _jquery = __webpack_require__(24);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(25);

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
	    onIconClick: Function
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

	      if (that.ishistory) {
	        if (that.currentValue && that.currentValue !== "" && that.currentValue !== " ") {
	          var localData = that.localStorage.getItem(that.name);
	          if (localData) {
	            localData = JSON.parse(localData);
	            if (localData.indexOf(that.currentValue) == -1) {
	              localData.push(that.currentValue);
	              if (localData.length > 100) {
	                localData.splice(0, 1);
	              }
	              that.localStorage.setItem(that.name, JSON.stringify(localData));
	            }
	          } else {
	            var obj = JSON.stringify([that.currentValue]);
	            that.localStorage.setItem(that.name, obj);
	          }
	        }
	        that.searchList = [];

	        if (this.valueChangeFlag) {
	          this.runCurrentValueChange(this.currentValue);
	          this.valueChangeFlag = false;
	        }
	      }
	    },
	    inputSelect: function inputSelect() {
	      this.$refs.input.focus();
	    },
	    handleFocus: function handleFocus(ev) {
	      var _this2 = this;

	      if (ev.target.value && this.ishistory) {
	        this.hoverIndex = -1;
	        var historyData = JSON.parse(this.localStorage.getItem(this.name));
	        if (historyData && historyData.length > 0) {
	          this.searchList = [];
	          for (var i = 0; i < historyData.length; i++) {
	            if (ev.target.value == " " && this.searchList.indexOf(historyData[i]) == -1) {
	              this.searchList.push(historyData[i]);
	              continue;
	            }
	            if (historyData[i].indexOf(ev.target.value) != -1 && this.searchList.indexOf(historyData[i]) == -1) {
	              this.searchList.push(historyData[i]);
	            }
	          }
	        }
	        setTimeout(function () {
	          _this2.broadcast('input-dropdown', 'updatePopper');
	        }, 0);

	        if (this.currentValue.length == 0) {
	          this.searchList = [];
	          this.hoverIndex = -1;
	        }
	      }
	      this.$emit('focus', this.currentValue);

	      if (this.dispatchFocus) {
	        this.dispatch('form-item', 'el.form.focus');
	      }
	    },
	    handleKeydown: function handleKeydown(ev) {
	      this.$emit('keydown', ev.target.value, ev);
	    },
	    handleKeyup: function handleKeyup(ev) {
	      var _this3 = this;

	      if (ev.target.value && this.ishistory) {
	        this.currentValue = ev.target.value;
	        var historyData = JSON.parse(this.localStorage.getItem(this.name));
	        if (historyData && historyData.length > 0) {
	          this.searchList = [];
	          for (var i = 0; i < historyData.length; i++) {
	            if (ev.target.value == " " && this.searchList.indexOf(historyData[i]) == -1) {
	              this.searchList.push(historyData[i]);
	              continue;
	            }

	            if (historyData[i].indexOf(ev.target.value) == 0 && this.searchList.indexOf(historyData[i]) == -1) {
	              this.searchList.push(historyData[i]);
	            }
	          }
	        }

	        setTimeout(function () {
	          _this3.broadcast('input-dropdown', 'updatePopper');
	        }, 0);
	        if (this.currentValue.length == 0) {
	          this.hoverIndex = -1;
	          this.searchList = [];
	        }
	      }

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
	      var _this4 = this;

	      if (this.forminput) {
	        this.dispatch('form', 'setRecordValue', [this.name, this.currentValue]);
	      }
	      this.$emit('input', val);
	      setTimeout(function () {
	        _this4.$emit('change', val);
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

/***/ },
/* 8 */
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
/* 9 */
/***/ function(module, exports) {

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

	  var _calculateNodeStyling = calculateNodeStyling(targetNode);

	  var paddingSize = _calculateNodeStyling.paddingSize;
	  var borderSize = _calculateNodeStyling.borderSize;
	  var boxSizing = _calculateNodeStyling.boxSizing;
	  var contextStyle = _calculateNodeStyling.contextStyle;


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

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(11),
	  /* template */
	  __webpack_require__(23),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)

	module.exports = Component.exports


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vuePopper = __webpack_require__(12);

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

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vue = __webpack_require__(13);

	var _vue2 = _interopRequireDefault(_vue);

	var _popup = __webpack_require__(14);

	var _timers = __webpack_require__(19);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PopperJS = _vue2.default.prototype.$isServer ? function () {} : __webpack_require__(21);
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

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PopupManager = undefined;

	var _vue = __webpack_require__(13);

	var _vue2 = _interopRequireDefault(_vue);

	var _merge = __webpack_require__(15);

	var _merge2 = _interopRequireDefault(_merge);

	var _popupManager = __webpack_require__(16);

	var _popupManager2 = _interopRequireDefault(_popupManager);

	var _scrollbarWidth = __webpack_require__(18);

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

/***/ },
/* 15 */
/***/ function(module, exports) {

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

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vue = __webpack_require__(13);

	var _vue2 = _interopRequireDefault(_vue);

	var _dom = __webpack_require__(17);

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

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.isScroll = exports.getScrollContainer = exports.getStyle = exports.once = exports.off = exports.on = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.hasClass = hasClass;
	exports.addClass = addClass;
	exports.removeClass = removeClass;
	exports.setStyle = setStyle;

	var _vue = __webpack_require__(13);

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

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

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

	var _vue = __webpack_require__(13);

	var _vue2 = _interopRequireDefault(_vue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var scrollBarWidth = void 0;

	;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(20).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;

	// DOM APIs, for completeness

	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) { timeout.close(); };

	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
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

	// That's not how node.js implements it but the exposed api is the same.
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);

	  immediateIds[id] = true;

	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      // fn.call() is faster so we optimize for the common use-case
	      // @see http://jsperf.com/call-apply-segu
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      // Prevent ids from leaking
	      exports.clearImmediate(id);
	    }
	  });

	  return id;
	};

	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19).setImmediate, __webpack_require__(19).clearImmediate))

/***/ },
/* 20 */
/***/ function(module, exports) {

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

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _class = __webpack_require__(22);

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

/***/ },
/* 22 */
/***/ function(module, exports) {

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

/***/ },
/* 23 */
/***/ function(module, exports) {

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

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_24__;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(26);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(28)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./../../node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"extract\":true,\"remove\":true}!./../../node_modules/style-loader/index.js!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js?sourceMap!./input.less", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./../../node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"extract\":true,\"remove\":true}!./../../node_modules/style-loader/index.js!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js?sourceMap!./input.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(27)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 27 */
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
/* 28 */
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
/* 29 */
/***/ function(module, exports) {

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
	      _vm.contentalign ? 'el-input-' + _vm.contentalign : '', {
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
	      "minlength": _vm.minlength
	    },
	    domProps: {
	      "value": _vm._s(_vm.currentValue)
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
	      "autocomplete": _vm.autocomplete
	    },
	    domProps: {
	      "value": _vm._s(_vm.currentValue)
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
	      "autocomplete": _vm.autocomplete
	    },
	    domProps: {
	      "value": _vm._s(_vm.currentValue)
	    },
	    on: {
	      "focus": _vm.handleFocus,
	      "blur": _vm.handleBlur,
	      "keyup": _vm.handleKeyup,
	      "keydown": [_vm.handleKeydown, function($event) {
	        if (_vm._k($event.keyCode, "down", 40)) { return; }
	        $event.preventDefault();
	        _vm.navigateOptions('next')
	      }, function($event) {
	        if (_vm._k($event.keyCode, "up", 38)) { return; }
	        $event.preventDefault();
	        _vm.navigateOptions('prev')
	      }, function($event) {
	        if (_vm._k($event.keyCode, "enter", 13)) { return; }
	        $event.preventDefault();
	        _vm.selectOption($event)
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
	      "minlength": _vm.minlength
	    },
	    domProps: {
	      "value": _vm._s(_vm.currentValue)
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
	          _vm.changeData(itme)
	        }
	      }
	    }, [_vm._v("\n            " + _vm._s(itme) + "\n            "), _c('i', {
	      staticClass: "el-icon-close close",
	      on: {
	        "mousedown": function($event) {
	          $event.stopPropagation();
	          _vm.deleteItem(itme, index)
	        }
	      }
	    })])
	  }))]) : _vm._e()], 1), _vm._v(" "), (_vm.upload) ? _c('input', {
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

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _event = __webpack_require__(31);

	var clickoutsideContext = '@@clickoutsideContext';

	exports.default = {
	  bind: function bind(el, binding, vnode) {
	    var documentHandler = function documentHandler(e) {

	      if (!vnode.context || el.contains(e.target) || !vnode.context.popperElm || vnode.context.popperElm.contains(e.target)) return;
	      if (binding.expression) {
	        vnode.context[el[clickoutsideContext].methodName]();
	      } else {
	        el[clickoutsideContext].bindingFn();
	      }
	    };
	    el[clickoutsideContext] = {
	      documentHandler: documentHandler,
	      methodName: binding.expression,
	      bindingFn: binding.value
	    };
	    (0, _event.on)(document, 'click', documentHandler);
	    setTimeout(function () {
	      var elements = document.querySelectorAll('.el-popover');
	      if (elements != undefined) {
	        for (var i = 0; i < elements.length; i++) {
	          (0, _event.on)(elements[i], 'click', documentHandler);
	        }
	      }
	    }, 0);
	  },
	  update: function update(el, binding) {
	    el[clickoutsideContext].methodName = binding.expression;
	    el[clickoutsideContext].bindingFn = binding.value;
	  },
	  unbind: function unbind(el) {
	    (0, _event.off)(document, 'click', el[clickoutsideContext].documentHandler);
	  },
	  install: function install(Vue) {
	    Vue.directive('clickoutside', {
	      bind: this.bind,
	      unbind: this.unbind
	    });
	  }
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

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

/***/ },
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */
/***/ function(module, exports) {

	/* eslint-disable no-undefined,no-param-reassign,no-shadow */

	/**
	 * Throttle execution of a function. Especially useful for rate limiting
	 * execution of handlers on events like resize and scroll.
	 *
	 * @param  {Number}    delay          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
	 * @param  {Boolean}   noTrailing     Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
	 *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
	 *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
	 *                                    the internal counter is reset)
	 * @param  {Function}  callback       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
	 *                                    to `callback` when the throttled-function is executed.
	 * @param  {Boolean}   debounceMode   If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
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


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	/* eslint-disable no-undefined */

	var throttle = __webpack_require__(38);

	/**
	 * Debounce execution of a function. Debouncing, unlike throttling,
	 * guarantees that a function is only executed a single time, either at the
	 * very beginning of a series of calls, or at the very end.
	 *
	 * @param  {Number}   delay         A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
	 * @param  {Boolean}  atBegin       Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
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


/***/ },
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var HyCascader = __webpack_require__(49);

	HyCascader.install = function (Vue) {
	  Vue.component(HyCascader.name, HyCascader);
	};

	module.exports = HyCascader;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(50),
	  /* template */
	  __webpack_require__(76),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)

	module.exports = Component.exports


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _emitter = __webpack_require__(8);

	var _emitter2 = _interopRequireDefault(_emitter);

	var _input = __webpack_require__(5);

	var _input2 = _interopRequireDefault(_input);

	var _option = __webpack_require__(51);

	var _option2 = _interopRequireDefault(_option);

	var _filteroption = __webpack_require__(56);

	var _filteroption2 = _interopRequireDefault(_filteroption);

	var _cascaderDropdown = __webpack_require__(59);

	var _cascaderDropdown2 = _interopRequireDefault(_cascaderDropdown);

	var _filterCascaderDropdown = __webpack_require__(62);

	var _filterCascaderDropdown2 = _interopRequireDefault(_filterCascaderDropdown);

	var _debounce = __webpack_require__(39);

	var _debounce2 = _interopRequireDefault(_debounce);

	var _clickoutside = __webpack_require__(30);

	var _clickoutside2 = _interopRequireDefault(_clickoutside);

	var _class = __webpack_require__(22);

	var _map = __webpack_require__(65);

	var _framework = __webpack_require__(66);

	var _locale = __webpack_require__(67);

	var _locale2 = _interopRequireDefault(_locale);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(72);
	__webpack_require__(74);

	exports.default = {
	  mixins: [_emitter2.default, _locale2.default],

	  name: 'HyCascader',

	  componentName: 'cascader',

	  computed: {
	    iconClass: function iconClass() {
	      return this.showCloseIcon ? 'circle-close' : this.remote && this.filterable ? '' : 'caret-bottom';
	    },
	    filterStyle: function filterStyle() {
	      if (this.labelBackground === 'white') {
	        var inputWidth = this.inputWidth - 60 + 'px';
	        return "color:black;background-color:white;width:" + inputWidth;
	      } else if (this.labelBackground === 'transparent') {
	        return "color:transparent;background-color:transparent;width:" + inputWidth;
	      }
	    },
	    debounce: function debounce() {
	      return this.remote ? 300 : 0;
	    },
	    showCloseIcon: function showCloseIcon() {
	      var criteria = this.clearable && this.inputHovering && this.selectedLabel != "";
	      if (!this.$el) return false;

	      var icon = this.$el.querySelector('.el-input__icon__select');
	      if (icon) {
	        if (criteria) {
	          icon.addEventListener('click', this.deleteSelected);
	          (0, _class.addClass)(icon, 'is-show-close');
	        } else {
	          icon.removeEventListener('click', this.deleteSelected);
	          (0, _class.removeClass)(icon, 'is-show-close');
	        }
	      }
	      return criteria;
	    },
	    nodataText: function nodataText() {

	      if (this.filtervisible) {
	        if (this.filterData.length === 0) {
	          return this.t('el.cascader.noMatch');
	        }
	      }
	      return false;
	    }
	  },

	  components: {
	    ElInput: _input2.default,
	    ElSelectMenu: _cascaderDropdown2.default,
	    HyOption: _option2.default,
	    HyFilteroption: _filteroption2.default,
	    HyFilterSelectMenu: _filterCascaderDropdown2.default
	  },

	  directives: { Clickoutside: _clickoutside2.default },

	  props: {
	    name: String,
	    value: {
	      type: String,
	      default: ''
	    },
	    retriever: {
	      type: String,
	      default: ''
	    },
	    upload: {
	      type: Boolean,
	      default: false
	    },
	    id: {
	      type: String,
	      default: ''
	    },
	    rightfilter: {
	      type: Boolean,
	      default: false
	    },
	    rootcode: {
	      type: String,
	      default: ''
	    },
	    data: {
	      type: [Array],
	      default: function _default() {
	        return [];
	      }
	    },
	    separator: {
	      type: String,
	      default: ';'
	    },
	    expandTrigger: {
	      type: String,
	      default: 'click'
	    },
	    changeonselect: {
	      type: Boolean,
	      default: false
	    },
	    showlastlevellabel: {
	      type: Boolean,
	      default: false
	    },
	    size: {
	      type: String,
	      default: 'small'
	    },
	    clearable: Boolean,
	    filterable: {
	      type: Boolean,
	      default: true
	    },
	    readonly: {
	      type: Boolean,
	      default: false
	    },
	    rootvisible: {
	      type: Boolean,
	      default: true
	    },
	    placeholder: {
	      type: String,
	      default: ''
	    },
	    visible_all: {
	      type: Boolean,
	      default: true
	    }
	  },

	  data: function data() {
	    return {
	      options: [],
	      dropnameItems: [],
	      selected: [],
	      isSelect: true,
	      inputLength: 20,
	      inputWidth: 0,
	      valueChangeBySelected: false,
	      cachedPlaceHolder: '',
	      optionsCount: 0,
	      filteredOptionsCount: 0,
	      dropdownUl: null,
	      visible: false,
	      filtervisible: false,
	      selectedInit: false,
	      oneLevelData: [],
	      twoLevelData: [],
	      threeLevelData: [],
	      fourLevelData: [],
	      fiveLevelData: [],
	      sixLevelData: [],
	      sevenLevelData: [],
	      filterData: [],
	      levelCount: 7,
	      selectedLabel: '',

	      addOnlyOptionToSelected: false,
	      queryLabel: '',
	      hoverIndex: -1,
	      query: '',
	      labelBackground: "white",
	      voidRemoteQuery: false,
	      bottomOverflowBeforeHidden: 0,
	      optionsAllDisabled: false,
	      inputHovering: false,
	      lastClickIsLeaf: true,
	      currentPlaceholder: '',
	      itemHeight: 30,
	      unModelValue: "" };
	  },


	  watch: {
	    placeholder: function placeholder(val) {
	      this.currentPlaceholder = val;
	    },
	    value: function value(val) {
	      if (this.valueChangeBySelected) {
	        this.valueChangeBySelected = false;
	        return;
	      }
	      this.setCascaderByValue(this.value);
	    },
	    selected: function selected(val) {
	      var _this = this;

	      if (this.addOnlyOptionToSelected) {
	        this.addOnlyOptionToSelected = false;
	        return;
	      }

	      if (this.selectedInit) {
	        this.selectedInit = false;
	        return;
	      }

	      this.valueChangeBySelected = true;
	      if (val == "") {
	        this.setFirstCascadeOption("");
	        this.emptyOtherLevelOption();
	        this.$emit('input', "");
	        this.unModelValue = "";
	        setTimeout(function () {
	          _this.$emit('change', "");
	        }, 0);
	      } else {

	        var selectedValue = this.getSelectedValueByOption(val);
	        var leaf = val[val.length - 1].leaf;
	        if (leaf || this.changeonselect) {
	          this.$emit('input', selectedValue);
	          this.unModelValue = selectedValue;
	          setTimeout(function () {
	            _this.$emit('change', selectedValue);
	          }, 0);
	        }
	      }
	    },
	    query: function query(val) {

	      if (val == '') {
	        return;
	      }

	      this.filterData = [];

	      for (var i = 0; i < this.labelPath.length; i++) {
	        if (this.labelPath[i].toUpperCase().indexOf(val.toUpperCase()) > -1 || this.valuePath[i].toUpperCase().indexOf(val.toUpperCase()) > -1 || this.assistPath[i].toUpperCase().indexOf(val.toUpperCase()) > -1) {
	          var obj = {};
	          obj.index = i;
	          obj.label = this.labelPath[i];
	          this.filterData.push(obj);
	        }
	      }
	    },
	    visible: function visible(val) {

	      if (!val) {
	        this.broadcast('cascader-dropdown', 'destroyPopper');
	        if (this.labelBackground === 'transparent') {} else {}
	      } else {

	        this.broadcast('cascader-dropdown', 'updatePopper');
	        this.setUlScrollTop();
	      }
	    },
	    filtervisible: function filtervisible(val) {
	      if (!val) {
	        this.broadcast('filter-cascader-dropdown', 'destroyPopper');
	      } else {
	        this.broadcast('filter-cascader-dropdown', 'updatePopper');
	      }
	    }
	  },

	  methods: {
	    doDestroy: function doDestroy() {
	      this.$refs.popper.doDestroy();
	      if (this.id != "") {
	        window[this.id] = null;
	        delete window[this.id];
	      }
	    },
	    handleClose: function handleClose() {
	      this.visible = false;
	      this.filtervisible = false;

	      if (!this.changeonselect && !this.lastClickIsLeaf) {
	        this.selected = [];
	        if (this.unModelValue != "") {
	          var valueArr = this.unModelValue.split(this.separator);
	          for (var i = 0; i < valueArr.length; i++) {
	            this.addOptionToSelected(this.cascaderMap.get(valueArr[i]));
	          }
	        } else {
	          this.addOnlyOptionToSelected = true;
	        }

	        this.setFirstCascadeOption(this.unModelValue);


	        if (this.unModelValue != "") {
	          this.setNotFirstCascaderOption(this.unModelValue);
	        } else {
	          this.emptyOtherLevelOption();
	        }

	        this.lastClickIsLeaf = true;
	      }
	    },
	    toggleLastOptionHitState: function toggleLastOptionHitState(hit) {
	      if (!Array.isArray(this.selected)) return;
	      var option = this.selected[this.selected.length - 1];
	      if (!option) return;

	      if (hit === true || hit === false) {
	        option.hitState = hit;
	        return hit;
	      }

	      option.hitState = !option.hitState;
	      return option.hitState;
	    },
	    deletePrevTag: function deletePrevTag(e) {
	      if (e.target.value.length <= 0 && !this.toggleLastOptionHitState()) {
	        this.selected.pop();
	      }
	    },
	    managePlaceholder: function managePlaceholder() {
	      if (this.currentPlaceholder !== '') {
	        this.currentPlaceholder = this.$refs.input.value ? '' : this.cachedPlaceHolder;
	      }
	    },
	    resetInputState: function resetInputState(e) {
	      if (e.keyCode !== 8) this.toggleLastOptionHitState(false);
	      this.inputLength = this.$refs.input.value.length * 15 + 20;
	    },
	    handleFilterOptionSelect: function handleFilterOptionSelect(index) {
	      var _this2 = this;

	      this.valueChangeBySelected = true;
	      this.$emit('input', this.valuePath[index]);
	      this.unModelValue = this.valuePath[index];
	      setTimeout(function () {
	        _this2.$emit('change', _this2.valuePath[index]);
	      }, 0);
	      this.setCascaderByValue(this.valuePath[index]);
	    },
	    setCascaderByValue: function setCascaderByValue(val) {
	      var _this3 = this;

	      if (val == undefined) {
	        val = "";
	      }
	      this.setFirstCascadeOption(val);

	      if (val == "") {
	        this.selectedLabel = "";

	        this.setNotFirstCascaderOption(val);
	        this.$nextTick(function () {
	          _this3.selected = [];
	        });
	        return;
	      }
	      this.setNotFirstCascaderOption(val);
	      this.labelBackground = "white";
	      this.filtervisible = false;
	      this.query = "";

	      this.$nextTick(function () {
	        _this3.selected = [];
	        var valueArr = val.split(_this3.separator);
	        for (var i = 0; i < valueArr.length; i++) {
	          _this3.addOptionToSelected(_this3.cascaderMap.get(valueArr[i]));
	        }
	      });
	    },
	    handleChildren: function handleChildren(code) {
	      var children = this.cascaderChildrenMap.get(code);
	      var level = this.cascaderMap.get(code).level;

	      var childernData = [];
	      for (var i = 0; i < children.length; i++) {
	        children[i].leaf = this.cascaderMap.get(children[i].code).leaf;
	        children[i].selected = false;
	        childernData.push(children[i]);
	      }

	      if (level == 1) {
	        this.emptyOptionSelect(this.twoLevelData);
	        this.emptyOptionSelect(this.threeLevelData);
	        this.emptyOptionSelect(this.fourLevelData);
	        this.emptyOptionSelect(this.fiveLevelData);
	        this.emptyOptionSelect(this.sixLevelData);
	        this.emptyOptionSelect(this.sevenLevelData);

	        this.twoLevelData = childernData;
	        this.threeLevelData = [];
	        this.fourLevelData = [];
	        this.fiveLevelData = [];
	        this.sixLevelData = [];
	        this.sevenLevelData = [];
	      } else if (level == 2) {

	        this.emptyOptionSelect(this.threeLevelData);
	        this.emptyOptionSelect(this.fourLevelData);
	        this.emptyOptionSelect(this.fiveLevelData);
	        this.emptyOptionSelect(this.sixLevelData);
	        this.emptyOptionSelect(this.sevenLevelData);

	        this.threeLevelData = childernData;
	        this.fourLevelData = [];
	        this.fiveLevelData = [];
	        this.sixLevelData = [];
	        this.sevenLevelData = [];
	      } else if (level == 3) {

	        this.emptyOptionSelect(this.fourLevelData);
	        this.emptyOptionSelect(this.fiveLevelData);
	        this.emptyOptionSelect(this.sixLevelData);
	        this.emptyOptionSelect(this.sevenLevelData);

	        this.fourLevelData = childernData;
	        this.fiveLevelData = [];
	        this.sixLevelData = [];
	        this.sevenLevelData = [];
	      } else if (level == 4) {

	        this.emptyOptionSelect(this.fiveLevelData);
	        this.emptyOptionSelect(this.sixLevelData);
	        this.emptyOptionSelect(this.sevenLevelData);

	        this.fiveLevelData = childernData;
	        this.sixLevelData = [];
	        this.sevenLevelData = [];
	      } else if (level == 5) {

	        this.emptyOptionSelect(this.sixLevelData);
	        this.emptyOptionSelect(this.sevenLevelData);

	        this.sixLevelData = childernData;
	        this.sevenLevelData = [];
	      } else if (level == 6) {
	        this.emptyOptionSelect(this.sevenLevelData);
	        this.sevenLevelData = childernData;
	      }

	      this.setUlScrollTop();
	    },
	    emptyOptionSelect: function emptyOptionSelect(option) {
	      for (var i = 0; i < option.length; i++) {
	        option[i].selected = false;
	      }
	    },
	    handleOptionSelect: function handleOptionSelect(option) {
	      var leaf = this.cascaderMap.get(option.code).leaf;
	      var level = this.cascaderMap.get(option.code).level;
	      this.setOptionSelect(level, option.code);
	      if (leaf) {
	        this.visible = false;
	        this.lastClickIsLeaf = true;
	      } else {
	        this.lastClickIsLeaf = false;
	      }

	      var me = this;
	      function _deleteSurplusSelected(index) {
	        if (me.selected.length >= index + 1) {
	          me.selected.splice(index, me.selected.length - 1);
	        }
	      }

	      if (level < this.levelCount) {
	        _deleteSurplusSelected(level);
	      }
	      var optionIndex = -1;
	      this.selected.forEach(function (item, index) {
	        if (item === option || item.code === option.code) {
	          optionIndex = index;
	        }
	      });

	      if (optionIndex == -1) {
	        if (this.selected.length >= level) {
	          this.selected.splice(level - 1, 1, option);
	        } else {
	          this.selected.push(option);
	        }
	      }

	      if (leaf || this.changeonselect) {
	        this.selectedLabel = "";
	        this.query = '';
	        this.labelBackground = "white";
	        this.selectedLabel = this.getSelectedLabelByOption(this.selected);
	      }
	    },
	    setOptionSelect: function setOptionSelect(level, code) {

	      var option = [];
	      if (level == 1) {
	        option = this.oneLevelData;
	      } else if (level == 2) {
	        option = this.twoLevelData;
	      } else if (level == 3) {
	        option = this.threeLevelData;
	      } else if (level == 4) {
	        option = this.fourLevelData;
	      } else if (level == 5) {
	        option = this.fiveLevelData;
	      } else if (level == 6) {
	        option = this.sixLevelData;
	      } else if (level == 7) {
	        option = this.sevenLevelData;
	      }

	      for (var i = 0; i < option.length; i++) {
	        if (option[i].code == code) {
	          option[i].selected = true;
	        } else {
	          option[i].selected = false;
	        }
	      }
	    },
	    onInputChange: function onInputChange() {
	      if (this.filterable) {
	        if (this.labelBackground === 'white') {
	          this.visible = false;
	          this.labelBackground = 'transparent';
	        }
	        if (this.query != "") {
	          this.filtervisible = true;
	        } else {
	          this.filtervisible = false;

	          this.labelBackground = "white";
	        }
	      }
	    },
	    addOptionToValue: function addOptionToValue(option, init) {

	      if (this.selected.indexOf(option) === -1) {
	        this.selectedInit = !!init;
	        this.selected.push(option);
	      }
	    },
	    addOptionToSelected: function addOptionToSelected(option) {
	      var optionIndex = -1;
	      this.selected.forEach(function (item, index) {
	        if (item.code === option.code) {
	          optionIndex = index;
	        }
	      });

	      if (optionIndex == -1) {
	        this.selected.push(option);
	        this.addOnlyOptionToSelected = true;
	      }
	    },
	    setUlScrollTop: function setUlScrollTop() {
	      var _this4 = this;

	      this.$nextTick(function () {
	        var ulHeight = _this4.$refs.oneUl.clientHeight;

	        if (_this4.unModelValue == "") {
	          return;
	        }

	        if (_this4.unModelValue == undefined) {
	          return;
	        }
	        var valueArr = _this4.unModelValue.split(";");
	        for (var i = 0; i < valueArr.length; i++) {
	          var index = _this4.cascaderMap.get(valueArr[i]).index + 1;
	          var maxShowCount = ulHeight / _this4.itemHeight;
	          var diff = index - maxShowCount;
	          if (diff > 0) {
	            if (i == 0) {
	              if (_this4.$refs.oneUl != undefined) {
	                _this4.$refs.oneUl.scrollTop = diff * _this4.itemHeight + 60;
	              }
	            } else if (i == 1) {
	              if (_this4.$refs.twoUl != undefined) {
	                _this4.$refs.twoUl.scrollTop = diff * _this4.itemHeight + 60;
	              }
	            } else if (i == 2) {
	              if (_this4.$refs.threeUl != undefined) {
	                _this4.$refs.threeUl.scrollTop = diff * _this4.itemHeight + 60;
	              }
	            } else if (i == 3) {
	              if (_this4.$refs.fourUl != undefined) {
	                _this4.$refs.fourUl.scrollTop = diff * _this4.itemHeight + 60;
	              }
	            } else if (i == 4) {
	              if (_this4.$refs.fiveUl != undefined) {
	                _this4.$refs.fiveUl.scrollTop = diff * _this4.itemHeight + 60;
	              }
	            } else if (i == 5) {
	              if (_this4.$refs.sixUl != undefined) {
	                _this4.$refs.sixUl.scrollTop = diff * _this4.itemHeight + 60;
	              }
	            } else if (i == 6) {
	              if (_this4.$refs.sevenUl != undefined) {
	                _this4.$refs.sevenUl.scrollTop = diff * _this4.itemHeight + 60;
	              }
	            }
	          }
	        }
	      });
	    },
	    getSelectedValueByOption: function getSelectedValueByOption(val) {
	      var retVal = "";
	      for (var i = 0; i < val.length; i++) {
	        if (i == val.length - 1) {
	          retVal += val[i].code;
	        } else {
	          retVal = retVal + val[i].code + this.separator;
	        }
	      }
	      return retVal;
	    },
	    getSelectedLabelByOption: function getSelectedLabelByOption(val) {
	      var retVal = "";
	      if (this.showlastlevellabel) {
	        retVal = val[val.length - 1].label;
	      } else {
	        for (var i = 0; i < val.length; i++) {
	          if (i == val.length - 1) {
	            retVal += val[i].label;
	          } else {
	            retVal = retVal + val[i].label + "/";
	          }
	        }
	      }

	      return retVal;
	    },
	    getSelectedLabelByValue: function getSelectedLabelByValue(val) {
	      if (val == null) {
	        val = "";
	      }
	      var valueArr = val.split(this.separator);
	      var retVal = "";
	      if (this.showlastlevellabel) {
	        if (val != "" && this.cascaderMap.get(valueArr[valueArr.length - 1]) == undefined) {
	          console.log("v-model 请设定正确的初始值！");
	        }
	        if (this.cascaderMap.get(valueArr[valueArr.length - 1]) != undefined) {
	          retVal = this.cascaderMap.get(valueArr[valueArr.length - 1]).label;
	        }
	      } else {
	        for (var i = 0; i < valueArr.length; i++) {
	          if (i == valueArr.length - 1) {
	            if (val != "" && this.cascaderMap.get(valueArr[i]) == undefined) {
	              console.log("v-model 请设定正确的初始值！");
	            }
	            if (this.cascaderMap.get(valueArr[i]) != undefined) {
	              retVal += this.cascaderMap.get(valueArr[i]).label;
	            }
	          } else {
	            if (val != "" && this.cascaderMap.get(valueArr[i]) == undefined) {
	              console.log("v-model 请设定正确的初始值！");
	            }
	            retVal = retVal + this.cascaderMap.get(valueArr[i]).label + "/";
	          }
	        }
	      }

	      return retVal;
	    },
	    setFirstCascadeOption: function setFirstCascadeOption(val) {
	      if (val == null) {
	        val = "";
	      }
	      this.oneLevelData = [];
	      for (var i = 0; i < this.dataValue.length; i++) {
	        var option = this.dataValue[i];
	        option.leaf = true;
	        if (this.dataValue[i].children != undefined && this.dataValue[i].children.length > 0) {
	          option.leaf = false;
	        }
	        this.oneLevelData.push(option);
	        if (val == "") {
	          this.setIninOptionSelected(this.oneLevelData, "");
	        } else {
	          this.setIninOptionSelected(this.oneLevelData, val.split(this.separator)[0]);
	        }
	      }
	    },
	    setNotFirstCascaderOption: function setNotFirstCascaderOption(val) {
	      if (val == undefined) {
	        val = "";
	      }
	      this.emptyOtherLevelOption();
	      this.selectedLabel = this.getSelectedLabelByValue(val);
	      var valueArr = val.split(this.separator);
	      for (var i = 1; i < valueArr.length; i++) {
	        if (i == 1) {
	          this.twoLevelData = this.cascaderChildrenMap.get(valueArr[i - 1]);
	          this.setChildrenLeaf(this.twoLevelData);
	          this.setIninOptionSelected(this.twoLevelData, valueArr[i]);
	        } else if (i == 2) {
	          this.threeLevelData = this.cascaderChildrenMap.get(valueArr[i - 1]);
	          this.setChildrenLeaf(this.threeLevelData);
	          this.setIninOptionSelected(this.threeLevelData, valueArr[i]);
	        } else if (i == 3) {
	          this.fourLevelData = this.cascaderChildrenMap.get(valueArr[i - 1]);
	          this.setChildrenLeaf(this.fourLevelData);
	          this.setIninOptionSelected(this.fourLevelData, valueArr[i]);
	        } else if (i == 4) {
	          this.fiveLevelData = this.cascaderChildrenMap.get(valueArr[i - 1]);
	          this.setChildrenLeaf(this.fiveLevelData);
	          this.setIninOptionSelected(this.fiveLevelData, valueArr[i]);
	        } else if (i == 5) {
	          this.sixLevelData = this.cascaderChildrenMap.get(valueArr[i - 1]);
	          this.setChildrenLeaf(this.sixLevelData);
	          this.setIninOptionSelected(this.sixLevelData, valueArr[i]);
	        } else if (i == 6) {
	          this.sevenLevelData = this.cascaderChildrenMap.get(valueArr[i - 1]);
	          this.setChildrenLeaf(this.sevenLevelData);
	          this.setIninOptionSelected(this.sevenLevelData, valueArr[i]);
	        }
	      }
	    },
	    emptyOtherLevelOption: function emptyOtherLevelOption() {
	      this.twoLevelData = [];
	      this.threeLevelData = [];
	      this.fourLevelData = [];
	      this.fiveLevelData = [];
	      this.sixLevelData = [];
	      this.sevenLevelData = [];
	    },
	    setChildrenLeaf: function setChildrenLeaf(children) {
	      for (var i = 0; i < children.length; i++) {
	        children[i].leaf = this.cascaderMap.get(children[i].code).leaf;
	      }
	    },
	    setIninOptionSelected: function setIninOptionSelected(children, code) {
	      for (var i = 0; i < children.length; i++) {
	        if (children[i].code == code) {
	          children[i].selected = true;
	        } else {
	          children[i].selected = false;
	        }
	      }
	    },
	    toggleMenu: function toggleMenu() {

	      if (!this.readonly) {
	        if (this.filtervisible) {
	          return;
	        }
	        if (this.filterable) {
	          this.$refs.reference.$el.querySelector('input').focus();
	        }
	        if (this.filterable) {
	          this.visible = true;
	        } else {
	          this.visible = !this.visible;
	        }
	      }
	    },
	    deleteSelected: function deleteSelected(event) {
	      var _this5 = this;

	      event.stopPropagation();
	      this.selected = [];
	      this.selectedLabel = '';
	      this.$emit('input', '');
	      this.unModelValue = "";
	      setTimeout(function () {
	        _this5.$emit('change', '');
	      }, 0);
	      this.visible = false;
	      this.$nextTick(function () {
	        _this5.valueChangeBySelected = false;
	      });
	    },
	    deleteTag: function deleteTag(event, tag) {
	      if (event.target.tagName === 'I') {
	        var index = this.selected.indexOf(tag);
	        if (index > -1) {
	          this.selected.splice(index, 1);
	        }
	        event.stopPropagation();
	      }
	    },
	    resetInputWidth: function resetInputWidth() {
	      this.inputWidth = this.$refs.reference.$el.getBoundingClientRect().width;
	    },
	    getSelectedLabel: function getSelectedLabel() {
	      return this.selectedLabel;
	    }
	  },

	  created: function created() {
	    var _this6 = this;

	    if (typeof $msie != 'undefined') {
	      if ($msie) {
	        this.itemHeight = 28;
	      }
	    }

	    if (this.id != "") {
	      window[this.id] = this;
	    }
	    this.cascaderChildrenMap = new _map.HyMap();
	    this.cascaderMap = new _map.HyMap();
	    this.valuePath = [];
	    this.labelPath = [];
	    this.assistPath = [];
	    this.levelData = [];
	    var me = this;
	    function getPath(data, level, valuepath, labelpath, assistpath) {
	      for (var i = 0; i < data.length; i++) {
	        if (level == 1) {
	          valuepath = "";
	          labelpath = "";
	          assistpath = "";
	        }
	        var path1 = valuepath + me.separator + data[i].code;
	        var path2 = labelpath + "/" + data[i].label;
	        var path3 = assistpath + "/" + data[i].assist;
	        if (data[i].children != undefined && data[i].children.length > 0 || data[i].children != undefined && data[i].children.length == undefined) {
	          var x = level + 1;
	          var obj = {};
	          obj.level = level;
	          obj.leaf = false;
	          obj.code = data[i].code;
	          obj.label = data[i].label;
	          obj.index = i;
	          me.cascaderMap.set(data[i].code, obj);
	          if (me.changeonselect) {
	            me.valuePath.push(path1.substring(1, path1.length));
	            me.labelPath.push(path2.substring(1, path2.length));
	            me.assistPath.push(path3.substring(1, path3.length));
	          }

	          if (data[i].children.length == undefined) {
	            me.cascaderChildrenMap.set(data[i].code, [data[i].children]);
	            getPath([data[i].children], x, path1, path2, path3);
	          } else {
	            me.cascaderChildrenMap.set(data[i].code, data[i].children);
	            getPath(data[i].children, x, path1, path2, path3);
	          }
	        } else {
	          me.valuePath.push(path1.substring(1, path1.length));
	          me.labelPath.push(path2.substring(1, path2.length));
	          me.assistPath.push(path3.substring(1, path3.length));
	          me.cascaderChildrenMap.set(data[i].code, "");
	          var obj = {};
	          obj.level = level;
	          obj.leaf = true;
	          obj.label = data[i].label;
	          obj.code = data[i].code;
	          obj.index = i;
	          me.cascaderMap.set(data[i].code, obj);
	        }
	      }
	    }

	    var me = this;
	    if (this.retriever != "") {
	      var urlPath = "";
	      if (typeof $$pageContextPath != "undefined") {
	        urlPath = $$pageContextPath;
	      } else {
	        urlPath = $$ContextPath.webContext;
	      }
	      $.ajax({
	        type: "post",
	        url: urlPath + "framework/treeview.do",
	        data: {
	          retriever: this.retriever,
	          expandLevel: 7,
	          rightfilter: this.rightfilter,
	          rootVisible: this.rootvisible,
	          rootcode: this.rootcode,
	          rootCode: this.rootcode
	        },
	        error: function error() {
	          $.alert("进行连接信息传递出错\n");
	        },
	        async: false,
	        success: function success(data) {
	          data = data.replace('<?xml version="1.0" encoding="utf-8"?>', "");
	          var s = (0, _framework.toXmlDom)(data);
	          var jsonData = (0, _framework.xmlToJson)(s);
	          if (me.rootvisible) {
	            me.dataValue = [jsonData];
	          } else {
	            if (!(jsonData.children instanceof Array)) {
	              me.dataValue = [jsonData.children];
	            } else {
	              me.dataValue = jsonData.children;
	            }
	          }
	          getPath(me.dataValue, 1, "", "", "");
	        }

	      });
	    } else {
	      this.dataValue = this.data;
	      getPath(this.dataValue, 1, "", "", "");
	    }

	    this.unModelValue = this.value;

	    this.setFirstCascadeOption(this.value);

	    if (this.value != "") {
	      this.setNotFirstCascaderOption(this.value);
	    }

	    this.cachedPlaceHolder = this.currentPlaceholder = this.placeholder;
	    this.debouncedOnInputChange = (0, _debounce2.default)(this.debounce, function () {
	      _this6.onInputChange();
	    });

	    this.$on('handleOptionClick', this.handleOptionSelect);
	    this.$on('handleChildren', this.handleChildren);
	    this.$on('filterOptionClick', this.handleFilterOptionSelect);
	  },
	  mounted: function mounted() {
	    var _this7 = this;

	    this.$nextTick(function () {
	      if (_this7.value != "" && _this7.value != null) {
	        var valueArr = _this7.value.split(_this7.separator);
	        var k = -1;
	        for (var i = 0; i < valueArr.length; i++) {
	          if (_this7.cascaderMap.get(valueArr[i]) != undefined) {
	            _this7.addOptionToSelected(_this7.cascaderMap.get(valueArr[i]));
	            k = i;
	          }
	        }
	        if (k == -1) {
	          _this7.query = _this7.value;
	          _this7.labelBackground = "transparent";
	        }
	      }
	    });
	  },
	  destroyed: function destroyed() {}
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(52),
	  /* template */
	  __webpack_require__(55),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)

	module.exports = Component.exports


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _emitter = __webpack_require__(8);

	var _emitter2 = _interopRequireDefault(_emitter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(53);
	exports.default = {
	  mixins: [_emitter2.default],

	  name: 'el-option',

	  componentName: 'option',

	  props: {

	    items: {
	      type: [Array],
	      default: function _default() {
	        return [];
	      }
	    }

	  },

	  data: function data() {
	    return {
	      cascadeValue: '$empty'
	    };
	  },


	  computed: {
	    parent: function parent() {
	      var result = this.$parent;
	      while (!result.isSelect) {
	        result = result.$parent;
	      }
	      return result;
	    }
	  },

	  methods: {
	    isInSelectParent: function isInSelectParent(parentValue, val) {
	      var parentValueArr = parentValue.split(this.parent.separator);
	      var flag = false;
	      for (var i = 0; i < parentValueArr.length; i++) {
	        if (val == parentValueArr[i]) {
	          flag = true;
	          break;
	        }
	      }
	      return flag;
	    },
	    hoverItem: function hoverItem(index) {
	      if (!this.leaf && this.parent.expandTrigger === 'hover') {
	        this.dispatch('cascader', 'handleChildren', this.items[index].code);
	      }
	    },
	    selectOptionClick: function selectOptionClick(index) {

	      if (!this.leaf && this.parent.expandTrigger === 'click') {
	        this.dispatch('cascader', 'handleChildren', this.items[index].code);
	      }
	      this.dispatch('cascader', 'handleOptionClick', this.items[index]);
	    }
	  },

	  created: function created() {},
	  beforeDestroy: function beforeDestroy() {}
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(54);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(28)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./../../node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"extract\":true,\"remove\":true}!./../../node_modules/style-loader/index.js!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js?sourceMap!./option.less", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./../../node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"extract\":true,\"remove\":true}!./../../node_modules/style-loader/index.js!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js?sourceMap!./option.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(27)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', _vm._l((_vm.items), function(item, index) {
	    return _c('li', {
	      ref: "optionli",
	      refInFor: true,
	      staticClass: "ant-cascader-menu-item ",
	      class: {
	        'ant-cascader-menu-item-expand': !item.leaf, 'selected': item.selected
	      },
	      attrs: {
	        "code": index
	      },
	      on: {
	        "mouseenter": function($event) {
	          _vm.hoverItem(index)
	        },
	        "click": function($event) {
	          $event.stopPropagation();
	          _vm.selectOptionClick(index)
	        }
	      }
	    }, [_vm._t("default", [_c('span', [_vm._v(_vm._s(item.label) + " ")])])], 2)
	  }))
	},staticRenderFns: []}

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(57),
	  /* template */
	  __webpack_require__(58),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)

	module.exports = Component.exports


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _emitter = __webpack_require__(8);

	var _emitter2 = _interopRequireDefault(_emitter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(53);
	exports.default = {
	  mixins: [_emitter2.default],

	  name: 'filteroption',

	  componentName: 'filteroption',

	  props: {
	    items: {
	      type: [Array],
	      default: function _default() {
	        return [];
	      }
	    }
	  },

	  data: function data() {
	    return {};
	  },


	  methods: {
	    selectOptionClick: function selectOptionClick(index) {
	      this.dispatch('cascader', 'filterOptionClick', index);
	    }
	  },

	  created: function created() {},
	  beforeDestroy: function beforeDestroy() {}
	};

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', _vm._l((_vm.items), function(item, index) {
	    return _c('li', {
	      staticClass: "ant-cascader-menu-item ",
	      on: {
	        "click": function($event) {
	          $event.stopPropagation();
	          _vm.selectOptionClick(item.index)
	        }
	      }
	    }, [_vm._t("default", [_c('span', [_vm._v(_vm._s(item.label))])])], 2)
	  }))
	},staticRenderFns: []}

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(60),
	  /* template */
	  __webpack_require__(61),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)

	module.exports = Component.exports


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vuePopper = __webpack_require__(12);

	var _vuePopper2 = _interopRequireDefault(_vuePopper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'cascader-dropdown',

	  componentName: 'cascader-dropdown',

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

	  methods: {},

	  watch: {
	    '$parent.inputWidth': function $parentInputWidth() {
	      this.minWidth = this.$parent.$el.getBoundingClientRect().width + 'px';
	    }
	  },

	  mounted: function mounted() {
	    this.referenceElm = this.$parent.$refs.reference.$el;
	    this.$parent.popperElm = this.popperElm = this.$el;
	    this.$on('updatePopper', this.updatePopper);
	    this.$on('destroyPopper', this.destroyPopper);
	  }
	};

/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "ant-cascader-menus  ant-cascader-menus-placement-bottomLeft",
	    style: ({
	      minWidth: _vm.minWidth
	    })
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(63),
	  /* template */
	  __webpack_require__(64),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)

	module.exports = Component.exports


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vuePopper = __webpack_require__(12);

	var _vuePopper2 = _interopRequireDefault(_vuePopper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'filter-cascader-dropdown',

	  componentName: 'filter-cascader-dropdown',

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

	  methods: {},

	  watch: {
	    '$parent.inputWidth': function $parentInputWidth() {
	      this.minWidth = this.$parent.$el.getBoundingClientRect().width + 'px';
	    }
	  },

	  mounted: function mounted() {
	    this.referenceElm = this.$parent.$refs.reference.$el;
	    this.$parent.popperElm = this.popperElm = this.$el;
	    this.$on('updatePopper', this.updatePopper);
	    this.$on('destroyPopper', this.destroyPopper);
	  }
	};

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "ant-cascader-menus  ant-cascader-menus-placement-bottomLeft",
	    style: ({
	      minWidth: _vm.minWidth
	    })
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}

/***/ },
/* 65 */
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
/* 66 */
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
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _locale = __webpack_require__(68);

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

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.i18n = exports.use = exports.t = undefined;

	var _zhCN = __webpack_require__(69);

	var _zhCN2 = _interopRequireDefault(_zhCN);

	var _vue = __webpack_require__(13);

	var _vue2 = _interopRequireDefault(_vue);

	var _deepmerge = __webpack_require__(70);

	var _deepmerge2 = _interopRequireDefault(_deepmerge);

	var _format = __webpack_require__(71);

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

/***/ },
/* 69 */
/***/ function(module, exports) {

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
	      set: "高级设置"
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
	      commonfunc: '添加自定义功能'
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
	    }
	  }
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports === 'object') {
	        module.exports = factory();
	    } else {
	        root.deepmerge = factory();
	    }
	}(this, function () {

	function isMergeableObject(val) {
	    var nonNullObject = val && typeof val === 'object'

	    return nonNullObject
	        && Object.prototype.toString.call(val) !== '[object RegExp]'
	        && Object.prototype.toString.call(val) !== '[object Date]'
	}

	function emptyTarget(val) {
	    return Array.isArray(val) ? [] : {}
	}

	function cloneIfNecessary(value, optionsArgument) {
	    var clone = optionsArgument && optionsArgument.clone === true
	    return (clone && isMergeableObject(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value
	}

	function defaultArrayMerge(target, source, optionsArgument) {
	    var destination = target.slice()
	    source.forEach(function(e, i) {
	        if (typeof destination[i] === 'undefined') {
	            destination[i] = cloneIfNecessary(e, optionsArgument)
	        } else if (isMergeableObject(e)) {
	            destination[i] = deepmerge(target[i], e, optionsArgument)
	        } else if (target.indexOf(e) === -1) {
	            destination.push(cloneIfNecessary(e, optionsArgument))
	        }
	    })
	    return destination
	}

	function mergeObject(target, source, optionsArgument) {
	    var destination = {}
	    if (isMergeableObject(target)) {
	        Object.keys(target).forEach(function (key) {
	            destination[key] = cloneIfNecessary(target[key], optionsArgument)
	        })
	    }
	    Object.keys(source).forEach(function (key) {
	        if (!isMergeableObject(source[key]) || !target[key]) {
	            destination[key] = cloneIfNecessary(source[key], optionsArgument)
	        } else {
	            destination[key] = deepmerge(target[key], source[key], optionsArgument)
	        }
	    })
	    return destination
	}

	function deepmerge(target, source, optionsArgument) {
	    var array = Array.isArray(source);
	    var options = optionsArgument || { arrayMerge: defaultArrayMerge }
	    var arrayMerge = options.arrayMerge || defaultArrayMerge

	    if (array) {
	        return Array.isArray(target) ? arrayMerge(target, source, optionsArgument) : cloneIfNecessary(source, optionsArgument)
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
	}

	return deepmerge

	}));


/***/ },
/* 71 */
/***/ function(module, exports) {

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

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(73);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(28)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./../../node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"extract\":true,\"remove\":true}!./../../node_modules/style-loader/index.js!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js?sourceMap!./select.less", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./../../node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"extract\":true,\"remove\":true}!./../../node_modules/style-loader/index.js!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js?sourceMap!./select.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(27)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(75);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(28)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./../../node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"extract\":true,\"remove\":true}!./../../node_modules/style-loader/index.js!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js?sourceMap!./base.less", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./../../node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"extract\":true,\"remove\":true}!./../../node_modules/style-loader/index.js!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js?sourceMap!./base.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(27)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 76 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    directives: [{
	      name: "clickoutside",
	      rawName: "v-clickoutside",
	      value: (_vm.handleClose),
	      expression: "handleClose"
	    }, {
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.visible_all),
	      expression: "visible_all"
	    }],
	    staticClass: "el-select el-cascader",
	    class: {
	      'is-small': _vm.size === 'small'
	    }
	  }, [_c('el-input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.query),
	      expression: "query"
	    }],
	    ref: "reference",
	    attrs: {
	      "type": "text",
	      "placeholder": _vm.currentPlaceholder,
	      "name": _vm.name,
	      "showhistory": false,
	      "lazy": false,
	      "readonly": _vm.readonly,
	      "funcreadonly": !_vm.filterable,
	      "icon": _vm.iconClass
	    },
	    domProps: {
	      "value": (_vm.query)
	    },
	    on: {
	      "input": function($event) {
	        _vm.query = $event
	      }
	    },
	    nativeOn: {
	      "click": function($event) {
	        _vm.toggleMenu($event)
	      },
	      "keyup": function($event) {
	        _vm.debouncedOnInputChange($event)
	      },
	      "keydown": [function($event) {
	        if (_vm._k($event.keyCode, "down", 40)) { return; }
	        $event.preventDefault();
	        _vm.navigateOptions('next')
	      }, function($event) {
	        if (_vm._k($event.keyCode, "up", 38)) { return; }
	        $event.preventDefault();
	        _vm.navigateOptions('prev')
	      }, function($event) {
	        if (_vm._k($event.keyCode, "enter", 13)) { return; }
	        $event.preventDefault();
	        _vm.selectOption($event)
	      }, function($event) {
	        if (_vm._k($event.keyCode, "esc", 27)) { return; }
	        $event.preventDefault();
	        _vm.visible = false
	      }, function($event) {
	        if (_vm._k($event.keyCode, "tab", 9)) { return; }
	        _vm.visible = false
	      }],
	      "mouseenter": function($event) {
	        _vm.inputHovering = true
	      },
	      "mouseleave": function($event) {
	        _vm.inputHovering = false
	      }
	    }
	  }), _vm._v(" "), _c('span', {
	    staticClass: "el-select-filter-label",
	    class: {
	      'is-disabled': _vm.readonly
	    },
	    style: (_vm.filterStyle),
	    attrs: {
	      "title": _vm.selectedLabel
	    },
	    on: {
	      "mouseenter": function($event) {
	        _vm.inputHovering = true
	      },
	      "mouseleave": function($event) {
	        _vm.inputHovering = false
	      },
	      "click": _vm.toggleMenu
	    }
	  }, [_vm._v(_vm._s(_vm.selectedLabel))]), _vm._v(" "), _c('transition', {
	    attrs: {
	      "name": "md-fade-bottom"
	    },
	    on: {
	      "after-leave": _vm.doDestroy
	    }
	  }, [_c('el-select-menu', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.visible),
	      expression: "visible"
	    }],
	    ref: "popper"
	  }, [(_vm.oneLevelData.length > 0) ? _c('ul', {
	    ref: "oneUl",
	    staticClass: "ant-cascader-menu"
	  }, [_c('hy-option', {
	    ref: "oneOption",
	    attrs: {
	      "items": _vm.oneLevelData
	    }
	  })], 1) : _vm._e(), _vm._v(" "), (_vm.twoLevelData.length > 0) ? _c('ul', {
	    ref: "twoUl",
	    staticClass: "ant-cascader-menu"
	  }, [_c('hy-option', {
	    ref: "twoOption",
	    attrs: {
	      "items": _vm.twoLevelData
	    }
	  })], 1) : _vm._e(), _vm._v(" "), (_vm.threeLevelData.length > 0) ? _c('ul', {
	    ref: "threeUl",
	    staticClass: "ant-cascader-menu"
	  }, [_c('hy-option', {
	    ref: "threeOption",
	    attrs: {
	      "items": _vm.threeLevelData
	    }
	  })], 1) : _vm._e(), _vm._v(" "), (_vm.fourLevelData.length > 0) ? _c('ul', {
	    ref: "fourUl",
	    staticClass: "ant-cascader-menu"
	  }, [_c('hy-option', {
	    ref: "fourOption",
	    attrs: {
	      "items": _vm.fourLevelData
	    }
	  })], 1) : _vm._e(), _vm._v(" "), (_vm.fiveLevelData.length > 0) ? _c('ul', {
	    ref: "fiveUl",
	    staticClass: "ant-cascader-menu"
	  }, [_c('hy-option', {
	    ref: "fiveOption",
	    attrs: {
	      "items": _vm.fiveLevelData
	    }
	  })], 1) : _vm._e(), _vm._v(" "), (_vm.sixLevelData.length > 0) ? _c('ul', {
	    ref: "sixUl",
	    staticClass: "ant-cascader-menu"
	  }, [_c('hy-option', {
	    ref: "sixOption",
	    attrs: {
	      "items": _vm.sixLevelData
	    }
	  })], 1) : _vm._e(), _vm._v(" "), (_vm.sevenLevelData.length > 0) ? _c('ul', {
	    ref: "sevenUl",
	    staticClass: "ant-cascader-menu"
	  }, [_c('hy-option', {
	    ref: "sevenOption",
	    attrs: {
	      "items": _vm.sevenLevelData
	    }
	  })], 1) : _vm._e()])], 1), _vm._v(" "), _c('transition', {
	    attrs: {
	      "name": "md-fade-bottom"
	    },
	    on: {
	      "after-leave": _vm.doDestroy
	    }
	  }, [_c('hy-filter-select-menu', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.filtervisible),
	      expression: "filtervisible"
	    }],
	    ref: "filterpopper"
	  }, [(_vm.filterData.length > 0) ? _c('ul', {
	    staticClass: "ant-cascader-menu filter"
	  }, [_c('hy-filteroption', {
	    ref: "filteroption",
	    attrs: {
	      "items": _vm.filterData
	    }
	  })], 1) : _vm._e()])], 1), _vm._v(" "), (_vm.nodataText) ? _c('div', {
	    staticClass: "el-select-dropdown__nodata"
	  }, [_vm._v(_vm._s(_vm.nodataText))]) : _vm._e(), _vm._v(" "), (_vm.upload) ? _c('input', {
	    attrs: {
	      "type": "hidden",
	      "name": _vm.name,
	      "upload": "true"
	    },
	    domProps: {
	      "value": _vm.unModelValue
	    }
	  }) : _c('input', {
	    attrs: {
	      "type": "hidden",
	      "name": _vm.name
	    },
	    domProps: {
	      "value": _vm.unModelValue
	    }
	  })], 1)
	},staticRenderFns: []}

/***/ }
/******/ ])
});
;