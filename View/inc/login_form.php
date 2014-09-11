<form method="POST" action="<?php echo \Controller\Router::url("login"); ?>">
    <div>
        <label for="email"><?php echo _("Email") ?></label>
        <input type="email" name="email" id="email" />
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