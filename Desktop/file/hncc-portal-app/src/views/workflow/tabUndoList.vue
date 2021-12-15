<template>
  <div class="app-flow" v-rscroll>
    <app-list ref="undoList">
      <template v-slot:default="item">
        <div class="app-list" @click="dealOrder(item.data)" >
          <p class="app-list-item">当前环节：{{item.data.activityName}}</p>
          <p class="app-list-item">传来时间：{{item.data.taskReachTime}}</p>
          <p class="app-list-item">工单内容：{{item.data.content}}</p>
          <p class="app-list-item">标段：<app-drop-show :dropName="'ORG.ORG_PARTY_NAME'" :value="item.data.busiCode"></app-drop-show></p>
        </div>
      </template>
    </app-list>
  </div>
</template>

<script>
import { undoTask } from '@/api/app-base'
export default {
  name: 'undoList',
  props: {
    paramStr: {
      type: String,
      default: '',
    }
  },
  watch: {
    paramStr: function(nval) {
      this.queryParams = JSON.parse(nval);
      this.query();
    },
    '$route': function(to) {
      if (to.name === 'flowIndex') {
        this.query();
      }
    }
  },
  data() {
    return {
      queryParams: {},
    }
  },
  methods: {
    dealOrder(item){
      this.$root.goPath('/flowMain', {appInstanceId: item.instanceId,openMode: '4',title: item.activityName})
    },
    query(){
      this.showQuery = false;
      this.$nextTick().then(() => {
        if (this.$refs.undoList){
          this.$refs.undoList.onRefresh();
        }
      })
    },
    dataList(pageInfo){
      this.appCommon.tloading('加载中...')
      let params = {
        dataWrap: JSON.stringify({
          pageInfo: pageInfo,
        }),
        ...this.queryParams
      };
      return undoTask(params);
    },
  }
}
</script>

<style lang="scss" scoped>

</style>