<template>
  <div class="app-full">
    <van-nav-bar @click-left="$root.appBack()" title="巡检明细" :border="false" left-arrow></van-nav-bar>
    <div class="app-main">
      <ul>
        <li>
          <img src="../../assets/imgs/form/xm.png" alt="" />
          <div>姓名：<span>{{model.perName}}</span></div>
        </li>
        <li>
          <img src="../../assets/imgs/form/dw.png" alt="" />单位：<span>{{model.orgName}}</span>
        </li>
        <li>
          <img src="../../assets/imgs/form/dqsj.png" alt="" />当前时间：<span>{{model.kqDate}}</span>
        </li>
        <li>
          <img src="../../assets/imgs/form/scwz.png" alt="" />所处位置：<span>{{model.contractName}}</span>
        </li>
        <li style="display:block;">
          <div class="flexCenter" style="float:left;">
            <img src="../../assets/imgs/form/pz.png" alt="" /><span style="color:red;">*</span>拍照：
          </div>
          <img @click="takePic" src="../../assets/imgs/camera.png" style="width: 60vw;" alt="" />
        </li>
      </ul>
      <div id="dkimg">
        <app-img-choose disabled :type="'1'" ref="kqdaImgs" :objUuid="model.id" :objType="model.objType"></app-img-choose>
      </div>
      <div class="app-fc" style="">
        <van-button style="margin:0;width: 120px;font-size:14px;margin-top: 10px" type="primary" action-type="button" @click.native="clockSave('1')">考勤打卡</van-button>
        <van-button style="margin:0;width: 120px;font-size:14px;margin-top: 10px;margin-left: 10px;background:green;" type="primary" action-type="button" @click.native="clockSave('2')">加班补卡</van-button>
      </div>
      <div style="padding: 4vw;font-size: 13px;">
        打卡说明：一天打卡两次，其中上午8：00-9：00；下午14：30-15：30，每天打卡两次视为当天打卡有效。加班超过0点打卡时间范围为0：00-05：00，加班补卡算为第二天上午打卡。
      </div>
      <img @click="goKqdate" style="width: 40px;position:absolute;top: 80px;right: 10px;" src="../../assets/imgs/datepick.png" alt="" />
    </div>

  </div>
</template>

<script>
export default {
  components: {

  },
  data() {
    return {
      model: {},
      lng: '112.9000996838',
      lat: '23.1382233927',
      locStr: '',
      contractId: '',
      objType: '',
    }
  },
  mounted() {
    this.clock();
    this.getCurLocation()
  },
  methods: {
    goKqdate() {
      this.$router.push({
        path: '/kqdate'
      })
    },
    takePic() {
      this.$refs.kqdaImgs.takePic(1);
    },
    getCurLocation() {
      this.appCommon.getCurLocation().then(position => {
        this.lng = position.coords.longitude;
        this.lat = position.coords.latitude;
        this.getContract()
      }, (error) => {
        console.log(error);
        this.$toast('获取位置失败~');
        this.getContract();
      })
    },
    getContract() {
      this.appCommon.tloading('获取标段...')
      let params = {
        lnglat: this.lng + ',' + this.lat
      }
      this.appCommon.postReq('/jlkq/jlkqInfo/locateContractId', params).then((rtndata) => {
        this.model = { ...this.model, ...rtndata.parameters }
      })
    },
    clock() {
      this.appCommon.tloading();
      let params = {
        modelData: JSON.stringify({
          kqType: '1'
        })
      }
      this.appCommon.postReq('/jlkq/jlkqInfo/kqAdd', params).then((rtndata) => {
        this.model = {...this.model, ...rtndata.dataWraps.dataWrap.data};
        console.log(this.model);
      })
    },
    clockSave(type) {
      if (!this.checkDate()) {
        this.$toast('超出打卡时间范围~', 'bottom');
        return;
      }
      if (type == '2') {
        if (!this.bkCheck()) {
          this.$toast('超出打卡时间范围~', 'bottom');
          return;
        }
      }
      if (this.$refs.kqdaImgs.fileList.length <= 0) {
        this.$toast('请拍摄照片~', 'bottom');
        return;
      }
      this.model.kqType = type;
      this.clockSave1();
    },
    clockSave1() {
      this.model.lng = this.lng;
      this.model.lat = this.lat;
      let params = {
        dataWrap: JSON.stringify({
          data: this.model
        })
      }
      this.appCommon.tloading();
      this.appCommon.postReq('/jlkq/jlkqInfo/kqSave', params).then(() => {
        this.$toast('打卡成功~');
        this.$root.appBack();
      })
    },
    checkDate() {
      // var cday = moment().format('YYYY-MM-DD');
      // var start = cday + ' 08:00';
      // var end = cday + ' 09:00';
      // var d1 = moment().diff(moment(start)) >=0 && moment().diff(moment(end)) <= 0;

      // var start1 = cday + ' 14:30';
      // var end1 = cday + ' 15:30';
      // var d2 = moment().diff(moment(start1)) >=0 && moment().diff(moment(end1)) <= 0;

      // var d3 = this.bkCheck();

      // return d1 || d2 || d3;
      return true;
    },
    bkCheck() {
      // var cday = moment().format('YYYY-MM-DD');
      // var start3 = cday + ' 0:00';
      // var end3 = cday + ' 05:00';
      // var d3 = moment().diff(moment(start3)) >=0 && moment().diff(moment(end3)) <= 0;
      // return d3;
      return true;
    }
  },
}
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  padding: 0px;
  margin: 10px;
  font-size: 14px;
  li {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 15px 0;
    span {
      font-weight: bold;
    }
    img {
      width: 25px;
      margin-right: 10px;
    }
  }
}
#dkimg {
  div {
    border: 0px !important;
  }
}
</style>
