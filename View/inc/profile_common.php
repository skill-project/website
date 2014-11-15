<header id="profile-header">
    <div class="container">
        <h2><?= sprintf(_("%s'S PROFILE"), strtoupper(\Utils\SecurityHelper::encode($profileUser->getUsername()))); ?></h2>
    </div>
</header>
<section>
    <div class="container">
        <div id="left-column">
            <div id="avatar-rect">
                <div id="avatar-inside">
                    <?php if ($profileUser->getPicture() && file_exists("img/uploads/".$profileUser->getPicture())): ?>
                    <img class="avatar" src="img/uploads/<?= $profileUser->getPicture(); ?>" />
                    <?php elseif ($profileUser->isAdmin()) : ?>
                    <img class="avatar" src="img/SKP-profile-avatar-defaut-admin.png" />
                    <?php else: ?>
                    <img class="avatar" src="img/SKP-profile-avatar-defaut-logged.png" />
                    <?php endif; ?>
                    <p>
                        <?= strtoupper(\Utils\SecurityHelper::encode($profileUser->getUsername())); ?>
                    </p>
                    <p>
                        <?= _("Member since"); ?><br />
                        <?= date(_("Y-m-d"), $profileUser->getDateCreated()); ?>
                    </p>
                    <p>
                        <?= strtoupper(\Utils\SecurityHelper::encode($profileUser->getRole(true))); ?>
                    </p>
                </div>
            </div>
            <br />
            <?php
            //own profile ?
            $loggedUser = \Utils\SecurityHelper::getUser();
            if ($loggedUser && $profileUser->getUsername() == $loggedUser->getUsername() && $pageName != "profile"):
            ?>
            <a href="<?= \Controller\Router::url("profile", array("username" => $loggedUser->getUsername())) ?>" title="<?= _("Edit your profile"); ?>"><b><?= _("Edit your profile"); ?></b></a>
            <?php endif; ?>
        </div>