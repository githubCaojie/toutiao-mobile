var curMenuIndex=0;
$(function() {
	window.top.$("#fillarea_1").css("padding-left", "54px");
})
/*点击菜单*/
function toggleMenu(obj) {
	var width=$("#switch").width();
	var flag = $(obj).siblings('ul').is(":hidden");
	if (flag == true) {
		$(obj).find('.jiantou').children('img').css("transform","rotate(90deg)");
		$(obj).siblings('ul').fadeIn();
	} else if (flag == false) {
		$(obj).find('.jiantou').children('img').css("transform","rotate(0deg)");
		$(obj).siblings('ul').fadeOut();
	}
}

/*展开菜单*/
function showMenu() {
	var data=window.top.$("#fillarea_1").css("padding-left");
	var left=data.substring(0,data.length-2);
	if (left > 100) {
		window.top.$("#menuBar").animate({"left":"74px",width:"+=146px"},"fast");
		window.top.$("#fillarea_1").animate({"padding-left":"54px"},"fast",function(){
			$(".leftNav").hide();
			$(".leftNavSlide").show();
			$("#switch").width(54);
			$("#switch").children('img').css("transform","rotate(180deg)");
			$("#leftMenu > ul > li > ul").fadeOut();
		});
	} else {
		window.top.$("#menuBar").animate({"left":"220px",width:"-=146px"},"fast");
		window.top.$("#fillarea_1").animate({"padding-left":"200px"},"fast",function(){
			$(".leftNav").show();
			$(".leftNavSlide").hide();
			$("#switch").width(200);
			$("#switch").children('img').css("transform","rotate(0deg)");
		});
	}
}
function openMenu(name, _link, code,preFix) {
	if(code=="JLZF"){
		debugger;
		$.request({
						url : 'jt/app/jtAppExtDataMain/jlzf?prjId='+prjIdStr,
						success : function(response){
							var url=response.parameters.url;
							window.open(url);
						}
					});		
					return;	
	}
	//preFix  前缀
	$("#curMenu").html(name);
	$("#historyMenu").fadeOut();
	$.request({
		url :'jt/itemMenu/itemList',
		params : {
			'itemCode' :code,
		},
		success : function(response){
			var list = response.getParameter("item");
			console.log(list);
			var html='<span style="cursor:pointer;" onclick="toMain()">首页</span>&nbsp;>&nbsp;';
			for(var i=list.length-1;i>=0;i--){
				html+=list[i].rightItemName+'&nbsp;>&nbsp;';
			}
			html+=name;
			$("#menuRel").html(html);
		}
	});
	if (_link.indexOf("?") > 0) {
		_link += "&appCode=" + code;
	} else {
		_link += "?appCode=" + code;
	}
	_link+="&bdId="+bdIdStr+"&prjId="+prjIdStr;
	window.MultitaskPanelManager.addMenuTab(code, name, _link, true,null,null,preFix);
	var editFlag=true;
	var objs=$("#historyMenu").children('li');
	for(var i=0;i<objs.length;i++){
		var id=$(objs[i]).attr("id");
		if(id&&code==(id.substring(8))){
			editFlag=false;
			break;
		}
	}
	if(editFlag){
		curMenuIndex++;
		$("#historyMenu").children('li').eq(0).after('<li data-index="'+curMenuIndex+'" id="history_'+code+'"><span onclick="openMenu(\''+name+'\',\''+_link+'\',\''+code+'\',\''+preFix+'\')" title="'+name+'">'+name+'</span><div onclick="closeMenu('+curMenuIndex+',this)">X</div></li>');
	}else{
		var index=$("#history_"+code).attr("data-index");
		$("#history_"+code).remove();
		$("#historyMenu").children('li').eq(0).after('<li data-index="'+index+'" id="history_'+code+'"><span onclick="openMenu(\''+name+'\',\''+_link+'\',\''+code+'\',\''+preFix+'\')" title="'+name+'">'+name+'</span><div onclick="closeMenu('+index+',this)">X</div></li>');
	}
}
function closeMenu(id,obj){
	$(obj).parent().remove();
	window.MultitaskPanelManager.closeMenuPageById(id);
	$("#historyMenu").fadeOut();
}
function hideHistory(){
	$("#historyMenu").fadeOut();
}

