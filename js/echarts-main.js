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