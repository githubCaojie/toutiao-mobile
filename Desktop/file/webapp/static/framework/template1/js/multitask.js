LinkedList = function(){
    
function Node(data, prev, next) {
    this.data = data || null;
    this.prev = prev || null;
    this.next = next || null;
}
Node.prototype = {
    getValue: function() {
        return this.data;
    },
    setValue: function(obj) {
        this.data = obj;
    },
    getPrev: function() {
        return this.prev;
    },
    setPrev: function(node) {
        this.prev = node;
    },    
    getNext: function() {
        return this.next;
    },
    setNext: function(node) {
        this.next = node;
    }
};
Node.prototype.constructor = Node;


function nodeByIndex(index, list) {
    var i = 0,
        node = list.head,
        length = list.length;
        
    // 第一个
    if(index===0) {
        return node;
    }
    while(node.next) {
        if(i===index) {
            return node;
        }
        node = node.next && node.next;
        i++;
    }
    // 最后 一个
    node = length-1 === index ? node : null;
    return node;
    
}

function nodeByData(data, list) {
    var node = list.head;
    while(node.next) {
        if(node.data == data) {
            return node;
        }
        node = node.next;
    }
    if(node.data == data) {
        return node;
    }
    // 没有找到
    return null;
}
function LinkedList() {
    this.head = null;
    //this.tail = null;
    this.length = 0;
}

LinkedList.prototype = {
    add: function(index, obj) {
        if(obj === undefined || obj === null || typeof index != 'number') {
            throw new Error('add failed, invalid param');
        }
        // 逆向取 -1，如取最后一个元素
        if(index < 0) {
            index = this.length + index;
        }
        // 空链表/索引越界
        if(index<0 || index>this.length) {
            throw new Error('add failed, invalid index');
        }
        
        var newNode = new Node(obj);
        
        if(index==0) {
            if(this.head) {
                newNode.setNext(this.head);
                this.head = newNode;
            }
            else {
              //  this.head = this.tail = newNode;
              this.head = newNode;
            }
        }
        else {
            var node = nodeByIndex(index-1, this),
                next = node.next;
            node.setNext(newNode);
            newNode.setPrev(node);
            newNode.setNext(next);
        }
        this.length++;
        
    },
    get: function(index) {
        if(typeof index !== 'number') {
            throw new Error('get failed, invalid param');
        }
        // 逆向取 -1，如取最后一个元素
        if(index < 0) {
            index = this.length + index;
        }
        // 空链表/索引越界
        if(this.isEmpty() || index<0 || index>=this.length) {
            throw new Error('Index: ' + index + ', Size: ' + this.length);
        }
        
        var node = nodeByIndex(index, this);
        
        return node.data;
    },
    getFirst: function() {
        return this.get(0);
    },
    getLast: function() {
        return this.get(this.length-1);
    },
    set: function(index, obj) {
        
        // 逆向取 -1，如取最后一个元素
        if(index < 0) {
            index = this.length + index;
        }
        // 空链表/索引越界
        if(this.isEmpty() || index<0 || index>=this.length) {
            throw new Error('Index: ' + index + ', Size: ' + this.length);
        }
        
        var node = nodeByIndex(index, this);
        
        node.data = obj;
        
    },
    size: function() {
        return this.length;
    },
    clear: function() {
        this.head.next = null;
        this.head = null;
    },
    remove: function(obj) {
        var isIndex = typeof obj === 'number';
        
        var node = isIndex ? nodeByIndex(obj, this) : nodeByData(obj, this);
        
        if(node === null) {
            throw new Error('remove failed, the node does not exist');
        }
        
        var prev = node.prev;
        
        // 删除第一个元素，注意第一个元素没有前驱
        if(prev === null) {
            this.head = node.next;
            if(this.head !== null)
           		this.head.prev = null;
            node.next = null;
            node = null;
        }
        else {
            prev.setNext(node.next);
            if(node.next !== null)
            	node.next.setPrev(prev);
            node.prev = null;
            node.next = null;
            node = null;
        }
        this.length--;
    },
    isEmpty: function() {
        return this.head === null;
    },
    addLast: function(obj) {
        this.add(this.length, obj);
    },
    addFirst: function(obj) {
        this.add(0, obj);
    },
    contains: function(obj) {
        var node = this.head;
        if(this.isEmpty()) {
            return false;
        }
        while(node.next) {
            if(node.data == obj) {
                return true;
            }
            node = node.next;
        }
        // 第一个(length为1时)和最后一个元素
        if(node.data == obj) {
            return true;
        }
        return false;
    },
    getIndex : function(obj){
    	if(this.contains(obj))
    		return nodeByData(obj, this);
    	return -1;
    },
    toString: function() {
        var str = '',
            node = this.head;
            
        if(this.isEmpty()) {
            return '[]';
        }
        str = '[' + node.data;
        while(node.next) {
            node = node.next;
            str += ',' + node.data;
        }
        str += ']';
        
        return str;
    }

};

LinkedList.prototype.constructor = LinkedList;

return LinkedList;
    
}();

/*******************************************************************************
 * JavaScript 基础组件 
 * multitask tab 
 * 功能列表: 开
 * 发信息 时间：10-06-27 
 * 作者：
 ******************************************************************************/
var multitaskVar = {
	onfocusMenu : null,
	onfocusContextMenu : null,
	hasOpenMenu : [],
	menuSequence : new LinkedList(),
	numSequence : new LinkedList(),
	maxNum : null,
	mainPageTD : null,
	mainPageBtn : null,
	contextMenu : null,
	curContextPath : window.location.href,
	ajaxRef : new LinkedList(),
	titleposition:null
};

