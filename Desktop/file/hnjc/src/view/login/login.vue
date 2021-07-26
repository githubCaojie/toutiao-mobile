<template>
  <div class="login">
    <div class="top">
      <p class="img logo"><el-image :src="require('@/assets/img/login/logo.png')"/></p>
      <div>
      </div>
    </div>
    <div class="content">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="0" class="demo-ruleForm">
        <div class="title">欢迎登陆！</div>
        <el-form-item prop="name">
          <p class="img icon"><el-image :src="require('../../assets/img/login/user_icon.png')"/></p>
          <el-input type="text" ref="name" v-model="ruleForm.name" placeholder="请输入用户名" autocomplete="off" @keyup.enter.native="focusKey('name')"></el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <p class="img icon"><el-image :src="require('../../assets/img/login/passwrod_icon.png')"/></p>
          <el-input type="password" ref="pass" v-model="ruleForm.pass" placeholder="请输入用密码" autocomplete="off" @keyup.enter.native="focusKey('pass')"></el-input>
        </el-form-item>
        <div class="checkbox">
          <el-checkbox v-model="keepPass">记住密码</el-checkbox>
        </div>
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
      </el-form>
    </div>
    <div class="bottom">
      <div class="container">
        版权所有：湖南省机场管理集团有限公司
      </div>
    </div>
  </div>
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
      return {
        ruleForm: {
          name: '',
          pass: '',
        },
        rules: {
          name: [
            { validator: validateName, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
        },
        visible: false,
        keepPass: false
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$router.push({
              path: 'home'
            })
            this.$message({
              type: 'success',
              message: '登录成功!',
            });
            this.ruleForm.name = ''
            this.ruleForm.pass = ''
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      focusKey(key) {
        if(key === 'name') {
          this.$refs.pass.focus()
        }else if(key === 'pass') {
          this.submitForm('ruleForm')
        }
      }
    }
  }
</script>

<style lang="less" scoped>
/deep/ .el-popover {
  min-width: unset !important;
}
.login {
  height: 100vh;
  background: url('../../assets/img/login/login_bg.png') top center / 100% calc(100% - 110px) no-repeat;
  .top {
    margin: 0 4.44vw;
    height: 120px;
    display: flex;
    align-items: center;
  }
  .content {
    height: calc(100% - 120px - 110px);
    position: relative;
    /deep/ .el-form {
      width: 380px;
      padding-bottom: 5vw;
      background: var(--white-color);
      position: absolute;
      right: 18vw;
      top: 50%;
      transform: translateY(-50%);
      .title {
        text-align: center;
        color: var(--blue-color);
        font-size: 16px;
        font-weight: bold;
        line-height: 56px;
        border-top: 6px solid #1f3666;
      }
      .el-form-item {
        width: 300px;
        margin: 24px auto 0 auto;
        .el-form-item__content {
          display: flex;
          align-items: center;
          border: 1px solid #dee1e3;
          .img.icon {
            display: flex;
            align-items: center;
            padding: 0 10px;
            height: 46px;
            background: #f0f2f5;
            border-right: 1px solid #dee1e3;
            margin-right: 10px;
            .el-image {
              width: 18px;
            }
          }
          .el-input__inner {
            border: unset;
            height: 44px;
            line-height: 44px;
            padding: 0 38px 0 0;
          }
        }
      }
      /deep/ .el-form-item:first-child {
        margin: 0 auto;
      }
      .checkbox {
        width: 300px;
        margin: 16px auto 48px;
        display: flex;
        justify-content: flex-end;
        .el-checkbox {
          color: #909090;
          font-size: 12px;
          display: flex;
          align-items: center;
          .el-checkbox__inner {
            width: 16px;
            height: 16px;
          }
          .el-checkbox__inner::after {
            height: 9px;
            left: 5px;
          }
        }
      }
      .el-button {
        display: block;
        width: 300px;
        height: 44px;
        margin: 0 auto;
        background: #3b70b3;
        border: unset;
        border-radius: unset;
      }
    }
  }
  .bottom {
    height: 110px;
    background: #003A7C;
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