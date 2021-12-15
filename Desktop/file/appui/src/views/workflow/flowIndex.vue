<template>
  <div class="app-full">
    <van-nav-bar @click-left="$root.appBack()" title="工单管理" :border="false" left-arrow >
      <van-icon @click="showQuery=!showQuery" size="22px" :name="require('../../assets/imgs/query.png')" slot="right"  />
    </van-nav-bar>
    <div class="app-main">
      <div class="tab-content">
        <keep-alive>
          <component :paramStr="paramStr" :is="curComp"></component>
        </keep-alive>
      </div>
      <van-tabs v-model="active" @change="tabChange">
        <van-tab title="待处理"></van-tab>
        <van-tab title="已处理"></van-tab>
        <!-- <van-tab title="已归档"></van-tab> -->
      </van-tabs>
    </div>
    <van-popup v-model="showQuery" position="top" style="background:transparent;">
      <div class="popup-top"></div>
      <van-cell-group>
        <app-input v-model="queryParams.appNo" label="工单号："></app-input>
        <app-drop v-model="queryParams.appType" :label="'工单类型：'" :dropName="'JT.APP_TYPE'"></app-drop>
        <app-input v-model="queryParams.content" label="工单内容："></app-input>
        <van-button @click="query" size="large" type="info" style="margin: 4vw 0;">查询</van-button>
      </van-cell-group>
    </van-popup>
  </div>
</template>

<script>
import tabUndoList from './tabUndoList'
import tabOrderHistory from './tabOrderHistory'
export default {
  name: "flowIndex",
  data() {
    return {
      active: 0,
      showQuery: false,
      comps: {
        '0': tabUndoList,
        '1': tabOrderHistory
      },
      queryParams: {
        appNo: '',
        appType: '',
        content: '',
      },
      paramStr: '',
      curComp: tabUndoList
    };
  },
  methods: {
    query(){
      this.paramStr = JSON.stringify(this.queryParams);
      this.showQuery = false;
    },
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