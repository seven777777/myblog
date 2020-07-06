var myChart = echarts.init(document.getElementById('book-chart'));
var colors = ['#FFAE57', '#FF7853', '#EA5151', '#CC3F57', '#9A2555'];
var bgColor = '#2E2733';
var textColor = '#a39990';
var contrastColor = '#FF7777';

var itemStyle = {
    star5: {
        color: colors[0]
    },
    star4: {
        color: colors[1]
    },
    star3: {
        color: colors[2]
    },
    star2: {
        color: colors[3]
    }
};

var baseData = [
    {
        month:'3月',
        book:[
            {
                name:'生活是很好玩的',
                author:'汪曾祺',
                type:'散文',
                star:'3'
            }
        ]
    },
    {
        month:'4月',
        book:[
            {
                name:'人间失格',
                author:'太宰治',
                type:'小说',
                star:'5'
            },
            {
                name:'奔跑吧！梅勒斯',
                author:'太宰治',
                type:'小说',
                star:'3'
            },
            {
                name:'维庸之妻',
                author:'太宰治',
                type:'小说',
                star:'4'
            },
            {
                name:'算法图解',
                author:'Aditya Bhargav',
                type:'技术',
                star:'4'
            }
        ]
    },
    {
        month:'5月',
        book:[
            {
                name:'克莱因壶',
                author:'冈嶋二人',
                type:'小说',
                star:'4'
            }
        ]
    },
    {
        month:'6月',
        book:[
            {
                name:'夜莺与玫瑰',
                author:'王尔德',
                type:'童话',
                star:'5'
            },
            {
                name:'半小时漫画宋词',
                author:'陈磊',
                type:'其他',
                star:'3'
            },
            {
                name:'斜阳',
                author:'太宰治',
                type:'小说',
                star:'4'
            }
        ]
    }
]
var data = [
    {
        name: '虚构',
        itemStyle: {
            color: colors[1]
        },
        children: [{
            name: '小说',
            children: [{
                name: '5☆',
                children: [{
                    name: '人间失格'
                }, {
                    name: '奔跑吧！梅勒斯'
                }, {
                    name: '维庸之妻'
                }, {
                    name: '克莱因壶'
                }, {
                    name: '夜莺与玫瑰'
                }, {
                    name: '斜阳'
                }, {
                    name: '半小时漫画宋词'
                }, {
                    name: '生活是很好玩的'
                }, {
                    name: '算法图解'
                }]
            }, {
                name: '4☆',
                children: [{
                    name: '虚无的十字架'
                }, {
                    name: '无声告白'
                }, {
                    name: '童年的终结'
                }]
            }, {
                name: '3☆',
                children: [{
                    name: '疯癫老人日记'
                }]
            }]
        }, {
            name: '其他',
            children: [{
                name: '5☆',
                children: [{
                    name: '纳博科夫短篇小说全集'
                }]
            }, {
                name: '4☆',
                children: [{
                    name: '安魂曲'
                }, {
                    name: '人生拼图版'
                }]
            }, {
                name: '3☆',
                children: [{
                    name: '比起爱你，我更需要你'
                }]
            }]
        }]
    }
]

for (var j = 0; j < data.length; ++j) {
    var level1 = data[j].children;
    for (var i = 0; i < level1.length; ++i) {
        var block = level1[i].children;
        var bookScore = [];
        var bookScoreId;
        for (var star = 0; star < block.length; ++star) {
            var style = (function (name) {
                switch (name) {
                    case '5☆':
                        bookScoreId = 0;
                        return itemStyle.star5;
                    case '4☆':
                        bookScoreId = 1;
                        return itemStyle.star4;
                    case '3☆':
                        bookScoreId = 2;
                        return itemStyle.star3;
                    case '2☆':
                        bookScoreId = 3;
                        return itemStyle.star2;
                }
            })(block[star].name);

            block[star].label = {
                color: style.color,
                downplay: {
                    opacity: 0.5
                }
            };

            if (block[star].children) {
                style = {
                    opacity: 1,
                    color: style.color
                };
                block[star].children.forEach(function (book) {
                    book.value = 1;
                    book.itemStyle = style;

                    book.label = {
                        color: style.color
                    };

                    var value = 1;
                    if (bookScoreId === 0 || bookScoreId === 3) {
                        value = 5;
                    }

                    if (bookScore[bookScoreId]) {
                        bookScore[bookScoreId].value += value;
                    }
                    else {
                        bookScore[bookScoreId] = {
                            color: colors[bookScoreId],
                            value: value
                        };
                    }
                });
            }
        }

        level1[i].itemStyle = {
            color: data[j].itemStyle.color
        };
    }
}

option = {
    title:{
        text:'2020读书统计',
        left: 'center',
        top:10,
        textStyle:{
            color:'white'
        }
    },
    backgroundColor: bgColor,
    color: colors,
    series: [{
        type: 'sunburst',
        center: ['50%', '48%'],
        data: data,
        sort: function (a, b) {
            if (a.depth === 1) {
                return b.getValue() - a.getValue();
            }
            else {
                return a.dataIndex - b.dataIndex;
            }
        },
        label: {
            rotate: 'radial',
            color: bgColor
        },
        itemStyle: {
            borderColor: bgColor,
            borderWidth: 2
        },
        levels: [{}, {
            r0: 0,
            r: 40,
            label: {
                rotate: 0
            }
        }, {
            r0: 40,
            r: 105
        }, {
            r0: 115,
            r: 140,
            itemStyle: {
                shadowBlur: 2,
                shadowColor: colors[2],
                color: 'transparent'
            },
            label: {
                rotate: 'tangential',
                fontSize: 10,
                color: colors[0]
            }
        }, {
            r0: 140,
            r: 145,
            itemStyle: {
                shadowBlur: 80,
                shadowColor: colors[0]
            },
            label: {
                position: 'outside',
                textShadowBlur: 5,
                textShadowColor: '#333',
            },
            downplay: {
                label: {
                    opacity: 0.5
                }
            }
        }]
    } , {
        type: 'pie',
        center: [120, 90],
        radius: [25, 35],
        color: [contrastColor, colors[0], colors[2], colors[3]],
        data: [{
            name: '5☆',
            value: 10
        }, {
            name: '4☆',
            value: 11
        }, {
            name: '3☆',
            value: 5
        }, {
            name: '2☆',
            value: 1
        }],
        label: {
            normal: {
                formatter: '{b}\n{c} 本'
            }
        },
        itemStyle: {
            normal: {
                borderWidth: 2,
                borderColor: bgColor
            }
        }
    }]
};
myChart.setOption(option);