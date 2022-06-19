<?php

/**
 * 
 * 1
 * 2 2
 * 3 3 3
 * 4 4 4 4
 * 5 5 5 5 5
 * 
 */

function empat_a($n)
{
    $str = '';
    for ($i = 1; $i <= $n; $i++) {
        for ($j = 1; $j <= $i; $j++) {
            $str .= $i;
        }
        $str .= PHP_EOL;
    }
    return $str;
}

echo empat_a(5) . PHP_EOL;

/**
 * 
 * 1
 * 2 1
 * 3 2 1
 * 4 3 2 1
 * 5 4 3 2 1
 * 
 */

function empat_b($n)
{
    $str = '';
    for ($i = 1; $i <= $n; $i++) {
        for ($j = $i; $j >= 1; $j--) {
            $str .= $j;
        }
        $str .= PHP_EOL;
    }
    return $str;
}

echo empat_b(5) . PHP_EOL;