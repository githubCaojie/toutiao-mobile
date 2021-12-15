AjaxDataWrap = function(name){
    this.pageInfo = {} ;
    this.dataList = [] ;
    this.orginalDataList = [];
    this.data = new HyRecord() ;
    this.query = new HyRecord() ;
    this.cacheData = false ;
    this.sortString = "" ;
    this.dsName = "";
    if(name != undefined)
    	this.name = name;
   
}
AjaxDataWrap.prototype = {
	getSortString : function(){
		return this.sortString ;
	},
	setSortString : function(sortString){
		this.sortString = sortString ;
	},
	/**
	 * 获得分页信息
	 * @return {}
	 */
    getPageInfo : function(){
        return this.pageInfo ;
    },
    setPageInfo : function (pageInfo){
    	this.pageInfo = pageInfo;
    },
    /**
	 * 获取总页数
	 * @return
	 */
	getAllPageNum : function() {
		return this.pageInfo.allPageNum;
	},
	/**
	 * 设置总页数
	 * @param allPageNum
	 */
	setAllPageNum :function(allPageNum) {
		this.pageInfo.allPageNum = allPageNum;
	},

	/**
	 * 获取总行数
	 * @return
	 */
	getAllRowNum : function() {
		return this.pageInfo.allRowNum;
	},

	/**
	 * 设置总行数
	 * @param allRowNum
	 */
	setAllRowNum : function(allRowNum) {
		this.pageInfo.allRowNum = allRowNum;
	},

	/**
	 * 获取当前页数
	 * @return
	 */
	getCurPageNum : function() {
		return this.pageInfo.curPageNum;
	},

	/**
	 * 设置当前页数
	 * @param curPageNum
	 */
	setCurPageNum : function(curPageNum) {
		this.pageInfo.curPageNum = curPageNum;
	},

	/**
	 * 获取每页行数
	 * @return
	 */
	getRowOfPage : function() {
		return this.pageInfo.rowOfPage;
	},

	/**
	 * 设置每页行数
	 * @param rowOfPage
	 */
	setRowOfPage : function(rowOfPage) {
		this.pageInfo.rowOfPage = rowOfPage;
	},
	/**
	 * 获取单条数据
	 * @return {}
	 */
	getData : function(){
	    return this.data ;
	},
	/**
	 * 设置单条数据
	 * @param {} record
	 */
	setData : function(record){
	    this.data = record ;
	},
	/**
	 * 设置固定查询条件
	 * @param {} record
	 */
	setQuery: function(record){
	    this.query = record ;
	},
	/**
	 * 获取固定查询条件
	 * @return {}
	 */
	getQuery: function(){
	    return this.query;
	},
	/**
	 * 返回数据集名称
	 */
	getDsName: function(){
		return this.dsName;		
	},
	/**
	 * 设置数据集名称
	 */
	setDsName: function(name){
		this.dsName = name;		
	},
	/**
	 * 获取dataList
	 * @return {}
	 */
	getDataList : function(){
	    return this.dataList ;
	},
	getOriginalDataList : function(){
		return this.orginalDataList;
	},
	//getOriginal
	//Original
	/**
	 * 设置dataList
	 * @param {} recordArray
	 */
	setDataList : function(recordArray){
	    this.dataList = recordArray ;
	},
	/**
	 * 备份dataList,生成ajaxdatawrap后，调用该方法
	 */
	backupDataList:function(){
		 for(var i=0;i<this.dataList.length;i++){
			var record = this.dataList[i];
		    var newRecord = new  HyRecord();   //获取 record模型 
	    	newRecord.data = {};  
		    //获得Record的字段 
	    	//防止丢失字段，不走更新时添加记录的错误
	    	var keys = [], index = 0;
	    	for(var attr in record.data){
	    		keys[index] = attr;
	    		index++;
	    	}
		    for(var k=0;k<keys.length;k++){  
		    	if(typeof record.get(keys[k])!="undefined"){
		    		newRecord.setNewRecord(keys[k],record.get(keys[k]));
		    	}else{
		    		newRecord.data[keys[k]] = null;  
		    	}
		    	newRecord.id = record.id;
		    }
	    	if(newRecord.get("checked") == null ||newRecord.get("checked") == "null"){
	    		newRecord.initSet("checked","0");
	    	}
	    	if(newRecord.get("rowId") == null ||newRecord.get("rowId") == "null"){
	    		newRecord.initSet("rowId","0");
	    	}
		   this.orginalDataList.push(newRecord);
		}
	},
	
	getName : function(){
		return this.name;
	},
	
	setName : function(name){
		this.name = name;
	},
	
	toJSONData : function(){
		
		var json = {};
		var dataList = [];
		if(this.dataList == null || this.dataList == undefined)
			this.dataList = [];
		for(var i = 0; len = this.dataList.length, i < len; i++){
			dataList.push(this.dataList[i].data);
		}
		json.dataList = dataList;
		json.pageInfo = {};
		if(this.data != null && this.data != undefined){
			json.data = this.data.data;
		}
		for(var i in this.pageInfo){
			if(this.pageInfo.hasOwnProperty(i)){
				json.pageInfo[i] = this.pageInfo[i];
			}
		}
		if(this.query != null && this.query != undefined){
			json.query = this.query.data;
		}
		var datawrap = {};
		var jsonStr = JSON.stringify(json);		
		datawrap[this.getName()] = jsonStr.substring(jsonStr.indexOf("{")+1,jsonStr.lastIndexOf("}"));		
		return datawrap;
	}
}

