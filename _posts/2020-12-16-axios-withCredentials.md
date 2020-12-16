---
layout: post
title: axios跨域问题小记
time: 2020.12.16 14:58:00
tags: 干货 踩坑
category: work
excerpt : 后端设置了允许跨域，前端访问接口时依旧提示跨域
---
## 问题描述：
    
    后端设置了允许跨域，前端访问接口时依旧提示跨域
    
<img src="https://seven777777.github.io/myblog/images/post/2020-12-16-axios-withCredentials/pic01.png" />

## 原因：
设置axios实例时，设置了`withCredentials`:`true`.
```
let myHttp = axios.create({
    baseURL: env.apiPath,
    timeout: 30000,
    headers: {
        'Content-Type': `application/json; charset=utf-8`
    },
    withCredentials: true//主要因为这个设置
});
```
## 解决：如何避免之后踩坑
对于不需要发送cookie的请求，只需将`withCredentials`设为`false`即可。

否则：如果前端配置了`withCredentials`:`true`，后端在增加 `response` 头信息`Access-Control-Allow-Origin`时必须指定域名，且不能为`*`

```
header("Access-Control-Allow-Origin","指定域名");
header("Access-Control-Allow-Credentials", "true");
```
