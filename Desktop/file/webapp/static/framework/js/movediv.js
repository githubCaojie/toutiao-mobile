var beforeheight=0;
function Widgets(){
	var me=this;
	this.init=function(){
		window.onresize = function(){
			me.setDivHeight();
		};
		this.setDivHeight();
		//得到每个div的高度和宽度
		setTimeout(function() {
			me.addIframsrc()
		}, 100);
	},
	this.addIframsrc=function(){
	//	console.log(window.location.href);
	//	var  curContextPath=window.location.href.substring(0, window.location.href.indexOfForSpecifiedNum("/",4));
		$("div [name='widgetDiv']").each(function(i){
			var  thisDivId=$(this).attr("id");
			$("#"+thisDivId+" dd").each(function(){
				var  ddNum=$(this).attr("id").split("_")[0];
				var  ddIframeId=ddNum+"_dlIframe";
				if($("#"+ddNum+"_dlIframesrc").length>0 && $("#"+ddNum+"_dlIframesrc").val()!="" ){	
					var  dlIframeSrc=$("#"+ddNum+"_dlIframesrc").val().indexOf("?")>0?$("#"+ddNum+"_dlIframesrc").val()+"&width="+$(this).width()+"&height="+$(this).height():$("#"+ddNum+"_dlIframesrc").val()+"?width="+$(this).width()+"&height="+$(this).height();
					//对于跨域的处理
					if(dlIframeSrc.indexOf("http://")!=-1){
						var _url = dlIframeSrc.substring(0, dlIframeSrc.indexOfForSpecifiedNum("/",4));
						/*if(curContextPath != _url){
							if(dlIframeSrc.indexOf("?")!=-1){
								dlIframeSrc+="&isCrossDomain=true";
							}else{
								dlIframeSrc+="?isCrossDomain=true"
							}
						}*/
					}
					var modelUrl = $("#"+ddNum+"_dlModelUrl").val();
					if($("#"+ddNum+"_dlModelUrl").length>0 && modelUrl != "undefined" && modelUrl != "" ){	
							if(dlIframeSrc.substring(0,1) == "/"){
								dlIframeSrc=modelUrl+dlIframeSrc.substring(1,dlIframeSrc.length);	
							}else{
								dlIframeSrc=modelUrl+dlIframeSrc;
							}
					}else{
						if(dlIframeSrc.indexOf($$pageContextPath)<0){
							if(dlIframeSrc.substring(0,1) == "/"){
								dlIframeSrc=$$pageContextPath+dlIframeSrc.substring(1,dlIframeSrc.length);	
							}else{
								dlIframeSrc=$$pageContextPath+dlIframeSrc;
							}
							
						}
					}
					
					
					
					
					$("#"+ddIframeId)[0].src=dlIframeSrc;
				}
				
			});
			
		});
	},
	/**
	 * 用于刷新模块的url
	 */
	this.refreshDeskWidget=function(widgetTitle){
		$("td [id$='_moveDivTd']").each(function(){
			if($.trim($(this).html()) == $.trim(widgetTitle)){
				var iframeid = $(this).attr("id").substring(0,$(this).attr("id").indexOf("_"));
				var ifsrc=$("#"+iframeid+"_dlIframe").attr("src");
				$("#"+iframeid+"_dlIframe").attr("src",ifsrc);
			}
		});
	},
	
	/**
	 * 用于获取模块的宽度
	 */
	this.getWidgetWidth=function(widgetTitle){
		var  widgetw=0;
		$("td [id$='_moveDivTd']").each(function(){
			if($.trim($(this).html()) == $.trim(widgetTitle)){
				var iframeid = $(this).attr("id").substring(0,$(this).attr("id").indexOf("_"));
				widgetw=$("#"+iframeid+"_dlIframe").width();
				return false;
			}
		});
		return widgetw;
	},
	this.setDivHeight=function(){
		var  allHeight=$("#main-movediv").height()-20;
		if(Math.abs(beforeheight-allHeight)<10){
			return ;
		}
		beforeheight=allHeight;
		var  allWidth=$("#mask").width();
		//获取每一个列div的高度
		var  maxHeight=0;
		var  cellIndex=0;
		$("div [name='widgetDiv']").each(function(i){
			var  thisdivWidgetsHeight=0;
			var  thisDivId=$(this).attr("id");
			$("#"+thisDivId+" dd").each(function(){
				thisdivWidgetsHeight+=parseInt($(this).attr("beforeHegith"))+30+4;
			});
			
			if(maxHeight==0){
				maxHeight=thisdivWidgetsHeight;
				cellIndex=i;
			}else if(thisdivWidgetsHeight>maxHeight){
				maxHeight=thisdivWidgetsHeight;
				cellIndex=i;
            }
		});
		if(allHeight>maxHeight){
			var  ddlength=$("#widget"+cellIndex+" dd").length;
			$("div [name='widgetDiv']").each(function(i){
				var  thisdivWidgetsHeight=0;
				var  thisDivId=$(this).attr("id");
				var   everyAddHeight=(allHeight-maxHeight)/$("#"+thisDivId+" dd").length;
				$("#"+thisDivId+" dd").each(function(){
					var  beforeHeight=$(this).attr("beforeHegith");
					$(this).css("height",parseInt(beforeHeight)+everyAddHeight);
					 var  ddId=$(this).attr("id");
					 var iframeId=ddId.substring(0,ddId.lastIndexOf("_"));
					$("#"+iframeId+"_dlIframe").css("height",parseInt(beforeHeight)+everyAddHeight);
				});
			});
		}
	},
	this.init();
}
(function($) {
	$.baseball = function(p) {
		if(-[1,]){}else{$("#mask").remove()}
		var cols = $(p.accepter), // accepter集
		ground = [], // 坐标空间
		t, // 被拖动元素
		m = {}, // 被拖动元素属性集
		tip = $("<div style='position:absolute;height:4px;overflow:hidden; background:#eee'></div>"), // 占位元素
		clone, fly, // 拖动启动开关
		base, // 被选中的垒
		mark, // 最后一次插入的相对对象
		above = true, befordrag = function(v) {
			v.stopPropagation();
			v.preventDefault();
			m = {
				ex : v.clientX,
				ey : v.clientY + $(document).scrollTop(),
				x : t.position().left,
				y : t.position().top,
				w : t.width(),
				h : t.height()
			};
			$(document).mousemove(ondrag).mouseup(afterdrag);
			if (document.body.setCapture) {
				t.get(0).setCapture();
				t.get(0).onmousewheel = mousewheel
			}
		}, ondrag = function(v) {
			v.preventDefault();
			$("#mask").fadeIn(200);
			if (!fly) {
				fly = true;
				makeGround();
				width = t.width();
				height = t.height();
				tip.attr("width", width).attr("height", height)
						.addClass("tip-border");
				tip.insertBefore(t);
				mark = t.get(0);
				clone = t.clone().css({
							"position" : "absolute",
							"opacity" : 0.4,
							"left" : m.x,
							"top" : m.y,
							"width" : m.w,
							"z-index" : 10000
						}).insertAfter(t);
				//移动复制的div时，原来的变透明
				t.css("opacity", "0");
			};
			selectBase(v.clientX + $(document).scrollLeft(), v.clientY
							+ $(document).scrollTop());
			clone.css({
						"left" : v.clientX - m.ex + m.x,
						"top" : v.clientY - m.ey + m.y
								+ $(document).scrollTop()
					});	
		}, afterdrag = function(v) {
			if (fly) {
				$("#mask").fadeOut(200);
				//从原来的div中删除
				if (m.lonely) {
					t.appendTo(m.lonely);
				} else if (mark !== t.get(0)) {
					if (above) {
						t.insertBefore(mark).animate({
									opacity : 0
								}, 100);
					} else {
						t.insertAfter(mark).animate({
									opacity : 0
								}, 100);
					}
				}
				var obj_l = tip.position().left;
				var obj_t = tip.position().top;
				if (tip.position().right == t.position().right
						|| obj_t == t.position().bottom) {
					obj_l = t.position().left;
					obj_t = t.position().top;
				}
				tip.remove();
				clone.animate({
							left : obj_l,
							top : obj_t
						}, 300).fadeOut(200, function() {
							$(this).remove()
						});
				t.animate({
							opacity : 1
						}, 200);
					//移动结束后，将复制的div删除
			if(clone.length>0){
			    clone.remove();
			}
			}
			fly = false;
			if (document.body.releaseCapture) {
				t.get(0).releaseCapture();
				t.get(0).onmousewheel = null
			};
			$(document).unbind("mousemove", ondrag)
					   .unbind("mouseup", afterdrag);
			
			//移动结束后,记录现在各div的位置
			//记录现在的最大行数
			var nowRows=1;
			cols.each(function(i, o) {
			   var hasDl=$("#"+$(o).attr("id")+" dl").length;
			   if(hasDl>nowRows){
			      nowRows=hasDl;
			   }
			});
			var  nowDivsx="";
			 var colDivsx="";
			//for(var rown=0;rown<nowRows;rown++){
			  cols.each(function(n, o) {
				colDivsx="";
			  if($("#"+$(o).attr("id")+" dl").length>0){
			   $("#"+$(o).attr("id")+" dl").each(function(i,o){
				  if($(this).css("block")!="none"){
				  if(colDivsx==""){
					  colDivsx+=$(this).attr("id").substring(0,($(this).attr("id").length-3)); 
				  }else{
					  colDivsx+=","+$(this).attr("id").substring(0,($(this).attr("id").length-3));
				  }
				  }
			   });  
			   }
			  if(nowDivsx!=""){
				  nowDivsx+=";"+colDivsx;
			  }else{
				  nowDivsx+=colDivsx;
			  }
			});
		     var groupid=$("#revertwidgetGroupId").val();
			 /*$.ajax({
				 
		         url: $$pageContextPath + "framework/changeDesktop.do?",
	             type:"POST",
	             data:{
	            	 action:"saveOrder",
	            	 position:nowDivsx,
	            	 groupid:groupid
	            	 },
	             dataType:"html",
	             error:function(){alert("进行连接信息传递出错!\n");},
	             success:function(data){
	                
	             },
	             complete: function (XHR, TS) {
			        	XHR = null ;
			        }
	          }); */
		},
		// make base poz
		makeGround = function() {
			ground.length = 0;
			cols.each(function(i, o) {
						var _o = $(o);
						ground.push([_o.offset().left, _o.width(),
								homebase(_o), _o]);
					})
		},
		// 建立各垒坐标系统
		homebase = function(q) {
			var area = [];
			q.find(p.target).each(function(i, o) {
				var _o = $(o), _t = _o.offset().top, _h = _o.height();
				area.push([_t + _h, _o.offset().left + _o.width() / 2,
						_o.offset().top + _h / 2, o]);
			});
			return area;
		},
		// 寻垒
		selectBase = function(x, y) {
			var ball, _at, pi = Math.PI / 4;
			for (var i = 0, el; el = ground[i]; i++) {
				if (x > el[0] && x < el[0] + el[1]) {
					base = el;
					break
				};
			};
			for (var i = 0, el; el = base[2][i]; i++) {
				if (y < el[0]) {
					ball = el;
					break
				}
			};
			if (base[2].length == 0) {
				tip.css({
							"width" : base[3].width(),
							"height" : 4,
							"left" : base[3].offset().left,
							"top" : base[3].offset().top
						});
				m.lonely = base[3];
			} else {
				m.lonely = null;
				if (ball == null) {
					ball = base[2][base[2].length - 1]
				};
				_at = Math.atan2(ball[2] - y, x - ball[1]) + Math.PI;
				if (_at > pi && _at < 3 * pi) {
					niceShock(ball[3], 3, false)
				} else if (_at > 3 * pi && _at < 5 * pi) {
					niceShock(ball[3], 2, false)
				} else if (_at > 5 * pi && _at < 7 * pi) {
					niceShock(ball[3], 1, true)
				} else {
					niceShock(ball[3], 4, true)
				};
			};
		},

		niceShock = function(o, n, u) {

			if ($(o).length > 0) {
				if (n == 1) {
					tip.css({
								"width" : $(o).width(),
								"height" : 4,
								"left" : $(o).offset().left,
								"top" : $(o).offset().top - 4
							})
				} else if (n == 2) {
					tip.css({
								"width" : 4,
								"height" : $(o).height(),
								"left" : $(o).offset().left + $(o).width(),
								"top" : $(o).offset().top
							})
				} else if (n == 3) {
					tip.css({
								"width" : $(o).width(),
								"height" : 4,
								"left" : $(o).offset().left,
								"top" : $(o).offset().top + $(o).height()
							})
				} else {
					tip.css({
								"width" : 4,
								"height" : $(o).height(),
								"left" : $(o).offset().left - 4,
								"top" : $(o).offset().top
							})
				};
				if (o == mark && above === u)
					return false;
				mark = o;
				above = u;
			}
		}, mousewheel = function() {
			window.scrollTo(0, document.documentElement.scrollTop
							- window.event.wheelDelta / 4)
		};
		// 初始绑定事件
		cols.find(p.target).each(function(i, o) {
					(p.handle ? $(o).find(p.handle) : $(o)).mousedown(function(
									v) {
								t = $(o);
								befordrag(v)
							})
				});
	};

})(jQuery)
$(function() {
			$("#mask").hide();
			$("#widgetMaxDiv").hide();
			// 双击标题栏实现最大化 ,还原窗口
			$("table[id^='widgetTable_title_']").each(function(){
				$(this).bind("dblclick", function() { 
					
					var id = $(this).find("td[id$='_moveDivTd']").attr("id");
					id = id.substring(0,id.indexOf("_"));
					if($("#"+id+"_bigestButton").length>0){
					   makeBig(id);
					}
				});
			});
            $("#widgetRefreshDiv_bigestButton").bind("click",function(){
            	var  maxDivId=$("#maxwidgetInfo").val();
            	$("iframe[id='"+maxDivId+"_dlIframe']").each(function(){
            		var ifsrc=$(this).attr("src");
            		$(this).attr("src",ifsrc);
            	});
            });
			$("#widgetMaxDiv_moveDivTd").bind("dblclick", function() {
						makeDivRevert();
					});
			// 最大化按钮
			$("img[alt*=最大化]").bind("click", function() {
						var id = $(this).attr("id");
						id = id.substring(0, id.indexOf("_"));
						makeBig(id);
					});
			$("img[id$='_bigestRefreshButton']").bind("click", function() {
				var id = $(this).attr("id");
				id = id.substring(0, id.lastIndexOf("_"));
				refreshMoveDiv(id);
			});
			// 为最大化div添加还原方法
			$("#widgetMaxDiv_bigestButton").bind("click", function() {
						makeDivRevert();
					});
			// 某个moveDiv的关闭按钮
			$("img[alt*=关闭]").each(function(){  
				$(this).bind("click", function() {
							var id = $(this).attr("id");
							var closWidgetId="";
							// 如果是关闭最大化的情况
							if (id.indexOf("widgetMaxDiv") >= 0) {
								$("#widgetMaxDiv").hide();
								var closeDivId = $("#widgetMaxDlId").val();
								closWidgetId=closeDivId;
								$("#wrap").show(200);
								$("#" + closeDivId + "_dl").hide(200);
	                            
							} else {
								id = id.substring(0, id.indexOf("_"));
								closWidgetId=id;
								$("#" + id + "_dl").hide(200);
							}
							 var groupid=$("#revertwidgetGroupId").val();
						     
							 $.ajax({
								 
						         url: $$pageContextPath + "framework/changeDesktop.do?",
					             type:"POST",
					             data:{
					            	 action:"delete",
					            	 deletedId:closWidgetId,
					            	 groupid:groupid
					            	 },
					             dataType:"html",
					             error:function(){alert("进行连接信息传递出错!\n");},
					             success:function(data){
					                
					             },
					             complete: function (XHR, TS) {
							        	XHR = null ;
							        }
					          }); 
						});
			});
		})
