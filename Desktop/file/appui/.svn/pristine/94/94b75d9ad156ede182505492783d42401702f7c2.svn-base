<template>
  <div class="app-full">
    <van-nav-bar title="表格填报" :border="false" @click-left="$root.appBack()" left-arrow></van-nav-bar>
    <div class="app-main">
      <div :class="{'content': true}">
        <van-form>
          <app-input readonly label-width="50" label="编号:" v-model="model.code"></app-input>
          <app-input readonly label="标段名称：" v-model="model.contractName"></app-input>
          <app-input readonly label="表格编号：" v-model="model.tableCode"></app-input>
          <app-input readonly label="状态：" v-model="model.statusStr"></app-input>
          <app-input :readonly="!editFlag" label-width="50" label="备注：" type="textarea" :rows="3" v-model="model.remark"></app-input>
          <app-img-choose ref="xczp" :disabled="!editFlag" :objUuid="model.picId" type="134"></app-img-choose>
        </van-form>
        <div v-if="extra.mulPage && extra.mulPage==='Y'" class="pagewrap">
          <van-button @click="changePage(item)" v-for="(item) in extra.mulPages" :key="item.id" :type="curPage===item.curPage?'info': 'default'" size="small">第{{item.curPage}}页</van-button>
          <van-button v-if="editFlag" @click="addPage" icon="add-o" type="primary" size="small">添加一页</van-button>
        </div>
        <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">表格数据</van-divider>
        <app-input :readonly="!editFlag" v-for="item in fields" :key="item.key" :label="item.title" v-model="tableObj[item.key]"></app-input>
      </div>

      <div class="app-fa">
        <van-button :disabled="!editFlag" @click="saveData" type="primary" style="width: 33%">保存</van-button>
        <van-button :disabled="!editFlag" @click="report" type="info" style="width: 33%">上报</van-button>
        <van-button :disabled="extra.pdfUrl" @click="preview" type="warning" style="width: 33%">预览</van-button>
      </div>
    </div>

  </div>
</template>

<script>
import appConstant from '../../utils/appConstant'
export default {
  name: 'xczjTable',
  data() {
    return {
      params: {},
      model: {},
      tableObj: {},
      fields: [],
      extra: {},
      editFlag: false,
      curPage: 0,
      mainId: '', //主表id
    }
  },
  created() {
    this.params = { ...this.$route.query }
    // this.formData();
  },
  activated() {
    this.formData()
  },
  methods: {
    addPage() {
      this.appCommon.tloading()
      this.appCommon.postReq('/zlTableAuditApp/addPage', { id: this.model.id }).then(rdata => {
        let obj = rdata.parameters.mulPages[0]
        this.appCommon.postReq('/zlTableAuditApp/appInitData', { ...this.params, appBusiUuid: obj.id }).then(data => {
          this.mainId = data.dataWraps.dataWrap.data.id
          let params = data.parameters;
          this.fields = params.list;
          this.tableObj = params.dataMap
          this.extra.mulPages.unshift(data.dataWraps.dataWrap.data)
          this.curPage = this.extra.mulPages[0].curPage
        })
      })
    },
    changePage(item) {
      this.curPage = item.curPage;
      this.appCommon.postReq('/zlTableAuditApp/appInitData', { ...this.params, appBusiUuid: item.id }).then(data => {
        this.mainId = data.dataWraps.dataWrap.data.id
        this.fields = data.parameters.list;
        this.tableObj = data.parameters.dataMap
      })
    },
    report() {
      this.appCommon.tloading('上报中...')
      this.appCommon.postReq('/zlTableAuditApp/checkFlow', this.params).then(rdata => {
        let parameters = rdata.parameters;
        if (parameters.isRole && parameters.isRole === 'Y') {
          this.$router.push({
            path: '/xczjCperson',
            query: {
              appInstanceId: this.extra.appInstanceId,
              appTaskId: this.extra.appTaskId,
              approveId: parameters.approveId,
              activityName: parameters.activityName
            }
          })
        } else {
          let params = {
            appInstanceId: this.extra.appInstanceId,
            appTaskId: this.extra.appTaskId,
            appBusiUuid: this.extra.appBusiUuid,
            approveId: parameters.approveId,
            activityName: parameters.activityName
          }
          this.appCommon.postReq('/jt/app/common/zlNormalSend', params).then(() => {
            this.$toast('传递成功~');
            this.$root.appBack(-1, 500);
          })
        }
      })
    },
    preview() {
      let pdfUrl = this.extra.filePath;
      if (pdfUrl) {
        let url = appConstant.busiUrl + pdfUrl
        this.$router.push({
          path: '/appFj',
          query: {
            pdfUrl: url
          }
        })
      }
    },
    saveData() {
      this.appCommon.tloading('保存中...')
      let params = {
        dataWrap: JSON.stringify({
          data: this.model
        }),
        saveStr: JSON.stringify(this.tableObj),
        id: this.mainId
      }
      this.appCommon.postReq('/zlTableAuditApp/saveTable', params).then(() => {
        this.$toast('保存成功~');
        // this.params.appBusiUuid = rdata.parameters.app.id
        this.formData();
      })
    },
    formData() {
      this.appCommon.postReq('/zlTableAuditApp/appInitData', this.params).then(rdata => {
        console.log(rdata);
        this.model = rdata.dataWraps.dataWrap.data;
        this.mainId = this.model.id
        this.extra = rdata.parameters;
        this.fields = rdata.parameters.list;
        this.tableObj = rdata.parameters.dataMap;
        this.editFlag = rdata.editFlag === 'Y';
        if (this.extra.mulPages && this.extra.mulPages.length > 0) {
          this.curPage = this.extra.mulPages[this.extra.mulPages.length-1].curPage
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  height: calc(100% - 50px);
  overflow-y: auto;
}
.pagewrap {
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;

  button {
    margin: 5px;
  }
}
</style>