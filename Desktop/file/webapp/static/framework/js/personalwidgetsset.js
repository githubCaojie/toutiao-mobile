/**
 * 加载页面的css及相应排序功能
 * */
function loadStyle(){		
	$( "#desk .column" ).sortable({
		items: ".portlet",
		connectWith: "#desk .column",
		stop:loadStyle//停止排序时执行刷新，禁用已有的拖拽
	});
	
	//设置工具的css
	$( ".column" ).find("span").remove();//避免重复加载最小化和关闭按钮
	$( ".portlet" ).addClass( "ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" )
		.find( ".portlet-header" )
			.addClass( "ui-widget-header ui-corner-all" )
			.prepend( "<span class='ui-icon ui-icon-minusthick'></span>")
			.prepend( "<span class='ui-icon ui-icon-closethick'></span>")
			.end()
		.find( ".portlet-content" );
	//widgetlist 下不需要关闭按钮
	$( "#widgetlist .portlet" ).find("span").remove();
	$( ".portlet-header .ui-icon-minusthick" ).click(function() {
		$( this ).toggleClass( "ui-icon-minusthick" ).toggleClass( "ui-icon-plusthick" );
		$( this ).parents( ".portlet:first" ).find( ".portlet-content" ).toggle();
	});		
	$( ".portlet-header .ui-icon-closethick" ).click(function() {			
		$( this ).parents( ".portlet:first" ).remove();
		refreshWidgets();
	});
	//设置列的css
	$( ".column" ).addClass( "ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" )
	.find( ".column-header" )
		.addClass( "ui-widget-header ui-widget-header-top ui-corner-all" )
		.prepend( "<span class='ui-icon ui-icon-closethick'></span>");
	$( ".column-header .ui-icon-closethick" ).click(function() {			
		$( this ).parents( ".column:first" ).remove();
		refreshWidgets();
	}); 
	//$( ".column" ).disableSelection();
	//刷新页面	
	refreshWidgets();
	
};
/**
 * 加载查看视图
 */
function loadViewStyle(){		
	//设置列的小面板css
	$( ".portlet" ).addClass( "ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" )
		.find( ".portlet-header" )
			.addClass( "ui-widget-header ui-corner-all" );
	//设置列的css
	$( ".column" ).addClass( "ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" )
	.find( ".column-header" )
		.addClass( "ui-widget-header ui-widget-header-top ui-corner-all" );
	$( ".column" ).disableSelection();
};
/**
 * 新加一个层
 */	
function addLayer(){
	$("#desk").append('<td><div class="column"><div class="column-header">新建列</div><div class="column-content"><table width="100%"><tr width="100%"><td align="center">所占比例：<input type="text" id="colproportion_" style="width:60" value="0"/>%</td></tr></table></div></div></td>');
	loadStyle();
}
/**
 * 保存相应widgets的序号
 */	
function setPosition(sys){
	//判断百分比是不是加起来100，否则不予保存
	var allProportion = 0 ;
	var specificProp = "" ;
	$("input[id^='colproportion_']").each(function(){
		var value = $(this).val() ;
		value = parseInt(value) ;
		if(isNaN(value)){
		    value = 0 ;
		}
		specificProp = specificProp + value + ":" ;
	    allProportion = allProportion + value ;
	});
	if(allProportion!=100){
	    alert("各列所占比例不符合要求，请重新检查……") ;
	    return ;
	}
	specificProp = specificProp.substring(0,specificProp.length-1) ;
	
	
	//获取sortable column下的排序widgetId
	var pos="";
	$('#desk .column').each(function(i){
		var result = $(this).sortable('toArray');
		pos +=result+";";
	});
	//后台保存
	//if($("#groupId").length>0){
		//var  groupId=$("#groupId").val();
	//}
	$.ajax({
		url : sys ? ($$pageContextPath + "/framework/frameapp/DesktopWidgetsSet/saveOrder") : ($$pageContextPath + "/framework/frameapp/personalWidgetsSet/saveOrder"),
		type : "POST",
		data : {
			posString:pos,
			specificProp:specificProp,
			groupId:groupId
		},
		dataType : "text",
		error : function() {
			alert("保存失败!\n");
		},
		success : function() {				
			alert("保存成功!\n");
			refreshDeskTop();
		}
	});
};
/**
 * 主要针对widgets的列表进行css的调整
 */
function refreshWidgets(){
	//获取sortable column下的排序widgetId
	var disableId="";
	$('#desk .column').each(function(i){
		var result = $(this).sortable('toArray');
//		for(var x in result){
//			if (result!=null&&/^\d+/.test(result[x])){
//				disableId += "#"+result[x]+",";
//			}
//		}
		if(result!=null)
			for(var i=0;i< result.length;i++){
				disableId += "#"+result[i]+",";
			}
	})	
	//不能用sortable，无法clone helper
	if(disableId!=""){
		disableId = disableId.substring(0,disableId.length - 1);
	}
	//不能用sortable，无法clone helper
	$( "#widgetlist .column .portlet" ).draggable({
				connectToSortable: "#desk .column",
				cancel: disableId,	
				helper: "clone",
				revert: "invalid"
			});
	$( "#widgetlist .column .portlet").removeClass("ui-state-disabled");
	if(disableId!="")
		$(disableId,$("#widgetlist")).addClass("ui-state-disabled");
};
