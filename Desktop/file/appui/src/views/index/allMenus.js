export default [
{
  id: 'kq',
  menuName: '考勤',
  subMenu: [
      {id: 'dk',auth: '', title: '打卡', img:  require('../../assets/imgs/menu/dk.png'), path:'/kqdk'},
      // {id: 'qj',auth: 'MOBILE_KQ_QJ', title: '请假', img:  require('../../assets/imgs/menu/qj.png'), path:'/leave'},
      // {id: 'tj',auth: 'MOBILE_KQ_TJ', title: '考勤统计', img:  require('../../assets/imgs/menu/kqtj.png'), path:'/statistics'},
  ]
},
{
  id: 'xm',
  menuName: '项目管理',
  subMenu: [
      {id: 'GCBY',auth: 'ZL_PROCESS', title: '现场报验', img:  require('../../assets/imgs/menu/gcby.png'), path:'/xcbyList'},
      // {id: 'xm4', title: '工程质量评定标准设置', img:  require('../../assets/imgs/menu/ypdj.png'), path:'/projectQuality'},
      // {id: 'xm4',auth: 'MOBILE_CLFY', title: '测量放样', img:  require('../../assets/imgs/menu/ypdj.png'), path:'/ClfyList'},
      {id: 'SGFYBYD',auth: 'ZL_PROCESS', title: '现场质检', img:  require('../../assets/imgs/menu/xczj.png'), path:'/zlTree'},
       {id: 'XCBG',auth: '', title: '现场变更', img:  require('../../assets/imgs/menu/xcbg.png'), path:'/xcbg-list'},
      // {id: 'xm7',auth: 'MOBILE_XXJD', title: '形象进度', img:  require('../../assets/imgs/menu/xxjd.png'), path:'/JdScheList'},
      
      // {id: 'xm8',auth: 'MOBILE_SGGL', title: '施工管理', img:  require('../../assets/imgs/menu/sggl.png'), path:'/sgglTreeGrid'},
      // {id: 'xm3',auth: 'MOBILE_DBRW', title: '待办任务', img:  require('../../assets/imgs/menu/dbrw.png'), path:'/OrderList'},
      // {id: 'jwapp-lw',auth: 'MOBILE_JW_LWCX', title: '劳务查询', img:  require('../../assets/imgs/menu/lw.png'), path:''},
      // {id: 'jwapp-gcsp',auth: 'MOBILE_JW_GCSP', title: '工程审批', img:  require('../../assets/imgs/menu/gcsp.png'), path:''},
      // {id: 'jwapp-aqxj',auth: 'MOBILE_JW_AQXJ', title: '安全巡检', img:  require('../../assets/imgs/menu/aqxj.png'), path:''},
      
  ]
},
{
  id: 'aq',
  menuName: '安全环保管理',
  subMenu: [
      {id: 'ZLYH',auth: '', title: '质量隐患', img:  require('../../assets/imgs/menu/jlbg.png'), path:'/hdList'},
      {id: 'AQLDSSP',auth: 'AQ_SSP', title: '领导随手拍', img:  require('../../assets/imgs/menu/ypdj.png'), path:'/ldsspList',type: '1'},
      {id: 'AQSSP',auth: 'AQ_SSP', title: '安全随手拍', img:  require('../../assets/imgs/menu/ypdj.png'), path:'/sspList',type: '1'},
      {id: 'HBSSP',auth: 'HB_SSP', title: '环保随手拍', img:  require('../../assets/imgs/menu/xxjd.png'), path:'/sspList',type: '2'},
      {id: 'AQ_WDXJRW',auth: 'WDXJRW', title: '我的巡检任务', img:  require('../../assets/imgs/menu/xczj.png'), path:'/myTask'},
      {id: 'AQ_WDXJ',auth: 'WDXJ_01', title: '我的巡检', img:  require('../../assets/imgs/menu/sggl.png'), path:'/myPatrol'},
      {id: 'AQ_WDZG',auth: 'WDZG_01', title: '我的整改', img:  require('../../assets/imgs/menu/aqjf.png'), path:'/myRectifyList'},
      // {id: 'jwapp-zqzf',auth: 'MOBILE_JW_ZQZF', title: '中期支付', img:  require('../../assets/imgs/menu/zqzf.png'), path:''},
      // {id: 'jwapp-aqjf',auth: 'MOBILE_JW_AQJF', title: '安全经费', img:  require('../../assets/imgs/menu/aqjf.png'), path:''},
  ]
},
// {
//   id: 'yp',
//   menuName: '试件样品管理',
//   subMenu: [
//       {id: 'yp1',auth: 'MOBILE_YPDJ', title: '样品登记', img:  require('../../assets/imgs/menu/ypdj.png'), path:'/exampleList'},
//       {id: 'yp2',auth: 'MOBILE_SJGL', title: '试件管理', img:  require('../../assets/imgs/menu/sjgl.png'), path:'/sjManage'},
//       {id: 'yp3',auth: 'MOBILE_NFCSM', title: 'NFC扫描', img:  require('../../assets/imgs/menu/nfc-sm.png'), path:'/NfcRead'},
//       {id: 'yp4',auth: 'MOBILE_NFCCC', title: 'NFC擦除', img:  require('../../assets/imgs/menu/nfc-cc.png'), path:'/NfcErase'},
//       {id: 'yp5',auth: 'MOBILE_SY', title: '试验', img:  require('../../assets/imgs/menu/sy.png'), path:'/experiment'},
//   ]
// },
{
  id: 'doc',
  menuName: '文档查询',
  subMenu: [
      {id: 'jgwewm', auth: 'ZL_JGW_EWM', title: '结构物', img:  require('../../assets/imgs/menu/doc-wdewm.png')},
      {id: 'gczlpdbz', auth: 'ZL_ASS_STA_SET', title: '标准查询', img:  require('../../assets/imgs/menu/doc-gczl.png'), path: '/gczl-tree'},
      // {id: 'doc1',auth: 'MOBILE_WDEWM', title: '文档二维码', img:  require('../../assets/imgs/menu/doc-wdewm.png'), },
      // {id: 'doc2',auth: 'MOBILE_BZCX', title: '标准查询', img:  require('../../assets/imgs/menu/doc-gczl.png'),},
      // {id: 'doc3',auth: 'MOBILE_JLEWM', title: '计量二维码', img:  require('../../assets/imgs/menu/doc-pdf.png')},
      // {id: 'doc4',auth: '', title: '二维码扫描', img:  require('../../assets/imgs/menu/doc-qr.png'),},
  ]
}
]