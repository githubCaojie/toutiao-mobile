<template>
 <div class="agenda">
      <van-nav-bar
  title="设置"
  left-arrow
  @click-left="onClickLeft"

  badge="5"
/>
   <van-cell-group >
  <van-cell class="my-van-cell" title="系统通知"  >
     <template #default>
       <van-switch v-model="checked"  />
     </template>
  </van-cell>
  <van-cell class="my-van-cell"  title="检查新版本" >
    <template #right-icon>
    <van-icon name="arrow" />
  </template>
</van-cell>
  <van-cell class="my-van-cell"  title="清除缓存" value="207M"  />

</van-cell-group>

  <!-- <img @click="$root.goPath('/offlinepic',{isEdit: 'N'})" src="../../assets/imgs/login/offline.png" alt=""/> -->
    
  
   
 <van-button @click="this.onback" class="test5-btn" type="info" size="large">退出账号</van-button>
 </div>
</template>

<script>
// import * as appBaseApi from "../../api/app-base";
// import appFileUtil from './appFileUtil';
import appFileUtil from '@/utils/appFileUtil';
export default {

  data() {
    return {
      model: {},
      birIcon: require("../../assets/imgs/img1.png"),
      checked:true,
    };
  },
  mounted() {

  },
  methods: {
   onClickLeft() {
       this.$router.go(-1);
    },
  takePic() {
      this.$refs.kqdaImgs.takePic(1);
    },
    onback(){
         console.log("登录中..1.")
   
           
               this.$router.go(-2); //退出app
  
        
          // navigator.app.exitApp(); //退出app
    }
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
  .my-van-cell {
    height: 52px;
    background-color: #ffffff;
    margin-top: 10px;
 margin-bottom: 10px;
  }
/deep/  .van-multi-ellipsis--l2 {
  margin-top: 15px;
height: 20px;
background:url(../../assets/imgs/del.png)  right 1px no-repeat; 

  background-size: 20px 20px;
}

  .test5-btn {
    
      background: linear-gradient(90deg, #1F8ECD 0%, #003A7C 100%);
    border: 0px;
    width: 85%;
    height: 45px;
    margin-left: 7.5%;
    border-radius: 0.18rem;
    margin-top: 1.44rem;
  }
  // .van-tag-name{
  //   float: right;
  // }

</style>