<template>
  <div>
    <van-nav-bar
      left-text="返回"
      left-arrow
      class="nav-bar"
      @click-left="onClickLeft"
    />
    <div style="height: calc(100vh - 80px);overflow-y: scroll;">
      <el-row class="arrange">
        <el-col :span="24" class="arrange-row">
          <div class="arrange-col">
            <h2 class="title">参会名单</h2>
            <div class="main">
              <van-cell-group class="main">
                <van-cell @click="goToPdfItem('chmd')" class="pdf-cell" center title="参会名单">
                  <template #default>
                    <img src="@/assets/img/pdf_icon.png"/>
                  </template>
                </van-cell>
              </van-cell-group>
            </div>
          </div>
        </el-col>
        <!-- <el-col :span="24" class="arrange-row">
          <div class="arrange-col">
            <h2 class="title">会议议程</h2>
            <div class="main">
              <van-cell-group class="main">
                <van-cell @click="goToPdfItem('hyyc')" class="pdf-cell" center title="会议议程">
                  <template #default>
                    <img src="@/assets/img/pdf_icon.png"/>
                  </template>
                </van-cell>
              </van-cell-group>
            </div>
          </div>
        </el-col> -->
        <el-col :span="24" class="arrange-row">
          <div class="arrange-col">
            <h2 class="title">会议座次</h2>
            <div class="main">
              <van-cell-group class="main">
                <van-cell @click="goToPdfItem('hyzcb')" class="pdf-cell" center title="会议座次">
                  <template #default>
                    <img src="@/assets/img/pdf_icon.png"/>
                  </template>
                </van-cell>
              </van-cell-group>
            </div>
          </div>
        </el-col>
        <!-- <el-col :span="24" class="arrange-row">
          <div class="arrange-col">
            <h2 class="title">会议资料</h2>
              <van-cell-group class="main">
                <van-cell @click="goToPdfItem('hycl')" class="pdf-cell" center title="会议材料资料">
                  <template #default>
                    <img src="@/assets/img/pdf_icon.png"/>
                  </template>
                </van-cell>
              </van-cell-group>
          </div>
        </el-col> -->
        <el-col :span="24" class="support">
          技术支持：湖南交科天颐科技有限公司
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    document.querySelector("body").setAttribute("style", "background-color:#f6f6f6");
  },
  methods: {
    onClickLeft() {
      window.location.href = "https://lps.eqxiul.com/ls/RIYKMWmF?bt=yxy"
    },
    goToPdfItem(url) {
      this.$router.push({
        name: url
      })
    }
  }
}
</script>

<style lang="less" scoped>
.nav-bar {
  /deep/ .van-nav-bar__content {
    height: 80px;
    .van-nav-bar__left {
      .van-icon {
        font-size: 36px;
        color: #000;
      }
      .van-nav-bar__text {
        font-size: 36px;
        color: #000;
      }
    }
  }
}
.arrange {
  margin-bottom: 100px;
  .arrange-col {
    .title {
      font-size: 30px;
      height: 70px;
      line-height: 70px;
      padding: 0 70px;
      color: #ffffff;
      display: inline-block;
      border-radius: 35px;
      background: linear-gradient(90deg, #d5202f 0%, #d6212f);
      box-shadow: 0 0 10px 0px #ec5964;
      margin-left: 50%;
      transform: translateX(-50%);
      position: relative;
      z-index: 1;
    }
    .main {
      background-color: #ffffff;
      margin: -35px 24px 0;
      border-radius: 10px;
      box-shadow: 0 5px 10px 0 #e7e7e7;
      padding: 50px 0 35px;
      .pdf-cell {
        flex-direction: row-reverse;
        background-color: #edf7ff;
        margin: 0 20px;
        padding: 0 30px;
        width: calc(100% - 40px);
        height: 94px;
        margin-bottom: 18px;
        /deep/ .van-cell__title {
          font-size: 26px;
          .van-cell__label {
            font-size: 18px;
            margin-top: 10px;
          }
        }
        /deep/ .van-cell__value {
          width: 62px;
          height: 64px;
          flex: unset;
          margin-right: 14px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
  .support {
    font-size: 25px;
    text-align: center;
    margin-top: 30px;
  }
}
</style>