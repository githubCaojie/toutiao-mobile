<template>
  <div class="app-full">
    <van-nav-bar title="质量单元" :border="false" @click-left="$root.appBack()" left-arrow></van-nav-bar>
    <div class="app-main" style="overflow-x: auto;">
      <app-treeb @node-click="nodeClick" style="width: 150vw;" retriever="com.haiyisoft.pmzl.tree.ZlUnitByTree" :dynamic="true" :rootCode="$store.state.user.bdId"></app-treeb>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'zlTree',
    data() {
      return {
        
      }
    },
    methods: {
      nodeClick(data) {
        this.$router.push({
          path: '/XczjTableList',
          query: {
            unitId: data.code
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  
</style>