<template>
  <div class="login">
    <p class="img"><el-image :src="require('@/assets/img/logintitle.png')"/></p>
    <div class="login-content">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="0" class="demo-ruleForm">
        <h2 class="title">用户登录</h2>
        <el-form-item prop="name">
          <i class="label-icon el-icon-s-custom"></i>
          <el-input type="text" ref="name" v-model="ruleForm.name" placeholder="请输入用户名" autocomplete="off" @keyup.enter.native="focusKey('name')"></el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <i class="label-icon el-icon-s-promotion"></i>
          <el-input type="password" ref="pass" v-model="ruleForm.pass" placeholder="请输入用密码" autocomplete="off" @keyup.enter.native="focusKey('pass')"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="down-app">
      <el-popover
        placement="bottom"
        trigger="click">
        <div>
          <p class="img">
            <el-image :src="require('@/assets/img/ewmqr.png')"/>
          </p>
        </div>
        <el-button slot="reference" type="primary" icon="el-icon-search">客户端</el-button>
      </el-popover>
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
        visible: false
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
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
  width: 100%;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  .img {
    width: 650px;
    margin-left: 5%;
    margin-bottom: 10px;
  }
  .login-content {
    background: url('../../assets/img/loginbj.png') center center / 100% 100% no-repeat;
    padding: 50px 0;
    position: relative;
    /deep/ .el-form {
      max-width: 396px;
      min-width: 320px;
      margin: 0 auto;
      padding: 20px 60px;
      background: rgba(255,255,255,0.4);
      .title {
        text-align: center;
        color: #25406d;
        line-height: 50px;
      }
      .el-form-item__content {
        display: flex;
        align-items: center;
        .label-icon {
          font-size: 25px;
          color: #1f3b85;
          margin-right: 15px;
        }
      }
      .el-form-item__error {
        margin-left: 40px;
      }
      .el-button {
        width: 100%;
        background: #143b8a;
        border-color: #143b8a;
      }
    }
  }
  .down-app {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: 9;
  }
}
</style>