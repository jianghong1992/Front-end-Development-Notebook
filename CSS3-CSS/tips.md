# CSS3(CSS)技巧

<div id="table-of-contents"></div>

1. [使用CSS复位](#use-a-css-reset)
1. [继承 `box-sizing`](#inherit-box-sizing)
1. [使用 `:not()` 选择器来决定表单是否显示边框](#use-not-to-applyunapply-borders-on-navigation)
1. [为 body 元素添加行高](#add-line-height-to-body)
1. [垂直居中任何元素](#vertically-center-anything)
1. [逗号分隔的列表](#comma-separated-lists)
1. [使用负的 `nth-child` 来选择元素](#select-items-using-negative-nth-child)
1. [使用 SVG 图标](#use-svg-for-icons)
1. [使用 “形似猫头鹰” 的选择器](#use-the-lobotomized-owl-selector)
1. [使用 `max-height` 来建立纯 CSS 的滑块](#use-max-height-for-pure-css-sliders)
1. [创造格子等宽的表格](#equal-width-table-cells)
1. [利用 Flexbox 去除多余的外边距](#get-rid-of-margin-hacks-with-flexbox)
1. [利用属性选择器来选择空链接](#use-attribute-selectors-with-empty-links)
1. [给 “默认” 链接定义样式](#style-default-links)
1. [一致的垂直节奏](#consistent-vertical-rhythm)
1. [内在比例盒](#intrinsic-ratio-boxes)
1. [为破碎图象定义样式](#style-broken-images)
1. [用 rem 来调整全局大小；用 em 来调整局部大小](#use-rem-for-global-sizing-use-em-for-local-sizing)
1. [隐藏没有静音、自动播放的影片](#hide-autoplay-videos-that-arent-muted)
1. [使用选择器 `:root` 来控制字体弹性](#use-root-for-flexible-type)
1. [为更好的移动体验，为表单元素设置字体大小](#set-font-size-on-form-elements-for-a-better-mobile-experience)
1. [视窗宽度](#use-a-css-meta-viewport)
1. [禁止ios识别数字为电话号码](#use-a-css-meta-ios-tel)
1. [禁止浏览器自动识别Email](#use-a-css-meta-ios-email)
1. [meta完整模板](#use-a-css-meta-all)
1. [禁止ios使用默认样式](#use-a-css-no-default)
1. [禁止长按链接与图片弹出菜单](#use-a-css-no-menu)
1. [禁止选中文本](#use-a-css-no-text)
1. [去掉a、input和button点击时的蓝色外边框和灰色半透明背景](#use-a-css-a-bg)
1. [修改webkit中input的planceholder样式](#use-a-css-input-placeholder)
1. [修改webkit中focus状态下input的planceholder样式](#use-a-css-input-focus-placeholder)
1. [禁止IOS调整字体大小](#use-a-css-no-fontsize)
1. [隐藏Android的语音输入按钮](#use-a-css-speech)
1. [CSS3文字溢出显示省略号](#use-a-css-text-overflow)
1. [font-family 定义的最后为什么要加一句sans-serif](#use-a-css-font-family)
1. [pointer-events属性](#use-a-css-pointer-events)
1. [自定义苹果图标](#use-a-css-apple-icon)
1. [自定义favicon](#use-a-css-favicon)
1. [定义浏览器点击行为](#use-a-css-browser-click)
1. [css3自适应上下左右居中](#use-a-css-center)
1. [移动端字体自适应大小](#use-a-css-mobile-font)
1. [定义上传文件类型和格式](#use-a-css-file-type)
1. [网页素装(把网站整体变灰)](#use-a-css-gray)
1. [修改滚动条样式](#use-a-css-scroolbar)
1. [IE的透明度兼容](#use-a-css-IE-transparent)
1. [使用border绘制小三角](#use-a-css-triangle)
1. [Tootip写法](#use-a-css-tooltip)
1. [box-shadow实现纸张的曲线投影效果](#use-a-css-box-shadow)
1. [利用css3径向渐变做一张优惠券](#use-a-css-quan)

<div id="use-a-css-reset"></div>

- 使用CSS复位

  CSS复位可以在不同的浏览器上保持一致的样式风格。您可以使用CSS reset 库[Normalize](http://necolas.github.io/normalize.css/)等，也可以使用一个更简化的复位方法：

  ```css
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  ```

  现在元素的 margin 和 padding 已为0，`box-sizing`可以管理您的CSS盒模型布局。

  #### [演示](http://codepen.io/AllThingsSmitty/pen/kkrkLL)

  注意：如果你遵循接下来[继承 `box-sizing`](#inherit-box-sizing)讲解的这个技巧, 你不需要在以上代码中添加 `box-sizing` 属性。

  <sup>[回目录](#table-of-contents)</sup>


<div id="inherit-box-sizing"></div>

- 继承 `box-sizing`

  从 `html` 元素继承 `box-sizing` ：

  ```css
  html {
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }
  ```

  如此在插件或其它组件里改变 `box-sizing` 变得简单。

  <sup>[回目录](#table-of-contents)</sup>


<div id="use-not-to-applyunapply-borders-on-navigation"></div>

- 使用 `:not()` 选择器来决定表单是否显示边框

先为元素添加边框

```css
/* 添加边框 */
.nav li {
  border-right: 1px solid #666;
}
```

为最后一个元素去除边框

```css
/* 去掉边框 */
.nav li:last-child {
  border-right: none;
}
```

不过不要这么做，使用 `:not()` 伪类来达到同样的效果：

```css
.nav li:not(:last-child) {
  border-right: 1px solid #666;
}
```

当然，你也可以使用 `.nav li + li` 或者 `.nav li:first-child ~ li` ，但是 `:not()` 更加清晰，具有可读性。

#### [演示](http://codepen.io/AllThingsSmitty/pen/LkymvO)

<sup>[回目录](#table-of-contents)</sup>


<div id="add-line-height-to-body"></div>

- 为 `body` 元素添加行高

不必为每一个 `<p>`，`<h*>` 元素逐一添加 `line-height`，直接添加到 `body` 元素：

```css
body {
  line-height: 1.5;
}
```

文本元素可以很容易地继承 `body` 的样式。

#### [演示](http://codepen.io/AllThingsSmitty/pen/VjbdYd)

<sup>[回目录](#table-of-contents)</sup>


<div id="vertically-center-anything"></div>

- 垂直居中任何元素

不！这绝不是黑魔法，真的可以垂直居中任何元素：

```css
html, body {
  height: 100%;
  margin: 0;
}

body {
  -webkit-align-items: center;  
  -ms-flex-align: center;  
  align-items: center;
  display: -webkit-flex;
  display: flex;
}
```

这还不够？垂直方向，水平方向？任何元素，任何时间，任何地点？CSS-Tricks [有篇好文](https://css-tricks.com/centering-css-complete-guide/) 讲到了各种居中的技巧。

**注意：** IE11 对 flexbox 的支持[有点 bug](https://github.com/philipwalton/flexbugs#3-min-height-on-a-flex-container-wont-apply-to-its-flex-items)。

#### [演示](http://codepen.io/AllThingsSmitty/pen/GqmGqZ)

<sup>[回目录](#table-of-contents)</sup>


<div id="comma-separated-lists"></div>

- 逗号分隔列表

使列表的每项都由逗号分隔：

```css
ul > li:not(:last-child)::after {
  content: ",";
}
```

因最后一项不加逗号，可以使用 `:not()` 伪类。

**注意：**这一技巧对于无障碍，特别是屏幕阅读器而言并不理想。而且复制粘贴并不会带走CSS生成的内容,需要注意。

<sup>[回目录](#table-of-contents)</sup>


<div id="select-items-using-negative-nth-child"></div>

- 使用负的 `nth-child` 来选择元素

使用负的 `nth-child` 可以选择 1 至 n 个元素。


```css
li {
  display: none;
}

/* 选择第 1 至第 3 个元素并显示出来 */
li:nth-child(-n+3) {
  display: block;
}
```

或许你已经掌握了[如何使用 `:not()`](#use-not-to-applyunapply-borders-on-navigation)这个技巧，试下这个：

```css
/* 选择第 1 至第 3 个元素并显示出来 */
li:not(:nth-child(-n+3)) {
  display: none;
}
```

如此简单！

#### [演示](http://codepen.io/AllThingsSmitty/pen/WxjKZp)

<sup>[回目录](#table-of-contents)</sup>


<div id="use-svg-for-icons"></div>

- 使用 SVG 图标

没有理由不使用 SVG 图标：

```css
.logo {
  background: url("logo.svg");
}
```

SVG 在所有分辨率下都可以良好缩放，并且支持所有 IE9 以后的浏览器，丢掉你的 .png, .jpg, 或 .gif-jif-whatev 文件吧。

**注意：** 针对仅有图标的按钮，如果 SVG 没有加载成功的话，以下样式对无障碍有所帮助：

```css
.no-svg .icon-only:after {
  content: attr(aria-label);
}
```

<sup>[回目录](#table-of-contents)</sup>


<div id="use-the-lobotomized-owl-selector"></div>

- 使用 “形似猫头鹰” 的选择器

这个名字可能比较陌生，不过通用选择器 (`*`) 和 相邻兄弟选择器 (`+`) 一起使用，效果非凡：

```css
* + * {
  margin-top: 1.5em;
}
```

在此示例中，文档流中的所有的相邻兄弟元素将都将设置 `margin-top: 1.5em` 的样式。

更多 “形似猫头鹰”  的选择器，可参考 *A List Apart* 上面 [Heydon Pickering 的文章](http://alistapart.com/article/axiomatic-css-and-lobotomized-owls)

#### [演示](http://codepen.io/AllThingsSmitty/pen/grRvWq)

<sup>[回目录](#table-of-contents)</sup>


<div id="use-max-height-for-pure-css-sliders"></div>

- 使用 `max-height` 来建立纯 CSS 的滑块

`max-height` 与 overflow hidden 一起来建立纯 CSS 的滑块：

```css
.slider {
  max-height: 200px;
  overflow-y: hidden;
  width: 300px;
}

.slider:hover {
  max-height: 600px;
  overflow-y: scroll;
}
```

鼠标移入滑块元素时增大它的 `max-height` 值，便可以显示溢出部分。

<sup>[回目录](#table-of-contents)</sup>


<div id="equal-width-table-cells"></div>

- 创造格子等宽的表格

`table-layout: fixed` 可以让每个格子保持等宽：

```css
.calendar {
  table-layout: fixed;
}
```

无痛的 table 布局。

#### [演示](http://codepen.io/AllThingsSmitty/pen/jALALm)

<sup>[回目录](#table-of-contents)</sup>


<div id="get-rid-of-margin-hacks-with-flexbox"></div>

- 利用 Flexbox 去除多余的外边距

与其使用 `nth-`， `first-`， 和 `last-child` 去除列之间多余的间隙，不如使用 flexbox 的 `space-between` 属性：

```css
.list {
  display: flex;
  justify-content: space-between;
}

.list .person {
  flex-basis: 23%;
}
```

列之间的间隙总是均匀相等。

<sup>[回目录](#table-of-contents)</sup>


<div id="use-attribute-selectors-with-empty-links"></div>

- 利用属性选择器来选择空链接

当 `<a>` 元素没有文本内容，但有 `href` 属性的时候，显示它的 `href` 属性：

```css
a[href^="http"]:empty::before {
  content: attr(href);
}
```

相当简便。

#### [演示](http://codepen.io/AllThingsSmitty/pen/zBzXRx)

<sup>[回目录](#table-of-contents)</sup>


<div id="style-default-links"></div>

- 给 “默认” 链接定义样式

给 “默认” 链接定义样式：

```css
a[href]:not([class]) {
  color: #008000;
  text-decoration: underline;
}
```

通过 CMS 系统插入的链接，通常没有 `class` 属性，以上样式可以甄别它们，而且不会影响其它样式。

<sup>[回目录](#table-of-contents)</sup>


<div id="consistent-vertical-rhythm"></div>

- 一致垂直节奏

通用选择器 (`*`) 跟元素一起使用，可以保持一致的垂直节奏：

```css
.intro > * {
  margin-bottom: 1.25rem;
}
```

一致的垂直节奏可以提供视觉美感，增强内容的可读性。

<sup>[回目录](#table-of-contents)</sup>


<div id="intrinsic-ratio-boxes"></div>

- 固定比例盒子

要创建具有固定比例的一个盒子，所有你需要做的就是给 div 设置一个 padding：

```css
.container {
  height: 0;
  padding-bottom: 20%;
  position: relative;
}

.container div {
  border: 2px dashed #ddd;	
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
```

使用20％的padding-bottom使得框等于其宽度的20％的高度。与视口宽度无关，子元素的div将保持其宽高比（100％/ 20％= 5:1）。

#### [演示](http://codepen.io/AllThingsSmitty/pen/jALZvE)

<sup>[回目录](#table-of-contents)</sup>


<div id="style-broken-images"></div>

- 为破碎图象定义样式

只要一点CSS就可以美化破碎的图象：

```css
img {  
  display: block;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 300;
  height: auto;
  line-height: 2;
  position: relative;
  text-align: center;
  width: 100%;
}
```

以添加伪元素的法则来显示用户信息和URL的引用：

```css
img:before {  
  content: "We're sorry, the image below is broken :(";
  display: block;
  margin-bottom: 10px;
}

img:after {  
  content: "(url: " attr(src) ")";
  display: block;
  font-size: 12px;
}
```

了解更多关于这类样式的技巧 [Ire Aderinokun](https://github.com/ireade/)的 [原帖](http://bitsofco.de/styling-broken-images/).

<sup>[回目录](#table-of-contents)</sup>


<div id="use-rem-for-global-sizing-use-em-for-local-sizing"></div>

- 用 `rem` 来调整全局大小；用 `em` 来调整局部大小

在根元素设置基本字体大小后 (`html { font-size: 100%; }`), 使用 `em` 设置文本元素的字体大小:

```css
h2 { 
  font-size: 2em;
}

p {
  font-size: 1em;
}
```

然后设置模块的字体大小为 `rem`:

```css
article {
  font-size: 1.25rem;
}

aside .module {
  font-size: .9rem;
}
```

现在，每个模块变得独立，更容易、灵活的样式便于维护。

<sup>[回目录](#table-of-contents)</sup>


<div id="hide-autoplay-videos-that-arent-muted"></div>

- 隐藏没有静音、自动播放的影片

这是一个自定义用户样式表的不错的技巧。避免在加载页面时自动播放。如果没有静音，则不显示视频：

```css
video[autoplay]:not([muted]) {
  display: none;
}
```

再次，我们利用了 [`:not()`](#use-not-to-applyunapply-borders-on-navigation) 的优点。

<sup>[回目录](#table-of-contents)</sup>


<div id="use-root-for-flexible-type"></div>

- 使用选择器`:root`来控制字体弹性

在响应式布局中，字体大小应需要根据不同的视口进行调整。你可以计算字体大小根据视口高度的字体大小和宽度，这时需要用到`:root`:

```css
:root {
  font-size: calc(1vw + 1vh + .5vmin);
}
```

现在，您可以使用 `root em` 

```css
body {
  font: 1rem/1.6 sans-serif;
}
```

#### [演示](http://codepen.io/AllThingsSmitty/pen/XKgOkR)

<sup>[回目录](#table-of-contents)</sup>


<div id="set-font-size-on-form-elements-for-a-better-mobile-experience"></div>

- 为更好的移动体验，为表单元素设置字体大小

当触发`<select>`的下拉列表时，为了避免表单元素在移动浏览器（IOS Safari 等等）上的缩放，加上`font-size`：

```css
input[type="text"],
input[type="number"],
select,
textarea {
  font-size: 16px;
}
```

:dancer:

<sup>[回目录](#table-of-contents)</sup>

<div id="use-a-css-meta-viewport"></div>

- 视窗宽度  

  ```
  <meta name="viewport" content="width=device-width,initial-scale=1.0,  
  minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"/>
  ```
  
  `其中 width=device-width 是设置视窗宽度为设备视窗宽度，还可以固定宽度，例如： width=640 则是640px的宽度（常见于微信）； 
  initial-scale=1.0 ：设置缩放比例为1.0；  
  minimum-scale=1.0 和 maximum-scale=1.0 ：最小缩放比例和最大缩放比例；  
  user-scalable=no ：禁止用户自由缩放，user-scalable 默认值为 yes 。  
  提示：刚刚那个是带全部参数的，一般常用的，有 user-scalable=no 就不用使用 minimum-scale=1.0 和 maximum-scale=1.0 来强制禁止缩放了。 `
  
  ```
  <meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=no"/>
  ```
  <sup>[回目录](#table-of-contents)</sup>
<div id="use-a-css-meta-ios-tel"></div>  

- 禁止ios识别数字为电话号码  

  ```
  <meta name="format-detection" content="telephone=no"/>  
  ```
  <sup>[回目录](#table-of-contents)</sup>
<div id="use-a-css-meta-ios-email"></div>

- 禁止浏览器自动识别Email  

  ```
  <meta name="format-detection" content="email=no"/>  
  ```
  <sup>[回目录](#table-of-contents)</sup>
<div id="use-a-css-meta-all"></div>

- meta完整模板  

  ```
  <meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=no"/>  
  <meta name="format-detection" content="telephone=no"/>  
  <meta name="format-detection" content="email=no"/>
  ```
  <sup>[回目录](#table-of-contents)</sup>
<div id="use-a-css-no-default"></div>

- 禁止ios使用默认样式  

  ```
  button,input,optgroup,select,textarea { 
    -webkit-appearance:none; 
  }  
  ```
  <sup>[回目录](#table-of-contents)</sup>
<div id="use-a-css-no-menu"></div>

- 禁止长按链接与图片弹出菜单  

  ```
  a, img { 
    -webkit-touch-callout: none; 
  }
  ```
  <sup>[回目录](#table-of-contents)</sup>
<div id="use-a-css-no-text"></div>

- 禁止选中文本  

  ```
  html, body { 
    -webkit-user-select: none; 
    user-select: none; 
  }
  ```
  <sup>[回目录](#table-of-contents)</sup>
<div id="use-a-css-a-bg"></div>

- 去掉a、input和button点击时的蓝色外边框和灰色半透明背景  

  ```
  a,button,input,optgroup,select,textarea { 
    -webkit-tap-highlight-color:rgba(0,0,0,0);
  }
  ```
  <sup>[回目录](#table-of-contents)</sup>
<div id="use-a-css-input-placeholder"></div>

- 修改webkit中input的planceholder样式  

  ```
  input::-webkit-input-placeholder { 
    color:#ccc;
  }
  ```
  <sup>[回目录](#table-of-contents)</sup>
<div id="use-a-css-input-focus-placeholder"></div>

- 修改webkit中focus状态下input的planceholder样式  

  ```
  input:focus::-webkit-input-placeholder { 
    color:#f00; 
  }
  ```
  <sup>[回目录](#table-of-contents)</sup>
<div id="use-a-css-no-fontsize"></div>

- 禁止IOS调整字体大小  

  ```
  body { 
    -webkit-text-size-adjust: 100%!important; 
  }
  ```
  <sup>[回目录](#table-of-contents)</sup>
<div id="use-a-css-speech"></div>

- 隐藏Android的语音输入按钮  

  ```
  input::-webkit-input-speech-button { 
    display: none;
  }
  ```
  <sup>[回目录](#table-of-contents)</sup>
<div id="use-a-css-text-overflow"></div>

- CSS3文字溢出显示省略号  

  ```
  overflow: hidden;  
  white-space: nowrap;  
  text-overflow: ellipsis; 
  ```
  <sup>[回目录](#table-of-contents)</sup>
<div id="use-a-css-font-family"></div>

- font-family 定义的最后为什么要加一句sans-serif  

  ```
  body { 
    font-family: "Helvetica Neue", Helvetica, STHeiTi, sans-serif; /*使用无衬线字体*/
  }
  ```
  `sans-serif无衬线字体，是一类字体，它在操作系统或者浏览器里是可以设置的，你可以把它设置成宋体，也可以设置成微软雅黑，而设置的这种字体肯定是当前系统里存在的字体，所以使用这个字体就一肯能显示出来，所以加上sans-serif就能保证调用。`  
  `Sans-serif简介：Sans-serif是专指西文中没有衬线的字体，与汉字字体中的黑体相对应。该类字体通常是机械的和统一线条的，它们往往拥有相同的曲率，笔直的线条，锐利的转角。`  
  
  <sup>[回目录](#table-of-contents)</sup>
<div id="use-a-css-pointer-events"></div>

- [pointer-events属性](http://www.w3cplus.com/css3/css-reference/pointer-events.html) 

  `pointer-events: none; 元素上的指针事件被禁用。元素不会响应于指针事件。就像该元素不存在一样，元素的子元素响应于指针事件。`    
  
  <sup>[回目录](#table-of-contents)</sup>
<div id="use-a-css-apple-icon"></div>

- 自定义苹果图标  

  `在网站文件根目录放一个 apple-touch-icon.png 文件，苹果设备保存网站为书签或桌面快捷方式时，就会使用这个文件作为图标，文件尺寸建议为：180px × 180px`
  
  <sup>[回目录](#table-of-contents)</sup>
<div id="use-a-css-favicon"></div>

- 自定义favicon  

  ```
  <link rel="icon" href="favicon.ico" mce_href="favicon.ico" type="image/x-icon">
  ```  
  
  <sup>[回目录](#table-of-contents)</sup>
<div id="use-a-css-browser-click"></div>

- 定义浏览器点击行为  

  ```
  <a href="tel:020-10086">打电话给:020-10086</a>  
  <a href="sms:10086">发短信给: 10086</a>  
  <a href="mailto:me@22278.club">发送邮件: me@22278.club</a>
  ```
  <sup>[回目录](#table-of-contents)</sup>
<div id="use-a-css-center"></div>

- css3自适应上下左右居中  

  ```
  .aboutlist_wrap ul li a {display:table; }
  .aboutlist_wrap ul li a p {display: table-cell;text-align: center;}
  .aboutlist_wrap ul li a p {vertical-align: middle;}
  ```
  <sup>[回目录](#table-of-contents)</sup>
<div id="use-a-css-mobile-font"></div>

- 移动端字体自适应大小  

  ```
  body {
    font-family: "Microsoft YaHei";
    font-size: 0.14rem;
    color: #666;
    max-width: 750px;
    margin: auto;
  }
  @media screen and (min-width: 360px) {
    html {font-size: 710%;}
  }
  @media screen and (min-width: 414px) {
    html {font-size: 825%;}
  }
  @media screen and (min-width: 600px) {
    html {font-size: 1095%;}
  }
  ```
  <sup>[回目录](#table-of-contents)</sup>
<div id="use-a-css-file-type"></div>

- 定义上传文件类型和格式  

  ```
  <input type=file accept="image/*">
  ```
  
  `上面的文件上传框中，accept 可以限制上传文件的类型，参数为 image/* 是所有图片类型，点击会弹出图库，也可以指定图片格式，参数设置成 image/png 则可以限制图片类型为png；参数如果为 video/* 则是选择视频的意思；accept 还可以设置多个文件格式，语法为 accept="image/gif, image/jpeg" `
- 使用box-shadow改变(挡住)表单自动填充后的黄色  

  ```
  input:-webkit-autofill,   
  textarea:-webkit-autofill,   
  select:-webkit-autofill {  
    box-shadow: inset 0 0 0 1000px #fff;  
  }
  ```
  
  <sup>[回目录](#table-of-contents)</sup>
<div id="use-a-css-gray"></div>

- 网页素装(把网站整体变灰)  

  ```
  html {
    filter: grayscale(100%);
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    -o-filter: grayscale(100%);
    filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
    -webkit-filter: grayscale(1);
    filter: gray;
  }
  ```
  <sup>[回目录](#table-of-contents)</sup>
<div id="use-a-css-scroolbar"></div>

- 修改滚动条样式  

  ```
  .test1::-webkit-scrollbar {
    width: 6px;
  }
  .test1::-webkit-scrollbar-track {
    background-color:#808080;
    -webkit-border-radius: 2em;
    -moz-border-radius: 2em;
    border-radius:2em;
  }
  .test1::-webkit-scrollbar-thumb {
    background-color:#ff4400;
    -webkit-border-radius: 2em;
    -moz-border-radius: 2em;
    border-radius:2em;
  }
  ```
  <sup>[回目录](#table-of-contents)</sup>
<div id="use-a-css-IE-transparent"></div>

- IE的透明度兼容  

  ```
  background:#000;
  filter:Alpha(opacity=60); 
  background:rgba(0,0,0,0.6) none repeat scroll !important;
  ```
  <sup>[回目录](#table-of-contents)</sup>
<div id="use-a-css-triangle"></div>

- 使用border绘制小三角  

  ```
  border-width: 10px 10px 10px 0; //左箭头  
  border-color: transparent #fff;  
  border-style: solid;  
  width: 0;
  ```
  <sup>[回目录](#table-of-contents)</sup>
<div id="use-a-css-tooltip"></div>

- Tootip写法  

  ```
  <div class="box">嗨！点击菜单就可以关注兮兮公众号了哟~</div>  
  
  .box { 
    position: relative; 
    padding: 0 20px; 
    width: 380px; 
    height: 80px; 
    border-radius: 8px; 
    background: #efefef; 
    font-size: 18px; 
    line-height: 80px; 
  }
  .box:after { 
    position: absolute; 
    top: 50%; 
    left: -15px; 
    z-index: 1; 
    display: block; 
    margin-top: -15px; 
    width: 0; 
    border-color: transparent #efefef; 
    border-style: solid; 
    border-width: 15px 15px 15px 0; 
    content: ""; 
  }
  ```
  <sup>[回目录](#table-of-contents)</sup>
<div id="use-a-css-box-shadow"></div>

- box-shadow实现纸张的曲线投影效果  

  ```
  <div class="curved_box"></div>  
  
  .curved_box {
    display: inline-block;
    *display: inline;
    width: 200px;
    height: 248px;
    margin: 20px;
    background-color: #fff;
    border: 1px solid #eee;
    -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.27), 0 0 60px rgba(0, 0, 0, 0.06) inset;
    -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.27), 0 0 40px rgba(0, 0, 0, 0.06) inset; 
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.27), 0 0 40px rgba(0, 0, 0, 0.06) inset;
    position: relative;
    *zoom: 1;
  }

  .curved_box:before {
    -webkit-transform: skew(-15deg) rotate(-6deg);
    -moz-transform: skew(-15deg) rotate(-6deg);
    transform: skew(-15deg) rotate(-6deg);
    left: 15px;
  }
  .curved_box:after {
    -webkit-transform: skew(15deg) rotate(6deg);
    -moz-transform: skew(15deg) rotate(6deg);
    transform: skew(15deg) rotate(6deg);
    right: 15px;
  }

  .curved_box:before, .curved_box:after {
    width: 70%;
    height: 55%;
    content: ' ';
   
    -webkit-box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); 
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
   
    position: absolute;
    bottom: 10px;
    z-index: -1;       
  }
  ```
  <sup>[回目录](#table-of-contents)</sup>
<div id="use-a-css-quan"></div>

- 利用css3径向渐变做一张优惠券  

  ```
  <div class="stamp stamp01">
    <div class="par">
      <p>XXXXXX折扣店</p>
      <sub class="sign">￥</sub><span>50.00</span><sub>优惠券</sub>
      <p>订单满100.00元</p>
    </div>
    <div class="copy">副券<p>2015-08-13<br>2016-08-13</p></div><i></i>
  </div>  
  
  .stamp {
    width: 387px;height: 140px;padding: 0 10px;position: relative;overflow: hidden;
  }
  .stamp:before {
    content: '';position: absolute;top:0;bottom:0;left:10px;right:10px;z-index: -1;
  }
  .stamp:after {
    content: '';position: absolute;left: 10px;top: 10px;right: 10px;bottom: 10px;
    box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.5);z-index: -2;
  }
  .stamp i{
    position: absolute;left: 20%;top: 45px;height: 190px;width: 390px;
    background-color: rgba(255,255,255,.15);transform: rotate(-30deg);
  }
  .stamp .par{
    float: left;padding: 16px 15px;width: 220px;
    border-right:2px dashed rgba(255,255,255,.3);text-align: left;
  }
  .stamp .par p{
    color:#fff;
  }
  .stamp .par span{
    font-size: 50px;color:#fff;margin-right: 5px;
  }
  .stamp .par .sign{
    font-size: 34px;
  }
  .stamp .par sub{
    position: relative;top:-5px;color:rgba(255,255,255,.8);
  }
  .stamp .copy{
    display: inline-block;padding:21px 14px;width:100px;
    vertical-align: text-bottom;font-size: 30px;color:rgb(255,255,255);
  }
  .stamp .copy p{
    font-size: 16px;margin-top: 15px;
  }
  
  .stamp01{
    background: #F39B00;
    background: radial-gradient(rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0) 5px, #F39B00 5px);
    background-size: 15px 15px;background-position: 9px 3px;
  }
  .stamp01:before{
    background-color:#F39B00;
  }

  ```
  <sup>[回目录](#table-of-contents)</sup>
  
