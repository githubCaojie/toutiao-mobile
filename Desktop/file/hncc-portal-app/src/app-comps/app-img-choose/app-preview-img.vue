<template>
    <div>

    </div>
</template>

<script>
import { ImagePreview } from 'vant';
export default {
    name: 'appPreviewImg',
    data() {
        return {
            imgPreIns: '',
            imgArr: [],
            imgIdx: '',
            backFlag: false,//是否点击手机回退按钮
        }
    },
    mounted() {
        this.imgArr = this.$route.query.imgArr;
        this.imgIdx = this.$route.query.imgIdx;
        this.previewImg();
    },
    beforeDestroy() {
        this.backFlag = true;
        if(this.imgPreIns){
            this.imgPreIns.close();
        }
    },
    methods: {
        previewImg(){
            let that = this;
            this.imgPreIns = ImagePreview({
                images: this.imgArr,
                startPosition: this.imgIdx,
                closeOnPopstate: true,
                showIndicators: true,
                showIndex: true,
                onClose: function(){
                    that.imgPreIns = undefined;
                    if(!that.backFlag){
                        that.$root.appBack();
                    }
                }
            });
        }
    },
}
</script>

<style lang="scss" scoped>
    .van-swipe-item {
        width: 100vw;
    }
</style>