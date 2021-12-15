function setMenuPosition(widget, caller,id,direction,parentWidget) { 
		var el = widget;
		el[0].style.position = 'absolute';
		var browserTypes = new BrowserTypes();
		var referrer = caller;
		var  referoffsetLeft=0;
		var  referoffsetTop=0;
		if(browserTypes.Sys.chrome || browserTypes.Sys.firefox){	
			referoffsetLeft=referrer.offset().left;
			referoffsetTop=referrer.offset().top;
		}else{
			referoffsetLeft=referrer.offset().left;
			referoffsetTop=referrer.offset().top;
			
		 }
		var diffWidth = 0;//记录和父的left差
		if(direction == "horizontal"){
			diffWidth = parentWidget.getTotalWidth();
		}
		var dims = {
			
			refX: referoffsetLeft+diffWidth,
			refY: referoffsetTop,
			refW: referrer.getTotalWidth(),
			refH: referrer.getTotalHeight()
		};	
		if(direction == undefined){
			dims.refY = dims.refY + 25;
		}else{
			dims.refY = dims.refY -4;
		}
		var subdims = {
			refW: el.getTotalWidth(),
			refH: el.getTotalHeight()
		}
		if(direction == "funclocator"){
			dims.refY = dims.refY + 25;
			dims.refX = dims.refX - 24;
			dims.refY = dims.refY +5;
			subdims.refW = subdims.refW + 62;
			el.width(subdims.refW);
		}
		dims.refY = dims.refY + 10;		

		var xVal, yVal, helper ,helperIframe;
		if($("#positionHelper"+id).length>0){
			var  helperleft=0;
	     	helperleft = dims.refX + 5;
			$("#positionHelper"+id).css({ display:'block',position: 'absolute', left: helperleft, top: dims.refY, width: subdims.refW, height: subdims.refH ,zIndex:20000});
			$("#positionHelperIframe"+id).css({ display:'block',background:"transparent",position: 'absolute', left: helperleft, top: dims.refY, width: subdims.refW, height: subdims.refH,zIndex:19999 });
		}else{
		   dims.refX = dims.refX + 5;
		   helperIframe = $('<iframe    class="positionHelper" ></iframe>');
		   helperIframe.css({ position: 'absolute',background:'transparent', border:'0px',left: dims.refX, top: dims.refY, width: subdims.refW, height: subdims.refH,zIndex:19999 });
		   helperIframe.attr("id","positionHelperIframe"+id);
		   helperIframe.attr("name","positionHelperIframe"+id);
		   helperIframe.appendTo("body");
		   el.appendTo("body") ;
		   helper=$('<div    class="positionHelper" ></div>');
		   helper.css({ position: 'absolute', left: dims.refX, top: dims.refY, width: subdims.refW, height: subdims.refH,zIndex:20000 });
		   helper.attr("id","positionHelper"+id);
		   helper.attr("name","positionHelper"+id);
		  
		   el.wrap(helper);
		}
	 	xVal = 0; 		
		yVal = dims.refH;
		//el.css({ bottom: 'auto', top: yVal });
		  el.css({ bottom: 'auto', top: 0 });
		
		if (!fitVertical(caller,el)) {
			//判断上面是不是也能显示全下拉，显示不全，修改下拉的显示高度
			
			if(fitverticalbuttom(caller,el)){ 
				var topVal = $(caller).offset().top;
					var  elHeight=getWindowHeight() + getScrollTop()-24-$(caller).offset().top;
					el.css("height",elHeight);
					el.css({ bottom: 'auto', top: yVal });
			}else{
				/*if(isOverload != undefined){
					el.css({ top: 'auto', bottom: -referrer.getTotalHeight() });
				}else{
					
					el.css({ top: 'auto', bottom: yVal });
				}*/
			}
			
		}
		
		el.css({ right: 'auto', left: xVal });
		if (!fitHorizontal(caller,el)) {
			el.css({ left: 'auto', right: xVal });
		}
}


