<?php

    //autoloading classes
    spl_autoload_register(function($c){@include "../" . preg_replace('#\\\|_(?!.+\\\)#','/',$c).'.php';});
    require_once("../vendor/autoload.php");

    //go
    $app = new \Controller\App();
    $app->run();