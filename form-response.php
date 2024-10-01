<?php
$name = $email = $message ="";
$nameErr = $emailErr = $messageErr ="";
$emailBody ="<div>";
if ($_POST) {
    if(empty($_POST["name"])){
        $nameErr="Name is required.";
    }else{
        $name = test_input($_POST["name"]);
        $emailBody.="<label><b>Name:</b>".$name."</label>" ;
        if (!preg_match("/^[a-zA-Z-' ]*$/",$name)) {
            $nameErr = "Only letters and white space allowed";
          }
    }

    if(empty($_POST["email"])){
        $emailErr="Email is required.";
    }else{
        $email= test_input($_POST["email"]);
        $emailBody.="<label><b>Email:</b>".$email."</label>" ;
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $emailErr = "Invalid email format";
          }
    }

    if(empty($_POST["message"])){
        $messageErr="Message is required.";
    }else{
        $message = test_input($_POST["message"]);
        $emailBody.="<label><b>Message</b>:".$message."</label>" ;
    }
    $emailBody.="</div>";
    $headers  = 'MIME-Version: 1.0' . "\r\n"
    .'Content-type: text/html; charset=utf-8' . "\r\n"
    .'From: '. $email ."\r\n";
    if(mail("codingtan@gmail.com" , "Connect-Portfolio" , $emailBody ,$headers )){
        echo"<p>Thank you for connecting with me ".$name." .I will make sure to reply to your message .</p>";
    }else{
        echo"<p>There seems to be an issue . Sorry please try again some time later .</p>";
    }

}else{
    echo'<p>Something went wrong!!!</p>';
}

function test_input($data) {
$data = trim($data);
$data = stripslashes($data);
$data = htmlspecialchars($data);
return $data;
}
?>
<!-- error is not working but we just going to make sure that we are abel tos send the message and receive a response the message has been sent -->
