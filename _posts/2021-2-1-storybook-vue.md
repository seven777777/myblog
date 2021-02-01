---
layout: post
title: vue+storybook构建过程及问题记录
time: 2021.2.1 14:43:28
tags: storybook Vue 工具
category: work
excerpt : Storybook是一个开源UI开发工具，能够有效的可视化项目组件，便于组件复用，避免重复造轮子。
---
[Storybook](https://storybook.js.org/)是一个开源UI开发工具，能够有效的可视化项目组件，便于组件复用，避免重复造轮子。

最近刚接触到这个工具，觉得很有意思，于是决定写个demo实践一下。之前创建过一个[关于echarts的实例仓库](https://seven777777.github.io/myblog/work/2020/12/01/vue-echarts/)，要是早些时候接触storybook，也许就可以用这个方法来实现了，之后有机会可以考虑重构一下。

因为目前工作的技术栈多是围绕着Vue，所以这里的记录针对 storybook for vue


## 创建vue项目文件
1.首先确保你的环境已经安装了vue，可以通过`vue -Version`来确认
```
➜  / vue -Version
@vue/cli 4.5.9
```
接下来先初始化vue项目，在你存放代码的文件夹路径下，执行下面的命令：
```
vue create storybook
```
创建流程就是正常vue项目脚手架的构建步骤。

### 遇到的问题
可能是前阵子电脑更新过，反正项目构建时，有如下报错：
```
gyp: No Xcode or CLT version detected!
gyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/local/lib/node_modules/npm/node_modules/node-gyp/lib/configure.js:351:16)
gyp ERR! stack     at ChildProcess.emit (events.js:182:13)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:240:12)
gyp ERR! System Darwin 20.2.0
gyp ERR! command "/usr/local/bin/node" "/usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js" "rebuild"
gyp ERR! cwd /Users/seven/sevenCode/storybook/node_modules/watchpack-chokidar2/node_modules/fsevents
gyp ERR! node -v v10.13.0
gyp ERR! node-gyp -v v5.1.0
gyp ERR! not ok 
```
上网试了很多方法都无效，最后通过下面步骤成功解决：

1. 输入`xcode-select --print-path`查看 `command-line tools` 的安装路径，结果如下：
```
➜  sevenCode git:(master) ✗ xcode-select --print-path
/Library/Developer/CommandLineTools
```
2. 输入`sudo rm -r -f /Library/Developer/CommandLineTools`把 `command-line tools` 从系统移除掉

    步骤2之后会出现一个安装提示，按指示安装即可
    
3. 输入`xcode-select --install`重新安装,可能步骤2就已经在安装了，这时候再输入安装命令，提示如下：
```
➜  sevenCode xcode-select --install
xcode-select: error: command line tools are already installed, use "Software Update" to install updates
```
不用管，直接把 `node_modules`删除，重新执行`npm install`就可以正常安装，不会报刚才的错了。

参考地址：[https://www.jianshu.com/p/828de2cb9855](https://www.jianshu.com/p/828de2cb9855)

## 安装storybook

```
npx -p @storybook/cli sb init --type vue
```
通过官方提供的自动安装命令，即可完成安装。

安装完成后，默认的文件结构如下图：

<img src="https://seven777777.github.io/myblog/images/post/2021-2-1-storybook-vue/pic01.png" />

## 预览storybook

```
npm run storybook  
```
成功后的预览地址： http://localhost:6006/ 

<img src="https://seven777777.github.io/myblog/images/post/2021-2-1-storybook-vue/pic02.png" />

网上还有很多关于手动安装的教程，感兴趣的也可以自行查阅，此处就只介绍自动生成步骤了。

这篇文章：[Vue + Storybook 实现组件驱动开发](https://zhuanlan.zhihu.com/p/148296971)讲的还挺清晰的，可以参考。