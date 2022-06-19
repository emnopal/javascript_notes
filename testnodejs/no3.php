<?php

function no3($n = 5)
{
    $str = '';
    for ($i = 0; $i < $n; $i++) {
        for ($j = 0; $j <= $i; $j++) {
            $str .= " " . (($i + 1) + ($j));
        }
        $str .= PHP_EOL;
    }
    return $str;
}

echo no3();

