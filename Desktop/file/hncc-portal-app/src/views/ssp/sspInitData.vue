<template>
  <div>
    <app-flowbtns
      @formEditFlag="editFlag = $event"
      @edit="auditEditFlag = $event"
      @refreshPage="refreshPage"
      @save="save"
      :params="wfParams"
    ></app-flowbtns>
    <ssp-form
      ref="sspForm"
      v-bind="$attrs"
      :hideBtn="true"
      :disabled="formEditFlag ? formEditFlag !== 'Y' : editFlag != 'Y'"
      :disabled2="edit ? edit !== 'Y' : auditEditFlag != 'Y'"
    >
    </ssp-form>
  </div>
</template>

<script>
import ssp from "./troubledeal";
import { postAction } from "@/api/app-base";
export default {
  name: "sspInitData",
  components: {
    "ssp-form": ssp,
  },
  props: {
    formEditFlag: String,
    edit: String,
  },
  data() {
    return {
      editFlag: "",
      wfParams: {},
      auditEditFlag: "",
    };
  },
  mounted() {
    this.initData(this.$attrs.id);
  },
  methods: {
    beforeBack() {
      return new Promise((resolve) => {
        this.appCommon.confirm('提示', '确定要返回吗？', () => {
          resolve(true)
        }, () => {
          resolve(false)
        })
      })
    },
    async checkRequired() {
      let flag = await this.$refs.sspForm.save();
      if (!flag) {
        this.$toast('请填写整改信息~')
      }
      return Promise.resolve(flag);
    },
    refreshPage() {
      this.initData(this.$attrs.id);
    },
    initData(id) {
      let params = {
        appBusiUuid: id,
        bdId: this.$store.state.user.bdId,
        dc: JSON.stringify({}),
        ...this.$attrs.params,
      };
      postAction("/troubleDeal/initTroubleDealData", params).then((rdata) => {
        this.wfParams = { ...this.$attrs.params, ...rdata.parameters };
      });
    },
    save() {
      this.$refs.sspForm.save();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>