<template>
  <div id="app-imgpreview">
    <van-image-preview ref="appPreviewImg" :startPosition="startPosition" 
      :show-indicators="indicators" 
      v-model="show" 
      :images="pimages" 
      @change="imgChange"
      >
      <template v-slot:index>第{{ curIndex + 1 }}页</template>
      <template v-slot:cover>
        <div @click="picClick()" v-if="curObj && curObj.type && curObj.type==='2'" class="cover-center"></div>
      </template>
    </van-image-preview>
    <div class="rotate-wrap">
      <img v-if="rotate" @click="rotateImg" src="./imgs/rotate.png" />
      <img v-if="saveRotate" src="./imgs/save.png" />
      <!-- <img v-if="show" @click="stopPreview" src="./imgs/close.png" /> -->
    </div>
    <div v-if="!phoneFlag && images.length>1" class="around-btn">
      <img @click="startPosition=(startPosition-1)>=0?(startPosition-1): 0" src="./imgs/left.png" />
      <img @click="startPosition=(startPosition+1)<images.length?(startPosition+1): startPosition" src="./imgs/right.png" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ImagePreview',
    data() {
      return {
        show: true,
        curIndex: 0,
        images: [],
        rotate: false,  //是否可以旋转
        saveRotate: false, //是否保存旋转
        closePre: null, 
        timer: undefined,
        curObj: {},
        pimages: [],
        videoClick: undefined,
        indicators: true,
        startPosition: 0,
        phoneFlag: true,
      }
    },
    mounted(){
      this.phoneFlag = this.isMobile();
      this.startPosition = this.curIndex;
      this.initImgs();
    },
    methods: {
      stopPreview(){
        this.show = false;
        this.closePre();
      },
      initImgs(){
        for(let item of this.images) {
          item.rotate = 0;
          item.status = '1';
          this.pimages.push(item.preview);
        }
        this.curObj = this.images[this.curIndex]
        // setTimeout(() => {
        //   this.preloadImg();
        // },1000)
      },
      isPreing(){
        return this.show;
      },
      picClick(){
        if (this.videoClick) {
          this.videoClick();
        }
      },
      closed(){
        if (this.removePreview) {
          this.removePreview();
        }
      },
      imgChange(idx){
        this.curIndex = idx;
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          let item = this.images[idx];
          this.curObj = item;
          this.preloadOne(idx, item);
        },500)
      },
      rotateImg(){
        this.images[this.curIndex].rotate ++ ;
        let rotate = this.images[this.curIndex].rotate;
        let eles = document.querySelectorAll('#app-imgpreview .van-image__img');
        let curEle = eles[this.curIndex];
        curEle.style.cssText = `transform: rotate(${rotate*90}deg);object-fit: contain;`;
        let curImg = this.images[this.curIndex];
        curImg.url = curImg.url ;
      },
      async preloadImg(){
        for(let i=0; i<this.images.length; i++) {
          let item = this.images[i];
          if (item.status === '1' || this.saveFlag) {  //未加载
            await this.preloadOne(i, item);
          }
        }
      },
      preloadOne(index, item){
        let that = this;
        return new Promise((resolve) => {
          let curImgEle = this.getImgEles(index);
          item.status = '2';
          var img = new Image(); //创建一个Image对象，实现图片的预下载
          img.src = item.url;
          if (img.complete) { // 如果图片已经存在于浏览器缓存，直接调用回调函数
            item.status = '3';
            if (curImgEle) {
              curImgEle.src = item.url;
             that.pimages[index] = item.url;
            }
            resolve('succ');
          } else {
            img.onload = function () { //图片下载完毕时异步调用callback函数。
              item.status = '3';
              if (curImgEle) {
                curImgEle.src = item.url;
                that.pimages[index] = item.url;
              }
              resolve('succ');
            };
          }
          
        })
      },
      getImgEles(index){
        let parentEle = document.getElementById('app-imgpreview');
        let swipeEle = parentEle.getElementsByClassName('van-swipe-item')[index];
        let curImgEle = swipeEle.getElementsByClassName('van-image__img')[0];
        return curImgEle;
      },
      isMobile(){
        if( navigator.userAgent.match(/Android/i)
          || navigator.userAgent.match(/webOS/i)
          || navigator.userAgent.match(/iPhone/i)
          || navigator.userAgent.match(/iPad/i)
          || navigator.userAgent.match(/iPod/i)
          || navigator.userAgent.match(/BlackBerry/i)
          || navigator.userAgent.match(/Windows Phone/i)
        )return true;
        return false;
      }
    }
  }
</script>
<style lang="scss">
#app-imgpreview {
  .van-image-preview__index {
    top: 35px;
  }
  .van-image-preview__overlay {
    z-index: 2200 !important;
  }
  .van-image-preview {
    z-index: 2300 !important;
  }
}
</style>
<style lang="scss" scoped>
  .cover-center {
    width: 100px;
    height: 100px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .rotate-wrap {
    position: absolute;
    top: 40px;
    right: 0px;
    z-index: 3000;

    img {
      width: 20px;
      margin: 0 10px;
    }
  }
  .around-btn {
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 45%;
    z-index: 3000;
     img {
       width: 25px;
       height: 25px;
     }
  }
</style>