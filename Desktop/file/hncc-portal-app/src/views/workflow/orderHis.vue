<template>
  <div class="app-full" style="background-color: #F9F9F9;">
    <van-nav-bar @click-left="$root.appBack" title="已处理" :border="false" left-arrow left-text="返回">
      <!-- <van-icon @click="showQuery=!showQuery" size="22px" :name="require('../../assets/imgs/query.png')" slot="right"  /> -->
    </van-nav-bar>
    <div class="app-main">
      <app-list ref="doingList">
        <template v-slot:default="item">
          <div @click="showBusi(item.data)" class="app-list">
            <p class="app-list-item">{{item.data.appTypeName}}（{{item.data.appNo}}）</p>
            <p class="app-list-item"><span>工作单类型：</span><span>{{item.data.appTypeName}}</span></p>
            <p class="app-list-item">工单状态：<app-drop-show :dropName="'JT.APP_STATUS'" :value="item.data.appStatus"></app-drop-show></p>
            <p class="app-list-item">申请人：<app-drop-show :dropName="'UEP.ACCOUNT_NAME'" :value="item.data.loginId"></app-drop-show></p>
            <p class="app-list-item"><span>工单内容：</span><span>{{item.data.content}}</span></p>
            <p class="app-list-item">管理单位：<app-drop-show :dropName="'ORG.ORG_PARTY_NAME'" :value="item.data.busiCode"></app-drop-show></p>
          </div>
        </template>
      </app-list>
    </div>
  </div>
</template>

<script>
import { postAction } from '@/api/app-base'
export default {
  name: 'orderUndo',
  data() {
    return {
      
    }
  },
  methods: {
    query(){
      this.$nextTick().then(() => {
        if (this.$refs.doingList){
          this.$refs.doingList.onRefresh();
        }
      })
    },
    dataList(pageInfo){
      let params = {
        dataWrapMyFiled: JSON.stringify({
          pageInfo: pageInfo,
        }),
      }
      return postAction('/jt/app/curTask/retrieveMyFiledQuery', params)
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  display: flex;
  justify-content: space-between;
  color: gray;
}
</style>