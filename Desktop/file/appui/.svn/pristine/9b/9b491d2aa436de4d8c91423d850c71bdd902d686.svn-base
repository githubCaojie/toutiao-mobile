<template>
  <div class="app-all">
    <div v-for="group in groupList" :key="group.id">
      <van-divider>{{group.groupName}}</van-divider>
      <div v-for="data in group.tacheforms" :key="data.id">
        <app-input
          v-if="(data.jtExtField.inputForm==''||data.jtExtField.inputForm=='FIELD')&&data.jtExtField.fieldType=='string'&&data.rightFlag!='3'"
          :type="data.jtExtField.useRows!=null&&data.jtExtField.useRows>1?'textarea':'text'"
           v-model="dataMap[data.jtExtField.id]" 
          :required="data.jtExtField.isMust=='Y'"
          :disabled="data.rightFlag=='2'?true:false || editFlag!=='Y'"
          :label="data.jtExtField.unit?(data.jtExtField.fieldName+'('+data.jtExtField.unit+')'): data.jtExtField.fieldName" ></app-input>
        <app-input
          v-if="(data.jtExtField.inputForm==''||data.jtExtField.inputForm=='FIELD')&&(data.jtExtField.fieldType=='bigdecimal' || data.jtExtField.fieldType=='long' || data.jtExtField.fieldType=='int')&&data.rightFlag!='3'"
          :type="'number'"
           v-model="dataMap[data.jtExtField.id]" 
          :required="data.jtExtField.isMust=='Y'"
          :disabled="data.rightFlag=='2'?true:false || editFlag!=='Y'"
          :label="data.jtExtField.unit?(data.jtExtField.fieldName+'('+data.jtExtField.unit+')'): data.jtExtField.fieldName" ></app-input>
        <app-date 
          v-if="data.jtExtField.inputForm==='DATE'"
          v-model="dataMap[data.jtExtField.id]" 
          :required="data.jtExtField.isMust==='Y'"
          :type="data.jtExtField.inputForm=='DATE'?'date':'datetime'" 
          :disabled="data.rightFlag=='2'?true:false || editFlag!=='Y'"
          :label="data.jtExtField.fieldName"></app-date>
        <app-drop 
          v-if="data.jtExtField.inputForm==='DROP'"
          v-model="dataMap[data.jtExtField.id]" 
          :required="data.jtExtField.isMust==='Y'"
          :dpData="resetDpData(data.jtExtField.extCode2)" 
          :disabled="data.rightFlag=='2'?true:false || editFlag!=='Y'"
          :label="data.jtExtField.fieldName"></app-drop>
        <app-tree
          v-if="data.jtExtField.inputForm=='TREE'&&data.rightFlag!='3'"
          v-model="dataMap[data.jtExtField.id]" 
          :label="data.jtExtField.fieldName"
          :rootCode="''" 
          :disabled="data.rightFlag=='2'?true:false || editFlag!=='Y'"
          :retriever="data.jtExtField.extCode1"></app-tree>
      </div>
      <app-file-choose v-for="data in fileList" :key="data.jtExtField.id"
          :disabled="data.rightFlag=='2'?true:false || editFlag!=='Y'"
          :objUuid="dataMap[data.fieldId]" :immeUpload="true"></app-file-choose>
      <div style="margin-top: 10px">
        <app-flowbtns v-on:refreshPage="getData()" :params="paramsStr" :editFlag="'Y'" saveBtn="Y"></app-flowbtns>
      </div>
    </div>
  </div>
</template>

<script>
import appFlowbtns from '@/app-comps/app-flowbtns/appFlowbtns'
import { getAction, postAction } from '@/api/app-base'
export default {
  name: 'extFields',
  components: {
    appFlowbtns,
  },
  props: {
    params: {
      type: String,
    }
  },
  data() {
    return {
      paramsStr: '',
      paramObj: {},
      model: {},
      groupList: [],
      fileList: [],
      dataMap: {},
      editFlag: 'N',
    }
  },
  created(){
    this.paramsStr = this.params;
    this.paramObj = JSON.parse(this.paramsStr);
    this.editFlag = this.paramObj.editFlag? this.paramObj.editFlag: 'Y';
    this.getData();
  },
  methods: {
    save(){
      let params = {
        appTemplateNo: this.paramObj.appTemplateNo,
        dataWrap: JSON.stringify({
          data: this.model,
        })
      }
      this.appCommon.tloading('保存中...')
      postAction('/jt/app/jtAppExtDataMain/save', params).then(rdata => {
        this.paramObj.appInstanceId = rdata.parameters.appInstanceId;
        this.paramObj.appBusiUuid = rdata.parameters.appBusiUuid;
        this.paramsStr = JSON.stringify(this.paramObj)
        this.$toast('保存成功~');
      })
    },
    getData(){
      let params = {
        bean: JSON.stringify(this.paramObj),
        appBusiUuid: this.paramObj.appBusiUuid,
        appInstanceId: this.paramObj.appInstanceId,
        appTaskId: this.paramObj.appTaskId,
      }
      getAction('/jt/app/jtAppExtDataMain/initBusiData2', this.paramObj).then(rdata => {
        this.model = rdata.dataWraps.dataWrap.data;
        this.dataMap = this.model.dataMap;
        this.groupList = rdata.parameters.groupList;
        this.fileList = rdata.parameters.fileList;
      })
    },
    resetDpData(data){
      let obj = JSON.parse(data);
      let temp = [];
      for(let key in obj) {
        temp.push({label: obj[key], value: key})
      }
      return temp;
    }
  }
}
</script>

<style lang="scss" scoped>
  
</style>