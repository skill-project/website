<?php 

    echo $skill->getName() . " (". $skill->getUuid() .") " . _(" has been $type.") . '<br /><br />';

    foreach($data as $key => $value){
        echo "<br /><b>$key:</b> $value";
    }

    $skillUrl = \Controller\Router::url('goTo', array("slug" => $skill->getSlug()), true);
    echo '<br /><b>link:</b> <a style="color: #14AFB7;" href="'.$skillUrl.'">'.$skillUrl.'</a>';

    if ($user = \Utils\SecurityHelper::getUser($request)){
        echo "<br /><br /><b>User:</b> " . $user->getUsername();
    }

    echo "<br /><b>Date:</b> " . date("Y-m-d H:i:s");