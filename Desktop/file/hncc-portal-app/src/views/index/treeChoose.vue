<template>
  <div class="app-full">
    <van-nav-bar title="质量单元" :border="false" @click-left="$root.appBack()" left-arrow></van-nav-bar>
    <div class="app-main" style="overflow-x: auto;">
      <app-treeb v-if="treeData.retriever || treeData.dataProvider" @node-click="nodeClick" style="width: 150vw;" 
        :value="treeData.value" :retriever="treeData.retriever" :dataProvider="treeData.dataProvider" :dynamic="treeData.dynamic"
        :rootVisible="treeData.rootVisible" :rightfilter="treeData.rightfilter" :rootCode="treeData.rootCode" 
        :expandLevel="treeData.expandLevel"></app-treeb>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'treeChoose',
    data() {
      return {
        title: '',
        treeData: {
          value: '',
          retriever: '',
          dataProvider: '',
          dynamic: false,
          rootVisible: true,
          rightfilter: false,
          rootCode: '0',
          expandLevel: '3'
        }
      }
    },
    created() {
      let query = this.$route.query;
      console.log(query);
      this.treeData = {...query.treeData}
    },
    methods: {
      nodeClick(data) {
        console.log(data);
      }
    }
  }
</script>

<style lang="scss" scoped>
  
</style>