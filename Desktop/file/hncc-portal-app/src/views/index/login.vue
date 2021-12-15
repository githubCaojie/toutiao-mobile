<template>
  <div class="app-full login">
    <img class="logo" src="../../assets/imgs/logo.png" />
    <div class="login-wrap">
      <app-input
        class="input-small"
        :border="false"
        v-model="iphone"
        placeholder=" 输入手机号"
        label="+86"
        type="number"
      >
      </app-input>

<van-field
  center
      class="input-small"
      v-model="sms"
      :border="false"
      label="验证码"
      placeholder="请输入验证码"
      type="number"
>
  <template #button>
    <van-button @click="gainCode" size="small" type="primary">{{time}}</van-button>
  </template>
</van-field>


      <van-button @click="login" class="login-btn" type="info" size="large">登录</van-button>
    </div>
 


    <div class="offline-wrap">
      <img @click="$root.goPath('/offlinePic',{isEdit: 'N'})" src="../../assets/imgs/login/offline.png" alt=""/>
      <div>离线拍照1</div>
    </div>
  </div>
</template>

<script>
import * as appBaseApi from "../../api/app-base";
import appConstant from "../../utils/appConstant";
import { setToken, setRefToken } from '@/utils/auth';
import axios from 'axios';
export default {
  name: "login",
  data() {
    return {
      userName: "",
      password: "",
      unameIcon: require("../../assets/imgs/login/uname.png"),
      pwdIcon: require("../../assets/imgs/login/pwd.png"),
      rempwd: true,
      isClick: true,
      time: '获取验证码',
      iphone: '',
      sms: '',
      iphoneData:'',

    };
  },
  mounted() {
    //获取数据  用于记住用户名  密码
    let his = window.localStorage.getItem(appConstant.loginStorageId);
    if (his) {
      let userInfo = JSON.parse(his);
      this.userName = userInfo.userName;
      this.password = userInfo.password;
    }
  },
  methods: {
//获取用户地址
   getAddressData(linkTel){
           let params = {
                linkTel: this.iphone,
            }
            appBaseApi.userData(params).then((res)=>{
               this.$store.commit("SET_TEL", res);
              //  this.$store.commit("user/SET_AUTHORITY", res);
               console.log("用户信息"+JSON.stringify(res));
            })

    // let url = `http://222.244.147.108:56789/hncrsysconfig/api/organization/personnelInfo?linkTel=${linkTel} `;

    
  },


   async gainCode() {
      console.log('手机号码~'+this.isClick);
      if (this.isClick) {
          if (/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(this.iphone)) {
          const res = await this.sendVerifyCode( this.iphone )  // 获取验证码接口
        } else {
            this.$toast('请输入正确的手机号码~');
        }
      }
    },
  sendVerifyCode(iphone){
         let params = {
           mobile: this.iphone,
            }
          appBaseApi.loginCode(params).then((rdata)=>{
               this.iphoneData=rdata.data;
               console.log("验证码："+JSON.stringify(rdata));
              if(rdata.status==200){
                      this.$toast("验证码："+rdata.data);
                        this.isClick = false
                        let s = 300
                        this.time = s + 's'
                        let interval = setInterval(() => {
                          s--
                          this.time = s + 's'
                          if (s < 0) {
                            this.time = '重新获取'
                            this.isClick = true
                            clearInterval(interval)
                          }
                        }, 1000)
                    }else{
                      this.$toast(''+rdata.message);
                    }
           })



    // let gmapkey = appConstant.gmapkey;
   
    // let url = `http://222.244.147.108:56789/portalServer/menhu/getCode?mobile=${iphone}`;
    //   console.log("验证码：url"+url);
    // // let url = `http://124.117.223.3:8050/StandardApiAction_login.action?account=admin&password=aircas2020@`;
    // return new Promise((resolve, reject) => {
    //   axios.get(url).then(rdata => {
    //     this.iphoneData=rdata.data;
    //     if(rdata.data.status==200){
    //              this.$toast("验证码："+rdata.data.data);
    //              console.log("验证码："+rdata.data.data);
    //               this.isClick = false
    //               let s = 300
    //               this.time = s + 's'
    //               let interval = setInterval(() => {
    //                 s--
    //                 this.time = s + 's'
    //                 if (s < 0) {
    //                   this.time = '重新获取'
    //                   this.isClick = true
    //                   clearInterval(interval)
    //                 }
    //               }, 1000)
    //           }else{
    //             this.$toast(''+rdata.data.message);
    //           }
         
    //   }).catch(error => { 
    //     this.$toast('请求失败~');
    //   })
    // })
    
  },



    login() {
  
       
         //接口通了要删除掉
     this.getAddressData(this.iphone);
      
  //  this.$router.push({
  //           path: "/appIndex",
  //           });
        if(this.sms.length>0){
        let params = {
                mobile: this.iphone,
                code:this.sms,
            }
            appBaseApi.loginCodeIn(params).then((res)=>{
                console.log("登录信息"+JSON.stringify(res));
              if(res.status==200){
              this.$store.commit("user/SET_USERVIEW", res);

                  window.localStorage.setItem(
                    appConstant.loginStorageId,
                    JSON.stringify({
                      iphone: this.iphone,
                   
                    })
                  );
                 this.$router.push({
                  path: "/appIndex",
                  });
              }else{
                this.$toast(''+res.message);
              }
             
            })

        // let url = `http://222.244.147.108:56789/portalServer/menhu/login?mobile=${this.iphone}&code=${this.sms}`;
        //   return new Promise((resolve, reject) => {
        //     axios.get(url).then(rdata => {

        //       if(rdata.data.status==200){
        //          this.$router.push({
        //           path: "/appIndex",
        //           });
        //       }else{
        //         this.$toast(''+rdata.data.message);
        //       }
              
        //     }).catch(error => { 
        //       this.$toast('请求失败111~');
        //     })
        //   });
           }else{
             this.$toast('请输入验证码');
           }
      // if( this.sms===this.iphoneData.data){
      //     this.$router.push({
      //       path: "/appIndex",
      //       });
      // }else{
      //      this.$toast('验证码不正确');
      // };
          console.log(this.sms.length +"       ``fcsdf``        "+this.iphoneData.data);


    
          
  
      // this.$router.push({
      //     path: "/test1",
      //   });return ;
         
      // let params = {
      //   userName: 'admin',
      //   password: '1234qwer',
      //   moduleId: appConstant.moduleId, //模块名称
      // };
      // this.appCommon.tloading("登录中...");
  
      // appBaseApi.login(params).then((rdata) => {      
      //   let userView = rdata.parameters.userView;
      //   userView.avatarUrl = "";
      //   let authority = rdata.parameters.rightItems;
      //   console.log(rdata.data)
      //   this.$store.commit("user/SET_USERVIEW", userView);
      //   this.$store.commit("user/SET_AUTHORITY", authority);
      //   let contentToken = rdata.parameters['content-token'];
      //   let refToken = rdata.parameters['content-token_ref'];
      //   console.log(setToken)
      //   setToken(contentToken)
      //   setRefToken(refToken)
      //   window.localStorage.setItem(
      //     appConstant.loginStorageId,
      //     JSON.stringify({
      //       userName: this.userName,
      //       password: this.password,
      //     })
      //   );
      //   // this.initJpush(userView.partyId);
      // });
    },
 
  },
};
</script>
<style lang="scss" scoped>
/deep/ .van-field__left-icon .van-icon, .van-field__right-icon .van-icon{
  font-size: 0.6rem;
}

