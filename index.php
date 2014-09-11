<?php

    //autoloading classes
    spl_autoload_register();
    require_once("vendor/autoload.php");

    //go
    $app = new Controller\App();
    $app->run();