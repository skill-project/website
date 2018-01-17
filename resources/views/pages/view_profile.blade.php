<?php
$visitor = Session::get('user');
if ($visitor == NULL):
    $r = route('fourofour');
    header("location: $r");
    die;
endif;
?>

@include('inc.profile_common')
<?php
$user = Session::get('user');

?>
<div id="right-column">
    <div class="profile-section">
        <h3 class="first"><?= _("BIO"); ?></h3>
        <p><?php if (!empty($params['profileUser']->getBio())): ?>
                    <?= \App\Helpers\SecurityHelper::encode($params['profileUser']->getBio()); ?>
                    <?php else: ?>
            <?= _("No bio!"); ?>
        </p>
        <?php endif; ?>
    </div>
    <div class="profile-section personnal-info">
        <h3><?= _("PERSONAL INFORMATION"); ?></h3>
        <p>
            <span class="pale-label"><?= _("Country:"); ?></span> <?php echo ($params['profileUser']->getCountry()) ? ($params['profileUser']->getCountry()) : _("not set!"); ?>
        </p>
        <p>
            <span class="pale-label"><?= _("Languages:"); ?></span> <?php echo ($params['profileUser']->getLanguages()) ? ($params['profileUser']->getLanguages()) : _("not set!"); ?>
        </p>
        <p>
            <span class="pale-label"><?= _("Interests:"); ?></span> <?php echo ($params['profileUser']->getInterests()) ? ($params['profileUser']->getInterests()) : _("not set!"); ?>
        </p>
    </div>
    <div class="profile-section">
        <h3><?= _("RECENT ACTIVITY"); ?></h3>
        <?php _("Created"); _("Moved"); _("Translated"); _("Modified"); //possible activity ?>
        <?php if (!empty($params['latestActivity'])): ?>
        <ul class="latest-activity">
            <?php foreach($params['latestActivity'] as $la): ?>
            <li><?= date(_("Y-m-d H:i"), $la['timestamp']); ?>: <?= _(ucfirst(strtolower(_($la['action'])))); ?> <span
                        class="skill-name">"<?= $la['skillName']; ?>"</span></li>
            <?php endforeach; ?>
        </ul>
        <?php else: ?>
                        <?= _("No activity yet!"); ?>
                    <?php endif; ?>
    </div>

</div>
</div>
</section>