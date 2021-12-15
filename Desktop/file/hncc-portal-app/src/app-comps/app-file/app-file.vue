<template>
    <div class="appFile">
        <div class="file-wrap">
            <div v-for="(file,index) in files" :key="file.fileId">
                <van-image @click="previewImg(index)" v-if="imgType.includes(file.type)" fit="contain" class="file-img" :src="file.thumb" />
                <p @click="preDoc(file)" v-else class="file-img">{{file.name}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import * as appBaseApi from '../../api/app-base'
import { ImagePreview } from 'vant';
//文件类型：1、图片，2、视频
export default {
    name: '',
    data() {
        return {
            hisOver: false,
            files: [],
            imgType: ['BMP','TIFF','GIF','PNG','JPEG','JPG'],
        }
    },
    props:{
        objUuid: {
            type: String,
            default: '',
        },
        objType: {
            type: String,
            default: '',
        },
    },
    watch: {
        objUuid: {
            handler: function(nval, oval){
                this.getHistory();
            }
        },
        objType: {
            handler: function(nval, oval){
                this.getHistory();
            }
        }
    },
    activated(){
        this.getHistory();
    },
    methods: {
        previewImg(index){
            let that = this;
            let backFn = function(){
                if(that.imgPreIns){
                    that.imgPreIns.close();
                }else{
                    that.$router.go(-1);
                }
            }
            document.addEventListener("backbutton", backFn, false);
            let imgArr = [];
            for(let item of this.files){
                if(this.imgType.includes(item.type)){
                    imgArr.push(item.url);
                }
            }
            this.imgPreIns = ImagePreview({
                images: imgArr,
                startPosition: 0,
                onClose: function(){
                    that.imgPreIns = undefined;
                    document.removeEventListener("backbutton", backFn, false);
                }
            });
        },
        preDoc(file){
            this.$router.push({
                path: '/appFj',
                query: {
                    pdfUrl: file.url,
                }
            })
        },
        getHistory(){
            if(!this.objUuid || this.hisOver){
                return ;
            }
            this.hisOver = true;
            this.appCommon.tloading();
            let params = {
                objUuid: this.objUuid,
                objType: this.objType,
            }
            appBaseApi.appDocs(params).then((rtndata)=>{
                for(let item of rtndata.list){
                    let imgObj = {
                        thumb: 'data:image/gif;base64,'+item.thumbnailData,
                        url: item.ext1,
                        type: item.fileType,
                        isHis: this.hisFlag,
                        fileId: item.fileId,
                        name: item.edocFile.name,
                    }
                    this.files.push(imgObj);
                }
            })
        },
    }
}
</script>

<style lang="scss" scoped>
.appFile{
    .file-wrap{
        display: flex;
        justify-content: flex-start;
        align-items: center;

        p{
            font-size: 12px;
        }
    }
    .file-img{
        width: 20vw;
        height: 30vw;
        object-fit: contain;
        margin: 0 2.5vw;
        border: 1px solid lightgray;
        box-sizing: border-box;
        text-align: center;
    }
} 
</style>