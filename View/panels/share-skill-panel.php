<div id="share-skill-panel" class="panel-content">

    <?php include("subpanel-top.php") ?>

    <h3><?= _("SHARE"); ?></h3>
    
    <label for="skill-permalink-input"><?= _("LINK TO THIS SKILL"); ?></label>
    <input id="skill-permalink-input" type="text" value="<?php echo \Controller\Router::url('goTo', array('slug' => $skill->getSlug()), true); ?>" />

    <?php include("panel-bottom.php"); ?>
</div>