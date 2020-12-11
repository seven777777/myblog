---
layout: post
title: 获取渐变色的中间色值
time: 2020.12.11 14:26:03
tags: 干货 JS 页面效果
category: work
excerpt : 需求场景：一个进度条渐变色块，使用标签表明当前进度，标签背景色要与当前位置色值统一。
---
> 需求场景：一个进度条渐变色块，使用标签表明当前进度，标签背景色要与当前位置色值统一。

<img src="https://seven777777.github.io/myblog/images/post/2020-12-11-color-gradient/pic01.png" />

思路：

根据渐变的两个色值，计算得到两个色值中间100个色值列表，根据百分比，取对应的色值。

代码：
```css
//css
.gradientDiv{
	width: 300px;
	height: 10px;
	background: linear-gradient(90deg,#FAD961,#F76B1C);
	position: relative;
	margin-top: 40px;
}
.label{
	position: absolute;
	bottom: calc(100% + 3px);
	transform: translateX(-50%);
	padding: 0 5px;
	height: 16px;
	border-radius: 8px;
	font-size: 12px;
	color: white;
	line-height: 16px;
	text-align: center;
}
.label:after{
	content: '';
	width: 0;
	height: 0;
	border: 3px solid transparent;
	border-top-color: wheat;
	position: absolute;
	top: 100%;
	left: 50%;
	transform: translateX(-50%);
}
```

```html
<!--html-->
<div class="gradientDiv">
	<div class="label" style="left:10%">10%</div>
</div>
<div class="gradientDiv">
	<div class="label" style="left:50%">50%</div>
</div>
<div class="gradientDiv">
	<div class="label" style="left:90%">90%</div>
</div>
```

```js
//js
let color1 = '#FAD961',color2 = '#F76B1C';
function rgbToHex(r, g, b){
	var hex = ((r<<16) | (g<<8) | b).toString(16);
	return "#" + new Array(Math.abs(hex.length-7)).join("0") + hex;
}
function hexToRgb(hex){
	var rgb = [];
	for(var i=1; i<7; i+=2){
		rgb.push(parseInt("0x" + hex.slice(i,i+2)));
	}
	return rgb;
}
/**
 * 计算渐变过渡色
 * @param {*} startColor 
 * @param {*} endColor 
 * @param {*} step 
 */
function gradient (startColor,endColor,step){
	// 将 hex 转换为rgb
	var sColor = this.hexToRgb(startColor),
		eColor = this.hexToRgb(endColor);

	// 计算R\G\B每一步的差值
	var rStep = (eColor[0] - sColor[0]) / step,
		gStep = (eColor[1] - sColor[1]) / step,
		bStep = (eColor[2] - sColor[2]) / step;

	var gradientColorArr = [];
	for(var i=0;i<step;i++){
		// 计算每一步的hex值
		gradientColorArr.push(this.rgbToHex(parseInt(rStep*i+sColor[0]),parseInt(gStep*i+sColor[1]),parseInt(bStep*i+sColor[2])));
	}
	return gradientColorArr;
}

let colorList = gradient(color1,color2,100)

let labels = document.getElementsByClassName('label')
labels[0].style.backgroundColor = colorList[10]
labels[1].style.backgroundColor = colorList[50]
labels[2].style.backgroundColor = colorList[90]
```

详细demo：[https://github.com/seven777777/blog-demo/blob/master/colorGradient.html](https://github.com/seven777777/blog-demo/blob/master/colorGradient.html)