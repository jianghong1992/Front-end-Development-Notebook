# CSS3(CSS)技巧
- 视窗宽度  

  ```
  <meta name="viewport" content="width=device-width,initial-scale=1.0,  
  minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"/>
  ```
  
  `其中 width=device-width 是设置视窗宽度为设备视窗宽度，还可以固定宽度，例如： width=640 则是640px的宽度（常见于微信）；  
  initial-scale=1.0 ：设置缩放比例为1.0；  
  minimum-scale=1.0 和 maximum-scale=1.0 ：最小缩放比例和最大缩放比例；  
  user-scalable=no ：禁止用户自由缩放，user-scalable 默认值为 yes 。  
  提示：刚刚那个是带全部参数的，一般常用的，有 user-scalable=no 就不用使用 minimum-scale=1.0 和 maximum-scale=1.0 来强制禁止缩放了。
  `
  
  ```
  <meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=no"/>
  ```
- 禁止ios识别数字为电话号码  

  ```
  <meta name="format-detection" content="telephone=no"/>  
  ```
- 禁止浏览器自动识别Email  

  ```
  <meta name="format-detection" content="email=no"/>  
  ```
- 禁止ios使用默认样式  

  ```
  button,input,optgroup,select,textarea { 
    -webkit-appearance:none; 
  }  
  ```
- 禁止长按链接与图片弹出菜单  

  ```
  a, img { 
    -webkit-touch-callout: none; 
  }
  ```
- 禁止选中文本  

  ```
  html, body { 
    -webkit-user-select: none; 
    user-select: none; 
  }
  ```
- 去掉a、input和button点击时的蓝色外边框和灰色半透明背景  

  ```
  a,button,input,optgroup,select,textarea { 
    -webkit-tap-highlight-color:rgba(0,0,0,0);
  }
  ```
- 修改webkit中input的planceholder样式  

  ```
  input::-webkit-input-placeholder { 
    color:#ccc;
  }
  ```
- 修改webkit中focus状态下input的planceholder样式  

  ```
  input:focus::-webkit-input-placeholder { 
    color:#f00; 
  }
  ```
- 禁止IOS调整字体大小  

  ```
  body { 
    -webkit-text-size-adjust: 100%!important; 
  }
  ```
- 隐藏Android的语音输入按钮  

  ```
  input::-webkit-input-speech-button { 
    display: none;
  }
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

  ```
  body { 
    font-family: "Helvetica Neue", Helvetica, STHeiTi, sans-serif; /*使用无衬线字体*/
  }
  ```
  `sans-serif无衬线字体，是一类字体，它在操作系统或者浏览器里是可以设置的，你可以把它设置成宋体，也可以设置成微软雅黑，而设置的这种字体肯定是当前系统里存在的字体，所以使用这个字体就一肯能显示出来，所以加上sans-serif就能保证调用。`  
  `Sans-serif简介：Sans-serif是专指西文中没有衬线的字体，与汉字字体中的黑体相对应。该类字体通常是机械的和统一线条的，它们往往拥有相同的曲率，笔直的线条，锐利的转角。`   
- [pointer-events属性](http://www.w3cplus.com/css3/css-reference/pointer-events.html) 

  `pointer-events: none; 元素上的指针事件被禁用。元素不会响应于指针事件。就像该元素不存在一样，元素的子元素响应于指针事件。`    
- 自定义苹果图标  

  `在网站文件根目录放一个 apple-touch-icon.png 文件，苹果设备保存网站为书签或桌面快捷方式时，就会使用这个文件作为图标，文件尺寸建议为：180px × 180px`
- 自定义favicon  

  ```
  <link rel="icon" href="favicon.ico" mce_href="favicon.ico" type="image/x-icon">
  ```  
- 定义浏览器点击行为  

  ```
  <a href="tel:020-10086">打电话给:020-10086</a>  
  <a href="sms:10086">发短信给: 10086</a>  
  <a href="mailto:me@22278.club">发送邮件: me@22278.club</a>
  ```
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
- 使用border绘制小三角  

  ```
  border-width: 10px 10px 10px 0; //左箭头  
  border-color: transparent #fff;  
  border-style: solid;  
  width: 0;
  ```
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
  
  
