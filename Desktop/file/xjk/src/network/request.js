import axios from 'axios';
import Qs from 'qs'
import {Message} from 'element-ui'
import router from '../router/index'
import store from '../store/index'
import api from './api'

axios.defaults.withCredentials = true
axios.defaults.baseURL ='http://xinxh.tianyi.hnjtcloud.com';

// 需要请求头带token的api
const tokenApi = [
  api.getRole,
  api.getlistCount,
  api.getTodoList,
  api.logOut,
  api.openPurchase
]

axios.interceptors.response.use(
  response => {
    if(response.status == 200) {
      return response;
    }else {
      return Message.error({
        message: '对不起，服务器开了点小差，请重新登录',
        onClose: function () {
          let params = {
            token: store.getters.token,
            mobile: store.getters.userInfo.linkmenPhone
          }
          return axios.post(
            api.logOut,
            Qs.stringify(params)
          )
          .then(res => {
            localStorage.removeItem("userInfo");
            localStorage.removeItem("token");
            store.commit('handleUserInfo', '')
            store.commit('handleToken', '')
            return router.push({
              name: 'login'
            })
          }
          )
        }
      })
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default {
  post(url,data={}){
    if(tokenApi.includes(url)) {
      return new Promise((resolve,reject) => {
        axios.post(
          url,
          Qs.stringify(data),
          {
            headers: {
              token: store.getters.token
            }
          }
        )
        .then(response => {
          resolve(response.data);
        },err => {
          reject(err)
        })
      })
    }else {
      return new Promise((resolve,reject) => {
        axios.post(url,Qs.stringify(data))
          .then(response => {
            if(response == undefined) {
              resolve(response)
            }else {
              resolve(response.data);
            }
          },err => {
            reject(err)
          })
      })
    }
  },
  get(url,params={}){
    if(tokenApi.includes(url)) {
      return new Promise((resolve,reject) => {
        axios.get(
          url + '?' + Qs.stringify(params),
          {
            headers: {
              token: store.getters.token
            }
          }
        )
        .then(response => {
          resolve(response.data);
        })
      })
    }else {
      return new Promise((resolve,reject) => {
        axios.get(
          url + '?' + Qs.stringify(params),
        )
        .then(response => {
          resolve(response.data);
        })
      })
    }
  }
}
