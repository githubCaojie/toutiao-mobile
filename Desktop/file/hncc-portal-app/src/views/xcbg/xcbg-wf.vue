<template>
  <div>
    <app-flowbtns @formEditFlag="editFlag = $event" @edit="auditEditFlag = $event" @refreshPage="refreshPage" @save="save" :params="wfParams"></app-flowbtns>
    <xcbg-form ref="xcbgForm" 
      :id="$attrs.params.appBusiUuid" 
      v-bind="$attrs" :disabled="editFlag != 'Y'" >
    </xcbg-form>
  </div>
</template>

<script>
import form from "./xcbg-form";
import { postAction } from "@/api/app-base";
export default {
  name: "sspInitData",
  components: {
    'xcbg-form': form
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
      postAction(this.$attrs.params.initMethod, params).then((rdata) => {
        this.wfParams = { ...this.$attrs.params, ...rdata.parameters };
        if (this.wfParams.editFlag) {
          this.editFlag = this.wfParams.editFlag;
        }
      });
    },
    save() {
      this.$refs.xcbgForm.save().then(() => {
        this.$toast('保存成功~')
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>