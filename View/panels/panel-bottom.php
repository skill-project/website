<?php if (!\Utils\SecurityHelper::getUser()): ?>
    <div class="panel-bottom">
        <?= _("You are not logged in!") ?>
        <br />
        <a id="login-in-btn" class="login-link" href="<?= \Controller\Router::url("login"); ?>" title="<?= _("Log in") ?>"><?= _("Log in") ?></a> or <a id="register-btn" class="register-link" href="<?= \Controller\Router::url("register"); ?>" title="<?= _("create an account") ?>"><?= _("create an account") ?></a>
    </div>
<?php endif; ?>