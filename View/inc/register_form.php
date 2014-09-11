<form method="POST" action="<?php echo \Controller\Router::url("register"); ?>">
    <div>
        <label for="username"><?php echo _("Username") ?></label>
        <input type="text" name="username" id="username" />
    </div>
    <div>
        <label for="email"><?php echo _("Email") ?></label>
        <input type="email" name="email" id="email" />
    </div>
    <div>
        <label for="password"><?php echo _("Password") ?></label>
        <input type="password" name="password" id="password" />
    </div>
    <div>
        <label for="password_bis"><?php echo _("Again") ?></label>
        <input type="password" name="password_bis" id="password_bis" />
    </div>
    <input type="submit" value="<?php echo _("Register") ?>" />
</form>