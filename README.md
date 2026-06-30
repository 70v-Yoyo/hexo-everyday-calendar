

<a>![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)</a> <a href="https://www.npmjs.com/package/hexo-everyday-calendar">![](https://img.shields.io/npm/v/hexo-everyday-calendar)</a> [![Required Hexo version](https://img.shields.io/badge/hexo-%3E=7.3.0-steelblue?style=flat-square&logo=hexo)](https://hexo.io) <a href="https://www.npmjs.com/package/hexo-everyday-calendar">![](https://img.shields.io/npm/dt/hexo-everyday-calendar)</a>

This is a practical calendar plugin for hexo bloggers. It automatically counts the number of articles you publish each day and displays them in different color grades, like contribution statistics on GitHub.

It also features built-in responsive layout adaptation for mobile devices, requiring no manual operation.

# Getting Started

1. Install it directly with npm
```bash
npm install hexo-everyday-calendar
```
2. (If it cannot be displayed normally,) please ensure that you have a tag `<body>`  in your homepage. The calendar will automatically be placed within this `div`.
3. (Only for version <=1.3.9) This plugin supports custom placement on your homepage. To use it, identify the `div` block where you want the plugin, and set its classname to `'site-body'`. You'll typically find  `div` block within your `index.html` file, located in your blog folder.
4. check the effects:  `hexo clean&&hexo g&&hexo s`

# 使用

1. 直接用npm安装即可
```bash
npm install hexo-everyday-calendar
```
2. (如果不能正常显示) 同时放入与source同级的目录plugins下
3. (如果不能正常显示) 确保你的首页中有`<body>`标签，日历模块会自动放入这里
4. 自定义放入位置：在你想要放入的位置中，设置div块的classname为'site-body'，即可放入（仅适用于版本<=1.3.9）

5. 查看效果 `hexo clean&&hexo g&&hexo s`

# 效果 Example

![image-20250211172548584](https://70v-yoyo.github.io/images/example.jpg)

The above picture shows the comparison of this plugin on desktop and mobile devices.

# Recommendations 

- hexo-auto-toc：A plugin automatically generates a responsive table of contents that fixes to the side of the article page or above the articles, depending on the user's device.
