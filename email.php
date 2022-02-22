<?php


    $sendTo = $POST['email'];
    $titulo = "Nueva Subscripcion";
    $mensage = "<p>El usuario:". $POST['email']." se han suscritoz</p>";
    $cabeceras = 'From infoseshat573@gmail.com';
    $password = "infoinfoinfo";

    mail($sendTo, $titulo, $mensaje, $cabeceras);

?>