var isMaxClose = false;
var multitasktimer;
var closeflag = null;
multitaskVar.curContextPath=multitaskVar.curContextPath.substring(0, multitaskVar.curContextPath.indexOfForSpecifiedNum("/",4));
var MultitaskPanelManager = {
	all : {},
	
	// 加载tabPanel
	addMenuPagePanel : function(_id) {
		this.all[_id] = new Multitask_TabPanel(_id);
	},
	// 加载tab页
	addMenuPage : function(_panelId, _pageId) {
		this.all[_panelId].addMenuPage(_pageId);
	},
	// 显示tab页
	showPage : function(_panelId, _pageId) {
		this.all[_panelId] = new Multitask_TabPanel(_panelId);
		this.all[_panelId].showPage(_pageId);
	},
	//动态关闭当前打开的所有页面
	closeAllPage:function(){
		var me=this;
		if($("td[id^='multitaskMenuTitleTd_']").length>0){	
			$("td[id^='multitaskMenuTitleTd_']").each(function(){
				if($(this).attr("id")!="multitaskMenuTitleTd_0"){
				   var  code=$(this).attr("code");
				   var index=$(this).attr("id").split("_")[1];
				   var iframeSrc=$("#"+index+"_bodyFrame").attr("src");
					   me.closeMenuPage(code,"",iframeSrc);
				  }
			});
		}
	},
	freshAllPage:function(str){
		var obj=eval("("+str+")");
		var bdId=obj.bdId;
		var prjId=obj.prjId;
		
		for(var i=1;i<multitaskVar.hasOpenMenu.length;i++){
			if(multitaskVar.hasOpenMenu[i] != undefined&&multitaskVar.hasOpenMenu[i]!=null){
				var url=multitaskVar.hasOpenMenu[i].bodyFrame.attr("src");
				if(url.indexOf("bdId")==-1){
					if(url.indexOf("?")==-1){
						url+='?bdId='+bdId + '&prjId='+prjId;
					}else{
						url+='&bdId='+bdId + '&prjId='+prjId;;
					}
				}else{
					if(url.indexOf("&isCrossDomain")!=-1){
						var index=url.lastIndexOf("&isCrossDomain");
						var str=url.substring(index+15,url.length);
						url=url.split("bdId")[0];
						url+='bdId='+bdId+'&prjId='+prjId+'&isCrossDomain='+str;
					}else{
						url=url.split("bdId")[0];
						url+='bdId='+bdId+'&prjId='+prjId;
					}
				}
				multitaskVar.hasOpenMenu[i].bodyFrame[0].src=url;
			}
		}
	},
	closeMenuPage : function(newMenuCode, newMenuTitle, newMenuUrl) {
		
		var pageID=-1;
		try{
		if (newMenuUrl != undefined) {
			if (newMenuTitle == "win" && newMenuUrl == "destroy") {
				pageID = multitaskVar.onfocusMenu.id;
				 if(pageID != 0){
						this.closePage(multitaskVar.hasOpenMenu[pageID]);
					}
			}else{
				for( var index = 0; index < multitaskVar.menuSequence.size(); index++) {
					if(multitaskVar.menuSequence.get(index).bodyFrame.attr("src") == newMenuUrl){
						pageID=index;
						this.closePage(multitaskVar.menuSequence.get(index));
					}
				}
			}
		}else{
			// 通过code和name来关闭任务项
			for( var index = 0; index < multitaskVar.menuSequence.size(); index++) {
				if(multitaskVar.menuSequence.get(index).code == newMenuCode){
					pageID=index;		
					this.closePage(multitaskVar.menuSequence.get(index));
				}
			}
		}
		
		pageID=null;
		}catch(e){}
	},
	closePageFlag : function() {
		closeflag = false;
	},
	noclosePageFlag : function() {
		closeflag = true;
	},
	getFrameworkByCode : function(code){
		var i = $(".bodyFrame[code="+code+"]", window.parent.document);
		return i;
	},
	// 获取当前任务
	getFrameworkActiveTask : function() {
		var hasOpenTaskObj = {};
		if(multitaskVar.onfocusMenu == undefined){
			return;
		}
		if (multitaskVar.onfocusMenu.id == 0) {
			with(hasOpenTaskObj){
				code = ""; 
				title = "首页"; 
				url = $$pageContextPath+ "/framework/commonjsp/mainPage.jsp";
			}
		} else {
			var curMenu = multitaskVar.hasOpenMenu[multitaskVar.onfocusMenu.id];
			hasOpenTaskObj.code = curMenu.code; 
			hasOpenTaskObj.title = curMenu.title;
			hasOpenTaskObj.url = curMenu.url;
		}
		return hasOpenTaskObj;
	},
	// 获取已经打开的任务
	getFrameworkTasks : function() {
		var frameworkTasks = [];
		for(var taskID = 0; taskID < multitaskVar.menuSequence.size(); taskID++){
			var curMenu = multitaskVar.menuSequence.get(taskID);
			var hasOpenTaskObj = {
				code : curMenu.code,
				title : curMenu.title,
				url : curMenu.url
			}
			frameworkTasks.push(hasOpenTaskObj);
		}
		return frameworkTasks;
	},
	openPrevMenu : function(menuOpts, isMin){
		//如果关闭的页面非当前显示的页面，不需要打开前面的页面
		if(multitaskVar.onfocusMenu.id!=menuOpts.menuID)return ;
		if(multitaskVar.onfocusMenu.id == multitaskVar.menuSequence.getFirst().menuID ){
			if(isMin){
				if(multitaskVar.menuSequence.size() == 1){
					this.mainPageClick();
				}else{
						if(multitaskVar.menuSequence.getIndex(menuOpts).getPrev() != null){
							multitaskVar.menuSequence.getIndex(menuOpts).getPrev().data.menuCell.click();
						}else {
							this.mainPageClick();
						}
				}
			}else{
				this.mainPageClick();
			}
		}else{
				multitaskVar.menuSequence.getIndex(menuOpts).getPrev().data.menuCell.click();
		}
			$("#mytestinput").focus();
	},
	closeControl : function(){
		var canClose = true;
		if(closeflag){
			if(confirm("您确定要关闭本工作单!")){
				canClose = true;closeflag = false;
			}else{
				canClose = false;
			}
		}
		return canClose;
	},
	/**
	 * isMin参数是用来区分是否是最小化
	 */
	closePage : function(menuOpts, isMin, isAdd) {
		try{
			if(menuOpts.bodyFrame[0].contentWindow.beforeCloseMultiTask != undefined){
	             var flag = menuOpts.bodyFrame[0].contentWindow.beforeCloseMultiTask.call(this);
	             if(flag == false || flag == "false"){
	             	return;
	             }
        	}
		}catch(e){
			
		}
        
		isMin = typeof isMin == "undefined" ? false : true;
		if(menuOpts==null || $(menuOpts).length==0){
			return false;
		}
		if (this.closeControl()) {
			menuOpts.bodyDiv.css("top",-9999);
			this.openPrevMenu(menuOpts, isMin);
			if(!isMin){
				$("#multitaskMenuTitleTd_"+menuOpts.menuID).unbind("contextmenu").unbind("mouseover")
		        .unbind("mouseout").unbind("click").removeAttr("onmouseover").removeAttr("onmouseout")
		        .removeAttr("onclick");
				menuOpts.menuCell.parent().remove();
				multitaskVar.hasOpenMenu[menuOpts.menuID] = null;
				multitaskVar.menuSequence.remove(menuOpts);
				multitaskVar.numSequence.addLast("_menu_"+menuOpts.menuID);
			}
			if(isMin==false){
				if(menuOpts.bodyFrame.attr("src").indexOf("isCrossDomain=true")>-1){
					menuOpts.bodyFrame.attr("src","about:blank");
				}else{
					if(isMaxClose){
							var report_obj=menuOpts.bodyFrame[0].contentWindow.jasper_Obj;
                        	if(report_obj != undefined){
                        		clearCache(report_obj);
                        	}
                        	
                        	var dataComponent =  menuOpts.bodyFrame[0].contentWindow.$dataComponent;
                        	if(dataComponent != undefined){
                        		for(var i=0;i<dataComponent.length;i++){ //释放内存
	                        		dataComponent[i].releaseMemory();
	                        	}
                        	}
                        	
                        	dataComponent = [];
                        	
                        	menuOpts.bodyFrame.attr("src","")
							menuOpts.bodyFrame.remove();
							menuOpts.bodyFrame = null;
					   		isMaxClose = false;
					}else{
						setTimeout(function(){	
							try{ //因为有可能会跨域，需要加上try
								var report_obj=menuOpts.bodyFrame[0].contentWindow.jasper_Obj;
	                        	if(report_obj != undefined){
	                        		clearCache(report_obj);
	                        	}	
							}catch(e){
								
							}
						                   
                        	//menuOpts.bodyFrame[0].contentWindow.document.body.innerHTML="";	
                        	//console.log(menuOpts.bodyFrame[0].contentWindow.$dataComponent);	
                        	
                        	var dataComponent = menuOpts.bodyFrame[0].contentWindow.$dataComponent;
                        	if(dataComponent != undefined){
                        		for(var i=0;i<dataComponent.length;i++){ //释放内存
	                        		dataComponent[i].releaseMemory();
	                        	}
                        	}
                        	
                        	dataComponent = [];
                        	setTimeout(function(){
                
                        		menuOpts.bodyFrame[0].contentWindow.location.replace('about:blank');	                       	 
								menuOpts.bodyFrame.remove();
								menuOpts.bodyFrame = null;
                        	},0)
                        	
						},0);
					}
				}
				//统计任务关闭时间
				var url =$$pageContextPath+ "framework/funcInvoke.do?";
				$.ajax({
			        url:url,
			        type: "post",   //方式
			        dataType:"html",
			        data:{_DEAL_TYPE_:"CLOSE_FUNC",_INVOKE_FUNC_CODE_:menuOpts.code,_INVOKE_FUNC_TITLE_:"",_INVOKE_FUNC_URL_:""},
			        async:true,
			        success:function(data){
			        },
			        error:function(){
			        	//$.alert("提示","进行连接信息传递出错!\n");
			        },
			        complete: function (XHR, TS) {
			        	XHR = null ;
			        } 
				
				});
			}
			/*setTimeout(function() {
				$("#mytestinput").focus();	
			}, 5000);*/
			if($firefox)
				setTimeout(function(){
					if($(".multitaskDiv").css("overflow") == "hidden"){
						$(".multitaskDiv").css("overflow","auto");
					}else{
						$(".multitaskDiv").css("overflow","hidden");
					}
				}, 0)
		}
	},
	onctMenu : function(e, _panelId, pageID) {
		// 屏蔽系统右键菜单
		var e = window.event || arguments.callee.caller.arguments[0];
		document.oncontextmenu = function() {
			if(e.preventDefault){
				e.preventDefault();
			}else{
				window.event.returnValue = false;
				return false;
			}
		};

		multitaskVar.onfocusContextMenu = pageID;
		if (multitasktimer) {
			clearTimeout(multitasktimer);
			multitasktimer = null;
			multitaskVar.contextMenu.css("display","none");
		}
		var left = parseInt(e.clientX) + parseInt(document.body.scrollLeft)+ parseInt(document.documentElement.scrollLeft);
		var top = e.clientY + document.body.scrollTop+ document.documentElement.scrollTop;
  
        if(vm.displayArea == 'block'){
        	//left = left - 200;
        }
		if(multitaskVar.titleposition == "top"){

			left = left - 20;
			if($("#main-content").length > 0){
				left = left - parseInt($("#main-content").css("marginLeft"));
			}
			if(typeof menuTypeFlag != 'undefined'){			
					multitaskVar.contextMenu.css({display : "block",left : left, top : 30});
			}else{
				multitaskVar.contextMenu.css({display : "block",left : left, top : 40});
			}
			
		}else{
			multitaskVar.contextMenu.css({display : "block",left : left, top : top - 120});
		}
		multitasktimer = setTimeout(function() {clearmyMenuTimeout()}, 4500);
	},
	
	maxMenuPage : function(_panelId) {
		this.showPage(_panelId, multitaskVar.onfocusContextMenu);
		multitaskVar.contextMenu.css("display","none");
	},
	minMenuPage : function() {
		/**只有点的是当前显示的页面时，才执行最小化**/
	  if(multitaskVar.onfocusMenu.id==multitaskVar.onfocusContextMenu){
		this.closePage(multitaskVar.hasOpenMenu[multitaskVar.onfocusMenu.id], true);
	   }
	  multitaskVar.contextMenu.css("display","none");
	},
	closeOtherPage:function(){
		for(var i=1;i<multitaskVar.hasOpenMenu.length;i++){
			if(multitaskVar.hasOpenMenu[i] != undefined && multitaskVar.hasOpenMenu[i].menuID != multitaskVar.onfocusContextMenu){
				this.closeMenuPageById(multitaskVar.hasOpenMenu[i].menuID);
			}
			
		}
	},
	closeAllPage:function(){
		for(var i=1;i<multitaskVar.hasOpenMenu.length;i++){
			if(multitaskVar.hasOpenMenu[i] != undefined){
				this.closeMenuPageById(multitaskVar.hasOpenMenu[i].menuID);
			}
		}
	},
	closeMenuPageById : function(menuID) {
		this.closePage(multitaskVar.hasOpenMenu[menuID]);
		multitaskVar.contextMenu.css("display","none");
	},
	addmenuTd : function(newMenuID, newMenuTitle, newMenuCode,newMenuUrl,helpCode) {
		var mask = $("#masklayerDiv");
		mask.show();
		isCrossDomain.curTopWindowRef.MulWinRef = window;
		if(debugMode=="false"&&requestTimeOut!="-1"){
			isCrossDomain.curTopWindowRef.loadMulTaskTimer = setTimeout(function(){alert("服务不可访问或请求超时！");mask.hide();$("#" + newMenuID + "_bodyFrame").attr("src","")}, requestTimeOut);
		}
		var cellText = "<div id='"+newMenuID+"_titleDiv' code='"+newMenuCode+"' class='multitask-item-separate'>"
		cellText = cellText + this.getMultitaskCellText(newMenuID, newMenuTitle, newMenuCode,newMenuUrl);
		cellText = cellText +"</div>";
		var $cellText = $(cellText),
		cellText=null,
		$bodyDiv = $("#" + newMenuID + "_bodyDiv"),
		$bodyFrame = $("#" + newMenuID + "_bodyFrame");
		$bodyFrame.ready(function(){});
		$bodyFrame.load(function(){
			mask.hide();
		});
		var menu = {menuCell : $cellText, menuID : newMenuID, bodyFrame : $bodyFrame, bodyDiv : $bodyDiv, code : newMenuCode, title : newMenuTitle, url : newMenuUrl,"helpCode" : helpCode};
		multitaskVar.hasOpenMenu[newMenuID] = menu;
		this.menuHandler($cellText, newMenuID,newMenuCode);
		$cellText=null;
		return menu;
	},
	
	getMenuID : function(s){
		return Number(s.substring(s.lastIndexOf("_") + 1,s.length));
	},
	setMenuID : function(s){
		return "_menu_"+s;
	},
	getCharLength:function(string){
		var length = ((string.charLength()) * 6 + 68) > 200 ? 200: (string.charLength()) * 6 + 68;
		return length;
	},
	/***将打开的所以任务项关闭，显示首页***********/
	showMainPage:function(flag){
		
		this.mainPageClick(flag);
	},
	addMenuTab : function(newMenuCode, newMenuTitle, newMenuUrl,flag,datawrap,defaultCloseFirstTask,appcontext) {
		var backUpUrl = newMenuUrl;
		if (newMenuUrl == "") {
			$.alert("提示","请先配置该功能的URL地址");
			return;
		}
		var _panelId = "SYS_MAINPAGEPANEL";
		var hasTabNum = multitaskVar.menuSequence.size() + 1;
		var lastTD = $("#multitaskMenuTitleLastTd");
		//菜单打开项时将appCode添加到url中，为了其他应用打开菜单项时，不影响判断是否打开同一个任务项，为没有appcode的都给加上
		if(newMenuUrl.indexOf("appCode")<0){
			if(newMenuUrl.indexOf("?")>0){
			  newMenuUrl+="&appCode="+newMenuCode;
		    }else{
			  newMenuUrl+="?appCode="+newMenuCode;
		    }
		}
		
		var helpCode = "";
		if(newMenuUrl.indexOf("helpCode")<0){
			helpCode = "Help_Menu_" + newMenuCode;//默认加Help_Menu_前缀
			newMenuUrl += "&helpCode=" + helpCode;
		}else{
			helpCode = newMenuUrl.split('helpCode=')[1].split('&')[0];
		}
		
		
		  var contextPath = $$pageContextPath;        
		  
		  
          var length = newMenuUrl.indexOf(contextPath)
              
          if(appcontext != undefined && appcontext != "" && appcontext != "null"){ //有appcontext是通过openTabTask方法调用的
          	contextPath=appcontext;
            if(length != -1){
                newMenuUrl = newMenuUrl.substring(contextPath.length,newMenuUrl.length);
              }	 
            var  start = newMenuUrl.substring(0, 1);
            
            if(appcontext != undefined && appcontext != ''){
              if('/' != appcontext.substring(0,1)){
                appcontext = '/' + appcontext;
              }
            }
            if($$devmode == 'false' || !$$devmode){ //现场部署
              newMenuUrl = appcontext + "/" + newMenuUrl;
            }else{//开发模式
              newMenuUrl = contextPath + newMenuUrl;
            }
          }else{
            if(length == -1 && newMenuUrl.indexOf("http://") !=0){ //url都在这里进行处理了
              var  start = newMenuUrl.substring(0, 1);
              if(start == '/'){
                newMenuUrl = newMenuUrl.substring(1,newMenuUrl.length);
			  }
              newMenuUrl = $$pageContextPath + newMenuUrl;
            }
          }
          
		
		//判断页面是否已开
		for( var index = 0; index < multitaskVar.menuSequence.size(); index++) {
			//如果已经打开的tab页，已经包含要打开的tab地址，showpage
			//console.log(multitaskVar.menuSequence.get(index).url);
			 if( newMenuUrl.indexOf("replace=true")>0 && newMenuUrl.substring(0,newMenuUrl.indexOf("?"))==multitaskVar.menuSequence.get(index).url.substring(0,multitaskVar.menuSequence.get(index).url.indexOf("?"))){
				 if(datawrap){
					topWin = typeof(isCrossDomain) == "undefined" ? window.top : isCrossDomain.curTopWindowRef;
					if(newMenuUrl.indexOf("http://") < 0 && newMenuUrl.indexOf($$pageContextPath) != 0)//跨域的处理可能有问题
						newMenuUrl = $$pageContextPath + newMenuUrl;//修改datewrap不为null时，replace=true属性不刷新本页面，重新打开新页面的问题，原因是往popWin.jsp传值过程中，影响了newMenuUrl属性，传值的参数换为popnewMenuUrl
					topWin.popWindowUrl = {url:newMenuUrl,datawrap:datawrap};
					topWin.getPopWindowUrl = function(){
						return topWin.popWindowUrl;
					}
					
					//newMenuUrl = $$pageContextPath+"framework/commonjsp/popWin.jsp";				
					newMenuUrl = $$pageContextPath+"framework/popwin";				
				}	
				 
				 multitaskVar.menuSequence.get(index).bodyFrame.attr("src",newMenuUrl);//为了往popwin.jsp传datawrap
					this.showPage(_panelId, multitaskVar.menuSequence.get(index).menuID);
					return;
			 } else if(multitaskVar.menuSequence.get(index).url == newMenuUrl || (newMenuCode!= "" && multitaskVar.menuSequence.get(index).code == newMenuCode)){
				this.showPage(_panelId, multitaskVar.menuSequence.get(index).menuID);
				return;
				//如果打开的页面url跟新的url？前面的部分相同，则刷新页面
			}
		}
		
		var  taskDirectClosable=$("#"+_panelId+"-taskDirectClosable").val();	
		//页面没有打开判断是不是打开的页面已经达到最大值
		if (hasTabNum == multitaskVar.maxNum) {
		   if(taskDirectClosable=="true"){
			   var firstMenu = multitaskVar.menuSequence.getFirst();
				var id = firstMenu.menuID;
				var menuID = this.setMenuID(id);
				isMaxClose = true;
				this.closePage(firstMenu);
		   }else{

		   	var that = this;
			 function submit(){
			 	var firstMenu = multitaskVar.menuSequence.getFirst();
				var id = firstMenu.menuID;
				var menuID = that.setMenuID(id);
				isMaxClose = true;
				that.closePage(firstMenu);
				addMulTaskItem(that,menuID,id,datawrap);
			 }
			 function callback(ret){
			 	//全局变量defaultCloseFirstTask修改为Y
			 	if("Y" == ret) {
				 	localStorage.defaultCloseFirstTask = "Y";
			 	}
			 	submit();
			 }
			 //$.confirm("提示","任务已经达到最大限度,若打开新任务将关掉第一个任务!",submit);
			 if("Y" == defaultCloseFirstTask || defaultCloseFirstTask == true) {
			 	submit();
			 } else {
         
			 	var opts = {
			 		url : $$pageContextPath+"framework/tips/closeFirstTab",
			 		title : platformProperty.popwindow.tips,
			 		callback : callback,
			 		button : 0,
			 		operator : 1
			 		
			 	};
			 	if($$theme == "haiyisoft") {
			 		var css = {
			 			width : 420,
			 			height : 160
			 		};
			 		opts.css = css;
			 	} else if($$theme == "haiyisoft2" || $$theme == "haiyisoft3") {
			 		var css = {
			 			width : 430,
			 			height : 180
			 		};
			 		opts.css = css;
			 	}
			 	$.popWindow(opts); 
			 
			 }
		   }
		} else {
			// 添加多任务项
			var menuID = multitaskVar.numSequence.getFirst();
			var id = this.getMenuID(menuID);
			addMulTaskItem(this,menuID,id,datawrap);
		}
		function addMulTaskItem(that,menuID,id,datawrap){
			var menu = that.addmenuTd(id, newMenuTitle, newMenuCode,newMenuUrl,helpCode);
			var insertCell = $("<td "+that.taskItemPosition()+">",{id : "multitaskMenuTitleTd_" + id,code : newMenuCode})
				.bind("contextmenu", (function() {MultitaskPanelManager.onctMenu('', 'SYS_MAINPAGEPANEL',id)}))
				.append(menu.menuCell).css({width : that.getCharLength(newMenuTitle)})
				.insertBefore(lastTD);
			insertCell=null;
			multitaskVar.numSequence.remove(menuID);
			multitaskVar.menuSequence.addLast(menu);
		
			var bodyDivHtml = "<iframe code=\""+menu.code+"\" id=\""+menu.menuID+"_bodyFrame\" class=\"bodyFrame\" name=\""+menu.menuID+"_bodyFrame\" src scrolling=\"auto\" width=\"100%\" height=\"100%\" border=\"0\" frameborder=\"0\" style=\""+that.taskItemBackground()+"\">";
			bodyDivHtml+="</iframe>";
			menu.bodyDiv.html(bodyDivHtml);
			bodyDivHtml=null;
			menu.bodyFrame=$("#"+menu.menuID+"_bodyFrame");
			menu.bodyFrame.ready(function(){});
			menu.bodyFrame.load(function(){
				document.getElementById("masklayerDiv").style.display = "none";
			});
			if(datawrap){
				topWin = typeof(isCrossDomain) == "undefined" ? window.top : isCrossDomain.curTopWindowRef;
				if(newMenuUrl.indexOf("http://") < 0 && newMenuUrl.indexOf($$pageContextPath) != 0){//跨域的处理可能有问题
					var popnewMenuUrl = $$pageContextPath + newMenuUrl;//修改datewrap不为null时，replace=true属性不刷新本页面，重新打开新页面的问题，原因是往popWin.jsp传值过程中，影响了newMenuUrl属性，传值的参数换为popnewMenuUrl
				}else{
					var popnewMenuUrl = newMenuUrl;
				}
				topWin.popWindowUrl = {url:popnewMenuUrl,datawrap:datawrap};
				topWin.getPopWindowUrl = function(){
					return topWin.popWindowUrl;
				}
				//newMenuUrl = $$pageContextPath+"framework/commonjsp/popWin.jsp";				
				newMenuUrl = $$pageContextPath+"framework/popwin";				
			}
		/*	if(newMenuUrl.indexOf("http://") == -1){
				if(newMenuUrl.indexOf($$pageContextPath) == -1){//加上项目的全路径，这里没有考虑分应用的
					newMenuUrl = $$pageContextPath + newMenuUrl;
				}
			}*/
			
			if(newMenuUrl.indexOf("?")>0){ //在多任务的地址中增加multitaskMenuFlag标识，弹窗放到多任务下时需要用到该变量，很重要
				newMenuUrl+="&multitaskMenuFlag=true&multitaskMenuId="+menu.menuID;
			}else{
				newMenuUrl+="?multitaskMenuFlag=true&multitaskMenuId="+menu.menuID;
			}					

			$("#"+menu.menuID+"_bodyFrame").attr("src", newMenuUrl);
				menu.bodyDiv.css("top",0);
				that.showPage(_panelId, id);
			if(flag=="true" || flag==true){
				var url =$$pageContextPath+ "framework/funcInvoke.do?";
				$.ajax({
			        url:url,
			        type: "post",   //方式
			        dataType:"html",
			        data:{_DEAL_TYPE_:"INVOKE_FUNC",_INVOKE_FUNC_CODE_:newMenuCode,_INVOKE_FUNC_TITLE_:newMenuTitle,_INVOKE_FUNC_URL_:backUpUrl},
			        async:false,
			        success:function(data){
			        },
			        error:function(){
			        	//$.alert("提示","进行连接信息传递出错!\n");
			        },
			        complete: function (XHR, TS) {
			        	XHR = null ;
			        } 
				
				});
			}
		}
		
	},
	taskItemPosition:function(){
		return "";
	},
	taskItemBackground:function(){
		return "background:#ffffff";
	},
	//添加快捷方式到快捷方式菜单中
	addShotcutMenu :function(_panelId){
		var showPageNum = multitaskVar.onfocusContextMenu;
		var  menuCode="";
	    if($("#showmenuTitleTd_"+showPageNum).length>0){
	    	menuCode=$("#showmenuTitleTd_"+showPageNum).attr("code");
	    }
	    if(menuCode!=""){
	    	 $.ajax({		
				  type: "post",   
				  url:$$pageContextPath + "/framework/shortCutAjax.do",
				  data:{ _PARAM_CODE:menuCode},
                  dataType:"html",
                  error:function(){
                  	//$.alert("提示","进行连接信息传递出错\n");
                  },
				  async:false,
				  success:function(data){
					  if(data==-1){
						$.alert("提示","快捷方式添加失败!");  
					  }else if(data==0){
						  $.alert("提示","该菜单项已经被添加到快捷方式，无需再添加!");    
					  }else{
						  $.alert("提示","菜单成功被添加到快捷方式!"); 
						  //在快捷方式菜单中添加该项
						  var  shortcutmenuId="mainShortcutmenu";
						  var funcUrl=$("#"+showPageNum+"_bodyFrame").attr("src");
						  var title=$.trim($("#showmenuTitleTd_"+showPageNum).html());
						  var addmenuTr="<tr height='24'  onmousedown=\""+shortcutmenuId+".shortcutmenuclick('"+shortcutmenuId+"','"+menuCode+"','"+title+"','"+funcUrl+"')\"  onmouseover=\"tabttitleovera(this)\"  onmouseout=\"tabttitleouta(this)\">"+"<td  width=\"26\" valign=\"bottom\"  style=\"cursor:hand;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;border-right:1px inset #cccccc;\">&nbsp; <img src=\""+$$pageContextPath+"/css/css/haiyisoft/shortcutmenu/images/3.gif\" width='16' height='16'> </td><td  valign=\"bottom\" style=\"cursor:hand;white-space:nowrap;text-overflow:ellipsis;overflow:hidden\">&nbsp;&nbsp;&nbsp;"+title+"&nbsp;&nbsp;&nbsp;</td></tr>";
						  var  beformAdd=$("#"+shortcutmenuId+"_shortcut_table").html();
						  $("#"+shortcutmenuId+"_shortcut_table").append(addmenuTr);
						  addmenuTr=null;
						  var  beforHeight= parseInt($("#"+shortcutmenuId+"_shortcut_div").height())+22;
						  $("#"+shortcutmenuId+"_shortcut_div").css("width",260);
						  $("#"+shortcutmenuId+"_shortcut_table").attr("height","100%").attr("width","100%");
 					  }
				  },
				  complete: function (XHR, TS) {
			        	XHR = null ;
			        }
	    	 });
	    }else{
	    	$.alert("提示","该任务项没有code，不能添加到多任务中");
	    }
	},
	mainPageClick : function(){
		multitaskVar.mainPageTD.click();
		$("#0_bodyDiv").css("top",0);
		if($firefox)
		if($(".multitaskDiv").css("overflow") == "hidden"){
			$(".multitaskDiv").css("overflow","auto");
		}else{
			$(".multitaskDiv").css("overflow","hidden");
		}
	},
	//显示登录信息
	showLogininfo:function(){
		 var p = $("#showloginInfo").position();//获得相对于父元素的位置
	     $("#loginInfo_div").css({right : 15, top : p.top -143}).show();
	},
	hiddenLogininfo:function(){
		$("#loginInfo_div").css("top",-9999)
	},
	getAppcode:function(){
		var showPageNum = multitaskVar.onfocusMenu!=null?multitaskVar.onfocusMenu.id:-1;
		var  menuCode="";
	    if($("#showmenuTitleTd_"+showPageNum).length>0){
	    	menuCode=$("#showmenuTitleTd_"+showPageNum).attr("code");
	    }
	    return menuCode;
	},
	openHelpPageByF1:function(code){
		for( var index = 0; index < multitaskVar.menuSequence.size(); index++) {
			if(multitaskVar.menuSequence.get(index).code == code){
				var appCode = code,
					helpCode = multitaskVar.menuSequence.get(index).helpCode;
				var func = multitaskVar.menuSequence.get(index).bodyFrame[0].contentWindow.getHelpIndex;
				if(typeof func == "function"){
					helpCode = func();
				}
				//this.addMenuTab(appCode,'帮助','webhelp/specifichelpcontent.jsp?helpCode=Help_Menu_'+appCode);
				window.open($$pageContextPath+'webhelp/helpframe?appCode='+appCode+"&helpCode="+helpCode);
				break;
			}
		}
	},
	menuHandler : function(obj, titleTdId,menucode){
		var bodyDiv = $("#" + titleTdId + "_bodyDiv"),
			event = $OnMouseEvent;
		obj.hover(
			function(){event.mouseover(this);},
			function(){event.mouseout(this);}
		)
		obj.click(
			function(){
				if(multitaskVar.onfocusMenu != null){
					event.defaultUnClick();
					event.unclick(multitaskVar.onfocusMenu.obj);
				}else{//第一次打开菜单时，只有一个首页，需要执行这个
					$("#0_bodyDiv").css("top",-9999);	
				}
				    event.defaultClick(this, bodyDiv, titleTdId);
					event.click(this);
					multitaskVar.onfocusMenu = {id : titleTdId, obj : $(this), bodyDiv:bodyDiv ,parent : this.parentNode};
			}
		)
	},
	multitaskmaxbuttonmouseover :function (tbobj,type){
		
		tbobj.bgColor='#b9d7fc';
		tbobj.style.color='#ffffff';
		tbobj.style.cursor='pointer';
		
	},
  	multitaskmaxbuttonmouseout :function (tbobj,type){
  		
		tbobj.bgColor='';
		tbobj.style.color='#000000';
		tbobj.style.cursor='default';
		
	},
	/**
	 *每个多任务td里的html值 
	 */
	getMultitaskCellText  :function(newMenuID, newMenuTitle, newMenuCode,newMenuUrl){
		var cellText =" <table cellspacing= '0'  class='multitask-title-table'>"
		              + "  <tr><td   width='2px'></td>"
		              + "      <td id='showmenuTitleTd_"+newMenuID+"' code='"+newMenuCode+"' class='multitask-indicate-icon multitask-td-background' align='center'  title='"+newMenuTitle+"'>"
		              + "        <div ></div>"
		              +"       </td>"
		              +"       <td  class='multitask-td-background' code='"+newMenuCode+"' align='center' style='vertical-align:middle;overflow:hidden;white-space:nowrap;word-break:keep-all;text-overflow:ellipsis;' nowrap title='"+newMenuTitle+"'>"+newMenuTitle+"</td>"
		              +"       <td  class='multitask-close-icon multitask-td-background' align='right'  onclick='MultitaskPanelManager.closeMenuPageById(\""+newMenuID+"\")' onmouseover='tabttitleover(this)' onmouseout='tabttitleout(this)' nowrap title='"+newMenuTitle+"'>"
		              +"         <div ></div></td>"
		              +"       <td  style='vertical-align:middle;' width='6' align='center' class='multitask-td-background'></td>"
		              +"   </tr>"
		              +" </table>"
	    return cellText;
	}

}
function tabttitleover(tdobj){
	tdobj.style.cursor="pointer";
}
function tabttitleout(tdobj){
	tdobj.style.cursor='default';
}
function tabttitleovera(tbobj){
	tbobj.style.backgroundColor='#b9d7fc';
	tbobj.style.color='#ffffff';
}
function tabttitleouta(tbobj){
	tbobj.style.backgroundColor='';
	tbobj.style.color='#000000';
}

