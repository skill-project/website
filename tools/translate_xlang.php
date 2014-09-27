<?php

$chr = "x";

$lines = file("php://stdin");

foreach($lines as $ln => $line)
{
    $line = rtrim($line, "\r\n");
    
    $matches = array();
    if (preg_match("/^msgid\s+\"(.+)\"$/", $line, $matches))
    {
        $string = $matches[1];
        
        $next_line = rtrim($lines[$ln + 1], "\r\n");
        if (preg_match("/^msgstr\s+\"\"$/", $next_line))
        {   
            $string_trans = translate_string($string);
            $next_line_trans = utf8_encode(preg_replace("/^(msgid\s+\").+(\")$/", "msgstr  \"" . utf8_decode($string_trans) . "\"", $line)) . "\n";
            
            $lines[$ln + 1] = $next_line_trans;
        }
    }
}

echo join("", $lines);

function translate_string($string)
{
    global $chr;

    $string = strip_tags($string);
    
    $string_arr = explode(" ", $string);
    $string_trans_arr = array();
    foreach($string_arr as $word)
    {
        if ($word)
        {
            $word_trans = utf8_encode(preg_replace("/([\p{L}])/", $chr, utf8_decode($word)));
            $string_trans_arr[] = $word_trans;    
        }
    }
    $string_trans = join(" ", $string_trans_arr);
    
    return $string_trans;
}