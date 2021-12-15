<template>
  <div class="app-full">
    <van-nav-bar @click-left="$root.appBack()" title="现场变更" :border="false" left-arrow>
      <van-icon @click="showQuery=!showQuery" size="22px" :name="require('../../assets/imgs/query.png')" slot="right"  />
    </van-nav-bar>
    <div class="app-main" v-rscroll>
      <app-list ref="xcbgList" :immediate="false">
        <template v-slot:default="{data}">
          <div class="app-list">
            <div @click="$root.goPath('/flowMain', { appInstanceId: data.instanceId, openMode: '4', title: '现场变更' })">
              <p class="app-list-item">
                <span>添加人：</span>
                <app-drop-show dropName="ORG.PERSON_NAME" :value="data.addMan"></app-drop-show>
              </p>
              <p class="app-list-item"><span>部位编码：</span><span>{{data.bwbm}}</span></p>
              <p class="app-list-item">
                <span>变更内容：</span>
                <span>{{data.bgnr}}</span>
              </p>
              <p class="app-list-item">
                <span>审核状态：</span>
                <span :style="{'color': statusColor[data.status]}">{{data.statusName}}</span>
              </p>
              <fa-icon @click.stop="delItem(data)" v-if="data.status === '0'" class="list-item-del" icon="trash-alt" />
            </div>
          </div>
        </template>
      </app-list>
    </div>
    <div class="list-btn-wrap">
      <fa-icon @click="$root.goPath('/xcbg-edit', {})" icon="plus-square" />
    </div>
    <van-popup v-model="showQuery" position="top" style="background:transparent;">
      <div class="popup-top"></div>
      <van-cell-group>
        <app-input v-model="queryParams.bwbm_LIKE" label="部位编码："></app-input>
        <van-button @click="query" size="large" type="info" style="margin: 4vw 0;">查询</van-button>
      </van-cell-group>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'rectifyList',
  data() {
    return {
      statusColor: {
        '0': 'red',
        '2': 'green'
      },
      showQuery: false,
      queryParams: {},
    }
  },
  activated() {
    this.query();
  },
  methods: {
    delItem(item) {
      this.appCommon.confirm('提示', '确定要删除吗？', () => {
        let params = {
          dc: JSON.stringify({}),
          appBusiUuid: item.id,
        }
        this.appCommon.tloading('删除中...')
        this.appCommon.postReq('/zlXcbg/appCancel', params, process.env.VUE_APP_PMZL).then(() => {
          this.$toast('删除成功~')
          this.$refs.xcbgList.delItem(item)
        })
      })
    },
    query() {
      this.$nextTick().then(() => {
        this.showQuery = false;
        if (this.$refs.xcbgList) {
          this.$refs.xcbgList.onRefresh();
        }
      });
    },
    dataList(pageInfo) {
      this.appCommon.tloading()
      let params = {
        dataWrap: JSON.stringify({
          pageInfo: pageInfo,
          query: this.queryParams
        }),
        bdId: this.$store.state.user.bdId,
      }
      return this.appCommon.postReq('/zlXcbg/list', params, process.env.VUE_APP_PMZL)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>