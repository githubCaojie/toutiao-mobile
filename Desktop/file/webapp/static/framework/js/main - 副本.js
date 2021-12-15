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
		maxtabnum: maxtabnum
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
			url : (typeof $$pageContextPath == 'undefined' ? $$ContextPath.webContext : $$pageContextPath) + "framework/frameapp/personalWidgetsSet/getPersonalDesk",
			success : function(data){
				me.roleContent = data ;
			}
		});

		$.ajax({
			url: (typeof $$pageContextPath == 'undefined' ? $$ContextPath.webContext : $$pageContextPath) + "framework/frameapp/shortCut/commonFuncData",
			async:false, //这里需要改成同步的，为了让IE下的scrollbar组件出现滚动条
			success: function(data) {
				me.allShortCut = data.dataWraps.shortCutWrap.dataList;
				me.historyList = data.dataWraps.historyWrap.dataList;
				for (var i = 2;i <= Math.ceil(me.allShortCut.length/9);i++) {
					me.pageArray.push(i);
				}
				me.setIndex(1);
			}
		});

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

	},
	methods : {
		logoff: function(){
			$.ajax({
				url:$$ContextPath.webContext + "logoff",
				type:"get",
				data:{},
				success:function(){
					window.location.href = $$ContextPath.frontContext;
				}
			}) ;
		},
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
				var srcPath = "";
				if(typeof $$pageContextPath == 'undefined') {
					srcPath = $$ContextPath.frontContext + "views/framework/frameapp/shortcut.html";
				} else {
					srcPath = "framework/frameapp/shortCut/";
				}
				openTabTask('SYS', (shortcutTitle||'快捷方式维护'), srcPath, false, null);
			} else if (type == 1) {
				openTabTask(item.rightItemCode, item.rightItemName, item.functionEntity, false, null, item.appContext);
			} else if (type == 2) {
				openTabTask(item.rightItemCode, item.rightItemName, item.invokeUrl, false, null, item.appContext);
			}
		},
		modifyPwd: function() {
			var srcPath = "";
			if(typeof $$pageContextPath == 'undefined') {
					srcPath = $$ContextPath.frontContext + "views/framework/frameapp/changepwd.html";
				} else {
					srcPath = $$pageContextPath + "framework/frameapp/changePwd/";
				}
			$.showModalDialog( srcPath, (modifyPwdTitle||"修改登录口令"), null, null, 500, 400, 0);
		},
		deskClick : function(groupid){
			var srcPath = "";
			if(typeof $$pageContextPath == 'undefined') {
				srcPath = $$ContextPath.frontContext + "views/framework/mainpage.html?groupId="+groupid;
			} else {
				srcPath = $$pageContextPath+"mainpage?groupId="+groupid;
			}
			$("#0_bodyFrame").attr("src",srcPath);
		},
		openHelp : function(){
			var url = "";
			if(typeof $$pageContextPath == 'undefined') {
					url = $$ContextPath.frontContext + "views/framework/help/helpframe.html";
				} else {
					url = $$pageContextPath + "webhelp/helpframe";
				}
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

