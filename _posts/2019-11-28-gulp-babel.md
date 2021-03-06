---
layout: post
title: gulp+babel解决传统项目IE环境ES6语法兼容问题
time: 2019.11.28 15:35:29
tags: Gulp Babel
category: work
excerpt : ES6给我们带来便利的同时，也给我们带来了一下麻烦。当然自从chrome等浏览器对于ES6语法的全面支持以来，这种麻烦也已经降到了最低，如果你的项目完全不需要考虑兼容问题，现在你在项目中可以尽情的使用ES6，且不用做特殊处理。当然这是理想情况。
---

#### 前言
ES6给我们带来便利的同时，也给我们带来了一下麻烦。当然自从chrome等浏览器对于ES6语法的全面支持以来，这种麻烦也已经降到了最低，如果你的项目完全不需要考虑兼容问题，现在你在项目中可以尽情的使用ES6，且不用做特殊处理。当然这是理想情况。

前几年我主要做的都是H5方面的开发，所以对于浏览器的兼容问题关注也不是很多。近两年的开发也都是基于VUE框架，对于vue,如果需要使用ES6并且需要兼容一些低版本的浏览器，比如万恶的ie，我们可以安装`babel-polyfill`是代码正常运行。方法很简单：

1. 首先install`babel-polyfill`到你的项目中:


```
<!--安装-->
npm install babel-polyfill --save-dev
```

2. 其次在你的代码头部加载`babel-polyfill`（注意：要在代码前，第一个js文件的顶部）

```
<!--使用：vue项目的话就是在main.js的头部-->
import 'babel-polyfill';
// 或者
require('babel-polyfill');
```
#### 正文
前段时间写了一个项目，由于各种原因，最终选择了较老的开发方式：jquery+php，由于我写sass写习惯了，不想写css，所以我又引入了gulp进行了简单的配置。

最近突然得知该项目要进行对ie的兼容，于是乎赶紧用IE打开项目，悲伤的发现整个项目都崩掉了。

排查了许久，一开始我以为是我使用的一些第三方库导致的不兼容，后来发现根本原因在于我项目中的js几乎全部使用的ES6语法。遂研究了一下解决方法：
gulp+babel将ES6转ES5。

总结一下gulp环境引入babel的方法：

1. 首先，相关依赖的安装（gulp的安装我就不说了）

```
// 安装依赖
npm install gulp-babel --save-dev
npm install babel-core --save-dev
npm install @babel/preset-env --save-dev
//本来我查资料应该是只要以上三个依赖，但是最终运行时会报缺少@babel/core的错，所以再安装下面这个
npm install @babel/core --save-dev
// 下面这个依赖用于js代码的压缩(可选)
npm install gulp-uglify --save-dev
// 用来重命名（可选）
npm install gulp-rename --save-dev

```
2. 新建一个gulp任务
如果你的项目已引入gulp，直接在gulpfile.js文件中增加即可，如果没有，就新建一个gulpfile.js的文件，然后加入下面代码

```
// gulpfile.js
const babel       = require('gulp-babel');
const uglify      = require('gulp-uglify');
const rename      = require('gulp-rename');


//创建一个名为js的任务(名字可以任意取)
gulp.task('js', function(){
    // 首先取得你需要转译的js，此处以'js/common.js'为例
    // 也可多选，具体看实际情况配置
    // **/表示包含所有子文件夹
    // *.js 表示所有后缀是js的文件
    return gulp.src('js/common.js')
        //将ES6代码转译为可执行的JS代码
        .pipe(babel())
        //js压缩
        .pipe(uglify())
        //重命名为common.min.js
        .pipe(rename('common.min.js'))
        //输出文件夹：此处设置的当前文件夹，也可根据实际情况设置
        .pipe(gulp.dest('js'))
})

// 配置默认命令执行任务
gulp.task('default',gulp.parallel('js','其他任务'));

```
3. 配置babelrc
新建文件：.babelrc

```
//.babelrc
{
    "presets": [ "@babel/preset-env"]
}
```
以上代码配置完成后，在git命令行工具中执行`gulp`，执行完成，你会发现js文件夹下多了一个common.min.js文件，在需要使用的地方引用该文件，然后就ok拉~

#### 尾
最后还是想吐槽一句，ie真的是太恶心了，为什么现在还会有网站需要兼容ie，心累！
