<template>
  <div class="app-full" style="background-color: #F7F7F7;">
    <van-nav-bar @click-left="$root.appBack" title="执行列表" :border="false" left-arrow left-text="返回"></van-nav-bar>
    <div class="app-main">
      <div style="margin-top: 40px;font-weight:bold;font-size:14px;">
        <div v-for="(item,index) in this.dataArr" :key="index">
          <div  @click="showBusi(item)" class="app-fc"  style="position:relative;margin-top: 20px;">
            <!-- <div style="padding-right:20px;" :class="index==0?'blue':''">
              <p>{{item.taskReachTime.substring(0,10)}}</p>
              <p>{{item.taskReachTime.substring(11,19)}}</p>
            </div> -->
            <div class="rectange"></div>
            <div class="right" >
              
              <div class="dot" ></div>
              <div class="content">
                <p style="font-size:16px;color:black;font-weight: bold;" >
                  {{item.activityName}}
                  <!-- <span v-if="index==0" style="color:orange"> (待处理)</span> -->
                </p>
                <p>办理人：{{item.taskCommiter}}</p>
                <p>办理意见：{{item.sendAdvice}}</p>
                <!-- <p>开始办理时间：{{item.taskReachTime}}</p>
                <p>结束办理时间：{{item.taskCommitTime}}</p> -->
              </div>
              <div style="text-align:center;padding: 5px 0 20px;font-weight:normal;color:gray;">{{item.taskReachTime}}</div>
            </div>
            
          </div>
        </div>
      </div>
      <!-- <van-steps direction="vertical" :active="0" style="padding-left:45vw">
        <van-step v-for="item in this.dataArr">
          <div style="position:relative;"  @click="showBusi(item)">
            <h4>{{item.activityName}}</h4>
            <p>办理人：{{item.taskCommiter}}</p>
            <p>办理意见：{{item.sendAdvice}} </p>
            <p style="position:absolute;top:0;left:-42vw;">{{item.taskReachTime}}</p>
          </div>
        </van-step>
      </van-steps> -->
    </div>
  </div>
</template>

<script>
import { worderInitData } from "@/api/busi";
import flowUtil from '@/views/workflow/flowUtil'
export default {
  name: "dealList",
  data() {
    return {
      dataArr:[],
    };
  },
  created(){
    let query = this.$route.query;
    this.params = query.params;
    let paramObj = JSON.parse(this.params);
    let showTacheUrl = paramObj.showTacheUrl;
    let urlObj = flowUtil.parseParams(showTacheUrl);
    this.editFlag = urlObj.editFlag;
  },
  mounted(){
    this.getList();
  },
  watch: {
    '$route': function (to, from) {
      if (to.name === 'dealList') {
        this.getList();
      }
    }
  },
  methods: {
    getList(){
      let params = {
        dc: JSON.stringify({}),
        jbean: this.params
      }
      worderInitData(params).then(rdata => {
        this.dataArr=rdata.dataWraps.dataWrap.dataList;
        console.log(this.dataArr)
      })
    },
    showBusi(item) {
      // console.log(item); return;
      if (item.stdTacheNo === '5') {  //已归档
        return;
      }
      
      let paramObj = flowUtil.parseParams(item.tacheUrl);
      paramObj['stdTacheNo'] = item.stdTacheNo;
      paramObj['activityName'] = item.activityName;
      flowUtil.worderInitData.call(this, {
        dc: JSON.stringify({}),
        jbean: JSON.stringify(paramObj)
      }).then(rdata => {
        rdata['stdTacheNo'] = item.stdTacheNo;
        rdata['activityName'] = item.activityName;
         this.$router.push({
          path: '/flowBusi',
          query: {
            params: JSON.stringify(paramObj),
            title: item.activityName
          }
        })
      })


      // this.$router.push({
      //   path: '/flowBusi',
      //   query: {
      //     params: JSON.stringify(paramObj),
      //     title: item.activityName
      //   }
      // })
    },
  }
};
</script>

<style lang="scss" scoped>
.right{
  border-left:1px solid #2CC7A8;
  width:320px;
  padding-left:20px;
  position:relative;

  .dot{
    width:10px;
    height:10px;
    background:#2CC7A8;
    border-radius:50%;
    position:absolute;
    top:-5px;left:-5px;
  }
  .content{
    // box-shadow: lightgray 0px 0px 10px;
    padding:0 10px 10px;
    position: relative;
    top: -10px;
    background-color: white;

    p {
      color: gray;
      font-weight: normal;
      font-size: 13px;
    }
  }
}
.rectange {
  width: 320px;
  height: 30px;
  background-color: white;
  position: absolute;
  right: 17px;
  top: -20px;

  &::after {
    content: ' ';
    position: absolute;
    top: 10px;
    left: -18px;
    width: 0px;
    height: 0px;
    border: 10px solid transparent;
    border-right: 10px solid white;
    z-index: 999;
  }
}
p{
  padding: 5px 0;
}
.blue{
  color:#1E6FE5;
  
}
</style>