 // 求任意数中的最小值,并且返回最小值
 function min() {
     // 先拿到函数所以的实参 arguments
     // 先假设 第一个实参就是最小值，并且定义一个变量来接收最小值
     var min = arguments[0];

     // 那min跟所有的实参进行比较，如果有其中一个比min小的，那么及䒑这个数赋值给min
     // 如果假设的最小值为第一个，没有必要自己跟自己对比
     for (var i = 1; i < arguments.length; i++) {
         if (arguments[i] < min) {
             min = arguments[i]
         }
     }
     // 把求出的这个最小值 当成函数的返回值
     return min;
 }

 function max() {
     // 假设第一个数为最大值
     var max = arguments[0];
     // 用max去跟其他的实参进行比较
     for (var i = 1; i < arguments.length; i++) {
         if (arguments[i] > max) {
             max = arguments[i]
         }
     }
     return max;
 }

 function sum() {
     var res = 0;
     for (var i = 0; i < arguments.length; i++) {
         res += arguments[i];
     }
     return res
 }

 // 封装任意两个数之间的随机数
 function randomNumber(n1, n2) {
     var num;
     if (n1 > n2) {
         num = parseInt(Math.random() * (n1 - n2 + 1) + n2);
     } else {
         num = parseInt(Math.random() * (n2 - n1 + 1) + n1);
     }
     return num
 }

 // 封装一个随机颜色
 function randomColor() {
     // rag(255,255,255)
     return 'rgb(' + randomNumber(0, 255) + ',' + randomNumber(0, 255) + ',' + randomNumber(0, 255) + ')';
 }

 // 封装一个把参数 转化为对象的函数
 function changeObj(str) {

 }

 // 事件格式化函数

 function format(date, f) {
     // 给符号写一个默认值，如果没有给f 传递参数的时候
     // f = f ? f : '-';
     // 短路运算符
     f = f || '-';
     var year = date.getFullYear();
     var month = date.getMonth() + 1;
     month = month >= 10 ? month : '0' + month
     var day = date.getDate();
     day = day >= 10 ? day : '0' + day;

     var hours = date.getHours();
     var min = date.getMinutes();
     var sec = date.getSeconds();

     return `${year}${f}${month}${f}${day} ${hours}:${min}:${sec}`

     // 返回值：处理好的时间 2020-12-31 00:00:00
 }

 // 获取元素的样式方法
 function getStyle(ele, attr) {
     // 表示获取ele这个元素的attr属性
     var style
     if (window.getComputedStyle) {
         style = window.getComputedStyle(ele)[attr]
     } else {
         style = ele.currentStyle[attr];
     }

     return style;
 }

 // 编写一个 事件监听的兼容处理函数
 // 参数：事件源，事件类型，事件处理函数
 function addEvent(ele, type, fn) {
     // 判断是否有 addEventListener
     if (window.addEventListener) {
         ele.addEventListener(type, fn)
     } else {
         ele.attachEvent('on' + type, fn)
     }
 }


 // 运动函数
 // ele option 两个参数必须的
 // callback 可选
 function move(ele, option, callback) {
     let speed;
     let len = 0;
     for (let key in option) {
         clearInterval(ele[key])
         len++;


         ele[key] = setInterval(() => {
             let x;
             if (key == 'opacity') {
                 x = getStyle(ele, key) * 100
             } else {
                 x = parseInt(getStyle(ele, key));
             }

             speed = (option[key] - x) / 5;
             speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
             x = x + speed;

             if (key == 'opacity') {
                 ele.style[key] = x / 100;
             } else {
                 ele.style[key] = x + 'px';
             }
             if (x == option[key]) {

                 clearInterval(ele[key]);
                 len--;
                //  console.log(len);
                 if (len == 0) {
                     callback && callback();
                 }
             }
         }, 50);
     }
 }