(function($){
   var options = [];
   var urls = [];
   var name = "" ;
   var size = "" ;
   var defaulttext = "" ;
   var wwidth = 0 ;
   var hheight = 0 ;
   var readonly = "" ;
   var selectedurl = "" ;
   var newvalue = "" ,count = 0, selectItemPosition = 0,preSelectItemPosition = 0,flag = false;
   $.fn.extend({
       editselect:function(pname,size,defaulttext,pwidth,pheight,readonly){
          wwidth = pwidth ;
          hheight =  pheight ;
          name = pname ;
          var selectinput = "#" + name + "_selectinput" ;
          var selectbutton = "#" + name + "_selectbutton" ;
          var selecthtml = "#" + name + "_selecthtml" ;
          
         
             //隐藏导航栏其它的浮层
          var config = {},otherComponent = [];
		　config.parentId = "bannerContent"
		// 　var common = new commonFunc("commonFunc",config);
		// 　var personinfo = new personInfo("personInfo",config);
		// 　var menubar = new menuBanner("menu",config);
		
          $(selectinput)
          .bind("focus",function(){
             this.title = "" ;
          })
          .bind("blur",function(){
             this.title = "输入功能名称进行功能定位" ;
          })
          .bind("click",function(){
      //     	common.hide();
			// personinfo.hide();
			// menubar.hide();
			if(this.value !=""){
				$.fn.changeOptions();
			}
          }) .bind("keydown",function(event){
          		  if(event.keyCode == 38 || event.keyCode == 40){//
          		  	    var scrollTop = parseInt($(selecthtml).scrollTop());
		          	  	if(event.keyCode == 38){
		          	  		if(selectItemPosition - 1>=0){
		          	  			selectItemPosition = selectItemPosition - 1;
		          	  			if(selectItemPosition >4){
		          	  				scrollTop = scrollTop - 24;
		          	  			}
		          	  			flag = true;
		          	  		}
		          	  	}else if(event.keyCode == 40){
		          	  		if(selectItemPosition +1 < count){
		          	  			selectItemPosition = selectItemPosition + 1;
		          	  			if(selectItemPosition >4){
		          	  				scrollTop = scrollTop + 24;
		          	  			}
		          	  			flag = true;
		          	  		}
		          	  	}
		          	  	if(flag){
		          	  		$(selecthtml).scrollTop(scrollTop);
			          	  	$("#funclocator_"+preSelectItemPosition).removeClass("selectitem");
			          	  	$("#funclocator_"+selectItemPosition).addClass("selectitem");
			          	  	$("#funclocator_"+selectItemPosition).css("color","white");
			          	  	$("#funclocator_"+preSelectItemPosition).css("color","black");
			          	  	preSelectItemPosition = selectItemPosition;  
			          	  	flag = false;
		          	  	}
          	     }else if(event.keyCode == 13){
          	     	 var selectObj = $("#funclocator_"+selectItemPosition)
          	     	 newvalue = $.trim(selectObj.text());
                     selectedurl = urls[parseInt(selectObj.attr("url"))];
                      var code = selectObj.attr('code');
	          	  	 
                     if(selectedurl == undefined){
                    	 return;
                     }
	          	  	if(selectedurl.indexOf("##")>0){
	      	    	   var selectUrl=selectedurl.split("##")[0];
	                   var selectCode=selectedurl.split("##")[1];
	                   if(selectUrl.indexOf("?")>0){
	                   	 selectUrl = selectUrl+"&appCode="+selectCode;
	                   }else{
	                   	 selectUrl = selectUrl+"?appCode="+selectCode;
	                   }
	                   
	                   
	                  
	                   
	                   var appcontext = ""
	 		     		if(selectUrl.indexOf('appcontext') != -1){
	 		     			var address = selectUrl.split("?")[1];
	 		     			var appcontextArr = address.split("&");
	 		     			
	 		     			for(var i=0;i<appcontextArr.length;i++){
	 		     				if(appcontextArr[i].indexOf("appcontext") != -1){
	 		     					appcontext = appcontextArr[i].split("=")[1];
	 		     					if(appcontext.indexOf("\"") != -1 || appcontext.indexOf("'") != -1){
	 		     						appcontext = appcontext.substring(1,appcontext.length - 1);
	 		     					}
	 		     				}
	 		     			}
	 		     		}
	                   if(appcontext != ""){
												MultitaskPanelManager.addMenuTab(code,newvalue,selectUrl,true,appcontext);
															}else{
												MultitaskPanelManager.addMenuTab(code,newvalue,selectUrl);	
											}

											defaultMenu2.hideThecondMenu();
		      	     }
	          	  	 
	  	             $("#" + name + "_selectinput").val("") ;
	  	             $("#"+name.split("_")[0]).removeClass("banner-mouseover");
	  	             if($("#searchInfor").length>0){
        	           $("#searchInfor").css("top","9998px");
      	   	           $("#searchInfor").css("display","none");
        	         }
	  	            $("#positionHelper"+name+"_selectinput").css("display","none");
      	  		    $("#positionHelperIframe"+name+"_selectinput").css("display","none");
	  	           
          	  }
          })
          .bind("keyup",function(event){
						 
          	  if((event.keyCode >=65 && event.keyCode <=90) || event.keyCode == 8 || (event.keyCode >=48 && event.keyCode <=57) || event.keyCode == 32 || event.keyCode == 229){
								
								$.fn.changeOptions();
          	  }
          }); 
          $(selectbutton).click(function(){
             if(selectedurl!=""){
             	debugger
                if(selectedurl.indexOf("##")>0){
                   var selectUrl=selectedurl.split("##")[0];
                   var selectCode=selectedurl.split("##")[1];
                   if(selectUrl.indexOf("?")>0){
                   	 selectUrl = selectUrl+"&appCode="+selectCode;
                   }else{
                   	 selectUrl = selectUrl+"?appCode="+selectCode;
                   }
                   
                   var appcontext = ""
		     		if(selectUrl.indexOf('appcontext') != -1){
		     			var address = selectUrl.split("?")[1];
		     			var appcontextArr = address.split("&");
		     			
		     			for(var i=0;i<appcontextArr.length;i++){
		     				if(appcontextArr[i].indexOf("appcontext") != -1){
		     					appcontext = appcontextArr[i].split("=")[1];
		     					if(appcontext.indexOf("\"") != -1 || appcontext.indexOf("'") != -1){
		     						appcontext = appcontext.substring(1,appcontext.length - 1);
		     					}
		     				}
		     			}
		     		}
                   
                   if(appcontext != ""){
											MultitaskPanelManager.addMenuTab(selectCode,newvalue,selectUrl,true,appcontext);
														}else{
											MultitaskPanelManager.addMenuTab(selectCode,newvalue,selectUrl);	
										}
										defaultMenu2.hideThecondMenu();
                   $(selectinput).val("") ;
                   selectedurl = ""; 
                }else{
									 MultitaskPanelManager.addMenuTab("",newvalue,selectedurl);
									 defaultMenu2.hideThecondMenu();
                   $(selectinput).val("") ;
                   selectedurl = ""; 
                }
             }
             
          }).mouseover(function(){
              $(selectbutton).attr("src",$$pageContextPath+"template/haiyisoft/funclocator/images/arrow_skip.png");
          }).mouseout(function(){
              $(selectbutton).attr("src",$$pageContextPath+"template/haiyisoft/funclocator/images/arrow_skip.png");
          });
          
          $(document).bind("mousedown",function(){
             if($(selecthtml)!=null && $("#positionHelper"+name+"_selectinput").css("display")=="block"){
                 var x1 = $(selecthtml)[0].offsetLeft;
                 var y1 = $(selecthtml)[0].offsetTop-30;
                 var x2 = x1 + $(selecthtml)[0].offsetWidth ;
                 var y2 = y1 + $(selecthtml)[0].offsetHeight ;
                 var pparent = $(selecthtml)[0].offsetParent ;
                 while(pparent){
                    x1+=pparent.offsetLeft;
                    x2+=pparent.offsetLeft;
                    y1+=pparent.offsetTop;
                    y2+=pparent.offsetTop;
                    pparent=pparent.offsetParent ;
                 }
                 var mx = event.x + document.body.scrollLeft;
                 var my = event.y + document.body.scrollTop;
                 if(mx<x1||my<y1||mx>x2||my>y2){
                   $("#positionHelper"+name+"_selectinput").css("display","none");
      	  		   $("#positionHelperIframe"+name+"_selectinput").css("display","none");
                     $(selectinput).val("") ;
                 }
             }
          });
       },
       changeOptions:function(){
				
          var selectinput = "#" + name + "_selectinput" ;
              newvalue = $(selectinput).val();
			  if(newvalue==""||newvalue==null) return ;
					
              selectedurl = "" ;
         
					$.ajax({
						type:'POST',
						url: 'menu/getFilterMenu',
						data: {rightFilter:true,rootVisible:false,rootCode:'0',"filter":newvalue},
						async : false,
						 success : function(data) {
							options = [];
							url = [];
							for(var i=0;i<data.length;i++){
								  var obj = {};
									obj.name = data[i].name;
									obj.code = data[i].code; 
									obj.entity = data[i].entity;   
									$.fn.add(obj);
									$.fn.addUrl(obj.entity+"##"+obj.code);
							}
							$.fn.showdiv();
						},
						error : function() {
						}
					});

       },
       add:function(text){
           options.push(text);
       },
       addUrl:function(url){
           urls.push(url);
       },
       showdiv:function(){
       	   count = 0;
       	   selectItemPosition = 0;
           var selecthtml = "#" + name + "_selecthtml" ; 
           var selecttable = "#" + name + "_selecttable" ;
           //设置弹出div的位置
           var p = $(selecttable).position();//获得相对于父元素的位置
           var vtop = p.top ;
           var vleft = p.left ;
           var browserTypes = new BrowserTypes();
           if(browserTypes.Sys.chrome || browserTypes.Sys.firefox){//chrome浏览器
        	   $(selecthtml).css("top",p.top+17);
        	   $(selecthtml).css("left",vleft) ;
               $(selecthtml).width($("#"+name+"_selectinput").width());
           }else{
        	   $(selecthtml).css("top",p.top+17); 
        	   $(selecthtml).css("left",vleft) ;
        	   //设置div的宽度和高度,加2是要考虑到div是有border的
               $(selecthtml).width($("#"+name+"_selectinput").width()+2);
           }
           
           $(selecthtml).height(hheight) ;
           $(selecthtml).attr("scrollTop",0);
           
           
           var vHTML='<table id="'+ name +'_htmltable" cellspacing="0" cellpadding="2" bgcolor="#f7f7f7" border="0" class="selecttable" width=100%>' ;
            $(options).each(function(i,obj){
           	   var value = obj.name;
           	   count++;
               vHTML+='<tr url="'+i+'" id="funclocator_' + i + '" code="'+obj.code+'" align="left" width="100%" height="30px"  ><td nowrap width="100%" style="padding-left:10px">'+value+'</td></tr>';
           });
           vHTML+="</table>" ;
           $(selecthtml)[0].innerHTML =  vHTML ;
           var nameMenu = null;
           $("#" + name + "_htmltable").delegate("tr","mouseover",function(){
     
        	   if(typeof(_searchTimeOut) != 'undefined'){
        	     clearTimeout(_searchTimeOut);
						 }
						 if(typeof(defaultMenu2) != 'undefined'){
								clearTimeout(defaultMenu2.getHideThecondMenuTime());
						 }
        	   
        	   $(this).addClass("selectitem");
           	 	$(this).css("color","white");
           	 	this.style.cursor = "pointer";
           	 	nameMenu = name.split("_");
           	 	if(nameMenu.length > 1){
           	 		if(!$("#"+nameMenu[0]).hasClass("banner-mouseover")){
           	 			$("#"+nameMenu[0]).addClass("banner-mouseover");
           	 		}
           	 	}
           	}     
           );
             $("#" + name + "_htmltable").delegate("tr","mouseout",function(){
             	   $(this).removeClass("selectitem");
             	   $(this).css("color","black");
                 }
              );
            
           $("#" + name + "_htmltable tr").each(function(){
        	   $(this).mousedown(function(){
        		   $("#" + name + "_selectinput").val($.trim($(this).text()));
                   newvalue = $.trim($(this).text());
                   selectedurl = urls[parseInt($(this).attr("url"))];
                    $("#positionHelper"+name+"_selectinput").css("display","none");
      	            $("#positionHelperIframe"+name+"_selectinput").css("display","none");
      	            
	      	       if(selectedurl.indexOf("##")>0){
	      	    	   var selectUrl=selectedurl.split("##")[0];
	                   var selectCode=selectedurl.split("##")[1];
	                   if(selectUrl.indexOf("?")>0){
	                   	 selectUrl = selectUrl+"&appCode="+selectCode;
	                   }else{
	                   	 selectUrl = selectUrl+"?appCode="+selectCode;
	                   }
	                   
	                   var appcontext = ""
	 		     		if(selectUrl.indexOf('appcontext') != -1){
	 		     			var address = selectUrl.split("?")[1];
	 		     			var appcontextArr = address.split("&");
	 		     			
	 		     			for(var i=0;i<appcontextArr.length;i++){
	 		     				if(appcontextArr[i].indexOf("appcontext") != -1){
	 		     					appcontext = appcontextArr[i].split("=")[1];
	 		     					if(appcontext.indexOf("\"") != -1 || appcontext.indexOf("'") != -1){
	 		     						appcontext = appcontext.substring(1,appcontext.length - 1);
	 		     					}
	 		     				}
	 		     			}
	 		     		}
	                   if(appcontext != ""){
												MultitaskPanelManager.addMenuTab($(this).attr('code'),newvalue,selectUrl,true,appcontext);
											}else{
												MultitaskPanelManager.addMenuTab($(this).attr('code'),newvalue,selectUrl);	
											}
											
											if (typeof defaultMenu2 !== 'undefined' ) {
												defaultMenu2.hideThecondMenu();
											}

											
											
	      	       }
      	            
      	              $("#" + name + "_selectinput").val("") ;
        	         if($("#searchInfor").length>0){
        	           $("#searchInfor").css("top","9998px");
      	   	           $("#searchInfor").css("display","none");
      	   	          
        	          }
      	              
      	              $("#"+name.split("_")[0]).removeClass("banner-mouseover");
        	   });
           });
           $(selecthtml).css("display","block");
           setMenuPosition($("#"+name+"_selecthtml"),$("#"+name+"_selectinput"),name+"_selectinput","funclocator");
           $("#positionHelper"+name+"_selectinput").css("display","block");
      	   $("#positionHelperIframe"+name+"_selectinput").css("display","block");
      	   
      	   if($("#" + name + "_htmltable tr").length > 0){
             $("#" + name + "_htmltable tr:eq(0)").addClass("selectitem");
             $("#" + name + "_htmltable tr:eq(0)").css("color","white")
             selectItemPosition = 0;
           }
       }
   });
   
})(jQuery);



