---
layout: default
title: 小程序初涉——页面滑动以及canvas层级问题
tags: 微信小程序 页面滑动 canvas
excerpt : 在小程序里，map、canvas、video、textarea等 组件是由客户端创建的原生组件，它们的层级是最高的，不能通过 z-index 控制层级，因此在实际开发过程中就会遇到很多由此产生的问题。
---

<h2>{{ page.title }}</h2>
<p>{{ page.tags }}</p>

### 关于canvas的层级问题
在小程序里，map、canvas、video、textarea等 组件是由客户端创建的原生组件，它们的层级是最高的，不能通过 z-index 控制层级，因此在实际开发过程中就会遇到很多由此产生的问题。

最近在做一个小程序的项目，就这个现象遇到了以下问题：
#### 问题一：浮动问题联动的页面滑动问题

![image](https://seven777777.github.io/myblog/images/xcx01.jpg)

如上图，页面只有一屏，在开发工具中都可以正常展示，但在真机环境下，用手指滑动页面时，canvas元素会随着手指的滑动而出现位置偏移。

==解决方法：可以通过禁止页面滑动，从而避免该现象。具体设置如下：==

```
//page里面对应的的json文件
{
    "disableScroll": true
}
```

值得注意的是，这个属性一定要在page对应的页面的json文件加上才会生效，在app.json中添加并没有效果

#### 问题二：canvas层级过高，当他的外层盒子透明度为0时，并不能隐藏canvas

![image](https://seven777777.github.io/myblog/images/xcx04.jpg)

其实我遇到这个问题的场景还算是比较容易解决，如上图所示，无法隐藏的倒计时canvas空间所在的盒子其实此时透明度为0，为什么要将其设置为透明度为0而不是display为none，是因为我这边的需求是一个隐藏前一个盒子，显示后一个盒子的动画，所以解决方法就是==将控制动画的参数绑定到canvas的盒子上，控制canvas的show==
```
<!--参考代码实例-->
<!--wxml-->
<view wx:if="{{!gameover}}">
    <canvas></canvas>
</view>


<!--xxx.js-->
Page({
    data:{
        gameover:false
    },
    //...
})
```

<p>{{ page.date | date_to_string }}</p>
