---
layout: post
title: Vue多页面+单页应用集合的项目配置开源~
time: 2020.07.23 10:31:49
tags: Vue
category: work
excerpt : 这个项目适用于一些集合了系列子项目的项目，并且希望仓库能够统一的情况，不过目前搭建的这个架构还没有经过实际操作的考验，因此可能会有一些没有考虑到的一些实际情况中会遇到的问题，所以暂且放出了，如果有一些没有考虑到的情况，可以留言说明！
---

近两年因为公司的业务主要都是toB的，因此工作内容也都是偏定制，系统化的一些中小型产品，大多也都是一个产品一个仓库。

年前写了一个小项目，当初构建项目的时候也是纯粹把它当成一个独立产品去做的，结果今年被产品告知，年前的那个项目，现在要追加几个子项目，最终集成一个系列项目，并且要求代码放在一起，统一管理。这就比较尴尬了，工期又比较紧，所以重构项目架构也不是太现实，最后权衡之下，也就只能采取配置路由的下策，虽然知道这样做，在代码层面来看是不规范的~

于是，项目结束之后，便趁有空配置了一个集成多页面和单页面的项目模板，目前该项目已经开源在我的github上：[https://github.com/seven777777/vue-multiple-single-pages](https://github.com/seven777777/vue-multiple-single-pages)，如果有需要的可以去下载代码，直接在基础上进行扩展，如果觉得还不错，记得给我一个小星星哟~

下面详细说一下关于项目的创建：

### 1.初始化
==说明：项目使用`Vue-cli4`初始化==

关于如何用vue脚手架快速搭建项目，可以自行搜索，网上相关的教程很多，在此就不赘述。

### 2.vue.config.js 配置
首先新建一个叫`vue.config.js`的文件

配置如下：（关于配置也参考了一些其他人的写法）

```
const pages = {}
const titles = {
  'moduleA': '项目A',
  'moduleB': '项目B',
}

const glob = require('glob')
glob.sync('./src/modules/**/main.js').forEach(path => {
    console.log(path);
    const pageName = path.split('./src/modules/')[1].split('/main.js')[0]
    pages[pageName] = {
        entry: path,
        filename: pageName + '.html',
        // If doesn't exist, fallback to 'public/index.html'
        template: pageName + '.html',
        title: titles[pageName],
        chunks: ['chunk-vendors', 'chunk-common', pageName],
    }
})

const isDev = (process.env.NODE_ENV === "development")

module.exports = {
    pages,
    productionSourceMap: isDev,
    runtimeCompiler: true,
}
```
其实就是配置了多个入口文件，先是手动配置了不同子项目的`title`，当然如果你需要不同的favicon，也可以在此配置。然后通过遍历设定存放模块代码的文件夹来配置不同page的入口及其他的配置。

### 3.单页面模块的相关配置
其实就是把之前脚手架生成的main.js文件分别在每一个单页面模块里重新配置一下，其他的router，store也是同理。

直接贴一下最终的目录结构吧：

<img src="https://seven777777.github.io/myblog/images/post/2020-07-06-vue-multiple-single-pages/pic01.png" />

```
// moduleA-main.js

import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

const isDev = (process.env.NODE_ENV === "development")
Vue.config.productionTip = isDev

import '@/assets/style/moduleA.scss'

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
```
```
// moduleA-router.js

import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/moduleA/index",
        name:'模块A-首页',
        component: () => import(/* webpackChunkName: "moduleAPage" */ "./index")
    },
    {
        path: "/moduleA/page1",
        name:'模块A-page1',
        component: () => import(/* webpackChunkName: "moduleAPage" */ "./page1")
    }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

```

在各自的模块中可以引入各自需要的资源，不会相互影响。同时也可以配置一些公共使用的组件，文件。（如果是系列子项目，那么可能在某些方面需要保持系列一致性，因此可能会在独立的基础上，又有一些相同）。

最终打包的结果如下：

<img src="https://seven777777.github.io/myblog/images/post/2020-07-06-vue-multiple-single-pages/pic02.png" />


总结:
    这个项目适用于一些集合了系列子项目的项目，并且希望仓库能够统一的情况，不过目前搭建的这个架构还没有经过实际操作的考验，因此可能会有一些没有考虑到的一些实际情况中会遇到的问题，所以暂且放出了，如果有一些没有考虑到的情况，可以留言说明！