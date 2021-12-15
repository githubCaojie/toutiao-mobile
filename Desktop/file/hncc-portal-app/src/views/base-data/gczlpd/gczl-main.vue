<template>
  <div class="app-full">
    <van-nav-bar title="工程质量评定" :border="false" @click-left="$root.appBack()" left-arrow></van-nav-bar>
    <div class="app-main">
      <div class="tab-content">
        <component :is="comp" :xmId="xmId"></component>
      </div>
      <van-tabs @change="tabChange" v-model="active">
        <van-tab title="列表"></van-tab>
        <van-tab title="要求"></van-tab>
      </van-tabs>
    </div>
  </div>
</template>


<script>
import info from './gczl-main-info'
import gczlMainInfoVue from './gczl-main-info.vue'
import instruct from './gczl-main-instruct'
import gczlMainInstructVue from './gczl-main-instruct.vue'
  export default {
    name: '',
    data() {
      return {
        active: '',
        comp: info,
        xmId: '',
      }
    },
    created() {
      this.xmId = this.$route.query.xmId
    },
    methods: {
      tabChange(event) {
        this.comp = event === 1? gczlMainInstructVue: gczlMainInfoVue
        console.log(event)
      }
    }
  }
</script>

<style lang="scss" scoped>
.tab-content {
  height: calc(100% - 45px);
  overflow-y: auto;
}
</style>