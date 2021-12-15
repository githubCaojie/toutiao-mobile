<template>
  <div>
    <van-nav-bar
      left-text="返回"
      left-arrow
      class="nav-bar"
      @click-left="$router.go(-1)"
    />
    <div class="mains">
        <div class="title">工程建设</div>
        <van-swipe class="my-swipe" :autoplay="3000" :show-indicators="false" indicator-color="white">
            <van-swipe-item
                v-for="(i,index) in gcjsData"
                :key="index">
                <van-image
                    class="img"
                    fit="cover"
                    :src="i.url"
                    @click="imgClickHandel(i)"
                >
                <div class="label">{{i.name}}</div>
                </van-image>
            </van-swipe-item>
        </van-swipe>
        <div class="title">特色服务区</div>
        <van-swipe class="my-swipe" :autoplay="3000" :show-indicators="false" indicator-color="white">
            <van-swipe-item
                v-for="(i,index) in fwqData"
                :key="index">
                <van-image
                    class="img"
                    fit="cover"
                    :src="i.url"
                    @click="imgClickHandel(i)"
                >
                <div class="label">{{i.name}}</div>
                </van-image>
            </van-swipe-item>
        </van-swipe>
        <div class="title">平益品牌</div>
        <van-swipe class="my-swipe" :autoplay="3000" :show-indicators="false" indicator-color="white">
            <van-swipe-item
                v-for="(i,index) in ppypData"
                :key="index">
                <van-image
                    class="img"
                    fit="cover"
                    :src="i.url"
                    @click="imgClickHandel(i)"
                >
                </van-image>
            </van-swipe-item>
        </van-swipe>
    </div>
  </div>
</template>

<script>
import { ImagePreview } from 'vant';

export default {
    data () {
        return {
            gcjsData: [
                {
                    url: require('../../assets/img/gcjs-1.jpg'),
                    name: '钢筋加工场'
                },
                {
                    url: require('../../assets/img/gcjs-2.jpg'),
                    name: '钢筋加工场'
                },
                {
                    url: require('../../assets/img/gcjs-3.jpg'),
                    name: '项目部'
                },
                {
                    url: require('../../assets/img/gcjs-4.jpg'),
                    name: '标准化梁场'
                },
                {
                    url: require('../../assets/img/gcjs-5.jpg'),
                    name: '智慧梁场'
                },
                {
                    url: require('../../assets/img/gcjs-6.jpg'),
                    name: '拌和站'
                },
                {
                    url: require('../../assets/img/gcjs-7.jpg'),
                    name: '栈桥'
                },
                {
                    url: require('../../assets/img/gcjs-8.jpg'),
                    name: '护栏台车'
                },
                {
                    url: require('../../assets/img/gcjs-9.jpg'),
                    name: '路基'
                },
                {
                    url: require('../../assets/img/gcjs-10.jpg'),
                    name: '围堰施工'
                },
                {
                    url: require('../../assets/img/gcjs-11.jpg'),
                    name: '高墩施工'
                },
                {
                    url: require('../../assets/img/gcjs-12.jpg'),
                    name: '墩柱'
                },
                {
                    url: require('../../assets/img/gcjs-13.jpg'),
                    name: '桥梁'
                },
                {
                    url: require('../../assets/img/gcjs-14.jpg'),
                    name: '挂篮施工'
                },
                {
                    url: require('../../assets/img/gcjs-15.jpg'),
                    name: '桥梁'
                },
                {
                    url: require('../../assets/img/gcjs-16.jpg'),
                    name: '梁板架设'
                },
                {
                    url: require('../../assets/img/gcjs-17.jpg'),
                    name: '波形钢腹板桥'
                },
                {
                    url: require('../../assets/img/gcjs-18.jpg'),
                    name: '桥梁成桥'
                },
                {
                    url: require('../../assets/img/gcjs-19.jpg'),
                    name: '隧道开挖'
                },
                {
                    url: require('../../assets/img/gcjs-20.jpg'),
                    name: '隧道门禁广场'
                },
                {
                    url: require('../../assets/img/gcjs-21.jpg'),
                    name: '路面'
                },
                {
                    url: require('../../assets/img/gcjs-22.jpg'),
                    name: '路面'
                },
            ],
            fwqData: [
                {
                    url: require('../../assets/img/tsfwq-1.jpg'),
                    name: '长寿红色智慧服务区'
                },
                {
                    url: require('../../assets/img/tsfwq-2.jpg'),
                    name: '长寿红色智慧服务区'
                },
                {
                    url: require('../../assets/img/tsfwq-3.jpg'),
                    name: '长寿红色智慧服务区'
                },
                {
                    url: require('../../assets/img/tsfwq-4.jpg'),
                    name: '瓮江服务区'
                },
                {
                    url: require('../../assets/img/tsfwq-5.jpg'),
                    name: '瓮江服务区'
                },
                {
                    url: require('../../assets/img/tsfwq-6.jpg'),
                    name: '汨罗非遗文化主题服务区'
                },
                {
                    url: require('../../assets/img/tsfwq-7.jpg'),
                    name: '汨罗非遗文化主题服务区'
                },
                {
                    url: require('../../assets/img/tsfwq-8.jpg'),
                    name: '汨罗非遗文化主题服务区'
                },
                {
                    url: require('../../assets/img/tsfwq-9.jpg'),
                    name: '新泉寺服务区'
                },
                {
                    url: require('../../assets/img/tsfwq-10.jpg'),
                    name: '新泉寺服务区'
                }
            ],
            ppypData: [
                {
                    url: require('../../assets/img/pypp-1.png')
                },
                {
                    url: require('../../assets/img/pypp-2.png')
                },
                {
                    url: require('../../assets/img/pypp-3.png')
                },
                {
                    url: require('../../assets/img/pypp-4.png')
                },
                {
                    url: require('../../assets/img/pypp-5.png')
                },
                {
                    url: require('../../assets/img/pypp-6.png')
                },
            ]
        }
    },
    methods: {
        imgClickHandel(i) {
            ImagePreview([i.url]);
        }
    }
};
</script>

<style lang="less" scoped>
.photo {
    width:300px;
    height:150px;
    display:unset;
}
.mains {
  height: calc(100vh - 80px);
  padding: 20px 0;
  overflow-y: scroll;
}
.nav-bar {
//   z-index: 9999;
  /deep/ .van-nav-bar__content {
    height: 80px;
    .van-nav-bar__left {
      .van-icon {
        font-size: 36px;
        color: #000;
      }
      .van-nav-bar__text {
        font-size: 36px;
        color: #000;
      }
    }
  }
}
.img {
    width: 100vw;
    height: 400px;
    position: relative;
}
.title {
    font-size: 32px;
    line-height: 60px;
    text-indent: 40px;
    position: relative;
    &::before {
        content: "";
        height: 32px;
        width: 8px;
        background-color: #ec5964;
        position: absolute;
        top: 14px;
        left: 20px;
    }
}
/deep/ .label {
    font-size: 32px;
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    color: #ffffff;
    padding: 10px;
    text-align: center;
}
</style>
