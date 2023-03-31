---
layout: post
title: 如何在scss中巧妙的使用js变量
time: 2023.03.31 10:03:00
tags: SCSS 干货
category: work
excerpt: 提供一个scss中巧妙使用js变量，实现动态样式的思路！
---

随着前端开发技术的不断发展，scss 和 js 之前的壁垒逐渐打破，而双方的变量互用也极大地便利了我们的开发。

## js 中使用 scss 变量

开发过程中 js 中使用 scss 中的变量的场景会多一些，如一些色值的使用。

现在的常规的做法就是:

-   样式文件命名为：xxx.module.scss
-   将 js 需要使用的变量导出

```
:export {
    key: $var;
}
```

使用时直接 import 即可

## scss 中使用 js 变量

### 常规场景

其实这个场景在 vue 开发中已经司空见惯了，就是直接利用 v-bind 在 dom 中根据 js 变量条件绑定 class 或是 style

示例：

```
<div :class="{className:showClass}" :style="{'width':width}"></div>

<script>
//...
data(){
    return {
        showClass:true,
        width: '100px'
    }
}
</script>
```

### 特殊场景

本文主要是记录一些特殊场景下的解决思路

> 场景：针对动态生成的 dom，无法直接在 dom 上进行绑定操作

主要利用 css 的变量属性，在根元素进行赋值，从而动态生成的子元素可以使用改变量

示例：

```
// 根据label的长度动态设置生成的内部元素的偏移量
<div class="select-with-label" :style="{ '--select-range-left': label?.length * 14 + 20 + 'px' }" ></div>

<script>
//...
data(){
    return {
        label: '名称'
    }
}
</script>

<style lang="scss">
.select-with-label {
    <!-- 该属性为动态生成的dom的class类名 -->
    :deep(.el-select__tags) {
        left: var(--select-range-left);
    }
}
</style>

```

其实挺简单的，原理也是普通场景的原理，只不过做了个中转。

因为我自己在遇到这个场景时，乍一下没想到解决方案，搜索看到这个思路时，颇有一点恍然大悟的感觉，所以在此记录一下，也给有相同需求的同学提供一下思路。
