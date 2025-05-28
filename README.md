

<a>![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)</a> <a href="https://www.npmjs.com/package/hexo-everyday-calendar">![](https://img.shields.io/npm/v/hexo-everyday-calendar)</a> [![Required Hexo version](https://img.shields.io/badge/hexo-%3E=7.3.0-steelblue?style=flat-square&logo=hexo)](https://hexo.io) <a href="https://www.npmjs.com/package/hexo-everyday-calendar">![](https://img.shields.io/npm/dt/hexo-everyday-calendar)</a>

This is a practical calendar plugin for hexo bloggers. It automatically counts the number of articles you publish each day and displays them in different color grades, like contribution statistics on GitHub.

It also features built-in responsive layout adaptation for mobile devices, requiring no manual operation.

# Getting Started

1. Install it directly with npm
```bash
npm install hexo-everyday-calendar
```
2. (If it cannot be displayed normally,) please ensure that you have a `div` element with the classname `'site-body'` on your homepage. The calendar will automatically be placed within this `div`.
3. This plugin supports custom placement on your homepage. To use it, identify the `div` block where you want the plugin, and set its classname to `'site-body'`. You'll typically find  `div` block within your `index.html` file, located in your blog folder.
4. check the effects:  `hexo clean&&hexo g&&hexo s`

# 使用

1. 直接用npm安装即可
```bash
npm install hexo-everyday-calendar
```
2. (如果不能正常显示) 同时放入与source同级的目录plugins下
3. (如果不能正常显示) 确保你的首页中有classname为'site-body'的div块，日历模块会自动放入这里
4. 自定义放入位置：在你想要放入的位置中，设置div块的classname为'site-body'，即可放入

5. 查看效果 `hexo clean&&hexo g&&hexo s`

# 更新 Update

- 2.14

1. 修复select居中情况
2. 增加打卡墙块根据提交数量形成颜色变化功能

- 2.21

1. 增加响应式布局，适配移动端
2. 修复select组件垂直不居中的问题
3. 国际化

- 3.6

1. 修复上下和左右间距不一致问题

- 4.15

1. 修复web端/移动端整体组件过小的问题

- 5.5

1. 修复宽屏显示器显示组件过大的问题
1. 压缩npm包

- 5.10

1. 修改README

# 效果 Example

![image-20250211172548584](https://70v-yoyo.github.io/images/example.jpg)

The above picture shows the comparison of this plugin on desktop and mobile devices.

# Recommendations 

- hexo-auto-toc：A plugin automatically generate a fixed table of contents that is fixed to the side of the article page.