/deep/  .van-field__label {
    
    width: 3.2em; 
   


}
.login {
  background: url("../../assets/imgs/login/login-bg.png") no-repeat;
  background-size: cover;

  .logo {
    display: block;
    padding-top: 130px;
    width: 34vw;  
    margin: 0 auto;
  }

  .login-wrap {
    padding-top: 30px;
    width: 92vw;
    height: 300px;
    box-sizing: border-box;
    border-radius: 1.5vw;
    margin: 0 auto;
    margin-top: 10px;
    overflow: hidden;
  }
  .input-small {
    width: 92%;
     background-color: transparent;
    height: 40px;
    border-radius: 5px;
    padding: 7px;
    margin: 0 auto;
    margin-top: 20px;
    // border-radius: 20px;
    overflow: hidden;
    border-bottom: 1px solid #DDE5EB;
  }


  .remember {
    display: none;
    margin-left: 7.5vw;
    margin-top: 10px;
    span {
      color:white;
      margin-left: 5px;
    }
  }
  .login-btn {
    
      background: linear-gradient(90deg, #1F8ECD 0%, #003A7C 100%);
    border: 0px;
    width: 85%;
    height: 45px;
    margin-left: 7.5%;
    border-radius: 0.18rem;
    margin-top: 1.44rem;
  }

  .between {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 5.5vw;
  margin-left: 5.5vw;
  padding-top: 15px;
}
  .account .register {
  color: #1F8ECD;
}

 .footer {

  position: absolute;
  bottom: 0.96rem;
  width: 8.46rem;
  margin-left: 30px;

}
 .footer {
    
  display: flex;
  align-items: center;
  justify-content: space-between;
}
 .footer .rest-login-btn {
  width: 1.22rem;
  height: 1.22rem;
  display: flex;
  align-items: center;
  border-radius: 50%;
  background: #fff;
  border: 1px solid #808E99;
  flex: 0 0 1.32rem;
}
 .footer .rest-login-btn img {
  margin: 0 auto;
}
 .footer .rest-login-btn .wechat-icon {
  width: 0.6097rem;
  height: 0.6448rem;
}
 .footer .rest-login-btn .qq-icon {
  width: 0.6097rem;
  height: 0.7219rem;
}
 .footer .rest-login-text {
  font-size: 0.38rem;
  color: #AAB6C0;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
 .footer .rest-login-text b {
  height: 0.03rem;
  width: 1.5rem;
  background: linear-gradient(270deg, #DDE5EB 0%, rgba(221, 229, 235, 0) 100%);
  display: inline-block;
  margin: 0 0.1rem;
}
 .footer .rest-login-text b:last-child {
  background: linear-gradient(90deg, #DDE5EB 0%, rgba(221, 229, 235, 0) 100%);
}

  .offline-wrap {
    display: none;
    text-align: center;
    img {
      width: 80px;
      height: 80px;
    }
    div {
      color: white;
      font-size: 18px;
      margin-top: 5px;
    }
  }
}
</style>