---
layout: post
title: CSS实现固定宽高比响应式布局（附实例分析）
time: 2020.06.30 16:45:28
tags: 页面效果 CSS
category: work
excerpt : 在日常开发过程中，有一些前端业务场景可能需要让元素在尺寸变化的同时，保证宽高比不变，所以在此记录一下具体的实现方法和应用场景。
---

在日常开发过程中，有一些前端业务场景可能需要让元素在尺寸变化的同时，保证宽高比不变，所以在此记录一下具体的实现方法和应用场景。

#### 一、如何实现
其实关于实现元素的固定宽高比，思路很简单，就是在于找到设置宽高的一个固定基准。关于这个基准是什么，我们其实可以很容易的找到。

其实，最先能够联想到的是图片元素它本身的等比缩放特性，通过固定一边，讲另一边设置为`auto`，就能轻易的实现，但是这种方式有很多局限性，运用到实际复杂的业务布局会有很多短板，所以不推荐，文中也不再赘述。

主要介绍的是下面两种思路

##### 1.vw
> 相对于视口的宽度，视口被均分为100单位的vw

vw,vh是css3新加的属性，目前兼容性还是不错的，
是基于视口的长度单位，即使父元素没有设定高度，也依然能够获取到。

通过这个基准，我们在进行布局的时候，将宽高都基于这个单位来设置，就能很容易的实现宽高等比缩放的效果。

代码如下：

```
<!--假设我们盒子的宽高比固定是2:1-->
.box1{
    width: 20vw;
    height: 10vw;
    background-color:aquamarine;
}
```

但由于我们实际开发的应用场景大多都不是基于整个视口来布局，会有侧边栏，或是一些其他的元素，使得实际我们的布局的盒子只是占整个视口的一部分，所以在将设计师给到的设计图转换成vw布局时，需要进行一些计算，虽然都是一些简单的计算，但也是增加了开发成本。所以相比来说，我更推荐下面一种方法。

##### 2.padding-top的百分比是基于元素宽度的百分比（推荐）

根据这个特性也能够很容易的实现效果

> margin 和 padding 的百分比设置都是基于父元素的百分比，可以举一反三，根据实际情况，灵活的使用

```
.box2{
    width: 20%;
    height: 0;
    padding-top: 10%;
    background-color: brown;
}
```

以上两种可以实现同样的效果，如下：

<img src="https://seven777777.github.io/myblog/images/post/2020-06-30-fix-aspect-ratio/fixAspectRatio1.gif">

#### 二、如何应用
掌握了基本原理后，就到了应用阶段，可以通过下面一个示例，来检验一下实际应用的效果


#### 实例(使用上述方法2)

> 如下图：一个常规的页面，头+侧边导航栏+内容区域（自适应宽度），现在的需求是：右侧列表一行固定排列三个，依次往下排，每个item可以随右侧宽度的变化而等比缩放。

<img src="https://seven777777.github.io/myblog/images/post/2020-06-30-fix-aspect-ratio/fixAspectRatio2.png" >

这里再将item细分成两种布局形式，分别是下面的方案一和方案二

##### 1、方案一
这种方案相对较简单，主要就是设置item的固定宽高，再在盒子里增加其他元素即可，直接代码：

```
<!--这里的盒子宽高比我们假设为3:1-->

// css
.item{
    width: 33%;//因为每行显示三个，所以设置宽度为33%，剩下的1%作为间距
    height: 0;
    padding-top: 11%;//比例为3:1，根据宽度可以计算出高度为11%
    margin-right: 0.5%;
    margin-bottom: 0.5%;
    box-sizing: border-box;
    border: 1px solid #999999;
    position: relative;
}
.item:nth-child(3n){
    margin-right: 0;
}
// 因为item的高度是被padding撑起来的，所以内部的布局需要通过绝对定位，增加一个盒子来盛放
.itemInner{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: url('./images/testpic01.jpg') center center no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column-reverse;
}
.innerTxt{
    margin: 0;
    padding: 0 20px;
    font-size: 14px;
    line-height: 2;
    color: #333;
    background-color: rgba(255, 255, 255, 0.8);
}

// html
<div class="testMain">
    <div class="item">
        <div class="itemInner">
            <p class="innerTxt">这是一段测试标题</p>
        </div>
    </div>
    <div class="item">
        <div class="itemInner">
            <p class="innerTxt">这是一段测试标题</p>
        </div>
    </div>
    ...
</div>
```
效果如下：
<img src="https://seven777777.github.io/myblog/images/post/2020-06-30-fix-aspect-ratio/fixAspectRatio3.gif">

##### 2、方案二
这种方案就是需要稍微做一些变通
> 方案说明：盒子本身是宽度自适应的，但高度需要根据内部的图片变化来响应，假设图片的宽高比是4:3

代码如下：

```
// css
.item2{//这一部分不需要设置宽高比，只要设置好宽度，高度可以让其根据内部图片高度自适应
    width: 33%;
    margin-right: 0.5%;
    margin-bottom: 0.5%;
    box-sizing: border-box;
    border: 1px solid #999999;
    position: relative;
}
.item2:nth-child(3n){
    margin-right: 0;
}
.item2Inner{
    padding: 12px;
    display: flex;
}
// 图片元素再根据上面的方法进行固定宽高比设置
.item2Inner-pic{
    width: 40%;
    height: 0;
    padding-top: 30%;
    background: url('./images/testpic01.jpg') center center no-repeat;
    background-size: cover;
    flex-shrink: 0;
}
.item2Inner-main{
    flex: 1;
    margin-left: 10px;
}
.item2Inner-main-title{
    font-size: 14px;
    color: #333;
    line-height: 2;
}
.item2Inner-main-txt{
    font-size: 12px;
    color: #666;
    line-height: 2;
}

// html
<div class="testMain">
    <div class="item2">
        <div class="item2Inner">
            <div class="item2Inner-pic"></div>
            <div class="item2Inner-main">
                <p class="item2Inner-main-title">标题</p>
                <p class="item2Inner-main-txt">这是一段测试文字</p>
            </div>
        </div>
    </div>
    <div class="item2">
        <div class="item2Inner">
            <div class="item2Inner-pic"></div>
            <div class="item2Inner-main">
                <p class="item2Inner-main-title">标题</p>
                <p class="item2Inner-main-txt">这是一段测试文字</p>
            </div>
        </div>
    </div>
    ...
</div>
```
效果如下：
<img src="https://seven777777.github.io/myblog/images/post/2020-06-30-fix-aspect-ratio/fixAspectRatio4.gif">

以上两种方案完整代码可点击 ☞ [这里](https://github.com/seven777777/blog-demo/blob/master/fixed-aspect-ratio.html) 查看


以上就是关于CSS实现固定宽高比响应式布局的全部内容了，如果还有其他方案，或是文中有分析不正确的地方，可以评论跟我交流哦~
