import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/arrange',
      name: 'arrange',
      component: () => import('@/view/arrange/arrange.vue'),
      meta: {
        title: '会议议程'
      }
    },
    {
      path: '/reception',
      name: 'reception',
      component: () => import('@/view/reception/reception.vue'),
      meta: {
        title: '接待安排'
      }
    },
    {
      path: '/situation',
      name: 'situation',
      component: () => import('@/view/situation/situation.vue'),
      meta: {
        title: '项目概况'
      }
    },
    {
      path: '/pyfc',
      name: 'pyfc',
      component: () => import('@/view/pyfc/pyfc.vue'),
      meta: {
        title: '平益风采'
      }
    },
    {
      path: '/ccap',
      name: 'ccap',
      component: () => import('@/view/pdf/ccap.vue'),
      meta: {
        title: '乘车安排'
      }
    },
    {
      path: '/chmd',
      name: 'chmd',
      component: () => import('@/view/pdf/chmd.vue'),
      meta: {
        title: '参会名单'
      }
    },
    {
      path: '/hyyc',
      name: 'hyyc',
      component: () => import('@/view/pdf/hyyc.vue'),
      meta: {
        title: '会议议程'
      }
    },
    {
      path: '/xcap',
      name: 'xcap',
      component: () => import('@/view/pdf/xcap.vue'),
      meta: {
        title: '行程安排'
      }
    },
    {
      path: '/hyzl',
      name: 'hyzl',
      component: () => import('@/view/pdf/hyzl.vue'),
      meta: {
        title: '会议资料'
      }
    },
    {
      path: '/hycl',
      name: 'hycl',
      component: () => import('@/view/pdf/hycl.vue'),
      meta: {
        title: '会议材料'
      }
    },
    {
      path: '/clap',
      name: 'clap',
      component: () => import('@/view/pdf/clap.vue'),
      meta: {
        title: '乘车安排'
      }
    },
    {
      path: '/jcap',
      name: 'jcap',
      component: () => import('@/view/pdf/jcap.vue'),
      meta: {
        title: '就餐安排'
      }
    },
    {
      path: '/hyzcb',
      name: 'hyzcb',
      component: () => import('@/view/pdf/hyzcb.vue'),
      meta: {
        title: '座次安排'
      }
    },
    {
      path: '/zagl',
      name: 'zagl',
      component: () => import('@/view/pyfc/zagl.vue'),
      meta: {
        title: '治安管理'
      }
    },
    {
      path: '/zngl',
      name: 'zngl',
      component: () => import('@/view/pyfc/zagl.vue'),
      meta: {
        title: '质安管理'
      }
    },
    {
      path: '/kjcx',
      name: 'kjcx',
      component: () => import('@/view/pyfc/kjcx.vue'),
      meta: {
        title: '工程建设'
      }
    },
    {
      path: '/tsfwq',
      name: 'tsfwq',
      component: () => import('@/view/pyfc/tsfwq.vue'),
      meta: {
        title: '特色服务区'
      }
    },
    {
      path: '/bzh',
      name: 'bzh',
      component: () => import('@/view/pyfc/bzh.vue'),
      meta: {
        title: '标准化'
      }
    },
    {
      path: '/zdh',
      name: 'zdh',
      component: () => import('@/view/pyfc/zdh.vue'),
      meta: {
        title: '自动化'
      }
    },
    {
      path: '/znh',
      name: 'znh',
      component: () => import('@/view/pyfc/znh.vue'),
      meta: {
        title: '智能化'
      }
    },
    {
      path: '/pypp',
      name: 'pypp',
      component: () => import('@/view/pyfc/pypp.vue'),
      meta: {
        title: '平益品牌'
      }
    },

  ]
})
