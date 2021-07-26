<template>
  <div class="home">
    <div class="top-bg">
      <el-header height="145px" class="top">
        <p class="img logo">
          <el-image :src="require('../../assets/img/home/logo.png')"/>
        </p>
        <el-dropdown trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            <p class="img"><el-image :src="require('../../assets/img/home/user_default_head.png')"/></p>您好<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-remove" command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <class-list/>
    </div>
    <div class="content-bg">
      <div class="content">
        <div class="office-list">
          <el-row :gutter="24">
            <el-col :span="12">
              <div class="name">
                <i class="img"><el-image :src="require('../../assets/img/home/todo_icon.png')"/></i>
                待办审批事项
              </div>
              <div class="todo">
                <el-row :gutter="10">
                  <el-col :span="6">
                    <el-badge :value="3" class="item">
                      <el-button @click="szydbtn">
                        <p class="img"><el-image :src="require('../../assets/img/home/renliziyuandaiban_icon.png')"/></p>
                        <p class="names">“三重一大”运行决策系统</p>
                      </el-button>
                    </el-badge>
                  </el-col>
                  <el-col :span="6">
                    <el-badge :value="12" class="item">
                      <el-button>
                        <p class="img"><el-image :src="require('../../assets/img/home/xiangmuguanlidaiban_icon.png')"/></p>
                        <p class="names">大额资金动态监测应用系统</p>
                      </el-button>
                    </el-badge>
                  </el-col>
                  <el-col :span="6">
                    <el-badge :value="2" class="item">
                      <el-button>
                        <p class="img"><el-image :src="require('../../assets/img/home/jingyingguanlidaiban_icon.png')"/></p>
                        <p class="names">国有企业组织机构基本信息管理系统</p>
                      </el-button>
                    </el-badge>
                  </el-col>
                  <el-col :span="6">
                    <el-badge :value="12" class="item">
                      <el-button>
                        <p class="img"><el-image :src="require('../../assets/img/home/zhihuidangjiandaiban_icon.png')"/></p>
                        <p class="names">国有资产监督追责工作系统</p>
                      </el-button>
                    </el-badge>
                  </el-col>
                </el-row>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="name">
                <i class="img"><el-image :src="require('../../assets/img/home/information_icon.png')"/></i>
                待办审批事项
              </div>
              <div class="information">
                <div class="nav">
                  <div class="nav-item active">集团要闻</div>
                  <div class="nav-item">招标信息</div>
                  <div class="nav-item">人事信息</div>
                  <div class="nav-item">党建天地</div>
                  <div class="nav-item">综合信息</div>
                  <div class="nav-item">安全发展</div>
                </div>
                <div class="main">
                  <el-row>
                    <el-col class="link-item">
                      <el-link :underline="false">
                        <span>资讯中心</span>
                        <span>2021-06-23</span>
                      </el-link>
                    </el-col>
                    <el-col class="link-item">
                      <el-link :underline="false">
                        <span>资讯中心</span>
                        <span>2021-06-23</span>
                      </el-link>
                    </el-col>
                    <el-col class="link-item">
                      <el-link :underline="false">
                        <span>资讯中心</span>
                        <span>2021-06-23</span>
                      </el-link>
                    </el-col>
                    <el-col class="link-item">
                      <el-link :underline="false">
                        <span>资讯中心</span>
                        <span>2021-06-18</span>
                      </el-link>
                    </el-col>
                    <el-col class="link-item">
                      <el-link :underline="false">
                        <span>资讯中心</span>
                        <span>2021-06-18</span>
                      </el-link>
                    </el-col>
                    <el-col class="link-item">
                      <el-link :underline="false">
                        <span>资讯中心</span>
                        <span>2021-06-17</span>
                      </el-link>
                    </el-col>
                    <el-col class="link-item">
                      <el-link :underline="false">
                        <span>资讯中心</span>
                        <span>2021-06-17</span>
                      </el-link>
                    </el-col>
                  </el-row>
                </div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="name">
                <i class="img"><el-image :src="require('../../assets/img/home/focus_icon.png')"/></i>
                我的关注
              </div>
              <div class="focus">
                <el-row>
                  <el-col class="link-item">
                    <el-link :underline="false">
                      <span>资讯中心</span>
                      <span>2021-06-18</span>
                    </el-link>
                  </el-col>
                  <el-col class="link-item">
                    <el-link :underline="false">
                      <span>资讯中心</span>
                      <span>2021-06-18</span>
                    </el-link>
                  </el-col>
                  <el-col class="link-item">
                    <el-link :underline="false">
                      <span>资讯中心</span>
                      <span>2021-06-18</span>
                    </el-link>
                  </el-col>
                  <el-col class="link-item">
                    <el-link :underline="false">
                      <span>资讯中心</span>
                      <span>2021-06-18</span>
                    </el-link>
                  </el-col>
                  <el-col class="link-item">
                    <el-link :underline="false">
                      <span>资讯中心</span>
                      <span>2021-06-18</span>
                    </el-link>
                  </el-col>
                  <el-col class="link-item">
                    <el-link :underline="false">
                      <span>资讯中心</span>
                      <span>2021-06-18</span>
                    </el-link>
                  </el-col>
                  <el-col class="link-item">
                    <el-link :underline="false">
                      <span>资讯中心</span>
                      <span>2021-06-18</span>
                    </el-link>
                  </el-col>
                </el-row>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="name">
                <i class="img"><el-image :src="require('../../assets/img/home/gongzuojihua_icon.png')"/></i>
                工作计划
              </div>
              <div class="gantt">
                <gantt class="left-container"></gantt>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div> 
