---
layout: post
title: 关于引用类型：数组和对象的赋值
time: 2018.10.26 16:32:00
tags: js
category: work
excerpt : js中的数组和对象都是引用类型，其实说白了，数组的数据类型也是对象，因此我们在实际项目中需要注意，如果直接将一个对象赋值给另一个空对象，这个操作仅仅是让两个对象的指针指向了同一个地方。
---

js中的数组和对象都是引用类型，其实说白了，数组的数据类型也是对象，因此我们在实际项目中需要注意，如果直接将一个对象赋值给另一个空对象，这个操作仅仅是让两个对象的指针指向了同一个地方。

此时的两个对象中的任意一个的值发生改变，势必都会影响到另一个。
```
let arr1=[1,2,3];
let arr2=arr1;
console.log(arr1,arr2)//[1,2,3],[1,2,3]
arr2.push(4);
console.log(arr1,arr2)//[1,2,3,4],[1,2,3,4]
```

但是我们在实际开发过程中常常会需要让两个对象赋值之后相互不影响，具体做法整理如下：

##### 方法一：concat()方法
```
let arr1=[1,2,3];
let arr2=[].concat(arr1)
arr1//[1, 2, 3]
arr2//[1, 2, 3]
arr2.push(4)
arr1//[1, 2, 3]
arr2//[1, 2, 3,4]
```

##### 方法二：JSON.stringify()+JSON.parse()
先转换成字符串在转换成数组
```
let arr1=[1,2,3];
let arr2=JSON.parse(JSON.stringify(arr1))
```
> 注意：对于对象数组，方法一不适用，应当使用方法二。具体如下：

```
let arr1=[
    {
        name:'a',
        value:1
    },
    {
        name:'b',
        value:2
    }
];
let arr2=[].concat(arr1);
arr1[0].value=23
```
![image](https://seven777777.github.io/blog-demo/images/1.png)

##### 方法三：ES6的扩展运算符 ...
```
let arr1=[1,2,3];
let arr2=[...arr1];
```
##### 方法四：jQuery的extend
```
let arr1=[1,2,3];
let arr2=$.extend(true,[],arr1);
```
##### 方法五：Object.assign()
```
let arr1=[1,2,3];
let arr2=Object.assign([],arr1);
```

> tip: 以上示例均采用的数组，对于对象同样适用（除了方法一）


<p>{{ page.date | date_to_string }}</p>
