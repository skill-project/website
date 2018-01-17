<form method="POST" action="{{ Route('contact') }}" id="contact-form">
    {{csrf_field()}}
    <div class="row">
        <div>
            <label for="email"><?= _("Your email") ?></label>
            <input type="email" name="email" id="email" value="<?php if(Session::has('user')){ echo Session::get('user')['email'];}else"" ?>" required />
        </div>
        <div class="r">
            <label for="real_name"><?= _("Your real name") ?></label>
            <input type="text" name="real_name" id="real_name" required />
        </div>
    </div>
    <div class="profile-section">
        <label for="message-textarea"><?= _("Your message"); ?></label>
        <textarea name="message" id="message-textarea" required></textarea>
    </div>
    <div class="submit-container">
        <input class="pink-submit" type="submit" value="<?= _("SEND") ?>" />
    </div>
</form>