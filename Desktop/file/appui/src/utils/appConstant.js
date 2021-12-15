// const baseUrl = 'http://124.71.44.188:8081';    //正式   sysconfig
const baseUrl = 'http://222.244.147.108:56789';    //测试   fatshan
// const baseUrl = 'http://localhost:8285';

const appConstant = {
    socketUrl: 'ws://172.20.33.118:32508/wsmsg?pid=',
    baseUrl: baseUrl,
    busiUrl: baseUrl + '/pmzl',
    sysconfigUrl: baseUrl + '/fatshan',
    fileUrl: baseUrl + '/jtfile',
    loginStorageId: 'jt-pmzl',
    dbName: 'jtpmzlmdb',
    locImgPath: ['fatshan', 'loc-imgs'],
    locUploadPath: ['fatshan', 'upload-imgs'],
    rowOfPage: 10,
    rightItemsRoot: 'MOBILE',
    cashFileKey: 'fatshanoffline',
    moduleId: 'FSLQ', //模块名称
    plantForm: 'PHONE',
    softPlatform: 'ANDROID'
}

export default appConstant