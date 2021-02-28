<?php
    // 获取前端传递过来的用户名和密码
    $name = $_POST['name'];
    $pass = $_POST['pass'];
    $tel = $_POST['tel'];

    // 链接数据库
    $con = mysqli_connect('localhost','root','123456','list');

    $sql = "SELECT * FROM `xm` WHERE `name` = '$name' AND `pass` = '$pass'";

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

    // 如果$row 有数据的时候表示  已经存在该用户
    if($arr){
        print_r('该用户名已经存在，请重新输入');
    }else{
        $sql1 = "INSERT INTO `xm` VALUES(null,'$name','$pass','$tel')";
        $res1 = mysqli_query($con,$sql1);
        print_r('注册成功');
    }
?>