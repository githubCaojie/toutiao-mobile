<template>
  <div class="appImgChoose">
    <van-divider
      v-if="title && fileList.length > 0"
      content-position="center"
      >{{ title }}</van-divider
    >
    <div class="file-wrap">
      <div :key="file.uuid" v-for="(file, index) in fileList" class="item-size" style="position: relative">
        <van-image @click="previewImg(index)" style="width: 100%; height: 100%" fit="cover" :src="file.thumb"/>
        <div v-if="!disabled" @click="delPic(index)" class="del-wrap">
          <van-icon name="delete" />
        </div>
        <div 
          @click="previewImg(index)"
          v-if="file.isHis != 'Y'" 
          class="upload-per" 
          :style="{height: $store.state.uploadingUuid == file.uuid ? 100 - $store.state.uploadingPer + '%' : '100%', }"></div>
      </div>
      <div
        v-if="this.limit > fileList.length && !disabled"
        @click="toggleSheet"
        class="item-size up-wrap"
      >
        <van-icon class="up-icon" name="plus" />
      </div>
    </div>

    <van-action-sheet cancel-text="取消" v-model="show" :actions="actions" @select="onSelect" />
  </div>
</template>

<script>
import * as appBaseApi from "../../api/app-base";
import appConstant from "@/utils/appConstant.js";
import { ImagePreview } from "vant";
import appFileUtil from "@/utils/appFileUtil";
//文件类型：1、图片，2、视频
export default {
  name: "appImgChoose",
  props: {
    title: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "12",
    },
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
    },
    imgWidth: {
      type: Number,
      default: 600,
    },
    imgHeight: {
      type: Number,
      default: 600,
    },
    maxVideoTime: {
      type: Number,
      default: 10,
    },
    immeUpload: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      hisFlag: false, //是否正在查询图片历史
      show: false,
      actions: [],
      upImgUrl: require("./addImg.png"),
      fileList: [
        //     {
        //     thumb: 'http://himg2.huanqiu.com/attachment2010/2013/1115/20131115101757122.jpg',
        //     isHis: 'Y'
        // }
      ],
      ft: undefined,
      imgPreIns: undefined,
      timer: undefined,
    };
  },
  mounted() {
    this.appCommon.checkAndroidPermission();
    if (this.type.indexOf("1") >= 0) {
      this.actions.push({ name: "拍照", id: "1" });
    }
    if (this.type.indexOf("2") >= 0) {
      this.actions.push({ name: "相册选择", id: "2" });
    }
    if (this.type.indexOf("3") >= 0) {
      this.actions.push({ name: "录像", id: "3" });
    }
    let succEvent = (rs) => {
      let uuid = rs.uuid;
      for (let item of this.fileList) {
        if (item.uuid == uuid) {
          item.isHis = "Y";
          break;
        }
      }
    };
    this.appCommon.on("uploadSucc", succEvent);
    this.$once("hook:beforeDestroy", function () {
      this.appCommon.off("uploadSucc", succEvent);
    });
    this.getHistory();


    //  let imgArr = [{
    //   thumb: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601440687899&di=000b6979cd311bcff6ffe03fc2836c0e&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg',
    //   url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601440687899&di=000b6979cd311bcff6ffe03fc2836c0e&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg',
    // }]

    // setTimeout(() => {
    //   let opt = {
    //     images: imgArr,
    //     curIndex: 0,
    //     rotate: false,
    //     saveRotate: false,
    //     closePre: () => {
    //       this.$imgPreview.closePre();
    //     }
    //   };
    //   this.$imgPreview.preview(opt);
    // }, 1000)
  },
  watch: {
    objUuid: {
      handler: function (nval, oval) {
        this.getHistory();
      },
    },
    objType: {
      handler: function (nval, oval) {
        this.getHistory();
      },
    },
  },
  methods: {
    previewImg(index) {
      let opt = {
        images: this.fileList,
        curIndex: index,
        rotate: false,
        saveRotate: false,
        closePre: () => {
          this.$imgPreview.closePre();
        }
      };
      this.$imgPreview.preview(opt);

      // this.$router.push({
      //   path: "/appPreviewImg",
      //   query: {
      //     imgArr: imgArr,
      //     imgIdx: imgIdx,
      //   },
      // });
    },
    toggleSheet() {
      this.show = !this.show;
    },
    onSelect(item) {
      this.toggleSheet();
      switch (item.id) {
        case "1": {
          this.takePic(navigator.camera.PictureSourceType.CAMERA);
          break;
        }
        case "2": {
          this.choosePic();
          break;
        }
        case "3": {
          this.takeVideo();
          break;
        }
      }
    },
    uploadFile() {
      appFileUtil.uploadFile();
    },
    getHistory() {
      if (!this.objUuid) {
        return;
      }
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.getHistory1();
      }, 500);
    },
    getHistory1() {
      appFileUtil.selectFile(this.objUuid, this.objType).then((results) => {
        let tempArr = [];
        for (let i = 0; i < results.rows.length; i++) {
          let file = results.rows.item(i);
          tempArr.push(file);
        }
        this.fileList = this.fileList.concat(tempArr);
      });

      this.hisFlag = true;
      let params = {
        busiUuid: this.objUuid,
        objType: this.objType,
        module: appConstant.moduleId,
      };
      appBaseApi.appDocs(params).then((rtndata) => {
        this.hisFlag = false;
        let imgs = [];
        for (let item of rtndata.result) {
          let imgObj = {
            thumb: appConstant.baseUrl + item.thumbnail + "?=" + Math.random(),
            url: appConstant.baseUrl + item.preview,
            fullUrl: appConstant.fileUrl + item.filePath,
            fileType:  appConstant.typeImg,
            isHis: "Y",
            uuid: item.uuid,
            fileId: item.uuid,
            fileName: item.filename,
          };
          var isImg = this.appCommon.isPicture(item.filename);
          if (!isImg) {
            //不是图片
            imgObj.url = item.filename;
            imgObj["fileType"] = appConstant.typeFile; //类型不是图片和视频
          }
          if (this.appCommon.isVideo(item.filename)) {
            imgObj["fileType"] = appConstant.typeVideo;
          }
          imgs.push(imgObj);
        }
        this.fileList = this.fileList.concat(imgs);
      });
    },
    delPic(index) {
      let item = this.fileList[index];
      this.appCommon.confirm("警告", "确定要删除该条记录吗？", () => {
        // this.appCommon.tloading('删除中...');
        appFileUtil.delFile(item.uuid, item.fileName); //删除本地数据库记录
        if (item.isHis !== 'Y') {
          this.fileList.splice(index, 1);
          this.$toast("删除成功~");
        } else {
          appBaseApi.appDelDoc({
            uuid: item.uuid,
            busiUuid: item.fileId,
          }).then((rtndata) => {
            // this.appCommon.tloadingc();
            this.$toast("删除成功~");
            this.fileList.splice(index, 1);
          });
        }
      });
    },
    takeVideo() {
      var options = { limit: 1, duration: this.maxVideoTime };
      navigator.device.capture.captureVideo(
        (results) => {
          for (var i = 0; i < results.length; i++) {
            // arr.push({thumb: this.videoThumb, url: results[i].fullPath, type: this.typeVideo})
            let insertObj = {
              objUuid: this.objUuid,
              objType: this.objType,
              fileName: results[i].name,
              thumb: require("./video.png"),
              url: results[i].fullPath,
              type: appConstant.typeVideo,
              isHis: "N",
            };
            appFileUtil.insertFile(insertObj, this.immeUpload).then((rs) => {
              insertObj["uuid"] = rs.uuid;
              this.fileList = this.fileList.concat(insertObj);
            });
          }
        },
        (error) => {},
        options
      );
    },
    takePic(type) {
      const cameraOptions = {
        quality: this.quality,
        sourceType: type, //0所有图片，1拍照，2相册
        allowEdit: false,
        targetWidth: this.imgWidth,
        targetHeight: this.imgHeight,
      };
      navigator.camera.getPicture(
        (imgUrl) => {
          let fileName = imgUrl.substring(imgUrl.lastIndexOf("/") + 1);
          let insertObj = {
            objUuid: this.objUuid,
            objType: this.objType,
            fileName: fileName,
            thumb: imgUrl,
            url: imgUrl,
            type: appConstant.typeImg,
            isHis: "N",
          };
          appFileUtil.insertFile(insertObj, this.immeUpload).then((rs) => {
            insertObj["uuid"] = rs.uuid;
            this.fileList = this.fileList.concat(insertObj);
          });
        },
        (error) => {},
        cameraOptions
      );
    },
    choosePic() {
      let chooseOptions = {
        maximumImagesCount: this.limit - this.fileList.length,
        width: this.imgWidth,
        height: this.imgHeight,
        tempPath: appConstant.locImgPath.join(";"),
        // quality: this.quality
      };
      window.imagePicker.getPictures(
        (results) => {
          for (var i = 0; i < results.length; i++) {
            let fileItem = results[i];
            let fileName = fileItem.substring(fileItem.lastIndexOf("/") + 1);
            let insertObj = {
              objUuid: this.objUuid,
              objType: this.objType,
              fileName: fileName,
              thumb: results[i],
              url: results[i],
              type: appConstant.typeImg,
              isHis: "N",
            };
            appFileUtil.insertFile(insertObj, this.immeUpload).then((rs) => {
              insertObj["uuid"] = rs.uuid;
              this.fileList = this.fileList.concat(insertObj);
            });
          }
        },
        (error) => {},
        chooseOptions
      );
    },
  },
};
</script>

<style lang="scss">
.appImgChoose {
  margin: 0 2vw;

  .van-overlay {
    background-color: rgba(0, 0, 0, 0.7);
  }
  .item-size {
    width: 24vw;
    height: 24vw;
  }
  .file-wrap {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
  }
  .del-wrap {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 5vw;
    height: 5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: lightgray;
    z-index: 9;
  }
  .up-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: 1px dashed #e5e5e5;
  }
  .up-icon {
    font-size: 24px;
    color: gray;
  }
  .upload-per {
    width: 100%;
    height: 100%;
    position: absolute;
    background: white;
    opacity: 0.8;
    top: 0;
    left: 0;
  }
}
</style>