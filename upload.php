<?php
$dir = $_POST['dir'];
$files = $_POST['file'];
$count = count($files['name']);
for ($i = 0; $i < $count; $i++) {
    if ($count <= 5) {
        $tmp = $files['file']['tmp_name'][$i];
        $file = $files['file']['name'][$i];
        move_uploaded_file($tmp, $dir.'/'.$file);
        chmod($dir.'/'.$file, 0777);
    }
}
