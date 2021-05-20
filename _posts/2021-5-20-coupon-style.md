---
layout: post
title: 分享一个类优惠券样式-带内圆角，带阴影
time: 2021.5.20 17:43:42
tags: 干货 CSS 页面效果
category: work
excerpt: 在前端日常开发排版布局过程中，虽然万物都可切图搞定，但是难免会不太灵活，所以针对一些不太常见的设计样式，如下图这种类似优惠券的一种样式，如果能有方式在代码层面搞定，尽量还是不要选择切图了。
---

在前端日常开发排版布局过程中，虽然万物都可切图搞定，但是难免会不太灵活，所以针对一些不太常见的设计样式，如下图这种类似优惠券的一种样式，如果能有方式在代码层面搞定，尽量还是不要选择切图了。

<img src="https://seven777777.github.io/myblog/images/post/2021-5-20-coupon-style/pic04.png" />

乍一看感觉也没什么难度，仔细一看，才发现事情并不简单。

通常想要实现这种内圆角的效果，首先想到的就是使用背景渐变来实现，但这边比较麻烦的点在于，不规则的内圆角下面的阴影。

进过一番尝试，最终使用 drop-shadow + 背景径向渐变实现了该样式。

### drop-shadow

一般，设置盒子的投影，我们使用的属性是`box-shadow`，但是该属性比较死板，如下图：想要实现连同小箭头也有阴影效果，这个属性就不能满足条件了。

```
.dialog-box {
    width: 150px;
    height: 50px;
    border-radius: 4px;
    position: relative;
}

.dialog-box::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border: 6px solid;
    border-color: transparent transparent white transparent;
    bottom: 100%;
    right: 10px;
}

//使用box-shadow
.dialog-box-shadow {
    box-shadow: 2px 1px 5px rgba(0, 0, 0, 0.5);
}

```

<img src="https://seven777777.github.io/myblog/images/post/2021-5-20-coupon-style/pic01.png" />

尝试一下使用`drop-shadow`:

```
.dialog-box-drop-shadow {
    border: 1px solid black;
    filter: drop-shadow(2px 1px 5px rgba(0, 0, 0, 0.5));
}
```

尝试过程中发现，如果不给盒子增加背景色或者边框之类的样式，是看不到效果的，所以这里加了一个边框样式，此时的状态如下：

<img src="https://seven777777.github.io/myblog/images/post/2021-5-20-coupon-style/pic02.png" />

再加上背景色，完善一下：

```
.dialog-box-drop-shadow2 {
    background-color: #fff;
    filter: drop-shadow(2px 1px 5px rgba(0, 0, 0, 0.5));
}
```

<img src="https://seven777777.github.io/myblog/images/post/2021-5-20-coupon-style/pic03.png" />

现在看，基本上一个带箭头的 div 就完成了。

由以上可以得知，`filter: drop-shadow(2px 1px 5px rgba(0, 0, 0, 0.5));`可以想象成用光照在一个物体上产生投影的效果。

关于这个属性，想要更多了解的可以参考张鑫旭的[这篇文章](https://www.zhangxinxu.com/wordpress/2016/05/css3-filter-drop-shadow-vs-box-shadow/)。

### 具体实现

言归正传，解决了阴影问题，接下来的问题就迎刃而解了。

核心实现代码如此下：

```
...
background: radial-gradient(circle at top left, transparent 8px, #fff 0) top left,
    radial-gradient(circle at bottom left, transparent 8px, #fff 0) bottom left;
background-size: 100% 50%;
background-repeat: no-repeat;
```

主要就是组合使用背景色的径向渐变，从而使视觉上行程内圆角的效果。

知道原理后，就能组合出千变万化的样式布局。

所以我们一开始那张图的具体代码如下：

```
//css
.coupon-box {
    width: 250px;
    height: 80px;
    filter: drop-shadow(2px 1px 5px rgba(0, 0, 0, 0.5));
    display: flex;
}

.coupon-box-left,
.coupon-box-right {
    position: relative;
}

.coupon-box-left {
    flex: 1;
    background: radial-gradient(circle at top right, transparent 8px, #FA725B 0) top right,
        radial-gradient(circle at bottom right, transparent 8px, #FA725B 0) bottom right;
    background-size: 100% 50%;
    background-repeat: no-repeat;
    border-radius: 4px 0 0 4px;

}

.coupon-box-left::after {
    content: '';
    width: 1px;
    position: absolute;
    top: 8px;
    right: 0;
    bottom: 8px;
    background: linear-gradient(#e9e9e9 50%, transparent 0);
    background-size: 100% 5px;
}

.coupon-box-right {
    width: 80px;
    background: radial-gradient(circle at top left, transparent 8px, #fff 0) top left,
        radial-gradient(circle at bottom left, transparent 8px, #fff 0) bottom left;
    background-size: 100% 50%;
    background-repeat: no-repeat;
    border-radius: 0 4px 4px 0;
}


//dom
<div class="coupon-box m_t30">
    <div class="coupon-box-left"></div>
    <div class="coupon-box-right"></div>
</div>

```

看完整示例代码， [戳这里](https://github.com/seven777777/blog-demo/blob/master/coupon-style.html)
