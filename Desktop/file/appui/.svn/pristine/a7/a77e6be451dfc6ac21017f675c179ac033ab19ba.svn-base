<template>
  <div class="app-full">
    <van-nav-bar title="工程质量评定" :border="false" @click-left="$root.appBack()" left-arrow></van-nav-bar>
    <div class="app-main">
      <app-input label="项次：" v-model="model.xc" readonly></app-input>
      <app-input label-width="120" label="项目名称：" v-model="model.xmName" readonly></app-input>
      <app-input label-width="120" label="检测方法和频率：" v-model="model.jcffPl" readonly></app-input>
      <app-input label="权值：" v-model="model.qz" readonly></app-input>
      <app-input label="指标：" v-model="model.zb" readonly></app-input>
      <app-drop label="是否必填：" dropName="UEP.YES_OR_NO" v-model="model.isMust" disabled></app-drop>
      <app-input label="单位：" v-model="model.unit" readonly></app-input>
      <app-input label="公式维护：" v-model="model.equation" readonly></app-input>
      <app-input label-width="120" label="是否关键指标：" v-model="model.isImportant" readonly></app-input>
      <app-input label="编码：" v-model="model.itemCode" readonly></app-input>
      <app-input label-width="150" label="规定值或允许偏差：" v-model="model.gdzPc" readonly></app-input>
      <app-input label-width="100" label="施工实测值实测偏差值来源：" v-model="model.sgActualValueSource" readonly></app-input>

      <app-input label="施工合格数据来源：" v-model="model.sgFormula" readonly></app-input>
      <app-input label-width="100" label="监理实测值实测偏差值来源：" v-model="model.actualValueSource" readonly></app-input>
      <app-input label="监理合格数据来源：" v-model="model.formula" readonly></app-input>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'gczl-detail',
    data() {
      return {
        id: '',
        model: {}
      }
    },
    created() {
      this.id = this.$route.query.id;
      this.form();
    },
    methods: {
      form() {
        this.appCommon.postReq('/zlAssessStandard/get', {id: this.id}).then(rdata => {
          console.log(rdata)
          this.model = rdata.dataWraps.dataWrap.data;
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  
</style>