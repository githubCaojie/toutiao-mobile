<template>
  <div :id="listUuid" class="appList">
    <van-pull-refresh v-model="listObj.pull" @refresh="onRefresh">
      <van-list
        :ref="listRef"
        :immediate-check="immediate"
        v-model="listObj.more"
        :finished="listObj.finish"
        :finished-text="finishText"
        @load="onLoad"
      >
        <div v-for="(item,index) in dataArr" :key="item.id">
          <slot v-bind:data="item" v-bind:index="index"></slot>
        </div>
      </van-list>
    </van-pull-refresh>
    <div v-if="dataArr.length==0 && !querying" class="empty-wrap">
      <img style="width: 40vw;" src="./empty.png" />
      <div>暂无数据~</div>
    </div>
  </div>
</template>

<script>
import appConstant from "@/utils/appConstant.js";
export default {
  name: "appList",
  data() {
    return {
      listObj: { pull: false, more: false, finish: false },
      pageInfo: { curPageNum: 0, rowOfPage: appConstant.rowOfPage },
      dataArr: [],
      querying: false,
      emptPageInfo: { curPageNum: 1, allPageNum: 1 }
    };
  },
  beforeCreate() {
    this.listUuid = this.appCommon.guuid();
    this.listRef = this.appCommon.guuid();
  },
  computed: {
    finishText() {
      return this.dataArr && this.dataArr.length == 0 ? "" : "没有更多数据了";
    }
  },
  props: {
    immediate: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    $route: function(to, from) {
      this.$nextTick().then(() => {
        let parentEle = undefined;
        let curEle = document.getElementById(this.listUuid); //处理连续多个list，
        if (curEle) {
          parentEle = document.getElementById(this.listUuid).parentElement;
        }
        if (!parentEle) {
          return;
        }
        if (!this.routeToName) {
          this.parentScrollTop = parentEle.scrollTop;
          this.routeToName = to.name;
        } else {
          this.routeToName = "";
          parentEle.scrollTop = this.parentScrollTop;
        }
      });
    }
  },
  methods: {
    delItem(item) {
      if (Object.prototype.toString.call(item) === '[object Object]') {
        this.dataArr.splice(this.dataArr.indexOf(item), 1);
      } else {
        for(let i=0; i< this.dataArr.length; i++) {
          if (this.dataArr[i].id === item) {
            this.dataArr.splice(i, 1);
            break;
          }
        }
      }
      
    },
    addItem(item) {
      this.dataArr.unshift(item);
    },
    onRefresh() {
      this.pageInfo.curPageNum = 1;
      this.pageInfo.rowOfPage = appConstant.rowOfPage;
      delete this.pageInfo.allPageNum;
      delete this.pageInfo.allRowNum;
      // this.dataArr = [];
      this.querying = true;
      this.$parent.dataList(this.pageInfo).then(rtn => {
        var rdata = rtn.dataWraps.dataWrap;
        if (document.getElementById(this.listUuid)) {
          document.getElementById(this.listUuid).parentElement.scrollTop = 0;
        }
        this.listObj.pull = false;
        // this.listObj.finish = false;
        this.pageInfo = rdata.pageInfo ? rdata.pageInfo : this.emptPageInfo;
        if (
          !this.immediate &&
          this.pageInfo.curPageNum < this.pageInfo.allPageNum
        ) {
          this.$refs[this.listRef].check();
        }
        this.querying = false;
        this.dataArr = rdata.dataList || [];
      });
    },
    onLoad() {
      if (this.pageInfo.curPageNum >= this.pageInfo.allPageNum) {
        this.listObj.more = false;
        this.listObj.finish = true;
        return;
      }
      this.pageInfo.curPageNum++;
      this.querying = true;
      this.$parent.dataList(this.pageInfo).then(rtn => {
        this.querying = false;
        var rdata = rtn.dataWraps.dataWrap;
        this.pageInfo = rdata.pageInfo ? rdata.pageInfo : this.emptPageInfo;
        if (this.pageInfo.curPageNum && this.pageInfo.curPageNum <= 1) {
          this.dataArr = rdata.dataList || [];
        } else {
          this.dataArr = this.dataArr.concat(rdata.dataList || []);
        }
        // 加载状态结束
        this.listObj.more = false;
        // 数据全部加载完成
        if (this.pageInfo.curPageNum >= this.pageInfo.allPageNum) {
          this.listObj.finish = true;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.appList {
  width: 100%;

  .empty-wrap {
    text-align: center;
    position: absolute;
    top: 30vh;
    left: 30vw;
  }
}
</style>