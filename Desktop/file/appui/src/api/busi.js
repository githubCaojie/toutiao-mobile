import httpInstance from './index'
//隧道列表
export const sdList = (params)=> httpInstance.post('/sd/sdInfo/list', params);

//报警处置
//列表
export const warnList = (params)=> httpInstance.post('/sd/sdMaintain/list', params);
//明细
export const sdMaintainDetail = (params)=> httpInstance.post('/sd/sdMaintain/get', params);
//保存
export const sdMaintainSave = (params)=> httpInstance.post('/sd/sdMaintain/save', params);
//选择的部件
export const querySdPartsList = (params)=> httpInstance.post('/sd/sdMaintain/querySdPartsList', params);
//全部隧道部件
export const sdParts = (params)=> httpInstance.post('/sd/sdParts/list', params);
//保存选择的隧道
export const saveSdMaintainParts = (params)=> httpInstance.post('/sd/sdMaintain/saveSdMaintainParts', params);



//验收list
export const checkList = (params)=> httpInstance.post('/sd/sdMaintainProc/list', params);
//验收查询form
export const checkForm = (params)=> httpInstance.post('/sd/sdMaintainProc/get', params);
//验收保存form
export const checkSave = (params)=> httpInstance.post('/sd/sdMaintainProc/save', params);
//删除记录
export const removeMaintainRecord = (params)=> httpInstance.post('/sd/sdMaintainProc/remove', params);

//指派人列表
export const reassign = (params)=> httpInstance.post('/jt/app/appSelectPerSend/reassign', params);
//选人传递
export const selectPerSend = (params)=> httpInstance.post('/jt/app/common/selectPerSend', params);

//日常检查
//列表
export const rcList = (params)=> httpInstance.post('/sd/sdCheck/list', params);
//表单
export const rcForm = (params)=> httpInstance.post('/sd/sdCheck/get', params);
//保存
export const rcSave = (params)=> httpInstance.post('/sd/sdCheck/save', params);
//检查明细
export const rcDetailQuery = (params)=> httpInstance.post('/sd/sdCheckDetail/query', params);
//明细内容
export const rcDetailForm = (params)=> httpInstance.post('/sd/sdCheckDetail/get', params);
//保存
export const rcDetailSave = (params)=> httpInstance.post('/sd/sdCheckDetail/save', params);
//完成检查
export const rcCheckOver = (params)=> httpInstance.post('/sd/sdCheck/checkOver', params);


/**
 * 经常检查----------------------------------------
 */
export const jcjcList = (params)=> httpInstance.post('/sd/sdCheckJc/list', params);
export const planCheck = (params)=> httpInstance.post('/sd/sdCheckJc/planCheck', params);
//保存
export const saveCheck = (params)=> httpInstance.post('sd/sdCheckDetail/save', params);
//完成检查
export const overCheck = (params)=> httpInstance.post('sd/sdCheckJc/overCheck', params);


/**
 * 隧道清洗========================
 */
export const sdqxList = (params)=> httpInstance.post('/sd/sdQx/list', params);
export const sdqxPlanCheck = (params)=> httpInstance.post('/sd/sdQx/planCheck', params);
export const sdqxSave = (params)=> httpInstance.post('/sd/sdQx/save', params);
export const sdqxOverCheck = (params)=> httpInstance.post('/sd/sdQx/overCheck', params);

/**
 * 病害登记
 */
export const bhList = (params)=> httpInstance.post('/sd/sdDisease/list', params);
export const bhForm = (params)=> httpInstance.post('/sd/sdDisease/get', params);
export const bhSave = (params)=> httpInstance.post('/sd/sdDisease/save', params);

/**
 * 病害处置
 */
export const bhczList = (params)=> httpInstance.post('/sd/sdMaintain2/list', params);
export const bhczForm = (params)=> httpInstance.post('/sd/sdMaintain2/get', params);
export const bhczSave = (params)=> httpInstance.post('/sd/sdMaintain2/save', params);
//选择病害保存
export const saveSdMaintainDis = (params)=> httpInstance.post('/sd/sdMaintain2/saveSdMaintainDis', params);



//异常确认
export const sdCheckSureForm = (params)=> httpInstance.post('/sd/sdCheckSure/mobileGet', params);
//异常确认保存
export const sdCheckSureSave = (params)=> httpInstance.post('/sd/sdCheckDetail/save', params);


//工单初始化
export const worderInitData = (params)=> httpInstance.post('/jt/app/taskExecInfo/appInit', params);



//机电列表
export const equipList = (params)=> httpInstance.post('/sd/sdParts/list', params);
//机电明细
export const equipForm = (params)=> httpInstance.post('/sd/sdParts/get', params);
//设备历史记录
export const equipHisDealList = (params)=> httpInstance.post('/sd/sdParts/queryPartsHis', params);


//领导统计分析饼图数据
export const  retrieveRotation= (params)=>{
    return httpInstance.post('/mobile/jtMobileInterface/retrieveRotation', params);
}
/**
 * 班组
 */
export const bzList = (params)=> httpInstance.post('/hr/per/perGroup/query', params);
export const bzForm = (params)=> httpInstance.post('/hr/per/perGroup/get', params);

/**
 * 排班
 */
export const pbList = (params)=> httpInstance.post('/sd/sdPbSet/query', params);
export const pbForm = (params)=> httpInstance.post('/sd/sdPbSet/get', params);

/**
 * 机电报警查询
 */
export const jdWarnList = (params)=> httpInstance.post('/sd/sdPartsView/list', params);
export const jdWarnForm = (params)=> httpInstance.post('/sd/sdPartsView/get', params);

