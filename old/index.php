<?php

$dictionary = "dictionaries/brotDb.txt";

$state = "state.txt";

$fh = fopen($dictionary,'r');
$fileState = fopen($state,'r');
$i = 0;
$stateNb = fgets($fileState);
echo $stateNb;
while ($line = fgets($fh)) {
  if($i >= $stateNb){
    echo 'line number : '.$i. ' ';
    file_put_contents($state, $i);
    echo $line.'<br>';
  }
  $i++;

}
fclose($fh);
fclose($filestate);


?>
