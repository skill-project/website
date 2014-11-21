<div id="first-panel" class="panel-content">
    <div class="panel-top panel-btn">
        <h3><?= _("EDIT SKILL") ?></h3>
        <a href="#" title="<?= _("Close this panel"); ?>" class="close-panel-btn"><img src="img/panel-icon-close.png" alt="X" /></a>
        <p class="skillName">"<?= $skill->getLocalName(); ?>"</p>
    </div>

<?php if (in_array("create_as_child", $rights) || in_array("create_as_parent", $rights)){ ?>
    <a data-panel="create-skill-panel" class="panel-btn" href="#" title="<?= _("CREATE SKILL"); ?>"><?= _("CREATE SKILL"); ?><span class="arrow-btn arrow-btn-r"><img src="img/panel-icon-arrow-right.png" alt="" /></span></a>
<?php } 
 if (in_array("rename", $rights)){ ?>
    <a data-panel="rename-skill-panel" class="panel-btn" href="#" title="<?= _("RENAME"); ?>"><?= _("RENAME"); ?><span class="arrow-btn arrow-btn-r"><img src="img/panel-icon-arrow-right.png" alt=">" /></span></a>
<?php } 
 if (in_array("translate", $rights)){ ?> 
    <a data-panel="translate-skill-panel" class="panel-btn" href="#" title="<?= _("TRANSLATE"); ?>"><?= _("TRANSLATE"); ?><span class="arrow-btn arrow-btn-r"><img src="img/panel-icon-arrow-right.png" alt=">" /></span></a>
<?php } 
 if (in_array("move", $rights)){ ?>    
    <a data-panel="move-skill-panel" class="panel-btn" href="#" title="<?= _("MOVE"); ?>"><?= _("MOVE"); ?><span class="arrow-btn arrow-btn-r"><img src="img/panel-icon-arrow-right.png" alt=">" /></span></a>
<?php } 
 if (in_array("delete", $rights)){ ?>    
    <a data-panel="delete-skill-panel" class="panel-btn" href="#" title="<?= _("DELETE"); ?>"><?= _("DELETE"); ?><span class="arrow-btn arrow-btn-r"><img src="img/panel-icon-arrow-right.png" alt=">" /></span></a>
<?php } 
 if (in_array("discuss", $rights)){ ?>    
    <a data-panel="discuss-skill-panel" class="panel-btn" href="#" title="<?= _("DISCUSS THE SKILL"); ?>"><?= _("DISCUSS THE SKILL"); ?><span class="arrow-btn arrow-btn-r"><img src="img/panel-icon-arrow-right.png" alt=">" /></span></a>
<?php } 
 if (in_array("share", $rights)){ ?>    
    <a data-panel="share-skill-panel" class="panel-btn" href="#" title="<?= _("SHARE THE SKILL"); ?>"><?= _("SHARE THE SKILL"); ?><span class="arrow-btn arrow-btn-r"><img src="img/panel-icon-arrow-right.png" alt=">" /></span></a>
<?php } 
 if (in_array("history", $rights)){ ?>
    <a data-panel="skill-history-panel" class="panel-btn" href="#" title="<?= _("History"); ?>"><?= _("History"); ?><span class="arrow-btn arrow-btn-r"><img src="img/panel-icon-arrow-right.png" alt=">" /></span></a>
<?php } 
 if (in_array("settings", $rights)){ ?>
    <a data-panel="skill-settings-panel" class="panel-btn last" href="#" title="<?= _("Skill settings"); ?>"><?= _("Skill settings"); ?><span class="arrow-btn arrow-btn-r"><img src="img/panel-icon-arrow-right.png" alt=">" /></span></a>
<?php } ?>


    <?php   include("panel-bottom.php"); ?>
</div>
<?php 

if (in_array("create_as_child", $rights) || in_array("create_as_parent", $rights)){ include("create-skill-panel.php"); } 
if (in_array("rename", $rights)){ include("rename-skill-panel.php");}
if (in_array("settings", $rights)){ include("skill-settings-panel.php");}
if (in_array("translate", $rights)){ include("translate-skill-panel.php");}
if (in_array("move", $rights)){ include("move-skill-panel.php");}
if (in_array("delete", $rights)){ include("delete-skill-panel.php");}
if (in_array("discuss", $rights)){ include("discuss-skill-panel.php");}
if (in_array("share", $rights)){ include("share-skill-panel.php"); }
if (in_array("history", $rights)){ include("skill-history-panel.php"); }

?>