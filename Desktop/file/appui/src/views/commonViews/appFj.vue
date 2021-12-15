<template>
  <div class="app-parent">
    <van-nav-bar
      @click-left="$root.appBack()"
      :border="false"
      title="附件下载"
      left-arrow
    />
    <div class="app-main">
      <div
        v-if="fileTitle"
        style="
          font-size: 18px;
          font-weight: bold;
          text-align: center;
          padding: 10px 0;
        "
      >
        {{ fileTitle }}
      </div>
      <div style="text-align: center; margin: 10vw 0">
        <van-circle
          :layer-color="'gray'"
          :size="200"
          v-model="downloadPer"
          :rate="downloadPer"
          :stroke-width="60"
          :text="downloadPer >= 100 ? '下载完成' : totalSize + '（Mb）'"
        />
      </div>
      <van-button
        v-show="downloadPer >= 100"
        type="info"
        size="large"
        @click="openFile"
        >打开文件</van-button
      >
      <van-button
        style="margin-top: 10px"
        type="info"
        size="large"
        @click="downloadPdf(pdfUrl)"
        >重新下载</van-button
      >
    </div>
  </div>
</template>

<script>
import appConstant from "../../utils/appConstant";
import appFileUtil from '@/utils/appFileUtil'
export default {
  name: "appFj",
  data() {
    return {
      pdfUrl: "",
      downloadPer: 0,
      totalSize: 0,
      downloadSize: 0,
      fileName: "",
      localFilePath: "",
      fileTitle: "",
    };
  },
  mounted() {
    this.pdfUrl = this.$route.query.pdfUrl;
    this.fileTitle = this.$route.query.fileTitle;
    console.log(this.pdfUrl)
    this.getPdf(this.pdfUrl);
    // this.downloadPdf(this.pdfUrl)
  },
  methods: {
    openFile() {
      let fname = this.localFilePath.substring(
        this.localFilePath.lastIndexOf("/") + 1
      );
      let ftype = fname.substring(fname.lastIndexOf(".") + 1).toLowerCase();
      let mimeType = this.getMimeType(ftype);
      cordova.plugins.fileOpener2.open(this.localFilePath, mimeType);
    },
    getMimeType(ftype) {
      let mtype = "application/pdf";
      if ("pdf" === ftype) {
        mtype = "application/pdf";
      } else if (["ppt", "pps", "pot"].includes(ftype)) {
        mtype = "application/vnd.ms-powerpoint";
      } else if (["pptx"].includes(ftype)) {
        mtype =
          "application/vnd.openxmlformats-officedocument.presentationml.presentation";
      } else if (["doc"].includes(ftype)) {
        mtype = "application/msword";
      } else if (["docx"].includes(ftype)) {
        mtype =
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
      } else if (["xls"].includes(ftype)) {
        mtype = "application/vnd.ms-excel application/x-excel";
      } else if (["xlsx"].includes(ftype)) {
        mtype =
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
      } else if (["mp3", "mp2", "mpe", "mpeg", "mpg"].includes(ftype)) {
        mtype = "audio/mpeg";
      } else if (["gif"].includes(ftype)) {
        mtype = "image/gif";
      } else if (["txt"].includes(ftype)) {
        mtype = "text/plain";
      } else if (["xml"].includes(ftype)) {
        mtype = "text/xml";
      } else if (["html"].includes(ftype)) {
        mtype = "text/html";
      } else if (["mp4", "mpg4"].includes(ftype)) {
        mtype = "video/mp4";
      } else if (["rmvb"].includes(ftype)) {
        mtype = "audio/x-pn-realaudio";
      } else if (["avi"].includes(ftype)) {
        mtype = "video/x-msvideo";
      } else if (["dwg", "dxf"].includes(ftype)) {
        mtype = "application/x-autocad";
      }
      return mtype;
    },
    getPdf(url) {
      let that = this;
      let pdfName = url.substring(url.lastIndexOf("/") + 1);
      let fileURL = cordova.file.cacheDirectory + pdfName;
      this.localFilePath = fileURL;
      //文件已存在则查看，否则下载
      window.resolveLocalFileSystemURL(
        cordova.file.cacheDirectory,
        function (root) {
          root.getFile(
            pdfName,
            { create: false },
            function (fileEntry) {
              // that.openFile();
              // that.downloadPer = 100;
              that.downloadPdf(url);
            },
            function (err) {
              that.downloadPdf(url);
            }
          );
        },
        function (err) {}
      );
    },
    downloadPdf(url) {
      let pdfName = url.substring(url.lastIndexOf("/") + 1);
      let that = this;
      appFileUtil.downloadFile(url, cordova.file.cacheDirectory, pdfName, function(event) {
        var loaded = parseInt(event.loaded / event.total * 100);
        that.downloadPer = loaded;
        if(that.downloadPer >= 100) {
          that.openFile()
        }
      })
    },
  },
};
</script>

<style>
</style>
