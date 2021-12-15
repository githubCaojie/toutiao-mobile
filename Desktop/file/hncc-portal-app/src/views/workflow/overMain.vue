<template>
  <div class="app-full">
    <van-nav-bar @click-left="$root.appBack" :title="title" :border="false" left-arrow left-text="返回"></van-nav-bar>
    <div class="app-main">
      <van-tabs v-model="active" @change="tabChange">
        <van-tab title="执行列表"></van-tab>
        <van-tab :title="contentTitle"></van-tab>
      </van-tabs>
      <div class="tab-content">
        <keep-alive>
          <component ref="tabComp" :editFlag="editFlag" v-on:showBusi="showBusi" :params="params" :is="curComp"></component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import workUtil from '@/utils/worderUtil'
import overDealList from './overDealList'
import flowUtil from './flowUtil'
export default {
  name: "flowMain",
  data() {
    return {
      active: 1,
      curComp: overDealList,
      contentTitle: '',
      title: '工单',
      editFlag: 'N',
      compObj: {
        '0': overDealList,
        '1': undefined,
      }
    };
  },
  created(){
    let query = this.$route.query;
    this.title = query.title;
    this.params = query.params;
    let paramObj = JSON.parse(this.params);
    let showTacheUrl = paramObj.showTacheUrl;
    let urlObj = flowUtil.parseParams(showTacheUrl);
    this.editFlag = urlObj.editFlag;
    console.log(this.editFlag)
    this.contentTitle = paramObj.tacheName;
    flowUtil.getBusiComp.call(this, paramObj.stdTacheNo, function(comp) {
      this.active = 1;
      this.compObj['1'] = comp.default;
      this.curComp = comp.default;
    })
  },
  methods: {
    showBusi(item) {
      if (item.activityName) {
        this.contentTitle = item.activityName;
      }
      this.params = JSON.stringify(item);
      flowUtil.getBusiComp.call(this, item.stdTacheNo, function(comp) {
        this.active = 1;
        this.compObj['1'] = comp.default;
      })
    },
    tabChange(index) {
      this.curComp = this.compObj[index+''];
      if (index === 0) {
        this.$nextTick().then(() => {
          this.$refs.tabComp.query();
        })
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.tab-content {
  height: calc(100% - 45px);
  overflow: hidden;
}
</style>