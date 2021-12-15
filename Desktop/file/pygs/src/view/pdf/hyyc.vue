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
            <div class="main">
              <p>
                第一项议程：主持人介绍出席会议的省厅领导及各有关单位代表
              </p>
              <p>
                第二项议程：平益公司党委书记、董事长邹国庆介绍平益项目建设情况
              </p>
              <p>
                第三项议程：省建工集团董事、党委委员、副总经理、总工程师陈浩讲话  
              </p>
              <p>
                第四项议程：省交水建集团党委副书记、总经理胡建华讲话
              </p>
              <p>
                第五项议程：省交通质安局讲话
              </p>
              <p>
                第六项议程：省交通运输厅基建处领导讲话
              </p>
              <p>
                第七项议程：省交通运输厅领导讲话
              </p>
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
    document.addEventListener("WeixinJSBridgeReady", function onBridgeReady() {
      WeixinJSBridge.call("hideToolbar");
      WeixinJSBridge.call("hideOptionMenu");
    });
  },
  data() {
    return {};
  },
};
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
.img {
  width: 100%;
}
.arrange {
  margin-bottom: 100px;
  .arrange-col {
    .main {
      background-color: #ffffff;
      margin: 35px 24px 0;
      border-radius: 10px;
      box-shadow: 0 5px 10px 0 #e7e7e7;
      padding: 50px 20px 50px;
      font-size: 24px;
      p {
        text-indent: 48px;
        margin-bottom: 50px;
        line-height: 35px;
        &:last-child {
          margin-bottom: unset;
        }
      }
    }
  }
  .support {
    font-size: 24px;
    text-align: center;
    margin-top: 30px;
  }
}
</style>