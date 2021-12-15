<template>
    <div class="birthday ">
      <div class="top">
   <van-nav-bar title="消息" border="false"/>


<van-search v-model="value" placeholder="搜索" />
</div>
 <van-tabs >
   
  <van-tab title="待办" :badge ="3">
     <van-list class="birthday-van-list" :finished="finished"    finished-text="没有更多了">
          <van-cell  @click="onClick(1)" class="birthday-van-cell" v-for="item in list" :key="item">
            <template #title>
              <span class="custom-title">{{item.str}}</span>
            </template>

             <template class="default" #default>
               <div>
                <van-icon  name="arrow"  />
                </div>
                  <div>
                <span class="custom-label">{{item.str2}}</span>
                </div>
            </template>
               <template class="label" #label>
              <span class="custom-label">{{item.str1}}</span>
            </template>
          </van-cell>
        </van-list>

    </van-tab>
  <van-tab title="已办" class="bir-van-tab">
  <van-list class="birthday-van-list" :finished="finished"    finished-text="没有更多了">
          <van-cell  @click="onClick(2)" class="birthday-van-cell" v-for="item in list1" :key="item">
            <template #title>
              <span class="custom-title">{{item.str}}</span>
            </template>

             <template class="default" #default>
               <div>
                <van-icon  name="arrow"  />
                </div>
                  <div>
                <span class="custom-label">{{item.str2}}</span>
                </div>
            </template>
               <template class="label" #label>
              <span class="custom-label">{{item.str1}}</span>
            </template>
          </van-cell>
        </van-list>
  </van-tab>


    <van-tab title="办结" class="bir-van-tab">
  <van-list class="birthday-van-list" :finished="finished"    finished-text="没有更多了">
          <van-cell  @click="onClick(3)" class="birthday-van-cell" v-for="item in list2" :key="item">
            <template #title>
              <span class="custom-title">{{item.str}}</span>
            </template>

             <template class="default" #default>
               <div>
                <van-icon  name="arrow"  />
                </div>
                  <div>
                <span class="custom-label">{{item.str2}}</span>
                </div>
            </template>
               <template class="label" #label>
              <span class="custom-label">{{item.str1}}</span>
            </template>
          </van-cell>
        </van-list>
  </van-tab>

      <van-tab title="办结" class="bir-van-tab">
  <van-list class="birthday-van-list" :finished="finished"    finished-text="没有更多了">
          <van-cell  @click="onClick(4)" class="birthday-van-cell" v-for="item in list3" :key="item">
            <template #title>
              <span class="custom-title">{{item.str}}</span>
            </template>

             <template class="default" #default>
               <div>
                <van-icon  name="arrow"  />
                </div>
                  <div>
                <span class="custom-label">{{item.str2}}</span>
                </div>
            </template>
               <template class="label" #label>
              <span class="custom-label">{{item.str1}}</span>
            </template>
          </van-cell>
        </van-list>
  </van-tab>
</van-tabs>
 </div>
</template>

<script>
// import * as appBaseApi from "../../api/app-base";

