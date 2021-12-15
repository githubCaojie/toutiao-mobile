(function(a) {
    a.fn.olvSlides = function(b) {
        a.fn.olvSlides.option = {
            container: "container",
            control: "control",
            change: "change",
            createNextPrev: true,
            next: "next",
            prev: "prev",
            createPagination: true,
            paginationClass: "pageClass",
            currentClass: "cur",
            thumb: false,
            thumbPage: true,
            thumbPrev: "thumbPrev",
            thumbNext: "thumbNext",
            thumbDirection: "X",
            bigTarget: false,
            bigTargetPrev: "bigTargetPrev",
            bigTargetNext: "bigTargetNext",
            fadeSpeed: 350,
            slideSpeed: 350,
            start: 1,
            effect: "slide",
            fadeEasing: "",
            play: false,
            pause: 200,
            hoverPause: false
        };
        b = a.extend({},
        a.fn.olvSlides.option, b);
        return this.each(function() {
            a(this).children().wrapAll('<div class="' + b.container + '"/>');
            var B = a(this),
            o = a("." + b.control, B),
            q = a("." + b.change, B),
            g = a(".thumbWrap", B),
            C = a(".thumbCont", g),
            H = b.thumb ? H = C.children(":eq(0)").children().size() : H = q.children().size(),
            h = parseInt(b.start, 10) >= H ? H - 1 : parseInt(b.start - 1, 10),
            x = o.outerWidth(),
            t = b.effect,
            v = 0,
            u = 0,
            d = 0,
            w = 0,
            m,
            n,
            G,
            E,
            r,
            k,
            F,
            c,
            D,
            p,
            f,
            s,
            z;
            if (H < 1) {
                o.fadeIn(b.fadeSpeed);
                a("." + b.next + ", ." + b.prev).fadeOut(0);
                return false
            }
            function j(K, J, I) {
                if (!m) {
                    m = true;
                    switch (K) {
                    case "next":
                        u = w;
                        v = w + 1;
                        v = H === v ? 0 : v;
                        G = x * 2;
                        K = -x * 2;
                        w = v;
                        break;
                    case "prev":
                        u = w;
                        v = w - 1;
                        v = v === -1 ? H - 1 : v;
                        G = 0;
                        K = 0;
                        w = v;
                        break;
                    case "pagination":
                        v = parseInt(I, 10);
                        u = a("." + b.paginationClass + " a." + b.currentClass, B).attr("href").match("[^#/]+$");
                        if (v > u) {
                            G = x * 2;
                            K = -x * 2
                        } else {
                            G = 0;
                            K = 0
                        }
                        w = v;
                        break;
                    case "thumbClick":
                        v = parseInt(I, 10);
                        u = a("li." + b.currentClass, C).data("data");
                        if (v > u) {
                            G = x * 2;
                            K = -x * 2
                        } else {
                            G = 0;
                            K = 0
                        }
                        w = v;
                        break
                    }
                    if (J === "slide") {
                        q.children(":eq(" + v + ")").css({
                            left: G,
                            display: "block"
                        });
                        q.animate({
                            left: K
                        },
                        b.slideSpeed,
                        function() {
                            q.css({
                                left: -x
                            });
                            q.children(":eq(" + v + ")").css({
                                left: x,
                                zIndex: 5
                            });
                            q.children(":eq(" + u + ")").css({
                                left: x,
                                display: "none",
                                zIndex: 0
                            });
                            m = false
                        })
                    } else {
                        q.children(":eq(" + v + ")", B).css({
                            zIndex: 8
                        }).fadeIn(b.fadeSpeed, b.fadeEasing,
                        function() {
                            q.children(":eq(" + u + ")", B).css({
                                display: "none",
                                zIndex: 0
                            });
                            q.children(":eq(" + v + ")", B).css({
                                zIndex: 0
                            });
                            m = false
                        })
                    }
                    if (b.createPagination) {
                        a("." + b.paginationClass + " a", B).removeClass(b.currentClass);
                        a("." + b.paginationClass + " a:eq(" + v + ")", B).addClass(b.currentClass)
                    }
                    if (b.thumb) {
                        if (b.thumbDirection == "Y") {
                            F = C.children(":eq(0)").position().top;
                            c = ((D - p) / 2) - (p * w);
                            if (c < s) {
                                c = s
                            } else {
                                if (c > 0) {
                                    c = 0
                                }
                            }
                            C.children(":eq(0)").animate({
                                top: c
                            });
                            C.children(":eq(0)").children("li").removeClass("cur");
                            C.children(":eq(0)").children("li:eq(" + w + ")").addClass("cur")
                        } else {
                            F = C.children(":eq(0)").position().left;
                            c = ((D - p) / 2) - (p * w);
                            if (c < s) {
                                c = s
                            } else {
                                if (c > 0) {
                                    c = 0
                                }
                            }
                            C.children(":eq(0)").animate({
                                left: c
                            });
                            C.children(":eq(0)").children("li").removeClass("cur");
                            C.children(":eq(0)").children("li:eq(" + w + ")").addClass("cur")
                        }
                    }
                }
            }
            function y() {
                clearInterval(B.data("interval"))
            }
            function l() {
                
            }
            if (H < 1) {
                return
            }
            if (h < 0) {
                h = 0
            }
            if (b.start) {
                w = h
            }
            B.css({
                overflow: "hidden",
                position: "relative"
            });
            o.css({
                overflow: "hidden",
                position: "relative",
				margin: "0 auto"
            });
            o.css({
                display: "block"
            });
            if (b.thumb) {
                startT = h + 1;
                g.show();
                C.bind("mouseover",
                function() {
                    y()
                });
                C.bind("mouseleave",
                function() {
                    l()
                });
                if (b.thumbPage) {
                    //g.append('<a href="#Prev" hidefocus="true" class="' + b.thumbPrev + '"><span>Up</span></a><a href="#Next" hidefocus="true" class="' + b.thumbNext + '"><span>Down</span></a>')
                }
                if (b.thumbDirection === "Y") {
                    D = C.outerHeight();
                    p = C.children(":eq(0)").children(":eq(0)").outerHeight();
                    f = Math.ceil(D / p);
                    s = -p * H + D;
                    F = C.children(":eq(0)").position().top;
                    C.children(":eq(0)").css({
                        height: p * H + "px",
                        width: "100%",
                        position: "absolute",
                        left: "0px",
                        top: "0px"
                    });
                    if (b.start > f) {
                        if ("-" + Math.ceil((p * startT) - (D / 2) - (p / 2)) < -p * H + D) {
                            C.children(":eq(0)").css({
                                top: -p * H + D + "px"
                            })
                        } else {
                            C.children(":eq(0)").css({
                                top: "-" + Math.ceil((p * startT) - (D / 2) - (p / 2)) + "px"
                            })
                        }
                    }
                    a("." + b.thumbPrev, B).click(function(I) {
                        I.preventDefault();
                        if (b.play) {
                            l()
                        }
                        e("Prev")
                    });
                    a("." + b.thumbNext, B).click(function(I) {
                        I.preventDefault();
                        if (b.play) {
                            l()
                        }
                        e("Next")
                    })
                } else {
                    D = C.outerWidth();
                    p = C.children(":eq(0)").children(":eq(0)").outerWidth();
                    f = Math.ceil(D / p);
                    s = -p * H + D;
                    F = C.children(":eq(0)").position().left;
                    C.children(":eq(0)").css({
                        width: p * H + "px",
                        height: "100%",
                        position: "absolute",
                        left: "0px",
                        top: "0px"
                    });
                    if (b.start > f) {
                        if ("-" + Math.ceil((p * startT) - (D / 2) - (p / 2)) < -p * H + D) {
                            C.children(":eq(0)").css({
                                left: -p * H + D + "px"
                            })
                        } else {
                            C.children(":eq(0)").css({
                                left: "-" + Math.ceil((p * startT) - (D / 2) - (p / 2)) + "px"
                            })
                        }
                    }
                    a("." + b.thumbPrev, B).click(function(I) {
                        I.preventDefault();
                        if (b.play) {
                            l()
                        }
                        e("Prev")
                    });
                    a("." + b.thumbNext, B).click(function(I) {
                        I.preventDefault();
                        if (b.play) {
                            l()
                        }
                        e("Next")
                    })
                }
                C.children(":eq(0)").children().click(function(I) {
                    I.preventDefault();
                    c = ((D - p) / 2) - (p * a(this).index());
                    if (c < s) {
                        c = s
                    } else {
                        if (c > 0) {
                            c = 0
                        }
                    }
                    if (b.play) {
                        l()
                    }
                    n = a(this).index();
                    if (w != n) {
                        j("thumbClick", t, n)
                    }
                    if (b.thumbDirection === "Y") {
                        C.children(":eq(0)").animate({
                            top: c
                        },
                        b.slideSpeed)
                    } else {
                        C.children(":eq(0)").animate({
                            left: c
                        },
                        b.slideSpeed)
                    }
                    C.children(":eq(0)").children().removeClass(b.currentClass);
                    a(this).addClass(b.currentClass);
                    return false
                });
                C.children(":eq(0)").children().each(function(L) {
                    var N = a(this).find("img").attr("bigImg");
                    var J = a(this).find("img").attr("url");
                    var I = a(this).find("img").attr("alt");
                    var id = a(this).find("img").attr("id");
                    var M = a(this).find("img").attr("text");
					var T = a(this).find("img").attr("type");
					
                    var K = '<li><div class="imgWrap"><a href="' + J + '" title="' + I + '"><img src="' + N + '" alt="' + I + '" /></a></div><div class="opacity"></div><div class="textDesc"><div class="title"><a href="' + J + '" target="_blank">' + I + '</a></div><div class="text">' + M + "</div></div></li>";
					if(T=='mp4'){
						K = '<li><div class="imgWrap"><a><video style="width:100%;" src="'+J+'" controls="controls"></video></a></div></li>';
					}else if(T=='pdf'){
						K = '<li><div class="imgWrap"><iframe style="height:100%;width:100%;border:0px;" src="'+J+'"/></div></li>';
					}
					
                    a(this).data("data", L);
                    q.append(K)
                });
                C.children(":eq(0)").children("li:eq(" + h + ")").addClass("cur")
            } else {
                g.hide().remove()
            }
            if (b.createPagination && b.thumb === false) {
                o.after('<div class="' + b.paginationClass + '" style="z-index:9;"></div>');
                for (i = 0; i < H; i++) {
                    a("." + b.paginationClass, B).append('<a href="#' + i + '" hidefocus="true"><span>' + (i + 1) + "</span></a>")
                }
                a("." + b.paginationClass + " a:eq(" + v + ")", B).addClass(b.currentClass)
            }
            a("." + b.paginationClass + " a", B).click(function() {
                if (b.play) {
                    l()
                }
                n = a(this).attr("href").match("[^#/]+$");
                if (w != n) {
                    j("pagination", t, n)
                }
                return false
            });
            if (b.createNextPrev) {
                o.append('<a href="#" hidefocus="true" class="' + b.prev + '"><span>Prev</span></a>');
                a("." + b.prev, B).after('<a href="#" hidefocus="true" class="' + b.next + '"><span>Next</span></a>')
            }
            a("." + b.prev, B).click(function(I) {
                I.preventDefault();
                if (b.play) {
                    l()
                }
                j("prev", t)
            });
            a("." + b.next, B).click(function(I) {
                I.preventDefault();
                if (b.play) {
                    l()
                }
                j("next", t)
            });
            q.children().css({
                position: "absolute",
                top: 0,
                left: o.outerWidth(),
                zIndex: 0,
                display: "none"
            });
            q.css({
                position: "relative",
                width: (x * 3),
                left: -x
            });
            q.children(":eq(" + h + ")").fadeIn(b.fadeSpeed);
            function e(I) {
                if (b.thumbDirection == "Y") {
                    if (I == "Prev") {
                        F = F + D;
                        if (F > 0) {
                            F = 0
                        }
                    } else {
                        if (I == "Next") {
                            F = F - D;
                            if (F < s) {
                                F = s
                            }
                        }
                    }
                    C.children(":eq(0)").animate({
                        top: F
                    })
                } else {
                    if (I == "Prev") {
                        F = F + D;
                        if (F > 0) {
                            F = 0
                        }
                    } else {
                        if (I == "Next") {
                            F = F - D;
                            if (F < s) {
                                F = s
                            }
                        }
                    }
                    C.children(":eq(0)").animate({
                        left: F
                    })
                }
            }
            function A(I) {}
            if (b.bigTarget) {
                o.append('<div class="' + b.bigTargetPrev + '"></div><div class="' + b.bigTargetNext + '"></div>');
                a("." + b.bigTargetPrev, B).click(function(I) {
                    I.preventDefault();
                    if (b.play) {
                        l()
                    }
                    j("prev", t)
                });
                a("." + b.bigTargetNext, B).click(function(I) {
                    I.preventDefault();
                    if (b.play) {
                        l()
                    }
                    j("next", t)
                })
            }
            if (b.hoverPause && b.play) {
				/*
                q.bind("mouseover",
                function() {
                    y()
                });
                q.bind("mouseleave",
                function() {
                    l()
                })*/
            }
            if (b.play) {
                k = setInterval(function() {
                    j("next", t)
                },
                b.play);
                B.data("interval", k)
            }
        })
    }
})(jQuery);

