<?php
$name = filter_var(trim($_POST['name']),
FILTER_SANITIZE_STRING);
$namber = ($_POST['namber']);
$master = filter_var(trim($_POST['master']),
FILTER_SANITIZE_STRING);
$date = filter_var(trim($_POST['date']),
FILTER_SANITIZE_STRING);
$time = filter_var(trim($_POST['time']),
FILTER_SANITIZE_STRING);
if ($master == 'Марья Ивановна') {$mysql = new mysqli('localhost','root','','zapic_bd');
    $mysql->query("INSERT INTO `users`(`name`, `namber`, `master`, `date`, `time`) VALUES ('$name', '$namber', '$master', '$date', '$time')" );
    $mysql->close();}
if ($master == 'Николай Басков') {$mysql = new mysqli('localhost','root','','zapic_bd');
     $mysql->query("INSERT INTO `users`(`name`, `namber`, `master`, `date`, `time`) VALUES ('$name', '$namber', '$master', '$date', '$time')" );
     $mysql->close();}
 if ($master == 'Ирина Андреева') {$mysql = new mysqli('localhost','root','','zapic_bd');
    $mysql->query("INSERT INTO `users`(`name`, `namber`, `master`, `date`, `time`) VALUES ('$name', '$namber', '$master', '$date', '$time')" );
    $mysql->close();}
  if ($master == 'Игорь Крутой') {$mysql = new mysqli('localhost','root','','zapic_bd');
     $mysql->query("INSERT INTO `users`(`name`, `namber`, `master`, `date`, `time`) VALUES ('$name', '$namber', '$master', '$date', '$time')" );
     $mysql->close();}


     
?>