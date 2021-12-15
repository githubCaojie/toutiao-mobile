<template>
 <div class="agenda">
 <van-nav-bar
  title="办结"
  left-arrow
  @click-left="onClickLeft"
/>


    <van-cell-group >

  <van-cell class="my-van-cell" title="单据名称" value="XXX事务" />
  <van-cell class="my-van-cell"  title="单据编号" value="2021073114510034"  />
  <van-cell  title="单据描述"  label="XXXX事务具体内容具体内容具体内容具体内容具体内容具体内容具体内容具体内容具体内容具体内容具体内容" />
  <van-cell class="my-van-cell"  title="当前状态" value="待办"  />
  <van-cell class="my-van-cell"  title="提交时间" value="2021-07-09" />
  <van-cell class="my-van-cell"  title="发起人" value="周星"  />
  <van-cell class="my-van-cell"  title="优先级" value="高" />
   <van-cell  title="备注" label="加急" />
</van-cell-group>

<van-button @click="login" class="agenda-btn" type="default" size="large">驳回</van-button> <van-button @click="login" class="agenda-btn1" type="info" size="large">通过</van-button>
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
     onClickLeft() {
       this.$router.go(-1);
    },

    login(){
this.$router.go(-1);
    }
  },
};
</script>
<style lang="scss" scoped>
   .agenda{
    // background: #F2F4F7;
    overflow-y: auto;
    height: calc(100% - 1px);
 
  }
  .my-van-cell {
    height: 52px;
    background-color: #ffffff;
    margin-top: 10px;
 margin-bottom: 10px;
  }

    .agenda-btn {

    border: 0px;
    width: 25%;
    height: 45px;
    margin-left: 15%;
     background: linear-gradient(90deg, #dfe5ec 0%, #52575a 100%);
    border-radius: 0.18rem;
    margin-top: 0.64rem;
    margin-bottom: 00.64rem;
  }

     .agenda-btn1 {
    background: linear-gradient(90deg, #1F8ECD 0%, #003A7C 100%);
    border: 0px;
    width: 25%;
    height: 45px;
    margin-left: 15%;

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