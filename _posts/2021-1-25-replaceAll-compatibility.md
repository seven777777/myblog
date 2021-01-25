---
layout: post
title: 关于String.replaceAll()兼容性问题
time: 2021.1.25 17:22:38
tags: JS 干货 踩坑
category: work
excerpt : 之前在项目中维护同事代码，发现部分浏览器及低版本Chrome浏览器都出现报错情况.排查发现是由于replaceAll()函数兼容性问题所导致
---
之前在项目中维护同事代码，发现部分浏览器及低版本Chrome浏览器都出现报错情况。

<img src="https://seven777777.github.io/myblog/images/post/2021-1-25-replaceAll-compatibility/pic01.png" />

排查发现是由于`replaceAll()`函数兼容性问题所导致

<img src="https://seven777777.github.io/myblog/images/post/2021-1-25-replaceAll-compatibility/pic02.png" />

### 解决方案
1. 利用`splite()`和`join()`
```
let str = '2021.01.25'//要将其转换成2021-01-25
console.log(str.split('.').join('-'))//2021-01-25

```


2. 使用`replace()`代替
 ```
let str = '2021.01.25'//要将其转换成2021-01-25
console.log(str.replace(/\./g,'-'))//2021-01-25

```
`replace()`接受两个参数，第一个参数是需要替换的字符，支持正则，如果不增加正则的`g`关键字，则表示提换第一个匹配的字符串。

兼容性很好，如下：
<img src="https://seven777777.github.io/myblog/images/post/2021-1-25-replaceAll-compatibility/pic03.png" />
