<template>
  <div class="app-full">
    <van-nav-bar @click-left="$root.appBack()" :title="title" :border="false" left-arrow>
      <template #right>
        <fa-icon @click="sendNext" icon="arrow-circle-right" style="color:white;font-size: 25px;" />
      </template>
    </van-nav-bar>
    <div class="app-main">
      <section v-for="item in personArr" :key="item.activityName">
        <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
          {{item.activityName}}
        </van-divider>
        <van-cell-group>
          <van-cell v-for="person in item.loginLs" :key="person.loginId" @click="toggleSel(person)" :title="person.perName" :value="person.roleName" :class="{'selected': person.selected}" />
        </van-cell-group>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'xczj-cperson',
  data() {
    return {
      params: {},
      title: '选择人员',
      personArr: []
    }
  },
  created() {
    this.personList();
  },
  methods: {
    toggleSel(person) {
      for(let item of this.personArr) {
        for(let p of item.loginLs) {
          this.$set(p, 'selected', false)
        }
      }
      this.$set(person, 'selected', !person.selected)
    },
    sendNext(){
      let ids = [];
      for(let item of this.personArr) {
        this.nextActId = item.activityNo;
        for(let person of item.loginLs) {
          if (person.selected) {
            ids.push(person.loginId);
          }
        }
      }
      if (ids.length == 0) {
        this.$toast('请选择人员~');
        return ;
      }
      this.appCommon.confirm('提示', '确定要传递吗？', () => {
        this.sendNextSure(ids);
      })
    },
    sendNextSure(ids){
      let query = this.$route.query;
      let params = {
        dc: JSON.stringify({}),
        appInstanceId: query.appInstanceId,
        appTaskId: query.appTaskId,
        nextActId: this.nextActId,
        loginIds: ids.join(','),
        activityName: query.activityName
      }
      this.appCommon.tloading('传递中...');
      this.appCommon.postReq('/jt/app/common/zlSelectPerSend', params).then(() => {
        this.$toast('传递成功~');
        this.$root.appBack(-1, 500);
      })
    },
    personList() {
      console.log(this.$route.query)
      let params = {...this.$route.query};
      params.perType = 'BUSI'
      params.appTaskId = params.appTaskId || '1';
      this.appCommon.postReq('/jt/app/appSelectPerSend/get', params).then(rdata => {
        console.log(rdata)
        this.personArr = rdata.parameters.nextInfoLs;
      })
    },
  }
}
</script>

<style lang="scss" scoped>
.selected {
  border: 2px solid  green;
  box-sizing: border-box;
}
</style>