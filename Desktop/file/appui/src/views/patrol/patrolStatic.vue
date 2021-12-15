<template>
  <div class="app-full">
    <van-nav-bar @click-left="$root.appBack()" title="巡检统计" :border="false" left-arrow></van-nav-bar>
    <div class="app-main">
      <app-list ref="fawList">
        <template v-slot:default="{data}">
          <div class="app-list">
            <div>
              <p class="app-list-item"><span>受检单位：</span>
                <span>{{data.sjdw}}</span>
              </p>
              <p class="app-list-item"><span>风险源名称：</span><span>{{data.riskNameStr}}</span></p>
              <p class="app-list-item"><span>整改责任人：</span>
                <span>{{data.zgzrr}}</span>
              </p>
              <p class="app-list-item"><span>已检次数：</span><span>{{data.checkNum}}</span></p>
              <p class="app-list-item"><span>应检次数：</span><span>{{data.totalCheckNum}}</span></p>
            </div>
          </div>
        </template>
      </app-list>
    </div>
  </div>
</template>

<script>
export default {
  name: 'patrolStatic',
  data() {
    return {

    }
  },
  created() {

  },
  methods: {
    dataList(pageInfo) {
      this.appCommon.tloading()
      let params = {
        bdId: this.$store.state.user.bdId,
        dataWrap: JSON.stringify({
          pageInfo: pageInfo,
        }),
        dc: JSON.stringify({})
      }
      return this.appCommon.postReq('/porta/queryPatrolCount', params, process.env.VUE_APP_SAFE)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>