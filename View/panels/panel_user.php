<div id="first-panel" class="panel-content">
    <div class="panel-top panel-btn">
        <h3><?= _("EDIT SKILL") ?></h3>
        <a href="#" title="<?= _("Close this panel"); ?>" class="close-panel-btn"><img src="img/panel-icon-close.png" alt="X" /></a>
        <p class="skillName">"<?= $skill->getName(); ?>"</p>
    </div>

    <a data-panel="create-skill-panel" class="panel-btn" href="#" title="<?= _("CREATE SKILL"); ?>"><?= _("CREATE SKILL"); ?><span class="arrow-btn arrow-btn-r"><img src="img/panel-icon-arrow-right.png" alt="" /></span></a>
    <a data-panel="discuss-skill-panel" class="panel-btn" href="#" title="<?= _("DISCUSS THE SKILL"); ?>"><?= _("DISCUSS THE SKILL"); ?><span class="arrow-btn arrow-btn-r"><img src="img/panel-icon-arrow-right.png" alt=">" /></span></a>
    <a data-panel="share-skill-panel" class="panel-btn last" href="#" title="<?= _("SHARE THE SKILL"); ?>"><?= _("SHARE THE SKILL"); ?><span class="arrow-btn arrow-btn-r"><img src="img/panel-icon-arrow-right.png" alt=">" /></span></a>

    <?php include("panel-bottom.php"); ?>
</div>

<?php include("create-skill-panel.php"); ?>
<?php include("discuss-skill-panel.php"); ?>
<?php include("share-skill-panel.php"); ?>