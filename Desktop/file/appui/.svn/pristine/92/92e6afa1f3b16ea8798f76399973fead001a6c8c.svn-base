<template>
  <div id="app">
    <transition :name="transitionName">
      <vue-page-stack>
        <router-view :key="$route.fullPath" class="router-view-c"></router-view>
      </vue-page-stack>
    </transition>

    <van-popup v-if="$store.state.currentRate<100" round :close-on-click-overlay="false" v-model="$store.state.downloadFlag">
      <div style="padding: 20px">
        <div style="text-align:center;padding-bottom:20px;font-size: 15px;">版本更新中...</div>
        <van-circle v-model="$store.state.currentRate" :rate="$store.state.currentRate" layer-color="#ebedf0" 
          :stroke-width="90" size="150px" :text="$store.state.currentRate+'%'" />
      </div>
    </van-popup>
  </div>
</template>

<script>
import appFileUtil from '@/utils/appFileUtil';

export default {
  name: "App",
  components: {},
  data() {
    return {
      transitionName: "forward",
    };
  },
  beforeCreate() {
    document.addEventListener(
      "deviceready",
      () => {
        console.log('ready=============================')
        try {
          navigator.splashscreen.hide();
        } catch (error) {
          console.log(error)
        }
        this.appInt();
        this.initBack();
        window.StatusBar.overlaysWebView(true);
        window.StatusBar.styleLightContent();
        window.cordova.getAppVersion.getVersionNumber().then((version)=> {
          this.$root.versionNum = version;
          console.log(version + '=====================')
          this.appCommon.checkVersion(version);
        });
        window.cordova.plugins.JtNative.checkVirtualBar('', (obj) => {
          let flag = obj.flag;
          console.log('************JtNative************');
          console.log(flag);
          // alert(obj.height +'flag=========' + flag)
          if(flag === 'Y') {
            console.log('************000************'+obj.height);
            setTimeout(() => {
              let navHeight = obj.height;
              let ele = document.getElementById('app');
              ele.classList.add('app-virtualbtn');
              ele.style.cssText = `height: calc(100vh - ${navHeight}px);`;
            }, 500)
          }
        });
        
      },
      false
    );
  },
  watch: {
    $route(to) {
      if (to.params['stack-key-dir'] === 'forward') {
        this.transitionName = 'forward';
      } else {
        this.transitionName = 'back';
      }
    },
  },
  methods: {
    appInt(){
      if (!window.cordova) {
        return;
      }
      appFileUtil.initDb(); //初始化数据库
      appFileUtil.createImgFolder();  //创建图片文件夹
      
      document.addEventListener("online", ()=>{
        this.$duandxc.addQueue();
      }, false);
    },
    initBack(){
      document.addEventListener("backbutton", ()=>{
        let curName = this.$route.name;
        if(curName=='appIndex'){
          if (!this.$root.isShowImg) {
            if(this.exitFlag){
              navigator.app.exitApp(); //退出app
            }
            this.$toast('再按一次退出~');
            this.exitFlag = true;
            setTimeout(()=>{
              this.exitFlag = false;
            },1000)
          }
        }else {
          this.$root.appBack();
        }
      }, false);
    },
  }
};
</script>

<style lang="scss" scoped>
.router-view-c {
  position: absolute;
  transition: opacity 0.5s, transform 0.5s;
  width: 100%;
}
.forward-enter,
.back-leave-active {
  opacity: 0.5;
  transform: translateX(100%);
}
.forward-leave-active,
.back-enter {
  opacity: 0.5;
  transform: translateX(-100%);
}
</style>
