
//type:success error alert
function setRM(type, msg,callback){
    var a=arguments;
	if(a.length == 1){
		callback = type;
		type = "success";
		msg = "操作成功";
	}else if(a.length == 0){
		type = "success";
		msg = "操作成功";
	}
	
	showMessage({
		type: 'msg-'+type, //
		msg:msg,
		handler:callback
	})
}

function showMessage(config){
	var option = {
		type: 'msg-success', //
		msg:'操作成功',
		speed:3000,
		top:true,
		handler: $.noop
	};
	
	$.extend(option,config);
	
	var container = document.body;
	
	if(option.top){
		container = window.top.document.body;
	}
	
	//
	if($('.msg-message-bg',container).length === 0
		||$('.msg-message-bg',container).length === 0){
		
		var _html = [];
		_html.push('<div class="msg-message-bg"></div>');
		_html.push('<div class="msg-message"></div>');
		
		var _doc = $(_html.join(''));
		
		$(container).append(_doc);
	}
	
	//
	var $bgDiv = $('.msg-message-bg',container),
		$messageDiv = $('.msg-message',container);
	
	$messageDiv.removeClass('msg-success msg-error msg-alert');
	$messageDiv.addClass(option.type);
	$messageDiv.text(option.msg);
	
	//
	if($bgDiv.is(':visible'))
		$bgDiv.remove();
	if($messageDiv.is(':visible'))
		$messageDiv.remove();
	
	//
	var top = ($bgDiv.height() - $messageDiv.outerHeight()) * 0.5;
	var left = ($bgDiv.width() - $messageDiv.outerWidth()) * 0.5;
	$bgDiv.bind("click",function(){
		try 
		{ 
			$messageDiv.remove();
			$(this).remove();
			if(timeFn&&null!=timeFn) window.clearInterval(timeFn);
			option['handler']();
		} 
		catch (e){} 
	});
	//
	$bgDiv.css({'opacity': '0.33'}).show();
	$messageDiv.css({
			'top': top+'px',
			'left': left+'px'
		}).show();
	
	//
	var timeFn = window.setTimeout(function(){
		$bgDiv.remove();
		$messageDiv.remove();
		option['handler']();
	}, option.speed);
}