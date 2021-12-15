<template>
  <div class="col">
    <h4 class="title">
      <i class="el-icon-s-order"></i>
      我的待办
    </h4>
    <el-table
      :data="tableData"
      border
      height="calc(100% - 80px)"
    >
      <el-table-column
        type="index"
        width="50"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="main"
        label="内容"
      show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="opera"
        label="操作"
        width="80px"
        align="center"
      >
        <template>
          <el-button
            size="mini">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      current-page.sync="1"
      :hide-on-single-page="hidePagination"
      :pager-count="pagerCount"
      :page-size="100"
      small
      layout="prev, pager, next, jumper"
      :total="10000">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [
          {
            num: '1',
            main: '系统管理员于2021年7月23日申请的变更令审批工单',
            opera: '操作'
          },
          {
            num: '1',
            main: '系统管理员于2021年7月23日申请的变更令审批工单',
            opera: '操作'
          },
          {
            num: '1',
            main: '系统管理员于2021年7月23日申请的变更令审批工单',
            opera: '操作'
          },
          {
            num: '1',
            main: '系统管理员于2021年7月23日申请的变更令审批工单',
            opera: '操作'
          },
          {
            num: '1',
            main: '系统管理员于2021年7月23日申请的变更令审批工单',
            opera: '操作'
          },
          {
            num: '1',
            main: '系统管理员于2021年7月23日申请的变更令审批工单',
            opera: '操作'
          },
          {
            num: '1',
            main: '系统管理员于2021年7月23日申请的变更令审批工单',
            opera: '操作'
          }
        ],
        pagerCount: 5,
        hidePagination: false
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
  }
</script>

<style lang="less" scoped>
  .col {
    height: 100%;
    background: #fff;
    padding: 0 10px;
    position: relative;
    .title {
      height: 40px;
      line-height: 40px;
      color: #000;
      font-size: 15px;
    }
    /deep/ .el-table .cell {
      // overflow: hidden;
      // text-overflow: ellipsis;
      // white-space: nowrap;
    }
    /deep/ .el-table td, .el-table th {
      padding: 8px 0;
    }
    .el-pagination {
      text-align: center;
      position: absolute;
      bottom: 10px;
      width: calc(100% - 20px);
      padding: 0;
    }
  }
</style>