///////////////////////////////以下为ajaxutil.js的内容///////////////////////////////////////
function getResponseData(datawrap){
	var data = "";
	var attr = "";
	for(var i in datawrap){
		attr = i;
		data = datawrap[i];
	}
	if(data.indexOf("{")==0){
		data = eval("("+data+")");
	}else{
		data = eval("({"+data+"})");
	}
	

	if(data.pageInfo == undefined){
		data.pageInfo = {};
	}

	data.pageInfo.allPageNum = 0;
	data.pageInfo.curPageNum = 0;
	data.pageInfo.rowOfPage = 0;
	
	data.pageInfo.allRowNum = data.dataList == undefined ? 1 : data.dataList.length;
	
	var dataStr = JSON.stringify(data);
	var dataWrapName = attr.split(".")[0];
	dataStr = '{"dataWraps":{"'+dataWrapName+'":'+dataStr+'}}';
	var responseData = convertStringToDC(dataStr);
	return responseData;

}
/**
 * 从json对象转化为DataCenter对象
 * @param {} data
 * @return {}
 */
function convertJsonToDC(data){
	//转成json
    var jsonData = JSON.stringify(data) ;
    var dataArray = eval("("+jsonData+")");
    return convertStringToDC(dataArray) ;
}

/**
 * 把json形式的字符串转为DataCenter对象
 * @param {} jsonData
 * @return {}
 */
function convertStringToDC(jsonData){
	var responseData = new DataCenter() ;
    var dataArray = eval("("+jsonData+")");
    for(var key in dataArray){
    	if(key=="errorMessage"){//设置系统的错误信息
    	    responseData.setErrorMessage(dataArray[key]) ;
    	}else if(key=="message"){//设置用户自定义错误信息
    	    responseData.setMessage(dataArray[key]) ;
    	}else if(key=="parameters"){//设置用户自定义参数
    	    for(var pkey in dataArray[key]){
    	        responseData.setParameter(pkey,dataArray[key][pkey]) ;
    	    }
    	}else if(key=="dataWraps"){//设置dataWrap
    		//遍历每个dataWrap
    	    for(var dataWrapName in dataArray[key]){
			    var adw = new AjaxDataWrap() ;
			    adw.name = dataWrapName;
			    var dataWrap = dataArray[key][dataWrapName] ;
			    for(var pkey in dataWrap){
			    	if(pkey=="sortString"){
			    		adw.setSortString(dataWrap[pkey]) ;
			    	}else if(pkey=="data"){//设置单条数据
			            if(dataWrap[pkey]!=null){
			            	var record = new HyRecord() ;
			            	//遍历data，放置到record中
			                for(var dataKey in dataWrap[pkey]){
			                	    record.data[dataKey] = dataWrap[pkey][dataKey] ;
			                }
			                adw.setData(record) ;
			            }
			        }else if(pkey=="query"){//设置固定查询条件
			            if(dataWrap[pkey]!=null){
			            	var record = new HyRecord() ;
			            	//遍历data，放置到record中
			                for(var dataKey in dataWrap[pkey]){
			                	    record.data[dataKey] = dataWrap[pkey][dataKey] ;
			                }
			                adw.setQuery(record) ;
			            }
			        }else if(pkey=="dataList"){//设置dataList
			            if(dataWrap[pkey]!=null){
			                for(var j=0;j<dataWrap[pkey].length;j++){
			                    var record = new HyRecord(j) ;
			                    for(var dataKey in dataWrap[pkey][j]){
			                        record.data[dataKey] = dataWrap[pkey][j][dataKey] ;
			                    }
			                    record.data.keyId = j+1;
			                    adw.getDataList().push(record) ;
			                }
			            }
			        }else if(pkey=="formData"){//设置单条数据
			            if(dataWrap[pkey]!=null){
			            	var record = new HyRecord() ;
			            	//遍历data，放置到record中
			                for(var dataKey in dataWrap[pkey]["values"]){
			                	  record.data[dataKey] = dataWrap[pkey]["values"][dataKey] ;
			                }
			                adw.setData(record) ;
			            }
			        }else if(pkey=="formDataList"){
			        	//说明从AjaxDataSetWrap而来，需要缓存数据
			        	adw.cacheData = true ;
			        	if(dataWrap[pkey]!=null){
			        		for(var j=0;j<dataWrap[pkey].length;j++){
			                    var record = new Record(j) ;
			                    //找到values
	                    		var ddataWrapValues = dataWrap[pkey][j]["values"] ;
	                    		for(var dataKey in ddataWrapValues){
	                    			record.data[dataKey] = ddataWrapValues[dataKey] ;     			
	                    		}
	                    		record.data.keyId = j+1;
			                    adw.getDataList().push(record) ;
			                }
			        	}
			        }else if(pkey=="pageInfo"){//设置分页信息
			        	if(dataWrap[pkey]!=null){
			        		var apn = dataWrap[pkey].allPageNum ;
			        	    adw.setAllPageNum(apn) ;
				            adw.setAllRowNum(dataWrap[pkey].allRowNum) ;
				            var cpn = dataWrap[pkey].curPageNum ;
				            if(cpn>apn){
				            	cpn = apn ;
				            }
				            if(cpn<1){
				            	cpn = 1 ;
				            }
				            adw.setCurPageNum(cpn) ;
				            adw.setRowOfPage(dataWrap[pkey].rowOfPage) ;
			        	}
			            
			        }
			        else if(pkey=="dsName"){//设置数据集名称{
			        	adw.dsName = dataWrap[pkey];
			        }
			    }
			    //adw.backupDataList();
			    responseData.setAjaxDataWrap(dataWrapName,adw) ; 
			  }
    	}
        
    }
    
    return responseData ;
}



