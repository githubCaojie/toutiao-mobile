import Vue from 'vue'
import ImagePreview from './ImagePreview'

const PreviewConstructor = Vue.extend(ImagePreview);
let PreviewInstance = undefined;
let oldIns = undefined;


function removePreview(){
  let container = document.getElementById('app');
  if (PreviewInstance && PreviewInstance.$el) {
    container.removeChild(PreviewInstance.$el);
  }
  PreviewInstance = undefined;
  oldIns = undefined;
}
const preview = function (options = {}) {
  options.curIndex = options.curIndex ? options.curIndex: 0;

  PreviewInstance = new PreviewConstructor({
    data: { ...options }
  }).$mount();

  let container = document.getElementById('app');
  container.appendChild(PreviewInstance.$el);
  if (oldIns) {
    setTimeout(() => {
      container.removeChild(oldIns.$el);
      oldIns = PreviewInstance;
    },500)
  } else {
    oldIns = PreviewInstance;
  }
  return PreviewInstance;
}

const closePre = function() {
  removePreview();
}

const isPreing = function() {
  return PreviewInstance ? PreviewInstance.isPreing() : false;
}

const imgPreview = {
  preview,
  closePre,
  isPreing
}

export function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.prototype.$imgPreview = imgPreview;
}

export default {
  install,
}