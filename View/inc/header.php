<a id="main-logo" href="<?= \Controller\Router::url("home"); ?>" title="Skill Project | Home"><img src="img/logo-header.png" /></a>

<div id="header-right">
    <nav id="top-user-nav">
        <ul>
            <?php if (Utils\SecurityHelper::userIsLogged()): ?>
                <li><a class="blue-link" href="<?= \Controller\Router::url("profile", array("username" => Utils\SecurityHelper::getUser()->getUsername())); ?>" title="Profile"><?= Utils\SecurityHelper::getUser()->getUsername(); ?></a></li>
                 | <li><a href="<?= \Controller\Router::url("logout"); ?>" title="Logout">Logout</a></li>
            <?php else: ?>
                <li><a class="white-link register-link" href="<?= \Controller\Router::url("register"); ?>" title="Register"><?= _("Sign up"); ?></a></li>
                 | <li><a class="login-link" href="<?= \Controller\Router::url("login"); ?>" title="Login"><?= _("Sign in"); ?></a></li>
            <?php endif; ?>  | 
            <?php include("../View/inc/language_menu.php"); ?>
        </ul>
    </nav>

    <nav id="top-main-nav">
        <ul>
            <li><a href="<?= \Controller\Router::url("graph"); ?>" title=""><?= _("THE SKILLS"); ?></a></li>
            <li><a href="<?= \Controller\Router::url("project"); ?>" title=""><?= _("THE PROJECT"); ?></a></li>
            <?php if (Utils\SecurityHelper::userIsLogged()): ?>
                <li><a href="<?= \Controller\Router::url("viewProfile", array("username" => Utils\SecurityHelper::getUser()->getUsername())); ?>" title="<?= _("View your profile"); ?>"><?= _("PROFILE"); ?></a></li>
            <?php else: ?>
                <li><a class="register-link" href="<?= \Controller\Router::url("register"); ?>" title="<?= _("Register !"); ?>"><?= _("PROFILE"); ?></a></li>
            <?php endif; ?>
            <li><a href="<?= \Controller\Router::url("apply"); ?>" title=""><?= _("APPLY"); ?></a></li>
            <li class="last"><a href="<?= \Config\Config::VANILLA_URL?>" title=""><?= _("COMMUNITY"); ?></a></li>
        </ul>
    </nav>
</div>

