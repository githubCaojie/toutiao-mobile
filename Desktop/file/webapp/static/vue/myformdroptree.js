(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"), require("jQuery"));
	else if(typeof define === 'function' && define.amd)
		define("vuecomponent", ["vue", "jQuery"], factory);
	else if(typeof exports === 'object')
		exports["vuecomponent"] = factory(require("vue"), require("jQuery"));
	else
		root["vuecomponent"] = factory(root["Vue"], root["jQuery"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_23__) {
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

	var MyFormDropTree = __webpack_require__(57);


	var install = function install(Vue) {
	    if (install.installed) return;
	    Vue.component(MyFormDropTree.name, MyFormDropTree);
	};

	if (typeof window !== 'undefined' && window.Vue) {
	    install(window.Vue);
	};

	module.exports = MyFormDropTree;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(3),
	  /* template */
	  __webpack_require__(56),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)

	module.exports = Component.exports


/***/ },
/* 2 */
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
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _props;

	var _index = __webpack_require__(4);

	var _index2 = _interopRequireDefault(_index);

	var _droptreeMenu = __webpack_require__(29);

	var _droptreeMenu2 = _interopRequireDefault(_droptreeMenu);

	var _clickoutside = __webpack_require__(48);

	var _clickoutside2 = _interopRequireDefault(_clickoutside);

	var _class = __webpack_require__(21);

	var _emitter = __webpack_require__(7);

	var _emitter2 = _interopRequireDefault(_emitter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	__webpack_require__(54);
	exports.default = {
	  mixins: [_emitter2.default],
	  name: "MyDroptree",
	  componentName: "MyDroptree",
	  components: {
	    ElInput: _index2.default,
	    ElDroptreeMenu: _droptreeMenu2.default
	  },

	  directives: { Clickoutside: _clickoutside2.default },

	  props: (_props = {
	    value: {
	      type: [String, Number]
	    },
	    name: String,
	    upload: {
	      type: Boolean,
	      default: false
	    },
	    data: {
	      type: String
	    },
	    isInGrid: {
	      type: Boolean,
	      default: false
	    },
	    clearable: {
	      type: Boolean,
	      default: true
	    },
	    rootcode: {
	      type: String,
	      default: ""
	    },
	    filterable: {
	      type: Boolean,
	      default: true
	    },
	    rendercontent: Function,
	    readonly: {
	      type: Boolean,
	      default: false
	    },
	    onlyselectleaf: {
	      type: Boolean,
	      default: false
	    },
	    rootvisible: {
	      type: Boolean,
	      default: true
	    },
	    trigger: {
	      type: String,
	      default: "click"
	    },
	    dynamic: {
	      type: Boolean,
	      default: false
	    },
	    expandlevel: {
	      type: Number,
	      default: 3
	    },
	    rightfilter: {
	      type: [Boolean],
	      default: false
	    },
	    valueprovider: {
	      type: String,
	      default: ""
	    },
	    dataprovider: {
	      type: String,
	      default: ""
	    }
	  }, _defineProperty(_props, "isInGrid", {
	    type: Boolean,
	    default: false
	  }), _defineProperty(_props, "size", {
	    type: String,
	    default: ""
	  }), _defineProperty(_props, "offset", {
	    type: [String, Number],
	    default: 0
	  }), _defineProperty(_props, "id", {
	    type: String,
	    default: ""
	  }), _defineProperty(_props, "nodeKey", {
	    type: String,
	    default: "code"
	  }), _defineProperty(_props, "checkstrictly", {
	    type: Boolean,
	    default: true
	  }), _defineProperty(_props, "expandLevel", {
	    type: Number,
	    default: 3
	  }), _defineProperty(_props, "autoexpandparent", {
	    type: Boolean,
	    default: true
	  }), _defineProperty(_props, "defaultCheckedKeys", Array), _defineProperty(_props, "defaultExpandedKeys", Array), _defineProperty(_props, "renderContent", Function), _defineProperty(_props, "multiple", {
	    type: Boolean,
	    default: false
	  }), _defineProperty(_props, "props", {
	    default: function _default() {
	      return {
	        children: "children",
	        label: "label",
	        icon: "icon"
	      };
	    }
	  }), _defineProperty(_props, "lazy", {
	    type: Boolean,
	    default: false
	  }), _defineProperty(_props, "highlightcurrent", {
	    type: Boolean,
	    default: true
	  }), _defineProperty(_props, "visible_all", {
	    type: Boolean,
	    default: true
	  }), _defineProperty(_props, "width", {
	    type: [String, Number],
	    default: 0
	  }), _props),

	  data: function data() {
	    return {
	      timeout: null,
	      visible: false,
	      isDropdown: true,
	      selectedLabel: "",
	      currentPlaceholder: "",
	      iconSpace: 0,
	      inputHovering: false,
	      clearRun: false,
	      currentValue: this.value,
	      isMouseEnter: false
	    };
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
	    iconClass: function iconClass() {
	      return this.showCloseIcon ? "circle-close" : "caret-bottom";
	    },
	    showCloseIcon: function showCloseIcon() {
	      var criteria = this.clearable && this.inputHovering && this.value != "" && !this.readonly;
	      if (!this.$el) return false;
	      if (!this.isInGrid) {
	        var icon = this.$refs.reference.$el.querySelector(".el-input__icon__select");
	        if (icon) {
	          if (criteria) {
	            icon.addEventListener("click", this.clearValue);
	            (0, _class.addClass)(icon, "is-show-close");
	          } else {
	            icon.removeEventListener("click", this.clearValue);
	            (0, _class.removeClass)(icon, "is-show-close");
	          }
	        }
	      }

	      return criteria;
	    }
	  },
	  created: function created() {

	    if (this.$slots.append != undefined) {
	      this.iconSpace = 35 + 10 * this.$slots.append[0].text.length;
	    }
	    this.currentValue = this.value;
	    if (!this.multiple) {
	      this.$on("treeClick", this.toggleMenu);
	    }

	    if (this.upload) {
	      HyUploadComponents.push(this);
	    }
	  },

	  watch: {
	    rootcode: function rootcode(val) {
	      this.currentValue = "";
	      this.value = "";
	      this.$refs.droptreeMenu.$refs.tree.rootcode = val;
	      this.$refs.droptreeMenu.$refs.tree.init();
	    },
	    valueprovider: function valueprovider(val) {
	      this.currentValue = "";
	      this.value = "";
	      this.$refs.droptreeMenu.$refs.tree.valueprovider = val;
	      this.$refs.droptreeMenu.$refs.tree.init();
	    },
	    visible: function visible(val) {
	      this.broadcast("droptree-menu", "updatePopper");
	      this.$children.forEach(function (child) {
	        if (child.$options.componentName == "droptree-menu") {
	          child.handleSearchFilter(val);
	          return;
	        }
	      });
	    },
	    placeholder: function placeholder(val) {
	      this.currentPlaceholder = val;
	    },
	    value: function value(val) {
	      var _this = this;

	      if (!val) {
	        this.currentValue = "";
	        this.selectedLabel = "";
	        return;
	      }
	      if (this.multiple) {
	        this.selectedLabel = "";

	        if (val) {
	          var checkedNodes = this.getCheckedNodes();
	          var _iteratorNormalCompletion = true;
	          var _didIteratorError = false;
	          var _iteratorError = undefined;

	          try {
	            for (var _iterator = checkedNodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	              var _node = _step.value;

	              this.selectedLabel += _node.label.trim() + ";";
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

	          this.selectedLabel = this.selectedLabel.substring(0, this.selectedLabel.length - 1);
	        }
	      } else {
	        var node = this.getNodeByCode(this.value);

	        if (node != undefined) {
	          this.selectedLabel = node.label;
	        }

	        setTimeout(function () {
	          _this.$emit("change", node);
	        }, 0);
	      }
	      this.currentValue = val;
	    },
	    currentValue: function currentValue(val) {
	      if (val == "") {
	        this.selectedLabel = "";
	      } else {
	        var node = this.getNodeByCode(val);
	        if (node != undefined) {
	          this.selectedLabel = node.label;
	        }
	      }
	      this.$emit("input", val);
	      this.visible = false;
	    }
	  },
	  methods: {
	    handleFocus: function handleFocus(val) {
	      this.dispatch("form-item", "el.form.focus");
	    },
	    focus: function focus() {
	      var inputDom = this.getComponentInput();
	      inputDom.focus();
	    },
	    getComponentInput: function getComponentInput() {
	      var selectInput = this.$refs.reference.$el.querySelector(".el-input__inner");
	      return selectInput;
	    },
	    enterHandler: function enterHandler() {
	      this.isMouseEnter = true;
	    },
	    leaveHandler: function leaveHandler() {
	      this.isMouseEnter = false;
	    },
	    setValue: function setValue(val) {
	      this.currentValue = val;
	    },
	    getSelectedValue: function getSelectedValue() {
	      return this.currentValue;
	    },
	    toggleMenu: function toggleMenu() {
	      this.focus();
	      if (this.clearRun) {
	        this.clearRun = false;
	        if (this.visible) {
	          this.visible = false;
	        }
	        return;
	      }
	      if (!this.readonly) {
	        this.visible = !this.visible;
	      }
	    },
	    clearValue: function clearValue() {
	      this.clearRun = true;
	      this.currentValue = "";
	      if (this.multiple) {
	        var checkValueArr = this.value.split(";");
	        if (checkValueArr.length > 0) {
	          this.cancelCheckedNodes(checkValueArr, false);
	        }
	      }
	    },
	    handleClose: function handleClose() {
	      this.visible = false;
	    },
	    treeClick: function treeClick(treeBean) {
	      this.$emit("nodeclick", treeBean);
	    },
	    getCheckedNodes: function getCheckedNodes() {
	      var checkedNodes = this.$refs.droptreeMenu.getCheckedNodes();
	      return checkedNodes;
	    },
	    setCheckedNodes: function setCheckedNodes(codes) {
	      this.$refs.droptreeMenu.setCheckedNodes(codes);
	    },
	    cancelCheckedNodes: function cancelCheckedNodes(codes) {
	      this.$refs.droptreeMenu.cancelCheckedNodes(codes);
	    },
	    findNodeByCode: function findNodeByCode(code) {
	      if (!code) {
	        this.selectedLabel = "";
	        return;
	      }
	      var node = this.$refs.droptreeMenu.findNodeByCode(code);
	      return node;
	    },
	    getNodeByCode: function getNodeByCode(code) {
	      if (!code) {
	        this.selectedLabel = "";
	        return;
	      }
	      var node = this.$refs.droptreeMenu.getNodeByCode(code);
	      return node;
	    },
	    getSelectedLabel: function getSelectedLabel() {
	      if (this.multiple) {
	        var checkValueArr = this.value.split(";");
	        if (checkValueArr.length > 0) {
	          var _iteratorNormalCompletion2 = true;
	          var _didIteratorError2 = false;
	          var _iteratorError2 = undefined;

	          try {
	            for (var _iterator2 = checkValueArr[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	              var checkValue = _step2.value;

	              var _node2 = this.getNodeByCode(checkValue);
	              if (_node2 != undefined) {
	                this.selectedLabel += _node2.label.trim() + ";";
	              }
	            }
	          } catch (err) {
	            _didIteratorError2 = true;
	            _iteratorError2 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                _iterator2.return();
	              }
	            } finally {
	              if (_didIteratorError2) {
	                throw _iteratorError2;
	              }
	            }
	          }

	          this.selectedLabel = this.selectedLabel.substring(0, this.selectedLabel.length - 1);
	        } else {
	          this.selectedLabel = "";
	        }
	      } else {
	        var node = this.getNodeByCode(this.value);

	        if (node != undefined) {
	          this.selectedLabel = node.label;
	        }
	      }
	    },
	    getLabel: function getLabel() {
	      return this.selectedLabel;
	    }
	  },
	  mounted: function mounted() {
	    var _this2 = this;

	    this.$nextTick(function () {
	      _this2.getSelectedLabel();
	    });
	    this.$on("treeClick", this.treeClick);
	  }
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _input = __webpack_require__(5);

	var _input2 = _interopRequireDefault(_input);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_input2.default.install = function (Vue) {
	  Vue.component(_input2.default.name, _input2.default);
	};

	exports.default = _input2.default;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(6),
	  /* template */
	  __webpack_require__(28),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)

	module.exports = Component.exports


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _emitter = __webpack_require__(7);

	var _emitter2 = _interopRequireDefault(_emitter);

	var _calcTextareaHeight = __webpack_require__(8);

	var _calcTextareaHeight2 = _interopRequireDefault(_calcTextareaHeight);

	var _inputDropdown = __webpack_require__(9);

	var _inputDropdown2 = _interopRequireDefault(_inputDropdown);

	var _class = __webpack_require__(21);

	var _jquery = __webpack_require__(23);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(24);

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
	      valueChangeFlag: false };
	  },
	  created: function created() {

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
/* 7 */
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
/* 8 */
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(10),
	  /* template */
	  __webpack_require__(22),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)

	module.exports = Component.exports


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vuePopper = __webpack_require__(11);

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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vue = __webpack_require__(12);

	var _vue2 = _interopRequireDefault(_vue);

	var _popup = __webpack_require__(13);

	var _timers = __webpack_require__(18);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PopperJS = _vue2.default.prototype.$isServer ? function () {} : __webpack_require__(20);
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
/* 12 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PopupManager = undefined;

	var _vue = __webpack_require__(12);

	var _vue2 = _interopRequireDefault(_vue);

	var _merge = __webpack_require__(14);

	var _merge2 = _interopRequireDefault(_merge);

	var _popupManager = __webpack_require__(15);

	var _popupManager2 = _interopRequireDefault(_popupManager);

	var _scrollbarWidth = __webpack_require__(17);

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
/* 14 */
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vue = __webpack_require__(12);

	var _vue2 = _interopRequireDefault(_vue);

	var _dom = __webpack_require__(16);

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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getStyle = exports.once = exports.off = exports.on = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.hasClass = hasClass;
	exports.addClass = addClass;
	exports.removeClass = removeClass;
	exports.setStyle = setStyle;

	var _vue = __webpack_require__(12);

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

/***/ },
/* 17 */
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

	var _vue = __webpack_require__(12);

	var _vue2 = _interopRequireDefault(_vue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var scrollBarWidth = void 0;

	;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(19).nextTick;
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18).setImmediate, __webpack_require__(18).clearImmediate))

