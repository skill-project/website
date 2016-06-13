<?php

    use Symfony\Component\Routing\Route;
    use \Config\Config;

    $routes = new Symfony\Component\Routing\RouteCollection();

//common

    $routes->add(
        'generateDump',
        new Route('/export/', 
            array('controller' => 'Dump', 'action' => 'generateDump'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );

    $routes->add(
        'home',
        new Route('/', 
            array('controller' => 'Main', 'action' => 'home'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );

    //fr route
    $routes->add(
        'graph_fr',
        new Route('/competences/', 
            array('controller' => 'Main', 'action' => 'graph'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );

    $routes->add(
        'graph',
        new Route('/skills/', 
            array('controller' => 'Main', 'action' => 'graph'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );


    
    $routes->add(
        'project_fr',
        new Route('/le-projet/', 
            array('controller' => 'Main', 'action' => 'project'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );
    
    $routes->add(
        'project',
        new Route('/the-project/', 
            array('controller' => 'Main', 'action' => 'project'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );

    $routes->add(
        'legal',
        new Route('/legal/', 
            array('controller' => 'Main', 'action' => 'legal'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );


    $routes->add(
        'goTo_fr',
        new Route('/competence/{slug}/', 
            array('controller' => 'Main', 'action' => 'goTo'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );

    $routes->add(
        'goTo',
        new Route('/skill/{slug}/', 
            array('controller' => 'Main', 'action' => 'goTo'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );

    $routes->add(
        'debug',
        new Route('/debug/', 
            array('controller' => 'Main', 'action' => 'debug'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );

    $routes->add(
        'contact',
        new Route('/contact/', 
            array('controller' => 'Main', 'action' => 'contact'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );

//panel

    $routes->add(
        'getPanel',
        new Route('/panel/getPanel/{uuid}/', 
            array('controller' => 'Panel', 'action' => 'getPanel'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );
    
    $routes->add(
        'reloadTranslations',
        new Route('/panel/reloadTranslations/{uuid}/', 
            array('controller' => 'Panel', 'action' => 'reloadTranslations'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );
    
    $routes->add(
        'reloadDiscussionMessages',
        new Route('/panel/reloadDiscussionMessages/{uuid}/', 
            array('controller' => 'Panel', 'action' => 'reloadDiscussionMessages'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );




//user
    $routes->add(
        'register',
        new Route('/register/', 
            array('controller' => 'User', 'action' => 'register'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );

    $routes->add(
        'login',
        new Route('/login/', 
            array('controller' => 'User', 'action' => 'login'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );

    $routes->add(
        'logout',
        new Route('/logout/', 
            array('controller' => 'User', 'action' => 'logout'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );


    $routes->add(
        'viewProfile_fr',
        new Route('/profil/{username}/',
            array('controller' => 'User', 'action' => 'viewProfile'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );

    $routes->add(
        'viewProfile',
        new Route('/profile/{username}/',
            array('controller' => 'User', 'action' => 'viewProfile'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );


    $routes->add(
        'profile_fr',
        new Route('/profil/{username}/edit/',
            array('controller' => 'User', 'action' => 'profile'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );

    $routes->add(
        'profile',
        new Route('/profile/{username}/edit/',
            array('controller' => 'User', 'action' => 'profile'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );

    $routes->add(
        'profileWithPassword',
        new Route('/profile/{username}/edit/edit-password/',
            array('controller' => 'User', 'action' => 'profileWithPassword'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );

    $routes->add(
        'emailConfirmation',
        new Route('/confirm/{email}/{token}/',
            array('controller' => 'User', 'action' => 'emailConfirmation'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );

    $routes->add(
        'forgotPassword1',
        new Route('/forgot-password-1/',
            array('controller' => 'User', 'action' => 'forgotPassword1'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );
    
    $routes->add(
        'forgotPassword2',
        new Route('/forgot-password-recovery/{email}/{token}/',
            array('controller' => 'User', 'action' => 'forgotPassword2'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );

    

    $routes->add(
        'changePassword',
        new Route('/change-password/',
            array('controller' => 'User', 'action' => 'changePassword'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );
    

    $routes->add(
        'apply_fr',
        new Route('/devenir-editeur/', 
            array('controller' => 'User', 'action' => 'apply'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );


    $routes->add(
        'apply',
        new Route('/apply/', 
            array('controller' => 'User', 'action' => 'apply'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );


    $routes->add(
        'deleteAccount',
        new Route('/delete-account/{csrfToken}/', 
            array('controller' => 'User', 'action' => 'deleteAccount'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );

    $routes->add(
        'deletePicture',
        new Route('/delete-picture/', 
            array('controller' => 'User', 'action' => 'deletePicture'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );

    
    $routes->add(
        'switchLanguage',
        new Route('/switch-lang/{code}/', 
            array('controller' => 'User', 'action' => 'switchLanguage'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );

    /* for Vanilla Forum authentication */    
    $routes->add(
        'jsConnect',
        new Route('/community-connect/', 
            array('controller' => 'User', 'action' => 'jsConnectVanilla'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );

//api

    $routes->add(
        'getNode',
        new Route('/api/getNode/{uuid}/', 
            array('controller' => 'Api', 'action' => 'getNode'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );


    $routes->add(
        'getNodePathToRoot',
        new Route('/api/getNodePathToRoot/{slug}/', 
            array('controller' => 'Api', 'action' => 'getNodePathToRoot'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );


    $routes->add(
        'skillSearch',
        new Route('/api/skillSearch/',
            array('controller' => 'Api', 'action' => 'skillSearch'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );

    //getNodeParent
    $routes->add(
        'getNodeParent',
        new Route('/api/getNodeParent/{uuid}/', 
            array('controller' => 'Api', 'action' => 'getNodeParent'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );

    $routes->add(
        'getRootNode',
        new Route('/api/getRootNode/', 
            array('controller' => 'Api', 'action' => 'getRootNode'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );

    $routes->add(
        'getNodeChildren',
        new Route('/api/getNodeChildren/{uuid}/', 
            array('controller' => 'Api', 'action' => 'getNodeChildren'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );

    $routes->add(
        'deleteSkill',
        new Route('/api/deleteSkill/', 
            array('controller' => 'Api', 'action' => 'deleteSkill'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );

    $routes->add(
        'renameSkill',
        new Route('/api/renameSkill/', 
            array('controller' => 'Api', 'action' => 'renameSkill'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );


    $routes->add(
        'skillSettings',
        new Route('/api/skillSettings/', 
            array('controller' => 'Api', 'action' => 'skillSettings'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );

    $routes->add(
        'moveSkill',
        new Route('/api/moveSkill/', 
            array('controller' => 'Api', 'action' => 'moveSkill'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );
    
    $routes->add(
        'translateSkill',
        new Route('/api/translateSkill/', 
            array('controller' => 'Api', 'action' => 'translateSkill'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );
    
    $routes->add(
        'discussSkill',
        new Route('/api/discussSkill/', 
            array('controller' => 'Api', 'action' => 'discussSkill'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );

    $routes->add(
        'addSkill',
        new Route('/add-skill/', 
            array('controller' => 'Api', 'action' => 'addSkill'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );

    $routes->add(
        'skillHistory',
        new Route('/skill-history/', 
            array('controller' => 'Api', 'action' => 'skillHistory'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );

    
    $routes->add(
        'userNotifications',
        new Route('/notifications/', 
            array('controller' => 'Api', 'action' => 'userNotifications'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );

//Back-office

    $routes->add(
        'stats',
        new Route('/admin/stats/', 
            array('controller' => 'Admin', 'action' => 'stats'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );

    $routes->add(
        'setAsEditor',
        new Route('/admin/set-as-editor/{uuid}/', 
            array('controller' => 'Admin', 'action' => 'setAsEditor'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );


    $routes->add(
        'deactivateAccount',
        new Route('/admin/deactivate-account/{uuid}/', 
            array('controller' => 'Admin', 'action' => 'deactivateAccount'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );

    $routes->add(
        'latestChanges',
        new Route('/admin/latest-changes/', 
            array('controller' => 'Admin', 'action' => 'latestChanges'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );

    $routes->add(
        'powerEdit',
        new Route('/admin/power-edit/', 
            array('controller' => 'Admin', 'action' => 'powerEdit'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );

    $routes->add(
        'runQuery',
        new Route('/admin/run-query/awjfkw9f2eeewq2qqjjr32329r0/', 
            array('controller' => 'Admin', 'action' => 'runQuery'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );

//Editor Dashboard
    $routes->add(
        'editorDashboard',
        new Route('/editor/', 
            array('controller' => 'Editor', 'action' => 'editorDashboard'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );

    //ajax routes for tabs
    $routes->add(
        'editorDashboardOversizedSkills',
        new Route('/editor/oversized-skills/', 
            array('controller' => 'Editor', 'action' => 'oversizedSkillsTab'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );

    $routes->add(
        'editorDashboardRecentDiscussions',
        new Route('/editor/recent-discussions/', 
            array('controller' => 'Editor', 'action' => 'recentDiscussionsTab'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );

    $routes->add(
        'editorDashboardRecentActivities',
        new Route('/editor/recent-activities/', 
            array('controller' => 'Editor', 'action' => 'recentActivitiesTab'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );


//Fixtures

    $routes->add(
        'dummyData',
        new Route('/dummyData/', 
            array('controller' => 'Fixture', 'action' => 'dummyData'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );   

    $routes->add(
        'benchmark',
        new Route('/benchmark/', 
            array('controller' => 'Fixture', 'action' => 'benchmark'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );  

    $routes->add(
        'emptyDatabase',
        new Route('/emptyDatabase/awjfkw9f232cxCVCvxvr09f3j09qjg0qg3gj02gjGsdjvsvjgjqqjjr32329r0/', 
            array('controller' => 'Fixture', 'action' => 'emptyDatabase'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );  

    $routes->add(
        'test',
        new Route('/test/awjfkw9f232cxCVCvxvr09f3j09qjg0qg3gj02gjGsdjvsvjgjeeewq2qqjjr32329r0/', 
            array('controller' => 'Fixture', 'action' => 'test'), array(), array(), 
            '{lang}.'.Config::DOMAIN
        )
    );  

//JS generation
    $routes->add(
        'jsTranslations',
        new Route('/scripts/js-translations.js',
            array('controller' => 'Api', 'action' => 'getJSTranslations'), array(), array(),
            '{lang}.'.Config::DOMAIN
        )
    );