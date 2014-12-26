<?php

    namespace Model;

    use \Everyman\Neo4j\Node;
    use \Everyman\Neo4j\Cypher\Query;
    use \Cocur\Slugify\Slugify;
    use \Config\Config;

    //This class should be used when displaying notifications
    class Notification extends Entity {

    	public function __construct($notificationUuid) {
    		parent::__construct();

    		//TODO
    		//hydrate notification from node
    		
    	}


    }

?>