<div id="move-skill-panel" class="panel-content">

    <?php include("subpanel-top.php") ?>

    <h3><?= _("MOVE SKILL"); ?></h3>
    <form method="POST" action="<?= \Controller\Router::url("moveSkill"); ?>" id="move-skill-form">
        <input type="hidden" name="selectedSkillUuid" id="selectedSkillUuid" value="<?= $skill->getUuid(); ?>" />
        <input type="hidden" name="destinationUuid" id="destinationUuid" value="" />
        <input type="hidden" name="moveType" id="moveType" value="move" />
        <?php /* ?>
        <div id="move-step1">
            <label for="moveType"><?= _("1.&nbsp;CHOOSE THE WAY YOU MOVE"); ?></label>
            <div class="img-btn img-btn-l" id="moveTypeMove" data-value="move">
                <img src="img/panel-icon-move-noborder.png" alt="<?= _("MOVE"); ?>" />
                <span class="legend"><?= _("MOVE"); ?></span>
            </div>
            <div class="img-btn img-btn-r" id="moveTypeCopy" data-value="copy">
                <img src="img/panel-icon-duplicate-noborder.png" alt="<?= _("COPY"); ?>" />
                <span class="legend"><?= _("COPY"); ?></span>
            </div>
            <div class="clearfix"></div>
        </div>
        <?php */ ?>
        <div id="move-step2">
            <p class="clearfix"><?= _("CHOOSE A DESTINATION"); ?></p>
            <p><?=_("Select a skill as a new parent, by clicking on the target."); ?></p>
        </div>
        <div id="move-step3">
            <p><?=_("Destination:"); ?> <span id="destination-skill-name"></span></p>
            <input type="submit" id="move-form-submit" value="<?= _("MOVE") ?>" />
            <span class="message-zone"></span>
        </div>
    </form>

    <?php include("panel-bottom.php"); ?>
</div>