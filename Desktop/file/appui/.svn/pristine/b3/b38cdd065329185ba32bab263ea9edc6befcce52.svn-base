<template>
  <div class="app-main">
    <van-nav-bar title="注册" left-arrow @click-left="$root.appBack()" />
    <div class="app-main-content">
      <div class="zhuc">
        <h2 style="margin: 20% 0;text-align:center;">SONIC注册</h2>
        <div class="app-fb">
          <app-input style="width: 70%" v-model="model.tel" placeholder="请输入手机号码"/>
          <van-button @click="getValidCode" color="#FF976A" round size="small">{{btnText}}</van-button>
        </div>
        <app-input v-model="validCode" placeholder="请输入验证码"/>
        <app-input v-model="password" type="password" placeholder="请输入密码"/>
        <app-input v-model="password2" type="password" placeholder="确认密码"/>
        <van-button @click="regist" class="g-btn-large" style="margin-top:30px" round>注册</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { postAction } from "@/api/app-base";

export default {
  name: 'zhuc',
  data() {
    return {
      model: {},
      validCode: '',
      tel: '',
      password: '',
      password2: '',
      btnText: '获取验证码',
      timer: undefined,
      codeTime: 5,
    }
  },
  created(){
    this.initData();
  },
  methods: {
    getValidCode(){
      if (!this.tel) {
        this.$toast('请输入手机号码~');
        return;
      }
      let params = {
        tel: this.tel
      }
      this.appCommon.tloading();
      postAction('/rest/dx/send', params).then(rdata => {
        this.timer = setInterval(() => {
          this.codeTime -- ;
          this.btnText = this.codeTime + 's后重新获取';
          if (this.codeTime <= 0) {
            clearInterval(this.timer);
            this.btnText = '获取验证码';
            this.codeTime = 5;
          }
        },1000)
      })
      
    },
    initData(){
      let params = {
        dataWrap: JSON.stringify({})
      }
      postAction('/rest/qs/qsInfo/reg', params).then(rdata => {
        this.model = rdata.dataWraps.dataWrap.data;
      })
    },
    regist(){
      if (!this.password || this.password2) {
        this.$toast('请输入密码~');
        return;
      }
      if (this.password != this.password2) {
        this.$toast('两次密码不一致~');
        return;
      }
      let params = {
        dataWrap: JSON.stringify({
          data: this.model
        }),
        valicateCode: this.validCode
      }
      postAction('/rest/qs/qsInfo/regSave', params).then(rdata => {
        this.$toast('注册成功~');
        this.$root.appBack();
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.zhuc{
  padding: 0 10px;
}
</style>