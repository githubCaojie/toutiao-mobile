
 //var defaultCloseFirstTask = true;
Array.prototype._has = function(e){
  for(var i=0,j; j=this[i]; i++){
    if(j==e){return true;}
  }
  return false;
}

if (!Array.prototype.forEach) {

  Array.prototype.forEach = function(callback, thisArg) {

    var T, k;

    if (this === null) {
      throw new TypeError(' this is null or not defined');
    }

    var O = Object(this);
    var len = O.length >>> 0;

    if (typeof callback !== "function") {
      throw new TypeError(callback + ' is not a function');
    }

    if (arguments.length > 1) {
      T = thisArg;
    }

    k = 0;
    while (k < len) {

      var kValue;
      if (k in O) {
        kValue = O[k];
        callback.call(T, kValue, k, O);
      }
      k++;
    }
  };
}

if (!Array.prototype.some)
{
 Array.prototype.some = function(fun /*, thisp*/)
 {
  var len = this.length;
  if (typeof fun != "function")
   throw new TypeError();
 
  var thisp = arguments[1];
  for (var i = 0; i < len; i++)
  {
   if (i in this &&
     fun.call(thisp, this[i], i, this))
    return true;
  }
 
  return false;
 };
}
if (!Array.prototype.every) 
{
  Array.prototype.every = function(fun /*, thisp*/)
  {
    var len = this.length;
    if (typeof fun != "function")
      throw new TypeError();
    var thisp = arguments[1];
    for (var i = 0; i < len; i++)
    {
      if (i in this &&
          !fun.call(thisp, this[i], i, this))
        return false;
    }
    return true;
  };
}
if (!Array.prototype.filter)
{
  Array.prototype.filter = function(fun /*, thisp*/)
  {
    var len = this.length;
    if (typeof fun != "function")
      throw new TypeError();
    var res = new Array();
    var thisp = arguments[1];
    for (var i = 0; i < len; i++)
    {
      if (i in this)
      {
        var val = this[i]; // in case fun mutates this
        if (fun.call(thisp, val, i, this))
          res.push(val);
      }
    }
    return res;
  };
}
if (!Array.prototype.map)
{
  Array.prototype.map = function(fun /*, thisp*/)
  {
    var len = this.length;
    if (typeof fun != "function")
      throw new TypeError();
    var res = new Array(len);
    var thisp = arguments[1];
    for (var i = 0; i < len; i++)
    {
      if (i in this)
        res[i] = fun.call(thisp, this[i], i, this);
    }
    return res;
  };
}

if (typeof Object.assign != 'function') {
  (function () {
	Object.assign = function (target) {
	 if (target === undefined || target === null) {
	   throw new TypeError('Cannot convert undefined or null to object');
	 }
	
	 var output = Object(target);
	 for (var index = 1; index < arguments.length; index++) {
	   var source = arguments[index];
	   if (source !== undefined && source !== null) {
	     for (var nextKey in source) {
	       if (source.hasOwnProperty(nextKey)) {
	         output[nextKey] = source[nextKey];
	       }
	     }
	   }
	 }
	 return output;
	};
})();
}

String.prototype.startWith=function(str){     
  var reg=new RegExp("^"+str);     
  return reg.test(this);        
} 
var $browserversion = $.browser.version;
var $msie = $.browser.msie?$.browser.msie:false;
if(!$msie){
	if($browserversion == 11){
		$msie = true;
	}
}

var $firefox = $.browser.mozilla?$.browser.mozilla:false;
if($firefox){
	if($browserversion == 11){
		$firefox = false;
	}
}
var $webkit = $.browser.webkit?$.browser.webkit:false;



//动态刷新首页的模块
function refreshDeskWidget(title){
	 var browserTypes = new BrowserTypes();
	 var parentWin = window.parent;
	  var parentNumber=0;  
	  while(parentWin!=null){
         if(browserTypes.Sys.chrome || browserTypes.Sys.firefox){//chrome浏览器
	  	  if(parentWin.frames["0_bodyFrame"]!=null ){ 
	  		  parentWin.frames["0_bodyFrame"].widgetsDiv.refreshDeskWidget(title);
	  		break;
	  	  }
	   }else{  
		   
 	     if(parentWin.frames["0_bodyFrame"].widgetsDiv!=null && parentWin.frames["0_bodyFrame"].widgetsDiv!=undefined){
 	    	parentWin.frames["0_bodyFrame"].widgetsDiv.refreshDeskWidget(title);
 	    	 break;
 	     }
	   }
         parentNumber=parentNumber+1;
         parentWin = parentWin.parent;
         if(parentNumber>=20){
             break;
           }
	  }
	  
}
//获取某个小部件的宽度
function getDeskWidgetWidth(title){
	 var  widgetwidth=0;
	 var browserTypes = new BrowserTypes();
	 var parentWin = window.parent;
	  var parentNumber=0;  
	  while(parentWin!=null){
        if(browserTypes.Sys.chrome || browserTypes.Sys.firefox){//chrome浏览器
	  	  if(parentWin.frames["0_bodyFrame"]!=null ){ 
	  		widgetwidth=parentWin.frames["0_bodyFrame"].widgetsDiv.getWidgetWidth(title);
	  		break;
	  	  }
	   }else{  
		   
	     if(parentWin.frames["0_bodyFrame"].widgetsDiv!=null && parentWin.frames["0_bodyFrame"].widgetsDiv!=undefined){
	    	 widgetwidth=parentWin.frames["0_bodyFrame"].widgetsDiv.getWidgetWidth(title);
	    	 break;
	     }
	   }
        parentNumber=parentNumber+1;
        parentWin = parentWin.parent;
        if(parentNumber>=20){
            break;
          }
	  }
	  return widgetwidth;
}

//页面调用关闭extdrop的方法
function  closeExtdrop(value,label){
	 var parentWin = window;
	  var parentNumber=0;  
	  while(parentWin!=null){
		  var  hasiframe=parentWin.$("iframe[id$='_extiframe']").length;
		  if(hasiframe>0){
			  var extdropid=parentWin.$("iframe[id$='_extiframe']").attr("extdropid");
			  parentWin.eval(extdropid).selectItem(value,label);
			  break;
		  }else{
			  if(parentNumber>=20){
		          break;
		        }
		        parentNumber=parentNumber+1;
		        parentWin = parentWin.parent;
		  }
	  }
}


//在任务栏显示打开的新的任务(id任务的唯一编号,name任务的名称)
function openTabTask(id,name,url,flag,datawrap,appContext){
  var parentWin = window;
  var parentNumber=0;  
  while(parentWin!=null){
     if(parentWin.MultitaskPanelManager && parentWin.MultitaskPanelManager.addMenuTab){
      	parentWin.MultitaskPanelManager.addMenuTab(id,name,url,flag,datawrap,localStorage.defaultCloseFirstTask,appContext);         
       break;
     }else{
        if(parentNumber>=20){
          break;
        }
        parentNumber=parentNumber+1;
        parentWin = parentWin.parent;
     }
  }
	  //如果没有加入到多任务框架中，可能是直接调用open_window打开的窗口
  if(parentNumber>=20){    
    parentWin = window.opener;
       if (parentWin == null){
          parentWin = window.parent.opener;
       }
       parentNumber=0;
       while(parentWin!=null){           
          if(parentWin.MultitaskPanelManager.addMenuTab){ 
             parentWin.MultitaskPanelManager.addMenuTab(id,name,url,flag,datawrap,localStorage.defaultCloseFirstTask,appContext);           
             break;
          }else{
             if(parentNumber>=20){
                alert("此窗体没有添加到多任务tab框架,不能调用openTabTask方法！");
               break;
              }
             parentNumber=parentNumber+1;
             parentWin = parentWin.parent;
          }
      }
   }

}
/***关闭当前任务，显示首页***********/
function showMainPage(isCloseOtherTask){
	//在主题3时单击桌面时调用该方法，isCloseOtherTask参数为false,不关闭当前已经打开的任务
	if(isCloseOtherTask == undefined){//是否关闭其它任务标识
		closeTabTask('','win','destroy');
	}
	
	  var parentWin = window.parent;
	  var parentNumber=0;  
	  while(parentWin!=null){
	     if(parentWin.MultitaskPanelManager && parentWin.MultitaskPanelManager.showMainPage){
	      	parentWin.MultitaskPanelManager.showMainPage(isCloseOtherTask);         
	       break;
	     }else{
	        if(parentNumber>=20){
	          break;
	        }
	        parentNumber=parentNumber+1;
	        parentWin = parentWin.parent;
	     }
	  }
	  //如果没有加入到多任务框架中，可能是直接调用open_window打开的窗口
	  if(parentNumber>=20){    
	    parentWin = window.opener;
	       if (parentWin == null){
	          parentWin = window.parent.opener;
	       }
	       parentNumber=0;
	       while(parentWin!=null){           
	          if(parentWin.MultitaskPanelManager.showMainPage){           
	             parentWin.MultitaskPanelManager.showMainPage();           
	             break;
	          }else{
	             if(parentNumber>=20){
	                alert("此窗体没有添加到多任务tab框架,不能调用openTabTask方法！");
	               break;
	              }
	             parentNumber=parentNumber+1;
	             parentWin = parentWin.parent;
	          }
	      }
	   }
	
}
//关闭所有的弹窗
function closeAllPopwindow(){
	var topWin = null;
	if(popwindowOverMultitask == 'true'){
		var multitaskId = "";
		var openMultitask = $("div[multitask='true']",$(window.top.document));
		openMultitask.each(function(){
			if(this.style.top == 0 || this.style.top == "0px"){//初始化当前多任务里打开弹出窗需要的信息
				multitaskId = $(this).attr("id");
				return false;
			}
		})
		topWin = $("#"+multitaskId.split("_")[0]+"_bodyFrame",$(window.top.frames['mainpageIframe'].document))[0].contentWindow;
	}else{
		topWin = window.top
	}
	$("iframe.popwin-window-iframe",$(topWin.document)).each(function(){
		$(this).remove();
	})
	$("#_DialogBGDiv",$(topWin.document))[0].style.display = "none";
	$("div.popwin-window",$(topWin.document)).each(function(){
		$(this).remove();
	})
	
}
/********动态关闭多任务项,如果是关闭当前任务项name='win',url='destroy'，如果通过id来动态关闭多任务项，需要将url设置为空**********/

