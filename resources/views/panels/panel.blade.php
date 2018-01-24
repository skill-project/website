<div id="first-panel" class="panel-content">
    <div class="panel-top panel-btn">
        <h3><?= _("EDIT SKILL") ?></h3>
        <a href="#" title="<?= _("Close this panel"); ?>" class="close-panel-btn"><img src="img/panel-icon-close.png" alt="X" /></a>
        <p class="skillName">"<?= $param['skill']->getLocalName(); ?>"</p>
    </div>

<?php if (in_array("create_as_child", $param['rights']) || in_array("create_as_parent", $param['rights'])){ ?>
    <a data-panel="create-skill-panel" class="panel-btn" href="#" title="<?= _("CREATE SKILL"); ?>"><?= _("CREATE SKILL"); ?><span class="arrow-btn arrow-btn-r"><img src="img/panel-icon-arrow-right.png" alt="" /></span></a>
<?php } 
 if (in_array("rename", $param['rights'])){ ?>
    <a data-panel="rename-skill-panel" class="panel-btn" href="#" title="<?= _("RENAME"); ?>"><?= _("RENAME"); ?><span class="arrow-btn arrow-btn-r"><img src="img/panel-icon-arrow-right.png" alt=">" /></span></a>
<?php } 
 if (in_array("translate", $param['rights'])){ ?> 
    <a data-panel="translate-skill-panel" class="panel-btn" href="#" title="<?= _("TRANSLATE"); ?>"><?= _("TRANSLATE"); ?><span class="arrow-btn arrow-btn-r"><img src="img/panel-icon-arrow-right.png" alt=">" /></span></a>
<?php } 
 if (in_array("move", $param['rights'])){ ?>    
    <a data-panel="move-skill-panel" class="panel-btn" href="#" title="<?= _("MOVE"); ?>"><?= _("MOVE"); ?><span class="arrow-btn arrow-btn-r"><img src="img/panel-icon-arrow-right.png" alt=">" /></span></a>
<?php } 
 if (in_array("delete", $param['rights'])){ ?>    
    <a data-panel="delete-skill-panel" class="panel-btn" href="#" title="<?= _("DELETE"); ?>"><?= _("DELETE"); ?><span class="arrow-btn arrow-btn-r"><img src="img/panel-icon-arrow-right.png" alt=">" /></span></a>
<?php } 
 if (in_array("discuss", $param['rights'])){ ?>    
    <a data-panel="discuss-skill-panel" class="panel-btn" href="#" title="<?= _("DISCUSS THE SKILL"); ?>"><?= _("DISCUSS THE SKILL"); ?><span class="arrow-btn arrow-btn-r"><img src="img/panel-icon-arrow-right.png" alt=">" /></span></a>
<?php } 
 if (in_array("share", $param['rights'])){ ?>    
    <a data-panel="share-skill-panel" class="panel-btn" href="#" title="<?= _("SHARE THE SKILL"); ?>"><?= _("SHARE THE SKILL"); ?><span class="arrow-btn arrow-btn-r"><img src="img/panel-icon-arrow-right.png" alt=">" /></span></a>
<?php } 
 if (in_array("history", $param['rights'])){ ?>
    <a data-panel="skill-history-panel" class="panel-btn" href="#" title="<?= _("History"); ?>"><?= _("History"); ?><span class="arrow-btn arrow-btn-r"><img src="img/panel-icon-arrow-right.png" alt=">" /></span></a>
<?php } 
 if (in_array("settings", $param['rights'])){ ?>
    <a data-panel="skill-settings-panel" class="panel-btn last" href="#" title="<?= _("Skill settings"); ?>"><?= _("Skill settings"); ?><span class="arrow-btn arrow-btn-r"><img src="img/panel-icon-arrow-right.png" alt=">" /></span></a>
<?php } ?>
    @include("panels/panel-bottom")
</div>
<?php

if (in_array("create_as_child", $param['rights']) || in_array("create_as_parent", $param['rights'])){ ?> @include("panels.create-skill-panel") <?php }
if (in_array("rename", $param['rights'])){ ?> @include("panels.rename-skill-panel") <?php }
if (in_array("settings", $param['rights'])){ ?> @include("panels.skill-settings-panel") <?php }
//if (in_array("translate", $param['rights'])){include("panels.translate-skill-panel");}
if (in_array("move", $param['rights'])){ ?> @include("panels.move-skill-panel") <?php }
if (in_array("delete", $param['rights'])){ ?> @include("panels.delete-skill-panel") <?php }
if (in_array("discuss", $param['rights'])){ ?> @include("panels.discuss-skill-panel") <?php }
if (in_array("share", $param['rights'])){ ?> @include("panels.share-skill-panel") <?php }
if (in_array("history", $param['rights'])){ ?> @include("panels.skill-history-panel") <?php }
?>