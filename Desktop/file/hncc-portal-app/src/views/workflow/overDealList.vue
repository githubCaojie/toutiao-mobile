<template>
  <div class="app-all">
    <app-list ref="sdList">
      <template v-slot:default="item">
        <div @click="showBusi(item.data)" class="app-list">
          <p class="app-list-item">{{item.data.activityName}}</p>
          <p class="app-list-item">办理人：{{item.data.taskCommiter}}</p>
          <p class="app-list-item">办理意见：{{item.data.sendAdvice}}</p>
          <p class="app-list-item">开始办理时间：{{item.data.taskReachTime}}</p>
        </div>
      </template>
    </app-list>
    
  </div>
</template>

<script>
import { worderInitData } from "@/api/busi";
import flowUtil from './flowUtil'
export default {
  name: 'flowExec',
  props: {
    params: {
      type: String
    }
  },
  data() {
    return {
      queryParams: '',
    }
  },
  mounted(){
    if (!this.queryParams) {
      this.queryParams = this.params;
    }
  },
  methods: {
    showBusi(item) {
      if (item.stdTacheNo === '5') {  //已归档
        return;
      }
      let paramObj = flowUtil.parseParams(item.tacheUrl);
      paramObj['stdTacheNo'] = item.stdTacheNo;
      paramObj['activityName'] = item.activityName;
      this.$emit('showBusi', paramObj);
    },
    genParamObj(url){
      let datas = url.split('?')[1];
      let paramArr =  datas.split('&');
      let paramObj = {};
      for(let item of paramArr) {
        paramObj[item.split('=')[0]] = item.split('=')[1];
      }
      return paramObj;
    },
    query(){
      this.$nextTick().then(() => {
        if (this.$refs.sdList){
          this.$refs.sdList.onRefresh();
        }
      })
    },
    dataList(){
      let params = {
        dc: JSON.stringify({}),
        jbean: this.queryParams
      }
      return worderInitData(params)
    }
  }
}
</script>

<style lang="scss" scoped>
  
</style>