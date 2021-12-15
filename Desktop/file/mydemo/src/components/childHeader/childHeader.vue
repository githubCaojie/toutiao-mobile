<template>
  <div class="child-header">
    <!-- logo -->
    <p class="img logo">
      <el-image :src="require('../../assets/img/childHeader/mainimg2.png')"/>
    </p>
    <div class="content">
      <!-- 下拉框 -->
      <div class="dropdown-menu">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            TXSG-01
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu class="dropdown" slot="dropdown">
            <div v-for="item in dropdownMenuList" :key="item.id">
              <el-collapse v-if="item.childMenu" @change="handleChange"  class="document">
                <el-collapse-item>
                  <template slot="title">
                    <i class="el-icon-folder-opened"></i>{{item.name}}
                  </template>
                  <div v-for="childMenu in item.childMenu" :key="childMenu.id">
                    <el-collapse v-if="childMenu.childSubMenu">
                      <el-collapse-item>
                        <template slot="title">
                          <i class="el-icon-folder-opened"></i>{{childMenu.name}}
                        </template>
                        <el-row>
                          <el-col v-for="childSubMenu in childMenu.childSubMenu" :key="childSubMenu.id">
                            <div class="file"><i class="el-icon-document-copy"></i>{{childSubMenu.name}}</div>
                          </el-col>
                        </el-row>
                      </el-collapse-item>
                    </el-collapse>
                    <el-row v-else>
                      <el-col>
                        <div class="file"><i class="el-icon-document-copy"></i>{{childMenu.name}}</div>
                      </el-col>
                    </el-row>
                  </div>
                </el-collapse-item>
              </el-collapse>
              <el-row v-else>
                <el-col>
                  <div class="file"><i class="el-icon-document-copy"></i>{{item.name}}</div>
                </el-col>
              </el-row>
            </div>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <!-- btn -->
      <div class="right">
        <el-button icon="el-icon-warning">消息</el-button>
        <el-button icon="el-icon-s-goods"></el-button>
        <el-button icon="el-icon-user-solid"></el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dropdownMenuList: [
        {
          id: '1',
          name: '佛山市塘西大道三期(桃园路-S263广云路段)工程',
          childMenu: [
            {
              id: '1-1',
              name: '塘西三期第一监理处',
              childSubMenu: [
                {
                  id: '1-1-1',
                  name: 'TXSG-01'
                }
              ]
            },
            {
              id: '1-2',
              name: '塘西三期第二监理处'
            },
          ]
        },
        {
          id: '2',
          name: '佛山市塘西大道三期(桃园路-S263广云路段)工程'
        },
        {
          id: '3',
          name: '佛山市塘西大道三期(桃园路-S263广云路段)工程'
        },
        {
          id: '4',
          name: '佛山市塘西大道三期(桃园路-S263广云路段)工程'
        }
      ]
    }
  },
  methods: {
    handleChange() {
      
    }
  }
}
</script>

<style lang="less" scoped>
.child-header {
  height: 70px;
  width: 100%;
  background: url('../../assets/img/childHeader/mainimg1.png') center center / 100% 100% no-repeat;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  .logo {
    width: 30%;
  }
  .content {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 60%;
    .dropdown-menu {
      background-color: #fff;
      width: 30%;
      border-radius: 10px;
      /deep/ .el-dropdown {
        width: 100%;
        display: block;
        .el-dropdown-link {
          width: 100%;
          display: flex;
          justify-content: space-between;
          padding: 10px 5%;
        }
      }
    }
    .right {
      margin-left: 20px;
      .el-button {
        background: transparent;
        border: unset;
        color: #ffffff;
        padding: 0;
        margin: 0;
        font-size: 16px;
        margin-right: 10px;
      }
    }
  }
}
.dropdown {
  height: 280px;
  min-width: 200px;
  max-width: 600px;
  overflow: scroll;
  padding: 5px 2%;
  .el-collapse {
    border: unset;
  }
  .document {
    /deep/ .el-collapse-item__header {
      height: 30px;
      line-height: 30px;
      font-size: 14px;
      border: unset;
    }
    /deep/ .el-collapse-item__content {
      padding-bottom: 0;
    }
    /deep/ .el-collapse-item__wrap {
      margin-left: 20px;
      border: unset;
    }
    i {
      margin-right: 5px;
    }
  }
  .file {
    height: 30px;
    line-height: 30px;
    color: #000;
    font-size: 14px;
    i {
      margin-right: 5px;
    }
  }
}
</style>