
//要是重写了多任务，多任务的iframe必须有id,因为path是根据多任务的id来生成的
var $$theme = 'haiyisoft3';
var popwindowOverMultitask = 'false';
var $$isMain3_2 = 'false';
//跨域访问时，第一个页面必须加上?multitaskMenuFlag=true&multitaskMenuId=10&isCrossDomain=true   三个参数
if($$theme == 'haiyisoft2' || $$theme == 'haiyisoft3'){
	if(Haiyisoft.Popwindow == undefined){
		var configStr = '确定',cancelStr = '取消';
		if(Haiyisoft.PopwindowConfig != undefined){
			configStr = Haiyisoft.PopwindowConfig.confirm;
			cancelStr = Haiyisoft.PopwindowConfig.cancel;
		}
		Haiyisoft.Popwindow = {
			
			popwindowTitleHeight:40,//标题栏的高度
			OKBtnHtml:"<button class='k-popwin-btn-ok' id='{id}' optsid='{optsid}' onclick='{onclick}' type='button'>"+configStr+"</button>", // 确定按钮扩展点  {id}  {optsid}  {onclick}必须有
			CancelBtnHtml:"<button  class='k-popwin-btn-cancel' id='{id}' optsid='{optsid}' onclick='{onclick}' type='button'>"+cancelStr+"</button>" ,//取消按钮扩展点
			AlertContentHtml:
			'<div class="i-layout-div i-layout-relative i-layout-full popwin-alert-padding" >'+
			 '<div class="i-layout-div i-layout-height i-layout-absolute i-layout-home popwin-alert" >'+
			  '</div>'+
			  '<div class="i-layout-div i-layout-full popwin-alert-content-padding">'+
			   '<table class="i-layout-full" cellpadding="0" cellspacing="0">'+
			    '<tbody>'+
			     '<tr>'+
			      '<td style=" word-break: break-all; color:black;">{msg}</td>'+
			     '</tr>'+
			    '</tbody>'+
			   '</table>'+
			  '</div>'+
			 '</div>',   // Alert弹出窗内容扩展点，  {msg}必须有
			ConfirmContentHtml:
			'<div class="i-layout-div i-layout-relative i-layout-full popwin-confirm-padding" >'+
			 '<div class="i-layout-div i-layout-height i-layout-absolute i-layout-home popwin-confirm" >'+
			  '</div>'+
			  '<div class="i-layout-div i-layout-full popwin-alert-content-padding">'+
			   '<table class="i-layout-full" cellpadding="0" cellspacing="0">'+
			    '<tbody>'+
			     '<tr>'+
			      '<td style=" word-break: break-all;color:black; ">{msg}</td>'+
			     '</tr>'+
			    '</tbody>'+
			   '</table>'+
			  '</div>'+
			 '</div>',// Confirm弹出窗内容扩展点，  {msg}必须有
			
			TipsContentHtml:
			'<div class="i-layout-div i-layout-relative i-layout-full" style="padding:10px 20px 10px 130px;">'+
			 '<div class="i-layout-div i-layout-height i-layout-absolute i-layout-home {styleclass}" >'+
			  '</div>'+
			  '<div class="i-layout-div i-layout-full popwin-alert-content-padding">'+
			   '<table class="i-layout-full" cellpadding="0" cellspacing="0">'+
			    '<tbody>'+
			     '<tr>'+
			      '<td style=" word-break: break-all; color:black;">{msg}</td>'+
			     '</tr>'+
			    '</tbody>'+
			   '</table>'+
			  '</div>'+
			 '</div>',
			AlertSize:{//Alert弹出窗大小
				width:380,
				height:200
			}, 
			ConfirmSize:{//Confirm弹出窗大小
				width:400,
				height:250
			}, 
			TipsSize:{//Tips弹出窗大小
				width:400,
				height:150
			}
		}
	}
	
}



if(Haiyisoft.Popwindow != undefined && Haiyisoft.Popwindow.popwindowTitleHeight != undefined){
	Haiyisoft.popwindowTitleHeight = Haiyisoft.Popwindow.popwindowTitleHeight;
}else{
	Haiyisoft.popwindowTitleHeight = 30;
}

/**
 * @public
 * @tag popwindow
*/

