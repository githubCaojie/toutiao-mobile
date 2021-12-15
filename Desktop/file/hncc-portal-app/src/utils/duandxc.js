import axios from 'axios';
import appConstant from '@/utils/appConstant.js'
import appFileUtil from './appFileUtil';
import SparkMD5 from 'spark-md5';
import eventBus from './eventBus'

const DDXC_SUCC = 'DDXC_SUCC';
const CHUNK_SIZE = 1024*50;
const DDXC_PERCENTAGE = 'DDXC_PERCENTAGE';

var uploadingFile = undefined;  //读取的本地的文件
var uploadedData = 0;
var uploadingObj = undefined; //当前上传的对象（数据库里的对象）

const spark = new SparkMD5();

const httpInstance = axios.create({
  baseURL: appConstant.fileUrl,
  timeout: 60000,
  headers: {
    "Content-Type": "multipart/form-data"
  },
  onUploadProgress: progressEvent => {
    uploadedData += progressEvent.loaded;
    let percentage = parseInt((uploadedData / uploadingFile.size) * 100);
    eventBus.$emit(DDXC_PERCENTAGE, {uuid: uploadingFile.uuid, p: percentage > 100? 100: percentage})
  }
});

function addQueue(file){
  uploadingObj = uploadingObj? uploadingObj: file;
  if(uploadingObj) {
    uploadFile(uploadingObj);
    return;
  }
  appFileUtil.selectFile().then((result) => {
    if (result.rows.length > 0) {
      let upItem = result.rows.item(0);
      uploadFile(upItem);
    }
  })
}

async function uploadFile(file) {
  uploadingObj = file;
  let { preview, name, uuid, type } = file;
  try {
    console.log('type == appFileUtil.TYPE_VIDEO', type == appFileUtil.TYPE_VIDEO)
    if (type == appFileUtil.TYPE_VIDEO) {
      uploadingFile = await appFileUtil.readLocalFile(preview);
      console.log('uploadingFile', uploadingFile)
    } else {
      uploadingFile = appFileUtil.base64ToBlob(preview);
    }
    
    uploadingFile.name = name;
    uploadingFile.uuid = uuid;
    spark.appendBinary(uploadingFile);
    var hexHash = spark.end();
    
    let start = await getUploadingChunk(hexHash);
    uploadToServer(hexHash, start, file);
  } catch (error) {
    await appFileUtil.delFile(uuid, name);
    addQueue();
  }
  
  
}
function uploadToServer(hexHash, start, file) {
  var fd = new FormData();
  let watermark = '';
  let location = '';
  if (file.extra) {
    let extra = JSON.parse(file.extra);
    watermark = extra.watermark || '';
    location = extra.location;
  }
  let end = (start + CHUNK_SIZE > uploadingFile.size) ? uploadingFile.size : (start + CHUNK_SIZE);
  if(file.type === appFileUtil.TYPE_IMG) {
    end = uploadingFile.size;
  }

  fd.append("upload ", uploadingFile.slice(start, end));
  fd.append("busiUuid", file.obj_uuid);
  fd.append("busiType", file.obj_type);
  fd.append("filename", file.name);
  fd.append("watermark", JSON.stringify(watermark));
  fd.append("module", appConstant.moduleId);
  fd.append("location", location);
  fd.append("uuid", file.uuid);
  httpInstance
    .post("/api/v1/range/upload", fd,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        "Content-MD5": hexHash,
        "Content-Range": "bytes " + start + "-" + (end - 1) + "/" + uploadingFile.size
      }
    })
    .then(response => {
      console.log('response', response)
      if (response.status === 200) {
        if (response.data && response.data.error && response.data.error.code == 206) {
          uploadToServer(hexHash, end, file);
        } else {  //上传成功
          let result = response.data.result;
          result['flag'] = file.flag;
          eventBus.$emit(DDXC_SUCC, result);
          appFileUtil.delFile(file.uuid, file.flag != 'Y'? '': (file.name || file.filename));
          uploadingObj = undefined;
          addQueue();
        }
      }
    }, (error) => {
      console.log('duandxc-uploadToServer', error)
    });
}
function getUploadingChunk(hash) {
  return new Promise((resolve) => {
    httpInstance.get('/api/v1/range/query?md5=' + hash)
      .then(rdata => {
        let start = rdata.data.result;
        uploadedData = start;
        resolve(start);
        
      }).catch((error) => {
        console.log(error)
      })
  })
}

export default {
  addQueue,
  DDXC_SUCC,
  DDXC_PERCENTAGE
}