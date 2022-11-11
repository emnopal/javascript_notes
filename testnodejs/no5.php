<?php

$x = 30;
$y = 5;

do {
    $y *= 2;
    $x++;
    echo "$y < $x => x : $x y : $y" . PHP_EOL;
} while($y < $x);