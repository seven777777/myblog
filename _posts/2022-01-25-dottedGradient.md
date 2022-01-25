---
layout: post
title: 纯css实现虚点线渐变效果
time: 2022.01.25 14:15:14
tags: 干货 CSS 页面效果
category: work
excerpt: 纯css实现虚点线渐变效果——渐变背景色+与背景色相同的边框虚点线+background-origin设置背景图定位
---

实现思路：

渐变背景色+与背景色相同的边框虚点线+`background-origin`设置背景图定位

效果图：
<img src="https://seven777777.github.io/myblog/images/post/2022-01-25-dottedGradient/pic01.png" />

代码：

```css
<!--虚点线元素容器-->
body {
    background-color: #636465;
    position: relative;
    height: 100vh;
}

.demo {
    width: 200px;
    height: 0;
    <!--设置需要呈现的虚点线的渐变色-->
    background: linear-gradient(46deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.04) 100%);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    <!--背景色从边框开始填充-->
    background-origin: border-box;
    <!--边框颜色与容器背景色一致-->
    border-bottom: 2px dotted #636465;
}
```

总结：

本来觉得渐变的虚点线肯定是实现不了的，网上查资料时一些方案给了灵感，所以脑洞大开了一下，投机取巧最终实现了这个效果。
