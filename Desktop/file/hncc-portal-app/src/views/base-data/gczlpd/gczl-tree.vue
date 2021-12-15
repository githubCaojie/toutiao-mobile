<template>
  <div class="app-full">
    <van-nav-bar title="工程质量评定" :border="false" @click-left="$root.appBack()" left-arrow></van-nav-bar>
    <div class="app-main" style="overflow-x: auto;">
      <app-treeb @node-click="nodeClick" retriever="com.haiyisoft.pmzl.tree.ZlProjectTree" :dynamic="true" rootCode="0"></app-treeb>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'jgw-tree',
    data() {
      return {
        
      }
    },
    methods: {
      nodeClick(node) {
        console.log(node)
        this.$router.push({
          path: '/gczl-main',
          query: {
            xmId: node.code
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  
</style>