<template>
  <div class="app-full">
    <van-nav-bar @click-left="$root.appBack()" title="文档查询" :border="false" left-arrow ></van-nav-bar>
    <div class="app-main">
      <div class="tab-content">
        <keep-alive>
          <component :is="curComp"></component>
        </keep-alive>
      </div>
      <van-tabs v-model="active" @change="tabChange">
        <van-tab title="结构二维码"></van-tab>
        <van-tab title="第二个tab"></van-tab>
        <van-tab title="第三个tab"></van-tab>
        <!-- <van-tab title="已归档"></van-tab> -->
      </van-tabs>
    </div>
  </div>
</template>

<script>
import jgCode from './jgCode'
export default {
  name: "documentIndex",
  data() {
    return {
      active: 0,
      comps: {
        '0': jgCode,
      },
      curComp: jgCode
    };
  },
  methods: {
    tabChange(index) {
      this.curComp = this.comps[index+'']
    }
  }
};
</script>

<style lang="scss" scoped>
.tab-content {
  height: calc(100% - 45px);
}
</style>