<template>
  <div class="home">

<div class="banner">
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item
        v-for="(item,index) in homeArr"
        :key="index"
        :icon="item.icon">

        <img v-lazy="item.active" />
          <div class="text" >
              <div class="label">
                <i class="hot-icon"></i>
              
              </div>
        
            </div>
  </van-swipe-item>
</van-swipe>
</div>

    <main  class="app-pd menus">
        <article  class="main-article" v-for="(menu,index1)  in mesHome" :key="index1" >
        <div class="sub-title"><span></span>{{ menu.title }}</div>

        <section class="app-fs"   v-for="(ihead,index1) in menu.headList"  :key="index1">
                  <div class="sub-head"><span>{{ihead.head }}</span></div>
          <div
            class="item-wrap"
            v-for="(item,index) in ihead.arry"
            :key="index"
           >
          <!-- <van-badge :content="5" dot color="#1989fa">
            <div class="child" />
          </van-badge> -->
            <img :src="item.img" alt=""/>
            <div>{{ item.str }}</div>
            <div class="num" v-if="item.number">{{item.number}}</div>
          </div>
        </section>
          </article>
    </main>


    <main  class="app-pd menus">
        <article  class="main-article" v-for="(menu,index) in mesHome" :key="index" >
        <div class="sub-title"><span></span>集团新闻</div>

        <!-- <section class="app-fs"   v-for="ihead in menu.headList"  :key="ihead.id">
      
        </section> -->
          </article>
    </main>



        <div class="app-main">
      <van-pull-refresh v-model="isLoading">
        <van-list
          finished-text="没有更多了"
          >
    <van-cell v-for="(item,index)  in dataArr" :key="index"  @click="onClick(item.id)">
      <div class="oddimg">

           <div class="img">
            <img src="../../assets/imgs/img1.png" alt="">
          </div>
           <div class="title">

               <div class="van-multi-ellipsis--l2 date1">{{item.str1}}</div>
            <span class="label ">{{item.str}}</span>
        
            {{item.str2}}
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
     isLoading:false,
 mesHome: [
        {
          title:'应用中心',
          id:'1',
          headList:[
          {
          head:'财务管控',
          type:"/birthday",
          number:1,
          arry:[
          {
          img: require("../../assets/imgs/home/a.png"),
          str: "财务共享",
          type:"/birthday",
          number:1,
        }, 
        {
          img: require("../../assets/imgs/home/b.png"),
          str: "资产管理",
          type:"/birthday",
        }, 
       
         
          ],
        }, 
        
          {
          img: require("../../assets/imgs/main/h1.png"),
          head:'人资管控',
          type:"/birthday",
         
          arry:[
          {
           img: require("../../assets/imgs/home/c.png"),
          str: "人资系统",
          type:"/birthday",
   
        }, 
          ],
        }, 
        

           {
       
          head:'综合管控',
          type:"/birthday",
          number:1,
          arry:[
          {
           img: require("../../assets/imgs/home/d.png"),
          str: "OA管理",
          type:"/birthday",
          number:3,
        }, 
        {
          img: require("../../assets/imgs/home/e.png"),
          str: "综合维稳",
          type:"/birthday",
        
        }, 
        {
           img: require("../../assets/imgs/home/f.png"),
          str: "组织机构",
          type:"/birthday",
         
        }, 
        {
          img: require("../../assets/imgs/home/g.png"),
          str: "车辆管理",
          type:"/birthday",
          
        }, 
        {
           img: require("../../assets/imgs/home/h.png"),
          str: "产权管理",
          type:"/birthday",
          number:2,
        }, 
          ],
        }, 
           {
       
          head:'风险管控',
          type:"/birthday",
          number:1,
          arry:[
          {
          img: require("../../assets/imgs/home/i.png"),
          str: "监管指标",
          type:"/birthday",
          number:1,
        }, 
        {
          img: require("../../assets/imgs/home/j.png"),
          str: "监督追责",
          type:"/birthday",
        
        }, 
        {
          img: require("../../assets/imgs/home/k.png"),
          str: "审计系统",
          type:"/birthday",
     
        }, 
          ],
        }, 
        
         
          ],
        }, 
        
    ],
         homeData:[
                     {
          img: require("../../assets/imgs/main/h1.png"),
          str: "三重一大",
          number:3,
          type:"/birthday",
        }, 
                  {
          img: require("../../assets/imgs/main/h2.png"),
          str: "OA管理",
          type:"/birthday",
        }, 
                     {
          img: require("../../assets/imgs/main/h2.png"),
          str: "人资系统",
          number:5,
          type:"/birthday",
        }, 
                     {
          img: require("../../assets/imgs/main/h2.png"),
          str: "综合维稳",
          type:"/birthday",
        }, 
                     {
          img: require("../../assets/imgs/main/h2.png"),
          str: "监管指标",
          type:"/birthday",
        }, 
         
                   {
          img: require("../../assets/imgs/main/h2.png"),
          str: "资产管理",
          number:4,
          type:"/birthday",
        }, 
                   {
          img: require("../../assets/imgs/main/h2.png"),
          str: "监督追责",
          type:"/birthday",
        }, 
                      {
          img: require("../../assets/imgs/main/h2.png"),
          str: "财务系统",
          type:"/birthday",
        }, 
                         {
          img: require("../../assets/imgs/main/h2.png"),
          str: "产权管理",
             number:4,
          type:"/birthday",
        }, 
                         {
          img: require("../../assets/imgs/main/h2.png"),
          str: "审计系统",
          type:"/birthday",
        }, 
                           {
          img: require("../../assets/imgs/main/h2.png"),
          str: "视频会议",
          type:"/birthday",
        }, 
                         {
          img: require("../../assets/imgs/main/h2.png"),
          str: "全部",
          type:"/birthday",
        }, 
          ],
          dataArr: [
        {
        //https://www.hncc-china.com/2021/GroupNews_0824/6508.html
          str: "15次浏览",
          str1: "湖南路桥连续四年入围ENR全球最大250家国际承包商",
          str2: "2021-08-24",
          id:1,
  
        }, 
         {
        //https://www.hncc-china.com/2021/GroupNews_0818/6448.html
          str: "19次浏览",
          str1: "胡建华赴交通设计院桥梁设计院、市政工程设计院调研指导",
          str2: "2021-08-18",
          id:2,
        },
         {
        //https://www.hncc-china.com/2021/GroupNews_0817/6441.html
          str: "28次浏览",
          str1: "集团着力推进海外项目远程视频巡检机制 加强境外疫情防控督导",
          str2: "2021-08-17",
          id:3,
        },
        ],

  images: [
        'https://www.hncc-china.com/uploadfile/2021/0818/20210818031108129.jpg',
        '	https://www.hncc-china.com/uploadfile/2021/0826/20210826034213384.png',
        'https://www.hncc-china.com/uploadfile/2021/0826/20210826034310322.png',
        'https://www.hncc-china.com/uploadfile/2021/0826/20210826034325349.png',
      ],
      homeArr: [
        {
          active: 'https://www.hncc-china.com/uploadfile/2021/0818/20210818031108129.jpg',
          str: "集团新闻要闻",
          str1: "方联民会见华邦控股集团董事局主席苏如春一行",
          str2: "2021-06-18",
  
        }, 
               {
          active: '	https://www.hncc-china.com/uploadfile/2021/0826/20210826034213384.png',
          str: "集团新闻要闻",
          str1: "方联民会见华邦控股集团董事局主席苏如春一行",
          str2: "2021-06-18",
  
        }, 
               {
          active: 'https://www.hncc-china.com/uploadfile/2021/0826/20210826034310322.png',
          str: "集团新闻要闻",
          str1: "方联民会见华邦控股集团董事局主席苏如春一行",
          str2: "2021-06-18",
  
        }, 
               {
          active: 'https://www.hncc-china.com/uploadfile/2021/0506/20210506051552221.jpg',
          str: "集团新闻要闻",
          str1: "方联民会见华邦控股集团董事局主席苏如春一行",
          str2: "2021-06-18",
  
        }, 

      ],
    };
  },

  mounted() {
    document.querySelector('body').setAttribute('style', 'background-color:#f6f6f6')
  },
  methods: {

            onClick(item) {
              if(item===1){
                  window.location.href = 'https://www.hncc-china.com/2021/GroupNews_0824/6508.html'
              }else if(item===2){
                  window.location.href = 'https://www.hncc-china.com/2021/GroupNews_0818/6448.html'
              }else if(item===3){
                  window.location.href = 'https://www.hncc-china.com/2021/GroupNews_0817/6441.html'
              }
        
    },

  }
};
</script>

