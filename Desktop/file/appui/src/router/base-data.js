export default [
  {
    path: '/jgw-tree',
    name: 'jgw-tree',
    component: () => import('@/views/base-data/jgw/jgw-tree')
  },
  {
    path: '/jgw-detail',
    name: 'jgw-detail',
    component: () => import('@/views/base-data/jgw/jgw-detail')
  },
  {
    path: '/jgw-list',
    name: 'jgw-list',
    component: () => import('@/views/base-data/jgw/jgw-list')
  },

//工程质量评定标准
  {
    path: '/gczl-tree',
    name: 'gczl-tree',
    component: () => import('@/views/base-data/gczlpd/gczl-tree')
  },
  {
    path: '/gczl-main',
    name: 'gczl-main',
    component: () => import('@/views/base-data/gczlpd/gczl-main'),
  },
  {
    path: '/gczl-detail',
    name: 'gczl-detail',
    component: () => import('@/views/base-data/gczlpd/gczl-detail'),
  }

  
]