<template>
  <div>
    test3333333333333333333
    <app-input label="test3" v-model="val"></app-input>
    <van-button @click="$root.goPath('/test4')">next</van-button>
  </div>
</template>

<script>
  export default {
    name: 'test3',
    data() {
      return {
        val: '',
      }
    }
  }
</script>

<style lang="scss" scoped>
  
</style>