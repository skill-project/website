<?php

    use Symfony\Component\Routing\Route;
    use \Config\Config;

    $routes = new Symfony\Component\Routing\RouteCollection();

//common


    $routes->add(
        'home',
        new Route('/', 
            array('controller' => 'Main', 'action' => 'home'), array(), array(), 
            '{lang}.skill-project.dev'
        )
    );


    $routes->add(
        'graph',
        new Route('/skills/', 
            array('controller' => 'Main', 'action' => 'graph'), array(), array(), 
            '{lang}.skill-project.dev'
        )
    );
    
    $routes->add(
        'project',
        new Route('/the-project/', 
            array('controller' => 'Main', 'action' => 'project'), array(), array(), 
            '{lang}.skill-project.dev'
        )
    );

    $routes->add(
        'legal',
        new Route('/legal/', 
            array('controller' => 'Main', 'action' => 'legal'), array(), array(), 
            '{lang}.skill-project.dev'
        )
    );

    $routes->add(
        'goTo',
        new Route('/skill/{slug}/', 
            array('controller' => 'Main', 'action' => 'goTo'), array(), array(), 
            '{lang}.skill-project.dev'
        )
    );

    $routes->add(
        'debug',
        new Route('/debug/', 
            array('controller' => 'Main', 'action' => 'debug'), array(), array(), 
            '{lang}.skill-project.dev'
        )
    );

//panel

    $routes->add(
        'getPanel',
        new Route('/panel/getPanel/{uuid}/', 
            array('controller' => 'Panel', 'action' => 'getPanel'), array(), array(), 
            '{lang}.skill-project.dev'
        )
    );
    
    $routes->add(
        'reloadTranslations',
        new Route('/panel/reloadTranslations/{uuid}/', 
            array('controller' => 'Panel', 'action' => 'reloadTranslations'), array(), array(), 
            '{lang}.skill-project.dev'
        )
    );
    
    $routes->add(
        'reloadDiscussionMessages',
        new Route('/panel/reloadDiscussionMessages/{uuid}/', 
            array('controller' => 'Panel', 'action' => 'reloadDiscussionMessages'), array(), array(), 
            '{lang}.skill-project.dev'
        )
    );




//user
    $routes->add(
        'register',
        new Route('/register/', 
            array('controller' => 'User', 'action' => 'register'), array(), array(), 
            '{lang}.skill-project.dev'
        )
    );

    $routes->add(
        'login',
        new Route('/login/', 
            array('controller' => 'User', 'action' => 'login'), array(), array(), 
            '{lang}.skill-project.dev'
        )
    );

    $routes->add(
        'logout',
        new Route('/logout/', 
            array('controller' => 'User', 'action' => 'logout'), array(), array(), 
            '{lang}.skill-project.dev'
        )
    );

    $routes->add(
        'profile',
        new Route('/profile/{username}/',
            array('controller' => 'User', 'action' => 'profile'), array(), array(), 
            '{lang}.skill-project.dev'
        )
    );

    $routes->add(
        'profileWithPassword',
        new Route('/profile/{username}/edit-password/',
            array('controller' => 'User', 'action' => 'profileWithPassword'), array(), array(), 
            '{lang}.skill-project.dev'
        )
    );

    $routes->add(
        'emailConfirmation',
        new Route('/confirm/{email}/{token}/',
            array('controller' => 'User', 'action' => 'emailConfirmation'), array(), array(), 
            '{lang}.skill-project.dev'
        )
    );

    $routes->add(
        'forgotPassword1',
        new Route('/forgot-password-1/',
            array('controller' => 'User', 'action' => 'forgotPassword1'), array(), array(), 
            '{lang}.skill-project.dev'
        )
    );
    
    $routes->add(
        'forgotPassword2',
        new Route('/forgot-password-recovery/{email}/{token}/',
            array('controller' => 'User', 'action' => 'forgotPassword2'), array(), array(), 
            '{lang}.skill-project.dev'
        )
    );

    

    $routes->add(
        'changePassword',
        new Route('/change-password/',
            array('controller' => 'User', 'action' => 'changePassword'), array(), array(), 
            '{lang}.skill-project.dev'
        )
    );
    
    $routes->add(
        'apply',
        new Route('/apply/', 
            array('controller' => 'User', 'action' => 'apply'), array(), array(), 
            '{lang}.skill-project.dev'
        )
    );

