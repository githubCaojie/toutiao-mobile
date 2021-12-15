<template>
  <div class="app-full" style="overflow-y:auto;">
    <app-flowbtns @formEditFlag="editFlag=$event" @refreshPage="refreshPage" @save="save" :params="wfParams"></app-flowbtns>
    <xcby-from ref="xcbyForm" v-bind="$attrs" :disabled="formEditFlag?formEditFlag!=='Y': editFlag !='Y'"></xcby-from>
  </div>
</template>

<script>
import xcbyForm from './comp-xcby-form'
import { postAction } from '@/api/app-base'
export default {
  name: "noZlUnitGcby",
  components: {
    'xcby-from': xcbyForm,
  },
  props: {
    formEditFlag: String,
  },
  data() {
    return {
      editFlag: '',
      wfParams: {},
    };
  },
  mounted(){
    // if (this.$attrs.params) {
    //   this.wfParams = this.$attrs.params;
    // }
    this.initData(this.$attrs.id)
  },
  activated() {
    this.initData(this.$attrs.id)
  },
  methods: {
    refreshPage(){
      this.initData(this.$attrs.id);
    },
    initData(id){
      let params = {
        appBusiUuid: id,
        bdId: this.$store.state.user.bdId,
        dc: JSON.stringify({}),
        ...this.$attrs.params
      }
      postAction('/zlTableGcby/initZlUnitGcbyData', params).then(rdata => {
        this.wfParams = {...this.$attrs.params, ...rdata.parameters};
        this.model = rdata.dataWraps.dataWrap.data;
      })
    },
    save(){
      this.$refs.xcbyForm.onSubmit();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>