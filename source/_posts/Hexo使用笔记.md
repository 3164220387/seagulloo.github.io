---
title: Hexo使用笔记
date: 2025-09-12 18:45:17
tags:
top_img: https://raw.githubusercontent.com/SeagullOO/Images/main/Img/HEXO.png
cover: https://raw.githubusercontent.com/SeagullOO/Images/main/Img/HEXO.png
---

## 前言
这里是我的**第一个**博客！
我将在这里放一些使用**Hexo + Github Pages**搭建博客的笔记，以及在期间遇到的一些**疑难杂症**的解决方法。

## 多设备同步更新博客
参考教程：[多台电脑同步更新Hexo博客](https://blog.csdn.net/qq_30105599/article/details/118302086)

因为上面放出的教程已经写的很详细了，所以在这里我只是简单为我自己记一个笔记。

当在一台设备上进行完博客的修改后，在**博客目录**下进行：
```bash
$ hexo c
$ hexo d -g
```
此时可以发现Github仓库已经完成更新。
继续在**博客目录**下进行：
```bash
$ git pull
$ git add -A
$ git commit -m "你的注释"
$ git push origin 想要更新的分支名
```
此时，在其他设备上，只需要进行：
```bash
$ git pull origin 想要更新的分支名
```
即可完成博客的同步更新。

## 使用Github Actions自动部署
参考教程：[Hexo+Github Actions实现自动部署](https://blog.anheyu.com/posts/asdx.html)

## 部署到服务器

## 文档
[安知鱼文档](https://docs.anheyu.com/intro.html)：无需多言，感谢安知鱼开源。
[Markdown语法](https://docs.github.com/zh/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#styling-text)：刚入门，还是需要多看看写作规范。

## 好用的工具
[PicGo](https://github.com/Molunerfinn/PicGo)：一个开源的图床工具，支持多种图床，包括Github、七牛云等，并且支持**快捷键**上传图片。

## VS Code插件
我是使用VS Code写markdown的，这里分享一些使用的插件。
- [Markdown Preview Enhanced](https://shd101wyy.github.io/markdown-preview-enhanced/#/zh-cn/)：实现**实时预览**，并且支持**自定义CSS**。
- [Markdown All in One](https://github.com/yzhang-gh/vscode-markdown)：实现**快捷键**插入图片，并且支持**自动生成目录**。



