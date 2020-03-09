<?
	require('phpmailer/class.phpmailer.php');

	$mail = new PHPMailer;

	$mail->isMail();

	$dt = date("d.m.y");

	$servername = 'we3cube.pro';

	$title = 'Заявка с сайта '. $servername . ' — ' . $dt; 

	$message = '<table width="100%" border="1">';
	
	if (isset($_POST['name'])){
		$message .= '<tr>';
		$message .= '<td width="45%"><b>Имя</b></td>';
		$message .= '<td>' .  $_POST['name'] . '</td>';
		$message .= '</tr>';
	}
	
	$message .= '<tr>';
	$message .= '<td width="45%"><b>Телефон</b></td>';
	$message .= '<td>' .  $_POST['phone'] . '</td>';
	$message .= '</tr>';
	
	if (isset($_POST['email'])){
		$message .= '<tr>';
		$message .= '<td width="45%"><b>Email</b></td>';
		$message .= '<td>' .  $_POST['email'] . '</td>';
		$message .= '</tr>';
	}
	
	if (isset($_POST['url'])){
		$message .= '<tr>';
		$message .= '<td width="45%"><b>Ссылка на сайт</b></td>';
		$message .= '<td>' .  $_POST['url'] . '</td>';
		$message .= '</tr>';
	}
	
	if (isset($_POST['mess'])){
		$message .= '<tr>';
		$message .= '<td width="45%"><b>Детали проекта</b></td>';
		$message .= '<td>' .  $_POST['mess'] . '</td>';
		$message .= '</tr>';
	}

	$message .= '</table>';
 
	$mail->From = 'info@we3cube.pro';
	$mail->FromName = 'we3cube.pro';
	$mail->CharSet = 'UTF-8';

	$mail->addAddress('info@we3cube.pro,misha1oboronov@gmail.com');

	$mail->isHTML(true);  

	$mail->Subject = $title;
	$mail->Body    = $message;
	
	$mail->send();

?>       