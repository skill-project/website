<?php

    $languageCodes = new \Model\LanguageCode();
    $allCodes = $languageCodes->getAllCodes();

    $action = $GLOBALS['routing']['currentAction'];
    $params = $GLOBALS['routing']['currentParams'];

    ksort($allCodes);

    echo '<li id="lang-nav" class="last">';
    echo _("Language");
    echo '<ul>';
    foreach($allCodes as $code => $langInfo){
        $params['lang'] = $code;
        echo '<li><a href="'.\Controller\Router::url($action, $params).'" 
                title="'.$langInfo['nativeName'].'">' . $langInfo['nativeName'] . '</a></li>';
    }
    echo '</li></ul>';