/*生成点击之后的菜单*/
function genFullMenu(obj) {
	var html = '<ul>';
	for (var i = 0; i < obj.length; i++) {
		var imgStr = obj[i][0];
		//var imgStr="images/main/bbgl.png";
		if (obj[i].length > 5) {
			html += '<li><div onclick="toggleMenu(this)"><img src="' + imgStr + '" /><span>' + obj[i][1] + '</span><div class="jiantou"><img src="images/main/jiantou.png"/></div></div><ul style="display:none;">'
			for (var j = 5; j < obj[i].length; j++) {
				if (obj[i][j].length > 5) {
					html += '<li><div onclick="toggleMenu(this)"><span>' + obj[i][j][1] + '</span>' + '<div class="jiantou"><img src="images/main/jiantou.png"/></div></div>' + '<ul style="display:none;">'
					for (var m = 5; m < obj[i][j].length; m++) {
						if(obj[i][j][m].length>5){
							html+='<li><div onclick="toggleMenu(this)"><span>'+obj[i][j][m][1]+'</span><div class="jiantou"><img src="images/main/jiantou.png"/></div></div><ul style="display:none;">'
							for(var h=5;h<obj[i][j][m].length;h++){
								html+='<li onclick="openMenu(\'' + obj[i][j][m][h][1] + '\',\'' + obj[i][j][m][h][2] + '\',\'' + obj[i][j][m][h][3] + '\',\'' + obj[i][j][m][h][4] + '\')">'+obj[i][j][m][h][1]+'</li>'
							}
							html+='</ul></li>'							
						}else{
							html+='<li class="noChild" onclick="openMenu(\'' + obj[i][j][m][1] + '\',\'' + obj[i][j][m][2] + '\',\'' + obj[i][j][m][3] + '\',\'' + obj[i][j][4] + '\')">'+obj[i][j][m][1]+'</li>'
						}
					}
					html += '</ul></li>'
				} else {
					html += '<li><a onclick="openMenu(\'' + obj[i][j][1] + '\',\'' + obj[i][j][2] + '\',\'' + obj[i][j][3] + '\',\'' + obj[i][j][4] + '\')">' + obj[i][j][1] + '</a></li>'
				}
			}
			html += '</ul>'
		} else {
			html += '<li><div onclick="openMenu(\''+obj[i][1]+'\',\''+obj[i][2]+'\',\''+obj[i][3]+'\',\'' + obj[i][4] + '\')"><img src="' + imgStr + '" /><span>' + obj[i][1] + '</span></div>';
		}
		html += '</li>';
	}
	html += '</ul>';
	$("#leftMenu").html(html);
}
/*生成头部样式菜单*/
function genHeadMenu(obj){
	var html ='<ul>';
	for(var i=0;i<obj.length;i++){
		var imgStr=obj[i][0];
		if(obj[i].length>5){
			html+='<li><img src="'+imgStr+'"><span>'+obj[i][1]+'</span><div><ul>'
			for(var j=5;j<obj[i].length;j++){
				if(obj[i][j].length>5){
					html+='<li><span>'+obj[i][j][1]+'</span><div><ul>'
					for(var m=5;m<obj[i][j].length;m++){
						if(obj[i][j][m].length>5){
							html+='<li><span>'+obj[i][j][m][1]+'</span><ul>'
							for(var h=5;h<obj[i][j][m].length;h++){
								html+='<li onclick="openMenu(\'' + obj[i][j][m][h][1] + '\',\'' + obj[i][j][m][h][2] + '\',\'' + obj[i][j][m][h][3] + '\')">'+obj[i][j][m][h][1]+'</li>'
							}
							html+='</ul></li>'							
						}else{
							html+='<li class="noChild" onclick="openMenu(\'' + obj[i][j][m][1] + '\',\'' + obj[i][j][m][2] + '\',\'' + obj[i][j][m][3] + '\')">'+obj[i][j][m][1]+'</li>'
						}
					}
					html+='</ul></div></li>'
				}else{
					html+='<li onclick="openMenu(\'' + obj[i][j][1] + '\',\'' + obj[i][j][2] + '\',\'' + obj[i][j][3] + '\')">'+obj[i][j][1]+'</li>'
				}
			}
			html+='</ul></div></li>';
		}else{
			html+='<li onclick="openMenu(\''+obj[i][1]+'\',\''+obj[i][2]+'\',\''+obj[i][3]+'\')"><img src="'+imgStr+'"><span>'+obj[i][1]+'</span></li>';
		}
	}
	html+='</ul>';
	$(".center").html(html);
}
/*生成未点击之前的菜单*/
function genSlideMenu(obj){
	var html='<ul>'
	for(var i=0;i<obj.length;i++){
		var imgStr=obj[i][0];
		if(obj[i].length>5){
			html+='<li><div class="img"><img class="normal" src="'+imgStr+'"/></div>';
		}else{
			html+='<li><div class="img" onclick="openMenu(\'' + obj[i][1] + '\',\'' + obj[i][2] + '\',\'' + obj[i][3] + '\',\'' + obj[i][4] + '\')"><img class="normal" src="'+imgStr+'"/></div>';
		}
		if(obj[i].length>5){
			html+='<div class="level2"><div class="level2-2"><ul>';
			for(var j=5;j<obj[i].length;j++){
				if(obj[i][j].length>5){
					html+='<li><div onclick="toggleMenu(this)"><span>'+obj[i][j][1]+'</span><div class="jiantou"><img src="images/main/jiantou.png"/></div></div><ul>';
					for(var m=5;m<obj[i][j].length;m++){
						if(obj[i][j][m].length>5){
							html+='<li><div onclick="toggleMenu(this)"><span>'+obj[i][j][m][1]+'</span><div class="jiantou"><img src="images/main/jiantou.png"/></div></div><ul>'
							for(var h=5;h<obj[i][j][m].length;h++){
								html+='<li onclick="openMenu(\'' + obj[i][j][m][h][1] + '\',\'' + obj[i][j][m][h][2] + '\',\'' + obj[i][j][m][h][3] + '\',\'' + obj[i][j][m][h][4] + '\')">'+obj[i][j][m][h][1]+'</li>'
							}
							html+='</ul></li>'							
						}else{
							html+='<li class="noChild" onclick="openMenu(\'' + obj[i][j][m][1] + '\',\'' + obj[i][j][m][2] + '\',\'' + obj[i][j][m][3] + '\',\'' + obj[i][j][m][4] + '\')">'+obj[i][j][m][1]+'</li>'
						}
					}
					html+='</ul></li>'
				}else{
					html+='<li><a onclick="openMenu(\'' + obj[i][j][1] + '\',\'' + obj[i][j][2] + '\',\'' + obj[i][j][3] + '\',\'' + obj[i][j][4] + '\')">'+obj[i][j][1]+'</a></li>';
				}
			}
			html+='</ul></div></div>';
		}
		html+='</li>'
	}
	html+='</ul>';
	
	$(".leftNavSlide").html(html);
	twoJudge();
}


