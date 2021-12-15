<template>
  <div>
    <van-nav-bar
      left-text="返回"
      left-arrow
      class="nav-bar"
      @click-left="$router.go(-1)"
    />
    <div class="mains">
      <img v-for="img in imageList" :key="img" :src="img" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imageList: [
        require('./childImg/hycl/1.jpg'),
        require('./childImg/hycl/2.jpg'),
        require('./childImg/hycl/3.jpg'),
        require('./childImg/hycl/4.jpg'),
        require('./childImg/hycl/5.jpg'),
        require('./childImg/hycl/6.jpg'),
        require('./childImg/hycl/7.jpg'),
        require('./childImg/hycl/8.jpg'),
      ]
    }
  },
  mounted() {
    document.querySelector("body").setAttribute("style", "background-color:#f6f6f6");
  },
  methods: {
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