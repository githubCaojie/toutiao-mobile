(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Haiyisoft = global.Haiyisoft || {}, global.Haiyisoft.Menu = factory());
}(this, (function () { 'use strict';

var $$dat = [];
var $$menuMap = new HyMap();
var lastClickId = "";
var lastClickLevel = "";
var firstMenuLastId = "";
//widget 需要被定位的dom     caller:参照物
function setFourMenuPosition(menuID, caller, id, direction, parentWidget, menuItemCount, type, menuType) {
	var el = $("#" + menuID);
	var windowHeight = $(window).height();
	var menuLiNum = parseInt((windowHeight - 100) / 37); //四级菜单，取整，一列能放多少个。
	var menuLi = el.children().children();
	var colspan = parseInt(menuLi.length / menuLiNum) + 1; //四级菜单，共放几列
	el[0].style.position = 'absolute';
	//在这里消失上次打开菜单的子菜单，上次打开的菜单已经被当前打开的菜单替换了，但其打开的子菜单还是存在的
	var positionDivObj = $("#positionHelperDiv4");
	for (var i = 0; i < positionDivObj.children().length; i++) {
		$(positionDivObj.children(i)).css("top", "-9999px");
	}
	el.appendTo(positionDivObj);
	var browserTypes = new BrowserTypes();
	var referrer = caller;
	var referoffsetLeft = 0;
	var referoffsetTop = 0;

	referoffsetLeft = referrer.offset().left;
	referoffsetTop = referrer.offset().top;
	var subdims = {
		refW: el.getTotalWidth(),
		refH: el.getTotalHeight()
	};

	var diffWidth = 0; //记录和父的left差
	diffWidth = caller[0].offsetWidth;

	var dims = {

		refX: referoffsetLeft + diffWidth,
		refY: referoffsetTop,
		refW: referrer.getTotalWidth(),
		refH: referrer.getTotalHeight()
	};

	var xVal, yVal, helper, helperIframe;
	var helperleft = 0;
	helperleft = dims.refX;
	if (menuType == 'menu_3') {
		var menuHeight = el.getTotalHeight();
		if (dims.refY + menuHeight > windowHeight && menuHeight < windowHeight) {
			//菜单竖直放不下了,为了主题3样式而加
			dims.refY = windowHeight - menuHeight - 10;
		}
	} else {
		var subMenuHeight = parseInt($(".submenu-item", $("#haiyi-thecondmenu")).height());
		var menuHeight = menuItemCount * subMenuHeight;
		if (dims.refY + menuHeight > windowHeight - 30) {
			//菜单竖直放不下了,为了主题3样式而加
			dims.refY = dims.refY - menuHeight + 40;
		}
	}
	if (el.getTotalHeight() > windowHeight - 100) {
		//如果整个菜单高度大于屏幕高度。
		var elWidth = 0;
		el.empty(); //移除子元素
		var newMenuHtml = "<div style='float:left; border-right: 1px solid #f7a453 ;'>";
		for (var h = 1; h <= menuLi.length; h++) {
			newMenuHtml = newMenuHtml + menuLi[h - 1].outerHTML;
			if (h == menuLiNum || h == 2 * menuLiNum || h == 3 * menuLiNum) {
				newMenuHtml = newMenuHtml + "</div><div style='float:left;'>";
			}
		}
		newMenuHtml = newMenuHtml + "<div>";
		el.html(newMenuHtml); //拼接新的子元素
		for (k = 0; k < el.children().length; k++) {
			if (k < el.children().length - 1) {
				//给列加边框
				$(el.children()[k]).css("border-right", "1px solid #f7a453");
			}
			elWidth = elWidth + $(el.children()[k]).width(); //计算el宽度
		}
		el.css("width", elWidth + 3);
		dims.refY = 100;
	}
	$("#positionHelper4").css({ display: 'block', position: 'absolute', left: helperleft, top: dims.refY, width: subdims.refW, zIndex: 9999 });
	$("#positionHelperIframe4").css({ display: 'block', background: "transparent", position: 'absolute', left: helperleft, top: dims.refY, height: menuHeight, width: subdims.refW, zIndex: 9998 });

	xVal = 0;
	yVal = dims.refH;
	el.css({ bottom: 'auto', top: 0 });
}

function $$hiddenIframe() {
	$("#positionHelper4").css("top", "-9998px");
	$("#positionHelperIframe4").css("top", "-9998px");
}

function closeLastMenu(clickEvent) {

	// 关闭当前点击div的父节点li的所有兄弟节点
	var nowclickId = $(clickEvent).parent().attr("id");

	var liattr = $(clickEvent).parent().parent().children(); // 获取li节点的数组
	for (var i = 0; i < liattr.length; i++) {
		var liEntity = $(liattr[i]);

		if (liEntity.attr("id") != nowclickId) {

			liEntity.removeClass('hy-menu-submenu-open');
			liEntity.removeClass('hy-menu-item-selected');

			var nowclickImgObj = $("#" + $(liEntity.children()[0]).attr("id") + "_img");
			var nowclickLevel = $(clickEvent).attr("level"); //除去点击的节点，其他节点都恢复初始状态
			if (nowclickLevel == 2 || nowclickLevel == "2") {
				//是第二级菜单
				if ($(liEntity.children()[1]).children().length > 0) {
					$(liEntity.children()[1]).addClass('hy-menu-hidden');
				}
				nowclickImgObj.removeClass('hy-menu-thecond-image-select').addClass('hy-menu-thecond-image');
			} else if (nowclickLevel == 3 || nowclickLevel == "3") {

				if (i < liattr.length - 1) {
					nowclickImgObj.removeClass('hy-menu-third-image-select').addClass('hy-menu-third-image');
				} else if (i == liattr.length - 1) {
					//i+1
					nowclickImgObj.removeClass('hy-menu-thirdlast-image-select').addClass('hy-menu-thirdlast-image');
				}
			}
		}
	}
}

function getFirstMenuHtml(newdat, filter) {

	var firstMenuHtml = '',
	    fourMenuClass = "",
	    mouseOutHtml = "",
	    mouseoutFlag = "",
	    mouseEnterHtml = "",
	    thirdtextclass = "";
	var eventName = 'onclick';
	for (var j = 0; j < newdat.length; j++) {
		var levelPadding = "";
		var levelImage = "";
		if (newdat[j].level == 1) {} else if (newdat[j].level == 2) {
			levelPadding = "hy-menu-first-padding";
			levelImage = "hy-menu-thecond-image";
			mouseOutHtml = 'onmouseleave="defaultMenu.secmouseOut(this)"';
		} else if (newdat[j].level == 3) {
			fourMenuClass = "hy-four-menu-style";
			levelPadding = "hy-menu-thecond-padding";
			mouseOutHtml = 'onmouseleave="defaultMenu.mouseOut(this)"';
			mouseEnterHtml = 'onmouseenter="defaultMenu.mouseEnter(this)"';
			eventName = 'onmouseenter';
			mouseoutFlag = 'onmouseleave="defaultMenu.thirdmouseOut(this)"';
			thirdtextclass = "hy-menu-text";
			if (j == newdat.length - 1) {
				levelImage = "hy-menu-thirdlast-image";
			} else {
				levelImage = "hy-menu-third-image";
			}
			//根据filter过滤，目前只过滤3级菜单
			if (filter != undefined && filter != "") {
				if (filter.indexOf(newdat[j].type) == -1) {
					continue;
				}
			}
		} else {

			levelPadding = "hy-menu-third-padding";
		}
		if (newdat[j].children != undefined && newdat[j].children.length > 0) {

			firstMenuHtml = firstMenuHtml + (" <li id=\"li_child_" + newdat[j].level + "_" + j + "\"  class=\"hy-menu-submenu-inline hy-menu-submenu\">\n\t\t\t\t\t\t<div id=\"" + newdat[j].id + "_div_child_" + newdat[j].level + "_" + j + "\" level=\"" + newdat[j].level + "\" ulFlag=\"" + newdat[j].id + "_ul_child_" + newdat[j].level + "_" + j + "\" \n\t\t\t\t\t\t\t" + mouseoutFlag + " " + eventName + "=\"defaultMenu.openMenu(this," + j + "," + newdat.length + ");defaultMenu.spanClick(this)\"  \n\t\t\t\t\t\t\tclass=\"hy-menu-submenu-title " + levelPadding + "\">\n\t\t\t\t\t\t\t\t<table style=\"border-spacing: 0px;\">\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td style=\"display: inline-flex;\">\n\t\t\t\t\t\t\t\t\t\t<span id=\"" + newdat[j].id + "_div_child_" + newdat[j].level + "_" + j + "_img\" class=\"" + levelImage + "\" style=\"display:inline-block\">\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td><div title=\"" + newdat[j].text + " \" class=\"" + thirdtextclass + "\" >\n\t\t\t\t\t\t\t\t\t" + newdat[j].text + "\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<ul id=\"" + newdat[j].id + "_ul_child_" + newdat[j].level + "_" + j + "\" " + mouseOutHtml + " " + mouseEnterHtml + "  class=\"hy-menu hy-menu-inline hy-menu-sub hy-menu-hidden " + fourMenuClass + " \">\n\t\t\t\t\t\t\t  <div> " + getFirstMenuHtml(newdat[j].children, filter) + "\n\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</li> ");
		} else {
			firstMenuHtml = firstMenuHtml + (" <li id=\"" + newdat[j].id + "_li_nochild_" + newdat[j].level + "_" + j + "\" level=\"" + newdat[j].level + "\" onclick=\"defaultMenu.openMultitask(this);defaultMenu.spanClick(this)\"\n\t\t\t\t\t      code=\"" + newdat[j].id + "\" class=\"hy-menu-item  " + levelPadding + "\" >\n\t\t\t\t\t      <table style=\"border-spacing: 0px;\">\n\t\t\t\t\t\t   <tr>\n\t\t\t\t\t\t     <td style=\"display: inline-flex;\">\n\t\t\t\t\t\t\t  <span id=\"" + newdat[j].id + "_div_child_" + newdat[j].level + "_" + j + "_img\" class=\"" + levelImage + "\" style=\"display:inline-block\">\n\t\t\t\t\t          </span>\n\t\t\t\t\t\t\t </td>\n\t\t\t\t\t         <td>\n\t\t\t\t\t\t\t  <div title=\"" + newdat[j].text + " \" class=\"" + thirdtextclass + "\"> " + newdat[j].text + "\n\t\t\t\t\t          </div>\n\t\t\t\t\t\t\t </td>\n\t\t\t\t\t\t   </tr>\n\t\t\t\t\t\t </table>\n\t\t\t\t\t    </li> ");
		}
	}
	return firstMenuHtml;
}

function $$openFourMenu(clickEvent) {

	var menuObjId = $(clickEvent).attr("ulflag");
	var level = $(clickEvent).attr("level");
	var reference = $(clickEvent);
	var childLength = $("#" + menuObjId).children().length;
	setFourMenuPosition(menuObjId, reference, level, "horizontal", reference, childLength, 'haiyisoft3', "menu_3");
}

var Menu = function Menu(config) {
	this._menuTimeOut = null;
	this._menusecTimeOut = null;
	var datePropertyNum = 5; //每个字段属性的个数。目前是6个，比如id，img等，从第7个开始是子菜单。
	var _menuArr = [];
	var _html = "<iframe id='positionHelperIframe4'  frameborder='no' border='0'' style='top:-9999px;position:absolute;z-index:9998;background:transparent'></iframe>";
	_html = _html + "<div id='positionHelper4'  frameborder='no' border='0'' style='top:-9999px;position:absolute;z-index:9999;background:transparent'>\n\t                 \t <div id='positionHelperDiv4' style='position:absolute'></div>\n\t                 </div> ";
	$("body").append(_html);
	//菜单左侧显示的小尖角
	var arrows = " <div id=\"menuBow\"style=\"position: absolute; z-index: 9998;display:none;height:12px;width:7px;\" class=\"i-layout-div hy-usemenu-bow\"  >\n\t\t\t        </div>";
	$("body").append(arrows);
	function generateMenuArr(menuBean) {

		for (var i = 0; i < menuBean.length; i++) {
			var obj = {};
			if (menuBean[i][0] != undefined) {
				obj.img = $$pageContextPath + menuBean[i][0];
			} else {
				obj.img = menuBean[i][0];
			}
			obj.text = menuBean[i][1];
			obj.entity = menuBean[i][2];
			obj.id = menuBean[i][3];
			obj.level = 1;
			//obj.type =  menuBean[i][5];
			$$menuMap.put(obj.id, obj);
			if (menuBean[i].length > datePropertyNum) {
				// 有孩子
				var childArr = [];
				for (var j = datePropertyNum; j < menuBean[i].length; j++) {
					var childrenObj = {};
					if (menuBean[i][j][0] != undefined) {

						childrenObj.img = $$pageContextPath + menuBean[i][j][0];
					} else {
						childrenObj.img = menuBean[i][j][0];
					}
					// childrenObj.img = menuBean[i][j][0];
					childrenObj.text = menuBean[i][j][1];
					childrenObj.entity = menuBean[i][j][2];
					childrenObj.id = menuBean[i][j][3];
					childrenObj.level = 2;
					//childrenObj.type =  menuBean[i][j][5];
					$$menuMap.put(childrenObj.id, childrenObj);
					if (menuBean[i][j].length > datePropertyNum) {
						// 有子菜单，在处理子菜单
						generatesubMenuArr(menuBean[i][j], childrenObj, 3);
					}

					childArr.push(childrenObj);
				}
				obj.children = childArr;
			}
			_menuArr.push(obj);
		}
	}

	function generatesubMenuArr(subMenuBean, childrenObj, level) {
		var subChildArr = [];
		for (var j = datePropertyNum; j < subMenuBean.length; j++) {
			var subChildrenObj = {};
			if (subMenuBean[j][0] != undefined) {
				subChildrenObj.img = $$pageContextPath + subMenuBean[j][0];
			} else {
				subChildrenObj.img = subMenuBean[j][0];
			}

			subChildrenObj.text = subMenuBean[j][1];
			subChildrenObj.entity = subMenuBean[j][2];
			subChildrenObj.id = subMenuBean[j][3];
			subChildrenObj.level = level;
			//subChildrenObj.type =  subMenuBean[j][5];
			$$menuMap.put(subChildrenObj.id, subChildrenObj);
			if (subMenuBean[j].length > datePropertyNum) {
				// 有子菜单，在处理子菜单
				generatesubMenuArr(subMenuBean[j], subChildrenObj, level + 1);
			}
			subChildArr.push(subChildrenObj);
			childrenObj.children = subChildArr;
		}
	}
	generateMenuArr(config.menuBean);
	$$dat = _menuArr;
	function getFirstLeftMenuHtml($$dat) {
		var firstleftMenuHtml = '';
		for (var j = 0; j < $$dat.length; j++) {

			if ($$dat[j].img == "" || $$dat[j].img == null || $$dat[j].img == "null") {
				$$dat[j].img = "framework/css/images3/image3_3/use.png";
			}

			firstleftMenuHtml = firstleftMenuHtml + (" <div style=\"height:75px;  cursor: pointer;\" class=\"i-layout-div\" code=\"" + $$dat[j].id + "\" onclick=\"defaultMenu.openSecondMenu(this)\" >\n\t\t\t\t\t\t\t<div id=\"menu_" + $$dat[j].id + "_img\" class=\"hy-usemenuimage\">\n\t\t\t\t\t\t\t\t<img  src=\"" + $$dat[j].img + "\"/>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"hy-usemenufont\">\n\t\t\t\t\t\t\t\t<span> " + $$dat[j].text + " </span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t \t <div class=\"hy-usemenuline\"></div>\n\t\t\t\t\t  </div>");
		}
		var commonFunHtml = "  <div style=\"height:75px;  cursor: pointer;\" class=\"i-layout-div \" code=\"useMenu\" onclick=\"defaultMenu.openSecondMenu(this)\">\n\t\t\t\t\t\t\t      <div id=\"menu_useMenu_img\" class=\"hy-usemenuimage\">\n\t\t\t\t\t\t\t        <img  src=\"framework/css/images3/image3_3/use.png\"/>\n\t\t\t\t\t\t\t      </div>\n\t\t\t\t\t\t\t\t  <div class=\"hy-usemenufont\"> \n\t\t\t\t\t\t\t\t    <span>\u5E38\u7528\u529F\u80FD</span>\n\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t     <div class=\"hy-usemenuline\"></div>\n\t\t\t\t\t\t\t </div> ";

		firstleftMenuHtml = commonFunHtml + firstleftMenuHtml;
		return firstleftMenuHtml;
	}

	$("#leftMenu")[0].innerHTML = getFirstLeftMenuHtml($$dat);

	setTimeout(function () {
		//
		importjs.use([$$pageContextPath+"framework/menu/menu_3.js",$$pageContextPath+"framework/menu/menu_3.css"],function(){
		//importjs.use([$$pageContextPath + "template/haiyisoft3/menu/menu_1.js", $$pageContextPath + "css/css/haiyisoft3/menu/menu_1.css"], function () {
			config.type = "menu_clientmenu";
			var defaultMenu1 = new Haiyisoft.HyMenu3(config);
			defaultMenu1.initComponent();
		});
	}, 0);
	function _goBottomScroll() {
		var boDiv = $("#menu_clientmenu");
		boDiv.scrollTop(boDiv.scrollTop() + 40);
	}

	function _goTopScroll() {
		var boDiv = $("#menu_clientmenu");
		boDiv.scrollTop(boDiv.scrollTop() - 40);
	}
	$("#menu_clientmenu").bind("mousewheel", function () {
		if (event.wheelDelta <= -120) {
			_goBottomScroll();
		} else if (event.wheelDelta >= 120) {
			_goTopScroll();
		}
	});
};
Menu.prototype.openSecondMenu = function (clickEvent) {
	//personType取值为A，都显示。都可点击。为“E，H，G”只显示，选中目前的权限，不可点击。
	hiddenFilter(personType);
	menuexpand(); //如果二级菜单div隐藏，点击一级菜单进行展示。
	var code = $(clickEvent).attr("code");
	var menuText = "",
	    menuCode = "",
	    sourceFlag = "";
	sourceFlag = $("#sourceSelect").attr("flag"); //获得过滤条件
	$("#menuBow").css("display", "block");
	$("#menuBow").css("left", $(clickEvent)[0].offsetWidth - 6);
	$("#menuBow").css("top", $(clickEvent)[0].offsetTop + 87);
	if (code == "useMenu") {
		$("#menuContainer").css("display", "none");
		$("#commonFunc").css("display", "block");
	} else {
		$("#commonFunc").css("display", "none");
		$("#menuContainer").css("display", "block");
	}
	var fistHeml = "";
	if (firstMenuLastId != "") {
		$("#menu_" + firstMenuLastId + "_img").removeClass("hy-usemenuselectimage").addClass("hy-usemenuimage");
	}
	$("#menu_" + code + "_img").addClass("hy-usemenuselectimage").removeClass("hy-usemenuimage");
	for (var h = 0; h < $$dat.length; h++) {
		if (code == $$dat[h].id) {
			if ($$dat[h].children != undefined && $$dat[h].children.length > 0) {
				fistHeml = getFirstMenuHtml($$dat[h].children, sourceFlag);
			}
			menuText = $$dat[h].text;
			menuCode = $$dat[h].id;
			var menuHtml = '<ul class="hy-menu  hy-menu-inline hy-menu-root hy-menu-blue" style="background:transparent;"role="menu">' + fistHeml + '</ul>';
			$("#menu_clientmenu").html(menuHtml);

			break;
		}
	}
	$("#menuText").text(menuText);
	$("#menuText").attr("code", menuCode);
	firstMenuLastId = code;
}, Menu.prototype.openMenu = function (clickEvent, clickNum, clickLength) {
	var nowclickId = $(clickEvent).attr("id");
	var nowclickLevel = $(clickEvent).attr("level");
	var nowclickImgObj = $("#" + nowclickId + "_img");
	if ($(clickEvent).parent().hasClass('hy-menu-submenu-open')) {
		$(clickEvent).parent().removeClass('hy-menu-submenu-open');
		$(clickEvent).parent().removeClass('hy-menu-item-selected');

		if (nowclickLevel == 2 || nowclickLevel == "2") {
			//是第二级菜单
			$($(clickEvent).parent().children()[1]).addClass('hy-menu-hidden');
			nowclickImgObj.removeClass('hy-menu-thecond-image-select').addClass('hy-menu-thecond-image');
		} else if (nowclickLevel == 3 || nowclickLevel == "3") {
			//是第3级菜单
			if (clickNum < clickLength - 1) {
				$($(clickEvent).parent().children()[1]).addClass('hy-menu-hidden'); //需要删掉。。。。。。。。。。。。。。。

				nowclickImgObj.removeClass('hy-menu-third-image-select').addClass('hy-menu-third-image');
			} else if (clickNum == clickLength - 1) {
				nowclickImgObj.removeClass('hy-menu-thirdlast-image-select').addClass('hy-menu-thirdlast-image');
			}
		}
	} else {
		$(clickEvent).parent().addClass('hy-menu-submenu-open');
		$(clickEvent).parent().addClass('hy-menu-item-selected');

		if (nowclickLevel == 2 || nowclickLevel == "2") {
			//是第二级菜单
			$($(clickEvent).parent().children()[1]).removeClass('hy-menu-hidden');
			nowclickImgObj.removeClass('hy-menu-thecond-image').addClass('hy-menu-thecond-image-select');
		} else if (nowclickLevel == 3 || nowclickLevel == "3") {
			$($(clickEvent).parent().children()[1]).removeClass('hy-menu-hidden'); //需要删掉。。。。。。。。。。。。。。。
			$$openFourMenu(clickEvent);
			if (clickNum < clickLength - 1) {
				nowclickImgObj.addClass('hy-menu-third-image-select').removeClass('hy-menu-third-image');
			} else if (clickNum == clickLength - 1) {

				nowclickImgObj.addClass('hy-menu-thirdlast-image-select').removeClass('hy-menu-thirdlast-image');
			}
		}
	}
	closeLastMenu(clickEvent);
};

Menu.prototype.openMultitask = function (clickEvent) {
	var menuId = $(clickEvent).attr("code");
	var _menu = $$menuMap.get(menuId);
	if (_menu.entity != "") {
		var _link = _menu.entity;
		if (_link.indexOf("?") > 0) {
			_link += "&appCode=" + _menu.id;
		} else {
			_link += "?appCode=" + _menu.id;
		}
		if (window.MultitaskPanelManager == undefined) {// 单任务

		} else {
			if (defaultCloseFirstTask == "Y") {
				window.MultitaskPanelManager.addMenuTab(_menu.id, _menu.text, _link, true, false, defaultCloseFirstTask);
			} else {
				window.MultitaskPanelManager.addMenuTab(_menu.id, _menu.text, _link, true);
			}
		}
	}
	$$hiddenIframe();
};

Menu.prototype.mouseOut = function (obj) {

	$(obj).css("top", "-9999px");
	$$hiddenIframe();
};
Menu.prototype.secmouseOut = function (obj) {
	//第三级菜单。不选择第四级，从第三级移出，iframe消失
	this._menusecTimeOut = window.setTimeout(function () {
		$$hiddenIframe();
	}, 200);
};
Menu.prototype.thirdmouseOut = function (obj) {

	$(obj).parent().removeClass('hy-menu-submenu-open');
	$(obj).parent().removeClass('hy-menu-item-selected');
	var nowclickId = $(obj).attr("id");
	var nowclickImgObj = $("#" + nowclickId + "_img");
	if (nowclickImgObj.hasClass('hy-menu-third-image-select')) {
		nowclickImgObj.removeClass('hy-menu-third-image-select').addClass('hy-menu-third-image');
	} else if (nowclickImgObj.hasClass('hy-menu-thirdlast-image-select')) {
		nowclickImgObj.removeClass('hy-menu-thirdlast-image-select').addClass('hy-menu-thirdlast-image');
	}

	this._menuTimeOut = window.setTimeout(function () {
		$(obj).removeClass('hy-menu-item-selected');
		var ulId = $(obj).attr("ulflag");
		$("#" + ulId).css("top", "-9999px");
		$$hiddenIframe();
	}, 100);
};
Menu.prototype.mouseEnter = function () {

	clearTimeout(this._menusecTimeOut);
	clearTimeout(this._menuTimeOut);
};

Menu.prototype.spanClick = function (clickEvent) {

	var nowLevel = $(clickEvent).attr("level");
	if (nowLevel == 4 || nowLevel == "4") {
		$(clickEvent).parent().parent().css("top", "-9999px");
	}
	$("#" + lastClickId).removeClass('hy-menu-item-selected');
	$(clickEvent).addClass('hy-menu-item-selected');
	lastClickId = $(clickEvent).attr("id");
	lastClickLevel = nowLevel;
};

return Menu;

})));
