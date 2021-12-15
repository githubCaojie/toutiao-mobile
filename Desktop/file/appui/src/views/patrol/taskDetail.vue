<template>
  <div class="app-full">
    <van-nav-bar @click-left="$root.appBack()" title="任务" :border="false" left-arrow></van-nav-bar>
    <div class="app-main-btn">
      <component ref="taskForm" :disabled="editFlag!=='Y'" @form="getForm" :id="id" :is="taskForm" :isDtxj="isDtxj"></component>
    </div>
    <div class="bottom">
      <van-button :disabled="editFlag!=='Y'" @click="$refs.taskForm.save()" size="small" type="info">保存</van-button>
      <van-button @click="$root.goPath('/riskSource',{taskUuid: id, editFlag})" size="small" type="warning">巡检记录</van-button>
      <van-button :disabled="editFlag!=='Y'" @click="up" size="small" type="primary">下达</van-button>
      <!-- <van-button @click="$refs.taskForm.save()" size="small" type="primary">巡检统计</van-button> -->
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
        id: '',
        editFlag: '',
        isDtxj: '', //是否代替巡检
        model: {}
      }
    },
    created() {
      this.id = this.$route.query.id
      this.editFlag = this.$route.query.editFlag
      this.isDtxj = this.$route.query.isDtxj
    },
    methods: {
      up() {
        this.appCommon.tloading('检查...')
        this.appCommon.postReq('/safetypatrol/patroltask/upCheck',{taskUuid: this.model.uuid}, process.env.VUE_APP_SAFE).then((rdata) => {
          console.log(rdata)
          let flag = rdata.parameters.isLc
          if (flag === 'Y') {
            this.$root.goPath('/flowMain', {appInstanceId: rdata.parameters.instanceId,openMode: '4',title: '安全巡检上报'})
          } else {
            this.up1();
          }
        })
      },
      up1(){
        if (parseInt(this.model.checkNum.split('/')[1]) <= 0) {
          this.$toast('请添加隐患~')
          return
        }
        this.appCommon.confirm('提示', '确定要下达吗？', () => {
          let params = {
            dataWrap: JSON.stringify({}),
            uuid: this.model.uuid
          }
          this.appCommon.tloading('下达中...')
          this.appCommon.postReq('/porta/up',params, process.env.VUE_APP_SAFE).then(() => {
            this.$toast('下达成功~')
            this.editFlag = 'N'
            this.$root.appBack()
          })
        })
      },
      getForm(data) {
        this.model = data;
        this.id = this.model.uuid
      }
    }
  }
</script>

<style lang="scss" scoped>
.bottom {
  text-align: center;
  button {
    margin: 0 5px;
    min-width: 25%;
    height: 35px;
  }
}
</style>