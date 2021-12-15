<template>
  <div class="app-img-choose">
    <div class="app-fs">
      <div class="wrap" v-for="(item, index) in fileList" :key="item.preview">
        <van-image @click.stop="previewFile(item, index)" :src="item.thumb?item.thumb: item.preview" class="img-item" fit="cover" />
        <div v-if="!fileDisabled" @click.stop="delImg(item, index)" class="img-del"><van-icon size="9" name="cross" /></div>
        <van-icon v-if="item.uploaded" class="upload-succ" name="success" size="20" />
        <div v-if="!item.uploaded && item.uuid === uploadingUuid" class="upload-shade">
          <van-progress class="percentage" :percentage="percentageNum" />
        </div>
        <!-- <div v-if="item.delFlag" class="local-deleted"></div> -->
      </div>
      <div v-if="!fileDisabled" class="wrap" :style="{'opacity': fileDisabled?'0.5': '1'}" @click="toggleDealBtn">
        <div class="insize" :style="{'background-color': fileDisabled?'#f7f8fa':''}">
          <van-icon size="23" :color="fileDisabled?'#dcdee0':'#DCDEE0'" name="photograph" />
        </div>
      </div>
      
      <div v-if="uploading" class="uploading-wrap">
        <van-loading class="up-loading" size="24px">上传中...</van-loading>
      </div>
    </div>

    <van-action-sheet
      @select="actionSel"
      v-model="show"
      :actions="actions"
      cancel-text="取消"
      close-on-click-action
    />
  </div>
</template>

<script>

