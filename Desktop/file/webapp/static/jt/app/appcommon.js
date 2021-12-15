function normalSend(){
	$.request({
		url : $$pageContextPath + 'jt/app/common/normalSend',
		params : {"appInstanceId" : vm.appInstanceId,
				  "appTaskId" : vm.appTaskId},
	    success : flowOverBack
	});	
}
function flowOverBack(){
	$.close('');
}
function appReturnTask(returnType){
	if(returnType=='Y')
		returnTask();
	else if(returnType=='S')
		returnTaskSelect();
}
/**
 * 工单退回加理由
 */
function returnTask() {
	$.showModalDialog($$pageContextPath+"jt/app/appSendAdvice/?sendType=2&appInstanceId=" + vm.appInstanceId + "&appTaskId=" + vm.appTaskId, "退回理由", function() {
		$.request({
			url : $$pageContextPath + 'jt/app/common/returnTask',
			params : {"appInstanceId" : vm.appInstanceId,
					  "appTaskId" : vm.appTaskId},
		    success : flowOverBack
		});	
	}, null, 500, 180, 0)
}
/**
 * 工单选择退回加理由
 */
function returnTaskSelect() {
	$.showModalDialog($$pageContextPath+"jt/app/appSendAdvice/returnTaskSelect?sendType=2&appInstanceId=" + vm.appInstanceId + "&appTaskId=" + vm.appTaskId, "退回理由", function(data) {
		$.request({
			url : $$pageContextPath + 'jt/app/common/returnTaskSelect',
			params : {"appInstanceId" : vm.appInstanceId,
					  "appTaskId" : vm.appTaskId,
					  "appActivityNo" : vm.appActivityNo,
					  "rtnType" : data.rtnType,
					  "rtnInfo" : data.rtnInfo
					  },
		    success : flowOverBack
		});	
	}, null, 600, 200, 0)
}
/**
 * 工单退回上报环节加理由
 */
function returnFirst() {
	$.showModalDialog($$pageContextPath+"jt/app/appSendAdvice/?sendType=2&appInstanceId=" + vm.appInstanceId + "&appTaskId=" + vm.appTaskId, "退回理由", function() {
		$.request({
			url : $$pageContextPath + 'jt/app/common/returnTaskSelect',
			params : {"appInstanceId" : vm.appInstanceId,
					  "appTaskId" : vm.appTaskId,
					  "rtnType" : '3',
					  "appActivityNo" : vm.appActivityNo
					 },
		    success : flowOverBack
		});	
	}, null, 500, 180, 0)
}

function normalSendAdvice() {//传递意见。
	if (vm.appInstanceId == "") {
		setRM("alert", "请先保存工作单！");
		return;
	}
	$.showModalDialog($$pageContextPath+"jt/app/appSendAdvice/?sendType=4&appInstanceId=" + vm.appInstanceId + "&appTaskId=" + vm.appTaskId + "&editFlag=" + vm.editFlag, "传递意见", null, null, 500, 180, 0)
}
/**
 * 确认办理
 */
function confirm(){
	$.request({
		url : $$pageContextPath + 'jt/app/common/confirm',
		params : {"appInstanceId" : vm.appInstanceId,
				  "appTaskId" : vm.appTaskId},
	    success : function(){
			window.location.reload();
//	    	var curMul = getFrameworkActiveTask();
//	    	var newCode = curMul.code;
//	    	var newTitle = curMul.title;
//	    	var newUrl = "/.."+curMul.url;
//			window.location.href=newUrl;
//	    	closeTabTask(curMul.code,curMul.title);
//	    	openTabTask(newCode,newTitle,newUrl,true,null);
    	}
	});	
}
/**
 * 取消办理
 */
function taskUnclaim(){
	$.request({
		url : $$pageContextPath + '/jt/app/common/taskUnclaim',
		params : {"appInstanceId" : vm.appInstanceId,
				  "appTaskId" : vm.appTaskId},
	    success : function(){
	    	window.location.reload();
	    	/**var curMul = getFrameworkActiveTask();
	    	var newCode = curMul.code;
	    	var newTitle = curMul.title;
	    	var newUrl = curMul.url;
	    	closeTabTask(curMul.code,curMul.name);
	    	openTabTask(newCode,newTitle,newUrl,true,null);**/
	    }
	});	
}
/**
 * 选择传递环节
 */
function openSelectSend() {
	$.showModalDialog($$pageContextPath+"jt/app/appNextActi/?appInstanceId=" + vm.appInstanceId + "&appTaskId=" + vm.appTaskId, "请选择跳转的环节", setSendAdvice, null, 500, 160, 0);
}

