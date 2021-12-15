<template>
  <div>
    <van-nav-bar
      left-text="返回"
      left-arrow
      class="nav-bar"
      @click-left="$router.go(-1)"
    />
    <div class="mains">
      <van-cell-group>
        <!-- <van-cell class="item" @click="goDetail('zagl')">
          <template #title>
            <div class="title">质安管理</div>
          </template>
          <template #default>
            <img
            class="photo"
            :src="require('../../assets/img/zagl-1.png')"
            />
          </template>
        </van-cell> -->
        <van-cell class="item" @click="goDetail('kjcx')">
          <template #title>
            <div class="title">工程建设</div>
          </template>
          <template #default>
            <img
            class="photo"
            :src="require('../../assets/img/gcjs-1.png')"
            />
          </template>
        </van-cell>
        <van-cell class="item" @click="goDetail('tsfwq')">
          <template #title>
            <div class="title">特色服务区</div>
          </template>
          <template #default>
            <img
            class="photo"
            :src="require('../../assets/img/tsfwq-1.png')"
            />
          </template>
        </van-cell>
        <!-- <van-cell class="item" @click="goDetail('bzh')">
          <template #title>
            <div class="title">标准化</div>
          </template>
          <template #default>
              <img
                class="photo"
                :src="require('../../assets/img/bzh-1.png')"
              />
          </template>
        </van-cell> -->
        <!-- <van-cell class="item" @click="goDetail('zdh')">
          <template #title>
            <div class="title">自动化</div>
          </template>
          <template #default>
              <img
                class="photo"
                :src="require('../../assets/img/zdh-1.png')"
              />
          </template>
        </van-cell> -->
        <!-- <van-cell class="item" @click="goDetail('znh')">
          <template #title>
            <div class="title">智能化</div>
          </template>
          <template #default>
              <img
                class="photo"
                :src="require('../../assets/img/bzh-1.png')"
              />
          </template>
        </van-cell> -->
        <van-cell class="item" @click="goDetail('pypp')">
          <template #title>
            <div class="title">平益品牌</div>
          </template>
          <template #default>
              <img
                class="photo"
                :src="require('../../assets/img/pypp-1.png')"
              />
          </template>
        </van-cell>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import { ImagePreview } from "vant";

export default {
  methods: {
    goDetail(url) {
      if (url == "zagl") {
        ImagePreview({
          images: [
            require("../../assets/img/zagl-1.png"),
            require("../../assets/img/zagl-2.png"),
            require("../../assets/img/zagl-3.png"),
            require("../../assets/img/zagl-4.png"),
            require("../../assets/img/zagl-5.png"),
            require("../../assets/img/zagl-6.png"),
            require("../../assets/img/zagl-7.png"),
            require("../../assets/img/zagl-8.png"),
            require("../../assets/img/zagl-9.png"),
            require("../../assets/img/zagl-10.png"),
            require("../../assets/img/zagl-11.png"),
            require("../../assets/img/zagl-12.png"),
            require("../../assets/img/zagl-13.png"),
            require("../../assets/img/zagl-14.png"),
            require("../../assets/img/zagl-15.png")
          ],
          swipeDuration: 300,
          showIndicators: true,
          loop: true
        });
      }
      if (url == "kjcx") {
        ImagePreview({
          images: [
            require("../../assets/img/gcjs-1.png"),
            require("../../assets/img/gcjs-2.png"),
            require("../../assets/img/gcjs-3.png"),
            require("../../assets/img/gcjs-4.png"),
            require("../../assets/img/gcjs-5.png"),
            require("../../assets/img/gcjs-6.png"),
            require("../../assets/img/gcjs-7.png")
          ],
          swipeDuration: 300,
          showIndicators: true,
          loop: true
        });
      }
      if (url == "tsfwq") {
        ImagePreview({
          images: [
            require("../../assets/img/tsfwq-1.png"),
            require("../../assets/img/tsfwq-2.png"),
            require("../../assets/img/tsfwq-3.png"),
            require("../../assets/img/tsfwq-4.png"),
            require("../../assets/img/tsfwq-5.png"),
            require("../../assets/img/tsfwq-6.png")
          ],
          swipeDuration: 300,
          showIndicators: true,
          loop: true
        });
      }
      if (url == "bzh") {
        ImagePreview({
          images: [
            require("../../assets/img/bzh-1.png"),
            require("../../assets/img/bzh-2.png"),
            require("../../assets/img/bzh-3.png"),
            require("../../assets/img/bzh-4.png"),
            require("../../assets/img/bzh-5.png"),
            require("../../assets/img/bzh-6.png")
          ],
          swipeDuration: 300,
          showIndicators: true,
          loop: true
        });
      }
      if (url == "zdh") {
        ImagePreview({
          images: [
            require("../../assets/img/zdh-1.png"),
            require("../../assets/img/zdh-2.png"),
            require("../../assets/img/zdh-3.png"),
            require("../../assets/img/zdh-4.png"),
            require("../../assets/img/zdh-5.png")
          ],
          swipeDuration: 300,
          showIndicators: true,
          loop: true
        });
      }
      if (url == "znh") {
        ImagePreview({
          images: [
            require("../../assets/img/znh-1.png"),
            require("../../assets/img/znh-2.png"),
            require("../../assets/img/znh-3.png"),
            require("../../assets/img/znh-4.png"),
            require("../../assets/img/znh-5.png")
          ],
          swipeDuration: 300,
          showIndicators: true,
          loop: true
        });
      }
      if (url == "pypp") {
        ImagePreview({
          images: [
            require("../../assets/img/pypp-1.png"),
            require("../../assets/img/pypp-2.png"),
            require("../../assets/img/pypp-3.png"),
            require("../../assets/img/pypp-4.png"),
            require("../../assets/img/pypp-5.png"),
            require("../../assets/img/pypp-6.png"),
            require("../../assets/img/pypp-7.png"),
            require("../../assets/img/pypp-8.png")
          ],
          swipeDuration: 300,
          showIndicators: true,
          loop: true
        });
      }
    }
  }
};
</script>

<style lang="less" scoped>
.photo {
    width:300px;
    height:150px;
    display:unset;
}
.mains {
  height: calc(100vh - 80px);
  overflow-y: scroll;
}
.nav-bar {
//   z-index: 9999;
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
.title {
  height: 100%;
  font-size: 30px;
  display: flex;
  align-items: center;
}
</style>
