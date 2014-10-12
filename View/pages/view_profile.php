<?php include("../View/inc/profile_common.php"); ?>
        <div id="right-column">
            <div class="profile-section">
                <h3 class="first"><?= _("BIO"); ?></h3>
                <p><?php if (!empty($profileUser->getBio())): ?>
                <?= \Utils\SecurityHelper::encode($profileUser->getBio()); ?>
                <?php else: ?>
                <?= _("No bio!"); ?>
                </p>
                <?php endif; ?>
            </div>
            <div class="profile-section personnal-info">
                <h3><?= _("PERSONNAL INFORMATIONS"); ?></h3>
                <p><span class="pale-label">Country:</span> <?php echo ($profileUser->getCountry()) ? ($profileUser->getCountry()) : _("not set!"); ?></p>
                <p><span class="pale-label">Languages:</span> <?php echo ($profileUser->getLanguages()) ? ($profileUser->getLanguages()) : _("not set!"); ?></p>
                <p><span class="pale-label">Interests:</span> <?php echo ($profileUser->getInterests()) ? ($profileUser->getInterests()) : _("not set!"); ?></p>
            </div>
            <div class="profile-section">
                <h3><?= _("RECENT ACTIVITY"); ?></h3>
                <?php if (!empty($latestActivity)): ?>
                    <ul class="latest-activity">
                    <?php foreach($latestActivity as $la): ?>
                        <li><?= date(_("Y-m-d H:i"), $la['timestamp']); ?>: <?= ucfirst(strtolower(_($la['action']))); ?> <span class="skill-name">"<?= $la['skillName']; ?>"</span></li>
                    <?php endforeach; ?>
                    </ul>
                <?php else: ?>
                    <?= _("No activity yet!"); ?>
                <?php endif; ?>
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
