<?php
$linck = new mysqli('localhost','root','','zapic_bd');
if (mysqli_connect_error()) {
    die('Ошибка подключения (' . mysqli_connect_errno() . ') '
     . mysqli_connect_error());
   } 

   ?>
