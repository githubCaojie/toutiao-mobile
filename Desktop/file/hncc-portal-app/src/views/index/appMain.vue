<template>
  <div class="app-main" >
   <div class="birthday ">
   <van-nav-bar title="应用"/>
<van-search v-model="value" placeholder="搜索" />
 </div>
    <!-- <main  class="app-pd menus">
     <article  class="main-article" v-for="menu in mesHome" :key="menu.id">
        <div class="sub-title">{{ menu.title }}</div>
        <section class="app-fs">
          <div
            class="item-wrap"
            v-for="item in menu.arry"
            :key="item.id"
            @click="itemClick(item.path, item.id, item.type)">
            <img :src="item.img" alt=""/>
            <div>{{ item.str }}</div>
            <div class="num" v-if="item.number">{{item.number}}</div>
          </div>
        </section>
      </article>
    </main> -->

<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
  <p>刷新次数: {{ count }}</p>
  
</van-pull-refresh>


  </div>
</template>

<script>
import moment from 'moment'
import allMenus from "./allMenus";
import { getDefaultBd, undoTask, noReadNum } from '@/api/app-base';
export default {
  name: "appMain",
  data() {
    return {
   count: 0,
      isLoading: false,
      numObj: {},
         mesHome: [
        {
          title:'国资监管',
          id:'1',
          arry:[
                     {
          img: require("../../assets/imgs/main/h1.png"),
          str: "监管指标",
          type:"/birthday",
          number:1,
        }, 
                  {
          img: require("../../assets/imgs/main/h2.png"),
          str: "三重一大",
          type:"/birthday",
        }, 
                     {
          img: require("../../assets/imgs/main/h2.png"),
          str: "监督追责",
          type:"/birthday",
        }, 
                     {
          img: require("../../assets/imgs/main/h2.png"),
          str: "综合维稳",
          type:"/birthday",
          number:5,
        }, 
                     {
          img: require("../../assets/imgs/main/h2.png"),
          str: "组织机构",
          type:"/birthday",
        }, 
      
         
          ],
        }, 

           {
          title:'日常管理',
            id:'2',
          arry:[
                     {
             img: require("../../assets/imgs/main/l1.png"),
          str: "人资系统",
          type:"/birthday",
        }, 
                  {
             img: require("../../assets/imgs/main/l2.png"),
          str: "OA管理",
          type:"/birthday",
        }, 
                     {
             img: require("../../assets/imgs/main/l2.png"),
          str: "车辆管理",
          type:"/birthday",
        }, 
         
          ],
        }, 

            {
          title:'财务资产',
            id:'2',
          arry:[
                     {
            img: require("../../assets/imgs/main/n1.png"),
          str: "财务系统",
          type:"/birthday",
        }, 
                  {
             img: require("../../assets/imgs/main/n2.png"),
          str: "资产管理",
          type:"/birthday",
        }, 
                   {
             img: require("../../assets/imgs/main/n2.png"),
          str: "产权管理",
          type:"/birthday",
        }, 
                  {
             img: require("../../assets/imgs/main/n2.png"),
          str: "审计系统",
          type:"/birthday",
        }, 
         
         
          ], 
        }, 

            {
          title:'视频会议',
            id:'2',
          arry:[
                     {
         img: require("../../assets/imgs/main/n5.png"),
          str: "投资控制",
          type:"/birthday",
        }, 
           
         
          ],
        }, 
      ],
    };
  },
  activated() {
    // this.getNoReadNum();
  },
  created() {
 
  },
  beforeDestroy() {
    // this.appCommon.clearLocWatch();
  },
  methods: {
        onRefresh() {
      setTimeout(() => {
        // Toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 1000);
    },

    itemClick(path, id,type) {
      if (path) {
        if(type){
          this.$root.goPath(path,{type:type});
        }else{
          this.$root.goPath(path);
        }
      } else {
        this.qrScan(id)
      }
    },
  },
};
</script>

<style lang="scss" scoped>
/deep/ .van-pull-refresh{
  width: 100vw;
  height: calc(100vh - 50px);
}
.main-article {


margin: 5px 5px 5px 5px;
border-radius: 6px;
}

.main-article:nth-child(1) {
       background: #EF8A54;
}
.main-article:nth-child(2) {
      background: #1C93D0;
}
.main-article:nth-child(3) {
      background: #1963BC;
}
/deep/ .item-wrap img[data-v-23d69113] {
      width: 1.56667rem;
    height: 1.56667rem;
    background: #ffffff;
    border-radius: 50%;
}
.main-article:nth-child(4) {
      background: #1F3588;
}
// /deep/ .sub-title[data-v-23d69113]{
//   border-left: 0.10667rem  ;
//     padding-left: 0.26667rem;
//     margin: 0.26667rem 0;
//     font-size: 18px;
//     font-family: Source Han Sans CN;
//     font-weight: 500;
//     padding-top: 16px;
//     color: #FFFFFF;
// }
 .doge {
    width: 140px;
    height: 72px;
    margin-top: 8px;
    border-radius: 4px;
  }
/deep/ .item-wrap[data-v-23d69113]{
font-size: 13px;
font-family: Source Han Sans CN;
font-weight: 400;
color: #FFDECC;
}
.header {
  background-color: rgb(49, 130, 196);
  color: white;
  height: 100px;
  flex-wrap: nowrap;
  display: none;
  
  img {
    width: 60px;
  }
  section {
    width: 220px;
    box-sizing: border-box;
    border-right: 1px solid white;
    align-items: flex-start;
    ul {
      margin-top: 5px;
      li {
        line-height: 25px;
      }
    }
  }
  & > ul {
    width: 155px;
    box-sizing: border-box;
    padding: 0 10px;
    li {
      width: 100%;
      text-align: center;
    }
  }
  .my-order {
    flex: 1;
    height: 100%;
    flex-wrap: nowrap;
    overflow-y: auto;
    flex-direction: column;
    align-items: center;
  }
}
.menus {

  height: calc(100% - 130px);
     overflow-y: auto;
}
.sub-title {
  border-left: 4px solid rgb(49, 130, 197);
  padding-left: 10px;
  margin: 10px 0;
  font-size: 14px;
  font-weight: bold;
}
.item-wrap {
  width: 25%;
  text-align: center;
  margin: 10px 0;
  position: relative;
  img {
    width: 40px;
    height: 40px;
  }
  .num {
    position: absolute;
    top: -10px;
    right: 10px;
    background-color: red;
    color: white;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 21px;
    font-size: 12px;
  }
}
.undo-num {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  div {
    height: 100%;
    line-height: 30px;
  }
  div:nth-child(2) {
    color: orange;
    padding-left: 5px;
    font-weight: bold;
    font-size: 20px;
  }
}
</style>