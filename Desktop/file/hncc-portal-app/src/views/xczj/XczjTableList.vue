<template>
  <div class="app-full">
    <van-nav-bar title="质检表格" :border="false" @click-left="$root.appBack()" left-arrow></van-nav-bar>
    <div class="app-main" v-rscroll>
      <div @click="showTable(item)" class="app-list" v-for="item in tableArr" :key="item.id">
        <p class="app-list-item"><span>代码：</span><span>{{item.tableCode}}</span></p>
        <p class="app-list-item"><span>表格：</span><span>{{item.tableName}}</span></p>
        <p class="app-list-item"><span>工程名称	：</span><span>{{item.unitName}}</span></p>
        <p class="app-list-item"><span>状态	：</span><span>{{item.statusStr}}</span></p>
        <p class="app-list-item"><span>创建时间	：</span><span>{{item.updateTime}}</span></p>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'XczjTableList',
  data() {
    return {
      treeFlag: false,
      userview: this.$store.getters["userView"],
      unitId: '',
      tableArr: [],
    }
  },
  created() {
    let query = this.$route.query;
    this.unitId = query.unitId;
    this.tableData();
  },
  methods: {
    showTable(data) {
      let query = {
        excelId: data.excelId,
        excelType: data.excelType,
        appBusiUuid: data.id,
        unitId: this.unitId,
        bdId: this.$store.state.user.bdId
      }
      this.$router.push({
        path: '/xczjTable',
        query
      })
    },
    tableData() {
      let params = { unitId: this.unitId, bdId: this.$store.state.user.bdId }
      this.appCommon.postReq('/zlTable/tableList', params).then(rdata => {
        this.tableArr = rdata.dataWraps.dataWrap.dataList;
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>