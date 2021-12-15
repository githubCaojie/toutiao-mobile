<template>
  <van-form ref="taskForm">
    <app-input readonly label="检查编号" v-model="model.checkNo"></app-input>
    <app-drop disabled label="检查单位" v-model="model.checkCompany" dropName="ORG.ORG_PARTY_NAME"></app-drop>
    <app-drop disabled label="检查级别" v-model="model.patrolLevel" dropName="PATROL.LEVEL"></app-drop>
    <app-drop disabled label="检查人" v-model="model.checkPerson" dropName="ORG.PERSON_NAME"></app-drop>
    <app-drop disabled label="检查状态" v-model="model.checkStatus" dropName="SECURITY.CHECK_STATUS"></app-drop>
    <app-input readonly label="检查个数" v-model="model.checkNum"></app-input>
    <app-input readonly label="创建时间" v-model="model.createDate"></app-input>
    <app-drop required :disabled="disabled" label="天气" v-model="model.weather" dropName="SECURITY.WEATHER"></app-drop>

  </van-form>
</template>

<script>
export default {
  name: 'comp-task-form',
  data() {
    return {
      model: {},
    }
  },
  props: {
    id: String,
    disabled: {
      type: Boolean,
      default: false
    },
    isDtxj: {
      type: String,
      default: ''
    }
  },
  activated() {
    console.log('aaaaaaaaaaaaaaaaaa', this.id)
    this.init()
  },
  mounted() {
    console.log('bbbbbbb', this.id);
    this.init()
  },
  methods: {
    init() {
      console.log(this.id)
      if(this.id) {
        this.fix()
      } else {
        this.add()
      }
    },
    add() {
      this.appCommon.postReq('/porta/add',{isDtxj: this.isDtxj},process.env.VUE_APP_SAFE).then(rdata => {
        this.model=rdata.dataWraps.dataWrap.data;
        console.log(this.model);
      })
    },
    fix() {
      this.appCommon.postReq('/porta/fix',{ uuid: this.id },process.env.VUE_APP_SAFE).then(rdata => {
        this.model=rdata.dataWraps.dataWrap.data;
        this.$emit('form',this.model)
      })
    },
    save() {
      this.$refs.taskForm.validate().then(() => {
        let params={
          dataWrap: JSON.stringify({
            data: this.model
          })
        }
        this.appCommon.tloading('保存中...')
        this.appCommon.postReq('/porta/save',params,process.env.VUE_APP_SAFE).then((rdata) => {
          this.$toast('保存成功~')
          this.model=rdata.dataWraps.dataWrap.data;
          this.$emit('form',this.model)
        })
      })

    }
  }
}
</script>

<style lang="scss" scoped>
</style>