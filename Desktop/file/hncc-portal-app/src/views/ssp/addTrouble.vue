<template>
  <div class="app-full">
    <van-nav-bar
      title="新增"
      :border="false"
      @click-left="$root.appBack()"
      left-arrow
    >
    </van-nav-bar>
    <div class="app-main">
      <van-form ref="trouble" @submit="save" :scroll-to-error="true">
        <app-date
          required
          v-model="model.troubleTime"
          type="datetime"
          :label="'检查时间'"
          :rules="[{ required: true, message: '请输入检查时间' }]"
        ></app-date>
        <app-drop
          required
          title="检查人"
          dropName="ORG.PERSON_NAME"
          v-model="model.checkMan"
          :rules="[{ required: true, message: '请输入检查人' }]"
        ></app-drop>
        <app-drop
          required
          v-model="model.troubleType"
          :label="'问题类型：'"
          :dpData="troubleTypeList"
          :rules="[{ required: true, message: '请输入问题类型' }]"
        ></app-drop>
        <app-input
          required
          label="问题地点："
          v-model="model.troublePlace"
          :rules="[{ required: true, message: '请输入问题地点' }]"
        ></app-input>
        <app-input
          required
          label="问题描述："
          v-model="model.troubleDesc"
          :rules="[{ required: true, message: '请输入问题描述' }]"
        ></app-input>
        <app-img-choose
          :watermark="watermark"
          ref="imgchoose"
          :objUuid="model.id"
          type="1"
        ></app-img-choose>
        <van-button style="width: 100%" block type="info" native-type="save"
          >保存</van-button
        >
      </van-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "addTrouble",
  data() {
    return {
      model: {},
      troubleTypeList: [],
      watermark: {
        title: this.$store.getters["userView"].operatorName + '（' + this.$store.state.user.bd.label + '）',
      },
    };
  },
  created() {
    this.type = this.$route.query.type;
    this.initData();
  },
  methods: {
    initData() {
      let params = {
        dc: JSON.stringify({}),
        bdId: this.$store.state.user.bdId,
        type: this.type,
        appBusiUuid: "",
      };
      this.appCommon
        .postReq("/troubleDeal/initTroubleDealData", params)
        .then((rdata) => {
          this.model = rdata.dataWraps.dataWrap.data;
          this.troubleTypeList = rdata.parameters.troubleTypeList;
        });
    },
    save() {
      // let imgNum = 0;
      // for (let file of this.$refs.imgchoose.fileList) {
      //   if (this.appCommon.isPicture(file.preview) && file.uploaded) {
      //     imgNum++;
      //   }
      // }
      // if (imgNum > 3) {
      //   this.$toast("上传照片不得超过三张~");
      //   return;
      // }
      let params = {
        dataWrap: JSON.stringify({
          data: this.model,
        }),
      };
      this.appCommon.tloading("保存中...");
      this.appCommon.postReq("/troubleDeal/appReg", params).then((rdata) => {
        this.$toast("保存成功~");
        this.$root.appBack();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>