<template>
  <div class="appfull">
    <van-form ref="clfyForm" @submit="save" :scroll-to-error="true">
      <app-input
        :disabled="disabled"
        required
        label="编号"
        type="text"
        v-model="model.code"
        :rules="[{ required: true, message: '请填写编号' }]"
      ></app-input>
      <app-input
        label="项目名称"
        type="text"
        disabled
        v-model="model.xmmc"
      ></app-input>
      <app-input
        label="业主单位"
        type="text"
        disabled
        v-model="model.yzdw"
      ></app-input>
      <app-input
        label="施工单位"
        type="text"
        disabled
        v-model="model.sgdw"
      ></app-input>
      <app-input
        label="监理单位"
        type="text"
        disabled
        v-model="model.jldw"
      ></app-input>
      <app-input
        :disabled="disabled"
        required
        label="施工放样工作"
        rows="2"
        type="textarea"
        v-model="model.fyWork"
        :rules="[{ required: true, message: '请填写施工放样工作' }]"
      ></app-input>
      <van-divider content-position="center">附件</van-divider>
      <app-img-choose
        ref="imgchoose"
        :disabled="disabled"
        :objUuid="model.id"
        :watermark="watermark"
        type="134"
      ></app-img-choose>

      <van-divider content-position="center">明细</van-divider>
      <div
        class="app-list"
        v-for="(item, index) in dataList"
        :key="index"
        @click="edit(item)"
      >
        <p class="app-list-item">桩号或位置：{{ item.position }}</p>
        <p class="app-list-item">工程或部位名称：{{ item.bwName }}</p>
        <p class="app-list-item">放样内容：{{ item.fyContent }}</p>
        <p class="app-list-item">备注：{{ item.remark }}</p>
        <fa-icon
          v-if="!disabled"
          @click.stop="delItem(item)"
          class="list-item-del"
          icon="trash-alt"
        />
      </div>
      <div class="list-btn-wrap">
        <fa-icon v-if="!disabled" @click="add" icon="plus-square" />
      </div>
      <div class="app-fa">
        <van-button v-if="!disabled" style="width: 33%" block type="info" native-type="submit">保存</van-button>
        <van-button v-if="!disabled" style="width: 33%" block type="primary" @click.prevent="report">传递</van-button>
        <van-button style="width: 33%" block type="info" @click.prevent="previewPdf" >报验单预览</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { postAction } from "@/api/app-base";
import flowUtil from "../workflow/flowUtil";
import appConstant from "@/utils/appConstant";
import moment from "moment";
import appUtils from "@/utils/appUtils";
export default {
  name: "comp-clfy-form",
  data() {
    return {
      unitId: "",
      model: {},
      dataList: [],
      flag: false,
      cdFlag: "",
      appBusiUuid: "",
      appInstanceId: "",
      watermark: {
        title: this.$store.getters["userView"].operatorName + '（' + this.$store.state.user.bd.secName + '）',
        location: '',
      },
    };
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    showBtn: {
      type: Boolean,
      default: true,
    },
  },
  activated(){
    // this.getData(this.$attrs.params);
  },
  watch: {
    "$attrs.params": {
      immediate: true,
      deep: true,
      handler: function (nval, oldVal) {
        if (!oldVal || nval.appBusiUuid != oldVal.appBusiUuid) {
          console.log('11111')
          setTimeout(() => {
            this.getData(nval);
          }, 100);
        }
      },
    },
  },
  created() {
    this.unitId = this.$route.query.unitId;
  },
  methods: {
    getData(nval) {
      let params = {
        dataWrap: JSON.stringify({}),
        bdId: this.$store.state.user.bdId,
        unitId: this.unitId,
        ...nval,
      };
      postAction("/zlTableFy/initZlTableFy", params).then((rdata) => {
        this.model = rdata.dataWraps.dataWrap.data;
        this.appBusiUuid = this.model.id;
        this.appInstanceId = this.model.instanceId;
        this.dataList = rdata.dataWraps.detailDataWrap.dataList;
      });
    },
    previewPdf(){
      let params = {
        dc: JSON.stringify({}),
        exportType: 'pdf',
        id: this.model.id,
      }
      postAction('/zlTableFy/print', params).then(rdata => {
        let webUrl = rdata.parameters.filePath;
        let pdfUrl = appConstant.busiUrl + webUrl;
        this.$root.goPath('/appFj', {pdfUrl})
      })
    },
    save() {
      let params = {
        dataWrap: JSON.stringify({
          data: this.model,
        }),
      };
      this.appCommon.tloading("保存中...");
      postAction("/zlTableFy/appReg", params).then((rdata) => {
        this.appBusiUuid = rdata.parameters.appBusiUuid;
        this.appInstanceId = rdata.parameters.appInstanceId;
        this.$toast("保存成功~");
      });
    },
    // pass() {
    //   let params = {
    //     id: this.model.id,
    //   };
    //   postAction("/zlTableFy/spAttachLimit", params).then((rdata) => {
    //     this.cdFlag = rdata.parameters.flag;
    //     if (this.cdFlag == "Y") {
    //       console.log("跳转页面");
    //     } else {
    //       this.$toast("至少上传2张图片~");
    //       return;
    //     }
    //   });
    // },
    delItem(data) {
      this.appCommon.confirm("提示", "确定要删除该记录吗？", () => {
        let params = {
          id: data.id,
        };
        this.appCommon.tloading("删除中...");
        postAction("/zlTableFy/removeZlTableFyDetail", params).then((rdata) => {
          this.$toast("删除成功~");
          this.getData();
        });
      });
    },
    edit(item) {
      if(this.disabled) return;
      this.$root.goPath("/zlTableFyDetail", {
        item: item,
        isEdit: "Y",
        title: "修改",
      });
    },
    add() {
      let params = {
        fyId: this.model.id,
      };
      postAction("/zlTableFy/checkFyExists", params).then((rdata) => {
        this.flag = rdata.parameters.flag;
        if (this.flag == true) {
          this.$root.goPath("/zlTableFyDetail", {
            fyId: this.model.id,
            title: "添加",
          });
        } else {
          this.$toast("请先保存主数据!");
        }
      });
    },
    report() {
      let imgNum = 0;
      for(let file of this.$refs.imgchoose.fileList) {
        if (this.appCommon.isPicture(file.preview) && file.uploaded) {
          imgNum ++ ;
        }
      }
      if (imgNum < 2) {
        this.$toast('请上传至少两张图片~');
        return;
      }

      let params = {
        appInstanceId: this.appInstanceId,
        openMode: "4",
      };
      let that = this;
      flowUtil.worderInitData(params).then((rdata) => {
        let urlObj = flowUtil.parseParams(rdata.showTacheUrl);
        delete rdata.showTacheUrl;
        this.wfParams = { ...rdata, ...urlObj };
        this.$root.goPath("/wfChoosePerson", {
          wfParams: this.wfParams,
          emitName: this.$route.path,
        });
        this.appCommon.on(this.$route.path, function() {
          that.$toast('传递成功~')
          that.$root.appBack(-2, 500);
          that.$emit("sendSucc");
        });
      });
    },
  },
  beforeDestroy(){
    this.appCommon.off(this.$route.path)
  }
};
</script>

<style lang="scss" scoped>
.list-btn-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 10px;
  bottom: 35px;
  transform: translateY(-50%);
  img {
    width: 50px;
  }
  svg {
    font-size: 35px;
    color: #3182c4;
    margin: 10px 0;
  }
}
</style>