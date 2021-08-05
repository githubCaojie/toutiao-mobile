<template>
  <el-container class="home">
    <el-header height="80px" class="top">
      <div class="logo">
        <el-image :src="require('../../assets/img/home/logo.png')"/>
      </div>
      <div class="right">
        <!-- <div class="website-btn" @click="goWebsite">
            <el-image :src="require('../../assets/img/home/website_icon.png')"/>
            进入官网
        </div> -->
        <el-dropdown trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            <div class="img"><el-image :src="require('../../assets/img/home/user_default_head.png')"/></div>您好<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-remove" command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>
    <el-main>
      <div class="content">
        <class-list :classNavData="classNavData"/>
        <div class="office-list">
          <el-row :gutter="24">
            <el-col :span="12">
              <backlog />
            </el-col>
            <el-col :span="12">
              <message :informationData="informationData" :informationIndex="informationIndex" />
            </el-col>
            <el-col :span="12">
              <focus :focusData="focusData"/>
            </el-col>
            <el-col :span="12">
              <gantt class="left-container"/>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="float float1">
        <el-image :src="require('../../assets/img/home/btn9.png')"/>
      </div>
      <div class="float float2">
        <el-image :src="require('../../assets/img/home/btn10.png')"/>
      </div>
      <div class="float float3">
        <div>
          <el-image :src="require('../../assets/img/home/btn11.png')"/>
        </div>
        <div>
          <el-image :src="require('../../assets/img/home/btn12.png')"/>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import classList from './childComps/classList.vue'
import backlog from './childComps/backlog.vue'
import message from './childComps/message.vue'
import focus from './childComps/focus.vue'

import Gantt from './childComps/gantt.vue'

export default {
  name: 'home',
  components: {
    classList,
    backlog,
    message,
    focus,
    Gantt
  },
  data () {
    return {
      classNavData: [
        {
          id: '1',
          title: '决策类',
          childNavData: [
            {
              id: '1-1',
              name: '决策支持',
              iconUrl: 'img/home/btn1.png'
            }
          ]
        },
        {
          id: '2',
          title: '经营生产管理类',
          childNavData: [
            {
              id: '2-1',
              name: '项目运营管理',
              iconUrl: 'img/home/btn2.png'
            },
            {
              id: '2-2',
              name: '采购管理',
              iconUrl: 'img/home/btn3.png'
            },
            {
              id: '2-3',
              name: '人力资源',
              iconUrl: 'img/home/btn4.png'
            },
            {
              id: '2-4',
              name: '安全管理',
              iconUrl: 'img/home/btn5.png'
            },
            {
              id: '2-5',
              name: '资产管理',
              iconUrl: 'img/home/btn6.png'
            },
          ]
        },
        {
          id: '3',
          title: '日常管理类',
          childNavData: [
            {
              id: '3-1',
              name: '智慧党建',
              iconUrl: 'img/home/btn7.png'
            },
            {
              id: '3-2',
              name: '行政管理',
              iconUrl: 'img/home/btn8.png'
            }
          ]
        }
      ],
      informationData: [
        {
          id: '1',
          title: '院新闻',
          childData: [
            {
              id: '1-1',
              name: '集团集中组织观看学习《生命重于泰山——学习习近平总书记关于安全生产',
              time: '2021-06-23'
            },
            {
              id: '1-2',
              name: '集团集中组织观看学习《生命重于泰山——学习习近平总书记关于安全生产',
              time: '2021-06-23'
            },
            {
              id: '1-3',
              name: '集团集中组织观看学习《生命重于泰山——学习习近平总书记关于安全生产',
              time: '2021-06-23'
            },
            {
              id: '1-4',
              name: '集团集中组织观看学习《生命重于泰山——学习习近平总书记关于安全生产',
              time: '2021-06-23'
            },
            {
              id: '1-5',
              name: '集团集中组织观看学习《生命重于泰山——学习习近平总书记关于安全生产',
              time: '2021-06-23'
            }
          ]
        },
        {
          id: '2',
          title: '集团新闻',
          childData: [
            {
              id: '2-1',
              name: '方联民会见华邦控股集团董事局主席苏如春一行',
              time: '2021-06-23'
            },
            {
              id: '2-2',
              name: '方联民会见华邦控股集团董事局主席苏如春一行',
              time: '2021-06-23'
            },
            {
              id: '2-3',
              name: '方联民会见华邦控股集团董事局主席苏如春一行',
              time: '2021-06-23'
            },
            {
              id: '2-4',
              name: '方联民会见华邦控股集团董事局主席苏如春一行',
              time: '2021-06-23'
            },
          ]
        },
        {
          id: '3',
          title: '公示公告',
          childData: [
            {
              id: '3-1',
              name: '集团召开平益、衡永高速科研课题立项评审专题会议',
              time: '2021-06-23'
            },
            {
              id: '3-2',
              name: '集团召开平益、衡永高速科研课题立项评审专题会议',
              time: '2021-06-23'
            },
            {
              id: '3-3',
              name: '集团召开平益、衡永高速科研课题立项评审专题会议',
              time: '2021-06-23'
            },
            {
              id: '3-4',
              name: '集团召开平益、衡永高速科研课题立项评审专题会议',
              time: '2021-06-23'
            },
          ]
        }
      ],
      focusData: [
        {
          id: '1',
          name: '省交通运输厅',
          time: '2021-06-18'
        },
        {
          id: '2',
          name: '省交通运输厅',
          time: '2021-06-18'
        },
        {
          id: '3',
          name: '省交通运输厅',
          time: '2021-06-18'
        },
        {
          id: '4',
          name: '省交通运输厅',
          time: '2021-06-18'
        },
        {
          id: '5',
          name: '省交通运输厅',
          time: '2021-06-18'
        },
        {
          id: '6',
          name: '省交通运输厅',
          time: '2021-06-18'
        }
      ]
    }
  },
  methods: {
      // 进入官网
    goWebsite() {
      window.open('http://www.hncc-china.com/')
    },
    // 监听用户按钮的点击
    handleCommand(command) {
      // 退出登录
      if(command === "logout") {
        this.$confirm('是否退出登录?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '已成功退出!',
          });
          this.$router.push({
            path: 'user/login'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消退出'
          });          
        });
      }
    },
  }
}
</script>

