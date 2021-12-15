<template>
  <div class="app-full">
    <van-nav-bar @click-left="$root.appBack()" title="我的巡检任务" :border="false" left-arrow>
      <van-icon @click="showQuery=!showQuery" size="22px" :name="require('../../assets/imgs/query.png')" slot="right" />
    </van-nav-bar>
    <div class="app-main">
      <app-list ref="riskList" :immediate="false">
        <template v-slot:default="{data}">
          <div class="app-list">
            <div @click="checkResource(data, '2')">
              <!-- <p class="app-list-item"><span>检查编号：</span>
                <app-inputbtn :value="data.acceptCompany" labelProvider="com.haiyisoft.fslq.safetypatrol.labelprovider.SjdwLabels" name="acceptCompany" disabled></app-inputbtn>
              </p> -->
              <p class="app-list-item"><span>检查编号：</span>
                <span>{{data.aqTask.checkNo}}</span>
              </p>
              <p class="app-list-item"><span>风险源名称：</span>
                <span>{{data.riskNameStr}}</span>
              </p>
              <p class="app-list-item"><span>整改责任人：</span>
                <app-inputbtn :value="data.modifyPerson" labelProvider="com.haiyisoft.fslq.safetypatrol.labelprovider.ZgrLabels" name="modifyPerson" disabled></app-inputbtn>
              </p>
              <p class="app-list-item"><span>整改剩余天数：</span><span>{{data.modifyDays}}</span></p>
              <p class="app-list-item"><span>整改期限：</span><span>{{data.modifyDate}}</span></p>
              <p class="app-list-item" @click.stop="hiddenNum(data)"><span>隐患数目：</span><span style="color: #3372ff">{{data.isHidden}}</span></p>
              <p class="app-list-item"><span>检查时间：</span><span>{{data.checkDate | dateFormatter}}</span></p>
              <p class="app-list-item"><span>状态：</span>
                <!-- <app-drop-show :value="data.modifyStatus" dropName="SECURITY.MODIFY_STATUS"></app-drop-show> -->
                <span>{{data.modifyPer}}</span>
              </p>
              <p class="app-list-item" :style="{'color': data.isScope==='0'?'red': 'green'}"><span>是否在范围内：</span><span>{{data.isScope=='0'?'否':'是'}}</span></p>
              <van-button v-if="data.modifyStatus==1&&data.isHidden=='未巡检'&&editFlag!='N'" @click.stop="checkResource(data, '1')" class="no-danger" size="small" type="info">无隐患打卡</van-button>
              <van-button v-if="!data.uuid" style="right: 100px;" @click.stop="confirmRisk(data)" class="no-danger" size="small" type="primary">确认风险源</van-button>
            </div>
          </div>
        </template>
      </app-list>
    </div>
    <van-popup v-model="showQuery" position="top" style="background:transparent;">
      <div class="popup-top"></div>
      <van-cell-group>
        <app-input v-model="queryParams.riskNameStr" label="风险源名称："></app-input>
        <van-button @click="query" size="large" type="info" style="margin: 4vw 0;">查询</van-button>
      </van-cell-group>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'myTask',
  data() {
    return {
      taskUuid: '',
      editFlag: '',
      showQuery: false,
      queryParams: {}
    }
  },
  created() {
    this.taskUuid = this.$route.query.taskUuid
    this.editFlag = this.$route.query.editFlag
  },
  activated() {
    this.$refs.riskList.onRefresh()
  },
  methods: {
    confirmRisk(data) {
      let params = {
        taskUuid: data.taskUuid,
        riskSourceUuid: data.riskName,
        lng: this.$store.state.location.lng,
        lat: this.$store.state.location.lat,
        type: '1'
      }
      this.appCommon.tloading('确认中...')
      this.appCommon.postReq('/safetypatrol/mypatrol/confirmRiskSource', params, process.env.VUE_APP_SAFE).then((rdata) => {
        console.log(rdata)
        this.$refs.riskList.onRefresh()
      })
    },
    hiddenNum(data) {
      console.log(data);
      if (data.isHidden === '无隐患') {
        this.$root.goPath('/noDangerReport', { uuid: data.uuid, 'editFlag': this.editFlag })
      }
    },
    noDanger(data) {
      this.checkLocation(this.$store.state.location.lng, this.$store.state.location.lat, data).then(() => {
        this.$root.goPath('/noDangerReport', { uuid: data.uuid, 'editFlag': this.editFlag })
      })
    },
    checkResource(item, type) {
      this.appCommon.tloading('检查中...')
      let params = {
        patrolTaskUuid: item.taskUuid,
        riskSourceUuid: item.riskName,
      }
      this.appCommon.postReq('/safetypatrol/patroltask/checkFxyCount', params, process.env.VUE_APP_SAFE).then(() => {
        // if(item.isLc === 'Y') {
        //   console.log(item);
        //   this.initAqPatrol(item.id)
        // } else {

        // }
        if (type === '1') {
          this.noDanger(item)
        } else {
          this.goDetail(item)
        }

      })
    },
    initAqPatrol(appBusiUuid) {
      this.appCommon.tloading();
      this.appCommon.postReq('/safetypatrol/mypatrol/initAqPatrol', { appBusiUuid: appBusiUuid }, process.env.VUE_APP_SAFE).then((rdata) => {
        console.log(rdata);
      })
    },
    goDetail(data) {
      if (!!data.isHidden && data.isHidden == "无隐患") {
        this.$toast('已进行无隐患打卡，不能添加隐患!')
        return;
      }
      this.checkLocation(this.$store.state.location.lng, this.$store.state.location.lat, data).then(() => {
        this.$root.goPath('/hiddenDangerList', { riskUuid: data.uuid, taskUuid: this.taskUuid, editFlag: this.editFlag })
      })
      //this.$root.goPath('/hiddenDangerList', {riskUuid: data.uuid, taskUuid: this.taskUuid, editFlag: this.editFlag})
      // this.appCommon.tloading('位置校验中...')
      // this.appCommon.getCurLocation().then(position => {
      //   let lng=position.coords.longitude;
      //   let lat=position.coords.latitude;
      //   this.checkLocation(lng, lat, data)
      // },(error) => {
      //   console.log(error);
      //   this.$root.goPath('/hiddenDangerList', {riskUuid: data.uuid, taskUuid: this.taskUuid, editFlag: this.editFlag})
      //   this.$toast('获取位置失败~')
      // })
    },
    checkLocation(lng, lat, data) {
      console.log(data);
      if (data.modifyStatus != '1') {
        return Promise.resolve();
      }
      let params = {
        positionX: lng,
        positionY: lat,
        riskId: data.riskName,
        type: '2'
      }
      this.appCommon.tloading('位置检查中...')
      return new Promise((resolve, reject) => {
        this.appCommon.postReq('/safetypatrol/patroltask/checkLocation', params, process.env.VUE_APP_SAFE).then(rdata => {
          let flag = rdata.parameters.flag;
          if (flag === '0') {
            resolve()
          } else {
            reject();
            this.$toast('不在巡检范围内~')
          }
        })
      })
    },
    query() {
      this.showQuery = false;
      this.$refs.riskList.onRefresh()
    },
    dataList(pageInfo) {
      if (!this.$store.state.location) {
        this.$toast('获取位置失败~')
        return Promise.reject('获取位置失败');
      }
      this.appCommon.tloading()
      let params = {
        bdId: this.$store.state.user.bdId,
        taskUuid: this.taskUuid,
        riskNameStr: this.queryParams.riskNameStr,
        dataWrap: JSON.stringify({
          pageInfo: pageInfo,
        }),
        lng: this.$store.state.location.lng,
        lat: this.$store.state.location.lat
      }
      return this.appCommon.postReq('/porta/patrolList', params, process.env.VUE_APP_SAFE)
    }
  }
}
</script>

<style lang="scss" scoped>
.fj {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
}
.no-danger {
  position: absolute;
  right: 10px;
  bottom: 10px;
}
</style>