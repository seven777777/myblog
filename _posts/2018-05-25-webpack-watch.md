---
layout: default
title: webpack之watch
time: 2018.5.25 20:11:00
tags: webpack
category: 工作
excerpt : webpack在手动配置开发环境时，需要实时在网页中看到代码的更改，又不想要每次修改代码都手动`npm run build`一下，webpack提供三种解决方案，在此记录一下。
---

<h2>{{ page.title }}</h2>

  webpack在手动配置开发环境时，需要实时在网页中看到代码的更改，又不想要每次修改代码都手动`npm run build`一下，webpack提供三种解决方案，在此记录一下。
  - 观察者模式
  - webpack-dev-server
  - webpack-dev-middleware
 
## 观察者模式
在package.json文件中添加一个用于启动webpack观察者模式的npm script脚本
```
//package.json
{
    //...
    "script":{
        //...
        "watch":"webpack --watch",
        "build":"webpack"
    }
    //...
}
```
之后使用`npm run watch`就可以观察文件了

缺点是：修改之后需要手动刷新浏览器才能看到更改的代码

## webpack-dev-server(常用)
`webpack-dev-server`提供了一个简单的web服务器，并能够实时重新加载。

首先安装：

```
npm install --save-dev webpack-dev-server
```
其次修改配置文件，告诉开发服务器（dev server），在哪里查找文件：

```
//webpack.config.js
{
    //...
    devtool:'inline-source-map',
    devServer:{
        contentBase:'./dist'
    },
    //...
}
```
在package.json文件中添加一个script脚本
```
//package.json
{
    //...
    "script":{
        //...
        "watch":"webpack --watch",
        "build":"webpack",
        "start":"webpack-dev-server --open",
    }
    //...
}
```
运行`npm run start`即可。浏览器可以自动加载页面，并在修改之后自动重新编译

## webpack-dev-middleware
首先安装`express`和`webpack-dev-middleware`
```
npm install --save-dev express webpack-dev-middleware
```
其次对 webpack 的配置文件做一些调整，以确保中间件(middleware)功能能够正确启用

```
//webpack.config.js
{
    //...
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    }
    //...
}
```
下一步就是设置自定义的 express 服务,在项目根目录新建server.js文件
```
//server.js
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');


const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);


app.use(webpackDevMiddleware(compiler,{
    publicPath: config.output.publicPath
}));
app.listen(3000,function(){
    console.log('Example app listening on port 3000!\n');
})
```
下一步,在package.json文件中添加一个script脚本
```
//package.json
{
    //...
    "script":{
        //...
        "watch":"webpack --watch",
        "build":"webpack",
        "start":"webpack-dev-server --open",
        "server": "node server.js"
    }
    //...
}
```
运行`npm run server`即可。使用此链接查看：http://localhost:3000

<p>{{ page.date | date_to_string }}</p>
