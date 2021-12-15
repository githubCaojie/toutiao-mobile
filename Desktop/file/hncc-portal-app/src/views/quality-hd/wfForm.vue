<template>
  <div>
    <app-flowbtns @formEditFlag="editFlag = $event" @edit="auditEditFlag = $event" @refreshPage="refreshPage" @save="save" :params="wfParams"></app-flowbtns>
    <hdForm ref="sspForm" :id="$attrs.params.appBusiUuid" v-bind="$attrs" :disabled="formEditFlag ? formEditFlag !== 'Y' : editFlag != 'Y'" :disabled2="edit ? edit !== 'Y' : auditEditFlag != 'Y'" @model="setModel">
    </hdForm>
    <van-form ref="dealForm">
      <app-date :disabled="disabled" required v-model="model.dealTime" type="datetime" :label="'隐患处理时间'" :rules="[{ required: true, message: '请输入隐患处理时间' }]"></app-date>
      <app-input required type="textarea" label="隐患处理描述：" v-model="model.dealDesc" :rules="[{ required: true, message: '请输入隐患处理描述' }]"></app-input>

      <app-img-choose :disabled="disabled" ref="imgchoose" :objUuid="model.dealId" type="1"></app-img-choose>
    </van-form>
  </div>
</template>

<script>
import hdForm from "./compHdForm";
import { postAction } from "@/api/app-base";
export default {
  name: "sspInitData",
  components: {
    hdForm
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
      model: {},
      disabled: false,
    };
  },
  mounted() {
    console.log(this.$attrs);
    this.disabled = this.$attrs.params.editFlag !== 'Y';
    this.initData(this.$attrs.id);
  },
  methods: {
    setModel($event) {
      console.log($event)
      this.model = $event;
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
      postAction("/zlHiddenTrouble/initZlHiddenTroubleData", params).then((rdata) => {
        this.wfParams = { ...this.$attrs.params, ...rdata.parameters };
        console.log(this.wfParams)
      });
    },
    save() {
      this.appCommon.getCurLocation().then(position => {
        this.model.zgLng = position.coords.longitude;
        this.model.zgLat = position.coords.latitude;
        this.$refs.dealForm.validate().then(() => {
          this.$refs.sspForm.save().then(() => {
            this.$toast('保存成功~')
          });
        })
      }, () => {
        this.$toast('获取位置失败~');
      })
    },
  },
};
</script>

<style lang="scss" scoped>
</style>