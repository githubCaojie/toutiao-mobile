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
import birthday from "./birthday";
import addressBook from "./addressBook";
import appPersonal from "./appPersonal";
import appMixin from '@/utils/appMixin'
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
          tabLabel: "消息",
          comp: birthday
        }, 
        {
          active: require("../../assets/imgs/tab/mained.png"),
          inactive: require("../../assets/imgs/tab/main.png"),
          tabLabel: "应用",
          comp: appMain
        }, 
        // {
        //   active: require("../../assets/imgs/tab/msged.png"),
        //   inactive: require("../../assets/imgs/tab/msg.png"),
        //   tabLabel: "消息",
        //   comp: appPersonal
        // }, 
         {
          active: require("../../assets/imgs/tab/mained.png"),
          inactive: require("../../assets/imgs/tab/main.png"),
          tabLabel: "通讯录",
          comp: addressBook
        }, 
        {
          active: require("../../assets/imgs/tab/personed.png"),
          inactive: require("../../assets/imgs/tab/person.png"),
          tabLabel: "我的",
          comp: appPersonal
        }
      ],
      curComp: birthday,
      active: 0
    };
  },
  mounted() {
    // this.initCashDrop();
  },
  activated(){
    // this.$emit('actived');
  },
  methods: {
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