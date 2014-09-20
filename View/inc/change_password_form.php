<form method="POST" action="<?= \Controller\Router::url("changePassword"); ?>">
    <div>
        <label for="password"><?= _("NEW PASSWORD") ?></label>
        <input type="password" name="password" id="password" />
    </div>
    <div>
        <label for="password_bis"><?= _("NEW PASSWORD AGAIN") ?></label>
        <input type="password" name="password_bis" id="password_bis" />
    </div>
    <div class="submit-container">
        <input type="submit" value="<?= _("UPDATE") ?>" />
    </div>
    <?php
        if (!empty($errors)):
        foreach($errors as $name => $message){
            echo $message . "<br />";
        }
        endif;
    ?>
</form>