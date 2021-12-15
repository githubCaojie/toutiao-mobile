import moment from "moment";
import appConstant from "./appConstant";
import axios from "axios";

const TYPE_IMG = "1";
const TYPE_VIDEO = "2";
const TYPE_FILE = "3";

const IMG_TYPE0 = "0"; //正常需要上传的图片
const IMG_TYPE1 = "1"; //离线图片

const IMG_PRE = "data:image/png;base64,"

const httpInstance = axios.create({
  baseURL: appConstant.fileUrl,
  timeout: 60000,
  headers: {
    "Content-Type": "multipart/form-data",
  }
});

const appFileUtil = {
  TYPE_IMG,
  TYPE_VIDEO,
  TYPE_FILE,
  IMG_TYPE0,
  IMG_TYPE1,
  IMG_PRE,
  uploadFlag: false,
  appLocDb: undefined,
  guid() {
    return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  },
  clearTable() {
    // this.appLocDb.transaction(function (tx) {
    //   let sql = ' DROP TABLE IF EXISTS AppFileTable2 ' ;
    //   tx.executeSql(sql);
    // }, function (error) {
    //   console.log(error)
    // }, function () { });
  },
  initDb() {
    if (this.appLocDb) {
      return;
    }
    this.appLocDb = window.sqlitePlugin.openDatabase({
      name: appConstant.dbName,
      location: "default",
      androidDatabaseProvider: "system",
    });
    this.clearTable();
    this.appLocDb.transaction(
      function(tx) {
        //flag标识 //Y 上传成功后删除本地文件
        let sql =
          "CREATE TABLE IF NOT EXISTS AppFileTable2 " +
          "(uuid, obj_uuid, obj_type, name, thumb, preview, type, extra, flag, add_time TIMESTAMP )";
        tx.executeSql(sql);
      },
      function(error) {
        console.log(error);
      }
    );
  },
  insertFile(insertObj) {
    let extra = insertObj["extra"] ? insertObj["extra"] : {};
    let uuid = insertObj["uuid"] || this.guid();
    let insertSql = " INSERT INTO AppFileTable2 VALUES (?,?,?,?,?,?,?,?,?,?) ";
    let insertValue = [
      uuid,
      insertObj["objUuid"],
      insertObj["objType"],
      insertObj["fileName"],
      insertObj["thumb"],
      insertObj["preview"],
      insertObj["type"],
      JSON.stringify(extra),
      insertObj["flag"],
      moment().format("YYYY-MM-DD HH:mm:ss"),
    ];
    return new Promise((resolve, reject) => {
      this.appLocDb.executeSql(insertSql, insertValue, () => {
          resolve({ uuid: uuid });
        },
        function(error) {
          reject(error)
          console.log(error);
        }
      );
    });
  },
  selectFile(objUuid, objType, offline=false) {
    return new Promise((resolve, reject) => {
      if (!this.appLocDb) {
        reject("数据库连接失败~");
      }
      this.appLocDb.transaction(
        function(tx) {
          let querySql = "SELECT * FROM AppFileTable2";
          let queryParam = [];
          querySql += " WHERE flag = ? ";
          if (offline) {
            queryParam.push(IMG_TYPE1);
          } else {
            queryParam.push(IMG_TYPE0);
          }
          if (objUuid) {
            querySql += " AND obj_uuid = ? ";
            queryParam.push(objUuid);
          }
          if (objType) {
            querySql += " AND obj_type = ? ";
            queryParam.push(objType);
          }
          querySql += " ORDER BY add_time ASC ";
          tx.executeSql(querySql, queryParam,
            function(tx, resultSet) {
              resolve(resultSet);
            },
            function(tx, error) {
              reject(error);
            }
          );
        },
        function() {
          this.uploadFlag = false;
        }
      );
    });
  },
  delFile(uuid) {
    console.log('delFile--------', uuid)
    return new Promise((resolve, reject) => {
      this.appLocDb.transaction(
        (tx) => {
          var delSql = " DELETE FROM AppFileTable2 WHERE uuid = ? ";
          tx.executeSql(delSql, [uuid], () => {
              console.log("数据库记录删除成功=====");
              setTimeout(() => {
                resolve(uuid);
              }, 1000)
            },
            function(error) {
              reject(uuid, error);
            }
          );
        },
        function(error) {
          console.log("delFile====error", error);
          reject(uuid, error);
        }
      );
    });
  },
  base64ToBlob(base64Data) {
    let arr = base64Data.split(","),
    fileType = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    l = bstr.length,
    u8Arr = new Uint8Array(l);

    while (l--) {
      u8Arr[l] = bstr.charCodeAt(l);
    }
    console.log(fileType)
    return new Blob([u8Arr], {
      type: fileType,
    });
  },
  createImgFolder(farr) {
    let folderArr = farr || appConstant.locImgPath;
    return new Promise((resolve, reject) => {
      window.resolveLocalFileSystemURL(
        this.getFileDir(),
        function(dirEntry) {
          dirEntry.getDirectory(folderArr[0], { create: true }, function(
            subDirEntry
          ) {
            subDirEntry.getDirectory(folderArr[1], { create: true }, function(
              subDirEntry1
            ) {
              resolve(subDirEntry1);
            });
          });
        },
        (error) => {
          reject(error)
          console.log(error);
        }
      );
    });
  },
  delLocFile(fileName, folder = appConstant.locUploadPath) {
    return new Promise((resolve, reject) => {
      this.createImgFolder(folder).then((dirEntry) => {
        dirEntry.getFile(
          fileName,
          { create: false, exclusive: false },
          function(fileEntry) {
            fileEntry.remove(
              () => {
                resolve("delSucc");
              },
              (error) => {
                reject(error);
              }
            );
          },
          (error) => {
            reject(error);
          }
        );
      });
    });
  },
  downloadFile(downloadUrl, localPath, dfileName, onProgress) {
    let that = this;
    window.resolveLocalFileSystemURL(
      localPath,
      function(dirEntry) {
        that.writeFile(dirEntry, downloadUrl, dfileName, onProgress);
      },
      (error) => {
        console.log(error);
      }
    );
  },
  writeFile(fs, downloadUrl, dfileName, onProgress) {
    fs.getFile(
      dfileName,
      { create: true, exclusive: false },
      function(fileEntry) {
        fileEntry.createWriter(function(fileWriter) {
          var oReq = new XMLHttpRequest();
          oReq.open("GET", downloadUrl, true);
          oReq.responseType = "blob";
          oReq.onload = function() {
            var blob = oReq.response; // Note: not oReq.responseText
            if (blob) {
              fileWriter.write(blob);
            } else console.error("we didnt get an XHR response!");
          };
          oReq.onprogress = function() {
            onProgress(event);
          };
          oReq.send(null);
        });
      },
      function(err) {
        console.error("error getting file! " + err);
      }
    );
  },

  resolveFolder(folder) {
    return new Promise((resolve) => {
      window.resolveLocalFileSystemURL(folder, function(dirEntry) {
        resolve(dirEntry);
      });
    });
  },
  writeToLocal(dirEntry, blob, fileName) {
    return new Promise((resolve) => {
      dirEntry.getFile(fileName, { create: true, exclusive: false }, function(
        fileEntry
      ) {
        let nativeURL = fileEntry.nativeURL;
        fileEntry.createWriter(function(fileWriter) {
          fileWriter.write(blob);
          resolve(nativeURL);
        });
      });
    });
  },
  copyFile(from, fileName, to) {
    return async (resolve, reject) => {
      try {
        let dirEntry = undefined;
        let blob = await this.readLocalFile(from);
        if (to) {
          dirEntry = to;
        } else {
          dirEntry = await this.createImgFolder();
        }
        dirEntry.getFile(fileName, { create: true, exclusive: false }, function(fileEntry) {
          let nativeURL = fileEntry.nativeURL;
          fileEntry.createWriter(function(fileWriter) {
            fileWriter.write(blob);
            resolve(nativeURL);
          });
        });
      } catch (error) {
        console.log(error);
        reject(error);
      }
    };
  },
  readLocalFile(path) {
    if (!path) {
      return Promise.reject("path is unuseable");
    }
    return new Promise((resolve, reject) => {
      window.resolveLocalFileSystemURL(
        path,
        function(fileEntry) {
          fileEntry.file(function(file) {
            var reader = new FileReader();
            reader.onloadend = function() {
              var blob = new Blob([new Uint8Array(this.result)], {
                type: "image/jpeg",
              });
              resolve(blob);
            };
            reader.readAsArrayBuffer(file);
          });
        },
        function(error) {
          reject(error);
        }
      );
    });
  },
  readImg(path) {
    return new Promise((resolve) => {
      var img = new Image();
      img.src = path;
      img.onload = function() {
        resolve(img);
      };
    });
  },
  compress(path, type, limitW = 1000, limitH = 1000) {
    return async (resolve) => {
      let img = await this.readImg(path);
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      const { width: originWidth, height: originHeight } = img;
      // 最大尺寸限制
      const maxWidth = limitW;
      const maxHeight = limitH;
      // 目标尺寸
      let targetWidth = originWidth;
      let targetHeight = originHeight;
      if (originWidth > maxWidth || originHeight > maxHeight) {
        if (originWidth / originHeight > 1) {
          // 宽图片
          targetWidth = maxWidth;
          targetHeight = Math.round(maxWidth * (originHeight / originWidth));
        } else {
          // 高图片
          targetHeight = maxHeight;
          targetWidth = Math.round(maxHeight * (originWidth / originHeight));
        }
      }
      canvas.width = targetWidth;
      canvas.height = targetHeight;
      context.clearRect(0, 0, targetWidth, targetHeight);
      // 图片绘制
      context.drawImage(img, 0, 0, targetWidth, targetHeight);
      canvas.toBlob(function(blob) {
        resolve(blob);
      }, type || "image/png");
    };
  },
  uploadToServerByPath(
    locFilePath,
    objUuid,
    objType,
    fileName,
    watermark,
    location,
    id
  ) {
    let that = this;
    return async (resolve, reject) => {
      try {
        let blob = await this.readLocalFile(locFilePath);
        let rdata = await that.uploadToServer(
          blob,
          objUuid,
          objType,
          fileName,
          watermark,
          location,
          id
        );
        resolve(rdata);
      } catch (error) {
        reject(error);
      }
    };
  },

  uploadToServer(file, objUuid, objType, fileName, watermark, location, uuid) {
    var fd = new FormData();
    fd.append("upload ", file);
    fd.append("busiUuid", objUuid);
    fd.append("busiType", objType);
    fd.append("filename", fileName);
    fd.append("watermark", watermark);
    fd.append("module", appConstant.moduleId);
    fd.append("location", location);
    fd.append("uuid", uuid);
    return new Promise((resolve, reject) => {
      httpInstance.post("/api/v1/file/upload", fd).then(
        (response) => {
          if (
            response.status === 200 &&
            response.data &&
            response.data.result
          ) {
            resolve(response.data.result);
            this.delFile(uuid, fileName);
          } else {
            reject({});
          }
        },
        (error) => {
          reject(error);
          this.uploadFlag = false;
        }
      );
    });
  },
  checkIsDelete(preview) {
    return new Promise((resolve) => {
      window.resolveLocalFileSystemURL(
        preview,
        () => {
          resolve(false);
        },
        () => {
          resolve(true);
        }
      );
    });
  },
  isPicture(url) {
    var hz = "";
    var imgType = [
      ".bmp",
      ".jpg",
      ".jpeg",
      ".png",
      ".tif",
      ".gif",
      ".pcx",
      ".tga",
      ".exif",
      ".fpx",
      ".svg",
      ".psd",
      ".cdr",
      ".pcd",
      ".dxf",
      ".ufo",
      ".eps",
      ".ai",
      ".raw",
      ".WMF",
      ".webp",
    ];
    var reg = /\.\w+$/;
    var result = url.match(reg);
    if (result.length > 0) {
      hz = result[0].toLowerCase();
    }
    if (!hz) {
      return false;
    }
    return imgType.includes(hz);
  },
  isVideo(url) {
    var hz = "";
    var videoType = [
      ".rm",
      ".rmvb",
      ".mpeg1-4",
      ".mov",
      ".mtv",
      ".dat",
      ".wmv",
      ".avi",
      ".3gp",
      ".amv",
      ".dmv",
      ".flv",
      ".mpg",
      ".mpe",
      ".mpa",
      ".m15",
      ".m1v",
      ".mp2",
      ".mp4",
    ];
    var reg = /\.\w+$/;
    var result = url.match(reg);
    if (result.length > 0) {
      hz = result[0].toLowerCase();
    }
    if (!hz) {
      return false;
    }
    return videoType.includes(hz);
  },
  getFileType(fileName) {
    if (this.isPicture(fileName)) return this.TYPE_IMG;
    if (this.isVideo(fileName)) return this.TYPE_VIDEO;
    return TYPE_FILE;
  },
  getFileDir() {
    let platform = window.device.platform;
    if (platform === "iOS") {
      return window.cordova.file.documentsDirectory;
    } else {
      // return window.cordova.file.externalRootDirectory
      return window.cordova.file.externalDataDirectory;
    }
  },
};
export default appFileUtil;
