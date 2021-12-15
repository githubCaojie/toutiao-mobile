<template>
  <div class="app-full">
    <van-nav-bar @click-left="$root.appBack()" title="整改列表" :border="false" left-arrow></van-nav-bar>
    <div class="app-main">
      <app-list ref="fawList">
        <template v-slot:default="{data}">
          <div class="app-list">
            <div @click="$root.goPath('/rectify', {uuid: data.uuid})">
              <p class="app-list-item"><span>隐患名称：</span><span>{{data.hiddenCode}}</span></p>
              <p class="app-list-item"><span>隐患描述：</span><span>{{data.hiddenName}}</span></p>
            </div>
          </div>
        </template>
      </app-list>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rectifyList',
  data() {
    return {
      riskUuid: '',
      patrolUuid: '',
    }
  },
  created() {
    this.patrolUuid = this.$route.query.patrolUuid
    this.riskUuid = this.$route.query.riskUuid
  },
  methods: {
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
          this.$refs.fawList.delItem(item)
        })
      })
    },
    dataList(pageInfo) {
      this.appCommon.tloading()
      let params = {
        dataWrap: JSON.stringify({
          pageInfo: pageInfo,
        }),
        patrolUuid: this.patrolUuid,
        riskUuid: this.riskUuid
      }
      return this.appCommon.postReq('/porta/queryHiddenDetail', params, process.env.VUE_APP_SAFE)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>