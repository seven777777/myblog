---
layout: post
title: 使用JS实现数值动态变化动画效果
time: 2020.06.03 15:11:24
tags: JS 动效
category: work
excerpt : 本文主要回顾整理一下之前（大概一年前，:joy:，这一年实在比较忙 ）写的一个页面动画。
---

本文主要回顾整理一下之前（大概一年前，:joy:，这一年实在比较忙 ）写的一个页面动画。

之前其实写了两种方案，最终使用的如下的方案：

<img src=" https://seven777777.github.io/myblog/images/post/2020-06-02-valchange/valchange.gif " />

不过本篇文章会将两种方案都整理出来，方便日后有同样的需求时可以快速复用，同时也可以给正在实现这个需求的同学们一些参考！

话不多说，开整！

> 直接滚动到页面底部可查看方法一的完整代码

#### 一、滚动式变化

这一种的呈现方式也是我在项目中最终应用的方式，个人觉得更好看一点 :smile: 

##### 1.关于实现原理

其实想要实现这种滚动式数值变化原理非常简单，就是利用元素的位移，通常如果用css来实现元素的位移动画的话，我们很容易就会想到`animation`属性。那我们基本上思路就有了：

+ 将数值拆分
+ 拆分后的每一块都是单独的一个模块，包含数字0~9，只展示当前位应该展示的值，其他的值隐藏
+ 变化数值时，根据每一位的变化，通过js再去动态移动数字，从而实现数字滚动变化的效果

大体思路如上，但实际操作过程中，还会有很多细节需要考虑到，比如小数点的显示，是否显示千分位符号，数字累计增长计算细节等，接下来就具体来看看如何实现。

##### 2.具体实现

首先，我们html部分只需要一个box来承载显示结果即可，细节部分我们下面通过JS来添加

```
// html 部分
<div id="valScrollAmt" class="valScrollAmt-box"></div>
```

这里的 id 用于js中的标识，而 class 则用于样式的编辑。我们这里命名一个id：`valScrollAmt`，下面会使用到。

接下来，我们假设初始值为 0，首先将其转换成数组。

```
const startNum = 0
//将number转换成string，从而计算长度，如果需要展示千分位符号的，也可以转换后（转换后即为字符串）直接计算长度
const numStr = (startNum + '').length;

let numArr = []
for(var i = 0;i<numStr.length;i++){
	numArr.push(numStr.charAt(i));
}
```
转换成数组后，接下来就是生成dom,并将其插入最外层的容器中
```
<!--封装一个将数组转换成dom的函数-->
function amtDom(arr){
    var str = '';
    for(var i = 0;i<arr.length;i++){
        if(parseInt(arr[i])>=0){
            // 这里的`scrollItem`是每一位的dom标识，后面也会用到
            // `digit-container`就是用来增加样式的
            str += '<div class="scrollItem digit-container" data-show='+arr[i]+'>\
                    <span>0</span>\
                    <span>1</span>\
                    <span>2</span>\
                    <span>3</span>\
                    <span>4</span>\
                    <span>5</span>\
                    <span>6</span>\
                    <span>7</span>\
                    <span>8</span>\
                    <span>9</span>\
                </div>';
        }else{
            str += '<div class="sign-box"><span>'+arr[i]+'</span></div>';
        }
    }
    return str;
}

// 为了简化操作，本文示例使用了jquery语法，使用的时候记得引入jquery
// 这里的id就是前面定义的唯一标识，注意对应
$("#valScrollAmt").html(amtDom(numArr));
```
不过此时因为我们还没有增加样式，出来的界面还看不出效果，且有一丢丢丑

<img src=" https://seven777777.github.io/myblog/images/post/2020-06-02-valchange/pic1.png " />

下面我们就增加一些样式，这一步不仅仅是美化，而是必要的，这种实现方式对dom的排版是有固定要求的

```
//css
.valScrollAmt-box{
    display: flex;
    height: 28px;
    overflow: hidden;
    font-size: 20px;
    font-weight: bold;
}
.digit-container{
    display: flex;
    flex-direction: column;
    line-height: 28px;
}
```
以上是满足需求的一些基本样式属性

首先要保证数字的每一位是横向排列，另外每一位上的0~9必须纵向展示，并且只需展示当前的数值，其余的数值隐藏显示。
这里的高度也很重要，最外层盒子的高度最好要跟内部每一位数字的盒子的高度保持一致，另外这边的高度也是js里计算滚动长度的依据。

增加完样式的样子就是下面这样啦

<img src=" https://seven777777.github.io/myblog/images/post/2020-06-02-valchange/pic2.png " />


最后就是让他动起来了

```
//首先要定好差值为1的位移高度
let height = $("#valScrollAmt").height();

// 这里需要注意的是，如果你是需要累计持续增长 那么就需要将每次的变化前的数值数组缓存下来
// 每次滚动的时候就在旧数值的基础上计算滚动高度
// 可以定义一个变量如下
let savePositionArr = []

// 然后遍历所有的位数的dom
$(".scrollItem").each(function(i){
    let scrollTopOld,scrollTopNew;
    let num = parseInt($(this).data("show"));
    scrollTopNew = height * num;
    
    if(!.savePositionArr[i]){
        .savePositionArr[i] = 0
    }
    
    scrollTopOld = .savePositionArr[i]
    $(this).css("margin-top",-scrollTopOld);
    if(scrollTopOld != scrollTopNew){
        $(this).animate({marginTop: -scrollTopNew},1500);
    }

    savePositionArr[i] = scrollTopNew // 变化后及时将值替换存起来
});
```

