<template>
  <div class="app-full app-personal">
    <!-- <van-nav-bar @click-left="$root.appBack" title="" :border="false" left-arrow></van-nav-bar> -->
    <div class="nav-pd app-fs my">
      <span
        @click="changeTx"
        style="width: 70px;   height: 70px; border-radius: 50%; background: #f1f1f1; text-align: center; line-height: 70px; font-size: 18px; font-weight: 550; color: #004EA2;"
   
      >{{this.linkTel.personName}}</span>
      <ul>
        <li style="font-size: 16px;color: #FFFFFF; font-weight: 550;">{{this.linkTel.personName}}</li>
        <li style="font-size: 14px; margin: 10px 0;font-weight: 400;color: #A3BCD6;">
          {{this.linkTel.company}}
        </li>
         <li style="font-size: 12px;font-weight: 400;color: #EF8A54;display: inline-block;background: #fff;padding: 5px 8px;">
          {{this.linkTel.department+'-'+this.linkTel.postName}}
        </li>
      </ul>
    </div>
    <!-- <van-cell-group style="margin-top: 12px"> -->
      <van-cell :icon="ww"  @click="onClick(1)"  size="large"  title="我的信息" is-link >


      </van-cell>
      <van-cell :icon="rr" style="margin-top: 10px" size="large"  title="帮助指南" is-link />
    
      <van-cell  @click="onClick(4)" :icon="ee" size="large" title="设置" is-link />
    <!-- </van-cell-group> -->
  </div>
</template>

<script>

import store from '@/store/store.js';
import moment from "moment";
import appConstant from "../../utils/appConstant";

import * as appBaseApi from "../../api/app-base";

export default {


  data() {
    return {
        linkTel:'',
          name: "",
         ww: require("../../assets/imgs/main/ww.png"),
          rr: require("../../assets/imgs/main/rr.png"),
             ee: require("../../assets/imgs/main/ee.png"),
      tx: require('../../assets/imgs/tx.png'),
      weekStr: moment().format("dddd"),
      dayStr: moment().format("YYYY-MM-DD"),
    };
  },
  mounted() {
        let his = window.localStorage.getItem(appConstant.loginStorageId);
    if (his) {
      let userInfo = JSON.parse(his);
      this.iphone = userInfo.iphone;
    }
    this.getAddressData(this.iphone)
    // this.linkTel=this.$store.state.linkTel;

  
  },
  methods: {
              //获取用户地址
            getAddressData(linkTel){
                    let params = {
                          linkTel: linkTel,
                      }
                      appBaseApi.userData(params).then((res)=>{
                        this.linkTel=res;
                          console.log("this.linkTel"+this.linkTel.postName)
                      })
            },
             onClick(type) {
               console.log("go b "+type);
               if(type==1){
                   this.$root.goPath('/myMes');
               }else if(type==2){
                  this.$root.goPath('/organizationList');
               }else if(type==3){
                  this.$root.goPath('/test1');
               }else if(type==4){
                  this.$root.goPath('/test5');
               }
          

    },
    changeTx() {
      this.$router.push({
        path: "/changeTx",
      });
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
  background: #f1f1f1;
  // background: url("../../assets/imgs/main/bb.png") no-repeat;
  // background: url("../../assets/imgs/main/bb.png") center center / 96% 100% no-repeat;
  .my {
    
    height: 210px;
    padding-left: 20px;
    box-sizing: border-box;
    background: url("../../assets/imgs/main/mm.png") no-repeat;
  }
  ul {
    margin-left: 25px;

    li {
      font-size: 14px;
      color: white;
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