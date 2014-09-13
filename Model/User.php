<?php

	namespace Model;

	use \Everyman\Neo4j\Node;

	class User extends Entity {
	
		protected $username;
		protected $email;
		protected $password;
		protected $salt;
		protected $token;
		protected $ipAtRegistration;
		protected $dateCreated;
		protected $dateModified;

		protected $node;

		/**
		 * Hydrate all object properties from the node
		 */
		public function hydrateFromNode(){

			$props = $this->node->getProperties();

			foreach($props as $prop => $value){
				$methodName = "set" . ucfirst($prop);
				if (method_exists($this, $methodName)){
					$this->$methodName($value);
				}
			}

			$this->setId( $this->node->getId() );

			return $this;
		}

		/**
		 * Set the node for an (empty) user obj
		 */
		public function setNode(Node $node){
			$this->node = $node;
		}

		/**
		 * Sets all node properties from the object
		 */
		public function generateNode(){
			$this->node = $this->client->makeNode();
			
			$this->node->setProperty("uuid", $this->uuid);
			$this->node->setProperty("username", $this->username);
			$this->node->setProperty("email", $this->email);
			$this->node->setProperty("password", $this->password);
			$this->node->setProperty("salt", $this->salt);
			$this->node->setProperty("token", $this->token);
			$this->node->setProperty("ipAtRegistration", $this->ipAtRegistration);
			$this->node->setProperty("dateCreated", $this->dateCreated);
			$this->node->setProperty("dateModified", $this->dateModified);
			
			return $this->node;
		}

		public function getNode(){
			if (!$this->node){
				$this->generateNode();
			}
			return $this->node;
		}

		public function getUsername(){
			return $this->username;
		}

		public function setUsername($username){
			$this->username = $username;
		}

		public function getEmail(){
			return $this->email;
		}

		public function setEmail($email){
			$this->email = $email;
		}

		public function getPassword(){
			return $this->password;
		}

		public function setPassword($password){
			$this->password = $password;
		}

		public function getSalt(){
			return $this->salt;
		}

		public function setSalt($salt){
			$this->salt = $salt;
		}

		public function getToken(){
			return $this->token;
		}

		public function setToken($token){
			$this->token = $token;
		}

		public function getIpAtRegistration(){
			return $this->ipAtRegistration;
		}

		public function setIpAtRegistration($ipAtRegistration){
			$this->ipAtRegistration = $ipAtRegistration;
		}

		public function getDateCreated(){
			return $this->dateCreated;
		}

		public function setDateCreated($dateCreated){
			$this->dateCreated = $dateCreated;
		}

		public function getDateModified(){
			return $this->dateModified;
		}

		public function setDateModified($dateModified){
			$this->dateModified = $dateModified;
		}
	}
