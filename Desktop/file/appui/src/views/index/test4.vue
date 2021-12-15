<template>
  <div>
    test444444444444444444444444
    <app-input label="test4" v-model="val"></app-input>
    <van-button @click="$root.goPath('/test2')">next</van-button>
  </div>
</template>

<script>
  export default {
    name: 'test4',
    data() {
      return {
        val: '',
      }
    }
  }
</script>

<style lang="scss" scoped>
  
</style>