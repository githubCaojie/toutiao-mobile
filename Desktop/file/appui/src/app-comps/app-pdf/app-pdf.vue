<template>
<div>
  <div id="pdfWrap" class="pdf-wrap" :style="{'top': top + 'px', 'left': left+'px'}">
    <pdf id="pdfContent" 
      :src="pdfUrl" 
      :page="currentPage"
      @num-pages="pageCount = $event"
			@page-loaded="currentPage = $event"
      class="pdf-content" :style="{transform: 'scale(' + scalWidth+ ')',}"></pdf>
  </div>

  <div class="page">
    {{currentPage}} / {{pageCount}}
  </div>
  <div class="pagebtn">
    <van-button type="info" size="small" @click="changePdfPage(0)">上一页</van-button>
    <van-button type="info" size="small" @click="changePdfPage(1)">下一页</van-button>
  </div>
</div>
  
</template>

<script>
import Hammer from 'hammerjs'
import pdf from 'vue-pdf'

export default {
  name: 'app-pdf',
  components: {
    pdf
  },
  props: {
    pdfUrl: {
      type: String,
    }
  },
  data() {
    return {
      currentPage: 1,
			pageCount: 0,
      clientHeight: document.body.clientHeight,
      clientWidth: document.body.clientWidth,
      pdfWrap: undefined,
      pdfContent: undefined,
      scalWidth: 1,
      top: 0,
      left: 0,
      preX: 0,
      preY: 0,
    }
  },
  mounted(){
    this.initPinch();
  },
  methods: {
    changePdfPage (val) {
      if (val === 0 && this.currentPage > 1) {
        this.currentPage--
      }
      if (val === 1 && this.currentPage < this.pageCount) {
        this.currentPage++
      }
    },
    initPinch(){
      this.pdfWrap = document.getElementById('pdfWrap');
      this.pdfContent = document.getElementById('pdfContent');
      var hammertime = new Hammer(this.pdfWrap);
      hammertime.get('pinch').set({ enable: true, threshold: 0.01 });

      hammertime.on('pinchin', (ev) => {
        this.scalePdf(-0.02);
      });
      hammertime.on('pinchout', (ev) => {
        this.scalePdf(0.02);
      });
      hammertime.on('panend', (ev) => {
        this.preX = 0;
      });
      hammertime.on('panmove', (ev) => {
        let maxL = ((this.scalWidth - 1)*this.clientWidth)/2;
        let maxT = ((this.scalWidth - 1)*(this.clientHeight - 70))/2 ;
        let x = ev.center.x;
        let y = ev.center.y;
        if (this.preX) {
          let pleft = this.left + (x - this.preX);
          if (pleft > 0) {
            this.left = pleft > maxL ? maxL : pleft;
          } else {
            this.left = pleft < -maxL ? -maxL : pleft;
          }
          
          let ptop = this.top  + (y - this.preY);
          if (ptop > 0) {
            this.top = ptop > maxT ? maxT : ptop;
          } else {
            this.top = ptop < -maxT ? -maxT : ptop;
          }
        }
        this.preX = x;
        this.preY = y;

        // console.log(this.left + '==============' + this.top + '----' + maxT)
      });
    },
    scalePdf(num){
      if ((this.scalWidth>2.5 && num>0) || (this.scalWidth<1 && num < 0)) {
        return;
      }
      let ele = document.getElementById('pdfWrap');
      let pdfHeight = ele.children[0].clientHeight;
      this.scalWidth += num ;
    }
  }
}
</script>

<style lang="scss" scoped>
.pdf-wrap {
  width: 100vw;
  position: absolute;
}
.pdf-content {
  width: 100%;
}
.page {
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
}
.pagebtn {
  position: absolute;
  bottom: 5px;
  right: 0px;
  button {
    margin-right: 10px;
    height: 28px;
    border-radius: 5px;
  }
}
</style>