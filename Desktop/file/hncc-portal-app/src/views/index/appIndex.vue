<template>
  <div class="app-full">
    <!-- <van-nav-bar class="appIndexNav" :border="false" title="隧道管理"></van-nav-bar> -->
    <div class="tab-content">
      <keep-alive>
        <component :compId="compId" :is="curComp"></component>
      </keep-alive>
    </div>
    <van-tabbar v-model="active">
      <van-tabbar-item
        @click="tabClick(item)"
        :info="item.rightNum"
        :to="item.path"
        v-for="(item,index) in tabArr"
        :key="index"
        :icon="item.icon"
      >
        <span>{{item.tabLabel}}</span>
        <img slot="icon" slot-scope="props" :src="props.active ? item.active : item.inactive" alt="" />
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>



<script>
import appMain from "./appMain";
import entry from "./entry";
import birthday from "./birthday";
import myAddress from "./myAddress";
import appPersonal from "./appPersonal";
import test6 from "./test6";
import home from "./home";
import appMixin from '@/utils/appMixin';

export default {
  name: "appIndex",
  mixins: [appMixin],
  data() {
    return {
      compId: this.appCommon.guuid(),
      tabArr: [
      {
          active: require("../../assets/imgs/tab/mained.png"),
          inactive: require("../../assets/imgs/tab/main.png"),
          tabLabel: "首页",
          comp: home
        }, 
         {
          active: require("../../assets/imgs/tab/msged.png"),
          inactive: require("../../assets/imgs/tab/msg.png"),
          tabLabel: "消息",
          comp: birthday
        }, 
        // {
        //   active: require("../../assets/imgs/tab/msged.png"),
        //   inactive: require("../../assets/imgs/tab/msg.png"),
        //   tabLabel: "应用",
        //   comp: test6
        //   // comp: entry
        //   //  comp: appMain
        // }, 
        // {
        //   active: require("../../assets/imgs/tab/msged.png"),
        //   inactive: require("../../assets/imgs/tab/msg.png"),
        //   tabLabel: "消息",
        //   comp: appPersonal
        // }, 
         {
          active: require("../../assets/imgs/tab/txled.png"),
          inactive: require("../../assets/imgs/tab/txl.png"),
          tabLabel: "通讯录",
          comp: myAddress
        }, 
        {
          active: require("../../assets/imgs/tab/personed.png"),
          inactive: require("../../assets/imgs/tab/person.png"),
          tabLabel: "我的",
          comp: appPersonal
        }
      ],
      curComp: home,
      active: 0
    };
  },
  mounted() {
    // this.initCashDrop();
    this.initBack();
  },
  activated(){
    // this.$emit('actived');
  },
  methods: {
        initBack(){
           console.log("登录中..1.")
      document.addEventListener("backbutton", ()=>{
        let curName = this.$route.name;
        if(curName=='appIndex'){
           console.log("登录中.2..")
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
    tabClick(item) {
      this.curComp = item.comp;
    },
    initCashDrop() {
      this.$store.dispatch("drop/initCashDrop", {});
    },
  }
};
</script>

<style lang="scss" scoped>
.tab-content {
  height: calc(100% - 50px);
  overflow-y: auto;
}
</style>