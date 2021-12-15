import httpInstance from './index'
//流程查询
export const retrieve = (params) => httpInstance.post('/jt/mobile/mobileUnitProcAction.do?action=retrieve', params) ;
//班组信息
export const groupInfo = (params) => httpInstance.post('/jt/mobile/mobileUnitProcAction.do?action=groupInfo', params) ;
//流程信息
export const flowInfo = (params) => httpInstance.post('/jt/mobile/mobileUnitProcAction.do?action=flowInfo', params) ;
//设备信息
export const equipInfo = (params) => httpInstance.post('/jt/mobile/mobileUnitProcAction.do?action=equip', params) ;
//材料信息
export const clInfo = (params) => httpInstance.post('/jt/mobile/mobileUnitProcAction.do?action=clInfo', params) ;

//申请
export const apply = (params) => httpInstance.post('/jt/mobile/mobileUnitProcAction.do?action=apply', params) ;
//申请
export const over = (params) => httpInstance.post('/jt/mobile/mobileUnitProcAction.do?action=over', params) ;
//存梁
export const store = (params) => httpInstance.post('/jt/mobile/mobileUnitProcAction.do?action=store', params) ;
//存梁保存
export const storeSave = (params) => httpInstance.post('/jt/mobile/mobileUnitProcAction.do?action=storeSave', params) ;
//存梁确认
export const storeConfirm = (params) => httpInstance.post('/jt/mobile/mobileUnitProcAction.do?action=storeConfirm', params) ;
//移梁
export const storeInOut = (params) => httpInstance.post('/jt/mobile/mobileUnitProcAction.do?action=storeInOut', params) ;
//移梁保存
export const storeInOutSave = (params) => httpInstance.post('/jt/mobile/mobileUnitProcAction.do?action=storeInOutSave', params) ;



