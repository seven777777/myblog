---
layout: post
title: 纯干货~常用布局汇总（持续更新）
time: 2018.6.20 14:11:00
tags: CSS 干货
category: work
excerpt : 整理一些使用频率较高的布局样式，方便日常开发时参考，增加开发效率。
---

<h2>{{ page.title }}</h2>
<p>{{ page.tags }}</p>

### 文本溢出省略号
#### 单行省略

```
.div{
    //...
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
}
```
#### 多行省略

```
.div{
    //...
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp:2;
}
```
### flex布局相关
> 因为是纯干货，这里就不对flex 的属性做过多介绍，如果不了解的，可以直接百度，会有很多不错的教程

#### 垂直居中

```
.fatherBox{
    display:flex;
    align-items:center;
    align-content:center;//若有多行则添加该属性，否则该属性无效
}
```
#### 水平居中
利用水平居中可以实现日常开发中经常会遇到列表排列问题,比如一等比例放三个商品

```
.fatherBox{
    display:flex;
    justify-content:center;//居中，适用于只有一个子元素时
    //两端对齐，项目之间的间隔都相等
    //justify-content:space-between;
    //每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。
    //justify-content:space-around;
}
```
#### 垂直一侧定宽一侧自适应布局
![image](https://seven777777.github.io/myblog/images/post/flex-img.png)

```
//html
<div class="fatherBox">
  <div class="chindrenBox"></div>
  <div class="chindrenBox"></div>
</div>
```

```
//css
.fatherBox{
  display: -webkit-box;
  height: 400px;
  width: 300px;
  -webkit-box-orient:vertical;//默认为水平排列，所以需要设置为垂直排列
  background:gray;
  
}
.chindrenBox:first-child{
  height:40px;
  background:green;
}
.chindrenBox:last-child{
  display: -webkit-box;
  -webkit-box-flex: 1;
  background: pink;
}
```
tip:
- [x] 上方绿色盒子高度固定
- [x] 父级盒子高度固定

#### 水平一侧定宽一侧自适应布局
![image](https://seven777777.github.io/myblog/images/post/flex-img2.png)

```
//html
<div class="fatherBox">
  <div class="chindrenBox"></div>
  <div class="chindrenBox"></div>
</div>
```

```
//css
.fatherBox{
  display: -webkit-box;
/*   -webkit-box-orient:horizontal; *///默认就是水平排列，可以不加此属性
  background:gray;
  height:100px;
}
.chindrenBox:first-child{
  display: -webkit-box;
  width:80px;
  background: orange;
}
.chindrenBox:last-child{
  display: -webkit-box;
  -webkit-box-flex: 1;
  background: pink;
}
```
#### 水平等比分配
![image](https://seven777777.github.io/myblog/images/post/flex-img3.png)

```
//html
<div class="fatherBox">
  <div class="chindrenBox"></div>
  <div class="chindrenBox"></div>
</div>
```

```
//css
.fatherBox{
  display: -webkit-box;
/*   -webkit-box-orient:horizontal; *///默认就是水平排列，可以不加此属性
  background:gray;
  height:100px;
}
.chindrenBox{
  display: -webkit-box;
  -webkit-box-flex: 1;
  width:1px;
  background:green;
}
.chindrenBox:first-child{
  background: orange;
}
.chindrenBox:last-child{
  background: pink;
}
```
但若两者内容长度不同时，会出现bug，如下图：
![image](https://seven777777.github.io/myblog/images/post/flex-img4.png)
此时需要对两个都加上相同的任意宽度，如`width:1px;`
```
//css
.fatherBox{
  display: -webkit-box;
/*   -webkit-box-orient:horizontal; *///默认就是水平排列，可以不加此属性
  background:gray;
  height:100px;
}
.chindrenBox{
  display: -webkit-box;
  -webkit-box-flex: 1;
  width:1px;
  background:green;
}
.chindrenBox:first-child{
  background: orange;
}
.chindrenBox:last-child{
  background: pink;
}
```

<p>{{ page.date | date_to_string }}</p>