var $OnMouseEvent = {
	mouseover : function(obj){
		 if($(obj).attr("isOnclick") != "true"){
			$(obj).find("td").removeClass('multitask-unselected').addClass('multitask-mouseover');
		 }
	},
	mouseout : function(obj){
		 if($(obj).attr("isOnclick") != "true"){
			$(obj).find("td").removeClass('multitask-mouseover').addClass('multitask-unselected');
		 }
	},
	click : function(obj){
		$(obj).find("td").removeClass('multitask-unselected').removeClass('multitask-mouseover').addClass('multitask-selected');
			
	},
	defaultClick : function(obj,bodyDiv,titleTdId){
		$(obj).attr("isOnclick","true");
		bodyDiv.css("top",0);
		if(titleTdId != 0){			
			multitaskVar.mainPageBtn.removeClass("multitask-active-firtpage").addClass('multitask-unactive-firtpage');
		}else{
			multitaskVar.mainPageBtn.removeClass("multitask-unactive-firtpage").addClass('multitask-active-firtpage');
		}
		$("#mytestinput").focus();
		//火狐滚动条的问题
		if($firefox){
			if($(".multitaskDiv").css("overflow") == "hidden"){
				$(".multitaskDiv").css("overflow","auto");
			}else{
				$(".multitaskDiv").css("overflow","hidden");
			}
		}		
	},
	unclick : function(obj){
		$(obj).find("td").removeClass('multitask-selected').addClass('multitask-unselected');			
	},
	defaultUnClick : function(){
		multitaskVar.onfocusMenu.obj.attr("isOnclick","false");
		multitaskVar.onfocusMenu.bodyDiv.css("top",-9999);	
	}
}

