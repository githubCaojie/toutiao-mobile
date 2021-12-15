<template>
  <div class="appfull">
    <van-form ref="xcbyForm" @submit="onSubmit" :scroll-to-error="true">
        <app-input required label="编号：" :disabled="disabled" v-model="model.code" name="code"
          :rules="[{ required: true, message: '请填写编号' }]"></app-input>

        <app-drop disabled label="项目名称" dropName="ORG.ORG_PARTY_NAME" v-model="model.prjId"></app-drop>
        <app-drop disabled label="合同段" dropName="ORG.ORG_PARTY_NAME" v-model="model.busiCode"></app-drop>

        <app-input :disabled="true" required label="施工单位" type="text" v-model="model.sgdw"
          :rules="[{ required: true, message: '请填写施工单位' }]"></app-input>
        <app-input :disabled="true" label="监理单位" type="text" v-model="model.jldw"></app-input>

        <app-input :disabled="true" required label="检验单位" type="text" v-model="model.jydw"></app-input>
        <app-input :disabled="true" required label="单位工程" type="text" v-model="model.dwgc"></app-input>
        <app-input :disabled="true" required label="分部工程" type="text" v-model="model.fbgc"></app-input>
        <app-input :disabled="true" required label="分项工程" type="text" v-model="model.fxgc"></app-input>

        <app-drop :disabled="disabled" label="桩号类型" dropName="XMGL.ZHLX" v-model="model.zhlx"></app-drop>

        <app-input :disabled="disabled" required label="起点桩号"
          @focus="model.beginMile=appCommon.kToMile(model.beginMile)"
          @blur="model.beginMile=appCommon.mileToK(model.beginMile)"
          type="text" v-model="model.beginMile"
          :rules="[{ required: true, message: '请填写起点桩号' }]"></app-input>
        
        <app-input :disabled="disabled" required label="止点桩号"
          @focus="model.endMile=appCommon.kToMile(model.endMile)"
          @blur="model.endMile=appCommon.mileToK(model.endMile)"
          type="text" v-model="model.endMile"
          :rules="[{ required: true, message: '止点桩号' }]"></app-input>

        <app-input :disabled="disabled" required label="工程部位" type="text" v-model="model.bwName"
          :rules="[{ required: true, message: '请填工程部位' }]"></app-input>

        <app-date :disabled="disabled" required v-model="model.sgDate"  type="date" :label="'施工日期'"
          :rules="[{ required: true, message: '请填写施工日期' }]"></app-date>
        <app-date :disabled="disabled" required v-model="model.jyDate"  type="date" :label="'检验时间'"
          :rules="[{ required: true, message: '请填写检验时间' }]"></app-date>
        <app-input required :disabled="disabled" :label="'质量证明文件'" v-model="model.zlCode"
          :rules="[{ required: true, message: '请填写质量证明文件' }]"></app-input>
        <app-input :disabled="disabled" type="textarea" :rows="3" :label="'检验内容'" v-model="model.jyContent"></app-input>
        <app-input :disabled="disabled" type="textarea" :rows="3" :label="'备注'" v-model="model.remark"></app-input>

        <van-divider content-position="center">质检试验表格</van-divider>
        <app-img-choose :watermark="watermark" :disabled="disabled" :objUuid="objUuid" type="134"></app-img-choose>
        <van-divider v-if="xczp && xczp.length > 0" content-position="center">现场照片与视频</van-divider>
        <app-img-choose v-if="isjly!='Y'" @fileChange="xczp = $event" ref="xczp" disabled :objUuid="objUuidFj" type="134"></app-img-choose>
        <!-- <van-divider content-position="center">附件</van-divider> -->
        
        <div class="app-fa">
          <van-button v-if="!disabled" style="width: 33%" block type="info" native-type="submit">保存</van-button>
          <van-button v-if="!disabled" style="width: 33%" block type="primary" @click.prevent="report">上报</van-button>
          <van-button style="width: 33%" block type="info" @click.prevent="previewPdf" >报验单预览</van-button>
        </div>
      </van-form>
  </div>
