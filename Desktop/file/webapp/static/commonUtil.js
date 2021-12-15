/****************************************************
 * JavaScript通用函数库 commonUtil.js -------------------------------------------
 * ------------------------------------------- 版权所有:海颐软件
 ****************************************************/

/**
 * 通用文件上传窗口
 *
 * @param func
 *            回调函数
 * @param newFileName
 *            新文件名
 * @param fileType
 *            文件类型
 */
function openFileUpload(func, newFileName, fileType, extension) {
	var url = $$pageContextPath + "jt/com/fileTempUpload/";
	if ( typeof (func) == "undefined") {
		alert("请指定文件上传的回调函数！");
		return false;
	}
	if (newFileName) {
		url += "?newFileName=" + newFileName;
	}
	if (fileType) {
		url += url.indexOf("?") > 0 ? "&" : "?";
		url += "fileType=" + fileType;
	}
	if (extension) {
		url += url.indexOf("?") > 0 ? "&" : "?";
		url += "allowedExtension=" + extension;
	}
	$.showModalDialog(url, "文件上传", func, null, 450, 150, 0);
}
/**
 * 通用文件上传窗口
 *
 * @param func
 *            回调函数
 * @param newFileName
 *            新文件名
 * @param fileType
 *            文件类型
 */
function openFileUploadNew(func, newFileName, fileType, extension) {
	var url = $$pageContextPath + "jt/com/fileTempUpload/uploadPageNew";
	if ( typeof (func) == "undefined") {
		alert("请指定文件上传的回调函数！");
		return false;
	}
	if (newFileName) {
		url += "?newFileName=" + newFileName;
	}
	if (fileType) {
		url += url.indexOf("?") > 0 ? "&" : "?";
		url += "fileType=" + fileType;
	}
	if (extension) {
		url += url.indexOf("?") > 0 ? "&" : "?";
		url += "allowedExtension=" + extension;
	}
	$.showModalDialog(url, "文件上传", func, null, 450, 180, 0);
}
/**
 * 通用删除，后台接受的数据，应该是getdatalist
 */
function dataDel(ajaxgrid, delUrl, callBack) {
	var checked = ajaxgrid.getCheckedRecords();
	if (checked.length <= 0) {
		setRM("alert", "请选择要删除的记录!");
	} else {
		$.confirm("提示", "确定要删除选中的记录？", function() {
			var gridData = ajaxgrid.collectData(true, "checked");
			var dataArr = [];
			dataArr.push(gridData);
			$.request({
				url : delUrl,
				data : dataArr,
				success : function(response) {
					setRM(callBack);
				}
			});
		}, function() {
		});
	}
}

/**
 * obj 输入框
 * forg form对象
 * value 改变的值
 */
function changeMilestoneFormData(obj, forg, value) {
	if (!(obj.value || obj.val())) {
		$(obj).next('input[type=hidden]').val("");
		return;
	}
	if (forg) {
		var $column = obj.attr('name') == "" ? $(obj).next('input[type=hidden]').attr("name") : obj.attr('name');
		forg.setValue($column, msFormatN(msFormatK(value)));
	} else {
		$(obj).next('input[type=hidden]').val(msFormatN(msFormatK(value)))
	}
	obj.val(msFormatK(value));
}

