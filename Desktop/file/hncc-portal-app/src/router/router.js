import Vue from 'vue';
import Router from 'vue-router'
import xcby from './xcby'
import xczj from './xczj'
import ssp from './ssp'
import quality from './quality'
import patrol from './patrol'
import workflow from './workflow'
import baseData from './base-data'
import kq from './kq'
import xcbg from './xcbg'

Vue.use(Router)

const baseRouter = [{
  path: '/',
  name: 'login',
  meta: {
    title: '登录'
  },
  // component: () => import('@/views/index/login')
  component: resolve=>(require(["@/views/index/login"],resolve))
}, {
  path: '/birthday',
  name: 'birthday',
  component: () => import('@/views/index/birthday')
}, 
{
  path: '/agendaDetails',
  name: 'agendaDetails',
  component: () => import('@/views/index/agendaDetails')
},
{
  path: '/achieve',
  name: 'achieve',
  component: () => import('@/views/index/achieve')
},
{
  path: '/addressBook',
  name: 'addressBook',
  component: () => import('@/views/index/addressBook')
},
{
  path: '/groupNew',
  name: 'groupNew',
  component: () => import('@/views/index/groupNew')
},
{
  path: '/myAddress',
  name: 'myAddress',
  component: () => import('@/views/index/myAddress')
},

{
  path: '/organization',
  name: 'organization',
  component: () => import('@/views/index/organization')
},

{
  path: '/organizationList',
  name: 'organizationList',
  component: () => import('@/views/index/organizationList')
},
{
  path: '/entry',
  name: 'entry',
  component: () => import('@/views/index/entry')
},
{
  path: '/myMes',
  name: 'myMes',
  component: () => import('@/views/index/myMes')
},
{
  path: '/offlinePic',
  name: 'offlinePic',
  component: () => import('@/views/index/offlinePic')
},
{
  path: '/scanLoginConfirm',
  name: 'scanLoginConfirm',
  component: () => import('@/views/index/scanLoginConfirm')
}, {
  path: '/myNews',
  name: 'myNews',
  component: () => import('@/views/index/myNews')
}, {
  path: '/appIndex',
  name: 'appIndex',
  meta: {
    title: '首页'
  },
  component: () => import('@/views/index/appIndex')
}, 
{
  path: '/home',
  name: 'home',
  meta: {
    title: '首页'
  },
  component: () => import('@/views/index/home')
},
{
  path: '/appMain',
  name: 'appMain',
  component: () => import('@/views/index/appMain')
}, {
  path: '/changePwd',
  name: 'changePwd',
  meta: {
    title: '修改密码'
  },
  component: () => import('@/views/index/changePwd')
}, {
  path: '/appPersonal',
  name: 'appPersonal',
  component: () => import('@/views/index/appPersonal')
}, {
  path: '/changeTx',
  name: 'changeTx',
  meta: {
    title: '修改头像'
  },
  component: () => import('@/views/index/changeTx')
}, {
  path: '/appFj',
  name: 'appFj',
  component: () => import('@/views/commonViews/appFj')
}
  , {
  path: '/flowBusi',
  name: 'flowBusi',
  component: () => import('@/views/workflow/flowBusi')
}, {
  path: '/flowExec',
  name: 'flowExec',
  component: () => import('@/views/workflow/flowExec')
}, {
  path: '/flowMain',
  name: 'flowMain',
  component: () => import('@/views/workflow/flowMain')
}, {
  path: '/flowIndex',
  name: 'flowIndex',
  component: () => import('@/views/workflow/flowIndex')
}, {
  path: '/documentIndex',
  name: 'documentIndex',
  component: () => import('@/views/workflow/documentIndex')
}, {
  path: '/jgCode',
  name: 'jgCode',
  component: () => import('@/views/workflow/jgCode')
}, {
  path: '/proDetail',
  name: 'proDetail',
  component: () => import('@/views/workflow/proDetail')
}, {
  path: '/projectQuality',
  name: 'projectQuality',
  component: () => import('@/views/workflow/projectQuality')
}, {
  path: '/returnTaskAdvice',
  name: 'returnTaskAdvice',
  component: () => import('@/views/workflow/returnTaskAdvice')
}, {
  path: '/overMain',
  name: 'overMain',
  component: () => import('@/views/workflow/overMain')
}, {
  path: '/appPreviewImg',
  name: 'appPreviewImg',
  component: () => import('@/app-comps/app-img-choose/app-preview-img')
}, {
  path: '/appVideoPlay',
  name: 'appVideoPlay',
  component: () => import('@/views/commonViews/appVideoPlay')
}, {
  path: '/treeChoose',
  name: 'treeChoose',
  component: () => import('@/views/index/treeChoose')
}, {
  path: '/test1',
  name: 'test1',
  component: () => import('@/views/index/test1')
}, {
  path: '/test2',
  name: 'test2',
  component: () => import('@/views/index/test2')
}, {
  path: '/test3',
  name: 'test3',
  component: () => import('@/views/index/test3')
}, {
  path: '/test4',
  name: 'test4',
  component: () => import('@/views/index/test4')
},
{
  path: '/test6',
  name: 'test6',
  component: () => import('@/views/index/test6')
}, {
  path: '/test5',
  name: 'test5',
  component: () => import('@/views/index/test5')
}]
const routes = [...baseRouter, ...workflow, ...xcby, ...xczj, ...baseData,...ssp, ...patrol, ...quality, ...kq, ...xcbg];
const router = new Router({
  // mode: 'history',
  routes: routes,
})

export default router;