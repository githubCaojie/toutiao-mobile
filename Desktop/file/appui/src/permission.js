import router from './router/router'
import store from './store/store.js'
import { appCommon } from '@/utils/appCommon'

// const originPush = Router.prototype.push;
// Router.prototype.push = function (location) {
//   store.commit('route/SET_PAGEDIR', 'forward')
//   var path = location.path.replace('/', '');
//   store.commit('route/ADD', path);
//   return originPush.call(this, location).catch(err => console.log(err));
// }

const perpath = []
router.beforeEach((to, from, next) => {
  let userView = store.getters.userView;
  if (to.meta && to.meta.title) {
    document.title = to.meta.title;
  }
  if (perpath.includes(to.name)) {
    if (!userView) {
      let qparams = to.query || {};
      next({
        path: '/login',
        query: {
          redirect: to.path,
          qparams: qparams,
        }
      })
    } else {

      next();
    }
  }
  // if (store.getters.route[store.getters.route.length - 1] === from.name) {
  //   from.params['stack-key-dir'] = 'back';
  // }
  next();
})

router.afterEach(() => {
  appCommon.emit('app-aeach')
}) 