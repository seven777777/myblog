/*
 * @Author: seven.zhang 
 * @Date: 2020-12-02 17:09:02 
 * @Last Modified by: seven.zhang
 * @Last Modified time: 2020-12-28 16:54:03
 */
var baseColors = ['#81b214', '#FF8700', '#FFa540', '#fadcac', '#ffbd73'];
var baseBgColor = '#206a5d';
var baseTxtColor = '#ffbd73';

// baseData数据结构
// [
//     {
//         month:'1月',
//         book:[
//             {
//                 name:'霍乱时期的爱情', //必须字段
//                 author:'加西亚·马尔克斯',
//                 type:'小说', //必须字段
//                 star:'5', //必须字段
//                 kind:'虚构' //必须字段
//             }
//         ]
//     },
// ]

function getReadSummaryChartOpt(baseData = [],chartData = {}){
    let { 
        title ,
        colors = baseColors,
        bgColor = baseBgColor,
        txtColor = baseTxtColor
    } = chartData

    let itemStyle = {
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

    let allBookList = []
    baseData.forEach(item=>{
        allBookList = [...allBookList,...item.book]
    })

    // 旭日图
    let kindList = Array.from(new Set(allBookList.map(item=>item.kind)))

    let setList = (list)=>{
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

    // 年度对比
    let compareXData = []
    let compareData = []
    for(let key in bookData){
        compareXData.push(key)
        let item = bookData[key]
        let _books = item.reduce((total,next)=>{
            return total.concat(next.book)
        },[])
        compareData.push(_books.length)
    }

    return {
        title:{
            text: title,
            left: 'center',
            top:20,
            textStyle:{
                color:'white'
            },
            subtext: `共计：${allBookList.length}本`,
        },
        backgroundColor: bgColor,
        color: colors,
        xAxis: [
            {
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
                gridIndex: 0
            },
            {
                type: 'value',
                axisLine:{ show:false},
                axisTick:{ show:false},
                splitLine:{ show:false},
                axisLabel:{ show: false},
                inverse:true,
                gridIndex: 1
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLine:{ show:false},
                axisTick:{ show:false},
                splitLine:{ show:false},
                axisLabel:{ show: false},
                gridIndex: 0
            },
            {
                type: 'category',
                data: compareXData,
                axisLine:{ 
                    lineStyle:{
                        color: txtColor
                    }
                },
                axisTick:{ show:false},
                splitLine:{ show:false},
                position:'right',
                axisLabel:{ 
                    color:txtColor
                },
                gridIndex: 1
            }
        ],
        grid:[
            { top:'85%',},
            { bottom:'80%',left:'80%',right:'8%'},
        ],
        toolbox:{
            // feature: {
            //     saveAsImage: {}
            // }
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
                                // color: '#ec5858'
                                color: colors[0]
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
            },
            {
                data: compareData,
                type: 'bar',
                barWidth: 15,
                xAxisIndex:1,
                yAxisIndex:1,
                label:{
                    show:true,
                },
                itemStyle:{
                    color: colors[1]
                }
            }
        ]
    }
}

function setResize(chartList){
    window.onresize = function () {
        for (var i = 0; i < chartList.length; ++i) {
            chartList[i].resize();
        }
    };
}

function setChartImg(id,imgUrl){
    var img = document.createElement('img');
    img.setAttribute('class', 'single-img');
    img.setAttribute('src', imgUrl);

    var a = document.createElement('a');
    a.setAttribute('href', imgUrl);
    a.setAttribute('target', '_blank');
    a.appendChild(img);

    var container = document.getElementById(id);
    container.style.height = 'auto';
    container.appendChild(a);
}