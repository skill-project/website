<?php include("../View/inc/profile_common.php"); ?>
        <div id="right-column">

            <?php 
                $loggedUser = \Utils\SecurityHelper::getUser();
                //own profile ?
                if ($loggedUser && $profileUser->getUsername() == $loggedUser->getUsername()){
                    include("../View/inc/profile_form.php");
                }
            ?>
        </div>
    </div>
</section>