function milestoneFields(obj, forg) {
	var $p = $(obj).parent();
	var column = $(obj).attr('name');
	var title = $(obj).attr('title');
	var $content = $(obj);
	var fousEvent = function() {
		if (!this.value) {
			$(this).next('input[type=hidden]').val("");
			return;
		}
		this.value = msFormatN(this.value);
	};
	var blurEvent = function() {
		if (!this.value) {
			$(this).next('input[type=hidden]').val("");
			return;
		}
		if (forg) {
			forg[0].setValue(column, msFormatN(msFormatK(this.value)));
		} else {
			$(this).next('input[type=hidden]').val(msFormatN(msFormatK(this.value)))
		}
		this.value = msFormatK(this.value);

	};
	var keyupEvent = function() {
		if (!this.value) {
			$(this).next('input[type=hidden]').val("");
			return;
		}
		if (forg) {
			forg[0].setValue(column, msFormatN(msFormatK(this.value)));
		} else {
			$(this).next('input[type=hidden]').val(msFormatN(msFormatK(this.value)))
		}
	};
	// $content.attr('name', column);
	$content.attr('name', '');
	var $hide = $content.next('input[type=hidden]');
	$p.html($content);
	var va;
	if (forg) {
		//$content.attr('name', column);
		va = forg[0].getColumnValue(column);
		if (!va) {
			va = 'K0+000';
		} else {
			va = msFormatK(va);
		}
		$content.val(va);
		$p.append("<input type='hidden' name='" + column + "' upload='true' value='" + msFormatN(va) + "'/>");
	} else {
		if ($hide.length > 0)
			$p.append($hide);
		else
			$p.append("<input type='hidden' name='" + column + "' upload='true'/>");
	}
	$content.addClass('fFcanEditInput');
	if ($(obj).attr('id')) {
		var Milestone = function Milestone(o) {
			this.o = o;
			this.readonly = function(f) {
				if (f) {
					$(this.o).attr("readonly", "readonly")
					$(this.o).unbind('focus');
					$(this.o).unbind('blur');
					$(this.o).unbind('keyup');
				} else {
					$(this.o).attr("readonly", "");
					$(this.o).bind({
						focus : fousEvent,
						blur : blurEvent,
						keyup : keyupEvent
					});
				};
			}
		}
		window[$(obj).attr('id')] = new Milestone($content);
	}
	var f = false;
	// 是否跳过绑定事件
	if ($(obj).attr('editable') == 'true') {
		$content.removeClass('fFcanEditInput');
		$content.addClass('fFcannotEditInput');
		$content.attr("readonly", "readonly");
		f = true;
	}
	if ($(obj).attr('skin') == 'none') {
		$content.removeClass('fFcanEditInput');
		$content.removeClass('fFcannotEditInput');
		$content.css({
			'border' : 'none'
		});
		return;
	}
	if (forg && $(obj).attr('required') == 'required' || $(obj).attr('required') == 'true') {
		var $obj = $p.prev("td");
		if ($obj.find('span.required-symble').length == 0) {
			$obj.html('<span class="required-symble" style="color:red;font-size:13px;font-weight: bold;valign:bottom;">* </span>' + '<span id=' + column + '_titleName>' + $obj.html() + '</span>');
			forg[0].allColumns.push({
				name : column,
				title : title,
				type : "custom",
				typeName : 'milestone',
				validator : "{required:true,milestone:true}"
			})
		}
	}

	if (f)
		return;
	$(obj).bind({
		focus : fousEvent,
		blur : blurEvent,
		keyup : keyupEvent
	});
}

function setMsValue(form, name, value) {
	$('#' + form.id).find('input[name="' + name + '"]').val(msFormatK(value));
	form.setValue(name, value);
}

function msFormatK(milestone) {
	if ( typeof milestone == 'undefined' || milestone === '' || milestone == null || milestone == 'null')
		return "";
	milestone = milestone.toString().trim();
	if (!isNaN(milestone)) {
		milestone.substr(milestone.indexOf("."));

		return 'K' + parseFloat(milestone).toFixed(3).replace('.', "+");
	}
	return "";
}

function msFormatN(milestone) {
	if ( typeof milestone == 'undefined' || milestone == '')
		return;
	milestone = milestone.toString().trim();
	return parseFloat(milestone.replace('+', '.').replace('K', ''));
}

function compareDate(beginTime, endTime) {
	if (!beginTime || !endTime)
		return true;
	if (beginTime == '' || endTime == '')
		return true;
	if (beginTime < endTime)
		return true;
	return false;
}

/**
 * 文件上传
 * @param id
 * @param objId
 * @param objType
 * @param editFlag
 */
function cusUpload(id, objId, objType, editFlag, extTypes) {
	if (objType == null)
		objType = '';
	if (extTypes == null || !extTypes)
		extTypes = '';
	var html = '<iframe frameborder="0" width="100%" height="115px" src="/../jtfile/pageupload?busiUuid=' + objId + '&busiType=' + objType + '&module=' + applicationCode + '&editFlag=' + editFlag + '&extTypes=' + extTypes + '"></iframe>';
	$("#" + id).html(html);
}

/**
 * 文件上传
 * @param id
 * @param objId
 * @param objType
 * @param editFlag
 */
function cusUpload2(objId, objType, editFlag, extTypes) {
	$.showModalDialog('jt/com/comUploadFile/upload?objId=' + objId + "&objType=" + objType + "&editFlag=" + editFlag + "&extTypes=" + extTypes, "附件", null, null, 800, 600, 0);
}

function queryFile(objId, objType) {
	var files = [];
	$.ajax({
		type : "get",
		url : '/jtfile/api/v1/file/list?busiUuid=' + objId + "&busiType=" + objType+"&module=NQIHT",
		async : false,
		dataType : "json",
		success : function(result) {
			files = result;
		}
	});
	return files;
}

function printFile(dataUrl, title, exportFlag, valueBack, moduleName, dataId, jeportName, bdbh) {
	$.showModalDialog({
		url : $$pageContextPath + "jt/com/print/",
		param : {
			"dataUrl" : dataUrl,
			"exportFlag" : exportFlag,
			'moduleName' : moduleName,
			dataId : dataId,
			'jeportName' : jeportName,
			'bdbh' : bdbh
		}
	}, title, valueBack, "", window.top.document.body.offsetWidth, window.top.document.body.offsetHeight, 0);
}

function setResultRead(id) {
	$.request({
		url : 'eq/eqRuleResult/setRead',
		params : {
			"id" : id
		},
		success : function(response) {
		}
	});
}
