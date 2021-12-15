<template>
     <div class="addressbook">
    
         <van-nav-bar class="title" :title="this.addressData.groupName"    @click-left="onClickLeft"    left-arrow    />
        <van-search  shape="round" placeholder="搜索" />
           <div class="login-logo" >
          <img src="../../assets/imgs/main/a.png"  alt="">
          <span class="label">{{this.addressData.groupName}}</span>
          </div>
        <van-cell  :icon="ll" size="large" v-for="item in this.addressData.childNodes" :key="item.bmPartyId"  @click="onClick(item.partyId,item.groupName)" is-link  :title="item.groupName" >
        </van-cell>
  </div>
</template>

<!--通讯录  第一级 -->
<script>
import * as appBaseApi from "../../api/app-base";
import store from '@/store/store.js';
import axios from 'axios';
import appConstant from "../../utils/appConstant";
export default {

  data() {
    return {
        ll: require("../../assets/imgs/main/ll.png"),
        addressData:'',
        iphone:'',
    };
  },
  mounted() {


       //获取数据  用于记住用户名  密码
    let his = window.localStorage.getItem(appConstant.loginStorageId);
    if (his) {
      let userInfo = JSON.parse(his);
      this.iphone = userInfo.iphone;
 
    }

        this.getAddressData();
  },
  methods: {
      onClick(partyId,groupName) {
        store.commit('setaddressBookList', partyId);
         store.commit('setGroupName', groupName);
        this.$root.goPath('/organizationList');
    },

    onClickLeft() {
       this.$router.go(-1);
    },
   getAddressData(){
     //this.$store.getters['userView'].data.userInfo.linkmenPhone
     console.log("登录信息1 beforeUpdate"+this.iphone);
       console.log("登录信息2 beforeUpdate"+this.$store.getters['userView'].data.userInfo.linkmenPhone);
       let params = {
        linkTel: this.iphone,
            }
            appBaseApi.institutionData(params).then((res)=>{
              this.addressData=res[0];
            })


    
  },
  },
};
</script>
<style lang="scss" scoped>
  .addressbook {
      width: 100vw;
      height: 100vh;
      overflow:auto;
  }
  .login-logo {
  display: flex;
  align-items: center;
  padding-right: 10.5vw;
  padding-left: 5.5vw;
  margin-top: 15px;
   padding-top: 15px;
  padding-bottom: 15px;
    background-color: #ffffff;
}
  .login-logo img{
    width: 42px;
	  height: 22px;
  
  }
   .login-logo span{
    font-size: 14px;
    font-family: Source Han Sans CN;
    font-weight: 550;
    color: #415261;
    padding-left: 10px;
  }

   /deep/ .van-icon__image {
    font-size: 12px;
    line-height: inherit;
      padding-top: 10px;
      padding-right: 5px;
  }

  /deep/ .van-cell--large .van-cell__title{
    font-size: 14px;
    font-family: Source Han Sans CN;
    font-weight: 550;
    line-height: 31px;
    color: #415261;
    opacity: 1;
    
  }
</style>