//api

    $routes->add(
        'getNode',
        new Route('/api/getNode/{uuid}/', 
            array('controller' => 'Api', 'action' => 'getNode'), array(), array(), 
            '{lang}.skill-project.dev'
        )
    );


    $routes->add(
        'getNodePathToRoot',
        new Route('/api/getNodePathToRoot/{slug}/', 
            array('controller' => 'Api', 'action' => 'getNodePathToRoot'), array(), array(), 
            '{lang}.skill-project.dev'
        )
    );


    $routes->add(
        'skillSearch',
        new Route('/api/skillSearch/',
            array('controller' => 'Api', 'action' => 'skillSearch'), array(), array(), 
            '{lang}.skill-project.dev'
        )
    );

    //getNodeParent
    $routes->add(
        'getNodeParent',
        new Route('/api/getNodeParent/{uuid}/', 
            array('controller' => 'Api', 'action' => 'getNodeParent'), array(), array(), 
            '{lang}.skill-project.dev'
        )
    );

    $routes->add(
        'getRootNode',
        new Route('/api/getRootNode/', 
            array('controller' => 'Api', 'action' => 'getRootNode'), array(), array(), 
            '{lang}.skill-project.dev'
        )
    );

    $routes->add(
        'getNodeChildren',
        new Route('/api/getNodeChildren/{uuid}/', 
            array('controller' => 'Api', 'action' => 'getNodeChildren'), array(), array(), 
            '{lang}.skill-project.dev'
        )
    );

    $routes->add(
        'deleteSkill',
        new Route('/api/deleteSkill/', 
            array('controller' => 'Api', 'action' => 'deleteSkill'), array(), array(), 
            '{lang}.skill-project.dev'
        )
    );

    $routes->add(
        'renameSkill',
        new Route('/api/renameSkill/', 
            array('controller' => 'Api', 'action' => 'renameSkill'), array(), array(), 
            '{lang}.skill-project.dev'
        )
    );

    $routes->add(
        'moveSkill',
        new Route('/api/moveSkill/', 
            array('controller' => 'Api', 'action' => 'moveSkill'), array(), array(), 
            '{lang}.skill-project.dev'
        )
    );
    
    $routes->add(
        'translateSkill',
        new Route('/api/translateSkill/', 
            array('controller' => 'Api', 'action' => 'translateSkill'), array(), array(), 
            '{lang}.skill-project.dev'
        )
    );
    
    $routes->add(
        'discussSkill',
        new Route('/api/discussSkill/', 
            array('controller' => 'Api', 'action' => 'discussSkill'), array(), array(), 
            '{lang}.skill-project.dev'
        )
    );

    $routes->add(
        'addSkill',
        new Route('/add-skill/', 
            array('controller' => 'Api', 'action' => 'addSkill'), array(), array(), 
            '{lang}.skill-project.dev'
        )
    );



//Fixtures

    $routes->add(
        'dummyData',
        new Route('/dummyData/', 
            array('controller' => 'Fixture', 'action' => 'dummyData'), array(), array(), 
            '{lang}.skill-project.dev'
        )
    );   

    $routes->add(
        'benchmark',
        new Route('/benchmark/', 
            array('controller' => 'Fixture', 'action' => 'benchmark'), array(), array(), 
            '{lang}.skill-project.dev'
        )
    );  

    $routes->add(
        'emptyDatabase',
        new Route('/emptyDatabase/', 
            array('controller' => 'Fixture', 'action' => 'emptyDatabase'), array(), array(), 
            '{lang}.skill-project.dev'
        )
    );  


