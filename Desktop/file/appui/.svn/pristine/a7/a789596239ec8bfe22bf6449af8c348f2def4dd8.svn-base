<template>
  <div class="app-full">
    <van-nav-bar
      title="随手拍"
      :border="false"
      @click-left="$root.appBack()"
      left-arrow
    ></van-nav-bar>
    <div :id="compId" class="app-main">
      <ssp-from
        ref="sspForm"
        :params="params"
        :disabled="data.status != '0' ? true : false"
        :disabled2="data.status != '0' ? true : false"
      ></ssp-from>
    </div>
  </div>
</template>

<script>
import ssp from "./troubledeal";
import { postAction, worderInitData } from "@/api/app-base";
import appMixin from "@/utils/appMixin";
export default {
  name: "sspForm",
  components: {
    "ssp-from": ssp,
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
    this.data = this.$route.query.data;
    this.params.appBusiUuid = this.data.id;
  },
  methods: {
    // sendSucc(values) {
    //   this.$toast('保存成功~');
    //   this.$root.appBack(-2, 500);
    // },
  },
};
</script>

<style lang="scss" scoped>
</style>