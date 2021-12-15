<template>
  <div>
    <app-flowbtns @formEditFlag="editFlag = $event" @edit="auditEditFlag = $event" @refreshPage="refreshPage" @save="save" :params="wfParams"></app-flowbtns>
    <task-form ref="taskForm" v-if="taskUuid"
      :id="taskUuid" 
      v-bind="$attrs" :disabled="true" >
    </task-form>
    <div class="app-list" v-for="data in dangerList" :key="data.id">
      <div @click="$root.goPath('/addHiddenDanger', {uuid: data.uuid, riskUuid: data.patrolUuid, taskUuid, editFlag: 'N'})">
        <p class="app-list-item"><span>隐患名称：</span><span>{{data.hiddenCode}}</span></p>
        <p class="app-list-item"><span>隐患描述：</span><span>{{data.hiddenName}}</span></p>
      </div>
      <van-button @click="$root.goPath('/rectify', {uuid: data.uuid, riskUuid: data.patrolUuid, taskUuid, editFlag: 'Y'})"
        v-if="auditEditFlag==='Y'" size="small" type="info" class="list-btn">整改</van-button>
    </div>
  </div>
</template>

<script>
import taskForm from './comp-task-form'
export default {
  name: "FlowTask",
  components: {
    'task-form': taskForm
  },
  data() {
    return {
      editFlag: "N",
      wfParams: {},
      auditEditFlag: "",
      taskUuid: '',
      dangerList: [],
    };
  },
  mounted() {
    this.initData(this.$attrs.params.appBusiUuid);
  },
  methods: {
    refreshPage() {
      this.initData(this.$attrs.params.appBusiUuid);
    },
    initData(id) {
      let params = {
        ...this.$attrs.params,
        appBusiUuid: id,
      };
      this.appCommon.postReq(this.$attrs.params.initMethod, params, process.env.VUE_APP_SAFE).then((rdata) => {
        this.taskUuid = rdata.dataWraps.dataWrap.data.aqTask.uuid
        this.dangerList = rdata.dataWraps.dataWrapHidden.dataList
        this.wfParams = { ...this.$attrs.params, ...rdata.parameters };
        // if (this.wfParams.editFlag) {
        //   this.editFlag = this.wfParams.editFlag;
        // }
      })
      // postAction(this.$attrs.params.initMethod, params).then((rdata) => {
      //   this.wfParams = { ...this.$attrs.params, ...rdata.parameters };
      //   if (this.wfParams.editFlag) {
      //     this.editFlag = this.wfParams.editFlag;
      //   }
      // });
    },
    save() {
      this.$refs.taskForm.save().then(() => {
        this.$toast('保存成功~')
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>