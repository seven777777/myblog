---
layout: post
title: 小程序初涉——倒计时效果
time: 2018.8.14 12:45:00
tags: 微信小程序
category: work
excerpt : 如果是平时的pc或H5的项目，要实现这个效果，可能选择性还会再多一些，包括使用SVG,transform等来实现。考虑到小程序的一些局限性，所以选择用canvas+js来实现。
---

近期做的一个类似头脑王者小程序项目，其中需要实现一个倒计时圆环的效果，如下图：

![image](https://seven777777.github.io/myblog/images/post/xcx.gif)

如果是平时的pc或H5的项目，要实现这个效果，可能选择性还会再多一些，包括使用SVG,transform等来实现。考虑到小程序的一些局限性，所以选择用canvas+js来实现。

### canvas画圆环
话不多说直接贴代码,首先是wxml部分，需要定义canvas的canvas-id，也就是canvas的唯一标识
```
//xxx.wxml
<canvas class="countDown_canvas" canvas-id="canvasCount"></canvas>
```
可以给画布增加一个样式，以此处为例，增加一个`countDown_canvas`的样式,具体可根据需求调整
```
//xxx.wxss
.countDown_canvas{
    width: 151rpx;
    height: 151rpx;
    margin: 0 auto;
}
```
下面是重点JS的部分：因为之后还有倒计时的效果，所以这里的倒计时数字以及画圆的起止点都需要抽出来作为变量，方便之后操作。

具体canvas的操作若还有不清楚的，可以查看官方文档，此处就不多做介绍了。
```
//xxx.js

//data部分
data: {
    countdownNum: 10,// 倒计时显示数字
    begin: - (1 / 2 * Math.PI),// canvas画圆的起点
    pai2: 2 * Math.PI,// 代表整圆，也就是画完一圈的终点
    initNum: 10, //倒计时数
    spaceNum: 1000, //文字倒计时间隔
    space: 10, //环倒计时间隔
},

//canvas画圆环
//这里需要传一个参数，代表倒计时已经进行了几秒，此时如果直接在onload中调用this.drawRang(0),就可以画出一个静止的圆环了
drawRang(overTime){
    // 页面渲染完成
    var cxt_arc = wx.createCanvasContext('canvasCount');
    //开始外部白色圆
    cxt_arc.setLineWidth(28);//设置圆环的宽度
    cxt_arc.setStrokeStyle('#ffffff');//设置圆环的颜色
    cxt_arc.setFillStyle('#382BC3');//设置填充的颜色
    cxt_arc.setLineCap('round');//设置圆环端点的形状
    cxt_arc.beginPath();//开始一个新的路径
    cxt_arc.arc(37, 39, 22, this.data.begin, this.data.pai2, false);//设置一个原点(37, 39)，半径为22的圆的路径到当前路径
    cxt_arc.stroke();//对当前路径进行描边
    cxt_arc.fill();//对当前路径进行填充
    cxt_arc.setFillStyle('#fff');//改变填充的颜色
    cxt_arc.setFontSize(25);//设置字体大小
    cxt_arc.setTextAlign("center");//设置字体居中显示
    cxt_arc.fillText(this.data.countdownNum, 37, 48);//在坐标(37,48)处输入文字10
    //白色圆上的绿色圆
    var end = this.data.begin + (this.data.pai2 / 10) * overTime;
    if (overTime == 0) {
        end = this.data.pai2 * + this.data.begin
    }
    cxt_arc.setLineWidth(6);//设置圆环的宽度
    cxt_arc.setStrokeStyle('#03DCF2');//设置圆环的颜色
    cxt_arc.setLineCap('round')//设置圆环端点的形状
    cxt_arc.beginPath();//开始一个新的路径
    cxt_arc.arc(37, 39, 29, this.data.begin, end, true);
    cxt_arc.stroke();//对当前路径进行描边
    
    cxt_arc.draw();
},
```
### 倒计时效果
思路：
1. 首先想到的实现方法自然就是通过setInterval定时函数来实现
2. 数字的变化频率是一秒一次，但是外圈为了看不出卡顿，所以变化频率应该很快，因此这边需要两个变量分别去控制,这里分别使用的是spaceNum和space

所以，最终使用以下代码实现
```
//xxx.js

// 倒计时
countdown(){
    this.rangRun = 0;
    clearInterval(this.cuntDownCir);
    this.cuntDownCir = setInterval(()=>{
        var n = this.data.initNum - Math.floor(this.rangRun / this.data.spaceNum);
        var overTime = this.rangRun / this.data.spaceNum;
        this.setData({
            countdownNum: n
        });
        this.drawRang(overTime);
        this.rangRun = this.rangRun + this.data.space;
        if (overTime >= 10) {
            clearInterval(this.cuntDownCir);
        }
    }, this.data.space);
},
```
完整代码示例在我的github上，[戳这里！](https://github.com/seven777777/wechatapp-demo/tree/master/pages/canvas)喜欢记得给我点个星哦~

<p>{{ page.date | date_to_string }}</p>
