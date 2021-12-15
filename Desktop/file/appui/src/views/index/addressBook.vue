<template>
     <div class="addressbook">
      <van-nav-bar
            title="通讯录"
            
        />
        <van-search v-model="value" shape="round" placeholder="搜索" />

           <div class="login-logo" @click="onClick(1)">
          <img src="../../assets/imgs/tx.png"  alt="">
          <span class="label">湖南少交通水得建设集团有限公司</span>
          </div>
        <van-cell @click="onClick(2)" is-link title="组织结构" />
        <van-cell @click="onClick(3)" is-link title="湖南少交通水得建设集团有限公司-综合部" />
  </div>
</template>

<script>
import * as appBaseApi from "../../api/app-base";

export default {

  data() {
    return {
  
    };
  },
  mounted() {

  },
  methods: {
           onClick(type) {
               console.log("go b "+type);
               if(type==1){
                   this.$root.goPath('/organization');
               }else if(type==2){
                  this.$root.goPath('/organizationList');
               }else if(type==3){
                  this.$root.goPath('/achieve');
               }
          

    },
  },
};
</script>
<style lang="scss" scoped>
  .login-logo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 7.5vw;
  margin-left: 5.5vw;
  padding-top: 25px;
  padding-bottom: 10px;
}
  .login-logo img{
    width: 40px;
	  height: 40px;
  
  }
   .login-logo span{
    font-family: SourceHanSansCN-Bold;
    font-size: 16px;
    font-stretch: normal;
    margin: 0 auto;

    color: #181b1f;
  }
</style>