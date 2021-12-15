<template>
  <div class="app-flow">
    <app-list ref="undoList">
      <template v-slot:default="item">
        <div class="app-list" @click="showHistory(item.data)">
          <p class="app-list-item">{{item.data.appTypeName}}（{{item.data.appNo}}）</p>
          <p class="app-list-item">申请人：<app-drop-show :dropName="'UEP.ACCOUNT_NAME'" :value="item.data.loginId"></app-drop-show></p>
          <p class="app-list-item">工单内容：{{item.data.content}}</p>
          <p class="app-list-item">管理单位：<app-drop-show :dropName="'ORG.ORG_PARTY_NAME'" :value="item.data.busiCode"></app-drop-show></p>
        </div>
      </template>
    </app-list>
  </div>
</template>

<script>
import { hisTask } from '@/api/app-base'
import flowUtil from '@/views/workflow/flowUtil'
export default {
  name: 'orderHistory',
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
    }
  },
  data() {
    return {
      queryParams: {},
    }
  },
  methods: {
    showHistory(item) {
      this.$root.goPath('/flowMain', {appInstanceId: item.instanceId,openMode: '4',})
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
        dataWrapHis: JSON.stringify({
          pageInfo: pageInfo,
        }),
        ...this.queryParams
      };
      return hisTask(params);
    },
  }
}
</script>

<style lang="scss" scoped>

</style>