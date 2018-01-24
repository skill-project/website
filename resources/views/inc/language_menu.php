<?php

    $languageCodes = new \Model\LanguageCode();
    $allCodes = $languageCodes->getAllCodes("array", true);

    if(!empty($GLOBALS['routing'])){
        $action = $GLOBALS['routing']['currentAction'];
        $params = $GLOBALS['routing']['currentParams'];

        ksort($allCodes);

        echo '<li id="lang-nav" class="last open">';
        echo '<img src="/img/lang-menu-flag.png" />';
        echo '<span id="lang-title">' . _("Language") . '</span>';
        echo '<img src="/img/lang-menu-arrow-down.png" />';
        echo '<ul>';
        foreach($allCodes as $code => $langInfo){
            $params['lang'] = $code;
            echo '<li><a href="'.\Controller\Router::url("switchLanguage", array("code" => $code)) . 
                                    "?redirectTo=".urlencode(\Controller\Router::url($action, $params)).'" 
                    title="'.$langInfo['nativeName'].'">' . $langInfo['nativeName'] . '</a></li>';
        }
        echo '</li></ul>';
    }