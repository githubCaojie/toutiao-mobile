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
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _index = __webpack_require__(1);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(16);

	var _index4 = _interopRequireDefault(_index3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var install = function install(Vue) {
	  if (install.installed) return;

	  Vue.component(_index2.default.name, _index2.default);
	  Vue.component(_index4.default.name, _index4.default);
	};

	if (typeof window !== 'undefined' && window.Vue) {
	  install(window.Vue);
	};

	module.exports = {
	  version: '1.0.0-rc.5',
	  CarouselItem: _index4.default,
	  Carousel: _index2.default
	};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _main = __webpack_require__(2);

	var _main2 = _interopRequireDefault(_main);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_main2.default.install = function (Vue) {
	  Vue.component(_main2.default.name, _main2.default);
	};

	exports.default = _main2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(4),
	  /* template */
	  __webpack_require__(15),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)

	module.exports = Component.exports


/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _throttle = __webpack_require__(5);

	var _throttle2 = _interopRequireDefault(_throttle);

	var _debounce = __webpack_require__(6);

	var _debounce2 = _interopRequireDefault(_debounce);

	var _resizeEvent = __webpack_require__(7);

	var _item = __webpack_require__(8);

	var _item2 = _interopRequireDefault(_item);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(11);

	exports.default = {
	  name: 'HyCarousel',
	  components: {
	    HyCarouselItem: _item2.default
	  },
	  props: {
	    images: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    initialindex: {
	      type: Number,
	      default: 0
	    },
	    height: {
	      type: Number,
	      default: 300
	    },
	    trigger: {
	      type: String,
	      default: 'hover'
	    },
	    autoplay: {
	      type: Boolean,
	      default: true
	    },
	    interval: {
	      type: Number,
	      default: 3000
	    },
	    indicatorposition: String,
	    indicator: {
	      type: Boolean,
	      default: true
	    },
	    arrow: {
	      type: String,
	      default: 'hover'
	    },
	    type: String,
	    visible: {
	      type: Boolean,
	      default: true
	    }
	  },

	  data: function data() {
	    return {
	      items: [],
	      activeIndex: -1,
	      containerWidth: 0,
	      timer: null,
	      hover: false
	    };
	  },


	  watch: {
	    activeIndex: function activeIndex(val, oldVal) {
	      var _this = this;

	      this.resetItemPosition();
	      setTimeout(function () {
	        _this.$emit('change', val, oldVal);
	      }, 0);
	    },
	    images: function images(newV, oldV) {
	      var _this2 = this;

	      this.$nextTick(function () {
	        _this2.updateItems();
	      });
	    }
	  },

	  methods: {
	    handleMouseEnter: function handleMouseEnter() {
	      this.hover = true;
	      this.pauseTimer();
	    },
	    handleMouseLeave: function handleMouseLeave() {
	      this.hover = false;
	      this.startTimer();
	    },
	    itemInStage: function itemInStage(item, index) {
	      var length = this.items.length;
	      if (index === length - 1 && item.inStage && this.items[0].active || item.inStage && this.items[index + 1] && this.items[index + 1].active) {
	        return 'left';
	      } else if (index === 0 && item.inStage && this.items[length - 1].active || item.inStage && this.items[index - 1] && this.items[index - 1].active) {
	        return 'right';
	      }
	      return false;
	    },
	    handleButtonEnter: function handleButtonEnter(arrow) {
	      var _this3 = this;

	      this.items.forEach(function (item, index) {
	        if (arrow === _this3.itemInStage(item, index)) {
	          item.hover = true;
	        }
	      });
	    },
	    handleButtonLeave: function handleButtonLeave() {
	      this.items.forEach(function (item) {
	        item.hover = false;
	      });
	    },
	    handleItemChange: function handleItemChange() {
	      var _this4 = this;

	      (0, _debounce2.default)(100, function () {
	        _this4.updateItems();
	      });
	    },
	    updateItems: function updateItems() {
	      this.items = this.$children.filter(function (child) {
	        return child.$options.name === 'HyCarouselItem';
	      });
	    },
	    resetItemPosition: function resetItemPosition() {
	      var _this5 = this;

	      this.items.forEach(function (item, index) {
	        item.translateItem(index, _this5.activeIndex);
	      });
	    },
	    playSlides: function playSlides() {
	      if (this.activeIndex < this.items.length - 1) {
	        this.activeIndex++;
	      } else {
	        this.activeIndex = 0;
	      }
	    },
	    pauseTimer: function pauseTimer() {
	      clearInterval(this.timer);
	    },
	    startTimer: function startTimer() {
	      if (this.interval <= 0 || !this.autoplay) return;
	      this.timer = setInterval(this.playSlides, this.interval);
	    },
	    setActiveItem: function setActiveItem(index) {
	      if (typeof index === 'string') {
	        var filteredItems = this.items.filter(function (item) {
	          return item.name === index;
	        });
	        if (filteredItems.length > 0) {
	          index = this.items.indexOf(filteredItems[0]);
	        }
	      }
	      index = Number(index);
	      if (isNaN(index) || index !== Math.floor(index)) {
	        ("development") !== 'production' && console.warn('[Element Warn][Carousel]index must be an integer.');
	        return;
	      }
	      var length = this.items.length;
	      if (index < 0) {
	        this.activeIndex = length - 1;
	      } else if (index >= length) {
	        this.activeIndex = 0;
	      } else {
	        this.activeIndex = index;
	      }
	    },
	    prev: function prev() {
	      this.setActiveItem(this.activeIndex - 1);
	    },
	    next: function next() {
	      this.setActiveItem(this.activeIndex + 1);
	    },
	    handleIndicatorClick: function handleIndicatorClick(index) {
	      this.activeIndex = index;
	    },
	    handleIndicatorHover: function handleIndicatorHover(index) {
	      if (this.trigger === 'hover' && index !== this.activeIndex) {
	        this.activeIndex = index;
	      }
	    }
	  },

	  created: function created() {
	    var _this6 = this;

	    this.throttledArrowClick = (0, _throttle2.default)(300, true, function (index) {
	      _this6.setActiveItem(index);
	    });
	    this.throttledIndicatorHover = (0, _throttle2.default)(300, function (index) {
	      _this6.handleIndicatorHover(index);
	    });
	  },
	  mounted: function mounted() {
	    var _this7 = this;

	    this.updateItems();
	    this.$nextTick(function () {
	      (0, _resizeEvent.addResizeListener)(_this7.$el, _this7.resetItemPosition);
	      if (_this7.initialindex < _this7.items.length && _this7.initialindex >= 0) {
	        _this7.activeIndex = _this7.initialindex;
	      }
	      _this7.startTimer();
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this.$el) (0, _resizeEvent.removeResizeListener)(this.$el, this.resetItemPosition);
	  }
	};

/***/ }),
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	/* eslint-disable no-undefined */

	var throttle = __webpack_require__(5);

	/**
	 * Debounce execution of a function. Debouncing, unlike throttling,
	 * guarantees that a function is only executed a single time, either at the
	 * very beginning of a series of calls, or at the very end.
	 *
	 * @param  {Number}   delay         A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
	 * @param  {Boolean}  [atBegin]     Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
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


/***/ }),
/* 7 */
/***/ (function(module, exports) {

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

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(9),
	  /* template */
	  __webpack_require__(10),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)

	module.exports = Component.exports


/***/ }),
/* 9 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});


	var CARD_SCALE = 0.83;
	exports.default = {
	  name: 'HyCarouselItem',

	  props: {
	    name: String
	  },

	  data: function data() {
	    return {
	      hover: false,
	      translate: 0,
	      scale: 1,
	      active: false,
	      ready: false,
	      inStage: false
	    };
	  },


	  methods: {
	    processIndex: function processIndex(index, activeIndex, length) {
	      if (activeIndex === 0 && index === length - 1) {
	        return -1;
	      } else if (activeIndex === length - 1 && index === 0) {
	        return length;
	      } else if (index < activeIndex - 1 && activeIndex - index >= length / 2) {
	        return length + 1;
	      } else if (index > activeIndex + 1 && index - activeIndex >= length / 2) {
	        return -2;
	      }
	      return index;
	    },
	    calculateTranslate: function calculateTranslate(index, activeIndex, parentWidth) {
	      if (this.inStage) {
	        return parentWidth * ((2 - CARD_SCALE) * (index - activeIndex) + 1) / 4;
	      } else if (index < activeIndex) {
	        return -(1 + CARD_SCALE) * parentWidth / 4;
	      } else {
	        return (3 + CARD_SCALE) * parentWidth / 4;
	      }
	    },
	    translateItem: function translateItem(index, activeIndex) {
	      var parentWidth = this.$parent.$el.offsetWidth;
	      var length = this.$parent.items.length;

	      if (this.$parent.type === 'card') {
	        if (index !== activeIndex && length > 2) {
	          index = this.processIndex(index, activeIndex, length);
	        }
	        this.inStage = Math.round(Math.abs(index - activeIndex)) <= 1;
	        this.active = index === activeIndex;
	        this.translate = this.calculateTranslate(index, activeIndex, parentWidth);
	        this.scale = this.active ? 1 : CARD_SCALE;
	      } else {
	        this.active = index === activeIndex;
	        this.translate = parentWidth * (index - activeIndex);
	      }
	      this.ready = true;
	    },
	    handleItemClick: function handleItemClick() {
	      var parent = this.$parent;
	      if (parent && parent.type === 'card') {
	        var index = parent.items.indexOf(this);
	        parent.setActiveItem(index);
	      }
	    }
	  },

	  created: function created() {
	    this.$parent && this.$parent.handleItemChange();
	  },
	  destroyed: function destroyed() {
	    this.$parent && this.$parent.handleItemChange();
	  }
	};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.ready),
	      expression: "ready"
	    }],
	    staticClass: "el-carousel__item",
	    class: {
	      'is-active': _vm.active,
	      'el-carousel__item--card': _vm.$parent.type === 'card',
	        'is-in-stage': _vm.inStage,
	        'is-hover': _vm.hover
	    },
	    style: ({
	      msTransform: ("translateX(" + _vm.translate + "px) scale(" + _vm.scale + ")"),
	      webkitTransform: ("translateX(" + _vm.translate + "px) scale(" + _vm.scale + ")"),
	      transform: ("translateX(" + _vm.translate + "px) scale(" + _vm.scale + ")")
	    }),
	    on: {
	      "click": _vm.handleItemClick
	    }
	  }, [(_vm.$parent.type === 'card') ? _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (!_vm.active),
	      expression: "!active"
	    }],
	    staticClass: "el-carousel__mask"
	  }) : _vm._e(), _vm._v(" "), _vm._t("default")], 2)
	},staticRenderFns: []}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(12);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js!../../node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"extract\":true,\"remove\":true}!../../node_modules/style-loader/index.js!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js?sourceMap!./carousel.less", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js!../../node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"extract\":true,\"remove\":true}!../../node_modules/style-loader/index.js!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js?sourceMap!./carousel.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ }),
/* 13 */
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
/* 14 */
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
/* 15 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.visible),
	      expression: "visible"
	    }],
	    staticClass: "el-carousel",
	    class: {
	      'el-carousel--card': _vm.type === 'card'
	    },
	    on: {
	      "mouseenter": function($event) {
	        $event.stopPropagation();
	        return _vm.handleMouseEnter($event)
	      },
	      "mouseleave": function($event) {
	        $event.stopPropagation();
	        return _vm.handleMouseLeave($event)
	      }
	    }
	  }, [_c('div', {
	    staticClass: "el-carousel__container",
	    style: ({
	      height: _vm.height + 'px'
	    })
	  }, [_c('transition', {
	    attrs: {
	      "name": "carousel-arrow-left"
	    }
	  }, [(_vm.arrow !== 'never') ? _c('button', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.arrow === 'always' || _vm.hover),
	      expression: "arrow === 'always' || hover"
	    }],
	    staticClass: "el-carousel__arrow el-carousel__arrow--left",
	    on: {
	      "mouseenter": function($event) {
	        return _vm.handleButtonEnter('left')
	      },
	      "mouseleave": _vm.handleButtonLeave,
	      "click": function($event) {
	        $event.stopPropagation();
	        return _vm.throttledArrowClick(_vm.activeIndex - 1)
	      }
	    }
	  }, [_c('i', {
	    staticClass: "el-icon-arrow-left"
	  })]) : _vm._e()]), _vm._v(" "), _c('transition', {
	    attrs: {
	      "name": "carousel-arrow-right"
	    }
	  }, [(_vm.arrow !== 'never') ? _c('button', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.arrow === 'always' || _vm.hover),
	      expression: "arrow === 'always' || hover"
	    }],
	    staticClass: "el-carousel__arrow el-carousel__arrow--right",
	    on: {
	      "mouseenter": function($event) {
	        return _vm.handleButtonEnter('right')
	      },
	      "mouseleave": _vm.handleButtonLeave,
	      "click": function($event) {
	        $event.stopPropagation();
	        return _vm.throttledArrowClick(_vm.activeIndex + 1)
	      }
	    }
	  }, [_c('i', {
	    staticClass: "el-icon-arrow-right"
	  })]) : _vm._e()]), _vm._v(" "), _vm._l((_vm.images), function(item, index) {
	    return _c('HyCarouselItem', {
	      key: index
	    }, [_c('img', {
	      staticClass: "image",
	      staticStyle: {
	        "width": "500px",
	        "height": "300px"
	      },
	      attrs: {
	        "src": item.src
	      }
	    })])
	  })], 2), _vm._v(" "), (_vm.indicatorposition !== 'none') ? _c('ul', {
	    staticClass: "el-carousel__indicators",
	    class: {
	      'el-carousel__indicators--outside': _vm.indicatorposition === 'outside' || _vm.type === 'card'
	    }
	  }, _vm._l((_vm.items), function(item, index) {
	    return _c('li', {
	      key: index,
	      staticClass: "el-carousel__indicator",
	      class: {
	        'is-active': index === _vm.activeIndex
	      },
	      on: {
	        "mouseenter": function($event) {
	          return _vm.throttledIndicatorHover(index)
	        },
	        "click": function($event) {
	          $event.stopPropagation();
	          return _vm.handleIndicatorClick(index)
	        }
	      }
	    }, [_c('button', {
	      staticClass: "el-carousel__button"
	    })])
	  }), 0) : _vm._e()])
	},staticRenderFns: []}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _item = __webpack_require__(8);

	var _item2 = _interopRequireDefault(_item);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_item2.default.install = function (Vue) {
	  Vue.component(_item2.default.name, _item2.default);
	};

	exports.default = _item2.default;

/***/ })
/******/ ])
});
;