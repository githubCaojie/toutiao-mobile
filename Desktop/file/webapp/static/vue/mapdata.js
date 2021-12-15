function initCusCover(){
            ComplexCustomOverlay = function (point, color){
                this._point = point;
                this._color = color;
            }
            ComplexCustomOverlay.prototype = new BMap.Overlay();
            ComplexCustomOverlay.prototype.initialize = function(map){
                this._map = map;
               	var div = this._div = document.createElement("div");

                var czoom = this._map.getZoom();
                var csize = 5 + (czoom-5)*2 ;

                div.style.position = "absolute";
                div.style.zIndex = BMap.Overlay.getZIndex(this._point.lat);
                div.style.backgroundColor = this._color;
                div.style.padding = "0px";
                div.style.width = csize + "px";
                div.style.height = csize + "px";
                div.style.borderRadius = csize + "px";
                div.style.lineHeight = csize + "px";
                div.style.whiteSpace = "nowrap";
                div.style.MozUserSelect = "none";
                var span = this._span = document.createElement("span");
                div.appendChild(span);
                span.appendChild(document.createTextNode(""));      

                var arrow = this._arrow = document.createElement("div");
                arrow.style.position = "absolute";
                arrow.style.width = "0px";
                arrow.style.height = "0px";
                arrow.style.top = "0px";
                arrow.style.left = "0px";
                arrow.style.overflow = "hidden";
                div.appendChild(arrow);

                this._map.getPanes().labelPane.appendChild(div);
                
                return div;
            }
            ComplexCustomOverlay.prototype.draw = function(){
                var map = this._map;
                var pixel = map.pointToOverlayPixel(this._point);
                this._div.style.left = pixel.x - parseInt(this._arrow.style.left) + "px";
                this._div.style.top  = pixel.y - 0 + "px";
            }
            ComplexCustomOverlay.prototype.addEventListener = function(event,fun){
		    	this._div['on'+event] = fun;
			}

        }
function initCusCover2(){
            SelectOverlay = function (point){
                this._point = point;
            }
            SelectOverlay.prototype = new BMap.Overlay();
            SelectOverlay.prototype.initialize = function(map){
                this._map = map;
               	var div = this._div = document.createElement("div");

                div.style.position = "absolute";
                div.style.zIndex = BMap.Overlay.getZIndex(this._point.lat);
                div.style.border = "3px solid red";
                div.style.padding = "0px";
                div.style.width = "24px";
                div.style.height ="24px";
                div.style.MozUserSelect = "none";
                var span = this._span = document.createElement("span");
                div.appendChild(span);
                span.appendChild(document.createTextNode(""));      

                var arrow = this._arrow = document.createElement("div");
                arrow.style.position = "absolute";
                arrow.style.width = "0px";
                arrow.style.height = "0px";
                arrow.style.top = "0px";
                arrow.style.left = "0px";
                arrow.style.overflow = "hidden";
                div.appendChild(arrow);

                this._map.getPanes().labelPane.appendChild(div);
                
                return div;
            }
            SelectOverlay.prototype.draw = function(){
                var map = this._map;
                var pixel = map.pointToOverlayPixel(this._point);
                this._div.style.left = pixel.x - parseInt(this._arrow.style.left)-15 + "px";
                this._div.style.top  = pixel.y - 15 + "px";
            }
        }
function initCusCover3(){
            SelectCircleOverlay = function (point){
                this._point = point;
            }
            SelectCircleOverlay.prototype = new BMap.Overlay();
            SelectCircleOverlay.prototype.initialize = function(map){
                this._map = map;
               	var div = this._div = document.createElement("div");

                div.style.position = "absolute";
                div.style.zIndex = BMap.Overlay.getZIndex(this._point.lat);
                div.style.border = "3px solid red";
                div.style.padding = "0px";
                div.style.width = "24px";
                div.style.height ="24px";
                div.style.MozUserSelect = "none";
                var span = this._span = document.createElement("span");
                div.appendChild(span);
                span.appendChild(document.createTextNode(""));      

                var arrow = this._arrow = document.createElement("div");
                arrow.style.position = "absolute";
                arrow.style.width = "0px";
                arrow.style.height = "0px";
                arrow.style.top = "0px";
                arrow.style.left = "0px";
                arrow.style.overflow = "hidden";
                div.appendChild(arrow);

                this._map.getPanes().labelPane.appendChild(div);
                
                return div;
            }
            SelectCircleOverlay.prototype.draw = function(){
                var map = this._map;
                var pixel = map.pointToOverlayPixel(this._point);
                this._div.style.left = pixel.x - parseInt(this._arrow.style.left)-2 + "px";
                this._div.style.top  = pixel.y - 2 + "px";
            }
            SelectCircleOverlay.prototype.addEventListener = function(event,fun){
		    	this._div['on'+event] = fun;
			}
        }
