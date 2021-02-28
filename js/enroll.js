window.onload = function () {
    let btn = document.querySelector('#box .box .login button');
    let name = document.querySelector('#name');
    let pass = document.querySelector('#pass');
    let tel = document.querySelector('#tel');
    let span = document.querySelector('span');
    btn.onclick = function () {
        // 判断每一个框是否填写
        if (!(name.value)) {
            span.innerHTML = "输入框都要填写不能为空";
        }
        if (!(pass.value)) {
            span.innerHTML = "输入框都要填写不能为空";
        }
        if (!(tel.value)) {
            span.innerHTML = "输入框都要填写不能为空";
        };

        // 发送ajax请求
        ajax({
            url: '../php/addData.php',
            type: 'post',
            data: {
                name: name.value,
                pass: pass.value,
                tel: tel.value
            },
            callback: function (res) {
                alert(res);
                name.value = '';
                pass.value = '';
                tel.value = '';
            }
        })
    }
}