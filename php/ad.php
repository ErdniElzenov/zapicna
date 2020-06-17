<?php
            $login = filter_var(trim($_POST['login']),
            FILTER_SANITIZE_STRING);
            $pass = filter_var(trim($_POST['pass']),
            FILTER_SANITIZE_STRING);
            $mysql = new mysqli('localhost','root','','zapic_bd');
            $result = $mysql->query("SELECT * FROM `admin` WHERE `login` = '$login' AND `pass` = '$pass' ");
            $admin = $result->fetch_assoc();
            if (count($admin) == 0) {
                echo ('пользователь не найден ');
                exit ();
            }
            echo ('id name namber master date time');
            $resul =  mysqli_query($mysql, "SELECT * FROM  `users`");
            if(mysqli_num_rows($resul) > 0) {
                $row = mysqli_fetch_array($result);
                do {
                   
                    echo('<p>' . $row["id"] .' '. $row["name"] .' ' .$row["namber"] .' '. $row["master"] .' ' . $row["date"] .' '. $row["time"] .' </p>' );
                  
                }
                while ($row = mysqli_fetch_array($resul));
            }
            $mysql->close();
?>
