export default {
  namespaced: true,
  state: {
    includes: [],
    pageDir: 'forward'
  },
  mutations: {
    ADD(state, route) {
      state.includes.push(route)
    },
    REMOVE(state, route) {
      let idx = state.includes.lastIndexOf(route);
      if (idx >= 0) {
        state.includes.splice(idx, 1);
      }
    },
    SET_PAGEDIR(state, pageDir) {
      state.pageDir = pageDir;
    }
  }
}