<header id="profile-header">
    <h1><?= _("PROFILE") ?></h1>
</header>

<div id="left-column">
    <?= \Utils\SecurityHelper::encode($user->getUsername()); ?>
</div>
<div id="right-column">
    <div class="profile-section">
        <h3><?= _("BIO"); ?></h3>

    </div>
    <div class="profile-section">
        <h3><?= _("PERSONNAL INFORMATIONS"); ?></h3>

    </div>
    <div class="profile-section">
        <h3><?= _("RECENT ACTIVITY"); ?></h3>

    </div>

    <?php include("../View/inc/profile_form.php"); ?>
</div>

