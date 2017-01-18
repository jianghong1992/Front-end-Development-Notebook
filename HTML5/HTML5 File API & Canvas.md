## [使用HTML5 File API和Canvas实现图片压缩、旋转、上传](http://isblog.blog.163.com/blog/static/7241675201531394026456/)

#### 网页拍摄照片&选取本地照片  
```
<input type="file" id="photo" accept="image/*" capture="camera">
```  
`accept和capture是[HTML5的API](https://www.w3.org/TR/html-media-capture/)，这样在网页上点击这个input之后会弹出拍摄和选取本地照片的窗口，和native app一样`
#### 照片读取、压缩
* 读取照片  
```
//绑定input change事件
$("#photo").unbind("change").on("change",function(){
    var file = this.files[0];
    if(file){
        //验证图片文件类型
        if(file.type && !/image/i.test(file.type)){
            return false;
        }
        var reader = new FileReader();
        reader.onload = function(e){
            //readAsDataURL后执行onload，进入图片压缩逻辑
            //e.target.result得到的就是图片文件的base64 string
            render(e.target.result);  
        };
        //以dataurl的形式读取图片文件
        reader.readAsDataURL(file);
    }
});
```