var refreshMoveDiv=function(_divId){
	var  iframeSrc=$("#"+_divId+"_dlIframe").attr("src");
	$("#"+_divId+"_dlIframe").attr("src",iframeSrc);
}		
// 最大化
var makeBig = function(_divId) {
	$("#maxwidgetInfo").val(_divId);
	$("#revertwidgetHeight").val($("#" + _divId + "_dlIframe").attr("height"));
	$("#widgetMaxDiv iframe").attr("src",$("#" + _divId + "_dl iframe").attr("src"));
	$("#widgetMaxDiv_moveDivTd").html($("#" + _divId + "_moveDivTd").html());
	$("#widgetMaxDiv").show(200);
	$("#widgetMaxDlId").val(_divId);
	var  allHeight=$("#main-movediv").height()-50;
	$("#widgetMaxDiv_dlIframe").attr("height",allHeight);
	/** **其他div隐藏** */
	$("#wrap").hide();

}
// 还原
var makeDivRevert = function() {
	// *****将改动的div赋给原始div******/
	var _divId = $("#widgetMaxDlId").val();
	// nowDivButton
	$("#" + _divId + "_dl ifarme").attr("src",$("#widgetMaxDiv_dlIframe").attr("src"));
	// 将最大化图标修改一下
	$("#widgetMaxDiv").html();
	$("#widgetMaxDiv").hide();
	/** **其他div隐藏** */
	$("#wrap").show();

}
