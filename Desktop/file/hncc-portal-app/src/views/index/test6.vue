<template>
 <div class="agenda">
      <van-nav-bar
  title="示例"
  left-arrow
  badge="5"
/>
  <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell v-for="item in list" :key="item" :title="item" />
      </van-list>
</van-pull-refresh>



 </div>
</template>

<script>
// import * as appBaseApi from "../../api/app-base";

export default {

  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
      birIcon: require("../../assets/imgs/img1.png"),
    };
  },
  mounted() {

  },
  methods: {
        onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }

        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;

        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
  
   onClickLeft() {
       this.$router.go(-1);
    },
  },
};
</script>
<style lang="scss" scoped>
/deep/ .van-pull-refresh{
  width: 100vw;
  // height: calc(100vh - 50px);
}

</style>