<template>
  <div class="test2">
   <van-nav-bar title="更换手机号码" left-arrow border="false"   @click-left="onClickLeft"/>

         <van-cell class="old-number" title="原号码" value="18600335252" />
            <van-cell-group>
            <van-field class="new-number"  v-model="value" label="新号码" placeholder="请输入新号码" />
          </van-cell-group>

          <van-button @click="login" class="test2-btn1" type="info" size="large">确认</van-button>
  </div>
</template>

<script>
  export default {
    name: 'test2',
    data() {
      return {
        val: '',
      }
    }
  }
</script>

<style lang="scss" scoped>
.test2 {
  width: 100vw;
  height: 100vh;
  background-color: #F2F4F7;
}
 /deep/ .van-field__control {
    text-align: right;
  }

  .van-cell {
    margin-top: 5px;
  }

  .test2-btn1 {
    width: 94vw;
    background: linear-gradient(91deg, #1F8ECD 0%, #003A7C 100%);
    opacity: 1;
    border-radius: 4px;
    margin: 3vh 3vw 0px 3vw;
  }
</style>