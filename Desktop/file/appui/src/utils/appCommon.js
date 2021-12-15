import * as appBaseApi from '@/api/app-base'
import appConstant from './appConstant'
import Vue from 'vue'
import eventBus from './eventBus'
import appFileUtil from './appFileUtil'
import store from '@/store/store.js'
import httpInstance from '@/api/index'
import moment from 'moment'

const appCommon = {
  tloading: (text, mask = false) => {
    eventBus.$toast.loading({
      mask: mask,
      message: text ? text : '加载中...',
      forbidClick: true,
      duration: 0,
    })
  },
  tloadingc: () => {
    eventBus.$toast.clear();
  },
  alert: (title, msg, handler) => {
    eventBus.$dialog.alert({
      title: title,
      message: msg
    }).then(() => {
      if (handler) {
        handler();
      }
    });
  },
  confirm: (title, msg, handler, cancel) => {
    eventBus.$dialog.confirm({
      title: title,
      message: msg
    }).then(handler).catch(cancel);
  },
  emit: (eventName, msg) => {
    eventBus.$emit(eventName, msg);
  },
  on: (eventName, eventHandle) => {
    if (eventName && typeof eventHandle === 'function') {
      eventBus.$on(eventName, eventHandle);
    }
  },
  off: (eventName, eventHandle) => {
    eventBus.$off(eventName, eventHandle);
  },
  once: (eventName, eventHandle) => {
    if (eventName && typeof eventHandle === 'function') {
      eventBus.$once(eventName, eventHandle);
    }
  },
  guuid: () => {
    return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  },
  gpageInfo() {
    return { curPageNum: 0, rowOfPage: appConstant.rowOfPage };
  },
  isAndroid(){
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    return isAndroid;
  },
  debounce(fn, outTime = 500) {
    let timeout = null;
    return function () {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        fn.apply(this, arguments);
      }, outTime)
    }
  },
  throttle(fn, wait = 300) {
    let canRun = true;
    return function(){
      if (!canRun) return;
      canRun = false;
      setTimeout(() => {
        canRun = true;
      }, wait)
      fn.apply(this, arguments);
    }
  },
  mileToK: function (milestone) {
    var type = 'K';
    if (typeof milestoneType != 'undefined' && !!milestoneType)
      type = milestoneType;

    if (milestone != 0 && !milestone)
      return "";
    // return type+"0+000";
    milestone = milestone.toString().trim();
    if (!isNaN(milestone)) {
      var milestoneNum = this.getPointNum(milestone, 3);
      if (milestone.indexOf(".") != -1) {
        //小数点三位以后的部分
        var p = milestone.substring(milestoneNum.length, milestoneNum.length + 2);
        if (p) {
          return (type + milestoneNum).replace('.', "+") + "." + p;
        } else {
          return (type + milestoneNum).replace('.', "+");
        }
      } else {
        return type + milestoneNum.replace('.', "+");
      }
    }
    return "";
  },
  getPointNum(num, n) {
    if (!n)
      n = 0;
    n = Number(n);
    var groups = (/([\-\+]?)(\d*)(\.\d+)?/g).exec("" + num),
      mask = groups[1],            //符号位 
      integers = (groups[2] || ""), //整数部分 
      decimal = groups[3] || "",       //小数部分 
      num = mask + integers + decimal;
    var str = String(num);
    var index = str.indexOf(".");
    var result = num;
    if (index != -1) {
      result = str.substring(0, index + n + 1);
      result = Number(result);
    }
    if (!!result && !isNaN(result))
      result = parseFloat(result).toFixed(n);
    return result;
  },
  kToMile: function (milek) {
    if (!milek) {
      return '';
    }
    if (milek.toString().indexOf('K') < 0) {
      return milek;
    }
    milek = milek.replace('.', '');
    console.log(milek)
    return milek.replace('K', '').replace('+', '.');
  },
  isPicture(url) {
    var hz = '';
    var imgType = ['.bmp', '.jpg', '.jpeg', '.png', '.tif', '.gif', '.pcx', '.tga', '.exif', '.fpx', '.svg', '.psd', '.cdr', '.pcd',
      '.dxf', '.ufo', '.eps', '.ai', '.raw', '.WMF', '.webp'];
    var reg = /\.\w+$/;
    var result = url.match(reg);
    if (result.length > 0) {
      hz = result[0].toLowerCase();
    }
    if (!hz) {
      return false;
    }
    return imgType.includes(hz);
  },
  isVideo(url) {
    var hz = '';
    var videoType = ['.rm', '.rmvb', '.mpeg1-4', '.mov', '.mtv', '.dat', '.wmv', '.avi', '.3gp', '.amv', '.dmv', '.flv',
      '.mpg', '.mpe', '.mpa', '.m15', '.m1v', '.mp2', '.mp4', '.mkv'];
    var reg = /\.\w+$/;
    var result = url.match(reg);
    if (result.length > 0) {
      hz = result[0].toLowerCase();
    }
    if (!hz) {
      return false;
    }
    return videoType.includes(hz);
  },
  checkVersion: async function (version) {
    let params = {
      curVersionNumber: version,
      softPlatform: appConstant.softPlatform,
      plantForm: appConstant.plantForm,
      moduleId: appConstant.moduleId
    }
    let rdata = await appBaseApi.checkVersion(params);
    let lastObj = rdata.parameters.obj;
    if (lastObj) {
      let that = this;
      this.confirm('提示','发现新版本是否更新？', async function() {
        console.log(lastObj)
        let files = await that.getJtFiles(lastObj.id);
        if (files.result.length > 0) {
          let file = files.result[0];
          console.log(file)
          let downloadUrl = appConstant.fileUrl + file.filePath;
          console.log(downloadUrl);
          that.downloadApk(downloadUrl, lastObj)
        }
      }, () => {
        if (lastObj.forceUpdate == 'Y') {
          navigator.app.exitApp(); //退出app
        }
      })
    }
  },
  getJtFiles(objUuid, objType){
    let params = {
      busiUuid: objUuid,
      busiType: objType,
      module: appConstant.moduleId,
    };
    return appBaseApi.appDocs(params);
  },
  downloadApk: function (downloadUrl, updateObj) {
    store.state.downloadFlag = true;
    let that = this;
    let folderArr = appConstant.locImgPath;
    let dfileName = appConstant.moduleId + '.apk';
    let filePath = appFileUtil.getFileDir() + folderArr.join('/');
    appFileUtil.downloadFile(downloadUrl, filePath, dfileName, (progressEvent) => {
      let percentage = parseInt((progressEvent.loaded / progressEvent.total) * 100);
      store.commit('updateVersionDownload', percentage);
      if (percentage >= 100) {
        setTimeout(() => {
          that.confirm('提示', '下载完成，是否安装最新应用？', () => {
            cordova.plugins.fileOpener2.open(
              filePath + '/' + dfileName,
              'application/vnd.android.package-archive'
            );
          }, () => {
            if (updateObj.forceUpdate == 'Y') {
              navigator.app.exitApp(); //退出app
            }
          })
        },500)
      }
    })
  },
  checkAndroidPermission: function () {
    try {
      if (undefined == cordova) {
        return
      }
    } catch{
      return
    }
    let permissions = cordova.plugins.permissions;
    let plist = [permissions.WRITE_EXTERNAL_STORAGE, permissions.READ_EXTERNAL_STORAGE, permissions.CAMERA];
    permissions.checkPermission(plist, function (status) {
      if (!status.hasPermission) {
        permissions.requestPermissions(plist,
          function (status) {
            if (!status.hasPermission) {
              Vue.$vux.alert.show({
                title: '提示',
                content: '禁止权限将导致app操作图片等信息！'
              });
            }
          },
          function (error) {
            console.log(error)
          }
        );
      }
    });
  },
  getCurLocation(){
    return new Promise((resolve,reject) => {
      let locOptions = {
        maximumAge: 3000,
        timeout: 5000,
        enableHighAccuracy: true
      };

      navigator.geolocation.getCurrentPosition(
        position => {
          resolve(position);
        },
        error => {
          // console.log("getlocation error：" + JSON.stringify(error));
          reject(error)
        },
        locOptions
      );
    })
  },
  locWatchId: undefined,
  watchLocation: function () {
    if (this.locWatchId) return;
    this.locWatchId = navigator.geolocation.watchPosition((position) => {
      var loc = {
        lng: position.coords.longitude,
        lat: position.coords.latitude,
        moment: moment(),
      }
      store.commit('updateLoc', loc)
    }, (error) => {
      console.log('getlocation error：' + JSON.stringify(error))
    }, { maximumAge: 5000, timeout: 5000, enableHighAccuracy: true })
  },
  clearLocWatch() {
    navigator.geolocation.clearWatch(this.locWatchId);
  },
  echartDataX(dataXLength, dataZoom) {
    //折线图横坐标显示比例数据
    if (dataXLength > 13) {
      dataZoom[0].end = 12;
      dataZoom[1].end = 12;
    } else {//<=13
      if (dataXLength > 8) {
        dataZoom[0].end = 30;
        dataZoom[1].end = 30;
      } else {//<=8
        if (dataXLength > 5) {
          dataZoom[0].end = 70;
          dataZoom[1].end = 70;
        } else {//<=5
          dataZoom[0].end = 100;
          dataZoom[1].end = 100;
        }
      }
    }
    console.log(dataZoom)
    return dataZoom;
  },

  postReq(url, params, service) {
    if (service) {
      url = appConstant.baseUrl + service + url;
    }
    return httpInstance.post(url, params);
  }
  
}

export function postContext(url, params, service) {
  return appCommon.postReq(url, params, service)
}

export {
  appCommon
}

export default {
  install(Vue) {
    Vue.prototype.appCommon = appCommon;
  }
}

