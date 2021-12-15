<template>
  <div class="app-full">
    <van-nav-bar @click-left="$root.appBack()" title="隐患编码" :border="false" left-arrow></van-nav-bar>
    <div class="app-main-btn">
      <app-list ref="fawList">
        <template v-slot:default="{data}">
          <div class="app-list" :class="{'selected': data.selected}">
            <div @click="toggleSelected(data)">
              <p class="app-list-item"><span>隐患编码：</span><span>{{data.safeCode}}</span></p>
              <p class="app-list-item"><span>隐患名称：</span><span>{{data.levelNameFive}}</span></p>
            </div>
          </div>
        </template>
      </app-list>
    </div>
    <van-button @click="sure" class="btn-large" type="info">确定</van-button>
  </div>
</template>

<script>
export default {
  name: 'chooseHDanger',
  data() {
    return {
      pre: undefined,
      callback: undefined,
      patrolUuid: '',
    }
  },
  created() {
    this.patrolUuid = this.$route.params.patrolUuid
    this.callback = this.$route.params.callback
  },
  methods: {
    sure() {
      if (!this.pre) {
        this.$toast('请选择~')
        return
      }
      this.callback(this.pre)
      this.$root.appBack()
    },
    toggleSelected(data) {
      if (this.pre) {
        this.$set(this.pre, 'selected', false)
      }
      this.$set(data, 'selected', !data.selected)
      this.pre = data;
    },
    dataList(pageInfo) {
      this.appCommon.tloading()
      let params = {
        patrolUuid: this.patrolUuid,
        dataWrap: JSON.stringify({
          pageInfo: pageInfo,
        }),
      }
      return this.appCommon.postReq('/porta/selectHidden', params, process.env.VUE_APP_SAFE)
    }
  }
}
</script>

<style lang="scss" scoped>
.selected {
  border: 1px solid #1989fa;
}
</style>