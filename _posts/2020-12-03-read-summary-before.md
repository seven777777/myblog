---
layout: post
title: 2019年及2017年度读书小结
time: 2020.12.03 16:46:38
tags: 阅读 总结
category: life
series: 读书小结
excerpt: 近日得空做一些整理，年底了，总归是喜欢回望一下这一年，展望一下下一年。因为最后一个月的阅读还没有截止，索性就把前两年的阅读数据翻出来总结了一番。
---

<style>
.chartbox{
    width: 100%;
    height:640px;
    margin:20px 0;
}
.chartbox img{
    width:100%;
    height:auto;
}
</style>

近日得空做一些整理，年底了，总归是喜欢回望一下这一年，展望一下下一年。因为最后一个月的阅读还没有截止，索性就把前两年的阅读数据翻出来总结了一番。

<div id="book-chart" class="chartbox"></div>

注意到 2017 年的读书记录停在了六月，回忆了下，那段时间在准备到上海工作的事宜，频繁的跨城市面试，再到随后的搬家，以及新公司的适应带来的巨大压力，不知不觉阅读计划就搁置了，而这一放就是一年半。所以说，坚持阅读是一件需要持之以恒的事情，不论是闲适时还是在困境中！

<div id="book-chart2" class="chartbox"></div>

其实坚持阅读这件事已经断断续续坚持了好些年了，但是 2017 年之前的相关记录已经找不到了，不过确实早些年只是零散的读，并没有制定计划，所以效率其实并不高。但是整理发现，这两年的量虽然逐渐提高了，但是质量却并不高。比如，如今再来看前两年读过的书，且暂不说几乎记不清每本书大致的内容，甚至需要通过翻找记录才能记起曾经读过了哪些书。你看，记录是必要的，但关键还是要思考，而我现在，缺少思考。

时间确实也是过去蛮久了，所以总结也就谈不上了，顶多也就是归纳整理一下，所幸之前在微博打卡留下过只言片语，在此处做个摘抄。

> #一月一本书# 二月打卡——加西亚·马尔克斯《百年孤独》。直到看完都还在纠结于各种重复的名字对应的人物，全篇基调沉重，每个人都是悲剧，充斥着全篇的倒序手法，描述了一个家族从开始到繁盛到衰亡的过程…生命就是一个个循环，字里行间就隐约能看到结局:伴随着羊皮卷的破译，最后一个奥雷里亚诺带着所有这个家族的痕迹消失，就仿佛从来没有存在过…

> #一月一本书# 三月打卡——余秋雨《文化苦旅》。之前比较喜欢美文形式的散文，看完这本书发现这种文化散文也是好生喜欢…常说读万卷书不如行万里路，可是若没有读完万卷书，我觉得，这万里路走了也没太多收获。书其实也就是粗略的读了一遍，印象较深的就是宁古塔，天一阁，西域等，很有画面感，看完就特想到那些地方去看看…另外关于从前的文字狱，以及近代的文革等事件，仅是粗略的了解了下，已是觉得沉重地喘不过气了！

> #一月一本书# 四月打卡——《活着》、《小王子》其实这两本书大概只花了两天左右的时间就看完了，整个四月主要还是把《Javascript 高级程序设计（第三版）》这本书技术书籍看完了…
> 《小王子》是@小小小姣姣 Nancy-\_- 分享给我的，其实之前看过电影，所以文字看起来脑子里会有画面感，喜欢书里传递出来的一种仪式感，生活中还是需要多点的仪式感来增加生活的幸福感。
> 《活着》这本书还是略微沉重一些，小说里最后就剩下福贵一人孤独的活着…不甘心地把张艺谋的电影版，还有不知谁导的电视剧版都翻出来看了一遍，都做了这改编，不过电影版的还算是稍微有个美好的结局了，为福贵留下了家珍，二喜还有苦根，这才心里稍微好受了一些…
> 可是人生来孤独，所有亲近的人都只会陪你走一段而已…所以孤独怕是是每个人活着要去学的一门必修课了！

<script type="text/javascript" src="{{ site.url }}{{site.baseurl}}/js/echarts.min-4.8.0.js"></script>
<script type="text/javascript" src="{{ site.url }}{{site.baseurl}}/js/bookList.js"></script>
<script type="text/javascript" src="{{ site.url }}{{site.baseurl}}/js/chartsCommon.js"></script>

<script type="text/javascript">

if (window.innerWidth < 600) {
    var img2017 = '{{ site.url }}{{site.baseurl}}/images/post/2020-12-03-read-summary-before/pic-2017.png';
    var img2019 = '{{ site.url }}{{site.baseurl}}/images/post/2020-12-03-read-summary-before/pic-2019.png';

    setChartImg('book-chart',img2017)
    setChartImg('book-chart2',img2019)
}
else {
    var charts = [];

    var myChart = echarts.init(document.getElementById('book-chart'));
    var baseData = bookData['2017']
    let opt = getReadSummaryChartOpt(baseData,{
        title: '2017年度读书统计',
        colors: ['#fa7f72','#8bcdcd','#adb36e','#ffdd93','#79a3b1'],
        bgColor: '#214252',
        txtColor: '#bbbbbb'
    })
    opt.grid[0]= {
        left:'70%',
        top:'80%',
        // right:'5%',
        // bottom:'80%',
    }
    opt.series[0].center = ['50%','60%']
    myChart.setOption(opt);
    charts.push(myChart)

    var myChart2 = echarts.init(document.getElementById('book-chart2'));
    var baseData = bookData['2019']
    let opt2 = getReadSummaryChartOpt(baseData,{title:'2019年度读书统计'})
    myChart2.setOption(opt2);
    charts.push(myChart2)

    setResize(charts)
}

</script>
