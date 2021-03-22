<?php

if(empty($_POST['email'])) {
	die('Error: Missing variables');
}

$email		= $_POST['email'];
$message	= $_POST['message'];

$to = 'info@cutme.pl';
$subject = 'Post ze strony';

$headers = 'From: '.$email."\r\n" .
	'Reply-To: '.$email."\r\n" .
	'X-Mailer: PHP/' . phpversion();
$subject = $subject;
$body.='Wiadomość: '.$message."\n";

if(mail($to, $subject, $body, $headers)) {
    echo 'Dziękujemy za wiadomość';
	//die('Mail sent');
} else {
    echo 'Problem z wysłaniem';
	//die('Error: Mail failed');
}

?>
