<form method="POST" action="<?php echo \Controller\Router::url("login"); ?>">
    <div>
        <label for="loginUsername"><?php echo _("Email or username") ?></label>
        <input type="text" name="loginUsername" id="loginUsername" />
    </div>
    <div>
        <label for="password"><?php echo _("Password") ?></label>
        <input type="password" name="password" id="password" />
    </div>
    <input type="submit" value="<?php echo _("Login !") ?>" />
    <?php
        if (!empty($error['global'])){
            echo $error['global'];
        }
    ?>
</form>