/***/ },
/* 19 */
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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _class = __webpack_require__(21);

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
/* 21 */
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
/* 22 */
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
/* 23 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_23__;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(25);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(27)(content, {});
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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(26)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 26 */
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
/* 27 */
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
/* 28 */
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
	  }, [_c('el-input-menu', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.ishistory && _vm.searchList.length > 0),
	      expression: "ishistory && searchList.length>0"
	    }],
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
	  }))])], 1), _vm._v(" "), (_vm.upload) ? _c('input', {
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
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(30),
	  /* template */
	  __webpack_require__(53),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)

	module.exports = Component.exports


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vuePopper = __webpack_require__(11);

	var _vuePopper2 = _interopRequireDefault(_vuePopper);

	var _index = __webpack_require__(31);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(45);

	var _index4 = _interopRequireDefault(_index3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: "HyDropTreeMenu",

	  componentName: "droptree-menu",
	  components: {
	    ElTree: _index2.default,
	    HyAutocomplete: _index4.default
	  },

	  mixins: [_vuePopper2.default],

	  props: {
	    value: {
	      type: [String, Number]
	    },
	    placement: {
	      default: "bottom-start"
	    },
	    dynamic: {
	      type: Boolean,
	      default: false
	    },
	    expandlevel: {
	      type: Number,
	      default: 3
	    },
	    rootcode: {
	      type: String,
	      default: ""
	    },
	    rendercontent: Function,
	    valueprovider: {
	      type: String,
	      default: ""
	    },
	    onlyselectleaf: {
	      type: Boolean,
	      default: false
	    },
	    rootvisible: {
	      type: Boolean,
	      default: true
	    },
	    filterable: {
	      type: Boolean,
	      default: true
	    },
	    data: {
	      type: String
	    },
	    boundariesPadding: {
	      default: 0
	    },
	    dataprovider: {
	      type: String,
	      default: ""
	    },
	    id: {
	      type: String,
	      default: ""
	    },
	    options: {
	      default: function _default() {
	        return {
	          forceAbsolute: true,
	          gpuAcceleration: false
	        };
	      }
	    },
	    nodeKey: {
	      type: String,
	      default: "code"
	    },
	    checkstrictly: Boolean,
	    expandLevel: {
	      type: Number,
	      default: 3
	    },
	    autoExpandParent: {
	      type: Boolean,
	      default: true
	    },
	    defaultCheckedKeys: Array,
	    defaultExpandedKeys: Array,
	    renderContent: Function,
	    multiple: {
	      type: Boolean,
	      default: false
	    },
	    props: {
	      default: function _default() {
	        return {
	          children: "children",
	          label: "label",
	          icon: "icon"
	        };
	      }
	    },
	    lazy: {
	      type: Boolean,
	      default: false
	    },
	    highlightCurrent: Boolean
	  },
	  watch: {
	    value: function value(val) {
	      this.currentValue = val;
	    },
	    currentValue: function currentValue(val) {
	      this.$emit("input", val);
	    },
	    filterValue: function filterValue(val) {
	      this.$refs.tree.filter(val);
	    }
	  },
	  data: function data() {
	    return {
	      currentValue: "",
	      filterValue: "",
	      containerScrollTop: 0
	    };
	  },
	  created: function created() {
	    this.currentValue = this.value;
	  },

	  methods: {
	    enterHandler: function enterHandler() {
	      this.$parent.enterHandler();
	    },
	    leaveHandler: function leaveHandler() {
	      this.$parent.leaveHandler();
	    },
	    filterNode: function filterNode(value, data) {
	      if (!value) return true;
	      value = value.toUpperCase();
	      var flag = false;
	      if (data.assist != undefined) {
	        flag = data.assist.toUpperCase().indexOf(value) !== -1;
	      }

	      return flag || data.label.toUpperCase().indexOf(value) !== -1 || data.code.toUpperCase().indexOf(value) !== -1;
	    },
	    handleSearchFilter: function handleSearchFilter(val) {
	      var _this = this;

	      this.$nextTick(function () {
	        if (_this.filterable && !_this.dynamic) {
	          if (val) {
	            _this.$refs.treeContainer.scrollTop = _this.containerScrollTop;
	            _this.filterValue = "";
	          } else {
	            _this.filterValue = "";
	          }
	        }
	      });
	    },
	    getCheckedNodes: function getCheckedNodes() {
	      var checkedNodes = this.$refs.tree.getCheckedNodes();
	      return checkedNodes;
	    },
	    setCheckedNodes: function setCheckedNodes(code) {
	      for (var i = 0; i < code.length; i++) {
	        var treeBean = this.findNodeByCode(code[i]);
	        this.$refs.tree.setCheckedNodes(treeBean, false);
	      }
	    },
	    cancelCheckedNodes: function cancelCheckedNodes(nodes) {
	      this.$refs.tree.cancelCheckedNodes(nodes);
	    },
	    findNodeByCode: function findNodeByCode(code) {
	      var node = this.$refs.tree.findNodeByCode(code);
	      return node;
	    },
	    getNodeByCode: function getNodeByCode(code) {
	      var node = this.$refs.tree.getNodeByCode(code);
	      return node;
	    },
	    querySearch: function querySearch(value, cb) {
	      var result = this.$refs.tree.filter2(value);
	      var showRessult = [];
	      if (null == result) {
	        cb(showRessult);
	        return;
	      }
	      for (var i = 0; i < result.length; i++) {
	        var lables = result[i].label.split("/");
	        showRessult.push({
	          value: lables[lables.length - 1],
	          label: result[i].value
	        });
	      }
	      cb(showRessult);
	    },

	    handleSelect: function handleSelect(item) {
	      var codesStr = item.label;
	      var codes = codesStr.split(";");
	      if (codes.length <= 0) {
	        $.alert("选择代码有误");
	        return;
	      }
	      var code = codes[codes.length - 1];
	      if (null == code || undefined == code || code.length <= 0) {
	        $.alert("所选节点无编码，请选择有编码的节点。");
	        return;
	      }
	      var node = this.$refs.tree.findNodeByCode(code);
	      this.$refs.tree.selectNode(node, false);
	      this.value = code;
	      this.filterValue = "";
	    }
	  },

	  mounted: function mounted() {
	    this.referenceElm = this.$parent.$refs.reference.$el;
	    this.$parent.popperElm = this.popperElm = this.$el;
	    this.$on("updatePopper", this.updatePopper);
	    this.$on("destroyPopper", this.destroyPopper);
	    var me = this;
	    this.$refs.treeContainer.onscroll = function () {
	      me.containerScrollTop = this.scrollTop;
	    };
	  }
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Tree = __webpack_require__(32);

	Tree.install = function (Vue) {
	  Vue.component(Tree.name, Tree);
	};

	module.exports = Tree;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(33),
	  /* template */
	  __webpack_require__(44),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)

	module.exports = Component.exports


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _jquery = __webpack_require__(23);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _framework = __webpack_require__(34);

	var _basetree = __webpack_require__(36);

	var _basetree2 = _interopRequireDefault(_basetree);

	var _emitter = __webpack_require__(7);

	var _emitter2 = _interopRequireDefault(_emitter);

	var _locale = __webpack_require__(37);

	var _locale2 = _interopRequireDefault(_locale);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(42);
	exports.default = {
	  name: "hy-tree",
	  mixins: [_locale2.default, _emitter2.default],
	  componentName: "hyTree",
	  props: {
	    data: {
	      type: String
	    },
	    emptyText: {
	      type: String,
	      default: function _default() {
	        return "空";
	      }
	    },
	    value: {
	      type: [String, Number],
	      default: ""
	    },
	    valueprovider: {
	      type: String,
	      default: ""
	    },

	    id: {
	      type: String,
	      default: ""
	    },
	    dynamic: {
	      type: Boolean,
	      default: false
	    },
	    checkleavies: {
	      type: Boolean,
	      default: false
	    },
	    rootvisible: {
	      type: Boolean,
	      default: true
	    },
	    targetframe: {
	      type: String,
	      default: ""
	    },
	    nodeKey: {
	      type: String,
	      default: "code"
	    },
	    checkstrictly: {
	      type: Boolean,
	      default: true
	    },
	    defaultexpandall: {
	      type: Boolean,
	      default: true
	    },

	    dataprovider: {
	      type: String,
	      default: ""
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
	      default: ""
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
	          children: "children",
	          label: "label",
	          code: "code",
	          assist: "assist",
	          icon: "icon"
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
	    if (window["$dataComponent"] != undefined) {
	      window["$dataComponent"].push(this);
	    }

	    if (this.id != "") {
	      this.treeId = this.id;
	      window[this.treeId] = this;
	    } else {
	      $treeCount++;
	      this.treeId = "tree" + $treeCount;
	    }
	  },
	  destroyed: function destroyed() {
	    if (this.id != "") {
	      window[this.treeId] = null;
	      delete window[this.treeId];
	    }
	  },
	  data: function data() {
	    return {
	      jsonData: null,
	      valuePath: [],
	      labelPath: [],
	      assistPath: [],
	      treeData: this.data
	    };
	  },


	  computed: {},

	  watch: {
	    value: function value(val) {
	      if (!this.multiple) {
	        if (!val) {
	          return;
	        }

	        if (val) {
	          var node = this.tree.findNodeByCode(val);
	          if (node) {
	            this.tree.selectNode(node, false);
	          }
	        } else {
	          this.tree.cancelSelectedNode();
	        }
	      } else {
	        var checkValueArr = this.value.split(";");
	        if (checkValueArr.length > 0) {
	          this.setCheckedNodes(checkValueArr);
	        }
	      }
	    },
	    rootcode: function rootcode(val) {
	      this.refreshRootNode(val);
	    }
	  },
	  mounted: function mounted() {
	    this.init();
	  },

	  methods: {
	    releaseMemory: function releaseMemory() {
	      document.getElementById(this.treeId).innerHTML = "";
	    },
	    init: function init() {
	      var me = this;
	      me.valuePath = [];
	      me.labelPath = [];
	      me.assistPath = [];
	      function getPath(data, level, valuepath, labelpath, assistpath) {
	        data = Array.isArray(data) ? data : [data];
	        for (var i = 0; i < data.length; i++) {
	          if (level == 1) {
	            valuepath = "";
	            labelpath = "";
	            assistpath = "";
	          }
	          var path1 = valuepath + ";" + data[i].code;
	          var path2 = labelpath + "/" + data[i].label;
	          var path3 = assistpath + "/" + data[i].assist;
	          if (data[i].children != undefined) {
	            var children = Array.isArray(data[i].children) ? data[i].children : [data[i].children];
	            var x = level + 1;

	            if (onlyselectleaf == false || onlyselectleaf == "false") {
	              me.valuePath.push(path1.substring(1, path1.length));
	              me.labelPath.push(path2.substring(1, path2.length));
	              me.assistPath.push(path3.substring(1, path3.length));
	            }

	            getPath(children, x, path1, path2, path3);
	          } else {
	            me.valuePath.push(path1.substring(1, path1.length));
	            me.labelPath.push(path2.substring(1, path2.length));
	            me.assistPath.push(path3.substring(1, path3.length));
	          }
	        }
	      }

	      var treeId = this.treeId;

	      var expandLevel = this.expandlevel;
	      var rootVisible = this.rootvisible;
	      var rightFilter = this.rightfilter;
	      var retriever = this.valueprovider;
	      var rootNode = this.rootcode;
	      var dynamic = this.dynamic;
	      var dataProvider = this.dataprovider;
	      var multipletree = this.multiple;
	      var checkchildren = this.checkstrictly;

	      var nodestylefunc = "";
	      var targetframe = this.targetframe;
	      var theme = "";
	      var checkleavies = this.checkleavies;
	      var showtooltip = false;
	      var onlyselectleaf = this.onlyselectleaf;

	      var configParam = {
	        id: treeId,
	        rightFilter: rightFilter,
	        expandLevel: expandLevel,
	        rootCode: rootNode,
	        retriever: retriever,
	        dynamic: dynamic,
	        rootVisible: rootVisible,
	        checkChildren: checkchildren,
	        multipleTree: multipletree,
	        dataProvider: dataProvider,
	        nodeClick: "",
	        nodeDblClick: "",
	        checkChanged: "",
	        contextMenu: "",
	        nodeStyleFunc: "",
	        targetFrame: targetframe,
	        theme: "",
	        onlyselectleaf: onlyselectleaf,
	        checkLeavies: checkleavies,
	        showTooltip: false
	      };

	      if (this.treeData == undefined && this.treeData != "") {
	        var urlPath = "";
	        if (typeof $$pageContextPath != "undefined") {
	          urlPath = $$pageContextPath;
	        } else {
	          urlPath = $$ContextPath.serviceContext;
	        }
	        _jquery2.default.ajax({
	          type: "post",
	          url: urlPath + "framework/treeview.do",
	          data: {
	            rightfilter: rightFilter,
	            rightFilter: rightFilter,
	            expandLevel: expandLevel,
	            rootcode: rootNode,
	            rootCode: rootNode,
	            retriever: retriever,
	            dynamic: dynamic,
	            rootVisible: rootVisible,
	            dataProvider: dataProvider
	          },
	          error: function error() {
	            _jquery2.default.alert("进行连接信息传递出错\n");
	          },
	          async: false,
	          success: function success(data) {
	            data = data.replace('<?xml version="1.0" encoding="utf-8"?>', "");
	            var s = (0, _framework.toXmlDom)(data);
	            generateTree(s);
	          },
	          complete: function complete(XHR, TS) {
	            XHR = null;
	          }
	        });
	      } else {
	        var s = (0, _framework.toXmlDom)(this.treeData);
	        generateTree(s);
	      }

	      function addNodeToPathIndex(node) {
	        var path1 = valuepath + ";" + data[i].code;
	        var path2 = labelpath + "/" + data[i].label;
	        var path3 = assistpath + "/" + data[i].assist;

	        me.valuePath.push(path1.substring(1, path1.length));
	        me.labelPath.push(path2.substring(1, path2.length));
	        me.assistPath.push(path3.substring(1, path3.length));
	      }

	      function generateTree(data) {
	        me.tree = new _basetree2.default.component.tree(data, configParam, me);
	        var initJsonData = (0, _framework.xmlToJson)(data);
	        me.jsonData = initJsonData.children;
	        if (me.jsonData == undefined) {
	          me.valuePath.push(initJsonData.code);
	          me.labelPath.push(initJsonData.label);
	          me.assistPath.push(initJsonData.assist);
	        } else {
	          getPath(me.jsonData, 1, "", "", "");
	          if (rootVisible) {
	            for (var i = 0; i < me.valuePath.length; i++) {
	              me.valuePath[i] = initJsonData.code + ";" + me.valuePath[i];
	              me.labelPath[i] = initJsonData.label + "/" + me.labelPath[i];
	            }
	          }
	        }
	      }
	      if (this.value) {
	        if (this.multiple) {
	          var checkValueArr = this.value.split(";");
	          if (checkValueArr.length > 0) {
	            this.setCheckedNodes(checkValueArr, false);
	          }
	        } else {
	          var node = this.tree.findNodeByCode(this.value);
	          this.tree.selectNode(node, false);
	        }
	      }
	    },


	    filter: function filter(value) {
	      if (value == null) return {};
	      var filterData = [];
	      for (var i = 0; i < this.labelPath.length; i++) {
	        if (this.labelPath[i].toUpperCase().indexOf(value.toUpperCase()) > -1 || this.valuePath[i].toUpperCase().indexOf(value.toUpperCase()) > -1 || this.assistPath[i].toUpperCase().indexOf(value.toUpperCase()) > -1) {
	          var obj = {};
	          obj.index = i;
	          obj.label = this.labelPath[i];
	          filterData.push(obj);
	        }
	      }

	      var filterOption = ' <div id="' + this.id + '_filterOptionDiv"  class="drop-dropoption-div" ><ul class="hy-droptree-menu " >  ';
	      for (var i = 0; i < filterData.length; i++) {
	        filterOption = filterOption + '<li class="hy-droptree-menu-item " index="' + filterData[i].index + '">' + "<span>" + filterData[i].label + "</span>" + "</li>";
	      }
	      filterOption = filterOption + "</ul></div>";
	      var obj = {};
	      obj.filterOptionHtml = filterOption;
	      obj.valuePath = this.valuePath;
	      obj.count = filterData.length;

	      return obj;
	    },
	    filter2: function filter2(value) {
	      if (value == null) retun;
	      var filterData = [];
	      for (var i = 0; i < this.labelPath.length; i++) {
	        if (this.labelPath[i].toUpperCase().indexOf(value.toUpperCase()) > -1 || this.valuePath[i].toUpperCase().indexOf(value.toUpperCase()) > -1 || this.assistPath[i].toUpperCase().indexOf(value.toUpperCase()) > -1) {
	          var obj = {};
	          obj.index = i;
	          obj.label = this.labelPath[i];
	          obj.value = this.valuePath[i];
	          filterData.push(obj);
	        }
	      }
	      return filterData;
	    },

	    getSelectedNode: function getSelectedNode(alertInfo) {
	      return this.tree.getSelectedNode(alertInfo);
	    },

	    findNodeByCode: function findNodeByCode(code) {
	      return this.tree.findNodeByCode(code);
	    },
	    getNodeByCode: function getNodeByCode(code) {
	      return this.tree.findNodeByCode(code);
	    },
	    deleteNodeByCode: function deleteNodeByCode(code) {
	      this.tree.deleteNodeByCode(code);
	    },

	    selectNode: function selectNode(treeBean, alertInfo) {
	      return this.tree.selectNode(treeBean, alertInfo);
	    },

	    cancelSelectedNode: function cancelSelectedNode() {
	      this.tree.cancelSelectedNode();
	    },

	    refreshNode: function refreshNode(treeBean, expandLevel) {
	      this.tree.refreshNode(treeBean, expandLevel);
	    },

	    refreshRootNode: function refreshRootNode(code) {
	      if (code != undefined && code != null) {
	        if (this.treeData == undefined && this.treeData != "") {
	          var s = this.treeData;
	        } else {
	          var s = (0, _framework.toXmlDom)(this.treeData);
	        }
	        if ((typeof code === "undefined" ? "undefined" : _typeof(code)) == "object") {
	          var rootCode = this.tree.getRootCode();
	          this.tree.createNewTreeByRootCode(rootCode, s);
	        } else {
	          this.tree.createNewTreeByRootCode(code, s);
	        }
	      } else {
	        this.tree.refreshRootNode();
	      }
	    },

	    expandNode: function expandNode(code, alertInfo) {
	      var treeBean = this.findNodeByCode(code);
	      this.tree.expandNode(treeBean, alertInfo);
	    },

	    collapseNode: function collapseNode(code, alertInfo) {
	      var treeBean = this.findNodeByCode(code);
	      this.tree.collapseNode(treeBean, alertInfo);
	    },

	    getCheckedNodes: function getCheckedNodes(flag, alertInfo) {
	      return this.tree.getCheckedNodes(flag, alertInfo);
	    },

	    setCheckedNodes: function setCheckedNodes(code, alertInfo) {
	      for (var i = 0; i < code.length; i++) {
	        var treeBean = this.findNodeByCode(code[i]);
	        this.tree.setCheckedNodes(treeBean, alertInfo);
	      }
	    },

	    cancelCheckedNodes: function cancelCheckedNodes(code, alertInfo) {
	      for (var i = 0; i < code.length; i++) {
	        var treeBean = this.findNodeByCode(code[i]);
	        this.tree.cancelNodeChecked(treeBean, alertInfo);
	      }
	    },

	    getParent: function getParent(code, alertInfo) {
	      var treeBean = this.findNodeByCode(code);
	      return this.tree.getParent(treeBean, alertInfo);
	    },

	    getChildren: function getChildren(code, alertInfo) {
	      var treeBean = this.findNodeByCode(code);
	      return this.tree.getChildren(treeBean, alertInfo);
	    },

	    getParentCascade: function getParentCascade(code, alertInfo) {
	      var treeBean = this.findNodeByCode(code);
	      return this.tree.getParentCascade(treeBean, alertInfo);
	    },

	    getChildrenCascade: function getChildrenCascade(code, alertInfo) {
	      var treeBean = this.findNodeByCode(code);
	      return this.tree.getChildrenCascade(treeBean, alertInfo);
	    },

	    isChecked: function isChecked(code, alertInfo) {
	      var treeBean = this.findNodeByCode(code);
	      return this.tree.isChecked(treeBean, alertInfo);
	    },

	    checkParentNode: function checkParentNode(treeBean) {
	      tree.checkParentNode(treeBean);
	    },

	    getNodeLevel: function getNodeLevel(code) {
	      var treeBean = this.findNodeByCode(code);
	      return this.tree.getNodeLevel(treeBean);
	    },

	    display: function display(flag) {
	      tree.display(flag);
	    },

	    getRootCode: function getRootCode() {
	      return this.tree.getRootCode();
	    },

	    getRootBean: function getRootBean() {
	      return this.tree.getRootBean();
	    },

	    hasChildren: function hasChildren(code, alertInfo) {
	      return this.tree.hasChildren(code, alertInfo);
	    },

	    isExpanded: function isExpanded(code, alertInfo) {
	      var treeBean = this.findNodeByCode(code);
	      return this.tree.isExpanded(treeBean, alertInfo);
	    },
	    editNodeLabel: function editNodeLabel(code, label) {
	      var node = this.findNodeByCode(code);
	      node.label = label;
	    },
	    getSelfNodeAndChildrenNode: function getSelfNodeAndChildrenNode(code) {
	      var nodeArr = [];
	      nodeArr.push(this.findNodeByCode(code));
	      nodeArr = nodeArr.concat(this.getChildrenCascade(code));
	      return nodeArr;
	    }
	  }
	};

/***/ },
/* 34 */
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

	var _map = __webpack_require__(35);

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
/* 35 */
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
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _jquery = __webpack_require__(23);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _framework = __webpack_require__(34);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var __core = function __core() {};

	__core.extend = function (_instance, _static) {
	    var extend = __core.prototype.extend;

	    __core._prototyping = true;
	    var proto = new this();
	    extend.call(proto, _instance);
	    proto.__core = function () {};
	    delete __core._prototyping;

	    var constructor = proto.constructor;
	    var klass = proto.constructor = function () {
	        if (!__core._prototyping) {
	            if (this._constructing || this.constructor == klass) {
	                this._constructing = true;
	                constructor.apply(this, arguments);
	                delete this._constructing;
	            } else if (arguments[0] != null) {
	                return (arguments[0].extend || extend).call(arguments[0], proto);
	            }
	        }
	    };

	    klass.ancestor = this;
	    klass.extend = this.extend;
	    klass.forEach = this.forEach;
	    klass.implement = this.implement;
	    klass.prototype = proto;
	    klass.toString = this.toString;
	    klass.valueOf = function (type) {
	        return type == "object" ? klass : constructor.valueOf();
	    };
	    extend.call(klass, _static);

	    if (typeof klass.init == "function") klass.init();
	    return klass;
	};

	__core.prototype = {
	    extend: function extend(source, value) {
	        if (arguments.length > 1) {
	            var ancestor = this[source];
	            if (ancestor && typeof value == "function" && (!ancestor.valueOf || ancestor.valueOf() != value.valueOf()) && /\bbase\b/.test(value)) {
	                var method = value.valueOf();

	                value = function value() {
	                    var previous = this.__core || __core.prototype.__core;
	                    this.__core = ancestor;
	                    var returnValue = method.apply(this, arguments);
	                    this.__core = previous;
	                    return returnValue;
	                };

	                value.valueOf = function (type) {
	                    return type == "object" ? value : method;
	                };
	                value.toString = __core.toString;
	            }
	            this[source] = value;
	        } else if (source) {
	            var extend = __core.prototype.extend;

	            if (!__core._prototyping && typeof this != "function") {
	                extend = this.extend || extend;
	            }
	            var proto = { toSource: null };

	            var hidden = ["constructor", "toString", "valueOf"];

	            var i = __core._prototyping ? 0 : 1;
	            while (key = hidden[i++]) {
	                if (source[key] != proto[key]) {
	                    extend.call(this, key, source[key]);
	                }
	            }

	            for (var key in source) {
	                if (!proto[key]) extend.call(this, key, source[key]);
	            }
	        }
	        return this;
	    }
	};

	__core = __core.extend({
	    constructor: function constructor() {
	        this.extend(arguments[0]);
	    }
	}, {
	    ancestor: Object,
	    version: "1.1",

	    forEach: function forEach(object, block, context) {
	        for (var key in object) {
	            if (this.prototype[key] === undefined) {
	                block.call(context, object[key], key, object);
	            }
	        }
	    },

	    implement: function implement() {
	        for (var i = 0; i < arguments.length; i++) {
	            if (typeof arguments[i] == "function") {
	                arguments[i](this.prototype);
	            } else {
	                this.prototype.extend(arguments[i]);
	            }
	        }
	        return this;
	    },

	    toString: function toString() {
	        return String(this.valueOf());
	    }
	});

	var treeorg = {};
	treeorg.util = {};
	treeorg.component = {};

	treeorg.util.IndexOutOfBoundsException = __core.extend({
	    constructor: function constructor(s) {
	        this.message = s;
	    },
	    getMessage: function getMessage() {
	        return this.message;
	    }
	});

	treeorg.util.NoSuchElementException = __core.extend({
	    constructor: function constructor(s) {
	        this.message = s;
	    },
	    getMessage: function getMessage() {
	        return this.message;
	    }
	});

	treeorg.util.DLNode = __core.extend({
	    constructor: function constructor(element, parent, listId) {
	        this.element = element;
	        this.parent = parent;
	        this.children = [];
	        this.dept = 0;
	        this.superNodes = [];
	        this.nodeId = listId + "_" + element.id;
	        this.childrenId = this.nodeId + "_children";
	        this.data = {};
	    },
	    getChildren: function getChildren() {
	        return this.children;
	    }
	});

	treeorg.util.LinkedList = __core.extend({
	    constructor: function constructor(config) {
	        this.size = 0;
	        this.root = null;
	        for (var i in config) {
	            if (config.hasOwnProperty(i)) {
	                this[i] = config[i];
	            }
	        }
	    },
	    getSize: function getSize() {
	        return this.size;
	    },
	    getRoot: function getRoot() {
	        return this.root;
	    },
	    setRoot: function setRoot(e) {
	        this.root = new treeorg.util.DLNode(e, null, this.id);
	        this.root.data.hasrender = this.root.data.isopen = 0 < this.expandLevel ? true : false;
	        this.root.data.ischecked = this.root.element.checked || "0";
	        this.size++;
	    },
	    addNode: function addNode(e, parent, expandLevel) {
	        var node = new treeorg.util.DLNode(e, parent, this.id);
	        node.superNodes = node.parent.superNodes.concat(parent);
	        node.parent.children.push(node);
	        node.dept = node.parent.dept + 1;
	        if (typeof expandLevel == "undefined") {
	            node.data.hasrender = node.data.isopen = node.dept < this.expandLevel ? true : false;
	        } else {
	            node.data.hasrender = node.data.isopen = expandLevel > 1 ? true : false;
	        }
	        node.data.ischecked = node.element.checked || "0";
	        this.size++;
	        return node;
	    },
	    getDept: function getDept(e) {
	        return this.entry(e).dept;
	    },
	    get: function get(index) {
	        return this.entry(index).element;
	    },
	    indexOf: function indexOf(o) {
	        var index = 0;
	        if (o == null) {
	            for (var e = this.header.next; e != this.header; e = e.next) {
	                if (e.element == null) return index;
	                index++;
	            }
	        } else {
	            for (var e = this.header.next; e != this.header; e = e.next) {
	                if (o == e.element) return index;
	                index++;
	            }
	        }
	        return -1;
	    },
	    removeFirst: function removeFirst() {
	        return this.remove(this.header.next);
	    },
	    removeLast: function removeLast() {
	        return remove(header.parent);
	    },
	    removeAt: function removeAt(index) {
	        return this.remove(this.entry(index));
	    },
	    remove: function remove(e) {
	        if (e == this.header) throw new treeorg.util.NoSuchElementException('没有元素');
	        var result = e.element;
	        e.parent.next = e.next;
	        e.next.parent = e.parent;
	        e.next = e.parent = null;
	        e.element = null;
	        this.size--;
	        return result;
	    },
	    lastIndexOf: function lastIndexOf(o) {
	        var index = size;
	        if (o == null) {
	            for (var e = this.header.parent; e != this.header; e = e.parent) {
	                index--;
	                if (e.element == null) return index;
	            }
	        } else {
	            for (var e = this.header.parent; e != this.header; e = e.parent) {
	                index--;
	                if (o == e.element) return index;
	            }
	        }
	        return -1;
	    },
	    contains: function contains(o) {
	        return this.indexOf(o) != -1;
	    },
	    clear: function clear() {
	        var e = this.header.next;
	        while (e != this.header) {
	            var next = e.next;
	            e.next = e.parent = null;
	            e.element = null;
	            e = next;
	        }
	        this.header.next = this.header.parent = this.header;
	        size = 0;
	    },
	    insert: function insert(index, element) {
	        this.addBefore(element, index == this.size ? this.header : this.entry(index));
	    },
	    entry: function entry(index) {
	        if (index < 0 || index >= this.size) throw new treeorg.util.IndexOutOfBoundsException("Index: " + index + ", Size: " + size);
	        var e = this.header;
	        if (index < this.size >> 1) {
	            for (var i = 0; i <= index; i++) {
	                e = e.next;
	            }
	        } else {
	            for (var i = this.size; i > index; i--) {
	                e = e.parent;
	            }
	        }
	        return e;
	    },
	    toArray: function toArray() {
	        var result = [this.size];
	        var i = 0;
	        for (var e = this.header.next; e != this.header; e = e.next) {
	            result[i++] = e.element;
	        }return result;
	    },
	    set: function set(index, e) {
	        var e = this.entry(index);
	        var oldVal = e.element;
	        e.element = element;
	        return oldVal;
	    }
	});

	treeorg.component.treeNode = __core.extend({
	    constructor: function constructor(node) {
	        var arr = node.attributes;
	        for (var index = 0, len = arr.length; index < len; index++) {
	            this[arr[index].nodeName] = arr[index].nodeValue;
	        }
	    }
	});

	treeorg.component.tree = __core.extend({
	    constructor: function constructor(treebean, config, me) {
	        this.data = {
	            id: config.id,
	            selectNodes: {},
	            rightFilter: config.rightFilter,
	            expandLevel: config.rootVisible ? config.expandLevel - 1 : config.expandLevel,
	            rootCode: config.rootCode,
	            retriever: config.retriever,
	            dynamic: config.dynamic,
	            rootVisible: config.rootVisible,
	            dataProvider: config.dataProvider,
	            checkChildren: config.checkChildren,
	            multipleTree: config.multipleTree,
	            nodeClick: config.nodeClick,
	            nodeDblClick: config.nodeDblClick,
	            checkChanged: config.checkChanged,
	            contextMenu: config.contextMenu,
	            nodeStyleFunc: config.nodeStyleFunc,
	            targetFrame: config.targetFrame,
	            theme: config.theme,
	            checkLeavies: config.checkLeavies,
	            showTooltip: config.showTooltip,
	            onlyselectleaf: config.onlyselectleaf
	        };

	        var settings = {},
	            roots = {},
	            caches = {},
	            that = this,
	            me = me,
	            model = {
	            treeModel: new treeorg.util.LinkedList(this.data),
	            treeMap: {}
	        },
	            _clickNode,
	            _TimeFn = null,
	            _consts = {
	            className: {
	                BUTTON: "button",
	                LEVEL: "level",
	                ICO_LOADING: "ico_loading",
	                SWITCH: "switch"
	            },
	            event: {
	                NODECREATED: "_nodeCreated",
	                CLICK: "_click",
	                EXPAND: "_expand",
	                COLLAPSE: "_collapse",
	                ASYNC_SUCCESS: "_async_success",
	                ASYNC_ERROR: "_async_error",
	                REMOVE: "_remove"
	            },
	            id: {
	                A: "_a",
	                ICON: "_ico",
	                SPAN: "_span",
	                SWITCH: "_switch",
	                UL: "_ul"
	            },
	            line: {
	                ROOT: "root",
	                ROOTS: "roots",
	                CENTER: "center",
	                BOTTOM: "bottom",
	                NOLINE: "noline",
	                LINE: "line"
	            },
	            folder: {
	                OPEN: "open",
	                CLOSE: "close",
	                DOCU: "docu"
	            },
	            node: {
	                CURSELECTED: "curSelectedNode"
	            },
	            checkFlag: {
	                UNCHECKED: "0",
	                CHECKED: "1",
	                INDETERMINATE: "2"
	            },
	            DYNAMICNODE: "dynamicnode"
	        },
	            _multipleTemp = "<div class='i-k-tree-row'>" + "<div class='i-k-tree-row-id' id='{rowid}' style='width:{width}px'>" + "<div class='i-k-tree-dept'>{nodedept}</div>" + "<div  class='i-k-tree-checkbox-div'><span  checkEnable='{checkEnable}' src='' style='{imgStyle}' class='i-k-tree-checkbox {imgSrc}'></span></div>" + "<div   enabled={enabled} class='i-k-tree-content'>" + "<span class='i-k-tree-icon-span'><span id='{rowid}_parentopen' class='i-k-tree-icon-{icon}' {customIcon}></span></span>" + "<span id='{rowid}_text' {style} {title}>{label}</span>" + "</div>" + "</div>",
	            _simpleTemp = "<div class='i-k-tree-row'>" + "<div class='i-k-tree-row-id' id='{rowid}' style='width:{width}px'>" + "<div class='i-k-tree-dept'>{nodedept}</div>" + "<div   enabled={enabled} class='i-k-tree-content'>" + "<span class='i-k-tree-icon-span'><span id='{rowid}_parentopen' class='i-k-tree-icon-{icon}' {customIcon}></span></span>" + "<span id='{rowid}_text' {style} {title}>{label}</span>" + "</div>" + "</div>",
	            _section = "",
	            _icon = {
	            BLANK: "<span id='{rowid}_blank' class='i-k-tree-blank'></span>",
	            ITEM: "<span id='{rowid}_item' class='i-k-tree-item'></span>",
	            LAST: "<span id='{rowid}_last' class='i-k-tree-last'></span>",
	            LINE: "<span id='{rowid}_line' class='i-k-tree-line'></span>",
	            LASTOPEN: "<span id='{rowid}_lastopen' class='i-k-tree-lastopen i-k-tree-node-control'></span>",
	            LASTCLOSE: "<span id='{rowid}_lastclose' class='i-k-tree-lastclose i-k-tree-node-control'></span>",
	            NODEOPEN: "<span id='{rowid}_nodeopen' class='i-k-tree-nodeopen i-k-tree-node-control'></span>",
	            NODECLOSE: "<span id='{rowid}_nodeclose' class='i-k-tree-nodeclose i-k-tree-node-control'></span>",

	            PARENTCLOSE: "parentclose",
	            PARENTOPEN: "parentopen",
	            CHILDNODE: "childnode",
	            CUSTOM: "custom",

	            CHECKED: "i-k-tree-ischeckbox",
	            UNCHECKED: "i-k-tree-uncheckbox",
	            INDETERMINATE: "i-k-tree-identermainate"
	        },
	            _setting = {
	            treeId: "",
	            treeObj: null,
	            view: {
	                addDiyDom: null,
	                autoCancelSelected: true,
	                dblClickExpand: true,
	                expandSpeed: "fast",
	                fontCss: {},
	                nameIsHTML: false,
	                selectedMulti: true,
	                showIcon: true,
	                showLine: true,
	                showTitle: true,
	                txtSelectedEnable: false
	            },

	            data: {},
	            callback: {
	                beforeAsync: function beforeAsync() {
	                    _jquery2.default.alert(1);
	                },
	                beforeClick: null,
	                beforeDblClick: null,
	                beforeRightClick: null,
	                beforeMouseDown: null,
	                beforeMouseUp: null,
	                beforeExpand: null,
	                beforeCollapse: null,
	                beforeRemove: null,

	                onAsyncError: null,
	                onAsyncSuccess: null,
	                onNodeCreated: null,
	                onClick: null,
	                onDblClick: null,
	                onRightClick: null,
	                onMouseDown: null,
	                onMouseUp: null,
	                onExpand: null,
	                onCollapse: null,
	                onRemove: null
	            }
	        };
	        this.model = model;
	        this._multipleTemp = _multipleTemp;
	        this._simpleTemp = _simpleTemp;
	        this._icon = _icon;
	        createTree(treebean);

	        function createNode(bean) {
	            return new treeorg.component.treeNode(bean);
	        };
	        this.createNewTree = function (newTreeBean) {
	            model = {
	                treeModel: new treeorg.util.LinkedList(this.data),
	                treeMap: {}
	            };
	            createTree(newTreeBean);
	            this.model = model;
	            _section = "";

	            var html = "<div id='" + that.data.id + "_root' type='tree' class='i-k-tree-root'>" + childRender(model.treeModel) + "</div>";
	            (0, _jquery2.default)("#" + that.data.id).html(html);
	        };

	        function createTree(treebean, parent, expandLevel) {
	            var current;

	            if (parent == undefined || parent == null) {
	                var childred = treebean.childNodes || treebean.children;
	                current = childred[0];

	                var root = createNode(current);
	                model.treeModel.setRoot(root);
	                model.treeMap[model.treeModel.getRoot().nodeId] = model.treeModel.getRoot();

	                if (current.childElementCount != 0) {
	                    createTree(current.children || current.childNodes, model.treeModel.getRoot());
	                }
	            } else {
	                for (var i = 0, l = treebean.length; i < l; i++) {
	                    current = treebean[i];

	                    var treeNode = createNode(current),
	                        node = model.treeModel.addNode(treeNode, parent, expandLevel);
	                    model.treeMap[node.nodeId] = node;

	                    if (current.childElementCount != 0) {
	                        createTree(current.children || current.childNodes, node, typeof expandLevel != "undefined" ? expandLevel - 1 : expandLevel);
	                    }
	                }
	            }
	        }

	        function nodeRender(node) {
	            var element = node.element,
	                tpl,
	                initWidth,
	                intervalDeptWidth = 15,
	                nodeSpanWidth = 0;
	            if (that.data.multipleTree) {
	                tpl = _multipleTemp;
	                initWidth = 50;
	            } else {
	                tpl = _simpleTemp;
	                initWidth = 30;
	            }
	            var treeLine = "",
	                hasChild = element.haschild,
	                isEnd = element.isEnd,
	                isLocation = element.location,
	                isOpen = node.data.isopen ? 1 : 0,
	                isChecked = node.data.ischecked,
	                checkIcon,
	                icon,
	                customIcon = "",
	                nodeStyle = "",
	                checkEnable = element.checkEnable,
	                label = element.label,
	                checkboxStyle = "display:inline-block;",
	                title = "",
	                _icon_arr = [[[_icon.ITEM, _icon.ITEM], [_icon.LAST, _icon.LAST]], [[_icon.NODECLOSE, _icon.NODEOPEN], [_icon.LASTCLOSE, _icon.LASTOPEN]]];
	            var enabled = "";
	            if (that.model.treeModel.onlyselectleaf == true) {
	                if (hasChild == "1") {
	                    enabled = "false";
	                } else {
	                    enabled = element.enabled;
	                }
	            } else {
	                enabled = element.enabled;
	            }

	            for (var i = 0; i < node.superNodes.length; i++) {
	                if (that.data.rootVisible || node.superNodes[i].parent != null) {
	                    var _node = node.superNodes[i],
	                        _isEnd = _node.element.isEnd;
	                    if (_isEnd == 1) {
	                        treeLine += _icon.BLANK;
	                    } else {
	                        treeLine += _icon.LINE;
	                    }
	                }
	            }

	            treeLine += _icon_arr[hasChild][isEnd][isOpen];

	            if (hasChild == 1) {
	                if (that.data.checkLeavies) {
	                    checkboxStyle = "display:none";
	                }
	                if (isOpen == 1) {
	                    if (element.openIcon != "") {
	                        icon = _icon.CUSTOM;
	                        var urlPath = "";
	                        if (typeof $$pageContextPath != "undefined") {
	                            urlPath = $$pageContextPath;
	                        } else {
	                            urlPath = $$ContextPath.serviceContext;
	                        }
	                        customIcon = "style='background:url(" + urlPath + element.openIcon + ")'";
	                    } else {
	                        icon = _icon.PARENTOPEN;
	                    }
	                } else {
	                    if (element.closeIcon != "") {
	                        icon = _icon.CUSTOM;
	                        var urlPath2 = "";
	                        if (typeof $$pageContextPath != "undefined") {
	                            urlPath2 = $$pageContextPath;
	                        } else {
	                            urlPath2 = $$ContextPath.serviceContext;
	                        }
	                        customIcon = "style='background:url(" + urlPath2 + element.closeIcon + ")'";
	                    } else {
	                        icon = _icon.PARENTCLOSE;
	                    }
	                }
	            } else {
	                if (element.childNodeIcon != undefined && element.childNodeIcon != "") {
	                    var urlPath3 = "";
	                    if (typeof $$pageContextPath != "undefined") {
	                        urlPath3 = $$pageContextPath;
	                    } else {
	                        urlPath3 = $$ContextPath.serviceContext;
	                    }
	                    customIcon = "style='background:url(" + urlPath3 + element.childNodeIcon + ")'";
	                }
	                icon = _icon.CHILDNODE;
	            }

	            checkIcon = _icon.UNCHECKED;

	            nodeSpanWidth = initWidth + parseInt(node.dept) * intervalDeptWidth + getStringWidth(element.label);

	            if (that.data.nodeStyleFunc != "") {
	                var nodeStyleFunc = that.data.nodeStyleFunc.substring(0, that.data.nodeStyleFunc.indexOf("("));
	                if (window[nodeStyleFunc] == undefined) {
	                    _jquery2.default.alert("未找到nodestylefunc定义的函数，请检查nodestylefunc函数是否定义！");
	                }
	                var rowStyle = window[nodeStyleFunc](element);
	                if (rowStyle != "" && rowStyle != null && rowStyle != undefined) {
	                    nodeStyle = "style=\"" + rowStyle + "\"";
	                }
	            }

	            if (isLocation != "") {
	                label = "<a href='" + element.location + "' target='" + that.data.targetFrame + "'>" + element.label + "</a>";
	            }

	            if (that.data.showTooltip) {
	                title = "title=\"" + label + "\"";
	            }
	            tpl = replace(tpl, "{nodedept}", treeLine);
	            tpl = replace(tpl, "{rowid}", node.nodeId);
	            tpl = replace(tpl, "{icon}", icon);
	            tpl = replace(tpl, "{customIcon}", customIcon);

	            tpl = replace(tpl, "{label}", label);


	            tpl = replace(tpl, "{enabled}", enabled);
	            tpl = replace(tpl, "{checkEnable}", checkEnable);
	            tpl = replace(tpl, "{title}", title);
	            tpl = replace(tpl, "{imgSrc}", checkIcon);
	            tpl = replace(tpl, "{imgStyle}", checkboxStyle);
	            tpl = replace(tpl, "{width}", nodeSpanWidth);
	            tpl = replace(tpl, "{style}", nodeStyle);

	            function replace(original, regulation, repstr) {
	                return original.replace(new RegExp(regulation, "g"), repstr);
	            };

	            function getStringWidth(str) {
	                var width = str.length;
	                return width * 13;
	            }

	            return tpl;
	        };

	        function childRender(nodes, dept) {
	            if (nodes.root != undefined) {
	                if (that.data.rootVisible) {
	                    _section += nodeRender(nodes.root);
	                    _section += "<div id='" + nodes.root.nodeId + "_children' class='i-k-tree-children'>";
	                }
	                if (nodes.root.data.isopen) {
	                    childRender(nodes.root.children);
	                }
	                if (that.data.rootVisible) {
	                    _section += "</div></div>";
	                } else {
	                    _section += "</div>";
	                }
	            } else {
	                if (dept != undefined) {
	                    dept--;
	                }
	                for (var i = 0, len = nodes.length; i < len; i++) {
	                    _section += nodeRender(nodes[i]);
	                    _section += "<div id='" + nodes[i].nodeId + "_children' class='i-k-tree-children'>";

	                    if (dept == undefined && nodes[i].data.isopen && nodes[i].children.length > 0 || dept && dept >= 0) {
	                        childRender(nodes[i].children, dept);
	                    }
	                    _section += "</div></div>";
	                }
	            }
	            return _section;
	        }
	        var treeContainer = (0, _jquery2.default)("#" + that.data.id)[0];
	        if (treeContainer == undefined) {
	            setTimeout(function () {
	                (0, _jquery2.default)("#" + that.data.id)[0].innerHTML = "<div id='" + that.data.id + "_root' type='tree' class='i-k-tree-root'>" + childRender(model.treeModel) + "</div>";
	                treeEventHandler();
	            }, 0);
	        } else {
	            (0, _jquery2.default)("#" + that.data.id)[0].innerHTML = "<div id='" + that.data.id + "_root' type='tree' class='i-k-tree-root'>" + childRender(model.treeModel) + "</div>";
	            treeEventHandler();
	        }

	        function treeEventHandler() {
	            (function eventHandler() {
	                (0, _jquery2.default)("#" + that.data.id).delegate(".i-k-tree-node-control", "click", function () {
	                    var id = this.parentNode.parentNode.getAttribute("id");
	                    var treeBean = model.treeMap[id].element;
	                    if (model.treeMap[id].parent == null) {
	                        treeBean.parent = null;
	                    } else {
	                        treeBean.parent = that.getParent(treeBean).code;
	                    }

	                    if (model.treeMap[id].data.isopen) {
	                        that._collapseNode(id, null);
	                        that._collapseNodeCallBack(this, id);
	                        me.$emit('nodeexpanded', treeBean);
	                        me.dispatch('HyDroptree', 'nodeexpanded', treeBean);
	                    } else {
	                        that._expandNode(id, null, 1);
	                        that._expandNodeCallBack(this, id);
	                        me.dispatch('HyDroptree', 'nodecollapse', treeBean);
	                        me.$emit('nodecollapse', treeBean);
	                    }
	                });

	                (0, _jquery2.default)("#" + that.data.id).delegate(".i-k-tree-checkbox", "click", function () {
	                    if ((0, _jquery2.default)(this).attr("checkenable") == "false") {
	                        return;
	                    }
	                    that._setNodeSelected(this);

	                    var id = this.parentNode.parentNode.getAttribute("id");
	                    var nodeObj = me.tree.model.treeMap[id];

	                    var ischecked = me.tree.model.treeMap[id].data.ischecked;
	                    var treeBean = nodeObj.element;
	                    if (nodeObj.parent == null) {
	                        treeBean.parent = null;
	                    } else {
	                        treeBean.parent = that.getParent(treeBean).code;
	                    }

	                    if (ischecked != _consts.checkFlag.CHECKED) {
	                        me.$emit('checkchange', treeBean, false, that.data.checkChildren);
	                        me.dispatch('HyDroptree', 'checkchange', [treeBean, false, that.data.checkChildren]);
	                    } else {
	                        me.$emit('checkchange', treeBean, true, that.data.checkChildren);
	                        me.dispatch('HyDroptree', 'checkchange', [treeBean, true, that.data.checkChildren]);
	                    }

	                    if (that.data.checkChanged != "") {
	                        eval(that.data.checkChanged);
	                    }
	                });

	                (0, _jquery2.default)("#" + that.data.id).delegate(".i-k-tree-content", "mouseover", function () {
	                    if ((0, _jquery2.default)(this).attr("enabled") == "false") {
	                        return;
	                    }
	                    (0, _jquery2.default)(this).addClass("i-k-tree-row-mouseover");
	                });

	                (0, _jquery2.default)("#" + that.data.id).delegate(".i-k-tree-content", "mouseout", function () {
	                    if ((0, _jquery2.default)(this).attr("enabled") == "false") {
	                        return;
	                    }
	                    (0, _jquery2.default)(this).removeClass("i-k-tree-row-mouseover");
	                });

	                (0, _jquery2.default)("#" + that.data.id).delegate(".i-k-tree-content", "click", function () {
	                    if ((0, _jquery2.default)(this).attr("enabled") == "false") {
	                        return;
	                    }
	                    var clickNode = this;

	                    clearTimeout(that._TimeFn);
	                    var id = (0, _jquery2.default)(clickNode).parent().attr("id");
	                    var nodeObj = me.tree.model.treeMap[id];
	                    var treeBean = nodeObj.element;
	                    if (nodeObj.parent == null) {
	                        treeBean.parent = null;
	                    } else {
	                        treeBean.parent = nodeObj.parent.element.code;
	                    }

	                    that._TimeFn = setTimeout(function () {
	                        if (!me.multiple) {
	                            that._setSelectedClass(clickNode);
	                        }
	                        if (that.data.nodeClick != "") {
	                            eval(that.data.nodeClick);
	                        }
	                    }, 250);
	                    setTimeout(function () {
	                        me.$emit('input', nodeObj.element.code);
	                        me.dispatch('HyDroptree', 'treeClick', treeBean);
	                        me.$emit('nodeclick', treeBean);
	                        setTimeout(function () {
	                            me.$emit('change', treeBean);
	                        }, 0);
	                    }, 300);
	                });

	                (0, _jquery2.default)("#" + that.data.id).delegate(".i-k-tree-content", "dblclick", function () {
	                    var dblClickNode = this;
	                    clearTimeout(that._TimeFn);
	                    var id = (0, _jquery2.default)(dblClickNode).parent().attr("id");
	                    var nodeObj = that.model.treeMap[id];
	                    var treeBean = nodeObj.element;
	                    if (nodeObj.parent == null) {
	                        treeBean.parent = null;
	                    } else {
	                        treeBean.parent = nodeObj.parent.element.code;
	                    }
	                    that._setSelectedClass(dblClickNode);
	                    if (that.data.nodeDblClick != "") {
	                        eval(that.data.nodeDblClick);
	                    }
	                    setTimeout(function () {
	                        me.$emit('nodedblclick', treeBean);
	                        me.dispatch('HyDroptree', 'treedblClick', treeBean);
	                    }, 0);
	                });

	                (0, _jquery2.default)("#" + that.data.id).delegate(".i-k-tree-content", "contextmenu", function () {
	                    that._setSelectedClass(this);
	                    if (that.data.contextMenu != "") {
	                        eval(that.data.contextMenu);
	                    }
	                });
	            })();
	        }

	        this.TreeCheckBoxNodeObj = function (node) {
	            var id = node.parentNode.parentNode.getAttribute("id");
	            return that.model.treeMap[id].element;
	        };

	        this.TreeChecked = function (node) {
	            var id = node.parentNode.parentNode.getAttribute("id");
	            if (model.treeMap[id].data.ischecked == _consts.checkFlag.CHECKED) {
	                return true;
	            } else {
	                return false;
	            }
	        };

	        this._setSelectedClass = function (node) {
	            var id = (0, _jquery2.default)(node).parent().attr("id");
	            var nodeObj = this.model.treeMap[id];
	            (0, _jquery2.default)(node).removeClass("i-k-tree-row-mouseover");
	            if (that._clickNode) {
	                (0, _jquery2.default)(that._clickNode).removeClass("i-k-tree-row-selected");
	            }
	            (0, _jquery2.default)(node).addClass("i-k-tree-row-selected");
	            that._clickNode = node;
	        };

	        this.TreeNodeObj = function (node) {
	            var id = node.parentNode.getAttribute("id");
	            return that.model.treeMap[id].element;
	        };

	        this._setNodeSelected = function (node) {
	            var id = node.parentNode.parentNode.getAttribute("id");
	            if (that.model.treeMap[id]) {
	                var ischecked = that.model.treeMap[id].data.ischecked;

	                if (ischecked != _consts.checkFlag.CHECKED) {
	                    that._setNodeCheck(id, true, true);
	                } else {
	                    that._setNodeCheck(id, false, true);
	                }
	            }
	        };

	        this._setNodeCheck = function (id, checkFlag, checkparent) {
	            var newValue = "";

	            var node = (0, _jquery2.default)((0, _jquery2.default)("#" + id).children()[1]).children()[0];
	            var nodeObj = that.model.treeMap[id];

	            if (checkFlag) {
	                nodeObj.data.ischecked = _consts.checkFlag.CHECKED;

	                that.data.selectNodes[id] = nodeObj.element;
	                if (nodeObj.parent == null) {
	                    that.data.selectNodes[id].parent = null;
	                } else {
	                    that.data.selectNodes[id].parent = nodeObj.parent.element.code;
	                }

	                if (node) {
	                    (0, _jquery2.default)(node).removeClass(_icon.UNCHECKED).removeClass(_icon.INDETERMINATE).addClass(_icon.CHECKED);
	                }
	            } else {
	                nodeObj.data.ischecked = _consts.checkFlag.UNCHECKED;

	                delete that.data.selectNodes[id];
	                if (node) {
	                    (0, _jquery2.default)(node).removeClass(_icon.CHECKED).removeClass(_icon.INDETERMINATE).addClass(_icon.UNCHECKED);
	                }
	            }

	            if (that.data.checkChildren) {
	                if (nodeObj.children.length > 0) {
	                    for (var i = 0; i < nodeObj.children.length; i++) {
	                        var nodeId = nodeObj.children[i].nodeId;

	                        that._setNodeCheck(nodeId, checkFlag, false);
	                    }
	                }
	                if (checkparent) {
	                    that._setParentsCascadeCheck(nodeObj.parent);
	                }
	            }

	            Object.keys(that.data.selectNodes).forEach(function (key) {
	                newValue += that.data.selectNodes[key].code + ";";
	            });
	            newValue = newValue.substring(0, newValue.length - 1);
	            me.$emit('input', newValue);
	        };

	        this._setParentsCascadeCheck = function (nodeObj) {
	            if (nodeObj) {
	                var children = nodeObj.children,
	                    id = nodeObj.nodeId,
	                    node = (0, _jquery2.default)((0, _jquery2.default)("#" + id).children()[1]).children()[0],
	                    ischecked = children[0].data.ischecked,
	                    count = 1;
	                for (var i = 1; i < children.length; i++, count++) {
	                    if (children[i].data.ischecked != ischecked) {
	                        break;
	                    }
	                }
	                if (count == children.length) {
	                    that.model.treeMap[id].data.ischecked = ischecked;
	                    if (ischecked == _consts.checkFlag.CHECKED) {
	                        that.data.selectNodes[id] = nodeObj.element;

	                        (0, _jquery2.default)(node).removeClass(_icon.UNCHECKED).removeClass(_icon.INDETERMINATE).addClass(_icon.CHECKED);
	                    } else if (ischecked == _consts.checkFlag.UNCHECKED) {
	                        delete that.data.selectNodes[id];

	                        (0, _jquery2.default)(node).removeClass(_icon.CHECKED).removeClass(_icon.INDETERMINATE).addClass(_icon.UNCHECKED);
	                    } else {
	                        delete that.data.selectNodes[id];

	                        (0, _jquery2.default)(node).removeClass(_icon.CHECKED).removeClass(_icon.UNCHECKED).addClass(_icon.INDETERMINATE);
	                    }
	                } else {
	                    that.model.treeMap[id].data.ischecked = _consts.checkFlag.INDETERMINATE;
	                    delete that.data.selectNodes[id];

	                    (0, _jquery2.default)(node).removeClass(_icon.CHECKED).removeClass(_icon.UNCHECKED).addClass(_icon.INDETERMINATE);
	                }
	                this._setParentsCascadeCheck(nodeObj.parent);
	            }
	        };

	        this.renderRefreshNodes = function (nodes, dept) {
	            _section = "";
	            return childRender(nodes, dept);
	        };

	        this._dynLoadTreeModel = function (node, expandLevel) {
	            var data = {
	                initData: false,

	                retriever: this.data.retriever,
	                rightFilter: this.data.rightFilter,
	                dynamic: true,
	                expandLevel: 1,
	                id: node.element.id
	            };

	            if (this.data.dynamic) {
	                if (typeof expandLevel == "undefined") {
	                    data.expandLevel = "1";
	                } else {
	                    data.expandLevel = expandLevel;
	                }
	            } else {
	                data.dynamic = false;
	                data.dataProvider = this.data.dataProvider;
	            }

	            var hasBeanInfo = "code,label,type,openIcon,closeIcon,location,checkenable,id,hasChild,isEnd";


	            for (var attr in node.element) {
	                if (attr == "constructor" || attr == "_core" || attr == "extend") {
	                    continue;
	                }
	                if ($isCloudService) {
	                    if (hasBeanInfo.indexOf(attr) < 0) {
	                        data["extProp[" + attr + "]"] = node.element[attr];
	                    } else if (attr != "id" && attr != "haschild" && attr != "isEnd") {
	                        data[attr + ""] = node.element[attr];
	                    }
	                } else {
	                    if (hasBeanInfo.indexOf(attr) < 0) {
	                        data["treeBean.extProp." + attr + ""] = node.element[attr];
	                    } else if (attr != "id" && attr != "haschild" && attr != "isEnd") {
	                        data["treeBean." + attr + ""] = node.element[attr];
	                    }
	                }
	            }
	            var urlPath1 = "";
	            if (typeof $$pageContextPath != "undefined") {
	                urlPath1 = $$pageContextPath;
	            } else {
	                urlPath1 = $$ContextPath.serviceContext;
	            }

	            _jquery2.default.ajax({
	                url: urlPath1 + "framework/treeview.do?dateValue=" + new Date().getTime(),
	                async: false,
	                data: data,
	                type: "post",
	                success: function success(data) {
	                    data = data.replace('<?xml version="1.0" encoding="utf-8"?>', "");
	                    var s = (0, _framework.toXmlDom)(data);
	                    var initJsonData = (0, _framework.xmlToJson)(s);
	                    if (s.childNodes.length != 0) {
	                        var treeBean = s.childNodes[0].children || s.childNodes[0].childNodes;
	                        createTree(treeBean, node, expandLevel);
	                    }
	                }
	            });
	        };

	        this._dynRenderNode = function (id, dept) {
	            if (model.treeMap[id].element.haschild != 0 && model.treeMap[id].children.length == 0) {
	                this._dynLoadTreeModel(model.treeMap[id]);
	            }
	            model.treeMap[id].data.hasrender = true;
	            _section = "";
	            var childNodes = childRender(model.treeMap[id].children, dept);

	            var tree = (0, _jquery2.default)("#" + model.treeMap[id].childrenId);
	            tree.hide();
	            tree[0].innerHTML = childNodes;
	        };

	        this._expandNode = function (id, callback, dept) {
	            model.treeMap[id].data.isopen = true;
	            if (!model.treeMap[id].data.hasrender) {
	                that._dynRenderNode(id, dept);
	            }
	            that._show(model.treeMap[id].childrenId, callback);
	        };

	        this._collapseNode = function (id, callback) {
	            model.treeMap[id].data.isopen = false;
	            that._hide(model.treeMap[id].childrenId, callback);
	        };

	        this._show = function (id, callback) {
	            (0, _jquery2.default)("#" + id).slideDown(200, callback);
	        };

	        this._hide = function (id, callback) {
	            (0, _jquery2.default)("#" + id).slideUp(200, callback);
	        };

	        this._expandNodeCallBack = function (node, id) {
	            if (model.treeMap[id].element.isEnd == "1") {
	                (0, _jquery2.default)(node).removeClass("i-k-tree-lastclose");
	                (0, _jquery2.default)(node).addClass("i-k-tree-lastopen");
	            } else {
	                (0, _jquery2.default)(node).removeClass("i-k-tree-nodeclose");
	                (0, _jquery2.default)(node).addClass("i-k-tree-nodeopen");
	            }

	            var icon = (0, _jquery2.default)("#" + this.data.id + " #" + id + " .i-k-tree-icon-span" + " span");
	            if (model.treeMap[id].element.openIcon != "") {
	                var urlPath = "";
	                if (typeof $$pageContextPath != "undefined") {
	                    urlPath = $$pageContextPath;
	                } else {
	                    urlPath = $$ContextPath.serviceContext;
	                }
	                icon.removeClass().addClass("i-k-tree-icon-custom").css("background", "url(" + urlPath + model.treeMap[id].element.openIcon + ")");
	            } else {
	                icon.removeAttr("style").removeClass().addClass("i-k-tree-icon-parentopen");
	            }

	            if (that.data.dynamic && that.data.checkChildren) {
	                var ischecked = model.treeMap[id].data.ischecked;
	                var checkboxNode = (0, _jquery2.default)(node.parentNode).next().children()[0];
	                if (ischecked == _consts.checkFlag.CHECKED) {
	                    that._setNodeCheck(id, true, false);
	                }
	            }
	        };

	        this._collapseNodeCallBack = function (node, id) {
	            if (model.treeMap[id].element.isEnd == "1") {
	                (0, _jquery2.default)(node).removeClass("i-k-tree-lastopen");
	                (0, _jquery2.default)(node).addClass("i-k-tree-lastclose");
	            } else {
	                (0, _jquery2.default)(node).removeClass("i-k-tree-nodeopen");
	                (0, _jquery2.default)(node).addClass("i-k-tree-nodeclose");
	            }

	            var icon = (0, _jquery2.default)("#" + this.data.id + " #" + id + " .i-k-tree-icon-span" + " span");
	            if (model.treeMap[id].element.closeIcon != "") {
	                var urlPath = "";
	                if (typeof $$pageContextPath != "undefined") {
	                    urlPath = $$pageContextPath;
	                } else {
	                    urlPath = $$ContextPath.serviceContext;
	                }
	                icon.removeClass().addClass("i-k-tree-icon-custom").css("background", "url(" + urlPath + model.treeMap[id].element.closeIcon + ")");
	            } else {
	                icon.removeAttr("style").removeClass().addClass("i-k-tree-icon-parentclose");
	            }
	        };
	    },

	    getSelectedNode: function getSelectedNode(alertInfo) {
	        var selectedTreebean = null;
	        var id = (0, _jquery2.default)((0, _jquery2.default)("#" + this.data.id + " .i-k-tree-row-selected").parent()).attr("id");
	        var nodeObj = this.model.treeMap[id];
	        if (typeof nodeObj == "undefined") {
	            if (alertInfo) {
	                HyMessage("没有选中的节点！");
	            }
	        } else {
	            selectedTreebean = nodeObj.element;
	            if (nodeObj.parent == null) {
	                selectedTreebean.parent = null;
	            } else {
	                selectedTreebean.parent = nodeObj.parent.element.code;
	            }
	        }
	        return selectedTreebean;
	    },

	    getCheckedNodes: function getCheckedNodes(flag, alertInfo) {
	        if (flag == undefined) {
	            flag = false;
	        }
	        var selectedTreebeanArr = [];
	        var selectedNodesMap = this.data.selectNodes;

	        if (flag == false) {
	            for (nodeId in selectedNodesMap) {
	                selectedTreebeanArr.push(selectedNodesMap[nodeId]);
	            }
	        } else {
	            for (var nodeId in selectedNodesMap) {
	                var element = selectedNodesMap[nodeId];
	                if (element.haschild == "0") {
	                    selectedTreebeanArr.push(element);
	                }
	            }
	        }
	        if (selectedNodesMap.length == 0) {
	            if (alertInfo) {
	                HyMessage("没有选择的节点信息");
	            }
	        }
	        return selectedTreebeanArr;
	    },

	    getParent: function getParent(treeBean, alertInfo) {
	        var parentTreebean = null;
	        if (treeBean != null) {
	            var nodeId = this.data.id + "_" + treeBean.id;
	            var parentNodeObj = this.model.treeMap[nodeId].parent;

	            if (parentNodeObj == null) {
	                if (alertInfo) {
	                    HyMessage.alert("选中节点为根节点，无父节点信息");
	                }
	            } else {
	                parentTreebean = parentNodeObj.element;
	            }
	        }
	        return parentTreebean;
	    },

	    getParentCascade: function getParentCascade(treeBean, alertInfo) {
	        var parentTreeBeanArr = [];
	        if (treeBean != null) {
	            var nodeId = this.data.id + "_" + treeBean.id;
	            var parentNodeObj = this.model.treeMap[nodeId].parent;
	            if (parentNodeObj != null) {
	                while (parentNodeObj != null) {
	                    parentTreeBeanArr.push(parentNodeObj.element);
	                    parentNodeObj = this.model.treeMap[parentNodeObj.nodeId].parent;
	                }
	            } else {
	                if (alertInfo) {
	                    HyMessage("选中节点为根节点，无父节点信息");
	                }
	            }
	        }
	        return parentTreeBeanArr;
	    },

	    getChildren: function getChildren(treeBean, alertInfo) {
	        var childrenTreeBeanArr = [];
	        if (treeBean != null) {
	            var nodeId = this.data.id + "_" + treeBean.id;
	            if (this.model.treeMap[nodeId].element.haschild == "1") {
	                var childrenNodeArr = this.model.treeMap[nodeId].children;
	                if (childrenNodeArr != null && childrenNodeArr.length > 0) {
	                    for (var i = 0; i < childrenNodeArr.length; i++) {
	                        childrenTreeBeanArr.push(childrenNodeArr[i].element);
	                    }
	                } else {
	                    this.refreshNode(this.model.treeMap[nodeId].element, "1");
	                    childrenNodeArr = this.model.treeMap[nodeId].children;
	                    if (childrenNodeArr != null && childrenNodeArr.length > 0) {
	                        for (var i = 0; i < childrenNodeArr.length; i++) {
	                            childrenTreeBeanArr.push(childrenNodeArr[i].element);
	                        }
	                    }
	                }
	            } else {
	                if (alertInfo) {
	                    HyMessage("选中节点为叶子节点，无子节点信息!");
	                }
	            }
	        }

	        return childrenTreeBeanArr;
	    },

	    getChildrenCascade: function getChildrenCascade(treeBean, alertInfo) {

	        if (alertInfo == "undefined") {
	            alertInfo = true;
	        }
	        var childrenTreeBeanArr = [];
	        if (treeBean != null) {
	            var nodeId = this.data.id + "_" + treeBean.id;
	            var childrenNodeArr = [];
	            var childrenNodes = this.model.treeMap[nodeId].children;

	            if (childrenNodes != null && childrenNodes.length > 0) {
	                for (var i = 0; i < childrenNodes.length; i++) {
	                    childrenNodeArr.push(childrenNodes[i]);
	                }
	                while (childrenNodeArr.length > 0) {
	                    var firstChildNode = childrenNodeArr.shift();
	                    childrenTreeBeanArr.push(firstChildNode.element);
	                    var childrenArr = firstChildNode.children;
	                    if (childrenArr != null && childrenArr.length > 0) {
	                        for (var i = childrenArr.length - 1; i >= 0; i--) {
	                            childrenNodeArr.unshift(childrenArr[i]);
	                        }
	                    }
	                }
	            } else {
	                if (alertInfo) {
	                    HyMessage("该节点没有展开或者是子节点,没有子孙节点信息!");
	                }
	            }
	        }
	        return childrenTreeBeanArr;
	    },

	    refreshRootNode: function refreshRootNode() {
	        var rootId = this.data.id + "_0";
	        var rootBean = this.model.treeMap[rootId].element;
	        this.refreshNode(rootBean, this.data.expandLevel);
	    },

	    createNewTreeByRootCode: function createNewTreeByRootCode(rootCode, s) {
	        var me = this;
	        if (s == undefined && s != "") {
	            var urlPath1 = "";
	            if (typeof $$pageContextPath != "undefined") {
	                urlPath1 = $$pageContextPath;
	            } else {
	                urlPath1 = $$ContextPath.serviceContext;
	            }
	            _jquery2.default.ajax({
	                url: urlPath1 + "framework/treeview.do?dateValue=" + new Date().getTime(),
	                type: "post",
	                data: {
	                    rightFilter: me.data.rightFilter,
	                    expandLevel: me.data.expandLevel,
	                    rootCode: rootCode,
	                    retriever: me.data.retriever,
	                    dynamic: me.data.dynamic,
	                    rootVisible: me.data.rootVisible,
	                    dataProvider: me.data.dataProvider
	                },
	                error: function error() {
	                    alert("进行连接信息传递出错\n");
	                },
	                async: false,
	                success: function success(data) {
	                    if (data.indexOf('$$errorpage') != -1) {
	                        (0, _jquery2.default)("form").html(data);
	                    }
	                    var data = data.replace('<?xml version="1.0" encoding="utf-8"?>', "");
	                    var s = (0, _framework.toXmlDom)(data);
	                    me.createNewTree(s);
	                },
	                complete: function complete(XHR, TS) {
	                    XHR = null;
	                }
	            });
	        } else {
	            me.createNewTree(s);
	        }
	    },

	    refreshNode: function refreshNode(treeBean, expandLevel) {
	        if (treeBean != null) {
	            var id = this.data.id + "_" + treeBean.id;
	            var nodeObj = this.model.treeMap[id];
	            var childrenId = nodeObj.childrenId;

	            var expendFlag = false;
	            if (!(nodeObj.parent == null && !this.data.rootVisible) && nodeObj.data.isopen && nodeObj.children.length > 0) {
	                expendFlag = true;

	                this.collapseNode(treeBean);
	            }

	            if (nodeObj.parent == null && !this.data.rootVisible) {
	                (0, _jquery2.default)("#" + this.data.id).empty();
	            } else {
	                (0, _jquery2.default)("#" + childrenId).empty();
	            }

	            this.deleteChildrenFormModel(this.model.treeMap[id]);

	            this.model.treeMap[id].children = [];

	            if (typeof expandLevel == "undefined") {
	                if (nodeObj.dept < this.data.expandLevel) {
	                    expandLevel = this.data.expandLevel - nodeObj.dept;
	                } else {
	                    expandLevel = "1";
	                }
	            }

	            this._dynLoadTreeModel(nodeObj, expandLevel);

	            this.model.treeMap[id].data.hasrender = true;
	            var nodes = this.model.treeMap[id].children;
	            var _section = "";
	            if (nodes.length > 0) {
	                if (this.model.treeMap[id].parent == null && !this.data.rootVisible) {
	                    _section += this.renderRefreshNodes(nodes, expandLevel);
	                    (0, _jquery2.default)("#" + this.data.id).append(_section);
	                } else {
	                    if (this.model.treeMap[id].element.haschild == "0") {
	                        this.model.treeMap[id].element.haschild = "1";
	                        this.model.treeMap[id].data.isopen = false;
	                        (0, _jquery2.default)((0, _jquery2.default)("#" + id).children()[0]).children("span:last-child").remove();
	                        if (this.model.treeMap[id].element.isEnd == "1") {
	                            (0, _jquery2.default)((0, _jquery2.default)("#" + id).children()[0]).append("<span class='i-k-tree-node-control i-k-tree-lastclose'></span>");
	                        } else {
	                            (0, _jquery2.default)((0, _jquery2.default)("#" + id).children()[0]).append("<span class='i-k-tree-node-control i-k-tree-nodeclose'></span>");
	                        }
	                        (0, _jquery2.default)("#" + this.data.id + " #" + id + " .i-k-tree-icon-childnode").removeClass("i-k-tree-icon-childnode").addClass("i-k-tree-icon-parentclose");
	                    }

	                    _section += this.renderRefreshNodes(nodes, expandLevel);
	                    (0, _jquery2.default)("#" + this.model.treeMap[id].childrenId).hide().append(_section);
	                }
	            } else {
	                if (this.model.treeMap[id].element.haschild == "1") {
	                    this.model.treeMap[id].element.haschild = "0";
	                    (0, _jquery2.default)((0, _jquery2.default)("#" + id).children()[0]).children("span:last-child").remove();

	                    if (this.model.treeMap[id].element.isEnd == "0") {
	                        (0, _jquery2.default)((0, _jquery2.default)("#" + id).children()[0]).append("<span class='i-k-tree-item'></span>");
	                    } else {
	                        (0, _jquery2.default)((0, _jquery2.default)("#" + id).children()[0]).append("<span class='i-k-tree-last'></span>");
	                    }

	                    (0, _jquery2.default)("#" + this.data.id + " #" + id + " .i-k-tree-icon-parentclose").removeClass("i-k-tree-icon-parentclose").addClass("i-k-tree-icon-childnode");
	                }
	                return;
	            }

	            if (expendFlag) {
	                this.expandNode(treeBean);

	                if (this.data.multipleTree && this.data.checkChildren) {
	                    if (this.model.treeMap[id].data.ischecked == "2") {
	                        var node = (0, _jquery2.default)((0, _jquery2.default)("#" + this.data.id + " #" + id).children()[1]).children()[0];
	                        this.model.treeMap[id].data.ischecked = "0";

	                        (0, _jquery2.default)(node).removeClass(_icon.CHECKED).removeClass(_icon.INDETERMINATE).addClass(_icon.UNCHECKED);
	                        this._setParentsCascadeSelected(node);
	                    }
	                }
	            }
	        }
	    },

	    deleteChildrenFormModel: function deleteChildrenFormModel(nodeObj) {
	        if (nodeObj == undefined) {
	            return;
	        }
	        var childrenArr = nodeObj.children;
	        if (childrenArr.length > 0) {
	            for (var i = 0; i < childrenArr.length; i++) {
	                var childNodeId = childrenArr[i].nodeId;
	                var childNodeObj = this.model.treeMap[childNodeId];
	                this.deleteChildrenFormModel(childNodeObj);
	                delete this.model.treeMap[childNodeId];

	                if (childNodeId in this.data.selectNodes) {
	                    delete this.data.selectNodes[childNodeId];
	                }
	            }
	        }
	    },

	    collapseNode: function collapseNode(treeBean, alertInfo) {
	        if (alertInfo == undefined) {
	            alertInfo = true;
	        }
	        if (treeBean != null) {
	            var id = this.data.id + "_" + treeBean.id;
	            var nodeObj = this.model.treeMap[id];
	            var node = (0, _jquery2.default)((0, _jquery2.default)("#" + this.data.id + " #" + id).children()[0]).children("span:last-child")[0];
	            if (typeof nodeObj != "undefined") {
	                if (nodeObj.data.isopen) {
	                    if (nodeObj.element.haschild == "0") {
	                        HyMessage({
	                            message: '该节点是叶子节点,无法关闭!',
	                            type: 'warning'
	                        });
	                    } else {
	                        this._collapseNode(id, null);
	                        this._collapseNodeCallBack(node, id);
	                    }
	                } else {
	                    if (alertInfo) {
	                        HyMessage({
	                            message: '该节点已是关闭状态！',
	                            type: 'info'
	                        });
	                    }
	                }
	            } else {
	                if (alertInfo) {
	                    HyMessage({
	                        message: '没有找到要关闭的节点！',
	                        type: 'warning'
	                    });
	                }
	            }
	        }
	    },

	    expandNode: function expandNode(treeBean, alertInfo) {
	        if (alertInfo == undefined) {
	            alertInfo = true;
	        }
	        if (treeBean != null) {
	            var id = this.data.id + "_" + treeBean.id;
	            var nodeObj = this.model.treeMap[id];
	            var node = (0, _jquery2.default)((0, _jquery2.default)("#" + this.data.id + " #" + id).children()[0]).children("span:last-child")[0];
	            if (typeof nodeObje != "undifined") {
	                if (nodeObj.data.isopen == false) {
	                    if (nodeObj.element.haschild == "1") {
	                        this._expandNode(id, null, 1);
	                        this._expandNodeCallBack(node, id);
	                    } else {
	                        if (alertInfo) {
	                            HyMessage({
	                                message: '该节点是叶子节点,无法展开!',
	                                type: 'warning'
	                            });
	                        }
	                    }
	                } else {
	                    if (alertInfo) {
	                        HyMessage({
	                            message: '该节点已是展开状态！',
	                            type: 'info'
	                        });
	                    }
	                }
	            } else {
	                if (alertInfo) {
	                    HyMessage({
	                        message: '没有找到要展开的节点！',
	                        type: 'warning'
	                    });
	                }
	            }
	        }
	    },

	    display: function display(flag) {
	        var treeId = this.data.id;
	        if ((0, _jquery2.default)("#" + treeId).length > 0) {
	            if (flag == "block") {
	                (0, _jquery2.default)("#" + treeId).css("display", "block");
	            } else if (flag == "none") {
	                (0, _jquery2.default)("#" + treeId).css("display", "none");
	            }
	        } else {
	            HyMessage("不存在可以设置的标签");
	        }
	    },

	    getNodeLevel: function getNodeLevel(treeBean) {
	        if (treeBean.id != undefined) {
	            var attr = treeBean.id.split("_");
	            return attr.length;
	        }
	    },


	    selectNode: function selectNode(treeBean, alertInfo) {
	        if (treeBean != null) {
	            var parentArray = this.getParentCascade(treeBean);
	            if (parentArray.length > 0) {
	                for (var k = parentArray.length - 1; k >= 0; k--) {
	                    this.expandNode(parentArray[k], alertInfo);
	                }
	            }
	            var nodeId = this.data.id + "_" + treeBean.id;
	            var node = (0, _jquery2.default)("#" + nodeId).children("div:last-child");
	            if (node.length > 0) {
	                if (this._clickNode) {
	                    (0, _jquery2.default)(this._clickNode).removeClass("i-k-tree-row-selected");
	                }
	                (0, _jquery2.default)(node).addClass("i-k-tree-row-selected");

	                this._clickNode = node;

	                var viewDiv = (0, _jquery2.default)("#" + this.data.id).closest("div[type!='tree']")[0];
	                if (viewDiv) {
	                    var vHeight = viewDiv.offsetHeight;

	                    var tHeight = node.offset().top;
	                    if (tHeight > vHeight) {
	                        var parents = node.parents(".i-k-tree-row");
	                        var allParentsOffsetTop = 0;
	                        if (parents.length > 0) {
	                            for (var i = 0, length = parents.length; i < length; i++) {
	                                allParentsOffsetTop += parents[i].offsetTop;
	                            }
	                        }

	                        viewDiv.scrollTop = allParentsOffsetTop - vHeight / 2;
	                    }
	                }
	            } else {
	                if (alertInfo) {
	                    HyMessage("需要选中的节点不存在或未展开！");
	                }
	            }
	            return nodeId + "_text";
	        }
	    },

	    findNodeByCode: function findNodeByCode(code) {
	        for (var nodeId in this.model.treeMap) {
	            var nodeObj = this.model.treeMap[nodeId];
	            if (nodeObj.element.code == code) {
	                if (nodeObj.parent == null) {
	                    nodeObj.element.parent = null;
	                } else {
	                    nodeObj.element.parent = nodeObj.parent.element.code;
	                }
	                return nodeObj.element;
	            }
	        }
	        return null;
	    },

	    deleteNodeByCode: function deleteNodeByCode(code) {
	        var node = this.findNodeByCode(code);
	        if (node == null || node == undefined) {
	            HyMessage.error("未找到node节点，请检查code是否正确！");
	            return;
	        }
	        var noneEntity = (0, _jquery2.default)("#" + this.data.id + "_" + node.id).parent();
	        this._changeNodeImg(node);
	        if (this.data.multipleTree) {
	            this._changeNodeChecked(node);
	        }

	        this.deleteNodeFromTreeMap(this.data.id + "_0", this.data.id + "_" + node.id);

	        noneEntity.remove();
	    },
	    _changeNodeChecked: function _changeNodeChecked(node) {
	        var nodeObj = this.model.treeMap[this.data.id + "_" + node.id];
	        var brotherNodes = nodeObj.parent.children;
	        if (brotherNodes.length > 1) {
	            var checkFlag = true;
	            for (var i = 0; i < brotherNodes.length; i++) {
	                if (brotherNodes[i].data.ischecked == nodeObj.data.ischecked && nodeObj.nodeId != brotherNodes[i].nodeId) {
	                    checkFlag = false;
	                    break;
	                }
	            };

	            if (checkFlag) {
	                if (nodeObj.data.ischecked == "1") {
	                    this._setNodeCheck(nodeObj.nodeId, false, true);
	                } else if (nodeObj.data.ischecked == "2" && nodeObj.children.length > 0) {
	                    for (var i = 0; i < nodeObj.children.length; i++) {
	                        this._setNodeCheck(nodeObj.children[i].nodeId, false, true);
	                    };
	                } else {
	                    this._setNodeCheck(nodeObj.nodeId, true, true);
	                }
	            }
	            if (nodeObj.nodeId in this.data.selectNodes) {
	                delete this.data.selectNodes[nodeObj.nodeId];
	            }
	        } else if (brotherNodes.length == 1) {
	            if (nodeObj.data.ischecked == "1") {}
	            if (nodeObj.nodeId in this.data.selectNodes) {
	                delete this.data.selectNodes[nodeObj.nodeId];
	            }
	        }
	    },
	    _changeNodeImg: function _changeNodeImg(node) {
	        var nodeObj = this.model.treeMap[this.data.id + "_" + node.id];
	        var brotherNodes = nodeObj.parent.children;
	        if (brotherNodes.length > 1 && node.isEnd == "1") {
	            var lastBrotherNode = brotherNodes[brotherNodes.length - 2];
	            (0, _jquery2.default)("#" + lastBrotherNode.nodeId + "_item").removeClass('i-k-tree-item').addClass('i-k-tree-last');
	        } else if (brotherNodes.length == 1) {
	            var parentNode = nodeObj.parent;
	            (0, _jquery2.default)("#" + parentNode.nodeId + "_nodeopen").removeClass('i-k-tree-nodeopen').removeClass('i-k-tree-nodeclose');
	            (0, _jquery2.default)("#" + parentNode.nodeId + "_nodeopen").css({ "width": "17px", "height": "24px", "margin": "0px" });

	            if (parentNode.element.isEnd == "1") {
	                (0, _jquery2.default)("#" + parentNode.nodeId + "_nodeopen").addClass('i-k-tree-last');
	            } else {
	                (0, _jquery2.default)("#" + parentNode.nodeId + "_nodeopen").addClass('i-k-tree-item');
	            }
	            (0, _jquery2.default)("#" + parentNode.nodeId + "_parentopen").removeClass('i-k-tree-icon-parentopen').addClass('i-k-tree-icon-childnode');
	        }
	    },
	    deleteNodeFromTreeMap: function deleteNodeFromTreeMap(treeRootId, deleteNodeId) {
	        var nodeObj = this.model.treeMap[treeRootId];
	        var childrenArr = nodeObj.children;
	        if (childrenArr.length > 0) {
	            for (var i = 0; i < childrenArr.length; i++) {
	                var childNodeId = childrenArr[i].nodeId;
	                if (childNodeId == deleteNodeId) {
	                    childrenArr.splice(i, 1);
	                    this.deleteChildrenFormModel(this.model.treeMap[childNodeId]);
	                    delete this.model.treeMap[deleteNodeId];
	                } else {
	                    this.deleteNodeFromTreeMap(childNodeId, deleteNodeId);
	                }
	            }
	        }
	    },

	    getRootCode: function getRootCode() {
	        var rootId = this.data.id + "_0";


	        return this.model.treeMap[rootId].element.code;
	    },

	    getRootBean: function getRootBean() {
	        var rootId = this.data.id + "_0";
	        return this.model.treeMap[rootId].element;
	    },

	    isChecked: function isChecked(treeBean, alertInfo) {
	        var ischecked = false;
	        if (treeBean != null) {
	            var nodeId = this.data.id + "_" + treeBean.id;
	            var nodeObj = this.model.treeMap[nodeId];
	            if (typeof nodeObj != "undefined") {
	                if (nodeObj.data.ischecked == "1") {
	                    ischecked = true;
	                }
	            } else {
	                if (alertInfo) {
	                    HyMessage("该节点不存在！");
	                }
	            }
	        }
	        return ischecked;
	    },

	    setCheckedNodes: function setCheckedNodes(treeBean, alertInfo) {
	        if (treeBean != null) {
	            var nodeId = this.data.id + "_" + treeBean.id;
	            var nodeObj = this.model.treeMap[nodeId];
	            if (typeof nodeObj != "undefined") {
	                if (nodeObj.data.ischecked != "1") {
	                    this._setNodeCheck(nodeId, true, true);
	                }
	            } else {
	                if (alertInfo) {
	                    HyMessage("该节点不存在！");
	                }
	            }
	        }
	    },

	    checkParentNode: function checkParentNode(treeBean, alertInfo) {
	        if (treeBean != null) {
	            var nodeId = this.data.id + "_" + treeBean.id;
	            var parentNodeObj = this.model.treeMap[nodeId].parent;
	            if (parentNodeObj == null) {
	                if (alertInfo) {
	                    HyMessage("该节点已是根节点！");
	                }
	            } else {
	                if (typeof parentNodeObj != "undefined") {
	                    if (parentNodeObj.data.ischecked != "1") {
	                        this._setNodeCheck(parentNodeObj.nodeId, true, true);
	                    }
	                } else {
	                    if (alertInfo) {
	                        HyMessage("该节点不存在！");
	                    }
	                }
	            }
	        }
	    },

	    cancelNodeChecked: function cancelNodeChecked(treeBean, alertInfo) {
	        if (treeBean != null) {
	            var nodeId = this.data.id + "_" + treeBean.id;
	            var nodeObj = this.model.treeMap[nodeId];
	            if (typeof nodeObj != "undefined") {
	                if (nodeObj.data.ischecked == "1") {
	                    this._setNodeCheck(nodeId, false, true);
	                }
	            } else {
	                if (alertInfo) {
	                    HyMessage("该节点不存在！");
	                }
	            }
	        }
	    },

	    cancelSelectedNode: function cancelSelectedNode() {
	        (0, _jquery2.default)("#" + this.data.id + " .i-k-tree-row-selected").removeClass("i-k-tree-row-selected");
	        this._clickNode = null;
	    },

	    hasChildren: function hasChildren(code, alertInfo) {
	        for (var nodeId in this.model.treeMap) {
	            var nodeObj = this.model.treeMap[nodeId];
	            if (nodeObj.element.code == code) {
	                return nodeObj.element.haschild == "1" ? true : false;
	            }
	        }
	        if (alertInfo) {
	            HyMessage("通过code没有找到相应的节点！");
	        }
	        return false;
	    },

	    isExpanded: function isExpanded(treeBean) {
	        var isexpended = false;
	        if (treeBean != null) {
	            var id = this.data.id + "_" + treeBean.id;
	            var nodeObj = this.model.treeMap[id];
	            if (typeof nodeObje != "undifined") {
	                if (nodeObj.data.isopen == true) {
	                    isexpended = true;
	                }
	            }
	        }
	        return isexpended;
	    }
	});

	exports.default = treeorg;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _locale = __webpack_require__(38);

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
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.i18n = exports.use = exports.t = undefined;

	var _zhCN = __webpack_require__(39);

	var _zhCN2 = _interopRequireDefault(_zhCN);

	var _vue = __webpack_require__(12);

	var _vue2 = _interopRequireDefault(_vue);

	var _deepmerge = __webpack_require__(40);

	var _deepmerge2 = _interopRequireDefault(_deepmerge);

	var _format = __webpack_require__(41);

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
/* 39 */
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
	      number: "第 {Number} 行"
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
	    }
	  }
	};

