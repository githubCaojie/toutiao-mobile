<template>
    <!-- 左边内容 -->
    <div class="new-nav">

     <!-- <iframe class="new-iframe" id="mapFrame" 
       src="https://www.hncc-china.com/2021/GroupNews_0824/6508.html"></iframe> -->

        <div style="height:auto;">
        <iframe id="show-iframe" frameborder="0" scrolling="yes" style="background-color:transparent; position：absolute;width: 100%;
         height:100%; top: 0;left:0;bottom:0;" src='https://www.hncc-china.com/2021/GroupNews_0824/6508.html'></iframe>
      </div> 

    </div>
</template>

<script>
import { postAction } from "@/api/app-base";

export default {
  name: 'zhuc',
  data() {
    return {

    }
  },
  created(){
    this.initData();
  },
   mounted() {

         /**
     * iframe-宽高自适应显示   
     */
    const oIframe = document.getElementById('show-iframe');
    const deviceWidth = document.documentElement.clientWidth;
    const deviceHeight = document.documentElement.clientHeight;
    oIframe.style.height = (Number(deviceHeight)+100) + 'px'; //数字是页面布局高度差，其中的100可以根据自己的界面进行调整


            /**
             * iframe-宽高自适应显示
             */
            function changeMobsfIframe() {
                const mobsf = document.getElementById('mapFrame');
                //  const start = document.getElementById('cprStartButton');
                console.log(mobsf)
                // const mobsf = document.getElementById('mobsf').contentWindow.location.reload(true);
                const deviceWidth = document.body.clientWidth;
                const deviceHeight = document.body.clientHeight;
                mobsf.style.width = (Number(deviceWidth)-20) + 'px'; //数字是页面布局宽度差值
                mobsf.style.height = (Number(deviceHeight)-10) + 'px'; //数字是页面布局高度差
            }

            changeMobsfIframe()

            window.onresize = function () {
                changeMobsfIframe()
            }

      
        }
        ,
  methods: {
 
  }
}
</script>

<style lang="scss" scoped>
.new-nav{
     width: 100vw;
      height: 100vh;
      overflow:auto;
}
.new-iframe{
  width: 100vw;
      height: 100vh;
      padding: 5px;
}
</style>