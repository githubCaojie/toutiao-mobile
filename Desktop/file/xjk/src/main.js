// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// 引用less预处理器
import less from'less'
Vue.use(less)

// 引用element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

router.beforeEach((to, from, next) => {
  if(to.meta.requireAuth) {
    if(store.state.userInfo) {
      next()
    }else {
      next({path: '/login'})
    }
  }
  // 路由发生变化修改页面Title
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

// 挂载封装的axios
import request from './network/request'
import api from './network/api'
Vue.prototype.request = request
Vue.prototype.api = api

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
