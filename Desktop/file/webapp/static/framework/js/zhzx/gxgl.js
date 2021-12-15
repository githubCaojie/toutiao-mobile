
	function  getChartInit(prjid,dom,type){
		var myChart = echarts.init(dom);	
		var value = prjid;
		var option = {
			title: {
		        text: '{a|'+ value +'}{c|%}',
		        x: 'center',
		        y: 'center',
		        textStyle: {
		            rich:{
		                a: {
		                    fontSize: 12,
		                    color: '#29EEF3'
		                },
		                c: {
		                    fontSize: 10,
		                    color: '#ffffff',
		                }
		            }
		        }
		    },
		    series: [  {
		            type: 'pie',
		            radius: ['100%', '60%'],
		            startAngle: 90,
		            z: 0,
		            zlevel: 0,
		            hoverAnimation: false,
		            data: [{
		                    value: value,
		                    name: "",
							labelLine:{
		                    	show : false
		                    },
		                    itemStyle: {
		                        normal: {
		                            color: { // 完成的圆环的颜色
		                                colorStops: [{
		                                    offset: 0,
		                                    color: '#4FADFD' // 0% 处的颜色
		                                }, {
		                                    offset: 1,
		                                    color: '#28E8FA' // 100% 处的颜色
		                                }]
		                            },
		                        }
		                    }
		                },
		                {
		                    value: 100-value,
		                    name: "",

		                    label: {
		                        normal: {
		                        	position: 'inner',
		                            show: false,
		                            formatter: function(value) {
		                  if (value.length > 10) {
		                    return value.substring(0, 10) + "...";
		                  } else {
		                    return value;
		                  }
		                }
		                        }
		                    },
		                    labelLine:{
		                    	show : false
		                    },
		                    itemStyle: {
		                        normal: {
		                            color: "#173164"
		                        }
		                    }
		                }
		            ]
		        }
		    ]
		};
		myChart.setOption(option, true);
	 }

	
	 function  getChartInit2(dom,arr1,arr2,arr3,arr4){
	 	var myChart = echarts.init(dom);
		var option = {
		    tooltip: {
		        trigger: 'axis',
		        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
		            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		        }
		    },
		    grid: {
		        left: '3%',
		        right: '4%',
		        bottom: '1%',
		        top:'10%',
		        containLabel: true,

		    },


		    xAxis: [
		        {
		            type: 'category',
		            data: arr1,
		            axisLabel:{
		            	interval:0,
                        rotate:10,
                     	textStyle:{
                     		fontSize:12,
                         	color:"white"
                     	},
		        		formatter: function(value) {
		                  if (value.length > 6) {
		                    return value.substring(0, 6) + "...";
		                  } else {
		                    return value;
		                  }
		                }
                 	}
		        }
		    ],
		    yAxis: [
		        {
		        	
		        	axisLabel: {
		        		color: '#e2e9ff'
		        	},
			        axisLine: {
			            show: false,
			            lineStyle: {
			                color: 'rgba(255,255,255,1)'
			            }
			        },
			        splitLine: {
			            lineStyle: {
			                color: 'rgba(255,255,255,0.12)'
			            }
			        }
		        }
		    ],
		    series: [{
                    name: "未报验",    
                    type: 'bar',
                    barMaxWidth: 20,    //最大宽度
                    stack: 'sum',
                    itemStyle: {
                        normal: {
                            color: '#15c7bd'
                        }
                    },
                    data: arr2
                },
                {
                    name: "已报验",    
                    type: 'bar',
                    stack: 'sum',
                    barMaxWidth: 20,    //最大宽度
                    itemStyle: {
                        normal: {
                            color: '#999999'
                        }
                    },
                    data: arr3
                },
                {
                    name: '总数',    // 总数显示，生成一个总数的柱状图，将颜色设为透明，        
                    type: 'bar',     // label将位置设备内部底部，造成一个总数显示在
                    stack: 'sum',    // 柱状图上方的假象
                    barMaxWidth: 20,    //最大宽度
                    label: {
                        normal: {
                            offset: ['50', '80'],
                            show: true,
                            position: 'insideBottom',
                            formatter: '{c}',         // 显示的总数
                            textStyle: { color: '#fff' }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(128, 128, 128, 0)'      // 柱状图颜色设为透明
                        }
                    },
                    data: arr4
                }
                ]
		};
		myChart.setOption(option, true);
	}
	

	 
	 
	 function  getChartInit3(names,dom,table3,table,listName){
	 	var myChart = echarts.init(dom);
	 	var series = new Array()
	 	var serie1 = new Object();
		//serie1.name="报验一次通过率";
		//serie1.type="line";
		//serie1.data=table;
		//series[0] = serie1;
	 	for (var i=0; i < table3.length; i++) {
		   	var serie = new Object();
		   	serie.name=table3[i].key;
		   	serie.type="line";
		   	serie.data=table3[i].value;
		   	series[i+1] = serie;
		};
	 	
	 	
	 	
		var option = {
		    tooltip: {
		        trigger: 'axis',
		        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
		            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		        }
		    },
		    //color:['#4472C5','#ED7C30','#80FF80','#FF8096','#800080'],
		    color:['#ED7C30','#80FF80'],
		    legend: {
		        data: listName,
		        left:'center',
		        top:'1%',
		        itemWidth:10,//图例的宽度
		        itemHeight:10,//图例的高度
		        textStyle:{//图例文字的样式
		            color:'#ccc',
		            fontSize:16
		        }
		    },
		    grid: {
		        left: '3%',
		        right: '4%',
		        bottom: '3%',
		        top:'24%',
		        containLabel: true
		    },
		    xAxis: [
		        {
		            type: 'category',
		            data: names,
		            axisLabel:{
                     textStyle:{
                         color:"white"
                     }
                 }
		        }
		    ],
		    yAxis: [
		        {
		        	axisLabel: {
		        		formatter: '{value}',
		        		color: '#e2e9ff',
		        	},
			        axisLine: {
			            show: false,
			            lineStyle: {
			                color: 'rgba(255,255,255,1)'
			            }
			        },
			        splitLine: {
			            lineStyle: {
			                color: 'rgba(255,255,255,0.12)'
			            }
			        }
		        }
		    ],
		    series: series
		};
		myChart.setOption(option, true);
	}
	
	function  getChartInit4(prjid,dom){
		$.request({
			url : $$pageContextPath+'mainScreen/scre/jlbzt?prjid='+prjid,
			success : function(response){
		 var yds = response.parameters.jlbzt;
		 var myChart = echarts.init(dom);
		 var app = {};
		 option = null;
		 let data =[]
		 var count =0;
		 for(let i=0;i<yds.data.name.length;i++){
			 data.push({
				 name:yds.data.name[i],
				 value:yds.data.value[i]
			 });
			 count+=parseInt(yds.data.value[i]);
		 }
		 var p = count/yds.data.name.length;
		  data.push( {
			    name: "平均",
			    value: p
			})
		
			let name = data.map((item) => item.name)
			let value = data.map((item) => item.value)
			let sum = value.reduce((a, b) => {
			    return a + b
			})
			let color = [
			    [
			        "rgb(24, 183, 142)",
			        "rgb(1, 179, 238)",
			        "rgb(22, 75, 205)",
			        "rgb(52, 52, 176)"
			    ],
			    ["rgba(24, 183, 142,0.1)",
			        "rgba(1, 179, 238,0.1)",
			        "rgba(22, 75, 205,0.1)",
			        "rgba(52, 52, 176,0.1)"
			    ]
			]
			let series = []
			let yAxis = []
			for (let i = 0; i < data.length; i++) {
			    series.push({
			        name: "",
			        type: "pie",
			        clockWise: false, //顺时加载
			        hoverAnimation: false, //鼠标移入变大
			        radius: [60 - i * 12 + "%", 50 - i *12 + "%"],
			         center: ["35%", "40%"],
			        label: {
			            show: false
			        },
			        itemStyle: {
			            label: {
			                show: true
			            },
			            labelLine: {
			                show: true
			            },
			            borderWidth: 10
			        },
			        label: {
			        	 show: false,
		                formatter: '{b|{b}}\n {c}%  ',
		                rich: {
		                    b: {
		                        fontSize: 16,
		                        lineHeight: 30
		                    },
		                    
		                }
		            },
			        data: [{
			                value: data[i].value,
			                name: data[i].name,
			            },
			            {
			                value: 100 - data[i].value,
			                name: "",
			                itemStyle: {
			                    color: 'transparent',
			                },
			                tooltip: {
			                    show: false
			                },
			                hoverAnimation: false
			            }
			        ]
			    })
			    series.push({
			        name: "",
			        type: "pie",
			        silent: true,
			        z: 1,
			        clockWise: false, //顺时加载
			        hoverAnimation: false, //鼠标移入变大
			        radius: [60 - i * 12 + "%", 50- i *12 + "%"],
			        center: ["35%", "40%"],
			        label: {
			            show: false
			        },
			   
			        itemStyle: {
			            label: {
			                show: false
			            },
			            labelLine: {
			                show: false
			            },
			            borderWidth: 5
			        },
			        data: [{
			                value: 7.5,
			                itemStyle: {
			                    color: color[1][i],
			                },
			                tooltip: {
			                    show: false
			                },
			                hoverAnimation: false
			            },
			            {
			                value: 0,
			                itemStyle: {
			                    color: "rgba(0,0,0,0)",
			                    borderWidth: 0
			                },
			                tooltip: {
			                    show: false
			                },
			                hoverAnimation: false
			            }
			        ]
			    })
			    yAxis.push(data[i].value+"%")
			}
			option = {
					
			    color: color[0],
			    legend: {
			        show: true,
			       icon: "circle",
				   top: "10%",
				    left: "60%",
			        data: name,
			        orient:'vertical',
			        formatter: (name) => {
			            return (
			                "{title|" + name + "}\n{value|" + data.find((item) => {
			                    return item.name == name
			                }).value + "}{value|%}"
			            );
			        },
			        textStyle: {
			            rich: {
			                title: {
			                    fontSize: 16,
			                    lineHeight: 15,
			                    color: "#fff"
			                },
			                value: {
			                    fontSize: 14,
			                    lineHeight: 20,
			                    color: "#fff"
			                }
			            }
			        }
			    },
			    tooltip: {
			        show: true,
			        trigger: "item",
			        formatter: "{a}<br>{b}:{c}({d}%)"
			    },
			    grid: {
			       top: "4%",
					 left: "34%",
					 width:"40%",
					 height:"21%",
			        containLabel: false
			    },
			    yAxis: [{
			        type: "category",
			        inverse: true,
			        axisLine: {
			            show: false
			        },
			        axisTick: {
			            show: false
			        },
			        axisLabel: {
			            interval: 0,
			            inside: true,
			            textStyle: {
			                color: "#fff",
			                fontSize: 14
			            },
			            show: true
			        },
			        data: yAxis
			    }],
			    xAxis: [{
			        show: false,
			    }],
			    series: series
			};
		 if (option && typeof option === "object") {
			 myChart.clear();
			 myChart.setOption(option, true);
		 }
			}
		});
	}
	
	function  getChartInit6(prjid,dom){
		$.request({
			url : $$pageContextPath+'mainScreen/scre/Getjlwgl?prjid='+prjid,
			success : function(response){
		var yds = response.parameters.jlbzt;
		var num = response.parameters.num;
	    var myChart = echarts.init(dom);
		var option = {
		    tooltip: {
		        trigger: 'axis',
		        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
		            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		        }
		    },
		    grid: {
		        left: '3%',
		        right: '4%',
		        bottom: '3%',
		        top:'5%',
		        containLabel: true
		    },
		    xAxis: [
		        {
		            type: 'category',
		            data: yds,
		            axisLabel:{
                     textStyle:{
                         color:"white"
                     }
                 }
		        }
		    ],
		    yAxis: [
		        {
		        	axisLabel: {
		        		formatter: '{value}',
		        		color: '#e2e9ff',
		        	},
			        axisLine: {
			            show: false,
			            lineStyle: {
			                color: 'rgba(255,255,255,1)'
			            }
			        },
			        splitLine: {
			            lineStyle: {
			                color: 'rgba(255,255,255,0.12)'
			            }
			        }
		        }
		    ],
		    series: [
		        {
		            name: '完成数',
		            type: 'bar',
		            barWidth: '20%',
		            emphasis: {
		                focus: 'series'
		            },
		            itemStyle:{
		            	normal:{
		            		label: {
								show: true, //开启显示
								position: 'top', //在上方显示
								textStyle: { //数值样式
									color: 'white',
									fontSize: 16
								}
							},
		            		color:'#4ad2ff'
		            	}
                    },
		            data: num,
		        },
		    ]
		};
		myChart.setOption(option, true);
			}})
	 	
	}
	