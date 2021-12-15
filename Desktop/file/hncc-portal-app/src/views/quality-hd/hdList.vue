<template>
  <div class="app-full">
    <van-nav-bar @click-left="$root.appBack()" title="质量隐患" :border="false" left-arrow></van-nav-bar>
    <div class="app-main">
      <app-list ref="fawList">
        <template v-slot:default="{data}">
          <div class="app-list">
            <div @click="dealOrder(data)">
              <p class="app-list-item"><span>检查时间：</span><span>{{data.checkTime}}</span></p>
              <p class="app-list-item">
                <span>检查人：</span>
                <app-drop-show dropName="ORG.PERSON_NAME" :value="data.checkMan"></app-drop-show>
              </p>
              <p class="app-list-item">
                <span>问题类型：</span>
                <span>{{data.troubleType}}</span>
              </p>
              <p class="app-list-item">
                <span>问题描述：</span>
                <span style="color:red;">{{data.troubleDesc}}</span>
              </p>
              <p class="app-list-item">
                <span>是否已整改：</span>
                <app-drop-show dropName="UEP.YES_OR_NO" :value="data.isDeal"></app-drop-show>
              </p>
              <p class="app-list-item">
                <span>状态：</span>
                <span>{{data.statusName}}</span>
              </p>
              <fa-icon @click.stop="delItem(data)" v-if="data.status === '0'" class="list-item-del" icon="trash-alt" />
            </div>
          </div>
        </template>
      </app-list>
    </div>
    <div class="list-btn-wrap">
      <fa-icon @click="$root.goPath('/hdForm', {})" icon="plus-square" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'rectifyList',
  data() {
    return {

    }
  },
  methods: {
    dealOrder(item){
      this.$root.goPath('/flowMain', {appInstanceId: item.instanceId,openMode: '4',title: '质量隐患'})
    },
    delItem(item) {
      this.appCommon.confirm('提示', '确定要删除吗？', () => {
        let params = {
          dc: JSON.stringify({}),
          appBusiUuid: item.id,
        }
        this.appCommon.tloading('删除中...')
        this.appCommon.postReq('/zlHiddenTrouble/appCancel', params, process.env.VUE_APP_PMZL).then(() => {
          this.$toast('删除成功~')
          this.$refs.fawList.delItem(item)
        })
      })
    },
    dataList(pageInfo) {
      this.appCommon.tloading()
      let params = {
        dataWrap: JSON.stringify({
          pageInfo: pageInfo,
        }),
        bdId: this.$store.state.user.bdId,
      }
      return this.appCommon.postReq('/zlHiddenTrouble/list', params, process.env.VUE_APP_PMZL)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>