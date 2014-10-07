<form method="POST" action="<?= \Controller\Router::url('contact'); ?>" id="contact-form">
    <div class="row">
        <div>
            <label for="email"><?= _("Your email") ?></label>
            <input type="email" name="email" id="email" value="<?= $email ?>" required />
        </div>
        <div class="r">
            <label for="real_name"><?= _("Your real name") ?></label>
            <input type="text" name="real_name" id="real_name" value="<?= $realName ?>" required />
        </div>
    </div>
    <div class="profile-section">
        <label for="message-textarea"><?= _("Your message"); ?></label>
        <textarea name="message" id="message-textarea" required><?= $message ?></textarea>
    </div>
    <div class="submit-container">
        <input class="pink-submit" type="submit" value="<?= _("SEND") ?>" />
        <?php
            if (!empty($errors)):
            foreach($errors as $name => $message){
                echo $message . "<br />";
            }
            endif;
        ?>
    </div>
</form>