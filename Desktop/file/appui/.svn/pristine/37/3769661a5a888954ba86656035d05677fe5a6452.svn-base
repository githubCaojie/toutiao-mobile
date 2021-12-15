<template>
  <div class="app-main personal">
    <div class="app-fs person-wrap">
      <img :src="txUrl" />
      <ul>
        <li>{{userView.operatorName}}</li>
        <li>电话：{{userView.tel}}</li>
      </ul>
    </div>
    <van-cell-group>
      <van-cell
        :icon="item.img"
        :title="item.title"
        v-for="item in menuArr"
        :key="item.id"
        is-link
      />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: "personal",
  data() {
    return {
      userView: {},
      txUrl: require('../../assets/imgs/tx.png'),
      menuArr: [
        {id: "menu1", title: "我的消息", img: require("../../assets/imgs/query.png"), path: "/personInfo" },
        {id: "menu2", title: "我的设备", img: require("../../assets/imgs/query.png"), path: "/myAttention" },
        {id: "menu2", title: "尖端设备", img: require("../../assets/imgs/query.png"), path: "/myAttention" },
        {id: "menu2", title: "检测能力", img: require("../../assets/imgs/query.png"), path: "/myAttention" },
        {id: "menu2", title: "我的报验", img: require("../../assets/imgs/query.png"), path: "/myAttention" },
        {id: "menu2", title: "我的咨询", img: require("../../assets/imgs/query.png"), path: "/myAttention" },
      ],
      activeName: "",
      rightAdmin: false
    };
  },
  created(){
    this.userView = this.$store.getters.userView;
    console.log(this.userView)
  },
  mounted() {
    
  },
  methods: {}
};
</script>

<style lang="scss">
.personal {
  .van-cell__left-icon {
    margin-right: 20px;
  }
  .title-class {
    padding-left: 10px;
  }
  .van-collapse-item__content {
    padding: 5px 30px;
  }
  .divider {
    width: 100%;
    height: 7px;
    background: #ededed;
  }
  .sub-menu {
    .van-cell {
      // padding: 0;
    }
  }
  .menu-wrap {
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      font-size: 14px;
      padding: 5px 0;

      img {
        width: 25px;
        margin-right: 10px;
        padding: 10px;
      }

      &::after {
        content: "";
        position: absolute;
        left: -50%;
        border-bottom: 1px solid #ededed;
        width: 200%;
        bottom: 0;
        transform: scale(0.5);
      }
    }
  }
  .person-wrap {
    padding: 15px;
    height: 70px;
    border-bottom: 7px solid #ededed;
    img {
      width: 70px;
      border-radius: 5px;
    }
    ul {
      height: 100%;
      margin-left: 15px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      li:nth-child(1) {
        font-size: 15px;
        font-weight: bold;
      }
      li:nth-child(2) {
        color: gray;
        font-size: 13px;
      }
    }
  }
}
</style>