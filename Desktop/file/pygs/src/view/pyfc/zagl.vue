<template>
<div>
    <van-nav-bar
      left-text="返回"
      left-arrow
      class="nav-bar"
      @click-left="$router.go(-1)"
    />
    <div class="mains">
        <van-image
        class="img"
        v-for="(item, index) in 15"
        :key="index"
        :src="require('../../assets/img/zagl-' + ( index + 1 ) +  '.png') "
        />
    </div>
</div>
</template>

<script>
export default {
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
.img {
    width: 100%;
}
</style>