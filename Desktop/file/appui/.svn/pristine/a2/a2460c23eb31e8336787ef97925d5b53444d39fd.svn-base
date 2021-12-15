<template>
    <div class="app-popover">
        <div :id="slotId" style="position:relative;">
            <div @click="showPopover">
                <slot name="main"></slot>
            </div>
            <div @click="showFlag=false" v-show="showFlag" :id="popoverWrap" class="popover-wrap">
                <div class="triangle"></div>
                <slot name="popover"></slot>
            </div>
        </div>
        <div v-if="showFlag" @click="showFlag=false" style="position:fixed;top:0;left:0;width: 100vw;height: 100vh;z-index:10;opacity: 0;"></div>
    </div>
</template>

<script>
export default {
    name: 'app-popover',
    data() {
        return {
            timer: undefined,
            timeCount: 0,
            contentWidth: 0,
            contentHeight: 0,
            showFlag: false,
        }
    },
    beforeCreate(){
        this.slotId = this.appCommon.guuid();
        this.popoverWrap = this.appCommon.guuid();
    },
    mounted(){
        this.timer = setInterval(() => {
            this.timeCount ++ ;
            var ele = document.getElementById(this.slotId);
            var rect = ele.getBoundingClientRect();
            if (rect.width > 0 || this.timeCount > 10) {
                this.contentWidth = rect.width;
                this.contentHeight = rect.height;
                clearInterval(this.timer);
            }
        }, 500)
    },
    methods: {
        showPopover(){
            if (this.$attrs.disabled) {
                return;
            }
            this.showFlag = true;
            this.$nextTick().then(() => {
                var ele = document.getElementById(this.popoverWrap);
                var rect = ele.getBoundingClientRect();
                var width = rect.width;
                var height = rect.height;
                var cssText = "top:" + (this.contentHeight + 10) + 'px;left:' + (this.contentWidth/2 - width/2 + 10) + 'px;';
                ele.style.cssText = cssText;
            })
            
        },
        setPosition(){
            if (this.contentWidth <= 0) {
                return;
            }
            
        }
    }
}
</script>

<style lang="scss" scoped>
.app-popover {

    .popover-wrap {
        position: absolute;
        background-color: #EDEDED;
        border-radius: 5px;
        padding: 14px 10px;
        z-index: 99;
        
        .triangle {
            width: 0;
            height: 0px;
            border: 10px solid transparent;
            border-bottom-color: #EDEDED;
            position: absolute;
            top: -20px;
            left: calc(50% - 20px);
        }
    }
}
</style>