(function($){
 var options = [];
 var urls = [];
 var name = "" ;
 var size = "" ;
 var defaulttext = "" ;
 var wwidth = 0 ;
 var hheight = 0 ;
 var readonly = "" ;
 var selectedurl = "" ;
 var newvalue = "" ,count = 0, selectItemPosition = 0,preSelectItemPosition = 0,flag = false;
 $.fn.extend({
		 editselect2:function(pname,size,defaulttext,pwidth,pheight,readonly){
				wwidth = pwidth ;
				hheight =  pheight ;
				name = pname ;
				var selectinput = "#" + name + "_selectinput" ;
				var selectbutton = "#" + name + "_selectbutton" ;
				var selecthtml = "#" + name + "_selecthtml" ;
				
			 
					 //隐藏导航栏其它的浮层
				var config = {},otherComponent = [];
	　config.parentId = "bannerContent"
	// 　var common = new commonFunc("commonFunc",config);
	// 　var personinfo = new personInfo("personInfo",config);
	// 　var menubar = new menuBanner("menu",config);
	
				$(selectinput)
				.bind("focus",function(){
					 this.title = "" ;
				})
				.bind("blur",function(){
					 this.title = "输入功能名称进行功能定位" ;
				})
				.bind("click",function(){
		//     	common.hide();
		// personinfo.hide();
		// menubar.hide();
		if(this.value !=""){
			$.fn.changeOptions2();
		}
				}) .bind("keydown",function(event){
							if(event.keyCode == 38 || event.keyCode == 40){//
										var scrollTop = parseInt($(selecthtml).scrollTop());
									if(event.keyCode == 38){
										if(selectItemPosition - 1>=0){
											selectItemPosition = selectItemPosition - 1;
											if(selectItemPosition >4){
												scrollTop = scrollTop - 24;
											}
											flag = true;
										}
									}else if(event.keyCode == 40){
										if(selectItemPosition +1 < count){
											selectItemPosition = selectItemPosition + 1;
											if(selectItemPosition >4){
												scrollTop = scrollTop + 24;
											}
											flag = true;
										}
									}
									if(flag){
										$(selecthtml).scrollTop(scrollTop);
										$("#funclocator_"+preSelectItemPosition).removeClass("selectitem");
										$("#funclocator_"+selectItemPosition).addClass("selectitem");
										$("#funclocator_"+selectItemPosition).css("color","white");
										$("#funclocator_"+preSelectItemPosition).css("color","black");
										preSelectItemPosition = selectItemPosition;  
										flag = false;
									}
							 }else if(event.keyCode == 13){
									var selectObj = $("#funclocator_"+selectItemPosition)
									newvalue = $.trim(selectObj.text());
									 selectedurl = urls[parseInt(selectObj.attr("url"))];
										var code = selectObj.attr('code');
								 
									 if(selectedurl == undefined){
										 return;
									 }
								if(selectedurl.indexOf("##")>0){
								 var selectUrl=selectedurl.split("##")[0];
									 var selectCode=selectedurl.split("##")[1];
									 if(selectUrl.indexOf("?")>0){
											selectUrl = selectUrl+"&appCode="+selectCode;
									 }else{
											selectUrl = selectUrl+"?appCode="+selectCode;
									 }
									 
									 
									
									 
									 var appcontext = ""
							if(selectUrl.indexOf('appcontext') != -1){
								var address = selectUrl.split("?")[1];
								var appcontextArr = address.split("&");
								
								for(var i=0;i<appcontextArr.length;i++){
									if(appcontextArr[i].indexOf("appcontext") != -1){
										appcontext = appcontextArr[i].split("=")[1];
										if(appcontext.indexOf("\"") != -1 || appcontext.indexOf("'") != -1){
											appcontext = appcontext.substring(1,appcontext.length - 1);
										}
									}
								}
							}
									 if(appcontext != ""){
											MultitaskPanelManager.addMenuTab(code,newvalue,selectUrl,true,appcontext);
														}else{
											MultitaskPanelManager.addMenuTab(code,newvalue,selectUrl);	
										}

										defaultMenu2.hideThecondMenu();
							 }
								 
								 $("#" + name + "_selectinput").val("") ;
								 $("#"+name.split("_")[0]).removeClass("banner-mouseover");
								 if($("#searchInfor").length>0){
									 $("#searchInfor").css("top","9998px");
											$("#searchInfor").css("display","none");
								 }
								$("#positionHelper"+name+"_selectinput").css("display","none");
								$("#positionHelperIframe"+name+"_selectinput").css("display","none");
							 
						}
				})
				.bind("keyup",function(event){
						if((event.keyCode >=65 && event.keyCode <=90) || event.keyCode == 8 || (event.keyCode >=48 && event.keyCode <=57) || event.keyCode == 32 || event.keyCode == 229){
							$.fn.changeOptions2();
						}
				}); 
				$(selectbutton).click(function(){
					 if(selectedurl!=""){
							if(selectedurl.indexOf("##")>0){
								 var selectUrl=selectedurl.split("##")[0];
								 var selectCode=selectedurl.split("##")[1];
								 if(selectUrl.indexOf("?")>0){
										selectUrl = selectUrl+"&appCode="+selectCode;
								 }else{
										selectUrl = selectUrl+"?appCode="+selectCode;
								 }
								 
								 var appcontext = ""
					 if(selectUrl.indexOf('appcontext') != -1){
						 var address = selectUrl.split("?")[1];
						 var appcontextArr = address.split("&");
						 
						 for(var i=0;i<appcontextArr.length;i++){
							 if(appcontextArr[i].indexOf("appcontext") != -1){
								 appcontext = appcontextArr[i].split("=")[1];
								 if(appcontext.indexOf("\"") != -1 || appcontext.indexOf("'") != -1){
									 appcontext = appcontext.substring(1,appcontext.length - 1);
								 }
							 }
						 }
					 }
								 
								 if(appcontext != ""){
										MultitaskPanelManager.addMenuTab(selectCode,newvalue,selectUrl,true,appcontext);
													}else{
										MultitaskPanelManager.addMenuTab(selectCode,newvalue,selectUrl);	
									}
									defaultMenu2.hideThecondMenu();
								 $(selectinput).val("") ;
								 selectedurl = ""; 
							}else{
								 MultitaskPanelManager.addMenuTab("",newvalue,selectedurl);
								 defaultMenu2.hideThecondMenu();
								 $(selectinput).val("") ;
								 selectedurl = ""; 
							}
					 }
					 
				}).mouseover(function(){
						$(selectbutton).attr("src",$$pageContextPath+"template/haiyisoft/funclocator/images/arrow_skip.png");
				}).mouseout(function(){
						$(selectbutton).attr("src",$$pageContextPath+"template/haiyisoft/funclocator/images/arrow_skip.png");
				});
				
				$(document).bind("mousedown",function(){
					 if($(selecthtml)!=null && $("#positionHelper"+name+"_selectinput").css("display")=="block"){
							 var x1 = $(selecthtml)[0].offsetLeft;
							 var y1 = $(selecthtml)[0].offsetTop-30;
							 var x2 = x1 + $(selecthtml)[0].offsetWidth ;
							 var y2 = y1 + $(selecthtml)[0].offsetHeight ;
							 var pparent = $(selecthtml)[0].offsetParent ;
							 while(pparent){
									x1+=pparent.offsetLeft;
									x2+=pparent.offsetLeft;
									y1+=pparent.offsetTop;
									y2+=pparent.offsetTop;
									pparent=pparent.offsetParent ;
							 }
							 var mx = event.x + document.body.scrollLeft;
							 var my = event.y + document.body.scrollTop;
							 if(mx<x1||my<y1||mx>x2||my>y2){
								 $("#positionHelper"+name+"_selectinput").css("display","none");
							 $("#positionHelperIframe"+name+"_selectinput").css("display","none");
									 $(selectinput).val("") ;
							 }
					 }
				});
		 },
		 changeOptions2:function(){
			
				var selectinput = "#" + name + "_selectinput" ;
				newvalue = $(selectinput).val();
				if(newvalue==""||newvalue==null) return ;
				
				selectedurl = "" ;
			 
				$.ajax({
					type:'POST',
					url: 'getFilterMenu',
					data: {rightFilter:true,rootVisible:false,rootCode:'0',"filter":newvalue},
					async : false,
					 success : function(data) {
					
						options = [];
						url = [];
						for(var i=0;i<data.length;i++){
								var obj = {};
								obj.name = data[i].name;
								obj.code = data[i].code;    
								$.fn.add2(obj);
								$.fn.addUrl2(obj.entity+"##"+obj.code);
						}
						$.fn.showdiv2();
					},
					error : function() {
					}
				});

		 },
		 add2:function(text){
				 options.push(text);
		 },
		 addUrl2:function(url){
				 urls.push(url);
		 },
		 showdiv2:function(){
					count = 0;
					selectItemPosition = 0;
				 var selecthtml = "#" + name + "_selecthtml" ; 
				 var selecttable = "#" + name + "_selecttable" ;
				 //设置弹出div的位置
				 var p = $(selecttable).position();//获得相对于父元素的位置
				 var vtop = p.top ;
				 var vleft = p.left ;
				 var browserTypes = new BrowserTypes();
				 if(browserTypes.Sys.chrome || browserTypes.Sys.firefox){//chrome浏览器
					 $(selecthtml).css("top",p.top+17);
					 $(selecthtml).css("left",vleft) ;
						 $(selecthtml).width($("#"+name+"_selectinput").width());
				 }else{
					 $(selecthtml).css("top",p.top+17); 
					 $(selecthtml).css("left",vleft) ;
					 //设置div的宽度和高度,加2是要考虑到div是有border的
						 $(selecthtml).width($("#"+name+"_selectinput").width()+2);
				 }
				 
				 $(selecthtml).height(hheight) ;
				 $(selecthtml).attr("scrollTop",0);
				 
				 
				 var vHTML='<table id="'+ name +'_htmltable" cellspacing="0" cellpadding="2" bgcolor="#f7f7f7" border="0" class="selecttable" width=100%>' ;
					$(options).each(function(i,obj){
							var value = obj.name;
							count++;
						 vHTML+='<tr url="'+i+'" id="funclocator_' + i + '" code="'+obj.code+'" align="left" width="100%" height="30px"  ><td nowrap width="100%" style="padding-left:10px">'+value+'</td></tr>';
				 });
				 vHTML+="</table>" ;
				 $(selecthtml)[0].innerHTML =  vHTML ;
				 var nameMenu = null;
				 $("#" + name + "_htmltable").delegate("tr","mouseover",function(){
	 
					 if(typeof(_searchTimeOut) != 'undefined'){
						 clearTimeout(_searchTimeOut);
					 }
					 if(typeof(defaultMenu2) != 'undefined'){
							clearTimeout(defaultMenu2.getHideThecondMenuTime());
					 }
					 
					 $(this).addClass("selectitem");
							$(this).css("color","white");
							this.style.cursor = "pointer";
							nameMenu = name.split("_");
							if(nameMenu.length > 1){
								if(!$("#"+nameMenu[0]).hasClass("banner-mouseover")){
									$("#"+nameMenu[0]).addClass("banner-mouseover");
								}
							}
					 }     
				 );
					 $("#" + name + "_htmltable").delegate("tr","mouseout",function(){
								$(this).removeClass("selectitem");
								$(this).css("color","black");
							 }
						);
					
				 $("#" + name + "_htmltable tr").each(function(){
					 $(this).mousedown(function(){
						 $("#" + name + "_selectinput").val($.trim($(this).text()));
								 newvalue = $.trim($(this).text());
								 selectedurl = urls[parseInt($(this).attr("url"))];
									$("#positionHelper"+name+"_selectinput").css("display","none");
									$("#positionHelperIframe"+name+"_selectinput").css("display","none");
									
							 if(selectedurl.indexOf("##")>0){
								 var selectUrl=selectedurl.split("##")[0];
									 var selectCode=selectedurl.split("##")[1];
									 if(selectUrl.indexOf("?")>0){
											selectUrl = selectUrl+"&appCode="+selectCode;
									 }else{
											selectUrl = selectUrl+"?appCode="+selectCode;
									 }
									 
									 var appcontext = ""
							if(selectUrl.indexOf('appcontext') != -1){
								var address = selectUrl.split("?")[1];
								var appcontextArr = address.split("&");
								
								for(var i=0;i<appcontextArr.length;i++){
									if(appcontextArr[i].indexOf("appcontext") != -1){
										appcontext = appcontextArr[i].split("=")[1];
										if(appcontext.indexOf("\"") != -1 || appcontext.indexOf("'") != -1){
											appcontext = appcontext.substring(1,appcontext.length - 1);
										}
									}
								}
							}
									 if(appcontext != ""){
											MultitaskPanelManager.addMenuTab($(this).attr('code'),newvalue,selectUrl,true,appcontext);
										}else{
											MultitaskPanelManager.addMenuTab($(this).attr('code'),newvalue,selectUrl);	
										}

										defaultMenu2.hideThecondMenu();
										
							 }
									
										$("#" + name + "_selectinput").val("") ;
								 if($("#searchInfor").length>0){
									 $("#searchInfor").css("top","9998px");
											$("#searchInfor").css("display","none");
										 
									}
										
										$("#"+name.split("_")[0]).removeClass("banner-mouseover");
					 });
				 });
				 $(selecthtml).css("display","block");
				 setMenuPosition($("#"+name+"_selecthtml"),$("#"+name+"_selectinput"),name+"_selectinput","funclocator");
				 $("#positionHelper"+name+"_selectinput").css("display","block");
				 $("#positionHelperIframe"+name+"_selectinput").css("display","block");
				 
				 if($("#" + name + "_htmltable tr").length > 0){
					 $("#" + name + "_htmltable tr:eq(0)").addClass("selectitem");
					 $("#" + name + "_htmltable tr:eq(0)").css("color","white")
					 selectItemPosition = 0;
				 }
		 }
 });
 
})(jQuery);

