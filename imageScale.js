// 使用前先引用hammer.js
// 使用： var imageScale = new ImageScale().init({'el': document.querySelector('#Tshirtsrc')});

this.reqAnimationFrame = (function () {
    return window[Hammer.prefixed(window, 'requestAnimationFrame')] || function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

function ImageScale () {
    this.options = {
        'el': '',
        'START_X': 0,
        'START_Y': 0,
        'ticking': false,
        'transform': null,//图像效果
        'initAngle': 0,//旋转角度
        'initScale': 1,//放大倍数
        'preAngle': 0,
        'tempAngleFlag': 0,
        'deltaAngle': 0,
        'startRotateAngle': 0,
        'isBorder': false
    }
}

ImageScale.prototype.init = function(options) {
    var self = this;

    if(options && typeof options == 'object') {
        $.extend(self.options, options);
    }

    if(self.options.el) {
        var mc = new Hammer.Manager(self.options.el); //用管理器 可以同时触发旋转 拖拽 移动
        mc.add(new Hammer.Pan({ threshold: 0, pointers: 0 }));
        mc.add(new Hammer.Rotate({ threshold: 0 })).recognizeWith(mc.get('pan'));
        mc.add(new Hammer.Pinch({ threshold: 0 })).recognizeWith([mc.get('pan'), mc.get('rotate')]);
        //结束时做一些处理
        mc.on("hammer.input", function(ev) {
            if(ev.isFinal) {
                if (self.options.isBorder) self.options.el.style.border = '';
                //console.log(self.options.START_X + " " + self.options.transform.translate.x + " " + ev.deltaX);
                //self.options.START_X = self.options.transform.translate.x ;
                //self.options.START_Y = self.options.transform.translate.y ;
            }

        });
        mc.on("panstart panmove", function (ev) {
            if(!ev.isFinal) {
                if (self.options.isBorder) self.options.el.style.border = '1px dashed #28abe1';
                self.options.el.className = '';
                //console.log(START_X +" "+ START_Y +" | "+ev.deltaX +" "+ ev.deltaY);
                self.options.transform.translate = {
                    x: self.options.START_X + ev.deltaX,
                    y: self.options.START_Y + ev.deltaY
                };
                self.requestElementUpdate();
            }
        });
        mc.on("rotatestart rotatemove rotateend", function (ev) {
            if (self.options.isBorder) self.options.el.style.border = '1px dashed #28abe1';
            //点下第二个触控点时触发
            if(ev.type == 'rotatestart') {
                self.options.startRotateAngle = ev.rotation ;
                self.options.tempAngleFlag = 0 ;
            }
            if(ev.type == 'rotatemove'){
                if(self.options.tempAngleFlag == 0){
                    self.options.preAngle = self.options.startRotateAngle;
                    self.options.tempAngleFlag ++;
                }else{
                    self.options.deltaAngle = ev.rotation - self.options.preAngle;
                    self.options.el.className = '';
                    self.options.transform.rz = 1; //非0 垂直xy轴
                    self.options.transform.angle = self.options.initAngle + self.options.deltaAngle;
                    self.requestElementUpdate();
                }
            }
            //旋转结束 记录当前图片角度
            if(ev.type =='rotateend'){
                self.options.initAngle = self.options.transform.angle;
            }
        });
        mc.on("pinchstart pinchmove", function (ev) {
            if (self.options.isBorder) self.options.el.style.border = '1px dashed #28abe1';
            if(ev.type == 'pinchstart') {
                self.options.initScale = self.options.transform.scale || 1;
            }
            self.options.el.className = '';
            self.options.transform.scale = self.options.initScale * ev.scale;
            self.requestElementUpdate();
        });

        if (self.options.isBorder) self.options.el.style.border = '1px dashed #28abe1';
        self.resetElement();
    }
    return this;
};

ImageScale.prototype.requestElementUpdate = function () {
    var self = this;

    if(!self.options.ticking) {
        reqAnimationFrame(function(){
            var value = [
                'translate3d(' + self.options.transform.translate.x + 'px, ' + self.options.transform.translate.y + 'px, 0)',
                'scale(' + self.options.transform.scale + ', ' + self.options.transform.scale + ')',
                'rotate3d('+ self.options.transform.rx +','+ self.options.transform.ry +','+ self.options.transform.rz +','+ self.options.transform.angle + 'deg)'
            ];
            value = value.join(" ");
            self.options.el.style.webkitTransform = value; /*为Chrome/Safari*/
            self.options.el.style.mozTransform = value; /*为Firefox*/
            self.options.el.style.transform = value; /*IE Opera?*/
            self.options.ticking = false;
        });
        self.options.ticking = true;
    }
}

ImageScale.prototype.resetElement = function () {
    var self = this;

    self.options.el.className = 'animate';
    self.options.transform = {
        translate: { x: self.options.START_X, y: self.options.START_Y },
        scale: 1,
        angle: 0,
        rx: 0,
        ry: 0,
        rz: 0
    };
    self.requestElementUpdate();
}
