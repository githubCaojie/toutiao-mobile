<template>
  <div class="app-full app-personal">
    <!-- <van-nav-bar @click-left="$root.appBack" title="" :border="false" left-arrow></van-nav-bar> -->
    <div class="nav-pd app-fs my">
      <img
        @click="changeTx"
        style="width: 70px; border-radius: 50%"
        :src="$store.getters['userView'].avatarUrl || tx"
      />
      <ul>
        <li style="font-size: 16px">{{ $store.getters["userView"].operatorName }}</li>
        <li style="font-size: 13px; margin: 10px 0">
          {{ $store.getters["userView"].organization.groupName }}
        </li>
      </ul>
    </div>
    <van-cell-group style="margin-top: 20px">
      <van-cell @click.native="changeTx" title="修改头像" is-link />
      <van-cell @click.native="changePwd" title="修改密码" is-link />
      <van-cell
        @click.native="checkVersion"
        :title="'检查版本（' + $root.versionNum + '）'"
        is-link
      />
      <van-cell @click="changeAccount" title="切换账号" is-link />
    </van-cell-group>
  </div>
</template>

<script>
import appbaseApi from "../../api/app-base";
import moment from "moment";
export default {
  name: "",
  data() {
    return {
      tx: require('../../assets/imgs/tx.png'),
      weekStr: moment().format("dddd"),
      dayStr: moment().format("YYYY-MM-DD"),
    };
  },
  mounted() {
    console.log(this.$store.getters['userView'])
  },
  methods: {
    changeTx() {
      this.$router.push({
        path: "/changeTx",
      });
    },
    changePwd() {
      this.$router.push({
        path: "/changePwd",
      });
    },
    checkVersion() {
      let version = this.$root.versionNum;
      this.appCommon.getLastVersion(version).then((rdata) => {
        let flag = rdata.serviceMsg;
        if (flag === "N") {
          this.appCommon.alert("提示", "您当前为最新版本~");
        } else {
          this.appCommon.checkVersion(version);
        }
      });
    },
    changeAccount() {
      this.$router.replace({
        path: "/",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.app-personal {
  background: #f1f1f1;

  .my {
    background: #3182c4;
    height: 140px;
    padding-left: 20px;
    box-sizing: border-box;
  }
  ul {
    margin-left: 25px;

    li {
      font-size: 14px;
      color: white;
    }
    // li:nth-child(3) {
    //     border: 1px solid white;
    //     border-radius: 5px;
    //     padding: 2px 5px;
    //     margin-top: 10px;
    // }
  }
}
</style>