function closeTabTask(id,name,url){
  var parentWin = window.parent;
  var parentNumber=0;  
  while(parentWin!=null){
       
     if(parentWin.MultitaskPanelManager && parentWin.MultitaskPanelManager.closeMenuPage){
      	parentWin.MultitaskPanelManager.closeMenuPage(id,name,url);         
       break;
     }else{
        if(parentNumber>=20){
          break;
        }
        parentNumber=parentNumber+1;
        parentWin = parentWin.parent;
     }
  }
  //如果没有加入到多任务框架中，可能是直接调用open_window打开的窗口
  if(parentNumber>=20){      
     parentWin = window.opener;
     if (parentWin == null){
        parentWin = window.parent.opener;
     }
     parentNumber=0;
     while(parentWin!=null){           
        if(parentWin.MultitaskPanelManager && parentWin.MultitaskPanelManager.closeMenuPage){           
             parentWin.MultitaskPanelManager.closeMenuPage(id,name,url);           
          break;
        }else{
           if(parentNumber>=20){
             alert("此窗体没有添加到多任务tab框架,不能调用closeTabTask方法进行关闭！");
             break;
           }
           parentNumber=parentNumber+1;
           parentWin = parentWin.parent;
        }
     }
     if ((parentWin == null) && (parentNumber < 20)){
        alert("此窗体没有添加到多任务tab框架,不能调用closeTabTask方法！" + parentNumber );
     }
  }
}


String.prototype.indexOfForSpecifiedNum = function(str, time){
	var handleString = this;
	var position = 0;
	try{
		for(var count = 0; count < time; count++){
			position += handleString.indexOf(str) + 1;
			handleString = handleString.slice(handleString.indexOf(str) + 1, handleString.length);
		}
	}
	catch(e){
	}
	finally{
	}
	return position;
};

/********动态关闭所有的已经打开的多任务项**********/

function closeAllTabTask(){
  var parentWin = window.parent;
  var parentNumber=0;  
  while(parentWin!=null){
       
     if(parentWin.MultitaskPanelManager && parentWin.MultitaskPanelManager.closeAllPage){
      	parentWin.MultitaskPanelManager.closeAllPage();         
       break;
     }else{
        if(parentNumber>=20){
          break;
        }
        parentNumber=parentNumber+1;
        parentWin = parentWin.parent;
     }
  }
  //如果没有加入到多任务框架中，可能是直接调用open_window打开的窗口
  if(parentNumber>=20){      
     parentWin = window.opener;
     if (parentWin == null){
        parentWin = window.parent.opener;
     }
     parentNumber=0;
     while(parentWin!=null){           
        if(parentWin.MultitaskPanelManager && parentWin.MultitaskPanelManager.closeAllPage){           
             parentWin.MultitaskPanelManager.closeAllPage();           
          break;
        }else{
           if(parentNumber>=20){
             alert("没有找到多任务框架，不能调用closeAllPage方法进行关闭！");
             break;
           }
           parentNumber=parentNumber+1;
           parentWin = parentWin.parent;
        }
     }
     if ((parentWin == null) && (parentNumber < 20)){
        alert("没有找到多任务框架，不能调用closeAllPage方法进行关闭！" + parentNumber );
     }
  }
}
//获取获取当前任务
function getFrameworkActiveTask(){
  var parentWin = window.parent;
  var parentNumber=0;
  var activeTaskObj={};  
  while(parentWin!=null){
       
     if(parentWin.MultitaskPanelManager && parentWin.MultitaskPanelManager.getFrameworkActiveTask){
      	activeTaskObj=parentWin.MultitaskPanelManager.getFrameworkActiveTask();         
       break;
     }else{
        if(parentNumber>=20){
          break;
        }
        parentNumber=parentNumber+1;
        parentWin = parentWin.parent;
     }
  }
  //如果没有加入到多任务框架中，可能是直接调用open_window打开的窗口
  if(parentNumber>=20){      
     parentWin = window.opener;
     if (parentWin == null){
        parentWin = window.parent.opener;
     }
     parentNumber=0;
     while(parentWin!=null){           
        if(parentWin.MultitaskPanelManager && parentWin.MultitaskPanelManager.getFrameworkActiveTask){           
            activeTaskObj= parentWin.MultitaskPanelManager.getFrameworkActiveTask();           
          break;
        }else{
           if(parentNumber>=20){
             alert("此窗体没有添加到多任务tab框架,不能调用getFrameworkActiveTask方法！");
             break;
           }
           parentNumber=parentNumber+1;
           parentWin = parentWin.parent;
        }
     }
     if ((parentWin == null) && (parentNumber < 20)){
        alert("此窗体没有添加到多任务tab框架,不能调用getFrameworkActiveTask方法！" + parentNumber );
     }
    
  }
	 return activeTaskObj;
	
}
//获取已经执行的任务
function getFrameworkTasks(){
  var parentWin = window.parent;
  var parentNumber=0;
   var  frameworkTasks=[];
  while(parentWin!=null){
     if(parentWin.MultitaskPanelManager && parentWin.MultitaskPanelManager.getFrameworkTasks){
      	frameworkTasks=parentWin.MultitaskPanelManager.getFrameworkTasks();         
       break;
     }else{
        if(parentNumber>=20){
          break;
        }
        parentNumber=parentNumber+1;
        parentWin = parentWin.parent;
     }
  }
  
  //如果没有加入到多任务框架中，可能是直接调用open_window打开的窗口
  if(parentNumber>=20){      
     parentWin = window.opener;
     if (parentWin == null){
        parentWin = window.parent.opener;
     }
     parentNumber=0;
     while(parentWin!=null){           
        if(parentWin.MultitaskPanelManager && parentWin.MultitaskPanelManager. getFrameworkTasks){           
            frameworkTasks= parentWin.MultitaskPanelManager.getFrameworkTasks();           
          break;
        }else{
           if(parentNumber>=20){
             alert("此窗体没有添加到多任务tab框架,不能调用 getFrameworkTasks方法！");
             break;
           }
           parentNumber=parentNumber+1;
           parentWin = parentWin.parent;
        }
     }
     if ((parentWin == null) && (parentNumber < 20)){
        alert("此窗体没有添加到多任务tab框架,不能调用 getFrameworkTasks方法！" + parentNumber );
     }
    
  }
  
     return  frameworkTasks;
	
}

//字符串转化为xml
function toXmlDom(source){
    var xmlDoc = null;
    if (window.ActiveXObject) {
        var ARR_ACTIVEX = ["MSXML4.DOMDocument","MSXML3.DOMDocument","MSXML2.DOMDocument","MSXML.DOMDocument","Microsoft.XmlDom"];
        var XmlDomflag = false;
        for (var i = 0;i < ARR_ACTIVEX.length && !XmlDomflag ;i++) {
            try {
                var objXML = new ActiveXObject(ARR_ACTIVEX[i]);
                xmlDoc = objXML;
                XmlDomflag = true;
            } catch (e) {
            }
        }
        if (xmlDoc) { 	
            xmlDoc.async = false;
            xmlDoc.loadXML(source);
        }
    }else{
	  var parser=new DOMParser();
	  var xmlDoc=parser.parseFromString(source,"text/xml");
	}
    return xmlDoc;
}
//xml转化为Json
function xmlToJson(xml) {
	// Create the return object
	var obj = {};
	obj.selected=false;//给前台用的
	if (xml.nodeType == 1) {// element
		// do attributes
		if (xml.attributes.length > 0) {
			for (var j = 0; j < xml.attributes.length; j++) {
				var attribute = xml.attributes.item(j);
				obj[attribute.nodeName] = attribute.nodeValue;
			}
		}
	} else if (xml.nodeType == 3) {// text
		obj = xml.nodeValue;
	}
	// do children
	if (xml.hasChildNodes()) {
		for (var i = 0; i < xml.childNodes.length; i++) {
			var item = xml.childNodes.item(i);
			var nodeName = "children";//item.nodeName;
			if ( typeof (obj[nodeName]) == "undefined") {
				obj[nodeName] = xmlToJson(item);
			} else {
				if ( typeof (obj[nodeName].length) == "undefined") {
					var old = obj[nodeName];
					obj[nodeName] = [];
					obj[nodeName].push(old);
				}
				obj[nodeName].push(xmlToJson(item));
			}
		}
	}else{
		obj.children = []; //没有孩子节点时，创建一个空的children,给vue.js树使用
	}
	if(xml.nodeType == 9)//document,不需要第一个children
		obj=obj.children;
	return obj;
};


