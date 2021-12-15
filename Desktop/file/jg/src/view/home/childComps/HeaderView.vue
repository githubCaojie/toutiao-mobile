<template>
  <el-header class="header">
    <div class="logo">
      <img src="@/assets/img/home/logo.svg" alt="">
      国资监管数据上报平台
    </div>
    <div class="right">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <img src="@/assets/img/home/head.svg" alt="">
          您好<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-close">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-row>
        <el-button><img src="@/assets/img/home/big.svg" alt=""></el-button>
        <el-button><img src="@/assets/img/home/lock.svg" alt=""></el-button>
        <el-button><img src="@/assets/img/home/off.svg" alt=""></el-button>
      </el-row>
    </div>
  </el-header>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  background: #EF8A54;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    font-size: 22px;
    font-weight: bold;
    color: #FFFFFF;
    opacity: 0.85;
    display: flex;
    align-items: center;
    img {
      margin-right: 10px;
    }
  }
  .right {
    display: flex;
    align-items: center;
    .el-dropdown {
      margin-right: 10px;
      .el-dropdown-link {
        display: flex;
        align-items: center;
        color: #ffffff;
        img {
          margin-right: 5px;
        }
      }
    }
    .el-button {
      background-color: transparent;
      border: unset;
      padding: unset;
    }
  }
}
</style>