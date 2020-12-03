var myChart = echarts.init(document.getElementById('book-chart'));
var colors = ['#81b214', '#FF8700', '#FFa540', '#fadcac', '#ffbd73'];
var bgColor = '#206a5d';
var txtColor = '#ffbd73';

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
        month:'1月',
        book:[]
    },
    {
        month:'2月',
        book:[]
    },
    {
        month:'3月',
        book:[
            {
                name:'生活是很好玩的',
                author:'汪曾祺',
                type:'散文',
                star:'3',
                kind:'非虚构'
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
                star:'5',
                kind:'虚构'
            },
            {
                name:'奔跑吧！梅勒斯',
                author:'太宰治',
                type:'小说',
                star:'3',
                kind:'虚构'
            },
            {
                name:'维庸之妻',
                author:'太宰治',
                type:'小说',
                star:'4',
                kind:'虚构'
            },
            {
                name:'算法图解',
                author:'Aditya Bhargav',
                type:'技术',
                star:'4',
                kind:'非虚构'
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
                star:'4',
                kind:'虚构'
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
                star:'5',
                kind:'虚构'
            },
            {
                name:'半小时漫画宋词',
                author:'陈磊',
                type:'其他',
                star:'3',
                kind:'非虚构'
            },
            {
                name:'斜阳',
                author:'太宰治',
                type:'小说',
                star:'4',
                kind:'虚构'
            }
        ]
    },
    {
        month:'7月',
        book:[
            {
                name:'七个平行世界的我',
                author:'小岩井',
                type:'小说',
                star:'2',
                kind:'虚构'
            },
            {
                name:'十一字谜案',
                author:'东野圭吾',
                type:'小说',
                star:'3',
                kind:'虚构'
            },
            {
                name:'情迷佛罗伦萨',
                author:'毛姆',
                type:'小说',
                star:'4',
                kind:'虚构'
            }
        ]
    },
    {
        month:'8月',
        book:[
            {
                name:'万历十五年',
                author:'黄仁宇',
                type:'历史',
                star:'5',
                kind:'非虚构'
            },
            {
                name:'rework',
                author:'Jason Fried & David Heinemeier Hansson',
                type:'企业管理',
                star:'2',
                kind:'非虚构'
            }
        ]
    },
    {
        month:'9月',
        book:[
            {
                name:'世界重启',
                author:'路易斯·达特内尔',
                type:'其他',
                star:'4',
                kind:'非虚构'
            },
            {
                name:'沉默的巡游',
                author:'东野圭吾',
                type:'小说',
                star:'4',
                kind:'虚构'
            }
        ]
    },
    {
        month:'10月',
        book:[
            {
                name:'山里的糖果',
                author:'邓安庆',
                type:'散文',
                star:'4',
                kind:'非虚构'
            },
            {
                name:'阿勒泰的角落',
                author:'李娟',
                type:'散文',
                star:'4',
                kind:'非虚构'
            },
            {
                name:'代码大全',
                author:'史蒂夫·迈克康奈尔',
                type:'技术',
                star:'5',
                kind:'非虚构'
            },
            {
                name:'纸上王国',
                author:'邓安庆',
                type:'散文',
                star:'3',
                kind:'非虚构'
            }
        ]
    },
    {
        month:'11月',
        book:[
            {
                name:'山月记',
                author:'中岛敦',
                type:'小说',
                star:'5',
                kind:'虚构'
            },
            {
                name:'rework2',
                author:'Jason Fried & David Heinemeier Hansson',
                type:'企业管理',
                star:'3',
                kind:'非虚构'
            },
            {
                name:'东京老铺',
                author:'Mateusz Urbanowicz',
                type:'插画集',
                star:'4',
                kind:'非虚构'
            }
        ]
    }
]

let allBookList = []
baseData.forEach(item=>{
    allBookList = [...allBookList,...item.book]
})

// 旭日图
let kindList = Array.from(new Set(allBookList.map(item=>item.kind)))
let sunburstData = kindList.map((kind,i)=>{
    let mylist = allBookList.filter(e=>e.kind == kind)
    return {
        name:kind,
        itemStyle: {
            color: colors[i]
        },
        children: setList(mylist)
    }
})

function setList(list){
    let typeList = Array.from(new Set(list.map(item=>item.type)))

    let resList = typeList.map((item,index)=>{
        let childrenlist = list.filter(e=>e.type == item).sort((a,b)=> b.star - a.star)
        let starList = Array.from(new Set(childrenlist.map(item=>item.star)))
        return {
            name:item,
            itemStyle:{
                color: colors[index]
            },
            children:starList.map(star=>{
                return {
                    name:star + '☆',
                    children:childrenlist.filter(ss=>ss.star == star)
                }
            })
        }
    })

    return resList
}

for (var j = 0; j < sunburstData.length; ++j) {
    var level1 = sunburstData[j].children;
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
            color: sunburstData[j].itemStyle.color
        };
    }
}

// 饼图
let pieData = Array.from(new Set(allBookList.map(item=>item.star))).sort((a,b)=> b - a).map(star=>{
    return {
        name: star + '☆',
        value: allBookList.filter(e=>e.star == star).length
    }
})

// 柱状图
let barXData = baseData.map(item=>item.month)
let barData = baseData.map(item=>item.book.length)
const barMaxData = [...barData].sort((a,b)=>b-a)[0]

option = {
    title:{
        text:'2020读书统计',
        left: 'center',
        top:20,
        textStyle:{
            color:'white'
        },
        subtext: `共计：${allBookList.length}本`,
    },
    backgroundColor: bgColor,
    color: colors,
    xAxis: {
        type: 'category',
        data: barXData,
        axisLine:{ 
            lineStyle:{
                color: txtColor
            }
        },
        axisTick:{ show:false},
        splitLine:{ show:false},
        axisLabel:{ 
            color:txtColor
        },
    },
    yAxis: {
        type: 'value',
        axisLine:{ show:false},
        axisTick:{ show:false},
        splitLine:{ show:false},
        axisLabel:{ show: false},
    },
    grid:{
        top:'85%',
    },
    series: [
        {
            type: 'sunburst',
            center: ['50%', '48%'],
            data: sunburstData,
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
        },
        {
            type: 'pie',
            center: [120, 100],
            radius: [25, 35],
            color: [colors[0],colors[1],colors[2],colors[3]],
            data: pieData,
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
        },
        {
            data: barData.map(item=>{
                if(item == barMaxData){
                    return {
                        value: item,
                        itemStyle: {
                            color: '#ec5858'
                        }
                    }
                }else{
                    return item
                }
            }),
            type: 'bar',
            barMaxWidth: 15,
            label:{
                show:true,
                position: 'top'
            }
        }
    ]
};
myChart.setOption(option);