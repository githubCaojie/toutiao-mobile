<template>
  <div class="information">
    <module-header>
      <el-image slot="icon" :src="require('../../../assets/img/home/todo_icon.png')"/>
      <span slot="name">资讯信息</span>
    </module-header>
    <div class="content">
      <el-tabs tab-position="left">
        <el-tab-pane v-for="item in informationData" :key="item.id" :label="item.title">
          <div class="main">
            <el-row>
              <el-col class="information-col" v-for="childItem in item.childData" :key="childItem.id" :span="99">
                <el-link class="information-link" :underline="false">
                  <span>{{childItem.name}}</span>
                  <span>{{childItem.time}}</span>
                </el-link>
              </el-col>
              <el-col class="information-col" v-for="childItem in item.childData" :key="childItem.id" :span="99">
                <el-link class="information-link" :underline="false">
                  <span>{{childItem.name}}</span>
                  <span>{{childItem.time}}</span>
                </el-link>
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import moduleHeader from '../../../components/moduleHeader/moduleHeader.vue'

export default {
  components: {
    moduleHeader
  },
  props: {
    informationData: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="less" scoped>
.information {
  height: 100%;
  margin-top: 23px;
  .content {
    height: calc(100% - 23px - 48px);
    .el-tabs {
      height: 100%;
      /deep/ .el-tabs__header {
        .el-tabs__item {
          height: 48px;
          line-height: 48px;
        }
        .el-tabs__nav-wrap {
          overflow: unset;
          .el-tabs__nav-scroll {
            overflow: unset;
            .el-tabs__active-bar {
              &::before {
                content: "";
                width: 0;
                height: 0;
                border-top: 4px solid transparent;
                border-left: 5px solid #1F8ECD;
                border-bottom: 4px solid transparent;
                position: absolute;
                right: -3px;
                top: 50%;
                margin-top: -4px;
              }
            }
          }

        }
      }
      /deep/ .el-tabs__content {
        height: 100%;
        overflow-y: scroll;
      }
      .information-col {
        width: 100%;
        .information-link {
          width: 100%;
          line-height: 48px;
          /deep/ .el-link--inner {
            display: flex;
            justify-content: space-between;
            width: 100%;
            position: relative;
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
            span {
              white-space: nowrap;
              font-size: 14px;
              &:first-child {
                overflow: hidden;
                text-overflow: ellipsis;
                flex: 0 0 calc(100% - 100px);
                text-indent: 14px;
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
}
</style>