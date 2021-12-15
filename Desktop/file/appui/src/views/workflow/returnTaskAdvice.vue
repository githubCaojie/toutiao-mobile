<template>
  <div class="app-full">
    <van-nav-bar @click-left="$root.appBack" title="退回理由" :border="false" left-arrow left-text="返回"></van-nav-bar>
    <div class="app-main">
      <ValidationObserver ref="observer" v-slot="{ invalid }" tag="form" @submit.prevent="login()">
        <ValidationProvider rules="required" name="账号" v-slot="{ errors }">
            <app-input required v-model="model.sendAdvice" type="textarea" :rows="5" label="传递意见：" />
        </ValidationProvider>
        <van-button :disabled="invalid" type="info" size="large" @click.prevent="saveAdvice()">确定</van-button>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import { appReturnTask, adviceForm, adviceSave } from '@/api/app-base'
export default {
  name: '',
  data() {
    return {
      model: {},
      appInstanceId: '',
      appTaskId: '',
    }
  },
  created(){
    this.appInstanceId = this.$route.query.appInstanceId;
    this.appTaskId = this.$route.query.appTaskId;
    this.sendType = this.$route.query.sendType;
    console.log(this.appInstanceId + '====' + this.appTaskId)
    this.initAdvice();
  },
  methods: {
    initAdvice(){
      let params = {
        dataWrap: JSON.stringify({}),
        appInstanceId: this.appInstanceId,
        appTaskId: this.appTaskId,
        sendType: this.sendType,
      }
      adviceForm(params).then(rdata => {
        this.model = rdata.dataWraps.dataWrap.data;
        console.log(this.model)
      })
    },
    saveAdvice(){
      let params = {
        dataWrap: JSON.stringify({
          data: this.model
        })
      }
      this.appCommon.tloading('保存中...')
      adviceSave(params).then(rdata => {
        this.sureBack();
      })
    },
    sureBack(){
      let params = {
        dc: JSON.stringify({}),
        appInstanceId: this.appInstanceId,
        appTaskId: this.appTaskId,
      }
      this.appCommon.tloading('退回中...')
      appReturnTask(params).then(rdata => {
        this.$toast('退回成功~');
        this.$root.appBack(500)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  
</style>