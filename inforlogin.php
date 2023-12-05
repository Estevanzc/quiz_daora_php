<?php
$data = [];
if (file_exists("data.txt")) {
    $data = json_decode(file_get_contents("data.txt"), true);
    //print_r($data);
    $player = $_GET["player"] ?? false;
    $player_permisson = true;
    foreach ($data as $players) {
        if ($players[0] == $player) {
            print_r($players);
            echo $player;
            $player_permisson = false;
        }
    }
    if ($player_permisson) {
        session_start();
        $_SESSION["user_name"] = $player;
        header("Location: 1.html");
        exit();
    } else {
        header("Location: index.html");
        exit();
    }
}
