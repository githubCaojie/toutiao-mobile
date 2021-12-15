/**
 编写者:王江
 编写日期:2020-4-2
 简要描述:NTKO Office控件常用方法封装
 ********************  修改日志  **********************************
 修改人：             修改日期：
 修改内容：
 */
function officeFn() {

	var OFFICE_CONTROL_OBJ; // 控件对象
	var fileSize;
	var fileType;


	this.init = function() {
		this.OFFICE_CONTROL_OBJ = document.getElementById("TANGER_OCX");
	}
	/**
	 * 获取office控件对象
	 */
	this.getOfficeObj = function() {
		this.init();
		return this.OFFICE_CONTROL_OBJ;
	}
	/**
	 * 新建空白文档
	 */
	this.newDocFile = function() {
		this.init();
		this.OFFICE_CONTROL_OBJ.CreateNew("Word.Document");
	}
	/**
	 * 根据url打开文档
	 *
	 */
	this.openFileFormUrl = function(fileUrl, flag) {
		try {
			this.init();
			this.OFFICE_CONTROL_OBJ.OpenFromURL(fileUrl);
			this.setDocReadOnly(flag);
			return true;
		} catch (ex) {
			return false;
		}

	}
	/**
	 * 根据url保存文件
	 */
	this.saveFileToUrl = function(fileUrl, fileName) {
		this.init();
		return this.OFFICE_CONTROL_OBJ.SaveToURL(fileUrl, "file", "", fileName);
	}
	/**
	 * 使用保护模式来实现只读效果
	 */
	this.setDocReadOnly = function(flag) {
		// 目前只需要对word处理
		if (this.OFFICE_CONTROL_OBJ.DocType == 1) {
			if (this.getIsDocProtected() && !this.convertToBoolean(flag)) {
				// 解除保护状态
				this.OFFICE_CONTROL_OBJ.activedocument.Unprotect("");
			} else if (!this.getIsDocProtected() && this.convertToBoolean(flag) != false) {
				// 加上保护状态
				this.OFFICE_CONTROL_OBJ.activedocument.protect(3, 0, "");
			}
		}
	}
	
	/**
	 * 设置是否可以打开菜单
	 */
	this.fileOpen = function(flag) {
		var obj = this.getOfficeObj();
		obj.FileOpen = flag;
	}

	/**
	 * 设置是否可以关闭菜单
	 */
	this.fileClose = function(flag) {
		var obj = this.getOfficeObj();
		obj.FileClose = flag;
	}

	/**
	 * 设置是否可以保存文件
	 */
	this.fileSave = function(flag) {
		var obj = this.getOfficeObj();
		obj.FileSave = flag;
	}

	/**
	 * 设置是否可以文件另存为
	 */
	this.fileSaveAs = function(flag) {
		var obj = this.getOfficeObj();
		obj.FileSaveAs = flag;
	}

	/**
	 * 设置是否可以新建文档
	 */
	this.fileNew = function(flag) {
		var obj = this.getOfficeObj();
		obj.FileNew = flag;
	}
	
	/**
	 * 获取文件大小
	 */
	this.getFileSize = function() {
		var obj = this.getOfficeObj();
		fileSize = obj.DocSize;
		return fileSize;
	}
	
	/**
	 * 获取文件类型
	 */
	this.getFileType = function() {
		var obj = this.getOfficeObj();
		var type = obj.DocType;
		switch (obj.DocType) {
			case 1 :
				fileType = ".doc";
				break;
			default :
				fileType = ".doc";
		}
		return fileType;
	}
	
	/**
	 * 设置是否隐藏工具栏 false：隐藏 true：显示
	 */
	this.setToolBars = function(flag) {
		var obj = this.getOfficeObj();
		obj.ToolBars = flag;
	}

	/**
	 * 设置是否隐藏菜单栏 false： 隐藏 true：显示
	 */
	this.setMenubar = function(flag) {
		var obj = this.getOfficeObj();
		obj.Menubar = false;
	}

	/**
	 * 取得文档中指定书签的值 BookmarkName:标签名
	 */
	this.getBookmarkValue = function(bookMarkName) {
		var obj = this.getOfficeObj();
		return obj.GetBookmarkValue(bookMarkName);
	}
	/**
	 * 取得文档中指定书签的是否存在 BookmarkName:标签名
	 */
	this.getBookmarkObj = function(bookMarkName) {
		try {
			var obj = officeFn.getOfficeObj();
			return obj.ActiveDocument.Bookmarks.Exists(bookMarkName);
		} catch (e) {
			return false;
		}
	}
	/**
	 * 向指定的书签插入内容 BookmarkName:标签名 value:用来向指定位置插入内容
	 */
	this.SetBookmarkValue = function(bookMarkName, value) {
		var obj = this.getOfficeObj();
		try {
			obj.SetBookmarkValue(bookMarkName, value);
			return true;
		} catch(e) {
			return false;
		}
	}
	/**
	 * 给文档插入表格 row：指定表格的行数 注：行数从1开始计算 col：指定表格的列数 注：列数从1开始计算
	 */
	this.insertTable = function(row, col) {
		var obj = this.getOfficeObj();
		var adoc = obj.ActiveDocument;
		if (adoc != null) {
			var selection = adoc.Application.Selection;
			selection.tables.add(selection.range, row, col);
		}
	}
	/**
	 * 在指定表格末尾插入行 tableIndex(int)：文档中第X个表格。注：文档中的第一个表格是从1开始计算的。
	 */
	this.insertTableAfter = function(tableIndex) {
		var obj = this.getOfficeObj();
		var adoc = obj.ActiveDocument;
		if (adoc != null) {
			var table = adoc.Tables(tableIndex);
			table.rows.add();
		}
	}
	/**
	 * 在指定表格，在某一行前面插入一行 tableIndex(int)：文档中第X个表格。注：文档中的第一个表格是从1开始计算的。
	 * rowIndex(int)：表格的第X行 注：行数从1开始计算 colIndex(int)：表格的第X列 注：列数从1开始计算
	 */
	this.insertTableBefore = function(tableIndex, rowIndex, colIndex) {
		var obj = this.getOfficeObj();
		var adoc = obj.ActiveDocument;
		if (adoc != null) {
			var table = adoc.Tables(tableIndex);
			var rg = table.Cell(rowIndex, colIndex).range;
			table.rows.add(rg);
		}
	}
	/**
	 * 为指定表格设置单元格的值 tableIndex(int)：文档中第X个表格。注：文档中的第一个表格是从1开始计算的。
	 * rowIndex(int)：表格的第X行 注：行数从1开始计算 colIndex(int)：表格的第X列 注：列数从1开始计算
	 * value(string)：给定的值
	 */
	this.setTableValue = function(tableIndex, rowIndex, colIndex, value) {
		var obj = this.getOfficeObj();
		var adoc = obj.ActiveDocument;
		if (adoc != null) {
			var table = adoc.Tables.item(tableIndex);
			// 向表格的第X行X列插入指定的值
			table.Cell(rowIndex, colIndex).range.Text = value;
		}
	}
	/**
	 * 替换指定表格某个单元格值 tableIndex(int)：文档中第X个表格。注：文档中的第一个表格是从1开始计算的。
	 * rowIndex(int)：表格的第X行 注：行数从1开始计算 colIndex(int)：表格的第X列 注：列数从1开始计算
	 * value(string)：给定的值
	 */
	this.replaceTableValue = function(tableIndex, rowIndex, colIndex, value) {
		var obj = this.getOfficeObj();
		var adoc = obj.ActiveDocument;
		if (adoc != null) {
			var table = adoc.Tables(tableIndex);
			// 向表格的第X行X列插入指定的值
			table.Cell(rowIndex, colIndex).range.Text = "";
			table.Cell(rowIndex, colIndex).range.Text = value;
		}
	}
	/**
	 * 获取指定表格单元格的值 tableIndex(int)：文档中第X个表格。注：文档中的第一个表格是从1开始计算的。
	 * rowIndex(int)：表格的第X行 注：行数从1开始计算 colIndex(int)：表格的第X列 注：列数从1开始计算
	 */
	this.getTableValue = function(tableIndex, rowIndex, colIndex) {
		var obj = this.getOfficeObj();
		var adoc = obj.ActiveDocument;
		if (adoc != null) {
			var table = adoc.Tables.item(tableIndex);
			return table.Cell(rowIndex, colIndex).range.Text;
		}
	}
	/**
	 * 要删除行的表格 tableIndex(int)：文档中第X个表格。注：文档中的第一个表格是从1开始计算的。
	 * rowIndex(int)：表格的第X行 注：行数从1开始计算
	 */
	this.deleteTableRow = function(tableIndex, rowIndex) {
		var obj = this.getOfficeObj();
		var adoc = obj.ActiveDocument;
		if (adoc != null) {
			var table = adoc.Tables(tableIndex);
			table.rows(rowIndex).Delete();
		}
	}
	/**
	 * 获取指定表格的行数 tableIndex(int)：文档中第X个表格。注：文档中的第一个表格是从1开始计算的。
	 */
	this.getTableRows = function(tableIndex) {
		var obj = this.getOfficeObj();
		var adoc = obj.ActiveDocument;
		if (adoc != null) {
			var table = adoc.Tables(tableIndex);
			return table.rows.count;
		}
	}
	/**
	 * 给指定的复选框取消或选中状态 name：复选框关联的标签名或索引，索引从1开始计算 checked:复选框状态，true or false
	 */
	this.checkbox = function(name, checked) {
		var obj = this.getOfficeObj();
		var adoc = obj.ActiveDocument;
		if (adoc != null) {
			var formField = adoc.FormFields(name);
			formField.CheckBox.value = checked;
		}
	}

	this.activeXCheckBox = function(name, checked) {
		var obj = this.getOfficeObj();
		var adoc = obj.ActiveDocument;
		var sh = adoc.InlineShapes;
		var cou = sh.count;
		for (var i = 1; i <= cou; i++) {
			// type为5表示表示acitex控件，
			if (sh.item(i).Type == 5) {
				if ("Forms.CheckBox.1".toUpperCase() == sh.item(i).OLEFormat.ClassType.toUpperCase()) {
					// 获取控件对象
					signObj = sh.item(i).OLEFormat.Object;
					if (signObj.caption == name) {
						signObj.value = checked;
					}
				}
			}
		}
	}
	/**
	 * 给提定表格设置表格边框样式 tableIndex（int）：文档中第X个表格 style:边框线的大小，传数字即可，不需要传单位
	 */
	this.setTableBorders = function(tableIndex, style) {
		style = style || 1;
		var obj = this.getOfficeObj();
		var adoc = obj.ActiveDocument;
		if (adoc != null) {
			for (var x = 1; x < 7; x++) {
				adoc.Tables.item(tableIndex).Borders.item(x).LineStyle = style;
			}
		}
	}
	/**
	 * 添加图片 url:图片的地址，该参数是必须的 isFloat:可选参数指明是否浮动图片。缺省是true，作为浮动图片插入。
	 * Left:可选参数指明如果插入图片的左边距。缺省值是0；如果IsFloat为false，则在当前光标处插入。该参数不起作用。如果IsFloat为true，则指明插入的图片相对于当前段落左栏的位置，以磅为单位。
	 * Top:可选参数指明如果插入图片的上边距。缺省值是0；如果IsFloat为false，则在当前光标处插入。该参数不起作用。如果IsFloat为true，则指明插入的图片相对于当前段落顶部的位置，以磅为单位
	 * Relative:可选参数取值1-4。1：光标位置；2：页边距；3：页面距离 4：默认设置栏
	 * scale:可选参数表示缩放。默认值100，无缩放。 Zorder:可选参数表示图片是置于文字的上方还是下方。0：下方；1：上方；
	 */
	this.insertPic = function(url, isFloat, left, top, relative, scale, zorder) {
		var obj = this.getOfficeObj();
		obj.AddPicFromURL(url, isFloat, left, top, relative, scale, zorder);
	}
	/**
	 * 打印当前文档
	 */
	this.printOut = function() {
		var obj = this.getOfficeObj();
		obj.PrintOut();
	}
	/**
	 * 显示打印预览视图。
	 */
	this.printPreview = function() {
		var obj = this.getOfficeObj();
		obj.PrintPreview();
	}
	/**
	 * 关闭当前文档
	 */
	this.closeCurrentDoc = function() {
		var obj = this.getOfficeObj();
		obj.Close();
	}
	/**
	 * NTKO提供的提示框
	 */
	this.ntkoAlert = function(title, msg) {
		var ntkoocx = officeFn.getOfficeObj();
		ntkoocx.ShowTipMessage(title, msg);
	}
	/**
	 * 获取当前文档是否处于保护模式
	 */
	this.getIsDocProtected = function() {
		if (this.OFFICE_CONTROL_OBJ.activedocument) {
			var type = this.OFFICE_CONTROL_OBJ.activedocument.ProtectionType;
			// 不处于保护模式
			if (type == -1)
				return false;
			return true;
		}
	}
	/**
	 * 仅用于处理字符串类型的“true”和“false”，将其转换为boolean
	 */
	this.convertToBoolean = function(flag) {
		if ( typeof (flag) == "string" && flag == "true")
			flag = true;
		else if ( typeof (flag) == "string" && flag == "false")
			flag = false;
		return flag;
	}
}

var officeFn = new officeFn();
