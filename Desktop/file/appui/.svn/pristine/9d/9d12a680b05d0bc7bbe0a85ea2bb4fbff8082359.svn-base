<template>
  <div class="app-full">
    <van-nav-bar title="结构物明细" :border="false" @click-left="$root.appBack()" left-arrow></van-nav-bar>
    <div class="app-main">
      <app-input label="节点名称：" v-model="model.nodeName" readonly></app-input>
      <app-input label-width="120" label="施工现场负责人：" v-model="model.sgLeader" readonly></app-input>
      <app-input label-width="120" label="监理现场负责人：" v-model="model.jlLeader" readonly></app-input>
      <app-input label="设计比强度：" v-model="model.sjzqd" readonly></app-input>
      <app-input label="设计单位：" v-model="model.designUnit" readonly></app-input>
      <app-input label="开工时间：" v-model="model.kgDate" readonly></app-input>
      <app-input label="完工时间：" v-model="model.wgDate" readonly></app-input>
    </div>
  </div>
</template>

<script>
export default {
  name: 'jgw-detail',
  data() {
    return {
      model: {}
    }
  },
  created() {
    this.id = this.$route.query.id;
    this.form()
  },
  methods: {
    form() {
      let params = {
        id: this.id,
        bdId: this.$store.state.user.bdId,
      }
      this.appCommon.postReq('/printEWM/get', params).then(rdata => {
        console.log(rdata)
        this.model = rdata.dataWraps.dataWrap.data;
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>