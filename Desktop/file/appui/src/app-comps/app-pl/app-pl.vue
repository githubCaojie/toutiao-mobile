<template>
  <div class="app-fs app-pl">
    <van-field ref="plIpt" @blur="isFocus=false;iptBlur()" @focus="focus" autofocus v-model="message" rows="1" :autosize="{maxHeight: 60}" type="textarea" />
    <van-button @click="sendMsg(message)" style="margin-left: 10px;" type="info" size="small">发送</van-button>

    <!-- <div v-if="isFocus" class="pop-layer"></div> -->
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      message: '',
      sendMsg: function(){},
      iptFocus: function(){},
      iptBlur: function(){},
      isFocus: false,
    }
  },
  mounted(){
    setTimeout(() => {
      this.$refs.plIpt.focus();
    },200)
  },
  methods: {
    focus(){
      this.isFocus = true;
      if (this.iptFocus) {
        this.iptFocus();
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.app-pl {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  flex-wrap: nowrap;
  z-index: 4000;
  background-color: #F3F3F3;
  padding: 10px;
  box-sizing: border-box;

  button {
    border-radius: 5px;
    width: 90px;
  }
  
  .pop-layer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 3999;
  }
}
</style>