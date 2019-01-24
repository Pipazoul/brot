<!doctype html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<?php

$dictionary = 'dictionaries/german.txt';
$outputFile = 'dictionaries/output.txt';
$wordToAdd = "brot";

$fh = fopen($dictionary,'r');
while ($line = fgets($fh)) {
  file_put_contents($outputFile, substr($line,0,strlen($line)-2)." ".$wordToAdd."\n" , FILE_APPEND | LOCK_EX);
  
}
fclose($fh);

echo "File generated";
?>