---
layout: post
title: echart实例仓库（基于vue）
time: 2020.12.01 16:36:36
tags: ECharts 干货
category: work
excerpt : 对于一个在大数据公司搬砖的前端，这几年除了地图，遇到最多的就是各种图表的需求了。基本上Echart作为一个图表库，已经能满足绝大多数项目中的图表需求了。BUT～常规的配置基本是无法满足产品大大们高端的品味的，So～难免也会遇到一些个性化的配置需求。
---
对于一个在大数据公司搬砖的前端，这几年除了地图，遇到最多的就是各种图表的需求了。基本上Echart作为一个图表库，已经能满足绝大多数项目中的图表需求了。BUT～常规的配置基本是无法满足产品大大们高端的品味的，So～难免也会遇到一些个性化的配置需求。

可能也是年纪大了，记性不太好，你们也知道，一些特别个性化的配置频率是很低的，基本也是配完一次就丢在那边了，等到下次突然发现有个类似的配置需求时，作为一个程序员的本能反应就是去翻出当初的配置来参考一遍。但是由于这些年项目量较大，期间又经过几次数据库的迁移，各种曲折，导致这个寻找的过程非常艰辛，所以有了这个项目。

目前已经上线的版本只是列举了目前遇到的几种配置，后续会不断回溯之前的项目，去增加配置列表，过程中也会在结构上做一些完善。

可以通过这个链接访问项目：[https://seven777777.github.io/vue-echarts/#/home](https://seven777777.github.io/vue-echarts/#/home)

源码在这里：[https://github.com/seven777777/vue-echarts](https://github.com/seven777777/vue-echarts)

项目预览图如下：

<img src="https://seven777777.github.io/myblog/images/post/2020-12-01-vue-echarts/pic01.png" />


### 关于项目部署
项目技术栈：@vue/cli 4.5.9 + echarts + elementui

##### 对于将项目部署到github上并实现预览，有如下注意事项：

1. vue.config.js

```
module.exports = {
    publicPath: './',//设置后，打包后的资源路径引用才正确
    outputDir: './docs',//方便github设置预览页面
};
```
2. router

在github上预览vue打包项目，路由模式应为默认的`hash`模式，不可为`history`

> tips: vue-cli升级到4之后，sass-loader由 v7 的版本升级到了 v8

### 关于动态渲染组件
为了项目之后的迭代更加灵活，所以目前的列表统一使用的组件，并没有去注册路由。由于之后的组件可能会较多，为了方便操作，这里使用了动态渲染组件。

实现的核心代码如下：

项目目录：

<img src="https://seven777777.github.io/myblog/images/post/2020-12-01-vue-echarts/pic02.png" />

红框中的文件是之后所有列表组件存放的位置，以及动态渲染组件配置的js文件

```
// componentsSet.js
const resultComps = {}
let requireComponent = require.context(
    './', // 在当前目录下查找
    false, // 不遍历子文件夹
    /\.vue$/ // 正则匹配 以 .vue结尾的文件
)
requireComponent.keys().forEach(fileName => {
let comp = requireComponent(fileName)
    resultComps[fileName.replace(/^\.\/(.*)\.\w+$/, '$1')] = comp.default
})
export default resultComps

```

```
// vue

<!--dom-->
<component
    v-for="(comp,index) in dataList"
    :key="index"
    :title="comp.label"
    :is="allComps[comp.component]">
</component>
// :title="comp.label" 可以向动态组件传参

<!--js-->
import allComps from './components/componentsSet'

export default {
    name: 'Home',
    data(){
        return {
            allComps,
            // ⚠️注意：组件文件名与此处的component需要对应
            dataList:[
                {
                    label:'基本说明',
                    component:'baseDesc'
                },
                {
                    label:'基础图表',
                    component:'baseChart'
                },
                {
                    label:'legend-外部设置点击事件',
                    component:'legendClickDiy'
                },
                {
                    label:'tooltip-自定义样式',
                    component:'diyTooltip'
                },
                {
                    label:'tooltip-默认显示并轮播显示',
                    component:'defaultShowTooltip'
                },
                // ...
            ]
        }
    },
    // ...
}

```


### 关于项目介绍
目前封装的基础图表比较简单，其他一些常用的配置可以直接查询<a target="_bank" href="https://echarts.apache.org/zh/index.html">Echarts官网</a>

为了方便使用，该项目封装了一个全局公共的Echarts组件。封装的组件中暴露了一下方法，可供调用组建时使用，如鼠标事件和action事件等。

基于大量的项目经验，对于页面中大量出现图表的情况，以下这些数据结构更便于封装

so~该项目的图表封装，如无特殊说明，均采用下方的数据结构:（目前只列举了直角坐标系图和饼图的数据结构，后续若新增图表类型会继续补充）

```
//数据结构-直角坐标系
baseChartsObj:{
    xAxisData:["分类1", "分类2", "分类2", "分类4", "分类5", "分类6"],
    chartData: [
        {
            name: '数据1',
            value:[12,18,34,26,67,10],
            type: 'line'
        },
        {
            name: '数据2',
            value:[16,11,14,36,57,20],
            type: 'bar'
        },
        // 基本配置的基础上，之后的一些示例会增加一些其他配置，如：单位，色值
        {
            name: '数据3',
            value:[6,11,24,16,11,30],
            type: 'line'
            // unit: '个',
            // color: somecolor,
        }
    ]
}

//数据结构-饼图
pieChartsObj:{
    title:'基础饼图',
    unit:'%',
    chartData:[
        {value:26, name: '分类1'},
        {value:23, name: '分类2'},
        {value:12, name: '分类3'},
        {value:12, name: '分类4'},
        {value:12, name: '分类5'}
    ]
}
```

在列一遍传送门～

可以通过这个链接访问项目：[https://seven777777.github.io/vue-echarts/#/home](https://seven777777.github.io/vue-echarts/#/home)

源码在这里：[https://github.com/seven777777/vue-echarts](https://github.com/seven777777/vue-echarts)

目前项目的直接访问主要便于一些配置的快速查找，列出的都是一些比较核心的实现代码，（若想查看完整实现代码，可以去我github去看源码），如果之前没有Echarts的使用经验，建议先熟悉官方配置。

之后针对Echarts的一些较为经典常用复杂的diy配置，可能我会专门写一些博客教程。

anyway，如果大家喜欢我的这个项目，欢迎star，转发加收藏！

