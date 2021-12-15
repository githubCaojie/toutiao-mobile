<template>
  <div class="app-full" style="overflow-y:auto;">
    <!-- <app-flowbtns @formEditFlag="editFlag=$event" @refreshPage="refreshPage" @save="save" :params="wfParams"></app-flowbtns> -->
    <clfy-form ref="clfyForm" @sendSucc="$root.appBack()" v-bind="$attrs" :disabled="formEditFlag?formEditFlag!=='Y': editFlag !='Y'"></clfy-form>
  </div>
</template>

<script>
import clfyForm from './comp-clfy-form'
import { postAction } from '@/api/app-base'
export default {
  name: "zlTableFy",
  components: {
    'clfy-form': clfyForm,
  },
   props: {
    formEditFlag: String,
  },
  data() {
    return {
      editFlag: 'N',
      wfParams: {},
    };
  },
  activated() {
    this.initData();
  },
  mounted(){
    this.initData();
    this.getEditFlag();
  },
  methods: {
    getEditFlag(){
      let params = {
        dc: JSON.stringify({}),
        ...this.$attrs.params
      }
      let appTaskId = this.wfParams.appTaskId;
      postAction('/jt/app/appTaskApprove/initData', params).then(rdata => {
        this.editFlag = rdata.editFlag;
      })
    },
    initData(){
        let params = {
          dataWrap: JSON.stringify({}),
          bdId: this.$store.state.user.bdId,
          // unitId: this.unitId,
          ...this.$attrs.params
      }
      postAction('/zlTableFy/initZlTableFy', params).then(rdata => {
        this.wfParams = {...rdata.parameters};
        // this.model = rdata.dataWraps.dataWrap.data;
      })
    },
    refreshPage(){

    },
     save(){
      this.$refs.clfyForm.save();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>