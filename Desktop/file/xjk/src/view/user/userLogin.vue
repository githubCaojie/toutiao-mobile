<template>
  <el-container class="login">
    <el-main class="login-main">
      <div class="content">
        <el-image :src="require('../../assets/img/login/logo.png')"/>
        <div class="login-form">
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="0"
          >
          
            <div class="title">系统用户登录</div>
            <el-form-item class="form-item" prop="mobile">
              <p class="img icon"><el-image :src="require('../../assets/img/login/user_icon.png')"/></p>
              <el-input
                class="form-input"
                type="text"
                ref="mobile"
                v-model="ruleForm.mobile"
                placeholder="请输入手机号"
                :validate-event="false"
                @keyup.enter.native="submitForm('ruleForm')"
              ></el-input>
            </el-form-item>
            <el-form-item class="form-item" prop="code">
              <p class="img icon"><el-image :src="require('../../assets/img/login/passwrod_icon.png')"/></p>
              <el-input
                class="form-input"
                type="text"
                ref="code"
                v-model="ruleForm.code"
                placeholder="请输入验证码"
                :validate-event="false"
                @keyup.enter.native="submitForm('ruleForm')"
              >
                <template slot="append">
                  <el-button v-show="!ruleForm.codeViewShow" class="code-btn" @click="getCodehandler">获取验证码</el-button>
                  <el-button disabled v-show="ruleForm.codeViewShow" class="code-btn">{{ruleForm.codeTime}}s</el-button>
                </template>
              </el-input>
            </el-form-item>
            <el-button class="loginSubmit" type="primary" @click="submitForm('ruleForm')" :loading="ruleForm.isLoginLoading">{{ruleForm.isLoginLoading == false ? '登录' : '登录中'}}</el-button>
          </el-form>
        </div>
      </div>
    </el-main>
    <el-footer class="bottom"><div class="container">版权所有：湖南省交通水利建设集团有限公司</div></el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      ruleForm: {
        mobile: '',
        code: '',
        correctCode: '',
        codeTime: 60,
        codeViewShow: false,
        getCodeNum: 0,
        isLoginLoading: false
      },
      rules: {
        mobile: [
          { required: true, message: '请输入手机号' },
          { min: 11, message: '手机号长度不足' },
          { required: true, pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号' },
        ],
        code: [
          { required: true, message: '请输入验证码' }
        ]
      },
    };
  },
  methods: {
    // 获取验证码
    getCodehandler() {
      this.$refs.ruleForm.validateField('mobile', err => {
        if(!err) {
          let params = {
            mobile: this.ruleForm.mobile,
          }
          // 判断用户是否存在
          this.request.post(this.api.hasUser, params).then(res => {
            if(res.status == 200) {
              // 验证码接口以及处理
              this.request.post(this.api.getCode, params).then(res => {
                if(res.status == 200) {
                  this.ruleForm.codeViewShow = true
                  this.ruleForm.getCodeNum ++
                  // 验证码计时
                  this.timer = setInterval(() => {
                    this.ruleForm.codeTime --
                    if(this.ruleForm.codeTime === 0){
                      clearInterval(this.timer)
                      this.ruleForm.codeViewShow = false
                      this.ruleForm.codeTime = 60
                    }
                  },1000)
                }else {
                  this.$message(res.message)
                }
              })
            }else {
              this.$message(res.message)
            }
          })
        }
      })
    },
    // 登录
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 登录校验接口与处理
          let params = {
            mobile: this.ruleForm.mobile,
            code: this.ruleForm.code
          }
          this.ruleForm.isLoginLoading = true
          this.request.post(this.api.login, params)
          .then(res => {
            if(res.status == 200) {
              let userInfo = res.data.userInfo
              userInfo.loginId = res.data.loginId
              let token = res.data.token
              // 将userInfo保存到Vuex
              this.$store.commit('handleUserInfo', userInfo)
              this.$store.commit('handleToken', token)
              this.$message({
                type: 'success',
                message: '登录成功!',
              })
              this.ruleForm.isLoginLoading = false
              // 跳转至门户首页
              this.$router.push({
                name: 'home'
              })
            }else {
              this.$message.error('错误：' + res.message)
              this.ruleForm.isLoginLoading = false
            }
          })
        }
      })
    }
  }
  
}
</script>

<style lang="less" scoped>
#color() {
  title: #555;
  from: #cbcbd5;
  button: #fff;
}
#width() {
  codewidth: 94px;
  lebalwidth: 18px;
  fromwidth: 396px;
  fromitemwidth: 300px;
}
#height() {
  fromheight: 44px;
}
@max768: ~"(max-width: 768px)";
.login {
  height: 100vh;
  background: url('../../assets/img/login/login_bg.png') center center / 100% 100% no-repeat;
  .login-main {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: unset;
    .content {
      display: flex;
      flex-direction: column;
      width: #width[fromwidth];
      margin: 0 10%;
      @media @max768 {
        margin: 0 auto;
        width: 100vw;
      }
      .login-form {
        padding: 20px;
        margin-top: 20px;
        background-color: rgba(255,255,255,0.4);
        /deep/ .el-form {
          width: 100%;
          padding-bottom: 7vh;
          background: rgba(255,255,255,0.7);
          .title {
            text-align: center;
            color: #color[title];
            font-size: 20px;
            font-weight: bold;
            line-height: 70px;
          }
          .form-item {
            width: #width[fromitemwidth];
            margin: 0 auto 24px;
            background-color: #fff;
            border: 1px solid #dee1e3;
            @media @max768 {
              width: 96%;
              margin: 0 2% 24px;
            }
            .el-form-item__content {
              display: flex;
              align-items: center;
              .img.icon {
                display: flex;
                align-items: center;
                margin: 0 10px;
                .el-image {
                  width: #width[lebalwidth];
                }
              }
              .form-input {
                width: calc(100% - 38px);
                .el-input__inner {
                  border: unset;
                  height: #height[fromheight];
                  line-height: #height[fromheight];
                  padding: 0 38px 0 0;
                }
                .el-input-group__append {
                  padding: 0;
                  border: unset;
                  .form-item-code {
                    width: #width[codewidth];
                    height: #height[fromheight];
                    display: block;
                  }
                  .code-btn {
                    margin: 0;
                    border: unset;
                  }
                }
              }
              .el-form-item__error {
                text-indent: 38px;
                padding-top: 0;
                line-height: 26px;
              }
            }
          }
          .loginSubmit {
            display: block;
            width: #width[fromitemwidth];
            height: #height[fromheight];
            margin: 0 auto;
            background: #EF7230;
            border: unset;
            color: #color[button];
            border-radius: unset;
            @media @max768 {
              width: 96%;
              margin: 0 auto;
            }
          }
        }
      }
    }
  }
  .bottom {
    .container {
      font-size: 14px;
      color: #ffffff;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>