import Vue from 'vue'
import { appCommon } from '@/utils/appCommon'

let fn;

Vue.directive('rscroll', {
  inserted: function (el, binding, vnode) {
    fn = function() {
      if (!vnode.appScrollTop) {
        vnode.appScrollTop = el.scrollTop;
      } else {
        setTimeout(() => {
          el.scrollTop = vnode.appScrollTop;
        }, 100)
      }
     
    }
    appCommon.on('app-aeach', fn)
  },
  unbind: function() {
    appCommon.off('app-aeach', fn)
  }
})