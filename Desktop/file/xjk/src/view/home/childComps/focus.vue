<template>
  <div class="focus"> 
    <module-header>
      <el-image slot="icon" :src="require('../../../assets/img/home/todo_icon.png')"/>
      <span slot="name">待办事项审批</span>
    </module-header>
    <el-row>
      <el-col class="link-item" v-for="item in focusData" :key="item.id">
        <el-link :underline="false">
          <span>{{item.name}}</span>
          <span>{{item.time}}</span>
        </el-link>
      </el-col>
    </el-row>
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
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="less" scoped>
.focus {
  height: 100%;
  margin-top: 23px;
  .el-row {
    height: calc(100% - 23px - 48px);
    overflow: scroll;
    .el-col {
      height: 48px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #CAD7E0;
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
}
</style>