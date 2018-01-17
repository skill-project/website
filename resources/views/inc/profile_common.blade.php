<header id="profile-header">
    <div class="container">
        <?php
        $visitor = Session::get('user');
        ?>
        <h2><?= strtoupper($params['profileUser']->getUsername()); ?>'s PROFILE</h2>
    </div>
</header>
<section>
    <div class="container">
        <div id="left-column">
            <div id="avatar-rect">
                <div id="avatar-inside">
                    <?php if ($params['profileUser']->isAdmin()) : ?>
                    <img class="avatar" src="img/SKP-profile-avatar-defaut-admin.png" />
                    <?php else: ?>
                    <img class="avatar" src="img/SKP-profile-avatar-defaut-logged.png" />
                    <?php endif; ?>
                    <p>
                        <?= strtoupper($params['profileUser']->getUsername()); ?>
                    </p>
                    <p>
                        <?= _("Member since"); ?><br />
                        <?= date(_("Y-m-d"), strtotime($params['profileUser']->getDateCreated())); ?>
                    </p>
                    <p>
                        <?= strtoupper($params['profileUser']->getRole(true)); ?>
                    </p>
                </div>
            </div>
            <br />
            <?php

            if (Session::get('user')['username'] == $params['profileUser']->getUsername()):
            ?>
            <a href="/profile/edit/{{Session::get('user')['uuid']}}" title="<?= _("Edit your profile"); ?>"><b><?= _("Edit your profile"); ?></b></a>
            <?php
            endif;
            ?>
        </div>