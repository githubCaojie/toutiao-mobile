<template>
  <div class="app-full">
    <van-nav-bar @click-left="leaveBack" :title="title" :border="false" left-arrow></van-nav-bar>
    <div class="app-main">
      <van-tabs v-model="active" @change="tabChange">
        <van-tab title="执行列表"></van-tab>
        <van-tab :title="contentTitle"></van-tab>
      </van-tabs>
      <div class="tab-content">
        <component @flowExecClick="flowExecClick" :compId="compId" ref="tabComp" :params="wfParams" v-on:showBusi="showBusi" :is="curComp"></component>
      </div>
    </div>
  </div>
</template>

<script>
import flowExec from './flowExec';
import flowUtil from './flowUtil'
import appMixin from '@/utils/appMixin'
export default {
  name: "flowMain",
  mixins: [appMixin],
  data() {
    return {
      compId: this.appCommon.guuid(),
      appInstanceId: '',
      openMode: '',
      wfParams: {},
      active: 1,
      curComp: flowExec,
      contentTitle: '',
      title: '工程报验',
      compObj: {
        '0': flowExec,
        '1': undefined,
      }
    };
  },
  activated() {
    let query = this.$route.query;
    if (query.title) {
      this.title = query.title;
    }
    this.appInstanceId = query.appInstanceId;
    this.openMode = query.openMode;
    this.initFlow();
  },
  methods: {
    async leaveBack() {
      let backFn = this.$refs.tabComp.$children && this.$refs.tabComp.$children[0].beforeBack;
      if (backFn && typeof backFn === 'function') {
        let flag = await backFn();
        if (flag) {
          this.$root.appBack();
        }
      } else {
        this.$root.appBack();
      }
    },
    flowExecClick(rdata) {
      let urlObj = flowUtil.parseParams(rdata.tacheUrl);
      delete rdata.tacheUrl;
      this.wfParams = { ...rdata, ...urlObj };
      if (!this.wfParams.busiPath) {
        return;
      }
      this.contentTitle = this.wfParams.activityName;
      flowUtil.getBusiComp.call(this, this.wfParams.busiPath, function (comp, extParams) {
        this.wfParams = { ...this.wfParams, ...extParams };
        this.active = 1;
        this.compObj['1'] = comp.default;
        this.curComp = comp.default;
      })
    },
    initFlow() {
      let params = {
        appInstanceId: this.appInstanceId,
        openMode: this.openMode,
      }
      flowUtil.worderInitData(params).then(rdata => {
        let urlObj = flowUtil.parseParams(rdata.showTacheUrl);
        console.log(rdata.showTacheUrl)
        delete rdata.showTacheUrl;
        this.wfParams = { ...rdata, ...urlObj };
        this.contentTitle = this.wfParams.tacheName;
        flowUtil.getBusiComp.call(this, this.wfParams.busiPath, function (comp, extParams) {
          this.wfParams = { ...this.wfParams, ...extParams };
          this.active = 1;
          this.compObj['1'] = comp.default;
          this.curComp = comp.default;
        })
      })
    },
    showBusi(item) {
      if (item.activityName) {
        this.contentTitle = item.activityName;
      }
      this.params = JSON.stringify(item);
      flowUtil.getBusiComp.call(this, item.stdTacheNo, function (comp) {
        this.active = 1;
        this.compObj['1'] = comp.default;
      })
    },
    tabChange(index) {
      this.curComp = this.compObj[index + ''];
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
  overflow-y: auto;
}
</style>