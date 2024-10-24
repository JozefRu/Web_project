<?php

    $ID_num = $_POST['ID_num'];
    $first = $_POST['first'];
    $last = $_POST['last'];
    $pas = $_POST['pas'];
    
    $sql = "INSERT INTO users (user_ids, user_first, user_last, user_pas) 
    VALUES ('$ID_num', '$first', '$last', '$pas');";

    $dbServername = "localhost";
    $dbUsername = "root";
    $dbPassword = "";
    $dbName = "loginsystem";

    $conn = mysqli_connect($dbServername, $dbUsername, $dbPassword, $dbName);

    mysqli_query($conn, $sql);

?>