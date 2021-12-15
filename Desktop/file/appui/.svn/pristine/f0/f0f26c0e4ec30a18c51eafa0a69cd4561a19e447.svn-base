<template>
  <div class="app-full">
    <van-nav-bar title="质量单元" :border="false" @click-left="$root.appBack()" left-arrow></van-nav-bar>
    <div class="app-main" style="overflow-x: auto;">
      <app-treeb @node-click="nodeClick" style="width: 130vw;" retriever="com.haiyisoft.pmzl.tree.ZlEwmUnitTree" :dynamic="true" rootCode="104"></app-treeb>
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
          path: '/jgw-list',
          query: {
            unitId: node.code
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  
</style>