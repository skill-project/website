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
        'goTo',
        new Route('/skill/{slug}', 
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
        'addSkillSubPanel',
        new Route('/panel/add-skill-sub-panel/{uuid}/', 
            array('controller' => 'Panel', 'action' => 'addSkillSubPanel'))
    );
    
    $routes->add(
        'renameSkillSubPanel',
        new Route('/panel/rename-skill-sub-panel/{uuid}/', 
            array('controller' => 'Panel', 'action' => 'renameSkillSubPanel'))
    );
 
    $routes->add(
        'translateSkillSubPanel',
        new Route('/panel/translate-skill-sub-panel/{uuid}/', 
            array('controller' => 'Panel', 'action' => 'translateSkillSubPanel'))
    );   

    $routes->add(
        'deleteSkillSubPanel',
        new Route('/panel/delete-skill-sub-panel/{uuid}/', 
            array('controller' => 'Panel', 'action' => 'deleteSkillSubPanel'))
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
        'searchNode',
        new Route('/api/searchNode/{keywords}/',
            array('controller' => 'Api', 'action' => 'searchNode'))
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
        'translateSkill',
        new Route('/api/translateSkill/{uuid}/', 
            array('controller' => 'Api', 'action' => 'translateSkill'))
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