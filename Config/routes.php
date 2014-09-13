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
        'debug',
        new Route('/debug/', 
            array('controller' => 'Main', 'action' => 'debug'))
    );

//panel
    $routes->add(
        'addSkillSubPanel',
        new Route('/panel/add-skill-sub-panel/', 
            array('controller' => 'Panel', 'action' => 'addSkillSubPanel'))
    );
    
    $routes->add(
        'renameSkillSubPanel',
        new Route('/panel/rename-skill-sub-panel/{id}/', 
            array('controller' => 'Panel', 'action' => 'renameSkillSubPanel'))
    );
 
    $routes->add(
        'translateSkillSubPanel',
        new Route('/panel/translate-skill-sub-panel/{id}/', 
            array('controller' => 'Panel', 'action' => 'translateSkillSubPanel'))
    );   

    $routes->add(
        'deleteSkillSubPanel',
        new Route('/panel/delete-skill-sub-panel/{id}/', 
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
        'test',
        new Route('/api/test/{id}/', 
            array('controller' => 'Api', 'action' => 'test'))
    );

    $routes->add(
        'getNode',
        new Route('/api/getNode/{id}/', 
            array('controller' => 'Api', 'action' => 'getNode'))
    );

    $routes->add(
        'searchNode',
        new Route('/api/searchNode/{keywords}/',
            array('controller' => 'Api', 'action' => 'searchNode'))
    );

    //getNodeParent
    $routes->add(
        'getNodeParent',
        new Route('/api/getNodeParent/{id}/', 
            array('controller' => 'Api', 'action' => 'getNodeParent'))
    );

    $routes->add(
        'getRootNode',
        new Route('/api/getRootNode/', 
            array('controller' => 'Api', 'action' => 'getRootNode'))
    );

    $routes->add(
        'getNodeChildren',
        new Route('/api/getNodeChildren/{id}/', 
            array('controller' => 'Api', 'action' => 'getNodeChildren'))
    );

    $routes->add(
        'deleteSkill',
        new Route('/api/deleteSkill/{id}/', 
            array('controller' => 'Api', 'action' => 'deleteSkill'))
    );

    $routes->add(
        'renameSkill',
        new Route('/api/renameSkill/{id}/', 
            array('controller' => 'Api', 'action' => 'renameSkill'))
    );

    $routes->add(
        'translateSkill',
        new Route('/api/translateSkill/{id}/', 
            array('controller' => 'Api', 'action' => 'translateSkill'))
    );

    $routes->add(
        'dummyData',
        new Route('/api/dummyData/', 
            array('controller' => 'Api', 'action' => 'dummyData'))
    );

    $routes->add(
        'addSkill',
        new Route('/add-skill/', 
            array('controller' => 'Api', 'action' => 'addSkill'))
    );   