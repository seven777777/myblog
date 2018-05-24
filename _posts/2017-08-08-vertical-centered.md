---
layout: default
title: 元素的水平及垂直居中实现方法二三
---

<h2>{{ page.title }}</h2>

最近面试被问到这个问题，其实平时在开发的时候都会习惯性的用一种方法，能实现就行。
虽然问题很基础，但是在面试的时候遇到这种问题，估计就是在考你基础知识掌握的全面性了，因此做一个整理，把能实现的方法都列一遍，也是对自己的css知识做一个复习
## 一、水平居中
水平居中相对是开发中最常用的，也是相对比较容易实现的一种布局方式了
### 1.行内元素
对父元素添加如下样式，便可实现内部行内元素的水平居中

	div{
		text-align:center;
	}
### 2.块级元素
#### **宽度固定**
 定宽的元素实现水平居中应该是最常遇到也是最简单的了
 
 + 对要实现水平居中的div添加样式 `margin:0 auto;`
 + 使用绝对定位
让元素距离左边50%，再设置一个向左的margin，设置它的值为负的width/2
```
div{
	width:100px;
	position:absoult;
	left:50%;
	margin-left:-50px;
}
```

#### **不定宽**
 + 结合绝对定位和transform的translate属性

html：
```
<div class="A">
	<div class="B">
		这里是测试文字<br>
		这里是测试文字这里是测试文字这里是测试文字 这里是测试文字<br>
		这里是测试文字这里是测试文字<br>
		这里是测试文字<br>
		这里是测试文字 这里是测试文字 这里是测试文字 这里是测试文字 这里是测试文字<br>
	</div>
</div>
```
css：
```
.A{
	width: 100%;
	height: 800px;
	background: green;

	position: relative;
}
.B{
	background: #e3e3e3;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);/*会向左位移自身宽度的一半*/
}
```
#### **div内部多个块级元素水平居中**
 + 使用`display:inline-block;`
* IE6、7不兼容inline-block，解决办法：*zoom:1;*display:inline;

html:
```
<ul class="demo">
	<li></li>
	<li></li>
	<li></li>
</ul>
```
css:
```
.demo{
	background: blue;
	text-align: center; /*父元素设置居中属性*/
	font-size: 0;/* 解决inline-block多出的空白像素问题  */
}
.demo li{
	width: 100px;
	height: 100px;
	margin: 0 10px;
	background: #e3e3e3;

	display: inline-block;
}
```


## 二、垂直居中
相当于水平居中来讲，垂直居中的实现就相对困难一些
### 1.行内元素
 + 对于文字，若只有一行，且高度固定，设置line-height的值等于元素height的值
```
p{
	height:30px;
	line-height:30px;
	
	font-size:12px;
}
```
### 2.块级元素
#### **使用绝对定位**
+ 高度固定
让元素距离顶部50%，再设置一个向上的margin，设置它的值为负的height/2（运算部分也可以使用css的calc函数）
```
div{
	width:100px;
	height:100px;
	position:absoult;
	top:50%;
	margin-top:-50px;
}
```
+ 高度不固定
高度不定时，同上述水平的方法，结合`transform:translateY(-50%)`
####**基于视口单位的解决方案**
在不使用绝对定位的属性时，同样结合`transform:translateY(-50%)`，解决方法可以是用margin的百分比值，但由于margin的百分比值是以父元素的宽度作为解析基准的，所以想让元素相对视口居中，可以使用视口相关的长度单位
```
div{
	width:100px;
	margin:50vh auto 0;/*1vh表示视口高度的1%，1vw表示视口宽度的1%*/
	transform:translateY(-50%);
}
```
## 三、基于Flexbox实现的水平及垂直居中
使用Flexbox是实现元素居中的最佳方案，对于于定宽高以及不定宽高的元素均适用，只需两个声明：
+ 给待居中元素父元素设置：`display:flex;`
+ 给元素自身设置：`margin:auto;`

<p>{{ page.date | date_to_string }}</p>
