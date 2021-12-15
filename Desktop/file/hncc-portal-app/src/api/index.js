import axios from 'axios';
import appConstant from '@/utils/appConstant.js'
import Vue from 'vue';
import qs from 'qs'
import store from '@/store/store.js'
import { login, refToken } from '@/api/app-base';
import { getToken, getRefToken, setToken, setRefToken } from '@/utils/auth'

let hVue = new Vue();

const instance = axios.create({
  baseURL: appConstant.busiUrl,
  timeout: 60000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  }
})

instance.interceptors.request.use((config) => {
  // config.headers.Cookie = 'token=' + store.state.token;
  console.log("验证信息2 ：  ");
  let contentToken = getToken();
  config.headers.token = contentToken;
  config.data = qs.stringify(config.data);
  if (config.url.includes('/jtfile')) {
    console.log("登录中.1..")
    config.baseURL = appConstant.baseFilePath;
  }
  return config;
}, (error) => {
  Promise.reject(error);
})

instance.interceptors.response.use(async (response) => {

  var rdata = response.data;
  console.log("验证信息1 ：  "+response.data);
  if (rdata.message === '-100') { //登录失效，重新登录
 
    let his = window.localStorage.getItem(appConstant.loginStorageId);
    if (his) {
      let refToken = getRefToken();
      let userInfo = JSON.parse(his);
      let params = {
        loginCode: userInfo.userName,
        refToken: refToken,
        moduleId: appConstant.moduleId
      };
      let loginResult = await refToken(params);
      let token = loginResult.parameters['content-token'];
      let rtoken = loginResult.parameters['content-token-ref'];
      setToken(token);
      setRefToken(rtoken);
      
      response.config.headers.token = token;
      let result = await axios(response.config);
      hVue.appCommon.tloadingc();
      return result.data;
    }
  }

  hVue.appCommon.tloadingc();
  if (response.status != 200 || rdata.errorMessage) {
    // rdata.errorMessage = response.config.url;
    dealError(rdata);
    return Promise.reject(rdata);
  }
  return rdata;
}, (error) => {
  if (error.message.indexOf('timeout ') >= 0) {
    error.errorMessage = "请求超时，请检查网络重试~";
  }
  // error.errorMessage = JSON.stringify(error);
  dealError(error);
  return Promise.reject(error);
})

function dealError(error) {
  console.log("登录中.2.."+error.errorMessage +" q ")
  hVue.appCommon.tloadingc();
  hVue.appCommon.alert('警告1', error.errorMessage ? error.errorMessage : '请求失败！');
}

export default instance;