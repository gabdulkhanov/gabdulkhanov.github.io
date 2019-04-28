<?
include('kcaptcha/kcaptcha.php');
session_start();
require_once("config.php");
require_once("kcaptcha/util/script.php");

if ($_POST['act']== "y")
{
    if(isset($_SESSION['captcha_keystring']) && $_SESSION['captcha_keystring'] ==  $_POST['keystring'])
    {
        
        if (isset($_POST['posName']) && $_POST['posName'] == "")
        {
         $statusError = "$errors_name";
        }
        elseif (isset($_POST['posEmail']) && $_POST['posEmail'] == "")
        {
         $statusError = "$errors_mailfrom";
        }
        elseif(isset($_POST['posEmail']) && !preg_match("/^([a-z,._,0-9])+@([a-z,._,0-9])+(.([a-z])+)+$/", $_POST['posEmail']))
        {
         $statusError = "$errors_incorrect";

         unset($_POST['posEmail']);
        }
        elseif (isset($_POST['posRegard']) && $_POST['posRegard'] == "")
        {
         $statusError = "$errors_subject";
        }
        elseif (isset($_POST['posText']) && $_POST['posText'] == "")
        {
         $statusError = "$errors_message";
        }

elseif (!empty($_POST))
{   
 $headers  = "MIME-Version: 1.0\r\n";
 $headers .= "Content-Type: $content  charset=$charset\r\n";
 $headers .= "Date: ".date("Y-m-d (H:i:s)",time())."\r\n";
 $headers .= "From: \"".$_POST['posName']."\" <".$_POST['posEmail'].">\r\n";
 $headers .= "X-Mailer: My Send E-mail\r\n";

 mail("$mailto","$subject","$message","$headers");

 unset($name, $posText, $mailto, $subject, $posRegard, $message);

 $statusSuccess = "$send";
}

       }else{
             $statusError = "$captcha_error";
             unset($_SESSION['captcha_keystring']);
        }
}
?>
<html>
<head>
<meta http-equiv=Content-Type content="text/html; charset=windows-1251">
<title>Обратная связь</title>
<style>
#j {border:1px solid #e1e1e1; background-color:#efefef; text-align:justify; padding:3px; width:330px;}
#q {border:1px solid #e1e1e1; background-color:#ffffff; text-align:justify; padding:3px;}
html,body{font-family:Tahoma;}
#recom {width:220px;padding:10px; position:absolute; text-align:justify}
fieldset {border:0;margin:0;padding:10;}fieldset b{font-size:90%}
label {display:block;}
input,textarea {width:300px;padding:3px;margin:1px 0;border:solid 1px #000}
</style>
</head>
<body>

<div id="j"><div id="q"><b>Обратная связь</b></div>
<p id="emailSuccess"><strong style="color:green;"><?php echo $statusSuccess.$r0; ?></strong></p>
<p id="emailError"><strong style="color:red;"><?php echo $statusError.$r1; ?></strong></p>
<div id="recom"></div>
<div id="q"><form action="form.php" method="post" id="cForm">
<input type="hidden" name="act" value="y" />
<fieldset>
<label for="posName"><b>Ваше имя:</b></label>
<input class="inputIE" type="text" size="47" name="posName" id="posName" />
<label for="posEmail"><b>Ваш E-mail адрес:</b></label>
<input class="inputIE" type="text" size="47" name="posEmail" id="posEmail" />
<label for="posRegard"><b>Тема сообщения:</b></label>
<input class="inputIE" type="text" size="47" name="posRegard" id="posRegard" />
<label for="posText"><b>Сообщение:</b></label>
<textarea class="inputIE" cols="47" rows="7" name="posText" id="posText"></textarea></div>
<div id="q"><label for="posCaptcha"><b>Цифры на изображении</b>:</label>
<img src="kcaptcha/index.php?<?php echo session_name()?>=<?php echo session_id()?>"><?php echo $r1; ?><br>
<input class="inputIE" type="text" size="47" name="keystring" id="keystring" /></div>
<div id="q"><label><input class="inputIE" type="submit" name="selfCC" value=" Отправить " /></label>
</fieldset>
</form></div></div>

</body>
</html>