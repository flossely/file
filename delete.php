<?php
$name = $_REQUEST['name'];
if (is_dir($name)) {
    chmod($name, 0777);
    rmdir($name);
} else {
    chmod($name, 0777);
    unlink($name);
}