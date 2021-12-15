<template>
  <div>
    <van-nav-bar
      left-text="返回"
      left-arrow
      class="nav-bar"
      @click-left="$router.go(-1)"
    />
    <div class="mains">
      <h2 class="head">
        <p>湖南省平安百年品质工程现场观摩会</p>
        <p>暨高速公路高质量建设年度总结会行程安排</p>
      </h2>
      <div class="time">2021年12月15日</div>
      <van-steps direction="vertical" :active="9" class="steps" active-color="#d6202f">
        <van-step>
          <div class="fl">
            <div class="title">14:00-18:00</div>
            <div class="title">望城紫鑫戴斯酒店报到</div>
          </div>
        </van-step>
        <van-step>
          <div class="fl">
            <div class="title">18:00-19:30</div>
            <div class="title">28楼自助餐厅晚餐</div>
          </div>
        </van-step>
      </van-steps>

      <div class="time">2021年12月16日</div>
      <van-steps direction="vertical" :active="9" class="steps stepss" active-color="#d6202f">
        <van-step>
          <div class="fl">
            <div class="title">07:00-08:00</div>
            <div class="title">28楼自助餐厅早餐</div>
          </div>
        </van-step>
        <van-step>
          <div class="fl">
            <div class="title">08:00-09:00</div>
            <div class="title">从紫鑫戴斯酒店乘坐大巴前往平益高速第十六合同段南阳湘江特大桥33#墩现场</div>
          </div>
        </van-step>
        <van-step>
          <div class="fl">
            <div class="title">09:00-10:30</div>
            <div class="title">
              <p>观摩平益高速第十六合同段南阳湘江特大桥现场（两个展区）及波形钢腹板梁场#墩现场</p>
              <p style="color:blue">注：第十六合同段南阳湘江特大桥现场分2批观摩，1-4号组为第一批，5-7号组为第二批。</p>
              <p style="color:blue">来宾现场位置请见下图：</p>
              <p @click="czAllHandle">
                <img
                  :src="require('./childImg/xcap/1.png')"
                />
              </p>
            </div>
          </div>
        </van-step>
        <van-step>
          <div class="fl">
            <div class="title">10:30-11:00</div>
            <div class="title">乘坐大巴前往平益高速第十四合同段预制梁场</div>
          </div>
        </van-step>
        <van-step>
          <div class="fl">
            <div class="title">11:00-11:50</div>
            <div class="title">
              <p>观摩平益高速第十四合同段预制梁场现场</p>
              <p style="color:blue">注：第十四合同段预制梁场分3批观摩，1-3号组为第一批、4-5号组为第二批、6-7号组为第三批。</p>  
            </div>
          </div>
        </van-step>
        <van-step>
          <div class="fl">
            <div class="title">11:50-12:20</div>
            <div class="title">观摩结束，从第十四合同段预制梁场前往湘阴洋沙湖酒店</div>
          </div>
        </van-step>
        <van-step>
          <div class="fl">
            <div class="title">12:20-13:20</div>
            <div class="title">中餐</div>
          </div>
        </van-step>
        <van-step>
          <div class="fl">
            <div class="title">13:20-14:00</div>
            <div class="title">统一乘车返回望城紫鑫戴斯酒店</div>
          </div>
        </van-step>
        <van-step>
          <div class="fl">
            <div class="title">14:00-17:00</div>
            <div class="title">望城紫鑫戴斯酒店4楼金砖厅召开会议</div>
          </div>
        </van-step>
        <van-step>
          <div class="fl">
            <div class="title">17:00-19:00</div>
            <div class="title">酒店28楼自助餐厅晚餐</div>
          </div>
        </van-step>
      </van-steps>
    </div>
  </div>
</template>

<script>
import { ImagePreview } from "vant";

export default {
  data () {
    return {
      imageList: []
    }
  },
  mounted() {
    document.querySelector("body").setAttribute("style", "background-color:#f6f6f6");
  },
  methods: {
    czAllHandle() {
      ImagePreview({
        images: [
          require('./childImg/xcap/1.png'),
        ],
        loop: false
      });
    },
  }
}
</script>

<style lang="less" scoped>
.time {
  background-color: #d5202f;
  color: #ffffff;
  font-size: 22px;
  display: inline-block;
  padding: 10px 15px;
  border-radius: 20px;
  margin-left: 5vw;
  margin-bottom: 10px;
}
.fl {
  display: flex;
  .title {
    &:first-child {
      width: 170px;
      flex: 0 0 170px
    }
  }
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
.mains {
  height: calc(100vh - 80px);
  overflow-y: scroll;
  background-color: #ffffff;
  .head {
    font-size:36px;
    text-align: center;
    padding-top: 40px
  }
  .stepss {
    padding-bottom: 40px;
  }
  .steps {
    width: 90vw;
    margin: 0 5vw;
    .title {
      font-size: 22px;
      color: #242424;
      font-weight: 400;
      // height: 40px;
      line-height: 40px;
    }
  }
}
/deep/ .van-step--vertical {
  line-height: 60px;
  padding: 0;
}
/deep/ .van-icon-checked:before {
  // content: unset;
}
/deep/ .van-step__circle {
  width: 20px;
  height: 20px;
}
/deep/ .van-step__icon--active {
  width: 20px;
  height: 20px;
  &::before {
    width: 20px;
    height: 20px;
    background-color: #d5202f;
    border-radius: 10px;
  }
}
// .van-step__circle-container {
//   top: 50%;
//   transform: translateY(-50%);
// }
/deep/ .van-step__line {
  width: 2px;
}
// /deep/ .van-step__circle {
//   width: 12px;
//   height: 12px;
//   border-radius: 6px;
//   position: relative;
//   &::before {
//     width: 20px;
//     height: 20px;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     margin-top: -10px;
//     margin-left: -10px;
//     background-color: #f2b7bc;
//   }
// }
img {
  margin: 20px;
  width: calc(100% - 40px);
}
</style>