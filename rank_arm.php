<?php
$user_score = $_GET["user_score"] ?? false;
$action = $_GET["action"] ?? 1;
if ($action == 0) {
    session_start();
    $user_name = $_SESSION["user_name"] ?? false;
    $data = [];
    if (file_exists("data.txt")) {
        $data = json_decode(file_get_contents("data.txt"), true);
    }
    $data[] = [$user_name, floatval($user_score)];
    file_put_contents("data.txt", json_encode($data));
}
?>