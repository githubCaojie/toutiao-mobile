if(!localStorage.defaultCloseFirstTask){
	localStorage.defaultCloseFirstTask = false; 
}

var vm = new Vue({
	el:"#app",
	data: {
		roleContent: [],
		displayArea: 'block',
		currentIndex: 0,
		pageArray: [1],
		allShortCut: [],
		historyList: [],
		shortCutList: [],
		scrollbarHeight: 10,
		multitasktype: multitasktype,
		maxtabnum: maxtabnum,
		bdId:'0',
		prjId:'0'
	},
	watch:{
		displayArea:function(val){ //显示时，重新设置一下scrollbarHeight,在ie下
			var me = this;
			var height = me.scrollbarHeight - 1;
			if(val == 'block'){
				if($msie){
					setTimeout(function(){
						me.scrollbarHeight = height; //
					},0)
				}
			}
		}	
	},
	mounted :function() {
		var me = this ;
		$.ajax({
			url : $$pageContextPath + "framework/frameapp/personalWidgetsSet/getPersonalDesk",
			success : function(data){
				me.roleContent = data ;
			}
		});
		
		$.request({
			url : $$pageContextPath + 'pmSection/retrieveRight1',
			success : function(response){
				var treeValue = response.getParameter("default");
				var prjId = response.getParameter("prjId");
				if (treeValue == "-999") {
					
				} else {
					bdIdStr = treeValue;
					prjIdStr = prjId;
					// 右上角的树选中节点.
					var rootChils = prjTree.getChildrenCascade('0');
					for(var i=0; i<rootChils.length; i++) {
						var treeCode = rootChils[i].code;
						var index = treeCode.indexOf("_");
						if(index != -1 && treeValue == treeCode.substring(index + 1, treeCode.length)) {
							me.bdId = treeCode;
							console.log("------------------------------");
							console.log(treeCode);
							console.log("------------------------------");
							break;
						}
					}
				}
			}
		});
		//获取人员信息
		/*$.request({
			url : $$pageContextPath + 'per/person/retrievePersonInfo',
			success : function(response){
				vm.photoPath = response.parameters.photoPath?response.parameters.photoPath:'images/main/head2.png';
				var person = response.parameters.person;
				if(null!=person){
					$("#phone").html(person.linkmenPhone);
					$("#orgName").html(person.orgName);
				}
			}
		});*/
		
//		$.ajax({
//			url: $$pageContextPath + "framework/frameapp/shortCut/commonFuncData",
//			async:false, //这里需要改成同步的，为了让IE下的scrollbar组件出现滚动条
//			success: function(data) {
//				me.allShortCut = data.dataWraps.shortCutWrap.dataList;
//				me.historyList = data.dataWraps.historyWrap.dataList;
//				for (var i = 2;i <= Math.ceil(me.allShortCut.length/9);i++) {
//					me.pageArray.push(i);
//				}
//				me.setIndex(1);
//			}
//		});					
		var bodyDom = document.querySelectorAll("body");
         var height = bodyDom[0].clientHeight - 80 ;
         this.scrollbarHeight = height; //可以在这里动态计算高度
         
         var resizeEvt = null; 
	     var me = this;
         $(window).resize(function(evt) {
		 	 clearTimeout(resizeEvt); resizeEvt = setTimeout(function() {
	             var bodyDom2 = document.querySelectorAll("body");
		         var height2 = bodyDom[0].clientHeight - 80 ;
		         me.scrollbarHeight = height2; //
	           }, 100);
	           
		 })  
		 
		$.ajax({
			
			type : 'GET',
			url : $$pageContextPath+'getMenu',
			data : {
				rightFilter : true,
				rootVisible : false,
				rootCode : '0'
			},
			async : false,
			success : function(data) {
				ajaxMenuJson = eval("(" + data + ")");
				genFullMenu(ajaxMenuJson);
				genSlideMenu(ajaxMenuJson);
				//genHeadMenu(ajaxMenuJson);
			}
		});
        
	},
	methods : {
		getImage: function(src) {
			return $$pageContextPath + src;
		},
		/*getText: function(name) {
			return name.substr(0,1);
			//return name.substr(Math.floor(Math.random()*(name.length)),1);
		},*/
		setIndex: function(index) {
			if (this.currentIndex != index) {
				this.currentIndex = index;
				var start = (index - 1) * 9, end = index * 9;
				if (this.allShortCut.length > end) {
					this.shortCutList = this.allShortCut.slice(start, end);
				} else {
					this.shortCutList = this.allShortCut.slice(start);
				}
			}
		},
		openTask: function(type, item) {
			if (type == 0) {
				openTabTask('SYS', (shortcutTitle||'快捷方式维护'), 'framework/frameapp/shortCut/', false, null);
			} else if (type == 1) {
				openTabTask(item.rightItemCode, item.rightItemName, item.functionEntity, false, null, item.appContext);
			} else if (type == 2) {
				openTabTask(item.rightItemCode, item.rightItemName, item.invokeUrl, false, null, item.appContext);
			}
		},
		modifyPwd: function() {
			$.showModalDialog( $$pageContextPath + "framework/frameapp/changePwd/", (modifyPwdTitle||"修改登录口令"), null, null, 500, 400, 0);
		},
		deskClick : function(groupid){
			$("#0_bodyFrame").attr("src",""+$$pageContextPath+"mainpage?groupId="+groupid); 
		},
		openHelp : function(){
			var url = $$pageContextPath + "webhelp/helpframe";
			var task = getFrameworkActiveTask();
			if(task && task.url){
				var params = task.url.split("?");
				if(params.length>1){
					var paramArr = params[1].split("&");
					var count = 0;
					for(var i = 0; i < paramArr.length; i++){
						var paramKey = paramArr[i].split("=")[0];
						if(paramKey == "appCode" || paramKey == "helpCode"){
							if(count == 0){
								url = url + "?" +　paramArr[i];
							}else{
								url = url + "&" +　paramArr[i];
							}
							count++;
						}
					}
				}
			}
			window.open(url);
		},
		collapseArea:function(){
			if(this.displayArea == 'none'){
				this.displayArea = 'block';
			}else{
				this.displayArea = 'none';
			}
		},
		handleNodeClick(node){
			var index = node.code.indexOf('_');
			var codeStr = '';
			if(index != -1){
				codeStr = node.code.substring(index+1, node.code.length);
			}
			this.bdId=node.code;
			this.prjId=node.prjId;
			bdIdStr=codeStr;
			prjIdStr=node.prjId;
			MultitaskPanelManager.freshAllPage('{"bdId":"'+codeStr+'","prjId":"'+prjIdStr+'"}');
		}
	}
})


