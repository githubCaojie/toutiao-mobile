<template>
  <div class="app-full">
    <van-nav-bar @click-left="$root.appBack()" title="巡检明细" :border="false" left-arrow></van-nav-bar>
    <div class="app-main-btn">
      <component ref="patrolForm" disabled :model="model" :is="patrolForm"></component>
      <van-divider>隐患</van-divider>
      <div class="app-list" v-for="data in dangerList" :key="data.uuid">
        <div @click="$root.goPath('/addHiddenDanger', {uuid: data.uuid, riskUuid:model.uuid, taskUuid:model.aqTask.uuid, editFlag})">
          <p class="app-list-item"><span>隐患名称：</span><span>{{data.hiddenCode}}</span></p>
          <p class="app-list-item"><span>隐患描述：</span><span>{{data.hiddenName}}</span></p>
          <!-- <img v-if="editFlag==='Y'" @click.stop="delItem(data)" class="list-item-del" src="../../assets/imgs/del.png" alt=""> -->
        </div>
      </div>
    </div>
    <div class="bottom">
      <van-button type="info" @click="convey('/convey')" v-if="model.xfFlag==='Y'">下发</van-button>
      <van-button @click="returnByck(model)" type="primary" v-if="model.thFlag==='Y'">退回</van-button>
      <van-button @click="aprrove(model)" type="info" v-if="model. tgFlag==='Y'">通过</van-button>
    </div>
  </div>
</template>

<script>
import patrolForm from './comp-patrol'
export default {
  name: 'taskDetail',
  data() {
    return {
      patrolForm,
      patrolUuid: '',
      userFlag: '',
      flags: '',
      dangerList: [],
      model: {}
    }
  },
  created() {
    this.model=this.$route.query.data;
    console.log(this.model);
    this.patrolUuid=this.$route.query.patrolUuid
    this.userFlag=this.$route.query.userFlag
    this.flags=this.$route.query.flags
    this.dataList()
  },
  methods: {
    convey(method) {
      this.appCommon.confirm('提示','确定要下发吗？',() => {
        let params={
          uuid: this.model.uuid,
          patrolLevel: this.model.patrolLevel
        }
        this.appCommon.tloading()
        let url = '/mobile/retifi' + method;
        this.appCommon.postReq(url, params,process.env.VUE_APP_SAFE).then(() => {
          this.$toast('下发成功~')
          this.$root.appBack()
        })
      })
    },
    returnByck() {
      this.appCommon.confirm('提示','确定要退回吗？',() => {
        let params={
          uuid: this.model.uuid,
          patrolLevel: this.model.patrolLevel
        }
        this.appCommon.tloading()
        this.appCommon.postReq('/mobile/retifi/returnByck',params,process.env.VUE_APP_SAFE).then(() => {
          this.$toast('退回成功~')
          this.$root.appBack()
        })
      })
    },
    aprrove() {
      this.appCommon.confirm('提示','确定要通过吗？',() => {
        let params={
          uuid: this.model.uuid,
          patrolLevel: this.model.aqTask.patrolLevel
        }
        this.appCommon.tloading()
        this.appCommon.postReq('/mobile/retifi/aprrove',params,process.env.VUE_APP_SAFE).then(() => {
          this.$toast('通过成功~')
          this.$root.appBack()
        })
      })
    },
    dataList() {
      this.appCommon.tloading()
      let params = {
        patrolUuid: this.model.uuid,
        taskUuid: this.model.aqTask.uuid,
        dataWrap: JSON.stringify({
          // pageInfo: pageInfo,
        }),
      }
      this.appCommon.postReq('/porta/hiddenDetailList', params, process.env.VUE_APP_SAFE).then(rdata => {
        this.dangerList = rdata.dataWraps.dataWrap.dataList;
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.bottom {
  button {
    margin: 2.5px 5px;
    width: 30%;
    height: 40px;
  }
}
</style>