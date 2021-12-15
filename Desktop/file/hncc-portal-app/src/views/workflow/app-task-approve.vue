<template>
  <div class="app-flow">
    <component v-if="curComp" :is="curComp" :params="wfParams" formEditFlag="N"></component>
  </div>
</template>

<script>
import { postAction } from '@/api/app-base'
import flowUtil from './flowUtil'
export default {
  name: 'app-task-approve',
  data() {
    return {
      wfParams: undefined,
      curComp: undefined,
    }
  },
  mounted(){
    this.wfParams = this.$attrs.params;
    this.initData();
  },
  methods: {
    initData(){
      postAction(this.$attrs.params.initMethod, this.$attrs.params).then(rdata => {
        this.wfParams = {...this.wfParams, ...rdata.parameters};
        let detailHref = rdata.parameters.detailHref;
        let key = detailHref.split('?')[0];
        let that = this;
        flowUtil.getBusiComp.call(this, key, function(comp, extParams) {
          this.wfParams = {...this.wfParams, ...extParams, ...{formEditFlag: 'N'}};
          that.curComp = comp.default;
        })
      })
    },
  }
}
</script>

<style lang="scss" scoped>
  
</style>