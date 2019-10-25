---
layout: default
title: 小程序初涉——入口页设置&事件绑定
time: 2018.8.10 14:30:00
tags: 微信小程序
category: work
excerpt : 情景一，如何设置小程序的入口页面。情景二，日常开发时，避免每次刷新都回到初始页面，影响开发效率，可以通过设置编译模式，为当前开发页面添加一个编译模式。
---

<h2>{{ page.title }}</h2>
<p>{{ page.tags }}</p>

## 入口页设置
### 情景一：小程序初始化页面
根目录下的app.json文件中，控制pages数组，设置在第一行的页面就是默认启动页面

例如下面的设置中，home页就是启动页面，想要修改启动页，只需要改变排列顺序即可。
```
//app.json
{
    "pages":[
        "pages/home/home",
        "pages/login/login",
        //...
    ],
    "window":{
        //...
    },
    //...
}
```
### 情景二：开发不同页面时希望不要每一次刷新都回到初始页
可以在微信开发工具中进行设置

步骤如下：
![image](https://seven777777.github.io/myblog/images/post/xcx01.png)
![image](https://seven777777.github.io/myblog/images/post/xcx02.png)
![image](https://seven777777.github.io/myblog/images/post/xcx03.png)

> tip:此处的可视化修改都可以对应到项目的`project.config.json`文件内的设置，该编译设置对应的就是如下：

```
//project.config.json
{
    //...
    "condition": {
        //...
        "miniprogram": {
			"current": -1,
			"list": [
				{
					"id": 1,
					"name": "test",
					"pathName": "pages/index/index",
					"query": ""
				},
				//...
			]
		}		
    }
}
```
## 事件绑定
bind事件绑定不会阻止冒泡事件向上冒泡，catch事件绑定可以阻止冒泡事件向上冒泡。

使用capture-前缀阻止事件的冒泡和捕获

<p>{{ page.date | date_to_string }}</p>