var Multitask_TabPanel = function(_id) {
	this.id = _id;
	this.pageAry = new Array();
	this.all = {};
	this.addTabPage = function(_id) {
		this.pageAry.push(_id);
		this.all[_id] = new Menu_TabPage(_id, this);
	}
	this.getPageId = function(_index) {
		return this.pageAry[_index];
	}
}
Multitask_TabPanel.prototype.showPage = function(_pageId) {
	this.all[_pageId] = new Menu_TabPage(_pageId, this);
	
	$("#"+_pageId+"_titleDiv").click();
}



var Menu_TabPage = function(_id, _manager) {
	this.id = _id;
}
function multiTaskInit(titleposition,theme) {
	if(theme == 'haiyisoft2' || theme == 'haiyisoft3'){
		initMultiTaskThemeStyle(theme);
	}
	
	//初始化
		multitaskVar.bodyDiv_0 = $("#0_bodyDiv");
		//multitaskVar.btnActive = $$pageContextPath+ 'css/css/'+theme+'/multitask/images/shouye_active.jpg';
		//multitaskVar.btnUnActive = $$pageContextPath+ 'css/css/'+theme+'/multitask/images/shouye.png';
		multitaskVar.maxNum = $("#SYS_MAINPAGEPANEL-tab-num").val();
		multitaskVar.mainPageTD = $("#multitaskMenuTitleTd_0");
		multitaskVar.mainPageBtn = $("#multitaskMenuTitleButton_0");
		multitaskVar.titleposition = titleposition;
		multitaskVar.contextMenu = $("#SYS_MAINPAGEPANEL-oncontextmenu");
		MultitaskPanelManager.menuHandler(multitaskVar.mainPageTD, 0);
		/*if(theme == 'haiyisoft3'){
			var mainPage = {bodyFrame : $({src : $$pageContextPath+ "/framework/commonjsp/mainPage3.jsp"}),menuCell : $()}
		}else{*/
			var mainPage = {bodyFrame : $({src : $$pageContextPath+ "/framework/commonjsp/mainPage.jsp"}),menuCell : $()}
		//}
		multitaskVar.hasOpenMenu.push(mainPage);
		for(var i = 1; i < multitaskVar.maxNum; i++){
			multitaskVar.numSequence.addLast("_menu_"+i);
		}
		if(typeof(MultiTaskMouseEvent) != 'undefined'){//有多任务鼠标经过单击事件的扩展点
			$OnMouseEvent =  $.extend({} ,$OnMouseEvent,MultiTaskMouseEvent);
		}
		
		if(typeof(MultiTaskDom) != 'undefined'){
			MultitaskPanelManager = $.extend({} , MultitaskPanelManager,MultiTaskDom);
		}				
}

