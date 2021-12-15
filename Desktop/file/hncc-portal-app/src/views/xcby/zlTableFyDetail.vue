<template>
  <div class="app-full">
    <van-nav-bar :title="title" :border="false" @click-left="$root.appBack()" left-arrow>
    </van-nav-bar>
    <div class="appfull">
      <van-form @submit="save">
        <app-input required label="桩号或位置：" type="text" v-model="model.position"
         :rules="[{ required: true, message: '请填写桩号或位置' }]"></app-input>
        <app-input required label="工程或部位名称：" label-width="120px" type="text" v-model="model.bwName"
         :rules="[{ required: true, message: '请填写工程或部位名称' }]"></app-input>
        <app-input required label="放样内容：" type="text" v-model="model.fyContent"
         :rules="[{ required: true, message: '请填写放样内容'}]"></app-input>
        <app-input required label="备注：" type="text" v-model="model.remark"
         :rules="[{required: true, message: '请填写备注'}]"></app-input>
        <div class="app-fa">
          <van-button native-type="submit" style="width: 33%" block type="info">保存</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { postAction } from '@/api/app-base'
export default {
  name: 'jgCode',
  data() {
    return {
      model: {},
      fyId: '',
      isEdit: 'N',
      title:''
    }
  },
  mounted(){
    this.title = this.$route.query.title
    this.fyId = this.$route.query.fyId;
    this.isEdit = this.$route.query.isEdit;
    if(this.isEdit == 'Y'){
        this.model = this.$route.query.item
    }else{
        this.detailList();
    }
  },
  methods: {
    detailList() {
        let params = {
          detailDataWrap: JSON.stringify({
              
          }),
          fyId: this.fyId,
          id: ''
        }
         postAction('/zlTableFy/initZlTableFyDetail', params).then(rdata => {
            console.log(rdata)
            this.model = rdata.dataWraps.detailDataWrap.data;
         })
    },
    save(){
      let params = {
        detailDataWrap: JSON.stringify({
            data: this.model
        })
      }
      this.appCommon.tloading('保存中...');
      postAction('/zlTableFy/saveZlTableFyDetail', params).then(rdata => {
        console.log(rdata)
        this.$toast('保存成功~');
        this.$root.appBack();
      })
    },
  }
}
</script>

<style lang="scss" scoped>
  
</style>