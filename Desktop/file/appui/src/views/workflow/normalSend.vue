<template>
  <div>
    <app-input label="工单号：" disabled :value="adviceObj.instanceId"></app-input>
    <van-cell required center title="是否同意：">
      <template #right-icon>
        <van-switch  :disabled="editFlag!=='Y'" v-model="adviceObj.agreeFlag" active-value="Y" inactive-value="N" size="24" />
      </template>
    </van-cell>
    <app-input required type="textarea" rows="5" v-model="adviceObj.verifyOpinion" label="意见：" :disabled="editFlag!=='Y'"/>
    <!-- <van-button size="large" type="info">保存</van-button> -->
    <div style="margin-top: 10px">
      <app-flowbtns :params="flowParams" :editFlag="'Y'" saveBtn="Y"></app-flowbtns>
    </div>
  </div>
</template>

<script>
import appFlowbtns from '@/app-comps/app-flowbtns/appFlowbtns'
import { initApproval, saveApproval } from '@/api/app-base'
import flowUtil from '@/views/workflow/flowUtil'
export default {
  name: 'normalSend',
  components: {
    appFlowbtns
  },
  props: {
    params: {
      type: String,
    },
    editFlag: {
      type: String,
      default: 'Y'
    }
  },
  created(){
    this.flowParams = this.params;
    let obj = JSON.parse(this.flowParams);
    let showTacheUrl = obj.showTacheUrl;
    let urlObj = flowUtil.parseParams(showTacheUrl);
    this.paramsObj = {
      ...obj,
      ...urlObj
    }
    this.initForm();
  },
  data() {
    return {
      flowParams: '',
      adviceObj: {},
      paramsObj: {},
    }
  },
  methods: {
    save(){
      let params = {
        dataWrap: JSON.stringify({
          data: this.adviceObj
        })
      }
      this.appCommon.tloading('保存中...')
      saveApproval(params).then(rdata => {
        this.$toast('保存成功~');
      })
    },
    initForm(){
      let params = {
        dc: JSON.stringify({}),
        dataWrap: JSON.stringify({}),
        appInstanceId: this.paramsObj.appInstanceId,
        appTaskId: this.paramsObj.appTaskId,
      }
      initApproval(params).then(rdata => {
        this.adviceObj = rdata.dataWraps.dataWrap.data;
      })
    },
  }
}
</script>

<style lang="scss" scoped>
  
</style>