function initMultiTaskThemeStyle(theme){
		//南网多任务样式
		$OnMouseEvent =  $.extend({} ,$OnMouseEvent,{
			mouseover : function(obj){				
				var element = "div";
				if($(obj).attr("flag") == 'firstpage'){
					element = 'span>div';
				}
				 if($(obj).attr("isOnclick") != "true"){
				 	obj.style.cursor = "pointer";
					 $(obj).find(" td div").removeClass("multitask-operator-icon-unselect-mouseout").addClass("multitask-operator-icon-unselect-mouseover");
					 $(obj).find(">"+element+"").addClass('multitask-item-unselect-mouseover')
				 }else{
				 	obj.style.cursor = "pointer";
				 	 $(obj).find(" td div").removeClass("multitask-operator-icon-select-mouseout").addClass("multitask-operator-icon-select-mouseover");
				 	 $(obj).find(">"+element+"").addClass('multitask-item-select-mouseover')
				 }
			},
			mouseout : function(obj){
				var element = "div";
				if($(obj).attr("flag") == 'firstpage'){
					element = 'span>div';
				}
				 if($(obj).attr("isOnclick") != "true"){
					 $(obj).find(" td div").removeClass("multitask-operator-icon-unselect-mouseover").addClass("multitask-operator-icon-unselect-mouseout");
					 $(obj).find(">"+element+"").removeClass('multitask-item-unselect-mouseover')
				 }else{
				 	 if(theme == 'haiyisoft3'){
				 	 	$(obj).find(" td div").removeClass("multitask-operator-icon-select-mouseover").removeClass("multitask-operator-icon-unselect-mouseover").addClass("multitask-operator-icon-select-mouseout");
				 	 }else{
				 	 	$(obj).find(" td div").removeClass("multitask-operator-icon-select-mouseover").addClass("multitask-operator-icon-select-mouseout");
				 	 }
				 	 
				 	 $(obj).find(">"+element+"").removeClass('multitask-item-select-mouseover')
				 }				
			},
			click : function(obj){ //单击多任务标题时执行，切换多任务
				var code = $(obj).attr("code");
				/*if(code == undefined){
					$("#0_bodyFrame").attr("src","/main/mainpage")
				}*/
			
				if(typeof $$openMenuByCode != 'undefined'){ //是clientmenu参数时，需要调用该方法
					$$openMenuByCode(code);
				}
				var element = "div";
				// bodyDiv是这次打开的任务
				if($(obj).attr("flag") == 'firstpage'){
					element = 'span>div';
				}
				$("#multitaskMenuTitleTable").find(".multitask-selected").removeClass("multitask-selected");
				$(obj).find(">"+element+"").addClass("multitask-selected");
				$(obj).find(">"+element+"").removeClass('multitask-item-select-mouseover')
				$(obj).find(">"+element+"").removeClass('multitask-item-unselect-mouseover')
				var obj = $(obj).find(".multitask-operator-icon-unselect-mouseout");
				if(obj.length > 0){
					obj.removeClass("multitask-operator-icon-unselect-mouseout").addClass("multitask-operator-icon-select-mouseout");
				}else{
					obj = multitaskVar.onfocusMenu.obj.find(".multitask-operator-icon-unselect-mouseover")
					if(obj.length > 0){
						obj.removeClass("multitask-operator-icon-unselect-mouseover").addClass("multitask-operator-icon-select-mouseout");
					}
				}
				
			},
			unclick : function(target){//单击多任务标题时执行，切换多任务
				var element = "div";
				if($(target).attr("flag") == 'firstpage'){
					element = 'span>div';
				}
				//bodyDiv是这次打开的任务
				$(target).find(">div").removeClass('multitask-item-select-mouseover')
				$(target).find(">div").removeClass('multitask-item-unselect-mouseover')
				var obj = target.find(".multitask-operator-icon-unselect-mouseover"),flag = false;
				if(obj.length > 0){
					obj.removeClass("multitask-operator-icon-unselect-mouseover").addClass("multitask-operator-icon-unselect-mouseout");
					flag = true;
				}
				obj = target.find(".multitask-operator-icon-select-mouseout")
				if(obj.length > 0){
					if(flag ){
						obj.removeClass("multitask-operator-icon-select-mouseout")
					}else{
						obj.removeClass("multitask-operator-icon-select-mouseout").addClass("multitask-operator-icon-unselect-mouseout");
					}
				}			
			}
		});
		
		MultitaskPanelManager = $.extend({} , MultitaskPanelManager,{
			getMultitaskCellText : function(newMenuID, newMenuTitle, newMenuCode,newMenuUrl) {
				var cellText = "<div  class='multitask-othertask' >" +
								"<table width='100%' cellspacing= '0' cellpadding='0' height='100%' class='multitask-title-table'><tr> " +
								 "<td  style='vertical-align:middle' align='center'  width='28px' title='"+newMenuTitle+"'></td>" +
								    "<td  id='showmenuTitleTd_"+newMenuID+"'   code='"+newMenuCode+"' align='left' style='vertical-align:middle;overflow:hidden;white-space:nowrap;word-break:keep-all;text-overflow:ellipsis;' nowrap title='"+newMenuTitle+"'>"+newMenuTitle+"</td>"+
								    "<td  class='mulitiask-operator-icon'   onclick='MultitaskPanelManager.closeMenuPageById(\""+newMenuID+"\")' onmouseover=\"tabttitleover(this)\" onmouseout=\"tabttitleout(this)\" nowrap title='"+newMenuTitle+"'>"+'<div class="multitask-operator-icon-unselect-mouseout" ></div>'+"</td>"+
								    "<td id='multitaskMenuTitleRightTd_"+newMenuID+"' style='vertical-align:middle;' width='5px' align='center'>"+
								    "</td>"+
								    "</tr></table>"+
								"</div>";
				return cellText;
			},
			
			taskItemPosition:function(){
				return "valign='top'";
			},
			taskItemBackground:function(){
				return "background:rgb(244,246,249)";
			},
			multitaskmaxbuttonmouseover:function (tbobj,type){				
				tbobj.bgColor='';
				tbobj.style.color='';
				tbobj.style.cursor='pointer';
			},
		    multitaskmaxbuttonmouseout :function (tbobj,type){
				tbobj.bgColor='f5f6f7';
				tbobj.style.color='#000000';
				tbobj.style.cursor='default';
		    }
			
		});
	}

