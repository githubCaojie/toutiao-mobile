import Cookies from 'js-cookie'

const state = {
  userView: undefined,
  authority: [],
  bdId: '104',
  bd: {},
}

const mutations = {
  SET_USERVIEW: function (state, userView) {
    state.userView = userView;
    let outnum = 1/48;
    Cookies.set('userView', JSON.stringify(userView), {expires: outnum})
  },
  SET_AUTHORITY: function (state, authority) {
    state.authority = authority;
  },
  SET_BDID: function(state, bdId) {
    state.bdId = bdId;
  },
  SET_BD: function(state, bd) {
    state.bd = bd;
  }
}
const actions = {
  
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}