<style lang="scss" scoped>


.home .banner  {
  width: 100%;
  height: 5.58rem;
  margin-bottom: 10px;
  background-color: #ffffff;
}
.menus {
  height: calc(100% - 130px);
  background-color: #ffffff;
  margin-bottom: 5px;
  padding-top: 5px;
}

		.sub-head {
      width: 100% !important;
      height: 48px;
      position: relative;
      line-height: 48px;
      text-align: left;

      opacity: 1;
      z-index: 500;
             padding-left: 16px;
      span {
        font-size: 14px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #808E99;
        opacity: 1;
      }
    }
.sub-title { 
			position: relative;
			padding-left: 25px; 
        height: 50px;
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: 500;
      color: #004EA2;
      
      line-height: 50px;
      border-bottom: 1px  solid #EBEBEB;
      text-align: left;
      background: #FFFFFF;
		}
		
		 .sub-title:before {
		   content: ' ';
		   border-left: 3px  solid rgb(49, 130, 197);
		    display: inline-block;
		    height: 16px;
		    position: absolute;
		    top: 50%;
		    left: 0;
         margin-left: 16px;
		    margin-top: -8px;
		} 

.item-wrap {
  width: 20%;
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
 .my-swipe .van-swipe-item img {
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 240px;
  background-color: #fff;
  pointer-events: none;
}
 .my-swipe .van-swipe-item {
      width:100%;
    color: #fff;
    //    height: 5.58rem;
    // line-height: 5.58rem;
    // margin: 0 20px 0px 20px;

    
    // background: url("../../assets/imgs/img1.png") no-repeat;
    //  background: url("../../assets/imgs/img1.png") center center / 100% 100% no-repeat;
  }

  .text {
  position: absolute;
  width: 90%;
  height: 100%;
  top: 0;
  left: 0;
   margin-left: 20px;
  border-radius: 0.15rem;
}
 .text .label {
  display: flex;
  align-items: center;
  position: absolute;
  // top: 0.38rem;
  left: 0.26rem;
  color: #fff;
  font-size: 0.48rem;

}
 .text .label i.hot-icon {
  background: url("../../assets/imgs/hoticon.png") center center / 100% 100% no-repeat;
  
  height: 30px;
  width: 260px;
  margin-top: 40px;
  margin-right: 0.24rem;
}
 .text .text-content {
  margin: 0 0.36rem;
  color: #fff;
  line-height: 0.72rem;
  position: absolute;
  bottom: 0.17rem;
}

 .text .text-content .date {
  font-size: 0.36rem;
}

  .more-btn {
  color: #415261;
  font-size: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 1.11rem;
  padding: 0 20px 0px 20px;
  border-bottom: 1px  solid #0782e0;
    background-color: #ffffff;
    
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
  width: 55%;
  color: #415261;
  font-size: 0.36rem;
  color: #AAB6C0;
}
.title .label {
  font-size: 0.31rem;
  padding: 0.1rem 0.12rem;
  background: rgba(0, 58, 124, 0.1);
  margin-right: 1.12rem;
}


 .oddimg .img {
  width: 40%;
  height: 75px;
}
 
 .oddimg .img img {
  height: 100%;
  width: 100%;
}
 .date1 {
    width: 5rem;

  color: #415261;
}
/deep/ input::-webkit-input-placeholder { 
/* WebKit browsers */ 
  color: #817e7e; 
  font-size: 0.32rem;
    font-size: 0.48rem;
}  
/deep/ .app-fs {

    padding-right: 0vw;
    padding-left: 0vw;
      background: linear-gradient(180deg, rgba(56, 190, 239, 0.04) 0%, rgba(56, 190, 239, 0) 100%);
}
</style>