/**
 * 判断浏览器类型
 * @returns {BrowserTypes}
 */
function BrowserTypes () {
	this.Sys = {};
	var ua = navigator.userAgent.toLowerCase();
	var s;
	
	(s = ua.match(/msie ([\d.]+)/)) ? this.Sys.ie = s[1] : (s = ua
			.match(/firefox\/([\d.]+)/)) ? this.Sys.firefox = s[1] : (s = ua
			.match(/chrome\/([\d.]+)/)) ? this.Sys.chrome = s[1] : (s = ua
			.match(/opera.([\d.]+)/)) ? this.Sys.opera = s[1] : (s = ua
			.match(/version\/([\d.]+).*safari/)) ? this.Sys.safari = s[1] : 0;
}
/**
 * 获取Div滚动条的滚动的宽度与高度
 * @param ob
 * @returns
 */


/**
*添加用于定位的方法,参数widget是要定位元素的jQuery对象,caller是相对定义的文本框或者div的jQuery对象,isOverload表示是否覆盖原caller(gridtextarea时会调用 )
*/
function setPosition(widget, caller,id,isextdrop,isOverload) { 
		var el = widget,downOffset = 0;
		var widgetHeight = widget.height();
		el[0].style.position = 'absolute';
		var browserTypes = new BrowserTypes();
		var referrer = caller;
		var  referoffsetLeft=0;
		var  referoffsetTop=0;
		
		referoffsetLeft=referrer.offset().left;
		referoffsetTop=referrer.offset().top;
	
		var dims = {
			refX: referoffsetLeft,
			refY: referoffsetTop,
			refW: referrer.getTotalWidth(),
			refH: referrer.getTotalHeight()+4
		};	
		if(isOverload != undefined){
			dims.refH = 0;
		}else{
			downOffset = dims.refH;
		}
		var xVal, yVal;
		 var helper ;
		 var helperIframe;
		if($("#positionHelper"+id).length>0){
			var  helperleft=0;
	     	helperleft=dims.refX;
	     	
			$("#positionHelper"+id).css({ position: 'absolute', display:'block',left: helperleft, top: dims.refY+downOffset, width: dims.refW, height: dims.refH ,zIndex:9999});
			helperIframe = $("#positionHelperIframe"+id);
			helperIframe.css({ position: 'absolute', left: helperleft, display:'block',top: dims.refY+downOffset, width: dims.refW, height: widgetHeight,zIndex:9998 });
			
		}else{
		
			if($("div[key='idflag']").length > 0){//解决ajaxtable创建分页等执行两遍的bug
				$("div[key='idflag']").each(function(){
					var gridId = $(this).attr("keyid");
					$("#script"+gridId).remove();
				})
				
			}
		   helperIframe = $('<iframe    class="positionHelper"  frameborder="0" ></iframe>');
		   helperIframe.css({ position: 'absolute', left: dims.refX, top: dims.refY+downOffset, width: dims.refW, height: widgetHeight,zIndex:9998 });
		   helperIframe.attr("id","positionHelperIframe"+id);
		   helperIframe.attr("name","positionHelperIframe"+id);
		   helperIframe.appendTo("body");
		   el.appendTo("body") ;
		   helper=$('<div    class="positionHelper" ></div>');
		   helper.css({ position: 'absolute', left: dims.refX, top: dims.refY+downOffset, width: dims.refW, height: dims.refH,zIndex:9999 });
		   helper.attr("id","positionHelper"+id);
		   helper.attr("name","positionHelper"+id);
		  
		   el.wrap(helper);
		}
	 	xVal = 0; 		
		yVal = dims.refH;
		//el.css({ bottom: 'auto', top: yVal });
		el.css({ bottom: 'auto', top: 0 });
		
		if (!fitVertical(caller,el)) {
			//判断上面是不是也能显示全下拉，显示不全，修改下拉的显示高度
			
			if(fitverticalbuttom(caller,el)){ 
				var topVal = $(caller).offset().top;
					var  elHeight=getWindowHeight() + getScrollTop()-24-$(caller).offset().top;
					el.css("height",elHeight);
					el.css({ bottom: 'auto', top: 0 });
					$("#positionHelper"+id).css("height",elHeight);
					$("#positionHelperIframe"+id).css("height",elHeight);
					if(isextdrop == 'droptree'){
						$("#"+id+"_frame").css("height",elHeight);
						$("#"+id+"_table").css("height",elHeight);
					}
					
			}else{
				if(isOverload != undefined){
					el.css({ top: 'auto', bottom: -referrer.getTotalHeight() });
				}else{

					$("#positionHelper"+id).css("top",dims.refY)
					el.css({ top: 'auto', bottom: yVal });
					if(isOverload == undefined){
						var iframeTop = dims.refY - widgetHeight;
						helperIframe.css({ top: iframeTop });
					}
				}
			}
			
		}
		
		el.css({ right: 'auto', left: xVal });
		if (!fitHorizontal(caller,el)) {
			el.css({ left: 'auto', right: xVal });
		}
}


function fitVertical(el, divEl, topOffset){
	var topVal = parseInt(topOffset) || $(el).offset().top;
	 
	return (topVal + $(divEl).height()+40 <= getWindowHeight() + getScrollTop() && topVal - getScrollTop() >= 0); //将24改成40吧，现在input一般都比24高
};
function fitverticalbuttom(el, divEl, topOffset){
	var topVal = parseInt(topOffset) || $(el).offset().top;
	return (topVal - $(divEl).height() <0);
};

function fitHorizontal(el,divEl, leftOffset){
	var leftVal = parseInt(leftOffset) || $(el).offset().left;
	return (leftVal + $(divEl).width() <= getWindowWidth() + getScrollLeft() && leftVal - getScrollLeft() >= 0);
};
jQuery.fn.getTotalWidth = function(){
	return $(this).width() ;
};

jQuery.fn.getTotalHeight = function(){
	return $(this).height() ;
};
function getWindowHeight(){
	var de = document.documentElement;
	return self.innerHeight || (de && de.clientHeight) || document.body.clientHeight;
};

function getWindowWidth(){
	var de = document.documentElement;
	return self.innerWidth || (de && de.clientWidth) || document.body.clientWidth;
};
function getScrollTop(){
	return self.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
};

function getScrollLeft(){
	return self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft;
};


var isPopCrossFlag = false;//当前弹出窗是否跨域
try{
	var windowTopFlag = window.top.document;
}catch(e){
	isPopCrossFlag = true;
}


Array.prototype._max = function(){   //最大值
 return Math.max.apply({},this) 
} 
Array.prototype._min = function(){   //最小值
 return Math.min.apply({},this) 
}



// 取得串的字符长度
String.prototype.charLength = function() {
	var patten = /[^\x00-\xff]/g;
	return this.replace(patten, "aa").length;
};


var isCrossDomain = {
	isCrossDomainFlag:false,
	curTopWindowRef:null,
	getUrlVars:function(){
	     var vars=[],hash;
	     var hashes=window.location.href.slice(window.location.href.indexOf('?' )+ 1).split( '&' );
	     for ( var   i = 0; i < hashes.length; i++)
	      {
	        hash = hashes[i].split( '=' );
	            vars.push(hash[0]);
	            vars[hash[0]] = hash[1];
	       }
	        return vars;
	},
	getUrl:function(name, val){
		var url = window.location.href.slice(0,window.location.href.indexOf('?' )+1);
		var arr = this.getUrlVars();
		for(var i=0;i<arr.length;i++){
			if(i!=0){
				url +="&";
			}
			if(arr[i] == name){
				url += ""+name+"="+val;
			}else{
				url += ""+arr[i]+"="+arr[arr[i]];
			}
		}
		return url;
	},
	getUrlVar:function(name){
       return this.getUrlVars()[name];
	},
	getIsCrossDomainFlag:function(){
		if(isCrossDomain.getUrlVar("isCrossDomain") == "true"){
			isCrossDomain.isCrossDomainFlag = true;
			return true;
		}
		return false;
	},
	removeMaskDiv:function(){
		this.getIsCrossDomainFlag();
		var context = null;
		var w = window;
//		alert(window.location.href)
		if(this.getUrlVar("parentIndex")!=null){
			for(var i=0;i<this.getUrlVar("parentIndex");i++){
				w = w.parent;
			}
		}
		
		var isPopCrossFlag = false;//当前弹出窗是否跨域
		try{
			var windowTopFlag = window.top.document;
		}catch(e){
			isPopCrossFlag = true;
		}

		if(isPopCrossFlag){
			var currentWindow = null;
			try{
			 var parentWin = window.parent;
			  while(parentWin!=null){		    
			        parentWin = parentWin.parent;			     
			  }
			}catch(e){
				currentWindow = window
			}
		}
		
		if(isPopCrossFlag){
			context = currentWindow.document;
			isCrossDomain.curTopWindowRef = currentWindow;
		}else{
			isCrossDomain.curTopWindowRef = window.top;
		}
		if($msie){
			$(document).ready(function(){
				$('input[type=text]').click(function(){
					try{
						event.srcElement.focus();
						var s = document.selection.createRange();
						s.select();
					}catch(e){
						
					}
				})
			})
		}
	}
}

