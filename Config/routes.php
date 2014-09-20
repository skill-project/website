<?php

    use Symfony\Component\Routing\Route;

    $routes = new Symfony\Component\Routing\RouteCollection();

//common
    $routes->add(
        'home',
        new Route('/', 
            array('controller' => 'Main', 'action' => 'home'))
    );

    $routes->add(
        'skillwalk',
        new Route('/skillwalk/', 
            array('controller' => 'Main', 'action' => 'home'))
    );

    $routes->add(
        'project',
        new Route('/the-project/', 
            array('controller' => 'Main', 'action' => 'project'))
    );

    $routes->add(
        'legal',
        new Route('/legal/', 
            array('controller' => 'Main', 'action' => 'legal'))
    );

    $routes->add(
        'goTo',
        new Route('/skill/{slug}/', 
            array('controller' => 'Main', 'action' => 'goTo'))
    );

    $routes->add(
        'debug',
        new Route('/debug/', 
            array('controller' => 'Main', 'action' => 'debug'))
    );

//panel

    $routes->add(
        'getPanel',
        new Route('/panel/getPanel/{uuid}/', 
            array('controller' => 'Panel', 'action' => 'getPanel'))
    );
    
    $routes->add(
        'reloadTranslations',
        new Route('/panel/reloadTranslations/{uuid}/', 
            array('controller' => 'Panel', 'action' => 'reloadTranslations'))
    );
    
    $routes->add(
        'reloadDiscussionMessages',
        new Route('/panel/reloadDiscussionMessages/{uuid}/', 
            array('controller' => 'Panel', 'action' => 'reloadDiscussionMessages'))
    );




//user
    $routes->add(
        'register',
        new Route('/register/', 
            array('controller' => 'User', 'action' => 'register'))
    );

    $routes->add(
        'login',
        new Route('/login/', 
            array('controller' => 'User', 'action' => 'login'))
    );

    $routes->add(
        'logout',
        new Route('/logout/', 
            array('controller' => 'User', 'action' => 'logout'))
    );

    $routes->add(
        'profile',
        new Route('/profile/{username}/',
            array('controller' => 'User', 'action' => 'profile'))
    );

    $routes->add(
        'profileWithPassword',
        new Route('/profile/{username}/edit-password/',
            array('controller' => 'User', 'action' => 'profileWithPassword'))
    );

    $routes->add(
        'emailConfirmation',
        new Route('/confirm/{email}/{token}/',
            array('controller' => 'User', 'action' => 'emailConfirmation'))
    );

    $routes->add(
        'forgotPassword1',
        new Route('/forgot-password-1/',
            array('controller' => 'User', 'action' => 'forgotPassword1'))
    );
    
    $routes->add(
        'forgotPassword2',
        new Route('/forgot-password-recovery/{email}/{token}/',
            array('controller' => 'User', 'action' => 'forgotPassword2'))
    );

    

    $routes->add(
        'changePassword',
        new Route('/change-password/',
            array('controller' => 'User', 'action' => 'changePassword'))
    );
    
    $routes->add(
        'apply',
        new Route('/apply/', 
            array('controller' => 'User', 'action' => 'apply'))
    );

//api

    $routes->add(
        'getNode',
        new Route('/api/getNode/{uuid}/', 
            array('controller' => 'Api', 'action' => 'getNode'))
    );


    $routes->add(
        'getNodePathToRoot',
        new Route('/api/getNodePathToRoot/{slug}/', 
            array('controller' => 'Api', 'action' => 'getNodePathToRoot'))
    );


    $routes->add(
        'skillSearch',
        new Route('/api/skillSearch/',
            array('controller' => 'Api', 'action' => 'skillSearch'))
    );

    //getNodeParent
    $routes->add(
        'getNodeParent',
        new Route('/api/getNodeParent/{uuid}/', 
            array('controller' => 'Api', 'action' => 'getNodeParent'))
    );

    $routes->add(
        'getRootNode',
        new Route('/api/getRootNode/', 
            array('controller' => 'Api', 'action' => 'getRootNode'))
    );

    $routes->add(
        'getNodeChildren',
        new Route('/api/getNodeChildren/{uuid}/', 
            array('controller' => 'Api', 'action' => 'getNodeChildren'))
    );

    $routes->add(
        'deleteSkill',
        new Route('/api/deleteSkill/', 
            array('controller' => 'Api', 'action' => 'deleteSkill'))
    );

    $routes->add(
        'renameSkill',
        new Route('/api/renameSkill/', 
            array('controller' => 'Api', 'action' => 'renameSkill'))
    );

    $routes->add(
        'moveSkill',
        new Route('/api/moveSkill/', 
            array('controller' => 'Api', 'action' => 'moveSkill'))
    );
    
    $routes->add(
        'translateSkill',
        new Route('/api/translateSkill/', 
            array('controller' => 'Api', 'action' => 'translateSkill'))
    );
    
    $routes->add(
        'discussSkill',
        new Route('/api/discussSkill/', 
            array('controller' => 'Api', 'action' => 'discussSkill'))
    );

    $routes->add(
        'addSkill',
        new Route('/add-skill/', 
            array('controller' => 'Api', 'action' => 'addSkill'))
    );



//Fixtures

    $routes->add(
        'dummyData',
        new Route('/dummyData/', 
            array('controller' => 'Fixture', 'action' => 'dummyData'))
    );   

    $routes->add(
        'benchmark',
        new Route('/benchmark/', 
            array('controller' => 'Fixture', 'action' => 'benchmark'))
    );  

    $routes->add(
        'emptyDatabase',
        new Route('/emptyDatabase/', 
            array('controller' => 'Fixture', 'action' => 'emptyDatabase'))
    );  