<template>
 <div class="agenda">
      <van-nav-bar
  title="待办"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
  badge="5"
/>
    <van-cell-group >

  <van-cell title="单据名称" value="内容" label="描述信息" />
  <van-cell title="单据编号" value="内容" label="描述信息" />
  <van-cell title="单据描述" value="内容" label="描述信息" />
  <van-cell title="当前状态" value="内容" label="描述信息" />
  <van-cell title="提交时间" value="内容" label="描述信息" />
  <van-cell title="发起人" value="内容" label="描述信息" />
  <van-cell title="优先级" value="内容" label="描述信息" />
   <van-cell title="备注" value="内容" label="描述信息" />
</van-cell-group>

<van-button @click="login" class="agenda-btn" type="info" size="large">登录</van-button>
 </div>
</template>

<script>
// import * as appBaseApi from "../../api/app-base";

export default {

  data() {
    return {
      birIcon: require("../../assets/imgs/img1.png"),
    };
  },
  mounted() {

  },
  methods: {
  
  },
};
</script>
<style lang="scss" scoped>
   .agenda{
    background: #f9f9f9;
    overflow-y: auto;
    height: calc(100% - 1px);
 
  }

    .agenda-btn {
    background: linear-gradient(90deg, #1F8ECD 0%, #003A7C 100%);
    border: 0px;
    width: 85%;
    height: 45px;
    margin-left: 7.5%;
    border-radius: 0.18rem;
    margin-top: 0.64rem;
    margin-bottom: 00.64rem;
  }

/deep/  .van-multi-ellipsis--l2 {
  margin-top: 15px;
height: 20px;
background:url(../../assets/imgs/del.png)  right 1px no-repeat; 

  background-size: 20px 20px;
}
  // .van-tag-name{
  //   float: right;
  // }

</style>