/***/ },
/* 40 */
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
/* 41 */
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
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(43);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(27)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./../../../node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"extract\":true,\"remove\":true}!./../../../node_modules/style-loader/index.js!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js?sourceMap!./tree.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./../../../node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"extract\":true,\"remove\":true}!./../../../node_modules/style-loader/index.js!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js?sourceMap!./tree.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(26)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.visible),
	      expression: "visible"
	    }],
	    key: "idflag",
	    staticClass: "i-k-tree",
	    attrs: {
	      "border": "0",
	      "id": _vm.treeId,
	      "type": "tree",
	      "cellspacing": "0",
	      "cellpadding": "0",
	      "background": ""
	    }
	  })
	},staticRenderFns: []}

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ElAutocomplete = __webpack_require__(46);

	ElAutocomplete.install = function (Vue) {
	  Vue.component(ElAutocomplete.name, ElAutocomplete);
	};

	module.exports = ElAutocomplete;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(47),
	  /* template */
	  __webpack_require__(52),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)

	module.exports = Component.exports


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(4);

	var _index2 = _interopRequireDefault(_index);

	var _clickoutside = __webpack_require__(48);

	var _clickoutside2 = _interopRequireDefault(_clickoutside);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(50);
	exports.default = {
	  name: 'HyAutocomplete',

	  components: {
	    ElInput: _index2.default
	  },
	  directives: { Clickoutside: _clickoutside2.default },
	  props: {
	    placeholder: String,
	    disabled: Boolean,
	    name: String,
	    upload: {
	      type: Boolean,
	      default: false
	    },
	    value: String,
	    fetchsuggestions: Function,
	    triggeronfocus: {
	      type: Boolean,
	      default: true
	    },
	    customitem: String
	  },
	  data: function data() {
	    return {
	      suggestions: [],
	      suggestionVisible: false,
	      loading: false,
	      highlightedIndex: -1,
	      inputHovering: false
	    };
	  },

	  computed: {
	    showClose: function showClose() {
	      var criteria = false;
	      if (this.value != "" && this.inputHovering) {
	        criteria = true;
	      }

	      return criteria;
	    }
	  },
	  mounted: function mounted() {
	    this.$parent.popperElm = this.popperElm = this.$el;
	  },

	  methods: {
	    handleClear: function handleClear() {
	      this.$emit('input', "");
	    },
	    handleChange: function handleChange(value) {
	      this.$emit('input', value);
	      if (value != "") {
	        this.showSuggestions(value);
	      }
	    },
	    handleFocus: function handleFocus() {
	      if (this.triggeronfocus) {
	        this.showSuggestions();
	      }
	    },
	    handleBlur: function handleBlur() {
	      this.hideSuggestions();
	    },
	    select: function select(index) {
	      var _this = this;

	      if (this.suggestions && this.suggestions[index]) {

	        this.$emit('input', this.suggestions[index].value);
	        this.$emit('select', this.suggestions[index]);
	        this.$nextTick(function () {
	          _this.hideSuggestions();
	        });
	      }
	    },
	    hideSuggestions: function hideSuggestions() {
	      this.suggestionVisible = false;
	      this.suggestions = [];
	      this.loading = false;
	    },
	    showSuggestions: function showSuggestions(value) {
	      var _this2 = this;

	      this.suggestionVisible = true;
	      this.loading = true;
	      this.fetchsuggestions(value, function (suggestions) {
	        _this2.loading = false;
	        if (Array.isArray(suggestions) && suggestions.length > 0) {
	          _this2.suggestions = suggestions;
	        } else {
	          _this2.hideSuggestions();
	        }
	      });
	    },
	    highlight: function highlight(index) {
	      if (!this.suggestionVisible || this.loading) {
	        return;
	      }
	      if (index < 0) {
	        index = 0;
	      } else if (index >= this.suggestions.length) {
	        index = this.suggestions.length - 1;
	      }

	      var elSuggestions = this.$refs.suggestions;
	      var elSelect = elSuggestions.children[index];
	      var scrollTop = elSuggestions.scrollTop;
	      var offsetTop = elSelect.offsetTop;

	      if (offsetTop + elSelect.scrollHeight > scrollTop + elSuggestions.clientHeight) {
	        elSuggestions.scrollTop += elSelect.scrollHeight;
	      }
	      if (offsetTop < scrollTop) {
	        elSuggestions.scrollTop -= elSelect.scrollHeight;
	      }

	      this.highlightedIndex = index;
	    }
	  }
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _event = __webpack_require__(49);

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
/* 49 */
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
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(51);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(27)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./../../node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"extract\":true,\"remove\":true}!./../../node_modules/style-loader/index.js!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js?sourceMap!./autocomplete.less", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./../../node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"extract\":true,\"remove\":true}!./../../node_modules/style-loader/index.js!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js?sourceMap!./autocomplete.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(26)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    directives: [{
	      name: "clickoutside",
	      rawName: "v-clickoutside",
	      value: (_vm.handleBlur),
	      expression: "handleBlur"
	    }],
	    staticClass: "el-autocomplete"
	  }, [_c('el-input', {
	    ref: "input",
	    attrs: {
	      "value": _vm.value,
	      "disabled": _vm.disabled,
	      "placeholder": _vm.placeholder,
	      "name": _vm.name,
	      "upload": _vm.upload,
	      "lazy": false
	    },
	    on: {
	      "change": _vm.handleChange,
	      "focus": _vm.handleFocus
	    },
	    nativeOn: {
	      "mouseenter": function($event) {
	        _vm.inputHovering = true
	      },
	      "mouseleave": function($event) {
	        _vm.inputHovering = false
	      },
	      "keydown": [function($event) {
	        if (_vm._k($event.keyCode, "up", 38)) { return; }
	        _vm.highlight(_vm.highlightedIndex - 1)
	      }, function($event) {
	        if (_vm._k($event.keyCode, "down", 40)) { return; }
	        _vm.highlight(_vm.highlightedIndex + 1)
	      }, function($event) {
	        if (_vm._k($event.keyCode, "enter", 13)) { return; }
	        _vm.select(_vm.highlightedIndex)
	      }]
	    }
	  }, [_c('i', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.showClose),
	      expression: "showClose"
	    }],
	    staticClass: "el-input__icon  el-icon-circle-close",
	    on: {
	      "click": _vm.handleClear
	    },
	    slot: "icon"
	  })]), _vm._v(" "), _c('transition', {
	    attrs: {
	      "name": "md-fade-bottom"
	    }
	  }, [(_vm.suggestionVisible) ? _c('ul', {
	    ref: "suggestions",
	    staticClass: "el-autocomplete__suggestions",
	    class: {
	      'is-loading': _vm.loading
	    }
	  }, [(_vm.loading) ? _c('li', [_c('i', {
	    staticClass: "el-icon-loading"
	  })]) : _vm._l((_vm.suggestions), function(item, index) {
	    return [(!_vm.customitem) ? _c('li', {
	      class: {
	        'highlighted': _vm.highlightedIndex === index
	      },
	      on: {
	        "click": function($event) {
	          _vm.select(index)
	        }
	      }
	    }, [_vm._v("\n          " + _vm._s(item.value) + "\n        ")]) : _c(_vm.customitem, {
	      tag: "component",
	      class: {
	        'highlighted': _vm.highlightedIndex === index
	      },
	      attrs: {
	        "item": item,
	        "index": index
	      },
	      on: {
	        "click": function($event) {
	          _vm.select(index)
	        }
	      }
	    })]
	  })], 2) : _vm._e()])], 1)
	},staticRenderFns: []}

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "el-dropdown__menu",
	    attrs: {
	      "transition": "md-fade-bottom"
	    },
	    on: {
	      "mouseenter": _vm.enterHandler,
	      "mouseleave": _vm.leaveHandler
	    }
	  }, [(_vm.filterable) ? _c('div', {
	    staticStyle: {
	      "padding-left": "10px",
	      "padding-right": "10px"
	    }
	  }, [_c('hy-autocomplete', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.filterValue),
	      expression: "filterValue"
	    }],
	    staticStyle: {
	      "width": "100%"
	    },
	    attrs: {
	      "fetchsuggestions": _vm.querySearch,
	      "placeholder": "请输入内容",
	      "triggeronfocus": false
	    },
	    domProps: {
	      "value": (_vm.filterValue)
	    },
	    on: {
	      "select": _vm.handleSelect,
	      "input": function($event) {
	        _vm.filterValue = $event
	      }
	    }
	  })], 1) : _vm._e(), _vm._v(" "), _c('div', {
	    ref: "treeContainer",
	    staticClass: "el-dropdown__tree-container"
	  }, [_c('el-tree', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.currentValue),
	      expression: "currentValue"
	    }],
	    ref: "tree",
	    attrs: {
	      "data": _vm.data,
	      "filternodemethod": _vm.filterNode,
	      "dynamic": _vm.dynamic,
	      "expandlevel": _vm.expandlevel,
	      "valueprovider": _vm.valueprovider,
	      "rootvisible": _vm.rootvisible,
	      "onlyselectleaf": _vm.onlyselectleaf,
	      "highlightcurrent": _vm.highlightCurrent,
	      "autoexpandparent": _vm.autoExpandParent,
	      "dataprovider": _vm.dataprovider,
	      "multiple": _vm.multiple,
	      "id": _vm.id,
	      "rootcode": _vm.rootcode,
	      "checkstrictly": _vm.checkstrictly,
	      "rendercontent": _vm.rendercontent
	    },
	    domProps: {
	      "value": (_vm.currentValue)
	    },
	    on: {
	      "input": function($event) {
	        _vm.currentValue = $event
	      }
	    }
	  })], 1)])
	},staticRenderFns: []}

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(55);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(27)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./../../node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"extract\":true,\"remove\":true}!./../../node_modules/style-loader/index.js!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js?sourceMap!./dropdown.less", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./../../node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"extract\":true,\"remove\":true}!./../../node_modules/style-loader/index.js!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js?sourceMap!./dropdown.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(26)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 56 */
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
	      expression: "visible_all "
	    }],
	    staticClass: "el-dropdown el-dropdown--text",
	    class: [_vm.size ? 'is-' + _vm.size : ''],
	    style: ([_vm.containerSize]),
	    on: {
	      "mouseenter": _vm.enterHandler,
	      "mouseleave": _vm.leaveHandler
	    }
	  }, [_c('el-input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.selectedLabel),
	      expression: "selectedLabel"
	    }],
	    ref: "reference",
	    attrs: {
	      "type": "text",
	      "showhistory": false,
	      "placeholder": _vm.currentPlaceholder,
	      "readonly": _vm.readonly,
	      "funcreadonly": true,
	      "lazy": false,
	      "size": _vm.size,
	      "icon-space": _vm.iconSpace,
	      "icon": _vm.iconClass
	    },
	    domProps: {
	      "value": (_vm.selectedLabel)
	    },
	    on: {
	      "focus": _vm.handleFocus,
	      "input": function($event) {
	        _vm.selectedLabel = $event
	      }
	    },
	    nativeOn: {
	      "click": function($event) {
	        _vm.toggleMenu($event)
	      },
	      "mouseenter": function($event) {
	        _vm.inputHovering = true
	      },
	      "mouseleave": function($event) {
	        _vm.inputHovering = false
	      }
	    }
	  }, [(_vm.$slots.prepend) ? _c('template', {
	    slot: "prepend"
	  }, [_vm._t("prepend")], 2) : _vm._e(), _vm._v(" "), (_vm.$slots.append) ? _c('template', {
	    slot: "append"
	  }, [_vm._t("append")], 2) : _vm._e()], 2), _vm._v(" "), (_vm.upload) ? _c('input', {
	    attrs: {
	      "type": "hidden",
	      "name": _vm.name,
	      "upload": "true"
	    },
	    domProps: {
	      "value": _vm.currentValue
	    }
	  }) : _vm._e(), _vm._v(" "), _c('transition', {
	    attrs: {
	      "name": "md-fade-bottom"
	    }
	  }, [_c('el-droptree-menu', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.currentValue),
	      expression: "currentValue"
	    }, {
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.visible),
	      expression: "visible "
	    }],
	    ref: "droptreeMenu",
	    attrs: {
	      "offset": _vm.offset,
	      "rootcode": _vm.rootcode,
	      "filterable": _vm.filterable,
	      "highlight-current": _vm.highlightcurrent,
	      "expand-level": _vm.expandLevel,
	      "rightfilter": _vm.rightfilter,
	      "onlyselectleaf": _vm.onlyselectleaf,
	      "auto-expand-parent": _vm.autoexpandparent,
	      "multiple": _vm.multiple,
	      "data": _vm.data,
	      "id": _vm.id,
	      "rootvisible": _vm.rootvisible,
	      "dynamic": _vm.dynamic,
	      "expandlevel": _vm.expandlevel,
	      "valueprovider": _vm.valueprovider,
	      "dataprovider": _vm.dataprovider,
	      "checkstrictly": _vm.checkstrictly,
	      "rendercontent": _vm.rendercontent
	    },
	    domProps: {
	      "value": (_vm.currentValue)
	    },
	    on: {
	      "input": function($event) {
	        _vm.currentValue = $event
	      }
	    }
	  })], 1)], 1)
	},staticRenderFns: []}

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(58),
	  /* template */
	  __webpack_require__(91),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)

	module.exports = Component.exports


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _props;

	var _index = __webpack_require__(59);

	var _index2 = _interopRequireDefault(_index);

	var _formcomponent = __webpack_require__(60);

	var _formcomponent2 = _interopRequireDefault(_formcomponent);

	var _index3 = __webpack_require__(61);

	var _index4 = _interopRequireDefault(_index3);

	var _emitter = __webpack_require__(7);

	var _emitter2 = _interopRequireDefault(_emitter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	exports.default = {
	  name: 'MyFormdroptree',
	  mixins: [_formcomponent2.default, _emitter2.default],
	  componentName: 'HyFormComponent',
	  components: {
	    ElDroptree: _index2.default,
	    ElFormItem: _index4.default
	  },
	  data: function data() {
	    return {
	      componentType: 'formdroptree'
	    };
	  },

	  props: (_props = {
	    label: String,
	    validatetitle: String,
	    labelwidth: String,
	    title: [String, Function],
	    prop: String,
	    required: Boolean,
	    rules: [Object, Array],
	    visible: {
	      type: Boolean,
	      default: true
	    },
	    show: {
	      type: Boolean,
	      default: true
	    },
	    name: {
	      type: String,
	      default: ""
	    },
	    id: {
	      type: String,
	      default: ""
	    },
	    value: String,
	    data: {
	      type: String
	    },
	    readonly: Boolean,
	    clearable: {
	      type: Boolean,
	      default: true
	    },
	    rootcode: {
	      type: String,
	      default: ''
	    },
	    filterable: {
	      type: Boolean,
	      default: true
	    },
	    onlyselectleaf: {
	      type: Boolean,
	      default: false
	    },
	    expandlevel: {
	      type: Number,
	      default: 3
	    },
	    multiple: {
	      type: Boolean,
	      default: false
	    },
	    dynamic: {
	      type: Boolean,
	      default: false
	    },
	    rootvisible: {
	      type: Boolean,
	      default: true
	    },
	    trigger: {
	      type: String,
	      default: 'click'
	    },
	    size: {
	      type: String,
	      default: ''
	    },
	    offset: {
	      type: [String, Number],
	      default: 0
	    },
	    rightfilter: {
	      type: Boolean,
	      default: false
	    },
	    valueprovider: {
	      type: String,
	      default: ''
	    },
	    nodeKey: {
	      type: String,
	      default: 'code'
	    },
	    checkstrictly: {
	      type: Boolean,
	      default: true
	    },
	    defaultexpandall: Boolean,
	    autoexpandparent: {
	      type: Boolean,
	      default: true
	    },
	    defaultCheckedKeys: Array,
	    defaultExpandedKeys: Array,
	    renderContent: Function,
	    showCheckbox: {
	      type: Boolean,
	      default: false
	    }
	  }, _defineProperty(_props, 'id', {
	    type: String,
	    default: ""
	  }), _defineProperty(_props, 'rowspan', {
	    type: [Number, String],
	    default: 1
	  }), _defineProperty(_props, 'colspan', {
	    type: [Number, String],
	    default: 1
	  }), _defineProperty(_props, 'props', {
	    default: function _default() {
	      return {
	        children: 'children',
	        label: 'label',
	        icon: 'icon'
	      };
	    }
	  }), _defineProperty(_props, 'lazy', {
	    type: Boolean,
	    default: false
	  }), _defineProperty(_props, 'highlightcurrent', Boolean), _props),
	  methods: {
	    handleNodeClick: function handleNodeClick(treeBean) {
	      this.$emit('nodeclick', treeBean);
	    },
	    nodeexpanded: function nodeexpanded(treeBean) {
	      this.$emit('nodeexpanded', treeBean);
	    },
	    nodecollapse: function nodecollapse(treeBean) {
	      this.$emit('nodecollapse', treeBean);
	    },
	    handleCheckChange: function handleCheckChange(treeBean, checked, indeterminate) {
	      this.$emit('checkchange', treeBean, checked, indeterminate);
	    },
	    findNodeByCode: function findNodeByCode(code) {
	      var node = this.$refs.myFormComponent.findNodeByCode(code);
	      return node;
	    },
	    getSelectedLabel: function getSelectedLabel() {
	      var label = this.$refs.myFormComponent.getLabel();
	      return label;
	    }
	  }
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _vue = __webpack_require__(12);

	var _vue2 = _interopRequireDefault(_vue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var MyDropTree = __webpack_require__(1);

	MyDropTree.install = function (Vue) {
	    Vue.component(MyDropTree.name, MyDropTree);
	};

	module.exports = MyDropTree;

/***/ },
/* 60 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    computed: {
	        inputReadonly: function inputReadonly() {
	            if (this.formReadonly) {
	                return true;
	            } else {
	                return this.readonly;
	            }
	        },
	        parent: function parent() {
	            var result = this.$parent;
	            while (result.$options.componentName !== 'form') {
	                result = result.$parent;
	            }
	            return result;
	        },
	        formitemClass: function formitemClass() {
	            var parentCols = parseInt(this.parent.cols);
	            var widthClass = 1;

	            if (this.colspan == 1 || parentCols == 1) {
	                widthClass = 'd-cell-1-' + parentCols;
	            } else if (this.colspan == 2) {
	                if (parentCols == 2) {
	                    widthClass = 'd-cell-1-1';
	                } else if (parentCols >= 3) {
	                    widthClass = 'd-cell-2-' + parentCols;
	                }
	            } else if (this.colspan == 3) {
	                if (parentCols == 3) {
	                    widthClass = 'd-cell-1-1';
	                } else if (parentCols >= 4) {
	                    widthClass = 'd-cell-3-' + parentCols;
	                }
	            } else if (this.colspan == 4) {
	                if (parentCols == 4) {
	                    widthClass = 'd-cell-1-1';
	                } else if (parentCols >= 5) {
	                    widthClass = 'd-cell-4-' + parentCols;
	                }
	            }

	            return widthClass;
	        }
	    },
	    methods: {
	        setFormReadonly: function setFormReadonly(val) {
	            this.formReadonly = val;
	        },
	        setValue: function setValue(val, isRunChange) {
	            var _this = this;

	            if (isRunChange != undefined) {
	                this.isRunChange = isRunChange;
	            }
	            this.currentValue = val;
	            setTimeout(function () {
	                _this.isRunChange = true;
	            }, 0);

	            if (this.cascadeid != undefined && this.cascadeid != "") {

	                var cascadeIdArr = this.cascadeid.split(";");
	                for (var i = 0; i < cascadeIdArr.length; i++) {
	                    $componentEvent.$emit('cascade', [cascadeIdArr[i], val]);
	                }
	            }
	        },
	        focus: function focus() {
	            this.$refs.myFormComponent.focus();
	        }
	    },

	    created: function created() {
	        if (this.type != 'formcustom') {
	            this.dispatch('form', 'registerForm', [this]);
	        }
	        this.$on('formReadonly', this.setFormReadonly);


	        if (this.value || this.value == false || this.value === 0) {
	            this.currentValue = this.value;
	        } else {
	            this.currentValue = "";
	        }
	    },
	    destroyed: function destroyed() {
	        if (this.id != undefined && this.id != "") {
	            window[this.id] = null;
	            delete window[this.id];
	        }
	    },

	    watch: {
	        value: function value(val, oldValue) {
	            this.currentValue = val;
	        },
	        currentValue: function currentValue(newVal, oldVal) {
	            var _this2 = this;

	            if (this.type != 'text') {
	                this.dispatch('form', 'setRecordValue', [this.name, newVal]);
	            }

	            if (this.isRunChange) {

	                if (this.componentType != undefined && this.componentType == 'formdroptree') {
	                    var newTreebean = this.findNodeByCode(newVal);
	                    var oldTreebean = this.findNodeByCode(oldVal);
	                    setTimeout(function () {
	                        _this2.$emit('change', newTreebean, oldTreebean);
	                    }, 0);
	                } else {
	                    setTimeout(function () {
	                        _this2.$emit('change', newVal, oldVal);
	                    }, 0);
	                }
	            }
	            this.$emit('input', newVal);
	            this.isRunChange = true;
	        }
	    },

	    data: function data() {
	        return {
	            currentValue: this.value === undefined ? "" : this.value,
	            formReadonly: false,
	            isRunChange: true };
	    }
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _formItem = __webpack_require__(62);

	var _formItem2 = _interopRequireDefault(_formItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_formItem2.default.install = function (Vue) {
	  Vue.component(_formItem2.default.name, _formItem2.default);
	};

	exports.default = _formItem2.default;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(63),
	  /* template */
	  __webpack_require__(90),
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

	var _asyncValidator = __webpack_require__(64);

	var _asyncValidator2 = _interopRequireDefault(_asyncValidator);

	var _emitter = __webpack_require__(7);

	var _emitter2 = _interopRequireDefault(_emitter);

	var _locale = __webpack_require__(37);

	var _locale2 = _interopRequireDefault(_locale);

	var _render = __webpack_require__(89);

	var _render2 = _interopRequireDefault(_render);

	var _framework = __webpack_require__(34);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'HyFormItem',

	  componentName: 'form-item',
	  components: { Render: _render2.default },
	  mixins: [_emitter2.default, _locale2.default],

	  props: {
	    label: String,
	    title: [String, Function],
	    validatetitle: String,
	    labelwidth: String,
	    prop: String,
	    formatter: Function,
	    size: String,
	    forminputvalue: [String, Number, Boolean, Date],
	    required: Boolean,
	    rules: [Object, Array]

	  },
	  computed: {
	    labelStyle: function labelStyle() {
	      var ret = {};

	      var labelwidth = this.labelwidth || this.form.labelwidth + "";
	      if (labelwidth) {
	        if (labelwidth.indexOf('px') == -1 && labelwidth.indexOf('%') == -1) {
	          labelwidth = labelwidth + "px";
	        }
	        ret.width = labelwidth;
	      }
	      return ret;
	    },
	    contentStyle: function contentStyle() {
	      var ret = {};
	      if (this.form.labelposition == 'line') {
	        return ret;
	      }
	      var labelwidth = this.labelwidth || this.form.labelwidth + "";
	      if (labelwidth) {
	        if (labelwidth.indexOf('px') == -1 && labelwidth.indexOf('%') == -1) {
	          labelwidth = labelwidth + "px";
	        }
	        ret.marginLeft = labelwidth;
	      }
	      if (this.size == "mini") {
	        ret.marginTop = '5px';
	      }
	      return ret;
	    },
	    itemStyle: function itemStyle() {
	      var ret = {};
	      if (this.size == "mini") {
	        ret.marginBottom = '3px';
	      }
	      return ret;
	    },
	    form: function form() {
	      var parent = this.$parent;
	      while (parent.$options.componentName !== 'form') {
	        parent = parent.$parent;
	      }
	      return parent;
	    },
	    errorStyle: function errorStyle() {
	      var style = {};

	      if (this.error != "") {
	        var inputDom = this.$children[0].$el.querySelectorAll(".el-input__inner")[0];
	        if (inputDom == undefined) {
	          inputDom = this.$children[0].$el.querySelectorAll(".el-input__icon__select")[0];
	        }
	        if (inputDom == undefined) {
	          inputDom = this.$children[0].$el.querySelectorAll(".el-textarea__inner")[0];
	        }
	        if (inputDom == undefined) {
	          return;
	        }
	        var inputWidth = inputDom.clientWidth;
	        var text = inputDom.value;
	        var errorWidth = (0, _framework.getStrCharLength)(this.error);
	        if (text != "") {
	          var textWidth = (0, _framework.getStrCharLength)(text);
	          if (textWidth + errorWidth > inputWidth) {
	            style.left = inputWidth - errorWidth - 20 + "px";
	          } else {
	            style.left = textWidth + 15 + "px";
	          }
	        }
	      }
	      return style;
	    },
	    currentTitle: function currentTitle() {
	      if (this.title) {
	        return this.title + this.form.labelsuffix;
	      } else if (this.label) {
	        return this.label + this.form.labelsuffix;
	      }
	    }
	  },

	  data: function data() {
	    return {
	      valid: true,
	      error: '',
	      validateDisabled: false,
	      validating: false,
	      validator: {},
	      showtipvalidate: false,
	      isRequired: false,
	      formIndex: {
	        type: [String, Number],
	        default: 0
	      },
	      retValue: ''
	    };
	  },

	  watch: {
	    forminputvalue: {
	      immediate: true,
	      handler: function handler(newVal, oldVal) {
	        if (this.formatter != undefined) {
	          if (newVal !== '') {
	            this.retValue = this.formatter(newVal);
	          }
	        }
	      }
	    },
	    rules: function rules(newValue, oldValue) {
	      if (newValue.required != undefined && oldValue.required == undefined) {
	        this.isRequired = true;
	      }
	    }

	  },
	  created: function created() {
	    if (this.prop != undefined) {
	      this.formIndex = this.prop;
	    } else {
	      var formIndex = $$formColumnIndex++;
	      this.formIndex = 'column' + formIndex;
	    }

	    this.showtipvalidate = this.form.showtipvalidate;

	    this.$on('el.form.blur', this.onFieldBlur);
	    this.$on('el.form.change', this.onFieldChange);
	    this.$on('el.form.focus', this.errorFocus);
	    this.$on('el.form.mouseover', this.mouseover);
	    this.$on('el.form.mouseout', this.mouseout);
	  },

	  methods: {
	    mouseover: function mouseover() {
	      var _this = this;

	      if (this.$children[0].readonly) {
	        return;
	      }

	      if (this.showtipvalidate && this.error !== "") {
	        var tooltip = this.form.$refs.tooltip;
	        tooltip.handleClosePopper();
	        setTimeout(function () {
	          _this.form.tooltipContent = _this.error;
	        }, 200);
	        tooltip.referenceElm = this.$children[0].$el;

	        tooltip.handleShowPopper();
	      }
	    },
	    mouseout: function mouseout() {
	      if (this.$children[0].readonly) {
	        return;
	      }
	      if (this.showtipvalidate && this.error !== "") {
	        var tooltip = this.form.$refs.tooltip;
	        tooltip.handleClosePopper();
	      }
	    },
	    formatterClick: function formatterClick() {
	      if (this.$children[0].readonly) {
	        return;
	      }
	      this.retValue = "";
	      this.$children.forEach(function (element) {
	        element.focus();
	      });
	    },
	    errorClick: function errorClick() {
	      this.error = "";
	      this.$children.forEach(function (element) {
	        element.focus();
	        if (element.$options.name == 'HySelect' || element.$options.name == 'HyDroptree' || element.$options.name == 'HyDatepicker') {
	          setTimeout(function () {
	            element.toggleMenu();
	          }, 0);
	        }
	      });
	    },
	    errorFocus: function errorFocus() {
	      if (this.$children[0].readonly) {
	        return;
	      }
	      this.error = "";
	      this.retValue = "";
	    },
	    validate: function validate(trigger, cb) {
	      var _this2 = this;

	      var rules = this.getFilteredRule(trigger);

	      if (!rules || rules.length === 0) {

	        cb && cb();
	        return true;
	      }
	      this.validating = true;

	      var descriptor = {};
	      descriptor[this.formIndex] = rules;

	      var validator = new _asyncValidator2.default(descriptor);
	      var model = {};

	      model[this.formIndex] = this.fieldValue;
	      validator.validate(model, { firstFields: true }, function (errors, fields) {
	        _this2.valid = !errors;
	        _this2.error = errors ? errors[0].message : '';
	        var title = _this2.title;
	        if (title == undefined) {
	          title = _this2.label;
	        }

	        if (_this2.error.indexOf('is required') != -1) {
	          if (typeof title === 'function') {
	            _this2.error = _this2.t('el.validate.enter') + _this2.validatetitle;
	          } else {
	            _this2.error = _this2.t('el.validate.enter') + title.replace(/<\/?.+?>/g, "").replace(/ /g, "");
	          }
	        } else if (_this2.error.indexOf('is not a valid email') != -1) {
	          _this2.error = _this2.t('el.validate.enter') + _this2.t('el.validate.email');
	        }

	        var pass = false;
	        if (_this2.error == "") {
	          for (var i = 0; i < rules.length; i++) {
	            if (rules[i].min != undefined && rules[i].max != undefined) {
	              if (_this2.fieldValue >= rules[i].min && _this2.fieldValue <= rules[i].max) {
	                pass = true;
	                break;
	              } else {
	                _this2.error = _this2.t('el.validate.mixValue') + rules[i].min + _this2.t('el.validate.maxValue') + rules[i].max;
	              }
	            } else if (rules[i].max != undefined) {
	              if (_this2.fieldValue <= rules[i].max) {
	                pass = true;
	                break;
	              } else {
	                _this2.error = +_this2.t('el.validate.maxValue') + rules[i].max;
	              }
	            } else if (rules[i].min != undefined) {
	              if (_this2.fieldValue >= rules[i].min) {
	                pass = true;
	                break;
	              } else {
	                _this2.error = _this2.t('el.validate.mixValue') + rules[i].min;
	              }
	            } else if (rules[i].range != undefined) {
	              if (_this2.fieldValue >= rules[i].range[0] && _this2.fieldValue <= rules[i].range[1]) {
	                pass = true;
	                break;
	              } else {
	                _this2.error = _this2.t('el.validate.enterValue') + rules[i].range[0] + _this2.t('el.validate.yu') + rules[i].range[1] + _this2.t('el.validate.between');
	              }
	            } else if (rules[i].minlength != undefined) {
	              if (_this2.fieldValue != undefined) {
	                var value = _this2.fieldValue + "";
	                if (value.length >= rules[i].minlength) {
	                  pass = true;
	                  break;
	                } else {
	                  _this2.error = _this2.t('el.validate.mixLength') + rules[i].maxlength;
	                }
	              }
	            } else if (rules[i].maxlength != undefined) {
	              if (_this2.fieldValue != undefined) {
	                var value = _this2.fieldValue + "";
	                if (value.length <= rules[i].maxlength) {
	                  pass = true;
	                  break;
	                } else {
	                  _this2.error = _this2.t('el.validate.maxLength') + rules[i].maxlength;
	                }
	              }
	            }
	          }
	        }
	        if (_this2.$children[0].readonly) {
	          _this2.error = "";
	        }


	        cb && cb(_this2.error);
	        _this2.validating = false;
	      });
	    },
	    resetField: function resetField() {
	      this.valid = true;
	      this.error = '';

	      var value = this.fieldValue;

	      if (Array.isArray(value) && value.length > 0) {
	        this.validateDisabled = true;
	      } else if (typeof value === 'string' && value !== '') {
	        this.validateDisabled = true;
	      } else if (typeof value === 'number') {
	        this.validateDisabled = true;
	      }
	    },
	    setFieldValue: function setFieldValue() {
	      this.fieldValue = this.forminputvalue;
	    },
	    getRules: function getRules() {
	      var rules = [];
	      if (this.rules) {
	        rules = this.rules;
	      } else {
	        if (this.form.rules && this.prop) {
	          rules = this.form.rules[this.prop];
	        }
	      }

	      return Array.isArray(rules) ? rules : [rules];
	    },
	    getFilteredRule: function getFilteredRule(trigger) {
	      var rules = this.getRules();

	      return rules.filter(function (rule) {
	        return !rule.trigger || rule.trigger.indexOf(trigger) !== -1;
	      });
	    },
	    onFieldBlur: function onFieldBlur(val) {
	      var _this3 = this;

	      if (this.$children[0].readonly) {
	        return;
	      }
	      if (!isNaN(val)) {
	        if (this.rules != undefined && this.rules.type === 'number') {
	          val = parseInt(val);
	        }
	      }
	      this.fieldValue = val;
	      this.validate('blur');

	      if (this.formatter != undefined) {
	        if (val !== '') {
	          this.retValue = this.formatter(val);
	        }
	      }
	      if (this.showtipvalidate && this.error !== "") {
	        var tooltip = this.form.$refs.tooltip;
	        tooltip.handleClosePopper();
	        setTimeout(function () {
	          _this3.form.tooltipContent = _this3.error;
	        }, 200);
	        tooltip.referenceElm = this.$children[0].$el;
	        tooltip.handleShowPopper();
	      } else if (this.showtipvalidate && this.error == "") {
	        var _tooltip = this.form.$refs.tooltip;

	        _tooltip.handleClosePopper();
	      }
	    },
	    onFieldChange: function onFieldChange(val) {
	      if (!isNaN(val)) {
	        if (this.rules != undefined && this.rules.type === 'number') {
	          val = parseInt(val);
	        }
	      }
	      if (this.validateDisabled) {
	        this.validateDisabled = false;
	        return;
	      }

	      this.fieldValue = val;
	      if (!this.form.isSetRecord) {
	        this.validate('change');
	      }
	    },
	    setRules: function setRules() {
	      var _this4 = this;

	      var rules = this.getRules();
	      rules.some(function (rule) {
	        if (rule.required) {
	          _this4.isRequired = true;
	          return false;
	        }
	      });

	      if (this.rules || this.prop) {
	        this.dispatch('form', 'el.form.addField', [this]);
	      }
	    }
	  },
	  mounted: function mounted() {
	    this.setRules();
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this.rules || this.prop) {
	      this.dispatch('form', 'el.form.removeField', [this]);
	    }
	  }
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _util = __webpack_require__(65);

	var _validator = __webpack_require__(66);

	var _validator2 = _interopRequireDefault(_validator);

	var _messages2 = __webpack_require__(88);

	var _rule = __webpack_require__(68);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 *  Encapsulates a validation schema.
	 *
	 *  @param descriptor An object declaring validation rules
	 *  for this schema.
	 */
	function Schema(descriptor) {
	  this.rules = null;
	  this._messages = _messages2.messages;
	  this.define(descriptor);
	}

	Schema.prototype = {
	  messages: function messages(_messages) {
	    if (_messages) {
	      this._messages = (0, _util.deepMerge)((0, _messages2.newMessages)(), _messages);
	    }
	    return this._messages;
	  },
	  define: function define(rules) {
	    if (!rules) {
	      throw new Error('Cannot configure a schema with no rules');
	    }
	    if ((typeof rules === 'undefined' ? 'undefined' : _typeof(rules)) !== 'object' || Array.isArray(rules)) {
	      throw new Error('Rules must be an object');
	    }
	    this.rules = {};
	    var z = void 0;
	    var item = void 0;
	    for (z in rules) {
	      if (rules.hasOwnProperty(z)) {
	        item = rules[z];
	        this.rules[z] = Array.isArray(item) ? item : [item];
	      }
	    }
	  },
	  validate: function validate(source_) {
	    var _this = this;

	    var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    var oc = arguments[2];

	    var source = source_;
	    var options = o;
	    var callback = oc;
	    if (typeof options === 'function') {
	      callback = options;
	      options = {};
	    }
	    if (!this.rules || Object.keys(this.rules).length === 0) {
	      if (callback) {
	        callback();
	      }
	      return;
	    }
	    function complete(results) {
	      var i = void 0;
	      var field = void 0;
	      var errors = [];
	      var fields = {};

	      function add(e) {
	        if (Array.isArray(e)) {
	          errors = errors.concat.apply(errors, e);
	        } else {
	          errors.push(e);
	        }
	      }

	      for (i = 0; i < results.length; i++) {
	        add(results[i]);
	      }
	      if (!errors.length) {
	        errors = null;
	        fields = null;
	      } else {
	        for (i = 0; i < errors.length; i++) {
	          field = errors[i].field;
	          fields[field] = fields[field] || [];
	          fields[field].push(errors[i]);
	        }
	      }
	      callback(errors, fields);
	    }

	    if (options.messages) {
	      var messages = this.messages();
	      if (messages === _messages2.messages) {
	        messages = (0, _messages2.newMessages)();
	      }
	      (0, _util.deepMerge)(messages, options.messages);
	      options.messages = messages;
	    } else {
	      options.messages = this.messages();
	    }

	    options.error = _rule.error;
	    var arr = void 0;
	    var value = void 0;
	    var series = {};
	    var keys = options.keys || Object.keys(this.rules);
	    keys.forEach(function (z) {
	      arr = _this.rules[z];
	      value = source[z];
	      arr.forEach(function (r) {
	        var rule = r;
	        if (typeof rule.transform === 'function') {
	          if (source === source_) {
	            source = _extends({}, source);
	          }
	          value = source[z] = rule.transform(value);
	        }
	        if (typeof rule === 'function') {
	          rule = {
	            validator: rule
	          };
	        } else {
	          rule = _extends({}, rule);
	        }
	        rule.validator = _this.getValidationMethod(rule);
	        rule.field = z;
	        rule.fullField = rule.fullField || z;
	        rule.type = _this.getType(rule);
	        if (!rule.validator) {
	          return;
	        }
	        series[z] = series[z] || [];
	        series[z].push({
	          rule: rule,
	          value: value,
	          source: source,
	          field: z
	        });
	      });
	    });
	    var errorFields = {};
	    (0, _util.asyncMap)(series, options, function (data, doIt) {
	      var rule = data.rule;
	      var deep = (rule.type === 'object' || rule.type === 'array') && (_typeof(rule.fields) === 'object' || _typeof(rule.defaultField) === 'object');
	      deep = deep && (rule.required || !rule.required && data.value);
	      rule.field = data.field;
	      function addFullfield(key, schema) {
	        return _extends({}, schema, {
	          fullField: rule.fullField + '.' + key
	        });
	      }

	      function cb() {
	        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

	        var errors = e;
	        if (!Array.isArray(errors)) {
	          errors = [errors];
	        }
	        if (errors.length) {
	          (0, _util.warning)('async-validator:', errors);
	        }
	        if (errors.length && rule.message) {
	          errors = [].concat(rule.message);
	        }

	        errors = errors.map((0, _util.complementError)(rule));

	        if ((options.first || options.fieldFirst) && errors.length) {
	          errorFields[rule.field] = 1;
	          return doIt(errors);
	        }
	        if (!deep) {
	          doIt(errors);
	        } else {
	          // if rule is required but the target object
	          // does not exist fail at the rule level and don't
	          // go deeper
	          if (rule.required && !data.value) {
	            if (rule.message) {
	              errors = [].concat(rule.message).map((0, _util.complementError)(rule));
	            } else {
	              errors = [options.error(rule, (0, _util.format)(options.messages.required, rule.field))];
	            }
	            return doIt(errors);
	          }

	          var fieldsSchema = {};
	          if (rule.defaultField) {
	            for (var k in data.value) {
	              if (data.value.hasOwnProperty(k)) {
	                fieldsSchema[k] = rule.defaultField;
	              }
	            }
	          }
	          fieldsSchema = _extends({}, fieldsSchema, data.rule.fields);
	          for (var f in fieldsSchema) {
	            if (fieldsSchema.hasOwnProperty(f)) {
	              var fieldSchema = Array.isArray(fieldsSchema[f]) ? fieldsSchema[f] : [fieldsSchema[f]];
	              fieldsSchema[f] = fieldSchema.map(addFullfield.bind(null, f));
	            }
	          }
	          var schema = new Schema(fieldsSchema);
	          schema.messages(options.messages);
	          if (data.rule.options) {
	            data.rule.options.messages = options.messages;
	            data.rule.options.error = options.error;
	          }
	          schema.validate(data.value, data.rule.options || options, function (errs) {
	            doIt(errs && errs.length ? errors.concat(errs) : errs);
	          });
	        }
	      }

	      rule.validator(rule, data.value, cb, data.source, options);
	    }, function (results) {
	      complete(results);
	    });
	  },
	  getType: function getType(rule) {
	    if (rule.type === undefined && rule.pattern instanceof RegExp) {
	      rule.type = 'pattern';
	    }
	    if (typeof rule.validator !== 'function' && rule.type && !_validator2["default"].hasOwnProperty(rule.type)) {
	      throw new Error((0, _util.format)('Unknown rule type %s', rule.type));
	    }
	    return rule.type || 'string';
	  },
	  getValidationMethod: function getValidationMethod(rule) {
	    if (typeof rule.validator === 'function') {
	      return rule.validator;
	    }
	    var keys = Object.keys(rule);
	    var messageIndex = keys.indexOf('message');
	    if (messageIndex !== -1) {
	      keys.splice(messageIndex, 1);
	    }
	    if (keys.length === 1 && keys[0] === 'required') {
	      return _validator2["default"].required;
	    }
	    return _validator2["default"][this.getType(rule)] || false;
	  }
	};

	Schema.register = function register(type, validator) {
	  if (typeof validator !== 'function') {
	    throw new Error('Cannot register a validator by type, validator is not a function');
	  }
	  _validator2["default"][type] = validator;
	};

	Schema.messages = _messages2.messages;

	exports["default"] = Schema;
	module.exports = exports['default'];

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.warning = warning;
	exports.format = format;
	exports.isEmptyValue = isEmptyValue;
	exports.isEmptyObject = isEmptyObject;
	exports.asyncMap = asyncMap;
	exports.complementError = complementError;
	exports.deepMerge = deepMerge;
	var formatRegExp = /%[sdj%]/g;

	var warning2 = function warning2() {};

	if (true) {
	  warning2 = function warning2(type, message) {
	    if (typeof console !== 'undefined' && console.warn) {
	      //console.warn(type, message);
	    }
	  };
	}

	function warning(type, errors) {
	  // only warn native warning, default type is string, confuses many people...
	  if (errors.every(function (e) {
	    return typeof e === 'string';
	  })) {
	    warning2(type, errors);
	  }
	}

	function format() {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }

	  var i = 1;
	  var f = args[0];
	  var len = args.length;
	  if (typeof f === 'function') {
	    return f.apply(null, args.slice(1));
	  }
	  if (typeof f === 'string') {
	    var str = String(f).replace(formatRegExp, function (x) {
	      if (x === '%%') {
	        return '%';
	      }
	      if (i >= len) {
	        return x;
	      }
	      switch (x) {
	        case '%s':
	          return String(args[i++]);
	        case '%d':
	          return Number(args[i++]);
	        case '%j':
	          try {
	            return JSON.stringify(args[i++]);
	          } catch (_) {
	            return '[Circular]';
	          }
	          break;
	        default:
	          return x;
	      }
	    });
	    for (var arg = args[i]; i < len; arg = args[++i]) {
	      str += ' ' + arg;
	    }
	    return str;
	  }
	  return f;
	}

	function isNativeStringType(type) {
	  return type === 'string' || type === 'url' || type === 'hex' || type === 'email' || type === 'pattern';
	}

	function isEmptyValue(value, type) {
	  if (value === undefined || value === null) {
	    return true;
	  }
	  if (type === 'array' && Array.isArray(value) && !value.length) {
	    return true;
	  }
	  if (isNativeStringType(type) && typeof value === 'string' && !value) {
	    return true;
	  }
	  return false;
	}

	function isEmptyObject(obj) {
	  return Object.keys(obj).length === 0;
	}

	function asyncParallelArray(arr, func, callback) {
	  var results = [];
	  var total = 0;
	  var arrLength = arr.length;

	  function count(errors) {
	    results.push.apply(results, errors);
	    total++;
	    if (total === arrLength) {
	      callback(results);
	    }
	  }

	  arr.forEach(function (a) {
	    func(a, count);
	  });
	}

	function asyncSerialArray(arr, func, callback) {
	  var index = 0;
	  var arrLength = arr.length;

	  function next(errors) {
	    if (errors && errors.length) {
	      callback(errors);
	      return;
	    }
	    var original = index;
	    index = index + 1;
	    if (original < arrLength) {
	      func(arr[original], next);
	    } else {
	      callback([]);
	    }
	  }

	  next([]);
	}

	function flattenObjArr(objArr) {
	  var ret = [];
	  Object.keys(objArr).forEach(function (k) {
	    ret.push.apply(ret, objArr[k]);
	  });
	  return ret;
	}

	function asyncMap(objArr, option, func, callback) {
	  if (option.first) {
	    var flattenArr = flattenObjArr(objArr);
	    return asyncSerialArray(flattenArr, func, callback);
	  }
	  var firstFields = option.firstFields || [];
	  if (firstFields === true) {
	    firstFields = Object.keys(objArr);
	  }
	  var objArrKeys = Object.keys(objArr);
	  var objArrLength = objArrKeys.length;
	  var total = 0;
	  var results = [];
	  var next = function next(errors) {
	    results.push.apply(results, errors);
	    total++;
	    if (total === objArrLength) {
	      callback(results);
	    }
	  };
	  objArrKeys.forEach(function (key) {
	    var arr = objArr[key];
	    if (firstFields.indexOf(key) !== -1) {
	      asyncSerialArray(arr, func, next);
	    } else {
	      asyncParallelArray(arr, func, next);
	    }
	  });
	}

	function complementError(rule) {
	  return function (oe) {
	    if (oe && oe.message) {
	      oe.field = oe.field || rule.fullField;
	      return oe;
	    }
	    return {
	      message: oe,
	      field: oe.field || rule.fullField
	    };
	  };
	}

	function deepMerge(target, source) {
	  if (source) {
	    for (var s in source) {
	      if (source.hasOwnProperty(s)) {
	        var value = source[s];
	        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && _typeof(target[s]) === 'object') {
	          target[s] = _extends({}, target[s], value);
	        } else {
	          target[s] = value;
	        }
	      }
	    }
	  }
	  return target;
	}

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	  string: __webpack_require__(67),
	  method: __webpack_require__(75),
	  number: __webpack_require__(76),
	  "boolean": __webpack_require__(77),
	  regexp: __webpack_require__(78),
	  integer: __webpack_require__(79),
	  "float": __webpack_require__(80),
	  array: __webpack_require__(81),
	  object: __webpack_require__(82),
	  "enum": __webpack_require__(83),
	  pattern: __webpack_require__(84),
	  email: __webpack_require__(85),
	  url: __webpack_require__(85),
	  date: __webpack_require__(86),
	  hex: __webpack_require__(85),
	  required: __webpack_require__(87)
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rule = __webpack_require__(68);

	var _rule2 = _interopRequireDefault(_rule);

	var _util = __webpack_require__(65);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 *  Performs validation for string types.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function string(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value, 'string') && !rule.required) {
	      return callback();
	    }
	    _rule2["default"].required(rule, value, source, errors, options, 'string');
	    if (!(0, _util.isEmptyValue)(value, 'string')) {
	      _rule2["default"].type(rule, value, source, errors, options);
	      _rule2["default"].range(rule, value, source, errors, options);
	      _rule2["default"].pattern(rule, value, source, errors, options);
	      if (rule.whitespace === true) {
	        _rule2["default"].whitespace(rule, value, source, errors, options);
	      }
	    }
	  }
	  callback(errors);
	}

	exports["default"] = string;
	module.exports = exports['default'];

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = {
	  required: __webpack_require__(69),
	  whitespace: __webpack_require__(70),
	  type: __webpack_require__(71),
	  range: __webpack_require__(72),
	  "enum": __webpack_require__(73),
	  pattern: __webpack_require__(74)
	};
	module.exports = exports['default'];

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _util = __webpack_require__(65);

	var util = _interopRequireWildcard(_util);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

	/**
	 *  Rule for validating required fields.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param source The source object being validated.
	 *  @param errors An array of errors that this rule may add
	 *  validation errors to.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function required(rule, value, source, errors, options, type) {
	  if (rule.required && (!source.hasOwnProperty(rule.field) || util.isEmptyValue(value, type || rule.type))) {
	    errors.push(util.format(options.messages.required, rule.fullField));
	  }
	}

	exports["default"] = required;
	module.exports = exports['default'];

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _util = __webpack_require__(65);

	var util = _interopRequireWildcard(_util);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

	/**
	 *  Rule for validating whitespace.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param source The source object being validated.
	 *  @param errors An array of errors that this rule may add
	 *  validation errors to.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function whitespace(rule, value, source, errors, options) {
	  if (/^\s+$/.test(value) || value === '') {
	    errors.push(util.format(options.messages.whitespace, rule.fullField));
	  }
	}

	exports["default"] = whitespace;
	module.exports = exports['default'];

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _util = __webpack_require__(65);

	var util = _interopRequireWildcard(_util);

	var _required = __webpack_require__(69);

	var _required2 = _interopRequireDefault(_required);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

	/* eslint max-len:0 */

	var pattern = {
	  email: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
	  url: new RegExp('^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$', 'i'),
	  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
	};

	var types = {
	  integer: function integer(value) {
	    return types.number(value) && parseInt(value, 10) === value;
	  },
	  "float": function float(value) {
	    return types.number(value) && !types.integer(value);
	  },
	  array: function array(value) {
	    return Array.isArray(value);
	  },
	  regexp: function regexp(value) {
	    if (value instanceof RegExp) {
	      return true;
	    }
	    try {
	      return !!new RegExp(value);
	    } catch (e) {
	      return false;
	    }
	  },
	  date: function date(value) {
	    return typeof value.getTime === 'function' && typeof value.getMonth === 'function' && typeof value.getYear === 'function';
	  },
	  number: function number(value) {
	    if (isNaN(value)) {
	      return false;
	    }
	    return typeof value === 'number';  
	  },
	  object: function object(value) {
	    return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && !types.array(value);
	  },
	  method: function method(value) {
	    return typeof value === 'function';
	  },
	  email: function email(value) {
	    return typeof value === 'string' && !!value.match(pattern.email);
	  },
	  url: function url(value) {
	    return typeof value === 'string' && !!value.match(pattern.url);
	  },
	  hex: function hex(value) {
	    return typeof value === 'string' && !!value.match(pattern.hex);
	  }
	};

	/**
	 *  Rule for validating the type of a value.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param source The source object being validated.
	 *  @param errors An array of errors that this rule may add
	 *  validation errors to.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function type(rule, value, source, errors, options) {
	  if (rule.required && value === undefined) {
	    (0, _required2["default"])(rule, value, source, errors, options);
	    return;
	  }
	  var custom = ['integer', 'float', 'array', 'regexp', 'object', 'method', 'email', 'number', 'date', 'url', 'hex'];
	  var ruleType = rule.type;
	  if (custom.indexOf(ruleType) > -1) {
	    if (!types[ruleType](value)) {
	      errors.push(util.format(options.messages.types[ruleType], rule.fullField, rule.type));
	    }
	    // straight typeof check
	  } else if (ruleType && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== rule.type) {
	    errors.push(util.format(options.messages.types[ruleType], rule.fullField, rule.type));
	  }
	}

	exports["default"] = type;
	module.exports = exports['default'];

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _util = __webpack_require__(65);

	var util = _interopRequireWildcard(_util);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

	/**
	 *  Rule for validating minimum and maximum allowed values.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param source The source object being validated.
	 *  @param errors An array of errors that this rule may add
	 *  validation errors to.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function range(rule, value, source, errors, options) {
	  var len = typeof rule.len === 'number';
	  var min = typeof rule.min === 'number';
	  var max = typeof rule.max === 'number';
	  var val = value;
	  var key = null;
	  var num = typeof value === 'number';
	  var str = typeof value === 'string';
	  var arr = Array.isArray(value);
	  if (num) {
	    key = 'number';
	  } else if (str) {
	    key = 'string';
	  } else if (arr) {
	    key = 'array';
	  }
	  // if the value is not of a supported type for range validation
	  // the validation rule rule should use the
	  // type property to also test for a particular type
	  if (!key) {
	    return false;
	  }
	  if (str || arr) {
	    val = value.length;
	  }
	  if (len) {
	    if (val !== rule.len) {
	      errors.push(util.format(options.messages[key].len, rule.fullField, rule.len));
	    }
	  } else if (min && !max && val < rule.min) {
	    errors.push(util.format(options.messages[key].min, rule.fullField, rule.min));
	  } else if (max && !min && val > rule.max) {
	    errors.push(util.format(options.messages[key].max, rule.fullField, rule.max));
	  } else if (min && max && (val < rule.min || val > rule.max)) {
	    errors.push(util.format(options.messages[key].range, rule.fullField, rule.min, rule.max));
	  }
	}

	exports["default"] = range;
	module.exports = exports['default'];

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _util = __webpack_require__(65);

	var util = _interopRequireWildcard(_util);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

	var ENUM = 'enum';

	/**
	 *  Rule for validating a value exists in an enumerable list.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param source The source object being validated.
	 *  @param errors An array of errors that this rule may add
	 *  validation errors to.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function enumerable(rule, value, source, errors, options) {
	  rule[ENUM] = Array.isArray(rule[ENUM]) ? rule[ENUM] : [];
	  if (rule[ENUM].indexOf(value) === -1) {
	    errors.push(util.format(options.messages[ENUM], rule.fullField, rule[ENUM].join(', ')));
	  }
	}

	exports["default"] = enumerable;
	module.exports = exports['default'];

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _util = __webpack_require__(65);

	var util = _interopRequireWildcard(_util);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

	/**
	 *  Rule for validating a regular expression pattern.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param source The source object being validated.
	 *  @param errors An array of errors that this rule may add
	 *  validation errors to.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function pattern(rule, value, source, errors, options) {
	  if (rule.pattern instanceof RegExp) {
	    if (!rule.pattern.test(value)) {
	      errors.push(util.format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
	    }
	  }
	}

	exports["default"] = pattern;
	module.exports = exports['default'];

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rule = __webpack_require__(68);

	var _rule2 = _interopRequireDefault(_rule);

	var _util = __webpack_require__(65);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 *  Validates a function.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function method(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2["default"].required(rule, value, source, errors, options);
	    if (value !== undefined) {
	      _rule2["default"].type(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}

	exports["default"] = method;
	module.exports = exports['default'];

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rule = __webpack_require__(68);

	var _rule2 = _interopRequireDefault(_rule);

	var _util = __webpack_require__(65);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 *  Validates a number.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function number(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2["default"].required(rule, value, source, errors, options);
	    if (value !== undefined) {
	      _rule2["default"].type(rule, value, source, errors, options);
	      _rule2["default"].range(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}

	exports["default"] = number;
	module.exports = exports['default'];

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _util = __webpack_require__(65);

	var _rule = __webpack_require__(68);

	var _rule2 = _interopRequireDefault(_rule);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 *  Validates a boolean.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function boolean(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2["default"].required(rule, value, source, errors, options);
	    if (value !== undefined) {
	      _rule2["default"].type(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}

	exports["default"] = boolean;
	module.exports = exports['default'];

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rule = __webpack_require__(68);

	var _rule2 = _interopRequireDefault(_rule);

	var _util = __webpack_require__(65);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 *  Validates the regular expression type.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function regexp(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2["default"].required(rule, value, source, errors, options);
	    if (!(0, _util.isEmptyValue)(value)) {
	      _rule2["default"].type(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}

	exports["default"] = regexp;
	module.exports = exports['default'];

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rule = __webpack_require__(68);

	var _rule2 = _interopRequireDefault(_rule);

	var _util = __webpack_require__(65);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 *  Validates a number is an integer.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function integer(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2["default"].required(rule, value, source, errors, options);
	    if (value !== undefined) {
	      _rule2["default"].type(rule, value, source, errors, options);
	      _rule2["default"].range(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}

	exports["default"] = integer;
	module.exports = exports['default'];

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rule = __webpack_require__(68);

	var _rule2 = _interopRequireDefault(_rule);

	var _util = __webpack_require__(65);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 *  Validates a number is a floating point number.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function floatFn(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2["default"].required(rule, value, source, errors, options);
	    if (value !== undefined) {
	      _rule2["default"].type(rule, value, source, errors, options);
	      _rule2["default"].range(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}

	exports["default"] = floatFn;
	module.exports = exports['default'];

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rule = __webpack_require__(68);

	var _rule2 = _interopRequireDefault(_rule);

	var _util = __webpack_require__(65);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 *  Validates an array.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function array(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value, 'array') && !rule.required) {
	      return callback();
	    }
	    _rule2["default"].required(rule, value, source, errors, options, 'array');
	    if (!(0, _util.isEmptyValue)(value, 'array')) {
	      _rule2["default"].type(rule, value, source, errors, options);
	      _rule2["default"].range(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}

	exports["default"] = array;
	module.exports = exports['default'];

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rule = __webpack_require__(68);

	var _rule2 = _interopRequireDefault(_rule);

	var _util = __webpack_require__(65);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 *  Validates an object.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function object(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2["default"].required(rule, value, source, errors, options);
	    if (value !== undefined) {
	      _rule2["default"].type(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}

	exports["default"] = object;
	module.exports = exports['default'];

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rule = __webpack_require__(68);

	var _rule2 = _interopRequireDefault(_rule);

	var _util = __webpack_require__(65);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var ENUM = 'enum';

	/**
	 *  Validates an enumerable list.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function enumerable(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2["default"].required(rule, value, source, errors, options);
	    if (value) {
	      _rule2["default"][ENUM](rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}

	exports["default"] = enumerable;
	module.exports = exports['default'];

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rule = __webpack_require__(68);

	var _rule2 = _interopRequireDefault(_rule);

	var _util = __webpack_require__(65);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 *  Validates a regular expression pattern.
	 *
	 *  Performs validation when a rule only contains
	 *  a pattern property but is not declared as a string type.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function pattern(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value, 'string') && !rule.required) {
	      return callback();
	    }
	    _rule2["default"].required(rule, value, source, errors, options);
	    if (!(0, _util.isEmptyValue)(value, 'string')) {
	      _rule2["default"].pattern(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}

	exports["default"] = pattern;
	module.exports = exports['default'];

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rule = __webpack_require__(68);

	var _rule2 = _interopRequireDefault(_rule);

	var _util = __webpack_require__(65);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function type(rule, value, callback, source, options) {
	  var ruleType = rule.type;
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value, ruleType) && !rule.required) {
	      return callback();
	    }
	    _rule2["default"].required(rule, value, source, errors, options, ruleType);
	    if (!(0, _util.isEmptyValue)(value, ruleType)) {
	      _rule2["default"].type(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}

	exports["default"] = type;
	module.exports = exports['default'];

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rule = __webpack_require__(68);

	var _rule2 = _interopRequireDefault(_rule);

	var _util = __webpack_require__(65);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function date(rule, value, callback, source, options) {
	  if(!(value instanceof Date)){
	        value =  new Date(Date.parse(value.replace(/-/g, "/")));  
	  }

	  // console.log('integer rule called %j', rule);
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  // console.log('validate on %s value', value);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2["default"].required(rule, value, source, errors, options);
	    if (!(0, _util.isEmptyValue)(value)) {
	      _rule2["default"].type(rule, value, source, errors, options);
	      if (value) {
	        _rule2["default"].range(rule, value.getTime(), source, errors, options);
	      }
	    }
	  }
	  callback(errors);
	}

	exports["default"] = date;
	module.exports = exports['default'];

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _rule = __webpack_require__(68);

	var _rule2 = _interopRequireDefault(_rule);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function required(rule, value, callback, source, options) {
	  var errors = [];
	  var type = Array.isArray(value) ? 'array' : typeof value === 'undefined' ? 'undefined' : _typeof(value);
	  _rule2["default"].required(rule, value, source, errors, options, type);
	  callback(errors);
	}

	exports["default"] = required;
	module.exports = exports['default'];

/***/ },
/* 88 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.newMessages = newMessages;
	function newMessages() {
	  return {
	    "default": 'Validation error on field %s',
	    required: '%s is required',
	    "enum": '%s must be one of %s',
	    whitespace: '%s cannot be empty',
	    date: {
	      format: '%s date %s is invalid for format %s',
	      parse: '%s date could not be parsed, %s is invalid ',
	      invalid: '%s date %s is invalid'
	    },
	    types: {
	      string: '%s is not a %s',
	      method: '%s is not a %s (function)',
	      array: '%s is not an %s',
	      object: '%s is not an %s',
	      number: '%s is not a %s',
	      date: '%s is not a %s',
	      "boolean": '%s is not a %s',
	      integer: '%s is not an %s',
	      "float": '%s is not a %s',
	      regexp: '%s is not a valid %s',
	      email: '%s is not a valid %s',
	      url: '%s is not a valid %s',
	      hex: '%s is not a valid %s'
	    },
	    string: {
	      len: '%s must be exactly %s characters',
	      min: '%s must be at least %s characters',
	      max: '%s cannot be longer than %s characters',
	      range: '%s must be between %s and %s characters'
	    },
	    number: {
	      len: '%s must equal %s',
	      min: '%s cannot be less than %s',
	      max: '%s cannot be greater than %s',
	      range: '%s must be between %s and %s'
	    },
	    array: {
	      len: '%s must be exactly %s in length',
	      min: '%s cannot be less than %s in length',
	      max: '%s cannot be greater than %s in length',
	      range: '%s must be between %s and %s in length'
	    },
	    pattern: {
	      mismatch: '%s value %s does not match pattern %s'
	    },
	    clone: function clone() {
	      var cloned = JSON.parse(JSON.stringify(this));
	      cloned.clone = this.clone;
	      return cloned;
	    }
	  };
	}

	var messages = exports.messages = newMessages();

/***/ },
/* 89 */
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
/* 90 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "el-form-item",
	    class: {
	      'is-error': _vm.error !== '',
	        'is-validating': _vm.validating,
	        'is-required': _vm.isRequired || _vm.required
	    },
	    style: (_vm.itemStyle)
	  }, [_c('label', {
	    staticClass: "el-form-item__label",
	    style: (_vm.labelStyle)
	  }, [(typeof _vm.title === 'function') ? _c('Render', {
	    attrs: {
	      "render": _vm.title
	    }
	  }) : [_c('span', {
	    domProps: {
	      "innerHTML": _vm._s(_vm.currentTitle)
	    }
	  })]], 2), _vm._v(" "), _c('div', {
	    staticClass: "el-form-item__content",
	    style: (_vm.contentStyle)
	  }, [_vm._t("default"), _vm._v(" "), _c('transition', {
	    attrs: {
	      "name": "md-fade-bottom"
	    }
	  }, [(_vm.error !== '' && !_vm.showtipvalidate) ? _c('div', {
	    staticClass: "el-form-item__error",
	    style: (_vm.errorStyle),
	    on: {
	      "click": _vm.errorClick
	    }
	  }, [_vm._v(_vm._s(_vm.error))]) : _vm._e()]), _vm._v(" "), (_vm.retValue !== '') ? _c('div', {
	    staticClass: "el-form-item__formatter",
	    staticStyle: {
	      "padding-left": "7px"
	    },
	    on: {
	      "click": _vm.formatterClick
	    }
	  }, [_vm._v("\n          " + _vm._s(_vm.retValue) + "\n    ")]) : _vm._e()], 2)])
	},staticRenderFns: []}

/***/ },
/* 91 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return (_vm.parent.customlayout && _vm.show) ? _c('el-form-item', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.visible),
	      expression: "visible"
	    }],
	    attrs: {
	      "forminputvalue": _vm.currentValue,
	      "title": _vm.title,
	      "rules": _vm.rules,
	      "label": _vm.label,
	      "prop": _vm.prop,
	      "required": _vm.required,
	      "labelwidth": _vm.labelwidth
	    }
	  }, [_c('el-droptree', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.currentValue),
	      expression: "currentValue"
	    }],
	    ref: "myFormComponent",
	    attrs: {
	      "readonly": _vm.inputReadonly,
	      "data": _vm.data,
	      "node-key": _vm.nodeKey,
	      "name": _vm.name,
	      "rightfilter": _vm.rightfilter,
	      "valueprovider": _vm.valueprovider,
	      "props": _vm.props,
	      "id": _vm.id,
	      "rendercontent": _vm.renderContent,
	      "highlightcurrent": true,
	      "defaultexpandall": _vm.defaultexpandall,
	      "autoexpandparent": _vm.autoexpandparent,
	      "default-expand-keys": _vm.defaultExpandedKeys,
	      "showcheckbox": _vm.showCheckbox,
	      "checkstrictly": _vm.checkstrictly,
	      "default-checked-keys": _vm.defaultCheckedKeys,
	      "filterable": _vm.filterable,
	      "dynamic": _vm.dynamic,
	      "clearable": _vm.clearable,
	      "onlyselectleaf": _vm.onlyselectleaf,
	      "expandlevel": _vm.expandlevel,
	      "multiple": _vm.multiple,
	      "rootvisible": _vm.rootvisible
	    },
	    domProps: {
	      "value": (_vm.currentValue)
	    },
	    on: {
	      "nodeclick": _vm.handleNodeClick,
	      "nodeexpanded": _vm.nodeexpanded,
	      "nodecollapse": _vm.nodecollapse,
	      "checkchange": _vm.handleCheckChange,
	      "input": function($event) {
	        _vm.currentValue = $event
	      }
	    }
	  }, [(_vm.$slots.prepend) ? _c('template', {
	    slot: "prepend"
	  }, [_vm._t("prepend")], 2) : _vm._e(), _vm._v(" "), (_vm.$slots.append) ? _c('template', {
	    slot: "append"
	  }, [_vm._t("append")], 2) : _vm._e()], 2)], 1) : (_vm.show) ? _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.visible),
	      expression: "visible"
	    }],
	    staticClass: "d-field d-textfield",
	    class: _vm.formitemClass
	  }, [_c('el-form-item', {
	    attrs: {
	      "label": _vm.label,
	      "prop": _vm.prop,
	      "forminputvalue": _vm.currentValue,
	      "title": _vm.title,
	      "rules": _vm.rules,
	      "size": _vm.parent.size,
	      "required": _vm.required,
	      "labelwidth": _vm.labelwidth
	    }
	  }, [_c('el-droptree', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.currentValue),
	      expression: "currentValue"
	    }],
	    ref: "myFormComponent",
	    attrs: {
	      "size": _vm.parent.size,
	      "readonly": _vm.inputReadonly,
	      "data": _vm.data,
	      "node-key": _vm.nodeKey,
	      "name": _vm.name,
	      "id": _vm.id,
	      "rootcode": _vm.rootcode,
	      "props": _vm.props,
	      "rendercontent": _vm.renderContent,
	      "rightfilter": _vm.rightfilter,
	      "valueprovider": _vm.valueprovider,
	      "highlightcurrent": true,
	      "defaultexpandall": _vm.defaultexpandall,
	      "autoexpandparent": _vm.autoexpandparent,
	      "default-expand-keys": _vm.defaultExpandedKeys,
	      "showcheckbox": _vm.showCheckbox,
	      "checkstrictly": _vm.checkstrictly,
	      "default-checked-keys": _vm.defaultCheckedKeys,
	      "filterable": _vm.filterable,
	      "clearable": _vm.clearable,
	      "expandlevel": _vm.expandlevel,
	      "onlyselectleaf": _vm.onlyselectleaf,
	      "multiple": _vm.multiple,
	      "dynamic": _vm.dynamic,
	      "rootvisible": _vm.rootvisible
	    },
	    domProps: {
	      "value": (_vm.currentValue)
	    },
	    on: {
	      "nodeclick": _vm.handleNodeClick,
	      "nodeexpanded": _vm.nodeexpanded,
	      "nodecollapse": _vm.nodecollapse,
	      "checkchange": _vm.handleCheckChange,
	      "input": function($event) {
	        _vm.currentValue = $event
	      }
	    }
	  }, [(_vm.$slots.prepend) ? _c('template', {
	    slot: "prepend"
	  }, [_vm._t("prepend")], 2) : _vm._e(), _vm._v(" "), (_vm.$slots.append) ? _c('template', {
	    slot: "append"
	  }, [_vm._t("append")], 2) : _vm._e()], 2)], 1)], 1) : _vm._e()
	},staticRenderFns: []}

/***/ }
/******/ ])
});
;