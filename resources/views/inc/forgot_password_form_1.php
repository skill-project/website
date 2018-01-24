<form method="POST" action="<?php echo \Controller\Router::url("forgotPassword1"); ?>">
    <div>
        <label for="loginUsername"><?php echo _("USERNAME OR EMAIL") ?></label>
        <input type="text" name="loginUsername" id="loginUsername" value="<?= $loginUsername; ?>" required />
    </div>
    <div class="submit-container">
        <input type="submit" value="<?php echo _("SEND RECOVERY MESSAGE") ?>" />
        <div class="modal-errors">
            <?php
                if (!empty($error['global'])){
                    echo $error['global'] . "<br />";
                }
            ?>
            <?php
                if (!empty($errors)):
                foreach($errors as $name => $message){
                    echo $message . "<br />";
                }
                endif;
            ?>
        </div>
        <div class="modal-success">
            <?php
                if (!empty($success)){
                    echo $success . "<br />";
                }
            ?>
        </div>
    </div>
</form>
<p><?= _("You don't have an account yet?"); ?> <a href="<?= \Controller\Router::url("register"); ?>" class="register-link" title="<?= _("Sign up!"); ?>"><?= _("You can create one!"); ?></a></p>