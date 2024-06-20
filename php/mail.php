<?php
$layout = trim($_POST['layout']);
$style = trim($_POST['style']);
$material = trim($_POST['cover']);
$square = trim($_POST['PM']);
$connection = trim($_POST['contacts']);
$user_name = trim($_POST['name']);
$phone = trim($_POST['tel']);
$best_time = trim($_POST['time']);

define("CONTACT_FORM", 'spt-tm@yandex.ru');

$recepient = "spt-tm@yandex.ru";

$siteName = "valodinmebel";

$subject = 'Заявка онлайн';

$message = '';

if (trim($_POST['layout'])) {
    $message = '
        <html>
                <head>
                    <title>Заявка с сайта</title>
                    <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
                </head>
                <body>
                    <p>Имя заказчика: ' . $user_name . '</p>
                    <p>Телефон: ' . $phone . '</p>
                    <p>Планировка: ' . $layout . '</p>
                    <p>Стиль: ' . $style . '</p>
                    <p>Материал: ' . $material . '</p>
                    <p>Погонные метры: ' . $square . '</p>
                    <p>Связь: ' . $connection . '</p>
                </body>
        </html>';
} else {
    $message = '
    <html>
            <head>
                <title>Изменение телефона</title>
                <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
            </head>
            <body>
                <p>Имя заказчика: ' . $user_name . '</p>
                <p>Телефон: ' . $phone . '</p>
                <p>Время для звонка: ' . $best_time . '</p>
            </body>
    </html>';
}

$mail = mail(
    CONTACT_FORM,
    $subject,
    $message,
    "MIME-Version: 1.0\r\n"
        . "From: " . $siteName . " <" . CONTACT_FORM . ">\r\n"
        . "Reply-To: " . $recepient . "\r\n"
        . "Content-type: text/html; charset=UTF-8\r\n"
);
