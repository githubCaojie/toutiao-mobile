<template>
  <div class="app-flow" :id="$attrs.compId">
    <xcby-from isjly="Y" ref="xcbyForm" @busiName="busiName" @location="watermark.location=$event" v-bind="$attrs" :disabled="true"></xcby-from>
    <app-drop required v-model="approve.agreeFlag" :dpData="resultList" :disabled="editFlag!='Y'" label="审批结果"></app-drop>
    <app-input label-width="50" label="备注" type="textarea" v-model="approve.remark" :disabled="editFlag!='Y'"></app-input>
    <!-- <van-divider content-position="center">现场照片与视频</van-divider> -->
    <app-img-choose ref="jlysjImg" :watermark="watermark" :disabled="editFlag!=='Y' || $attrs.params.zyjl=='Y'" :objUuid="$attrs.params.appBusiUuid" type="134"></app-img-choose>
    <div class="app-fs" v-if="editFlag=='Y'">
      <van-button @click="save" type="info" style="width: 20%;">保存</van-button>
      <van-button @click="sendTo" type="primary" style="width: 20%;">审批</van-button>
      <van-button @click="sendBack" type="warning" style="width: 20%;">退回</van-button>
      <van-button @click="sendFirst" type="danger" style="width: 40%;">退回发起人</van-button>
    </div>
  </div>
</template>

<script>
import xcbyForm from './comp-xcby-form'
import {postAction, wfBtnInit} from '@/api/app-base'
import flowUtil from '../workflow/flowUtil'
import appUtils from '@/utils/appUtils'

export default {
  name: 'jlysjOrzyjl',
  components: {
    'xcby-from': xcbyForm,
  },
  data() {
    return {
      editFlag: '',
      wfParams: undefined,
      resultList: [],
      watermark: {
        title: this.$store.getters["userView"].operatorName + '（' + this.$store.state.user.bd.secName + '）',
        location: '',
      },
      approve: {
        remark: '',
        agreeFlag: '',
      },
    }
  },
  mounted(){
    // this.initData();
  },
  watch: {
    '$attrs.params': {
      immediate: true,
      deep: true,
      handler: function(nval) {
        this.initData();
      }
    }
  },
  methods: {
    busiName($event) {
      this.watermark.title = this.$store.getters["userView"].operatorName + '（' + $event + '）'
    },
    sendFirst(){
      this.appCommon.confirm('提示','确定要退回发起人？', () => {
        let params = {
          ...this.wfParams,
          rtnType: '3',
        }
        this.appCommon.tloading();
        postAction('/jt/app/common/returnTaskSelect', params).then(rdata => {
          this.$toast('退回成功~');
          this.$root.appBack(-1, 500);
        })
      })
    },
    sendBack(){
      this.appCommon.confirm('提示','确定要退回吗？', () => {
        this.appCommon.tloading('退回中...')
        postAction('/jt/app/common/returnTask', this.$attrs.params).then(rdata => {
          this.$toast('退回成功~');
          this.$root.appBack(-1, 500);
        })
      })
    },
    initData: appUtils.debounce(function (){
      this.initBtns();
      postAction(this.$attrs.params.initMethod, this.$attrs.params).then(rdata => {
        console.log(rdata)
        // this.wfParams = rdata.parameters;
        this.resultList = rdata.parameters.resultList;
        this.approve = rdata.dataWraps.dataWrap.data;
      })
    }),
    initBtns(){
      wfBtnInit(this.$attrs.params).then(rdata => {
        this.editFlag = rdata.editFlag;
        let urlObj = flowUtil.parseParams(rdata.parameters.detailHref);
        this.wfParams = {...urlObj, ...rdata.parameters};
      })
    },
    save(){
      this.saveApprove().then(rdata => {
        this.$toast('保存成功~');
        let upSucc = true;
        for(let file of this.$refs.jlysjImg.fileList) {
          if (!false.uploaded) {
            upSucc = false;
            break;
          }
        }
        if (!upSucc) {
          this.$refs.jlysjImg.upload();
        }
      })
    },
    saveApprove(){
      return new Promise(resolve => {
        let params = {
          dataWrap: JSON.stringify({
            data: this.approve
          })
        }
        this.appCommon.tloading('保存中...');
        postAction('/zlTableGcby/saveApproval', params).then(rdata => {
          resolve('success')
        })
      })
    },
    sendTo(){
      let imgNum = 0;
      let videoNum = 0;
      for(let file of this.$refs.jlysjImg.fileList) {
        if (this.appCommon.isPicture(file.preview) && file.uploaded) {
          imgNum ++ ;
        }
        if (this.appCommon.isVideo(file.preview) && file.uploaded) {
          videoNum ++ ;
        }
      }
      if (imgNum != 3 || videoNum != 1) {
        this.$toast('请上传三个图片和一个视频~');
        return;
      }
      if (this.approve.agreeFlag && this.approve.agreeFlag === 'N') {
        if (this.wfParams.activityType == '3') {
          this.$toast('不合乎要求，不允许上报！');
          return;
        } else {
          this.$toast('不符合设计及规范要求，不允许上报！');
          return;
        }
      }
      this.saveApprove().then(rdata => {
        let emtiName = 'jlysjOrzyjlNormalSend';
        let sendType = '';
        let back = -1;
        console.log(this.wfParams)
        if (this.wfParams.sendFunc == "approve(normalSend)") {
          sendType = 'normalSend';
        } else {
          sendType = 'appNormalSendBusi';
          back = -2;
        }
        flowUtil.approve.call(this, sendType, this.wfParams, emtiName);
        this.appCommon.once(emtiName, () => {
          this.$toast('传递成功~');
          this.$root.appBack(back, 500);
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  
</style>