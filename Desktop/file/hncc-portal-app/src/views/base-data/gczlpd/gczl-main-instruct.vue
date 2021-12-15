<template>
  <div class="instruct">
    <van-divider>基本要求</van-divider>
    <div class="content">{{model.jbyq}}</div>
    <van-divider>外观鉴定</van-divider>
    <div class="content">{{model.wgjd}}</div>
  </div>
</template>

<script>
export default {
  name: 'gczl-main-instruct',
  data() {
    return {
      model: {},
    }
  },
  props: {
    xmId: {
      type: String
    }
  },
  created() {
    this.instruct();
  },
  methods: {
    instruct() {
      let params = {
        id: this.xmId
      }
      this.appCommon.postReq('/zlProject/get', params).then(rdata => {
        console.log(rdata)
        this.model = rdata.dataWraps.dataWrap.data;
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.instruct {
  height: 100%;
  overflow-y: auto;

  .content {
    padding: 2vw 4vw;
    box-sizing: border-box;
  }
}
</style>