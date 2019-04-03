---
layout: default
title: 页面Tab切点击切换
time: 2016.4.7 21:47:00
tags: 页面效果 css
category: 工作
excerpt : 一直对于JS、jquery比较生疏，苦于在前端路上一直是孤军奋斗，没人学习交流，全靠自己琢磨。上家公司时抽了一些空余时间对于js、jquery的基本知识进行了一些系统的自学，并没有实际去写一些相关的项目，但自我感觉已经掌握了不少了，在这种自我感觉良好的情况下跳槽到了现在的公司：有货，主要工作内容就是活动pc及app页面的是制作，添加链接，基础到不行的工作。上次的活动需要写个Tab切，心想还是有点自学基础的我就开始动手写了，结果，挫败感很强啊
---

<h2>{{ page.title }}</h2>
<p>{{ page.tags }}</p>

一直对于JS、jquery比较生疏，苦于在前端路上一直是孤军奋斗，没人学习交流，全靠自己琢磨。上家公司时抽了一些空余时间对于js、jquery的基本知识进行了一些系统的自学，并没有实际去写一些相关的项目，但自我感觉已经掌握了不少了，在这种自我感觉良好的情况下跳槽到了现在的公司：有货，主要工作内容就是活动pc及app页面的是制作，添加链接，基础到不行的工作。上次的活动需要写个Tab切，心想还是有点自学基础的我就开始动手写了，结果，挫败感很强啊，一个简单的tab切换效果写起来错误百出，下面是我一开始的代码：
CSS部分：

```
.tab_head{
	width: 100%;
	margin: 0 auto;
	position: relative;
}
.tab_head a{
	position: absolute;
	display: block;
	cursor: pointer;
}
.tab_head_bg{
	display: block;
}
.tab_head_bg img{
	display: block;
	width: 100%;
}
```
HTML部分：

```
<div>
	<!--tab头部-->
	<div class="tab_head">
		<a class="tab1" style="width: 23.5%; height: 100%; left: 3%; top: 0;"></a>
		<a class="tab2" style="width: 23.5%; height: 100%; left: 26.5%; top: 0;"></a>
		<a class="tab3" style="width: 23.5%; height: 100%; left: 50%; top: 0;"></a>
		<a class="tab4" style="width: 23.5%; height: 100%; left: 73.5%; top: 0;"></a>
		<div class="tab_head_bg"><img class="imgclass" src="bg_09.jpg"></div>
	</div>
	<!--tab内容部分-->
	<div class="bg1" style="display: block;">
		<div style="width: 100%; height: 400px; background-color: #5588AA;">
			<p style=" font: bold 16px/24px '微软雅黑'; color: #FFFF00; text-align: center;">tab1</p>
			<p style=" font: bold 16px/24px '微软雅黑'; color: #FFFF00; text-align: center;">tab1</p>
			<p style=" font: bold 16px/24px '微软雅黑'; color: #FFFF00; text-align: center;">tab1</p>
		</div>
	</div>
	<div class="bg2" style="display: none;">
		<div style="width: 100%; height: 400px; background-color: #5588AA;">
			<p style=" font: bold 16px/24px '微软雅黑'; color: #FFFF00; text-align: center;">tab2</p>
			<p style=" font: bold 16px/24px '微软雅黑'; color: #FFFF00; text-align: center;">tab2</p>
			<p style=" font: bold 16px/24px '微软雅黑'; color: #FFFF00; text-align: center;">tab2</p>
		</div>
	</div>
	<div class="bg3" style="display: none;">
		<div style="width: 100%; height: 400px; background-color: #5588AA;">
			<p style=" font: bold 16px/24px '微软雅黑'; color: #FFFF00; text-align: center;">tab3</p>
			<p style=" font: bold 16px/24px '微软雅黑'; color: #FFFF00; text-align: center;">tab3</p>
			<p style=" font: bold 16px/24px '微软雅黑'; color: #FFFF00; text-align: center;">tab3</p>
		</div>
	</div>
	<div class="bg4" style="display: none;">
		<div style="width: 100%; height: 400px; background-color: #5588AA;">
			<p style=" font: bold 16px/24px '微软雅黑'; color: #FFFF00; text-align: center;">tab4</p>
			<p style=" font: bold 16px/24px '微软雅黑'; color: #FFFF00; text-align: center;">tab4</p>
			<p style=" font: bold 16px/24px '微软雅黑'; color: #FFFF00; text-align: center;">tab4</p>
		</div>
	</div>
</div>
```
JS部分

