<template>
  <van-button size="small" @click="click" v-bind="$attrs" :text="text" :type="type" class="deal-btn"></van-button>
</template>

<script>
  export default {
    name: 'FlowBtn',
    data() {
      return {
        text: '',
        type: 'info',
        className: 'workflow-btn',
        click: undefined,
      }
    }
  }
</script>

<style lang="scss" scoped>
.deal-btn {
  margin-left: 10px;
}
</style>