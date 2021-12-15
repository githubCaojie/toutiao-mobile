<template>
  <div class="todo">
    <module-header>
      <el-image slot="icon" :src="require('../../../assets/img/home/todo_icon.png')"/>
      <span slot="name">待办事项审批</span>
    </module-header>
    <el-row :gutter="10" v-for="item in classNavData" :key="item.id">
      <el-col
        :span="25"
        class="todo-col"
        v-for="childItem in item.childNavData"
        :key="childItem.id"
      >
        <el-badge :value="childItem.countNum" class="item">
          <el-button @click="updateFocusHandlel(childItem.id)">
            <p><el-image :src="childItem.pic"/></p>
            {{childItem.remark}}待办
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
  },
  props: {
    classNavData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    updateFocusHandlel(id) {
      this.$emit('updateFocusHandlel', id)
    }
  }
}
</script>

<style lang="less" scoped>
@max768: ~"(max-width: 768px)";
.todo {
  margin-top: 23px;
  height: calc(100% - 23px);
  .todo-col {
    margin-top: 15px;
    @media @max768 {
      width: auto;
    }
    .item {
      /deep/ .el-button {
        height: 48px;
        border-radius: 8px;
        border: 1px solid #CAD7E0;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        @media @max768 {
          padding: 0 5px;
        }
        span {
          display: flex;
          align-items: center;
          justify-content: center;
          p {
            flex: 0 0 35px;
          }
        }
      }
      /deep/ .el-badge__content {
        right: 15px;
        background-color: #EF7230
      }
    }
  }
}
</style>