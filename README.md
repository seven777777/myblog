# seven'blog
[https://seven777777.github.io/myblog/](https://seven777777.github.io/myblog/)

### 更新日志
- 2017/3/2 首次创建（之后一直搁置）
- 2018/5/11 再次启动
- 2018/5/18 头部样式重写
- 2018/5/22 整理逻辑重新梳理
- 2018/5/24 首次上传之前写过发表在CSDN的博客
- 2019/3/27 开始着手改版工作
- 2019/10/25 V2.0.0改版开始。引入swiper
- 2019/10/29 首页大体布局完成，项目重新整理

### 项目结构
- _config.yml //保存配置数据
- _includes //相当于组件文件，可在实际页面中重用，使用标签{% include file.ext %}添加
	- footer.html
	- header.html
- _layouts //布局，是包裹在文章外部的模板。可以在YAML头信息中根据不同文章进行选择
	- default.html
	- recent.html
- _posts //文章，格式必须符合YEAR-MONTH-DAY-title.MARKUP
	- 2017-03-02-hello-world.html
	- ...
- _site 
- _style //样式文件
	- _base.head.scss
	- ...
	- gather.scss
- css //最终页面调用的样式
	- default.min.css
- images //图片
- gulpfile.js //gulp配置文件
- index.html //首页
- package.json 

### 项目启动
- 预览：
`jekyll serve`
- 修改：
`gulp`
	
### 页面变量

```
---
layout: //布局模板（_layouts 文件夹中设置）
time: //文章创建时间
title: //页面title
tags: //主题标签（实用空格分开 ep:平滑滚动 css js）
category: //大分类（eg：生活/工作）
series: //系列博文
permalink: //路由标签
excerpt : //文章摘要
---
```
