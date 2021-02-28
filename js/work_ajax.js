//复制ajax
/*
参数
url
type
data
asyns
callback
 */
function ajax(object1) { //封装ajax函数
    if (!object1.url) {
        throw new Error('url地址是必填项');
    }
    if (!object1.callback) {
        throw new Error('callback是必填的');
    }
    let parame = { //设置默认参数
        url: object1.url,
        type: object1.type || 'get',
        data: object1.data || '',
        async: object1.async == undefined ? true : object1.async,
        callback: object1.callback

    }
    if (!(parame.type == 'get' || parame.type == 'post')) { //get请求，还是post请求
        throw new Error('type的值暂时只能为get和post')
    }
    if (!(Object.prototype.toString.call(parame.data) == '[object Object]' || Object.prototype.toString.call(parame.data) == '[object String]')) { //data数据类型
        throw new Error('data参数的数据类型只能为对象和字符串');
    }
    if (Object.prototype.toString.call(parame.data) == '[object Object]') {
        let str = '';
        for (let key in parame.data) {
            str += `${key}=${parame.data[key]}&`;
        } //拼接完成后截掉最后一个字母
        parame.data = str.substr(0, str.length - 1);
    }
    if (!(Object.prototype.toString.call(parame.async) == '[object Boolean]')) { //判断async
        throw new Error('async的值只能为布尔值');
    }
    let xhr = new XMLHttpRequest();


    if (parame.type == 'get') { //判断type类型
        xhr.open(parame.type, parame.url + '?' + parame.data, parame.async);
        xhr.send();
    } else {
        xhr.open(parame.type, parame.url, parame.async);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(parame.data);
    }
    if (!parame.async) {
        parame.callback(xhr.responseText);
        return;
    }
    xhr.onload = function() {
        parame.callback(xhr.responseText);
    }
}