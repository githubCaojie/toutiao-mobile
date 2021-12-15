
	function initDataGxgl(pid){
				
		$.ajax({
             type: "GET",
             url : $$pageContextPath+'main/getProcedureData?pid='+pid,
             dataType: "json",
             success: function(data){
             	initData1(data);
             	initData2(data);
             	var table21212 = {"procedureNum":400,"onceOpenProcedureNum":88.00,"table3":[{"value":[125,20,385,630,701,138],"key":"一次通过数"},{"value":[125,20,385,630,701,138],"key":"报验数"}],"size":5,"num":[{"all":41020,"num":613,"name":"项目总体","allNum":40407},{"all":6284,"num":433,"name":"TXSG-02","allNum":5851},{"all":7556,"num":92,"name":"TXSG-03","allNum":7464},{"all":15584,"num":63,"name":"TXSG-04","allNum":15521}],"nameList":["2021-1","2021-2","2021-3","2021-4","2021-5","2021-6"],"surplusNum":40620,"listName":["项目总体","一次通过数","报验数","TXSG-04"],"list":[{"value":89.00,"key":"TXSG-02"},{"value":85.00,"key":"TXSG-03"},{"value":91.00,"key":"TXSG-04"}],"numList":[0,0,0,0,0,0],"allNum":41020};
             	initData3(table21212);
             }
         });
//		var jldcjsl = document.getElementById("jldcjsl");
//		getChartInit4(pid,jldcjsl);
		
//		var jlwcs = document.getElementById("jlwcs");
//		getChartInit6(pid,jlwcs);
	}

	//**********************    初始化图表1    开始       *************************
	function initData1(data){
		
		var a = data.allNum;
		var b = data.procedureNum;
		var c = data.surplusNum;
		$("#yysgxid1").html(a);
		$("#yysgxid2").html(b);
		$("#yysgxid3").html(c);
		console.log(data);
		if (data.size>=0) {
			$("#gxzstable1").append('<div style="width: 100%;height: 70%;margin-bottom：20px;" id="gxtgl1"></div>');
			$("#gxzstable1").append('<span style="font-size: 10px;color: white;"> 报验第一次通过率</span></div>');
			var dom = document.getElementById("gxtgl1");
			getChartInit(data.onceOpenProcedureNum,dom,1);
		};
		if (data.size>=1) {
			var d = data.list[0];
			console.log(d);
			var k = d.key;
			if(k.length > 9) k = k.substring(0, 9);
			$("#gxzstable2").append('<div style="width: 100%;height: 70%;margin-bottom：20px;" id="gxtgl2"></div>');
			$("#gxzstable2").append('<span style="font-size: 10px;color: white;">'+k+'</span></div>');
			var dom = document.getElementById("gxtgl2");
			getChartInit(d.value,dom,2);
		};
		if (data.size>=2) {
			var d = data.list[1];
			var k = d.key;
			if(k.length > 9) k = k.substring(0, 9);
			$("#gxzstable3").append('<div style="width: 100%;height: 70%;" id="gxtgl3"></div>');
			$("#gxzstable3").append('<span style="font-size: 10px;color: white;">'+k+'</span></div>');
			var dom = document.getElementById("gxtgl3");
			getChartInit(d.value,dom,2);
		};
		if (data.size>=3) {
			var d = data.list[2];
			var k = d.key;
			if(k.length > 9) k = k.substring(0, 9);
			$("#gxzstable4").append('<div style="width: 100%;height: 70%;" id="gxtgl4"></div>');
			$("#gxzstable4").append('<span style="font-size: 10px;color: white;">'+k+'</span></div>');
			var dom = document.getElementById("gxtgl4");
			getChartInit(d.value,dom,2);
		};
	}
	
	function initData2(data){
		var num = data.num;
		var arr1 = new Array();//数组名
		var arr2 = new Array();
		var arr3 = new Array();
		var arr4 = new Array();
		for (var i=0; i < num.length; i++) {
		  arr1[i] = num[i].name;
		  arr2[i] = num[i].allNum;
		  arr3[i] = num[i].num;
		  arr4[i] = num[i].all;
		};
		var gxbyjd = document.getElementById("gxbyjd");
		getChartInit2(gxbyjd,arr1,arr2,arr3,arr4);
		
		
		
	}
	
	function initData3(data){
		var names = data.nameList; 
		var table3 = data.table3;
		var gxbysl = document.getElementById("gxbysl");
		getChartInit3(names,gxbysl,table3,data.numList,data.listName);
	}
