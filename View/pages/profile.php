<?php include("../View/inc/profile_common.php"); ?>
        <div id="right-column">

            <?php 
                $loggedUser = \Utils\SecurityHelper::getUser();
                //own profile ?
                if ($loggedUser && $profileUser->getUsername() == $loggedUser->getUsername()){
                    include("../View/inc/profile_form.php");
                }
            ?>

            <div class="profile-section">
                <h3><?= _("Account"); ?></h3>
                <a class="change-password-link" href="<?= \Controller\Router::url('changePassword'); ?>"><?= _("Change my password"); ?></a>
                <?php if (!empty($showPasswordResetForm)): ?>
                <script> $(document).ready(function(){ $(".change-password-link").click(); }); </script>
                <?php endif; ?><br /><br />
                <a href="<?= \Controller\Router::url('deleteAccount', array('csrfToken' => $csrfToken)) ?>" onclick="return confirm('<?= _("Are you sure that you want to delete your account?"); ?>')"><?= _("Delete my account"); ?></a>
            </div>

        </div>
    </div>
</section>
