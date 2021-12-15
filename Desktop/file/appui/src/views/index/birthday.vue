<template>
    <div class="birthday ">
   <van-nav-bar
    title="消息"
/>
<van-search v-model="value" placeholder="搜索" />
 <van-tabs >
  <van-tab title="待办">
 <van-card class="bir-van-card" @click="onClick(1)"
  desc="描述信息"
  title="单据名称"
>
  <!-- <template class="van-tag-name" #tags>
    <van-tag plain type="danger">标签</van-tag>
    <van-tag plain type="danger">标签</van-tag>

  </template> -->
  <!-- <template #footer>
    <van-button size="mini">按钮</van-button>
    <van-button size="mini">按钮</van-button>
  </template> -->
</van-card>
    </van-tab>
  <van-tab title="已办" class="bir-van-tab">

     <van-card @click="onClick(2)"
  desc="描述信息"
  title="单据名称"
  thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
>
  <template class="van-tag-name" #tags>
    <van-tag plain type="danger">标签</van-tag>
    <van-tag plain type="danger">标签</van-tag>
    <van-tag plain type="danger">标签</van-tag>
  </template>
  <!-- <template #footer>
    <van-button size="mini">按钮</van-button>
    <van-button size="mini">按钮</van-button>
  </template> -->
</van-card>
  </van-tab>
</van-tabs>
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
  
         onClick(type) {
               console.log("go b "+type);
               if(type==1){
                   this.$root.goPath('/agendaDetails');
               }else{
                  this.$root.goPath('/achieve');
               }
          

    },

  },
};
</script>
<style lang="scss" scoped>
  .birthday {
    width: 100%;
    background: #F2F4F7;
  
    span{
      color: #fff;
 
        font-size: 0.48rem;
    }
  }
  /deep/  .van-nav-bar .van-nav-bar__title{
 color: #415261;
}
  /deep/ .van-nav-bar {
      background: #fff;
      font-size: 20sp;
     color: #415261;
  }


/deep/  .van-multi-ellipsis--l2 {
  margin-top: 15px;
height: 20px;
background:url(../../assets/imgs/del.png)  right 1px no-repeat; 

  background-size: 20px 20px;
}

 /deep/  .van-tab__pane, .van-tab__pane-wrapper{
 border-radius: 1.5vw;
 padding: 10px;
 background-color: #fff;
}
.bir-van-tab {
  background-color: #F2F4F7;
}
  // .van-tag-name{
  //   float: right;
  // }

</style>