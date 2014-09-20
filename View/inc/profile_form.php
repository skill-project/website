<form>
    <div class="profile-section">
        <h3><?= _("PERSONNAL INFORMATIONS"); ?></h3>
        <div class="row">
            <div>
                <label for="username"><?= _("Username") ?></label>
                <input type="text" name="username" id="username" />
            </div>
            <div class="r">
                <label for="email"><?= _("Email") ?></label>
                <input type="email" name="email" id="email" />
            </div>
        </div>
        <div class="row">
            <div>
                <label for="languages"><?= _("Languages-s (Comma separated please)") ?></label>
                <input type="text" name="languages" id="languages" />
            </div>
            <div class="r">
                <label for="country"><?= _("Country") ?></label>
                <input type="text" name="country" id="country" />
            </div>
        </div>
    </div>
    <div class="profile-section">
        <label for="bio-textarea"><?= _("Say something about yourself"); ?></label>
        <textarea name="bio" id="bio-textarea"></textarea>
    </div>
    <div class="submit-container">
        <input type="submit" value="<?= _("SAVE") ?>" />
        <?php
            if (!empty($errors)):
            foreach($errors as $name => $message){
                echo $message . "<br />";
            }
            endif;
        ?>
    </div>
</form>
<br />
<a class="password-link" href="<?= \Controller\Router::url('changePassword'); ?>"><?= _("Edit password"); ?></a>
<?php if (!empty($showPasswordResetForm)): ?>
<script> $(document).ready(function(){ $(".password-link").click(); }); </script>
<?php endif; ?>