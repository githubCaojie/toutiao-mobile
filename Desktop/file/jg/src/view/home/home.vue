<template>
  <el-container>
    <header-view/>
    <el-main class="main">
      <menu-view/>
    </el-main>
  </el-container>
</template>

<script>
import HeaderView from './childComps/HeaderView.vue'
import MenuView from './childComps/MenuViwe.vue'

export default {
  components: {
    HeaderView,
    MenuView
  }
}
</script>

<style lang="less" scoped>
.el-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  .main {
    width: 100%;
    padding: unset;
  }
}
</style>