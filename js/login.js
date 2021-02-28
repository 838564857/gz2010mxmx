window.onload = function () {
    let lq = document.querySelector('.main .login .ount h5 a');
    lq.onmouseover = function () {
        lq.style.color = "#f56600"
    };
    lq.onmouseout = function () {
        lq.style.color = "#666666";
    };

    let lw = document.querySelector('.main .login .opera .ster h2 a');
    lw.onmouseover = function () {
        lw.style.color = "#f56600";
    };
    lw.onmouseout = function () {
        lw.style.color = "#666666";
    };

    let le = document.querySelector('.main .login .opera .ster h3 a');
    le.onmouseover = function () {
        le.style.color = "#f56600";
    };
    le.onmouseout = function () {
        le.style.color = "#666666";
    };

    let btn = document.querySelector('button');
    let name = document.querySelector('#name');
    let pass = document.querySelector('#pass');
    let span = document.querySelector('span');

    let ck = document.cookie = `login = ${name.value}`;

    btn.onclick = function () {
        if (!(name.value)) {
            span.innerHTML = "输入框信息不能为空"
        }
        if (!(pass.value)) {
            span.innerHTML = "输入框信息不能为空"
        }
        if (!(name.value && pass.value)) {
            throw new Error('输入框信息不能为空')
        }
        // let xhr = new XMLHttpRequest();
        // xhr.open('get', `../php/login.php?name=${name.value}&pass=${pass.value}`);
        // xhr.send();
        // xhr.onload = function () {
        //     let res = xhr.responseText;
        //     console.log(res);
        // }
        ajax({
            url: '../php/login.php',
            data: {
                name: name.value,
                pass: pass.value,
            },
            callback: function (res) {
                res = JSON.parse(res);
                if (res.length > 0) {
                    let ck = document.cookie = `login = ${name.value}`;
                    let cookies = ck.split('=')[1];
                    console.log(cookies);
                    // console.log(cookies);
                    if (cookies) {
                        alert('登录成功');
                        // let ba=localStorage.getItem('web');
                        // console.log(ba);
                        location.href = 'http://gz2010.io/xiaomi/html/xm.html'
                    }
                } else if (res.length <= 0) {
                    alert('用户名或密码错误')
                }









                // let ck = document.cookie = `login = ${name.value}`;
                // let cookies = ck.split('=')[1];
                // console.log(cookies);
                // // console.log(cookies);
                // if (cookies) {
                //     alert('登录成功');
                //     // let ba=localStorage.getItem('web');
                //     // console.log(ba);
                //     location.href = 'http://gz2010.io/xiaomi/html/xm.html'
                // }



                //     // console.log(ba.split('?'));
                //     // location.href = './xm.html';
                //     // if(!ba.indexOf('?')){
                //     //
                //     // }
                //     // if(ba.split('?')[1]){
                //     //     localStorage.removeItem('web')
                //     //     location.href=ba
                //     // }else{
                //     //     localStorage.removeItem('web')
                //     //     location.href = './xm.html';
                //     // }
                // } else if (!cookies && res.length <= 0) {
                //     alert('登录失败,密码错误')
                // }
            }
        })
        // let ck = document.cookie = `login = ${name.value}`;

        // let cookies = ck.split('=')[1];
        // console.log(cookies);
        // // console.log(cookies);
        // if (cookies) {
        //     alert('登录成功');
        //     // let ba=localStorage.getItem('web');
        //     // console.log(ba);
        //     location.href = 'http://gz2010.io/xiaomi/html/xm.html'


        //     // console.log(ba.split('?'));
        //     // location.href = './xm.html';
        //     // if(!ba.indexOf('?')){
        //     //
        //     // }
        //     // if(ba.split('?')[1]){
        //     //     localStorage.removeItem('web')
        //     //     location.href=ba
        //     // }else{
        //     //     localStorage.removeItem('web')
        //     //     location.href = './xm.html';
        //     // }
        // } else if (!cookies) {
        //     alert('登录失败,密码错误')
        // }
        // setCookie('login',`${name.value}`,10);
        // console.log(setCookie);
    }

    // let ba = localStorage.getItem('web');
    // console.log(ba);
}