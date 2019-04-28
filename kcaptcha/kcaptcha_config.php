<?php
# KCAPTCHA configuration file
$alphabet = "0123456789abcdefghijklmnopqrstuvwxyz"; # do not change without changing font files!
# symbols used to draw CAPTCHA
//$allowed_symbols = "0123456789"; #digits
$allowed_symbols = "123456789"; #alphabet without similar symbols (o=0, 1=l, i=j, t=f)
# folder with fonts
$fontsdir = 'fonts';
# CAPTCHA string length
//$length = mt_rand(3,5); # random 5 or 6
$length = 3;
# CAPTCHA image size (you do not need to change it, whis parameters is optimal)
$width = 180;
$height = 45;
# symbol's vertical fluctuation amplitude divided by 2
$fluctuation_amplitude = 3;
# increase safety by prevention of spaces between symbols
$no_spaces = true;
# show credits
$show_credits = false; # set to false to remove credits line. Credits adds 12 pixels to image height
$credits = 'www.flashripper.net'; # if empty, HTTP_HOST will be shown
# CAPTCHA image colors (RGB, 0-255)
//$foreground_color = array(0, 0, 0);
//$background_color = array(220, 230, 255);
$foreground_color = array(mt_rand(0,80), mt_rand(0,80), mt_rand(0,80));
$background_color = array(mt_rand(120,255), mt_rand(120,255), mt_rand(120,255));
# JPEG quality of CAPTCHA image (bigger is better quality, but larger file size)
$jpeg_quality = 100;
?>