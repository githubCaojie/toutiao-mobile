<template>
  <div class="row">
    <el-row :gutter="20">
      <el-col :span="12">
        <table-list/>
      </el-col>
      <el-col :span="12">
        <table-list/>
      </el-col>
      <el-col :span="12">
        <table-list/>
      </el-col>
      <el-col :span="12">
        <img-list/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import tableList from '@/components/list/tableList.vue'
  import imgList from '@/components/list/imgList.vue'

  export default {
    name: 'managementHome',
    components: {
      tableList,
      imgList
    },
  }
</script>

<style lang="less" scoped>
.row{
  height: 100%;
  .el-row {
    height: 100%;
    .el-col:nth-child(3), .el-col:nth-child(4) {
      margin-bottom: 0;
    }
    .el-col {
      height: calc(100% / 2 - 10px);
      margin-bottom: 19.5px;
    }
  }
}
</style>