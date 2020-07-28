// 主页左下echarts
option1_first = {
    grid: {
        left: '5%',
        right: '5%',
        bottom: '5%',
        top: '10%',
        containLabel: true
    },
    // tooltip: {
    //     trigger: 'axis',
    //     axisPointer: {
    //         type: 'none'
    //     },
    //     formatter: function(params) {
    //         return params[0].name + '<br/>' +
    //             "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" +
    //             params[0].seriesName + ' : ' + Number((params[0].value.toFixed(4) / 10000).toFixed(2)).toLocaleString() + ' 万元<br/>'
    //     }
    // },
    // backgroundColor: 'rgb(20,28,52)',
    xAxis: {
        show: false,
        type: 'value'
    },
    yAxis: [{
        type: 'category',
        inverse: true,
        axisLabel: {
            show: true,
            textStyle: {
                color: '#fff'
            },
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        data: ['垃圾桶', '停车位', '烟感', '温感', '水箱', '闸机', '井盖']
    }, {
        type: 'category',
        inverse: true,
        axisTick: 'none',
        axisLine: 'none',
        show: true,
        axisLabel: {
            textStyle: {
                color: '#ffffff',
                fontSize: '12'
            },
            formatter: function (value) {
                if (value >= 10000) {
                    return (value / 10000).toLocaleString();
                } else {
                    return value;
                }
            },
        },
        data: [14, 14, 14, 14, 14, 14, 14]
    }],
    series: [{
        name: '金额',
        type: 'bar',
        zlevel: 1,
        itemStyle: {
            normal: {
                barBorderRadius: 30,
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: 'rgb(57,89,255,1)'
                }, {
                    offset: 1,
                    color: 'rgb(46,200,207,1)'
                }]),
            },
        },
        barWidth: 20,
        data: [50000000, 22000000, 10000000, 5000000, 1]
    },
    {
        name: '背景',
        type: 'bar',
        barWidth: 18,
        barGap: '-100%',
        data: [50000000, 50000000, 50000000, 50000000, 1],
        itemStyle: {
            normal: {
                color: 'rgba(24,31,68,1)',
                barBorderRadius: 30,
            }
        },
    },
    ]
};

option2_first = {
    // title: {
    //     text: '一周内人员出入总数变化图',
    //     textStyle: {
    //         fontSize: 25,
    //         fontWeight: 'normal',
    //         color: '#fff',
    //     },
    //     x: 'center'
    // },
    // backgroundColor: "#05224d",
    tooltip: {},
    grid: {
        top: '8%',
        left: '1%',
        right: '1%',
        bottom: '8%',
        containLabel: true,
    },
    legend: {
        itemGap: 50,
        data: ['人员出入总数'],
        textStyle: {
            color: '#f9f9f9',
            borderColor: '#fff'
        },
    },
    xAxis: [{
        type: 'category',
        boundaryGap: true,
        axisLine: { //坐标轴轴线相关设置。数学上的x轴
            show: true,
            lineStyle: {
                color: '#f9f9f9'
            },
        },
        axisLabel: { //坐标轴刻度标签的相关设置
            textStyle: {
                color: '#d1e6eb',
                margin: 15,
            },
        },
        axisTick: {
            show: false,
        },
        data: ['2020-2-17', '2020-2-17', '2020-2-17', '2020-2-17', '2020-2-17', '2020-2-17', '2020-2-17',],
    }],
    yAxis: [{
        type: 'value',
        min: 0,
        // max: 140,
        splitNumber: 7,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#0a3256'
            }
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            margin: 20,
            textStyle: {
                color: '#d1e6eb',

            },
        },
        axisTick: {
            show: false,
        },
    }],
    series: [{
        name: '注册总量',
        type: 'line',
        smooth: true, //是否平滑曲线显示
        // 			symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
        showAllSymbol: true,
        symbol: 'emptyCircle',
        symbolSize: 6,
        lineStyle: {
            normal: {
                color: "#28ffb3", // 线条颜色
            },
            borderColor: '#f0f'
        },
        label: {
            show: true,
            position: 'top',
            textStyle: {
                color: '#fff',
            }
        },
        itemStyle: {
            normal: {
                color: "#28ffb3",

            }
        },
        tooltip: {
            show: false
        },
        areaStyle: { //区域填充样式
            normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0,154,120,1)'
                },
                {
                    offset: 1,
                    color: 'rgba(0,0,0, 0)'
                }
                ], false),
                shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
                shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
            }
        },
        data: [100, 120, 110, 60, 70, 130, 150]
    }
    ]
};

