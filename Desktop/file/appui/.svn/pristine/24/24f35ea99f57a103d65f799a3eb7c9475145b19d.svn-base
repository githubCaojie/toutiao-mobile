<template>
  <div class="app-full">
    <van-nav-bar @click-left="$root.appBack()" title="我的整改" :border="false" left-arrow></van-nav-bar>
    <div class="app-main">
      <app-list ref="myRectifyList" :immediate="false">
        <template v-slot:default="{data}">
          <div class="app-list">
            <div @click="goDetail(data)">
              <p class="app-list-item"><span>检查编号：</span><span>{{data.aqTask.checkNo}}</span></p>
              <p class="app-list-item"><span>风险源名称：</span><span>{{data.riskNameStr}}</span></p>
              <p class="app-list-item"><span>检查单位：</span>
                <app-drop-show :value="data.aqTask.checkCompany" dropName="ORG.ORG_PARTY_NAME"></app-drop-show>
              </p>
              <p class="app-list-item"><span>检查级别：</span>
                <app-drop-show :value="data.aqTask.patrolLevel" dropName="PATROL.LEVEL"></app-drop-show>
              </p>
              <p class="app-list-item"><span>检查人：</span>
                <app-drop-show :value="data.aqTask.checkPerson" dropName="ORG.PERSON_NAME"></app-drop-show>
              </p>
              <p class="app-list-item"><span>受检单位：</span>
                <app-drop-show :value="data.acceptCompany" dropName="ORG.ORG_PARTY_NAME"></app-drop-show>
              </p>
              <p class="app-list-item"><span>检查日期：</span><span>{{data.checkDate | dateFormatter}}</span></p>
              <p class="app-list-item"><span>整改期限：</span><span>{{data.modifyDate}}</span></p>
              <p class="app-list-item"><span>整改剩余天数：</span><span>{{data.modifyDays}}</span></p>
              <p class="app-list-item"><span>整改日期：</span><span>{{data.completionDate | dateFormatter}}</span></p>
              <p class="app-list-item"><span>整改责任人：</span>
                <app-inputbtn :value="data.modifyPerson" labelProvider="com.hncr.tysoft.carmanage.safetypatrol.labelprovider.ZgrLabels"
                  name="modifyPerson" disabled></app-inputbtn>
              </p>
              <p class="app-list-item"><span>隐患数目：</span><span style="color: #3372ff;font-weight:bold;">{{data.isHidden}}</span></p>
              <p class="app-list-item"><span>天气：</span>
                <app-drop-show :value="data.aqTask.weather" dropName="SECURITY.WEATHER"></app-drop-show>
              </p>
              <p class="app-list-item"><span>整改状态：</span>
                <span>{{data.modifyPer}}</span>
                <!-- <app-drop-show :value="data.modifyStatus" dropName="SECURITY.MODIFY_STATUS"></app-drop-show> -->
              </p>
            </div>
          </div>
        </template>
      </app-list>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myRectifyList',
  data() {
    return {

    }
  },
  created() {

  },
  activated() {
    this.$refs.myRectifyList.onRefresh()
  },
  methods: {
    goDetail(data) {
      console.log(data);
      if (data.isLc === 'Y') {
        this.$root.goPath('/flowMain', {appInstanceId: data.instanceId,openMode: '4',title: '安全巡检'})
      } else {
        this.$root.goPath('/rectifyDetail', 
                {patrolUuid: data.uuid, taskUuid: data.taskUuid, modifyStatus: data.modifyStatus,zgFlag: data.zgFlag,zgtjFlag:data.zgtjFlag})
      }
    },
    delItem(item) {
      this.appCommon.confirm('提示', '确定要删除吗？', () => {
        let params = {
          dataWrap: JSON.stringify({
            dataList: [item],
          }),
        }
        this.appCommon.tloading('删除中...')
        this.appCommon.postReq('/porta/remove', params, process.env.VUE_APP_SAFE).then(() => {
          this.$toast('删除成功~')
          this.$refs.myRectifyList.delItem(item)
        })
      })
    },
    dataList(pageInfo) {
      this.appCommon.tloading()
      let params = {
        bdId: this.$store.state.user.bdId,
        dataWrap: JSON.stringify({
          pageInfo: pageInfo,
        }),
      }
      return this.appCommon.postReq('/mobile/retifi/queryZg', params, process.env.VUE_APP_SAFE)
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