function openPicWin(busiUuid, fileUuid, busiType, module){
	//var objType;
	if(!busiType||busiType=="")
		busiType = 0;
	var index;
	var urlStr = '../jtfile/api/v1/file/list';
	$.ajax({  
	    type : "GET",  
	    dataType : "json",  
	    data : {
			busiType: busiType,
			busiUuid: busiUuid,
			extTypes: "",
			mimeTypes: ".",
			module: module,
			watermark: null,
		},  
	    url : urlStr,  
	    async : false,  
	    success : function(response) {
	    	
	    	var data=response.result;
	   		var commonPicObj = [];
	   		var j = 0;
	   		var count=0;
		    for(var i=0;i<data.length;i++){
		    	var f = data[i];
		    	var extName = f.extType;
		    	//var picPath = 'szgl/docmager/images/defaul.png';
		    	var clickStr = 'openDocViewer(\'./download?fileUuid='+f.uuid+'\')';
		    	var title='<span style="display: block;position: absolute;top:12px;z-index: 2;">'+subString(f.filename, 12)+'</span>';
		    	var pic;
		    	var curWwwPath=window.document.location.href;
		    	var pathName=window.document.location.pathname;
		    	var pos=curWwwPath.indexOf(pathName);
		    	var localhostPath=curWwwPath.substring(0,pos);
		    	if(null!=f.thumbnail){
			    	pic={
			    		type:'pic',
						//src:localhostPath+"/hyfile-service/fileupload-api/getFileInputStream?fileUuid="+f.waterFile,
						src:f.preview,
						thumb:f.thumbnail,
						fileType:f.extType
					}
				}else{
					continue;
				}
				if(f.uuid == fileUuid){
					index = count;
				}
				if(extName=='png'||extName=='jpg'||extName=='pdf'||extName=='mp4'){
					count++;
				}
				j++;
		    	commonPicObj.push(pic);
			}
	    	
	    	pwiw_init("",commonPicObj,index);
	    }
	  })

}
function openPicWin2(busiUuid, fileUuid, busiType, module){
	//var objType;
	if(!busiType||busiType=="")
		busiType = 0;
	var index;
	var urlStr = $$pageContextPath+'../jtfile/api/v1/file/list';
	$.ajax({  
	    type : "GET",  
	    dataType : "json",  
	    data : {
			busiType: busiType,
			busiUuid: busiUuid,
			extTypes: "",
			mimeTypes: ".",
			module: module,
			watermark: null,
		},  
	    url : urlStr,  
	    async : false,  
	    success : function(response) {
	    	
	    	var data=response.result;
	   		var commonPicObj = [];
	   		var j = 0;
	   		var count=0;
		    for(var i=0;i<data.length;i++){
		    	var f = data[i];
		    	var extName = f.extType;
		    	//var picPath = 'szgl/docmager/images/defaul.png';
		    	var clickStr = 'openDocViewer(\'./download?fileUuid='+f.uuid+'\')';
		    	var title='<span style="display: block;position: absolute;top:12px;z-index: 2;">'+subString(f.filename, 12)+'</span>';
		    	var pic;
		    	var curWwwPath=window.document.location.href;
		    	var pathName=window.document.location.pathname;
		    	var pos=curWwwPath.indexOf(pathName);
		    	var localhostPath=curWwwPath.substring(0,pos);
		    	if(null!=f.thumbnail){
			    	pic={
			    		type:'pic',
						//src:localhostPath+"/hyfile-service/fileupload-api/getFileInputStream?fileUuid="+f.waterFile,
						src:f.preview,
						thumb:f.thumbnail,
						fileType:f.extType
					}
				}else{
					continue;
				}
				if(f.uuid == fileUuid){
					index = count;
				}
				if(extName=='png'||extName=='jpg'||extName=='pdf'||extName=='mp4'){
					count++;
				}
				j++;
		    	commonPicObj.push(pic);
			}
	    	
	    	pwiw_init("",commonPicObj,index);
	    }
	  })

}
function resizePic(path,callback){
	var divheight = $(window.top.document).height();
	var divwidth = $(window.top.document).width();
	
	var ni = new Image();
	ni.src = path+"&d="+new Date().getTime();// "/ytszgl/szglImages/064a2a2e1d6e4802b2cfba020373521b.jpg";//
	ni.onload = function(){
		var imgW,imgH,maxW=900,maxH=600;
		maxW = typeof(maxW) == 'undefined'?900:maxW;
		maxH = typeof(maxH) == 'undefined'?900:maxH;
		var hRatio;
		var wRatio;
		var Ratio = 1;
		var w = ni.width;
		var h = ni.height;
		wRatio = maxW / w;
		hRatio = maxH / h;
		if (maxW == 0 && maxH == 0) {
			Ratio = 1;
		} else if (maxW == 0) {//
			if (hRatio < 1)
				Ratio = hRatio;
		} else if (maxH == 0) {
			if (wRatio < 1)
				Ratio = wRatio;
		} else if (wRatio < 1 || hRatio < 1) {
			Ratio = (wRatio <= hRatio ? wRatio : hRatio);
		}
		if (Ratio < 1) {
			w = w * Ratio;
			h = h * Ratio;
		}
		callback(w,h);
	}
}
function subString(str, len, hasDot)
{
    var newLength = 0;
    var newStr = "";
    var chineseRegex = /[^\x00-\xff]/g;
    var singleChar = "";
    var strLength = str.replace(chineseRegex,"**").length;
    for(var i = 0;i < strLength;i++)
    {
        singleChar = str.charAt(i).toString();
        if(singleChar.match(chineseRegex) != null)
        {
            newLength += 2;
        }    
        else
        {
            newLength++;
        }
        if(newLength > len)
        {
            break;
        }
        newStr += singleChar;
    }
      
    if(hasDot && strLength > len)
    {
        newStr += "...";
    }
    return newStr;
}

