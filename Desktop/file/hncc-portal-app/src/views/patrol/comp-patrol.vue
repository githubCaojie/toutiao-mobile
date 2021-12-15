<template>
  <van-form :disabled="disabled">
    <app-input label="检查编号" v-model="model.aqTask.checkNo"></app-input>
    <app-input label="风险源名称" v-model="model.riskNameStr"></app-input>
    <app-drop label="检查单位" dropName="ORG.ORG_PARTY_NAME" v-model="model.aqTask.checkCompany"></app-drop>
    <app-drop label="检查级别" dropName="PATROL.LEVEL" v-model="model.aqTask.patrolLevel"></app-drop>
    <app-drop label="检查人" dropName="ORG.PERSON_NAME" v-model="model.aqTask.checkPerson"></app-drop>
    <app-drop label="受检单位" dropName="ORG.ORG_PARTY_NAME" v-model="model.acceptCompany"></app-drop>
    <app-input label="检查日期" v-model="model.checkDate"></app-input>
    <app-input label="整改期限" v-model="model.modifyDate"></app-input>
    <app-input label="整改剩余天数" v-model="model.modifyDays"></app-input>
    <app-input label="整改日期" v-model="model.completionDate"></app-input>
    <app-drop label="整改责任人" dropName="ORG.PERSON_NAME" v-model="model.modifyPerson"></app-drop>
    <app-input label="隐患数目" v-model="model.isHidden"></app-input>
    <app-drop label="天气" dropName="SECURITY.WEATHER" v-model="model.aqTask.weather"></app-drop>
    <app-input label="整改状态" v-model="model.modifyPer"></app-input>
    <!-- <app-drop label="整改状态" dropName="SECURITY.MODIFY_STATUS" v-model="model.modifyStatus"></app-drop> -->
  </van-form>
</template>

<script>
  export default {
    name: 'comp-patrol',
    props: {
      model: {
        type: Object,
        default() {
          return {}
        }
      },
      disabled: Boolean
    },
    data() {
      return {
        
      }
    },
    methods: {
      
    }
  }
</script>

<style lang="scss" scoped>
  
</style>