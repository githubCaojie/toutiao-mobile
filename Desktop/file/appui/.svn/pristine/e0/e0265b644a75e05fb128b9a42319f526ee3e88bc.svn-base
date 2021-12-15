<template>
  <div>
    <van-form ref="trouble" @submit="save" :scroll-to-error="true">
      <van-divider :style="{
          color: '#1989fa',
          borderColor: '#1989fa',
          padding: '0 16px',
        }">问题明细</van-divider>
      <app-input disabled label="检查编号：" v-model="model.jcbh"></app-input>
      <app-date required :disabled="disabled" label="检查时间：" v-model="model.troubleTime" :rules="[{ required: true, message: '请输入检查时间' }]"></app-date>
      <app-drop :disabled="disabled" required title="检查人：" dropName="ORG.PERSON_NAME" v-model="model.checkMan" :rules="[{ required: true, message: '请输入检查人' }]"></app-drop>
      <app-drop :disabled="disabled" required v-model="model.troubleType" :label="'问题类型：'" :dpData="troubleTypeList" :rules="[{ required: true, message: '请输入问题类型' }]"></app-drop>
      <app-input :disabled="disabled" required label="问题地点：" v-model="model.troublePlace" :rules="[{ required: true, message: '请输入问题地点' }]"></app-input>
      <app-input :disabled="disabled" required label="问题描述：" v-model="model.troubleDesc" type="textarea" :rules="[{ required: true, message: '请输入问题描述' }]"></app-input>
      <van-divider>问题照片</van-divider>
      <app-img-choose :disabled="disabled" :objUuid="model.id" type="1" :watermark="watermark"></app-img-choose>
      <div v-if="wfParams.auditEditFlag !== null">
        <van-divider :style="{
            color: '#1989fa',
            borderColor: '#1989fa',
            padding: '0 16px',
          }">整改明细</van-divider>
        <app-date :disabled="wfParams.auditEditFlag!=='Y'" required v-model="model.zgTime" type="datetime" :label="'整改时间'" :rules="[{ required: true, message: '请输入整改时间' }]"></app-date>
        <app-input :disabled="wfParams.auditEditFlag!=='Y'" required label="整改描述：" v-model="model.zgDesc" type="textarea" :rules="[{ required: true, message: '请输入整改描述' }]"></app-input>
        <van-divider>整改照片</van-divider>
        <app-img-choose ref="imgchoose" :disabled="wfParams.auditEditFlag!=='Y'" :objUuid="model.zgPicId" type="1" :watermark="watermark"></app-img-choose>
      </div>
      <div class="app-fa" v-if="!disabled && !hideBtn">
        <van-button style="width: 85%" block type="info" native-type="save">保存</van-button>
        <!-- <van-button style="width: 45%" block type="primary" @click.prevent="report">传递</van-button> -->
      </div>
    </van-form>
  </div>
</template>

<script>
import appUtils from "@/utils/appUtils";
export default {
  name: "compLdform",
  data() {
    return {
      model: {},
      troubleTypeList: [],
      editFlag: "",
      // auditEditFlag: '',
      appTaskId: "",
      appInstanceId: "",
      instanceId: "",
      watermark: {
        title: this.$store.getters["userView"].operatorName + '（' + this.$store.state.user.bd.secName + '）',
        location: '',
      },
      wfParams: {},
    };
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    hideBtn: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    "$attrs.params": {
      immediate: true,
      deep: true,
      handler: function (nval, oldVal) {
        if (!oldVal) {
          this.initData(nval.appBusiUuid);
        }
      },
    },
  },
  created() {
    this.data = this.$route.query.data;
  },
  methods: {
    initData(appBusiUuid) {
      let params = {
        dc: JSON.stringify({}),
        bdId: this.$store.state.user.bdId,
        appBusiUuid: appBusiUuid,
        ...this.$attrs.params
      };
      console.log(params, '--------------')
      this.appCommon
        .postReq("/leadTroubleDeal/initLeadTroubleDealData", params)
        .then((rdata) => {
          this.model = rdata.dataWraps.dataWrap.data;
          this.troubleTypeList = rdata.parameters.troubleTypeList;
          this.appInstanceId = rdata.parameters.appInstanceId;
          this.appTaskId = rdata.parameters.appTaskId;
          this.wfParams = { ...this.$attrs.params, ...rdata.parameters }
        });
    },
    save() {
      return new Promise((resolve) => {
        this.$refs.trouble.validate().then(() => {
          this.model.prjId = this.$store.state.user.bd.prj
          let params = {
            dataWrap: JSON.stringify({
              data: this.model,
            }),
          };
          this.appCommon.tloading("保存中...");
          this.appCommon.postReq("/leadTroubleDeal/appReg", params).then((rdata) => {
            this.$toast("保存成功~");
            this.$emit('saveSucc')
            resolve(true)
          });
        }).catch(() => {
          resolve(false)
        })
      })


    },
    report() {
      // let imgNum = 0;
      // for(let file of this.$refs.imgchoose.fileList) {
      //   if (this.appCommon.isPicture(file.preview) && file.uploaded) {
      //     imgNum ++ ;
      //   }
      // }
      // if (imgNum > 3) {
      //   this.$toast('上传照片不得超过三张~');
      //   return;
      // }
      let params = {
        dc: JSON.stringify({}),
        appInstanceId: this.appInstanceId,
        appTaskId: this.appTaskId,
      };
      this.appCommon.tloading("传递中...");
      this.appCommon
        .postReq("jt/app/common/normalSend", params)
        .then((rdata) => {
          this.$toast("传递成功~");
          this.$root.appBack();
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>