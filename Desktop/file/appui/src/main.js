import Vue from 'vue'
import App from './App.vue'
import 'amfe-flexible/index.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserTimes, faUserEdit, faUserLock, faPlusSquare, faArrowCircleRight, faTrashAlt, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faUserTimes, faUserEdit, faUserLock, faPlusSquare, faArrowCircleRight, faTrashAlt, faCheckCircle)
Vue.component('fa-icon', FontAwesomeIcon)

import {
  Button, Field, Cell, CellGroup, Loading, Overlay, NavBar, Toast,
  List, PullRefresh, DropdownMenu, DropdownItem, Picker, Popup, Dialog, Uploader,
  Image, ActionSheet, Icon, Divider, Switch, ImagePreview, SwitchCell, Circle, TreeSelect,
  Sidebar, SidebarItem, DatetimePicker, Step, Steps, Tabbar, TabbarItem, Swipe, SwipeItem, Collapse, 
  CollapseItem, Checkbox, Tabs, Tab, IndexBar, IndexAnchor, Form, Rate, Slider, Progress, Grid, GridItem, RadioGroup, Radio,
  Skeleton, Search, Card,
} from 'vant';

Vue.use(Button).use(Field).use(Cell).use(CellGroup).use(Loading).use(Overlay).use(NavBar).use(Toast)
  .use(List).use(PullRefresh).use(DropdownMenu).use(DropdownItem).use(Picker).use(Popup).use(Dialog).use(Uploader)
  .use(Image).use(ActionSheet).use(Icon).use(Divider).use(Switch).use(ImagePreview).use(SwitchCell).use(Circle).use(TreeSelect)
  .use(Sidebar).use(SidebarItem).use(DatetimePicker).use(Step).use(Steps).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem)
  .use(Collapse).use(CollapseItem).use(Checkbox).use(Tabs).use(Tab).use(IndexBar).use(IndexAnchor).use(Form).use(Rate).use(Slider)
  .use(Progress).use(Grid).use(GridItem).use(RadioGroup).use(Radio).use(Skeleton).use(Search).use(Card)

Vue.config.productionTip = false

import appInput from '@/app-comps/app-input/app-input'
import appInputbtn from '@/app-comps/app-inputbtn/index.js'
import appDrop from '@/app-comps/app-drop/app-drop';
import appImgChoose from '@/app-comps/app-img-choose/app-img-choose'
import appFile from '@/app-comps/app-file/app-file'
import appDropmenu from '@/app-comps/app-dropmenu/app-dropmenu'
import appTree from '@/app-comps/app-tree/app-tree'
import appDate from '@/app-comps/app-date/app-date'
import appList from '@/app-comps/app-list/app-list'
import appDropShow from '@/app-comps/app-drop/app-drop-show';
import pullEllipse from '@/app-comps/pull-ellipse/pull-ellipse';
import appFileChoose from '@/app-comps/app-file-choose/app-file-choose'
import appEsign from '@/app-comps/app-esign/app-esign'
import appTimeline from '@/app-comps/app-timeline/app-timeline'
import appPopover from '@/app-comps/app-popover/app-popover'
import appRichtext from '@/app-comps/app-richtext/appRichtext'
import appImgPreview from '@/app-comps/app-imgpreview/index.js'
import appFlowbtns from '@/app-comps/app-flowbtns/appFlowbtns'
Vue.use(appImgPreview)
import appPl from '@/app-comps/app-pl/index'
Vue.use(appPl)
import appDragBtn from '@/app-comps/app-drag-btn/app-drag-btn.vue'
import appTreeb from '@/app-comps/app-treeb/index.js'
Vue.use(appTreeb)

Vue.use(appInputbtn)
Vue.component('app-input', appInput);
Vue.component('app-drop', appDrop);
Vue.component('app-drop-show', appDropShow);
Vue.component('app-img-choose', appImgChoose);
Vue.component('app-file', appFile);
Vue.component('app-dropmenu', appDropmenu);
Vue.component('app-tree', appTree)
Vue.component('app-date', appDate)
Vue.component('app-list', appList)
Vue.component('pull-ellipse', pullEllipse)
Vue.component('app-file-choose', appFileChoose);
Vue.component('app-esign', appEsign);
Vue.component('app-timeline', appTimeline);
Vue.component('app-popover', appPopover)
Vue.component('app-richtext', appRichtext);
Vue.component('app-drag-btn', appDragBtn);
Vue.component('app-flowbtns', appFlowbtns)

import appCommon from '@/utils/appCommon';
Vue.use(appCommon)


//element-ui
import { Tree, Calendar } from 'element-ui';
Vue.component(Tree.name, Tree);
Vue.component(Calendar.name, Calendar);


import './style/style.scss'
import store from './store/store'
import router from './router/router'
import VuePageStack from 'vue-page-stack';
Vue.use(VuePageStack, { router });
import './permission.js'

import * as filters from './filters/filters.js' // global filters


import '@/directives/permission'
import '@/directives/longpress'
import '@/directives/recordScroll'

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

import duandxc from '@/utils/duandxc'
Vue.prototype.$duandxc = duandxc


new Vue({
  render: h => h(App),
  router,
  store,
  data(){
    return {
      versionNum: '',
    }
  },
  methods: {
    goPath(path, params = {}) {
      this.$router.push({
        path: path,
        query: {
          ...params
        }
      })
    },
    appBack(num=-1, delay) {
      if (delay) {
        setTimeout(() => {
          this.$router.go(num);
        }, delay)
      } else {
        this.$router.go(num);
      }
    },
  },
}).$mount('#app')