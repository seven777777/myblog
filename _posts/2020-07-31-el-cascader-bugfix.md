---
layout: post
title: elementUI的cascader级联选择控件使用踩坑：设置默认值回显问题解决方案（亲测有效！）
time: 2020.07.31 16:44:05
tags: Vue 踩坑
category: work
excerpt : 记录一个刚刚遇到的问题，以及解决方法。希望可以帮助之后遇到同样问题的小伙伴们！
---

记录一个刚刚遇到的问题，以及解决方法。希望可以帮助之后遇到同样问题的小伙伴们！

### 问题描述
使用elementui的级联选择控件，并需要对其设置默认值，以及修改默认值时，发现问题：

先贴出相关核心代码如下：

```
<el-cascader
    ref="locationCascader"
    v-model="location"
    placeholder="省份/城市/区域"
    :options="cityRegionObj">
</el-cascader>

data(){
    return {
        location:[]
    }
}

```


##### 1.首次设置默认值 此时 location 的值是 ['湖北省','武汉','东湖高新']
<img src="https://seven777777.github.io/myblog/images/post/2020-07-31-el-cascader-bugfix/el_cascader01.gif" />

可以看见首次载入显示是没有问题的

##### 2.再次设置 location 的值为 []

<img src="https://seven777777.github.io/myblog/images/post/2020-07-31-el-cascader-bugfix/el_cascader02.gif" />

这时控件下拉的值依旧还保留着上一次的值

### 解决过程
首先想到的是去官方的API里寻找有没有我没有注意到的属性和方法。

经过一番查找，我发现了下面这个方法：

<img src="https://seven777777.github.io/myblog/images/post/2020-07-31-el-cascader-bugfix/el_cascader03.png" />

然后当我信心满满的前去时间时，发现报错。

这条路走不通，于是只能继续网上搜索解决方案，也看到一些提出的解决方法，其中包括修改源码等等，尝试了几个，也都没有效果。

最终在这里☞[https://github.com/ElemeFE/element/issues/18669](https://github.com/ElemeFE/element/issues/18669)找到了解决方法！

### 解决方法
```
methods:{
    <!--重新赋值前先调用此方法-->
    <!--this.$refs.locationCascader：这个值基于你之前在dom上定义的ref-->
    resetCasadeSelector() {
        if (this.$refs.locationCascader) {
            this.$refs.locationCascader.$refs.panel.activePath = []
            this.$refs.locationCascader.$refs.panel.calculateCheckedNodePaths()
        }
    }
}
```
亲测有效，如果还有其他有效方法，欢迎留言交流！