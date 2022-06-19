<?php

function okyes($n=15){
    $str = "";
    for ($i=1; $i<=$n; $i++){
        if ($i%3 == 0 && $i%4 == 0) {
            $str .= " OKYES ";
        } elseif ($i%3 == 0) {
            $str .= " OK ";
        } elseif ($i%4 == 0) {
            $str .= " YES ";
        } else {
            $str .= $i ." ";
        }
    }
    return $str;
}

echo okyes();