export default {

  data() {
    return {
      loading: false,
      finished: false,
      value:'',
      birIcon: require("../../assets/imgs/img1.png"),
        list: [
        {
          img: require("../../assets/imgs/del.png"),
          str: "单据名称", 
          str1: "业务申请：周星", 
          str2: "2021-07-09", 
        }, 
          {
          img: require("../../assets/imgs/del.png"),
          str: "单据名称1", 
          str1: "业务申请：石蕊", 
          str2: "2021-07-03", 
        }, 
          {
          img: require("../../assets/imgs/del.png"),
          str: "单据名称2", 
          str1: "业务申请：赵德", 
          str2: "2021-07-01", 
        }, 
           
      ],

      list1: [
        {
          img: require("../../assets/imgs/del.png"),
          str: "已办单据", 
          str1: "业务申请：周星", 
          str2: "2021-07-09", 
        }, 
          {
          img: require("../../assets/imgs/del.png"),
          str: "已办单据1", 
          str1: "业务申请：石蕊", 
          str2: "2021-07-03", 
        }, 
          {
          img: require("../../assets/imgs/del.png"),
          str: "已办单据2", 
          str1: "业务申请：赵德", 
          str2: "2021-07-01", 
        }, 
           
      ],

          list2: [
        {
          img: require("../../assets/imgs/del.png"),
          str: "已办结单据1", 
          str1: "业务申请：周星", 
          str2: "2021-07-09", 
        }, 
          {
          img: require("../../assets/imgs/del.png"),
          str: "已办结单据2", 
          str1: "业务申请：石蕊", 
          str2: "2021-07-03", 
        }, 
          {
          img: require("../../assets/imgs/del.png"),
          str: "已办结单据3", 
          str1: "业务申请：赵德", 
          str2: "2021-07-01", 
        }, 
           
      ],

          list3: [
        {
          img: require("../../assets/imgs/del.png"),
          str: "申请单据名称1", 
          str1: "业务申请：周星", 
          str2: "2021-07-09", 
        }, 
          {
          img: require("../../assets/imgs/del.png"),
          str: "申请单据名称2", 
          str1: "业务申请：石蕊", 
          str2: "2021-07-03", 
        }, 
          {
          img: require("../../assets/imgs/del.png"),
          str: "申请单据名称3", 
          str1: "业务申请：赵德", 
          str2: "2021-07-01", 
        }, 
           
      ],
    };
  },
  mounted() {
    document.querySelector('body').setAttribute('style', 'background-color:#f6f6f6')
  },
  destroyed() {
    document.querySelector('body').setAttribute('style', 'background-color:#ffffff')
  },
  methods: {
  
         onClick(type) {
               console.log("go b "+type);
               if(type==1){
                   this.$root.goPath('/agendaDetails');
               }else if(type==2){
                  this.$root.goPath('/achieve');
               }else if(type==3){
                  this.$root.goPath('/test3');
               }else if(type==4){
                  this.$root.goPath('/test4');
               }
          

    },

  },
};
</script>
<style lang="scss" scoped>
  .birthday {
      width: 100vw;
      height: 100vh;
      margin-top: 130px;
       overflow: hidden;
  }
  .top {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 130px;
      z-index: 500;
     
}
 
.birthday-van-cell {
  width: 94vw;
  height: 92px;
  margin:  12px;
  background: #ffffff !important;
  border: 1px solid #E3E6E8;
  opacity: 1;
  border-radius: 6px; 
  display: flex;
  justify-content: space-between;
}
.birthday-van-cell .custom-title {
 font-size: 18px;

font-weight: 500;

color: #614143;

}

/deep/  .van-cell__value  {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
}
/deep/ .van-cell__label {
  width: 50vw;
  height: 40px;
   display: flex;
   justify-content: space-between;
   align-items:flex-end;

}

/deep/  .van-tabs__line{
background-color:#003A7C;
}
// /deep/  .van-multi-ellipsis--l2 {
//   margin-top: 15px;
// height: 20px;
// background:url(../../assets/imgs/fh.png)  right 1px no-repeat; 

//   background-size: 20px 20px;
// }

//  /deep/  .van-tab__pane, .van-tab__pane-wrapper{
//  border-radius: 1.5vw;
// }

//   // .van-tag-name{
//   //   float: right;
//   // }
// .card {
//   display: flex;
//   flex-direction: column;
//   background-color: #ffffff;
//   border-radius: 6px;
//   margin: 12px 12px 0;
//   padding: 18px 16px 22px;
 
//   .top {
//     width: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//   }
//   .bottom {
//     width: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     margin-top: 20px;
//   }
// }
// .name {

//  font-size: 18px;
// font-family: Source Han Sans CN;
// font-weight: 530;
// line-height: 31px;
// color: #415261;

// }

//  .desc, .time{

//   color:#808E99 !important;
//    font-size: 14sp;

// }
</style>