function initMultiTaskTheme3Style(theme){
		$OnMouseEvent =  $.extend({} ,$OnMouseEvent,{
			mouseover : function(obj){
				if($(obj).hasClass('firstpage-td')){
					
					$(obj).find("div").removeClass('firstpage-normal').removeClass('firstpage-click').addClass("firstpage-hover")
				}else{
					
				}
				 
			},
			mouseout : function(obj){
				if($(obj).hasClass('firstpage-td')){
					$(obj).find("div").removeClass('firstpage-hover').addClass("firstpage-normal")
				}else{
					if($(obj).attr("isOnclick") != "true"){
						 $(obj).find(" td div").removeClass("unselect-mouseover").addClass("unselect-mouseout");
					 }else{
					 	 $(obj).find(" td div").removeClass("select-mouseover").addClass("select-mouseout");
					 }
				
				}
				
			},
			click : function(obj,bodyDiv,titleTdId){ //单击多任务标题时执行，切换多任务
				if($(obj).hasClass('firstpage-td')){//首页单击,出菜单 
					$(obj).find("div").removeClass('firstpage-hover').addClass("firstpage-click");
					if($("#menuContainer").css("display") == "none"){
						$("#menuContainer").css("display","block");
					}else{
						$("#menuContainer").css("display","none");
					}
				}else{
				
					$(obj).attr("isOnclick","true");
					$(obj).addClass("multitask-selected");
					
					bodyDiv.css("top",0);
					if(titleTdId != 0){
						//multitaskVar.mainPageBtn.attr("src",multitaskVar.btnUnActive);
						multitaskVar.bodyDiv_0.css("top",-9999);
					}else{
						multitaskVar.bodyDiv_0.css("top",0);
					}
					$("#mytestinput").focus();
					//火狐滚动条的问题
					if($firefox){
						if($(".multitaskDiv").css("overflow") == "hidden"){
							$(".multitaskDiv").css("overflow","auto");
						}else{
							$(".multitaskDiv").css("overflow","hidden");
						}
					}
				}
				
			},
			unclick : function(bodyDiv){//单击多任务标题时执行，切换多任务
				$(bodyDiv).removeClass("multitask-selected");
				if($(bodyDiv).attr("id").split("_")[0] == '0'){//首页单击

				}else{
					multitaskVar.onfocusMenu.obj.attr("isOnclick","false");
					
					multitaskVar.onfocusMenu.bodyDiv.css("top",-9999);	
				}
							
			}
		});
		
		MultitaskPanelManager = $.extend({} , MultitaskPanelManager,{
			getMultitaskCellText : function(newMenuID, newMenuTitle, newMenuCode,newMenuUrl) {
			
				var cellText = "<div  style='margin-left:8px;border-radius: 5px; background-color: #1e4269; cursor: pointer;height:35px;line-height:35px;text-align:center'>"	
							  +" <span  id='showmenuTitleTd_"+newMenuID+"' code='"+newMenuCode+"'> "+newMenuTitle+"</span>" 
							  
							  +" <span style='width:20px;display:inline-block' onclick='MultitaskPanelManager.closeMenuPageById(\""+newMenuID+"\")'> X </span>"
				              + "</div>";
				
				return cellText;
			},
			
			taskItemPosition:function(){
				return "valign='middle'";
			},
			taskItemBackground:function(){
				return "background:rgb(244,246,249)";
			},
			multitaskmaxbuttonmouseover:function (tbobj,type){		
				
				$(tbobj).find(".oncontext-menu-content").addClass("oncontext-menu-content-over");
			},
		    multitaskmaxbuttonmouseout :function (tbobj,type){
				
				$(tbobj).find(".oncontext-menu-content").removeClass("oncontext-menu-content-over");
				
		    },
		    getCharLength:function(string){
	
				var length = ((string.charLength()) * 6 + 68) > 200 ? 200: (string.charLength()) * 6 + 50;
				return length;
			},
			mainPageClick : function(flag){
				if(flag == false){//单击桌面时，执行，将当前onfocusMenu改成桌面任务					
					multitaskVar.onfocusMenu.bodyDiv.css("top",-9999);						
					multitaskVar.onfocusMenu = {id : 0, obj : $("#multitaskMenuTitleTd_0"), bodyDiv:$("#0_bodyDiv"),parent : null};
					
				}
				
				$("#0_bodyDiv").css("top",0);
				if($firefox)
				if($(".multitaskDiv").css("overflow") == "hidden"){
					$(".multitaskDiv").css("overflow","auto");
				}else{
					$(".multitaskDiv").css("overflow","hidden");
				}
			},
			menuHandler : function(obj, titleTdId,menucode){//单击桌面菜单时，不算多任务的单击
				var bodyDiv = $("#" + titleTdId + "_bodyDiv"),
					event = $OnMouseEvent;
				obj.hover(
					function(){event.mouseover(this);},
					function(){event.mouseout(this);}
				)
				obj.click(
					function(){
						if(multitaskVar.onfocusMenu != null){
							event.unclick(bodyDiv);
						}    						    
							event.click(this, bodyDiv, titleTdId);
							if(titleTdId != '0'){//单击菜单任务时，不加入onfocusMenu
								multitaskVar.onfocusMenu = {id : titleTdId, obj : $(this), bodyDiv:bodyDiv ,parent : this.parentNode};
							}else{
							}
							
					}
				)
			}
			
		});
	}
