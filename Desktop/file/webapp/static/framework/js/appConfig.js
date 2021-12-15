var $$tabPaneType = '' ;//[[${tabPaneType}]] ;
var $$AppConfig = {};
var debugMode = 'true' ;//"<%=debugMode%>" ;
var $$devmode = 'true' ;//'<%=devmode%>';
var $$pageMetaData = "false" ;//"<%=pageMetaData%>";
//var $$pageContextPath = undefined ;
var requestTimeOut = "-1" ;//"<%=requestTimeOut%>" ;
var $$csrfToken = "";
var popwindowOverMultitask = "";
$.ajax({
	url:$$ContextPath.webContext+"initInfo/getAppConfig",
	type: "get",   //方式
	dataType:"json",
	async:false,
	success:function(data){
		$$AppConfig = data;
		debugMode = data.runInDebugMode+"";
		$$devmode = debugMode;
		var requestTimeOutStr = data.extProp.requestTimeOut;
		if("" != requestTimeOutStr && "null" != requestTimeOutStr && null != requestTimeOutStr) {
			requestTimeOut = requestTimeOutStr;
		}
		$$pageMetaData = data.extProp.pageMetaData;
		if(debugMode=="false" && requestTimeOut != "-1"){
			var obj = {} ;
			obj.timeout = requestTimeOut ;
			$.ajaxSetup(obj);
		}
		$$tabPaneType = data.extProp.tabPaneType;
		$$csrfToken = data.extProp.csrfToken;
		popwindowOverMultitask = data.extProp.popwindowOverMultitask;
	}
});