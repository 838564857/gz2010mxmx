<?php
    $goods_id = $_POST['goods_id'];
    $userName = $_POST['userName'];
    $goods_class = $_POST['goods_class'];

    $con = mysqli_connect('localhost','root','123456','list');

    // 判断 这个用户对应的商品id是否存在，如果存在直接修改这条数据的商品数量
    // 如果不存在，再把这条数据添加到购物车的数据表中
    $sql = "SELECT * FROM `car` WHERE `userName` = '$userName' AND `goods_id` = '$goods_id' AND `goods_class` = '$goods_class'";
    // 执行sql语句
    $res = mysqli_query($con,$sql);
    if(!$res){
        die('数据库链接错误' . mysqli_error($con));
    }
    $row = mysqli_fetch_assoc($res);
    if(!$row){
        // 说明用户名对应的这条goods_id数据不存在
        // 如果数据不存在。那么就把这条数据添加上去
        $addSql = "INSERT INTO `car` VALUES (null, '$userName', '$goods_id', '1', '$goods_class')";

        $addRes = mysqli_query($con,$addSql);
        if(!$addRes){
            die('数据库链接错误' . mysqli_error($con));
        }
        print_r(json.encode(array('code'=>$addRes,"msg"=>"添加成功"),JSON_UNESCAPED_UNICODE));
    }else{
        $goods_num = ++$row['goods_num'];

        $date = "UPDATE `car` SET `goods_num` = '$goods_num' WHERE `goods_id` = '$goods_id' AND `userName` = '$userName' AND `goods_class` = '$goods_class'";

        $dateRes = mysqli_query($con,$date);

        if(!$dateRes){
            mysqli_error('数据库链接失败' . mysqli.error($con));
        }
        print_r(json_encode(array('code'=>$dateRes,"msg"=>"添加成功"),JSON_UNESCAPED_UNICODE));
    }
?>