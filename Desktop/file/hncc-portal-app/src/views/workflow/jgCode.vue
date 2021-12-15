<template>
  <div class="appfull">
    <app-input label="节点编号" type="text" readonly v-model="model.nodeCode"></app-input>
    <app-input label="节点名称" type="text" readonly v-model="model.nodeName"></app-input>
    <app-input label="部位名称" type="textarea" readonly v-model="model.bwName" autosize center></app-input>
    <app-input label="部位编号" type="text" readonly v-model="model.deptCode"></app-input>
  </div>
</template>

<script>
import { postAction } from '@/api/app-base'
export default {
  name: 'jgCode',
  data() {
    return {
      model: {}
    }
  },
  mounted(){
    this.query();
  },
  methods: {
    query(){
      let params = {
        zlUnitId: '118741812239274012',
      }
      postAction('/scanEwm/getJgw', params).then(rdata => {
        console.log(rdata)
        this.model = rdata.dataWraps.dataWrap.data
      })
    },
  }
}
</script>

<style lang="scss" scoped>
  
</style>