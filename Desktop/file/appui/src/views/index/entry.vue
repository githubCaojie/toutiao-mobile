<template>
     <div class="entry">
    <div class="content">
      <div class="head">红英</div>
      <div class="text">
        <h3 class="name">亲爱的单红英：</h3>
        <div class="main">今天是您入职交水建集团5周年的日子，感谢您5年来做出的贡献，时间记录着你的脚步，业绩肯定了你的努力，愿您再接再厉，争取创造更大的辉煌！</div>
      </div>
    </div>
    <div class="floor"></div>
  </div>
</template>

<script>
import * as appBaseApi from "../../api/app-base";

export default {

  data() {
    return {
  
    };
  },
  mounted() {

  },
  methods: {
  
  },
};
</script>
<style lang="scss" scoped>
.entry {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  background: url("../../assets/imgs/entry/entrybackground.png") center center / 100% 100% no-repeat;
}

 .entry .content {
  height: 13.4rem;
  width: 8.89rem;
  position: relative;
  box-shadow: 0px 0.18rem 0.24rem rgba(0, 0, 0, 0.06);
  border-radius: 0.18rem;
  background: #fff;
}

 .entry .content::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
    background: url("../../assets/imgs/entry/entrybottombackground.png") center center / 100% 100% no-repeat;
  width: 8.5338rem;
  height: 2.6534rem;
}

 .entry .content .head {
  color: #fff;
  font-size: 0.66rem;
  text-align: center;
  margin: 0.51rem auto 0;
  position: relative;

  width: 7.74rem;
  height: 3.54rem;
  line-height: 3.5rem;
  background: url("../../assets/imgs/entry/entryheadbackground.png") center center / 3.54rem 100% no-repeat;
}


.entry .content .head::after {
  position: absolute;
  left: 0;
  bottom: -0.3rem;
  text-align: center;
  line-height: 1.1rem;
  font-size: 0.42rem;
  z-index: 1;
  content: "入职周年快乐！";
  width: 7.7431rem;
  height: 2.0725rem;
  line-height: 2.35rem;
  background: url("../../assets/imgs/entry/entryicon.png") center center / 100% 100% no-repeat;
  color: #003A7C;
  
}
 .entry .content .text {
  margin: 0.8rem 0.73rem 0;
  line-height: 0.88rem;
}
.entry .content .text h3.name {
  color: #415261;
  font-size: 0.54rem;
}
 .entry .content .text .main {
  color: #808E99;
  font-size: 0.48rem;
  text-indent: 0.96rem;
}
 .entry .floor {
  width: 4.9307rem;
  height: 0.84rem;
  background: url("../../assets/imgs/entry/logo3.png") center center / 100% 100% no-repeat;
  position: absolute;
  bottom: 0.6rem;
  left: 50%;
  transform: translateX(-50%);
}
</style>