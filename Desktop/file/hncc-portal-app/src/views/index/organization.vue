<template>
  <div class="app-full app-personal">
    
    <van-nav-bar  title="详情" :border="false" left-arrow   @click-left="onClickLeft"  @click-right="onClickRight">

      <template #right>
    <van-icon name="cross" size="18" />
  </template>
    </van-nav-bar>
    <div class="nav-pd app-fs my">

      <div class="head" style="width: 52px;height: 52px; line-height: 52px;background: #004EA2;border-radius: 50%;font-size: 16px;color: #FFFFFF;text-align: center;
font-weight: bold;">
        {{this.personnelDetails.personName}}
      </div>
        <ul>
        <li style="font-size: 16px;text-align: right;">{{this.personnelDetails.personName}}</li>
        <li style="font-size: 13px; margin: 10px 0 0;color: #808E99;text-align: right;">
         {{this.personnelDetails.company}}
        </li>
      </ul>
   
    </div>
      <van-cell title="企业/组织" :label="this.personnelDetails.company" />
      <van-cell title="部门" :label="this.personnelDetails.department" />
      <van-cell title="岗位" :label="this.personnelDetails.postName" />
      <van-cell title="姓名" :label="this.personnelDetails.personName" />
      <van-cell title="电话"  :label="this.personnelDetails.linkTel" > 
        
          <template #default>
            <!-- <van-icon class="organization-img"  name="../../assets/imgs/number_iphone.png " /> -->
            <img @click="callPhone" class="organization-img" src="../../assets/imgs/number_iphone.png" alt="">
            <!-- <a :href="'tel:' + 18600338603">call me</a> -->
          </template>
      </van-cell>
      <van-cell title="备注信息" label="无" />


  </div>
</template>

<script>
import * as appBaseApi from '../../api/app-base'
import moment from "moment";
import store from '@/store/store.js';
import axios from 'axios';
export default {
  name: "",
  data() {
    return {
      tx: require('../../assets/imgs/tx.png'),
      weekStr: moment().format("dddd"),
      dayStr: moment().format("YYYY-MM-DD"),
      personnelDetails:'',
      partyId:'',
      mylinkTel:'',
    };
  },
  mounted() {
    console.log(this.$store.getters['userView'])

      this.partyId=this.$store.state.addressBookList;
       this.getPersonnelDetailsData(this.partyId);
  },
  methods: {
        //获取部门数据
    getPersonnelDetailsData(partyId){

       let params = {
                partyId: this.partyId,
              
            }
            appBaseApi.organizationData(params).then((res)=>{
              this.personnelDetails=res;
                 console.log(res.postName+"人员详更新2"+JSON.stringify(res));
            })


    // let url = `http://192.168.6.103:8281/sysconfig/api/organization/personnelDetails?partyId=${partyId}`;
    //        console.log("人员信息 url"+url);
    // return new Promise((resolve, reject) => {
    //   axios.get(url).then(res => {
    //     this.personnelDetails=res.data;
        
    //     console.log("人员详情"+res.data.linkTel);
    //   }).catch(error => { 
    //     this.$toast('请求失败~');
    //   })
    // })
    
    },

       onClickLeft() {
       this.$router.go(-1);
    },

       onClickRight() {
       this.$router.go(-1);
    },
    changeTx() {
      this.$router.push({
        path: "/changeTx",
      });
    },
    callPhone(){
      if(this.personnelDetails.linkTel!=='-'){
        window.location.href = 'tel://'+this.personnelDetails.linkTel
      }else{
        this.$toast('没有可拨打的手机号~');
      }
    
    },
    changePwd() {
      this.$router.push({
        path: "/changePwd",
      });
    },
    checkVersion() {
      let version = this.$root.versionNum;
      this.appCommon.getLastVersion(version).then((rdata) => {
        let flag = rdata.serviceMsg;
        if (flag === "N") {
          this.appCommon.alert("提示", "您当前为最新版本~");
        } else {
          this.appCommon.checkVersion(version);
        }
      });
    },
    changeAccount() {
      this.$router.replace({
        path: "/",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.app-personal {
  background: #F2F4F7;

  .my {
    box-sizing: border-box;
    background-color: #ffffff;
    margin-bottom: 8px;
    padding: 19px 16px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .organization-img {
    width: 36px;
    height: 36px;
    border: 2px solid #1FC134;
    border-radius: 50%;
    opacity: 1;
    text-align: center;
    line-height: 36px;
  }
  ul {
    margin-left: 25px;

    li {
      font-size: 14px;
      
    color: #415261;
    }
    // li:nth-child(3) {
    //     border: 1px solid white;
    //     border-radius: 5px;
    //     padding: 2px 5px;
    //     margin-top: 10px;
    // }
  }
}
</style>