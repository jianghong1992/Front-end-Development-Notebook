# CSS3(CSS)技巧
- 禁止ios识别数字为电话号码  

  ```
  <meta name="format-detection" content="telephone=no"/>  
  ```
- 禁止ios使用默认样式  

  ```
  -webkit-appearance: none;  
  ```
- CSS3文字溢出显示省略号  

   ```
  overflow: hidden;  
  white-space: nowrap;  
  text-overflow: ellipsis; 
  ```
- CSS3动态实现文本框清除按钮的隐藏与显示  

  ```
  <input class="input" required><a class="clear"><i class="icon-close"></i></a> 
 
  .input { padding: 5px; margin: 0; border: 1px solid #beceeb; }  
  .clear { display: none; position: absolute; width: 16px; height: 16px; margin: 0 0 0 -15px}  
  .input::-ms-clear { display: none; }  
  .input:valid + .clear { display: inline; }
  ```
- font-family 定义的最后为什么要加一句sans-serif  

  `sans-serif无衬线字体，是一类字体，它在操作系统或者浏览器里是可以设置的，你可以把它设置成宋体，也可以设置成微软雅黑，而设置的这种字体肯定是当前系统里存在的字体，所以使用这个字体就一肯能显示出来，所以加上sans-serif就能保证调用。`
　　`Sans-serif简介：Sans-serif是专指西文中没有衬线的字体，与汉字字体中的黑体相对应。该类字体通常是机械的和统一线条的，它们往往拥有相同的曲率，笔直的线条，锐利的转角。`
  
