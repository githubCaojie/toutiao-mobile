import Cookies from 'js-cookie'
import appConstant from '@/utils/appConstant'
import axios from 'axios'

const appUtils = {
  throttle: function(fn, wait) {
    let canRun = true;
    return function(){
      if (!canRun) return
      canRun = false;
      setTimeout(() => {
        canRun = true;
      }, wait)
      fn.apply(this, arguments)
    }
  },
  debounce: function(fn, wait) {
    let timer = null;
    return function(){
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(this, arguments);
      }, wait)
    }
  },
  setCookie(key, value, expires=7){
    Cookies.set(key, value, {expires: expires})
  },
  getCookie(key, json=false){
    return json? Cookies.getJSON(key) : Cookies.get(key);
  },
  removeCookie(key) {
    Cookies.remove(key);
  },
  gmapDis(start, end){
    let gmapkey = appConstant.gmapkey;
    let url = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${start}&destinations=${end}&key=${gmapkey}`;
    return new Promise((resolve, reject) => {
      axios.get(url).then(rdata => {
        if (rdata.status === 200 && rdata.data && rdata.data.rows.length > 0) {
          console.log(rdata)
          resolve(rdata.data.rows[0].elements)
        }
      })
    })
    
  }
}
export default appUtils