isCrossDomain.removeMaskDiv();

function closeMenuPage(code){
	isCrossDomain.curTopWindowRef.MultitaskPanelManager.closeMenuPage(code);
}

/**
 * 跨浏览器工具类
 * 
 * @param {}
 *            event
 * @return {}
 */
function crossBrowserUtils(e, o) {
	return {
		getEventTarget : function() {
			return o || e.target || e.srcElement;
		},
		getTargetOffsetProp : function() {
			var target = this.getEventTarget(),
				pos = this.getTargetInfo(),
				offsetX = $webkit ? e.offsetX : pos.x - getAbsolutePosition(target).left,
				offsetY = $webkit ? e.offsetY : pos.y - getAbsolutePosition(target).top
			return {
				offsetX : offsetX,
				offsetY : offsetY
			};
		},
	    preventDefault : function(){
	        if(e.preventDefault){
	            e.preventDefault();
	        }else{
	            e.returnValue = false;
	        }
	    },
	    stopPropagation : function(){
	        if(e.stopPropagation){
	            e.stopPropagation();
	        }else{
	            e.cancelBubble = true;
	        }
	    },
	    getScrollInfo : function(){
	    	return {
	    		scrollLeft : document.body.scrollLeft || (document.documentElement && document.documentElement.scrollLeft),
	    		scrollTop : document.body.scrollTop || (document.documentElement && document.documentElement.scrollTop),
	    		innerWidth: window.innerWidth || (document.documentElement && document.documentElement.scrollWidth),
	    		innerHeight: window.innerHeight || (document.documentElement && document.documentElement.clientHeight)
	    	}
	    },
	    /**
		 * 获得目标对象当前位置（计算滚动条）
		 */
	    getTargetInfo : function(){
	    	var scroll = this.getScrollInfo();
	    	return {
				x : e.clientX + scroll.scrollLeft, 
				y : e.clientY + scroll.scrollTop
			};
	    },
	    /**
		 * 获得对象初始化位置（元素的左上角位置）
		 */
	    getTargetInitialPosition : function(){
	    	var offsetProp = this.getTargetOffsetProp(), 
				targetInfo = this.getTargetInfo();
			return {
				x : targetInfo.x - offsetProp.offsetX,
				y : targetInfo.y - offsetProp.offsetY
			};
	    },
	    /**
	     * 获取浏览器窗口的长度和宽度信息
	     */
	    getWindowInfo : function(){
	    	return {
	    		innerHeight : window.innerHeight || document.body.offsetHeight,
	    		innerWidth : window.innerWidth || document.body.offsetWidth
	    	}
	    }
	}
}

/**
 * 为组件定义命名空间，为防止用户的自定义方法名或对象名，跟组件的冲突
 */
var Namespace = new Object();
Namespace.register = function(path) {
    var arr = path.split(".");
    var ns = "";
    for ( var i = 0; i < arr.length; i++) {
       if (i > 0)
        ns += ".";
       ns += arr[i];
       eval("if(typeof(" + ns + ") == 'undefined') " + ns + " = new Object();");
    }
}
Namespace.register("Haiyisoft");
Namespace.register("Constant");



/////////////////////////////////////ajtb.js内容/////////////////////////////////////////
// for old browsers
//window.undefined = window.undefined;

var Ajtb = {
    version : '1.0'
};
/**
 * 拷贝一个对象的属性和方法，如果对象的属性和方法已经存在，会被覆盖
 */
Ajtb.copyPro = function(original, copy, defaults){
    if(defaults){
    	Ajtb.copyPro(original, defaults);
    }
    if(original && copy && typeof copy == 'object'){
        for(var p in copy){
        	original[p] = copy[p];
        }
    }
    return original;
};
/**
 * 拷贝一个对象的属性和方法，如果对象的属性和方法已经存在，不会被覆盖
 */
Ajtb.copyProIf = function(original, copy){
    if(original){
        for(var p in copy){
            if(Ajtb.isEmpty(original[p])){
            	original[p] = copy[p];
            }
        }
    }
    return original;
};

Namespace.register("Ajtb.data");//定义命名空间
Namespace.register("Ajtb.util");
Namespace.register("Ajtb.grid");
Namespace.register("Ajtb.CurrentGrid");

(function(){
	var 
    ua = navigator.userAgent.toLowerCase(),
    check = function(r){
        return r.test(ua);
    },
   
    isOpera = check(/opera/),
    isChrome = check(/chrome/),
    isIE = !isOpera && check(/msie/);
   
Ajtb.copyPro(Ajtb, {
	
	isArray : function(v){
		return Object.prototype.toString.apply(v) === '[object Array]';
	},
	isEmpty : function(v, allowBlank){
        return v === null || v === undefined || ((Ajtb.isArray(v) && !v.length)) || (!allowBlank ? v === '' : false);
    },
	isObject : function(v){
        return v && typeof v == "object";
    },
	override : function(origclass, overrides){
	    if(overrides){
	        var p = origclass.prototype;
	        Ajtb.copyPro(p, overrides);
	        if(isIE && overrides.toString != origclass.toString){
	            p.toString = overrides.toString;
	        }
	    }
	},
	isNumber: function(value) {
        return typeof value === 'number' && isFinite(value);
    },
	isDate : function(v){
        return Object.prototype.toString.apply(v) === '[object Date]';
    },
    num : function(v, defaultValue){
        v = Number(v === null || typeof v == 'boolean'? NaN : v);
        return isNaN(v)? defaultValue : v;
    },
    isFunction : function(v){
        return Object.prototype.toString.apply(v) === '[object Function]';
    },
    USE_NATIVE_JSON : false,
    /**
	 * 实现继承
	 */
	isIE : isIE
});
})();

Ajtb.copyPro(Function.prototype, {
	
	createDelegate : function(obj, args, appendArgs){
    var method = this;
    return function() {
        var callArgs = args || arguments;
        if (appendArgs === true){
            callArgs = Array.prototype.slice.call(arguments, 0);
            callArgs = callArgs.concat(args);
        }else if (Ajtb.isNumber(appendArgs)){
            callArgs = Array.prototype.slice.call(arguments, 0); // copy arguments first
            var applyArgs = [appendArgs, 0].concat(args); // create method call params
            Array.prototype.splice.apply(callArgs, applyArgs); // splice them in
        }
        return method.apply(obj || window, callArgs);
    };
}
})



//Uep.js
/*var Uep = {
    version : '1.0'
};*/
Namespace.register("Haiyisoft.util");
//Namespace.register("Uep");
/**
 * 拷贝一个对象的属性和方法，如果对象的属性和方法已经存在，会被覆盖
 */
Haiyisoft.apply = function(original, copy, defaults){
    if(defaults){
       Haiyisoft.apply(original, defaults);
    }
    if(original && copy && typeof copy == 'object'){
        for(var p in copy){
            original[p] = copy[p];
        }
    }
    return original;
};
/**
 * 拷贝一个对象的属性和方法，如果对象的属性和方法已经存在，不会被覆盖
 */
Haiyisoft.applyIf = function(original, copy){
    if(original){
        for(var p in copy){
            if(Haiyisoft.isEmpty(original[p])){
                original[p] = copy[p];
            }
        }
    }
    return original;
};


(function(){
    var 
    ua = navigator.userAgent.toLowerCase(),
    check = function(r){
        return r.test(ua);
    },
   
    isOpera = check(/opera/),
    isChrome = check(/chrome/),
    isIE = !isOpera && check(/msie/);
   
Haiyisoft.apply(Haiyisoft, {
    
    isArray : function(v){
        return Object.prototype.toString.apply(v) === '[object Array]';
    },
    isEmpty : function(v, allowBlank){
        return v === null || v === undefined || ((Haiyisoft.isArray(v) && !v.length)) || (!allowBlank ? v === '' : false);
    },
    isObject : function(v){
        return v && typeof v == "object";
    },
    override : function(origclass, overrides){
        if(overrides){
            var p = origclass.prototype;
            Haiyisoft.apply(p, overrides);
            if(isIE && overrides.toString != origclass.toString){
                p.toString = overrides.toString;
            }
        }
    },
    isNumber: function(value) {
        return typeof value === 'number' && isFinite(value);
    },
    isDate : function(v){
        return Object.prototype.toString.apply(v) === '[object Date]';
    },
    num : function(v, defaultValue){
        v = Number(v === null || typeof v == 'boolean'? NaN : v);
        return isNaN(v)? defaultValue : v;
    },
      isPrimitive : function(v){
            return Haiyisoft.isString(v) || Haiyisoft.isNumber(v) || Haiyisoft.isBoolean(v);
        },
     each : function(array, fn, scope){
        if(Haiyisoft.isEmpty(array, true)){
            return;
        }
       
       if( Haiyisoft.isPrimitive(array)){
            array = [array];
        }
        for(var i = 0, len = array.length; i < len; i++){
            if(fn.call(scope || array[i], array[i], i, array) === false){
                return i;
            };
        }
    },
    isFunction : function(v){
        return Object.prototype.toString.apply(v) === '[object Function]';
    },
      isString : function(v){
            return typeof v === 'string';
        },
          isBoolean : function(v){
            return typeof v === 'boolean';
        },

     toArray : function(){
             return isIE ?
                 function(a, i, j, res){
                     res = [];
                     for(var x = 0, len = a.length; x < len; x++) {
                         res.push(a[x]);
                     }
                     return res.slice(i || 0, j || res.length);
                 } :
                 function(a, i, j){
                     return Array.prototype.slice.call(a, i || 0, j || a.length);
                 }
         }(),

    USE_NATIVE_JSON : false,
    
    /**
     * 实现继承
     */
    extend : function(){
        // inline overrides
        var io = function(o){
            for(var m in o){
                this[m] = o[m];
            }
        };
        var oc = Object.prototype.constructor;

        return function(sb, sp, overrides){
            if(Haiyisoft.isObject(sp)){
                overrides = sp;
                sp = sb;
                sb = overrides.constructor != oc ? overrides.constructor : function(){sp.apply(this, arguments);};
            }
            var F = function(){},
                sbp,
                spp = sp.prototype;

            F.prototype = spp;
            sbp = sb.prototype = new F();
            sbp.constructor=sb;
            sb.superclass=spp;
            if(spp.constructor == oc){
                spp.constructor=sp;
            }
            sb.override = function(o){
               Haiyisoft.override(sb, o);
            };
            sbp.superclass = sbp.supr = (function(){
                return spp;
            });
            sbp.override = io;
            Haiyisoft.override(sb, overrides);
            sb.extend = function(o){Haiyisoft.extend(sb, o);};
            return sb;
        };
    }(),
    isIE : isIE
});
})();

