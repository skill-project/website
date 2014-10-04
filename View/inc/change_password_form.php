<form method="POST" action="<?= \Controller\Router::url("changePassword"); ?>">
    <div>
        <label for="password"><?= _("NEW PASSWORD") ?></label>
        <input type="password" name="password" id="password"  required />
    </div>
    <div>
        <label for="password_bis"><?= _("NEW PASSWORD AGAIN") ?></label>
        <input type="password" name="password_bis" id="password_bis"  required />
    </div>
    <div class="submit-container">
        <input type="submit" value="<?= _("UPDATE") ?>" />
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