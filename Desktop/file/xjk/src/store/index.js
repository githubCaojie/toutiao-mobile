import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userInfo: '' || eval("("+localStorage.getItem('userInfo')+")"),
    token: '' || eval("("+localStorage.getItem('token')+")"),
    callbackurl: location.protocol + location.host + '/login'
  },
  mutations: {
    handleUserInfo: (state, userInfo) => {
      state.userInfo = userInfo;
      localStorage.setItem('userInfo', JSON.stringify(userInfo))
    },
    handleToken: (state, token) => {
      state.token = token;
      localStorage.setItem('token', JSON.stringify(token))
    },
  },
  getters: {
    userInfo: (state) => state.userInfo,
    token: (state) => state.token,
    callbackurl: (state) => state.callbackurl
  },
  actions: {
    
  },
  modules: {
    
  }
})

export default store