<?php
    if (file_exists("data.txt")) {
        $data = json_decode(file_get_contents("data.txt"), true);
    }
    $user_score = $_GET["user_score"];
    $user_name = $_SESSION["user_name"];
    for($i = 0; $i <= 20; $i++){
        if ($user_name === $data[i][0]){
            $porcentagem = ($data[i][1]/100) * 5;
            echo `$porcentagem %`;
        };
    }
?>