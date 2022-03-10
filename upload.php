<?php
$dir = $_POST['dir'];
$count = count($_FILES['file']['name']);
for ($i = 0; $i < $count; $i++) {
    if ($count <= 5) {
        $tmp = $_FILES['file']['tmp_name'][$i];
        $file = $_FILES['file']['name'][$i];
        move_uploaded_file($tmp, $dir.'/'.$file);
        chmod($dir.'/'.$file, 0777);
    }
}
