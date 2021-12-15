import {appCommon} from '@/utils/appCommon'

let paramObj = {}
let callbackObj = {};
let timer ;
export default {
  namespaced: true,

  state: {
  },

  mutations: {},
  actions: {
    asyncLabelData(state, {data, fn}) {
      paramObj[data.name] = paramObj[data.name] ? paramObj[data.name] : [];
      callbackObj[data.name] = callbackObj[data.name] ? callbackObj[data.name] : [];
      paramObj[data.name].push(data)
      callbackObj[data.name].push(fn)
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        getLabel()
      }, 500)
    }
  }
}

function getLabel() {
  let input = []
  for(let key in paramObj) {
    let arr = paramObj[key];
    let temp = paramObj[key][0]
    let codes = [];
    for(let i=0; i<arr.length; i++) {
      codes.push(arr[i].code)
    }
    temp.codes = codes;
    delete temp.code
    input.push(temp)
  }
  let params = {
    input: JSON.stringify(input)
  }
  appCommon.postReq('/framework/ajaxdatagrid.do', params, process.env.VUE_APP_SAFE).then(rdata => {
    for(let item of rdata) {
      let fnArr = callbackObj[item.name];
      for(let i=0; i< fnArr.length; i++) {
        fnArr[i](item.labels[i])
      }
    }
    paramObj = {}
    callbackObj = {}
  })
}