function twoJudge(){
	$(".leftNavSlide>ul>li").each(function(index) {		
		var cssH = 40;
	  	var winH = $("body").height();//浏览器总高度
	  	var ulH = $(this).children("ul").children("li").length*cssH;//ul的高度
	  	var offTop = 100+index*55;//ul到浏览器顶部的距离
	  	var h = winH - offTop;	//浏览器剩余的高度	
	  	$(this).children('.level2').css({"max-height":(h-50)+"px","overflow":"hidden"});
	  	$(this).children('.level2').children('.level2-2').css({"max-height":(h-50)+"px","overflow":"auto"});
	  	if(ulH>=h){//判断浏览器剩余高度和实际高度确定ul是否超出屏幕
	  		var ulheight=h-cssH*2;//超出屏幕减去两个li的高度流出放上下按钮的空间
	  		$(this).children("ul").before('<div class="up btn" onclick="up(this)">︿</div>');
	  		$(this).children("ul").after('<div class="down btn" onclick="down(this)">﹀</div>');
	  		$(this).children(".down").css("top",ulheight+"px");
	  	}
	});
}
function toMain(){
	MultitaskPanelManager.mainPageClick();
	$("#menuRel").html('');
	$("#curMenu").html('首页');
	$("#historyMenu").find('li').eq(1).show();
	var src=$("#0_bodyFrame").attr("src");
	$("#0_bodyFrame").attr("src",src);
}
