<?php
if($_POST['name']  && $_POST['phone']) {

    $name = $_POST['name'];
    $phone = $_POST['phone'];

    $message = 'На сайте Lumena была создана заявка';
    $message .= '<br>Имя: '.$name;
    $message .= '<br>Телефон: '.$phone;


    $headers= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8"."\r\n";
    $headers .= "From: info@object-q.by <info@object-q.by>"."\r\n";

    mail('info@ariol.by', 'Заявка object-q', $message, $headers);

    echo json_encode(array('msg'=>'Ваша заявка отправлена'));
}

