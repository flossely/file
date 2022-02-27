<?php
$ext = $_REQUEST['ext'];
$dir = '.';
$list = str_replace($dir.'/','',(glob($dir.'/*.'.$ext)));

if ($ext != '') {
    foreach ($list as $key=>$value) {
        chmod($value, 0777);
        unlink($value);
    }
}
