<template>
  <div class="app-full">
    <van-nav-bar title="现场报验" :border="false" @click-left="$root.appBack()" left-arrow>
      <van-icon @click="showQuery=!showQuery" size="22px" :name="require('../../assets/imgs/query.png')" slot="right"  />
    </van-nav-bar>
    <div class="app-main" :id="compId" v-rscroll>
      <header class="query-header">
        <div class="app-fa">
          <ul @click="tabType = '0';query();">
            <li :class="{ checked: tabType === '0' }">
              <fa-icon icon="user-times" />
            <li>未提交</li>
          </ul>
          <ul @click="tabType = '1';query();">
            <li :class="{ checked: tabType === '1' }">
              <fa-icon icon="user-edit" />
            </li>
            <li>审批中</li>
          </ul>
          <ul @click="tabType = '2';query();">
            <li :class="{ checked: tabType === '2' }">
              <fa-icon icon="user-lock" />
            </li>
            <li>已归档</li>
          </ul>
        </div>
      </header>
      <article class="list">
        <app-list :immediate="false" ref="xcbyList">
          <template v-slot="{ data }">
            <section
              class="app-list"
              @click="goDetail(data)">
              <ul>
                <li>编号：</li>
                <li>{{ data.code }}</li>
              </ul>
              <ul>
                <li>工程项目：</li>
                <li>{{ data.prjName }}</li>
              </ul>
              <ul>
                <li>地点及桩号：</li>
                <li>{{ data.position }}</li>
              </ul>
              <ul>
                <li>检验时间：</li>
                <li>{{ data.jyDate | dateFormatter('1') }}</li>
              </ul>
              <fa-icon v-permission="['ZL_BYTZ_DELETE']" @click.stop="delItem(data)" v-if="tabType==='0'" class="list-item-del" icon="trash-alt" />
            </section>
          </template>
        </app-list>
      </article>
    </div>
    <div v-permission="['ZL_BYTZ_ADD']" class="list-btn-wrap">
      <fa-icon @click="chooseUnit" icon="plus-square"/>
    </div>
    <van-popup v-model="showQuery" position="top" style="background:transparent;">
      <div class="popup-top"></div>
      <van-cell-group>
        <app-input v-model="queryParams.code_LIKE" label="编号："></app-input>
        <app-drop v-model="queryParams.gcxm" :label="'工程项目：'" :dropName="'XMGL.PRJ_ABBR'"></app-drop>
        <!-- <app-drop v-model="queryParams.status" :label="'状态：'" :dropName="'ZL.TABLE_AUDIT_STATUS'"></app-drop> -->
        <app-date v-model="queryParams.jyDate" label="校验日期：" type="date"></app-date>
        <van-button @click="query" size="large" type="info" style="margin: 4vw 0;">查询</van-button>
      </van-cell-group>
    </van-popup>
  </div>
</template>

<script>
import { postAction } from "@/api/app-base";
import appMixin from '@/utils/appMixin'
export default {
  name: "xcbyList",
  mixins: [appMixin],
  data() {
    return {
      showQuery: false,
      queryParams: {
        jyDate: '',
      },
      compId: this.appCommon.guuid(),
      model: {},
      tabType: "0",
      subsChooseUnit: "xcbyChooseUnit",
    };
  },
  beforeDestroy() {
    this.appCommon.off();
  },
  activated(){
    this.query();
  },
  methods: {
    delItem(data) {
      this.appCommon.confirm('提示', '确定要删除该记录吗？', () => {
        let params = {
          dc: JSON.stringify({}),
          appBusiUuid: data.id,
        }
        this.appCommon.tloading('删除中...');
        postAction('/zlTableGcby/appCancel', params).then(rdata => {
          this.$toast("删除成功~");
          this.$refs.xcbyList.delItem(data);
        })
      })
    },
    goDetail(data) {
      if (data.status === '0') {
        this.$root.goPath("/xcbyForm", { id: data.id });
      } else {
        this.$root.goPath('/flowMain', {appInstanceId: data.instanceId,openMode: '4',})
      }
    },
    chooseUnit() {
      this.$root.goPath("/unitChoose");
    },
    query() {
      this.$nextTick().then(() => {
        if (this.$refs.xcbyList) {
          this.$refs.xcbyList.onRefresh();
        }
      });
    },
    dataList(pageInfo) {
      let params = {
        dataWrap: JSON.stringify({
          pageInfo: pageInfo,
          query: this.queryParams,
        }),
        ...this.queryParams,
        status: this.tabType,
        bdId: this.$store.state.user.bdId,
      };
      this.appCommon.tloading();
      return postAction("/zlTableGcby/list", params);
    },
  },
};
</script>

<style lang="scss" scoped>
.query-header {
  margin-top: 10px;
  ul {
    li:nth-child(1) {
      font-size: 20px;
      width: 20px;
      height: 20px;
      background-color: lightgray;
      padding: 10px;
      border-radius: 50%;
      color: white;
      margin-bottom: 3px;
    }
    li.checked {
      background-color: #3182c4;
    }
  }
}
article.list {
  height: calc(100% - 75px);
  .btn-wrap {
    text-align: right;
  }
}
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
.link-unit {
  position: absolute;
  bottom: 20px;
  right: 10px;
  i {
    font-size: 30px;
    color: #3182c4;
  }
}
</style>