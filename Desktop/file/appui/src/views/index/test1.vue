<template>
  <div id="parent" style="height: 100vh;overflow-y:auto;">
    test11111111111111111
    <app-input label="test1" v-model="val"></app-input>
    <van-button @click="$root.goPath('/test2')">next</van-button>
    <div class="test"></div>
  </div>
</template>

<script>
export default {
  name: 'test1',
  data() {
    return {
      val: '',
      clientHeight: document.body.clientHeight,
      curId: '',
    }
  },
  mounted(){
    
  },
  methods: {
    test(id){
      this.curId = id;
      let ele = document.getElementById(id);
      console.log(ele.getBoundingClientRect())
    }
  }
}
</script>

<style lang="scss" scoped>
.test {
  width: 375px;
  height: 100px;
  background-color: red;
}
</style>