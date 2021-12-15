<template>
  <div class="app-full">
    <van-nav-bar @click-left="$root.appBack" :title="title" :border="false" left-arrow left-text="返回"></van-nav-bar>
    <div class="app-main">
      <keep-alive>
        <component ref="tabComp" :params="params" :is="curComp"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import flowUtil from './flowUtil'
export default {
  name: "flowBusi",
  data() {
    return {
      curComp: '',
    };
  },
  created(){
    let query = this.$route.query;
    this.title = query.title;
    this.params = query.params;
    let paramObj = JSON.parse(this.params);
    flowUtil.getBusiComp.call(this, paramObj.stdTacheNo, function(comp) {
      this.curComp = comp.default;
    })
  },
  methods: {
    
  }
};
</script>

<style lang="scss" scoped>
.tab-content {
  height: calc(100% - 45px);
  overflow: hidden;
}
</style>