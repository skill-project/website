<?php include("../View/inc/profile_common.php"); ?>
        <div id="right-column">
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
            </div>
            <?php
            //own profile ?
            $loggedUser = \Utils\SecurityHelper::getUser();
            if ($loggedUser && $profileUser->getUsername() == $loggedUser->getUsername()):
            ?>
            <a href="<?= \Controller\Router::url("profile", array("username" => $loggedUser->getUsername())) ?>" title="<?= _("Edit your profile"); ?>"><?= _("Edit your profile"); ?></a>
            <?php endif; ?>
        </div>
    </div>
</section>
