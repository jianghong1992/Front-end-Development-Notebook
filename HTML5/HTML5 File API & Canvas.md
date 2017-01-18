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
* 压缩照片  
```
//定义照片的最大高度
var MAX_HEIGHT = 480;
var render = function(src){
    var image = new Image();
    image.onload = function(){
        var cvs = document.getElementById("cvs");
        var w = image.width;
        var h = image.height;
        //计算压缩后的图片长和宽
        if(h>MAX_HEIGHT){
            w *= MAX_HEIGHT/h;
            h = MAX_HEIGHT;
        }
        var ctx = cvs.getContext("2d");
        cvs.width = w;
        cvs.height = h;
        //将图片绘制到Canvas上，从原点0,0绘制到w,h
        ctx.drawImage(image,0,0,w,h);

        //进入图片上传逻辑
        sendImg();
    };
    image.src = src;
};
```  
* 上传照片  
```
var sendImg = function(){
    var cvs = document.getElementById("cvs");
    //调用Canvas的toDataURL接口，得到的是照片文件的base64编码string
    var data = cvs.toDataURL("image/jpeg");
    //base64 string过短显然就不是正常的图片数据了，过滤の。
    if(data.length<48){
        console.log("image data error.");
        return;
    }
    //图片的base64 string格式是data:/image/jpeg;base64,xxxxxxxxxxx
    //是以data:/image/jpeg;base64,开头的，我们在服务端写入图片数据的时候不需要这个头！
    //所以在这里只拿头后面的string
    data = data.split(",")[1];
    $.post("./api/uploadimg",{
        fileName:"xxx.jpeg",
        fileData:data
    },function(data){
        if(data.status==200){
            // some code here.
            console.log("commit image success.");
        }else{
            console.log("commit image failed.");
        }
    },"json");
};
```
#### bug

`极小部分android和iphone4s以下的机型上得到的照片居然是不完整的！比如只有上半部分，下半部分是黑的，或者照片是旋转的！`
* [HTML5 Canvas drawImage ratio bug iOS](http://stackoverflow.com/questions/11929099/html5-canvas-drawimage-ratio-bug-ios)

* [iOS HTML5 canvas drawImage vertical scaling bug, even for small images?](http://stackoverflow.com/questions/11929099/html5-canvas-drawimage-ratio-bug-ios)

* [Drawing on canvas after megapix rendering is reversed](http://stackoverflow.com/questions/24998317/drawing-on-canvas-after-megapix-rendering-is-reversed)

#### 解决办法
* [Fixes iOS6 Safari's image file rendering issue for large size image (over mega-pixel), which causes unexpected subsampling when drawing it in canvas.](https://github.com/stomita/ios-imagefile-megapixel)
* [JavaScript library for reading EXIF image metadata](https://github.com/exif-js/exif-js)

经过优化后的完整代码就是：

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
            render(file,e.target.result);  
        };
        //以dataurl的形式读取图片文件
        reader.readAsDataURL(file);
    }
});

//定义照片的最大高度
var MAX_HEIGHT = 480;
var render = function(file,src){
    EXIF.getData(file,function(){
        //获取照片本身的Orientation
        var orientation = EXIF.getTag(this, "Orientation");
        var image = new Image();
        image.onload = function(){
            var cvs = document.getElementById("cvs");
            var w = image.width;
            var h = image.height;
            //计算压缩后的图片长和宽
            if(h>MAX_HEIGHT){
                w *= MAX_HEIGHT/h;
                h = MAX_HEIGHT;
            }
            //使用MegaPixImage封装照片数据
            var mpImg = new MegaPixImage(file);
            //按照Orientation来写入图片数据，回调函数是上传图片到服务器
            mpImg.render(cvs, {maxWidth:w,maxHeight:h,orientation:orientation}, sendImg);
        };
        image.src = src;
    });
};

//上传图片到服务器
var sendImg = function(){
    var cvs = document.getElementById("cvs");
    //调用Canvas的toDataURL接口，得到的是照片文件的base64编码string
    var data = cvs.toDataURL("image/jpeg");
    //base64 string过短显然就不是正常的图片数据了，过滤の。
    if(data.length<48){
        console.log("data error.");
        return;
    }
    //图片的base64 string格式是data:/image/jpeg;base64,xxxxxxxxxxx
    //是以data:/image/jpeg;base64,开头的，我们在服务端写入图片数据的时候不需要这个头！
    //所以在这里只拿头后面的string
    //当然这一步可以在服务端做，但让闲着蛋疼的客户端帮着做一点吧~~~（稍微减轻一点服务器压力）
    data = data.split(",")[1];
    $.post("./api/uploadimg",{
        fileName:"xxx.jpeg",
        fileData:data
    },function(data){
        if(data.status==200){
            // some code here.
            console.log("commit image success.");
        }else{
            console.log("commit image failed.");
        }
    },"json");
};
```
