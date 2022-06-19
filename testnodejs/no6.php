<?php

$x = 30000;
$growth = 30000*0.03;
$result = 0;
while ($x < 100000){
    $result++;
    $x += $growth;
}

echo $result;