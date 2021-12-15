<template>
  <div class="app-full">
    <van-nav-bar :title="title" :border="false" @click-left="$root.appBack()" left-arrow>
      <van-icon @click="showQuery = !showQuery" size="22px" :name="require('../../assets/imgs/query.png')" slot="right" />
    </van-nav-bar>
    <div class="app-main" style="overflow-x: auto">
      <van-tabs v-model="active" @change="tabChange">
        <van-tab title="我的" name="personType;my"></van-tab>
        <van-tab title="其他人" name="personType;else"></van-tab>
        <van-tab title="已整改" name="isZg;Y"></van-tab>
        <van-tab title="未整改" name="isZg;N"></van-tab>
        <van-tab title="全部" name=""></van-tab>
      </van-tabs>
      <div class="content">
        <app-list ref="xcbyList" :immediate="false">
          <template v-slot="{ data }">
            <div class="app-list" @click="goDetail(data)">
              <p class="app-list-item">
                检查时间：<span>{{ data.troubleTime }}</span>
              </p>
              <p class="app-list-item">
                检查人：<app-drop-show dropName="ORG.PERSON_NAME" :value="data.checkMan"></app-drop-show>
              </p>
              <p class="app-list-item">
                问题类型：<app-drop-show :dpData="troubleTypeList" :value="data.troubleType"></app-drop-show>
              </p>
              <p class="app-list-item">
                问题地点：<span>{{ data.troublePlace }}</span>
              </p>
              <p class="app-list-item">
                问题描述：<span>{{ data.troubleDesc }}</span>
              </p>
              <p class="app-list-item">
                是否已整改：<app-drop-show :dropName="'UEP.YES_OR_NO'" :value="data.isZg"></app-drop-show>
              </p>
              <p class="app-list-item">
                状态：<span>{{ data.statusName }}</span>
              </p>
              <div v-if="data.isZg == 'Y'">
                <van-divider>问题照片</van-divider>
                <app-img-choose disabled :objUuid="data.id" type="1"></app-img-choose>
                <van-divider>整改照片</van-divider>
                <app-img-choose disabled :objUuid="data.zgPicId" type="1"></app-img-choose>
                <p class="app-list-item">
                  整改时间：<span>{{ data.zgTime }}</span>
                </p>
                <p class="app-list-item">
                  整改描述：<span>{{ data.zgDesc }}</span>
                </p>
              </div>
              <fa-icon @click.stop="delItem(data)" v-if="data.status === '0'" class="list-item-del" icon="trash-alt" />
            </div>
          </template>
        </app-list>
      </div>

    </div>
    <div class="list-btn-wrap">
      <fa-icon @click="add" icon="plus-square" />
    </div>
    <van-popup v-model="showQuery" position="top" style="background: transparent">
      <div class="popup-top"></div>
      <van-cell-group>
        <app-drop v-model="queryParams.troubleType" :label="'问题类型：'" :dpData="troubleTypeList"></app-drop>
        <app-drop v-model="queryParams.isZg" :label="'是否已整改：'" :dropName="'UEP.YES_OR_NO'"></app-drop>
        <app-drop v-model="dateStr" :label="'日期：'" :dpData="dateDropList"></app-drop>
        <van-button @click="query" size="large" type="info" style="margin: 4vw 0">查询</van-button>
      </van-cell-group>
    </van-popup>
  </div>
</template>

<script>
import { postAction } from "@/api/app-base";
export default {
  name: "sspList",
  data() {
    return {
      title: "",
      showQuery: false,
      queryParams: {
        troubleType: "",
        isZg: "",
      },
      dateStr: "",
      troubleTypeList: [],
      dateDropList: [],
      active: 0,
      tabParam: 'personType;my',
    };
  },
  created() {
    this.type = this.$route.query.type;
    if (this.type == "1") {
      this.title = "安全随手拍";
    } else {
      this.title = "环保随手拍";
    }
  },
  activated() {
    this.query();
  },
  methods: {
    tabChange(event) {
      this.tabParam = event;
      this.query();
    },
    add() {
      this.appCommon.tloading('检查中...')
      this.appCommon.postReq('/troubleDeal/checkSecType', { bdId: this.$store.state.user.bdId, }).then(rdata => {
        let msg = rdata.parameters.msg;
        if (msg) {
          this.appCommon.alert(msg)
        } else {
          this.$router.push({
            path: "/addTrouble",
            query: {
              type: this.type,
            },
          });
        }
      })
    },
    goDetail(data) {
      // this.$router.push({
      //   path: "/sspForm",
      //   query: {
      //     data: data,
      //   },
      // });
      // if (data.status === '0') {
      //   this.$root.goPath("/sspForm", { data: data });
      // } else {
      //   this.$root.goPath('/flowMain', {appInstanceId: data.instanceId,openMode: '4', title: '随手拍'})
      // }
      this.$root.goPath('/flowMain', { appInstanceId: data.instanceId, openMode: '4', title: '随手拍' })
    },
    delItem(data) {
      this.appCommon.confirm("提示", "确定要删除该记录吗？", () => {
        let params = {
          appBusiUuid: data.id,
        };
        this.appCommon.tloading("删除中...");
        postAction("/troubleDeal/appCancel", params).then((rdata) => {
          this.$toast("删除成功~");
          this.query();
        });
      });
    },
    query() {
      this.showQuery = false;
      this.$nextTick().then(() => {
        if (this.$refs.xcbyList) {
          this.$refs.xcbyList.onRefresh();
        }
      });
    },
    dataList(pageInfo) {
      let tabObj = {}
      if (this.tabParam) {
        let arr = this.tabParam.split(';');
        tabObj[arr[0]] = arr[1]
      }
      let params = {
        dataWrap: JSON.stringify({
          pageInfo: pageInfo,
          query: this.queryParams,
        }),
        type: this.type,
        dateStr: this.dateStr,
        bdId: this.$store.state.user.bdId,
        ...tabObj
      };
      
      this.appCommon.tloading();
      // return postAction("/troubleDeal/list", params);
      return new Promise((resolve, reject) => {
        this.appCommon.postReq("/troubleDeal/list", params).then((rdata) => {
          this.troubleTypeList = rdata.parameters.troubleTypeList;
          this.dateDropList = rdata.parameters.dateDropList;
          resolve(rdata);
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.list-btn-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 10px;
  bottom: 0px;
  transform: translateY(-50%);
  img {
    width: 50px;
  }
  svg {
    font-size: 35px;
    color: #3182c4;
    margin: 10px 0;
  }
}
.content {
  height: calc(100% - 45px);
  overflow-y: auto;
}
</style>