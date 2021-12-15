


function HyMap()
{
   this.elements = new Array();

   /**
   * 获取MAP元素个数
   */
this.size = function() {
   return this.elements.length;
}

/**
   * 判断MAP是否为空
   */
this.isEmpty = function() {
   return (this.elements.length < 1);
}

   /**
   * 删除MAP所有元素
   */
this.clear = function() {
   this.elements = new Array();
}

   /**
   * 向MAP中增加元素（key, value) 
   * @param {Object} _key 
   * @param {Object} _value
   */
   this.put = function(_key, _value) {
this.elements.push({key:_key, value:_value});
   }

   /**
   * 删除指定KEY的元素，成功返回True，失败返回False
   * @param {Object} _key
   */
this.remove = function(_key) {
   var bln = false;
   try {   
    for (var i = 0; i < this.elements.length; i++) { 
     if (this.elements[i].key == _key){
      this.elements.splice(i, 1);
      return true;
     }
    }
   }catch(e){
    bln = false;    
   }
   return bln;
}

/**
* 获取指定KEY的元素值VALUE，失败返回NULL
* @param {Object} _key
*/
this.get = function(_key) {
   try{   
    for (var i = 0; i < this.elements.length; i++) {
     if (this.elements[i].key == _key) {
      return this.elements[i].value;
     }
    }
   }catch(e) {
    return null;   
   }
}
/**
 * 获取指定KEY的元素值VALUE，并且为VALUE对象的属性赋值
 * @param {} _key
 * @param {} _attr
 * @param {} _val
 */
this.set = function(_key, _attr, _val) {
	if(arguments.length == 2){
		this.put(arguments[0],arguments[1]);
	}else{
		try{   
	    for (var i = 0; i < this.elements.length; i++) {
	     if (this.elements[i].key == _key) {
	       this.elements[i].value[_attr] = _val ;
	     }
	    }
	   }catch(e) {
   		}
	}
	
	
}
this.arrayAddElm = function(_key, _attr, _val) {
	try{   
	    for (var i = 0; i < this.elements.length; i++) {
	     if (this.elements[i].key == _key) {
	       this.elements[i].value.attr[_attr].push(_val);
	     }
	    }
	   }catch(e) {
   }
}
this.arrayDelElm = function(_key, _attr, _val) {
	try{   
	    for (var i = 0; i < this.elements.length; i++) {
	     if (this.elements[i].key == _key) {
	      	for(var index = 0; index < this.elements[i].value.attr[_attr].length; index++){
	      		if(this.elements[i].value.attr[_attr][index] == _val){
	      			this.elements[i].value.attr[_attr].splice(index, 1);
	      		}
	      	}
	     }
	    }
	   }catch(e) {
   }
}
/**
 * 获取指定KEY的元素值VALUE，并且覆盖VALUE的值,若没有得到指定KEY的元素值VALUE，则加入到map中
 * @param {} _key
 * @param {} _val
 */
this.overwrite = function(_key, _val){
	try{   
		var flag = false;
	    for (var i = 0; i < this.elements.length; i++) {
	     if (this.elements[i].key == _key) {
	       this.elements[i].value = _val ;
	       flag = true;
	     }
	    }
	    if(!flag){
	    	this.put(_key,_val);
	    }
	   }catch(e) {
   }
}
/**
* 获取指定索引的元素（使用element.key，element.value获取KEY和VALUE），失败返回NULL
* @param {Object} _index
*/
this.element = function(_index) {
   if (_index < 0 || _index >= this.elements.length)
   {
    return null;
   }
   return this.elements[_index];
}

/**
* 判断MAP中是否含有指定KEY的元素
* @param {Object} _key
*/
this.containsKey = function(_key) {
   var bln = false;
   try {
    for (var i = 0; i < this.elements.length; i++) { 
     if (this.elements[i].key == _key){
      bln = true;
     }
    }
   }catch(e) {
    bln = false;    
   }
   return bln;
}
    
/**
* 判断MAP中是否含有指定VALUE的元素
* @param {Object} _value
*/
this.containsValue = function(_value) {
   var bln = false;
   try {
    for (var i = 0; i < this.elements.length; i++) { 
     if (this.elements[i].value == _value){
      bln = true;
     }
    }
   }catch(e) {
    bln = false;    
   }
   return bln;
}

/**
* 获取MAP中所有VALUE的数组（ARRAY）
*/
this.values = function() {
   var arr = new Array();
   for (var i = 0; i < this.elements.length; i++) { 
    arr.push(this.elements[i].value);
   }
   return arr;
}

/**
* 获取MAP中所有KEY的数组（ARRAY）
*/
this.keys = function() {
   var arr = new Array();
   for (var i = 0; i < this.elements.length; i++) { 
    arr.push(this.elements[i].key);
   }
   return arr;
}
}


