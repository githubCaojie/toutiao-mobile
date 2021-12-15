import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters'

Vue.use(Vuex)

const moduleFiles = require.context('./modules', true, /\.js$/);
var modules = {};
moduleFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  var fileName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
  modules[fileName] = moduleFiles(modulePath).default;
  return modules;
}, modules)


const state = {
  token: '',
  //上传
  uploadingUuid: '',
  uploadingPer: 0,
  currentRate: 0,
  addressBookList:'',
  groupName:'',
  linkTel:'',
  // location: undefined,
  location: {
    lng: '112.9000996838',
    lat: '23.1382233927',
  }
}

const mutations = {
  setToken: function (state, token) {
    state.token = token;
  },
  setaddressBookList: function (state, list) {
    state.addressBookList = list;
  },
  
  setGroupName: function (state, groupNameList) {
    state.groupName = groupNameList;
  },
  SET_TEL: function (state, linkTelNumber) {
    state.linkTel = linkTelNumber;
  },
  updateVersionDownload(state, per){
    state.currentRate = per;
  },
  setUploadingUuid(state, uuid) {
    state.uploadingUuid = uuid;
  },
  setUploadingPer(state, per) {
    state.uploadingPer = per;
  },
  updateLoc: function(state, loc) {
    state.location = loc;
  }
}

const store = new Vuex.Store({
  modules,
  state,
  mutations,
  getters
})

export default store;