// 第二页图表
option1_second = {
    // backgroundColor: "#ffffff",
    color: ["#37A2DA"],
    radar: {
        shape: 'circle',
        name: {
            textStyle: {
                color: '#FFFFFF',
            }
        },
        splitLine: {
            lineStyle: {
                color: [
                    'rgba(86,130,245,0.2)', 'rgba(54,77，202,0.2)',
                    'rgba(86,130,245,0.2)', 'rgba(54,77，202,0.2)',
                    'rgba(86,130,245,0.2)', 'rgba(54,77，202,0.2)',
                ].reverse()
            }
        },
        splitArea: {
            areaStyle: {
                color: [
                    "rgba(0, 104, 183, 0.3)",
                    "rgba(0, 104, 183, 0.5)",
                    "rgba(0, 255, 255, 0.4)"
                ],
                shadowColor: 'rgba(0, 0, 0, 0.3)'
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(86,130,245,0.2)'
            }
        },
        indicator: [{
            name: '1F',
            max: 150
        },
        {
            name: '2F',
            max: 150
        },
        {
            name: '3F',
            max: 150
        },
        {
            name: '4F',
            max: 150
        },
        {
            name: '5F',
            max: 150
        },
        {
            name: '6F',
            max: 150
        },
        {
            name: '7F',
            max: 150
        },
        {
            name: '8F',
            max: 150
        },
        {
            name: '9F',
            max: 150
        },
        ]
    },
    series: [{
        type: 'radar',
        data: [{
            value: [120, 106, 113, 107, 126, 137, 90, 99, 50],
            name: '人数',
            itemStyle: {
                normal: {
                    color: 'rgba(0, 255, 255, 0.4)'
                }
            },
            areaStyle: {
                normal: {
                    color: 'rgba(0, 255, 255, 0.4)'
                }
            }
        }]
    }]
}

option2_second = {
    // backgroundColor: '#00265f',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['进', '出'],
        align: 'right',
        right: 10,
        textStyle: {
            color: "#fff"
        },
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 35
    },
    // grid: {
    //     left: '3%',
    //     right: '4%',
    //     bottom: '3%',
    //     containLabel: true
    // },
    xAxis: [{
        type: 'category',
        data: ['08:00',
            '09:00',
            '10:00',
            '11:00',
            '12:00',
            '13:00',
            '14:00',
            '15:00',
            '16:00'
        ],
        axisLine: {
            show: true,
            lineStyle: {
                color: "#063374",
                width: 1,
                type: "solid"
            }
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#00c7ff",
            }
        },
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
            formatter: '{value}'
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: "#00c7ff",
                width: 1,
                type: "solid"
            },
        },
        splitLine: {
            lineStyle: {
                color: "#063374",
            }
        }
    }],
    series: [{
        name: '进',
        type: 'bar',
        data: [20, 50, 80, 58, 83, 68, 57, 80, 42, 66],
        barWidth: 5, //柱子宽度
        // barGap: 1, //柱子之间间距
        itemStyle: {
            normal: {
                color: '#008AFF',
                opacity: 1,
            }
        }
    }, {
        name: '出',
        type: 'bar',
        data: [50, 70, 60, 61, 75, 87, 60, 62, 86, 46],
        barWidth: 5,
        // barGap: 1,
        itemStyle: {
            normal: {
                color: '#FF9000'
            }
        }
    }]
};


var value;
option1_third = {
    grid: {
        left: '5%',
        right: '5%',
        bottom: '5%',
        top: '10%',
        containLabel: true
    },
    // tooltip: {
    //     trigger: 'axis',
    //     axisPointer: {
    //         type: 'none'
    //     },
    //     formatter: function(params) {
    //         return params[0].name + '<br/>' +
    //             "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" +
    //             params[0].seriesName + ' : ' + Number((params[0].value.toFixed(4) / 10000).toFixed(2)).toLocaleString() + ' 万元<br/>'
    //     }
    // },
    // backgroundColor: 'rgb(20,28,52)',
    xAxis: {
        show: false,
        type: 'value'
    },
    yAxis: [{
        type: 'category',
        inverse: true,
        axisLabel: {
            show: true,
            textStyle: {
                color: '#fff'
            },
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        data: ['停车位']
    }, {
        type: 'category',
        inverse: true,
        axisTick: 'none',
        axisLine: 'none',
        show: true,
        axisLabel: {
            textStyle: {
                color: '#ffffff',
                fontSize: '12'
            },
            formatter: function (value) {
                return value + ' / 50';
            },
        },
        data: [35]
    }],
    series: [{
        // name: '金额',
        type: 'bar',
        zlevel: 1,
        itemStyle: {
            normal: {
                barBorderRadius: 30,
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: 'rgb(57,89,255,1)'
                }, {
                    offset: 1,
                    color: 'rgb(46,200,207,1)'
                }]),
            },
        },
        barWidth: 18,
        data: [35]
    },
    {
        name: '背景',
        type: 'bar',
        barWidth: 18,
        barGap: '-100%',
        data: [50],
        itemStyle: {
            normal: {
                color: 'rgba(24,31,68,1)',
                barBorderRadius: 30,
            }
        },
    },
    ]
};

var dataStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        shadowBlur: 0,
        shadowColor: '#203665'
    }
};
option2_third = {
    // backgroundColor: "#20263f",
    series: [{
        name: '第一个圆环',
        type: 'pie',
        clockWise: false,
        radius: [50, 55],
        itemStyle: dataStyle,
        hoverAnimation: false,
        center: ['15%', '50%'],
        data: [{
            value: 328,
            label: {
                normal: {
                    rich: {
                        a: {
                            color: '#00ADFF',
                            align: 'center',
                            fontSize: 20,
                            fontWeight: "bold"
                        },
                        b: {
                            color: '#fff',
                            align: 'center',
                            fontSize: 16
                        }
                    },
                    formatter: function (params) {
                        return "{a|" + params.value + "}";
                    },
                    position: 'center',
                    show: true,
                    textStyle: {
                        fontSize: '14',
                        fontWeight: 'normal',
                        color: '#fff'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#2c6cc4',
                    shadowColor: '#2c6cc4',
                    shadowBlur: 0
                }
            }
        }, {
            value: 75,
            name: 'invisible',
            itemStyle: {
                normal: {
                    color: '#24375c'
                },
                emphasis: {
                    color: '#24375c'
                }
            }
        }]
    }, {
        name: '第二个圆环',
        type: 'pie',
        clockWise: false,
        radius: [50, 55],
        itemStyle: dataStyle,
        hoverAnimation: false,
        center: ['50%', '50%'],
        data: [{
            value: 25,
            label: {
                normal: {
                    rich: {
                        a: {
                            color: '#00FFFF',
                            align: 'center',
                            fontSize: 20,
                            fontWeight: "bold"
                        },
                        b: {
                            color: '#fff',
                            align: 'center',
                            fontSize: 16
                        }
                    },
                    formatter: function (params) {
                        return "{a|" + params.value + "}";
                    },
                    position: 'center',
                    show: true,
                    textStyle: {
                        fontSize: '14',
                        fontWeight: 'normal',
                        color: '#fff'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#00FFFF',
                    shadowColor: '#00FFFF',
                    shadowBlur: 0
                }
            }
        }, {
            value: 50,
            name: 'invisible',
            itemStyle: {
                normal: {
                    color: '#24375c'
                },
                emphasis: {
                    color: '#24375c'
                }
            }
        }]
    }, {
        name: '第三个圆环',
        type: 'pie',
        clockWise: false,
        radius: [50, 55],
        itemStyle: dataStyle,
        hoverAnimation: false,
        center: ['85%', '50%'],
        data: [{
            value: 10,
            label: {
                normal: {
                    rich: {
                        a: {
                            color: '#FF6767',
                            align: 'center',
                            fontSize: 20,
                            fontWeight: "bold"
                        },
                        b: {
                            color: '#fff',
                            align: 'center',
                            fontSize: 16
                        }
                    },
                    formatter: function (params) {
                        return "{a|" + params.value + "}";//"{b|缺报统计}\n\n"+"{a|"+params.value+"个}"+"\n\n{b|增长2%}";
                    },
                    position: 'center',
                    show: true,
                    textStyle: {
                        fontSize: '14',
                        fontWeight: 'normal',
                        color: '#fff'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#FF6767',
                    shadowColor: '#FF6767',
                    shadowBlur: 0
                }
            }
        }, {
            value: 25,
            name: 'invisible',
            itemStyle: {
                normal: {
                    color: '#24375c'
                },
                emphasis: {
                    color: '#24375c'
                }
            }
        }]
    }]
}

option3_third = {
    // backgroundColor: "#0f375f",
    xAxis: {
        type: 'category',
        data: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '22:00'],
        axisLine: { //  改变x轴颜色
            lineStyle: {
                color: '#26D9FF'
            }
        },
        axisLabel: { //  改变x轴字体颜色和大小
            textStyle: {
                color: "rgba(250,250,250,0.6)",
                fontSize: 16
            },
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: ['#315070'],
                width: 1,
                type: 'solid'
            }
        }
    },
    yAxis: {
        type: 'value',
        axisLine: { //  改变y轴颜色
            show: false,
            lineStyle: {
                color: '#26D9FF'
            }
        },
        axisLabel: { //  改变y轴字体颜色和大小
            //formatter: '{value} m³ ', //  给y轴添加单位
            textStyle: {
                color: "rgba(250,250,250,0.6)",
                fontSize: 16
            },
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: ['#315070'],
                width: 1,
                type: 'solid'
            }
        }
    },
    series: [{
        smooth: true,
        symbol: 'circle',
        symbolSize: 7,
        markPoint: {
            symbol: "circle"
        },
        // markLine:{
        //     symbol:"none",
        //     label:{
        //         normal:{
        //             color:"#fff",
        //             backgroundColor: 'rgba(228,0,54,70)',
        //             fontSize:16,
        //             padding: 4,
        //             borderRadius:4,
        //             show:true,
        //             position:'start',
        //             distance:4
        //         }
        //     },
        //     lineStyle:{
        //         type:"solid",
        //         color:'rgba(228,0,54,60)',
        //         width:2
        //     },
        //     data: [{
        //         yAxis: 400
        //     }]
        // },
        data: [220, 332, 601, 234, 490, 730, 590],
        type: 'line',
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    color: "#fff",
                    fontSize: 12
                },
                color: "#294E8F",
                borderColor: "3D7EEB",
                borderWidth: 2,
            }
        },
        lineStyle: {
            normal: {
                width: 2,
                color: "#327BFA",
                shadowColor: "#3D7EEB",
                shadowBlur: 10
            }
        },
        areaStyle: {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0.5,
                    color: 'rgba(61,126,235,0.5)' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: 'rgba(61,126,235,0)' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            }
        }
    }]
};


