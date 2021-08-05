<template>
  <div class="todo">
    <module-header>
      <el-image slot="icon" :src="require('../../../assets/img/home/todo_icon.png')"/>
      <span slot="name">待办事项审批</span>
    </module-header>
    <el-row :gutter="10">
      <el-col :span="6" class="todo-col">
        <el-badge :value="3" class="item">
          <el-button>
            <p><el-image :src="require('../../../assets/img/home/renliziyuandaiban_icon.png')"/></p>
            人力资源待办
          </el-button>
        </el-badge>
      </el-col>
      <el-col :span="6" class="todo-col">
        <el-badge :value="12" class="item">
          <el-button>
            <p><el-image :src="require('../../../assets/img/home/xiangmuguanlidaiban_icon.png')"/></p>
            项目管理待办
          </el-button>
        </el-badge>
      </el-col>
      <el-col :span="6" class="todo-col">
        <el-badge :value="2" class="item">
          <el-button>
            <p><el-image :src="require('../../../assets/img/home/jingyingguanlidaiban_icon.png')"/></p>
            经营管理待办
          </el-button>
        </el-badge>
      </el-col>
      <el-col :span="6" class="todo-col">
        <el-badge :value="12" class="item">
          <el-button>
            <p><el-image :src="require('../../../assets/img/home/zhihuidangjiandaiban_icon.png')"/></p>
            智慧党建待办
          </el-button>
        </el-badge>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import moduleHeader from '../../../components/moduleHeader/moduleHeader.vue'

export default {
  components: {
    moduleHeader
  }
}
</script>

<style lang="less" scoped>
.todo {
  margin-top: 23px;
  height: calc(100% - 23px);
  .todo-col {
    margin-top: 15px;
    .item {
      width: 100%;
      /deep/ .el-button {
        width: 100%;
        height: 48px;
        border-radius: 8px;
        border: 1px solid #CAD7E0;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: var(--the-body-font-size);
        span {
          display: flex;
          align-items: center;
          p {
            flex: 0 0 25px;
            margin-right: 12px;
          }
        }
      }
      /deep/ .el-badge__content {
        // top: 15px;
        right: 15px;
        background-color: #EF7230
      }
    }
  }
}
</style>