// var vm2 = new Vue({
// 	el: "#menuApp"
// });

// var vm3 = new Vue({
// 	el: "#personGroupApp",
// 	data: {
// 		roleContent: []
// 	},
// 	mounted :function() {
// 		var me = this ;
// 		$.ajax({
// 			url : $$pageContextPath + "/framework/frameapp/personalWidgetsSet/getPersonalDesk",
// 			success : function(data){
// 				me.roleContent = data ;
// 			}
// 		});
			
// 	},
// 	methods : {
// 		deskClick : function(groupid){
// 			$("#0_bodyFrame").attr("src",""+$$pageContextPath+"mainpage?groupId="+groupid); 
// 		}
// 	}
// });

// var vm4 = new Vue({
// 	el: "#help",
// 	methods :{
// 		openHelp : function(){
// 			var url = $$pageContextPath + "webhelp/helpframe";
// 			var task = getFrameworkActiveTask();
// 			if(task && task.url){
// 				var params = task.url.split("?");
// 				if(params.length>1){
// 					var paramArr = params[1].split("&");
// 					var count = 0;
// 					for(var i = 0; i < paramArr.length; i++){
// 						var paramKey = paramArr[i].split("=")[0];
// 						if(paramKey == "appCode" || paramKey == "helpCode"){
// 							if(count == 0){
// 								url = url + "?" +　paramArr[i];
// 							}else{
// 								url = url + "&" +　paramArr[i];
// 							}
// 							count++;
// 						}
// 					}
// 				}
// 			}
// 			window.open(url);
// 		}
// 	}
// });

