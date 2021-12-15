<template>
    <div class="timeline">
        <div class="tl-wraper">
            <div class="line">
                <div class="tl"></div>
                <div class="tl-circle">{{$attrs.order}}</div>
            </div>
            <div class="content-wrap">
                <slot name="content"></slot>
                <div class="arrwo-left"></div>
            </div>
            <slot name="delete" class="del-img"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'appTimeline',
    data() {
        return {
            
        }
    },
    mounted(){
        
    }
}
</script>

<style lang="scss">
.timeline {
    position: relative;

    &:nth-last-child(1) {
        overflow: hidden;
        padding-bottom: 0px;
        margin-bottom: 20px;
    }
    padding: 10px 0;
    .tl-wraper {
        display: flex;
        justify-content: space-between;
        min-height: 100px;

        .line {
            width: 40px;
            display: flex;
            justify-content: center;
            position:relative;
        }

        .tl {
            background:#ADADAD;width: 2px;
            height: calc(100% + 20px);
        }
        .tl-circle {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: #4378BE;
            position: absolute;
            top: 10px;
            color: white;
            text-align: center;
            line-height: 20px;
            font-size: 12px;
        }
    }
    .content-wrap {
        background:white;
        width: calc(100% - 40px);
        padding: 15px;
        position: relative;
        border-radius: 5px;

        .arrwo-left {
            width: 0;
            height: 0;
            border: 10px solid transparent;
            border-right-color: #F0F0F0 ;
            position: absolute;
            top: 8px;
            left: -20px;
        }

        p:nth-child(1) {
            font-size: 15px;
            font-weight: bold;
        }
        p:nth-child(2) {
            margin-top: 10px;
            font-size: 12px;
        }
    }
    .del-img {
        width: 15px;
        position: absolute;
        top: 8px;
        right: 0px;
    }
}  
</style>