function getDeparts(){
	try{
	$.post('../mobile/mobilePrjOnLineAction.do?action=departs',{},function(data){
		var list=data.data.list;
		for(var i=0;i<list.length;i++){
			prjDepart[list[i].groupName]={};
			prjDepart[list[i].groupName]['citys']=list[i].createdByUserLogin.split(';');
			prjDepart[list[i].groupName]['color']=list[i].orgClass;
			prjDepart[list[i].groupName]['lnglat']=list[i].lastModifiedByUserLogin;
		}
		initSfzMap();
	})
	}catch( e){
		
	}
}
function initSfzMap(){
	if(deptName!=''&&deptName!=null){
		var dept = prjDepart[deptName] ;
        var citys = dept.citys;
        for(var i=0;i<citys.length;i++){
        	addDistrict(citys[i], dept.color);
            num ++ ;
         }
         addDeptToMap(dept.lnglat)
     }else {
         for(var key in prjDepart){
         	var dept = prjDepart[key];
            var citys = dept.citys;
            for(var i=0;i<citys.length;i++){
            	addDistrict(citys[i], dept.color);
                num ++ ;
             }
             addDeptToMap(dept.lnglat)
          }
     }
     if(window.top.mapSelect=='3'){
     	$("#mapSelect-3").css("background","#e8e8e8");
	     workPoint();
     }else if(window.top.mapSelect=='2'){
     	$("#mapSelect-2").css("background","#e8e8e8");
     	statAqByPlace();
     }else if(window.top.mapSelect=='1'){
     	$("#mapSelect-1").css("background","#e8e8e8");
     	workPlaceList();
     }
}
function addDeptToMap(lnglat){
	var lng = lnglat.split(",")[0];
    var lat = lnglat.split(",")[1]
    var point = new BMap.Point(lng, lat);
    var myIcon = new BMap.Icon('images/qy.png', new BMap.Size(16,16));
    var deptMarker = new BMap.Marker(point,{icon:myIcon});
   	mp.addOverlay(deptMarker);             
}
function addDistrict(districtName, color){
	var blist = [];
    var bdary = new BMap.Boundary();
    // let districtName = '湘西土家族苗族自治州';
    bdary.get(districtName, function (rs) {       //获取行政区域
    	var count = rs.boundaries.length; //行政区域的点有多少个
        for (var i = 0; i < count; i++) {
        	blist.push({ points: rs.boundaries[i], name: districtName });
        };
        //加载完成区域点后计数器-1
        //加载完成区域点后计数器-1
        //全加载完成后画端点
        drawBoundary(blist, color);
     });
}
function drawBoundary(blist, color) {
	//循环添加各闭合区域
    for (var i = 0; i < blist.length; i++) {
	    //添加多边形层并显示
	    var ply = new BMap.Polygon(blist[i].points, { 
	    			strokeWeight: 1,   //边框宽度
	                trokeColor: "#014F99",   //边框颜色
	                fillColor: color, //填充颜色
	                fillOpacity:0.4,
	              }); //建立多边形覆盖物
	    ply.name = blist[i].name;
	    // ply.addEventListener("click", click);
	    mp.addOverlay(ply);
	
	    //将点增加到视野范围内
	    var path = ply.getPath();
	    ptArray = ptArray.concat(path);
    }
    num --;
            
    //限定显示区域(只显示特定区域，鼠标拖动松开后自动回到显示范围内)，需要引用api库
    // let boundply = new BMap.Polygon(pointArray);
    // BMapLib.AreaRestriction.setBounds(map, boundply.getBounds());
    if(num == 0){
    	mp.setViewport(ptArray);    //调整视野 
    }
}
