import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      redirect: '/user/login'
    },
    {
      path: '/user/login',
      name: 'login',
      component: () => import('../view/user/userlogin.vue'),
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../view/home/home.vue')
    }
  ]
})
