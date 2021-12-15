<template>
  <div class="app-full">
    <van-nav-bar @click-left="$root.appBack()" title="隐患" :border="false" left-arrow></van-nav-bar>
    <div class="app-main-btn">
      <van-form ref="dangerForm">
        <!-- <app-input :disabled="editFlag!=='Y'" readonly right-icon="ellipsis" @click.native="chooseHDanger" label="隐患编码：" v-model="model.hiddenCode"></app-input> -->
        <app-input required :disabled="editFlag!=='Y'" label="隐患名称：" v-model="model.hiddenCode"></app-input>
        <app-input required :disabled="editFlag!=='Y'" type="textarea" :rows="5" label="隐患描述：" v-model="model.hiddenName"></app-input>
        <app-input v-if="model.rectifyRemark" type="textarea" :rows="3" :disabled="editFlag!=='Y'" label="整改结果描述" v-model="model.rectifyRemark"></app-input>
      </van-form>
      <van-divider>隐患附件</van-divider>
      <app-img-choose :watermark="watermark" ref="danger" :disabled="editFlag!== 'Y'" :objUuid="model.uuid" type="12"></app-img-choose>
      <van-divider v-if="editFlag!=='Y'">整改附件</van-divider>
      <app-img-choose :watermark="watermark" v-if="editFlag!=='Y'" disabled :objUuid="zjUuid" type="12"></app-img-choose>
    </div>
    <van-button :disabled="editFlag!=='Y'" @click="save" class="btn-large" type="info">保存</van-button>
  </div>
</template>

<script>
export default {
  name: 'addHiddenDanger',
  data() {
    return {
      taskUuid: '',
      riskUuid: '',
      uuid: '',
      editFlag: '',
      zjUuid: '', //整改附件的uuid
      model: {},
      noDanger: false,
      watermark: {
        title: this.$store.getters["userView"].operatorName + '（' + this.$store.state.user.bd.label + '）',
      },
    }
  },
  created() {
    this.taskUuid=this.$route.query.taskUuid
    this.riskUuid=this.$route.query.riskUuid
    this.uuid=this.$route.query.uuid
    this.editFlag=this.$route.query.editFlag
    this.init()
  },
  methods: {
    save() {
      let flag = this.$refs.danger.fileList.some(item => {
        return item.uploaded
      })
      if (!flag) {
        this.$toast('请上传隐患照片~')
        return
      }
      
      this.$refs.dangerForm.validate().then(() => {
        let params={
          dataWrap: JSON.stringify({
            data: this.model
          })
        }
        this.appCommon.tloading('保存中...')
        this.appCommon.postReq('/porta/saveyh',params,process.env.VUE_APP_SAFE).then(() => {
          this.$toast('保存成功~')
          this.$root.appBack()
        })
      })

    },
    chooseHDanger() {
      if(this.editFlag!=='Y') return
      let that=this;
      this.$router.push({
        name: 'chooseHDanger',
        params: {
          patrolUuid: this.taskUuid,
          callback: function(data) {
            that.model.hiddenCode=data.safeCode
            that.model.hiddenName=data.levelNameFive
          }
        }
      })
    },
    init() {
      let params={
        patrolUuid: this.riskUuid,
        uuid: this.uuid
      }
      this.appCommon.postReq('/porta/addyh',params,process.env.VUE_APP_SAFE).then(rdata => {
        this.model=rdata.dataWraps.dataWrap.data;
        this.zjUuid=rdata.parameters.fjUuid
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>