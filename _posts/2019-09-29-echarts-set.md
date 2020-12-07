---
layout: post
title: Echarts使用干货整理（不断更新）
time: 2019.09.29 14:34:57
tags: ECharts 干货
category: work
excerpt : 整理一些平时不太注意，或者曾经踩过坑的Echarts设置，其实官方文档都可以找到，记录在此只是为了下次遇到同样问题能够快速解决。
---

整理一些平时不太注意，或者曾经踩过坑的Echarts设置，其实官方文档都可以找到，记录在此只是为了下次遇到同样问题能够快速解决。

### 1. 纵坐标轴标签溢出问题：grid配置
之前的设置倾向于：
```
    grid:{
        left:"",
        right:"",
        bottom:"",
        top:""
    }
```
grid有个属性是`containLabel1`。
+ `containLabel` 为 false 的时候：(默认为false)
    + grid.left grid.right grid.top grid.bottom grid.width grid.height 决定的是由坐标轴形成的矩形的尺寸和位置。

    + 这比较适用于多个 grid 进行对齐的场景，因为往往多个 grid 对齐的时候，是依据坐标轴来对齐的。

+ containLabel 为 true 的时候：
    + grid.left grid.right grid.top grid.bottom grid.width grid.height 决定的是包括了坐标轴标签在内的所有内容所形成的矩形的位置。
    + 这常用于『防止标签溢出』的场景，标签溢出指的是，标签长度动态变化时，可能会溢出容器或者覆盖其他组件。

正常情况一个模块中只有一个图表时，防止label值过长溢出，应该使用如下配置：
```
    grid:{
        left:'0',
        right:'0',
        bottom:'20%',
        top:'5%',
        containLabel: true
    }
    <!--top&bottom的设置值依实际情况而定-->
```

### 2. tooltip框被外层div遮挡问题
```
    tooltip:{
        confine:true,
    }
    <!--tooptip.confine-->
	<!--[ default: false ]-->
	<!--是否将 tooltip 框限制在图表的区域内-->
```

<p>{{ page.date | date_to_string }}</p>
