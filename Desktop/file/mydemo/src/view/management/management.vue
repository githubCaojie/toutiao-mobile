<template>
  <div class="management">
    <child-header/>
    <div class="content">
      <child-menu/>
      <div class="main">
        <el-tabs v-model="editableTabsValue" type="card" @tab-remove="removeTab">
          <el-tab-pane
            v-for="item in editableTabs"
            :key="item.name"
            :label="item.title"
            :name="item.name"
            :closable="item.closable"
          >
            <keep-alive>
              <router-view/>
            </keep-alive>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import childHeader from '@/components/childHeader/childHeader.vue';
import childMenu from '@/components/childMenu/childMenu.vue';


export default {
  name: 'management',
  components: {
    childHeader,
    childMenu,
  },
  data () {
    return {
      editableTabsValue: '2',
      editableTabs: [
        {
          title: '首页',
          name: '0',
          closable: false,
        },
        {
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content', // 内容，可用slot
          closable: true, // 是否可关闭
        }, 
        {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content',
          closable: true,
        }
      ],
      tabIndex: 2
    }
  },
  methods: {
    removeTab(targetName) {
      let tabs = this.editableTabs;
      let activeName = this.editableTabsValue;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }
      
      this.editableTabsValue = activeName;
      this.editableTabs = tabs.filter(tab => tab.name !== targetName);
    }
  }
}
</script>

<style lang="less" scoped>
.management {
  .content {
    display: flex;
    .main {
      width: 100%;
      .el-tabs {
        width: 100%;
        height: 100%;
        background: #ECF3F9;
      }
      /deep/ .el-tabs__nav-wrap {
        margin: 0;
      }
      /deep/ .el-tabs__content {
        height: calc(100% - 32px);
        padding: 20px;
        .el-tab-pane {
          height: 100%;
        }
      }
      /deep/ .el-tabs__nav-scroll {
        background: #EFF0F6;
      }
      /deep/ .el-tabs__header {
        border-bottom: 2px solid #2B71BF;
        margin: 0;
      }
      /deep/ .el-tabs__header .el-tabs__item{
        height: 30px;
        line-height: 30px;
        background: #E8E8E8;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
      }
      /deep/ .el-tabs__item.is-active {
        background: #2B71BF !important;
        color: #fff !important;
      }
      /deep/ .el-tabs__header .el-tabs__item.is-active {
        border: unset;
      }
      /deep/ .el-tabs__header .el-tabs__nav {
        border: unset;
      }
    }
  }
}
</style>