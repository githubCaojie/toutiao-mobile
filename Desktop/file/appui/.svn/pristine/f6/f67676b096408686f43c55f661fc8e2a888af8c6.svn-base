<template>
  <div class="app-full">
    <van-nav-bar @click-left="$root.appBack" title="登录确认" :border="false" left-arrow >
    </van-nav-bar>
    <div class="app-main">
      <div class="app-fc">
        <img class="dn-img" src="../../assets/imgs/dn.png" />
      </div>
      <div class="ts-text">
        Windows隧道云平台登录确认
      </div>
      <div class="btn-wrap">
        <van-button @click="comfirmLogin" type="primary">确认登录</van-button>
        <van-button @click="cancleLogin">取消登录</van-button>
      </div>
      
    </div>
  </div>
</template>

<script>
import { loginScan, loginConfirm } from '@/api/app-base'
export default {
  name: "scanLoginConfirm",
  data() {
    return {
      ewmCode:'',
      loginCode: '',
      userview: this.$store.getters['user/userview'],
    };
  },
  created(){
    this.ewmCode = this.$route.query.ewmCode;
    this.loginCode = this.userview.loginCode;
  },
  methods: {
    comfirmLogin(){
      let params = {
        id: this.ewmCode,
        loginCode: this.loginCode
      }
      loginConfirm(params).then(rdata => {
        this.$toast('登录成功~');
        this.$root.appBack(500)
      })
    },
    cancleLogin(){
      this.$root.appBack();
    }
  }
};
</script>

<style lang="scss" scoped>
.dn-img {
  width: 40vw;
  margin-top: 20px;
}
.btn-wrap {
  text-align: center;
  position: absolute;
  bottom: 30px;

  button {
    width: 51vw;
    margin-bottom: 20px;
  }
}
.ts-text {
  text-align: center;
  font-size: 15px;
  margin: 20px 0;
}
</style>