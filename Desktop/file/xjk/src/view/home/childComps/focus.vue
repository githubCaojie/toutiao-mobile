<template>
  <div class="focus"> 
    <module-header>
      <el-image slot="icon" :src="require('../../../assets/img/home/todo_icon.png')"/>
      <span slot="name">待办事项</span>
    </module-header>
    <el-row>
      <el-empty description="该事项暂无待办" v-if="focusData.list == ''"></el-empty>
      <el-col v-else class="link-item" v-for="item in focusData.list" :key="item.id">
        <el-link :underline="false">
          <span>{{item.content}}</span>
          <span>{{item.appTime.substring(0,10)}}</span>
        </el-link>
      </el-col>
    </el-row>
    <el-pagination
      class="focus-pagination"
      layout="prev, pager, next"
      hide-on-single-page
      @current-change="handleCurrentChange"
      :current-page.sync="focusData.pageInfo.curPageNum"
      :page-size="focusData.pageInfo.rowOfPage"
      :total="focusData.pageInfo.allRowNum">
    </el-pagination>
  </div>
</template>

<script>
import moduleHeader from '../../../components/moduleHeader/moduleHeader.vue'

export default {
  components: {
    moduleHeader
  },
  props: {
    focusData: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    handleCurrentChange(val) {
      this.$emit('handleCurrentChange',val)
    }
  }
}
</script>

<style lang="less" scoped>
.focus {
  height: 100%;
  margin-top: 23px;
  .el-row {
    height: calc(100% - 23px - 48px - 28px);
    overflow-y: scroll;
    padding-right: 10px;
    .el-empty {
      padding: unset;
    }
    .el-col {
      height: 48px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #CAD7E0;
      &:last-child {
        border-bottom: unset;
      }
      .el-link {
        width: 100%;
        /deep/ .el-link--inner {
          width: 100%;
          display: flex;
          justify-content: space-between;
          span {
            &:first-child {
              position: relative;
              text-indent: 14px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              &::before {
                content: "";
                width: 4px;
                height: 4px;
                background: #415261;
                position: absolute;
                top: 50%;
                left: 0;
                margin-top: -2px;
              }
            }
            &:last-child {
              flex: 0 0 100px;
              text-align: right;
            }
          }
        }
      }
    }
  }
  .focus-pagination {
    padding: unset;
    text-align: center;
    /deep/ .btn-next, /deep/ .btn-prev, /deep/ .number {
      background-color: transparent;
    }
  }
}
</style>