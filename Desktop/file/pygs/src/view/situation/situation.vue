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
                <img class="img" src="../../assets/img/gk-1.png" alt="" />
              </p>
              <p>
                平江（湘赣界）至益阳高速公路项目采用“BOT+EPC”的模式进行建设，投资人为交水建集团、湖南建工集团以及湘投控股集团三家省属国企组成的联合体。
              </p>
              <p>
                <img class="img" src="../../assets/img/gk-2.png" alt="" />
              </p>
              <p>
                本项目是湖南省“七纵七横”中的第三横——平江（湘赣界）至安化高速公路的东段，起于湘赣交界处平江县石牛寨镇，途经龙门镇、木金乡、长寿镇、加义镇、三市镇、安定镇、三阳乡、瓮江镇、浯口镇、伍市镇、新市镇(汨罗工业园)、古培镇、湘阴县城、南阳镇、新泉寺镇、西林港南、凤凰湖农场，止于益阳市东侧笔架山乡苏家坝，与长常北线高速长益段相交。
              </p>
              <p>
                <img class="img" src="../../assets/img/gk-3.png" alt="" />
              </p>
              <p>
                本项目属支撑国家“三大战略”中长江经济带发展的高速公路项目，是洞庭湖区环线高速公路的重要组成部分。项目建成后将促进“3+5”城市群的融合，成为打造环洞庭湖经济圈的重要基础性支撑，将带动沿线近500万人口经济的发展。同时，本项目辐射洞庭湖区南部近100万人口，将为洞庭湖南部抗洪抢险提供快速便捷的服务，显著提高抗洪抢险能力。建设平益高速公路项目，打通省际通道，对接江西境内的修平高速，连接江西大广高速和湖南京港澳高速，对完善湘赣边红色旅游交通网、巩固革命老区平江县脱贫攻坚成果、加快推进湘赣边区域合作示范区建设、推动长江经济带发展具有重要意义，将成为驱动湖南发展的新引擎。
              </p>
              <p>
                <img class="img" src="../../assets/img/gk-4.png" alt="" />
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