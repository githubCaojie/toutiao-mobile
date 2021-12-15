<template>
  <div class="app-full">
    <van-nav-bar @click-left="$root.appBack()" title="任务" :border="false" left-arrow></van-nav-bar>
    <div class="app-main-btn">
      <van-form ref="rectifyForm">
        <app-input readonly label="隐患编码" v-model="model.hiddenCode"></app-input>
        <app-input readonly label="隐患名称" v-model="model.hiddenName"></app-input>
        <app-input :disabled="editFlag!=='Y'" label-width="100px" required type="textarea" :rows="3" label="整改结果描述" v-model="model.rectifyRemark"></app-input>
        <van-divider>隐患附件</van-divider>
      </van-form>
      <app-img-choose :disabled="true" :objUuid="fjYhUuid" type="12"></app-img-choose>
      <van-divider>整改附件</van-divider>
      <app-img-choose :watermark="watermark" :disabled="editFlag!=='Y'" ref="zjFj" :objUuid="fjZgUuid" type="12"></app-img-choose>
    </div>
    <div class="bottom">
      <van-button @click="save()" class="btn-large" type="primary">保存</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rectify',
  data() {
    return {
      patrolUuid: '',
      uuid: '',
      editFlag: 'Y',
      fjZgUuid: '',
      fjYhUuid: '',
      model: {},
      watermark: {
        title: this.$store.getters["userView"].operatorName + '（' + this.$store.state.user.bd.label + '）',
      },
    }
  },
  created() {
    this.patrolUuid = this.$route.query.patrolUuid
    this.uuid = this.$route.query.uuid
    this.editFlag = this.$route.query.editFlag || 'Y'
    this.init();
  },
  methods: {
    save() {
      let flag = this.$refs.zjFj.fileList.some(item => {
        return item.uploaded
      })
      if (!flag) {
        this.$toast('请上传整改照片~')
        return
      }
      this.$refs.rectifyForm.validate().then(() => {
        let params = {
          dataWrap: JSON.stringify({
            data: this.model
          })
        }
        this.appCommon.tloading('保存中...')
        this.appCommon.postReq('/porta/saveyh', params, process.env.VUE_APP_SAFE).then(() => {
          this.$toast('保存成功~')
          this.$root.appBack();
        })
      })

    },
    init() {
      let params = {
        dc: JSON.stringify({}),
        uuid: this.uuid
      }
      this.appCommon.postReq('/mobile/retifi/fix', params, process.env.VUE_APP_SAFE).then(rdata => {
        this.model = rdata.dataWraps.dataWrap.data;
        this.fjZgUuid = rdata.parameters.strUuid;
        this.fjYhUuid = this.model.uuid;
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>