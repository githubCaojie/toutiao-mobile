<template>
  <div class="app-full">
     <van-nav-bar @click-left="$root.appBack()" :title="title" :border="false" left-arrow >
        <template #right>
          <fa-icon @click="sendNext" icon="arrow-circle-right" style="color:white;font-size: 25px;" />
          <!-- <fa-icon @click="sendNext" icon="arrow-circle-right" style="color:white;font-size: 25px;"/> -->
        </template>
      </van-nav-bar>
      <div class="app-main">
        <section v-for="item in personArr" :key="item.activityName">
          <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
            {{item.activityName}}
          </van-divider>
          <van-cell-group>
            <van-cell 
              v-for="person in item.loginLs" :key="person.loginId" 
              @click="toggleSel(person)"
              :title="person.perName" 
              :value="person.roleName" 
              :class="{'selected': person.selected}"
            />
          </van-cell-group>
        </section>
      </div>
  </div>
</template>

<script>
import { selectPerSend, appSelectSendPer } from '@/api/app-base'
export default {
  name: 'wfChoosePerson',
  data() {
    return {
      title: '',
      personArr: [],
      nextActId: '',
      wfParams: {},
      emitName: '',
    }
  },
  created(){
    let query = this.$route.query;
    this.emitName = query.emitName;
    this.wfParams = query.wfParams;
    console.log(this.wfParams);
    this.getPerson();
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
      let params = {
        dc: JSON.stringify({}),
        appInstanceId: this.wfParams.appInstanceId,
        appTaskId: this.wfParams.appTaskId,
        nextActId: this.nextActId,
        loginIds: ids.join(','),
        stdTacheNo: this.wfParams.stdTacheNo
      }
      this.appCommon.tloading('传递中...');
      selectPerSend(params).then(rdata => {
        if (this.emitName) {
          this.appCommon.emit(this.emitName, rdata);
        } else {
          this.$toast('传递成功~');
          this.$root.appBack(-2, 500);
        }
      })
    },
    getPerson(){
      let params = {
        responseData: JSON.stringify({}),
        appInstanceId: this.wfParams.appInstanceId,
        appTaskId: this.wfParams.appTaskId,
        perType: 'BUSI',
        stdTacheNo: this.wfParams.stdTacheNo
      };
      appSelectSendPer(params).then(rdata => {
        this.title = rdata.parameters.nowStdName;
        this.personArr = rdata.parameters.nextInfoLs;
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.selected {
  // background-color: #3182c4;
  // color: white;
  // span {
  //   color: white;
  // }
  border: 2px solid  green;
  box-sizing: border-box;
}
</style>