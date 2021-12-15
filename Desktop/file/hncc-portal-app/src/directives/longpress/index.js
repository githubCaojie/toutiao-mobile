import Vue from 'vue';
Vue.directive('longpress', {
  inserted: function (el, binding) {
    var timer = null;
    var start = function (e) {
      if (e.type === 'click') { // 如果是点击事件，不启动计时器，直接返回
        return;
      }
      if (timer === null) {
        timer = setTimeout(function () {
          binding.value();
        }, 1500)
      }
    }

    var cancel = function () {
      if (timer !== null) {
        clearTimeout(timer)
        timer = null
      }
    }

    // 添加事件监听器
    el.addEventListener("mousedown", start);
    el.addEventListener("touchstart", start);

    // 取消计时器
    el.addEventListener("click", cancel);
    el.addEventListener("mouseout", cancel);
    el.addEventListener("touchend", cancel);
    el.addEventListener("touchcancel", cancel);
  }
})