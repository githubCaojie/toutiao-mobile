export default [
  {
    path: '/hdList',
    name: 'hdList',
    component: () => import('@/views/quality-hd/hdList')
  },
  {
    path: '/hdForm',
    name: 'hdForm',
    component: () => import('@/views/quality-hd/hdForm')
  }
]