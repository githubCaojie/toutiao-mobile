<template>
  <div :id="id" class="drag" ref="dragDiv">
    <div class="drag_bg"></div>
    <div class="drag_text">{{showWords}}</div>
    <div
      ref="moveDiv"
      @touchstart="mousedownFn($event)"
      :class="{'handler_ok_bg':confirmSuccess}"
      class="handler handler_bg"
      style="position: absolute;top: 0px;left: 0px;"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'appDragBtn',
  props: {
    dragEmitStr: {
      type: String
    },
    defaultWords: {
      type: String,
      default: '拖动滑块验证',
    },
    confirmWords: {
      type: String,
      default: '验证通过'
    }
  },
  data() {
    return {
      id: this.appCommon.guuid(),
      beginClientX: 0 /*距离屏幕左端距离*/,
      mouseMoveStata: false /*触发拖动状态  判断*/,
      maxwidth: "" /*拖动最大宽度，依据滑块宽度算出来的*/,
      // showWords: "拖动滑块验证" /*滑块文字*/,
      confirmSuccess: false, /*验证成功判断*/
      parentEle: undefined,
      succTimer: undefined,
    };
  },
  created(){
    this.showWords = this.defaultWords
  },
  mounted(){
    this.parentEle = document.getElementById(this.id);
    this.maxwidth = this.$refs.dragDiv.clientWidth - this.$refs.moveDiv.clientWidth;
    this.initDrag();
  },
  methods: {
    resetBtn(){
      this.confirmSuccess = false;
      this.parentEle.classList.remove('drag-succ');
      this.parentEle.getElementsByClassName("handler")[0].style.left = 0 + "px";
      this.parentEle.getElementsByClassName("drag_bg")[0].style.width = 0 + "px";
      this.showWords = this.defaultWords;
      this.initDrag();
    },
    initDrag(){
      this.parentEle.addEventListener("touchmove", this.mouseMoveFn);
      this.parentEle.addEventListener("touchend", this.moseUpFn);
    },
    mousedownFn: function(e) {
      if (!this.confirmSuccess) {
        e.preventDefault && e.preventDefault(); //阻止文字选中等 浏览器默认事件
        this.mouseMoveStata = true;
        this.beginClientX = e.changedTouches[0].clientX;
      }
    }, //mousedoen 事件
    successFunction() {
      if (this.dragEmitStr) {
        setTimeout(() => {
          this.appCommon.emit(this.dragEmitStr, false)
        },1000)
      }
      this.confirmSuccess = true;
      this.showWords = this.confirmWords;
      if (window.addEventListener) {
        this.parentEle.removeEventListener("touchmove", this.mouseMoveFn);
        this.parentEle.removeEventListener("touchend", this.moseUpFn);
      } else {
        this.parentEle.removeEventListener("touchend", () => {});
      }
      // this.parentEle.getElementsByClassName("drag_text")[0].style.color = "#fff";
      // this.parentEle.style.backgroundColor = '#F8DC86';
      this.parentEle.classList.add('drag-succ');
      this.parentEle.getElementsByClassName("handler")[0].style.left = (this.maxwidth-8) + "px";
      this.parentEle.getElementsByClassName("drag_bg")[0].style.width = this.maxwidth + "px";
      
      clearTimeout(this.succTimer);
      this.succTimer = setTimeout(() => {
        this.$emit('btnConfirm')
      },300)
      
    }, //验证成功函数
    mouseMoveFn(e) {
      if (this.dragEmitStr) {
        this.appCommon.emit(this.dragEmitStr, true)
      }
      if (this.mouseMoveStata) {
        let width = e.changedTouches[0].clientX - this.beginClientX;
        if (width > 0 && width <= this.maxwidth) {
          this.parentEle.getElementsByClassName("handler")[0].style.left =
            width + "px";
          this.parentEle.getElementsByClassName("drag_bg")[0].style.width =
            width + "px";
        } else if (width > this.maxwidth) {
          this.successFunction();
        }
      }
    }, //mousemove事件
    moseUpFn(e) {
      this.mouseMoveStata = false;
      var width = e.changedTouches[0].clientX - this.beginClientX;
      if (width < this.maxwidth) {
        this.parentEle.getElementsByClassName("handler")[0].style.left = 0 + "px";
        this.parentEle.getElementsByClassName("drag_bg")[0].style.width = 0 + "px";
      }
    } //mouseup事件
  },
};
</script>

<style scoped>
.drag {
  position: relative;
  background-color: #F6CD52;
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 50px;
}
.drag-succ {
  background-color: #F8DC86;
  color: white;
}
.handler {
  width: 40px;
  height: 40px;
  cursor: move;
  margin: 5px 0 5px 5px;
}
.handler_bg {
  background: #F8DC86
    url('./jiantou.png')
    no-repeat center;
  background-size: 20px 20px;
  border-radius: 50%;
}
.handler_ok_bg {
  background: #fff
    url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0ZDhlNWY5My05NmI0LTRlNWQtOGFjYi03ZTY4OGYyMTU2ZTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDlBRDI3NjVGMkQ2MTFFNEI5NDBCMjQ2M0ExMDQ1OUYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDlBRDI3NjRGMkQ2MTFFNEI5NDBCMjQ2M0ExMDQ1OUYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDphNWEzMWNhMC1hYmViLTQxNWEtYTEwZS04Y2U5NzRlN2Q4YTEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NGQ4ZTVmOTMtOTZiNC00ZTVkLThhY2ItN2U2ODhmMjE1NmU2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+k+sHwwAAASZJREFUeNpi/P//PwMyKD8uZw+kUoDYEYgloMIvgHg/EM/ptHx0EFk9I8wAoEZ+IDUPiIMY8IN1QJwENOgj3ACo5gNAbMBAHLgAxA4gQ5igAnNJ0MwAVTsX7IKyY7L2UNuJAf+AmAmJ78AEDTBiwGYg5gbifCSxFCZoaBMCy4A4GOjnH0D6DpK4IxNSVIHAfSDOAeLraJrjgJp/AwPbHMhejiQnwYRmUzNQ4VQgDQqXK0ia/0I17wJiPmQNTNBEAgMlQIWiQA2vgWw7QppBekGxsAjIiEUSBNnsBDWEAY9mEFgMMgBk00E0iZtA7AHEctDQ58MRuA6wlLgGFMoMpIG1QFeGwAIxGZo8GUhIysmwQGSAZgwHaEZhICIzOaBkJkqyM0CAAQDGx279Jf50AAAAAABJRU5ErkJggg==")
    no-repeat center;
}
.drag_bg {
  background-color: #F8DC86;
  height: 50px;
  border-radius: 50px;
  width: 0px;
}
.drag_text {
  position: absolute;
  top: 0px;
  width: 100%;
  text-align: center;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  -o-user-select: none;
  -ms-user-select: none;
}
</style>