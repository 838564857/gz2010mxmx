window.onload = function () {
    // let strqw = 'IUYIUYI?qw=e&YI=Y&ku=m&iuy=jh';
    // let obj = {};
    // let a = strqw.split('?')[1].split('&');
    // console.log(a);
    // a.forEach((item, index) => {
    //     item.split('=');
    //     obj[item.split('=')[0]] = item.split('=')[1];
    //     console.log(item);
    //     console.log(index);
    // });
    // console.log(obj);
    // console.log(obj.ku);

    // let loc = `location.href?id=`;
    // console.log(loc);


    let show = document.querySelector('.show');
    let ula = document.querySelectorAll('nav .nav_center ul li a');
    let show2 = document.querySelector('.show2');
    // console.log(ula);
    let num = 0;
    ula.forEach((item, index) => {
        item.onmouseover = function () {
            show.style.display = "block";
            show.classList.add('show2');
            num = index;
            getData();

        }
        item.onmouseout = function () {
            show.style.display = "none";
            show.classList.remove('show2');
        }
    })
    show.onmouseover = function () {
        show.style.display = "block"
    }
    show.onmouseout = function () {
        show.style.display = "none"
    }


    let bigbox = document.querySelector('.slide .bigbox');
    let img = document.querySelectorAll('.slide .bigbox img');
    let slide = document.querySelector('.main .slide');
    let lc = document.querySelectorAll('.slide_u li');
    let slide_l = document.querySelector('.slide_left');
    let slide_r = document.querySelector('.slide_right');
    // 克隆第一张和最后一张图
    let firstImg = img[0].cloneNode(true);
    let lastImg = img[img.length - 1].cloneNode(true);
    bigbox.appendChild(firstImg);
    bigbox.insertBefore(lastImg, img[0]);

    // // 添加了img元素之后，需要重新获取img的个数，用li的个数乘li的宽度  再把这个值赋值给bigbox
    let imgAll = img = document.querySelectorAll('.slide .bigbox img');
    bigbox.style.width = imgAll[0].offsetWidth * imgAll.length + 'px';

    // // 用定时器让图片动起来
    let index = 1;
    let timer = setInterval(() => {
        index++;
        autoPlay();
    }, 2000);

    // // 当鼠标移入时，暂停轮播图
    slide.onmouseover = () => {
        clearInterval(timer)
    };

    // 当鼠标移出的时候继续轮播
    slide.onmouseout = () => {
        timer = setInterval(() => {
            index++;
            autoPlay();
        }, 2000)
    };

    let flag = true;

    slide_l.onclick = function () {
        if (flag) {
            flag = false;
            index--,
            autoPlay();
        }
        // 点击左边的按钮，需要让ul往右边移动，index的值 - 1

    }

    slide_r.onclick = function () {
        if (flag) {
            flag = false;
            index++;
            autoPlay()
        }
    }


    function autoPlay() {
        // index等于1的时候，显示的是第一张轮播图
        // 切换小圆点的高亮
        for (let i = 0; i < lc.length; i++) {
            lc[i].classList.remove('active');
        }
        if (index == imgAll.length - 1) {
            lc[0].classList.add('active')
        } else if (index == 0) {
            lc[lc.length - 1].classList.add('active');
        } else {
            lc[index - 1].classList.add('active');
        }



        move(bigbox, {
            left: -index * 1226,
        }, function () {
            if (index === imgAll.length - 1) {
                index = 1;
                bigbox.style.left = -index * 1226 + 'px'
            } else if (index == 0) {
                index = imgAll.length - 2;
                bigbox.style.left = -index * 1226 + 'px'
            }
            flag = true
        })
    };

    // 请求数据
    let ul = document.querySelector('.show ul');

    // getData();

    function getData() {
        let xhr = new XMLHttpRequest();
        xhr.open('get', '../json/a.json');
        xhr.send();
        xhr.onload = function () {
            let res = JSON.parse(xhr.responseText);
            // console.log(res);
            // res[num].forEach((item, index) => {
            //     console.log(index);
            //     console.log(item);

            //     render(item)
            // })
            render(res[num]);

        }
    }

    function render(data) {
        // console.log(data);
        ul.innerHTML = ''
        let str = '';
        data.forEach((item, index) => {
            str +=
                `
            <li>
                    <img
                        src="${item.img}">
                    <h4>${item.phoneName}</h4>
                    <span>${item.price}</span>
                </li>
            `;
        })
        ul.innerHTML += str
    }


    // 请求数据
    let mul = document.querySelector('.wrap ul');

    getDatax();

    function getDatax() {
        let xhr = new XMLHttpRequest();
        xhr.open('get', '../json/b.json');
        xhr.send();
        xhr.onload = function () {
            let res1 = JSON.parse(xhr.responseText);
            // console.log(res1);
            rendere(res1);
        }
    }

    function rendere(res1) {
        res1.forEach((item, index) => {
            let str1 = `
            <li>
                <img
                    src="${item.img}">
            </li>`;
            mul.innerHTML += str1
        })
    }

    // 获取数据
    let sec = document.querySelector('.sec .sec_b');
    getDatay();

    function getDatay() {
        let xhr = new XMLHttpRequest();
        xhr.open('get', '../json/c.json');
        xhr.send();
        xhr.onload = function () {
            let res2 = JSON.parse(xhr.responseText);
            // console.log(res2);
            rendery(res2[1]);
            page()
        }
    }

    function page() {
        let hw = document.querySelectorAll('.sec .sec_b div');
        // console.log(hw);
        hw.forEach((item, index) => {
            // console.log(item);
            item.setAttribute('class', 'skip');
        });
        let skip = document.querySelectorAll('.skip');
        skip.forEach((item, index) => {
            item.onclick = function () {
                location.href = `http://gz2010.io/xiaomi/html/page.html?id=${this.id}&ku=j`;
            }
        })
    }

    function rendery(datay) {
        // console.log(datay[1]);
        datay.forEach((item, index) => {
            let stry = `
            <div id="${item.id}">
                <img
                    src="${item.img}">
            <span>${item.list}</span>
            <h3>${item.rise}</h3>
            <h4>${item.screen}</h4>
        </div>`;
            sec.innerHTML += stry
        })
    }
    // 获取元素
    let pner = document.querySelector('.phone_r');

    getDataz();

    function getDataz() {
        let xhr = new XMLHttpRequest();
        xhr.open('get', '../json/d.json');
        xhr.send();
        xhr.onload = function () {
            let res3 = JSON.parse(xhr.responseText);
            // console.log(res3);
            renderz(res3[1]);
            pageR();
        }
    }

    function pageR() {
        let pDi = document.querySelectorAll('.phone_r div');
        pDi.forEach((item, index) => {
            item.setAttribute('class', 'cap');
        });
        let cap = document.querySelectorAll('.cap');
        cap.forEach((item, index) => {
            item.onclick = function () {
                location.href = `http://gz2010.io/xiaomi/html/page.html?id=${this.id}&ku=l`
            }
        })
    }



    function renderz(dataz) {
        // console.log(dataz);
        dataz.forEach((item, index) => {
            let strz = `
            <div id=${item.id}>
                <img
                    src="${item.img}">
            <h1>${item.list}</h1>
            <h2>${item.model}</h2>
            <h3>${item.price}</h3>
        </div>`;
            pner.innerHTML += strz
        })
    }

    // 获取元素
    let hr = document.querySelector('.home_r');

    getDatab();

    function getDatab() {
        let xhr = new XMLHttpRequest();
        xhr.open('get', '../json/e.json');
        xhr.send();
        xhr.onload = function () {
            let res4 = JSON.parse(xhr.responseText);
            // console.log(res4);
            renderb(res4[1]);
            pageT();
        }
    }

    function pageT() {
        let hrd = document.querySelectorAll('#home .home .home_r div');
        hrd.forEach((item, index) => {
            item.setAttribute('class', 'cad');
        })
        let cad = document.querySelectorAll('.cad');
        cad.forEach((item, index) => {
            item.onclick = function () {
                location.href = `http://gz2010.io/xiaomi/html/page.html?id=${this.id}&ku=m`;
            }
        })
    }


    function renderb(datab) {
        datab.forEach((item, index) => {
            let str = `
            <div id=${item.id}>
            <img
                src="${item.img}">
            <h1>${item.model}</h1>
            <h2>${item.merit}</h2>
            <h3>${item.price}</h3>
        </div>
            `;
            hr.innerHTML += str
        })
    }

    // 获取数据
    let tr = document.querySelector('.tude_r');

    getDatac();

    function getDatac() {
        let xhr = new XMLHttpRequest();
        xhr.open('get', '../json/f.json');
        xhr.send();
        xhr.onload = function () {
            let res5 = JSON.parse(xhr.responseText);
            renderc(res5[1]);
            pageQ();
        }
    }

    function pageQ() {
        let tud = document.querySelectorAll('#tude .tude .tude_r div');
        tud.forEach((item, index) => {
            item.setAttribute('class', 'tuda');
        })
        let tuda = document.querySelectorAll('.tuda');
        tuda.forEach((item, index) => {
            item.onclick = function () {
                location.href = `http://gz2010.io/xiaomi/html/page.html?id=${this.id}&ku=n`
            }
        })
    }

    function renderc(datac) {
        datac.forEach((item, index) => {
            let str = `
            <div id=${item.id}>
            <img
                src="${item.img}">
            <h1>${item.model}</h1>
            <h2>${item.merit}</h2>
            <h3>${item.price}</h3>
        </div>
            `;
            tr.innerHTML += str
        })
    }

    // 获取元素
    let partl = document.querySelector('.parts_r');

    getDatad();

    function getDatad() {
        let xhr = new XMLHttpRequest();
        xhr.open('get', '../json/g.json');
        xhr.send();
        xhr.onload = function () {
            let res6 = JSON.parse(xhr.responseText);
            renderd(res6[1]);
            pageZ();
        }
    }

    function pageZ() {
        let srd = document.querySelectorAll('.parts_r div');
        srd.forEach((item, index) => {
            item.setAttribute('class', 'aty');
        });
        let aty = document.querySelectorAll('.aty');
        aty.forEach((item, index) => {
            item.onclick = function () {
                location.href = `http://gz2010.io/xiaomi/html/page.html?id=${this.id}&ku=o`
            }
        })
    }


    function renderd(datad) {
        datad.forEach((item, index) => {
            let str = `
            <div id=${item.id}>
            <img
                src="${item.img}">
            <h1>${item.model}</h1>
            <h2>${item.merit}</h2>
            <h3>${item.price}</h3>
        </div>
            `;
            partl.innerHTML += str
        })
    }

    let rir = document.querySelector('.rim_r');

    getDatae();

    function getDatae() {
        let xhr = new XMLHttpRequest();
        xhr.open('get', '../json/h.json');
        xhr.send();
        xhr.onload = function () {
            let res7 = JSON.parse(xhr.responseText);
            renderf(res7[1]);
            pageY();
        }
    }

    function pageY() {
        let imd = document.querySelectorAll('#rim .rim .rim_r div');
        imd.forEach((item, index) => {
            item.setAttribute('class', 'imv');
        })
        let imv = document.querySelectorAll('.imv');
        imv.forEach((item, index) => {
            item.onclick = function () {
                location.href = `http://gz2010.io/xiaomi/html/page.html?id=${this.id}&ku=p`
            }
        })
    }

    function renderf(datae) {
        datae.forEach((item, index) => {
            let str = `
            <div id=${item.id}>
            <img
                src="${item.img}">
            <h1>${item.model}</h1>
            <h2>${item.merit}</h2>
            <h3>${item.price}</h3>
        </div>
            `;
            rir.innerHTML += str
        })
    }

    let ih = document.querySelectorAll('.menu ul li');
    let mB = document.querySelector('.menuBig');
    let numberY = 0;
    ih.forEach((item, index) => {
        item.onmouseover = function () {
            mB.style.display = "block";
            numberY = index;
            getDataf();
        }
        item.onmouseout = function () {
            mB.style.display = "none"
        }
        mB.onmouseover = function () {
            mB.style.display = "block"
        }
        mB.onmouseout = function () {
            mB.style.display = "none"
        }
    })

    let up = document.querySelector('.menuBig ul');

    function getDataf() {
        let xhr = new XMLHttpRequest();
        xhr.open('get', '../json/i.json');
        xhr.send();
        xhr.onload = function () {
            let res8 = JSON.parse(xhr.responseText);
            // console.log(res8);
            renderg(res8[numberY])
        }
    }

    function renderg(data) {
        // console.log(data);
        up.innerHTML = '';
        let str = '';
        data.forEach((item, index) => {
            // console.log(item);
            str += `
            <li>
            <img
                src="${item.img}">
            <h1>${item.list}</h1>
        </li>
            `;
        })
        up.innerHTML += str
    }

    // 还没有登录时候显现的登录注册
    let showLI = document.querySelector('.showLI');
    let username = document.querySelector('.username');
    let userA = document.querySelector('.username a');
    let swz = document.querySelector('.swz');
    let login = getCookie('login');
    if (!login) {
        showLI.style.display = 'block';
    } else if (login) {
        showLI.style.display = 'none';
        username.style.display = 'block';
        userA.innerHTML = login
    }
    username.onmouseover = function () {
        swz.style.display = 'block'
    }
    username.onmouseout = function () {
        swz.style.display = 'none'
    }
    swz.onmouseover = function () {
        swz.style.display = 'block'
    }
    swz.onmouseout = function () {
        swz.style.display = 'none'
    }


    let register = document.querySelector('.register');
    register.onclick = function (e) {
        console.log(666);

        e.preventDefault()
        localStorage.setItem('web', location.href);
        location.href = './login.html'

    }
    // localStorage.setItem('web',location.href);
    
}