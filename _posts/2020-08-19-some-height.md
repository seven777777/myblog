---
layout: post
title: 关于clientHeight，offsetHeight，scrollHeight ，offsetTop，scrollTop...想要搞清楚，看这一篇就够了！
time: 2020.08.19 17:37:15
tags: JS 干货
category: work
excerpt : 网上关于clientHeight， offsetHeight，scrollHeight...的相关文章其实很多，整理这篇文章的主要目的还是在于加深一下自己对于这些元素的记忆，每次用到的时候，总是模棱两可的，需要再去查阅一下，希望自己总结之后，彻底把这几种height搞明白！
---



网上关于clientHeight， offsetHeight，scrollHeight...的相关文章其实很多，整理这篇文章的主要目的还是在于加深一下自己对于这些元素的记忆，每次用到的时候，总是模棱两可的，需要再去查阅一下，希望自己总结之后，彻底把这几种height搞明白！

> 以`height`为例，`width`相关方法与其相同

### 详细列举
除了各种height所代表的具体值容易把人搞晕之外，js和jquery对各种值获取的不同语法也是容易晕的点

下面除了详细列举不同值的具体含义外，也会详细列举js和jquery的不同写法。

首先我将题目上列举的那些值，分成两大部分进行分析，一部分是关于元素的本身的各种值，另一部分是涉及到元素滚动的相关值。

#### 1. 关于元素本身的各种height

<img src="https://seven777777.github.io/myblog/images/post/2020-08-19-some-height/pic01.png" />

具体的根据上图，详细说明如下：

##### 1.1 获取dom高度：不包含padding，border，margin

```
// jquery
$(dom).height()
```

##### 1.2 获取dom高度：包含padding，不包含border，margin

```
// jquery
$(dom).innerHeight()

// js
document.getElementById(idname).clientHeight
```

##### 1.3 获取dom高度：包含padding，border，不包含margin

```
// jquery
$(dom).outerHeight()

// js
document.getElementById(idname).offsetHeight
```

##### 1.4 获取dom高度：包含padding，border，margin

```
// jquery
$(dom).outerHeight(true)

// js（相对麻烦一点，需手动获取margin值，并增加）
var demo = document.getElementById(idname);
var computedStyle = getComputedStyle(demo, null);
var marginHeight = Number(computedStyle.marginTop.split('px')[0]) + Number(computedStyle.marginBottom.split('px')[0])

document.getElementById(idname).offsetHeight + marginHeight
```
 以上是关于元素本身高度相关的属性
 
#### 2. 涉及元素滚动

<img src="https://seven777777.github.io/myblog/images/post/2020-08-19-some-height/pic02.png" />

主要就是两个值：`scrollHeight` 和 `scrollTop`

直接通过上图，其实两者分别代表的值已经一目了然了

> 当没出现滚动条时，
> + scrollHeight = clientHeight
> + scrollTop = 0

```
//jquery
$(dom).scrollTop()
// js
document.documentElement.scrollTop

//jquery
$(dom)[0].scrollHeight
// js
document.documentElement.scrollHeight
```

#### 3. jquery的offset().top与js的offsetTop之间的区别

之前我一直以为如标题表示的两个值是相同的，但其实并不是：
##### js的offsetTop：元素顶部与自己最近的设置了`position`值的父元素的偏移值，如果没有，则表示距离body的值。

可以通过下图进行理解

<img src="https://seven777777.github.io/myblog/images/post/2020-08-19-some-height/pic03.png" />

> 值不会伴随滚动而改变

##### jquery的offset().top：元素上边框相对于文档顶端的偏移量

> 伴随滚动，值会发生改变

当两者参照元素相同时，会出现如下规律：
offset().top = offsetTop - scrollTop

demo：

<img src="https://seven777777.github.io/myblog/images/post/2020-08-19-some-height/scrollImg.gif" />


> 当无滚动条且offsetTop与offset().top参照对象相同时，它们获取的值相同。

关于两者的区别，参考了这篇文章☞[https://www.cnblogs.com/echolun/p/10146197.html](https://www.cnblogs.com/echolun/p/10146197.html)


文中demo查看：网页——[戳这里](https://seven777777.github.io/blog-demo/allKindsHeight.html)，源码——[戳这里](https://github.com/seven777777/blog-demo/blob/master/allKindsHeight.html)

### 扩展
#### 设置滚动高度
```
window.scrollTo({top:值,behavior: "smooth"})

//behavior: "smooth" 表示平滑滚动
```

#### 监听滚动到最底部
```
scrollTop == (document.documentElement.scrollHeight - document.documentElement.offsetHeight)
```

还有很多就不详细展开了，把上面的各种属性都熟悉之后，找到不同值之间的关系，便可以灵活运用到各种实际开发场景中！

本文写的比较匆忙，后续可能还会补充修改，如果一些描述不太准确，欢迎留言指出！
