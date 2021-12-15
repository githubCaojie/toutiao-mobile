<template>
  <div>
    <van-nav-bar
      left-text="返回"
      left-arrow
      class="nav-bar"
      @click-left="$router.go(-1)"
    />
    <div class="mains">
      <el-row class="arrange">
        <el-col :span="24" class="arrange-row">
          <div class="arrange-col">
            <h2 class="title">行程安排</h2>
            <div class="main">
              <van-cell-group class="main">
                <van-cell @click="goToPdfItem('xcap')" class="pdf-cell" center title="行程安排">
                  <template #default>
                    <img src="@/assets/img/pdf_icon.png"/>
                  </template>
                </van-cell>
              </van-cell-group>
            </div>
          </div>
        </el-col>
        <el-col :span="24" class="arrange-row">
          <div class="arrange-col">
            <h2 class="title">乘车安排</h2>
            <div class="main">
              <van-cell-group class="main">
                <van-cell @click="goToPdfItem('clap')" class="pdf-cell" center title="乘车安排">
                  <template #default>
                    <img src="@/assets/img/pdf_icon.png"/>
                  </template>
                </van-cell>
              </van-cell-group>
            </div>
          </div>
        </el-col>
        <el-col :span="24" class="arrange-row">
          <div class="arrange-col">
            <h2 class="title">住宿安排</h2>
            <div class="main">
              <div class="list-txt">
                <p>1．15日住宿为您安排在望城紫鑫戴斯酒店（位置详见导航地图）；</p>
                <p>2．根据回执信息，酒店房间已为您预订，请您根据报到时提供给您的入住信息到酒店前台办理入住；</p>
                <p>3．参会人员住宿费需请自理，请您于退房当日下午2点前完成退房手续（前台设有两处开票点）。</p>
                <p></p>
              </div>
                <van-cell class="pdf-cell" @click="goHotel" center title="望城紫鑫戴斯酒店" label="一键导航">
                  <template #default>
                    <img src="@/assets/img/dt_icon.png"/>
                  </template>
                </van-cell>
            </div>
          </div>
        </el-col>
        <el-col :span="24" class="arrange-row">
          <div class="arrange-col">
            <h2 class="title">就餐安排</h2>
            <div class="main">
              <van-cell-group class="main">
                <van-cell @click="goToPdfItem('jcap')" class="pdf-cell" center title="就餐安排">
                  <template #default>
                    <img src="@/assets/img/pdf_icon.png"/>
                  </template>
                </van-cell>
              </van-cell-group>
            </div>
          </div>
        </el-col>
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
  data(){
      return {
      }
  },
  methods: {
    goHotel() {
      window.open('http://apis.map.qq.com/uri/v1/marker?marker=coord:28.355886,112.829046;title:长沙紫鑫戴斯大酒店;addr: 湖南省长沙市望城区高塘岭街道雷锋大道1698号')
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
.mains {
  height: calc(100vh - 80px);
  overflow-y: scroll;
}
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
      .list-txt {
        background-color: #edf7ff;
        font-size: 26px;
        margin: 0 24px;
        padding: 15px 30px 0;
        box-shadow: 0 0.066667rem 0.133333rem 0 #e7e7e7;
        color: #323233;
      }
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