/**
 * 收集页面上datawrap的查询参数
 * @param {} datawrap
 */
function collectDataWrapQuery(datawrap){
	var  data={};
	$("[name^='"+datawrap+".query']").each(function(){
		var  paramsname=$(this).attr("name");
		data[paramsname]=$(this).val();
	});
	return data;
	
}


/**
 * 收集页面上除了dataWrap之外其他需要上传的参数，upload=true的
 */
function collectUploadQuery(){
	var  data={};
	$("[upload='true']").each(function(){
		var  paramsname=$(this).attr("name");
		if($(this).attr("type")=="checkbox" || $(this).attr("type")=="radio"){
			 if($(this).attr("checked")!=null && $(this).attr("checked")=="checked"){
				 data[paramsname]=$(this).val();	
			}
		}else{
			//**2014-02-13xyq***考虑数据为空的时候，值也需要收集
			//if($.trim($(this).val())!=""){
				data[paramsname]=$(this).val();	
			//}	
		}
		
		
	});
	return data;
}
//页面提交时添加一个遮罩层
function getMaskLayer() {
	var obj = isCrossDomain.curTopWindowRef.document.body;
	var waitDiv=$("#masklayerDiv");
	waitDiv.prependTo(obj);
	waitDiv.css("display","block");
}
var popwindowOverMultitask = 'false';
;(function($) {
//封装ajax方法
 $.request=function(paramsObj){
	//传递的data
	//var mask = isCrossDomain.curTopWindowRef.document.getElementById("masklayerDiv");
	var masklayerDivId = "masklayerDiv"+new Date().getTime();	
	var masklayerDivHtml = '<div id="'+masklayerDivId+'" class="grid-blockOverlay1"> '+
					 '   <div class="grid-blockWaitMask">'+
					 '	   </div>'+
					 ' </div>';	
	if(popwindowOverMultitask == 'true'){						
		$("body").append(masklayerDivHtml);
		var mask = window.document.getElementById(masklayerDivId); //当前窗口遮罩
	}else{
		$("body",$(isCrossDomain.curTopWindowRef.document)).append(masklayerDivHtml);
		var mask = isCrossDomain.curTopWindowRef.document.getElementById(masklayerDivId);
	}
	var showmask = paramsObj.showmask;
	 if(showmask == undefined || showmask == true){
		 if(mask){
			mask.style.display="block";          
		 }  
	 }
	var  ajaxDataObj={};
	var  successfun=paramsObj.success;
	var errorfun = paramsObj.error;
	var  action=paramsObj.action;
	//同步或者异步
	var  async=paramsObj.async;
	if(async==undefined || async=="undefined"){
		async=true;
	}
	
	//是否收集页面的upload
	var pageparam=paramsObj.pageparam;
	if(pageparam==undefined || pageparam=="undefined"){
		pageparam="all";
	}
	
	//收集表格和form的数据
	var dataObj = {} ;
	var allData=paramsObj.data;
	if(typeof allData != "undefined"){
		for(var i=0;i<allData.length;i++){
			var  onedata=allData[i];
			for(var attr in onedata){
				//遍历ajaxDataobj是否已经存在该对象了
				if(onedata[attr]!= ""){
				    if(dataObj[attr]==null||dataObj[attr]==undefined){
						dataObj[attr]=onedata[attr]; 
					}else{
						dataObj[attr]=dataObj[attr]+","+onedata[attr]; 
					}
				}
				
			}
		}
	}
 
	if(pageparam=="all"){
	    //收集页面上除了dataWrap之外其他需要上传的参数，upload=true的
		var  uploadTrueData = {};
		uploadTrueData = collectUploadQuery();
		var uploadDataWrapData = {};
		for(var attr in uploadTrueData){  //  在这里会将 dataWrap.query.deptName 中的query去掉
			if(attr == "undefined" || attr == null){
				continue;
			}
			if(attr.indexOf(".") == -1){ //不带dataWrap的 ，直接放到ajaxDataObj中
				ajaxDataObj[attr] = uploadTrueData[attr]
			}else{
				var temp = attr.split(".")[0];
				if(uploadDataWrapData[temp] == undefined){
					uploadDataWrapData[temp] = [];			
				}	
				var obj = {} ;
				obj[attr.split(".")[2]] = uploadTrueData[attr];
				uploadDataWrapData[temp].push(obj);
			}
			
		}
		for(var attr in uploadDataWrapData){
			//
			if(JSON.stringify(dataObj) == "{}"){  
				var obj = {};
				for(var i=0;i<uploadDataWrapData[attr].length;i++){
					for(var inner in uploadDataWrapData[attr][i]){
						obj[inner] = uploadDataWrapData[attr][i][inner];
					}
				}
			
				dataObj[attr] =  "\"query\":" + JSON.stringify(obj);  //现在上传时必须带上query参数，和uep中是不一样的
			}else{
				for(var key in dataObj){ 
					if(key.indexOf(attr) != -1){  //这里会将upload的查询条件放到收集dataWrap的后面 ，即dataWrap:{"query":""}
						
						var obj = {};
						for(var i=0;i<uploadDataWrapData[attr].length;i++){
							for(var inner in uploadDataWrapData[attr][i]){
								obj[inner] = uploadDataWrapData[attr][i][inner];
							}
						}
					
						dataObj[key] = dataObj[key] + ",\"query\":" + JSON.stringify(obj);  //现在上传时必须带上query参数，和uep中是不一样的
					}
				}
			}
			
		}
	
	}
	

	
	for(var key in dataObj){
	    ajaxDataObj[key] = "{" + dataObj[key] + "}" ;
	}
	//收集页面的params
	var  params={};
	//收集用户自定义参数
	params=paramsObj.params;
	for(var attr in params){
		ajaxDataObj[attr]=params[attr]; 
	}
	var  formAction="";
	if(paramsObj.url != undefined){
		formAction = paramsObj.url;
	}else if(document.forms[0]!= undefined){
		 formAction = document.forms[0].attributes["action"].value ;
    }
	//ajaxDataObj["action"]=action;
	$.ajax({
        url:formAction,
        type: "post",   //方式
        dataType:"html",
        data:ajaxDataObj,
        async:async,
        success:function(data){
        //	try{
        	 
        	 if(showmask == undefined || showmask == true){
	         	        	   if(mask){
								  //mask.style.display="none";   
								  $(mask).remove();          
							   }  
						   }
				if("session timeout" == data){
					window.location.href=$$pageContextPath + "/nosession" ;
				}else if(data.indexOf("{")==0){
             	   var responseData=convertJsonToDC(data);
                    if(responseData.getErrorMessage()!=""){
                        $.alert("提示",responseData.getErrorMessage()) ;
 
                        
                    }else{
                    	   if(successfun!=undefined && successfun!="undefined"){
         	        	   successfun(responseData); 
         	        	   	
         	           }
                    } 
                   
                }else{
             	   $("body").html(data); 
                }
        	/*}catch(e){
        		$.alert("错误提示",e.message) ;
        	}*/
        	/* if(showmask == undefined || showmask == true){
	        	if(mask){
				   mask.style.display="none";          
			    }
		    }*/
        },
        error:function(requestData,status,e){
        	if(errorfun!=undefined && errorfun!="undefined"&&typeof errorfun=="function"){
        		errorfun(requestData,status,e); 
        	}else{
        		alert("ajax请求出错，可能是页面请求的action有误！") ;
        	}
        	if(showmask == undefined || showmask == true){
	        	if(mask){
				   //mask.style.display="none";  
				   $(mask).remove();        
			    }
		    }
        },
        complete: function (XHR, TS) {
        	XHR = null ;
        	if(paramsObj.complete != undefined){
				paramsObj.complete(XHR, TS);
			}
        } 
		
    }).then(function(){
    	
    	//  if(showmask == undefined || showmask == true){
	    // 	setTimeout(function(){ if(mask){
			  // //mask.style.display="none";   
			  // $(mask).remove();          
		   //  }}, 100)
	    // }
	   
    });
	
}
})(jQuery);



