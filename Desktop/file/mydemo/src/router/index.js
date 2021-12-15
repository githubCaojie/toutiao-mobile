import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/view/login/login.vue'),
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/view/home/home.vue'),
    },
    {
      path: '/management',
      name: 'management',
      component: () => import('@/view/management/management.vue'),
      children: [
        {
          path: 'managementHome',
          component: () => import('@/view/management/childPages/managementHome/managementHome.vue')
        }
      ]
    }
  ]
})
