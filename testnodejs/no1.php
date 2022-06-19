<?php

function deret($n=60){
    $str = "";
    for ($i = 1; $i <= $n; $i++) {
        if ($i % 12 == 0) {
            if ($i == 60) {
                $str .= $i;
            } else {
                $str .= $i . ",";
            }
        }
    }
    return $str;
}

echo deret();