function callMultitask(menu,type){  //执行菜单的单击方法

	if(menu.entity != ""){
			_link = menu.entity;
			if(_link.indexOf("?")>0){
			_link+="&appCode="+menu.code;
		}else{
			_link+="?appCode="+menu.code;
		}
		_preMouseoverMenu　= menu;
		if(localStorage.defaultCloseFirstTask == "Y") {
			window.MultitaskPanelManager.addMenuTab(menu.code,menu.name,_link,true,false,localStorage.defaultCloseFirstTask);
		} else {
			window.MultitaskPanelManager.addMenuTab(menu.code,menu.name,_link,true);
		}
		if(type == 'menu2'){
			$("#thecondMenu_container").hide();
			$("#triangelUp").hide();
			$("#menu2-threemenu-container").css({"display":"none"}); //第三级菜单消失
		}else{
			$("#menuContent").hide();
		}
		
	}
}


//获取平铺三四级菜单html
function getFlatThirdFourHtml(menu){
	var menuHtml = "";
	if(menu.children != undefined){
		var threeLevelHtml = ""
		 for(var i=0;i<menu.children.length;i++){
				var subMenu = _menuMap.get(menu.children[i]);
				 var hasChildrenAttr = "hasChildren='true' ";
				 if(subMenu.children == undefined){
					hasChildrenAttr = "hasChildren='false' ";
				 }
				 threeLevelHtml = threeLevelHtml + "<div class='third-level-menuitem-container layout-div'> "+
				                      "<div class='third-level-title-container' >"+
				                      " <div class='third-level-title-img'><img src='"+(typeof $$pageContextPath == 'undefined' ? $$ContextPath.frontContext : $$pageContextPath)+"static/images/menu/resource.png'  /></div> "+
														 " <div "+hasChildrenAttr+" class='third-level-title' code='"+subMenu.code+"'>  "+subMenu.name+"   </div>"+
														 " <div class='third-level-title-separate'></div> "+
														 "</div>";
														
				if(subMenu.children != undefined){
					var fourLevelHtml = ""
					 for(var k=0;k<subMenu.children.length;k++){
							var fourMenu = _menuMap.get(subMenu.children[k]);
							 fourLevelHtml = fourLevelHtml +"<div class='four-level-item'code='"+fourMenu.code+"'> "+fourMenu.name+" </div>"
					 }
					 threeLevelHtml = threeLevelHtml + fourLevelHtml;
				}

				threeLevelHtml = threeLevelHtml +"</div>";

		 }
		 menuHtml = threeLevelHtml;
	}else{
		menuHtml = "";
	}
	return menuHtml;
}

  
	var _menuMap = new HyMap();//存储所有菜单的map
	var _childMenuItem = ' <div id="${menuCode}" layer="${layer}" parent="${parentMenuCode}" class="menu-item-noimg layout-div has-children">' +
												'<span  class="menu-name">${menuName}</span>' +	 		                
											' </div>',
			//hy-menu-img		 
			_childMenuItem_img = ' <div id="${menuCode}" layer="${layer}" parent="${parentMenuCode}" class="menu-item layout-div has-children">' +
							//							'<img src="${menuImg}" class="hy-menu-img" />'+	            
														'<span  class="menu-name">${menuName}</span>' +			 		                    
													' </div>',           
			_noChildMenuItem  = ' <div id="${menuCode}" layer="${layer}"  parent="${parentMenuCode}" class="menu-item-noimg layout-div ">' +
														'<span class="menu-name">${menuName}</span>' +
													' </div>',
			_noChildMenuItem_img = ' <div id="${menuCode}" layer="${layer}"  parent="${parentMenuCode}" class="menu-item layout-div ">' +
							//								'<img src="${menuImg}" class="hy-menu-img" />'+	
														'<span class="menu-name">${menuName}</span>' +
													' </div>';	            
  Haiyisoft.Menu = function(_menuId,_menuBean,_direction,isShowAll) {
	 		            		            
		var obj = null,//中间变量
		key = null,
		_delayTime = 50,//延时多长时间打开菜单
    _delayHideTime = 300,
		lastOpenMenu = null,//上一次打开的子菜单,记录非第一层菜单打开的子菜单
		_menuTimeOut = null,
		_hideMenuTimeout = null,
		_logoExpandHoverTimeout = null,
		_hideExpandMenuTimeout = null;
		_selectMenuTimeOut = null,
		_subMenuIds = ['onemenu','twomenu','threemenu'],
		_id = "",
		_preMouseoverMenu = null,//记录上次单击的菜单
		_lastscrollTop=0;
		_submenu = null,
		_currentMenu = null,
		_overPreMenu = null,
		_parentMenu = null,
		_menuSelectItem = ["","","",""];//记录每级上次被　选中的item	
		 var options = {step:20, speed:60};
	this.hideMenu = function(){
		
	}
	//创建菜单Map  Map的结构  key:code  value: obj对象  attr: name  entity childern[code1,code2]
	
	function restoreExpandLog(){
		$("#logo-expand").removeClass("logo-expand-hover");
		$("#logo-expand").find("img").attr("src","images/home/main/expand.png")
	}
	//
  var height = $(window).height() - 70;
	$("#onemenu").height(height);
	$("#twomenu").height(height);
	$("#threemenu-container").height(height);

  
    $("#logo-expand").bind('mouseenter', function(event) {
    	  $("#menuContent").show();
				$("#onemenu").show();
			//	$("#menuContent").animate({display:'block'},100);
				$("#onemenu").animate({width:'190'},200);
				clearTimeout(_hideMenuTimeout);	
				clearTimeout(_hideExpandMenuTimeout);
			//	$(this).addClass("logo-expand-hover");
			//	$(this).find("img").attr("src","images/home/main/expand-hover.png")
    });
     $("#logo-expand").bind('mouseleave', function(event) {
           _hideExpandMenuTimeout = setTimeout(function(){
           	    $("#onemenu").hide();
           	    $("#menuContent").hide();
					 },_delayHideTime)
					 var me = this;
					 _logoExpandHoverTimeout = setTimeout(function(){
					//	restoreExpandLog();
					 },_delayHideTime)
    });

	function generateMenuMap(menuBean){
		for(var i=0;i<menuBean.length;i++){
			obj = {};
			obj.name = menuBean[i][1];
			obj.entity = menuBean[i][2];
			obj.code = menuBean[i][3];
			obj.level = 0;
			key = menuBean[i][3];
			if(menuBean[i].length > 5){//有孩子
				children = [];
				for(var j=5;j<menuBean[i].length;j++){
					children.push(menuBean[i][j][3]);
				}
				obj.children = children;
			}
			_menuMap.put(key,obj);
			for(var j=5;j<menuBean[i].length;j++){
				generatesubMenuMap(menuBean[i][j]);
			}
		}
	}
	function generatesubMenuMap(subMenuBean){
		obj = {};
		obj.name = subMenuBean[1];
		obj.entity = subMenuBean[2];
		obj.code = subMenuBean[3];
		key = subMenuBean[3];
		if(subMenuBean.length > 5){//有孩子
			children = [];
			for(var j=5;j<subMenuBean.length;j++){
				children.push(subMenuBean[j][3]);
			}
			obj.children = children;
		}
		_menuMap.put(key,obj);
		for(var j=5;j<subMenuBean.length;j++){
			generatesubMenuMap(subMenuBean[j]);
		}
	}
	
	generateMenuMap(_menuBean);
	
    function replace(original, regulation, repstr){
		return original.replace(new RegExp(regulation, "g"), repstr);
	};
	function  _tabScroll (menuId,childLength){//每次生成的调用
		function getId (idValue){
			return "string" ==typeof idValue?document.getElementById(idValue):idValue;
		}
	    var me = this ;
		var oCtrlTop = getId(menuId+"_topimage"),//向上箭头
		    oCtrlBottom = getId(menuId+"_bottomimage");//向下箭头
	   
		var firstMenuheight=childLength*30;//行数乘以行高
		if( firstMenuheight > 453){//上下滚动箭头出现，460是第一层菜单的内容div高度
			$(oCtrlTop).css("display","block");
			$(oCtrlBottom).css("display","block");
		}else{
			$(oCtrlTop).css("display","none");
			$(oCtrlBottom).css("display","none");
			
		}
		step = Math.abs(options.step);
		speed= Math.abs(options.speed);
		$(oCtrlTop).unbind("mouseover")
	             .unbind("mousedown")
	             .unbind("mouseout")
	             .unbind("mouseup");
	    $(oCtrlBottom).unbind("mouseover")
	             .unbind("mousedown")
	             .unbind("mouseout")
	             .unbind("mouseup");
	      var leftAct = "leftAct",rightAct = "rightAct";       
	     if(!$msie){
         	leftAct = "leftAct-chrome";
         	rightAct = "rightAct-chrome";
         	
         }
	    $(oCtrlTop).bind("mousedown",function() {_goTop(menuId); })
	             .bind("mouseout",function() { _stopFun();  })
	             .bind("mouseup", function() { _stopFun();  });
	
	    $(oCtrlBottom).bind("mousedown",function() {_goBottom(menuId);  })
	             .bind("mouseout", function() { _stopFun(); })
	             .bind("mouseup",function() { _stopFun(); });
	            
       $( "#"+menuId).bind("mousewheel",function() {
	 	    if (event.wheelDelta <= -120) {
				_goBottomScroll(menuId);
			} else if (event.wheelDelta >= 120) {
				_goTopScroll(menuId);
			}
	 	
	 	 });
	}
	
	function _goTop(menuId){
	    var me = this;
		me.moveEvent = window.setInterval(function(){
			_goTopScroll(menuId);
		}, speed);
	}
	function _goBottom(menuId){
	     var me = this;
		me.moveEvent = window.setInterval(function(){_goBottomScroll(menuId);}, speed);
	}
	
	function  _goBottomScroll(menuId){
		var boDiv = $( "#"+menuId);
		boDiv.scrollTop(boDiv.scrollTop()+options.step);
		changeImage(menuId);
		_lastscrollTop=boDiv.scrollTop(); 
	}
	
	
    function _goTopScroll (menuId){
	    var boDiv = $( "#"+menuId);
		boDiv.scrollTop(boDiv.scrollTop()-options.step);
		changeImage(menuId); 
		_lastscrollTop=boDiv.scrollTop();
	}
	function changeImage(menuId){
		var boDiv = $( "#"+menuId);
		if(boDiv.scrollTop() != 0){
			$("#"+menuId+"_topImg").removeClass("menu-img-top-readonly").addClass('menu-img-top');
		}else{
			$("#"+menuId+"_topImg").removeClass("menu-img-top").addClass('menu-img-top-readonly');
		}
		if((boDiv.scrollTop() != 0)&&(_lastscrollTop==boDiv.scrollTop())){
			$("#"+menuId+"_bottomImg").removeClass("menu-img-bottom").addClass('menu-img-bottom-readonly');
		}else{
			$("#"+menuId+"_bottomImg").removeClass("menu-img-bottom-readonly").addClass('menu-img-bottom');
		}
		
	}
    function  _stopFun  (){
	    clearInterval(this.moveEvent);
	};
    //创建第一层横向菜单 
    (function(){
    	//创建第一层菜单
    	var _menuBarHtml = "",_code = null,_menu = null;
    	
	    for (var i = 0; i < _menuBean.length; i++){
				_subItem =  _menuBean[i];
	    	_menu = _menuMap.get(_subItem[3]);
	    	if(_menu.children == undefined){
	    		_html = _noChildMenuItem_img.replace("${menuCode}",_subItem[3]);
	    		_html = _html.replace("${layer}","0");
	    		_html = _html.replace("${menuName}",_subItem[1]);
	    	}else{
		    	_html = _childMenuItem_img.replace("${menuCode}",_subItem[3]);
		    	_html = _html.replace("${layer}","0");
					_html = _html.replace("${menuName}",_subItem[1]);

				var srcPath = "";
				if(typeof $$pageContextPath == 'undefined') {
					srcPath = $$ContextPath.frontContext + "static/images/menu/"+_subItem[3]+".png";
				} else {
					srcPath = $$pageContextPath+"images/menu/"+_subItem[3]+".png";
				}
					_html = _html.replace("${menuImg}",srcPath);
	    	
	    	}
	    	
	    	_menuBarHtml = _menuBarHtml + _html;
	    	
	    }
	   $("#onemenu")[0].innerHTML = _menuBarHtml;
	   
          $(document).ready(function(){
          
         	_tabScroll("onemenu",_menuBean.length);//该方法是增加左边和右边的小按钮
         
       }) ; 
	   //增加鼠标经过事件
	   for(var i=0;i<_subMenuIds.length;i++){

				var divMenuId =_subMenuIds[i]; 
				if(i == 2){
					divMenuId = divMenuId +"-container"
				}
				$("#"+divMenuId).unbind("mouseenter");
				$("#"+divMenuId).unbind("mouseleave");

				$("#"+divMenuId).bind("mouseleave",function(event){
					_hideMenuTimeout = setTimeout(function(){
							 $("#menuContent").hide();
						//	 restoreExpandLog();

					},_delayHideTime)
				})
				$("#"+divMenuId).bind("mouseenter",function(event){
					clearTimeout(_hideExpandMenuTimeout);
					clearTimeout(_hideMenuTimeout);
					clearTimeout(_logoExpandHoverTimeout)
				})

			  if(i > 1){
						return;
				}
	   	 
				$("#"+divMenuId).undelegate("div","mouseenter");
				$("#"+divMenuId).undelegate("div","mouseleave");

		    $("#"+divMenuId).delegate("div","mouseenter",function(event){
		   
					_id = $(this).attr("id");
				    _currentMenu = _menuMap.get(_id);
					if(_overPreMenu ==  null || (_overPreMenu.code != _currentMenu.code && _overPreMenu.level == _currentMenu.level)){////同一级的，和上一次不是同一个menu ,直接执行 over事件
					
						mouseOverEvent(this,_currentMenu);
						//消失mouseover 或select事件
						mouseOutEvent(_overPreMenu);

					}else if(_overPreMenu.code == _currentMenu.code){//和上一次的menu相同
					
						return;
					}else if(menuIsParentChildren(_overPreMenu,_currentMenu)){//是父子关系
					
					//	  if(this.style.backgroundImage.indexOf("menuitem-select.png") > 0){//若有select样式，什么都不做
					    if(this.style.background == "#E8E8E9" ){//若有select样式，什么都不做
								//有可能是上次打开到第四级，然后单击该菜单，则整个菜单消失，下次在打开时，从第三级打开，这时第四级已经打开了，
								//并且刚才单击的菜单还有mouseover样式，鼠标移到其亲兄弟节点时,这个mouseover样式也不会消失，就出现了两个mouseover事件
								if(_preMouseoverMenu != null){
									cancelMouseOver(_preMouseoverMenu);
								}
						  }else if(_currentMenu.children == undefined){//若没有子，则直接加上over样式
								mouseOverEvent(this,_currentMenu);
						  }else{
							//若有子，在openMenu那里加上select样式
						  }

					}else{//不在同一级，不是父子关系,上一次的select也是在这里消失,
						
						//去找子时，可能会经过父的亲兄弟节点，这时其兄弟节点被增加了mouseover样式，需要将其删除　
						mouseOutEvent(_overPreMenu);
						cancelWhichMenSelect(_currentMenu);//与_currentMenu同一级的上一次的select也在这里消失
						mouseOverEvent(this,_currentMenu);
						//因为有延时效应，需要将_currentMenu的父重新加selectitem样式
						if(_currentMenu.level !=0){
							obj =  parentCode = $(this).attr("parent")
							obj = _menuMap.get(obj);
							setSelectedItem(obj);
						}
					}
				_overPreMenu = 	_currentMenu;
				_menuTimeOut = window.setTimeout(function(){openMenu(_currentMenu,event);},_delayTime);
				
		    });
		      $("#"+divMenuId).delegate("div","mouseleave",function(event){
		      
		    	_id = $(this).attr("id");
		    	_currentMenu = _menuMap.get(_id);
				
		    	if(_currentMenu.code != _overPreMenu.code){
		    		clearTimeout(_menuTimeOut);	
					}
					
				
		    }); 
		    
		     $("#"+divMenuId).delegate("div","click",function(){
		     	 
						_id = $(this).attr("id");
						_currentMenu = _menuMap.get(_id);
						callMultitask(_currentMenu);
		     });
	   }
	
    })()
  
	function  mouseOverEvent(obj,menu){
   
		 obj.style.background = "#E8E8E9";

		 if(menu.level == 0){
				$("#twomenu").show();
				$("#twomenu").animate({width:'190'},200);
				//$("#threemenu-container").hide();
			//	$("#threemenu-container").animate({width:'0'},200);
		 }else if(menu.level == 1){
		 	if(menu.children != undefined){
		 	   $("#threemenu-container").show();
		 	}
			
			 //$("#threemenu-container").animate({width:'640'},200);
		 }
	}

	function mouseOutEvent(menu){
		if(menu == null){
			return;
		}
		var obj = $("#"+menu.code);
		obj[0].style.background = "transparent";
		
	}

	function setSelectedItem(menu){

		$("#"+menu.code)[0].style.background = "#E8E8E9";
		
		_menuSelectItem[menu.level] = menu.code;

		if(menu.level == 0){
			$("#twomenu").show();
			$("#threemenu-container").hide();
		}else if(menu.level == 1){
			if(menu.children != undefined){
				$("#threemenu-container").show();
			}
			//$("#threemenu-container").animate({width:'640'},200);
		}
	}
	
	function cancelMouseOver(menu){
		var obj = $("#"+menu.code);
		if(obj.length > 0){
			obj[0].style.background = "transparent";

		}
	}

	function cancelWhichMenSelect(menu){
		var code = _menuSelectItem[menu.level];
		
		obj = $("#"+code);
		if(obj.length == 0){
			return;
		}
		obj[0].style.background = "transparent";
	
	}

    function getnerateMenuHtml(menu){
			var level = parseInt(menu.level)+1,menuHtml = "";
		  if(menu.level == '0'){
				var submMenuHtml = "",subMenu = null;
				if(menu.children != undefined){
					for(var i=0;i<menu.children.length;i++){
						subMenu = _menuMap.get(menu.children[i]);
						subMenu.level = level;
						if(subMenu.children == undefined){
							submMenuHtml = _noChildMenuItem.replace("${menuCode}",subMenu.code);
							submMenuHtml = submMenuHtml.replace("${layer}",level);
							submMenuHtml = submMenuHtml.replace("${menuName}",subMenu.name);
							submMenuHtml = submMenuHtml.replace("${parentMenuCode}",menu.code);
						}else{
							submMenuHtml = _childMenuItem.replace("${menuCode}",subMenu.code);
							submMenuHtml = submMenuHtml.replace("${layer}",level);
							submMenuHtml = submMenuHtml.replace("${menuName}",subMenu.name);
								submMenuHtml = submMenuHtml.replace("${parentMenuCode}",menu.code);
							
							submMenuHtml = submMenuHtml.replace("${menuarrow}","menuarrow.png");   		
						}
						
						menuHtml = menuHtml + submMenuHtml;
					}
				
				}
			}else if(menu.level == '1'){
				   menuHtml = getFlatThirdFourHtml(menu);
			}  

				$("#"+_subMenuIds[level])[0].innerHTML = menuHtml;

		   if(menu.level == '1'){
			  	setThreeFourLevelLayout();  //调整第三级、第四级布局
			 }

			 //绑定单击事件
			 $(".four-level-item",$("#threemenu-container")).bind("click",function(){
					var code = $(this).attr("code");
					var menu = _menuMap.get(code);
					callMultitask(menu);
			 });
			 
			 $(".third-level-title",$("#threemenu-container")).bind("click",function(){
				//if($(this).attr("hasChildren") == "false"){
					var code = $(this).attr("code");
					var menu = _menuMap.get(code);
					callMultitask(menu);
				//}
			 });
			 
    }
    	   
    /**
     * 在父菜单的右侧显示
     */
    function _showHorizontalMenuComponent(menu){
			var id = menu.code;
			setSelectedItem(menu);
    	getnerateMenuHtml(menu);
    
    }
    
   
    function childrenIsOpen(menu){
    	var isOpen = false;
    	
    	if(menu.children != undefined){
	    	
    		if($("#"+menu.children[0]).css("display") == "block"){
    			isOpen = true;
    		}
    	}
    	return isOpen;
    }
    
    function menuIsParentChildren(menu1,menu2){//菜单是否是父子关系
    	var flag = false;
    	if(menu2.children != undefined){
    		for(var i=0;i<menu2.children.length;i++){
    			if(menu2.children[i] == menu1.code){
    				flag = true;
    				break;
    			}
    		}
    	}else if(menu1.children != undefined){
    		for(var i=0;i<menu1.children.length;i++){
    			if(menu1.children[i] == menu2.code){
    				flag = true;
    				break;
    			}
    		}
    	}
    	if(!flag){
	    	if(menu2.children != undefined && menu1.children != undefined){
	    		for(var i=0;i<menu2.children.length;i++){
	    			if(menu2.children[i] == menu1.code){
	    				flag = true;
	    				break;
	    			}
	    		}
	    		if(!flag){
	    			for(var i=0;i<menu1.children.length;i++){
		    			if(menu1.children[i] == menu2.code){
		    				flag = true;
		    				break;
		    			}
	    			}
	    		}
	    	}
    	}
    	
    	return flag;
    }
    /**
     * 非第一层菜单打开一个菜单,只需要打开当前菜单的子菜单,并关闭其上一次打开的子菜单
     */
    function openMenu(menu,eventObj){
		
				if(menu == lastOpenMenu || childrenIsOpen(menu)){//新需要打开的菜单和上一次打开的菜单相同  或者将要打开的菜单已经打开了
					lastOpenMenu = menu;
					return;
				}
				
				lastOpenMenu = menu
			
					//清空其子即子的子菜单
				var level = menu.level+1;
				for(var i=level;i<_subMenuIds.length;i++){
		
					$("#"+_subMenuIds[i])[0].innerHTML = "";
				}
				
			if(menu.children != undefined){
					_showHorizontalMenuComponent(menu);//物理打开菜单
			}
    }
	}
	


	function setThreeFourLevelLayout(){
		var msnry = new Masonry('#threemenu', {
			itemSelector: '.third-level-menuitem-container',
			columnWidth: 210
   	});
	}

	function setMenu2ThreeFourLevelLayout(){
		var msnry2 = new Masonry('#menu2-threemenu', {
			itemSelector: '.third-level-menuitem-container',
			columnWidth: 210
   	});
	}
	
	
	  Haiyisoft.Menu2 = function(_menuId,_menuBean) {
			var firstMenuHtml = "<div class='hor-first-menuitem' code='${menuCode}' layer='${layer}'>${menuName}</div> ";
			var thecondHtml = "<div class='hor-thecond-menuitem' code='${menuCode}' index='${index}' layer='${layer}'>${menuName}</div> ";
			var thecondHasChildrenHtml= "<div class='hor-thecond-menuitem has-children2' code='${menuCode}' index='${index}' layer='${layer}'>${menuName}</div> ";
			
			//var windowHeight = $(window).height() - 110;
			windowHeight = 0;
			var windowHeight2 = 670;
			var animateTime = 300;
			var showTime = 0;
			var thirdMenuWidth = 650;
			var thecondMenuWidth = 180;
			var _hideThecondMenuTime = null;
			var lastSelectedMenuDom = null;
			var _hoverThecondMenuTime = null;
	  	this.generateFirstMenu = function(){
	  		var _menuBarHtml = "";
		  	 for (var i = 0; i < _menuBean.length; i++){
					var _subItem =  _menuBean[i];
	
		    		var _html = firstMenuHtml.replace("${menuCode}",_subItem[3]);
		    		_html = _html.replace("${layer}","0");
		    		_html = _html.replace("${menuName}",_subItem[1]);
		    	_menuBarHtml = _menuBarHtml + _html;	    	
				}
				
				$("#myMenu").html(_menuBarHtml);
        var me = this;
				//绑定事件
				$("#myMenu").delegate(".hor-first-menuitem","mouseenter",function(){
					var code = $(this).attr("code");
					var menu = _menuMap.get(code);
					if(menu.children != undefined){						
						me.generateThecondMenu(menu,$(this));
					}        
					if(_hideThecondMenuTime != null){
							clearTimeout(_hideThecondMenuTime);
					}
				});
				
				
				
				$("#myMenu").delegate(".hor-first-menuitem","click",function(){
					var code = $(this).attr("code");
					  	var menu = _menuMap.get(code);
					   // if(menu.children == undefined){								  
					  		var code = $(this).attr("code");
						    var menu = _menuMap.get(code);
						    callMultitask(menu,"menu2");
					  //	}					  	
				});
				
				$("#myMenu").delegate(".hor-first-menuitem","mouseleave",function(){
					var code = $(this).attr("code");
				  _hideThecondMenuTime = setTimeout(function(){
							me.hideThecondMenu(code);
					},300)
				});
			}
			
			this.generateThecondMenu = function(menu,parentElement){ 
				var me  = this;
				 var left = parentElement.offset().left , top = parentElement.offset().top + 50;
				 var  triangleTop = parentElement.offset().top + 40, triganelLeft = left + 65;
			//	 var triangelHtml = "<div  id='triangelUp'  class='triangle-up' style='left:"+triganelLeft+"px;top:"+triangleTop+"px' ></div>";
				 var thecondContainerHtml = "<div id='thecondMenu_container' class=' hor-thecond-menuitem-container' x-placement='bottom' style='display:none;z-index:10000;overflow:hidden;left:"+left+"px;top:"+top+"px;height:"+windowHeight+"px' > ";
				 var thecondMenuItemHtml = "";
				 for(let i=0;i<menu.children.length;i++){
					var child = _menuMap.get(menu.children[i]);
					var _html = "";
					if (child.children == undefined) {
						_html = thecondHtml.replace("${menuCode}",child.code);
					} else {
						_html = thecondHasChildrenHtml.replace("${menuCode}",child.code);
					}
					
		    		_html = _html.replace("${layer}","1");
		    		_html = _html.replace("${index}",i);
					_html = _html.replace("${menuName}",child.name);
					thecondMenuItemHtml = thecondMenuItemHtml + _html;
					thecondContainerHtml = thecondContainerHtml + _html;	    	
				 }

				 thecondContainerHtml = thecondContainerHtml +"  </div>";
				 var thecondMenuContainer = $("#thecondMenu_container")
				 if(thecondMenuContainer.length > 0){
                 
					me.hideThirdMenu(); //消失第三级菜单 
                    
					thecondMenuContainer.html(thecondMenuItemHtml);
					thecondMenuContainer.css({height:0});
					thecondMenuContainer.animate({height:windowHeight2},animateTime);
					thecondMenuContainer.css({"left":left+"px","top":top+"px"});
					var triangelDom = 	$("#triangelUp");
					triangelDom.css({"left":triganelLeft+"px"});
					thecondMenuContainer.show();
					
					triangelDom.show();
				 }else{
					 $("body").append(thecondContainerHtml);
					// $("body").append(triangelHtml);
					 $("body").append("<div id='menu2-threemenu-container' style='display:none;height:"+windowHeight+"px'  class='menu2-threemenu-container'>"+
														//	 "<div class='searchmenu-area'>"+
														//	 " <div class='expand-search-menu' id='expandSearchMenu'> "+
														//	 "			<div id='expandSearchMenu_selecttable'>"+
														//	 "					<div >"+
														//	 "					<input id='expandSearchMenu_selectinput' autocomplete='off' placeholder='搜索' type='text' title='输入功能名称进行功能定位' class='expand-selecttext' "+
														//	 "				name='expandSearchMenu' value='' > "+
														//	 "			</div> "+
														//	 "			<div id='expandSearchMenu_selectbutton' class='expand-search-button'> </div> "+
														//	 "			</div>	"+					 							 
														//	 "		<div id='expandSearchMenu_selecthtml' class='selectcontent' style='z-index:9999;display:none;'></div> "+
														//	 "	</div> "+
														//	 "</div> "+
															"<div id='menu2-threemenu'> </div>"+
															"</div>" 
														);

						thecondMenuContainer = $("#thecondMenu_container");
						triangelDom = 	$("#triangelUp");
												
						thecondMenuContainer.delegate(".hor-thecond-menuitem","mouseenter",function(){
							 var index = $(this).attr("index");
							 if(index == 0){
							 	$("#triangelUp").css("borderBottom","10px solid #F1F3F4")
							 }else{
							 	$("#triangelUp").css("borderBottom","10px solid rgba(0, 0, 0, 0.4)")
							 }
							 var code = $(this).attr("code");
						  	 var menu = _menuMap.get(code);
						  	 
						  	  if(lastSelectedMenuDom != undefined){
								lastSelectedMenuDom.removeClass("hor-thecond-menuitem-hover");
							  }
							  lastSelectedMenuDom = $(this);
							  $(this).addClass("hor-thecond-menuitem-hover");
							  				
						     if(menu.children != undefined){ //若没有三四级菜单，就不出现三四级菜单的外框	
						     	 me.generateThirdFourMenu(this);
						     } else {
						     	$("#menu2-threemenu-container").hide();
						     }
							  
						});

					//事件只能绑定一次
					$("#menu2-threemenu-container").bind("mouseenter",function(){
						 clearTimeout(_hideThecondMenuTime);
						 clearTimeout(_hoverThecondMenuTime);
					 })
					 $("#menu2-threemenu-container").bind("mouseleave",function(){
						 _hideThecondMenuTime = setTimeout(function(){
									me.hideThecondMenu()},
						 300); //消失二三级菜单 
					 })


						thecondMenuContainer.mouseenter(function () { 
							clearTimeout(_hideThecondMenuTime);
					  });
					

						thecondMenuContainer.mouseleave(function () { 
							_hideThecondMenuTime = setTimeout(function(){
									me.hideThecondMenu();
							},100)
						
						});

						thecondMenuContainer.delegate(".hor-thecond-menuitem","mouseleave",function () { 
								var meDom = this;
								_hoverThecondMenuTime = setTimeout(function(){
									$(meDom).removeClass("hor-thecond-menuitem-hover");
							},100)
						});

					  //绑定事件
						triangelDom.mouseenter(function () { 
							clearTimeout(_hideThecondMenuTime);
						});
						triangelDom.mouseleave(function () { 
							_hideThecondMenuTime = setTimeout(function(){
									me.hideThecondMenu();
							},300)
						});
						$("#expandSearchMenu").editselect2('expandSearchMenu','25',"",'200','400');
						thecondMenuContainer.show();
						thecondMenuContainer.animate({height:windowHeight2},animateTime);

				 }
				 
				 thecondMenuContainer.find(".hor-thecond-menuitem").each(function(index) { //默认出第二级菜单的第一个的三四级菜单
				 	 //若有三级菜单，就出现三四级菜单
					  if(index == 0){
					  	var code = $(this).attr("code");
					  	var menu = _menuMap.get(code);
					  	if(lastSelectedMenuDom != undefined){
							lastSelectedMenuDom.removeClass("hor-thecond-menuitem-hover");
						}
						lastSelectedMenuDom = $(this);
						$(this).addClass("hor-thecond-menuitem-hover");
						$("#triangelUp").css("borderBottom","10px solid white")	  
					    if(menu.children != undefined){								  
					  		me.generateThirdFourMenu(this);
					  	   
					  	   return;
					  	}					  	
					  }
				 });
				 
				 thecondMenuContainer.find(".hor-thecond-menuitem").bind("click",function(){ //没有三四级菜单，第二级菜单需要增加打开多任务功能
				 	 //若有三级菜单，就出现三四级菜单
					 
					  	var code = $(this).attr("code");
					  	var menu = _menuMap.get(code);
					   // if(menu.children == undefined){								  
					  		var code = $(this).attr("code");
						    var menu = _menuMap.get(code);
						    callMultitask(menu,"menu2");
					  //	}					  	
				 });
				 
				/* $("#thecondMenu_container").mCustomScrollbar({
					scrollButtons:{
						enable:true
					}
				});*/
				 
				  setTimeout(function(){
			          $("#thecondMenu_container").niceScroll(
			            { cursorcolor: "#C1C1C1",
			            autohidemode:false}
			          );
			      },0)
				 				 			
			}
            this.generateThirdFourMenu = function(thecondMenu){
            	/* if(lastSelectedMenuDom != undefined){
						lastSelectedMenuDom.removeClass("hor-thecond-menuitem-hover");
					}
				  lastSelectedMenuDom = $(thecondMenu);
				$(thecondMenu).addClass("hor-thecond-menuitem-hover");*/
				
				//产生第三级菜单 

				//menu2-threemenu-container
				var code = $(thecondMenu).attr("code");
				var menu = _menuMap.get(code);
				//var left = $(thecondMenu).offset().left + 180
				//这里还要看三四级菜单能不能展开，不行的话，还得放到左侧
				var left = this.getThirdMenuLeftValue($(thecondMenu));
				var threeMenuHtml = getFlatThirdFourHtml(menu);
				$("#menu2-threemenu-container").css({"display":"block","left":left+"px"});
				$("#menu2-threemenu-container").animate({height:windowHeight2},animateTime);
				$("#menu2-threemenu").html(threeMenuHtml);
				setMenu2ThreeFourLevelLayout();
				//绑定单击事件
				$(".four-level-item",$("#menu2-threemenu")).bind("click",function(){
						var code = $(this).attr("code");
						var menu = _menuMap.get(code);
						callMultitask(menu,"menu2");
				});
				
				$(".third-level-title",$("#menu2-threemenu")).bind("click",function(){
					if($(this).attr("hasChildren") == "false"){
						var code = $(this).attr("code");
						var menu = _menuMap.get(code);
						callMultitask(menu,"menu2");
					}
				});
				
				//hor-first-menuitem
				//hor-thecond-menuitem
            }
			this.hideThecondMenu = function(){
				
				    $("#thecondMenu_container").css({"height":"0"});
					$("#thecondMenu_container").hide();
					$("#triangelUp").hide();
					$("#menu2-threemenu-container").css({"display":"none"}); //第三级菜单消失
					$("#positionHelperIframeexpandSearchMenu_selectinput").css({"display":"none"});
					$("#positionHelperexpandSearchMenu_selectinput").css({"display":"none"});
			}
			this.getThirdMenuLeftValue = function(target){
				var left = target.offset().left + thecondMenuWidth;
				var screenWidth = $(window).width();
				if(left + thirdMenuWidth > screenWidth){ //右侧不能放开了
					left = left-thecondMenuWidth-thirdMenuWidth;
				}
				
				return left;
				
			}
			this.hideThirdMenu = function(){
				$("#menu2-threemenu-container").css({"height":"0"});
				$("#menu2-threemenu-container").css({"display":"none"}); //第三级菜单消失
				$("#positionHelperIframeexpandSearchMenu_selectinput").css({"display":"none"});
				$("#positionHelperexpandSearchMenu_selectinput").css({"display":"none"});
			}
	  	
	  	this.init = function(){
	  		this.generateFirstMenu();
			}
			this.getHideThecondMenuTime = function(){
				return _hideThecondMenuTime;
			}
	  	this.init();
	  }