var webPage = (function () {
      var b = window.top.document;
      var e = window.top.document.documentElement;
      return {
          // 当前网页的总大小
          size: function () {
              // 结合上一篇博文中scrollXxx等几种属性的描述
              var w = Math.max(b.scrollWidth, b.offsetWidth, e.scrollWidth);
              var h = Math.max(b.scrollHeight, b.offsetHeight, e.scrollHeight);
              return { "width": w * 1, "height": h * 1 };
          },
          // 当前视窗的屏幕中心位置
          center: function (pos) {// pos偏移{left:value,top:value}
              // 当前视窗中心点位置相对网页左上角的像素位置＝当前视窗大小/2 + 滚动条偏移值
              var lt = this.leftTop();
              var x = e.clientWidth / 2 + lt.x;
              var y = e.clientHeight / 2 + lt.y;
              if (pos) {
                  if (pos.left * 1) {
                      x = x + pos.left * 1;
                  }
                  if (pos.top * 1) {
                      y = y + pos.top * 1;
                  }
              }
              return { "x": x, "y": y };
          },
          // 当前视窗左上角相对当前网页左上角的像素位置＝＝滚动条偏移量
          leftTop: function () {
              // e.scrollLeft：IE下为偏移值，其它为0 ，b.scrollLeft:IE为0,Chrome等为偏移值
              return { "x": (b.body.scrollLeft + e.scrollLeft) * 1, "y": (b.body.scrollTop + e.scrollTop) * 1 };
          },
          // 当前视窗右下角相对当前网页左上角的像素位置＝＝当前视窗大小+滚动条偏移量
          rightBottom: function () {
              var lt = this.leftTop();
              return { "x": e.clientWidth + lt.x, "y": e.clientHeight + lt.y };
          }
      }
} ());
function pwiw_init(imagePath,thums,index) {
	var content ="";
	var only = false;
	var start = 1;
	if(imagePath){
		only  = true;
		var type = "pic";
		var src = imagePath;
		if(imagePath.indexOf("::")>0){
			type = imagePath.split("::")[0];
			src = imagePath.split("::")[1];
		}
		content = '<li><div><img src="'+src+'" type="'+type+'" url="javascript:;" text="" bigImg="'+src+'" alt=""></div></li>';
	}else{
		for(var i=0;i<thums.length;i++){
			var thum = thums[i];
			var cur = '';
			if(index == i){
				cur = 'cur';
				start = i+1;
			}
			if(thum.fileType=='pdf'){
				content += '<li><div><img '+cur+' src="'+thum.thumb+'"  type="'+thum.fileType+'" url="'+thum.src+'" text="" bigImg="'+thum.title+'" alt=""></div></li>';
			}else if(thum.fileType=='png'||thum.fileType=='jpg'){
				content += '<li><div><img '+cur+' src="'+thum.thumb+'"  type="'+thum.fileType+'" url="javascript:;" text="" bigImg="'+thum.src+'" alt=""></div></li>';
			}else if(thum.fileType=='mp4'){
				content += '<li><div><img '+cur+' src="'+thum.thumb+'"  type="'+thum.fileType+'" url="'+thum.src+'" text="" bigImg="'+thum.title+'" alt=""></div></li>';
			}
			
		}
	}
	var id = 'sildes'+new Date().getTime();
	var wrap = '<div class="fullpwiwWrap"><div class="wrap">'+
					'<div id="'+id+'" style="height:100%;">'+
						'<div class="control" style="height:100%;">'+
							'<ul class="change" style="height:100%;" >'+
							'</ul>'+
						'</div>'+
						'<div class="thumbWrap">'+
							'<div class="thumbCont">'+
								'<ul style="padding: 0px;">';
								
		wrap +=	content;
								
		wrap +=				'</ul>'+
							'</div>'+
						'</div>'+
					'</div>'+
				'</div><div class="close" onclick="$(window.top.document.getElementById(\''+id+'\')).parent().parent().remove()"></div>'+
				'<div class="trunRround"></div>'
				'</div>';
				
	$(window.top.document.body).append(wrap);
	window.top['fullpwiwWrapFn'] = function(){
		var opt = {
				thumb:true,
				thumbPage:true,
				thumbDirection:"Y",
				effect:'fade',
				start:start
			}
		if(only||thums.length==1){
			opt.createNextPrev = false;
		}
		
		var $pw = $(window.top.document.getElementById(id));
		
		$pw.olvSlides(opt);
		$pw.parent().parent().find('.trunRround').click(function() {
			$pw.find('ul.change li').each(function(index) {
			  if(!$(this).is(":hidden")){
			  		var roate = $(this).find('img,video').attr('roate');
			  		roate = Number(roate);
			  		if(!roate) roate = 90;
			  		else roate += 90
			  		$(this).find('img,video').rotate({animateTo:roate});
					$(this).find('img,video').attr('roate',roate)
			  }
			});
		});
	}
	window.top['fullpwiwWrapFn']();
}