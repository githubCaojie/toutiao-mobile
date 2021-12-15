<template>
  <div class="app-full login">
    <img class="logo" src="../../assets/imgs/logo.png" />
    <div class="login-wrap">
      <app-input
        class="input-small"
        :border="false"
        v-model="userName"
        type="text"
        placeholder=" 用户名"
      
        name="userName"
        :left-icon="unameIcon"
        size="large"
        
      >

      </app-input>
      <app-input
        class="input-small"
        :border="false"
        v-model="password"
        type="password"
        placeholder=" 登录密码"
        name="password"
        :left-icon="pwdIcon"
        size="large"
      />

  <div class="account between">
          <a class="register" href="javascript:;">注册用户</a>
          <a class="forget-pass" href="javascript:;">忘记密码</a>
        </div>

      <div class="app-fs remember">

        <van-checkbox
          v-model="rempwd"
          color="white"
          shape="square"
          icon-size="16px"
          ></van-checkbox>
          <span>记住密码</span>
      </div>
      <van-button @click="login" class="login-btn" type="info" size="large">登录</van-button>
    </div>
  <div class="footer">
      <van-button class="rest-login-btn"><img class="wechat-icon" src="../../assets/imgs/wechaticon.png" alt=""></van-button>
      <div class="rest-login-text"><b></b>其他登录方式<b></b></div>
      <van-button class="rest-login-btn"><img class="qq-icon" src="../../assets/imgs/qqicon.png" alt=""></van-button>
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
import { setToken, setRefToken } from '@/utils/auth'
export default {
  name: "login",
  data() {
    return {
      userName: "",
      password: "",
      unameIcon: require("../../assets/imgs/login/uname.png"),
      pwdIcon: require("../../assets/imgs/login/pwd.png"),
      rempwd: true,
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
    login() {
          console.log("登录中...")
      // this.$router.push({
      //     path: "/test1",
      //   });return ;
      let params = {
        userName: this.userName,
        password: this.password,
        moduleId: appConstant.moduleId, //模块名称
      };
      this.appCommon.tloading("登录中...");
  
      appBaseApi.login(params).then((rdata) => {
               
        let userView = rdata.parameters.userView;
        userView.avatarUrl = "";
        let authority = rdata.parameters.rightItems;
        console.log(authority)
        this.$store.commit("user/SET_USERVIEW", userView);
        this.$store.commit("user/SET_AUTHORITY", authority);
        let contentToken = rdata.parameters['content-token'];
        let refToken = rdata.parameters['content-token_ref'];
        console.log(setToken)
        setToken(contentToken)
        setRefToken(refToken)
        window.localStorage.setItem(
          appConstant.loginStorageId,
          JSON.stringify({
            userName: this.userName,
            password: this.password,
          })
        );
        this.$router.push({
          path: "/appIndex",
        });
        // this.initJpush(userView.partyId);
      });
    },
    initJpush(perPartyId) {
      try {
        window.JPush.init();
        window.JPush.setDebugMode(false);
        if (device.platform != "Android") {
          window.JPush.setApplicationIconBadgeNumber(0);
        }
        window.JPush.setAlias(
          { sequence: 1, alias: perPartyId },
          function (result) {},
          function (error) {
            console.log(error);
          }
        );
      } catch (exception) {
        console.log(exception);
      }
      document.addEventListener(
        "jpush.openNotification",
        (event) => {
          console.log(event);
          let extras = event.extras;
          let MSG_TYPE = extras.MSG_TYPE;
          let path = "";
          switch (MSG_TYPE) {
            case "1": {
              path = "/flowIndex";
              break;
            }
            case "2": {
              path = "/linsjcList";
              break;
            }
            default: {
              path = "/appIndex";
            }
          }
          this.$router.push({
            path: path,
          });
        },
        false
      );
    },
  },
};
</script>
<style lang="scss" scoped>
/deep/ .van-field__left-icon .van-icon, .van-field__right-icon .van-icon{
  font-size: 0.6rem;
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