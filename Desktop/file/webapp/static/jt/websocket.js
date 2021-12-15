var socket=null;
function connectSocket() {
	if (window.WebSocket) {
		var socketUrl= websocketUrl ;
		//var socketUrl = new WebSocket("${basePath}websocket/${cid}".replace("http","ws"));  
		socket = new WebSocket(socketUrl); 
		socket.onmessage = function(event) {
			if(typeof(event) == undefined) return;
			if(event.data == "") {
				console.log("-----Socket 心跳正常-----");
				return;
			}
			var dataObj = eval("(" + event.data + ")");
			var content = '【'+dataObj.title+'】'+dataObj.content;
//			showPopWin(dataObj.title,content);
			// $.showModalDialog( 'wp/wpInfo/display?id='+dataObj.busiId, dataObj.title, null, null, 720, 800,0);
			// read(dataObj.busiId);
		};
		socket.onopen = function(event) {
			console.log("onopen:" + event.data);
			$.request({
				url :  'wp/wpInfo/viewUnread'
			});	
			setInterval(function(){
    			console.log("-----Socket 心跳检测-----");
    			send("");
			},60000*5);
//			socket.send("Hello, I'm world");

		};

		socket.onclose = function(event) {
			console.log("onclose:" + event.data);
		};
	} else {
		setRM("info","您的浏览器版本不支持消息推送！");
	}
}

function read(id){
	console.log(id);
	debugger;
	$.request({
		url :  'wp/wpInfo/read?infoId='+id
	});
}

window.onbeforeunload = function () {
	socket.close();
}

//发送消息
    function send(message){
       // var message = document.getElementById('text').value;
        socket.send(message);
    }
    
     



function showPopWin(title,content){
			debugger;
/*	var audio = new Audio();
	audio.setAttribute("src",$$pageContextPath+"framework/tishiyin.mp3");
	audio.play();
	
	$('.popWin').remove();
	var $popWin = '<div class="popWin" style="display:none">'+
	  '<div class="title"><span class="close" title="关闭"></span><strong>'+title+'</strong></div>'+
	    '<div class="popWinContent">'+
	    	content+
	    '</div>'+
	'</div>'
	$(top.document.body).append($popWin);
	$.fn.popWin({
		PopSelector:".popWin",
		CloseSelector:".popWin .close",
		slideTime:500,
		delayTime:10000
	});*/
	
	//询问框
	
	$.showModalDialog( 'wp/wpInfo/display?id='+row.id, "浏览", null, null, 720, 800,0);



/*	layer.confirm(content, {
  		btn: ['收到'] //按钮
	}, function(){
  		layer.msg('操作成功', {icon: 1});
	});*/
}

function openPopWindow(url,title){
	if(url!="")
		$.showModalDialog(url,title, callbackOpenPopWindow, null, 900, 500, null);
}
function callbackOpenPopWindow(d){
	
}

/**
 * 打开推送窗口。仿window的。
 */
function socketModalDialog(url,modalpara_title){
	$.showModalDialog(url,modalpara_title,null,null,1200,750,0);
}