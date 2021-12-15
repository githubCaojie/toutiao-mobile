const STDFLOW = {
  '../../../zlTableGcby/noZlUnitGcby': {
    compPath: 'xcby/noZlUnitGcby',
    params: {
      initMethod: '/zlTableGcby/initZlUnitGcbyData'
    }
  },
  '../../../troubleDeal/troubleDeal': {
    compPath: 'ssp/sspInitData',
    params: {
      initMethod: '/troubleDeal/initTroubleDealData'
    }
  },
  '../../../leadTroubleDeal/leadTroubleDeal': {
    compPath: 'ssp/wf-ldform',
    params: {
      initMethod: '/leadTroubleDeal/initLeadTroubleDealData'
    }
  },
  '../../../zlTableGcby/jlysjOrjly': {
    compPath: 'xcby/jlysjOrjly',
    params: {
      initMethod: '/zlTableGcby/initJlysjOrzyjl',
    }
  },
  '../../../zlTableGcby/jlysjOrzyjl': {
    compPath: 'xcby/jlysjOrzyjl',
    params: {
      initMethod: '/zlTableGcby/initJlysjOrzyjl',
      zyjl: 'Y',
    }
  },
  '../../../jt/app/appTaskApprove/': {
    compPath: 'workflow/app-task-approve',
    params: {
      initMethod: '/jt/app/appTaskApprove/initData',
      commonApprove: true,
    }
  },
  '../../../zlTableFy/zlTableFy': {
    compPath: 'xcby/zlTableFy',
    params: {
      initMethod: '/jt/app/appTaskApprove/initData',
      commonApprove: true,
    }
  },
  '../../../zlTableFy/zlTableFySp': {
    compPath: 'xcby/clgcsTableFy',
    params: {
      initMethod: '/zlTableFy/initZlTableFySp',
      commonApprove: true,
    }
  },
  '../../../zlHiddenTrouble/hiddenTrouble': {
    compPath: 'quality-hd/wfForm',
    params: {
      initMethod: '/troubleDeal/initTroubleDealData'
    }
  },
  '../../../zlXcbg/zlXcbg': {
    compPath: 'xcbg/xcbg-wf',
    params: {
      initMethod: '/zlXcbg/initData'
    }
  },
  '../../../safetypatrol/mypatrol/aqPatrolPage': {
    compPath: 'patrol/flow-task',
    params: {
      initMethod: '/safetypatrol/mypatrol/initAqPatrol'
    }
  },
  '13': {
    compPath: 'warn/maintainList',
    params: {
      dealType: '1'
    }
  },
  '12': {
    compPath: 'warn/checkList',
    params: {
      dealType: '2'
    }
  },
  '14': { //异常确认上报
    compPath: 'warn/sdCheckSureForm',
  },
  '1': { //通用传递
    compPath: 'workflow/normalSend',
  },
  '15': {
    compPath: 'workflow/extFields'
  }
}
import {
  flowNormalSend,
  worderInitData,
  postAction,
} from "@/api/app-base";
const utils = {
  parseParams(url){
    if (!url) return {};
    let urlArr = url.split('?');
    let datas = urlArr[1];
    let paramArr =  datas.split('&');
    let paramObj = {};
    for(let item of paramArr) {
      paramObj[item.split('=')[0]] = item.split('=')[1];
    }
    paramObj['busiPath'] = urlArr[0];
    return paramObj;
  },
  getBusiComp(stdNo, fn) {
    console.log('stdno', stdNo)
    let flowObj = STDFLOW[stdNo];
    let compPath = flowObj.compPath;
    let params = flowObj.params;
    require(['@/views/' + compPath],(comp) => {
      fn.call(this,comp, params)
    })
  },
  worderInitData(params) {
    return new Promise((resolve, reject) => {
      worderInitData({
        jbean: JSON.stringify(params)
      }).then(rdata => {
        let url = rdata.parameters.showTacheUrl;
        let obj1 = utils.parseParams(url);
        let paramObj = {
          ...rdata.parameters,
          ...obj1,
        }
        resolve(paramObj)
      })
    })
  },
  approve(sendType, wfParams, emitName) {
    if (sendType === 'normalSend') {//通用传递
      let params = {
        ...wfParams,
      };
      this.appCommon.tloading("传递中...");
      flowNormalSend(params).then(rdata => {
        if (emitName) {
          this.appCommon.emit(emitName, rdata);
        }
      })
    } else if (sendType === 'appNormalSendBusi') {
      this.$router.push({
        path: '/wfChoosePerson',
        query: {
          wfParams,
          emitName,
        }
      })
    }
  },
  returnTask(appInstanceId, appTaskId){ //退回上一环节
    let params = {
      dc: JSON.stringify({}),
      appInstanceId,
      appTaskId,
    }
    return postAction('/jt/app/common/returnTask', params)
  }
}
export default utils