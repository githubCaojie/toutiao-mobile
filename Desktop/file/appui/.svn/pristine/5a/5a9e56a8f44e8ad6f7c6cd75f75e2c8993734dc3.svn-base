<template>
  <div class="app-full" style="background-color: #F7F7F7;">
    <van-nav-bar @click-left="$root.appBack" title="执行列表" :border="false" left-arrow left-text="返回"></van-nav-bar>
    <div class="app-main">
      <div style="margin-top: 40px;font-weight:bold;font-size:14px;">
        <div v-for="(item,index) in this.dataArr" :key="index">
          <div  @click="showBusi(item)" class="app-fc"  style="position:relative;">
            <div class="rectange"></div>
            <div class="right" >
              <div class="dot" ></div>
              <div class="content">
                <p style="font-size:16px;color:black;font-weight: bold;margin-bottom: 20px;" >
                  {{item.activityName}}<span v-if="index==0" style="color:orange"> (待处理)</span>
                </p>
                <p>办理人：{{item.taskCommiter}}</p>
                <p>办理意见：{{item.sendAdvice}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { postAction, getAction } from "@/api/app-base";
import flowUtil from '@/views/workflow/flowUtil'
export default {
  name: "dealList",
  data() {
    return {
      dataArr:[],
      instanceId: '',
    };
  },
  created(){
    let query = this.$route.query;
    this.appInstanceId = query.appInstanceId;
  },
  mounted(){
    this.getList();
  },
  methods: {
    getList(){
      let params = {
        appInstanceId: this.appInstanceId,
        openMode: 4
      }
      getAction('/jt/app/taskExecInfo/', params).then(rdata => {
        console.log(rdata)
        this.dataArr=rdata.dataWraps.dataWrap.dataList;
      })
    },
    showBusi(item) {
      if (item.stdTacheNo === '5') {  //已归档
        return;
      }
      let paramObj = flowUtil.parseParams(item.tacheUrl);
      paramObj['stdTacheNo'] = item.stdTacheNo;
      paramObj['activityName'] = item.activityName;
      this.$router.push({
        path: '/flowBusi',
        query: {
          params: JSON.stringify(paramObj),
          title: item.activityName
        }
      })
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
    margin-bottom: 20px;

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