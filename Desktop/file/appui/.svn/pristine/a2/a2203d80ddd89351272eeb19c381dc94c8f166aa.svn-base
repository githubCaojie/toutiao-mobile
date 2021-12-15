import * as appBaseApi from '@/api/app-base'
import eventBus from '@/utils/eventBus'

// var queryArr = [];  //正在查询的下拉
var queryingObj = {};

export default {
  namespaced: true,

  state: {
    dpCashObj: {},
    timer: undefined,
  },

  mutations: {
    updateDpCash(state, props) {
      var dropName = props.dropName;
      var dropArr = props.dropArr;
      state.dpCashObj[dropName] = dropArr;
    }
  },

  getters: {
    getDropData(state) {
      return (dropName) => {
        return state.dpCashObj[dropName];
      };
    }
  },

  actions: {
    asyncDropData({ state, commit }, props) {
      // queryArr.push(props);
      queryingObj[props.dpKey] = props;
      clearTimeout(state.timer);
      state.timer = setTimeout(() => {
        dropMultiInfo(commit);
      }, 500)
    },
    initCashDrop({ state, commit }) {
      appBaseApi.initCashDrop({}).then((rdata) => {
        let dataMap = rdata.parameters;
        for (let key in dataMap) {
          let datas = dataMap[key];
          commit('updateDpCash', { dropName: key, dropArr: datas });
        }
      })
    }
  }
}

function dropMultiInfo(commit) {
  let tempArr = [];
  for(let key in queryingObj) {
    if (queryingObj.hasOwnProperty(key)) {
      tempArr.push(queryingObj[key])
    }
  }
  appBaseApi.dropMultiInfo({
    dropNameArr: JSON.stringify(tempArr),
  }).then((rdata) => {
    let dataMap = rdata.parameters;
    queryingObj = {};
    for (let key in dataMap) {
      let datas = dataMap[key];
      let flag = true;
      eventBus.$emit(key, datas);
      for (let item of tempArr) {
        if (item.dpKey == key) {
          flag = item.cashFlag;
        }
      }
      if (flag) {
        commit('updateDpCash', { dropName: key, dropArr: datas });
      }
    }
  });
}