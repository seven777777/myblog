---
layout: post
title: 代码大全2——变量名的力量知识点总结！
time: 2020.08.11 17:18:42
tags: 干货
category: work
excerpt : 作为一个码龄差不多四五年的程序员，在开发过程中常常要面对各种类、变量、函数的命名。虽然这些年也差不多也逐渐形成了一些个人风格的命名规则，但并没有成一个比较规范的系统，因此很多时候还是比较随心的。最近看了《代码大全2》中变量名的力量一章，于是把书中的知识点挑出了一些列了出来。相信，对于有一定经验的程序员，可以帮助重新审视自己的日常编码习惯，从而改正一些错误的习惯；对于那些新手程序员，可以在初期，好好规范自己，从而养成良好的代码风格。
---

前言：
    
你是否在开发过程中随心所欲的进行变量命名？
    
作为一个码龄差不多四五年的程序员，在开发过程中常常要面对各种类、变量、函数的命名。
虽然这些年也差不多也逐渐形成了一些个人风格的命名规则，但并没有成一个比较规范的系统，因此很多时候还是比较随心的。

最近看了《代码大全2》中变量名的力量一章，于是把书中的知识点挑出了一些列了出来。
    
相信，对于有一定经验的程序员，可以帮助重新审视自己的日常编码习惯，从而改正一些错误的习惯；对于那些新手程序员，可以在初期，好好规范自己，从而养成良好的代码风格。
    
总之，这是一篇干货！


## 一、选择好变量名的注意事项
一个好的变量名是可读的，易记的和恰如其分的

### 命名注意事项
通常，对变量的描述就是最佳的变量名

##### 适当的命名长度
太短，无法传达足够的信息

太长，难写且会使得程序的视觉结构变得模糊不清

##### 变量名对作用域的影响
较长的名字适用于很少用到的变量或者全局变量，

较短的名字适用于局部变量或者循环变量

不过作为一项防御式编程策略，应尽量避免使用短的变量名

对位于全局命名空间中的名字加以限定词

### 变量名中的计算值限定词
对于一些表示计算结果的变量：总额，平均值，最大值等，使用类似于：Total、Sum、Average、Max、Min、Record、String、Pointer，这样的限定词来修改某个名字，应当把限定词加到名字的后面。
如：revenueAverage、expenseTotal

一致性可以提高可读性，简化维护工作

把计算的量放到名字后面的规则也有例外。Num限定词的位置已经是约定俗成的。Num放在变量名开始位置表示一个总数。放在结束位置代表一个下标。
+ NumCustomers——表示员工总数
+ customerCount——表示员工总数
+ customerIndex——代表某个特定员工

### 变量名中常用的对仗词
通过应用命名规则来提高对仗词使用的一致性，从而提高可读性。

+ begin/end
+ first/last
+ locked/unlocked
+ min/max
+ next/previous
+ old/new
+ opened/closed
+ visible/invisible
+ source/target
+ source/destination
+ up/down

## 二、为特定类型的数据命名
### 循环下标
约定俗成的名字：i,j,k

如果变量要在循环之外使用，应取一个更有意义的名字。

谨慎地为循环下标变量命名可以避免产生下标串话（index cross-talk)的常见问题：想用j的时候写了i，想用i的时候却写了j。同时也使得访问数据更加清晰:
score[teamIndex][eventIndex]要比score[i][j]给出的信息更多。
### 状态变量
为了清楚可见，标记应该用枚举类型、具名常量，或用作具名常量的全局变量来对其赋值，而且其值应该与上面这些量作比较
e.g.

bad:
```
if(printFlag == 16)
```
good:
```
if(reportType == ReportType_Annual)
```
### 临时变量
常用temp

但也可以使用更具描述性的名字进行替代

### 布尔变量
#### 典型的布尔变量名
+ done 表示某件事情已完成
+ error 表示有错误发生
+ found 表示某个值已经找到
+ success/ok 表示操作是否成功

> 给布尔变量赋予隐含 真/假 含义的名字

有些程序员（包括我自己）喜欢在布尔变量名前加上is，这种方法优点之一是它不能用于哪些模糊不清的名字：isStatus？
缺点之一是降低了简单逻辑表达式的可读性：if(isFound)可读性略差于if(found)

#### 使用肯定的布尔变量名
减少使用如下名字：notFound，notDone...
特别难阅读，尤其是它们被求反

### 枚举类型
可以通过组前缀，如：Color_、Planet_或者Month_来明确表示该类型的成员都属于一个组。

### 常量
具名常量时，应该根据该常量所表示的含义，而不是该常量所具有的数值为该抽象事物命名。。
Five = 6.0 就显得很可笑了。

## 三、非正式命名规则
### 与语言无关的命名规则的指导原则
#### 区分变量名和子程序名字
变量名和对象名以小写字母开始
    
子程序名以大写字母开始
    
#### 区分类和对象
##### 方案一：通过大写字母开头区分类型和变量
```
Widget widget
```
##### 方案二：通过全部大写区分类型和变量
```
WIDEGE widget
```
##### 方案三：通过给类型加上t_前缀区分类型和变量
```
t_Widget widget
```
##### 方案四：通过给变量加上“a”前缀区分类型和变量
```
Widget aWidget
```
##### 方案五：通过对变量采用更明确的名字区分类型和变量
```
Widget employeeWidget
```

> + 标识全局变量 g_
> + 标识成员变量 m_
> + 标识类型声明 t_
> + 标识具名常量 c_
> + 标识枚举类型元素 增加特定类型的前缀； 如：color_
> + 在不能保证输入参数只读的语言里标识只读参数
> + 格式化命名以提高可读性
>   两种常用的方法：大小写&分隔符

### 缩写的一般指导原则
+ 标准的缩写（列在字典中的常见缩写）
+ 去掉所有非前置元音 （computer->cmptr)
+ 去掉虚词 and、or、the等
+ 使用每个单词的第一个或前几个字母
+ 统一的在每个单词的第一、第二或第三个（选择最合适的一个）字母后截断
+ 保留每个单词的第一个和最后一个字母
+ 使用名字的每一个重要的单词，最多不超过三个
+ 去除无用的后缀 ing、ed等
+ 保留每个音节中最引人注意的发音
+ 确保不要改变变量的含义
+ 反复使用上述技术，直至将每个变量名长度缩减至8~20个字符或者达到所用语言对变量名的限制字符数

### 应该避免的名字
+ 避免使用令人误解的名字或缩写
+ 避免使用具有相似含义的名字
+ 避免使用具有不同含义却有相似名字的变量
+ 避免使用发音相近的名字
+ 避免在名字中使用数字
+ 避免在名字中拼错单词
+ 避免使用英语中常常拼错的单词：Absense、acummulate、acsend...
+ 不要仅靠大小写来区分变量名
+ 避免使用多种自然语言
+ 避免使用标准类型、变量和子程序的名字
+ 不要使用与变量含义完全无关的名字
+ 避免在名字中包含易混淆的字符 很难区分的对：
    + 数字1和小写字母l
    + 数字1和大写字母L
    + .和,
    + 零0和大写字母O
    + 2和Z
    + :和;
    + S和5
    + G和6
