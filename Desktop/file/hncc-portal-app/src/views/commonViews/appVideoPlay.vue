<template>
  <div class="app-full">
    <van-nav-bar @click-left="$root.appBack()" title="视频播放" left-arrow />
    <div class="app-main">
      <video
        id="video"
        style="width: 100vw"
        preload="auto"
        autoplay="true"
        controls="true"
        webkit-playsinline="true"
        playsinline
        x5-video-player-type="h5"
        x5-video-player-fullscreen="true"
        x5-video-orientation="portraint"
        :src="videoUrl"
      ></video>
    </div>
  </div>
</template>

<script>
export default {
  name: "appVideoPlay",
  data() {
    return {
      videoUrl: "",
    };
  },
  created() {
    this.videoUrl = this.$route.query.videoUrl;
    console.log(this.videoUrl);
  },
};
</script>

<style lang="scss" scoped>
</style>