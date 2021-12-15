<template>
  <van-field :required="required" class="appIpt" :rules="rules" v-bind="$attrs" v-on="$listeners" >

  </van-field>
</template>

<script>
export default {
  name: "appInput",
  props: {
    required: {
      type: Boolean,
      default: false
    },
    maxLenght: {
      type: [Number],
      default: 128
    },
  },
  data() {
    return {
      rules: [],
    };
  },
  computed: {},
  mounted() {
    this.initRules();
  },
  methods: {
    initRules() {
      let myRules = this.$attrs.rules || []
      if (this.required) {
        myRules.push({required: true, trigger: 'onBlur', message: `请填写${this.$attrs.label || ''}` })
      }
      if (this.maxLenght) {
        myRules.push({validator: this.validator, trigger: 'onBlur', message: `长度不能超过${this.maxLenght}`})
      }
      this.rules = myRules
    },
    validator(val) {
      return val.length <= this.maxLenght;
    },
  },
};
</script>

<style lang="scss" scoped>
.appIpt {
  &::after {
    position: absolute;
    box-sizing: border-box;
    content: " ";
    pointer-events: none;
    right: 0;
    bottom: 0;
    left: 0.42667rem;
    border-bottom: 0.02667rem solid #ebedf0;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }
}
</style>