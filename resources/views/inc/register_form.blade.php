<div id="modal-wrapper">
    <header id="modal-header">
        <img id="modal-logo" src="/img/logo-header.png" alt="Skill Project" />
        <h2>Sign Up</h2>
    </header>
    <div id="modal-content">
        <form method="POST" action="">
            <div>
                <label for="username"><?= _("USERNAME") ?></label>
                <input type="text" name="username" id="username" value="" required />
            </div>
            <div>
                <label for="email"><?= _("EMAIL") ?></label>
                <input type="email" name="email" id="email" value="" required />
            </div>
            <div>
                <label for="password"><?= _("PASSWORD") ?></label>
                <input type="password" name="password" id="password" required />
            </div>
            <div>
                <label for="password_confirmation"><?= _("PASSWORD AGAIN") ?></label>
                <input type="password" name="password_confirmation" id="password_confirmation" required />
            </div>
            <div class="submit-container">
                <input type="submit" value="<?= _("SIGN UP") ?>" />

            </div>
        </form>
        <p><?= _("Already have an account?"); ?> <a href="/login" class="login-link" title="<?= _("Sign in!"); ?>"><?= _("Sign in!"); ?></a></p>
    </div>
</div>
