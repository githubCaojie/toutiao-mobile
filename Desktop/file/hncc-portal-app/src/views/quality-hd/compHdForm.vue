<template>
  <div>
    <van-form :disabled="disabled" ref="trouble" @submit="save" :scroll-to-error="true">
      <app-date :disabled="disabled" required v-model="model.checkTime" type="datetime" :label="'检查时间'" :rules="[{ required: true, message: '请输入检查时间' }]"></app-date>
      <app-drop required disabled title="检查人" dropName="ORG.PERSON_NAME" v-model="model.checkMan" :rules="[{ required: true, message: '请输入检查人' }]"></app-drop>
      <app-tree highlight-current :disabled="disabled" v-model="model.busiCode" title="标段" :rootCode="''" expandLevel="3" :rootVisible="false" dataProvider="com.haiyisoft.fslq.tree.PrjSectTree"></app-tree>

      <app-input disabled label="问题类型：" v-model="model.troubleType"></app-input>
      <van-cell title="问题地点：" v-model="model.placeName" @click="chooseTree" :is-link="true"></van-cell>
      <app-input required type="textarea" label="问题描述：" v-model="model.troubleDesc" :rules="[{ required: true, message: '请输入问题描述' }]"></app-input>
      <app-img-choose :disabled="disabled" ref="imgchoose" :objUuid="model.id" type="1"></app-img-choose>
    </van-form>
    <van-popup position="bottom" class="pop-tree" round v-model="chooseLoc">
      <van-button @click="chooseLoc = false;" size="small" type="info">确定</van-button>
      <app-treeb highlight-current v-if="chooseLoc" @node-click="nodeClick" class="content" retriever="com.haiyisoft.pmzl.tree.ZlNoGxUnitTree" :dynamic="true" :rootCode="model.busiCode"></app-treeb>
    </van-popup>
  </div>
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
      appTaskId: "",
      appInstanceId: "",
      chooseLoc: false
    }
  },
  watch: {
    id: {
      immediate: true,
      handler: function () {
        this.getModel()
      }
    }
  },
  methods: {
    getModel() {
      let params = {
        dc: JSON.stringify({}),
        bdId: this.$store.state.user.bdId,
        appBusiUuid: this.id,
      };
      this.appCommon.postReq("/zlHiddenTrouble/initZlHiddenTroubleData", params).then((rdata) => {
        this.model = rdata.dataWraps.dataWrap.data;
        this.$emit('model', this.model)
        this.model.busiCode = this.$store.state.user.bdId
        this.appInstanceId = rdata.parameters.appInstanceId;
        this.appTaskId = rdata.parameters.appTaskId;
      });
    },
    save11() {
      return new Promise((resolve, reject) => {
        this.appCommon.getCurLocation().then(position => {
          this.model.lng = position.coords.longitude;
          this.model.lat = position.coords.latitude;
          return this.save1();
        }, () => {
          this.$toast('获取位置失败~');
          reject('获取位置失败~')
        })
      })
    },
    async save() {
      // try {
      //   let position = await this.appCommon.getCurLocation();
      //   this.model.lng = position.coords.longitude;
      //   this.model.lat = position.coords.latitude;
      // } catch (error) {
      //   this.$toast('获取位置失败~');
      //   return Promise.reject(error)
      // }

      this.model.lng = this.$store.state.location.lng;
      this.model.lat = this.$store.state.location.lat;
      
      return new Promise((resolve, reject) => {
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
        this.$refs.trouble.validate().then(() => {
          let params = {
            dataWrap: JSON.stringify({
              data: this.model,
            }),
          };
          this.appCommon.tloading("保存中...");
          this.appCommon.postReq("/zlHiddenTrouble/appReg", params).then((rdata) => {
            this.appInstanceId = rdata.parameters.appInstanceId;
            this.appTaskId = rdata.parameters.appTaskId;
            resolve(rdata)
          });
        })

      })

    },
    send() {
      return new Promise((resolve) => {
        let params = {
          dc: JSON.stringify({}),
          appInstanceId: this.appInstanceId,
          appTaskId: this.appTaskId,
        };
        this.appCommon.tloading("传递中...");
        this.appCommon
          .postReq("jt/app/common/normalSend", params)
          .then((rdata) => {
            resolve(rdata)
          });
      })
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
.pop-tree {
  height: 85vh;
  .content {
    width: 150vw;
    height: calc(100% - 50px);
    overflow-y: auto;
    margin-top: 50px;
  }
  button {
    position: absolute;
    top: 10px;
    right: 10px;
  }
}
</style>