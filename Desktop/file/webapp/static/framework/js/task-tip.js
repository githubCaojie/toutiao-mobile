 //直接调用showMessages方法使用就行，多个消息用@@@分隔
 
 
 function MessageMap()
{
   this.elements = new Array();

   /**
   * 获取MAP元素个数
   */
	this.size = function() {
	   return this.elements.length;
	}
	
	/**
	   * 判断MAP是否为空
	   */
	this.isEmpty = function() {
	   return (this.elements.length < 1);
	}
	
	   /**
	   * 删除MAP所有元素
	   */
	this.clear = function() {
	   this.elements = new Array();
	}
	
	   /**
	   * 向MAP中增加元素（key, value) 
	   * @param {Object} _key 
	   * @param {Object} _value
	   */
	   this.put = function(_key, _value) {
	this.elements.push({key:_key, value:_value});
	   }
	
	   /**
	   * 删除指定KEY的元素，成功返回True，失败返回False
	   * @param {Object} _key
	   */
	this.remove = function(_key) {
	   var bln = false;
	   try {   
	    for (var i = 0; i < this.elements.length; i++) { 
	     if (this.elements[i].key == _key){
	      this.elements.splice(i, 1);
	      return true;
	     }
	    }
	   }catch(e){
	    bln = false;    
	   }
	   return bln;
	}
	
	/**
	* 获取指定KEY的元素值VALUE，失败返回NULL
	* @param {Object} _key
	*/
	this.get = function(_key) {
	   try{   
	    for (var i = 0; i < this.elements.length; i++) {
	     if (this.elements[i].key == _key) {
	      return this.elements[i].value;
	     }
	    }
	   }catch(e) {
	    return null;   
	   }
	}
	/**
	 * 获取指定KEY的元素值VALUE，并且为VALUE对象的属性赋值
	 * @param {} _key
	 * @param {} _attr
	 * @param {} _val
	 */
	this.set = function(_key, _attr, _val) {
		if(arguments.length == 2){
			this.put(arguments[0],arguments[1]);
		}else{
			try{   
		    for (var i = 0; i < this.elements.length; i++) {
		     if (this.elements[i].key == _key) {
		       this.elements[i].value[_attr] = _val ;
		     }
		    }
		   }catch(e) {
	   		}
		}
		
		
	}
	this.arrayAddElm = function(_key, _attr, _val) {
		try{   
		    for (var i = 0; i < this.elements.length; i++) {
		     if (this.elements[i].key == _key) {
		       this.elements[i].value.attr[_attr].push(_val);
		     }
		    }
		   }catch(e) {
	   }
	}
	this.arrayDelElm = function(_key, _attr, _val) {
		try{   
		    for (var i = 0; i < this.elements.length; i++) {
		     if (this.elements[i].key == _key) {
		      	for(var index = 0; index < this.elements[i].value.attr[_attr].length; index++){
		      		if(this.elements[i].value.attr[_attr][index] == _val){
		      			this.elements[i].value.attr[_attr].splice(index, 1);
		      		}
		      	}
		     }
		    }
		   }catch(e) {
	   }
	}
	/**
	 * 获取指定KEY的元素值VALUE，并且覆盖VALUE的值,若没有得到指定KEY的元素值VALUE，则加入到map中
	 * @param {} _key
	 * @param {} _val
	 */
	this.overwrite = function(_key, _val){
		try{   
			var flag = false;
		    for (var i = 0; i < this.elements.length; i++) {
		     if (this.elements[i].key == _key) {
		       this.elements[i].value = _val ;
		       flag = true;
		     }
		    }
		    if(!flag){
		    	this.put(_key,_val);
		    }
		   }catch(e) {
	   }
	}
	/**
	* 获取指定索引的元素（使用element.key，element.value获取KEY和VALUE），失败返回NULL
	* @param {Object} _index
	*/
	this.element = function(_index) {
	   if (_index < 0 || _index >= this.elements.length)
	   {
	    return null;
	   }
	   return this.elements[_index];
	}
	
	/**
	* 判断MAP中是否含有指定KEY的元素
	* @param {Object} _key
	*/
	this.containsKey = function(_key) {
	   var bln = false;
	   try {
	    for (var i = 0; i < this.elements.length; i++) { 
	     if (this.elements[i].key == _key){
	      bln = true;
	     }
	    }
	   }catch(e) {
	    bln = false;    
	   }
	   return bln;
	}
	    
	/**
	* 判断MAP中是否含有指定VALUE的元素
	* @param {Object} _value
	*/
	this.containsValue = function(_value) {
	   var bln = false;
	   try {
	    for (var i = 0; i < this.elements.length; i++) { 
	     if (this.elements[i].value == _value){
	      bln = true;
	     }
	    }
	   }catch(e) {
	    bln = false;    
	   }
	   return bln;
	}
	
	/**
	* 获取MAP中所有VALUE的数组（ARRAY）
	*/
	this.values = function() {
	   var arr = new Array();
	   for (var i = 0; i < this.elements.length; i++) { 
	    arr.push(this.elements[i].value);
	   }
	   return arr;
	}
	
	/**
	* 获取MAP中所有KEY的数组（ARRAY）
	*/
	this.keys = function() {
	   var arr = new Array();
	   for (var i = 0; i < this.elements.length; i++) { 
	    arr.push(this.elements[i].key);
	   }
	   return arr;
	}
}
 
 
 var messageMap = new MessageMap();
 
 
 var dialogCount = 0;
 

 function showMessages(data){
 	 
 	  dialogCount++;
 	  messageMap.put('messageData'+dialogCount,data); //存储消息的map，更多时需要用到
 	 // var widthx =  (parseInt($("body").width()) - 1000) /2 ; 
 	  var widthx = (parseInt($("body").width()) - 1000) /2 ; 
 	  var dataHtml = "";
 	  var dataArr = data.split("@@@");
 	  var length = dataArr.length;
 	  var contentWidth = 280;
 	  if(length > 7){
 	  	length = 7;
 	  }
 	  for(var i=0;i<length;i++){
 	  	dataHtml = dataHtml + "<div style='color:#333;white-space: nowrap;text-overflow: ellipsis;overflow:hidden;width:"+contentWidth+"px;' >"+dataArr[i]+"</div>";
 	  }
 	  if(dataArr.length > 7){
 	  	dataHtml = dataHtml + "<div style='text-align:right;padding-right:10px;color:#20a0ff;cursor:pointer' onclick='closeCurrentWindow(\""+dialogCount+"\");showMoreMessage(\""+dialogCount+"\");'> more... </div>"
 	  }
 	   
				
				var fxdjDiv = 
					"<div id=\"fxdjDiv"+dialogCount+"\" " +
					"	class=\"k-popwin-widget k-popwin-window\" " +
					"	data-role=\"draggable\" " +
					"	style=\"z-index: 9999; position: absolute; display:none; bottom: 1px; right: "+widthx+"px; width: 310px; height: 200px;\">" +
					"	<div class=\"k-popwin-window-titlebar k-popwin-header\">" +
					"		<table class=\"k-popwin-window-header-table\" cellspacing=\"0\">" +
					"			<tbody><tr><td class=\"k-popwin-move\"></td></tr></tbody>" +
					"		</table>" +
					"		<span class=\"k-popwin-window-title k-popwin-move\"> Message Tips </span>" +
					"		<div class=\"k-popwin-window-actions\">" +
					"			<a role=\"button\" class=\"k-popwin-window-action k-popwin-link\" style=\"display:inline-block\">" +
					"				<span onclick=\"showfxdjDiv(false,'"+dialogCount+"');\" role=\"close\" " +
					"					class=\"k-popwin-icon k-popwin-i-close\"></span>" +
					"			</a>" +
					"		</div>" +
					"	</div>" +
					"	<div data-role=\"window\" style=\"padding:10px; overflow:auto;\" " +
					"		class=\"k-popwin-window-content k-popwin-content\" " +
					"		tabindex=\"0\" role=\"dialog\" " +
					"		aria-labelledby=\"window_wnd_title\" " +
					"		style=\"display: block; overflow: hidden;\">" +
					"		<div>" +
						     dataHtml
					"		+</div>"+
					"	</div>" +
					"</div>";
				
				var fxdjIframe = "<iframe id=\"fxdjIframe"+dialogCount+"\" "+
					"	style=\"z-index: 9990; width: 300px; height: 240px; display:none;" +
					"position: absolute; bottom: 1px; right: 1px;" +
					"background-color:#FFFFFF;filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacity:0;\">" +
					"</iframe>"
					
				
				/*if(control && 0<control.length){
					$("#fxdjDiv").remove();
					$("#fxdjIframe").remove();
				}*/
				$(document.body).append(fxdjIframe);
				$(document.body).append(fxdjDiv);
				var control = $("#fxdjDiv"+dialogCount);
				//control.hide();
				showfxdjDiv(true,dialogCount);
				/*setTimeout(function(){
					var over = control.attr("over");
					if(over && over ==1){
						return;
					}
					showfxdjDiv(false,dialogCount);
				},5000);
				
				control.mouseover(function(){
					control.attr("over",1);
					control.stop(true,true).show();
				});
				control.mouseout(function(){
					control.attr("over",0);
					setTimeout(function(){
						var over = control.attr("over");
						if(over && over ==1){
							return;
						}
						showfxdjDiv(false,dialogCount);
					},3000);
				});*/
			
 }
 
 function showfxdjDiv(display,count){
	var control = $("#fxdjDiv"+count);
	if(!control){return;}
	if(display){
		$("#fxdjIframe"+count).slideDown(1500);
		control.slideDown(2000);
	}else{
		control.slideUp(2000);
		$("#fxdjIframe"+count).slideUp(2000);
	}
}
function closeCurrentWindow(count){
	$("#fxdjDiv"+count).remove();
	$("#fxdjIframe"+count).remove();
}
function showMoreMessage(dialogFlag){
	
 	  var widthx = (parseInt($("body").width()) - 1000) /2 ; 
 	  var height = 600;
 	  var dataHtml = "";
 	  var key = 'messageData'+dialogFlag
 	  var data = messageMap.get(key);
 	  var dataArr = data.split("@@@");
 	  var length = dataArr.length;
 	  var contentWidth = 980;
 	
 	  for(var i=0;i<length;i++){
 	  	dataHtml = dataHtml + "<div style='height:30px;line-height:30px;color:#333;white-space: nowrap;text-overflow: ellipsis;overflow:hidden;width:"+contentWidth+"px;' >"+dataArr[i]+"</div>";
 	  }
 	 			
				var fxdjDivMore = 
					"<div id=\"fxdjDivMore"+dialogFlag+"\" " +
					"	class=\"k-popwin-widget k-popwin-window\" " +
					"	data-role=\"draggable\" " +
					"	style=\"z-index: 9999; position: absolute; top:40px;right: "+widthx+"px; width: 1000px; height:"+height+"px;\">" +
					"	<div class=\"k-popwin-window-titlebar k-popwin-header\">" +
					"		<table class=\"k-popwin-window-header-table\" cellspacing=\"0\">" +
					"			<tbody><tr><td class=\"k-popwin-move\"></td></tr></tbody>" +
					"		</table>" +
					"		<span class=\"k-popwin-window-title k-popwin-move\"> Message Tips </span>" +
					"		<div class=\"k-popwin-window-actions\">" +
					"			<a role=\"button\" class=\"k-popwin-window-action k-popwin-link\" style=\"display:inline-block\">" +
					"				<span onclick=\"closeMoreMessageDialog('"+dialogFlag+"');\" role=\"close\" " +
					"					class=\"k-popwin-icon k-popwin-i-close\"></span>" +
					"			</a>" +
					"		</div>" +
					"	</div>" +
					"	<div data-role=\"window\" style=\"padding:10px; overflow:auto;\" " +
					"		class=\"k-popwin-window-content k-popwin-content\" " +
					"		tabindex=\"0\" role=\"dialog\" " +
					"		aria-labelledby=\"window_wnd_title\" " +
					"		style=\"display: block; overflow: hidden;\">" +
					"		<div>" +
						     dataHtml
					"		+</div>"+
					"	</div>" +
					"</div>";
				
				var fxdjIframeMore = "<iframe id=\"fxdjIframeMore"+dialogFlag+"\" "+
					"	style=\"z-index: 9990; width: 1000px; height:"+height+"px; " +
					"position: absolute; top:40px; right: "+widthx+"px;" +
					"background-color:#FFFFFF;filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacity:0;\">" +
					"</iframe>"
					
				
				$(document.body).append(fxdjIframeMore);
				$(document.body).append(fxdjDivMore);
				
				
	
}
function closeMoreMessageDialog(dialogFlag){
	$("#fxdjIframeMore"+dialogFlag).remove();
	$("#fxdjDivMore"+dialogFlag).remove();
}
		