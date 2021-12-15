<template>
  <div class="app-full">
    <van-nav-bar @click-left="$root.appBack()" title="修改密码" :border="false" left-arrow></van-nav-bar>
    <div class="app-main">
      <app-input required v-model="oldTicket" type="password" label="旧密码：" />
      <app-input required v-model="newTicket" type="password" label="新密码：" />
      <app-input required v-model="newTicket2" type="password" label="确认新密码：" />
      <van-button type="info" size="large" @click.prevent="save()">修改</van-button>
    </div>
  </div>
</template>

<script>
import * as appbaseApi from "../../api/app-base";
export default {
  name: "changePwd",
  data() {
    return {
      oldTicket: "",
      newTicket: "",
      newTicket2: ""
    };
  },
  methods: {
    save() {
      if (!this.oldTicket || !this.newTicket) {
        this.$toast("请输入密码~");
        return;
      }
      if (this.newTicket != this.newTicket2) {
        this.$toast("两次密码不一致~");
        return;
      }
      let params = {
        oldTicket: this.oldTicket,
        newTicket: this.newTicket,
        firstLoad: 'N'
      };
      this.appCommon.tloading("修改中...");
      appbaseApi.changePwd(params).then(rdata => {
        this.$toast("修改成功~");
        this.$root.appBack();
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>