/** ***鼠标移开右键菜单时，菜单隐藏****** */
function closeThiscontextMenu(event, haddle) {
	if (isMouseLeaveOrEnter(event, haddle)) {
		multitaskVar.contextMenu.css("display","none")
	}
}
/** *********** */
function clearmyMenuTimeout() {
	if (multitasktimer) {
		clearTimeout(multitasktimer);
		multitasktimer = null;
		multitaskVar.contextMenu.css("display","none")
	}
}
/** ****鼠标移到右键菜单时将计时器关闭******* */
function clearsetTime() {
	if (multitasktimer) {
		clearTimeout(multitasktimer);
		multitasktimer = null;
	}
}
/** ***不将mouseout和mouseover方法赋给子对象***** */
function isMouseLeaveOrEnter(e, handler) {
	if (e.type != 'mouseout' && e.type != 'mouseover')
		return false;
	var reltg = e.relatedTarget ? e.relatedTarget: e.type == 'mouseout' ? e.toElement : e.fromElement;
	while (reltg && reltg != handler)
		reltg = reltg.parentNode;
	return (reltg != handler);
}
/**清空报表缓存*/
function clearCache(report_obj){
    	//关闭窗口清空报表缓存
    	var key=report_obj.reportKey;
    	var url =$$pageContextPath+ "framework/jasper.do";
    	$.ajax({
            url:url,
            type: "post",   //方式
            dataType:"html",
            data:{reportKey:key,action:"clearCache"},
            async:true
    	}); 
}
var MultitaskContentMenu = null;
if(typeof MultitaskPanelManager == 'undefined'){
	MultitaskContentMenu = parent.MultitaskPanelManager
}else{
	MultitaskContentMenu = MultitaskPanelManager;
}


function openHelpPage(){
	for( var index = 0; index < multitaskVar.menuSequence.size(); index++) {
		if(multitaskVar.menuSequence.get(index).menuID == multitaskVar.onfocusContextMenu){
			var appCode = multitaskVar.menuSequence.get(index).code,
				helpCode = multitaskVar.menuSequence.get(index).helpCode;
			var func = multitaskVar.menuSequence.get(index).bodyFrame[0].contentWindow.getHelpIndex;
			if(typeof func == "function"){
				helpCode = func();
			}
			
			window.open($$pageContextPath+'webhelp/helpframe?appCode='+appCode+"&helpCode="+helpCode);
			break;
		}
	}
	multitaskVar.contextMenu.css("display","none");
}