(function($){
	if(popwindowOverMultitask == 'true'){
			var topWin = null,
			_popWindow = {};
			o = {},
			mainPageIframe = null;//在main.jsp中的popWindowIframe  iframe  // 现在不是了，就是当前多任务的window了
			var currentMultitaskBody = null,//当前多任务的body
			multitaskId = "",//当前多任务的id
			multitaskOpenWindow = "",//当前多任务已经打开的弹出窗
			modelessCount ="",//最近的模式窗口上面有几个非模式窗口
			blockDiv = null;
			//topWin = typeof(isCrossDomain) == "undefined" ? isCrossDomain.curTopWindowRef : isCrossDomain.curTopWindowRef;
			if(isCrossDomain.isCrossDomainFlag){// 跨域开始时的iframe，即url带isCrossDomain=true这个参数的所在的iframe
			      crossDialogBGDiv = [];//此数组存储模态窗口后面覆盖的div（DialogBGDiv）层的z-index；
				  crossModelss = 0;//当前多任务下的模式窗口
				  crossOpenWindow = [];//当前多任务已经打开的窗口（模式与非模式）
			
			}
	}else{
		if(typeof (isCrossDomain.curTopWindowRef.blockBGDivZArr) == "undefined"){
			isCrossDomain.curTopWindowRef.blockBGDivZArr = [];//此数组存储模态窗口后面覆盖的div（DialogBGDiv）层的z-index；
			//因为在模态窗口关闭的时候，我们无法知道该窗口前面是不是还有非模态窗口，就无法设置该div的z-index，
			//只能记住该div的所有z-index,当关闭模态窗口的时候，将div的z-index值恢复为上次的z-index
			isCrossDomain.curTopWindowRef.modelessDialogCount = 0;//最近的模式窗口上面有几个非模式窗口
		}
		var topWin = null,
		    blockDiv = null,
			//_popWindow = {};
			o = {};
		topWin = typeof(isCrossDomain) == "undefined" ? isCrossDomain.curTopWindowRef : isCrossDomain.curTopWindowRef;

	}
	
	//$._Array = [];
	var popWindowManager = {
		defaults : {
			url : 'javascript:void(0);',			// 指向的url地址
			callback : null,					// 容器内回调函数名称,默认为空,(注:请写入外部窗口函数体中,并只需写入名称即可)
			button : '3', 						// 已选按钮，1,确定；2,取消；3,确定，取消； 0,无按钮	默认值为4(考虑不需回调的普通窗口)	
		   	arguments : null,						// 关于参数传递的相关设置
			css : {
				padding : 0,
				margin : 0,
				width : null,
				height : null,
				top : 0,
				left : 0,
				offsetX : 0,
				offsetY : 0,
				textAlign : 'center',
				color : '#000',
				border : '3px solid #aaa',
				backgroundColor : '#008aff',
				cursor : 'wait'
			},
			baseZ : 2001,
			date:false,
			resize:true,
			move:true,
			isMax:false
		},
		isCrossDomainUrl : function(urlPara){
			if(urlPara.indexOf("?")!=-1){
				urlPara+="&isCrossDomain=true";
			}else{
				urlPara+="?isCrossDomain=true"
			}
			if(isCrossDomain.getUrlVar("parentIndex") != null){
				urlPara=isCrossDomain.getUrl("parentIndex", Number(isCrossDomain.getUrlVar("parentIndex")));
			}else{
				urlPara+="&parentIndex=1";
			}
			return urlPara;
		},
		
		showModalDialog : function(urlPara, titlePara, callbackNamePara, argumentsPara, widthPara, heightPara, buttonPara, showx, showy){
			this.popWindow({
				url : urlPara,
				title :titlePara,
				modal:true,
				callback:callbackNamePara,
				arguments:argumentsPara,
				button:buttonPara,
				css : {
					width : widthPara,
					height : heightPara,
					top : showy,
					left : showx
				}
			});
		},
		
		showModelessDialog : function(urlPara,titlePara,widthPara,heightPara,buttonPara,showx,showy){
			this.popWindow({
				url:urlPara,
				title:titlePara,
				modal:false,
				callback:null,
				arguments:null,
				button:buttonPara,
				css : {
					width : widthPara,
					height : heightPara,
					top : showy,
					left : showx
				}
			});
		},
		popWindow : function(opts){
			return this.install(opts);
		},
		install : function(opts){
			if(popwindowOverMultitask == 'true'){				
				//if(topWin == undefined){				 //需要每次都创建，因为有可能是在多任务外调用弹窗
					//if(!isPopCrossFlag){// 这个变量在frameworkUtil.js中定义，判断当前页面是否是跨域					
					//	openMultitask.each(function(){
							//if(this.style.top == 0 || this.style.top == "0px"){//初始化当前多任务里打开弹出窗需要的信息
								var currentWindow = window;
								var parentNumber=0;  
								if(currentWindow.$$multitaskMenuFlag != 'true'){  
									while(currentWindow.parent != null){
										if(currentWindow.$$multitaskMenuFlag == 'true'){
											multitaskId = currentWindow.$$multitaskMenuId+"_bodyDiv";
											break;
										}else{
											if(parentNumber>=20){
									          break;
									        }
									        
											parentNumber=parentNumber+1;
											currentWindow = currentWindow.parent;
										}
									}
								}else{
									multitaskId = currentWindow.$$multitaskMenuId+"_bodyDiv";
								}
								
								if(parentNumber >=20 ){ //打开任务时没有传递$$multitaskMenuFlag变量，如首页，这时还是按照以前的算法处理  // 这里应该是不会发生的
									var openMultitask = $("div[multitask='true']",$(isCrossDomain.curTopWindowRef.document));
									openMultitask.each(function(){
										if(this.style.top == 0 || this.style.top == "0px"){//初始化当前多任务里打开弹出窗需要的信息
											multitaskId = $(this).attr("id");
											return false;
										}
									})
								}
																
								modelessCount = multitaskId+"_modelless";
								multitaskOpenWindow = multitaskId+"_openwindow";
								
								
								if($$isMain3_2 == 'true'){
									currentMultitaskBody = $("#"+multitaskId.split("_")[0]+"_bodyFrame",$(isCrossDomain.curTopWindowRef.frames['mainpageIframe'].document))[0].contentWindow;
								}else{
									//currentMultitaskBody = $("#"+multitaskId.split("_")[0]+"_bodyFrame",$(isCrossDomain.curTopWindowRef.document))[0].contentWindow;
									currentMultitaskBody = currentWindow;  //不从top上取了
								}
							    
							    topWin = currentMultitaskBody;
							    blockDiv = $("#_DialogBGDiv", topWin.document);
							    
							    //mainPageIframe = $("#popWindowIframe",$(isCrossDomain.curTopWindowRef.document))[0].contentWindow;
								mainPageIframe = topWin;
								mainPageIframe.initPopWindowObj(multitaskId);
								
							    //return false;
							//}
					//	})
					/*}else{//跨域了
						var crossIframe = window;						
						while(!crossIframe.isCrossDomain.isCrossDomainFlag){//找到跨域的那个iframe，以后的弹出窗都放在该iframe下	,需要跨域的页面，URL后必须带isCrossDomain=true参数		
							crossIframe = crossIframe.parent;
						}
					    topWin = crossIframe;
					    blockDiv = $("#_DialogBGDiv", topWin.document);
					}*/
				//}
				blockDiv = $("#_DialogBGDiv", topWin.document);//在多任务外调用时，blockDiv在ready中并没有正确获取，在这里重新获取
			}
			//topWin.focus();
			var isPost = false;
			if(opts.url instanceof Object){
				isPost = true;
				if(opts.url.datawrap!=undefined){
					opts.datawrap = opts.url.datawrap;
				}else{
					opts.datawrap = null;	
				}
				opts.param = opts.url.param;
				opts.url = isCrossDomain.isCrossDomainFlag?this.isCrossDomainUrl(opts.url.url):opts.url.url;
			}else{
				if(opts.url != undefined){
					opts.url = isCrossDomain.isCrossDomainFlag?this.isCrossDomainUrl(opts.url):opts.url;
				}
				
				opts.param = null;
			}
		    var url = opts && opts.url !== undefined ? opts.url : undefined;
		    opts = $.extend({}, this.defaults, opts || {});
		    var css = $.extend({}, this.defaults.css, opts.css || {});
		    if(typeof (opts.css.top) != "undefined"){
		    	opts.date = true;	
		    }
		    url = url === undefined ? opts.url : url;
		    var f="";
		    if(url.indexOf($$pageContextPath)==0){
		    	f="AP";
		    }else if(url.substring(0,1) == "/"){
		    	f="addAP"
		    }else if(url.substring(0,4).toLowerCase() == "http" ){
		    	f="CUSTOM";
		    }else{
		    	f="RP";
		    }
		    switch (f) {
		        case 'AP':
		            break;
		    	case 'CUSTOM':
		    		break;
		    	case 'RP':
		    		var address = location.href; 		    
		    		if(address.indexOf("debugUI.do") != -1) {	//证明地址栏里的url有debugUI.do 	
		    			url = address.substring(0, address.indexOf('/debugUI.do') + 1) + url; 		    	
		    		} else { 		    	
		    			url = address.substring(0, address.lastIndexOf('/') + 1) + url; 		 
		       		}
		    		break;
		    	case "addAP":
		    		url=$$pageContextPath+url.substring(1,url.length);
		    		break;
		    }
		    if(url.indexOf('appcontext') != -1){ //url地址带appcontext参数时，表示会分模块部署
		    	var parameters = url.split("?")[1];
		    	var parameterArr = parameters.split("&");
		    	for(var i=0;i<parameterArr.length;i++){
		    		if(parameterArr[i].indexOf('appcontext') != -1){
		    			opts.appcontext = parameterArr[i].split("=")[1];
		    			break;
		    		}
		    	}
		    	
		    }
		  
		    //为了分应用添加的功能
		    if(opts.appcontext != undefined && opts.appcontext != ""){ //有appcontext是通过openTabTask方法调用的
		    	url = url.substring($$pageContextPath.length,url.length);
		    	var appcontext = opts.appcontext;
				var  start = url.substring(0, 1);
				if(start == '/'){
					url = url.substring(1,url.length);
				}
				if(appcontext != undefined && appcontext != ''){
					if('/' != appcontext.substring(0,1)){
						appcontext = '/' + appcontext;
					}
				}
				if($$devmode == 'false'){ //现场部署
					url = appcontext + "/" + url;
				}else{//开发模式
					url = $$pageContextPath + url;
				}
			}
			
		    
		    if(isPost){
		    	if(popwindowOverMultitask == 'true'){			
		    		/*if(!isPopCrossFlag){
					    	var currentTopWin = typeof(isCrossDomain) == "undefined" ? isCrossDomain.curTopWindowRef : isCrossDomain.curTopWindowRef;
					    	currentTopWin.popWindowUrl = {url:url,param:opts.param,datawrap:opts.datawrap};
					    	currentTopWin.getPopWindowUrl = function(){
								return currentTopWin.popWindowUrl;
							}
				    }else{//跨域，放在topWin上了*/
				    		topWin.popWindowUrl = {url:url,param:opts.param,datawrap:opts.datawrap};
				    		topWin.getPopWindowUrl = function(){
								return topWin.popWindowUrl;
							}
				  //  }
		    	}else{
		    		topWin.popWindowUrl = {url:url,param:opts.param,datawrap:opts.datawrap};
					topWin.getPopWindowUrl = function(){
						return topWin.popWindowUrl;
					}
		    	}
			    
		    }
			
		    var z = opts.baseZ;
			opts.id = new Date().getTime();
			
			if(popwindowOverMultitask == 'true'){
				/*if(!isPopCrossFlag){
					mainPageIframe.setMultitaskOpenWindow(multitaskOpenWindow,opts.id);//将打开的弹出窗放入其中
				}else{	
					
					topWin.crossOpenWindow.push(opts.id);
				}*/
				
				mainPageIframe.setMultitaskOpenWindow(multitaskOpenWindow,opts.id);//将打开的弹出窗放入其中			
			}
			
			if(opts.callback){
				window.popWindowCallback = opts.callback;
			}else{
				window.popWindowCallback = null;
			}
			if(opts.arguments){
				window.arguments = opts.arguments;
			}
			var iframeUrl = isPost ? $$pageContextPath+"/framework/popwin" : url;
			window.blockDiv = $("#_DialogBGDiv", topWin.document);
			blockDiv = window.blockDiv;  //挂在top上时，必须在赋一下，(这个blockDiv它的作用域是popwindow.js的匿名函数中)
			if (opts.modal != false) {//true || undefined 表示为模式窗口
				blockDiv.show();
				if(popwindowOverMultitask == 'true'){	
					//if(!isPopCrossFlag){
						if(mainPageIframe.popWindowObj[modelessCount] == 0){
							blockDiv.css('z-index',parseInt(blockDiv.css('z-index')) + 3);
						}else{
							blockDiv.css('z-index',parseInt(blockDiv.css('z-index'))+3 + parseInt(mainPageIframe.popWindowObj[modelessCount])*2);
						}
						
						mainPageIframe.setMultitaskId(multitaskId,blockDiv.css('z-index'));
						mainPageIframe.setModelessCount(modelessCount,0);////当前窗口时模式窗口，设置该参数为0
					/*}else{
						if(topWin.crossModelss == 0){
							blockDiv.css('z-index',parseInt(blockDiv.css('z-index')) + 3);
						}else{
							blockDiv.css('z-index',parseInt(blockDiv.css('z-index'))+3 + parseInt(topWin.crossModelss)*2);
						}
						
						topWin.crossDialogBGDiv.push(blockDiv.css('z-index'));
						topWin.crossModelss = 0;
					}*/
				}else{
					
					if(isCrossDomain.curTopWindowRef.modelessDialogCount == 0){
						blockDiv.css('z-index',parseInt(blockDiv.css('z-index')) + 3);
					}else{
						blockDiv.css('z-index',parseInt(blockDiv.css('z-index'))+3 + parseInt(isCrossDomain.curTopWindowRef.modelessDialogCount)*2);
					}
					isCrossDomain.curTopWindowRef.blockBGDivZArr.push(blockDiv.css('z-index'));
					isCrossDomain.curTopWindowRef.modelessDialogCount = 0;//当前窗口时模式窗口，设置该参数为0
						
				}				
				z = parseInt(blockDiv.css('z-index'))+1;
			}else{//非模式窗口
				if(popwindowOverMultitask == 'true'){	
					//if(!isPopCrossFlag){
						z = parseInt(blockDiv.css('z-index'))+3+parseInt(mainPageIframe.popWindowObj[modelessCount])*2;		
						mainPageIframe.setModelessCount(modelessCount,mainPageIframe.popWindowObj[modelessCount]+1);
					/*}else{
						z = parseInt(blockDiv.css('z-index'))+3+parseInt(topWin.crossModelss)*2;		
						topWin.crossModelss = topWin.crossModelss + 1;
					}*/
				}else{
					z = parseInt(blockDiv.css('z-index'))+3+parseInt(isCrossDomain.curTopWindowRef.modelessDialogCount)*2;
					isCrossDomain.curTopWindowRef.modelessDialogCount++;
				}
				
			}
			
            if(!opts.content){
				$("#masklayerDiv", topWin.document).css({display:"block",zIndex:"10000000"}); //显示遮罩层
			}
				
			var popWin = this.setDialogPosition(opts, css, blockDiv, z, iframeUrl);
			window.optsId = opts.id;
			window.lyr3 = $(popWin);
			topWin.document.body.appendChild(lyr3[0]);
			topWin.document.body.appendChild(lyr3[1]);
			//topWin.$._Array.push(this.getPath());
					
		  	var roleHandler = this.setWinEventHandle(z, opts);
		  	if(opts.isMax)
		  		roleHandler.maximize();
			//o.setWinSize = this.setWinSize;
			o.id = opts.id;
						
			//消失遮罩层
			if(!opts.content){
				var count = 0;		
				var $popWindowFrame = $("#_DialogFrame_"+opts.id+"",topWin.document);				
				$popWindowFrame.load(function(){
					var src = $(this).attr("src");
					if( src.indexOf("popwin") !=-1 ){//提交到popWin.jsp了，会执行两次
						if( count == 1){//第二次提交时才将其消失
							$("#masklayerDiv", topWin.document).css({display:"none",zIndex:"9999"});
						}
					}else{
						$("#masklayerDiv", topWin.document).css({display:"none",zIndex:"9999"});
					}
					count ++;
					setTimeout(function(){//不知道为什么，有的页面在IE9下只执行一次，只能在消失一次
						$("#masklayerDiv", topWin.document).css({display:"none",zIndex:"9999"});
					},0)
				});
			}
	
		  	return o;
		},
		showChooseBtn : function(opts){
			var OKbtnhtml   =	this.getcustomBtn(opts,'OKbtnhtml','确 定');
			var Cancelbtnhtml = this.getcustomBtn(opts,'Cancelbtnhtml','取 消');
			var AllbtnhtmlCB  = OKbtnhtml + Cancelbtnhtml;
			var btnList =[null,OKbtnhtml,Cancelbtnhtml,AllbtnhtmlCB];
			opts.button = (opts.button > 3 || opts.button < 0)?3:opts.button;
			return btnList[opts.button];
		},
		getOperator : function(opts){
			function _getOperator(operator){
				if(operator){
					operator = operator.split(" ");
					var operators = "";
						section =  '<a role="button" class="popwin-window-action popwin-link" style="display:{display}"><span onclick="{click}" role="{operator}" class="popwin-icon popwin-i-{operator}"></span></a>';
					for(var i = 0; i < operator.length; i++){
						var display = operator[i] == "restore" ? "none" : "inline-block";
						var click = operator[i] == "close" ? "$.unpopWindow("+opts.id+","+opts.modal+")" : "window.resize()";
						operators += section.replace(new RegExp("{operator}","g"), operator[i]);
						operators = operators.replace(new RegExp("{display}"), display);
						operators = operators.replace(new RegExp("{click}"), click);
					}
					return operators;
				}else{
					return "";
				}
			}
			if(opts.operator == 1){
				return _getOperator("close");
			}else if(opts.operator == 0){
				return _getOperator();
			}else{
				return _getOperator("minimize maximize restore close");
			}
		},
		setIframeCss : function(id,css){
			var opts = $("#_DialogBGFrame_"+id, topWin.document);
			opts.css({
				"width":css.width,
				"height":css.height,
				"top":css.top,
				"left":css.left
			});
		},
		isLtIe9 : function(){
			return $msie && ($.browser.version == "7.0" || $.browser.version == "8.0");
		},
		getFxTime : function(){
			if(isLtIe9()){return 0;}else{return 200;}
		},
		moveLimit : function(l, t, rl, rt){
			var size = this.getWindowSize(), w = size.w, h = size.h;
			if(rl < 30){l = 30 - (rl - l)};
			if(l > (w - 30)){l = w - 30};
			if(t > (h - 8)){t = h - 8};
			if(t < 0){t = 0};
			t += 6;
			if($msie){l += 9;}else{l += 1;}
			return {l:l, t:t};
		},
		getWindowSize : function(){
			if(popwindowOverMultitask == 'true'){		
				var win = topWin;
			}else{
				var win = isCrossDomain.curTopWindowRef;
			}
			return {
				w : win.innerWidth || (win.document.documentElement && win.document.documentElement.scrollWidth),
				h : (win.innerHeight || (win.document.documentElement && win.document.documentElement.scrollHeight))-30
			}
		},
		setWinSize : function(w, h){
			var winRef = window;
			while($(winRef.frameElement).attr("optsid") == null){
				winRef = winRef.parent;
			}
			var divId = $(winRef.frameElement).attr("optsid");
			$("#_DialogDiv_"+divId, topWin.document).css({width:w, height:h});
		},
		setWinEvent : function(z, opts, titleH){
			var me = this;
			var test = $("#_DialogDiv_"+optsId, topWin.document),
			proxy = $("#moveProxy", topWin.document).css({zIndex:z+2}),
			move = $("#_DialogHead_"+optsId, topWin.document),
			content = $("#_DialogContent_"+optsId, topWin.document),
			mask = $("#moveMask", topWin.document).css({zIndex:z+1}),
			min = move.find(".popwin-i-minimize"),
			max = move.find(".popwin-i-maximize"),
			restore = move.find(".popwin-i-restore").parent(),
			body = $(topWin.document),
			operator = move.find(".popwin-window-actions");
			resizeGrips = test.find(".popwin-resize-handle");
			$.data(test, "minH", test.height() + titleH);
			$.data(test, "minW", test.width());
			
			//_popWindow.test = test;
			
			function disableSelection(){
				test.disableSelection();
				proxy.disableSelection();
				move.disableSelection();
				content.disableSelection();
				body.disableSelection();
				mask.disableSelection();
			}
			function getDisplacement(triggerEvt, _evt, action, offset){
				var x = _evt.clientX - triggerEvt.clientX,
					y = _evt.clientY - triggerEvt.clientY,
					action = actionsMap(x, y)[action];
				return {
					h : Number(test.offset().top+$.data(test,"h")+action.y) > me.getWindowSize().h ? me.getWindowSize().h - test.offset().top : Number($.data(test,"h")+action.y),
					w : Number(test.offset().left+$.data(test,"w")+action.x) > me.getWindowSize().w ? me.getWindowSize().w - test.offset().left : Number($.data(test,"w")+action.x)
				}
			}
			function actionsMap(x, y){
				return {
					n : {x:0, y:-y},s : {x:0, y:y},w : {x:-x, y:0},e : {x:x, y:0},nw : {x:-x, y:-y},ne : {x:x, y:-y},sw : {x:-x, y:y},se : {x:x, y:y}
				}
			}
			/***btnEvt***/
			var btns = test.find(".popwin-window-actions .popwin-icon");
			btns.mousedown(function(evt){
				evt.stopPropagation();
				//if(typeof(importjs) != 'undefined'){	//可视化时，点击最小化最大化，需要将下拉等下拉框隐藏					
		  				//var frame = isCrossDomain.curTopWindowRef.frames["_DialogFrame_" +optsId];
		  				if(popwindowOverMultitask == 'true'){
							if(topWin == undefined){
								this.setTopWin();
							}
							var frame = topWin.frames["_DialogFrame_" +optsId];
						}else{
							var frame = isCrossDomain.curTopWindowRef.frames["_DialogFrame_" +optsId];
						}
						try{ //跨域时会报错
							   if(frame.Haiyisoft.ComponentRegister != undefined){//可视化时，点击最小化最大化，需要将下拉等下拉框隐藏				
				  					var currentDisplayComponent = frame.Haiyisoft.ComponentRegister.currentDisplayComponent;
					  				if(currentDisplayComponent.length != 0){
							     		var backup = [];
								     	for(var i=0;i<currentDisplayComponent.length;i++){
								     		backup.push(currentDisplayComponent[i]);
								     	}
								     	for(var i=0;i<backup.length;i++){
								     		backup[i].collapse(evt);
								     	}
							     	}
				  				}
						}catch(e){
							
						}	  			
		  						  		    	
		  		//}
				roleHandler[$(evt.target).attr("role")]();
			})
			
			var roleHandler = {
				state : null,
				minimize : function(){
					roleHandler.state = "min";
					min.hide();
					max.hide();
					restore.show();
					$.data(test,"h",test.height());
					resizeGrips.hide();
					content.hide();
					test.height(0);
		  			me.setIframeCss(optsId,{"width":test.width(),"height":titleH,"top":test.offset().top,"left":test.offset().left});
				},
				maximize : function(){
					roleHandler.state = "max";
					min.hide();
					max.hide();
					restore.show();
					$.data(test,"h",test.height());
					$.data(test,"w",test.width());
					$.data(test,"l",test.offset().left);
					$.data(test,"t",test.offset().top);
					resizeGrips.hide();
					test.css({width:me.getWindowSize().w, height:me.getWindowSize().h, top:0, left:0});
		  			me.setIframeCss(optsId,{"width":me.getWindowSize().w,"height":me.getWindowSize().h+titleH,"top":0,"left":0});
				},
				restore : function(){
					if(roleHandler.state == "min"){
						min.show();
						max.show();
						restore.hide();
						resizeGrips.show();
						content.show();
						test.height($.data(test,"h"));
					}
					if(roleHandler.state == "max"){
						min.show();
						max.show();
						restore.hide();
						resizeGrips.show();
						test.css({width:$.data(test,"w"),height:$.data(test,"h"),top:$.data(test,"t"),left:$.data(test,"l")});
					}
					me.setIframeCss(optsId,{"width":$.data(test,"w"),"height":$.data(test,"h")+titleH,"top":$.data(test,"t"),"left":$.data(test,"l")});
				},
				close : function(){}
			}
			if(!opts.move){
				return roleHandler;
			}
			/***move***/
			body.bind("moveTrigger",function(event, _evt, firefoxEvt, id){
				var offset = {x:firefoxEvt == undefined ? _evt.offsetX : firefoxEvt.layerX, y : firefoxEvt == undefined ? _evt.offsetY : firefoxEvt.layerY},
					w = test.width(),
					h = test.height();
				body.mousemove(function(evt){
					var l = evt.clientX-offset.x-16, t = evt.clientY-offset.y-6, rl = l + w, rt = t + h, ios = me.moveLimit(l,t,rl,rt);
					proxy.css({left:ios.l, top:ios.t});
				}).mouseup(function(){
					body.data("move_div").css({top:proxy.css("top"), left:proxy.css("left")});
					me.setIframeCss(optsId,{"width":proxy.css("width"),"height":proxy.css("height"),"top":proxy.css("top"),"left":proxy.css("left")});
					proxy.hide();
					mask.hide();
					body.unbind("mousemove mouseup");
				})
			})
			move.mousedown(function(evt){
				if(!$(evt.target).hasClass("popwin-move"))
					return;
			//	disableSelection();
				proxy.css({top:test.css("top"), left:test.css("left"), width:test.width(), height:test.height()+titleH});
				proxy.show();
				mask.show();
				body.data("move_div",test);
				body.trigger("moveTrigger", [evt, $firefox ? getEvent() : undefined]);	
			})
			/***resize***/
			if(!opts.resize){
				resizeGrips.hide();
				return roleHandler;
			}
			body.bind("resizeTrigger",function(evt, triggerEvt, action, firefoxEvt){
				var offset = {x:firefoxEvt == undefined ? triggerEvt.offsetX : firefoxEvt.layerX, y : firefoxEvt == undefined ? triggerEvt.offsetY : firefoxEvt.layerY};
				body.mousemove(function(_evt){
					var d = getDisplacement(triggerEvt, _evt, action, offset);
					proxy.css({width:d.w < $.data(test, "minW") ? $.data(test, "minW") : d.w, height:d.h < $.data(test, "minH") ? $.data(test, "minH") : d.h});
				}).mouseup(function(){
					body.data("resize_div").css({height:proxy.height() - /*($msie ? 0 : titleH)*/ titleH, width:proxy.width()})
					me.setIframeCss(optsId,{"width":proxy.css("width"),"height":proxy.css("height"),"top":proxy.css("top"),"left":proxy.css("left")});
					proxy.hide();
					mask.hide();
					body.unbind("mousemove mouseup");
				})
			})
			resizeGrips.mousedown(function(evt){
			//	disableSelection();
				proxy.css({top:test.css("top"), left:test.css("left"), width:test.width(), height:test.height()+titleH});
				proxy.show();
				mask.show();
				$.data(test,"w",test.width());
				$.data(test,"h",test.height()+titleH);
				body.data("resize_div",test);
				body.trigger("resizeTrigger", [evt, $(this).attr("action"), $firefox ? getEvent() : undefined]);	
			})
			return roleHandler;
		},
		getPath : function(){
			var path=[], isTop=false, win=window;
			if(popwindowOverMultitask == 'true'){
				/*if(isCrossDomain.isCrossDomainFlag){// 跨域最开始时的iframe
		
				}else if(isPopCrossFlag){//将父的iframe 的 id 给它
						var id = win.frameElement && win.frameElement.id;
						if(id == ""){
							id = 'frameElementID';
							win.frameElement.id = id;
					}
						path.push(id);
					}else{*/
						var flag = true;
						try{
							var id = win.frameElement && win.frameElement.id;
						}catch(e){ //ie中会执行该catch
							flag = false;
						}
						if(flag){
							while(!isTop){//这个循环正常情况下最多只会执行两次 一个多任务的id 一个主页面的iframe的id
								var innerFlag = false;
								try{
									var id = win.frameElement && win.frameElement.id;
								}catch(e){
									innerFlag = true; //在第一个跨域的iframe执行  IE中会执行catch
								}
								if(innerFlag){
									path.push('1_bodyFrame');
								}else{
									if(id == ""){
										id = 'frameElementID';
										win.frameElement.id = id;
									}
									path.push(id);
									
									if(win == topWin){ //应该是topWin了
											isTop = true;
									}
									if(!isTop){
											win = win.parent;
									}
								}
								
							}
						}else{
							path.push($$multitaskMenuId+"_bodyFrame");
						}
				//	}
			}else{
				while(!isTop){
					var id = win.frameElement && win.frameElement.id;
					if(id == ""){
						id = 'frameElementID';
						win.frameElement.id = id;
					}
					path.push(id);
					win = win.parent;
					if(win == win.top)
						isTop=true;
				}
			}
			return path.join(",");
		},
		
		setTopWin:function (){
			//if(!isPopCrossFlag){
							
			var currentWindow = window;
			var parentNumber=0;  
			if(currentWindow.$$multitaskMenuFlag != 'true'){
				while(currentWindow.parent != null){
					if(currentWindow.$$multitaskMenuFlag == 'true'){
						multitaskId = currentWindow.$$multitaskMenuId+"_bodyDiv";
						break;
					}else{
						if(parentNumber>=20){ //大于20应该不会出现
				          break;
				        }
				        
						parentNumber=parentNumber+1;
						currentWindow = currentWindow.parent;
					}
				}
		   }else{
			   multitaskId = currentWindow.$$multitaskMenuId+"_bodyDiv";
		   }

			if(parentNumber >=20 ){ //打开任务时没有传递$$multitaskMenuFlag变量，如首页，这时还是按照以前的算法处理
				var openMultitask = $("div[multitask='true']",$(isCrossDomain.curTopWindowRef.document));
				openMultitask.each(function(){
					if(this.style.top == 0 || this.style.top == "0px"){//初始化当前多任务里打开弹出窗需要的信息
						multitaskId = $(this).attr("id");
						return false;
					}
				})
			}
								
				//openMultitask.each(function(){						
				//	if(this.style.top == 0 || this.style.top == "0px"){//初始化当前多任务里打开弹出窗需要的信息
					//	multitaskId = $(this).attr("id");
						modelessCount = multitaskId+"_modelless";
						multitaskOpenWindow = multitaskId+"_openwindow";	
					//	mainPageIframe = $("#popWindowIframe",$(isCrossDomain.curTopWindowRef.document))[0].contentWindow;//需要的变量放在popWindow.html中了
						 if($$isMain3_2 == 'true'){
						 	topWin = $("#"+multitaskId.split("_")[0]+"_bodyFrame",$(isCrossDomain.curTopWindowRef.frames['mainpageIframe'].document))[0].contentWindow;
						 }else{
							//topWin = $("#"+multitaskId.split("_")[0]+"_bodyFrame",$(isCrossDomain.curTopWindowRef.document))[0].contentWindow;
							topWin = currentWindow;
						}
					    blockDiv = $("#_DialogBGDiv", topWin.document);
					    mainPageIframe = currentWindow;
				//	    return false;
				//	}
				//})
			/*}else{
				var crossIframe = window;						
				while(!crossIframe.isCrossDomain.isCrossDomainFlag){//找到跨域的那个iframe，以后的弹出窗都放在该iframe下				
					crossIframe = crossIframe.parent;
				}
				
			    topWin = crossIframe;
			    blockDiv = $("#_DialogBGDiv", topWin.document);
			}*/
		},

		getFrame : function(arr){
			if(popwindowOverMultitask == 'true'){
				
				if(arr == undefined){
					return;
				}
				arr = arr.split(",");
			    if(isCrossDomain.isCrossDomainFlag){//跨域最开始时的iframe  ,这时是不能有回调的
					 var winRef = {};
					 winRef.popWindowCallback = undefined;
				}/* else if(isPopCrossFlag){
					var winRef=topWin,win=null;
					win=arr.pop();
					var w = winRef.document.getElementById(win);
					if(w != null)
						winRef = w.contentWindow;
					else
						winRef = window;	
					
				}*/else{
					//var winRef=topWin.parent,win=null;
					//var winRef=topWin,win=null;
					//因为现在的弹出窗都是放在多任务下的，所以需要查找其父，在父才能查找该 多任务的iframe
					/*if(arr[0] != null && arr[0] != ""){
						while(arr.length!=0){
							win=arr.pop();
							var w = winRef.document.getElementById(win);
							if(w != null)
								winRef = w.contentWindow;
							else
								winRef = window;			
						}
					}*/

					if(arr.length == 1){
						var winRef = topWin;
					}else if(arr.length == 2){		//改成这样了，这样就不用parent了			
						var w = topWin.document.getElementById(arr[0]);
						winRef = w.contentWindow;
					}
				}
				
			}else{
				arr = arr.split(",");
				var winRef=topWin,win=null;
				if(arr[0] != null && arr[0] != "")
					while(arr.length!=0){
						win=arr.pop();
						var w = winRef.document.getElementById(win);
						if(w != null)
							winRef = w.contentWindow;
						else
							winRef = window;			
					}
			}
			
			return winRef;
		},
		getFrameId : function(winRef){
			return winRef.frameElement.id;
		},
		remove : function(divId,modal){
			if(popwindowOverMultitask == 'true'){
				if(topWin == undefined){
					this.setTopWin();
				}
			}
			var win = this.getFrame($("#_DialogDiv_"+divId, $(topWin.document)).attr("path"));
		    var frame = window.frames["_DialogFrame_" +divId];
			
			//关闭窗口清空报表缓存
			try{ //跨域时会报错
				if(frame != undefined && typeof frame.jasper_Obj == "object"){
			    	var key=frame.jasper_Obj.reportKey;
			    	var url =$$pageContextPath+ "framework/jasper.do";
			    	$.ajax({
			            url:url,
			            type: "post",   //方式
			            dataType:"html",
			            data:{reportKey:key,action:"clearCache"},
			            async:true
			    	}); 
		    	}
			}catch(e){
				
			}
	    	
		    if(win.popWindowCallback != null){
		    	var isRun = $("#Dialog_"+divId+"_isRuncallback").val();
				if(isRun == 'true'){
			    	if(win.popWindowCallback != null){
			    		var rv = frame.returnValue;
				    	if (typeof rv == 'function') {
				    		var value = rv();
				    		if(value == 'unrun'){//不执行弹窗的关闭操作		    			
				    			return;
				    		}
							if(win.arguments != null){
								//try{
									win.popWindowCallback(value,win.arguments,0);
								//}catch(ex){
								//}
							}else{
								//try{
									win.popWindowCallback(value,'',0);
								//}catch(ex){
								//}
							}
						}else{
							if(win.arguments != null){
								//try{
									win.popWindowCallback('',win.arguments,0);
								//}catch(ex){
								//}
							}else{
								//try{
									win.popWindowCallback('','',0);
								//}catch(ex){
								//}
							}
						}
			    	}
				}
			}
			this.block(win,modal,divId);
			this.reset(divId);
		},
		submit : function(divId,modal){
			if(popwindowOverMultitask == 'true'){
				if(topWin == undefined){
					this.setTopWin();
				}
			}
			var win = this.getFrame($("#_DialogDiv_"+divId, $(topWin.document)).attr("path"));
						
		    var frame = window.frames["_DialogFrame_" +divId];
			//先关闭窗口，在执行回调，由于先关闭窗口，js的上下文环境没有了，在后面不能使用js的原生函数
			if(win.popWindowCallback != null){
				var rv = frame.returnValue;
		    	if (typeof rv == 'function') {
		    		var value = rv();
		    		if(value == 'unrun'){//不执行弹窗的关闭操作		    			
				    	return;
				    }
					if(win.arguments != null){
						//try{
							win.popWindowCallback(value,win.arguments);
					//	}catch(ex){
					//	}
					}else{
						//try{
							win.popWindowCallback(value);
						//}catch(ex){
						//}
					}
				}
			}
			this.block(win,modal,divId);
			this.reset(divId);
		},
		winClose : function(divId,modal){
			if(popwindowOverMultitask == 'true'){
				if(topWin == undefined){
					this.setTopWin();
				}
			}
			var win = this.getFrame($("#_DialogDiv_"+divId, $(topWin.document)).attr("path"));
			
			
			this.block(win,modal,divId);
			this.reset(divId);
		},
		tipsClose : function(divId){
			if(popwindowOverMultitask == 'true'){
				if(topWin == undefined){
					this.setTopWin();
				}
			}
			var win = this.getFrame($("#_DialogDiv_"+divId, $(topWin.document)).attr("path"));
			if(win.popWindowCallback != null){
				win.popWindowCallback();
			}
			this.block(win,true,divId);
			this.reset(divId);
		},
		close : function(value,modal){
			if(popwindowOverMultitask == 'true'){
				if(topWin == undefined){
					this.setTopWin();
				}
			}
	
	
			var winRef = window;
			while($(winRef.frameElement).attr("optsid") == null){
				winRef = winRef.parent;
			}
			var divId = $(winRef.frameElement).attr("optsid");
			var win = this.getFrame($("#_DialogDiv_"+divId, $(topWin.document)).attr("path"));
			//先关闭窗口，在执行回调，由于先关闭窗口，js的上下文环境没有了，在后面不能使用js的原生函数
			if(typeof(value) != "undefined"){
				if(win.popWindowCallback){
					if(win.arguments != null){
					//	try{
							win.popWindowCallback(value,win.arguments);
					//	}catch(ex){
					//	}
					}else{
						//try{
							win.popWindowCallback(value);
					//	}catch(ex){
						//}
					}
				}
			}
			this.block(win,modal,divId);
			this.reset(divId);
		},
		cancel : function(modal){
			if(popwindowOverMultitask == 'true'){
				if(topWin == undefined){
					this.setTopWin();
				}
			}
	
			var divId = $(window.frameElement).attr("optsid");
			var win = this.getFrame($("#_DialogDiv_"+divId, $(topWin.document)).attr("path"));
			
			if(win.popWindowCallback){
					//try{
						win.popWindowCallback();
					//}catch(ex){
				   // }
			}
			this.block(win,modal,divId);
			this.reset(divId);
		},
		block : function(win,modal,divId){
			if(popwindowOverMultitask == 'true'){
				if(modal || typeof(modal) == "undefined"){//ture、undefined
				//	if(!isPopCrossFlag){
						var length = mainPageIframe.popWindowObj[multitaskId].length;
						if(length > 1){
							//取当前关闭对话框的div
							var closeDialogDiv = topWin.document.getElementById("_DialogDiv_"+divId);
							//取得该div的z-index
							var closeDialogDivZ = closeDialogDiv.style.zIndex;
							//判断closeDialogDivZ是不是blockBGDivZArr中的最后一项（一般情况下都会是最后一项[如果是回调中再弹窗的话就不是最后一个了]）
							//如果不是最后一个_DialogBGDiv的z-index值不用变动，如果是最后一个需要变为前一个z-index
							for(var i = 0; i < length; i++){
								  if((closeDialogDivZ-2) == mainPageIframe.popWindowObj[multitaskId][i]){
									if(i == length-1){
										mainPageIframe.popWindowObj[multitaskId].pop();
									    var upZIndex = mainPageIframe.popWindowObj[multitaskId][mainPageIframe.popWindowObj[multitaskId].length-1];
										blockDiv.css('z-index',parseInt(upZIndex));
									}else{
										//关闭的窗口不是最前面的窗口（回调中弹窗造成的）
										mainPageIframe.popWindowObj[multitaskId].splice(i,1);
									}
									break;
								}
							}
						}else{
							mainPageIframe.popWindowObj[multitaskId].pop();
						    setTimeout(function(){
							  blockDiv.hide();
							},0)
						}
					/*}else{
						//var length = mainPageIframe.popWindowObj[multitaskId].length;
						var length = topWin.crossDialogBGDiv.length
						if(length > 1){
							//取当前关闭对话框的div
							var closeDialogDiv = topWin.document.getElementById("_DialogDiv_"+divId);
							//取得该div的z-index
							var closeDialogDivZ = closeDialogDiv.style.zIndex;
							//判断closeDialogDivZ是不是blockBGDivZArr中的最后一项（一般情况下都会是最后一项[如果是回调中再弹窗的话就不是最后一个了]）
							//如果不是最后一个_DialogBGDiv的z-index值不用变动，如果是最后一个需要变为前一个z-index
							for(var i = 0; i < length; i++){
								  if((closeDialogDivZ-2) == topWin.crossDialogBGDiv[i]){
									if(i == length-1){
										topWin.crossDialogBGDiv.pop();
									    var upZIndex =topWin.crossDialogBGDiv[topWin.crossDialogBGDiv.length-1];
										blockDiv.css('z-index',parseInt(upZIndex));
									}else{
										//关闭的窗口不是最前面的窗口（回调中弹窗造成的）
										topWin.crossDialogBGDiv.splice(i,1);
									}
									break;
								}
							}
						}else{
							topWin.crossDialogBGDiv.pop();
							blockDiv.hide();
						}
					}*/
				}
			}else{
				if(modal || typeof(modal) == "undefined"){//ture、undefined
					var length = isCrossDomain.curTopWindowRef.blockBGDivZArr.length;
					if(length > 1){
						//取当前关闭对话框的div
						var closeDialogDiv = topWin.document.getElementById("_DialogDiv_"+divId);
						//取得该div的z-index
						var closeDialogDivZ = closeDialogDiv.style.zIndex;
						//判断closeDialogDivZ是不是blockBGDivZArr中的最后一项（一般情况下都会是最后一项[如果是回调中再弹窗的话就不是最后一个了]）
						//如果不是最后一个_DialogBGDiv的z-index值不用变动，如果是最后一个需要变为前一个z-index
						for(var i = 0; i < length; i++){
							if((closeDialogDivZ-2) == isCrossDomain.curTopWindowRef.blockBGDivZArr[i]){
								if(i == length-1){
									isCrossDomain.curTopWindowRef.blockBGDivZArr.pop();
									var upZIndex =  isCrossDomain.curTopWindowRef.blockBGDivZArr[isCrossDomain.curTopWindowRef.blockBGDivZArr.length-1];
									win.blockDiv.css('z-index',parseInt(upZIndex));
								}else{
									//关闭的窗口不是最前面的窗口（回调中弹窗造成的）
									isCrossDomain.curTopWindowRef.blockBGDivZArr.splice(i,1);
								}
								break;
							}
						}
					}else{
						isCrossDomain.curTopWindowRef.blockBGDivZArr.pop();
					    setTimeout(function(){
						  win.blockDiv.hide();
						 },0)
					}
				}
			}
			
		},
		reset : function(win,close,time) {
			var div = null,bgFrame=null,frame=null,_win=window.document;
			//,winRef = window.parent;
			/*if(close){
				for(var i = 0; i < time; i++){
					winRef = winRef.parent;
				}
				div = winRef.document.getElementById("_DialogDiv_"+win);
				bgFrame = winRef.document.getElementById("_DialogBGFrame_"+win);
				_win = winRef.document;
			}else{*/
				div = topWin.document.getElementById("_DialogDiv_"+win);
				bgFrame = topWin.document.getElementById("_DialogBGFrame_"+win);
		//	}
			frame = $(div).find("iframe")[0];
			if(frame){
				var dataComponent = frame.contentWindow.$dataComponent;
				if(dataComponent != undefined){
		    		for(var i=0;i<dataComponent.length;i++){ //释放内存
		        		dataComponent[i].releaseMemory();
		        	}
		    	}
			}
			
	    	setTimeout(function(){
	    		if(frame){
					frame.src="";
					frame.outerHTML="";
				}
				div.outerHTML = "";
				bgFrame.outerHTML = "";
	    	},1)	
		}
	};

	 popWindowManager.popWinRender = function(opts, css, z){
	 	var typeClass = "popwin-window-normal";
        if(opts.type == "confirm"){
        	typeClass = "popwin-window-confirm";
        }else if(opts.type == "warning"){
        	typeClass = "popwin-window-warning";
        }
        
	 	var border = "";
	 	if(!opts.modal){
	 		border = "border:1px solid #BCBCBC;"
	 	}
	 	var inputHtml = "";
	 	if(opts.button == 3){
			 inputHtml = '<input type="text"  id="okinput_'+opts.id+'" style="color:#fff;border:0px;width:1px;height:0px;line-height:0px;"/>'+
				'<input type="text"  id="cancelinput_'+opts.id+'" style="color:#fff;border:0px;width:1px;height:0px;line-height:0px;"/>';
		}else if(opts.button == 1){
			inputHtml  = '<input type="text"  id="okinput_'+opts.id+'" style="color:#fff;border:0px;width:1px;height:0px;line-height:0px;"/>';
		}
	
			var popWin = 
				'<iframe id="_DialogBGFrame_'+opts.id+'" class="popwin-window-iframe" style="border: 0px; z-index:'+z+'; position: absolute; top: '+css.top+'px; left: '+css.left+'px; width: '+css.width+'px; height: '+(parseInt(css.height)+parseInt(Haiyisoft.popwindowTitleHeight))+'px;"></iframe>'+
				'<div id="_DialogDiv_'+opts.id+'" path="'+this.getPath()+'" class="popwin-widget popwin-window '+typeClass+'" data-role="draggable" style="z-index:'+(parseInt(z)+1)+';position:absolute;top:'+css.top+'px;left:'+css.left+'px;width:'+css.width+'px;height:'+css.height+'px">'+
					'<div class="popwin-window-titlebar popwin-header" id="_DialogHead_'+opts.id+'">'+
						'<table class="popwin-window-header-table" cellpadding=0 cellspacing=0><tr>' +
							'<td style="width:6px"><div class="popwin-window-l"></div><input type="hidden" id="Dialog_'+opts.id+'_isRuncallback" value="'+opts.isRunCallback+'"/></td>' +
							'<td class="popwin-window-m popwin-move"></td>' +
							'<td style="width:6px"><div class="popwin-window-r"></div></td>' +
						'</tr></table>'+
						'<span class="popwin-window-title popwin-move">'+opts.title+'</span>'+
						'<div class="popwin-window-actions">'+
							'{operator}'+
						'</div>'+
					'</div>'+
					'<div class="popwin-resize-handle popwin-resize-e" action="e" style="display: block;"></div>'+
					'<div class="popwin-resize-handle popwin-resize-s" action="s" style="display: block;"></div>'+
					'<div class="popwin-resize-handle popwin-resize-se" action="se" style="display: block;"></div>'+
					'<div id="_DialogContent_'+opts.id+'" data-role="window" class="popwin-window-content" tabindex="0" role="dialog" aria-labelledby="window_wnd_title" style="display: block; overflow: hidden;'+border+'">'+
						'<div id="_DialogIframeContent_'+opts.id+'"class="i-layout-div i-layout-relative i-layout-full {paddingbottom}" style=" overflow:hidden;">'+
							'<div class="i-layout-full">'+
								'{iframe}'+
							'</div>'+
						'</div>'+
						 inputHtml + 
						'{buttonGroup}'+						
					'</div>'+
			   '</div>';
		   return popWin;
		};
		popWindowManager.getcustomBtn = function(opts, onclick, value){

			var btntype = {},btnimg = {}, okOnclick = opts.content ? "$.winClose("+opts.id+","+opts.modal+")" : "$.submitpopWindow("+opts.id+","+opts.modal+")";
			
			function getBtnImg(opts,onclick){
				btnimg.OKbtnhtml = 'ok.gif';
				btnimg.Cancelbtnhtml = 'cancel.gif';
				return btnimg[onclick];
			}
			if(Haiyisoft.Popwindow != undefined && Haiyisoft.Popwindow.OKBtnHtml != undefined && Haiyisoft.Popwindow.CancelBtnHtml != undefined){
				
				function getButtonHtml(opts,onclick){
					btntype.OKbtnhtml	 = Haiyisoft.Popwindow.OKBtnHtml;
					btntype.OKbtnhtml = btntype.OKbtnhtml.replace(new RegExp("{id}"), 'Ok_'+opts.id);
				    btntype.OKbtnhtml = btntype.OKbtnhtml.replace(new RegExp("{optsid}"),opts.id);
				    btntype.OKbtnhtml = btntype.OKbtnhtml.replace(new RegExp("{onclick}"),okOnclick);
				    
					btntype.Cancelbtnhtml= Haiyisoft.Popwindow.CancelBtnHtml;
					btntype.Cancelbtnhtml = btntype.Cancelbtnhtml.replace(new RegExp("{id}"), 'Cancel_'+opts.id);
					btntype.Cancelbtnhtml = btntype.Cancelbtnhtml.replace(new RegExp("{optsid}"), opts.id);
					btntype.Cancelbtnhtml = btntype.Cancelbtnhtml.replace(new RegExp("{onclick}"), "$.unpopWindow("+opts.id+","+opts.modal+")");
					return btntype[onclick];
				}								
				var btn =   getButtonHtml(opts,onclick);				
			}else{
				function onclickType(opts,onclick){
					btntype.OKbtnhtml	 = "<button class='k-popwin-btn-ok' id='Ok_"+opts.id+"' optsid="+opts.id+" onclick=\""+okOnclick+"\" type='button'>";
					btntype.Cancelbtnhtml= "<button class='k-popwin-btn-cancel' id='Cancel_"+opts.id+"' optsid="+opts.id+" onclick=\"$.unpopWindow("+opts.id+","+opts.modal+");\" type='button'>";
					return btntype[onclick];
				}
			
				var btn =   onclickType(opts,onclick)
						+   "<table id='button_1_buttonTable' style='border-collapse: collapse;' cellpadding=0 width='100%' height='100%' class='toolBarButton'><tbody><tr>"
						+	"<td align='right'><img src='"+$$pageContextPath+"images/button/"+getBtnImg(opts,onclick)+"' style='width:14px;height:14px;'></td>"
						+	"<td style='vertical-align: bottom;' align='center'>"+value+"</td></tr></tbody></table>"
						+ "</button>";
			}
			
						
			
			return btn;
		};
		popWindowManager.setWinEventHandle = function(z, opts){
			this.setWinEvent(z, opts, Haiyisoft.popwindowTitleHeight);
		};
		popWindowManager.setDialogPosition = function(opts, css, blockDiv, z, iframeUrl){
			if(opts.date){
				opts.resize = false;
				opts.operator = 1;
				css.top = (css.top + css.offsetY) < 0 ? 0 : css.top + css.offsetY;
				css.left = css.left + css.offsetX < 0 ? 0 : css.left + css.offsetX;
				var lowerHeigthNotEnough = blockDiv.height() - css.top < css.height + 30;
				if(lowerHeigthNotEnough){
					css.top = blockDiv.height() - css.height - 30;
				}
				var rightSideWidthNotEnough = css.left + css.width > blockDiv.width();
				if(rightSideWidthNotEnough){
					css.left = blockDiv.width() - css.width;
				}
				var upperHeightNotEnough = css.top > 0?false:true;
				if(lowerHeigthNotEnough && upperHeightNotEnough){
					css.top = 0;
				}
		  	}else{
			    if(!css.height){
					css.height = css.width/2;
				}
			  	var size = this.getWindowSize();
			  	css.width = css.width >= size.w ? size.w : css.width;
			  	css.height = css.height >= size.h ? size.h : css.height;
				css.top = (size.h - css.height - parseInt(Haiyisoft.popwindowTitleHeight)) / 2;
				css.top = css.top < 0 ? 0  : css.top;
				css.left = (size.w - css.width) / 2;
				//设置偏移
			  	css.top = (css.top + css.offsetY) < 0 ? 0 : css.top + css.offsetY;
				css.left = (css.left + css.offsetX) < 0 ? 0 : css.left + css.offsetX;
			}
			var popWin = this.popWinRender(opts, css, z);
			//var iHeight = this.showChooseBtn(opts) == null ? "100%" : Number(css.height-36);
			if(!opts.content){
				var _iframe = iframeUrl == "http://" ? '<div class="popWindowAlert">'+opts.msg+'</div>' : '<iframe  class="popwin-iframe-padding" optsid="'+opts.id+'"  width="100%" scroll="no" src="'+iframeUrl+'" id="_DialogFrame_'+opts.id+'" class="popwin-window-content-padding"  name="_DialogFrame_'+opts.id+'" allowTransparency="true" frameborder="0" style="height:100%;overflow: auto;background-color: #transparent;border:none;"></iframe>';
			}else{
				var _iframe = opts.content;
			}
			popWin = popWin.replace(new RegExp("{iframe}","g"),_iframe);
			popWin = popWin.replace(new RegExp("{operator}","g"),this.getOperator(opts));
			popWin = popWin.replace(new RegExp("{buttonGroup}","g"),this.showChooseBtn(opts) == null ? "" : '<div class="popwin-buttongroup-td i-layout-width i-layout-absolute" style="bottom:0;">'+this.showChooseBtn(opts)+'</div>');
			if(this.showChooseBtn(opts) != null){
				popWin = popWin.replace(new RegExp("{paddingbottom}","g"), "popwin-window-content-to-buttongroup");
			}else{
				popWin = popWin.replace(new RegExp("{paddingbottom}","g"), "");
			}
			return popWin;
		};
		popWindowManager.Alert = function(t,msg,func,w,h,l){
			if(l == 1){
				msg = t;
				if(Haiyisoft.PopwindowConfig != undefined){
					t = Haiyisoft.PopwindowConfig.tips;
				}else{
					t = '提示信息';
				}
				
			}
			var alertWidth = 310,alertHeight = 120;
			if(Haiyisoft.Popwindow != undefined && Haiyisoft.Popwindow.AlertSize != undefined){
				alertWidth = Haiyisoft.Popwindow.AlertSize.width;
				alertHeight = Haiyisoft.Popwindow.AlertSize.height;
			}
			if(w == undefined)w = alertWidth;
			if(h == undefined)h = alertHeight;
			
			if(Haiyisoft.Popwindow != undefined && Haiyisoft.Popwindow.AlertContentHtml != undefined){// 有该扩展点
				var content = Haiyisoft.Popwindow.AlertContentHtml.replace(new RegExp("{msg}"), msg); 
			}else{
				
				var content = 	'<div class="i-layout-div i-layout-relative i-layout-full popwin-alert-padding" >' +
									'<div class="i-layout-div i-layout-height i-layout-absolute i-layout-home popwin-alert"  ></div>' +
									'<div class="i-layout-div i-layout-full"><table class="i-layout-full" cellpadding=0 cellspacing=0><tr><td style=" word-break: break-all; ">'+msg+'</td></tr></table>' +
								'</div>';
			}			
			
			var opts = {resize:false,operator:0,button:1,title:t,type:'warning',css:{width:w,height:h},content:content,modal:true};
			var id = this.install(opts).id;
			lyr3.find("button[id^='Ok_']").bind("click", function() {if(func){func();}}); 
			lyr3.find("button[id^='Ok_']").focus();
			return id;
		};
		popWindowManager.Confirm = function(t,msg,func1,func2,w,h){
			if(Haiyisoft.Popwindow != undefined && Haiyisoft.Popwindow.ConfirmContentHtml != undefined){// 有该扩展点
				var content = Haiyisoft.Popwindow.ConfirmContentHtml.replace(new RegExp("{msg}"), msg); 
			}else{
				var content = 	'<div class="i-layout-div i-layout-relative i-layout-full popwin-confirm-padding" >' +
								'<div class="i-layout-div i-layout-height i-layout-absolute i-layout-home popwin-confirm" ></div>' +
								'<div class="i-layout-div i-layout-full"><table class="i-layout-full" cellpadding=0 cellspacing=0><tr><td style=" word-break: break-all; ">'+msg+'</td></tr></table>' +
							'</div>';
			}
			var confirmWidth = 310,confirmHeight = 120;
			if(Haiyisoft.Popwindow != undefined && Haiyisoft.Popwindow.ConfirmSize != undefined){
				confirmWidth = Haiyisoft.Popwindow.ConfirmSize.width;
				confirmHeight = Haiyisoft.Popwindow.ConfirmSize.height;
			}
			
			var opts = {resize:false,operator:0,button:3,title:t,type:'confirm',css:{width:w?w:confirmWidth,height:h?h:confirmHeight},content:content,modal:true};
			var id = this.install(opts).id;
			lyr3.find("button[id^='Ok_']").bind("click", function() {if(func1){if(func1.callback){func1.callback(func1.param);}else{func1()}}});
			lyr3.find("button[id^='Cancel_']").bind("click", function() {if(func2){if(func2.callback){func2.callback(func2.param);}else{func2()}}});
			return id;
		};
		popWindowManager.Tips = function(t,msg,time,type,w,h,callback){
			var me = this;
			//type == 0 || type == undefined 表示success图标
			var styleclass = "popwin-tips-success";
			if(type == 1){
				//1 表示error图标
				styleclass = "popwin-tips-error";
			}else if(type == 2){
				//1 表示warning图标
				styleclass = "popwin-tips-warning";
			}
			if(Haiyisoft.Popwindow != undefined && Haiyisoft.Popwindow.TipsContentHtml != undefined){// 有该扩展点
				var content = Haiyisoft.Popwindow.TipsContentHtml.replace(new RegExp("{msg}"), msg); 
				content=content.replace(new RegExp("{styleclass}"), styleclass);
			}else{
				var content = 	'<div class="i-layout-div i-layout-relative i-layout-full" style="padding:10px 20px 20px 130px;">' +
									'<div class="i-layout-div i-layout-height i-layout-absolute i-layout-home '+styleclass+' " ></div>' +
									'<div class="i-layout-div i-layout-full"><table class="i-layout-full" cellpadding=0 cellspacing=0><tr><td style=" word-break: break-all; ">'+msg+'</td></tr></table>' +
								'</div>';
			}
			var tipsWidth = 310,tipsHeight = 120;
			if(Haiyisoft.Popwindow != undefined && Haiyisoft.Popwindow.TipsSize != undefined){
				tipsWidth = Haiyisoft.Popwindow.TipsSize.width;
				tipsHeight = Haiyisoft.Popwindow.TipsSize.height;
			}
			if(callback == undefined){
				callback = null;
			}
			var opts = {resize:false,id:new Date().getTime(),callback:callback,operator:0,button:0,title:t,msg:msg,type:'warning',url:"http://",css:{width:w?w:tipsWidth,height:h?h:tipsHeight},content:content,modal:true};
			var id = this.install(opts).id;
			setTimeout(function(){me.tipsClose(id)}, time);
		};
	/**
		 * 创建一个模态窗口
		 * @public
		 * @method showModalDialog
		 * @param  url或{url:url, param:param} 当参数为url时，窗口传递方式为get；当参数为对象时则url属性为url地址，param为参数对象
		 * @param  title 窗口标题
		 * @param  callback 回调函数
		 * @param  arguments 回调参数
		 * @param  width 窗口宽度
		 * @param  height 窗口高度
		 * @param  button 按钮类型(0:无按钮,1:确定,2:取消,3：确定取消)
		 * @param  showx 窗口横坐标
		 * @param  showy 窗口纵坐标
		 * 
		 */
	$.showModalDialog = function(urlPara, titlePara, callbackNamePara, argumentsPara, widthPara, heightPara, buttonPara, showx, showy){
		popWindowManager.showModalDialog(urlPara, titlePara, callbackNamePara, argumentsPara, widthPara, heightPara, buttonPara, showx, showy);
	};
	/**
	     * 创建一个非模态窗口
		 * @public 
		 * @method showModelessDialog
		 * @param  url    [url或{url:url, param:param} 当参数为url时，窗口传递方式为get；当参数为对象时则url属性为url地址，param为参数对象]
		 * @param  title  [窗口标题]
		 * @param  width  [窗口宽度]
		 * @param  height [窗口高度]
		 * @param  button [按钮类型(0:无按钮,1:确定,2:取消,3：确定取消)]
		 * @param  showx      [横向偏移量]
		 * @param  showy      [纵向偏移量]
		 */
	$.showModelessDialog = function(urlPara,titlePara,widthPara,heightPara,buttonPara,showx,showy){
		popWindowManager.showModelessDialog(urlPara,titlePara,widthPara,heightPara,buttonPara,showx,showy);
	};
	/**
		 * 创建一个模态窗口
		 * @public
		 * @method popWindow
		 * @param opts为一对象，有以下属性
		 *  url:访问地址;
			title:窗口标题;
			callback:回调函数;
			arguments:回调参数;
			button:0-无按钮;1-确定;2-取消;3-确定取消;
			operator:0-无按钮;1-关闭;2-全部按钮;
			resize:是否可改变大小;
			move:是否可以移位置;
			css:{width:宽度,height:高度,top:纵坐标,left:横坐标,offsetX:向右偏移值,offsetY:向下偏移值
		 */
	$.popWindow = function(opts){
		popWindowManager.popWindow(opts);
	};
	$.unpopWindow = function(divId,modal){
		popWindowManager.remove(divId,modal);
	};
	$.submitpopWindow = function(divId,modal){
		popWindowManager.submit(divId,modal);
	};
	$.winClose = function(divId,modal){
		popWindowManager.winClose(divId,modal);
	};
	$.setWinSize = function(w, h){
		popWindowManager.setWinSize(w, h);
	};
	/**
	     * 创建一个提示框
		 * @public 
		 * @method alert
		 * @param title 标题
		 * @param msg 提示信息
		 * @param func 方法
		 * @param width 宽度
		 * @param height 高度
	*/
	$.alert = function(t,msg,func,w,h){
		//popWindowManager.Alert(t,msg,func,w,h,arguments.length)
		
		var id = popWindowManager.Alert(t,msg,func,w,h,arguments.length);
		setTimeout(
					function(){
						$('#okinput_'+id,topWin.document).val("").focus();
						$('#okinput_'+id,topWin.document).keydown(function(event){
							if(event.keyCode == 13){ //按enter键直接关闭弹出窗
								$.winClose(id,true)
							}
						})
					}
			,1)
			
	};
	/**
	     * 创建一个提示信息框，在指定的时间后消失
		 * @public 
		 * @method tips
		 * @param title 标题
		 * @param msg 提示信息
		 * @param time 关闭时间（单位：ms，无默认时间）
		 * @param type 提示类型（0：成功；1：失败;2:警告，不写该参数默认为0）
		 * @param width 宽度
		 * @param height 高度
	*/
	$.tips = function(t,msg,time,type,w,h,callback){
		popWindowManager.Tips(t,msg,time,type,w,h,callback)
	};
	/**
	     * 提示用户进行选择  
		 * @public 
		 * @method confirm
		 * @param title 标题
		 * @param msg 提示信息
		 * @param fun1  点击确定时执行
		 * @param fun2 点击取消时执行
		 * @param width 宽度
		 * @param height 高度
	*/
	$.confirm = function(t,msg,func1,func2,w,h){
		//popWindowManager.Confirm(t,msg,func1,func2,w,h)
		var id = popWindowManager.Confirm(t,msg,func1,func2,w,h);
		
		setTimeout(
				function(){
					
					$('#okinput_'+id,topWin.document).val("").focus();
					$('#okinput_'+id,topWin.document).keydown(function(event){
						if(event.keyCode == 13){ //按enter键直接关闭弹出窗
							$.winClose(id,true);
							if(func1){if(func1.callback){func1.callback(func1.param);}else{func1()}}
													
						}else if(event.keyCode == 39 ){
							$('#Ok_'+id,topWin.document).removeClass('k-popwin-btn-ok').addClass('k-popwin-btn-cancel');
							$('#Cancel_'+id,topWin.document).removeClass('k-popwin-btn-cancel').addClass('k-popwin-btn-ok');
							$('#cancelinput_'+id,topWin.document).focus();						
						}
					})
					
					$('#cancelinput_'+id,topWin.document).keydown(function(event){
						if(event.keyCode == 13){ //按enter键直接关闭弹出窗
							$.unpopWindow(id,true);	
							if(func2){if(func2.callback){func2.callback(func2.param);}else{func2()}}
												
						}else if(event.keyCode == 37 ){
							$('#Cancel_'+id,topWin.document).removeClass('k-popwin-btn-ok').addClass('k-popwin-btn-cancel');
							$('#Ok_'+id,topWin.document).removeClass('k-popwin-btn-cancel').addClass('k-popwin-btn-ok');
							$('#okinput_'+id,topWin.document).val("").focus();
						}
					})	
			}
		,1)
	};
	$.close = function(str,modal){
		popWindowManager.close(str,modal)
	};
	$.cancel = function(modal){
		popWindowManager.cancel(modal)
	};
})(jQuery);


