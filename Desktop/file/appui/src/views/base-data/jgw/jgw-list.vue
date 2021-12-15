<template>
  <div class="app-full">
    <van-nav-bar title="结构物列表" :border="false" @click-left="$root.appBack()" left-arrow></van-nav-bar>
    <div class="app-main" v-rscroll>
      <app-list ref="doingList">
        <template v-slot:default="{data}">
          <div @click="showBusi(data)" class="app-list">
            <p class="app-list-item"><span>节点名称：</span><span>{{data.nodeName}}</span></p>
            <p class="app-list-item"><span>节点编号：</span><span>{{data.nodeCode}}</span></p>
            <p class="app-list-item"><span>部位名称：</span><span>{{data.id}}</span></p>
            <p class="app-list-item"><span>部位编号：</span><span>{{data.deptCode}}</span></p>
          </div>
        </template>
      </app-list>
    </div>
  </div>
</template>

<script>
export default {
  name: 'jgw-list',
  data() {
    return {
      unitId: '',
    }
  },
  created() {
    this.unitId = this.$route.query.unitId;
  },
  methods: {
    dataList(pageInfo) {
      let params = {
        id: this.unitId,
        dataWrap: JSON.stringify({
          pageInfo: pageInfo,
        }),
      }
      return this.appCommon.postReq('/printEWM/list', params)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>