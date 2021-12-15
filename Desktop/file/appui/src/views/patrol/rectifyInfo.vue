<template>
  <div class="app-full">
    <van-nav-bar @click-left="$root.appBack()" title="整改信息" :border="false" left-arrow></van-nav-bar>
    <div class="app-main">
      
    </div>
    <div class="bottom">
      <van-button @click="$root.goPath('/rectifyList',{taskUuid: id, editFlag})" type="info">整改</van-button>
      <van-button @click="$refs.taskForm.save()" type="primary">提交</van-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'rectifyInfo',
    data() {
      return {
        
      }
    }
  }
</script>

<style lang="scss" scoped>
  
</style>