Haiyisoft.apply(Function.prototype, {
    
    createDelegate : function(obj, args, appendArgs){
    var method = this;
    return function() {
        var callArgs = args || arguments;
        if (appendArgs === true){
            callArgs = Array.prototype.slice.call(arguments, 0);
            callArgs = callArgs.concat(args);
        }else if (Haiyisoft.isNumber(appendArgs)){
            callArgs = Array.prototype.slice.call(arguments, 0); // copy arguments first
            var applyArgs = [appendArgs, 0].concat(args); // create method call params
            Array.prototype.splice.apply(callArgs, applyArgs); // splice them in
        }
        return method.apply(obj || window, callArgs);
    };
}
});




// Component
Haiyisoft.Component = function(config){
   config = config || {};
   
   this.initialConfig = config;

   Haiyisoft.apply(this, config);
   this.addEvents(
        'disable',      
        'enable',       
        'show',             
        'hide',
        'beforeRender',
        'afterrender',     
        'removed',    
        'render'

    );
   
};


//Observable.js
(function(){

var UEPUTIL = Haiyisoft.util,
    TOARRAY = Haiyisoft.toArray,
    EACH = Haiyisoft.each,
    ISOBJECT = Haiyisoft.isObject,
    TRUE = true,
    FALSE = false;

UEPUTIL.Observable = function(){
   
    var me = this, e = me.events;
    if(me.listeners){
        me.on(me.listeners);
        delete me.listeners;
    }
    me.events = e || {};
};

UEPUTIL.Observable.prototype = {
    // private
    filterOptRe : /^(?:scope|delay|buffer|single)$/,

   
    fireEvent : function(){
        var a = TOARRAY(arguments),
            ename = a[0].toLowerCase(),
            me = this,
            ret = TRUE,
            ce = me.events[ename],
            q,
            c;
        if (me.eventsSuspended === TRUE) {
            if (q = me.eventQueue) {
                q.push(a);
            }
        }
        else if(ISOBJECT(ce) && ce.bubble){
            if(ce.fire.apply(ce, a.slice(1)) === FALSE) {
                return FALSE;
            }
            c = me.getBubbleTarget && me.getBubbleTarget();
            if(c && c.enableBubble) {
                if(!c.events[ename] || !Haiyisoft.isObject(c.events[ename]) || !c.events[ename].bubble) {
                    c.enableBubble(ename);
                }
                return c.fireEvent.apply(c, a);
            }
        }
        else {
            if (ISOBJECT(ce)) {
                a.shift();
                ret = ce.fire.apply(ce, a);
            }
        }
        return ret;
    },


   addListener : function(eventName, fn, scope, o){
        var me = this,
            e,
            oe,
            isF,
        ce;
        if (ISOBJECT(eventName)) {
            o = eventName;
            for (e in o){
                oe = o[e];
                if (!me.filterOptRe.test(e)) {
                    me.addListener(e, oe.fn || oe, oe.scope || o.scope, oe.fn ? oe : o);
                }
            }
        } else {
            eventName = eventName.toLowerCase();
            ce = me.events[eventName] || TRUE;
            if (Haiyisoft.isBoolean(ce)) {
                me.events[eventName] = ce = new UEPUTIL.Event(me, eventName);
            }
            ce.addListener(fn, scope, ISOBJECT(o) ? o : {});
        }
    },

    removeListener : function(eventName, fn, scope){
        var ce = this.events[eventName.toLowerCase()];
        if (ISOBJECT(ce)) {
            ce.removeListener(fn, scope);
        }
    },

    purgeListeners : function(){
        var events = this.events,
            evt,
            key;
        for(key in events){
            evt = events[key];
            if(ISOBJECT(evt)){
                evt.clearListeners();
            }
        }
    },

    addEvents : function(o){
        var me = this;
        me.events = me.events || {};
        if (Haiyisoft.isString(o)) {
            var a = arguments,
                i = a.length;
            while(i--) {
                me.events[a[i]] = me.events[a[i]] || TRUE;
            }
        } else {
            Haiyisoft.applyIf(me.events, o);
        }
    },

   
    hasListener : function(eventName){
        var e = this.events[eventName.toLowerCase()];
        return ISOBJECT(e) && e.listeners.length > 0;
    },

   
    suspendEvents : function(queueSuspended){
        this.eventsSuspended = TRUE;
        if(queueSuspended && !this.eventQueue){
            this.eventQueue = [];
        }
    },

  
    resumeEvents : function(){
        var me = this,
            queued = me.eventQueue || [];
        me.eventsSuspended = FALSE;
        delete me.eventQueue;
        EACH(queued, function(e) {
            me.fireEvent.apply(me, e);
        });
    }
};

var OBSERVABLE = UEPUTIL.Observable.prototype;

OBSERVABLE.on = OBSERVABLE.addListener;

OBSERVABLE.un = OBSERVABLE.removeListener;

UEPUTIL.Observable.releaseCapture = function(o){
    o.fireEvent = OBSERVABLE.fireEvent;
};

function createTargeted(h, o, scope){
    return function(){
        if(o.target == arguments[0]){
            h.apply(scope, TOARRAY(arguments));
        }
    };
};

function createBuffered(h, o, l, scope){
    l.task = new UEPUTIL.DelayedTask();
    return function(){
        l.task.delay(o.buffer, h, scope, TOARRAY(arguments));
    };
};

function createSingle(h, e, fn, scope){
    return function(){
        e.removeListener(fn, scope);
        return h.apply(scope, arguments);
    };
};

function createDelayed(h, o, l, scope){
    return function(){
        var task = new UEPUTIL.DelayedTask();
        if(!l.tasks) {
            l.tasks = [];
        }
        l.tasks.push(task);
        task.delay(o.delay || 10, h, scope, TOARRAY(arguments));
    };
};

UEPUTIL.Event = function(obj, name){
    this.name = name;
    this.obj = obj;
    this.listeners = [];
};

UEPUTIL.Event.prototype = {
    addListener : function(fn, scope, options){
        var me = this,
            l;
        scope = scope || me.obj;
        if(!me.isListening(fn, scope)){
            l = me.createListener(fn, scope, options);
            if(me.firing){ // if we are currently firing this event, don't disturb the listener loop
                me.listeners = me.listeners.slice(0);
            }
            me.listeners.push(l);
        }
    },

    createListener: function(fn, scope, o){
        o = o || {}, scope = scope || this.obj;
        var l = {
            fn: fn,
            scope: scope,
            options: o
        }, h = fn;
        if(o.target){
            h = createTargeted(h, o, scope);
        }
        if(o.delay){
            h = createDelayed(h, o, l, scope);
        }
        if(o.single){
            h = createSingle(h, this, fn, scope);
        }
        if(o.buffer){
            h = createBuffered(h, o, l, scope);
        }
        l.fireFn = h;
        return l;
    },

    findListener : function(fn, scope){
        var list = this.listeners,
            i = list.length,
            l;
            
        scope = scope || this.obj;
        while(i--){
            l = list[i];
            if(l){
                if(l.fn == fn && l.scope == scope){
                    return i;
                }
            }
        }
        return -1;
    },

    isListening : function(fn, scope){
        return this.findListener(fn, scope) != -1;
    },

    removeListener : function(fn, scope){
        var index,
            l,
            k,
            me = this,
            ret = FALSE;
        if((index = me.findListener(fn, scope)) != -1){
            if (me.firing) {
                me.listeners = me.listeners.slice(0);
            }
            l = me.listeners[index];
            if(l.task) {
                l.task.cancel();
                delete l.task;
            }
            k = l.tasks && l.tasks.length;
            if(k) {
                while(k--) {
                    l.tasks[k].cancel();
                }
                delete l.tasks;
            }
            me.listeners.splice(index, 1);
            ret = TRUE;
        }
        return ret;
    },

    // Iterate to stop any buffered/delayed events
    clearListeners : function(){
        var me = this,
            l = me.listeners,
            i = l.length;
        while(i--) {
            me.removeListener(l[i].fn, l[i].scope);
        }
    },

    fire : function(){
        var me = this,
            args = TOARRAY(arguments),
            listeners = me.listeners,
            len = listeners.length,
            i = 0,
            l;

        if(len > 0){
            me.firing = TRUE;
            for (; i < len; i++) {
                l = listeners[i];
                if(l && l.fireFn.apply(l.scope || me.obj || window, args) === FALSE) {
                    return (me.firing = FALSE);
                }
            }
        }
        me.firing = FALSE;
        return TRUE;
    }
};
})();


