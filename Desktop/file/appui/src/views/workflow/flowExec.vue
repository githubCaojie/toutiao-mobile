<template>
  <div class="app-flow">
    <app-list ref="sdList" :immediate="false">
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
import { worderInitData } from "@/api/app-base";
import flowUtil from './flowUtil'
export default {
  name: 'flowExec',
  props: {
    params: {
      type: Object
    }
  },
  data() {
    return {
      
    }
  },
  mounted(){
    
  },
  methods: {
    showBusi(item) {
      this.$emit('flowExecClick', item)
      // if (item.stdTacheNo === '5') {  //已归档
      //   return;
      // }
      // let paramObj = flowUtil.parseParams(item.tacheUrl);
      // paramObj['stdTacheNo'] = item.stdTacheNo;
      // paramObj['activityName'] = item.activityName;
      // this.$emit('showBusi', paramObj);
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
        jbean: JSON.stringify({
          appInstanceId: this.params.appInstanceId,
          openMode: this.params.openMode
        }),
      }
      return worderInitData(params)
    }
  }
}
</script>

<style lang="scss" scoped>
  
</style>