const colorList = ["#9E87FF", '#73DDFF', '#fe9a8b', '#F56948', '#9E87FF']
option1_fourth = {
    // backgroundColor: '#fff',
    // title: {
    //     text: '全国6月销售统计',
    //     textStyle: {
    //         fontSize:12,
    //         fontWeight: 400
    //     },
    //     left:'center',
    //     top: '5%'
    // },
    legend: {
        icon: 'circle',
        top: '5%',
        right: '5%',
        itemWidth: 6,
        itemGap: 20,
        textStyle: {
            color: '#556677'
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            label: {
                show: true,
                backgroundColor: '#fff',
                color: '#556677',
                borderColor: 'rgba(0,0,0,0)',
                shadowColor: 'rgba(0,0,0,0)',
                shadowOffsetY: 0
            },
            lineStyle: {
                width: 0
            }
        },
        backgroundColor: '#fff',
        textStyle: {
            color: '#5c6c7c'
        },
        padding: [10, 10],
        extraCssText: 'box-shadow: 1px 0 2px 0 rgba(163,163,163,0.5)'
    },
    grid: {
        top: '15%'
    },
    xAxis: [{
        type: 'category',
        data: ['北京', '上海', '广州', '深圳', '香港', '澳门', '台湾'],
        axisLine: {
            lineStyle: {
                color: '#DCE2E8'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            textStyle: {
                color: '#556677'
            },
            margin: 15
        },
        axisPointer: {
            label: {
                padding: [11, 5, 7],
                backgroundColor: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#fff' // 0% 处的颜色
                    }, {
                        offset: 0.9,
                        color: '#fff' // 0% 处的颜色
                    }, {
                        offset: 0.9,
                        color: '#33c0cd' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#33c0cd' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            }
        },
        boundaryGap: false
    }],
    yAxis: [{
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#DCE2E8'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#556677'
            }
        },
        splitLine: {
            show: false
        }
    }, {
        type: 'value',
        position: 'right',
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#556677'
            },
            formatter: '{value}'
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#DCE2E8'
            }
        },
        splitLine: {
            show: false
        }
    }],
    series: [{
        name: 'Adidas',
        type: 'line',
        data: [10, 10, 30, 12, 15, 3, 7],
        symbolSize: 1,
        symbol: 'circle',
        smooth: true,
        yAxisIndex: 0,
        showSymbol: false,
        lineStyle: {
            width: 2,
            color: '#00FCFF',
            shadowColor: 'rgba(158,135,255, 0.3)',
            shadowBlur: 10,
            shadowOffsetY: 20
        },
        itemStyle: {
            normal: {
                color: colorList[0],
                borderColor: colorList[0]
            }
        }
    }, {
        name: 'Nike',
        type: 'line',
        data: [5, 12, 11, 14, 25, 16, 10],
        symbolSize: 1,
        symbol: 'circle',
        smooth: true,
        yAxisIndex: 0,
        showSymbol: false,
        lineStyle: {
            width: 2,
            color: '#FFD200',
            shadowColor: 'rgba(115,221,255, 0.3)',
            shadowBlur: 10,
            shadowOffsetY: 20
        },
        itemStyle: {
            normal: {
                color: colorList[1],
                borderColor: colorList[1]
            }
        }
    },

    ]
};


