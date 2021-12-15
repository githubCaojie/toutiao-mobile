<template>
    <div :style="{width: width, height: maxHeight+'vw'}">
        <div :id="ellipseId" class="ellipse-bottom" :class="{'tra': true}" :style="{width: width, height: height, 
                background: bgColor, left: left + 'px'}"></div>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    name: 'pullEllipse',
    props: {
        width: {
            type: String,
            default: '130vw'
        },
        height: {
            type: String,
            default: '15vw'
        },
        bgColor: {
            type: String,
            default: 'blue',
        },
        wrapId: {
            type: String,
        }
    },
    beforeCreate(){
        this.ellipseId = this.appCommon.guuid();
    },
    data() {
        return {
            ellipseHeight: 0,
            hammertime: undefined,
            innerWidth: window.innerWidth,
            start: 0,
            startX: 0,
            tra: false,
            left: 0,
        }
    },
    mounted(){
        console.log(this.innerWidth * 0.1)
        let element = document.getElementById(this.wrapId);
        element.addEventListener('touchstart', (e)=>{
            this.tra = false;
            this.start = 0;
        })
        element.addEventListener('touchmove', (e)=>{
            let touch = e.targetTouches[0];
            let pageY = touch.pageY;
            let pageX = touch.pageX;
            let maxVal = this.innerWidth * this.maxHeight/100 ;
            this.left = this.innerWidth * (-0.1);

            if(this.start == 0){
                this.start = pageY;
            }
            
            let czx = pageX - this.startX ;
            
            if (czx > this.innerWidth * 0.1) {
                czx = this.innerWidth * 0.1;
            } else if (czx < -this.innerWidth*0.1){
                czx = -this.innerWidth * 0.1;
            }
            this.left = this.left + czx;

            let cz = pageY - this.start;
            if(cz > this.ellipseHeight){
                if(cz < maxVal){
                    this.ellipseHeight = cz;
                }else {
                    // this.tra = true
                    // Vue.nextTick().then(()=>{
                    //     this.ellipseHeight = 0;
                    // })
                }
            }
        })
        element.addEventListener('touchend',(e)=>{
            this.tra = true
            Vue.nextTick().then(()=>{
                this.ellipseHeight = 0;
            })
            setTimeout(()=>{
                this.tra = false;
                this.start = 0;
            },400)
        })
    }
}
</script>

<style lang="scss" scoped>
    .ellipse-bottom {
        border-radius: 50% /  0 0 100% 100%;
        position: absolute;
        top: -0vw;
    }
    .tra{
        transition:all 0.4s linear;
    }
</style>