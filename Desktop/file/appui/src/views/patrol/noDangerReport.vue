<template>
  <div class="app-full">
    <van-nav-bar @click-left="$root.appBack()" title="无隐患打卡" :border="false" left-arrow></van-nav-bar>
    <div class="app-main-btn">
      <van-form ref="nodangerForm">
        <app-drop disabled label="打卡人" dropName="ORG.PERSON_NAME" v-model="model.addMan"></app-drop>
        <app-input disabled label="打卡时间" v-model="model.addTime"></app-input>
        <app-input disabled label="标段" v-model="model.busiName"></app-input>
        <app-drop required label="天气" v-model="model.weather" dropName="SECURITY.WEATHER" :rules="[{ required: true, message: '请填选择天气' }]"></app-drop>
      </van-form>
      <app-img-choose :watermark="watermark" :disabled="editFlag!== 'Y'" :objUuid="patrolUuid" type="12"></app-img-choose>
    </div>
    <van-button @click="save" :disabled="editFlag!== 'Y'" class="btn-large" type="info">无隐患打卡</van-button>
  </div>
</template>

<script>
export default {
  name: 'noDangerReport',
  data() {
    return {
      model: {},
      editFlag: 'Y',
      watermark: {
        title: this.$store.getters["userView"].operatorName + '（' + this.$store.state.user.bd.label + '）',
      },
      patrolUuid: '',
      lng: '',
      lat: '',
    }
  },
  created() {
    this.patrolUuid = this.$route.query.uuid;
    this.editFlag = this.$route.query.editFlag;
    this.initData();
  },
  methods: {
    getLocation() {
       this.appCommon.getCurLocation().then(position => {
        this.lng=position.coords.longitude;
        this.lat=position.coords.latitude;
      },(error) => {
        console.log(error);
        this.$toast('获取位置失败~')
      })
    },
    initData() {
      this.appCommon.postReq('/safetypatrol/wyhdk/initWyhDk', { patrolUuid: this.patrolUuid }, process.env.VUE_APP_SAFE).then(rdata => {
        this.model = rdata.dataWraps.dataWrap.data;
      })
    },
    save() {
      this.$refs.nodangerForm.validate().then(() => {
        this.model.lng = this.$store.state.location.lng;
        this.model.lat = this.$store.state.location.lat;
        let params = {
          dataWrap: JSON.stringify({
            data: this.model
          })
        }
        this.appCommon.postReq('/safetypatrol/wyhdk/saveWyhDk', params, process.env.VUE_APP_SAFE).then(() => {
          this.$toast('保存成功~')
          this.$root.appBack()
        })
      })

    }
  }
}
</script>

<style lang="scss" scoped>
</style>