import appFileUtil from '../../utils/appFileUtil'
import { getAction } from '@/api/app-base'
import appConstant from '../../utils/appConstant';
import moment from 'moment'
import { ImagePreview } from 'vant';
import eventBus from '../../utils/eventBus'
export default {
  name: "app-img-choose",
  inject: {
    vanForm: {
      default: null
    }
  },
  props: {
    limit: {
      type: Number,
      default: 9,
    },
    quality: {
      type: Number,
      default: 50,
    },
    objUuid: {
      type: String,
    },
    objType: {
      type: String,
      default: '0',
    },
    immeUpload: {
      type: Boolean,
      default: true,
    },
    datas: {
      type: Array,
      default: () => []
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    maxVideoTime: {
      type: Number,
      default: 10,
    },
    type: {
      type: String,
      default: '123',
    },
    watermark: {
      type: Object,
      default: undefined
    },
    offline: { //是否是离线文件
      type: Boolean,
      default: false,
    },
    targetWidth: {
      type: Number,
      default: 1000
    },
    targetHeight: {
      type: Number,
      default: 1000,
    }
  },
  data() {
    return {
      show: false,
      allActions: [
        { id: "1", name: "拍照" },
        { id: "2", name: "相册" },
        { id: "3", name: "录像" },
        { id: '4', name: '离线相册'}
      ],
      actions: [],
      videoThumb: require('./video.png'),
      fileList: [],
      uploading: false,
      isPreview: false,
      previewInstance: undefined,
      upSuccFn: undefined,
      updatePercentage: undefined,
      percentageNum: 0,
      uploadingUuid: '',
      fileDisabled: this.disabled,
    };
  },
  created(){
    if (this.vanForm) {
      this.fileDisabled = this.disabled || this.vanForm.$props.disabled;
    }
    let tarr = [...this.type];
    for(let item of tarr) {
      this.actions.push(this.allActions[item-1]);
    }
  },
  beforeDestroy(){
    this.uploading = false;
    eventBus.$off(this.$duandxc.DDXC_SUCC, this.upSuccFn);
    eventBus.$off(this.$duandxc.DDXC_PERCENTAGE, this.updatePercentage)
  },
  mounted(){
    if (this.objUuid) {
      this.getHistory();
    }
    this.initListener();
  },
  watch: {
    'objUuid': function(nval) {
      if (nval) {
        this.getHistory();
      }
    },
    'datas': {
      immediate: true,
      deep: true,
      handler: function(nval) {
        if (nval && Array.isArray(nval)) {
          nval.forEach(item => {
            this.fileList.push(item);
          })
        }
      }
    },
    'fileList': function() {
      this.$emit('fileChange', this.fileList)
    },
    disabled: function(nval) {
      this.fileDisabled = nval
    }
  },
  methods: {
    initListener(){
      let that = this;
      if (!this.upSuccFn) {
        this.upSuccFn = function(data) {
          if (that.objUuid != data.busiUuid || that.objType != data.busiType) {
            return;
          }
          that.percentageNum = 0;
          for(let item of that.fileList) {
            if (item.uuid === data.uuid) {
              that.$set(item, 'uploaded', true);
              item.thumb = appConstant.baseUrl + data.thumbnail;
              item.preview = appConstant.baseUrl + data.preview;
              break;
            }
          }
        }
      }
      if (!this.updatePercentage) {
        that.updatePercentage = function(data) {
          that.percentageNum = data.p;
          that.uploadingUuid = data.uuid;
        }
      }
      eventBus.$on(this.$duandxc.DDXC_SUCC, this.upSuccFn);
      eventBus.$on(this.$duandxc.DDXC_PERCENTAGE, this.updatePercentage)
    },
    toggleDealBtn(){
      if (this.disabled) return;
      this.show = !this.show;
    },
    previewFile(item, index) {
      switch(item.type) {
        case appFileUtil.TYPE_IMG: {
          this.previewImg(index);
          break;
        }
        case appFileUtil.TYPE_VIDEO: {
          //视频
          this.$router.push({
            path: "/appVideoPlay",
            query: {
              videoUrl: item.preview
            }
          });
          break;
        }
      }
    },
    previewImg(index){
      var imgArr = [];
      var imgIdx = 0;
      var imgNum = 0;
      for (let i = 0; i < this.fileList.length; i++) {
        let item = this.fileList[i];
        if (i == index) {
          imgIdx = imgNum;
        }
        if (item.type == appFileUtil.TYPE_IMG) {
          imgNum++;
          imgArr.push(item.preview);
        }
      }
      this.isPreview = true;
      this.previewInstance = ImagePreview({
        images: imgArr,
        startPosition: imgIdx,
        onClose() {
          this.isPreview = false;
        },
      });
    },
    closePreview(){
      this.previewInstance && this.previewInstance.close();
    },
    checkIsExit(item) {
      return this.fileList.some(his => {
        return item.uuid === his.uuid;
      })
    },
    getHistory(){
      appFileUtil.selectFile(this.objUuid, this.objType).then(async resultSet => {
        let dbArr = [];
        
        if (resultSet.rows.length > 0) {
          for(let i=0; i< resultSet.rows.length; i++) {
            let upItem = resultSet.rows.item(i);
            upItem['delFlag'] = await appFileUtil.checkIsDelete(upItem.preview);
            if (!this.checkIsExit(upItem)) {
              dbArr.push(upItem);
              this.$duandxc.addQueue(upItem)
            }
          }
          this.fileList = this.fileList.concat(dbArr);
        }
      }).finally(() => {
        this.getHistory1();
      });
    },
    getHistory1(){
      let params = {
        busiUuid: this.objUuid,
        busiType: this.objType,
        module: appConstant.moduleId
      }
      getAction(appConstant.fileUrl + '/api/v1/file/list', params).then(rdata => {
        let temp = [];
        rdata.result.forEach(item => {
          let has = this.checkIsExit(item);
          if (!has) {
            let obj = {
              uuid: item.uuid,
              type: appFileUtil.getFileType(item.filename),
              uploaded: true,
              fileName: item.filename,
              thumb: appConstant.baseUrl + item.thumbnail,
              preview: appConstant.baseUrl + item.preview,
            };
            if (obj.type === appFileUtil.TYPE_VIDEO) {
              obj.thumb = require('./video.png');
            }
            temp.push(obj)
          }
        })
        this.fileList = this.fileList.concat(temp);
      })
    },
    delImg(item, index) {
      this.appCommon.confirm('提示', '确定要删除该照片吗？', () => {
        let params = {
          uuid: item.uuid,
        }
        if (!item.uploaded) { //未传到服务器
          appFileUtil.delFile(item.uuid, (item.offline)? '': item.name).then(() => {
            this.fileList.splice(index, 1);
            this.$emit('delImg', item);
            this.$toast('删除成功~');
          })
        } else {
          this.appCommon.tloading('删除中...')
          getAction(appConstant.fileUrl + '/api/v1/file/delete', params).then(() => {
            this.$toast('删除成功~');
            this.fileList.splice(index, 1);
            this.$emit('delImg', item);
          })
        }
      })
    },
    actionSel(item) {
      switch (item.id) {
        case "1": {
          this.takePic(window.Camera.PictureSourceType.CAMERA);
          break;
        }
        case "2": {
          this.takePic(window.Camera.PictureSourceType.PHOTOLIBRARY);
          // this.choosePic();
          break;
        }
        case "3": {
          this.takeVideo();
          break;
        }
        case "4": {
          this.show = false;
          let callback = 'chooseCash';
          this.$nextTick().then(() => {
            this.$router.push({
              path: '/offlinePic',
              query: {
                type: '2',
                callback,
              },
            })
          })
          this.appCommon.once(callback, async(items) => {
            let temp = [];
            for(let file of items) {
              let imgObj = await this.dealFile(file.preview, file.type);
              temp.push(imgObj);
            }
            setTimeout(() => {
              this.fileList = this.fileList.concat(temp);
              this.noticeParent(temp);
            }, 200)
          })
          break;
        }
      }
    },
    takePic(type) {
      const cameraOptions = {
        // quality: this.quality,
        targetWidth: this.targetWidth,
        targetHeight: this.targetHeight,
        sourceType: type, //0所有图片，1拍照，2相册
        allowEdit: false,
        destinationType: window.Camera.DestinationType.DATA_URL,
      };
      navigator.camera.getPicture(
        async (imgUrl) => {
          imgUrl = appFileUtil.IMG_PRE + imgUrl;
          let imgObj = await this.dealFile(imgUrl, appFileUtil.TYPE_IMG);
          setTimeout(() => {
            this.fileList.push(imgObj)
            this.noticeParent([imgObj]);
          }, 200)
        },
        () => {},
        cameraOptions
      );
    },
    async dealFile(imgUrl, ftype){
      let that = this;
      let uuid = that.appCommon.guuid();
      let fileName = uuid + '.jpeg';
      if (ftype === appFileUtil.TYPE_VIDEO) {
        fileName = this.getFileName(imgUrl)
      }
      if (that.watermark) {
        if (that.$store.state.location) {
          that.watermark.lng = that.$store.state.location.lng;
          that.watermark.lat = that.$store.state.location.lat;
        }
        let date = moment().format('YYYY-MM-DD HH:mm:ss');
        that.watermark.date = date;
      }
      let imgObj = {
        objUuid: that.objUuid,
        objType: that.objType,
        uuid: uuid,
        type: ftype,
        uploaded: false,
        flag: this.offline? appFileUtil.IMG_TYPE1: appFileUtil.IMG_TYPE0,  //是否是离线图片
        fileName: fileName,
        thumb: ftype === appFileUtil.TYPE_VIDEO ? that.videoThumb: '',
        preview: imgUrl,
        extra: {
          watermark: that.watermark
        },
      }
      let result = await appFileUtil.insertFile(imgObj, that.immeUpload);
      imgObj['uuid'] = result.uuid;
      if (!this.offline) {  //非离线拍摄保存到数据库，等待上传
        this.$duandxc.addQueue();
      }
      return Promise.resolve(imgObj);
    },
    choosePic() {
      let chooseOptions = {
        maximumImagesCount: this.limit - this.fileList.length,
        width: this.targetWidth,
        height: this.targetHeight,
        outputType: 1
      };
      let that = this;
      window.imagePicker.getPictures(
        async function (results) {
          let temp = [];
          for (let imgUrl of results) {
            let imgObj = await that.dealFile(imgUrl, appFileUtil.TYPE_IMG);
            temp.push(imgObj);
          }
          setTimeout(() => {
            that.fileList = that.fileList.concat(temp);
            that.noticeParent(temp);
          }, 200)
        },
        (e) => {console.log(e);},
        chooseOptions
      );
    },
    takeVideo() {
      var options = { limit: 1, duration: this.maxVideoTime };
      navigator.device.capture.captureVideo(
        async (results) => {
          var temp = [];
          for (let video of results) {
            let vpath = video.fullPath;
            if (window.device.platform === 'iOS') {
              vpath = video.localURL;
            }
            let imgObj = await this.dealFile(vpath, appFileUtil.TYPE_VIDEO);
            temp.push(imgObj);
          }
          this.fileList = this.fileList.concat(temp);
          this.noticeParent(temp);
        },
        () => {},
        options
      );
    },
    noticeParent(files){
      this.$emit('chooseFile', {files})
    },
    getFileName(src) {
      return src.substring(src.lastIndexOf('/')+1);
    }
  },
};
</script>

<style lang="scss" scoped>
.app-img-choose {
  padding: 10px 0;
}
.wrap {
  width: 85px;
  height: 85px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 7px 0 0 7px;
  position: relative;
  .insize {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20vw;
    height: 20vw;
    background-color: #f7f8fa;
  }

  .img-del {
    width: 15px;
    height: 15px;
    position: absolute;
    top: 0;
    right: 0;
    background-color: black;
    border-radius: 0px 0 0px 15px;
    color: white;
    i {
      position:absolute;top: 2px;left: 6px;
    }
  }
}
.img-item {
  width: 100%;
  height: 100%;
}
.uploading-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  .up-loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(#000000, 0.8);
    width: 120px;
    height: 120px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    .van-loading__text {
      color: white;
    }
  }
}
.upload-succ {
  position: absolute;
  top: 0%;
  left: 0%;
  background-color: white;
  color: green;
}
.upload-shade {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .percentage {
    z-index: 9;
    margin-top: 45%;
  }

  &::after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 23vw;
    height: 23vw;
    background-color: black;
    opacity: 0.5;
    color: white;
  }
}
.local-deleted {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(226, 32, 24, 1);

  &::after {
    content: '已删除';
    background-color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    padding: 2px;
    font-size: 13px;
    font-weight: bold;
    color: red;
  }
}
</style>