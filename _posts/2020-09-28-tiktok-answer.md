---
layout: post
title: 字节跳动笔试之解答篇
time: 2020.09.28 13:58:47
tags: 面试 干货
category: work
excerpt : 看见一篇博文，列出了博主关于字节跳动的线上面试题：https://blog.csdn.net/handsomezhanghui/article/details/108691314，针对这些题目，我试着做了以下解答，以供参考。（部分解答参考网上其他资料）
---

看见一篇博文，列出了博主关于字节跳动的线上面试题：[https://blog.csdn.net/handsomezhanghui/article/details/108691314](https://blog.csdn.net/handsomezhanghui/article/details/108691314)，针对这些题目，我试着做了以下解答，以供参考。（部分解答参考网上其他资料）

#### 题一
##### 问题：
```
把下面的纯文整理为3行4列
aaaa "dd"  f g;fd分
1 "2dd"     113 512
   q 'w'  er,-/ g
```
整理结果如下：
<img src="https://seven777777.github.io/myblog/images/post/2020-09-28-tiktok-answer/pic01.png" />

##### 解答
```
const str =` aaaa "dd"  f g;fd分
1 "2dd"     113 512
   q 'w'  er,-/ g`

let result = str.split(/[(\r\n)\r\n]+/).map(item=>{
    return item.trim().split(/\s+/)
})
```
1. 先根据回车或者换行将字符串转换成数组，匹配据回车或者换行的正则：`/[(\r\n)\r\n]+/`
2. 去除每一行字符串前后的空字符：`string.trim()`
3. 将去除空字符的每一项的字符串，匹配一个或多个空格，转换成数组，匹配一个或多个空格的正则：`/\s+/`

 
#### 题二
##### 问题：
```
阐述一下对原码/反码/补码的理解，相互之间的转换方法
```
##### 解答
原码、反码和补码是计算机内定点数的三种表示法

原码：符号位加上真值的绝对值， 即用第一位表示符号，“0”表示正，“1”表示负， 其余位表示值.
```
[+1]原 = 0000 0001

[-1]原 = 1000 0001
```

反码和补码都是在原码的基础上转换而来，转换规则如下：

1. 反码
    + 正数的反码是其本身
    + 负数的反码是在其原码的基础上, 符号位不变，其余各个位取反.

    ```
    [+1] = [00000001]原 = [00000001]反

    [-1] = [10000001]原 = [11111110]反
    ```


2. 补码
    + 正数的补码就是其本身
    + 负数的补码是在其原码的基础上, 符号位不变, 其余各位取反, 最后+1. (即在反码的基础上+1)
    
    ```
    [+1] = [00000001]原 = [00000001]反 = [00000001]补

    [-1] = [10000001]原 = [11111110]反 = [11111111]补
    ```
详细的讲解，可以参考下面这篇文章：[https://www.cnblogs.com/zhangziqiu/archive/2011/03/30/ComputerCode.html](https://www.cnblogs.com/zhangziqiu/archive/2011/03/30/ComputerCode.html)，讲解的很详细

#### 题三
##### 问题：
```
日常信息流开发过程中，经常需要显示文章发表的时间与当前时间的关系状态。

比如:刚刚、1分钟之前、一个小时之前等。要求实现-一个函数，输入为一个日期时间戳日期，

输出为输入日期与当前时间的关系:1分钟(59秒)以内显示刚刚

其他显示XXX前，比如: 1分钟前、2小时前、!一天前

能够实现该函数后，让其稍加改造，如:输入日期与当前时间相差超过2天就显示该日期等
```
##### 解答
简单按照要求，写了一个函数
```
// time为时间戳
function timeAgo(time){
    var dateStart = new Date(time);//获取开始时间
    var dateEnd = new Date();//获取当前时间
    var dateDiff = dateEnd.getTime() - dateStart.getTime()//计算时间差 毫秒
    
    var dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000));//计算出相差天数
    // 计算小时差
    var leave1=dateDiff%(24*3600*1000)    //计算天数后剩余的毫秒数
    var hours=Math.floor(leave1/(3600*1000))//计算出小时数
    //计算相差分钟数
    var leave2=leave1%(3600*1000)    //计算小时数后剩余的毫秒数
    var minutes=Math.floor(leave2/(60*1000))//计算相差分钟数
    //计算相差秒数
    var leave3=leave2%(60*1000)      //计算分钟数后剩余的毫秒数
    var seconds=Math.round(leave3/1000)
    console.log(" 相差 "+dayDiff+"天 "+hours+"小时 "+minutes+" 分钟"+seconds+" 秒")
    
    let strMap = {
        0:'天前',
        1:'小时前',
        2:'分钟前',
        3:'刚刚'
    }
    let timeDiffArray = [dayDiff,hours,minutes,seconds]
    let result = '刚刚'
    for(var i = 0; i < timeDiffArray.length; i++){
        let val = timeDiffArray[i]
        if(val > 0){
            result = (i < 3 ? val : '') + strMap[i]
            break;
        }
    }

    // 输入日期与当前时间相差超过2天就显示该日期
    if(dayDiff && dayDiff>2){
        result = dateStart.toLocaleDateString()
    }

    return result

}
timeAgo(1600933140000)
```
严格来说，这个函数是不严谨的，实际情况，要考虑的因素很多，比如传入时间的格式，时间戳？时间字符串？是否是正确的时间格式？等都需要判断处理，如果以上都正确，可能还需要判断传入时间是否在当前时间之前，如果是将来的时间，应该做什么处理，等等之类细节的东西，在实际开发过程中其实都需要考虑的。

所以说想要非常严谨的实现这样的一个工具函数，还是需要一些时间的。

不过在实际开发过程中，如果遇到类似的需求，网上其实有很多开源的工具，可以直接拿来用。也不是非要时时刻刻都想着自己造轮子的。

#### 题四
##### 问题：
```
请实现一个观察者模式，拥有四个方法on, of, once和trigger
const Event = {

  on() {} //绑定

  off() {} //解绑

  once() {} //绑定一次

  trigger() {} //触发事件

}

function echo(msg) { console.log(msg);

var. event= new Event();

event.on('test', echo);

event.trigger('test', 123); //输出123

event.off('test', echo); //删除某个事件回调
event.off('test'); //删除所有事件回调

event.once('test', echo);//只触发一次
```
##### 解答
```
class Event {
    constructor() {
        this.events = {};
    }
    on(event,callback){
        if(!this.events.hasOwnProperty(event)){
            this.events[event] = []
        }
        if(typeof callback == 'function'){
            this.events[event].push(callback)
        }else{
            throw new Error('缺少回调函数');
        }
        return this
    }
    trigger(event,...args){
        if(this.events.hasOwnProperty(event)){
            this.events[event].forEach((item,index,arr)=>{
                item.apply(this,args)
            })
        }else {
            throw new Error(`"${event}"事件未注册`);
        }
        return this
    }
    off(event,callback){
        if(!this.events.hasOwnProperty(event)){
            throw new Error(`"${event}"事件未注册`);
        }else if(typeof callback != 'function'){
            <!--如果callback不传，则表示移除事件中的所有回调函数-->
            this.events[event] = []
        }else{
            this.events[event].forEach((item,index,arr)=>{
                if(item == callback){
                    arr.splice(index,1)
                }
            })
        }
        return this
    }
    once(event,callback){
        var onceFunc = (...args) => {
            callback.apply(this,args)
            this.off(event,onceFunc)
        }
        this.on(event,onceFunc)
        return this
    }
}
function echo(msg) { console.log(msg)};
function echo2(msg) { console.log(msg + 'sss')};
function echo3(msg) { console.log(msg + 'ddd')};
```
测试一下

```
var event = new Event();
event.on('testOn',echo)
event.on('testOn',echo2)
event.on('testOn',echo3)
event.trigger('testOn','11111')
event.once('test', echo);
event.trigger('test','222')
event.trigger('test','333')
event.trigger('testOn','44444')
event.off('testOn',echo)
event.trigger('testOn','offff')
event.off('testOn')
event.trigger('testOn','offffall')
```
打印结果如下：
<img src="https://seven777777.github.io/myblog/images/post/2020-09-28-tiktok-answer/pic02.png" />

#### 题五
##### 问题：
```
分别使用正则和非正则实现1234567890.12格式化为:1,234,567,890.12。
```
##### 解答：
```
var num = 1234567890.12
// 正则
var resultNum = (num + '').replace(/(\d)(?=(\d{3})+\.)/g, function ($0, $1) {
    return $1 + ',';
})
console.log(resultNum) //1,234,567,890.12
// 非正则
var resultNum2 = num.toLocaleString()
console.log(resultNum2); //1,234,567,890.12

```

#### 题六
##### 问题：
```
请写出程序运行结果
var x = 1;
var bar = function(param) {
    console.log(this.x)
};
var obj1 = {
    x: 1
};
var obj2 = {
    x: 2
};
var obj3 = {
    x: 3
};
var func = bar.bind(obj1);
func();//1
func = bar.bind(obj1).bind(obj2);
func();//1
func = bar.bind(obj1).bind(obj2).bind(obj3);
func();//1
```
##### 解答：
输出结果都为第一个绑定的obj对象的x值。原因是，在Javascript中，bind()方法返回的外来的绑定函数对象仅在创建的时候记忆上下文（如果提供了参数），多次 bind() 是无效的。

更深层次的原因， bind() 的实现，相当于使用函数在内部包了一个 call / apply ，第二次 bind() 相当于再包住第一次 bind() ,故第二次以后的 bind 是无法生效的。

关于这一题，可以详细学习一下[https://segmentfault.com/a/1190000021944575](https://segmentfault.com/a/1190000021944575)这篇文章，讲的挺全面的。以上回答，摘自这篇文章。

#### 题七
##### 问题：
```
页面中有个table,然后里面有很多项，这个table的数据是异步加载进来，然后渲染出来的，想要实现点击td就输出td标签内的内容。
```
##### 解答：
这一题，按我个人的理解也没有那么复杂，抽取下题目关键点：1.数据异步加载 2.很多项

假设基于原生或者jquery实现的话

首先考虑到2的性能方面的优化，就是使用事件委托，所以点击事件不能绑定在td本身，至于绑在什么地方，首先想到的是它的父级`table`，但由于数据是异步加载的，所以可能会导致绑定事件时dom没有渲染，导致绑定失效。

因此事件绑定在`table`或`body`上取决于数据未加载时，table元素是否存在。

```
$('table').on('click','td',function(e){
    alert(e.target.innerHTML)
})
$('body').on('click','table td',function(e){
    alert(e.target.innerHTML)
})
```

可能理解有误，欢迎留言指正！

#### 题八
##### 问题：
```
完成以下布局，尽可能列出你能想到的方案，页面结构包括页头，主体内容，页脚

当主体内容高度超过浏览器窗口时，页脚隐藏，

当主体内容高度不能填充浏览器窗口时 页脚需停留在页面底部
```
<img src="https://seven777777.github.io/myblog/images/post/2020-09-28-tiktok-answer/pic03.jpg" />

##### 解答：
这题比较简单，大体说两个常见的实现方向，具体就不赘述了。

方案一：flex布局

方案二：利用vh或百分比，结合css计算函数calc




以上所有demo代码可以点击下方链接查看：

[https://github.com/seven777777/blog-demo/blob/master/tiktok-answer.html](https://github.com/seven777777/blog-demo/blob/master/tiktok-answer.html)