//jQuery.popWindow.js内容  

;(function($) {

//滚动条滚动一定时，出现向上图标，点击向上图标，滚动到顶部
$.scrollToWindowTop = function(scrollId){
	var scrollUpImg = '<div id="windowScrollTop" style="cursor:pointer;position: fixed;bottom: 60px;right: 50px;display:none;"><img src="'+$$pageContextPath+'images/popWindow/up.jpg" width=50/></div>';
	$(scrollUpImg).appendTo("body");
	$windowScrollTop = $("#windowScrollTop");
	$("#"+scrollId).scroll(function (){
		if($("#"+scrollId).scrollTop() >= 300){
			if($windowScrollTop.css("display") == "none"){
				$windowScrollTop.fadeIn(200);
			}
		}else{
			if($windowScrollTop.css("display") == "block"){
				$windowScrollTop.fadeOut(200);
			}
		}
	})
	
	var _switch = true;
	$windowScrollTop.click(function(){
		$("#"+scrollId).animate({scrollTop: '0px'}, 300);
	})
}
$.showValidatorLayer = function(params){
	var opts = {
		"content":"",
		"contentId":"",
		"positionObj":"",
		"width":500,
		"height":24,
		"direction":"top"         
	},
	timeOut = null;
	
	opts = $.extend({}, opts,params );
	opts.height = parseInt(opts.height);
	opts.width = parseInt(opts.width) + 10;
	
	if($("#"+opts.contentId+"_Outer").css("display") == "block"){
			return;
	}
	
	var referrer = opts.positionObj;
	var left = referrer.offset().left, top = referrer.offset().top;
	if("top" == opts.direction){
		left = left + parseInt(referrer.width())/2 - parseInt(opts.width)/2;
		top = top - opts.height-4;
	}
	
	left = left + "px";
	top = top +"px";

	if(opts.direction == "top" ){
	    var contentHtml = '<div id="'+opts.contentId+'_Outer" style="position:absolute;z-index:1001;left:'+left+';top:'+top+';width:'+opts.width+'px;height:'+opts.height+'px;display:none">' +
	   		          		'<div id="'+opts.contentId+'_content" style="text-align:center;background:#f9f9f9;padding-top:4px;padding-bottom:4px;border:1px solid #d3dae5"></div>' +
	   		          		'<div style="line-height:7px;margin-top:-2px;height:10px"> <img style="position:relative;left:49%" src="'+$$pageContextPath+'images/popWindow/downarrow.jpg"/></div>'+
	                   '</div>';
	}
	
	 var iframeHtml = '<iframe id="'+opts.contentId+'_Iframe"  frameborder="0" class="menuIframe" style="border:0px;position:absolute;z-index:1000;' +
   							'left:'+left+';top:'+top+';width:'+opts.width+'px;height:'+opts.height+'px;display:none">'+
				    '</iframe>',
	delayHiddenTime = 100;
	
	$(contentHtml).appendTo("body");
	$(iframeHtml).appendTo("body");
	$("#"+opts.contentId+"_content").html(opts.content);
	$("#"+opts.contentId,$("#"+opts.contentId+"_content")).css("display","block");
	
	$("#"+opts.contentId+"_Outer").show();
	$("#"+opts.contentId+"_Iframe").show();
	
	$("#"+opts.contentId+"_Outer").unbind("mouseout").bind("mouseout",function(){
		timeOut =  setTimeout(function(){
		 	$("#"+opts.contentId+"_Outer").remove();
		 	$("#"+opts.contentId+"_Iframe").remove();
		 },delayHiddenTime)
	});
	$("#"+opts.contentId+"_Outer").unbind("mouseover").bind("mouseover",function(){
		if(timeOut != null){
			clearTimeout(timeOut);
		}
	});
	
	opts.positionObj.unbind("mouseover").bind("mouseover",function(){
		if(timeOut != null){
			clearTimeout(timeOut);
		}
	});

	opts.positionObj.unbind("mouseout").bind("mouseout",function(){
		timeOut =  setTimeout(function(){
		 	$("#"+opts.contentId+"_Outer").remove();
		 	$("#"+opts.contentId+"_Iframe").remove();
		 },delayHiddenTime)
	});
	
}

$.showDialog = function(id, titlePara, widthPara, heightPara, showx, showy){
	var opts = {
		url : id,
		title :titlePara,
		modal:true,
		css : {
			width : widthPara,
			height : heightPara,
			top : showy,
			left : showx
		}
	};
	var optsId = $.popDialog(opts);
	return optsId;
}

$.closeDialog = function(){remove();}
$.unpopDialog = function(divId) {remove(divId);};
$.hideLayer = function(divId){hide(divId)}
$.popDialog = function(opts) {var optsId = install(opts); return optsId;};
$.popDialog.version = "1.0"; 
$.popDialog.defaults = {
		url : 'javascript:void(0);',			// 指向的url地址
		button : '3', 						// 已选按钮，1,确定；2,取消；3,确定，取消； 0,无按钮	默认值为4(考虑不需回调的普通窗口)	
		css : {
			padding : 0,
			margin : 0,
			width : null,
			height : null,
			top : null,
			left : null,
			textAlign : 'center',
			color : '#000',
			border : '3px solid #aaa',
			backgroundColor : '#008aff',
			cursor : 'wait'
		},
		baseZ : 2001,
		date:false,
		resize:true,
		move:true,
		isMax:false
};
function install(opts) {
	if(typeof(importjs) != 'undefined'){
		/*if($$theme =='haiyisoft2'){
			importjs.use(''+$$pageContextPath+'css/css/haiyisoft2/popwindow/popwindow.css');  //弹出层是挂在当前页面上的，在客户端js中，必须在次引入
		}else{
			importjs.use(''+$$pageContextPath+'css/css/haiyisoft/popwindow/popwindow.css');  //弹出层是挂在当前页面上的，在客户端js中，必须在次引入
		}*/
		
		importjs.use(''+$$pageContextPath+'css/css/'+$$theme+'/popwindow/popwindow.css'); 
		
	}
	
    opts = $.extend({}, $.popDialog.defaults, opts || {});
    var css = $.extend({}, $.popDialog.defaults.css, opts.css || {});
    if(typeof (opts.css.top) != "undefined"){
    	opts.date = true;	
    }
    var z = opts.baseZ;
	opts.id = new Date().getTime();
	function getOperator(opts){
		function _getOperator(operator){
			if(operator){
				operator = operator.split(" ");
				var operators = "";
					section =  '<a role="button" class="popwin-window-action popwin-link" style="display:{display}"><span onclick="{click}" role="{operator}" class="popwin-icon popwin-i-{operator}"></span></a>';
				for(var i = 0; i < operator.length; i++){
					var display = operator[i] == "restore" ? "none" : "inline-block";
					var click = operator[i] == "close" ? "$.hideLayer("+opts.id+")" : "window.resize()";
					operators += section.replace(new RegExp("{operator}","g"), operator[i]);
					operators = operators.replace(new RegExp("{display}"), display);
					operators = operators.replace(new RegExp("{click}"), click);
				}
				return operators;
			}else{
				return "";
			}
		}
		if(opts.operator == 1){
			return _getOperator("close");
		}else if(opts.operator == 0){
			return _getOperator();
		}else{
			return _getOperator("minimize maximize restore close");
		}
	}
	window.blockDiv = $("#_DialogBGDiv");
	blockDiv.show().css("z-index",2001);
	
	window.blockFrame = $("#_DialogBGFrame");
	blockFrame.show().css("z-index",2000);
    if(!css.height){
		css.height = css.width/2;
	}
  	var size = getWindowSize();
	
	css.width = css.width >= size.w ? size.w : css.width;
  	css.height = css.height >= size.h ? size.h : css.height;
	  	
	if(css.top == null || css.left == null){
		css.top = (size.h - css.height - parseInt(Haiyisoft.popwindowTitleHeight)) / 2;
		css.top = css.top < 0 ? 0  : css.top;
		css.left = (size.w - css.width) / 2;
	}
  	setIframeCss({"width":css.width,"height":parseInt(css.height)+parseInt(Haiyisoft.popwindowTitleHeight),"top":css.top,"left":css.left});
	var popWin = popWinRender(opts, css, z);
	//popWin = popWin.replace(new RegExp("{iframe}","g"),document.getElementById(opts.url).outerHTML.replace(opts.url, opts.url+"_dialog"));
	popWin = popWin.replace(new RegExp("{operator}","g"),getOperator(opts));
	$(document.body).append($("#_DialogBGDiv"));
	$(document.body).append($("#_DialogBGFrame"));
  	$(document.body).append(popWin);
  	
    $("#"+opts.url).appendTo($("#_DialogContent_"+opts.id));
  
  	var roleHandler = setWinEvent(z, opts);
  	if(opts.isMax)
  		roleHandler.maximize()
  
  	return opts.id;
};
function setIframeCss(css){
	var opts = $("#_DialogBGFrame");
	opts.css({
		"width":css.width,
		"height":css.height,
		"top":css.top,
		"left":css.left
	});
}
function remove(id){
	$(".popwin-window:last").remove();
	if($(".popwin-window").length == 0){
		$("#_DialogBGDiv").hide();
		$("#_DialogBGFrame").hide();
	}else{
		$(".popwin-window:last").before($("#_DialogBGDiv"));
	}
}
function hide(id){
	$("#_DialogDiv_"+id).hide();
	$("#_DialogBGDiv").hide();
	$("#_DialogBGFrame_"+id).hide();
}
function popWinRender(opts, css, z){
	z = parseInt(z);
	var popWin = 
		'<div id="_DialogDiv_'+opts.id+'" class="popwin-widget popwin-window" data-role="draggable" style="z-index:'+z+';position:absolute;top:'+css.top+'px;left:'+css.left+'px;width:'+css.width+'px;height:'+css.height+'px">'+
			'<div class="popwin-window-titlebar popwin-header" id="_DialogHead_'+opts.id+'">'+
				'<table class="popwin-window-header-table" cellpadding=0 cellspacing=0><tr>' +
					'<td style="width:6px"><div class="popwin-window-l"></div></td>' +
					'<td class="popwin-window-m popwin-move"></td>' +
					'<td style="width:6px"><div class="popwin-window-r"></div></td>' +
				'</tr></table>'+
				'<span class="popwin-window-title popwin-move" style="cursor:default">'+opts.title+'</span>'+
				'<div class="popwin-window-actions">'+
					'{operator}'+
				'</div>'+
			'</div>'+
			'<div class="popwin-resize-handle popwin-resize-e" action="e" style="display: block;"></div>'+
			'<div class="popwin-resize-handle popwin-resize-s" action="s" style="display: block;"></div>'+
			'<div class="popwin-resize-handle popwin-resize-se" action="se" style="display: block;"></div>'+
			'<div id="_DialogContent_'+opts.id+'" data-role="window" class="popwin-window-content" tabindex="0" role="dialog" aria-labelledby="window_wnd_title" style="display: block; overflow: hidden;">'+
			''+
			'</div>'+
	   '</div>'+
	   '<iframe id="_DialogBGFrame_'+opts.id+'"  style="border: 0px; z-index:'+(z-1)+'; position: absolute; top: '+css.top+'px; left: '+css.left+'px; width: '+css.width+'px; height: '+(parseInt(css.height)+parseInt(Haiyisoft.popwindowTitleHeight))+'px;"></iframe>';
   return popWin;
}
function isLtIe9(){
	return $msie && ($.browser.version == "7.0" || $.browser.version == "8.0");
}
function getFxTime(){
	if(isLtIe9()){return 0;}else{return 200;}
}
function moveLimit(l, t, rl, rt){
	var size = getWindowSize(), w = size.w, h = size.h;
//	if(rl > w){l = w - (rl - l);}
//	if(l <= 0){l = 0;}
//	if(rt > h){t = h - (rt - t);}
	if(rl < 30){l = 30 - (rl - l)};
	if(l > (w - 30)){l = w - 30};
	if(t > (h - 8)){t = h - 8};
	if(t < 0){t = 0};
	t += 6;
	if($msie){l += 9;}else{l += 1;}
	return {l:l, t:t};
}
function getWindowSize(){
	var win = window;
	return {
		w : win.innerWidth || (win.document.documentElement && win.document.documentElement.scrollWidth),
		h : (win.innerHeight || (win.document.documentElement && win.document.documentElement.scrollHeight))-30
	}
}
function setWinEvent(z, opts){
	var optsId = opts.id;
	var test = $("#_DialogDiv_"+optsId),
	proxy = $("#moveProxy").css({zIndex:z+2}),
	move = $("#_DialogHead_"+optsId),
	content = $("#_DialogContent_"+optsId),
	mask = $("#moveMask").css({zIndex:z+1}),
	min = move.find(".popwin-i-minimize"),
	max = move.find(".popwin-i-maximize"),
	restore = move.find(".popwin-i-restore").parent(),
	body = $(window.document),
	operator = move.find(".popwin-window-actions"),
	titleH = Haiyisoft.popwindowTitleHeight,
	resizeGrips = test.find(".popwin-resize-handle");
	
	$.data(test, "minH", test.height() + titleH);
	$.data(test, "minW", test.width());
	function disableSelection(){
		test.disableSelection();
		proxy.disableSelection();
		move.disableSelection();content.disableSelection();body.disableSelection();mask.disableSelection();
	}
	function getDisplacement(triggerEvt, _evt, action, offset){
		var x = _evt.clientX - triggerEvt.clientX,
			y = _evt.clientY - triggerEvt.clientY,
			action = actionsMap(x, y)[action];
		return {
			h : Number(test.offset().top+$.data(test,"h")+action.y) > getWindowSize().h ? getWindowSize().h - test.offset().top : Number($.data(test,"h")+action.y),
			w : Number(test.offset().left+$.data(test,"w")+action.x) > getWindowSize().w ? getWindowSize().w - test.offset().left : Number($.data(test,"w")+action.x)
		}
	}
	function actionsMap(x, y){
		return {
			n : {x:0, y:-y},s : {x:0, y:y},w : {x:-x, y:0},e : {x:x, y:0},nw : {x:-x, y:-y},ne : {x:x, y:-y},sw : {x:-x, y:y},se : {x:x, y:y}
		}
	}
	/***btnEvt***/
	var btns = test.find(".popwin-window-actions .popwin-icon");
	btns.mousedown(function(evt){
		if(typeof(importjs) != 'undefined'){		
			evt.stopPropagation();
		}
		roleHandler[$(evt.target).attr("role")]();
	})
	
	var roleHandler = {
		state : null,
		minimize : function(){
			roleHandler.state = "min";
			min.hide();
			max.hide();
			restore.show();
			$.data(test,"h",test.height());
			resizeGrips.hide();
			content.slideUp(getFxTime());
			test.height(0);
			setIframeCss({"width":test.width(),"height":titleH,"top":test.offset().top,"left":test.offset().left});
		},
		maximize : function(){
			roleHandler.state = "max";
			min.hide();
			max.hide();
			restore.show();
			$.data(test,"h",test.height());
			$.data(test,"w",test.width());
			$.data(test,"l",test.offset().left);
			$.data(test,"t",test.offset().top);
			resizeGrips.hide();
			test.css({width:getWindowSize().w, height:getWindowSize().h, top:0, left:0});
			setIframeCss({"width":getWindowSize().w,"height":getWindowSize().h+titleH,"top":0,"left":0});
		},
		restore : function(){
			if(roleHandler.state == "min"){
				min.show();
				max.show();
				restore.hide();
				resizeGrips.show();
				content.slideDown(0, function(){test.height($.data(test,"h"));});
			}
			if(roleHandler.state == "max"){
				min.show();
				max.show();
				restore.hide();
				resizeGrips.show();
				test.css({width:$.data(test,"w"),height:$.data(test,"h"),top:$.data(test,"t"),left:$.data(test,"l")});
			}
			setIframeCss({"width":$.data(test,"w"),"height":$.data(test,"h")+titleH,"top":$.data(test,"t"),"left":$.data(test,"l")});
		},
//		close : /*$.unpopWindow*/ function(){}
		close : function(){}
	}
	if(!opts.move){
		return roleHandler;
	}
	return roleHandler;
}
})(jQuery);