var xAxisData = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],  //时间轴和柱状x轴数据
dx = ["6", "9", "30", "15", "20", "40", "15", "20", "33", "35", "12", "24"];   //仪表盘数据
dx2 = ["77", "85", "60", "50", "20", "40", "60", "72", "50", "33", "55", "66"];   //仪表盘数据

var os = [];
for (var i = 0; i < dx.length; i++) {
    var series = [];
    series.push({
        data: [{
            value: dx[i],
            name: '照明'
        }]
    });

    series.push({
        data: [{
            value: dx2[i],
            name: '空调'
        }]
    });

    os.push({
        series: series
    });
}

var option2_fourth = {
    baseOption: {
        timeline: {
            axisType: 'category',
            autoPlay: true,
            bottom: 10,
            left: 30,
            data: xAxisData,
            lineStyle: {
                color: '#FFFFFF',
                width: 2,
            },
            label: {
                color: "#019aba"
            },
            checkpointStyle: {
                symbol: 'diamond',
                color: '#00FFFF',
                borderColor: '#00FFFF'
            }
        },
        // backgroundColor:'#384756',
        color: ['#019aba'],
        // title: {
        //     text: '说明',
        //     textStyle: {
        //         fontSize: 8,
        //         // fontWeight: 'bold',

        //     },
        // },

        tooltip: {
            show: true,
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
            },
        },

        series: [
            {
                type: 'gauge',
                center: ['20%', '40%'],
                radius: '60%',
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                axisLine: {            // 坐标轴线
                    show: true,        // 默认显示，属性show控制显示与否
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: [[0.5, '#00EFC9'], [1, '#00BCF2']],
                        width: 10
                    }
                },
                axisTick: {            // 坐标轴小标记
                    show: true,        // 属性show控制显示与否，默认不显示
                    splitNumber: 10,    // 每份split细分多少段
                    length: 3,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: '#fff',
                        width: 1,
                        type: 'solid'
                    }
                },
                splitLine: {           // 分隔线
                    show: true,        // 默认显示，属性show控制显示与否
                    length: 15,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        color: '#fff',
                        width: 3,
                        type: 'solid'
                    }
                },
                pointer: {
                    width: 5
                },
                title: {
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontSize: 10,
                        color: '#fff',
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                detail: {
                    formatter: '{value}%',
                    textStyle: {
                        fontSize: 10,
                        fontWeight: "",
                        color: '#00BCF2',
                    }
                },

            },
            {
                type: 'gauge',
                center: ['75%', '40%'],
                radius: '60%',
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                axisLine: {            // 坐标轴线
                    show: true,        // 默认显示，属性show控制显示与否
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: [[0.5, '#00EFC9'], [1, '#00BCF2']],
                        width: 10
                    }
                },
                axisTick: {            // 坐标轴小标记
                    show: true,        // 属性show控制显示与否，默认不显示
                    splitNumber: 10,    // 每份split细分多少段
                    length: 3,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: '#fff',
                        width: 1,
                        type: 'solid'
                    }
                },
                splitLine: {           // 分隔线
                    show: true,        // 默认显示，属性show控制显示与否
                    length: 15,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        color: '#fff',
                        width: 3,
                        type: 'solid'
                    }
                },
                pointer: {
                    width: 5
                },
                title: {
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontSize: 10,
                        color: '#fff',
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                detail: {
                    formatter: '{value}%',
                    textStyle: {
                        fontSize: 10,
                        fontWeight: "",
                        color: '#00BCF2',
                    }
                },

            }]
    },
    options: os
};