<template>
  <div class="app-full">
    <van-nav-bar @click-left="$root.appBack()" title="我的巡检" :border="false" left-arrow></van-nav-bar>
    <van-tabs v-model="active" @change="tabChange">
      <van-tab title="待整改" name="1"></van-tab>
      <van-tab title="已整改" name="2"></van-tab>
      <van-tab title="已超期" name="3"></van-tab>
      <van-tab title="无隐患" name="4"></van-tab>
    </van-tabs>
    <div class="app-main-btn">
      <app-list ref="myPatrolList" :immediate="true">
        <template v-slot:default="{data}">
          <div class="app-list">
            <div @click="$root.goPath('/myPatrolDetail', {data, userFlag, flags})">
            <p class="app-list-item"><span>整改状态：</span><span>{{data.modifyPer}}</span></p>
              <p class="app-list-item"><span>检查编号：</span><span>{{data.aqTask.checkNo}}</span></p>
              <p class="app-list-item"><span>风险源名称：</span><span>{{data.riskNameStr}}</span></p>
              <p class="app-list-item"><span>检查单位：</span>
                <app-drop-show :value="data.aqTask.checkCompany" dropName="ORG.ORG_PARTY_NAME"></app-drop-show>
              </p>
              <p class="app-list-item"><span>检查级别：</span>
                <app-drop-show :value="data.aqTask.patrolLevel" dropName="PATROL.LEVEL"></app-drop-show>
              </p>
              <!-- <p class="app-list-item"><span>检查人：</span>
                <app-drop-show :value="data.aqTask.checkPerson" dropName="EMP.LABLE"></app-drop-show>
              </p> -->
              <p class="app-list-item"><span>受检单位：</span>
                <app-drop-show :value="data.acceptCompany" dropName="ORG.ORG_PARTY_NAME"></app-drop-show>
              </p>
              <!-- <p class="app-list-item"><span>检查日期：</span><span>{{data.checkDate | dateFormatter}}</span></p> -->
              <!-- <p class="app-list-item"><span>整改期限：</span><span>{{data.modifyDate}}</span></p> -->
              <p class="app-list-item"><span>整改剩余天数：</span><span>{{data.modifyDays}}</span></p>
              <!-- <p class="app-list-item"><span>整改日期：</span><span>{{data.completionDate | dateFormatter}}</span></p> -->
              <!-- <p class="app-list-item"><span>整改责任人：</span>
                <app-inputbtn :value="data.modifyPerson" labelProvider="com.hncr.tysoft.carmanage.safetypatrol.labelprovider.ZgrLabels"
                  name="modifyPerson" disabled></app-inputbtn>
              </p> -->
              <p @click.stop="$root.goPath('/hiddenDangerList', {taskUuid: data.aqTask.uuid, riskUuid: data.uuid})" class="app-list-item"><span>隐患数目：</span><span style="color: #3372ff;font-weight:bold;">{{data.isHidden}}</span></p>
            </div>
          </div>
        </template>
      </app-list>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'myPatrol',
  data() {
    return {
      active: 0,
      flags: '1',
      userFlag: '',
    }
  },
  activated() {
    this.$refs.myPatrolList.onRefresh();
  },
  methods: {
    tabChange(flags) {
      this.flags = flags;
      this.$refs.myPatrolList.onRefresh();
    },
    dataList() {
      this.appCommon.tloading()
      let params = {
        bdId: this.$store.state.user.bdId,
        flags: this.flags,
      }
      return new Promise(resolve => {
        this.appCommon.postReq('/mobile/retifi/', params, process.env.VUE_APP_SAFE).then(rdata => {
          this.userFlag = rdata.parameters.userFlag
          resolve(rdata)
        })
      })
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
</style>