<template>
  <div class="app-full">
    <van-nav-bar @click-left="$root.appBack()" title="任务" :border="false" left-arrow></van-nav-bar>
    <div class="app-main-btn">
      <component ref="taskForm" :disabled="editFlag!=='Y'" @form="getForm" :id="taskUuid" :is="taskForm"></component>
    </div>
    <div class="bottom">
      <van-button :disabled="zgFlag!=='Y'" @click="$root.goPath('/rectifyList',{patrolUuid, editFlag})" type="info">整改</van-button>
      <van-button :disabled="zgtjFlag!=='Y'" @click="submit()" type="primary">提交</van-button>
    </div>
  </div>
</template>

<script>
import taskForm from './comp-task-form'
  export default {
    name: 'taskDetail',
    data() {
      return {
        taskForm,
        patrolUuid: '',
        taskUuid: '',
        editFlag: '',
        modifyStatus: '',
        model: {},
        zgFlag: '',
        zgtjFlag: '',
      }
    },
    created() {
      this.patrolUuid = this.$route.query.patrolUuid
      this.taskUuid = this.$route.query.taskUuid
      this.modifyStatus = this.$route.query.modifyStatus
      this.zgFlag = this.$route.query.zgFlag
      this.zgtjFlag = this.$route.query.zgtjFlag
    },
    methods: {
      submit(){
        this.appCommon.confirm('提示', '确定要提交吗？', () => {
          let params = {
            uuid: this.patrolUuid,
            patrolLevel: this.model.patrolLevel
          }
          this.appCommon.tloading('提交中...')
          this.appCommon.postReq('/mobile/retifi/sub',params, process.env.VUE_APP_SAFE).then(() => {
            this.$toast('提交成功~')
            this.$root.appBack()
            this.editFlag = 'N'
          })
        })
      },
      getForm(data) {
        console.log(data);
        this.model = data;
        this.editFlag = data.checkStatus === '1'? 'Y': 'N'
      }
    }
  }
</script>

<style lang="scss" scoped>
.bottom {
  text-align: center;
  button {
    margin: 0 5px;
    width: 45%;
  }
}
</style>