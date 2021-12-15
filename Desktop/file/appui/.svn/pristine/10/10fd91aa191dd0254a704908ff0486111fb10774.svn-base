<template>
  <div>
    <app-list ref="gczl">
      <template v-slot:default="{data}">
        <div @click="$root.goPath('/gczl-detail', {id: data.id})" class="app-list">
          <p class="app-list-item"><span>项次：</span><span>{{data.xc}}</span></p>
          <p class="app-list-item"><span>编码：</span><span>{{data.itemCode}}</span></p>
          <p class="app-list-item"><span>项目名称：</span><span>{{data.xmName}}</span></p>
          <p class="app-list-item"><span>检测方法和频率：</span><span>{{data.jcffPl}}</span></p>
        </div>
      </template>
    </app-list>
  </div>
</template>

<script>
export default {
  name: 'gczl-main-info',
  props: {
    xmId: {
      type: String
    }
  },
  data() {
    return {

    }
  },
  created() {
    
  },
  methods: {
    dataList(pageInfo) {
      let params = {
        xmId: this.xmId,
        bdId: this.$store.state.user.bdId,
        dataWrap: JSON.stringify({
          pageInfo: pageInfo,
        }),
      }
      return this.appCommon.postReq('/zlAssessStandard/list', params)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>