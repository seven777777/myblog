---
layout: default
title: swiper loop：true引发的问题
excerpt : 最近在准备面试，想到之前面试总是会被问到：遇到过哪些坑，都是怎么解决的。每每遇到这种问题我都很尴尬，因为一下子让你去想踩过的坑还真不太想的起来，一般我只有再次遇到同样的坑的时候才会记起，所以决定以这篇文章开始，认真记录自己遇到过的坑，以备不时之需！
---

<h2>{{ page.title }}</h2>

最近在准备面试，想到之前面试总是会被问到：遇到过哪些坑，都是怎么解决的。每每遇到这种问题我都很尴尬，因为一下子让你去想踩过的坑还真不太想的起来，一般我只有再次遇到同样的坑的时候才会记起，所以决定以这篇文章开始，认真记录自己遇到过的坑，以备不时之需！

废话不多说，切入正题。

前段时间在写一个轮播的时候遇到了一个问题：
> 当swiper的loop属性设置为true的时候，第一页往前翻的那一页，以及最后一页往后翻的那一页点击跳转链接无效。

研究了一下发现，当loop模式下slides前后会复制若干个slide，从而形成一个环路，但是却不会复制绑定在dom上的click事件

好了，下面是重点，解决方法：
其实很简单，就一句话，不要在dom上绑定click事件，使用swiper的onclick回调函数就可以解决了。

下面贴上部分代码，有助于理解（因为直接从项目中拷过来，所以忽略无关代码）

```
<template>
  <div class="main-swiper">
    <swiper v-if="bannerDetails && bannerDetails.length>1" :options="swiperOption" ref="mySwiper">
      <!-- 幻灯内容 -->
      <swiper-slide v-for="image in bannerDetails">
        <div class="slide-item swiper-lazy" :style="{backgroundImage:'url('+ image.ImageUrl +')'}" :data-url="image.DirectedUrl"></div>
      </swiper-slide>
      <!-- 以下控件元素均为可选（使用具名slot来确定并应用一些操作控件元素） -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div v-if="bannerDetails && bannerDetails.length === 1" class="slide-item">
      <div class="prebook" :style="{'background-image':'url('+bannerDetails[0].ImageUrl+')'}" @click="toBannerPage(bannerDetails[0].DirectedUrl)"></div>
    </div>
  </div>
</template>
```

```
<script>
import { swiper, swiperSlide, swiperPlugins } from 'vue-awesome-swiper';
import {controller} from 'common/torlax/controller';
export default {
  name: 'main-swiper',
  created() {

  },
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        notNextTick: true,
        loop: true,
        autoplay: 5000,
        preloadImages: false,
        // 用户操作swiper之后，是否禁止autoplay。默认为true：停止。
        autoplayDisableOnInteraction: false,
        lazyLoadingInPrevNext: true,
        lazyLoadingInPrevNextAmount: 1,
        lazyLoading: true,
        // 点击事件，避免在dom上绑定事件时，loop复制的dom无点击事件
        onClick(swiper){
          //回调函数内部进行一些操作，因为我的url是动态获取的，所以这里将url数据绑定到DOM上，获取之后进行了一些操作，再用封装好的openUrl()函数打开链接。
          var url=swiper.clickedSlide.childNodes[0].attributes[0].value;
          var urlArr=url.split('/').splice(3);
          var newUrl="/"+urlArr.join('/');
          controller.openUrl(newUrl);
        }
      }
    }
  },
  //省略其他代码
  </script>
```




<p>{{ page.date | date_to_string }}</p>