最终应用的时候可以定义一个定时函数，控制变化的频率，每次变化的数值也可以根据实际情况设置

最终效果就是这样啦：

<img src=" https://seven777777.github.io/myblog/images/post/2020-06-02-valchange/valchange2.gif " />

还有一个带小数点和千分位的效果：

<img src=" https://seven777777.github.io/myblog/images/post/2020-06-02-valchange/valchange3.gif " />

是不是很简单！:smile:

#### 二、动态变化
这种方法比较简单，就不做详细分解了
，直接上代码：
```
// 将数字转换为逗号隔开的千分位格式
function num2qfw(num){
    num += '';
    if (!num.includes('.')) num += '.';
    return num.replace(/(\d)(?=(\d{3})+\.)/g, function($0, $1) {
        return $1 + ',';
    }).replace(/\.$/, '');
}

// 数值改变动画函数
function magic_number(value) {
    var num = $("#valChangeAmt");
    num.animate({count: value}, {
        duration: 500, 
        step: function() {
            num.text(num2qfw(parseInt(this.count)));
        },
        complete: function () {
            num.text(num2qfw(parseInt(value)));
        }
    }); 
};
let oldVal = 9374401
function update() {
    magic_number(oldVal);
    oldVal += Math.random()*100
}
update()
setInterval(update, 3000); //3秒钟执行一次 update();
```
效果如下：

<img src=" https://seven777777.github.io/myblog/images/post/2020-06-02-valchange/valchange4.gif " />

#### 三、滚动式变化完整代码
```
// css部分
.valScrollAmt-box{
    display: flex;
    height: 28px;
    overflow: hidden;
    font-size: 20px;
    font-weight: bold;
}
.digit-container{
    display: flex;
    flex-direction: column;
    line-height: 28px;
}

// html部分
<div id="valScrollAmt" class="valScrollAmt-box"></div>

// js部分（记得引入jquery，另外该示例写法为es6，可根据自己实际情况进行调整）
class animateObj {
    constructor(id,startNum,step,time){
        this.id = id//容器唯一标识
        this.startNum = startNum // 初始数值
        this.savePositionArr = [] //存放旧数据的位置数组
    }

    // 数字转成数组
    number2Arr(digit){
        var num_arr=[];
        for(var i = 0;i<digit.length;i++){
            num_arr.push(digit.charAt(i));
        }
        return num_arr;
    }

    // dom构建
    amtDom(arr){
        var str = '';
        for(var i = 0;i<arr.length;i++){
            if(parseInt(arr[i])>=0){
                str += '<div class="scrollItem digit-container" data-show='+arr[i]+'>\
                        <span>0</span>\
                        <span>1</span>\
                        <span>2</span>\
                        <span>3</span>\
                        <span>4</span>\
                        <span>5</span>\
                        <span>6</span>\
                        <span>7</span>\
                        <span>8</span>\
                        <span>9</span>\
                    </div>';
            }else{
                str += '<div class="sign-box"><span>'+arr[i]+'</span></div>';
            }
        }
        return str;
    }

    // 将数字转换为逗号隔开的千分位格式
    num2qfw(num){
        num += '';
        if (!num.includes('.')) num += '.';
        return num.replace(/(\d)(?=(\d{3})+\.)/g, function($0, $1) {
            return $1 + ',';
        }).replace(/\.$/, '');
    }

    animation(){
        const _this = this
        var height = $("#" + this.id).height();
        $(".scrollItem").each(function(i){
            let scrollTopOld,scrollTopNew;
            let num = parseInt($(this).data("show"));
            scrollTopNew = height * num;
            if(!_this.savePositionArr[i]){
                _this.savePositionArr[i] = 0
            }
            scrollTopOld = _this.savePositionArr[i]
            $(this).css("margin-top",-scrollTopOld);
            if(scrollTopOld != scrollTopNew){
                $(this).animate({marginTop: -scrollTopNew},1500);
            }

            _this.savePositionArr[i] = scrollTopNew
        });
    }

    init(){
        const _sNum = this.num2qfw(this.startNum)
        const numArr = this.number2Arr(_sNum);
        $("#" + this.id).html(this.amtDom(numArr));
        this.animation();
    }
}
let animate = new animateObj('valScrollAmt',1235.8)
animate.init()
// 这里的增量 3 以及 4秒的时间间隔 可以根据实际情况调整
setInterval(function(){
    animate.startNum += 3
    animate.init()
},4000)
```
> [戳这里](https://github.com/seven777777/blog-demo/blob/master/numChange.html) 可以去到我的github查看源码哦~
或者 [戳这里](https://seven777777.github.io/blog-demo/numChange.html) 直接看效果页面。

