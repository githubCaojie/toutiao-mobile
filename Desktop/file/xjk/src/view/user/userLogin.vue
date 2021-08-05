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
            <el-form-item class="form-item" prop="name">
              <p class="img icon"><el-image :src="require('../../assets/img/login/user_icon.png')"/></p>
              <el-input
                class="form-input"
                type="text"
                ref="name"
                v-model="ruleForm.name"
                placeholder="请输入用户名"
                @keyup.enter.native="submitForm('ruleForm')"
              ></el-input>
            </el-form-item>
            <el-form-item class="form-item" prop="pass">
              <p class="img icon"><el-image :src="require('../../assets/img/login/passwrod_icon.png')"/></p>
              <el-input
                class="form-input"
                type="password"
                ref="pass"
                v-model="ruleForm.pass"
                placeholder="请输入密码"
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
                @keyup.enter.native="submitForm('ruleForm')"
              >
                <template slot="append">
                  <el-image class="form-item-code" :src="require('../../assets/img/login/validateCode.png')"/>
                </template>
              </el-input>
            </el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
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
    var validateName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账号!'));
      }else {
        callback()
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码!'));
      }else {
        callback()
      }
    };
    var validateCode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入验证码'))
      }else if(value !== this.ruleForm.correctCode) {
        callback(new Error('请输入正确的验证码'))
      }else {
        callback()
      }
    }
    return {
      ruleForm: {
        name: '',
        pass: '',
        code: '',
        correctCode: 'a44t'
      },
      rules: {
        name: [
          { validator: validateName, trigger: 'blur' }
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        code: [
          { validator: validateCode, trigger: 'blur' }
        ]
      },
      visible: false
    };
  },
  methods: {
    // 点击登录
    submitForm(formName) {
      console.log(this.$refs[formName])
      this.$refs[formName].validate((valid) => {
        console.log(valid)
        if (valid) {
          this.login(this.ruleForm)
        } else {
          return console.log('error submit!!');
        }
      });
    },
    // 登录接口
    login(ruleForm) {
      console.log(ruleForm)
      this.$router.push({
        name: 'home'
      })
      this.$message({
        type: 'success',
        message: '登录成功!',
      });
      this.ruleForm.name = ''
      this.ruleForm.pass = ''
      this.ruleForm.code = ''
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
.login {
  height: 100vh;
  background: url('../../assets/img/login/login_bg.png') center center / 100% 100% no-repeat;
  .login-main {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .content {
      display: flex;
      flex-direction: column;
      width: #width[fromwidth];
      margin: 0 10%;
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
                .el-input__inner {
                  border: unset;
                  height: #height[fromheight];
                  line-height: #height[fromheight];
                  padding: 0 38px 0 0;
                }
                .el-input-group__append {
                  padding: 0;
                  .form-item-code {
                    width: #width[codewidth];
                    height: #height[fromheight];
                    display: block;
                  }
                }
              }
            }
          }
          .el-button {
            display: block;
            width: #width[fromitemwidth];
            height: #height[fromheight];
            margin: 0 auto;
            background: #EF7230;
            border: unset;
            color: #color[button];
            border-radius: unset;
          }
        }
      }
    }
  }
  .bottom {
    .container {
      font-size: var(--the-body-font-size);
      color: var(--white-color);
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>