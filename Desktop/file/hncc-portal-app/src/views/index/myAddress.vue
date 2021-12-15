<template>
     <div class="addressbook" >
      <van-nav-bar
            title="通讯录"
            
        />
        <van-search  shape="round" placeholder="搜索" />
           <div class="login-logo" >
          <img src="../../assets/imgs/main/a.png"  alt="">
          <span class="label">{{this.listData[0].allGroupName}}</span>
          </div>

          <van-cell  :icon="ll" size="large"    @click="onClick(1)" is-link  title="组织结构" />
                <van-cell    :icon="ll" size="large" is-link  @click="onClick(linkTel.bmPartyId)" :title="this.linkTel.company+'-'+this.linkTel.department" ></van-cell>
       
        
  </div>
</template>

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
        linkTel:'',
        partyId:'',
        iphone:'',
        listData: [
            {
                partyGroupId: "195099598979731456",
                partyId: "121271",
                allGroupName: "湖南省交通科学研究院有限公司",
                groupName: "湖南交科天颐科技有限公司",
                nameSpell: "交科天颐",
                childNodes: [
                    {
                      
                        partyId: "121293",
                        groupCode: "1105",
                        groupName: "研发部",
                        nameSpell: "研发部",
                        
                    }
                ],
               
            },

           ]


    };
  },
  mounted() {
    let his = window.localStorage.getItem(appConstant.loginStorageId);
    if (his) {
      let userInfo = JSON.parse(his);
      this.iphone = userInfo.iphone;
    }
    this.getAddressData(this.iphone)
  },
 
  methods: {
    //获取用户地址
   getAddressData(linkTel){
           let params = {
                linkTel: linkTel,
            }
            appBaseApi.userData(params).then((res)=>{
               this.linkTel=res;
            })
  },
      onClick(partyId) {
        if(partyId===1){
         this.$root.goPath('/addressBook');
        }else{
         store.commit('setaddressBookList', partyId);
         store.commit('setGroupName', this.linkTel.department);
        this.$root.goPath('/test1');
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
  padding-right: 10.5vw;
  padding-left: 5.5vw;
  margin-top: 15px;
   padding-top: 15px;
  padding-bottom: 15px;
    background-color: #ffffff;
}
  .login-logo img{
    width: 52px;
	  height: 32px;
  
  }
   .login-logo span{
    font-size: 16px;
    font-family: Source Han Sans CN;
    font-weight: 550;
    color: #415261;
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