// private
Haiyisoft.Component.AUTO_ID = 1000;

Haiyisoft.extend(Haiyisoft.Component, Haiyisoft.util.Observable, {
    disabled : false,
   
    hidden : false,
   
    initPlugin : function(p){
      
        p.init(this);
        return p;
    },

    initComponent : function(){
     var me = this;
     
     //增加监听事件
	 this.on("beforerender",function(){
	 	me.beforerender();
	 });
	 this.on("afterrender",function(){
	 	me.afterrender();
	 });
    },

   onRender : function(container, position){
	   
		this.fireEvent('beforerender', this);//触发相应的监听事件
		
		this.render();//调用子的render,具体绘制

        this.fireEvent('afterrender', this);
    },
   
    mon : function(item, ename, fn, scope, opt){
        this.createMons();
        if(Haiyisoft.isObject(ename)){
            var propRe = /^(?:scope|delay|buffer|single|stopEvent|preventDefault|stopPropagation|normalized|args|delegate)$/;

            var o = ename;
            for(var e in o){
                if(propRe.test(e)){
                    continue;
                }
                if(Haiyisoft.isFunction(o[e])){
                    // shared options
                    this.mons.push({
                        item: item, ename: e, fn: o[e], scope: o.scope
                    });
                    item.on(e, o[e], o.scope, o);
                }else{
                    // individual options
                    this.mons.push({
                        item: item, ename: e, fn: o[e], scope: o.scope
                    });
                    item.on(e, o[e]);
                }
            }
            return;
        }

        this.mons.push({
            item: item, ename: ename, fn: fn, scope: scope
        });
        item.on(ename, fn, scope, opt);
    },

  
    mun : function(item, ename, fn, scope){
        var found, mon;
        this.createMons();
        for(var i = 0, len = this.mons.length; i < len; ++i){
            mon = this.mons[i];
            if(item === mon.item && ename == mon.ename && fn === mon.fn && scope === mon.scope){
                this.mons.splice(i, 1);
                item.un(ename, fn, scope);
                found = true;
                break;
            }
        }
        return found;
    }
});


/**
 * @class Ext.util.Format
 * Reusable data formatting functions
 * @singleton
 */
Haiyisoft.util.Format = function(){
    var trimRe = /^\s+|\s+$/g,
        stripTagsRE = /<\/?[^>]+>/gi,
        stripScriptsRe = /(?:<script.*?>)((\n|\r|.)*?)(?:<\/script>)/ig,
        nl2brRe = /\r?\n/g;

    return {
       
        ellipsis : function(value, len, word){
            if(value && value.length > len){
                if(word){
                    var vs = value.substr(0, len - 2),
                        index = Math.max(vs.lastIndexOf(' '), vs.lastIndexOf('.'), vs.lastIndexOf('!'), vs.lastIndexOf('?'));
                    if(index == -1 || index < (len - 15)){
                        return value.substr(0, len - 3) + "...";
                    }else{
                        return vs.substr(0, index) + "...";
                    }
                } else{
                    return value.substr(0, len - 3) + "...";
                }
            }
            return value;
        },

      
        undef : function(value){
            return value !== undefined ? value : "";
        },
    
        defaultValue : function(value, defaultValue){
            return value !== undefined && value !== '' ? value : defaultValue;
        },
     
        htmlEncode : function(value){
            return !value ? value : String(value).replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
        },
      
        htmlDecode : function(value){
            return !value ? value : String(value).replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&quot;/g, '"').replace(/&amp;/g, "&");
        },

        trim : function(value){
            return String(value).replace(trimRe, "");
        },
    
        substr : function(value, start, length){
            return String(value).substr(start, length);
        },
       
        lowercase : function(value){
            return String(value).toLowerCase();
        },
      
        uppercase : function(value){
            return String(value).toUpperCase();
        },
       
        capitalize : function(value){
            return !value ? value : value.charAt(0).toUpperCase() + value.substr(1).toLowerCase();
        },

        // private
        call : function(value, fn){
            if(arguments.length > 2){
                var args = Array.prototype.slice.call(arguments, 2);
                args.unshift(value);
                return eval(fn).apply(window, args);
            }else{
                return eval(fn).call(window, value);
            }
        },
       
        usMoney : function(v){
            v = (Math.round((v-0)*100))/100;
            v = (v == Math.floor(v)) ? v + ".00" : ((v*10 == Math.floor(v*10)) ? v + "0" : v);
            v = String(v);
            var ps = v.split('.'),
                whole = ps[0],
                sub = ps[1] ? '.'+ ps[1] : '.00',
                r = /(\d+)(\d{3})/;
            while (r.test(whole)) {
                whole = whole.replace(r, '$1' + ',' + '$2');
            }
            v = whole + sub;
            if(v.charAt(0) == '-'){
                return '-$' + v.substr(1);
            }
            return "$" +  v;
        },
      
        date : function(v, format){
            if(!v){
                return "";
            }
            if(!Ext.isDate(v)){
                v = new Date(Date.parse(v));
            }
            return v.dateFormat(format || "m/d/Y");
        },
      
        dateRenderer : function(format){
            return function(v){
                return Ext.util.Format.date(v, format);
            };
        },
    
        stripTags : function(v){
            return !v ? v : String(v).replace(stripTagsRE, "");
        },
      
        stripScripts : function(v){
            return !v ? v : String(v).replace(stripScriptsRe, "");
        },
     
        fileSize : function(size){
            if(size < 1024) {
                return size + " bytes";
            } else if(size < 1048576) {
                return (Math.round(((size*10) / 1024))/10) + " KB";
            } else {
                return (Math.round(((size*10) / 1048576))/10) + " MB";
            }
        },

        math : function(){
            var fns = {};
            return function(v, a){
                if(!fns[a]){
                    fns[a] = new Function('v', 'return v ' + a + ';');
                }
                return fns[a](v);
            }
        }(),

        round : function(value, precision) {
            var result = Number(value);
            if (typeof precision == 'number') {
                precision = Math.pow(10, precision);
                result = Math.round(value * precision) / precision;
            }
            return result;
        },

        number: function(v, format) {
            if(!format){
                return v;
            }
            v = Ext.num(v, NaN);
            if (isNaN(v)){
                return '';
            }
            var comma = ',',
                dec = '.',
                i18n = false,
                neg = v < 0;

            v = Math.abs(v);
            if(format.substr(format.length - 2) == '/i'){
                format = format.substr(0, format.length - 2);
                i18n = true;
                comma = '.';
                dec = ',';
            }

            var hasComma = format.indexOf(comma) != -1,
                psplit = (i18n ? format.replace(/[^\d\,]/g, '') : format.replace(/[^\d\.]/g, '')).split(dec);

            if(1 < psplit.length){
                v = v.toFixed(psplit[1].length);
            }else if(2 < psplit.length){
                throw ('NumberFormatException: invalid format, formats should have no more than 1 period: ' + format);
            }else{
                v = v.toFixed(0);
            }

            var fnum = v.toString();

            psplit = fnum.split('.');

            if (hasComma) {
                var cnum = psplit[0], parr = [], j = cnum.length, m = Math.floor(j / 3), n = cnum.length % 3 || 3;

                for (var i = 0; i < j; i += n) {
                    if (i != 0) {
                        n = 3;
                    }
                    parr[parr.length] = cnum.substr(i, n);
                    m -= 1;
                }
                fnum = parr.join(comma);
                if (psplit[1]) {
                    fnum += dec + psplit[1];
                }
            } else {
                if (psplit[1]) {
                    fnum = psplit[0] + dec + psplit[1];
                }
            }

            return (neg ? '-' : '') + format.replace(/[\d,?\.?]+/, fnum);
        },

        numberRenderer : function(format){
            return function(v){
                return Ext.util.Format.number(v, format);
            };
        },
        plural : function(v, s, p){
            return v +' ' + (v == 1 ? s : (p ? p : s+'s'));
        },

        nl2br : function(v){
            return Ext.isEmpty(v) ? '' : v.replace(nl2brRe, '<br/>');
        }
    }
}();

