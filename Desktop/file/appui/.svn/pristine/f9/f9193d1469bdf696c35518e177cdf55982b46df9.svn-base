<template>
  <div class="app-full">
    <van-nav-bar @click-left="$root.appBack()" title="我的巡检任务" :border="false" left-arrow>
      <template #right>
        <van-icon @click="$root.goPath('/patrolStatic')" name="points" size="20" />
      </template>
    </van-nav-bar>
    <div class="app-main">
      <app-list ref="fawList" :immediate="false">
        <template v-slot:default="{data}">
          <div class="app-list">
            <div @click="$root.goPath('/taskDetail', {id: data.uuid, editFlag: data.checkStatus === '1'? 'Y': 'N'})">
              <p class="app-list-item"><span>检查编号：</span><span>{{data.checkNo}}</span></p>
              <p class="app-list-item"><span>检查单位：</span>
                <app-drop-show :value="data.checkCompany" dropName="ORG.ORG_PARTY_NAME"></app-drop-show>
              </p>
              <p class="app-list-item"><span>检查级别：</span>
                <app-drop-show :value="data.patrolLevel" dropName="PATROL.LEVEL"></app-drop-show>
              </p>
              <p class="app-list-item"><span>天气：</span>
                <app-drop-show :value="data.weather" dropName="SECURITY.WEATHER"></app-drop-show>
              </p>
              <p class="app-list-item"><span>检查人：</span>
                <app-drop-show :value="data.checkPerson" dropName="ORG.PERSON_NAME"></app-drop-show>
              </p>
              <p class="app-list-item"><span>检查个数：</span><span>{{data.checkNum}}</span></p>
              <p class="app-list-item"><span>检查状态：</span>
                <span>{{data.checkStatusName}}</span>
              </p>
              <p class="app-list-item"><span>创建时间：</span><span>{{data.createDate | dateFormatter}}</span></p>
            </div>
            <img v-if="data.checkStatus==='1'" @click.stop="delItem(data)" class="list-item-del" src="../../assets/imgs/del.png" alt="">

          </div>
        </template>
      </app-list>
    </div>
    <div class="list-btn">
      <img @click.stop="$root.goPath('/taskDetail', {editFlag: 'Y'})" class="list-item-add" src="../../assets/imgs/add.png" alt="">
      <img @click.stop="$root.goPath('/taskDetail', {editFlag: 'Y', isDtxj: 'Y'})" class="list-item-add" src="../../assets/imgs/replace.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'myTask',
  props: {
    postType: {
      type: String
    }
  },
  data() {
    return {

    }
  },
  watch: {
    postType: function (nval, oldVal) {
      console.log(nval, oldVal);
      if (nval !== oldVal) {
        this.$refs.fawList.onRefresh();
      }
    }
  },
  activated() {
    this.$refs.fawList.onRefresh();
  },
  methods: {
    delItem(item) {
      this.appCommon.confirm('提示', '确定要删除吗？', () => {
        let params = {
          dataWrap: JSON.stringify({
            dataList: [item],
          }),
        }
        this.appCommon.tloading('删除中...')
        this.appCommon.postReq('/porta/remove', params, process.env.VUE_APP_SAFE).then(() => {
          this.$toast('删除成功~')
          this.$refs.fawList.delItem(item)
        })
      })
    },
    dataList(pageInfo) {
      this.appCommon.tloading()
      let params = {
        bdId: this.$store.state.user.bdId,
        dataWrap: JSON.stringify({
          pageInfo: pageInfo,
        }),
        type: this.postType
      }
      return this.appCommon.postReq('/porta/query', params, process.env.VUE_APP_SAFE)
    }
  }
}
</script>

<style lang="scss" scoped>
.fj {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
}
</style>