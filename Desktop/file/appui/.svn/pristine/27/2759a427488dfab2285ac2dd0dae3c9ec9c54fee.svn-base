<template>
  <div id="flowbtn-wrap" class="flowbtn-wrap"></div>
</template>

<script>
import FlowBtn from "./FlowBtn";
import Vue from "vue";
import {
  flowNormalSend,
  flowConfirm,
  taskUnclaim,
  wfExecList,
  postAction,
} from "@/api/app-base";
import flowUtil from "../../views/workflow/flowUtil";

const FlowBtnConstructor = Vue.extend(FlowBtn);
export default {
  name: "appFlowbtns",
  props: {
    params: {
      type: Object,
    },
  },
  data() {
    return {
      OpenModelType: {
        openMode_1: "1",
        openMode_2: "2",
      },
      wfParams: {},
    };
  },
  watch: {
    params: {
      immediate: true,
      handler: function (nval) {
        if (!nval || !nval.appInstanceId) return;
        this.wfParams = nval;
        this.worderInitData();
      },
    },
  },
  mounted() {
    // setTimeout(() => {
    //   this.worderInitData();
    // },3000)
  },
  methods: {
    worderInitData() {
      // this.$emit("refreshPage", {});
      let params = {
        dc: JSON.stringify({}),
        ...this.wfParams
      }
      let appTaskId = this.wfParams.appTaskId;
      postAction('/jt/app/appTaskApprove/initData', params).then(rdata => {
        this.$emit('formEditFlag', rdata.editFlag)
        this.$emit('edit', rdata.parameters.auditEditFlag)
        let parameters = rdata.parameters;
        let urlObj = flowUtil.parseParams(parameters.showTacheUrl || parameters.detailHref);
        delete parameters.showTacheUrl;
        let editFlag = this.wfParams.editFlag;
        this.wfParams = { ...this.wfParams, ...parameters, ...urlObj, ...{ appTaskId, editFlag }, };
        this.dealBtn(this.wfParams);
      })
    },
    dealBtn(paramObj) {
      console.log(paramObj)
      let btnArr = [];
      let container = document.getElementsByClassName("flowbtn-wrap")[0];
      container.innerHTML = "";

      if (
        paramObj.sendBusiBtnFlag ||
        paramObj.sendBusiMulBtnFlag ||
        paramObj.sendOrgBtnFlag ||
        paramObj.sendOrgMulBtnFlag ||
        paramObj.sendBtnFlag
      ) {
        let btnSave = new FlowBtnConstructor({
          data: {
            text: this.sendBtnValue ? this.sendBtnValue : "传递",
            click: () => {
              this.appCommon.confirm("提示", "确定要传递吗？", () => {
                this.dealSend(paramObj);
              });
            },
          },
        }).$mount();
        btnArr.push(btnSave);
      }
      if (paramObj.saveBtnFlag) {
        let btnSave = new FlowBtnConstructor({
          data: {
            text: "保存",
            click: () => {
              this.$emit("save");
              // this.$parent.save();
            },
          },
        }).$mount();
        btnArr.push(btnSave);
      }
      if (paramObj.rtnBtnFlag) {
        let btnSave = new FlowBtnConstructor({
          data: {
            text: "退回上一步",
            click: () => {
              this.appCommon.tloading('退回中...')
              flowUtil.returnTask(paramObj.appInstanceId, paramObj.appTaskId).then(rdata => {
                this.$toast('退回成功~');
                this.$root.appBack(-1, 500);
              })
            },
          },
        }).$mount();
        btnArr.push(btnSave);
      }
      if (paramObj.adviceBtnFlag) {
        let btnSave = new FlowBtnConstructor({
          data: {
            text: "办理意见",
          },
        }).$mount();
        btnArr.push(btnSave);
      }
      if (paramObj.confirmBtnFlag) {
        let btnSave = new FlowBtnConstructor({
          data: {
            text: "确认办理",
            click: () => {
              this.appCommon.confirm("提示", "确定要确认办理吗？", () => {
                this.flowConfirm();
              });
            },
          },
        }).$mount();
        btnArr.push(btnSave);
      }
      if (paramObj.unclaimBtnFlag) {
        let btnSave = new FlowBtnConstructor({
          data: {
            text: "取消办理",
            click: () => {
              this.taskUnclaim();
            },
          },
        }).$mount();
        btnArr.push(btnSave);
      }
      if (paramObj.editFlag == 'Y' && paramObj.confirmTask != 'O' && paramObj.commonApprove) {
        let btnSave = new FlowBtnConstructor({
          data: {
            text: paramObj.auditBtnName ? paramObj.auditBtnName : "审批",
            click: async () => {
              let rfn = this.$parent.checkRequired;
              if (rfn && typeof rfn === 'function' && paramObj.auditEditFlag==='Y') {
                let flag = await rfn();
                if (!flag) {
                  return;
                }
              }
              if (this.wfParams.needOpinion && this.wfParams.needOpinion !== 'Y') {
                let sendFunc = this.wfParams.sendFunc;
                let sendType = sendFunc.replace('()', '');
                let emitName = this.$route.name;
                this.appCommon.once(emitName, () => {
                  this.$toast('传递成功~')
                  this.$root.appBack(-1, 500)
                })
                flowUtil.approve.call(this, sendType, this.wfParams, emitName);
              } else {
                this.$router.push({
                  path: '/appTaskApproveContent',
                  query: {
                    wfParams: this.wfParams
                  }
                });
              }

            },
          },
        }).$mount();
        btnArr.push(btnSave);

        if (paramObj.rtnFirstBtnFlag) {
          let btnFirst = new FlowBtnConstructor({
            data: {
              text: "退回发起人",
              click: () => {
                this.sendFirst();
              },
            },
          }).$mount();
          btnArr.push(btnFirst);
        }
      }

      for (let btn of btnArr) {
        container.appendChild(btn.$el);
      }
    },
    sendFirst() {  //退回发起人
      this.appCommon.confirm('提示', '确定要退回发起人？', () => {
        let params = {
          ...this.wfParams,
          rtnType: '3',
        }
        this.appCommon.tloading();
        postAction('/jt/app/common/returnTaskSelect', params).then(rdata => {
          this.$toast('退回成功~');
          this.$root.appBack(-1, 500);
        })
      })
    },
    taskUnclaim() {//取消办理
      let params = {
        dc: JSON.stringify({}),
        ...this.wfParams,
      };
      this.appCommon.tloading("取消中...");
      taskUnclaim(params).then((rdata) => {
        this.$toast("取消成功~");
        setTimeout(() => {
          this.worderInitData();
        }, 500);
      });
    },
    flowConfirm() {
      //确认办理
      let params = {
        ...this.wfParams,
      };
      this.appCommon.tloading("确认中...");
      flowConfirm(params).then((rdata) => {
        this.$toast("确认成功~");
        setTimeout(() => {
          this.worderInitData();
        }, 500);
      });
    },
    flowNormalSend() {
      //通用传递
      let params = {
        ...this.wfParams,
      };
      this.appCommon.tloading("传递中...");
      flowNormalSend(params).then(() => {
        this.$toast("传递成功~");
        this.$root.appBack(500);
      });
    },
    dealSend(obj) {
      if (obj.sendBusiBtnFlag) {
        this.$router.push({
          path: '/wfChoosePerson',
          query: {
            wfParams: obj,
          }
        })
      } else {
        let sendType = 'normalSend';
        let emitName = this.$route.name;
        this.appCommon.once(emitName, () => {
          this.$toast('传递成功~')
          this.$root.appBack(-1, 500)
        })
        flowUtil.approve.call(this, sendType, obj, emitName);
      }
    }
  },
};
</script>

<style lang="scss" scoped>
</style>