<template>
     <div class="addressbook">
      <van-nav-bar
              title="湖南少交通水得建设集团有限公司"
           
              left-arrow
        />
        <van-search v-model="value" shape="round" placeholder="搜索" />

           <div class="login-logo" @click="onClick(1)">
 
          <span class="label">湖南少交通水得建设集团有限公司</span>
          </div>
          <van-list
    
          :finished="finished"
          finished-text="没有更多了"
        
        >
          <van-cell v-for="item in list" :key="item" :title="item.str" >  <van-icon name="arrow"  /></van-cell>
      
        </van-list>
  </div>
</template>

<script>
import * as appBaseApi from "../../api/app-base";

export default {

  data() {
    return {
        list: [
        {
          img: require("../../assets/imgs/del.png"),
          str: "综合管理部",        
        }, 
               {
          img: require("../../assets/imgs/del.png"),
          str: "人力资源部",
        }, 
               {
          img: require("../../assets/imgs/del.png"),
          str: "财务资产部",
        }, 
            {
          img: require("../../assets/imgs/del.png"),
          str: "安全生产部",

        }, 
            {
          img: require("../../assets/imgs/del.png"),
          str: "企业发展部",
        }, 
         {
          img: require("../../assets/imgs/del.png"),
          str: "党群工作部",
        }, 

      ],

    };
  },
  mounted() {

  },
  methods: {
           onClick(type) {
               console.log("go b "+type);
              //  if(type==1){
              //      this.$root.goPath('/organization');
              //  }else if(type==2){
              //     this.$root.goPath('/organizationList');
              //  }else if(type==3){
              //     this.$root.goPath('/achieve');
              //  }
    },
  },
};
</script>
<style lang="scss" scoped>
.addressbook{
    background-color: rgb(231,234,237);
}
  .login-logo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: rgb(255, 255, 255);
}
  
   .login-logo span{
    font-family: SourceHanSansCN-Bold;
    font-size: 16px;
    font-stretch: normal;
    margin-left: 3.5vw;
    color: #181b1f;
  }
</style>