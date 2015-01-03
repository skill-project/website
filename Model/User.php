<?php

	namespace Model;

	use \Everyman\Neo4j\Node;
	use \Utils\SecurityHelper as SH;

	class User extends Entity {
	
		protected $username;
		protected $email;
		protected $password;
		protected $role;		//user or admin
		protected $salt;
		protected $token;
		protected $country;
		protected $languages;
		protected $picture;
		protected $bio;
		protected $interests;
		protected $ipAtRegistration;
		protected $emailValidated;
		protected $applicationStatus; //0 for no application, 1 for accepted, 2 for in process
		protected $dateCreated;
		protected $dateModified;
		protected $siteLanguage;
		protected $active;			//false for deleted account, true otherwise
		protected $notificationSettings;

		protected $node;

		public function __construct(){
		    parent::__construct();

		    //Setting default settings
		    $this->setNotificationSettings(array(
		    	"add-child" => array(
		    		"owner"		=> true,
		    		"discussed"	=> true
		    	)
		    ));
		}

		/**
		 * Hydrate all object properties from the node
		 */
		public function hydrateFromNode(){

			$props = $this->node->getProperties();

			foreach($props as $prop => $value){
				$methodName = "set" . ucfirst($prop);
				if (method_exists($this, $methodName)){

					switch ($prop) {
						case "notificationSettings":
							$value = unserialize($value);
							break;
						default:
							//Do nothing
							break;
					}

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
			$this->node->setProperty("emailValidated", $this->emailValidated);
			$this->node->setProperty("applicationStatus", $this->applicationStatus);
			$this->node->setProperty("role", $this->role);
			$this->node->setProperty("languages", $this->languages);
			$this->node->setProperty("interests", $this->interests);
			$this->node->setProperty("picture", $this->picture);
			$this->node->setProperty("country", $this->country);
			$this->node->setProperty("password", $this->password);
			$this->node->setProperty("salt", $this->salt);
			$this->node->setProperty("token", $this->token);
			$this->node->setProperty("ipAtRegistration", $this->ipAtRegistration);
			$this->node->setProperty("dateCreated", $this->dateCreated);
			$this->node->setProperty("dateModified", $this->dateModified);
			$this->node->setProperty("siteLanguage", $this->siteLanguage);
			$this->node->setProperty("active", $this->active);
			
			return $this->node;
		}

		public function getNode(){
			if (!$this->node){
				$this->generateNode();
			}
			return $this->node;
		}

		public function isAdmin(){
			return ($this->getRole() == "admin" || $this->getRole() == "superadmin");
		}

		public function isActive(){
			return $this->getActive();
		}

		public function getUsername(){
			return $this->username;
		}

		public function setUsername($username){
			$this->username = SH::safe($username);
		}

		public function getEmail(){
			return $this->email;
		}

		public function setEmail($email){
			$this->email = SH::safe($email);
		}


		public function getEmailValidated(){
			return $this->emailValidated;
		}

		public function setEmailValidated($emailValidated){
			$this->emailValidated = $emailValidated;
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
			return $this->backwardCompDate($this->dateCreated);
		}

		public function setDateCreated($dateCreated){
			$this->dateCreated = $this->backwardCompDate($dateCreated);
		}

		public function getDateModified(){
			return $this->backwardCompDate($this->dateModified);
		}

		public function setDateModified($dateModified){
			$this->dateModified = $this->backwardCompDate($dateModified);
		}

		//could be removed with fresh data
		private function backwardCompDate($date){
			return $date;
			/*if (preg_match("#^\d*$#", $date)){
				return $date;
			}
			return strtotime($date); */
		}
		
	    /**
	     * Gets the value of role.
	     *
	     * @return mixed
	     */
	    public function getRole($displayValue = false)
	    {
	    	$displayValues = array(
	    		"user" 			=> _("User"),
	    		"admin"			=> _("Editor"),
	    		"superadmin"	=> _("Super Admin")
	    	);

	    	if ($displayValue == false) return $this->role;
	    	else return $displayValues[$this->role];
	    }

	    /**
	     * Sets the value of role.
	     *
	     * @param mixed $role the role
	     *
	     * @return self
	     */
	    public function setRole($role)
	    {
	        $this->role = $role;

	        return $this;
	    }
		
	    /**
	     * Gets the value of country.
	     *
	     * @return mixed
	     */
	    public function getCountry()
	    {
	        return $this->country;
	    }

	    /**
	     * Sets the value of country.
	     *
	     * @param mixed $country the country
	     *
	     * @return self
	     */
	    public function setCountry($country)
	    {
	        $this->country = SH::safe($country);

	        return $this;
	    }

	    /**
	     * Gets the value of languages.
	     *
	     * @return mixed
	     */
	    public function getLanguages()
	    {
	        return $this->languages;
	    }

	    /**
	     * Sets the value of languages.
	     *
	     * @param mixed $languages the languages
	     *
	     * @return self
	     */
	    public function setLanguages($languages)
	    {
	        $this->languages = SH::safe($languages);

	        return $this;
	    }

	    /**
	     * Gets the value of picture.
	     *
	     * @return mixed
	     */
	    public function getPicture()
	    {
	        return $this->picture;
	    }

	    /**
	     * Sets the value of picture.
	     *
	     * @param mixed $picture the picture
	     *
	     * @return self
	     */
	    public function setPicture($picture)
	    {
	        $this->picture = SH::safe($picture);

	        return $this;
	    }

	    /**
	     * Gets the value of interests.
	     *
	     * @return mixed
	     */
	    public function getInterests()
	    {
	        return $this->interests;
	    }

	    /**
	     * Sets the value of interests.
	     *
	     * @param mixed $interests the interests
	     *
	     * @return self
	     */
	    public function setInterests($interests)
	    {
	        $this->interests = SH::safe($interests);

	        return $this;
	    }
	
	    /**
	     * Gets the value of bio.
	     *
	     * @return mixed
	     */
	    public function getBio()
	    {
	        return $this->bio;
	    }

	    /**
	     * Sets the value of bio.
	     *
	     * @param mixed $bio the bio
	     *
	     * @return self
	     */
	    public function setBio($bio)
	    {
	        $this->bio = SH::safe($bio);

	        return $this;
	    }
	
	    /**
	     * Gets the value of applicationStatus.
	     *
	     * @return mixed
	     */
	    public function getApplicationStatus()
	    {
	        return $this->applicationStatus;
	    }

	    /**
	     * Sets the value of applicationStatus.
	     *
	     * @param mixed $applicationStatus the application status
	     *
	     * @return self
	     */
	    public function setApplicationStatus($applicationStatus)
	    {
	        $this->applicationStatus = $applicationStatus;

	        return $this;
	    }

	    /**
	     * Gets the value of siteLanguage (the website language the user registered with).
	     *
	     * @return mixed
	     */
	    public function getSiteLanguage()
	    {
	        return $this->siteLanguage;
	    }

	    /**
	     * Sets the value of siteLanguage (the website language the user registered with).
	     *
	     * @param mixed $siteLanguage (the website language the user registered with) the application status
	     *
	     * @return self
	     */
	    public function setSiteLanguage($siteLanguage)
	    {
	        $this->siteLanguage = $siteLanguage;

	        return $this;
	    }


	    /**
	     * Gets the value of active (account deleted or not).
	     *
	     * @return boolean
	     */
	    public function getActive()
	    {
	        return $this->active;
	    }

	    /**
	     * Sets the value of active (account deleted or not).
	     *
	     * @param boolean $active true if active, false if deleted
	     *
	     * @return self
	     */
	    public function setActive($active)
	    {
	        $this->active = $active;

	        return $this;
	    }

	    private function setNotificationSettings(array $settings) {
	    	$this->notificationSettings = serialize($settings);

	    	return $this;
	    }

	    public function getNotificationSettings($asArray = true) {
	    	if (!$asArray){
	    		return $this->notificationSettings;
	    	}
	    	return unserialize($this->notificationSettings);
	    }

	    //will return false if the setting is not defined on the user
	    public function wantsEmailNotification($setting, $reason) {
	    	$userSettings = $this->getNotificationSettings();
	    	
	    	//the setting exist for this user ?
	    	if (array_key_exists($setting, $userSettings)){
	    		//the reason is set on this setting ?
	    		if (array_key_exists($reason, $userSettings[$setting])){
	    			//return the value
	    			return $userSettings[$setting][$reason];
	    		}
	    	}

	    	return false;
	    }
	}
