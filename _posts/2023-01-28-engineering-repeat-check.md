---
layout: post
title: 前端工程化-多维度检测重复代码
time: 2023.01.28 11:12:34
tags: 前端工程化 学习记录
category: work
excerpt: 之前在极客学院学习的课程，简单的记录一下
---

## 1. 检测项目重复代码
### 1.1 检测方案：jscpd
#### 方法一：
+ 全局安装jscpd依赖`npm i -g jscpd`
+ 项目根路径执行：`jscpd -p "src/**/*.js" -k 15 -l 5`
<img src="https://seven777777.github.io/myblog/images/post/2023-01-28-engineering-repeat-check/pic01.png" />

#### 方法二：Node Api
项目中安装jscpd依赖
<img src="https://seven777777.github.io/myblog/images/post/2023-01-28-engineering-repeat-check/pic02.png" />

#### 可视化报告
安装：@jscpd/html-reporter
<img src="https://seven777777.github.io/myblog/images/post/2023-01-28-engineering-repeat-check/pic03.png" />

### 1.2 危害性
1. 可读性差
2. 难维护

### 1.3 解决方案
1. 封装组件
2. 提炼函数
3. 方法提升（创建类）

## 2. 圈复杂度检测
衡量代码质量的指标

定义：代码开始执行到结束的可走路径
<img src="https://seven777777.github.io/myblog/images/post/2023-01-28-engineering-repeat-check/pic04.png" />

### 2.1 如何检测
<img src="https://seven777777.github.io/myblog/images/post/2023-01-28-engineering-repeat-check/pic05.png" />
ESLint——complexity
<img src="https://seven777777.github.io/myblog/images/post/2023-01-28-engineering-repeat-check/pic06.png" />

### 2.2 主要思想
将复杂的逻辑进行分离，能抽象的逻辑尽量抽象到一个纯函数中，在主流程中进行调用

## 3. 代码覆盖率
### 如何分析？
+ Istanbul 工具
单元测试：Jest+Chai自动统计代码覆盖率

+ assets-retry
容灾方案