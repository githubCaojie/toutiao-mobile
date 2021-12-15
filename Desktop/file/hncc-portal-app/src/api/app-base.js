import httpInstance from './index'
import appConstant from '../utils/appConstant'
import { postContext } from '@/utils/appCommon'

//下拉信息
export const dropInfo = params => httpInstance.post('/mobile/jtMobileCommon/dropInfo', params);

export const dropMultiInfo = params => httpInstance.post('/mobile/jtMobileCommon/dropMultiInfo', params);

export const initCashDrop = params => httpInstance.post('/mobile/jtMobileCommon/initCashDrop', params);


//获取登录验证码
export const loginCode = params => httpInstance.get(appConstant.baseUrl1 + '/menhu/getCode', {params});
//登录
export const loginCodeIn = params => httpInstance.get(appConstant.baseUrl1 + '/menhu/login', {params});

//通讯录人员详情获取
export const organizationData = params => httpInstance.get(appConstant.baseUrlOrganization_busiUrl + '/api/organization/personnelDetails', {params});

//获取用户详情
export const userData = params => httpInstance.get(appConstant.baseUrlOrganization_busiUrl + '/api/organization/personnelInfo', {params});

//获取部门第一级信息
export const institutionData = params => httpInstance.get(appConstant.baseUrlOrganization_busiUrl + '/api/organization/institution2', {params});

//获取部门第二级信息
export const departmentData = params => httpInstance.get(appConstant.baseUrlOrganization_busiUrl + '/api/organization/department', {params});

//获取部门第三级信息
export const personnelData = params => httpInstance.get(appConstant.baseUrlOrganization_busiUrl + '/api/organization/personnel', {params});


//登录
export const login = params => httpInstance.post(appConstant.sysconfigUrl + '/mobile/jtMobileCommon/login', params);

//验证码登录
export const iphonelogin = params => httpInstance.post('192.168.10.161:6996/lobby/menhu/getCode', params);

//刷新token
export const refToken = params => httpInstance.post(appConstant.sysconfigUrl + '/mobile/jtMobileCommon/refToken', params);
//获取用户默认标段
export const getDefaultBd = params => httpInstance.post(appConstant.sysconfigUrl + '/pmSection/retrieveRight1', params);
//待办工单
export const undoTask = params => httpInstance.post(appConstant.sysconfigUrl + '/jt/app/curTask/retrieve', params);
//历史订单
export const hisTask = params => httpInstance.post(appConstant.sysconfigUrl + '/jt/app/curTask/retrieveHisQuery', params);
//我的消息列表
export const myNews = params => httpInstance.post(appConstant.sysconfigUrl + '/jt/msgPer/list', params);
//消息未读数量
export const noReadNum = params => httpInstance.post(appConstant.sysconfigUrl + '/jt/msgPer/noReadNum', params);
//消息设置已读
export const setRead = params => httpInstance.post(appConstant.sysconfigUrl + '/jt/msgPer/setRead', params);
//检查版本
export const checkVersion = params => httpInstance.post('/mobile/jtMobileCommon/checkVersion', params);

//下载新版本
export const getDownloadFile = params => httpInstance.post('/mobilec/mobileVersionCheckAction.do?action=getDownloadFile', params);

//附件历史信息appConstant.baseFilePath + 
export const appDocs = params => httpInstance.get(appConstant.fileUrl + '/api/v1/file/list', {params});





//删除历史文件
export const appDelDoc = params => httpInstance.get(appConstant.fileUrl + '/api/v1/file/delete', {params});

//修改密码
export const changePwd = params => httpInstance.post('/mobilec/mobileLeaderAppAction.do?action=changePwd', params);

//工单初始化
export const worderInitData = (params)=> httpInstance.post('/jt/app/taskExecInfo/appInit', params);
//工单执行列表
export const wfExecList = (params)=> httpInstance.post('/jt/app/taskExecInfo/initData', params);
//工单按钮控制
export const wfBtnInit = params => httpInstance.post('/jt/app/appTaskApprove/initData', params);
//工单确认办理
export const flowConfirm = (params)=> httpInstance.post('/jt/app/common/confirm', params);
//工单取消确认办理
export const taskUnclaim = (params)=> httpInstance.post('/jt/app/common/taskUnclaim', params);
//工单通用传递
export const flowNormalSend = (params)=> {
  let contenxt = getContext(params.stdTacheNo)
  return postContext('/jt/app/common/normalSend', params, contenxt)
};
//选人传递
export const selectPerSend = (params)=> {
  let contenxt = getContext(params.stdTacheNo)
  return postContext('/jt/app/common/selectPerSend', params, contenxt)
};
//选人--查询要传递的人列表
export const appSelectSendPer = (params)=> {
  let contenxt = getContext(params.stdTacheNo)
  return postContext('/jt/app/appSelectPerSend/get', params, contenxt)
};
//保存审批意见
export const appApprovalSave = (params)=> {
  let contenxt = getContext(params.stdTacheNo)
  return postContext('/jt/app/appApproval/save', params, contenxt)
};
//审批意见初始化
export const approveData = (params)=> {
  let contenxt = getContext(params.stdTacheNo)
  return postContext('/jt/app/appApproval/approveData', params, contenxt)
};


//*********************平台方法****************************************
//查询树
export const frameworkTreeData = params => httpInstance.post('/framework/treeview.do', params);


export const postAction = (url,params) => httpInstance.post(url, params);

export const getAction = (url,params) => httpInstance.get(url, {params});

function getContext(stdNo) {
  return ['43'].includes(stdNo)? process.env.VUE_APP_SAFE: '';
}