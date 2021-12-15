import Vue from 'vue'
import appPl from './app-pl'

const PlConstructor = Vue.extend(appPl);
let appPlInstance = undefined;

const startPl = function(options = {}) {
  if (appPlInstance) {
    closePl();
  }
  appPlInstance = new PlConstructor({
    data: {
      ...options
    }
  }).$mount()

  document.getElementById('app').appendChild(appPlInstance.$el);
}

const closePl = function(){
  if (!appPlInstance) return;
  document.getElementById('app').removeChild(appPlInstance.$el);
  appPlInstance = undefined;
}

const appPlObj = {
  startPl,
  closePl
}


export default {
  install(Vue) {
    Vue.prototype.$appPl = appPlObj
  }
}