</template>

<script>
import classList from './childComps/classList.vue'
import Gantt from '../../components/gantt/gantt.vue'

export default {
  name: 'home',
  components: {
    classList,
    Gantt
  },
  methods: {
    szydbtn() {
      window.open('http://124.232.137.239:55555/szyd/templates/maincopy.html')
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
            path: 'login'
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
  position: relative;
  width: 100vw;
  height: 100vh;
  .top-bg {
    background: url('../../assets/img/home/home_bg.png') center center / 100% 100% no-repeat;
    font-size: 0;
    .top {
      margin: 0 6.56vw;
      height: 145px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0;
      .el-dropdown {
        .el-dropdown-link {
          display: flex;
          align-items: center;
          color: #79A9D8;
          .img {
            width: 48px;
            height: 48px;
            margin-right: 12px;
          }
        }
      }
    }
  }
  .content-bg {
    background: #f0f2f5;
    .content {
      margin: 0 6.56vw;
      padding-bottom: 20px;
      .office-list {
        height: 100%;
        .el-row {
          height: 100%;
          overflow: scroll;
          .el-col {
            // height: calc(100% / 2);
            height: 386px;
          }
        }
        .name {
          height: 48px;
          line-height: 48px;
          display: inline-block;
          font-size: var(--the-title-font-size);
          color: #415261;
          padding-right: 20px;
          border-bottom: 3px solid #1f3666;
          .img {
            margin: 0 8px 0 12px;
            font-size: 0;
            .el-image {
              width: 18px;
            }
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
        .todo {
          height: calc(100% - 48px);
          overflow: scroll;
          padding: 25px;
          background: var(--white-color);
          .el-row {
            .el-col {
              height: auto;
              .item {
                width: 100%;
                /deep/ .el-button {
                  width: 100%;
                  border-radius: 8px;
                  border: 1px solid #CAD7E0;
                  padding: 15px;
                  font-size: var(--the-body-font-size);
                  text-align: left;
                  white-space: unset;
                  line-height: 18px;
                  p.names {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    margin-top: 10px
                  }
                }
                /deep/ .el-badge__content {
                  top: 15px;
                  right: 33px;
                  background-color: #EF7230
                }
              }
            }
          }
        }
        .information {
          height: calc(100% - 48px);
          display: flex;
          overflow: hidden;
          background: var(--white-color);
          padding: 25px;
          .nav {
            width: 95px;
            flex: 0 0 95px;
            border-right: 1px solid #CAD7E0;
            .nav-item {
              height: 48px;
              font-size: var(--the-body-font-size);
              color: #415261;
              line-height: 48px;
              text-indent: 12px;
            }
            .nav-item.active {
              color: #1F8ECD;
              font-weight: bold;
              position: relative;
            }
            .nav-item.active::before {
              content: "";
              width: 0;
              height: 0;
              border-top: 4px solid transparent;
              border-left: 5px solid #1F8ECD;
              border-bottom: 4px solid transparent;
              position: absolute;
              right: -7px;
              top: 50%;
              transform: translateY(-50%);
            }
            .nav-item.active::after {
              content: "";
              width: 2px;
              height: 100%;
              background: #1F8ECD;
              position: absolute;
              right: -2px;
              top: 0;
            }
          }
          .main {
            width: calc(100% - 95px);
            overflow: scroll;
            .link-item {
              padding: 0 33px;
              height: 48px;
            }
          }
        }
        .focus {
          height: calc(100% - 48px);
          overflow: scroll;
          background: var(--white-color);
          padding: 25px;
          .el-row {
            .el-col {
              height: 48px;
              display: flex;
              align-items: center;
              border-bottom: 1px solid #CAD7E0;
            }
          }
        }
        .gantt {
          height: calc(100% - 48px);
          background: var(--white-color);
          padding: 25px;
        }
      }
    }
  }
}
</style>