<style lang="less" scoped>
.home {
  background: url('../../assets/img/home/home_bg.png') center center / 100% 100% no-repeat;
  position: relative;
  width: 100vw;
  padding-bottom: 7.37vw;
  .top {
    margin: 0 7.37vw;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    .logo {
      height: 45px;
      .el-image {
        height: 100%;
      }
    }
    .right {
      display: flex;
      .website-btn {
        color: var(--white-color);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        color: #79A9D8;
        padding-right: 25px;
        border-right: 1px solid #79A9D8;
        cursor: pointer;
        .el-image {
          margin-right: 10px;
        }
      }
    }
    .el-dropdown {
      padding-left: 24px;
      cursor: pointer;
      .el-dropdown-link {
        display: flex;
        align-items: center;
        color: #79A9D8;
        .img {
          width: 30px;
          height: 30px;
          margin-right: 12px;
        }
      }
    }
  }
  .content {
    margin: 0 7.37vw;
    // height: calc(100vh - 156px);
    background: var(--white-color);
    padding: 24px;
    overflow: scroll;
    background-image: url('../../assets/img/home/bg.png');
    background-size: 100% 100%;
    background-position: bottom right;
    position: relative;
    .office-list {
      height: 100%;
      .el-row {
        height: 100%;
        .el-col {
          // height: calc(100% / 2);
          height: 327px;
        }
      }
      .name {
        height: 48px;
        display: flex;
        align-items: center;
        font-size: var(--the-title-font-size);
        color: #415261;
        background: linear-gradient(90deg, rgba(214, 232, 243) 0%, rgba(247, 250, 252) 100%);
        margin-top: 23px;
        .img {
          margin: 0 8px 0 12px;
        } 
      }
      .link-item {
        display: flex;
        align-items: center;
        width: 100%;
        height: 48px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #415261;
        position: relative;
        /deep/ .el-link {
          position: relative;
          width: 100%;
          .el-link--inner {
            padding: 0 6px;
            display: flex;
            justify-content: space-between;
            width: calc(100% - 12px);
            span:first-child {
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
        }
        /deep/ .el-link::before {
          content: "";
          width: 4px;
          height: 4px;
          background: #415261;
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
        }
      }
    }
  }
  .float {
    position: fixed;
    font-size: 0;
    cursor: pointer;
    width: 60px;
  }
  .float1 {
    top: 60%;
    right: 0px;
  }
  .float2 {
    top: 30%;
    left: 0px;
  }
  .float3 {
    top: 50%;
    left: 0px;
  }
}
</style>