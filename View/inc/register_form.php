<form method="POST" action="<?= \Controller\Router::url("register"); ?>">
    <div>
        <label for="username"><?= _("USERNAME") ?></label>
        <input type="text" name="username" id="username" value="<?= $username; ?>" required />
    </div>
    <div>
        <label for="email"><?= _("EMAIL") ?></label>
        <input type="email" name="email" id="email" value="<?= $email; ?>" required />
    </div>
    <div>
        <label for="password"><?= _("PASSWORD") ?></label>
        <input type="password" name="password" id="password" required />
    </div>
    <div>
        <label for="password_bis"><?= _("PASSWORD AGAIN") ?></label>
        <input type="password" name="password_bis" id="password_bis" required />
    </div>
    <div class="submit-container">
        <input type="submit" value="<?= _("SIGN UP") ?>" />
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
    </div>
</form>
<p><?= _("Already have an account?"); ?> <a href="<?= \Controller\Router::url("login"); ?>" class="login-link" title="<?= _("Sign in!"); ?>"><?= _("Sign in!"); ?></a></p>