/**
 * 
 */

	function  getChart1(prjid){
		$.request({
		url : $$pageContextPath+'mainScreen/scre/xmtz?prjid='+prjid,
		success : function(response){
		//var xmztz = response.parameters.xmztz;
		var xmztz = 90329.422;
		console.log(response);
		$("#xmztz").html(xmztz);
		//var xmwce = response.parameters.xmwce;
		var xmwce = 12328;
		$("#xmwce").html(xmwce);
		 var dom = document.getElementById("xmtzwcd");
		 var myChart = echarts.init(dom);
		 var app = {};
		 option = null;
		 var t=13.65;
		 var value =t/100;
		 console.log(value);
		 var data = [value, value, value, ];
		 option = {
		     title: {
		         text: (value * 100).toFixed(0) + '{a|%}',
		         //text: value + '{a|%}',
		         textStyle: {
		             fontSize:20,
		             fontFamily: 'Microsoft Yahei',
		             fontWeight: 'normal',
		             color: '#fff',
		             rich: {
		                 a: {
		                     fontSize: 20,
		                 }
		             }
		         },
		         x: 'center',
		         y: '40%'
		     },
		     series: [
		         {
		         type: 'liquidFill',
		         radius: '80%',
		         center: ['40%', '60%'],
		         data: data,
		         backgroundStyle: {
		             color: {
		                 type: 'radial',
		                 x: 0,
		                 y: 0,
		                 r: 0,
		                 colorStops: [{
		                     offset: 1,
		                     color: 'rgba(0,175,242, 1)'
		                 }, {
		                     offset: 0.5,
		                     color: 'rgba(0,175,242, 1)'
		                 }, {
		                     offset: 0,
		                     color: 'rgba(136,223,251, 1)'
		                 }],
		                 globalCoord: false
		             },
		         },
		         outline: {
		             borderDistance: 0,
		             itemStyle: {
		                 borderWidth: 0,
		                 borderColor: {
		                     type: 'linear',
		                     x:0,
		                     y: 0,
		                     x2: 0,
		                     y2: 0,
		                     colorStops: [{
		                         offset: 0,
		                         color: 'rgba(212, 252, 125, 0)'
		                     }, {
		                         offset: 0.5,
		                         color: 'rgba(2, 193, 131, 0)'
		                     }, {
		                         offset: 1,
		                         color: 'rgba(2, 193, 131, 0)'
		                     }],
		                     globalCoord: false
		                 },
		                 shadowBlur:8,
		                 shadowColor: 'rgba(13, 13, 46, 0)'
		             }
		         },
		         color: new echarts.graphic.RadialGradient(0.6, 0, 1, [{
		             offset: 0,
		             color: 'rgba(178, 251, 105, 0)'
		         }, {
		             offset: 1,
		             color: 'rgba(10, 203, 135, 0)'
		         }]),
		         label: {
		             normal: {
		                 formatter: '',
		             }
		         }
		     }, 
		     {
		         type: 'liquidFill',
		         radius: '80%',
		         center: ['50%', '50%'],
		         data: data,
		         backgroundStyle: {
		             color: {
		                 type: 'radial',
		                 x: 0,
		                 y: 0,
		                 r: 0,
		                 colorStops: [{
		                     offset: 1,
		                     color: 'rgba(0,175,242, 1)'
		                 }, {
		                     offset: 0.5,
		                     color: 'rgba(0,175,242, 1)'
		                 }, {
		                     offset: 0,
		                     color: 'rgba(136,223,251, 1)'
		                 }],
		                 globalCoord: false
		             },
		         },
		         outline: {
		             borderDistance: 3,
		             itemStyle: {
		                 borderWidth:5,
		                 borderColor: {
		                     type: 'linear',
		                     x: 1,
		                     y: 0,
		                     x2: 0,
		                     y2: 0,
		                     colorStops: [{
		                         offset: 0,
		                         color: 'rgba(0,175,242, 1)'
		                     }, {
		                         offset: 0.5,
		                         color: 'rgba(90,211,254, 1)'
		                     }, {
		                         offset: 1,
		                         color: 'rgba(90,211,254 ,1)'
		                     }],
		                     globalCoord: false
		                 },
		                 shadowBlur:10,
		                 shadowColor: 'rgba(13, 13, 46, 1)'
		             }
		         },
		         color: new echarts.graphic.RadialGradient(0.6, 0, 1, [{
		             offset: 0,
		             color: 'rgba(0,175,242, 1)'
		         }, {
		             offset: 1,
		             color: 'rgba(90,211,254, 1)'
		         }]),
		         label: {
		             normal: {
		                 formatter: '',
		             }
		         }
		     }, ]
		 };
		 if (option && typeof option === "object") {
			 myChart.clear();
			 myChart.setOption(option, true);
		 }
			}
		});
	 }
	
	function  getChart2(prjid){
		 $.request({
			url : $$pageContextPath+'mainScreen/scre/ndtz?prjid='+prjid,
			success : function(response){
				//var ndztz = response.parameters.ndztz;
				var ndztz = 27977.6484;
				$("#ndztz").html(ndztz);
				//var ndwce = response.parameters.ndwce;
				var ndwce = 5730.59;
				$("#ndwce").html(ndwce);
		 var dom = document.getElementById("ndtzwcd");
		 var myChart = echarts.init(dom);
		 var app = {};
		 option = null;
		 var t=20.05;
		 var value =t/100;
		 var data = [value, value, value, ];
		 option = {
		     title: {
		         text: (value * 100).toFixed(0) + '{a|%}',
		       //  text: value  + '{a|%}',
		         textStyle: {
		             fontSize:20,
		             fontFamily: 'Microsoft Yahei',
		             fontWeight: 'normal',
		             color: '#fff',
		             rich: {
		                 a: {
		                     fontSize: 20,
		                 }
		             }
		         },
		         x: 'center',
		         y: '40%'
		     },
		     series: [
		         {
		         type: 'liquidFill',
		         radius: '80%',
		         center: ['40%', '60%'],
		         data: data,
		         backgroundStyle: {
		             color: {
		                 type: 'radial',
		                 x: 0,
		                 y: 0,
		                 r: 0,
		                 colorStops: [{
		                     offset: 1,
		                     color: 'rgba(50, 65, 96, 1)'
		                 }, {
		                     offset: 0.5,
		                     color: 'rgba(50, 65, 96, 1)'
		                 }, {
		                     offset: 0,
		                     color: 'rgba(111, 117, 139, 1)'
		                 }],
		                 globalCoord: false
		             },
		         },
		         outline: {
		             borderDistance: 0,
		             itemStyle: {
		                 borderWidth: 0,
		                 borderColor: {
		                     type: 'linear',
		                     x:0,
		                     y: 0,
		                     x2: 0,
		                     y2: 0,
		                     colorStops: [{
		                         offset: 0,
		                         color: 'rgba(212, 252, 125, 0)'
		                     }, {
		                         offset: 0.5,
		                         color: 'rgba(2, 193, 131, 0)'
		                     }, {
		                         offset: 1,
		                         color: 'rgba(2, 193, 131, 0)'
		                     }],
		                     globalCoord: false
		                 },
		                 shadowBlur:8,
		                 shadowColor: 'rgba(13, 13, 46, 0)'
		             }
		         },
		         color: new echarts.graphic.RadialGradient(0.6, 0, 1, [{
		             offset: 0,
		             color: 'rgba(178, 251, 105, 0)'
		         }, {
		             offset: 1,
		             color: 'rgba(10, 203, 135, 0)'
		         }]),
		         label: {
		             normal: {
		                 formatter: '',
		             }
		         }
		     }, 
		     {
		         type: 'liquidFill',
		         radius: '80%',
		         center: ['50%', '50%'],
		         data: data,
		         backgroundStyle: {
		             color: {
		                 type: 'radial',
		                 x: 0,
		                 y: 0,
		                 r: 0,
		                 colorStops: [{
		                     offset: 1,
		                     color: 'rgba(50, 65, 96, 1)'
		                 }, {
		                     offset: 0.5,
		                     color: 'rgba(50, 65, 96, 1)'
		                 }, {
		                     offset: 0,
		                     color: 'rgba(111, 117, 139, 1)'
		                 }],
		                 globalCoord: false
		             },
		         },
		         outline: {
		             borderDistance: 3,
		             itemStyle: {
		                 borderWidth:5,
		                 borderColor: {
		                     type: 'linear',
		                     x: 1,
		                     y: 0,
		                     x2: 0,
		                     y2: 0,
		                     colorStops: [{
		                         offset: 0,
		                         color: 'rgba(250,224,0, 1)'
		                     }, {
		                         offset: 0.5,
		                         color: 'rgba(250,175,0, 1)'
		                     }, {
		                         offset: 1,
		                         color: 'rgba(250,175,0, 1)'
		                     }],
		                     globalCoord: false
		                 },
		                 shadowBlur:10,
		                 shadowColor: 'rgba(13, 13, 46, 1)'
		             }
		         },
		         color: new echarts.graphic.RadialGradient(0.6, 0, 1, [{
		             offset: 0,
		             color: 'rgba(250,224,0, 1)'
		         }, {
		             offset: 1,
		             color: 'rgba(250,175,0, 1)'
		         }]),
		         label: {
		             normal: {
		                 formatter: '',
		             }
		         }
		     }, ]
		 };
		 ;
		 if (option && typeof option === "object") {
			 myChart.clear();
		     myChart.setOption(option, true);
		 }
			}
			});
	 }
	
	function  getChart3(prjid){
		$.request({
			url : $$pageContextPath+'mainScreen/scre/ndczwc?prjid='+prjid,
			success : function(response){
				debugger;
		 //var ndczwc = response.parameters.ndczwc;
		 var dom = document.getElementById("ndczwc");
		 var myChart = echarts.init(dom);
		 var app = {};
		 option = null;
		 //var xData =ndczwc.listAll;
		 var xData = ['1月','2月','3月','4月','5月','6月'];
			var color = ['#15ebc9', '#f5c300', '#2ab7fe']
			//var name = ['计划', '实际', '计量']
			var name = ['计划', '实际']
			/* var data = [
			    ndczwc.ndjhlist.data,
			    ndczwc.ndsjlist.data,
			    ndczwc.ndjllist.data
			]*/
			var data = [
			    [1114,179,1075.5555,1618.6295,1252.483,1959.9504],
			    [661.2,28,1293.3,1811.1,1916.99,75]
			]
			var series = [];
			for (var i = 0; i <3; i++) {
			    series.push({
			        name: name[i],
			        type: "line",
			        symbolSize: 3,//标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10[ default: 4 ]
			        symbol: 'circle',//标记的图形。ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
			        smooth: false, //是否平滑曲线显示
			        showSymbol: true, //是否显示 symbol, 如果 false 则只有在 tooltip hover 的时候显示
			        areaStyle: {
			            normal: {
			                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
			                    offset: 0,
			                    color: color[i]
			                }, {
			                    offset: 0.8,
			                    color: 'rgba(255,255,255,0)'
			                }], false),
			                shadowBlur: 10,
			                opacity:0.3,
			            }
			        },
			        itemStyle: {
			            normal: {
			                color: color[i],
			                lineStyle: {
			                    width: 1,
			                    type: 'solid' //'dotted'虚线 'solid'实线
			                },
			                borderColor: color[i], //图形的描边颜色。支持的格式同 color
			                borderWidth: 8 ,//描边线宽。为 0 时无描边。[ default: 0 ] 
			                barBorderRadius: 0,
			                label: {
			                    show: false,
			                },
			                opacity:0.5,
			            }
			        },
			        data: data[i],
			    })
			}
			option = {
			    legend: {
			            itemGap:5,
			            itemWidth:5,
			            textStyle: {
			                color: '#fff',
			                fontSize: '10'
			            },
			            data: name
			    },
			    title: {
			        textStyle: {
			            color: '#fff',
			            fontSize: '22',
			            fontWeight: 'normal',
			        },
			        subtextStyle: {
			            color: '#90979c',
			            fontSize: '16',

			        },
			    },
			    tooltip: {
			        trigger: "axis",
			        axisPointer: { // 坐标轴指示器，坐标轴触发有效
			            type: 'line', // 默认为直线，可选为：'line' | 'shadow'
			            lineStyle: {
			                color: '#0a469e'
			            }
			        },
			        //formatter: '{b}<br />{a0}: {c0}<br />{a1}: {c1}<br />{a2}: {c2}',
			        formatter: '{b}<br />{a0}: {c0}<br />{a1}: {c1}<br />',
			        backgroundColor: 'rgba(0,0,0,0.7)', // 背景
			        padding: [8, 10], //内边距
			        extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.6);', //添加阴影
			    },
			    grid: {
			        borderWidth: 0,
			        top:30,
			        bottom: 60,
			        textStyle: {
			            color: "#fff"
			        }
			    },
			    xAxis: [{
			        type: "category",
			        axisLine: {
			            lineStyle: {
			                color: '#173471'
			            }
			        },
			        splitLine: {
			            show: true,
			            lineStyle: {
			            	type: 'dotted',
			                color: '#173471 ',
			            }
			        },
			        boundaryGap: false, //坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样
			        axisTick: {
			            show: false
			        },
			        splitArea: {
			            show: false
			        },
			        axisLabel: {
			            inside: false,
			            textStyle: {
			                color: '#bac0c0',
			                fontWeight: 'normal',
			                fontSize: '12',
			            },
			        },
			        data: xData,
			    }],
			    yAxis: {
			    	name:'单位：万',
			         nameTextStyle:{
			            color:'white',
			            fontSize:10,
			            padding:[0, 0, 0, -5]
			        },
			        axisTick: {
			            show: false
			        },
			        axisLine: {
			            show: false,
			            lineStyle: {
			                color: '#0a469e',
			            }
			        },
			        splitLine: {
			            show: true,
			            lineStyle: {
			                color: '#0a469e',
			            }
			        },
			        axisLabel: {
			            textStyle: {
			                color: '#bac0c0',
			                fontWeight: 'normal',
			                fontSize: '12',
			            },
			            formatter: '{value}',
			        },
			    },
			    series: series,
			};
		 ;
		 if (option && typeof option === "object") {
			 myChart.clear();
			 myChart.setOption(option, true);
		 }
			}
		});
	 }
	
	
	function  getChart4(prjid){
		$.request({
			url : $$pageContextPath+'mainScreen/scre/fwgx?prjid='+prjid,
			success : function(response){
		var fwgxzc = response.parameters.fwgxzc;
		 var dom = document.getElementById("fwgx");
		 var myChart = echarts.init(dom);
		 var app = {};
		 option = null;
		 var attr = [{
			    name: "应征",
			    unit: "个"

			}, {
			    name: "已征",
			    unit: "个"
			}]
			var xData = ["房屋", "管线"];
			/*var lines = [
				fwgxzc.yzlist.data,
				fwgxzc.yzslist.data
			];*/
			var lines = [
				[8,10],
				[4,1]
			];
			var option = {
			    tooltip: {
			        trigger: 'axis',
			        backgroundColor: 'none',
			        padding: 5,
			        formatter: function(param) {
			            var resultTooltip = "<div style='background:rgba(13,5,30,.6);border:1px solid rgba(255,255,255,.2);padding:5px;border-radius:3px;'>" +
			                "<div style='text-align:center;'>" + param[0].name + "</div>" +
			                "<div style='padding-top:5px;'>";
			            for (var i = 0; i < param.length; i++) {
			                resultTooltip +=
			                    "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:" + param[i].color.colorStops[0].color + ";'></span>" +
			                    "<span style=''> " + param[i].seriesName + ": </span>" +
			                    "<span style='color:" + param[i].color + "'>" + param[i].value + "</span></span><span>" + attr[i].unit + "</span></br>"

			            }
			            resultTooltip += "</div>";

			            return resultTooltip
			        }
			    },
			    grid: {
			        left: '13%',
			        top: '13%',
			        right: '5%',
			        bottom: '19%',
			    },
			    legend: {
			        show: true,
			        orient: 'horizontal',
			        top: '0.5%',
			        textStyle: {
			            color: '#C9C8CD'
			        }
			    },
			    xAxis: [{
			        type: 'category',
			        data: xData,
			        axisLabel: {
			            show: true,
			            fontSize:12,
			            textStyle: {
			                color: "#C9C8CD" //X轴文字颜色
			            },
			            formatter: function(value) {
			                var str = "";
			                str += value.substring(0, 4) + "\n";
			                str += value.substring(5, 10);
			                return str;
			            }
			        },
			        axisLine: {
			            show: true //不显示x轴
			        },
			        axisTick: {
			            show: false //不显示刻度
			        },
			        splitLine: {
			            show: true,
			            width: 0.08,
			            lineStyle: {
			                type: "solid",
			                color: "#173471"
			            }
			        },
			        axisPointer: { //轴指示器
			            type: 'shadow',
			            z: 1,
			            shadowStyle: {
			                color: {
			                    type: 'linear',
			                    x: 0,
			                    y: 0,
			                    x2: 0,
			                    y2: 1,
			                    colorStops: [{
			                        offset: 0,
			                        color: 'rgba(18,155,249,0)' // 0% 处的颜色
			                    }, {
			                        offset: 1,
			                        color: 'rgba(18,155,249,1)' // 100% 处的颜色
			                    }],
			                    global: false // 缺省为 false
			                },
			                shadowColor: 'rgba(0, 0, 0, 0.2)',
			                shadowBlur: 5
			            }
			        },

			    }],
			    yAxis: [{
			        type: 'value',
			        axisLabel: {
			            show: true,
			            textStyle: {
			                fontSize:10,
			                color: "#C9C8CD" //X轴文字颜色
			            }
			        },
			        splitLine: {
			            show: false,
			            width: 0.08,
			            lineStyle: {
			                type: "solid",
			                color: "#173471"
			            }

			        },
			        axisTick: {
			            show: true, //不显示刻度
			        },
			        axisLine: {
			            show: false,
			        },
			        nameTextStyle: {
			            color: "#173471"
			        },
			        splitArea: {
			            show: false
			        }
			    }],
			    series: [
			        {
			            name: '应征',
			            type: 'bar',
			            barWidth: '20%',
			            itemStyle: {
			                normal: {label: {
								show: true, //开启显示
								position: 'top', //在上方显示
								textStyle: { //数值样式
									color: 'white',
									fontSize: 16
								}
							},
			                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
			                        offset: 0,
			                        color: '#00ffff'
			                    }, {
			                        offset: 1,
			                        color: '#02c9c9'
			                    }])
			                }
			            },
			            data: lines[0]
			        },
			        {
			            name: '已征',
			            type: 'bar',
			            barWidth: '20%',
			            itemStyle: {
			                normal: {label: {
								show: true, //开启显示
								position: 'top', //在上方显示
								textStyle: { //数值样式
									color: 'white',
									fontSize: 14
								}
							},
			                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
			                        offset: 0,
			                        color: '#3e8bff'
			                    }, {
			                        offset: 1,
			                        color: '#2f6cff'
			                    }])
			                }
			            },
			            data: lines[1]
			        }
			    ]
			};
		 ;
		 if (option && typeof option === "object") {
			 myChart.clear();
			 myChart.setOption(option, true);
		 }
			}
		});
	 }
	
	function  getChart5(prjid){
		$.request({
			url : $$pageContextPath+'mainScreen/scre/tdzc?prjid='+prjid,
			success : function(response){
		var td = response.parameters.td;
		 var dom = document.getElementById("tdzc");
		 var myChart = echarts.init(dom);
		 var app = {};
		 option = null;
			var sData = [{
		                 //value:td.tdlist.data[0] ,
		                 value: 99980.49 ,
		                 name: '已征(m²)'
		             }, {
		                 //value: td.tdlist.data[1] ,
		                  value: 247067.9 ,
		                 name: '应征(m²)'
		             }];
var legendData1 = [];
var legendData2 = [];
for (var i = 0; i < sData.length; i++) {
    var halfLength = Math.ceil(sData.length / 2);
    var itemName = sData[i].name;
    if (i < halfLength) {
        legendData1.push(itemName)
    } else {
        legendData2.push(itemName)
    }
}
var colorList = ['#d0db10', '#f5ad00'];
option = {
    title: {
        text: '土地',
        x: '60%',
        y: 'center',
        textStyle: {
            color: '#fff',
            fontSize: 14
        }
    },
    tooltip: {
        trigger: 'item',
        borderColor: 'rgba(255,255,255,.3)',
        backgroundColor: 'rgba(13,5,30,.6)',
        borderWidth: 1,
        padding: 5,
        formatter: function(parms) {
            var str = parms.marker + "" + parms.data.name + "</br>" +
                "面积：" + parms.data.value + "m²</br>" +
                "占比：" + parms.percent + "%";
            return str;
        }
    },
    legend: [{
          orient: 'vertical',
		         left: 10,
		         top: 10,
		         textStyle: { //图例文字的样式
                     color: 'white',
                     fontSize: 12
                 },
        data: legendData1
    }, {
         orient: 'vertical',
		         left: 10,
		         top: 30,
		         textStyle: { //图例文字的样式
                     color: 'white',
                     fontSize: 12
                 },
        data: legendData2
    }],
    series: [{
        type: 'pie',
        z: 3,
        radius: ['45%', '65%'],
		center: ["70%", "50%"],　
        clockwise: true,
        avoidLabelOverlap: true,
        hoverOffset: 15,
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorList[params.dataIndex]
                }
            }
        },
        label: {
            show: false
        },
        labelLine: {
            normal: {
                length: 20,
                length2: 30,
                lineStyle: {
                    width: 1
                }
            }
        },
        data: sData
    }]
};
		 ;
		 if (option && typeof option === "object") {
			 myChart.clear();
			 myChart.setOption(option, true);
		 }
			}
		});
		
	 }
	
	function  getChart6(prjid){
		$.request({
			url : $$pageContextPath+'mainScreen/scre/lsyd?prjid='+prjid,
			success : function(response){
		var lsyd = response.parameters.lsyd;
		 var dom = document.getElementById("lsydzc");
		 var myChart = echarts.init(dom);
		 var app = {};
		 option = null;
		var sData = [{
    name: "使用中(m²)",
    //value: lsyd.lsydlist.data[0],
    value: 26702.67,
}, {
    name: "已回收(m²)",
    /*value: lsyd.lsydlist.data[1],*/
    value: 0,
}];
var legendData1 = [];
var legendData2 = [];
for (var i = 0; i < sData.length; i++) {
    var halfLength = Math.ceil(sData.length / 2);
    var itemName = sData[i].name;
    if (i < halfLength) {
        legendData1.push(itemName)
    } else {
        legendData2.push(itemName)
    }
}
var colorList = ['#3e8bff', '#1fd3a9'];
option = {
    title: {
        text: '临时用地',
        x: '55%',
        y: 'center',
        textStyle: {
            color: '#fff',
            fontSize: 14
        }
    },
    tooltip: {
        trigger: 'item',
        borderColor: 'rgba(255,255,255,.3)',
        backgroundColor: 'rgba(13,5,30,.6)',
        borderWidth: 1,
        padding: 5,
        formatter: function(parms) {
            var str = parms.marker + "" + parms.data.name + "</br>" +
                "面积：" + parms.data.value + "m²</br>" +
                "占比：" + parms.percent + "%";
            return str;
        }
    },
    legend: [{
          orient: 'vertical',
		         left: 10,
		         top: 10,
		         textStyle: { //图例文字的样式
                     color: 'white',
                     fontSize: 12
                 },
        data: legendData1
    }, {
         orient: 'vertical',
		         left: 10,
		         top: 30,
		         textStyle: { //图例文字的样式
                     color: 'white',
                     fontSize: 12
                 },
        data: legendData2
    }],
    series: [{
        type: 'pie',
        z: 3,
        radius: ['45%', '65%'],
		center: ["70%", "50%"],　
        clockwise: true,
        avoidLabelOverlap: true,
        hoverOffset: 15,
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorList[params.dataIndex]
                }
            }
        },
        label: {
            show: false
        },
        labelLine: {
            normal: {
                length: 20,
                length2: 30,
                lineStyle: {
                    width: 1
                }
            }
        },
        data: sData
    }]
};
		 ;
		 if (option && typeof option === "object") {
			 myChart.clear();
			 myChart.setOption(option, true);
		 }	}
		});
		
	 }
	
	function  getChart7(){
		var dom = document.getElementById("yhbhtj");
		 var myChart = echarts.init(dom);
		 var app = {};
		 option = null;
		 option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        top: '1% ',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis:  {
        type: 'value',
        axisLabel: {
			            show: true,
			            textStyle: {
			                fontSize:10,
			                color: "#C9C8CD" //X轴文字颜色
			            }
			        },
			        splitLine: {
			            show: false,
			            width: 0.08,
			            lineStyle: {
			                type: "solid",
			                color: "#173471"
			            }

			        },
			        axisTick: {
			            show: true, //不显示刻度
			        },
			        axisLine: {
			            show: false,
			        },
			        nameTextStyle: {
			            color: "#173471"
			        }
    },
    yAxis: {
        type: 'category',
         axisLabel: {
			            show: true,
			            textStyle: {
			                fontSize:10,
			                color: "#C9C8CD" //X轴文字颜色
			            }
			        },
			        splitLine: {
			            show: false,
			            width: 0.08,
			            lineStyle: {
			                type: "solid",
			                color: "#173471"
			            }

			        },
			        axisTick: {
			            show: true, //不显示刻度
			        },
			        axisLine: {
			            show: false,
			        },
			        nameTextStyle: {
			            color: "#173471"
			        },
        //data: ['项目三标','项目二标','项目一标','项目总体']
        data: ['项目四标','项目一标','项目总体']
    },
    series: [
        {
            name: '隐患数量',
            type: 'bar',
          //  stack: '总量',
            barWidth:15,
            itemStyle:{
                normal: {
                    color: '#306cff',
                    barBorderRadius: [20, 20, 20, 20],
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            z:  10,
             barGap: '-100%',
            //data: [320, 302, 301, 334]
            data: [1, 2, 3]
        },
        {
            name: '已整改数量',
            type: 'bar',
         //   stack: '总量',
            itemStyle:{
                normal: {
                    color: '#08e4a4',
                    shadowBlur: [0, 0, 0, 2],
                    shadowColor: '#08e4a4',
                    barBorderRadius: [20, 20, 20, 20],
                    shadowOffsetX: 0,
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            z: 10,
            barGap: '-100%',
            //data: [120, 132, 101, 134]
            data: [1, 2, 3]
        }
    ]
};
		 if (option && typeof option === "object") {
			 myChart.clear();
			 myChart.setOption(option, true);
		 }
	}