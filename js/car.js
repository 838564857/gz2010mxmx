window.onload = function () {

    likeCar = document.querySelector('.likeCar');
    // 已经登录过的页面
    let maiN = document.querySelector('#maiN');
    // 没有登录的页面
    let mainB = document.querySelector('#mainB')
    // 登录按钮
    let btnA = document.querySelector('.btnA');
    // 去购物按钮
    let btnB = document.querySelector('.btnB');
    // 鼠标触碰的用户名h3
    let headH = document.querySelector('.head h3');
    // 鼠标碰到用户名显现的下拉菜单
    let showUl = document.querySelector('.head ul');
    // 下拉菜单的所有li
    let showLi = document.querySelectorAll('.head ul li');
    // 触碰li显示的效果类名
    let active = document.querySelector('.active');
    // 数量的input框
    let ipt2 = document.querySelector('.ipt2');
    // 购物车内容
    let car = document.querySelector('.car');


    // json的类名
    let jsonClas = location.search.substring(1).split('&')[1];
    // let jsonClass = jsonClas.split('=')[1];
    // console.log(jsonClass);


    // url的id值
    let numb = location.search.substring(1).split('&')[0];
    let number = numb.split('=')[1];
    // console.log(number);


    getData();

    function getData() {
        let xhr = new XMLHttpRequest();
        xhr.open('get', '../json/q.json');
        xhr.send();
        xhr.onload = function () {
            res = JSON.parse(xhr.responseText);
            render(res);
        }
    }

    function render(data) {
        let str = '';
        data.forEach((item, index) => {
            str += `
              <div>
        <img
            src="${item.img}">
        <h1>${item.name}</h1>
        <h2>${item.price}</h2>
        <h3>${item.people}</h3>
    </div>
            `;
        })
        likeCar.innerHTML = str
    }

    headH.onmouseover = function () {
        showUl.style.display = "block"
    }
    headH.onmouseout = function () {
        showUl.style.display = "none"
    }
    showUl.onmouseover = function () {
        showUl.style.display = "block"
    }
    showUl.onmouseout = function () {
        showUl.style.display = "none"
    }
    showLi.forEach((item, index) => {
        item.onmouseover = function () {
            item.classList.add('class', 'active')
        }
        item.onmouseout = function () {
            item.classList.remove('class', 'active')
        }
    })

    let login = getCookie('login');
    if (!login) {
        maiN.style.display = "none";
        mainB.style.display = "block";
    } else {
        mainB.style.display = "none";
        maiN.style.display = "block";
        headH.innerHTML = `${login}`
    }
    document.onclick = function () {
        document.cookie = `login = login;expires=${new Date(51837219800)}`;
    }
    btnA.onclick = function () {
        location.href = 'http://gz2010.io/xiaomi/html/login.html'
    }
    btnB.onclick = function () {
        location.href = 'http://gz2010.io/xiaomi/html/xm.html'
    }

    pAjax({
        url: '../php/getAddCar.php',
        type: 'post',
        data: {
            'userName': login,
        }
    }).then(function (res) {
        let resW = JSON.parse(res);
        // console.log(resW);
        getDataJ(resW);
        getDataL(resW);
        getDataM(resW);
        getDataN(resW);
        getDataO(resW);
        getDataP(resW);
    })


    function getDataJ(a) {
        let xhr = new XMLHttpRequest();
        xhr.open('get', `../json/j.json`);
        xhr.send();
        xhr.onload = function () {
            let resZ = JSON.parse(xhr.responseText);
            // renderZ(resZ);
            // console.log(resZ);
            // console.log(resZ[1]);

            a.forEach(item => {
                if (item.goods_class == resZ[0]) {
                    // console.log(item);
                    let dataJ = resZ[1].filter(attr => {
                        return item.goods_id == attr.id;
                    })
                    let dataK = item.goods_num;
                    // console.log(dataK);
                    // console.log(dataJ[0]);
                    renderZ(dataJ[0], dataK);
                    // console.log(dataJ[0]);
                }
            });
        }
    }



    function getDataL(a) {
        let xhr = new XMLHttpRequest();
        xhr.open('get', '../json/l.json');
        xhr.send();
        xhr.onload = function () {
            let resZ = JSON.parse(xhr.responseText);
            // renderZ(resZ)
            a.forEach(item => {
                if (item.goods_class == resZ[0]) {
                    // console.log(item);
                    let dataJ = resZ[1].filter(attr => {
                        return item.goods_id == attr.id;
                    })
                    let dataK = item.goods_num;
                    // console.log(dataJ[0]);
                    renderZ(dataJ[0], dataK);
                    // console.log(dataJ[0]);
                }
            });
        }
    }

    function getDataM(a) {
        let xhr = new XMLHttpRequest();
        xhr.open('get', '../json/m.json');
        xhr.send();
        xhr.onload = function () {
            let resZ = JSON.parse(xhr.responseText);
            // renderZ(resZ)
            a.forEach(item => {
                if (item.goods_class == resZ[0]) {
                    // console.log(item);
                    let dataJ = resZ[1].filter(attr => {
                        return item.goods_id == attr.id;
                    })
                    let dataK = item.goods_num;
                    // console.log(dataJ[0]);
                    renderZ(dataJ[0], dataK);
                    // console.log(dataJ[0]);
                }
            });
        }
    }

    function getDataN(a) {
        let xhr = new XMLHttpRequest();
        xhr.open('get', '../json/n.json');
        xhr.send();
        xhr.onload = function () {
            let resZ = JSON.parse(xhr.responseText);
            // renderZ(resZ)
            a.forEach(item => {
                if (item.goods_class == resZ[0]) {
                    // console.log(item);
                    let dataJ = resZ[1].filter(attr => {
                        return item.goods_id == attr.id;
                    })
                    let dataK = item.goods_num;
                    // console.log(dataJ[0]);
                    renderZ(dataJ[0], dataK);
                    // console.log(dataJ[0]);
                }
            });
        }
    }

    function getDataO(a) {
        let xhr = new XMLHttpRequest();
        xhr.open('get', '../json/o.json');
        xhr.send();
        xhr.onload = function () {
            let resZ = JSON.parse(xhr.responseText);
            // renderZ(resZ)
            a.forEach(item => {
                if (item.goods_class == resZ[0]) {
                    // console.log(item);
                    let dataJ = resZ[1].filter(attr => {
                        return item.goods_id == attr.id;
                    })
                    let dataK = item.goods_num;
                    // console.log(dataJ[0]);
                    renderZ(dataJ[0], dataK);
                    // console.log(dataJ[0]);
                }
            });
        }
    }

    function getDataP(a) {
        let xhr = new XMLHttpRequest();
        xhr.open('get', '../json/p.json');
        xhr.send();
        xhr.onload = function () {
            let resZ = JSON.parse(xhr.responseText);
            // renderZ(resZ)
            a.forEach(item => {
                if (item.goods_class == resZ[0]) {
                    // console.log(item);
                    let dataJ = resZ[1].filter(attr => {
                        return item.goods_id == attr.id;
                    })
                    let dataK = item.goods_num;
                    // console.log(dataJ[0]);
                    renderZ(dataJ[0], dataK);
                    // console.log(dataJ[0]);
                }
            });
        }
    }



    function renderZ(dataZ, dataM) {
        // console.log(dataM);
        // console.log(dataZ.price.split('元')[0]);
        // console.log(dataM * dataZ.price);
        car.innerHTML += `
    <article class="car_m">
        <input class="ipt1" type="checkbox">
        <article class="img">
            <img
                src="${dataZ.img}">
        </article>
        <article class="namep"> <span>${dataZ.name}</span></article>
        <article class="pricep">
            <h1>${dataZ.price.split('元')[0]}</h1>
        </article>
        <article class="suan">
            <a href="#" class="reduce">-</a>
            <input type="text" class="ipt2" value="${dataM}">
            <a href="#" class="add">+</a>
        </article>
        <article class="pricez">
            <h2>${dataZ.price.split('元')[0] * dataM}</h2>
        </article>
        <h5>X</h5>
    </article>
        `
    }



}