function setSendAdvice(response) {
	$.showModalDialog($$pageContextPath+"jt/app/appSendAdvice/?sendType=3&appInstanceId=" + vm.appInstanceId + "&appTaskId=" + vm.appTaskId, "传递理由", function() {
		$.request({
			url : $$pageContextPath + '/jt/app/common/selectSend',
			params : {"appInstanceId" : vm.appInstanceId,
					  "appTaskId" : vm.appTaskId,
					  "appActivityNo" : vm.appActivityNo,
					  "endActivityNoId" : response},
		    success : flowOverBack
		});	
	}, null, 500, 150, 0);
}
/**
 * 分派
 */
function openSelectAssignedMan() {
	$.showModalDialog($$pageContextPath+"jt/app/selectOneReceiver/", "分派人员", assignBack, null, 800, 400, 0);
}

function assignBack(retV, arg, isCancel) {
	if (isCancel != 0 && retV != "") {
		$.request({
			url : $$pageContextPath + '/jt/app/common/appAssign',
			params : {"appInstanceId" : vm.appInstanceId,
					  "appTaskId" : vm.appTaskId,
					  "assignedMan" : retV.loginId},
		    success : flowOverBack
		});	
	}
}


/**
 * 选择单位下的角色的人传递。
 */
function appNormalSendBusi() {
	if (vm.appInstanceId == "") {
		setRM("alert", "请先保存工作单！");
		return;
	}
	$.showModalDialog($$pageContextPath+"jt/app/appSelectPerSend/?perType=BUSI&isSigleSelect=Y&appInstanceId=" + vm.appInstanceId + "&appTaskId=" + vm.appTaskId, "跳转页面", sendback, null, 850, 420, 0,1);
}


function sendback(data) {
	$.request({
		url : $$pageContextPath + '/jt/app/common/selectPerSend',
		params : {"appInstanceId" : vm.appInstanceId,
				  "appTaskId" : vm.appTaskId,
				  "loginIds" : data.loginIds,
				  "nextActId" : data.nextActId},
	    success : flowOverBack
	});	
}
/**
 * 选择部门下的角色的人传递。
 */
function appNormalSendOrg() {
	if (vm.appInstanceId == "") {
		setRM("alert", "请先保存工作单！");
		return;
	}
	$.showModalDialog($$pageContextPath+"jt/app/appSelectPerSend/?perType=ORG&isSigleSelect=Y&appInstanceId=" + vm.appInstanceId + "&appTaskId=" + vm.appTaskId, "跳转页面", sendback, null, 850, 420, 0,1);
}

/**
 * 重新指派
 */
function reassign() {
	if (vm.appInstanceId == "") {
		setRM("alert", "请先保存工作单！");
		return;
	}
	$.showModalDialog($$pageContextPath+"jt/app/appSelectPerSend/pageReassign?perType=ORG&isSigleSelect=Y&appInstanceId=" + vm.appInstanceId + "&appTaskId=" + vm.appTaskId, "跳转页面", sendback, null, 850, 420, 0,1);
}


/**
 * 选择单位下的角色的人传递。
 */
function appNormalSendBusiMul() {
	if ($("#appInstanceId").val() == "") {
		setRM("alert", "请先保存工作单！");
		return;
	}
	$.showModalDialog($$pageContextPath+"jt/app/appSelectPerSend/?perType=BUSI&isSigleSelect=N&&appInstanceId=" + vm.appInstanceId + "&appTaskId=" + vm.appTaskId, "跳转页面", sendback, null, 850, 420, 0,1);
}
/**
 * 选择部门下的角色的人传递。
 */
function appNormalSendOrgMul() {
	if (vm.appInstanceId == "") {
		setRM("alert", "请先保存工作单！");
		return;
	}
	$.showModalDialog($$pageContextPath+"jt/app/appSelectPerSend/?perType=ORG&isSigleSelect=N&appInstanceId=" + vm.appInstanceId + "&appTaskId=" + vm.appTaskId, "跳转页面", sendback, null, 850, 420, 0,1);
}
/**
 * 选择部门下的角色的人传递。
 */
function approve(callback) {
	$.showModalDialog($$pageContextPath+"jt/app/appApproval/approve?appInstanceId=" + vm.appInstanceId + "&appTaskId=" + vm.appTaskId, "审批", callback, null, 1000, 600, 0);
}
/**
 *设置appbutton的值 
 */
function setAppButton(response){
	
}

