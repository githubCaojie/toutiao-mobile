export default [
  {
    path: '/myTask',
    name: 'myTask',
    component: () => import('@/views/patrol/myTask')
  },{
    path: '/taskDetail',
    name: 'taskDetail',
    component: () => import('@/views/patrol/taskDetail')
  },{
    path: '/riskSource',
    name: 'riskSource',
    component: () => import('@/views/patrol/riskSource')
  },{
    path: '/hiddenDangerList',
    name: 'hiddenDangerList',
    component: () => import('@/views/patrol/hiddenDangerList')
  },{
    path: '/addHiddenDanger',
    name: 'addHiddenDanger',
    component: () => import('@/views/patrol/addHiddenDanger')
  },{
    path: '/chooseHDanger',
    name: 'chooseHDanger',
    component: () => import('@/views/patrol/chooseHDanger')
  },{
    path: '/patrolStatic',
    name: 'patrolStatic',
    component: () => import('@/views/patrol/patrolStatic')
  },{
    path: '/myPatrol',
    name: 'myPatrol',
    component: () => import('@/views/patrol/myPatrol')
  },{
    path: '/myRectifyList',
    name: 'myRectifyList',
    component: () => import('@/views/patrol/myRectifyList')
  },{
    path: '/rectifyDetail',
    name: 'rectifyDetail',
    component: () => import('@/views/patrol/rectifyDetail')
  },{
    path: '/rectifyList',
    name: 'rectifyList',
    component: () => import('@/views/patrol/rectifyList')
  },{
    path: '/rectify',
    name: 'rectify',
    component: () => import('@/views/patrol/rectify')
  },{
    path: '/myPatrolDetail',
    name: 'myPatrolDetail',
    component: () => import('@/views/patrol/myPatrolDetail')
  },{
    path: '/noDangerReport',
    name: 'noDangerReport',
    component: () => import('@/views/patrol/noDangerReport')
  },
]