```
$(function(){
	$('.tab1').click(function () {
		$('.imgclass').attr('src','bg_09.jpg')
		$('.bg1').css('display','block');
		$('.bg2').css('display','none');
		$('.bg3').css('display','none');
		$('.bg4').css('display','none');
	});
	$('.tab2').click(function () {
		$('.imgclass').attr('src','bg2_09.jpg')
		$('.bg1').css('display','none');
		$('.bg2').css('display','block');
		$('.bg3').css('display','none');
		$('.bg4').css('display','none');
	})
	$('.tab3').click(function () {
		$('.imgclass').attr('src','bg3_09.jpg')
		$('.bg1').css('display','none');
		$('.bg2').css('display','none');
		$('.bg3').css('display','block');
		$('.bg4').css('display','none');
	})
	$('.tab4').click(function () {
		$('.imgclass').attr('src','bg4_09.jpg')
		$('.bg1').css('display','none');
		$('.bg2').css('display','none');
		$('.bg3').css('display','none');
		$('.bg4').css('display','block');
	})
})
```
效果是实现了，但是一股浓浓的小学生流水账的味道。因为写的是app页面，所以tab切部分就是一个背景图，上面写的几个绝对定位的a标签。
下面是改良版：
CSS部分：

```
.tab_head{
	width: 100%;
	margin: 0 auto;
	position: relative;
}
.tab_head a{
	position: absolute;
	display: block;
	cursor: pointer;
}
.tab_head_bg{
	display: block;
}
.tab_head_bg img{
	display: block;
	width: 100%;
}
.hide {
          display: none
      }
```
HTML部分：

```
<div>
	<!--tab头部-->
	<div class="tab_head">
		<a class="tab1" style="width: 23.5%; height: 100%; left: 3%; top: 0;"onClick="return false;"></a>
		<a class="tab2" style="width: 23.5%; height: 100%; left: 26.5%; top: 0;"onClick="return false;"></a>
		<a class="tab3" style="width: 23.5%; height: 100%; left: 50%; top: 0;"onClick="return false;"></a>
		<a class="tab4" style="width: 23.5%; height: 100%; left: 73.5%; top: 0;"onClick="return false;"></a>
		<div class="tab_head_bg"><img class="imgclass" src="bg0_09.jpg"></div>
	</div>
	<!--tab内容部分-->
	<div class="tab_box">
		<div>
			<div style="width: 100%; height: 400px; background-color: #5588AA;">
				<p style=" font: bold 16px/24px '微软雅黑'; color: #FFFF00; text-align: center;">tab1</p>
				<p style=" font: bold 16px/24px '微软雅黑'; color: #FFFF00; text-align: center;">tab1</p>
				<p style=" font: bold 16px/24px '微软雅黑'; color: #FFFF00; text-align: center;">tab1</p>
			</div>
		</div>
		<div class="hide">
			<div style="width: 100%; height: 400px; background-color: #5588AA;">
				<p style=" font: bold 16px/24px '微软雅黑'; color: #FFFF00; text-align: center;">tab2</p>
				<p style=" font: bold 16px/24px '微软雅黑'; color: #FFFF00; text-align: center;">tab2</p>
				<p style=" font: bold 16px/24px '微软雅黑'; color: #FFFF00; text-align: center;">tab2</p>
			</div>
		</div>
		<div class="hide">
			<div style="width: 100%; height: 400px; background-color: #5588AA;">
				<p style=" font: bold 16px/24px '微软雅黑'; color: #FFFF00; text-align: center;">tab3</p>
				<p style=" font: bold 16px/24px '微软雅黑'; color: #FFFF00; text-align: center;">tab3</p>
				<p style=" font: bold 16px/24px '微软雅黑'; color: #FFFF00; text-align: center;">tab3</p>
			</div>
		</div>
		<div class="hide">
			<div style="width: 100%; height: 400px; background-color: #5588AA;">
				<p style=" font: bold 16px/24px '微软雅黑'; color: #FFFF00; text-align: center;">tab4</p>
				<p style=" font: bold 16px/24px '微软雅黑'; color: #FFFF00; text-align: center;">tab4</p>
				<p style=" font: bold 16px/24px '微软雅黑'; color: #FFFF00; text-align: center;">tab4</p>
			</div>
		</div>
	</div>
</div>
```
JS部分：

```
$(function(){
	var $div_li =$("div.tab_head a");
	$div_li.click(function(){
		var tab_index =$div_li.index(this);
		//alert(tab_index);
		$(this).parent().find('.imgclass').attr("src","bg"+tab_index+"_09.jpg");
		$("div.tab_box>div")
				.eq(tab_index).show()
				.siblings().hide();
	})
})
```
感觉JS部分简洁多了。

但是目前为止，感觉自己还是局限于写这种简单的效果，稍微复杂一丢丢就找不到头绪了。
还是缺少项目经验啊，工作到现在周围始终都只有我一个前端，根本无法进步，只能自己一个人在前端进步路上慢慢摸索了，还是要多写多写多写！

<p>{{ page.date | date_to_string }}</p>
