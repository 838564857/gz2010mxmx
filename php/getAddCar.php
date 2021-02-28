<?php
    // 需要去获取当前用户名对应的一些购物车的数据
    $userName = $_POST['userName'];

    // 链接数据库
    $con = mysqli_connect('localhost','root','123456','list');
    // 写sql语句
    $sql = "SELECT * FROM `car` WHERE `userName` = '$userName'";
    // 执行Sql语句
    $res = mysqli_query($con,$sql);
    if(!$res){
        die('数据库链接错误' . mysqli_error($con));
    }

    $arr = array();

    $row = mysqli_fetch_assoc($res);

    while($row){
        array_push($arr,$row);
        $row = mysqli_fetch_assoc($res);
    }

    // 获取购物车表中这个用户的所有数据
    $carSql = "SELECT * FROM `car` WHERE `userName` = '$userName'";
    $carRes = mysqli_query($con,$carSql);
    if(!$carRes){
        die('数据库链接错误' . mysqli_error($con));
    }
    $car = array();
    $carRow = mysqli_fetch_assoc($carRes);
    while($carRow){
        array_push($car,$carRow);
        $carRow = mysqli_fetch_assoc($carRes);
    }
    print_r(json_encode($car,JSON_UNESCAPED_UNICODE));
?>