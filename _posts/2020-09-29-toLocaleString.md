---
layout: post
title: toLocaleString也太好用了吧！（超方便转千分位，中文数字等）
time: 2020.09.29 13:42:48
tags: JS 干货
category: work
excerpt : 大概列了我觉得可能会比较有用的属性，尤其是转千分位，转时间的属性，其他的如果感兴趣，可以前往MDN自行查看。
---



### 基本概念
目前，我查找了一下，下面三种数据类型都可以使用`toLocaleString`的方法
1. number.toLocaleString([locales [, options]])：返回这个数字在特定语言环境下的表示字符串
2. array.toLocaleString([locales [, options]])：返回一个字符串表示数组中的元素
3. date.toLocaleString([locales [, options]])：方法返回该日期对象的字符串，该字符串格式因不同语言而不同

基本概念看着平平无奇，下面列举一些他们的实际应用

### 应用
1.把阿拉伯数字转成中文数字
```
var num = 1
num.toLocaleString('zh-u-nu-hanidec') // "一"
```
2.转千分位
```
var num = 12345678.123
num.toLocaleString() // "12,345,678.123"
```

> 如果不想有分隔符，可以指定useGrouping为false

3.转百分比
```
var num = 1345.2345
num.toLocaleString('zh',{style:'percent'}) // "134,523%"
num.toLocaleString('zh',{style:'percent' , useGrouping: false}) // "134523%"
num.toLocaleString('zh',{style:'percent' , useGrouping: false}) // "134523%"
```
4.转货币符号
```
var num = 1234.2345
num.toLocaleString('zh',{style:'currency' , currency:'CNY' }) // "¥1,234.23"
num.toLocaleString('ja',{style:'currency' , currency:'JPY' }) // "￥1,234"
num.toLocaleString('zh',{style:'currency' , currency:'CNY' , useGrouping: false , minimumFractionDigits: 3}) // "¥1234.235"


var arr = [1,22,3333]
arr.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' }) // ￥1,￥22,￥3,333
```

> 注意：3，4的设置，结果默认都只保留了两位小数,可通过`minimumFractionDigits`这个参数进行设置

5.指定整数最少位数、小数最少与最多位数，有效数字的位数，不够用 0 补全 （采用四舍五入法）
```
let num = 1234.456;
num.toLocaleString('zh', { minimumIntegerDigits: 5 }); //01,234.456
num.toLocaleString('zh', { minimumFractionDigits: 4, useGrouping: false }); //1234.4560
num.toLocaleString('zh', { maximumFractionDigits: 2, useGrouping: false }); //1234.46
num.toLocaleString('zh', { minimumSignificantDigits: 8, useGrouping: false }); //1234.4560
num.toLocaleString('zh', { maximumSignificantDigits: 4, useGrouping: false }); //1234
```

6.转换时间显示
```
var date = new Date()
date.toLocaleString() // "2020/9/28 下午5:14:53"
date.toLocaleString('zh',{ hour12: false }) // "2020/9/28 17:14:53"
```

### 部分参数的解释
##### locales：缩写语言代码
locales 参数必须是一个 BCP 47 语言标记的字符串，或者是一个包括多个语言标记的数组。如果 locales 参数未提供或者是 undefined，便会使用运行时默认的 locale。

它以这样的顺序囊括了这些内容：语言代码，脚本代码，和国家代码，全部由连字符分隔开。

+ "zh-Hans-CN" 中国 简写'zh'
+ "ja-Jp" 日本 简写'jp'
+ "zh-u-nu-hanidec" 中文十进制数字

##### options：一个对象
1. `style` 格式化时使用的样式
    + `decimal` 表示纯数字格式 为默认值
    + `currency` 表示货币格式 
    + `percent` 表示百分比格式
2. `currency` 在货币格式化中使用的货币符号（如果style是“currency”,必须提供货币属性）
    + `USD` 美元
    + `EUR` 欧元
    + `CNY` 人民币
3. `currencyDisplay` 如何在货币格式化中显示货币
    + `symbol` 使用本地化的货币符号例如€ （默认）
    + `code` 使用国际标准组织货币代码
    + `name` 使用本地化的货币名称
4. `useGrouping` 是否使用分组分隔符，默认：true
5. `minimumIntegerDigits`
    
    使用的整数数字的最小数目.可能的值是从1到21,默认值是1
6. `minimumFractionDigits`         
    
    使用的小数位数的最小数目.可能的值是从0到20;

    默认为普通的数字和百分比格式为0;
    
    默认为货币格式是由国际标准化组织列表(ISO 4217 currency code list)提供(如果列表中没有提供则值为2)
7. `maximumFractionDigits`         
    
    使用的小数位数的最大数目。可能的值是从0到20;

    纯数字格式的默认值是`minimumfractiondigits`和3中大的那一个;
    
    货币格式默认值是`minimumfractiondigits`和国际标准化组织列表(如果列表中没有提供则值为2)中大的那一个
    
    百分比格式默认值是`minimumfractiondigits`和0中大的那一个
8. `minimumSignificantDigits`         
    
    使用的有效数字的最小数目。可能的值是从1到21；默认值是1
9. `maximumSignificantDigits`         
    
    使用的有效数字的最大数量。可能的值是从1到21

    默认是minimumsignificantdigits

> TIP: 如果定义了8或9其中任意一个属性，则忽略5,6,7的设置

#### 下面列一些与`date.toLocaleString`相关的一些配置
##### locales
date对象使用`toLocaleString`时，第一个参数表示不同时区对日期的表示方式

不传会默认使用当前时区的展示规则
```
var date = new Date();

// en-US(美利坚英语)使用 month-day-year 的顺序展示年月日
date.toLocaleString("en-US") // 9/29/2020, 10:11:54 AM

// en-GB(不列颠英语)使用 day-month-year 顺序展示年月日
date.toLocaleString("en-GB") // 29/09/2020, 10:11:54

// 韩语使用 year-month-day 顺序展示年月日
date.toLocaleString("ko-KR") // 2020. 9. 29. 오전 10:11:54

//在日本，应用可能想要使用日本日历,
//2012 是平成24年（平成是是日本天皇明仁的年号,由1989年1月8日起开始计算直至现在）
date.toLocaleString("ja-JP-u-ca-japanese") // R2/9/29 10:11:54

//中国
date.toLocaleString("zh") //2020/9/29 上午10:11:54
date.toLocaleString() //2020/9/29 上午10:11:54

```
##### options
1. `hour12` 是否使用12小时的时间（而不是24小时的时间）。可能的值是true和false; 默认值是语言环境相关的。
2. `timeZone` 要使用的时区
3. `formatMatcher` 要使用的格式匹配算法

除了第一个，其他感觉使用场景也不多。



以上，大概列了我觉得可能会比较有用的属性，尤其是转千分位，转时间的属性，其他的如果感兴趣，可以前往MDN自行查看。

下面列一些传送门：

[date.toLocaleString](https://cloud.tencent.com/developer/section/1191641)

[number.toLocaleString](https://cloud.tencent.com/developer/section/1191896)

[array.toLocaleString](https://cloud.tencent.com/developer/section/1191546)

### 兼容性

<img src="https://seven777777.github.io/myblog/images/post/2020-09-29-toLocaleString/pic01.png" />

目前来看兼容性还是不错的,详细可以查看这里：[https://caniuse.com/?search=toLocaleString](https://caniuse.com/?search=toLocaleString)

