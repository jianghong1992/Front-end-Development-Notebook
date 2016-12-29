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
  ```  
  ```
  .input { padding: 5px; margin: 0; border: 1px solid #beceeb; }  
  .clear { display: none; position: absolute; width: 16px; height: 16px; margin: 0 0 0 -15px}  
  .input::-ms-clear { display: none; }  
  .input:valid + .clear { display: inline; }
  ```
  
