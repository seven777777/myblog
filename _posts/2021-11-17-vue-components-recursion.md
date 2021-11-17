---
layout: post
title: Vue组件自我调用，实现递归展示
time: 2021.11.17 18:35:29
tags: Vue
category: work
excerpt: 通常面对这种同类型的嵌套数据，且不确定嵌套层级数量时，我们处理起来通常会使用——递归，通过函数重复自我调用的方式，对数据进行递归处理。
---

相信大家开发过程中都曾遇到过以下这种类型的数据：

```json
dataList:[
    {
        name:'名称1',
        children:[
            {
                name:'名称1-1'
                children:[
                    {
                        name:'名称1-1-1',
                        children:[
                            //...
                        ]
                    }
                ]
            }
        ]
    }
]
```

通常面对这种同类型的嵌套数据，且不确定嵌套层级数量时，我们处理起来通常会使用——递归，通过函数重复自我调用的方式，对数据进行递归处理。

以上是前提，下面是我这篇文章的主要场景：

有一个多维（但不确定几维）的表格展示，使用 elementUI 的 table 组件，大概是下图这样,针对 elementUI 提供的组件，进行二次封装，从而达到动态控制表格的显示。

<img src="https://seven777777.github.io/myblog/images/post/2021-11-17-vue-components-recursion/pic01.jpg" />

elementUI 的 table 组件的多级表头，是通过`<el-table-column>`标签嵌套实现的，大概是下面的代码所示，此处不确定表头具体的层级数量，所以这里我理所应当的想到了“递归”。

```
<el-table-column label="地址">
    <el-table-column
      prop="province"
      label="省份"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="邮编"
      width="120">
    </el-table-column>
</el-table-column>
```

之前面对相似的场景时从未使用过，每次都选择了上帝视角，根据确定当前数据确定的最大层级进行开发（省事），但是不灵活，当数据结构变化时，还需要二次维护。

于是这就在想，能不能把`<el-table-column>`封装成组件，同时再实现组件组我调用，递归展示呢？有了大概的思路，就尝试去了解了一下，没想到还真可以。反思：还是要经常跳出自己的惯性开发思路，做一些新的尝试，会有以外的收货。

> 关键：Vue 组件可以通过组件的 name，实现对自己的调用。

下面贴上我的实践代码：

```
//tableColumn组件

<template>
    <el-table-column
        :prop="headColumn.prop"
        :align="headColumn.align || 'center'"
        :width="headColumn.width || ''"
        :label="headColumn.label"
    >
        <template v-if="headColumn.children && headColumn.children.length">
        <!--在这里调用自己-->
            <tableColumn
                v-for="(columnData,index) in headColumn.children"
                :key="index"
                :headColumn="columnData"
            ></tableColumn>
        </template>
    </el-table-column>
</template>

<script>
export default {
    name: 'tableColumn',//通过这个name进行调用
    props: {
        headColumn: {
            type: Object,
            default() {
                return {}
            }
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
```

下面是具体使用时：

```
<template>
    <el-table
        :data="tableData"
    >
        <tableColumn
            v-for="(columnData,index) in tableHead"
            :key="index"
            :headColumn="columnData"
        ></tableColumn>
    </el-table>
</template>

<script>
import tableColumn from './tableColumn.vue'
export default {
    components: {
        tableColumn
    },
    data() {
        return {
            tableHead: [
                { prop: 'name', label: '姓名',},
                {
                    prop: '',
                    label: '地址',
                    children: [
                        { prop: 'province', label: '省份'},
                        { prop: 'city', label: '市区'},
                        { prop: 'address', label: '地址'},
                    ]
                }
            ],
            tableData: [
                {
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
```
