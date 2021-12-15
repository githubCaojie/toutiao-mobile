<template>
  <div class="app-richtext">
    <input id="my-file" type="file" name="my-file" style="display: none;" onchange="" />
    <textarea :id="richId"></textarea>
  </div>
</template>

<script>
import appFileUtil from '@/utils/appFileUtil'
import appConstant from '@/utils/appConstant'
import { postAction } from '@/api/app-base'
export default {
  name: "appRichtext",
  data() {
    return {
      richId: this.appCommon.guuid(),
    };
  },
  mounted(){
    this.initTinymce();
  },
  methods: {
    getRichContent(){
      let content = tinyMCE.activeEditor.getContent();
      return content;
    },
    initTinymce(){
      let that = this;
      let id = '#' + this.richId;
      tinymce.init({
        selector: id,
        language:'zh_CN',
        statusbar: false,
        elementpath: false, //隐藏底栏的元素路径
        mobile: {
          menubar: false,
        },
        plugins: 'mobileImg',
        width: '100%',
        height: '90%',
        toolbar: 'undo | redo | formatselect | fontsizeselect | outdent | indent |bold | italic | alignleft | aligncenter | alignright | '+
                  'alignjustify | mobileImg',
        imageSelectorCallback(editor){
          var input = document.getElementById('my-file');
          input.click();
          input.onchange = async function () {
            var file = input.files[0];
            that.appCommon.tloading('上传中...')
            let compressedObj = await appFileUtil.compressImg(file);
            let uploadedFile = await appFileUtil.uploadToServer(compressedObj.file, appConstant.richId);
            let imgUrl = appConstant.baseUrl + uploadedFile.preview;
            var tpl = `<img src="${imgUrl}" style="max-width:100%" />`;
            editor.insertContent(tpl);
            editor.focus();
            that.appCommon.tloadingc();
          };
        }
      });
    },
  }
};
</script>

<style lang="scss" scoped>
.app-richtext {
  width: 100%;
  height: 100%;
}

</style>