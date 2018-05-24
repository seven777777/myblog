---
layout: default
title: ECharts 使用小计
excerpt: 这里只写一些我在实际开发过程中用到过的属性，因为全部属性实在太多，就不一一列出来了，后续会持续更新新用到的属性。另外，之所以写这个文档，是因为ECharts官网的配置文档看起来实在是太费劲了。。。
---

<h2>{{ page.title }}</h2>

### 使用：
1. 引入ECharts的js文件
2. 封装方法

```
let ecExt = {};
ecExt.circleSp = (echarts, obj) => {
    return ((e,obj)=>{
        // 基于准备好的dom，初始化echarts实例
        const myChart = e.init(document.getElementById(obj.id));
        // 指定图表的配置项和数据
        const option = {
            
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        return myChart;
    })(echarts,obj);
}
```
3. 页面使用
```
let obj = {
    id:'domid',//用于承载图形的div
    //obj是在页面内封装好的用于设置option的对象
    //内容就是ECharts的一些属性配置
}
ecExt.circleSp(echarts,obj);
```


### 常见属性配置（option）
这里只写一些我在实际开发过程中用到过的属性，因为全部属性实在太多，就不一一列出来了，后续会持续更新新用到的属性

另外，之所以写这个文档，是因为ECharts官网的配置文档看起来实在是太费劲了。。。

==========================

