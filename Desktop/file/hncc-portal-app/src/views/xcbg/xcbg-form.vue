<template>
  <van-skeleton title :row="5" :loading="loading">
    <van-form :disabled="formDisable" ref="form" @submit="save" :scroll-to-error="true">
      <app-drop required disabled title="添加人" dropName="ORG.PERSON_NAME" v-model="model.addMan" :rules="[{ required: true, message: '请输入检查人' }]"></app-drop>
      <app-input required label="部位编码：" v-model="model.bwbm" :rules="[{ required: true, message: '请输入部位编码' }]"></app-input>
      <app-input required type="textarea" label="变更内容：" v-model="model.bgnr" :rules="[{ required: true, message: '请输入变更内容' }]"></app-input>
      <app-input required type="textarea" label="备注：" v-model="model.bz" :rules="[{ required: true, message: '请输入备注' }]"></app-input>
      <app-img-choose :disabled="formDisable" ref="imgchoose" :objUuid="model.id" type="1"></app-img-choose>
    </van-form>
  </van-skeleton>
</template>

<script>
export default {
  name: 'compHdForm',
  props: {
    id: [String, Number],
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      model: {
        busiCode: this.$store.state.user.bdId
      },
      loading: true,
      formDisable: this.disabled,
      appTaskId: "",
      appInstanceId: this.id,
      chooseLoc: false
    }
  },
  watch: {
    id: {
      immediate: true,
      handler: function () {
        this.getModel()
      }
    },
    disabled: function(nval) {
      this.formDisable = nval;
    }
  },
  methods: {
    getModel() {
      let params = {
        dc: JSON.stringify({}),
        bdId: this.$store.state.user.bdId,
        appBusiUuid: this.id,
      };
      this.appCommon.postReq("/zlXcbg/initData", params).then((rdata) => {
        this.model = rdata.dataWraps.dataWrap.data;
        this.formDisable = this.disabled || this.model.status != '0'
        this.$emit('model', this.model)
        this.model.busiCode = this.$store.state.user.bdId
        this.appInstanceId = rdata.parameters.appInstanceId;
        this.appTaskId = rdata.parameters.appTaskId;
        this.loading = false;
      });
    },
    save() {
      return new Promise((resolve, reject) => {
        this.$refs.form.validate().then(() => {
          let imgNum = 0;
          for (let file of this.$refs.imgchoose.fileList) {
            if (this.appCommon.isPicture(file.preview) && file.uploaded) {
              imgNum++;
            }
          }
          if (imgNum > 3) {
            this.$toast("上传照片不得超过三张~");
            reject('上传照片不得超过三张~')
            return;
          }
          let params = {
            dataWrap: JSON.stringify({
              data: this.model,
            }),
          };
          this.appCommon.tloading("保存中...");
          this.appCommon.postReq("/zlXcbg/appReg", params).then((rdata) => {
            this.appInstanceId = rdata.parameters.appInstanceId;
            this.appTaskId = rdata.parameters.appTaskId;
            resolve(rdata)
          });
        }, () => {
          reject('请填写必要信息~')
        })

      })

    },
    async normalSend() {
      try {
        await this.save();
        let params = {
          dc: JSON.stringify({}),
          appInstanceId: this.appInstanceId,
          appTaskId: this.appTaskId,
        };
        this.appCommon.tloading("传递中...");
        let rdata = await this.appCommon.postReq("jt/app/common/normalSend", params)
        return Promise.resolve(rdata)
      } catch (error) {
        return Promise.reject(error)
      }
    },
    nodeClick(node) {
      console.log(node);
      this.model.placeName = node.label;
      this.model.troublePlace = node.code;
    },
    chooseTree() {
      if (this.disabled) return
      this.chooseLoc = true;
    }
  }
}
</script>

<style lang="scss" scoped>
</style>