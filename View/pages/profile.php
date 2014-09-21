<header id="profile-header">
    <h1><?= _("PROFILE") ?></h1>
</header>

<div id="left-column">
    <div id="avatar-rect">
        <div id="avatar-inside">
            <?php if ($profileUser->getPicture()): ?>
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
                <?= _("Skillwalker since"); ?><br />
                <?= date("Y-m-d", strtotime($profileUser->getDateCreated())); ?>
            </p>
            <p>
                <?= strtoupper(\Utils\SecurityHelper::encode($profileUser->getRole())); ?>
            </p>
        </div>
    </div>
</div>
<div id="right-column">

    <?php 
        $loggedUser = \Utils\SecurityHelper::getUser();
        //own profile ?
        if ($loggedUser && $profileUser->getUsername() == $loggedUser->getUsername()):
    
        include("../View/inc/profile_form.php");

        else:
     ?>

    <div class="profile-section">
        <h3><?= _("BIO"); ?></h3>
        <p><?= \Utils\SecurityHelper::encode($profileUser->getBio()); ?></p>
    </div>
    <div class="profile-section">
        <h3><?= _("PERSONNAL INFORMATIONS"); ?></h3>
        <span class="pale-label">Country:</span> <?= _($profileUser->getCountry()); ?><br />
        <span class="pale-label">Languages:</span> <?= _($profileUser->getLanguages()); ?><br />
        <span class="pale-label">Interests:</span> <?= _($profileUser->getInterests()); ?><br />

    </div>
    <div class="profile-section">
        <h3><?= _("RECENT ACTIVITY"); ?></h3>
        <?php print_r($latestActivity); ?>
    </div>

    <?php endif; ?>
</div>

