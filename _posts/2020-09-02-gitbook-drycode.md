---
layout: post
title: 关于gitbook构建的第一本书：业务代码干货宝典
time: 2020.09.02 10:43:13
tags: gitbook
category: work
excerpt : 起因是对于开发过程中一些复用率比较高的代码片段，每次遇到都要想着去之前项目中出现的地方，进行参考复用，时间久了，找起来就很麻烦，于是准备在github建一个仓库，用来整理存放一些常用的代码干货。
---

关于为何会构建这本书：

起因是对于开发过程中一些复用率比较高的代码片段，每次遇到都要想着去之前项目中出现的地方，进行参考复用，时间久了，找起来就很麻烦，于是准备在github建一个仓库，用来整理存放一些常用的代码干货。

仓库建完搁置一段时间，想到之前希望自己平时的写作也有像github一样的仓库进行管理，于是去了解到了gitbook，后来写作方面一直也没有什么进展，于是也是搁置。

于是两件事碰撞到一起，一拍即合，即为我的干货代码找到一个很方便的呈现方式，也让我借此熟悉了一边gitbook构建的过程，一举两得！

下面主要针对构建过程中的一些重要点进行归纳整理（本文适用于有一定github使用基础的人群，如果需要傻瓜式详细教程，可以去网上搜索，有很多）

#### 技术栈
本书开发技术栈：GitBook + Typora + Git

> + Typora 下载地址：https://typora.io/ 
> +  Git 下载地址：https://git-scm.com/downloads


#### 项目相关语法
+ `npm install -g gitbook-cli` 安装gitbook

+ `gitbook init` 初始化
  初始化后会生成两个文件 ——README.md 和 SUMMARY.md 

  在SUMMARY.md中修改文件目录后，重新执行`gitbook init`，会根据SUMMARY.md文件中描述的目录和文件,创建相应的文件夹

  ```
  // SUMMARY.md 示例
  * [前言](README.md)
  * [第一章](Chapter1/README.md)
  	* [第1节：test](Chapter1/test.md)
  ```

+ `gitbook serve` 预览书籍

  默认端口是：4000

  可以指定端口 `gitbook serve --port xxxx ` 

  默认会输出到`/_book`文件夹下，可指定输出文件夹 `gitbook serve [书籍路径] [输出路径]`

+ `gitbook build` 创建书籍

  默认会输出到`/_book`文件夹下，可指定输出文件夹 `gitbook build [书籍路径] [输出路径]`

  因为我希望能够在github上生成预览页面，因此，根据github page的设定，此处使用`gitbook build ./ ./docs` 设置输出文件夹名为`docs`

  

#### 其他

1. 生成 PDF 格式的电子书 

 ```
 gitbook pdf ./ ./mybook.pdf
 ```

2. 生成 epub 格式的电子书 

 ```
 gitbook epub ./ ./mybook.epub
 ```

3. 生成 mobi 格式的电子书 

 ```
 gitbook mobi ./ ./mybook.mobi
 ```
 

最后放两个链接：

这里整理了很多gitbook相关的插件：[https://www.cnblogs.com/mingyue5826/p/10307051.html](https://www.cnblogs.com/mingyue5826/p/10307051.html)

这是我的书在github的仓库：[https://github.com/seven777777/DryCodeWarehouse](https://github.com/seven777777/DryCodeWarehouse)


最后是我的书的访问地址：[业务代码干货宝典](https://seven777777.github.io/DryCodeWarehouse/)

内容还在不断更新中，如果觉得有用，可以收藏一下哟！

