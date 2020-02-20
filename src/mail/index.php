<?
	if(!isset($_POST['phone']))
		die;

	require('phpmailer/class.phpmailer.php');

	$mail = new PHPMailer;

	$mail->isMail();

	$dt = date("d.m.y");
	$number = 0;

	
	$f = fopen("numbervar.txt", "r");
	$number = intval(fgets($f)); 
	fclose($f);

	$servername = '«SMELO»';

	$title = 'Заявка с сайта '. $servername . ' — ' . $dt; 

	$message = '<table width="100%" border="1">';
	
	$message .= '<tr>';
	$message .= '<td width="45%"><b>Заявка</b></td>';
	$message .= '<td>' . $dt . ' — ' . $number ."</td>";
	$message .= '</tr>';

	$message .= '<tr>';
	$message .= '<td width="45%"><b>'. 'Форма' . '</b></td>';
	$message .= '<td>' .  $_POST['form'] . "</td>";
	$message .= '</tr>';

	if (isset($_POST['user'])){
		$message .= '<tr>';
		$message .= '<td width="45%"><b>'. 'Имя' . '</b></td>';
		$message .= '<td>' .  $_POST['user'] . "</td>";
		$message .= '</tr>';		
	}

	if (isset($_POST['email'])){
		$message .= '<tr>';
		$message .= '<td width="45%"><b>'. 'E-mail' . '</b></td>';
		$message .= '<td>' .  $_POST['email'] . "</td>";
		$message .= '</tr>';		
	}

	$message .= '<tr>';
	$message .= '<td width="45%"><b>'. 'Телефон' . '</b></td>';
	$message .= '<td>'  . ' <a href="tel:' . $_POST['phone']  . '">' . $_POST['phone']  . "</a>" .  "</td>";
	$message .= '</tr>';		

	$message .= '<tr>';
	$message .= '<td width="45%"><b>'. 'Страница' . '</b></td>';
	$message .= '<td>' .  $_SERVER['HTTP_REFERER'] . "</td>";
	$message .= '</tr>';

	$message .= '</table>';
 
	$mail->From = 'noreply@admin';
	$mail->FromName = 'SMELO';
	$mail->CharSet = 'UTF-8';

	$mail->addAddress('smelo.ekaterinburg@mail.ru');

	$mail->isHTML(true);  

	$mail->Subject = $title;
	$mail->Body    = $message;

	if($mail->send()) {
		$f = fopen("numbervar.txt", "w");
		$next = $number + 1;
		fwrite($f, $next);
		fclose($f);
	}


?>       