<template>
  <div class="home">
    <!-- <van-nav-bar class="appIndexNav" :border="false" title="隧道管理"></van-nav-bar> -->
  <div class="header">
      <a href="">
        <img class="logo"  src="../../assets/imgs/home/logosmall.png">
      </a>
      <div class="serach">

        <form action="/">
          <van-search
            v-model="value"
            placeholder="请输入要查询的内容"
            :left-icon="searchIcon"
            name="searchIcon"
          />
        </form>
        <!-- <img class="search-icon" src="./img/searchicon.png" alt="">
        <input class="search-input" type="text" placeholder="请输入查询的内容" /> -->
      </div>
    </div>

<div class="banner">

  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item
        v-for="(item,index) in homeArr"
        :key="index"
        :icon="item.icon"
  >
          <div class="text" @click="$root.goPath('/entry',{isEdit: 'B'})">
              <div class="label">
                <i class="hot-icon"></i>
                {{item.str}}
              </div>
              <div class="text-content">
                <div class="name">{{item.str1}}</div>
                <div class="date">{{item.str2}}</div>
              </div>
            </div>

  </van-swipe-item>

</van-swipe>
</div>

  <div class="more-btn">
        查看更多内容
        <img src="../../assets/imgs/home/moreicon.png" @click="$root.goPath('/appIndex',{isEdit: 'B'})" alt="">
      </div>
         
    <div class="app-main">


      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
    <van-cell v-for="item in dataArr" :key="item"  @click="$root.goPath('/birthday',{isEdit: 'B'})">
      <div class="oddimg">
           <div class="title">
            <span class="label">{{item.str}}</span>
            {{item.str1}}
               <div class="date1">2021-05-26</div>
          </div>
           <div class="img">
            <img src="../../assets/imgs/img1.png" alt="">
          </div>
       
      </div>
    </van-cell>
  </van-list>
</van-pull-refresh>


     
      
    </div>

  
  </div>
</template>

<script>

export default {

  data() {
    return {
     searchIcon: require("../../assets/imgs/home/searchicon.png"),
          dataArr: [
        {
        
          str: "子公司动态",
          str1: "中央主要新闻媒体赴平益高速集中采风",
          str2: "2021-06-18",
  
        }, 
         {
        
          str: "子公司动态",
          str1: "中央主要新闻媒体赴平益高速集中采风",
          str2: "2021-06-18",
  
        },
         {
        
          str: "子公司动态",
          str1: "中央主要新闻媒体赴平益高速集中采风",
          str2: "2021-06-18",
  
        },
        ],


      homeArr: [
        {
          active: require("../../assets/imgs/img1.png"),
          str: "集团新闻要闻",
          str1: "方联民会见华邦控股集团董事局主席苏如春一行",
          str2: "2021-06-18",
  
        }, 
               {
          active: require("../../assets/imgs/img1.png"),
          str: "集团新闻要闻",
          str1: "方联民会见华邦控股集团董事局主席苏如春一行",
          str2: "2021-06-18",
  
        }, 
               {
          active: require("../../assets/imgs/img1.png"),
          str: "集团新闻要闻",
          str1: "方联民会见华邦控股集团董事局主席苏如春一行",
          str2: "2021-06-18",
  
        }, 
               {
          active: require("../../assets/imgs/img1.png"),
          str: "集团新闻要闻",
          str1: "方联民会见华邦控股集团董事局主席苏如春一行",
          str2: "2021-06-18",
  
        }, 

      ],
    };
  },
  mounted() {

  },

  methods: {


  }
};
</script>

<style lang="scss" scoped>

 
  
.home .header {
  width:100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-left: 15px;
  margin-top: 15px;
}
.home .header .logo {
  width: 2.93rem;
  height: 0.75rem;
}
.home .header .serach {
  width: 7.05rem;
  height: 1.08rem;
  display: flex;
  align-items: center;
 
}
.home .banner  {
  width: 100%;
  height: 5.58rem;
  overflow: hidden;
  padding: 8px;
  margin-top: 5px;
  
}

 .my-swipe .van-swipe-item {
      width:95%;
    color: #fff;
       height: 5.58rem;
    line-height: 50px;

    border-radius: 0.15rem;
    margin-left: 4px;
    background: url("../../assets/imgs/img1.png") no-repeat;
   
  }

  .text {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  border-radius: 0.15rem;
}
 .text .label {
  display: flex;
  align-items: center;
  position: absolute;
  top: 0.38rem;
  left: 0.36rem;
  color: #fff;
  font-size: 0.48rem;

}
 .text .label i.hot-icon {
  background: url("../../assets/imgs/hoticon.png") center center / 100% 100% no-repeat;
  
  height: 0.51rem;
  width: 0.51rem;
  margin-right: 0.24rem;
}
 .text .text-content {
  margin: 0 0.36rem;
  color: #fff;
  line-height: 0.72rem;
  position: absolute;
  bottom: 0.17rem;
}
 .text .text-content .name{
  font-size: 0.54rem;
}
 .text .text-content .date {
  font-size: 0.36rem;
}

  .more-btn {
  color: #415261;
  font-size: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.11rem;
}
  .more-btn img {
  width: 0.32rem;
  height: 0.32rem;
  margin-left: 0.18rem;
  margin-top: 2px;
}

.oddimg {
  display: flex;
  position: relative;
  justify-content: space-between;
}

 .title  {
  font-size: 0.48rem;
  color: #415261;
  line-height: 0.81rem;
}
.title .label {
  font-size: 0.31rem;
  padding: 0.1rem 0.12rem;
    background: rgba(0, 58, 124, 0.1);
}


 .img {
  width: 5.26rem;
  height: 2.25rem;
}
 .img img {
  height: 100%;
  width: 100%;
}
 .date1 {
  font-size: 0.36rem;
  color: #AAB6C0;
}
/deep/ input::-webkit-input-placeholder { 
/* WebKit browsers */ 
  color: #817e7e; 
  font-size: 0.32rem;
  
} 
</style>