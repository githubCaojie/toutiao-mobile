jQuery(function($) {

	var _disconnecting = false;
	var _connected = false;
	$.cometd.configure({
		url: 'http://172.20.33.188:8080/message-push/cometd',
		//logLevel : 'debug',
		maxNetworkDelay : 20000

	});
	$.cometd.websocketEnabled = false;

	function _messageConfirm(message) {
		if ("2" == message.data._MESSAGE_TYPE_) {
			$.cometd.publish('/service/messageConfirm', {
				_MESSAGE_ID_ : message.data._MESSAGE_ID_,
			});
		}
	}

	function _allReceive(message) {
		showMessages(message.data.msg);
		console.log(message.data.msg);
		
		_messageConfirm(message);
	}
	
	function _roleReceive(message) {
		//showMessages(message.data.msg);
		console.log(message.data.msg);
		
		_messageConfirm(message);
	}

	function _deptReceive(message) {
		//showMessages(message.data.msg);
		console.log(message.data.msg);

		_messageConfirm(message);
	}

	function _userReceive(message) {
		//showMessages(message.data.msg);
		console.log(message.data.msg);

		_messageConfirm(message);
	}

	// IE9下跨域是发送get请求(CallbackPolling)，请求参数不能太多
	function _loginReceive(message) {
		var autoConfirms = [];
		var manualConfirms = [];
		var len = message.data.length;
		for (var i = 0; i < len; i++) {
			var item = message.data[i];
			
			//showMessages(item.msg);
			console.log(item.msg);

			if ("2" == item._MESSAGE_TYPE_) {
				autoConfirms.push(item._MESSAGE_ID_);
			} else if ("3" == item._MESSAGE_TYPE_) {
				manualConfirms.push(item._MESSAGE_ID_);
			}

			if (autoConfirms.length == 30) {
				$.cometd.publish('/service/messageConfirm', {
					_MESSAGE_ID_ : autoConfirms,
				});
				autoConfirms = [];
			}
		}

		if (autoConfirms.length > 0) {
			$.cometd.publish('/service/messageConfirm', {
				_MESSAGE_ID_ : autoConfirms,
			});
		}
	}

	// 普通模式下
	function _loginReceive2(message) {
		var autoConfirms = [];
		var manualConfirms = [];
		var len = message.data.length;
		for (var i = 0; i < len; i++) {
			var item = message.data[i];

			//showMessages(item.msg);
			console.log(item.msg);

			if ("2" == item._MESSAGE_TYPE_) {
				autoConfirms.push(item._MESSAGE_ID_);
			} else if ("3" == item._MESSAGE_TYPE_) {
				manualConfirms.push(item._MESSAGE_ID_);
			}
		}

		if (autoConfirms.length > 0) {
			$.cometd.publish('/service/messageConfirm', {
				_MESSAGE_ID_ : autoConfirms,
			});
		}
	}

	function _unsubscribe() {
		if (_allSubscription) {
			$.cometd.unsubscribe(_allSubscription);
		}
		_allSubscription = null;
		if (_roleSubscription) {
			$.cometd.unsubscribe(_roleSubscription);
		}
		_roleSubscription = null;
		if (_deptSubscription) {
			$.cometd.unsubscribe(_deptSubscription);
		}
		_deptSubscription = null;
		if (_userSubscription) {
			$.cometd.unsubscribe(_userSubscription);
		}
		_userSubscription = null;
		if (_loginSubscription) {
			$.cometd.unsubscribe(_loginSubscription);
		}
		_loginSubscription = null;
	}

	var _allSubscription;
	var _roleSubscription;
	var _deptSubscription;
	var _userSubscription;
	var _loginSubscription;

	function _subscribe() {
		_allSubscription = $.cometd.subscribe('/channel/all', _allReceive);
		_roleSubscription = $.cometd.subscribe('/channel/role/role1', _roleReceive);
		_deptSubscription = $.cometd.subscribe('/channel/dept/dept1', _deptReceive);
		_userSubscription = $.cometd.subscribe('/channel/user', _userReceive);
		_loginSubscription = $.cometd.subscribe('/channel/login', _loginReceive);
	}

	function _connectionEstablished() {
		//var user = $('#user');
		//var text = user.val();
		//var id = text;
		var id = 'admin';
		$.cometd.publish('/service/login', {
			accountId : id,
		}, function(publishAck) {
			if (publishAck.successful) {
				$.cometd.batch(function() {
					_subscribe();
				});
			}
		});
	}

	function _connectionInitialized() {
		// first time connection for this client, so subscribe tell everybody.
		//$.cometd.batch(function() {
		//    _subscribe();
		//});
	}

	function _metaHandshake(message) {
		if (message.successful) {
			_connectionInitialized();
		}
	}

	function _metaConnect(message) {
		if (_disconnecting) {
			_connected = false;
		} else {
			var wasConnected = _connected;
			_connected = message.successful === true;
			if (!wasConnected && _connected) {
				_connectionEstablished();
			} else if (wasConnected && !_connected) {
				// _connectionBroken();
			}
		}
	}


	$.cometd.addListener('/meta/handshake', _metaHandshake);
	$.cometd.addListener('/meta/connect', _metaConnect);


	// 握手
	$.cometd.handshake();

	/*$('#connect').click(function() {
		_disconnecting = false;
		$.cometd.handshake();

		$('#connect').hide();
		$('#disconnect').show();
	});*/

	/*$('#disconnect').click(function() {
		_unsubscribe();
		$.cometd.disconnect();
		_disconnecting = true;
		// IE9跨域模式下，需要主动设置_connected为false
		_connected = false;
		$('#logs').empty();
		$('#connect').show();
		$('#disconnect').hide();
	});*/
}); 