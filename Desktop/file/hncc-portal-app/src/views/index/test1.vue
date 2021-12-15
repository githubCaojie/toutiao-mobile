<template>
    <div class="birthday ">
      <div class="top">
   <van-nav-bar :title="this.groupName" left-arrow     @click-left="onClickLeft"/>
    <van-search v-model="value" placeholder="搜索" />
    </div>


          <van-cell class="birthday-van-cell" v-for="item in this.personnelData"  @click="onClick(item.partyId)"  :key="item.partyId">
            <template #title>
              <div class="custom-title-div">  
                  <span class="custom-title">{{item.personName}}</span>
              <!-- </div>
               <div> -->
              <span class="custom-title1">{{item.personName}}</span>
              </div>
            </template>

             <template class="default" #default>
               <div>
                <van-icon  class="van-icon-test" name="arrow"  />
                </div>
                  <div>
                <span class="custom-label">{{item.str2}}</span>
                </div>
            </template>
               <template class="label" #label>
              <span class="custom-label">{{item.postName}}</span>
            </template>
          </van-cell>
 


 </div>
</template>
<!--通讯录  第三级 -->
<script>
import * as appBaseApi from "../../api/app-base";
import store from '@/store/store.js';
import axios from 'axios';
export default {

  data() {
    return {
      birIcon: require("../../assets/imgs/img1.png"),
      personnelData:'',
      groupName:'',
      partyId:'',
      value:'',
      finished:'',
        list: [
        {
          img: require("../../assets/imgs/del.png"),
          str: "王硕", 
          str1: "部长", 
        
        }, 
          {
          img: require("../../assets/imgs/del.png"),
          str: "张宁", 
          str1: "副部长", 
    
        }, 
          {
          img: require("../../assets/imgs/del.png"),
          str: "李双林", 
          str1: "干事", 
         
        }, 
           
      ],

     
    };
  },
  mounted() {
    document.querySelector('body').setAttribute('style', 'background-color:#f6f6f6')

      this.partyId=this.$store.state.addressBookList;
      this.groupName=this.$store.state.groupName;
       this.getPersonnelData(this.partyId);
  },

  destroyed() {
    // document.querySelector('body').setAttribute('style', 'background-color:#ffffff')
  },
  methods: {
       onClickLeft() {
       this.$router.go(-1);
    },
         onClick(partyId) {
           store.commit('setaddressBookList', partyId);
           this.$root.goPath('/organization');


    },
    //获取部门数据
    getPersonnelData(partyId){

      let params = {
                partyId: partyId,
            }
            appBaseApi.personnelData(params).then((res)=>{
              this.personnelData=res;
            })
    // let url = `http://222.244.147.108:56789/hncrsysconfig/api/organization/personnel?partyId=${partyId}`;
    // return new Promise((resolve, reject) => {
    //   axios.get(url).then(rdata => {
    //     this.personnelData=rdata.data;
    //     console.log("人员信息"+rdata.data[0].postName);
    //   }).catch(error => { 
    //     this.$toast('请求失败~');
    //   })
    // })
    
    }

  },
};
</script>
<style lang="scss" scoped>
  .birthday {
      width: 100vw;
      height: 100vh;
      // margin-top: 130px;
      //  overflow: hidden;
      overflow:auto;
  }
  .top {
      // position: fixed;
      // top: 0;
      // left: 0;
      // width: 100%;
      // height: 130px;
      // z-index: 500;
       margin-bottom: 5px;
}
 
.birthday-van-cell {

  width: 100vw;
  height: 75px;
  opacity: 1;
  display: flex;
  justify-content: space-between;
  align-items:center;
}

.birthday-van-cell  .custom-title-div{
  height: 55px;
    display: flex;
  justify-content: center;
  justify-content: flex-start;

}
.birthday-van-cell  .custom-title-div .custom-title{
  width: 44px;
  height: 44px;
  background: #004EA2;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items:center;
  align-content:center;
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #FFFFFF;
}
.birthday-van-cell .custom-title1 {
font-size: 16px;
font-family: Source Han Sans CN;
font-weight: 500;
color: #415261;
opacity: 1;
// margin-top: 5px;
margin-left: 8px;

}


/deep/ .van-cell__label {

   display: flex;
   justify-content: space-between;
   align-items:flex-end;
   margin-top: -20px;
   margin-left: 53px;
   font-size: 12px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #808E99;

}

// /deep/  .van-tabs__line{
// background-color:#003A7C;
// }

</style>