</template>

<script>
import { postAction } from '@/api/app-base'
import flowUtil from '../workflow/flowUtil'
import appConstant from '@/utils/appConstant'
import moment from 'moment'
import appUtils from '@/utils/appUtils'
export default {
  name: 'comp-xcby-form',
  data() {
    return {
      model: {},
      objUuid: '',
      objUuidFj: '',
      xczp: [],
      watermark: {
        title: this.$store.getters["userView"].operatorName + '（' + this.$store.state.user.bd.label + '）',
      },
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    isjly: {
      type: String,
      default: 'N'
    }
  },
  watch: {
    '$attrs.params': {
      immediate: true,
      deep: true,
      handler: function(nval, oldVal) {
        if (!oldVal || nval.appBusiUuid != oldVal.appBusiUuid) {
          this.initData(nval.appBusiUuid, nval.unitId)
        }
      }
    },
  },
  mounted(){
    
  },
  methods: {
    previewPdf(){
      let params = {
        dc: JSON.stringify({}),
        exportType: 'pdf',
        id: this.model.id,
      }
      postAction('/zlTableGcby/printPdf', params).then(rdata => {
        let webUrl = rdata.parameters.filePath;
        let pdfUrl = appConstant.busiUrl + webUrl;
        this.$root.goPath('/appFj', {pdfUrl})
      })
    },
    initData: appUtils.debounce(function (id, unitId){
      let params = {
        appBusiUuid: id,
        bdId: this.$store.state.user.bdId,
        unitId: unitId,
        dc: JSON.stringify({})
      }
      postAction('/zlTableGcby/initZlUnitGcbyData', params).then(rdata => {
        let obj = rdata.dataWraps.dataWrap.data;
        this.model = obj;
        this.model.beginMile = this.appCommon.mileToK(this.model.beginMile);
        this.model.endMile = this.appCommon.mileToK(this.model.endMile);
        if (this.unitId) {
          this.model.unitId = this.unitId;
        }
        // this.watermark.location = this.model.dwgc;
        this.$emit('location', this.model.dwgc)
        this.$emit('busiName', this.model.busiName)
        this.objUuid = this.model.zjbgId;
        this.objUuidFj = this.model.id;
        this.watermark.title = this.$store.getters["userView"].operatorName + '（' + this.model.busiName + '）',
        setTimeout(() => {
          console.log(this.model.busiCode)
        },2000)
      })
    }),
    onSubmit(values) {
      let rdata = this.$refs.xcbyForm.validate().then(rdata => {
        this.model.beginMile = this.appCommon.kToMile(this.model.beginMile);
        this.model.endMile = this.appCommon.kToMile(this.model.endMile);
        if (!this.model.jyDate) {
          this.model.jyDate = moment().format('YYYY-MM-DD HH:mm:ss');
        }
        let params = {
        dataWrap: JSON.stringify({
            data: this.model
          })
        }
        
        this.appCommon.tloading('保存中...');
        postAction('/zlTableGcby/appReg', params).then(rdata => {
          this.model.instanceId = rdata.parameters.appInstanceId
          this.$toast('保存成功~');
          // this.$root.appBack(-1, 500);
        })
      })
    },
    report(){
      if (!this.model.instanceId) {
        this.$toast('请先保存~');
        return;
      }
      let params = {
        appInstanceId: this.model.instanceId,
        openMode: '4',
      }
      flowUtil.worderInitData(params).then(rdata => {
        let urlObj = flowUtil.parseParams(rdata.showTacheUrl);
        delete rdata.showTacheUrl;
        this.wfParams = {...rdata, ...urlObj};
        this.$root.goPath('/wfChoosePerson', {
          wfParams: this.wfParams,
          emitName: this.$route.path,
        });
        this.appCommon.once(this.$route.path, (ids) => {
          this.$emit('sendSucc')
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  
</style>