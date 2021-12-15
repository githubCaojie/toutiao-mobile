<template>
  <div class="app-full">
    <van-nav-bar title="领导随手拍" :border="false" @click-left="$root.appBack()" left-arrow></van-nav-bar>
    <div :id="compId" class="app-main">
      <comp-ldform ref="sspForm" @saveSucc="saveSucc" :params="params" ></comp-ldform>
    </div>
  </div>
</template>

<script>
import ldform from "./comp-ldform";
import appMixin from "@/utils/appMixin";
export default {
  name: "ldsspForm",
  components: {
    "comp-ldform": ldform,
  }, 
  mixins: [appMixin],
  data() {
    return {
      compId: this.appCommon.guuid(),
      id: "",
      objUuid: "",
      objUuidFj: "",
      disabled: false,
      unitId: "",
      model: {},
      params: {},
    };
  },
  created() {
  },
  methods: {
    saveSucc() {
      this.$toast('保存成功~');
      this.$root.appBack(-1, 500);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>