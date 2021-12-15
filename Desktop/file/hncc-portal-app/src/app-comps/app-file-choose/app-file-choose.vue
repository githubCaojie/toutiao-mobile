<template>
  <div class="appFileChoose">
    <div class="file-wrap">
      <van-uploader
       :show-upload="!disabled"
        style="margin: 1%"
        icon="plus"
        v-model="fileList"
        :deletable="!disabled"
        :disabled="disabled"
        :preview-size="'22vw'"
        :before-read="asyncBeforeRead"
        :before-delete="deleteFile"
        :max-count="maxCount"
        v-on:click-preview="previewFile"
        accept="*"
        multiple
      >
      </van-uploader>
    </div>
  </div>
</template>

<script>
import { appDocs, appDelDoc } from "../../api/app-base";
import appConstant from "@/utils/appConstant.js";
import axios from "axios";
import Vue from "vue";
import { ImagePreview } from "vant";
export default {
  props: {
    accept: {
      type: String,
      default: "*",
    },
    objUuid: {
      type: String,
      default: "",
    },
    objType: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    immeUpload: {
      type: Boolean,
      default: false,
    },
    waterType: {
      type: String,
      default: "",
    },
    location: {
      type: String,
      default: "",
    },
    maxCount: {
      type: Number,
      default: 9,
    },
    maxSize: {
      type: Number,
      default: 500,
    },
    width: {
      type: Number,
      default: 600,
    },
    height: {
      type: Number,
      default: 600,
    },
  },
  data() {
    return {
      fileList: [],
      httpInstance: undefined,
      uploadingFlag: false,
    };
  },
  created() {
    if (!this.httpInstance) {
      this.httpInstance = axios.create({
        baseURL: appConstant.baseUrl,
        timeout: 60000,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progress) => {},
      });
    }
  },
  mounted() {
    this.getHistory();
  },
  watch: {
    objUuid: function (nval, oldval) {
      if (nval) {
        this.getHistory();
      }
    },
    fileList: function (nval) {
      if (nval && nval.length > 0) {
        this.uploadFile();
      }
    },
  },
  methods: {
    previewFile(file, index) {
      var fileType = file.fileType;
      switch (fileType) {
        case "2": {
          //视频
          this.$router.push({
            path: "/appVideoPlay",
            query: {
              videoUrl: file.fullUrl,
            },
          });
          break;
        }
        case "3": {
          this.$root.goPath('/appFj', {pdfUrl: file.fullUrl})
          break;
        }
      }
    },
    asyncBeforeRead(files) {
      let pressSize = this.maxSize * 1000;
      return new Promise(async (resolve, reject) => {
        if (Object.prototype.toString.call(files) === "[object Array]") {
          let arr = [];
          for (let file of files) {
            if (file.size < pressSize) {
              arr.push(file);
            } else {
              let blob = await this.compressImg(file);
              let img = new window.File([blob], file.name, { type: file.type });
              arr.push(img);
            }
          }
          resolve(arr);
        } else {
          if (files.size < pressSize) {
            resolve(files);
          } else {
            let blob = await this.compressImg(files);
            let img = new window.File([blob], files.name, { type: files.type });
            resolve(img);
          }
        }
      });
    },
    compressImg(file) {
      var isImg = this.appCommon.isPicture(file.name);
      if (!isImg) {
        return;
      }
      return new Promise((resolve, reject) => {
        var name = file.name;
        var isPic = this.appCommon.isPicture(name);
        file.fileName = name;
        if (isPic) {
          var reader = new FileReader();
          reader.onload = () => {
            this.compress(reader.result, file.type).then((bl) => {
              resolve(bl);
            });
          };
          // 调用reader.readAsDataURL()方法，把图片转成base64
          reader.readAsDataURL(file);
        } else if (this.appCommon.isVideo(name)) {
          file.fileType = "2"; //视频
          this.fileList.push(file);
          resolve("success");
        } else {
          file.fileType = "3"; //其他
          this.fileList.push(file);
          resolve("success");
        }
      });
    },
    readImg(path) {
      return new Promise((resolve, reject) => {
        var img = new Image();
        img.src = path;
        img.onload = function () {
          resolve(img);
        };
      });
    },
    // 压缩图片
    compress(path, type) {
      return new Promise(async (resolve, reject) => {
        let img = await this.readImg(path);
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        const { width: originWidth, height: originHeight } = img;
        // 最大尺寸限制
        const maxWidth = this.width;
        const maxHeight = this.height;
        // 目标尺寸
        let targetWidth = originWidth;
        let targetHeight = originHeight;
        if (originWidth > maxWidth || originHeight > maxHeight) {
          if (originWidth / originHeight > 1) {
            // 宽图片
            targetWidth = maxWidth;
            targetHeight = Math.round(maxWidth * (originHeight / originWidth));
          } else {
            // 高图片
            targetHeight = maxHeight;
            targetWidth = Math.round(maxHeight * (originWidth / originHeight));
          }
        }
        canvas.width = targetWidth;
        canvas.height = targetHeight;
        context.clearRect(0, 0, targetWidth, targetHeight);
        // 图片绘制
        context.drawImage(img, 0, 0, targetWidth, targetHeight);
        canvas.toBlob(function (blob) {
          resolve(blob);
        }, type || "image/png");
      });
    },
    dealFile(file) {
      var name = file.file.name;
      var isPic = this.appCommon.isPicture(name);
      if (isPic) {
        file.fileType = "1"; //图片
      }
      if (this.appCommon.isVideo(name)) {
        file.fileType = "2"; //视频
      }
      file.fileName = name;
      this.fileList.push(file);
    },
    deleteFile(item, index) {
      if (item.isHis == "Y") {
        this.appCommon.confirm("警告", "确定要删除该条记录吗？", () => {
          this.appCommon.tloading("删除中...");
          appDelDoc({
              uuid: item.uuid,
            })
            .then((rtndata) => {
              this.appCommon.tloadingc();
              this.$toast("删除成功~");
              this.fileList.splice(index, 1);
            })
            .catch((error) => {
              console.log(error);
            });
        });
      } else {
        this.fileList.splice(index, 1);
        return true;
      }
    },
    async uploadFile() {
      this.uploadingFlag = true;
      for (var i = 0; i < this.fileList.length; i++) {
        // this.appCommon.tloading("上传中...");
        if (this.fileList[i].isHis != "Y") {
          this.fileList[i].status = "uploading";
          this.fileList[i].message = "上传中...";
          await this.uploadSingle(this.fileList[i]);
          this.fileList[i].status = "done";
        }
      }
      this.uploadingFlag = false;
      this.appCommon.tloadingc();
      this.$emit("uploadSucc", {});
    },
    uploadSingle(file) {
      var fd = new FormData();
      fd.append("upload ", file.file);
      fd.append("busiUuid", this.objUuid);
      fd.append("filename", file.file.name);
      fd.append("watermark", this.waterType);
      fd.append("module", appConstant.moduleId);
      fd.append("location", this.location);
      return new Promise((resolve, reject) => {
        this.httpInstance
          .post(appConstant.fileUrl + "/api/v1/file/upload", fd)
          .then((response) => {
            var rdata = response.data.result;
            for (let key in rdata) {
              file[key] = rdata[key];
            }
            file.isHis = "Y";
            resolve(rdata);
          });
      });
    },
    getHistory() {
      if (!this.objUuid) {
        return;
      }
      let params = {
        busiUuid: this.objUuid,
        busiType: this.objType,
        module: appConstant.moduleId,
      };
      appDocs(params).then((rtndata) => {
        let imgs = [];
        for (let item of rtndata.result) {
          let imgObj = {
            thumb: appConstant.baseUrl + item.thumbnail,
            url: appConstant.baseUrl + item.preview,
            fullUrl: appConstant.baseUrl + item.preview,
            fileType: "1",
            isHis: "Y",
            uuid: item.uuid,
            fileId: item.uuid,
            status: 'done',
            fileName: item.filename,
          };
          var isImg = this.appCommon.isPicture(item.filename);
          if (!isImg) {
            //不是图片
            imgObj.url = item.filename;
            imgObj["fileType"] = "3"; //类型不是图片和视频
          }
          if (this.appCommon.isVideo(item.filename)) {
            imgObj["fileType"] = "2";
            // imgObj['thumb'] = require('./video.png');
          }
          imgs.push(imgObj);
        }
        this.fileList = this.fileList.concat(imgs);
      });
    },
  },
};
</script>

<style lang="scss">
.van-uploader__wrapper--disabled {
  opacity: 1;
}
</style>