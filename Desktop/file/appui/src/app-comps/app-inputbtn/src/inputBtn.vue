<template>
  <van-field readonly v-if="!disabled" v-model="label" v-bind="$attrs" right-icon="ellipsis" />
  <span v-else>{{label}}</span>
</template>

<script>
export default {
  name: 'inputBtn',
  props: {
    value: [String, Number],
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      label: '',
    }
  },
  watch: {
    value: {
      immediate: true,
      handler: function() {
        this.getLabel()
      }
    }
  },
  methods: {
    getLabel() {
      if (!this.value) return;
      let temp = {...this.$attrs};
      temp.code = this.value
      let props = {
        data: temp,
        key: temp.name + '-' + this.value,
        fn: cb
      }
      let that = this;
      function cb(label) {
        that.label = label;
      }
      this.$store.dispatch('inputbtn/asyncLabelData', props)
      // let temp = {...this.$attrs};
      // temp.codes = [this.value]
      // let params = {
      //   input: JSON.stringify([temp])
      // }
      // this.appCommon.postReq('/framework/ajaxdatagrid.do', params).then(rdata => {
      //   this.label = rdata[0].labels.join(';')
      // })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>