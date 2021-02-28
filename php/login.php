<?php
    $name = $_GET['name'];
    $pass = $_GET['pass'];

    // 链接数据库
    $con = mysqli_connect('localhost','root','123456','list');
    // 写sql语句  查
    $sql = "SELECT * FROM `xm` WHERE `name` = '$name' AND `pass` = '$pass'";
    // 执行sql语句
    $res = mysqli_query($con,$sql);
    // 判断是否链接成功
    if(!$res){
        // 如果$res为空，那么就会执行这条if
        die('链接数据库失败' . mysqli_error($con));
    }
    // 处理返回的数据
    $arr = array();
    $row = mysqli_fetch_assoc($res);
    while($row){
        array_push($arr,$row);
        $row = mysqli_fetch_assoc($res);
    }
    // if($arr){

    //     // 登录成功的时候设置cookie
    //     // setCookie('login',1);
    //     // header('location:../html/xm.html');
    // }else{
    //     print_r('登录失败,密码错误');
    // }
    print_r(json_encode($arr,JSON_UNESCAPED_UNICODE));
?>