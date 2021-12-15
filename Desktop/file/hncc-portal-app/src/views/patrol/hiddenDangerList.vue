<template>
  <div class="app-full">
    <van-nav-bar @click-left="$root.appBack()" title="隐患" :border="false" left-arrow></van-nav-bar>
    <div class="app-main">
      <app-list ref="HDangerList">
        <template v-slot:default="{data}">
          <div class="app-list">
            <div @click="$root.goPath('/addHiddenDanger', {uuid: data.uuid, riskUuid, taskUuid, editFlag})">
              <p class="app-list-item"><span>隐患名称：</span><span>{{data.hiddenCode}}</span></p>
              <p class="app-list-item"><span>隐患描述：</span><span>{{data.hiddenName}}</span></p>
              <img v-if="editFlag==='Y'" @click.stop="delItem(data)" class="list-item-del" src="../../assets/imgs/del.png" alt="">
            </div>
          </div>
        </template>
      </app-list>
    </div>
    <div class="list-btn">
      <img v-if="editFlag==='Y'" @click.stop="$root.goPath('/addHiddenDanger', {riskUuid, taskUuid, editFlag})" class="list-item-add" src="../../assets/imgs/add.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'hiddenDangerList',
  data() {
    return {
      riskUuid: '',
      taskUuid: '',
      editFlag: ''
    }
  },
  created() {
    this.taskUuid = this.$route.query.taskUuid
    this.riskUuid = this.$route.query.riskUuid
    this.editFlag = this.$route.query.editFlag
  },
  activated() {
    this.$refs.HDangerList.onRefresh()
  },
  methods: {
    delItem(item) {
      this.appCommon.confirm('提示', '确定要删除吗？', () => {
        let params = {
          uuid: item.uuid
        }
        this.appCommon.tloading('删除中...')
        this.appCommon.postReq('/porta/removeyh', params, process.env.VUE_APP_SAFE).then(() => {
          this.$toast('删除成功~')
          this.$refs.HDangerList.delItem(item)
        })
      })
    },
    dataList(pageInfo) {
      this.appCommon.tloading()
      let params = {
        patrolUuid: this.riskUuid,
        taskUuid: this.taskUuid,
        dataWrap: JSON.stringify({
          pageInfo: pageInfo,
        }),
      }
      return this.appCommon.postReq('/porta/hiddenDetailList', params, process.env.VUE_APP_SAFE)
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