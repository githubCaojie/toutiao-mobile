<template>
  <div>
    <van-nav-bar
      left-text="返回"
      left-arrow
      class="nav-bar"
      @click-left="$router.go(-1)"
    />
    <div class="mains">
      <img v-for="(img, index) in imageList" :key="img" :src="img" @click="imageClickHandle(index)" />
    </div>
  </div>
</template>

<script>
import { ImagePreview } from "vant";

export default {
  data () {
    return {
      imageList: [
        require('./childImg/clap/1.jpg'),
        require('./childImg/clap/2.jpg'),
        require('./childImg/clap/3.jpg'),
        require('./childImg/clap/4.jpg'),
        require('./childImg/clap/5.jpg'),
        require('./childImg/clap/6.jpg'),
        require('./childImg/clap/7.jpg'),
        require('./childImg/clap/8.jpg'),
        require('./childImg/clap/9.jpg'),
        require('./childImg/clap/10.jpg'),
        require('./childImg/clap/11.jpg'),
        require('./childImg/clap/12.jpg'),
      ]
    }
  },
  mounted() {
    document.querySelector("body").setAttribute("style", "background-color:#f6f6f6");
  },
  methods: {
    imageClickHandle(i) {
      ImagePreview({
        images: [
        require('./childImg/clap/1.jpg'),
        require('./childImg/clap/2.jpg'),
        require('./childImg/clap/3.jpg'),
        require('./childImg/clap/4.jpg'),
        require('./childImg/clap/5.jpg'),
        require('./childImg/clap/6.jpg'),
        require('./childImg/clap/7.jpg'),
        require('./childImg/clap/8.jpg'),
        require('./childImg/clap/9.jpg'),
        require('./childImg/clap/10.jpg'),
        require('./childImg/clap/11.jpg'),
        require('./childImg/clap/12.jpg'),
        ],
        startPosition: i,
      });
    },
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
img {
  margin: 20px;
  width: calc(100% - 40px);
}
</style>