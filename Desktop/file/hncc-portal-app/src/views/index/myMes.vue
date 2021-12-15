<template>
    <div class="birthday ">
      <div class="top">
   <van-nav-bar title="我的信息" left-arrow    @click-left="onClickLeft"/>
    <van-cell-group inset>
      <van-cell title="头像" value=""  @click="onClick(1)"  arrow-direction> 
         <template #right-icon>
            <van-icon  name="arrow" class="arrow-icon" />
          </template>
        <template #default>
            <span  style="display: block; width: 36px; margin-left: 110px; border-radius: 50%; background: #004EA2; text-align: center; line-height: 0.84rem; font-size: 10px; font-weight: 500; color: #FFFFFF;" >  {{linkTel.personName}}</span>
          </template>
      </van-cell>

      <!-- <van-popup v-model="show" round position="bottom" :style="{ height: '14%' }" >
       <div style=" width: 100%; height: 50%;   line-height: 50px;  text-align: center;border-bottom: 1px solid #ebedf0;">拍照</div>
        <div @click="changeTx" style=" width: 100%; height: 50%;   line-height: 50px;  text-align: center;">从手机像册选择</div>
       
      </van-popup> -->

    <van-action-sheet
      @select="onSelect" 
      v-model="show"
      :actions="actions"
      cancel-text="取消"
      close-on-click-action
    />
      <van-cell title="姓名" :value="linkTel.personName" />

        <van-cell title="手机号码"  :value="linkTel.linkTel"  arrow-direction> 
 

      </van-cell>
       <van-cell title="企业" :value="linkTel.company" />
              <van-cell title="部门" :value="linkTel.department" />
                <van-cell title="岗位" :value="linkTel.postName" />
    </van-cell-group>
    </div>



 </div>
</template>

<script>
// import * as appBaseApi from "../../api/app-base";
import * as appBaseApi from "../../api/app-base";
import store from '@/store/store.js';
import axios from 'axios';
import appConstant from "../../utils/appConstant";
export default {

  data() {
    return {
   
        actions: [{ name: '拍照' }, { name: '相册' }],
      linkTel:'',
      iphone:'',
      birIcon:require("../../assets/imgs/img1.png"),
      show:false,

     
    };
  },
  mounted() {
    this.linkTel=this.$store.state.linkTel;
    document.querySelector('body').setAttribute('style', 'background-color:#f6f6f6')

    let his = window.localStorage.getItem(appConstant.loginStorageId);
    if (his) {
      let userInfo = JSON.parse(his);
      this.iphone = userInfo.iphone;
    }
    this.getAddressData(this.iphone)
  },
  destroyed() {
    // document.querySelector('body').setAttribute('style', 'background-color:#ffffff')
  },
  methods: {
       getAddressData(linkTel){
           let params = {
                linkTel: linkTel,
            }
            appBaseApi.userData(params).then((res)=>{
               this.linkTel=res;
            })
  },
     onSelect(item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.show = false;
      // Toast(item.name);
      this.changeTx();
    },

      changeTx() {
      this.$router.push({
        path: "/changeTx",
      });
    },
       onClickLeft() {
       this.$router.go(-1);
    },
         onClick(type) {
               console.log("go b "+type);
               if(type==1){
                 this.show=true;
                  //  this.$root.goPath('/offlinePic');
               } else if(type==2){
                   this.$root.goPath('/test2');
               }

    },

  },
};
</script>
<style lang="scss" scoped>
  .birthday {
      width: 100vw;
      height: 100vh;

      // margin-top: 130px;
      //  overflow: hidden;
  
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
.arrow-icon {
  width: 30px;
 line-height: 0.84rem;
  text-align: center;

}
</style>