///////////////////////////以下为datecenter内容////////////////////////////////
function DataCenter(){
    this.parameters = {} ;
    this.dataWraps = {} ;
    this.errorMessage = "" ;
    this.message = "" ;
}
DataCenter.prototype = {
	/**
	 * 设置自定义参数
	 * @param {} name
	 * @return {}
	 */
    getParameter : function(name){
    	return this.parameters[name] ;
    },
    /**
     * 获取自定义参数
     * @param {} name
     * @param {} value
     */
    setParameter : function(name,value){
        this.parameters[name] = value ;
    },
    /**
     * 获得系统异常信息
     * @return {}
     */
    getErrorMessage : function(){
        return this.errorMessage ;
    },
    /**
     * 设置系统异常信息
     * @param {} errorMessage
     */
    setErrorMessage : function(errorMessage){
        this.errorMessage = errorMessage ;
    },
    /**
     * 获得用户自定义异常信息
     * @return {}
     */
    getMessage : function(){
        return this.message ;
    },
    /**
     * 设置用户自定义异常信息
     * @param {} message
     */
    setMessage : function(message){
        this.message = message ;
    },
    /**
     * 得到相应的datawrap的数据
     * @param {} dataWrapName
     * @return {}
     */
    getAjaxDataWrap : function(dataWrapName){
        return this.dataWraps[dataWrapName] ;
    },
    /**
     * 设置dataWrap的数据
     * @param {} dataWrapName
     * @param {} ajaxDataWrap
     */
    setAjaxDataWrap : function(dataWrapName,ajaxDataWrap){
    	this.dataWraps[dataWrapName] = ajaxDataWrap ;
    }
}

