<div id="share-skill-panel" class="panel-content">

    <?php include("subpanel-top.php") ?>

    <h3><?= _("SHARE"); ?></h3>
    
    <label for="skill-permalink-input"><?= _("DIRECT LINK TO THIS SKILL"); ?></label>
    <p>
    <?=sprintf(_('You can copy-paste this link anywhere and it will directly point at "%s".'), $skill->getName());?>
    </p>
    <input id="skill-permalink-input" type="text" value="<?php echo \Controller\Router::url('goTo', array('slug' => $skill->getSlug()), true); ?>" />

    <?php include("panel-bottom.php"); ?>
</div>