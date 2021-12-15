<template>
  <div class="home">
    <div class="title">
      <p class="time">2021年07月21日 09:33:33</p>
      智慧路桥综合信息化管控平台
    </div>
    <div class="content">
      <el-row
        :gutter="20"
      >
        <el-col
          v-for="item in navItem"
          :key="item.id"
          :span="6"
        >
          <div
            class="item"
          >
            <el-image :src="require('../../' + item.imgUrl)"/>
            <p class="name">{{item.name}}</p>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="container">
      技术支持：佛山市交通科技有限公司
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      navItem: [
        {
          id: 1,
          name: '项目管理平台',
          imgUrl: 'assets/img/home/item1.png'
        },
        {
          id: 2,
          name: '智慧工地',
          imgUrl: 'assets/img/home/item2.png'
        },
        {
          id: 3,
          name: 'BIM展示平台',
          imgUrl: 'assets/img/home/item3.png'
        },
        {
          id: 4,
          name: '作战指挥中心',
          imgUrl: 'assets/img/home/item4.png'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  background: url('../../assets/img/bg.png') center center / 100% 100% no-repeat;
  position: relative;
  width: 100vw;
  height: 100vh;
  .title {
    width: 100vw;
    height: 100px;
    background: url('../../assets/img/head1.png') center center / 100% 100% no-repeat;
    position: relative;
    text-align: center;
    line-height: 100px;
    font-size: 30px;
    color: #ffffff;
    .time {
      font-size: 15px;
      position: absolute;
      left: 50px;
    }
  }
  .content {
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .item {
      background-size: 100% 100%;
      background-position: center center;
      background-repeat: no-repeat;
      position: relative;
      .name {
        text-align: center;
        position: absolute;
        width: 100%;
        bottom: 15%;
        font-size: 20px;
        color: #fff;
      }
    }
  }
  .container {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 15px;
    color: #fff;
  }
}
</style>