/**      
* 对Date的扩展，将 Date 转化为指定格式的String      
* 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q) 可以用 1-2 个占位符      
* 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)      
* eg:      
* (new Date()).pattern("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423      
* (new Date()).pattern("yyyy-MM-dd E HH:mm:ss") ==> 2009-03-10 二 20:09:04      
* (new Date()).pattern("yyyy-MM-dd EE hh:mm:ss") ==> 2009-03-10 周二 08:09:04      
* (new Date()).pattern("yyyy-MM-dd EEE hh:mm:ss") ==> 2009-03-10 星期二 08:09:04      
* (new Date()).pattern("yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18      
*/        

Date.prototype.pattern=function(fmt) {         
    var o = {         
    "M+" : this.getMonth()+1, //月份         
    "d+" : this.getDate(), //日         
    "h+" : this.getHours()%12 == 0 ? 12 : this.getHours()%12, //小时         
    "H+" : this.getHours(), //小时         
    "m+" : this.getMinutes(), //分         
    "s+" : this.getSeconds(), //秒         
    "q+" : Math.floor((this.getMonth()+3)/3), //季度         
    "S" : this.getMilliseconds() //毫秒         
    };         
    var week = {         
    "0" : "\u65e5",         
    "1" : "\u4e00",         
    "2" : "\u4e8c",         
    "3" : "\u4e09",         
    "4" : "\u56db",         
    "5" : "\u4e94",         
    "6" : "\u516d"        
    };         
    if(/(y+)/.test(fmt)){         
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));         
    }         
    if(/(E+)/.test(fmt)){         
        fmt=fmt.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? "\u661f\u671f" : "\u5468") : "")+week[this.getDay()+""]);         
    }         
    for(var k in o){         
        if(new RegExp("("+ k +")").test(fmt)){         
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));         
        }         
    }         
    return fmt;         
}    

