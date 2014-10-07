<?php
    
    namespace Controller;

    use \Model\SkillManager;
    use \Model\TranslationManager;
    use \Model\Skill;
    use \Model\User;
    use \Utils\SecurityHelper;
    use \Cocur\Slugify\Slugify;

    use \Everyman\Neo4j\Cypher\Query;
    use \Everyman\Neo4j\Relationship;
    use \Everyman\Neo4j\Traversal;

    class FixtureController extends Controller {
/*
        private $users = array();

        public function benchmarkAction(){
            if (!\Config\Config::DEBUG){
                return false;
                die();
                exit();
                return "mauvaiseIdee";
            }
            $num = 10;
            $skillManager = new SkillManager();
            $slugify = new Slugify();

            $time_start = microtime(true); 

            for($i=0;$i<50;$i++){
                ini_set("max_execution_time", 30);
                $skillManager->updateAllDepths2();
            }

            echo "<br />" . (microtime(true) - $time_start) . "<br />";

            echo "<br />done";
        }

        public function dummyDataAction(){
            if (!\Config\Config::DEBUG){
                return false;
                die();
                exit();
                return "mauvaiseIdee";
            }
            $time_start = microtime(true); 
            echo "inserting dummy data";

            $skillManager = new SkillManager();

            $searchIndex = new \Everyman\Neo4j\Index\NodeIndex($this->client, 'searches');
            $searchIndex->delete();

            //delete all
            $query = new Query($this->client, "MATCH (n:Skill) OPTIONAL MATCH (n)-[r]-() DELETE n,r");
            $resultSet = $query->getResultSet();

            echo "<br />after delete " . (microtime(true) - $time_start) . "<br />";

            //dummy user
            $this->addDummyUser("admin", "admin");
            $this->addDummyUser("user", "user");
            $this->addDummyUser("pouf");

            echo "<br />after user " . (microtime(true) - $time_start) . "<br />";

            //create root node
            $rootSkill = new Skill();
            $rootSkill->setNewUuid();
            $rootSkill->setName("Skills");
            $rootSkill->setDepth(0);
            
            $cyp = "CREATE (skill:Skill {
                        uuid: {skillUuid},
                        name: {name},
                        slug: {slug},
                        depth: {depth},
                        created: {now},
                        modified: {now}
                    })";
            $query = new Query($this->client, $cyp, array(
                    "skillUuid" => $rootSkill->getUuid(),
                    "name" => $rootSkill->getName(),
                    "slug" => $rootSkill->getSlug(),
                    "depth" => $rootSkill->getDepth(), 
                    "now" => time()     
                )
            );
            $query->getResultSet();
            
            //top children
            $topChildren = array("Sciences", "Sports", "Arts", "Technologies", "Social Sciences", "Technicals");

            //for each top children, create it, then add children
            foreach($topChildren as $topChild){

                ini_set("max_execution_time", 30);

                $firstChild = new Skill();
                $firstChild->setNewUuid();
                $firstChild->setName( $topChild );
                $firstChild->setDepth(1);

                $firstChild->generateNode();

                $skillManager->save( $firstChild, $rootSkill->getUuid(), $this->users[array_rand($this->users)]->getUuid() );
            }

            echo "<br />after depth 1 " . (microtime(true) - $time_start) . "<br />";

            $depth = 10;
            $minNumChild = 1;
            $maxNumChild = 5;

            for($i=2;$i<=$depth;$i++){
                $this->addDummyChildAtDepth($i, $minNumChild, $maxNumChild);
                echo "<br /> after depth $i " . (microtime(true) - $time_start) . "<br />";
            }

            echo "<br />done";
            echo "<br />" . (microtime(true) - $time_start) . "<br />";
        }


        public function emptyDatabaseAction(){
            if (!\Config\Config::DEBUG){
                return false;
                die();
                exit();
                return "mauvaiseIdee";
            }
            $searchIndex = new \Everyman\Neo4j\Index\NodeIndex($this->client, 'searches');
            $searchIndex->delete();

            //delete all
            $query = new Query($this->client, "MATCH (n) OPTIONAL MATCH (n)-[r]-() DELETE n,r");
            $resultSet = $query->getResultSet();

            $superadmins = $this->addSuperAdmins();

            $skillManager = new SkillManager();
            //create root node
            $rootSkill = new Skill();
            $rootSkill->setNewUuid();
            $rootSkill->setName("Skills");
            $rootSkill->setDepth(0);
            
            $cyp = "CREATE (skill:Skill {
                        uuid: {skillUuid},
                        name: {name},
                        slug: {slug},
                        depth: {depth},
                        created: {now},
                        modified: {now}
                    })";
            $query = new Query($this->client, $cyp, array(
                    "skillUuid" => $rootSkill->getUuid(),
                    "name" => $rootSkill->getName(),
                    "slug" => $rootSkill->getSlug(),
                    "depth" => $rootSkill->getDepth(), 
                    "now" => time()     
                )
            );
            $query->getResultSet();

            //create first node
            $firstSkill = new Skill();
            $firstSkill->setNewUuid();
            $firstSkill->setName("Sciences");
            $firstSkill->setDepth($rootSkill->getDepth()+1);
            
            $skillManager->save($firstSkill, $rootSkill->getUuid(), $superadmins[0]->getUuid());

        }



        private function addSuperAdmins(){
            if (!\Config\Config::DEBUG){
                return false;
                die();
                exit();
                return "mauvaiseIdee";
            }
            $userManager = new \Model\UserManager();

            //hydrate user obj
            $securityHelper = new \Utils\SecurityHelper();

            $emails = array("raphael@skill-project.org", "dario@skill-project.org", "guillaume@skill-project.org");

            $superadmins = array();
            foreach($emails as $email){
                $user = new User();
                
                $user->setNewUuid();
                $user->setUsername( explode("@", $email)[0] );
                $user->setEmail( $email );
                $user->setRole( "superadmin" );
                $user->setSalt( $securityHelper->randomString() );
                $user->setToken( $securityHelper->randomString() );

                $hashedPassword = $securityHelper->hashPassword( $email, $user->getSalt() );
                
                $user->setPassword( $hashedPassword );
                $user->setIpAtRegistration( $_SERVER['REMOTE_ADDR'] );
                $user->setDateCreated( time() );
                $user->setDateModified( time() );

                $user->setEmailValidated(1);
                $user->setApplicationStatus(1);

                //save it
                $userManager = new \Model\UserManager();
                $userManager->save($user); 
                $superadmins[] = $user;
            }
            return $superadmins;
        }

        private function addDummyUser($username, $role = "user"){
            if (!\Config\Config::DEBUG){
                return false;
                die();
                exit();
                return "mauvaiseIdee";
            }
            $userManager = new \Model\UserManager();

            //hydrate user obj
            $securityHelper = new \Utils\SecurityHelper();
            $user = new User();
            
            $user->setNewUuid();
            $user->setUsername( $username );
            $user->setEmail( $username."@gmail.com" );
            $user->setRole( $role );
            $user->setSalt( $securityHelper->randomString() );
            $user->setToken( $securityHelper->randomString() );

            $hashedPassword = $securityHelper->hashPassword( $username.$username, $user->getSalt() );
            
            $user->setPassword( $hashedPassword );
            $user->setIpAtRegistration( $_SERVER['REMOTE_ADDR'] );
            $user->setDateCreated( date("Y-m-d H:i:s") );
            $user->setDateModified( date("Y-m-d H:i:s") );

            //save it
            $userManager = new \Model\UserManager();
            $userManager->save($user); 

            array_push($this->users, $user);

            return $user;
        }

        private function addDummyChildAtDepth($depth, $minNumChild, $maxNumChild){
            if (!\Config\Config::DEBUG){
                return false;
                die();
                exit();
                return "mauvaiseIdee";
            }
            $maxCharactersInSkillName = 45;


            //get parents at higher level
            $skillManager = new SkillManager();
            $resultSet = $skillManager->findAtDepth($depth - 1);

            //for each top children, create it, then add children
            $n = 0;
            foreach($resultSet as $parentRow){
                $sk = new Skill($parentRow['s']);

                if ($n == 0){
                    $minNumChild = 5;
                    $maxNumChild = 5;
                }
                else {
                    $minNumChild = 1;
                    $maxNumChild = 1;
                }
                $numChildren = mt_rand($minNumChild,$maxNumChild);
                ini_set("max_execution_time", 30);

                for($i=0;$i<$numChildren;$i++){
                    $s = new Skill();
                    $s->setNewUuid();
                    $s->setName( $this->dummyText(mt_rand(5,$maxCharactersInSkillName)) );
                    $s->setDepth($depth);

                    $s->generateNode();
                    $skillManager->save( $s, $sk->getUuid(), $this->users[array_rand($this->users)]->getUuid() );
                }

                $n++;
            }
        }

        private function dummyText($minLength = 5, $maxLength = 45){
            $string = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Sed lectus. Donec mollis hendrerit risus. Phasellus nec sem in justo pellentesque facilisis. Etiam imperdiet imperdiet orci. Nunc nec neque. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa. Sed cursus turpis vitae tortor. Donec posuere vulputate arcu. Phasellus accumsan cursus velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac";
            $strlen = strlen($string);
            $length = mt_rand($minLength, $maxLength);
            $substr = substr($string, mt_rand(0,($strlen-$length)), $length);
            return $substr;
        }

        public function testAction(){
            if (!\Config\Config::DEBUG){
                return false;
                die();
                exit();
                return "mauvaiseIdee";
            }
        }
*/
    }