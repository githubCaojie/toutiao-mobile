<!-- RSA前端通用方法 -->
//RSA加密
function doRSAEncrypt(publicKey, msg) {
	if('' == publicKey) {
        return msg;
    }
    var msgLength = calStrLength(msg);
    if(msgLength > 110) {
        alert("加密内容过长！");
    }
    var rsa = new RSAKey();
    rsa.setPublic(publicKey, "10001");
    var res = rsa.encrypt(msg);
    if(res == null) return msg;
    return res;
}

//获得输入框中字符长度
function calStrLength(msg) {
    var str = new String(msg);
    var bytesCount = 0;
    for (var i = 0 ,n = str.length; i < n; i++) {
        var c = str.charCodeAt(i);
        if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) {
            bytesCount += 1;
        } else {
            bytesCount += 3;
        }
    }
    return bytesCount;
}