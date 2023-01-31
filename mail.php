<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer-master/PHPMailer-master/src/Exception.php';
require 'PHPMailer-master/PHPMailer-master/src/PHPMailer.php';
require 'PHPMailer-master/PHPMailer-master/src/SMTP.php';



if(isset($_POST["submit"])){
    $name=$_POST['name'];
    $email=$_POST['email'];
    $number=$_POST['number'];
    $subject=$_POST['subject'];
    $message=$_POST['message'];
    $body="<br/><p>username: {$name}</p><br/>";
    $body.="<br/><p>email: {$email}</p><br/>";
    $body.="<br/><p>Phone: {$number}</p><br/>";
    $body.="<br/><p>subject: {$subject}</p><br/>";
    $body.="<br/><p>message: {$message}</p><br/>";
    
    

    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'gosaisrushti@gmail.com';                     //SMTP username
    $mail->Password   = 'qbrtzhrstilfsqem';
    $mail->SMTPSecure = 'ssl';            //Enable implicit TLS encryption
    $mail->Port       = 465;
    $mail->setFrom('gosaisrushti@gmail.com');
    $mail->addAddress('gosaisrushti3110@gmail.com');
    $mail->isHTML(true);
    $mail->Subject="Hecta infrastructure";
    $mail->Body=$body;
    $mail->send();

    echo
    "
    <script>
    alert('Maill Sent Successfully');
    document.location.href='index.php';
    </script>
    ";

}

