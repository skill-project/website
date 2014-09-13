<?php
	if (file_exists("/etc/sites/skp/server_vars.php")) include "/etc/sites/skp/server_vars.php";
	else if ( file_exists("c:\\xamp\\htdocs\\skill-project-config\\server_vars.php")) include "c:\\xamp\\htdocs\\skill-project-config\\server_vars.php";

    //autoloading classes
    spl_autoload_register(function($c){@include "../" . preg_replace('#\\\|_(?!.+\\\)#','/',$c).'.php';});
    require_once("../vendor/autoload.php");

    //go
    $app = new \Controller\App();
    $app->run();