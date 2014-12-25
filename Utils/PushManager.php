<?php
namespace Utils;

use Config\Config;

use Thruway\ClientSession;
use Thruway\Connection;
use Thruway\Logging\Logger;
use Thruway\ClientWampCraAuthenticator;
use Psr\Log\NullLogger;

class PushManager {

    static function pushSkillCount() {

    	Logger::set(new NullLogger());

    	$connection = new Connection(
    	    [
    	        "realm" 	=> 'skp',
    	        "url"   	=> Config::CROSSBAR_WS_URL,
    	        // "authid" 	=> "backend",
    	        // "authmethods"	=> array("wampcra"),
    	        // "onChallenge"	=> function ($session, $method, $extra) { 
    	        // 	$cra = new ClientWampCraAuthenticator("backend", "test123");
    	        // 	return $cra->getAuthenticateFromChallenge($msg)->getSignature();
    	        // }
    	    ]
    	);

    	$statManager = new \Model\StatManager;

    	$skillCount = $statManager->countLabel("Skill");

    	$connection->on('open', function ($session) use ($connection, $skillCount) {
    	        $session->publish('ws.skillCount', [$skillCount]);
    	        $connection->close();
    	    }
    	);

    	$connection->open();

    }
}