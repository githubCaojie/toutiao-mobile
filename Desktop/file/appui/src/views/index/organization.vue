<template>
  <div class="app-full app-personal">
    <!-- <van-nav-bar @click-left="$root.appBack" title="" :border="false" left-arrow></van-nav-bar> -->
    <div class="nav-pd app-fs my">

        <ul>
        <li style="font-size: 16px">张三</li>
        <li style="font-size: 13px; margin: 10px 0">
         湖南少交通水得建设集团有限公司
        </li>
      </ul>
      <img
        @click="changeTx"
        style="width: 60px; border-radius: 50%;    margin-left: 55px;"
        src="../../assets/imgs/login/offline.png"
      />
   
    </div>
      <van-cell title="企业/组织" label="湖南少交通水得建设集团有限公司" />
      <van-cell title="部门" label="综合管理部" />
      <van-cell title="岗位" label="部长" />
      <van-cell title="姓名" label="张三" />
      <van-cell title="联系电话" label="18520364569" />
      <van-cell title="备注信息" label="事务" />


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
  background: #fff;

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