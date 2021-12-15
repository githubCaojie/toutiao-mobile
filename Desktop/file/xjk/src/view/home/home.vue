<template>
  <el-container class="home">
    <el-header height="80px" class="top">
      <div class="logo">
        <el-image :src="require('../../assets/img/home/logo.png')"/>
      </div>
      <div class="right">
        <el-dropdown trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            <div class="img"><el-image :src="require('../../assets/img/home/user_default_head.png')"/></div>{{$store.getters.userInfo.personName}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-remove" command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>
    <el-main class="main">
      <div class="content">
        <class-list :classNavData="classNavData" @classBtnHandlel="classBtnHandlel" />
        <div class="office-list">
          <el-row>
            <el-col :span="24">
              <backlog :classNavData="classNavData" @updateFocusHandlel="updateFocusHandlel" />
            </el-col>
            <el-col :span="24">
              <focus :focusData="focusData" @handleCurrentChange="handleCurrentChange" />
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <message :informationData="informationData"/>
            </el-col>
            <el-col :span="24">
              <gantt class="left-container"/>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="float-box">
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
          id: '2',
          title: '经营生产管理类',
          childNavData: []
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
      focusData: {
        list: [],
        pageInfo: {
          allPageNum: 0,
          allRowNum: 0,
          curPageNum: 0,
          rowOfPage: 0
        }
      },
      focusType: '',
    }
  },
  mounted() {
    this.getRole()
  },
  methods: {
    // 获取经营生产管理类按钮
    getRole() {
      let params = {
        mobile: this.$store.getters.userInfo.linkmenPhone
      }
      this.request.post(
        this.api.getRole,
        params,
      )
      .then(res => {
        let _this = this
        if(res.status == 200) {
          this.classNavData[0].childNavData = res.data
          let navData = res.data
          navData.forEach(e => {
            if(e.id === "purchase") {
              this.getTodoListCountNum('purchaseService').then(res => {
                if(res > 0){
                  e.countNum = res
                }
              })
            }
            if(e.id === "oms") {
              this.getTodoListCountNum('omsService').then(res => {
                if(res > 0){
                  e.countNum = res
                }
              })
            }
            if(e.id === "tf_main_web") {
              this.getTodoListCountNum('hrService').then(res => {
                if(res > 0){
                  e.countNum = res
                }
              })
            }
          });
          setTimeout(() => {
            this.classNavData[0].childNavData = []
            this.classNavData[0].childNavData = navData
          }, 1000);
          this.getTodoList('', 1, 10)
        }else {
          return this.$message.error({
            message: '对不起，服务器开了点小差，请重新登录',
            onClose: function () {
              _this.logOut()
            }
          })
        }
      })
    },
    // 获取待办数量
    async getTodoListCountNum (type) {
      let num = ''
      let params = {
        loginId: this.$store.getters.userInfo.loginId,
        partyId: this.$store.getters.userInfo.partyId,
        type
      }
      await this.request.get(
        this.api.getlistCount,
        params
      )
      .then(res => {
        let _this = this
        if(res.status == 200) {
          num = res.data
        }else {
          return this.$message.error({
            message: '对不起，服务器开了点小差，请重新登录',
            onClose: function () {
              _this.logOut()
            }
          })
        }
      })
      return num
    },
    // 获取待办列表
    getTodoList(type, curPageNum, rowOfPage) {
      let params = {
        loginId: this.$store.getters.userInfo.loginId,
        partyId: this.$store.getters.userInfo.partyId,
        type,
        curPageNum,
        rowOfPage
      }
      this.request.get(
        this.api.getTodoList,
        params,
      )
      .then(res => {
        let _this = this
        if(res.status == 200) {
          this.focusData = res.data
        }else {
          return this.$message.error({
            message: '对不起，服务器开了点小差，请重新登录',
            onClose: function () {
              _this.logOut()
            }
          })
        }
      })
    },
    // 点击待办事项审批
    updateFocusHandlel(id) {
      switch (id) {
        case 'purchase':
          this.getTodoList('purchaseService', 1, 10)
          this.focusType = 'purchaseService'
          break;
        case 'oms':
          this.getTodoList('omsService', 1, 10)
          this.focusType = 'omsService'
          break;
        case 'tf_main_web':
          this.getTodoList('hrService', 1, 10)
          this.focusType = 'hrService'
          break;
        default:
          this.focusType = ''
          this.focusData = {
            list: [],
            pageInfo: {
              allPageNum: 0,
              allRowNum: 0,
              curPageNum: 0,
              rowOfPage: 0
            }
          }
          break;
      }
    },
    // 点击待办列表分页
    handleCurrentChange(val) {
      this.getTodoList(this.focusType, val, 10)
    },
    // 点击经营生产管理类按钮
    classBtnHandlel(id) {
      let params = {
        id
      }
      this.request.post(
        this.api.openPurchase,
        params
      )
      .then(res => {
        let _this = this
        if(res.status == 200) {
          document[id].submit()
        }else {
          return this.$message.error({
            message: '对不起，服务器开了点小差，请重新登录',
            onClose: function () {
              _this.logOut()
            }
          })
        }
      })
    },
    // 监听右上角用户按钮的点击
    handleCommand(command) {
      // 退出登录
      if(command === "logout") {
        this.$confirm('是否退出登录?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.logOut()
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消退出'
          });          
        });
      }
    },
    // 退出登录
    logOut() {
      let params = {
        token: this.$store.getters.token,
        mobile: this.$store.getters.userInfo.linkmenPhone
      }
      this.request.post(
        this.api.logOut,
        params
      )
      .then(res => {
        if(res.status == 200) {
          localStorage.removeItem("userInfo")
          localStorage.removeItem("token")
          this.$store.commit('handleUserInfo', '')
          this.$store.commit('handleToken', '')
          this.$message({
            type: 'success',
            message: '已成功退出!',
          });
          return this.$router.push({
            path: 'login'
          })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
@max768: ~"(max-width: 768px)";
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
    @media @max768 {
      margin: 0 2%
    }
    .logo {
      height: 45px;
      .el-image {
        height: 100%;
      }
    }
    .right {
      display: flex;
      .website-btn {
        color: #ffffff;
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
  .main {
    padding: 0;
    overflow: unset;
    .content {
      margin: 0 7.37vw;
      // height: calc(100vh - 156px);
      background: #ffffff;
      padding: 24px;
      background-image: url('../../assets/img/home/bg.png');
      background-size: 100% 100%;
      background-position: bottom right;
      position: relative;
      @media @max768 {
        margin: 0 2%;
        padding: 2%;
      }
      .office-list {
        height: 100%;
        display: flex;
        justify-content: space-between;
        @media @max768 {
          flex-direction: column;
          justify-content: unset;
        }
        .el-row {
          width: 49.5%;
          height: 100%;
          display: flex;
          flex-direction: column;
          @media @max768 {
            margin: unset !important;
            width: 100%;
          }
          .el-col {
            // height: calc(100% / 2);
            height: 327px;
            @media @max768 {
              width: 100%;
              padding: 0 !important;
            }
          }
        }
        .name {
          height: 48px;
          display: flex;
          align-items: center;
          font-size: 16px;
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
  }
  .float-box {
    @media @max768 {
      display: none;
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
}
</style>