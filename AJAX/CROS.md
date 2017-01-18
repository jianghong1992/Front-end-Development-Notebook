## 跨域常见问题及解决方法

* 在发送短信验证码时，遇到短信验证码过期或不对（原因：CORS请求默认不发送Cookie和HTTP认证信息）
  `解决方法`  
  ```
  $.ajax({
   url: a_cross_domain_url,
   xhrFields: {
      withCredentials: true
   }
  });
  ```
