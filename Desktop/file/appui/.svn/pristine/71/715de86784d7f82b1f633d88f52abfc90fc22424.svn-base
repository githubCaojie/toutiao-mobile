<template>
  <div class="app-flow">
    <van-nav-bar title="查看" :border="false" @click-left="$root.appBack()" left-arrow></van-nav-bar>
    <app-input label="项次" label-width="120px" type="text" v-model="model.xc"></app-input>
    <app-input label="项目名称" label-width="120px" type="text" v-model="model.xmName"></app-input>
    <app-input label="检测方法和频率" label-width="120px" type="text" v-model="model.jcffPl"></app-input>
    <app-input label="权值" label-width="120px" type="text" v-model="model.qz"></app-input>
    <app-input label="指标" label-width="120px" type="text" v-model="model.zb"></app-input>
    <app-drop title="是否关键指标" v-model="model.isImportant" dropName="UEP.YES_OR_NO"></app-drop>
    <app-input label="编码" label-width="120px" type="text" v-model="model.itemCode"></app-input>
    <app-input label="规定值或允许偏差" label-width="120px" type="text" v-model="model.gdzPc"></app-input>
    <app-input label="施工实测值/实测偏差值来源" label-width="120px" type="text" v-model="model.sgActualValueSource"></app-input>
    <app-input label="施工合格数据来源" label-width="120px" type="text" v-model="model.sgFormula"></app-input>
    <app-input label="监理实测值/实测偏差值来源" label-width="120px" type="text" v-model="model.actualValueSource"></app-input>
    <app-input label="监理合格数据来源" label-width="120px" type="text" v-model="model.formula"></app-input>
    <app-drop title="是否必填" v-model="model.isMust" dropName="UEP.YES_OR_NO"></app-drop>
    <div class="app-fa">
      <van-button  style="width: 33%" block type="info" @click="save">保存</van-button>
    </div>
  </div>
</template>

<script>
import { postAction } from '@/api/app-base'
export default {
  name: 'proDetail',
  data() {
    return {
      model: {},
      xmId: '',
      id: '',
    }
  },
  mounted(){
    this.xmId = this.$route.query.xmId;
    this.id = this.$route.query.id;
    this.getData();
  },
  methods: {
    getData() {
       let params = {
        id: this.id,
        bdId: this.$store.state.user.bdId,
        xmId: this.xmId
      };
      postAction('/zlAssessStandard/get',params).then(rdata => {
        console.log(rdata)
        this.model = rdata.dataWraps.dataWrap.data;
      })
    },
    save() {
     let params = {
        dataWrap: JSON.stringify({
          data: this.model,
        }),
      };
      this.appCommon.tloading();
      postAction('/zlAssessStandard/save',params).then(rdata => {
        this.$toast('保存成功~');
        this.$root.appBack();
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>