//*********************  Template  ****************************内容
Haiyisoft.Template = function(html){
    var me = this,
    	a = arguments,
    	buf = [];
    if (Haiyisoft.isArray(html)) {
        html = html.join("");
    } else if (a.length > 1) {
	    Haiyisoft.each(a, function(v) {
            if (Haiyisoft.isObject(v)) {
                Haiyisoft.apply(me, v);
            } else {
                buf.push(v);
            }
        });
        html = buf.join('');
    }
    /**@private*/
    me.html = html;
   
    if (me.compiled) {
        me.compile();
    }
};
Haiyisoft.Template.prototype = {
   
    re : /\{([\w-]+)\}/g,
    
    applyTemplate : function(values){
		var me = this;

        return me.compiled ?
        		me.compiled(values) :
				me.html.replace(me.re, function(m, name){
		        	return values[name] !== undefined ? values[name] : "";
		        });
	},
 
    set : function(html, compile){
	    var me = this;
        me.html = html;
        me.compiled = null;
        return compile ? me.compile() : me;
    },
   
    compile : function(){
    	// isGecko 改成true了
        var me = this,
        //	sep = Ext.isGecko ? "+" : ",";
       sep = ",";
       
        function fn(m, name){                        
	        name = "values['" + name + "']";
	        return "'"+ sep + '(' + name + " == undefined ? '' : " + name + ')' + sep + "'";
        }               
       /* eval("this.compiled = function(values){ return " + (Ext.isGecko ? "'" : "['") +
             me.html.replace(/\\/g, '\\\\').replace(/(\r\n|\n)/g, '\\n').replace(/'/g, "\\'").replace(this.re, fn) +
             (Haiyisoft.isGecko ?  "';};" : "'].join('');};"));*/
         eval("this.compiled = function(values){ return " + (false ? "'" : "['") +
             me.html.replace(/\\/g, '\\\\').replace(/(\r\n|\n)/g, '\\n').replace(/'/g, "\\'").replace(this.re, fn) +
             (false ?  "';};" : "'].join('');};"));   
            
        return me;
    },
    insertFirst: function(el, values, returnElement){
        return this.doInsert('afterBegin', el, values, returnElement);
    }, 
    insertBefore: function(el, values, returnElement){
        return this.doInsert('beforeBegin', el, values, returnElement);
    },
    insertAfter : function(el, values, returnElement){
        return this.doInsert('afterEnd', el, values, returnElement);
    },
    append : function(el, values, returnElement){
        return this.doInsert('beforeEnd', el, values, returnElement);
    },
    doInsert : function(where, el, values, returnEl){
        el = Haiyisoft.getDom(el);
        var newNode = Haiyisoft.DomHelper.insertHtml(where, el, this.applyTemplate(values));
        return returnEl ? Haiyisoft.get(newNode, true) : newNode;
    },
    overwrite : function(el, values, returnElement){
        el = Haiyisoft.getDom(el);
        el.innerHTML = this.applyTemplate(values);
        return returnElement ? Haiyisoft.get(el.firstChild, true) : el.firstChild;
    }
};

Haiyisoft.Template.prototype.apply = Haiyisoft.Template.prototype.applyTemplate;

Haiyisoft.Template.from = function(el, config){
    el = Ext.getDom(el);
    return new Haiyisoft.Template(el.value || el.innerHTML, config || '');
};
//XTemplate 
Haiyisoft.XTemplate = function(){
    Haiyisoft.XTemplate.superclass.constructor.apply(this, arguments);
    var me = this,
    	s = me.html,
    	re = /<tpl\b[^>]*>((?:(?=([^<]+))\2|<(?!tpl\b[^>]*>))*?)<\/tpl>/,
    	nameRe = /^<tpl\b[^>]*?for="(.*?)"/,
    	ifRe = /^<tpl\b[^>]*?if="(.*?)"/,
    	execRe = /^<tpl\b[^>]*?exec="(.*?)"/,
    	m,
    	id = 0,
    	tpls = [],
    	VALUES = 'values',
    	PARENT = 'parent',
    	XINDEX = 'xindex',
    	XCOUNT = 'xcount',
    	RETURN = 'return ',
    	WITHVALUES = 'with(values){ ';

    s = ['<tpl>', s, '</tpl>'].join('');

    while((m = s.match(re))){
       	var m2 = m[0].match(nameRe),
			m3 = m[0].match(ifRe),
       		m4 = m[0].match(execRe),
       		exp = null,
       		fn = null,
       		exec = null,
       		name = m2 && m2[1] ? m2[1] : '';
       if (m3) {
           exp = m3 && m3[1] ? m3[1] : null;
           if(exp){
               fn = new Function(VALUES, PARENT, XINDEX, XCOUNT, WITHVALUES + RETURN +(Haiyisoft.util.Format.htmlDecode(exp))+'; }');
              
           }
       }
       if (m4) {
           exp = m4 && m4[1] ? m4[1] : null;
           if(exp){
               exec = new Function(VALUES, PARENT, XINDEX, XCOUNT, WITHVALUES +(Haiyisoft.util.Format.htmlDecode(exp))+'; }');
              
           }
       }
       var targetFtl = "";
       if(name){
       	   targetFtl = name//新添加，解决<tpl>中的内容不在data中的问题
           switch(name){
               case '.': name = new Function(VALUES, PARENT, WITHVALUES + RETURN + VALUES + '; }'); break;
               case '..': name = new Function(VALUES, PARENT, WITHVALUES + RETURN + PARENT + '; }'); break;
               default: name = new Function(VALUES, PARENT, WITHVALUES + RETURN + name + '; }');
           }
       }
       tpls.push({
            id: id,
            targetFtl:targetFtl,
            target: name,
            exec: exec,
            test: fn,
            body: m[1]||''
        });
       s = s.replace(m[0], '{xtpl'+ id + '}');
       ++id;
    }
  
	Haiyisoft.each(tpls, function(t) {
        me.compileTpl(t);
    });
    me.master = tpls[tpls.length-1];
    me.tpls = tpls;
};
Haiyisoft.extend(Haiyisoft.XTemplate, Haiyisoft.Template, {
    // private
    re : /\{([\w-\.\#]+)(?:\:([\w\.]*)(?:\((.*?)?\))?)?(\s?[\+\-\*\\]\s?[\d\.\+\-\*\\\(\)]+)?\}/g,
    // private
    codeRe : /\{\[((?:\\\]|.|\n)*?)\]\}/g,

    // private
    applySubTemplate : function(id, values, parent, xindex, xcount){
    //	
    	try{
    		  var me = this,
	        	len,
	        	t = me.tpls[id],
	        	vs,
	        	buf = [];
	        if ((t.test && !t.test.call(me, values, parent, xindex, xcount)) ||
	            (t.exec && t.exec.call(me, values, parent, xindex, xcount))) {
	            return '';
	        }
	        vs = t.target ? t.target.call(me, values, parent) : values;
	        len = vs.length;
	        parent = t.target ? values : parent;
	        if(t.target && Haiyisoft.isArray(vs)){
		        Haiyisoft.each(vs, function(v, i) {
	                buf[buf.length] = t.compiled.call(me, v, parent, i+1, len);
	            });
	            return buf.join('');
	        }
	        return t.compiled.call(me, vs, parent, xindex, xcount);
     } catch (e){
     	var tplValue = '<tpl for="'+t.targetFtl+'">'+t.body+'</tpl>';    	//后添加的内容
     	return tplValue;
     }
       
    },

    // private
    compileTpl : function(tpl){
        var fm = Haiyisoft.util.Format,
       		useF = this.disableFormats !== true,
          //  sep = Haiyisoft.isGecko ? "+" : ",",
            sep = ",",
            body;

        function fn(m, name, format, args, math){
            if(name.substr(0, 4) == 'xtpl'){
                return "'"+ sep +'this.applySubTemplate('+name.substr(4)+', values, parent, xindex, xcount)'+sep+"'";
            }
            var v;
            if(name === '.'){
                v = 'values';
            }else if(name === '#'){
                v = 'xindex';
            }else if(name.indexOf('.') != -1){
                v = name;
            }else{
                v = "values['" + name + "']";
            }
            if(math){
                v = '(' + v + math + ')';
            }
            if (format && useF) {
                args = args ? ',' + args : "";
                if(format.substr(0, 5) != "this."){
                    format = "fm." + format + '(';
                }else{
                    format = 'this.call("'+ format.substr(5) + '", ';
                    args = ", values";
                }
            } else {
                args= ''; format = "("+v+" === undefined ? '' : ";
            }
            return "'"+ sep + format + v + args + ")"+sep+"'";
        }

        function codeFn(m, code){
            // Single quotes get escaped when the template is compiled, however we want to undo this when running code.
            return "'" + sep + '(' + code.replace(/\\'/g, "'") + ')' + sep + "'";
        }

        // branched to use + in gecko and [].join() in others
        
       /* if(Ext.isGecko){
            body = "tpl.compiled = function(values, parent, xindex, xcount){ return '" +
                   tpl.body.replace(/(\r\n|\n)/g, '\\n').replace(/'/g, "\\'").replace(this.re, fn).replace(this.codeRe, codeFn) +
                    "';};";
        }else{*/
            body = ["tpl.compiled = function(values, parent, xindex, xcount){ return ['"];
            body.push(tpl.body.replace(/(\r\n|\n)/g, '\\n').replace(/'/g, "\\'").replace(this.re, fn).replace(this.codeRe, codeFn));
            body.push("'].join('');};");
            body = body.join('');
      //  }
        eval(body);
        return this;
    },

    applyTemplate : function(values){    	
        return this.master.compiled.call(this, values, {}, 1, 1);
    },  
    compile : function(){return this;}
});

Haiyisoft.XTemplate.prototype.apply = Haiyisoft.XTemplate.prototype.applyTemplate;

Haiyisoft.XTemplate.from = function(el){
    el = Haiyisoft.getDom(el);
    return new Haiyisoft.XTemplate(el.value || el.innerHTML);
};


/*var MultitaskPanelManager = {
	
	addMenuTab : function(code,name,link,clickCount,dataWrap,appContext){  //是否记录菜单的点击次数(取值为true与false)
		myMultitask.addMultitask(code,name,link,clickCount,dataWrap,appContext);
	}
};*/



//params格式{url:url,fileName:fileName,contentDisposition:contentDisposition,currentDataWrap:currentDataWrap,printType:printType}
//也包含自定义参数
function jasperExport(reportName,dataArr,format,params){
	$("form#jasper").remove();
	$("body").append('<form id="jasper" method="post"></form>');
	if(dataArr != undefined){
		if(dataArr.length != undefined){
			for(var index = 0; index < dataArr.length; index++){
				var dataWrap = updatePageInfo(dataArr[index]);
				for(var i in dataWrap){
					saveData(i, dataWrap[i]);
				}
			}
		}else{
			var dataWrap = updatePageInfo(dataArr);
			for(var i in dataWrap){
				saveData(i, dataWrap[i]);
			}
		}
	} 
	if(format==undefined){
		format="PDF";
	}
	if(params==undefined || typeof params !="object"){
		params={};
	}

	if(params.url.indexOf($$pageContextPath)<0){
		params.url=$$pageContextPath+params.url;
	}
	
	params.url += "/jasperPrint" ;

	if(params.contentDisposition==undefined){
		params.contentDisposition="attachment";
	}
	if(params.currentDataWrap==undefined){
		params.currentDataWrap="dataWrap";
	}
	saveData("reportName",reportName);
	saveData("format",format);
	for(var key in params){
		saveData(key, params[key]);
	}	
	document.getElementById("jasper").setAttribute("action",params.url);
	$("form#jasper").submit();
}
//参照popWin.jsp
function saveData(name, value){
	var input = document.createElement("input");
	input.type = "hidden";
	input.name = name;
	input.value = value;
	$("form#jasper").append(input);
}
//参照popWin.jsp
function updatePageInfo(datawrap){		
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
	datawrap[attr] = JSON.stringify(data);
	return datawrap;
}
//params为object，传递自定义参数
function jasperPrint(reportName,url,params) {
	if(url.indexOf($$pageContextPath)<0){
		url=$$pageContextPath+url;
	}
	if(url.indexOf("?")<0){
		url += "/jasperPrint?";
	}else{
		var index = url.indexOf("?") ;
		url = url.substr(0,index) + "/jasperPrint" + url.substr(index,url.length) + "&";
	}
	url +="reportName="+reportName+"&format=APPLET&jrData=main";
	if(params!=undefined && typeof params=="object"){
		for(var key in params){
			url+="&"+key+"="+params[key];
		}	
	}

	$("div#jasperDiv").remove();
	var result = '<div id="jasperDiv"><OBJECT ID="JrPrt" classid="clsid:8AD9C840-044E-11D1-B3E9-00805F499D93" WIDTH ="0" HEIGHT="0" '+
		'codebase="'+$$pageContextPath+'framework/jasper/jre-7u80-windows-i586.exe" MAYSCRIPT>'+
		'<PARAM NAME = CODE VALUE = "JRPrinterApplet.class" >'+
		'<PARAM NAME = CODEBASE VALUE = "'+$$pageContextPath+'framework/applet">'+
		'<PARAM NAME = ARCHIVE VALUE = "jasperreports-print.jar,jasperreports-applet-6.2.0.jar,commons-logging-1.1.1.jar,commons-collections_3.2.1.3.jar,commons-digester-2.1.jar" >'+
		'<PARAM NAME="type" VALUE="application/x-java-applet;version=1.2.2">'+
		'<PARAM NAME="scriptable" VALUE="false">'+
		'<PARAM NAME="REPORT_URL" VALUE="'+url+'">'+
		'<PARAM NAME = "REPORT_FLAG" VALUE="0">'+
		'<comment>'+
		'<embed type="application/x-java-applet;version=1.2.2" CODE="JRPrinterApplet.class" WIDTH="0" HEIGHT="0" '+
		'JAVA_CODEBASE="'+$$pageContextPath+'framework/applet" '+
		'ARCHIVE="jasperreports-print.jar,jasperreports-applet-6.2.0.jar,commons-logging-1.1.1.jar,commons-collections_3.2.1.3.jar,commons-digester-2.1.jar" '+
		'scriptable=false '+
		'pluginspage="'+$$pageContextPath+'framework/jasper/jre-7u80-windows-i586.exe" '+
		'REPORT_URL="'+url+'" REPORT_FLAG="0" >'+
		'<noembed></noembed></embed></comment></OBJECT></div>';
	$("body").append(result);
}
//params格式{title:title,callback:callback},也包含自定义参数
function jasperApplet(reportName,url,dataArr,width,height,params){
	if(width==undefined){
		width=830;
	}
	if(height==undefined){
		height=600;
	}
	if(params==undefined || typeof params !="object"){
		params={};
	}
	if(params.title==undefined){
		params.title="打印";
	}
	if(params.callback==undefined){
		params.callback=null;
	}
	if(params.currentDataWrap==undefined){
		params.currentDataWrap = "dataWrap" ;
	}
	params["reportName"]=reportName;
	params["action"]=url+"/jasperPrint";
	params["width"]=width;
	params["height"]=height;
	$.showModalDialog({
		url : $$pageContextPath+"framework/jasperapplet",
		param : params,
		datawrap : dataArr
	}, params.title, params.callback, null,width,height,0);
}
//params格式{title:title,callback:callback},也包含自定义参数
function jasperHtml(reportName,url,dataArr,width,height,params){
	if(width==undefined){
		width=830;
	}
	if(height==undefined){
		height=600;
	}
	if(params==undefined || typeof params !="object"){
		params={};
	}
	if(params.title==undefined){
		params.title="打印";
	}
	if(params.callback==undefined){
		params.callback=null;
	}
	if(params.currentDataWrap==undefined){
		params.currentDataWrap = "dataWrap" ;
	}
	params["reportName"]=reportName;
	//params["action"]="jasperPrint";
	params["format"]="HTML";
	$.showModalDialog({
		url : $$pageContextPath+url+"/jasperPrint",
		param : params,
		datawrap : dataArr
	}, params.title, params.callback, null,width,height,0);
}

//用于刷新首页的可移动模块
function  refreshDeskTop(){
 var parentWin = window.parent;
  var parentNumber=0;  
  while(parentWin!=null){
	 //查到桌面  
     if(parentWin.MultitaskPanelManager){
    	parentWin.document.getElementById('0_bodyFrame').src=$$pageContextPath+"mainpage";   
       break;
     }else{
        if(parentNumber>=20){
          break;
        }
        parentNumber=parentNumber+1;
        parentWin = parentWin.parent;
     }
  }
}
  
function openHelpPageByF1(){
	var parentWin = window.parent;
    var parentNumber=0;  
    while(parentWin!=null){
       if(parentWin.MultitaskPanelManager && parentWin.MultitaskPanelManager.getFrameworkActiveTask && parentWin.MultitaskPanelManager.openHelpPageByF1){
      	  parentWin.MultitaskPanelManager.openHelpPageByF1(parentWin.MultitaskPanelManager.getFrameworkActiveTask().code);
          break;
       }else{
          if(parentNumber>=20){
             break;
          }
          parentNumber=parentNumber+1;
          parentWin = parentWin.parent;
       }
    }
    //如果没有加入到多任务框架中，可能是直接调用open_window打开的窗口
    if(parentNumber>=20){      
       parentWin = window.opener;
       if(parentWin == null){
          parentWin = window.parent.opener;
       }
       parentNumber=0;
       while(parentWin!=null){           
          if(parentWin.MultitaskPanelManager && parentWin.MultitaskPanelManager.getFrameworkActiveTask && parentWin.MultitaskPanelManager.openHelpPageByF1){
	      	  parentWin.MultitaskPanelManager.openHelpPageByF1(parentWin.MultitaskPanelManager.getFrameworkActiveTask().code);
	          break;
	      }else{
             if(parentNumber>=20){
             	$.alert("没有找到当前的多任务");
             	break;
       		 }  
       		 parentNumber=parentNumber+1;
       		 parentWin = parentWin.parent;
    	  }
 	   }
 	   if ((parentWin == null) && (parentNumber < 20)){
    	   $.alert("没有找到当前的多任务");
       }
    }
}
//对指定属性使用SHA1进行签名，
function sign(attrs,param){
	var signature = "";
	for(var i = 0; i < attrs.length; i++){
		signature = signature + attrs[i];
		signature = signature + "=";
		if(typeof(param[attrs[i]]) != "undefined" && param[attrs[i]] != null
				&& param[attrs[i]] != "null")
			signature = signature + param[attrs[i]];
		signature = signature + "&";
	}
	return CryptoJS.SHA1(signature)+"";
}
$(document).keydown(function (event) {
	if(event.keyCode==112){
		openHelpPageByF1() ;
		return false ;
	}
    
});