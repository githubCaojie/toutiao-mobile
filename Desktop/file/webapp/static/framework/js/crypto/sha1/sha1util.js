<!-- SHA1前端通用方法 -->
/**
 * SHA1加密
 * @param params 对象
 * @returns {string}
 */
function doObjSHA1Encrypt(params) {
    //首先按照键排序
    var arr = [];
    for(var key in params){
        arr.push(key);
    }
    arr = arr.sort();
    var sortParams = {};
    for(var i = 0; i < arr.length; i++){
        var itemKey = arr[i];
        sortParams[itemKey] = params[itemKey];
    }
    var signature = "";
    for(var key in sortParams){
        signature = signature + key;
        signature = signature + "=";
        //对值做判断
        if(typeof(sortParams[key]) != "undefined" && sortParams[key] != "undefined"
            && sortParams[key] != null && sortParams[key] != "null") {
            signature = signature + sortParams[key];
        }
        signature = signature + "&";
    }
    return CryptoJS.SHA1(signature)+"";
}

/**
 * SHA1加密
 * @param str get传参格式(a=x&b=x)
 * @returns {string}
 */
function doStrSHA1Encrypt(str) {
    //首先解析成对象
    var params = {};
    if (str.indexOf("?") > 0) {
        str = str.substring(str.indexOf("?") + 1, str.length);
    }

    var paramArray = str.split("&");
    for (var i = 0; i < paramArray.length; i++) {
        var paramPair = paramArray[i].split("=");
        params[paramPair[0]] = paramPair[1];
    }
    return doObjSHA1Encrypt(params);
}