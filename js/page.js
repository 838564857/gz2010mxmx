window.onload = function () {
    let oa = document.querySelectorAll('nav .nav_center ul li a');
    let showa = document.querySelector('.show');
    let ula = document.querySelector('.show ul');


    oa.forEach((item, index) => {
        item.onmouseover = function () {
            showa.style.display = "block";
            num = index;
            getData();
        }
        item.onmouseout = function () {
            showa.style.display = "none"
        }
    })


    function getData() {
        let xhr = new XMLHttpRequest();
        xhr.open('get', '../json/a.json');
        xhr.send();
        xhr.onload = function () {
            let res = JSON.parse(xhr.responseText);
            render(res[num]);
        }
    }

    function render(data) {
        ula.innerHTML = '';
        data.forEach((item, index) => {
            str = '';
            str += `
            <li>
            <img
                src="${item.img}">
            <h4>${item.phoneName}</h4>
            <span>${item.price}</span>
        </li>
            `;
            ula.innerHTML += str
        })
    }

    let reg = /id=(\d+)/;
    if (!reg.test(location.search)) {
        location.href = '../html/xm.html'
    }

    let id = reg.exec(location.search)[1];
    // console.log(id);
    // let senta = document.querySelector('.senta');

    // url的id值
    let numb = location.search.substring(1).split('&')[0];
    let number = numb.split('=')[1];
    let main = document.querySelector('.main');

    // url的json值
    let numbe = location.search.substring(1).split('&')[1];
    let jsn = numbe.split('=')[1];
    pAjax({
        url: `../json/${jsn}.json`,
        data: {
            id
        }
    }).then(res => {
        // res1 = JSON.parse(res);
        // res = res1[number - 1];


        res1 = JSON.parse(res)[1];
        res = res1[number - 1];
        renderHtml(res);
        let btn1 = document.querySelector('.btn1');
        let buy = document.querySelector('.buy');
        buy.onclick = function () {
            let e = window.event;
            if (e.target.id = 'btn1') {
                let login = getCookie('login');
                if (!login) {
                    alert('你还没有登录，请先登录');
                    localStorage.setItem('web', location.href);
                    location.href = 'http://gz2010.io/xiaomi/html/login.html';
                    return
                } else {
                    // 发送添加购物车的ajax请求
                    pAjax({
                        url: '../php/addCar.php',
                        type: 'post',
                        data: {
                            'goods_id': number,
                            'userName': login,
                            'goods_class': jsn
                        }
                    }).then(function (res) {
                        console.log(JSON.parse(res));
                    });
                    location.href = `http://gz2010.io/xiaomi/html/car.html?id=${number}`;
                }
            }
        }
    })



    // let showLI = document.querySelector('.showLI');
    // let username = document.querySelector('.username');
    // let userA = document.querySelector('.username a');
    // let swz = document.querySelector('.swz');
    // let login = getCookie('login');

    // if (!login) {
    //     showLI.style.display = 'block';
    // } else if (login) {
    //     showLI.style.display = 'none';
    //     username.style.display = 'block';
    //     userA.innerHTML = login
    // }
    // username.onmouseover = function () {
    //     swz.style.display = 'block'
    // }
    // username.onmouseout = function () {
    //     swz.style.display = 'none'
    // }
    // swz.onmouseover = function () {
    //     swz.style.display = 'block'
    // }
    // swz.onmouseout = function () {
    //     swz.style.display = 'none'
    // }

    function renderHtml(dataH) {
        main.innerHTML = `
                <article class="m_l">
                    <img src="${dataH.img}">
                </article>
                <article class="m_r">
                    <article class="senta">
                        <h1>${dataH.name}</h1>
                        <h2>${dataH.letter}</h2>
                        <h3>小米自营</h3>
                        <h4>${dataH.price}</h4>
                    </article>
                    <article class="site">
                        <ul>
                            <li>北京</li>
                            <li>北京市</li>
                            <li>海淀区</li>
                            <li>清河街道</li>
                            <li>修改</li>
                        </ul>
                        <span>该地区暂时缺货</span>
                    </article>
                    <article class="choice">
                        <article class="choice_a">
                            <h1>选择版本</h1>
                            <ul>
                                <li class="active" style="margin-right: 12px"><a href="#">12GB+256GB</a></li>
                                <li><a href="#">8GB+256GB</a></li>
                                <li style="margin-top:10px;"><a href="#">8GB+128GB</a></li>
                            </ul>
                        </article>
                        <article class="choice_b">
                            <h1>选择颜色</h1>
                            <ul>
                                <li style="margin-right: 12px"><a href="#">黑色</a></li>
                                <li><a href="#">蓝色</a></li>
                                <li style="margin: 10px 12px 0 0"><a href="#">白色</a></li>
                                <li style="margin-top:10px;"><a href="#">烟紫（素皮）</a></li>
                                <li style="margin-top: 10px"><a href="#">雷军签名版</a></li>
                            </ul>
                        </article>
                        <article class="choice_c">
                            <h1>选择套餐</h1>
                            <ul>
                                <li style="margin-right: 10px"><a href="#">标准版</a></li>
                                <li><a href="#">套装版（赠充电器）</a></li>
                            </ul>
                        </article>
                        <article class="choice_d">
                            <h1>选择小米提供的尊享服务</h1>
                            <h2>了解尊享服务</h2>
                            <article class="d_content">
                                <h3>MiCare保障服务</h3>
                                <span>679元</span>
                                <br>
                                <h4>2年2次碎屏 1年延保维修 1年保值换新</h4>
                                <h5>我已阅读服务条款</h5>
                            </article>
                        </article>
                        <article class="choice_e">
                            <h1>选择小米提供的意外保护</h1>
                            <h2>了解意外保护</h2>
                            <article class="e_content">
                                <h3>意外保障服务</h3>
                                <span>349元</span>
                                <br>
                                <h4>手机意外碎屏/进水/碾压等损坏</h4>
                                <h5>我已阅读服务条款</h5>
                            </article>
                            <article class="e_content" style="margin: 0px;">
                                <h3>碎屏保障服务</h3>
                                <span>249元</span>
                                <br>
                                <h4>手机意外碎屏</h4>
                                <h5>我已阅读服务条款</h5>
                            </article>
                        </article>
                        <article class="choice_f">
                            <h1>选择小米提供的延长保修</h1>
                            <h2>了解延长保修</h2>
                            <article class="f_content">
                                <h3>延长保修服务</h3>
                                <span>159元</span>
                                <br>
                                <h4>厂保延1年，性能故障免费维修</h4>
                                <h5>我已阅读服务条款</h5>
                            </article>
                        </article>
                        <article class="choice_g">
                            <h1>选择小米提供的云空间服务</h1>
                            <h2>了解云空间服务</h2>
                            <article class="g_content">
                                <h3>云空间年卡200G</h3>
                                <span>208元</span>
                                <br>
                                <h4>主商品签收后，自动激活至下单账号</h4>
                                <h5>我已阅读注意事项</h5>
                            </article>
                            <article class="g_content" style="margin: 0px">
                                <h3>云空间年卡50G</h3>
                                <span>208元</span>
                                <br>
                                <h4>主商品签收后，自动激活至下单账号</h4>
                                <h5>我已阅读注意事项</h5>
                            </article>
                            <article class="g_content" style="margin: 0px">
                                <h3>云空间月卡200G</h3>
                                <span>208元</span>
                                <br>
                                <h4>主商品签收后，自动激活至下单账号</h4>
                                <h5>我已阅读注意事项</h5>
                            </article>
                            <article class="g_content" style="margin: 0px">
                                <h3>云空间月卡50G</h3>
                                <span>208元</span>
                                <br>
                                <h4>主商品签收后，自动激活至下单账号</h4>
                                <h5>我已阅读注意事项</h5>
                            </article>
                        </article>
                    </article>
                    <article class="price">
                        <h1>小米11 12GB+256GB 黑色</h1>
                        <h2>总计：</h2>
                        <h3>${dataH.price}</h3>
                    </article>
                    <article class="buy">
                        <button class="btn1">购买</button>
                        <button class="btn2">喜欢</button>
                    </article>
                </article>
    `;
        let btn1 = document.querySelector('.btn1');
        let buy = document.querySelector('.buy');
        buy.onclick = function () {
            let e = window.event;
            if (e.target.id = 'btn1') {
                let login = getCookie('login');
                if (!login) {
                    alert('你还没有登录，请先登录');
                    localStorage.setItem('web', location.href);
                    location.href = 'http://gz2010.io/xiaomi/html/login.html';
                    return
                }

                //         // 发送添加购物车的ajax请求
                //         pAjax({
                //             url: '../php/addCar.php',
                //             type: 'post',
                //             data: {
                //                 'goods_id': number,
                //                 'userName': login
                //             }
                //         }).then(function (res) {
                //             console.log(JSON.parse(res));
                //         })
                //     }
            }
        }
    }
}