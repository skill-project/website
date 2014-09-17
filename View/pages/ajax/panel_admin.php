<div id="first-panel" class="panel-content">
    <div class="panel-top panel-btn">
        <h3><?= _("EDIT SKILL") ?></h3>
        <a href="#" title="<?= _("Close this panel"); ?>" class="close-panel-btn"><img src="img/panel-icon-close.png" alt="X" /></a>
        <p class="skillName">"<?= $skill->getName(); ?>"</p>
    </div>

    <a data-panel="create-skill-panel" class="panel-btn" href="#" title="<?= _("CREATE SKILL"); ?>"><?= _("CREATE SKILL"); ?><span class="arrow-btn arrow-btn-r"><img src="img/panel-icon-arrow-right.png" alt="" /></span></a>
    <a data-panel="rename-skill-panel" class="panel-btn" href="#" title="<?= _("RENAME"); ?>"><?= _("RENAME"); ?><span class="arrow-btn arrow-btn-r"><img src="img/panel-icon-arrow-right.png" alt=">" /></span></a>
    <a data-panel="translate-skill-panel" class="panel-btn" href="#" title="<?= _("TRANSLATE"); ?>"><?= _("TRANSLATE"); ?><span class="arrow-btn arrow-btn-r"><img src="img/panel-icon-arrow-right.png" alt=">" /></span></a>
    <a data-panel="move-skill-panel" class="panel-btn" href="#" title="<?= _("MOVE / DUPLICATE"); ?>"><?= _("MOVE / DUPLICATE"); ?><span class="arrow-btn arrow-btn-r"><img src="img/panel-icon-arrow-right.png" alt=">" /></span></a>
    <a data-panel="delete-skill-panel" class="panel-btn" href="#" title="<?= _("DELETE"); ?>"><?= _("DELETE"); ?><span class="arrow-btn arrow-btn-r"><img src="img/panel-icon-arrow-right.png" alt=">" /></span></a>
    <a data-panel="discuss-skill-panel" class="panel-btn last" href="#" title="<?= _("DISCUSS THE SKILL"); ?>"><?= _("DISCUSS THE SKILL"); ?><span class="arrow-btn arrow-btn-r"><img src="img/panel-icon-arrow-right.png" alt=">" /></span></a>
    <div class="panel-bottom panel-btn">
        <?= _("You are not logged in !") ?>
        <br />
        <a id="login-in-btn" href="#" title="<?= _("Log in") ?>"><?= _("Log in") ?></a> or <a id="register-btn" href="#" title="<?= _("create an account") ?>"><?= _("create an account") ?></a>
    </div>
</div>

<?php include("create-skill-panel.php"); ?>
<?php include("rename-skill-panel.php"); ?> 
<?php include("translate-skill-panel.php"); ?> 
<?php include("move-skill-panel.php"); ?> 
<?php include("delete-skill-panel.php"); ?> 
<?php include("discuss-skill-panel.php"); ?> 
