<template>
     <div class="addressbook">
      <van-nav-bar class="title" :title="this.groupName"    @click-left="onClickLeft"    left-arrow    />
        <van-search  placeholder="搜索" />
          <van-list    finished-text="没有更多了">
          <van-cell  class="my-van-cell" v-for="item in this.departmentData" @click="onClick(item.partyId,item.groupName)"  :key="item.partyId">
            <template #title>
              <span class="custom-title">{{item.groupName}}</span>
              <van-tag type="danger" v-if="item.personNum" class="num">({{item.personNum}})</van-tag>
            </template>
            <van-icon name="arrow"  />
          </van-cell>
        </van-list>
  </div>
</template>
<!--通讯录  第二级 -->
<script>
import * as appBaseApi from "../../api/app-base";

import store from '@/store/store.js';
import axios from 'axios';
export default {

  data() {
    return {
      partyId:'',
      groupName:'',
      departmentData:'',
        list: [
        {
          img: require("../../assets/imgs/del.png"),
          str: "综合管理部", 
          num: 15,
          id:1,       
        }, 
               {
          img: require("../../assets/imgs/del.png"),
          str: "人力资源部",
          num: 15 ,
          id:2,
        }, 
               {
          img: require("../../assets/imgs/del.png"),
          str: "财务资产部",
          num: 15  ,
          id:3,     
        }, 
            {
          img: require("../../assets/imgs/del.png"),
          str: "安全生产部",
          num: 15 ,
          id:4,      

        }, 
            {
          img: require("../../assets/imgs/del.png"),
          str: "企业发展部",
          num: 15 ,
          id:5,      
        }, 
         {
          img: require("../../assets/imgs/del.png"),
          str: "党群工作部",
          num: 15 ,
          id:6,      
        }, 
         {
          img: require("../../assets/imgs/del.png"),
          str: "纪检部",
          num: 15 ,
          id:7,      
        }, 
              {
          img: require("../../assets/imgs/del.png"),
          str: "投资经营部",
          num: 15 ,
          id:8,      
        }, 
         {
          img: require("../../assets/imgs/del.png"),
          str: "审计法务部",
          num: 15 ,
          id:9,      
        }, 
         {
          img: require("../../assets/imgs/del.png"),
          str: "投资项目管理部",
          num: 15 ,
          id:10,      
        }, 
         {
          img: require("../../assets/imgs/del.png"),
          str: "海外事业部",
          num: 15 ,
          id:11,      
        }, 






      ],

    };
  },
  mounted() {
       this.partyId=this.$store.state.addressBookList;
       this.groupName=this.$store.state.groupName;

 console.log("总部门信息"+this.partyId);
       this.getDepartmentData(this.partyId);
  },
  methods: {
           onClick(partyId,groupName) {
            store.commit('setaddressBookList', partyId);
            store.commit('setGroupName', groupName);
            this.$root.goPath('/test1');
    },
     onClickLeft() {
       this.$router.go(-1);
    },
//获取部门数据
    getDepartmentData(partyId){

       let params = {
                partyId: partyId,
            }
            appBaseApi.departmentData(params).then((res)=>{
              this.departmentData=res;
            })

    // let url = `http://222.244.147.108:56789/hncrsysconfig/api/organization/department?partyId=${partyId}`;
    // return new Promise((resolve, reject) => {
    //   axios.get(url).then(rdata => {
    //     this.departmentData=rdata.data;
       
    //   }).catch(error => { 
    //     this.$toast('请求失败~');
    //   })
    // })
    
    }
  },
};
</script>
<style lang="scss" scoped>
.title {
  font-weight: 550;
  color: #415261;
}
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

  .my-van-cell {
    padding-top: 10px !important;
    height: 50px !important;
    color: #415261;
    font-weight: 500;
    .num {
      margin-left: 5px;
      color: #004EA2;
    }
  }

  .my-van-cell span{
         float: left ;
        text-align: left;
  }
</style>