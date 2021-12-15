<template>
  <div class="app-full">
    <van-nav-bar title="审批意见" :border="false" @click-left="$root.appBack()" left-arrow ></van-nav-bar>
    <div class="app-main">
      <app-input disabled v-model="approval.instanceId" label="工作单号"></app-input>
      <app-drop v-model="approval.agreeFlag" label="是否同意" dropName="UEP.YES_OR_NO"></app-drop>
      <app-input required v-model="approval.verifyOpinion" :rows="5" label="审批意见" type="textarea"></app-input>
      <van-button @click="save" type="info" size="large">审批</van-button>
    </div>
    
  </div>
</template>

<script>
import { appApprovalSave, approveData } from '@/api/app-base'
import flowUtil from './flowUtil'
export default {
  name: 'app-task-approve-content',
  data() {
    return {
      wfParams: {},
      approval: {}
    }
  },
  created(){
    this.wfParams = this.$route.query.wfParams;
    this.initData();
  },
  methods: {
    save(){
      if (!this.approval.verifyOpinion) {
        this.$toast('请填写审批意见~');
        return;
      }
      let params = {
        dataWrap: JSON.stringify({
          data: this.approval
        })
      }
      this.appCommon.tloading('保存中...')
      appApprovalSave(params).then(rdata => {
        this.sendNext();
      })
    },
    sendNext(){
      if (!this.approval.verifyOpinion) {
        this.$toast('请填写审批意见~');
        return;
      }
      let sendFunc = this.wfParams.sendFunc;
      let reg = /\w+\((\w+)\)/;
      reg.test(sendFunc)
      let sendType = RegExp.$1;
      let emitName = this.$route.name;
      flowUtil.approve.call(this, sendType, this.wfParams, emitName);
      this.appCommon.once(emitName, () => {
        this.$toast('审批成功~');
        this.$root.appBack(-2, 500);
      })
    },
    initData(){
      let params = {
        dc: JSON.stringify({}),
        dataWrap: JSON.stringify({}),
        dataWrapList: JSON.stringify({}),
        ...this.wfParams
      }
      approveData(params).then(rdata => {
        this.approval = rdata.dataWraps.dataWrap.data;
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  
</style>