写到一半发现一篇博客统计的挺完整的，所以拿来参考了，由于是16年的博客，所以可能现在会有些属性改变，所以就参照最新的ECharts配置文档进行了修改，参照博客地址如下：
https://blog.csdn.net/she_lover/article/details/51448967
```
option = {
    //图表标题
    title:{
        text:'',//主标题文字
        subtext:'',//副标题文字
        left/right/top/bottom:'',//控制位置
        itemGap: 8,//数值，主副标题纵向间隔，单位px，默认为10，
        textStyle:{},//主标题样式
        subtextStyle:{},//副标题样式
    },
    //图例组件
    legend:{
        data:[],//值，与series的name对应
        left/right/top/bottom:'',//控制组件位置
        orient: 'horizontal',// 布局方式，默认为水平布局，可选为：'horizontal' ¦ 'vertical'
        itemGap: 10,// 各个item之间的间隔，单位px，默认为10，
                    // 横向布局时为水平间隔，纵向布局时为纵向间隔
        itemWidth: 20,// 图例图形宽度
        itemHeight: 14,// 图例图形高度
        textStyle: {
            color: '#333'// 图例文字颜色
        }
    },
    //提示框
    tooltip:{
        trigger: '',// 触发类型，默认数据触发，可选为：'item' ¦ 'axis' ¦ 'none'
                    //item:数据项图形触发，多用于散点图、饼图等无类目轴的图表
                    //axis:坐标轴触发，多用于柱状图，折线图等会使用类目轴的图表
                    //none:什么都不触发
        padding: 5,// 提示内边距，单位px，默认各方向内边距为5，
                   // 接受数组分别设定上右下左边距，同css
        axisPointer : {// 坐标轴指示器，坐标轴触发有效
            type : 'line',// 默认为直线，可选为：'line' | 'shadow' | 'cross'
            lineStyle : {// 直线指示器样式设置
                color: '#48b',
                width: 2,
                type: 'solid'
            },
            shadowStyle : {// 阴影指示器样式设置
                width: 'auto',// 阴影大小
                color: 'rgba(150,150,150,0.3)'// 阴影颜色
            }
        },
        textStyle: {},//提示框浮层文本样式
        formatter:...,//浮层内容格式器
                    //字符串模板
                    //模板变量有 {a}, {b}，{c}，{d}，{e}，分别表示系列名，数据名，数据值等。 在 trigger 为 axis 的时候，会有多个系列的数据，此时可以通过 {a0}, {a1}, {a2} 这种后面加索引的方式表示系列的索引,详细见官网
                    //回调函数，详细见官网
        confine:true,//是否将提示框限制在图表区域内
        position:function (point, params, dom, rect, size) {//提示框浮层的位置，默认不设置时位置会跟随鼠标的位置。可以是数组形式，可以是回调函数形式
                    // 固定在顶部
                    return [point[0], '15%'];
                },
    },
    //区域缩放控制器
    dataZoom:{},// 用于区域缩放，从而能自由关注细节的数据信息，或者概览数据整体，或者去除离群点的影响。详细设置见官网
    //网格
    grid:{
        left/right/top/bottom:'',//控制组件离容器四边的距离
        containLabel: true,//grid 区域是否包含坐标轴的刻度标签。
    },
    //直角坐标系 grid 中的 x 轴， y 轴
    xAxis:{
        type:'category',//坐标轴类型,可选：value 数值轴,category 类目轴,time 时间轴,log 对数轴
        boundaryGap: false,//坐标轴两边留白策略
        data:[],
        axisLine: {},//坐标轴轴线相关设置
        splitLine: {},//分隔线设置
        axisTick: {},//坐标轴刻度设置
        axisLabel:{},//坐标轴刻度标签设置
    }，
    yAxis:{
        type:'value',//坐标轴类型,可选：value 数值轴,category 类目轴,time 时间轴,log 对数轴
        axisLine: {},//坐标轴轴线相关设置
        splitLine: {},//分隔线设置
        axisTick: {},//坐标轴刻度设置
        axisLabel:{},//坐标轴刻度标签设置
    }
    //极坐标系的角度轴
    angleAxis:{
        type:'category',//坐标轴类型,可选：value 数值轴,category 类目轴,time 时间轴,log 对数轴
        splitNumber:5,//坐标轴的分割段数,在类目轴中无效
        data:[],
        axisLine: {},//坐标轴轴线相关设置
        splitLine: {},//分隔线设置
        axisTick: {},//坐标轴刻度设置
        axisLabel:{},//坐标轴刻度标签设置
    },
    //极坐标系的径向轴
    radiusAxis: {
        axisLine: {},//坐标轴轴线相关设置
        splitLine: {},//分隔线设置
        axisTick: {},//坐标轴刻度设置
        axisLabel:{},//坐标轴刻度标签设置
    },
    //极坐标系，可以用于散点图和折线图
    polar: {
        center: ['50%', '50%'],//极坐标系的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标
        radius:"100%",//极坐标系的半径
    },
    //雷达图坐标系组件，只适用于雷达图
    radar: [
        {
            indicator:[{"text":"","value":8,"max":9},{"text":"","value":5],//雷达图的指示器，用来指定雷达图中的多个变量（维度）
            center: ['50%', '50%'],//中心（圆心）坐标
            radius: '100%',//半径
            splitNumber: 5,//指示器轴的分割段数
            shape: 'circle',//雷达图绘制类型，支持 'polygon' 和 'circle'
            nameGap:10,//指示器名称和指示器轴的距离。
            name: {//雷达图每个指示器名称的配置项
                formatter: '{value}',
                textStyle: {
                    color: '#aaaaaa'
                }
            },
            splitArea: {//坐标轴在 grid 区域中的分隔区域
                areaStyle: {
                    color: obj.radarColor
                }
            },
            axisLine: {//坐标轴轴线相关设置
                show:false,//是否显示坐标轴轴线
                lineStyle: {
                    color: obj.axisLineColor
                }
            },
            splitLine: {//坐标轴在 grid 区域中的分隔线
                lineStyle: {
                    color: obj.splitLineColor
                }
            }
        }
    ],
    //地理坐标系组件
    geo:{
        map: 'china',//地图类型
        label:{},//图形上的文本标签
        emphasis: {},//高亮状态下的多边形和标签样式
        roam: true,//是否开启鼠标缩放和平移漫游。默认不开启。
        itemStyle: {//地图区域的多边形 图形样式
            normal: {
                areaColor: '#efefef',
                borderColor: '#ccc'
            },
            emphasis: {
                areaColor: '#ddd'
            }
        }
    },
}
```
#### 折线图
```
option={
    tooltip:{},//可选，取决于有无提示框
    legend:{},//可选，取决于有无图例
    xAxis:{},//x轴设置
    yAxis:{},//y轴设置
    grid:{},//位置设置
    series:{
        type: 'line',
        symbol: 'emptyCircle',//标记的图形,默认为空心圆。可选：circle, rect, roundRect, triangle, diamond, pin, arrow
        symbolSize: 8,//标记的大小
        showSymbol: false,//是否显示 symbol, 如果 false 则只有在 tooltip hover 的时候显示
        data:[],//系列中的数据内容数组。数组项通常为具体的数据项
        label:{},//图形上的文本标签
        //折线拐点标志的样式 
        itemStyle : { 
            normal : {  
                color:'#1AB0FE',  
                lineStyle:{  
                    color:'#1AB0FE'  
                }  
            }  
        },
        //区域填充样式
        areaStyle: {
            type: 'default',
            //填充渐变色
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(26, 176, 254,0.4)'
            }, {
                offset: 1,
                color: 'rgba(26, 176, 254,0.1)'
            }])
        }
    }
}
```
#### 柱状/条形图
```
option={
    tooltip:{},//可选，取决于有无提示框
    legend:{},//可选，取决于有无图例
    xAxis:{},//x轴设置
    yAxis:{},//y轴设置
    grid:{},//位置设置
    series:{
        type:'bar',
        barMinHeight: 0,// 最小高度改为0
        barWidth: '8',// 默认自适应
        barGap: '30%',// 柱间距离，默认为柱形宽度的30%，可设固定值
        barCategoryGap : '20%',// 类目间柱形距离，默认为类目间距的20%，可设固定值
        //折线拐点标志的样式 
        itemStyle : { 
            normal : {  
                color:'#1AB0FE',  
                lineStyle:{  
                    color:'#1AB0FE'  
                }  
            }  
        },
    }
}
```
#### 饼图
```
option={
    series:{
        name:'',//系列名称，用于tooltip的显示，legend 的图例筛选
        type:'pie',
        radius: ['75%','100%'],//饼图的半径，数组的第一项是内半径，第二项是外半径。
        avoidLabelOverlap: true,//是否启用防止标签重叠策略，默认开启，在标签拥挤重叠的情况下会挪动各个标签的位置，防止标签间的重叠。
        hoverAnimation: false,//是否开启 hover 在扇区上的放大动画效果。
        itemStyle: {//图形样式
            color: function(params) {
                const colorList = ['#5A4BBC','#5276EA','#1490EF','#23BFF9','#96DFFF'];
                return colorList[params.dataIndex]
            }
        },
        label : {//饼图图形上的文本标签
            show : false
        },
        labelLine : {//标签的视觉引导线样式
            show : false
        },
        data:[]
    }
}
```
#### 极坐标系下的柱状图
```
option={
    angleAxis: {//极坐标系的角度轴
        type: 'category',
        data: [],
        show:false
    },
    radiusAxis: {//极坐标系的径向轴
        axisLine:{},//纵坐标线
        axisTick:{}//纵坐标刻度
        axisLabel:{},//纵坐标刻度标签
        splitLine:{//分隔线
            lineStyle:{
                color:'rgba(234, 234, 234, .8)'
            }
        }
    },
    polar: {//极坐标系
        center: ['50%', '50%'],
        radius:'100%'
    },
    series:{
        type: 'bar',
        data: [],
        itemStyle: {
            color: function(params) {
                const colorList = ['#5A4BBC','#5276EA','#1490EF','#23BFF9'];
                return colorList[params.dataIndex]
            }
        },
        coordinateSystem: 'polar',//该系列使用的坐标系
    }
}
```
#### 雷达图
```
option={
    radar: [],//雷达图坐标系组件设置
    series:{
        type: 'radar',
        itemStyle: {},//折线拐点标志的样式 
        areaStyle: {},//区域填充样式
        symbol: 'circle',//标记的图形
        data: []
    }
}
```
#### 地图散点图
```
option={
    backgroundColor: '#fff',//背景色
    tooltip: {},//提示框
    geo:{},//地理坐标系组件
    series:{
        type:'scatter',//散点（气泡）图
        coordinateSystem: 'geo',//该系列使用的坐标系
        data:[],
        //标记的大小,可以设置毁掉函数，示例是根据数值大小设置图标大小
        symbolSize: function (val) {
            if(val[2]>100){
                return val[2] / 6;
            }else{
                return 10;
            }
        },
        label: {//图形上的文本标签
            normal: {
                show: false
            },
            emphasis: {
                show: false
            }
        },
        itemStyle: {//图形样式
            normal: {
                //图形的颜色,可使用回调函数，示例是根据值的大小改变颜色
                color:function (obj) {
                    if(obj.data.value[2]>100){
                        return 'rgba(40,103,217,.3)';
                    }else{
                        return 'rgba(115, 217, 243,.3)';
                    }
                },
                borderColor: 'rgba(40,103,217,.5)',
                borderWidth: 1
            },
            emphasis: {
                show:false
            }
        }
    }
}
```
<p>{{ page.date | date_to_string }}</p>
